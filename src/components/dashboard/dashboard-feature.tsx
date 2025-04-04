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
    "3y5HCqBoMFmAtLUTUiEqEeBHoxhSja5WVJmDuvRAEfvET9KdMbGqYuHVbV3h6ECQAjNiRADvRxAmqmBksS9VwB7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zoU2gqTeazMrs6fs6uiENr3TrgypXoG6kTd3eDtuPMo8XzWBH3ougReVBxBv5Np6tDt38GxhrsUe4pPu4RsrGgZ",
  "key1": "3tQwiymNcDFcPFhKG585k8RJ7KRkjAHWp6cdSBVd1rjN9HMysXRKMuJyzhtixYqujMJZSYq1xG1ba1EWakHZvhCk",
  "key2": "5rTfgtE32SqXdAZ4RQnPtZeHGHvKfkRwYJDjcjtaE6eDMTivwBZbcAgaZJQLeLu1JsWTQRRkxtGpaK5tEe6ydQYb",
  "key3": "122yQ8BkejbYgFfehAMcQBEGsyweiVHbmTKyn1RL1VzjBsJacKsHRFCsy3JzXQsAJT2yPT59z6KYRuZZwcNZQVtd",
  "key4": "47EWzLmc8Gp3U1HMFnrinp5C9LVdhemt5kUABjZSaNMEAJ9ERc52duNiRM4ema18E6cQLbVGwWfdk4ta5RkfbBbn",
  "key5": "4kiWA5pWXXHiAb13ggoes33U4eBiRSma9EGUuX9ejf34ffHJzJDuPyK3S4hMzgWDLZkmabHwmUQruksW9pKewo39",
  "key6": "5PQaJzjWMuDLq7mZyMnqpJEKthfCM3DxVZVExyL4wFKSnssMvp41d1eMHhmS4tTPeRT6cHa3zvqJELEnDDSpawdD",
  "key7": "sfq2WkoXvuTFnft71b1RNTYEu98pY7EnypdYTDiMBjcf7CEcVcn8ESHbDxBNGYXu6RZzzUdnyU9TSxvDeM7rFTg",
  "key8": "3tPTbB4PYHdf9F1EtL3vGWfBm5PUqjRxAMznD5TcKHgPdXZibDdHy2o4R7zdte9cVR8emKGMtC3Lm7y1eHxa7bLk",
  "key9": "2gTFwpsphiwuufqg7YEczQ429V8ZfdFaLhR58mjnZBD1Ze8BGVjB2fwob9TaDT2DmaZSoVuTDnQLvXkE78K1kDHY",
  "key10": "5CkM5m4a37XfhLcZN1Hx5b32wQU1taako5dnTV2CQjMCgbfHEgDhjWBF9zB8J3LzywZGV2wSJoHdPyUFeb4vGfCj",
  "key11": "4rxZDBuipmxRdQqqhX9Mvw8oQCkG9dufLsRnTaZG6QA6nLFEyA6KVe6xqUsd84jYJVnmbTJwg7CsDfeWS2YRNLdB",
  "key12": "4LnBFWFupm1hw1vfjqKcV5WEH4Paeks7TFpWTLk8M7d3mDmvGoT8GFnxgAMurQswcrT1o8sq3RLWJXwthELRcRak",
  "key13": "54u5tsjUmYjDveck2CVSE9zaMA8bdzP2Pd7PLnjvpMovbjsdMtuzJuxjjPa3NaC5WjiJZj3dCB7TWb5Trg3yLWMy",
  "key14": "31vV41KX2Cd8WwaySkErixgfNFdAg2mpu2qiyECckkXiHPdGpvZEULU211YCu2AuHUZnDvdaf2UsMsEBsoCua1yy",
  "key15": "2wUTgTbu8o4WdPtDAbyTdeWvPB8mPkiStLNZtm18mYRzpJrBwDvhrX1aSWm5Mye4GkoYCfUGSmc9F149hvbVzJkH",
  "key16": "2rUhKUQmz5rG7GjSF8ookYto6eUHhGCCFLZwnJMMk8wdQrwHqX9Vj5qviaw8RL3b23zrw6bCa7zkxkwHFrrV2jiV",
  "key17": "3TYEANv8YoRSLsmD5DDcq2yeTrbtNx2rvnhdB5KEgtoA5tKhU98jSrP6uSgdXstqfDc5uYwjqpQm8fTdDVcKbxqs",
  "key18": "GcEQk6dQ5zgQ8CGapMLn7Gc1YMU37GHiSfxu8PAdRP4s3JAS6MLhXWQXgKDT6tCYmQxDjXvqc5Awds9gBp8r7En",
  "key19": "2N8T9X6hbUH4cKKyMfTMy1SUUpJrUEDfh9w9eexc5zJoQhtfvtd9c8kUvishm6PHi3HZS1A7V7a7Z5XXZr6RaLTX",
  "key20": "5nfJXkfvvfN5dircZRi8rU3NNCU8SaqzBr8ZNtW9attHu4TwGvkkP1fQTCsgfrDw2X86bC9BGw4yjLSYtpwDifz6",
  "key21": "3s974jqnV6NvMZrm3Zykn3SozPYUbXXjScmd1DQiJzbTBusq28kC7PpYipyX5TMWXpaoGpU27vLSHNVwiug7g5Mq",
  "key22": "HZSGpnzgLzmghitQECjmjG38eUy9HyT4juaE9hpJvzaksnKqA7duKjYck8PjDUASoRMawwcfY7PZg8RMNBbPhUJ",
  "key23": "3j3tWNSsoMdd3J69eyrYpgHckbFfkxKjRjANwPAT5YANGt8xURRFBwa9XEbzsLStz1dKzWf9NxPnmihZqExrCLy1",
  "key24": "3YWhfUGajTe8vW5BPvg9cBaF7oD6YWtXjWcWYCdEMvoaGocPQk2xH1Ju4CbQg9eDjx7vGLaLHyXF1BFMNUu6grPj",
  "key25": "3qV94gTHD4aAidcC4aMrqV8myjPcb6NPLHaq7L6hi6rPygHrQSKx489vKPCpYqnaqgxMtoJJUMj6rjLBpgjGNjKX",
  "key26": "4vsb2DSKztVy3mY4adfEX6iBhwpZFv8M1xtpM8F4WCVS9F855gheD5VFPpLhUtjePoJNQD254hbE1x34BbdmJ7mQ",
  "key27": "3FSgRCx7iSfUA34M7jev9eqRceVYy6pF1RwBjNbXSnfvZBufSfDAZJVVNmA3rXRbTsfwC4fzQVUrhbQYfE91SKcE"
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
