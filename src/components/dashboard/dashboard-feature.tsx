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
    "5QevkKcPXUhQYQww8DiPfxfdwtEgtDWyoEQatyVeQDCcvvEkhZrTdmi7K7ieKQSzke1gNRXTQWfNiMNLTjABSY6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tkj4XS5uxbxRJAWrqrLw145JfgiyxPnSAd5nsBDptPbJW5pmJ2HR9fxytCLtQVHDfmbNKDF2P9RBnRgs7cms8aY",
  "key1": "9zGX8RGVeZv4rEqYwePwMypC4ygFJDiELdgB9sbnafRegfmLdYVhmCYCnnMuykqkHDn1HrawuZXyfGTEmCJoPqh",
  "key2": "q1iocMLFK9jftkV7MiEdBANJvVqLLBv6H7Mzwo9U6tMpSLgBbvCDB6peqrg9kBUi6zy9otqyu7CwZH35qmqmDVK",
  "key3": "2Qsp75SjLQSHdbnCYYKXDB3sWUc8iJDzHBr57AzYDeG65fGtf96GcVwvB4MTw6HAiAuSJ2N29ST9QHAPvKYeMony",
  "key4": "kKhqGTHM72gwN5djc4ZLDCmUDz6q2s1ySGCKap7N2XAqQk1trNYCbX7guE4b5qTCQWCuGY1XcmzbmSY1oK6bJym",
  "key5": "4m6ByX312kiEjcj2Buuxsgk7UCYToyLaqYLL9AL217vvF85ULigEFu45X895LhqEygkehNc3iQSmwUoB32r7ydic",
  "key6": "4cTvC1BGgzUFQuLQucLHPayv61vA86U9B7Qp5FSpe8NszwuzbC2Sk8ARqeryN4f54xWEpDetB3D2wzUkCkKAkB43",
  "key7": "24ypzhh6ircG8VANAuhH7F1XeE5S91M5aNS7ZbLJYGcQuASNokA9HpMEXCyG3jvQo8PmmGVikiY2LiXsdSfd4DFz",
  "key8": "58GX7QzygM2gA9xh1z6NYJzQvNowrHKDQowZfrhDwS7xwnyE8aHKHGYeL1mi5eedKZEeVsCU6fzYaEifN2wv7ZSb",
  "key9": "3CtrDrnk1YBXE3ktX2T3He3uyELgqns4WeyKUMQGfswLiwx6tUMhtqh8K15PFESBt9JfUjSsmUjfNzgDm8tczPx8",
  "key10": "5YjJkvCXeczvBKpxcLZFBcU6Zy9tWxBar9Dr9kMuAzA9X7yReS1E5fktJrL8tdtqQgcJUFaQ3TcVqaH2kfrkKSEd",
  "key11": "57hDBPBtsVGL6b6Lz7jtesQ93pZ4wn15BLHgHwFCjAPhCuXVSjP4sjyvt1SQ21nw8gadheHqdtKc34BSYZJrLYJL",
  "key12": "6Ew6TNbKYHbDT5UHhGxrSrHUJ4b9tNti8JUfdg53o8hSEAscbChqWf1fTWSBwjQVoruuLTGEYVm5yYmchxthp9U",
  "key13": "2sErXEDBsAg9C7hGFxnrVPGi33k9sNefYcGEhv9TubeKdRe1LWBEucT4Y8uoc28ksPmVQcYauhsbpGaLYNyTwtyW",
  "key14": "64E74ZaJWanDerVi9jvywhKvGpWSW79ZFPwGQy1u2o8aKDZXEyH1M6iJsZEmPHvKCruQJoQMtuwjzw3DoX1YeCyF",
  "key15": "54y8AQGGpGmBtqQuRPRGZfzdvhfDHdjrmpX4UZSo7unPrHHSJciehqbgpKzyGAEhEnjuL1u4qfhFmrKDcFu2MvbC",
  "key16": "2DCsy8ge4FYmBnTecuAJLneucaaBa6LG17MckAyAm2YfmgKSDiJjYiDN1K6HCV8mZonuYF77aJ2yDJUDLEcVcF8m",
  "key17": "5ygzdt7nBgZTJW28QNrfiBEBhnzCP2pMztXxg9Qufeh61zLgDWoNCwkJSfECUqgVBvXFmjyxNqR1HmCTnSowgL7T",
  "key18": "2VQFyDtN85pRnUMJmoWKyLXMSU9F7svc5PRjjGVzQ2f2PiRFXrpbg5LYQ2uVuv72TkKyJWQxXcSA8EiXnDCcbkHV",
  "key19": "4ZRPmBdA3b3JohUmUTdMAMCAv57y47TQGqvrUHucvzRchxuMax9Kepsebh4SYLyBosuDri7krfegTUCZieQ6tZNs",
  "key20": "5w8ANWromBrpBF8Hp4jAe35fSQjemb72oVcSyuq54AHLQYACuP6EDVRfRLt7zE8ng1zLHtxgwWHGHabYFWK4xMiu",
  "key21": "5ArYUSUmPhbzmD8VLz5rMiYBErsKTXJuQ7MJn9AjyNdw53oY2Ffa72hf1dN6hfcktdkzqBiJCEwQEGsQuqvd9Gm9",
  "key22": "3FepPNx4RKgPvp6uCAzdyNjtCpHiNFiSAF7NS5GP4HWoWEKkpMUW37TEuTVThtRby7EEaxxeF9GtqWqbziwjb2Ez",
  "key23": "tv71E25Nohn5K4he2gmLMYFhLyNDqHaTi5g61Lx8DQugg11yisqV5hkuNgmxZ6xE6SC1iNpS42EFhHRfVrUPNiA",
  "key24": "56XZhPYmoCC68QTeE3Te4VdSHiiXkg5ShfzRT8pAW5YXWfTprrcn2gtrMTSjdeiRaVcqcLbMwue5sC8ZXQytMgNQ",
  "key25": "2ukPv92w5s7niFoPikAYUJkVbeSESzztYrS3j8TyKaVaF8YXczkkz3ZbKah2z5mdYmnyGind3HKot5iVSm7tuNiJ"
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
