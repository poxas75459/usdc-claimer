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
    "QagyCDhTdQuX4hzW58wqiPGWRk5zYjVLR35LCr3kBvD1itioUj2ZoEWp2VHRjMwPchfkEqTao4qKgMApeDAYe2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37pQa5o5YGGc5XMmrjgCdyEibevkPBfbHidGrpcaVFzPga9b3kmEJWiTh18mJWXpvvZo1p9Em7N9YenV4QnYwTve",
  "key1": "3iwhrBZi6nr7UoRm1hL6tYY2cg1waHzZzke1749yTMmdyYBctP9EjzcrB4adjAqjDbpaBpSLizWo9ZdpFRPftJGb",
  "key2": "4AtvZeRnVLRQNS4Je95iEGxvLM3q3gH32kWMxy731jRtx2PM1Ve1kt37gXvqHuxiDbgznwMKM9PguMQavCPDRTSY",
  "key3": "3ds1j3o4AsjcRzEHECoGXSaLQy18oKyLZ9UiVbQU36whQvopHttCE6JzSPF1W8SCMjoN4m9JvKWjGWq1vJEPuy7f",
  "key4": "43uZw1WopJQpzP6zC96RGLSmjythJCsQy8sP29yQQn6pqKyiasV21xKHJjUc98YAYYHSwb7WcCf9ux8r8yrbG3f1",
  "key5": "5LiowPuxkSpvAzWtWxdWRZ6xzo4JLq82i3MEJ5oiAQ5XFeNkU1NsTdMJY2LDJJuJAnBieNwsHojz9nH3ZULouGEN",
  "key6": "8uDCteg2BK7cBct49LDCap8VNfvC2CF2x5qYGcjHTV5F3ven9cZPMtVZ2CzNBatzVHeBHk2suvqXXzw2WTDLdvn",
  "key7": "2YE789XXahDQQbafPQCkJS62XSjpR2pk2GpZHMCAiak3kQ2siJzEBBBN4gxacYuankhz9NBG1dstWpx8bedn3Cqq",
  "key8": "5dp89DfNeHb5NGZEweviE9G6bqA8gA745vtiCuahHuGwqTuZ3SXQhvz925tqr9PrGGxTHcrbeRpYzGDWSP68riYB",
  "key9": "rGMGV5zMzomh7L7Qo5pf7PK4BR9MH9PFm9tqK416EehWMQVtCPkrHSn1nado1MN1gQiicH8N99BSuhYvyEfK7xF",
  "key10": "2sH5LP2yp7ABDk6prgu4NdjsVfWgh3MJvviXGUjCX3bzmLYUbDGem9rabeiE76wDsgaRNkeSH7pLy2FXGU8QrXdM",
  "key11": "Efvh9ASQNL2VFXKw9af2R7uma9VUj7A1M8SEzbww1YexoPSjVGsPjd45YzATzAewp8Gap8jkV43tfRddLzg12Rt",
  "key12": "5YtYYGarAhCpttY4b7RMcqKM3MPGe1PsN2pr8uzCVggzjHXrH7sF9G6e8vvBhn6VRSQcsoQySTrWfgjEUsJPQm3p",
  "key13": "4kcRgjkajFVWEv3q1k9XiiYcukHmnjyTumvAyTES76MzHk3xspvyaGzM2dfyU2otLf8QybtsTjrtzoT8CRxkQD2X",
  "key14": "43wCPUZceZvJ2fWvbLaxfE4Xj6is6a8DNdenk4YG41QJbNnjisCbH7f26BVLo6Y2rpXwaZSi1yDvta54MQZnj7R4",
  "key15": "4AWYxPz7BLNLFRrb4pyHhhQUbX1E7eYEodUF6TyUwNYKbseJc49KCws9sRaePfEcr81tiZPunBoEQkwVHdj7htUo",
  "key16": "2JuqErC5qvoUn8B3Req5V36QMYQfRRE8ty5zgKnr5CBaAtZCE7m9kLY7jVLJdvxPHjHkja4WK83WvuFw1yVKwU2W",
  "key17": "37TUuEsT932C2matRrCSySSjWKvGYDXnV9f8GW6BsoQRXsKrrGeN8wCJ8j6xffeKTL1f8viEyL1fG9Ki9KCwhioG",
  "key18": "3ZWePGrnBt5DPR2YQ15oFKB9bnjN4HMWv9hK7jJwtyBLNacJMGgJuUDe76kcgjyepvfQxxmgDkdtrviyyTvQW1Lg",
  "key19": "5FGzsExL4gABUoqR2JHmQVmEEEFGkmLdsFq7DxSE7Tj7kajvPRsAtaKusCoiPq6WKPK662cL7BxfTV8ydeuAqttT",
  "key20": "snfp6qDQCGkZfQLwomkJfTyJjiCibH7E5PLpwn6uDUHJp2ncL4raYzHd934uqkgyyHwcqSGRxzi64WJsyqSy8Sq",
  "key21": "2fjqcEh54MEZkDSwnM2AVoRhovq8quZT3Snp5QBooCJsS6xigY3TXegqK7gLzHL5GSvV6a5Xk4M4AaWtNvFrJHcA",
  "key22": "4KrUZsWUudf7C9oFwAWZhgMmCEcmZhY5mzCrkmi19sCxhUm5fdyCfGCJ766im5SfWYMdVCFTBYccNEgp4r1XjDDT",
  "key23": "5WE5bKozncbbuhaAmyakQCP7THUpFK3ee3QRvf5rq2Yi7PJhtTA6deS3bbgTB2BYidZJ1RRQgFGzHnfcpWREX2Er",
  "key24": "3vU5xCDLFFekMkEZLdrwixATcj2ivkgWenxzRnXWCX1UseRpH3qN7iWMV1WEhkY12xR61EDFWehYizPHjPGEZS5i",
  "key25": "4PXQj4sMeLSnUUJ2Y4HuvrmbaaRjZBhAbkUS9zNTDHyFHGs3Mm7kBvzJ4kNyq2ZaJUmYUbaucj1QKcYzPczyHQcw",
  "key26": "ARcqoAMDyPuvPXrU1v4dvHHL74cbh24jJBGNFphnWKWctWWYPvA6tqQfqhz5SuUMS49PpgGyeGbhbrq2qQEnmRP"
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
