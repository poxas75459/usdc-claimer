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
    "4R5rC8yPb9hd7tuxmaqvZ38zhTyBQxn3fZS3YQBoUpQHrgfU5oadfQqkQGS5iJcWBYfhHgA3HBz4wCsybGSUnAdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJX9ZoCWgQ3CL5zv4hRACwSZuQXAvuHZVroc5g2A98LwZ5dHtYFFe8X1F75w221c78uG5jX6uCX6RWyJQRswrYj",
  "key1": "469WuJzaMBhz1YnCXTodsTmbPoZAyeAT3HLQrw1curG8uQX714pyCKvDjewywzKLWSPB3AfjyKsXgWKmLfWR2ZwU",
  "key2": "3UhuFJ3nujy44MEYUgZRixgbkjhjf79bJL4kXprhueNmJUxMR5PWvxNXkXeAv7aKPihaAu2FztPppWQVcnxoJDXv",
  "key3": "4icKCydh7tUq8roU5k3wvrspeNSNZhfcUQTiiNxLCYLa7Hwu4H1YgZBT2mRxY5kU4Tc45dxNRfdMko3krNbam5ch",
  "key4": "3KfVscJHQurz1Z2Gj935Y6opqM5KSSffCriPgwhxq664gr9xzizTXpbW8qsQpdjZe2EYCNaUqR5b8T3jNJAT9f2T",
  "key5": "4ymM8mj14frr2GUyKmUSZ93RSzXmH5VCPghPHmxQnNyxRDtNz3dRPUct8bcF3EoTBVRk2xGM6VoxMqXSefqdt5ZN",
  "key6": "4z9Yzit8NMxpF8AWMgCFwM4eb8aThaLQfi9SdpBPWSLcSXG3RoZfBeU5qKj85we4vDc4JaDiF7izfoN3mT9EsaeY",
  "key7": "QJeeN56X1fEGrtn7pHg4LdytvJchEn6JC7NeRMy1bddocNYan3wgWudfU8t2MWkd6er6Kn2MmkomCPU852p3zLV",
  "key8": "wmgX38ri2vQykWYbGEZfhKmBEJc4Ls6uySUoj7ddAUwW65u5eyeuqYv4mKY77Kwh1JSbmrFmodTDZjo5MkzXJmY",
  "key9": "HQuM3xovZpJWtkF3ADYCXbEZbvF5kzFjHqoknNUreJmr3j3X1abQhHxR8juUZ22wy8oJqmAvJUBLjPnz3MbjQY3",
  "key10": "5w1KSZp4y3U8sfs391XYGPFNDXZBMn98EM56Nmpbt11RzCartTbT9haCj5pAMkN9whpbfN8HprzZo6fj2WyNHdK5",
  "key11": "3aVwGQiArQuM9UrrP32SLhsUDDypzgJWD3dKYPU9fANC1f1bqtT1JbCtZ3u73uHHGPk9MwNY8DVRz1oZqgzxRJpH",
  "key12": "5USMgHzsKzZUoHNvggQ1q6Lkmv5EDgve8AKpPoPE2HsxQzxLteGARpAQx8B9Gcdn22JPStKatth32sqEa1xTuy5k",
  "key13": "5R4V3mRsGzoVAcWAU97tAv6frE6rtV3hv6e8uBq2Hef1M9tn36syNP6GzWem9VUxNfsHjwuoj3pUZxvjUKn1dUxj",
  "key14": "3vaYY3aKeXzCQyQp6Wg7XDKNtFuCUhXu3XDao7x8DYe1LmCSXmJx5u992R617etYh9j514RrHJQLjcUcYqQTvb4L",
  "key15": "4SeRjn5RgZxG5wR3XYnd1w4cQAvzDQb27QX9jTyRFyX8mBopwh2ucmpKM9iceibH3ioDJ56Qh2jcarzKED6UFhGx",
  "key16": "3MLyf2FCzYVZe47mNMsVoTxKsT6TWf6y87b45p75y5vcbueC89xcA1N31J6Q9iKAid1cHAQExbMCuST6vk3hm5P5",
  "key17": "3X7KmRorAFSognZgTZb165rpD7eoQHup7LNfHwPiAMajme8FsfTk4CBtYpU8M42KXeN4MqUjJauq8YyYARHPTRfK",
  "key18": "5xkjCMSZTScSu2tJa2nFrEbN3RKz8erGi5xPSfxb7WY3soiLycCJ3S4HZ1SMvKruszqHP3ELve3EKLEdGL6kyodx",
  "key19": "27efnimuLQ1VTgNKb8DAJqxFnVedNGj3MHZpkrtYvkMmdBo9KVLMLYBZqTQ6cJcsMvJtV9rFeowzBRXDKhDsVnXU",
  "key20": "54PLbbZwwXQpM5H22CCSQ7MfRbBsHnpKWNPKQ6z4KLrWS6guDSBSuRSSBKbhckmvUhq6ehdH2oghrvPYTv5xmQrW",
  "key21": "5XoztC84ExQ2V7yxg9HvXCR9cwutdmTdkeqW23cW8UiEWpK5ZAARRRsX23n8pA7PR66e9XcasK7g5cq5KToaiXGP",
  "key22": "3x9b8JSx8RyhenK8jScBiApJ1CQdyJs7QB4gPnRx4nWCZkvZMbRccgZ7jchKhJpPnVkeyabedoLHkyL5QHEu3E2R",
  "key23": "2vYXmi9SGNjoa4FnQMo6YGsJLK39m5ghvTyu8oH3AAM4B17XJqnzKm8F5bkSZai1TeoGuVHdVzgHFeSnV3aKPoeN",
  "key24": "5AkBDQ9A2DYSST9QzdmDaMg2ZcQXFNE6YQUnR5MuCAeR41iJfrKjdQgermX6Y8wQKQo6bibftzniCZshSRJFJDkm",
  "key25": "y9bHumfUSm1Gdj7bXR8rGEAFi7FByVbCAihcqbTEFrWoQ34vaXfvmn7f5bGNXv8cEHnFh9LAbe3Ra56ManwJm27",
  "key26": "4SpbSVZKPgbAE2emCQmwj8D98MwDmqYK5iSzAxQJANS18pdy5MQ31GV9vk1D38zVsSAAZ4X9U1JZ3p1cKpzXbofg",
  "key27": "3hmxgAgTURXDVWQyEWVchGWN4rKhixDBTkqqJ7h5etFxr32RAF4bGY6Eu6WDMwBQVkuooEtt253Xc6XrTNX7KVcc",
  "key28": "3Ye59MAnxzLbWZtMQqZasswFVevZLhEbNMKePuxZ3e1xVof6Q56W69UPSCWrM49MZaAamEP3tdcFnvL97fSnQ4j9",
  "key29": "3uvfo1XrKkcY2KWft1ZRGc5yZPRoxjLR3Ec5n63QCmdWFUiKJWvCjHHdgf71Wav4Z9T8Fwq92dfcsK4QsovCQYuk",
  "key30": "wQ1i7PGA4czQvr8wPCkDV5XzGwNfN1a8RsCfTfEfkt161NopBpwff8n4cvaQm1Jb7fkxDQGjbUQoEodtZGb5YmB",
  "key31": "4VAeTAC2EqJYusyfpovu79VKetZ7hQPKsntdBLijBTeiLzj9pdr559pJHLbrrQxRiWiyU7ZLQXtxqFpdU33h6Tto",
  "key32": "5Wsivuv968MGUiTk38djfM6Z3ANViGP1jtBhct5CY84wpi14cBRMQtdh6xsu3HNMZkJwTgyYHqhoxpySyGF1WJMe",
  "key33": "4qBHVWt3S5R1HNPDeZC24ohirtAodswDzrHo7wsopiums1DEHMGCUCnVbcr6WwkE7RakGUeMiT91LH2mvgC8fFr7",
  "key34": "5zi9VBjMmdyJJbpr7PimV1ozLZEY8SaXo9HE4CnKhTxEVfE4d6fdBCEoSKMtmctRnAR5xHZdZJ1unHEnSyYjvdoW",
  "key35": "3vAjHVHJh4Eo6KCKZxmGzaSXkfdy5FHz4u1yH2uajTP6nWxUoDbsFgTMH7TSVK8UoeSynRGY1VgY8dBcU4wSNUbJ",
  "key36": "4Z2yy1uCmXjyPZVW4z3z5qdckawmhXuWWYCo2a19Qqo5qRD9NofFhn2WBBdzECoCxhPnRrwkdu6KkR3Q6Ndv5ZPV",
  "key37": "Tqa6HKQCAaJe3PYqyMkrTU6fo4Bpfh4t7RBXEAau7aSB6HX9dg2TSk4b1ywfYU9uEmv8Ed5oYVxGYWzkaGDVtQv",
  "key38": "UkmR2UJya9bJvu5y4asLhDRzppq5tmrqkF99fQtexuXWDXq7mKnP3kzbSFtn9cFG365rmZWTrfoeUB6C5oCKsRR",
  "key39": "MbnJYsbcwtGtdyKxBAgYpCKkPQXC91T8z4Y58WF1Ag8a2H42Yw7bLihu8rxyEZpMsXZbBmrpCxDksuTotfvn2Ws",
  "key40": "T1dSAHRdjJHyb43CwLP4Ne4tqkDcSRMoz3y7me7oxLyZmAc2B44fzRw8sYWKpGVXNK1Y4z76zLNt1fkPY2cLopj",
  "key41": "Pv6if9J7qySwN7ssqM5n18MhSVzmTGJmYBD1tQw5ZEsnKGTSShkfMD6vqxPFi5EdVqAaTXCD4KynxX4zSqFE5pW",
  "key42": "2jow2BQLjrcqtuvjHMUWhYAmggsUiCef22QGuTykqkNPAXKKp3Uwwmw6b6EyzuhaA2hwJueSDUnjj11W1N3wFX8r",
  "key43": "VQKzqkyYcYNBanrg2rKiLaYvZchU7ernkmy2zHnRJZ8P7XdSszYiEeJo5KFqhViVi1GmJMtHo9Zpn2cw6KYt56q",
  "key44": "y7aLEwf1bctgY9FHTUDq4Z66QCWXaEFnGNj7yzhX1tmm4TKyY6Kof7jNztr7iRRmuAChELLcrhb3LYdQz2c3fcv",
  "key45": "26TeCbpi1gi9JykjidubNQgXmGJH9GuBpgv1sWFgwPCUARtmHjycn1XsEJSMivii4RAdonEHW2bKv2ucs8BQb1Ys",
  "key46": "58rKRStRpytLMMLKeT7sWXQ7tc6Vhrs7yYmRnKFHdf38oUwP5w7kKQEYBqLq2Ui9tLJsKwrRK1JW2s7FXgvotFG4",
  "key47": "3aLBiptNATypkXfSy8Jg7uy98nsjJ2ozsH5kaH6HKjmrSkdyvTpEJZZo9fVEJKaqcbX4rUhVh34mvRke12rKNQK6"
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
