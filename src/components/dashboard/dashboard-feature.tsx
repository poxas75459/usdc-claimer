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
    "2brE7Zc9UcENiuAPXXNMfZc8ZY3vHAkaH42GfmpaMNJWdiYX5QrsFmhjU4BEnJZjvUSnB6z89C6Qg5Wg57vrNk8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxC84n9HPPtWhYv3A2zYFU4VtuSETtFrUmcu8FmfCh5L6CDDwoTBz5SmWo7nDe9KFzZejQojDy4nU6mQXz8Atqh",
  "key1": "5axXUyuksiDaUZfqDDTBNoi2BTpYrhsHHPiwN9gcP34E377gEBxy9ZgJWtgXmVg2sx3UNsToV3fMMfoKtr8GHATN",
  "key2": "3E1ADM1vVhCXVezXemKjXs3jkeQLwweY5Fq46vEC9SN79YXj9aiUrFcgvgiyJ1Eesk8yyCLU1RkZhJ7pSTAdjosQ",
  "key3": "3Ek81GEGvnqMJZpdA2pM8nKreyRmzx1qr4BasXug8BkWx8BB4V3DnsW8kEwWykizvaLu8hq8qYLSsr2bWrktxn9D",
  "key4": "5UC6T6zgvJxWcQsqHymS9NEG87TW79qtXvXEg6CBC4pSGPn5Sc6dmmG2R7Z1vCCGed7m3fyxTyMUfEsQc767MdKw",
  "key5": "5LvGzURo32LEj5J4C4FVAuEkjyQ1MiDbhMD3N5oaHzsfneDhKya7yhRbykHL9jTxq22b2DvAWabKGXiXoMXQx4ST",
  "key6": "N1exqTzsqhetxVrakEYWhNo8iFfjaLvbDdLqonJuwitCmQzVpHexNm16mxMM8ay69dhA884xZJ4g6FegKJBdx6T",
  "key7": "2vfT9qn6sjkYEbgXYSqzrdkjhqpZKKvLzMm8CDG6GbuGJRKCbS553eQiugWPbKQoSsZxHA2MZyszTdqZPPm4f3dU",
  "key8": "3ooCjvECvytzRuewZXGeneLxVXgDuDBqsL7fnqQQHmHie4inHTTiVoq2ZrSTqBkgAo4a8xmkJXP3s27E5ao5VqWo",
  "key9": "B9K7bsXkh6t8JVgHHYLhKj6BqbtPjT69bFqWvcvxqdaz2KVVwGt7KjjLQ65egNAv3DaveakUwE5CTcSydiwANRe",
  "key10": "3seiYZXzgPFsaB1WSqxEdVEfY4rqfuKpmrvDmJsySpBGXNJTyp8qnDCvCS6RrEhzoquz1twHaFhB7LY1BKpzy7FF",
  "key11": "GpRRY2J2wBn8qx8HMikM5NgEEaExWEzwnWqbEbTBpjN164icr9EzURPfMM1ErZbzzssEfE9g665N6bjtzRzK3wR",
  "key12": "6H8u3Fts1grcym91gCWVmFRicSwi4ATpQaZfC7a61icUuQY3gRnD9bP3Vg4bnebHMmjmsEqUK2Wap7rcZbB7ZTp",
  "key13": "3MKjzU8vvQaBakegJkGVvw6T9dSN7CwJHv8kziuM8d7asrGEWtLViPnmCpjBaoVNhhm3ag3Ch6WMQwb1gezAzJmL",
  "key14": "3b9HFt6WUA7Z4GNDsxdZpMpy65kr4urzu4AdPVs7jFgWSJFPdJXy441u3tg8Pi8dPhW8vFUw51kRwCgz4YTSJW46",
  "key15": "2Vtj94odeioHcbXgwbeyHGEJE2Ng8r8tHuJEXNf9xz5uNcNEKWVeaWhFNjj9honCzELgzu61DCMBpuT9koQggiCq",
  "key16": "4e1F3yhNe1HcQrpWmX4AV4zP9i3axiojZSxSQKXXvNrD39aJnAQP7oxYwzf6NDEsVAxwLvP27PQFmYmZRHzoyKPT",
  "key17": "4NvM7cQZwTLeuJGrcx3G7kAyPMk64egA6teiBjiEH7GJErJWHuatGZfm8bMxTuFve8oQA2uRwWLsVUN3wn78Xe1e",
  "key18": "2t2arygnRVBHfHA1yEndpSDMnWfrTSmJPRjWPDJnn8zrdoEMm36XRCwmfGz1aPjsHNugfYCyh1KC1x72Juzagb4G",
  "key19": "4GT6zNE2iX3WjGWda2gMvspVfMqvoNZw9oPXPxJ4DQcnCsZzejjrtRnn8Mp8Qujd9Yhx2e327ERXHBpukb4wDftY",
  "key20": "4wcgbpAu9T2xDWHrefHNqwnN2WgtCrhRfQu787XzgPrZHYorzybnL4Qe7NrwRjjt1an4bbJ5bkwhaaBY8BAqyN3v",
  "key21": "3LJfKB2NauQxixHS3S91Eoa1FtD9VTrPfR6bxubXWHZbfVGszakDRaTpqX8Z8B8X5VVnkqZaoszU4kaSRvRYS5YD",
  "key22": "phsiL8VJgEPEm9n6EVXBVMJ7V3Cw94TDRd1oyWEPW3EGGHFQwHVWjuwKJpk3P516RNW7buWgvKcWEESLbnj1MuH",
  "key23": "5w6phczrBBfUHoxEH5pB7cNckBgwHygqxsMjiCeoJH2CZRziyNHYGjsHGTv9ouZh15ZpggQrQynf79pGg6CQUTa9",
  "key24": "2c93GZLYjcALazWqBxwviZYbyek5JD9bHMYahPBfDQja3BPjs4nRa4tmmFdeDLY3LpAa8Xsu78syw62p4S8rkGKX",
  "key25": "3raLfk2LCKPJbiJsTrKV4B5yZ6sdmZW4oM7PRgSieN7KyDkoYFYSnbBNvQM6rebdS94KXypyaqJEmTbr19kcwboh",
  "key26": "3ciwz835HsUYg3d5c98d7DMHqdMUeqwUJDRj5L62AZKGYe63Yfmm8nAFDJ2YbmcfRSpxhetEV8n8AzBXEVzASvr8",
  "key27": "FacGKuPR5T6h9HpcH4jbu9tte5fZDj3pQgf83K2VwLW7mstqLumBv6xHoEppXc8ShK8ykcQxr68wtHDt81bCoxC",
  "key28": "4cdTZe6T1RSd6VJ3vzzhmpefNy7PPFSjncmT5P8UXWHcNLLbV3yG1PYRf9aazu4isr1mWcHg9fq7k26umzawPzZ8",
  "key29": "31EWiXMDUYVyUzUtdsjyg3TBiewkWeBEbC1LKKsAZhusErqDteLvs1b5rZi8d3EXYhq4q5jwpnBoVx841mfPFuRZ"
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
