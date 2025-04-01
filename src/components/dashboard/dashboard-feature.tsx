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
    "nUgHkMVE4Z6PVpAK9LnM73smszVcNCjYQpZyxG4dt94e9W8PV4kq2NtiEWWpd1FfpZkPhymFBmPidkLLmzaD1R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EfCUPfbgtZbpK1RfS1QNqELUwZgcVyvTzDBDZLFYpFgcVKwmbhVGSCBffu4ANUrwEhtwQFe3aNUM89JxTHdR3NM",
  "key1": "4g9yMwEtSv61GaTTcyQyrMTNcTUiHQYJfby8P8XimEJp58LqicXGfXeGUDEq9CXdUEFBMi8wfqhV8cnn3gFQYiYc",
  "key2": "3XP4Ty9KH351zKghZ7WRSnRdmRU7BcJdBYWkad1nFVjRkoHP9RrqAawEruMVtPvcoo22bPkHkkZ3aqWMi3tMSrSN",
  "key3": "4n3r7XuMeBoPC7PCaTWswtVY56SAr6LMyinB4fLzChXj4CpACrAP4eJbxhkSK7zzb2VdKLHVt64s7vAipqTknfyv",
  "key4": "5NtLgjS6brJcX6xNTWwyFenbRzCdns9kp1nq6ejuzmEF2rJQKZ5bR25jeaepp3wYabkFcPCVQq9PumoWTyTWCYm4",
  "key5": "3nGpQBv6fSNc71G7zG9d3zw26dXkHbQBEE8TkuuPYY1Z1FiMdRCRpo4AkgMFffc4bEthEPCpQ4rvt9Fn5zCJ4PFU",
  "key6": "3tn5TzF76ek5XDQCB6aUUo9xVzpUuraL8opb6jZBU9gtgVZ5KCk96dSjYrbK7EPFPG2rjksrQkzuXYzpP6723o8Y",
  "key7": "672rzE7V5yN99pzJvp6Rx82mYzM5TA1VUAN64ps42NXTc8NxAxeRbmFw3WwyenfVhgDjZFgKnNj7tjZ5BCsBv62h",
  "key8": "3fx2wrbjwq3pBTyrsv5RAqwuHky4LGtArADS2dJozk9VYWnBNC7CLKNSkRSb3NvbiTmmNCww2yGuxiagqKseJRcC",
  "key9": "42XEsf13Hu8k9uaEBJWzCjUxWEAeAZfX1WWyg45dDDSYVokr9TNL4VGJKHoUdpMV2qXrMeZ49QQqSDn8qqJNJhrB",
  "key10": "3UHQyeDa8kozxzaLDFDxqCn8XFviYfRWJpNJaU4GrQMHdLLiDcrbf3tqs4sSecVoQbDXMgeu6JrQMgXHGft8r4vr",
  "key11": "4jrxucev3KSYL9Lzkzjscyu75cCkXuANeGeBCDbBFCCHALQMPnujZTFP3783bz9aNkCdhWYx4YGZUXzpnitaYQwU",
  "key12": "5LSneaLAGsYbm7EcYZ5gzsMSz4ChihFgu3jP7DvDMKtmvozDtaBgZ6D6wf77kFr8npUeZjk9v4dzxNgNi6qntgB6",
  "key13": "3o5ShppV1sgWZC9A8zAataJn4ZVt2aFLG1tBqUNtMQHyt8mG1Xue3sjxuFBbwYP5ABuiQfzn26D2turU42scpzTs",
  "key14": "5i6qBW4Vwct3TxFENod2DPVhmgD6Lgf8U98JTRAVAms72Ny7jP9pjwSWcsoFs6isZ1dcMHdAqeEb27DGsXpxvKd9",
  "key15": "3WKvdamxj3xNZzjUU84dmkE11ViDFBYZyzkXXmwKPudN39HAak4jpfxn75QNp2pSbmCG2Muhrswet62g1jcyxiVr",
  "key16": "3f9okCVpBnJm2phB1Pch9VJfmg4pbrKMcBiRznsb1o792T4FeB74P3T98ydwg8H51g8N8NSRY2RSDFpUN4dLJ4Hr",
  "key17": "27W5YoaxfHwLoVkGVWXvReFnAhA5PkwGYYxB68tEDYEz7b4C4WGPsTVf8mQvP57k7T1R8qxLtyuBe325AkSXBLt4",
  "key18": "U65fVCCbVyxv7i3AnyvC9ZW3DmE7nEZoumFGrQguf4rAUTGQbdw45vyeeJP3yyYKjQeMGB9hWHP3pdcTHLrLNp1",
  "key19": "2f6JE84NUAsVdZuHAirbcsaFNi5WuPSscx5u7vDRFzBBBZnUe6ckMb9fjeuXDgiRqWUn4JzMW5qBcYob3XH4nguW",
  "key20": "33cMRPZ59y69bcGxx1u4kuk6Cuwfug1xo9dnF4znbnLU5iLFXJejdj82bkJKpE1nypKJZ2VvJ1ZN18A1j1UdVhW",
  "key21": "5KEr1mW9FqGNKRqoN4kNrTFMJntqv1okH4HERirHVJZDSQsWY8vWrWqzwB1WzuX4p2JabxE7KhqnyM1mMZZXLC5a",
  "key22": "8cb8TxhCuoeUdxs7etN2WFj13PMRwfkSBtWRx3sXRqwTPGNQxcGUQxPbffzQqtUoBeGB4MGWvKyHye3WDNtX8cr",
  "key23": "2QK4bY72neywyDf2QAer3rGbQsdqpzuev97cvAC4yW7Eg2W3VR4mwaMRWt3Rg4EUrV6g6fkNFNrr1F8NwRth4wTx",
  "key24": "3ytVfYYEVs9pxH1gSydXAeyj3rjnjbGwCbuUTGxMTd5cF9xtYvuWC58wyoWimfXVReb7s3oQFjX1hTCNZici4YG8",
  "key25": "5C8oAfexnVMzuG9CWByPrjM9fwFRKeeRbMJWXVy3TfHn9XwkYy4oknkhBLRYqZ1GUvykH5y5WWsY47an2Uc1Z6aC",
  "key26": "5paJ8d3rBva4HdCyQqDE9Yz63TvGewHzAZEzLtDvboJenGM9Sy7ZLZBGzUYFdt9ybnLqjDXQ7V6tPQATB1yda7AD",
  "key27": "t3Zk7pqBYDC7gMgx65dU1ZSBASL7gYNUikRyu5jxU3ZoQVM3rsQx65PHdjnSxM5No9ZoDVrbtFgAMKFuYGJ1c3L",
  "key28": "64Db5LLYSPzY2oht5DTJLcynq2KoxTZKKWfiFbXkB2M5emz8keVCsTy59XV3oAuxvSesSi1gB1yYWisp2pvFS3pk",
  "key29": "4ZEDREd1Bc12pqeGKHmUAnhhNDwQyjZu5VPUPtWuNadGHFnBaVaVcvS2aRTc3evVxTy5vcFDqKYNLZGDwtema5iu",
  "key30": "5ogNtUUBujv55MKHQBZiDNaWCth1uMCEQQwtjb35qJQUs2ZvcLQe9ECVia726WG19kf61bqhJAHHTqQHwUooxSsm",
  "key31": "27mieSFpza35Ddo5rP7U7m6aEhhainxcfEBTNkFxtgLT4S97YGqsxsFZnnEobtYYQgSCSRDWkNmqLVb5jYugaXC3",
  "key32": "3hX1FFmuP53wnVFz145xeeJ1WNbx1de3VxB9wQL27oPEFJGSE56D3YB9tZpeb1gkjvDPYw5g1ZAzdFTZvs7W7CTv",
  "key33": "4s9iAcaTbxmRt5Wx4GuaZPT4sCzaRZ6iGDshFqoiAQBdqYjuoK5qetApTgijXKqxGQVNAJQWQcArt8HiV4mTkC4j",
  "key34": "3a5xnAYkS2TcT1S18WJfQdBKRWkeGaF9LvNnr56qEGFAxMCcsHW3Ew8fJKrwTFT2fmHYbcc6599SsBEjXmTCrK36",
  "key35": "2aBfgYrqE2eRdMsRTj1aSy7d3cUrDo1fZvmuPPp2TRtYEkox1oiY9bbWT9qaJBB1UiH6FgFTvmE91T2ZRHrovNwi",
  "key36": "4udRfif9Rd2WdtcjnNCDVFS4ZsJ1VLg7jmAqRsETs9VTgj8pEhUfRPeDsRBb9m4xu8ZJEyTUPBBYLs2D6yjaqT2D",
  "key37": "2ie6nuaPa7YSLWHKFHQKCoWfREQ5MihpDK7RSQkKXioDQoZB8WyMegPBz9QGqs793FdP4G7HAJibNzpZdopmksJY",
  "key38": "4iZndHbw3K3K78JFSMqhWr9z4Mf7uCfxhmMPCWmdTQhjyd5nsbiknXXxz9fNk3dyWqaCuyYZHZ9sEnkg1zdV7eKT",
  "key39": "5JB3woMGRgqGYJ1Qs17M3mqgH757fqvJxnm8XNesZUxxoZ9QEGKCXV7ou6UD1pd7FkwHRtKFQM22RA78F73dq8Uo",
  "key40": "2NPrhNwQp6uqqxme3hHU1SyvzEqCuuG9smdrthbVbE97ngL1KpdT4Et7e8i1iyqzMWAahuGhvSr8W8Nygr2yBVPu",
  "key41": "2ep3dStFDaFhPJZxnBK8ANRf65H62Qgx1hTdpMyCZseQ1na4ifx43TX2kMrnZkmiQVYrwJTsr7PRq3BrsZZKKgSv",
  "key42": "5cy2RV12JaJp9gt91Wv4aeC9GR66J6RbXtKcWKiUFF8TREdS6hdXQmdG9eqSwky2TM9MRmLR6xywCWma8uDNWUBb",
  "key43": "pjQKcR9qfEMh34bjaiVzNKdtenLMM5ZynqRT8nJv4TUsDLC8J2TFtck7Bza5qwcT8Hd8wA9ZVZ6enwcUwnM6ykV",
  "key44": "2jWMqxa9jTDWpsmFaYcA7PSTx2U5sCK4s4sQMhJ6RfP2sS8aTKpbVYfq2deQfLcbPx1jRKWQPQrEnunk6xbYsg95",
  "key45": "2vAGEv3ZMJk7mLz6bVCbqhzV96tajrJzSYQbxLgMEZM4Q4TYEcsqUnSaMU5b9oRjoNij9GG15D7Y3msZMAzXWTNn",
  "key46": "3ybgjH1zMQ9HGHVymHwkALMCiKsga7SL7976UNFwWrWdB59PL1CpquZMJH8KaofppVJ9jFg65bZge9JunxtShHAm",
  "key47": "5pMt1FMVYcW146EScDQy9QrT1MvAztHwWmcLgMoXjbMZJPdRBwL1bsNszMEWzq4wVrFsxScKHzQkm4FXCL75bKZC"
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
