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
    "dTfB5MuyQqtGp4VedxDeod7tSgNbdDBceMFqcWxrGPkn91FHGe9umky6fPX5KLUwtDHotVT5xeugyVoSi3GbBUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CM8b7vDkMbeUBpFtwseYMqp3VbhFMGnsvjJnFmJhxctrpJdwqzmvjL5wZUqJ84hayZdgqVRvwsWktXFTCcyz85F",
  "key1": "2gXFW84tyVqWrb1DuxuyDr44zPkt7qUpAPQAAZLz3NJH3mComUazgCm9aLGyBeS9e6LeuLjDJWRtNu8LjQU1wmA",
  "key2": "2UJUp5oGVv7rTVbQJWncf21CPRTQxgAR5Qt9mCnjqU5wra2n37ctGmWLCTnqy1JyAjh6jWYoPLAQzKbuh2gXn8KM",
  "key3": "5f2EmWX7zJDkjPsaUnQMgtSFtyooeu9YPZHmecteNpiNfD9gQqwRCXzmQ2xe6Hcf9ezhMXyTrcXa7jz7jRgv6GL9",
  "key4": "2YS3KkY2t1npLCvfetcpKtZw1s4VC3rhvuQ1eNJc8WMiexF9H7VmTq1dkZ9hLyyC1qGCr4S8SEZEDo6uTzKf4hE3",
  "key5": "2PS1q1HvqT3rNDyHKt1zBtgdpcjhbadEtSRxTnVYXYFKynrwn2Hv3YpJCRNXfoDDaExHekUHy1FpMPX4gwyAqr6o",
  "key6": "3p3GMGbvxeC8cg4KpMzHXzVuznd6f1dY4SQSLrFjHTTU2BgZW4P186cWCt8W52VFWcJo3qiKVNuq5YPmSZdgd3gv",
  "key7": "JTUxgV5usHFvhYWgSYGT29iTe8cBy47PWMx3XBeGmTdzx4REgguQsA9e8HM1BKTpjifbLaFneTEdMcJfp9uRw3T",
  "key8": "rHVEueaMPeFZVEmFXWFiNkazWJtgEggNAbu7E7gk8zGJ1oZ8YvN7PE9AVZWPjknTLz7QfV9b6yt9gYwJ6vTy2mu",
  "key9": "33LGddaJdkrKRDrGD4H2AvJGnm9hpdJYXyPeKRTNq919UB9tiSXkyCmY1h26d6xqCj2AbPCowcQNQ4y6zY3q7WYJ",
  "key10": "2NrM4T7fFimkuJUvLxPHrVLeiXe8QXmYTvjebTwjno4iDf1bEdSPNSvNgzGDQ3JAZr3BTx9YHa47zZvVs8zMJmRE",
  "key11": "oDMQjikbpZM6AYLJQLdKGRRRr19tki8DhiZTVrVwZ2L31MickxZaZBJNvdvd93r3ubzkFvykuxaZ3btWF3TV2ed",
  "key12": "52Je3JKatDUDCnAcPVT3n7Q2oMEYGJNCTUmjFsFg5XBqvzJW3z8yduQSuG3SM4nFB88krWfsNV2uXRJgaW6X124n",
  "key13": "38XmNUL6v3LY8RveiBBu6CJXVpsPCqygK3gopwt3QLqAmUE6QtW87P9rWkEGayVvRnFULtmvYR2YvdSgWmQUMkbR",
  "key14": "2sz7nh6W5aT9uPKhGPKE4Hq6gqNnedgpA1UoaKyVvfYKpjnyvnUd4SGnQbFRZZgEWAnyjNYZ1LHoVvat9fN18siK",
  "key15": "6EJzjH97yNRxYxzcWPYspifKQY1FaN8LB7NWSMgAuowY3kBn9HKbSxrLjr3X4n4hW6W5iP7M3vt1EsugNm4Y4fu",
  "key16": "2PsnV3QySY36i62VPVGdgPDdBPhAmYjDkz6U8YQD4F5DphrtNaDSwXFF4A79mHpKBXZyx7cgpzN82eTajyYqgYyD",
  "key17": "2tr7U5PuwbFf2jxYpEY5ae99miEBDGHN38Vr7PGMwBGMT9E1QstZBReApRRnXNkjHJGfYouChFHpRnAeLapocgbH",
  "key18": "3E22mE3BSZfEWXZ7rzjhWXcp864Ltupt3wPx34KB2r9M4gwPVxTYd6K7RJ9UiwxeS8jD5jThoyUXqxB4VNLDvcff",
  "key19": "hcPfBnyBoN6U9bQup8GDQSsomAn82RCNXCr844h6DPJHKp5YvoqewmaXbY8N24cVq7me3ownRpJBzuvNf3RRpv7",
  "key20": "QNSKc33Eyn6fKBNiYqxL6KKjZ4w98mRPp4MahiqPf1CbBN1BqAi7hREPD86vLBH3L2ByF1P2wms3KMUXWaHuqMR",
  "key21": "5BJFRP6N4nGXCHVrXXtk4Ha5kfjy7uTr75SquWoT9bxk1tQaboT9HZN6V18gQJdpbP1eh4FiryuT5Wq8JyXRFDV8",
  "key22": "2tWZaov9KMEja2mZyYsgSnnLuX5mwd7NL3fxNtRTq8YdoHJn5Heb9ydY1DeDWS1QykK6Yh4UaZXEPmHs3UdUgaca",
  "key23": "2aaYQG7SxbduXhdNffKVtTiBDocxjXRhK8ZsQVu2LBWV61eA3TPgakqMwFYvfJwkjA5aDzn9qPNpz85xcvNiTPmb",
  "key24": "2qo4kcWpy1wvE1b6uXEfCeRAhyx5KBeaJ5ErCcMAjyZwf4ZUKK8bk1ZfVPqCMKmftAaJNMUdw638yT2m7F2DNQJh",
  "key25": "4ggCMGeRVGwBrYNbLXGgj1qjFqcUAQoeSYPaYorxDNKUbke35soVTGeUBQhaBey3TYnyVbLMeDMiJF8j1p83XyGb",
  "key26": "5Tjvpx2BAASFerxNbv7fTbfdvxpZQpE6R9y3yynh8mxowhfz8xyAmxRRoyDwkSDytG1k4KD2Dnn29HGeXPD16PJ1",
  "key27": "3sBR6BqQ8QNdikxMMCVXxkiARqepC3PNbpQDJVABoFGVUuvBEykuYXxFURU7hoWHX2aw93Qmdv8gpKakpeo144cT",
  "key28": "3oQzPy8tdd45buxUUFSPPAk7T3VwA6JJeL6dHNw8MFh6gndNdm5x4aFbAebiGWjbkF67BkuKEVzWAJEfQRRAftxM",
  "key29": "3KxTX8bQv9SSkSeKqJqrDjZLdgJfU9AQTJv5ADtn4zV5tsNs3rsidMZe399Z7dn9iGfEiCR2pcEW1dQ2DJSv5fme",
  "key30": "akbMWih8pdzDi2iht7JLLQtGXRPsMrttSBLFbVcbR22K4bfcv7NroQ5ASqGR3RWq4QqBzHfninrmKznrfxTRzin",
  "key31": "2bTEPxDfRBRwqxkifApMTAcrzZnwsXwQ4tKvhTAfAKXBwnLnfJefaPDn3nX6uvT1YFThBngKcnJZZd2L8Psi9RqA",
  "key32": "4cTV5AkvH16Ftmy2urTyiR4tMtSMDfxr1uixVNZpjCxcecJjUUqb4a9UrwDqjboJxwnpp6DCzRshDb5hsAjBjfJn",
  "key33": "5LTFHQLrdDDxvLNFhW2n8Xv1dqVfUSaBzd1yHsmtFHB3mEP8oUvQX6XtGKDF6y3NkpUNCGm8sxNwe2bQFrBBjcDG",
  "key34": "QoGhPNhjfpgFADLfTDktH7JjGzQrp5JycgRxD1oNsoBCBkkDW37uSBKzg1gB39sqxHZgumxNByAkxAmsmRvwNGy",
  "key35": "52bjs7G6mrN9P5LZvyyXN1ejds95b5FKta4TXfDocg6LrpfhiLYaB595CKUA72AnEUf7wsYvfpi1DC7cUEiTdMyV",
  "key36": "4xrNf9b7Ym8ZStp7kLKyRu8bfZ7hxi3Hdjq1iJ2K2DFdTv5YyEGnVvMhUFEJfwvp5hfu7tEeS4D9WpGeuuVUSnjm",
  "key37": "4PToeQcHi693PgpYxv2QrhSUfwyXgczF8Ehj3gJH9FU8PpqPRZcguHp8sJU462Va2kfDaCikeFh26j7YDvJZczGM"
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
