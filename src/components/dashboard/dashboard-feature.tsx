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
    "4gbyD3bYdcrxhpQZJxzn3URqJuW1JzgAbp7mpCB8Hj9P95ZBhLEMDEgyz2LqvEr8y6y1TzGaNwKwB82nziQKofY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tb1ZM83dd5hduy7J7SDwuvAVw4AmQbQDaEvx7Yp4DgDv9vp2eiG58PeeWJ4CwQarVThX5BMybfWbF6m5ACzdfz4",
  "key1": "4G23yM8qUvHnQRrAyjy9eiiMVfLrKfdCJhggMgHNa8BkXhuzQanN7v8A7JkUAcJWQgs9zFS3nS87tqUXc1HKVFHs",
  "key2": "2n8RPspRFVpxGomxYgagFHeRAJv37rvULmTNpEwAqjV7YAKRuPSvf3CNFRXHG7ByqLkq1ThMpwZSZfUkK3tWrxcD",
  "key3": "5hZoi8m342sK3WA3uAzLjTLKMASrwNqcYqj5GCdCq8fE1Bmdgn4xhwoWXqYNWtig8FdeGiZmwNgsvri7pHxvmjLF",
  "key4": "4wn98YbVV3Suj7T5iHvuV3kX8VLLEGXFwLHUDnKNwpivuJBeydQXWtb1E9CAWRaVo5DMJHZCSRx1juCreX9FpVN1",
  "key5": "5snMxtnhRXCAY83bPxJuKCmJBBVmhwd6bKkLUrAGgsiKB8GiysFaJ1E6XgohqpLEFzB67Aw9Qj5KoDEPwp6G5kAm",
  "key6": "gAufRjmdnKcmAdF9jjxJmQSvwzj7Z7fiTpwQnGsAdKRXz6U2ANbzJ3orXG7EXWaGwJxKuaBYRxvu9ZXw2oP3CwW",
  "key7": "3AHxwwprAdDkoGmi2EAwwB5EpQkmAwGCMnZXHe6ftMt8QK6QKcZyKvqBZ3fmD9bWUa3FuJewhzGXw7dbnM32BNb3",
  "key8": "5tfNczHJEN1KKudcQEs4nMZYKYyAH3hqh2dqgdXWSAYTFcKaSqj9psRUwxVG29uS7GZCGp8EefkbRqL7YN4N7nkV",
  "key9": "iZxSd45zUxSY6dJXZEoRCNUbvrJx8C78kkY86sQ8MebrNGY7DEF1zcKD5xCCoC6rSvwpW9C3ZmFS6danamxgc7K",
  "key10": "W57KqHct2jU5jyLw3cwt61FhuLEXqBqc4ykMCApTuaGyMchydoQ5hqdwZNXWsS4kYBzq882Aky4YWQo3kNKGA9n",
  "key11": "zZQxbpxSw3GD4j1pZe93bePC5ygHvViHqbNc8Zg4oxxGUF1qCzDuKBMR4o1zEXTEyswyPdqw1ebU8BQdHmGnJK3",
  "key12": "4sPg5NXx1iknhyFfhzvmMimhEucvUfux2QRC8c3ivnkvb7K8K4tkj8QV6E6GbXw7XQVAdhPFyJ6bXKpug2fmTJ8x",
  "key13": "3RszzFDcdK1YEEHmBpGzSAzbomNN6f5C4obmKK6hJG2jTqVLxi58fCieaJ9Lvda8W1Qf78vQrnAeje6oPZt72XC5",
  "key14": "3xwWXVzME6THeuvncxRJANtYBi1kbFdcLLdc8ZUjA3L9GNZ9GvgE46FkfesfhA4M4VNanY7mKFPdt4u3vo4LX2Mw",
  "key15": "3wgGveyK1LuFhUJx6qtgp8kaHbWvmhjms91Pvp5rJF89jGt4B2EoJV9H6y8UfUXiiEsDFg8mzr3apKQkfCPkND6k",
  "key16": "Gqag3sun5RsDdWbne3csa6WXubTh6CXoiRbc7q8fQXSyshR5Rt1hvd9BXwmkuUCekrnBm6jKDgRVmfyAhYWbGY1",
  "key17": "2HxmYcPViZhYboZEf5vgYqA2iRPzpGDRAxJD1KJmBBD3fz8HYf5s6TSdxqD5QYVvUvsXcrJKfGDZ53b27NXfa7sA",
  "key18": "3wZjmiZuTFF53yWxhjfXNFhBPydUiHznWpEjvWfotoXgRqJH2YvyFLYTBYesqPr4hcXjvc1EHU1dCLGf3mnh59DT",
  "key19": "3WvtA2DgttMTw4epdQM6kWMr8GqiAx9W28Zs1CJ89nEhx8JcoD1ij6CTxUctsUDoRyFE1GwAFJ6FXUoboYb1VFZL",
  "key20": "41ZKx1NQZt1qoDsWEvMArJPJmEzH4JShodGfs7948yA7sL2kEkUBgQ2dL1bXyJRwnkRPJVMPrcA4gpfHm5Us4cVZ",
  "key21": "J9bfr4kjBKiTUGUQLrfAPPmvnDaKf8uz4nNGqg4991H2sDXyFDw6VXurR8sy9NW976UvV9x2Xa9zHwr6WagDEsv",
  "key22": "2vsngcX1hWWYFexpGgtgAnN8me2pJnQ77HFtpPSiXSyQGQCSHmpv6eQxuVoKLFoBTCEEE7Ff4WgRNRANgQ8sEa5d",
  "key23": "5qSrcp2gQjp834esTDLMXnpXPss8CtBsL6jQvPTY6Fuu6F6TqVCJSkqzskuMRhRPEkceD23uRZb7u4eoswfrvQQe",
  "key24": "rEqEdDCkgigTzzNT3KDFEZPkY78QYgzBVViYo7zGdERYCRkccFsiG6hcfq4VbPRLe9BZNov74gvkLZzmJQqhPTu",
  "key25": "2BGaujTXjqgztHXHmEsn3B82SN3Dsofm5br6uhHcFNzjbdHfzc3RCJfbh7TezxWLJF3XbkWa4a27S6nCByNzPsEp",
  "key26": "654wLE95Q4Pr5ggSE6r8aNk14Uo45w1QYMVT2SFuSPiEH6FTSRC9fZvzasqbgQWGGtoDPpmceVvTeCRb743PadLL",
  "key27": "66aC6JKfKMD9R51BecaqZ56gbs1gMRwGgk2cc4hM73EwXsVqxUPbHbGuY2Qq2DN5tyrbGvGvYhkByFsKSe1EXeVT",
  "key28": "3TMNjQbA2KrAhW29cCUJpN19AMwwKE7EUShw6ZXro8HfSMnCLPGs1HtiqnC1SMLRA6d2apyPKSmf3J8FSp8DhuA",
  "key29": "3GjpBPHxzoaiFVLoukuyZeQWLrwB9W7aUYBNZ8mN2PSKPmpvmQSHZME1pdUUoFebYLFvAxZJ2dt4553wUvBJ49JX",
  "key30": "4XUJzcUfR2j5VXt9ZmjXWHE5FpsCYsQBekbPVbWMTP3wjukc8SCj4v4BkZDbjQftyj9MmdUHY17TNaQ8igjrPcbq",
  "key31": "2Bo1MLe9JHazgwxir55deEEsKpWdTV6fEWrrR6xe5S1jTqoLFjDPL4k8tCSdBvhWsRc9ypMrQGtdZ3GgVJkK1yLf",
  "key32": "U7cYJNH4G9LjNVgWz5DdeFZvpNvqMXsAVJPzmyU9sRUUF8GyP8AEp7KABQAcXPskBKJPpSe47Y5zfs8gBEzRwPh",
  "key33": "2QFgedanCKaXFQU4ZhfXW9S8XBJsJ7nktQSxzq96QARvFtUSK8wu8oNqtWBUbdRm4AnDfyjy32fMXaAJrCZJYyf8",
  "key34": "5dKxVXg2bGeZTVBVUkmgNUiLLVxWJEsh2AMFqQJDBwfKZ9mQ9fgeNTBxnu4fqqitCw5AEy4AJsK7cZyUkkT41hEM",
  "key35": "4LV13Ydd7PQi8CBH4ANWm1vXHBxeKF2iMJH8mHEB13C2Q2DMFthkh85qNqsKJsEc9bzgiTwG6uuJ1eXUcRAgAY8o"
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
