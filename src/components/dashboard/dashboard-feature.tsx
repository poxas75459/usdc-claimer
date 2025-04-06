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
    "57epRBHnkBMYfPa3Q7aHh6RB8HLoWprNzj3pi7JnUqVSdYetC9pCAHd8Na1FkN2bXywG77qhwZy5Z4UvzbMEGkvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xwJBcUZQEbX8JxndtbADckb1ve96kT1vZnnfTaGZNrruTs6nZCLpz3tjZJP5w9Y676WbfUCZYF8gq9JY6Ncxyhh",
  "key1": "28n5m5mxX2s4j4ey64uJANtcaS7QVYGiGNF94PJob4xEyJJ5ixv2mxGiPSip7swsT4j85xEqkrEK7obwH3hvRvCj",
  "key2": "qoyzRQU3vrE463fshYvAUVAxiRJwQ2qtzm6PEsLoA1giu11vhpweTvfCLA76RqnWTx6XJxwGas311n8rcnEpDkV",
  "key3": "4MmbdoD3dhBLZDGUjk56kLvn5NZgCLg6QxfCiCxkLcH8a2veueKEZPGBz5Q1h7mu2zfvvun7hY5AkKcHP1bdKMbU",
  "key4": "36CxbQV1UmYCEZcYucBZLSzLHJJshmtSKa8yTM5AXBpPvgnSNnUQdTjGZsBSa66Juutic3VSXcosoiC9zweoFvMu",
  "key5": "5wk7uGzVJAwCbsDnqCessXf1vAD9PGRmW7e324vSabwSFddnKKRGK6E8dT9xuwue46Y8BRDT2HRY3LdYWqV6V9mQ",
  "key6": "4oC178GPrdkGLtRTtohyspuwBF7jxhhyU3uPabjx6XUBNx1nxKjgJgDum8qbZZzzzSFph242JdzHt3mSd7of1xKs",
  "key7": "KMv5ZM8PQoRoaS8tJFSthiM7quciRqSkkWCiq8pmcBAMDZguhfjGguhBxPw9kPfHskqf4HsytkLU35zsXfY8WoH",
  "key8": "3wzuwndMi8Y3Se878q7b41LqWGwC8uP2qpFzeR7dCcKfMDRRfJGX21yq7g5ddHqkMpMoTSB6JRzTfH56zUfYnQpa",
  "key9": "4rn7W44AtYsGUyPfvAAkJamF8QxFKpEEZZdn3X18jSh5JY2Pw5RXJVAseCCLidAJLtqEP9AtXARv1dqsNAD86CwR",
  "key10": "3LdyHL6aUq7Rg91hCGV8P5Ut2dzyQnJYyDqEcMdv1ztFQTo7d7Lk7qbLq5XrqXKQVdb7zUyGqsr55pRdZQGN1gAX",
  "key11": "2K1uLSdN3ca6j8F2XKQCG1GeiV3GWj1BgxPttsHyNdkbhT315mJdTWppYfFfBnM1DB98KnYLrtm5TpVFmNugvfZw",
  "key12": "35EaSKuNxcxXNMgWXB8A2XRwJPythMHqoneBYLkwGvhvCXmYZydvQbzbJCBHTCr2GX1i1dDfpgnJpx19YCK6m6hw",
  "key13": "2qDwjuUTXMQy3kLaWBChfADVF3c2HxuEVUfGPypVJkY7kJpJRSykyphQJNjaWdZegAKwAhaGvYv8i9dMg43Xuvx",
  "key14": "4F5iShRbmSp4qcHeyLNrXxAssYHQpWJVdRwaNepsRJDz4rEr7xf68qBoieiGKWmB7w3yRKatiexjmjLDeNvpM3oR",
  "key15": "26VkXvNJEDRTLafPTjLV9bfmaRStQ7josq4LtXVPfeRxc67eZ9Uaey4hYTFASZ1u2fepBeA9pTUPRzCd5EYCdZti",
  "key16": "4YeRtLwogKb4ZkUBr1Lb7s92ErkWVdAhqBX6FkzBQBzoWsavVo2bXFgtUHrf3J3hqKrZxBw5gv2bvdJTXZUFhhgC",
  "key17": "3NA3Kpt4o9zt2gzWAypj2SZaRu8wkAAZGLJPEfDhFf8JXB8ckRLjRsFRWkoHCGfuqFFPgXUeEnc4k2myXmhkCCZ",
  "key18": "4xdz7fQXWNDNETu8Ck78KNQkjBTprHgz8ksZbb5NN9RRHq6LojKWU5yu7A2naGQrV591UVhbBRiqicDQEQvFDhZN",
  "key19": "5vF3ouH45vfoRnEiXusexq7sz2niPjGrGYhVUMF9zn1XMsv5Vp4nmBtcPnePLL5s3FUKjywNqZjH6hLWpu6eCZgf",
  "key20": "3AcMZ1nEoYdWGfFsoCZ4Hy2sShVutP8g9nnPGRehneksfDNaMxRQLajc3jT1vUG9XpuUjDaptYLWt7ybHJLZm7ri",
  "key21": "2Le7ys548nh25GN1RmqUcJSGBgxkpcxUrnnghhJkDFfXA6gzpaWLCxopBAHg8Y4ctNe8yE2DaivJ4qjQPqFgc3qA",
  "key22": "vp6tNSAr2rufcU2fdXJahHnBnAvAPaAX6J3z5mLzR7DFVsSHnXjMMy9vfJLctEyM86Y2twWr7h4XjtWMehGnc3Y",
  "key23": "5coh68ZDuuqkvuMQYP8Z8rhV7KvnA8RLj6pLpwtvtbZB58QaLrRzLQ68F6vd7LZPtArETLvBqfQ1omzpr2q7tFgZ",
  "key24": "2wH53Fj9UqiLHPnNeLDnXMwuMX9KXvbuUizh1KY8fzWaSjbfkLr2VQcvT6NBXXdTDvHdwwsZHr3caSEhHbvZrPk6",
  "key25": "46wCiohsa3xzy9D7Lpxv8rKyCzdZtsBAEUzZrWHzQgkDUe5gmvBGUvCPu9Ji3DpxYGSqEaoFXCXsXtVg3uFbBp4i",
  "key26": "3YBfaHnM6o7bS3zAD5Q7HHS4VuJpu2MmD5hkcovuxAT6q55CigtS8V5iAr6Bifx1GMevJ2jyjcAigif6arFuUmNr",
  "key27": "67jXM1R5caG1m5Zx9yMsif12PM6op2yWbrngRQg7BjoNFAjjtp5vtnZm5tV42tR5nyVfE864nAzsyeGC2QZM5iJY",
  "key28": "szdVEjZ9mqZdEh1CAVcReVxn3o4tiuC84BriRSAmQYQ5oBSwciKSaRm4gSTu83QNq1hD9mW5ivHqNJdaPnK57Qq",
  "key29": "2x6kcGCbT2RjXnsq7JzbSNiQB5wpNjocQwGj9VAJi25UgAtcd5DKseiUXRbe5jfNW21PmgdCatiWoXCuEuz3nu4g",
  "key30": "2XxoAJBtCYyCbE1ZZKSHhmKzDb7hLDWrHKYfcs2y4wET1YCTnTZaK4XDw7We174C9eGSrfN5naz74pxwTXszd8K3",
  "key31": "2WJqrYf7p6Yg8ouYjvwKE1sNtoxAwCpvPRPDTEbpue8wbMAVvcYpRqccTUmoX1GZd9q6immfspbq1HcBf73pu8Pa",
  "key32": "4kdGcnCdnS7iGUw6PP8Fg7wbdWvHE9dejaQ8w9KV3GLHJckAmW2w1g1ydBhDEfPWQEvKST44gVzkae9MjMyx9oT9",
  "key33": "55RK6UgypBZv4G3KRaCNafBum22LcpJvgbB9LGpkTpqpXS2cjp2szLXdzdaDj7RY6ugDishjbNnwSPF1fzEc3PLn",
  "key34": "5uBxtTLNiew1x96Zu7RCPGSX4mWEZwHKwH5ZpziCQP9FkC3XHN8JMrjwDRW6xBGx75rKt8hWWGyzQyPZuCpY2QFy"
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
