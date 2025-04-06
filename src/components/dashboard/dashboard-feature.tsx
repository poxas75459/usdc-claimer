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
    "SLhDdmfCgK18E6y87EKY6VNwq5P6G1pA3DoZJxTsC2z6d6reGREUmxmfpPppaqPiNMZWL1fnE4AyfqdA6WoKHDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yUStYrZZvHufriESufg7KEgoo4cKv3acAdaDhh7WcP8DGzo5nb2ePQi36AwQeZSbqFzXzgqeQSSYirUzDpntPRX",
  "key1": "4n1fSm5m8N6fAM9UgXpJp5MNHgcgBPaEWaHHwtm39ypKrz4TTyKHZjqWw8NjhA1eCYuiM6AAjjRX8paZNJwjPV9i",
  "key2": "3b3xR6XeRDXpPsyfaNJijn12ig6HzPVrxgL4muAw1fvB1Pm8FCnRZsUhe5iSvShBwMqX6TPZrfnUdorB76Di5DsC",
  "key3": "3fHmLQhCAA4EQAFWu15B5Vjeo7oMBjyoqzW9P7cHNTYtZXh2ZnHUB5CKueMJVGiLAsjvyKedVaVZELCXUe2JZ6LF",
  "key4": "3JqsTFsst8BEa9sE9HzMGVVRmJK8B9R6vDfPSJVswtLvdo6yaN1WeAuxHLNS8gSMfUhrga5bWu8NhC78tpPcQeyS",
  "key5": "54wNL1MaTc5BYyDmBBz29vENbezojqwc6ax5gQv1PqGEfQAheoDfGFtAr8uquEnd4V1YH7aZc9HmG21i4reCpokX",
  "key6": "5NPTHexpAs4vCe9upobp4wDJ8kez5a5iUnK4rhV73wBft8XQcbDQFM5GXT9MhSy1PzyMUkTFq3Gzr1XQM5n13H22",
  "key7": "56M7FAvQueKWBTGbz6Rp3AVLsV5b2YuFpw8LP25Gn8QvYwBQzWgozX93asgdX1NaGHJ245m2kDvBwVaxtT24ucnE",
  "key8": "3uk7eZFddWV8bjiEGXU8By5EzuozaF5NvHYMDuZEhQ4xc3Vd2mHpa3RwqmnWgf8WCKT4AUhECcGLkVgSMiHzE7Qi",
  "key9": "Qzv4SB8naXVXjF8QwGouSUkUbmncGwuUuYAcpKYhTLLwnodfP29RtbXuD1GVuTyibnRoVoinWfrBVZ3HBqPrbPr",
  "key10": "zrZHz6rW6h7jx6N4nZsP7U9U2yv1AfNYeYnAY2DDW6cVXkCWTJrCsjSXPsyrj21WABAUHGSY9gqyEoQhxN846F3",
  "key11": "49xFg8MZucTVKvAktvzweWCPW5oBwrFHF8G1FHBZvttiJ5LFbEfL5DTr3sTpMBEksHVdFGN9VzYa9gnDRHHPdhEx",
  "key12": "3Wjd6FFfCENsdEzYxs7ZE1SuggWjT1ABFYDpbEGHwu2DGJ8qXTgu8pi3tXh7nmy98jH8o7ta6j2BwWThsSRH2RY7",
  "key13": "3CmQ3eQJECTYaCFcLPXmpor1vrpPdKNKwDxfVBHLN3KMsyd7LynP3HVnhLtyg9FWSsa9H81CiUqpoWmsTd39ofFe",
  "key14": "5wAZFKw3FCsDvCHN1dQWfci8U9UcdtzF39X1bE6N3pqHyT4dVFpD58ck91cgbosjUScYpAoms2cwNU9sj1hQLH6X",
  "key15": "5Fxtrv6T2txhco9y6TfAJV1oWnDU4EqNYzXLdt8Y52yi3FeJ69pxwgw2M9KA3h5of1vwEqcoX7NRcG7obsjQYa3N",
  "key16": "3d2MkvpUHLxhYovoMqvpvkQqKh3RE7x39k4LuoKKQNpHxeEQ1McgCQgKsWLe4nMPkuDGgJHnGKpLqPQhdatVUL8y",
  "key17": "4TnKif3vtbSuV39vYjvd45wJc4hut7sNMH6JvUVNLfCxYPr7e5zNFEz1t8LwX7dDohhsTMTE7uxj7KhRUoKwYMoM",
  "key18": "z1B65MLPjqWMzTP79utrc3EeTb5HzdYjKeowNmxYNoS6pmVcBfFXJD9avYEdd3ofDbxyJN7DgdGGbGGwpAxzpzG",
  "key19": "65Xy54qwGoGo9xvnetMrce5SNifzz73WEHaYw3a7WPEKKy18NS8cfb4QAH4tfm8WFKtVPvTeCZup7g6sWDvREiD9",
  "key20": "5T4VWTzt5rXgXfAZ4zrLAWQqQ4YfSUXYBy5nSPFAmjbdTkU58gmoGbDqDgAYG5YEmAipg6sJzPfhUtbak54MAy9x",
  "key21": "67PUcQ7XNZRnoU5DTKAYJ7La3KzmUNCvpFsFx1RpB9osf8bCBTtcQY7R8X9XTZyrr5zADy4eFTbWCgGfJ4PW2nki",
  "key22": "4jKKm3WgWHFr8WLx1J22qYWVbJ5y2M3FQhDUcoM6vjsvn6RgsgJbkkZQLr9YKTgQwYTWqmV38EKCFaKJT3TGhDLY",
  "key23": "2eLYDpmiSX8gHA9RW5bDPfHCP5igXG4b2dgf9ERBZ7rSUsMVEcFhj6mEq6HGp4Xg1KB4P9C3trPsLnXpxfnQUbBP",
  "key24": "45kWw1nfYNxbinW75BnAK3hxX2qvNxKF6znT4EZW621kBDTs6pMHyi9SziQ9vGxbyT3nd8S8Qvpe5UmcJsQSoHAv",
  "key25": "2sJHAHLwWZSV46HVHZqpfhGyLKEsbPb5MRVoPtBV7vBByjqnSCYccNPT8UmkHo4oRgJGk84Bk3wyYKSAVj1s287E",
  "key26": "47GVVy3eZCG8fNv6iK5otmbpxr21w5VbGEh5JX5HpyuFn2NPWT2Nx6w74KvdoxaoZjQyXXEGms5tznpaQ8LKynyc",
  "key27": "4Au6iCXavBFkipjUHzyUDpfDRtseufwszMdQpXV6aidZMN1bPVQxbm8jPt9AV6cgdf4FpHU3Z7Qxv3pJDBygtikz",
  "key28": "3VW5PDnSGWUEg8aHpGcu5iXoCTu19JtZyBTSWx5VQLeMMALdhW4XcwuEdd7aUe4oUGsXxN5ep3hdYaqo1AjLg8cT",
  "key29": "4Th3a7adwYvqi8HydSfbiTHjFiaVC94kWNNPU8izdVsMCBv33xQ5A5cZPc7x16gTVPnbQWSnuvWfYfJqqyhUexSN"
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
