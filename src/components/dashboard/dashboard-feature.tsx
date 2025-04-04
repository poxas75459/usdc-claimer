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
    "3kUGAqHXcXF1njXvy789dgpdU5AQvSGpVoZ94hxahmrAy8mPt2HtCgBw7TXfPmsbiQ6f97y8VT7KzxZ3LQa6QUd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPXyf2c2ECEFkEcyqnMZmeCXLkkMCYXqdBn9dLs46vFJuSqStuWwEpRtZu1StHGoe9epCWLFh43v1wdoGwMJVMQ",
  "key1": "3TGexRuBtd3x3xvKcWtK6jxp8RvsFjpchhpwnk4vQVf2R6fYpUgBoVtYJ82DCjT7u5mXAfwGYTqVqWbWqq1WR2Kk",
  "key2": "4UyguePbVasyda4JcgAH8ZRr4wanD57ebYXZNG7PkbA88oba2SZRX7txWUym2NzjzLW1LBte1Aj2YhbiQaHZ2CjN",
  "key3": "3EAvSJUUoRDhKwqT2YsC4hkeCkVA6KJ2hNKgeKTDgnEjm4GpnthWSDeyiDwcQDP22WXcfQgdS4hmC37AFd2AQB5D",
  "key4": "3r3NfPX1ihaoTK7gA1W63D9dS74UhCXvZAUYt4i4AWwrqhaDzjekw5fYaE3XzXrrJxDCBnKEU3LYMaDkZhz3FKfv",
  "key5": "5o2pAUy7zWs11C4uKRXQLv6D37H1ZJhiueUDLXV8ueu8EV64jRjrzvvs3YPH62rK96BVzkcfhJdqQvqpnFC46Xix",
  "key6": "38ju8j4hXWWQRfK9QxkJWQioFJXxnifKapuZSedjXyLKb6VW5r6dxCus1tDk2ugtT5W6TjozWC6u1Pbn2yWKNHT4",
  "key7": "Do6s22MVNkUojus6R5XS5K2sR2upjLHca9XzB9V5EzgWTVcPZCfcsS4eAtP41z1BJ2n5hA94HktLXC9BRfioGxy",
  "key8": "4nHLmy8zDYVke5H7WbCv8VvB582Q4SE3iXfFXCsByuU6qJsF25cYtYs18gVvP76zGi3Tq1AvPrs7LaAzJnVd27pd",
  "key9": "4xGGqeNVfeNeeSfcLd3cTJoRTXirVqsr1hhejdVZoXbLq2aFY6BRK2k1Uxn9WzeM9CU2bsqYdA8xsCQBr5qoazNg",
  "key10": "5fJvYu1TNMhtzydak7pT2tcLcotrWsMAGidWcEaRi4Zu8YxN6nsTW8nh6VXhWF86xzrWwEjdwt7RKn7AAeiyKsXi",
  "key11": "51EWELcr724FETNZChi6MNQaurpc9hkv7QSYzDsWbaBnkygndb9qvCioEMNr7RFxX6wgxRodZNtXjFrJwSd438Xb",
  "key12": "5BcdwwhHVad9UqMKA8J4PaN8sJL3me4LtppVpVTRrWEDWvmuLLyvmeWDKhSSag9aLYFNsHpqBR1ohF82We8u1DTJ",
  "key13": "4KW18cQTLCovZLsa9Bxrpe8AE2TXDY2qiwyQoxuTaZAUhRa32RUo6KSzB2faMdx57kfugrjyRtuA6wFibg8xJ6PP",
  "key14": "5QSPfRwfrf52SMRiTrXdSHndcUkwpqNdA6JQXZyAuen3ZzDiuxap4Ncu2Yyqh2TZVpho1fzDoR2d6EE5C9GYsJxZ",
  "key15": "2m16Rg4jsoQQp99ojABD979b4PSyixvttBQsDJjSqz26VdYxwceUz2UXVnR7PMrvLG6Fw6zB5BWjorFGVRnmWFJX",
  "key16": "46KGvdJc2TjqdujBeznrnnqZDe1jEGrbMAjLawKFg78HFjaGsu4Z2ph85ZGa3mD5h9d6Z6RxM2TmCS515pPuGpmW",
  "key17": "2GtvALTCkZjAXFzLBL7mw21WDfVGXB9dn3msUN9izD9zCD2UZzHFoupK3uXZDnqbUb82EbGgfzzr42NJJD1Z8mDV",
  "key18": "4MRk24zLgapEGXq3EhpezZZxYrVSsvbmXrYM2aVAD7paY9D1RSCQdJm1aB3odGc4w3gKLA4WCevkem7W6NyjC1oP",
  "key19": "4QR28zzmLkE6bDdU9cNCaHX87dH3jrjMeCKwFdRd2P2uuFbNJrXVpK2eJhJpkM3tRCVTdLgdnLkg2e42eGGNSPsF",
  "key20": "2fy83su9KBfchSZMQBqo2DEV3rAbPcpzC8Pz5AdN7FUX8s1k3Nhe1YATaJTtgYBaUyoeoy3vTaPQ5fdEF3Za1eFS",
  "key21": "2ED7YatpwSU7ARsPkQhQPLGPKm7PynjKJ7ZZDEsZcRiFpbTqkZvoKXs3syPNUzWpTSr1ybGwGsUNLTLYwiEAwWFy",
  "key22": "2BkruUojLBzwdLe6AKK1KpGxtomXodNWZfzNJzUf8QE98gcYQzbACKK4gCiqzeAEwcn9JwpFoGAt161f63VwWiye",
  "key23": "DNn7R9Xi7pkDdK3XYwRJp7rRYDCfo4NJGRYSSHAVS1HArSiQFjJLzD5JiE2P9eNEwww3G2FfC9uwm3RKDWqcJnD",
  "key24": "5sakauYEFq3j1ZLNC8gwkbrgsq3kWUefk7tY4N5AqvrGJL2v4gWAvqQWx3N5avtc8AJww5v3Std5VKtWwmXAneUN",
  "key25": "vAn6j5opCiYEViMJ4RjBLYrxapvmsw6wZ6zjNmkFBVJGbDeK7fXzNgnb7pMPG4tinrvvw6kZYcQN1VNyixTuLJb",
  "key26": "2x5Cy8XA3x1bJiBkFRFDcbSQVoRcaFun2px9zZq77XAnugDgCxnCQHuhkJ4nG7zEdjZBYxKZEpw2doxj9g98c16w",
  "key27": "5kGduQXvfqCtT1LBxTMKqQpDAgzexf6NC4yem7tzdhxnBQftNnboG4zBoj2Ep5qZ8mmsZp3UmNjvvhui6xJVqM6R",
  "key28": "4Qgf56xyhGxu3uaRkJwfWe1uThz7bd7NUPLzhC76TAQKFVR5YJkckE6ovrZJckc9xzhKR3dzTK7XWNwwk8cPd2c5",
  "key29": "2ZCTVmiVVMQtFnWQanr29HNnyHCDGfeLmbE3AcjwZWskMxnspJjnrbqW2fXBL49XmCABYZgS8P4SY7s5sx9yyFt2",
  "key30": "3SuCuFtFLxfT1n1Z8AoLi3hoGLw4aMkYrkGWytbEvZfCEc96TPz5Gv6FmqoWzxRiqEpHnbjtcDV3VjejqrCwpdS5",
  "key31": "4wbeV2f9WCcFpuTCu7BBHEicvwGSc9Johrzh8s88JVAZQCrSvc4iF4LVz6HamU38gUFbSRXofT6v5CjvEkanBvFm",
  "key32": "4VrswwYzKvcKaLuUpdibBufJhVEebQRGPSoPfu8yZha2CqHWecQ4Yy2uD7KSafM7DhPU3SqH9BERqb6GM957LzJA",
  "key33": "frM8YzjSKvtCB4q41Mx17apWV8rKQZ3TQPSVo1R8cP8hrHbaDQzmiLUK9n7XNNiZEwd1j8nhvBmtL2d7WDHf5JL",
  "key34": "66LuSsMBD7eh98bftGN2ABohTSyatJkG5eStJ7fxmuaVjGKG2GCazCeTRnmfFirEsLZMB4gqXscFacaPSQyBLe8b",
  "key35": "3zF3opTcCKuyMbnYrrPT7VM84QBDqnBKdpyk9uAgsWVhboY8K3vnV2iQTNXfcfBPPwo1wKBtGCZEeXmHWrXSwqFR",
  "key36": "2JXaPhteZYWVcVGPaQF3J1yMLY8dYdhuM5jNu3B86vw8cXBSiMKqR8a7GewWkbnvo9HT26heHmtqBAy2PvYH82BK",
  "key37": "3HAruhhv1Q8fejMNK5XuK8VcrHeTQxxMHTDNgYdaE9LG1VPeceJ8PErYT5cvQHHc4VN1HwFYVjZVa2kMn4nErVvx",
  "key38": "3tdzucU6hDnZsNZSQoUGBqX42nhL9n1ygHBth3MLQKMKMbu7BkFbUBP6wreANTLwLem4TyxEsWy8iFquzLKh9cXM",
  "key39": "4ioY1u34a4DMFFKp3E19atwgk4uu3EVwfYLcybbHoa7aYEhHBqzWmSxdJWN2ZHK59SwfEXnze3p37FfTCt7q7ice",
  "key40": "5kGgTFRRwU3pp9Thy4UpYd5d4CWyYdHYW1VPauhQZwkjZQW8vgaiDgXWyhfKJHE9xZw931XexdCHMsZBtbzV2TmP",
  "key41": "D5r6axFDsoqFGFRq7ahgrcf68Ro5u5cWanKFcTP9JgYVsdf8hZDqYEkWMvAiz2goj9eqyvxHDCYxzesjCWqCQkL",
  "key42": "2zM5tZZViVu7SguXkzTLX38XiRM9aMnvzvybrULrEGSCV57KftvwYRTMCzhA8SNGNaPZC1eHs7oJw7KjF9dqKkzB",
  "key43": "3swSrKboDNjNa3aWofKLNRssSTZfU9EpBE6n3WzgHWUFeBZkfgfk3cFXzJQvkbVrPEqAPaJ1bkTfzykXmQopLcM9",
  "key44": "27mdwtVJbPsTFsLXMEwrLMTpNu4qGNBMbAbNeMUxibmN1New7uHxp38B2Qt2bJu2eLSgsKMBikAf6TcDKEZajXBG",
  "key45": "Koj5rLTA7YDTK2KxNrHBsxxKW3uaGXHrN7CeBsSryaXAcmiJWChquXrjeLxRo9M59VeM3SrFer5LyTNpCBg5fCk",
  "key46": "3K1aek8CX2DzZ7HZbTzwTBq7mySDwudFaFuQK1KSbcse3dA5LWkaT46M4N2zc1J5oKdtFNXvNNfTXDmoz8AmWpg4"
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
