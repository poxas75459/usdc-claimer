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
    "2bkUJCHgjwnbY8PzacwfcPv9qWcPsCREoD3FpkWmGKXqgSFmJ4Fv2TQuCDUPQLkGcd3KQWkMnChyBmidd4ZbJjMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDzeC91RC9iJA3Td3LRvTp82E3NAUVUjUSWw1U91nBcAARhLcACkXtBA8hzPwvkjE5v77kMMsKmzcHd9fHfHFg6",
  "key1": "2vBAZ57oXtm9ugQUMEyzvvd9m4GwaPP8MFD2XmPrDEdN7K6poKEhn6yfELcGEv2m3F3i9HpQUH89tSPDPpekV4wH",
  "key2": "2yCfqDnT6kDmNWGZVv2GAGyrtyzvYx1sz4T6fp6YzToSN8wqo7HWW5jPuuLNEM3mghJWLTyeUB9pkhvcdmBuAfae",
  "key3": "5Ma754KNM2mSSrYqj5AqhtTvyrsk4ony82vSZQSzWmMzsGwF65WYv7A2fkbbTmiPnCC8b2dfU1F2wapohth3DAvZ",
  "key4": "2xNiHwYNNu1utLXnC4uz3GWHFhpcUEFkxTcJfzyetBiACWaR6XyESuyLtkk6X8b8wzNgZJruK9ZgTjHhcxvHBxS2",
  "key5": "2nZm1kg8aoqQQ2Yftn83QYUgMJyYRuP5jDUTzySAX115T7Rfz8BpYP6Y593VJGvJwDSG6z1aBLWSWQkkR99uj7hF",
  "key6": "2Mio5ctTitXK3sof9ArZfFW4itTH52ciTSMwf15xqx5Df2FYMPKropcrzHtPG6zbEu8HtJNxHAsyVbe49VYXEFP9",
  "key7": "4h3zkHyNMkMmdXdGfuRYtACLwD1zLW2BmLVmw41N6W486PEfQJkGHbEcbG8epg4W1iyC1NozJQBRo65mkbizEGCk",
  "key8": "RsN3b5h7x6j4NuVFoRC7dheCPWTYoSWEh4NkTGT7JsVGtMo79p9Vi95CbZGXdVa3KhpJ4BchTKQT8hN5xJ9UePb",
  "key9": "2ZKMNxGSSVtkBPQYXyPtFRVADq9ngYkY2VymWBXz3EHx4w9nM1Eb2DeVcz8WNuCPGTP7DhfMnD91LAAM2cLKbN1R",
  "key10": "5gefoD7qk5g7LfT3TgfCg4owuVFgikcp4uC783UDGzywgGn8BpXZRDuvtae75WcvXBAqMY6169M1JKR4xuUQL4pu",
  "key11": "rLbQKK6oxLALnpChesBtH6UkjNugNJxwZdGwxP44GGdgfLyosY64rSC1Rf9ssY1tcubZk9FKfkbjJxPTKVW2bC3",
  "key12": "5L2et5N652RFD2LjUNqJUE3vztoQJYn3Uksb8r24WoZS99qDBLZsrySQgREz7bPjsUm4TjqYvHvNfo3nwVPdSDZe",
  "key13": "2qnqYtg9AfKXfBzMiQF8ytbrfERB93i1hKL98rZ5HmuGYq2BZDeNY1tx4gWTefBg72CbVkRMaULoHuWDagUPdAu3",
  "key14": "44ppt3styYU4Z2GpfT86c3Wy5Um5HJ1KLdEDrXFZnW224Bm9C8DDgTdVzUD72Xcpf7cNH5fdVuPySyBQrnbx6jbg",
  "key15": "4JaMLqJkPaz8SbXZ6TG81CZaWNYTMetSDXGPE5ngETuSBnR9yJEJFVeMa6y5RKVTdEd568fxXqhRaswjhDJi5Bmx",
  "key16": "5FhDLEYabkwtrofetYBpqT3u8Xe7MCJPDtpAqj4MnaTzbnAvDf3vANd5KXkpQ7WC7eJBjKcgqG7tyukZK6H1JxAL",
  "key17": "2mNkKouDomvSPLXMt6qr9RbHdPPaW3q23FPfo43utuC6mUpPhJ8Jb6KQ4cQvw5XRVKSvoN46Ua4p9xuqzrd624TB",
  "key18": "tnTWy5LQ8FBdnJzHgUxXR4zTcgDVkEZ8w3xGnK3jkPX7d2QvS8F3AdoB5W4kiyExr5cBDysRz7aEJWnJ3hVds6z",
  "key19": "5ZY553o6wBPwPZXPFhJKEejWJyD8eGj71mygeKuKic8Qf4BxUHRMjXawatgrBv2VCvR9CA3ffk4ou1hWTDmuDfzG",
  "key20": "5YuTycN2P7vPfPsPYteyRurmfEY3XVeEEuqkmadAE93t6uPVnG13xZ4PGmhgP9h8ay2uBsZaMfbKS9fbDc8LBvrZ",
  "key21": "2tEVUMk1P6ZVTrBhcbabm3jTng4Mm79UDZs8H4FBn2BA57kPSyTtHC9AEvqZVi7iBFTHSUdLwJpMaYJ5Mv2HQDAU",
  "key22": "2Y3Ldi72JBUbzWvUMV1H2HKE5jzR6kSZUB3SCTn2pWwHwhabBJpVRpR5ToWPfN3mMbWWVZ2zodALhR2Cbmd1kVpL",
  "key23": "HYNH7goAihC6uYyKN8EcuU5rPRZti75pbt3DjeFFeP3EL1Uwo8v7fsDhnCEoA36mnuGbpVMZKprmv3APyuc1wpz",
  "key24": "33A15URSyFdc7vaQEnJ9HrVUJixh63RpYzKqMQUe3SCVsrKV5ZSvDkXz43M9dbiWaThjXJFP3gBT3zuZ9oTJ3yNw",
  "key25": "4TdUX9HLHBxQ6qxoepBov19odTdBRXntgRxSiYK9ncJsg5jVv5qYZGyNzsxk45cBvc9L2oE8TpbDBku2EpY4cVfV",
  "key26": "4ThEkTahKEAeUe6QmbVb8FxACdYXnqaDBCdBZCNeKEV7qJYtkrwsAqV52zkqMPBET9kvifbVr3tHWsu3iiYQyh4p",
  "key27": "2E1GNW7ypK5vHpdVavJPbotvZSQLz4UbDHJ7c7gmNU6MGyEfUhY2ubaYnkbLsL7CjTeLabywAkKYjqfjt7z3wryv",
  "key28": "3cvePo9dqzcTAb6t9UTeB9Zucsxp7kp4jfhfHD8t4B45i8CUX9ygznZTjGJGoLSnVopmqh1UeBLBefo9GomWfMNn"
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
