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
    "4eiZs5fdywh8ZyHd2naGpYziMpPA2V1odZMu7B1s1X34W53eng671n6z44QCk3rcNqsgmwdmNnHxZm4URUBRmQjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEozQQjgMqeo7UryzK3rypVAtEcg12yy6zVAaJLwe3pYMjbLG9PW7eLa5gF1UX3XmKdi33vbJgRfaNDwCtvSH8N",
  "key1": "xLAGXzEbdYZEoaz9FVjetYS2KrquFjKhPn72HLkt2ahsK5BeKUoP9NR2WstQjsLbWaTkMC7aqCm94xXcEgUa7CY",
  "key2": "2io3YLZhGEChUZjW4w1XreTXKhy5NScZkvvgf6DqmGpKceWVosBjaw56KugmCCfxPHTawecs7XT2J8y5koBrUUfp",
  "key3": "4U6vjA3FWoP6GbK7PZHv4jgdKzbqQxPejExpmTfaHviXe5FNAgr9TJ6n3h5G17Pwwx2rDjzEU2FDPaURA5pTkWbx",
  "key4": "5HV6EmYxcLMNyKyft1QzR1vCc6CzhSL6rcTggRmt4QYNuA695ZMnu8PTRawTcNMxZkPk5gW65i4Q1RqbKFzHUqbf",
  "key5": "3xSh1yTn4WCKTJQ7uUWTzzuLe8N3o6f7SWHdoQkBBiTLeSfd81MA3zadf219noPzNmbPH4EfAVppNSfXizyfbbkY",
  "key6": "673J98xr79sjrk3fQEbh9UDX6hb6mfsPQwdSfUP3Q9fhkNLfGZ53MUC5ywLg8H6nzAiZVeuJNLtM5NkSxVAYaEot",
  "key7": "3W5ZGaVNqyJ8cwu14DPWUrZtSDvPAhHsbxkAW36TQ2UgzAZGxpC6Ff2NEZbFnG395h8K9CDKkeVteWY5cSUeuH8H",
  "key8": "28WZE6nPzDZrqSEtqnvGT9g7776C7dP9B7JrQemX77XU3mmWGuoEKkDJ1wsyVKWAuGjXRjPeZ73p442ctGBKkehT",
  "key9": "2HbgYBauiTXmhrfiUHyxnuCAkKnD5ee4czegBRiDBpUws6A6Ywt9xQo1Z2zyzWPfeUccM8Z2oNUr5LGR1hSR7Fqf",
  "key10": "3cVcGFvg8BYsV1FBRW11pJd725Lrq5gzKc2MhbKbKaKXzFNatKcwW84FNer3nmAxt6ukok2KjvXKwxgNUd9C7JBm",
  "key11": "3e8xAD9neSLjGVs4mGsDGTALvRksA3iiM9mpZHs2h9cMQsiSfFK71u1qbfmiq3BiRnUYucSKRidJppPCEQkHNRuR",
  "key12": "63FKQh63YtDx2o9ciMMeTJU47153stV3qtTcB4Nz2y5FfKhqSwwtxcve7EoVtziXwZ1NNEyyZdukWzHWFoCYzXCM",
  "key13": "Jgqka1mqmPi6rkMrBf397egr9sFcTEa6m4sLPjagTJzDaFtikxfG19B1YT167hPd3d8aTSCnPws1WSGEcy2U83S",
  "key14": "52g2dEWgfiYu1ucQYRghEC8mGvc2Bhbbog42KWWco1X3HLtrLiHWtMuSqUH4hKUaw2dHg4Eg2VEcx1SxBecfcdzV",
  "key15": "5fKg5RasTtkcQvCbnHgdvtfjMfz8NaG3GnuHeDbyntvecrVE4J3hUrjmpzBRfwTW45VKBik5nmocvyqWnQLyRw39",
  "key16": "42DVVMid2558RQwr7qdCvWX7g1YS9S7fzZsnhCXCynjJDcQT317c9jJC6D4w4igAqm9jG2yz7jz9EAboefbAjyio",
  "key17": "3TvaKCpJWw1Pm9L7GYeXJaL4iz4U6a9aA1F8X3UDXCMr1mJQ331DVNAao1eEYAJZ2qQ2mdri4Tk4M6GRVfHaSbVL",
  "key18": "4ijTza4pMuQhUfxtkq9hEpbidC7rtSF7mUwVfezPjqppAySH1wrR1LcMVTrW1F4uuSM42Sbimq3vDTMZU66nWzi7",
  "key19": "55VW5s6FuTKHB8mvPLp4BiVR2UGGZHbXoyVkJxdXCnH8oezihK4aFdhLWQjVyWUPdBd53Uw2uHyYaVJYNwutA1Y6",
  "key20": "5Ng53Dd7KUfrtnrP9cyvsk4JpmqPS9kMYgfZtYU5egJskfvhbow5aBNwwY4UhGKF2Cryy4TAYR1qkJx5AFf6hVDp",
  "key21": "38kE1acWV35urhG828Squp8PWdK1oUCfNjAkqNBE39226PAnRnQzBDgmJE6u7AAowptuL4n345o1Ci2FK8MhZY1u",
  "key22": "5UMMQQd6uppuGpQwyztikDTyuHCz5T83tfC2nh4quZCfWQwyF2o9XvocmvX4BApVKpuoxFf1QtUerNABzKiBd8DB",
  "key23": "4nHKSw8nKpn5QDSzo7C2UhFWpX5QRF3W3S8zV8NdwfXGQCJ5ECiHFjvAJ1iEUtJmn589QZgc3AbQGS8UW2NqVGMK",
  "key24": "23Qx67Y8JvyujDWyKubpYt4bzddEYo8714ipUvkBPKZEatLHjndWkuVTPD6J9RbcmXhdQjbznMMGP52gfhvov9YK",
  "key25": "4mFDFGGQ7urk486KZktfi7kTrvihvbBz7oenXHXV5wgWr2ByFcnghhHBSwxuvsMhHo57pBvvnHBKEQkjyMw9EbAm",
  "key26": "43jcAJ5cBBbJXUdwYog6rhdfEwL7Hd8VpiZ4rPwhYA4kEe9WttHAZmKFAGpjTPyaxfpyMAYRGfjrC8Gdm3v4fNAP",
  "key27": "sddM5dxp7KMDDjtHEw8uJEM6tFZ6piQTF4Bcv5WvTBGt4xda9s5ybWi9PR4tE38LRcmVuCbpiX1C2jXf8hgKyyP",
  "key28": "6HyZ4hrozguhoHMBVnu74fq1pZ5Ubtn7y2mmiaPfPDX9XzDJoi22SxhaGpzaD17HvN3kBcRfjVD9JGswj8f34Rj"
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
