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
    "4CzPH7fd9eg1sNwTXLQ1FzrhYJzj1685WLUsFjLqxSFUw9mLJq1XT8YscQxkhCimQDvVZw6WVGPLFyxoLpHBv2r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EpCt3MXLbLLCQzfBEXxXPNZDUiXTURs7HhcAVrgb8RbEUnNzrbPeQ8zWUrUybGhhAZDTJaPDX9sitWDdGe3KUs7",
  "key1": "3AdU3PJ3EQyRnfQa3RRwwaSaXsPgvRpRzHcu4fskDqr8JVXhF9FAckCe8zw15JyW2SDU1Bk8K9Dt7kiHVPGv61Mv",
  "key2": "ZJzs1sfscfP2GePCby1ne4CYzvSFrE9ULdg7CdLnGnnZhJhPWk8dGh92oBgEr1UG9nXRXMJqBmGmagR9Q92nZNa",
  "key3": "3JsZXeWXzbTuWxCKDATmN3DbpTbBpFadPYmqAauzAKF1H6jEKD4r1v3PSeA3VBNesUaQFKuNX9jXAkgN6Pnepx5S",
  "key4": "5YdciR1xz51ZQVXRyM2mr4A4D3ZPdquJgpk5GGHpMVXZ92dvypS1tYtbmaMjDbrDNp99aAiWBtoapPGwNFywV7jV",
  "key5": "26D5L7yC2BmUGQnHr2FXVYphL334xkoWbqgzYi2g9pRWSBZTs2HrNQe9vhYTuebKtjqwD1j8CXrVbJT6UrqtAYtR",
  "key6": "2S62eW1tJfLbGJ6aR8pKR2KGeyEW7EVsjvjed8wxbbCrDE5WBt9EqRnY8M5gDEqPbMX8FGMg35SruuR7rbsiTuRM",
  "key7": "28xUnP329NMQsnRGrouYYcVmz8umhHcg6iyubvhUM3Jfd9WUJ6TgoLavMmfQLcjCmyEBX7TfVcAFiEbQJ9Ej8VYi",
  "key8": "58sv5W1PXxKFwspZvjv8k6N9kdA3vUkJtsUyTntJ5oVxj1oggmj6Mqa1GMkifGKP1hbsJ5vYMcXyDtb1vmX9Mevm",
  "key9": "3F8Kr24E3YG8LeW9L3Bh4Upo9ZtnuSiLpeD5KvPpSiWmbcp5Z3UuyiDWN4zsR3eTRjhwLDNvWRLXcN1hYrnHjkvN",
  "key10": "4xBvezf3996EvFMRrLhip2zpMeQKj93ZBk5WwCg2oBBDWcagj9HeiFFs9VZbdsP8N3RRUiD8fN7KGqSo5WCdhj3W",
  "key11": "TiQ3djqqPosgNM4MoY47V2oSnCpisbYzLGbw1mu2TYNmenymgGkWxafc1iTmLmPmkg1iCbdtmzMJYYitYiUEf9p",
  "key12": "2PevCP6t4yrFUm5H3cHSh7jn3scAZrSotEVTNW1SwZRQhMZJQhGeJZ79EYJxk828MmiVdP3yztAHMKDsPJSQAzdj",
  "key13": "Tuo35omQk79d4fo2PrYoC1kZUPChC1HsZitakRmfmd3NUwVyM5JRZxHxMCyfezEfZg9WJqSWwR68mCdG768cHzo",
  "key14": "3JZu3d3csGRq5tNfH7koAqU12YMAtCyYoHDB2P6idrKPtFnr2HF3Keg835H8q9SRScCMfi1rqrymf48LCzyB1CBT",
  "key15": "2xeKirbSnezi9UcnX7NhHP4R1ma2qhLMCnUbUaaDzh5Jac29fra5hVtJzwfY1mmfhaHQfkshhU3MxEguDcDApRzA",
  "key16": "55yADGWhrfBBBTqujwN7S2P6dVB45vY9wTKpsgmHxvGkVBB23iUL9yzUa8XsHx3k1NVagCzpy87sXg347jNBSYbh",
  "key17": "53LyL2k5phHfVEfsJznQBugnLekS6frnNtrQGo4RDTFk2AgTYgs9Xpn4b2h78DG7jPuoyPDrnXP2X6F6HPUdkoas",
  "key18": "YwY5mXhF3F1hpKeX1mj3WX3V2XKUCYwkRrgyoRVMBx8JZHcpVvFrkcJmhxaEw1ThZtA7oAUC428rZzBWC1zAL8q",
  "key19": "5kYw9cbzrb878W2fjiJ33fuHM8fMnbJQxniXcPdNnHwsnKNNHFSBRsbMQzBq4ZzgNaw9YqUiU4y1rZUmFmwRKBEP",
  "key20": "4sHUTmAMwcaTnVdaauN8rTXD7M3kZhbqzhKEU84xivELuxGRDnEZLSKHGGwsfUPRN9L5PfYUFE49dwLnNQUNQqQL",
  "key21": "3RP1wGRjZ6a5NKT56oxL5V9fDoQoz64GRyTS8QmHXaoojtJz5ctcR5hyEeaPpUb9c3opsfoHZndqZ6iXnWmstuMw",
  "key22": "476WK13BqtJV7LLauEhrtUtEE6fa9NYihawT2yJLcpTu62iENfczmS8vcAbXL9g7HHyHx1GS3qc3oNkPmfmFd5Nb",
  "key23": "2MjKRHhf9Zk8yTxKBZwYmpbVdX9FBMJJgqw4eh44zXdAHWtRP5vbraeYhBKcvtyekaKA42bQPG6p1B2wc3SB2zih",
  "key24": "5cnc91J9XGB4S9AecPJdUNDJA9PHzADY1EBheHNGpp8EJiPWLosBdHy9Ap6De7NUyVdcsKZ759FeLmSZEjYUEo2s",
  "key25": "36a9faKGwgcuxraCmuzxs84GHJx1NyouvqgmCpRRtn5UTTh1USQtzNqijztQdDCL5sLrqHbXW176mARnF46hQcJk",
  "key26": "2Uxe3hpLLXyhH64rbf4r9Lg1GpWNs2ydJbaLit7uYV2EaJp9QHwpUmnCndMJwVTgTFFuLajs1QVTy8SU1HwxUDdS",
  "key27": "vEgfSEYtqKGuzZn2FFtBwuUnjhviavcqcn8Jx9zLE28miNw4uQT2wB26GtDDmpC2sgTeWmizVSgZ5d2vg9xdM8f",
  "key28": "2gWsUKyiBnDsjfkDYxWTn4XHyaNB4gctgJjVziwRfXY61hnFT4g56H7pBVfs46NWaykcVNZViVXxQcv8omtkLHhn",
  "key29": "2Mex1NKto3pYHm9AvqtBMroAQxZvxC3btFSeQqvnvzJjBUm6aZB7rY228wSh8tEut6xXwP2TJG4nqAQ53q7ixUYi",
  "key30": "2kWDmCZRmL6XbiapT3nNFUajL6wfxfof2Z2QPBhUNkL4v88oEPZYKbNDWR7vxHNutMsMYPJ8qPiexd6KLaec2egg",
  "key31": "4YKyE2ingJ8stK1fAHDjmWvouuDkxuLykLN4xCzQ5djL3jmNowTiqiCSrzkH6r8Ae2FwyazpdeVLriFMXbMei8dy",
  "key32": "5KCopYjL23N9xTSt935FbvTCkYj8k3r92Mqs8xQ2h7ghBsW5YoWBVqCVJ8ELgHjbMqKUbhkd13cwfz2zPNUf2Pgj",
  "key33": "ECnQgowbZN6QCot5VXUb1MYTVg3JFwoZ1CX6hLaZrs7ozUFcH3HdgLRCyjrYJVnvD9uCP2QYWmAKxDehod9BSX4",
  "key34": "3Dqo3yo2EubtkPBsvtA6GiedUYqrFvrnKDCeJWG1jYzTa12XPpuyjyUng2VDqGWXb9UqpeGG32nPqxey9SwZbRHg",
  "key35": "63fHZS2RNqhf1rtXtpfCpDvfijENY8vSjCZxYEtp2omkbz5tMCt44cmyxbp1M9chrDiv3QKqRPL5TJtHoK96bAYE",
  "key36": "hx32dL1Wa8GSihgpR1oABB65rSRxrJQt8MhjMgoWp4MAPL745fiYZJaCpcRRoQdb9udCZ81gJTr9GYbHeZ3AKRR"
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
