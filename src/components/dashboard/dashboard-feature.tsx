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
    "HtZrVHvMtLvUTu3qJPjEQ4H2pWYVB5A453XX2LGNMNwKG8nb53HsKDGVgPfow8EdmRPejoHLm37birjGBrnusQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v7KhgkiSQrT9YCcquJzoGceqmTYSj7LGqHSTnesPaJuV9ZSWgbcPyVbhDLRKZ991NXr8D3gQfpshK7KVZoqHUu1",
  "key1": "5CgTQua4VGunTboMaMS9pKhw9rucUh4SnLnmNwwERxprH5u3RcCxFGCojDYsh1UY1SUdB9hucCooz9GNrwUwjPZM",
  "key2": "2tAMqvn4s4yrj4ZtDswgTnNTEAmHrFfjhi6ujrUC1pTH1Uqb178YViayMTdTr1YXNmiNQNjpx8ydftRhYy1LsN9R",
  "key3": "2hAYfmdLkFkAt8oQvsjE9CQ8hSs2PeEbVoMBzVSkMCTf4RnRW2dgvHzTyhF2VTvApCo5bCVzrXmcU1ciPrkAEBvk",
  "key4": "4kSquDomEDuJgpGgp3G4dQSzLRuQ5rcebgtYv9XvTcBKh7brpHFERPaiSesB5QLYKbLiGAf2bsXXzzaos9tGbrzT",
  "key5": "56gQ9uXTxnVeu77eoeHJNm4nPMJcacdo74HJYMtFg9i7KVZQASCNErQSWbF9JfgPoessgTot2tg4p2tKLUMXi3Ud",
  "key6": "egDWsvexJHFPN1edCP918v3F8SWwn9tU4QFkBGxQGJYqwyqhYxQ8FwdrzQjSHauQAuvTyooKoMAnDf6tPWHKbNh",
  "key7": "2B1VafL5AFzpunUVBw57EYEECrXjNUYEymqZgRnURbutpmmavkfyW3kfTrPtUi8DCNJ5bQFncMneuMKp3A9hS893",
  "key8": "61XdXG9ZTJJCtWY32WYmrp3BS3wPv8R89q6RcGPBgxUjfn9TmBYV37QY1eB6iqmvVXLgisbpuDaQJaFbuvYeeM7z",
  "key9": "2rD1GtYBCqjVTPLcVjfboMAk9Kfy5WznxFRSQ9HyypGXwq9gDqyf48BKzh3R5hJRRcuMX3xfJeJiufJeKiGRkoCE",
  "key10": "3craCDAeJrvV1AseEZGtNdMEmzK2U68M17K4V2WzVVgXGbkP8J6E7cv2fk8162Ka1TzFQUxe4R6CF7daQYmK7aoZ",
  "key11": "5xy5fAEWxdQnUwbmHnJkCn55AWHf19BwWLEahMkZP4eXNr18YPvXw7asS2PbiRqmMT6JwXaQYbM2bUHVyyKgjJGD",
  "key12": "3qwNPif8oEyQhnRFjYDisLo6RWguiK1FwzH6nNyKbo6Hq6cH9eTrcFte1r469JAB1sYHBEqJACbQcTndx5RuPqS",
  "key13": "3pZkwrv2tSowLSszyQ4uEK8aE9p8G8Qi1h8VtBBwnBDZA8dhvJjgeumi2fnB5PmnT4s7uYuVCnnFWbAQNu1s7i51",
  "key14": "2ibNaz5EHeMWNpkMp77R7LgU2xw255G5YRn2p8wTnNuqrR9AnQajYsDn1LX3cwA2JNcKY4ZHrfAmAomtBhXFZ9Ma",
  "key15": "MzMtMapDHXDvWZEz8EoUPmiauwFNomVfSUFqP2p7sA1oPsvjWjCdvKJb6HDWvD2vaJ2kwfyH5pWtTHE3N7rCaEv",
  "key16": "3Eq6twBaSQZbCBaZUQZthvC1MLbFXVf4pgydsjohMAhxDYTqbcDiejzPNEteeAi6L8JzwZtzqqdjc5RY5R9z76YF",
  "key17": "3M3a7aTRAvujz7HBwhGqNuYv65uBMoLSAGQhvimv9jBAVY4kWXeeSZtHu1EmtodGy32qBF63sbHcYhGwfzTRSMwQ",
  "key18": "mYKVoKLdGosLoHgRCE33HBvVGaZPBVxybWVYHVRavd85rxBFVWZXsQQbcary98FTyERwMJdune4fqpNf6CFt5a7",
  "key19": "5upo8DP4arpqzmJmGVdvxZ5jAnrDNpfpk8j37JFgqDXCNaMnMxJGKd3vbsuoMvKTQw8tnGqomcRU34hauh8VTBEe",
  "key20": "4L87GpUd1N4Aer9osXZPFbpkk6kysRXBBD7Q6FuXuf3sX1pG7eWFYUdmjJiUUBReVPLzN5kbWfoXe6MJBdhS1174",
  "key21": "4nbn4j4LBA91ntMUCcgMHxjzQ83fkCaaiYh69mADhZueKLJv8g3pQYubENA2rRzWYaDH5NnYUaUaEPKDW6PLbXnh",
  "key22": "22VeVbzpQVD4uit1mMnfPg4m8MY31ymMkm1cP9jPgd4cUxmcmpbPuxyFFoF39MRTyQr3bZ5BLERjsof7Etruxp1H",
  "key23": "CYoKmnLA2CGcQE1Qx1Spy1YTr7ALaZNU7nAA3bkXRySu9P4KMVr6bk8vesSk49mXpCEpVaFcpBfsJY8AECxpQFc",
  "key24": "KDKzuZUFddnaHT8jSJ1QWh9hE68Y86aTuTy66KyiPunLiotjjp54TTvMk4RPU9DGWb8vG2viR1DUy93rAuXjAnm",
  "key25": "2jdQ8YKpdekBxqJWV8pifpvFFuK495nBSmb4TYkCYwMQpYw9JjbBxKutfFwWLKn4EEhvsw4JHpshmrKVcn3XcwBK",
  "key26": "3pyP1nZCPF2yuSCFaHULf6fBP4yd4G8aW6Ss269b2qMWdHVLLLQ7yghBYGqMQ4Eutus54t4vtVQdxkk8289ZNy7y",
  "key27": "4mV9kFGR9FJxq5MybLaCezCmPpVUqG8F2hw61WT83z4UuNnFcnFer9sdEs7oRuYAGbpWtdkuuepz42RDVwQXxENF",
  "key28": "3bxRDcw4LoojTXtrafngbQ5Kk28tf8nZ6GSpmoe6gaBXv4NEYgYpnknRE1fUZDWsQiWvz3T2k9cYc92aLFsXDqZC",
  "key29": "gWer1KTMm2oRcRn9g3HJ3ryqx2hng62T8ZT6ewBP4QVV8GLmDE9dxHguJf8czDSdQrpoWzxhmNN3VLPp4QV4FhT",
  "key30": "4jRN2WKcFeTkuK5tDvpWmjkSAZM9V5EqrEdeKuE7GYPSxvvv7QcfzouZnCPD1asVudDbnfR4EdRdY6kxn82qhaKe"
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
