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
    "5P5BU3aZbNqPECPfLfnnPu3dQwZMW5LGwtQ34inUE6Xoafq6LDvZE3LkSzv1rbwX1RxAve5zkUftwjP5S1KZmUoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1ZgJicQKfKmzNuQu2GnLKxzDZShQ6Vv8bnKKVgPoGHeTt84QS2wVeePtYsaenjX3jCRqTCRXUYLEXW4WHnEUZc",
  "key1": "5x9nAa5KKRZa7g6uCbTtU9QhT9UzF7BJA81pMeyQGHBeLhvQQqeZJwbnrHUpEqtCsDEWVPTwEc6LJAEmPVFrqPHB",
  "key2": "5f6Rhx9jT2ep64QVZVt4oxnbvEQry2WjZCrfx4bzvLndZK1rzvqiNYXEoSuoYavBB46XrFPUFkA6uMnhVi16JyGj",
  "key3": "4mimShMvqBafTcCwqBQrhARsPSYp1bqTtd4UHrtsQQosAHqgikdzugHi8LZLLFv4EeXUqrrXLpHoRYaMU7pHXfmw",
  "key4": "57EUWG3ur6oXfgAk6mPeEjjUfMBJyj37rqS1GmRzUhk5GGY1S5xrRfLnSh5RsGiDoRDbJAze4aysfnMzbCfP1ZcG",
  "key5": "ydBj7ZhVBZZabJVuQZ9pYiU3bZFbXcz9W2dfvMQmX6tFDcHwDGYPWSd1ZoxPTW7SeVD2GSCPdPYRHW4KqZavFug",
  "key6": "oAFAEU8fh4xcDucHRzLTQmnPj4a6Ymy8eLD9u3gkgqNyxcUpr2nSqfBLgBMewEbjBgDgTCk8VT1pgrZRzVv9udN",
  "key7": "5nXHb8VSWoV3gJnFLWyKYwTYrFqzmXG5XDjv4gkEuEoybQwzbT9AhC8VGafRCZBTUtBM5BKeSo4mmLNgUEcWb3uU",
  "key8": "5qbYR5KcAsKQvK2nX9Z1D3XmiF2YGBYcCezU5fnaJrNAqVnLh9DBEV7FEKU4J7C6LgA79ozUgqbuVF6KomhyyqRs",
  "key9": "3swrQWB6daEo8cY5F3gWyW6XfH3bengHtfAqWAyQQh869p1riigsQyiGBGkhsYrBEAQtbcbjnFg81YpDtmT6DGL8",
  "key10": "3JdJMFhAhBAT1msvbtbFr6YS68L754XwTvBej6kfHsYagmFaDxQJabskAoWxWgzuhefYQbb7bs21rCPB6K74r6oi",
  "key11": "326mqSVWgXAupfCiR9FMT3rMXChKbKKVptFaskBurfHLtRsemLiGipA7xZbEJ4dBbJD7bcpFv1KDGCytoRRGNjrw",
  "key12": "4k4JahBbLK1T9gUErnuYx53uhgys5YNpyeakquwwd2PuEDGhvY4GtikKRupHWQr2iVJCf2mqk7MKQtsj1gsa9CJx",
  "key13": "cLVXmCDc9mMCyux8ajRS41b6phog18ZbFwDpe8HdTH1c9FafkJk2jmPuo1tZee8QE6Esgy6guHiHxTyGHB8ZDKf",
  "key14": "yT6QigrEi6ZLkrzU5GdHZ8yKB2kpgLuEsddfWuPjcoNJhpiHPz57FzR8rqhD9ZTqWTjaS5jriDUgBy14uFRxw8n",
  "key15": "ZycGVVy4nPRp7MU5TkKG5wMKErWSEkJqwUUSgaJYNGqodxMa1DugvZzC8rXU2UnqvprNDjsdcFzTCo7E7ZtWz4b",
  "key16": "3YAXjQxFXtcwvPRjBo84H4VL94YsoFC6mqHw2vPWvzoUoSF8u3K4VgE7AdjfZhMjPe9RPcNThvQxPbE2nU1woFGE",
  "key17": "rNgG6XzoeLYF5oGhY7jrjp96873E9FS7EgCp2ozBwA8Nozy1SURtAXvftJ8GuvHH8BXqyec39MJkR4j3fhV6opa",
  "key18": "2HLJ3cgqnrujZoaGevPhchPg9SeygVJbB3vwruoiSsxbh7qTB7v9jGCpnrbBHmX8AAMf2QicSy75juvpXPpfDDn1",
  "key19": "5w9MrtbLHPBrcfeczDHMP2ZRcnPkKahntTXcNLt4mC8osA5J6J4DujehLQBKntCm9qL1dkkgJModnAxSqJnKEzKo",
  "key20": "4hWyxT6ANVoJspW3gsCj8mmuqZLGfViJXeSu4H2rEw24xDbWGSTWUsFTY8CfVhfYC23kaU3URp4uujLynwH4Hxp6",
  "key21": "4hyBGUVTNWaqZoMaArYJtboFwjaJ9kYvn28haXZ87ULHxFoiQCCm3dyKCBiiB2uxNEz3n7ByATvMDELarQYC7sQ9",
  "key22": "3zFeoDSAjfKHYVnb46urDLCi3MkUFENqTqSkxggNa41pfwBjzUckGFecAsuPsjzPktnVEmmVGVTkmqR4gsjrHnar",
  "key23": "4fyHwH2o9mPTqFfrc42hWXcPEPMkAP9hCgJMZyCxqwSLgFpsMWfpZUBAULiruos5jXeFfhe7348jNEpP7JqGzqxg",
  "key24": "2jDP3zrc4XPtGcGW7Qa39FHUyYX9cGkkggtF4uPra7At89tZLYoK28hivK8X3jJtHXdJeSrU2fEmK1wyvZcQhRzd",
  "key25": "2x2vkAehdvpaEUScC63TgwxPgYVa4S8CP9csp71Yhi765KneBfxH9FgWzgjqq9F4rJJgyBUagdYZTnCwoLdEhzPA",
  "key26": "5bZHvaSfEVTurMCbb7LXPYvN7fjRDu4tPpQUFuhEvbyJgwmSo8YBVE4zgK4gLtoz1unnRV2yQCbrS1QkxDeZaxD1",
  "key27": "4D6GhKpBG5raaqpJdmxCJ8VvKe1KBF5j2mzGMfewE4nzXpYrEMGikybL1cuxUsSe7ezthkePnhZo7zC9ouqEfNrM",
  "key28": "eGKpCLCgBNpTGdegKKGUei87mCD2PSW7XEJeDAa8CsqSiWP1bb4PSCKhGQ8F9bDqZ5V1532TN9vN27sdaTo8WwP",
  "key29": "3v4NW68t9MA15o2JzLAKHTwsqEMUEmW8Po85RDqqinyL4mGCcXy4M4gjkjekoqwSLHvRaN9pvtSVs7iwScDGA87n",
  "key30": "5VviadMNCsRfZj9DBB2hPACi9r7Wndq5ojqHST1jFe729snHQZRmwjh2baCyHPJCRmYKWZEBkxbbvWS6yuaY3edo",
  "key31": "2QZCZR8h3hS6idzNW31TkAJdEUKsMvSDmPvtZV9HV3ypuJ5YK1CffpJAVqTxWfVw8uRhwCTWRcKJiydSF29aa4w",
  "key32": "3ZKAY2CfcUPvrqgCdEUHtxfnfNMQM3V18pMYtWUMMiTgAm7LB6h9m3rd5Wfj6qQkFRmqinmVZQLvZq6xPrmzpirZ",
  "key33": "41e61TZWyTxQPLr1EdmHemRqotvz6UVcLJEa1DB35a4oVkdyFjvqFtTvQ9yTp5xoG3mZgbiavHEVUThyg21NqHgT",
  "key34": "2iK1QKmt45CkZnCtGzKGcWfHeAXqiG4CmGSzKBaEEWrekLUc6cw3swq4FJS3E28BwumLbuy7odBfMZoaue9yw5hY",
  "key35": "bW6VUUP5mV3GWLhNwBun6JvMVA4Wp4e2kgrYgrUHTy6jC7vPLaNkUF7qxpoUsWb3WoEGgZ7PKrT8ZeAmcvKhbTC",
  "key36": "5MQbY8bZYpdQnvQD2sxAELcRfNk6EeiRg5NjtYwYmri7ArpuJXWhVBCDsGwdt9isAUPsDQThPQGC46grtTwxqT1G",
  "key37": "5qjGaj7deukxWuwNU9sU8sq8CqXb9KDpN7fYxaaifpkS2sdyyGW6ooA9wMCHNGDmZArs4iJgjFptijFFDtHis8HJ",
  "key38": "27EiNPsx4JiwtRNxxdWsEB7XfzjYAzoh1upghiSBvwmgFkhkFsZicqCyqX5f6USAUPCqLt3whcAo2sSagt2yDyr8",
  "key39": "2ru5bV55LMMzqRzTqTS1ASgr7ZuTrhJLqU2p8nQcXsQ7UNM8XtyHoAUgesTLM1TXFfhqiNfmLWovUhYRN3KgMgpC",
  "key40": "2maeTiRXTYNYrsqDMJ8iDS8rpXhvXeGJNrP4MWGkpZS3UDhB8rWcBCHFNXdRKxf1QPrgSo4uEuixk5vDz7bkrmLK",
  "key41": "nt1Z3tGxB8XQ739MQFxSvgaA1sjbSFaaHNoN4YFST2dRNNvkNponQ5RBjRHpV64Pbit8oPEQSYcEbXChZedCHUg",
  "key42": "2NdWVNkzhZFXERPoB67rDwsugcTabrSd133GP553RoRqU9sZevZUUgKusdnbZn1ztVeMZLR8PaXvE8k7xwZNUWeN",
  "key43": "Tr1KewVb2cTQJBXuFNgz8wPdQD67HdAoL8W2ViuL1mQBJ6kAbpw3vKVDL4pdsGPGPHNsjP5MMGu6ADgTvGYdbYi",
  "key44": "ixphNTgkFfRSriJFE6LCeaY8kJ1oQDzNBvHiwzGLoim5PRYPGQZXUJ5795TNoTbs9xs9YkNEKaccGJ9XGdSDtvj",
  "key45": "4onGxqdcpVwwPxhjJS8fLWsvJCuAu1rr6fEuvEBmDgi5v2Vo7ZzEM1zkRJeg47m4rN3n1jyCtQxpUDEh6N1xAYPm",
  "key46": "3L8py3Y8Ei6gRhz5dnb9qkXLdbkw551g9op4jFYfGfwfWY7ZHDdpqDFVkZ9eTpGbWbcg4qnYcbNeiyLszQWwQGrT",
  "key47": "5NpMmJt3VyaZujWfJVvQiPjSyg31GfkYxadMbCvPUnVDtwFvXbgyEksqqv76ambq3Ag8pfVTum8BgX9X1ebAGy8F"
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
