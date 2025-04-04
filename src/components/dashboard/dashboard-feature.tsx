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
    "5isLEJVkGqQbAVgG2mjEomE67sAChfwF4AUtKEXLpvVYLuAt3EYACR5YoAPCAhWQF3Ro5iJTFb36YfTHqv4KasZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48FUpWFmkrKSm4EwjKDUvfX72tUYFtLbL1QyQ4F5XniqidxoeS4YHaewfNLpYYskHgRRBpAXKdmVN3PUJE9waFs6",
  "key1": "4ixLjyNAnVYrKU4dB4EZ7LwZ18gESmm3HbzudMiwsrJyckN9DspfcPZwLrMAByoVxVGd5ART3jcygKc5g5bumSi2",
  "key2": "5bw9Eh6jkc2wxdQuqUZN1vjNFkeDWW88Ao1JugpxFYG6osmWXUmFcaf55VcY66s9KjQLhCenXEKZsvoJAhXC1dyK",
  "key3": "2YyToAHZq9CaR53Ar9BZL1YuEazVjuZeCT7b7VXxgbcTfJTmKAyw1mpGsKeUZP1MXFbvPkEZFyZ4YDGufvCdL41s",
  "key4": "2N56mDju5o8V1ZRtSn7GtZYSVo3d2wug3DiBfLj8LqEDBZxFxoP8e3VAdJeEfKyc67KS9NYWwgj3Ad1UxDnceEZT",
  "key5": "9RUJSjUoTHZYDHGdwxjrayEHBxfXF9Wz9fdJML7ik1326M5FNAbzmUrar2fYVcpupHW6yrcEnFMtHuL8UVcj2FJ",
  "key6": "qaFU56oyhaX4cAucmCejAn1ZLNSzbcXduq4tRCLpmSvguXpXM8nMv55CxiVBfxJAffLE87hpxL52Z83A6o4HwnL",
  "key7": "2tgTjyLY29JV14yzJhkaMoDqD9BuCFA2ugiBjbtqF9mD8nVQ3pfQPu5bkRuLvu8PdQ9wDUpvtg7dVqbqnQJHRh1Q",
  "key8": "2yPpkSNQXA3acxNZAyVS5CgwSJ9WLz5bWVbkjEDaLEBwpz9zZkdk4w6grLMTZhredf1sy3GpxqACQpiRKFq29q7b",
  "key9": "2P2bAEF6ppFPJkiLSHmbreegrrXMazLaemdE2kTieoPgHjFrnBtrtZfkWsRBXRaGic5oNQHgrnL6thBLqWg4qqEs",
  "key10": "5PPmKKxYaMfzyr65WPTsgRxBDftWFSjxN65KaEedq5jP7hfJqY55jHh2zx6NvUcEVrPyU366gS2vN5HvpDNVjrFU",
  "key11": "Dta9gH6o2wXrAaaAEkxYE7VDUkA8HCx4gu73ej3wvyHDzvkRssvf7b2iPSRJJYPDyEMKeHxDgiMoiKux31T8y4n",
  "key12": "5pVVcko3Ht8kVC5rX13m7NBCCRkWGHKSM7w7wz6ZiubcY89bJ2MMaEYjwnoiqt6i12on9gNSvDkmusEZQrnQiV7Y",
  "key13": "34zw71S38p97Mzu9JhYBTk7VTyA3pRfmrQ9z5JBppCPrjFtdLeLEQBWx2kvzCKJMoitKShwPMGRUHSGcujqmwnwt",
  "key14": "3hBC7XhBz4fbTRrp8eSW6NpS6fhTyeJZaioV2BJWXsdFCes8L8X3Lt8jkUqKMwvkXSHkynAyLJD9V28nGbp95ktY",
  "key15": "5emZSB3dxfoeYLA7nqGd27F7jrtQGE2tKk4UWB51D6apLsnkARfWQS6sRugHcM7GpgjG4M7bbocLWPpKNsAkMLtC",
  "key16": "564mnCZG7D4YDEYSeEmV4BNHEVMWx3mUBpXFKGGsU6SPmg5Xexoz4WEQ53ND7AX5yxBxtBCSZBpmbJofo5dEvuDj",
  "key17": "2Wks5tJvSSqAvKfFpVcTqWwhaC7bpvnREfYn3GfvNDZtuP2YxPKXXyW7mZa8ojzafvoqG3kDVdbvqhbx9XTCieSS",
  "key18": "65UK5bkApKTabPgajy5VyXLXmNY8igFbg8yXSKdxDmMHhzxh1u6Rq1WpVpB24AXrPPugcA5YQ1miD1VnxNn22BXn",
  "key19": "4RYRz825Bux3EJrFSyKj4abp4zzpAYtMvDn2Ny6vtc6v75gCwH1dpfvJjgXZik5BmXM5nHz8N3dhdNjS1m5eT9GL",
  "key20": "4GzZMhcjrZa7m6Sy1uoKKo4xoqv6rTAi5hZz3KUUEmWnVRZXw1tQvLXjN92dYHsUdLf6RDZzVP5qwk9L6WGUiM52",
  "key21": "3p1Ni5VjqCwBo65PkcCDXa3cAiaXVd6brZXS2NEan9hnbwMz2xwTcfkFtStYcAbyGFtBjZYN7UApDyhh6WqLRzGZ",
  "key22": "673PrbtRi4ppnkTpr75ccGZERrCe973awTEPACJTpPptjxv3pD9sEeqThzmyX9aUzq7wwsW6sgwqySZMTiKPjwoA",
  "key23": "5BWct26Gbz1HHfKUt86wNsEu828m5CxrhMgQeYimKkzDDaZGrzpig4H6DVxxeoMiFKhhYUnJH9hso5AtKvDcBhfZ",
  "key24": "4bEiyCgxGsJaJGZ8YejYJLSoz1ArKEUKagNoL7VJqJ5Ut6aiv4NpGUgCqqVurJBcCFoEBG1kaFg4mzWLpc4dpv9c",
  "key25": "2EjCNgWCfqbbgr1iAfUeHQwrDfgzP9YQUtEhz6F5ybnd2vqDeHspCr8xnVivxBpWvVkTqrCYHfvy48hFGfVG2Abo",
  "key26": "2Rudw9AfWK4wgkkARYEzcz8jopBtGeH6oEg2Uf8SA44arLuoyVYfqvJtrXwLNA8dTFgxSynMCqrJtkndCFAUPz5c",
  "key27": "3cNQGij52nLb8zraMeE8uGBXK2ADMyKcpEGX4bLr4uYyDTowfsTXtCXrBgS3dP3e8F9sMidvA3rp62FDeA9Ly6sy",
  "key28": "3rGJm36juJBLfjHtQQWqwLzr7cjg7SvL8hEErji7CDuBqorqn1QbfrRc7Kxbe6Wnv6d5k8KmwLPgrEERb5RLfLfa",
  "key29": "41FmvSNZ7fNY9iBwVuFSVs6yokFfwFWF1ptJyhpqfMFUdvG8MgH5NWzNfBEcLwN6ixFfQYGH1QD76QEV4SzQMBxE",
  "key30": "pPVDJYurneXFWB54Tnh89g5PvVh5uRKzgDPVhtoeo1aQmk7i4TcKmhzE7q1KbjvmgCiumWKimhmRxXYXEBbaobY",
  "key31": "YNyozpUsKznMDBVpPx8L52bdJkc3CoiUTR8PLTEKos7zBvoffD44qGz1TZ4DLcKSrJGSW8sfARecfTjmZn4EJVb",
  "key32": "3o3YRrMznZZe3J8dYkAvpQuvHN7UU3aFRmeaeWQAhEQNa9PrnLj2E9TEqznWBseHr85GUXWembxUnWAuQRVf8DG4",
  "key33": "LZaEQeLV16xH8si5z6XLbXerqagpsVgiTK9ZoYkDDfCmko58bXSrAXAbGh4GRyo5C2ai2GWmAcbzRbaFciayB8Q",
  "key34": "VqPBKDEdAyJcYX3AC5oGmJivuvhV1pDWFk8TdPsqgqJghEwMMZJiTsoF1CcaL7kte9AZSJpFnXFBPnaJh7Bp4f8",
  "key35": "2epry7YLF1gmExeR9b5zKo1bS9vkoeYDJKJV764459co6SEBcTfAwyAdDaTKuM5VZZwssApgR793uy4NWQFdADQx",
  "key36": "4NborFekcaSNEnrTwtjdR9ymfPkPAn99Y7vVjMhB4kSxqQ3hEh8E44bfr3MFCGrH9pckV3eN6Cp5NtbGbfPkDKME",
  "key37": "2nDEMhY5cHXeFz3RWymTrE5X3oUpyp7N2KUFBx6PC1GthiESotjFBpiPehpDKjyMhCfodQAVPbcy5tDGLHkhkjZb",
  "key38": "4cJGYXEVDEEaashqxCmHrKXnWWS68QgoXf4nMFSKTbCAKA4cwNguthoxcGXCvQx3gwLj12JcKxvzqZfq6TMi7fwK",
  "key39": "4tGsrcPUZktqaqyQWZ1uLWPfJ1f3u57FRhuW7rboNjZcsFW1rdmtMLUytKxbBS23F6J4fkV2h7q7oEPXmBJZuju4",
  "key40": "3ozbK14jVJazj1PyTFzGaav2XNrLaSnU8VgMux5LYo1gz3Y6AbY4DzRsEgzeQuoRckgoD9YQyKSExuSo1Tq3pd5m",
  "key41": "3Yyn329vkDj8EbeEF58uhYSuWTY1XS6q54migVrqV972oqLHATs2VPixgEYzyy2yDdpojb6AnK2EVp5SNt86tem5",
  "key42": "3SCSXPQcEJWKQoLdBZpsJchpXVxDpv2Mg88JnB3mL37Q2xP6TgCr2Dbewf4JvEmsZ1ohpTsKatAgehMghztyS5Hm",
  "key43": "2sbCDXXMrmuEbDUXKwjMnGEK5cVEUEx4nsBCi4pcTB6FfUhDfcJH6RpgoRWXtPKJi4PJzXgNTiGp6UQUxkxNsSJM",
  "key44": "4A6k6sofLi58RiBbmB3r3ApP6XgvZCbagat92CL1a7ZDKdmapcQiwXFHRuRTihGzsAWWCjUFR42e2qDHU48Croj3",
  "key45": "4nh9h5AWU1td3KPodQaY5srpoYNjrXkFGpYsZF8Rvf95vwCa4JNznvGeX68NBvAdZofLiqQvV7twSDqKjUVy8n89"
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
