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
    "4Jpb6YcNjaLqw3FCySuH2yWA2VZE4YejfaaHV8zDrzAbAdHthg7MkZDFG1tBmzoSXrpDbtwDyAtXtUjqYfUnHtYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XdGVcgPqsdt7TvgiMwmPNwofCNcSe4SqFgkNPhup8zp6t796mZcFM9QY2yFYcEtzEGZ29Xx4uasogSs3KTjdePP",
  "key1": "kCd6ouyoWmAPkWFGQRMEEX1TeFTJ87LoEPgYK4U7GYkyxEtudrfXAzk1KBkzgvaf3738i8V8KsS9z1goskxwyKw",
  "key2": "4zKJup4q9zaCWV8PhZwT5nCkwtLQKUmzZCk2f98ZtYzaMHwLJCEW8VVMDBf5mek3fkDE6gRMkZdyw1saem4A14KF",
  "key3": "3wLpcv4MsMccLbwExeFFWPpEkFEAupn3xnKnC5JPQ49R4uwiP91yJR1in5GPaEMvBawYW6pknWyq8wWZSTGoTzMD",
  "key4": "5q7pwXGUQN4UqLoAPWfYDJ76v4SCN7Jy9W1UWr5wfatX7mP2XT9eGqJ9CFWvU9aGTveHSjECdk8trBdrghMrZV6T",
  "key5": "98NNRiXWiEjma1jKVRQNFLPnWpZfTXgcdz8HG56cxHxhqgaS3DtRRRMKd3i4xGRiWmNZ5fv3pF6UWvWXo9196UV",
  "key6": "4oykVABjCYM3jhjzwgdNJ8yrTVhaeCYUjSj5aJs2JED8MFXkTkfeZyNbvwnMuxnXSQpzRdS3fM9DCpyzTTKz9MxV",
  "key7": "299SjoZZhmCkP7SAHxGHew1v5DnfWgkGv6UN2v4HEFRKWAQ5z7C5DQNoJNpL2H9UcaghkkuyZfDdNRuUKg5g2Kbt",
  "key8": "2CjKzqL4zAfYgL3CEmwSZvwioAMw5TL4DTeup7NEHvq7HrFzMoZjcoxozmZQWeb5W4yU41C2yTewv5mYX9QbqsBo",
  "key9": "3ZnHyAxh3okTvCZ6Yngoce4486FLnnENHmNoCW8RSkne9U9QKHxedAaWmNhHxCgjCobHfxjPLugAFCh3v7Haf4v9",
  "key10": "xyQ3FewnKzz1WHynSbsV57WxuLeztj8Sjs5pQfnMYuRkMaictEzNsJpLwEaX2bbaX9tA34P25ZList4qcqVXnoR",
  "key11": "QkrdjLXTdKjb97htfn541N8DrdxbtFhNVCnzDrpo64AMmJh1zJXyS4tJDTvhHwgcpj2TuqX43YwqRGnUm8m3wVg",
  "key12": "3CWQnVg9QZ35DUmpVQbzrKyZEhzEaGGNyg4E7mXkTjnt9K29sH4j6rB9LBfGHLxQAGAVJ2UuDvtmSvrYETPsbW5Q",
  "key13": "5bAtxrJ4kTYfdkXanCjPC2i45KdygazXcmkYgUnkeoae6pk6VM1GZH1fXtHQgdbjLAf27BfvmFP3LbTcwdgJ9a6C",
  "key14": "5SeVDnvRB6n3EiZc6qSFdBkr6NNoLgVaXeReLgABNnioHodVE3brdDKF9Nem5aeNCTZjsTSmardnH3rJiUYx6Zxu",
  "key15": "2JhcGd37LzRTQNENL9rkULejS6vaTNNvVH2vN33T2BSu9Yb8BoCFzdqhjkstsE5bPPNAMY5ajmzoBGcbVEMNKAsZ",
  "key16": "5q2LWw7RN9bMANvfSpyDW3yc6fca7oubza22yyw2ALHgiAq3LKWKF5Be97i7xDGYXowrmNJGEordbQKumM6n5AXh",
  "key17": "Dv8vzupjgBpe5NL5cmhmr2qj6BYM9m1GxGbBYHTbzJrohjJqtowEyybPnTwBpHKRSTY8TzDqT3QreHwFXr62dJh",
  "key18": "2FFnZeSfnnp6gy1ifWhJ9EfMeEqQXjSVhmJKf3iTGQaqQdAUyDQ333jxZ7aYm54euKrLggMu9X1uccR4w2wweaW7",
  "key19": "4RgZuAbPht7STcXCS2nUaNF5TmRbYq9SqhghSALCgttmRugZMLiqdR7njrkizRTvdD2a5ziNDhBi4FKRnGrkoJqZ",
  "key20": "3PDTPwXsSCVuyPQfbAhAN4jW3k2URwaAXqMNW4pTBYQJEGd22QMWtK7U1hCjwENuVyr7aNuj3zZg1HD8PeLDvdpz",
  "key21": "5CG3XdoMeK2dAa6QE48UkrBJpau9DjrVEJ2Vv7Smz6sHH2jQBqRLnDr941TmPStyb5rvHuUmuwpYXprGDv1WMHjU",
  "key22": "2agBJRPSyzw8q48g8752374UwHX4Qnizpg6VWnWvwg9YzPidwZLGFsWRwxR8zeojsHpfvyUqjLp8dmmHCgUPTGZW",
  "key23": "31bVexpK3ppbJibDEBPUF7Hn5Z6FyuRD1JfFX7ifr1FJjp32Bq176rcxQkxDUmY6Ye8CdB5LHhFuBp3hi9SYCVR6",
  "key24": "5VPKfP5HM8iHD95sAhdqtq2gj2NUFXN4c2rDgrQ6zpJJecrLJ6q9dYKHggXJJqjipsWtMvHW7zxV1SHQWw2wnZLY",
  "key25": "3d1nXctQ2HyqtrvzbxuoV7QXKwiZ4PPRfGR4bpaUti6fghx9WLAdhdBLc5CKJJopjRgnv2FXPPshV1RwgtpcbSTn",
  "key26": "3pQzvGMvkhxhriCWJL3hRLTBaAD1nXF8dTUAmDQCL7SSXn9G2HfkTkkGuMBmL6u3nYatFiDaWwKf9FEN1EHEwbXx",
  "key27": "34e9xnKAE3mTi2auJYt38X3DM7ta3XtuZCkLBYqysAc5fdewsZQHJrFY67GfEXktKZ8wEJUJdBMbxoGVTUrWCh4d",
  "key28": "46afVn4P7msZXhhctTugPS3zJeoKTGbPLQHgA1M9mgG8fCvGMfV5jEcT7cWJBGTh6NcMW5ExwT6P4313P5hJVBod"
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
