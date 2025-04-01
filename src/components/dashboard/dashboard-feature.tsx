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
    "3raXiY8QnCA93RJembVUE5Am939pgn4grXDAHmaTZ8T4zSQtfYLhV2pgofCdxwJZH6aPDY4YVP2Qngcz4zPbZobL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nCXwngs6gAZ6sLhQvhEv7BFeoFs2zDZgmmhu5fzkucZBge6Vu5rFMXkgSRrsfCXWhH2xKSqAHoafnmAXTFjYerv",
  "key1": "3VkGeoFj2Rv2G2ywP4BJyNMEWTx7Gjn1TgMgDbsoYZHDNbreVHQyqKCXLncueoMEhpxZcAkuD1SobcZqC37VyfLi",
  "key2": "46Bgbr5QxrmGuaFNRVzkgXB8NuJREHB4XtRaYvxPNX7yfepuq2QNC1sn8SyPrvjdK9EJzojRZmPmuCemH9YaU6jV",
  "key3": "2SCYAR5SSCv8Fy2A4ADUajH84RA2mHCkdtxPMnmVnwpUozhNQyrf9i65qHfPY3ephLNMaZF5hWVbtjHpvnaSGEki",
  "key4": "54fK586PEH7D2j4wNJMc2PQ61N2Xgu7BArGmb6A1Ss9m22X5ZW5PPa37xA1bznjqkYwMmNnrF1LJZczXRS8CvKXU",
  "key5": "2SyKgLmQSFMsHBy9cRb8Ap7mBxMiaL8de9bciLmvGMwGYn8YBYe6L8QsPvPrKW4fYJ43RiWVNP65WxEB2JWmNkZK",
  "key6": "nbpn1v6pkAPgnWcC5xgwh2UtEMn9osYCCbqSaR9VvEx12Qtu7EssQyKTyTs5imrTLxZRUPpc8ZxUoE936wLZfpP",
  "key7": "x5y2oa8rprsLwr5QKXT5CUZegJxw57UNkZTDo3xLq3zWjwYJPw5TArq4fUpkGPALXNxDmoqemKGTnFHVPeLpE3M",
  "key8": "58HVF3HusNzWrcqZSaKBnzxsyVXvsBuqTpqnD79PKdFwJHrHveBKcVchj5RTwCKxWgT8ekvx96sKGEnYsMvr4h3g",
  "key9": "5anMQXizuRNpqvshWUnrzW1SKguXJTRbAhCF6PshUaE7E4r8Mpcufpm692AfLKLL6iRF7q2TYkEKFBPufdQrWGaN",
  "key10": "4qtsmoUJcrahZaFHYSBFo5ZcXzYtW3KpzqSYCCPT3FdSo1SG3aTWxQ3xoWSKxAqJQzAAJfjnTFbMPSsTK8NeJHWd",
  "key11": "51KVBrJL1f3Umt7HRHQunsKXfA6Lz2jSTareRQ6LtfRiuWetqcHMsU4CwgZdzCkpmLesXpKGvCrwD4jhXUbcwMGW",
  "key12": "2JiHVLSUeuF5aw1LKCxne1nvcRnprGTAeZ7oTsucmLtsTzJjSCuoWZb3HJH8CRARGLapNVZXG9m4kqSZ1Sp1u97G",
  "key13": "2jZD1dDpu3E1KZJZ6fNvKx1zFh3kUdd1Zwgy3Th5Bze4A9uFukCnD2L9sXmqoia6GJGguTNVRPggHJrMJxAVyVuK",
  "key14": "5uWFnw6W9LoCwrT5uqKbjJtVhCFzViSfutjDGFYr4DnsXjWrcyurP72WfssjDfyWbEJkgyyKg3yGwoPHmJhxmGbP",
  "key15": "25g419etQGtjkX1wqLtXdn9974FNKshP9CzPrZxmbuoHHfNpbupBy3AjnsVGcgQbfu4ymSkFPDoSGTe1UyXLq6CN",
  "key16": "3duRYjieVBKmj6CecMJwyKzUP7trJZPaypg1iix4B5zfYTQfXBvtUoBJWZJcnk33VSoVVMa5qW9Jh939SUbeACny",
  "key17": "4E8yB491NVxZDrKrk5rfFuZsqv1zNTRs9zYLwhNhWWunJc9Dt21KXMtwNuxPzrbZJ2HD93zC1sykfqCxUZsdXi4Z",
  "key18": "2559EFC8mkLEJRKt777czEd8tMRA9yQsJqnD3ZUUJSwirJrWFKJRUNotqACRRnBvuKXFWdrE9RexJoVxQQcRmiY5",
  "key19": "2aDxqSwCuNFhhPPwSh1MEEoWpdcHUoY4ZaYCZFEQv4mbA9j2HGudr5zisedQa341GGPua8wdRfF5Z6tubgPsJsc5",
  "key20": "2C1bfMmWME8yTENJ54qwQ43UdZ3PgmBwhXuWbPNRCaVS9FsjuZ6eFr74CGFGZMsyZcdJrfRZcaew4XNXwsH1WS5x",
  "key21": "4DHMNQ7EmEGfaTG9fkXTZooTuQzmxTzX5VVfbnAbuSHmM9mf29dGhAawR6eT3pC38uFe6nbpzFpxTzqyo2dShQLw",
  "key22": "5xpWFSWfTYMvMs92VGJmC73Lsgc4kQ87df5eXhhJgWiDq67nmS7WDCVAvGehXceY2QMidAe3jaZ9Ha8CHxNUzyL",
  "key23": "2HZvKNiDbuvS2Ba22m9wXXwcyGrppKQ5i14dkRSQb47td9nDTWuJdGEdGHmPK2n6TtdMWzwUDv1vZhoDevQqhU6Z",
  "key24": "3bchopA2avDpMv86nHiztySefxw41bWpixc23FZsAtSHzxJMZuKGpm3Jq1PcUfJX67B1fwfujtamDGuSDrommtXW",
  "key25": "2xhoJNZ1izvuvc7X31L6fYSX5TgHzZXpxZbxdHVeYSrk8M4YdPeEzWmUzHsQebEoaUrKS1kJHTRJyanF8D8fd1HE",
  "key26": "39gECS4Tc5pykUhUpg8GBhQnBJQyzSabBSGWJhfQGJ8LMjsE62iUZNe8jFBar6xLLgsmNErgdG8VwzNTZn9irgYB",
  "key27": "2TFNjkpniGvivWfyJq1uZY7DdZqjZrynUXHfNBcJgYi8T2uMgi5pnN3xmbnz3oVnehMB1TVxmsPD9Drv4ovL7XmH",
  "key28": "5xVMECvj6AxNvP5U3KbwMAtqqjA8nMCHi7wWrLWVeJY1ThxWdK2SxTVPthhKCmRiY2cbWgPCGbMP6YuMBxcqkZBD",
  "key29": "2RkYBnDAGx1DghLF6N8GjcCr6vcS34zj8GsJ7naP6DY7kbvtsJT6aUxa1Exd76Y21tpChWRMmdqFc4H8QuUmXJ48",
  "key30": "4uC27BuzgcxQrai8S6hD25g6nqadk5bqw7H1JJt9NW2cGg4AqR9meNDzDbJXRABQkaM4TKhFgktFWqjrPsnEhes2",
  "key31": "nr31DUx7U4rfzBPkNRAXtXRMLGcgEnXMvJtcmaj6dRGoWEVsjsCmoQKMczzaTpYdCQPnSCR3y1d2G9ffQzMx1mz",
  "key32": "5sKkBVXaKLYNgGfNEkFXwyFeynmpEHTtwXTMmXC32kNffiJgSeDs5HjPhcxPLjzVtFyPqdKnhFo54g3eTsTUDejf",
  "key33": "4hDAHhu9Y1BAM4Awq1yUm3oG8Jwfox3cxKSDTwJ7Xm49pANCc2v87svxYQPmZnwfkapjKg1sKY8YKoGxvtEX5FLw",
  "key34": "2g1U9PWoToHMFbFf5NM1pnDLCw1d6NgYuqtxDLRxeoVrMe5DyvAzNLEYGBLR9eSvPhhyj1oAZ41UsgtZtqaHBLtj",
  "key35": "4d8MTc6fe6gd44oFyzxuP2Z9fFfCeFpzRu6n6VGfx9umsneg9atsND7Q9N5YRQrgNik7xj4UvZotNsD5W2ykryw1",
  "key36": "3Z7eyc5G5pY2UY9WgodTdTkDCARUifwGPjt4KYM4JiXNV463ULNwAMtZwEP5jxdKfZspCeqwWfAqg4C729ah2w5t",
  "key37": "4S7wknGTcV614j8Hkevuz98x9q2Z6VevbMmmNmetfBtioiYYfv2mYwZ2gH6RnBcxxUDaKZD47F1DtEHeyu6iRM8R",
  "key38": "3x2RA8EZtpZQKJmqfiqz7G4ePwjiCLKVAjLJwVeB2w7hMMPiwRCLSCxMd53dxcQ5LRwB6dLQBG7zttJFLetQbB9Q",
  "key39": "NJd2hyXY25Ya9VVWL56DEY6rwATbjGV6rnNXCj5Yj5zf8SjLZthrUCo2dw7PLc2kVdFKUKePXJhR25ueNgd3wTc",
  "key40": "yCCj2osEnZ7wnNCT2TU2JyEZNNzJQwfc6f73KRbLAVGRVBpZ7nmb5oUWdJcTNsuna1Rh5B9P5durknP9CxtR614",
  "key41": "5td9YcukCo6N9dmqEr4t1igsnsPFVTyRHW2Aa8Ek1kFFLoLemmcVEdMKmmWqx2hAQESf1CPHg7McSpKfTqKtvKqZ",
  "key42": "5SNEhrm7fiMzhEwTPWbY25UW9w7AjkFKYUYy5qjMpTXrjT3jwDmoakD7ZywHcBAEqesaEnmM6Ka6dgf2pXGc2yJx",
  "key43": "59asNadFFcgF1mFi754pUVs721DVSCxA2rK3pQzNeJfKodbcn5LmcjyiexC9ZyLLM4HNySkEiGp8wK7KjX5pKSmQ",
  "key44": "44rQKi2Jqq5nEcyjx6DRT3Ka41xHWsHUAwWcYAgKPWZkXfr3HQJoCdYXvuXGb4at9fWDZYXxct4VmsoJzz4HBSK4",
  "key45": "R6Hbmf5DuNFoHtKnLePhhNtXaPyCQ1629f5vsV81E5ZWB4cNNWJB48msNvtx1EgosN7CGSBbvvHjK6PzpskAv1F",
  "key46": "2SgQTuUmnLqTGiJ3D7dAmmqunroyz5mJhgPfAS9iRV7PffCeXASVgT6DS8LczGyd4K5JthYbjdG7VkeyncD2p5az"
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
