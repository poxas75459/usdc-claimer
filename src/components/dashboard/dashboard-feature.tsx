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
    "u15ABtzxLY8P7u3UtH81KeeYBdXvzwsBXCBuJ5dm2pfvFqW2xk9cmk7284n6QdQspAjknqdqS5pWgJsftMx7s6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qzKV9qrmjcs3mSCXarYfbkMscJByXQo5nvPZgnkZ9pHx7nXLeFTZdVRFXuJ2CCzsDrc62hv1jQuGcjK7kvGMyDo",
  "key1": "7yPc59AKnvh16o1rWFqKESCaCYJLpaDC4HvDU9UWdu8RRYVu7LDn3xtCam3EZPWWA86sMhhyJitLqy3oqSdaogh",
  "key2": "2hZy3icZ1xaffGS1DFcuonZfGETSUcTqXt8a3mTt97VJHt7R8ZLe71x7p9oeWU1qTZhWV1isdkK85qjZuzYqp5vE",
  "key3": "4WsfVMBecso8BaB2zSE3VKA5owgeyWw29QRdAahm78brj6e99CHcgKAPQP8rn3Mwi48wXKWmqm61hU22cnRkmBFg",
  "key4": "4fVy1kCFixpYS9LA47HUvVWW8Uua7ExsKB1EBdRMchW9ZsxxwxiK6muiF4t2vwNR7uf1VERUtkQmduYBVzWvaKJD",
  "key5": "2KAaEJEScwHBqRBF6JyQMkTfRcm8WtfpNm6oTG5cS9bf1UWXF5ixU6TbYujeJYxi9PEdPUrWVVYTQ15CWYowri85",
  "key6": "7d7v4nVvGgNyVStRMXEphAVr8YxFh66RTZthBWpVRevjx63izg1crerxZQUC8pWfH3LazNQMwW4Bx8MAk2Cmr5B",
  "key7": "4ZordCNPKii2Srk8qRKttgY14gCGhjYJKV3TU7yD9kUkvW1UPBz7V8dSpAdQJ2D4xJXYQFYuPLvzFdVLN6uhKeJr",
  "key8": "5u6bUFqcgKpoUCZAi9jbC2vrshHKtQEVuaudM8RnBXRJd1EXu5eUTbxsrRtdc53zCjLXdFzt1GyWFbhGZZCaVccH",
  "key9": "4dKtG2e6gB5WnHBPHyTLnr3tWyehMHJGsiLKv82SnKG6crQpeQU7LqiX6Y5gTydj9GCYyVRvMHYXPqpQxWJKzFuw",
  "key10": "3m4NbFouoGXS6186Jt4WP6eAu6eGqSjYTgTivirmzyxRN2vmVcDMxTBiKyo48XzWkWUYqoEUG6mzPAoeS1RWBYnv",
  "key11": "7awnq8BDK5J4QG71fhggUe9xtzD792RVdSaPgUQNGUJbhYHZxmt2d6doYS31P3ZfApYNfGA3G6af2FYFUXDQjXG",
  "key12": "3Zq9tDPx1NaVjLBBzQYzziWfbKtMyzrY6WZXWqD3oj77cdKoDz4XEDb7ftznH6Qst88fL7CQr133CAgcn1PWfVjz",
  "key13": "3ywz3DLhQWV8czTunqVVSSfmmaEqMWh4dA2ambB7gjjG2wYyWEQuTJhRpRfX2NoTCvfDXkc9afL1PzPbUeXScT8V",
  "key14": "3uETZjdq8e57LCT3E22QcU3TXMxaMi4MnGPX3kecibXxMRBAiYzqpu6ABCQ4vkiABLEitfdCCzNTQ3woLCLS2eCh",
  "key15": "2cpekGapaywyP9ptxyAKAgtesVKTcmuwNf7iWwSi9RiXGcSdxXSQJc2oiUdb3vaTqTYYQu7L4PY5vgVpNMErfVK7",
  "key16": "4Hr4VNJeJEGdbKj4Ejv5euiv3fDeQyKCL14oW3UqXv7sQN13GYy1QFDs6UK3Gd46y9b1tKruWgQc4t4qkdYBQki2",
  "key17": "7G6zgJ5DXnCqKzCmyEDcdV4dzAHN4m9JAdufYUiqt23BxBWhPHfPyk5chZAr5hmsQUjb2Xj2JtjPSGTcGDPZuup",
  "key18": "4FTziZWGX2bm3cayzMfqz1Yi6ni2VJBQJg4YNCfkKLSmq85h1VvUuEqzAojEm51oz1XfQvA5NKfmysAwwqFPxCGW",
  "key19": "2XZhzXcncW2C6QRfHhaFueyvMvznqrAvLcxfxGMwLRL9eXcMXJpwxUDcNHhFiyneJbgfx2rpmHv1sMY1W3wcfbo",
  "key20": "5hwrpxV2FuZtSiRdGKavZj9hqgN6vrZYEwJz7sVeAMiWFii3MuXyyrrYPfrXXb83Uz8qd7Y63wHYh4drPm14JmnT",
  "key21": "4U46UHa8ELrvXSErnRyaTXS5DEUAWNTtrK7isooLrPUoX43MR6h8M211Yom6idGPPDZj4t62AZQjQySQHkxLpwha",
  "key22": "5sTHDJaDGFr75mtfUEotr6cSSi6sDouLivXQGbAWJrSma9LoumiaeCB8JDVbnbd26CVLXPh3bnomEhs9CjxfTE95",
  "key23": "35uLfgj9e2f5G1LFJEugepJ3gyPzAnN9SH1WY5p92zFteYgqLNEqvgjBZJAnoyHqA9uPcesEBRc7mPYULhDue6iu",
  "key24": "ZbUyHG2qvhjCDZ1N4XEterw3jYZa4iCmGpPbcEiDyEyYbe95GAkpks9BNcMvPSmJKiEz2wZhJxsfNs1KdSwGe23",
  "key25": "tkmUcMWuN58GTASPNQCZKdDEctvpoLqGvWWqMSTjqbpE7dtU4hxCRaBbrxouP5UezLVEXTVy8Jkk7gnR1rjdFxW",
  "key26": "5JCSGF59GQ5ttou4JFjUhUSrRa2LaCNeKSpxTFNyL2pVGfM4ShzWPT58tH2atekeTMPuEnTUk5dMZN81KeXXExDk",
  "key27": "ygNgp2vjYReBC4tQKWmcedcRP25wb2EJ1eg6DzvJkGkjUkdfYVSticjvPS9vET2XFYbtHyv7USN9wZA8ejX41s1",
  "key28": "2WMcSNqYLvSgobATvPYQXQb3DjVtUEjabJiCEgGXoDyCodVfLp9viRdKjZurPNbYmhisKMeC7mJ8ipFcCcuyrn4o",
  "key29": "4Zp5MVCfK9mrv3hcmt13x72Hu9vF9Eaik56tQAXneKt7Q4Ab9RvjCStQ2eiQAzzGAZQ1aoDJtwsHimhEXvinsnqh",
  "key30": "3w2sny9sz8gEnC4mJThzZdZrQmDNve9osApDHiKwf4u9dwjAv4jG74r8p7uibJLKNRiddBDvhUSF7WmGJ7WXk7Ri",
  "key31": "4PzQS3uFoqcG1V8SKZUcTJfCxJfkosrX4YBj9QSQFseXGjTFatS2rQZdHK4a7qKtwXAQdrECFt7v5u2HiYniurdL",
  "key32": "2r7WKBSK8SKDE6h3q5g8UyjvYogmhmUj1Bji3dK5ZC8ETf9AVycxBWLXHK5DFnME66TBV1d1Jm3hjBaBgw8gh32a",
  "key33": "38W1MJCH58pj2t9hGgs7U2QfEGPttZpMFLgPt1tqqGsLDQ43TEQhzyeTXkufqFoAEaTUxc72ZV8wQiZ5HjzUQDS8",
  "key34": "GqqzD3rP7qtG5MmSFC1fkDmUZ6a5kfRhK8wZcyZfSquR1KMHLkK1Bs4rUg5n9wHH213v52NRLP4Bz5oekMbXUAL",
  "key35": "VPNDjQf4nofhCNBaFg3xXBSTUjGNQu62E81gQzLh8hYMR9J8JnHxwfmJ9cdTM8D2YZo1VRgR67AfvbSTAErDk4v",
  "key36": "vk7Vahxo9buuNa2MMBj5PqmsW1qckPm2TgKjQrv7o3TzmBWrREpSU5AoqpjNtnUwZxLkqHN9DstEWaeo7PxwM3h",
  "key37": "3tefkFhJ36qqrFn6fvcVaEUf6yX4WkN7vsrvyUyJoEWv3GGy92vBypYmGpWPFPabUoBTE4xYcvZZ6RTqkzGFrtZq",
  "key38": "4EMpyW2tRiJofs8HmAN2XigAs2uQHaXbzciNY53GBKEys24bboNvwGPqdLxdUtRnPrHhJTqcvUwGG9ubxVnftzov",
  "key39": "2h73v6a4xPGSXqX2m4xW9ochNYR4K499XkZo5J2vY8Bp7GpMbgyWEybdjzpQTHV9RNvi4DTfH3a2D8frnJBYLArw",
  "key40": "JiaRCWkiDAtCpsjAGKyqpwVC1SdQPbEJ1DsBEwt3YhhVG5YPeD2vPqAAWEQCrD9YUpZrLa22rPcnUuiZSuTZj52",
  "key41": "2WPshBpR2Cm5MsfdQPf39tkx8U42z6ChN4e5hz35wQs2MUZNdDvTTJuF57hdhUVjHqio7hkfRMhydHzyPqheDt7K",
  "key42": "3vikVBTUBunJrTBPYzqcgq8jzarS2p6DwiG8x6gz2mbpvN7BoiGKnufQRHugTjo8LsWfK9aWTmZzhfapiamQQVNk",
  "key43": "3zLapcz2szLCCvGoXCjrdKaRPmefpX9Hz5jCxpzyMJoSRAUnNABupLhJJrwpJ6reVr9U4tNn8tHKru7VZ559Jc74"
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
