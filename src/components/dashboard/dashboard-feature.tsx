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
    "59LE1e2jLyLELx7nXHgwzM3j2XsdE6tcyVjPsSztMefqtiBb9gKzDb32AfCVRPpUtf4HHrpnaVawrziyrX4sdFQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FR8ndqyayftB8RjKxFCmgbwCBnq6RKHWPb263f8oSzak6A89Uybdi4WE2EL7KYv2YoRKYcpRcbJEvgfib7mAzc8",
  "key1": "2YrvpgLkArJxDNjosW72TsrHDo9PgUEPXwAfA8LGeMVHavFQDUQRcy4u23A1chStEBr56dzVvrMGHSi4u47FxDS5",
  "key2": "2zMruWvQuj5SGwa9KVMWR5tJ9APQh48Ljd4PCbwDvJbBLLs9ZkkBZE7nQD6M2YQhx4beYub9DfwNHUKGgGwNDHvc",
  "key3": "omRX5JDV8CboBZYyckxHE8zGVUCdA7FCrQv7G2RbXRM2m2noPQFHcrEsrcehkAH4ABfgyrALVTWH1j2J4MszdyL",
  "key4": "5oD6GiCK3dbsoiNLg86YwnGAZH9J9eLheXGDybDLxR5LjhZwkrPV3Tm7KwVWtHrTTf6enfJBs3wG8uB2BwFMghyB",
  "key5": "3Pv3M9dCjaxzJwXgRPeppCm92uYHfeNGoFdoPMZNTefB5TojGThMpQTCC787UKcwLFM8Z12EQL35nSYm6AJpWND9",
  "key6": "5MVexE1tZAHGg54qAZDzCD3vSqRqmqeFJSSgZRN5Kxzzh9jN5Htg92GzAYxtn94iAW92woeoTFGmMqGzZ7rPpSDH",
  "key7": "5x9Ktht273xmLxBbYD3pt3juPSooGFrHJk9gH1BCjpxoCHeRb7XsDFLfbSR6x2UsBLbJU939j3YzBj4uYpYRG7Z4",
  "key8": "3sa91NtqzFe2ibjYVq88ekkdNKikpz4pq6uriThXsBAwXwSrVEcMn6DMrtmWLCXPrtVdbFANLWeKNp4x8vaBzna5",
  "key9": "4D562mYkhPgAgdYAnZ9QGzVm6asKvgv2c6nBaq6qsnF23grQfTqpHsYWzBVek5AUzfU446ZpfbEzjGnDduSf78rP",
  "key10": "3KG9ir93AxamZd61FRvkHofkk1ArTyt4U8us7ABRTWVsjQYJcSuj7RrJVy87row816mKFSD8MRdQDFa1J29tRq1Q",
  "key11": "5miJZFWSaeDzz4ZAuY1a4nsdW8pgrCykh8gP8C3e7cJGzWQmBsYbm3gbAbD6mqQHiRKB4u2rF14smwUhRMWUoXax",
  "key12": "3c9hiogTjGKMtdVpgfESio2axS3DWHWR5gEc1QvnAnVLELmmLrdGvsQgcwbvUbrJACUia7ao9EeexUFzjTY5yB7z",
  "key13": "t1QGb4gaBYxaU5GgmM2o43yJv7prpeM8KeT3nAaZut4k21Fhqw7wj57ZJrquZufXBPjR7JEGqCc8ZwKNxxJNWGH",
  "key14": "2V37Cajw4JZph1Nkk2sU66eK9hmEjwpwdfYZLHJqEJfBCRW6PV4dEq45tPGTqvNWG2KW4SRZgRrxcbmmdxmXVFAu",
  "key15": "X9fnRqV47TTkDprC3yTFG6DDXhvRgEKrQpJECGNjsfjTRmHzc1jRKcvZUwrd8WM7abTQMRznA8TMdENfpFhmihG",
  "key16": "2QKJsPeLTu3b2TLBTx62qSC5Uvp3Zd3xaaeBw3cU8YcsSqKtnmgLtrF13u9gkKyecUdxV7z4M9sqt6xT2eaiVkFp",
  "key17": "Yg61Hj7mJwmnMx3MwbopuvwgE36KvUe68r8U5gZqMnSM5BnpUYdBVM5CXrHq2F8tqnW4NA2yj2szNAkxGGvzsWe",
  "key18": "pKJei5f9aC3xAPDCwPyv4YFbhrqobNbf3jFj6h3mS1ZhFmiQMSTcU8iEtwLdJpnCyQ92NLMTFFrV3g7m8DqQMed",
  "key19": "siw44DavaynBiypDw4UjkiVhJ79Eiv2VDRPSahaXyniQz1mWMouyr65qEyxECfiqW9cybL44yfvnt64RszZ82VX",
  "key20": "rBpuyyFjtoMkmiLMsj2dNdLZ842eR2zmj8v2etqc5VnvQwFW4qNQKXvNgXXZfp1uzRzJA3w8i48t3BV3YRYoNtT",
  "key21": "4jraEPrB7oMsg79mL975GT12mcAR3pyiZfBqAQp51uieQxreqobFasPdfAg18u7G4tpVTQRBP1T9q1YS8dWXYt5F",
  "key22": "UQu2AhfxmWaYbqYwhqTVKzeX3PC5ZAkxMsPHuHtQfBWneUjpVgqgwCqtLpjA4gyuwpaLC2SGqvYi3aETjdscXoD",
  "key23": "3WLog3JbBxXFXGdxpMe6sk13JUk82ZNwJNu9ghoXMgvFk1zVRg7LLH3EFojfAfbzUU9dpGRESfzLfvQeCg116fdY",
  "key24": "4aW4TRT8Dd3GtvR9Nm7ybr9FPsPaeFcjVLuaN9Fe6Y9YpTc4NjzorQaRkieMsCQiSK4zcdHhtgMNzZbdiFQf4Zsc",
  "key25": "5y8kfd585wcwqBqNxRGjFFMZWHLsyqqrfPgpRVZ6RQJoPbb2sFvqLG9rgg24rvg8WWi7oKfYyX1E3JwWT3s1NMis",
  "key26": "4FGdfSoBDBivmrcPcZZexqjttTK1pYCuSmnUyLwf1aUu7zqHE13Y38idLW3HHMpDUnn7aG96kfVDsdd5r6fD1h78",
  "key27": "2GeasCjdhS3EFJCTrcxbogT7FinNtM4Fma9CTfrbjKoy4rdHh5RrQpZ2Ek7TDuDF1b6AKAkzvH5JYwvLTYDsNyy4",
  "key28": "48oiVqKbUYmGamBrH3EgxA651XWapi6tFWB3fj3TtiYd8SS4khnCXx1jH1Up4zqGrvH6shgp7g9q9XYSRd24Npbx",
  "key29": "4cpZQ3NGXP1q3Q4eEgsFm2nNMqBmbFpv13A9FLxxHRSEv1vneptiUiqRKvaefTxV2dbWqM8rtQ2j5npyZnX7grYJ",
  "key30": "3fjP3vWKbKEZrm3h8pXi6x3WCzgQQXHe3rCQR7BTu63pzN8Z2d5mVkaeGqUVHDgPSLLAZ4ptRcAenVJHeJoirokA",
  "key31": "3GiE6gux3sd2VMemxWjUVeckHDovP79XRjQk6v8MMvqdJKUz9M1HixD1BZueQs96mGa1wyay9EoxXHbR31eLTfEd",
  "key32": "2EcDCmujK8Hj3XG1EqH3XCqcCbqNFSKctSKrK1xUFkb8RpTnbfFknTb7nBzEZp82DDoQ5m6uqbxp4xgN7anXwPt3",
  "key33": "4uJaAm3bUsQ95wJVLeZPuxEnhRK1nhX2YGX9XmFjgVBPdmV9WSV8cYjtuVJGGkD7GxcfJiYy7Gh9LqWxZcGhsbU7",
  "key34": "xMcyYzVvgmSCTE2ZxL5cpg8ZKfcmrBRGdiXFsyvzRYr13qmdheVEXb7jevWB4fiMZhFRbHo5WAo3Y7LgDNxFQTW",
  "key35": "2m52z5chWtwUs3qzvPw27a8gFirzeRGM59kArNA5ih8Jp5UBUN3CFcgdChvLLcchyBsK7RUiSnVGLMVreQzB4Qo2",
  "key36": "29DfRpkm85AXTDePDBu1Mmb6c5imyBJbxgWN7Ab25WRCrMCseGzoDaExjEer1Qo1kn2S7k4SJGD17a5cnF4adpvC",
  "key37": "2q1DPapMTa97PsBjsavzWGHbxpJmV6FTbaSWkmKePPq9BayrjMs2CFJXHwVo2aPPjKiqCcefy2iHQtxuK8RfsSdG",
  "key38": "5SW4iEJoX41web34846UuYy1kLhDVf7ZhDqAn73nPJaDJXWZwop47HVsNoWqcQv6W6XVCnWDjm1RHAjvNpdZcGVt"
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
