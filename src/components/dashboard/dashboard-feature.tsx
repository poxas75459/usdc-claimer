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
    "4iwHuP3P3ED3Rt5qV86k2nLzEsXWS1PJ25EpfdahMnegKXihGCBf8h9purFGLAjS2vgnvHjavExG24nuKzt18aG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1CNyXWDj5WEpaaWNJZb7n2ZX6njn7kggQhUpUipVnPtAbiEiPQBPu8EriPUFvnMznE7Bd9hGcBbtWWqoKNv5d6",
  "key1": "2bPbBuVAjZwHr6SXKoK2hKefBcpYZxyJy6FshyejVtz4XJYdN91k1eGjt1PMoDurvSjjp5iuVhzunaiJwFZ21V9b",
  "key2": "2HmjAPKpmHW3Pto1R5ZytvKun5q88XJ7uxHvSjyA4T72AsfoYL5iWveYuAdsWiaNW6E5PoCg2GUEdiTh8BafYUPR",
  "key3": "cf1oyErSzSyfQdj2FeGdw2ooeeSM7cSkGZe7eAo2zaGE7EYhaN6MXoJoBHZmBNP29uWKjMiorb1k6FyrRgjnE9Z",
  "key4": "JfGCRG72U56azKAJRtJQz3RexW7PeBpwTSXHooq78FN8yodD5fZnB8iHmyxL14QTQTh9UvPkU8akWkQtWukseNu",
  "key5": "4X7Hkr3iUeeaTJ9Qb5kDVrZuPvdYtGtL2YTasCSYdMnaj7MFFJU8Wg9mqqeS4orZuGqBGRM1WQqnbttPf997SGvg",
  "key6": "63ozLu2AttePezoThgm9d1uuf3SJHDYQCgMSWu4ug5bCZawLmZtQeer1eJM4FzV7Xgy5WfB44RCgT7vnRv4f69HU",
  "key7": "4TfYLXiqXvQaakP6NbdKuGreigo1sxnqMVmaqN25HPHNsFz643khotq26u6V4ZWm9AqW2t6qUgaD3sDXJhV6u1tE",
  "key8": "3hresLEMKka1HjbWWySkFiv3sHL4JSSXfaRjpARSSLj4bL826QTuej7jMyrZXq2fA4ZKYkUjy4an46z61PFhSvPy",
  "key9": "4w6fNR3R6yspjWE4ixUXwq2vHrZELA1h37ttgUAKa1TLKyfenRzrEbLJdrDpepZgLXindGSBLETbm3qvEHwCao3V",
  "key10": "2jNp2xyQBr5JCjncL3M8EicAShW4ZVwWMgX5A3DUoZZArDMVZSo44PgGyN1DB1oh8SePS8NvsXcwBuhX2U9C2hxp",
  "key11": "2nfYLmdqvxMzQmqrSFQuvZufESpqyct252XpYekAbNZ2G279t8cpzw87PmACscpoceXdgsjMV2wWLoqUNhzrNRrL",
  "key12": "Pr14CbzyBG8EJ5HPg2egLf7HEY2r1HhRJ7fFLa43aM6KeuYGMZ3BChw2mFrtFXRE3fPHY87ZXJxFvbzN7zfgcLU",
  "key13": "612akYtYnfuRR5zK9YdqwafqJNezTn4dUzu6hDdwsdi5tezMVeA3zSPqWrkyn49jLYuwh7TDHDxGsnCYaS9rYQKB",
  "key14": "kWd7JKzEUSsTPjdKNd59sX7m2cw7nZuCpNr1PX4H6Zb7ZcrUeuVBDZq1ya3i81P7AwKJTFxU8kZqptcCS4x26Lv",
  "key15": "4pNwYvyEaebt8A2sd7SfymVFTNFGvJjZg59ZPzoFShHSJpop6LUBXmtavA97WFmpvH9ugGNcGGZfZ4q1CvfaQWRJ",
  "key16": "4HaeWkz7hQQafv3r3WyVeEjhbQV59aLEh1rbT56tmunEGea1Fv6ifihCwNM9Yh4cAAe3DkpoU9XjzkgSGhGEEX3t",
  "key17": "2SHLvMwcjkv9Sn8UiEiysFd3dHdNN3oJvVmRGDGtDJFDAqn5GXn4SLwSaSwCCKwBsKbLCj8GTsXxjcC97dHgPb9t",
  "key18": "49D7k1Ca1rP88o285evjAferkXuGfgk56jRktG9DVn1Cn4EbhVd8neU6nzi2e2EPKR8ctCfP5AHu8VgDeaSYF4BX",
  "key19": "3GQjPWRFuiN9GoAyjmLzaAqTLUA1cmGx1duCoa8UV1huEZEaHKtgo5toPB25f55jS3tk43DAdccidLixfCD6qgFY",
  "key20": "2knh1PDtptbv5MjMDeFhqbMM3c1nHrQHRg7qMEoQDFL56sqAMdc35wccKPN2tSmG3bMmXowA7QVVRcikqFCAcD9V",
  "key21": "4tjEBdYxgk97kbyowhMvN6FTVZ18wgCura6g2n4PKkBXhEUf8be9vqA6VQswgoY7TK9BpGFSFu6FQjFWH4MxgU2a",
  "key22": "37tLwJXXp9beUk7LCY4MXwPzpJYFZ6UERzqshSwrnScRpKNWuwuLDBiDprK9eCyuRBkSMvU3gi3PUHsTurskFpDL",
  "key23": "3HBN98cxbzrUUSkeFcRvrhP1Ayzvw8XZ7gHtDSKAN63wu9rDQHn1qVf1ohzmvZMFk4SS5f3o4W1cTkq8M5zNksZm",
  "key24": "3XPWM4PsQK3rZ2T81u5TH8J3nvdSwMYRLog4hUzSqKaijknBDrfNV13MPGERjWubUQPE6PtoU3FJ4EnYbVTfYfin",
  "key25": "4b7fD53LSBx94ZdqbocUbih4EKsQtMfPyV22GVZpXrHvewpHsRPiWo61AiZJgLhExw67RiWbeMQ43vea7sBK93Ae",
  "key26": "5XQZa47RUQTCPQmiws8Gk7JYWWKpnxwimAqz9JnxN8bqUihHrcJDqKbc328iqxKtEXwMKCdBWaELzozmWzrWXXYg",
  "key27": "2UNm8Wmyb9U2FrgeCbSABQhbJBvMSuKVEgyDuBuCwAYUL3kVmep3UbjLLCQ9sitdCXvwddaDpCcUGPTH9SgWbaVU",
  "key28": "3VRuvFA5oTxcbZS77q4w8K9JPHFLhiUQhfFHCPM9bedVn4UJGW3t1MsmUvzhN91a6NN6NWB6xaS1qfbiQvQB9vHt",
  "key29": "3qZMgfPwLwH5UpMXHfhHuYGhRYMYxMGqnt8WkZBFKYrsUUPYideYinqZh3oR7rCEx6X9HJQbxyQkspS1XWwTe5Xc",
  "key30": "373ASEZ36boguX7PykvFUATybaTq3UNVkbuc5SjbpHb3wGXWQiQk24t5YAqY3BmXzM4fBEBm4WVerFSmCXXdDZsy",
  "key31": "4M48uM9EQmWnr5YdG5Z99BfgfEhXuQvoHTeEm3ofQ2WEqDyMEz8BtFk5DdWowGDN5VqurFtS5HHe72dWzQTerc24",
  "key32": "29JcoosJFSF2tyEU8oTWRCQ7PK5sL3ji1zpmRtPXw7UsHnLQDhRdVuhE2911T22JpEG2P1BEVwZ2DJMEAiM2SWqH",
  "key33": "2YVrtRg5uXYvK3TBP6RX1jdSi2JCfyctLLTTpYcK47tYwGpr2s7hFSTrLeQnrEojsbYa6DFCqPyWcSoHfQP9YN8Y",
  "key34": "2S1pE6eidU4jNv6FbrrG9W29KmXV9hgujivSxjdm2LdHbduF8ZekjCSaLgZqRGSDpwkWHA6yCf4hZ3uu2Pb9r7yT",
  "key35": "4WPCchryvud6s54D5r3CfjLiJcqRcxog6TrZSGSJCfgpMaohU9NiJGxPv8X9bBHrkxw8kVfXs3ajbvq35Wm3AavZ",
  "key36": "4JiLr1fNKA1BKZAzuGVm8QuaW8H91grGAG3g5t13g9R2gk3Gebp8zLR3cdm5PcsPLMVgNP3uVQTxupMWvhuF9N6F",
  "key37": "3KvTeVr3oN3Vh61muGHy6ppddbcbLqdbMbnrcxHZKpmqdvJcGTbjWJEQmh2A4eQJuUp5dkeh6hxqNJcAG3qpALqR"
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
