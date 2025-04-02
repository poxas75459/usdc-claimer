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
    "DewVcEP9hDuF6BvGotmHeCCRgEPSTa8i4CJPqNvNk9inmzLBs7JeJBL5Mz9kEaULRc47dq9sCatWeQNEFPWbk61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkjJsxBdSRyWjCuGNH5yYEnL76PHaiJfJ2onW1qmJQoUdaPao1n2qf5RwskN5EfzvG4tibVH3oHa75tFRnqyZM6",
  "key1": "Q6FyU4eT8VT9A4dEgXUKm5XMDJdcxor7Fb4PJAwFBvAgZq4ZTCMHHbDpKbZWAUu3JpQ2AceijX5oX7NW2u8Gdma",
  "key2": "49GTcbgrmBqBLwtDkPX1u7WG87f3abpqWaNpAJXsH6MYi2DdqCnxWkCzKuraRTBYxeQj7bTLZn3V27fpUWRuWXyd",
  "key3": "4SmiTb4iAk3LGhPP2vYFh9HmijTXCmuU9G6i4xj5xfMwjCK1eq6wxqrcAeYiS3T1vMqJkrtKGzChCgLEaRbEP4Zf",
  "key4": "5b9YapqNupdYcwP3essNnhYfj6v74c3tyjxrR2T9A86e1sGhkL6PGKko69q92EdHgWX5ExDU6RKc6xDEtDqYeu2t",
  "key5": "2mvRF3CKEuJmQpsJf5guqma5sFk1aSui7XCj5DEUJ31tgrquHEDA5BydvFs2zTNVafXD59jgBRT4TSxhxb339roi",
  "key6": "3R8zWrLxPqBW65ThitUoAjKGaKRFyBkUPGDfZvZEXcymv8Px9fw3U3nevne3gSE438Fthd6GT7C9WgQe4mZEx7sg",
  "key7": "4CtpwnJ7tmg1zTRKM55b6qLxgvajrU5o5Tj4NyRv8BfZbu5AmjjvW3KQb9n8kLcUdgCqMXpgyuYBTm1RJhvG25nu",
  "key8": "3M9SsWAhr4AWhTUNSNBJXuZwY11Nnef23PrSSCy1ULh5cmHtjaaMHThMKXXmRYgrjddS6GqDaqh25YeGHfZyQZna",
  "key9": "2y4qpvrJWreFuPX2iC6fpessByGYXSsrdaG3BViyGJrSysfEFZJeoxBfb7qjmcGF6ZEXngG1SvSLG5EmkbZGiYca",
  "key10": "2sHXYsyzB7V9444Cs2cEPCsbdx5LJJmj48jHvZQMQZtkJH8Jvyir55yanL27QqM7Y5Nn2WwJHvM5EUZn7C4U2gXT",
  "key11": "2xPNuSrVpu25hfcwsCNAQvEDAeNksvPnqMNuojaYeNdnKX3wnGGSefGYJJCZ5XZycdBosXa5K2V3PChbBaEx4VyJ",
  "key12": "ZSQqALuSjZmvrucUTLt6uymqw1XCe6vc66G9FqSber3S72XJ9CdeshDTMEN9wjnJ2n2wRJi63x1aMG53KuNpDxn",
  "key13": "2b7ftShh47ttPeZEJfeCsRMd9RjM8BeBom3gNpGxVJrWm4oQ5kMs8xZ8WKfPBqeTK8vyxwuK1V4Ruw8X8GGX6rmD",
  "key14": "5GKZPPEgtqX2TUsDZ1bY46WT4aZ4Fxtn4VLuV1zMNxTW33ibdoDBr1JvFDhS7JCNGUkqp7npzFV4Nrr4rQLbaU6x",
  "key15": "2oMNYxh786QtXfuYvkKdZKzcSi3dqHFSjJc6bKA5wHqSL8fipAtZerUcX4gtViEpHojDsDi28CnQyYr6V6jh4jKA",
  "key16": "2bFh7wUyofmSnMqRdhGx6pzRhhBVYLTmvetqhB7Q9Bw23DEjU5wYjqz5dY5ygewL3dJMz985Lx99FFNQsvAwW6nN",
  "key17": "4SMd8xGyd8ugC3K78cmgyWQ7PqMxS56H2NyxnRD1uBivXE8sUHTFGLrpnmTKGKSD7NPp2nj2jGZUrhrw5KTWR7Qq",
  "key18": "4nrAMpLz68QhSBvbkBKhCsAdHFVSJ716CvMZJzesxniq17TCKoVLR9BbC8dhrrYpNHQfrZJsKVyuYWyxnpC2ccNj",
  "key19": "5uTxekcmkkQL9zNU7kPqhs6JDn1qh7o3SrCzDXjBWunj3oxT3moYehpVcbwsRfstTNU2thRT6PaZB3pUJNbhVuQp",
  "key20": "57TzmSiBwL3LXDUPFES3TRb2jMLAu6j5iSPAfEUGaPQ2NwLumtVrdkg2atU8kcWu5Kyh3nnwSuDJc4FXTHuLHPm8",
  "key21": "22NcXC8Ba88ChBry6sdfma2gpXoZTJzXYyKdfBkbvY8YbETWkS9W35XsyqLmsFcBeRNYd1gWzQnNWF38751aDFc9",
  "key22": "5WZY2kKnXvzTuPVudVvDAgfghU3v4DRCbMeutr5jm9LQQ1G5AdzBdvhU28syAJmRGCRjrV9uzxUB5tdhxnKz2NwG",
  "key23": "p1BCJ2cMGfLitTCgy8YDLErp9eZzgzTKdWtuK9mepmEbMPUreKAyyhNtoAsZu2SVJbggzmfhhJ4FiPTTG8VthMS",
  "key24": "WxuaCBGUdf9LUrJcwRjkBKHSPwcb53Jp3jMPEMgvcfkstwK9UxiW76dY51TZabR5pvevzgkKMeJQj1aMbgJUY4b",
  "key25": "3nSGfpgRnusCXe6NSZS2p7Ydb1RKgVg8RAPC3we6UJTD55cK2kPWaixHY4msSiUbL5sKLFVXdEBwaWKathyYrdFU",
  "key26": "9J1kYnY5xf1wVUWJXQT75t17f4JTKyRFNxiad8TpyYQfkfZ7Y4Zh65Tz3CaEeaVgbeTiGqaeTvYCU7y6j86cRHo",
  "key27": "93sBmK1AoL6obEu9ymVkGjV3TNk8WkVMYuxTjiNQVJJLtcyeTFUW9Dj6xYCctTDTZ9fYoVA86cWF4yhjnFiLWRX",
  "key28": "5a4qTh236iS98gs3ifFE9sNoFLwwLjLtUYo7DBR5bShC5BwDecw5745NGM1fydeNgk71snDkwcnhK6d8YScqrfiV",
  "key29": "uHe6K2HWR961sFGXziZ8YgxZ5ctBWcdgLab5QqQMTf9nFECpTwUvvzuDLL72QAL3v7rRdFHg45p8LBHkX2Kjh24",
  "key30": "2PbkDSVmo8kSkqmoZ7GykAomnAEVEpqMygEpWPcRiXwnV1APeebvGUmmNqitpx4hBdZSsuRf52KhLKcuDLxComvC",
  "key31": "4zmSWjkD3MccJGqUWFiuDGCNy8r5bboAVdNmCgL1u53QMDg5uDXtfmx1iz5cfxc1McBrZpVk4xdmYnwg9MHhu73W",
  "key32": "4q7z9CYPmfpSHtfcPtHaLphbXHR64Nc8XZrSmDf7VYonPE8KfuYHdXDExEMryryAC2qeWyHH4KtcPLcZ71sACfju",
  "key33": "2V1dKSxfQBYj74GWLqRqM3ZeatYwPVCZZJGJCd6E6LCoP9PMDX4bfWUGojstks6cZjdySxjaQwP4hdjYdJBoTQod",
  "key34": "mcPvu4c77WB4M7r5dQnc8sL7gAEvyjYAjFbnJZLEHLPDPmZq2sdbpF188v4ie1oENvnrE2nocpxS5m7x7dySDw1",
  "key35": "48eCEkbzWk92y8vKq4XTfh1CvFfEZmwGhYWQqSVS7ux74KJW8sRajLRY1MampRd8qXWNokqdSzhLGL8xnBw7yx65",
  "key36": "3zuYrjxbZVZv6cFjco1aeEpa2moD7j5im2zvPYeZgkG12gokFXXpusWTprPJEpsaXNGYqQyuQKV7g5w2dfC8WJRi",
  "key37": "2SkK1wbepZZHfNMRYpPoY7Jd4uqiggkp74i51CGMAFxJYJBxzWCbNyCLtFHeGYx7cRnZiFBhzqZfrubawWiubejJ",
  "key38": "3y5kN3GzFrVdgChqDZGfHWra55a4Zi1tXHVe6oxrSMviRDDt7A8Zrou4n1CxcBjXPvyhcGkCCXiKDhZd1s48vdo8",
  "key39": "2rfoXZdhfxJycs9hxRGUmR8n3mAqqw8qxPKg6gwUnUQgnAstQs1eHSug5hXzvD1ZnSXG6cHVmY5Bx1TZKvZDSGNe",
  "key40": "2NeUvN5boiLUL8rr5rbLesDc2ZbcVtDEHBKKNN4qNg7JBe9hqtpF2PjZhGEBkFREsY64vpFhBWR9gUUKsFaa2qSh",
  "key41": "5fUkgukoYXsSYiLe8g7fPiBPtorAkwbck4yZuyPtNLWaVRXoBcCQSpxob2vY69megq8u6vWgFzcej9DfZXjsrVbU",
  "key42": "59N2AtXS9wqAc1PirpLA1szToZ26s8ymfeVHktj6U9cLWk3cC1sjN1jAZXYHexzWAn8FH2KKe5Uk4WthmiyEDTBd",
  "key43": "3vn5gMnMReWqGjKABAySJz5fVA2goNzSHMLyMppVHeucQWfkxaWMn8xAWcqPoYzfY6nnXZXUDi8oLYhRCCvp9oW6",
  "key44": "fuF88CJEvviKVXiq2QYtGVPd7Vh8oLipcaXMKox4umccC7bGNjgii9YHyX9VbB5UEy7HYubNWpPpDXawwPesjnU",
  "key45": "4eZwnVxVcTJsjJzFn9C9PFz6j87C9PD4wtpa8aScimbRgAcp6w9i2CGw8nqLxb8j3v1czpuWR8fxKwoQY6xntTVs",
  "key46": "3k9rf5q5J4vz1MPMKbpNAtr42LZ6ZG4TsMaUMh26WrY9LJggzhDc1JtxPNsnE7JJcFPtchnqBZP8rh5QbqcNjy74",
  "key47": "47ZXnXRthTAPc1N9N4FwfLVuBAAhmyRSe9LyEKEVqZK5cBLErr1EoYb8UFqcJB4DkoYf5pg2ie7FSdyhxWVygHMK",
  "key48": "5Ch5vc7MoFHrMpkuwCA51WtEmDq5SfQqgpAChDwUamzyXRcDFNTDzrdVQb5DKkV4vSu8QMhD9saiuFb2QxN9MWVU",
  "key49": "3nhSQUt9aC8tVCmwX3bpKFFZf8gQGKRLH2zsqhSnZrrFFFyqfJKmRJBngYFowvkhhRCB1RDnZB43tMcxCg9vrQ8f"
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
