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
    "3QGU98QJNEEZsFWQ4criFjqHpr2TpALkTLUm8bsRW2Z1Wmi375p9VpG6Bepyy6UCWXNHaHAwKGNTGXjKtfibq2m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GkjXqiYYRqkcXkEAb65oHNgEAGMYnu2A6M4nzLqHNF4C6tax8rzFwadY13SFv88uvGHQZAgi2ZTEaLYG2gan3Ff",
  "key1": "5bMPq6eNkwwfPfEeXX19cYMzkcB8bkyQXrVr8jmEreH9TWQVXm7otvtMNRzDQJE3BUNs4RerwuYnXVhzMyZkngJz",
  "key2": "4spZRYReijxCz2iPtNz79q8741B7D8roWLGDjGdrLiQuMqna4zGKFKWyB2wFibTve6JXLJM2b267LWwT5Bii8r9y",
  "key3": "3qQf6x576XDWQhnWKLKeYyHgQ824HLqxtx94X6rHJWrB2FNAqcwEdZpPp4PkPALs4txZA8nXJCLgfyqcMDYnWDbY",
  "key4": "2Zo3FvYAqE7hQwL7UcBoga71VeAU6BnAvuAdyYJj6rCLrWVb7GF27Dm5DouvYFv9NEzze21LSrmzLMWa663M7tYn",
  "key5": "4ZsGgipMYjFLMLCibiyvCuGdJNTgAxaidVxWCCTby4TK7YbKPrq76Cxd4rAH4Xd1Jn7AdBQHmwFUUddfAzaHvH34",
  "key6": "2Uo384aUwWb7aDjbG1V4ADCd1xDseSzykjcU3rm7H9hGSm5cCziD4ZPiEnjPDkXxr4JPZs5Y71xJsYuhZRL9eanv",
  "key7": "56RvAdgpihBsrD3MRaxeUwsVwe54zH7Q54hYM5atuHwUE9jsABK3dbmf8nx1KPwX8XF88FUtYoqQbQ34QidxTgHV",
  "key8": "4JcH1CSctvGM7w5ExJNHjaCJgzW55HSPJ1eFTC2coppnLAfxRfKQrPPQT4bY3hmZh1Fr39FqTNg7AWm7VjpDZ2o4",
  "key9": "nEpdUBtND3oqaTYo8o14uuB43v3oxGrg7X1FgcqD9RSpFBJajJUaRXaa8NmXv3Zog8KuCDxNh6NjVhBHnps39eY",
  "key10": "2gBNcEVZ48ThRBX8Wik9TA6GCnGCFvBy6pAfvdMjivGxoDjqKWRRhAKaNfx2FB6tzWLcNSTCVwUk35qeK4WfmoTF",
  "key11": "2p5m7Edze4JJ6zdvWsNpCWudLVDEStvaveuzkTkrib7E8dsKfPP35MjSLR8eneMSiyLj8AAbC1P1RHSb2x7f1UVT",
  "key12": "2iSYuMvuMH3C2t6rYKrocp4wPJqaeCjpbWbrsinQe1yhwN5WaHcsWgEVStnp284qo6fT313hrn2tTkyDnVX74yf5",
  "key13": "d1V5vd2LdMzWSZvuduBEuje3TvMX96oJYScGKYvif1LUewGVL1AMjG9VaZfomQPuySKJjz5hYmDVMUkG6eAbdTn",
  "key14": "3i7RAgG1Lnq7fGy3NSLpgb9JtJbhMznuPQ1od1Ks2a2DeFGWH4Qvbj2VFSG9vWNc5jwZ2qYs6MHL5yxXYqY42afJ",
  "key15": "6bX52ug6vz6UBkMacubfjnTJRiViudAWgCQgEx1p57LBQtXqgQPZ5Y3kF44xvLEDTdTrQGzipd5wL15kCyqWX8r",
  "key16": "dKhvRXz2MGsDNBn2tTkELzginAWKrZnKAicyXSFSiSTnbN7bpgUxdba4G1V2FRZxkRGY7RGozhVGsP5GBJnNg6T",
  "key17": "3TKGdCVzCVHdiWXoMeuz4eEwPMNQosszGjH5Q5T4kgy5rCfmDMmotqhW46pAvg2nPT2icxQkjSL54uFyT58Nebdz",
  "key18": "49U6K3HXjfB7if2BNQPkE3tqnKEtc4oH6qsCoq8CsV7Vsei8UJvGgR7uUgmuVVz5j7S678cc4RQf5kPuygsX21UF",
  "key19": "MYbiU7xFuy9T6r7J4urNrVX3JbNuo4zhkJRoNeKdbQuabpFKePnhZf6Q5KSLx9WCgbnBsCCvS2G3R8dDLr1HcqQ",
  "key20": "2gmai5MiUNW8hsjB61sT1EbNNqGt2nHk8Ze2V2DE4FYMT4NKH8feWEucuKmZzUxQQNs7p4BgBTRwvzGG6HW4FB4W",
  "key21": "2qe7umdN6i5FnrLXdMYBJgXRToeHvhzDt3XAr6fTnZpwG3wZmeLvQf8eu7gUPpfrVoDrTjj6q6S6ew19YQmd1jbe",
  "key22": "65nSo2muZcZQggQeCZvrDNuni3TXEHxdcw6L4XaKdF3eiB73RkZFGkr6qvqeQ19xk1nNmyG7RxoqR23eEag8XLp2",
  "key23": "2j711LYBHYjo4NaD6AN6XrXXPm7FD2BLg9LVWjKyDPQGjRGcgK1wwvgdk37SMUzwfUtx9qyKopQ6nDzjpXWb8MpH",
  "key24": "LpFLBqWuowMm6oBe5fHVuF8e7332dJhevJ5u98CBwkv5wgWejpAYDkwnGdW3AJvrMVcoYzvAR9JWWLQjnkpaove",
  "key25": "cpVXFWvXaaQbTMkUc44HB6GczTsHbdigtu3FSRRntfemqdmquMmDj1zhpn9LkrasE24ZzE32MnMZVfUigtj9JDe",
  "key26": "5G3EnesvokxPvj6dyRwe3KJWk3SjRg1oBDuTFnhEMDsCqdkGDMTFy7pLnikPHTcEK8yLMzGw1RUyBigWbPzCz9Ds",
  "key27": "3UnS4MfTMX5yPcRDHS39PCySQh3NN5PBeitt66mfcN2ZK1j1WtzRrNNmepboXpMuSpeBJNcqdZBgqvSxFGPLRi5h",
  "key28": "3X7jogGr1sn9PxHpzfhqeeUrhe98Zo7vAPzZmXEyuaYjwiA8GB8iVXWjq7iJGcstvdUPSmvx28ivkC9uDF7e6HH4",
  "key29": "5gWhgEgpGboWQzXQgfxGXjNa8u1JoohqseYtugnm13ZKJVg6FwZkNMBKW5n2PUB3rQg8GczGmNp1UALFGF3FMX4f",
  "key30": "3GppEuw2bUwTKwuZuG7cyMrCXtLMgF9CixQxo3UFUpQ9DVunNVsCCcGazbwS9zVDc2E6vWvckH4noTYpW3afzs1o",
  "key31": "3oPzmRtsn2oGxEq4vu87y2xxYTUDyL7DpacZdKYChvabrEof9mkRgnx1dRftzEfoKafN7tu9eyM6idhsup3SyyJw",
  "key32": "4EDxAUHi6eVmStYL7goX53giwEdjxPhBQ6iHgEcb26NVptJqTxqqCjt9jp2FiEweyhQ2mtoDUwDGRumi1J9V5VRz",
  "key33": "4Da74SZHLnApKBQPgxr9HMRqcDy6ZMGWphAyoQ99uNj3iNd56qi6sHM7Jrxmw6TvvJJ5SU7vUsd928tTduaoFcWj",
  "key34": "3CqP9jNaPij3YLJdr7PZia2xobxMT4F4WU6BAGxnFQ5pLySvkWLBe8d6ArAxyAPKoPDfCBERg1h7YYpSovu5vRSK",
  "key35": "po3AsuMB9DwHU1aewLYw99YjAzccEN6ZaWAMGXaVYjidWBZyEKHW97bFfcM5iKxgzS2DeNHxwcXyicoMr12Wicp",
  "key36": "3tSpHup2jUVFHDbqnhBjYTokkU87DunevwXKxrUnr7kkDLZcsVibLhzLVFzV8Ef73z6ubgThNb4QKcQZGcPLNcaz",
  "key37": "5KsWuGQ1UMpiCC13Gj4uMRKpDJEricf9q7BEWSsmJKn9xxHKqS7Ydhnoog5yND673CGsZDyqdrxuZ5GEeY3g49iV",
  "key38": "5sTxUC8igJZwBTuYM1Vbs74x7Y28xEyjh8gipeyoqdzdak8F1TSuxh1XBuem8swwQjG3XWTRp4n1nfq5huRpx9xq"
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
