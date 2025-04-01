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
    "raVEDZ1QyDZs27XGwTKbW6TFW4HDAhMbCKDgtUeZKAPHAgwdUAHqGJZ7aHpkHLa4kvGLUwFDWRLzwqyQhFEbqa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmAotmfCKcDZyh2vDvr6bxUKXo4K88dMxkNTeCuRsvPWgfuCQX6cNoTKcUk7VqPn8HwfyNG7Rph4nfmAhzjcpyo",
  "key1": "3WkvsGxADg39V4j5VvJTQLuCYK6ArXhd7pZvmXvh16sj4smJumvfaSpxhztAzdnc4z7TTtyqhvGcf4s4mtjtCyF6",
  "key2": "Jo8aw6N6XgcbJfW3C9Dwz1udbP5QEPEYAHTtcqAqnnxzLV2X4mj2XadKcen8PZSaZBUFCTtic9QkYQXdyajyz4V",
  "key3": "5SoAfYdzHDQPkoV6gFChUdRXQZvtaSerRrorhSBtWYpP8VbdxAbYJn5pFFedh2nacDBEtWruNm9m1Ax6xQpecciw",
  "key4": "5V5y8kAxfkpfghz74ZRQ33AJAN7XZ9YsSQoLqy8j7K5QNrk3gejBZjar72vvPE9iXEZ3KxLQf5iN43yeQriPdguv",
  "key5": "4gUnD65HAKtL4qVmLo8ifaX5F2LtdBXPJnQ1SVhZCbReNoqyqcAsDdt4YNLq2mmjRzerwA5QuLxnHNWNpGLtwb5K",
  "key6": "SYhn7p3gvRsN81TRxJeYwjxhN2RWYc1soxGioUzN6WEfCHKgBhQq38KWTNQdEFjSrPLWbBcF37juxh6nE18BEth",
  "key7": "54NPCHda6R9JUGDh4BfGjTf3UrD35qzpg3TYZiGV868F7A661s6B1auje3HYa78ySEVggsE77Zup2tgZKDk2LUkr",
  "key8": "d1QwugKbHHp2PGH82uRW15gnfsspoVj2fJfqEAzDTdmbJh1xoHSTN73yQZV9V54T5wtW8zFjpEg2VD2UX5tcjfN",
  "key9": "3B35koVEJrKp3ptuJYKdsGRfMAG5Ltqqx4nYu3pFRB76Hdw2EhwMsWHRMqmji7G2bq9aDZ7MpGZPCvLo2gw2Yrj",
  "key10": "dadL44q843tBNbCE9M9cY5ryaJnDuGLqgmynoxHrB9nNcnJHDJSg3KWSPdhpeuPFbpF73pbhpjCcVnyoHQqeBJj",
  "key11": "5ZjBYhQZGwX6dEZgE5VwDzyhep9GsRA9rW9avhHHfegpwHXWhV36GY7K9SagRHcztacEi4EJQ9PtG5HUeK8Zab3C",
  "key12": "5sjmhMRDqb4bPMouCbihGjd6nk4tJvU8L9d8bjLG1tQusi1DRyLs1ZZ9Rki8o9AxCsnUhLqotjrAx8hjwn62VM68",
  "key13": "52wQn86dUq8qRnM47Y3wZwdkBaq8hnivb39cqXcY4NYTQgEU6aDB975FExPWD3h6CvEXtio9GWTdTwi1btrjTCA7",
  "key14": "524ZpGQPoemnUzJbaHXSHH9LKXnVqXrYDZHRwHjjQvqysVctyMZJEnWMWdWtCanMGanv1AbzJPeG1V4PKFVJjCn3",
  "key15": "532iUaCe1pMb9EU8GzKU4Xdb3HnQ5YbaCXEmrL1mPgpj2phBaPzcJCmzyaK9BtoXKuPcQGuBAVVh45b3JB5pTfXE",
  "key16": "3eGYs8Gth6Mrdvoe23A5Yb1Boh7AFQ9A89NH2ntHz5ze3X4gC692hp6BtocSkmsZCbCt3pW5zXLU2c3gNZ3H1iq4",
  "key17": "d1ZJhJRYWRpHjvfDAQ3qt7PEw8KdSdLhZ1nnZTtdvKbBrKnmBPKuy2wezGvBjGzx1Dme3vjLdR6bxsgXQo5aYFo",
  "key18": "3GZY8wGjuyj1Jj6gR6DQ4Uaei1y6SYrVDmGtnAS1hH265Rczmm2Bj82Fcq2U5bT1udwWupjbm1N4UawZhciGFtU1",
  "key19": "2maJqCdBF44D4Rg3QcFn3zVgPLmLzNSgjJwUVxnS36H7ipwJERCjhnJ6fctqdUTN5fJb4kyLXm4B4ZhwW86r8vTN",
  "key20": "3vk3ZxeePud3NocfA7ypPk85DaPa2bJqgQgxYs1r6TXU6prHJdoAe7Fcqa1eX1ZgLWeA4t75rXoSFr4Sp71uas4Y",
  "key21": "2SQ7qg9Fv6wxoJSJb4apVyp8r96CdQfMTfJgDD2Q6kvEg1wTmB4oKBKTC2CuVZs8DmZrgeNabnA9WhZgwWeu6NVN",
  "key22": "Ct6ccc7ao4TKNaGtWfqE7peLymEVNrXLZNDh8wQPdHqmbvbnN9WXwPkUX79K3jS8RaEw5e82GNuLm4gKA9KJ7sb",
  "key23": "3U7xZahAi3k2oVQ66ocomkJV6qM7SpH6qs5PDUvqJbh6xHKpzePbkg1HftHNNLYQq9fdrNhExUUdDvw2n3eefsE2",
  "key24": "3UpcaqTYdXkdvJGBEDHwAHY5v43xRx7UxcTka1rJC6YUVHB3s25t6erHhgCZR4RbjenKJTi5sd2mTaNh2hu1Ejzw",
  "key25": "3KzCe6Z3o6AuRFyoF6kbZeoA5FmLKDMKhVb3Xx2kWs4mq2D5zLVkjPNx2fKVdzPacuEe8CFM8kFxzZdanHHfV8hL",
  "key26": "5DwgirFovEP1Yk3wxXibeV6xjrohzqwjcUvFNwi36wsRjbyGiHqWqnabhoBdk22sj7ixa5cT7cEntUhBdmrMM2Ab",
  "key27": "35RzrxsRZNhVg8JQDi4C8QsuMe8sxB71U36Md7wgpu8U1HaDK99iti8YDrEX2Z4i6y7WdZLc6cvvUZoaqMG1dYRL",
  "key28": "HrpfX71opceJhdVht3KgnP3hLdiViG6jC8dyfxJfsV9h9QC8ErMCTtFE5v8G6jeznu2KHX7UbzhWm1o78knQMrv",
  "key29": "32ccxz8EqeSJgWJ5Q7uhpji6aTK2YHZ2qyYo7xyZPk1shqj3cR3KuRKJZ6pkGLueCeR6no3H1Sb2mRzgk3BeVSdN",
  "key30": "4i8QA1G1TobYu7SjGWayLTzp6WosVXAdxLncnn1gwNc83V86xM7xDEZntmJrPeQQ6Mg5AZDJKKPVGKezXsHYGvRS",
  "key31": "2TPSpjiWgn3f5XyasYY7vA5Rkv7bYvKFXZjmWxFjYHzvTAnGTtCHSRaFERFJg7SFzCv9557sYd6bB8ybieJ8uTYv",
  "key32": "49gs25zk3QhDse2hWhe8bWv93uJsNBuxvAnqPzCGGdJh5QGut345B9b8pHUX85gv8xaKn2PeXAeaeetacbc4WY9x",
  "key33": "T5XXMBYYjX4cfdTdjft7G9qut4SqtaUraVtztXgrJPVL8Vcei4JHQLXPNPNgfoRKeoR2Pt73UevUhC5TsCscKC7",
  "key34": "VaLF5m2qwWoekCXEzBQrpBeEuM11ebh3r234NA8ji9dr2XE2sPFEVyBwm1w7bdHsqWzQQTWXXxvCxVCU6E9m46i",
  "key35": "3X84kN7YMcKvXenQZyEp6sSYttkM69eXAbCNSJydL8XkdUVz4UaZhPQGiEhRS9VMnQHy58ZPU79NyNkyWLLGPpiu",
  "key36": "4KVo9xB5qjmEY3XkCJGEmejwqHig2GV8fgJEZdVGC62AsZ2BYrhHN2XZeztzsu1kT4BkMRdGo7nQutKUgMhUhnKh",
  "key37": "5D8ZKfhpFs6iHbHp4FvyBfRSKyBYjgukqyP3n1iUgm3G8NrAobiWbrh4arYLeQM8vjvV4idgqEQgXwJganEDvaNZ",
  "key38": "6CYbZpzDLzUq39h8iA7u2JiwBgTqHd6YdFb7UN1hTnfErhozB6bqwzxG4pZyYbwGdRP83NX5xGxscZYc2MYx6B5"
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
