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
    "4MVaDhhKwGnG4YrMJtqQbvbXMdVTaWkLXeVH2yXRMxwgAL3KqtEogonhG9X1w3tsQz7Q4CUa5v3pPNdb6kSaEMop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qJpJAjCJmP9uMNvAPZgCBmSUWsZdvuWg9ZRj1H4yhqFJs9QRCEYxUKjNDe8CCBf2D73ZuuHRFZaP5FFfAgSeCuS",
  "key1": "45uJRpxpPYrFL2gCY7Kga7yzJVx8ZzjbdFYMoyLEVbvSTAhWKwJMZ1GcApe9uKhgJJR93hRpfUfcgRLVnHBTyssW",
  "key2": "4maJQrFmuwnmgRCvaNdav5FXbw1m8r9x6tqZCAnTqhbrsSkKEBBGRrhr1B26WXQwgBubDDvbyQpkwkwoVy3WNVU6",
  "key3": "2d3HwKKv6vLnaMZRQ2zZqrerSRorva3ftwzWD9ssDrFAymDYTMppQk18LW16ZFhWputdh7wGeyyNRa7DWgNKdhqe",
  "key4": "3QUV8j8Vqgkc2wr7DCHjhJmvXFm9nukePgeVXNzQWMEQzHjiELDMRBWgGpj3fy1JpnKoNwh6zVDqzBrnVwLJsZn9",
  "key5": "31TK3N954QbLTuxx3nvAD74x1R2nkTKoZNgCHBZ52rzJr87DaFL146H2VYQckRi73rxPuoRYZc9Whh76ntvJj8nc",
  "key6": "2ccv2Qpu7FosTZ2subjuyYGwss5HFvdPkLZrj4LAzzjtwyrWoCY74tzQsHQ1phXfbrUujPmjV7cSdRWBfNFvdHzn",
  "key7": "3qANLRz8X7nSDyPYZFNCKDve4qXesr5iMPMzYkEteBZ6zyVXeU7qAQc5zDLXvZWJZ8ZaezaarQrm4dZiMJ3evsww",
  "key8": "4gU5VmAg4Qs3WFyQLJDhSViSbEzuA9QGXyFJWH1GTFb9GoAAYZdhWKu1RiwgwgJCmrnjyoK2xcTgZ8LUi3ZdPj8X",
  "key9": "aTCjQHw5HB8Znti4QbVGT7yLqPYh7AEWMK4srGBhnQQh1XpRzN4zuJTppvVRV1mjFqZAAnPsGPEA2eHnhnD1j7E",
  "key10": "4sNExWBp8xbSUCSEZGa4b2Nd8EVnMSDFJmAgWs8ZDeXdNYV4VjR7FgQS9az71MKqYePNgQYtDdaJdj9ikcHuZyNC",
  "key11": "3PEY5gWQZGnqXfaT8B5yGoXEyRck7UqdnfB9tmACwXccb3S6BUmxvpC2gXwVPYLyRevF3CVnyizJh6UMJpPAQtGG",
  "key12": "51CRqbiN6SKvewCWRkZSe1EaYoGYjivoM5dTxH6P6FjuC4ZitQsYy8f6zzMAj7H1DFTnPuJAqroCP2VgKY5VXiW9",
  "key13": "3o15HbAcRUydUw6okeCCQrQ1GHmTheVM8ER5msRCwAwC4Hk4w43DDhnzYG8GMeQFYyLysjzmByTLvLwCMNSVwDqn",
  "key14": "5rFUU5WL3dimqM9XsLZ4TVsBZtP4vSA9ZVhfsBHQp6zMCVV6LGN6VQJ5ZSSNABHioGAdJzRNJazUfKXoiSfNJdEo",
  "key15": "ym86RbKcD575bvKyTozHmDk6c5nq95PM5n2qM3PSAPssL3tGZJLrS43okeapKX9k3ePfmL4gTDzW4W39UcKBcCb",
  "key16": "3sTZEXzUqgRxW7dc4boCPsSgm8MrHUDM9CypEU1fRs1LTmsMikF2zC3t5DcXJsLGYkZwD9KkwC6DMgDDsz1acvpB",
  "key17": "hWmTCgAHEaHrCqno8JvxWwT3k9mZ7XV7jshBjDJyF8Q3mGbxqRAXvYXgGfhBN7TnhaNJ6U8EKWtkdCVkQnQax3J",
  "key18": "7eTJodXMkFoqwczTmn7eVaSHxSAKXxPYxrS3HQrMausUYQX14vYyhz8nDhT4YJQ43zxw8t1wCbQVxLZ5koepz1e",
  "key19": "5oVfhVXwuBqxz3cbLbp5vJezvmVCgJZBpWXVM3XoXyqhspqktq6imPMEutvzTQfVbwbaqRpva4TRFaSAghnZFcVY",
  "key20": "yfry33MfJEKbr6V9XPrMpmLNfAcfHS6VcmjeCLLNwfn6DCcNpmdoZpaJNsDUpgDfPtShVutHoE6FsmwxWLrGUAE",
  "key21": "2BcHiXgtkXG5GK7kv8BvVHcYUceBj8KjGUuZtV5CdLsFyRxKvBXoWrM34bzs1qWaRCDQXTmBcZm1AUeyAhFQVEfA",
  "key22": "2XqePUHLfM6gheVhp1eJKMwcJcrZ2t7P1MjDfxQf7oqpxWdgTDvGgqBXWEpXrKqyjLLykXx5ht7hgGFc8annhTqM",
  "key23": "2rMvWgBPj3iQfCrRtRo17B8si9CkxyA6cF8oiBzt1QTrwUYU4SHPt9L9odauyabDk1gXoainkFDHKJ1wfjt8p7H",
  "key24": "4xJAKAcUeVaPUyEBXtFNKiKpLUBjcKddvoHiw8wqszymseKa8vfBZnxp3RwTdCt9pqzaR4fWJ2ko58oXQn6g437T",
  "key25": "2DnzWHLUk1n1m4CserWTcvcNQUpXu71LdD6ZiquWFAErAwJFnpSE4tut1ZNDmSy4gwYTzXoR9pvNW8Wan72KuRpG",
  "key26": "5ULpsGRYbkK4btJvCKq8PeCPfHdyjeEXLmwtGijfm6z7dY7MS8tXiUJ8ALBEumB1dJ7q4tW7WvDJspCYaS8i3aaL",
  "key27": "aXbcxGtQ3SmUdhCvBNSu8AeFbzS8RANgVVPdgBksm8Yf246MEu7faCM9GijvR413CyBHSvosLyHnNRnN245CSrH",
  "key28": "4ymRdqcyFzyarMzm5tb2zX7zvE6bSJPqQtTXLqvGD7qm72qViLyb8umiM2Spy7NKRAXoU5GNiGooVM8CXYDohPP5",
  "key29": "2RKDQy2DWLF7fcLN5oxxFyFcXT6LLfJ3oxqKdbcJ2C2X9S5AUDWXghqRtUGRRL5M8s9WVm8usX7xfmPoCUCAo8Bv",
  "key30": "2ySBBgohVknyQJ4DGi5fCFSqqTzGJeCYFzZwzE7j4F8A5bYmgoW9aeJBt1XneDmeQ6CJVQB34Q4uXuwUHvg53gwT",
  "key31": "2nnc6CUtKZ15YahnoQ2GsM6EEDZpsoCu53uCD1C1vn5QgB5oGSpczgyof4oP4bDnDBStk3HYz1yeDWVWWCSghvxJ",
  "key32": "KAe7ir3vvfoSJzL6Kbkt5Vz5ay6NsYmqnXzkrpeGc3AVQkpZFfJavfU7fbdw9QMaRkKXqE7KWRcZ87SPB82vpiy"
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
