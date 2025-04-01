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
    "2JDCNZbTnJni5XLbphKZtR8R12b4y3KyoxAxZoMkWiYKcsuPV1NceWFNtHeiuKXKz2MfWXpDGCx7u2vVucKy7ZaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L1ocG7WY7Axqa3Gh3BsuWHq89mx46z3vBfwNfXXFXW8ftscpj9d5FajTb2RQxycmFrzLpDcT1kMAh1JmSWR3PSs",
  "key1": "3NiPymk8Q6drcHzcF8WSnrVRMAV8hfNrJt539LMnpz2oqj7mKk7s1sEDMrS7tJQgoyazbtviBDi3aG8c6WH6Xrvs",
  "key2": "2Vq3q2ABfwrpqLprJkBDKiFajvh4kSuLqMkgjgc9DjvAEX3hD8C2SJMsR6n5dEh1YTpd8Md49Z8UukHfLZakJXu3",
  "key3": "5xn5E59nHm3b9pEB6W4qgKK3kUD4FFRK4Ty9hgJUAZgZ2vBGrxTrq5vrdeUrsCWvUMPhv99TKed6jDNRnxydTtQF",
  "key4": "3XRyktctKVZpcPMx6oHqtekRaemUDnpt6TCE66qCypj93zce6ActFK1mgwNCgmKxnefFC399hfMfEkBZwUT1YCia",
  "key5": "2ZJyJ2WFBMqv1U2eTqkEZtsYUkwyLRXZBqanY9pW6FEdNjkBTiv5w6WypnVRYZSPks9ezQA9biGRdLDmKMPG1qgD",
  "key6": "2qPNSMNJMr4cKYs2rjWAkUZiP4pWKBn6EyERLV7w61DECw4XEbgLwHER4QBz3ZVkFA31P6b54HJfZNMmJN4D1tsw",
  "key7": "pv3ZvtaLk4PAvobD45b8kDq9Zuy5SXHn8wKuhExpwsUS3HAeGxanM98PE76G2Eo2qGsAUqPoacdgot78LjfomTZ",
  "key8": "583Mc9CLZ6UTVGzbyFiWmyCVyrAHeeWUeWfVBF1r2cS7Mf8u737kJcoA1GzT2Rf43cKs5PJxcf5mGSQvamsPqPxh",
  "key9": "3jnJgNKhTX8TDTGMxfo2tS3PeqfhzsfkRiWo8JbwBMncZdwApj1Ar5DJatLdW2ma1N6amn1Bk6pxGxGCz8nF7zcU",
  "key10": "5yFCmAGsb4FnkjEm712yn8RoyLForWmzLicv7YEDb567G9gG5Wf2iy63mFrqS9cYevei6P2JohvJQ1BDLn7NwsET",
  "key11": "5bRuGggsDjUX8AtV11iMxxNYB8EyyiCSetDS9MnnJQWxSEnRNsxgUHgdhddxuc1SaeDYusurHNzXKvEiXuDnuBJc",
  "key12": "2iXcekrV2sSN5Fj4d5Kc71gBB1ASTHoguyaATsTTyQDEFcgBk7KBvSC2QLDQnJ2qFtC6LguPqz2GfDWN4aJS933p",
  "key13": "owqtfLWfo7zaDYpwNnNLpMMGxtw8awPyXa9zH3CupQpMbszRRisLSKuJbzXL73hdQrkaL5MoadHkcPhRdH9qdm1",
  "key14": "5L62GBGm1X37SeecdGf6wpBPDyC5s9F6VebeUkS8xkHhqci5iZ4kEiSPTvXEUNBVYVosrY2L9ivdxNPDGzSErXEf",
  "key15": "5pYvmeWvuTwe3xTgbW234EBFV2rWucFjEpe2ZPQDdB76XeGxAAEnU56fB5e7BQ7qXCdjE53X8dj4YQc7wBMb3hEd",
  "key16": "5NWaQu96EWeayFbADR1zFCweZai9wYcbGGFssqJ3FEqGGiZYuzna5xS9TfDmMYEMPVTbk7DfpsAgfAKqG4gFtn49",
  "key17": "zB7uBGEPxvEAArrAuR24HbSNAo9phbjhaDTQYipDRaR3xAySfqQNAQeh6jvqARQhSbU6mwxEd1UtYJ1T9W7T53X",
  "key18": "4zRzCbK5iszGS4DQVH12Gu5UBATtHDT6NDKMJrz7kEwWFGQvxM4W1vsYEi4kpqUyA9qyYnE4iK8RYfVyq9WmLvmt",
  "key19": "ZNa47yin1Bnegc16K7tXvK1rGdaW1JSMe93YXPYB1nCHySNtyKeoFcbZnqZnMLFF53qyDyaWarC4YKfYhZqqMNh",
  "key20": "cc4YbTrNT8ygNYXSDuiXr5kDCouuM8MKczva5ppENv9j5VKYBtERhavzwdQtKdXz48zioTsrbsgw7yd6MtzBtBS",
  "key21": "3QNhCvcUaUxN36zMEAwXRGeYSRTAmekYv7Q5nTzJFwrf3WPrZLzKavq7jFrSwUtdyp5AXiCoZn7ag9SFxoujEV44",
  "key22": "3QHzVUvf3QJD8mx5abhWNbtDo9hArYxScwzKn5CddZx27QHGW3gfoJVRB34MBzQNUvc7aEQkYoG9vpkzxSK2v4sv",
  "key23": "3iGX3JHqqUQtqjb86dFULQ7nBvZuAsLD85K9ADhJPYYi5Tp4WaCoJCNc1RMNKem1DrWHmJUpeSRbMY3gFoQWakWq",
  "key24": "3McDBraMFWpiugKqBxxV8yUN138mYYgB2EFVHrCHtCftmuMktc2fyfPgkfH4ZsFjGTYPX4AySX3HjogXAKiMD3ht",
  "key25": "3MHmSVxKSNeGAQowZHtRv2VpNuD537LBVtuyWd9tdDd4RErC6NRqSSfLmUrRCX25vnjCs6Jiz5GVU3jHXC4iyPLU",
  "key26": "4NGNLwi64qaWoChCyGswH5hXpQr3Swxh6PMa5wk5NHx17fLsdULR2DrZyBJpaX8hf8PqYzC1WyUJ7THfrNzUsr8r",
  "key27": "5afEwXqVWSon1wm9DmSyp3WyeCbz31T15vDoDfT3dY61iY9zKk8u9naCGLVvP5FwJytqjmoqRg1Mva79YSw8YMEe",
  "key28": "nduWh9bvGThN8s4QeZw7PfPCYnT1HxD7dEw4tafCnMs8gNkEXxtE38cBw399mF4mHwMMXAk3CkwGFA6q8zVZd8x",
  "key29": "2eV8kPAJcYUwiv4xKpYENjNQ56Ztf5a5rQ3sBnCGShuAPmEujAjPYqyJAKDcCxXq1ey12aW4KUvT8UhoSZN51ECw",
  "key30": "41tu35fbUkdodHW67aHQwrK4mH69K82C5mxKgq8pSvkcoteZ1EBfme1FMbn1XWHnMChhSxXjWAihsvAajGrUu5Sa",
  "key31": "2z95PiR49xH9rDnWQLKCtGwXTVk4TDgUH5Q9woGf5NcJcqohGzco9GMWGBCxbxauYRCT2R6E9xHjjYShL8C6yUYe"
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
