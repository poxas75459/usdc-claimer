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
    "56vFj6fs4H3VD5yJt3Z4DhaYrGGusBLpnvNEb28jY8JimcwEQuwYspTWKS2FXTfdQnVpZt6cSdVh6rg6pKqcVcoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5MtB9ggykZVVrdbXv3Tfmu3o7gE9GnT2bKen1KomwXbLVevSgAJ36QwLqpMsQrUE2YKsppyTyYR97u1jj3Hyzn",
  "key1": "56Kxf8jnrgh1BsAVt4L1K1s8JRetqKQQRBjP2eLTs6w5reZfoJywN7E5v3VKfkrwtwTxXSVcvVK4LBKvnDmVu45x",
  "key2": "3exxuxQZvfSNEqHSJXLvHAY58oTs8A9SbCq1wf1uH5gVsmFtNBForJVhkeqsA62UpWpC1CDpRemiynyeMoAf6Shw",
  "key3": "DDh3Yv1WgBQQTVwGX1kpSFwqmYejhDBRVYXCtJTT9gFpj61QUaxWyvywXmQAn89YSLnJ7KbJw7MhP3Tq1U7NAnS",
  "key4": "292uQzxSKWKMmnf23kZBLmMan6BzLLMqYmhmZj2N1GbvUWosvmnD2fZzqakWgsL8px9imoqi6FCiRdPR1jMSTKBt",
  "key5": "45mYi2htyBJst5jF6qY3QaRUfCKCYpYAvCWs9A8iApBQsFbM5az6w6Eso8R8AWkxKrM5aBw2BjtjaJ7hawfQyuCW",
  "key6": "4VEJDPqwT8zRgF3FEerHTDiUwWKnJ73PbjWbPwpBmoR4QDkEordtDH5AVGtVecTMx6Rdi7JtGAMPUzv6KWvPKxqa",
  "key7": "4CmrpbbyyGgJid865u7xZSe7kiRYKo8gQtqfxCWVwy3xFMFobyfyBJqYVFKUdNQDQ6WCAyhJk7Mx6P9JebLFfnhb",
  "key8": "5UaP5NGnrzP89tt8xT8AXoxKFMTFtkrthFs6dajCcWx8PM1CLWW9iNwVNERPAaZETwjPCGjJsz2ubEUUjmRtQQQ6",
  "key9": "4vUzSGjm97QJpgT8QEYKat4Vq2uacSz4dTwZfawntWa4z69FLAxgemcSs17V3qgxDgNVwdjMes9iGwqggBCNjwZf",
  "key10": "4Q8k8vu5djszfSikAbU4KGph3X2AC2Gs8HvAoxUe8kE9Z6qnwdjXcwHVFDV93iRBjtYLYu9qjjcvRWJTNC9QVpC9",
  "key11": "5JpYWEpxTfFtE2jywHk4xJm5F2Q5NL2XvH9vinryWPo4yBxggz8Go7Rh1nv3fQPjU2m63FMx1jEHMkQCoaZWFoUf",
  "key12": "3Ag4pzAXrChVYTEGuk6LY2grAXQ6oFj2wL1z1aK5nKUqm3C2y7u7XVcMQRhWwxXuuANwF9hMy57pcM8Qtc6Hyby",
  "key13": "5ZZtxcaDVAZytayibfgiHegM6DaRtDiAzS22BbHzLRFvcSr2JtmQSfnW99HER8kcf41csPgynXUFTPWeQtc1iWfB",
  "key14": "4krnfDXow1fbQ9A83esSP3ANniJFAsxMyBgP95UCVCDgeBjRXe6D8YHJNdEZEdrU7QZYvyva4H9sshmovsoNzUqs",
  "key15": "4B8unGderWtnwm6fWNrK3MLrj26th94sUeGeufRjSAdj6PHNi5Xw9VE3dBVZP3r5yJHNQHuKr2GRaSe15AR61RZT",
  "key16": "3HYrxSF73nmjkT2VksAzHhRJDSRh2tC1QbpLutpDKcbgSLCDiRgc68MU9qogVrq7H1xYaCCH4N4ELAjceBg6sFQN",
  "key17": "4c9bsL9xLWnC6ucWDQGJwFJu9vxKUPTL9uS8F8EXj8otoWQVZVZVqCqnS79nwEakQVp6g9RP8eJQwKS4GDgKy96E",
  "key18": "4BXmJNjBA2ZsY722V8i7zUiKpyYeJVUZaN4NvgvP3piALK3hETDaiCUQaARSubE1EqTU3QvXwCSTPNQRJVXt8dGw",
  "key19": "617nu58RYCuGaiNfJqWg8qo8Aq4iLTCT7CWK6uprAXnpHj6DXTW5MWkM8Wb61MGyhP3TPj8ax4gdgyQ1moKeDG9i",
  "key20": "4BL8BogtUcjHXjoamhuaLHtQ4YWxxNULba5d13NKNYUu8cbNeVwcnTjLutgbCfyhvySvZ9Vz3AQ1MeSfLHr7hL2x",
  "key21": "5wnb2f71V7jX8TtmVkskGAcy4RTzPn19nGD1821uYQc42Hj7F25qTW642qJiVejg5AR2yaTgVEL88nZa1joEHXFh",
  "key22": "3jo3TQcVhpfS63pF1e1r4QcLkV8J8gwNt9FeRPCLAkHRYUKyTMwDeCifsYkc6DSVCzhGeotZxC6V4fnBAkwmv28M",
  "key23": "3dekArSrMAYKNrn1NcdmFYH12s5zbYZqvjSDtwwRWG6mSCNPiEqN1whRzbBhHHbGYQPDQnEJqd9BkNAGzFUq8S1q",
  "key24": "3aWsKsS4wxoLKfJkoWtzZS98pWHG5W9Pe2ysYPTk1N6fqF7VAbqXNTriuFxbtXTTL7VUk5YreELJeFyyB3m4JU1Q",
  "key25": "2EX6J3ngMT7HMLxaeLq1MLV28pUJ2c5LF1RHhgKAVhqGgH7HLET8MxCma8qpjn6eHqor1uuzLHzBFbeE2AAAwRb2",
  "key26": "3kdnaU2HzSDhB6AvtrjmWWkT7L48YnNjLsx3h5g3ZLB877t4d1DjiN21YkdPa1doBCVTgHvp4ukbpQR2dFMjq1ix",
  "key27": "4kEUDNBgtCdsvhFpwUJKEJrsPq2GLzeTdKZyiN9gXgZw9umwhvEzwkH693FJAy34SfDKXnQunabAeweUa999hiYV",
  "key28": "564xD8wVj3VTYrTL9LqG9Qz48rq2oWfMLsWooQfqjjhY5WyPDb9wAs4wyoFoSyWBckY7ZPwLFFAxFrqeVjVQH1FL",
  "key29": "2HMA5wgQ7uQ6anGugcJZisBfXY17bZCXkSTELwpQMwWAw3TyRzDBB4URh9wTQxTW1or4QY3ukeYS6REyA7N2DTLA",
  "key30": "4u5C6bAaG6TpB4VbsGGLTuECrD8UNSM8VbwfFNCMx82NVyVevQU9fZf3xnrWrjSbPVAdHMEsMfaVWS58w6unDkDp",
  "key31": "6ZHvXQXZA6e81wN9B5JByH8cqp5Pn8h54ZXA7g2MRQpPHi9hcctJb4QCcY3KkbbkY61gXDX4PhJ4eLtPiTqRQaB",
  "key32": "3jPushZbnjob6n6jm3HFw8LhifHAujCVNFpqgns6gRK2UHddNZooNjTCpmyB4wP6qzheB6R7vrH272syZCqRMMm8",
  "key33": "3Rs1PM8htxxmHBUQTtWxA31A7E4W9Abb2McZxz9QibgpWx9UUA1xgUngrTrPBaFV2nRUgYqS7UkesvxSRkytj3oM",
  "key34": "3Erjsxq8gN2xGzYmgMw2khhA4mYLmBLnTugCt73rohoMfvwK1w8KAWwcTuErruGyzYhZD3a1miR4E3WRdw3BnyLQ",
  "key35": "5T4vA1XmMJ3c83j5syAu9EsKg5XLW47L2Zosi7hVSkdyw56YszpjSe8th2CdqT8ddmFDpozZcFuFV2XyHKNsK7xe",
  "key36": "sstrRGLhBuxEvZ5N25iTYMKELRyJ8Avv8nEqWQbTJ6iLg2xBVS6AdXCBukG9DfksonSpRWCBiM6VbkeU6XfxKCy",
  "key37": "9wMQFhJJp4S5NJfsLeragWSCQW8XpuQQ96RdWQRBAxEAqG2cjPmVmAYyaDotsoPofxdD5qp48fR9qqBp8ugyafQ",
  "key38": "mC8mwpS9ZD5yvxS27qB8p92BrQkET4VdKoRbfFRbWJiniWQjmrx8PeW3j3cRNiQDtGwicVQLFi928UKsjkBqS3u",
  "key39": "3Qkqjqy7fpbcGV1xdEjoC6TPtaMUc6R6FpQAZjDNyJ3j3X2hqyXf5JmeMudMttKDioNBXShr9uH1b5Zppgq3GW6m",
  "key40": "4YpAiJwpsjFjN9BA91kV2yeJLiWKQjW74ctRnqbneKq5sGEG3mUu2Qh3vRF3hjviAxteHjhFu2xftKH2QXcCH1gd",
  "key41": "3de2BQUbewBHgkaBUCFaaxzQa3TmzTbuBb9jpdwYAFEPfuvvYAJqxTVzYpehdfH6SoFL3tjU1G8jb7XLw3pfzsVw",
  "key42": "5GLXYLhSm9y7CyHPYCd7ymseneuexZcXbRqPGRmbvqkLLX4XAcjm65M9kTcmAEuSbqQsbKAqc98eEEBE4hn5bvby",
  "key43": "65wFnEWW8tPayRFLkM3P1gDG8zv4jT8Uprktk7ezoZ93Wdf6ibie4dVLXUx1urEABVdbhB3hzAaawLQZiTV2xARX",
  "key44": "4jpyx35amk7Aiz8diSfygxgwAbcNgM9jYzAcajREx4njW3xk591mfFm4vGAjDEHj1EZqSyH8HXEwZDpwH1fryp8f",
  "key45": "5hSS68A7MTXkVLHunD9caWjsgBdLcmewyoF6gKWjN9KTetA5yi96MaecPCB5NCQQpgv9ehjMnoffZB8SYWpd4FH1",
  "key46": "5TwMaJKPoyxEYfFWrxwxaGVXbv16zHVYccRMWzxtfKCGcWfs6g2SVevKxKdb5wrRwPZC7AtYZTXKmoTskwLKU4oM",
  "key47": "2aSiTS5NhkvEybwa3GHJ5w7Bxw6NWLEk91kmHkTmphEfwYiGEsy2kDdQBy2cmFaT8sAfpqPy7NRVhEuPEeYkyiJ4",
  "key48": "2ANjTARBgdPPbiPvMhFXRXf4nTxxQUytwu4YEQVA6j4jSP15UrhhM6NHjqGwdDAGTFMWdTiWtqKWVrdjR5JQtfHe",
  "key49": "3FxL8odZEjhKrBULfohSW9HEnSqTgY8z7xHBWvt6ZCJNLauAQieZ1YaCp5wQzoEff7XLz8rBiYb7TNzwWhyWPLy7"
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
