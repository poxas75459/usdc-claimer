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
    "P4YW2sToeuh7mDa7W7JnD6CeyAuY5ZRG93TdNwUoKupjkyEsjapJg2DdBCrRCnPySHJ5sqn2ZwSCxyciqcmZUr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AkT6ujzokRWxCoRn4SxmjrE68Zs9X597w4U2ZGaUa9vB5Cj2bw6KUC1makVWryDFcE8ZUAZMLN42rXz5FFisuGz",
  "key1": "62sC9wqr9pwohKisgY54BVfAD5HV6YQWUuCjkJyX81BYjnwbnKvqtkAbFxEMr1kivvF71wvHGG6pHWMdaBXPLPfq",
  "key2": "56ckcsduQQA9zh2NwT92KvPDAbx4gzc4wrHE4GtGYmDzkeNNpspXHTkFhsFt2MdqyyaqVTmkxntFkgqPQBqVSaHy",
  "key3": "sDtyFoLEZy4Vv7ejcftoVvxq9gA3duwdbZ1iBCtwVUcxhuiTTVUcCQqgHjjghXSo7ix2dWdAfgjeCrw94iCqegC",
  "key4": "3KjXPaFDAxYQJSiqkRfBwj1iN9f84V7mpFNmJKS7zizGtQybNP2Uv1HxpArPNERtVhzsxvaBAHVK38F5D1cXJHAd",
  "key5": "4CdiqcGtniBCUKmQWCD7m6ASH9NtYDeyp5UnRBLQT72CXpxZxoDWTnSQMut5HzuYPM7DMtGGNrhoqdXnBrXHLEVq",
  "key6": "2EAbF61cyCEvaybAK9q32U5n5MZKy6vWiia7CxqUy6bykWHsXgJGKpWHFtGi6f8z4Scxq4wqvsvj2ECjBLDMqziP",
  "key7": "fxLUseAViUzCPotTGnrruQiKnZTUb7a1T292AXDTaXJb9VzfXmmwhBLJs1eEecbe818UxxLNqfWL1RB4GxtYRTp",
  "key8": "3bAiTLN5WRgxFrQyaGGvkeuXgn3bkHd4VxdhDvKUMWxu38sFEufvUhZT5ZgmwPjevHfYCw8GF2Bb7hbitwvXn5a9",
  "key9": "3qHgCbbe5zByhWfqVoeW8exfVCLskzmP89rXTKdc1QjLidNd7iSwJfUoY4NVaVBGEKoTusY6ckEAwAxs9zCg8rfP",
  "key10": "zy9yptdqao2m125FjdE4GV8sMRVkNEK1QKyfMdsS5XvhJZPAbMUjHveZeV76MF5UEHphwLskww9vDPcXW2kB5nv",
  "key11": "Nsy6Nq6s9nSckkpRdYfbdEi6SryvU2Eeeu4qJvBe2N429LrF14v3GQeFwYY2jWoMP9H3jiSojit7iUyzE5jjvgh",
  "key12": "2VB4nykCbALam4pneGHTt3F2yZVKvyCgbKxW9JepiAV78bxcNQxhJBfAvHHPmh5ygVQbv4m1KQPkijXmKm688CwC",
  "key13": "2sMyWRy5esmiuivK5kqauNwJmP5ZzP93eZeMsqCLUzGDzfTs66oPTU69GJGyWqDKywKneSearLqWZtDGYDG7qGjf",
  "key14": "2MaNWD1iaVrso2uS2AWD6JpYrYZyCV7gTinW3cquvDxxGJ1cmsDTdu2wPv5QEGnwew7PZ6zdP7KP4Jj71AwCu5xA",
  "key15": "5pPEc4JccV5H31onhvSUyPyEgaGdDA3zKjjKY3mGVM83JRR7FnMgue3y8Hke2WP65CZh4BDBiK7nKg74kGfpJRij",
  "key16": "65q1hXepeGAsaM9A3C6SHz9okNM5gnTAL2XiNnmBQYSMBhKVaSkVmSdv35eb3yMxVXx9yMm16orisFMswFNuMXWm",
  "key17": "643T8s9UY68C5i6enhzuZHJ3bgXFLipkdAh7xAsNoG4yHHsainGPDWecBWbKWobY7oQkchWBGV9PMJ9gpLQ1psxb",
  "key18": "h4RV6DERDWSdo7P7im8dwn6RTcVAb1V5MbW49VsSWe6qwRP4LTndaBQbQfX7sVK52HFa3LX7uGLYfUbKk7G4mTn",
  "key19": "4QdDWGYmQKVrpqRc26eoyEa1m4MAgzsi9s9mcQM6HTqtagnTpRTr9E5WskDrvf6arFALuyeRcs99hxetk6iJvrH4",
  "key20": "34geA1KvBb1BNnbCgc48eKmfNuwS6fVxPbwwbMjmh3oX7j3g5G6KimzWibT3uTmndESgUzpGN7XjVpfEJnuJ63LB",
  "key21": "34A783YCWwTCK8sWNUUHUeBqCE1E7ahC9ftpML1LvZLkX3CUddVjhtJpbhU6zACJZi5iWeFPU4j8HbkbB8i8QpRg",
  "key22": "3wiMVZh5RFnLczVKBq93qLzsc1TbFnSFZMC5XusCfv2cyQGmZSQXVyuvTraKBXmvkkEFFB4jTS15cWSPFEB6T63r",
  "key23": "Y1zZzgDCLNJ2WcRSA4iVNb4sujQChwKnaq7xEuEnKVuJDaH2WwysGxar4YQckaTMD2nxJuUzbnz6W3EJHMd8yTR",
  "key24": "5ZGTH7PUZbxwtxf1jnP7L3FiZDBzygqVhpYbgstTHSqMxg9MVTPMMd2K7ut4oHwCosfai1YCP3x5SV8dgBtHDhJt",
  "key25": "3rvRQ7uEvr27WJtQ2b8ZFrqm5LFPq5Ja1X6G5mCJ8TBpmqM32YKYS5qGWagv6CndhG4FHf4Ckjy3qmDd3WqAaYqM"
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
