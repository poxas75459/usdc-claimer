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
    "3YDHGPYYmudYUq3g2DEsVBETK7JLSejDZbtWMc2sqwGPbB3TVCvqrK39X2bCTvxZz984HWXZCZ6N4goZEGpeQ9cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rgu6HBk9ZqANWVKMcGMRp8hTvJ5tk8gFgbfhkQmdWq5bkVeTMsQYdFbGv4u1eBHUbGAhmEiQ4mUsH8pCXuzSF5u",
  "key1": "drujsfdxr6gpXPX2MNHTY27ZtboGEJpjbrm7VTAjLvd1c63zGaty8B1FwXwKAGuHAkoXAfnNV4onmB3HiUaFK4k",
  "key2": "3VUwenQqrVjVh8JDEQgq8givkupxh5rHjXssZSLjNVB2XjaBrHwrakkGBt7hKewrqkwureyB2seHLnHomoY8bNL4",
  "key3": "4qqYSfy98tkUWkFqMaAcrTsdULvLJGM2eT6qit7dKbfmGq5bYLby6UVXoqyYy4P1qwhm35NrFXbSXmachNwWC9yF",
  "key4": "359XhUS7RgAuJwcGC13Hrnf8BnuyehP4BhsRDXUFufTn2rsSX9mmBPYjLQTMkYFJ5Fr659UkLtR8wSgQSjudaE4N",
  "key5": "MhEpdsBRuK6FCPifxxvqJeaf2aU9nfDR9zaHA3RGeB9fuLrekiWoijh47PW739hfo2ZNu989CKtG5JXCYtn4CLr",
  "key6": "31Bne3DVWfifpmz4qpk28F25Qx1kUS6cDpNye3rSSHhux48WkmbiRD5YbNqHK4XgiQs2PMG4PZkzVTJjzRKmHRdT",
  "key7": "2SddSxo2EkDz4XxUsLbgyTrZ1oGntM3Ebs17euTjWbt3jj8Jcdg34RyzJh5jMjKxdRKUS5EmGS4q7ybomePP2Veb",
  "key8": "fRDf6Wmo39T6hR3THBW4sh35LLFtDjPxX2n4jJaYRBDn5mSkqi2s16BXs61jdd4JTBpsb4uSWznB6nyGdwiXq5u",
  "key9": "tWpuxpeYCY5A2rHiDSnxbJFXE5oodgi9MpWj5jTkkEm8cU6Cjf5NR8kmEL29F2ZDC4U6t8NZ2Zz136rcWBwCK2j",
  "key10": "RjBzp12BoSwtQd57XGvo7Z5nLWaEgCb3bWfdMH9JWcKPC1V63BeAgbPTk4jjbKHcoBrYoBsx4ZvRMc3ecgAzQ7x",
  "key11": "2S6KcQW9yfjwnpc2dc9edx9zJjst7VtuGXEjrhTit7FLFJRQ4KfFRNQngDCBVSuPp4snxh3oJCWxstgsALRjvhyP",
  "key12": "hGNdMmEvy8BUNv9GBBCqTG2ovuF6zCBc8Aa8Q1qDEigA2XxpdQJR1aTPnU6EgoFjbd4taxHwEKSTsydgbbwXvBB",
  "key13": "4kYuTEzHGTDYTZ1vdyBTfRuFbKEMi6JHn8FexYZdeGnGD2aVmCk7NQA823MAYVrr4wZH1YoTKKPbzbgC6EhWtjHy",
  "key14": "mwf76fVAqvyLpYnL7z2XBHZPNWk3MRvjsH1QbrM5Kdg5oSTjM39t4FtwHkfbB3WYggsgqkin5zPKnv954FR1pjo",
  "key15": "UVwRqNLGbVpdSMAxTLLB2NNx9ZDWNugpE1kNQTuqLrxv8fhb3ae75tszRPxRJrCgF4bkz3gPMBXVevTGE2FAcMF",
  "key16": "3wMaQJdNPqUfpcA6FbmqYn3FJu2iqALNxY7UoUedKpMDH5LeRxtfaGxBzuP9BUVd4SzT2B3ejSQ2i14riukJiAaW",
  "key17": "34xdxrrBAqY1XLLb4MkMKLnrSq8kffdPCKwKsHT1hVvU5XtVsC5HpL6apzJFgZmqBY6B5BVEE8Qk2Z7w9fRUrg7p",
  "key18": "5LKauTh1qiSa1K8CxUHNbJDgjTwzDNNhrL6n2nGfPGnDpx7Ej1Kk1zEFHKmJSJTb13VJLoxfkPZY91xU7xGtdTEy",
  "key19": "3qWdJRcoBcrEUxgahsSrrGXcxtw2isdcqH8La4pTs9zwE48VzkesVAQ55iZsQMdHVisuDLPakG3gs7ZL5BPmtueM",
  "key20": "3boqygVC5dwiCTUNnaxSomepm6Sc6KSzmm459F5u7y4txW6LkCXGCoW4hP5h9t5rkhqkYgCVfi6tfvP9e9xSUdnz",
  "key21": "5ugnWUhVfM4QFpkJdWe97ZbuwJeJwNJXrvCzHVsAA8wtfxGNyy27WpNxAZLdqLkJaWv1Au5gBCizenAyzRtmCYnh",
  "key22": "2iUjUysFowubo3ptVcd9HG6aUjGHVnVqiYoyDL9oMDZgkqS19FQZUxEsesFVuN5barsUiCx8BQhTYsb1HDhpUTjS",
  "key23": "4GA81ufDBvc1Cu5g2vvZoirFt541Q7fVusCFmjf3cqPLoonyi5D2BDNKzdNz48HPCx2wViotyWWy8uhEk8zJfFVz",
  "key24": "49DXjYSrTTt3f8cABDbdyQD2tYQhb7cnxx2afn7M8vaSPyH1Rbat8b71kXu1bMeXshZxoGXdqwWAkFRRaVjbrMTG"
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
