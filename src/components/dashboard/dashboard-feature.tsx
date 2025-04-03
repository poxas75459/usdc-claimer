/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4umHhQV3pxb1gTP2Lh3pCLNpZ4nuyjCKXPZLmsND9dG8tECBPX87xe2a4NjPQPbw4E5vP96NS2yKBqF33r8ynakQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53epx9Mjb152AGdZYRdZZaSS7Tyg2osrVf16NuhNtV8Y9xApsaPF4KcRWFm9HjpWMiPyZZJAfBqQgG4mitiRQzsc",
  "key1": "4dJcZyuL98NAVoV4MTrfgE6Nnt1UqXGASjpYo7NDCFPuiacKhrdWz2y3PbDSmSv91vFVW45jnQHQHfBd3HWw7U91",
  "key2": "5BEgme8gvEJBY6tKCurszqvK8pR5DPwj3BBr6nJDamBHou2QEQ1s3vtiFbgpVvzDqiM3XvfJHPMcocebrqVMofHG",
  "key3": "2yu7yus32FhcoUVqtjDVxmPKfb9W5wyoYrrgrZF6jCx7siASQuRyZbCvAp7Cg4nQQnZuCwn2UqbFsMe7BSqBabEc",
  "key4": "5kBzTEjMsTcLBdHGw3RnYndPiQB6SDxmjVbQ3hzfynsGc1DuFSMKxmZowYgr1j6rbTwiV3HmA8JmRaAzcGHKxPcR",
  "key5": "NZdvSHc8DLDNyMShn632BsV3b94pcEtMH7KwazkFk9iyU1WLBpVvRvLssjBZQznYAYjPxadzenMz1WHn2tGqjp7",
  "key6": "2MJdL2DcjygjjS8YGX7d9hWW81LJEXpi1EocATNtA6RcP8YgJAFb9dMZrtEFfCQpZ7CdXNFMbkPgvU77k28d6d88",
  "key7": "5cooi553b4ZyTCkf4DXXdU1P4AK1SdbUqJrjCKtkd5AFsveEjegV7yw9TDZ9yfhqgpRYFJY6ytpVv42GdRwv8NxY",
  "key8": "yj4Zd3sKJPAQceLvHSTa3zaSC2jjvzq7DxyB2j92mUAwzFmtgAwsDkgGaRZDGeBaSffMV78wFefdU2No1KYN81y",
  "key9": "REa995Cjim8JpdLYwz7Cm1TKn4NSH6C5bo4hZ1X7frCNftGiBoMdX9jD9Rnan9ePaZMjUEpYY7QmtzFHWZ1qJ2v",
  "key10": "4TUYC5NeKNh5sGJcWGktunXxaCV3eMzCthYsvM7bSpzCjPYQv5KohpzbywtoBvMDcaLSnGjYaS8MkaTVUJ2pbJkc",
  "key11": "2mCSKrLJD2bqq253hUEbvrY1a6mr5Qw4PUYyU6EYaY9BTjPMsJ9DzH6z7rjpxX4EQjFEb9vmCLY3KBuSnCheew3P",
  "key12": "4vid7peB8cCxWAFKFj7Ku9BWjm4mvF4jPgKmV8G4oaKXNSZithWPv3CWWqypzaKVivUWcf1Ygymbb9nFWgHhP4hc",
  "key13": "3WzJTwXECPmx5vTFmd8bWrSF153Jod8vz6oYtc9Ct5UA8QbD1P1gF9vhZ9oeQaee7UsPUuMYW1e8ZXDDe3NR6c79",
  "key14": "54iY9KFk2WkfKz3v2E2HhphrzD4fDJcVHn8PSLcq9YNz3HLB1YfP539XzXsRcUA3nuYYqz4R2Vz2w768Zo76QQgh",
  "key15": "3jCpDF4nWBBbcSGbfoNKGUfGf1cxvb4w4cThFsZU38kvCXhuiLHQYdd9bGg4ijDtCyZVNTnpXENaCidL2stsCeK2",
  "key16": "qsdUsGYdKedQQbYyj3gn1wizfjTsYgYPDTdxHBHFtgZn4KynZeJKqnTRE2LGhJjyofrqnZ6fFfgdQuSFLKva8gZ",
  "key17": "4YmPe8fJn316DjGuv9BYqY1Y6aXN5Q4dRAJuwEuvXPpx2H3XDykL8jaUDThwo2VxoQs66WSrxWDcDpYM6kdVtmEK",
  "key18": "5oFvAoNMViTNFAMUavy9YNVT2sZb2LC7fvY3TApBYFxyN74N3f1pG2KKXR7ZG26tBjRuJPswYNuaRkz16DQbsj8Q",
  "key19": "5WjWf62Q8BBLXMQzHAUiZoAqJDAgKCUHDWyHKZUVkWyYGvA9YducvpfhmBLBGLF8ng8ppEuvd54hN4EBE3uPT5Vd",
  "key20": "2vYiLhFVuyCwAPVe8ecgqLpLKXurRy5VCESFg9KLxBWnFwJ2VQduoUTUXDkoL78M9JrTALTSx2S6Gefcq5haqxg7",
  "key21": "3CPNHCDP83S6U3KBgQmK6BnX2LLc5MDyCQy6M9Sm5rsXNxDe1pmDobUukT5x774iDktTkff7zidRCeCP8f1AHk48",
  "key22": "4qQr5UDrT56pGLQGAbCLxgPgLKGHDTQvSnvDWGcwsiE93rqRyNwGuDZbB8BTtHLu53BbtsMwCNnAxxLuAa9yDnxR",
  "key23": "3jVMNtqPpTYnYugkYiURXMo2bDYUzqVH1gSsq928DQQeK5pHuRcWVci9jAYgKuFv1kY7xwYwBhEkPh7Gk6hXud2j",
  "key24": "5kso9AngeBt1QYNmM1NYabfbqT7a5YsFkQMH9tdJDuqxpHS9qjVdE4HT3m8vECCWmk2D5sgudQXiQwTaxv7g2Prp",
  "key25": "4f4zRPf47TpsWFpGLcQ5fd4HqwnyMRZn53uriLiWuxe31wSxkiVcRbLsyEHu9eBLUt4RyE2Xar2dWpoHRf7Kv8sU",
  "key26": "65J6oXoHkWHqxhExfqQNUqjcrufLZ63FuJhzPEgaqYxKhwmWoCBiL5RYJsvi3fEsZUUxnyqKDG6PZi7DMqVnWuBq",
  "key27": "3nCU1UxC9QQXSuawX36QwADkY65xHPMUzQrBzn8HrnoqxbSMNdHcsPPY1GMUVz7U9xfhhG83NNnx4Poechi9KS8P",
  "key28": "2iJv1us53EQUhFGUszuhnr7WS2uR7N5nKUyULE5NXAo7XDUCgcHERLUNbaZyQs6JiaDTqT3As4veuDzb7G6z7h2C",
  "key29": "7QrDq94oMGgByDN9i9Uh5JUCxwWXzy2AuczbfzL9XdVPtUPBcg1esbPRM9iAVU9AZEYMNBE5ekuUKETfKbS9pjq",
  "key30": "2ZUKzCBR79KvfgABneJeCqkHscfKUxjK9zivceqziMgJeexrFEqaDPQM5MgxugfCCj4j7pWvmoD5KSgcFSMPKqhR",
  "key31": "54TdPjWXw9nM5fbHqHbCrQq1pQ4Yz6yCjX1PJGqwCBF9WVMDDPkSSWyQNPsWiByoqLmTijXMRU4JusLn25MoPdBD"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
