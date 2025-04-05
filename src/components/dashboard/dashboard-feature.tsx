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
    "3rMo4VinF4w5rpX9srswyn8FtZMMWPxZ7x2EMeufEDmZqK3VySWT7oXGzfNvRcbre2r5Sx4sezo79PUtUwugGiDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fd5jZpuqVi64ZUpf67m9ypqUtUt8AVfALfnHeAfVTnzzQvSzicsmdC7SReyzmMjXrCSotmdta3iiMNqjtGfD6Ym",
  "key1": "5GQ3W5aXRWgrnzaubXjDeqUECd5BNupSXq9Yf378kC8iTu4eUPiuqTtgxUDBoYdJ9RSrzN2HZfR6ScQpTSm8iqrq",
  "key2": "67bgqbckLG31bKv8Nx6q5KsU4UxMmhgHna9WncMPrQobYNMhqXEK5DAap8ZKHQaD73aja8ckAxQ4wXG8hpYwDkun",
  "key3": "2w6waZi3nwaK9ccfk2uUXhhupUDqXEHC4akKTHVMTQN976QxRKvmtJoYWBHWRjuNdQVhZhpBNBhyt99meqQ2dD5i",
  "key4": "3CjJZLBBPbkYkzQeNrwWmL17n7aEaAoArhVNtLTAzt6fYVebV97DVxyTP8A3DFX3p2Lpe12t4zaAoL7JXyewftrP",
  "key5": "4Qi6uzXTwj7seLAvnakWVZJfTA6WAvSfszgbSMJUT75xrRGayrSaCfEjQ1YdBsDFqTT3uxKmQTLBaUBWQAuq8NMY",
  "key6": "2sgqTnqwE4uFyyKCgzAfWD6YRz6MVnWxKA7kQDfd4JZ5eXwZgo4gEPfQes7Nuj6BRUbP31RDFC7nYuLfQ1zEZkdv",
  "key7": "3aBC8QEqdrGi3FBmq3w9M8KdPzXSg8zjpsSqTzP6kPysqq8vvTp5KWFgRwx7xcvqhwdMygKMrLQdXGuvzXF5gmJD",
  "key8": "2zMrpXp8E2z9DumXKgtvytwvqdg8yV93Qd6dFhNmehVYF1s5Cqj4jvVy6Q5txmFke6kzXbuXGjVD59AkLxBWo5ub",
  "key9": "o6h9xKEyaJ4ScAy5KqGVqgE2VvepSjQMoLH33PxmqGD115FJbmwY3b79QERuGQgMZX5FJfvXYQy74EaAzuG89dy",
  "key10": "JofZ131MAmmQh8USjwsyF3DxGDu18MMeAWj5wuD7hRUojwfmaFv8Ba1s14Hiskom7LQ12EzuK7h65hcaXnHqa2m",
  "key11": "65P5ZnfBpDn9Fpp5BaqzBzxm7KEiSqehY5LHX6JvNRrMd9JfJwtU9aGhodTgZ28cBstVsf8ewpsmHLW6t2m4LdKu",
  "key12": "4YtJyjMWEHPbnucWZWebVzYcmgiUnqF3UN477fjAWpLBhtnHSMwcgqxVVn7HLxJZNNPjapKKnqN4DSHMUzo7Qy5J",
  "key13": "2sBdDP5Q5K9EHttFvsXCs45sGLCQds1V7csG3qoHSu5ZCXnx1jXwBuezokMXf5rSQUGfNTPwFVGRXRHSpCKeqi6W",
  "key14": "3aNT4L5BCNxABSQdPjXWcLUiWJZ3sMFsCQvoFQmqu7Sus2DVe4h4jAWsaSDrCoKc59WkqUHcu66pHFzxCzSmWwUo",
  "key15": "urSCQq29reYiBM46eN1aVPVJHRwKRrsxN1tYXzsiSiFBouzY8YbxEdhK1jK1fyHP2gdL66exSR432BDBhzRJkEP",
  "key16": "2gufrA5qvprheHydso3jhdwLZKsTcWeynHa2jAvdW8TzcgTFDyQjudcxRqv2SqHnXMjt5CbHobUECPVgM1cyBwew",
  "key17": "4acipGRkEnGezXA21tsYZMtdPLBHyaCPdR2G4xaP5Vu4MutWfDFyRBdVdpSYifDFpARqG99tiAaiQxPdGHZwWUXr",
  "key18": "2RyofBDfiPA9pmBxFQhTGyv9rH5ZdxvqeVfzZX5gvaWDCztssochEpKNw3tnPSpVGRMpFQzijwLGqzToUUDP2Uz4",
  "key19": "5aMJCAL9aHQnxCKmhiyC69HvgeYpGfs5NoyWDdVeCXgCeLyNosGDJoz9TTAGddmjp8dkvbY7ngHNCpqnzM72X1vJ",
  "key20": "3kBvjCKSyTHkW6oC3iwKgMHiv37nQYjbUZDo7jXevcrDAdmi9dnCqTMMRpb9MKSR3g93bNpAZFb5sqNhPDdzktWw",
  "key21": "3SYzmLZ121LmrfhtYz2cdcNaa9wHTUueBbAyzZbbAuJK7QQYVWknmQ55di5AVztXSLRqA97RVo4RsTDTmzWKege6",
  "key22": "7igzKAxwrbZ6jHBzej315WAPkHFmbaBrEMv4ugohyaXdZXN5Ypak1uJgGUmBJBnjNjTk84vxjiKnn2q1p57mwsX",
  "key23": "5aSeZrF19XAP8ffa8ptzs2YGMHGaY8MiXDySRz3fKYkRo5F2AZeANZXge1sZGfF9kkRJAVjAm6SCRF1vZLtF9wTz",
  "key24": "2rg14AnE9WbsbJJjiEJrHRLYnykvEkMkRXuux7Vtjn6gb75FC6QY9KV6yturmfq3uQYQCTjTByieLPYx2ropPUY3",
  "key25": "5Vmtt7jAw6UFuAoZyMmsFp1kK8xUpXgeDZ6eF3ieoEM9K68EsDiZ3anuoAcqp2escF3W7SFhNa2j2h95AFuFN2E9",
  "key26": "55guodQgLtrDudaQwYNqXULPxbPiQ8ksPhpxkh4CN5A8iGUKPt4qMmV8vgfrJVBFsyADbrnV93w3y8MMAR4Lp1QY",
  "key27": "49bEW25S19UhrpJ5nt3GfH3myXNZz1tbCXD6iywDf3CWizjgFavBcgw46A2wyKx6fAD5Gna3uwhq3BsXTMbogwRF",
  "key28": "2Z7ziFf8ky69efk4AYRaHTgTojEqqtHydFtqCiH3GLzTLJ17KyRQtXMMuD8BN36isXoNdkdJkduPH1ctTX9JJ2jW",
  "key29": "5d2jh3FV6pcGLLqWFqh4UEE79yTU7M8en5WN4DwuiSm46nWV2HrnZNQgf5CJo4w7s7rAnbBoi7QjWYpYwQwpGPDe",
  "key30": "5KuafhvyYPjqjqBmZbC74XsSCmxHY7wtiUWN4HFQfaoeWmwLGxbfThJ5LBCyyhKgUFzi8MGoSzCBY2jPPwPgPmLt",
  "key31": "2YwugF9D7H9TPwYH3aC3x5i7jen1s2ckyQTpVWbQPyVvaW87K9Dx8PcJAcamqsMGyVSNbBEZvdzy7gzPRoFRfzWF",
  "key32": "4XFtqvNXUJtEvB9PPjAanDY4TjN3WtEJzN7xVBTy7HLyU3czx6mGQND1gzM6vvKWc2tXmfTUqmDuiXxCoZmmCcdt",
  "key33": "59Ju5D9eyk9ALhCvkqrTihcbMrKiyWvb1ZP7tNEJwio7Q8TgkGyYEjUAmyr7GyaDReW1My9TU8Ervmjvu5gQE4EL",
  "key34": "3DwvDDnVwoDf2h427KhpBivqS3t7i7rXswcKdq19mbizhqvh6rHUnexQdAoeXmMdonRywFHiCpZRQ5sVnbXXoZ9z",
  "key35": "4KvDdXad6hdhTGUFYvVBidxLyRJn2F9jvaHZSB9SLA4QwhczzgaddyfHYjEweGdmssvdEnMPZPkN5SQ8dS4K5vXf",
  "key36": "8695UTPEP83mni8SryDiJCkZQQNPegFLdtWKsF32WYxdCy7ovjrmwnnnDK5YhiuTnG2E7qGWua3sZRndxkDyKRZ",
  "key37": "5RqP3U8HZyZELppqAxiw9J9VzcwCBYAQrPzeLmSePRoN8pRkmVxjkTkaS96FRLqdtFcmN4LFMYmazRCDDBpz46nV"
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
