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
    "2EVZRmXoZwTt8XAW6HvTXJbP6kMzfQ3qp5NVzFU8QmYtLcZhMLLn1CGTSoFpsLgnCCcHiYapE3HLqk7riQboYevx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HzG7JdGyR4Qf95hCHCucFufYbFUdFExQTxjJ2rEpz8DWqmUN647tSTJMLze9nuALj69m6G68dYkY2dYRpKJzFg7",
  "key1": "4ALDWStAVV12BRpwcAmRPGXWvHWVDhmQJLo2wUWiA9TEpacsB48giFxger67Hx5vn48UxzayiGhW7f1Sbto4yTRM",
  "key2": "5CnWcYpMa325eq2iYbiZaByECBnXvnvxRXw78nA5D5S3jxgsrAXP198oPG1N4jPo2ZaLfjeUgHLnyvQBudFY8NcS",
  "key3": "2uhLThWQxtC9fJVnhrvuh6ngxs7KeKeT8q2qNaRpNP34PCfkoYg5gKVgQNVy2mvvppYmCjVFa3YGD7CCunr5UzCi",
  "key4": "2hx9bUWGqnzEZUt2YUNHwZv9NBZVErSBWPFJYysNWVtZvRgpqvNyyU8CEKUxKVp2S6b3C1X7259rPrTqVHmvxjNF",
  "key5": "2sdFRHzEtTYwvq5A2uFbGdy2GFdJeA2oheHAUToiSpeDrszhA4f3jcgBdgTHr2dKMTET6AukKFrMWdoevtA7HxqA",
  "key6": "51wCPKB7DX8NRoSuqfLhXygN2nFdwfQBr81duMdfosEGcohmkpRNbDMmMgmVrs6xcSCcyfMaJQ2P9KAG3aM42YjB",
  "key7": "4ayKz8YMSrsVkqFVaQLhrim8FP1ytXNhLxEmQyXjFU46xB3zkvn6ZWVU3zTCs4saqTXdin6F3X7HU3Ze8DBexGEv",
  "key8": "5oTyLtdqvcxYi11ENPJ2xt7GzszJumzrFLkzcE6LPNn8vBoEbX5sGLU2p8U4gAmPzo5jpnod3myP3FMkP5ztckBS",
  "key9": "2QtxLRAhwz8qTAB3nwNCNn2WdBshnJSMAyw4kE5dezQGn4pA6G7iWpg2jetZgs2FW3rKqPMceZ8pCCQQQFwG3f49",
  "key10": "Qpqu5tev3dKjvXHGRpH9tC7gqQgf2LMRu2hjBZhNf2WAyYkUMBAnU3WvuNHLXHWaSjvoJkqCsvmYE8RYGP4rp9c",
  "key11": "2imnK66Hr4E5ji4yaSXgeihAvcCVz922XsmeEyR35AR72biVUTySTo3j7b9Va2Za6zddqrFc4WJkWzPCbR74dSdD",
  "key12": "3S71uAVm7d9rwQ923bKXNpFAjV1bKPQMK7unmvKeHJ4EqLWWEHkFAHgnMkoyFPUci3CxTcZsUJpxRAVbuPGf3T5Z",
  "key13": "2NcnBU8zPxP7qz6X2nUQ8ZKkCT7zyrsNaU7qV4ih3TC7d8eaeb5RLusFRoHXgsQdjJCUPDxQ1WKBRbdVZ613Wz8q",
  "key14": "G8yE1f8mARMmPJq5JotQkF5DmuGxA9Mevnh5YcphmJaXjED7L4ipMg8ZKuNL6UCyrgUtfPDAH5P2CYbWTQJgahi",
  "key15": "5PfFCWvMDMx1UJzkLo6jQGTVE2p53eoP3aUdbndnAuofhGbD8Qo2xy2m9bouaGUej4JbCdEvQ8jtmnukcSwEBcqP",
  "key16": "5YJqgBST1twJmz4XFEvgP7pYKQFLHYe8GFQ2be5PiED5mxhH7ZZb3zonwpNGGiJ1vSZievVJkF8XACAAP6y5c871",
  "key17": "4kruCCMvFdkwB8VdcWMGcoxcx2swDBT9mZj4eTRCYa3EgoqD8eRPjmnqDnpNvjHJwp3BwKPH5t6LQUDo9t7KRJQ5",
  "key18": "4vuuBV54Dzm9CvefT1dHcD2gxPmWCSMhHWWybDUED9ZXgHJKHJCALGzSzGNDsSyffPYH74Rnx7ehWKWZhxzgnbYx",
  "key19": "5auceMKTq3xzFKN6yocfL3rSrcqAPSxTNBAsLZCSQRuqjZp84aehTTnmF3eFX4bpNgf8i6FEnJeoErEnVXLK9xwP",
  "key20": "Ct4oKJ2rKx6ydiqSrBmU5UWZaSTAPho6XuykN1PVjcwUH8PDXNGHe6cC5bBeNebHKqJr2LZQ7G4un3Fpktju2uH",
  "key21": "5j8X2LHuL97gZxVsuENDQGF27uSffnfyAFKNcmF9sJT3jRVSFcx25Vj1tPwbMsUiyjVNNTPvdEywaR3GqYDs86vJ",
  "key22": "3VYAzZRiMaLCgpGaim7NThLoBoJ7ySAHaV1a7jK2ySfrS7j4DTge3dqKpcJV8ZMr1sSPG2hyHS4qFoeXb7pbyjR5",
  "key23": "4aJZkGThfWtqVx7qGPxgyNkk1LHrXMQxi7rP3KK8M183KMjiDReAQJ26yZSmBNMLMozMnq8siofzNhD6CGK6MTNE",
  "key24": "2TN3cNSfSPpqf6aU5Z25HUwjmyyFrtn5M5shP6S7Z8bRQcD8sWJV317WyBrcchD6T2GnQpG5yk71kX4TwW8YcHZo",
  "key25": "5DTJqc3ucK7uj3v7iQCRLEnM16zdMfBVT57vYZVSZu9d9Gs4R1TuvUewH6utCgMny11YBVgBzH2EWe5x889PA4H5",
  "key26": "4k7BrPpEcG6wHQfEKsx44wtb7yzwqN2RbrPZpnd8ysAMZ6aokxC7hNAKJ1NY1XQHXUf49ZfNRpbUvzEHnCjezyJb",
  "key27": "oWZQLnoGzA8XMowTzaC5p6eXpen32tnAz2tM25A69vMHbhzTvXoJWGJXR3vow3Ee8fFvgihtKdFaWjNYn4sdsEm",
  "key28": "4X9nQAK2EiTwxqd1vahUFtSfcqKaFNbFP83u7VtkM9oE1aD6aG9XYLpa61r4xesH6QwjwBKTYGoLoszuBwPjtmZ5",
  "key29": "3juYjTvKvyhRGWhJzJWgYeRfyKWnQHrKXnwxXgKvRtQeXRuHdUqb9S92aq6RnCNXLBVFh54AZMJq8kHYaAoPJoFS",
  "key30": "5gJhdHq9utFkHUWDE6g9pJBdxJqHDCU6ZrjUC2KqeSSPryLVEaDu5DHgjCV56FFMH7kn3GzKbLrBnGLSS44s8Fmw",
  "key31": "orvqX1s9BYHLkJhHeKCBchyWjJREJCuwPaPrfTZpZ7aQ9PBKRAu6cxGF2KX8BQB5KFuoLiVAuwBYgUBMu4fSTda",
  "key32": "2bSQXhntdkDdcNfyRBzhYkbB7KgULVGAxJoJQME8w2gJAKgRhx6W2aSaoKdbbvwimxkKzkzi1gD5ufFCnMJV4QUL",
  "key33": "5fGwqkE6kW2UK9UFG3tANY9rkhAzWAs1djkWUTuJ26dM1SzmLsmjxrpmxbfebhVfhH5enkYYrXpkxq1E5Lvippeu",
  "key34": "mFZFT6MRBm18C4n7sYxjmBHcfhVDMgpfuiVgFpP275BNoGtLhiYe25xUWigQygBQRcf2psnJkrbvYRhJyWnfrZc",
  "key35": "65REhPf5QHty6GxZX1Kr4BqPHrXPXe7M1apAH7U8vMczcvNysxo1HcSmyAz4PEV1xdNsRh8mZDERQaJ8Zxi8Vj5D",
  "key36": "4RTxiDh7nHsFYrWaZQPLUP59Soj1iAuCyBgryrJsSUwCR35ZgjZgpK16hE1bsfaRZd3eMsXkQPeZjJbwzAXCzSat",
  "key37": "5QckSkD97t92xUAYXxFWHq6T5d9GxEqtwTaUsB9RtGLKTGv5GhZR1o52szLpACqq2Uj7hS1i67U93qtfDZfUqFE6",
  "key38": "fDH9WHHmWoTBNTrF8MyocZtejvea1W9hsDeEJgdnBib2ArSeYtDcfmxJUuxFUp2nbV8ujf696uEnkWkfRmegCPw",
  "key39": "vdkumfuYpDtAs62HzqLfntUQN2pBUUnf427QkzqwuYg5zaRpHyj6wqwBLdXviee8Qg8kC3otjL6zHcES6BugBjK"
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
