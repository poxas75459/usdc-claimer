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
    "4ZXPBrDM1jEETgb2msMpDszV4n4TXW5N4Urc9sFJpGEBQ9HzPgcLSEWJLLYDKJyyz3ab3Wyzotn7CppnpSBgGgSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLRGFC87N49ysFWP4Uh3HuHr44Ase7g9vtRSqzv38fBsGDx5soY1qL2UhwFC6kSM7NUApaL46Y45EBFp2vumVbn",
  "key1": "2v1XTVE54WsTEDYfHgJ5PHMoj6YZtqNJNzTbUJyCTkHfZEy7CAE3cBNrs8p3wfLYDgDvr6Wb3S7KYeoM4MpmtaS6",
  "key2": "FgPrJQG1k53aX8586B543VXhdSFWm76ASvkMnbBbbokpjyTdixdQ4pjCk871Ty9b27K7V2XFdVyJ45BdpXYXWRK",
  "key3": "4V9JQPXnwAjbXy2D6cyyVEyfBczQkG9nsi4zLd1hsuwmQju6G8hq5KKrpz4uHhKQhhwKP8SyuTE3daWrCeCyRSe7",
  "key4": "tb2UQDd8PZQZwZM7XRDJyGe1Uz8ZtM3Ze5Y4TSqSneRQ9hAq4wugNQAUDpC13Wmwg5kqAREAGZcWZ3HAWh1xKwp",
  "key5": "3yLXPckSPsWCNCTA3W5Q7MAfVBMhtFL5MxXEdF6yQYahxkZ5U7p4waqPkzbXfu48ut7Utqw3wW4YSYf7MFeivMkh",
  "key6": "4ZALmqGQDsMeXmJt8y3GkGvjQ8sTKc6cuxahAyVQBUjUEAFHWkHX5jjQz63joc8hFE3ykddV32UrFSYQBaNCD9kY",
  "key7": "3Lv2mwaQHmU15pvm76Kfb6jitMbr4szJSB8qHYxeXLj5uUr275w9TGVSfG4vcAivMPdD62TdjPGjXA7D5pMXkUcG",
  "key8": "3fSsZU14KAJ257ZBEMvqbEoYscy6JJidSSQPCsHEC73ZFiR16yDzi4ZRHiCcgdUtJvJ5f3rpAXsyDYcbdm2UJfn3",
  "key9": "3UvRjjK3yvEGUURYH7Nme1p1bFR2VQ1upXq6FFWjGbuZjqjMihVcgpRJGrr6pP3myQnUKkGLUwLCFS2gyoBqCaVz",
  "key10": "oTC2pEmYA7Rzwk6t2ujEgJ9rBWsFxfxKTeE8m5kF19V9yd9PDBuGvNbcaKJxBmt1HADTB7CWUd3s9Ut2Hkr7rjY",
  "key11": "4mPVttJEn4FhfMgUVn16E1qvxoT2PA1q7qPovdzGBe83BiigEiNvuKK2uXf5BSJHm4jLC1pLUKpkVUUvBKdGUysr",
  "key12": "2Jzu8J3KGFiMZehQ61LUkPKkJpqJT7JuaZSoQTUde4PrrfRUFHcZ7jtxeP1bsaPJPmECu3ZxaXEELtEwCjWhFLMT",
  "key13": "Kuab2e48XYrfeZugTLPifXya4Vo78YBuV1sRqHafwT1h6hjQRtnEefmFskxZz9pHf47GjeSAqnQreiZn4H8h5t7",
  "key14": "jraBNxS2t5yoRqKFBbanUE6rknypFD9mbSmziPSEwfUf5Deg45BimMTRe84ufxbM2eFuCEG4Ad5Bf8EZs9jHzqm",
  "key15": "5dH8K4hJtNxoNgoyPDk3mYTiWACsCCXTzBsEtnqKedLgW1kQAZjfqJAwJAzq5P4i7E7VEVkV9LrJXmdu9smR2kbn",
  "key16": "dMQBXNofkhi26dToCqVJw8dCJrrzeqZKkiidrwvu5r5jxA7MUt93KWiyTUsURZxJerby9HR69oHHNXgWTcrvq15",
  "key17": "62R4Aq24DNow11dSNJJhe1oZT8QnQqDqP2F9MveH8632yPXBqJYmuhAqXcXpiNQyKoyvBTJTH9n72XkSVX31f4t7",
  "key18": "4C1fUJiJMy1BFtHU9JcFFYHJaoC8CXazqC6F4LvEGLoKPoPr54ZR8cX959w68aEVgBsvKstTktUFegJktdnTKjWB",
  "key19": "67TUosZ6wkAJpMV2mQkfQkLvRua7NQUGdMAXXVcXzAXRWRZWoDZqSbHduMGusvXjuHNiTu4zPjv9f7RvBfuVwBvm",
  "key20": "5rPtm28WFuNabWP5DUZATd3T17Dx4X7vaembFyZWRJ6HTT3kptETZZDHSBSz4F7i7ZYdFeRLTeaccUsbJDdJxJ5g",
  "key21": "7j3tVhYSeqBbGGv1KREHPDRsJ1k3vjvpXXER5rHz8zHawrdkmzQeFdx2y9RmpNkwwxEaVHBimvqohCEQhHCC9H1",
  "key22": "tiPU5pYRcLu6ABLNhdSMZjcAivNPPwU2ramhC1c446deiL3v5Lu7iFjxTPXXRFVJ4Uqg1PURiiEHjKzxeG1bNNg",
  "key23": "2qNXbkVJDJgzazBv7Cr8V8YVwDqin25B5MmxF3RFD3vDFNHPzqsmnH1qajFjDEcxZevZwUraiVi3N8LENrPN2tdV",
  "key24": "4MUCp57g7D4MLSvCKtS8bUYRySFjyX6d9px9L5ekGemJB2YeRayZyjzDYjPQs8PoqHNMxQGTHjELJYpwJ7KD3NoW",
  "key25": "2GH72tY1US3FDm99CJb1xycXNG5kB2SNmuXR3NREAf3why8RXBTFxHFYoA6WVPaw7ULQDiUNNKQneVyZkbU6AyEB",
  "key26": "2NDhEkCAswLaaR8p3AUhF1NNf7UCGTyjtCn5ZjXiyPFcjheYvoyDLX3WfaLhTPE68CkRXsa2V845mQbjD4hDw7Fi",
  "key27": "6cnvT7CiGuwRmmPqLy1kGPjFhTcWCgLhtfCci7PFv7v1YkMfwrYXzNM24G5EquzThpfgvTfsJNiy714Cm9nuqNV",
  "key28": "oajjJspeWBZBEpduQtC3WxSD2Dor5BFTwDU8NgP8WtZEQZNjAgu6kGdiRYz12DEYihrGgJArdXqGBvtnRwiRZfP",
  "key29": "2etqQd9MyuiDUo9hcYp8N4v8gnJU1Ns3vTPWPy4cL79ZWAy9f4SMcn5JNUwZkS7sa1PXpbRe7PEy746jjq3N1GB5",
  "key30": "2oCgG9yLmvUaiC4VQnuR7eKeqGbSPYmiRucLjnKuHi5o5JuyxDQ2WdpAAZGMJDtxQou7QxYzyw2CDyTFMhQdC8Va",
  "key31": "4rSXUgDxhAxHbSKLB7zwA62HXKDtBs3hdrQ9Pdc4wNo8cYG1JFXzUGXnNj5BAvqha5DZm66ePoPPreUnqnQhPm9f",
  "key32": "4oa2jc4t4rmDtjTXbRjzcs2KSbBRbZVAiDuJHDZ8to1suXnzExniaGotQNcbqvythCQ8TUAmH8NrR7wccCitwALW"
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
