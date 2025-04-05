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
    "5JC7N7t9N2fHtq8mDkn3my33foFS2CmX5BEwP5iUhzX45ogUcwaAZ9Pi5miJNH5qve4YeUZguBmWSoP1KXxUuSU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EVToEiDyricb69rt9w2nc8xxGgacj7h2TdSk9tBbstW9rBW1vyA4LQMXpwVWc4ZcroSV3zKyMTgnbr8nPjiQv7V",
  "key1": "4RHdt1Gr6e44TFoMtaNRSPmXUfE27qXTps1kndfziRM5vrs7nHtDCBXLTnkwEZ46RsAo7dGUUWoFkfANWz5v1EhH",
  "key2": "4aCXG3Bwo3eCvrvgdG3shG2XrLPEcPzkveZPoKNKmCSWJCQVqCm1V3UGKxZbdqrybvu5zCEt8mKsLcNCsUJY6roJ",
  "key3": "2mVgSkBNVHpR28XDPDcF9B2J1Kf3V2kq2eS6787mAP9HkTTgwGRUfdQErxNSYcSmKrNuAjsdmD8nqxDGDGncUj13",
  "key4": "229R2iPfDyT5mbAgRzge3shEWsoYTZr7uwzseei1tTtrDgQ3tHAfQBzjnzpTkts9uAczb7dQ7euqiFTCNaCCLvU7",
  "key5": "tessHSqPrxEmt1D2UqUW2Dq3Na1fBqNDy6CTjaAaB461X1P2PDPLwZvq3k36hZkCcr8VwTMo3tXGg4GCBkGLJnt",
  "key6": "4orqFzjHdMwReCJBGYshskW9iDnyQxFaQ1iJDAzJkKsPJbYF9xHu4147Ri346VH536ZnuzQK9apJ2qnr9QLhBsUe",
  "key7": "4FWmcU8WSpARqRHDk7xpfwMbA7seBuxNYi6EigcWzYFacgPZqLCEBEEbYpFPQSoCxXo3AsLczc447cUiDJ3DxQ8U",
  "key8": "2uhUBqdGVuSbJb1WHKQGyVBkuXvZ9hfu9vANESafSMyCh1bXUMn8hUi8g8DGTgdk5E5y7jR3MJjfbFxWo8JbyD6c",
  "key9": "3fbEFSvfV4gRDJ9SjsCLWsJuQTjvdXb1XtzjZnYEQtkWbWpfTzukPZkzDzekkPukfkNJmnd2PvGA6jJLakMzEng9",
  "key10": "4AdYFDVCkezmroYt7kCwwqEAgYR66hZNhe3oxxEdCqGxPH8Bm1N9S8wx4ezZJfWWU5GB7UVzYKpopptEiBj5N5v",
  "key11": "8M2sXHZf3aqzwtrKkjzKeTMYFZA9JTyuoXukrXBuEq4UABUoLPbPF6UgdprsMgZjCo9s84WLSK1W5BWgawqQGAk",
  "key12": "3CVfvPtz2tHnjxsaZ1Qg2DPrWrXmBqd1vcwbH1owd92fPbEF57dKdxMk9Ub8wYeWTZPA3oj7GJEh7nxiLen7Rvtu",
  "key13": "4CvFZCgbJ45W3wqe19CBar3916zwyRTGQhFY8Mm88z3yyxRUzEdBcxdizKPRubY6n3BWL5uKhcZz7skJfZk7Pqoy",
  "key14": "4ix2apvn9vSVvmG2keJbBPFsCmG5U4sYppFX5oLLNXnpW78LUJSwBYW1FivABevgogjaWg5LZx9uipZMZCn5dgJY",
  "key15": "A6VAajFiZv381weZzRKRC3BmZbpMLymYD1hYAYryLfCWuhcNsjnjVFfCmgB1TVesUGWGX38TqcRb5D5Eq9CJ7SC",
  "key16": "uv5ccJmhtGgGGRP2f8CUmupyaxvH5szK53bQ43BDrRppVqtPEDZX8eWrQ7jEeLsnymRLpML7L5VmBJaPAx8H6sh",
  "key17": "4HJcfe3S5zS4JWjaZFEdKqmaow84VWYKCGjbSAjQrTjrhLeno59NS1nXAhrY4rcF5gRj53iTMQnd8CE9jiMikLDU",
  "key18": "2WFoHSaZqkjCBSPDTfBoNaGiCsMb6mfrq765fF9fxsXYK1PYi1iVdpvLmJ565r7zXvTSY5seaiUbeEtYdZnBF6JG",
  "key19": "2J3phmEfeYH5qqTDC1tDPoRNovUUPsvRYLNDRiBRDrAqE2aPcVkzayvs985WtezLv1JuQPccQ2UEbmX2DqAGaBAv",
  "key20": "4HdpNkq1JcczJH98zjvjp9UVp5XKerLiWLuzSiji89RJFeSWtk4WjGbdzPHezkUTwyLPs7iJpoWUY2Bz57eUrQYM",
  "key21": "3EGBKcopAG9QngG1pveUtkjyg9fXFRkwLF6YVRhLDMzdxSrjDPsdY7N1aLd3AmBzfniAUQFL7h78xxf4jVHf3HKm",
  "key22": "2RJ4WRySVKBdkc1cJ1HK8ucMsNzoazRP2BohB2qsdH1aE3we7EXTgiRHXd94bAvdZcq5CBtv2AYaGoSyVbZLWXyq",
  "key23": "515LcduSeDc9gMBxMY5UueyhQh4nPgpVf9gLDPU39TBHpm65VpxZ9oJUsNPuw76zCQTqnDhY5iWVeJk6es9D4qx4",
  "key24": "5jGFgftZSY2Bwq1zhJf4RmGksopco7dDdddnBsaXEg8jhApU9LFVVqrxrNu536J6Q6Hu8yTjdeY2oGd9YTNJtEJm",
  "key25": "5smB723iphqwPPcNCjYwGFiWvn6h9hFAStwc5EJT4bryQrzGwPm5gHr2iXS6ML3qdfhKMpVqDuLzjXF7dV1vFYS4",
  "key26": "42mRnhKYLKmjBDad3MyWLYTnWz15BbrWrXQZP5V1mzmxNk57cxWjj1reSLu3aazXbkbTRHT4JGfmngLfU5aohjpN",
  "key27": "29qMKBWHH9K3AfecPFKaFagkySFyhSQYhYL2NLEuxY1Ygz6UttGpakrPT7iaSsg5oJU6wAjDMrsUBUimSav9DgXd",
  "key28": "3QbZD9CJc7qRQKY5SJW3SLEXSmSzg9pXKM2ukmH8gLab2PKQQjbr5SP2FEvmTEg8VakuAcMuSVzfkMoHuajRPp5L",
  "key29": "2Ri43EFHzfSLwMiFM1dV7WGfQuB2kQHGHQ2Au4Xgqm1iuJ29WT7hztnxB4HcDE1A3qXy7hHixCgkRCV7WqPvTu4e",
  "key30": "3K8GHrHuyjJaphg3ib4cANyjBMArgHWYjqUWXTTbFxaLHvvasktw7MLFr8nUsLWaVgD2ZAsR9ePivPeFes4gA6E8",
  "key31": "x2yJ7jj3cBc3UGbhWPYDa2KsMNyQoQPAJrJot9sqDGrvUzb84kz6Y4syzeZJds2nmJsjKJuwaQntWtz1L2LuVTn",
  "key32": "4L9T2y4H3h2JPvcqY1vgUUJYKvUgzk39ojgnmE8vmXsexXeQ2eQA16MqJcThTt31g5aufXgw56WcAUTsV9UEEinM",
  "key33": "5TGDFniUo1WvgefncPAhwR7gcgUC7uhpanzNovN26pSRNUN2iSYGQV2hyhCPe2ZszRMMuoCXZp5S6V6QAqYVMJ3u",
  "key34": "fXWHwvt3TvR41YCBZvqMre7EomCRuMmTB9pALTwjcK5fw6g9UmpWgZTNijibAd5CD9GvXotKumHETDGZvXDgUi4",
  "key35": "3aqRdStKViLxL3ZQqX7AwJvaXguxKWv3UGMHrqK3HMWuy9vMMZu7c6bsoEZriNDbXQL2ekxTvUNnLjAMGcJckMQa",
  "key36": "2MJo4SVDdajAJ1gUf7VF5ZzFtLzNwccz41GZoM8xzpaagVXhTfXe95oZE3reYhDV1btX2gDVLUye4fxb6ks1ep9n",
  "key37": "3kZPBQd6g5Kthx7a2bydsHG3M6NHTgXdpop93aTQaRJ7USfVhKp3gwuAroqDwNPE1rkkDry31bveF4Tst2wvYyYe",
  "key38": "5HAho5ZCeoPmUyLTJU1KQSht3RJHARHLviP6oVHovtdEqkZA5pgLVpyFc1mB4Cj4f7eDv61gc2pUaFvUGt1LouCS",
  "key39": "5vsZAKt1qdUxmNmokt2xTKeyoaGCrNDkvVC7bRHbQNoDZT5yZS4zdPP3cw5Kt7iZJvPrj3jecBTyp3KzubrQHs7w",
  "key40": "65PpguXpuh2TUqqDRfGE8AtRGEBsWfc1bzp127Up1EofLAUSgemsDiTB7UcxaCPTuw91U1mM93MukVcU63A5q2Go",
  "key41": "3U13foiphCpu91NnCuwqMCNgRrZHcdVhScBBZQPGRqHTqQDkvBAEQhMDgBQZ5W8stxmPDKoFsqCNZ7ZCboBxa5K2",
  "key42": "4jT78435P5JTmvQNZw24s1qFK82T17pGtfnWUpfPc2PGRqj9ffeqZdbDRwEDjgtKgKQJKbifKAjZmykX2sfHNrNT",
  "key43": "51tGakJox4QeX4rup6djTxD7w8ZVNv3AhXC78PHLydMQ1ce56TYJ65YxzGPS76FmYgVBNpjdjuGNNQzaHsuj7TAs",
  "key44": "5eyQVk6PG9b6dYAErMT8hsyS4QqXG5joCDd3BbQfo71MbkRduyJAcB9ct4dnkSfVvRrRois1SSEo9oncfPG8xSjm"
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
