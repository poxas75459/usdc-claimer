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
    "62b2S4BgKd9Kmci1HFa85y2h8TMT4ymiYTAN7EBs6nfKGMfz7bjNYZqyLwG8fa7yXspVHGWkeMj2WTR7vpPtR5rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQcKxqUNHZ5ace96ESzyBtVj7ZZKMhC45Uuh979kv4CLVHv4UqQvkCYTnZRbuwPApj3PdAk9AMgnFsrQmTE7Cxv",
  "key1": "4eyYfDUcETCKxaS7ay3sVvF7U5fqscKZuKgnCeivGcpHQQkWfzWZPk7WmqC9F7NPyeUMphfeakEAL1k5FcQT3ive",
  "key2": "5VFMxckv4DLesHMnesJq5LtRV9GftRVUdWMNAsGSMkf3bNko4EzscbnjX4fT3on53chRrA6EL7M7kSFF4MzL63bW",
  "key3": "2pHwKzQLfJZwXR6nrrnEGuMbX7Fa4r8fTmcZgHKdE3cHpboU1YqnmVvsXU4aijb4PE7DX8ooLPFbqTNqp1DZ4Wjz",
  "key4": "5cQGfet9fgKwdFURyyFFy5TyhMc7GkxkG9X4qD14ZPrECermhPa9Qwv5jzpKjk6eRJ4tkB837v9xX2sSpLGxoQAo",
  "key5": "2GagL52Ay8B6j8x6oyZLEZjdnWDQKnxAUsQa6wfFY31d4vJ5fFMt3JfSS6375nGwoNYC5HTrCfU7NCh6dMPy1imX",
  "key6": "uikUjrsX9kJ3axhtFSneftm78zj9LiAfndTpFwpjrjT44UdoHdAtmr6H3QTSm7p6UL9FTTYF4fbMgTjAWZF9q5a",
  "key7": "5kY2PEMqgdy1w1VrG3dSMcmzwVvXv1wszrzag6gSFNQ2E5kGznHgJnjoNA1Jdnfe6vFQcRyqvD3pyyYy65Txp7CB",
  "key8": "2VDamaMde8Gi5WueG9SDL7UEWHCoYW1EFBEpUwxMyVTT2sQGiAMwGJKAHvTcBzbSSz8RHpBMbCrSjozLRU6p5KfY",
  "key9": "4ukbxa7237hpnXvGQeoKhi93b8xEmx6uzGHJNP7m8E5E1PKmnhikgiKMRZ7aUDFrbNyVBUTQNy6spmQR2pJiUoje",
  "key10": "4CpL1fa76fH42J91w9L5VWG9ktXTeEJBn48BYKkf6B4XJGNQHXc8hAD7aFBR5Go1eVdEQHtset6b9NLLeDBMxSs7",
  "key11": "3VBnJvRBevccdNfG8K8ccs4zsBGh78MVVgCAEEEoCN1p8kSwqiD8egzBrKZy6uSNNqNTm2worjiZAQpFwhKUkLBd",
  "key12": "43EP5ZuVAiCcMVnUXAi4bsBCooLJiTENBBUrcxXL9SrFKw7ovTND8uvgxJykNP89aRaYcawpTCsBv1guuDG2K6pa",
  "key13": "3BXG7bB4KFZsHHX2HjYUtoWGdcG43UFHggap5RLVePLp38sX9aoCZU1dgb218RLyf26dvuwiz2pDkcEATsaJvwe3",
  "key14": "HoBj7tnUzYUgjvYeKj7yf6sTM4qb1ubbFEv3QoGrPLUiC2dTjYiMjnCg1CwFS7pQGMRLx3BFBHcKckJPyKyMVXV",
  "key15": "3VwJvu5iH3cGvDZ4jJS3Lt8kF24NKvjGsZtnM5cA4rh2any9K4xnzMicnTtQyxhouHHWd3vMartpxhAF11bSuigd",
  "key16": "5c2fsFWsEJgzo92ZipTcxWDnJk5pZoRPLaTdjHK6qZ117pUNqN5z924qmtEoK3diPwU3U569GSENe4RxDZTQnA7z",
  "key17": "2ihWTt6YLmSM8dFbeTknXMiaTWYf7h5WDUfzS6t3qDMjEH8QwtCBNuZ9r3axJxShbqfKsnYHRtAdmDnZKoP9jBDi",
  "key18": "iHFxYmy1ooy4cCMTpiitAXy54xF8mwW5Zg4LALqRi2zYZS168df3SrJLyvKYo8fNrLhycVrNww7psMgdTBh8EB9",
  "key19": "2BnpvR1XFswhCDBJkVYN2XQoWMNfTiTU2up5C7Sbea1fsMGc2bR9wxpR73AStcK4MiHMca3DM5oDwGgPBCS8WDJ4",
  "key20": "2XY6B5iUVC3MHhvWpoDAa7miTPARivoyZfrfJtEJ8fKfh1GYyWF3UimmZojuW3f6jZWpXvSYmi4VcEc217houDgg",
  "key21": "3jEM5UMUsnN1U4Dno6hswXxvRexD3b8fzbNNtmFoXTL4rT21ox1X1qaBKM6Thz46d3JJxgHsD62irCE7H4SsyBo4",
  "key22": "4jKTCQrLW6wjdd3ouB5dmSL6ybWbHzKhiEr1nUhUJydEZmS4LJU3DPWnNgLcKeHYAVpPLYzJe2NrEPuibddz6ZMf",
  "key23": "qDsxekpzhedc9PRmvhJyf4F31VYbUGy7YGNf6MWBvqBJeoen5KCfmftBkYpYhJ38A8jEndM1aCtdikmVN9h3sxZ",
  "key24": "3pxdg4Zp9WbyjfurCPHsyiCbA4J5mU3L5Aj9Xh3Pe72pPuK2WxFmA7KSdYy4CMnsTzcz9HcoDXPuAutCqique9k6",
  "key25": "5jLB8QDQBe189pWXkqPLMo2iP8W3PUQ4jZr7nGzLA8Q9kzDTcadvvCapRyNddkLdzQNYBdezhYtSrmTp9baHKm5N",
  "key26": "dJ26bMVqEJPmoqyM9bkTJZjr4QmnHiexEs8srKUv5MEniWGAS79pQydLom4RH4FXqsFRDGUYE6rpB1QhddkyaHD",
  "key27": "2ZPpWT9RPcxh9Q7ip6wGJ67AsbTwxyeVZMBx4EsDwuXeFdbrUn7DcoarTXn7G2EFMJubFgtR2Wr5RJ6hhAGy2aPo"
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
