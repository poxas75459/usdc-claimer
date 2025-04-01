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
    "2bWiAhMn3Bd4DSdeajmojCYVDbecDeuKbzSDi1ZWdKGRhjUS5j4izgGPd1xEbaS6FiTUxBQUHKxP3NMu2kuPB27e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BaVWi1biMMUajW7ZwfWMqj65755aDSAV12R62QH3L2GFSDUfmdfZNp5KHJSA2RDVPsoD6QxEDrdHwgs5KpdFNCH",
  "key1": "41c6r7ZdoRZPmXCUqwWmLFh8ZSXddDQjiJfzs9nmGKH6WEaQRMDCzybQstjVHXuWEqHoxwvLDQfwpVPthRjA9qz5",
  "key2": "3Ft3RXx7ThGcFeZd3iY7FiaTr8UjJng9AKriXRLDxhzSV8Tw261veRPt4miWrgi8YvFa35txfbAd1sFuhcgUhH46",
  "key3": "4nuoPYJVJp9vVUuBjeBpQzNx4ot9kisvJVWYjTpfp6geJxfaQRs22mejTPt6VUeifcD9iRY9bxPJkPtCvdQDUhm9",
  "key4": "3Jw1VSHUwqsu5uMqTM5PMvC4PFsNbEJid7KGoyYx5ajbjct8eo3cJcPT7hC2V1t7kk2uK1nahb82qaDh4VgsaMLW",
  "key5": "5bYoo19qfrwTf1y5foyangEeRk978HxhZMQ1RJgE2f8jCjSaJwWVPrbFzVMvM2pA58kzhyQtM4N3S1x4mLfvhzwT",
  "key6": "hFm2KY2eqNs7oXeuHXimPK8UyrnLYz5yAbWX5FRuvddYgkAXQj6XMvNyjPFxmpi6Gnor5fFGRijMYV8LCDprdiB",
  "key7": "5mQQnzqRCr7E9tHxvsS8zLoMqVBSsHb8RxDqyMPsXjUEVjLtxYSizmMSA4tWFjUqot6jV1b4G7YqCYiJzCkTevnT",
  "key8": "3D6nTur2TYnNmcUaJ9FHSCTkgVDiPxaX8ovsGv9xiQUkKJK4VqPdF5racQaxT3tLQFb2uehDx1QP1LGJ1KFHxdn4",
  "key9": "4cvkwfMmRHvAV5ufZGbe2d41aUWxvDZmEJobEBzuKTimvuGZ2zRBnxmuzx9SDucxji5brDkypywUvRz3A2UeYni",
  "key10": "5PmxDs47Lu9Az3rm6R5B3iaYLj6ez8qMdXMXXVQctZK5mWqh6zi6VJBiPK75DwLvT86dQaABRneHr5bvE6vnSabw",
  "key11": "3ENGhmc9VUAnR3Lq9AYFP71M3g6PVcvqCjhqoFY51qdYFQcNhxzECMqFPwNUSpZ2Z1XD7Hr4thc4xn5D2QM9fWYc",
  "key12": "2TgPC1qKx8qMYxSvEiRR8jrzBraPhQeXAGf1ypsBAGZv66NjRCNcJwPbh7SMvhwkY4qH7uZzWUGYPBCMaY3GQYBt",
  "key13": "3CChCuvaZzrRzkdzmcUZRMdb2DFt12DnMcDwAN9rCtuk3nBCLcvTwykXGfx3RPvT1vaVf8gmme1CYka2WGdk1My6",
  "key14": "GrC2rHHeZ2Ksh1v5J8g8m64htshcZjegCfud82gPDbwnirJJ9VQ81SjfwLzt17e6up3LXw6Yf9hf2rt33QEPqvQ",
  "key15": "5cycqmgJLWi8UWUyWu1NFsCiTaXqXsD26ao16qC3rb1CrR4cSpeK9RZSSdYGg19UKj8JKnRwHyisx364tHBu62oT",
  "key16": "YXKuADtPKcz9NEwucXt71nSkruFuPNAmxoMo32HrXpWM2eY1AjuGsNeQDjxGWrZ9sWnUVNe4C8Qvt31TPMqann8",
  "key17": "358KnwYiPuyBJ2yWUS88j6PsAFsN2ZBcD9imff87cNSmbqzzBcCdfy7uC64DyzwWXfHcbvp2Pvpg4z3Ybxe8kRVd",
  "key18": "2ZpZnGgyakexQhsSWvwEz3UgiFYMW6QSPoy1BVyX7oxAuKvDrbownPB3sRR7ZHJcXMwcNQb9jLvDKQdsuGPz8o2T",
  "key19": "35RfBBJg6ViajPYNFC2dMfKBJXAqNfM8AocgdM2Rgm1TwnyvXDaD1ckBmCAHwJ4XwMaWK5XqABYB5AzqtiR9jLN5",
  "key20": "33pYGwYCYEj9bdoFkyfbmuguYkFsQwj2rBJFXa9o5BLUqKLradBkU1RdidWojj5zQUHEZRhU4Y6k3XzjEcYhpVSH",
  "key21": "5swSRn2bGT3WVkQU8FkUe86GVhgrQnoUWPstZmky7kn3v7kNoU7EbiaZ2Ubfng9SqNpD3b3mVkNkmkkrJVuytKnF",
  "key22": "3exPkQNEjkeNS8BPsZEgEmnHonDaus2bMCsZZemTUUViv72ULpAMdyv94uxTUhwCtktUJ5C1aBcgwcXZrqc9HPvv",
  "key23": "3U4Q5Lr6mrNo7T8B6STo4jExknJLcVEHt3naRrcyXJyiz1FN3FEAeDxSRCXi4pZvanQUGeVrBXKhE3zKLfSJSRrR",
  "key24": "6FELGcC1qnowS2dCnVfesRqo1wvQERBxnxAkPRcwLPVQA1sfMS6hgczSmcTxdRcpowrA72yGJCZe3qwtP7vqSqq",
  "key25": "2xsbAjzoaZnSNXM5oasMP2kYZED3F1aanD1zN3KGibkZx5ubd1vDPmZwzV8aJ4sUw9TVBG2mekkdytavdgLHHpCS",
  "key26": "4Z5Y98tXdBX8rxCJtApAnSeRkFTXNB94uZ9xivaQ6mAeFbhMFvwx8oTbwfhMUyhTXBrnGybd3xa62Xt67gk7wUtQ",
  "key27": "3AsFpGkFHPq83fg7qckbdp1yCxM3Wrw9VATBcSt71kCnebTWnmENiVJDthNfrk956nVuRjZrBrM5mhFFGCbk7qUD",
  "key28": "2arNLEWiN12z71w4aJPvRZAAA1JJErZgCFXYnZ1LKnvbt7pSdYq9GKkZCopfJDCj47R5UYP5iy12fmtcLYP1rTXG",
  "key29": "39awhyzkoWEjU1ba6vtC9sSgV3Lfw3Ja21Qs8u8nyiLZSYRNFKS2To1GG4rzCgSq2Sm2gf7T2xLEi7afAznW6Sxc",
  "key30": "YuP4LTBC6jMgHmVgeogKV1rd8NL3wWTMzb4GLajGSqmn7987b6QGZ7D5Uid4HTNrUfvz3n1q7SWtT5nyDHeZ4FY",
  "key31": "4f9Pvqft9FXAFUYUDATbiztFsnG5Kbce6R7UvBitkbZUoNMcaN2WbSJn6EHC79qCABXvhZHZwzsuShKVGiSGGZXq"
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
