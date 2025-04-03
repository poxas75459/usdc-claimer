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
    "4Y46XrcZQKgt9x28H6FEJuC56WTXxbXhVPqf3jMCfK2icgdiT8rZXbJ4M9XaGJNyHj6WWEkgU6hij48QUTSonugW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ZojjGbSWAis274uND5r4gn8YN9CGJTyjQim3ndMrFSbjX5vCFdbHNY12FrjDqpYYTbUn48caD73aDv4QZkXn6s",
  "key1": "SwpPUcvpZ17Ldv9utgZbcRkZBzF516LockzcoZ2DmTr1iVqYh7YHTogwHRYu9DuZJcYwRmQ2ugjdmAYAWSdk8Vg",
  "key2": "2ePRs68TeZxpwP6sqQt9FEv6vi3Mh4EC2CjiwMQv59caN18ZfsUhj8Aw4SRWeJZN3ceheFDxiGm6tgowbGnQm7j4",
  "key3": "3RoNGzcEEZYoqMyUEu5d38H8B4YKkjyAMHvDzUoCwmwxU32E9NuCPEKhusnJKCS4FfEaWnudjYRX8fFp5YoP2uxm",
  "key4": "23PQkCvJV6psvV8dGunS9EphenpfZJKkpnL9JvAwvJXj1GqoTJS7h3pGXH4TPecJK6i2HPKxE1aXR4xyC9p4TwZj",
  "key5": "v6QSFXe1mzjYqnPfaCkr3pyWAHQjCGeti72pcpAzefKnWyWTzicJ5sawWBPytquMpwRnEpB96w3HiCeigrX553p",
  "key6": "2MGuy5ajgziqYA9JvNzAMVhM5PcfSNowPTB7Z3ZrRGKNwcAtjtw4N9JEsaevaLDaZnPhFHeS4T4bBifgmxqmTQuY",
  "key7": "5MYYApatEzEfJxoaEE1jAuiYHMfSNst14fwQupBJyH18CuHBq79cGVvnKjcPUWhVhbmSBR547eGefhr1jbw4EGv8",
  "key8": "5tdySpdgeeFa6sLPedH5VhWcmMpJFtrwPU2dHpavLYYbEYxGnEyXFbtsbUAriKiNxrdRrSS92mLbYi4q1b3FuKbK",
  "key9": "fL85ukdMFtxK56ZPXdaWbhepLVgrMtCNupukNW2wxcti5YV8QbQKnbHM2ngKGBoLyxYieci8FFFoDqm8v8aupRW",
  "key10": "2tsFTurtReAfppj4rXM4K878mkagYbkq6ZGah7cv7q4wbJX13pJj2aMF4vYKxbQeLG244F1XxX8T67pkAj4rB94V",
  "key11": "31bazZWAdQ4xjBFVKVQoEWFeM2jSWYNXVZ3PJp2vgCKnvP6fS69g59x3k6WBGXc3wxmrGU8uafJZuz4RxpzqKnNQ",
  "key12": "5t2cVrNz14J2RzNpGYbzhfgWiuUt7cGJ5hiCJiJMMBin8Xy3AL8N2EFboVG51ostviC9sL4dr8jqPreZ6Vs6sANg",
  "key13": "4DHxLqUe3qS7EZW7VVYi5jwPH1WQpJdLW9aE4XD71vVMqVYkD4ok4NN3uF3Ptrm5qrN9zop1vM8C47f24R2HU2Lo",
  "key14": "4fwKK77dcVmMH9FTBqeZqeL8A6wfN6dbC62TvVfCDSJnYCN2esaGFK4L4v9sWDeWkNKj535qimRWgcNQCkayMwJ1",
  "key15": "SZXjcb8NMvJbDeg719fdHoHpbJm6W6umYsbNnhFRBX64g5f6rNBdLso5d9KHL4Qxd3ZvBfYYTJiquKCa4r2Gcyr",
  "key16": "4nqz8cabGWEnB9sRdeLhX73Nmk5JNsiJfexQEgXFj4GnLiCyJmxM61XQ8ZDvKWmH5VM9fsYgjgqwBUeo4rRCTZ3F",
  "key17": "25iPxLd6yrBH5jpdRQQjvjfZjKLR9QYnGjY6hNsfVLY9Yy2M4ojDxswLM1qYGCis4Gby8MkUgK9dpADTHAivDKTx",
  "key18": "3FrqZQ8fKXD7hqVcXNVqwzZZxH3YCGMoAcWaPdidNRxMGtFgxUHojQZTUo1bXxfsUZ1QujsMzpKoC24gKj5gRGw",
  "key19": "44BkuXgdFZawx581iZuaiC67hXaTHFzYUk69FG1C6UMbPrLQRCQbzCevt8G9jHyEdCCsydek2ab558HtFx7kmsfg",
  "key20": "3aZqxSJ6ShCVc44L6AxdvUXn2seXpsMPR51s9tzciBCJHRqTuEV9FJED2ybUYR69ZGV6w7ksuPVt3wBgGa46B3qD",
  "key21": "4DorD3xinPhmEofRGrucvXUKANjpw97jLuGkLHVAsFBJacQz9pdWgHspCgDBduJE2bk26Q3MdSk35v2FWwRnB5iG",
  "key22": "3TRN7yTENi6ncphuiz97E8wN6FPknvm4ZfXRvH4hpxrNSQ64UZqpBKhDPsErz7XVZN4ad3hCNzKgfmD8uPYbHq1a",
  "key23": "2C2qgAftkegyhRnAToF5LWJxsbxrPBpAUkriVMkQGMnW5aQgBJvGs12FuRpk5Rprt1837J5aeV399GXnDDUjZ1Ph",
  "key24": "5HT2KurWSYEoco2weS3YzQMmwcLUjyYdHHsd4s7L2eXfKo7Tmkm37GPxdBFoyL7Di2nD5hhFQQfMycaY7cVRJifr",
  "key25": "45fUdQ5Bis4oZVc2GqeZB63uz2haYxpUYCqrncn5ouSfyuhbYgZZHVTGKeLTATfKL8bYqrmG8ytft5kPSPECgdnP",
  "key26": "5w15qbveznsppPm6nJPA2bW3kgK7MMkb2RXqrc1h3PtvcXrZ1b14JSfNzaSUtQo9z61hLuteZNLndNMjeSwrJgDs",
  "key27": "hNHGbJpVcFLM355wMWBK1K12ejkyZaiWL4ms6PcgaPXHtTkxHYFSaMeq2FEFgzSmcyrKYg8Kct1UcGcZgqwM4TZ",
  "key28": "26HfS1u7wzKuzH4yGV9NnsieMpGLCwHa3EPxE9k9UdiZjuAn3vkPR6QvDZHH9dUqo3mm9YJKVZ8RsdauEtNXGLiG",
  "key29": "3SMVMRQSG6VxhZQFrrAa7iAics3rz19TZ5hr9pmVy45hYzcjFVXLhsd4AVefRtquhsbhrsd8wgtdhkaGCiUCauTK",
  "key30": "3wxo42SQnXiy9du76UrHeTGtDewqP3kPcndTkWNyjuDGChAuBzkHjPGKjjN2cXhJ6M1EBkBMj8RA28v19jQhTx9t",
  "key31": "41Ad6yEMwpgtiSSEszN5FYRw9RhHRj3KPo1dWsaaPHqfNLqMmSN2vhg5Dvk7Z6YS48LhcMYhL3G42D1eQjSM76w6",
  "key32": "gqDGzpdMEhAGVUKvpUpNCzoBNqzBe1Bzo52bg78sbHnvjcw1HaxR9e8qmDkdEeYp6GhMYEt1ZmpXfj7bJdMBQn2",
  "key33": "qr3JA22Psa7bKYgCYNk7X731ghnbZKEajbFAmQmfen3DSuBRa2cqqGZGm5za9wwo4dFfPVjp4s3Bm9m6K5NWLGz",
  "key34": "5y6cfnNwNhGBSeGFARjN2woLnS43VbSHD2TP4qCckb6u8kmeRmEoFtcEXLhnTyvesLLvx6zE7pApdGk8GNtYEgTk",
  "key35": "4buFdJL3jvX5PFmEZviqE8wLgtPx971ADFgnRSuFLEQPqDWJ6MaWrLPd9BiCbrZe9TRFkH42kuwNbUtfMihsUkAV",
  "key36": "2DGn6WpSAhwzHMJTP1iYbCafjM83yLmDi9ADRSbXkFs9ZyHNknntXjyFay3VgRFcrVfnCqbtmr3rVoBrJnB7fxgb",
  "key37": "2TFKMiPD3oyDv9awEoA1Z2tcM5st82PHqgQXKC5dagh8wjVLeYsNCd9CX6Vy7ga6Xet244qYBCF9JW921C8T8PGc",
  "key38": "38YVQhRBMHxb8MZXGSm8ZUD3PS9z8M38vC8zhMSEp2G7JrwMt4UrjMNG3Y5o5FJSbo3KfacMUeVUeCKTTS2odXCd",
  "key39": "3JPcW9bEavz2v7iKQtX9ssPWkQG1hUabPkWbaGY3S2EsxtV4teauftthMLbdaKLrTfpSu3e8SVJf46ZF7HRG12oT",
  "key40": "3w8r7pZdD27zaPnvseqY3i1NuevrzSBjd8pLN19bC37DwHxKLGHmQHQ3DiChcjypp3WaiAAKUSELA1kRdBjGkAw7",
  "key41": "Lp9kkXFTuRnJTdWdR6JQLV3aBd9UeecYuRqh9sTg4uGzED8qa6XRkFbpq6riKmZNL9ur9J8acak7nnispS6zXM8",
  "key42": "64xBBzDfVeXWUXC61eSzYMEiEr9WTu8XonaWCt4wTCHr9VYnrjcNAVB9DhgNNJisfDtuHMEfHSSRWrUjy5ysyyt5",
  "key43": "5c1ZDjSaYsw7bvKw6xaKe7mJ77VozYChyW8ssELPMK7yYkRuEsw3LT2zpLXPbhi4WvrGVCLVAT4R2U5CaJLh1X8P",
  "key44": "5oaK3XPc5nJg9t9oBncV7RLXazjicQvEo2xXMe2fsHCqYy9j3gEqC81iMfzGyP35afoAPX2NiTbLWVN827QhCRMw",
  "key45": "5doMUivfe5B97tCyeEJu1RdsN1unKFcLmjoJ2ru5Hyr57myyZsHkeEhfzBXw5Z3vXKx87MZDS9WkGtY2tc1uGwxG",
  "key46": "5hXb8YGgJSUXrCRJEvBrVGVb82AddtjzyxM5xLpgDMUFdgqhST7RKsvMuDQbCp5GUcUgjjYqozVwH1vvqpwnrFcS",
  "key47": "59jsSSfA3GRaPTXz7L7663ApoQBWJyqmtGr5Cn9jC6DisLXaKahCNBqATEvvBGBmVRUMGWYQZZyubMXj1j7h9AJY"
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
