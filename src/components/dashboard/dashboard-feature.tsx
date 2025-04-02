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
    "4wEBQtrvq2kTf5bwBeXJ2D4vR2ncKcZVYzWRFqxaNZGVnEL7WX8uC9agDvmGGsthw2tceB5jUvkoZAQuuRKvyVP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eo3KZF57LNCDqTgVx5TW4bJuwRDhnHWYapTnX4TMonEeQLP2YdCVZG31KMtyVRL98QWx5chCh7QRRA6jt9wo4Lx",
  "key1": "4poFJu6FaRBp3m8BTdZzdAhvLjm6a6C5B4ZxBaTEZz6wSRYVJ4W4yrQEHpeT2gQgbjgK2CkWFxdji6P7sE5Qoex7",
  "key2": "4dg9DEf4R1yYBA642iRN7GFFpiduuEGafyoz5X2mRavXB1b7Fr62ZsEc8vJpVaVNe7Tsq7tS1Sudrt2t2TLZTTrp",
  "key3": "3pjMmCiQhHMtFpSkVah7L8DyyYnnebw1ibCN3uYuneNA1vyykodv1ypEkcR7Ugr9QhcWFvxax2erudqtLHreR2rM",
  "key4": "51nmzYbfa8Spm6JkPw8ezki2PZLPBVkL3kKYMTG1ptqvRYzLagX6XQEDXcSCL6ykCfmUATcpUCx5mhuf23M4bp8P",
  "key5": "ARttLjhpNtYEdi9dfhtfxjAp6iZxpzYkfjNzs2D2tZtUyc1RqGHXrdhHBomwNG3njhc7KorW4pi7snmK3NxvEDk",
  "key6": "nmzKiXVTULPxp4JFMAkfRZfS5fvnhKaV681FpRYrsVWLvbTFgQKKE29nJScGbnCd2DbBEFG35CjWZFuNMJxHv9S",
  "key7": "281qSR4sCYmqJ4dJ5tUiwYjqucCGP8Rq3yTMP2tbPhhDmNDuX7rZxiqorUxLAp3FjavK2itYCaNo72xju9WqQv8T",
  "key8": "3ckZ6XB32c8aTBVqDUdnRcDmTpUsdjXh9KFiMSRFpMm4os3WHVFzj4bNexxz9gd6mNhakJRfZ9rkBek9QfQDb8eY",
  "key9": "oNUyWkvLBYrsd8af7JXR4z8RY8UbvW8EkLMtgbZLCf7cGTdatsW8HXN4tH6y9vDiLSkyCG2LkkyPXgTH9bpeKbS",
  "key10": "4nNX6n2t85V4JaE1TGkuN8R3VxvZ4JdJuuNSXyQF67ujrsvHknCv8Qb6aKx6h7otV2u8xRKjuua9Ha7BXtGf1sy",
  "key11": "4hRtrfaxaBvsF7YYUBUNvTj1DcuSHKLAJQiDs2RNKKN6Yog7f8B2ATCmv85GHSZ27i7tud1FAFRdaencMbGuqahp",
  "key12": "2oeHE7SMZoH84ebv6N4yR4iQUM8MGxn6JEvqeSuo6ZP8Ci8hA116dV3G1Pa4xvuoxVdYmxEQo5zyGhSvSuC5M5KV",
  "key13": "52RocYWfJE49VnQZ1pTESxr7uv23uT2ShFVhWRFSMbmRVuL6Sp63uwTCSGGz53p6Yjjun9Mz5dRFmf2HbLmpZm49",
  "key14": "4GzS75MQGDfongAAmf3yDSegxdRgDWE5ZDaNkmuMF22NstnoMWvKUP8r6dPHDpbfPtyN2W77swCKWWDq8woyoNW2",
  "key15": "5THmmJovKisP2Yvf8TjwM4wrXt5NQ3gemQtz3VxVrpReRg5L2yB15FTWP3q4gLkrBg6CcyZx3vNhkFRuw19hfZS8",
  "key16": "2ftBC2Z15tGzAxr7PGs1np9XVbwnvDHtUaHnxm848D87rB42YYxCpqGLcr5sPV36jUiAqp9cWLzUMLkTqDqb4GW9",
  "key17": "isRfX3qk7U7eG6bFRaVJWRuv4NbQN7Er9Qw9oJeKSJBFR4ucXJCYVa9c4dZu38UAdeBsbgBLxkL3yL6JdL6dWAJ",
  "key18": "4qembSuKwsFJ2N6GMaLpEhjxyc66sdvvSweJm7jAoUoJqqXKHmj2DMFzGC6YjsTJXqd5FcE3oqtwKj1BW5xSVa8s",
  "key19": "xEJr4Dv2qbiLuCYRrnQcGMqsSrFbSmwDpeRqCsu4F2ZQhfE6EJqq3M9GmMJQAwNYjWQKgZ294SViozzcN6gLX3h",
  "key20": "4ov1Zh94BAUJyZ9WhCS1TuW3dWtxgAn88Qa23ZfjgYJFPhyBuSMaChAiKczTUeCqBvNtdd5TzpfuQjfwwRnVUxUh",
  "key21": "42wjbiynAYJjWuhEKxZoEa6RxX6nLePafmDeV3qtdiFRmVzzF5gYhwmbcvcw7yW5WPdJiAzxauAtAyCz6UgTSaqK",
  "key22": "3Am1mbgpqhfhvuz8rVhGbzcDktS4J2M2fn3r6ZLpVvbhUTYChYhGrYpk8j2uQHF9BhoqzN5XzLkBbjs6HEU6tPiB",
  "key23": "4e7MG7tCWAVKMRFEdmigbpwWtP414qm9jx7N1WYgPt97CA6Tnq9RpiHBPU3m5P4Ssup7tDPYtVbzM6kzZaQEcva5",
  "key24": "5kP13s6aLXq5mvx1Z1qjVf73HfpEgH5pYXS5c1gJDCDTGWp7mV9FvE6ugz8TxC9ANmhUcjkNBsEyLcXuyCU7bKBv",
  "key25": "4cSqL2FgATQCsywcakfzd4tPVunUhZpk4dBMv5VaEmpCwYcLaqfGATEMsxN59Prx7PyJjPBWqGNYWxFaKXD6LRcs",
  "key26": "XsQJx56nzmTB7ZgkebSKo1L4971S79V5oQRxwStYazpAv83NPJdSTBJ3ae2J3KCu2Tao7hsE87PKDupzfQW5EKU",
  "key27": "3VmLLudnqq8XB4hkfhnDrRJqTbjuy8hZqUk1qsjP5haRZAfa53REq3mfavomA1ER9Engbr2j9rku6fEYPNRARRgL",
  "key28": "5uaMv2craBAKAW1RRNFzk6fWcirkd2zyXraBCjaUdfi1uRd6nQ96nLWV67kisQhG4nUqhFvjshjanDFSpReRWPrT",
  "key29": "2uwt6uad7YPBkc78RfnHrAyt7eXWttooaA9vnB6YXDmeQQ5Snce9wuDaKkAaUR8cmD4SZbHpFPWpu24UeC3wT6fv",
  "key30": "3ErPh848GnbCzK6tNuFW6GyY8e9ZeoxdqEFv1EkR6ZbhrAPLPtW3SvHcHqLMaAM1rW6uQ9tk9PtsGaY1jVJsijhD",
  "key31": "BwDUYaHeJmJ1nq1jRZFEsruqTaE4rnCyiBN3fxe1wM9DCML6DiUrgm1Qx76odqXKudVWdBzbj8JXVv9mUXX4i3s",
  "key32": "RVxmbjdSMLmWjta9dR3bMFGeyisem3qvDB9HryNS9DuxR9ucUpki8o2qkSNSd8YYVY9Y69YjPHtVCjoyASpmifP",
  "key33": "vEekP1CEhhtDnGus9bLnWbn3FS926RtiKMgjCHwkdKa8JkTMfnqwuwEXegfMpCypeeGyKv91MFyR7Mt8F92visN",
  "key34": "2PhHxsUpDSY9M6GyxwiWQjh28csXMiJBoHEGfMzehiK7xQRNVh6rPyTFGx47ETtMwMkcGXVvCv9bpqQReo9PdCAL",
  "key35": "63LTdswyWtiEX2FZcaCiyRjaN64VZe1ypXz4xnuXc2MR5ojz6weVoFdBVT6uAa6cRexyBpVyTGkGZmSYJz2Vzung",
  "key36": "4GTcePH6uuvZLgM4jUgmC7H8dM52o8ph1rPCLkjvzUnQbhxXiZf9AVGCiuEnj4gsg9dv4h64Cs5SU3gYe4xfiist",
  "key37": "3z26zHpBjqnymFmvYX5N6b73rwanjjFCDABv2HxBwgRwafEtfUEbikipgXGciZgu8urnN2y5gHnrywtBBjzfmrp4",
  "key38": "2P6bAm19n9ciah976dYkbJGutuqfCBzpBnKZg9biKZEpnt1yw5qEStCHdrKYjHoKyZ9USaUcwwxXX4j5mpjZkB59",
  "key39": "55taeFrj2rAVsdXy7WsMmwuihtqmFAnrRiJAwVKzEfPpKL8ZvbacHaFguPqGN24d9nYWmQ8oZLgGJqCej5B4T5Dt"
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
