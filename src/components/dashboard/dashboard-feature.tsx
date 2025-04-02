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
    "2rKT1YAbhAosusnHywst1Yg6uZY6Zh7BDUqvAhaWAqYcq7wD8XyTR1xV6H4FQskhyqtEzJMuPpJbqVTsrFjwfrxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xSV8nNtA2Xr9Nx1djWnXobwMcg18LKtPCka3Vc4AbFtM3E7yF4LQQYbBbY1ig9C9rRtjb1Fq6kzruR5gL8P7EsD",
  "key1": "3uJTaEHeubztsnbq131LaaAy2yvMMGnxUpRsQDe6KcM9uUsC8iiLPuwJm2mjBqpxgLixx6qB1x3zX48zqm9vdEU9",
  "key2": "4H9ubDMNZVKM7cCp4FgKXqXgwsosZUxyvNYbdWXPkAxdGtuXsvH9sQwQmdJNXVn1jtKXofkgFzvGY8nM9TTXMpxv",
  "key3": "28sYgk41EGFEUunsK8m3eDDyr9rZbKxFaxMfqfPQgRKWTwkeafFM7eith7tXTFd34T9Wq5v8RnmE5ygM38J6LKj8",
  "key4": "2zXYtwJdo5VnB2icUqHJdeyGWDPtXZ86Kjw7BVhDD5VkJNw7YR6L7DrFoF6x1CssAFUVc7gDKciWdNc1EwoEfqoi",
  "key5": "5NsraYfChb5quu6hCzRGYWwcuTD21CLZci2xZ6bdZHWHhdQWLDKC24M7LWe2sBh8h3cdGDgHrUrmRP9X1RqFbfaT",
  "key6": "3Nm9DCjrgsFYQQRhLhiwQgZuTt1Q9WEa47PTyVRjnEvhqddij9vc8tZmJuu8UVTuci8r7f8EDMhuMdKqe1NdcE3H",
  "key7": "7xEFPjSUms6pCiYYKFnG9M9ZZUsT7Fna15eNh1MKvAHQSAJPw9FsogVu2ThY1uGySWDUrB8zupp4ejoVB843WCe",
  "key8": "5fYtKt6k2vSUpz6h7qYu8Qz7CkyRJJTrVu1WAGrxbKXpQaWUNRLyM2KSq6ZWtKYcbRHx945tmQprMBFCs6qz9Zm",
  "key9": "26JVdHfuNLyxMwMmoC1R6CPoAuyJEmfTrKrMzSmbKJDYgwzafUM3HeLBSpuqASGtZwaUXjGfv67vgvWfiRN8BvDV",
  "key10": "3yuKDE86dH69Ns7ociUzFwhZHJFHgB1owVMASGTEvTmBA4BixESPaouXEEeHcCLEMzAYyy1wQVwRzpMqTtrqFTUc",
  "key11": "DZAayNQT6MDHbgHhZfhGaptqGCPy7nyRCQq2wePKiCai4YqegDDC9iFGPRWxZzVKfWFe3NN8R2gBY8CNeKVwT4V",
  "key12": "2NucrGPNvXSLkZAPfHGYy3kbeq7Eyg8SCZfXgseCEcxrAxZnxDLqnNa5JTxQqP2mTMb74BP71oaQi8sR5KNeCqVB",
  "key13": "8N99EdacD3sQxs5rneRnu66jMxAsPSM5UUT1gAuUfy6nrZBzoFe4emaJUz1ftaxUXiHm7TiF2vmZ76kkucevtZ4",
  "key14": "56vF1yUDB9hFiCnPq2gUrHmTCmoSyTTbGerAvx5vSa1t9AWq218drWfMixLeN1pqdjm6muN9DG5MwFMm6TM3SHdJ",
  "key15": "RPeA8AnbRRrkbCK5CA86ePhPemSYWQRV4GM7Pg6moproU9Fb3HuL92c2mY91mBctjsvbf9x75SBGsYoegMxGGEc",
  "key16": "5PNZuZSiL8bGs6FiTGMPWs4zZDbF37sWcYiUFYxSXgXg291JcYRgLJTwaF7EyDw73zTjNG3j8gPLUyqq3Fnqx3R7",
  "key17": "3wU1d3rb7wu84ZqYkR45ECE98L1m4hvd6eeD9iox5A9XmD5m5kGFKCGNXMuiorgd6gzSd163T2mJdmYJU4y5BsMB",
  "key18": "4nRs35Ao2uwApRDFdCX222VtYP5Edpzz4XnSrZBe1QeBCfzA1PttRMb5d3j9Gimi3LA7QnKSuPoXTTSqg83hJPnZ",
  "key19": "262JdKoCCXPZ3yYKWc4qYh8K8bQXvpJwWDPziAfP66EJKfEghpemkaYDQjozGMUdSKtjrTTdVjtyxpjLVhF6Lq5s",
  "key20": "3niVo1aNC9DiEP1uzejvsX61USUtXLNjse14Xby4jrzRGM2tAAsQn1btovKb4ctm2cQ3f4G9N4axjKrLHMhbpdXM",
  "key21": "5mKp1bMrT52Fsgr7Fax12K8u3GY2sfF9pyY3rsyz7EVQmtKsDiN6srNK5m6sb3pg2aWtTSEktvS8sxnjgjhrmLki",
  "key22": "2SeuSi6nmdy1fhjN6ovWz9EJ6iTMCC2F3aMwZ9VbJuGHra1Dm6y1ty8jm1UJ1W3tsXYKS1dQEeoa398c1kyJ5EZm",
  "key23": "UWpQTyQS7yWNztYnTQ2otzmB9VYpVRtM9kQHEhkMzgWYSVw7WPbEyKGyBh97byCNggFCePCcUDjNrJP1e1wHijN",
  "key24": "nCG3WYqPs27Gs1oQYySmFnT5gywG8ri38fQixNkGG5CHJYiCShZcVnEC1a2KL4vDqa4wDVJQi1nEwA5VtbiYs92",
  "key25": "3UFtZEFnrMn4ZST3NGU8UQG5bYHNsB9GzjsyNeZ5edyNHo22dwCCizhqwR3a9PStvoJtBBPXJcui412Lsicbv89t",
  "key26": "7efsGKjQtws9AaKQFGktrN5mETLYXhtWMY6nyUdJoSYPs7hw9gdDAkMwaFwRFg5MXKquUswHBwHM346c8kj58Qe",
  "key27": "4TWf5hVXjA2XsoDB2nMYZereVDZKfk9q6HToUmX9AfdrGYT3chmFpwoun37xNv24mGCY8BsKHeUR1XNMfh3kiCeH",
  "key28": "3L88KLEZHG7fa2nXhPnAjHcmPKb4FGKXoQJcQBZSqov3qVnP4iTnZKQeuSaRjX1xQi1LGFWuxBP3WSkmx9MhTgxX",
  "key29": "63bDGkS234CDsCVSRzrz2XcpoD54q165w68jQMPGMYuoStMBjp4uSzR49mV2WovmfjJrRGoiQZdSo5QzVTkeiovx",
  "key30": "3rjftvr7JiZtqeXkkLSUiU4cqSkLF55eireBtziPZMF8TaoxoJTCVTf2NJYkyZtCjKVYqTujq1qvKxkUACJSzJAf",
  "key31": "4EUa9HWR2cEofFa9hFuuyJ6ftEEmLJuPaoXJo1vocEg9EiYJbMm1uzsac4b7ej2UA2b8f5wN7oKv4g3WiNswdgix",
  "key32": "5Rj48jMLGUm56HtK3mmSTxj5W4WrgqTC6t9NS51LwbabaXBjjCFy3Z2QQPDiBWsp6JqKDCeciNXLAvgbZ7rrsB82",
  "key33": "66X6wioDLLhZU18ZDzG1zZjhiHu86997bVLLfKgxY4A1KJZWL7sYhpBY9gmEy8JQ4UGs9s3ZQjnf8amPRKKk8hw9",
  "key34": "3FYHSEUAsLPEpeK9gwUZK37A2YGcbxK4XdjhHc6dfbFaFj4vZ1PamQbGYCmkFYv8TKqaCDjuVmh2DoPuAMdeaCJL",
  "key35": "37sADoF5N7xfVt2ywzAbdE1kPqPCFb1fBdvQw5BMNV5gaoBZDJEft1jECGAv3TgcnUAuaP7sDEaEV6NFLPRULneW",
  "key36": "4cD8ACAuXYJybdfvJ9mZFa8jrdm7gzwkJf9BbjRpAv4KNmkebofKihbnyUfQLJRe6Crgj9jAYimZ7SBykUhmAVBb"
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
