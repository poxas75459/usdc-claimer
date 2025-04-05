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
    "2khKymbbgq1K8KXv1BkMxqd93emHjeEiJYGUJy8pUndSvp4x6DGXjePNzeVZ3iwQpeL98m5qixp23fEVqrbKwsvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UsANkmtZMHUNDWxkaUVi3Si8Vsxy6kaxyZSCtMbBJtmLpeYNgAtMV8NZooq7QgLGJiZWetjywPsjbkKKtU54324",
  "key1": "5KPWg8vsyEnrwdh18QkgPqZhrtfgiS6MV12KuK985nhdjH7zay4Qjzfpcut8y75XApGLUgsevZC2Yc7vfnCnX6XD",
  "key2": "2xSzkrcpaojvVZs4rPesRi74jgLfYJEa24Ncqbm8XfQAMzvPuGsUNAj6Dtcy9Kmj4DSvzCTvyJcgofGcFDw5K5xQ",
  "key3": "5Dsvm1F8T6ZMiVLGbvAPi69fzTrj7FxALnpnH6XsHtKsR4hf2jspsh29ngenTsE99F82pWKy89CtKQUG9r6p1Ad1",
  "key4": "4UYwAwjZFaRJaizcafstUUBap5ddvGi2uuiVz7xP4SrhKAmDLWqHGSVtB5osBd39sb8xWDCXnhsYqmfqN3rxSYnL",
  "key5": "3yQCoZvkLGoTywpK8tDViuFmHLQFQXBE5tQy2ronvnfV54Lic5MM46NbaTLzNYebZR7k7J1NujKLa4NAcGyt6hzw",
  "key6": "3VcKQFJXrAzwhVobwD2iufmsqFYLAuGsTzMwbwXK91NfHykdYpHj1JL4cAa82LpmnMk5z5ZSHnL7pp8NwvoqsCV3",
  "key7": "uewEd7Jbo5wg4SYiNJDMrRqxuqkVcP2AkHiYb5fk8SqkVHKj2t9TyGGyqLBmdw5PVSi1jDRvBcXMXx6kCQnXYzw",
  "key8": "5cRsRurzCpNWNt3LVc2zSB4LCxFbASsnqfc9uuMwstCHdDpZUB1HTzp6BkmFo2GkWa45eAaH63czbEx81zkmksuG",
  "key9": "66ZmcbbouvQAuETnxWBbERfRZGiWQF9fqf7jeUzPFqq6LvjA6B5Ex4QG6zUw1jDhctjk5ktVKTCg8j6ULsRWu9kv",
  "key10": "ZAME7uJd65jVWJYgV19g3hgMCnfftVhC6L7pdC1k6NvXcT6kDT6e2H8K4AG9LHUKPkK8HRkx5GfNysn3r6BP9ut",
  "key11": "4dZrzjufdMaP6reePQEkA6rUCz51C8tVWP9uLScMBy1PapCsPPjWMJySeZSGXy3yUAem4xjmT5hD4U7dFR6RJ7y7",
  "key12": "38GUkQ8Yg2EKBHhMzuht9sHgWCj8yfbgpQAMJKpCo2pUssujVtqhfhqPPMmcskgy4V6rW25mJvnRFDqetThxhJwv",
  "key13": "4X1SpSYzLgm9ejMjZUnbvA9TgEqWQc2LhEoZB7ABJYFbNKNLqW9fH7Z5bcZqjPkFB59x2uNYXQRwXHs6WcSKmsVB",
  "key14": "TiS1B8bjFS1NiGtJtgRG1GLJYKX1GXXCivmmyLSQpqrYnZ7bcMH6XHaRAWjdZES8hqXAxFSq1gKBu4ycZX6NVLx",
  "key15": "21PxwKdMW1PRBNRqxtKYoWvVmTsNWbnk7H1xeUqod7wZ5nNjq7nHzdogmQTEng142kBz5Jiu5iQ4ByYG2WRYpPJH",
  "key16": "5Q9xEaL9NzbVXPQad7Li7WF6Q4bZXry1BZSQjXMLPnTYyEytZwtUH11Cz3Sa14Kytvw7B3qyB5NNzAvDK2ywCQb6",
  "key17": "4S29sFRtwQhv1afZhBKsagVLU7MB5s2HEcSkX4Ftq1JkAbxrd22DuzBuqmftpLdxUKDDZMoZMcGfuVDiNHkwQFnb",
  "key18": "5mQjEThRdB1Tts33Ysw8ro326Aj4VgaQoGePtRcY1NnGBbuWymk2BEd4XriVhprvJSZTNZ43P8xdG16xvzxSXkyK",
  "key19": "4frXkccnGN4MX5wmi6waAKX5otZNDQE68XGNPocfwCKLM2ouyWtgkCLt23GQjUZVtE498Qm4FbjHmveWeQvtjw3B",
  "key20": "2BMMBYkhzYJkPj2GhKEbkpEcsxF4oELMYGVkx9DQJfhtePhxk3YibyXs5K3WwUFDgYUYVx8zVZK1oGyJwJbQFb3m",
  "key21": "5JWpDk3cdzLHFLDh3ptx4cndzMA4UCLZq65nv6Pi1qBvFg9VPDcjwGF7wJkeLBwXm2yKa6TeeSGBNmr8ocDptRYb",
  "key22": "avbhD3W6VUC56MWJ2XfxKsNfdgKjToZTFZ4WNV48mXR2gbmFu8thaW4cx8fKsBuzvjuuYLXQmWnqNx8FNES3cBu",
  "key23": "3KmkWRsSuju7RVTgktar6yiSfHWyRmsiCUmzpEpYbBfUXGNqBgxjtxfQLCUJZAFpYBZMcRrFdU6sxpKnAhxSiycS",
  "key24": "55chvJpwVCVPCb5tsAsWpZUyVH7gX66aGFiin3ZPhdAreXGhEUaRWJGkc4pa8q8yKq7bHHfKBpFwJe14SLCKpXrk"
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
