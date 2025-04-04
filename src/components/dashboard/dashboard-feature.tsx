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
    "2ARaXg7FXi3eDXQzCT9up9MQDzi3E8fP3jcwPW1MnY5scECbtYxbEFWLBVPzgsmg9BRkpL8rCj8bg5pB56VXeLGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSpeu11KRuZu6SWoaVM77LKhZcyWWuxJs7bv35rTVVPuxdYSGK79KVMJNTFVQfesPCspweEsL1ZHUf8QP2tpaib",
  "key1": "3ZjyDHHtwoq7wi7r28tFp5aGnnCMzbZSM7h2oCPtxfWJNj6C5qFGoLhqD1YqKJSeoagsAaKgbZGfnjzX3AFuWXMP",
  "key2": "2c7dhPFihoW1hJMggM2ExS6nc81mjxL7hcTZS4CxDuVMfQjGbvNF698UMCmg9ZABmSyxXgFEMxxo8yGCwLqKKdKp",
  "key3": "2dMAaJs9LjB9pZrbSBH1F4QrfDPZ5sgBaCwXyXyqZv4tB9XFH9FPH2uXzTKbFfTfyoQmboF51msEp9yb5Jdpfco2",
  "key4": "4XE17LKDQa4ZTzfL33CiPqdHTUU8F4abCgSjycXEkUzDDLiMwCkErHTcZGmWWSzoZbxtkgM6nBRi8BS7qpAXdkhL",
  "key5": "5RvW5Z7K2zfbY4m6pRL2P6UGkKV8MrgdPdfBt2TC2u8huzgd891B4WUnwEfA3eVDuUzYkN5Kk6FrhbhRST9rwxg1",
  "key6": "5iGM2d5F4DixJ9pfyEzeKtiZ13ZWaJJQqtQ6kp9YMESwQtixeN1eynGwasTwMyJqQD6wWKSSHAc4h5vqfu3ibmBi",
  "key7": "3UguqJvsRmHSBdeJTQj4CvPEKfQ3k8VyS4o99qGvhSh6Wa6HBjdg2XjhJYEEVqMn6BMhsVTkVsiEShMjTmq3HRSF",
  "key8": "5soiE1Lu1crwrMjXZLCDv4FRBJKxDkjNWAiNaMugQe2P3wGSpjr33yiPouVoGwUHjB5g3KY54e9tvyhBAMRYK4jQ",
  "key9": "3YpAGecL63wduQtVNBxxMjM9X7QcGzyoycbSwncZVYHh6aU4M7Zqt2F6et5irhEaPK8jA9ctRFtwak9gdAa8FnLS",
  "key10": "VaQ6zNaE1zhSLsYcrvSLFkHtngadoghn6yxnUHmQKAxJ7L8FkK5s7VDfA65SoSzCzb91cPXQZsrvrPz8FnjeJt8",
  "key11": "4wvZhc19Q1FLt216gmhrvfxjsz2gAgwocBzVPUvU9i75FtVNx2FZjxVT3gpktaW8t6hT2k9eCyWmHZcEtVWZfzvh",
  "key12": "5tJLG8ob8fTVvF28JiZwaV1nwRFM33jqoxr7WLSJhsiUJn1rYPY9E4oiUmSFdDyvR1MzmioCLp1UZ31HwrvMyVSj",
  "key13": "4FfKPRokfDDXqH1UdW9f638JUBQjATW9hfZaavURcQYTvRwCa7gLg5HpoW9rzPNjoQMykwCjb2xGy15snKJjih7p",
  "key14": "4V6yL1xauYyELyhqwNPicE5BhM2H8NxXpFTE5cbg1hedWp1ehu6mMcqwk1gM4gVbCDC4xVC53Wb81uDSURtFBvha",
  "key15": "65KFB2nGSwjKu85nhx3MaT1C3tATaA9joRPiYmPFD6ZGXZ4CZRHCc2Lc9vp245MJrMv9XiVcLyxGHS6ko14htH8G",
  "key16": "4JosNqyqj9DrutaWH8YTrc4U5nNWuBDjso24mZieGECzbkwnWdPcbxb3X24xJos3vFWHeFsFqCe9akuEhwTcKnHj",
  "key17": "3LGMR6JthbrD6LUKyr35rXZAQa6oaXknjeDSqteRuwbWgZNoN64fXXzmNQkE7xp4eaqpdaDAAdpwZDFohqR6NYRh",
  "key18": "3n9RSxM4ayYjWL2yQ4UvMcuF2Vz6TAmLfPNUNQnxC67veQgBRbSNr2CR3kjpVsRG3VLEFrrUwp3JR3DXGL4KZsYG",
  "key19": "4A4GKvhCMCrQg9K4hY7FrigQTHkBPpFvboGP368LQ6SjkFbbvBgegtzogij68h2X3NYh2TtxNPpsNCEtX8jTaThK",
  "key20": "Ds5XjHdhrRPCMahLoADkfzYndtDjR2dCuRnp191aQbFWoqrzLSL45AnKi3jgTsAT87KdzUUyY8vkzZpdzyzQeEx",
  "key21": "Htu2pHGGzakfK6DzosvBvp3t6gsJoX2o9Jh6qCt89PTj4MXpdyj6VvqURgw8qahdVH5bqTqr49q9RUdPWWqXHHS",
  "key22": "5ZdvzGy1sn7LbnqDnYcDTQauPphmsbUgSZSnHFe9hXJGPEWVrr3gFU5zDAwB14JZ26ovAPSTrMAfkBkFwmNAqDBN",
  "key23": "zX6Bp86Q6jygjuBsDZKdkuFZtjVHEznmWsbRNhQbcgFg1PR6vtA8dVfNKMqQXymcHaBAKSGgQ5Xvk23LEteCg3C",
  "key24": "cGKiSAuPLQEQtBPe6Q4N8X4t8fguARmtg62GSBLJRN19gaCG7Kc7evLf212GSGimSof3CbV7uFGBfFK5nMuJn8r",
  "key25": "329mvYr8PnHhiCXLXYcu5xCHuZaudFLGVczKJ7aRs24wvi167gKXemWkBx7hFVnSwMo7zccJdivRczG2897H3BRW",
  "key26": "3VbJgRAjrUEzd9cVpaggCioFTwEMnaydWPudgdKjQrZsWQTUVp9eJojFFNDbHyyzdhmRSqxdtqjdMoCBugz7GrSY",
  "key27": "2UmPK9eYj12nQCw9gf9gA5cajQMKAQmurnw4Wu5UyqR2tyHgNiCSK9WUBTzgpk2ND2jNMUNGfJAX4vX1uJqZrm7y",
  "key28": "3xd6CK5W3pBN61WnRAt8BsLgCtErrwnpWiTngacmCFMazDUkcq9ZyfQBqRt4zGCAUkhkqbuvvNkkEdwetMLqa7xY",
  "key29": "64HCxFdFXpkFuVE9UwkfjxTnrX91PbqgPG2SPHj19eksmmRZPkQfPKmKgxMXFfbAhD9Xu5wCwHtrKf3aHg4qc1Yz",
  "key30": "2u4jEdeNzrdtsug1Qo2YwNXT3EkWfJoEXZWEaE147iVVjhARoipAuzbPbrseJ6JgXkbVUyWtbg6ioCJzox9odLro",
  "key31": "3HjMKcQvF5nobFdCLCq2KYswSkSkym3aR1pD7XTv5cbeex7LFjJayBZLhWPjZUWfhhvpk34NwrEQw7bdysYPmTWk",
  "key32": "sbKCwuaEb99y1RcEQ8Kgs5Y7QpRYvK8tVCVLLCoUS8n24wDWRfYLC9f7UKeVRHHnaeKmYn9jMHg5jXsFJyc6i8b",
  "key33": "5EQpm28CHsSaiQa763WS2uUwxJJmhByYmUvcViPLQWEgGUrxcghAsHMnG2v7omRsBy96R1QepR4GkwNeE2ab2Drv",
  "key34": "6G9PopXrQgwRn8efWu65chES1VnkHh74CcTYMtc5bead8RBNqzFjQ8kQnoxThZ7tsroYyJVW9DW3yLU78ursRyh",
  "key35": "yBXyZtJPAcjQpDQt7saHC5yxHZDGdjM7djnewAS527Du7naMqi8tjbDtrYXeQfwSWv8W3YsVQy9Gikx25qBtXwf",
  "key36": "3iJP1u9WiBDUbM3SQVkB98ohTtKkdUsVFE8grRRfGeZsvxzSQwUQKNVuCPbuQUWmaB4UdHpKzESVwUqUgtXgPfNg",
  "key37": "4Ss8oYooyFdnncZUDQjrCQ4M4edJbBqbMbxqwNcyarD48wrsFWoktDYLZCXar68WHPtArNzVLNV79upWhZGzh6xC",
  "key38": "4fDs28XcHCmUw3KygbbzLdhAVDoAQoBKJaf76NLDPXMpUYprf3zyb45TY4BcDAmZ4v847iTUk8sGjBoJwVVs6ySG",
  "key39": "48fXaK3mWZobXMod2iYALrv2RuHo41hsTx4eRo3ii9dftEzLc64EE1BqR6ee9jFs3CJ4cqom49GdiKNwp71pztf8",
  "key40": "2gXcm3rmPnx6x6iEmBhvjN5Ld5EehBqRHZZzTfg3EFbmjUVZcrgWaNgbKds9LQJCgzX9nGB5GjKVAQfxdGsBgyxb",
  "key41": "3h2QBdK5ZwYThYbXsPrjtW6L5vCpTZ4jGtRRvy66WzqiSrQEARopiCMnWd76unLedPFgFmEf8SN2gzVXexF8vyhz",
  "key42": "4u1pQo4QDqR7x45RQPqBJtXoDS6MybJZyXDKZnWDYLfSraWzJMZd3VzzwQpDMpe7b3uQBvwg9ziWTTUrvvSq2U6D",
  "key43": "2dVDqcDardmYT7a5M9S4yjDgC7BSALc2VrACo6zdaGeDCjRmNtrJYETvr9Sw3vqSCWpHEAfTCH5x9PcKiYDoBBzb"
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
