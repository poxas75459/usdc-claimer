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
    "4iFbzCt6X7JW7rM88JYUggRmdt9xdsAjeLf1VedhpU2p4MgVPbPQi8Bo7LR5hBBx5VGDpbbWWLiVZmyyuiJM76yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTDksKJdLJA9fa2XP97q5MswH155zkh1uaX539LBUK8n34t2yYJRNPsnRwPgHGdK9tku9ZVencq8gXs1xoNxbLz",
  "key1": "4MFjPhFPtkscb4Tj3rhNs323fYhiiLs5quMHb1YniW5fzAam7RHzwfCS3RTHzgzrFTUSiZotSgSXuudoUQ4gMxf",
  "key2": "5xquQXeVxpBnW3a3DvPmi17fA5kHj3quJfpqKSW2Q8UPQt61ugkxqMB4LnQhWUX3x2CTc3UrUnCYTH531kPsHhv8",
  "key3": "TGUDetLXA4snC5mVjHp87mZ168G5L6zPPQr5UZoMjzGVH1mP6t5hXNKYBNzr1DVki9nBV6V5EyN9VwQ48JKZ5JL",
  "key4": "5PQuRiQfngsucxdTb1Qpu2HHJ4jsDD4KENRnVeMjWphw8aChjCyseJP8Tvs7GRkGADwpkagju7zyfF8ewqxRnRUu",
  "key5": "7mChUJX8GALwUexgWSRxAA5N9P2hfXKH2U7kTT7JVE5aD5EBpMpavJpL1g6CwHTGGnUsuJK949TRu8oUmg5fqUd",
  "key6": "33SbVnvChR8Z3FzXHTV1dRfxoBBa27VX63oWkjKYXMMSYyGHsqPhfzv5izTUBWTuVTFN9GLDMMXAmQWBybjPPexQ",
  "key7": "FuTg7QCYF8ZXsyimrwz1cfeZGzuBi5uqU8udt4Tm4yo943HhowoQktpjFAuvCzmnN4Rq8XtJXzeLgPrBy1XRifH",
  "key8": "w2aGh3e5stKpWvfnH1t9tu7XWH8a7JYTfKUjVT8cZyvvcY5stta3Fs5Ckbe7kQtFCCnA4zoNFxTKjSx67kqAxZH",
  "key9": "5zZAnbqYXrWabffTrS9zxuowGDnXxHdTD4gXCdYT4e5yqAa7U4pc556wNHo3zTekkqZrXmXgyxGcrg4Cq5qVScJ4",
  "key10": "4boarJuETtNNPmELL1GVowVWjsvzQekSbS6vZhPuAFQoLmWBUaM7hmLabmcvyfCj7hH7ZoEKrPfPHJsMLXjZ2Dhb",
  "key11": "3HodDs4ZpjStw1BGcS1bfNtGCSwwehgg8fTyyngcH1tW36kFARgQrJyVxr67WsEEpr9jAgUzqcqDtK28Hxtau1jL",
  "key12": "kuxpegcnDsGPP9zJF5mLeiVRcydjCSw8v9jijdJ9cEJMmuir3AfiK7y2wAmnBW7UVMaNgqV3WHASZMhjkDvF9jo",
  "key13": "4ZVBWEURAxDSVGkfeegQkkavCRSvR9wuLuM1ZVysVtZdraVe4g9KB7UTfdKFy5ycQJvhvja1L4nuSRomU5pEJCJd",
  "key14": "45BNkFKTB7WTpmpSbsW7ic62Q9LZy2mMLPCEDeqHx6kTZgttNuiscvzMNmuvVamABZtvjN6xh11LSd9QaoU5AMu1",
  "key15": "3wtoAM16SHZnB9SXF3GcyThES548JKC3k8hyck3H7Vt2rd8zGCHNt5VRjxnCWqRBXPuQV1fLq9RoYgm3aWDf9FDQ",
  "key16": "3WSRamHe4XLZDJJ25BvfkrafAfk5D86GNzJU1mFYSPLnhPKRWr2pkWi8r6utbktZw58tZVM8xiJhprm8KiLmHoUM",
  "key17": "5NyYmjE6uY4psvCZkgmEkTCqcvdytQXLk86xb8M19N11zV1RDj6ZZBhwRF4tKctjPnEHjD1RSyqKy7cWLFoxCcck",
  "key18": "3t8XaFoM3dGsxYsndBG3sfLpc5u94Ad1vWmVVQEHcLZ3rMPsH5KKJVRffXW7xvLbFjsMFsvA5yWG4zeZ6yL7yjAZ",
  "key19": "mrVf5Fm6UzRyXkBFAm7ra68Uo9WFJFH3gTJZxVA2LmPFyqBrG1dxguQMd9fDSajpwTek6VqD9gmM5n8eCdih8tR",
  "key20": "5579b21mx2JcDFgzuEREXxUVLf3fAr8sKM7ih9Y2xw56omuGWRaXJex3kJMppoLryjpwm94AA7D2YaXaUgnYKJzi",
  "key21": "aTB59h15Cd5kuqgjYwuNwto3KNGAtEQ7Ybb2pSFaWgEpnq3Zm9DtvN9vbAcBz2q9sFQKJF43K9bbaExgTBmwkQm",
  "key22": "65MG5RXqVYbzixzYkL14hovMrRtG2ts6SFxsjVKMUb34bqG7APjfFw5yyep56cVXTLkpf3Twvy2kzUYXLy353rCt",
  "key23": "3XRVWUurjQ97ZjeGH4kYfroeG7RZYvZ79S2L7ifBXBcAsF6FBnyA1hmJSyEt7NYCd6FQDv4byCb8xMh7oJY47Pda",
  "key24": "4szvYoSciiNnfaqXF46vRcuzjRH2qoqxn3eaknuGcZ9ZM48iPTx5uUBXbz1aH7r5epELnvQfcteNGsK4a7RenfUL",
  "key25": "4b8BmbHHtqZGKkr8sdNtMAR516SoffDV5zu7XAQ3gCZJaDCgjoqVCunN1chGfQ8uTB9UYFpccSkq7MscSWEipv2o",
  "key26": "2xxHkR74gYATg4s7xFTTXckqXd4T1bKumMgcqqSiz9Ec3eChdRsg9PjQpGLEmi4ufSWtpvyn1aGH41KVurLFXYoe",
  "key27": "62RohdfYJgnVAC97LHdQv1vRzs7e3oPf73naqXG1Fn3i4mep29iUg2PZwSg8ASa6j1Pmi1s2xDC3fxFTHJmgw4jB",
  "key28": "M4McUVhF6BK43YcdW1M9TapnY6zs2iBTWkR6viTLN33x5Sf7KTWg2MmzubKwWFYrxXmVfzNV8aTEeB1cS6k1zyg",
  "key29": "2fB2wJXVejSoq9wNP4MuWGe4zvN8r39EjwChYPtGcevPUvtHxVSriRCzNpmd3whqfYbeafLYQKXmyrDgJXynaYN2",
  "key30": "2RY9JxWhRmnZZJ3kvA35NiDVXPVCUy2rTdQFZem4GoNtZ4HGASE5yFr4LpcRtwsgXvLso7QMgb2czXy4H6wACjex",
  "key31": "5RJTisHb413LBoaRCaK6yQTLPicEJ2jxEPyipSR5FbxxnpoYtp5oBcgFAVD8RE6gfoW1728WVAtyBZaratf7Ydym",
  "key32": "2Mm8afgzaYak9TdcWAsgA5aDiuRWXnfDaszZMdH6Kqj64QviopbZyDnzun9MsHvvKwmkQ6QN91tM638D2YFTFdZC",
  "key33": "4xtVV5atGznZxsnQyCp2irJZiCA18vATx3NyJHigoQxm7qdHaWNYsEU9YCRWVSjTsdCJfWYWPUL27hURX7SK4dWx",
  "key34": "54d5hHokjcJc9LBpzpuAzoxz1gL8KsrGdxDurut6JjBpEcGVcUZ6mhpa6Sjhz3jvPwrsq5mCK9K2KTPQoQie5grs",
  "key35": "3j9e1CW6my8MrLD3cw9pt9gTKWnc9h1aS28TRYFpCmrx87F8D8angWVnfubWWArPBHZruaUcZLmCnTNuyNZczjmD",
  "key36": "25Lbdw2XxK6rccumhEsC3UQ6cHycSS5gfkPjVQZKm8wYgi82WUP1vyFyP34VQRJiDXW4yd6dWbfFTJWKFFR5vQh6",
  "key37": "4LKv7zdwKxAdsh7Ap7ke2sFwkYHCp7A3RAqSesbA9eRPcY6NQjqMA5wSNV3ChxeRm5EwsGJ7Hm2HaT73vN46kH71",
  "key38": "33UFv4KTaVFeLowUgiSUws77tpSakj4AsVG23wTr64faNUDdSCAwruAyKUUdrnD8EGsmsaj5CkZq3dxZ2XKTmmUS",
  "key39": "af1WpRsQRSvHHxDhv9fKxagjrhHtzfGSULzv72D2GMKrui1vT1HWfPRxgfw1HAJLvtsJxxmFFUDYnr1B9WYubMH",
  "key40": "5QZnsSqwbQjuyPFpVk5BDvvbHMfKyaCeezp5sgLripQuTGf3JhY2FwAgenCqhTsPRLypidGJ4hA7RS8R21z4VtjY",
  "key41": "qDEqMuJtxqD2sEhr5GPsW8jCJYwiigXTePoDMnFxmx4twJQys7XqSsKkiXnKrMpWkTYZMSw9d9XJY2B2qt5CtQj"
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
