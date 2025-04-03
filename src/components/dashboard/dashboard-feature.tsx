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
    "ruTKRBcL9XE6qk5rJLrC8QSm7rRCATDfVskVjJMMdHeBhVeAc2X5SnHcSL55vxwSTeGHRpHjoEntdxjk6mj8w2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTtMhZv93WutiyKqjVNFMS1jw2DSjWLkzSk2TQb6sB3ZTxbpszVRn4r7tPpWrYZ6r9ZoAG7SJ1Q94Ey7qbmM5cK",
  "key1": "3oye1RHPNQNP1RiY3qsdYPfWdqUBXFRw2FXxLYFnxCDMhDKzwhNpP9uAjHpFDUBcz2xmxq2FmbPdpgvLHW8Qdxy3",
  "key2": "EHmAa5f1843MLm2UBJ8rF9A4cgu87iBHibFmXh5tC8P3ZyaqEmAKNLbq1tRMHv5T2tKkGzJFro9RgeVfqFTCEA6",
  "key3": "2Y2Um1hL3CH5t3DP6yyLWdSd8QeHK3t2sKRMbpp5D5kCTexQeCWRed86YkXLQMsUo7w5aywt8dLfRcsSBzPp7Kes",
  "key4": "5KkQYd5KkmKwEDVZ3m2CY6xE9W8JuXLAFpARUNUTJFFHHUDu8rmATvfehweUskZ6rUiBj6n7BgtyKpw96qP4ai3R",
  "key5": "3HQAxrV6dkvTv9mvrnXaAhm8zDtgPDNixvqvLHNeFp93qBfsqXbWU29LZJyfijEnyjJ8oat6yhxtgL4QS529kipw",
  "key6": "5Hp6wjRAnuqJc9shKwHh1vfCYMtBUiKELbcRwEXdRn9VnsBcw2QL37UjrkePxLJzLDfhbDpRzPGqMcTaHxovxmMc",
  "key7": "5xtm2XLLy3v6iu95qqWEwcVdn6MdpLuoa6YmYusF3kd6yCGKrew3uj6VqwrdnxH8atgHYEyTA9ghnFce8Rt5GiL9",
  "key8": "5yYpMERozRedLJhPTrZJ2zd7UW3K3qD1KsyzduytfRmKwNwXtfpPqqeLCMRMjK9PPF2WJeXsx83zcAUoTKuveAC2",
  "key9": "25weVUbTQVvJE6CohNNvv7iiSddCZkZArXG5fqdcFktvWTZAkQnTHGCnVeNJbLfQhxoJnRT6LzBY9EG3NaqFzGu5",
  "key10": "2K84VWT7ACT1TKznuYc8fzjNFeo1JwiyVmfX1FzVStRbAzvgmYSViF6S1HXxwL1GDzQNWGiqcjVhCq3h6HijWWqq",
  "key11": "49TYc3kjERALhr49WH8wCz6YNcudy6WHVzfVGNCEr1SoVjitgowXNydLgzMUrvmM8oso8vjUGKx532ZnLTi1NhMy",
  "key12": "HhmhHsdRERoMeGJT98pjGV8BKwbd71GLbM7zkKYw3XfDj4Vp18enHhHodZpELANZyWhf4F2otLNSGqycQ9YYFcn",
  "key13": "4RD6mpFMuBTcgQEo2dWhXjfJbvVwsnSqH2DUkpUdciqknTywPVdpExrdksvDDQ1DkFEXu1wSxbZT6qpA1Ayr8CQj",
  "key14": "4cyd33aiWnpi3WYQrhMfZ6koaHpXzW7ZnUzBFJ5iZZJJTGsDjNQdxGa8ERL29x8NwqV4efACz8GknxZad984Hkxn",
  "key15": "2kxTMnXLfgotH5Wxr9GiRfmsTH7gjuZzTefcEi15YzrWUFfNpCe3rpZrsJRwRuCANHNtST3MChznRjQp8JEKzge6",
  "key16": "XtJdYVmhvPpKXzY8rHiMXCeWAgUeYyb2TjD8kcy7w5faUtGcZz8bvWyAP5K2NL8sQJGeg2Q4yfkc7qLDpRYVGbQ",
  "key17": "2h5L9GTryeRbxG6DMW1uxANMaLhW9yAPU2228f5AY5hjuJiR5FmkE4iFx78nAU3PkBN3y5kz6KsrgKVqry5hsTjN",
  "key18": "xtiZFkAm2VJjm3AQYVT7MPLFWrpu719jkAwT6JBgwFTb8KdbAybgSi5SRbFwxtAbFwwqfgXMNS8Xu8RWTsqPCAN",
  "key19": "2hUQkGfbu21uHX6UEvDJeNezW39x9PNSJLE5q4Gq1jPMP2m9R85NKcRmuFxYucSA7SYLfap3AK8YwVKpwt3VaaY6",
  "key20": "2H1aEywwyyBezdjPqormRv66oCdBGRvpDpSJBNVNfUZLSHLNbUqECT7dUzjjUemTHdks4GPwu8tZnNWNf37GVt9a",
  "key21": "4NkBNa3SyM8oVeYSgL2G9JJJvgj3GUCtZ2PPDacnGKxMLBQ9nDuHyQk4p16SQgCputYse1vxydXfZ99v9QBXxnyJ",
  "key22": "2B9Yddps418cmUQREMd2mk5g61xPQhyqgoTpd3JYXgmb7MdqX18LgPNRfAYFst5Vgp9HM4rgFqdFg89rnbbRDRzL",
  "key23": "4kkF8Vvh4fecEqrRgHNaG9xgowybF1TKWEdMiYnH8srGgngWgdAjHYjFoHjjUUa8JFkHWeVTmxppmMdhM6iNkF3G",
  "key24": "3CuSkgjQsrXRQ8GXMasYMJNJ9cKqyxTSzLmRWCsLtEPNeTqkzFapFipoDEdRyLkp3UqB1dBti8bTfzZnVQRp5HkH",
  "key25": "zSymZVwGbKkuQokBU7MnMkDx5EmhYnv5gDPYdd2qxaqXEKXZKaYq8JuH1hBuJfAAkXu24EcRfGKtv65TummbPGX",
  "key26": "3oRUjqJZWRHb1oSxUjYJbf3mmz9atv3opvnDVXpAK5NxNd9hhxSXVS8rbeiug8TdyxZjtiPgbVS6NR9mKM7pdQN1",
  "key27": "4FJA2pSB3fZvYmdhPTEH4WqRagM3cAJnfphJCyrmiMk3xAvx5AxgsRU7kjiYa46T4cPuHkdov2PBfVpK7xtfjG6L",
  "key28": "2iAFCXcM66xNXAZsQddY8QN91TwRgi4bFUZehZVp49nuLCZbna2ei9vTJtqUTeRaBiVsm7TXRRTVvm4j2TW76f3o",
  "key29": "meJDQY53XKvqjcRfjFMvuq27QojuLfHqoqVMQ5iened4MZYRSoiNY2XTLEBVuDVDFzbqGDymHPtxNXimukAaaHL",
  "key30": "2RTsrAnFDVahA5djadY8r9B6K6HvWaR1qNfwG2QuLzpvF1dX332YNPha2X1sdmgHCuJubHwCFm4kYWgQvCv9UPw3",
  "key31": "3bdD5iMdjw1N42RGbczeooJAc6ZG4jrimijhYBfDg4e9c7wFoEAsbX75euYUbcdtr25JWir6RGTpUgqsTcQiDLB6",
  "key32": "2VaqQyCtu4zgv3LeEx1Kn2JmhyViCBRDzaCfvBFr1whdsDPaHTGwJPehCspqT2A9AsCwjtBjL3vdjd4cAR49QmZ9",
  "key33": "5uNgqv2Tn6ALvzDJ6eep4DJZnBxiDyjHkk4hyouoMEaA3KteYV3HpJEt56r2TVDh15ZTEMwBWZy8GT4zwDhp4Sso",
  "key34": "xspoiBDDpBEvRQXMwgzajmwhM39tJi7Q5Vjy2mHRpw35kprrmqc1kEagyQA1niY59Pz3vHAyC1mUrTvGsdz4URx",
  "key35": "3su1pGZaey53vo5Ms1kNkAxbdMoQP2DPVtQv4JaCUicy5Uo2ZoTLhKK2mD4EWbH6JGehEgvTG1gBKRVcg7TSfshP",
  "key36": "4xPPDUhp5XZwXVufjN5onJv4zh7EKM9EwU6xSdNUWnnPFGAN96EbKuMXU97ZsFcpeRjrSv87LLPyA1kVtRKoXTRG",
  "key37": "2CL3ref9MAmLU6C9bhYUDo3pX4nTUsLM4UPPQdoJdmHFn2Cv7FVBQAaiXBinWRkyytxVzYPQZ3C3Y6g9LFns6JGw",
  "key38": "2fCYTCtU432eR4yRFr4Gb9EkJ2aeXovneeqtfgCiAuR94HSrxjYsS2Xs3TfkrNkoyMBKJ5JM11Yy7h6sR2QsRWAh",
  "key39": "3fi6DdrfEyjy2sYBTtwydQVrnWTUfK5amVmVsGooSaAuvnRjKsC4soEbPqvB7BZzVogyyD35z5Ti5LsThmdrcheD",
  "key40": "2PLs3bA8HsVV3HwDBz62YqUoEwtcyqtnqT9nRwJBBghXhugErmou9W7PWchyAGn1pr7icsgyZvZajq2K6qfsn5JH",
  "key41": "LSs9p7ZWd82EbJmGRQSuCyuZ4Ymi7f5rdhvUUkYivBVmCdkSX3hkMzHyUoy2gsGonsEYeepWXhE8jP1yG1CFtQh",
  "key42": "3a8ULekUJeLyZxhgn7GzqX33ssHsqESTd65qfJvK2cSHvxrLRUnFUXV5AhE6bgwLczqYSEi2rZWo1m9QT4ikxN1b",
  "key43": "2uhujzVCo1XSnFzhxQaDLZxkw6MzomJRxkp6WDJFPUKjJWBuLK8VMsrQcv3LfJnJ2dASo2vYCAkD2oeQukSSx7Q6"
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
