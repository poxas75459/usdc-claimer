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
    "5SCgEVyN3qepVCWDBxGrNPSZqNaCnhs7ybSMuoURvqZ56PewKUA5KKU1VCWFuNqKjJFHtjWH2msAm7GK5ao7U9EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YniQ65XRV26jyQjcV6iGbHW4Y24nP8L9XhAaekTUGwcd2pxFujhax5aQjboFQB1JwwqZ51ERWDhQDQ67jcbCQgE",
  "key1": "3vJrnopKcCAzGupYVrxA7trtkGhKnUN9WbTvVj84sSu1fa4qVVzAp6CNw89jgZCxEMuRN6dsKAkBHEgimjjZ84Lg",
  "key2": "2ZVtfxZ8hYapJu7TK8uewmKtuvmNWMwioWEtGpVY1J9ZuYkyxSxGp2BU6B1oFUUT9FxMFPkxW8r6qc42bDaBVF84",
  "key3": "ZpN1mw28oCXPYAmeJYeBDCpuSwpdhegSU5UU8LYCiGB4GGkXyZcArN1Bq85Qqfx6AuNqfBUJaBGDdmPT63SeGZV",
  "key4": "2Fr97bsQN6iz7svkE6PTzKwi234fvyHciZibDmqE2GxgeDTAfAo4TCHpQGAgxbkw9kqtHyeyTuKnz7XY5maXpjXM",
  "key5": "5WbxUtAbcZQDySFg8QKZ3vRzhpR3dPr8ockAkgga3NBhXm2LpK8f8Vf9E2g2oqbPCAo7p4TuXTbonsKNiwMKPGZ6",
  "key6": "27FSN1Esey5D1GURA7YXiL8kwtfdVxk5oJgK5HD3R7cr3C1z3MagYq71JPZggjrhvtt5hyQRNBeoeepv7ZN1FxF4",
  "key7": "5mHhtzR3RzZ7Aworf3tXDEm4nTyiXVYeyJchaVThErJuQVizWPbs4YBq63gZL1gJPJzqBERrSmhQ8TgWxkc62mh7",
  "key8": "4KLKhjMxCR1pcCXu3dfJjhVyHYKthYR4p4spek7FVynE96KHXesBoxBZhPvMAiaR95EsqePBrwquByENCWBBSqU1",
  "key9": "4o5Ck8me1HB4TQoYL9VWbB5WsqMxdmtmXcZ2mF78tZUmGb3m8EsDz3EWNYgUGeM5ReT9oPbHXu6Jwv3bzF6ifZQp",
  "key10": "3H5xpB7K5fJqi6NnmNs3jVftThH5RRd29VuSDJ1zjSkk9SHkPe7hN2e5AH4XQoiAQkUfgpmGhXasKBpybxTJBhRV",
  "key11": "3Es7DPrZAD9JvKebMqfSku48WzK4rD6wtFBs52FuQ4WmmVnnNspLfEGw5KRC9rd5humMyABiauGocxTwHnrohSac",
  "key12": "35jbyrjG3PwsB6j3edPRX8yfoaVaHdwod1sNLapyD4y83XNCbrvd1YMgNyd7Sj18b2NJGRwkkyHj42mEFmwxWA7M",
  "key13": "QLerZFqUTUfLPUKN6gA8pvhZu812fTBVHFQQGTUnkaFK624rdfGwHfsS5a9QSqTVzspix7rEgT5HgdxWHPASgpX",
  "key14": "5aMDA7zvka8J3rNLJg5ya8fvgahgL288XVb8aVJT9cvnBns4EPVLHmSvmzxNFkRfdz3W72Xxa8c1jkSFjV9RgU71",
  "key15": "5HjoGSRJn9JnKs4TYszeioNzokSHqfTpbEvjWSGSY4n3eJQq8mXZNZYLGQC1JpyAenmKV2e4AdJuurv4h89riLRQ",
  "key16": "5aox8XjaobtRFMf3cpuAaR5YsqsxvTUupCUQtjfhaBhi4L6VtwB8tPwU2n5icywNh2uozp1oiiZG1nZkPyAMo55f",
  "key17": "2idHCUeamxhHeGyJ3D4M5xn9e2krUfFuZ4fgcGMkUW9bDQ232fk9qU41F9nFFdAuuaviLPX651FVzUqNHeJQxyk1",
  "key18": "3JZ5qbWdTHb7xentZZhCc76eozuqV7F2hV37aPxdMKh9UhdqnnT1gJXG8bv5QqHU7KQvH15vSBWdQLK2njWJnbRX",
  "key19": "mZxk22kHMU2MPamJJjxhZ9BY44iBBu82bZNSM1ty4PT9z9ZYZYwLQ5RBrxY57qARJSw7wnBasxAVuWw1kGTVEqj",
  "key20": "2Rgws6yVDGwkM7B6osPJzkoMoGn9C3jrbVWJnaAsoAA9qr3JLexwHC85azaHXZxtYo6hKRxSCT7qy97z4hW8gWP9",
  "key21": "4BvaxkAhm4iPnR941ZM6p19Gyn6ZVJLJZ9PpqkGCYk1bG4dfj1qomeXrGEmKQ5y94JG1upbRhn5FFc2R1Bojpppa",
  "key22": "5DTpg81QMXAi9T94snFUhgxBF7jcjo7bT4SDhYamZV8LjoQnm1SNRG9fBM3n1FWhRsstmJdKXuFaRS7fyesDHBx2",
  "key23": "3todcsnr8HbJGJqb4oF5MW4voacxqbuyQKzkhs6fBZrq9Mb7R3v7SJ2H16QJWaxpGinwB1E13gzQ2HwZGdZVJNAy",
  "key24": "267AURQV6d5KZKkEMxBNurTHEU7LHHChq3FSwdtxnHpYqoC3FY7gR4C77youKB353vQhxhnisiQZGQEjDPMBQQaB",
  "key25": "2K7kjzTiW9eYouhqTS8QonPL56y2eVNobwwDCGQoWGVV1VBaEkN66YbwDtBafEzvKBLGMNyPa3a1Lz5wgsZmHZbz",
  "key26": "3iTtNZGDkZ6H9duTdfmGmJYYnFwc8gi3T5FNNZse5i3cXx2d4SfFssP5hsTzhgGjWbwP3ypADabSt7TJ9TTYyCgG",
  "key27": "5RyJwn8ZvR1HX6aZme74cSR5U7vT8N3uHUpWQ9vj2NjRtMKWyuRTCnt1Rf1LWDtggkjqrET1Xm2bHvH2VpF4r5Ka",
  "key28": "4m8xcSLMSVVVxtRce7YXq25mhSnVkueDxHYEpXBBePodC5HS2T1a5aFDziKYaXXszjwi9fqAkp9r4q9mXvog4Gci",
  "key29": "2zWzeHasJ7KpPGLNNPtuz6PXZEG5pGCLdrPTKeSgVgZZJB3dGNDFiokhgp1T8cNzBwWuTFwDeudKHJ157MaruBZK",
  "key30": "2fQktdLj6MTmi534Ye4ijaN9pRmEYz7uGLXo8PDASHvb5Wk2rdYSJZc5BrUog5qtP1BCv9dUWYJ9W1gJpS5umCnG",
  "key31": "2Kcpb29yXVULgYT8og3EFEpXFnXpwVKnqaQQjEayLnwQHos2W2XrD9pk6XrjB5txf8cxEAjYqS7oedFB3zUKsBjP",
  "key32": "4uepRayb3g7SGhrCVwV45EHv5ede8XRAzVE3FekokzPDPcknZoMiUpLE8hmPqsLWsehP5WX2sdiJfK7TkEk9vw16"
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
