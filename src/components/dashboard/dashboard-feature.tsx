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
    "JkrSpwfD6PreMmyuq42nS2rUYz9pNYWWaqdREREupfJXZxzuVKboPuHW7yjjPQPaM4JdbrwfByXQQpRbyHqyESS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56mP8MCSeN5jBRXYr6gf6h7aecaVzVhG8MaxXA6wkjk5DKigfHzJbsCjc7EDNSsrdXcE7w8cnx6FDwJinXoZDuhq",
  "key1": "5GrPQo3HixFTaY2W3JxcPiTi45o2EewoNQ5txuJf2w5uqU5MGHLEwjUPo5ALGECYT1sXmK2yhMv32tBCASyVvnyh",
  "key2": "cBC9DaEx4J1DuHtmEgBjkGBAxYwy2oUxRno488ALhzGSaYSixnRw3R84Qb8YsorR9cNjt4oWAWV32hxvrMYq4Yy",
  "key3": "5qn2zt8UJ1VoDhPYdLM2ZgBxQP8AaS8RenN51Sso8DJmATn9g27ZGRmVydApsQSvpUYvq4NSBsTKvPecPjpkCKs9",
  "key4": "25dT9jhgVErqDx3pDpRf7PGyR629ErSYAwUHVKq9D21oCkPmQcFfEEBfL9ekKWyNvwwmACSb7pMWJtzL6rJsjzyT",
  "key5": "3SjQPizEEZBiYivm5ZnpKNpP1JyExtVxf7GiEQyCc3drxxCqKpUPNyLybbiNK3wA6w6SeEJjoTtJ52MRYqtka6bg",
  "key6": "2LDw8hYZTZna5KqsMgzfjypvm3m5M8D1ivwBNcc1ueehxZWKTkxxfQXXU6nKjMZsxhgg6tXRt6nzZJhNBvvB2PiQ",
  "key7": "5PdqMp115FecTY36H4qWA2dDUSx4JraypEXegRfkcAuBAdVjYDhyiTdgzXQcT7s4mYuTt5YPoDT1y3tQj7HGa9Di",
  "key8": "4ntAfNNj6YUnWBMQyZRh7RoGt5GuXrkD9LT6Ebz5SegP4RekYeHdYE19mAWa3baCLGb9fxofeSBJGq5CF4oLqeMy",
  "key9": "3NGKQ8z3X5RxaiBmeKhairnvRJ7bBubCVPnTL8bcyg4JTMQrPniztTj4WQBvsbQdULoQ9WSqtmBvm6wtpLTgECc7",
  "key10": "4nRfVcJFW1Vh3w5tiMh9TdRqdC5ZVXPidC3HFS72HPSbodATm731bPBKAQAcLHqHBgtCS3QpMjJ39igAvx3Kvxqt",
  "key11": "sYUeru9yDFdcnFB8ctwsXoCJH2Wn81tvMwDvHEheQmyFCoNi84eR1MWyv8LfoLTuzE1WPvMrS1hZt8LNxhuQSuf",
  "key12": "28NByApwxXyNDX9jgdLKVhkXt3JdSZgdBxSK83XAEzhTZksc1B7dfTmC2CsBDGLGwrNJQ1mydLtTq79YiaJcbKMJ",
  "key13": "8b78oQoKjJbHj4fQRSQNo4F7ZK8cQVGcux1E9pkKRaQ7whVkRBH2MvDWKBSCppHkpY3NXex8ig5Aq18oBoZ8rWh",
  "key14": "4BREfP3iN5qWeqiyjF1z4AnjzeidG79Hk8vDg54jJXh645ShXvQdvkGx5wBxBWk3KuCDBqwUVegpUZPXq57pUhg5",
  "key15": "57siEUX5kAXLS2v5JLwqd133ZhoBENzAw6yUHNQpXCn35LeGpyaAE1GkaHP8heqTkUVnre6r3aTm7kjTK1oeeyP7",
  "key16": "3gqdkSv7z9GyVs6aUJX6HvAsvyHcMVCRVHTBDD9NKCionuQsDccRyQvVQ15vXeX5eyZqAemyHCPHNouQqYYW93Q4",
  "key17": "5dwo1BUXAYJgAiUoetLXiTeVxK58gSY5SqAq5zMBd6icXfFoA1fd2AmCHAuLEG5Yv2So6ZMbLJHCu9oXGdrf7zT1",
  "key18": "3UE33722QVuqeRXKJLRbh8icgrRj4c6XMDBfCY5kgakW22s8eFoMQSL1JKSwYydCHhjG7jf1G82VfAAeanFGXVdo",
  "key19": "R8R7b4GkFoXrw8MkbxsTwGj4eFdScN9KL2Cx7qR8gtwWTtzRJ7jK2tVTMYkamVBysK6Yyki8sELXBqimJChc9b9",
  "key20": "5iCZZdTdrbvfhojWuT12SyLayPzNySmnyJj9qJvX8DqEgjRajGqNt7gAvvCyLp9WQ33yziw5nkSoHctzpAih3CQ2",
  "key21": "5GYtchs3NPGTazxb5CwTnLDKWpczX5tZLZJbL8M9199v4FRUtUWTYpCPcWQUkoHMeGmZPeirgfRRCJ6VXAFPPBJx",
  "key22": "5bhkQv7eVfAzCkVoXEQKMHe7VLrUa8bxhriGACfW2sNd4rL6h5chZ66hhLTq3Z99G8xmSdJRGKZLG1wiWWFQLMC7",
  "key23": "4pVo53Bk8f96jAcsGQQj9h56baxTAyTXtT58fj2rf5r6L4jeyi7iAgjyH8F7NesP9jEijXtZp68wXGYh6yE8jxLW",
  "key24": "2h8DuJzD3t9aHCU6NvKMPJuYnmWsifAwemXwYH23M2v3bs299FWLPajmSWPRFNk55CeTjeLA6VTuzbWege9RjLmR",
  "key25": "2FY8T7QZoKGzcHRd1hJVs1NrzJVFCH7rXvDwqYHNXwyKH3mJfXYHkT8e5kp4eYwd8iaVBp1CxpanHkvGgxBYoQGF",
  "key26": "4bTWXrUmxE3PZRgB8ULjmxnBiBPjUnwZnWEmUT6WaT7RpqFQj885rWiTbsJgPU6PBcZcYi3rLE7oivScPsuimkNC",
  "key27": "37P7xhrAjBnZXz2a7tty6ciPMtrBQAQ7XjjP5gM1ECrs83xo9vGh9WbM3DoQE39bVipGP7gRDsvAZ9QHjJHczQbu",
  "key28": "Uh5Cf6xuy5kBRqJvVYkVLJTepCph2Ap5hmKyZChYKbecBmGXkgKJuaNPRVZxUUHdhQNaHamPcXzhDQvGWwLTp7T",
  "key29": "3yfnumsMJiiuJnVrkLJw25oDbBBE7ttso4sfnUq1DqjL9pFsj1pv4jD9EBE6oF3KH3q4KfhmtGVPjVc3HSjTJxjp",
  "key30": "33CvyNJDKZDf8qWVYWTZbcsaVC4gEZXeqAVi9x39yYFvrv9wDv1w8pNvPEqqg8H9kh4KV6s46EVS11GxPyte3mKp",
  "key31": "56y9HWKimToLRzhREV1aU3aVuYiPqGF6kaTYGcZ77oYNkoRLHpNUPtmQwReZobyTj5fPvCw9cE8BRoo6sjF6NWBX",
  "key32": "pKhMHwmtUw1kWSdRHztdhEbCx71wg1Qc1SAhWSbG3rvstjrK3coR2SMtd1UjxYdV4sgVTV1jmzwMXdu2QBR7P7K",
  "key33": "sR1LjDgyzGUQrtTnpMVN66BiJVaCNAaQZ7GGWWmPmFiV7r3C6W6HpVadCieLrMBNvmDw8aYhhABFKjAP21ow2gk",
  "key34": "61DCp75BLqjQk5H2EqzJYcMkAZ4Ld4CURyxsFJM5o5dHryvSqZ65JmyZNB7KsrXHu3ftDDXw8pZnjjMaywgKbn5D",
  "key35": "4hZEbXz7p3ps2qJeYMEDzMMJcZxMUh6iXp19hy2mJABnDRKMRddc3PvSxwYKTerUAVCw29v2qRdzhCGRGt9Ztev1",
  "key36": "a9na6GLAxoNzdSubYxdZCmntLgkp81QB59zVvRFq2tKmjRHwTrWrm1NhrLeVuRfPk16UKvmkoKts17jCmtunLLj",
  "key37": "2vAso7rqDHsYNTcQj4rX5tA6PK3xbjHbShvu6td4iCRmv587NoJsi4V2DUsQJmSpirujkjnieqB7UzMLCiL4TmCn",
  "key38": "37CarrRXhgMpkNQxPU56Cp4FRrJmb1uXCVRaVi1xVqsHUrgkiMJTkNe7iFpjJ5h28nK3LqLsMfrUx8S72XEhbLcD",
  "key39": "AyX2QWZGMK2vcuim2sdzv961JSKjKPjemHbLsTjJmygiUxq3tWP3JnMkFCSexcMffvEcP44hJgBmwCcUFc45Esx",
  "key40": "4qrnXY2PNGaHEPRpsqTmTvC3rUPY6guQgCnecSYahSoySZeWEwxjeSPeBb2DpjyHrfNMdhDZoG5FC622Ynsj8ZqP",
  "key41": "2tfEm4gZ6EPXGNGqXp8j8fMYf7qaRuRVgCSwoTLGBHrKGTecifADzQrFDVaN9uJ7R2Wx6Bg8qsXqhRzMJUGSn17A",
  "key42": "5bnzMN7WD2m4vv3JzCq9niftsvtB3Up2AXtwdCTbru3fYoaCyopgTK5KXDwxn5Dz7GZzkStbvQsACBDxk82xpga5",
  "key43": "5UtjXwCE19Axtw9QidpkiYRntJZEJjsNnYpm8m9aZKkdwgeCp5F75JGgGTYrPZnBxv8PQ9RzKxKLojpjP9BRThM4",
  "key44": "4Pag3zeckcUfrttJkjjH7qrCVgjyY4bSdgyc2jRCW8eRDAwLVmRLXRTefw54maA5f8rjN8FKu4a5RrHhyJ448BG2",
  "key45": "QMmw7XkE2VnYsM9GzSUf9bR1i3hCwppnwoHFUi8nNSXXr4seCVRaNT4FrGcmKAa1TuZ7c3B9GZznvQGFNc6KzVX"
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
