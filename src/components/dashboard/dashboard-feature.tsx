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
    "4gHBQUcm1RKkg7xkS8Rug7Ekbyue1TYt1rA16GurpzHkNX6Xnhpx3Xdh2arYbY5KQiPnym4DDnriqbR2JPqDgLK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24gydeo7rfCMQ9kdkkiqFizxnzH4BUE2ekvFGrYjBXTWUYgV8gRor36RJMyUUzexcgnZt7f89YYPXaxv3FycEEmc",
  "key1": "52jdCN38yQFXwHgMfDYdTZwUcGCoVbXUjxaEw3BLMqKGwNKKw3ZJUxJPoE64oL8zf88BLtndbuttindkYQoUPXbn",
  "key2": "JcqXSojMphhiiy17bN43my2irNgmGPi2svnFoHAj46XzuFUUXrKWN8bSUBt57WuwRGQF3eQQcFNYUZpj2ae5t56",
  "key3": "3pGYNSvxyMPGkfneH7QXFrQDn62rGJp3WSk2vvy7QyxMHja1fK3pHv8pssxvGGJtaGaunqWpoczD7KDVKbrZVJMq",
  "key4": "dfxy4Nqo3QGbMzNLkj5nS7TL7fYBHvvEfVYEt29KhHPaGPpCW6qPGVhjN8VkCeqBuydYKxVtqW1zrZ6tceiQE4v",
  "key5": "4tghnDq18BqEZmamqTctwbERNtxZuxCtxmGNnq82iCisfquQdrKkPRjfVCpyn4QbAuFPRmGATgv2tgF1gUCAYHsn",
  "key6": "67J5NXkFAbsdUCy8qT9DBHRYd394gW4UKQi8VDEXokJ5Dz7xVj72uSiD4T32CbSzyg8hhfUam2S3b1eNSpSLgc4n",
  "key7": "5BRNoPuVEJmbYyjZbWrD2gwMr8SeBPeDXDZu1V2gB64a3yZcuwJPUmz9B9AHDSHTLoR8q9PGerMY1Pn3qrjsjziY",
  "key8": "3fgxYgd77kYbt5eLTVunVH9q2SgTkmcz7qmVcvnsYbsDgtFq3Y7xgD1UqP2ntQoq3gVRY2MPSFYQAcyZzEmHecoh",
  "key9": "3gARYVbAcJ79WTCQaekJa2sJZ1K6ixXcJ7YeLhpqfKSDbzFhXAkEikpk78hKLsaGCaXPJCSoDgiPAB2gQYAMpuza",
  "key10": "5rkS2JxTaLr6ix6mcPPs5zCyrnvv5qHcR8E5XAcnbyCwJN6UGq9VuKXF2RiPLNJrTL5Fr4DUuhLK9HbHepGerT5k",
  "key11": "4HGgyKY5jcQtDJJD6Zkn9aNEfn6RemWmm9ESUq4CwLEEGaxm5qtLFW5fdi3yMNsoprcJmTvHxtzx9osgoHAK6P1s",
  "key12": "4mKEskT9kJv3nMu4b2tBPZYXHRk2PFiXfT1Y7beqDdsqtTyihdkTZgdirYGfkgegJzaDcn8sASoTzDGR7cwDUQZR",
  "key13": "3PqNbPJQXX8TLPVd1o8REdWDVV7vx7PVLq6V6i2NbKE1xxkWg7pCqG1LnRrLR3xt9xz1uUEruQsQmpYqeqqr6p6w",
  "key14": "3i7uW9AEuQ557pF3MRxGj4quXz8wmFrcWU2jviTWB4iKd8jr8NmD1Ej1jjqZodmZsk9n3Krnq2FuxzWc2c9rLdGp",
  "key15": "4VwZmjgSnJSqbcaCR6TyMhHxd9njNtP7ttVcgGxre1deRxMQxyXCxXe9c3UghSoGfTywti9msBuhEvNSvLzrHQtH",
  "key16": "3QaHuobx5CNNcWEuw8mfZGMZJenf5141BnDMaRnLeNq72xfj15MfEU3sNDB1wKYE4bVffVdTmDQvnD2RHAkcJ3mE",
  "key17": "2ngz9dwYCR7MNb6g6oVVYSpkk2G4PazJ7DN22eXtrkVjDhADcPyMaj42XtohS4uVEiN6LmwN7LmKi9RWCMxHNQnt",
  "key18": "9MaBGyoAbn6hkQykK3Km13MwaPvn1SA3Qs9jfCdsV34FedxwJUHeRTBFB1NcyqEYeq1pQd3P1KcfPy3HTH913Gy",
  "key19": "2xos1diYsuwbjdrH7oBPdDKoLPThPdqFwN2Bu22ShTTQhpoc2QaksBvH7uXnw2mqaTjWWWYZGV1xGEkZJ91JovAy",
  "key20": "2zb5KUgqvJ1AGCDUKsW6Kp1brvLXGxtL7a8FSesMjPqxLgzDHEosxDuSdiQ2vo8gShWhToYkn2VyJ1DP6JzrMaSx",
  "key21": "5GFvbB8WrTiTPVAgU7YBRmjCKt9jt3ZY7qjzk815BRTVx7LQLMGEHhNoZmmpx2WfQgw95UAZseFE6o5Q2o8RoBGS",
  "key22": "2XSwcnp4vedawnwAQhE8G4mKubQz6v5RrqnrhVTqe5yL19Lq89r1PSyNdRX4kc96tsbaRdycg3A443mf7yYbSaeJ",
  "key23": "2ZyKqXBpU4PqqAojdazKeoNwf8WLcVd57kLp2SJzL1CnqT8wYG35we5cpAvxJf2Lwoh1frNdAHSPWeMqLPaRpNHD",
  "key24": "2Nq9sNPmoU8wmA9RAHT2ZnCN8poaUYrjvBTcrHFTZqfpnEg399Ui5rg1k6F1EoJnT34z3WMYMT55RyasDqBDGAb2",
  "key25": "2Pi6mmunSsEsDBQbCKVAyuw9dGWBMdjNRcDCpu3yG8eEvaY9WWZY6kQzL53agW9Y6BwiEAYUc5APZpSuCtvm4h7e",
  "key26": "25jjLyDzwsGjhDWVgUF5MUAXkFznuVMdkGjdTKAMnrma6uQPSDirZt5rzWAEL67CDYX9MyVQEVChwxLXnQGfpCFw",
  "key27": "5ocUbX9b6NDGi12mXcrJbNnibHx4tt8xSR9wQ4NzWdN24Eouj6HJzphLXxiXnKUNP979RsqVf517QxX5beDuAcuB",
  "key28": "23ZMk6GZdS8karurpaHBvkPFMhZfLR1yvwhUniYJ3a28pvAs41DonQnNz4XETF8WHsycQEgLgadh15euB9rVrjun",
  "key29": "4GHv9mipvkEwhkXfthBK3AX4nHC2udLPKQULUixcb9j8jst1nCXmVCLSN7KXVvUN1mKgKvvu8vD2bLw2DDpmmDc",
  "key30": "3aL5gpFwDmeTsr6Z1wMg1sdHGEYmAU1QwDqCgXkn7rfYumW8WaaRLodY9SG6pVb4m4Mg8CheEtiDtWpUJmVHQW7B",
  "key31": "3yFX27nNotm9kPWoEPJ3s7c1PpyuuYtky6iUKWMMpH4yxPAUSLszyhQ5zwGU8XCk9o7DWKZf12qGgpiYagLPhd4A",
  "key32": "5BRkwk6fQNaXHg1PwEh9zdLprPH3njxS4K1Sz2tRVdFFuxueBd5XyzRHNhXd9i55aAqSi47uVxexPbPDKYNg7KG8",
  "key33": "GmNZyUqbsS4z5jA79eVcESpRLL55z5X1kyvBxUquQTFmqcevWZvhXKTyLmEDyMVMgCFaVUxfuBjkNbAZm6DTvZo",
  "key34": "3gxGtaPUEUdFgJLPZEzJtoMxgf8KjyW3L64AJnNRfi4U5inD9VTu6L2qtXY8UEg9JKJ3t6thgKCQiV5mBYV4Ftyf",
  "key35": "oytjTFWhyWS9bvbBu8XBG3WKGQU7M7iJLdEuaRc1BMofH3ALpZj3HEFRgR5pRvs11n9EMpWS3uKWHckM6yf6e5Y",
  "key36": "htZj3hSPk9g2A3AhAToZQjLsyiZeYBVMf11pU8rj1pZEtnmD1cvRnGCgVEYpGJ7T3A8GQk3ScnzpDJmiaSzMvGb",
  "key37": "2cJ6ANBVJX2WTcJ9b6VeMK5FjPNcWovooAEAHHTu6HkkjtWYQyDHiy2FNcTALM5C6h7jLzgxmKoqYdUNdmMecx6G",
  "key38": "Ep3SpVkvbktag3n5Gx1i1WD8QETP88qYWRduHFL6agHvBWEFUav8KZKAJXPmk1ukzimrYAd1yAUrQ7n5fKgvM88",
  "key39": "2QCF5deP2aZDKy8qQqJmhJVbxe6f7ApyWG5A3NnKfysMeEFcRbDnEohVsSbLt9KjjeTHGBnQMEohftqzCGjfPRni",
  "key40": "G4uG7t8UTRwhyPVizBr4B2y7JPiQzM9auuFhiHADrEju3pNRM88DZGxHQgyUZVp3C1rZhxz71r7yuTeLJAfhP3N",
  "key41": "JrCWEo76WihAmRwsWXckqisrKBS7ECq2SKNuxyKxusE2EJJQrxXEw1nNcqu19N28gs1cWWajMcK9pHwwW2JupiN",
  "key42": "449wSZfMA2AqfvPt3urVSPeGpRaHrygtw1azajfsVC98apXntNyzoDScUQcxdgZ2UFPAFP3JWbh3WjVzhQ8794e",
  "key43": "4JkjPNZhtCt2DzcfGrsTFEA9s68CyUaSW5d2vP8FqQK4j8ckSBf2bkcLhscbKiooXZSmnqKFjtVimu3EZwiz7RCn"
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
