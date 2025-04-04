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
    "rab2jkD6uJJU1FXGRTV2UhWGnFUbwJcr84y7BHJbKogwPCJNpgTgZp7MNHY4KjL9ayrYjTQmuRocfTBmihzH6TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i9CR5xb4TABt37VrfdY6ZBiXWMLqDxQWSk7jWsh7iRQM7ixgPmmhxGoDUkscRkrRdxQRQYuFMqeB3rBwetzZGvR",
  "key1": "4B1ZoXDf3CvYN5L95aqsKRFannVJU1MpCb338w99AMDUrNzmRp3KZZ7D8ffPU32KeWYKASY8ZtCvnNZ9Vycebv7t",
  "key2": "5LDfAb4LcqrbsPZVABv2yABND4QL8s33Zc83LWwMx1v2vaN6AkXWKQfBTejjJg7jKM8NAszrrgioscjti3Vpv69h",
  "key3": "o667NJJj81LhoiRjwb2eL9kdEUW5hTTS5oQtK4rKAjGmG3qb1ovpYRTgLAc3fX7CZWYzhFtC2UX25XrrYEccWhB",
  "key4": "4q4P3Xc8aoasH3jSqGmn6zvrbNXuSHExdeD9tvwV3siobmZAGgKkHCwzZMc8Yqn7mk65dcxfhWvC9GD7toLaCJ3x",
  "key5": "5ZhrHpyu4RxbUasnusbhFfdXiszmLrpfBDg4ZPicAYBtf3MtH1H2ziZ3BvoeqXEh5HEjeCgbJ7SismNHcrMse6qs",
  "key6": "2PErBnyVhkL2q4AmWVFQBrGrqLqfDMFrwqA3TSM6dmcGJHToRwDyKgcTQcRq7b4b3DUiKixAV8WuWyaEfP5MYYXV",
  "key7": "rp3Y3u6W3hTZ5tj5Q72HoMp21o7VaUfKgxP3eSuBzmvGYWm4oFZQGAdSqUmR32MYhiuS8gNTwos9Ycf52CimcYR",
  "key8": "2w5CCkYugVZgpdtEEyMpXWdhVbxyrtgYFM7bZDqsoeB8kEUvJLmkL9gbWUGMB832MQQpkQFezpngeRTxwJoxWdcq",
  "key9": "7pDP9WSzko3o7GeTbdezV1ZmSzoWrMLKFHtAJPnUSjHGmk1zZeQpgmSUCQm9EMasusBaJenDhcZda36MKfrFpFb",
  "key10": "4x3ZA4jMqBxECPPqEBpwc6Js4cGgncjMYQwjryD3FtwAJ3VNNUWZDps4PazD1X7RWX2d1QgCTb8Gvp93NNtRUnhP",
  "key11": "3a9q1wz1AfjWH9HLWnNcLdDS2tJgyP6Z3VJE7xGxedGCVT6Px3RxFPdgddeETSV79MTC2dkbBLJs9sWnWVJZY4nC",
  "key12": "kxzmzrVXY4MwYG3Y6unrQ4uuUZevAEwRmD5DpanM3onQuupYXWgdfMJVT6RrLKSZY5BNpUomknxGEpTaShYGRTm",
  "key13": "235J5BzcNxtfQich95oTqiNSHdAwViaHfuoVkAHFFSbf9Ler6CeM9zWynfKc2X12h7U6iFLoLA4ECQ6nCttTg48r",
  "key14": "avaHFt7jrxCWZ2qjUjptRa2Cdv2L3Cm2Cqv2fW1HopYp9ag5qPS5GHt9w92j3GVTMydw4mifgwhm6zEXt3su2p6",
  "key15": "2yHZMNiiT49de33YtJuo2bqbzFA2PKFteSNFspQGawEnBpfXxMHUB7uuJhqWTkacZJBz55Xm9Pw5gmCD8JYkYDLv",
  "key16": "2bYybCvfBVjHcFEuMrXsKHoFyG2eJrmJjetJrbZa3NcKW63NVWUX7KDRsgeL8MkRAkKbVHATwAakiMwJqyGK1DkX",
  "key17": "ceDCZZounogfF8aU8Dm9pvdWTdq8eqJitL69px5wRhCHGfdgUnojxtghmdrAMSPemguKLT9KFGHYi99aYAn9Cc7",
  "key18": "5EfLrZF9unzahqhvvVRjzCt831t4ANWawwwsGoXXhodYKkcwi1Wiuj9mJJczisRYZFRAMcKvX9Z4226vER4RFUqN",
  "key19": "5DN3BwVDz3PfFs5UTNNhYjuCFkafo5JJCU1U3czWQPxFctiiYzWFpCfkTh3ixvBNpxNLreACMRenMPqsTrLFMxdY",
  "key20": "5dXxCfX8WZ9dHmrJkbXkRgaf2PmypCpvaxiQkryf9n2vBcKzDwqaSzXdvucPjSFBGsnUhCBjQdaXWwGxiLvvUsvV",
  "key21": "4EmbhXjjTK7pBZSHmVdzf2oG6D13iqQNav99nDwXbY1vegeiaatNNCxKRZ8h1TUx7DrJigWoTKiyhRruChtGRro4",
  "key22": "EVNBU3NXSQVG9qcVB8EaaLgqMH3anKNpLWAG3sdYhyoMt5xaWEdn7UGFtVn82zCxFkRSWDP1vcmNVcxyfUZAn3k",
  "key23": "2XuPRRP16RVBVaVaZBvqKwhsmba8og82DgvEkZRYdTocBGVkfgAyLhxsby6jgA3LueJLTm7xGtk2vNpBqVYwwFV5",
  "key24": "2LRJfj6M5FDtFKPUZn8r1nAkvZMbatTmfSsHrjitWFNnsKSrSyK2WoTrHNuKpg8ugXhJfoTv39STRovVbP7zxwQE",
  "key25": "ex3bDasBLRLqV6tJpp1JvbUMuidWdyJE15hNcT2wsyWUuUBVWkTgwFJxYVXCsj3weFLEhiq7q9nKzGNRafT5Q6x",
  "key26": "59Zn5JnsNjDx5TiuG18kjwwWUYXzJkthc9SQPGj2zmdrBgFixN2vcnVZh57rqAVj4Wg12HVfUH6iM3Soasjti81Y",
  "key27": "j6QCdFrdgWSBzCpN4TEzcYnxsWwfc5vhLJJtPMhm9v6otWAC1s1RGGcNwZ7wHGeSpeyiMjGgoXHW7GimHbHhn96",
  "key28": "4Jhq54gPHJ2F238NWvRMKVXYcCRDgQ5uXXX8wQSzCaP5XE1wuQL5f1EnFiN2TB5nn6BqdyR7ZUGo7vFefCbw9ZVg",
  "key29": "2KWESBXXAyobFNjfgQykJraskagFAhv8HLn8xmjFcqR7wyDfkZGQhpDqXAQzTiQEQgsDx9Pfe8EsavkJDV5LLFHA",
  "key30": "3imVFgzff9R8YYWnNFGVYmqsaJrcViXRqwXPvkoYYao6v8G355exB4Ej2HQXPzvx9AWD7sBs1Zqyz4QECdnigckG",
  "key31": "NU6kLUUEnPtorrUNLehJ8HfrdgwqWDxcRKCACofyZwZwig6kfhjN6cXWo4xbf7R2AjrikesjTuY8iiD8QCzArcY",
  "key32": "4YSpe7nWwJGe6qvsF5vaU5xn8cvz6izSUpYJfvyiY3VaG4TdmYvy6AM5q69k6dS4vBPACBSD2t7YSr7H9Bnqq3dz",
  "key33": "4VEFMQgC9WkHihUcYNpKWvHLG3ZTSpR2EKjLckgpABBfZaFEvBvykM22uziGE3ts4rgUndvzqnXS3MA6BU7SdciR",
  "key34": "mgQGW9H5FFgT5dZJ3hrxRWZ4T2VsPbtQqqH1igaJXgb2Ez2kkeLmK2npdrKN3ctt2R9PAVp47QrmZmxL8368t5o",
  "key35": "3cxiPsB2M4NnYHkj6uQvpEUju1jAdqvzdGvGh4Af17Xkgup8raPqFBCFgwWXKN4tvMCMmY1BukEymoXHuKhFy6RK",
  "key36": "3jyNYH9TGPAfaYeeJhvD8kgP7GgACKcGsGfe3hToFmKnZkzRHG21NGAiPHtEjmQBvCjZFohGtiGY8m2sgxkcFZV4",
  "key37": "49LAVcPxRy7DSDyuG33wz8ZmLvunvcK8VEKaUA5aseXTGh2CGDvkU2Pkt5Whu3aCqQs34thJTLgWFcHSxmHZy4G2",
  "key38": "3kTBdwYCMmXayXt9C7aZqDiQLkqh9tgAmYZXC4MiGoHELajne5GrCHbanYMu1kpwgx6U35W75gmE7Yav5kHugjQs",
  "key39": "3fYWYdahPUHz1r41BM5bSpe6EcePL8XNf4YmvBLPDEYtjKQCTHQZL71otGxWHUafCgmd7k7YoLkSGq9tCDUykxov"
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
