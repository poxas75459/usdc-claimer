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
    "27uMP4uFyfGJ3NoGrKcjzb29aGDBnATnyMcZTn5HzKrjYV4cvRX85wVNUzZvFh9RUtuxCXzcxA211q2G9JenARrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKRtvgTY6t8o9462MDpcDAbAnwCojj6ipyNorFDyx8xLkWDYi24P1vnXryPDQJmDbQ3Jhw6xxWAg1zrci4mSx3G",
  "key1": "2SEjnC83oZHnLd3rEhji1iSQPdKynMtr43prRvkgsthmtb65sexvKJrAP9UBsnMrNPJQV1hfmQXhVXoFaEu4R85G",
  "key2": "3GiXu1M7EaZXFhVdCuk9TpTfWSSxv3oDE7uBkN6DinDipkYhFFTQyATkfS4AtqwJiir61K1gndaSg9e3weYuivU2",
  "key3": "4nNMEshC6tVwjtgizJSWUbGGxXQa12bmWkDwqx2yLSEvBYBQeXBHRzJ2tT2KkSzhzAh2KyoKopefUDvrLdjwohN2",
  "key4": "5DFyqz8AyXD2XQjBEYezxTFKBH4wzp9hjbteAeZjP6c72nQhVfDygVujUt5VhaeR9XEf7xMvtnYg1gvNVezqbU42",
  "key5": "2TSvh55kWVCmgH8vWU1N8a4t6PTwrS38iwGKkjCFau7g94sbJPgf8zJBEhgSdU8XyjCtYdpBujGUzAdbwoyFKZDD",
  "key6": "2qKfPYkTvDv18mAiJ5eMdCgjTvqQSbxRoYzR6H7DNeDrmBDGsAq8SPwkntQJ7Cx4GLRgVZZgncgkJ8kfu3SQcYkA",
  "key7": "3ZoMTHNGC12TWLyA1ai6EfT5M47jpdf6wECP8fiHn94MyT9CmYAn3Jy9NXB2cceA6s2oRykBncLvDzu8XP9ewzt5",
  "key8": "5pCSU5WA2GLUgwkj8238W7SxsPaRCUU2KuvavcRXhLAQpqb3xtS3AjhGQKYemwoYkpvCPcUYS9pqf9wxwd5s4RxS",
  "key9": "4UuWmpajvtfoLaiB9XHiN8Pxa7xf5fErBxhubMCuMWLACiRYbe14FSCSDvWHX5hh91SBqs8k6XCm5Dfa74navTV5",
  "key10": "2T2mGkgeJyuasRFa2bh5HzYKXtJyerBPrmuFukkpdAwuptUUKJkcUuMYwdLzv2mmy3TvY6ZERXVuj9MiZMkC5cS8",
  "key11": "64W7n8GN2fmWf7AQug3NYz8xoMdPSrPTwnXavEWp3yB541zhu5Gqx5YbQdP9qEBN1cNQMy5nxMfaoaMfhjrEZMjf",
  "key12": "5uTc9SJDY2u6ncAtDmYX6B54ewa6LXhtX1F5iipbgeSaHjsVy9iCLf8QY3QSBU77G3zjTTKHxubi7d2WGckSEr8N",
  "key13": "2BcZJNfr1snzSQ5e95wLkFLSddME1suaTbycagWLTRUuavE1YbhXhsz61hCmh2Guf4GiyCxJChacrpzDeweZJTEw",
  "key14": "fXnd2G8eTb4W9F5EiE1DxyL3jBPjL83Ccsxp6vY7twJBCd2Nr8mMGPQW5dZdwUkJnY9tia62fR7uSaRDF23k3F8",
  "key15": "vaYuzC2gRQZPMW3191jQpHBGD91CpjPM5RyKsZHwVPMuQMMoNjJBcK8s1MxERBvKEdhuwGJZmHf8EhdN1YvzM1w",
  "key16": "2QW7ztoKms7AeTakQMGwj9MtVBBm37RU5a9yUJP9hypzt1kfnoUPN2UvV5bsCHfk3FdGdvfUfCWWjQUi3M9UwHbR",
  "key17": "BsM1256fg4tzWNLWghg4kbjXZwNGyyh28RRPe9wvGT9WDBeNggUKeaTdrHLwE9NHENeJEXJQNFhnJQnbCj37t3u",
  "key18": "5uEwnKsiYGYWC6pXreqyEVdN9EvB7pe3K88eqeALtAdnQrnYvRybGKjxn9CLvGus7tZqpBARQwZJhaNKMm3Y4id8",
  "key19": "ihGyPM1VRJMZKajgvdncJd3Y3bhNRyxHxFYgTGrGcf33bhP8yxUT56U5fmpMj2uXeFu3BwemyLXPtQXtXrZKwaD",
  "key20": "3HoH5HC76rAnksbejcB4ykzDq29sMVrde9bnparWgrDndLqfvmPj66aRramwJndw4xMfxeBN4oBkzte6HVkg1A7A",
  "key21": "AakFR3HYpiw4n7jeuRZGVY8jD5z3mRXPopVaihMe9Bf2bHm7GJ7GYkJ7X7DW7HAX4XrqMM8baoPXQAgAnBeGivH",
  "key22": "5FkrjLHnC2AqyE5HtCtuqGZsXAfg9taS9Rp1JceFCnBkorUzrFB3WwbdPUnSwDNyvy6igSXHeZ4mfXX97H2N7FqB",
  "key23": "5hob9jvMRpFcfFhaSjz6dUcfruTvua4PwiBbwDv4VyBZX46Rh5Cnr7RFnAvm5md5q95MhxUeYWsWTRb9jrvMMn1M",
  "key24": "5K3D8gkFoXQqPfC9WHSL4ivApp3q8dtToW9XdaV2hhc3Jv3uyaBftBFWQgbHy2eJVEj1ToEcRkEtrWkLEZiDwD8",
  "key25": "2m8ETzJBLWHo5E3j5NhwdMmntYq7Z3MyGz32Rb788ArEBoqg8pAJzo2BEyLKbyy3VsENhWFFEn9jJrw9TYdZbHYg",
  "key26": "4RDdi8uGrhJYUTb13Mea5EqcwJSYdidnPb4ux9qT49Z3K9QQ9uDobLSuPjLxLWM1BXkPKSQbtoMCVGKUAPTso2dS",
  "key27": "HfFUxFprzTYDcygnDwGSJDsYVbAZxAT5TRvkhpKgaW2Fv9sEHRy2dZCL7QwxRPu5RvhMSxMe87PxJRA8MJoLXyS",
  "key28": "3vVWSwsg1CVgiphji9F3zey1rucD5zLuf5iyUUPP2mzLV6LfuQeRyZPQpo464hoXH1ob79FDZxX1Mt3XPJ5RkpGj",
  "key29": "4un5RBwQXaAvUWdZH2Mdbchoq2dsCRgUCWofzhcrxhfAFA796m3JdtcpT7wmwiek1jEXChaPCaU2k6aXevKLzUju",
  "key30": "3Hd33Sv6uZDpYJpxFCDc3BAU392VVt4JcUSjy6EdXLxoW8y7c2r1RHH6bZqTjWz3DmoTb9aAdKQKa63ymF2GWUo6",
  "key31": "5FKektvCQxiLVTuquGdzPcg8YLh1ezjYvcCBTN4bDGsKvgniczV2yj6ayp896M5YYwGbZctPnvhezEdyL74nRG6S",
  "key32": "5EXCSRGA2sa75TQ5QuRHptsre1Fn4FuEJX24oYPtmf4ANHxXFpTsY8t5AsRrB37QGn2gQoMCHqVhT2vUw8BRTeqU",
  "key33": "14cmnqVfT1ZRyTtTMfkvw5hbYQKzX2yFSE9unBHrCm26aRUcefRnDMq5m7EFYZv3x9CudtarBhyrZAwGuJnsUNZ",
  "key34": "4MVfxRczopENSFBVw5ErmaZtjQgnXM7rw5eTdNT4735ACVuotWLbTLDGDiKhNRJuWoUip8iUkaHZHZQ1a7YFtR3s",
  "key35": "4b8L8geEUzh42jy7f1T46ZhMqvgftAcTVWqcvQbw39No3YZkUr7AiDH5VU7rz3489Hg9nGk3nHiQrBFcePiD1hFY",
  "key36": "2cYBers8ugEuhjZe75p8haVjAhKXhfAkpUSQ2AwMVvj2FhFAzD9NgSLkqvFihiYreJSyTAaXeQdLie32AbmJtbFg",
  "key37": "35RAaf4cRgeTT25QF1Ccyd7VjS7Z25FkSeXdFiCf17YwQHnuepupR8xf9kuJM1yy9XdgjzqTiGUyysvqjUb724Tt",
  "key38": "4EqUrQxsfeX9BQqynVCjmWf2G7HxxCThZPQ4MNAXhW1pK2ZUTjtFG76mNea8LFR7ckKRzpDiXbMFY1NzqCmh6oq1",
  "key39": "5ypNXdu6i91j9Mfci34N9t4CMvFLChdSeutHkuWKFjhTyftPRcWAC5RiTxodcjHAr6fEZC15dz7fbDUKXvkF7Cek",
  "key40": "3NjVC4dn2b6vtbD4tngLJs9jDtR8sj3xhg4pKts38RY8W9Vc4LD9mxDQRG4GMYZrCmnJM3FqvqQVkGU7ohbpjuF2"
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
