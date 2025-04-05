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
    "3T9aYxdMXdMCSJpoEqzAjfEJYKACCJ1Lq2Q4DAhHAbzBwrd7SqpgYF8NinEfi3XHmSEUmpsb3fps9dxY2vFSTZFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P1sDe2bsUSwXhtQdH4c3hD8hTpHPwTDi1FjNx1V8Gv518ruJXDWZNvDPphmkoEoDxvFf3Ap9pmmp64AKz8GYMr",
  "key1": "3dvXQRUWGJJd4UEAy5GLPE1JQyoLTzm8PyDvKmLyRLp6uwNTWdUtkHTHh1asjBVZrm9WNXTeUTF1Fvaz4BThPmFg",
  "key2": "2bYm5YsJ2nSEQoUCaauiYySqJjpvAE3WBc7Jin2Ue65kVBuqBr8iaagKJctP48uY2YFRuFbPtXLFNiyZpSaqhrMs",
  "key3": "5Yj4qLf5SmESjD2xsYoPxEHMCSqWruxdRLXRLZi9LQfmRsMBRBsETCEdMEWhSpdXpuyVfvX9u1jQ7LmBCPkVd1C8",
  "key4": "g96ZvjeB2RGPvjUf6Ecy4rBmDy4or9Lv56rZMrZCSuW1VWVvXrmbQDATpF5J1y9J2ACbjUXy216SVHEdTrwpS4J",
  "key5": "5pNc3Vq1KFXPU8S41f7GdvMCYHLTwbxVea4HkcoPX92XgdhQbmm6FEDfTL36DU9xztjAzjJcHjVLbvgF2WF1MVPx",
  "key6": "nq837eXd4Sk1t23oYCoGPrht73YBon14WVdJVnnBWXTTFRnNXHXgCw4jj3fDVR5xtXYz5uKKxnrdiwzrf6gyXjQ",
  "key7": "39P1zyGwSgkTAVrS1pCMand6ARGDuBwFu7EZM2TkrfcgG8Y2JakRQ7rpWioRGy3ToxU8fmi8pgz3SfJgKq7dHpo2",
  "key8": "2qxRm8YcPYJcRU5Y4bWgt7k7ppV6AZbPEVZ9RuuET7EqBu4fL4aj3qevCDnDsc6YnGZaLnWuKtT9sYB1C1vNqV4K",
  "key9": "67QhHNJQtrTCvupa6sCr2A4XZe4qwT4mQ31o1TTvHg5JLjwNEnGaHwawj2a9J7cBg5oRLPiydsP6sEVzc2eNkvgx",
  "key10": "AbsMcSKfpvq18kzcQ3kmjDhMppdjvqC1cDgpjEYGXUg8w83z9okiw6oNaqTavbi7zKUrpGkke3dJBBfUbNh6vaQ",
  "key11": "4HB8HLH4DpYS63DU8kXFCJGg6n4LhyutGotEoSFWR6Tbye7abPAnjtPhdccyzQBXhCMKzveWGgqjSeU3ZRPW6GJK",
  "key12": "KwiY7z6yqRiXGzdz13MGp4zjWMpwUQneWkAk3bruQzJC1qEC4mtfZPVDXeDTAUEa1912CABt6stXd6uFXWSJTWV",
  "key13": "iDE8ZdC3DEhJLz7vkQdrXtFFxeR1aCczEVJYozSPNbax4GU5N3VxWXeusbaxuJkFvdtRxPaBNaifMuMdgYMb7bM",
  "key14": "4oTAXQr3x1m5FPgSFEkmbYKxqgNjG4K5ZfxFCS8NiW5dQps6ihgE7DeQDTnR7iErydc9MC3kGuipH6yXRCfkBkgA",
  "key15": "4sMBeK2XmRj8wKPqbKMWXjczHEoEpQsypGihLvPiET18RGsGXSBbjC8MqM4snzJCqkiX7oZRn6BTp99EUeFfNAZs",
  "key16": "2mWHRfxbmghf4fXFftQhWEdvE2cSwLnZ9679Zi121hvUXxG1gVcwjjh6w1VbAArY2WxwddnCGX1g54pczABLn1vc",
  "key17": "2aqKsTAp8ounZ2fgSRU79FvUJEKTmhcDDffPba4YfjyjrDUAq7UFRPsFuSmsSn2ZnrnFp2JRvDHEbBXgyNA9ytie",
  "key18": "4aAVxaZUFfQMxnH38adruiKJWGn2EZ6A2Kwpa6tyiG3KpgbaTvqh9v4d2q1Bhpuz5jzUdBR583bioc3q12Bqzv1X",
  "key19": "2A3dkYjUzbjVDyfUSizF3DcCGzQ7NdU4aJM4b32T3AkGZghtJvAvMeuLv2JQxDGMZGyhv4EpGwh4LXPSP892MsM6",
  "key20": "6gAcMNCKPR3bsFKj8CoMaXm6uYUfbwk2suefhyFJFH2CygC9hP1Vu9a9TEc88Wsgp4qXNEzi9mnbbUpGyHhPyoS",
  "key21": "2GhH9Z48bz1VT3BtFJsmTqovHWuqdhGgbn4y53YXPMk6yFWstChDJ5C1nW6AFrjGhftq94gKmYiGy8XbuCMrHgPD",
  "key22": "5igbbfAAq9q1UzJkhWJYnL1VaWeKRZkaXkFZveQuEF1Wpc9WtijwvMXFBnnQ4uPXAKdnNGy8Z1Wzdupr67JUkyBv",
  "key23": "2v1ZhUkLmYY8JWD9fQ8hMd5PSgbynYbX3WXvFByfHfUC2tG3FMjAEmAfHeQMSYk3KZStxkLShPUJXu2FwWow37Vd",
  "key24": "4XSYwPvUj27daLCEW7DrVJypMqbZBCoXHtmDHvMvxRTHtK8Rmp1prcz6b2ahkpETB2JbZQ8Ex3ei13WnZ2qxgvu8",
  "key25": "3ZgLTPdayrqZwM2PC7GghUZaJNRn56kiYCFR2pyBNxHtgNkMDAiJqLRebPPJLzmXAhZJp2tvbLkxAyZarcwPw5pv",
  "key26": "DqqRpDHD7dayPzTVmpioruvExWcvZKwPLApPbZj1YHtPrZ9FVoSqVSvTtkogbQue77wA1UUChEnarmyPQqcw6fZ",
  "key27": "3Z3EVhKwkDoV565aq4t4G23yQmCVBYkqaRh4bwNttPYfRjQy9UXJwfVUrXYdVwaAmgnMvVeSiYmUiZXKtVk3SS6s",
  "key28": "amQiESHNmJQPQjWhK8LphwVDeKsLmCetQMJFUrheZgudPUVjzJ7P2zQFrz2W34koygfJGX2q13HDHH9MURzihfK",
  "key29": "25S3RpzwPontWtAnWeQnQysyJtsgcCDTViPqp8zK7BQzbquCjn5dTzQ3vgs4gAjpcmVxLLkAmcMmx1nwt58G8Kpb",
  "key30": "4k2o2pHL66EwVsCWAE98Knfq3mXe8L1xBZm2XMocXvfNo27JVffQA5c3L1XBx1LsvVZJjTndoMANTN1oBQ2MTqm3",
  "key31": "ji9YyDx8hynWnXSKnQb1jAatkyoKr9QRZTQy71LpJutQy77PMEmUNxfymTyz4CmDQYRNmCgEVxqAKgufUym142p",
  "key32": "TiukP5Nzt4EDNRYs2nU6yjHeFEHRuXN6Yy16K9uLSPqdeBE4HtiUjJq4WY86R2C6E5CEbfrKGDChQMf7nZak6Xt",
  "key33": "iLmkA6XPFbage5aaxSx6CUnRjhKMLHvG3TaDRXGrSGMNxwXq3DAL6Pn266p8FpNKYUWsDXNfjUCxK4ZaWTKcekh"
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
