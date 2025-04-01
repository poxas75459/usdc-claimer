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
    "2z99Rb28qj7DrG5dN4vwxhmvnbHK4WvTQmUaNTiTQ5LwZGuHMqmkorbwAuhz9CMPftyYBBNPkyVQF4JNiujtzutA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26F7cR9AKd44AigRjjtLZTjb6yCpf33ZDu7cotDNjFqeBn2vdKVaWcaeHehCzC1RAmJm3KuSJGQjav9HAQVzJrQS",
  "key1": "3Hh6aM6koaDees2T7JJC6u4E11PdYvgVyY36uzcSVhECFgUj5QFkbZMAcTAz2rfmreLnqACztqdXZ8ttzJxVhEvu",
  "key2": "o4moRx23SMvFRmyjqRAsqJyQCEVbW3uiRz1FkEjYWykcmxCQJvgURKdNftTHc9pQoQ9TgXKj8QyYXMPDYzCHc8D",
  "key3": "zcU4dmi1qUbf4wH9TTuzevnxvGSVJEQVTCt4cYVAbmpZaugfBjcb6ysGdDuVoEaEVRMB9Tfg4ezhdaa5Ng8qXKK",
  "key4": "4NojghorKp551jVw3HzsAUpG5qqYaWPQLD6gXuKmpHxz8Gt2Zty3i3LrUAdpedCNF9etQEkd1pZ5DUNyTM2VUVLL",
  "key5": "5zP2dpEuuZukuBR3dG9vXKum4t3NBfxhw95KZW3srRxYsiamW3ahb9aiXv1hpbSUH1jJux2x4X3xkH1Y44NtsU1U",
  "key6": "31V3YQ7bT23PTyy4LWZZsnnnxAzFafeesDCAr3QN2baGkaPJbP62tCFXC8Fr1jpwF9C6Z5fL1AHBaygs68CJYQt8",
  "key7": "4bef6B6LjMqLbLPMnya1go4ycXzok6HGpkYvamD9H1Q5gMV34Hw2mGtNyVYTwYbB8TKo2YG9LzUaAcFDD6GE61ww",
  "key8": "fPGT4W9WFtzNfA3cQYBw3isCVaipNnbFWVbS9isihbCY8X2Py2uR8PFbmm3nEpx8eucneDQPae4evqG7DD2Rpkh",
  "key9": "eYn3FEaXVEFVa1tyBUT7Wn9EeoRyvNNT2vXVSXztFRNdWz7Bmeqf5KpqipSmshNoP6GwDdNAbiR2a26oHsJwSRy",
  "key10": "3483W7M8UfqE5WqxcoGkAx8LrFEPnohN87w3jCoHCabh2hpgwbRQvo1K675TpRXxDwXZfkukdpy65dgcQkUbt9it",
  "key11": "2HDJeHB85N4qrRvApDT94o4VmHGRdb1prKLjTCzA4TJc2RVwtn1D7JgKp4YAwK9HzyKQLHXkQAPiQkrYWPKfppzK",
  "key12": "2RnxYJWaod4emUkXuBhHTgx9g1pCiCarMt7kbf2E8Qd96XRaLz22zXxu52cUXD5NGpd4Q6oMnjPx2BWuj8kRw4ey",
  "key13": "61p3rpHknN826hUcpt9aPJLn19y5y9BvJ3b2qWZb7tCy771L8AHdCFqDVNGq87QqYiUVkJEfyewFEC6gWTLfgzmB",
  "key14": "44FmCnzsYfLjnsCXVmtZZqkRRCQEfVQTfbmC41ArCh3M79bTKBXLea5reAHUUZ3iEFU4jMmv573pVVxqwTBnBcvT",
  "key15": "5dC9at4Xc6n8Dxn1oscn3Q2asw8DA8FiKNTtARqTqiCRwKmb5dYeJakY5VFgoCecY17M7byeHBHcYKSA1nPnJyu7",
  "key16": "5H1gEZUV56veZJnfNy6Qv8cSEZZLjbD88g8BU99YNUx3nhyMfJ5r7usr4u9CTv2aVb2UK3ETPz3EXnKnmYyGTeFn",
  "key17": "5bLYYp4PrxoY8Yj3h4Ba8jWEnUePUmkn1yNt3NGcYg4Kg1hjY6kPDFsfnz87Q3ueYc9BWpxPtXTezi1mmFJA7CvW",
  "key18": "2zdPWMvFg1mBxvzvHv73FX2GE2P29uc9A8M6uG8EXjjPt2Kka3jiuT64S3x4NKGGZuAvPhzpa3z7xKrr257Aq4mj",
  "key19": "3seB3XbiLCB2SnPV9vBFHPiPqrAcsoBP4br9mmvM15K28byUfZQbdAUDvLUdmiJYtWEsjiyuiDKM2y36iJBBTMZv",
  "key20": "47qguvjrCXuNNwEee6KwvmHpqeiAXL6pKDSNffctSvHARv54FuwPmmfJCQURd5xSPCt9pAz4qi8jgezySzJdJH6E",
  "key21": "5HGyUChUY8hxFBXcesJ2etfQwsChVfpUNzqdqWMjyUkPwcvYbTeYtVQbNpAJ8LRc6Z89sVojKUFcbiEx2W6HvSwC",
  "key22": "3Qm1SUivo5iu2dTtdkTuhWUxRYMempQikqCqvz4YgDzk1KahKUzjeeMVUAGXw2HhgpsrrjbVB5geaxPHeK4zbzRL",
  "key23": "2xp7MSSh8ejFbGxnnpg8LFQTci5HwRXBvzhgxbQCdkm7KHZHsqACXBP9upygcQk1ne9ZY8JqoeU2Hki1sAEqbxHc",
  "key24": "4Ua6TaFBUwGa51NQD619xUrD2voaqisDvyJjVoifFLeGzEK8AGbvy9oT7BeAZ6WzpWNAXLxXnibqUmfU69Bpyy3a",
  "key25": "qgzyUULz6jtjCpFoVftoJCmttKQzSVie95SyWeojDyw4uLGfubiHiUhf3Qaip7cK5uezNZeK5ck2UgWHz4q3T6u",
  "key26": "5YuZBQxyjs7XUeBp5F2KENrDXHfBLoXuKnz765D58tjvQ1gDwmQHVdLK9SZ8w9i7T6m8StKbwX4gaCApE38Dg7rq",
  "key27": "5QEavccdWkA1pM9MnwUPtaS8ft8UhqGNjJUCeEU4kFwzM5FVKGvHjp1uyyudvZMv9FkgYznzQa4epXmyG3PGeHTh",
  "key28": "5NyFGtGq9HmxF7MDRBz4Z1Qv4CMcgHuTLKe6mY3yFzfjrg8ZyTie34NWwyhHHdM1jSAA9goURGhbaqniy6bxLwAe",
  "key29": "4xbj6LWYehkDfdFaBWNaFbL8kMYhopoe2m9WWH4BHUiC7EXyWLMTHgsGi1MpkxLAkmmcUwjkCe4YmukcqdGkMLbY",
  "key30": "5yTBdfQMvaS31sszB9d9pvYHTsP7E14eKwJTUBvKVL5ysPC1QfVAmGzy7Ngo1XEe8QMiDQtDLp5fvf8aeyxesnit",
  "key31": "4rzxWogwqREPagWHqq5bT6vhyG1cbXy94dxHR8TjWsjEaJjWV6LNwbbcyEaxZWUQzESzdk7cmYQknPD2fUhPNWhL",
  "key32": "ESRM8tD4i8ZP8sPYQDTC6dMLkuSB2sd7rm6a1jfQN7CChz7RfrWz39wjHFSE6omX9UNFqeuMGE38QFJhEzSvqRN",
  "key33": "2vUoJNWyLVhpz8kUstGHj5n5vKwUdq8pkvWhtkEnmX9nL6b7xroQdK2iHqGCgStDtWrZPeuemZdfjy5fsHvWwobj",
  "key34": "4HxQs3hCmTswH8oHLXynv2t33qTqDfigTGPuzY7V6nMwxnnQfMyQbjd8mzxhPWuSTx5qY2k7fHm4h1xJe1NJiBdq",
  "key35": "2AmRYdfZdo4A7dG77FvtGiht4NTeqwCWCeaZ5P6vSppgmL7qNvqCD3LX6QHH9Vy8v9UYa6qK7JnRGNqTY9G3syhp",
  "key36": "4TwXD6MDsPSzpNKKJk9woXfZFaU5thTHqJaNpdaje4LUyiDwRFy2CDbCVtdHbrorNXcfGuNjvhFJsDTjjsm9wLV",
  "key37": "96Fzko2BsLfMHTkLQi5E33LGVyqmx5KF7Wy8QHGiy7R53QUgrJjeuh8FX3GcwK4Zh62Jrw2NGfsAvGWrZfPSwVm",
  "key38": "2UZWYWVTRKCFaKEJ5Wa7wP2wdmDB7tomgxJbzFoXcMRBMSUdUuM4CWcgA2qXo9H4qJc1bPNH3YpmQeE3b5ankcc5"
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
