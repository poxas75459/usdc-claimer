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
    "43D7TmWReqF3KXHwxKCVHVkzoBx4jCvhfPUfdnCx1DQA6FSpdtWYABAopw6yFQij633Eyv1xu8VEHz3jJzaHMHJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wsZ6dGboszFPRwAt8m7ufrSGD57aHgMR4qpN9Jr3tf4nptinPhzN5yHKeDwfZYRhB8rQxQssiD5sZJKypmCvaND",
  "key1": "2KrRYaGAaE65Ys7DLbLXNKoEyM3h1XoD4EmSs9DF61CaP2A72bN6vwzVgtAoRqd9GpxWZcGSyAjX9vDu7DR9irEn",
  "key2": "5Xb3TaGuahHhMRxNVnKtKYCzzuikReZjmTUQ95iX4P9M6F4XwrpSMnpD76M5YHqvLA1nR4w6xpMwn8pYoZCheGDA",
  "key3": "2g4ezdqfqr7ozZ1HPdm3YT1KDTo9upyHoDKgTETGXU8vpe2bSxkFkLZPdFZcsN25FRP4c89aDNaTTqGCWM1KkLdT",
  "key4": "3XAngTNnmfHUucSp2xxXtc2iKfE7MW23VDfEfrtcLe8Hxxrmb9Bdi1DU6wG1QQmuUv2FikVzCkKz82hPy8TKyx6X",
  "key5": "qRFT9yfiddPCNSKvjfnwnd1u9yhHXkZHA9APou3mRxcs88qW1VWHgSoJ1sr8MGTp1QoAgwUGdPgGq4vcvjUigpB",
  "key6": "5ioucA2fNU5kNf5uUC92rLNhXR8DWxzkvzzLCsXn1ZMW1Cw58C9U84Dz7C47mTwLdDo4fFyUFjhQnMnhuFSKb6ra",
  "key7": "48dvwLCr3JySgLPxKRkp11XoM3P1qGhwc8CpHc7r2tLBUEfQTTUFDHEiBTg8qa61JbiS5dcSKTsr7eXTKjo1RRBW",
  "key8": "5THF8Bc7jhA5dvvmf1s4LJUw5qQvcj8Q9YbQFox4WH2AEsXdxVx53pzD4eA3zGzfDVu2UzSS6uS3FTvyWtGgcs9m",
  "key9": "617fv4dcKg8EUCEXiJd7XkWZNN3JURegUKLbE1hv9ToMAVQX6n8qDkTSdghUHVWUStCwnnLQ8JkUVCDeCxE3JC44",
  "key10": "3hDY3oEePpWzfaq2vctKJUm88QDTwvkpwB2nHcekXBBbebmCJ9a1odiBUCDz6MZ1Ysi6VPCM3Xv1s4HT74hPZhvr",
  "key11": "5JbdDiY5tRMDLjGUirZ75TqdztFN6G1JpYNsGFDuEzbBfKmpBUV49Kb9chAcfVMzC6Ziw2TCzkgeQp9cdHxf1WXM",
  "key12": "g6iGtAcE5g6oardwF9qFgj74TpQ8iGam2peB86TNK17qxgTfYPRie5WERwQ72FhMrwK5ZTxqrprgCXDTMXHKDK9",
  "key13": "3wGYrSQU6G1dBmZEXBRbttUebZrSusunAk9muRcgwWAj1mua3kkQwnDx5BvQzda2q6Yo7Vfvxgrsvx9r9QpNMaMR",
  "key14": "5RwFCpEaV3pCssxfVH55zXhXVm3zCtzWzRBxwx2aVL6HBdNYPcDnBTDhxmW4BSc5w2D7i6oaemUafbAvuEceyjux",
  "key15": "24qk8mFEx1JD1DGbPMZUbU8WTX2rwLiFUA8FW3ZRQzZjz3ukGfP3j7Y1TmFoNpcHnGPpHDrT9CGyQwvQZDKZntKS",
  "key16": "128df4ajkeRgzxwH2uTwjHcjhFzAYrzrtcBExkAxx987u4my3aCi8PSw5A4wHrWfv4h2kcdJQbPtHa1AmQ8Lg1FF",
  "key17": "5BkcziXfRcegwWvvc7LQSCkUN4DGQ8eb7uSGmZq2334iExL5aD8C7kuVKGmGXMDyzUNyEW8v9A25BC1PCnoX4LWU",
  "key18": "4Fw8kxVA7JcuMrG8eqGjt3xnzGAWPRtMeLeGe3sRRD2Cef5eCh5X5xWXCaesVWCz9aFg5oJ16SVqzMhQzcZrj2Bs",
  "key19": "3rsEvUGwEzKyjWJsoTtJBZYzLxWKzsiReh32CmNGYacJY4BpwHtHPZ9wjwQgp4rPf1taMQXBNqSr1nXwA2synCf9",
  "key20": "5suF27o6vcnWTcrYAfdd3h75d2BM8wztKMzHYga7wm34wk36mefgncDNdY36YWkTF5Mnh4trbBHdFBdk2zytxKaz",
  "key21": "4HkHJqqPAN55b535MnK5heoiUvuyuRV1SP9f3Jyk6ij779QPrV3kzdM7dysvJkC2ToAj5CWWjdvFJGtjFfharTux",
  "key22": "EA6FimDaXPzov1pem4XVnf9mF1FiH3Lk85NZ6qJSjWECP8Zf6jgHRcd2b2xomJ2JhRiyXZmV79VHcDQQbaefzK9",
  "key23": "5qMQEe7NUSpesStW85tWdGgGw9XPQGer72AEchMX6zB63ECkYH6KFa2cVhrAsJrj7Tp17Bvsf3RnPwjwybsknKjp",
  "key24": "2EvnFanLFfqpCictUJb4LtYgdXvZ9a9UvYnLgnNARDP6ChD4fNY2zjX5Pdy4WUDZKZSEgDsBgpDPruScfxR4E9nu",
  "key25": "4Md6dJBqzAP6UGh6NhazZ8HA6NsGF9eG4s1JVe8Zeqh3q1cPr3hQCWHqyU8a4cWfy6Ggvu3mgWNAk9J7Ne9wa8Ce",
  "key26": "a2bGqQyuJkJPcijVJC6fAKgX5e7RZfS4Ntmbzt12U7Gc3kg3mTLJpuVucN6MCJkYBSDYwyrd7PaxsQEwr9vc6Ec",
  "key27": "5BaX24GiBF4io4p9fHypN5mVmMyiWmrucCiqvnAMbrVQEWwioCxkmG6njiH1ojPw3RHbCQUukLfnrKN81LtacEJy",
  "key28": "45zwFBZRYo3V3GmgLWk6FiemwLKCNxbp5CVomRknTjX5t2ivDQAw1F9qH3oxUpekXGarpw3jAFt1zqRTeU3m88Ab",
  "key29": "5q8XAVKK8ikkMDyKKEM9vdAJV9BCFqDvtS6s63xpkdoGAS2298GMNQryo4Bd3gvb6aKxTWSoDUhjDDPbGi5EHxm2",
  "key30": "sbVrscZ929XFQaXh9Soyvj46eMNEByJ6VpmeU5L1jh3Cu8JZRBDb5pc8EHjwrmBbC6pAqPfF6TSbbzWrYK6t4py",
  "key31": "2qApPh5oCosrbcKhzjUEshBZxFVvrhAEjT2EZfhyMZYiumSyevy8sqwhUYbjkE3vRSfFMYQDE9mQkUnY5fakCbx2",
  "key32": "2ihL4t7J9osMUHqhzuWukqLqFfRqJUZP9SRXP2vnTNL4mJFDJ6y4GEXRNmsvans6dPwL4GW6Nk9HMEMNa6qVdacY",
  "key33": "TgsP37zWzAndWX7EEaQZtLUZ77nzqCyAeoDQXVWiAMsQrcoRDEP28gyBt97yuFJPx2qzBZpZeKS1t2uRPqwYWJ8",
  "key34": "4QX4D5jopGohyFD3zHwCBeCdHedzyRhKA5tHq2TMdmffkyYCg288bQFYc2xnj6vnLSF45zNNgLnLnhpMYtjDg53g",
  "key35": "5mJuZDzchnad6bxhhteasLs1YFAbFnoE7RiDFjvUvApY7Cgkd6pkrzUQFWM1aqZiDFoVarxn7BRyMbKVWKqHwgmF",
  "key36": "3ztsxBDEkuijXBtCxm9q3X5LefMMwad6BumQuepdKizZHM1yrbnXFpTBAfexxpTLXcdADVJDCKxYbyBBqzbJPPcB",
  "key37": "63qvvstajqwYGQpJTS2jvSs1iszfwHq5apnhd1zGAEqPZtMhEWJUdygWRbfoiQKqzhHveRwc8ZicztmZifJS6qPX",
  "key38": "uwqvwbWWHDf3BrqvSqsXsUkcRY94inMxJQceKjnscGsSpi4rJcUVRYtxsyPG478cdjKa65c1BcSzirnJtdKwGwT",
  "key39": "2Cmj8iUJSoVaax7Dq1BhGqdPdcE9ZdYNc4iHh9qDMEKwF3QohSfkASCiLbvtszMSM2kWfH5cXn4iJUWb31CNoGGT",
  "key40": "3pkoyg1yG1SwmgBem8LzSG6gxzckusTYKNq4BYQ7RPhVdQj71UQjZ9PypUwaEJTp321MSoNDwxH5MXwqaRddquD1",
  "key41": "4F1yR6wxYYjBhXBofbx3g8ux8M51yRiir5pZjYXRZTTdRQSwXZ3PiXM2SqvhC5dt3k6G1gd3c3uaLqUzPCn3Eodn",
  "key42": "4LwM4xpbm9hUwnZ6FJmevwY7VDo2TV6QyvedxtNrpfMsTGS8R9RQMV6XpKgvyee1c2cPypZvdnkLroQwWDWbnEHS",
  "key43": "67Xd2ifL5nTdQdkApCYzk3uqABPouNqfEY6CThZubVTMuRmeRJhWFZTPgoqUXx8AMRfvwtgdWmh48s7pzoTtPoTo",
  "key44": "63rXE7oSEDTTMC6we6g64gP3M8CLuf3RPKo8AiomFKvg9oaHjmSdyGqChWJE2AVL5bfeHU1LXgT3yYoMSxgkN6DG",
  "key45": "4KqPKjTf2h91YGj6yvXNVFScoQJNNQU3QApFoTvsJVGz73ywTSuH622VToUNxwEVdFsoic6u6dFrAhWsYD6qCcqt",
  "key46": "2tHashStrCKWfUAbDk3Npgrkn6J4neTAeCjykxmAkWSyTEnFe1RKpqELyL8D8rPo11gY69a4WZTxeB9pZeAeDEdf",
  "key47": "zhsokko3o3cQvcndDytHjgB2J85UopLc7v7qpgetPFV5dQVsT3CbGGbiXaV7oRM5QS8HFr916B4jKZYfhP47wyo"
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
