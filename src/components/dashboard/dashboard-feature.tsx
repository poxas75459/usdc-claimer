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
    "4vk26kjFk8UJJdXUxdj44vrRjzpMU3AaNsHBFNcEXa35F4oeQuKtKh2AVNp7zhQ5jEdmzgBAUBfiaA8oVhWRLyi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37c4B53j7bHYVErUZ2KmTAi3SzGuv6jJZDbFgsSu1rJm9V2gqj6KunNqgW43miXgczoPzqyaikF8oHeG44TDQPg2",
  "key1": "2GQe9uBjiaYiRdjoDDFhvtRcjvLNbaMX54Gv6RikVD1q4XB96wMbBfHzyAcovHipNq3F8ZtbT5EZEe21pWFbXyu3",
  "key2": "4ZfefXR9J5pWM58SQosZFN3s9hmXd5DFWPC3JxDJ3vsJhNVZT6mfLVbyvMKYGFhtf8BPwsNC1xonfStT75cpkgN5",
  "key3": "2cvbbT2veTfvVHbMQNTktKgcrrNGVUo2fQ2xyoXw59Hq6hGe5LWsAkcRXtyWpcLEiKbXN29Mzq5MEo4D3Rknf7Wt",
  "key4": "3UqR8Wzk19QeCMPp4u2JZac3SwC5GN75QrvzSNqHCT1pbFnHioABwzQNJh7zEbjSG3aEEe56xYK4vrMVEJtnrfpv",
  "key5": "2ZbFtJPYnJmB1JauC6Napq4QZUVrb7eZDPidmBokQp7gJwnrz7mJhrQrmSZrN5GJzn34cqED1GX44WTww7gE4XnL",
  "key6": "3jj8VERNcpZc9RGiXhgKka2A559cFwY2dXgr81QgWYRnvmjFig2HCRGNqCAjh5T7KQXQiZCCgRxVHDYyW99JS2rq",
  "key7": "tHZi4N44RNjHTngFaaCQYN16FMARNW5aiPxcFjeSBxJCjtkBq55Tedf7azUVtiqid5vXsohqVhPXo7EzCDGCKX7",
  "key8": "FrWKKqsg2aqki3LY8EJJWpD7zYqVKT8zm8BmfV6mMgw3cPSrmRyvfMJuA8G9pJrTF7ma3spRfa26CJrBpWT6du7",
  "key9": "2deTy4sgQPoshMYCpWxGaKiUXHVY1oZg4ddEgj6W4S9Pqv7uF3XvPEsPkQ9rEi7cF5Q2NxsPE186vW2HFMbN2vX8",
  "key10": "5dLN6Jn3FAZwgpo61xrviGHPkqycY8ipLNydUjEUE8o8B7LXQgcZDcfQzTF7djAzQ6BoCMNSpTdyjY6kideY58Yi",
  "key11": "4BbCi7MvtCf1nA4H4uiWBeCDDU4jfu1jQmrfnhonVEgRXBGStzZBxDW1x6zJxb1tBSpozciQEUSdbHXf1JtXZHXH",
  "key12": "5mo7AnHgmLwK4tgjatVXAgY9ZeBESurLv2NCBFWoofSK9HUkfm4MYThoUV8PdpVei8AmyuFXJrJJZkSx3UxNp4bu",
  "key13": "3gP4D849K491h5m9n1cbPFe8jh6S7cDR3r8XUrsSVY2NL6hAXQmfxJTquHgBNgp8K3N73X4bKCJEtxKZkFwha4XS",
  "key14": "XRaFu51ea7WwB69dUnQ6JWtGesx5F8uxuiXPiSySs8MfsYz5jxSbGHvzcJ9EDgfV2R4Me1F6p4QSq2uUuMxP8k8",
  "key15": "3RneNypPtmg9rzkxNXTGSsJz1ZX3U7DwHmcYx5uEAWPHSqud1BnQ1BEroAm5XZQmjDaCJhqiNyZRaL2EP1pL98Wk",
  "key16": "3cwqTY5kArnePpiL8ZbWCS4T4wKzREwZGFSJZeAtqkKaYirdYi83akhaW5axYMNJURw2cfcGeuJ3RWkQBbXAZP8T",
  "key17": "2X2XVHgpAgpcyCESKamjRsvy6X3FdWCWvPmE891uVopVrzSY8nsHU2xbUxPxyyttRb7rXJGio8rHjrurJ9TB3F8f",
  "key18": "2QirjoDFzSVgejV8uAc7jWAC1aZcnKvf3yrTanGa22mqbrv1mPemMmQ8CXr2haMuyLVNT4ZubYLpu4x6w9TLTgUz",
  "key19": "3HrQSGzPYS9nNKTkRZVxxcspv9GwGN2toXsarkr4cV5mkhqykdWa1VCpBCG5Kc3SsUYdtq9fzPU7CCj11N7gcN69",
  "key20": "3Vvmvz8rZG7q3LLRLSuHyEnW3BpNn8Ynh9jDChGpuMvboBfk8QStFcjPav5nsBiHVotjNiJXb6ESTmaXLUeTsNg7",
  "key21": "4UGVKMtfEiKVQGqTXvCh5ZQ8bsVzc6SbpXuuMyyP4mpCcDWK3wuFX3uB9AQQReYmBXgHDkusuPt71HzFEdADQMjs",
  "key22": "5QgWeSdptuTieCUX6RCdubbBHE1DHcP3EXJMfxNgyt2zYYXwYxjPgXoNT2jnQ1Wwcf2SLt9k4PYcXnfAA8oHYFWf",
  "key23": "2BgSirwLTMXvKK529cGuqTbx11WxAhrq46eVpvMyF5asyUQBt8P3z19yVNDSZE5EAiS2TnDA8ZA4x45AjGyVSxD6",
  "key24": "3ZYw8C2LAV3jauUdrNGZU8TQHdxTzTUZqMRTq2t2872Xip2fKV66KZmZXGxHmc4ZxEYpDygV5SzMs1s3T8rUzVte",
  "key25": "4tb1CtYDJiopyuDWK1Rp54CeJHkiiypmEfG7CyRa8MF6vHpdusFrMHV11cRbsq2TfBKDaGiyona8ziMQpsQofMK8",
  "key26": "66GKZTQjwYtRTF9YLAxFS5DNasaAvZoUGAV191PNBHQPkYmdrZ88UL3bVD21PuvhJ56USK1AsuKc22EgJGWh5BXF"
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
