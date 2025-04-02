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
    "2qCCY4qFqS8fT9GSdAsjaqmcoFagbBMssUwRbwLXYp2ABHCMsScTwCmpQzhRhESeMStLHPhmN2ysgCky4d7mMUZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJiS5mGQAP9EY3R5wzXcNbf7aaEJRK64w3BQKpkKG9z5QQ2T2J5pfh7g7bUWjw5hi3VvbrDbovvz9R48UftrT5q",
  "key1": "dQLgbxSMKhqJB7kSpdVFfbxkWLxUV9HAG4uBw1iuE9WK6bv4Psx2HfgpyTskfqqjh1tkxJJQwDcauXmD4MnNAAx",
  "key2": "5TS7TBCiemNf4rrXxxz6c4GNL7esseS8uUqzZZJ8VS5LgqwLNNkwDz1HMtrti3beASDgwjxwCenfrbw6zHXYSN9c",
  "key3": "WGSg8nhgtn6fhh6NyvWStcByobMhxePJWvf36nqMjToWsSekYfY2zkgMzdSjrZyjYT4nAMQxiX7543i1UCMg7xP",
  "key4": "X3Mdu3GRUgSrzE7XA5s7JsjUnu6cgPkXFU4E85oqNaeamH2coAVaCJDdwbaeLRW5VUamEfFo2VrJS3vxvxxYamW",
  "key5": "5Q7wUpNfZmA9bAaUyUS4qaqioAwT84kzVfQ7bvwL6E38vxitBfWRWY4gzLu7bHgyprbwvSdDDcybpmjDpmVeA4pt",
  "key6": "4iSw5zeVYBhFrrgSDhCfnz9fcZxMYqo2yyUhymZr7SsBRhA4SDsrHGLiCuqrDpYHdcB4GuLBrvFakY2GT6xKLKWm",
  "key7": "61otSw12y6nuA4NMHkJGAFXCMJzqMEL4MnZ2c1gm9ajiRTTfNDYkS9KQwGVC9EkPECwqUNGWdjRL8dP5FpKDWxSe",
  "key8": "4Lx5iUUHoY2iJNXv5W8a7wuJReuQp8xWYNK2aL8NgMAiiXaSFKEjnANaVcBJZ2SeDXhfRqH7wYGsUs4Hfhfjni2L",
  "key9": "3pfr6fs1nNxpiuL2XBuEKxsnGWvf7cX1qpALPRnAmzjUhPtox7kZJGSsp2XEVZ1HjFvVuNivqKtygNTnNXYap1dW",
  "key10": "3FqQ3yGwpS9Xu55QWMGtFzS7Dvh9h6bNrnLiWoYTRpUo2wqmfK4HkEyPMAk74DkMziJ4EfV7qqa53rGabNtBcC7e",
  "key11": "34qV7ZUMdMgLL7ksMmUWPnX8oejXJCFmZ54gBpUVf7Ffz7zemQd9y1esmfWMBUtPiimsz8bZArheRf5z6qhBYsBx",
  "key12": "3pdevZKLZGuRKjD4Ppjt3jLXEmDwVnNg3Z5mJNbyVsQpoHWPuozwD3kBCmn53CujDFfL8rCkiptWBxVtmrr5FK5Q",
  "key13": "4BRPuqj8AM7uHBmJevBYq9B49KHX954amBGPtUaWhZyX6vcwCQGne3FeLQY1UdW5oMy1sJaMiAU8vDFjJXwFCfKV",
  "key14": "3sNTXrfCi7KyDM7RSWCsk5EcVssHix7atvZPr4FFphsVt6S4afGmtTN9ELDB1Vkbht52GZb9yxLbZGEtNaFgiz7o",
  "key15": "9AdKNWgkyx9H4uvU9gHeFUFvq6hbZ7VGjewVZ9NGs1H2uy85T4Jx1cPUGzRd4MPKjmDW4DobAH8VagB2LBtBPUJ",
  "key16": "3PMoBa8cNjYUDHdfDaNTtTphUwYc6VCsCPKsxs5XHDA61GNobGi71YSGzyhcA8eoU1f3dfzoUKRjTRqutjuY5uV1",
  "key17": "cjLeDjR1an1SmYtvg9bt6qFsaAxJkswtNbCz36rUvYpCYWZRhouLobQeBkz7iuZRFJuYFfZLenfo88dkfM2P8W1",
  "key18": "5fqNjzooZQQoSTSZy2ykQAdRXpcX1EYTVbCS47xdzwvTVvoMwZwVHh1EihxybZuXWGkhfxQVW6b1GuVdCsmb23ct",
  "key19": "5DgRRHf4maoaj9XPN4ApTofq58rMq8mwJASAEtK5RRBkkCcwXYMqkmLXFMStomfNqPXGV9CxrWntJ4jc4YJnkXho",
  "key20": "aDrBLzKh5mEDagcqFijB7L5CG3oDJdAqUo8ySBUQQegFrvoEtYSXVTpyPrFLLHUqeE4UnM8q3R9hNp79R3dwkYQ",
  "key21": "NycCruNqkuTYJh7nnVytGeGUYhyKQGM7mXw5ryCdBFkkwG2gWFxGgD8rqyjXiDQbmEx3LrLwzM6tCZvfeHW8YZW",
  "key22": "vStKEBuzymJPs9j1tCX1yyUPGyQy6oQb6vGviDQ6UnzzdWEy3LWGHquTESLTEEEx7TEPY4sZ2Yb9LNoNpyDbCyz",
  "key23": "36Rd48fmPvYPeV4mbzbR7VbDewLnFLWPuXroY6RRLSL1FyqiDNbaqL2A4esraTAuvRMNjMgR6qgAJWGCpQ2HJjWT",
  "key24": "CawYgSg1NLDmyAWQm29zJ98CcoXHjENJH2uRXs5ybNp8tm9BH4jKDywGfVxzYTb6ZDDHLeySusVUhf4BBd4RkCF",
  "key25": "4pWpckQs8AGjPMwRTZ1qbL4aDfTFJgAwaFMXoPj4VVfhChj2PyLncNWWSKWt6tWzjzJ2GhaWAi22Fw4ps6Pqmd7T",
  "key26": "nzmFZduK5KQXkDDP7sTJKtnBmfKfQXLfy7T3emPhh6Juf2ovVcoevgnqGNhEUCEgzgfnejssrbxcNbgn5k45ime",
  "key27": "5Wo2BsmbyxZpSAt6fdrHsFRS2cqyF5z8jfhBEbwSBdH47s81DUz4XLmKwMQ57Bjy9UJ4iQZwqWjVxwngqPGK1y3b",
  "key28": "5e6w4dfxcY8JQ11vDAYxAC4MJ3yuYjcAfpE2mV5bQEdnBRvmoworu6uu8bEMu4XNruzgmBJZcqEK67YiivFai3mv",
  "key29": "3jjTE25M8bHLG7qSNAk2WdtJx7J26xXug9gx6o1tPz8Mur5rg3J5f2xQBRsrAu8ARCD9KG5pVV9uZb5CB1jJL82S",
  "key30": "aFpn44B11CRm95BVJTKkMaDgcqoQYKyN7Ytf6MKLfFeLMpPq5PpMeR7HTWP7rG56GNAU9Tq3UBUc21biFA2h2XB",
  "key31": "2wpx4CMYBVNnm9uhct89Y4tLvk4ZKcrGVqfdvF9zhJt8qbstFrLNe5Q1e8viPhCcXxjTWCYzmrUhv3AXBiK2Q1pa",
  "key32": "nkYJrxYgvyAVLWxDRWqhwr8VhDtVKPGt1MqBL5Q9U6betVjtPLCyRTn7P1P9FaZfWobBAfpjjGjERkbgomWUiuE",
  "key33": "5pYaP1mCsxzXTwGxefdcuHA8jX2DcVF5TmGYnH2rKmf3XAhyAB8brdMvzxk8Prpchtv9G3E7gJq2GMTAqNpPa6qD",
  "key34": "4w31zTwTLppWHCpKtCYD3BvgGmqbM4Ac8BsBYh1frSzcUGAVF21Au7LfYBKJd5XGU62EVr1Pmu5bocCnMQDJM2BC"
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
