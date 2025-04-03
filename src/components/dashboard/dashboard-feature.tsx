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
    "V7tVZX5MM2kNm3XjGzwaaqyQunumohykvQZgAHe9j1V1DahVFmmYduChhw4sb8L5Dbyh9CmxVogGriy9XeUffAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bAS9G5fqBa3jRCtw21seEBFPyiFRgQ27ehduUxkVs4atSMfBHkb3MACQaMHKV4LpKv5CkqAc63x1Kxxy1sbHCVd",
  "key1": "5A6RNMP5pQgyPBWxnNtJEqdwLprDCN6ZESXAHPRECuxR1Xu4RvZcDMMLPGbz1QeQqeiKnBmaciD4zExbGDFcePGN",
  "key2": "sitDFiWYGmDhdQWfygEU5sez1TuKt4MMdkgC6Vj8Jcbi1muX1VKqj79y9NtprxWLYCbpZGF5AmNuZEE7wANvWCN",
  "key3": "5QrNSviKDXkor9XmQfQY3f2HEZkqfPdUsMCAmaUt8Bhdk2uz7BwjvBbEZQZMXXZ8wQ6cDCUExyh5egBCTXZnFnFf",
  "key4": "4rTADZeKMTHWTekracCfnx2aHzX8dNLRzcMpVafQyCkCaiYc32w2qfbgUN5uwMbsvRL5tZszuZ2AE5hwBdUoARvb",
  "key5": "2bcXe6WuLSeV1ZZ1RQiEWAAJ5Wpw6GGCnFoPErmmup1q7wc2yxFcMe6hm7UWyGpTK4p3jdBMMijDuaLKyH9bVvsJ",
  "key6": "3jGDKFkdwu5Wj4aAUh7cepXXBj4oFDAaG3qLSf1P3s44BTY3JyUt3b55wUELKurGxKCA4xjNBJrECx2JqrivhFVK",
  "key7": "49afWjK8PdHrXffayamba63q3FmxYymGhrGFNGsr6XAngRZP3fWnmeYEY5TGRRwJs9XnoWKuNFkK7xta1D2mPeBR",
  "key8": "4fNQcQaR6Mo3p3GR8newww52PSJ7iPtoMHXJHBzQcVjWSPpdWknKtVMCfGkejj8LuyqJXgAMcpAUPijMBzmCMCpU",
  "key9": "3QMurfkmyHtZt327xBvzRpz5DrzeKeTqEyh4PsBo2BVvNuXULV6Y8qj86EibXFEeRQaFGToqPDFWKRqCJQCVqtcV",
  "key10": "63cTwfuMCdJDERdjcALMsAZawPKbMiPD5Mme5QAEHpS9nGWUV39hASDHxZmQWzaPyD61PULRsKtysESYtRPB4VYC",
  "key11": "4k3KYtWnMmCdiHZWs3jdCe9aVy6GzoctBHK2qaFhgTXoHFAqeHiFP9uG5mzPeb3PV9Fhgm29BF86qZ8ZfzEqvufB",
  "key12": "4wJ232E6n7RomGGbyecMpLh9ocHuHGoJvL7Ty7q9DZMRchm8F2Ty4n3EpQXkdGsRt8JVTWfuEepbmki6iZ72Riqq",
  "key13": "3TwG1tvBxcMuPo1dNRZ3hw5tXBzTmYxuhcYeprn8xMgXhY99mAyC6qo9FgbxVYJ3xoGTSrpX7STX3wc2WLGDpTNg",
  "key14": "3TXe8Y4mC9KJX2VGPPdvhxHhWrZjsixuq6PPxzFJ6UtTcwcXgPvSJrxynJCgh5PaKCPv2mn7BZSriUYV1keZy8B8",
  "key15": "8E4eMeKqmmcBac9iVPBQsmH44iEnQbNg2KyitKnUgMmhKzjxNXv6R9kcvBQ3LuBqfqfHrdXoP4hm7xAroMmxWu6",
  "key16": "25TTXr6jp9Dj4rJRaUyRWG9sVBQZSZ5NXnpxokWUTk2oJ1tTduCkZ2QTp2CjqAYLH7v6rCdUrVvtWtANcbykSpod",
  "key17": "f9uDcA6eNMGrBU89T9uyxgWwCtTGmmmttDuor651kg26KxyoQJyXH9WijMXGmZzSEtZxbM7gyUE5VrCQe6PDXyc",
  "key18": "2rMWMSApi19ycFLsPQh8uMbHYGcZ7CVFt4mDoBdRG8HANH2FCsL2yJvGycchEC4F5xVr3JGPPc2XnReNX2uCgvcz",
  "key19": "4Bh2n1Eg8XPRwCLvRNHatJoW8HjWs8NL3pgNxMuRmYEDmhaSVdXABajwvN2NoiHuwHj3856XWL1ovEFs9Xhc9zij",
  "key20": "5eSfZdjbfJm18kKCbXQUwmCSt2aoUniam2MAZxajGk7iEtj8oheikKLm2tJhLf4EE7qqs2jKJaGKh9MX2JKGveAt",
  "key21": "37RfA4SLbSjZg2Qdf8zYGqfCreV4XJCX7trdvBy38wkHJYstnRSuBUpTy8kNcrqcrSKXr72nMEEu3cevtegDSmSi",
  "key22": "3quc9xsNjZKn4WmwALa4MoeeC4jjhf3r4UfqHB9N6MT4W6oGzrDNVuMYK7exmnRAoafuZAuRCCs3CHbDHw7vAay7",
  "key23": "2yhvpPHV7cpMocLzRhModYJsUGTsFHHTzEZ4ptnwerwCNbjuJRu7fV8ic5Pqh8fnAfAFwFBm7FJWC745vt1ytkCN",
  "key24": "43DR8YJs39zuf415jcMEP5sXoRJxD9B4wAi75oz6PUEnSpBUp2on6C49QdBcPDGDAwpUKtn6a9QG9jAf1njWghh7",
  "key25": "BQvAR7ZfyHGPrHfaSj9Bx1veCreY7zJ5BWc1UQJoK6dWPg7py1K1sbEzHReDsUf6fsER7sonGhmrH7V7rWjNJTB",
  "key26": "2HGuFFyUguFSRLsXBdjHW7HfXtJij9Nq5autbqrdBqecPAZ8Ux6iCb118NwEyuQT49ADdZPnpBZm1Hm8EefYB7cD",
  "key27": "4vC4LFtecuoxrUpgRtxU8sKXz2aLhwn6dVzXJgZ2ny5D5LQmfaBLopPwRxbQXxdwp6HTTRNau7fJ9AtnSWDwZAEF",
  "key28": "5U6zUkYJENYAGrEnb4BBXrSdWT3YEH8DeJTuUGy9GBHRUyBsTMM8jRvFDsqPF9ALSr1a5KMLaT1PYJJSWdB2XPjZ",
  "key29": "im9BZFHipCoEfKmTZJXig2d9YthLv3ZfHTy1B3nsygggRHFrdXCBqwdYeaMrJNa5BbkicFGmcovRFEESeJJFk1z",
  "key30": "4bjxBGe6gJNv56CU8AtqocnnTz5fFPmDt8CMrmNMV5tfD3uG9AGgtkkB5KiiLRxDJUrz25jcbieprg5U5rXNogSr",
  "key31": "46nguYv59xXrpmVtBhwFwMZ88FDKZQ1F45sZ5rq4N4bzY85uJsJc5H4jTRAVjYDoQavb4aQVtnKTS7BBZ22NxGiZ",
  "key32": "2YGovoXiRCqjEXa8U3PBnG8x9jeeVg3qM7gLkUSdxPcvRkUmkDCjJk7JVovgxYa2L7TKffJCNirbufVGcfgDKXWD",
  "key33": "6ACkpfpoxx7aBiaTtHct1RP6ZJHbpHHFVatHFofC6ez2uPiFmewH2wJavVcpnhrdNPSAJA3GHpbFizCchPGsuvh",
  "key34": "5ugAbmfsE5cMCjACiXcD25BqGZMeZ8BGHBb54u7zFTZPL1P9rPDi5oLoHaYQExj14p6ZEu2J9idAnBBETBTN5Mqw",
  "key35": "39zZUx3w8U97bc9jujzKvL145aNxc1KsFhCwuSQeiPVeRVGFvtYBZVCv65bLKQcRs9yaZy7AJmoaiCzKK3U9opz1",
  "key36": "3wx6LumFWjyzkqqx95AwyG3dFmHqRnMhyQiJEate3SzBxqcTirNLjohgJbjfCnbhMuEPnzAaRHee4gDDK5thuSm4"
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
