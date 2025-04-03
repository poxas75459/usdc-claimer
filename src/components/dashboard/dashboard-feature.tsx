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
    "2mk1JGWs7ZcZMWAwymCuQ8e2ednctspBW2BuZZg5hEuMwb2TfGkE8odbiQRvP6GsJR79AaMbzwYY5CsDyF4dmVH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oiyxYckihmNkRbHZUUHrAPACbxfuRM9BauNJCt4FttaVze9f4yQexNZDYNAky87DNsF25pvtoDmAFxaFQcwbKib",
  "key1": "4WGzS4JWcygZVMFbKv3RTYiFodTK8PyQhJqmDLukft3fioiGiVVJmhAK7QAQiCBJqXVAj88WHdBcqiXb2oU1yQZ2",
  "key2": "KLn6XtWKAetTcaW79TgXwoarABvZtqZVMMQCk4rG8dqAR4VDZk1sHx4XYw4cWkY8hS5C6iBgh8ytqZB42qZFEPz",
  "key3": "2VU6uQoAMZ4SJe22TaRndGJdkJHoLfwsqiytW1Lj65sdP53o62dN622QkEEjkKLqnLb9oyLWFNBqATHBczF4BEiZ",
  "key4": "m345MSJU7DnsvXis7qx3iRGwb9UdfR5kL2MTgGfTKNRpkdjNT91FQ8krjEFG73jZiHNW42Dy4zYHby2of9k8gCC",
  "key5": "3KqGovFt7wic1UkJjmoNK6qfBaFgBy4D3jrLKGrDLKr5P46bKhVBzi6oSs3TYwuKpsAAAtVGkrnQkmgQ1z85vYRi",
  "key6": "2vnXrusiuY69ttB6U82JyzdDptKfQcub2ge4HsSXRuWxsDKZ9wxQ41tT38p3cKxQDPnvNuVrgWnyYqveankfVapW",
  "key7": "64Ze47RZvdp17vFtMrWqKW9chEcLURF9SdBFosszLF7bZJ6Yz6usjkWzD1871rdbomLCmof3b5Dqyt87xdv7JyGQ",
  "key8": "3s3MQMMRWW7vnNx3knBKfV21JWvJydpzKKrfgsSRWcXeN4WmUroAm9bwvUB3o17YP9m2x1jmULmjsy6meHSEhR2H",
  "key9": "tnzJy1FZTEpRKkD7pAQkdPyMnsfRTRn4ydHVsJke93N1KmiULzDBEdYzwmN7Y848rRN1Ttt5sS8KEXNGtrZTEpe",
  "key10": "2DCf7yuHjCCC9yXepE5PZJQ2q9663NVf1tLVv2rDFjPm6Bjcu7vrcXwL14WbRnoWFs6yjCWK74YUZEUfyX59cFYh",
  "key11": "EMVFkBsHqCCz7PXWet3cZS1SanVYUhWqEboTmbKAD6q6CUTgnvtVnTd3yHYofsRxZ5zTWm9MYXPbmmroRBxzurN",
  "key12": "5uJMyYnpRQrMeTybw2U36qqVCWye4ySF2knx95Kj3kvyGsmaCJn31v4JV1jBRS5ho8Zqfc1Qw4iZBjy6aFmZaUSC",
  "key13": "5N45k1cYWN96MaPC7QNWvvRXzQfgSi7Kvk1ip6KGo8raTPDnHtbDDh4VS56v8KG34kUyt3H4yykf6DT2Was1fn7V",
  "key14": "4svK9ZFsiXJPPCTSk1KWPnu9fhQ2FsAELwtesiiS1rQ2GLiwGYTP3JMstEtN1kokadWSFHRMitoY3zj3ZjNm6f8e",
  "key15": "57oNLpqxSnfpVdBXT4pfqmzJrrhAWevLoLPNZ4V4sA32ZnWu9eRmDBY3DySr1JtozgmECcPfa9je21U3USdbcwFv",
  "key16": "2nGkUhcDLxWvD7C6NbvZxFmWBTjnVqTVcjdcdmvsXGXZo5LprobYqQjVJAbv4JHtbv3FMYG1RkDCn27dR9mNwe84",
  "key17": "4NiLENNYMjZUKTMZoZez2Tw6yYG3LuQdbQKq3BugyZD1j4PMQs7QHxrTn5JTnNb1bNEbVmWdMLAGWPWnSCXHRxMM",
  "key18": "8y5oZ2KnnHMWsRqYmGGS7ERBhtmHqzEUbRbuyiXmyX67kjWo1adchXJZarNQ99x9vDkVdHtTgBhR75QxvcLXRZ9",
  "key19": "aaxbp6FT54kqppAeajysSHRGe41VJ5CDgAScmzBbrK31oWgyv7S9azJ8TrPMr4mQXcuRAGJpHfB95nYCidaYSyR",
  "key20": "57wHfgyrjroWoiBaw4G8EgzxE75y3AkaxReD57aqTUup6AtQdyoUDPhAqHuw6TYEBgKAvk6qdceqGAxmGQqBwQAe",
  "key21": "BhqFy1kvParH1kzgrt95nPF4zULQwGVtf3tA35E9FnyBZL7NMa35X9UkRQfBRXWAh5pp29Uofa3gY8Wo6insjTj",
  "key22": "6SSxpmRy2nDPKdbcGxm9QdWwyBZ8STqjQaxLcdVxGhHdiG7x2W9BvHVfw14Hz85FQ9sggKoqBXpK2dLZgvRy6hb",
  "key23": "27EfNazTuVQ49oxNHwfz2DiyCryJDXqPBftNuWWVpfPJgVtp23oasTG9mFYs62ENgyqaZKgbqPwoPmj2Pp3m34vj",
  "key24": "51sQq2ovzUxoCH8Qo48Jv1ye8xUjH7z6CGNTZJi4Rc3Lbmb1DyXMjkV7ZGSd9Q5y2TECu1iLaQAqBYW9jArYtjpP",
  "key25": "57yzGiMbd1MPeUS8gD6WVzy1dkVomXGhFyF9b2znb9PfDXsA7Pisjg89YWfjrzJxJGVgawpRecmF5jNsowKWaB4V",
  "key26": "2TJErq82MxwVNQV26HcERsdo4piQiPYrGSubeDrjXonssht9Ab3NrkFHZ9YhoU16wNQciQwJ62Xgs7TqCAPZWzzr",
  "key27": "2f6dCKxYbFUh4Y6CyvXfqC7XnS7xSgvLBaheimS6CgMEp3EgRQnZFpFnFxzYdZyoTzUJQekTE3QKj8mC3vh9Ndkd",
  "key28": "3kQJ6F8PdDHNgDKbT3qUmTbwdUYqNhDM3veyjjicWwFsFzS5UYwJFBEcBGGM7DFJwyDXTC2c7ZZg2RPRsyCv2p21",
  "key29": "3NkZdtAM3ZBoUaZUNwexi82mqqx6KMBV7vr4yL23XfSjUNAAXZY1fU4Ki69Qdmi77hveNyeBYhKTJtSUVF7CRqyd",
  "key30": "5F58yrybmh2xrRGoY7eydaYLUquKedr8jcsBGnmei28DHfwWyfjMRN5H2m4awDSFi9RCirx1KfenKdnebzYUyEfc",
  "key31": "ExXwqcFVimrhy1EsSjvYqP1YRt3EPhpMzveXYuQCduEMXjWHuJjWN7W42dfNMBicUe5HYTBhCG4GdV3jVca4FXm",
  "key32": "47ekvTpTSeh5cebtybT91bLRAho5ZPX3kx93imrUmzDfogpaXNuUMG7WU1XYziLBXbVuygKsPck7i6bgWwEMSzsy",
  "key33": "2o9Vmc4cV5ghm8U1Fg1MrH5fFdAKX9p36D8tmj5PRCubjmAi69ASvXMXYY4eWazHEpa1fKT4drd18k5xjmPYtUvS",
  "key34": "4syu6hdvtgTcsAPzku3p69Vnm4hUvP922a5WtVVDmpuXMZCcVKsVV4bdc7KmJ5fLt9CsMqBGZsh8cFfPSpcx6WpT",
  "key35": "3ZoSqrnGEte3WhTdkPRGLyvN3vPGMaDxXkFUFXAFSEpFWeKHn4KFyf6LTN1URCnjCwdQ9qF8vEcgH2xS3E2snL9i",
  "key36": "2MQfSCSv1MAcPxfokgtsLPQs9gRHsVd3cirRMNesFTH6Q9rLAPmcm73XVqyeEyRHV72XSM2CVuDtUjuF8TFvfhnJ",
  "key37": "5e9canyacduM8rf4U35wKz5SW11jKcaMR4zH8QcGzt1jpKorrJxRABbS3GwHFXnHPzRRZskhNt8g1G9z2G1vCn4Y",
  "key38": "5P2gzRA6uXzNtxHfTAiqacvcp63N3QRSuaMx9g3wYFqHgJpEz4feCePpBS4AhWEHEvSEiQerjCKmohuYXUsr9kgb",
  "key39": "3z7PUw3YgbFobNDRd9eM2hZthG8DAgCgA6SA8WDdXeBL8e3BPXbBgXaCMiQhMUGu2zCg4HCpXuTYhbbvriuyhatp",
  "key40": "5EnBscpUKpPdgiskxqaDoRMAgFPcvYeg1FiwS2xnMAC19jKbygYVsLN2jbuCDzTZ8ZGStTVtrv164BbcgBfg2s35",
  "key41": "3aTACj2kki3tNBKZyvDhD9vux2SiyvMf4CLC786mxrCA8y9iPycTaKUWAeT1byr9he7pkGuiXMpEYc5nBcWcGsKw",
  "key42": "m9m2EZkn6V9vMpa8cBew3NLEJu635vB4qgLuCiHV5SMbLhfm4ZXzScvuNBLQeimaPJxj5gJDeVUdYhwVK8W1phi",
  "key43": "5G3vRBvGxsEmugmq9hHUxo4QEo4JHF31x9CybedaXpnAxfLSknyBgeVxeyeJVTmJa1GeCPhbJrv5Vnp6GP6vvfdB",
  "key44": "3864tvFL2heM7rqCRUuKcNJgBhYk76jY5NwS7L5GU8TCqsgQDWNi3TSKJzp1PdTytoWRzWsA7yx6bKFHXGqpPFN8",
  "key45": "2H4W5NY7a8LFwVBu3xcfp9ekBBZ6FkrEncgwDeacvw37L2b8P1N68RPbWnd5aeroFmSEMKBbbcs6HVPynRerwbP5",
  "key46": "57fKyMyguBggV3uLoQMYPjh3SDnmLGxGYgcEgAaqd92HGYVABGuHiE9Bd8A9CQSAGMphjw9CwQuWCjswDiYxYznv",
  "key47": "4jw2ZWN4oQi8bWCwVENidxCL3rGEDxT6rSXrSB5FFQyfUTELt4vTFME4BmZgbXdzvfXwjQREnAGJgMMKMSHZM4Ry",
  "key48": "KwaQS8x9G2fEDQ3hRMHRRxBzXp7mNfMEW9RYYQ6fL1vZ9cBXKDx3ui8k7AMd1FXea6N8mXy4YJV6rW4JW9gqR6G",
  "key49": "5MPusSXZCK298UwcLro2rBcArqafpcjUNnpdv3ix6ezu3NJwE1H5vFxUFcb6Q7AyLEWK9nUgm55w9DRNnFWB9djz"
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
