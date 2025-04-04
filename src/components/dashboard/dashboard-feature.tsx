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
    "49xX6L1pFZwVdFkivPvnb4TkpWhy16czcZqutjku8xdJKCzEPT54QwY9QiwvcigabD98AMtqqC1WXtBeS8jooLoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m8txiZSnWq7D2fYvnAHpDDHZFgs2kXwY3YUTwVis49GR747Di5qWXaEo6pq2XggzavxWqLbGGUjpPZbFgA6WmkU",
  "key1": "3rXjB7nJjiE8QPCZYXduVNMKtcxKvxvTT3hXDZKf3eMWUzLJa85QRh6zPqrcLa6f9qSXqUTuqcghsro74WuNYnEy",
  "key2": "2r63pN7zkxnmTR7FUexpihSR6KAiosjZ9hBFKrnKCWRNVVEtgGeLFVr1bhcAtqFRV3Rs8ANJSexcbW1iUTXL839x",
  "key3": "4ijM2bZSUUcmp7GydDGTJTdMbUVou9jQBbFNmD4JZRzoHnagwJLLVaJTRn8Aiq1QeERKAVrARRP7zPF9YBNFaJPD",
  "key4": "5CK7hTNMuXmj83Hm9Z6cCoXvz56s86qfUZ7P8a73kgHfKzDuS8hfxX3HU46yYhjAFHsSREuQFyWxjAvt4V5UuHdP",
  "key5": "4dAS6XY2Zn7DcyB97qxUTtubv4UquhccWercw6UFpSRCQ2Y9YQ3B3t2EZvVLQBas4WK1qTnRxYYyux3E6oAyTJL",
  "key6": "2PPrJoPbjMWkN7UnXqh9DPYLDnomwTRSqfinXdti6MXUgf3zxgQt8o2ogmcuAnkcamHtNkq9vLGSgMtjDiuiRW1L",
  "key7": "96wkmhGofbaj923Uwz5uXMHctFn741tJaL58hrRAZpnyYVbGSjc7RfbN3jiBDhr5C7ey66iSEy4zxaeRR9ux8yA",
  "key8": "5dicS1JSUunH6iGXnHkhEkFnURo9yTWbAnZDPhaf3bT4DNhvoSUBpDqZAD5kzt27bADfHzcQ9XBTTbb8wbp3RrRe",
  "key9": "n8z7L1MvMrHMgX7PUwkbexQTZGZnLTrvo3ijFHsvBGfnoHuK6d9jfFvmH2RoddB1ESa5HL7z7oeFRZvWoCJ1TQX",
  "key10": "54TerPif4WSZHjEE25tJJMXX6vtQRJZ1LxcHB7A1zB9SPzJvohdcsdc759m8EZheVkuUE8gPwD8rfCxMRu7dDmcZ",
  "key11": "2y7uJW5WvJVyERatNZNG71XaP72JvCiwkpKJgKsD2e8ufk9MgwcXGoPrHPGCMGBYtUA8rr4taimnMEUYHgc4NGRV",
  "key12": "2k2pDCUmjuj1k1FU7Eb8EQsLp97ayaBS7S4S1nvkbKC3Ckp7RRjWZT5TYTcaR2Bw8Vv1tJedUZkso83qw4nvc4YP",
  "key13": "5rb3vFatZBfHEMnV7crQKQhw7tkXtzaFKUaMyZ7JdyMwS8GBwtFpZvNd1b1d19FRnEyy95VbRDVHtyTtPzmV75Py",
  "key14": "67JrDkWsjGz9TqgHTL3z5k9FvvrxUJNqdipD94eXtCuSioGZJ9hySJh6g3fAx7N7zHMHLr6iewJgT6MLqWPwaJxE",
  "key15": "QWMwCUry1bvyTxNW9miMxThJowPbbHed2yXKARRuwLkmyY7iyoC5bTqLbF98UwKyBzCECZ65Z3PdTDJijxmDstr",
  "key16": "3PUyZ8emH84fVcjKnnjEmA4qT8KkjVJL3S1VQtUw3F4Z9Zd5EMJASsz7DzJS87VPFepeSDBmmzAJcBZmrKPj7SMk",
  "key17": "5fqF2whR8Yh2bUc93hHHJSVcwXdSo4PRJpZRsoQHPuN2UYGWwXRRj89oJDXXQS4xc2bGiNesN4WqVAd7KRvSKCNX",
  "key18": "2K1pJhRvuwVTcxzcLn6eYGZYZZzHtciYsNiYqRotLNQeKc3vEy8icUPp9EHrfgPuHTfBQDPVjhr26KHi8iWz8Kxu",
  "key19": "3YsgD1gihgqBmudNEbCFA83hmrCrxFMPwrDwQZFSQ1R3Lc16QCR1HvD6gjPc4RD7Xt2KjqoVtcAikEnTSMXJk9jT",
  "key20": "2M5URcvhpqwJDZNRCvSZ9ecfNXgWpy2AWPv9Dj2MPv9Qz5vyKU2yspydGqojsx8VagbaCYgKYGPGp8Qi3mqzp5TK",
  "key21": "iry6BkyGMjHpurwZju4NjBxd5EWYDZY5pKiBbRNfETEMfATanbCbV7PNd4M4FUfDvCRMxmYAcKkaMKwTrEE7Erb",
  "key22": "2ypk8971tpLJPVQ8hNDQHAxzS79rzVo291YnpF45Hf8TNf6LCK8qa9XXSAnSrtoqvWoFdH6GMatvNUZpz2mqWF2P",
  "key23": "45RWRrF92Wf6zAC3kUm4s4CuDBsMCL84atRoygBRNREnsML69R172TGMhC8q6vsStQZkWaFEmsqeetyLRaHXyKk8",
  "key24": "MLzKdtLF2pWBQQ9cRDBkfWUMoVsDupVpDad7BYTkwB5zTUrXy5SuBaHmyXfmaGejk665vjchs9SXGCn3rBQ7ESu",
  "key25": "44uzMZ39HcqdjfTTPRYvB7Whq33W4QW97ZM3dvs9tYudaUYzGJPGENphxNV1ivZPxpJeHZSkx7usYms93JcAezVc",
  "key26": "9Ecy37UD8nhMpyd8QRUW3ouvEmQhYWoaECnFSzLkVBDtRFpzEQvCTtk6jJqgz4y5YLqP5TG8Zys49hAL2Bn6nQ5",
  "key27": "2aCtPWsQAi8xWJvLNCo6hR3RW5oKH7Fz6tiXz2qfgzFhTrThWwHnmumbnphnH1ByJPpWQqXYqy9qVwDp2VuaKkae",
  "key28": "ohuhAZkNPFKhdDud1pKhhAJgAesekEBHYTPuhqF7gnYJ9D1nAYGb2X18xs4b8JUjEN1tqg9ys9LDYKpdXf7ZYfB",
  "key29": "2zHABkF8hBYo1XZEQ46H9MZ7kbFegWzEjFMVGoA2DWGprXDcpDj1ULWYQfbS1Sa9qYxWfMRun38EAyzVP7Feo7c4",
  "key30": "4XfHUARPdXAG6YQEijK5kaFU2Aqq8fbkWAAgjzZysUPgwxkSFfbssd2ww88amfjEsc7XCZUiFLBdHP6Guozrng7U",
  "key31": "54Kh1ioXR91EMDNjh57ZrbsfmSBKa9jgZtDwRSYq5QfaAFKWoa8w5cHbpdjMe1o9UfPZMB7JE4yE56GVivH2BKpJ",
  "key32": "4eRVMxsT4WckMZqdcJX5etqEx1fQHm6kaCQn6Q1XDFxLmdCQqY5ggZ1UapEgF6ySvUMbqP858Umby7YvgYTh5Nqb",
  "key33": "38u2YrZZmVTXmePU2t1gdpyCKGkrTsHBw3brSkhNxUwm7usoeaB2otQu1JCXMDzJp8QW4vkF8uS13WZeucgUGKnd",
  "key34": "SaBapjW2Gre94YnQTFN6hCkagt5YxHAS4xKMG2BDaBsKJcT2bzF9XLgnKfTDK7JXf5bygTbcPFBkjpKfHmMQigv",
  "key35": "5GKKevbZuffSePkFxvyo4VmvGCTs9kQ62SnXWk3mZkKiE91N4sz5Da6s37ow1hv9GvZpvtEiQnzzqFJFwGATKF9T",
  "key36": "g12FrRbRQ6mpJT2NcyBvgpvHsVFS1rSGKma9gynHqrLH7ipzen61AQdNgH98CVZGFTJedSQ4QgZervA4oGucT14",
  "key37": "2x6AdwJxx8q42Dh5tEZMFDWLXz9VuGipi16iPLFqEv9cwfWyd1DcqXAZeFGZ5yd5ntbme2RXvXUirC7peswfnLTi"
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
