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
    "29ZgtdcKgHBPc88YsjqYKwKgXapuLUfFvrpA5dNjXfKyauYzyDfkGBVMHRo2Sui8UCPVdVa5UYf22BU5ffxvMFnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zv7j7GznphhqknDq9kTpoCgyydVdgfdndbRAdBEzd8hueL2LWgEgvpamAPDzf5L5zbuD3NYm5odQ7oiAFLMSwnz",
  "key1": "ybLpRuQ5ERTBKojvWLL5BirYicL8RSTnvc7s1jwteapuht24LvaWvwAcvVztKCm8azsGV5nyuZtLMG6hf2Pgibf",
  "key2": "5kzJHyjquCb5f4FVtR5MeqDkRQpa7mUR1Z8HcHVhUCegxUDQNfwhia89w4xCEkQLGyxBDdbP6qqQWLndyXzB9m15",
  "key3": "5NngP9zp7A4uR5NL7D2tKM9rpo4CdfWdrPmNru3XWc35o2YdxvtZk7KHQxowkGbCQgkvc9mr2LD3inhmFC64zFpG",
  "key4": "4K9dJeot3BXt9CeGTsidu7vH8QeGhbRL46v6SXsQomdjNCie1rVWdpQ9RTM8pvKnjwnHyyM4Wti7yke1M1PyNfJC",
  "key5": "3T8goDZUUwnKwVK28j8s9FQTBRNV4zNZXf6uq7Qcbrh57PLt3mr9T7sWbFPBF2tgzWUmM8yb2TKhkcA5oqUtT7tk",
  "key6": "5L1hFCbaYp2tSS534pTaR91cTUYKqBFZHNXGgCUapjidBzKPgUPNUqLFy9mBsjkBGjiB7zrGw4qQNgBBqteZQeyD",
  "key7": "4HsHoPNemBR7uLc7z2SivsAMQ5VSWqpNmqPQCZ7iKcrazkVJsbLH6vMBDU122NdfUt5aivmsWv1toLtiTZpuWut2",
  "key8": "4kYSwZsajvqfZ85wxuNsHPA1wXgAs392uXW6zJAHbz1FU6tXoBv4bLx7CvDmX28ckZ85KKQELThPqsjDpm8ZCzDj",
  "key9": "3xNBi8xfTZ17zkmi6GgyCURSuRWjJ2DW2yysg7w2aHDKR6jpVVwZasxDxhyoTkfYjBBCRkbHYgm3tV1jyHrQsXXx",
  "key10": "4mGfzCrN54Cg2nrY5SJcyetm3HegLX15XRDHVUg8z9PGJEdwgsu8xPEN38foLzpyabS2af7KrEPUs6vdvW83pXNv",
  "key11": "XzjK7vypDz8fzxyQhskBTXaPbpxSwhczgZtQ4nwCPfHdr8upe75FtNJUxvKVokVrwVJnEvervY8p4PBqnMXqAbD",
  "key12": "48FV1Dod5JenBayMz7fz3VV4sezeVrinSbs6ZCFyBogggTbq2wv2YhV3eVr4732HSUcENWuyLh7BwU9jS591nrNG",
  "key13": "5gwQNpWkGHbhsSLPhB16SAxRHLMcHG8HzMDwnRHNqT2hYmMpDMVSnAxvkVi8kcok5BdnxisHBz7TFhZ5MDrudypd",
  "key14": "2PxTbJszAzQW5XWLxeMBqpgJn7Satvza6VcDq1a4feEhcvZsj4NBs83HH4CRyoASwd3fhLKRTGBuzpJE3GoXmf2Z",
  "key15": "2KZPdvCxcNhqpJk9ZrYNbDvXmB8FsGPUm4xrrmwLCXiHk8CtUE6UyyWCwPzwCg8GFY14vxsp13GMKV2arqEgWr5E",
  "key16": "3J2wCJVhKdmS3xkHkWHC2Y45okAC3a326p6BBFwiYRQnGCMTKhCPV6faKJDMwxWHdLRXkNXAu45sdKfTpuBdSCUw",
  "key17": "4rEvCcN1odPt1iSXHWCqCa685N9X19CS2gyxDZwHHi8hWW2ELQD1vKwTrq9tiqVktGFAFmqLmNGq7HgmDw1ZKhf7",
  "key18": "4Q8LXQzjgMLu3MyyzkPM8ovvPCUQdR7KDrhLUTLh4WjYjMQWw21DaDbEwQZyjBa3iwHLboQjVPCKcpfbSYgbLHkD",
  "key19": "4odwL8w3ycjoKZHT61kxYan8xo2vjsu9NBWVEweqPWriedQS9Ud3sGUbD21UD46kiuDAjiGoZ4uJLNPejyUFQM4G",
  "key20": "1FLCA1XzyEQQbEfpYcxvzmbmxDFnJpbQhCDPokNPim2rATZ2fxSL6dVexQXHvzNntHPzNGQgNMtbAUHzfDxJD6D",
  "key21": "4Dck85nYsBhVD69jFTBJAmcpidwA39x1JcnMbEckYAZBHNyQuQrRnjykNENQyzrBzms2WiE1D8edaaARRovZAYih",
  "key22": "4XmVQ5q8ST7KtTje3xg4xbeM6QgqkeZqCp4qRZPd6wUtteDP1BXWgMK9qqpF6vKUQsYWMNFe5Q3ixJ58cuM8dXRN",
  "key23": "35oqbjE6tzm8Kfqd2JU6nNKRUmTMK3Kum3BBqRbS3KFYU5zU2kisRNLmhM6FgP8fztZq48GbZ9fM4guXrGusAz7a",
  "key24": "2ezAAtSEiS11KKKc5y1fot25ZzMBe6p2RwWxd6ptJHHG3VKGuJ22JMjdHEi5vJafTtDS1x4iFj77axRjDNX1btkT",
  "key25": "4c6RiP2vDFJdudkHNFfksnnWrAXEPQqVoX3rSzhJ6SFUCDkQE2nehw6dB5HYKdAynKC7mGbhn6yXuBitpf1u2biB",
  "key26": "3cxHmP5NekJhmuy5foxz7xbVUGCHXhqbjAizVq5ZaQN8Taes5WbwrZ2ymANwM5YkoBC4XPAwLB4eXLeHpxSeLARe",
  "key27": "qkYVtXEhQU75avrTt5nGUpywr1zmvENm9PvX52h6YX4t9QDU7RNKeJAi6TQuvKZtDLkE5Si8roj2t1ZvgjqNC3Q",
  "key28": "e5esczWv9FLEUdymcGcA5wntrBKNEuXaXQ7XUniCpy1Ektwm3qmiW9hLPErAwJSaMZbihNf7Bs5R76Y5AU5ZiWK",
  "key29": "B6HvqS24zJZ1xVKBL1GYpRvQajYdCtat1EvDmAWH9SmBsNY4C8wtRzyqj9jYDzEKxjLAqCjETcj3ZpbRFWfKUYD",
  "key30": "dybnyPqWsknjBUuQHGurjmFdxb388A6hqvXdZJUcN2CDfR3kutYrYcJZohpWDHrLFosgCxtDqKGJEF26iNuWFQh",
  "key31": "22XYd5SXoP4U9YNDU18tCydaEaqE9Haaw2RGw5YfAyHkjKNAkdqwjMKGBMYt8vYqVA37Amf9RNw1isLPAD8xhiKV",
  "key32": "2Egdvpq4nVzF686wCRmkTvVqBXFaZzjmfKuzDubfUnXHwEZvTeUk2Ds2f4qYGEGuyuy16Ztbp1YEBhcsAfTvCSHM",
  "key33": "irjQHCFVpSz1m8TLoHDc5LRNJ6QWnpvZQ6nMN17x1qV4CTGZbpAbjzEAW4PSbnbkYUuTvaqA8FFA5oCEuFNDL7P",
  "key34": "3qZrXr2WNMkUPyUydXNJPPM2EcxwbpwkRXEJ3wrhNJSb6GZnqtFcXX1bWL74HHmJBsMd7QaWJXJDCgKvH9Heb2Y5",
  "key35": "mrXoURRcUFJVRsomDS8ZhTFbku9kJH6apBdPKCur9uTAS6weH44DhGv93V3H81L3AQjzniWiCXsR1zrirNfHAXG",
  "key36": "4ESuJxpPkhDNXqask2iU6jse74djXFKFuQcu7S61dyW2WDoK6wvZj5AsUsnmXwuUfYpbtZu3hcpiEQG88SWweznK",
  "key37": "4vHVYgPcrbN6r2N9QxiwYfMjbtcjq1TqGNevYQfMuVZU15vvNxUj38RLdqU8VpzyraZJ84RtBfnX5wpEVdFDHnNF"
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
