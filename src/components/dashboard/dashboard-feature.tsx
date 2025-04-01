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
    "4UVAd48Q67SucAQ5ZcUch3Fp8AnqffEAhCPZp98y6zaK3ENevaDaMXU4wAPKnBj6ukBeXn1y4NWvaegz8XciQTyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrx2gCZqoXwVWwZELgtGV3dgjpH5WB1DvbDjbP6p5f2hDxrPfEs2hVuQhko7QmR5Sbnydx78XNxoUAXESXA6aGY",
  "key1": "35sWniYspYrgsdpcWe5qHVeGc2fCi33cRqMFwxP7CUgpGJQwhcELAW8ZtD2icyUkobp97kaZreEaUiQkHmE3ochF",
  "key2": "uYca1APHCFBYkGvwUmHvhC2iHhJvtE5uACcB1sagsDxEwd9hRsiSDwkVEvGpjvqXtAwvWSUkH5SuYbjQ28vnGLS",
  "key3": "5dMvkSaBjHezR3pkM9bD9PncFaE7yMV9MA32RQQUABFWMqXowdL5c5pfqJ8SySvBumfLAo5QYxekUwJ6TEpS1qn3",
  "key4": "4oZvPHU5HiPHBc6G6wsZRb4K9xYp8MHFex1AvhS4no6f53ARus7uQ6JwwgWvEGJvTYTTaVKVjiBQk1Z9Y4SDY4jp",
  "key5": "5MFEU8TY6RDDjCgaffaYWtfhZYrJ54xX3YgFXjfvUGZvSH4pvxFaRQqCzFdsvVjzu5N7bcQgLH6owrMjxY66LWhj",
  "key6": "3aGbZXJRzNKjfT5zFmrdXMnhqbVrbpFVtq6A9ktWTyUV3bSXpHi3fpzwMEkTzne6x1xaHtsVgDXkL1ebuT4YejmV",
  "key7": "5GmwMzHRDvhjYQSQegxkKLCFpTm5gPs2vDmYjLMTHCtFE7WSspdnCgvughthG27xizqNoK2t3m8dKu4oSCFFPX8D",
  "key8": "4szQHXT3HapzQULuyHND7dMx1rQkkHv9E1XgwyEtrocqcPfPY4vpyhYumuGNLiQxarPaXHT8XK764BdtEn4yN9yC",
  "key9": "2YGeL8k1ejtqFqjYZ8ZNdjmc3wV8pbvkpytekSyanyESGz1DB7iMe3r75W5tmFxnP9dDBXuTt9Nsc3TvbJtwjDAR",
  "key10": "3eChXyFG1Umqb26VGZxTuS7pWbn8AhEKASz28yvKWhNqPe8KNs4oxkjFHZ85Lo8Y96czYTJLx9vQUerw4QKmAYP1",
  "key11": "1RiiyDNtc5gLYEgKrLTzDvcXmXaSuqSBbna8ncf9QzXhmEVrb8cPB3LtAVz2B9T4P1WGBGXxpvHeWW85dSskjPP",
  "key12": "Zby7fE6mHHAtXL6fePe1pLVNErNKex8L83sBzvY2Y2icGGfgcEM1ZJuUBJ7vCDVtFuZKmuPsA5kjH6ejGtLiuEL",
  "key13": "HaMZ5fgCraSr7zmFnLeKerMXWi9y6nci5V37JE7XWjHGNHkTUpyg89kd4XqvVSrcYBV34Vf3bBbj9nYmmH5ne7D",
  "key14": "2nXPpF9P1Dee3LBJUjT29EPXqhZ2jXkhSLmqAYbZNFYPqinNXQMrQNFJvwdUQhB8U8kXwdq7FceJK5NmrzzJGUkB",
  "key15": "5zhYA3ojvMoy2kC6cNpD17TrDT9eZS5wKAcsmHLj38VfSg3vgUhgXeSGuLjrkBVp8i1fHKphEue7WzEi5NTSGq61",
  "key16": "2kbN7sZXNBZ3D1xWkTkQRtVjTrbxQuFx6h4MV4dKpCKv3UW7DZ3EkAJMNRx35KNt3B4i5oGw44SEr96LQXDHuK2s",
  "key17": "2Dp2cTjR2SiimQrGghSKdtDX89omJ76hFxWAP25kmSHSkHER48gjtUEpNCjTNiUSvaovv3r8hMGdJFM1mNv3oz48",
  "key18": "31ntKT5GiDm3u1Qwo7Qe7CiELpvpnkd2Patbtzs9gapz1w8hyDVpGZ89zknKUNihR5Zxq18TxPZv2unfx5AD9Ywk",
  "key19": "4kq4ELttXwuiutFzgxXBAzWQRqhCwC5c7GFwgkxqwbnhFB3jtPoZHtqkjZqKRe9fd7KGAXMCt74vb2MGZqkzaZGc",
  "key20": "4oxmyPADP5aE6WXtjgHENxkraJB7FtrjukwSbUWxRHFXHD3wXEEpD9nqnATFdFSw5hESgpEDhpF3kmrVb6PxADNM",
  "key21": "2NxpXdYnnsc1p2HjaRpahbjno37jQLrYedyMYve8ehrpQoKrevTwXQ9Zhhr4bDBJWKAYLUibrHPk8eJC14t3MMiF",
  "key22": "4zPmXURoEcXXTfpHchomPdQTyBMMohwdfvd2wqGNgepB7vkfSXy2objy2mauDtPv9dGRCuFQGFkuPkbQrW3tn4F6",
  "key23": "2kQ33U8Du6wbhcWHrn4eAK3kmc1iw1NNjfCaYqyyeYF8RWgYa8bmivFb98DiKhzDKs2hpzmq6Go3VRJhMXvVeM1E",
  "key24": "SH9Tv6P1yir3YSoXTmpckazcEvZchxAk6f5Uw7ZwjMxyqJ84BZJDkb8oXChas6VNSimTgtvC6Ai5eo6qWrj4Wom",
  "key25": "X9tCxnzYeSv668bQoSW7kKFCMuU3kLxUeom3T26ZfGuF4BKL9bEN9dgmEz8dJZLMYaZdbWczc1iqq2jMR6BBNN5",
  "key26": "4tt1fRfLJcCMDxqCesYewuhLZNPSk9NPvF7EAPxmpgxVh67iAL2RjuSeRGPSJr5xpbpgQHY7vEVzPpJZvv6koPN9",
  "key27": "5rLfFTja5zhryx6McYPAfdJ4kyHNTKpdWpdLabQVi32nEbptZjnEJFWKnTCq8YZWDbBsoePJiWTcejqpJvgYbuWi",
  "key28": "3KvPNcMWoFey8gP38oU1snNq2XpJeDY59Ch2Y8fmPqBsLAciFoLR3DuLamGU2BV4NwSNz6VgrxNZw7uHktRGYC11",
  "key29": "5cHpdLfYtBeJgzrXDjg998mgvFSwegvNmL6DCY5UjAog1UCwvyAfTmTfbS4FA2CT7NzCKWTqiSc2dUTZ6N1YQDRr",
  "key30": "4Dk1PT7rhpqRtQ9BfQbet3GqaaM5iE6zeVuQoYUjLQbaXGiiC4TEmjygKESwxtXo8FcAQPZXYzLZE949GrqVDZgV",
  "key31": "2mzyZZPWZRHmMzn3xoQWGztufeGaKwqZ7NG64bB54P2uf7untnaNcw1SJnNdKEZJx6TH4JeMXUFh8a8ffoFr8MYi",
  "key32": "5RTF3agfv9GoQyzRXemFg6YQwX9p9rqkeWmy2GanTwshe3fuyeWYWvCwwVueteyrSYBabrtkpXXGSee7TwTV9zaa",
  "key33": "JN1y6befwQQVCkfopqzM8r4vWheb7HposfE9tUVNFkpDwb7Q6CMdHM14mJqxr7HserirWTkGFmQ17aqbvMU8ep7",
  "key34": "CqSxnQjtN8NzyJWbxNzTiWNUJXLXUjcaKgyEbuG3G1EE8Xqo4fMmSMJApGeqFNfUd9595oqSTksa2FmTTAuzcPg",
  "key35": "AMEGNFYXDtwp7fRtS4M8C5Uz4pkuZD35j7LJ8Do6nZqzPyzjZdwdk5jzR48sBbdkGbNzX6rgiDJmCP2WZvMn5pd",
  "key36": "5syvg323Pe1M4xseyrHVCYgofwbfwgWaYKMje5w19ygw6HSXDKuSRJZ2UeiD4grB7perAtrdzW7ijB7LSPTBKjC3",
  "key37": "42PHSZtGeYXb3QuiVa3YYHFte5CSZWs1UV2dhW2vcj7DzQpXaQdwPnv5N8A7qo5tpsMLhEKLuYWMrKHvBQ8wNeYQ",
  "key38": "2mLUjEog2kmAdUuFiS71TCppmKVjxG33Y6bLvt5s8LmJXZdssFV7h1nBFQmyDqdUuL5bpURWjPaHaZ5RVEhjkXkk",
  "key39": "B8jFfy95i7GpwqSH1tsyFcP5cpU1uCPxh17vzHh9gZdyRS6uPBcY5TXFXFXnmp65AKC9nznTcR8CaY12w8cvVkx",
  "key40": "3LMecaXMELdFyB6esEVvX1UfHNj9xBfVzhztARd2XyY2pcLCz4qWBr1scBrDpnx4NZezEwFBTsVK8jG1MCohVdAv",
  "key41": "2uFAPpPRK43YKQfH5DoC7BhL5foRX66ujhFji5v9ZQZJKBPJjbNDNahxjiYdSSpVCiXzMn3PaWhvJbkkteqiUXNd"
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
