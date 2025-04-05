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
    "3RWgAdMLEQXnykgYw2A3z5aQ8vUJSYywvcihb64F9UyZBLc5C1Enr96F55pN8HTPxCrZP7114yfN8DmmrxpigYu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjVx69MyY2NagzRnZStcQKTiT4yxTZm1PRbUNrB3cVP442s8kjsZAj993ehSd1MxQvY97r1X214SZ4Mb4d5f1W3",
  "key1": "37hqJBGa9RAgQtwUgryVptjW7T2wFnbvvSEQVpkNCFkee4BwVQYiE6EqQs9hgFcbHkTutqEQ41ruoBBZWb6cAUod",
  "key2": "4Q53nXTfh2eCWuaHvNUArjpvVF8qZxxkvqeyVydmLtPSyXmRL3xayBhfgaLtVN2vhapeZfM4ustXxpZn7CyfKgfQ",
  "key3": "25Lk4Ca9rzCH9f9akicdpWbJJWEdQovmjMt7TodXpJoh9fYu25WBvpt25iGfd5fHgN1mp4i1xPSMWcxQ7bWbSC5f",
  "key4": "23yqEDUb1dmCotKAWmn4q9fgWcBqqaL9cS7YwEb6MSDKjXTtur7YBSzYutZAyhjhcMrNTigsj9mWzXcu51mDYd8x",
  "key5": "5KBoRgvPm2hNEEhFFyvx1Noh2GG5bRSuHBboBkoPycRF8xw9g5DPY4TByEGPjNwRnN72H3aRwuWf9Lw2pWk8gDck",
  "key6": "4h9LnGiQk5Nx2xtVhLhphFFY1DasVSQuh1JEuWssJzRzVexVw43uJFgJHwqRh5wt9Vde9fPJCZBmiyZTBn8HTg1Y",
  "key7": "5LjJdPGDD6iL1aocsELJF4YtYAgPet2v54VUx9G5mm1Ex9oo7tTCsqPUCfjFVS1UfuEFNFxCxcQeDzk2DYRKXica",
  "key8": "59EgW9hJ8TWpAGkJqpwUCMJi8sKoPF5oDmhH4x9VXKeZsNWgE5eK2LNY982VqSW6onjna2pgjWGiiKyu2MgS8aib",
  "key9": "5wC7zJSYnJUepHc1jzaqwZqBu6vjDpJL7FyHfrtqzscNcPDgru1frkNfpKzdAaZKgTknpLpE1yTciHey7bYxJ4Pw",
  "key10": "5ftzqfEL7WiaaifJzcGHkRJWJ721UD8GWuAS2BRMeFLxGcdHdiTss48pb2wgQvgyekE655XpUrdnS8gJR7isg3MA",
  "key11": "4guFi1uq8WsUEkXzPdmWrotNAPUkzFeShst9dfzT5XMEnYP5TSkbJNqu6WoEdyHYeSeDgKstnrjyvX2dQjSc2nWY",
  "key12": "3dYzg2B4pMfX7HgYhErXM8Pp83WckzahbM88MEUSEJ8nGGS1J4a5kEV4mKEKrtX5FjeqLDVssbpkvoHfDh3J5E2o",
  "key13": "28VHWhzf3gj4cFhY7qwyUZxNvthhr2ULgfg1wPJPGNhqHeNwhfBjNTXU6D6RuA4gcPpxhUW2wQtG6xUXqW8WsJnq",
  "key14": "3n2EvBUiKxMp3SnByavWPc8SKRZqn93QEDRhwryKqg6EWNveHrxib7Eh4cJd6KEadBwMwcgN31xMdycNSsvPvpBF",
  "key15": "TNm8Eo2r2ASgZ1d3gCNHdQSmpFZPeHTmSfRLP3LecPrLPDrZ4bsdrLexVWzoZyHAStjGbZuAemfiZJasvkca683",
  "key16": "5iyFRp9xTq4ZSDrvZCJkGWVi9Yy24q79F1Je86fC84j6S5rSgiQcRf94r1xocG3jrSNQ2Hph8juDwjSLrrqi2JCu",
  "key17": "nSpsTG5rp1hYLy5YbvauWh8icXe4xpQ4mkXQ9tdXowfbv3e5pyf1bY5Pt8vnHcM6qDEUz2cgABEznvjbchpwkPF",
  "key18": "4L48UuSVGyWZD37YnupxDzkJovzpR6oMJWdpXtj9e9cp6Y459Lmw5p1WaXQdp4v9ik9PQiiH34qAtMVDbNyof3fX",
  "key19": "51vcDXfbc92c8cuWNqeHTiuL6U6RftWKLepREdGitMUv7fj7gr9FWaJfmKoDqqaeMaBFy5nzcqQVcFcyQnFy7x2W",
  "key20": "61CmLmbgsZHw8QwYGcF4Fb8VUd3UJmSjqfzTZ1kbBd8ZJkkersPYugJM7CfZiZC9hkgm4CRtCNnWrWtGqp5zi4Z4",
  "key21": "4BAeRjhx59xX34TfzExD4EFd3VgBe4notxFdNdK4sqQQdh1va4XQ49orUDe9atknHeWABzzfM1rE15UiyU9GeVzV",
  "key22": "2J3hJ9vyeFVXLv2aTpY1a9WgAGcwkevPffpuRNKSzBB7eWxAVRzK5bKGrabxQjGhKZdN27rfgWodJcckYym4ukx6",
  "key23": "21vmF4mHQEwsfTEwvgNjPqf5w4UbMohqTZvRoDvdoricHW243vmz3mdUwxw2vBxBFsp12KGdp581xu1hZFQrT3G6",
  "key24": "Puxsf39seRPzfQdEmiCCJJRKv4TwAw6BAQvvLHvyUH7Mknj1961zWX8dg1tJoBDAgFaKANccEMMJnG3Pjt6tpC7",
  "key25": "3oqjmFoxjW5VGiTH3m97mjKWk5zjUiQwsK8zNyuVaipReMUkYa7bBKV6b3jL6c5RmjQaDTd38SvcSPoM43Fo9TA",
  "key26": "2sEt9eye6CzRPBTqvNvmiUwKBkzcazDbLsyzNiYnAEUA75tq73KQ3asnQwdqTZURbbpyBBKioambFQXXet1cLETT",
  "key27": "45vHrGDmJY6hh97bMkVZxBmeXsdwJu28CvaBoz7dAuVxFz3PYhtAy7WtwChwiwLb9mPrgQRBRysDCnZSCTkcNjc9",
  "key28": "3CE33iYAmfko3L4AnYRR77MSzGsWSe3aYAEgyyRVbBX5CWmTUeA7BocxFreTgYvtwJFbSQVrtGX9GRJozvTp6PrA",
  "key29": "2EW6pmfzZ7sSpVWgbgPPPuNNpfXyk9oCEwBjLUaEoTwBQBBX7gKMrAJFCbUx6gSJWYjwCoMeMdwKFJnGhYcCQk6i",
  "key30": "3R5G1Roz3xTRs5osGrYhXcpKohAXDHVCMx8HTqeYzCrL27RkWMxprimdVqA8Vwt8oMncARSwQFbn1KCkGg5WDc3u",
  "key31": "5mBauzBH9dimtKaTtC6gVHCUQkx8Noy45rBqxbVAXYpfnG7dihb2byrgPnCWg79YwN2gnw4RPCjmtNviGUva4nRt",
  "key32": "5VrGUZcUShYivxvbWXECCAZ32VdNw9Yei7AfLSxZE2utxJabUjLwi4JWam8tNhWwyssUk7Qk7vnyPm1VjAZcBVuQ"
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
