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
    "4jBNiAC9FZyWG79piKHAcr7tu5PcfnSqdpv55wRyfBPEK8vzuAqjaFCQUDEvdk2qzdxH6vdK9VKz5qQGB6kajHM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ozEM8AropvXtg1tcerHiEvDGMBbeAaqLhEjbr79mgKEuQarftxvUALSh23dUsG3GxH79EB13VaNbNc4eiSMT8xM",
  "key1": "4CdMAwHA2AJSCEi9JMq1BfJtshBwaM6P4oXtHdjVEEa9HVAM3a2jf3omFkXogr7Vdai2Xs555rGiKVap5gDmg9nd",
  "key2": "5fJXYe3BzT4iSmy2nKfgwKwi5GU4x3p5HnKkQpC34BHuomAryviFeqfaivVGi4yx6JkLwU9oxjZrEkprzMfdeqwV",
  "key3": "32PgMWjDtFchxFcHR87RqxYZmDLWxgJt3RwEsX51JDrTBer1nncW3gFoGU7xqZPFb593mnn8R89peNGsaNiiPUuR",
  "key4": "55qGam1Ucxj2QDLbTVrvZu6fvvoqD9yqKJdutbkZ14VjRGy7NJ2sCsbVYvuaNmzxGYzzAKmVtPVmVoVymq6eF31D",
  "key5": "3t1iSmdT6P8ZgzU2T3kSvmGhrxE27dcRGi4XVPzBM3aexH5Fp8JLNz2cZpEtNKxUTTtLgsN1MA8fF2zqzZ6t66Ba",
  "key6": "Y1jurAX45ba4McEWnDdsoHo8BK6Ks416sMbXcFBmE3zpjRbimJB18iU1zBgCrjNbs3PvoGwi2iUJPWgqNJYRpe3",
  "key7": "3UwDwPNJug6SV1pXxaH9f1hSDgEmCBjBPGaEdJc8V6Eu2NPX1JnMk1twkHzXns1F4LSCcpmqQaR5Us6t5feUKf5S",
  "key8": "3WEGh7ayiFQWfaAVwVZsb7cB5maG9m1Y1iHTJHfdbbVN4tJu2KvwnXH7EyiLv84W8p3KLpC98HeN5UpkrwKP73oi",
  "key9": "5SJHRiqxYfo6hRRWa2YpUK4uixJKXkgu1pN7XrDhJJMSXkHcWfDw6Lk8FsXv6svU6k9kGsquHsxxunYovju6EPRA",
  "key10": "9v7Uab5sRbKsD5t88UGgFZuASbDkKsUs9VnCkMLrd5bpbJE4zDZRpU5qDr8rGJidrQom5uFC17XifJEpSxYrDj6",
  "key11": "3W4fPvR4petna5gKxJP8ZYFUCaYBrq8TrbH4JnHCwN3NAY5RuZfinPcuy8BVKZvwUwrJqKRStcxczERD9HBSskCs",
  "key12": "2tj1P3drKKAVif9V9cphFBPdzwCrT7JrSccM9b1cYvFunZ6aXNUcqm8FnABhSkBdLuw3R7KCP9Y6mZa8Uk25DDcg",
  "key13": "4TQbyY88NcKUNS9R6gHH48mZWJJr6VVPvPpGVy8GHMmA95aG8ah9uVn3z1Ug9UiD7LtB8Kv8H8YxUr3Mu8uPucqA",
  "key14": "3m5eE8VrskYwmSS3AvVKDYtajVKXSME7s4428MfU1kr6PUKyxBosq389jPzdT3NBhdf9abN3eeibb4bWXWty9fjH",
  "key15": "4qQ1aU1bTYzkoRfiofRqVB96kktyjpYhbMHQkZgNW8L4SdjtpfanokXGe96A6fXXJjpqX2VNsXzBXZUmZP4Npwuc",
  "key16": "2GFnMGGbEiUJCet9aevijDUj4Hhf4bUeJi8ZjgPYbEk4ay4L5akN2BscnKUj75jEQZSy2xeDjCLu4d11ZUe5JVin",
  "key17": "2oBcPFMTC13EseAwkGopchRaiBc6wyRHkDpQEaVe5PTaCZ9juCoMW8WNinU5v4SMihqZVin7zmY4zqt1KxAzYEjU",
  "key18": "2UMs5gMxF2U2HTzaVFwjTiPFx7i3HfJkoqKezH1qWrhP49GE82LBXJGtGrVDgD1QLGVkdK3LkzbRkx9VCa8P4g8o",
  "key19": "3mLUnwpwm6zeE3jdkt1q5Q3G8eEesfAcKTipLfNcQUfmcUbxmcinrmjP1nnmDnLB1RkdS8mNrFv1w9yM9DTv3Ymi",
  "key20": "4a3CWCjCprMpwKkBnmwuKs4Fyd63uh7dnnpzKDqphp1mc7aww9MJ8yWq4gRKBXVQzE27TkuVmJLbdnpyw9YQueDY",
  "key21": "2NEUMMxSmS7Vsyfe115wmNX77oGTfjab6VurVqUTRRMQdptLHx2yecEQmVyh7wiKgJmWQ7o5Xjctziy4dBWBk94z",
  "key22": "5SJwag7R2z1iU1EuYJfbBdWMJA2NMw3NpUVBVjzRJicSTmTW8HcdQ441hCcB2pkGy9dnntBUirZHrFAGXZiskgt4",
  "key23": "4mo1y4Qi8XBsK1N7Khz6942w6tn7rb2DrttLy1gxqUHMi2vp5nHb4zq9uinj6kDXfMrw2ATi8uWY9UUSLztH1ZvX",
  "key24": "4MgEMfxFfnBSTcdoEVCkV62PqyAiirf6Yb1w7qCXvjYC16XhgbyfQtUw39XBhw6fPEN5McG4nfCffBrGvGoY7Hui",
  "key25": "4nmeDtY8mLmsh9vzYxHmKijPdwD2j5ci91TPo2bZ7r1SDXx65FtMkvMcku9aMPLT932eFSFrq1jLdDTL2QhWu2aj",
  "key26": "3LJuvp1tH17e4AhC2DV3gB3VAJDcTdDA8h56EFVs2NiRiXB7hBPoxXYRwRvgmYvcsbgY4cE9Xx6v4kqFStsPH7T",
  "key27": "39iWvGHwEUaZFsUdhT8pAM6qWiJpuHGGRNuWtkoCeDhcA6qCgmCdB2Ybozr1Zqsd64uVL81yhkp4LJLUbALxci95",
  "key28": "3Nfn7UzFk2KSejQ8CYkjHLq3TpWscz7CZmfF2L8NzAeqN3wiu57VU3m4torwiH1VRW1dkfRgA31ejBtvAWd2ybwx",
  "key29": "2GyAPZvUT21XYaAk6uaSkUSwzTu6zzBzigjg9vu9rdHLHGMUMX7CvrLg2qBzkyMf1oZEbMpmb7vFJMNerskFFoe9",
  "key30": "kBXQW9ivXN1ZBkyfzNE5EPChA1XkNQCxMrKntY9erfggvYeKqPrzoipeE8osv3wvyhVFz133YoCyLNXoxqcQJ8b",
  "key31": "3BQnzBBWYjjKvz7KRUxvbHhGq3jLeVNALBzTE4cDaye7pKWEij9gut1dA6wrr8mmKxGYm62crTFAmRwEdGwQhMfi",
  "key32": "3q7dkmFrbtYAcXbki7rq5XZUNHFoPgpsD8BDKS68jW572cAVrsqdseCRXvczN5siKABdPEAPjnHDH8HZ5JRKKp9F",
  "key33": "3xza31bToXxeBkqpNSnGiMamhc7vbfo8H7QFQu7CGUnkykYB282ToQ3weWWC4PaDwz8uXML1XKqTEa95iRKMNSe3",
  "key34": "3Wh6Y2QwAFcntKKg55RvM7c1TRW34beYXBwZQUhpMiijJ3wLtTxRqnnFFi3DWQrGkB3U7d6PQnQNTvcc2hn7Lj4p",
  "key35": "5EcuAoamWqAGnDVudZfsSaJ6anWtzRVu4SvKnNq7ecPVh4uBByR5a7tuTXn7RvFrx46nijcRhLiF3EuhV7HWi8hw",
  "key36": "4T3y9VhPckVcH6Gz4pUnv4Pdym3t7Qkt8miivzrxVDhseEBjrpchMywkshMy3mUcScqSGBgNwjPVk2QjXQdTThBS",
  "key37": "2DuYxJXV8xgDTRwxT8xdKaA21v2LNBnQW929MAhffyKAztonPTSvzFh1DEaSF3ucFHWJYfPsDb35v6aGWv66fari",
  "key38": "59MV8t7z89VUixwiWB6RFXdmfgL5HeWR1ZoaAWKfqpJPwki1BiHTrwnVPqREKD3uUkXTwp2SmLB7kDfTfARU8FtT",
  "key39": "5NM3KyGwPcYYx6ewnhcFa73RRHbMSEHWh6NxeH5hb6JyhYAQJKthsw2XegrRc6abjnTQKPMMNtedJYmtYeLTKqpP",
  "key40": "adALkLpudBDCxnzEUEUJ4dbr3KKz9TJBtmZ4HYHRajHsbYtb38W59EtwtVmfNvwDDeduDK3NQDWNKFwuHhDvKLU"
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
