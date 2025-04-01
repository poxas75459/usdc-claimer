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
    "529EJGAPxE17wttqjRXqDzcvZZ737Sx8hEuuK8whbkREvd76nD3Qmz4QdxZELxzjiB3fMPfgijGKYKgS9EjmBrpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64CAo4qQoStGR3p1e9NWGsZx3bJQNq83UuckEUFED6XS4ZdCbSb79QEVnXuCXj9M7qzyYE82snRHQBknvioNJG4n",
  "key1": "eSA9PePdj9455mPnVnmYg1zqpDP2GRrKXgawZH2eg87vng8YbW5vUEyyeq5kjU3vSUwMKN9nkTzqN2Lb4HTWhUE",
  "key2": "5RbDgVEygmYEvMmggqPpHo5KCRXwDZAmWiV445qLkDD2ndQpSQWycNzgbhMDZ3eBAuNMFEvXxD4QLJPzS2mSSJDR",
  "key3": "5cyaGE9BD2wNFuPmFkkauXDgQkZqp1Fu9PzmgYTkoPBonUtqiDEfnkjtwgCyFRezVm1KLTr8RMLT7Zgcwy45sxFU",
  "key4": "9vyBUS1B2rPgmeQFWng8oRJ6nbTjC4mcnAMd1aGMdEuRPk2CtGtfrfKQYEgZLtPFbN8fCrL5i3XjwANYPXmngc7",
  "key5": "3uWyApy66nWUGyTVfSjuVSjN9tNWKV7DVgzk7kKqjKJW4Hv29x3Au6567JCpbiWZsV9aM8Cd7yho6QPHBkUMEWFd",
  "key6": "3PeDhFDndoX2AWXivFT6adhb4dkccsxf1fBQACvmrp1cbA3YqR4UfsZopHkavWombDKjUjU3WnXKNaytDEzKm6qk",
  "key7": "3qJxsQ93mXmrLSJbbLAWbv4TnUvoDXbyXALf7XJA9jDtop4AWm6qqys5DDqtPgVwXuHTW56vv48yCNS2vvcnyteV",
  "key8": "HXH9VKAfMGbwXKHWnx4fd44TNjFyX83saXtXZcP7Djw5oftV3Y5RDdAZZiAfVjfP2KEFiwwh5nPpHGkU2ic5bAJ",
  "key9": "63r972tGhR6QDqQ2CJWFpaog7hEZdh8kNrLpX21P74PkN9kCSnC6AUWXuoTYmUw9ofPeTYcJBxswA3rcKWceDXHR",
  "key10": "2zLnVCvvAdJjzm1ara6DK61MYwfNtauBs3ADAz9mfnPG3QxXF1n3B1ATY8ujTFWvViatg3hCZbXvZzFQqKTVyf3Q",
  "key11": "L9uEfEajdgyxL28zBoLydueBLTr73VdGNGa54gE9D6js8cwF2XegYam9VmRaw1ymEUpbRgr9h9ZnoDF1BrGbdks",
  "key12": "3dHqB5mVE2jH4wv3rHVnLkUPzdLGMRPzwqQdUpJU4sTqBSiv9AkjKALi7ejFySy9ZZmjT2pL93xLGUqQGqA1WFQi",
  "key13": "5XKdQwVXmy6HeZAoqDjN7cPBqwDFZfdtqmSLKTR8pKrJEEjLg9dzNuQruhNvAwvMmRWGpaQLPHr9KK2vgyJ8QwFn",
  "key14": "4LAr1GSTocvwGPn6wAS1ivaxwo3TnWAQNHTNyrmKCfnVgaA4anAuQshJiub8dRJd9FhWB3WWwrXdUg3YKByYVUXG",
  "key15": "4EzxtvZvrReLdP67xwDzMQE1aidixL2TTQr9CVAUfBuwrV2tyarQi91gEexd767j5DPdqvvcHAmdMRx2a23y1dgR",
  "key16": "5yMNdUPu3tpurtZsrk5XDE2DjPZZu8QdWVRyQPUZe53HfL3Motvqmkr6gzkLJicTFPMP6YWGg3HXPvseFUvJgpM9",
  "key17": "45fy5kZmUrrZ6d4cubnpvekf8jVLezG3c5692rtCmVzgvgnwt7HPghGUMW2VqqvTeb8QcsJfi5ea7pL3MeYBvFJy",
  "key18": "4ANwnoCHV8Fo6atfVqJgqibpkUoUptLqmq9gx7MCN472wyPRMuRJSztJod1DGubViQaARYLDZ2QnMonrRfTDTLGH",
  "key19": "2X3NPJRa595Yc7KVnau8pHEJDZ7Dtnbw9BxhmwT6QCKxsnSUagcsn35FQbgcaYyWAX4Rfq3uVsBK2wbJ2EqZF6Dc",
  "key20": "5idsWiFrLPTeyXiS8BMNE4QmCXfsqZMaxpoSFrQGjXxx5zeuKHqLP793Wpy5bZDU2JkfoSbGoZELPB7PZAXftxHi",
  "key21": "4gYqpiLEWC1iB7VsA26fxSCqQdtuBXmR3vmtH2HKfV16oQL5eBEZaysxQLda3ezHT93evvFTVjYNnXEKEFhesrA3",
  "key22": "4qfpmBgAwVnuYpzDyrfvfjt8c5VikM3LE3ZCB9Mq1qgRr2RAyJeWdG8qMBKngAtYhZj95vhY2CRPUoP4kaZWDRer",
  "key23": "53wvJbDL7JDfyznCuYmBhzPwKqDfVQcJvuaym4kiTuUTyBPABs5xa3YV2Q61h5C7yMnquw8pqqQA4mkXQKTfzHpM",
  "key24": "4qb6UeGrWNxVN4UaFymwUFrukhu5M51UN2Rvcc4irTBUF8AiLeaLvShq9bRgG57Cp4JKBzUcfCcemnQ8AUCsN3j9",
  "key25": "vobon8ka5XiMbQuJ7YxKw5t8yuqQFBszpzNbMD6iJMtc2jwXjjHUHSABHwCbJNXvHQiqQDzpUD6D45EniZYtx6B",
  "key26": "3WpSGrpSd5jxyL9Juge4Xj6gHwarsKMpsXZTqXAjo6gcPMWZoJF5B1Gqd2An7s1vZf4Jezed4ooouq9fdc5rstD5",
  "key27": "4KbajSLuacJwEnHLNQXG46xqFx7wYUKF2rhKtagR3o83ubCcwUBk2xfBrT8QcRN1TGwsjX2Th9tqkX3Mh4BMxfd3",
  "key28": "289dEuFGNv7Bv8qtYPBBsrPeZ77HR9T5vYTcqSHaMx2pBZhJRgGx8d1cmqC3XrUakvE2b8ypFzZV1QG5tsjBCctr",
  "key29": "5qvnw7Pt8mRXS8NJCADPoddJRvfYvngmtr9woN9EfLTqLdfQFmePEhmnjyU4hozXms8AJXd1jjQoDts8KjFzpYqX",
  "key30": "Zp5suZp5vUCkyC2E9hyNbZU77oZ3MFnUZHoyf1zhf2Hx9P6aUjLVUVKD8MA17jR4AMaZu8DpbC1wTF2dfEGWGYk"
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
