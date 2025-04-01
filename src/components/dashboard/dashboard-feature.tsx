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
    "3g9jMJUoxUZURvQ6ozQWo5YQPwrstcjnLdYQJbCAeU98a4Erj6K178z7KHTYnGesESMQKzBPSWtYXAKiZXWgqNED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RfapBhFW7W2ghtqfj2zuoW8qUw8HSNSEx1FgPmRzKAyV5pq9vbj6Hr4XL2Uftaxa7CbxnkLChz3fkYrjGcYgwTG",
  "key1": "5rnZSzZWzcWSqwSmsC8ArXMSZKCvA1WaePq8ZvxPuiKMPYGScH34VUQkMtrdUDPq8yT6JXiEt8o9pRVF4nU4ZEWb",
  "key2": "3f4qbMgTqJ4Bb4ro7T3en8T9vPtCrDgQsdmdbkNGLaZ7ZSBvsm3mHGb9SMcu5WWxDt2FWkhStTmcG2Xx7f2N5aUv",
  "key3": "39ztkRaLkdKxgaUkEFdsZ1MEQAjGjtdsh6fSfoRTAdprbeysdCBzCumZxECydd21TNERniXUv7FnVc9UP6BC4gYH",
  "key4": "VZVsMNGd86pVhLkdfM9aJXAjQRTnfdMkUVgCLTJLfJqXCffWvqVPUBqb4xy5RU8w6W3AQEDoGQKZePX3mEwatqt",
  "key5": "5JfKzsjkBD5x84tns8P7dwkDJaAznwrvv7VnuSjwDLrPKt8swNmynjodq5in6AyU7QhRLKprmQUMaztvwVgWvCSC",
  "key6": "4fwWyTCRE1pC7CpWtQJGtS9XHKGhxz2vbGpv7ZFrjjeYsUNFimkvaagu7VaX8DHtFqxt3ckitwvukWa8dodcrmk8",
  "key7": "4Kjd9pm9J9hoZTmuRQyRqiDbBthC2kgMS515DzJ8T6D6cQRKbjejBGENUGh7r6DbDPmUb9vUQwp8DsKKa7jQr6uW",
  "key8": "428pYMMWhvH41kzP9fP85kQAEwxtPcdEXowSGakvcZHYao3nMSfhwWGbnZM2Ep77RfPjYTH99nShvsua8XSgMW1c",
  "key9": "DVt6fZZmBtyFYWJS15rHrh7n1ozPA7Fznn2xJ22h31uzYDptYFVWaw7PD3QqxRVDkrgHk7tX58P17SzniRkp6gg",
  "key10": "4rKWjjzxdLt1SASvTVRABxueuQCooFnMZYq93EuRWtssPfHWSMK6uJRnFn2d5izdzbJojaYaQLfJzAbWjudDriAd",
  "key11": "4jfebA9cnXXzEBocYSNKXSxEFEcr9oCuRNsjrZqssDc93MT8c9Lm74zprfmzPBtfwCPMpSvgMhWqnwd9K3xYiLUV",
  "key12": "3phVrxM3DHuPCCbRy84WXj55mUtzVZCqMPiq2qFxtqDP3D1Z11813oycTiFyKqJcKJJe8iSxeY5sWfzzsdGP8fWa",
  "key13": "2FXX8x6crRTjS6MSwQLKoDfviFwJcmh8YarhnCBtydm7n9wSWmcy32r8ueCjcnrQ8eZ4roHEY3AraKL26Uez5o3m",
  "key14": "zTzJUUbPppYWfzBLGNWsUhy1JN8ZSmans9LY1sVUW4b49uTsWH5M6skngcX7roFQnossc25rd3pgQDAe4Luo2uX",
  "key15": "32bP94Lp1uyt7bAvH9bepJW4RV2hMprECiQCbCqmkQiuYVRA1Hen8BgMHwbDoGLA2A41Tv97ryn16RAPTxnzf3Fb",
  "key16": "2HbXMzZ8yYMi1Cf7wrbc32MvmckeaQesA56VMyADvnV31hDSwDsNCUCMoBT18FzMwYMic4kwzYYK43MVJHLopR2D",
  "key17": "28LEvaqEBQYFwBf96ykRJNhaXEXnniEQ8hxsykn7sQDHwhbhei25WwyghfweSkVXdfbHuKr18qTFAWxewN9UR1yx",
  "key18": "2qDx697iWtZeAHs3iXPLd7BNAyp9ML3TKbbJsHDGqEGC7WnYEz2o5SSq6Rt2VFCAGZYdBroSagQ6VsEwnoz2qmZb",
  "key19": "mBwXo4D9Ao6N2ZRFYuxMyMsPFx41R9hbVunU2Gww78VWLoC2VrC9Tr19Lu6adymG5fC4hBTHETY2ngqNmD14aCK",
  "key20": "5wzjhiEKhFvf7XvX1Vqs6LHmJSuwenYdcRC4aQ9qw1mwoexS4ewKNynbJ63fcLpGsch2sxzHvy362yX33Qt5Yvxp",
  "key21": "3ZJG5d8GeTSrYdaRFrjL1nvTnjwDteYe6ce1Br9mKQvsiCudHHsSevQi3mKnaU5ggXjk1furbGyLYr5jeXLV2T1Y",
  "key22": "4T6c223xAc5tE7adMVQQFxNjjRefEu8A4Rn9LDuem1kqFHfS592k2mWC6VKtE9uTFhzP9W46Uw4e8rVuF1LgThCm",
  "key23": "4uLWZWnNvqtkZ1RMzbkYutxosSgqqQGvpKa7NVNLQGa36Lr3aeDFqe81S62mWgbEsngRXmroFqmZwNKYQKosAWr2",
  "key24": "32HXXv4Vb5GJ6uAdr7JQpXHfkvyQzcXaJY5USHU5jorAj5krp7tAQsACqBBefQsTJ3v6NFeJaq2kpXhJr1TgwHyk",
  "key25": "ZBe4xAfuKjHAed2K5hGqSssuT8a34hJeo1Y3DLhguizqnLjywc3zreahDUQZs1x9FcdcKynFBRGXzq24SkSE2Lj",
  "key26": "3qq1tryLNnUm4jDjjMk7HggzKk8CqHHKdigNHZxm15fgs6UrG9vkhXyrZRdNpHbFKUSgaW3BhC7KZs3YKBE1AyrK",
  "key27": "iDNTSJNdpXRXApRfBSbL6BY1nFCsaw3y7okA6w8f8ya5S8CSEX5UbEcPbwiFHHw7XKf7U2UonxpLQccRrDj47xx",
  "key28": "QkPxEYEHqeCtHFtqg5JeguZvbt3sJisVeUdbG6qUjUoa8i4ePKbf5JtVHCxW5bdsPUEA9adEmWYqSfExf6wVRzs"
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
