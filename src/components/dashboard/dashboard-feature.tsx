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
    "3fihtC8GG1cLB3dyGEjmy2TJGt6LackT8CHdbj4vhpboD2BbfdCGPPBCCH3EALE6n7n735ozuBwSqLQyYVvECPXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RogXbRRVvWZru7D5iS2GMnGhKLbFHb6bsd19XLgFt4pzUgdfD71381GQexMeicStcYXVCeLnT94mefxpTMQsEN1",
  "key1": "2jKmAgMCEQ5oThVT63RRwDZq9byxnXDSW9TuDKrk4XaAnb8UWVwiGmjYzuaepV1uP6SDjZio1ZEMB35bxPCbpRzL",
  "key2": "4HY5BZSS9Qt6MKpCcfGw3qD5JHHQYpYGgm2bY9QLt4nj4LnPVnrU4eXLfzfGUGNxt7o4jCpeL8UjGLxXR5qXc7P1",
  "key3": "4YeupRrtmEyNLYfaTuKdWutpN8FbaDWa31oQwVGpFrVv9u2ywGi12cfzTvUJLKpPhEhu6YPe2MJyjpaRDZMo8PKX",
  "key4": "PEQXSdSnboyC7XY2Whm3TgBu5g6CNdYsByYeR7uYzy3WYyEeuCERt5DJVCwiCo7QdW8rE55gfxbuLsmP7LLQmLC",
  "key5": "678RvbaXjZ8y5BvD8gRhNu2qmgHqHSTFMZccLdkdTdkxqFbHaXJR9PRnFPCinKrLjhEBxsE6jEGjVUYbEVz8o52u",
  "key6": "5KithA44KxfNHPAgRPGmbqTwWRUoxyc6jLBdq3whMUQF38Rbkm3rA8x9RWwJL3vAUwHmb2Xc8cLR3UHWSPfD4ZqN",
  "key7": "5cHXvFiA5i3gKydS7h5BFBKwnkfE15m9SZEHrvpG4b3JCjQ9dGQrsqhBXCCib5RPSN8dkXVcN81A7ysjcTtAa2hp",
  "key8": "56kxFoxg9vLWfeujx9bHaesxqQrmzKj7aLLGftMDBNyBDZ1dp2vpiPnrzs8A9ERUZp3QKeNnXLa9F1eQXsYbf6ZF",
  "key9": "FDNKujtTNiQHsJs5hGgGaQTvGEo2VRmCFouerTrkdHAgB5STHKvHVyKyaAJYXfEvrsh5qeExK8EN9j3PhaZko2Y",
  "key10": "63C5gLmu7JYteQx4sa9uAz3L2FLC3db7EEra8w2AW4LeQDiezapvZmsTH4psp9gTF3DBFeTyYeNmaSovGPtkJp7e",
  "key11": "22tHYVgL51gwkBtoLitf1K4TBMoFkm6LgwWMryoiE9YamkU1NA9UrYVErymGmue268F4nHZwLxHhcYw9nuDU8UdQ",
  "key12": "1JWSRJzLmqqh2d6KLiivcpjHLwb1b1ihvqkzWBFVtcg8KPGP7Wt7eUvYuf9y6ZDAhYuT9Zo5ZMhNLLsUKH3hHay",
  "key13": "2pJhkVpVazB5w2WzT57ZCQYBy7HLsqsBXpwNjJm1ZV4VjvbmNnAiFfSHt1LhVqziG9eLKnPvcpufhhn6VUttYBFm",
  "key14": "2ZhQGFPf9AzwpScQB54EzgeRMocumQ2i97ZHoiQCLGufEDYQzJrRhQYosqyvCmSttPrycZg3yvqxvbwmkHKxE1m6",
  "key15": "gHkg67vUJp1BPRGTjH9RAsqz48L8hN4227nrtUWa1ht3D7s41gwF91dfCpfgVSMANxAveiQTLx1GfnsfATai6yf",
  "key16": "2JRaJ2iAdAHksK5K1GJta21BHYvD8EQ7eHT5Ndt7x3xgwwSFaL9RbxNrFJbnK4ZqoN2W82y9FhC2tziGBVo35BZf",
  "key17": "WaxUNWd61GNaAG281g8NhdnEVLKJqNmq8sWmjNv3oi3DZH6HmvpN63UuD51xXcwzHMzgM9YqKhYZandd3PQbFpn",
  "key18": "B86ZADtcMkNSL6zLJ8nvhZNyJc3GweSjmWKvWUYXHXgV89BMB4s4Hn1vsgTUV4RYPNjnd6g6Spra8DrbYhYexaH",
  "key19": "59UFDr5EzmoF51gfo7suQkpaYZAYBsvPLPywnWtHH2JaLznpmidaXD82qrK3ze1avG61cFkBSBvv5QHPDrZdUvMS",
  "key20": "66tePsXthDbhtouSJTy2nbwpSBzfVY7X5wzMjHd2T2HmcUNy2wKy47wt3xGQ8jh28QVNjtiZbkyRwNggDr44XgAu",
  "key21": "2MDV5vbH6jjNELjytvLqVbvaB5Yti5HhNszLUnsJb9LzSPMHCZsLyN8BWLQ1K9fkpjgRXwiRF8hdPQQvBg1cC57R",
  "key22": "284MW4zG7RRvyh7XdgBC9ocoVrMHW7ThsSu1iLCXozaf2EYGzmDsoHT9uAUG85R4ADX1utivDqPVYt9RVqx2a1Pa",
  "key23": "X7cE2dBJXHqCLYP9v8ojfYE9pCWzkTPwJVz9aNkJJcNx9eBVuMBxjhN1rybsb9wVjAhtAutZczqpbXP79ferNZY",
  "key24": "5u7kbkYYK4azUBKG5ZNV9En69iS31A6ojWThr9cTocs1ZLeAbExyXuaWWDkxhrVBnTL5APNx8gS7iWjkh5yMzEBA",
  "key25": "5BspQb4aKrDni6JHyeb3TccdHsVimbs3qw342CHBtS9C29Ed7yQVVkvk9QkTMfwg1aBBg26wUAUyQAfR8i2ta9sf",
  "key26": "5tEKdWzNBNA7KcZHz2iyEMqowfeABtqaskFTKwJrYphCcpD4ggqVCk8vbvYWGHj3uo9kmUUHRz4u7KrYXYn1bVT9",
  "key27": "4dTuyhLkJsnQmYK4BdMUsKySgTqaEVhAKk5SNHwmjkYUtzpnxa2QvUMvWA2VwC1C7fsUn4gCUXQPrC1i2tQBLyVW",
  "key28": "3pqgdgo8cFk9SPDKYHGWDrX15teyQAUEdYECbKF5d5f2DFsa3Zaq6bg4QrSTmzu6F6NLbncrdA1e2wd37GVj3GpP",
  "key29": "49tnszJiNgbGaHQ8QCUhLjyheFDDQX9Ltkr5yxxwS546p87Fd2YsiYMPuecdSpYJ6bxz23x1cK91gpNSazzTbJJK",
  "key30": "ukG5dWztuQsRAZf9PS2upMEGhyh8CoFLbLYNtiSiDjnYmuEXj1KZfjQX8PzYWiF1SfdycVtQR97oJPFZvcaGPwN",
  "key31": "4SaxnQPJnQsmdTZRux7wpwSNosMnZSmN7PQxBCTUXvxNWVHm2izq8buNjh6jY7Zjudcm16b1MTRiPzHdeTsRTbVH",
  "key32": "2Rh2XysDxJKRNAxsLQRFRS4E8gRiofH1ECvqN62K2qQytf9iLMw39AarrhnDNBCzXYEf2UaxUVav1EV5KXyVssQq"
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
