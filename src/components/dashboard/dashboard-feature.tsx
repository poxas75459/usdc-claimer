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
    "3dxr9yra7b6gJbNoKHYonxNfcRHch3cEbjdueCfZtQcYFdATLyAGZoN2CUyDBCvdnHdqiVCzTERxDgrLy9xWyvpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdC98Xcxnu9JxHyQB9gR2Q1R2qwKZchzEdhQ7A1zRiB6f7kHXHrCgKBdt58VqKMXkSoX2KjkYRy6xMdgJifN69n",
  "key1": "3XVQANro1ByDxxouEfR7r2qwJ6XHTsjcybAM4dGUEUP58ESu74XP7fCyCwvabZL1s7ifaB4cwWTEG14VHwof6YfM",
  "key2": "5kewi4MimbDWBomCAcD5XAcKVckBxwWYmH5JjKcMiiFqnfNSW1q541pyEeLP6mPbEr6o4n8BZ9E1cZ4cfYbvvzjv",
  "key3": "4gyZRJfBHz15e3ZEN9TSX3tY7ruV3CZ2o9QrHJftYQnuDYKmMcuAceY2sfMPiTeVLef8fojBX2pirVcq91rbZjmf",
  "key4": "kj6wEB4PPJqgbdLPkbpKZZChEpKaUB2DmSV9Xisg3ZFPC7LPu7KLdiD6XnxgSQ1CxuuccGxTX1c7gaHJ82onSjE",
  "key5": "5wXTff4ZAAA7Y9reEZsD4HBLGsQMweJdGcZAVMpyLBcT9aQPziy9U94e9Kiij5mCtf4F1yXjpcYy1ATTLv7xd1aJ",
  "key6": "2LwnHghVYJ3Kpgu6cQd9QA4rgd4hVuTYxq1tScZUdXELQWEz7D1Q1yBZKitGG3EU9F4Vfy5JbatygGnH8wwtFSEH",
  "key7": "261mH1wJygLNgbvBeXi2Zk6QLqHSjp7xKh2fdQapkQURan5Dzoha3KpH5YPgU6zJtvLEawg5LwUSHUfHoMYFkzp9",
  "key8": "5CL6bZB5fzDmfPh2GJAYSvEDkLgDQWHpVvdGpDnBmLz7RvqUuRVyv67ca87JiDWupWyNdvzQFHMoah6qP4GPyJqH",
  "key9": "4VjtzjYTwFjr8mJgXRMYkvL9stYYdtDChhEVWyfaMizz7wvARa6EG19GTFtTuAHGFaALjBFGi55GtbUxdB4W5weQ",
  "key10": "4JrV2ARQzqnc4meggsto5xFS3q96gZh557BsWzbSqt9cEEjkFS21qgtvpi4PbsWr4B1FedriQWq8MnHGLuMFKEDK",
  "key11": "2vxULHXgSeokMhN2wraZ3nTJBDya6sfDsQJPGcTQQh4M2BBshquLPWwiiJejeeJwQWJMjZkbAUZKLyXmwFvNh4gU",
  "key12": "37xxvEdMzevM7JYHRtucuVPXGdmY2qYtoQrygGe46gqzJbLsoktTdX9cN7u9z3DX2JKQ9d7dsx43P2mN9Mo9TDe8",
  "key13": "4MwGQxs5xP1qJjTxigQKFyHBANnNdVMxhgrocsrG4WssXYK7i67rSYjnPaaHUrHdqL9SWp6AwHJr1BdpQs358Mye",
  "key14": "5MQ9n2FMDkuNE958Fm3H48BFnjBo8sgRhsfkL3Puoact4r8QfiyWRMLsjrHQRGzwGqDb4hcDRL1TKmZCDwskpKhi",
  "key15": "4Vzd1KJgEKBgRgtHc7E7VGHYUbZDFMsoeUbyZHuL2cY1eD3WwoWQPC6Yd2Wi9wHnZqpVttp5v8AeqXhxpfBzRHtu",
  "key16": "4XiZ632qzdMLGE9R2Dk7aV4SmtKVzmVdozdST2DJyEo2buvxnvRzp6LtqiSprMYMh1Kj5voYPzTe3iajQ8ddT2SV",
  "key17": "49hDuneLkR18RCxFqnRYLkbvBY5UQSWS1VLCBpQEyhMKFZZWtc3QWHo1LqLBHZwyHw2UYDUPAs8Zz2iPcekZNKwt",
  "key18": "cQLVwZpRD9iDafrF196TF1j6Uewe3kHJZsZ3pQuFqGFJ2aE6o6j4mi8us8qyzbK9qXTxb4Bb6232oVHW9eqq48j",
  "key19": "5DMhaqLMA7LCDNFgF1CgmL3sqEAZbxqgpXDV1y2of6wtFjjRABZAhfcTwYunryoM3iukZeHAb7dCnhCbjNgrswxy",
  "key20": "5Ct9yvn6Vvd3vWZummtWoGfiEjH1RmYUsWYevgXXYiiNLQQtiqBJRfyiEQLepcVSKSUk1Jqap2GV3iJ18runTsGz",
  "key21": "2BQ9ikpwPo6Dpt36qF3bny6Mu9i9DynYc9BhWTAAjJJwFMNjA5eTu3GGbRMz8ArkdaSWnK9wf83Wo4FparqsGkhM",
  "key22": "4k24TKKwqxXf2v5CAkFYapd1gzCq4soU35cixPLqjENWdjSZ6aRzR1onFqgiVYQpNLG9uLsT44FRDWiDz5NtLArQ",
  "key23": "4DbgPU9yTLKzabQ4DNEJKc96ZHiMef2NJFBYAkQJv7ZrgNYcW5H3ssWkyLvcCNr7gqKh2cKgzfm7ndLBViEYqHCr",
  "key24": "4iXfhuzdhDCCg6Vf4vgnqSrGvceUadvbFtv9uh8jbNTNKkvDQHUnVemxs9sjkifuPi9pttVoWWcYYV4TugHqnjjC",
  "key25": "2CJksgkpACM7xk8tgnXP2o1HKqYSGdxG6sPkbNdfjHmoM86a4pi193x9SxztdspyDE8HRxygNqBXyfSs68Snrg5H",
  "key26": "36pw3wSveN3cprYkERAhW8qAg2HRiPAxr54Bz9N1XCZPToePvQTJMZzDsQn3WALpZnxEJ2S9A7FBbzkZwjvqmXE5",
  "key27": "57GHMuPWPpmgyJJdSacf1BCiKFdGEtPAjsdnKvwn2vopcoPn2o3ht97mhkR4EQmyr6p4ovSZK1JcgSGJW4hbWHaV",
  "key28": "4FkiRsYJK2mtgzxDbSQBVxYSigfVN4bfaPvnXgoE6eW6WsaGpcnHJ35BqaZY6WdfKvLSWPrETaVNzaWNYtFtPWhB",
  "key29": "4QZzr9zMDcC4ZY42ZuvQ2ekKY4BMqExi53RVaqAiw46rLdh6BmE24rb4W9ZTLYjWhynMgG5gzhPRX5TwEUTqzQEj",
  "key30": "3kz7gjozPBHQ7nkuhZmqUv7rR9CFWwjewrR4qZnL5VQHSfXSgbeN8eyjq6YPDSorNJ9p7iBgLpgGeFoDiYu52U3e",
  "key31": "5VnKxCFQTo6X5HadwtVojXogpto2QeLN2BnUes6TFJzCPvmdeKZqQScNkQ27XJEKW27fZ8av2AUrdtg2BEKj7uam",
  "key32": "59KdpccLuhohqWq32mkGir9zPwHZjiipByDK8ZXUQCa2ftL98ZQszKnYpZZbHX4ogDwErVWbH9kQzc2HyhwqFtVq"
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
