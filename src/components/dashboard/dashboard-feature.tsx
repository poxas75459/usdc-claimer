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
    "5K2HDtZivmxPPjotLPwEhQjKkG7Nw9zPcFgzr5ijBxhqLMZBQ8gqPPSXDFVmbdJJzAuZdm7tDSgDy3XazZ782pkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551jxUamT5Yywd1s2d51ndBzMufbwsjrQ3PWggoFWeUNRUyr7wDUjDEdEph3QoxzcLX8nVdJVxGMnniyLFsiLU5v",
  "key1": "4sDBZPC3eLppYJb1rvn6FrvchrLYwAZcp6zRerVc2qRPxhabFw6ka5sBv6KB9BiuEGBSYujEFJrX4t3yKQQiZaY6",
  "key2": "fSsz8ueWfHccPCeUBXguhKVn9axXo8LysEwz6Vhe5jkJYpFxzGEuogkjWvQcNXnsa5FHBr8pi3RtX3FqittmyXT",
  "key3": "5HR7kJBkGyfrxkpkSf8QP39nPRw8vV18X4GvGRCjYEsoCLU4BaVQKhqUnu7gvneFu3hrh5XyL1pZuD71NVGo16ai",
  "key4": "3erq5hJ5DrjQYJLSEnQvMXG9suXqPajjcHRHGjrudBHJsHfcXV6knYPsLiQS15nsWfhHLBQC2MDmHrPN7kgPKc3V",
  "key5": "5MY5uPXSzCwDNgv8K6dHHNnVVE9moZKFQN1vneDfQm2LJBjaXpQSqsxC5obMgMyfFnt2H5qyLXjRQzvjSSEqhaiy",
  "key6": "3iW5iCj7xWzsYJzZR82auWQ8Boz56vX6fNPdU7W9pbgMxpiasmbLJ2H5R1XG8RDxQTCUyTbTF8Q7Z2SQDzwjsLog",
  "key7": "57uVSmYPdecfRTWwFjYqh6susXihpoyN55kSvb83a14c6Lc5r4fMXYBHvXU1JvxkPNAeBzspzTNeFUzFzqr1BGrH",
  "key8": "4ZpMDVw5hPhd97HMEN1jUX1T78cLL9bQbr4GWhK9HCkWHukM7DWjmwM5uLJimpZa6uFoQWu8t51midrmjH6FBgC4",
  "key9": "62PBfDXN8ki72CjbtzfUUQKYzesC4W8nvKedJKkSMXsiLeR5bRJwWPpa2FAZ18F2Y5VyPWfqpW98seo6B9J4zeCf",
  "key10": "3y4KSAhRJgGcaTnvV2GNwUyZ7kXTmKdm6CuR41oCAjU4KPFcZgAjFRdn1JsAisYdmJmMry2YkN5LVbQyMVV6GbCL",
  "key11": "28wUWXu7pdeqwEF9pwBevq1z3zNGobnYw9UKr1fEqRrhWqb5GcUYVzzparS32vgaAwKYcxXHYtU3BfEZYwL1CZzj",
  "key12": "P4NaT1Fs8dsVd6hRKaXrfM11yPdSfPJFdQkTwvbtpuPY6ktMJ2ov5WiCKX7xdvx6ZnbWKekpN9U9YKfYnpy1WyN",
  "key13": "3xgJXvrh8AdVFqcV4estVakNkib7uHLk9yYK6JLPvTP9xRL3X4CRQKS6VNq1M8wp5C4P5tUd3Q5cigeuNj9HYJd1",
  "key14": "5xYeFXxmQC1ypkLbTiRx4qfHCtxYoK6EN3czZHqiZ2qWiBNqFYxmm8jMxFeVSkpb3WpVmd4dhSZfGZsAhniT1rNY",
  "key15": "495rcHWuVoVk9Eip16YAjLgLpJRUi1A7Y72QNrXcmRLTjozXEvQWkLdB2P4V7wyPCCwqSAGd1PcDQ3p9PEzs53rA",
  "key16": "4rUPdmPX7FckB9B2Bq2itz7DSLgsNwb4BC4C7JH6xttroF3crvEdDm98FyWLLCWTBULRt8ubFn6235GtzjUypDsY",
  "key17": "5e1jknpNU15nsEU5XY1BTwz4NhhRkcNiBPdeL4ZX9yB3Tpq73SDHAmB7PgWH2g9H5QtDLNYzQSVe2ThMFXcP4YQ4",
  "key18": "38CAUjkpPDz1Qid5gZ39E9cqVXBE2RejwqKHoUjC6h9scpgvLnjFhYCBYTKovfQsMixvDexJKcFTea9niXngC5h7",
  "key19": "5MscTmioDGsmopxw8bri1VaaY2RaH6aEhj6qAjBj3zUogC6A9ombhFVXgc27tJUxbCRuUZ9cCR5oeMGcgBGQdJ4L",
  "key20": "6aipkYFsxDGnNMpMMpos4gjK6d4RuEiysi5TJrt7o52ZunUjHvkphjrEKWRbT98pMM5mv1vfKb1VUzM7cGxD2h8",
  "key21": "3cqybfecYtX4yHs5GhP8j2e6wXN8kj34tmXQuFFYXvhus9zeydbKBw7TswoxQAyRoZGbH73T6QCZvKQL96VY1CnU",
  "key22": "28qLfVqSe1vUnUeGvh3mFrEcibN8wZWkKBfLodjb2YocjPvXZ89qkBpvC57nmF6HeKGebdUi4shYatD7yFq2xRQU",
  "key23": "2NMdB5qEBjwRfHyxn2QAqaKxCZPD5Z6HNcWj1vHNjPWmuma1MU98RwtvDf1gyhRVPxBxdSjTiFFqCNXB6VRt3izU",
  "key24": "5zGdyqC2STJb2NAmjSXiLP8pRDkaUXRkNDzy7LsnrSQv6e7vvqwCx61e7RhFD3AniJRyPLCZPTm9VxAWMQM7Pxc3",
  "key25": "2rFnUfTxNYAXKLb8PbvAUHFmvsqEWsFGnQkGTMh4gDhGKSyCVsKtFuioCgyPDom7CywKruFKdTCKSDuyAr8T2G4w",
  "key26": "28bF7grkPvbt9TArkPjyWwYL4BRtp9AeYMAFwgBNFkpoxbkUqg7BzxKsQJWH5XpFbyECTRT7qP5Q3gPLNaquhm4U",
  "key27": "5iuE3KyYA3oW27MkT6tVbS91a9r6witPCHXUsCaZCigDGXR8qcPDGx5dQatyPpo4Rc4G7vKJLKLpbAo52VNQsyPu",
  "key28": "3cs7eT2MPbHSZqcSfa5kzyx85T7dTcHqAEVMAsQU7nemt1UyZZHTHAb61TxApLMYejVgXtK1twBRrz4xdUH5PbiJ",
  "key29": "EQ41Z6jkDa9ZtLLRw3qkZoLeCxCo6FWq6jGUvJ3CkFoHpmUUbHTXUkgBorSHcrQFE1dqWsZvV5TJnC3CsRDSpuG",
  "key30": "4n5xuHCKw2EBp6YV8hxGsRYzcokKSUgc68bvvsppVkcrErPsMK2APJwvtpznueVVmn6cuQnrT6TK8xjmHzJ33oEG",
  "key31": "3yo4x8voUMDhwPpYzE855eCxBoMJjfSX7S7q5m73u2WKuMhoGKqwgJChbTS1KdJNd6CnpudD3gW1ewrvBciu7mRt",
  "key32": "2t4dsgNDVvCc4nzmjq2TTQTb91K3hEtmcnz2JXgdpcBJJp1BStbZvjCCYdHu7HDuUatMyqFA35wN8Pe5kyL6PUtA",
  "key33": "5uiKtXHf33Z38iVgTPTsTZMgLtTZqokwd8Jn6NtFmYbPBirNmDHnYnRPNCckfhKdJr1w6vbg1efUFanmdYNvC4yC",
  "key34": "5BVLA3wk7eLHKNEPjNh29gJaobWAe8foK8vNWms9tB4755oPxhcSFLUgZSHthEBSmdb67uyLUiV7qikVXY3i2aaQ"
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
