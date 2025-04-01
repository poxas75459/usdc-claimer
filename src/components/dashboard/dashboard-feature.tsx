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
    "475z1c745Umfwd69Maxf7Bg36iTUzWb7WKixwKXhPmRZS6MaoQ5EE1stVy6esak5At6FjZHty1JjtV1iXQeRwTxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PSWEBNxQPRytFrfPwUp55Y4UFaEt47hmYSHNS3sY3b4z1SZowinmE7p5UAUH9Mtm1L9FpuquBrp3gRtmhbG4BnL",
  "key1": "2RNWUiXF5jq6eyQwmoKF86d6b1VxxCkQHw4Uks1sHnfSC55PTLUkooz556iJ2qbZXWFh53kbp8fC8yS8QTAoSbeL",
  "key2": "35CKy4KxrpCej3A5e3pHsjdtDUZvC128iuGSr7xcYRV6YVhLRCPA5bnvLXNFMpqofjQ8JSWJtRXey9P24DyU5o44",
  "key3": "4PRMUjWSQXCLAoS8DBEYYXhFGnWtr1LHwKpa3jJxPQRtX6wfXGCZ5S3X6B9q1eGSS22AbnNN1iA9ETnY65G3Qzp3",
  "key4": "4vtvtk2QbHMS1wSTBhjDGUnSD2dzWJA2e4d3fZnvQ2W6fnxmKe2HRGq6gYKRsauYr71yjESUJ12RyriSmhB4Lb4D",
  "key5": "4MDNzdTqyt4TFYWY2Ck5qAYEJc5ZkH96eu9oHpsXBiFVBkjEZh1txTjZ3XwY2hWwSHQbP6Ja3whUbTjAFRryGmqD",
  "key6": "5En5nxu8fYRvfRnNrPbbhAsx3RU5NqanGievuSYqx95Ti7GSGDDuaZhoZkL2ZFRbFyxqVDXfBqPz3oHULjt1AfBq",
  "key7": "3xq1rhTPskKVeJpuo5tcteS68WNn2EhMGyrFX5Lywx8HdU6UcWAfDe7Di6eijnQpXDnQM6snhyoYdHjG8EgdCKGM",
  "key8": "qvr4uZm3oc2wadzChVbc1Di3ebpvCSvXncGBFm4ZXRX3MF64a8aKmRLiaTMC74c6e6PhiB7x5AfCcYEMjwt8id4",
  "key9": "3V9bSrXQRYD54Mftr1y1FhN4Po5TDUBD7JhF3E8WCLwUSVH9F6XLTUXomdViSnoARh6DpgBTCYG7w3dQM6n4bNYL",
  "key10": "PRd5owJGaW3aZpdGXGLqndWt4L7nFJMfNu92awMt2PNEVxGacvEpTgLeBMF1dz2EaYgL9iyUxeEW19nNAV4QLun",
  "key11": "3Lnqcg3p7oDcBjpcJmWkLNj577Lg6kxDZzGuJnG3D2ZpV6k8Ldry8vuQNEg62or6okmLoV9eBWE1HxoTRTyzRWw2",
  "key12": "3FZ4At9RJ4cA2S87rWza67YrJZCMbG4qWPC3askftdUEyBxKUbiTqo5jBEiHNvRUuDtFLNpZhB1SzkVDojyziUhX",
  "key13": "4uq3yiL9hHhjk8yp9qERF35ETtYfBkViLCD8nezLgeEtPGjvcx9Dv98eBC5iACdNhkEMu4TtjG6hfjNWo7j5T5Pp",
  "key14": "3YH2nPhwo44qvT6CpHf26nfc1H7iAkmk5BmoNtqavLHwYA1WWiZF5uF1ueT21myfyZtAmLhA9h7vgzNPHKKT9m6n",
  "key15": "5ASTXR7h1faY7RGGAcxFgvLBtUrz6L3ieNt2n2Szy8DvFFYcS227RwGk8JMmxVDrNRgN6XtRjrPMmGf6mVAamnYp",
  "key16": "2UjTECT68Cotg1NmifMqnMrBkEgPW1T363nz3MC8cZksk4R8w7N9cLJWLKnBDzdDA4jkyRqbDDKvAuMr3LdGT5Hs",
  "key17": "2bNrp1DywWgKTV6hbK67bdAvYHKvmvjzoqQJnPaExZqovZG51B324yTCR9YSMnpyDgfdaEKmUtnXb8yCAd8TVqMF",
  "key18": "62fcRjESP8mLV5VgWRSwnXd8E3YK1DicF3ZiZXYS4n1rWmyAdg1MvRCdcNE5TPm6EWKQDLzfRwkWSYUmeHToGT1d",
  "key19": "4u2UtNHC9G82VWZmRgSUZhkRniqVw35jrbeVz2xHV6hBgVHBJyUviW1vLWjVLyqjEdAT7TRVuibjaAwo3gG1xyZf",
  "key20": "3YtNnNX9HimoN6v1iVqBecBrFS3uhJJN8SnZC3KnMiUQNfyCiVLVzGuGLiQvMyv6vyZxmqXesXNi7DQqZxrhNVSY",
  "key21": "2Bzyet2Aao4haRs1yv7SBLdwHt7wKQC5g7cWaPXZZFeVi9SwcEwLqKduinjXCy99J5iptUsg4uvaGAsaGUkoaLrG",
  "key22": "4EubM15tSwn3kcDK1TiGP8hsYKrxssrsXmUeSGJENc5zpah1FHPDHVSzsD7G53KcovCnJL1rabMEmV1yaoscC77A",
  "key23": "CUJ27fDdWUSBDY4mfLuLCvCsrywfqNRmpzFxN9scHYCH2WQAM5MChUp5yDdxtxMeC96wuXz33Tm3kP9tbzpDirx",
  "key24": "XvurDdJfT5tLF9g1JVxJHAFzmGVZGNBFdsr9t6Dvd9ieD5TkoPyKxshSf37CnhJmHJppa3YSK47PdEBkv9G7ehb",
  "key25": "nGgnZYHsPKLS6F8HqPJLV7WPvU7EZ9Hr4jFDBbFGp72go1n1Mzmtw5KRXKA7jsepbMxh2ihKBksXhaospM3ozps",
  "key26": "xB9cGaurUofPC4hR1Lzdo9hVLw3u3KuMRTFmxDEtfZdeABJjbR9oTsTCaziU5Brz2JaEdUC6JcTFTDChDhq5ycd",
  "key27": "5u3p2Ypd9PoCGgDBTJVVXYHU6PfMLaCXgeuVGx1MMT5bLbC28maMiq3dubz3zpB5mvsRK1k5XguC7UFoTwxzLNp8",
  "key28": "5MsNY8GXKAaGvBegpzsRTvBV9DcFwg9wRdEPfh64FUh7nrF4kiyHg5Jt5YkM8nvXWaehRVB8f1yJKbdFhAA8bwzj",
  "key29": "2CG6VAG4qZdeLNX2QcXQgf8sArakYvXqxXuZu9PteDHj6Qhs68WWY7eF2PTNuaWUaQQLSYwBGTh3PTT8aFWttin7",
  "key30": "4k8dev2RPQtjy1WPnQwgMdqktriMpEkCAUv8VTevqvuMEtyi1cy5VYzdRDsHbsV46huXvXPJ2aK65TkT9JcGzGmf",
  "key31": "YnwEktsSm22L6UuRCcTCm9Q3bkXWMNhsV5dK99KqdivFbQ1DtFRd6gkgBVGSBoaibsG2oATwGxFB51ew9MFVz9N",
  "key32": "5bc4kHk1BHk9PJK9zV2WsTPatpRx7ERc18NJDyUNbQjir8VfuQSzrQm13xBNc1HNCYaYBhEdTrtpqQ62WkaxrPy2",
  "key33": "3QXrinYnJaFZQVLe581M4dyhDei4tWjeaPvii63oaLDkTrJQg9wMQTwvSZHLNaoJRmMesiAhofjP8igc8djDs9o1",
  "key34": "2oDDeMK1yyg1pmdk9pPjXtrwe46yFXA7T67qETzW3iCKLJheV7iAT48JiQCCwuJWDpXCpFd7EXtarxtW9tAPPwvY"
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
