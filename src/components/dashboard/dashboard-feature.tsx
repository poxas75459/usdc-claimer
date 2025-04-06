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
    "3iHVSXYMRz9gGuPugvBfKTQ5L1YDkPRD1YAEtN7mRenEehY428CYNP5EF7BEReiwN2JKG9Bd2DHWMf69g2j7WPT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sdx3wkmadB1n4DSLdaKP1sCvtirGhBddURykoKk12awV5AXJduBYC1Qk89jj17jEGZprUU7Ejqpj9mawS3CwrtC",
  "key1": "4fhjeA8Ba3CMFuYyio5uRzpRge4wus1tEkBqMXrxsVJh1kpVfXyzoKjoRoSgoENAgALm17Kcu8Me5tYhpBS53KKR",
  "key2": "3wd2nr2G3JxjQR2dNXBpchifhXdk4TFVDU7xJCWdogbMGkyB2ui5db444EjfHQX8ame1AHZ4jRuQi64A81HvUAJH",
  "key3": "3sGFW141w8tbeCfEwJvvaKUiVuaY2EezgL7uRDut5QdNV14NH3BCnCuLbyET8KiJ8nfyNDwYua8mTA9WXxsPEz8m",
  "key4": "4evaPY9AKdCQiP6jXSYAUj9ej8PWHngkNnYVyJ65uFH5DxL5oyvgBjPcs4357rU2XpDXJDPUsAWzQPeoodKyAKmn",
  "key5": "3z1jKVEjVqUv5hpoFCqq8xubvt8KUPYXohSXobyYLdsSgkQUVUZ2uWoDfVCQxzUABjbngmLxwCyD4D9hyrPtnFbM",
  "key6": "2yyHg5hS9xdxHUWfcXpe91EFM6AEgdhVgskrnJDi8L3h1NQSi3PUp2gDs8Xk4UDJ5QPN1QTK957kEywgmmJBVnT8",
  "key7": "52WtWyG3c6H78gNtFM9zme75oda1KqbTv1dXo6nfFdnUZWeWAK3bxf1PjryaWWKMa9WjV1T3RLMNfzLJ9FJg2dwR",
  "key8": "2atDk9L5P28N7wxysJJJZXy5HZERciK6YQxCVkuK8MUyC8rnzFs4Jvc1QrvPefgZWoXFu9rCifRZuurnu2bPvUNR",
  "key9": "2sNfoE1XDzzqZfwAwo2hVSmbeWFZTiZoXdLhquziWTbfwqWqYe6izGtNsfgLZdiPZFqjxdmy21bempFGW1Xq8aJq",
  "key10": "2Jg5xPymqAdG8rADwDqhxf7fhnxkoRCuYChob6t5CoBWB7Eb6Pn7cqQLwG4PjmWwHVBXpnNTWWk9EsNbLWSRFmw",
  "key11": "2wXe948iNTJDefcjtw7xRC7hMTcoUwxPWcVbx3NagvZwkv29nsaRUiPzXFeTnov8EUEmZL9tdNBPSKEdq7n7AH1q",
  "key12": "5BfUDgVA5byh6CybD3hqKu7agsAXiVqkCHKu6d41ErAGc66FNbf7QgCjTQx7cDfari2ej7EteRKYHa1aX6NaaUNK",
  "key13": "4pZy5K1oxvsazQQ8PGHmnvuoiiviHXVDzDDxM4XXKwUvEd6KZByXG8y7QL67wZ5mzomjvxFoorJQUGu8tAJzRquE",
  "key14": "3yizrxv4kzUSLcJASZGLpiCdLyu79WVD8nth1tZneqzrzd8x1VK7SaSat6g76iv5FsCJmubky7N17RZ7Hri16EN8",
  "key15": "4YARwyp576xMYbrqgTk5ebWZhz4ENwn9vGLNQJwPim91WtW1KD4EmRzvBJy8HUVSSX26mvmvRVxX5xf7ZXueYbzz",
  "key16": "2xUSYjfjLTZhNfFYDFTKbHsAiis2iG8g2BC3VFNyp7PXQTkkpGvWiNwZp4L1HXT6irAoQf2SyM8jgZfJssA3u5UU",
  "key17": "5EYfEjhvUTqCz9htTuPbAjygX7fzBaAxXVPaFV1tSK9WaZ8ih8Wb4VyqTmydQo2NvwSKxDq4RUHMbHxnbtuz6tWm",
  "key18": "56oA3Ptstim6LAAhPXdXe334PH7fA6yehont1TbGnzkiNtbjc9fPTa45iGpB5b9P2n24izbNSE57KvsUdQusgdzh",
  "key19": "62T4qpNvS9XHoRSEhMXk1K8QJH8c6Rb9HSB74Q1973PFfMcTeKFGsR51z89s1zcbb3TNhVV7RKqaxr3Vd15E3VDW",
  "key20": "4DtfsuLeBtVLx7KPCHqdcd3Dmxxr2QJmKi2xo8sieifDxccF4bEkjEKy5vNgjFFrnxc6teZiUrySHcCQuaJ4W7V",
  "key21": "5z25t7EvJtCred7Szu79zVxKgact4N6bmP8bQVvi5UmXge3CFa6XMsh4HZsnF8n3wJACZmtRFhGgLeT4Qn2SDCrL",
  "key22": "DhaX1W7htHPFUNM8PNLU99NyUWFDCqQWp1SzFBpaBa2m5YqDXUPThf1hC899RwGd2iNPMFcoGgR5DThxpZGFNWR",
  "key23": "2p1jbM2EctCrrp7aM9aS1rTAssg5E3q8QK6n6jE1jwaciNfJFL5eurXAzAJC5QdHcLVPmvyNTpghgCPQjmqLyJLy",
  "key24": "4Ki2Gu32GXPBXXaZ6M5rS8fQj4jtrcCHwxsvnNp5yEQKgRbjKHc5wmcKQV4TLmBSERSutuTkTgxkfSuPcm5rhMBG",
  "key25": "rURzLxUh6YPcmUYxDtM94Hqt6YbLsfXmchy2LvRiAMp9w5TggbcqQJK1CfB5Pj9QwB5u1QeDZyVzvSR8tPUeu7A",
  "key26": "2LguQzKhHGfEq2WqjbSSkzEEWczM5wsLgZFtw3bTqwjMnTGt5vLGotFLUp8iRgzPjrrkpDkoN9SMPKQPUtmGwdLs",
  "key27": "8U4EdLQZ2W1V9rQUZ9hLNoU4QTEW3qf5NC91wqNQSJSjjtTBEbNkQkE4sWhopsNYQgyhoA8VM3BixzpJuXaC36Z",
  "key28": "jjv4ZZceuEqnF8MhvSz27KTJ451ZmLahfp8DDqvLD9WJRwdBnMrPznzKNExgkR2RdQFkFTnttk22iMmX8Y1vmW8",
  "key29": "52Nb1rCSk1PbTR5WaohAVCAQyE53RVPPTup4vTXgLZP6tvFnAJYKCQbtdtn4vfSJ1bU6t3yGLGj5SuPoLeqEMSSo",
  "key30": "43E6mfrr3Vx8oZtf7Ytr2JuqRZpPyNeXXP3T7mkPhYht4byvmaTrTKrxUovfYvVcrNman4F2PfUThR33jmaDUMk9",
  "key31": "5mG4TvhGmPdp5RFA2HzkoZ48CLdiSN7jMHSTVoYmT6biV9RAnB3MuvKiRQGQAZyGaLSZBSNCiP4TbqEoVpGRZy2k",
  "key32": "kFuFUHRDQSR4PivbM6yJrykLiVQ8968V4JFJ3a2j3kfUyspoC5XSXYzmWHCJLbU56oF4fQGKYWTspzVMmkpox8C",
  "key33": "54r3U1D2vbvtk7v3pGTfDCxY5aQbkJ9MhawSZhKheyGLMrgJ92oiBy6zsxwuWNo8VvV6t2o6wzr3ppRc9JXCdjev",
  "key34": "4hVTVNi2t2xrf6fACSBK8JdGcsWLSGz2fnR8ZKJL1ey39DZgmrC2UVdtU12yDjRp1C32YxwcNQ3a1chvy7EALpYM",
  "key35": "2v5RU25sCTzxHGU1RnTXQaUxdQ3KdGXLeCVFBtYtyPdw3stugrcNik9kvMzP6Ej7xTLaRLJFCYbT3vBfxnckYMrv",
  "key36": "3u2ciTG2BWfBkhvfx4N3EPYVC4yRtBzAfqQhLDzSmg8kGQCyNB8315Zd1jYKzCCzhuabNHhgSaQEBCc7mdbyzJuk",
  "key37": "2dWpAq9qvgSkyAbb8NJ2ZeG2GT3rz4zJUPEEprz3Bpy8dTxuFGBcmZkpARZPuHmx2yddjVKVX9A8Zou4xvycM8i4",
  "key38": "65xA9WdyTmAQqVYjFGgFjAwQUYKZK222FZSDcP5rqhdR4E1WTqGdJFFv35WWBXJGaS59BtHto6zro9QFALce9nit",
  "key39": "3CD4YSbFcrHsjkZ71BWB5wNB1iaStLBP2Wf6Psia99mzm4akjHw78dsdZcpRhfQeS1Ch1kDXur1h9LvEt4U6Z6j",
  "key40": "2YFiikjYA9ZcnnwSTxPCbcSyXigsUcBcQTpfTiKM5NBo6N22Xk37EaU2kaZNPBPqVPZfP3cHBKSVtp7yQhGxcfWS",
  "key41": "4DS5MS3N7kBXLK8y6cExccrfZb8rJPkm5FMxvm517z5hWC6r9gDmTZbVBjd2i7QgN6ZT6fc54u5VXN7qPVuL4AM8",
  "key42": "jod3tbvUL7D2WWrPVgkT4Cpo9eHCp8PHD5WCHrHL8Deg4Sx4a8KsZnQMBEDT7m9AXx3K1SDxmjgK5UDhcgBxT6d",
  "key43": "48eJrNmwGdVEHMkEy8d6zhZi9X6w9iQqtdVJE9LJkE7Btft9bWSdHoiMHu77SKt7Ve9UdEggSx2q7NqHwVgqLrN2",
  "key44": "3dDQeo4Ep1WrHGAkX7vuqrfN2SJX1GVWeYct5XAFkaHA1Rqqm5UQZyCbWBQ6jPVWaYdDy58hN1rB8hcpfmhJa8z5",
  "key45": "3FpiMxNrCsdgmtWWd8MQKy4QkAaTreiuPtFnbnDm6x97aqssS9sfcdJpd9f8P7C2fYrJRQoc6J3Rv8Drxp37S8Pc",
  "key46": "PWiYpEgBW8DGtHCcrNh684fAAUJ528t1D3o5Zdqs42KywNVsTkegmPmVrKXtZ3v382JQcojKdhMqxJB1PeKsJGw",
  "key47": "42vpb5ey68qWCW7e4QefCpRjV5bMSM7nHrYyZGarveJ3Rvc24saadpfWnCbDY2kLbAsRByBD3GSb2RtCv7BRWZKY",
  "key48": "2MJTNUj5cxiyq3JmJWey41iK1QapMZECjJqs3VkEuXmFZ5ZkZtKgNbs8cHwkxonfufCPcK5t8QNVsa8ByyE1Hwq",
  "key49": "5r1Lx7NcMdzyB8BJXkeWRKzYVM77m11w5q65HH7ovEdNpj6pZiUeye7LRp76SXdVC4RW27qT9qogx96KZmqtnYBL"
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
