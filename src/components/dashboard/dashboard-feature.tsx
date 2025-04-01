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
    "5WTdjaWfPiunsoD5ZQZLsVDLDGR13k6j2Pk9Ndyze1eSaCSsSwgN6FcMsHo7rP7Z7NgzsFDrg8hKQBM2KEtxr9ih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o4J9A37nPheoNKzgNmM7hUSSDSydQJn5nnpd4EaTm6UiASDKQvzWwu1B6j2e7GhdHKijBQmx6VyRUC9m15Uhxm4",
  "key1": "2SRj76WQ4hpKQoFMBUKTphFsVSvA3Ko7Eb9jMFBHT5jAZzKrqVXykXYkjnuzDB89nHd1L7K3DaChFhzczVY1jxP7",
  "key2": "24vQkeDKCHFRxriM3qQ3CLHZok5wLnfkwBdZL2KynKPDMBEf6dx7zVvX2n4PsFqYm6ru1bQxBE87HFNt2vT1kfS3",
  "key3": "Uxw2jrYEXmPeJpKDjVs1dzZimvwb1q7WrAm5Mow6uA5pXgc34tJPuD5QAfync3hScnWT3gYoLBv8dQos54JTLKX",
  "key4": "5yCL7g22pHJMGJtShweozX2Ntkxnnpd5Krdg1f768uGc1VTXyfgfU6ts1c6LU4Siz8RaeaLmg4TMwD1YpQmUbAZm",
  "key5": "3PjLd5DU1RZnATpSHysuMNE3q2tvnq8XHH9stY55GptbxVUYf4sZbbiD9qA7VT7cEJUhyoayPsArZbw17FH9LZCT",
  "key6": "5qjxTxE9jwdz1wP7hy9fAuFmfJRsguVkLxA23naysuEG72fHdBnUkezWPFBoK4YyhaBGsgfdPWsBdHcmd315XpiH",
  "key7": "VnDfV36nx69nWGZCfkYA52rmTRTbZPm6yMkV9QUJxGgNrraPPYzPWYuFkk121dY1tDtEaZLs7CRHKYDTEWY5F85",
  "key8": "GU3dmQVKTxuvx5QMLAFSTzDURbWnaH9FWhsB2QYujqoZfDxSkPDr4W5ntgm8g3eGju8rAGHBZxYzo54N7GufXsx",
  "key9": "2QWb252JPocNrKWMPW9nQVeHkifk2c25ekMhmXPjAXJxZ9Vd3pwcDcEv5k185M25WSeT8gxDboc8rnmjzF3fdNNY",
  "key10": "2zNKEH6HuaeAy1fs9ZFS5Zz8cxQVBSgVP1P9wq4yCeVCzvCJzdVXstPZp5Ug3PtCAiFpb7ijWPwWggLftZsRz6ev",
  "key11": "5xWNnZus4LbfPXb7sDPN1PgRwG8zwbjhs1ZjGU3hoyumTumXSe12AgEmJiz63tEsKbu2XuycgenJRutmX4zFLHvf",
  "key12": "4ZroCXsd8NFoarpZv1CGDic5AZtDn7Myqm5BixQArkhJSM2au7DjKq9Nb33zsqn6Usvvmvy9gKghF3ggfJ1uMABz",
  "key13": "3TS25xWqN8HEHVSuHCc2ihYCqVbVfwDFuVoPNmLUC44ExS5n7kr7Y6jh2k55p9aBtasVhunuUnjwf4Qe6A6ABqSL",
  "key14": "5J8DXej4iVjAMAMdLtMgctKq2viQ3HafQiNx9v3TjX7gFasct4MM2hvqKnY1JXpSeKsHJP4z54L2fA3qA4F8XKN7",
  "key15": "2J8UiLXyVPB8v1khudyRSQf89AYLBa7W4a8bBQ8y91VosJ5bNx1pVh55MzZSLQSSaCKzMZxR3bS9AxoXGEcfqm7E",
  "key16": "ZJfrtV8u8RGpdjnpM421Fp23Jo9TjoMqdPKmejMn5HcFZsx2CgYgRbXpLs4gV5WJbDRtCwdrKq4YEgiMNqv1j6q",
  "key17": "PJGabqqvqUE91RWxwz58eWXFwuRdxcQbWvQKNLxZ7PMbYeHqjpWSHkwLE6jamZzZCmbZfsgyD55CdQZ6i95xrg4",
  "key18": "4otPMLT2gGoZ3x3bfG7RFL3TBk5bVWu1N8ayoA6BtMDi6KwLAmifWzKyAv1xrZYmUqtXW6h8Rjbm28QTxbNDRaTS",
  "key19": "2A1NpgBkonr94broqjAkFZ1wHxMsk1Y5vyyHNAuGhphxUW4NmvKMN8Nz4s5vrWPskjPva9Hh6K662Dcma16jPa6n",
  "key20": "4UyXFKHXu4DZFRNdCAH152ajAocAyJZPMzUx4dMCE3ycHM6SroMfMHJ76igztM2nnkcCRDqUYJsFx7LHRY7QUFni",
  "key21": "2ufueAobQfnpCH3sTcKKJ9QCCenciknMq1i2MUQjVcaPBJzVDi1HGZXYRpgGD9JSS5sK3V1qBLwUYxGhgxFaPPi7",
  "key22": "3NpHzbfpzhzTJYeCSJAcNCSVqWA167r4raQbFeatFRdCri1K8epfKYDYSHoqfyjz3vLVAzrjRxqqm4URKu8XZPCA",
  "key23": "3t2MPjvHQRUuxtrbHde4DrH4kL9quvfawoc2qJ1899hVR67ps7WAX9M6hecfTh22drh8rhMatdXrF1876p9fD2o7",
  "key24": "5YdbUHt6o3ZCACnQunrEopPq2bpbc4GoXCm2isMV5WyEzaJMnLv9WXLikeLDwps3W21yN7E9c96NfZ2hG1JTFwAo",
  "key25": "T7j9xVp9C9PG8tBdMxPt7dUHCf5rE2TR2up59o4WXXWB5GbBtTJXEJtiYf1zN5e4eUgJtnGjB7c5hJLB5GQEMCX",
  "key26": "5STjJUuBYviigs3KgjTude8sCBK7cfsYNv4LXcm8x6ed7eSoGuKMLW7afAQyHyyRho1jiC5jLNjDVCqMwLveFiMA",
  "key27": "9Jj1CoyLxZWFX3BHbtYsEYBqRMu1fquDmndFp2teAb7bQbwzcPuaQWm2RJj2mcf5xZBfDmuto8Lwy8q8gXwW8V3",
  "key28": "4F9QqazXweHJqfK1aptRBqR5X8AzUtyG1JexKG3dVWxJFch2YP4wLgBZqSWBY5iFx9x53Xq9u3kSH1A591PatxxR",
  "key29": "zUFYPsir7E2JMeHwMWMFSvJtnXa88jsTCQcSGWdazcWVGNE1zahs3XKGxx2qBxVWtHfeLDStXNVXJG4jnVnrVD2",
  "key30": "4nYFMqtAqdJkWCt5UwQmGyenthfaPhUbU5n64xEHRV78MNAeXy4vyyXNhyFi2DsRNSA47Wwr9vjMrxNh4UjXnRg1",
  "key31": "2vNeQzJxKxUVWc31558dppf2m7GNuee8MLAxihEg1CdFKaJZ6ye92yDpcKyaWtj2mrZMUhvLsM78rvsRJyTRVk4d",
  "key32": "jGM3ogqjdha8iSyGqmkvDHhAfXASxgRrg4JkChW2mWWPEy54EsZ7mk9QRPL9RbcHFcU7sF2UHYewuNoPyq6jdyt",
  "key33": "2Dx7mpyEUDZ2SCjWBkQ1AoSFsGaGGy8fRYDEcxqxcfjLinGvmWVJkrasCpbvraGRN4E4iewbZuxXcFNYdGuU6gDR",
  "key34": "2a9uTLHdrcUL5hLfM3j48RBvSyGSuEKCegC1QvYftQxoeFWB7RqDjtb5PsLGrzHRtg337eNYDTNe7mDWaMqcPG57",
  "key35": "3PNoTYE9x7fzt3RibgUmWgjczkWxork3GXrDKbyqJ2jo59RymXiRe65PqBk2Xh5KLGy4ZQpdRxJUZ1KKEyDb4MRA",
  "key36": "3x4kwbvVbzVzPNL7ZhpAH7YSQgQzPQh4FttCNVJLGpphmpwKzXa2FPBo8FFr4Evcte2mAEiBDckPXGcdWSQchWwu",
  "key37": "3oxz3wz5afkM3DL3fTwQvr1get6VqXYMsfrNZGLwhqpAvFqSNC3xysF7ZFnDhrfbqrpw4iBAMXvy2SQwKy31j7BV",
  "key38": "QJsrrgbmSL1fYXdf9AQoQ1R8Pwaja7JrKxboTAvRcFsrdL7V5smK1BAEwVnp3potMXaG3yTminqricRq9AxrcsF",
  "key39": "2UYLgWR4EbBRYYvG5PhNsaHeq1oSZZY86VZHq7LPV8GZCD925xnighqRjoKqE5o3aUGtnoQci1iPpAxGeadugNUs",
  "key40": "5nHsEpMbixf1FKciuDrNuP1qitTTnNLaKPfGxn3cuRN1u5wGF4ER8fgR29f5oCVzZm4ReiTWWzpBFBgY4NqztzMT",
  "key41": "hMCvitjKrN3Wq8Gs41gvw6u1b5fNHbRv9q86Akhge5fMPECZMjUA7Ls2k1dYkw75EiCVRSjLWMmF454Hn2GBcbz",
  "key42": "2grVTtZCdTjRRStczJ9YPUfds8xUPvVo5KR8BgFz6VyoGS1hJzrvt8KMZedY6KeNxY23225k24TbTbgyq4GMqrv7",
  "key43": "3qzNjVGmtHhNgikTgwREYpHekWH7Zc9GGcVw6QVgvURNqasmXGSU4oFQPmQWriBXCT7WpX98RELrBpgnCUH4H5tA",
  "key44": "5QQgaRptRuK3m5rxKQ7UZZeDfefGcaPmwySD4KxtLYfiPaBFT56gJbz1ZLoZo1C8ZNngW3T2PdhiGYMRPqoxC7TZ"
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
