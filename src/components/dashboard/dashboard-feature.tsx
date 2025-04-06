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
    "2sUqMJ6e5w2MZZpUWMxaeZbZqaKwVktdQfC3LVKMHVE4CMX7ZhyDwmNQ11Sdn9n1tmFsp7DC8mLXut5bTS6rfGJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S4WqDG8FpUR6cnnuSydRjukyhKi3e4aJorWsu7QzF8yjthc37ad9MumXGGU8bgeJ2et7aSGW8KCjZpoNX3ThddP",
  "key1": "25MV5ZTwYaqzW5P3MLMyBD2yLTwFpWh55dzk7tGhWcUd6xo6ZSdYcLhWJLhKXLesuKVbwFFHhKsoYM7HyYneetmy",
  "key2": "3S75hiK5eJi78zUjQhbLBhPLqU6jVvjpYEp7hag2YxqaVZpNi8KX9QkDi4u2CXvej5fa3UdESi78cPQeZCoBfcjT",
  "key3": "SY7VXzAFYViBez3nqL4pcB6ZfGBSzWbbivYWwEj5NMwEjEa7UBDGivSmKpv9nU66FPFcjzJfkP3GBWsXtekYVKY",
  "key4": "2KZcqA9VNf62C3AReBReuErkWNNDrnv2fMQ1n4nRkPw5vZMBgBMcgpf7mLVqqMFR4FTm2zmLSgwkiSJZo9pPZs8z",
  "key5": "61hisriDL9Y8GMhq6j3CxC2kZcDWbZC9SuoSprFQrZUqc8232pzVUZqChR9RGhpcUEhco5BbqmuqBXmpQHgFuzG5",
  "key6": "2A8HnSM8ERoNefiziDf5NEjrukyuvHraovPr67DhV8PYReptgoJVMNhRKJdSJw8M772NSoNzrvPczGAWS1D6cQVv",
  "key7": "5vHkAtMAyg8wwi6p3q8UHXKvo1pZBczLnHCk6UdFxFuXf7emKZqhWxZRNYZotAqG7U7PXVKahvuXvZVtKvzHZpsZ",
  "key8": "4kjyUCiYMmJXASfWEkVaWVK2trzAhZxhsaKL2j9ouJkbcGboKs5kf3VauVMoVHGEQXg79NaQFCjuvDLbiDteCStW",
  "key9": "2cdnfMtQdRFUhqtPSMknGyttN3N3aVYeLDAkgU2JRVQ63mxJ4GHXNoq1q9jV6c9fuLTdYdiPu7xk4i3aGL65UU7",
  "key10": "hLRrqEY6tDXwpJztTBzjkR3mt7ueBtCVrPkkvoc9VsrvsiEPRxxzUb7MAZYY93sofzHKRrimBjtbU9N9vBC1p2s",
  "key11": "31V4pdjRL5v8g3NCAciL3KDgGZ277wHMPhDCMnrappD891BsW7LKZnsaiRnXoZABASKaPzPEomzHiHNSaEpGF5nG",
  "key12": "84vSXjB8RiThRu43zhVHmhqGvoroHkMJBunNJ56qaQ3D1gM53ALU8sqqvXsedzCM4GhPU9cUek2FE1u9DeobtSz",
  "key13": "3ZkwJey7JQ2qsPEtQbDgpVRpzS84h81HML4NTjkR7zeEHYt2NZ1u4mAfSC53SgLeq7E6CDpoz8WYAU5CdMkPcfph",
  "key14": "5MB8cj3PaJv1ferUmA4Yo4UX6KdkxrPoRVshVYaUsda51r7n4esmDCDNDARidtnMyEvNtupzb1AQNfsxMpiMFaWe",
  "key15": "A2JHC7sdC7X8tv3oWRNSU1YuLvCRCCNvaAWNKs1Hvcn5ZuuUjqXexYQXtW4SHU1QoYt4DFmJoNi44VHQFAiJWsj",
  "key16": "dhKXuvUq6LMo3vwqcCitL1FMqxXbhzi5iNE2irF628twtGbEduFUAnu76pGqJ5oMeSm2Lu7TH2tqLzPBXhPK3z8",
  "key17": "4T4t5ZfDqHad8QhHwXZK58UuYndKVhRCDAn5F1jDD2pucjXStaudUHyCjgsaMbYKNZqKKteRvUhLs6RzFW2k2oCc",
  "key18": "3ZtpXu74xyfoMRee7hx8uewe4UVETeLqhgu7z5XVcpTYSq5rcUHC26e6s7iPMmv4bknrrjnWp9HuqL1FNqYwFVvM",
  "key19": "sACW7GPRaQcQuoSxLKUNa2ErBWRnepVvXyKCpEXn1J4CJZN9Tx8Zv4oUeHGaHpNYbUXK84H6a8XjzT7BQK6LQxZ",
  "key20": "HZxHv4tiVeesR1fUgo6XKf9LHZy3QiAuaTqmMPE9HH23jfK3wQUMhiBjPcscYuPBTAnPSMYTa565VJu1pDSt228",
  "key21": "3mUrAjEinJHVqJ4wrbYY9qPtLg6e3zYEukpzZaUFrmtSDJ6kqCxPcrJu5YFTPkX653rWPvT7uTq5m7McsgkyD77",
  "key22": "321bfxySuWrWCVLjFf5fM7yqdH9UoAP45Wtx6QmANJVXFTfkA3yEm3oKVGuMKcRudmUnXqu6v2PMe2FSxUrSkQa1",
  "key23": "5kseNhuW2BSYT67zB3Wd2wo1HsfvAdE7mPEtkr4Rgu36EQMPfvRfJhbKQcpZ489ygfPYUkGvjfber9v8sSdWiwvy",
  "key24": "3eASFow7gtiVDaqcYV1zAonw45e9rmHrvvSpfLkfSV3qxp6EHef7b4XnQiR1wW7WhWreZN9aKAb3p3KeC4VMxUxQ",
  "key25": "3pim3bUDB7TbKgqNSAFq5zFAhBKCUMs4rDF3mYa5fe9VhqqaRU1786zwubuPcWYQvCMr2cBJcv7zRTS2i2yM7cKk",
  "key26": "4p9j1m257QEVrvDoSe4hf2UtTEyNKexdJL1x7yg8k3nGZ1SiU4C3U4Zk5aVmZPpH9gqwthKX5n6RMhTM42y333kq",
  "key27": "2diD3aG6NTfJZH93UuSypxUcdp2k5Rhi2jApPybZh828QeQyaaGuye5pfEh5GJXgLVTQmSRWix1Y2QS2vLkbHySL",
  "key28": "2mNi7S7PAk2GWqLnFnbmtaoX2LDYYWvG5QkBsMgdaHACET98V1Hr2skSBEAWcNhctBH4YhWLQWUUy5EgBcaXgKad",
  "key29": "2XZ4aGXGyHZo9HH5uRnbDBdHvV5aHgVfhFCYQ9HnQw8MiLQc6VXdexQyBq1S5BbQ4oNZVvstyzgP2LfiNUK84zv3",
  "key30": "2Di5UGHwbaYCtGUyjPesdGqM3FNhJ9y7D3xbpu7QPi6r7Qb6iyVA4zjK2gNWz8eCCKZR6gi4GSgHWGLfzbCULC1Z",
  "key31": "253TN1E8LAri5yFW2m3We1wAu5XMfEJvwkQdxd6s9isRr8G6WtUCGodAyjcSfn91Zb2Z2FemWSxZ8aVqFEJnxtM1",
  "key32": "4YUNhq4CA3CxvBzn8dk4cJF1CQj8L61BjfvbbRTVyGqetzHFNqsTTVKJFqNjtyYWgQUPA2GW4u82snEA5HTYYPUm",
  "key33": "3fJEjKTrfjqPBoCGcPUak3iMSitpNxzWokdy7iKheTapKnphh779JdToq1qYxR5du5mt81Z6Lya9Ac6YD9sfkjGN",
  "key34": "2NZsyv1LdtTSffYNCxGhGNuas7fb9ytaFPtsV7jzovBHAbJ5XaJUssk2iALcAP9jsMk1iP7KM84XAvtGPf8xKw1S",
  "key35": "4e25MsYTnDLFVVV6rzeY4fZ4TWCoq7vprxszwgdfHwNyMRGNX3AX3c1BNRcBUjxoUkduWAHqs6HM6eQhPDNcQjMG",
  "key36": "3V8iLkPT9r7aapmYU2Quc8YV2TRp7MEvC9TNcGrkSysdpztqhrASW9up1D9pRF21v3sXMifwShgt5pgw57EhR6Xv",
  "key37": "4G8AbASEN3dKq2UCN3FZK6PePS7fUdYjUYriRgkMxaNs5AQXVysEi9fsYYJLCwFBBydFmmqAyazD6oXLg94UQ8Le",
  "key38": "4YMuPfwNLjN7zDnCwnrEs29RTn3uJTqyPauC5JWcCRikAvtEg1d17iML8ybjT8B3cxXCCy8CLUoVTfzLxq1WwRJ",
  "key39": "5fgKfvm9xzakvwAnZ5q8QsCU1gSSiSrb5PzbBddJ86KBhmvCBsgZapc4VMmaEBBxdqd6NWTviUtn3x7SKbwZYedS",
  "key40": "5nqCwKU2SDbN2j36qzD5MGoN2nMoj3ZLkz9S6z9vFYYmfknhHnT6gV2egFmCJVJgHECs4VD1AvcT2MfRBhUWPXLc",
  "key41": "3BpaKRRNYuuGFGr2F5dr16NSKJg3BKkCE99tqygrfAENUT6XCf2VvoTwkTEtCFkT5P9atfgSkmvVyq2AkWNmW5aY",
  "key42": "BF6Tz6WQyEhNTiDxpiCT48y2UEd3p5DB6DX1RRbJt1U674PHbtV9wAwKuypd9smKarEshzgPy3XiPVCmqu7sgke"
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
