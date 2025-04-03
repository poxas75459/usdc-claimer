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
    "3sLscgSQyT1USU4tEoCPZDmmZkRAv96zYVXr6pXSbETnYHePHHMrmPSkz73VhX24kqc6FpTHaKphAzeoMH3vANoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NoYRRMgLzjepAfrBw2bUGAisXJph9fUYawZjAhnrkoXdvgT3HWCDzKtEH2x6iBiqM2w6kjmPzncBXMnCnSfe7fY",
  "key1": "4akPY6dKWwqMfJhq8DzZbkba73VgKPEknmDbR1SRp2cc2SAanPdza5LiqYS5nf1vsYrSyNTeKeSKRquq45Jjq4KE",
  "key2": "5euAFPdwrf677MiheP2PSitaodq4VDL8GNoTmvThB43XD2fek9RgfcYc8YH1ft4UPcb8owUPbrA3GVxQ2oFrRqP3",
  "key3": "5FD35SzJ6YYjKu7mvgsA3jDTDS9AUaE8jintC151ZYhYotQqF68KvYhYcbcxGkbNMVgCrXodytV3nXrUUQVvexAV",
  "key4": "kZYnti7ZVuNwp7mCB3AiDC6JiQ5vXTNKSngNJdWJY7SUZbTHcAWjTksBxMsvbKmkZWEt5vnRTBGLDJdP4stpH9r",
  "key5": "2vtXa89vu5GjFUwNWUKMPBp5WzsNDCSrjTutL63XcdJJQEf7aCjtirLAhuWhvu94kVzfSJP7huyVVdx3cECEiCWH",
  "key6": "3EaYQZL1qAjRcusY2puK2PzwYorV3i6Vmo12VhAaEurReQjfYVwgVMeoGXnkkKcPs5aEt8jWonhBq2dQZTZLTZMp",
  "key7": "4hWWiQPay7dWSre3hFKodD5X6bV2NJP7uXfLbiqWKv7WVQv3qhyMbrR929q5uqRYjQMREmM5yhqyNmZu4F18VXLX",
  "key8": "2YETYZxkQSqEfriQdzF3RCM5fik6gYYM9A4gXW5swCrtFj77vndxmFu7HixhPYkARQQU8jZDPwsys2yrqpi3VAaC",
  "key9": "2xL9NHk1PNTBQeovp1EUGEEVKZTiVZmRjvC1Pvi1CC2AhCfB2HtBqAmj8XQZaUz9nmYr5zzfXFEb9fbzui4LSjr7",
  "key10": "64jtjeNGjZdMzRwnj3yPxmuhYwyiqePvK1L1x1rErg4znQCHMMVEPwBdS7dgw9AJz1z5HCbu41NkdduGnKGkQZAB",
  "key11": "3D8sAhhB1TpqoV91C5A1KWaQiDaiE86G2mHYtEHfpj5q5gouGwkYu7ptPqFvCsZXmb5MyGCaCU6iZNLkXrqm9iyp",
  "key12": "3cZMatZMGTMM9P3QvtfFjPhfQ9GSkBJ8qy4mb2GzsaDa8B1Pbe5SUYg1zhtY9PCdGiZvgkkZn9iYcgwA1NaBnern",
  "key13": "3XmwVtLmy2VK9o7QgUZArM8XJoE4mLFyknSo49BALK8Vf4oF7JUpGZQsRM5LakBhPsruxofe8dRCG1jEhbgoNvtd",
  "key14": "27omxU7KiHcz3qehmcp3eiq7ngiqUQMQ861uJ5ybq1V5HbCEXaHWrnZCYvzQDfUvp4buD6gvtPNzo9u1ypXZB2m1",
  "key15": "5361qyFJgwRgsxBnJofbcoM3dP7fFivayHeufaKAC6HHthvZgwVudN6dWrL6oCzK7VqR3pswakma7BbGdT39qtwV",
  "key16": "ZDsqfRLvfakPsPt47gZRrouy8TZmPXCyihgoF4BEfUyK9bLEF5KNZab8cEDtpfSzZmamGYzrsUsj3igPiBGCCUL",
  "key17": "bzpdRRd6z5K2CAeM2VzNYPkVvjmekEsRtZa4D7sHZdgbhsuYTpva5vz1yCoqps54bnEo9AonVeMts8JHbEh9SL3",
  "key18": "4ruiTJmyVYBcue68Jf4Hv5XU5MTo26L3zXdKVBCXdjFbNrYxDJq97H4z3WMhNbCD9Le7qLezEuoS35bX8pSVAmVR",
  "key19": "4XVqbaimj8DC7ByMjZs4eYqFgc1nXvGzKEjWvi8QE6BNJM8Xt8pYTQ2G3iH4tAqxGUy3TNxnVmbGU9vzUXC9BCa9",
  "key20": "61B8UszrcArt3YLQZHaPhVqpUpn843jB6H5YJSqqBg2EKCbS5fz7otrDkUZatJfGTbe9Th6t94upLmw679bLMe6B",
  "key21": "4DhBBfhz7ybGavoDkQSDt3fygLs1u6ZwhT9eesVDwZksaq5xkyMy3AustFudicc1YQ3DGdknKHg4Y1rtDBZfV5Rr",
  "key22": "3N2XaTk8exSKBgLd4gLCCPbhSE86KNqWpAqmfKpGeAmyQpfU4GCiXCgS3EH757p9yDgD2MPggH2fgveeSMFS2pfd",
  "key23": "5USaWHHZwfRLujYNoaMi5ejoZvZChWZwKfRtkRcWoMu8WDNKgRFuxw1RGmmpTLH1omTVFRoTMxC9qMuGp2cgxMNw",
  "key24": "1Qkxh1hhknuVjcweHmey8XRLcmb3eswdMDx1Wqg7MknKK8HVcfx7PotiXdsD1fcKHLTcyUXf3QZSwZE1hPAsZFa",
  "key25": "48gTQBq4QAeDaZyoBQ8byisVpgWwSBYXj8emKBLBVe28wmLRPdLGLMcBEh5NiT9XRae2FJQsj4ufDnuiXyjDQBwH",
  "key26": "3fM7KcAjMHPWAq1EM8BXyeSiY5RGBk2w7ufob223nMoCJ6VrP2xxKSQhDngh5CVwysRPZKow7yMx7ddwwSFQnDMJ",
  "key27": "38SBDTaw94QDzaodYWJmLwKXWnccCmYCKL9mLr7wiwEgfJCbiyxfP3dAMn2VeMakW8ubD67crGVon8miCAcPuWek",
  "key28": "2mznGTxAxjcTMFQ1k369XmdEkSnnbDUXpiCrWoGzfGKaQFJv32ut9EGh75MfRvoPnugXFPGZALhiLQKjxfKpXRuA",
  "key29": "5Rn34JpcFVaN2W5AHcwSyTEx17s1VKTFQxFNnBieBQbWd1tXfZa7AGihBwiugjuCyx1es2h7ozKmeLVrveVnAzSN",
  "key30": "4yuK3TtiKGiUadAQd2HPQwAGj6tHyYpoDLCzER4LYrJyEZcY284RwRbMAuBD6GnuZi7NAXjDjfSNupRFeNvsXHAY"
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
