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
    "ZGp1K88iQVEdah2nyF4YEW56d5ZgumdFQuZkRT7LEgZas5wQsADn8SA8JxEavLnKzHZGEYswJKfZ2WouHNYmQhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MmyNH9ZgzyZsnsGcU3VbagBBS2NJFoz6Zqx58t3DMwbiCVSE4Sh9gzCDSrJRrn1r1b6S3vXGGRvar1mn59wgNqW",
  "key1": "5i2doMcf5uPqqYikzYfK9SsqhxnXhPSiUDX5e5G5Ufkf2m2L6UthwM7Hs6Kw4UXihQ87pTYdUi1ETDTEijE5k28s",
  "key2": "65qvGCythXaVTaSPDuh4WVWfnKpLuba8HLdz71nh4BXuPJ9uYKWV831Gy3qn6XjaJ2NPUof4d3SmXL3x6tRTBnJP",
  "key3": "3FbYNGHWhbb9EMnQNQVD7d2cHseQ2839kwxp3Fvi3V6aoxXXTmbcyH5kR9ygubcw4LToqa7JmA96QsSFGhXYresJ",
  "key4": "DK3AWeyJL35PVEPFR2n7y1s2y8FGL26q6fEKrFJM7Xd8PEyiTMppEvW2Qiaj1kfhApJXtWGNHyBEQcykjLYH6PE",
  "key5": "3y3UMTYnTs5FKH4e1atEjKENJDYcZfpXEwu27qtJN5m4GRH2hL9nC2RSwhFW68KYP1ZtUz7sK4RLQYsYbnperFLW",
  "key6": "5syNnU7pqSkjwfQh1uaoCHfseMttHNik61XFh3URkXgJmpuCPidCxYZEzTnMmjEy7LRDjPFWDDQyMpKm22vDqgQc",
  "key7": "26YpNTEmQ4U6jrP162V1wAWGsNeFtmLfSGgAZQNP4gry6mBmzLii7v8cWcP6p1CG1fTpxne6y21FAhFoSJEZq7kG",
  "key8": "2iD2PB91saSs6Jq5qjE9hiMJ1Q9GqtsPTbjrAF21zMMz4pzdkyHFrgyn3Xt2zEU7hdHffomcmBg7a3iLwK339mij",
  "key9": "21KNftUmYxmcoz3DTP3BS7bffBAphaGa6eSR4Vwku3Fr32TckZ6FaaGsEWappWkPPNNtpKBh9guxw2ktrrBL9MCM",
  "key10": "2E3yRPcUuWRiVkFGVZ8N9RqLWUQMkknGCzAKdWwmS7qDym9qhwNkfVeE5vBfQiARt1WQrhJcBXzDkhczxNr4nXLn",
  "key11": "31GJTA1rjUUmuqEHG4uVKgDaafJ92wSxsdDBNkSw2Dt5VCprJmFTLP8A4wgLCe4xM2bMj6bz9pp9euKthuMoHWGW",
  "key12": "3uCZMXhjeiU91RCTMsjfJL55w8DbbBQGrhxAj3aNSTgERysGw91fBTtQgZPi1CUxZsQPj1xhwoynibhnk5bYcJhK",
  "key13": "4c7TV7pS3g5mzM5AR6YDq7krGdwFH9NL3YEf7B6TCvnww4QEX7KnBSvTpkRphLqJ3xvNYCz8KsTXPaagHCbarJbt",
  "key14": "2aYzTdtQoMcTtv1gHWobczmUg6MJPQguYwWyEn3FpNQAVk1gKvuDi4TFUrh92wQh7iheP3cQdKV2hATcpXnENNGv",
  "key15": "2gbG9goTFsW4tZrE4tqqFYJR7LqVDYQ2oZ7XxyPg611tbrc2QetC5u8Uo533jbhwUxa7jiMe5FgU2vR4gAQQk5hb",
  "key16": "XXdyLtVu6f1vVPkrXzNijbTmAXoRRNHATAV33syWdjUnTRFhFzWCq1rsSg5M7jBbiyk36xjTvZMQibhaFdhmp85",
  "key17": "5WhVx6pXJV9PzXzJW2y1VJ53CJiwYsjrfEJu1aPrwe7wiKJVknkYC76NYRLj3LqjzuhnbA1TYJx9zfm5GsKKYuJa",
  "key18": "hzX5Kp64K51gjqwh69fQDWXavzukBWUoV77uW6G549ELrRieXsWVJKds71ijeMiUbi279iy9NsfwKGVCAN11fUS",
  "key19": "4YtouRJzEreX6zLetNrBKy3nX3xAF8vkKfYyvkqsXiuaWnqmQvG2XYXNiHjhnuvJHrPfi4g7VWJ32x3ygCoNtpFn",
  "key20": "5UCaPxfuyNjxDRqX3wXJjHm6ADHcwpRgveRyn1tnHUxTKTSy9KCSYT6dwCdQPA85nkKJSxtWYc8WKfycc4Kjd7mw",
  "key21": "2NXZft1iCKQMuYBnbkU9bgcosFowexNua4UCBc9L5izbA1SCq9v1EjT61St7BFSBeXUuhprXhqzzbK1w8WK7c5oj",
  "key22": "49j4Fe46EnfoFNNfDwhPyoZeb1SHCkVugtKvYV97XmfQQgLL9S7hqvNRs39LNe6mXEHxVVbsLFx6zn7yEaEmGiQ6",
  "key23": "5EeC8y9k4y1tDpDTUZD4ZianV9fhM4bWWKiXc6apHT5njrPuiPzoWabaRtDPHwks8Kt3iNVwL2WxoMvsrmc7HB26",
  "key24": "3nxYEkEB3j8ETw3vwDJiWxCEVN3XAfKokoqZbSKjLLrGs3PG6wrsvhX828mHCgdkaxYHktypYsuEVYmnWvwAEkcH",
  "key25": "9QwFDLBHGWPFuw2buqWruZ19haQCriJdCu4B31bnZc61GbMxS6EmnqqC6CAYpqgePghaYWARQjf2Hp8Bp5MwjiS"
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
