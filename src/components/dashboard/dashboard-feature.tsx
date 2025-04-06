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
    "5zeE5PRAkp53QTgdEcWaFskL94zKksBiuemX7i5RoxE592eUf3rvBteQ5kS4Yn9VzuDD1726dD3WBRnqn8p8upiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkxasmGJ9Liy6CGxZX4kqzB6ujV27targzZktgcnULjhYy5izDBM4y8xJcDvmzb4pAg9MdhTiMJh1TCzcnRpMjd",
  "key1": "2urXDvExT1sMsLKoUwZe35dcvzMCn7vLgQP1DeP7Vx198AsMPNXQUdWSyUnoe7PKZj8fQeXkLfLnzZ82zSFuBnMo",
  "key2": "2gKs3Kbg9ucTCqqhwP3scQhcwGAHctQv9q2Xwnx195EyP1eRMigYvvBHdNX7r7Uo7yd5CQG86Piq9JpM3L1Qjub8",
  "key3": "GDU8YZwd4unWdnqm5f3NANBmX8RxDWEiCJhdLM6qfiqjZEw1z5vJz7REf5cHsxapKhpovbsePj3BRNtRLUg5i6u",
  "key4": "LBKy7LzuehRyaVkmqA5aaEbPnD65CzRHM6FzQg831RHrrWPFD97EhEAAUrjogfqBwAtYBZN8FtfSaJwrhF7CDjs",
  "key5": "HiLYpt3acFm8ZzAv2nsJepbXWiCFeQh7XWYZM4THmxQbNhXZV7fZMt7evRqHNmdjB4UNXTUK8755SDdUHqjP4fr",
  "key6": "xExwneZGj8QF449SGcPYvKj5eBsCJum1jHjMueJsgd6Vej8BPJ25ETKpWVJ1DZiPmsbgEQ6py5p4E1PZ4tdivQx",
  "key7": "37hTLMa2oyFELKYpRCzyFMyjTMYag2tRsQ486tt1v1t4D9QBQmbut2Ze5LJkfmByuLEiSYNJMppF6fHdxnP1kHgg",
  "key8": "3qCNfma8RbUgEX9xUKpiDiUmApSVTAA1h9PAvvVmaaVzVkwHWYUgWCJJ3sqvwdEfb6vDpJRtTtH8hap6g2b7Js2n",
  "key9": "32ZatQdbrz5XJXGzDnUzHSyd8RZxCbVk1NdmeVXW9o93Bwuz6pWFw185MeKT1eL7NoHVqtZxfpLktSTtVzuAp88H",
  "key10": "4LWjkUXvHE987HtJJX64wtpALU5hP2eZaX4jm4qss5qgrKhUSsefuyXB5kDJKHJoUxSSPqbAMY1Do4nFMBa9sXps",
  "key11": "4PrSwVuED3EvpVd1kMLJ9L8WuieF4LVLL6sj9PY5tqS9sSTVAJK7wLKkwHnRHYeYcEehN9JEGJMaPwHGCyyVpgZp",
  "key12": "2Uyq729ED5hSXDnptFajSnvW6GCjLqtSDgMY6fixfmHqV5z12vUdR1Z6Xug7ejyNTTKTQRzdx24PuBw3CZJMgyuD",
  "key13": "34tX6kNvFdDYALZnWEMbNGSAWL7V3KAAvW4wBTTNfpDa1aaZeUQ71p3sLoaKmb4DsUU6haxXFDhQZ5kwehrPVSJT",
  "key14": "2vmaJe6bDtMGd2Us7ixG5qr9SEhHvLFEPtvj3iE7UFyKBzsfckP8VABvz69AD6w2pk9giBjGhBo2XttDG6NyBMK9",
  "key15": "21bWQf6Gy3CNzMATUiUgui2x5kiV6crWvigz3C4dW9ucdwUH5Htqt2CFcYvEDK7RJZZBvZrV6sFeXkHfmfS592sp",
  "key16": "4zCCLXm8rHS2SF1aoTFF4ugpfzYkcP7gsb4qijoyTAQDP5u2W2jVaGdhwd6nyzx9zkvrfTmVdpzQLYMhj25NPiqc",
  "key17": "2zuQr5PJeVc8vEyfk932cu3QgqjbF6Zi19Qt3Cadg5KysA5LVNNi2Bm3zsxRtfKAfFW1h5hUeVMpetezxtiF6M1E",
  "key18": "3qKwm4AAVXKCnWELVxfkURNiQZvCpXHgqcNnbJjeiwFVojck23xe1jE3XZgg7TAphrPAs8HBTG2TdwRx5p5v77kE",
  "key19": "1NkinTUtznCZ8ePpeJrP4uxr6wXg3BdDeHLSLuSxEYVyG61ad1RFnihZv6uJYvPHtAzRD1ZwRMMgXD7FrTKpkqP",
  "key20": "21fhGgCsnjsUFh53JWiHNTQ4hSvKfs9iN2gi8wY9vSpCK4k7jLEpyfpU33HorbBa55EYbpAmQXGVq51CbARwe5LB",
  "key21": "qDFWrpXbrWm99Rmgn7sJ9LP4yVZJwifvueMkNmdTwZStbNy6n9HHm9ivh6buDKMxtwffyYZu4L5kUFMeEcVMW12",
  "key22": "3ou26S4nZuF59MMrSumvubRxsj3xgN33DYg6NUfYkywsx5X3u8tHWUJ9tortcLiqJq5hErL5A2tnZziF12G6E6W7",
  "key23": "2JxitoZ5mwVSobkuzgoPFWRggv3iULsPn71By64XKSiD27wu6zbyKohY8QCGVCvaNFZYKttE7YCCWCPdkFiK9zYw",
  "key24": "3xvioguhQLsNHNZNSEfyChLUwKR1yLBCUH8fuArFNpeuYa9xvAj2gqVQ5rGLS2wjSSJ8jgW9fPXts2qEfJTNoLzw",
  "key25": "2Q544V1VSsE5SyUoAANrpeZa7bYwnNRazQkZk1DkA7UsFsGjeJkpA5VzihZnTRsi4sHHrs3kNVd8sXqikCYbhZe9",
  "key26": "5drkWydQ3Qys1pVFmohwBUtNxDjB9BAkZjchX27HrR9zKfWEBVshwkjhUNZAmmMQbdQ41MDXADZTzm5uM4eF7tDc",
  "key27": "54JqBAP7CqsGCmHUckTsUDEDhhCz1BudRPawyXwTbmbDXwQZQ63bLnYAUCCQdSwVGsvczqZH4knvGPhtmddraPLh",
  "key28": "2RdCg9YtdDxpiYnJeq322k5NXoiXbdotqr6H6vdbFjvkQMuU9ipoVspu2XXBu4wpUZBqNPd4Hh4PnpfqqT4oWjLg",
  "key29": "nBwWLAkMRuLKcBLTHoCGCnkxXqXsuLCnyxHd445Bk4Zqb1wQyrjkbVYiHZUNvzZSvm75V2edxHEd1YL5vUipmpy",
  "key30": "3VnmVfM5Uqy3JXhKPeo8aidQWJi45pyCqD4TLMW6Wxu4pNUnJKgpEAgjDxRha4PhK9afnhUhnVu5jDKgCTe91N2u",
  "key31": "2hqXTgkNbePMj76M4S3GsiVGo1V5ufT3crGgTV6bWwQHcFNXmWD5pkJNYfu9jY8aSx6FXqTtJWxWHgLmAsNQEYUQ",
  "key32": "4Gnny91n8EsyhzZHgT944TEKU4gHnB8P7En15TVLNMBZx5sZGcLzm8jbnCJErnmXsE7aZNFpYxLR436ydPUp2Atp"
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
