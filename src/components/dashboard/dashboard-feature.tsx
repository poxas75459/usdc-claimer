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
    "5ybPvianHmw5kPR4JSPstJESzo3SjU38kL7RD9Cey1DcqZ5TJYGTpKSabX23k9CmcoRV7YQoidEyUsQkPoDPi6UL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tXn8wzJvSZGtYmBrk7ExSHM5ignC4dkHxcjkVxZhH9BNdm1ztwW9y3LuZT2Lwxybf8iNzoXUTX5av1SECMZhAR3",
  "key1": "cTXcqCk7QZNbU5Dg84W3bCwUHoejseznfACMraTbJh1KV2cumN5MckXbXbXmBakm36AbWSUnE1zpeZTXRBywAv9",
  "key2": "4u21CQb2ub5qpSTR2AvYCDFABa6cA8AxS7PNLqriuvEYcjbeqaw8QgRpE5m952kRvfUu7Knri9BX5H7D2cvgMgae",
  "key3": "3QPQkKKVB3667sk6gKx32FFMEJnYWia43ow9BSSfznPrhLmJbbvmYUREijyMkTRrbqiVBGFzNru5cNAjsnYg56uD",
  "key4": "3WborADybYHr3uquFoRmjUzYBhWPi6oSXuRE7a6EJLevSbmj9UhDyxP9faz2gtWtf2NdwSq12NRpUA8cHTpKQFGJ",
  "key5": "5kc7eX6u8YfiPmohk3jzsdLGVyjjd9nQ5G4qtTK8ixef1hwR1h4uwNVkRYxqtKX6vfCT9efG9LPWcyDJCuHYhAip",
  "key6": "4KMKwLHybaqrPDsRqmDjuqPf9XFraXirUsgeJAwNLjPdZ81V6rwMEAcrKWmyHAkDtKnautQEF8PWStVnkzVnPtYc",
  "key7": "5dvWLjg7JskgddVhjh1HeG8EBWjYaPrx8xkZoGMTtoWCfeAzyo5oSaRNaaFRADRBYD7ZPoWQhrxVYfaE6hUc5iHi",
  "key8": "3qjR2MSfBK6f6iuHjP4tLCHpCK5KhKCNrn85z7CTG57Js7iFwTegzBausPFCx3Wh8vrLMVfe2QLAF19hUbat29ys",
  "key9": "49xAiQWNj1hUmXoFm3gAqr2ceTgdfgAjSMtN2TssK13WWFbdqYvknqSpWQ2vn5Ru7fK5xLmqb1Xke6cVNzXsjC1M",
  "key10": "651JRBX3pGxWitAYWW89KfeaXdKAPSkdt7cPhMcmestdhf7jR5rAEN2LiJDFSJVKkvJuVDXKdyx7mE9Fqpv2zuWE",
  "key11": "5z89KZe92ZKoVsmHNp7r1FLfy7gg6LjuJ8kfUcqnPy7RYu9Ki3G4dftk7w5s7s71cSXBPjhWAgNZ461ZnS2xz88h",
  "key12": "4cAT3MqbLvwb9f81tuRq571zpg9kzWGpbSwH8z2qx4yyPYxvdShmBN22peQ7vtxFkdkY9Yci7x4HH6HcDp8Nkafj",
  "key13": "49Wm6JaC6B5fnQVagPjnmmhBRDwqSPLQeGrTF8Sb7JLsdVUDvVnzF79nRyfcifJ5YVRt8MurzJQt2eLkCtEgxBnU",
  "key14": "sonfvaeEnjRdxBphiWsUeybuCq3bqLREA2WvTxoEow9M2nkWiTUG99e9ZSBNRZw3c7AKE8HAiGpYPGGK4vLJJbx",
  "key15": "4GEmncN3A2SyyPVxenE9u9dQRzdGMk1xht6no7r9KSmHqx1yFNWZuUa1bLZpT742zZE1xWwKqXLUk15EkhMQ87p1",
  "key16": "4fK5kYa4TcnkG2oJ8oeK3DNim7sNSx6Qooi9eKt1m6ByjmRzbwGgtrvWECuzyLrTzD3PMDMEW4R7JHCRofkgTxYq",
  "key17": "4qtfC7zg7toLFiDh4mtUiVrqfNSympDGvikdKJmxbS9UqmBfVxhLshbG9X9bewzZYBjHikyfq7aa3tm11EHRBrca",
  "key18": "5ipaaa8Y2GGzvNwGB2ZLJ5Kr2rFkg8n8ZMDMfqiv4Nk3WRRUNFBNuz5GYbanmiJ9tXg3fo1SAndRUmGAVz763S1h",
  "key19": "8V33jvSPnDuf3odY5kdaouCVEWj9cHUXfatxyDC5SmNGp6FttZ1WGqA2JejLPcHD8WZVSGZtxKLNzCRsATWsYQz",
  "key20": "p5CDR1ZCwkxErb3AqDKAtkpsH9ad56PAsGSMmoVpbQmc3upkdosuo7jUASCG78BEKz6Ay6LWFMtyRDdLsDDYKRc",
  "key21": "2gn4avtweKzzh6h5uTBxT3PKkfdgxAmBvYjL9wP1VFbKspLAMXwxAbhB4y9c1nuUxXWx2N8xLB7oFb9HAYpcjb6X",
  "key22": "3gSKsrswrfhGUEsrHBXHmg8umL6to89wBddtEoXCZRmmY21EonRn8suNANeBNu2dWzKvGQzRpxuaV42yic5mgdoE",
  "key23": "5ztApHc5Do3gCppvbvz286U4ubQ6XAdL7r9YmRjZZnBrbixsjdPAvimjmC8aFt7chJWpJDqBMpf9qx9EqnENM6QD",
  "key24": "x9Ysb54Mq2tyXC13Ch9zmPB3UogkKdBaxwwyYd7kF4hBgSND1hDmRsPchHwtBLyuptqt1ZjfCEvq6T7KaQHdeDb",
  "key25": "4w55saRCrWJnuAxkMSECiRQWzG5a8dnvN3Bk3npFyjDMYpBBXNrGwByWXmLekpbcH87yrvCKuzxb6WZ9EKAunNho",
  "key26": "3MCd7x6bd6W5sxWTStXcYjyJJNjsVLQxQEzxXb9Yqkh21ejFHPLzqYM1EgMrsyGaGDjkSa4pfd3puAjujC4aZTRL",
  "key27": "2U2FLwLNdEAMe6V4NcidaYwG6bVvqjA9SPcNApkpFcJLufvnmbdNBfVdcpnfMCjPt2P1LhXE9g1Ar9dx6bwco9by",
  "key28": "3epvvTgpQRN3mvCkDd2zoQqvcWBLGXNEfzYWLapKwg81nFUnYPtuo7D31iwu4M4KkHGqUffcibuPVnDvyNfzyynT",
  "key29": "323w9SepTmvFcHR7PhTAxVQPvHVefZcFK1MecyXjPuKXF7Li1EivSQUhiUWj2whwu5BjGKCeWACQQi1GwS9zreUc",
  "key30": "5B2GdWM5KKaMSj7auW5pn9Qg1FBVsfhtS6mNJ2retwU66B7H5P4PMjHdQXSQdPkT2449B7F6vQrnphMWXHW4fMXr",
  "key31": "4suj7ftBWAVHpjzZwCasDnbt8fgqtAuRqbyTLdhiXY8bWAvzGaZR5fGh9VTsWy5cLG9bCuCzUQxWSNpdF22jvzA7",
  "key32": "3qq5vuxTvfHVVWuPnuqs3FAafNGFr6rk668uUFkQ47TPFEDWTzytp1B1UKBz9W66wepHFDZFbFGvvoo1bQ8LcRiJ",
  "key33": "3oebA6WmW5ztQnFRdQ8kPiJjQjD7pzwCwQCQD25TecXq198k69LiojWpM23hmYF4ww8AdJhVFnqEDXigkDevBtpD",
  "key34": "3u8RikmTAXXEcEPcBkcmtKGsjkUpy8UmGMokHtsDp41VyYHqgWjVYS41VH8qf1p27kWwqeFz5qDFSA6rWR7U8qAm",
  "key35": "41PPqwkvbAZ7NxNRKyDUDTgTxSM8cfs4kLvi3txJDrA93E9okfTCFgDZsYQqLVu18ckvxZvuQmxG8FJXEeRfg6eo",
  "key36": "5TJ4jduvuy5Uikr7b1pBGBvKxtetZEZrNVYjFfXbDg2ZgtyMJWkQAw9tAZmRS9bqU8uG1TBiDhYEPuRJuimT4CLu",
  "key37": "26bMqiNebWZpmkRExRTtwE3jsmWDVHeaHRD8iAKaeQAJ9FkG5LgpdcUAWTohmmwQiVdoadcrHc8QFzUAhLghHpid",
  "key38": "Mfxq2M72DTNEvLjPaGEMzMH3kneTZC4zHhAaVAo9ghN6nA5fJoFFXXmD8wr6HRfwjtVuJ1RDzNSGHNtqjZjP2fB",
  "key39": "6kneqzV3Js8LL7cEXXSEnpsEHekqkDDzn15YXEZkRs5UUFmiv1kLkhJQKj5E6FYS2rD7Tgf9bUNUt1aMS1HLUsy",
  "key40": "2aFkbke8829tvfYiWBZR346JGa1nswg72X3PL7GDx5qrBgYmtjEAZqZNGxkVAfXLkWSDtmhT2M9ScShr38NvK8Gb"
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
