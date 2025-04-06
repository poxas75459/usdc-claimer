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
    "4VKPnsG3r9N3b5AVkfbRZF8Wv71RD29Q2fMvcShoFMoe74afrRwwnhS8grEi1K5ZwTWDZEsYSEit4Z3hdMPStiQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22UgSU417Yjt3ZFoNXTA8crMQDD8Un1HpYnL1niw4dkWuZLak7AiJuPySPP6eS4VcqVS5NyAVZduaxNfciyorWAf",
  "key1": "4nqpZZyzErKRqJxzhL3ebj2suWGyU7RL7nWvzfCtaNgHz5pz8tYW23XDFWe87RKZofYnMD921tq1tLpPU5KA22Y6",
  "key2": "3Etgw68pFo4WpVrYUZ6HA3U6pmrZxEuvEa7kyWVDnoom4Fed5tq8CMinKaWLVohsqeQb9E9jwMc54FAfEZMPrgF3",
  "key3": "61B78q99WBn3UeGKLMNrNRTvfNpqnZ1r9C1dxnFYAvg5wMCAZpLZEogeLTxUjSs3JYPaBo9ba1PJ5wgH95HDqnac",
  "key4": "55wK4ifNFpSS7D3xCXphuCLiRm1CGnv4g8Xr9csXsDyLY258kwniH7CumkGCVgWkJWi7SvUCdmjwQwXj7XwYU3Wz",
  "key5": "5gVakA1imRgm21DK2EZ74A9rU6XHtjXJTBHAKnQFm4zbMijKPdxC9xTm6a5rFH3sBe5Lq4YctQsx643PU5KXk9tw",
  "key6": "2YkBuyB8omuPjH3ADQwxo3dwyjEA8c1GA4Kk7i4LvKcdfSAMxADuuLpma7WFcdJqejbZwgnWe9978CxFooKrVyYH",
  "key7": "4gFHt1kutepgHN1Fq7LiMknkkwHw58os846EofHnYj1bTS8XdkwhTBh7bTfDpr22xjzfZLq6pD9LCzx7f6g7uvFx",
  "key8": "uafDQHaE2MwQQsgp89mBn66oCpnWJC6sTpWiLHQ7GVDdDKimS1CyVG3k2uQpfVEPbvPmKXt9xKj9ixgAty5Ukpt",
  "key9": "4M4wmSTtS4YJMUwHmABjpdHshaF3BACJ6Abw9B2ac21tHFoUcqNcXLRTE4gVEDTky2cpSABqFeq3uAxYzWugkv1r",
  "key10": "4WoCjHS9pVgjmiGw2jp9zh8PcTfyZatKUty6uqjS7f3JCYKuMKHW94WRp6y2gK7ZgVBdFG63KokzY4R7oS3LiCns",
  "key11": "3ua3QNziCqL29uosPgPzqCfoJYHS5neiMoRJkFRi8wDViGtyLmm49BVCnthn6vG7dERikVsrsUHPZgGF1kxGocwJ",
  "key12": "4VNd34WqYKUa5U2bGjhG85nBb6qMUyLRZhKqgDP71UNx3MJztLF8XSCnNYtTu6afM8Giukb5JUcEWeErzjVs7M8o",
  "key13": "521DL9WS4eg2nAudU7Gv2mFJbh1NJb1nWcYWXe4cbARkucCTz9w8KvcQ3aBZ22HcmyUgsQvoDmTCGULj95AaEST3",
  "key14": "4sJmu9DZeZJDqu4obaBYDPMyzmaYAZw57CXaQ5BeUQpmMGUdDmkqJxcKLr3kiwE5y3AYq21ASDzPtoecBhxNCbnx",
  "key15": "2F827v6JaUWRebcYbzBgx31RmjZXomZFnDYqMmjDjZUK7JqRNS69bTyGVY2UB4RLV8mwJezEo6tWxvdr3Ut8st9S",
  "key16": "2yAfM6wuUfvY2eXfX7mv5NhLQHnLSrtsxk9DmUgguxkExj5JVeoVfvjkPL7T4sB87kHN6iuzKJ5WJEWtMpy5B95H",
  "key17": "2xi5zkvqkcY2mPDwKEwmr5yL1kP4Wr3AWxjekjE17TDRWgupHKR7fFog24BqUxt9hRAUGh6nPmf9N6SvMy4yrTr7",
  "key18": "52zTFeSC8yywNFSFJTF1u3vCLBt5AE4w4aPPqHTDWeNR4TjmtzcJ8n6KqmQYh9rUD7J8gL6YLD8eqKLBvrBasBtX",
  "key19": "vwq9JBuFjjsxehtUjw8jsq8jPEBQLmYgArHjxik5ovSa6RWBRPnCyV2X6AHKQT9fUtiraVeRqHEb8MBnjg7u4w9",
  "key20": "yQ1RaRxBoFeSiLpougLU92W2eSxuPhmZFrBpsy4XSciTeBdDWRYTmCYsLtdcdqcewS6GsonTDVm9dNjWgu8qn7g",
  "key21": "3hAakgMJcvLPnuVzW49ZeW1tseHakvUXk4vLMpxKXUrjnJuyvHL1Jrvhf48g1C2Cia5pxMmYhrJ3VNob7MDWooJd",
  "key22": "4TiBMSGrM3jnsE78h5LBKHxPbijPTVczLtgn64MNB1aXXJ9L1mNpHqDqQ1khN4AmzombNkTGfSb22c9cdNW6oT75",
  "key23": "4uJN9TY8rrmmxWfCptgomranG6uLnmx2XdR4ubYm1iu1hahrtxu2HxGAoGFHgjYQ4Btq2QpxurDrLVQmyZF7KaHn",
  "key24": "4SojJo22xsaLndxDwQcABXtjULxiWmofJvVQ85MFRxNUAPTpbGzVLBgBJHJ5w5LgeYXSSZT8tKhipMXCFjBP3ycM",
  "key25": "37yCzYqdP2vmCjY3eD1P5Scb97nAGyn8q73c23FBrH9sFmRFVdw6RmrJKwZrEQD9uVhST4sQTFZof4sDErRFzR3o",
  "key26": "3S2HBaSi9kvXQiwkwaTB7xYS8AEQvkVwYcQsqC3PTWUKQrCiMAnHet1P4bYLQtkb1ukfhy5Q1ukbNzioaddTXoa9"
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
