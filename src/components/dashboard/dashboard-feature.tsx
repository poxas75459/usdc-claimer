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
    "4tWyRFkezURfN6n5w6KNddvCF5VSSE661nb7YhbWPMwDa41pMkkKHAB3kZ7FRAMVtodAv1zwsYXuBtT8ZAMW2w5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQHtdNLrrYdDZxjPRG7HxdswZRCaQnMDETBC4xsN3V5pAVtB19u1jYwDPc8nkmgG3b5pMaD3wVAd2NBCgQbB4d9",
  "key1": "3X4HdxXJuAtHDVYnV3tETbnWymG83Fnk9dLa3MnT4gtRRTAs1AfetpuE2qJm11QCw98pJVFnYyT29MRuu2FcZruC",
  "key2": "3wvRnSYqBRPJfNunMX6dfTzPWpQPuDaYwPcEXnDji5BPv4wBNnePAnKoaqqoH8kcJUUqzZDP2P62uAkDqhod5548",
  "key3": "4M1oadZCkeaB2NRwQWCzE9dBEvra3xPUomiLgynCidfZrTuai1gKDpjS6BV3mayk8DLG2Teer77Riof9gQiVY3Eu",
  "key4": "3Qm7mNhGQiAaXAvzZSfZRKCeHzXH4QFzjKuSkn9455Y5gB7NWzgBzBumTxGyCX38L4vrRbkhcd3j5vwsYox72MhU",
  "key5": "2GcKGmJqAJLTp2NhLiWA6xfcGXfb4qCZu3cD7HcW3NbmLUDrPbqpUxUA4sGWx9XpiJRQXNXcrw4Dq4bQWV8Nwmm3",
  "key6": "21EZ8SBGDqwtvcB1msF4wYCNrTSqdzgpBCfj6qsGxDmqzE2JfSa8mEogsrF6vsboFQENRbHMgkiWov9KvT18BLgq",
  "key7": "3mCS5JeZhy4L18422U5HT7SoGYToBkYBHugqKQuGpbGa23Jq3LgVRmumPhagaKjLMHiQgqFeWV54y6bC4v88oZc1",
  "key8": "3Y8EGWBVMyYcsxrZWm7rPxeJiVLXZ7XtvDZAgFCu221rBwtQUeSkkraKW6sMMm7gmvgrWt5mMKqtQ8QyYWbPbuAx",
  "key9": "ur9nedwy3huELMJkZPv63ewB1CRE8R2QRhVSnjmoyciY6PjMekZWU9PGBKxWUiMkesqHHkqeykYbuT7X9GPV294",
  "key10": "2PpRhAswytzWV4stnsMmna8jZFyzfN1Juhrqxq6MxHdBiTdSSTCvJJ2LZ4GNQ7JU7hko4KNeLwhGPsBahnYmAWLi",
  "key11": "3XQuqTcWq4nZ118pSy1WdEo2du7Ao8Srr9rm8EbPhbo6qi7PNSeoGFbfHxqa1WHEmUReqkrZCihL3gaoqpAVWEFj",
  "key12": "5mWkWbE9KDenGyjRTRuaQVCfogmyioxTZ8Khyo5J8Sq5hwhNwnhDkKiQUXob68GZX673XDhCUD27ArK1DtyYXQDk",
  "key13": "2Dg25o61mWrkmgH9Fj1i7382xeusbvXxkm6ejML35NWuTgV5DrbnMP6VFmfhXbSumrRJ6LobFRPUKLNLbmF1ys6m",
  "key14": "2goZyoCmG9vquJ91YgxeWjE9PLRMGYXAFJsXxZrrrzJr6my2ybwyfmw1QL7trSpWDdXEX4GWgUS78PZcotUbaK4j",
  "key15": "2hA7JL9bkq5CuPmxwYnZX891Cq1UR9tkzHXQZugERnVyqeC3Po2TLQDSvy1Xc77s2aALd4oTABAUApCtvvUxa6hT",
  "key16": "4MCAesGXCR9dLDYvdbUGTu1yHxhZe8ULeJoymas7U47dGxsoNHnC1sSt23tCALBNVfeXHwXm2SLzHoE6GcmLa5L7",
  "key17": "2Qybd2ZWvzojpiroL31HPVeRxywursY8PdAGGoGEap2915CeagVuyruNnGCnVNBH1DURz4jL19N8BeRex6SjQ5mG",
  "key18": "4WxUdcp6wSEGpdgDXuKcTzRLctCdNn84sMeuhYALRViNzU5Zt4DgqJ9H4zTLARPuPRohw5wtefd3NDmvFXDCSrmq",
  "key19": "jPixnj6c4rem4gy2RpW9dcWHpDsPr6S9XPNjGeXba29JmaJoGPfo3TGivrrqN43oPgTuqFSiSMo5H2Dyf6yL2Ku",
  "key20": "2xqF1ejuEhbnN5i26bc7VNUmepveNh2yweiMGBTojD3oMnfuFjP8EEkjYuZGfrwAxefUhAceBDMMgH3jaAKFfp62",
  "key21": "5VaPxMUiciWRrds6jANWBESAQXEV8862Rcp9xruPRNHTZX6g6U1aBWigVnaKL6yuyVLUewiAfFqEro6etDFETo7c",
  "key22": "4PobhuYN38MuLESvtrx9d5qCNMqmBBd826WsEwQVDpSE2LC4ZPComrTsCMQYbgiqzzvDDN62zi7SFmEwLsdP8Z3E",
  "key23": "3K2WktGFxDKoFZod8FFZPu6icjygW7aKEJZNWjuBUBZzQQzibpUUswzDzsbEm2QXiyGsQ1wXRLAS3htwTNNWvLF3",
  "key24": "5kmu4qsqF2e9u66giRZyRCrxjj2pAtox7BZB1MsTRWsXBHTnU3e8AVGUF49fQooQmhjuBRQYmkSAkFBPi5sHArWS",
  "key25": "3QPU4LWJbHDieNahcNz4Peh9A7VbQHwNYxY7BLApGp4ScjG5pZL3diA6jKV98QyTcHuHAPeyxaqhGTXrUMcTYCV7",
  "key26": "5iVyfY4LPn9ZA4QLYPQFYwJGjXhf6CpSmxWHvAyeBJQPSsQTTZbZ8N6241bDaKmcAaSJzCoFkStGJjLdLJNrpzUu",
  "key27": "MHgdCpHag6eXNsnELXzsEgDgkhqjPweNUYQwPR2ven6fh1W1DRwVe1eiwKtDrs9tx1XbniGtmfjPRPUqGUodrSX",
  "key28": "2LBGRjsAdRxPfPqg22T6irtY1C6wDH84nz5qdW6RufrAaUUDyHpkggDuWK8WzVvkvsZisWtc1X7piXekQNDDEJLy",
  "key29": "2iRKJ7oBxLDRQewjAY389xvyH7ahssf6MEM5JsHGNegjJjV2ovAGsUf1RtMdGkH6qMTmTLKJ5w4WiYsAcsLn8FNy",
  "key30": "3uCxYtW32kjiYxKCsSsyku7zBxy4FmbA6BCrhZFKcbSUVNNRfbVGxsio7enLwssgc44m1vvjQt1GpcNdJb31YjXd",
  "key31": "4TVXCjYevFY6aGWouhkEFoPhvZZDCsdc74ZprTcTJVcJGgZop6hA8WwDhij52mTSvWtRZPxcLNw4ALTM5nsGAWF7",
  "key32": "5UyLPokZXUN6NRxqngo2doFQrL4sP4wZQ7ZxPSYG3fhWBVEU1xZmyd41kby2QwJneZ2wtzCAUrX6BVnYJL89kPKb",
  "key33": "61djbdYLNXcYpEZTAjWwm9iH8yz48cSHKJ72z2prK834XcGTYThXcgsQ3UNS4NvRmpLyDbEQtwbjgAeNniK5ASqH",
  "key34": "sydedPCmCk21s1g51j5LAJqQ3TEWmFFiVfVRJKKrVRVjMuC54ox4nmfVAg9HieoR5SBPiKDNTwvWWaAv7WnDZSc",
  "key35": "47ES5YmTKgApnmsdoChf5CGbxdAmKJeJ6bMWz2urkLwtPeJ1D6D6ea121RxRgFrYuGcPwdr4ynL7tJc8kJLCAzSX",
  "key36": "3R8QvwkXAmWPN9aGC878fofchUq5HWQkQNATU6QVVY3MnAgy3CC3Syt9Te2SCAjKgRJyD7qLGWVCP9KF9anAatLs",
  "key37": "4Wh3jtCvv8n6ThQe1fFMn2jgYJ1nn1LXN6CMESZYHxWKzojL7GQV2th1jkgYCCr8CPx8AkDA8Gjhyd4QUWPLCZ8",
  "key38": "4uG2vAVEutPYX7djA13FXJM3kCDuZcVBPYgr7PmceUHVzWNV91Le5cGMQwZoNMnZAFYWZfGXrM15opKyJ7yMU8bD",
  "key39": "3mhSe5AZjy8sJbLA1Hsg978k5DkFjQbpbNKcAEdWr1EpPoEBLzGvRKejYcvhYwyC5jKdbbuLkikTYRLg6DKiLARG",
  "key40": "2uD77GALoWEXXqm8TMsQAhaWa45Yo8jzAh7LZStgzoHQW5DLRrUTbYPkjnbctNBMVbgCX4rMqfWbqEYbh5nhxHMH",
  "key41": "28EBZYP9Trjbxwb1d7Bxx2NM2Ck89edQwbgAn5PEjmXErxF4WNKenT8FXzK3sGqDtCVed43BA1RDNaGvMpWYUSDc"
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
