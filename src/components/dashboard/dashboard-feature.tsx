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
    "285UNRykspaWyn8oZwZ59CTpWJeZqQvz36JZv9pNjQ62HtgD25uMAyMD9p3KgnXWbcYDtsVDPbRFRyDBXVRoywHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qgmG61PXzwRuGHbZ8bvwrkbiEz8WP4WBoXKxAS6XsCcUkvxYds44rDBjhTX6eCfn3xWyXb9vgYKQtf3MS94YihX",
  "key1": "2mAnwudYQBQBjGmQo1SbbnadrFkDq5n8eorFXns4DSfCq1nrcZW4FoJaKGXybgQrDgsp3XWsTEjwYbpMdaawy6Ak",
  "key2": "5RHCAVo5gBhdSQpKAZWGn4g5NaVSzzHFQnXBdx2at2zGgPb9zoUwQFGRmLWKynXSXvie6SVYmiU7GMWkYzbjJzTS",
  "key3": "5e1rZd6UPfNJNo1neDXpgbjL7PMKchEVadbPWQW1DSY9GbJKsmKFKFZ4D4bziA4zGwZyyUqJLGJW2Hr2FrguSkas",
  "key4": "Nnqa3TpkceeNymakKj7qX2HHScdKDaPYMdV9jb3hj3pKFjQCxMc6py2BnpsNWYmBu3REeTRrk3zn5nsKGGWebSj",
  "key5": "EXUipzxy5Uu4QVgxGvyiWF2TUG3UJXi3JqcE62M3mG9Yp7tAULi3YKweBsr8DtZUqqjEAWhFuev7oNSAg4uKaMZ",
  "key6": "34f4fz2JgWTdzbeEEthzg7BFLFobNw3S6YBzcpuUjMGrbmEyuBa7DrHQgj5jPNnYeViS6d7aTBxy7UTCLNjDHpWS",
  "key7": "3AytWofx92FroSBmfsz4bb8cjBmCLe1oNo6WgAXRE61PHfe7eWXYE2v7ARAXZuBqq2iBM1YpC4jsAfKH9s3PXFxs",
  "key8": "59vxKAbaAvT2TUsDMtvnoJpqx9mv17HTuKmfFMY2fwAnXQRR766kdjLwmWDuMQ5MWveUnFtWvUAPR8U2xCpXPK7B",
  "key9": "3AY6GiJJVYSHGPGxRVyDHYRwUFJYt5mX4xDpx5xpD4vvzgeuM2d5Go1QrURegsEHCgKdNrZNkG1LtHq3Sb5YVj2R",
  "key10": "3PAxincijZtJ8FND2KfL4i7mJrvYuzh4DBQXpYt1ac3BZo1tDbpEn9M58jWctgzEAWfXLhurjmRZXucBFpEtH9md",
  "key11": "2d8wUC39AWwXbEBrMkoNYTWyvWZsiRNmgAjfHGD4bmNnhKkVybHeDB3rwgGoFh49QZkMXAdTkEShw8JuuPGpTEX4",
  "key12": "67PnUeg2oAmbqfpxj9R4nDXzS8787SNwTjTkLSHYfGTsF4fqtGKs2QmSeYDYbuFriW4L26A5Dse32dBAnkTFbgAj",
  "key13": "qwvSPtggfvckWsRAP5aVmU8WAYWKk7j7kzpHKJj2WHjbmRY1GyFozTSMLxYsM9oEEuqhC4xMnLYLrnE4RVtUrrt",
  "key14": "5sDyaXZ4HV17Pm1FfFAo3w19XJT4Wj8mVNqzj8vvktMQ4QFRgbw3zWEwLYtoJ6a5HSbiHtQMwe2NTtUVWhSgf1mR",
  "key15": "2V2QYTsUuzs1icwmSE6bzdLBdE4suj5ZzDFK9oJLi2Hmuq7bGMdMQF1Z6afzchzKMX56kDBddiGBRCp9oqYUS6Cd",
  "key16": "4be1T94Dak52k2EzLuKQbhXgiSPjDcxFSL4zJkckvt8hihgweiq22mveokJxRG1Dvpg6fWpdGgFjDrNv12a94QGG",
  "key17": "2H5uavkTKXe6tagxUC8tPXF6HJFtCrUq6dPMMTeTNUxy4WZEdG72QRYXztJW9oR6xb9HKRUZ8Mk7Y7dottCJrMFo",
  "key18": "5NPG8hU9GnXCNLFumt1ZZUYBce3H1unPFg9rY76QngtnyaaL6GMaQAtYvuxKRHTNFEnksAKCdusCmhyxcr8a43s5",
  "key19": "33xKoDnGwdguehQhzA5ZyN3XgY1joGbkpqJeShx5QR5pJeWDYBXwYXv5AWtfPP8TpXQmZ2DuWiUf9rkFKZM5WUez",
  "key20": "fMDyHMCjxS2GGynathAfDCb5CJuN8Zj9oJqsakTM4oFr2UGxU2MEfbnrrykTdhbpxL4VXCFhizB9Wb6d1BKvj9U",
  "key21": "2FXvAynEcVPz5tuJmrnadhD6xJxkwm92UWnkjbggGZ82iESXmjywF7VEypJBqDu1Z3v8nXBNisAA62QbhUL2N8nK",
  "key22": "w5ZNwcJAh2ad66kgx8KFJZPh9HQ3ta9Rxmf9PmSPzXvLmEyiGe9S7AUbuSzRpsjPg1Y8v2rNzkwvuKkFiWZtU4Q",
  "key23": "rxSXwexXYUPY4PVgMu2wKSG4sfFZq2DMz7ePNfLPzo2Fweaf4t4jEDHnvVGokVsU5mCfXSFmTDzixhneXXt9JG2",
  "key24": "2k537F165gUzwBNSz3XoQ4xiRXvqvbUs8Htz9u6y3euMdAjDk2ZuphttDwc5Ey6onoyJfKAh6NzEe7p9muaJdm99",
  "key25": "2aShFpr8teUhJU5Ve46jtLMULYEhDVjfCNg1ssigqbRTwHkMD78pgH2n3VrXKRXvEfq5vtbtQzrFmorTxdHJMnAD",
  "key26": "3ctygzASRhmv7GUAD6uNsVmCAcNcs4RWspKoRjtPPPrAYfTYwbABY7G7SFwmfEHMScghmenic2bPwqd3LKiMVysN",
  "key27": "49PqRtMdT28Jfu6DzT2Dp8VhukeReAai2z7ga9mpNJSQdKDUYVbhYRAsqXpU9kQEsmKqBi6ZDhEdmHhY7DQKGMNw",
  "key28": "51iMaHoFSygWTWcF5wkShkDyYDohpX4GzCTaQC61X8jkqtbwt9Tht9Aaz6T9LQG6LtuvFwRdSF6zssiEJnnBvL5X",
  "key29": "54R9YUffEMkgrUL5KPoHEYNn5rBuBSsa3QbpAKY9TvjGqqSbEcTGHLjXbxqwK7GDqufnxMoPhLcNe6tz3JAC71su",
  "key30": "4kj9xFP2qirERZ28YnVuFbYgowNJDNR2XzpcimZwLdeSoochWgwdBYFx1JerZXZRSV1YS1UoZrB4Pf9qxWx35v8M",
  "key31": "WHzdAbUfVvkiTMsPTDopqaGh3vnVmimceQkuKAFLzogHKFqsSTTG3nqN2t3aJqHZhq1atshqea9iWFGTwDZAqtX",
  "key32": "4RDgE11uCB7QFg17zuZseJ1BXuBsaEZfqXFTfvkLu6yGbcdSkqHqeSbjAGeHPhBoMakvavzyKFTYyMkn7z3ZjPt",
  "key33": "3i4vdMB7RZ2Tx3DPjmn4F7ZPgKYGKJsWzCAjfZ3equmSqe5mPxZAQCxhFqGyZBLX3oZnuYvH5CQBaYrmxYvWkBGd",
  "key34": "3A4dtjeBqfKYA7rdQyAW4qtKT27DBcZ4ytSfzyaKNriLw6Gh5g8rC2rykc4X4VzYVXC2BCuTgiis3kEZmpHRHm4o",
  "key35": "2SRdujJwbdo982ESKmwQGxoVHpdqhhSs7PuSaFfjrymdqzYpg3wPMUGuhVsHAug7pVw2sAbLRFQvBdHMV9wHMncs",
  "key36": "3dXFeDjVE7hy3BHt6mvTcJEYA3qqVkBihXUSiH7FKueTNa6z6isJMSanoVpqRS2gAEXsTLNM2G6HNrd9d8cvsUiM",
  "key37": "4KKYaGhXCpmVpVBBde3E2teihfm4EAob5wVakbWmfN3pF8VVcji5n85gi7qY6Pq3uaLgGNA2aFKnzy7pjScVmi63",
  "key38": "UgEYPh9j8tJztAsqcjSJTJE35PSeaoDv4Gms62rb6Xpx5oukT1VMVoATWgQr88rywoLjPQAMiWR5VXTjuv3VLWa",
  "key39": "3VWBYPsFATNGzsaZsuknmYiiu7x1ifBR6hLtzSutqz44cVuKWaY3W1Q98deGNFv5GHcVuBZZGkSALS3cpPeNbVHn",
  "key40": "45Rwt8j5Mk4RED58w35rByEYtpH7DpgZNS98mSLmxxkc2QBWpTPH1rEj7rRm1MGXSzqz9tar267nvYPLxDgNMpHT",
  "key41": "4wc6LztUiQheb7vchwXYjGVxGxsnvxZSjk9Low61DYZqGrdKdAQ7saGkxQ8jYP5HR2zR6coj76w9VLxTHCZ1ufFG",
  "key42": "n7K2Ybw7giw8aovPMvf6Rjt5wmSZk21wqu5MXv7QSgqZn2gvMAAgghU1J8T2tqM5oqGtKGkr1jr9vbSdE1uxBPq",
  "key43": "2iVNr4d8UpztxLvX6pMy9MQDsMR2En5681w78y85MXYHe4XaMaSuVUngcXp4cAx2m55ihM9Pn3LS7K4w35ez2p5M",
  "key44": "5fKXSNLnYVucwHCWhHNxwqLVHWfjmsrFyP8jFXZ7xxPyxVuD33ehaaLk6mUzvkj8rjsoUbCDMjkve2ENBxhDTh5b",
  "key45": "3vHwtupWrB3ywWf67A96TrAZkdUWGYehbfjF5wKaza4HgVA7hGGk2sKNiVKqkj38MDvCpfoygonWDTsCo4cEL8j2",
  "key46": "2qEJE8sWNrRxoGw2muSuxWMN7kyLJavVBgeHmwKKdxEPXWYHKPUkMGoTvDCUzrCvvZZYtwZv9dhhntYi1a9U1YMs",
  "key47": "3xaZScy9AUtXUPpunTfAj5piUMwnEZ9eeCxxWomjuWxrbr9v2tVTBEye8kN2mRPuZKmAkURvzAXJTP8PwwTFrdF",
  "key48": "5jWPH5KtuzNubmbskhNFYyQTvEhNYUemnHp5t6misdZJU2cDfYp4vAsYERCqH76RNADQWADXdb7w6GmdynqmhH8H",
  "key49": "UDSDe77MJsi7BjgLrdmPeCzZtxAERRaiUKB4T7BBx3Twsk6yu4chm5hmBW3R428FmWNVNYhHVJnXoMBVLn3yZUu"
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
