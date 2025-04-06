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
    "3U1Dj3uZMxPENC7mMD7vvnWoR7tEWtD2oDK1pG5bkcmRxDRpryon43nWE69Ecw2KKDLBknTbTyhowVy8fmLkn16Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eaqecXUq412y5AEhb2qQLAnSeabmR2egnzeUTxi2NDTyymFqbTXkqbu2X6Tf9BgsH3wMmm7PXCw1bNAnHJCsPh9",
  "key1": "5BCArnY6DWPQXSBAkJYw9SQfLshQeWwbDFfrhA6dwNy6XivwYrkRj3mx7jkcNtGeLbLnCeVvUnvREx5RL8niyjyE",
  "key2": "4d6NXseNycp4L1wXiJCUdSsrDkkMyZp317EW8WJNw5wWNQZxKAX6fh1jtWG4e3GJu7C5rHFoQ6cjYgv9StQPNKP9",
  "key3": "5Hdbco6KodBfSz1STVfU3GNf88m9V2n4rmNpeqPveYQNCsTE7tUcahpwbK8VfP6JUwte7ZwSQqk1mjLUTG8GzQJU",
  "key4": "4rqQfC8ijca9aNewt5xcKcbYXcsSc757oy7bqXXaKuCWTB7dPL5RQsjnj3tp84f9MrSkFYyZsfnLptVY3Yvr7V6c",
  "key5": "2RgP9Hvgk7Fafy3R4w3b3CqM9gMSj6QBGGgH5DGWCTTd33V8mWiDVhLa7PK7AruHuwW7zX3obDxspKkm5NFa2HqF",
  "key6": "6HuDJEaYf978hK7uwpQEwgA4s1WFN8vzDoyCCNDyn9u43cYUKTLyyTRpKgbH64wrMm8awmFp8fEPizKkfC7rrUp",
  "key7": "5JDaLLD8J1KWDg1rcxikKibpyuiYDiYxhHQWYYRi2Gnk574NWn2WEnhdZxtKYPXZBqWMMiLnneMeza8ZNPGtdXV",
  "key8": "3uDErUhT22VDXmZoDTNnhHA4iNQSZKUy9ziW6GrLtffUcWKEtLhZsCGQmydd1i3WH3oNb5w68TYX6bHhFnFmYKds",
  "key9": "2KVN4hkJsA9wh4fsJKMVbZhBXooFUMJiK3S2C3HtsDLCUg38pt27JSjkXmSTJixJ1qRSVv4HLqoV8bMRkA6GiBjb",
  "key10": "HCTSGQRz3G8AkC51XnuCTMZDhZ2qBW9mECpYdiAHB8DuNAo9VqwT36QUt1nR6D5DU4c3bNmFDhNXTHtF3TJ322C",
  "key11": "4PhCLSH1wFUhum44ZGzBAHbARzk8PEbXEYw4qntQQdNeDWci7qfScvNVPQKGxix1hj9rjJGMN9Rs6xD3tECmY1EN",
  "key12": "31PF1vEmopadd5ErqNA5XiXrTWbK5xeQzx1SHG8x2trFfTRJ28qHQksE7P2CdS8VyjkHAcWxRWg6gHhuUqYKbJWC",
  "key13": "4CN3rGcyhBLrzxQTc3Mu1pneTgRYvToa1jpAVyYcNaCq9cdM6MiKqChLGSva5S3KjqEgD6zkGnUiEEX9TYAJaFfe",
  "key14": "4ogVztkprCy6pxcuisozdGxmmQKRRCUmr35ufi8rkhXdiaEysQ2UgBB5ERq4a4X9aGnAC9rrSBiEf92haEsjR7RZ",
  "key15": "2h2rpRFjMFGiFzmCPkbN9xeaAg79cz7GW3Ncf9SKsMqqnfpRhE5TrQfW7bMh8oK7PxmEhoGMecz3v4eLfvmuufJc",
  "key16": "3ZZ2e8KGbNFvC5oWsYZMRmC5YDJpP6khiTxx7JjxxAGtqfJjbnAppcg2MwjMvUGY4d6AXrsBecEWtJsfPoxYGhVZ",
  "key17": "3gefphoSU7rA9LEYa8aKxWq5peUPeWwYoqckQVVFjjNA76h98HRCHozbgkxZwBH1jgaAb8sqBFNog2QzHP8hvoA",
  "key18": "21a3Lp2WJNy35TGq6QgCnMiHWw7dTMns7oiGyLGcv8miT3K8vfwjSpHLgV6GzoceGX8W3JtMTWWUSCJgfoDkqUMi",
  "key19": "5cFRcT9hrFzqR6rvD8SFWrNgnZtTBnYaBuiur6dCnui5Q6P4ab3WfQ89AxMeoUqsuN5oc5wosW4Lferiyz3yovuc",
  "key20": "9T5JRd7NDu8jZfGw9VK1HejQVNBoEiqWNq4xEGHPCoi2jAsf8t3LRKfykaqVPPme72aLd4JKYKdynpieMfzLfMY",
  "key21": "275obwg6yVPv4wdugrPVMfFkDiHgrf5W1MvyHj1Ly7Qyo3iZzboh4YFLiheCbMVAh9fVhnH4MKSUefL4ahrA2TTT",
  "key22": "2bxh3giBRjaTDZ3ttjpan7sKLeByRkTTYL3Lr48Dp8jdcXLXb7jfyHrvEAXwqAqV6J4vdTH1ZwoJbJftobr1A4qd",
  "key23": "5UoNU2wW1WuAcgvrk8TtzGegnZvK4RQ2XPbBrkBqNDS33agGUQvuN5zBKJcbuJF6gSyW4M3L2UtBvXPt926fLx5H",
  "key24": "62e9oN3TzQipPvMwD5qoJfMtdofCzMnkmRKJks9JnEjjneFNgrzum3hjeB7tPWVCDuVN58KR9pTBydP7qcDqUfwR",
  "key25": "hLFKn1FU536226k8NbiuicaUoV6T2rSkpWGYunvmpP8ATBx5d8pYaeskTCLLL9LbLNRtCXbAei8qDYU84WeQMFF",
  "key26": "2sb2WUPkvyiKH8NZKDouuiEKGDPy459pFjJM53EJ7LP6MY9XfBb9mhLTfg7GhRigU5tASr8pgRRSTqYPxhcqvSo",
  "key27": "411gLuNasBMLGgHADVK9vuxesEribcmfW8j5N7Poxm2wBXDrxzcBSHgkkbpCRDiWvLwbg5kcpt2BwZnPtqL9W711",
  "key28": "rcGJXFQ57Ttc7RZnQTbNfPiYAGeWxfBN8aMDs6C6WkTpwWE8yjrSkyMn8WJKV1g9kx6hHTb7gfQUc841bwP5XR4",
  "key29": "3CAtcy6HD34MNwYA2GfV8TmdXdnGKPDEbDmpDZEoo4H5X4SkrNVXki2ndnZDPpai7P4MK6ghFyfw8X11MX7JTAMb",
  "key30": "62fe1w7vsqhFoBq5qPiuCUJoEMCBz8KmhXXpHgTcke9vTziPPZNyJ9oWoAWPGLRvi9anAxQTFcheP1QLCdX7GxFh",
  "key31": "5m9ExUwto5nDxTwwSCeVCMBPb7zM4k6ad9RRx2CP9yMZPTB7Zps8BD4noJdXgi25Stposf66HjUb3tYqs5ztWmcf",
  "key32": "5XUhxPnvn55nsFm44XNdNgNc8zLSgPThiz3yGmtxe9vQrTpge9uSv4KbopMxBYsjPVKt1hRXeCH6FLBZ3PRtok8Q",
  "key33": "ZJSH6VwNegeFZFRAqPqY5Mk26yne1syevaqeUjnxFPdEK9t2Ekse46vvxMENQkiNTxwFUWirpNBvY8tL81MPu8Y",
  "key34": "2nTd6xSxvYYrkJ64huXiB65PTxG64xRxwaY6o9pYWWS6WXs5nwXAkddS6jNW4q8pNeoRscwQD11uQWorpkH1ABLx",
  "key35": "4Nq8YFTNMTGmjWF1KCtAetctP4cffWwWErtJjvC692d5naFJrGTcjdyFWXyXZ3dmPBGUcU2HWUe1h6BYCrvMiAy1",
  "key36": "5hvnR36RWkvTF74VcfswuiJD7n3DkuGyaCPmRo97pL6d5vLcjPG1bPT3D768mJ7shCkqzSsaNqqpw4tNBukSYcQR",
  "key37": "5MKuSiLUoir7yBfN77kikWQ6dwJ996Q1NDXZfYEEtTKQAjysc657iRd7UpavgJjYNMZAAhNwkeAVNVDAP5mqqm2K"
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
