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
    "3XYS4k1tYzYqbY3MoHcYReJF1whT2VQ534qYzVCiDrgXXmRUVtPwcvhXsRdRTrDzU6LAwQoYPJV47gojWTaN8qj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxNFqJ6m116ooqeEr5zHhFiQnNVNP9dHnDFArd3yE4jQvjmNDrBxF9cqAgZWmePs934aKHbSungdaXeuVA6TcSP",
  "key1": "28CP7mhyX5KQegCpL5iv53BbdEdaD2rAbMLytogwdEPKb6bNN7E5JLFuYxJEt7AkDaPfRGMvGmgSkuZZeZsVCA4z",
  "key2": "3VAzBMx2mKpZd3oqJDX3p2F7jxR4dWU5MSyoBdaBEyKC5guXxXiRM8dzi18mVpEnfZJVw9Pk6UkTLkGiS3YBRuD",
  "key3": "2wT8n8v1wYbf7CRBcaFy1A1N2WBjUan8cb4rtyuTfCmPMWnqTqYqUV3DcAfTHP2hMcXxWodzkioq7EigN7RY64pF",
  "key4": "2buUHLTrLRhFKWutd5XwF8zFmZgBB2SkyzL1k5N75gztvkaycsbBGgkLvbT9z8GMvGkAwxHitmaQJ8tfG7D9bsdQ",
  "key5": "DTLSirLJeeVswFeLYHMzduQbpvjujzyp8B785Yo993fUaxGzLsZ6aFbZnMskQtZXmhE3F4QrqEgmSabWJPS8iJU",
  "key6": "5BS3o2bcdu3p4aHP1koeiGEtgYRH7cfJuMigwwqxHS6bnEeCcxGmw9vYSUFouk6nk7XTZ5EFVBfKX8NvcG52CePa",
  "key7": "5oNkwntShsTCjx2D4JGSf4AAYohtgqg2KzJGE8HiM5zN25b9LLAnNiace42AuwJSjRRTnreKgEvQVkQ19h1PN9RD",
  "key8": "2dn5sapMAUBTqtwn5owqgoFqLxNKVGd9Gp4gXGcGzZKURbpgAnG42nA6CuaimPSLKk6eTbYnkmcUcEhT5EQ2sVko",
  "key9": "5bnEzZoHj6ur7RUZ1zmCw2cFh8qNdNBCRXFvmMC9QroKC6JVE2HapkdPwFdZ61UQG2xwXsTMEfb5xagpnXW8mRTA",
  "key10": "4wES3HvgVTMREnyzM4ECJCDG6KCi6uXPyEqFyGLkAUpAWKELdEsQhX3dBm4vvvegMjdo1aHqLGpCFv5uUZxk3rQW",
  "key11": "2vNZsrRU484DNh695kVQqSsvKu4PJyZ6zQrkfbGbzBgA8Ykec8EUccRmhysVccLYwd7ofw6WL1ZAt3GxJFcU4voX",
  "key12": "62Pm2mrWZKDcKuWVRY4kNjdPXk8LqWTyaaHYfx8gCbv98mt8U8tHgc5DHmzyC984AcZkNwySs2HZyBGxmdFkorx8",
  "key13": "HC8QDoo8GwhPQyTR3uDsUusG6bzqAqjzJbV1HVgBEVTv5iWn4dr9VSPWqqJFbTWkUSR1TsUfbp5e11kPVJUYeD4",
  "key14": "Boi533NyNAf6y45WNyPrRaeFXQTDR5rwzLckgy3zJ4wntasxVXirrMohQZDVi9Dyt8S7QhxUzXF1x4BEwU4Jrhh",
  "key15": "4DNx7MPfbR7gLMgSisSSNJPgGKKPc2P9SuSTrE5es7fohMaKMvcDKezF99eoFGFLaackZopNA5LXuxn4CP9YjBre",
  "key16": "3owTKqFEKj2ZZdiUWgMTmuoF5Nm5Bxh2tPFqU3CBurT84CcCWSPWP5PWZNxjYFXvcShizmCeXnNBzeLttEvjjb2L",
  "key17": "kV45myaAxq9quLLUvsXLPSLEi6mvuGy4Se83bRNaiHGWAYcyFR5dERFuSBX5F8Amd53fKZkVoEcHFvkPtC6EMms",
  "key18": "2CmReh8qBTZmgAJx4isyf9nHB6a3kxNgZreGZiXSdT4gGstVyGbnvNDxZ57XkN2VXVGTiA9gYkietGgQqXRnea7x",
  "key19": "5z4mMgkfb9CLEzZqDK9VkFH1SgZtpEb22GiH8mftDQGUd9ngtz7wvvbztmvCdecQXaHyFs1PzBpcgcbEdXfeHwAV",
  "key20": "4do5JvPyoWtx1NiABXcJDvMR3PFBWNznuDxrNXAdcZWomrUx9wyyxguiGVuXKWDacysa1fmDyT6udokPXmeE4sRG",
  "key21": "pu23aQFZNREPf8m1DBHXkcuF36aGcVx5JhwvLkpdB82FuvhhiVYJEVLkUTAWBAsaRjBwEaSdHFPSQmfLghBiH5B",
  "key22": "3rqb29tbB7TZRnaquHg4NdUmxuWntzJqSAZqGLwuZLfis9PSVUCu3Lxd33Aww8evACWv53HxmggVdDfxNGjPiZuz",
  "key23": "UnYWH4oUwKUpLDbakXvaewrEE8J1C4uBBkNtv8RhAdCYH9ajaGoX3rqTZZGe75KU27FGXjrB2qNskBnyMQ53iWB",
  "key24": "2r6tRwvCeVYiNYxWbyPswJv3FbKxPSD8kQJyg7hHr4i4UXefhbmzAxewaZjpHFq4mSieZasZJASAZFLcWsGdn7nC",
  "key25": "2hnXmmE2STxSmXRjZgrScHkq2diBcoLTDsvYFJBEUVjw1EBQxXCXbD4AdxqggUxp6EbZrwonbQ39EzCUkT3C3Szt",
  "key26": "2yaVPupA6R62wcJXgF7rG4uMGjbsmJMRZduxwwU1BhviU7oyzVevSncXAqJ1UWmZgCBVHSvTGgLguRvrnwtzUQFZ",
  "key27": "5DTAFDewbxz6uLGBKHgoVmJeTRwPvDvptYHPFwpRuknrWHYbK5qeYAyj3ir6k1VWbdPVksr5EtSoPFSmix9Pv5aQ",
  "key28": "5PrknEaEj257UvjGJpM4kJ4pH4ckYSxrYucfwvh7SxAT3kTYZFNxuYZxG7Jvni12DrZCoYvUpnoFwzrLyNSv6gEM",
  "key29": "4esy7guDdqjX5Bv1LqjeAavxizYh7zhoL7Jm7rB3KtnLS8fzbxWFZBtMKH63PNHr2CLrvYUoG1S1Tmj3ZYe5ZC2B",
  "key30": "3Bu1CAsEW1WipKRwDy7k3sUAxvihCLbxTzHS9rD5vChNgtnSByHJPw1K3HLFVoLw9wYLnkpybo823b2cFvSKNXcc",
  "key31": "vYrmZKxKWsSTPwqy6tH8qEAHcysHBw2SK7VGoV47uNbkRfQTRQRiNne9R4jWCFoJqSb4CuaouNGtipeiUehNszb",
  "key32": "3aKvwGCcXxHrMsNUk6jj4wPBbwerFpSr8JNfZJ4MM5cx2TaJbtu5r5Zu4fyVd9eXtqAAxU3QuxKzTcRi9e3idYqX",
  "key33": "4KvzduMrK3EE4kK7pKAKtpNJ5trVjYTUrLPN4GzwmYCEjYpoq6zFE5vNiA9apqkBjFKPbvHzta4Rmzz22W1NcTrc",
  "key34": "5RvCAq2gi3MTb1hRKtrnLLXjWzMaPzJR59AK9pk6t1GJvUtDijVpNLX3rQLJLnr3s1dnt9UtRyEiqHaYj6JwqQfb",
  "key35": "55biJ7z7cmdDtYEpbiwzTKmoXGUSy5BQzSDX6DNbwW9oine6gJpGxveeLPwfwZZuqdqJmwJjwQSUcZEH8JMjXcMs",
  "key36": "5rym7f6snAcqhREykiRcExZmj1aXxWGKoHGvRip6DfK7E9LWCVkxzSbMX2JYPv9AxD94ptt1igfVAhwZUXT6xGVi"
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
