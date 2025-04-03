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
    "4CsiMURMEqWLbRctrcXsMWyBi7pWyr4HX2XF6EdGT8JuuuW7BqeG45Vzr5aSiu1HURvgDmTYMuq5FmmNhDjAY7aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m5iCGEECvpYyP4PPZpDq8kZSXdyL6fEWrLXp5SKe69RD4ZaPoAHkN5XC2Ps3UdkihnSzhHimTxkfmnqJfyjzCbV",
  "key1": "4APANAHQrGM5ZMF62kNyriKAzkTrEdFmZg5yUuABPcyPVQZZRu1JMnxY3P4pdh2KP5xypp1dUuh8NdMrViHMNgh8",
  "key2": "2kqcUfV7manruPQRBXfmpcmE4dWnFhikY8PsDVcno47TpXNQWbtAuq29gTR9mfFNxzncHA49nY4GK33WyY2aDD2g",
  "key3": "4SESrrbhMKdkSsZxMQaBLyYoKiUb4wGkQ5WBnLaCe228rJZp9HY1akTrwL6UTLGwXezyYJUmZqipv83KZwp1kwFG",
  "key4": "5yyfcrLPLaz9do7dM6zaJEAKKF5Sf6ziSmtETYd1apxmjG6ojvddtrc72QSZjAFkp38ZMCZDnWc9vwP8cr6oG9r8",
  "key5": "3GWjhGQS1fdQwQwBhkgfsyryYjmyVs9Qwh7vuS4P9ZB9oJezW24sNNwZMVxg5i5xnAqoRXsgEZYzP8FyMEnEd61F",
  "key6": "57c8SUDmUwCyCuJGamHfQTbn1561eVEj1wc4KdWgFcEgKfAAvjehxhEYNiccFV8JnVXfRjAV1btcYb5LTa5mqZ2T",
  "key7": "4UCeP3TE1rRsveFz3c22mg8vJFjt8ikT1o9V1aGtukTP8VJTH61QA18tVVDZ3Ww9fqyqpE3vqVZ647VWoq6cerap",
  "key8": "2mooz7vfuaaQNeyr4vPddrPHT68o5jQWKWnkfK5n7AXZ1UBsmGuh1f8jDMxYXzoZk57jEdCzAcybQLgNLjQziEiM",
  "key9": "2acBHJRKEvTn6Qm7n9Ym1BcDGvB1ttWWaBQYi6RfaxaU4YbdgUwpEpzFZgeezHgG27Uq5hpJaVu2CVqt6EwncDFJ",
  "key10": "2pEkrQ2GDm8p42spPaoHH6iBmGY2nnnn5K9fcv9DTJPEkcUooVMbAnJDUHYD2d7TpdjoPyVNwqmx5kwHnfUdBfRx",
  "key11": "4nKqXubHR4DNTDsz3csdNFt1iX2XZSJFEfaKfnnWCWe4e2974eeTs9S4k2zteHAQcafPQMknmVBQ2Afaug3YHpLx",
  "key12": "5v8DAXsqaiqEj1SfkvNH7Bc5TXcyW2YdcmA8faPwJwiZhAeDnidBHb6Fu4BvsQQ73NUkY8RJXbD51zKi64E1fCTZ",
  "key13": "2Re5tt3UvZ7ajXxDBkZkaUue51ebG1HbaFJMTPfj28ZU8fXcBscJzHtKPUkpRCk6GkrNcYDPdFgr4cN9tq1AjReP",
  "key14": "7hjVfwmhseyBW46mSoTtXE3Q3c3wbMD3PsHS3q8uMhPnLrAchEQkDxS7Kz5iua2o34ZJKNgk7AmtEp4woYg5gvc",
  "key15": "AAGU1TCjULn1a82FGkwfZ65C77bVS2RPucKozXBtBsTRprzKJtsaB9sYt1FiVpi3RfXg5CjawEMA7wiybuz99BA",
  "key16": "4BCZQzcvFrFyxqdeV2kCk3hMtHSiLq84ev3zp74fd1hzPkkWACaNa8nLCEGu8ZkEgFDhNhfz5C2fEynSQYHuUT5x",
  "key17": "5YwGERvNaEXmmQQfHkZ1Kxr9npcjnkdZuXwz1Pj7DuU17UfY279uLZZsErkDxkhVftRRC3SFjd2TXR9QGE5NtzPA",
  "key18": "qq6WcfhGGwss9YJ7k7ui7cG6KQjhDoqA5H4FkJxDbWYHHrFgUiAkqLzkjZS27BsbWWuMuUeu5hKNuLBjbbw9RmT",
  "key19": "3YJQ5TLokQoDyGxR8GhaknjUrk4VvLXqrCWS4TfRTcBDxVAqnhLNXdiTFdneZD2WXM9fDhf994MXkRocnR9zQvkb",
  "key20": "2W2JxNtQgosGqrFs3LX8xFKpypNkyKjxWuA7serXp9yaW8NoHbAo5PWEbAawGHrGe37bD5Zqukq4AJsTHx9y2rDF",
  "key21": "4FHEYWko9xeDiD1ywD87Eh1HGZ36fvb8kMAFWY7YZG2HxDa1U5GVThF7CG5fRqNMEFH5oudj6M9GzL8ECDnPzTXR",
  "key22": "4sr9Ci9PQvShbHgdgVzF11fJuzJEaDeTfwYcokjVMNcvopKdvzYQFr2pyaNELtDteMEUmGFabD243AYMkHQayPTq",
  "key23": "2f8LXGqra9ibrZKW1tJankZUkGmeCJuwEGS2x21qN19qw2XCwjQxjCf9p56AoNFQT435PXnRnVVFCDBGQCp2AQKa",
  "key24": "5Mk4zjPZML7wtA4DCNbbstFjYUimCHsuqBi8UGXMvaRRfkXAGHapt5btC7KtYEhhVaT22Wkko5s42aifAXiJ5mSQ",
  "key25": "yBqZPwZFVeV2M3UeVfqza1pU6MBpCCCAYRt1uF268LHSz1SYwFCkWjD8XfcdsaSfrxVXKVTXFUKgKzNimEMAcu5",
  "key26": "3ASvKp1xa5a7SQsm7PwUfDBCtUFxpwF8XmNWk7VQy5HEvMveaWbcBK75rpiuGwd9EZCcrU55AYfkBsQLTvW2qvig",
  "key27": "2BRbuf2yczjfnxdDrjiwGnAPPSXMJ2Thv6qxVYd5DsXeuXFBwQTkMyPx892qkoDWucQiHcgbj8oNWcb5SzGTqVBV",
  "key28": "2wdPoYBkKzZXzgNdsNesmh9fteKZDk2zGTTSTGwMwRkBiWRhJWCyFbC75jNQghQztqnLAXz6yhXo1nxHqK3p64jm",
  "key29": "2FnqFJELBmJByyab4AEuDvWD5BPikbtenmUYDGbv1MYDjzr9JaULAEjiT7d4CxWb1ViFcvE9MGtChiE2sCrXBkFc",
  "key30": "52pDDHp8aCAC5RvAGMWQGFzAZ4ydamBQhEjx7WinHMPs5QVAz7X18FUWn6h5p63mzKja6DggQyjTFxbAo3Ck3iVX",
  "key31": "2j4VGbDQRpgj5ZrWje3pqt4rWhuVbf1fJmwWWNdARZbieQmJzQmxsgPpRP43t2S1NZNqDnz8DWDzznzPukxx53NB",
  "key32": "3PMF5dpEYLLphQvmqWNVBW1Xo9VCoTthvXfWRy5MEtKoVStezGcRQJs3kcKYvxUdvrwaCczMcTaS5gip96yxEqhg",
  "key33": "5kgZgCP5pvNqiX15msk2PZLTh5Xo5gVamKg4isjnutATVyrw3Tau3y2EyLoEYjNLJ4FzAwzYUFssk42pgxcfPn7A",
  "key34": "4HMDDZYy9nGd7PFycABpfq2XCi5fdRaEtWBymoa2ML3VfvjFnqeADino3vCSX5DDwBRW7gs8q3uFAh3uqcdjUSfi"
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
