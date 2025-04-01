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
    "3ba2DA56isLr5m6DD5HymmaxkJyvU5tHXXDwkXeiZBXdTiC2ubhj8t2aRmSoyqpANKTbkyxK96gEyqfWUaZCVW7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Rz8Y5oEPixx5oAqXevZiE1N4a1qZkSpNhdXjGC5k12pKoGv2ZYFFsY7DnopoL6NwRAMFXzBTFVq1qgdcoJKFue",
  "key1": "3Tyo1EvCY9buZo7xCyHXrs72EZ3eBiWFcekv8LdrCqSjDpX19mQnYSJtthNrsQrDHndBJS5KV2hAWnG56B2NY18H",
  "key2": "3JqVVrAsR87rafytN4wfWQhnBFRafn699Pj3zU1a8zMfNBbz6st4RJRzvFYACvgFu3PvPJZSp8iUozoa9ZDajgSL",
  "key3": "5iZwYJvJyBDmVYY5rQrD2V8iUNcog6qmmRMMkkBhg4pFG7zrE19Q7k7MwjEG8vwUEkeaHw16vyZ6m8dnTvReL1jB",
  "key4": "126Ymf5AZSnktwnnXrtwz4HDVMLRDsn45icUUAaawiSxD5uYGZtuefitkCuff7or9XPh77bmVCJT9tcfi9C7N4u2",
  "key5": "5BxAzincVvgBvEFYUCiUurVxLmj71Kynk3GBLKT9ii87sjwPKrc777WQMSX8bAHwpGvNqp1enex2ab6P4fLswfA4",
  "key6": "5LkUGbnv8L72WUqrE6GLSZ3Bsdynj6kLEzRrxKNquMZWWn2TyZXVy8aE4kiPKj4EvugZCwEWKkag4bqHGABQ95fi",
  "key7": "4juetBN5qX8LBJfEUka84ryq66wL33JETf6KzqCBvQB2ubz6yP8Pz37LZPDhbRHBURoc9YaK1Eub3LWmteW83B49",
  "key8": "61sNvSGPAyLbc21hgC6oupistLme8JeWFWrqRMeKbFPAgMpnZZw8WQPdKCbc2gCf21jXLTB6sRtxBq7thcNjPNa7",
  "key9": "BGcUqVQBLjUbFygdoxt2Fd6L1e3MPYhgWvmtbMPLj5ocpPfmxy6fW3vxxmrZQboHJRqVDZRshetX1UzbgYdGRt1",
  "key10": "4gvyt6uDCEhZUgudQV8CfHaT2ZAUVz79EHE6Kw2JXAcNteN59BybfPrApze9k4f4mLWGLS3t6GBW8xPS1BEb1v7K",
  "key11": "Q7zFT9R4LemorKHXWDzkA968C1m6s7swCUfdBC3HiA3DQo947Pknd9iSp6Yb9zAbissY7hdesyaU7qvyS8uEYsv",
  "key12": "5jhDFxUsD9TcuwHfzGCi71uaua6LA4TYNox6U8DKQHaHU9pYMVkKA94VTqhSwWRhmDy9MxmWHbrnxgtkh2wHHYoM",
  "key13": "2ZzzweM7JmfjJ6q8z77c9ub2x9xotJp94D4Ys1LAvZ79TVPf2fWMTEJZM4YsXRQuWmSSaMChcxMCesNgUqyoSdv8",
  "key14": "3F73GQwn9jXhFXNtyxL6GE4RWKdoNamz3AqDHHEATwGnf3i8m2aWrq2WbpYSPs1WpAN2dmPK9HGS8NFGr5sRMEiX",
  "key15": "2DFEGrDJJHgn8R7EyauS3dhNA7VUM9RKSqe9dFq4Ve7P2KnPGxHJ57Aj8vKCnUpVXZsW1XGSsvnYNJ2NVJFPzDVP",
  "key16": "5DR7uPXCgdeAwiJw3kPTe44ufoikAHqQEmvdChSnds9hFc5RPC54GNhYT7wPuAi8sisKpTkFAkhsgJ3s3FmtnfKN",
  "key17": "gHCxPuNo7LJ1Y5ddaJgYwySg8rpmPC4JTHT57dcg7EuSY8ZvMvwqnR3c7D5nzuGFK4LJPqzm97j2m2asRcjiBN7",
  "key18": "ELM2e3x1ReDmevai9MpShvmsW999ehcvmqiEgvFCzd4vV1Ag6ME6biavtGLkCmXBENTiyD7ayPtPX7SBz8ArD9L",
  "key19": "3rZbEvcwToXnhqYapT6qp51tdJc4p92oQUPNakZ5cqDSte4tBp8MC8W1N3cqG3ZddPHfF6ENps5cQt5bD3mN2Vmt",
  "key20": "2DfrMQgBuBxBAhgkTKwQDBiSqvpiPWq8Ewymbnw8g5mHLeZoLVJ3XtFpV9UTxNek3t1pHB2W5SBe5FAxcbq2d8LB",
  "key21": "2LJWe3QzYftmdEg5gN7V8LQX8s8LkY4cZC2kaeSrRCeFspDGmRgK4TZeA5sfKEv3CpAiuyXB8QtuGDSDKFt2DPbs",
  "key22": "28Jg8wsz9xihH8r2219EDGDEaHqgagqw2mWRq8V19Z3n6vfgCqmjhrsz9mpZ1nwgDKruPUVEbK9P7Z52bzm8dcbt",
  "key23": "5nEggauqATYdRCnZnSjNGf185CjvFw3cVSQzwhjrkdafhAqUoJaqKfH37hgPtwoXJbtdYvXC497JjzB8g8wkgAD2",
  "key24": "2KSuXBro5DX7NKDVhsHr5MB5LWWcUMpMwxxMU5KXoqVgWM4yUyJnxX8cpKLraWakBXEtjwjMLTnh6FkzfX475h2M",
  "key25": "JYm8cngRLnzQei2xwTULUAtkhqxsNPKihKa9JRdiaZaf1MzUz35eXVUFiNDSuSthiNG6CZevRSAJXy2mK8VopGQ",
  "key26": "5djLTpMiVtbzD6UjjwyGxHvoPnaanmTZWok9SC4i4dR7YNw32ifbsegxbvGr2uU7YfDKeqqA4AJf2837WdhmcGn2",
  "key27": "5mStbngktSpCTXY7mdkdrfcvMe1eZQC4KFbye9BC4ZBqjdBE9wrMNNAaW2QqVLrDDdeYQfX3DuM1X9pHHkoA4Cu7",
  "key28": "3zqP1geTCQ8AyDBq7fPMXgUsSFQNwf5NWN6Zj9sSpMyLrZjDtiG7xvPkQkopVMZxzhNd7cyevpTykLc3GwRnRmPm",
  "key29": "2gT5nNwZnUSKW76B3iaB5NFWvxaabUbAn6oZgZXbsnsBWA6yLheNS5xkGt1ZTn5KVvHzFuVT6WAQUVa1ivxjRRAR",
  "key30": "cNJxW2NEtKaRSZRT89hUqeE5hGSU4BRqHAtZkrt58JSkLxRS8Lqihb749QnHNkbwubwMgEcUh4sWMt8s3PbLfE9",
  "key31": "zbnx16XGrwjLWGhPoK9KA7YWrukDZbQHMQmzXGgD8Wceqm5YF3bfjYvzmhTGzYD5482J7jG9cJrhpQAgzeBBGz4",
  "key32": "4pxamN8SSookZij978sthTLx2oMdFSyLpzwo9CeRM6W4y7iJ5V3eqyFLuwwDeCAkCYe5wjyLMNWqbYmq7wSmGPJB",
  "key33": "5qMrWXqfJTHUVxfqfz48zY5koBSjmhaLqiR72bTDGpTPJ7rL4RdQoDZb2fC6WJQ5PqNUKQWGxMesXoNz8Y45jBce",
  "key34": "2C9SPmzXWuetJzrZQGSYmLe8XGjsLBDfWKEZu4oTZ1AM3dTw5XCz7hinz946Ykyr6ySewsqkRfT9BVFCMGXT7vhj"
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
