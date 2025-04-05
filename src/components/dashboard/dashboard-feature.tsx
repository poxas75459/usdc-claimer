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
    "3vcBT6tdN3HRV346KLBwS6qJCMoUwtwvjnfZHUohv27nwn6TavfYigPFF2n5tNGSDUpAmPa8FEQvgMQJ41p8j3uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XrfFRZBM8PJnXUTFfeGs4WNhySkCs9YVCgy6T7B4TV63DhqJgDehvnznVTAoje7xxd4YkTwU1yMjnnyxh5HJAca",
  "key1": "5fHh7XnYdW2yM8xjApbUzHbMdk58KCXv1RA9ZToGprSvjb9LNPQDi9ybAU3TPaT49VrBbmV7iZdGGZerYxmKGwTm",
  "key2": "3frBW84rzFUhAHVsf1sAVzhPDCaiCXaDGj1oc3EViheqfxwqtd1i5dy7uTKUySg727tTD5FEmgBiwJYgrTv4cCRF",
  "key3": "5eQcKYETGkdKjftHAcwcRBMBzCKs8mWkNwGLsfo91ppEUuUmRnudd7p5nxQmojKrAZ5jbmHtPxcKZ8qEZLuqDq4k",
  "key4": "3gTDSEUrt16hSxCKXguRsFu68pAKSNQLzVZPPyYZd1FPvVJHsLSXKQPDYKF2LDtiRM1mj4hHT8JxwkhrAxHAPaex",
  "key5": "37Pof8VAmLraSt3c5D2SV8HGokuppKRjA5B8yW152Armz3z8yWLsBALi7P4Y2vJ742xDeQjZNVgK8cUbBAJAY1JL",
  "key6": "49QnNGtiaNEK34Tw5FXSRyDsHhooUMGmsi27DvzzXTxkSd9u8Jn8fMgzECManowQWmfRp5Sox6wpCg3uZhsiww8r",
  "key7": "4Z1YVb13iUZ8VVwAThQGFh9BKspV53ZKZcTtj9yiknX639tiBa6qoPrKyJARqyjcyePc1S1KeiX8SmwWTdLmPMji",
  "key8": "2EZ1Cy44yrvAMQPWj8oqyPjMQ4j8y4quLnK4zQyP6HNQ3fQzf3b28Z2Y6uNqFa5ru2bVnNYjZ6RyBWrjgSzAa6mj",
  "key9": "qE835KdZX7bn1Sxq2DK4vaqnewJ1MvBLdDNfAWn3d3GrKvxtEQFVubiRDN2JbY4UVCyxy491Z6MegJ6eVAeAyEu",
  "key10": "4bdYRhEUBuzDKyFYKTfe8dkhswBmU5wCUnLt3xqgZwmThvvK1z58KDjx2sQxZtHVVF4mfQV5tMZn43tRUSjiGksx",
  "key11": "5ek7nRYHxjXjnsovi981GhGPqS8LH2n4yXP4YvV2DqmACZ2SyyLTzFMMR64qphnTvrdFHqMtJ82akdFvrgs2n7jp",
  "key12": "64mL4KCeJFBt7HQdyj78aZbEZxY5KENKq6ybUdgHMZqpHo1P7dzTbFkmawiiJHC6Mbw7cueDZikE5H2nT4v4mVtW",
  "key13": "4Gv2gzFdCuw9Y8GiPqiLjfQ9uBotu2wKXB45uoLbdyrYRDjLKY1BTiumM2Ymo2RBRm2CeszaixBoJgnDrQfWaLQd",
  "key14": "3AE56nWjpoRZW56x8NN9jkY6JQuc4siani2qnJruFsNHToFQpisvdZo1SRnocHbUdTxSqQUwLR9giZqBaSXpTjuh",
  "key15": "2V7hS3WVx3fC17vBRDtjmSNaPK6TexqJduYcCfLPQrvyGWVmFEgXSK8sHaR1iTSqEiJF8gi5RzYiJf9jWgW9k3vD",
  "key16": "KauofwuBUmh748Fi6mVuKHCikE81Y2HTkLrQ6SLyR229zD1JzDQsxaGFGntHfQf9dcr8fkJoxYECYSV6xLoKtvS",
  "key17": "5P1i738XT9g3QfKbKmVUZ9VPToUzwApDcwNBum9SArzGP4h2YjsfVWWUBkFSFTk7wB3EWkVGUkMm9uFSddhs2Ycg",
  "key18": "8vHc8dLC3t8JJuEztkRtDbiiY2LsXD5E8HCKZDYf2asxWtySWzLPMLpC3NPKspZQnL12xFBc8zjmFzJUGue1FdV",
  "key19": "44T9W2tU7TWeHGoWgaLefR1A52mjwj5SnJp5u5e4h2sXuxbph6pyBXS3nromprsCUJh8gyhv1CjXbJAHcmm22E9b",
  "key20": "2o2hxBWUqjixFqUHUkpS79HhoSAazn9zRiwxyHrXPBVa6H4rn4uJL6eHZBnyvqWhL91RDyDwkJSsb57QPAj9QYVg",
  "key21": "3qX1wPfet8PaKpF2RLdAjyfdGY7YS7Pub7ftKW9qSHAZFhLBkVsiC88gnDPYcyAqJYS3kXGZRfJGzBvF1Z9mWK18",
  "key22": "5t3rM4MZDDdfCNn4mAShYk2uUzSQ6NS68CKZXJ4uvb5qRatmuJFmWm8LuURA7xMyTxJRxDRzo2XbMcJQ4Ry4JnbM",
  "key23": "2g1iVyzBhbWYZtN4N8GnMgqVpaHDRkanJ8iuMkF9ZrDSPqD3hFPxh5T8Cs3jTj2MCo6WMDVWkWCmMYruaaztSMkk",
  "key24": "4mjLcfPEPUraL5VabTKQBZAYYTbjsHpEty6DanPPem7Z2P8fQz3FNpqxWLTorDYtAYBxPdTpbqiqqakwzv55bzaW",
  "key25": "5YXPaAQa9amStYh6nrtfaHVtELBFjs4YwyFZgXMGqkU3B19wzKUzSuMj9uQyfC2w2n8K6VqYWcshNZ5SE5YdEXNb",
  "key26": "4bqk7gycVFeGgpXTyyaCsc5qV5GSzfYAnAqPfpNJfKrj3atREUhENHNGrTbq5a5AyGz3bEjrcoC6ABAa6bg5m8kn",
  "key27": "5wHKvv54cq8fRRPdT41fjNrYiDkwYNuhbMA5k2Fjhv6oFE6UEaN5s75CVQkyZZPdoQyL5yoHsApKuUidf9ixzfnw",
  "key28": "5Ch5hVp2wVBNieSyj6x3KxkeCT1pfSp9tYkSmcrLTyR9W6o89JDqWB1xnaGdnrHyitL3nuXEBNTqWLk3XSwu47tW"
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
