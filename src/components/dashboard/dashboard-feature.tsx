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
    "4VCZGH8SYFUSSE8kgrXZhmzvFN9YmuPXEGYdSdC4r3EtSroUMRJQYTaNEqDcAamRR4vkNJGUdqayzDRAMYfin5ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQTSsSRbLdYrYubhyZShoDbM5ghYgbDj2Pb1BVk44iF4oKARny1NE6YM76oZLbKaY1s3Rfy9sHjcQ4KbkkDqEKt",
  "key1": "5qAHzETabsnW3nyR6UoRne16yXyPgPy1mmRiFDSaS5f4FV3MjUFvtisdAHpZd9SbCUiyPpwFtscZxxoDFHMVimTq",
  "key2": "3hDu3vGMjT1z69YceHobyqgYF3E8QwZothKMk8qvHxkaHrQSZMn151mmdcCkVcMxadYH8kGfAV7UUwwwW3nvU1Ex",
  "key3": "4pSYfJgs7wHgAG31uA1afw4wGZss83WkbYSwqeXsPyALePYoEMsL8qcA79vGMxwfL4D8k7zaRLRU2aNGfJZqiayk",
  "key4": "2M2eyoPFvbXbpTBBREEMVUZww6PV5oT7fE955hwcW5PAmdeAeY7dmtSFRxMKhP1o2uUGPYqXaTTVTQdpCSpTqtsP",
  "key5": "2TgfvUyfG8oKcbKjgQmnf6daBNPqfLzfWwHzQkKYyL3q3kPEbu7vEURyJf6H4ia9Jf32LdoinVQXHWBdF7ExR5aY",
  "key6": "3KeHjk3puxQtjpzRQoymM7TuWPR8QKvhuFc7FbR5Vfy74yoerc5vY1FngSPgpixtDSfUpxhzmweDbZUpPgEJK2Jw",
  "key7": "37FZRbeheZrQGDZtZNer5V2pCF2Budo8tjraEa6YHnYARUhTWZbM6jD3ghrkEbQU2p8jspQ92CUgnZp3umGu5WNs",
  "key8": "515k4pcPnpEfDVn8nfHAjHBBPq6H2h3YMXpyecBtdcPfGVJLhcqHV69xJjHxGLvAFNBK9MEExFYkqJDxb5N84Arb",
  "key9": "f3VKHaAoEhAjdYdLKnmX8Maxym3DcvqDmyb8erwbvLdQSK3SNG5JoEHq6kp2QSZypF1j8C1vkD7M9Fr5HafA4GS",
  "key10": "58t1mRfQhzUxrbugohmnmVSK84LhTFMX4yEUdcyJHCrgSeb8jgDvbYX2JRe9niSLkHjEaZu1tt7cBXyw18KoPktY",
  "key11": "3jQXDSv2tdJS4ibsed3w73vBjGXXbdZS1pPCMpqwTCKcDZ6nG5K3ruyN6mzi5mLdUci2EmiJNMwdqBpm4q2c8uYV",
  "key12": "2qJchf8ne3DP1ipbNzkNRat89TZq2fq5Y2hq8yA15xGrKoFfkagaEoNMZTY8YE8gzgGkRw8LCsa7qtAZ6KBQ2DRx",
  "key13": "4Y6RYXKEPj43M5p1ZhWFB6VD3WLedinUtrnJg1aDCTQ3wRgKqypFsXyDztH8iAQwHFDRSndsNF1bomSD2RRAnB1C",
  "key14": "2wLX3eK5pdAbZS7g82ubpRz6KvRhEyFky6xeqYhRiviUkgEhijE1xFXVCVZz786nN1e5i9dV2DyfCZ3vYj7nq9qk",
  "key15": "3KtVRKP2nBtTe5Zn1kz1TazeWnThpaRqRPXM9zQJoErYGFSkPZxXncZw6dXFp3LShdSTLWHjrqxNt5wBX9ZEMRgT",
  "key16": "3jtWyCt74Aorc3G2veDnTScytLQJT7gbchstPM87RK5D9uAqCKivfAT1auDSqqQTfEaysgoMNji22CiLf8aiU37i",
  "key17": "2peJPWasJUn1M7Tr7VcjFRu8imnaPzxzHq6uzP5Kf8qsbaBvPLYSJYBJsPwcFqSfMWLSnbuuQEJdrTeAZKdsaBJ",
  "key18": "2Y63ygpBneiaozsnQE32Co9XT3pWaJ7L8z4SN78yqVQkNcaTg3E7SXnfz3iJpF1DWRgFaGJ1h6iiWFxzBZCkSpfv",
  "key19": "pUhemK649iSbu5ZnDuWmb8QYd1Wp36nkvXpusL8Cbgc6bJs3fY1ht5epQ8C9W8xESjgkVS7expSvsnq82TotjAG",
  "key20": "2hg327v7a46tXwe1Vbc5kB8zhnE8cyYPt8RLYAYyXSag1JW1n9Fwf3aP4irWKd3pj4VepZWKqeA9zcZKihsNNbFF",
  "key21": "3eXeayCJgboTom1y5CY8bsAkZz64z2vcDV6ppYtNNT8w1uytyReTCbRUTmWNsTdnB7qYS2JzL3M5XjWmajqKfj3h",
  "key22": "4kdbf8wwyMYwVSKumqnX6qfaRh36y2i9dYyZTb43mKayByiqEQVyvAv1cSAyxQ7jdN8BW7aG6eqvgU2owLtaKYRy",
  "key23": "5foGmshPjmaRuWVSfz9NoXnNsvRn9yiHGsVUZeqpMj7m6Dek68VXbgnHwUP1G2ZRagwJZtgPtqX2DTBvP676zddS",
  "key24": "siuxyKGvvkVzk4NfEKSFbCuQpQT1qWmP8jQrA6qLAcs5n7J6L1u1bzjtDb7my6xpDovpv97KV7rYJFYCpVawyHV",
  "key25": "3ndfLmFQoGpY7j56uK8GAJFVwXze9WBBU1FQC6W6Yqo5Cmv8ZdXGaXP8gkj3eQNTrsiFLa1eBTdUBpyQ72sLmztn"
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
