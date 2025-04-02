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
    "5knxUu12iop5erij4obMkvJe4fXjt9WDC1YaPqfH9Ko6d6E43nGWvWbotfj4taJP146tXWyWMivA4gJ5zXL4A4SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1zUuRDAPVmTVeeb3a1sJtXKCePnzMpXt2ZtKGoU4sjTHGY4QBT9VrWtrSAGnXmadEQQXLVKk8xJa4yboQ2wVrdM",
  "key1": "addYbMQBpgfXP5d13MdSYXLQELrmSYxXCttVv1vTbvhe9toVLWoBXWQw2ZmQuu7S3ARrdiwvyNJ4NfvSMtC5mkP",
  "key2": "R4yWu3pfyThhkPztgxPCW6Z1RMrfSpyC4c4YZ7LRubV9aCYNCXkPqV72v2Nmu4ZyEos7ShN5YAcXDRLBxEf5fPm",
  "key3": "2SCuVoVVWWmxB781iXmuiXxkSafoML7nk3RJA5VxndQyBkZaLTrpJw6vWZUA2GfWmHH8ErzQ8UtNLUcRVAvwBX7f",
  "key4": "4Pudb52REs2Mtz61puLdYeSsQEL5baGh4erqR2tRcjreHVt9cCf4RhKsDw4d3A9mKcV7TDeLy7Boo9wEDNba5mBg",
  "key5": "NPDD9xi8JBtf3TKnW4HtVQP6hXtgD4xumX95DvHFKkFjzXrDHNN8Y7keGnr4HBg6z74fsapv1xixawdPoCCjv6R",
  "key6": "4ghxat4GhXR7Kt5VXwt1H37Ne8wsnYrAZQuigFK5wmgrJkurvZXbPCVUnSmswbmSRswagwPup5ZPDJXq85EHoHAd",
  "key7": "5kfu8PsQT4Lx76YWHkbrN5B39mzd89ZVGowSUTGUkMnLXrGdLGcQGry1vXkLvLRQgWxFugk8QhhSTBp8Ue788DCu",
  "key8": "gCLWYvPQPXNtKD2AacEc5Qnmp2FkPmKCAdq2uw1Gia3G4veu2UzGvsyM5JoygCeuC2y8CGaWKzNrt4nywqEZeaH",
  "key9": "5ApkZmVzt7FoopoMYej3hqjG1R8arJ8ATm6r1yrmpDGynmxL89c31zzGu4eWpm4Dcb5Y9HdHLTsTxZZXCKsHdzKC",
  "key10": "Dx8nNVGCkduTSg19CCfwFMtztbmhq822d3rXBxPggT3iAWTQztYUZMpPuwMEvm5LcbdD69hsMN1uj8gQyyoY25X",
  "key11": "5QL4xYFiv6dSm5VRKVTvyibn9RJZmevBcBimhKiXSo8mancxw5cT4WKW5BTZ6sf3z9AFYYFe7GKGUJV3MpC3A2B9",
  "key12": "4r6N5WKrQBc4W7uhSPwrRTRYrudeu8LfY1thop6qU9JMTAe5bu5CzF98G5oUbdam5u6K6CMLhdi7yuCMRgCWr2pw",
  "key13": "58BfshZMemFhSF7QYjKAnFG6UqNpCdp5Bjcp9HhX77dLLh6WnfsKg5p3B1iJoz5Xc7sprLZE4KAv3U5yWcAy3H79",
  "key14": "3WgEFbrXgChjfKTob3qMunmewQXYKMszGUngiMgNBXVQaNbAeneFQR5qLPYAqsHa3g9uM8X36aoghTmNfE1TM5VP",
  "key15": "R2JGCMeeYEn1c9jeuWH9PHPMT9wnvWXExZZpMQybYX9FzHiSEJ7vAEcZEhzKfJz5pgjUZ58uGKZcB4pzJQXQmys",
  "key16": "2AcMGnGXExbCuuUPGMZPgePnU1JvVEqJuh5sskNLd8xyoAoYZPfzEJwsbA9UeKCsFYc57NdL2rZ5Lt96y9QdNAu6",
  "key17": "5iWdqaGy6c7g5myG6QBrXRJ1TtnXBGZoUddJki6qFy2HVswZM7uAia755SXx99bv1neRztBnBCoBoSMFHAJzVSvX",
  "key18": "ZncyyT9W7mbncLNd5VWMDssMwvLCjwkTUSFnXL7ubYNRQ17nAnwUToMFt4PkkUzhXitGh7EzwU8FvuRg7hczShu",
  "key19": "3gbjhh4kYqB2QchbX6JFdy2rJrWeLDF8f9aTvcFGPwR7G8f7H7nyWRtwLvJqgDfTw6NvtJoEaWcA53dxiGf88sLE",
  "key20": "45hWFrEEAuUkhu12RuRywZaRJLYUdKAdCgS2aisL3uWb9b2uWm8BozCVc78ZT6VcJjYxtYUJZRiW21FLHjcD3CHU",
  "key21": "39zx9UVaQcoNiJufvWQUgQ9ykZQstJYf6vms817pJioVBo2rUgLL5M1F8Usicc1ygshj8yT2cqtJsV7zLV4bHBem",
  "key22": "ZmDcBUcoxR1GhQzF9joUDVfGfK6J6PrLALAXSuXDzHuj4NwLsGyehthCMjomVt6kNJAH7eyiuaAo29XAUHKXYvF",
  "key23": "31yN5fPaPaGkAZ5f92Kg6XH1HNWM3VucXpyernXFwRTmFm4zJDxNm8E2CG1z4V9j9CyLZncUDWKGTcZA1SGVDpeH",
  "key24": "Je2xiNVD66LywczSiMSzrm1Sd5CU3tdgTdoh5B7vTAaNCttH78t4b6p84tmuMfM6EAoh5WUjga5uB3XyGVtK7eD",
  "key25": "4S8Wbctq8nFQpCFXxkRBBr3qVLZmb3MKnbPsd7KywMuhc8n96nqUm5LEZa8VmzjfqShGML8rbNTGHeLc1bLhfFP2",
  "key26": "63gaBQYuHUtgmY2hkjRiu4AmWAj9FsC4tc4CG2CxUMuN73o86aSodzPjKXBuKgfgabFHXv5TWZYcL3mj5HZXHTeo"
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
