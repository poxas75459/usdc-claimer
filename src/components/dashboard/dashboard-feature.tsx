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
    "LSA5JG9LsSMMABBpThvjwdKAAQxsm3vDZGpARPJPcVnZkSnqUJZLyfm4dwi93iPiUwpfkKxCrfBCsmqaAeeoGWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTivT9NzKi5DBSikqLM5JUkpYg4th4oCKnLRHDyzq28waCmYcco5uyvd1WZ8BMq3UCDXHfqnUCbG8AabQcC8VsN",
  "key1": "5SV6VbkQxrWvpgwTvjF3juQAY96H66woJNkYCDatqVCQ4DSq4pCtyj3jtM8A7YjR4jaqccRZjtDje7yjv1QGEC6r",
  "key2": "3eXzy62ANnRpu1zppxfPx23bc5uN9Ecm7gxMq9YuKymLYhTE2M7qCy5ezwecZDvWNxfdEi4ksjwjbMVGjrmymvxE",
  "key3": "r4BWUSCs5ZP4h4uLEboPboexPbgThXF7RzecWuVXG2NggXnT4QdrpH9qB5rV56MLASDm1VvbxhP8BgGtaG829e7",
  "key4": "46VAv9RwqG6x1LXfnEasif8RayhsEBrTmFAwQb9kKeu2ypuqto8BZTcwMg63TVJZH4CcBYiCNqZvG1WpKxp94wBw",
  "key5": "46RCV4mB5nXcnZRdsY66wJuRibQZPxW4WmBFmBdG5FUES1nnLa2y6gQ68uhXt3g78RZHvKRPNqWoEbdgaUEZtmtL",
  "key6": "4tbXZUkBDePPe9hd9FDwiztfWuqx1UkVop7M73JwesbcPuxretDwcYk2P2uTC6zG35U6XBYnvrBc1d9TK21bakau",
  "key7": "5eKAh5yq6vhxAo3WcGKtnBqEn4hYxVx2QyA2vhUufKnp98YJtY6VXxr3hrKWezjWe49yW1izkwwH9aiy3UwA57Hu",
  "key8": "5VuvAVr6YA1tdxq6cF55HauHjQMm8YVdkgVu57G1St7R8XVJcpQvYwhck1yvFVqqna522QVGGVipTKJpFXwBYL2b",
  "key9": "4UQctVyiBA1aZ3uKifbsV7wvACAJxgZjJ4e7CuQuGoG1PmYMhKfyAxvmwEwNjfjqAq4HMY1Nfh2Qx2N84D4kCxVV",
  "key10": "2GU3qs1KukVxX8B454PY6jZbUhzThNmBSEJVcmaGVG84wpCG4RCCpcJitLgGG3SSKhT4F9TUuEUTSRGVjbkXLkVt",
  "key11": "DYJTFQKhK9azBmL9hySxmZazgWc5rPR8BbVbVUjeLfVJjwqCf13AccKaBB3vF5vqvWfcVGZ6j5XdiX8CR8Ruice",
  "key12": "5zj3ABZXwKPUtjAXNjT2nAEGA9YpKfWABsRRm5nfeUY3TYH2EXfL3YLXNpyqHEmnvD1ZG3aqQp681UnciqDose7a",
  "key13": "5KEqqVs2PySeQQRY1FEzBxR64FHADh2zV9F5bH4mrgx7RQQksrCsWkBQv9Zgt83JtXWxGVFtjej3dWadw5diX3jw",
  "key14": "GGH3Fqo4QJsB7iMKzbbVnkQYHUR1jvhMfF4BNbhD5H8HT2q3or7Fh35d8WtbtyhEHXodHQbyH86xFiZHBJhyxhw",
  "key15": "29Eg3ryNSgz5P7mTmHS67VdUr1hnhGLtzH6gZ3Yid5XtMHqxKhtPuEPETxuBWoMSdHgGWnbigjjqG7rnHWdbzaWG",
  "key16": "4NLUx4uLE4gTGAaKBX5yR8X4KKLW6o9jLNgY83wQDtA414N1C8ZRBjdbYLy7PGUbbjEF6MHTmnWFs6NqrN549jZi",
  "key17": "2Z3gzWH2Dssmm34AGhx1QtqJvTLqbnuwCZM38CuYH7uUMotd3vQiBBpspyQca7stR46gZKpfqHMBUAie9qqX8S8C",
  "key18": "4hs1w11GCK8kCxJWygxd9K9r38xvjQGCu34FYaiP1WzQa6H5ypckuxJcUEjaX2WsseWaQc3QVjqW7BfJUkbyQGpa",
  "key19": "3AgLcoM61jYqTbe9hCH3Nd7nSoTrxQ3JyP4pxhpuwFSE9mRyrKTMrCL8Frze1rV4QDV4t9MEc9u6wD1GoD4xiNTa",
  "key20": "zvJ9aAMAkjuiXCBx1uTBQ4WBcMFue9QEHfvszbdz4NNRzWX1Kxd52uvSEp7Mnmi6mx6KpCAWSFeadLjC6asqrkH",
  "key21": "5SDi8gjSZcP1oY6BvEYTB3xxtkHRyFmjngBLAhLSeoNeFvGJEenmYbupWeQN9KLnxqecPsYPDZJpHoWKx8LrjcX1",
  "key22": "f7CrxUAdbuGzNJLHk5nKzkzgLH2FqnXgfJLwKHi3tBWXW6LjuXAxW3HiF4w1qaJzFKMRafXYQmiewxPmqeedMHu",
  "key23": "2zJ5rAZL9pn3XNjVDNMmTMe87Fs2WYJNwJYrNNXnGgVnG4spHBkAtrYXMA9SNPoq8RfuRkxRWtqi932mx8huMapq",
  "key24": "572jAutRJhbpQCsnNuoVqaWwxZfhMPTFeL97GkEZE6KjLVnB8aMK6HcRxh1Mvusm2tq5AF8GrCGUTQNmJ7YY8awL",
  "key25": "2zuFnZpyTKceuWr7eWZbKUU37PA5qJjWyrMAhruVP5wa9rMZDLmvyFjaWEPoUmR78pv9kewEXZ72RNG3KLeRuEi7",
  "key26": "bLNWL7dk4TTpt3ofenEJeGxz3VKB34X76ExK31ePDExb87wJ8AVgLccqWb7GhaYd3q9Bg9YnUbSdnfYkmUC9xcS",
  "key27": "49RCEY8naAjCMtArL4dJA6DdAATJbDvNr58mWBNZizi6P96jZsxQizyCCoHSthhtJmAvszjGKDjbDcwFjZo7CNDQ",
  "key28": "5JysHnLGuQzEhKrnfvWbq6HbRE1vEHxnoCoKFwhfFAYSAThchMnMhXbWb7K5x24Ug6WPBeHJvXkh6iVYKrpeQJfj",
  "key29": "hX87KuPkmqK9ruxxHuCxvMXyDhhterYvqeSr85bVKANAErzPe3PDLWzSa1jptqFyUHDcT4vPVoRo3jw8d2J6msL",
  "key30": "2hyYZT1UkYrpiiUXJ7uaHzBUETeSooUroUMvn1ukvXsA479NX1yYcnYeRSFKsS3wyCTQ4Gv69Vd5VGY7UCbFS5gi",
  "key31": "5YRuKfoTcjRDTYxdJpgfr26o3PfvCi4Av7LSbiAuRYPbNekuDnTPZccpsPWn9DZYRFJ8jUUpdkYRy5rQrvzpKx65",
  "key32": "3wZs3fGQUCVfLUuB7HTtN8jxyTSxT3krcHGJdQBVGn1EnhwDeCJKusHhpnnLSHhuJmZYfumRjnXXNyXt2KDmgoCY",
  "key33": "prc9Ne45N9uxSvzxhTkQ25CYxdaSPBFMWooqyn5sYaMXJ4CsNe32sffeaWv87HqXmD1pauBs9yTeb724Xh4dUWQ",
  "key34": "281kRwNKwPhCmuv9vWkkCmwv35UNxQpXeLY1ZAr1GmgQrdfY51zd6qaguLrvnAu81knLuFqW8dyWb38gKdtkd2Lv",
  "key35": "3d3Rwzumk1q1XaSJtDMHdtqWPMrRDfc6x6bYeXPnaDVF4V5sgj9XT8hPpQrhRGtToX6wGZyHgAU7cczLygyvG1AX",
  "key36": "RxFVMPJiPxG137chVDoPkFnL2LZtFUQ2cHqDgZuiq9qfSii3XMSKUrGzUAMWveUs2Y9LEWkJoNkFVqVBPjs4vnb",
  "key37": "s1ETkYyJUB6i9WEhxsb6vXVoynW2PeMa4U2eJtAgMgANVqSYEQggocor2ZHS3sf7cuSSfJ7vmoP4SeUAtpHvzGF",
  "key38": "kHdqAqiEc5pDHUxx3ASWg9p2qPu7x4La56RHDzjCL1n3B7k79Q1vhr3c8rkZ8Gc4bNt8zAKMVp5wCL5pkBZomBv",
  "key39": "62htpfQ1ZRJMFkbrBazzxHJ8wLdzeuJqCPQCr8P6qRnR4QHGV6MqnzApgsPNvxheRjx6WpzxKWRd19bf5wyZL22E",
  "key40": "5BDxiUFLPHmwztks3zG2AesWopzNsLaEZLbR13sDQoUJ3kJD9YYsT7vvqmsogy2YwhSLBdpLk4nLbkwswDwpVm43",
  "key41": "3XKTLhFYLELnJrcbVKq6uWa6C6SkPgA3dJUZprngfgcmtMb3bdjTvvZ5nHyTQJ8MBLFmTCxtY9eHbz4tYJcJXyDk",
  "key42": "2a3cTKvq3ddViTPzvogbUfvZB9uqeSmomaEwyiKpNGrmcy7xR6F7YGswm3d1MQtSGeZVdt4pdfwHYswjPytrH8iG",
  "key43": "WzsJHwNtB8ECcQMioQkbhFCiowFy5Ltc87Nbfmk6i7fdtPApnFvXPXqrpw9t4hazATcDQz72fm7Ker21sj4VhPF",
  "key44": "3uq2bvUL8EdV6GJVg7iPvSoHmRXxa3RoWXwCMddwtyJWVF837MBrAQPq6X29kx1cQVvAxitfkZYaSFKTBoeirnuv",
  "key45": "4YYSJ5k348qWXB7gNaZS8g2Q9Du6hCt4y7psh1RJrDng4saMzBbz2JZ7RjyaDjmh8mBn1Tz2o4faAAkfdpDeJW4U"
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
