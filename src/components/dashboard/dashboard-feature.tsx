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
    "5drnCovsrrNp2iZaqKCLRodZoDMgT9soyfa2v4cEnMtAd9PW9G26XwtgajQMzo8QVSXTNSg55jm8Xecm5ah9MdUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2677e4qR2JbypKDR5ZSUgmDPUCLKPfBvJbw5gk91y84sgMGGdggbTLmYGWogn8XVRPv35P4XA9893EscM9tFgqNG",
  "key1": "yBzdwcmFbBzxJv8Tqzt3jopxUBFKmJ2iuUkg8xLrESrMnnhnaEp5m34v1GMH2jHZJD56F3z6GSpNBvxitBoVddv",
  "key2": "2hKc4hShXKrYGGYtvKVTmjerCqezZmBXhPsyX5qjY5b2CWD5NVHXhE6gquCT9t8agXQ9txhAD5rZ3AxSkLd8aHdH",
  "key3": "2cSm49yKAvE73HoAKmV6L4JAQMUgvaS1DzPBzTmdhEwMiyvka8zFVWhMEARdsqKMrnG5SgrVrEt5msghsgE2dxwS",
  "key4": "od8gbRT8jwr5zFLW74TzpF91uwg1WMTBZn2UXunLY4hUh267i3VD7J6iUiiHhhBTtf7nCYQfwGKLxbfuF3Tjf5N",
  "key5": "51Koiise5rWdtjqMeW6vVA6vjXta8Kp8hrh98Wxa2ruJREabiJDvvdFS4dLBbKTn95DiXvMjGpSBNEgn4gS5bdKs",
  "key6": "4FM5qmVQXdXhhuWbZww8byn65uH2DF24kUQ7ai1938bP8uZaT8RYTSvaK3ajiAinxP4PgYuUiuDqSNkivcn4cqno",
  "key7": "3YkGG3W7QV7SnJjvHDSQ94WziE1DpUvddhNPwnWzbunJ5fkPQmHiXapApoBw53H4keHF2AYJvRHhoQdnLsvAx6dW",
  "key8": "aYZPP9A768jybSpidMb4NaTB6P2FpijCYCpK2sPwPStrRAL62E7Rex7WdHzwomMiySkNxRJGwfRswDRrJtdtWYK",
  "key9": "nfxS4Bb6QKxkmWk2hCzhpDa3Q6stYStoQrsxaxABXeBTooFCoLf1iDX9GmKQKBHaYUaw6Q2fzHpUKjUEghYGmAV",
  "key10": "3QkfDVfDMwqmsGRVzsmxiZzrW1AkR3evYy9HZeBRxm6xrhrdkcmdKRyuJTPp6q8Zgj7Nqk4TuLE4CxcEbDsCGcbQ",
  "key11": "4krYqSTM7CfLX54rGEGJdAReanDhRkJksdDymqZPUq98W8GEgP5Sxz6zr3vBk3c9gzyWEEz3Tv55kBbCjj5zLWA2",
  "key12": "62F4nnN9DxcXbikhPYRdip6PwfFaKZe9985no7HoC7Z94ah8wpHYMJve5X5q7CS7JjhRCHnnhc7BcQCEQPfc4PE8",
  "key13": "4NmmXomxGbeV231ViL1eKpYv1KcGThDrH4vK8C5uujV9KMDaPTuujN86NWwqWn3XkbFLCVMDSH1QnK6WvepShoP3",
  "key14": "4EsyivhZkWgABACxmF5LRQx7iRn7AsZ94dJADmMEvzjTH7sdUZYXoGsMgXp24Hgw9tZ7HQbgVPunrX7zvaKGoNcG",
  "key15": "3PpXRuw1HfFfdnfjNgmNuy9jQUhY1SLgcUR9k2VkhE2QFDNGYy1tbMestm8qbLjdahipHJrWBy696Xs6Yi5b6XwV",
  "key16": "3SqNFF7KrJ3pAdia37fuxUsWv7jSWtRjBjHe5S82hYZ34iPP5MPttdRaTmSrxDxky6SDoPKFjefUcF3nYnaobsUD",
  "key17": "4c7X99P8kp3xgWB24bdtCEVN8ENUeG71kTb2yq4SsSK28WVpZAKAhHk4kN7E7nvNBj3Wy4N24uw86WtJkdS7Az2Q",
  "key18": "4S9rUhyjfVvKpCc6FvLtvtb2r12Pg9w35qC3wiKmpDB3VQ8VQPfTETPqZR7HcHoVaMvSNUBXZANxyEPybK5v86xk",
  "key19": "3D5WEZYRoUeZh5PHEmRB51Gd5a3Ddh3FYrxf38bbLZRXSmz1822sLb39ApGXxgSUazUWeDXKexqk9KnFHPU95yc8",
  "key20": "5ZKcXL6bZuV5TQBzDY438owUyMcXPo649zNxa9gNab7xhje4D23o9JuzVRQ6CijVvJQs1dqA1Lr3Wj49sJ6fYS9p",
  "key21": "3vHf1MQTkNoxR39eu8gXJ2HMWMCJ1CrKDXFqZGUSoxARVHVsDXpeSoeHbppJjkWqq2xGkAoN6fFPGbyjLo62jMs5",
  "key22": "qzSftXBZfDAV1yQJEjHUVXVQ37fmS5s84NQPav1cPeg348nRXCh4gsFLJTUkugZzSWEY9VAgh5fe5MjQefN2jDf",
  "key23": "4xNfRihLoVex3qHsTM6jCt2MgtuKvShWXezSaQNi8EL6uYjuQrNk99JxY3D84AhJkZC1AbHmzcDJzAqEBDvCCWcG",
  "key24": "3JwdDutLi1KvbQAKbDeh1Q1so7tJJd7J4KbmjKBbP4rHSkxGmo1FJucjBcD5Ymy7R5FdL38BWJJKjvotRnBbuFgH",
  "key25": "2V8wY7PT7BKc2n74F5kseiJjBqXBjMrgYefW13D7EAiGS4pr9MVQmRsf1KXYhr8ATh2zd91SjSvZztu6KYfUk4BJ",
  "key26": "KPZfedrwkpUGkcrTf5awrSFnZ7sNmq11EisCF7J83yE6brimQiheummFV81mtUfDnvA2mXbs5v7vppm5gqNkqTH",
  "key27": "25wPhoqPCDK8W9duJpZbo44nPvMxHgDHhefECF4V4frDtGRwiNPrJPM1kiAWzS8JV7sVegM3vCHVYvTY8FpvYSji",
  "key28": "5aWF8aXaZg3p5QgpZc3XUBsFG9r9m5iCAdNHXN1HBACtekxfzCDToQnqKDoepdrM5trg1DVDoYK2KheBDv7hdehk",
  "key29": "4vWokCfvYrR5QLNLgH6aH7aHkD8HUyXkpvxbG7SNoaLBemoZHRb1L1QatxdHSMyLud4a6CyDApossWCF1S33pBLQ",
  "key30": "4fzGFMFmfK3uSoNtq5hD9pHuFcpB6onuYGWYMQWB6Hb5Pcv9Zh9XEc7MguZL5LgJrSQGa6HVCm2HtWuZ8GWJazxv",
  "key31": "2NvJ3FCcobJgisFWbZqtGnwJE4sRoTqgiLJGwzYjfeMdyrmHk8SLDhXgMCemt3y2Y9FiXrKSt9wYgv65HoE9UxE1",
  "key32": "GsAq9R6WxT74WdRwmb1TArEVQEfZgkRAgFcJ329zKrjRUG7dJttjLNJb4AiutYxYaSh76cXphEbfh5HSA7j8Sfe",
  "key33": "5Hn3ppVocdP7iN3QpHfGnz1NMdZjNqAh3RVo3ZkWpMgRLgX9zzeB3NN5cNUsA1CyxAtDJX71iBUqDTrQZhj33KrZ",
  "key34": "2Vhiefzuj1869Rkef5xzEAHMkujEqdrbg8jLSswaBGzkW8cfVqbjzYcVsWSKuC1WLUE2gzJ1xRCwDvBAyoT1xipe",
  "key35": "kZjY5oYbuMLHc8MsuyMPKiZw3WJJ5RZHqu69LN6ogckbCu5GKqVWyhDDWEULccCG2GDbV581xW8WLD5QM2hW7Yo",
  "key36": "5YtvdbvDy5vzkqLin4MNYYVG8iT7WbufS7fBNJtrhoboxp5ime7M5XeUKGSDz8h4mBK4HSFEFHvTvL1GCoADFw7Y",
  "key37": "2UscU4CBTXK8BnJBCFq7ZWpDn343qoDwU4gHkvCjXmpkncjrc5b6uo89Y7CMMxsxL1NuTZiSMuJXqwpfPJDDi6Zo",
  "key38": "34penCqpadd9sZYhydiaFSXG7GVrdnwQqfFPncL6F2wq1r72JJpwnyQbchvyd79peNdupuZvgxXVGJmaHxwCw9aq",
  "key39": "2PgvuyVjCtjV2DhVVQ5nTcqb2vGgJNFJ18qCp93k9D7b8TPy7rAiRyXsgwH6qsneCpQNhvYdTy2X5wNGX6yYDfoX",
  "key40": "5Zyxi3n2na3rU8BbpxtyKUMzn2Usq4cEcpZZH7JaqszYAjYrtvcm6bSR4xMn4mEKkEhuYJuD2CNU3fzfCEdrF5RC",
  "key41": "5bDER5DuXHWzAZJ86cMvJJwfS3B3498cTAYNQBeusFCMPgqL1mPjicf1yU2JvwCTM2c8aaNveEjENayMMXDoA9ow",
  "key42": "61iTKsLPsY51f6Lw2i1sp7ytgFYMnS9UNHnTkDZprJoAoHAbrMCxc6iLeQJMmFREjWfiqoi2ni1kRfAziFVsawvN",
  "key43": "3aKwDnSTauqeU5itHdvQ8RxhfX4FVm3mVrL89TuPR8miKq2bh2SHEp9DA84s1ecCZ9FWqDhQHASvuiLWBd5NuVuf",
  "key44": "3wXTrLhV3ZPC1Sw3h6mzNLkfGUkPByXdy5VWqxswR4PG9NTSbwawgEEYHbzKERGr6UtPU7FEqB6dzdHxa1ZN1BRJ",
  "key45": "5pRCx51vYZ9NjC7FJ7JW4F1VHXi8ge2s1RJvGuJx3c6WfuS5RHhzwsu1VaMrwWbZBGjtsXuyBkGMUVN35BkVaBMr",
  "key46": "32NV3Leim5xQR9MijDnanJafVdBVoABsK9EF2V4YadnCGxRass8xKyhxgTuXLDZgqPCe7FYDh3ongrfrwDioVr2S"
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
