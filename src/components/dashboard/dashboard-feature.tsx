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
    "2uc8VVHW3KR8iYza8nBroZgaEQ82iR3GVQGLYa9u2pBkz2nJpmUBkW8X4zxzWdMwif9QzVZCgjN2dKGa1cETjvTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZ9cj55PXgivCS1GXznbpaHkSNcYSZz114KGXCSfNAszaojkbVsrFvvRcwVD3vHZPn1arjng5Zs7oAU8khMufY8",
  "key1": "3WLm6DwZruE1EF9cAZHQdi4CQoNd5D9ZvpfBq4m9iM8f4zQNQFkRNKYsKXuSospKuMJDEbypRQeaVDjFTYPgp8qB",
  "key2": "fX2Lq2Mi6wS29PHFPZeDh1ZEJ84KFSmQHgXVhZuVM4RxfMQg22HYTYMCFu7SJdLrhUvSo4rfQMRqGMvXAvjJrVA",
  "key3": "3Jj6m5MC4iaHszucyNHKCm48BZ7Lyacqn6YRhZ77R5Coc2YtDXRaCeo8j4paEa1kV6XgLajrzaE3Y8kDUfYMzpQd",
  "key4": "3rgx7za4LRNg7e3cMPupCpf1M455n6Na17UpGinHSnxYHCxiD3zoR27ytFgWJxX8T7wwRtCZZqgGEbMKWFwDG7zb",
  "key5": "4ibC7CyXZVKvo4MG9agEdxbiWphqcqn9oh4vFbeskCpQhFZ4rcwjLqcVNhhaYGWLWqqfQQrJTDbfkpX66SCksSwu",
  "key6": "5qrWT7vDq9DnKboLsmKydPKjuikHZGHTwrgGhutACatJ2vPq3B4MNqbqbhshQ7GHzad1bKWe9462AUNS129rcZ5b",
  "key7": "JZTmokpWjRUjku2xZPV1yR8x84kCVEo8Sjsuoc4ei9nq64y4SF5nUx9ksN68S5vwT5Lr7x5FVLnqJPaKc6uSXJ5",
  "key8": "5ih1XZykXk7trsePKqCADdLHUHxtjcWDR8HUXiWy8kGNUGDcxLm9uRFPXiyZrwxnbagbwFasfnhHpbDv9jertTM3",
  "key9": "4vCNHXhYRg4kkYXWmd2w1ki32HyTajQhbNc1D6zWYQQ1Snit5pVK5oT9Pp47H7AjcNhsZKeR3tefSMAxa5hmGdbc",
  "key10": "4ARnWAF2vdwyEXK9zHaAWF38m81qCuVb9nzUDz8YvLySp4xeuArEmpULtM5Eght9QrrXRTU7VyP3GdVXFhjjfReG",
  "key11": "DWDxBUMNfzEnjiZvsA6TiH7HmfomceaZvzcm9y18kAFpHQFhpwGxnX6CQnbvXmUqKA39T9h5uabLppSXszR7G6P",
  "key12": "4At5BVBHeM56L8CLsEq1RTZqSgJKVe7tpef4GGJuSthaMb6S5V4SdhL4ty5yN4rKNfaePiQAhcqamCtbYXJYojab",
  "key13": "49qUuBxmx9KbTKxmZTVWcmmp7cFaoHQvEWLFfqTLSkNN2C7ANpoifHbWS5zyBsXydfGJ4cxwnNksMkUkTsK36A8V",
  "key14": "2HRNMEWyb75J4t9mZUBXtsMz6CzWGnbBMwh7h8fLxpkP4VzfGhSaaEWu7u9Z9soE2xvg3dphdPmM3aYVaSTC2Svr",
  "key15": "5cJRNz9Lmk84UZF9o8rzjnEUPJ6FdVHwQbx7yDXcVY9Nc7k2enxU9YR97g8cYCwtjERybmjQdHrJ7HAozrtytJw3",
  "key16": "4RUPdFEmoG42WLE8DF2gQWoTEZuv8CzLj8F3JgHz5S2dQ8pxeRx9D3zzM7rpkDsKsHYktuWHuL9zWgabQdPbRtnr",
  "key17": "4BYAKTLZqxuEkkEfdpa13jrVUuWYA4uTdp752gGzJ93QZsKaPyRqsbX2FDg3k7kxq8mAm5igRHzc89HuyWYnxo7M",
  "key18": "46cQfXuJjUnEpjMBUphTcULMqPhDjeFxgiuRf8TFn2Z5An4TPBZH7vH9cLJgXf9FXzfBSpiJ41rArSxX3aZAdQ5B",
  "key19": "4kveXygNwgzfLAxsMzLc1jyfgpb6CxaCGGZsx3WdTwfS8HcTuiqLyw9mHgyNoxLPsvYzzdDYtBmyYQ6kbWfmWBeT",
  "key20": "3QGvo7naUFWXrzVHQaZB5wRrjgTT1E4mMVx49gCWToZ474iYbmMNx9TxYGh8NNeeC6fP82ajydBaz2DFQeGyXkNo",
  "key21": "28QEiAw651PqfkcgaaVJdxSvYZnNaEsEb4DrnKwyMB2mLVWhcusQ16Xst9sDy91Rf1GFJbSvcFazQsrZokYRmmoP",
  "key22": "2jy3H57rgBycMpB7ho1XSfXp56aKAMSvwwFuxKiz1xVF14frMN3TpiatyMyEVugkh9ToHyk8xgQ8y5Yc1hpkS4AM",
  "key23": "5PsDcnp7jVeaLNShRtddEoJA4p9JgJEn8FaVUkhjYtyeKCb5a96QfgGeoBb4uoSpNBexfTy77UAMZR5WNRB1196H",
  "key24": "5pdTNjov9NKUj6qKjiwNVdmkVeB7RocwYhhu5JE9wsuofEjygngZkHgjSXmJ823Zu2sgzxMYAouvuYFsYhLShEQR",
  "key25": "3SZe9DSF1WWPdxusLiYdPS61DTSeKErAsRJgujV22pVWUy6S8kz9S7Li2anEubJiejKabeV6tFecwTp6pHj7cT9X",
  "key26": "4Z4UYaZ7U3ZbbtBVTNb2Gox6HuXLRe8YPvRSmE1fqpU1szmKutNnywBw8LcvGpQQm3FU7REUMhpxpUgV4gawHfah",
  "key27": "3pUofGL1MBmhardsRcGrnvuUNRr1yvKyaSxew9R43hNC8Kq2PKcKwJUNBe3QAbNkbDCmRM8qpuK5wMAvrFZe5uoz",
  "key28": "3R8jrpNCfdL1uPjAC9tNeYX332nZm1aVzAvcUR9o2K8V9t5F977wcwFrUQj36ZNJGZqK3LoJsDvfmoGYujicGRTx",
  "key29": "4tQBeMdaG4PujEBUoJ99Z5PPS9zcgBbssWvbANBaxW2FwpB3rYKiJMdmJxSFRuEFRHHJC4MovGkCnLjkmrcumTAU",
  "key30": "2oqEkp5G6mTzRH2zaa7ovmv5AjvBpuUzneaTQxkTjPsniqG3FijYD6fHMkf35n1x7LpQ6mZbbt3xVwD585dUgScp",
  "key31": "4UzDCwQ9pZhjNVcAV3eUEioFMgSLPT6f5iyzvNnRr1oLtmhD3jDn4AYCXTuEtFWVRYTeVe246VhLj2fUp2H3gJmV",
  "key32": "4g8KEMBPK3oLvTjbxTchbva5YZXQBaQJoo5PRgZ3kV2pUTnbwph3kJdwffUURgS67RKka3oCZeNhTrabHCP9EWSy",
  "key33": "2hio8MwGMAB1hBgD1FYy8sip9EhWS9hpxJgHgR3LDdN3Ay3J1HvHvWR2PJihcsKDKjdRNfgUtSJT2Rr13xxWuSmN",
  "key34": "3A7WzERq85gVvHeBXMqe5Zze7hw6TSixbDvMymB7eRtytReqpTiMyVMV2uzzn98yUQLGjp7tYpJe3uCXvH5ZoYy"
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
