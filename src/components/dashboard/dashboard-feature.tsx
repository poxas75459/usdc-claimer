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
    "39w922qXSY66ApoLyn2adEqAsdVgUQRs3HAEqjGbSr9EwyNsE8ETsN4j7svAz8R3hWWSURThhatkhZbsFUA6jF1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XH3nKZ8tEZ2BmV6ovzceQSESB75bDZaM5wif5LkJ4E8U9bfa7UhVZdKuky2QFUs2yFC7B2WDB1rb4LZ1jHYbF4u",
  "key1": "4yYtz7amHSBf1ivdgACNJZxGqhidyfx8yvqSRtRzfi4T2orW712fZaBzsXiahhuBF93RzgKy2CJkGZmXDK7DCUzX",
  "key2": "Z8EwRmc8uoTsgWaf7zv1cjLe56kiAE1rked17Wu1cYFFzJ2fNPkchCskBwJbtWzdwyjUGmKfGzSL1mPsRLGt6NZ",
  "key3": "3Z1kT5Li9pYPX5LtbLRvgVvwLSgJt8r9j1wDghWeViKdAdnYspzugAHT2Qk1RooVi8vhAPAhJu5EbMbm4U7jfWBv",
  "key4": "fEhnZUqWu1QbCA3Wei3YJo464FgxhgYtgqutqmhiRtuWyzxh3aac6pWDNxnK4tbpKv9oo8Ad4z6F4wwNVd3fjvs",
  "key5": "9Ww4DdeBU5sv3djtDitXpSornQJb4tDdqoZtks1fPqrsGdfhGECrtd5gwH1b9xyUVkqXR4z7qPhm186JvmmY2RD",
  "key6": "5u64zYBRLpHcnGfs8UEvqRdJBzWwGPMqKvawKeSQjDZSssz7StH6P8MTmyvZVVTcPikdTwvzogbir3hQ1JGo5Zr5",
  "key7": "3hQ7wN7hfKQ2YcZ9oAc3VJLcGFWmkvUJDsuhcLjW1YHUXPGFb4pRij9ufaZKiBePNEyusSAnyp4E2ubAQ8MiDT14",
  "key8": "5LLkdEsJ4BK9rcuzjvw3Wd36Q1p6xD88ZCUrfYYboDR1nLZ6snexWnH8gYEh4uvT1GZhkxDGWMmaCK4TQce9TzN8",
  "key9": "42Z34uzYb4FgwxpmuPFJZrzMZZLAoJ7xaoV5Ha3xsf84te4qX9LaiiJs2D8gP57HyjEHzPvViQXvCVtoNGL5ga7c",
  "key10": "5KAXPh2DabMXtx1JfvQRihoNBzy9CmsWwGScjkgVSehBpNXSJwTAT2e5Y97Raio2ktGWm4FTE9DuMjYD4gCgBZwH",
  "key11": "2d9GeWR5SRABNeTJQMeFMSt13L8PnrEmzvLRi7914FKC4DccDBjg7Azw1UKmTcvmr4fQSwSVYDJB57bJPAampbjx",
  "key12": "3DBKfMR3bvTTqrR7w2H8LjWTyUvfTXmP6MrF9vkwtxHtCueyY6eMfeEAQMkj4iFvc9FKiE23gKReGS6YxftsghSQ",
  "key13": "7tjdjavpZHyCqKBnk9vUibUD5JcpFJmKZNccx5AY2ys3WvoM2gwkWgTLDvhD3Npu5N3cdTrkhTE9bgx4CgEjm9R",
  "key14": "S8eJfT6Q9jiGSQ2dFoYpiK5Q2s7kQyAsaaG3nCvFfi576B9cihCXna9o99FVUezKdmWG282V4SLbKTmxr5fjhX2",
  "key15": "reSZyEdxX4wBDj9j9fGGEFw7KSdT6hw9c19KLaEWzYjUNTbp3ncEW5EjmdCSVq4VAzMFrVjvMgixDLHWoydzGc9",
  "key16": "3ZphCESQ41VuHSoVMMVUeaWeUbk5o1Y8jKHxfbavQ4T3GvaN7pDhF8LkwC7GTUWiVDKBs4avJzDybxRARj2gJxdS",
  "key17": "mqzidJ3ouwRwngz3mAgVkXPSqECtRShL6gEvDq8duYmU4kB9gsKUMaJCTkqNqst1ACJKaaTHNmKSTVgzFXsBFrt",
  "key18": "4Bu3iKnzTTED7EK2jQ8DLPewmhRaS7vuiKeh1eeRrJtGHqKfCqtaaW9fP6kLgM4TbDCtuqFikiZS3M7HxbTgZJ3N",
  "key19": "S7A7WFdUAJzZBcF66ezZFecb34bpBtoWXtfVxdpzCYedyCakoPhKj6s2yjEEyMt3msJRGtAfBxJNjrV9KFBvLcZ",
  "key20": "5nAyHWLHuCCy9SYGravmWsXZfZfCfxLmFXv3TfBUgzW3MXG6XALCCzUNhTHyx1mQvu8FyHnfx38VWHGiATAj75MW",
  "key21": "32F1u7Ty4hA1RGzcZG6wAFTL2KAaSG52EYqnVRt25k1A59DPNZmfq9AZwmrnQRzNqdiRWtANdUvPgigThFhRrMFD",
  "key22": "3UsWT6RZWFCoTWffebJ1wJH7PUqHy6PT3AMeaK5jDGzdx9UtVo6hTxVwrdiFu2ksNuHr8NeXFK5bpu4Kp4AS2WH2",
  "key23": "4hGo6nyr46YPKUFGz4BdBqG8zHcJU49DAqGwvhXri75emZaZg4NN9MLpe8YY12KggaoMsaz2QfkFsMvAA11izMT",
  "key24": "4bpVWsH1aUThszPuqncTbgM46MtT83gapLv6isX8PRoEHmXPogurex2PgfU7mMubxm3FQwabcQSBVgJom9zpowcS",
  "key25": "2XZu4A9CbWodi4eK9k44KiVtUijwnwRXRGjMrBxrR4A3x4jTqtfYPL1VgqhYXmVWiwJJ6nEhFLYqhkV1aG3CtAdG",
  "key26": "LGsCeMPBU92bpjiPXUSNohsuD9GRrQipqv7CvkG4xejd2APeHfcB9NbrX75VrP6PRSADU5JhvHJUut3FAK7mBfk",
  "key27": "2UqPRPNTvxuYjRMs6ZjReoGdD9ghuwSVUpNyesVXqoKdnXvUZCka9zkLqbuQnCqsyg6MAXgXaWDyTyeKoaDyJUwW",
  "key28": "3XajJqZa1paroLA7xVEKnDZZAhJaapwTqRXH5xxCsMYEaJcTjhtqvc4j8LrXupndrLCngfugXBXdnTALe8xwC6BW",
  "key29": "63Gxd6zx3oNkqzgnHc1Z1YpFD9PQdZqVAivVF8tz6DQw5kyCunRmzgaFXXDTyigTtwPstkaPxYjfcvwG6jZBbPP7",
  "key30": "55ExbFaAPvJeroP7ce8qPUsymBDx6ngTm4N4ANsKyWK1wsqDeLcaYwjqC5j4enFKKniQwfVWV3i75Cemy3REDSEa",
  "key31": "GSHU9C3cbkZ1XpUgWLgmT6oTBtUjAnv2KbXX9R6niUauFk2u1dzYDNh9T8Qij5FYXvtPb28SMef5JoE5rJGNG64",
  "key32": "47Nv2dipepBW64JhbYA9XmggKm9K8eYHPa888k9Apu5nMyq5tcYcjeHq6vwEK3fQ7uiuPdetXtokfGh1vV8zpW8k",
  "key33": "2NhLBc17qbGHEUyMrNhGAa2H9yNfVtozp4FiVjonWEfVyiDLXxxY7qsB2fQU6SBU39caAPu1y99Yp9Ch6yEhhsJT",
  "key34": "2UXyMo1ZjGrfiNgCkMqRDUT81pXJLJUEKeTTxmrnx5cCvUEziozGdgz7WijQQJyPUn2wffGJTgKuyQbfMCASQ4iJ",
  "key35": "5gWkT6wfHn5z2ur2a7L4aiTqA99wByRNbGrJkW7psFxEp5XtLArhFwUd9t2jo6HWKqkUKfymeJCeKsnq8FQz922a",
  "key36": "2t4vjTcQefpLUCGWgdDFpBgW818wN8kcTV8TmZaohieFHdeG6ceTnC38ncGpJAvips4DfGT7AVmfPHUHgjaVzuQr",
  "key37": "5zduau9vLGJ31rhFNFoPGsb4SNpk9VzTNotS8HEgGnT1Q6ifyYzcJRTbxWKie6FC2Biqot78QrpXz2bUDonkMDti",
  "key38": "5TidCFz7ZVHMwFX67y2PQqznKBgvTgAZSQQ3oV1T3D7wgcxuqjNWCSgAMbLZZHzbqvmksCwBQFA8F7E1gx6y5yjN",
  "key39": "32GusVpfQSwrHR8UzYNYCYpbvXFrDSGzW6q5gYNBqgr7a1284ApyZxK7NuuUdyVYgLzeWGRPb7YRoQjG14btZC5P",
  "key40": "5y3Rh2L3LhADAsBgCcPRiVfy2sTVfj6bNaEFFWeBFtjJ8pLsd31tYigmq8nWQ8GCeELVJPP2zdHqEaSBQxiNTz71",
  "key41": "U9MnY7QxVspvSgnMm8CE1TmtV5mMnv82ve9yw4UA3pNRNx6fkqRKga5ZDit2w9P1qNAAQvRZGgD9eHdQyCtzfAX",
  "key42": "57Ju3nDmJc993HJmXZpuic6ZyEM3QwZuEXtA1VvEvKwUjwgV4SXXeJCrTAkfE4rPomMLJkB5j5QiEgEfrQfNMQY",
  "key43": "5zaQ6FjWiUrVBh58JeJ4Pz573ZAMSLP8wh8Mawqnxca9nYoo89CYz1Caz5c3E9dxYQeiXKzf8PaTkjeBopRsfsnU",
  "key44": "4M3D3qYMriQRfFgQVeE676S3Q5RRV5Tmw6HnPdhN3mrTheqW9i8RfroJfLrnaEu55uRRuckESYu33pkajR3odatc"
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
