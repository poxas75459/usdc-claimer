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
    "3Zi2R8Wgbf3bpzmB4to8BHzmMcdFLipF4jDPqkBFcFpFEm48Jtt2u32CSeWSzBkNnu55ykPfUk7vAsdiAT9hm8B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fLcVZcKmYij9zMoR85jjNo5NDkPQUtMiquaA99GUDYqkQzVjjFTyAc38MvzfktqUshAQzzmknKmBocKL6cGyATF",
  "key1": "opqRTXev4yUYXHT1vXZT5kHXRMq3EcCmfTc6VeMpPq8Q4bJFKyYXEFpSP8AKg6X2BYr1TFwXvRAUfB73q3Ai3mp",
  "key2": "4WP6USXw3Dnz4tu8fXZF1cbQ9kZZEXHeodBbWw36bVW3SGA7EdDgtNVDeRbUuEemxoPnxtxWHoLakbVZHCBEKHhc",
  "key3": "3bdhRN48qN9i3cWRxJp1VcPmvNqfNCyhYgdNJ66fDjf1rVhdou2YrZ1DL8Dbdc4FfnzgsoUoziEj7RUaoWotBzDK",
  "key4": "4dK9iCnToNBppUSK5fr9w948dBknweg9WcSjRNtfp7oGD5tkQxTgDB5ETyi9BVAkoC9cQupmTKYTWQeXrAcSd5XD",
  "key5": "XB77SN7JUEUpCNKo4DxRHXjyeBLFDusoQC4SreYLFRkyKvXfqCon1aXRQmrW1fCbZZXHZE7rJvq7fa7qA2i7bEw",
  "key6": "62b651JFCLwg7ZTfoAh2pca6LZdnNkRcrLtYfBqQCZWiSZSGhUb9VMSyWNDchYSXMo1TY1n1wTYkreJ8T8pmC9Xd",
  "key7": "442MTgPHznAbyjrC6BWG5tB6tyPNwxHot6WNu2z6AL2YDhKrGDncatiZoMRXzZNGmVusnDN2YGsdMB9NhyuSCSEE",
  "key8": "3hd1b4FpKWRN3YnZoy1N82YazD2Hxd5dVfnrkyiHCxt2DFCSvJ2JfqumCNmdhDxhmjvrYTXHHvcATUVyuhJc7wp6",
  "key9": "5zUUAvyAf2YPSWri7sxKVXZGFdEgSCAFW4KroPqQXLccNQeAJhDicjT54x6Z9umJjXncouqiiL3gAkq9VVvVUAnv",
  "key10": "5rCmZjbxKgnsWAQzvfyWj1HYxp251mompW7uXhyAo9DJsCqgTFibCpuZd5tKHCc6NX3wdrsXGLepYMsDiAKCrdVh",
  "key11": "2KSyKu3WjLJ4UHAbKKBxR5ukchng1FcuFF6ebvfjEec6R73Zh3252kjYCaCFM2suRoK5LkCbBDjpBhJWopjUJXAh",
  "key12": "2W7sf6H7FggNWrvsTDa7Po4oosTHFDC14kDPfDX8ctBxnxgX1uy34gMfFfsqU3PEgCWCCu58vdhk2BXvp3FEPR7F",
  "key13": "2hUes3QbvN4aHbU5ENaGWcPDMtVCCSo64R4pawDAnWhYVZzT8evZCJBjprpfZpMcnpgWJvLg6QkqbmwMa7DVeKtV",
  "key14": "544TMVcPTCpkn1d3Bp7z3tqAYfVF8APC4PeQ49vT85Lg8cwhb9GEBHw542wZviA5hTu8ja6moB96m9Bnqipq9EDN",
  "key15": "5co9fuRDFGKBDCHQ5p7mVaNmDGhtbHcX3nVb59DUFs8ngnT9nugwSTZCKZXcCWSwKXCW2RiHKef3qkEM89i91tFc",
  "key16": "551hCjBqzyL8Y2uiVQbNXLy2wMo8mvua6uAnHkDQMGVLp1zdsvDoGmmQxSu9BXRLV54rCS4gm7wm2zKo2F63XKjz",
  "key17": "3skY1F2KNQ7RU9uwNp7wyrNKe9T3XgVo6YLtrXBs238SC6ENoFk6PdrYC93LSF1EFv937iMkUx4zNWfF1RYjnokP",
  "key18": "2wQyyjAXqWGPEnYz8SSPudNgjkdpzz65YVUmextsNq1LNMxUWYButJvLsxnRMXP6d7mmagiRZTfyzLZCwtMeNyUd",
  "key19": "58FoegatnLg65kwo61ZXPXw7awGBJu4qSo1GtLRjE5eJ6eTVrCAFAi1YZ59joRkH3TfjSPXYZD3nzk8PAjeq6ZRU",
  "key20": "4iry7Zm3Gq8BaiEoN6fzsTyC4M2p35vyHZRfQocpZrXrHMG3SNdtAYDp35AyEB5Zxbp63xJuTMdmdWn54UTVdepZ",
  "key21": "2jwPrkAbjBQXZt5NVvCaRqu1A8g3efkaTVgwVoZjxs2mFZ2EcEih9zikhYZi4bk36FDHJHzZqJqgsa53uPGo5rAV",
  "key22": "5TMvsGzZ412wbJ1SxNex2RBuUwv3afQo87abYLh556m2ucMdobpsHrRU1wQb41aj9Pg3o7DKHmv6jDpL2Ba3rTAs",
  "key23": "4ZHsmEEf9611bTc9wfzaWDDZH5NwvwbjFXaoqYz1L1NjtsqR6NuTM6eVub6Z6DiVVN6dHicfmQ8ph1LV6Sz2ust2",
  "key24": "46SixpWY3wPi9nxWhbiLv1ciKmXkKPi1WqFY4R6XBEjpSKwCoEC98qyMCEn3S9LGAcTvkPFzozKykrhzj9N6P5vp"
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
