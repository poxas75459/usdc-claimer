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
    "4V1srR2EaN8n7rTx9VxQT3os6JpsMR6UXCDhNCTpC95nwhDZHTztFHHDNc4KN2L2ExfhXKQsVUCQS3SYTtwHEFLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "554PAdDig6DRnsarRpEj16fQ2YLZpG6KHL17Aqsz1Kh9v5XzmVrPRrHabrdP8QRghkWXJhzNVCDCtWgFLeyLpFQc",
  "key1": "3H6UeD6aH45fXxk9y1mvEVWEUpJNksa8ABbMEeUYc3nyw8Md8G325HaABnoMRdUpUwJmK4tchHt5GAx81btBosA6",
  "key2": "ffNoHCqaJZPGEvdfF1G9FfNEHoh3xrNk4iF2uY4n33aZ4AoNijQ3ydRDaYzcEKJWp5wfc2CR1SpFcAgrB7cMvnv",
  "key3": "22uduFfsHm9rSJRuWVcuSRxcjFQ8NXo5uAoeEbwTtb74AX1DYqPCUe1nosLbakqy1FxXtVXn2q5vQ7Mkmpu2F7aN",
  "key4": "syEvPSZec6B1RHSRzkiwDQbQNgmyv8CjtNZMLTqA1BvdHJU1pihvJzPNC7Hmzn3dHG253WC3bEL4w99VsjTgLhi",
  "key5": "5BdZNLu4Ge169MrLHcq16R6evDsUEkkGoU9S4RMQ9Srr4xKE4WPjDp5UaccmDgnryYc36HvnR16cJ7vn8ChFZcgH",
  "key6": "327AX5sFdCp6fqunWWpzASejsxt3ap8MyH3VhHV2pzjWZzv7D8MNHzRUWT4VMStKy9tc6SysnmFW4BxWiCaRDDL4",
  "key7": "4XBjzd83aXRTLsPwboyj1pe9ZL5TicJjYEqWV2x5UeDdZLT5r12Tzx27fWLhZiHhBmA5Tp7nTUGLUAtiFLX9JosU",
  "key8": "4aTsdqQQr3MAWnPSjDqzDzcbZTbHTrq3JxvAMwRVVAiz6dBzrNLeKvGF2KGaFj1FGyhgWPipukGrhjNKAXFWweXN",
  "key9": "48ZyFt8D38UGKRhejw8RLkT4cct4xn1S57L3XKxFzAJKCdACntbms2nuP3wGe9SwpXdWH1CG7mhiYtBLAZUs7qxv",
  "key10": "3zCXb8zAMuYLqDqHfg4ptAXVb6xtvJoDbuXWaY3BeK8ULtMMeXj5EZjTCm6tDWjeYMycW9ybhSogpzQbfsHz6iUy",
  "key11": "2AXAf5kfhBwqTChTbpgfAkYF9HGNJZBUexXAJYvKP5h7YtjeS31WtMCcUL1yBmYaWGJdcSk31NdQpVL3ZiUrN7j4",
  "key12": "1b2TL1wKmXgkT5n2yDaHMQmE7SKjD9fbKfXd25xNej2BCNZxLenfPXU9E4z3tys2H3YGh7Q1WgzmXCc9hGxmfRt",
  "key13": "5bJ7n2uiTmESStXdodFYdLbzUJ2uqzkAiZkjwJmGzhhxyDFZPCgaojG2aHpUXX7xtQAAXcFwtJvFA482YJcu87YE",
  "key14": "5D1T1mvESf8AEtzqyrXyZYGdUHscjZEodw1LnpLL8TfEeN4uBCqJUBmkfRjbwzhv1QpuW7uy3egCuqPSqE8pKAnF",
  "key15": "x7ZqeLLMq9NVJu4UECppg7BVfjgpdwNftq4UJ2pZbhLrb9vL3GSyECT8QLNYsQDid6MzZrttZY5i6WCBtuzxCTh",
  "key16": "2TEqXs1ZhoDJhKrcXVwU4215KrF8PEEoMYCNeLNsGK1WiQSP1MrHdx9JmExSX13o2Cd5o6TvZm8LX37ERj9XZbzm",
  "key17": "gk1e4312hyT56qRQdajiaDdQmTaqJmkP777MrL1b33S8YBvR9ugCCFYgUzcx9yJ3gE66QHheMe5g8718dEzg41N",
  "key18": "huzfxG8vikiNbLqg9mthjJ493s8L8fFqo5a75yP4CW2R1hcwcxMULTrnxAwgXv4TKUUjRyUxQogBwhTxx6WU41N",
  "key19": "2e4X78wfNFYRrF6vRnER3vYPxNX7Lu981rPhgKUSw8wqdecaxUP7jUwqE4F5KrH8gwLZw1o4z6hZG8sFSrnUhk5W",
  "key20": "33ygUncW43hxiDrzHPLbX2HimtsnyPv4YPUN7VMh9MFRugeA4ops8RCk1hmtd4gK5ZAFsddMNdkTaKm1eAccZZPU",
  "key21": "7EfjCv9LpqHvSNcL1SvSUHS74sZ6TForRRtSXNEBPRnTvhcUu2my9YrEQu8tKhKgcV5xF7HiZFpohsDBZ7vQX1L",
  "key22": "4kBdoN6KDbw5pBZZVsvJ6uCuHCdP5wY4wG9VmqW4fc1zaARzJqgyuWMVd45oocMabPg7LFy4UUJm1UbjsnALC1o7",
  "key23": "2YwiEAy9ARk3yU2FXn7oBns2usvEMdhc2P9te1zzvDRtfyAYxnrtWBBCxUuKPNwd5pYb3enYZF6wkAV6CNMVYsE",
  "key24": "pf5m2Fq6HmqrjfmB8RbrfmBbpat34u84RV9rwqaZNPFnSnqFuZinVBCZU7fhNXQkBURkGHjwBA7PtNUQPLJWXTP",
  "key25": "1Bjn3pbyNL5dwWvcJusmLBsLDMEgMuQVD6tRAd6VWmDtve4TTwsUHNS6HZbkSCyktxjVBxsXwJqJ5cB1YMgtFa4",
  "key26": "5j9M8fSEgoYXJiZUHV7K1ieASZrvRa4VtjSUsXX18nghJ59U6iAyGQ1UWWADDQ5sLr9Qhwo82kjrd8bn9tKX57mP",
  "key27": "Gs7FvnkzKDXRxJY95MsrNXJpYaNLSNeQ2yiY7de1hx8Sv8qMU69kBdcD9Qyd3vG9LRE2bqEAXFpvVzMgUxLCmgn",
  "key28": "3duKsbYqeZ3nShKJNfytn7rANNhLfdLkcMrCBfZaUTaJXqH8bzBkKvhzUfbYsA8xESvWfozRfzHZus6XthdwKfbx",
  "key29": "2vxojyZT5u7fJJ7E41rihJwmmQRa8xaPsZauurxchthsj4iRgSMUCAMTL9qKzpeYeC6ozMxrx9bmqu2JaAxe142N",
  "key30": "5U4jujXUeT1KY3Aqr9LQ9M6iaDETgkWTaxwUbmrdpXEbD7D7scsn3h6GXVdQdSGXcNsoZYegKgJPpd7VzjpuKDYt",
  "key31": "5C8kcEdT8eguM8oHK61Uug7NMjfMeSSybTAUfGNYskRt523sFAaW4HXH2hbrV5jKNCLUAzEhXAQTEF3UdPZVhGmK",
  "key32": "2nNchB4R9jF8skP9q1wdLhrGvS3VnfU3K8jkQ6trz6VrjP5TyZ21rToidpbAVC7PURTgjA7HpBwXdmY1fqzJDwYi",
  "key33": "214ir6ZzVVAMMvGuo8rA2DSoRLwS9bDBTqHmEtJZZUY3EdoFD8KPTLwPDqD9jEc6m2dY3wPoEWnov7rUEf4qW2w7",
  "key34": "41Qjvj5Qq7XAygV7s3hrzm7ST9AHzb5TanK7vTffrSJzEPHnsgfteWPLjzTzHSEzhhjsCn8UBdHxeeWY5nA6Tx48",
  "key35": "3tEoh2H1hpWhb5mZmKxj4vgUB9FqirrnSshWHAbLvutaMhVJNtAwRECuuyPD5fePtdnw4CZKnJSAQuD32SoRfM4b",
  "key36": "2uw5Di4azNRrqCYSo2EDwUtTowUjKgKV1XUiYYx1Z65Sbqhrv2xs7qKHhbL5bjyw9zxCyyLLEXVCEbtZdFvpp7qr",
  "key37": "5hUrWMyCGe4edKXuQYKEyeapu6YY7ArrXGqZinECqBj1u2ur2f6HRdtRoQiJXQKRmsdUvfSYhwLTB8mbT87QM4Hh"
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
