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
    "3ysNrTXBJecaAe61eyM2kCdk6MXJZEHua3Z6Lb2ZJsVoWgUMwY6eXg1umwytsi8XJg1kytCMdeeK477i5LJU8ftb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434GM2ehnKdEXtZZANrCPitsibdHtpH9wfCEJiW2WJrbGkXyWLJQ9ywJmrnDMQMoZZAveQaj8rf26nvAjgm57kLT",
  "key1": "5zEADJ5U41TxtcKBeEhTGUZTiDZKXjXfzoeEhnmKDyV286d56F8fmzBBCYrWv4bPv7fHTG77AfeTshmL9hEvWctr",
  "key2": "3TbpN3chbKcJFTEcLpbkY5ddEKcb2m4j29ddDqdS8uUPzVSr1pUbQfqKWdno2yCkHE5Rm6SXim5nX2TKt2KbGKLi",
  "key3": "46Gm2B3CmS4eLkdknGTSjmhiFyGdRgRnwFDBoe3CXHZ4NA5fooNRndPbJrX1Xpt5ozu8tCHFa6jwmJWTFXMmTii1",
  "key4": "4t52FeprV44dV6ZPbytu9TdW3RCoahHCAb1JtBjiPSnyGPP5KFJJLTrk8CdShRZiuvgpQhS4A37re65Y4J3iGtu7",
  "key5": "4BoYDZ7TbnSNUqn6uFAF9nzbjpihA4UTssWAJVEdVMCvNLKy5ov3sYGmH4pxEyWNtBz6FiLPZ23HJuXUZwYkv8Md",
  "key6": "KWZTkytBBVjmyK1iJeXQWpb1AGUZtna2y1T4UdGNoaJWRN2Kex3YT7bk6hLRGNSe5REcr5TdApzj3DnEWYAdeFE",
  "key7": "4gDeoipNW1567HM8J2FMcC5aCweggrxaV7RL678ASyMhareEzF1MRE7VKE61Z6ESXqk52kMfF8ZRMkbUwjTsB7iW",
  "key8": "2RKP7EgBKKLgabmT1oWqko8uHYNWefZZTLr9ZBQJdrGNKxrDAejgNL7VnhpSogPsE38owW56cwwRSBRUNjNe8hUt",
  "key9": "5J8xGR5Pnt5xzdDMfWkKFfYLbpFZ4yMM9LCJaLqtdXULKMktYzHR5poXVti1VxVJioHePuNAepzR6hnaGwPLj2Eu",
  "key10": "22uYxhkV7WcgjowcvkjPeZDBYWcHTzvxkcBBGfFS9jMTcfaiwC5u3yUmKhg8r8m7naaR1r5DrkoX7Q6qzRkVyno4",
  "key11": "3nMxd5ZUK2NAYNVe5zxzyr3btcG845nTPqwbFLRbWTMuTyj9S5oSByW7H93XYkjySq7CRxLRN5HXrz4sETPyxdx9",
  "key12": "3UzfK8jxaCS48TrTCtPK3KU2tD2PHFsbsW18MepwHK438PKzYDThUGi67HRVL6FTkRwfehNzwwuuTtqGUw1iqaQK",
  "key13": "5VvQG4qjKUjpzcYBDZnhbhRYW56XidUtVqRMWSQZAf5rabxhpsun47rD8cFQAeirY69W33VtNNN5i2kYKerV3sJp",
  "key14": "2jpbgsd1LhBVmM4WYBSfjg1VA1Q6kjfyKhi7oxkuAYXbc6HUJ7HZjGJ9JLqPLAjrZQx6yajfAzUE2FyRHwkxQncr",
  "key15": "5GeTbSXm6PEfVaEiN6r8meGcuLR6NtAYzrhnWnaiFAo1BVXZziYFcGMZypafrjAGz2bBjizJfq25KJhs4k7Sdb2u",
  "key16": "3YyFREzNKVJVEH1pbSukjzRFGywGtfGrYNKKqCAHpui1PHePvwfAt73s8gtuyuam8nY8ZkEUyhfgn4LywTMKKAjN",
  "key17": "SrUpN1EZkoccTTA8KfFR1SMeo49VhRwRVzbqa2moVKguns1kukUykya6q7CoseMkwXsR2ZyPLbPpDWtaGARGXtY",
  "key18": "GsEJxqDuXP1niPNj8tCnUTXPTE1KCq6Z7vYB1iEy7Mw96ceyCknAb4n6h1Um9jvc8UzZQ9C8He4v6SrLxLm8HL2",
  "key19": "AZddzQb69x2B6g5DYtfCrW7SK1B3Us3zSiUGzoakr5WYf7RAdKMeh4d8kuLrv9p6vJN6dsikc5dEAEej6Rw1Pa8",
  "key20": "26ubT9TpaYQsUQNogtGKmLASEp4HTAp7n25YS2HegdfCKFLeTFW48rABDV3Sh7pCf7yKRkKSVkUpfxcptG9pFaUt",
  "key21": "K5d8Aiz3RtAPNoHR4GmkA7eNDSy86cE9eMRRfd5PNAG8DEMCXUVi6iuPhHtznMvoix4BGysKgM3pY27kiRKCWYd",
  "key22": "5TyN9hxG4nr8TYip2neWfvbzfQZtb2rQREYL8N5FMoQb79pPGoZTfQhBzwgqc2des7GAqoimEV9YM5xYDGsiN4Ev",
  "key23": "LLgAFHPviVu9Z48WKPw4ouRVepXLhPeSGjZYKCQiwbT33eM8xeSYCGR2ww6GD52xwZqaRYrF5suFpog2KQcQSQW",
  "key24": "43rpiSsv14yQBW9zR1PJ9xtapftk3wkp6QnEmtU8kTZqDkmwPSFnLgQSzFadNJqbP4tKVtW5bBagLb1cBRAJV3Ye",
  "key25": "3vPZns2Uxq5vXiyg96gfXui79T4AvZnm6JNssuz9azJquHgdyQe4HrqXwK7vvBMrqhG2L2vwJ3adx5T3WXMiTigz",
  "key26": "5puHAwRvHcQb9aEffPBNWm3cJMQpFnrNb31s6xPvKMxRgEBXLCvAQQgbji3SjzFCBseFH8W95nZZ6HzvnMSf3wUq",
  "key27": "4Xkinxgrj66APmwdcs6hQYP9u4cyiTtx2ETv64iU7vSTw3dB1Sn8XCTsCYZjHNwz4YPTS8Zoheoo7hLaQPG79zTq",
  "key28": "4dhKLJxDWhNceEGCUAXWCseHrJGM7FX2NRxH5Wx9Ay4GUs8D3SeWckvMRnp4HPXNexcFQoFnb1mMngQ8YhYxgua8",
  "key29": "2whFXk3LeYjYVixH3E5KkH38uiG8oVSfCv6RGWHA5HDMFVBrfCFRPmi5yGiSHNF62YTvQxv3rLtTN4WVKb3gXTNU",
  "key30": "QzJHuTh4JDdToWGYy4kXn2cbukzEK8jqCqefTdjRU11gNuk6rtTNk9WmYAePFr3G53gKQHVucJLKoto9ndozxFK",
  "key31": "DiY3YRbs69RkC8godbZ5Wyk6hTz22R9P2UEyDEoCrKMUsRPWC4bmEhLZt4DX3FbdpNy4Bpg6VBKCxekfbeMZzT3",
  "key32": "3n8rKXY73utMwDArKrG58rEthK6fhSEupB6ySbYPNWRpPuDaQzXhHvrRFy6P4k8nhXuJtxgw6hMKzzpraPPdbcck",
  "key33": "3K5mCbhR41o7FHxe3kGa1GsGbb7djQzX5t3weuXwye2St36MvCZdy8A6as9vFkQvzufzYKNaaCQw6Do9oQuupKmH",
  "key34": "2rjE5YbA9tC2j3EUw8bCPpqbFHcLDfAx2Tohd6YTXGAcyKy5ADzys6EvyQ6MpwBXmUi34JoKGVSNiEoYnenqdXGg",
  "key35": "4WWKyLFGmaACoQnLyF6abiSaag5xLz1QZbw1j7jttGN1bbo5ZvC424vvouvkXJnaHRzSfFRR9agyTHZEQSBWhhZ7",
  "key36": "3V1h3HFdkDfZNX1ciEjuDNNnonamMXMpyAUUruzdHcYBtQ8iATJgpEbEc9jnvBiLFGmp4ZbGd77zM7YQA9HqBNA1",
  "key37": "5Ee58jZuLneQPksR8cJZ83FitQnCzUCJNNwadoJx3Jxk5WZbmcfLkStDaPYTs8CrZJPRrKNBsQCmMboduo8BU5Wr",
  "key38": "5oEuq2tqJ9mFiLiYGmGHsTj7abAWdH6b5RU7Fchmqh46LCgfrPLR2UCcZ7uwiNQmQBKfBYVZJtpJP1Wiuejqz1X8",
  "key39": "5crF7dP44UMJoTqSFPNH2cnjNYjqVfqAno15dUWLFTjRE6UPeLe3vmPV1PC6rFcJZ2gaM5kHE7NBp4JNxA3Jbj24",
  "key40": "5wojX9JMvEWFCPYue3cAWiefjnByrhqbKUFArzsF9rrv5onntQ61a1odhGZDogJB7kqxvvg7awH56zLGoTkZG9ok",
  "key41": "4v7KewqysrK1Fo4hBZ9NWtfkwtt6QgJbv2R1NH3KiQx3sMA5znMBy6gYJcfnVvmgF5LXEKz9ZXnfDxY7hLEroZ4G"
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
