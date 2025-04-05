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
    "2AVLHmT54x3euayofTA2xgUKHjj3oS1hbvY6fgZARDMzdbqzyvX5gFVG7uEMwNCndzAFjbHxF92Bu6fwhQbRYBwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BQBY5LHrxeyGEMnBy4stRkE9LiYpkjjE98QhUemjjXaVwuGEKexSzMW6fkg9Bs1LhX29hWTBqkRToUZnwtncRyB",
  "key1": "5NAtbZppJzptD3XiuRW91LRdgRcuSdabvmJB1h4C72rsx4BgwSzrb9yR6Dg7XVndugQPXetS6f8ANB4arFCWgMah",
  "key2": "3tKZpVCrYMHnZqwqXxKMEHbDoGU6FpHTNUg5giriQQVyByj3oaXVCMca1EdXYJqQZYkEnvFhAgYShyXsEPs3XjWs",
  "key3": "w42tRkjR7ypox4KhKxMouPSYtiKTb6VmfscjSF75kYuyKSXQokMnzVatoBf9TbBJdsQGkwnQLKfHF5KGa4wmDEf",
  "key4": "4HJ7BXdwBR1a5MP5tvp2ShEc5CPSj7czdeVfSUJtDVJ2rQrYhxetxZshFujF3mWtWYfmLL1SWrmNc2voNAgYxAmX",
  "key5": "5PpxwWGPG2M5uPCvwj24e1gAsEDXdqX8z4DktxobDzX7KTjy2x4U87EtJXBpvpszzNATSbrSiU2zDQo4a11rssak",
  "key6": "4irFpWHGKvTkYQsSXSEYLEdYmamWr51gEZUtaEoyNBJRQVXSFu4XTHSt7RPrQdzx7HQXzgwFCkaHXWwyTJfpVV37",
  "key7": "5tVLwDZwVYigunWbRhULCuF6RS3LVfFT27F6gPLnjrtqt7CHfTgDyTDSTn6fAUpdi6s4C7JW68QmSUdCL4fwEx82",
  "key8": "3ih1CuHSwS5ZDh3mGTpRkvom5q1CQp6Pyb2eY75V8pxDJnm1aRsXgbTGiCh26gZ8iu5F2pLPg4V4ziN5yTcMzjtS",
  "key9": "4xEZW6V9fthWHeW9zhf26CSU5CCCctL1YRyfUqv29QjdrGzy9ufgVYrEJTKSFmcBaPqbwM77p3Gd3vHTdfN7hzn7",
  "key10": "3uYWkAyaHiNmpqV4VFXNPUL5kp11w9fR8L5GQedQkHmBDGkcKCVGr9Xh66VbAV7vwrjaQJ3t8EsLewTtAXkkMjLx",
  "key11": "3dFCNAMZjVaCec5goKmjzgnFYa6ViKKPXz1eMEScnonp863gXur5XrcUmDAEWxBYZFe2KKM1QT6Tzc9s7ECmUob3",
  "key12": "3VZ4QBorcpfK75DWxK74KPUJCbmsctdv71PkeFSXiDuD7YR1j3LnH95JTxz2foMgfYGAAjkKHSv8e5vatgkzFne1",
  "key13": "2jBk45eZpMjJ1FGrN2xtfCL5jUJirYXimZMbSrgUEv7rsZnf2GuoYR7Y7bYuzVDgw6kLXSzEnXZHV3uw1WW4mzMm",
  "key14": "2qX2NTphqES8T9DDQte77XYb2wEKhw7uK6WWWBBt7VHnejtazqfpkf1w84oFNa7Do4PaQbfuMqR6WwZ7vCdJWpRX",
  "key15": "4Jrb9jyHMCNB3C6ARggDhgjaE9p5djJyJzhb77jMaA5PD5QbUJ3uT6sjVZnSvvoAjiGFC5etwNaMnH92Uy2iM3R4",
  "key16": "4m1DmdSXPnJLDEERBD1uQHkuMvfb9SuFG7J9spY9oq2fisv8w25L9Frh9Esd8DHi2ngw5F52MZvmfiMArvKbcTas",
  "key17": "5exxm9uyKT26TczuxNVrSyFUy1pcimimWwftWV3znwKZ3ZCPX4htFcrftnEA1Z8gEssgqAP1aXRzFx2xABj9fDH6",
  "key18": "5fRDW5TXis8h273fi8xSoJAHsaoYXcaHTAvpQtoCSt91YApULi5mXsZjKtAns1f2hHrhqdwSHY5aaqjKVmXndm7t",
  "key19": "2ESQrWxbDBkKH4t7BH9JhbvKXETMSiyNuHxmnf4PiQo3t5sv4z6aJegG5g6WJjZiUEuQ2TEfRLWsZg4NY3qq3X3Y",
  "key20": "4WAmTmBZkMLAZc8B8YBG5SgoTuwFx3yge6W9u2T6iRFk6YQ2qLJQwy5dFoc1S29HVsugtfwTnb8q28Ht3sYeMYhZ",
  "key21": "42RPiuvPHSTcp69Tmj88TRMkg6xSAPCFRMd227KiKHCXQWo4ZMPDmGgHHhm3JEVPnKTWQTWHzUuosc7Ar6K6AJe8",
  "key22": "31BPyUmLumErwRn7Q4qWrFFnK7WsjeNNmpGschzSvuRDMY23GoEuLcfu6wbM8Smb45ahxw32cJDEQ6pV4tyX4gAr",
  "key23": "4XsZVLQzSqME3LCH3qphp2jXEfY6pYbYkZhssN6N894aqmodH9FvtJEL3zRYZ68Go9XJoEhx9G6RiHsRUiB43kg8",
  "key24": "2WZKyuma4ve68Ggw95NXxaYBK2SGmFTVQvY97q4hBi6YW6xtjEWhxTAk2btJt1MDp8K1ZGnJhxjxFNsDSFqnjVUt",
  "key25": "48hWFnN5N2HrBmk4UQuAtnpbBGn69g5NYiHqRaLpPev1NYpHLczeh7rLDxM81Dz564A9NMvvLu2edFfyMpRxBAC9",
  "key26": "23FJLH6wCGa9gjpTCuDawmA47imhz4wuFDRDxsL7AHXA9hs9Wze7o2FQ8hBqCU1H5qVX37KsLnh6a6BARTm6zyqr",
  "key27": "55BWLDzsxsZm5tuCj1Kz7BVmmGvQioKP6NpBLdXL7TwW7Ta8GMcz3vGsd3pyLUj3vyXcReAQZex8NZ5n8nJqhNrP",
  "key28": "4u6EDrRefEoVksNvsefUmwadTZwcCvV8VGyFrs11Hs9bqcmKaXBS6vBEHcJBhnru1EmPPmv9agTi1nugk6UtgUnr",
  "key29": "3YTgQ9KmPoRbhyTD2EZWpYKnFiQ4Qs2mrgwHJTFMvKVNsJhZ7PZoVN8x8pe5MbBoJc134M9SQrp86xmDQb5feND3",
  "key30": "dS3bAanWbAoN7LCij4xch95Ti4WRiJ47BcnZayPUvNuxkjbNMLmUjP1iefUK1291TiNqnsXvmt7MLUDcMHg5Nhf",
  "key31": "3oXWzy8k4X4xcSrPqtrrgiVpQUAQLekPwcXq5bcbkDyGx6nDubxsE4XPQQhRguNezBxyDmaTkry6GWvrRM7eU5Xn",
  "key32": "3KJ9wBACDzfJUGiVKEYy8SJfefUC2D4MnSCRqJr4pijYp8RajFTHCGwkxjw6jaSzrvGUDqJYhvMg2QR3JZDHizyU",
  "key33": "2guBy5KrQHB827WU8zFxbVn3VWDoKe2B6oJARNWM78XAE8ryUjBoYDFhhFoQ8zyrmhvqZ8KCxxiyvhgXBPLHCdK1",
  "key34": "3tJ6CwSmAY1sWqjahDgp9rwP1VvucA77dpY1FAzvYakYSDhE1ex6yEvdXQKeuHu2uNyYUuyjs9WKGN4pPypGhbcS",
  "key35": "nQvc52m2fY2if1bQHUkbuHtj8vRrKuApwKSmn2BTyM722iWRud5bZQTJevcrj1EEbn2rTRkjmkEP6Zevq1tNCvH",
  "key36": "4CZKq5TCaXbFE4n8twjYGdoU4v6cF7xuMYTDKMgxR5iBMQt7A7BxsKNZx69zyKrK7Z3tKLAgSfvmv8F6QMwYEcBT",
  "key37": "36nQE7yvTYLP8bnX1q8CsDhhyfDp9MEfp92GPiA4oeANAE2iePuHTKipw3AjnDMJHTTkiXZKMaBL63r5nUQgnqbQ",
  "key38": "KVEdDWGbdvViHpszWa5Mn9vkwrdjD18R4uRrTEMcZpx5NpQ6qHo8SH6ijqssjfbcYQofguH9tfUKJsFnowdYmiM",
  "key39": "3Gcp1GAjmCNTgWd5v37FiR2gDhMzU2y8HXTYfeupHG7iZJ1xE4rkJ5D54YhX3nZ3sErAv3stZxsAMwuvpBy5k1gU",
  "key40": "63RLANJ9hJx61amrkyeX3wuVP16yzNvVC5LDkRNsfAE5GUYhA4hTf6r5ynRocABe8LzHv5UbXCV9hY9hpEYLWdCC",
  "key41": "2CimDupZxSg2qVkKK2demtPXvwKQ9FGwyNMKxHrFv3vDE7jJQHMNH7mMCunMXASK9LNjg8pJSBdQTnvJK52gDAZh",
  "key42": "38EXsXqMkM2NTgugeQJeEJY1fU3ZEgVuRtbpkHU3DNcvcGJeC6bKYfFSJ7X13YrzyV57xarZGX5Nr3mJ4uTu3gDF",
  "key43": "yf7KpiDyAm9mn3vMwWkpkvE79HP2ThbiSP6GKgFyeS1qost4zHGmmSVqsbgX2kkY9admrX5ZHqY9eGEmjHZxqhz",
  "key44": "2qqx2BW5Zoyoj5u2EsyZmVCB77eHCZvQFKub6RCK8ozC739ff6WSCocpdKsTGzC3GnmiBU5Q9GTTrBxBYXDgTPC3",
  "key45": "3PCKTCX45VX5pNDbtY354UzHWW4LvQ4sWhNNqhaRCy5K3DANVZudU3aFiqGHRPaeDZ2BjdU1uoKx7DFHvwyzPgcc",
  "key46": "66VpZzYTCkJvUi9ueMg6qHHF9foKfmKqhK8tLCNatCmjyDax83bWNNrBegdRn6Njx2pVctZdN97XA8cpLy5e5igB",
  "key47": "5H4xmqXdUDgyMFQTgveBVcM4yy34vRD7s14kSSZrGyf5nRG6DoGs7rkCoJuQXsfjf7QtADWQ6xVjBdxQcfkGXSdV"
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
