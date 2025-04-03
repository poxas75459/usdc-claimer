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
    "5BgdTSDFkVCBuNY9Q7w9q9uxzG8oqydprQVeqnCLeJXR58RtaY5iEcCRE5oHmmCEWLRZ5ZPApPA5YqXRKqHFy6nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBFnETMdUz9x9LKrSaoEWcnAXaPYG5vdzNDEPvHcfmPSg9o4QXyDWZ9b68xyNwVkJHcciwBFBMcsv4Eh9X9bbiW",
  "key1": "5U5U9EoxaLNKPXKVn2DbjyC4AbHfFSXTgwusLJ21oET1LsMdw9udWsExbj2DgdWSKqz2HyCf1EXV4FpvHoNAwe2D",
  "key2": "FKC3qVSBfHGuuw3R6KAxR1H2kz7NoCiB5sSCUniu7ybZ9ynZST679LboK1adzhZWtrd1Axhu8hPaQ2KauLuS3sb",
  "key3": "3Tcrd81HhsBxGiLJABhT8MEafvVfDZWbEQXDeRpZqKeqSYdR9syu5QifsRdynQHmkEiinEhe59cdwYZyV5xNenGa",
  "key4": "3fMSJ7ELhb4R2YrwsckbLNEv3aqktrVhaAPQDegkYzdxq93oS7LMJRb9a4HLDCuj1BfdYtkjMkCQUMPdWNqiGtNj",
  "key5": "4Pn3D61v1X3tgUNhp1vqfmx7HewvkM9KhqA5Kh6WnKu8YbvYd9dByKrFX7yQQQQYdhvh1HrvvZUmq7WU4eykPKox",
  "key6": "2F4g6Ss93Eb7gryY8qUV1Wt3jaYzGhV2UyNBKGusxWPa7DnmuboqD3XW8MuXX3oMPorbNz66m2wK4rYQcf76pEVc",
  "key7": "461DDysyCVffSBpFscggN3HGZ3f8WAed2RkrGfdtgffRSSuBEKfxKyUvLvCPjR5EQ9d9U2pdPiY4KAmCSTKCaaQ6",
  "key8": "23xA6oywZmPo6JjbmG2wieBNJ79BdTrP7YEu8v2uP7Ja9mcguERUFv8tQdzRtvKxUrj7Nq8XpatCzw2ryqLXM2zQ",
  "key9": "Pe9VXqceS5TLnLTSxkUV696rGdjp4kPh8GUmvZY6ES98QNaqCYW1SZ13AY4zgNRjmutxgFvcjry4Pb7xUZkP4RG",
  "key10": "3Pki8XfTKbDwwHMjGebcnVAqPfzqMTWN3x9F9VRksZ3f9mG4BhQp8HpYpxw89noSG5J9q2MGx5yyoJe1brfqevw7",
  "key11": "2fWmyZQmRSxDpfGfYiA3auSaJKzipBSbD5Bq2ka2rhwUXCud7NGhzHeXtBq4mJbg8nZjMDSy63TzDVidAD9ndrWu",
  "key12": "791pfXoSsf5qUppTVGkbiDzhHHnuVfBYUc72Sz4h4jwnQiBgpRgkYdTt36NLsAVuhArgASDTCZMhDEGddbuxjuV",
  "key13": "21AQkP8N1Zt6VG2H1XMdJc898ZXjcAfoMxthCgUEi9mQuZy3zxwax4hCWbak3PUZCuEckSoCkiC3ocaJ7P4zM64j",
  "key14": "5BGJ1rZMfLHowcWjTsGgAHEnsh1wMHaDqJsCr6tH9wXk6BKK91SmNS9BxHPVsca97KwJmbMFJWFdTW5m3rrbKQvL",
  "key15": "22t4LQRuuUwsD73HFZeYFgNttBhjAsEuVKuBbG6TSe8hVyQGcqgGJGuZRxfkbiavmyTFXG1D3jUVGF5vfnTyWaru",
  "key16": "HyH4cL8PdUXSYN5SYirtEvoc4ZvgJ7wuzaGmWPSLSxngpSFACCx9gqVbsRyEVmZjNgVVaDxnavQUXACneXBDh5x",
  "key17": "2JvD1BrSB7vtCMfqBAKfBes6DsacNpyKW4AJ1nrTkFJrnaTHAw8tWpVTXnyDfkbNjv5Cpcp3RV99ugb6bkmb27Z6",
  "key18": "3pRGEsWpe3hqPpLQUSCjEPDSNL4WTV8zK9VR62QEcewWYhUN62PdQ2CZavRQoFEiMBJMQdKCtu6TksxMwPG88dEy",
  "key19": "2CRj7Dh2U1yKYTYQmsfMybNYrFYbRFzWuKSgnRMBaypBEasGMRwyx8ZCoH8meeYFcFzfZPc1a2Qcg8BY9kV1hzML",
  "key20": "4surEWnthRPwHtyTKDGpr7qftN5xvrFVvZN7oXeykAJeDPHCPo41avZutfUUfYpn1pE3FQpmRmWZPA6QrCzhBa5b",
  "key21": "5gmQH9MxjPEhrgno5LTC7rfWjpMqBUMjBHtnBigVvsmNu9r4qGd5R3tiaxFNfGSHN4oBgPaj13NxD1yuuPCQWFTX",
  "key22": "3MvWxsd6rebkDR7hyErJYdEbZvgZPUCJGYTfwLH8vSumY7EPnFBMdf8BtB2mXp4iPjK6v8WwbkZ3BY4N6uPkq13s",
  "key23": "5JzY4E1cYskHhptsczVDXXMLX6GnxFrxkSsYhTuYRyJJBkjWyjCiuKf9ZbLtS38hoc6TuWjN4iRDnRu5APhfZxSn",
  "key24": "48ZcN1PNEGQ9PpDuo5iZzzqAmbrub9Wd9MJWV8QvHkRfM2F6RMPpyNApsvozZXHqwkqjkV8iuMEgznsh9j2Gn1kM",
  "key25": "2JTyaQpbcZeJJkzzUZeAkmLwMZDeRappnZYwtVyxMeTyE8HqdArpQzv44bbyY1nq82fuM4ZtS4bDU2n5nAbDoEaZ",
  "key26": "yF6YzBGHQLBBhGTXbLWMa1ZwMdqiaSUcaUa25XRzkjXb5ns15pbZ7178bik4ZAj2iFaanyu7ptj5qEp4PDnSa5h",
  "key27": "4jgRgNdEuAKQnFymSzsyiQQPkhmA2ndifXyTXUjpqWYkmdEbyNAyapNDnKV8bGq8mPPQXvi8P26nBU9voe7BVmDH",
  "key28": "f15j2rW28hiVQuXRvFyfNUXo8JDvunDEHMn4xWnuyo1X6B3FwWP151Ujicrts95L2CTm2yUF6S8cG2pEAC5NNTi",
  "key29": "41Mw5W3Ez4Lj5seYppevN5v4YzaAmK6FrvwEE4pGgvoUVwcnAFpmWZGhpXyKAMvKSyvDbRouwJwr34dbWZ6mTj64",
  "key30": "5EksQ1xhH2HcuMMtMS4q57FRsNjQKLG5He7qBymckUzpju18xgjzajwkU6wnupXxQL9ix4kc8Ukvq5KSL8UYkVeP",
  "key31": "4kUDedAuLAFtWafH2uHUBMEtPDReLLBwFB2EzomUcyqoa84ALtxHFneXu1esY6bm5D2HjNno3KTtX8XKyQcvweUq",
  "key32": "53yQLZWtphkzRxa4j1nFpsYfW5LKzYN24x8wGYAwVwSVqaks4YxpbMgpZkqepz9pJmSSDQbr277mMzJLDbbeNCmY",
  "key33": "MrnNW6GvZiFLiLFeY9czWJJNSDW15VnwKYiuxTu6C5acrPYviA39veJP8VjwZiyrozdkUkNvSU3J9hi3K2n5gtd",
  "key34": "gBrLRkpqUkPmm2iZkyvqeqiTJ7KFvD2i6UAe5bikLV4x7cq4mGVgQchX6YXawngZpNtSue31bAy3s3ibEREAvM5",
  "key35": "5AYvhpoKgz4pKLSDagXf5XBPAy295G291VjtW3s4e51cxvLXFxboRm2v7kP1YF6yYFERwPabJUhPBLW3CQEHVHUR"
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
