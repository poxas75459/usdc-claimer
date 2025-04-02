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
    "57xNXaK8VqqYN1WhxZ9Jt9Yh5shaD8EWP2oLs2JVna4x5Us39DsAzaBZZFjHguWsmzZytmS9FFKjpvdZtwwyTRmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GdQgjGBWenCAUGVKTjaJS32Fkcxz4JksECZxHxQDkgkhBdkqnWWHBXXgkuRNy1CNuapruZZK6rs8R1XUE5KThKV",
  "key1": "3xXPEnAWb8wF4uAqZF4LzDNVUs8w8qZasuPwEdW2dUjTLxfPF2mWhTi6EF56rJ3kFLdAyQFVM5T5g2BExPenqYB6",
  "key2": "3LDmMhFaVK9XtWpkKYsukALuwCvdmorvXJpRgLAifp6MAjhnYXfhuQLR1rJJJiJ3rzfYBF3HcgxPV7ujNeV6Uc7p",
  "key3": "3k4dLfWuTrgd84Aca4Kc73R32bwxkjKrg3BFgFn5nBYDUckVs71Ko1E7Q7QZPjz7L5f34YxFwbSUSTyEUq7C55AD",
  "key4": "4vBo5J2jgjerhERRod9wXu8kj9JRsvj7Z6fwgoAqwsMy2KBmfRGqeK2FsdHnwj3X88CTEj2sfdfNvoHGweeo3EA3",
  "key5": "5gxLp2UfCfgWwbLFGfdCheegD4HyCNEiJK4zwGq3aViqPUbFFAVSwGVnXCyM2wC2HBMB4jcshXxZ2Y14RME7c9Av",
  "key6": "6cRwbEdii1Zm4x7HD4HYfVDbAmVQpDUb7rpgPzaNEpFA7QZZGZyv3xr1yjKgTd8mn9qG8nBkoR44qX5bNgq93C6",
  "key7": "2GAoXJjsR7hLShC7LKrtKEw2KKeR72Yr68Ld3n9gnwQWbyrgB4TP51H3RF6ybRqMWfXZ3i6A7fq114DXPAPhzT6a",
  "key8": "RJxMs5FaGXkg3RiRZ6tQ4itTEwFiUPtwfAHUrruhDibVGAdgDWEeNy6gQz9iyxhHaA8TSPvc8RFwfgWoRv7PASw",
  "key9": "4RTWEHi6XichmPqqRMDkcGxfVNnoox7y5t2FEjNofwXp2GGNu3EwBm7Tv5KfGECF4hx8J4kxFDxn9EhjUyiQGehP",
  "key10": "4hPR88vmW8evxUzWeWRQbcVSfqjH7tRW3YdnHCJJc833tDJWJN7XGpzytWQx23jBcwLsbRDyiRK9r7Jy5YEJwQBf",
  "key11": "2Rxw8gjkf4JZ7hSpuqpxWwYA5ZhTceKbinuop72RwpppQ7yTzmT9cnZ1yEBk3YWmHmoSPisGdLSX2ExNnnUyTr4a",
  "key12": "4uEE8k9gV1gtLagw7XeMmenjVKxFMNHp2jT6t6jvxp8Fti76ctnrXctJZU2XhJ2eJh2x1uFKPgpTseZxE3JmqtmD",
  "key13": "HVGauLie7ye8RcyRJftFVUDWxzu9viwAEHeK5Daj4EpCAr3HKLwzXJAYkvhkjGhYwmmVi7AxAJpm6ajmEnWbfha",
  "key14": "GETCnwXfwntG27jnKYK5hx9t7ne3YCHwn67PKPF4oeRQorohwgyGfjYU1F68ZxWoMrVnWqDU3fVFwGZ1HoupGrU",
  "key15": "33mQB5ac1qpXotei6dbbLkpzWP5Yp1N6G2G7612YgjxrtRugwV9o3oYEXqA6gv9NNLrYdzG7pR7GksNNS2Tg5gRq",
  "key16": "5N9W31Tfq2ziZ1MJwFzvSPNkKrL36tmp6hXFEJLbZi9MJg9ZLYyVN1q3TfEsxbu3sKjfF33gFeAmpVofs6JWT5eB",
  "key17": "61AvqPoaEK2T1nNuZP8wb93NthzSWL3YeBbKRrmRfVeKGFt3ZoqaN5hdpRWt35W3BV6rqvmTHanCPZvNg99jEVNr",
  "key18": "3iGuADK2KTVYBXLKxEjpjgxSFC8b3KeyExFKeMnjLW6xiGgsQFo2MuwP3j1AZJCx1QVZCPgrwvo3uCvAcxAYDQRW",
  "key19": "d2s3B6DN7rma3yyBXZkGNJmbWWSueQyT8cLqrhBmBUQxpcAKhE7BeagzRtpkvBAockg9mrdn9KBHaqrCpkrQkKW",
  "key20": "2fHycrEACSBxtZfk6TeY2PSkPZPS19pm3bhgYAkHwPcbPnyCFsAZhzp2y1McMkjKH97s7PJqWDjcrsENupM4yH82",
  "key21": "4YYUVUgsc2ZasHYxzSoBdjfuU2Gk74K7EipLQz4c6hNCPsa7Z8Usk4L9xqijJPcupXrKs2dmeBbdFwDPFPwnHzDb",
  "key22": "4YgaqLUrLa93RRTajoenBD74jwqn6YZjfMUXUn1N3sWPFXtKStkDYVvYWHr3DkLbubFC9apJzCfre1S9WtLVRUwk",
  "key23": "5Rth8dAm4DcJYBK5P6T2UXpdoiryfWBPrTMESir6Y7f2MJomPM81HdWGXqeyrT6u3JzrhS8teC4ZqNvyHdsPgp6X",
  "key24": "4bHZULtzSZLsa5mGTTPnmqSPBzGRprrgEmA7paJHcJCKfBZPDY3TDEKFTgQ54QAJcUr3gG4kg7A1ja8XYhyc4RJs",
  "key25": "onJzMTzh5rPEqWCc5oMYhD6fGR75yL2w62W8EjShzEmWtuqZs5uegywfdrQj9xmtNKvEJ5v8J6ELXB4C1weWTXx",
  "key26": "3m5pCmhniHctK737LohhDed3MeHnDJNgiSumvDpgmzr9k5wJPw2sEtbAZacQq6XCH16u9FKssExQwceHs3vyBTaS",
  "key27": "3HJmSkevr47NTJVUqHvysRvfGMCc8gUsf67oNjRan3UD7thtVLTvi7ze9W5fHADgpfn9H42omqib31gTW6CcZpqP",
  "key28": "4LpwSfNKFEcB7GwzWDVjqEp5kzKuBiGPpxYNsf9ywMkyxzUKcdDP4aSWTQUR3mD29AgZ5D3GGYcGKEYU4QDAX4gp",
  "key29": "4LoVj9LjJH5SiRRaFCS4buaUqAxDoBaR8BZjPSBNLPfLo1gka4afgkfT7feHgda42BBNwXF1pnNBkw6Xucs4DGnA",
  "key30": "1ZBbHGJ7QoWZGEeQqU7ytPyLUtoHfG5u2r8k3utyzu16ePPh3KZa2MJkUyZXf2THAUmx9JmumhaeqF6xf7iLZc9",
  "key31": "2uo8QoEgok8TkP9W81JHJpaNhCkacFL78rysjjUoLLAnz5HgThgFhP7RmtcxErEzxNhQ11wLwmYFwLD99hnyWm7U",
  "key32": "4pwuY1brmaeyh6AYjMwwGZ5KAapBC9xPRhdwco2ym375bkNiwN4DKzT9oqEjSEbfbWZgK5QuA1RgMhzJsNKsRsrB",
  "key33": "48MqMhWaVumHL7Y1RRkBNqhveUUJdRFn81TinzX5LjSVvV9eCELdz8K3o6QghP35xEyZaKJo6Zs8aU8xT9SQhaLs",
  "key34": "217H69wGzha3jYBmKr2x74uAPKBjzQ51ji7Ew5qjUReCha6yru39yjfZvdaTkb6QhVfV7PqBqFgn58ToXjCNqYoq",
  "key35": "4sqzqrqweH4eexkJoSFtRkU3HW85fK467mHqB1PLWMm1v1RaooSMyw2zSqVupXRVVVQbTKevupo8cU4J2Msqmn27",
  "key36": "2JjEZDtaFo6EgVNteb63qLHtwp4JzPeVtJG7F4BNLCk8VvRGyGMqorCoHhj2v5waW3dQeY6cFTZSNG2tqaFRh9pJ",
  "key37": "4ZjxGJShJFXX4iC8fCw6sCYmgRxw9RoZ5ngNQ3tjuExe5YtRUbt3wDVAryn1mtXMvh7nDFHBmPXpWVL2J3k1W1qt",
  "key38": "2EftdqbGrHeBcePUx5vGXfkRBHfXX6fp4wE76uh4TuRXXopPe639s8kG81X7Hy8DvtALH2V2b8VpfVUBTPDBK5w3",
  "key39": "49kZFAdwNzpiM6TSsfzushT472hiMSUyw2msBVGkEwZU6bWURfWPVTNBHBeZbpUkktftdrPXSYMSU8oiL3jU6A35",
  "key40": "3Y8xJWkz8niotNBHrjE2J7ntdTsSjzs77P8yc9UzyTUMSYr1UsKQeHduEGp88neWnts49Tk6wLdu33GTNxtBcGyW",
  "key41": "3KvZMNEAmfpfgQpwbt1oekEhRHU5KxP7chSG4NpUmcNEp8EKDnwGMjPzJ9ePQSjPBskUVHSTVWHmN8itsTSsGGsn",
  "key42": "3v3tBLcxFgeJnQq1BgK9EMMGAK28fGR7Mq6YpMB2SBtbVEXYpVQuQviCrWKFD7QdjXAHtfEkto9hehfzKqGXJVD2",
  "key43": "oUrnnRoMpsjzwGhRyDKhgAXoseyRqzbk47JERAd3aqTgmL39UKZ1gL4CKS7aeGruxvwmjsEG8jhieZJhzJX3e6Z",
  "key44": "5K9m2GYEGVpHEqbem248dYLBa4CDUg2mBGeyrHWr9UuArxb5h3Jc8uwoiayH3XPqDzpHRFzycvnqznaP71sPaMCV",
  "key45": "49waheBgABNt7QVV5MtzKF8qSJUdfcbzN73u1nVyGKGwaf6fUgpwi1PuvTmszWGRnuCF47uS45Ty1c2pE6r1pLQx",
  "key46": "5EGfHkycdVLvMU6hvYpNyR8DRLzL2Zk2tRP6ahSLuEBghDi2giAAeZpo9QFMkp993xnRYmoc7T4MSqBW5e4MoLL2"
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
