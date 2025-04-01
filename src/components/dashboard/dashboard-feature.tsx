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
    "3rfBP4ABG2YoVBUkikj2ZzyiEDfXKvVV8mkG84WMwqeeN8WEVByrVeoWTJqipCeXQNGPFghbrC2kG8xtVgPFbxvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WR782yP7kLL3rHYQpcayLKVikWj3t41y3mRvZ3egm8eK6bZzH1kMuayG8EnPEyue5tfy9DzUrM6agfjR6QieKYQ",
  "key1": "5oLYxGAJyXnxVvAkjt4ptsrSDsU84UaCec7rj2gGRcWQbEvPA3wVXsyZW8xCrJYC7GtYkWy3M2U3nt8PP5H3Z1db",
  "key2": "GbQsqDMnJWerZRguUB7Fr1cuNSJkBktWZ3WU1bcAwDyvD6AXz79vmvfJ1e6dFT8aUnuwHymPm7CxcHaQE6WgjcF",
  "key3": "5dFSctQ32hCiiHqgmk9L2wUWJZPucb66Md9sCskxk5SQ2WiuKR1ei4L3xfKHfKkSx3y7U9vMyqQDuChQ9jJpZ9fD",
  "key4": "4qZy6cpLNdNh8JF8i9VXHvV8oyHMN7Jw4xknnRtgK9tBvA8VQEoRLmrfXuyjnEXUZhPZczQC8XCfp7SF78JR8YHj",
  "key5": "2fKbScACsEYpoyrp6Rnm8PzJQoNZgUH8hzBSCiHbNwDxarB6RffRm3QTtnHzd4LPwTLU3aUnJm4RgtdABrFyF4R7",
  "key6": "4pUfssuEFwa3sATd6XWqagRkGeNLDUAHfJJJGkdwoEFw2owPWNq4Wjp4duptBP3nA9WGAgM5HoqKavr1boWvksbo",
  "key7": "3npsiTbb95AmroCMjrMcYVXhjmuthNqtifKj8pLiKtGAuu8FRszz8YjzG3P9mLW7jzNd5T3YmCkvakeJjfpKy2An",
  "key8": "Xdw8Sk8hMep5sZE13eTvzp2S6iNuf8q73atha2Xc8LSjRwcAzHYpeeRXoy14A82BrBZFZrKVmZy7dUZKBu96MdJ",
  "key9": "49jYaoKQqtbeFVL2fh4s3azpmuwHn3Sq3CRpv2UM499hjnH54sfWL1Y9JABnYSh49fVTcpFZKuPDTyMxxPCrTUFy",
  "key10": "9xUQQ7zqCW1osoNw7BamsMKzzRnCYcCcYd5q744BDgeijWkz3jpBS9hmkGdLhcV57Z7ByLFEao7mND8EWS8wTGf",
  "key11": "4KpaNDHzRRFPR99gvhWryNKR57dJXRSRWAjY5XSHycPQNTssCTFFwz2ZeAS4BsTVPP51JwUR4bPkQKM8TBhNcvQm",
  "key12": "zyqJaXz6v1A9FCwAdNvnHDUy568cBdU9kDqU5C4Hc2GEepjsG6QiTVfD5aHDcjqThiHAi3gFCz5KymTS74Mwbbe",
  "key13": "Fj59eEMNYVBpNsDqLby3dGGzH6EJPBQdqNq9tegKtyJ6ovDr7czqyfE6R3rh1b81714akyqzkpdsZXk26HHzY7H",
  "key14": "42VjZj6rRD5fMZY7gFaLvzZjLf2sgwJYGw5Zg4Pxev3RXMNNHXsZpi8dXbqtaX9oiqhnd5HgzVp6NAxbCQdRDBvR",
  "key15": "5BTYzyonLSYXCM1WqaK7H8T3eWen6KmJvdYNgzkL77TbDncgPZxSjQFVC3bA97EkkdyevZUpWd2Zy7z4MSVEgy41",
  "key16": "uoXo3sTtNV43GLr5vde8AjZ8qJ6SkqTy83vQye5KicAEk9awLzsdPdMRxNJ3rAacPrEvqPGN9rkdhRw4X7ic72E",
  "key17": "5p8EMfTJQL9BjMBHGBFsEdL1N8TTE5t12hjD5yDL6VSrNTuAV2EyNKnBPmgWsukbPpJ3MBX4yYawCHrrSXLk3QrC",
  "key18": "54iCDFdjavdM9SMeBJgJRA7qZk4ZPmpRYshiWh58WRotX4Ruh9fYzYFpyi11zYCSDfpSyDemNUcG38fp4MPgFGrm",
  "key19": "64Bc4VzfANcZujMzjz5hGfRz1xC4pQVpZKxcgoCHnAofEbMFTchhroiYpxFG3vSJLP78mu1kVeKEsgYrBthWit8R",
  "key20": "2JFYuLz3qsCUfwFfPfAMG6Za4AiMqEp3fWUm26rfGbwT1You94TQZpQHPQShB5yXDccXhFY37Una2PZyb4SXvbAv",
  "key21": "3S6DYAExUU47BPLCNbfrM2Yrv3PdRpWdQQehJaL8wtxRoUxUPKjjFyLb7Lo28JTsKG5qxf7mSYBTbva53EKdgM4S",
  "key22": "JUyKbdzPeA8KJgoD6ZJwFrDfxk87YD4tUvHwNdg4ZZLZNR7tjgBm4mMUXn8AJwJbu2Hagxw3PQK1dcnvnqtqhjj",
  "key23": "5FanS9rzHhxLXXzPCcRD7B1mdk8WDT71JTNTRCwMqPLTt4Bg9sZCUDcKsXDDqR69fB1iW1y56eFRMZLsHFJ9FXyq",
  "key24": "JtXmVphXEvV4TNAZdeSH5Vs4dCo5yigfLH8zNaxS3syRj5mNE29863VhYtmprv3aWWeGEfQgDQzKYkkA7AUGCj5",
  "key25": "3WUNnm4Mers98G8pFPNkpNRZkWR65RiA3qth7yEkWwBmFkqqaSJGrpDBioH16nVAP69FUqj2su9NSuT8meqyPxEh",
  "key26": "4CR1y889sf99uWCSWgARMVgaeyvvGNFmnzq4pprz4SPNNP8nw6cgpEzd89YavX4X1x1etuep3j6vB49YDjeK3r14",
  "key27": "5Uqvpsrcd54HhUTHUksAivno8wZ6QDsYjVg5J8KfnHHJGkRLFwv8AwtYDYmpeqrEQaQWzNC2KZj3zThkzC4fFnfY",
  "key28": "Xzq3jSwbRtNgwxEFVvCGhLpuCsmmR5SSP4BWkHhBSC5XuphKg8TgfAP3zQoJMPCdVbLVsKFPw2HF1vFkWQFD5kR",
  "key29": "4ajRHf2XpXN25ppKtjtQ3h72YLonDoyQ7Qo76GRAhT67tqLiCFNKpxKdFWRsLzxSf8RhQtdsuV9vGhgydkJcZBhu",
  "key30": "5vf44bRwspmRmseUeGGveyJ3SBjsYkC2okgUAswCBz5sfGDr4W9WnDMRxsS5QX3GwXWQB6VKR7sFh6bUE71j9PcN",
  "key31": "5rfTnRxZDynVq2qxVPGd9UxC5YY7kFDWuUn93BeUWe8CSoExQ5DZEWVi8kic8Kjykik8tHT1myA1bMLNzyairz48",
  "key32": "5pc2vNQRFUKJVdAHKDRXzx9Qd7sEpGTqY9jmUY89PkY3hhUWaGKWRxaiE842kG8wV5Hy6TtYdwrCD9uedw9vZUrq",
  "key33": "WwNF7h13NQMvFu9pGiEhq8en3gDtRbkN439twSSyKtsM7ng8R45nCAtm7qrX35AfAKf8vz1xG1kmq71zmsRg5s2",
  "key34": "2satPmdu5rJ57dLXkBz1wqknam2VbuGWsQjpqg9GdjKcSfGzFvZ2a1PAZ1CDNjFGKGLeUvVtAfqEeUBRRbPuRCca",
  "key35": "4ZyVA6nUQnhcsrfRWVosUupAcuNX1SBc9v5x3oCQ8NyNq3ZqPQ5A7YhFRvknod6Pt2Xzcx7BZ2BZAcw4KwbbQGfs",
  "key36": "sKVP7xx3td2Rmkvt7BY3NcUMVxNU3T5uJxeENm4iywz4CXoNa5e7VvNzuWbUEKvLHKavFBaobfTUp3PVq67nRsF",
  "key37": "4FZkWSHriERwzCDuVvbtvWne12snNJ5pC46Yp8CfqrK3C4oQpryJfknNtQiKNxF4zaS6SdxEJeqoFotC888Ke36S",
  "key38": "1kRcMqyvgNpTvVLXuSsZqstzXsHx4ZAHp72SMKe67D57Gm8CotnTYRuoFxfSkWDEJfVwrpoYur2zoWKTdwjpEyA",
  "key39": "s45uCpa1XBxoNV6SzrngP3eYPYe8fPbXuLAZTkYUxMeup3i86BPueeXUJiRcTCwwB7w3dZv5yKuYVqCT7bPa9Sh"
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
