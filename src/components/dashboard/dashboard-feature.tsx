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
    "MFSvUGRjjgXBSyvSF69euT7mdFYdHAXSQiHjynbe47FUUTULqzoJK9zr4f4pqGaDgFc9nahMsC3CsMnPK76KF2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jqQqwJYNSoNfSciRf56tDRVuZQzRpwGAXdLhnEk6gj3UxABLE7NTywBPPJokVK8q8MEiUgNVWNL7YhXVAFxW19",
  "key1": "3typREUn4hdy5nFnRukMArGx7Sfpn1VFsoqEPaQAJCzD2kGkPtw4eJDKQHQKAgerEPPAVdB3Z8xpcP1ZsnTPCssk",
  "key2": "rdUr9TSTKGC3b1czxZXZ8gZGYfTfcmGrLQPN76KHAVQTp3pnYJvXUcA8kVpAoFKWZGZ5H8gmZ9yDsfuVNxBVhnk",
  "key3": "247GZLtfZLuyyTX4Rcs2TwE59PZxhgX1MUPqMKPXtZms7YQsJZ87NeyVWWpUNpdbbaLNAseswAMnWN8k2bFcoogr",
  "key4": "3NjKo6TtHr9GRkiquiHm1mU3fThB3enH5RTf9anmi9YgPX6VBxeYDtg8UB9p7RahFZv1tBvGkUoaC8HEuCYPMyUV",
  "key5": "5rwBDzZySpg8qmFx2VvFKdK5Wac9jszu6q9UYhC9P7C9sm7qFPVpvJ5zoeUTA3VQoYxd7wBz35Tbomqx8jNQFdxz",
  "key6": "2tp37AKtF6JanmG96jh9MiqofyDgonj8dyyTHmug63GygRDWKEi2KL5QLy4LJ2Mf4pd1m4Q8GjTzMDFB2MFDioyz",
  "key7": "kWgTuFoGeZu4q3SmLenr4K8Yujzz7a1Zw14vWNVuvFzLwrp1vF5aGk8YS9J5wVsXDjJCJ3XnZpi5Ws6VYDoU8Yp",
  "key8": "4qsFWoqZ5m5zWsWXVbSYk2JRac8RnNFz2vCN4iX8VAboim51eddMEP7N6Ufg1Y8p7omGkXWH5a9UQSrZCYkmZ7vW",
  "key9": "5Ns46EsxnC2h58s6vFwMN26PP9bCpsX4Hw91oE9ccVsGw9XJXMPm5fk3ATjq5sPc4o4ZZv7xQe1Am5LNzDBuZ4BR",
  "key10": "5EMaEMVENRnm6HSnzxTc3jspjpzRDcaEAMhfdK9Q7wfyPcznkUCAAoj7DPAXLwDtwNygEvZiuHZJLk1jVHF2yU9H",
  "key11": "cS7foPQr3VBMYszwHNGjiUFtSPVAyGZxNAr9doTiunoHhmMwYSTeCKRDqBoA4xyd4xmwoHUy1Zx9kF6J6ZRgN8n",
  "key12": "2HnvkP11JsR1bayijUEN2ruZX5kneNnzDDM5ZzaQro5LpKWwPnmmZxFDhrANbQwrXYsGwa3SJNSaZ7m1iKKuhooQ",
  "key13": "2yWtvDhPfs15FcyKzWVsnDuLcKrPPskFNWMGfERYhvPqrmcyjx7yB9kEauWmkeUGL6wUr9otmrJVKvxVsu3W3Hki",
  "key14": "4fFeK2f32MZcsGF2Q6LPRsX9ZwwbN4kgbduQ9peNp3QvEq6L6hQHr538CURfzGYDnBJEdBaSBum1D4qtsuiGiCcu",
  "key15": "4HVePrCUr41TbX6hnzqU932PDpec1RXhGzkhrXoaESgn36EPBiaAx7GkCPUsU4vQxuGDKcxM5sv94t2p6Hyfger7",
  "key16": "5m5SeDTbaavV1DfuuxnLVyr8DT2j6sj9Jwi3hSW5y7HoNHA1W8atjo2Ra1jbZmBsbjEHGqKynTwCB1Dzs9sCS3xF",
  "key17": "5DgRrSmC2TuVGPGbfWaxnoP8YkQe2iDpNxFv4j1zLG9Noh5mfZoGm9VzhMebQEia6m2f5YHRtpGq8gPxQjtCYBAz",
  "key18": "2R8LxsmwDZ69sdJbMUK7dSkh8vnqy3cnbd3PX5fFtB4UgRA5oqfnKmjkTQzigXN2DBVRsTy3HkiFmXzoPHjrf3fw",
  "key19": "2q51UZAMQJPn9J9seyE3TcXAoYM8J8RqHZe9uzR2kdgTC6fwZavQhnHD6d5wai6KNN4iJySdD3n8BFgQsBMpc7U2",
  "key20": "4rQyxohdZuQbbkeEGLhmC2hRAKzjm1YrJYnWqQ47z9poGeNz8FwY5YzUfqez4kRu2X6PBi1Hs4Zj49pTC6X4YNJj",
  "key21": "3rKLJ4jkFBcvomnXSxR6VeafcRrZwXjC3jbiYqQRQx3fSKYbxess5eCayLmhHvXxnxcpRCLdnzABCjrF4avch1JB",
  "key22": "3gqpuwAKFifkC8ANs1YXneHuopx1x6PnVxHwwS5rVkVGB8xdJDXRqUr5dp6oWi9dEpM8aNQ8NAPa2ZzHbW12L2XB",
  "key23": "5YktuJ6e5ykxxs4jHkC2mKszCYWsTYQRqNkBv5aPiFeLRx1L3nbz43Zf4pEwzYtSFNixmAe5HgnLfW1uu7YJHbrF",
  "key24": "4jHbbdgJZwD8dDBkbTArvRoD9QvoMdUwdEvFUMZ1SF5GTRTpLZ744yGNedD1c1BtfTk3BT9BibMxTmyxtUJdcepg",
  "key25": "5kzANLpiaVwmToCG2WBqCjgjP4ZtdWbf2AzD3jKWqFTvfE9DHdDFLFb9K41exrTcMtzrQkVMALgK2sF8NRqenEnN",
  "key26": "59NSUe9WNjNPphcDQGnZHwr2GwvwRPL2TJffBU1qJjNtw1j1naAnLkWC8gRMh8Joq8DLcsGrxPjQbLRJ1v21LUwQ",
  "key27": "sUuQJRAibnYC4fzXm8SgQ3224mkPppLqJHTZir2CMVSAy7kDNKzA3xdeYdKAHqRyDiY9mTKqnHK9SL2uMnaM561",
  "key28": "2yKbamdG5e3ETJQiThhWKZGT28Rynw4EkHgjBZA9UzSYxjSn7zRjc7Hga96ouexCdwcxTMwBQaF9stocZTbUGgVX",
  "key29": "3FUVJxrBiRksyat7QL9bRonJzbDQ6fF2Xh7rmZeTCCFNogL1jNBVoSZv7HK5Nyk41fKY1Q3hL9uEScfVoP5Jsvm7"
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
