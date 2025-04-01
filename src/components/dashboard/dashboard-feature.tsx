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
    "4L1sC6Ar5WhprvKwCircpaPpriTCcKySpdDWNX2Aqkw9a7ozqD44ND6TjHdxHtdfUNBF3WvZsg2ESfLNM5Hp81VV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2QgZfAzmUuB1ihQJ21tHWNpsWZv2A16rurMe9AYJJJdNwzEP2nvs6HcFoKohvrfJtHSxdn4p9bbjZinrUqgLGV",
  "key1": "2pcfWvBMYVApJH8o7etKpp3Tj2XNx5ywBpnp4SWLxFLav1TXTvjA3ECLNddcDtwEn7oVWzTBRRQa1on54ujSrXmu",
  "key2": "4E1gczbkXV68gGSxU3WMfvshsBkBg74MWMQBVwxSZbnFSNXW5ASDtsSVbBid1a95vRXKBcNLSHj5jsfkYdJGFtF6",
  "key3": "3iZn2KG4tKA6LanUpkAnDgH7ww8dJFHEk9SdtBNqX7BciLjHhmpTtiYTRBRo5HqqiXDWsiKWM15THpFCcAdrbYfy",
  "key4": "3dY4ZG6SjhX1MgKha6xqd5wiCmEDGAH4ro1Y4PKFp6KdJTEViJUeD2pd65CwLfRkW6UEnMZyL67SHRzBsFMVKYPx",
  "key5": "66dVCAKV7YrX6sTYgqUWziNfR83UxjJzHLZqUCyeM2NJv4SyMK62SzYk5ziPuaaznM2o43g8Ppiiug4Ew9GATppj",
  "key6": "oyCqxoZwHo1o1rquZnPCE3f251zhjg8XACgfhyTGUqHqJgyKnSkaT3UWCziMr5MVEJoQcYG668V5QKuEPaggjYm",
  "key7": "A2p1ByX9AxMjgyiS7bzGEswviqSyujxG5AdEcqpt9o2fDmWiJXhoeycdk5C4xxbDcvsCmGoVgkpJyBeHNRS932Q",
  "key8": "34tk9FUjQovi6StD3MzPw85JutFW6geETuEEbc1YS4tN2A2AN3928EXjxdZrezAXz1unyxSRQk28pCUS5RmC53gr",
  "key9": "5xUovPi1zFcC6rbQLBcUBWZ37EG6PdENxWvLrYPofbEDnVgRP48MxPtkvP1YR6DNqJE8ipLg2Rrbid6KgiFxeJau",
  "key10": "3S9STqnUzkF5rXfbgkQFcEgtUhq34NQXZEcq2oQQSLzd8wWHhbmGD3esgWuu3g9NChSGCJNqLAdggCLbHigLXEUC",
  "key11": "3X8hp2b4GvSrxyTTKSxAmCv7hRqvEtKKjtwMNMhC6fLCwBN9KSbtPhh5up1iXjn9ovM1rP6n5a8N8uLkMxtYWisM",
  "key12": "3EHtgAQCBdPa8aUgVTxoBEnrCXhPgsd5uRerL5fmekWePYGrmakjwjHzVma81L43BTBm7qFHM4jecR5FHDU1Q9ha",
  "key13": "3C2XN3GA8Mj4f9QiPmYvn9gezFnnDER3BEcJDBwTQVcmtFx8vAFg6q9cHbWc21NfFLPYhj9GLxUPehfNNz5EEwPK",
  "key14": "327vmRdQvwo82QgFMkgQ23jkkpdXmmjoWDfnP6bF6rpdVsnqCtJeV5zASHbmBsYE9uMngyjkbmiYSBhiguNMS7qV",
  "key15": "2kumSvVBe3JZz6zuSMfHWRMcNmdJSWKsoVdR3KA7Wm9odmAvCfbNhdPw8eSY5M9kobEVCmsu5XrySVcZeiuUnBbH",
  "key16": "2HPZwYnyVNsZ99C2xfZpGXjZzFSUMw92HrRDgLMAM3jZ9V1ivGzSkwVm1g12hLiLxdGyFxopsNhqW4u4bNtq3haw",
  "key17": "4CAypDek8zntRQxzRgFjsda1Aq4geUkgu8RhmrmkvpwN9mTCAiDxAxG3oQ5tnk7e9gCLEtWqopYmaHJaV1BUAJDX",
  "key18": "3cb1L9J48A2SwqQW9PQmXnA9ZkEEwT7BUrLcDsydHVmvJDF2RnXsE5NjpPxsydMg2WpgxJ6x5DkkrXUEmreuwGP1",
  "key19": "2AEZQHoo3xgvTc8EXc9mnHh35gWWWm9B5BmcFDKSbtn94SLzzWQVWb2S4rvYmHPgLHWtenCBCVT4Y5oUrHTiqTa6",
  "key20": "5dKzTQafRinC4pkt4jyACnrxfydGUrTG5xwJK6fK1PDV1iLP6x4Y5LkchHy4Jc4WEhNX9EkB5XZvRrMWJm3x95Uj",
  "key21": "3HJDpK6ihenVFHojumTeyW4YbEKLzRKbSVHsX3ziFNNC7q8n1zLfSKTU4hNX2T1s7F6vWGZ85qcvLLQypxac1VYe",
  "key22": "3L54AuByyzPQfqv5pCq5C1rHy2DrAbaqXFUhu79LJjAZkb4RHpqvUXLd7KNLUfwfMWeoWpgMadvr2YCtpnV5CKRt",
  "key23": "KF9teWozAdCE6qnZFqejZuFmZWJVuPKh1ewnphAKRtArSM1rFmrdpdsLLtawM2tiiRE1VVsPnDqZ4YVbdVXi1E3",
  "key24": "22PAd9DVLjj4SAVDnoPMQrvC5NjZB16jVtEZkCnD9RBTKBHcjcq753xwNiRJvByKW8LH8tTVHAzgreKjBHkyRCwT",
  "key25": "415z8PvwcdSfWLXytVB12uqaK3aZhx3MwHFueydodhwhsxan8vLHNzTDQC1m2LYydnxVppKSqbhYWjR4pyDBYqiW",
  "key26": "51vpZzroMfytUvAEh6pje3F5eJuqtRjErEmSsNcDxqVAvfxKKzSSnkTGThvzA6vmNkpBt31abPqqN5hxvRr8EXoK",
  "key27": "Da3R6b4bCGDYoeUf53JyfQdyqKmGRFLKenZuzBVKaKAjmgK9gxqfri1yTQ7x8dh8pbA2Rb1Y8dMgsPNwHpnUniw",
  "key28": "2V3fkxK4Gwxa2fajwbDfXUpswa6Bj3pZQAUCPQCyt84ZipZRBVLm3Y1Qwfg7iX5jZnE43GYbSQc5PmxFnZBsdYB1",
  "key29": "4PTxj7VH6PXdNVkkLjABU2QneojpKqj4uxu1fNT5TRdZ5HZh3V2wET32whJKd5nMHG4xfFuzWm26ZDF5qpsvrtEc",
  "key30": "2xkFZU9Zg3RbsC3YMdwqdhWMSUScgmSposnTp7qQmdZqzKBmNi8qwHyeDVGNdMkE3o4C2ujxbFqScuANwTz3etFD",
  "key31": "PRRwpPesKsDURPSKqDCQhuRfrtRzdnUq8CAAkDzagURQnt2P5BkGizttwNzninjuBc6mGnjbL5pRmvV9Adv8TgB",
  "key32": "5wh7wk7HN9Pp2Krr4f5ekeTpQXKrUoj7CFF2Pg4B8GVCahMiWGEK7i3Xm63toewUHHFhvTS2YytQ6JzLtbA2EfYU",
  "key33": "3ouUr5AXVeuyNbeNQ1XhQBtXHpm1hs2TNAKojY8qvKaMN8fVr3AJ9sc3wCZNwtoybJz7iG9PxgrzFbbL6Bz1HRNo",
  "key34": "5Zn7R3FsY4UMqwa3VargwpZ9qvkTnmZt4rwm1193MpbNarCoUsYCmGr7iKH2m4Lq1JikTWmqv7sew7FKZWBoUaME",
  "key35": "3bupR94eD9KkY3MufAKpqGcvnAYe9D88H2Gz911GZJDscYP7vzaQ4LYwbCigTpH9zkoFHJP2VPqvtEZ5FY596rD9",
  "key36": "45kct1aAwUJw2Hbc6fSmudG91DbNQi3Xo19s5TzoniPjtBwPbz3B6bPTNSWMWVUPGMFbCFyzAjJHdQnFVEgVVR32",
  "key37": "46UjiesgY1b4SAssatSa86i4sj8Bnqrkn4Q7oeDTmVwrv2hUxLfEuF9LY2bdoKRFf4dETXiYETSmnj137UqBij2c",
  "key38": "3o46rXR6AqG9t5tjSpeKTAkHnHhY6Z6dVAn2i8tZBc92niJvLpBhYouy8xUz7pZDZjMDwmj6MbepvDt9Zdu9agmw",
  "key39": "Bcp7wbWQuPeYtYyB9Gj42xyMSmu5oYGuKCbijB31FhHdAhE9Sfg7pXcFYP8NWQkBX19WzMn37BLRUHLUivj97so",
  "key40": "TuaR6yaHEXb8fSxpQrYKoiVQVcP7JDggaaPeaPUkccimLjDJEcUNAb5WUouPdSLL7MN9qZqxqBsx6QdD6NH5AtV",
  "key41": "22wZT3fcf4a9eqgSyghoaZTnfPd3HBWDC7c1V1g7R8k24zHjCL3zTCCnXZSGg5Z4G9w6BV93iYNvMumHF479NvXD",
  "key42": "5jYFWo6Ux4TgdrRc9mrmJpDnxLxtLE7VMGsSmyLhdHwxbYiGhC3zgdDz1RGQvge99WLb5Xjkig7fZQ8VsUesrBN9",
  "key43": "2bnx4xgjebQ4AdXticTULA8i9jWZxy3zd2kqiaKeSFgo8akJoFYheiJ68Q9Cf6Z4iF5AsaRjVBcgLaCYQZ4jiAMg",
  "key44": "3MazHLdKWecDnwatnDL7QHT5KpbQGLoLovnyYzzStnVmzKAnupvgHGh2hhCk13n8hLmKksnY6ZmtvDSUjzRU3rTd",
  "key45": "4GK6cUaKURuEmGZnQYfyLKePRWJ2GeLSKYrqRnA1dxpMpmC8Rq7tCkZrYeCXoEaBotwDUuvfYPi6hp6hFobkoBAR",
  "key46": "2egcrDNn8CcHm74YAFRGQCK8B1S75KC6j3XtoMByt7MShL9fcA6eivpyWaZH9GRfxypuWcuKQ3qvn5HvZr98pk7J",
  "key47": "3iV2NR4s11XSvzcHcB21bQ8U6Cg1yAVdzp2uFL93JAmRnjMJS8sK67zn3eNZxZEk6XV5iTmeLRe2MFh9pi4D2Xv7",
  "key48": "5LmRht5XmBCJqUnbxRLxE4gAH1mJF6pTVeYX2rRTuyEEw9uGED2iyB5uPkWVwkPt6n2HXvJ9SAArusJPEMRozcEu"
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
