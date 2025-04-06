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
    "5yzbWdg2JFRFRAnXc5MrRJEzbjEmQa9vesMeULRPj4aJQX56YU6rLP1vP3rcCepj7KPXMFFsfEtvBFeVpCA2vyfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STii2qscrXGYeEfQtthnjoTCySFGrM1y6L3r7TzqVXzpspALqnk2h89DkCz6dRHeuDtHjJNYVxDHH6npZQTEBYL",
  "key1": "42CNxfpkVCWDDZccxtTfPpQVSjgjB7a5ebt2WUnmKwRzoSbTRaY6PKMda8HpkCrbqYoVbrHbaqj6jGY9jwNK8cay",
  "key2": "3gktqhm61hvoz7ARXxVtkdGnK8cpep9YUfPY3PdetYvkTgtATHtNTuUnh6WXJYRcpj1E2YXFuPPdFwuUMZ56NYJ1",
  "key3": "3ET4fSazU4ajyutSfAGePo4fzYot31AMTbrhPn3FfFU9QUsRUXpvqBZinmP6V5rG1fv9CDNVC2rURiyzweeLFKBh",
  "key4": "eng5xJkSPeUVeJD6e7TbY6pxHUqFjVLcJNioiiYRkSzsRszJe6cTYN7qKkwoAUwB4DGDAy5RGgAiB6JKoBhcUK2",
  "key5": "sPuicSRVuPEWeD8TkpAECbBg2PFPYb1wAJjz3UeqRiswkekk3upvoqfpX7s75WYsmUcYsgUmgjVus8N94o76ikZ",
  "key6": "5APPTgvjUZRxATgMQvCac77hwdxU3P3JciuvmLNdR6DhBzjTqL318dohzZ3GqNRAYsskkC93N2QoKHG4cLcmZZNh",
  "key7": "4hTEAkoaomKeFg55fBhg3it3JdjjfCQoWAdmwBr9pNHVMFDGXq4MkvEeB5K25fbTCVwBcPzm8N8C4oUesxQdJiA3",
  "key8": "3zUEU7o8VhKn8nyDA1B67XV9AFS5ycJaxY8bDPcFAEguBVWp1YHHNagLezySVaC8VeGx7kzUF7v6bSKoU2cMZZy6",
  "key9": "2JeidCbnDcd2vj616vXEcmArKHvdMq4PcRc8Xes1w8EJMRwUECWJNcZU22EdevC3ZLsgiJDG1jfSZpvwQFzMd2bv",
  "key10": "51oSpkFriAWgC6nHEm6U4uKaBWPMv9EVJC4Fddq2wEMqwEpATRZViD9ezcsZ4indVHVaB2zNpYsY9P37A2tf1tWh",
  "key11": "3hygFePjQwMAgARu9bJhdsDEv38FbLEfeeqXLP6FWjLWamUx4a8xDFkKMdDWQKHykinhsBeXbYW4zWzNewwoRb5Q",
  "key12": "rNQvVH7tJ6Ne4ZJyM8TJFvxtUG3iQMFLXQ8gFqyxa45L9x1K1R31rgF17q2ozkTSUyfSvMZMQzP86d2r6zXvLcE",
  "key13": "4e67DnywQ8xpi9ZZfjjPGuVoRMVcxjj7mCdAZ2dM8dJ9Ew2H3GLXZ4TNsYedL42Q4aucoox3ZMPjJV56SdkKCRGA",
  "key14": "HtQZLntRfL5sT6bhVB5Y8KqdJsRQXRoxsy3Lxh3zAAQj47VbYCE55rZEPtQvw9jy7UN25Ekx3VLDAQurFEP2pq1",
  "key15": "56BucKBPzygZ3VfJ4348mWVwjSbeqPCWP3J2PgZH7xHy5iJLViw62jeHXFCjVzZefE9arzxLTWB9Jh5KukUd2Vf3",
  "key16": "52ej9QitXWohKXo3H87iNwWVGaxk22RGz45YvHhX1woi5xiiz2Fhmtpxgi47eqYJxCjtQ4QU1QWNmS1dR58NC3H4",
  "key17": "yBpifaymE9N1AtGFgfDxExhUTyWvW3gqei8FNRWZnNNZERutoLBF4eYzQ8xYWcZLLwip3MQHvdB8R6gz2Ch8ZmS",
  "key18": "ceFF7LvTvsckQd9YtPmAYGGe9mcdmmzGq7JJWrC5NK5orEt3W7EhaNAVHwYW5dGDTWQRtcTJtZSnBDFgw2SxoTw",
  "key19": "5mNWp16xE2sTXA7hFj4Dr2W9wa7DNvAip7nBT2utnqepumN9cYNAMAJ7dfTHDo8Pj6P9b6CS2b6axKgA76FEB5zQ",
  "key20": "2KiLB7vqCTHsqUuCFmBLA3cHPefgNXmMZcnw5YFUAvZxkH7jSYkNsSoGFjL687NYRryxpv7jGzDDpLToAEKUKGSx",
  "key21": "5z5v7VyDsyXeRqd78tcU92E22nb3ZR24R9cn7nztHtnrx58Dz5jCbd6osKjFNzZavVDPLJ9FcgzBSArQkrY5oter",
  "key22": "3t5c3jPV1oeMoUjF411xn7B2JgyGojFmHWox4sggE4hs2zHTG49iyXDbLGWcjwCSKuoupeBcUC6FAHbUeFqbmPuU",
  "key23": "3XVahsPwY2KGY5Lvcs8sUZhdhHphMHDdwSyVyRSqUwPQmBKLXPzZuvAUxjjavQb5qZMrzRACfrarQ1bbEEWQfwfM",
  "key24": "4rkY2zumVP2BKZjguUHUJVjrzYL4Sb3JseihXtVnEAn547pQNrHaUyrPWSYAYp7h6P5Xv4TABsspYEoEtwg4fCK4",
  "key25": "5iZtnZyC2hDMMBo3dDfmDFLruDSEPgd4hvyrR8Q8zC1zo6rqiyovNC3dL167EYP4NHsxNSg1RmRPsxYZDG5PiP7K",
  "key26": "3oHqyM4PRp8h1KW6AUivaisor1eFaDjxJEJ2tLqPNDeFkLxi8MdXo4MVyRXRVWGasyngefJGcb1eU6v2DNGkkXGU",
  "key27": "5cLqBernZw3w4mAH6yG4uEQqca4UVJXdXkgU7umMcRi7vHH5U5LeigKqptgucMT8D6jjxNUZ8bA3GPyg8m1YLovh",
  "key28": "2urPFptHBfdmXSnaXoSY6fnDywaGn4y3MN8mMK7Xwc1pZEGsEtu7MkUin3LEJxS2Q76cEaauMwcx3EmfCu4duSM9",
  "key29": "6MxzDMPZwcwLsKRCCCwZSQGTM1SKmr6dzpXGUYpM6vUUvp1Z9B2rGRzPVTWvjM8Awo71jeKJv4ukr8BEeTSN7RV",
  "key30": "5Wc1nTbBXWUqnaU3nTNUiNEY5dNERkkmJSPnptkTaKEGxKxdvn96TMT2tx6bEeJggckkAM6xqWurDMu32eA9cGnu",
  "key31": "Wp5jqnHTo7LPaSr2JNJ4GVbFzcZBJhQVLQmgsAm4kqCmWLjWC5Ezj7G3gmjtDJQHnduoGCBXUkBScPo1CeqeTec",
  "key32": "45fm1BcqG9A8xYXNGXQWQ6tYDDQGy3vRBXkAbA21munDQKtoEGYrCENqRqwucKBe5QZ8TjMiJGYrDdKAxmRoh5t6",
  "key33": "56a7zta427GWrPSixBkHjD3WzzMB1gzbKeS9ivoaLhhT71MA4BVZavnMt7wr3R2m6nYJcRN2FRSHkMHD4MN7tpay"
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
