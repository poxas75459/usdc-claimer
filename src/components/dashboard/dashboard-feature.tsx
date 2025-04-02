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
    "3645xoEG2QGdJCkMt3GzkCfnBfesKDTU1a9L6Yqe9c31RJ256uag55BTiFA9jyea34bsjEVR55iMc872CxBW5LWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vg9swg5MCwZQNjXG8ehHMnpV7rYW7GZ1HruyVcAGZqkFGK14qHxQEyrRMtV3JjjPQ8FyxkKPdJ8Ygofg9Z2edkh",
  "key1": "3ipedL97mRLBUt81Umnt88CeF525KCEs48BV3pXCJgPjpLNvsrr9saAff2hwJx2nW9oGqnwHdaphPNCTyPSivMt4",
  "key2": "2exs4NfKLvEH4iW3yzmZxpwoCz7sx2xg5b9WuBPQJdF4aERPuQonoxA4PzACpmAHpdZxdvEWEXJwd46s9QE5LoBp",
  "key3": "4ey9fKntpyCvM8Xjfib5dvUSUr8nA7m671jkGMbQzcaHVrXavE8ELXtvUafZnsU2ZKfJvm55YLT68T8cmLeZDLKS",
  "key4": "3yoSmN6EwC8x4KbTVRohJhPief8Wnfs669tG5yKpLKAUwfirZQAWZgr21j3xR7fGMxgZeeeEotGQADSFtcagv73y",
  "key5": "Ep5BkQkmiTPNAaJKS1LdjUyBuVsmDPFfcfxyAz6kFJ9q3izKBivJujmubb7aXVqaRfQ61jH4rCZTkcGv56TBfkz",
  "key6": "BaAadUPPu6MPjK9LkqZgWmjstJi2vadGNFBJwd1c6wAKugqBwFF4pvsfCaCetRHPBU16Es6QWUvHgrqYyEDREeQ",
  "key7": "3gX6iCuUGYtnEcDqfDW4bP2muQnpM7yhgRQKcd6F6nEoXZ8VQV8YjcAV7SvWN9aJctHoe7xEzebcsdjr5oCYPSo5",
  "key8": "3iBFyjG1FNZjaEi6h5QefRnQtDdzgwWcKXKhiGrHGYCe74RJDow1hZqcEV5EkxRoqmmshke7iUQw7MJehoJNogC7",
  "key9": "oTHYypHmTvKzSFamfVUNV6n5QoXPWsW3iDqz78xHjHVy6Lrj8gMHm5HZMiRL1Gi8XYF9TvZ1qER7aDJ9Fos2FWG",
  "key10": "3gmHDHHbzYoHQBePsnmTbNRP5rcy9wkZkwYFi1MHy567wtHzjUFfsR2PCmqMmnYuNrPTytyrE1rMsjEtDY4sr7DE",
  "key11": "2FFM8w4t2yN1XWNtxEbrqJJ49yZHR3Pd7nE4Fir2pgvAUiy4Cnihpcszz1tceK3w2xS4hjj6oyJkr5mPFR9Qz49e",
  "key12": "P9XBo54y6xjvwQoUd1yqcXGYnTGqN7AM1wpvE73cddtMH35aqueQQeZjJJH9D1QGB8i57KXZ8g4bhDhVt961xZd",
  "key13": "8HdXrCxrCNP4jgpySkFTyQpNtr58ogX4LaYmkctZgtBbTfmVRG9dRKz9JDuXXcmCdgZCqUUUALTAfwgiBsiP988",
  "key14": "YuWqVQWiDh8U4pPvwZZYuSYtP1nsqzrzUwUUMNpvch1U4PRiTkKVd9ViTcvehsQdcuj825ZMz2x3H2z6RmMFiCV",
  "key15": "4BB1FV8xpqpY9e2ka512ZWdmcVSLtKYAi9cYotjTsefQziwkDygz7UnGCjx8dKfVpnrvVWhs4NKKUuC4EDD1UqVV",
  "key16": "U35CbJ2cFb9AiRyCiu6rYdDyC1xZLfSUtvNJNXdMAbbsq6TAf1jmtEbDwZkPfQdmGm4JEKGuKB7D5HiaSjFPJ23",
  "key17": "5UR9e5fm6J7AUDMRex9tQYHsuUj6bT8daY5uiwSUrjb8q5EFJQ42hksiskdaaFVZSqDq66q3GLJVb6c1bmdH6FXG",
  "key18": "2uWRCpp5e5JrpLrBNLZpRMzttReXt3NW7XhdXBZMjubjvDAv3b1MP6B5YzEwWjPxKUnHUeXGhqzAPh6jZgM8oHfC",
  "key19": "5Mx8u8VLdN8MTGLiUP5bkqoCvY2F8jsjhmW9y826LgArjwSNsocKquDN9dsbEDMkUCJubsvP8g3zkUSDbMJfPvGP",
  "key20": "3PqTRUHvLA5UH1bjNsJg17jyYAfTWQZd2FpjbDGVrn2pFRfrVHB5do2BQUNrmLEpWF9cypmRCvDZ7zaFYRydQqmA",
  "key21": "4inP5ckaZnN6CsQRHvqB15h139qdR1ckcos6A4ctUmVGXTodBVhVxZjBWVKiEDQar2fDjLPerxJYUoXnQaVzjVWV",
  "key22": "5oHSJq9YNk6H3zq82QmQArM6bJPQCBtzu2m76Mzao2ucu2Rk7K6W4P2P2UkD23vGuN5diutwTdGd8QdSHjciBjMQ",
  "key23": "JmzFAFdLTVEtBcAussXCwHcYtMT8XVChyvhBXB7ruRTjR8ojJRhAHChG7B6YP6oXhdJAqbZcVEkfYCWsoNpYzAv",
  "key24": "3YYWU7HryF46RKCn1YjepX1s6rVrdUQ3nbLGeEHgs9nvZVEpGgDp4RVsT6PXiECxg4X85nuc4kBJ8DffxjTetCg4",
  "key25": "64rZ3WCdarmfVBhnvawV49WB24ugezRzCrVEQLbycGvSq7tam7o8hPTFuC4m9GGExxJ8ddwPceqAAEMrpy9GoHsE",
  "key26": "TSy9sxgYEjQXf2dxPxJni4zA432PkNhyY9QUWynQAjdvG4YoKthPeocaiDRnzq5HMYGNJHPM76x6Yty98rULQQo",
  "key27": "3qxyiEm6hJojS6UGmbGsSGAcTqHLkC8Y5LdwbTLLPWG4f8WanwCy9DKMsnKjpS3TQkt55jcoEeYYz4ZzzPD4GJnA",
  "key28": "56pmi8CtfdShRb1qU3SpjCsjz9fHHoDM8WRwmCAEsQYbDivSemSWQm4xNBqzUheSJV8nS7q8SnfdtAR9qpAkYCrd"
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
