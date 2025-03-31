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
    "4AcNU75mMbPTshDSdnh1ARsmRvEkDXYT8vP3ZSpFgbBafTq4kF9rphnVMitR6TjR1Pz9josdUw466FGrm8G5f9ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UX411WRx2FNDLKRhXGwWRGKG3bnvpgJ5ELs6aLKBRVwbqEdhSuUKiUxiYaVKnsvnVdUHyy1mGvK9TGt2uTyPmjY",
  "key1": "5bKTpsBbMwMSuQ8SFDvuswYQeA3RoMyHmcdyYT7MFRVYEt7n9xammsrvUk1XeDDQiHRUHbZFKww6481cdD5kc5b6",
  "key2": "63gV9KX6RqRdrBFh8GodjyMDzCGAoKnJozWy8VNWYjgYGPh4xmkuBSumi3yi3VVTW8yxSzF1i2pEvaG9c8UM2sj7",
  "key3": "5VUvXsZnRFoBnxETL8pHrw9krwLQP8vJM8axe2NP7i8MGCbdjWencob3jdrFkajyHdWF4bHFgSsnXwKHRXZ9jUpq",
  "key4": "2ngVLk2A8ePAXHj2HQDouqevAhe2vNcChM6HXsGvqqnPKiDursDyiaAdG7TCjL79FkaoptE75GamaQuum6mvvf2a",
  "key5": "2Z2BRBnrnFjVHBhr2VzVGqxqvJo8EuSSn9svndZzfFhWnkXiwkedkREoqP32p1bDK3sqMDQKKhUu86cETFL8n3r1",
  "key6": "33H5pYiB6gvhJSwWpK3znoUjdik1XAhEB7QodZZfohyBPQ2UEsyHMWPyhuF8yCqWjdCUYt5LDhiMSBg35sFUDdkR",
  "key7": "4HnVQn1E5pAxwQ1cLyFKMmYaY3GPBMqfmQm1rzbWgDoaKBfK97bWtT5Ncc5FM18Rh7jcM5VcWUz5xmxRc3zg5ZuA",
  "key8": "5ujZYaR49UrRdVAYCahKWyTKm74pan7v3YnCav6BVGpfYox13vN9uLoCGKQaBR6D63r6eqdv2g539MtHLy6nxzrQ",
  "key9": "zeSo7iijKYhq7unZRq43tXgRCb5Jbd5RBuCLocamQTHHcCGxLxuphSWJEoXhG9JaW72eZJzJWHubcrRk4NQXbaY",
  "key10": "526VLyfkFWj85bBNDC8BmyrYqBE24EPrs8SXDtJNyPwUuFZ2rj8eBfqjg8xcwfZFJFio1Qvc67jq1RsF6shjCRWE",
  "key11": "2ayUQ6Bh68yMUfNwnSZhoJRyDvDWqstNTQFawSpNtTVxaGrpS5FFPN6AdjdssJ3befhiHzbydd5VqQ8DLrMSKzki",
  "key12": "3XbJvh2h1DmwQxCPG6i6Rc2vNN3BNfqQQnCpkG9hwSHq87jaYuJuYaHFya5oiiJTbfwdAgorzMybdWWFbcxsCHkU",
  "key13": "2s5NLY3pLziWg5b4vE2GzSCTVfTR7UdhCMNokiyz8nfMh2zJV2G52vNHQU4DKMwKGDksKezZzitvtW31Jygj2ER4",
  "key14": "4Bzo5FmojqZe565NYW8JyBoe8Ln1seEstwBZPs62dZSZvfc3E2v2ReA9D2Kh7T3ff9yb9aDjpLxWzsi4ayMNBBNa",
  "key15": "2FxJ4dDAw7zuLEaoGe47pmtbni1QC5VdhkHJKTNRkjuCxxPS9KFWUUwBcxJvAvzPQuvgAJHw9oxh1adfWDQN4FeV",
  "key16": "3qaq5C23bSrdLXnthKMBuzayf6gtKdP1RM5UH6q57ZPHungAmxPSheX8ZVmego1iJTdFz9nYm7YwZv3she3bqG8U",
  "key17": "PG9KNEaX8Zwv3sYxyRNMjp9ENzK8Y9sP4JE1NVtUxrAZZ96Qh6fXs6Gz4wiALpNMhNe2bMRmMzaDExpKfTGrQ5y",
  "key18": "4rPtNGAcvNABVyTTq8x499oQwWt113m4grGKbTFubSfqnwzxjeMwxaMsk11FPoKEZ3gKTK4z3ZWiwY2zNiRZBbHm",
  "key19": "4xkgZHJ7hQD5F2AXUr5hy3fkcSmHkGjE3VUEFHzgBMT1BL8HiKqt6eosZe4E4nzPvfenVW1bPxHNspFmhdLSi78q",
  "key20": "2wDtXL1GY3qKMmSdAYxdS3wUiWVxK2rt3TMkaAVKbYjAVbH1Pu8aW585wp4mxz1mEjmyu7LwdNRz4UqkHtsnFRCH",
  "key21": "L96C57JDuNG6QqLuTtLihy7zEChowfXi8Xga5ph9MRHQP2wi4ddkj8bH1qwPp3kZE8Tm8YspS9W4QKrtp5UEwbr",
  "key22": "2moVU6X79wb39UqtYyrpdYhhj7y1BeMgMmwebz9D2URVbPoJqtrtrT7SD2qMypApZsQgc1hTRx46Tsa3wfcPNGQn",
  "key23": "4HnLdMbLSMhZ5kPzsK2Ues6Wi2pueYLqJkFy4bw2R95XbenMzw2Ua47EYbsKEaN2HyoqxoRYhkWBMVeAhLjGncKT",
  "key24": "4kpB6AgSFfHj9b2kp22qqYAb6YN2qB5Ci8rXikXWWzrrCvu5w4seP8EPcuRcpbJLDB9ghJ3f5qgpUK1M9hYVR6bp",
  "key25": "3EX9hKn84tmnv4yHHpWJjXQScDoSoZhXj6U4v36unkFTorbjXbQC9PGV8UjZPuWhrV58BEHQPrnmiBC6QtksmxMJ",
  "key26": "4i4XBA9KNP8TG2RWGFV3t71wf4mBCwke9aVDe6HoK6EaS2RoNDYVvMEAJCkQnGgbmPGv7V2bgEhyrQ3bEjciYSfD",
  "key27": "3q8S8FpkX51yDP3Y2R9RDsZqSpKgS6YdKMxVcyuo25UxreCQWLexdAiuBRoRgN12nS9rmAvux79L228fLGA1v1Mt",
  "key28": "5bfdaCg52SvEyyohUTkTsCeW4qXbxdzAe4UWpWqETej1UfqZnyfGQzVF4gioUt9kmYxNL6pqCEe7SAqpU5zbHMiG",
  "key29": "2zXv75k9c3ho1o2YuUzge82HXU4y2QgMZTXVNcut1zz9wKswokGynAmXdYviSv4gxSrij2gV9Qkcv8UwWuSMg42C",
  "key30": "4kaQHmfz7eZj1CtWEiH1N1qgpkULUnZtiu6n97TEhSyfvjHCz79JY7UCB22SZJFFa9xH6hWauLroHKPJjfM7v7Qi",
  "key31": "DrrTU54BnPaNoeQLNrzSWkKKSnRxna3SnN3EgRxhmnmdYEutKB66hXkre1ggpBnLE3zSWsEfnEMaW1fq2e4SGjT",
  "key32": "3CXAWFn91n9ov19ZDjAh3rg71vzU7evZAki25ngXdxvokUTe5mRT1mwZsuQZjU9iyDjkHsStcBnyoLS322wfRKSX",
  "key33": "5cPLbDqVe8isUfhS8PP7kfd6X9pwsw5MAUJBgNEgZzTknBZEid29b6qCNY31QafRqZFucPXZBaTz17rCu1nwApXH",
  "key34": "4DRwk2UPMBGhshXvfvjfVK4aYfYeuBB3Lt6iotmFMzmTX1ZbtzCKdjzniCzqfFfpzpXyKmsuw1pqYMA4Y3gQ4AJV",
  "key35": "42yigoqmBRvESJR59hN3u9Z3VZYt59vhUdupXLs4gyVenPcDohAW396YJYmcGnyJL4PZGFBsyupyYma3t7BsQ11P",
  "key36": "3ojUGLHX9geMf7SGMW3F8nDabBWgK4R73vtRas5G7HwZvTdGbKR4eVvAUbZ3TPUjm6ns7omG3ZR6JN2i55HjXDV5",
  "key37": "33ZmopaFWEQYwGsb9SA12J46MQBL3vSQRdjaKApJQHQZf7JKS8tDuvQmdKYHhx1KHiJcbiyZHgmL6csQFzyiLtmS",
  "key38": "jWv7NbAaBYjGDXyuBvFdLcmqxRMZ7Rf41wHfiFhr3n7sYer8TcTFgBdZZyuuFRe2K6UbritriAyfCWS8sNurcrg",
  "key39": "62Mms2ByEn5aYLgmyeocGk4tY9gr9Bs56iNWcGiDnhizJhrfnaX1wtrf6NyZfSULWtjFfD74WBGZQwrQKkF3td9p",
  "key40": "2jPicWVjps1Y2FTvAZwcu6NGmPDaorAJzgdeZjvFKFoQ8Kv2tWE7yMVRvnzBpRuoWBaLkShWyz1kSfdnGCBb19K2",
  "key41": "29dz5W1NcZRMKB7hKfg1sMbXeLaM5vxQaFVPSNFfu2z1kRbkXaDcRvAtxoHEitv2fymehEcBp5f5ppPdWT4HBJqA",
  "key42": "65QSfqiSdvQmjbC9kb31c5rAtk6KPYX4SnQC6djCPwaRsvPKjJfVSuSinje7nmAEgjZUwhswFghGmkSpkkHrGCCL",
  "key43": "46gqaqZBFpzUeRxZBA3dnK8JAKYQpEnTzUhc1qCb5g7MdFYTC53K2CqobNLCLtX9oVDD4eGXSaWSEfjWxJYJopGh",
  "key44": "4f1GUGNHKnJ4gksvtQzEuVFie3bUNmLyeXgYY7nY6P4J43tJN5tKA54d5nyEufHK3yCropvAbgdZb4MbHYVJ6kt4",
  "key45": "5r3DcLhhW2As3xuCvbz6GkyUXS6UkCB5xZrU7METpNPEXV41W1M6GirMUigFmFJgN22K4HqsEMR19cDxJAmySpp8",
  "key46": "5EUDBWaCB6XGCtsuak7vYDi9779gqX7Co5tP7ok4CNdTGQt7UgKAFoWKStAVsPW2m3XuSJBitnngimhZVAnTy2F2",
  "key47": "4MK2psLP4U4HtpzqAWF8AH3QqCrLzqpXf9s7RDAznvfsG7yjDMfnfe2B7TsTEPHg7tkfmspXAvYGLC6YKUhMCxaw",
  "key48": "3fvyujbundcN8SBaKzbSpAxHfvqHw6ZJX4KMiuRHoCPRVR72uHdjhXEEZp4eHxx2m1Lx6u6Q2V8j2Md82GxPJTdE",
  "key49": "3UmdereywVFHE9tPpM3M3ieBgPStgYWDS78i7gEcWptd99XsMkYKFiDqvqsrv1bdehuLbvCv9LqL4zqmcQQmxDkc"
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
