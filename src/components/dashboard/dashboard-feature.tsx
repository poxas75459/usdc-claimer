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
    "2viVEHEQ3Yh9z4ST3G8B2v4AHqN7QZDyinY9RRQv2nqVmaRkWvoQSpa3rTx8grYcF54dGKr6TrRVXJwXQtvZzUqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYM5XZnWxdh6iCzdaHxrhKggrrmFF6FPxk1LqAR2NxVtZcTFuRtmsaqNrR91ggeYcQzmJykAFfVQppMAgEug7cv",
  "key1": "rsaL2efApYtXKBVf4k3J6DH1EVoAiTNbrizqi6eNxu4hGKzCHpGWFKmua8Kwsaq19UCXrPf3ifVh8P4rq2whhQL",
  "key2": "3Y1b6mSrCQv8gDF2y6eAZEsJcSokTJH2SDmzVZkymzL2oZ633QggEjx2GRa7dP3LtJdvQ5VqdqNgNxiDAD4eQNQW",
  "key3": "63i9NpmiNa4a14EGoi4ZCE4Gngn9AYVd2MmD5vgRvkUeZVyu2mS3N6N6GBrAPBH6f54M1mx4BeXmFmaY1MwVDndb",
  "key4": "3TuCMhGxwz6ogKjMiXqSPJtxFrYvhQcXPUNDCNAWCDXUjvpQ9ZV339FzAVdLr1zu9k4FcvfHHRJDrqmHcmt9g781",
  "key5": "4hnh5T2huH1x7ewFs55Rz9QTsY3Ln2hGHx4tBY1HmuXduPjKGAvp25zsQnKdgxfBP6CTNpVoc6ihVpNbdjSFkPfk",
  "key6": "2L1qtLwUT4oJoArFHfShqyJcxr35rQNPQGD9bx2sdJrDv8aptHX8a4ToVLEvaFu7p4AkDM5AhGZ7NQo27jeRYnJ4",
  "key7": "4g52tuvfFkyz5YC3srsE4Y85fojAHMBmHHLrRnieUycgmDee5dddEWUKNNcRSobTm5SjxUnrEdwo3eG9kFcLnq5z",
  "key8": "5uWVvPHomCpr3waopYUrMBENvSs8sVEJmh183Y6e1NX62NXMVq6nnti2sQmgMia83kdj6tjAPbAzkN7t6bmhimNS",
  "key9": "6bAsvFCNrWExtbwqBYC35mwuQuquarMKMhFjHnNVQVjYf42gWNHWZbkmCsFrtKc6cAVLzDknPkFJnZGX2RyJU8N",
  "key10": "5LjoSzGMRLnN8HbyckAGCxHYPgwkhDYRhzMzMCVUs29FJJTYhhZDNypxhhnCXRpynDrew69CwYBxQPdCpAG5bLuW",
  "key11": "3vEAW7VLTD5jsim8cC4YHaDBoYvU5cjv3nCvPFYxCqswXpFUsUeKcjmNfqUufqQCa8pPiqQy1Yjn1kTZch9oX7N5",
  "key12": "3st8HyMY4T5tupPuSA2UYNoXCDAPa6bT4toCqB9nk3eBU7MYNMTGziofVvX3U1hPRrjPQr8MaDNbWcQCEJeeem8i",
  "key13": "JuUBCTZkK8BGVQrYkyewuzmVcyLkdSq4oK9qWPtEPAUBD5mXiuzbYA9UVUWeqyEH5kB4SMsXzrEZvBXPUwKdxzP",
  "key14": "34255bLkZjam9k5UALzojWuVxPNifQU9pTf14awsD814J2stqCERVJEP8fbmEV1U5YErvHKozJPZw1SnAXB6V3Ji",
  "key15": "4q17tWSDaZWyCq4JQWUCDzCB6zX6totnhSaLRz3NQtEKBMHWthhC6a6vqJmZfBmqpD89v9HfCgV9pesoDtQMnXR",
  "key16": "2T3tMVGwK5BA4wTnAEdetwnbd45hokvTfzXowZ4Ln2eZvLy5BSk2R246hRqNpw1J555qxjFpFmC6kUWwRCDiewkE",
  "key17": "2SUGCn5UZcxUDGTwwFiBzDqktENF8gCdD6M8kKwuyGzbLkn8iWiT3bAW4SBzGKun1FPoarA1UwkngwkCdUwG878p",
  "key18": "tFrukRgXdZMSL1QmLzwGnuwb9fqEwDSaDCwbmDiknpTk8WtL3VC2ZpjkXnzzgANjDhcLqFbDNofNJJxbBC4jf9J",
  "key19": "AvUYgyronoLhDV9Hbww2sc8jgqHSnya5QGfJR872nRWdnBvn2zS9umijBgvvj6vsL5E4u4Q8MT5BaKxqXzTt5Cg",
  "key20": "4hQJ6oq6qJ2Cv1RKo66pwhBi23HVKMEzWE3tHZyNJYcfkqcjMj8ArZqgMdVUv32nPggdYnSvbGgeM8NMzv8qKQDg",
  "key21": "2EfDx9AVTEs2pkGft2Q3xH2YxCBRRToprh5zTAZocjGWdp8b7SeNjpZWa4PnAnYVhUQ4TZurMrvzFDxWQb9bBxgb",
  "key22": "629Mq9K2KF8MmLWXDDyYy668GNk894VeGQ49arSWn5B996TWSVEapE1EfadN263v1ji4ujKUArhPkmJAyjFnQLhm",
  "key23": "tzkAMdxAQ7CjYGhGA6mbL5HgZp3uG4H9VnegAgmBWDpv1f5RxBykepW6wg8nPBjBzKuzzGEGnm75n2m5opk7bUb",
  "key24": "5YHH1ZwoQ3egHgnzgtkcGM3u3ZfmH2Xf336RpAUB9dw9uRu4nhJWHLbXvCKYga8e7MFk6r7SC6WkXsq8FPhQgF7c",
  "key25": "5RqFELvAsvysWTUPn59PC6LLEY5gmb1cJLu2GhJMEBBwTZrAC3wQwcNEjLhK35vLuDK6fnaiK6LgKEuQdV2GVN71",
  "key26": "3tkYyEjFCMg2CB5fbFcnpxbiF3zbCLEXFEAWoRTwcFwjnb9Vno4jevmttbx7EYoYHDTnrHVGUsmfgXpbSnLNi92m",
  "key27": "TL7ysrY3St871WkrJVpFJueGjD87b6gtFyKKLVZh4uXhCdmuGX8AeA6ndd4iDNSrb9FLoPBEfgRBWxJJiiGxKqk",
  "key28": "cTM6jGXH1pZAWrG7BJZtTeVx9QR41D2LxfMc93hgKoMsffGVudaYuh4Ax5pzybwFSDPB2jDdsbACrJv4YeEk9px",
  "key29": "hmQbDf8bQ2yGPbrTAMgf8YuqEAuitzf1HuW2yKpQ7hJj7HCT5PEYKBn4wWNhRMViJHuUx1nL3vh62RHeY8nARwr",
  "key30": "4PWk85b3XTvm2zMXUndvse8z4czzeFDKkPTtYEdHcs5e8trursM7YywWtg97dugZ1RvGB9JkW33oTFHA6ymcz495",
  "key31": "TPJMFSDbwudcJssDrh3gL64BqdyTnxniunHj6PGBGrgkoPRixAeHU7dsGtfQRmQEL5ME13dY32vQr1J8nGUhfer",
  "key32": "65oPK92rW21z5b6PaiQWf92tMzTx1h7tuKi84CXzgwrHxFthREtdnsBSMqTZHsGeRtbnjPFMc3S42vjoNTTvVim4",
  "key33": "51jWQ65ShpsuW4QVYZ4qiLMUYCLsDYSRgmM5RfyN3s4Y9Yhcf3YVUuQ2zE4B9GD1BudyA6G56U3AiHnRy24xrS1f",
  "key34": "4ENv3yUHpGXXNKvzg7VgGYhWkJCNLLDCGJpXPbUiSmzojxxZbEG5KPSbaGMXvj66msuBwUyKGsFc1Wpnhig8Uwth",
  "key35": "4uHbkcUrZD28xkrfwbWhDbULicRHLdxYvX6sFvue9STDwX9GjkNit4it1XmfZXXZcqAugHtfQQwFXVi6Mq5Pd36n",
  "key36": "57fezHNdfybqBcP9Yp2yxNiPM6NVkBGTi3BZiwWMZsJdSANM5MKci2ih9f4YTVYQUWgCsTD6NrrPJMasZhe4R94i",
  "key37": "32oZZ89LbzAPpxvjQwRAeiLDBJcp2pvUyrZnrVjrPuhRpAQWteehWnUKcjFX6Ssc2CZZFAHfnX4FHRq2TLFmXPGC",
  "key38": "2JtWYM2pdGA64kaJRSBrm8zTdmEmu1uo7EUgKqqq5skZfP71RviBsLgjAwbLTyW56TVcatD8HuYaEsrQg9cPhfsA",
  "key39": "2GTyKFYNWCZL1cEzmJurgHVJAUPcgi1fsizzfTkaJ4PZsBPTaWMUvbni2KS3Ap6Fr1r7wvhoMuZWqnjxV7vLfRUc",
  "key40": "3cFJPrxTbfPLtgXc5EbuzKy1XLXdTZYpV7WCqu9VNgK4QinQ49YQeDzaZifKuAz1hr9vyqHvTiPTUou53mHiqk8K",
  "key41": "3QERpAAwmQUPDr3c8fsRCHQweZ4ZyfuvXcPQALR6aGLP6p5J1bpixJyrNSwMSEBiqJVnEqLAuasb7SUkBDLsvzJB",
  "key42": "3N9uNeTVx6rRtQQDMMSUJvGTt6jYynz2G7jBcssspbCqkuZiuFwkSVD4cpgHsxPg1At5dvDM41NnN66FQpwehXnC",
  "key43": "Yj6vW1hfJwNVsPVCFAqbbiTncEWS3k9MYd4aEmMS1WF3fJRCLA1iuFax1a2BwdrNMHHsmTaFKFucNpzDfDWFrTk",
  "key44": "8gRc61YsoKxU2epzzYCnDbDeFxHso2n8MikACUA3kTcXj1CPmjjrtwbxgEyT8mXabrXAHNsVqWiYfW3rpoKdN7N",
  "key45": "MPKqRk5kD3VYEMihBVp5aQoc6Pa362pWRq2NX7S9NpBLTN5zw9iq7F2wEQVpHBnHrGPd1ueA53g2ofNWz1NpaGu",
  "key46": "5aXjmXZCjLVNtmucBAyMM6FRJJdY4ZeNXKrNkCS2iRzoDnbeZ1KfAWbPKqragyj51gJGQBdCQMWUaByxZgo9k9UA",
  "key47": "7sb4KgrFJdwiCNA1Ds1cnSBMXhtXjDQJgmyebT7zGPXZSPEHc9yFcg3pojkXYyVXaxG9ApddeNdbfrmuCT478rk",
  "key48": "xXzXs9pJUDctH4mQNHPHBVqh3e6w7YgbMkZX4PC8E4sK8yEDr8MYmk1pZxGAaY6Fgy7iuCvDrMes8XK7k4CbJou",
  "key49": "oCupEVYMnjq7JbJeYHaFxG9h4ufZLk2WAjvS2VjciibmcDArgT3TyNgARQPuhnhfiRci9MyBsQuieuF1kGzAiRN"
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
