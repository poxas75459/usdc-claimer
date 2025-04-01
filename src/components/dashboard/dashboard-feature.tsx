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
    "5v5ozF4LpiAeMz8yn58kBcMoYfoDMBfYz62DYLXFWPx5n29H3JhhpGRaWS2R25kN3J9sn4J8wgFU8ugMMHgf9pzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32uyN6ecFjwmGwqat6DcoWxJe6QgsSb4SYsaSapcNSaavxNS2oVEeXzda5DDNpupCXzDQiAbr8gPDrkDqHRhwdHd",
  "key1": "57cn5XKY47WPUr9KH8HruwDhjuUFgchgG8bSpjD3Ts9cDg9gq3EuBsVUkMTqW43qG7JmQNhjppfSMzfNgXQxnReq",
  "key2": "4p6M8Xmp9GkMjpAtJxRqYqYooRfTTwD9zHD3NoLiiH9YHj11S7kYTdUFX5xFha7uPXR5YWCbyH9KAUmuC3NUxMCa",
  "key3": "7vnffHrcCQiR8nNd32Sadp3XvcnQZxH8S5wPRM6xYjoR3WLsxcSu5RoAyMqNdwxdm3P5m1Vr1GmMjv7xrnkCXd9",
  "key4": "2QmfYALgf8HefcURkndadJiqipQkqYkGPJei3esBpe93U1LvPRUMdAFbXRjtnS5PbXGqJNtsjxn1r14YXuCdyWAX",
  "key5": "5xPvFhSSbmnqocoQfug5WxkSygeXBs7W89nXeZQM56WYusuKLPRqoCaLwUwUJRnZfZGZ7TscGdekvc5iVSV7o9Ex",
  "key6": "4iutvGreRSGVAzLnfb8EUFrN1ozRbddhe8QVjHWukvNbBZgocWtmEv2VukRBN2vQrJwQGunaVXdnYmf4Ej7fzQhg",
  "key7": "2vDBTaMxRyDwFTszoQoteNN4QghyR2NzoNWjswzGyDbUiB4n7dqetU3RowPT7nm4eHUtgpoKAcdihKm3EZbnRwkD",
  "key8": "5sRoKyi9V13LYCKGujpN5SrKvSmkbUQ7ZkJVvL9hk5nFkQqX7ugJYJ6Jo6X2KAJ4GmqmRRjdfYcRpsmwEsrwuAZH",
  "key9": "4ow2XjqtcFWdjR3sGYAkeWzgeWS59FA5vY4FzD39qdy6iE7KYNpudsyUBxCNZ2StRSGznGnEAf6ArbbLjQXLXgS2",
  "key10": "2y2SvZjJoLLrHB1kUg7DqiZiKug5jwhEiiabnHisznKt4gBaE4K9e1mKvcc5SwiyWv38WLfQuz9aNoX8z8ev1NWr",
  "key11": "3jq4ityBHcLBE3B3PvMHmUmF3T35j5xqVj7UwFFomYxE7j9VAFQwDYwYTVutRdoiHsWKiv7Ce9EJaWZcaYknR3Sm",
  "key12": "5yFDejwzDXaJTLYpa2YcihhU1cG8todu8Mu8NYfdiTGeXzhEAaBvevHuTJMq2emXKxUsasiEQWkSe4F2NMu5LnnP",
  "key13": "3VHJyK9cFXMw6e5LZKmMi4BSzSKN4MjEv3KtAGRnHzswYUU47qspULJAcQSQtNzMqGeqDL2mErTS3wQjKt93tPuA",
  "key14": "4MQYtQBWXCVCTKT3yAeiSTk5TbFuehxy6w2VymKWmwmwSvyWre7ydEahN2UsT2Q8H3k2XRCFZPFa8M9PUYpRvCi6",
  "key15": "SzCuo1eR3TKHNm2qDUWDuiTWJEHFThktjhYEJ4pCzsnZQcuKDGQSitJ88nmVX5ZNzjQDDkXBVYEjWXn6ERkmo71",
  "key16": "5Dm1JRKcpn3QDMvBVWLsHydRcNQvD1K64VvPjGQwAiSehZ52S5jcmtqMzFGE68psiCmPs7Z28UeGaVi8mKFi2Amb",
  "key17": "iUYh379WAvayHqzN2xKLppFpu1P1jwkGNjFf93WMfdVMnx1x5xU25FQfC6h6Ktqift1NWkmE7iM9RLpGmuiCbWd",
  "key18": "3zfpwnfwFgBMX4gnTLXCWTFCRusL3mK4H45BL1jaEmRUoEsNXY1j1yq6mSWy8sGxxZP3CgQP5AKkyWGNC2gxr8eZ",
  "key19": "2g7BwDyNDid1sohRu2qSZB66Do4NM1tmaqR7dYUTnakw6Cq1SwhmhTBo5zsBKV68W7X6S8BSh7RaPwbiopB5uyJJ",
  "key20": "Sacq65WHJmDYSbYmd9Cdq5qg6Yu28WC9XYZtBxpZr2nLTknTeU31km1j2tFvgYfwBmhjBa7CmErrQsXuVrw8nJK",
  "key21": "3uPvUR7eFLtg3dxLYnDW23ziUorSG9569ZaNBYbXWKX86Sk3RvvS9i8esReehg4NdqfTV4R1EfHphEruRrS1qAUu",
  "key22": "RX2RDnBCpSQveM1zJUyu1qqG7jxS95SGvv5wEYBWC4SKdB1KLsVf6ZgYdDCz1NGxwq4s1JHjmPgBmuaeNJe1TJ9",
  "key23": "3KW9YLMnqoLq3uYZgaheNfq3ARyn9v9B3SyGTm156xJSRCwudNZUoM99bmiwXtGUUbctMKDTvKsBgpGvSycvaFK8",
  "key24": "3BkFjuHspszssZw297epCrTWHQuJeCAMhxXwup7W9DdUULqkBR9adfr8iCpDXyQ38MLAKEorzC9XmHWvkernbjDb",
  "key25": "4iCjgJUoLPm1WKxtDbcan8cweNBKZv4fgVrkVn9zvHgznvgBKaPm5Fzx5xCSFgBm4TYGXyYiePY9L9jKn2RoM7s3",
  "key26": "2c1TvNpY5erFe5iAf21MKC5eFuBYS6vqdsxf8EfLJ12fRVdJDL1KR9Ys24PnPtogygm3F8VxoyCxcci4W4dqwpzT",
  "key27": "4WuAtEgetS2hTPoq71WegRnKe3RVx2HyfKPgi3krrs3PHQbWjn7De8Zu5eBiwB1Na5cQmenYDDNBVmtVDGommrHi",
  "key28": "5Wr9c8snDS4LhhDk25Sc5jJpk8ryCxDiETzzkXsPM56nxigCSzE7PBwig4wv7XLYsx7UVq38tvThFh17i8q9BW7a",
  "key29": "42PRhzes1eQGWck1wFMtzkSvt9Rqq2vEubBQzrXg8aZXBDeJDceTV5m1ZTBm3fmrrURP4bWq6iJtk6i1EsFzJYHx",
  "key30": "66tyTNgKVvSLMrzMd9LfJHk3upUCtfdndBbgqPuwdRWPq4WdWSHez2m1TBnYnFcAudWJ58DgydVTxNBeCZJV7DUD",
  "key31": "8WiUpAvn97ouC59ZKFSC1ae2DzXkswfqWdyNc5Xcx4rJrziewVKVydoKCW4CvHgU47v87frR5bvCxGKNwfvpH58",
  "key32": "5GLAqhRgSZXZH4WeR5UhusFuWSBTpVhBAwvhyn2RP9pUrcpweHGm21S3ivGFQ4tqPfbmdW7Pkoh1G9QJkGP2gk9Z",
  "key33": "5q6qrUc3Vj57hEjgcxH89veyxMjswYVcRHvvTPgAf38DK1FT5o4M3KTuq3ApZ6BA3UHHaGYaEkDLVXLvKhn2UiJM",
  "key34": "QkpnUDv12WtaTvxx1KJFnyuQdM1aeo1Wn9DnS9NuQK2HYHquxiE6DJVCF3bJqebsqNiaC8cS8kek4LSxaZM8SFN",
  "key35": "5Vpu2e9JecPtNaw8bE7Dgcwmq5ius616BaRyoUFpMyPn5os1n1JyrVXLWbRUGVuN5A2pow3463jibv239KxP2ht2",
  "key36": "5tzH1GEyx1hoZAfUATn9WQhtdskYoZMKjNWyz8jrCQBku52nJkLExHpaHRgJBKQdokjDuC7PkBdsu2q7SWFahJfK",
  "key37": "53q94LrtWUpQGmwTuqDu1WPYPQXh2BktmPZW9AM67K4yYexmotTQEWtG9rk1Kz26JZRNJQhnZnW3759fiP3TZfSM",
  "key38": "3Rpw1RdS8ABCyLCJFPCz8hPz3gK6DpdtTCB3sSLzjtbrQ2e2de9RRZowwhfC9w7cG5GeSnCRh7cNZGzQmRPvv6cv",
  "key39": "5cjFWSPJ5L2gKBtkDbBXkazNezxwZqqLJoiE64twctHSz21avcwp2Q3fRahSsm45fDzMjdptE1RSCA2QMHffmjUX",
  "key40": "r61E7wc5cLgN5XxV2cqxfVrLwVMGrH23bTtHVt5jVT86bQEc766yfY97vt9eNem7iZFfGV1G2U7PYjWd3vTBMec",
  "key41": "2jKzxrhKYgpL5jzSrZfoUdcg7KQwNKcrgQDSQRJ12gDHgRNg19XdtpWTzyxikRJtw5LgEXSQ5gDie8MmeDLUgjTi",
  "key42": "2ZD9AVi3Ym2Ni4ckX3py5MfWymZWXfaoQH4G3ERm6snFYYLX1iK7dgzGEyDKutXhYLDxr5dV8ca371ozopowCEkq",
  "key43": "2gh8N7oAPpsw4wkGe4Uk2wuST6USkh8zneYVMABNvXGikuxvkvB5KwrNPMYLapSrzqAtk4dBYa7isjCBAPcBjPTJ",
  "key44": "3NPanT4tUpefNAPnm94cAmcpSYSsHZ36FCA2NtEVH3CHLUnvcWuFKkmvKTvYHbtQpsDZdp8Qf76YxAVqkKYePxiH",
  "key45": "35GTXz6v6b9tRC9ZLtp8nGpz3NiMjumNQ8oVVUquxBw2518gcDctTn2n1JohepzAt8DScd4RUB92J3DcUnLkSndM",
  "key46": "5kaHzU2RYfy7GGdPLJv5zQ21ZLWGRHtJoQ8ffVtW1igom1XukakvSTTDdD2D7sMs4dbwqs2S5L3Lsq7aQgmjRRQm"
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
