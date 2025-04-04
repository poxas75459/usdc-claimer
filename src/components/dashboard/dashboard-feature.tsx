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
    "58DFUTzUKcs7kBrvAVFQPUhtbnTPexCogK3N7LRE4rJE7Mc16Z3xMNmigiW1nSmjhBrh3A3JG5dxrMaqTzt6tBe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8G1X4zkPwd5ETxncxEEz5xrKVkXLyj57jK3HoqUuvHfN5ye3b7JCqTiQDN4ZisgvME1mB5CrBhmtYQZV45hfZZ",
  "key1": "yAg9mvBsPm6qP32xq2WruysBegec1dRBFYA92TLEdWXMxc1MGjvuLTXQHkd71u1sZMAPendWGj8gu4efzqojJNx",
  "key2": "5sMtwumMJSThwS5nnA8QGnyzKxYhiGrX41UQLseeYRG8dQDAG9qTCvvBi7txByNWRMXDdWRvdRYiSZxN5cQFiUgR",
  "key3": "61Xb1dDV5otDjWvtcZvdXVTWEXccDjwbFLj7Jswk3tQGY4ESWdMEm3f6xv6D3fFvnBHywiHxYRMnAgGcVfyK86H",
  "key4": "4arEdPsJzNK6ghuhfu8GrRzuDtvN98qcWhsCUJ5i2gjLGnFCY5wpfeMNsNi3ePMkSmDzvv7t7cw7PpgFqSVwgR4r",
  "key5": "36y4YDxSGfUtdFwV5nU9JjwqbLebiHbTqwGXEGg6savgZpo77iyx2DHkfr241p7sAvWdm3nUtDLpLmRE7Dz4tDVV",
  "key6": "2trd2suqF5jtU9vkRCe6KDfNv1PW6Ld4A9pqQipD19J47Css3B7WPpSYAtb6bCwnVaER1YHPYq5Ss8mgNUy2kLda",
  "key7": "4TBTjcAkDq5cHQJxPnU9HG5LiLQMfrzKvEN4eEgjJgVCoryMb7bSijsoJ5pii2NLEgg8z3unmYBLE8R3m5FSAkwJ",
  "key8": "4avUQZSJuETuM3aBCCJHuRCKK5vkXC2w4h1NG6TJg6ajwMmT2mgN4AEBfqyBFQj17iCkCemCJuz69nWdxK8HrsvF",
  "key9": "3TcyfQPpiWvCrG3tR2XVeZ9TdrMqaZ1mtUwBPwc1cBfumyuZcTCWmZ845iQLGpDEHpJDhGjmpxhsMg7uK4AfaghS",
  "key10": "3cP4U6CGUERkujJEMB1z6u3RvoY6RJ5WttwrnLfNipEd2Q5SZVA158SFr6pvC1rmaHKTUGNVcRFuBx85XVX8vQ8u",
  "key11": "5ioTLVeY1BiCBR5GurpsZKxM5P8H9N1Gs8C74H1qRA1SdmEr2SUE9D4rih1ZvtPTNVt15hkmoyjmYHbK1hC8C8dN",
  "key12": "2uZ6gmXRGkbzMdeJ8pjn3qK4UMTYpv3FcWX2PrEXExvZf5J32bwFccFWDgmdXdAF7HNTZyiMqcQbB41kGkWRUwxL",
  "key13": "4jazXp4xTW1Jfv9QRAm8igL7Bq7hDUH7gFEDMt5v8LpJk49ptW3JothFSC9bi1khGsjf2fobL3ygn4AM5udgCWFN",
  "key14": "56tSNuAzS25dTh1fwq7EbQMLbcBzUL7FBVzgHteq4jofvPnVSaATKWhyHS6r9konsncmZruHkUsgg9iWxhWk6wXe",
  "key15": "4Gw9PGCSvGvn61oJt7pVeN2L61Kf9PxQrwvqUMc6e9n5hixp12ZNSjPJSLYciEYqtmJJXexf7Hb635e1vq8NVKDE",
  "key16": "2hKVXAB7jpmna6H5Vx4knNkZE6K3HfcETxf3ZWpi4T6V8wLQTCZwRD9vB1KSjrnKjSYDSY5YPHyu3BqmyyojrJi7",
  "key17": "49y24FPNpgR1ix7i6jejxufn5z5mThe8KWGw7CCWSjmhntc5GvqxQSVYg1aHaHBn464zCWEM7F9UscNLVC74ssWx",
  "key18": "5ZCBuombd1UeJYp6KphVUkc1DZfNrMHYKiBCqGFGm1A1G1u7js6Vw8Hiba1n3a348KF1fwK3kwcMFGULuK7kbV61",
  "key19": "YJXy5GC8unSQBNp9G5YD1uA3jrNLxuF3pF4yZgCdvYSLtmGzuySEYhe8P6F9VNFEo5r7dmFYWeXttaPMZfWyjn2",
  "key20": "59Qw3pa5pt1cqCxZvwXCyLxDGxWfGMjQeRFE8X8o3wJEuMtdYd2hJMBSkxNF8AaXwyPvabfNLnmE7VSHBYdGbH3i",
  "key21": "21qSmMYSjK22uv5Y4pgsdxGWh3ENFS8acDJxHTxqRReCWEJ5iam3dcbVhsisekbiVggNay54NHQGD1GCYH4sUcz9",
  "key22": "33qGKKvY8i9GE3eD4meLjx8pSpssB6r9iT9NaRX9dJaNWQfC6bgyXP6R3fCkHeVggk5Ty4QuzAvK8ZMUni1rs7C2",
  "key23": "PZ459DsWgbcX7ADKKWgf7dAD8mXod9QMQuN1279KWUxzHw1mQK5nSmxTUPwKQQjBSc6YEHz6CecFRKLAMaCT8bc",
  "key24": "5kRet9VFWLoqmyWsfPrVfHxv5QYinoF1TcFJnQq3Fr99wobF3B38zCXXXjS1Q6pV4J3QQVpSD2N3K4gL8kVbqZ5L",
  "key25": "28TwZeFwp7xykCEB6efgqbFNEXuzYy8S26eyjGJ2YBj4Y6YdNK6LDTf5DSvD6EqGQHBFegZxxvTbzz5gDeZtrGYL",
  "key26": "5joa6VFC5KdtK5ipsPpVsBXXyvjmNJaryx9KSp18Cx6ea5cB3H9rNShRgvLoUxJBDVNJeu8pgRSfXLwfZsSRDsio",
  "key27": "4Dyt5Wthk6ch5Vfy6DZHe8x7wu3tgvEMKkdSN94TMU8wz5DerXuEqRAAmy6qbXGrPyMy1Q4QYai2FyoW1cbHwQmG",
  "key28": "61QiqD4N7QB65g1ZMjfM4gkSkDZoDVQKhjk6f5H2m8uVt8pcPpvrQW7tfB8moENLMx7sycDGEhry9TqntNrSvdpr",
  "key29": "62R68vpa9UM7R2zRWn4qjhQGxuKz5Hu7phzqCbp4Xjcx1CXsnsuG45yymQUeZb3daBDWYsaNwqkFV8nxxMn7Kksi",
  "key30": "4KxnyHoMkcB5vNrDERwWxKH3YtV5NHNZvzEEtm3CaDkQfe5ouF2PLM4bwHqP1B5qHZQie5FxcnjBAFuVNwg3KyWJ",
  "key31": "31Bh1rg1jcWGbQcZUTbVWq5R8scRoDwoH9sxV4Wr74qWKzgJrRsR1JhZiar8si1acMtquRvfFEBBLPa4UmvYkbEC",
  "key32": "WU5SyruzXqqiHvwWJY8WghUxYJrbnUT3ASitY1a7o9sWNCsph4eGpepj13zZaduy7qFaG634BP84TVPBSBTRuWG",
  "key33": "3nXosz2qCheBd4eTbjZ7mHq3gbLDSucCFYrbFHwGVBsByhk1pfkYYco8Zd58PgUhmueL7R4cLzVax2EGt8QbL5MP",
  "key34": "4ELmKettDaeeKo44fUa7f7F1v4Kxz9Y4f8XnxeTyCFF3P4Bfz19cr7APh8fLApFPbJ3uZECxatZgg1p4wDxjD48s",
  "key35": "3Uq7kZCjaXCQQFc5F95TkM977Xi3aTwRacRYj5vsKWamivoRsvWuYRADrry4ZYHVw9SwNaZTWqVg7qr4ZLBjUTGa",
  "key36": "3SQ33beq2X1Mc6uk8vqXcRjrkQrJvTQudhKNxoDSJv2JJZ2buajsxmEVr9vjwZjamgKei4hnCXpRNVusFysd9ec9",
  "key37": "tVYT6QNT3bAyzvH9WshUm28A56wiUms9WWMub27ZrVTxnmdTNqRpxb8igBGyf1BJX36iFDytkVkMEXxcPdk4zrk",
  "key38": "4aPevohAux6e4ASJwuobmt3zxqE8uoK7xrhXnakvnSiLyuBnJJs5ZFUafXRAnF9qYvoNfg7XuEabccAyqwdnHtHH",
  "key39": "5xJM5w7aB6QySMtU6tykAJkX2feBgvZEvGVGmv5HUyN7ChvwmEcVZbaqmv4KpA8PTyhN7TiBvYgw7Ma38TJMWYYE",
  "key40": "3B7RxaGAtZ1MXdVoAWs7yWsjp2mjScVcGKYNd3XZHNvBVs4jf7UVcgJbJUWvoF9d5VxfPj3DxUD6oNvQKBgPuiU2"
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
