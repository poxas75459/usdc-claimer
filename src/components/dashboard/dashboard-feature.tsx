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
    "3rhjQrtMH3owD1HuL2CTp2bi8SpdEVDB9PKNYWeoFyXXqiLpiJP3gWumPdvQRGzEBST1tGVfnj2DwUqyi4N27XYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJLZaqxGB7FXgVLbPcJatcLnJzVHQKc4EjUZtPi4PuVZ8kKGPY7QwVZfDgQ1n5xF9W2ph9dTYspBJoRRRt1X6eG",
  "key1": "2VWft39Jfz8a3F6vRxTCtMcRqfN2QiFye5KUrHQz8BNfV9C8iebjm4BTXQBWTVPiDzQkyoApi2KfkXFKHnp3zwGc",
  "key2": "2Zwz4FtdFY8mXb42Wi3vRLVo75EwJZzQYeKZ3QjJ9i1J4M2kHD8SMdRbwmL4puJRYfe25dYLDdP2DQ9D9pFdk9Gb",
  "key3": "4rNY85C8TbkpU5tfMkZDd7dgsEVAzfn44TYTtW2N8XLS11Y6mHc6gpeB7TGuDDy44hKnBTBg9BPLrzTyAJ44Gmnu",
  "key4": "2CN6UxAzxtdRX84UUrrBVUAKEdu4F9PWhhb1HgSXSVtet6JBWGV6jrWwbuWJWbmYHbCfNbvQfmUuBEqcXLFhjt7E",
  "key5": "4mh4EBL8acSEMXGiqkvhyBiXazyeSPgTjTdsvQfZPFbZqmvhb9vZanGHwxzmvt3Ydp972D9bG493fdg1c27gKp65",
  "key6": "3s9svTKDC6AFofFc33YvKj9C9TVokWpnjpsK39kKNmBmUZTyi87x3behYJreKFm7vHa9hJBUb4Yf73aXH4rwr2Q6",
  "key7": "5uBsrD9RLHxYV8bdGFbxVmD57wWja3oAkB5z7doVjAgCuP3HaL5Yb5w2TaezooeMNQw6ERoYCKdzsWqfBupS8Gcy",
  "key8": "5S9enhi6uit6MhNLDx4iE4MfpvE7Gr1kq1cBaZZGHNzXmyuDTRFnfzrgiR4626Zexd78xfLjxJsLYcJHHS86cQyC",
  "key9": "oL9ZqXoH7WbDhTRmrfR4iK3oTt19Xpwfp2Z6nNN6ABjTj2vfc1dkQ9sw2vFYHqT7upxf4Wsobtym7qUaZLUGx3p",
  "key10": "21UusZuHELMmHfsBeZYZaK1ni6jDQ7HoeMicEGvakAYiP4NmsJsmrqsxnhe2BKbxcu9EhraG7CkG9b8ELCLBkMZL",
  "key11": "2FG8bj8j6FPJ4iLLbPVr4QW31Qss9Lvcbgoc59nnTNfUoxBgaN8BZpS3q3T9yxwDN3JoKR8dFGqeVFnmZKVDjy9B",
  "key12": "2H8vLhaAMuTuov44Q3CR9y69BpBFMc57BVY7QHskE3yNtCJRZgDy3M6CujdtyJ3wdAJsg6yJHyb82rExE1SAguBt",
  "key13": "3J5ACNWd1ndTTvqie2AfsypTWHrd4whj1FDfe2uC6aFitwzx1Lekmxxgp2eDBG11UM5JiUVPvRXUXhawmmDjQxiL",
  "key14": "3CaH11efWHJUxkuFDRnjbBBdrLmhnChB8wXChf9vnT3AQgd1VRUWDjd5xueBrhWrKi8KXpbraC7XFceHSLgpKTVW",
  "key15": "3ajVugNRKZnNFEGnQAN9aS8xo8GPUkyTSkPbsu3ZYqLdUPH18MwzFagDxPtnkBcM8cf3kfFP2ichMeAoVsU6nFFt",
  "key16": "4MjUBpxRZTHAH3FFHdA2faS8s7j2PHP6xkjbEeA5TVbMBpQXrqUnSCVtXThyf2L13oAv5DELCDpxqn4DQqLZRe3",
  "key17": "NUYRBg5VKA97AJ3oCoZY3hRyKH12U11ki7CKFMkzkujqziSt49uKiJWb9QXSCSX661ychCraZpviTSPc71tvCyq",
  "key18": "33H9qyzRG7FbhpREARqfZQa5eR9Q3tA9eEBF5uL6Np21d7is9Q729HXKR5ujGRgQZgpfJrP7iXHMyquqNB5rALam",
  "key19": "7LcUQwak4BTiS2QaxCJa46VnHGpcWBZXXXS1uKgNErSV5dZXBMb7FEooeUwznYR5btfcjTBT59Jk8mXFo6m1KzV",
  "key20": "5vmTxz6yrydPT1keug9hE7EQ6GnD3cQmBYbX3afQ3XHF8pCcsxrUhy9SZBTtyddcUFztWxTy4xeP4sEXgyGR9ByX",
  "key21": "34tU8R9rxBmzHjcdbZhJXrserGoJpvjUGDBRjSbviCW7WU4zVDLgvvcfRp3cwDgYdjZ4qRCniDQJL69PgV43k4m7",
  "key22": "5LhRhs2Q2FGF4FYgs2QXqxzWRAMAzUbfuDYpBgMxWPsBXnAHZG1qmmfM57GzSfRdJJzUrjRg5p8DsWuW1sghd4wD",
  "key23": "5uBkb1cSY3xVkTEAfEsSaruMSHdGwsRtM7FM4unjXjvy3fUmqjLDCUyNSqfPhm8MP49a84HoJYpRS4uruEJKR3uY",
  "key24": "3NRPyvq34Dr7osvEZ7VTxt39ibhtv8k7rNoeqcmxbfa5erPwgBkUY2CMGi7hYKWpVXw86rXn766BCkbn6KoGkMhY",
  "key25": "A5Pn8HkRkaUbJNKByvgbH8uLMtnzUzSmorZYopG3Nh9rYSiAaevaRDbQJhbUXJ1v1WVvWn7Hr71X7obamdFmJiv",
  "key26": "39srrksJq1orm191ac7gJhu1wiHbTD9tDcQaPNJUhWT8TZCHTLshReyYNyiG7k8xSzF9Mf9J78mfZtJFkX1tCYa3",
  "key27": "4rJZu8y8S6tEmSawwCgWYgsTZU1k51Dd8hkReJAk9vvgvUA32Mw9rddmdvd4ok1HGhK1748fEE9Jib97Yt4YcD2j",
  "key28": "ywHGC8xkWHsDCBBc9EHjrDutCjwRMez6uVHTYwstNdfyPUp142n5VfsZcLzjktmG4rBKpnsDQmL7FhrLfxhj6mM",
  "key29": "3cn3J3hQ5sFjE8s5qBdWUoAXPzaQ5dy64J8iSwcLQMfBURjp5ikZzoyC6y39KRV2BhWd5w3R1yxVzNbdFE5c5HPy",
  "key30": "5JVaC6aTML24Haj1Cmiq4YY3Cai7HZ4eqsXjRFQXeW6vdXcRMkyU6UEnz2sM8P7D6MCig7zSfYhD38AU2DAy4f7Z",
  "key31": "24VjukG4ax4AtgguJSTNJTna3ztQJjsTevpuomefezMcHfqhx2JhLJ9t9aPbZSQRDPpqLHGbKrmNNQAvMFfMjFHd",
  "key32": "3D1QUzFcDoLjUaePuFVarXkiMz7eTDSJ4LdcVf3UEVC9R61CU2f1tfXE5yTufjxDNtPGw1wtVTD28vJjd3q8g8Bu",
  "key33": "5LzQqi9ydjUrvbHQaksDtrazDxq6ZwuLqpH8L9V2vMFWZPAm2CRzXGbQ57W2FvMimx3M8LC6fcoJNDxS9zXJDogb",
  "key34": "25b1UUoFBCwumgGTESt3PYuSUmzVsGkiXSbsTV6v9r48JjGKG78yJGfbbt64ej7gBSSuH4Mj8M3mGzUCeGmZ3Q2D",
  "key35": "2tD48v1VsPSgc2CqHz6soCRfgxbMDKaA5NEAQkfosvSbtxntKKPCxiQHcCoBcNCbUgWs6wyNVMi5wddYjhtKgXMk",
  "key36": "3WDgopaQhV3E7PvYStQfEBLg3XAsT8e4xF2Vfir7ciKPpg8VbtHET1w2kp7Q1Lhw9bfjm658ErgAaDbRco4s48CH",
  "key37": "2AMvRrHTmNyG72PTmGLFaRpyDDzq9h7kFYJxKB5R9LwUKCb2y7wirNb1xhFk9zrDMwLgC6w5jDhMndQ9mroBpkYk",
  "key38": "4T8VySUFVaJhpuCTUfS4WMPAVZLXVpZdVFGWyV1E7sfWxnxUVJd5mC4LobCQqb8HqRnwYFzX2hcEM2h1gj9re3Gw",
  "key39": "56E7bCuqpSZdZ7Q4Eb22CebfgpTKix64878zpqy2U4hvwbSPw9ErwDPJbTYRZPJTSi41heRjyfScPWimekrNpe6n",
  "key40": "3SUo13i2CjDaVRHfvqiy6uBhdAUMdVXinZG5SiW6nibvAV6VvXPc4AGQanyGX6SF82RHU8zAc8K4FNXmBh5mVFbd"
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
