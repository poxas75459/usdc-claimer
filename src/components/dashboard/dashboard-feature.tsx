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
    "4BWAmf9wUoSXbM3n6D5LsvSafUZSdgn4HRhxLCBntbL5132YgbocMmJQRSKU5bs2En6uNdbhDvqngd3s9T8wW3Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c6W178gb5rRvKtbV8Y5Wwx6anJtAcArPCSLTSCFhuRX2n8EhkzgJYi9PwZgnaMNeJEQTFtRLuw6seTQ8uYRpiYS",
  "key1": "XeEqpGWwjkh4cTQq3Ut3CsfJU2tCfE5687QACzbGs75zqhjJnJNvJAux78FMb1HP2ypV7tkwQVpGko8UYipYBrS",
  "key2": "4bkAz9qTga9GdCY4LEaQf7NxJkyDeYddtdXanHyDUy1TQAMhoXA4TF3Fnh4jZPF74xgVqEPoQ5P7nSukVYfG1iMR",
  "key3": "5St7Xf8SjhgVjVuJqyBwieBmcJtZXfekUMeRhzt6etsVm55RLXSG3ksHxK4HFKNM7CMisiuMyMWHpjthBNSj3zza",
  "key4": "3Y9wtywu6kMNEHZ7MLcA4zWt3dKscwpYUFEdokdYkGTudTXxK85QweuQYv2dpJQ8iGoDcpiooVZ21oRXLZUhTGQa",
  "key5": "3FmXZr3GEXTz9A6FMpQ9qfdrCnGwPVozTRiMyDKdWqvKXX1MdgPJvemCMBLHVe1crSiBHuadd6h8SoSYLokBZwqq",
  "key6": "4WASgTixKzMb4YLGMZN8g2dpAQFL1YpW8Vu6tD3K2C7BonAAXyMmbPq2xS7WHKr4gzSv1PUriA8eRQVpStnXHXGR",
  "key7": "NHDHUHNqAVxBDgnsEWbvNC1P686sRY7HxzMEB5jzz51zhVBzmZ2vWnrywxGk1TZB95BPwTheEVtKsaNU6xp1NpH",
  "key8": "5et8v8m3i6chxMNFcmvN4jg5oGR4hTBMjjSVFvQDBFrW4Js5rphiu5PEk7jfm6LrksKkAh6J5fXsJkAjYQ8JGALS",
  "key9": "41tfyBa4DZSKXz7UT8Tzc9aqxzr1X2rh8zq3mK1MSBPPQDC9M8tRsavenxfA38Rk9RSaUpAxAWedVPhRtR3bxNgK",
  "key10": "3sY9rtSgjhCWGcFzTe5EmSughEK96W9aPZSWJ8esry4wehhG52X7WDkDHN8vQJCN5mMtb5bs1BoD3TovNJhDtDAq",
  "key11": "5pyeqHgmzuaYNBMYjc4UDWXPRfqfRghyw1xe6zvKUeNNZMV2TmWnwuPNxSxeM37sMrgTXzandnVTfJwQfNNpgH32",
  "key12": "4EgZQVeSTyGvZfZG3gCnvyvWT2iBumjMqTd8G3HWGUSh8nTPyQDx8FafvwSNrwTWspjhqJbcVkxgaSgpXJW11wu4",
  "key13": "rru7ikrTwwBxC7p1etTxZhMpAytYFCriCcQpxV5oXcwz5qFxvpYWLE33yCme4tzorwer642adQ2uySzeJCyCH2q",
  "key14": "3NXYiXa87h6VtGUVqGG5KLEPUrFtcLBE7wqQuN9zoMvTGxLnRsMuihaPPzoh8qVQuJVtmAyoCuJcGSFFbiirPVsp",
  "key15": "3fHHXHjguuoyK77NkKuSWTphU1xwPRRt29WsusgnW8SxQ6tvnnKzURi5XVSPvRpwnoLpHXtThuDyK51tf4cpbSCe",
  "key16": "5XgPHKgPuZL9XnorND59cCz8FmxQGYb8bADR73hHCxwJuTmWNBwvqSKN1GEv33wvSQKBqNhe21R71ytDDeE26x1y",
  "key17": "3zpELGSHEaFpEfCXRoRUmULFH7jeBTbLvRU3YL7rsyW1fQv7fu2VZ2TsiXg9MXPPrBmAxc4FhNvD9Dmo2YeNTPTp",
  "key18": "4jeZELsr3UGhYTop7unGBbMbhK6eX4ZgBJ1qx7ofXDYvCNZkKHeqfttrWfdLgaBQJ1iEKNDoJXJarT2ZbEoRpf2k",
  "key19": "3t1vMRTiFSJgC8KRBCyeR5BL4GhwPsiP9H47sLbHwkwX8arUwJUj6jBbUPhWgrBNUcM8Bkruj6gLc3xTGkyQdNvd",
  "key20": "454zpTHxfyRGAzZDB6LsvrKURTfKaTQJFpm81urTaywH5cLEQngeiwF7cJVUf597EbJsW7zxhECGQdaKrJabKp17",
  "key21": "uB9Hxi2gGVPFb1m7aUpxnxPqr7bJuoLHcVLT1NWH2TzCoP6EvJTh7TMUxfBVWweznQ8henqHBsGgRywhdAFuram",
  "key22": "59L28UHZcs64SFRauGg7jybvukGU2Zn4CrEoeYzy3WE46umnPtUScbPsJKUXxUJenJ51T6xkGkYaREMvewgBf1B6",
  "key23": "YHC6N7kHu1kg6BgwZcAP3pg4JQRbqp9WsUoyHpU6TFj85YNbXr3WXhKDq5KQpSJ9w2RTb8iGTiZhhCrso7W2BsU",
  "key24": "51NRVnAQsuoSUhajXyCNNU7jn4zNqVccP442epZXax95jBEym6qGieF325RqNegtGhsvqDcFxTV9LfFKqyM2BL6o",
  "key25": "2toMZQ6d4KduqLNoWxD79q2bHG2im2RHNY9dHW7iibGi6b8gQZeuUQ6yz9x9WjMK8BUsVgDLtafo9VkSngsQpbeT",
  "key26": "2f2mMQAogjG41VJzULzRYkkdHNW5oWSydQGSNZKTqBcx6hS61WAA7BuvAtFkrTAHqH2aKVjxzQDWx4iHt2jMphsE",
  "key27": "3cXjuwTk3tnjC6RDFNkFso8TkWT6L7ZqfdfDPmN2wMwzbNdDCVap5ok23q7BwJpxLpaP1kvGHW9jRCFnsgddKurC",
  "key28": "4t9gex37UfoqyK1UnTbyTSM8Any23CV7PUK6NBh2zComCWwm2p3Bvv1qy7ugfWvwzLWbvcj4RJTD5WHyx5o9XeRe",
  "key29": "619Lq2MoUhkW7pjwJWftFVWgQsuPDWyft65ujzk4LaNs4nAR4YhK7Uy3t1StTUYXCa9epS7X59f2saCfDTLeX3C8",
  "key30": "3WdvsXgyWnY7juhMznFJRjidXwYQJHo6BYTg1aCbmVoCXjVjhXfb5Z5QnzJhvydDXL2XzSwmYdgjx411MbX4Jrzf",
  "key31": "2c9ooSahCZLeU4JstHDADF85bwnDwAKprNPe4hpiKM9GkqU9WXH2gNtkbkdu6vr7fVFf1LgqssYHYcxK34Q7K5cs",
  "key32": "DEJLcvCbL9SnoLTrVAkdS6urpgkiQZGY5PXcw4VyMykReZ4nSiWYZnyRe9bVjHWcU5WFzR49N4vW9tysh5JuLxx",
  "key33": "67Y279sdPqLiKKV3sqJecfVEU3k25R9aq9g4Cmz5Xcc4vKW8w1K75P3b5N4tCU5AgigJ3zdZytxV6hU57c6DyiwU",
  "key34": "5y4PsbgStSR9yRNLSZJjfG83Y28VCP4ARk5LkmZEdfdURCJXRxA3m4oJW8cU3RgadgW4D879yRDx56YjCyt4n6zm",
  "key35": "WsChX2rf1JfjA3eE9GauKAp4ATPPXeDozFv3gw487Qe6wDQ4rMEMYDf6xtUNTREboMmwTKtkeZySzcx9vqhtUfH",
  "key36": "3ycGVTtGr7SZ9u7Qrf58cThbr1Bg9cMidx1y1gLBfBEZparernEwXZQBgPENNZdm23QAR5JERSDR6JdUAp6qxuAm"
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
