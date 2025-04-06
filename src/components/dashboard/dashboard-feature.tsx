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
    "2Zp7SG4ztrHo9Em5dVMhRYSh2suhQLjrPZUQVVMGbBkr4h1gQpkaDtSsEp9mywHWYKWYvSDJ8GdRfouUutqfXVtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PzR4crEt8KMzx6aADJ11Va9A8KYdNaB5o2P6dhjM9BcvChc8QqMTDyS9W5X3iUm85Bpse7XGfrBQtnGcy9hSRK2",
  "key1": "n8ey4GPmTqdurU8Yea59NmiDJ6mQ8E23xUkoBTjLcBQAPJErQVNeaWeHDCZ4Vzp7A73RrLrnBpJvKbbWcLQLPQL",
  "key2": "edmiXLkLVvnkekhBK8DdXHqYwhp1pf9vb9ZusE2fqcZiwvfy6hXC1n9ubwjGjTCnFCCEwatticJ9GSS1VUbJsSh",
  "key3": "2RcrVwG56yH4h66r5EBJjyUZz4pZ8f43kn6wo3AS3JyiCznK9z3AoQFNwZRCEQK9qxSwbJs1oZpjsp23kFWoiC5h",
  "key4": "36aCpyFGhd9kQw8rKiczDoAA2jHgt2dL6iKR6a7b1RENFsDoT2jJW1JaNN8FUKDU3guVt3ptoAU9oM7ExF8V2e3n",
  "key5": "2PEjWSJcE8EdPaHNsEKcvDLgxa6Jx6jCMXuzuDxU1T3nUPArbMeHMMhQxHz5FnFwTRzG6RuLYnWxVsjxVmhreQmA",
  "key6": "LQfQwSeuHLrGJ349RgLmAvKRPdfcjJo9EFTMw9c7fW4AxUuzcNVpicHCdPyRRh3W738PZq6y8rZDw6qjELU3Jn2",
  "key7": "2qyqEYk73gvcnk2EXwp9zvVEXN1Hr9ZwDbLhW9jAPmLXeVp4fGN4ZPkZseoYPmwSHqJCax5UxR7Hjg8a4aXkVrTD",
  "key8": "xrY3EZn4w38fcJFpEKm1As6387SbzzKjWrs8mPDCzDWAVp8XPAPmX87PjW5HMLDntwUxmf6mTkxwsAUgte5JF4Z",
  "key9": "5tT1sinq12eKcda2HL5UYbfnkVvhW24EiA8KCv9a38jWrbtrYQX75pw3gAB4QDUmH1RGh44Af6LT3exZDDL15BHM",
  "key10": "2bDbADtcE64PdiKoMS2uzCVh6eVeYLBaei2PrSmwnBMAkJ1yA9CByEMSydXbeQYUSXxrLfBuDAeQ6dEKpJu27akV",
  "key11": "2rfW5mnJEhZoaffoX9bG2yJC5ocRBgYibtATLMwqnPDrsY1iLpfcGdwF3RiZv4AG3nGtgJGMq2HLLsipN85BBmXe",
  "key12": "31pxPxs1146FJDWqP5mt8FsN8AwVbzTwWR88YwxU3F7UUZWKBfjNi9KWxpU5MhprKCdDEhif7LsincssBn6a6kXZ",
  "key13": "2hHZcxq5wdQnUKzTATxBGDK18NU6XnGeUSuQU1tptbcqENXzRayURbs8XjBhNRbxB9F6uKDc9oo9azYsqxgEZQip",
  "key14": "2EBUZUgba1EgzEiiUcD7z1wB4b7Cpm2jLFJpAHeZb8V6TE2VPCQopGAHmFaJe3nwqSCKyiyCTxWpn6SfQZQoqY9B",
  "key15": "4u45rWzbsQK678MnvDSmMHc1R2ahn7AWBgf1DQRHLKp3z5pAxC47vCsiDc9jyL54MDUbehrvCqcGcfc1K5xRHkz",
  "key16": "3fVFE1GjVLHhCpJwqyZQ5fvZ7X52vZXc6uWmDg3m5wNQEbC5nHE41sTfjQsaZaFNxJUxvSGAisKhuJ5v8JjFcj3a",
  "key17": "4BuReVBnTyBCBEHSgoFdsnpeYYYFfRp6h1EJ2Zww29XL2sm4EGEyjKmsyaQ97p34kUx1sjrXQLgXoR5Lww1ozfdM",
  "key18": "5YbPHByREhLeiRUYZvWGg7Bro1KWm4kcCJAnKFDhK2Pj6HR6S6jik5EisoMLhmgboxZJg11JiFAjpuW3gjhe8ed8",
  "key19": "4tkH9zxvZthGqjRcHEfoMyrD73eLLb6igM2bGcv6Prvo3sVSHk3aoPZiR1gRbN6xfAdwU1r9P253Cak2RBTLdpZ7",
  "key20": "5dp6ULE1bPt2ptFDhoGYBfzUiarbaXXfadi15s7AxxNhUrMa6KFGBaQ1jMtEFCNZpfoKaETQ3EJxZBhLydRc2xgc",
  "key21": "4mvQTthL9H3qJTQN1JPv4rtZ29QwMRvwnYj9LRoTfcZreyaXjh24QarexnS93ZEoywh6YC1ZY3b2QX1tt4hpkLWk",
  "key22": "3hkzaRNjwQ4wF2F6B2o3rC18r918dWPJKg5jQcmXRxHWQBWzGJ532WvuzFDCTsssWumSaZmjCVvHGGSfNf9Z84mP",
  "key23": "4MMKwAZYuY5JL7YR4cr1gtZLa6MDyoPShvUUkroJvAuzUaWbdQGHiMMrtSBtcRKU3bu7jwFP3K7uT4LEeXFvosdJ",
  "key24": "zqgzAJSi3kzmNevfiyQYQGb4NLrzLvUAwbbJ5PF9JyB9jgK7RJs9JSzS7Xp2yXwy6NsjJQdkPaKiQgDqU3tDnV1",
  "key25": "2hHZnqpUtWd25umUFU82sMV1BpCcMBusmzX4Rc6SUQB466ssFoqKnDVXvPFcyubi9LHT4wDT33L9TGFW7n41QDk6",
  "key26": "3phTMe1QFiMW7RbJdJoXetUjx3r99UhGXkcnHzWuCD9tGuJeG9UEoaqU4bc3ci17q8pQNfKvCFG1Kz3zWFagXvhG",
  "key27": "5FbVrzEEpBC86Q7n73qvbHvEYPETTXmKirAgf6qpRYk9GgbVCpJt1Aotbm5YCtmX1DmZ7TP6WK2tmQS4iJAmMQpU",
  "key28": "2aHvFD8vQZ79sVS2okYVro44NHzhReZoAhAs4g2iyrbhuShhjmtZ3ix2pNShjNEDyL5TJMq6SXsaHj7LPuBEF2PB",
  "key29": "MJAH3xU772MPGJDiPE7kP2B5UbWTwEK7oBTLrCYeGhe6fvGGVHR3LsjQZrmBhMw63EXLHy6ncWJzJwEskwPvdHR",
  "key30": "3fKFfE4xccCxnV4Jc5ucULrveo17VhrjQtceFeHk9KzQqL1FGpSyytPqjH9XDaC5PzfVMNYRUJYyZqzmsX7atwqr",
  "key31": "4BVxCPjRoCRBn3PFvE7K5VmSZAxj2EvMakySEfvoPUNtxmbLFXGHtCZyqVxFJj4hqyeXYixEcQ89jbDALbhxSs2b",
  "key32": "2359rWzEUXZPkbJ7UUa1tA1BUFMbi2aBGa495GgN2CqWNJQ3qR9BRt64wyoPZqNzr5aWqyLpfH3t3DaEkfKXEgXd"
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
