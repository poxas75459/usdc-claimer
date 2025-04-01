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
    "Ccn5YPKqoEpRkhPS54opVDJaCHJShw6zRTf7PUyUmVjoH7ehJ4gaDYnRVTVVnFq5rL2ZtNxyA7XUremXGsuguHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Dc1tctSTX7hi1xKfccJE5nPhVtdRLVDX1PVkDQoeUEhs9hGjZTF7Z13ztPFhYGoGiQQeKyPYndPjCmabde36mn",
  "key1": "5UeHdrHAA3HxTyzAp9WDYqWjp3aYaqhEN7gC7NnCmGLz3FghtqZqaRMdrkQwXgxiE9X6wGGa3KWTMATFX2uWQFf4",
  "key2": "4pzC8H8pL68dY7jbYcsChumw5KFXgRMS56rzfNt1KiSa5zSJKxaSeWXsHjvsVvZ86PziErC5gcqUGQv8vu2SgaCv",
  "key3": "2G892oGxqzHnBr5WsEp9g6KdLF1z8AVR69Kgr4AEWm4fV7ebhgTVMHZnqJDjxrXKU275gXYLpPJDY7XWsBPV5AxL",
  "key4": "4bhaXUnjNSJDEBTsxjwMKeafdG4dbs1eve5oGEJNCR47jGZFwZq2JC6rESnJwnNbEGSzVaHbEgpcN1S1AwoTmXL1",
  "key5": "3rxgvGpjLpzqycn5CH39czNp265HhLuvziKLbwubJMrxjnUgQKLM3PhrLyCxpxXheXLNcyAmqaDMk75fVDWpBvZ3",
  "key6": "3NBCixWvcR2qvR7HyPbVN6SUvkxJai4L3UhFwS1oTTs5LUhMLvT6PKp4uYjSKtZ15fV5N8xQmwKq4NDKCr9qqE55",
  "key7": "3yvbBBiNMGvswMnAoca7TfxEKXp2wwte5dCH7ZEt8zC71MWaeCgii7n5wMZgCkJhgNTtWvStowXWhgLpAQCGDERc",
  "key8": "M4YCetKQnMPg51PCMRqwcGFEeDmv6yoUQeQMEVvL3R2vMfMr7PRbkkoje4qMYaMaVyStBza1tMC8hvhKT4oB1qG",
  "key9": "JhCsiKUv4WosHk7vMK7JgMbHtfZ2dNHgUCrTFr6TENw4JbqxujSdYkBD1R8fKcmu1GHbr5mTT3ht7yZRkmeh2cb",
  "key10": "5PSEWKsmYSwe3AE1t7niowPqYxucn3UcFuxpzhSXHBHvtVDJsNqhYfZNAT3e4x7jMPCniooSZjNytitK46HJyfLF",
  "key11": "2G5cfWZG54GvQ3ErXvLV7Q4czNeLm2cUVgFBGbvXPy2ajKnPiTtWoLUZ1xeb3yRNgAVgBSYKFVdP5L3m8v8VHAF5",
  "key12": "4drn8mUJ32NQFP8ML1Y9oBDnXvz82DMxVdQGEk5oNHhUu2LPNKbNhnigZHxFCEiT5f9WuWRLQftDmimDnXVA8cC3",
  "key13": "3D7aQWchjf4WE4BZg7nZdebk3mHeUwkpAanDhokhgDHRqsGKKXibD5EHBzRScGuKUD8n9apQeT8koPc4FMcbTggy",
  "key14": "5rEB17VP3uPMmHU7geSSt6wGRVFoMovxJXfu36fqjqHRJB4Cuw6SdAy9rkFxAd2ZV8XAJsDuaJredLf4sJa9qMsW",
  "key15": "4jQMzwsL6mrDJyvr8NyKh8HHrXo6Yb91mNWRcL8zDxwBiWYmhDuYRrR6n4FtbWxjoQ6CS9VhXqMQLQsjw7HDuCLk",
  "key16": "2jJUjWuqJbcN9aXTXqGWDCMNcGRvkuzHdaMzzQaabf3c45fmwJJy71qtUaRFhvqdST6a8RgeKyeu3BJfSymFuEuB",
  "key17": "Pqi9rrNpkG4JPF1452ydu8TGiCY1TdWzKkeb8kuRE6S7pNCuCCv7ta2mWAYWF9sjQp4Mcz1UxbyCUPg9cMswRaN",
  "key18": "mLnjTQmZvmNiSAk2g7B6RnvTn5NVbQK4cwBpqQb9Asp3Dt3X3gZ94RrhF7pNmLf3YQokCvFcgtmyj6homjdzTKz",
  "key19": "5eQoNFsxZRtNqJX1RCsY3BNdEfw1jkM3PCoeSgWe2KhzHLaetyx6UAnDYB9wFxYiHnBr6EdUDGaMKN8vwL2UiCcN",
  "key20": "4FEkP8dDFvXGKkdT8mKkJBgf5P3wQWjWaCFqbu1xZNgMosUVf1cRBTLnbx27oqSfQfxW1EZDFqcUL5BmjWpcVafz",
  "key21": "5iiUk3vr4nRjo5DYAfPvjVhL8HtyrFQfapsfdKaWDFCgvHHApWsjVWN4PJ65Eeh2sbZizsBGvBJ2C5vKEwSN9PTf",
  "key22": "sUH8JvNhzwoP7xLrP3w2jtsq9v4qU5oCemxDgDwZrnYUyAjuqNxVu9Phe65vmVpdGoSZdBNDcSW74zq7WvNiuiv",
  "key23": "4UWZotnj8RPEtNGTYGY81ZPWKHyoJjgtX6MATYWoAHeTTGbTjQQXCyZVSh65fiifJmGzuypK1h9K3whWa84kCPS8",
  "key24": "3R8VoW1EcnHZcbHaKrRCFGdJq7VcjjrPK3in2PAuN1N8BV1KLw3RAFebPXxBxCcuvJaYfr2hNZARPgBEyxR7WFXW",
  "key25": "3q4H5znsUzKVejAuEv7qLAhz8tKpbuSXq3CF7uW4u4wLfidX6vUqXJJfuVMRsEmtJqTWiSYsLayr8wxBgjy8GSfh",
  "key26": "5MeB1QZz2uKynT4XxaCEw78jskDxFkmfCA264PfcgdSLpRNw46QHXWGubi8sihdxoRNJXmDnk9ctisjwGRkTzrKC",
  "key27": "2pWA61EP798tFTqtiJtk1WVLco3T2dLXPUJmikkgydcQ1357ATdhZPK7SqU2iZwhJf2QBHiCWDsoKqzX1ui1E6cm",
  "key28": "py9rjTei9b4CUdhqLDFBLRnG6TQ5HrRxDMpTKMinmcWypNjq8CwJJt7vEAYMjNtq21iksypYW7e9XiZnCih2sG3",
  "key29": "59W4GmP9ochvRUS8zizrMMWgg4bok14ufzojE4GojL5SDE8phUWNfFFL8D5M6MaDWqpa8eKs1oFsFJBg6ovZPPfK",
  "key30": "3UGGguA8Cvuodh9Fpwsk4XzpnbqdQLPTv9qaBX4RkmGBv2ABVr7ETU4MWTx8n5Kt8ULCsRh5bvpTJAbxw6QadiKB",
  "key31": "4kNe736AXGTP9FtWFyEfd65ns1449dR2erYnxMMbuis6FUnJVRniiZa3Tyw3WhRugVAXwTJMGDmKoQdKnNvRnJc",
  "key32": "U8auHx8TD56qHSrDvcvH7M7YkyruZUy99RCLLxPjpBGeBEmDTSACXrC4kVsrvLNPrZES8EDCsXFFV3945CVLDM4",
  "key33": "6P3eK75bcyKPVFf3oKEq81hPyc832VzHiw6aTgDCDuVHyZpnnMZLByDsTX5fayJaQM26pabhRG5gEsFHxtqci17",
  "key34": "5jckSjRRkwk9VsqUaRfmSyfMPH4RfC7jUT4edMzos1cDg1rHEPn2e6wGgbTvXP1WFLeb5dKoMh7Tn4zBPGR7h9Qh"
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
