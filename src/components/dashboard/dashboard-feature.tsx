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
    "SHQtzVkDjnY2vY5BJrtqtKowkjjcmzs9kY9aKMikgPtS51eGpLWqKznjUZeZUgpsPnAp39t8RCaBBUe1gZbi7ZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RHtQipWgrGWCx7Q5JRqhHeDW47WJADEaXcz4cyjpDuzTZcFJ2BPD4z2zMpEtf6PGXv3bBkd9uscp1gQJHbTUbg",
  "key1": "44YbtjaQcbUvXk9eSBAheH3yhJSkdvVVZPyPGkKSv7HDk8bvxfiDZ413JnkVoxjvHC2UD3ggEPNaxGkveVHzdWPy",
  "key2": "5cpcUFjMJoGKJdChtzeTy2QZogU8u3tcf7bXyb2YCyyP2GjHqUDAA5HgxD9aYJHuN2LgEZcVrUaoxed85iPWnPd8",
  "key3": "D9dT3dvVrEhhKS8atWxASwmuVTvBwMD5SsoVhcFTGpSLorX6XZTFT45RtDBGdqgD6eY56GmiMBqybzAqE6gmRKr",
  "key4": "3TCbBoDMEMBwmtucXaDtw4eqFyxtUqdgzHJv7a14rgp9tU4ncNw5uZH8e9mvvunyZJEBWRepkh5TkH6MwpSFQ146",
  "key5": "4gXvwE1NDpjTM2LmqFpwWnBZGa8R2KHwJMMY6UB81VSGNbFEirpj8zDjoKWpq1EC3UyFuxbPYSzJ8WekB7JiB7ng",
  "key6": "5pmuKCc9rArPJDhXHJErmd299TVjPp62KV8s4d7TWXXVsub7AkZUd2g3q3SoX91rt3PdYftwKyvNsnzz6eYwTvkp",
  "key7": "2tKVZiU35hybKcyzQkSwaFoN7C6XtXNHSA4LU7C4LhDPAUCTuy48zzQxoUW2q363EERKY55YBAHcSvGrAPdUYH7c",
  "key8": "RRiWWZFXkRh4C2XByQhyUUw3mDDY5EuQDBkDMVmqXhNmUpef3rgNnPehGBJaaptncNLCW14gftkdt3rjiGDMKVC",
  "key9": "5xqnDuBaqeaLJtLp52aCJdRhXCNQurZhMSpWe9qQt3uFkHXja7po513GBXQsKkycuyaQaM7J3FE8dFWmRULg297S",
  "key10": "5eHcz7rhPJcqN9uerwKwfFSPgkBPwy6BXadDnckHcPGneW4pxWmTTyfVS1WeLiwfnmMTVUCyKLh7FMK6GfYjsyMy",
  "key11": "3pBFi7bxpx558SjgDWZrD5y83UFq8x265xdCYMonNED4TSuficdu62Uo7SApDw7AP3TeBAZMu4nLUckHEhjUMctD",
  "key12": "4rFLLGchbAEVQUU32MQJyYymAQJ3tRhNKTVuZmrcQkh5hYc1pLhysYS26mNrmFS5ZCkW5n6fVkYSfB1AhQ4xkCVc",
  "key13": "2f9oBGwEj69G5uS9KQ8bVNNEQ6ArGEwmRVUi9iLvCbPvp84GoQpia2j2qPNiKHJ5UoC9aY8YUAgN2Ur1x28CekPb",
  "key14": "4jq9oRPsT3JXApa224LsxS3a5oeQPUUEMfNac9EPdWrrrJXGwCc7iuvsxX87MqbfKciCtgJTqwdBXLvWAJK6LLKx",
  "key15": "iHCexcCTbz4i5wNnp942RjMnASHJMTiYwCnVuPoH9LCq7D33C7tB2PaPwtN8VCyLy4DSH6Kzw42qWoK2TaNT2nz",
  "key16": "54e1qdsx2zBzSq98NzkukPduCMU5FsZdqqmZRzWDQ8shULSNXCKyQAmFRbiWWmmXtVUZap6mLpHyBUR2q7sTKfYh",
  "key17": "2p5wQgVYKndM2wjQkPRLcUsCWEdjvRNqqHV7h2uxvFcPpwRiK1r9pVK8rqJnNz3iRr9KcqrSo7RKBGxRYuiGbdTS",
  "key18": "encc2aT2Fk9eEUW318QqnMLuAAMgVPUYaJYpPyjzjhCuZr8eC5PxNnVf59eDEodSEASdx8JEG49ux3XwiLDdzDz",
  "key19": "4XmrsECPxsjaVDeTMsbzGZXQz92dJCcL7ux2ZdRYw4sHEkKRcFdRh52w2ZyRnLcbrNABzjrSxNwgMbrp67WUv5UZ",
  "key20": "4d1cHp2jvi3bdgDughghkFEsrwqM1pHv3ZmE8TcY382NB2KtAbap23R965DRFJad4sV3hFbpHsJfBrraupuMzwhS",
  "key21": "ghHZkyPaz12EDG8ze5X7pHt3JsZyK9ooHFjsFBZkqZ3xocLaaju4zVq3o4C2CoXyDgejN7Gnqy4AfzcdpFhL1mM",
  "key22": "5cJasnLS8HsY3v8EQMTMfHp5DLJRnJVK5tExTZerjPcQo74PEqSM8V4JCjL1D9wJiuRhK86WzEJuLk4YGJw37kRS",
  "key23": "rCvY3E1tfhNDj1Fjp7BkCCeE33iQmP4hTc8wue3mR34DViroaNeVciGn4Dprfhws8XZv6qwTQsfwm6u3R362eKG",
  "key24": "3D7s7FgNJDb66DLi4hLSPnGgtWG17EXJDJyqeJ7GUquXYDot1VN3Ld7XDgXsHeWwoddNyYj2JDBq6tEeAPimijh8",
  "key25": "2BNsjkAiWn2wMhAS7JHxW4UvC5ejWyFcrGVqsPwGwW7h4Kyy1DyLnMMf4z1H2Fk8vejedEsu4kiJ1caMuBii5FGU",
  "key26": "254YVBHeM5JqFEJcdXwdY2xZuFsEDRi4W7y32uJzDDijqrerAve7bfcovH1rdPwnDLbppSb7hKrYtn6HQjSRgpgh",
  "key27": "o8Zpqy6r9dEdyaeVFMEtbm61ahoCgM8GQtGEvFK7GAQJHKzBwqkSJXwNsuQjd17JEuMhtreeynwdBYZJ63LMsfp",
  "key28": "37bZiQzUZQ9wvXivDv2V2QFwPa6kL4tVyTMRpM9r3t3DFNg6x9bGkTtZ9MFYbB8Wka1gCjGcWpAaePsgVmRmJsDc",
  "key29": "3eQa17p99vK2CKtDCCRNu7FV8AJYvLStizavqwYa9Vsd6kUXwRRBU42Uj87UNcJqBquUzxxuy6NnD1tixoBjXxE9",
  "key30": "5xxHW358SwRJQfrQ3tDHTJfpmDGwXEJaHeM4AK57jWeVjmq9SraYXtSFRfZmvmJd62pobiQJaE49oJSr1ftFKA1f"
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
