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
    "4BzrPkwDbJDqfLM2xdYBJXu6oSGocApz4JMA3m3MNZYkU4MrX47Gfyhw8tsEfJCk27kEEHSqdxhRnwH9VeKR3eoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQMZXyajNBrtW4kXwu7wQaEiBPWo6Nt5v9z4LwKBnMdLqs2UuAFbYEUD8pXwFG1kTUsRu5qPF1NKnRw792wsYfH",
  "key1": "3iMdQ6EHRdzhjuaJh4ZoVrqvkSjTjkvXjzW65RBLspMGwMZY1JsHrXSL4z1ZoWSGoq9qJwdCtYsmsMJn3bF37jra",
  "key2": "L7F53JGpHQchFp28P65vLk2FmM48mpQxnwmy8iRstwaudgiQoDFY9MiTvznnSbvbgiysmjywYdV89Ymig1YDqAk",
  "key3": "5wFawAsSVE9VY55DV45o8Ssk4vSY7MfuPNpDizAWBCG4mLLVJn4CDfySPJjusuEukkP43meDCQMSZwDd8GUi4LjM",
  "key4": "4xQ3Ah9fh4tqqFcek2kKxBxZzQd1znTDLBZoCF3xH7HkYs3V47xQznHsneEBT2tfDi2KjPVwLSwhxWjxRWUV5EGT",
  "key5": "33hS4hEFQdaK8TY9mDJZyBDgRJW6AacEBWdD7DrQbUTUW59kk8WzZZKMF3xywvWX2xvrDajrJRVCb7rT5hmxtwCh",
  "key6": "42ZrpmeuXCx5A1gG8rPG8165Uzfp942p4ZFv349r7DrGH1wVr6ZGtS2VHwDRo96HFaBeWG9ATzjHfpuBtJHVjEdU",
  "key7": "37mP3pNvPyhSDL67sgB3y6GxdxnU13FkeneX3sEKEAW9pEnigyf5hf7eCyaCh7L53CaeSeT99DiLWd6Y5gF7jF5W",
  "key8": "3iDP5adVYx1QkU56YkvNtirrA5yfxTSC23riYAVtg1ri79fS6WucT2aV4NXRf2jvsopuaiJU4HCiQchEBkdDpgyJ",
  "key9": "26hrfCK3ChQafk84Cv24AUzSRhHUhzKKsumuVzZwRotj1d8jc6hgE3DFer6notjgGbMSHAgzNJvMEW7sdNWJRSDk",
  "key10": "2jomFYzYM9NZkTtnRF1UaKpJEkK34eEzYKWaJ82Z97ujKMMFEY6uebJEQxSTUrPnSwvCf3akZvShVAiyP5fzpjDJ",
  "key11": "3gTiHkhWiTinGP9qXDszJZb5CRrv6swwGqfDenyb3cjaYgzD3KyN9UnZJX1GbWh5KWwkdDcTMApYyKf6Vv8URbeQ",
  "key12": "5xxzLU2u2Qb7T3ii3w9pr2rD6Y1FgNKaeUvGxGs8WSLgdf8sXHVc8zKhB2aiJrKNkj32u22tZDonfeB7zbryonL1",
  "key13": "554NjGVCqM9rQh7Mt8NAtZ64KyjWt6NMThj468hXRWMnpgJ8AhiecynFXfhtoJSpxQszcwJPGqG5SfJpf49kBxzB",
  "key14": "3FpQEJHj87DU34FcrXP1CtrDYFNM1owvv6ypzaBSWXHuRnv8EXAMzMnT8CZcMbKZhGub8mQZvAVzguZ3BkAGTN4y",
  "key15": "2ocoR1fP33YS2naYkBW7NKjvQkvLJTZRUq2rmDPpVXzG78Mxgv35iwRTewE8taGU3urTzCgeSpkbKQHvttTsi55m",
  "key16": "22thx76sEdUhS9FGhzzbtTeDmYDdDkaCWDQmU22brEFwFFViKh1Syion917tXxMmbWGvwHwsghf89CVEEMgLZxp7",
  "key17": "3JdDwczAUgQeB7RfaTWiBajhWpW2PngDC2qFkGgngtbKpdEyoKV8nD7yJ5LkHjM53nAG5UXfG82uB7YBQJgGNiZw",
  "key18": "23d34yADyFQ7Q2zkQysVqzn2s6M5GYkiD8f9TEvPh7PBWWEVxC1njfFq9ZCT4qNGMNrbQUmskm8jnEoheTyhr9vL",
  "key19": "33FfP5dH7o7dgKgPsWMC3q6befqwxBjYC3RbpR6xEsi49TLizzYSKMfUnYEmTh86cHMbXtR8J7kQbDQGyAB6VREZ",
  "key20": "4xQ7R8Ly4GuJXoMogB9bxif3cYaxcwFAHiq3SPYnyo1GgMSPCqUsL5MojXPqVANTM8ZtDtioGZbF71hRnEP9njU5",
  "key21": "2LceoYh1Xsau6k67tPaxXh8hS8q6U92y4FnBHCPu56MGAVSycpBfDKRSWapVPQGRXrkaojrxF4rGXcvQEjkjpXVD",
  "key22": "2mYHf5srr6Y129wnYTsGuFzQthwHGKinTRFoUccaNvrJCZiATpqL1QESjCTZ2mfFktsFXZdMDYi8G1vsAz6WLv7G",
  "key23": "2BvpK2jCAkmNRRKuHasw9uVwKYWk9RkNmDT9bgy6rLeYfAzPUqdZ664fw8ujTSS3XzPLzUPXwfNKjg7fRaM8Sjgy",
  "key24": "4Vdj4yAxCtfeVA4FBbKrDR3Vp3GVUirLzpQLYJ7VZDZykwEvPvgF4KK3yS2FNnVsC3beuD73GRqEgVEZ6AZG9gaZ",
  "key25": "5od9B32wMmRP8UoovW318Bn9P8bk1cqAWMQhCGV3XBMsKrXXo2mCSrMxkjK3PgKKK7gMM8Los5gSeQHnB1BUcqCj",
  "key26": "3LZS9zUNo9tqVGjeFB3bV4WgWoFUUdZsZHTAQFjKYDzdTh2yAvZ2i853tX4LbzDXb9zv584s3VinRTke1juemYqU",
  "key27": "4tgcYSPrA9CfGw2xd8CNhQwhUzozQb4RRWY3UGTq85k3b5gZhTaxvaYStZJCzmiz44XbpK8LXtmSgCEmrGMi62M6",
  "key28": "2Xe3t7MQ2t788FmH3QYmcPMgm1GTSdWNYvWdxxw95n4JT4iA9VSJJcAhBuKJrLm2XLpsj8ZNQXDahTgWE9wFwV9n",
  "key29": "BDKxkHZSD48HzW6FNndMizgFBxnXjLLZDVtw7NVjzCSWskeWD8Vxn7Q6DnP2dFLQnuuY9v9g1HBq6ebTwvdvWWK",
  "key30": "46QWaJcdiqQGj5okKwXQ6hk8vLiiFcV6VY529bGTqxaUeKxnoGE6AnDjCvpYv7GSzNgr6rkmnqtNuSP9Hp4LrN2p",
  "key31": "yN3URzdgwjCC31m7xm3rDPzVXZMgdsAPezaGfi2bc2EWKiyrmvx7kG4dGdFcUxKwb7ddT6mGZMswL3oVYBDLd8W",
  "key32": "62TwFTepPyCaQiG1nEA7QCYmAexYaGLipztLugASojv4Vd5xP6Yx1HpccXXmZjcykZ4GynNyszt8bxfnXw4VHkrJ",
  "key33": "64qJt1tU5iFsUSVNpzAsQ1YQP5GatprfGauT8zjusL2Qebu1fsHP5WJy3ihFeFE3KwNthzAPBazZ1M4UtkZf4fpo",
  "key34": "rQhbijTfhRqWv2aYJzE9bAvurjwm12FzEwx6ZpiWzGNqVJm8JFgmRVkb9PkUXTqhLnFyN4rosCG8MGNxEMzhJgs",
  "key35": "3dLgMzsmEhMy4hZ5K8b5GzLwP8eicezz6XyRQUsFrHdqTMfjkJbyCCNE2YhNUGACJtPzu7VsT4hAjVvXgWCASup2",
  "key36": "3GnMGg1WohQu7eXvUpYHRkGgVSThGVE5csJ2qas9m4F1pVpVX9fzAwR7yZVgCNsEPr3qGegqrkpzDxj642UdWxAa",
  "key37": "8HaqZVbv4Z5RTMK1BwDF2p11zKUAMbqpdwDk2DgiMPiHToREPKneNngvXxYwbt15o4DrnKyij25yoH2Hcg2qKM2",
  "key38": "4wca4aiCKBavjWfrH9WfmmqK1vFJmCn7zgpNZhqYhBWxUjHesSpzFBFkc7zPXKZSVPoa3zz2WmuDABzdDvs9uggL"
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
