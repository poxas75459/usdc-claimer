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
    "rYZisdqdLszvvd6tibLAsPsJtH95dCnFXa3R3mSdn2gNAonSgvD9o6qaHuVA5hiekA7C1jgBSNBxHZ7Q6sTX71S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gZ2SHD3LC5CaYZS3v8Sgxwj6bh1KLxdz1wTstUjy9CqrXV7R1GskcKCs4m2C6LkVs8xMuvDyitACryCpNyS4GZt",
  "key1": "2Ah5qHYhvwvsKSgnTU6fz8FoGyajkx8vKY45a7FFtHshnvGoQFBM4ov4NGdYzUoeaP3MuHLvXqMN2TXw4UpzE6UK",
  "key2": "3UmJBC7HcdjCT8jxjjENi1cvRMpgQJB4eNZGLrbfaY7V2ED24bt31JjRBX85KoHtsz2HyJ2ALEygnfzpCB9Nkjuf",
  "key3": "5prMeiftwxni5HBfq1CCgU3WvJbAxCHNVSbbgiYR5sLNJQrs9r34kmz86eafFxXmWuWs8mMXVHdoub8x7rYC9AyF",
  "key4": "4fiRCxQd5W13gsHvYSFkGdSYMacqZbiC5X68uv9ay1x1f5S5ewrjHNfcpK8pZiHRUSHMyM65TXDJmGuzJ7xmua5d",
  "key5": "5usQjQrFsVnynYnQXb2P1qGdyPfUCD81XVG8GVgxAgR9jAUfW8DE1Ro6a3648WNF9uQvBHQj8vxgWyzVhokaYoHz",
  "key6": "4Eyg5u7e3VP4hAQSk2T3jv2XrEpDAVrWyXmcKCsm7Qum1t6RzxyanASyzuLm9tMgPPPU8S8VWAvYBXo1RNP8tPTF",
  "key7": "4mwYpuo1kEv532tAJK97KNuKmgneMY7KKGXWRMae2inXaG3jQ7vLJHSocWG9XALtuGWEvucPxYr9yfaha6pAS9Uu",
  "key8": "cxi8wVtwA1yPRHq9tFAMqDYwgxCd6pU8hfghxUB4M7RMzKJuHJsDvYrv4MV71UZ35y55Yz98WUczz51we7fnUCu",
  "key9": "4UtFGYf9xFbwQoq3YcjtEHoj5UprnsBkKfnRSpqUwLhfvgbvp38L718Z7mN3PD1Ho37AcDhBfhekSinVhar1aKfQ",
  "key10": "531GqJhsXzxavzAVKGcY5jETsJGfnF7LpKFrEqSKttxz696ZQJn44MowL1dmURhQgxRLWnHdnLK8M6WSVMmdVwUb",
  "key11": "5dgcmZSgTAmRTqYc2k1JiimS58hApbxaarnXAXC9tH9rpHsvuYuXC5vg3ucxpaLdaoNyeDE8SqupdjgzRGYhzuAi",
  "key12": "5mLEwisiVEQoFdXdkUSBtue1ptUtPeBxmZLiXoY3HtuiyBQtcreGKqyZQ7UkALM5Ctm4oEdgtth9uhsLsjYzbYDq",
  "key13": "5ZdmdN3HikTLVS5QMbjGvaKuUoUbyTUJPK5mGAj9wVJr9h58rFGcG7ZnbEs6sTYLfmn6Saqrm3t8Uk3ejhDfKMBh",
  "key14": "5v3ZfDGFiLewH7RYdUfbGg3LDCmHWRaaTXFRJkpDTtD9AVcabJTt2J1dtQwUbJF3p2HfsjiWgxfKVxZaKSRJ4nba",
  "key15": "3gcfwzVmzhRYHFJX1VXiBgti613aKUcUePE6LtokM2NaZ24EPmSVjXfLwtqrszvBoJrXYe5MitRPfX5gwLjhA69Z",
  "key16": "3heMksx3DLV1UP2Pu9anndyGVDFFaiqL9uvRcUZ8A6UDPYYDEUuCFphFfyYhmTFacZMq6rKQjtkG4tLhXiqRCdH4",
  "key17": "2kqyPzv5tbiUn67ZiWA6r5oWdbfSmRCdAV4RrpSRFLDs2BNuLioVTA2VHgMRkREeAxjRrfUwZoZBeHnjv6XYLsVi",
  "key18": "32ARcgnc2CYpuFZbW6PSeBpgnLLo1iv1hyUQ8W7xJNsZo9nYxoErwDABG1EnHmdSKqteVPLVvPDbAL7PJzmQfnXJ",
  "key19": "4ZxBAcUVarTvR94Vhr11SfG6MPRgP1wfufPBgmdhamoQVCv21zBeCSaxuGi2vQvh9Q2JH4nzSe8aFtJSTF2LecY4",
  "key20": "3oBujCgh6hfz8WQDjw2DRMnwSdrvioqtTuKjbfLma3DczZALkX4JoCr8YVceRP3prKwdCgmPfxThqqAWTGN2cHyV",
  "key21": "445BbdXCjfzJV2qHcxqd7yk7cfwBCfQKtcv9jTr8jYhz5Adfhgfkedk4dmy5r7mATiYi1Q47DU3u3yBsokcSmvYy",
  "key22": "4GaxrnXxHTME9nprH1DSp4bGgb7hNTUYD1hXPje1VQLYdKHN4h2QhuL12oedCbzcUZCfs4ATcsnHZufcYr4PGdnr",
  "key23": "3jTJbAJAx6VhKKdK7owr3EsVepNqNexBG3EQ9XANy1NDUaz4CwsbTBD3ZGKnsthwf9D3Y6p9qwtWE5uS88xbRwaD",
  "key24": "5tuLcrHefERnDrX6NvDcFpejvcy5ewT86TCCSfwHvgPhpWGUSZweLw37rLrD5wj96JzSpYiN8fwGcWZEtbHh91nE",
  "key25": "5KppFaKinec3NZBiC9sjdTJymeZ4z9Gm8nDnVMSZYtT5wcQfBuZbrWYfUQY6rFprnHugShWDKLnj1cbTzy5E4rbS"
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
