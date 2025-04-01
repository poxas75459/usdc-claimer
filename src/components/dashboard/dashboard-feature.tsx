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
    "4P5s1qJKq5KMpk1sjjDwxqZp9o32bTYGMMwuYYx4KRnPAxsDBG8wivSkgnbjKQHqP5neGqQdxAiykPUncboMMSyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zP7idqAwUNUhxK7FBXVPWEfCxCcns5D5xHEZxC5p9S9T2u8z3wAVwyqFd5eQHmRsZNtm18h7HXZNaGKa2fxBJb1",
  "key1": "w7ZNb7goeUyjpi3k7SioABUCVdsof48TSVVPfyTfsSugutpPkELLFbUNy5p4B4pJuQFPSdHux3Xe8gN6hfARkvk",
  "key2": "2FepBvKRpUSQcK6r5MZDXPG9cUtAV6Z3YTatbXg9JNorhmZWsd3sMCw6tm5kSwaGd23pxyEcq7XyR3taBwKDWZa2",
  "key3": "5HZRG9mutf8Jg5pETv9khbv6Zw2VH7ryGyKkhvicNCVwhA9raSvMHGfqn17JAu4sjoJxDrwebtGvGdmwb28tKr2k",
  "key4": "3ridLdLUG6WxLmUREgiF7Yc7RvyfLo2wzs4n8xxF8MN1CR2QnAAGVepbmQVPcEx4ytToN7Qm9G9Mz49sJGQ1tHp4",
  "key5": "4C9NZBeGbb4yAbeECRYrL6rG999xHduR5ggAwsFXzu6SyJaa3NDxYhwH47hgeUBXopMSEryTvUrhCtDzFF9GgK9v",
  "key6": "32gdgqNEFwF4ifMJ3oBZ4wuEiYAWDQKutjApc6eRje2T9vuU2rhY7RCSp6pJfSz3VNCgdzeJyQtgNYY1srfuXc6r",
  "key7": "96qAGpi3VGaXsKMybTx3e9GQHzJ1XfzPh53fvg9oigpvkcaMH4vbn3tKstQ5XjNAtaiykfozT2ddaqSJxfsRuSe",
  "key8": "65ETB7rvzwGPTWBuTfSvzAJmVpQDskmANbbs6uNfmDnwi6F4SWLuxQqVmXKsp8QsSeLjLkLSbTXyjPjpx5FhJFmq",
  "key9": "2bkLrfPVR13Q14v5kdNJnTysmuao2TFs8ct6DKHZhfK5mN7J5x8ggfrihGfam3Nhn16aEQa4eCJfAQttu4RWfXHe",
  "key10": "53RkvAkWGHiED53cBJht1ZkyE4N1C8fYMkSwNYTB4RrBL5MxXCQKH5QXjw7a2FntmPuKWZ6Sea3RmcwGG7q1Yrsp",
  "key11": "K467j8SoKacZedCFy4n2GoM5Y1XX6ZK7hCEoQtLfNhc2ALT9HKbCWdM6nLb9VyAexVSdTwCAzgfmk26WyYUmpRq",
  "key12": "3X5PAAKME9mTUT8rnxV73s94un3WxoNvA1enA448cy3bPRW7gVkG8qD1KZ94NahPPbSFkAPhEfj1g4FZhiMMUirt",
  "key13": "4W3xwcfTi6BdzgJmkskZ3BtFGkZYmccGkLq3NaAW1Qs4jWQGFF22cjSPRwRDERYnAR1MtAGjQSYErUkJeXUj1asp",
  "key14": "4o17qPvqaLDw1u4RqxsMQf6BfsC2hhtPB2PAqSxqNXRM5ZqvxGd9jbvdLxfpEKnHuoqtZyv5x78q2A2z4ecQCTL2",
  "key15": "4ZojNLntGhN6Ph5QfVkGHXdAe6MVJ58i2nRWs9QZN7w1xwTsfJvx6LExrNmZy8a4j5zSngbgvETzCNLKwE8EvK96",
  "key16": "5QGA3rCG7kNb7wZDedBFpxMt4hx7FmMU1QB1Hsiw27toSnLjtuntsH7u6tPRusChnp9L9RFGMHZGRbY6Z7mhA3Tu",
  "key17": "52VEpJ7gSYPEYZ5sFe7GvENpQvTN7JNRfkrWxMyTJS6Peg3wyUbFJhVBk76Q9WzMJJTpV9veg1MNDALw4JFihhPn",
  "key18": "4pjaMqtHBDRB5uTPPjNr99YrFTwN9tt1wfBUbERqnXrFaHL6tfR9kdu1PLV2WhCV39baXyQysBtzrLRcri1j7pyg",
  "key19": "53hkZ79R5s5e2ULV51h7LRYavVzGnp93eX2v7GgXFoXnkBY7DM2DrDESKKWePoih1u7xXwLVVkgiGPWCZ7nnkGXG",
  "key20": "46vGCjxU9mNMW1GSa1qYh3G8xzMcrE1yBknuqbGEq9UMj4NrRu7FLYTCEqX4Astwtf7WxUtaxsKXSGW1gPXEJSHt",
  "key21": "3RJytLhpjofKPzqxXrYnxwiU8xetb9BPmP9S2cLRNEu5VV8SRhSNNvKp9nUREZJhjSF5EHKiZUa25fHycyYvBvaV",
  "key22": "4hVbqvC9jjtM4wRkF248jyB3vMhf89AJHeBSjFpW6o5b4Ff7GYXQkojWBMUS4JLps2V7LBwToGJEGZGTgbWSqZvY",
  "key23": "49xMukXDwohmddaUeEbw5r6pH5ht9XMcwpgbSnr79nUYf3FVhJziNj2TwDBAj14Puq3Qn2iU1w4Nz4XA58HGx9GH",
  "key24": "2Xpsd1MquHo6ZmveEvLAfa88ykimUKF1VwL7WRkhAin1ApKkjM1J1dwfZUpUvuatxFAcre4JYSjPM8WLfEVtc2uF",
  "key25": "VyAcJJS9se1hGyof1Mqgmhb4uh46PjyL9tJmpcv3rAESk2uj8c8ENxB4RT89TEWviRaEkJP5FZqaa8ahMeXBnUE",
  "key26": "3CKWQ8TAKnU94bEAB7sEiMGvDTvvuAUPdDL6oaUFDd6HC7UYVhRZ7vMk227UF7aH4FjWzyAJTyafejRYRuWtkGig",
  "key27": "2dwptHwNRYpBYs7KW33t6JGv7xGMTBExNYnHLHpQ9yXi2Xnp51Fwd149Nmxp776NrryJFjb6Leqdbnk7xxF52t5V",
  "key28": "4Cr1MYND9rTTiBV9oCuFmqTCNGT7Rv91VTpNksR5akxMSQrKFQqJX6YS4QUZSmbcQvx6BMkCYdLogPA7x5tyUqoV",
  "key29": "DWWETYS1rDasJnwVKYLu4apaAsSLNhePcfumBY6wWAK692ct9nsz8MUFJ7pjTJ14Bxm7NVhD2GScqmmfX2XZS4a",
  "key30": "2D89uh2UACFkm6BCcREsp1qcWpGDxZbLPNT8LkaCvfigUSHrQr66kBKhsTJS1jXoDqJ2ZYvcKtJPBN651XCzvDif"
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
