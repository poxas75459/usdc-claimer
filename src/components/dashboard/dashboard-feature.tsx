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
    "3gAzKuMWwbJiMFNxTDdnfZfcFUmKhDrYWRR4gK6TZvQqmvpdD6t5r93z29YvSbdeZSfWWpAmTPfFHVQiF5RFgwXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKD2FzjQf1iLwYFb5Rn6LxHXQDnZDJK6SWJBSiDb7oZ4VdNSBGDwc3k4upGWXsuWjy182UBEbYYyxWcCXbqW83w",
  "key1": "5mifkhfCUHEW71nWNngbCTw9TV2WQ9optpT7cB6PQHwZisWng8wd3R47FXaRhtRGqSETmx2cZhkyKzqk3E2u6igm",
  "key2": "4SWgfxtvF7P8W8RNeTZVMktEhghHVxtb61qbtLxSgMvf7TW1LBHn3YbDzSbzgeyeqdcR17jdhr8PrdsrYNJSTkzG",
  "key3": "RZR3KczwWuL5R21YA3fsHy3dRADWAGsHzRMVACYAtLp4kGGEXCmCpZgEwxV2RFwsn7E1eGCuEk21MA6b4zVFxsH",
  "key4": "35VgJs7Noe9soctqKuDWY7JxzJzeMzRsffWTkkP9HDBKcaLHN38UTetZ1excS93KhmXNPJHrByCGDa1f62hzACm9",
  "key5": "4XN6em59XU4MUECHwE3sYV8bKgjJLz9io1ayoLF9ac9ggWZFYEpcqdsT94fi9mLmSGsgFGGsgTHUV17pW7ovLtKh",
  "key6": "41AtqnmeoMvUz3fyJH5kLd4H7NZ9mYR1SSqaPY8nCzEGbuTJUqtSQ4C5bFBiBU5ZbkHUiGx868AvzY5zxowXkAPj",
  "key7": "tmGa3Tcf1vJNesBi4Zpg84hXVXPMCLdnCWpHzV4qdGMcABVSesHrbhz76EgMJYnYqBFjny4bAadNwtUJk8mHdMR",
  "key8": "2uQKgxwFFxNJsWsEn5iXUxXwfQodJrp7iNJ7wLNmwVJb79pzPpEAB9m9DxRu5n5AvgvFFi1sFZjknMoKNSKnPvgs",
  "key9": "4z31CWH1yCi4YtekaXFW25YFoHrhSBU7PtwzYsHJg1uHGyxUwiUEHZtFTJpNkip8iFqWCNsWecF8C4LADJCax8kC",
  "key10": "2ft9jkgWYyenqqXAQS3WbGfmi8fYrjjx2L5iP8uHCLwx389s28GPfnvudiJws4gQaoi81XCiREyWrW3xZynVCFsg",
  "key11": "24kRyCABxvBk2X66ML7oH5X9EUqiyMKJxkiRJGczd2o6GNLg1fcNeEzJnFHYbXix1x2gTYHEMm6pWnZHqGRb2FDk",
  "key12": "5PfGkfNvfkr4xR73FYpfMjKjwAQezeDvbUjgyEEy72xd213KGk61YzxsqqtsTRFQVM6wMCBaa43C6pecnixHTGJN",
  "key13": "43R6w6pWc67DbLQXSwUbYn1adEet6cvGrCGKcsFkr79RsyDYVRfHjEyvMRARWx3B1tmPZuDMV1apYwAnNY56DEQZ",
  "key14": "3CWuoQ9SEY1v8L8BxxyQxqnEm6w3TSJaiZfTuM4LuEhHXfysAkmmtVE5NmXMS7gi8tUEmnenDKPqtXiNkXXBx23v",
  "key15": "3U6gdoJ9EwzbCztybPmyvtZ7wbkcknhzT3dQJQR6e2e3j4oXBzZEJLzD89V84VW9Le3Q16kZ3EW7WhgqqTaHSKmi",
  "key16": "2gERQxZuNHKEZEuTHrGrms8DjV31WQ9XSwN9spM8QYbE2jLW3SPc42j4NPnGbbEAQ6YQGC1DBMbqHGUy4xUCqFpk",
  "key17": "9CfgtpTvRYVJz4Qz6PZKwMFtcDiJQXos6gDjVmt6kyRvxbySQKM2EjXNgTAS91z7Qxi6zmENfVBzgA5VpwDZhrr",
  "key18": "2Jf1YPbeTU5Jh1Rcvi57kAkccXVJr9qDyipBJXVYTxDhoZCxhYmmAW7ShBf9V9jfoF2yArfz7uJtMP2nhARQGgjf",
  "key19": "45diSe3NY1UF9iVMgn7TFZooNCwMLVZQUuKuuRxJXssBjsQfaVmSodLiGAn1gxZobMoXH1UjGsXT5HucTBvaiGQi",
  "key20": "37ERm3x1xBtU5D7Ks8rVmeWuKxFokF7bBEU41dbaRQCFbLkFfG5MtLWzF79rjYKkXCmx35dT4AjfKbCNt9mBrPw6",
  "key21": "34UoYwqnUcnPhDMZuatvgHkYCDMsfgLtkqGCS1NPgAW7iFrQg7SwvieDFvPwPfFNP9GK8yrT3N2EPYn9M1dF8FhH",
  "key22": "2JRqtxoH15f5R9ohuFPaLAEQ1Aau4FZbecWTWtRhSSkgRVHzXh5o3oP3mfpkjEa4FSKbvY2gYPsEjkthyUgsxH1x",
  "key23": "1271TZk5Egd67vBDVGqonUw6wDW4ScPDmyKdCufHcuHUSzX6eSGV6xj5NUccvsNA1w2PU2jDvMDfu4XvJK35pcTE",
  "key24": "2HLce1ggfDbgB6vLZQRAm1bGVHixVZjr4x7SjNRokucEs3E9VHJvKmLcXJWBB6KLJRJATag9MAXXN1xwayrBaBj9",
  "key25": "3BUiPwRK6Y4jpHkW4CNBfuA6Xy7ZdgKmbxxaEvM5HssmXUBKsii5JFeGY2xvcfphfLFTtzkwi6PqLeobn1CdE4eC",
  "key26": "2GfHtTWoB2ie1KLErVk5qxLneofgZwwkegHFmYWxEs8Ej3jya48dRR2hS265aqpvqswkkRo9muJkYZcp5qGoYvVi",
  "key27": "2nSPp5Qg4d9Pbf1PDohtA6Epti7xPtgW8vLdBTdrZvfN54xDvm821hzi1k9am29K7ymgsjAcSnEDbdsYnHziSJS5",
  "key28": "2eRcVFquzYJZGxcUrW7CAHY7ynomez1syHuuYCCMUJ1u4Ki5QmgLv91Zng2XtkxbPDi4tzph3eRMZLdXfT6DdkCK",
  "key29": "2JwrPscGymBR2i5Gw48gLnH9qux8igB4cM6qotXiMBYN97LZ1vxxZE3CkN4uyCbnuYS459npoBq7hr7V2VJxAwbr",
  "key30": "3ExL4E9a1TwG9nYPEsNEW6p7n34NiFEoz6vSd4LoKPhuVrtZjMpY475LJ7EkZPDZptoq9jx2fJRhy1shAs2Jt4mN",
  "key31": "5Smssyicet4QvXhoVLM6hxkiJi5PCMDVZjCh1ZwFqn2VwC48V7DwK9Qd6jAhv4cCd3sgRmio8DokHXV29aTJRgep",
  "key32": "nawqqx2VfdmRTcPsYm7E5DfymjPGHgw59kVFRwMVRWqHEez8tHgGpLCudHbZBBar8JGYCjBMJat1As1AAdoLhES",
  "key33": "3yj9XPdMkxFaHNU7ntrrPdRcwRAaVS1AypseXWwG6cnBPUNRuquBww8wp1ZMzR7jYQFhsLyXSxDdHmhDDAfett3c",
  "key34": "3ve5ToK1MQJBrVZV6Ex9vjN4C3eSCmpDRvWvho6zXm2Lku4Ej2KTvX6VcDHt6habBUscS2Ph5gpnhcciqQPKeW4i",
  "key35": "3heraivMVFLMeTx3roFfLDP8bFTwmDNmXBcc4KiWkhdiSNzFGV6gmpggEzEou7sm2det9EnT1ZtMJDctBeJ6Patu",
  "key36": "38LJWJcv28umUEmWfKNQMnmYVZLXMvoZ9zqhg7CusJPS81h1rbP3PyF6xUzk1UgLhPzWSSyapdsNDntEL3mtjfUn",
  "key37": "5Um5t4NcFzxoE3mezSZqTymxJNrnMD5WBxD92bpmuEg2myxhqKLFqERLheav5FQruEU6zdf1QJcAWK4rgwo2nXSx"
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
