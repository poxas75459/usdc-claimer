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
    "4aVBza94ACJZoUm84pdV7YA5kMHkXV1zWkpiPxo5QMYfzo59bnv4XoELurWomphR2WumrhpkLst4grymU1WTsLhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HyK224VCM4JdVmQ7rh4iEzAJBpsbsfVWgB9MuaPbhnEyUaAhnmJ3XaAEVwP5dvwumMkpd5Z66rshqoRkxhkPePZ",
  "key1": "3CzQHizCBBpZUtaLbJL3MDiWZia2gQQsGzvbRz6r3VGw3WtKLThoVBDvzcWty3fyPfsYN6HNgddF23jDficGdPyr",
  "key2": "5n73zQceFJCi7xCpWp5WWZibWaBmtS9dqdGGvZjq827GFfNKdfjo1bEWGB2GfKSboM5ch9QRATkJXgy4hxhergsM",
  "key3": "215ASjKP8ehz9LEFuN2PswjbYuRKPbwCokZZfXiTHHT9VUbLJiwKUKdLQuh22vNbyazpzbdbEayvnLnX8r9bA8wZ",
  "key4": "2GtGe7x1QbgghJJuB3kAKLh6ysfEe74626fnq7rFjH72FRtX6cLaVDMqUtbVc63v81kbRfJASSWuHFuMMzhRQoTS",
  "key5": "2mGS2u6tC8ZUASsXmbpKn2NSsVxNmwsuQ2j2TafwH6dZk1f4arDPvwJKg6D5tQ8RojT2ichXqhRoExq1SXne6YrW",
  "key6": "3iUYrxH3C3yh4GoiZ7i15yetXTBmvTgvnhu6G3LkFc8Lwh3uUqRbsRRa43StBFaJQuxorLfe73Ex64GkJgzRRs7g",
  "key7": "4WYGLKBARSJSXyLsrtK1Ubzx3HA1ajWrm9SY8zzBBiQn6imY2xnhe3S9Rii8vTKsmy9BWio19RVw4c3FC18qa954",
  "key8": "3xb24kG92X2aywYdEzCH8cMzBGi3JXdjZ95RNMDrY6nuVrUv793stG3PYKcTK1hRwdnUCE2m57ptEJrJcWBUkKQp",
  "key9": "5tjNQozW8GhFvYC75bMNPNFtzv1UikWoUc8YMxdst1MXmqzmbZKvQ3mb7o6DQpN3jNptC7sGMgKobKraxZHvK1Mf",
  "key10": "3hBgz39bAqj6DKjdWaCnvbY7e1AwRTBF9vK4cTeRQjvDVxWqDwvRSw2FtZnGKDE1rmLuKs68ccoUbg2emZLfVVb2",
  "key11": "Gxi1kqWf9c6B5gAciDfAab7VHKF9vQGsPNbveDz7e2E7bznLiL2Rn8mURfRHKmxTAKXy1qgJdpSLtFATmpMDpMS",
  "key12": "2vHRCtfRxXUJxwLQXmhSCSub3Z7yy2SwXTFrxvvgrSMcBg6DRcCYNVQjnN9EtZAWhL7RaQ2FoeSXikZRAAEGjaNT",
  "key13": "4d3rdVYA8o6S12NTnadDS9SfF2o41djza8pmgSkc6yxvz7q7naq658PncJeg6enxxkakmSGXdfsnXvAxB28Fz7UM",
  "key14": "3agCVqTW8yBqLxYU7W853zh4mNFTArqS16FzUDPUhTEZAatNC9FxL41731SUGEJJPSZKY37yEo6Jvik64CyxTcpS",
  "key15": "4bwbGoHDZWwBt2Xf5GeJH3WweDfkmRQdEJjRiMiAo8JX5SVBWJqL5jLLwaRBpUyX2rvmQtfhf213VnLiufkECm7a",
  "key16": "61omjAoqWpbsRL66QTTez9HjZ6qPGhiceo9PT4BrDbBHY7BuJe9TXJy1ApPu45PNnM4xwMyxUMsVp44BzpBpHMDg",
  "key17": "2MnqEPr6a3NnNH6Zet8X8aExscXFUes59Vgt9QmSeekZubkFUTJm7EN2Wy6EdPWxisNFFiiHNDNhF2A5d9dwfBK6",
  "key18": "XAjLJq9xXwiXNHbQCg12XFg6EW24MbBKZkju89PThyCJcDsDLEDWRbC9KicW28hqUHYDYaZpUQUMqteZP5489vm",
  "key19": "4VFnm1ZhgZ3wr4eLQCPLvrJjTw9LZhLvLVVfkhW7QzJVJ4JAyhMhKdojg3LsXZK9agGe94w2Ywmzuj34dVnL9zFc",
  "key20": "3zbEKmr2oQ3gmSzexjoXZnWHSu51qCCw4T2bkhQw4YLiD6Xnu5LAfzK9h1GoABA11sPt9HpnqU9DtNZ1LRBStGy1",
  "key21": "3f2nCFvcu4zxY2DuMtrQp1zvcyQGYgG1tSxo3B4znTc7XrVCydbGV8Aj3Hj5U3GcCjqCLs8HPNMD69XBrz3VXMiu",
  "key22": "2rofHBX5BwJAdtJjhL8ruH1ACd7ZyZ5w5Lp6LP1QWuG9Xd1hS7FNTHbJ4it4EAZ1dUV31uRYBihcrbDQuvLZU8Tk",
  "key23": "4LEbPji5viFnNiWLD8eEPVaPTFbMBDAVQ44QREPB8zzMerB9pSfR15N5UujqjmHq84FqiGDCJFUW9GF1AUuHivF9",
  "key24": "CWUCiMk1d77uz282hd9UQ8SUz7KJQM6DCKQm3sHDDpEksNuFaTPVZbRRLbQC3p3mBZ2tttQeBEVPWdh84Yau7HU",
  "key25": "5jiN8cZUKgQ3LVMiSQUe4dMREQ963ZcS6AaotRKjKW12aoojFmDwAMn9iVScswJLHhH2koiitBQdwwDL1Aaze6Vx",
  "key26": "3M1xjYY4nxUMM1Dn8opWzzGnKfu6tQ7aMobqiRxiisFUCoqnzDM8UgwLzDtM4doWU9McTU7CG8SCPd4E2WcTxWNq"
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
