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
    "vjJgB8NxQsLW8fRUUXd1bCVWeqxsruDMisMHgnTKiitRsgL4LodnjMqgpHiXW1QrFH8vHYFRrsDyRMuZY1ai1mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6788BgdMGkmDp7N6UCiR623ME3Yc1pdmkqFYqmL4cYWp88J5r9znjCvKEWmBktePt4DXeNMqFcAVpNuSDsW1e1G8",
  "key1": "3F3DPG8QJP7Eto1547B9HHvgKoHbSnf3QuhP6WhqtSpRGFuwcXeMR1fnC18JVgqf5HQBSduYNWgG5q7r3EHiwXAx",
  "key2": "3CoYSToBpq7GPhznX2SRpVqPoGF7bVcBw9ASzaMgL23L8HibhJj37Xh5pRF8aZkcwBs4TDxLVzuttXhFN3mo86rX",
  "key3": "26GT81EFCBZd3p3JMnTnX95FtaPQ27ZKBckvwWqj4TyFqnMtNEnXS2JevpXua3BBtNeAxUzZeGndxmwRdnzewnZd",
  "key4": "2g6YoXwLzZNVNaeqxCnpqqZfrMQA3pgfdyShcahGGPqMqghjiTm1tmZyJdks4rgnXnoeMZ3ev3Gs1JEXbNR7noUG",
  "key5": "28tSKSBQoGdNZwSQuYoqtWyDy7JLwaJsgs81c8WcTkT5HcGF9N6RZtbHaoL7owVdjpNfypFYbwLdMQ8mygfndn6G",
  "key6": "WQrcyVK4Yj8MJh3uDVNPt4TB9tnFxUtfedz67f3T6v9SDLWYzHgHnWes1zprCb2MGtNhrF9um4mTvhDUrWS2ary",
  "key7": "2ZWbdgY37x8HxWhcRAhsnzYRHgvMPGQCHw8E3JbWxhZgcFshoRsUbAHCUgxxCVmkTEkosdH8tpw7fB6HpmUjbRg3",
  "key8": "5MTjVuhLm9ZzYZqQsGdxNrPEGR4H89NbvH8tZSQLxrAEm8vg2rswziq2nJYqwmrR8wZ339MBSjBRT21EigAFwBQz",
  "key9": "5zSMZfnu2KFUk1PnJeZqSLMmEmePpxFsuL2r6ZWRsCv286S7CQT1bnbRxAsYjfESxf1gD7YaKVQCCEmvaLbCQrps",
  "key10": "3KgefynLDzJcbNAeamLvXNVdBtUzsdNsUeDDGMTfh6wL5sCwuF9U4M3jeZwTCkSAawnvXrJgrNYvLSwVuM6xRKS8",
  "key11": "5CqVGvjNtQWC2k36JtkJ15MQLrxWeMJLYwPT3qeR8LKCSD9nZ627LzpCra5rN4iUFXyprWqyidNmLLpxPgMbxWGb",
  "key12": "53eBYmHmnUmN3w1AFrMTqU4FwhjFPYyjKds2j7CeDfR9E1gTLjkNiEhcwPAZVtLyuS5qgm4286TNuD8Dz2U9NGDf",
  "key13": "2LVarBQwdAe4hYj6Q9kqFShJJBezPAzUiVuFXTkvF3cvuEmFURNahSRaSrqNvmar7FyKVmhpWwNNTpbLPC656iCV",
  "key14": "3hvC6s2tAMhcTkMS7iQje27H3bJxVa7SYfZrErausSdUHBJNQva9guJhkEC1i41pZkWTtd8AFs6LbmmJVRLgtMd3",
  "key15": "45ucm95E8TYdNdqbxzqynGkkn5UFVAmvYP4oQXCHwwgLPoD5GMHhTfKdqAZTcGCWcHWSg91ZkMLt1pDruLakya4a",
  "key16": "3PGVyi7NKFqWrwKGWyei6WrJ74Ys3PqkL25ccU7Th4vkHbZt9bMwngHhj2GJiDfW3xsYVHRwk3rHUnRVoDNMsVxn",
  "key17": "5CvDcLJUdzyiD8rwuLyYQMbr4N2gabunQiUKriRf1AyzhLQdb2yenWzMhEhg4uSjdAUfwvUKPmkq6ntfXhyVAFgk",
  "key18": "5NUcUtPmo6DiYJjLV7VvSL249LbMCRFKmmWb4BbywFvGDrWMCTxwJUBbZnKgT2HVRXYAXHcDvqTBsZ8QMh5eN1iH",
  "key19": "2uipd5JUJ17bAoKVPg53k1rgSwkS7FrvqgnECcxWHmn75jb8K8UWJVHUq891LmrEUNEJ17aWfVg7LGcKMkjpBgbW",
  "key20": "2fBBq8jM6xvr66grfJrrheyHt7aQ6UncQ4VxCgVvJq9Ai6kwCg3JVWZu4a9VBJUK5deuJ6pmoCSmgEt3tgVWW6vA",
  "key21": "2vcmXpAhmjw1MiPuxHBbd8afxHXjQDUrJ1izxLaKJKCpxaim8oS2iZNZxS1VGp8tMjSTH2ADMeo2ZRrPqB188hG9",
  "key22": "5PLQhGceStMaGhKf36Ee7DAi3ypQikrk9ZvibTdxZ9jofAPPKRoZq2bBohNeugckmU52NNCudQCPowKoUeDkDvo6",
  "key23": "L5weEyHjFYiE4yWy2GRSpZewDYJMDA43XgawHr74yzWggoRaXe8w4ymohMCUjnxg4qfxuhE4bv8iC7ohBHHxeev",
  "key24": "3hssePfD4Vs8jfozbLiKc3BKa8MvF3SLNDwHw4n7GEYKNnjGXG2FkMVsax8p9i5TynSGcT62RG66SkxJEFD1iDLr",
  "key25": "66VMEwuvYJ2PoeRp1GBX5GCB1oyXaKQ6TMs4vUSZ72fCPGYquefobQj8NikYgXKgA3bLAkStkwirQtPpxRZkQErb",
  "key26": "KSUEAg21w7cNYWWJgx7pVnhytRiLGLmv4eE9zpM6D1KPmzgLJC1ac2Fitmh5mfx4pbsnzkzve3mpFHPPj4CucDX",
  "key27": "5Du1u8WPxYLpBbcMgJWWHRJyQHJE37GvieUX9FyHey4yU8hqLdgUFAGSvfXQGqMyJHgdiuqmJqvrzo2SyqBBzAhN",
  "key28": "2Z11yjEG4ugqnbdhGLFfqxnvszhhWDx8k1rC6gRbjgzvRsmPDamgGoJdWZPFyUS1BjUritdrDMhV4vjmTf1QdzRz",
  "key29": "5HEeujfoB2vNUdA3VZjP6az8YokTqwyMZofS8MZaaPFT45qVWKeGXYotmdiQzCFuwwGS7E1rV7hvF6MmGtDYBQD4",
  "key30": "3Fg3JVhqXEJHQmtGuiFq4Y3pqynYMeFVrnhDAMMSb8yARCwmtRKQrhcRoGizYcrn9wJmwgo8vs7U5s6f6xcSdrPx",
  "key31": "4vraEZV4buzYibJs2MqRjQPFnwAwnXL1cW6fzXtWYqgA75ZGahidyW3fcih2aoK7Y7xusAEZzhGFMZaeyodkoE6q",
  "key32": "5YtWyUXDLQVgRdxVsPvRjs288s8p6akQvvwCfEk2Hfi4fycuNBKP5Z1sEUQP1GWWkBqCGPrgrjU2oaFWQ5mrLFyc",
  "key33": "3EBQkGSbWjUvEUaZmCDvwybUX9fYW4KBsNuGsqPXr4rHdgTa12WuccQvNJUTM7z5c6WZPJCf39UomFSVEZTEbkwG",
  "key34": "353P3dtLyAvyeem74F1VjNmbcZLspK1HQfT2Hqz2xBb8oxg9zi2mpmEso4QYJGupGxqFYW86xphT2rAw3dzCdaxZ",
  "key35": "2znpKDsMYBEsRehD6nxJAeMo2zXSfbNYr8RNUsbWw372g7rgURusLGKoC2EF1q3WSgBtUT4oAoCWiaGZkZDCgQ8i",
  "key36": "Xt5cURKxbe1AJAz5hRCR61VqvUAcBTMfKF8cn1GBAA5Y8KAboc67tCjhYyJLz9cJXss9iCM6jrscLiSyAzEbqis",
  "key37": "4q61GfQdY8tQ1Xzx4EdGB7oPdBY9NEtAvKdJGp4bKvFXEgii1e9Z41mjSA15tMX3PatDRkhMup6snTmScWwAXZpR",
  "key38": "58ePpCxEZj9MwUKM1iCDMPUG5NhzBwjZzDVhirRAhiTSxdWhGrxBkMob5xZHZM1x3dH2TXz815UUV8xtUvmzkSxZ",
  "key39": "4Z9uvT9jzJuMrZS5MazZxm58SnAjPMWsSQxJu9efRC1W83L5fYRvu6RzqLCG9yzBT3y9okDEz2pernBJVzdePuhP",
  "key40": "2WsDoTWQsFPanWhQakMd5zhhSBbPf11MjBgrcWUcoBKq8wFiHiWzwkC3jSmkYhU3QvRWGST3qNVEtkRAvABwGgHU",
  "key41": "5BANhiyDGjxB7nRdLAgzv7gmjZRwuL1612kpb3DVgBLrA2y5dneNvUumUCyp5DrwoxvvERFxhbacU8GdvroiZwb5",
  "key42": "27M6yai6AXn2NeFmcTHdFV2hmy3b1QrS3ctCEcdV5or4aQ339Rj7N9eGRN3skGnYa6ogXEdD6NNoBLN7hwVhqG7o",
  "key43": "5t8GEboxX4XpAfg6Z2Fz4ifga1qCd9X55xfTaZCgYAt1B6jGGPCeZc3U5pf6Fp5oQvbyLsEUuLSvoEfuhrAawATz",
  "key44": "5gkBd3jcP5mUWZkDByfpT8aQanSnq5VjxBkScx6xs3Wyru1UPX5a7DNEw9TaiGwdt927skugd9322wTSA7Fid1tL"
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
