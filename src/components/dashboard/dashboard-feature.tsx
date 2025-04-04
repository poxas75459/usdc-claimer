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
    "4tW2zgSsoyzTr9YPRTZXMHmfPXvNLqz1CQfQVqidzUxLCBPDQG7JNn27VAKuYH8DMmfCgmZnGJsTfAzJusWWHMbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hknu6suHyUPeLNqcuB3aqMyTQWdSqrKZCAJxoTQ1eNqdEEM7q5V8SRsYbVfw96rcpQz6DMhkGAog1xTophwFCs",
  "key1": "4Z7wUn2iZBA3NPMXJac1AXSS2mbrf2dBNkdQ5e6M1amdRFxGQeRUQ1cCSrsomeEaKPAq4bc64yNuEGN8eMYZaKyQ",
  "key2": "4oSdwwAHP7t1hDaEMpt5VjbtJiUSE9Anr3xYhgcuQqU9FB6oTSRpAa9ZEgqRHRAvwnLEd5c7B6gMBZ87AUAFcng8",
  "key3": "4sQucmZRYtmCBz4LmqavUCqKLEHTjJHv6EYEjUCCeCiFCq9wrg2rtsdGDTt8KHnzWCs6MBQEb388GmVs6wgEsbuP",
  "key4": "5X7RyMZLbgNhsr1mx7pAWMHPhT8hQSfYBL53F6gg2PHAaW7Fk6RTVCw37xLBbvxDnNot5kqeeEYf4sdQiJdqRgBb",
  "key5": "2Hp2RZ2HWxF9hAeTQQi8ih3QyvWz55RkULC3dcvG6UpUJSs4s6quMUMDkhH793hiaX4ohazoX8dV3D3QP7KrZvU4",
  "key6": "61Hug76PeiM896a3ycuv2eRcXMtUjXSe1CBd4V9TpAFDqy5osn3p4MCpoCE7YPjygsem199NsRL3EiGTUHMEoFb2",
  "key7": "2Sytxoeb631njnMH5oonNV2ze3SB9yryZhrpZ3q62dtkLUEP58S5ig722gKVSKuXfsJXDeVqyKTCPEdCc7aYLUoZ",
  "key8": "2eLXSYTAFExpSr2mHYSYVRzrKfAtt6f83wXRxQBgu37zY3dy2FrQABChGC6Ek4Cx6xq6gcvQfYPn3skCrXQv7krV",
  "key9": "122kf7q38yxncXHRneXPBKKY2Y5W93TuG2FTVTHVL9thT9Mow5jvwZ7bjZLoQ9ZATEH2Q6bNRUCLN3vH5QwVJAgE",
  "key10": "EsRsUK1NZp7z9CaSLsXA59Ta16JQtVTJFFW8UNjSthmBjpaWrVeQ4xnVXkZ1hyMjeVkydg6a7AmnugVVYkUJzF3",
  "key11": "3w3qTTrqUxz2zHqdzZqnCoMn7LSWApBr7sKTAraLYmC6P6dmG3zw77jbC9sT35H4tdxcmVH38MKTXzWZ7wbjU98s",
  "key12": "4XNQVNYZyYG2gej9NfU3zbPZ2Mvx1JtJJ9okePULKhNyXA5NtjLj19AnNrvP84kT385kFcMLgUiaBHHFRfxGN1Qf",
  "key13": "3kQqLr883fTGL4RgbBhnpg3Aou9Xmm8pmDZw6sJYVRGXo7BoYQCEVMe9zw5z3LbEYzTzH1Z3d8mjkRyQUVUu5VTw",
  "key14": "cquv1CxgNyyWG4A2u576UvZSKqtz7B13F6CswSbFznBNxkxS1awULG9kdaWVdYs1ZN43GZxjk7nnrFaMUign1gG",
  "key15": "4sG1mHADGymFSR9G5m3x6cxXJZWKwPuK6hoRbHLVVbRn8DVcyBPswCA2C77CeLTSMv8kJFMPA4JRsPk9odKgyX1e",
  "key16": "wET6V2tmJhYyGg4bUdaYowu8ZXgcNNgBk4mmdSFtSGxLRU65vbFBdDsujNEXnUidPzSMHYhtWbiTAeWetdgsnZJ",
  "key17": "39grDvrvSGcbC2ugNsvAatfkyRnUmEhFqd77qzSb28GhLgjqzobnZrY5MwBNtPjdrhxp6LGCJA3cPfm9xygR6Rc7",
  "key18": "5GnAF4cx7q9JH5ATe58tVc6HDFFx9QBqrc91AGEDFhyQWbrrYqvFBFdQyJvb6rK6ZGk4AFLHyxUved1dt38G5s3Z",
  "key19": "2axbq734HqEEYNrWvxP2hMz25rxp5D8avYXxAacaHV1jufDd3YEZH5FE1WSBhc6GtLUqjER4ZPcnXUydDybYyQx1",
  "key20": "2RkNvodqVs83k3epPGdm8Sxq4g2TwmnpkjEcLHNh2s1VGj3FtUWfshc5zXfXckiJzU1gSyBtLJhyVj1hucDAExat",
  "key21": "ZUHifCCFPQR8tWZmeNryJ58R76GhPZCrGFXzq9SN6bYU2QunPNGKKfQgv4ipPGKy33rTvNPjE2buTdTLKD8QZ5p",
  "key22": "4E9XVUor7ZCrVzF7LcCTFkE8493ar333zQwmtH4JdnxyXrvK97ENGyxp4vDr4HtnafXtCJiFa6MAEAywqux4X2e7",
  "key23": "4VJb18bZuYDiBX8cDmpNye9kqSJWmtk5gQovNRggaxtLcf2ge551ECzu99A4pejK41iPumje7cLp8cGTcgCpjoCi",
  "key24": "65ceW1NNQPkJXVKrXFT98Vs8A2PwUkDNUcYMMMMDDBTY3UisuXRXUNAQVyhs5T2TjiWxLc2uWiKYhfqJRkyUbuF4",
  "key25": "3vxaJkTrrK2fq89bBkNdJ1a6kUre6iod3tNVx4YkdQqfMvx5AQ18972YYSHAPszM8PMnSLtXr4jrcwTmhRL6UU6z",
  "key26": "2XWZHp8i7h9K7BYeHHfbC3SYXdrFM2T2RvJvyUBuQSw9QEybuhzcasor48HPC23nRULisVZvEhbLUrCbQbRsnkj7",
  "key27": "4sWtEza1ZTwWMrCMjJ8ZPuf8FLxW7YVQmDzkvAK2pL3V24aKieZDJEjnFArJmeRYFg8UvZ3YXJtCdeu14ixZFtb6",
  "key28": "4yWWiF3vyqSpGwtGnDZpZ8fAYYiRzK4kakGpdpNAYky8SdYLt3N1rNfX7TmQFnh4km1grDgeLqKDt1i2hu3jFGpy",
  "key29": "3EqcNKrXkFdEKCpcQvzo4QqxRVWuWESrPnkAa2DpEiCKoLJf2CZn2ohog9mifjmmJG5JEemVh18pqufxgnsBEkq1",
  "key30": "2aX9XJq85okXSiVYpVv8Z7pVVWkRzk5cmSqCpsyTVTTDc8UdHy7V5CfVWRw1E7mNR22MmdHxD4FsGu4njhTL9k2v",
  "key31": "66B5GS63oNSDckc9AbbPfteNuErGpnwVd3jeFZS6aHcGMGdGQZ7a9y4CVAf45JMTtzRdCvJHCAL76HKfPY9zzc4X",
  "key32": "53Zg167uLB9c12R8DyqU5QYMwNmYzrhHJd2xdnHCikp7NFp8yf3FLZUeXzbrgEq42yUp7gCNEat1rk2Er6EDjcVy"
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
