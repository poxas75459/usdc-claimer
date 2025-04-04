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
    "5Nn8DwmHcvL5oayLkYkjmLFhQMhuGtzroMmMwo9Vqa96pANgsX8cd8U33S7jcL2gccjxoTCri8HsXNg9w2GPWjEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CGS9yUo2QfJhEFPVanZL4FyQLofC1thMhnBEZ9tfjHztSHdBtJ9HS7GGSwPJob4L2dinSikgY2Nb43wSVbN6JJH",
  "key1": "5G8qhTbVNrtR7foCP1cZg8GAj3vDpEDJi5tQZnX9fvuxZYm3beEG5gPKJcKkLEZti6RLaT2HpjThRsF1EVdvFLfe",
  "key2": "5bZpuSU4hirirBmwfyra2pVseknLzyfcK7cQynAm1CGPThr1TJbsrLFUQGqC4uxFrA2j3VLqVFvhjUNdhHs72DMb",
  "key3": "39ETuEaUxKQbQfB8YUuJ5qrppPpZEFEQdAjmp2PCjhoiyhZo9e9vG2DcV582BY7Xd1qhsTPVK8Q9s4dkgZrcV9et",
  "key4": "5HfYDmJ4je5UFLGyY2RyfGXvfjzphmjfw3oSTcwZtXY5PaWvKkapVfs8NcNoKKcVbyyv8q3UAcRhsr8QSudvuuw6",
  "key5": "2QBjtSnF6pidHLfhd98qQWLqREgW6AQZvRiYvb1F74fZdAPLeYU13SHLLsKzfnWmFKX8qBT7Q7xmLmp7BLuHBAmF",
  "key6": "4r9EZueBV8WqeS22xTCCNksFBY63g3NSYY1pBgJUTNWeT9XS3xpc5voP3NUbCzAWyWFYfyVzYcE96FDXRmFkq7wX",
  "key7": "2dJZfRwxNwytLbkZcGJ9sL8aTwgkVWEKaVu7FnSztdFnFhycjk1u1kL5QurgPud5tKAHj5MYBQBVRyaj6ZxShcwj",
  "key8": "53P6sjimw1bTmMo7hBTmfAJcK7oAZy6Z2STxp5rGFkNgtiKJG4E34VvPi8eFAgWN9cUxt6mekoDYDGdzVMGRD8dR",
  "key9": "4FkpkiwLGP6FVRJ4gSMhH9QA2YvmTFWtpzcBCvvt9q1AN7J5KcbtB2Q8V1WD989vsdrZKqVkeJysXtWpta2fZjF9",
  "key10": "3uP2gwt11WcqKtw62tGxxLMgXvH1uU4okXUxpckW4aaRVEnvG6Yb3msfv1Xddo4Ydb7FzyE3xCXLKrq2gQAg9Jc8",
  "key11": "4kpaXzRN7DomtDsBcD19BkJFXwNMFwMA1j4krJ5zNWiTEgL2jdp2ZScog6upCcCVS1pqE44QqqjuY9zTAN9r8ajU",
  "key12": "2vjUwGRiCGSWLHGbiZP4vcwq24pzEG4zKhB1tP9uNqSYTf5KW141LDjjDbXP7Y12ZKLSKNrSunM3yA3TaDsbyTYW",
  "key13": "2KTBdfuh7y8YaAAnxPWnGPWR1dpPamBocMUmRfcNRH8d5dm5PjFbogfe3iJvGKrK8RsU5Zi3sYDvqL1KNrXJ9u9b",
  "key14": "2dJEPnCPpa2PYKT4onJcCtCmyZconNBRVEKZwG1NQfrzmipc6vHxJa3jBcxu9KK9tizdS7U9AnTeBErsmzN1sZcC",
  "key15": "3uwRbjDNbvCBhbWdkaS6BXYd8bTkPaC6sXj6BC9K5mEftyocFMwmhdRFaye8tWePj8iYXL9f1t5xJY3p8gWmDump",
  "key16": "3U9qJtr99sYyaoqv32TCHDtxJZ3t7ftYGdB9vu4wAuNnGkPUFddoSJuAb1UQdd1p2826X9CB2rY3q2d8sJbRaDVC",
  "key17": "4btjimHmcfsCZJEPcwy83enFp8VoS2SdqS8peNdqPZnEQgNaUMP2YBwj89KaavF7fP9ZEqFfqkoEAF1eVhyL8ePq",
  "key18": "2Ef3Rg99X1H1jSUBJ63qHg4tnnENJMQcWpHCH91RLCA5auWHoSbkmYvawiPonNj6SaKgt9AR866QXJJoTmdFFdpg",
  "key19": "4t8FjqeeyD4JSMJ5tWbTRHWkGdmVjTPFaNxAiBPN8Mxkd9WxsSZ3hVpkiWfVKtykw4bBaspUEFz4MBVVm9NyTjcf",
  "key20": "4fdB6sVaZUGxz159XUV7VCYJdKmUuhxE4qWApPFtvAi7JNivNude4aCgnGpbZUEB3X1bG7KZ4xftu58Q4MxqtTeG",
  "key21": "3LPHinmekWfr7uHCVgueKmx5UdLgshPaT979PTKNJU3ZrC5PGnD8oiv43kJ56LMYq9QMuqj4tUD9RRAnJRk8UcWT",
  "key22": "2bsd4YXhx4NyR6cenxE7MYnGZaUvfFrhF81teDWswo819YgqHHexPCgfNNosAtinFg4p6C5eXqLnGkeX5RmrDmh5",
  "key23": "3xpZ9KyrkrRUM8D4D8fdALuAtY6bai1jT6QC68KnR7Vqs7f2idB4FW3snoZWd8CqiV82tSQPpwKmdPPKavE3LDLC",
  "key24": "3M7aPghEaZu4RvwqnBTT9qWAZodWNKphcuLrtJGxcjMCrKHAdW3HPV8ZoZ9T5Guz6YfWWREbDixCL7fLkDXSXck",
  "key25": "5N4MRDtccVB3TzkF2UKKNhFe5UGdXuE1bRDGdnyHN8Zt69xgndzjR4FYdcqDmj445YZ88tyCJeGbBCbmpxNHVdwp",
  "key26": "4EVFjs2uTPU2VjJTxPRgotyuQytkRq7z3bXNA82YiJgCgEKaqhcmYbw4MhYCHzmhWesTuHpaMdKCZCvDgAKrW3Hg",
  "key27": "5hRho5fDRCZVfy6geYDWxX9aLHTsv58o3UDnq3jty5m7UuUBU1eYCWBXatHNKLXTbgHdbf8x3kqNnWjB6QuZWRhn",
  "key28": "2TdE4x47eviifnteEsvwkwwKrpsK8PXa6MNqjCy8ACRJifAtR8anunMbgZn6gXQmCMk3YpJ2DNR5WyM26fCcazJy",
  "key29": "3y4DDicsHtMYN7m8ovCUTQSsEe3ytdEFj2LcycC56odbee6Qp9gnhiNVE1XgUWtZxVk7aRiRqkrHhXRKBpuHnzGm",
  "key30": "3vgQwTeCupkRKvQPKerHYH8CTAcX2TAYT1N9BegfLgKeG5KcVDwDhdJyPCrhSTh2WJ5GrSXmnM3hZED9uZi8cqWz",
  "key31": "HRiB2y1UdT9U4xdHF3i7cSUbHyPkGZ4FNjuXTg1e7jQqCNC2ZwZ1ezzGxQucLdgeuPoxz9BKoqHGqPyPfo7jYKZ",
  "key32": "4hoUTK6zSNfUS9xgYJWas2hk8CktCodfbvmzXGkZQ6WkfiAN8PDWNtWsoK6fH1X8Vs7EUD9LhFj5jjSrjFaeWvbW"
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
