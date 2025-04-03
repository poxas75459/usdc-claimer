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
    "2nfChRk1Hgv4u3EtzhDRWjyBLN8nxQiiKKJ7jaCVuAh2bUYUvJLs4FNJy6BaiaiYvs4HkNQ1oyyzYz5voLnS42Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Be7mBzbG1PzZEbKwtbh25inpphoNzRBMqDeg2ThdxtcU1fopCckc5v8T2sDrp8adesSfXdL66urtMbaN3tmEKq",
  "key1": "5YhH6BNJMUTz7H9kKq5fSxXy4KrGyXKEjNBcBRLDcaBdJp4yAEr7Wjbd21D76ccJnQ1GDn3XAwwWYdGLQ6p3x3NA",
  "key2": "3kvaVdryoShN6c61pXp6rhVA4DvKZGxFj1tLMMPKS5LjQxCSeBcNKeUa9x8hj1ccm9HAKQSMkcGPfsftY1k9P7Vh",
  "key3": "4mcmURDwfZ3jjuDkzBnLXaQm3q5LYwGh2jRGC2V3XU2WAoy3e4qygMoQU7gib6jBxt57TgmtHyBU4xhve6Bvu1pN",
  "key4": "GxsrGCcVdQF7Phzw6uLxbXdX6uYspHhngEtamiAH7XEpyTW4y78qJc3hedtHFWBM7mFJTMGGYhPAPKuJutvkt1v",
  "key5": "2of7ZcbUwGGTuLZHwc2sBx2zZEDt2dZwr95dih1tJZFP6q2XATdL5sJnx5S7XdqsutmqeX2acDsaMe9eF9bGwZzW",
  "key6": "5APmb24nkyi2vQDt8FBYLLs7JMttd4uoxqZTNFECYct4rTiJ78LiHRBc7a7DyqejmD5AVbB21TX2sCf5FeL6ib3g",
  "key7": "3wnc3PU69AcB1P12iSjjPhTAjudBjQcvtxf3G2CVyz6qhVZLQiyjSYdHCz3mJ35ufXyVKfLUTBr6qyL1aymvimv1",
  "key8": "3rVToTmw6fSTcP9hnrTjPGLC9waHCDsGxNK8J48ByvAigoFSh982tYhMAQZxngz3b3pTaPLydFEmzArxUDDv83si",
  "key9": "462jEFgDWKx7z97z8CeRGkLW5VvqMAS7LCVhefB9f8mBVh8vjscqTqwP2Scf6L5MguucsDa2mkNk6PKpwnHfLAZJ",
  "key10": "5fsnzRkGkyTynB1DpLeVN49KwPZqiBczxadQaMdmCvTV6xo7eq6BcXwtcZVrYLqfKRgZ4NRTAp1oHmLYWnRjVCsB",
  "key11": "ynoh7jGXZ3L38mC4WpJgB4t6Xf9wXzDUSt2ERw75TWUmmS3rj5pYWMdw5yJyCVH81NPwAAjF2VS7stKkZyCBHLt",
  "key12": "477RgEVSXv5hXEe8W6nA2BqFK3CAGceD4cBAiKCNPh4EHBwPErtQYCqXsVPVjJ9YmwV6mffvCkT43n6oasxGEg7j",
  "key13": "2XZcRqFNtoJ45Cvc8oqx8TRyzjT9tjBf5LtnQcj6m7Xu8qXJKdTTEijDypzUjQMxWWtCeg8zd3ZrfMkGXjLRTo34",
  "key14": "32iyMfCGhFiUS88mpUwgGSWf9fkEUt38NCgT6AhszW69opEuGsR8rhYdBeqyYmKQap12KbsuSYbrjSPVbMUQXyRq",
  "key15": "sKQTe6UXiYR3mUrb8ttWicZ3JLSyhHmaaBsZcmjYMv9CrmkLmx9njFRCjDsZMxbNJGykMHDcTJUjTRYzA2piai9",
  "key16": "3FUErcHNJ1894Xcy6DaKNs7BpyKEZhbgsirtvyjtzRG79oqTZ3XradAbkMhAGRUkcfkA2F3rmNyX77GgVSX6DSGe",
  "key17": "3dDMbNWz2EK7zf6HfRW6sv6iKe8D1e5qNpJWQSsmD1Cy8V7L53XPv2oDgJiS2VaGbBy3sknnkJzznBDycijwx7D6",
  "key18": "mKYeJdBgXRQ9DNS48x9YQWd52RLdvHPqooLGpCYSg2RzHLB57UxFghgshySJ4wFTkJFqfqr1paqc4Vfjg5otFAf",
  "key19": "5HDoyhJiD62XKgqu2HTMJvyraTwsJsuagmTdWuxECXuHsw1tWqM2eFG7nvkXv9TyZxxSz19U3xiTbZAy4QxsFBvU",
  "key20": "Ytw7HqxBBFVkTxFDuStLhWgUVLrd8cf42pRQiDGF4C7yHoZcChqHjcYZJYjGFKNFZQe3Yyp3M5pu4DxcSEg6qYp",
  "key21": "4cjru6oY7qSuLQWcqQMi4yXrzfapbbibxP9sJX4qMz1SKDvnyMJ9JztywVsPFjezd1kXSWFL2u7GerPbY99ax13F",
  "key22": "Eh9ApRQpYWWAfMDdyeoGdawwybQqN5MWQaWcJSKKJoot1qmu8tuLRzMXvT6v2vKELFv97uygUUZdF8K8kN1tUVV",
  "key23": "2q8RSsQ42DWCSSR9aWdDr2vNeFg67W3F5L3rrWQAbVPLkuEgqu1j9DM1U8M1DbB6V9GVer9ede2n9CPP9qZsUeV7",
  "key24": "zrJDgF9ay14fVpyQFoZkfqQrkGeBgPzBNwf7tKDDZ9TB1K1K28DrCacuoynpaUHxKBrm9ufMSRiPxMkd4jBDJpw",
  "key25": "f8MPsjvsFgg8NfnPpLdofyuKTEVsjkSiuz3vMWzcrQqYZ1pSkuhtA3QVvg91Mxu5JreM1QJmWSYVeeey7zv8sqc",
  "key26": "3BXeNS3oXWmwwHqc55UyibNz7YR8ThBtp9BNy7H289vN7UfoHpdmnKAu4nPD1LFLwXEShchUpDecTuwEKqYGzrc8",
  "key27": "3fTkj3hTkuzk5sZ2ZW7xD9yymADo134QAc8XdMugSoFwVwQkGYk7PHecmuQEjzLVnkATSdfvtT6HDGTHnEwsUa7R",
  "key28": "4Rr6eQ6J9wX89ai8F6qp3QEErLLk26VUokro7FWnZ4umWdEDDB9NPJqoG7E6M7x1JHEisz5NnySWFCX9ChA1sT8G",
  "key29": "3Lkz23dgbFU6efTojLHjQTjbogwiGrUm84YqVJqfM51Zhygt7KGXr8CpSG2G2hBXt12yuJtLMEVZ7Ajcgy8wKeFV",
  "key30": "3P2tzePGDy2bjY2vhrBK7NEERcHtQtvxGgkas6o695NzoAHMEwhJXHrJBtAN6KXYnupQu7Ebh3Ms1DUD1aHPC141",
  "key31": "2ptgUVK78uTBBJ2Sx8zbsvnkY9BqpaXvV3AELj51HWLNWS7ZF9c4WpbtSQY6EDXbkq1YkUNrKRZ9dM3FkzyPmwYR",
  "key32": "5QP8KmAAzWRVzWvnb4rZ7xTsJu64XxSsn9y6VNT5bn47xC2XzhwJduBLQXwrYiKDuCYM1ST5ZBrMbAAPbcbwJNqT",
  "key33": "4oX7vzAqejxk1dBBrtNJVqfpyR4cBFXidUB74goJ8ZPFihKM74apotPrNdAFoqBCUusiCL4cg1yW4VJ2T7GP3Epf",
  "key34": "Ke3VqWUbBi7MsqHecc7rXgApQ8rd1DDFQ8nCGpTyz6zPL6VCNyFs1eSysqcGWtzcc8cuy1CidHdFnMTvsoYpPEN",
  "key35": "4qGN9XXNz5UwYjaXiZDH5N4ivXxm9MfXHb4tDPMtsvaywossZVqbvhAy6xiNrKhTmPgUruh6Rrt6ypiYRfsQTbJa",
  "key36": "4uka57c17mjZ8nPSWDXL2KEafVYdsfyHG7A3R4mb34tVKBaBF7uSqyFiVAU6uYva3F7eZFwgCVsrDxACjjyvhvNi",
  "key37": "45YeJxF1zzJyM1HiZrqdbUnn88VZNgkY3ZpkAHtMnGGn5y9F4TLZ2Sndq8oZd5uWrkwMvzFUJhTeUnoUQ6MQ3J4d"
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
