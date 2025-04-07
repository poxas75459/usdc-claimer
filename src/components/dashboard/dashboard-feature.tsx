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
    "279reWjeEA9DTB2AJtvifpyC8p95w1aeu6HB1Wh3Bf4SVM1d7tdmiWV2kkQekFRq4JpNmoTHc99gqYZ6iA5MNA7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Sx8xTbpf6fxWKdGiaVGW8ArytJ64ooTiQ2BtV5htiDyxzNNqLJTT78tgobrApVJ1s4fPoJMnV3MJeh5arUoABk",
  "key1": "35b3Q2AfxK9L1KmgN2P7XkyLjSYAaixKmiEBykQK1mfSmQYvKd5sJLmDxUTXNYTLKWrmwi6SfA9DrteiH8RwQxkt",
  "key2": "3RRT5HCsAHbxNb1jMhhby521cN4X3sjpi66274s8V7b5F64TQytS76UqPaBuzhvKSPn6JQW1bMcZCbKoyUd3u3xj",
  "key3": "4VW4FP8FRAGmNBt1WbUau5fYgvDAnoKqcYcnFb8boacg4EvNTqLb3bV6hpW9viVBoLt311812HRA2CPDGkotTcRG",
  "key4": "2boYQz7YZhWMxRRh7ctZgiuvsjg19wMfbnRzVCGJZvSj8H7hRNtohhmG13Smj5RcXTVx4AAnbSLUmatSMP8vL1Ej",
  "key5": "47qv7ttTXVuabsJx87sWZibU6p1HeBE6tNP3oUoqgeNfYWh5KfHXsRFxw6jyEsVhu2b44dJ7GWpABTgNQ6fab4Nq",
  "key6": "5faq81EVe5K9D7xyDxNVgogWxvEzsmDHDX5biHEBwvExrL5R7tepqMeLg4BDcRoBHSLkZo5vCGn9CQBFvwG5za65",
  "key7": "hCd64qfrXXfmAxHPbdmVmAgAwgGzrM8w76rZ3iaAa4Ga1LhEB8NbF85HxcV3Mnmg367sWCfPJH6ZYPuc5sHTs8L",
  "key8": "2dPd5riZjds4ZvzEFGg8RSkjpvnvzodvcnaSURad5x5rLWme37CRMadFVXRKCqzZN3xiAk5PaqsutG3kAZKwheTk",
  "key9": "1zpFaM43jaFJhW83kaxLpdc59F4Va9CZYPF6Gx9URJbVjVLg1eFp2ArvkyK3Sjf46ZYBZuretVd9jLzBwVzGfPo",
  "key10": "3weQcsXxoMEe3HH7urRrfCiNzoe2tCGbU8JbH6p4GENxBq4ptwNrNAPvQUVEuw1krrwT71S2ECDsxVmP5uHtMnR2",
  "key11": "4Cy39xmkTnH8FNxMV4NSTe9HictDSwaqDrsnLMv2J4Pk3YG8snAJEHdpumUEkNF4gYnbUk2AySFCmfjxwvuR8sKr",
  "key12": "3fcnTW8TSjSwKte5SEzuwBkPGtJLZJ2tyWYWmgbGe3WMnL7cg7Te89Y4Ce4Jx3eJkP1RiJoF5MZb1Nce7Av2eTZY",
  "key13": "fjGhGKBD73KcU5NdRPgRmeBHS3mEaq7NDFUZPkVm7r7CT3RWjysbKGJiXxrvwHiFPLp3uRoG4Trqu5ZFx2uFRUs",
  "key14": "FF5ewkHUTMSKQzCNKYb892WrLHpMBqbE8PapAP2yLfi6kKAtvJYRRMjsh5uhWegm3Bv6rEoBuMkVcrxJaBarwma",
  "key15": "26jqVVu6p5oQdVUWpPcYHyPft57bYodoz8i1nTyM7sBgKuGEj4BEYzRXm2mqBpvSkkPb2dJ3sYTvMTNdM81fJzuK",
  "key16": "5u8LYdTvdH9foQuRrsbvHoBQv5nHsXEpwQzEYnsHzpJhwAvyhf9Cx1EYnsmPFj9ZN7KRoQBDHHZmkHndGvzSkC8Y",
  "key17": "3ebbedjmJwc1HtyhBsEqk86PAfCQkQgJhBJALyeedP2QjA4ARzzs7HMDDqecvUr3fTwtekA7a6b4eujsD6YkTS2j",
  "key18": "2Rp2da33DLyvXaV8C8ty4UkxfXuQySncehRJu4LZYoZ6mrgzfJCHgzhKNdYQ8UZGq13zuLKBZTt2hqGeW6xZmQbT",
  "key19": "3XNv1ceDkreMrRD8TD3DqFE1tnXLZNatrZS3wg4BFK245Pfo31M6MVQ7g7F31GVaoXhup8pyFoVYdb6uwAqyyPey",
  "key20": "4WYU5huixtiVs853MedJFMksZEKJzikbG5D3CpfvPgqqBjPzc31xPXNFDEgpLUcZGBNBrSFMLXxtmSdhVpABbwd9",
  "key21": "2rxMRyMLfxCMUMpkP3mpWVDuWGQ2mFcvj6WpUBMM77NRPF7zs4Y1fusnFB8jHTcF2zQJiCncUnmkYCF3DWKGV4s4",
  "key22": "3GNZdtA8SRV3EEaE6G71xTyd9iNouGGGyEfrMN96S3m6pF4jUfMLmJSgeiSZmsk6HKWq89Zw2268EHTYXgci1mpP",
  "key23": "43UQJh4bqujof46ZikizCNFpwGbPSNUtyAXu8xsPHXVU7ZpuR1QV9guzq8VWMjgVeyb2vaJrxQZprvmU3RdYX1sE",
  "key24": "4uZi5jDeWQKRn2LcrSyTkeiTvkiiwmamcus9Fjd7JV3kFie6cA26uCR3SuNRrGKJ4iHmvGfH3nd11sSuiXwnvxV",
  "key25": "5qRCCCAuueddqGfCn3yTjqbwgbKs5QsyVVQWRDpRPRMsek4J3kJjTqvyP6u6m2FNt7ZwkoDJe5cN5vtqMxisvnUv",
  "key26": "5Mg78L6AMJWqsJzhTBzKC4Lgr1BMjPmMEjuQPiqMRHPg7FbMigMJ44WkTDXfxKX7WYi3KUzn6tFqna4gx5fRnvZq",
  "key27": "5cnBRQis8Dpy8C9enyaVa5FQphee6b5eWdboAhwwcVmP9Te23qmWBpfvJcpL8UgxubQwNDp7Xo3mDo3VAzix2uMK",
  "key28": "5h5Amx4dLF4URcu6sPy7gifW958XAHWMh2VH8SMiK6qzQ9s36wCV5RBgZSLgtB1hCYrxECcWPdhbhuxzp1WXdsh",
  "key29": "51tYVdqZFf1f7NhpCVz49oTEsRbx4ofT1KdEeTgWRaH8skj1sRUZNEUwX55vXZGNuYiVuewWx2tHsd4qRkZjh7c9",
  "key30": "4MsoN15YPz3rs1ut8ZZXYnsFxcA1vk8wyMQWLR8G8UxVw1eJHFax3LwoCowHDMKYwRaTtuLTwGtgCA4JLcapAi7m",
  "key31": "45eLJ9qdPDafkem8j181gWP7YMx33T7GyFFs34ASdUigT484wCA4JFk9gpnT6fqAitvMAdgKGjPYimDtDyHjdFDK",
  "key32": "29R1gdY85t8pKnhG6aViq8Rh24Ru5fDs8FFpbRz2594R4sXnEkyVeD1q8DdQQDJRtpiRy1pQHbDtSaYyHPGjGqXw",
  "key33": "Gp5xFicQvDJYFnQVpgxcFbrYSU1EXE9vxJXMmRa4bbH4SVDN1cazor7yuLMNpKP9eMFir71FXYCt5E9xWoj6cok",
  "key34": "obBg7xJfJyjHR2tnFiiSy84w2N6bqFg4VN7zGwUAQdZ7S2krK1FakJ7aT2FTJcCCg7LzDcuAXG8X8ixSvMVwqLE",
  "key35": "62w1zYPgQznh3xQFw3HBHxtYXUDnHGdwgxUcym7WLVdCfj87FhoY2z9VxKVy6Q21X46hr7AJRtQrcdYQqpDKhtLE",
  "key36": "2d666noK5uqrthVaEzM5TvcJ4oSTdX6Ptr5EwgMseGLTZF3wk6U4cibUonj5bhXuw1VocafjWnwhyPsV1U8DruTz",
  "key37": "4GfrpZQ2GPEXPYTixetTvQkf6YgX2htY61VuPjaLLp4onhEjMGvzQXT5EW7cXf6xU8orVjSCBcokj8HGiFLgFpDE",
  "key38": "4VSYRc9jn1CNQYYzXX8yZFH5YRkvc2n4SwVvNJsjwPdNE3cGSsHJa9WEd8vCxmE4Rcxyqt5Gr3ejwJXz2mq1S8pk",
  "key39": "4yKLnHQwazCgffJfA26ukPSPFUG4R7Ut2aW2Lqv45GyifZgJTQBA81puX36zqQcYgyt1PW7W5bAHuedArtnuRs8m",
  "key40": "3PhXvqeRVqcdH8jyRebe3D8NbTKrTJ1nPgYkNtSAGnspYKmBFWajY782hrFXtzQ9B4rpimpcHY2VzMP3WzriKiZC",
  "key41": "SUvbeJfJtt8T7ZbfwikBch8La1MBis2BFX9Q4qrWfuM7ZSbRvsTUEZZ9gvyPGXataC5CUG6KUDatnRWHDuVCHui"
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
