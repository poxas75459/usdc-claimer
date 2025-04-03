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
    "3bcgNDVuGvUzAzT6taJW1ecKSTxRDuyZqy4dNVqt5vConiVZBLHRhGoQca7VA3p8kidaUQoMckB5YsMfAPetvqee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TgPYf9sU3yARrqtRycGiFwNUutkMnfD1HnwTTBemGhTWujAS1V3NgPuZFu8uwdxnUvNvHi2DLuD5RGvJpRPQuiy",
  "key1": "3kW3UQNDVuj9Tz4A7NxyTNy8HtKsE3jLjWteJERvCWvMtNiGes6SxxQyAzXdTRhqPcd2zmuFkqSUaAC7BQUYeRe2",
  "key2": "3aua1N2Bu2cSaZoJ1LxgpGdQVN6vw3MsfMtWJZEB3B62dQPbRdGGKAjC9B2vLkd6j5dg4KhSxVRJLK62AyL2ggsQ",
  "key3": "aPBgB6VtQBPkmx1MKLjpEtUtY5brURStjrKjcAMNhLP6G6d1SPYXczZiZcLxin4VCfYE82oG1G9oGGoe1G6dQX2",
  "key4": "4axdrtj7D9KNmH8LLL4m9Prx1e3Wsob44N7AjrAFF9HnzcWA6YX3kiAtjAGd6np69CLqfEvdXWc1VRrCHKRjo2NW",
  "key5": "5GCqjhBCBpXWcHBEw2TnUnWhuZXMTEqtZ3arJVpS82T3QCpND3ECU4cQa4CRcWa9dWatgdJYjkaWB6EtGhshLbSj",
  "key6": "RmfLzWe6hQgoasVonjuUPrEYe7bpDNhkEJJhhR1QspombMytgY721SkyMhuKbwSZT4uX3jKUtb3dH3SRSFfZzoS",
  "key7": "Jve1t1PJhQfKaLh9pEHoky9hXjo2s7fqCp2e1NNtJnU9Q7uj9UkHaZpfhjmtMvh4QNtk3VoX2zwA2ty448dNrhS",
  "key8": "vMKjr9yMKHHqqZvGASfDrvetTBZP6Mb65Vrjc8BpgFQcQUxFTg6Fwp7b5YeTPktYFRJc95LDTWdXkaaU2jPnuqo",
  "key9": "3YRCLLZqJHwwRXxvTy4HkuQAr7PzYYM1KiqaABfbhxebdeAAGVhDq7ZczPACvXsR3Tm53T9G6R7JLhBjBTGnB3Mk",
  "key10": "3Pb8fa5GN9i556Q9Gk2Dde7UPFmVwx4NtaH8v6nKXyCNLU89f8z7p1TfiMK7ARccZdUiNUs13hq5UHqwp9UA7eQM",
  "key11": "2FeyVyiSMJuNBUc8PgtqpGRFR3s1MV2529KSVPuTuY8vTugdycjrae4ZFy4f5wT95VjfhavsUaYsdPYhUUm7jnNv",
  "key12": "3ZxWmkk4Bji2zogV3CmjLRbKS2Bv5knggsr7iPTCa2B1rETVoGQKaRywFSrNeTrovDGojnUje5NbbPWRTf1dgtdL",
  "key13": "34yJcpgEAbQHjK4LYaKVuwmRoqkXE5NCYoTiFuoCVEvWKbMxaPYdTsttT7S6YKu8PyZhr2YyQKQApwCSnhn8X2CU",
  "key14": "qeyTjPMBKxyPCTrsw1v4inwVp2tRmymWPgdqW5BVwdUN6DpJTg2n6cPMqvY3yZ723kHsQsmhZekxczzxFDj9Lgw",
  "key15": "38VvGQx2iAMXdd3jx4TWqEgEpiXMSHoAKj5tzTSJYgJae932AF5YW594A7T6SbMpcs74G7Gt5MynJGdovz3HM5Vj",
  "key16": "4aYbmRg9RQ1y75vtTAqhXEnggk37So6B1VAytcwCR2bbZeTrvMAnEAj12cningon87xZR23RtQ4pDL2eL8EgM2eo",
  "key17": "4yoKq1JZnbkPrBPjQwYGe4yBAtTYeFk9kgzG7GXTPSagwKxiVSewHwCxxfFMw7czQb4nkvwkeLgxKgU6QmcToTkg",
  "key18": "5xBrZJ829hEgJ9du4vAivR5MqhCdQrvN9jgwM5Zn2xPpMdAdF9a29aPavZLawkDZxTPpRuJdWQg8HVZhKECiCANm",
  "key19": "4uk8GErzj8ohLLtfbH18HDxvAznChLNAGzCqygfDqFnNqxDfBbwKXHngfxQmrLHkzeWo3J6hFfum1VAu6TnxmuLb",
  "key20": "3sbyNuBDge7rpKDYqvb8n2NHgvLAUbxVQZLNb7hr9gVjU6BmxZrczzGzTKyjEbbeN5bhpFGPkPsdVSVesNNSNn32",
  "key21": "3THCMQvd36NE4mq7srniwKLEe3ifMjWT9VH7GUC4M1grAySnkdzKijTx4LQELhLCwcPuF4uUbzbHVY4LgRcdZby",
  "key22": "5NLUHxgNHiQxQmoN27rdRiM2pJW5RB8Kp1dng99tsdDXM276PgKBSP84PUSYShotM5th2BbsJcYj57BhtEZoUhVb",
  "key23": "QUWfdidxqSRVGjZk2taB1k4AeQFM1iYVQ4tFRmr7wyuYVLKFHYF7X1WNeogaAoLm4ZD8E2PXVQBdhH7pv65L5Zu",
  "key24": "4Pns3EbizYHWRDLuPCxrTqvmrVG1ag5aEYXJYf1aPk7dnJ2HsvRRYLgawJTHWS7NxAt6u7D88mNnRgdefy8yZZJ7",
  "key25": "JjhVfQPh4ZU1bazj3DCZ4fADvhW1kD9ZHis58GWMBH9HCNN73za5K17fW7AZ1eEYb3tHQpMHFVoWuJhxsd65hGb",
  "key26": "51KpExdR5SYyZ1kQJnDdyynZjLsEZ2cAd4hoA97hdsLX7PYo2WLt17uPUyjx4ZHZ8KKHxjZvajqvppx6m9J72st4",
  "key27": "2jP5rZLzu6SnLHK3n23oKbkkHnSqcmZdF42p3Dx5SpazBBNXTrSHMYS2dm8qA4WJof8jMeSSCRHSsRgkV39pYofU",
  "key28": "5NxX5vuLnXUen23UuXrohXGmhDPovqd7ZnRWseVM8da7knXjDh3AQskr3Pi1iCXHEHcJD2zG9CfV6GRc6LR3camQ",
  "key29": "57GS6iQ8mUsa5vVXgK5UmUPkCVU1MbjW7cGTxdEQoauoL4f4YeGtTkmZDTqFsc8Jz5BBXzguo2TngrTU6RqCD22N",
  "key30": "27WLCP1iLWWYzKKSVS67zCiyCYaKknCU1GqSf1RhGb24FxQdeBY6RGMLsiV9jgF9PCbQ3gMyKHmzsqyZxBtqoXuC",
  "key31": "5Bj1XyyD5ykZ1jWCjgWLHa79uqGUPjShPB3HTuo1bMpYHysJZ4ADfGLySiyBD9ufEWbZ21xCFuooSdD5cDVU4VY4",
  "key32": "4e2frsBSGYCvS9G5f9rjHToh5BnChnz5Y5nxGyb3tLTxSsptSBJrnWdxAKne51wtKvNmqLStp8FaztwLvSZ1wBe6"
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
