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
    "2Z4SCfzfiFsnbTnGubnkeg1najQ7scYH3YLVidyWF9iRu7WNYMhuDpZJBZvAvuY52NbkJSGLX7Wq3XibHGFgdfCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cAEa72KUMxFcCcMuzJofgPiE2mn2ueeJXxeeL5sjoSgdaTAJJ9wtfa6P1R1Qa2jZt3DUoQAxV5kPmEjxe79XHkn",
  "key1": "5GMDM2BmLxUviyMEvQMiWkFUpYEz22WQYBEcv99UkotFyPbeJGJRU2xrLML6LbZEkC3YuELKdhPxgtrqfhUXFqya",
  "key2": "2EM2nLrHqsKaA1ACQE9K1CGBgCqqJEb6MG8TqyNVav9UTS5zyoM8X4ADd17dD3ybGynq5Zwk6nWWuyot2ffw6bQN",
  "key3": "4BcdcD9hJXraVCuY3WCdFpeppo26qKd8VbVTHQVt7SnMC88b9k31dnQNK6je4WwyxH6GtM8rugygcs1cstTKKywb",
  "key4": "5TpKpK5jNX22sSiWeLFwV8TvCXSyHsyt35AiMpfr5ch7sQ5z1H6hKE2YYTHhBvg6aQ6YswXB8TeccMYZMGb5n2Hj",
  "key5": "3AfAPGoAoKbqEzZeNjXPv3i46hD4mtcp6raGChkHiGhvw9g3xWYaWxpUmu4Xya9TPeFYLYqkrLy4HPXUdwLi7rnn",
  "key6": "4xqGosBFFBycr2ZeDjPfnPhaqi4ctPbrbzkoXToqgWUsNjEz4VjPsWbZeKBtgUXJCx1xtAALqHfxJHkKnLrBsYa1",
  "key7": "3XidEbodbKDJ8b1KbenZGT7Tf9bXKRzcRbGPY1uXNFXBVRvC3EXLXZag4FQ6tU4iUBaCCcDNheWjH1BZoSg3d8W3",
  "key8": "5d73iM1HWQiqiY77Q4tRvkr8iLNjZ3RaugVRXkzYZQSW3sAJk71cjz4pcwXcNeLi8nuCzwv82ECa7Zfshv1p7j5S",
  "key9": "48Ab8N8TyhwCkcw7GKbjbG32W2UyjipS9zrPhPhpwGKumPCSA7wCR2K1ycjuFL5BkGhEWUijBCRi3a8nL2vvTnZZ",
  "key10": "3nYUFKELFxaUXoAf1jzTncdoTyYQEw5nq1tPYBgmr9HSGbkQo8KqEs2kqo8Ah81wspc2PjkakxZHq4qoab5u73R5",
  "key11": "tyoXqPkeAxE4yWj8Shj5e5eBAYPLVT2G23jFUSUUrSmVRV3WJgoNRkvgnJsveCbAnopEgY8CXo6fvg5j2cW1Pw6",
  "key12": "6Upvtk9hz3QVtHi5Zhdw1ToicJzKUHRZfbYGSzN4rzgEreXhPws4UTqKmfBaSNojnEKibT68RuhtG3BYdUipLM5",
  "key13": "3nh7VTEqnTYaUC7k4SKT86zvSVF3rHXEr5nvd7aYd76T9hRg8ByU8QNx8u3y6cVKDTpWsxP3WRXswAVaVu2GrB4y",
  "key14": "3R48EumXyZcojfdKjKEQeuPwDDibZPLZYUuwPUjfxmzvGefyzvRvhYNHdv5Qr1GkkKyeHPPVJXYJ7XJsPoa4JPx7",
  "key15": "4jorCF83QMngG58raModbDdidR6dqgRvpaXvoVz63H7DiwEzn7Xt9dnbNnUF8xEY9nuJWeqLnASJQJ2SEXfWwX2B",
  "key16": "31L6gcTLSKagewq3wLKjuaLyV6Zzf7JNMfKiPMnDYYBuRpHzV828rmyyGtxL3qxe5JexZ6j9CwHCSVwmQitFccnZ",
  "key17": "ucpQAGP3Qy9XRj7RkTYxXmcZ8PzMT9MPtBxELg66nr22Y7CJ2EuEwfoXDwGPP6jV5QLTLKriqvLqhnNGuLd5LxK",
  "key18": "4WtPJNNjx3XzBfVrmTfb9ZjPWAhZyCwJiHekmphQ3HJtV1tvbsc3PhEoctey1acTEVJ6LkXgB5QvkkCQ7TJeRWsu",
  "key19": "AqpqWBEzFYLr5LYpjsYvosqaZ4geEUcy3fqmaoaS7dTp1TBgmxaUkGqHsBz4QzAMTSFK1aEjLQC9JqNizjdJABV",
  "key20": "2zELZGaXTHXM4NaKp1P4qFgnEax6yfnpwovmDokx6exwv34yMgrPhCirHhibRqNRQZAJ7pJtPWXED95q1zwZpaTY",
  "key21": "62Z7MuCJgsYLzSxoFkoYqFaA1zXunwzHzCzGa8YGz4i2DPsKbyHbfmzj9sAx86d3mcE9QeBzUKU91PbKGRAamwEd",
  "key22": "3XEW7CDyv64ECsTq6UGzuUB8Cytx62c6St2KzydzamcZGDXotHkLLbgGxUGCwXqg7oM5QdipTRzd6tpH4gtDcNnf",
  "key23": "31soKN9kqzeQkwfoKcAewoQ98U2C11v7tc2zSo2vbTeLCbWCN1QDPeRYu8rHXoJWzHmbEW1NFjMs9ZY51TvzTy1T",
  "key24": "5NBtxfPE3qSQMayGNdCJqpGuNWrCgu1rT62ytKrZQcvXcbD2euYGD29v14Dgsd4YxEXy1ad2nMtNreRoHfquW28w",
  "key25": "3kEekLKb2THCB3o2j6YosFciBfLUtmZ4e8V6mTfPCpLKvjpBcxBbhmQFheHLDQsU36d8WXqxVmr57gaqBoaKmUyK"
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
