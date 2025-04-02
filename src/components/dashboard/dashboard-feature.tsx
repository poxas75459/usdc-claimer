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
    "37wnNxWRR3gZQ8yB9VoFrca3tHHDpjkg8QnJWRrsdA9axiwppbUpi1u7cvNQikkeCG4imwH99cmz9ANG5hCYN3cN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pMQWNUSKsEsSYF8f9TLTZF1WRKZbwfvz9s5KAnYktzmQ1GMA6ZzYqgfJo1gxmhA8EHHdrcF6H5gaVUmQ7M6JUH",
  "key1": "MEATUNZSjuaoLruFcs3hW7mVgMF28EYuJKhhfb93vw1Ac9V3hNuS4AaAxdZR6J8yGVPN7PTJSBShEnT1RVkjTLR",
  "key2": "oyoKF6vGRG52SVxTrye8kJHf5xRRPxjzxGbVDyi1UMA9K8dQ1bjUsSQn2AeJyptsYm6hDkoJF3cg4gfPopMHLPy",
  "key3": "2eZf4w7GtMu44UKE3GHt5NNHmHKi8aLKdaVpZddrC6XefoEJ4hLicPGaKZ9h6mnhhFabe44z5ghZegLRCGndX74F",
  "key4": "4uZcvcqp4AReBH8V4in36Gy18VLsQYCwjNGLGVFo7GPtVAd2WNDSgn1co4EdQyZsK2Z5TP9yZYzBtQHr44NoT7uG",
  "key5": "4ykBAhmfPh5ZnjdZhLJ7223dAoKC5EDnxdR5byharkGcoBhKTkFRpVQKbTqivm42TxoRdBGJaKWgrTuLfBUvAiTW",
  "key6": "538gKrrbtzMb9f6M98xPCvmVF7fSSksq8ePqv7RTenGdqGBSw6HJq38p1xDxX1TiWFBzJ5EH4t5ozizrQBKcb9KN",
  "key7": "5PJfrM6KQcM4cnQxWedoNkiTLvzgTwJMMzqLact5kPiXTQKa7i3N3MyebiFF15yZ7vWmabDmubDfi4gH87Bds9tk",
  "key8": "2X7gy9GWCrFKACe4NHCfHnggpTqAoNz3TMX5PVHSc6ukiBDsPmNGK1y2EuqEknd7bnq5UYbNnBLWu7FRgMvWUZSw",
  "key9": "5vRV7iMidsmvEuN9Gu7htnCvojic7iFU7VKzXdkXmqto7xShccZHZ7HnW74yVce6Rmyp1D1Ny3kugWGgzL6bmxfL",
  "key10": "5cenKWpydtzYXq8ApTCwzN25vL6shhcdpQbiDoCFu4akB6QY5DM4fokxrbksU8cQdCN3mdMsQyv1aW8aQtPc26oo",
  "key11": "2QYYk9phBYahRBZTSE9EPWAYPsmAWmktvX2ZxhvJLe3xpt9AmzozR5rLuh1P8DqjwYvhDGm61QUN1dFYNkS3cm69",
  "key12": "3Ugu9Pa2jeMfaAnxMk5XSX5GR2GPeYZroMLp8GTLGCPt2DDz766rMsm9fk2Wwinnq56Sb7a4XeWL2e8puxEzcec4",
  "key13": "4H759WcrkSnFAGZheXHrzbA4csjqUmiGGSfmcxSZCKb77iSuippBto3VAMjn2YMEsSNkgSv8GhEW8XkKP3ngY2zR",
  "key14": "2GdhZBQKCHyfZJXks26AsxBNZD5NyDpkkZN7WHLH4Ms2WB3UYpeARDdgQyiaDMCxJtcc9mzE7F1Vb6y7eg263Gbk",
  "key15": "tRQ4AmNM2VKYmCoUdqqP27MYD9USu5CHaGk23adnrCHekccmbdr5nSK9DRA8MC6FumtAQbFynN66mrWgJEEfzxh",
  "key16": "5xdMwqGQQByHaQHt1nXqGnaoo74FW6xN5ygEaY7qFCvRKe29qZB69o9okiKjMBws7xacPjHfTixkeXdpGctXRxoP",
  "key17": "4R7rveBZBYsuNQ13thyiYRJCE1JeHSkbsxWuMbgb39p3gBdTAqpFBCBVYBLyaHkq9EKoMzo8gMNckoc431YUSPsn",
  "key18": "5fKGMj16WJmpAYGKxgwMnYrap6GhqSHXZGKrdQCRsLGzd7p5ED14MchjSNJar1hycgCajGJaHL7a3VHD4KJ7Tyyj",
  "key19": "2bRn1YKgMZ189pm2S31bwgGXtxDVQCQh5mHyzu7KPZUZ9xC9uWPKgXPiPQnxvszLq3fzRTSCSKNNpyqLiU2UvF2A",
  "key20": "5ZXPML9wrjEHCZFBMuzVo47UGMRadarXHFtAEcDcATuNeDdG9JMzLVa7sLuJxPdmr2Yku1FN37WVLTuvRHkjoBiA",
  "key21": "3yq4z8uF2aTTM289NmfpkQNdxXtArAamcH6BbZFCuCCGniW8GBvhAGgSTksAXErPW9cMt39L9aBPGbbsHGa8LwsP",
  "key22": "4MqF5akp5jRjSXzB9b2fqzPjgzJ1VMmhXuHKCgw5NwdRvUM8BKCUfsD7WVS5gKdtyfUEkU5Ejzvd4yxRAW4dqdDi",
  "key23": "2eeQmkTZYC5XDaPgfgBasy7eWGCoYGzZFpUw5mJ91Xa3iywdnDQLwSfUT92a67u8MbGMxtV4k2LwVvk8bh5X8WTQ",
  "key24": "5kVZF5v7SBhWUQ21qdE8YFucCqHvvitFGxXgCiQqTzDTVd6F52uBCdjtKnt9Fxt52KsQ3HgywAgAxNXEbG5iiz2T",
  "key25": "4BiQLkJtjXCRVw8YdCDKHoNGKBivmzkr63phuZpwUvVdWBiATUoxngSbSJ9AYABtwTjPJ3FF1pabByeSFcWoPtPK",
  "key26": "2shPS3vGWeSM2S7r6ncLr68cnvVictbXRXwyUDhC7P48DtxtiWFMfAdB5kR36mQomZaqcb4PDwvmbiN1AJ7a83cX",
  "key27": "5jeMwFUJRmssFdQhTo6bN9txusmDkDwSCYKQxS4z89XXX3s5FcBmYT9jRHCeA38uKpLScpDmftNYgfZ5adZwFYnN",
  "key28": "3YqwPGZaAaKU7xcxdpG7haJgRGaA4Aub8vcb32ret9arBan3xtbLbMoG3H6rGfxFptLDj28qfzAX7AUvjbVdCfUq"
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
