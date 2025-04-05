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
    "4hFmAooZC34263wTPHmmf5Q96YrDi6nhFRVY8q5joeHBbHQYSg4uk9AasK8pLVCKtAdByMsSxpW2tRjhqhih8qw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yVyWh9YgkSArLckafe5jSVJgiJJh6MmQcVc2yJZTHhGCoUQteJrRFvGyjR9yfpHfL6musmNEEyXs45d8PNFFk2w",
  "key1": "34YNHjedY5zBsdEb5zrZy5yXhQuajDMuEPDbMxTCYrvkkxytAmGaiyoTfVstG9YhpKaEUUnrHAmWBpPkoAAMjyYu",
  "key2": "52AHuao5HDn6i4kgUKsRbk9YQ2BGDDuZ4NmrE6G1hx8vonZXjkhr39tgsKciqeoEsqPnTawAgKaUda8BeXE9Ca1F",
  "key3": "4Bhe5vgR3CY1Ej93mjLpNTBoaaigR6fGc4QV8PVqYAokwJz9WkohWiVLxfmzDXsQnpu2fK3c1Pm4VaSaVLUEfuFz",
  "key4": "5LZsKNUDpqnQ9E5DNkeaRny4hZsXpuHBpM9nzV1ynJ3vmXJHmeZzWWHxqMq4zeWVrrZkpc4tgmbJcsiLroZ9kNRU",
  "key5": "5ddg8Umxu2jT6kcxZjGauFfey81bEsntogfsijn63rxvJs9xoyZu3K8Qif5ctjvx6NT1gi98edfzBdYB7meXtMRK",
  "key6": "M6d4wL5H6NymGzKKxTbezcF8w2pmvCfFBdEXifdXfzYpvo3Am4t2G8q4fSmpzMmybBJnsoPkfALpw552hrYZ9vS",
  "key7": "3L7WfvricWfVhSVMEd4fAUqhBACce6BWwuaV6Kxyeax74eBkeF5vNo467eoEZcsmd1tbQA2gqUch2XCnqMJCcErF",
  "key8": "53e5zdujNTAXX13uftX3R4jr7m8uGAuXB3CyzBN4WUUb1idFT7SFnW9yNSf49kZV4gUS8HNtFmgsWHMbmJcbacen",
  "key9": "5SZj2bmu4tHhUDNFg9KRLrVGiGbZmiGGCiXmzKeGXtG8qvVZKerW4zpe4CeyoykuU83MV8bcokVbtr7sdEDfb6kg",
  "key10": "2PredQLAFZ7FAKzN9r2Pmj8ta7dQZNWFVoBqhAP6VmGcv2iWYrc1PBdpnKCHZdfp62axiCxdaRrsKNq4caRK3WA1",
  "key11": "5DUiJW1zwbUQcQBvFYF3c5Zyp79jxukLU4zKVZYw6wJbyrpBPZ8B2ReMa1f1QZgFgRnNzqH7VqfBR9JN7VhirDBw",
  "key12": "5zQEnetdDew7ahVMeDd4169SeMupvmE8zoE1P7bn2b76xJPTLhkJ1DEkbS2oHqsGmBenveeXa4ddA5UjkzKFn3ki",
  "key13": "4rTj5taBDNLFa3KwGMTGPZgZFio25rjMKcWPtCXVvhU7PPXUzkaEexw62bHXQdtnGqwXjwvaLgf28FLpTs4LTjBp",
  "key14": "ndzcQ8i5YtXG7v6XbaQYP7SpjezaoPQXfRgHWrA2e9yAFwAdPaGs7UxZoXUVP749m4RdTTSVZn93TEtgQRhAKnU",
  "key15": "5qKWteCMgudf59Mom3fDgMVk3JhCnKcrYAVydAfhmUSVe6oTae4XHSivJJtkxWcYAUY9x8UdEip8yM1hDfGoh4Nq",
  "key16": "2JU8b3mJEbj8nPvPeWwWP5eHPtUUdxDzqGTHyiwf2ioYMznHKEbUVgwzHnyoqCY6Gs4gQ2Fk9mpWXaMQeL5ZR8PX",
  "key17": "2rrbRFFxCEnYSWFwPA7Gpr4zrq4bxkvx6MLe2iyCU8ZjMQdqy3m8ZtuE68R4NyEWGTACvyCidgKARv7dDBxkqQd5",
  "key18": "47zq74YHBs36bAazaiwMmRZhZ9iZK1kvm6D13v3DjMVmVVtqLiFRxuMct4syCJ4LqDiDLMnuA56xtn7gpySmMprm",
  "key19": "YpReyDhX5BdKibLaxcLVYZuDPHQnBud4LE8XaG451o2AQfQjycNt6BfyAANPWsuUrRxiugJ1gjxKZbbnB6JNzxw",
  "key20": "xZcx3Qu5oWNtZRqDAqVoRbUhhRvS6ex6ZxwnGocQKUJM9cPXAEBhzJXethCKw8T3bMLXbFRv2368bA6CporyqmL",
  "key21": "26jUCRFeh6BN1AYMADmF8FoT6V2nYy3r5hDrRKr4chcUgRyAqUXpmYH8kP22GVu5peqDhx32SuZXzEj1mbbgVkg3",
  "key22": "5Ekfexi2fBkLPZ9AZ8yjpCVCAabizaoQ75bRbib9QGdTaR6aCq61Wnbut9sXMGc9SghPkfehGktyGgdCdu97vsK2",
  "key23": "2D19ScBgqqzuDthbsVWzhZtspJebojuSiiu7Jb76neywXaFt3gsegyrFn1PMbgdEWzh873PovWUVtC1DJ9MHQLdS",
  "key24": "2wrNrHAxuRhXJko9azxXm4a93QE39qW4Ruutifj9PS9H49h7Q5Fz6oAwnp55gfsmbSQgw34NKmkz6F29ThfeEJGS",
  "key25": "4Reo4iv5vY2LE3GzxpBYDkCZ4bsQyxYjnKXwcWPGRmXQBYRkCNiSYo9V8apvLEZnaPr77ReLLdN6mzY3coNoh9As",
  "key26": "4p78d3K3qJrBUoKFrsAmyhSDRsFjbxEGRuoWZbHDAA9QQ3mZwhrz2V2imRQebhg1CCAVmBobUVR3SREe5awc6rhu",
  "key27": "45SyRgeaAbzNcC2Xcr3oSg6nHCoJEtpnHjRMhbshFHki2bxLB13n6Z7LEru9f5WuC2DV92gT6DPSxser5vZEDEyj",
  "key28": "7K5uUmBVzZ7nRqsjzDtsiek1B59ZqpZ4RhHvYd2B4Ef2HueFR4XusZUpXCo1JcKqjiJAf7yZ6HxYYjaUGqTVWQf",
  "key29": "59sWLoayXg1qgYhvDsBVCiPZEX6Qba1yiv5U3kn7L47cGEPsFEqwvXar2ReHAR9UPFCoD1QpBXpgMgJnUFHRiZn3",
  "key30": "3FyczZVACE25nbLakrQiUwybtoDwpfb4hCBAJ3bnGTDmsnDcW1mRVEwxKZ68BVQo7KNAV7AaPb2Ak8Fyghy9Viw1",
  "key31": "4g2ut7VQU3iKWY6XxjHwSb2Vg21qrmPadetppWy1TRYpqz7pvXuPThvWbkkfuW87gEX5heB8FJ7KCJzhVP2efjvw",
  "key32": "2J1Ba4JSiCXfHq5xL5hBnu5zpcbKnqPXya2vs7ZmNrwXPxC1WWNQ2xktKZ74dgn4zy7ybMVX5Vppxrtf7h7JEvtK",
  "key33": "7YurhEcsXdQC8oeEy52hWbJuNe9pEpY7uTkaFzVTemwBarUnupxigHEn3Kp8LzJcwTNrt8FL59nkhJvoHDrsheL",
  "key34": "xPgif7TFy3yrEjzAoHPtmnvNA319Yz8efehDoB1CknXu9EKhE4RFifn7UYMyoXvnc5hZP3CTV1twqzHns9zE3sj",
  "key35": "1aAPs8QXdjBnZ9qgevEHfdK16m72UFmm7MPJJ13WtTwx4d6jMTdb2sikoMdvLdeL1GLtec2YkgouYhUs7zjgaox",
  "key36": "4yuy3M9DWkJMipqwiT18o6zs9KRCJjuEU6JRrWHpboSG6L1tnKjdxQi4yeU5G8Y95qnXZomeFPSPsiQP6S1vruSt",
  "key37": "4f3zVcL3F5Zbn4uMvjGjANJqHj4q5mU7WinLNTXeF7tuwnd7vFjZGjuhCYGpgR83vbbvV9WhmSZdYP4MRejij6ua",
  "key38": "2MS1ycpsovQscqF5KTdw5edd8sCRNra89knYKTd6L3U6dWTq3DTK8PaKo6pcoUznXP57Lo9qLpWzdxvRcYTSpXpV",
  "key39": "4otYo8aZJYkwN8BW8RY7qhe6Q3U2AmMUj4pp2KoWeTdCuAjYwQEPJJvNbPFkD5Vh3keDE4DfvxZTNNsHAiQkVPxU",
  "key40": "2556z2f4Xo9guxZG63ZR2uER2PeVoF96da9sku1TQFRtxjYCrgCkgj3enCPZJ6YvsMN8PhepUNh7PZjwDme6yH3t",
  "key41": "A4iudU5nheEMfw46eN5gZV63zvL54JJsN8KH1unC1B1YAjjuDC7Bo2Y4s9MbvN6NYmDNhXseEQn6TGKnmAZUiYB",
  "key42": "2B6t4sBHpZoi2UdumDniqyEBWiivLzXLJbvKWUdmhJC68jvUj945Mgic9iqNqehqzpRuTofRMc1yzcR5W7boGY77",
  "key43": "FFxVazuEJPrvpYkzWAerwwNeu2QM5TUG4EuWkyEoqTyYhVwifQMoKScMWtmFuZASR7T2mx4DS5umNj9BajenpZs",
  "key44": "k9CRWq8pWnXVeNLtFqsQqZE6puyD6i35ho3fEfJLmWbfYGoG845JL2KFtDzkHZG556XpDyNtGAfx9k1rDbpyEjj",
  "key45": "HJFVLT8oihJ3AkgmVaqyvqd6Hq4rfyaJMc8MJJURdvPv4NYSft453h8inYz1Tb745RXcRyZDyw9DXTxZbFQn95B"
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
