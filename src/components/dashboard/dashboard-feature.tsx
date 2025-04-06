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
    "2Jc1ABt1TBnJzNhBto5V53G3vDibi7a3Twf7o3mbGMdbnw89QX2uZbLceptQ8HHDTyyRP521PCXA19zYDPxEfAYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5moxiqnJDFCj1LFMNhuyFKwmAV1wCKosyU1pGDTre7ojBRTFHQSTxbC7sTHPBWPGFj4TXytAL4r528BDyypPMJL8",
  "key1": "Y15ZKrRm4MDhA9WBbQfBS13DvJxoMUri3XSZXHhZSxU8ku3QLpquefJXmz6ZshDHCZvwsJRzwGfVv7nBPSnFRag",
  "key2": "4CW9275PzCjjFsZmo1eGx4zLVMoKaGq8MHXwxDVxyCB9y4ymxoMExpVGvL281rbG2uZNsX7jkCyvTJpCzWmjfBNY",
  "key3": "55qbH2sPSt9dMHKp3NsLMXKNAtRqapF6nHpb4rBRTtgSRN76nrhEsdtnakWjg5FzgnTcGDTP41ntVa6hkZwvuL9C",
  "key4": "xRUL1kinEFqn3jZbfr2dAhEizQ8sALXKDyUgGMoRkU4vgFMsUkWDoJ5k1jvCVZaarZxaZu8FK9hjSZc1upuv521",
  "key5": "5tP3p2tXkZHm5FbKcLoq9jJTp2MY7fRbHMeF75W6merU5ocqBx47kC2u15FAquRNi2HfEXJfqHZsAkb2tkWQfFRB",
  "key6": "62mKGTczhQAtjsbCMpVNQ27ahFfD8923CQ8qiYUDbLpMrbC2YMqstvJhVx8xBHAVJLS8JHcjv2LZzg6CiKfWNj2L",
  "key7": "3NbMJPhf7afco6XMHHmF2PP7AqWhrjA1KjnAXgk88Qz3bjzkHXLApENjHv8AGSqy6tenqxkHaKFfTduWMUyEnk3c",
  "key8": "552srV5mGLKf2hqN1MPkd4YVxDEoc5YE9iXWsv6A97xfphyuHnRLBvcAgCEAby5g1pKMNABPVLAGh69PNTeRpzjz",
  "key9": "64Xt1fCDSxMpCxb6Hmtf8mnWXosQhTjpqQzGqRUCxoxd6PsxGZ3TjahyRJeRoFu8ZwBqBgSi1Gz9d2713uWLQvHs",
  "key10": "XohE22MK8pK7YMVNjkor4ipxJEgio2TXG5yubvBN8QvFYavJkUyuRuVagqnBH3dHMP3CoH4QfFqgjEnzeqA75kY",
  "key11": "2A99VoTZgcD17xzhMTENCbaX2JKpj4Qju2k15miDdTxd63Dua9vcfLXQDrNjaah7JMDcQ2xjfzRKKcedDmkWxQbV",
  "key12": "5NgWYpoLZ19nHngW558XnbtSzhMMhuSZRbJsWxztX2JQgJpAw7K9EffhLbzpWqJJWLveLjBsQ1jfpv8seGRCNLAC",
  "key13": "35Bq7oDrM21VhEz7pUPrYtB3MA6rqhCL8cRQ3SzuU5F6ttfqPpbsAfwKj8CRiBpD9apd82A6zkqKVgtTs4urqGkr",
  "key14": "63JuRVtkAaCZkbnCs9wcMEQjwRTDX5ATJDBn3zMYkotDkXmAYTNrj58donys9ccxzy6XDavNCRL9WXTrSDwvRmsF",
  "key15": "r3G61cD2wUdJySCzLHisv6DFefe4MYiDTbgRcDhxqMDrcWknTMuxobhwAJDW34maDnQx7USh2dhvVFY97c74nZm",
  "key16": "34Z1dJDp3KB4Ded1Y2aSQXDLi29nRjvySGdLieiebuaCRnBtxJmiuHfXQz78PyUZDjEacRknpt1w3QhjfGmHx3qQ",
  "key17": "4NMfmyMweiVtCjpSCm7L9fy1aakarFhS8jt5fVsAohrMrcaeL9KJCkhYrRhCBA7J5QX8Q3dvCCuvNzoEkC3BYnPh",
  "key18": "2A1j4UZF4RRpsFT4TLSGpEVb4iRNBwaokXNkqM6oUdecwHpsK1uu7uTbUrkApnPz6w64okxGWHQ2YQYYap7kBvZt",
  "key19": "5X4xUV9zkLKW9ENh5sM79mC2hXxSF4f6iKxMQNShLvBSPJuSU4YaCe2k1qrDb33TQfutbnCpPTTfxWTERqL3mL8q",
  "key20": "27zjaPo4ZY4ax67pQSUJVwLXASe5oLQtAAVkb7xFx2mNPzqYBnEs9m8vcf4eiUMcdGmzhutruycoEGSNfWSw7gVz",
  "key21": "5E5XwGXWKdwAJicoJNwf8Zt9gVPDjbn1eJBZrPQbNRsZ6zaKgfBMziJ39b5t2r2qupg6YA6mJuaBofwG33AKR2YJ",
  "key22": "5ci8xVwVbL13GApPSLhHUFpboEizrgQobgdxuhPHjVFGbeXarzyNMkRrxfGCKUYqoiVyM39Nn7A7aNhh3t76nM6z",
  "key23": "38jbRo1opuUGGuyfCckeaT7RT2NGS3HoXVpY511Kwina3f2pKdZDVhPQqaoixY9zZd6pei89fAF67unm9bpmzsTo",
  "key24": "3znjPFF9VtAdhkCDPGgom7rQT7M4rapgKNB5uJRhhvuQZrM8nMgiGEWY5vNGkGsFtxfbP1DkDzQAjyaNx3DYQi4B",
  "key25": "rxJuxyukBvDfxmUVR8AmGmpKKjMd9h8TZGx5uFNi1Ex44WyD73Peng2PkEAFgUVGVsJk8Y9pWCMnPJf2roV1rwM",
  "key26": "2UH7aHoDyyka2wEbTPMbAJSUPQGveV6TKfsqtzxEr47h2p9cB2xxKHyhNS33XGKVbHra2bZ7bwFvrtqcTXexCa6Y",
  "key27": "4hcG87iaEZ1WnLNve2ST886XfPaX7aUixqs1DeuyVQJHgNbMqyZEag2hoi1x6oBtdbRNNfqJKHgtKGeZxpnj31Gn",
  "key28": "uUa4cRR2nd3JDD5RbKDUpbgci6vpJzEbnwRYyGu6DVo9cFiYMoqU1PRTZUDzUGx1Sqgx3tk3y6qsBTqCHYrtcnL"
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
