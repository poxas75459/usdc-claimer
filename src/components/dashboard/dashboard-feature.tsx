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
    "5ecBcyByTiLegfZJSigNbHx9T8igGti2oULawjXqzDS1FQjJP1ugtPmMpdFQp1DBf6QkjGcE1reCiryrDW8wCSsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Mxu1HrLE1KVHFC5MU6aLrFh9Dr8kgSRZp9w9hqpPn2YhJH9YwaxfFwN7nM5gyecH2EFanpHdVNMaBb3oZRY8Uc",
  "key1": "5KmaPZDiSwMJn6BcAPS76o9AEgt59zr3k2jiXhjqFWqe4bDSP8nWAMDT7YZoGq4g8N5MCY7Usfodqp7qFesMPpc2",
  "key2": "2f2P2CYFKPgNbRX19rzApgna2HoYR1qmumPx817Ge5TAjRt7Sd7wjdYsmDaFGQ3xrL1qYW3YhRx4Snr4GCxWFvcj",
  "key3": "5Dccg4SakoEgneZsTyTW16Wkqh3Boq11b6cWECvnspFAjWuQtGuRwGxke4WtnH4n9TXBJRtw4of2eEBseUtkqsMX",
  "key4": "5yu6y9PPwWTmAykFtfn5M95PJE5TskQVkdYdTj92vX1QSLU4TKG82bf3X6jYpmNpb4V7vdsEqBXA8ShEUT2sb87n",
  "key5": "R6yq8RvbVDfi2Pg87LYRtgFUqCeQcQvxd5pguvfLU6EY3RWKnUa6tnRYr5bEScwBN67rVeSgRGwxU6Uyn845owg",
  "key6": "2sG5GyGB4i6rmUxaLYEMGvj1oRZ3iKppLKkY4vHWQYP7LWCkkGXKrrjejxsCdjNZvEkgVdHJRxrZ29SfT2sNmueb",
  "key7": "Ar79ataiBNQ8VGm7Vpywn5aykWjs85f2aNrzLwmYGzQnN8CABQUrQ1hUxkYfM67CW4RbfQMWepJu9PwVedtEAav",
  "key8": "2b3UfmmnA5LkCcWWAPBXWt8h4R8VjKRD7dzKZe57qMaD5qoPp1tHsu1pshJq9a458Jczd4dptJBujGXeCk256LR8",
  "key9": "3Q1ZkhQKYRZHZh9QSywhNCc9jh2tEvNZh6tSBQZ3eE9TeZvWvL5LfV67BP7tzLedwCAkPGsyUAy4ieZByss3EsFR",
  "key10": "FtW4oTA68uAMg2CKvBkJxn2N5BCBkvdusbN8cmbfubpBuxjUZCDRADSNokE6CYeCYQzVncyxKoWpaaSdKSZ4AQe",
  "key11": "5MdngXU2ouXck9HDQXgGX1EmZv8UyCBik1t9haKECR7yMETwFC1GQnzyW8WSHiXHYeb1rMKap8XydjsYPgzHymZ8",
  "key12": "qYUNXzDL6sQgToFir29TjPKn3Hx9ejPaVZpCMv57CqJJxPEYmdj7n4CFzbmYqQPacs6PPmtKGLYTCccj9SZGfHP",
  "key13": "45XYdxYqx9xoXAXRNxcpagcUtBsUtMvY2k2PrTc4kbKVZz4sk7E387484kKZiVPuNHQzTQV3apbTYVjeQFHQSLH8",
  "key14": "4ZVcMjnr37edVqd2UXi9cZoLZWAmKu2nECpAMvLMEyscgAgdbcMAsHy2sW515ByM9GZAmrTKLcxkZM9SbUyBbr1L",
  "key15": "4AxEWn97MK4V1K82dYNEsawyQfREmvPx2Y3trDSNDT5LXenSWGGNW4JXMr8agJW5AaEn21HG6NLFurwBSinfdSD7",
  "key16": "4MpwtXM494s1hFD3MHyvJxtGvn5vEbHsBLVdpccwG6BDToPBbufmueB3SyxBqj27iZbdyMuHrr1SJeramHnzVbQX",
  "key17": "QvLQrxhzWGWokVrhbELMf2x9iXAN8FNhgNg2wnWkHvZuJFypjQw83uiPfnKwkGuPartsoG9sKyUkA4zHdBMV4zi",
  "key18": "3pua1yF5CvAX7eru6BA2FQoKFjpsvig5dGStJWhZMd5L2mWByN8reM6xmdVAGksV8yyuVMxf96sah8waiMsm2oSi",
  "key19": "58PUivfJmTHcF6zjvCaHWigTP7pebQsEK9jvVsbaYwTaV5hFkAiDsW9TyxdRV2DKsbYmfq7mj6sRGTEE6Ljuip5R",
  "key20": "2ystVTi42SveyQfU2rUDeARoN92UTcHYjkaoQV2MywrtYhjd56SBvoUKrftWgEy3EzWPfCnN4pWXuutBtf9BX56P",
  "key21": "61ic3bauZWANk1YTm1d2GXwtmt4EsQhkvPC5LyiziM4szb94XV8LQxnioBwUFDwFTtJ4AKVfQdpuCAVVJBFvypAS",
  "key22": "2G4dsqS1pWoZUMx3dEXEnUKUpVpj8AVvBMKYbgYmiK4tXRGkJixKaf5LRMEpfiXYW4xy4UDRfQZ6eMqsHHtUeS2Y",
  "key23": "5tNCN7isRsqPGfwY3zDr8ukdYgZRkHJAzmntdSHjB6K8KpFX7D5pYdPA7fh45kqUSe7rkqaaF2Nyyf7L7nF5QaKM",
  "key24": "U6epGXk2toK65Wnewq3k9hxiywSEergTeWsgoQ29rfc9LPyWNAjtd276G1tRCU5D27HsaGTzdwZfcXYVKNb8q3w",
  "key25": "42STaGqjttowdaqsiFEbt5hvMh1JP35sBZWQrdoGSDs8a4UgviuJgszq2iTki4wUQkDJSGcP1ZYshE8y7CnbiLd5",
  "key26": "5jVqaPq36B3oXx3eUZ4DYFB2ck7r5oEatZT2WEqLR4C8JRqnkTZ3u9iQ5RvWfeGLs9umTeT1WruySKeJUjimmL1r",
  "key27": "2KnNwxJFgo8igNPYDEpBikEV6YvbLPrnqNgPeZgYyFFE7xZHb6baySRpdanBzDJbbFfUsiNV6nxhttwwPaK2vRJP",
  "key28": "k4y5oNm5wDsMsW1qK52UuKkhVkcuB2pRxg4ZeSDKaTRaYAaJS1F1KPUT4oAxFvi911WnkvzWxjuvmNoRDpoA8Fu",
  "key29": "5Czb2Tuo4ASP7MTbZACG3oDa1dhcggAYYiki9zK1puWmsMipHd7zTypQoGpfKpGcqaoKgc1VCPVU8QCtbdncyaru",
  "key30": "2Dm442bZWfwnrLTgKshZafQc1YZkmNZ5WH7ChwyCJFd2Sy2UacfFVKJcaQogjpx8pqtvHrrJsEG5jSFYViu4AMFR",
  "key31": "2Nm7s19dkYCrn5K1AGmUiRqJmSsAXzXFHcRL9HZXEGCyTazQb31efSqhs1UVhwfWG9FMiSKiNchV8Z4YvVyonkA4",
  "key32": "5DHNpMjbcB76Qi9ys64FiaTXJyXD9U7LubTYwf7XUia3AFEgv8ECt5tEawQyeAhXPTPaUwD4ZXnv3GmNCR5r1WuB",
  "key33": "4yuMwHVbMqQXfSLVorYiiYeNKNpf8ua2uoWixX8RGPAqXmdkSNb9kg3mp2DS1Cj2J9FJSEcRhHKj3tVXeLH6eECc",
  "key34": "2HiAdfcRZVUAX6fXadf1cgS3nbe26GUvMpJ6zx1LcUsW96HYjaXRodFk5EYzsaefTurK7Fao7RFffQbidPg9XwD7"
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
