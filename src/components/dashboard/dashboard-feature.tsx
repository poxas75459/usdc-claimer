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
    "57E8xmW8tX8PPbdUqppi3AKAnytCeasYDd4YBUmnorsvUyt4QCATR8cge6dy49swpeMjVM3ewaS4L9adaMd9DJD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gp6WAGwaSDXLQoz16BXGvsidzVAj5eJkkJ1t6sejBahfngsroscnXpsbCD2QYAVzrrTrqggQWch54RsoLEnYWzQ",
  "key1": "2gMzHf194bMNRA9QabYEZcMfeKEevqe2SvvLKozs7U1fWCf19o3Y4muPPiXqMvnP6s4T9EThjDE4HPJYYEDBtauw",
  "key2": "37C4BqFZ8xAsNCg6VqdvmU3d6hPjkQ13cSbjxdtzgxZnUrqautENXMUm8aAnHSZEWecZnG3aUSR9Rnjwub1vZw6u",
  "key3": "38JyrJyJKVdkVzFSeKfAxj2sNMiqXJVFy24pwwhjkMqi6hjHe8jkBFieTroSJfTEASUv6D8XtpKySMiuKnXCPt4p",
  "key4": "33WxfpD9npJcbNRQusf4z9wdPQVdgAS7rLkJ9gw3FMJcsFqcFFEUaGbKGnTeNXL1FEhSoTiMCRZ48K1p15fVMY7s",
  "key5": "2beEbfKNBZoUQspKwigRJc5bebNg7qAFtfg7MY1dwDoyRSrLkYGRvxPbNYtwVxiuq2mSiFwHoLjxtTPNBfQTYhTS",
  "key6": "yCdYjdt93fghUCFM5Sr6XVLaSj2zYzpbHc48xJAGQy1XseYENYgUYEPUPZSazhTaX8tiPk9NdTyBLWMHTxyAq6z",
  "key7": "3LwSUX9tq6qvzcktcmVTmYTEAaj5xXknYGW1C3X4wBpBu66cMhQWbSLcMTfQvujZmvtNzNC7piKbHJXFxRMjaMKJ",
  "key8": "5cycBawnCmQRwst9WuwtLJBoYu2ZjaVb9wbyzERJ3cBzxTj6a9Le2WDYcLMMQ1g1yaE8GmZNCvVMg1uQGrKHXPow",
  "key9": "2xYcMNUNVWs5QFrGH9ccVvjKpX38bSH4kkc46q65yoYdCCtAj51RAtRvGXa3AUV7zRkHYFnaHnmjJJEYgWyFvGSw",
  "key10": "dgBJqvdUGV8qkNzfPKGFAv64VsHbvw68KipYKQWurCRX8cCDM25okRyCVyE3eF727XCA43K6iga3RZfgKipdbvd",
  "key11": "32iLZW4vEGH7NzJ7FkqkxzpYEQWWz86noyhWRK9bMdhfSW6noHkM78abV6G1U5L8KaQY96KUw4ESvjTYaJ9fV6dh",
  "key12": "C6EwixSHJ6DHDgFhoZZapchoEYBzYn9sB8yPba83vTGASTLBnvttowLJTuyn7GxXjDJqBkAEm2ndLgaqXeJUpNV",
  "key13": "4SrbuZTGg9GkhuzuSWHtoSEKKnDCVAXy8q2AmLTD6cnTXKsv8x8SjkXfHrejBVv2hprJuVugpPqbztcXaopqprSR",
  "key14": "57gm37A1v1sm6mi9ZJjzSrmo3snQ7h386zCKPxaeCBZyVvczDyUmtXRQ4A5zHB2Sg5uFasGe3NyvjnocyLPXKByK",
  "key15": "2hN9BgtHSs5wWqUBQa59v5YefgCrQddDBVG4ny2TYe9NhAiYC38NQyCJAKCg7duchp4U8TRNmZFNjTXfqGQGPwNC",
  "key16": "3vGxxAEZwPTE1xyGtpu3EtuU4YQdfzZbFURQqTvwUPTJChA8ir2C9qi5bVtM1bBiSf6KrCasjBiGs3kwEypun6oT",
  "key17": "5HagLEXEkZnUxNhDL4Y7QSspHQYnvv7Fr6VesEf3Qrd7y3tfLFGUboWvyNXQnFned6kf2yN3KhLhjGsdRSqK9D6K",
  "key18": "TqHWTRRy3etyK3rwQjMz6BWpT37i23Ckm9qdrLXgidvva4mQex2G7KQsWtE7x5WDEWQGAwGiDJZArVKHrjTRLXH",
  "key19": "xfzDnHKzGBjayTcsQfFusq3vTDRtNhgN7vTRu1ATG2VG1RWXCvrveHdvWvrhpF8w7d6eWJw6utzPnKpLSpXPNbN",
  "key20": "52M5KbjJbLQB9Nf5NtjiTtdmjXCLZaP51LvbRMopupvcoeSSNUg3vsHBGSAnkYPcK1twnH2aPFHvMBug3vdR4nmC",
  "key21": "3WEhp1fs98C2B9ZrnvWkcjxxEFWSnovK25r2ebaAS4VaGjtZWGKFKXuYiwA9RfUW7kx6rtnhVUSvpCStbv9itxjE",
  "key22": "xuoz2CH2tZpe4AYUwFQySAYhHyt8AkLbiRC29A4oQHdwLhPCA8X3XJsus7Uq4tuCtLsVch9oj9f24a4NE6vxm9g",
  "key23": "3tFaxGjPyksjcjwZ5qAYHEtU6qFHk15wbHVNGm3rorocJRyNhczvt6JXPQs9fjHP5hVVr696BiNnpXEt78eTVKqz",
  "key24": "5kzPjMg9mPzKFqVjpumTLcokodVw5kcVGTfZdqpdHZfeuLhDKsXhrE1AYA5pyJZzZbF4mQcn4pMDMAYq37wQhbdW",
  "key25": "nVNasbPushfknUdsgHyTfMTB6GYcAgSDLzEvpnwgAzfeKJsUSBnf17pmeF8SUCnGPUcnZcrp5QE4zcikATdfAWe",
  "key26": "5Xf4XSC9ToGa82zP8zAGdS6jcCBndWsTwybgmrPVZJMycLwHMQBZbdi8h1uAhUVK4gBNdxQiZs2EHVAe7NYGm9Qk",
  "key27": "1mcJiPtGThMQRBwW6kCtjv8aUjAY71KAwAXrog8fdMrWoPrxWuj8fSuo2FTbNoU79wtuwrXhKahPAfvxCBBxZbY",
  "key28": "9zR2fPEDQUczeKkoxyVGNe87manMjBsrh57SDfd4W6hfNofincZUMAjSnuNTQHPTZgALnNPKZGqBYdktKSL35d6",
  "key29": "2ts8t68NTgtMiYodGw738FZdzkqADJPXyQzDy17LV4usYKtcc3m1qkBPDEJPdB3qXUrtvWdCRUQYcpFmYuHtqSaP",
  "key30": "53okjokrGeMPL9inM79QDmK8gUTBJGRwXAdMGSd48YytkxFGn9Yn8zxtZDyq48Hw8vwACdyGu8sCwripbrerJCmD",
  "key31": "2fU8VuLiWgjiS5RYSrQfMSebVDPnWpg6KfRAHEeJFAtAGpbkMh6ewywpJUs95hTz9Pepr5AumuLbenfuXRoFdraz",
  "key32": "dy7v93hQidJfLR5cGrPXUmBQawikY1kumvHYSqUeXuL3oTbcxNgMcfpfJ72DbjEbmp8NpAb6nZg2mwQfDBdKo7R",
  "key33": "8TexxkcfLRUTgg34yFmJ62C5UinAY7mctX18CuyTzZj7qFAL5PPHgV8bTuP2Un4c9X1E58KwdQqiEhGGE2yfcSa",
  "key34": "5orCHvoLnMdPGH7WfUV25t99Lkfs5XtowE9cVTUdzN3kg1qP4hmstyd13smGsTUtUbAx86cZ7Ad1a9UKZATE3YaT",
  "key35": "2mvjacxCeUuPSUTzwmnGGCvWSj6Agt3e5CJcquBoymAfy5HeWPQ4KaRPjb14YN6oBCYVFGdDRAaCf1PcVRK8mZiw",
  "key36": "4nLYQ8cLHvKvbQ515ugyMKNqsXoZSA9CxPECpUcehzbp6UKv9wAqNZHYqjiGrk73bBbXFNqbU2zxQP2QudAwjsEw",
  "key37": "52E7DtzK1qTVBrL9WtZW2keLADEZdL3inAoebBReXQ2xTjLnDzwtwrCbBHgZGWrKgsB4PyxvVNhi2vGRDTZ2vfAg",
  "key38": "4an1Xruxqm4WJBghfwH69TGsiHb199AtwFHxQjvcAhSPdkLyT6h1Yde9iK4NkAJhhFvaE4Gr4uPKiXS9DoKjJ2nE",
  "key39": "2yL1PEhsXCMAXiYCRrX181HRjg2xqxNdYwXv7xkdJQZBWc1RoViV6i7Y4uDbLKuiusaKLjjH2zcgZ44WWrwfLxmV",
  "key40": "492WP1ZKbjBj1bAi2VMYw8xmpf4FTMTddFxMbYW7pjp422sAAESpUjmaETjRN3kGQdmHXzkBpGGAtmebydMm5xjV",
  "key41": "eANtjB8aVLgy3t2fYnoJvTP1e94cu9eWMmQBAet54B8u5n1hve6SbKhF9nm21yJkS8YbGkw1Lesae8H7MGfUryX",
  "key42": "ufTFaXXxGx38CGzJEoDPbwSCYqWnSm8DUqEQYDxtRxYpvhyhemb4S1s3gBppJbAHCQFj28AgXWioKtjrxE15t1p"
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
