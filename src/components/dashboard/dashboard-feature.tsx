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
    "d9gmT3kGdXpehqS5BXMgq3h4ps2uKVQMNUdLjuQ167YxdSpuL1ifoziqzA9XYnMFqyZiEhawKimJcfWBUFMpkXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZ77jtS9Q9KLVEsy7qXXazAzFgWjgEnadpqHQZ24u9iZGuoUDiUX7mu87vYaaQ1KHrygWoajyCmGxCW11TvxYU2",
  "key1": "5Pi4LAF3Zn7rXEBevp1EY8aVUf3DL7ZUNktDE5FiR4tfepNocdjwe465SWnk4hQMnyh4BPbjq4jzMviozb5VTVn3",
  "key2": "3RixbfLgFDAqQD4AkxSJzG6puPUZNw6sZimsPMFCQv7SUBhmg6FZZLjnFETLQpbVjSeSZN5TDwuX6JM2nXGPrBih",
  "key3": "3yRUfZjKdiSrjUmPp3gaxvNQBLYUiygqX7LHPFYfriGXSJ8xFAPK2EhzbH8WkuAWXJsSamEGTavgDRinEerUDALK",
  "key4": "38CAABn2cLH966bu7B9SUgY2CKYMrVmoWPh9amnNFhXozuhXq5XosajfvF6nd42GWq56ycgV3hDjCaiqCosyuNR6",
  "key5": "2ZSipBmLL5R7h4rFgu5xzU7BKixcZcDoPXrH14h3wofHVWtwkLtXRtCaip8h16Sgg54bXYfrb2KaqHybUWoNr1VV",
  "key6": "bvuFcJqqT5zWhrDaAdAgo45WGW14G6V79itMLvuEH13mBM5B4gMwQGsYe6kZWrRmkCXPVA3BiXyT88tnfuB75rA",
  "key7": "2PKnDiQCm2nrywzn3BqR7bTSMibDsKSNHnUn6BRsMuEt7V3E19SfrtVCofNd78D24SzwqsnM9BbcCBH6DVApLzgU",
  "key8": "3dbq3Jwxgfzjs7KyeGDipvVpPaU3gmzCHG1C3CWK1Gpa4S9XLB3zJHF7YmDoq43oJMs5juBCC6BffvBejwrtpMK",
  "key9": "2Q54qVMzk7TV2v9JFki1RVZdtNjyDbMkxuKRUCxgtszXJzaNfiddxgtpZX4n4ARFM7MAzKQ3X9upWFApw7Esm8CS",
  "key10": "5jzjp6Eoy4CQVtMmxMx9ctWxPs2yLYDtRU8cbKiVwZFiGh7R1Yf74xmD4WQT5BFfjVJKV3dB2MMeki7sheps1akT",
  "key11": "4UkL1MDV43bpE2GewmVWAC8fzHnWXJuPtc4mUPPU7zZfNNAXCtY8NAHpAjd4BpVagkmHmZhyZPVHXbZhABPd6M4",
  "key12": "r1kfyUoVzcjp4YyQYg9Qg21gvxiHgUntSg7jMZ9ysxAf6Nx1EVc9CqarfEqMXMbfR9aB4fpKNwZZULPUduSNhZb",
  "key13": "4hmVinvfxWXA4bBjm9WzJqmdnQcWouM2tKjDyjTHX9vYXk1qoowqHHfAsnSCadcJMQAJ4st1NPV1o9WTrWxbGhcL",
  "key14": "61i1ZN8WpKdCndUunCf9MGQf42x1qnMv8um8Rrj7iy7xTEpSDwnFt9DjQds8kgk4wkXewyBiRqS3VswnfDMuJ1Kt",
  "key15": "3h5oh7urigdwai5muXKVuudRyUGqhLBUjdrN1oFe9RopMuXFm29Hh3PhpL54aSjq7TgdMtRXnjyspsPUXZpv9qwA",
  "key16": "5QWu6KGBJ7M7UgscFt7A2RRD86FKcnJdw9sNKKDMXXiXnLZKinDCi8smke82b93UGU6j3UUkgDwB9LCTi7Cwfv2d",
  "key17": "4dzANrKsHpSrEcy3vjLs3qvjT8ZmihX9YFemjrCaJhwbyajpGHa4WPDuZX14UmzeMeq7kREJDdhGVo5WtiPrFBQp",
  "key18": "5k61iyMzib2jCvPHRuvP28yKQEQ6zmifH5C8GviZh8BqboQ9T5TNyDKVmDoiHqetfDDHf9MPVxx3f8CWrVQkJxTf",
  "key19": "7k3wtjXt64btkZnJ6ZP6vB8gc3zvbVne1iLt3Hhb3nW2xfSfQHy1uEkeysRwRi4P1kxJTBjf3eaYwxQAX7mcxmH",
  "key20": "C74E2yGS326NScGM5ozFgYmwV8mLd3rmRsbSNKh2Tqzh9TgozHBG54JFmA6xutRusPY9WHqpvparpjbobX8M1pm",
  "key21": "5UqAfzHUHeYq5N6EN2tAcVXhgUa3Hos8qiUcNyASfadVdMKWFq1upSUNV9w3G6oYcdSgSR7jYHrfkpZYzXXLWdMU",
  "key22": "57vqA9NAFT7TUNhovahuiaSBDwBSmu41kwa2RLknmjgzPsGkZY1sxewrNBo7H9cs2qA5gG5AC4YyrUFVyeKAP95b",
  "key23": "3u9mdvRb75oQWqHqPzckUUNY3YW2YeWsUvygeZEicUdbChQdPZZwpYMUQSazyU2Uq3ZtaPKRSUQBcbp28BZ8ejQ3",
  "key24": "5EzRHn977hXkvWWEQyxXCrLNBq2QAZdRgWGQphtCRR2rZBJtmDXw5KvggXKj35SwS3Gn2weCjDTQDGW6nn91pSRr",
  "key25": "JDFBBFUWnStpafEiQjn4NxrRLmT77TWkDXCuc2DqRss9d7EmZNzSAzBdB6B27wokABTdXDUH3LVbQhfNcwbEHs3",
  "key26": "4SQv34iuKzGTL5ojyAyBxAGS9DaGz16CzNypwCz6TbJJ75TtjEx8QXXWyxBqvM8c9vrYq36VwRwD2Kv3TMma8Rrr",
  "key27": "4wTW2WM2dTKRokWrDqNjmJGvfGw6167jgSymWFmdRdY1qLenkc2VbY4kvhxLypr6MvKf2k9HEQ7yZVW3CbPdhM3C",
  "key28": "2E9VGJ7dNN3jH8thgAnGyyhkMibwFyXbg9ndT9zQ4b6mrkPuw1RXxDC1mGG13KiVZyf7vKdDcWRkhGbiJd7CZgSh",
  "key29": "5NvLRcwW9RduDbZuysAbsrNCu8oeTLGVzkNeyjgDmGysbwXkAZECoTxYiU1M6ZWXwpRBaNZNqGhXE8VQm5ke5njU",
  "key30": "HqAKmtofShGDYqDYTmBuCmsK2MxiAmZXiJW45YE3zi3jBBmn7fdYbN9r1aZNjryXz9G5SgwwViwtSDHAje6S7hF",
  "key31": "515wdo9Rnfsrg4yn9WwtLoQxszZ3eV5ev7XnwqHR5zrnmUyZaQx2nKw3utn2BV7vHwR2trmZx5EvKHE4MR7cEPNU",
  "key32": "61RT4mSSgFMLpCmWC8VWTh49DemexqKvtPUHfFh81xiQExZDL8ZY8qWqJu53j28W67KY61yHcAYs8B93ZRgdJdSh",
  "key33": "2N889t3CqF45FxpLBK5pYZjgyKFY989sp8yCuoxb8iqyR3xKFgnASuQCHtH5mjT6cP7Ru4ygySnRCJdNTt7AtG3X",
  "key34": "wrqy9RJTLR25zHi8yUosmV4ujYz9QVyfEh4kTSntDwD3mq1NmahE1zhc6M8MRURhNuGeVfm6osk6Vj4GabX8H66",
  "key35": "4eJQhBCYx4ujYUFd27D1EJbwrqmj7UoKYxE9usR64t8G6E3yj5d5hwXJa6Y4Fg4TGL4NvqZdnLwNQmfioUP8k1Y1",
  "key36": "3D4Hs3KJnjU56jys4HoifX5aNdhQwQBZyg51iXudFt2WdtxxyxcMFVao52a6vibUU1eCbL8Kxz3p8RjDnKo3QgW1",
  "key37": "USFivGzpxzkFF1ojdp72DjEDrLk2y1AD28PPods88GUH1HdQWQf9cQb3rcTRigbmpT7h7L55uShn5mftP7ghZC2",
  "key38": "2cgx9fJv53ewgD3CJYFxuXWBYvPM6YXn6s6KrECR6oChHwcqaPRMVefkw6KrNec1HKLEXuiaaetDSMcFShGyQeSU",
  "key39": "2ybFYV7KeDfYYFMufRAeQmtBTrtj3Bba58chmXhcRtp4Rav34QFoyzKHyiY8bpGGebrqQFv5pmYkG59x4PrtE84T",
  "key40": "2TPzfhsuQpK2VSGxdcfHJ9K5TdMHHiJJSghJ3Gm6dEGeATomq26FtT3PuFfUn5HrH9oBukJ4TBFUk4UF3EFpzx3y",
  "key41": "2MdxMGe8cAZBKwAGdKKkK7PMjGbm5jkorzdp4aZJgJSdDkkXbrnrd7AVEvkJM93j1p2dyE4Gx52n5WxBVejvZSjQ",
  "key42": "2DmbLzTWaNy6Xktd61fw8LoZALVFYoCoydYWXVdWqJ3BUQbG35ejU5opF795AmPKTRp5E3uc7YEbTSYpaeNUGura",
  "key43": "5hEApnRLEtHfzv56B8wdAwZUahXtZ7g6uvhySXBT9EcCZiWh7rj7VDAFanUKPw8RoizxA5JZiQuQbGmzatgPGWMY"
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
