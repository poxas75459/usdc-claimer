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
    "5nc372whNFz9GwVzDhaB92PjDazJTXgrdquWNpqoJoYQXWr6GmvkzHVsXpPUZLwYPJpXJohQMMHgodSyrfRCxymx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46tSFSCfFz1qaG7u113u1DHMVRu5z54DNvhjtNLwqw32xtJEi7pNdsF9JT3i81cihAJU42dKYZWfG6YFe7CDbvJD",
  "key1": "66hmQWR9yZVgBst3XdVNfVcKzktgtpLLpLyz7KKGUzDeW2P4U5vLnbqgyLRqfBpX8dmEDk3zmY9NUA9YkWAMZMb6",
  "key2": "3vNqKwhakJ12QUdqi1oo7y39QZChLA3gZZS2DmmHPsoyNPJMhRwBv8fcrU1ggELfnodEWLmetjvGfBJpWJJ8cj8w",
  "key3": "2rZAdPKc5AbQMKbKXCmTxLS8XTCgJ18WxJ8kNR6HArwcLooRxN8ubLWQVLGLBCTfhJiQkauFgf9EbXkdfjEvUW4c",
  "key4": "5tVB2P4ofip1m6Dra5U3P7FQDVn6L9Lmdp6iaUCRyD8ZdeA8CQMsCJvK5zM6XYFEw6QNVjBRgotXTcHNRqi6eyYY",
  "key5": "2tmNpiQ2dttHkrhWRRHe21mFrC4aKnDWVgXekADMuTzxKFnyieaxUgDG3zQPuBN7rngpPwMCPb5Y5k56PWtjyHkB",
  "key6": "4EKYQJ6vqL1dzRExinJx63vzE3XAdMeou5QhrWS9q1zvi74YPRPAd2pNXh8LjKFMoahCUfgtrxkjFG1BzLF8NKnX",
  "key7": "7NBo9jJsQLT5ujt4RiT5crFakBX99WFmwxuXTRgpP1MXP25LSvuTF3L4NWS8kGxrH7adMACmsdJnbt67MTNgzu4",
  "key8": "4zXRynksXvKmngRtj3DrbUD4YqfPUozNXS4HtvREzK1Nst8ofeiqxFRGQ6izBocUkHvF4iwfpYzSvWv7XwHHm8pc",
  "key9": "65NdfaNPzHdDkamVxiKb2Dr4wHp6p6bg5wuXjDXSepNzktZXwNyLJiAys37E2gf37Mp5TWXtthzDuPWAwdbKF3zz",
  "key10": "3WRnyouMDN8GGJsQcUxjwFJjnph6mpJJaEuGbKgxYLk3MZaUoph3xRK6V4foFztj8MmYJPd5XV5k1hXFkFKggGne",
  "key11": "4d3ww4GVjhoZYbvtvQgBYtcE5GGYeqAAbmWq3RbkEQjWnbVACwbnqWnDSbaHALxWAxhwiHd6SVbrtbfzTi5eT2eq",
  "key12": "4iCaHxuxe1yQAEEUwngTRKURedduxPgpvg1cnAsHfeHErhuSQrpHnyTvALwfKVUYAGDyqYpzJvadtUd3aJJcEYG5",
  "key13": "5gVva715jheQWNfVRQWByydrwL7c6jekC3LfkWX6CtZw4FB37nQ6itv2eHgEH9yBBjvpqqPaHNz9m5zMBP34GjsC",
  "key14": "2wTKvQ2Akr6LRsH6ww1cPHKX5RxiDWDLokth4WzrfBPDUf5VzQXNdepsnRVUMvPwXjwgB4KWEUHUmnhVS1YVqKAn",
  "key15": "4iXtHADi75Rj6zHd9jiyMaAJ7Xv1b2f5eXRFQQsYCKaRy6jvixaRBZfW9JYfSAm4R3rfXTnhYT9C4hb2QX3owEnT",
  "key16": "4XGuLvoHcWUHger3tMiTByVFXB6UB4aWxyAvo6pSTB4xZMKR6ArvhCQmuPvSJh2QX1tmQS7JZGoRT21u19odzHFq",
  "key17": "49v43oz3nQW4V1MKy4DXm3o5zYiyi3PukVTtDW3um2FWXSTvvtt9XqYCiyDr2Rpy2fKCGwrZX32nv5zKvhZrjeJC",
  "key18": "DVbJLoN9iVdKbG76qtgbvYFb6yQFwh9cdB8cz6PKr2ofL7kE7rVKyK8xPKDNWwbg4s5LJGx7RVdg8Wzv1W3r8Zv",
  "key19": "2pdx4iynzXpffzpa4fMJL9vwZEpoQJU54XQecaRHJYaZjyULqtKiymYm3Xx5XZhzfGQtqnZ3v697BcXmAi1yHoaD",
  "key20": "3NUrkoQf3bSQhChF3kjkmcREnKWPLUmvvXr3eiUtLn7YLGHKVcWaUPNSQLnDJ2NrnqnjmTnN5oEEgr6K5LwHKik6",
  "key21": "fcVngqDMSdpCaupmgkSYRKJuJ1XmNwgKtTtDHCa5ec6Hqxy8MhZHarwy7C73T5kQgTE5AprVHRJoNrFL1nYMRuB",
  "key22": "3PDAjDuNi4GHU3Ho7j2p2g8uW21P4QDKLhB7BYbwHwLhTgfEua29Ron6V77TTyzruJD12eFqas4YxurjpD1BD6BX",
  "key23": "47bbHuqfJbGgUAyayQMeLMjemZgdkXniZfVsgVrcBnuGdJeCYJ2etokpk2mscJKV32jdQPCaL5V9GdMmCfTdV3Ts",
  "key24": "3TaizHZGNAGmuCHwPruMJ1JHmk1kMaEg4FVGzbxPf9sAGZ7RM1kJ6hPbKxTGKuuoiJ1RgKhjKhM2ECUvATpFPu83"
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
