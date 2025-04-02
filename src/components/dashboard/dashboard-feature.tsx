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
    "3NoBiAd8tK8EEPqnuNNEiVwHtx8XdP4FRN4dstWL12tAXq1BsoorLM1V59PVqxcaHme8qrxfVyiG5MRX2vjdaQa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HaNUSntgwDUp1d2kAJfRUYZHpC227naAuH6fAbhFNKZBKnDVDA1sB8pUCfkjE73o2BB8aH8PDkoV4RvM4YrCXtq",
  "key1": "5QeXFezEGVYhLrhhipqRtrJwKRnDNmyWE6azJXUCGW5y8xQkLjgmtEVMykgQuwruYEUSLJogX6b1z796BJUu3tya",
  "key2": "4Lp1CS2Sm9SyLaqp6EgYRXDFwzEbkEsPdXgEabRWXh2pvgTU9ws2dRBFEuJgPoPeakaMVKLGzpQJz9dcQ4ibcB41",
  "key3": "4mibhSKmjJPZxuDgdZTvXaxzM4Edw9Enz7SQfSAq91SpL2zLuwqnXvJt9RQkehVmhpPBLFjGJGGbfGLxjUQ5RMCK",
  "key4": "uJJ849P1Hyp1hkRMFZ8dxkeANdRTjmXEbty9qcnRm5tHMYe6uLFAxmRKLmqQvK6QzkdrGuZ9uMTkcENnsao4bCB",
  "key5": "6qShmAKhTMMGZCVNr83Gre7PbidKefUKwGRi3xCHTTSfrjVBf55V3dpjQBLpaBBoYuzybdEu6ft25P2ATbLv9fs",
  "key6": "4qXnyKxm9CSafVG5NVVo49KVd6MGhAR41dzZ6FCb3bzC4JsdvAagfE5wJ8kP9R42QsM8rbKqsPe3YfD17sRMojEr",
  "key7": "238BBTvMaTDoo7it2T96xywZGnVWESFhyAd4k5LPjiKZX8PL8nkHjuFu5M2Zn23Zj78eYVH6TXfQn7qNATdbYvBv",
  "key8": "35bBvBen1cjjA91uxcnAu6hVGxeyTnULoXkgrqQ77Zq9XmHn1P2geAuCYMyFdN5j7zsky5khYi5L9kkC7b5g4vJh",
  "key9": "3bcWPYGZNEZgnvLKtK34qByxhXZGWVJm1BT7X8Jd1F6k8TwtKDdQqVrR1znaqVAu1fchhnfccGrofE3wkyPGFh2e",
  "key10": "5W5KBmVgmdtAYoW8HDDk9swpvhvGisqBQKbKWi1DvoY4VrzhUKVpkgq11HWMb1FN8BaWfiv7Sh7fwt4a5WM9ji2R",
  "key11": "y1YrdsbQavtVwKoQPkCTgirvh6doUmhPS7mBfXTPNTzt1465HpJCtCWNmSqpqcNw79hZKG1Ckjh89pMrJzTUKNw",
  "key12": "2ZnKbEr3er3Cc2iNctN1Pd2rwXaBF3Vk6tpTAHZR43dZM4rtziKo2oNAsVEFrDNUKmzXxxpjt4VWUELYmYb7jVdm",
  "key13": "4EhN5dK28CUZkNDu5Ymq6YtouwXjt3AMJJZ6CgjayY9A86wR2q5H4eQiCzKizYsktWx8SFGWmDQSzV4j92oQaXXu",
  "key14": "5cLDA9AeAaDGQRihwqTL5u25LGXGwKxD8Gdh4BNniUdEj2HrJ8xXKLT9Accr1DVrB65pUdaeUduX34GF3qgMRdai",
  "key15": "cRF3j7q2248HTvDniaRQSwYyvFMtn5ehnfBSxDZCqqSVW3mcU9UdnPQaqdcdD4bgnt6cvwDmNDnFWUMY7zrrWsB",
  "key16": "2joAuF7tUyKBVkGvfQwzh7Lew7ipgWdzQmkrV8K4Yi5Re2CMccTHh5MbjuC5dZ9Dqf4EXc7mRfngj7SbE64vczVA",
  "key17": "2qk89pZ2EoUbtstaTkKAHfKsghUHjbHuQBbGMGATw8aF1srpnQ8M542rdkaV3sJod7LUm2gUsE18VcqWmz9U8mNY",
  "key18": "2ZC5xt5SBjidiPWfnpEfoEa8Zz1Ezwpk7avJ6VL5CyFbxiSRovjkihyakKsZh3FMQaP659N5CZ2aypyGF4QvsdRG",
  "key19": "5E8oZevT8MSzNXPurYtruAsRNrFCrsJw96vqixSviaoytnEYX6MFasykeYabYes5eBgW6NVC5QeohobmSrwyNZrM",
  "key20": "2kMtRwdoz1Nb56xCaYDPBXcBWEEr6kap21gsuCyf37fof1jcjEuusMi7um4hFsUAsWQM4CYAExKrMbwNDmtLAuEC",
  "key21": "iDvM7c8NMjKg9eXVad3yQhRopQx4ZQ9bD9S47JHfJdYF2EQEd2DsRMqx5MbsCpwiLucUvp6QqMLeoodh5zoPtGt",
  "key22": "tiivEr8mUWzqwfVpcnbMaWgYsjihbzW1uEZTc7GeTb3Pt2E4EoniekL9GoFNVr9qBG4X7A7pa1tVnVNT2YbTggX",
  "key23": "3v8824oQbc6GKujekG9tUueS9wvgr3czH6FRkd7C8jCk7xLKYDd72UZ15cmQWjGj7qbiPEf3MVrm6FVDMhRdJHwD",
  "key24": "5boPvCew9VsvE46eydmyK8C9AVN5N8jpu6RLhTuMTC8fR64CF95tfq1zMcbayMVsx9o4Te8AeUFnxN5ixVUybECL",
  "key25": "ZYtAJYZ8bS5FYoTksEdXxho1fkMRwKHhNLZEhYBaJRr5m4SD3BQbXpjTQUVunjf2t1P2uaSBrLhgdpoHs2qUkpP",
  "key26": "3eLmC2Fx4vpKLVKNEJyn5w1bBfDhxRtdffBGSZeG3aKaFRGQ7PKMHrYZgTZUsrRqVNoJWtjhCrMEDL4WDA7hxUWZ",
  "key27": "2hTy3bDJyyss4JMPaGVqfFioa2PEEhovNdvSHKRutB55woAnzz7YxdKrtoTFyRcU9mwnMqu6uD4Jqt2Be3Zx8oeE",
  "key28": "2GHDD9Um6GabHDeagWpjztkDLxQf14WqLNmiYsikmF4miPz6ATBY4Rqr7vcEWe1djTz5BafhmgsG1EoLX9ZP9shQ",
  "key29": "31xCauE4RVbm72FV61V6eyY8uWWVhEyWsG5eGJCQXp2NCxmt2HkGQE7QePujT7S4sGAtjbNmKFWi9VfiB7D5URX4",
  "key30": "2JkMQLUhwttSLReHA3mxFKbtmaDzPjjN24QbDEWNUyxohcC6m4nQ1hu3CJnj8XM8zarnFWYkqenYKttGVunx9Jvq",
  "key31": "n3BNnkiKQys9oYap2qj74LK9xDUKE6aByPm2JXMpDk9gYF415yA2xvtp2CzYJ2YVsLaa8BWY3pGqpe3Tfa5yFLe",
  "key32": "3R7g4gWDM3epddvgspBjRXK8ST6SquwzkEnmumbqpc2dtj9LNmRXJ4gTBwrtjnMA4s4qtFpoPU6syQivkTKELdke",
  "key33": "3ZKLJdAWbPExPDyaUGBesf9ZU1ZmjfKsPMQZQymw36JUHAb16BmasGsYnk23D1znhjgueys5BeHL6dXEsUm4xFn4",
  "key34": "5gR35vdnyUJnuvxhxEBAqAeLiwFdkbVAK4QhdTsXgjr92GWqqPo6jAeC2U194AnmcocmVfps7B9wYXcX7qj6xYoy",
  "key35": "4Yc23sPb4uRPhexLxqZhynH9gbAiSpHafbj6WgfNZdg6M21g8nbFdNtz1p67WpRcKDkPQDAU7dDxJYx9pAzkdgdK",
  "key36": "5giUmYFb7kaYqMVK8GYw83XtAFnEzNaSYjsr6AFCrzd8FsJ3TtsCVsVgGkeock4C9hBHRG3qJ6CGm6E4GnkfDeSF",
  "key37": "2wi8CkrXDtu7S61P1cPMtxRvbestQhSKVc9sU6cyzb1hT953g5wgqpM3EarJi9Q2i9GK8hjuQRKkutj2jm7tfePr",
  "key38": "66p7EtoX8e4P1SHssMD6YMAV1AJaoS2n2CBC9dppU9Wziq7xzt2wzd747r5eG84Z3gpmoQznUFysiwHFWx4VbzjS"
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
