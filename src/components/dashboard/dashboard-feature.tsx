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
    "5mGFWAr1ysoe6RaF6NaaUA3RnfMtugFGhQP5QNb4b2rXkijQWfmGwg5GVWjehEsWTn4twwKfd21bg4pMuWR7n9s8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AKryqGAJmwCSkPDcyPmVExNpP2H2gT1RQA7AyaucZq55AoxLc3FPagBP6z5q3w5hJ2jc4eTjNPeuVVTLQWeLwTU",
  "key1": "3LewiEJAvybwdbz9e8TA8J5ceqxFBf8gwQbUxpzQHxYcUMqiNq7po3KGh5XXoQdfx6HfG5Qvti42ZgLX3FkfmNey",
  "key2": "45QCYVj1MZwh5HXMtVnK9BLpJPRMx5Q6yzLyAyT2aAESfEXfp6KEyKuy9YKJWGTo6Nhoa4RGzmM6QHKwmf9HqtGw",
  "key3": "3G9tF31LpCMM3v4bcddrstJJrVL5svgZMySR4nYZ35vfbDZqVFMQrfmS74w6XWcm5bg1rnsxzLWoMUxXGjKV68bd",
  "key4": "2aVSRWkvozjNZ1VpSGxsJSzoS8vv7STmxzeP2mg1m67kfWYk6cP1HdxiJGY72YwuuWEnWsZhtZKnXWw7qZnxY4qT",
  "key5": "4SM2TFqWM5ftZYthNDRrtEAmXjb7P7uZ5hrgvY3PUCyYex2UTXeJfHQWpxMB3Cpch7bk8A9AA7waueXYszWkZdc8",
  "key6": "5nDwc8TSQXSCM8S2YWCVkDKyWvFUkfagheKMH9sbcTvHcGysTaehS4Gi4W7dxBfWcNvkRN9AcHeUvF4cTbuG6DEA",
  "key7": "3MHY7nPkgFR7qVg9uftwr71o7yfUZagkaMJxRKtz2Xnc4QhRForytkDTHy2VFivMcZJzSpKk1XDRmctxQqTzhdsa",
  "key8": "3ZumbBKisenc79vPLNpysvonEK2jS5aGiPbK2urWqDtsB3jpoVytxtUYMCpr5Y9H5C6WWqAt7iUUfTigxCG3vz1",
  "key9": "XPagNPokFvHDppwT1SZgtNt5ANS9AaxnAKsNUPgN9XTUyaeUN3gAGvNMjU3BDSqrgf8LLV87TXdadoaPyDbJMVP",
  "key10": "3nHG4j9EqXCUhH8vHo24jJTCMQsftWwS2qgYJTw1wXCv1MT58H7vjVLLX5SHKU8nCAFTbSpTAGtYg6VWDSL4S67z",
  "key11": "2DtXcSvf8QEBQnvRUF7x1Ywbp4uXyydqYSKEH2qGCLDWqvLyWYi7oMy3EpEC8t3mRmu67s3KenXxA6b4oKWnHPwW",
  "key12": "5wwZLxsn4sFFov452C7S1oSwm62VSrTkjyraswVrSfSy4izooSgBofU3LqUGvqKiMfUFW2D4ybS2VckjPUhCvRUK",
  "key13": "25K9LZ62bfh6iNcr2AhvF5cg5nRE7Fsv8a1AUS1YeU9sJMeesz8srzbFz3PY9XzJi884j5yNk5NNpfZ3o9CHgyEL",
  "key14": "5ZBMz12RDTmc1ukYea2hSpeeiQkFVbd3eQs9YTJWRtB9ChERXf8SSonzmeYg8yh24CXZLceERik2kFDj9AjZwLh6",
  "key15": "37HMKxdxgU3kMJeDoiG2LaW68CrhcmBRJ14BAgLRT8VqBms3GVgdMAQoEVT7ECyrBxDgoTPig9kcgKHLc2KAip6u",
  "key16": "RqDo6t88PpyRGZBDDSYfyP93Az3bVMTzV4ru8vze3KRX9aVGNyx2ryCF5TNhvepmmkTt9B14QyrfiSPsV7g45c5",
  "key17": "3QDexUWX8m3dp1U19CV21gGqM5xYyJZNSpsHnPFMcbVkqVQgzmfHmFaYzGF42zr3tyy8BfrrNGcS8DfuBqz3BLt7",
  "key18": "AgfbTABPABUHLGgTnRLkyzAZ9t5nHd9JvGsT1mBSYC1zDwdKriYu75yKBy47JpzLtNbZuftBC5QcZxDWaSsx2Zf",
  "key19": "4fQXxfqZKPT5AQPg6dGjRUuHyNBwKe91rwWirGbJYKhHyXDSwQEjbaTS8aMAU5mqV6L5oPLx9JQciWWbH98UtMb5",
  "key20": "44SqHCpES66RsVeofyRuYTjmLP8BB87Hb2ahujWNg3mkX7L81yVULBYWZk4RGL6NFYYJZu4ayxwBq8quaGRgx3dC",
  "key21": "2Axf6cw7VGV5DfCoutryGHeWg2k4pbUKZFefWUg2q5rUqcqU2bV78HPidBtby4YXupR1WRGZkyiu9TJZFPSUVd9y",
  "key22": "2bq4fnXjcPQpP3XkiXckFuRioqSX2cmbAVyFNEoh5R1HG9RRtNXyVZtBgRTNefzPUr6fa89CnQuE8z7RC3goec7M",
  "key23": "btzfYtoVd8sWGg7jqtgKdwKSGkUsGSHL1NkwbfAiN4iVKvJrvGNESjWBEELbCkFkVnJbpjXtE72TBtsRMfsbUec",
  "key24": "5TqsthgJUXmdeZkZwJjC6Pr1NkwKcCBwww6sureeZhZs3zYM4szNowfmx727kKuaTQRu4hZMaWiTmyyQHgAtGdsG"
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
