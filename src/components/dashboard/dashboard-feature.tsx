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
    "3esFuEnGUqRVsp4hD6QgduB6gsBT2FEzJzQq7pxK3q4PystaQ99nTq551sixouMTjpGZkbdYw9m4DNDNFrvUCYkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzAhE5svoSZZtzvdBLi7MY1tC5XkTTkxhK3AEupdqechtBoB6xoFZioRC6mEkgddvbqY8KfeQRaBEnUWqGFcZpb",
  "key1": "Awe28fm1tEpBgbnfa8UGc8ym3NnDHvqTTwryGsn9VZxT2aveUD7KdZNPGoKoEQJ32gYUH6roatzjoSXdRzLA87H",
  "key2": "3LnGbZxiUrXdHaJMTnnGyskTjVMcUkUUpuyPr8Ri64UWFbCnpbd2cacnbc2R4yitgZRS9tS8fKTTtCZAuP2CjXXM",
  "key3": "2oGM5v1oiEntYtdC1fmE7TdcvxDCn8A7JPAdfAzU6FD11f4W3YgpGN136KLmfhMbS1RLudVvYLdZv8Ef14Z7ri17",
  "key4": "5PFqdDhdCmLJzsakL13LrAm9xRTcetjM9EnBKVwGC1Q3jssYyGD3nQKbisg5cjyxj6s9TKqFRvvguFok1EtaYNEV",
  "key5": "5Jtb3HCxSN1AMxo8uMBE3j5W9CZP4Hywm7zhJ5WnoWcUXbiA1FEscrfmu7qVhRmw6hgRw2GcE8A4bogZPz4w9n1F",
  "key6": "25y4oHoV1iKzypY7Z7t9JhQSGxFkjHYuPyVP96meBtGwHak2xdBa4EQzsBgN5Fhtyv7oSwSv29naW3fsMxgtPUwf",
  "key7": "2GDTyVZ9rLfxiGpku8qdMCZEUcyfLsKT9sXnsUYWCkefMszbs9UcDWpQUL2yP6FT36ZKECoFYsSju6SmUN5gHRg2",
  "key8": "4oYkfS1vRpXCGWW2mFW9srHCdZqFz2JBnupsMSrVMo48FbD8d3zsaqSiSMAwH8yQphFoLPnoaf7ujAZrgyAdUAhL",
  "key9": "5b8K5rALJ4abcaHSn8BkxyWqH6gGMLnmTj6too9TA8cRkYMVcQ3b9nYP4mj4WG8VCKN2pLBCBbRU68wLHjSk4x2V",
  "key10": "8fj23htb6JK7zvAnh8ze3FNqLJP7FLN2CALxrWR3LHbnvnTbgkmynVzkc4EfJGDqJ4Baq7X9UjxBHzJghGvBKbg",
  "key11": "465CaMUoaYMfibYdsbnrSGPuxw7UA5w3zpf26QA5GWH39zrsUguzPcbbHMP7wmADEwNzb5n5C2QYRgy5uThjPpGr",
  "key12": "5wgCAM2pmEmwj5T1fjJkEEyMY1B1X8DvbJ5hrok7oRUpBFFwjZiHjdWCGsYfarVSXPd9y6fTPhp434c72ZPgbmBF",
  "key13": "5zfgVxU9pe7jo7sSmgT6HTxDrKXST1munQvvcVHMjebTb3FqZLAB2iDwBDojSpeMWBNDmT92w94C5zshyjN1eFCy",
  "key14": "t78Yqfp4gLq1ag69Df56jbozgLpAx2iKFMaaoDgjVGRCogwQoag5TMha9L2L54BefXXhM8CxewAA3keCLm4jGWQ",
  "key15": "5M79x8jHd4vt2UC6n5yvUcwXMGaxFnR6yjnAMxy9ZRaQ2WEU1UqzmPe99xxmjT47P56yVfTkSWWimXLqM1fhuKsz",
  "key16": "31RD5nyK4BCZgEvA517fnZAgnihVX5tyX9wsbEBdqE5YUZBb5PbmLUaeVSztd513Jv8piJ4SPAk3vFzo2zMWJJWo",
  "key17": "5rMkmbo4YYx5S6c8yJcJUb8D5Gm3BMoC1dyhXbrgZhPqY8oEBaCu6jEHzsTDuEk9GXj6epKbgoMQpLRRviiFoTkH",
  "key18": "46stZXcaxxVbikBEsGPoLNiGoRnxppZyY9xZ16yfttp3rhJbef1eGPUjLX4gP8oABC3uS68P1a6dWnoKa5R9ZFce",
  "key19": "4nxMKCH83aDzrJxMz47jVrim8uy2psDb2rLnw7QqYDQsAddfC256nLziWTKAkGQxuqz6Lzr26LX9FCJHsgh57Rpt",
  "key20": "2eb36LFbrvhXaxBnH9vaxfz5HZpbyLT81boQcUCJ66WhrHPE45hoc2CQcQbhaA227KZwJU9R6rMJm62Yu46YspYs",
  "key21": "5RNneE2ZfYv62LA8yXyhnqsrBcQjadfu1HDLGGnrghypACN1nmrGghaEUsaaMRhxGNk9mw3cK365qVqubE56RRyj",
  "key22": "2kDWkT8naq6KnMZ7yQMuswuRB4CcKphDJHifZYsp98LjhVQTt4AdDKiMeh3ja9Ej5wW8bDafsdaLzJ1mPzDwN7Q2",
  "key23": "4sJALJAfRM5mjKyBkJmD6ifQdZWF2AFCB2QbYL883jC9SuGxiF2AaFYRaSwuVE6UBm51H72XwdJyEJ5r5bGTsD6Q",
  "key24": "NiEcihExpQ3GopNp7ur5qkNqHxZVEfGE2WchWqE8e99dkv5XYP1a7sU8eA4d7t4X4c4HieACqEvdx2iYwveAR9R",
  "key25": "3toLdEcm7p15s184yP1yjorSeq8LMRdHzfSgDZRnzUjq2MUwVGCL3vhfXvTiYaRzgRE8nw8SiGrQ7q61HXZUw4th",
  "key26": "4TfPuwtUDAEXRQpiPMiVvnU2AKxGzLTKqJfScSQWdautLUg41NAaFQgqtr9kmzMekpnH2i3ySspPJ2uuiPxFACPJ",
  "key27": "66D8hLgg66h6nF5C968zfAqUf9ieXqXNJ8UyrSMJFNFfhDQ5G4h6AsMi7zmGuNPX2oTSMccCqwi4XLHNMjBv8BF8",
  "key28": "2Lj82ewAJ2Z2KHdnQrsr1ksgY232tRP55Gxg6zqBLCxmhRyZVeU9BiQ6xMc15TXwnthgimP3tY4nSQ3oCJJsbds1",
  "key29": "5EGYTmr2pwgoveB4Cco8GV2in3dYEn9XYnJXkxYimP78VnzB2XhRtrLfnnpx5PrvX2a76rg7BibZrETGsgBSyCWu",
  "key30": "2FQBcZvwcAkyk27x2PYgbRH4uUQdMKQNN8RuKv6nmCBSAE3o1jgS5Dy9AJhsWSiQbZar67USM67WUkarWdECKPhU",
  "key31": "4PeucomQfdkxn2nnfpyPfQ8biesbmzbREg8XnczEG8FKpJJjf8XsxtSXGj5dU7UNDqNX3zDp5vgsx4BLjfz8xJuw",
  "key32": "2HKTDQaA3cafgZRqA9W8bhFciAfNDsgzB9vwqAhrv8PaG2tvzyES7yVonKQN48bqit38R18JGNAikxWffdr5YV5y",
  "key33": "v9FY4b3ve4nMJpww6sjLH8GYZRTZPxDEH2yJkZNQ5tVC3ndbk8YzSQuAXZZJehBSy8aufep6f8iwZzhdw2bMTAY",
  "key34": "3R9y6yYwPSqFZF87pnTxz9Yy9D9SYWRCoQJVH4RwmrDXRSd1BgmPSMxvfTabMDFQH6kP3jZwbtpepKYgw93ZjgDe",
  "key35": "63XgJMpqTHrLh5ACS4MptFFyjCQqfynNszc94hq7PuV5WWWRmQqfTS3wjU6Rr99ooqtfQCY1iM1o2YKsN71QaF1a",
  "key36": "gXK24F4fHfba2UfQ2qRWVqFv2cMwZeFwqg6DoP3syaLDYfb1wpjTT8VEz4W8ge6NinfGq1JZhN48q5nCRQPB6c5",
  "key37": "GmhUckfQdK7vmGgfZr6hwms3FYTEmwXkDS8QEufBD9SwF5rQt5LNHDxtLDbaVXYcX6Sd24UVjjpVip2GT13dPAs",
  "key38": "5RWV68upgcYFPzStSQnbfJyhmvsdbpQV3YieNchb9cKYdkC494XingMGXke46X1zvarXg3CbPiYEXRVv576fe9Rp",
  "key39": "62UERQ9LCxPFbLkRxH8gktUwX7tAA19giBuSGzQi6t9teM5mN3TUDiLp8GsW4fQGxEfSKLEo5VgbWJ2fk9B4WqfA",
  "key40": "2QtGJc5o3CxPQtpwmZP57Ve2vmfoRL157Fvqm3ovc7Bafjk6ktpUDX7JXyyaGGwsAvX9x6saacRiUinB4qsmyg5n",
  "key41": "65QL7wXbkwYUARb3tng6zQzWHGdtnSHW656oS8QtTQuEWQFfWg4LFpRBEbTfpsuG2HX7k7LqBk5TFfdQPndtPJQp",
  "key42": "krYG632bp7QkaXC1ZgDQhGHGQ4qpcGGpnMoome7fQmhsaiSGf8praCHVYv3JawdEwVASznSMcLCnMJ4dwDWTAfB",
  "key43": "2mAyWdHCmL42koRMNmJrNvh37Ykry7d5XrceCQc4jtXYD7jd4vmrML3rUuNaRFDsj7PPBmfAZjrijBVH1nHKvA5j",
  "key44": "4LczbLSV5RmV2Q6fp3sJLhpSD2qtoqDjqX6Kuhgy1Z3fBupu8f3MeUdJt7LaXaiQxTkmwyS4ckth3RuisybsDhsT",
  "key45": "3JGFSpQAo4MwM7jJks2HyKQfoJWXmN849PaHmgV9DonwMkkj3Je1eSADk5Ljc52k1LNey5EpeCBQG33bQ4QZsw7z",
  "key46": "3oYm45R5EY9Q2xcNcS2HECacjCKHW5XRwSRns8P5omzocqRsexFuejJqZCBxDiRdcZrYg2yFMybHxhQoveE4srTm",
  "key47": "3yPHCGHXLmKcjfVKR8pbfVQhUTo3T2WsG5WtZ8QsVmwEz4tNZSMuC4kYfkNtH1R6qWwwAdH2FjZDDmPqm6Q17jbN"
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
