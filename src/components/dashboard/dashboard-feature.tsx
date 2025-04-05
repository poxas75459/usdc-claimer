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
    "4gPqJ1D3s1gi4MDZJo3fveaEJSd5Mw6R7i6oS3yZJTGcbKCXJY5Cqy3SZ391VumJSMwnDdWHAzUMvu1ptpLgseph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VGjGySPXoy8EE35rwZH5bXXF645o1dzp5Gc8QsLmHKzkffjvyjL37KKoqxP1fnsKrjHZwM9baeKxbZYNcogZndt",
  "key1": "4Px1YLiMABBMGMVCqXSuXJ9uq5EQghp56ER3XxCRwVgwvz4A4GQpNey5nZ6EpQwf8QpK6ZrwR7e6pWkGd3bftN7J",
  "key2": "4q4JaqbAyPiYT3TMsLJfyDPDR5QvHqWzRFG7jiWgwnNvdbATYNY2NKtPDLgptgP9Yt9KC4RYnWu5YxgAAdLEbTLJ",
  "key3": "wyb87nRQr5i1JK8ji83dpWK5XZaz5HaYhsBxvHoPZyBEtXD4irw5fBT7gPyJmKCto3dvFRDqGZZhKWADprrAiec",
  "key4": "YFCeQTJZcHGLdCuJsahz7vXxLcBSz56AX2bC4BW15EuewM7iu361Fnfr1McPuN4jpNFXg9DFvw6YWLPbG75FdC6",
  "key5": "61LoWLBnhJLkXknoaQQEnJwF91Be7Cm82hcwCgWf2pSYAV3KUs2mVLvMCZHncodTTSguXBKm43n66TuA7J5NJvnu",
  "key6": "4H2ysS743Hz858k1cUNoUQDnUpc6MDdHSiw7P6RDsdgWz5b76v3HcT67L8x3v2QLGaxL4qT8GmXi7QTm7TpuRnbm",
  "key7": "2JewK5NNBijYJDSx5mWY6MszBtUycXUpc4yqrzVY9tFPso38k8eTyFrCQa8YytJcPHxNQyzcx1bGvqKQPzRVL1v6",
  "key8": "4mEFs4Tx1gckFd1TbsRocVGQccfXzmCCJmVxenDiUonz2bHg6ZuYqPha9rZ95p5kg2iuvWR7Edfu99tZvH9KYcFd",
  "key9": "31PPcHJyu3BTcrM6odX7vQNA93acHuSbaoyfYVocympMjSJ1DU6vC1KWkX5LMN2bFupNbhnjhLiFY2VAXU4gR7j7",
  "key10": "2tFBsB4y6ot1QFZPj4kqavMBYJoFBh33HYvN1vn2nqvwXtZ8wRUtrg4bkpRT3j1CVjaKSbQVFwfJZs47eG5yq6YZ",
  "key11": "3ZjGssMXKPJiywyJMTRZ7dL7CWmXnX5xQFusWsVbtcSxzgiKqCzZuHqrBtxkX57sBsdTmyodzGrnhAKBDp6mLrMD",
  "key12": "rzufuB6Mjp6osPEZMqcqf3nQDWJux7VSSU8G9g8AC7KvPGsErhJiAg9dnSRZsYRfn3Fbw9fY5L5fGHKJFLMEeS3",
  "key13": "e1cHmwjsLPUCCwbrzmdDpvJSPdrqSTt2LcF4KGsEFA5CQJKBWKb1dKeLCiDJBdfvKyWzenL6adDzQDytMd4ef1S",
  "key14": "3gHa2jZmHEHeyCYV4wtyjQdXDieiSMRVizB13V95CxgCk3NnxPBF9uyMv186UFxiBJQuZyoEBjSD66dJMtrs5d89",
  "key15": "5tKU65PKXZ7BbARaWViSAw4mcVmBPRQEwLmCQSaH7VYyzZbMGaiR9DJjnR6kQYCPCEwA4dymA7Vp8SjiTFnQUirR",
  "key16": "3TkBCyEpSPESckA8ue9wAJEpSYbAhTF1VTnXGjQK4oCSd3CyokjKxvMtrvVaYsVxt3PFHuSgem2HJATQDR7LdTox",
  "key17": "2EBnQo2SSMEpUWQN23kt8GhJPpN7JzqNn4bE9jJAQVHcegtP111YcRWFn1dNjaZcAFFsKBR46WPx7me9n3YWvYs3",
  "key18": "3XcFug3ZupQUK9Jv2YhZR8zaNeTJt8nv9ayWKEtQ2mUEJxfWRNFHrm8jWNk8nTw6WmuixY3kuFA66tENRBuTj5SS",
  "key19": "663UgWG4RUY8z2FGRDXLs2N4BXTciQ6nUYawsWjcdtgZB5vJ7Q96m5SBdSZRDFEJTuvAQUcNsVkd9zr3nZLSrAdm",
  "key20": "5GiF7h4m5r1P9rrKCkwsttmH6BMm2CMdwqXKefzy4pNQtWbhpNiUgFPgyKbju99r5y3F5y9GxPVCxAxUbfNrcFy2",
  "key21": "35SLgxvCW5FgCu2dr1jiwg8KaBzz95vQbsXKjMPRw7kZKA7GRNopXhPSfAHxF42rvB8L87R1wiMnXDSSZ2iDGv1G",
  "key22": "8ZzY11D2GExQSbrgR3GbaTMKcMZq9b5YNSZQdsWWqVe4CdhvYzqxiL5qkKcLrExGDeAhTPgq4tteaaXfx22GgWn",
  "key23": "5FaoAdF48yT8ienfJ9ywnZ2gim5k2bwDn9abBgWFyoDiUQ4nDGPFHguUpCHqVNyA71PgtgSzbV1au8mHesoSfFGW",
  "key24": "5fG1G5PNgVVgfNnrxgqSGrgRoK4UvEehb5hEUMq3CQJiTGtS8RWr75KjyAUWjCbvK4h4Sjb4gGUUUXPpsM3AqAEg",
  "key25": "5PH2CFTNFDjf5zULRTz2xDvm2wnHKBETPvdWVUtguZVvymZVeVpCf7xgsaxK8r5qAZ59GTCnbdrtem6rUKRnNpJg",
  "key26": "2uAPgD8xRrvj2sRcJjSY5La8zqeHc5PyqZyEuQzUBZwgzKrAy83zZHUHg4wTzqj3AKPPwCJLWJWgXd2rZGSCva7N",
  "key27": "4qyXax5tmbhPJeEp3umRnGTFv15D3WffBgnbSSqsqZELFF415ybxrTE2z9zkZyxJwfRnXR2onj2QTxMPFobxUEbo",
  "key28": "4XsHPBhw2WWDD8W2kuGTCr2HNuz6q3uJaGRgN4jJfM13K8PTa3rHvXrSMe144a9VZYhUd4eTdKzseT1ZrPCfPuPq",
  "key29": "2Tf9boYpAnK733g9w8eSX7nfpVmyGWSa82JegkF9TDLRU6CiymLdg6Y5VuHUBKiTEKKfpBEdPyXe2vdNUtjQ112o"
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
