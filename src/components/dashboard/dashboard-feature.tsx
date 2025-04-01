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
    "3U7GLCbmp7oNheRHPGZkqyrrLjQbGkYcdZ8EcUTV6Zn5YKiiVhMbeXTNNKphvjZeafBGGY4ecNEBihejKiVDC9PR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hngisKREg968GFiEeLwT3h8ozFmmkEiejEsoAdkVNsDZbrkKrLBCoYtC9UvhrMht4xW8Z1MyoE6EWcg1hJb9V8W",
  "key1": "5Kh7marrWD6fdohagHGxMmr5atAdwNMU6Sc5XsrVtXKpJnq2eoXfj238ZAuCAb8xGKpHL9z7Meq9eoFmLvPL2nhb",
  "key2": "ACrKxacuehQy75z3CNL9gXRfZ3qWVVzMDL1LDqMyRcvK6JzZU4aArJAEkxKPRpTq2CaRzKbem29LMojTnGtsCWC",
  "key3": "QXqXQSok772chg2iTa1bwifp2ETCdvVxaM12UX29b9feiU1J9Gv45Vis8GG8s7guQT4hs2b3tb9HxM3LEfre7g9",
  "key4": "5LCFrkaT3JGE4HWJbdQky7ausNfqZdJxGfCLH6M4a6N2skMEmuysmFHJ6XwW7qAWY8J4k5kLeKfT9tKSJiYRU1bv",
  "key5": "2SYqK7JWDqQ9rmHdZ19xdoiVXf1ZrevuPMEegdBdixnuKbT2UdrbRKb4v8goUeVWeofyfGZipApBt9VE6mHMY5hs",
  "key6": "5wHjH2wiXyHkUymV51x5nA6NZXTtv5mZjaVbcP6pCuYgyuBv2haf3WvfWL3jRcsKct6A96kdYb8H5YxDs9cchkkj",
  "key7": "5rZeS2LNvyCYBpdWE6pZUarmzdcmZKhja9g3XPFGCLFKbB84DNsT1kCJodnJ95WLnNVbp5ffEYGQbkdU6H8YBU4o",
  "key8": "2MmynQoHFVuECnm4uRCm59Y16yjuKGVjF7nQYS7LskKkqUPzN1RTVxR5yLwCSQEZpocWi75dCVao2nKD3zAPNuke",
  "key9": "2gzwGFdbduUcmYUrnLJiS8HmrgMMdiX53Va3jjrG887Xq9Dp1M2LV2Pqga4GdL3UhzR5RMsnfTmcXbfACcwLQ276",
  "key10": "61wHS96U2SdSJzf4sXQSppNDM3gY5a8zDsEL1e5t6nQMuXsqTjtQzyg4MNLEJmLfqLvbNbdVu2AudaF7qFUEt2Rh",
  "key11": "2hMYpUYM4L5FRXg7ujpey8M43P7TzAm4VpmpcrkXVUdBJnoFdniFjLw5UjisWuvHWBfSp1MoqgsfHxPSPJ6gispK",
  "key12": "Lrv66tuHmG2Zx14fPTwE2qvL1TXbaH68LmUbqyM1xeASQSdsdgmWnE5ZTbL6aoxJgHkrXh85Kx2MBQvt7Z9j5Jg",
  "key13": "4H74tXcBBeaheMwTKv15wAeduicKuuLVq9oqPGKqy3cQEpKF8JNBULhrBb2p6uC9V29aPsmMD7hJg2MLVRqP2Cex",
  "key14": "3Q6prsUDghHBqK76tMuSqgJnPaBNnEd2TKeyYh1CWQF2hV7Yozn81FmcW6PbWbu4MZRTHmcRSzUSQbomDWLFT3C5",
  "key15": "2DYgng4U6oecr4Wt1fEtHoueamyaGcJRJTSKjZe4pBYywi25FVQs5iyqBZSpVfXo61Ui7qy69YDddogZAQZ4BwYG",
  "key16": "4W53VJuyVwv7bdtv9L2EHgUa2UjkWezkS3W7p6mwuaTwFiiytesfamgwKyPqs6BADh4v7QfZm6SUsMniED8icukq",
  "key17": "2WAo8kZAHdEVJQwadytHC6fFnDB52HFbgBsiY7LzeG3MmJeNpTz3LTH2af2iNVGbRMdss4tRAseH2MUvSXsgscv7",
  "key18": "5SHJreM294C1DxX9qfqLixsb4UBQa93dL94jv1pPz74NZnGxq17tpTU52eAWdQ7q6zYtXBBdMG4CcvgQLi7fEupY",
  "key19": "5CSPtLeNWyfDE1yzPWMR5RyyfNuEiHmPtV3r8GNxVtXCdJvDGBHuFFbTo7aEjF9HRTnuqQM7Qx8PEwftX5zuiCkY",
  "key20": "m3YbkSZaWYthicvG7Cp5oE8sDsS2BTP2MN9WKiuDKLoHQiuY1pT6tpwV5qAgErnv6iTeffDS6NA5AfWeSdq5cMJ",
  "key21": "5adyVdxNkPo9c9hXGNxJvWyi2Xd2Spy8XUegtF9tP8zxjASJb3uvmQUkxejXFJo8W1AGxhj8DSUhJWZcL8hPSp4i",
  "key22": "2bSyww4zTyQpHGxYVrPUKrQgWgLhXeDyiwHi85rET7bFZqStNf2hNEYtcYn6UrUJj4EJwMXQKWHFGx3QG97Hf2M5",
  "key23": "2D8oo4PqwWbEdNqGLf3MmwY9APkMfTcXZjgX887XzPxpczZ17FRAtpHeypTtBhMx2ZtizJrnswz5hjap8B9E8Aei",
  "key24": "paJrVHxPpuVADXKt5xeXTPdsder6ZH3jcjZRotpxbD2odTx6vohCKWWuC6A2MuRkuW5MPMwzfs6ZZ2JdmDtGwkd",
  "key25": "2QkCJMrCQVDJh1JCrvSojjWrq3cjTB2dRNjqTBohUpadcYQkNa8PSPD1B8NVk66zh7B33LJYyFznftmJkSSQSUYU",
  "key26": "4DBvCYyhM3zTQTdhDebCRy7LCLneuftc7arg24D3EucXH7LzhbLfGKe1vqXscijicnkD7zqnEg52qxwUhdJfW6Nv",
  "key27": "57oKbg4WzdBenrkheASDjThm3qQ5EgMg71m6ZZcCxwQpTRV6wNBNPNH7iyj1bDSpdFVX3a17sW8TiWzoD7AQR9Wn",
  "key28": "CnCJ1nibPJCy2wzPnixU8WGkjcoVh8agUU71CiAVw2tYnkgvEdRzW19bMLXwGTdRZieKcTmYmNTAzBv3FUkjE4L",
  "key29": "5mXgYAwhEJtTrGAYav88WKubJvFzZcyqgihrNEieRKa2MwnTDzQYTNx6uSttXsDuvVviyTEwy9cT8xut1Rrhytgg",
  "key30": "25MhXyt17uEpt53dcGDzk7AJPqPRiFPrN5zeF4X1d3VyyMN5QJeVf3BdiJmieTXwyM9JsAp972GZx1eiBnpaeh4F",
  "key31": "3JkxBRfQBHAesmqMm6PCFZeqieS5gtoqZCNc4bjm3KaaT7YL2Z6SA7nZBuRjqrWU265BYnkrnNS5dQrog23zAnhb",
  "key32": "2gRsndD7P6fV7Lcia1UFXHn1puwQopuJNxuzGowWZMXnCUHwJ9RHcoLXiL8qvWU2CUfqU9wpdU6FzocujsCQkWA4"
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
