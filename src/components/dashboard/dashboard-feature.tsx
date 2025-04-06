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
    "2GAnsHQBG3MAGoCf9C6HepbLdUGTZRaZyD6L1zahojBU2tsVuVVbQWbCNqJL3w9NZrNwaYZSsbn5zoCpkjx2wzU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgZpHrAzfuak3NRLsMDtAJwKTCaZtXDDoqjxsotqy3HokfCFkje7HdV3bVpMBSC7Fz3xc952SUy4E9NUNjkedWB",
  "key1": "3nF5ZZ5iJe5NjxJK8AD1dm2UYVhR2AJq7ays1UUBKCP5XqZUX9f3Xc6vRrxGi8gTnBbtfyypCYDrnz1f15XaJjvQ",
  "key2": "3tk5BSFQDUePbsf6KHr8qCGugtJLrt4WuvE6SSW8iLmNHvvYCvDe5UgP3gBaKDze8v45eKY2TsSLfJbVND3Nysj7",
  "key3": "4qvUReMUtvKYbtTGrUauz8AEGn43GqBz9xcskt19D7LpELqEQwKb1cQDMvmAZnrY7TH6NcXFzkupd59LSPwrZ1Pa",
  "key4": "9eDvEmAFPMxkzraPrFH1QXKBZ1xC4MBYR8gQzBxPJtiG4ZZGXPBULKrFH7xeu1yUf3jy5fMCtMEW2uyUP5VD25B",
  "key5": "48AsFappw4DhZHZFsrHERfYttphDwUUxXB2m1ZqzmyYBypKhxMetAnZ2jpus8zXV5fHkUVwoyjdGNfP6diPbWnGX",
  "key6": "55ZL5mtA3ZytzwGz9xBECFpZADxjjxk4JagENmxrEqfv92VQ8MRaoMxGJH82u1oQcXpfUGma3pZVjLfY6oFNMa7V",
  "key7": "2D1bmApdn9rGWzHnv7WxAhZtsxYCJdBfPDA65R3GvTX8Qjjxyn5Uwcxv3GPxACw1di7gAEvzLJag51QF9Rsrcujn",
  "key8": "3Zep24qgo4o9xrWyXwadfAsGBjnbcCaBMvSPYedBorK3k4fbKkF8oijU6mTKHvhuJfgVraHRCHG3NtPTEJL8Gjq1",
  "key9": "5Yj382YLVkVDmde5mkqaF2vRoWS3q2t9uEHhLXSM5udZ5XvepG4h2wWGoLjaB6AZnVaCPGeHKG8Hk6esiAz8bLGS",
  "key10": "31dduWZgbiagKcSspbccheLZPS7bmr3xrbf6JouLK3j3p46PmgwN65bfcUt4ncsmfLkWuK68mr4K6Agct8VZ9neC",
  "key11": "31dv3kRWMkTfxyoC51VGh8Qeq55KXtTFyyMjwmM45n7dVsLh6t8svnogZp3ye48Lmfoqqg1HURPE2oRWEVfwF5pt",
  "key12": "57aL18ecC63RMnWbArW6sFzmJ3UFjN9epPNPAXpv6JcQogwtmAUC8XfitTZuj1t4bLpmhpdWFBiP2DP4WsMqCDqf",
  "key13": "3U33WV7BP7veUw5y3gFMjpUo3CznvGzErVTKF96pxcGW5Mmpw17gjHUVVgx3i7eXzZqi1VawJfWQX8dPFKmDa7Vz",
  "key14": "5QxU78kCtW3HTrPrK3eyMTdw9MpCkbjfCqdxRUitjJxsiZvBBgs37TkMyqneAN9QbmHBqZgKVwUsadYczGc9r4fc",
  "key15": "ASKAaEsbMtsTxreLk7iX1wABgJsYNrY6kAQbJrvd8WawwAaLrRdRrPeK7EShnBuJgq72Pyea5wtvVtvLDcZ8eim",
  "key16": "2HEgqEMG8FMcuWiNwCys2UtRHX6m2C2LP72LwND5W1os9cnUdwTprFsDr2XMez9ZxbCL71jvvD7gvy22NjJxyYr",
  "key17": "bvcNoLaHqZ1GnUUZkRsAn7Xwz4bLnNmYHS3XkMS88AArS3BSf5yqSycNoeqWwhjvS54kDxbtbZ2BTVMCTGem96Q",
  "key18": "4Ht8yqFZYFQTaD9B1Zgt8yjAwDrCw9RPYXWUUtQmkaDeXsN1nhGejAJzcErYfrwpZ5FQ1tjMMBpkLPArqwjQrYW5",
  "key19": "3dG9PuHekGct4BotkKpaujt9jC3NQeTcckfB5ssf8GGCJnHSvk2pnJBAVKiMKSGVTzmkAc6EhGi72sApt8iMWVhE",
  "key20": "4QyHysRmu1VQmjW53V2uzs8U3J5asPaAdX3fS8r2YKgSVseLTqaeMf9TRnFqo3wwcpw1KYZGnT2hQyJSUWGDAVtR",
  "key21": "TSuYDRCdAoUt1QUaruyUfJzotvHYexv229WUXB9dryBUuXqUxqHaQVbpKHGXuXXJhXiegv1ntQQhCXdVXz9XYac",
  "key22": "59Sazg35yH9fxNrHCTwpZWvE2gvjvScnz5w6RUorvMYGEy7yHuukCRfsuNUeTtN5dxriShXUE3EToaqFoJDCvCYN",
  "key23": "67XgbiWwFKCtDxJy13XMhW9VGn72HbN9hCNB65yJijeJpX5Wn1TB7Lc33LcZhYYxSEwBs7CLG4CCvbwBi96M1ak5",
  "key24": "4192DGa6mwZFyBtYSM5jvShMQZXPq3xKBuKnuxHCAA6menq4TFuPCKGtq8NHH5kFZd6nT553dz9hWdR8ok21GM41",
  "key25": "2zVVauw3t5iZDmikcLxmnqjGx7dcvCfKhSDLtainu4uLfG2S1qeZ74pmuEGP1uvL5tDyzV28MqSJyENMx1nZTV96",
  "key26": "PEqGGXpA7CF7BoeXMeNmPZ7hLpdJAQFcDMnzbj3Tq2Q4M1isntTCjmpJvLHRXhujB45PoabEt9cU4wVSGCK8Yzz",
  "key27": "288WThAKUGYcUSZFNkaiTTXe6b4YZAxQ4HMW7qGdXFDwpruPq65BNinDhNmgQ2dLsMR9e298qnHD9DgtpZxLjXhP",
  "key28": "22sWPK92WnmdMbN9JByo68JP3dTSDXxRezDwJjVmx6JYjFCGrcJKxthd7kZPUQ93yt5pat1CmQaHVUX98XPt8jYD",
  "key29": "5ZYZkxD3VhK7pURvwy3UTvYi5oJfyQojV8N5GW7GBDGJjAFJU41emnaiNhGV5gmY4ULgT9Ecnzmwvs4eADhJfH1B",
  "key30": "2Bf81DfZMJ2nZBZ5xc9m77V3tEjuv4EH7SDaEBzo7tDzgtuzVuPUED2en6XMxub5ZJ92HPwbEmpG6sLyqogt8SCN",
  "key31": "5mbAYrpi5iestkxqcYRh1CbKJ7ucH3xysZUNmJyTCdvcLBFrwyaVagf7deaHv5iTHaxH3xbynNS1AC3svjh9dWs3",
  "key32": "ge9QrqVmpbPHabpQDNysBRZQyqKyudf1nEfbMnH4QaJ6FGkzHFsTaX92qPAaXRjyeqY6aM8ewr3JCVBSrYXgXFe",
  "key33": "3w34LFBhmSEkFnmjjYr5TNCqQAGagrA4BqocFHB9NQ3XivGfJKqZkbFxEfZwE39Hi1cEsS3qqhG96N7BpWnPJPXr",
  "key34": "eekiXcsKyu9sSLJgAandK2ECoED7s322AxTEppZKJLww4X5fvdyTjddcSf4UoyVit5y3AGp8oxCPYwwhNnMs9uD",
  "key35": "5yCX9kYw9SAFphcas6rQ1A5tVdYWpZtsAeGNPbj4tqXegjFMRRJL6RZ563RfpZBiCgm7zpFYtXi3cHbrHMPvPfMw",
  "key36": "3Aysv8VExw1ASQ8tam5fvdUENgUrsfgX3BGVvREJqyYCASEPj9fkgD1k3i8mMNX2Ro6LLgyHRExsU8pWhHiMgPSG",
  "key37": "2csUeSt6VBk5znJ6JTmQvDrJNQesPJLU1LmLHGmQihxGhcZsMBgowDg31CRvuj7Apdoo5Q1qj2ZXmSyxS14b7ojG",
  "key38": "2RrhctzcAKQuuWBwwZZrd6jCkXvmW8AUpEQMcHRPSWSoxvK8rM7y6VWr45ohoBp2LaeoLUM3gAvF31tfmr38Yodb"
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
