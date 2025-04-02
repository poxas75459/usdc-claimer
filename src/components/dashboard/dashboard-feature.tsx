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
    "Y5bRe6KDLh1mNkTYWZgdDPxNjMU8ZRes3HwUfQJqUBDEpfWcuREn1xPrFngRdKkPU9LRUGa8DiaoMiSTmrSE4fV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qGGH5FuukcJ9PEnkuHniNorGZD7GV78vQWkdaSbidrD16b4MGvEs9jsEjPD2moE8DBmqH8H1nTLdwhbY7Cq2L7k",
  "key1": "3vy38u5r3d2KGonuiYeW4s6d8ZSeBvgNDFka9o1V52EPFkx59ZzhJTead3nFFmJAieMLQXCzJ3DPc2ejKwNkoSBt",
  "key2": "4pa1DSMRkEBtUpnSzoUoRCMmBySmsv5a85sCG3QN8zBUGTZMiepou3iprYGz5PfCKrCnq2urdRXaMyn3gP7AjH8a",
  "key3": "4wLgugKx8eSj9nKp21pzzJPknGj5YbxtgFgrqQhZfzq6HZaBzoX9jjxXUooKmKLHZNB1HtjhTJt4VUBaLErmHFWB",
  "key4": "22kpZMnnriNcVYY4TEPhJ8o2sseQatxBMdoCwLXmiSbDic27aZNT3BkNx3XyQdUBcQm9jeNKeKKKXxKUe6FD3M9o",
  "key5": "4sapAtScWgXhb82b8DDQ4uCwW9LPaz2TghAifmEnF8Z6Nvfgn4WzbnAn1uJYmr4EdktEGd2iea3bGZC1jVpXA4Bh",
  "key6": "9Jy26mLp7kNkvuJpjHGXFxxZr214ykNmWCQQ7XxaoezUK6gomhTh3tTuAZq854cxhV6SGJ6ccAr5aV89h2qXk7M",
  "key7": "5LXPm9Fyfp6WVN6nxiGYhkQEMZAfegJhsHA8SqhoUFRC9Ar9tc8T1JtovpSmkzv4RjxhMR9X8pSNTUx4rZatPeF8",
  "key8": "5aYhiNQ6Dgy9qZMDj9F2CW5evLktYidV11bLXjpEHinnUYHWGLVqKhLJFEUGwgmfgHCTMmAxjgSMPSoQjDhCzCPU",
  "key9": "4osf8nh56FkYyauDanRTYGf8CakuqM1mu2k7GMuDJrwL2ZD63wBBCpWo7gdLNkStuNvqXGScbu2iEK7FPkbEA5aj",
  "key10": "3cS6xg25e9xVQQkppbTk1wStWMiFrYAZUGp1AL6zPLPEwakisDpa7MEsL3sWfSkYh3GeExPVQTeep4zao66bKBry",
  "key11": "4sggWCdHa4qijNouocKasGwTkNkHEf3Qug85A7FZ6pjunrZQbSvQzubGpZ5AEJ6kcXBxt4TrUdcRLQ4uPiMj4V3g",
  "key12": "5yH7T3FYUhMXmbjstHS7Lozb8EreHokKp31Goqs1Se6gGZdxzAkCXr1hnztZ4eTHHXk627JGf4uH65yh6He8pwGp",
  "key13": "SSwfEg8icbxeSwKY4EgNXUVCkKRbEjC9eGZ3SCu7YnrdMgmy7GTECtwpDksC23R2iHFdsp98YT9yHQotFHRggRd",
  "key14": "3egBYXynah8DzzZCYWhbEwJk8uVXEfbHL7ziuReMkwC8RokuMbTu1CgUhiKrdratqnGqWRVQt4W2epeNS836S3fL",
  "key15": "5tAZAv74vxUHkKcwSoS6qrfMXYZnTdwkohEoiSDCQmgkzFbpqVzn9ZN8zUZUumzmzfn5Lb8RmhmCQHAwrA2kvwZ7",
  "key16": "4K9bVk4F3WkoSS4SuGpz6TgTYJRUwW8YFtdtPESxe3EW9QRarE4Bb9HrvNqUrBCrPhkLdQ48B2UMUdCmfZw1ZZ4A",
  "key17": "3eJFNceZ4ypEpL74uBtbJ3f3N9w4Gx4jn1atkd6rGbHE1v3enD2fvwbwXeav9ZvFPkLRcaKydif2qgnSTEbbuxJ4",
  "key18": "3GnHbABCbUQsRRgNRaDyLFsBZhcJFpgLcdwYfdg8VFfruH7U3vPkQeWjJ7eTm3U9DgQCaYZqUuS7X8S3LpSGiSSb",
  "key19": "4GLgWDwC4UhZw78eUYXTSEEH4w9gwrRMedVydXgVHRaArFQjDVx7WgzDLzvkFoZtV3Ft7G17MqpAEwhyZqrPg2NY",
  "key20": "2gEsZDYZFP5ggaBftnQDf2RD32K96MVxhgHNE1AsmB2kdchvopCMfVuGWXMkp9QQSwBapnJ82B8m9ospMneCnvMS",
  "key21": "67bVqPysm3vxtbagCASLXKXyYTEs9hU6fePif2hCcYCNXeAVPiVCnX7oU9zevV75NHyYqCwVMu4sLvVVv3ZBeg5w",
  "key22": "5yRGXtyiQWYvzZanGavTixi1s3oAre9xDM9deozitTpyqEqPxfLMvXoE5xvL7oRTxRZpeXqdLz8aGVC9xYsv6Lgc",
  "key23": "3YAWBi3CTwfwQnpd22qrHPR552u5ojiwWafFmtmrHJyLMazUeZAfDEZjLzAteqagjR4JhEXmYJHps1CVxLDBGq7Q",
  "key24": "wez4ZYes9DmyNojgtA6KhP6XDUVBYtTGBv4xz9uwA8avcvN578PccgWJPwg1DGiyZRHsMBvFfV4qTw6RjAjcwVX",
  "key25": "4cnWo4QKBDiG5NoKS8HXKT45YpNqxE7M4tgVifGquJALfcVNpzFFxMguJgAyjerQ1YLxm4eo9aJgSTadgkoxfyAr",
  "key26": "4BfjAHYByUEzZck9Pgh9XmtMkKEWyZQuyMLpSWBfdmPMz5r8j7mHmsox72enxECyQaATSiyVirQhVGKFWCqemEvQ",
  "key27": "5Crqsv1GhhLMpSZoudBLXptGkGuv92Jr5JhHKxvvmPjeugkUQpXFjxcsTQrNHDcmnk2Wg7526aZJmz99beFYbgfE",
  "key28": "WukpZZs2ebGnjXRL3M8xV61omXRiR3XhB4XjUcQ4QQaunE15qc1xwYMyVRHFT9KrnbH2j3XPNY3FXeB7n5hrKBG",
  "key29": "48iCYPx6bpWQVZS7hynw4tRhwyDh4y9gPTYLKfE9BZwyBxJJpFFrEUrEtoxdRisBCG1gk2PW5r3DHCTwDkS7VF1w",
  "key30": "4sU62uZkdXbFv9orUzmitS8HzQ4SpDANWcMm2fensw3xCjfEikmkbtTJCjjPk3oda1Eob34c9AMoDwmk5bgtNbKC",
  "key31": "31wSfx8xoum2ThXsP5R6SGpKLDGA9yVvoZ8eNSLqLFut8HoSMKgAHRpmBYYkkBSJeLyZ8KTEEAVpY2BRiNtiHBWQ",
  "key32": "2NxEsmssc3Xr7ewY5z9wT8Qd1WKu45cXFAeBYCoDff7WuvR21r1LUfNRoPMgK3L9UVBLfnhQeMXkehdwUj6NzpjV",
  "key33": "3QbSJobiUTepzkiYSEzZQ31NrStQNJBJMofrmTDQcphwpyJyGH3WzWgfu6FTxbuq3iycyqiok4QeRuY3kn48Zff8",
  "key34": "5ur9jaW3eA1YnE5yyCy1VHsP6g7BQvJkMwHJiPRXGrzHXY9JBcLyooQ69FTuhpXfFF3xuCPJ95Wefip8xjtsdvzu",
  "key35": "5yKGn3BLLCdAEg2MiRLhAM481GX6if4G9Sgrox4bR8agiPTdDN8AV5HbUMxbCnK2HQBpbkmR7y5T8cZyje2dFvm6",
  "key36": "5CijxCqRUSQaRzrfRN2KKV2L2RZZCZbSaJy1AbFwCAK1B4EeqSPD4YxAuV5NCacTXYojhaPu1kGXSuaPk6G2S1MC",
  "key37": "3aHF5sYj4D5GFBGYSEnguTTizPmP2yhL7VKrvskxUWcpoKfTcMmGeX21Tnf8tmw5CbVPWi3CK5bTKnpsjYtGD7pc",
  "key38": "5qWSCtJzb77bgZz9xfLZNGtQGo1NtsnDiTNyFZHaVrF9HthnMH4uHqmWQ7gdNHrRtCxWWFoDFbHLeqQ9y4uFikpq",
  "key39": "2dLDbGpt22TNPgQb9uT2SdbQQf1CCvWbg6SvvknmdvuFDTQPSD6sCnkv9xA2WXQBfYD7GX5vaphVxHca8aiGQZvu",
  "key40": "4HriakfKmEaE8BEQL4GkR9JxEQ9MYUEKGave8U1UW54FDcv3weUcL8815MLiNG8kem6XVPzmd3E6VcmVGT2ZnuU7",
  "key41": "5qXk9SHNx3Kg48zw3qY4KhJY5YhikZcyrxMCCRTwFSVK1LwC5c8aTAe8WyvkJWZAZrvSH9wzwef6Kh7gxHHD3taP",
  "key42": "27WJoTcD4NCscdc5CXt74MJXoLGQktKQ2E2agmgD5CCQAbsWs65tcSoAZPAj4H96rqnvBYeMbELcmPQ4Hz6rtJiw",
  "key43": "31UzUnymHhBmwe3DF1uP7fxQXyKy3jwKSQm1A7gvXmYw384ZVrN7oi4XdUuTGsUhHWZehRQsQJ8EsgNQAHRdnj67",
  "key44": "3VHh71xjcKgF5QKHqT3wXHDHbta1zo7Cgi4ijNnCDEnNASeJqTS9Lyje3dAgiSse4pQ2Lf5oY3DSuhieRg7SHyi3",
  "key45": "MTAG5AfqBkXQVgQPWCa7Vb559o2Sj78W2mvLpJciQMfcZfyZpjcT8DApH1CV9nbfJTByZ1Zh1qvzuxkuZ2uaepN",
  "key46": "2V7TAZykGeFGbrEaJJn59WgegtFVwriB78wCThZRXJGdPyU9t6mxRyYKsTbNZaCpbE3xA5v5cYAzmfvYtMyTgttj",
  "key47": "5uDdsqheTQnp8zJjjWNKWYtYPui1j3meGsinGasCZ2bfMfmazoHmMwtM394NXV6vMBjAPpwRSxTbsJX8EtUNWKT6",
  "key48": "PwHCDsAr5R1xb9twMkHhbEdg3GJciARCqjcGYmyrWjfCvEgK1SD7eCLLMQYhsuDDkvR29aKEn5vWGVPBzrPtDbW"
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
