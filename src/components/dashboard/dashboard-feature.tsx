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
    "4c9N5Qt5gxydgw16LrMkiJWqB5HgpjaYg1x5gCbqeAX7fq69iChHvpsLeyMBeW24fqgxckNcKDCZVMMwdfhTbuQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YfuaNPggNsmVE3xLYadh6dtsu1KFP1cSAz9VRM1TT8c6mHHkj83RgS4fSNwEGK71CSdwjzt7prFokNsAxDE7Em",
  "key1": "5PLuwJxaD7bhHeb8kTT5z9LQvMCpZzAzh3c8u6dmTeEDAAUQGy4obMp786G58s9n191yok5wdgNd51b5eqdEtJeg",
  "key2": "3j8Ev7pxmx8gyTxm4GNif7jdDzM2xWcPjyAzuDUCfTPoG6Kscg7NMbHaNvGBca9McHyDETf3AkCpcmTcPT5b7CUE",
  "key3": "3sGfNjz6kH2aoBicdedX4C5EoiN2DZjhis1EF5n8Nv51A8LVge3968k7AYS57SK2escH49hKpjAFMBcqbysS3r9i",
  "key4": "4LBn8VVKwfQRpVctvGoS1Ln4YxPwonG7BUV3B1dPThRfbFhBPZ3EzhHEiCxePe787nXXTsmVh3DeTqaXR5jiMBr5",
  "key5": "3XoAXPWPn2aZ911UdHGqTJpoPVrfQrFE8XbHGuqhooSGqk7KcF23ikcipcqM3A9H8b3AEDmHNx8awZRQFnEM1N9g",
  "key6": "27eCVmxTnHDSwK43NxUtkh9wKPCE6hUPREcDsmfXp1M7ysqi9P6GLCtqxLE1AE1Z96NDiv51XzH7HPqxgHFAdAVN",
  "key7": "3H7uf2APXvZRFcKpxaS8kG3xisMC8wURukU9Rs3YCwD4zTGTJy2Hj2tkdmFDPLWmmCV2FdXEMCK5RCD1o4iE2Zb",
  "key8": "3zpJ9p6B6pkj8yCC1D2HBAfisJzDDzpwxZHxQiMNLLvqQfnHmTWHrgGQ8yLGiigkQyDxhzmtZ9xNS8NaAyR2wDz2",
  "key9": "4ByCvTNCYsJ4MR9XajTyjZqxV3MCBCXa66WEnnRyTZohHWS7b14aRD5MDsxwH5CrPJnsvdUEgJPP2AX8Jih3LYKG",
  "key10": "4aXJJ6cCV8UkpJtkLyF98BY96D8wE2V7TQkzepYaCTbPvCo9RBw9wDVGJEuaJDzCRDEBqATAXUjycZGcxGYkcD2x",
  "key11": "2cjhGxgQwhSpyTX2u36EvTxQS4x8TN7UcFEh63VNjk9tYt9n1ELV6U8RoFcc4SLwSwhaLvA59zgCNC1hKvZrYwwz",
  "key12": "4cktVWjrKEcSKaBcvEdzp2YxEb3AuBB3mesRCuibdVtCT7diKiEe7iGfDcJk2vVrC1n7f74xn2fTq81jQK4jPgQT",
  "key13": "3NjJKNNJa9TYXiDqQvRHcB3JeaxyQhF8MvMDLFuMEiqQVarQYgNw4WijNFqAiaeDTPa2wWRPF1msCCcitXR2oAaL",
  "key14": "7w2zCMhTcbjUinPJdzimeFGFZg4Gi6GJgnxXPRT4Kv6vZfCZ7HyNGQccwgz3oKdKfLaPadnyuudHZ4QorVPeEu1",
  "key15": "27FJ1oaJK1ey7TGRnvEzuqkS5X6orras9qvSLuWM1EzT5GSxJLWFiN3yukA4qkMLGTUU9HmVWDhrgAE5JSe8dWEC",
  "key16": "4TXGqSdsXPzkN69WuJrsRxc4HUVq8ZMqrgx1Dz7pp9bQ7SXw3XQSyufccQrqnzDGwVodnA5LN8GhKjGF3nAzZaBD",
  "key17": "3oxhfv4DbmoYTPN4nzSA6psJBWZN34KAdD2Rx6Hb3be6J3621KYmEEg8RbB9Njz1FTFHXbGgoGyqRF2A19fAojp3",
  "key18": "2CtWLruKSKQtgb7jo6gMfiTFNZT7bHB3pW1CC92bXQvhNctzo5aYk776kEDWicXCRvcwg3QbJoTAeMUnq3JckSsd",
  "key19": "ZHqPG8pVLkveiE4UZSPUNS2zntYJA3xCpMq94Hb7Dd7ntxYFex837ejUAaMpbB8pGkhdMMxbJd6gsnjrsfGwze7",
  "key20": "32o6HC43g3rnpWSbsid4JMaCzU5PBfVTTHkSNEhEgb3BkUwqTgKqPm7bwEw9F9UUpS9VUAZXLRxc55sSevpnVrsg",
  "key21": "2atS6Jvc39b2ssijUJmE3zg1nPfRXA4RT34sBbcmQajkh3xT6GhMZhS6rjwZ7AJfeXD7E6kfPe1rezaixpsM1rrB",
  "key22": "43zZXjLtLv1CzWhEEb9H2KbsykKU1DWvipBokQwfWXe6Lfw8pEUmdFodQHkVEW8vgfjHonYEbjbWsTw8US6Gnysg",
  "key23": "RADrCCQguibaBuxTcwDUbYP3UxE5j1EQZxFbZvgHG7xd3NWQMkmh6k4oCYra59xDKpsgu7isT92nEQdy5Edrovd",
  "key24": "4yfFenph4KSdgsNQECnZRkPnNVcAXUGmJkCYq4ySvJtmpRBubQjKmA5FsSSmsaYU2PF7zBkX7bqxPjYKiuBgg8dY",
  "key25": "5TbVckmF4wqaN23Vcz8SVadz1473nFbQQXXA2ncaYySAKF46S1njChDaPGN9eewjy2E9egdp6NMiKqbvZEBSxCYs",
  "key26": "38L9d3ihDKpm2roro5cWVA1XWmnY41Twg55npf6cSa5DNaYuNm3paob4CiRBY4oJ4iZYSDSKgEzJC45RYP94ttYM",
  "key27": "3ztCLYG1HeesUqXvCu5bcHZGq52aR3HheCPU6JoQtQGG1gyji6G7WZf1YBv399mugfHmyeZS4HYFUhPzpEdLPZAf",
  "key28": "3KpMuL6D1UTemxbyyxU6eU3uNFjZVzbpqPKEyiSQsmcGhC2e6Hna4hYnqHz6qYLZy3EssgK9nP2a4uyzZ5weG31e",
  "key29": "3WgsJWAA6guRBrCxWCEMZSaJBm5WKsXiNSh2gz7VvVD2FcC5hes3CGSuhtkJ8nPurkWtAKGkFtNiFecdvXuJd575",
  "key30": "3FrqiVsCT5KP9iRYqqBsMKSaMfA4anmFaEJP2d5dyoVjYC2icChqRncBa2n1HvxhNN5dQAaRvKbna6BXKdy6fYWo",
  "key31": "uoMVQmfpihrr79RVwotwtaiwjbpfgYa5wAc8P3ahMy5z4Eyfd5hEAdRtX7icgazWy3JdxTTjSzp8RK9wT5awSLm",
  "key32": "3JLi8UY4syLNtSJy45xMp5uR9gPtZ27fPCBMbuyw6Fg2HkcJFpu4u9LQNG8X9GgpnUXaigG789RmdzpueixgATDi",
  "key33": "3r5hjFSv8obbeGxLvh9ift4Ed3gbFjKLCaEUJR92v2QuannEdMCwycisawaK13gwibqLU77F5Jgd885EGjNmhm6q",
  "key34": "3x8wk2ovppeN3afsHSgQhFxjWaJFwWZHytocGCtHtQHJhyYTRnMDyeV9Ce6XEERroTY5xosBWm7bwZ8DopYfoCnV",
  "key35": "3KTebEunUutMjkp5Mtj6Y1ooPwQhuprnic55ivqmXmEurHgfeeM5Tjq6MmoLCHDC16k1so9FsPbQXALky3mXfCYS",
  "key36": "66j3X27dJNKUzMhHir4Qod3uhcrFoE7Uq7euAjAzkhfzCu2SMz7JRrgJv5GXQhBfhF7rwvGGEzNAzcvsUn96SSha",
  "key37": "25efKcK28DpsQyiDQ8rUqvNFTPahkTYMddPP416dAq5yjyNmUqQxy8uVRpUrwXDfdLRe1hqE8VMCbuJ5HCSJGbLg",
  "key38": "2QPw71VnaMPeWq9wrP6wbKmis2E8PkhC5GNeKgQRGC3itZoyQ4qD2c6CZJuim1vLo47RYaArJrqo5zoXcpoeuFQU",
  "key39": "P7np61huMXdeJeXXZsK8XXhsWETAzJy6JfhmBDTAJZNzpHomnjyMFyncBniAY1JsJA52HEsK9UWTFRGTu7dhf5J",
  "key40": "22T1hXeBuSfWfjJNkqMn5VhGrP3TAKSscihPwg4wTW8jAMMAs1c3wbx8ijwNECdUeu3ZvZFNibr8s9mpRsPgQgEX"
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
