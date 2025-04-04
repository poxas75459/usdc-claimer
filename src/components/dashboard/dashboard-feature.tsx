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
    "3eX8rFuQG7xEzYG2FjoRcMaFUxUUss2ddGzhrW6SxAatCZPSK16Szq976BXCA9ut33zV3QmEfZ4YWT4nX5cXycbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62afZ8DEX4nWiUJV1XDGGQcDDUaTPgfsayHtfug43nKhC4R7ZcDGGLVZKzEeJijNeuzLD7D78ywsJqy9uQWRQgCy",
  "key1": "2CWoJzQ4in9wUUxSRq3R2bvRqcLxUoDGHRNZhpF7PRemiRwvjtGeUvRiPmRBeeLDHH84hnkCx2Udx29SVkWJeXS7",
  "key2": "5YzbktBCsmTXEWozJudiqHuQPw4D8bMjGJeW76drr7uTKic9xRiMMmmUS6kSy1CCgAkSmYfLiKYYxJiEumiojqvG",
  "key3": "4ypKhgAzUEDBoX2mwVwi2d1QUwCNqJacjrsBtEdRJ15nQcACagDpeEQmXakWEHq338Xno8UcbeTQRudRBjdzPdTP",
  "key4": "3hf9khCVSvdgU9f8M8cZ3GSZuDK3DC9SjT1S7rpFqDLUWDSsSDwBNQASpHQhWfMPLz3Coy6vhoUbaZNwLqswouea",
  "key5": "38Nuoa7aXhuBc9j8pndWJvK8VSbvwN4DewKWjVF1myUv9K5Xp258tKcCtufpuMLFVZcxcE7rjBYm1hReTzGg76tf",
  "key6": "65g7BiUFbyoeRc4zq4GdFZUagn6hmMG4jh1SvbzaYKhRze1EmTB6hfe56EdSxhZH2kiS1LFSBVpk94Wq7M48MDgE",
  "key7": "QjUGrCh7hHzNUfbmp581f5SvdxHXR78sLSLxK55UejvDsepSJG7x4g6i9wtc4cct2ydDjZEGtsmmKTP4Kq8p3jh",
  "key8": "62CVCSS9ePGDzT3qChkKjF9adPs5nThcLY3hUaGPM1whg6f1QHw8HLmUyuftUQas2snYVFYCrJ9Psrf3Aabuxh5p",
  "key9": "5UUG5vN1arm19ShTPy7bZXaASZpdmLGMvKGwTECNpeY7e6TMjvxHkjQFB3RJurZpum5gvD1mPpURYmDVrH3arMUu",
  "key10": "4KMrWo3nNDxMGZJCnHqmL1Jxd8iMg61tNiPduwrAAhRCLWxnJovUKsHCdW7CuawXH8vbWtzt4wr8EAFZ8RH6mPMC",
  "key11": "2YvHA4HQQ51uvdGgyoTGyKm2vvyCgwwEyweaNgukcvaTWRhg9reVZgVCA9m3AzUqYqfAP5pdvgboqp2iHw4HEqcH",
  "key12": "2PitM3Bbh53qghvFrrfGtWdEkVX6E8bLvX5Eq3dXuW5hBxPm5nzxeFtvcw4vaGdePdpJHDqgZc4dHthTvJT3fGrB",
  "key13": "VSRp9qkoRBJ6zp87UakvJejkcKdok84dDfDNdbikSFC5xugoTwynTJ8kNzawtSUsJX763SbkyaartG6HPFnD1r5",
  "key14": "2BoJgqkv2oYj1H59oHfBNRkTTSCNx75KLCTU2jahvndAuT1s8xqyaPyNoVWyApox3mfvMBB3HEkz3PUodpikU23a",
  "key15": "ZpCuxeJrBYq7UAHhrX4BzrUb9z78z95Zjn4d6mZED5ih3SxH9pg1C3X1mS9QiHD6B3QcBwoEQqjtL3NSfp7HnTM",
  "key16": "25Zx4cn276VQy5QaAYQJaNtdy3pmbJ5ifGpeTYXH8RE3ixfNoUcUF565kqkwhKhuxUztAmGaBJbXejmxc9Z3H4xY",
  "key17": "5zdYfjShkLWaTM1HZSWNiJ8zcueN89nksuenmUSsQAfxXu3e3BjpcyC4VH5F7VDm2TiEwFwuMgDMdKhY6aYMZi2s",
  "key18": "5yB69AfjpPiELbB2jc9rEtKEP3UT1f8xCZxR8ScsAzWSjNY5EMZghNs8QLoWEzSWeZ4uRUzibNLScbfYvDjEuWbM",
  "key19": "5f9Bfa98q7g4yAufR3Akj7xMtBdnTkqFYvLV6HCHZMu7xJkmHSByGu2LmQ8CHmiLEERvZgZrQEzNFVAeENorGrHN",
  "key20": "2rmoEo91eCRCgAjtJs9rgugGG6cZTu2LioJZcB5TFfz5h2gx35d9fMExUd24w71Qg81uRxr9Ku6qFSmBY9SX4T8n",
  "key21": "3VqypAr9xugZ19MgwzFmkby8jPYkbq4LQRPCZfCgyd7vrksNoPgzq1DGPEw2RdXYfuEd8KS7mHnWAQz2wMnrJwM7",
  "key22": "3hrSJzkjpLHyrofLcv2R7WChshwowovqxAjm3ZR4KJupToCGpNtK9i7Q2CWHXwd2VQbUVWFhm8juNfWPBKLYZHRu",
  "key23": "4UTtULDRR3NFQgFZBD36LwF16ab9EKWDziAnupfUjsXojM7fMaTS89FJ2RzqzAuJTnULhoNvpU2zFHf5wgBsHLW7",
  "key24": "3BvBxN8Pts7KueytAaSuZ2cwn5GDnY4GK2d2LKvgmvFonAtL3R85wpaFJNCW6xHv1DQDTPkr8YpM4ZJAoKcU4gvn",
  "key25": "5rJ8vbhnwDBTK9NPhGSuEunz5PnvLMU1D9dgxbopSY5DZhHshmP9J4ouphHUAGAEuLReN3tm3PUFpHA6wp3nfZJ3",
  "key26": "61WXbNHDD9YEpPKMVhGFLYXGSeEK9DZ2FXGTAwUhMNfoHL92ZSvYetkT1kYDxgbJdXTbjpnqu5HagbydotSPERL7",
  "key27": "q5pdVmVGEpLrka8wqqTMyDdmt8QrpbXSZvFkeb6JNdHdvcJYapA2AfQMCjc5cck9sBbqQQJX4UqkXjJEgYZuHHb",
  "key28": "4v9NTUKu2ARMmKuSbELFo1GZ6kUdPFfiUdjRm2Cg6v6p8CS3mDu5jP2gXMJFdsXpt2jfhmMrbZakCBHeNU6kszE8",
  "key29": "2DpJjCKe448DXPjAjYN9QUceHo7sDysbQ6EfiZu26hRUEPysA6Mx3FCQv5Poq74qd6qV4j26dMPkk9ZFXj8WKqHz",
  "key30": "2KKfjG4VuigAChwBYETvnhiGv8qHHtdmauCBg2DNvZtz4MCqYjUkntZDvJW9RbTm1R6qrqbJE8c4SuMsSFssqWoF",
  "key31": "5TcsJGnsTy9SneEjwciVRXuq1CSk3LPZUWZ9t4dgKT9jrQAK1Li2Mr692o8LojuvDFxU9UCe3QtoBWC2ES6EjhbG",
  "key32": "3Lpv8tLfJDmtQpFWTDFUxTcyQ4Egmr82xSnvtYDKoLWxDbMFjZ7NZGTx2eLwf8mfWWBQzmaPtPJCs8Y4ueYdaZdk",
  "key33": "5x5fymG77pNpRq6VFVe3T9b6ganPGiYcqp7kC1um4R19J8wzL1moeioJYwJYDiteAehmdq8h9mEAws6AfcBjUvhb",
  "key34": "2GyDLWxpki8qkmE51c6YAJJSRKqz9LK6b126HsG9bGVftNJmbXvEbiPRbqmRtN7aBHkST41NnPysvfKKFHjB6sFQ",
  "key35": "3EQPR2NoPPG7M5xHFdG9Su7tytexhvvqyvcnkDKdTzku1Z3PB1fLvroypHUEqTvHPNrEoEBfVEemCd23FL3i5pDZ",
  "key36": "a71XWhvTppjibYewJ5FFzHLZYnEZy6zZy8L93Gex1najMuvQ859oK3bgvQJMBHm7yoyL91djZGnEMPPtLVpfDLK"
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
