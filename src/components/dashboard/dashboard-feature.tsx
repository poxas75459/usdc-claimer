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
    "5vNjEexzw4tf2cync5MMYAia4pm9RHVDppqM9G4R2kAmpHoyJZ1v48FGQ34kPYusPbVuXtCEJN5xJw9uKdDtPsuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gahs3Zqx9mpP8TaAn1hTLgxXLZJ9PHWguynpfhnFzusuNqTHqNc3MHaUwL3Zw5oTyWmBVFBM9Tp72tMUEVXdabx",
  "key1": "239kULfQsQXSTsX2DgXsk9uhyFd3XFPbqkXFfA1ay5woMomX4XBK69GwRTnmE84XktWW2xuuLPfJHPHTszugkDfp",
  "key2": "2xzHBawmEHcnfHN6jUR1NkZeUA7Fa1TgbMWmxrPL7os8Psfiz6PyJL9GVKtNWaWBi7LyrzP7Lv9qYnd9JXZcj8Yb",
  "key3": "5SiYjqScjMuwXwzvw8bKnrygFcb4zicToRqZfXMZrgP72JGJEpZwpdRjHb2SMF5f1XxoSGLXEzkenUkL15NCFfc5",
  "key4": "3nm7tvZDdM1EpGo4avdZjDiJeNu8kSZjsvHFjGYMv7GoagJ3v742jXTdk6u3Hhc7RBF2DdN7hiPzgd8tbrmu3FuH",
  "key5": "35TYko9KVLQzhBV9xrqqnZXKzTBe6c2QCJUyCMMp8DoTfDZSAAXxxYPVr6kZ47HYr7kia2mWaFjmRA6SKQedYUHr",
  "key6": "pq3U2EN3G4v7M1gXQNyTtk2uD5Vx7rqmzvUEf3XT3prU7358gLCYcWuHWdCTiu15ZDirk6KtTr1TcWbxw8TmtRT",
  "key7": "2W55xgAWxNPhAagkNLgKNkn82F6ZSxdjQ2fxjd4MESEjXJBokYrB4o8QanqFhs32nskGNBthd9P3KWCmTVKKNnac",
  "key8": "4Lt9icBe3b6LyGayY64TwZcbXaXFn4EsthHHfP3PNtrzJ7qrKfyhB6S2m7ubXdTh7oyELwTudmy3t6cWaC1xNs2c",
  "key9": "deB8HhGt2Kpffv995GvG4RPpEfeLUdqGLxYNf9M5czXsK3PyJWva3uB2Nx2PgY7PZFo6HC5kMvQPtJvCbBMKEhY",
  "key10": "36g3g7EkTBsji1xaQ3U6mV22Gnpu9a7TZULeAwX7UPmbPZ3rFRcFGrcJbQU4TbYHf7UVhtjAPtGUFd5VUU9pxRQs",
  "key11": "4haraugKjqU7Qa5qHiXSN6wZjrTKZ8PA4AiNLPonkjvYCEjwgiFGkPWVmF5zXB5LsziLtSQfL4eoTVu9e2zAdKy",
  "key12": "4EtiDTqFBYWBnSfXss2kurbtfyDPYKWAQnQwdpzVh6hXSbMn5bHBY34P6NDFZL2zF6mniEomLZngBbGtcpEzoYs5",
  "key13": "3NACkcwSrPX684rXL26tXj3rpR4NGmahVwkEnZBN8yX8Hu3FYvv44waLrxa5jtkR6oY9Zzc1B4Mjuv1eqNKJxQz4",
  "key14": "jJSzRMfnvuqHTVrZ4hXNekpeXWXLYjSWhVoVeY7SmGVdmy7gdjJz9JxpsdUFVecofb2XueW8q4E4cVTGhpAfKCZ",
  "key15": "5u1Z8DsCgrmcnVYQihCXAVoZjmtoLopKddxXcN1RJaKBydwmggsyjkSRVn68WXv7uSfWmWy79ZBsQCJsWFYPHahU",
  "key16": "2mzUd9d767osmsbPKfUDnjmSvdHHMdcqJKS4fCsoC6w7L2zWb7Hkdqz18ejp2AKqrAVM5tyEvDKhUHxQ4WGp28j3",
  "key17": "vwHqeEEfqDaqCckcUBNVJk3uTDFdtCtuNDP9TWTbiubhK8wUqxhQKBci658ffsSEkGdCWV7YbBpT6XaW3rZjeQH",
  "key18": "tF5RHLWeLK2Aw4UB4Mft7ZJs8WkXMgGFNYM658Wwm9nC4PuNcrg9pA2tXdUKcYaPaJooTamAtprR2tKeu8TBC2j",
  "key19": "313VdAdccjNv55U5RrqLcEyrToF3fESnA7X6NoNsfxDPmVMK4Zt2NYjuC1DTtprkn4kNAN2HFoNAg9rRsDADc3WK",
  "key20": "2cF767fVeEMZ46xfoiv3Yx12NwDmUyr4kYX7JaEHNKDVdWLWyrKChA6MmU5xy4r6vJae3KnxbLZ52a3saQNwDQQR",
  "key21": "4E5oMcApNcTmaL26faAVmvxZb7caQaMk4cXjKbTXeoamRzqJy9BmBdR2tQmokMVCX5JtxZDcEgEczLQSUEoUX6Mm",
  "key22": "4GuY3NkEMYRZivD8j6W4ToTud8cQsoyqeeQqcLHF45q1Rzg69Cw7LxP6pUKvHnsc3zkQKiTHgNXd3VKBdV5yBd8Z",
  "key23": "53gBmrEBUpAby4g9UKsFSV7UWKdE44wJrKpabmLehC9yyEzGtkR5jcMmgEqpkodtbNJMqK672t6rPt8jrPnSqzax",
  "key24": "48D8aieYMuxBu6qtTTc9YZDokjGbrvQRrTav48sK2TUQio6Cf3XHrXAeLjvuL9TFvEv4YcTmNoffbV96eiZ6Uia1",
  "key25": "zWSMBgNCU8rkRPA7mfLwdHs5zwdz5EMq9QPyQRNawkTSjGczSpGPdPL3L1cs1nksDvELenPrHeL3ycwFFHK6ev5",
  "key26": "5jKko9yQyQ1gPqapddPRoXRVSS313A5SbExWQU8FGE5y57PoRqgCWndxpZW5e9tpJBCE5Csv4Djr1UvWox7T6FbG",
  "key27": "TkG36jZqHuz3LG8djeaieQWHChQK5NnvDCv6m9py5D1szhYiEaA1u1Hakdq74Fd1YT3Qj9ye3eTwYhRZd6MP4GM",
  "key28": "3UoqWvJozLgRfhatx3tpSZPaxQHsGg2ytn3wMCqto2jSZbGmAxSA1E58X2uUFHrPsEtpCTXc5wMfNbTyBXfCbyDt"
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
