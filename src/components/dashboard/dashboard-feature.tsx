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
    "2ziMtoeMWa94PnjXWeFFFFGcGJYSy3T7jg9FTYjg8uSXirGBUtgpFEbjCPSj29PT4m3LYNhYL5e2zjWiCSnFYhfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57aqGz1rrWUyFk5xDJ9UsvXgPBVFhcPdaCDYje7mUyLoteWNh6UZVjUCzB1eCPaaAT1Au7BAfKhVBAyh7zi25XCh",
  "key1": "3FJW7Z6hm8vxGgA38j1k8C2bZAvF7mu4cRRsUPrAWtH8RvkXTjzDV62u8TsC9UAzBGF7aVvgZa3P3TiJSiY6brxX",
  "key2": "4Rf5t34mYmbXjMHZhk6QHdJTFfcpLXENFCX6T6pyEdLaawgwBSWkwwDKiPyMczoJyzqUL1uLwbE41eFUfuddbnnG",
  "key3": "57sJ1Z9489npHAZVDaEzZ78zgRcGckHCsbVtJJLTmvtvPTNHLh3JLAjGw6WReNKVWjvMg4YtxdDUPDdRkjzegSbK",
  "key4": "4ZSerwh5Y7zyfxE8Nn8E8nJSVKhSc9ki4BB6T1B65ay1EgRiwE9SjckKyW9Mh39wyA5MBz5ENZPrjyHYMwQcUxrq",
  "key5": "44nsPM29YDpGNUGYhpRLXA3K7hNqPpE4UkS1UgVsh7yjUJH7eYDmnZDMUL66TG5ABRpoEkgu5uE31xcSbHNGREua",
  "key6": "45C3PeETcgxmTgGhzQJwroBhEuVAcobaBnTQoTDgjaCcnvF16YwMt2729TcB92ABCtFkPwgXViSCpJSVcowWTLrP",
  "key7": "2FVWHyLYoqTgC77baxW5YTGrQLhVvgcTwu24mZ9CYxFjCHoEBeRiCYj5u7nVGYgYJ7HvHJPZTNLoe8JnLxNkG317",
  "key8": "4nYrWeHtWZ1x6tkhQGnkAnY3wH2wNR5yg4HJfMxjxDGpN7PifEdXGFYRcusiAJvaqzgUAadXvbrHLXkr8ZBQ8Rv4",
  "key9": "5tpdYpTD4NNButY1ijkwnUaSjA2bQxu1Rvz5m6P9XkTUXJEHR72UxZGMZzpFx2wyPECdT7Ztrj9wJCeptHwimHQh",
  "key10": "CS95GZwCQCyyNriB5nZRR5HDG8K5HojdZNeSC24UGQLXSzKkT79unkHdUCPBmdwLvGyHkCKtxS1ge5iZeeAZ8jV",
  "key11": "56jiPRYbr5R22dEJgmmC411Cfx4p94hVZDhxAbNTahbVgzjLFsi1UcpgRkdBKueHkScAavGWvkxPrGkx6dnQCGYp",
  "key12": "3D56L51BQtDWWzA74h5WzmWvhDRDEj7yowe7zBCAzrgwJw5cmsSdycHdSknY9hnmgxsUEWzj6hY5Xv1jh5awRWGZ",
  "key13": "dfLcuNv3TYrkSLy7UpNqiBTXdB6tpFEHv4sUAS43SEMc3agxkedqAS6nQD3W6CtnWtqZpNYoTncLKGi5c25kEV3",
  "key14": "2o4RoL84yxtSLT6TNuUu9uAeDSkp3wx5p65JEnUvHpPvCdfY2yBAVi9rbSCGiKPwN6rFo4M58UJ2H99VqL6Fdyjs",
  "key15": "3yjDwRfYbFYfbnjsMdLz7V5kAa9rh5ip1vgaSGWtAsHTVbsRUsjc8oK4MiXnTNz6SSTpWkG39rxLSo3hE44aEuEs",
  "key16": "8mdJHBx6cVfUCiELrHonYM7Z5zPhdvTwFYsEBdGNFB7u8G72nnLq2YMHPY2ZeZ8x1nzPGTETUmsafLX1rwvpw9w",
  "key17": "5H3rLQqyrsktYMjVf6mZdGiBshxAcYr919sQynQpXxCCCLaVMaZBgpqgkwZCWkYtk6N1kQ6tLGVonpFrPiMdMxM8",
  "key18": "4vPns98zEWDNcYdwwXF6WwrWRLmAbTgkm3PKYuRkXDdx9KBuww5H4GaAQLZkumMHVxHXFJECY7pWo4hh2SxhE89Z",
  "key19": "Nh1M8Rs498TkCdao4SnxYhKrdicKpu3Wxm2kzHeGZwzVV554pZ3GUXeS43ivkG1YEBgFKUxKP2Drqmo1QoBmE1t",
  "key20": "2RpbU3Xjjmy3oRJY1XpVumCb17tqvqTR7HDCFjqzSDPmVH8bucRHfWVPJXPN7QK998tRnzELmpJB4Td6RdrFt7rL",
  "key21": "2MjYkHPXbULjxgKrgSE6YSCT8EGhBUCubjAJsHHwhnbv4zhEHDYZa3rWAeX7nkCTdHX8yoCknvsPa7uobz2PqfRd",
  "key22": "5YwLQ31ZW9zzwAY5xPM7P9rkENLwrCWgm6FhP32cKtjMTaFwkmL9oPmEBxhgeLa937md91U4ghJGW4gNhEWEcCA",
  "key23": "4A7qv26Wgc3W87fFrXthnQAv6te5agUM35B2E64HccAEZxFaUxuMdQDCVoRBhTdRkghhAwxrPEBvBf61kr1z6s43",
  "key24": "57656Us3Addkeq15VZzbLtQm2Y2gqbw1YouB6o7inW3mWRDyDjbnE7hBkGwYr8tVoNpyadbrtEK9RSnuiu4yG74h",
  "key25": "5C7nE54YopHp8shJFM154xBdzJLgvwk78qRBsNeTh3WL78ipX5Bnw4rBdz5trrkokM9SUgpL7F6VLu8iHzNuYoth",
  "key26": "4Py84MJbXdoNAryMfwpoFok13gydewEdPd4RVqzr8g1Gz3jy69SkG7sibvWc5wmNvrp25eTGHdPDaaS4woy5Rtck",
  "key27": "3XUAiU7GvMwnVBGcnXKXDBTR7Gm2EjHSEjroSeZohxtosbzSpEa1Ha332YoUYdhzKJormcugA7eXxp2sScSJ7Jkb",
  "key28": "28tWKwh8Mdn4NZfMXgboP1ipZy99XTmK4TWAjPt6B3hNdYUhuLKChL7FXKqgrRafieXXhECjqZbb2uZXyvx6xixz",
  "key29": "32QTuhAp8vxJZHL9FEkhkRR1cLavxwrtSPaAiVZ35WXGqihWYrNVUnbGDqzhMn3j6HQDqxR498WbX9Z4AZ2ovnZg",
  "key30": "4c2bBi4vM8Jgs1nkXJy79L9yLtnt6EBFpUmFWn11jwpRF9LJYtkHBKS167NfcxP6fVGFX6LDHoVhwCPpPpWRzc2h",
  "key31": "2vq3sgb4v1sVE44EQXnrK7vELt3WVfmR69cvThYETVhxhLLNokieXP2BRzprqPyhYV6FJeywUuhwLuF8wnCaPfrQ",
  "key32": "6AuVTMn7SAaD3wfiaBM1iVk3JLQjpu5Mc6V2A27Rwf5uTLdP7AHcB5z1cqcQAj7FV88rfAdXgksEywJndRYZM88",
  "key33": "4CBQ1SrntnLRNLY9ioM4DoySj7PTEZ394YVN253oVKg24VHEpRHLvyJknNN5M9Rz2Gbr9gjHtecfzP9V37dTaova",
  "key34": "46vYceFXy1B8xcqYHuNJKb1DP9K9KpqqLCFtmxhK6mCaimLPEv4JuF9JAq1fNDxFFbhWUXKVhYNCRBAFi1EJkh1c",
  "key35": "KmqHcgg1X8KD7D7YreYGrf83NGZsswHLfSdeMwLFe1S1LkD5vAr8yF9ZV1LYsmZx3ZrN7nHekP5dKRMjr5ukaAF",
  "key36": "58SDyHmmeeiYUHiiyvGBwShVccijJ8tvKKzryGseEDVT3Bys5Q9WKEv3X3EkNjTkAmnA3sPosG9Zsq94TdRFfkJQ",
  "key37": "5QckRzD8BtxrNMYy8bFDYqQG6ydryLq8wEg5Nr1CoCrTduXZHs4Q8gtnmcFyizHxyTq7vNNkTcowfpagvb51kf2X",
  "key38": "2EuB1mgiCYvwkwXbXRWYfnia8saq1zWBqtY1kmThX5gAuTVRU2g4VyC9fcKrJEk8fL3DY3pExSka11mjosK2ufgo",
  "key39": "4Rd6WwpVVdzpxVrnVamfF5ncY2FBYE2LraESFprphT48Rv6FSzWu3zdXYpszX26KfHFLehUzwksaWbsQLNcBrWJi",
  "key40": "317r1ppcshFZ3GB2b79xwPyGexAtcbKy3fnQFYfxz7dXwN7pW3EnNkS6pxgSpiZZkQYDRYmQ7cvmXUs7N4PB8WrQ",
  "key41": "VELLu5bY9cutwLdphAxtFZD1dpLLAZywTEyN4P8zCMHGVFuGpfTboGt8YNNhMcMHg17LD3JH8i9QutwDom49bar",
  "key42": "2CFZdRYjD9fNEZCG1h4fhekzk4XHskxGQLn1PqBZ573dyzJKqZwuibotmjFS15S4kpH7DYcMZXfd2Bw81rpcFCiZ",
  "key43": "2rjFLUTAksmdiJNYpEEE4YjA9XDHZM4uHLVhyHENXsp3Djub7Qb2tycDYGuqHdK82xSkuUPsGsYyehKNbz9s6wdy",
  "key44": "5gQMdY7NgfZB1Xeoc6sLUYLj27eA7r8qkq3hkK3znMWPyJ5pxX2jvi8nXfM1Br8Xf2CLEPdBP4YsM2MezkFq461b",
  "key45": "5Tqkh5qn5NYoUWMWsDUdQCpYCw65aT5pPey9rJMqjWXmmdxkkwXjt2hiv2qwHW9AngtBHT5fxphTEsLAvEDWgmp2"
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
