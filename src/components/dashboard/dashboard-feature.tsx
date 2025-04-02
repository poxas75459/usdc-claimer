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
    "piKgSW4mDP6k9H13UeMLMiY9q2htyve9BXgU1RTEcZm56HTvxNugwJTPm6aQvjEK7bhmLWS5B1cbRf5AiDcNwcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZyvyggmfuZkjNd59EsheXruaeM6kAJqhF5Ujqio4CeUBGBga9za4qswsvzR1Qwb3b1W7Xhgek8hMok6KMAQnSD",
  "key1": "2ogM99ffo8XtZbk9suJrMn4zSPWMbxmDYqCX3APw2WyVV3VoiVxc6C1J3W5adpGBNb1nKcWnvXSs8Xc3zVenXjga",
  "key2": "2hfW4vWSZNXTPPKUkXBgANNma2DcMNmta6cNDzavxmSYqVjRywueDR5kjS757V4wsQyzu7C52fs7Sm1JykzbKAyD",
  "key3": "62HhKd5fGjYv5iY3eWeGucZ7toM12k8FdQ9nhEb627F6qkmemcCxMRkT3jGcvU3Tm97fN5wAV3VoekUeb9unUSsN",
  "key4": "hnGKcuCZ9HrCaUw3WbukpyMrpGqgxPNNtfququwWb3ggnRMZNj1Ks6MdU19HdYmYk7jsoJwsykN91tEzTYoMxSy",
  "key5": "yc6woMS8WixfCJr9wVV9Dmwxhgnih8UNiMKFCvwuiWvKQqBq2WpF13434HF3yR2mv9z5XP6LondzhbHN5Z7huVL",
  "key6": "5ur53oQRHHvBb5zDXH2KC5GgGaFBpnNpCUyB6X4WSF6J6V4ukRKN3kQ5CVkSdyDUnGw82t4YfygT4axYmdYDDpbP",
  "key7": "3nnjQtLwJ9vo9YoJmxChKjqevkLhC2FwrsnbYehgdJsE6ijRttisHw5gNLvWgo8gP6raEi6iQvp852ngG72c9jH",
  "key8": "4oHornxSzcTKzt8jKW5jgLUjZdtgrxHRiZtCXoRepzMQJrC7hY6S7dgCSuMNQ3qWvtr5MdSqWJ7XkWsAGyogKcrv",
  "key9": "5RS65F6ysWNgqRfqw7AFfQq8maa4dn1ty45usscbGTQiEhFGEdzF5Lh2YE2gWyuCFFix2ZngxqZhha3pwMW4uwEU",
  "key10": "2FvYSWNopsmY1BF6fd2JKnpcjxHaULFaAhMX9svQuHFPCKKDo5nkxmEHvWoR8fDLJPRARpbUhL9cn7drW1ob1h8P",
  "key11": "63kkUbUABaYMuQYDfCcAuAF7moMiK8iVLZbE3jH2RLaST5Zjv6MyfVY7wnQi5VnHv8Y71C3L4Yp3QNTipvesy9dh",
  "key12": "4gtUJjreXioUqecPvoVRGLn5kzWgMRev4q27KxzNv36k9qpEi82h4iu61Dep2P5MzXubfjKo49qXLTCsyaELxTse",
  "key13": "2zHZhUrHvQrEMukG5UXaq7DqiDR1phxcReqAQc5GVPoqJUUC6FAKdKnjTr5ornKY4SeH2NN8JLFY1Yxm7mNswvYP",
  "key14": "4MeSekQsdeYHpxJYfVRsy7bTTQYcXLsf66rGixJhFb8CELEw7U2o8Y1wRft4uNnDzYCeGWdyygXTHTms26mqeJzs",
  "key15": "5aL7HamyKKpkE3QTUnuemGFhRYJThXzwQDjGFNSvvv1AUqBCbRZAd1QP1yGtBEroZzVQh8WBSXYaDSXTTnzXxhAy",
  "key16": "3yCUSYkKT9sLsdGbd3HbWHJfmMYNoe6dYVuM2uF6tGskGZM8gNBNxgzxdQt7eEiouFFsPrhPzRodSGVxNWtvG1YZ",
  "key17": "5kq5aK5iPJPY7T9FuPgL4uWSTQi3aFXxWPMaYnFurMGeEDt1vZyaJU3tDpSktR62cAiSBvb67CiUHjTsCRQJNjr8",
  "key18": "2jy7oaKQA1Prrd9ykV27oDN2jjmE6VF1FSZwu2LCJKNXJvrqyRkMPXPRqvSXXXTEbtgTaMoFxxEsihHjTmeJwUnD",
  "key19": "3n5ibAFB5CDhdFSFCKumLaVGBYFfUEirfRH16ymyDwSyJnBMMPybHhfi7DXDu4rTerN6J7YBS6NWsMJjKng2xpzL",
  "key20": "4p8uXAnH8QKTdNQ66D3kzMUo41wz74oAoSvDKYP7237C9YnjMGqX94zzckcDc7WazQeNovdsiNVxi2nyRHKQgi1W",
  "key21": "5LCEMauPwqz7Mdx2gagi7NMZxre78WSW4BA7xr5FP4NeWQxi99jNtYFP7aWBwoqdMZZEt4LwnQUcT2oY8kDhUSBC",
  "key22": "7RHBN35E4TzK5Pss1QSF4TNzvNQAHErqhUTD5sKkLaF1oZHdvGTfD2fmgvziSLvsrxUnzqpWEdc7YdxUBBx5op1",
  "key23": "5YK84eeZD5KSKqS7ALQf4g8e9hvY5wtgDDtNJbHxGwJCxg1WaN2bTD48DP88kRmVyXxc1zLFWpupP12znydwxvVG",
  "key24": "45Xum4CXGA3NWMF3cHp4PneQYfWUes68CQHuvY5Zyssyb5P4FVBxvwR6F62fBcjTRHAWfh1pbj8DAbjh6mWBeHDW",
  "key25": "3iNnec9MoXS67hVwov1Gf1BEvzmisAHwWzpFYe3QmYBDnc9VACGmVYAq7ThJGLRN1cuB9yEMfeQVTsAfapMstXmu"
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
