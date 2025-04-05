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
    "3UQkyKZiFGkTHtYwnskNADXQoavCYJNEZ7DutAygZjC2i8K8Rr8qjMjiSjUzCQihfECYoit7TNH1VVYy6zYvHfnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hUJpZp8eTP6zjRfHJydzHNxP7yZD9VyiNPTvGUFgMSLN9HWLiNAs2AW77VrVpeZZow8DYjXCiGjsSCxddE9C9t6",
  "key1": "5woWKi4qKi9HP7aopbQ6KSsafoHGDMAAg3Xfeq4GjvZfwgFAJfXSG7emqqMvcrrNdnLSnq5nVoCpXw8xSoTmmtQV",
  "key2": "2MRrfhXnXuiWtLaiV6MioxDyLfsKEdGGzhHir4paPoaASarqUUdYnipcMHnSSZux6ZaGAvzfzUsU9YKtW2sHG83i",
  "key3": "23eioqe1KiFWZJYDr4JgxNXFvZLh9KuecZ5bXbg7T9UD62B52ecre2NWC2VqZuHyeh35GPbqCbRhYJL4jRQoQM26",
  "key4": "34sSC1cdCo8vxwnikr86ehtGcnhggnNHEQDe3eRkwKoKFj35embmKKXJtFCWao9QrNgQ9SRC78z3mHizSxJQt1or",
  "key5": "4YRwuh75MxnDG37LDHt8A2C59K3PCAzrjpBY8w2kMMcBwXRWaWAj9MK72uAKntFvjKpJQtyE13sURyhjjkS9PrYW",
  "key6": "5xXmzN9wyWFtnKQdsT3QhPGKKxjgxJ1rQpuTwK3f2zmAwrLAZQpZtm5VXHHJCs3Ws6LikNyapXdyYoCjAksk9m6u",
  "key7": "4bFRaveeP3br4PSaBs72M1Y4U2byxvndMS8UsTzeUEUGCKo5xNqYgoXonVMsixFJosjGDFwLrJdGJRs9c4dRm6uP",
  "key8": "5WzgRcwnjkinCgeuaXAg6wJ1SKgP7Atua3TBMWarBuxFyc6CoN15z8ABhr3bDTnd7sR4yHYTtniXGUe4tr6H2Q3m",
  "key9": "26eJenuJ1dYaB4KmGJPw5F5Wy4sxwGLnTek7zMGePyVaUTdihDXaD8RtwofrYHQxpgyqAKqC1XLGUgWf6zU98reQ",
  "key10": "2nRREMfLT6ihuFsyHiU5UyVkfQiHjpdyCRnSjtN4WSb71wxE6rrS8CyCepc5mS2wwmnTVjUShzWdyXanhSk6CJLo",
  "key11": "29wsAc9VEi6D48Vx1VC9oojYNArUewXFTV9pTtLrZEt5wfbumTw76ZRNnF2gzdtipnDtXHf8qazb7SWk2nzU2eRr",
  "key12": "3WgSVzRDnTYdYJSyWrNCZidAaNYdhbd1i3KkyQiCfepxGpZ6P1djftvg4zxL2PyD98v5hV9nEzskT4sjRm5o173n",
  "key13": "eSjM2ay1wVRDeDCnTiRUQYBgQohDqZhi9KmQhY7fRv9B2VkfUddAd7AzYzNMa4SwScnufwT7reetymBpQnMkGzW",
  "key14": "4jXRQdxLhMsHiwz53rtVZWqNNkARQ4hBpxyQZ5nSptyxHLr895m38GWdVuspMYQz3EfC3dWv8KC1mCj14Horw2JB",
  "key15": "364geLeZjikAQgAa9iLgBFJsBDcsmmpDHu4vDYjNbELJequbqZKx5w3UsiPEULECMJA7CS6rKbtgL8zLYZfnVDXi",
  "key16": "4FzXUXcWKDaVGxyZddbkWAxn8TV16GSDjkRoNhyG9RtwAhzUUjSgiDAK7opeJKT82BhXyZexpFxsrRMuAr6kajkT",
  "key17": "2xAdwe2o8sT3EtJrkL9WW6LjCrB4WmFrZWP7o6cwiJC2NmnopoSN9PQHSAtBiHkanmcdgVL6gc99uNDBizN1GwCQ",
  "key18": "45513UCTbpPK1JEKo61K5yUN3Twjob2PGNL5pG2GrkSqXkMAWoqyyFFQ4DYfyNq9aSRL6eksDL5qx7ZkvjS9gwcE",
  "key19": "2fG3GaeiCCCLsvjPhXvpXE9soaf3qbi8nQTnDCRypSG3VAw4wr8D6Y5huAcCQjjPouktNpR77vV6eQfs6AWH7qAG",
  "key20": "5AXJ6X6bRtNFGkZaVXpp4rnxozfhsC5ZRFkhHH4pCBCE4aPy1mYxg9kveibtnWo8KJDTyhQ8bm5WGcuq1N532M7K",
  "key21": "4VnS3ShumLRQrjY3HxhsX9GyD2bym5oNZKdQg2AZpSTCoFeSih1BXJH5GWxuAuoCZhdKTNyyzaHT4HDLThVrnbzF",
  "key22": "4cM7q6fRuT2uRvJ1iBBwoR4StAsVqx74ExMAixKZoKxQTX1ekqPb1epeNCrgu5wxvtKuWFomEFDZV2aAWN5YFxcJ",
  "key23": "53vrfmhg59YQnGnTrFXnV4SjrhpXfxQBPoMB7nyCFiDgbUKPfEb8YMoczVgb5oNyAW21rJH9ZtsJUxB4SAQeoufu",
  "key24": "5VEVA9iuZcz9B9EpdxK8bvg8mZKzNC255wD686W5XB84LurnLqZrW7KnuwGFWN42QXHajW7FitKatVM5ZM1Yg8wx",
  "key25": "2dvZLTDNG6THgHuvGwriewNzfS5Y4va4hXj4B2G7E3bTVcvoG6GbmiJF9Ukiz7sdwjmubQqngPJmKS6anNM4EHir",
  "key26": "39VsocnBVn8RAdP8h7Kmm84xCJuVhmZ892qBC36HGs474WNWNGx9LXMjg25pB1iAFTY5ajNNGeQibvg5CtvZy9RD",
  "key27": "4XCJapDkbbSTffXbJmvQ6bVVXo43npZ1tsS9QYjMLjZeH82yTMXUGqPYLDCzcZWwX2jgtLcmLuVAN1bYzWnPyPtN",
  "key28": "4T4W4huNCCkLKX7aMoXneyTZZXqoQbVGogY7Nk9Ph97EuFG61nafkjtWHPiHSWHEumSdisArr5iqbeS896dxkcND",
  "key29": "38iW2KaC8U8hHAm7kgTP22iU7wTvLXKqDeHHAWL6dKcerkFtpcUzQJbh7fEm9Q4cj9yPSW7aWQRDXjkyhnogJfzw"
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
