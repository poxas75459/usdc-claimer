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
    "4vfe9enJpmc9WBx8QcrQqCNCUA2bypLtvkQcYrRkAdPqmhC6koxwdecekbtHo6tTE3A7jiJ4XsQxCiGdSr9hZx3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdkYimEdX6HX4wHAJjed81cYCHBTmFPA6DGhQijL1Gw4hxCwfYz7wV3at3YkLL7bdEZB6qHN6U97T9B8GS97t3a",
  "key1": "2DexiudhJhnwTq237Bhq6fJ6anfJ3zKDN1waHShE8XD1xBaCUo5aHT5XmauQ9n24Jj678hHhUexmzXH2dJWX4ACB",
  "key2": "pzkR7xRzNSVpuNe8kHiyLSAcGUkyP52hLpK96dKZX4Kby2guh9Vg9NWsw7PA16L8WhW8QSdLFyH2God9DX69TZD",
  "key3": "2HCx8EP2SPz1tXTAwRSMwfULvi5UXDxR8gKMAabbbA4coE1HGxhg6LiEHQXAbKfhemyYZ6DXafm5SXGJz3GStagy",
  "key4": "LuhqBWNfb8TgBp4L6iNrVy6URh9kABLNVakJ5QvLBCzeWdaD634tjG1Kz4FnA4wvkAH9Lu3UKhuNuMF1qCJy4Cz",
  "key5": "4zA2xMRCZbJba5fuGHpfAss9eSoxC5p7Si8jPAjJDfeHQXw3aAqQxzhdqyaXRNCjV7MHYx3ezLU7Q56Twdj3wg3z",
  "key6": "67Sh8nBbFgiVFxJsy6PtngtsC9hqdWGyeBsTjMqc25RLzAa9uhDK1xUaYzE5GdMgLd2KrQJPVSngsKzoXK9DrvJv",
  "key7": "eZJLwgVxJfDNCgyuX38Dnv9nknGKS8y8ZnwVAARue3ZHC2HLa4n88vvUU21Uby2EVNMGZGVSH5ygTyzkKTdr1s3",
  "key8": "vMLs2veQPNd8NYPoCDbmjaAwVfKhquCvzmjJSNJmaAxJVskHtBGhnyzEX9dfz9VPm3MkoUaP6dNKa491jBP3H8p",
  "key9": "4Bmkv4KoSX4ZE3ensPyQCEXzntKgZiuVprQup58jfCgQJe1qp79RA2J2TYySUcLaeJ7XPjSnDFiunoeFHZvQebnd",
  "key10": "26k8UwczA9JTt88FKYQvKUPhScrRossE2RuVK1UyqpNcaYs7CMUf99rhqeWmgKQgYNDHbkeDbisAA1oYzNbvjTUu",
  "key11": "2kLZEbit3kSpVgtTcm4pfLAAyL4CCvKp8oDSRbxpq64BhB5Z6RXBgHESc9PZ8WZaqsD6Z3Cj4zt37iaL4kHedZLF",
  "key12": "4CvBGpRPTa9CtQBBYGjoV36q8K7iHapR1p6YuJRAYLqTFLkpPSDLGu4mqsifynhYPGVZad5DYiFeR5kcWS8tvjPw",
  "key13": "247KoBX21PJBEU239Ft2ax2E9v1F5oqQ4ED9F7YA7Xmf4M9h9hm9qTBSgk2KWGEJzdg9tPMakokEpfPAWFWGjDtF",
  "key14": "4TvEGZr164t9Ao1AdLoCyBXCb8tAFzRHsmDsn6swbs4STfEUW4jhz85rdPKxUaY26Yixh2MRhuhCZdCRDQEa6zw1",
  "key15": "5KZMPJEe8ZacQvpX2f79fcfsomLpf7SSAZXKRErejfN1oxkghNv7X1J47busfv4viPr9mdPD7MNua1aj1xZzbUBr",
  "key16": "iFupbtdujGuex3QsZnFGmb1YtSUtX6LMCHGpbpUMkhxiGXF5AY1xHYUhZtBzmLiaFLeyJeVBULaR7TVaXJ3jgUN",
  "key17": "5LciRrZtznCbdNECdTou6fJCyeF7svWdxW4rfWtZzcexZNtkc8y6X3jBAW3XNxrXd4yUKqpxJWj4n3Gui4vEbJcr",
  "key18": "43RjgX3d3rJ3bcGvLAfjRRHiTCRomvumHzQX5CY4rSM118PLtwS7k54WyVnmgqsEPrMfttyxRe4Kq846FYenTqd3",
  "key19": "4BmaoLXDCwfdcfRRunM6xs7jaoy5vBDPHzxUwemxccbSUtXUH2wajqduntRM9nGU8DF9YizUS4XtaPRW2nrNjh2r",
  "key20": "2Rj5Wwzry5BgqpNo1Q3JMyMdYBZfctntkkYSAByQzQGxRcds7JSpUnndGKCBtkxd7iTZEYRjY7bB6hJUyXnC8tUB",
  "key21": "9WP7KxayfQeGVVUH8YBYcmurdxRTsEbJNhtsg48YkJTPo612DnqCCMm4BHYE81qVfk7bY7kNcmfcgC7sPwMQiuY",
  "key22": "2x7mQFjQxwSVKMt7SX5XroHbac49TVpBRVTYuoZQptHj3gpKt5Zjsge7YP2fMikAVBHG2xoEvTdLifEVCZGZoR2p",
  "key23": "4mCBnZxbSdsdS6junzTpE7kNao9sbSeUffyFtqL99Sy6Z7eZxWbrdnngA5sFLnrmSXYyQhCTUS5wPZqmjx1bq2df",
  "key24": "VeSm57nKFrzJAG76c67AMUtSnizSJSYMzXHsBN9wN6pasdMUooY1PjRQm7KoDxNFdnZikWNkHWZyuy8mSBaauAQ",
  "key25": "4jNe4VsE5dvwApZTGk2hSrnUKUCnRr1MUJ9PEFUfXLQHKG5tFanNC8UguVG6LAN7DodbGgCQSXyyRSoTsrCBeLJQ",
  "key26": "56ktx5tNFUAa6DgwgxStA1BmATsCfTUC7JV1Jy59e5trfYz8A2MpeiTQs26x9hhMNNQybbQHTaRxNjySqDHBVXXB",
  "key27": "3WZqg1AzzMZYd7edej2xdptyMqbNCt8JG2LbuDFbroNydFNC77Uc5mxoBTBbqGxAsiKzrLukAsB786AJUQnbNcTN",
  "key28": "2GJLnmT1CawweCW1vW8DzYx1oBzU8tD5py9bmpmKvnXJS7buRccDfFAR8V1u7yd4MWLf5Dt7Z1gBvfC4xvxXdsWU",
  "key29": "4t25nMoGLcE1kjGHnFSW3634sVSjFEnvToNzsiNYnJz9ReavqmBJxkUcAUEBraUS9qxd47Ur2QKnhgGESS7iUqyF",
  "key30": "4Y21zAH8RKQsDADr4Cm6pLBQnJmCS3W1jKeKTZuiGn2UQX1QYLF9fhGAbGvS7rjyg5iha2q3eLEnWDB6K8egrJzX",
  "key31": "pUt9fnGaoTraT4F1C6RecnsTifgMwpyQccP521BMrU4KzRuPuRrcbNNTUR697DpQpad1aETAnfMk2YWTmcxuGsE",
  "key32": "3nXSrKyPnE463tDsVgAmPPyL5NS7atkyPyB5CvCbWacuiXeHJLJDnju3E2Vm5QrdZprGAxwrYxAajPaV8BkNRxmR",
  "key33": "X8DLYZDDLkWVgy9p4PbN8QcjoYCeJF6XSACye7Dmfr1NFJ1FmkdTRWPxrPX37xDimCuQd93ak9Y6RHJFWYhPwAs",
  "key34": "5RtDJtnvBaViqgvp2rXiaHK3bFQAraGjqC1uH6ZDrWXGnayKcz6yBaU4prkepqs6dvdNxkjR8bvUKjJDTVGLGso"
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
