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
    "3oFDRREP1UiiGkUPbjZzfQdcrEbrzK5hiFTmQiYEmTYGEcGHb67wUbdDdznSQ9sycwdymkK23DtocA6NW5gTPszF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KcKdAZP72Dcc9nVWLc69bndJNwiXhNpe2G2KYizHaZHR3kDAgUVc8oFF7CCquPtpWqSDASKNk8YNvfsdpUrdj1o",
  "key1": "3whTUcQGxKmjhL9RwGev87UqYTusSzYS9ddKADr8y8iyFQ9azt9fZayZuDGoSC3phYMTu6KbsMinMZDM3AGEgc16",
  "key2": "62sSPVyomzaQXF8GC9qRYHDgnhJyP5H5VoRkgDjt9x5Ay72BF9nYLnVjdMqfjyy1sPLvRPNQUefmmghmFfXYZBnE",
  "key3": "3A3irxwzvLPBUYHs4qNeEg3Fnc8fQ344izHWxUfCDABG8mb8u7dATKjY6Cyyq1vjCfwSkAn58dQnQjmV2257t99k",
  "key4": "2CdeCuPo72kRxGEtJQxvKWPrUZwc3popac6HXkiJ5MjBo73kBogYvYf6erHkDN3Y5dnDytHU9M58UAEvZnEuaU62",
  "key5": "455yzSVGbaDsR89Xczcti1ficyFqyXyiJY6eKGm8MM7XiMQvMBmvAefa1ojQ1QjVMSSLRy7oUQok6BtvtBvqBDZ6",
  "key6": "rrX6x6M6PFf9GYxrF45r3vSwkRVKzAt27JxCpvFHn7jzfgxUZLqZWLyu2kWXwRJeoSZXBJbZkmdu11NC3HQNGny",
  "key7": "2dXKvXFirvxbziRBBTWTuqYUh3Yik2CsBh6Kc1EZ5M4VGbLxb9ZdPS1cK1s7nNuP8BYYgDuFCdyNfdZtDxzZbnkN",
  "key8": "5cfjwigc46Pg91sZ9KAu7V1BzWydQsD7fpeEudu4HtzopAxrsnCHmATz4YnuiixkvTb7nVw4pAN7mKh2LuLCaxud",
  "key9": "3ckD8EMPwUUXpbCFuAcghcsY8Psahb1fVGheKai8qegX8AgUzD2mDWC8qKHEtmkCK3NEj1jqzCc7grmiimNg9L8z",
  "key10": "4V5SxCHsSqYftrBcmJt7RRYcpPQSWiTnwmvheFWjXLfpxHY4jTUb4AnPx5H3FSK9iVn3ex2yDBU4XSMZFv4onb6u",
  "key11": "TmRfDZK1KqfYgDyKWtXixumUCYUXpVfKX9paZutsQSZ3RL6u8vFmq6rFhSWRVANXp6KR8qPj57xh92BXJoCBG3C",
  "key12": "opWjJh5zJmnGPQANoUsk3sXe8bnpBckCX4qSPe4bbatAttbwZ4xKUzVpT6sSdFCCcFa4U2kJY7FJQ3XqTPXGAMs",
  "key13": "5YoymiznGgYyKTb2rrzfF5f7XnmzfZoXQaoYYwnxtMkk3BB3PbMg5aTbaw6tuhG8CndVokvpbeFKGx9SCehVcLYP",
  "key14": "2Rf5ELUNkaSR3eEe8TcQZkBKK5oCoFSeRsG3ciAfNyhu6Cc7UD3wraNdHBQD5p8QcvoxXCQBBgqZ1JUFpQc4qKwU",
  "key15": "2k4p82dp2VL16VpXJn7m5ZjddNq61ZkLXhpkwv9THHRpLxCRV6QxGp6R5uczuKa2hwUnAymLTnLFRQbu1MMdyLQp",
  "key16": "xnuqcuRBjYhfE9Z9H3pv4w1sMf7DLs1e7QG5ZEQT525nzmFLmevkxz7Zz5jsbEgYGMoxCEPhNZ5MFsu5tKt8njA",
  "key17": "4MsuoMtgbUkHJS8wToqLK8rvxxfkYCAPr429f5YYu31X7uciCgWJtR989iiTLceEQMXTVdwG6Muo2CFFwuDkecEo",
  "key18": "3V2PxUwDR86Kk2tVjR5n56Xmb9tgMhuCJchevcV5sUQ5FgTVjdnUiRRFFPfpNJN8SNZiaRLrQDkFyULkRggPwgiJ",
  "key19": "2eexyxN9QCw29hCzasRRatC7YNAiAQ1aWJjdCWg3VSxUUcR5Jp65mmW7HztMpUotNwG6Uyu1zB2MWtq6AMtrUMsZ",
  "key20": "2g5ArB24MRE9tCxDJaeu8NkvmKwPy9aMiyhiEKsJwu2qofsBrKT2g7GHaWkz2ivRKnv9yJNWGVhE5XyY9sLJjbVd",
  "key21": "4QTgLFc2FUA5wQ66w8Dxagtm72duNRQXcYpZpNuPBJWuHkV37Gz37dGuVbKshR9viPkyF6jGp7qocwf357qSvTv1",
  "key22": "3nBPFs83jfvaKDZpGRyDfnRNU1DWQQaBFGPc4XixXcVW6S7SGiWoPtQnkKbDs2D41hAksQcJhLrzkmzTkeCW2ymK",
  "key23": "5Uq1L2znSrxBm3QHKsGL7TgTGvUDm8qexsRdvM3V9ZH47VwjnFqhw6jizfp9ezwNmrukgsNr9F5oa4WHvFjuEKVG",
  "key24": "1q67tL5sUQYG5cx6exozLhyq9tedXYbq8VPo99RtwS9T4gwcuHS5Prb3aSPh3WZYFBCgdYiPJfTwfdP6jqtnGe9",
  "key25": "4JsWdEKuyny3SztJ6bGDL3kghAtjRoYnQgTUG4th1fVxfnZ5YAyf6atKkZ588Fubb6cFY83A3Xr8svJfiTHqymGw",
  "key26": "5LwHAtUjtstd3J8UW5qM4G293qkniJoSuiSHT7aswACGXAsk2DSzJFwDEBnpBvtuoDLdBYxdCT31jmgZgWaDBumK",
  "key27": "wUsVCVxLuSf1GWBFD1NxSLUbYtgCexg65DdRWJYVeE5R86uFLwJ2it3zHfPLnVakYmjRNNRMaBKZMhsxh1K1Zyr",
  "key28": "25unRNv9MQiBwWp48Hg8zxRaTmRQ8rydWJCxPJE1HgoaCjfY5atbTSk9BFcRHYJRYggdGWcMrzasUqr4CvB3Lfj8",
  "key29": "5ScY42BcrpqxzDKGTWZAtxC2Xr5yxn4BeEPAcYS5XhLxp5WUYpqNBnEaFwZSHgr4auoMMsNGotZdDdXPaMk2gEGf",
  "key30": "4ujzfAm4dCpNwfVsrTDEech2zeZfvzmvR9BfbVGpj55xWfSoHKJk62NnLGP7J3dqucyZzuhqoUF3yMT4B5n2AX61",
  "key31": "4jRWq2kUR41uxp5boVd7eXG63dJMXJafqtDmGZLwJxPkKniLXLGEWKMWa47CxvsWCmYns3gtS87DJcGEqFpcFPWy",
  "key32": "L8hCHMTW1duadcmmgwTjNkBRwJrNyG2VxpdJaegok4NeVuiRR8dpFWCSgX7Uw5kwTbsZ8oe3mKPqKT5Zq4BxQwR",
  "key33": "4BsGJDjs7gbnMBGwRzxueiUHPwMYjQXqYEBeoRBKUKB6P8qYfF44ddnzEjS6Tgj5hFgiNuiPiiCnALSm1jKY7Tcq",
  "key34": "3hYtXsuBYiwmAkaU3JGGqQ3NdyT6g4jKUvYzwvnh7SJM8aCyCoHeXLFiKuvBVELHf9ruyS6bWFGu4o5FA4LF1m5r",
  "key35": "bebCkm6kfGHxeobYjnvoAezP6LSgp3m6XMADn98XuueYjiJ9ZxYArVXUU1LCHPx3HRfjv6ttic7xWyPzjPsSxoZ",
  "key36": "XuQy6MENwSMhzR6XgRR7Q27284JEJb597yQybwKenSYYYKD9LgQWhEkUZS2ifr7FemRNMqzm4mZtufvqwnZeYHg",
  "key37": "P2uGrLk2vYnXVBiiRvQ6uNVjhp8qUFsbw9WV71ZwD8xPhpre3uf24QfTXg775vsppZJcBfhzkMrxUp4rDaZU4Nf",
  "key38": "59TRJsi8HJbApCaMcH11S1xGhj2jgG3S5ef3CoytP7xsR89Y42pmU6Z9gqTeqjbBEBafB22ntVQz1qbs8rpKoThU",
  "key39": "38i2wpZJxsqX7CPVgVyg3AzVV1meXUmjFakXj4by3H7n6FkuFxB3VGY5jrGHV4T5CT9ZpypkgYVUftuxSMmS9ruH",
  "key40": "53RXjCQJdhTHkrfsQV7P6SRhWQxhbkN4BjcHsb5wAY8VZkVPpriZYC9YYsuRwpMiEiDVXXiiAsuDTtvsGxRNJz3E",
  "key41": "47PhDPc5buWFbzrBAPAJPJFwbZFQ29moJdHBuNCPjtAVyyRbSnE287rwsUqbxib66vP8F3UXurtDJGbHDiBFAHj",
  "key42": "Dd1Z2kXuRSd4aDwBWKJyu3yho6tpR7pzSene7HW6c49XrYxvE9wjf7c8NQ9VjCaCnNP8ipv9YMXpumX6dqNpdDZ"
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
