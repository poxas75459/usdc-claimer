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
    "RMRTSRsbtjwJPFqiBzhDS3JA496sM9Sn1pGhJRRzVQmV8FHRfrYbU1EWjSaqJFXtpCCbdcLRg7Jm55N8dZuNDHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfBW5Le41KuHGRTHjAHpabMxNFYZtXHctAk6aDGCxMmKPJ2bBa99Aqf67xRSesQoVFFsxTBwjzruAJvPMP3uy5s",
  "key1": "3VDkDeAEufMswt4GJyp4L8pZror6qPqsHXSfhf7SdipHUokcUf72vnyje2TVuVPvDmACxLg93eukgztoWPnwemes",
  "key2": "23vXqL6hn8SKSs8vyeZoEngrXQx8U477d1ShsNkGE9XMtBz33iqX2zdVy72aSGo6sB6yK4yh4CjzCxxFehMtuzmh",
  "key3": "FiT2nRtSNy95Nj9T8YkmN2bY8D7jXmjjhtpDRPuj3Q3ieSnvPcJsnvpXKXJWKeXGUyQEaSHb2iC4vr41zc29x6x",
  "key4": "nbWZvJgoer4FWCn4Tw7QWpaTZKiptYPy6dHwgKv6gp9WMFDV3FnM59XuVfCmPQkdXbQw1Yyf6xfwLs7Ek1s7znN",
  "key5": "3HqY4oXxX2Wm9pgEKRNDxZs3AmD4vzTU4j3d4NCWGeKdSqfDngXvTbFJjjCmoA2vp3zjZ4ehrvS6jYKoaWc7LnPs",
  "key6": "28ZSJ6rQs2r2nDgL7odtyrwjpVE2BSdeD4DgZNBnZohrhj2sZeYnSKWgMbTpdxsRnry7b9Ujn76uCbuajobrxH4a",
  "key7": "66dH4vmi2TfPudgnk25CFEGS18ogh4CRESNDfqMi59yDMhmizXrtVthzvuFASXcvi7ZnpDZkZbhpyjW58wGWSjhg",
  "key8": "5jjyP1mUwz2eA4C18kQofijibCjYNikQrU7sPSCASGjBk4zjtg1LACidDaQJhwPM2NWYsGijNt9fejC8QV6pxGDV",
  "key9": "28srvt4YsEta46HH4twi1oKrwUAirJmHmA8VsxZDnTzP8NaaRjAkHR219SSCy4zxnNbXLvbvnFbFfcBE4YhXGS47",
  "key10": "3edV2WnUfjyhyPq8CSWURsZ1xMJrdTLjgXBsJXebJgRdbXFCbQnX6mkvpXbgzqYkDqiAXaLw6nBRndbGVUXbnnKJ",
  "key11": "5MuwD4PQzvPWhVswCRn8xmbQqXYKFSsHnY1NmQrGi5VQmiPm7mRzeaW5pW6VSevKeXNiLCm9LfNnPJeRGbLguTpL",
  "key12": "33WcXpra1rTRp4EcRAQEN48xQkiDiHd1UBjRvnJTyuETVcJRu1usiV7UFWQbZEuqmnwyQb6Xn9iymb1x5aWQWeRN",
  "key13": "2ZftxkwdnZzpHDWSrDhKu8ebRUVRmS9Jj8yo3y3MJusaYD9aWVGAYqzWRCKeHaDTN18GV8s3qPVvxpxcy6N3Dmtn",
  "key14": "4CxzQfKRaErPpjFJ8rkPLuRiWVcxgVEExBvbD79WipDFxRGexjbSDSN9Aw88bG7kBVjigY3RKghWbx1Hw9goKLVq",
  "key15": "5MrQWRRqpHs6bi1nL9hQadPCydr4BCywHRNGRDdbj6xJh7YfQ4aWyJduvKYycuBW6c6aUiWUuRZ3xLEpRz8q4szT",
  "key16": "wCJ7LFkMs9WVZUrRtYWri9dJuz5R6dpWa12hUx5zpUvc7V2ZAw7qK2SwcECTFMgMXyWmcvBfAbiYL6GWhL1Pv4v",
  "key17": "3WT6dMPr6kgaoVeMrKiZLgHVbCWBFEWiHM9kTJSy5ykKbqFDvm8c9ipq4Fjcr9CPXwEQUXJ5BVd5CdXJxX9SrjFz",
  "key18": "5tz3HqVUXvy8hKARKcK1DvfGcTuXHyNbFVqA8UFsNi1a4UBcNJnB4kKxkPRWWTebsbrdVXiZzL5nqqFjJgRypvk1",
  "key19": "3QJCFHabVaSEiGNeBqhw4pBAy86CJhJPNoJxXvqs8jMfVFFNj1ZykJNDvYWGx9Yg5YeyukK83qDHaWFeMjVBBDkk",
  "key20": "WeS8TSTX1yyuu96eQMPqRj77U7AAcfrDrimHvys26i9vZuiQMbjL2VGyDF3KNf83rf4eXZQam7NrCRwyiyjSZhu",
  "key21": "5D6N4TMXEdipYzABagii1sroHttdLimwGCrFJnP7irxNw4UaXm1VnN3Ldh5EUpBnj7B1GnJJ8o4twm4jnkZBymmN",
  "key22": "88q9gy4QCr127JmyorisWNmALwxNgeJLMHjNicsDR7KDKLaEisavqdvmQiS3aLuXL4JnfhD8j9tZQJNvP4Txwf9",
  "key23": "wCFNEA7ZCnNzfDUnnDWVR7Va6RQDLPdG6EF3XtpbcGSP7Ef4ckibNEFKDpNQ6oGReGhheFMp1Rb6W4B3xb4BuiG",
  "key24": "2FxzPMPcEny9udtEbdw1ZwSue9seBNGf291PuJA7kvJBezjAhaCuAbEtGKKwQHAbp3uSMSFCjXfgvGuAuKNGriMG",
  "key25": "2NvauYh6htfdQwSvNGreRRjsFnBHiQnsLHC3p9BLpdrQPZQZpBra2dwNehFmpcnrwHTGWvAj6JqMZDRAR3WWyvej",
  "key26": "5WfTu3yJnLqWNjo1E4dQcC2iMHEKoLmUtnDi6QVtrEZAXoDJ6QK75jbRUgCAh58bHJYLnqjy8MgEdQD2R8VwVYDW",
  "key27": "tSbc9qaY3Yox873UGqJNumwdcMDp328tE51LJ96nh8Dh3F9Xau612sucNuawAMckQBD4r2oDhicrA7nvBBgAsUZ",
  "key28": "5Yzu7mHpp1KN4VYXMrpJim1zKDgAJzrg6bURnLTfKk7xVeKJ6Mkc6EX1ZsAPCnQ35pjmpLSeHZRjxVHdQ1vgnRvH",
  "key29": "2LCC2ot77S8XyAZgNBg5Fzwprod5xfWXZkrtyE5zxkq9sFEPdCmTz357bLoSq2cT69PF7JyqF6M2W2zTTTjca5RM",
  "key30": "4sD21DLUzi13ddWqtRE5RuhTq4Md9BUYiEJ9r3mMMqNbXA8mDozNFNt7n9cYzbhzrAVRHhFVEMxdDjRUtYwDcLYQ",
  "key31": "4Yxdzno54MVJ2jE584QjMkB64T2SD5qEGDCSkNcPsjaiDKQ2hbaGtufcKwdXpBgHFLPrAnz4LDeLtMKtsqDfTynN",
  "key32": "31uJtsd9zbccgRJRty7gpQ4rfY2xKBdQ5bh9NLMXLTBHfn9bzy5HLCJ8PWjoPkStVBUqjB94UuiT3Tr83A6TmomZ",
  "key33": "4p56wSuQLJxvMAraRcXDL6chY27bnkKRR2oVxWjFNrucNtZS1RXh6eJtV2jLE1UVy2RHR9ANMm6npGQikDrLQ9jP",
  "key34": "2NKkgF4uG8Q8K9mCpvcW5cFrJeWe4RBETc8jvGikM1s56nBYBRDdepeAuuBDvD7UuzrcFPY5HcHaaTwsuX8DcixJ",
  "key35": "3tKRz1xV6dbJitVvUxQ2mh1Drqu4ubScAgvjoGWtA2n1kTqGYMQzHYb26cVJuqfoAJxpdptT3qAZnaj2d3pGcDt6",
  "key36": "5KdKi9wKetWzf2kuRwota4BSK7Bd3QjXybJKzkzFTurSwQUENaFAroCJ7qYXrMcHDSwTPoL6f9dFh2t4GDcKYSXf",
  "key37": "3Q45TeXh1XXyR9BxftosjnwjUSuBS955ECCcQHqxzPJb9kPcSWPUB6xkGzAeYfKSJJgVaYoCdJW3U1Y22B7ZsXFL",
  "key38": "66xEhMWQQ88Ghf4USLhAst5xjRbshecRhviXQSvYM1gkvU1ohPKK9WXKSvs6ctBpRgxrpteC4yzHps3ZehkRVHNS",
  "key39": "2epCqiTwAzc9o947DXmYUqwPgeE9C1HvBN7guJQ8CVgSqKP1p417463BxYoU2svuVCwxeL46jHFiPnAFJ9zjPPFG",
  "key40": "5LF4vzP4PY3tackQtqXYkubusKhEjxqzReimPdu1dRUpygXKHUFMUT8uwNUFG54nYsEtm6fSDc9ybyLY7b8RyctC",
  "key41": "3UP5BpyKgszaiGVCmFg8RsuG2dEWbHahg8S9h5XoN9Ksaz1ABRLrcAw23SESd3QRMFVJEXzqY2ZG76fjXCa4ppHo",
  "key42": "mungz5piNsNa5oV2eHtBzDrN6PtmvwZEnf6dKeUmYPvSNNj8MQuwHjVVQgBgpDVB13QyzyYs87nV9XRRv4bJusc",
  "key43": "4R571UxsCFcuk5bSVTq15KUC3tXPgRtwF8EBoPztCmpuk33LFoD4bisfHgtc3stRTs5UK6wwxpwTdFDJzz2juxzv",
  "key44": "3J8n5irz3eVDAm3eATSey93HhaNgZBsSeJcWZWv11m7TRgN3onEzN3vZA8SWrPST8MAoeEbLyiLKVKYMNg54958u",
  "key45": "3pkJrHZtZxyaNoKG9caUYdVg1tjcrGphA4KFTss98KNFjWaU3HXkHhaGMABa38q8HG16rZfEStDpPzjfYJPBrfcN"
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
