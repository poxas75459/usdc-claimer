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
    "2pTZFWTEmkqCyBAk7ETqBA3wzPVG5qjqQBN3ZqReC64KQn15Z1myGXEuM37tt6TAjJhcgqvdAMYb1BQHNmARdXZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQCi6pRkbgAXVnyQAsTAmdUNvhorE28VZWc6kkSzq5x7wni869tk5eK3rpi47piGr6TdrPKqYJnmgMTQqRJooWq",
  "key1": "3S47BWdtFJQ9kcGynnRyRfAzw1FhCUy6p8ZsaR6GXABMeasAGzJZbj8nCvQfiVZd4GQRJ6pq1geJSv57TzAAk95q",
  "key2": "qVxax5hXYu5bdxYQAzGgBhSoDD2wmMyhrEe41nJk8Dus1FFmJHD5sFKa53rHFJnWbBWF1SW5X2MP8kJA61LgGfq",
  "key3": "5HM9KVza4joAZLuzNCSwDnEnMinxYYVeyFkVKnH3Nuowvc3vhWisBa6hW8q3L6BWmVpWZDm7WsypGSGUZaTCcX3C",
  "key4": "55tCWj44xWkuydhmhtQVr3DuWSjgUbTKMgnfqQe9FdQP9yFZaRaCNRzWbsfaZCzHUV1dXpUrYbRZLxDrVuoP1CPW",
  "key5": "2URhMbQu9aMVHc1HBnvwb37rFtYZhnP7jbXpvH4eVzJQ5xGfz2rUaegyV7cdDcAqELLCDq3aYo2xtBJyHvPbTYeH",
  "key6": "FcGhhbCNT6B49wxbEhnRQBd5MkMstiuFWm1zswcw6Av4sXNArY6rE3KXAf9bQE4kjYbZFdhxbHnvfgpDwQ3feSW",
  "key7": "3oeZkQTDmmNW82Jdsavb4Gs6URR93QAgWadcY2DKjsSSWyo9HNJMK9nN8MckUucbUJVSTdcQGXUfMMHcG7ebi1HT",
  "key8": "3b2x8gfKLug9m3atvafcQ6RZW67U6Hju45GpVjbVZXDr9nLbZJh8i1E8vKpRjXZJhfEcXHXZUZyTj91mEJEVEB82",
  "key9": "4xefN7Z76uDrABFvY4tMWT3w87AANrqzjac5GZy5iQ1B8tYG9ABfXF5F3TvnxeSJeHFVFtuVdfJCcFn2WuH6x6uZ",
  "key10": "557FYfGsEerJJZhmCeEucFdoUTM3czX4y2aSr6MGV1n5kHGGZG1vbMJLz5tr5nJFN6L2ofN2NG96ZL2x9wN4xxLD",
  "key11": "3iKVRmFcs2MDRH9z4N2czY4mTcvvPyqPLqUPzduJhPfD7sXY3pm39XEo25FPrBRFhMnuoA4aTtPEkaACk1S9m5to",
  "key12": "43dtcnY2KAZfRoirbDoAbSPWmeDW4gEtjYUT1rPDysPjmGeEmputaLWGnmXh9ZiC4FQke4wTdpbvAdz7kPJ7BnzW",
  "key13": "2WMRXVit6pq1xb71SrPRUJbiBN4CiJL5SSKBNXeSr7m6fyLyyWJ6rzqm1xhvjYs5BxpnyfQKGCWHYv3TTFPsWctz",
  "key14": "2dSabBof1gbuwzJrxCAyDb8sKcfWE47F4wuWqfC4zgH2HLXGtk1cPp3cB1afTpN9c8Jro6KGSgYHU8tvQyDq9KoR",
  "key15": "7b34UrCBhxHBZX1hAShARstRTRYJnChVtNQrJM9j3UNhr6brBEjjjtjU1tAHNZPB8pFo6w1R9p3cM4vT7qaXFSV",
  "key16": "hLSBvmDY7SnJ9n6xvPhx3P6GQcNkAKDeih5SoqevFMvX3cvjgmtyTdqVT7mkHL8ZxiyyLXbHEJUzsAFFJYXsrje",
  "key17": "5iFkWXmcGvUaie8jJoiG6BS93TYkz546daog3TXbPZzGPKfv764vXz2pe5HXYjr5MPaa78NQPngNdzVZ9vLZWpex",
  "key18": "5Di2FKiGx9idWQSMy5FiwaSYJrXXkSSE95o5cg7qwX3b2KcReFFeS7iVtHzACid6HFzSfProKsN7MzTVBv44Rt3n",
  "key19": "5p1vUPbN7jQHC1RZBihrQ8ftf7uioy4yN1AnzSJp7zU54EU1kgvLDZ6jpS7tk4sLHcWbU1sWk9icXFxKmH6RVFxA",
  "key20": "2wUtuPMmfGpSSbasszwaavtsVmBddBoZ3o1EBfwNNE47UVVASSjLN4ahZW9GSbGSetmC9P5DJ6kMG2n89ZX7JYF1",
  "key21": "55oA6God4dm4ga5aMtCfQbmmk2jPfuHz7ian2yR8WNZgDibHFfSa9aQx8svsbk4zVwAeAG5dFpn9kvc2WC9v5CgX",
  "key22": "XAxGb6gsJhq5Nz94cpPJDB2ZoThwxditTUy5FTft6gZgYPcGHDhHyDHGbCXFCo9VMKk4LUx6ssGG3WTt14g1gF4",
  "key23": "3jGXpn7LpBFtFp4r9dKoAAdYUGVAGxMtKrstqebTEvWaZAGoWaXxkmNonSQYciCQTbSdC6mwdPhSSSUtn2icAQjd",
  "key24": "3NmsbLVuB8m1sc1Thq1Lyw5RKkooqsXy1m3Sk2AAYSLAd7giWZHpRVAe2JN2b77GXZpaBENEUCcvFz8rkVZELNoh",
  "key25": "3p37q1dx3XDHQj4dXmfJSMKRyCgvbJc358rug5GE1boWPfaBiDAP5q2dE64gqDmcgbCVwTcQwTLfqTMVmYHeeVPB",
  "key26": "LpxnaQ2XKhA57BW6H69VVgqQeYfURkXWRryyeiNR3vK2XsZ2whRikMjDoUm5ZW2iby9opMAhoZmuHjca9ARaX8F",
  "key27": "67hMMjhFT1SQ2HwkeHbmyjfoEb5dby2TSFT8VjvVJW7d5Sb2yNB8GShfpSvBM8m9dkrwq5TUM1vm8qkczacAMuLx",
  "key28": "2c1YG1bzKwox39JcP4L5uAEGPVT2eAxe9urN4KgWw9DMkPrJ857K8z5yYtjbLNTupyHk8AzrwC5p51Mg2X8mSpuV",
  "key29": "4fawtfXCpfkKKgzcsCzFuYK7fXoETT4mCRktzhVeyuZpufGHBDDNJ259r4uC1teECfXioLdTxbHcuEEDYsuv2FDk",
  "key30": "3MccTuykbqFtnvEcsZBAh2iq5gmfBFpAftLBby64e3K6guG6Rwga5xqtfF9dzesKUor2odLwRYPGXZUt3dszjFbk",
  "key31": "5y4JQygE4HzYVWPNdiGdSVPguHrf8d2BjFSf1fAtJoZbDaJDSSQRqiRNBGEdWfz74zZWYWedgAWfAd2RuVNrw1ms",
  "key32": "az2ogPGU6bKUPFjeJsYDn89UeaRAXGSphHQz3vgLWhk9nTJ14FBNttwAWtmvAPszBvvbPeNnngoVQjd3Y3Hn4uK",
  "key33": "2WCEQCUNrotr6SkTwH1bCgtPWzRibTJGRNNup9JkHURRjJYj9hTBZDbqv7USXYH5ige8GSzdd18VVNauNor7QQ3Q",
  "key34": "58YykZvQ9t3QurHmhuoJm1Z4s9DGhCe4GYYyc4QYRQt83xKYURrbbvCxsogKRxzY7XpnwCuiQ9E1bqEg6aypvVuH",
  "key35": "36E7vBpUm69CqzoJiBLFVWXrJSSNhh6qudjQryZcv2P6XhhDAanKgbA2m59UR2QdJRSVNnCsWBroUV2hJUizSA6J",
  "key36": "2Xem7MKsC5W4kGsWf7LnwCXn5V4smKKSq444ugDjooJ7D6SUdNYWyMagoFyNJPxbbyiGBXTgVVwbbCfmiqRNSUDs",
  "key37": "ERtVozZSbY9GjWUKGh9ugptZQaNDEwxXrHSsg4TDtbWSz9B9q6GSKxNUke8qmrssVtxZBEiVAnYDzi8HE96LKr7",
  "key38": "4AU2YEWGWY4QGs7kbox9xfrMF8K8J9W6uGnyfvVCa6ku2VFjt7aeC1QPrxd6cDBY1bH6s39kmawJX7zDEWUcQ9nK",
  "key39": "MLxLQjW8xxsvctPVbs4UqxRwVfUC3MNkUxYtikFczs9gRVRLitpsLmdZ7vBwUBfR9ba45kZqyi8EFPEL63u8mXC",
  "key40": "2R2osqQ5HciUR6wHhHhR2L8PXx8z7MeBnrq7j2DjLjtK3mNkUzFdjDk6CWJqTZw8uVF9WGGEiXQjXyebapFQMPFb"
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
