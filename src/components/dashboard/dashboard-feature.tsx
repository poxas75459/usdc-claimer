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
    "5953koGwzPKg4biUjZXzRxhEa7tigHygu613cwL2s1mXYm2oeoQ3m5FEGUxPJFHcZkowSxiLj6oSMwrFVRxauAdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ETzyFrxxJT3WxrcjfkooEKx3U8wCDqsjWFZkmdK4qkC6VGBbZyZt42heBNKRHtNKy6NpqTVeioLARCxbQ27GZK1",
  "key1": "zwkePdUz1JdGeb7SiBpHW1EK7PGXxYoJ1FtW5qBYVc7ieFiiXwGcuFFPB4Q7z44JnVjSuk9DDasMtbY8jT4nRZ2",
  "key2": "o9EZz9WJ7ywvcywGtgcnp1QVxQza2Pj9AJzPXkkrH2wYir1aCvZkmxLgLQXTvz7jAzs6kkp6998ibGgkjuVM4UY",
  "key3": "2TFiJou43L3uw7sUTetCcfeLW4rqjqsjQgZ6Gw6eaEZ3K6aPj4PtiTwexxPUq9vEERT21KqRPB9GLW89uicp7R3N",
  "key4": "2bAnyhKWo692tbt53ukAHXy8awPLYw9SpkzTruh3jy9iKEBwwdwoRECWye7vKB9y52PsvwSRu9EvrZTacZU6C52U",
  "key5": "33RUaQbLtqdxBgAziFMeMyuZR7YRuRZ9PKX7kV58L7rodkTSyEgnniTWdR1LeF9hsSKXDh8hMdpLbp6hRFFuzALk",
  "key6": "5oiGQATd3t8g2112oFEcopTrmMFgTcyshru3HJUhKWUgKqSyd4TjkeHwV5smXmUrmpiZYRj1wz4FMyzzE7jASEMV",
  "key7": "48GthvERcVU518ddQ1Jbf3ZrrUpGzB3jwuxUeCDz2uAT5UjK62WKeZaSqezajL9sg8yHZuJsxP6BUaJBfFz5jC4K",
  "key8": "55TPjbAyAY3DgwLAGmh9pHs2xJUSKCDBa42mjqFsahbmCjL5YxMBJgLFuNxmqvaHs3it2ivPR4G1nGW4JABd6yiW",
  "key9": "48RKUdn8boxpLJZwcZnH6WCj1RZ12zF4EmaZbqQL2SoPRHc22qht2RXpuLURmXfztChLdLyZrekjXjMDMt5qdDYm",
  "key10": "5GJ9riArBzHd6BUKq7QpntALccPygGHiosUcpsmTq6LMFxtDtZ43Aqnj1LeRH8FE7ZT3dVwSWkeDWV6bAaSbQr2E",
  "key11": "2f8ADtC2wevnM6cSPdR6oEVPtmFC6DT4rcjcB2ZvTpr5ws4PxijG3pLfwypQLwvzrYaHZV4eDDguNzT9qHLT7A8A",
  "key12": "3DswSCCfzuiyUiT4KHpfSSoJziEF175kxCiqdsUyPYvTeVumPDzMV3a37AgXgZ7Ug1HUqii7HcVk7z8p4qCerDJR",
  "key13": "p8Eb9miXpiGYz8QkoRQAAJ7U8n8ifD7Zx3VSyKK1Ejum1ZgMVnoWbJuMifUWNyHNKWr53Sh71yx9SsWnre3wE3F",
  "key14": "4D89uBfxJNci5vigrPQxGV74KegQWtSzVEiwhhxaLTmnGKC6W5U9q4YcWZrEUKK5EPiKxeprv9qmp89mbNJSBQxv",
  "key15": "2h8CtqQCv4er1s6bCqWnsgFoCHCXuAWomSRvEbSPBbcDgkW23h328Vp2RV1LxmaGg7JbSb9rPgKr2tgeZQoF7WPg",
  "key16": "3bgFhQLnQDeXopknYP1DTxmZjgkCpv7wumiz2wS3jJhzoCke9Sk41vqF4ix2MKwz4x49zEk7uoRkacUmonzLXWnZ",
  "key17": "4bTAgmb6yKYvQWmzTZXUDhyfCU8379FE6m3v1yuh9MiacgoNUdY9ZM7JfcRR9Nx5d8iAsCPAUrcKMcbNx1iCBTTN",
  "key18": "4F5kbuYr1SZB4T45EwbyUh8v3XEfcBeGJryPTo9XZGqKz88f6Mz2ou21mx4V4D8igQYekZ1Pe9uNKaKqBbhiUWjQ",
  "key19": "5XXv4bYLcZvNRTpqUNP4EaVUboQk1XaQiqtBud2c9vw6JPMWRuksyS9izUoaA1CSBSfH7rk98Zs22f1i8Mm5GQ3q",
  "key20": "395TJwHnL95ReHkNNvyqCZkoWajn21EXsrhskGmMPfgcKyuDgwSMekMVgs6SjtDcHqUmxbEV8rY3myNZuhSRWopX",
  "key21": "22XJzVV3VLkV9zJYT4iLAxMnfMfFkdE2u4cFHe8WDcsoX4dbRrzNvMpZuiUdqPjy39WnZh4XHrfBrRBSzPcL8w53",
  "key22": "639dgquBgvqZbMGoLCD9HzU9RBw32qBUsT1BHGv8TsBsCQJGSmBYfm9qojWMGaPmJUPD9smjbfpgDd3WePHGmTaH",
  "key23": "2m3DABBGpXCGxq9PmFmhXjkLWtjRmeNwEcanHWg7ayWThAwsDDRPGLetobLf1ibbhoHjCV6eZXaJEHy8HpVFrTyJ",
  "key24": "2zYYKzanP8MnnzD8zgg4iZaTg9K2sS2cir1uvQ9vredcfR8wdYiLSRvzYbHWgYF3cbgpVY8YDHBC89nWPx1bXHpS",
  "key25": "3PKPmSm5r1jheWhCeocZB1o44V1pf2qA5Zg3Wre5wQH7MPMDifqNPEVji5Z9jv9576YWbgycXHaTzWy2bZteXvUn",
  "key26": "5pCbyFZ6CC1nNALasRs8cbHK8CuKNRtyH3hLmURNBbZsh9RuvwBpsur2fe8hdLiYRJQ7z7ERJQemhECQGPvJCu93",
  "key27": "4M3JvURfAwYwSZ7NjPDYkvJ8YSg4pAvAKPqwtx4rj8tbkLQYiH9PtbKrrUvdjGk56Ep4CEBCMP6mQEpyRnHAjchB",
  "key28": "QkC35zYBKbzN7CCogTz8EL9rLf5KrutCJSoNNmrVc3RfhtMYax15YQk1AJv37MCiRNugDps1XyM4Pey3oEM9Eju",
  "key29": "3Ee8p8GnmKzdvitcMwvME2pS4D1MHHKTLBXFekL2tDA9ZhZXShYRXtey8ZuEz99T8sngFCgcL7Gpo5pXsC1xqsE1",
  "key30": "dWa19vrEoENH3Jj84g1JS2JbGPtJVHFvCgVhP3D9yf6ZfGpMLmkYxpcRVBCZUPvWDowfTFCgxdeN4A4YaZ3zYEp",
  "key31": "Vb9uy61cwkAYzE7z4nXWrdumUcMf1zeGbuRUg6AhFZinhPEdvLXtk2fz77n9qy54JkuY2mrZ84UqgPFdsBd8qNm",
  "key32": "4md7zmnTeunNmx2dV2kQU7yef5EZLoXjhZbJ1jMs3CMTXaTkkAwXkMkkEZvjjmrXPdHUQ7o5SoJDpwmsQXaqgiw4",
  "key33": "T4oxo8NpZrrESwD3i7iBM2TXSQcakYmn7s5Lontjpjkz1wdbz1og44VqyoCTcCbPfKuTY89Y8GpQN1MPv7BHQqF",
  "key34": "yTYE9ZJZy5Hqh94p3GPRT3ogLskyn1jdzVFwanyg87pVsG2n5WzSyRhsbo8HrbFyKN6kxAg27y3f8UHR65mq41J",
  "key35": "iaqa2Dk6K1VRY2T3D9RuFxsS1XhizcJPpwsHLpEhtzUC6sWLpuq3xo6NJ7cwx4hzjsMdmywczgg6nrFwa6AbQ3S"
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
