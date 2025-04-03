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
    "28op2xYtDz6xMUCNpqh9V2kmQch7ziMUQTCMGzAN75j6SzqjaQtR5KZkKGuf42cDfJg6Z34zCYLr1D8JXzogn21M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2XnajamYc3f4FQwg2k1a72g7c7PT8P8HeyykgrDH3MY2r5iGRxooCJbX7aENs6KpboCbXhtvEwiA9EDNCDz8jC",
  "key1": "4ZiA5rpBCz4ZMLchcbi5twQbWbLBwLp7hRuocBQrsDn8n8p6udtqjUxjnHTUWcbitoSbHuT421MTpLiEU2VmsTAm",
  "key2": "sx4zJdRjgzbEz6Hhzcx8wTEGRpb2t98EwSYukv7H8fWEtuE3LW2VQPNHqfCXLGiF3CRDyP9Z7JbuGqqcLpoYCLU",
  "key3": "FfeYWwDWKKmv8XEoHdvKHKetKk7ckhfFtW1LUQhCYKf5zwZywhsXQ9rtAKu3mwnZbvxjxxQeTKDh1fSyj1r4uZv",
  "key4": "78zeB8tSjQr8prWYwUVZUUKVsbjMwxGEbRYTbpstsLV7D54FAm9NNGeq9NJsguQLVF6XVGuvni1YBVUTVpUokdG",
  "key5": "2esMBL5zsD3YfP8gTJUzvCWfbwhXxAnqz3NTPYEkvRtxxqR2RwMk5Ki15rG4Voe2jktimjRy5QAhPEYRrNvtpJW2",
  "key6": "4thK1KT99pHM5ALaNy2QDZpECX3wzTMLw43SksFZoNmbeGk2NZ4Gs7WFACa62J3eMHzEHqfC6sUS8fm7L1jeXb22",
  "key7": "SMU9TKyTXMjkw8QfV2PaxQ8FDAFEQmRzqqedRVDoB98DAqcZDZkrZRzqq7F5QVyc3oHoENZJzxY9XZyEXLR4xir",
  "key8": "5kbgukRVvELhZTse1GxjekxTvmjh5g21PrSC1pHvPtPt4weevewBJDTVGaXP9WQMYkBa9RMfD7LmREr33QrPmPud",
  "key9": "4AeUQwFih5xhZdALnhJditARVgiWPoJvHZLTD7gTZEXBjLS8Ci55TxD5injp4ZuWhjwtwtfyS1FRYaa2TabwaoFi",
  "key10": "JfyuqUcNUBaaz2WahbGKJ5bs9XRevJ4CA3jqygnQaPiRSofTVpghdebrpeR361thUZjXvKPeUqTJT8ucmzyKGSX",
  "key11": "5CeMS4YjbExnAQ4Stn2SASDyajsU7cjAt53voBnMopE3M4ZBGc6JiKTJkPopCbh71Gqkrzc1nEG74Ymp3K6iKVUV",
  "key12": "29eP5hyUMAf6avhjoGgsxd119vcodmdh57EvPhe3Mkmw3d3FUQM1wSziU6U4jsQ4MpmjXAxsCKYFCA5WMVV1A2Yk",
  "key13": "dZeV9AwaofSdCSwbMbrFbF7eLJNfhm2PCnDYpauLnDcGTkJq6Jo5uEUR2UFa4HbyFARVveEYBp71xx3WH3JU9wP",
  "key14": "5HhQusAEhDYSxzjenRoJDKFCGWgw4H6CkzZV4yhwn2qnhSyge3K347sdSDbbJYqQpe557TBw6HkWvEgpZ9xjRcCx",
  "key15": "3LKZgDUEtxdihquEfg5QECbfh28gMoLbvYfbpdS9AKNnq59GS84jzgpUyKP1oz6JkuzsSSYGJijSFcQDFLNixnx1",
  "key16": "3BLchtdpjZURWQTVeoMMsLkawifcDtZtySokRuqkeDQKJ5ykRFJAZcsSejNjP3aVdtEQxF9Xsq1PxSYFFbDjC8F7",
  "key17": "bzGDmagztPHp3KQ38Tc5QrHEj3GoZHrfHFjCqWQoBzX4umFuA9VNnwK3jP1G7eLf32NqV4HHw1q76An5hGecGaS",
  "key18": "5vAzAhpQ9nYVoMFbBmojXKvr2e8zy5oCTF5epc8UYHBT9t72UZGPsSRAaVtfK5ZawXg4G2WATjFpmUJ3aw3B7Pv7",
  "key19": "siRBep1ky6cFAAsfHgiwbUVr81ZbDyv3Eqyas3MNNN1FYr3uz3ZpuKYjqdQEfnn1badL1vFkgy9zH53WDn9N1oF",
  "key20": "47DGit71Gt1Yp5Cb9i8oTr5uBpX5oCrQeo88xRSbgrSpTZ5LwtmmkmjBaiRdvtJvM2oeW3Z7eC9qmJCY4uZNXu1x",
  "key21": "3cjP3j3tMPZD6b6FwEdmBcfGuXD71NX4uPm17Eyp6XGTfFyWti7WDGc5GAVvfr32CedxMcRkAqMJu797ecNFcxGn",
  "key22": "4tTfYaEwanWkWWDZY9tQ8geVnzYNbuw19FLmuuAqhse42AZ1Vp75gdsJ6EFtNcys6p7AXxUXgZKkDswWGbcbTeFQ",
  "key23": "2KpgQE9TYp26yqJZpKoPJNuSPfj1qMoAgGRwipBiLhfavPYyVixwMPoBSnAJCyEymh8Av1UPTJH3pmhSAtdoUuHd",
  "key24": "2oDc535QRmeaJQcEw4gAXMNivps59PLVwfMGEHNQiZQN8qcLL47Avt8Qgbgi5cERpJ3crAZ2YBTYS55XJM2Uapii",
  "key25": "4AErMhqawREoYuC1eRsamcBRCLWCTZjkVbsttnYyKxoz2jXThvHmS7WWWe3VndWaTSWuGsd1pfec7KvMuR85faVy",
  "key26": "3YaAFZadRL3qw3zJYMk34PMYM28ETZcywNbDC9k1DDWKxrC9SZzPV9NGqoAnYtzpNs9DkUvonZeH9nbM7WqWPWDq",
  "key27": "564Q63YPkQrw3kfYburgdDZkmwB4NN1wsbBfBfGEKcap39V3kxbkf3m5oZD6Ri8D3Po9sHn12rBsZ99JYYRFNdQa",
  "key28": "3KtK7xAXFZm51QPjmCyCBM7GifkEN1rtAoqgWhzy5sgPg7DVLvDv3wnVGPbp7a3XC6cSCE6nzv4KKqiazV6m918C",
  "key29": "4cUBLVRDUFK2PP9oJEiQZF28xQB2Lo4zV1NuZAdNBga3HGDTjfCGLUkyaZGg5Bv1ro8sEDh8bdyVZE1M3kBHm4c5",
  "key30": "3vAWE3LSSn7NoqyttjoS5WKaEWsajQQL3G9ESqHMRv7ReStDJqifxWtPqpHoftdeKx5CspRbbBoAtgxhqvk8VJ2b",
  "key31": "2TVmo8pGA8kSyUzvgSZV7bd6Q1WWtXsYYLwRXSn9HjeDwKaGykHrHvJKazE7epZ92rHvHjTWGmeU6i1Dy5BN98ZV",
  "key32": "2TZ4WCMENVp5pQZxy2rEJw7hoMYU7wGGeUNhyTKie5i2aGER97Pa8usm1UHTiWctgxjTWTN2PzfBfPdM1ry1oSfY",
  "key33": "5jT6v5vzRDtBwSVtbffebLNt1C8mn1JkzSUXMRnzGCQK3TyLEXWMbjU3h5hDKUHxJXN9A9JFP6mHDZfkHn9BQLrU",
  "key34": "2xveekNEwQ3xk2uUW9KHL2bzrwBCQwxu7NMdGdFRowt2wF17nnDF7R1Qnvu9MDckgM3CRtYgJURQXwrKBeJdEQDB",
  "key35": "4oXVBnTNkUEPqT4tXackw2aqw8UeggAmTuDbacw1r7oDpHKviqJCpRmmBVRqydzNRrQbQGDdCBP24GteeSLLPFvG"
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
