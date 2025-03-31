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
    "5RTShNbHhCLvQVKWuY7QrKnk3HmrHbGjDS59JydjndsKe44PK6CbnGG7BsbqwmTZQ6ZvaaiDgyTUMMZuPpEtAEFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5jcYfMWm6C2sDVshk6JCN4EmaD7a4Yu6w2G9EdwAJjuYrjRtBi9BAMfNpx4HedURHsardBnUqtrEv8tx84DrbD",
  "key1": "37G3WYt5wsY664La94gqiTPFyctgRxxv4fDFWtEMjeKGxLT7rUuFFeQxsaSLHW6HAKvTX2wEBfCS1zehyNN1WxpR",
  "key2": "2y3DVHDenQnqhm6fHgt5gHRFo6cjh2sNn6afjPdfzLTQU3enDs3BhpwvKr7zLPHfv1VjMauWA6LUyXdGaUBx7X4x",
  "key3": "zwbJ1K2RVmnKWHiF4uPeoxo98vhsUqcEo7Af2VPVYv6Tr6ffMTGx3JfPzBn9Wo4AEnaVP18FUkV7C7TXkx9c6AW",
  "key4": "3G42WC23dxAqJGWUkW4joDmzEX66CuweCH9Exwye5T2vhX1jghmz7br8Kmkxy3RNh2gwpjh7ZeVMKRCLRc1UnfeF",
  "key5": "QyhshBAPiEirqf65fCz75GJYZCv4jVLZAJ4XFvVd8vf9wnmy1BJJn3EfroaCFZqNK5GEC4WJm13mkrNpDpcuzzj",
  "key6": "tvTU7DtgjnRKgwZ7HsRCN63u5Ahot3bZ59uhDfETd2o1MKbgPmPwg577GMCxZ3seb69yS8Gkn1WbwK2vCySBNW9",
  "key7": "3MKQGwemvxtj7dD2eotSBqV6GUqjLmGXB74VJuMtshQ7ysUcjS1k5pDQo4VkvJ278oKAdhkNbucaNuAy5ESpwvrJ",
  "key8": "4Lnios59hJuiA7d9MuLanUE8TX3N4PBkqqA79RjYrv1wAf3vFoLtetYyZDhcQjqYSbSppAwkwKrDU7YMdU47xRkR",
  "key9": "4kjr3jJngWDjmtrHVMkpySszsEoJwRV4o6w9tW6Wo2TjUrMv2B5yY9s8r9j1sRPjwz8H9MH97yZ1B5Ejb3PAFTf1",
  "key10": "2eU3bH2ke3gnjV3vMwD4X3S78hAmNxhXBT8xKbCJYjNpHNCGxFhP3mZxBCzCdyN9ekBkYUL5TS99pqwL3nSLC1fF",
  "key11": "3YazifMXhMwu6daniHLnpnQ5XkRDgFSQ4fTrmj9r2sSV2tktKc6L67jT9HNSJwKmtXBkkiC3xKMTxedvBZtN2Kgn",
  "key12": "3NgW8zJ3L6pwY1iUmuU9no5ei1RdFeAyswMPA1nkoMV2XjCQB3neEkifh2gsmDZ5HkZL4dqfj1EYJEtesGVxxQ1c",
  "key13": "jGSDzDkC9MkGFhMX1ArQ6tzc7UPXtFXg6Q8vPWzV4rdSmXMWzZTqdLeXdsdYSnhreumu7FG12Xi4muuGrzga1bS",
  "key14": "3cmoNHKGzjQ2MuwU5aLDsVoMo7FVrprJvrdFrKCBNzFRoR7RcyBbxpqsroudawgPw9mu24won6QgKV7P4v3PTBZy",
  "key15": "3d629boCKFJVPyBRdibVMcstc2L5yKHpcVCtQVjVZaRpzUVEEJx84rT59XuoVocqZvSA2e7wz1KSQcjLcqi9xW5r",
  "key16": "3zgDSJzbrvtwDHjGtUXfR2ynJkF9sFkAATzNYewZTx97hUororGy4rF4jZk3FAk6gEzhYXTeGT5XbBZnCiHXQCxm",
  "key17": "5kGuq6QVNQVP4P4LfsEgak2kk7quKvJNtsJurxqTDUsPjTyU9n2GChdeESXSbfpyL1TwbrLwQjVTF7GDfZdKCKxk",
  "key18": "5QR8BGnzk5FomnvpfEWyrTEiPYHEUdwhRn8xXWqg2JnfWF8TqCtowCjBj19svUABEx3KkkqkWLdPCUSHkUNZtgfJ",
  "key19": "GmsCg3ezwwPtisvtndVAvRcJSaXWHiFrtTGjN1tMarWnxBmfAGyPsEWss4sggcxv1oynmvfcwRJPjVvt2WKqG1G",
  "key20": "2Gy3Ct1Mxrut9kpdokmQ438iTJVJA7MRdkCeQXeh4oK2FX9h9Z4oKnE4oDm3AV4sAajxK5fmpMy4S96y66vs2C3T",
  "key21": "b3u58Z5WhaG5oa2zmdP42t4cBoWiL3KJkiykbW32aCCHYpTmVnQdvye5CUCszv8SSzb2qPs31Jb8MEeZPtEEoKF",
  "key22": "5cKNeZLSXuTsRiHuANknv4uHjmXTS2dFeX79c5hFDA76g45GFH853QX9LkkAmm3fxEBQ1KFhWNprbmhb27wHHQD",
  "key23": "KrDQDTz6KQHYwdNpSfehMXNbXGurC1qnoczJkHYhijnZM5Q2R5VUZzoSZiiiAAV7GLKU7EPjPhCyjjJquTphwr4",
  "key24": "4SqqXBndDfBbAHJXvyCkU3CU9wps4yVwcm9Z8CyLyekEpRj6kayEv1EhYdD4icQEKuoMYujkcB12NVK5anYdaAEN",
  "key25": "2GYvxw2hpbZ7NG1cxgVfFmbEKv4enhpzZ9qiGa3dEhA5EQcVkrCmeAxWELAmRKsc1sHQY9VVdZAbDkWPkdJnmg4R",
  "key26": "287Z9qZ41HUeiGdmTwv1UwmStKYTMfWP3xQaEKiZFRjRcuUSuxdybZLheg9QvzLDdL9j78JGEK1omfgcSvNp4xcu"
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
