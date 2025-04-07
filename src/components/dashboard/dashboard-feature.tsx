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
    "62f2HdeZFsWhoNWh44Fo7VresrPsD4mfrA93ccXiQZ64X42iGVwY27X22jNF4CrxDcv3q2Vze4U89TRssAJxksYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UStUDsKxQcYXB6hAwHT9xLxF9siBqLf5R7M3bg86XRgqAKd6izyfRtbX5XuPcwAufE4TVyPfoWABKVVzsuNJoC",
  "key1": "65mvck7UsryneXjzTeZzmfoE4pXCKF5qehypsoG4XKzfwdBpbuE6jetWtnrapgy2PNxHdLFnMKBoGNsG6aAWX9in",
  "key2": "4hEavkGiZwaKaAz2MSPWz2D1QiTfJz95HE2ZpWbwi46Bavmi5Caaf2koNb5vSNwZ9xXR91JNV7vxT5Wao2txTwgx",
  "key3": "3FpoxYXLH3LQdEdqwvVQwyw5r1DDGWCB8J3mVYoYyZKfLCrGPBtUbKqx6msxbMypfh2pHG9aqoqGmbSKpwtznBtQ",
  "key4": "61VYpZcDnAkxmezkPc15TQgK1cWm7eERXe9hq9GQUJ4t34TB8923DHv37hGNV2KSNSmzCGgos3pbxnfRKhgHetVV",
  "key5": "D4twP7eveZ24mHaq8yNRhSKN1ZFNzP3xVhyyThdWjeiQJVMpFyFoTJ4pXUmA9xfsVsLj1sPNFWRTEahmQoWm8rp",
  "key6": "ELvgwUVgXUN2ftcP1HQQpYQmfnFPVKQ6VmhJ1FBfxqUN3yeikp7Pjmm1zpEbovU8mYTJk7qFqwgmYjzpFFvFBjn",
  "key7": "5v7QKJKTReQsLy4SB22BaZ2Nf9ey8pMbfCKUNy4gZS95psHbUNEd99stTfNAWNG2fTDRoaoxHvQWgZZvZmAtHVpy",
  "key8": "2VbbYz6SfWF7Vf33mywe1MzTfvCVCxQqxDckja3hJC2jWbLv1tLnaaP3ZNxWXnPV69X9ssrgM2mSA5fFQ7PoipXJ",
  "key9": "3vVvzj3VH3dd2YHB6WfATSmkhshVsQZvbTHnByMSw4SxEKmYLkFHDx37BtbvxS8YafwrD1s9ibM4EmhWojU91pn6",
  "key10": "2dEHqt9cApJ1aUMeeAPBekwcpyqhPMvXNUqvnCxxQt7eDJMADDCEVBu8D6T6wxrThv4aDY3B2syfVuTXjHDgb9bo",
  "key11": "5socm82c3rGAm4R32BSYypPvet1gc4B3yK5K2PBsbsAq5329uKzdhwgo14FEaojRPkrPLnZWYoVhUJ9AagMtGnFR",
  "key12": "bGfcLJoeccwEYGaEzzqnCH9Vp7Ht4TMMETSb5anaVcWdQRUfwj5eq1AB2mA2sUGg12VC5g7ZEpwPssL5DSyzf8w",
  "key13": "4z3RSKhwUUj4KkfxQvpf2J3nExcywquuhxg1ujgDeM7Wtup5Q21csFSRZ38uhnXrNJoi7nEL9VgB56EMkPETXMC6",
  "key14": "4pRKdjoB5Dwpdo2myadEJgLiCgh6uG6ptDmJqFJLG48EJJ6bpm7mw3bzUGg1mYKb2eXWtdAJ1HsJKmPiaubt9wpN",
  "key15": "3w3Grw6Q4p3m7GTi3GMuvGtxKaA6d48bAiYeGQ5bizb2k61Na2evxKSkd9KMR7MZcisySWTq1yWe967EEEMeHTar",
  "key16": "5Gjsi8ZoTBeNvgX43WRXJt76swcWN1SF34HjoXFeKnv4W4iakzKATMUtDbpRUY2kt3Li7nhQrbQXuq2HMSW1rojn",
  "key17": "5w4fLAkRf9gvkxh2fTrnyH7Cr4PLxvaB4LnuKLRYzFHbTt4Qvmeu4ZcB3wUN4DGJ2CFBtpF43MEmerUYhCFJm7Zg",
  "key18": "4rqqNoQjzc71voZxkX1eQ2N5dyXgLPiEejCR2LZ1JJ4v3k57nGsYt9WDPSZMixDyEyygXfb7eKUF73Vr6cPSkZb8",
  "key19": "4xC7mThq2UwLtmtnNGx2Eby4eTsHiNdjyXAtdNSXUxMphwAfTKaNBLBcXmrTnfMdHgfvmYkXxwePuFnmrLy8xenm",
  "key20": "jyK3BrP5TUXukV3KWvTqdVrtex13BJQU6dSL3Lp2Ki4Y1QTHcuJN9iaQZ6YH5LvpfCm5NSeARgjhgy1T86UTE7F",
  "key21": "3ydRhFHK9FajyHg8AmPnLwQx8ck2xYGdBCgqiVB89LaUHYN8jBsnC9F39tbrTUVXessLgjUoF1aDXW4cf53i61Ev",
  "key22": "5piaL8FQZasCNNiGJTdedLq5qPvQ86ZfaXGLQvjVbjbjj6bwZ64v7fb6qmx1nLC9GZk1pzkAa4BzHbXPWGPWfszj",
  "key23": "59y4UkQD5XfUUANK9Lq7WEYU2HCZTMDB6gAGfRYxVfY3vKLzdMWcUU7UqTfsXF94R74s8rz1ptef6Fvemgr9xeqX",
  "key24": "2t6z7Qf6SmAAFHtwcB24v7sQHrM2g3btXDVZQVUVemqMoKc4FXpwERZo2XnegfkUmZve5fPTG1Svh32ehzXwnR4",
  "key25": "41sADMaSvtLzjbQZYt3cTM1K6S9bW1ycLovbdxxjkgeRp4NongitYwTkWdTUxoAagNGQCUvcQBfEg479uT3GBSCN",
  "key26": "5Dqci5tXzfQqe5yjY3pyLnjobRtZCsCZRmZMRkJAjnSDGSJWY9G2hAU9SfY2FwVT8uvLpV5jdp995wDgnLx8c12A",
  "key27": "2Nisv5qXJnPABXmK6RiLBaiQpDJTWcP3KsGjT2tHX3EVwApoHBZXLEYvH4veZcZKuxAu8oFB71kXyzN9vytPam25",
  "key28": "4MnjJKN1ZNtNaR1uL5t8PrM6TG32UnXfXDsLem1NnFePxBbQYf2qaFaJpzyopQbPZbKjPaePp4w6Pqyx7VAZcqXF",
  "key29": "4LuLHsbkETcgqn32nUPUmUp7EhofUHe1vSiqVFsPq9h8sBNvXoq2o8sxJTgfzkzjb6JkD6ouo99nGzFotEDjPoF"
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
