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
    "5U1qapcM3QmMdXm1YFBtqhFwVx5D9Z7THLHtqMfnrARWPrBqnrDwF817nKV4nXAeUoXtQLGyQrZ4MBbBBc6DQJnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3YnLTWpNTZTPx5xabjggCH9d74ffntagnLqcr8NNHjoYp1LQ37JbEnYWYMXWNUrQxkbAYkMpJVwM25JzyMTUNT",
  "key1": "2ErDJ6rcUVnc3RGyUWbGYDwSTVb9kg1w9VLtoxD9BvVf9U2CFrCVDYS6doX85oTaGmxZHsNAMDzCKG2gWdBHSWXx",
  "key2": "2NGuJgkrhpKa4iqbfrrkVhQdgiHhGFHd8vM7QeaCYQcPwQBArijSbTSJAxnkSsdJz8dC6VGCK8mabTYDDNbMzgUU",
  "key3": "615kfj8L5XwfBDopFUz9tmJFdrp53GCWPigcpoum8kvDgs1KdQVXVVa8iP4yGU8sqbJvbaDgriY8U9GuiV2sjzeY",
  "key4": "5p63mNUMZMso2Lraek9twk5ZGQTB7hnD5ehoDCGsx6GkHk4XGWjYqx8146MVc1zKEunEW7nfDAGNqcYp9uTCocCK",
  "key5": "2b2sbD5E8HqtbxyJpKHTss44PA4kLNcNjF85Edp17uXNCEi9eVEMLE7ef1dnWRjY3LsUUgLFAYELJBn2ixo2pJSp",
  "key6": "3QHhF17Q6QubxGHPa5zWLPoqzEbdNBAokNqCEUvEysv5y4UMo8sjnkiyHh6oUTRfLXaDsXR3JuutBnfYDnbfdM7V",
  "key7": "5bbn6YvLRYzeUAdbz15Hs8WSmKEXHEymh88Kv1pLfXqFaAGHrkq9AiPs5JxhLhyE8EgG2afu1WgHBCHYeDLr4Rh2",
  "key8": "5w2fZEBsAe87rghC4JTNuG3qazoWT3uM3ZgCU3JcUCBtU6qA6pNA73E872izPBxsifeqBj5dYKCU4HZCQZgpKpme",
  "key9": "4dUSrs9TZZGYtzi2WkSU7zGKxaEfVL9LshB3mWh1jaWbvLnRxW35Gqon7aMbHD4JEJjBNCF88qJFKbtNNwZEWKt8",
  "key10": "2Xh8iR1YSCW9cd4prcpFuUtHw72tZmwpJmKVRMEg83oxaVJ5DPskM75GFoKoem4pyg1jgqewwhhRF3bB52H3iVGp",
  "key11": "5k4WABc6NfJ4dRQuQU7AJTxkQiqr4vJR2dwh5sJ9ZNvVDMr4zdeVXHGcH8V11THuHtdGTxh3f9hdk82tGQwAidpY",
  "key12": "2RCTX8WRvLgHNtkoLVsm5YSzqnSX3CGy3nAwGQkDhQ71NTXVTvgzjbh79NdvM8cp3CRMCsC6TKDBH12u5FWHyaJH",
  "key13": "5vbDfmk8FJw9R2khYsk4RfhXFQ2qt9ooSDDDWX5cvv7NPNewnprdtsZWWdq129iUCDmkmQfrCMg59E8nUBxTzDaL",
  "key14": "5tdEefB4s7N59MCS4sJz2WbDVoQgGct4PAQrNVgSomAQJaBvGRmuPjxkBgDpfe3Ke6DcoMPW9Wnvf3QmeAqZw64t",
  "key15": "2C4cbrwatUCzKkR5qsBWaoLFvW64ce3u1YD8SnBhWdijwDyvBHgnRF9zj2cX7z43tdVUrmUJoDuz6U5Qz1a2VprD",
  "key16": "2kAPsz5PweUFJ2mwtWvcZm6Y9SdJPbwLT2rABn9mKySsvcRxhXdXr9BNrePgctvYXUwi5sEWM9FbBsjij2ySfjfm",
  "key17": "5Cu1t7SCTc17FpPGYZ7bdYdL6Y6uTxqVygEZZFjdTuBzUTg5SC8RyrztweTjiAnsDNuX4RCSDEbLUzW8gwpMxyCN",
  "key18": "3XThuqNgEjaG7v4nsBhxna11SoJvQ12XQyQCED2YHmffVgJsRuDhTgL4uKJn9fA1DWFqdj9TXBpewGREuyGw9sMz",
  "key19": "2gb8wN4L4NSDst3ZKiTSyrXktu8683GzxapR4RL1NnWC1ZBGV68wMXrfFeKpPhUXfN3nNFyHA9vLietNpavydsg9",
  "key20": "2r9wkG6bJPeeacqP9hUHismxbuezXXFvqDDvAiMTeEmspteq5jPzvBFM6Y8HtB9CrLik4os7BaSn82fngT1We5j9",
  "key21": "4vVnxKwiVGBbxozwigN2mwNrpyr28iHev65nYhjBRvLskVib8Q9v7RJbNciXFSZoAT3E4yc6c3mBGSoxNMAR3N3d",
  "key22": "4UEAr1o5oxgriY6XbfXAoztD2HmdSAsbtUinn3AK4zGL8RgJHSk94yog7GZSJKBfjXxs82V3ohP3reccyHgGKjfE",
  "key23": "5W5cY96dDFBWBmpbH68g5UvDYnMCZfJgHBVbj4NCGZhNJpmH5HxWB1HNpqMmKEhL2ySP8Zkp6tSeUU12Am9KvzTp",
  "key24": "WpECRdtujo93ReWpKHBj2AZeafWeaCHWY2Uco9617dySwt1hC5MzazSEDnkxFXpVw4PccNU5WH4aFdXyUHCVpHN",
  "key25": "Qh68ZJu5GYXfPAFTwJvmdQ6uK2ZuASJbnPvMMuqeaZmbz41on6EJYAUwDKTky31ZVc6pjeJ2mE5rYGUNpyL31z9",
  "key26": "JkGWMvDWBufxjFdTYcfnoC13weZTG5rqdyA4CkVrxPsjEXAUaKKtdNiuTqFPyDcf6CnspjCfCcJhMuwc8pH6v8D",
  "key27": "4mJyCuRaeDKiMgTEnTTf9bWSEjbwynk9xuJTUjnzzYKwACDuAz4jb3Gz4tMNzYYo364ubH1gqQRTeAoJLKiy1F3n",
  "key28": "24iDbYU7TrEhscPzbcNYhrU1QMWokPbQF19HNrvEwbMuP1RSuYr8baUJPFYp2rYQdHFmbkcqbHWeupFHo3a5jo1f",
  "key29": "3TvceyW4nYvnoiV9bZHMmxeUXLGPePYQjQ2iH7d6YZRz17xkDr9uw3tVwdJ5qgRf3We6ep7EnkZC2gd98u2hNFU6",
  "key30": "5HFSzhwq6S5Pr9JoW9tbp27kBFk8TS5jCjjQqznGKNREJvtkShVn8GhnbLQP4s2wKvRpKnCvJCVyfq6EJ7aXgumH",
  "key31": "3Lhks8qbXavz8EtP5Yaw15d7C6A9QNFQFSWpcv5cYnVVWQFHfovttgK3m17NSygLsVQ5rUCitTEmgyAYY9E4T92s",
  "key32": "43X5NZeKxnu57J1ZiVjvHfUw4EdU7rtW8SooeKpghhn1V2TtERHdYJ2DVVJPM3arF2egNmxgfYx6sJKqWjA3yHdg",
  "key33": "4aVYtZg9jX7oWooTeEacAQ5VQyBTXwhKgfrEMWcHvEtnf2tgG4WoD8waiF5s6VaaXcHvsC73qdmYQ8XiTxrK66uY",
  "key34": "49BAFy6otGq97PZ7Vy5DWFXe1h8ddDMDERyuGumQQwsrptjXPwPBwENnHHGs2iGyfXX42G2AYe5qAjfBvLorUG9R",
  "key35": "pfQP2rrhZY3wfc2CPsbjRH28m6oZpUQoxTEJMwWnVkXvtUVr4LKFdDaRXtcNYw9N5UUVrFmgza8566LT11yYK7E",
  "key36": "3rNZmudtm2fiQD8J9YM6wGyVicY6o1nC8K8yCCQvbJ7zFEDHpPBvF5WSh8qUtTWh3apfHoALY9q5wyT4j1PkjqYa",
  "key37": "4bCgey8X1h2j8ss7QRiU6uA43KgFDewEUc8fyPTthJY2MyBNvZQuJJi5KmVkw8WGdTg2zn7BvTDdZzpCfp39CYQ3",
  "key38": "2qLVTWizpe7f3KVJcSueu178D6QcmehWhNEC3V7TtucvHCNR3srZmVSYvhxh1vMzZtKBXin9ttMmDMWtk8N4H2hD",
  "key39": "66ubqGK3YHhPKXZ59CRDGUqwCXwH2BpjbhYJyb62dYUoSkYLEmceadDwh2uLM6CnjSja6BVsqZoNqmtyqbLtUyy8",
  "key40": "rhQDCkDNzi2mexwRFrkNEZbUYJjvz7cAUNTRMvEmTBcaWithK7HfTQvZ6dzNHR7V9gJABcSaXRYDdffsFLLdSJ6",
  "key41": "2BWusTtVuiDCF1eMDaHoSKpzpUG8Qf5gnt1fietjnDNazVKjTyyy9FGoEK5tNc8RLGqzHv3iZtiDoHCHB2fvuY3H"
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
