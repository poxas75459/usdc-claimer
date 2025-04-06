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
    "2FNoiW1YiouvpLutFczLB5QcvSvZcoXdsxbGtfw24MTwwa1W6PjB1cNofSNxDfKFjdE7QxTeDT8U3epU4cDv8453"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Qdx6z6vy7xwYXfdzcnKPhShRphRj2esmLK983JdxQTQftTwDtoiJzNWCkNZphf2F1GvuAqM3BjSVW64HuoiUoJ",
  "key1": "3wtGPE8wXXXDXNN3gRmLnVdyDUCPhWpua9wE6SG4utkdTR5fJuN26eXRmWeuzjrZHXZ9WVgkpfuJHTqTKvhGG7gg",
  "key2": "iHfXRYpr4N8JSrypmHve4tpwTtj9K4KLVLJH9drFwKXG8beTXhxE5wuVyDP69VXUgZxQtJAdMGKS7PCfAYvJxdg",
  "key3": "2gC6pP1MPKDk8VWVxbjAi1gej5qZCes5Twjjbssn5vyLHgVaF53ndrkqfpNEBqwXEmfV2hTyxcrYwKK3n8YtRAYP",
  "key4": "5gfLLQ618FimSeZejay7SyhHbGPf66QM29TbGwUHDGzCsribvpsKarhkN6q5GR6GkwjL7TFoDGRfqpj6JtZvETKK",
  "key5": "2BhfvEevnYroVY6Jr99SgjWduuEs5MNxB2onQjbxvXuzkeNQdW2SLZyzyGzBVCBarf4WfDpK7sTNEVccQLWPagW2",
  "key6": "5213Yeo5kcfDaKQXveEgZKd6d5SqbPimjjkH8U5qGCoeDZSd6b1xpKmCjQc8fRpfdoptxAgt1QbFXy477JS7mUpf",
  "key7": "5aYevyqieLLjc1ahDfG1EroVQ5UK4fVeMGYocGnrEzx99vitXdEfjfCRvfhfNQzevkeqbE4QFT6ChehoG6VxChjS",
  "key8": "4ZuVyLn5Bd6szSAQr3m7qphfHFpGCGxkKKdDnYQEz5XhHMseZrrAyoeYyRCBX5rmcfgwybEzXyNH6DqF9PLLf9sx",
  "key9": "3BxzDgMQQ2qmVyij1DEvqMF1f8FHo39Vj4qewjE5FwU5WEn1UvLAMkoZDFs1sHYd5KmbVXoNrwP7XjeUgN1bdQ7y",
  "key10": "3yEdEgXYfAr5RFxVXj4noaii9c8VMTux9NAs2aLxjttqF6X29aU3P4GxkYvGR8qNyaP64pXiWg5N4wEo9h9ZtipF",
  "key11": "GJdW1igybUWuzp5Ri7uDpEYaraAebcEC9LVGaomCQzDsgwtaZZyvpx26rcgVuk9RbLv2HuSVLk1pY3Lg73vyYfs",
  "key12": "3KeCZ7ZdBHhecNFFRVHGCQgpVqzGfQijRwb5RrXaiYbNj2ihxjSEJfpN15gBQsrrGPT3V8cpYGY4pKkApiwsRx8s",
  "key13": "3CAFweAickoYDh1X7goEWpm7oy36Nnza7eUnzbAVgVHFkAmj8DTWmnD8odw9GRwJKD24JhQ8KRAH4wmiKnA5aoxy",
  "key14": "jncYnaLkTYkYXCpjnhWEfxY2gqeDF4WfazPrgL3WBifeJ7SPfVipzR7an35CKHRp5coFuiY9oQgfsc2sFT9qUJv",
  "key15": "5uX9e87mX57xupQMnw8m6RZKWnMXMs45XKj8g8DLfuLdcvgbYHCWLFNvaSKGeND5mWHqSXZysdop9mQbyFfzkFDb",
  "key16": "5sHarnYt5FECRUmUvd9UzmctL72ZoG1MtMT9KHSkNiwwxgGFgAiq1PmCrgtnfdKJ2RoB9wqG1mKBjMCJ4ycXyDLN",
  "key17": "mx5RxrgZPp5VZ1ENgkYBogdZTgnxydg1rLdvnyVg4uw3iBR8A9PxXNENpKtVJxJGUL9a5g2uzjgW7i7rTuRCgps",
  "key18": "5PfBr91ouy3umpP3oTPnqDn9nX9hgkhjHHzQrRo9hdMPrKDSzCiMjgZ9nqv3QRiXpvh8VfyPUN2R1tm5Vh1qr291",
  "key19": "5xmKN4QsBhrubM9368fv1ntw4BuTCpVo9XRB4C1jTkSFHNtwACtYiZ9c95J6f5YX9XK4zj6ckahHXxXjPogamQUJ",
  "key20": "5XD5RR5E4GWpJ45LmqSLALSwca4gfNGULxNvrAnwC5LhdpqVBeAVapjq92oPEt8kBAJ27Et5jPGZi3XgLKn9YfFk",
  "key21": "44jgUdkcjLB864AzgxMjv7ErNEQHyTsMZAHUD4iSuXsQ6GKSCyXe6xawWW9iXY3K8zSSvGwK7eMVu4CnF8fmYrk5",
  "key22": "5dfN989urVjMzafBQiF7zKhLTswABkTDa6fLmaBb2v25aDwsnZrWVjXogi9L3JJPJ58zLAPiiJrnSbG2jrQMnEB5",
  "key23": "3QF4bZmec9MwfVMHEhdsUziiDK7qaXY8L7cwzNYaDWLw9SNx3vgDeWtfNsaCYDMJQdjyXzfqTrTGFSJPeyY3BVFS",
  "key24": "63kfTKzxRX7rCs4ahQ2i95TmiLXMtvPAFjhjqMZXt3avqsLxiSVKaeJsF7pW8wxPSzoDup791JoGzazrPQgcMqri",
  "key25": "4BWvBkNa4h2TZjXyxaD1NKDg8arawPaEvV3MQZueFmLgqQoxuPESF3NPWyoUgszJFJjjLb9Qpz1ShzZX3fzmJ7ZQ",
  "key26": "37MfyxsuvCbyyeuUFVCDdR92gH9XZjYgZbYrmK9qqmQ6aB6pE7pZhRUYrBRFDZcLkkzFZ9z57DRkVypyT8TWxGoa",
  "key27": "3yzGjxuNbwViiyobjht85nfUyHGDNEwwcvHZwc6cXYjMVDTPdPJCMfmwsmyazei23iDkzjjUgPJphfeEZt6RFda5",
  "key28": "5X6XjccRzj2i4iThe91EWGJ9vAaL8uYfbvsveadwNPjwDzhGrLFdW4xsiJ2XHqnFrtps79Tdib82LEzc9cxnb9FP",
  "key29": "31wFww9Z8LDG5QhzdJTaHu1idhmGMhLA2CMnBe5Wrs5S8Gx5C8qXVUvf3x4uiqNDmYpbzDAni4jwGbTL9ytMMa5d",
  "key30": "4fNsCdkvFi3XYyUR8D6ttAaBCzdCTVoMbB8h7M8QRW3ZaGZDgEJB4obBRydmbfuJXBH7ZPWG8xn661SAc5NoFDfx",
  "key31": "2aiD1wXJEzxxU8KgrrGC7kegGCBbRVrSp6qAnR3yrkrbi1rTxtJCiY3UjjEhJFDf1wVnmFQqRT11RQ3c9Df9nB15"
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
