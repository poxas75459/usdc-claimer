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
    "26DKAEn2QY4Fmb6jFJoHREFG4aoYqSuh7XQrCuWrohSwGEEyuD8RviXSEe8sYhuNPhr8dBp9fVN7ELvrnJHzqq72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bq49izANwncUoX9cztEzoRmweNAJifx8cQdfWUjJpDJTR3AyPt7JydtcRKFgFonJcxiobSv92bzYrdSNWgvuktt",
  "key1": "5AoeNUHUoUCKL2hcdtbJ1cWTX7pcinrMGQTqmUiZj5gre7wVMtrCXm9HGtytwP3nFUarzzRUiBrzPG7F4wyBmqAJ",
  "key2": "2tDRkJKj5fWm75SDbTnD8FyUydRho1oZbKAbwAQ5NevMDhr25WaE7BHGbqAascdgcpe5fC74w4nTumoQPzueBKmH",
  "key3": "3tQz1jEW1XaTJoYQTcGqPQ1FT5zaPsNkj4jKMHVgwtyUTKj1nck35vUbUiScvabPk3PtQjRExVB4Ht9PdFh65izR",
  "key4": "EgehQsCAwenUAsU87o3cCsm66onkamhHTmq4ZDASoxiy46adjtaY8gibqWEnRdMWRzfAm5oQ42LFWngtqt5aLYs",
  "key5": "kV5w9x7jQZv2Bpu8UMU8atipkUx3GSerAUjKBRDbShEDKYXN5dXrut9HCkVZenKjGkrE9gHhTWsZpQ1G7f2WJQA",
  "key6": "2oh2hShD96v7XyVEatNZrtft7YKHtXSweT1ZGRxUAt8Qu9BHSGrbWfPK9WxGwAjrYKkkUsSdHni5ptij352wMBqG",
  "key7": "5taKcpvVMnKVVSGFYt1gVYxMbpGZPbUoHtTJGrCrBdCqDLbjwhDkNNJeDEyPvMn7MDgJkSMGHKYsycEgNngc2wWX",
  "key8": "586ynvMjzxnL66P7kULxnD3drByjhsNzZoVZAEfcRehUYXXVq32hyUafKoZGE1HSk7mN49WfT6pRmtkuJEPLwTGb",
  "key9": "3ffmB63pt8ye84WQwVJZVDZrRWpSrWrJQx8sKWJhoNvrB2nFQynngy7S2hU5irDhEMr7mVFVbwUphfr3hE6GSwFu",
  "key10": "xswAAHL3x29XxJ15CyhxyNGHJRNZK16Fr4A16KJpP34RKJkBKyB8K5ojgUi2ZkvAqHguHqHrmMvmafAswQZZBpq",
  "key11": "3LNFaojj71XgfMZv1iKLAFgCD6iP3dcDAb5xwZeBhQ8skX7Ut4yG9EEay2cEns1Hf84kqCHdHEokv2hcD35vqUop",
  "key12": "32idiE3JsRHLPtacoPCNW289bTCHMwTqMZPMFDRME9nAQeDA9jQo63hXJwMGtYsYXUed4kny3M94Ak2XEVh1YkTW",
  "key13": "L6zcgXBeWARsSnVgxzNgJqJF6p67WHBzo64cjR7ubwL3mcm3pd8tSAZzMjaf4riRedGwnzFvnn8BMAu1mihPkND",
  "key14": "FDeKf14EikAHWx6BsqLKPt8SogA1gnEi5phmQvZdmqL6f9eq98WR7Qta5P62reGa3jwDNXyFRa1kAwyYujLV3aN",
  "key15": "4apBiq49JQJZERCdM3EDviWmxDiYNeJoPTBBxqja7NEwo1AQ5rbgn1REJmLQZpMwe6xXvE4fyTkFntxszHvkQQ73",
  "key16": "4xDBS61Ze5CazuRDjjpN67FLbG1NeSPBeAA2Pv4k7rLuEs7ati4vWcCU9qM7W1BMDpcyqe93vP6Fr1QWMXCnmeHf",
  "key17": "5LBJVtmoBbh92UPdaBtWzqEshWgFZKvRgJ99MMx9zZ6wL5VSKneVoLEgnPhJVx2hQsnMyB1SupAHnNzTf9f79Bfo",
  "key18": "3pWamJbYrZzaWoKJLvyoUUDE1ndtSXW993hVbSW3zH7FnqsPrqcq3Z3TQusym79Dv3HRyfQFA73rJv7uuzWqrDEx",
  "key19": "21b11BSqdKJs7n6hh55J4d2MFdqbgNCA4nfPEATdnc18QahbYmpuHcfg9uY792y5bsCiFuz41akJu499EgJ1h5b2",
  "key20": "VF7DeKLGKovX5asb5qYCVxoeTbrW6iJMQhmXdk5iQrw1fwmRM7m1ft69z4Mj2XAB2tiWy2eQ2V2xFKYATFEGu3v",
  "key21": "bvJdWbRBkPt9o1juiy1aftEoKKP2X2RNXUFXzsoWFRRzxQjwr64SkbN8xhaYFDXxAmazqgmkJv6Ah12K8rGxT87",
  "key22": "2WBQjT6QsTkNdj9bSaorNnJ4w27aQptPf76iMFzQfiKLCNJCqbgZubK81Xgmx7xUuobrxTiiHA9KL3EuKtcTnxTm",
  "key23": "2rEbtoye2YijdZRyQR5R9F8AfPxdLCUW7bynWukeSQxVPREKLw3Hh9stettJTBW87hWwf79sCNi68EKMFczNDks5",
  "key24": "2j79TCFdF2vLY7uH4WgShKsksaqtDNBeQMLyggTpT5t2kRFbXnuQ2D5BEuMNU8Ut7s48UkMgfnhAjV6VZ3QESsEQ",
  "key25": "5rwzNgF7uWzLnDNycMFGheByrDpD6mK6nuVzEdFP9B4EeCeokd4ophQhnU34P1JZxjkh1EUSecsRkLSozztQPHs9",
  "key26": "3yb6NEb9fLrQo8wCuhAGcWxdNWuCH7X1v6zBVtfRxiEkyWhfvUPdH1wSRv8cERD44XB8khTnc6CtD56bRVZGxqyR",
  "key27": "33zeu3iT5Vq764NCm4znNBAJHNsXb9hRzviNJxcABo6QiVELjhcqm3usygchN5w3Dgfivt924vRanb2xcmGUwteM",
  "key28": "52WPTqb5jRSdqcLHUDGSJB3hR2G9D2UbNHWfqdG5dzCtW5dRPJ8QaTc9QGomESAmNsdjELiyBu1nX4x8aJH4Hjc3",
  "key29": "4T1mUxiW3Wrejm4CeHb1XLUSY9yWotJW9UtjkJKUyQBTPJTJVLsCiPf9YEtEuh7P7dKyHhiiJ47vLHA9Q7S1DgcB",
  "key30": "JteDADaVYrzX4W9bBpeueGG53DYhWV5RYC4fNDB925piJD4m3mQh2bXgWTHAFtpWbPkUbyjMUkdovYKuGsqynBo",
  "key31": "2xC5YZCKpuExmePq7Jf55ak4w5aSDhgWZa7Z8kwHBrMMykR5kiD3Ri1iEfyM5CJLGwBrazHW4THodyezGvKD5kCQ",
  "key32": "2aEVjiQoeKUEstvyNHUuFNCLMMg7wYtVyZRh2U3Badt7mBw5FUidZZJbp2cDjhf69XyEuguCdzYiYrBuaUZH6fAr",
  "key33": "4LYwhKy6KhcQFgw9MLZhaA13p3ZxFvAjU6ndSMpj6gMuifr4bab5ZsCfWfSSG3cZHoyADrcUUPFt27Y8YpQssMri",
  "key34": "Ep7VE5uNQmTiWwxoZNqnEK2Pv43GTtJNpe3vJhz84Kn3vfLQToVWApMSVJtqgs9NbgMYxXJdY34sbNsH6oBnhDx",
  "key35": "3xvG3HEXprsV7KMfopZLrPKsphRCA5uiR29NinB1YxX21UsRqYp8RJQ4eeyawXiabPxtKBswZsVWG9oe3bgi77fi",
  "key36": "i6wArGN7fU7axxgiHQhFFrg6UzU7grefLYwvBwjKVLjp84g1L65jDcq5JBQwK3NQJyorQzVUBs6L629Tpczr7fX",
  "key37": "5oFLRRJ6VrrQ4AUpRCa39UdF9XvUWhAUvENtmWghosQn3J4ywspuDKYrtdTYPQMFWuKV4b1eqGrVhooGvZ5U5Mu6",
  "key38": "2KPbYYtJCjk4gh61A3mw76PZpHH7pJZo8QbV466hkx6Qju9Vt7EZysAvqJSCgu9H1SV86cJbcn1PWeRvCuxXwBmv",
  "key39": "t31ifagoy7f4KQU8x7nG6A8aCeSQZAmbE2f23QUQCn2EZpy6HmsFeroN1RC1D4XUUREDFhw4T1zSa8uKrPzc1ok",
  "key40": "AChhPkRvuQDyZ5PmMvf6JmGdZ5FLa9SFJLb531GEV3y9YeD3tS7xsHBk9pcVhVS3LotuHeqQBEvNtDdtHSfozgT",
  "key41": "3wj3LSURkhXWXojNTqv6hqVbzX9azMHpPJaq2M8ynz8yN7JYMqW2pYkRKfbXjeFSBbhaDKpi9TT9vSX8QwbLRiEv",
  "key42": "2YMj42LWDsdY4FiEKwZw4YyE2ZEPFhh4uXQ1hTF6j3mft6CfF69Kesuh5AzQsxrEmEezCPfLcffJxrqJGABxHw19",
  "key43": "3R9ncAZRD8LgvagdtaWe6dmJ8uQZgsWyBJqfDUqtPojTTd6UwEFQkocTe5jk7dc8SiDr9S6eZw1b81WJJyYZyDDj",
  "key44": "3MA87Ty3Y8aeLYV4Qg5oC2ALnG2adaQFs2G4uK9Hs7TMf8j6kPpAi5NBPGJopnMzYjCuDfE9q5YRVux4JaaznqJb",
  "key45": "ixXpdhWLphaHwU1RKi4oYec4ofcq5PBEwX86KTS7QCW7pPy2CuJWbxHfvyb6YkG3Z82i2ztBt2Nz3nGsAXRMJLX"
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
