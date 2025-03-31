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
    "4mGRoAw2PWitRoxKVBViwbnEEi7iMGhav53mtW29qQpT8A5x1ock1J2HZV8wFP1Ugar1Go2eC6Xv9nLhnrC4tyDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rB9uaSDU3AXjJRUUjyjzZLvTC2eGo85bTjJDpVKt4yoC5EgKhw1UaNQVtmMLPxx3cF9a2HxYSGpRQpCe8iwT1kK",
  "key1": "9q2rKKHqPzjdf53FyNtAXZuZR4MokTeNqoEpV6Awzd62kuzebkswEbzwy1sKJ4HH6n9DHSo1bz8vRmHkbPat3Nz",
  "key2": "51g51hkRPg8z6jwPkyEkvhFfzwxi5JWxZhvfDXSoy9FRDc7qq1n6XHQFPLTQwqVeoCmFiY34qgPgwGbCArt6o8Hi",
  "key3": "6p4BeFCw3svFenajpmbu7xcsfqY4h16hYgyub9Fzu4hsJMRV9scgjJZtVm1kV1NDWNbDoAMWXoiAfCpzrzivso4",
  "key4": "4vFbgJFyqyharKSngBaEvafG1Lod2mHs7pVbuZivDqMpK5AH3v2E1xvvo3tPqdbX6b3DzU5DJVM7yLJFetq6VQeS",
  "key5": "5uuUDt4uZL5VuGdnqjQJxZNZXiWFkAXEGii2QA7fChvvhBKZLN7h8zNBhPCK2R8rKNm9uMXVeCqdSccJRy79Yd3H",
  "key6": "5FsqERkLPQVnE1MjTRnppBMGQc1sUs1EhXwM23LQkif2jYsTxbqQcEQnoSRkVg3wCVccj7WhG9n3B2F82bFzmoCW",
  "key7": "jXaivbx5r35f3U2SDHDDwwoeSvRZ84Ybb3JB748U6HnwYez8ApRBbgmr9yncHgpycQ3bqQsrwDoZ3FMn1c3GfPP",
  "key8": "bciFKbnkhqgTqaDp2VaopPwN9LN61A45k6BjzpBxXkDPnvyGjoQV5vsNkxY8P239YiD2Lfojt76D7fZo6LqQ8rg",
  "key9": "3tqdAqVPyBn4YHbJ5kE7jqnJAW86nY5grXt7KRtyqHUZAvokvB6TX6CNQMTzHf7zQziDhepgY2i25LuKLa1teZEF",
  "key10": "4HHhX9egmVXtQEpnkjZUHDgSHrpCpRG9a5onwe3Lh4b8eGqY42b4AL77cmZ1FCXXUToWHGU62QmNnwSAQJjmjp5u",
  "key11": "5UG3i6YaPcRakkRahnCxX5XT7smdRUAA98qvpRGP9qy9B41WZpLokj8g7AGSh74ozwhAaFkfSEGyNuqy5VqtcJfb",
  "key12": "4y1JLCPzrkd63C5sNc4memffwvKoizBZqFHsu1kENpQdNEfxWoQYiKBaTk5MMWWobLE1PVnSTFVqovKo6JEapiEy",
  "key13": "3GuqEGr4cFfFgd6LQ1JQ5p6NgKTdzm9FreLYwSy9nR6GnfVABAbNvnfUiyTDZUxDHXzjvh763GnQABwbp9TYnvW4",
  "key14": "4Lv4J7LUrdfzrDZWdn5aWp9qAZrET5Ut2BasZP8oH6KvKsEf27RAqqfq94RmRwK88R8KHsbZd9sdUrKfaAWESgfc",
  "key15": "449mT5UnM23V5UdH1fLKx4sQ278MedrKNWVqmV7GJfXGNc3pWpxuqHm14XL92Qk4dCrGxGrRgo2hgaWNAvsr3K1N",
  "key16": "4a43goh2BYWgzsmyb4uNMxu21kbd44G8H3ovyu5RhfD8sr4neGgf3hQYLMZsRZBPSKxH1UVEWyH7QVAx5WCxEkQ8",
  "key17": "52BzeHn1aVPPRKNricQ9XehBg1AG2mXZtTvB5kVHiHZBbnYN1BNc878zpoohkxabgGTaXxddKMPfLPZrAhDrPxdd",
  "key18": "61hmozV4gWReu8JSDtsLSoE9aNd5vigqMhmW6DDbabPy3n9nZJmxvge74LhLL3PXpKtWX1e7bAfAiwikDPaAaHQx",
  "key19": "3PbMH1XWDDYmTpuBU7NqA21HEDnRTdEbkYLypKHhfcfoxpB2hgEGq3X2MDgBjnrXJezsPYJZU2LHY7iTHktdA3g5",
  "key20": "4k7STe3mBbdA1X7JytEc4qxEs5PRHiVx49aku1vHKgkKcqZ7TQF45fwWnVyEzNJ6vAgqSA6i7RE2Na41t25F3mhp",
  "key21": "UdafRaema1yervrcSCsFbZyzUF37fZnswHUed4kQuQuRyQ4ei7DhpJNU9RMiS4PEgQjvbVWfRM4JZTaVxHKNvfa",
  "key22": "sd5Zb3ZL6o3EqYyGABaMBLrB2nWiovv4kmUrFFVfQkPMiskaXKXGHhUqp1D2zZjK28Gp1PJbCUJrHrbFnGke5Ez",
  "key23": "2yML1wceCVzhoNvcy6c1ju8oHYt1np8rANYvJTwjriL3HdKE5zxD5UVMtzt2sqkZWt5S9UrS2jeomYvDYup47dW7",
  "key24": "hULEGeHd3oEnbYTDM16eoToA2uvX9NvYL7d6Lg1o4kQZ7H5w5YHnHmWkahuo39fyqjV1CtFRv83FazjLy9HMHSX",
  "key25": "5WnHzLgijFd8zLGXZsxS7vYskxh6B2XKfAcs9wxaJj5td9CoWqPG3Qrq1npt6Y2fByoXBv6DdJmcrWvkySayGT75",
  "key26": "58UMDNmQDhSmwMUbDGe8jSRK4WM6NvL219oKPnWvH3eJh1fRtvHDrpsEAQVeZYKkAazRuUec3UMbzR21YViKZDAQ",
  "key27": "3sgDTzkfA5Fkmift8Law2LA9EDPpy5diXXJuXb7ohoj4BaQFB7uYGe8APXMAvptrkkA7Crqsf82rynf9Ux2XnUwU",
  "key28": "5eVZf3fKjghmcEnayjLYsbn77fxgELPhriomJ3e9vcWuJhFUW2vz7uztFJ4G2ihLhG9EKRNBzuR9LvKH9rZhJURP",
  "key29": "2zno2PFnWiXp4n86ZUfBPVELPHFKweVD5kvztFSWRMnMYCU8xMTodcTj8DYURPYJrf99XGPuAb6A8cVg3dND3R93",
  "key30": "5EtkKyJUp7C3bF9kByRkZXscZKpFLPJaDGFBXmtX7FEgMNYPwh8NTE1dtXSZ8jcSwfaxvcgFPULsgsjGCWZKX6Bp",
  "key31": "3fGwRnkB5bkVEh6gwTZpKZDpp39T6RkhNZyEegQN3bpYQovkEbvnNe95vN3voCbruDGfFiMzUfmPgeKh7RykPgfZ",
  "key32": "YbCPfYE1KGe5Svqy6SHKj2yv7MGxvVSMqbw47aGFTpPjyCbrARZGw9arqdEVm6QXjvVz5pLeeqE1a4yJ2EdrdyK",
  "key33": "27gZnEMCsq5grwoat9C2dzysFCgQaMsSBUdVxXYyn25ARdFctg7doMFTk1rsBrEcG9qZEMNV4fC1piTkTWGs2BZT",
  "key34": "3cYEUD4bX2bR588nDka8ny21zLzM1p8hGWKKP9GZtPZfoTrptLJHwYZgo8JGFhmu2acqs8gHMqncuXzZPRzuet5F"
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
