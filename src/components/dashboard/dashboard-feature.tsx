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
    "3EtEdC88RwsBeAR86CSrbBh9a8Jh94MBpJggoSaT6VRJyRYptP3R2VwpgtEZKSPiMecwKmdDDCrTLVqLNC9xPHaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XfDoi8AkD9ciPvsXmQhs9evZAQNPTBhU79qwoUvnqhnVMKh2DdJpoitM9SchpW1h7uhZKeM7drvMeD3hyWrjnWa",
  "key1": "gxsZTyokGWAErTC9qYaB6gdHVN4L8hiEv4jM2CBryK25ocihydcVDKKUikavkXR4xgu3u4tJkjXu84GhhD5dPz3",
  "key2": "5UwB4LxfK2rZ4SAmz9WHZvZYyZxPJAd89JCeunpUKwsfPXzBk3BTnGGpvC6ziPwoMvL1V5DQPCLDZLw45HjLmc11",
  "key3": "5RSCgWwrTxDivyks7VrDqfgB4dCvNQsqV5RA4k6pRzFJpDYqBBCLi6okkSG5ehx9uqp4WNSfTwL3ewQ3h2J5dPCD",
  "key4": "BdyqizwKUMENTK7QTPpMfhGUjTFXyH3jzKd313zA5VeQKXhRZ9ABXsDnHUfBhvEna4ekUCgQKURi1y8gzCDbfw4",
  "key5": "2hogdNVCT7kyEUYvw7rqRtgM16Tp3rGQcKCv4yvRhFnsem6nMhFWBMJJPa5pXCY1VN3RFeWrhjYQyLwrjPw9H5gN",
  "key6": "5HMG76AKhn2dk5vKgSfRL2if7KvAop8Jt226BCuoBu5kwCUYJ5J29abpmFneq4kB9j52S4wDp41c5J2EkyVrs4yi",
  "key7": "5PEgQzm6ZEVubhTk1H6WSWrawFdKppmV64QoAeS8n46hWEtMcqSiQ9UkpkRq7uD5Kf2rkaNdEMbv8TktVAKtcjHQ",
  "key8": "3WSgoH42KRdB1bjLc7PjNCRrfgphrE5gxHSNQf6SM285NQgnR7XvwbkLfrcE3jTA3DV8dBjYj2J8r1g5JWPU5Cz1",
  "key9": "2RhoAAi4ZhMYNhh7nyZuRWYweMNE3GAbSFFGytc9EbqRfApnw5PkRHbGFghUceMHeoWn6xUFexN3kBMhJYcxfazJ",
  "key10": "b3nvVs9JzRTuomEs1MYs5REGKRbUuKbRLM3bWnff31iHL6Sr8H7RciU7i6sThqXDx1t214G4YPzdPFGT61g3j7d",
  "key11": "4TD4MzECPCfdxvZ6pEVWyXEajjUD34RfhxnZ5n478MJ1pCUGi39vWgJjG6EHV7ti8e4hqEukJZr9kcKG7tgUpGHZ",
  "key12": "Fy4iqvBm16CatxAnAoVotuQGVY5vnWH7osLJoP7mkn5d7CRzXA5NeWVRWbbvZkg3zAub8NUJxpKrCZRJx6g1Avm",
  "key13": "2Nrf4rJmfZALxSxbinSEcEkuZwsskoKW2KiUX5P4bHoJ5GMXTGZ6RVBP92Yd15XnGQdFLy7RgbJPapKLmdqhP3vu",
  "key14": "2ViiGGTsJ3Gxx9hYZ6Fbn23Sj4LZ6RNPgTNT52mihz2KdwzV7P3T9TiEEoCMs5bwAgMaD8A6edbfuspiVXPZnwT8",
  "key15": "65b75Tj5tAAk1uxmfpTZdPwoaep16WButTuVEmLZ8UHsmzBwLy9GaA4G4mFM8SQELhek6MG3eL7huJhF7gtJDeqJ",
  "key16": "3Ehsfpoum9z3HGtaQni3JnoUthPDgXEPDpMeBtf5dfM6BwsR9kStkpdKbbkNvCiAt1zUESN9pG5gV8KMTVS7L9dC",
  "key17": "5jGxEJCAMshwPUR7b5GrxM6wdH2thcZ61eQB9EmTSSpe9XiT6X6meW7sfEwoG297ZBQoKeJPqmX7peNqKGcbG7HM",
  "key18": "63UXh2XiRHsMYeq8bkvs4nej4gZMmNqciFLKQ8F8TUVCtyyFXo22pDtVCTWHCT9ZwXvmDePAuv3q8L9jCWRkwZ6u",
  "key19": "5CDaVkstPzyDsnke34DEyygSuaaCm9PWphM24sgF9GCayTmWUZ9oBG8KvZrEooWsdc7ytronGHcZTGhdSMwuVfqS",
  "key20": "3vFgVefjYgXdVXjwxTTN5hXTeXzhjC7FTCLgyqSuTJN1fsuQtPaDwYqxcNmW8ju3oUceLH9ris8ZGPXQn2931ZBB",
  "key21": "4hdaghEXZ8B5fmDXpuBzp5zWtXkqsCkDPUZaKuQE7KXfLFGFtaaVBYswkRHNXBYXhm2kcYSsBCLhHuihiEt2HuoL",
  "key22": "sN9YSFjd1oc2vDwtMfTykSLgY4DjCWPjAp8VMwwCgCvpBrWwWs5ZE8xNQ5YjBvntnsMCfDBimAkrtgRV94afwU7",
  "key23": "pSnGhU36mNjPykGGxZj3o3RFGY4UF3tu8guccugaH4A5sQxZJEe3hf6LbuxeN72GYug5EaZyeBTkcULW16msD7W",
  "key24": "5BURN9j3Yrfof4XscD4mRKCYKkbWfFUZUV9h9b1wKkLKUkZg2dVc8i54C8BfpiiUqsQnqeMNd4jUw8EAe63DCh3f",
  "key25": "3XDRJHsqR9o4H6mJNe9gChStcyEqTpK4h6k5cDHY2jKyJmcAvHz82NGYSzBxxPCTDuHZrvKmTjV1Be6gwv3DMx7Z",
  "key26": "2poCbW77C1UrSxpyfGYkhndiTauMMJdiFTWLt4iewHCjyvZuUZhytzP9A8qGW3Lt8YB18hab29nKet6vUjz6NbWT",
  "key27": "2zChddi6ZAue9XQ4R6jpJUfEYictvCERydMV2Bn5RPT5KrCFP7e1Bfo2xJkzKCxdt4CbpnRYJ8LyHohq7BdU8aSv",
  "key28": "GjfSkp97WAyxAsGkYX9pBRSEvfjyWJdVG8Sk9HRGaTzyNi2VJ91wfMCNgxqJGgDkVKUkSPSNDjmrKfDMw2f3P11",
  "key29": "2QkNnnSQ1Ut81VS1sur3rsdyFpgbxFsj43x8h4aQvepdMX47Sy9pLyGKLYyL57ycUtg4ngeSsEg4mG6bs2ur2Esk",
  "key30": "52S5SCp1hnSer3DbgiiLwFuyEDiwV8aFxQJy5nzhGAAbWoLN9pxuz4dVvReGhww6dtARejxP9Jsvw1tA7TqaVNMv",
  "key31": "2deA6v95mBn3H4kxxCJKAfFEbvtFUSFoBG9dkaBrDZziMiRnh155MLbfPT8YiLBvuNmhaZ6XqcVQKiyc7ooXYub3",
  "key32": "3RBqb19wDFojo4stSSWn9MeuuBPFXWvBuuVtqWYvnp6bxngcwvmCJxquGZ6gSiNDhyKA1FTeew1FgftQe1rN6GC2",
  "key33": "2ZnXdmNVPPpRWzowTZqmmLG2v3ts1qgKT9B6g3MPrsV3qkqg3rFdSRZS8jBszv3CP2RhHw284fuQKnc74FRp15RU",
  "key34": "5cm2RnzFn1Vfhv9VWS2oti1Jf6NvWJQ6hVacKQjD1m9q5mMENVD8Y9drUPXAuhWq5nJGjKDdkGZji5vtacdY2sV3",
  "key35": "277MAuXNCKJfhQPM8AxT7TVRhh5N4Q8VYYDbisdTvqTsFivLAW4JoD8Av6dP5nKVrPFM7aSCkyazvvz2FibWyzC9",
  "key36": "4ZigeSb62bYqU1GRNniGNeCB1wqECyYYKtzETiWuei6vp3KYDPFAgEsUzvL5ztajNVUi49Ub73wRrHcq8PEitBHj",
  "key37": "4SShuJVE12gqsuaSzUHVE97vYyqTd63qkxnTXh8Lxwbgxsjx8kHabBFfpMNM8GmcKXD9tvhFzGDHNaqZLqhfXJeW",
  "key38": "2YcqEjzuoPNCgtfPet6EhmeyEyhLVzEbpaU13QtW7ZY4BfzcbEgcyd9xChkS1xnSWVL8h7BfnMTBubJ3BFa7Gv1q",
  "key39": "UHQgbh8gpUMVYXSJ4pyaXhg1b93ufxSQ6dnFLZKdigMKguJHN78B9dzVtUPqgoBtNi7uJWEabqfnbupTCgwt3zg",
  "key40": "3Tf14yo9iLuFBFB6nExztvJVtAL3Xpsjz67xnCqxe1yo4c9PE5ZzoH6smJcDKMQKg4UqYGjHEGXHqQ9XN7p1PsmW"
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
