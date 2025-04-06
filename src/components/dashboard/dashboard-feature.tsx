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
    "4awShmyYZ8LT6qnaMTx6BSVX5N68wBsrCZDsf1aUzbxR5B9NDsCdF2j42w3SkUZQZV9wL5LjbJML6Rp9TqWLiB3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LfguLtTSrm77t7E5tWTjKqYQzFctf5SW21ydV3Zfh1ZuDoBxytfQp1Agxpw1ySz52CxuuC6HgdFfigSDxgFJEAH",
  "key1": "5wf9YKVvuPpnseDAdK3eKs8K8pDVNUqABSpfkh8aMeo58TrKzAfJTYQKgA3CXVQRs8JbcJF8e5NYD72m9CZMreZJ",
  "key2": "2U8oAMLRnZ2oHaD67y59eYewzdKK2Jnvhmi5yu5nQ6tyDxbAGJgPYzp32ja3DxTf1C1yV8j4tnBvZsenQmFaXhg2",
  "key3": "4mZ98tfZCUKx4VtYFHnneyD2JrCgfReFLERwkT5PTwFz6Vsj5J3Lg1xV2B56Du8dPyqCznjH38VSvcogGucXGFgh",
  "key4": "4etdEyQzdo9Vi9VYBEfyHLSFQk8GnmWM8Egi3LWL9Bsca3kQbpoccG2YyjvAqoaS99gPCT1nCYSFde7fXp7TCgvA",
  "key5": "5J8W7RsiECP2i8eQMT15f4uhot59bCgtcGkxuNLdh43H2kR9jXxuAABt92itu6rfNEgKDuYsWMPcUgTtiGDqwXpJ",
  "key6": "2CQgWtCbCsnqTKWFxez5sFcCzV2ia7giXqqgKJw936qsSpGtf7yVcP4BdmDQsLwNg2dqKUpn8FowWQ8qCr5ua797",
  "key7": "5fzwMBFwBg5zHR9f3fNgvnVKAV6mTzJcSMxzxdqK29BC7UY5o99KcB8pTiBthKThLGkY9FDx3VaquybjyWyX96UY",
  "key8": "yhCqqS2c1NhegAcNwKocMAumFZr99U3AnYrcwBUJvGrUynHnkZMrp6NpTmyAoNSENgciYszc9tWM4iDqhcZE3sW",
  "key9": "2KQVqwmntocBDBtX2gxDRtAWBgKVar39mf158ePDnuEXQ1i8uoD8VqY848s3VvnshszkZ8eHpoqnqiekXRyqAVcR",
  "key10": "21xXy8CtKn6wFtw9LVBfgTaPJQHLekRu7CDdiavxvjE57kGG3ACikgXKatWHu6PGtcRMQeeZv6gHgESEdjVpcQeH",
  "key11": "4bYywdzDr2BP4jDf6kn2PFrumLMRKC8Lo94FTAc9DxWWJUzjDDy8DfX7wQgMK3iQs5ydLaALr82iSCAcK6bsEnvQ",
  "key12": "277gQ6wfQtowsWooswqavkP6pUBanm4g3tRH8qbVBUb86CAySRCL2mQiWn9uhFnPGBTnz151Gb1mvdFrfrZQTgxQ",
  "key13": "2v9M4d9bjHyjAHXTXCu1NSbs5WCecQrbfn4jrhWpaeqp2pdXNmXLYLyqvqNu6KdGe6GFaSX9XUfejsPN5wUUNqvA",
  "key14": "4Jg597oTfE198BurVivRnCEBcBBBnQnTYUndk9SxuhfDfwzVsCV7iiHVMLZ3KKWB7QME5LQRTm75iRaa4yNGECsn",
  "key15": "4fbW3tRM6PD3iDoyhxSWFRN2PAzrzhQ66Vzo3kRMZHUuaUzNHEbuqbRMyQSTbkCSQk3TRMKzszcj6VRzrMTQwhfN",
  "key16": "4AVASCsiGMR8oXYVQUE76fSEzydUbjskcdfPVZKNa4hx7fEKd4L6nyStNoS28KozST5FxbJLRxKwXvMucbZAqBQs",
  "key17": "n1Y3WNJqYB2xYT619cbu18Y2pYcm5kU44qn5c6xecLopSQhEpC9v9B9ggkxkqLLqXULcX6Qf5JSXhzEPJ8x8DqL",
  "key18": "4YdXNx4LRqK7LS26DMUVgSf2b5xyKjwgzi1ky1aGZRp8SJTT9FYdLo57GtJmsdLyWnKec84ozE2f3kinK11haD5Q",
  "key19": "53yhuWGd4BYhRD3xgV2wCinDAS5fF2kuvrpqU5Ex1aPsTBpZQAgZvKeWF2BSS8H1FLTu1axPBBfDXnecJJyoZkxZ",
  "key20": "4pqN6CTiu5zZFghbKvhTfcwnATr68Chob6pcxEVm4tBWAnv2cboK9ZBtopZwoMrgBYFKwehDyRCkCDfr5aWEoKzT",
  "key21": "5JQmMD2vcYhunRtMPRHpKmFce7nifSq645A3p6QFNAPeDffu6Y5f7ZMbUYvsYAR7yLNrrUvsp8Ze4BFzrmZdFPPD",
  "key22": "4QaMkYaWnmGTMCuqQVSJ3YmGgiG6vbkyvjAKLXFq3VynbHtBExZBmDWa5YDowfwfBR5EwTMW2vxfxmzhKYkcTX5Y",
  "key23": "4ihAtgTm1z2Erke7pirxrTNt7dmR4Rt1r2aYPwZEHrbTF9BgD2qRLHtzPTuHk2KXmLqGr2ij2UCyCvQJXiuqug1H",
  "key24": "4FRPvv6bnCAW6toefsYyzhe1AuBevjfCDcFDUe7Aoq8oYiYtmkefigys1JnsMryC6nkAM3q1mqZhNg7R5csr6yt1",
  "key25": "4xRvCpYurWjg2rCAFX2TCyem5iea3MVv8jj2Yr6cLEgtR2caYAXbRFjb592FCcYXTZysJBtBKtYFMgdrRSPmFed3",
  "key26": "48L5Py5pzNCwxvC6GxAgVVfwnXbSeesFsYvK1ZJjKuMaaWVDsTkcSSsWyqdNRqKeHY1sXCijsz8gAKDnYNfam4jR",
  "key27": "2ucB9SpYUJLMNMoDT7uNTdrt73BXNVXeEqxkCTRzafmHJXqeekfRpHnuncpVDKPGJ4x37ynBuy7k4aT4temDVkJo",
  "key28": "2L8GYNWMznkWmEEAqMuNSN1jX2rLzKhYtVWnEPUZ4P4JZz4ADt61ijm9DimKoWYjejFyEgTqaPn1wJDPeV3i3UKL",
  "key29": "3a998cmYkP6GrgJTVimCbLqXCUDn3XRq27639GRZTuohpJWyj6mcKeaDbbVi7FKgBAZTApPJWfVffXjgda7V7JX",
  "key30": "35YB7cFSR1yUYeEv1U8mzxJEFD82F28udBuiaiVsWgffJuyyCuPT34JieQZwUZpLhqftu8k9cp3UL8oky4RqiTX2",
  "key31": "DeY3VAF7zBpgVVwpCwKkAwo8CRsCsaPeGESMUqt4aaA8QxZnzupejHYPeUJUZH5rHTou2fxwfTaWVFBmB8ui9Sg",
  "key32": "4KYcMiXCuk3gE4sxjYNQCWzwLMbHs44BFt3nBsXnsLgcg1xKgZy6mCt3v74DUiCp8rWLuaEfuG56pBxLqbgrm6yD",
  "key33": "3ZJZ49gkGktwYtcNHm41PLcy4WqQcXmr7DnwXH591q8QvgcgMVwcUNWH4Qbmh1qTEYV2y1E3TfhXLMXTtDA5TWc9",
  "key34": "5wJi6fbQio8c4ETy5aNBsDZrUCy91L2yfkfEHfUz15GP6YAuAq6WDYomFXx3bYyHADYvRgXk5KYaMEkhdoCDHJnj",
  "key35": "677fwWXp7K74aLy4FKkDRPQvBaxdNvi5kE12RDL711LHsBfZ1qgj7t4s9fk95BfgfAfCXmtp3b9zkH1rBAhg1bMt",
  "key36": "3depmmwKYr4K45Fcd5LMVbdiT1EqdRc7T4WtfA5TqXgobDKHNqXmjp2j6yPtrUc65NdJYQmRatG5j46pKSHRcyik",
  "key37": "5UrodTmTnUbdawpT5ZzqwWJAY1UN6HM2fovxz4cLo7GeKuYQ8m1GgmojZVD62tdYKHSCNZ91SiCJ7YDQKP4t6qUB",
  "key38": "2wVbXz2YRcp7LJxqJiqAWYApC39A88g45eif5KhVfGL1yC5Q5C1Mx6MZxqv2yeJsarNMDYUW65E2Rzpo71UJj8Ue",
  "key39": "2tPpHxdJrvSpcwrVXKhGqvB5BhoVvvVSycJ5GTVjPkf2PKPGVJ5Mmw8PYpgYFjXUFKm2q3eRdLZxqJiGhcCUCKkf"
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
