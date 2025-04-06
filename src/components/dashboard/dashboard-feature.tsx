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
    "4NFkeXw2G7fiv6w7wtvYu18sCcKmiaq4qix9XtfQ61soqXiERqcBMphqNoiYYP1oFZeyCaiKJiSvPTV4QZkcHpfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awFWcDHh8t8iK44t2sVN5v846h1ALAvgmG9GxpWsgqhMW48fpShUV51W2RwEbRcf511rv8U99UrdeSsFDJTZePn",
  "key1": "vVK5cbH9z7xrrsbiqKeoP6igsMCGBgvnJLKLQS39Wrp1Y8qhdz7s1Y4fA3EZsryD28UJgK5gDkVpTJFnw1ndmp1",
  "key2": "2LysFQCftWaUVgAY66DDYxRaYXXf8ZHEKJwHPfuf1sfveDuKuJBgYfmhoaq4RtKd6AfghRQw3PiYQAa6T9VS2k24",
  "key3": "3gi4exGdKzETCor7Ygdp5G4affDTN9og1vjskZTTBRvkgyyeepnrzgdQ1rgHst9dTTzvnHw7ngSZgdtXKQvAf3cW",
  "key4": "2pUhA6udjdYsQRdHtGGD3gEXr3SF1HE6eRithwB1rm3rwGCjCmFyaKVwfbA3ueEQ3NuGM7cRyMTJ8JohxJvMgXFo",
  "key5": "38onjX2XgFxyKqXxdY6T5UabbHf2oAy5BDDhYCGbwWpEp5arP5L8Y2J54Fdwv24MT6yVGVnrs6wkHobDX6Q4AMZh",
  "key6": "4J1nHS8zLEDpkwDmCgquXVvud9Gr8avj6ENodEsvRK4gdDs5n6ya87MrrwC5xoibd4Zo4MDr6NHYjkLngMGUEGxL",
  "key7": "2yBxnt8MsECRV5LSaanE3XjrnF8w4WCWMG8e2JabmZXKj3TyLtNk7LU67CKC2VbRYn3BezKn8r8cosAWe2Wz9jB8",
  "key8": "3733CFSuYXtZLCdKF9KYYRXBbxYFpkozTKAUaHDAvDRRsCfAR2qW23QdyerGNur24fTv9wDHPg7WBVoenRj5UySu",
  "key9": "5LawZsxpb29imTfwCKsxvwv94dEqHvTF7ugKuugEkkxfn4vT4wizht7p6v1EGHucGWbuRvhnkKGMCPZo5RXKsqFr",
  "key10": "2Du4ycMsxLLhP3gxWmbD9NYbbNyyypsKkfyZFYvtggT4JE7e5nnc1rctm7mQ5jpYGWSqRFYBAZj71vExXT7qh6QD",
  "key11": "4U49Fuhifvpeov31JaKTtHDPY7LUMuhCi9mvJwcutTiSPqfwNMx2UNN2F6Jg5RkMT7NPcPP5Ten8K4XctG168oQ9",
  "key12": "5nLkDVRaWjBQKE1VaAgkS35XpY8bvAGDeC9iUB371WCvT6MtgFGwKEHJSjzrqmHJDkT3UjNbV5sNmFn48sTVd56i",
  "key13": "2CjWDgBYnfcAVfCLnKeu2tn9cBvQXXP8xPz61NncvzX4G6mTeMUWCb4UQDraL1cNDXnUzJZJa8Bn2cVDskuofyyD",
  "key14": "3BwozAyZv2geJUfjTiXdYi5cCVZskeVwUcJAnaBzh575ytLrfuyTZ6L6R2d4rsnRfRDj9iyPyaKs9f9KTi9UAHok",
  "key15": "3vYZZ91PeuWt2y8QX6Ae2xBeaS8LnDXe2d9zzKqFF8k4HMcsf6LLWzVmDasZ479TZfbpfWfaj1nzMUpHVTnoZ4UF",
  "key16": "4tC7vvPNmxwuq1MMhvKKmoqXFsNrm3BWLpvWDz9ZswzxnjvDraBMfq61naBXwKYrspxm9hQ2ZbtbemEEsiuyQBuy",
  "key17": "5R8m2VVFZym9BPuC3pssMLhkuVFxm57VTTZmk4SYFQPn3Qopiosrz8jx85tZ5QJwmzRExHK1MHhSayYsnJcgNn56",
  "key18": "4NgZ4qzUvN4ZRYjBkgKr7818VuhaFatx8kNfFkNn1pijqZAYYbqWoQcyNdVU9Jo1SYfUndcsLZ5XcTzsi8cMa4bi",
  "key19": "5TCUxfVac9xDXJLJgBcoahyo8t8r5jyViTK3vuFKDz9T3VXS9xhcZYwbYzMcJvx4GDFJsgHK1MYCJYAQtrHE19FP",
  "key20": "hLEop4MdyNcX3e1N9RpVcKryG7UNcyqPuxVoqf3tNyv6mZoy9DDbpPMXM5K8CneHXu5ZaFxpsTstB6fdDuYocXg",
  "key21": "2syqWNCJNyB6sHDm31Cxro1Q8dLmDryYuPK3rx1WiQFvzZ1W48QUWUTBsnfZWTFm5kDiThJCijAjkwnxSd1bTuhd",
  "key22": "396CWF2XJ1H1DHKzvgBWrP3hGPWxjRmEidihJVch415pNjd6zpy3spWYKvbyS8DDeWZ4CLoS65i19AooWc6CX7kc",
  "key23": "43gTzmQ1bCVSMWd1Bhp9g8cqaNRTTJUSdn9PNq5AyjnBTbnXWPrWwYsuWC94CSoNTcWrFmRtU98wo7MdcwHaCKzx",
  "key24": "P5SxxkL7Lf51GDoHFqRFXZ1BNkPV4cNeTQRWJFDRPo86YfLhD8MjEeCvemcE9jZ3d6ujHmQvFngRiCjzCa5Aqjg",
  "key25": "23EF78W4zYoTfCGvwZMQ2nNTpPDi6W2vXag6ui41sAwkFnVLeLbhvGaf9SLiSu1WhNNXKuPWBiVbXGgMyt5mhkKZ",
  "key26": "d8NYoPyD9g9YxQoLqNpaRwM6bqe74U5C3GY6x515nUiii7FxDinrGm3Pj8sNT1PUfZnRraWiKZfhKXtyVwde4Bg",
  "key27": "AVr7EJHWcigL9x5kWkXgAct9vhGiTjVGYJ2qFS4BJ6npj64S7N2nLyHn9vLKm5Uw9jXnw4SDtgmqSDx5dUiTfiy"
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
