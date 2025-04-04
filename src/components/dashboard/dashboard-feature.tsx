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
    "5gx5WWepo4NAAvo1sdGQLigmdCZqNXtzaTNhnT2tUgYYXxuLjQ9j4tyjm7NBFKwhW9urmiapj5ibWURUT7sJmYpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ud7emUYw5p6jEKBRXcB7XS7sGZnRJJFsghiMcJGxWQPsMU1PLh1pHUqZPqFwJ6J6Gd8EjUz9dkY8PYdxbmNwk2x",
  "key1": "4G2NYBXCSNCDWA2GEZg5PBHGYF4jaZEQLLyq11wtzoGJuvqFLuMRnUjpoq25ZBRKA1p5KQymZCaPLsNcLWmvYHij",
  "key2": "AuWeLG6NNbyQKUyjQCiZin2LJhyM25PN7mgci8pQQvRhBH2729w82fi3EKfMBdSbdkLDFhNeShEr1WzSURdnSCq",
  "key3": "2r6gH4hsLpNu6vepSsdvXZrTuq84YidSw5tG2B7SeiP2VLqK9jz6LTopgWKERJVf4zmM9mbn7z1ecgKyDbHXJdwB",
  "key4": "4ewf1EbVacVCKwvf4akqFBFo38HAbz9Qmov1AGWHrFCqdPRyk9EVr6NFqP96EcD6URx7x7rQ8dQstD8y27QisMPh",
  "key5": "2wrVD5ivYQs7A1kAdmdUVJo631ZcAento5PGztU3ky4mJ3fc5EAwmAvoY6QpUkYz4zAzTcnQpK5WCtbvY4sKP2sD",
  "key6": "23bLtRXjh7JvgMyKroqmp2Vh1F4Hb7onHHEREGCKNG1kxujJVgLCUmrTBrsznVgfxP2UwAaKaLKNwngsXy3x8236",
  "key7": "fGyrYSbqGXXED6ruF3PmoNiHeNDjHkWZkcZAJ8MRW1myreBRonZyZ9yWZnZ79qPj9HyeHwMVgE4sSneFkkvZ5aM",
  "key8": "MBbZsUMJW22riou92rExhjVXTG3r4DtCvfo9jBUBZ7waqpYR2mvt7ycLrEMeaC3snQWKedwRjd6geMedydPpESz",
  "key9": "ntWemEbMxFzabBAMjaHrNRzzZAoJRXNHm726a5WQWqTGkUBEPnYZ6fYE7QezrHwKVx6XUn9HggzEanvnCFBkxns",
  "key10": "4xoruCVEBzXuVGbw9t8uaRMbCRZXLXP9HHQn2yoTALt8X9w3ovYQuFqFe93PJpxUCuDqg6iN1HAVkBhdHHVkqf8k",
  "key11": "3dvivs3JmuPxWSC5vpG1hafbBWy8W2kro8cBtEwJrLPdA9uEedgi4Zm8Fidar6GEmPGCZ7AzmaVsiHLVcx6e9QVy",
  "key12": "3UWJRtWY7ZZSoV8VYfig1nCa2PAhsgmiR4tH4WoPy7b1id3TbMJcMMq6h8YjYaha6jM5EX2xA7vCsEXuWK7duEtR",
  "key13": "5p68aKzn9a5Q6TX2ZZay81LcC21jKhWiXz6995oAahQcke4C6aKmG91vup2AgqLm7qWYdnvopdJudoYTD3fdjcnH",
  "key14": "DynMqnySdaxnzbYEZCfAYXBXoneAZvMjL76o3Tnezmk8UEkH7cdVSgr553GaBxZMAzgixmKKtqLen6TxjJv7HKB",
  "key15": "2tzaSefjwwKFAakFM35Xw1iLaEE1SpDZKsRrV1ZXyMFnQQE3uXjRhvhwvZpfSkqb4gC6f4UAJuCEyx5aK3LjJzS7",
  "key16": "58TSEvF11dN3DeRFEDwRRrazRHynMeAUrpVBdiEJeEZ7n2xhVdRT4ViMxboQ5fgJVyjuY7Pc9bRVpnk8PS9Kub9z",
  "key17": "2BZZTq18zxTeiebfgSiNACmWaqL4N6BTFCSiQXGPbU16hpMMRHqPktu9DSMsWGv953nhnA6MjzAsaC3w5HaNBDKm",
  "key18": "MfBTx9MqdwqrQQe8JoEJeQxgc3Qe4FtiPwUxNVPuVkWPSHt9cqMzKNachyEhVPQLQAnku83yvfuqAo6CX2HfjVP",
  "key19": "5xWUkvnuJNfqWETrgynxCfRHaiYcZ9SjEBrAs178BsVStAeCjkZgCd9cKQxtB6k2AnRMv3geaSP5syshzfCaoMkZ",
  "key20": "5bEY8d3PtKHCc85KJhNuaGgmHZrykKwMhATGHniYsVqSsew29mEYHRC7cjqJJquJnSjUKrpvYDgbQ2DgoCoFdDfs",
  "key21": "4jg25TXukdSYCV4RrfcMCVyJY5DozfqhATFLkkU7Mk5w7LQ1W1xa9iaoq4SeeXU7sG7vatBBPFQK9bpsN8wMs9yU",
  "key22": "55PrJybuKb87mqPSC7v7j8Vi8UdXsmwuHbjc6JMur8ntfuNWdgYvcTnjcK1pBfh5vdMbmNGjoG9b7FYvNyqKKP12",
  "key23": "4pTnxitv1C7pPhyxrZt1fFX5PDyvW46aJbyqM9FiWzUeAznm1waVmVSu4P2aygjk7F679KyN8nMiTFPYJxxYot9h",
  "key24": "48H2VPDffNFHTqKc7x3LSUcuMLT8VonQ3Be2mkB2ANUmYEXviSKwhqoPhhbFoXSCTzHWfQJFPRSYPnFgrJdCGPfG",
  "key25": "4YFsqXpcC3JP2UF4L1GorQt5kHQ3Rn13ZXxdH3LSqB8kGXA6CPEwPZr5hbav37JgpAQukPSRwmqqNKdWXm3YzQv8",
  "key26": "nFEoa88t9UsUA2WQAsTcZYGAN4DoZVEvRUP3MHzQ65uPJ7NJB1jKyvv6EqidhWHrdQy2iLhuqTQgtA6uyzpmHxo"
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
