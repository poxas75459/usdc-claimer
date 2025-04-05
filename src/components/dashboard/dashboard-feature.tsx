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
    "58JJHKUjaD3H1TesMKZWJe6VZndmE6VeDe5mh6QPkRDZogaXNPoFG9wryZRtRwtCavokiCWKoskpZQ4dR3g6NnzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67N3KPptu26GnkCnNTfU74KXpKp2AfSTX4au4apKQnebtTjeGnBmqj13iBjsaU8v9gMNdV8YWLiusX6tgSvj1iUi",
  "key1": "32gtmJgvFa7TC31QaGffuFBRqVWNHkRXAT7Je4Qom3ADTStfFsRCFpdihYAT8ScGhfDjxNHiJguAY4kEuJMMoVpt",
  "key2": "ZvTF2mY7TBQpLyaYkYChtLkjHJPTwLd4brGiPx1wj8N5G3Vx4M4fsXCK3D22WXjUR14jZ6kiGVQYrxNtCQBfUfE",
  "key3": "4BSoUd14UM4oZXC3KNQN4hZUtsoUEw1u42MNUKgBpReYEWw7miju5UXCM3YCwij24TGyqBiKgKsHL97Y2rgJLvyz",
  "key4": "5iW4zx4xVS5Vxgmn2dUcNGinT8mtftNZcLbBitziwVWXsPtez5527hyUUiNgGvZrMN3Kh9o6m8rV685f5pVjZwGo",
  "key5": "5ofAPMx2difq1YqcwD8sJiFmNvHqvwc4Q1CnuJCPHQBMxPPz6w2MNvRCMUuNSj4YwJtD3pT7KdjURwqXiW5J4J2H",
  "key6": "2rarAGPecLHWEP5QbRYhbEMGdbfSH1xYszAyQEFLS95gSMjjNwUY8dgCL31Y3TZnmuFk4Rux8mkFXRq431WPcNvS",
  "key7": "44vtW6D5HU25b8dXBiubzwsEbWN1nLUnMEjbeqwo7hraFqMezX4goKEkDZrjK4oJB7qw1yf4ETFqAnR8ceB2xn1f",
  "key8": "5MwTfm1F7ybZ9DhAhdCoEgeY6iwxEWDYqnCqEVDdcmjBFqUrjo7A7JD73CHnDGLprA3EzwQtbvvxrLQtLNj5m7mo",
  "key9": "2gYWyxvzsMhvw8bJmvtj2whN4SMHecYq2oGuHCAoUhsYJcfMHzbj22iv23sc9T2prgeReky3gdddgAkMGcAKstTr",
  "key10": "4jGxCMLmTcg87BdZXrJqSZ4qX9fYokx7uoqaozo3M7cuqPDG4zEGMe5de79fgMnP6NZ5QzDpi13pmW72WBXB3GgB",
  "key11": "4X2qERLvrd7CiNbUwiBLC85JL6MbWnUXH6ZHe8ntNpbufFL5J8PrxrTNoFVofnrLRAdhQnDmMepodbKfC7WfGizE",
  "key12": "34c9GC1hJh8xza7jYEkjQxiZroa7jVtguPppk2vPa1swmofWgs8aZj5iqX2xWe8GfCrQhnyWCpz3gHmHvR8JtHUc",
  "key13": "aeK9eC1ejMfuYWNNSdAzEQEJcF6xBTJa57rC1HVUd6pe9cYT6df8ztMAkC5rkR1sWZHigL6m39epsirAd6aFtHY",
  "key14": "2GYzhYK7PNHiVZYjpsn3ixQJNznUcfQzTCzLpTU2QW3MNx6NhSk11VPf8HBuuZqQXX8HAgHagayPEqNETNCWaui8",
  "key15": "2rKgCa8xnYbUwcruWcianCDwnpEdNHYattJw9eK2pi35WwYHk3sSYUZEyC1EM8G6xMoYNysP8ru6HKas4RmdqXtr",
  "key16": "652XtqSA2X2vKAqTm6AeXtDusHZJgSu37p4FkymfCdfqVesRtjGmqd5e36r1tAWLbawVj53GiVVyVohu7QvEzM5B",
  "key17": "2f7D5f2Hj3zH1FBknz9BL8py6Efuy2uNZGJhk51BXXvX9ApxJWz5kuSMdPKLc2ECL6DKBdh54rEA9cyQX7DP8H8L",
  "key18": "5tEFU1R2LaWpo9kcV11xfxzp2jQShqSmVpzYtMyzUoGctCtdfhW2SFo9iv1WGtqeatUoNx6zH8AGqQpjnMAuvuv1",
  "key19": "EmckiHtiXhLsMLDemZJsSLz1ya7pUZLg5MKuJ9tLy7FmzydwBTjvghcxnELdx4tKEo9Cqcubno3Xy3ToiHHAfWM",
  "key20": "J7HYbraFy7B9JF61WgWjiUZvoZYD4jeYbP4yRmYsXgLqUvhAuBe3ceeAdEVAk8Ce26tqqZVSmFwe5z69C2f7Svp",
  "key21": "dhw9kb96PrBy8JpPFHaCEMUXCE78cn7BgmLTS8jq7vRLzdL6yCCAt3TiRk7k8bfq5SS7VUCS2jnNtoEfwhcZBGP",
  "key22": "4ZBzGt6XQgJiaBWHYiGRHER4SuwfVNsaKvTHg9NEBHC6ybih5tvRSUC2iHfyvCbKSBvRJq5j9YFDWBNTyZV6LCub",
  "key23": "4K1EMnKEhhcRSogZw88VYNskkMHMrrEePYpBzA23Jsq6ojQKeo6KPRgNZrtgnsGG1VjJSbJFp7MNei5XusDKyc1d",
  "key24": "2JYDz98LA7dunV8PDnAHsTKxS93HBk6uLRCmELoH1Qk4vnCSFnSKiktbtY2cNnfB8fqmiKW78vEkq3xRmJSZacK8",
  "key25": "4gayn41zSSK6RnLXmQZLX5z33MvhtKR4hj4FcVRtKFk295evsYLauxMymiN7eXKvwm42gscRbB26QgWHACRGtdJR",
  "key26": "wk3kSdTGN69sPY9BYKuLutobKRm4MBuxPndThqkqD7a2sw1bfgdFanQ41xq4AWuKJV3wcsAHTc92W7RUf5h2WqX",
  "key27": "5q1aurKZ64iYnq1B75BYc2iGW8R1zZovfeNtXDYxorZtVJdwuv3wSahqbHEprGWrpkVaGMe5KRKU3EGHP1NEMQTA",
  "key28": "5oqjfWs5R9UXsq22WRikG6jzHLfVLBPiJQcfDHDm8fckG9GJcAdh5RZCAcfrKjJpp3mgfWBssubgSdXXNbUxBoa6",
  "key29": "4QucPYgecfNWgqQJCZaXdHhvYV1jhTcttrT72wLsPzF91AfCY4nqQbL2C7V95su78tvVxd6ufLcjMseTQpmEVwSy",
  "key30": "3aS4sm8ho1H1BR3HWRjGWG7iZXD41NntMCPodxdcCRkfe1X7AwQpuptq3Ao9t8NZbKwuXqyB9ruDZZfXfmSDYqzP",
  "key31": "4VizhTT9XQyoLUjL7RZiPQcsmAHnN9WZLXcRiwfTjs2cTaPUz3At9ZAMTs38X3euMCDP66pKhwqL1jv3Ut6o78j",
  "key32": "3QFJPWx1FCiyJBCfZzgVtZ9reCRfvSCN5xR2A6j599VN63rM3MiYoXU5tvBUyjCCiyk3xCwh5DUvy2ryu6aSzYqU",
  "key33": "ApmKfwUxkynP5wBmJCCS63pQJv627F5BPAeUBnPwWewrzHY6rhdHvZykVLACT2wah64ecbuxQvrqWbC9XN7fuTs",
  "key34": "2GKy1Zhtoxpy9iFTuSV4cPMsQvKxd9fBXxeuE1NFC5m5wN9Pjt7brCsVBY4V7ScteZSGUTT5BMxn82gyUj5Szzqr",
  "key35": "2yT6deS7QjqZSDwSvpSqBgywcCEXQA7FdzSzsDUnUn9HCNziGTrU5NFzjMnmBWJoVxYpWH8Q6CRVGdamJp5CxZCS",
  "key36": "4DXNKp6vUwPuuXEtuB2h3tJtMySjUrZtEbniJ9XKqGQsVXEcpH5HqS4Uw1Fjda27QypqUJFQ4TqCnJZCf4Lm84Hk"
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
