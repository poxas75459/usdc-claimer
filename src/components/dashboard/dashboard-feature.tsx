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
    "2CbVQNHWhvmxa15os7dCKxBjHvCfkw4ktDXuwt8cTWPGnwEmiffwrszF6nLU8Y9jfsYDcpnDZW2SLw33YRrbRDd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49iJanrhb6EeDTvGj9o9eDsWhivN192Dc17aZtompj6EiPj1pULrVfJSSKxHEd5fakqBgKdykDpgeqR2xZ7Zfjgv",
  "key1": "UKfpEJx4SJEWCMzxTLmGGvCVVcGqjQfNAkPXU8QF7qqA18AhEA7GBmCaiFr2acsheijUHXi98p5vNoVNe6NnnvZ",
  "key2": "3GHksDU72DH6vrbNcAquwjuwvnpGagK7gD5mwvziCJwPHpnXzdB39mYmRcuMYNFfakJAjHsfbRB8U5fBP4FqmB6S",
  "key3": "46q6N8E36Z4E1WVWGdUggQgJxbVt69ZdpDzaALy9nQwmf6MPse8cdHrSkgjennAaLS2g3X8P24HrGYkPSZM6n2CS",
  "key4": "9sqB1SoNPhMhiufGsPn284bFhVyEiqk92kfowcGSnfugmwaGLA7E6e4UYYaCsRoGAM81p7Q7NRuReBGHN49hhYW",
  "key5": "4skyENg2uJPGdJzz1WMgfmH3JmgknR1ZoZHYdaPxaksRsu1PXj1PnJo7Q6nbkZJThrNG5vJh26mDwhqiRk6Ch7wU",
  "key6": "2oUYonM39g51f5HAeG78U8Qc8sVLKU1famLNXMKvadDYQxBkXNyWSkvxyR6mihUJgRunETfNrQ4GEgCb8cqU7qqg",
  "key7": "2YyUEwumjtN6f8ben7taG5Hz8Ni2TCTgvcAgaYvpvYSf1m8fppmngHKyFVkEhvLVd9vLAgbdYuyzJUSZtKc6ZT6J",
  "key8": "3u56EqspdVaeWkFREMgNKecDktrUSdYTRBBjv4SCd32dR5x5RvwdRE3QwpQAuUufPAe3v6UnSGTK2e4G5PJEbGMi",
  "key9": "56udf8SNxFi1bmxqBZow8QtsmHqLV1rc5AdbPEyToH31hSXTWzcL4RPGJfqocAWqfjUqyX4evWYYwFhaXbqYG1Vs",
  "key10": "2XcQBu3Ke3UMAFuTHYJdFXmGLTk777FitTHn9iZCFb79fstbqxqtLJ5RQwGVUZhXdqfjYN929etRQgzKQDYctP8q",
  "key11": "34X8qHWUcs3hEJbTMGuiVkaKX6z6VwPfVBhnQf6ZmMcTLqXbmEujJtmZdEQDj3wmnEG8JekehQfoDv7vRmp673n",
  "key12": "FknidRVDZpeFFpCoq7RCyzzdReJxTDtg9KnR3w4ngjUZAs6WsxML2D4BxuGyvcooDPmhfEaKmTgQzRqhNeRJCcj",
  "key13": "61NSY4S4xqU6BtHiqxK18xtFs2c8KRg36SGFHwLQ4pj3coAYEycPTptUEpZh7beFkMjQJJGfmfmBAqPvnJrgorHB",
  "key14": "57qLuKU5uXyDVJcPYqVBCdat3W3wF89viVXhZJUMbBJkiA1r7hjUWzFMfEhaU5wuZMmDQy6rroRixtMp4d8Ryuv4",
  "key15": "5Fj4Vh6d2Wi3Qpced6vpJmZ64Dg3fjCJ9QHks9Xk4p9AGKFJHv1z8UE2eAm9tbx6dCC9bhKU9T2nPtTZh95wTH31",
  "key16": "5MYyNDfMXZpQzBecYn92LpykVfA2hBiXMfztVvgC2R1YQfDxtgTxUaZTpTt6FAGyiy6kvyQhQAppbxoQAJXetKZQ",
  "key17": "3Z45XdMLQDnDej1nj5wNQUTojLFm42qg6SPA2N3xgrDgJHzZ9epnWd3iXRK8wfnW4tmQUERcFQ7sDYpE9khqfYXs",
  "key18": "3yPC93vceemYuEgg6nbqWWgRriU7ATPQkdyeYs9cAohFpm6KCeXHuw3ZUHfRRtA7uVw1XyWwHG5XX2FG3fYPnA5d",
  "key19": "2sZLqZxD7ZczhJfFkrvm1Kw5EGATfQUD2FFMKJaVgoRMZk1DDWpbWRTxModcwkp3WLRfDA8PyMxBjVG1S7qp2iGX",
  "key20": "58W7co7jmhX7LUGvRasY8momSMuMrgPaHw5rjj1E4NJwUnDDoSzy9F8ntcqHBG3KjRkc6putEmXFhu6oxCfk24w9",
  "key21": "3b4xfmT47m9UyJs2Y7F55BjEiambrWhN9r86QSLJkNgikTMjBX9E9zaKaebfrNUazZHMZvqNEi9rHfN6fF5nANd",
  "key22": "3KTrxYcD55Jrkc4UVHsnHugNdPcomWPHndtf47HTRuqxg8uviHrot4p9Q3K9ZSRLMBJYxHfxNGR7vMpis1i5t5KL",
  "key23": "5HyFzbdfdwyZDHutKWEayWDBhar6iKJkwYgjye29xYqgSGjdx4x91Kamauqni715nB2LUgjetYjQYrehzR4JNf8g",
  "key24": "5nHKaFUkwvoTE977HMYyfpr3AuJxjFQdNKQFRqkjBH9TmWLZMv6LkxW8btpfv1YokPf8wswvbuKcoPye96aKRqVF",
  "key25": "3Y9RFcoxT723Wy7g18Vi1LJbbxphCasT9jUc763kyGsU9u4vYsZCwjUfHAL1oSZZeaFBFyqVHUHvYQFPVaMrYuKJ",
  "key26": "5FJPNALexpbt1LYkcyWh46pLZLHQBC5KjtpwWvsgM35h5ao6CW2e4M6iynpyT4DL1D7ubPxDYn8C2sbnFqv9RsaV",
  "key27": "4RQXnFVXG9C7CAVktZZibEirZ957VB6yXyq38JPh5CXgJUKHF6uWjW5mQThk2bhgS7o6FtBm3UwgyCKs539FPxBP",
  "key28": "2zXyiEtNxRRxUQLGs3UdfFjt9j3xhjVx12JUNapVV8gSj1yxe4y12jTQebtGmqN4xec1pGvD8Ct4FkrvNwdmQGNs",
  "key29": "3K1iVrePZsG2eB4pXPXuMCiYmaNMfPc924PMwRn5uGeNEAhcWTszeyMqC4bHAzmxhm9aBgKUfeAC2u2RcE3Nzp7o",
  "key30": "4kde9C6yGksR7qysLoKYxPLiVDQkCwQBW9RB77pGitw2vV3UASnEtRaYsoqnHCBTQWZ2zcfRm9gkZqeekP4HXsRp",
  "key31": "3EHe84Xw8JHcw3EahJoxkioymyJJgvXqnCz2X87Tf4JN2BhmGzmc5vA7H5eosPycuJWbM2bToq2iWQKGwNz7dHWy",
  "key32": "3UTBn8vGEFs2Lr7RfcueawHc4fmHU3k8Si5csNoWBe9cVcwv8o6qhe5Ru2nTYmYHjZE2XRHWNyPBvz32deeZ56gG",
  "key33": "3hn6UP4Pppp88naNEgmPUieMDdrT2JiQicynhuUtDgrnieb4dDu5dt1scXQLGorbqf7bAqMWrp6U7UTWFUPKFSRg",
  "key34": "3k1qs6i4UvVcoZBXvzvB3qqMRfsTWM5tFcqz29jSze4j64fjFXjxvs5Wkjk7HYUgNQUHQ7eRf2BVNmeXr6iADBtJ",
  "key35": "XvrudmpLE5YTvpsF5ooBJkL6FJnom4SQrpJsouvWqjSPzJvF322u5Fq84tjVCFSqzXwdCvUk9PQj5TKk3LUxvLZ"
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
