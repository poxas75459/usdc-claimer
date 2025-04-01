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
    "hy5GACmbT2AtPJpUJiZF3YsBegw5CEPPXKese8uh5CNB6eXVgqfiNxd3N1jJ46chCGGXMH79geN87vUc5bzWjSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8rLuLuzHs3cSxR1DgmSuuzxCJzRq7UqbUkGNdiuZ9nGcqXaef4jMbRiWRwFwhS3vwt8RLaBUxzEWWW2wgX2Xuv",
  "key1": "5SeHvFBdTd7teWhCYCuxSHmmBWkPNEtS53XCJ27AfKjgEgy78BxWtJoDRoJAzZXU97LuDXEiF261JJdQ69LemmMA",
  "key2": "5mKEBwQuGRuJM1XbfsF77xmtk8wowcB26THTrykUgybY9J5LfoNT8fEaAK4ZES7jNpmbGYcQADyjRbYdASccKjiK",
  "key3": "4onLzGqiNPaY4v1W4TM3QiRMxCtnkSaagZKgt8kEt7kFJE7T236gZwgC3caePezRWWR8fiWcCNWDHBLJBsnhzyG8",
  "key4": "5v9xeS9MBKc9jyP3tUirfxEE6Gv1efah4gvVoxDVw9AjSEMUNpKNPZuPHegSihen67U4XbdpMvx3qebBGMwU97Su",
  "key5": "2PGw7WYXAdCJ4umeCKbkdNXt3spEnJdU9D1ZMqXYsuuewsJYs71iKFPTSssmZMTzWxYgE8kCgMjeRZPxmseB8Ut8",
  "key6": "DhoFTVw6eymx2mF4eRWvxGwrokGrmXsR4xH7zDT5LPvr4n4GpSuUsekXQbKfxWtow6xExwprRk1mhUip7yBPUHZ",
  "key7": "u4UqgagpYGNYhVEQfzEsjKsSc2x9wPLMGUoXPxbXjWU2wzqiEma5A33FNKhTvqYqr44GEzxTj7ULVSdZDhxjneZ",
  "key8": "3wC6X4tpSZDQARUJJ3nF67KZtk6pyaax75poikph9SMA9ont1B4XVLJhCsnAXMCPdqt2hhbp46Kak7ipXbURLnzR",
  "key9": "qZyDKJBMCubeibXWmnkVWWTu68KM8pJRUzN36AmqKAFcaJ6pNzQVpa9AQTyhhpY6BPJrPFWpmhBF1zFf2qmF4Je",
  "key10": "3dAENAjkbofZ2dD2Nhe8Uci7xMdiaZ5zuEcaQjqp2sZeKYi6FBcpNi2TAduopfKdixK68ptUor8JjW8GYBExspoH",
  "key11": "67g1FMdMBxFdqEGrpqLNBh3gW28iurqbMctQ5eq13dkemSmzgH6wvDg4ipS8H2v8upPEDsWopYxCRrjehZ61rdEj",
  "key12": "62TnXf9pHE3zavowqWcqNhfURmtjmGVzDkzhnW6dGRj1KQpE3MMwk5GNrSW7u45oDv8ZC6h9LbKaGB9SYqmDG2K4",
  "key13": "355f11P4RtZQxCViKYe1PexoAGfkuy7oVfqb4m3BBBpRC716aBKF4SiS4ZrswGrdxMTnQNrJ3gShPwW24uUPWuTV",
  "key14": "58cqyJFFVdXJ5drf2NxzXFubVp7M6QioYHCx6RiX65XZtaPypxRHUFKJvASoFqAofhcMWHNiE8YhfYZQEsSUeTof",
  "key15": "4FC5dyocWZ6Mog4ufSC84gisDMw7Ux4t7jtdSyx8QFKKVseFJmdCtZgGN5r7LV3XwYag1sXJVx9bboKE43WSuR51",
  "key16": "5fhvvrrVPJnJrcYgfsZEFXhxrudjgjf6fk6tdDUbnaTUUPb9tHKbqFBQCNAvEW5uLXvu6PjHszEziRPEiJViSgMA",
  "key17": "5nmpzkrmkAL4BM4MwBCpquWyfvV4s7xu9AA3GUxnGspevcBfYPtLSufqWh9WFdcAvBJgqmyFBj3UZMVZYnfkAhQN",
  "key18": "5P7Yo5CEg6ABDzH1Pd9QGhCFu4RsDYAvGAJ1BmkpaUydVBcSoEazjMmTPsreZU17AzavVBsR5gm92SeagBZ7Piwx",
  "key19": "4yM9iMzificeRQuSFWJXXpVhbD9CyD8yHrjbcmj5fhw93Q7byr4cN9YXa1DFYeoJKUYwE2c8XrjUwfXv7TRRLZSd",
  "key20": "4gmgX97WVQFhMGtRXCFAHArN7fn9AM98Fsy74m8Q96ymTUDbZMBr3Z3NBNimJJW3Jc1oobsQ7r3v9JKy4oWKbSeM",
  "key21": "3caQaY5fNyK9dndmPcNF9Trp96JoQS8uRCRAixK1Uiiur9g6h9zk5T2t3WNd9LBtY9Wv1Jp4RHE8CmfU8hhV1B8L",
  "key22": "5ZEAFfuDLXhFxKVw9KcF7ApL2LM5mSqpwVmwaeQg8cA6B3zzz4MXW6rsKBBkLFUqfcdg7tBjN4D9yr5R72MNsH2f",
  "key23": "2KMZH72qA8WDs2GZrAvMhEPm2bEo9YWeJpP9zMhNzGka6Rhr8486jEALJPLDV9uMa3CtvSdFrXnbV4JXsLsrqpZG",
  "key24": "4zEohBad6nDehDV6iu28C4WTA3sdD2fpNNG19ont5vzuQtcRxS6zLj6cDdKxbfnr1Nd76Ua5YQwS5TSfekssoKTW",
  "key25": "2WmqCstihBzo48Q8Gp7DbthLgTTKXR7TPeCrXQc8Hh1U5Mdy17jQpy4HyWHEDnfUUoZh8HLhdtpa1uYjTwkXmjbp",
  "key26": "5iXhuVxV9HripJ9fnTwrkwVxAdfNBFevHAr6bhb7KfPW5JG6HkJuqXd8s7SNG3DYTNX4z4M4T5dpn1zuexfzDTML",
  "key27": "2Wf6CZvqxfbzzSXUedupHuVP1YM1ajTV2oorMKPbo7jZiiEcc3moemaskD7qz95ZXG1RvS4AoJh1byexD3qncUJ7",
  "key28": "2p4gtYbJTt9XsqeWVy6semBWkqApfTqMxw7advaCNey3TUUsx5XseAHrgCi58HAMGDJECw5qwon7N5DMH2M9jSDf",
  "key29": "2cRADYEJetAgMFKR1NrR2LLAjT32j7MBwhUT4FN4v6eYYVdBPuAXYqoC1fhoPe9ge5aUbmmM4owsoaGeDE1akhjX",
  "key30": "oUQ7XtfUEVRqn3T4b5UoiCdSWpLjtQyCX8LJmHhVeuBctdQYoc7RRGeXRVmNdU4r1uLPfjEYMXQSX538S2jAyQR",
  "key31": "4FnCv5ZYCGfDSUDR87VbLZue1w5voZKccNUWi9xaTGww6fxHDxcumLbSsHadVMX8BF8GWwoY5pp1JHVM3Jrq6LLx",
  "key32": "55p4RdeLcCH2f8YQjk3R2SXUAPjQY9XQTiguiJZBrwnkBQVAHV81fwgNfpVhkgoKupiDFnjTDFeRMSzEPqMBziUW",
  "key33": "Zo4diA7oSErVbCArcEkA6swchCr8nrkcaT4283bmoUUwu9L7pgLGXmk9oDYEs7YQxWmLrsJJcSV6of6A8Xwawdg",
  "key34": "27jgpV73KjexzMAZqVsrnMGr2upA1dNeWJrTJDt4EaFz6mzEGic79zJScwHknyUZ8Kb7qSiDMHTRsyfjGbgh3X8m",
  "key35": "62TqY78JvLYZf6PBH7RgNZEN1ULM8MsdgWF3AeCFMkHTqdneqHj3C4zyj8A3n2Gtr26LAziXw55SmLh5QSmQL6Zg"
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
