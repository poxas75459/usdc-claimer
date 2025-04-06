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
    "3gniGaeyoRLu4C1QRN4ug5B8dGTcv2eQD3FUewUvNRjpn1mz1RoPBXBBzDeeDWif6D4kQX65B5sikCB7wf9jLwLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gaaiWPTEMrVzmaebs6vM8dPy5bjUwoHvdSzgF75cpXmWaZbZccttcHyHvK5HcPZCw6gmvQA8mRrdPFgituy4ERD",
  "key1": "42ZZgjB7Yhw7rxNL87fQdBnpTmZ5xYbGLmjanqtu8kwSzu58pDWMMXMLApCuEhD1hBkcDgLU9dRq7EhgvTs3ncbs",
  "key2": "4wgLZfeuN5Qa2UUjZ2anLf9VWB4VfvsZgBoyKcd2xRZCxskdaqunXs1E87tdC96Egzz8cmaVqq9a3NgeNjPXTFZd",
  "key3": "41ZZsvh5pYA8HTWyZPYKJqYxowPXeFQ3uZ2tikCDep9L8NZAMFYjvSG5nmC9Yj9FpTLzgt77Je63EVCRQyc3JXty",
  "key4": "4NdpFRpnR2RSdVhRSVgsNtBWfVMBCmBYezFrM8PwzK7uv3qNug1ZCpvZj5WQrXQdNhMVWnbrgZ4nzWRn36Aj4bR6",
  "key5": "3PtGxo83eGArV5tvDhRccrE8KTMhN8LRUT5MajUaqLzFxHby4UHAfWP8Ki1YyteYpe1tA2wVRjixnMEomdNW73xp",
  "key6": "4Hqa2yaEeZmaMEx1xR3pYqM6F9WkZZQoJVz3hrCHFEXSgPTjWH2htFYSsJDyeHVAcT3M2apoKP6u7fNYBhwGKt7t",
  "key7": "39C2iTKZHSKXWeNnXf95QxWTj6UeV3PYaZbg5rE8UEsG5nhXG8WQxBtBRcKTsBXf1T3PLRSY5JHBG82jF8wxKFPG",
  "key8": "4ZGCmF64uUc8Cf4YRxcww4XcpEBeYUpfkq8u3jA9RrZWP6iWpLFv6rgDdCiX472bmunfae6xe8thQGjBDgCBtdpF",
  "key9": "5Vo3XbBtqgFJpaDzB8NF1FfzPp5c8bwwJroiBBLAuV6vyDhCrPx7NsNtMEysC7N8TFNCL5kbbxcTyes7zQD3ioZE",
  "key10": "5yehgDmdfCbaxSd4GNuQgv5R3zgefF3yiaqXUGXrAF1ZZHsxMZbucHhVu9pNUy3uhH8DXQdnhgvxySz9Z8FFaTN1",
  "key11": "45G9DWqzqrmKVy6npnTfpdzpRZimFrTFCeAfWcmT4FMWTCpm2d9ANi2gJVta4hEZDWW2LSE3JRwuPnXhovp9TXhG",
  "key12": "5S6MGFiYSaaew7n1Dca69HG4YshBUYEuL58yxWFZTbAt13x5D72mHWPRz5N4X5gVyVxyVgrK6iGm3HSSz8MRwCJp",
  "key13": "2ZM5jUgVobqJ2gGVUKUWwmJYJKu4z8UwXb2kp7ky51jABX874XfxLTPSQdwU5CJoxRWaSu3yhJ7Ro5NjNyWksVw8",
  "key14": "4kMpriZXpaQF2g1ZG7vqeHZgm9cKsQJuE1PiHKEWydpKU9QdpUDzUZawawP1ejgKJ8TZNgdvKA1ydhMwNkAAUSez",
  "key15": "gYtPcuMzH2do71ZM64dtZ8qQWjD7S3ztysX7iFnCFxbUGEeME6vZEYJR5zdQHpBNdp4w5H3uM67mReUpUCCKKrG",
  "key16": "4QJK2raZDfGyq84nLdpGCFHhm8qBweax8xcWeSiSGvf4mNfVM45AjwB8YgBRJwXDRW72Wt4foM3B3NXEr1ZXUUjR",
  "key17": "QrMcqM6kzwzVTCy6KBuidJmpVSmWqP6VLJUXqfs2TfEe8C4QSdS2U4A3uQS5meuy6mDaYmYWWzD1XsW9EWy44DQ",
  "key18": "2iFjqLLYUJDeBTJWg1zKiMCkXNPkA1uJ8NMHoAq62DKYsQ5GYHKE3JYfxpWPegav265gupt6xcCC7MJnNHusWrgG",
  "key19": "4YAycT77mwtkYNN3MPNhHE2pWkAtZctGC36nouYCWpDt79pT39YGzDUMWe6HpDzaTmWnj7QEBYmwD5UspaGipmYe",
  "key20": "oZAB7o3wshPjE5jZEutmtD4RDuX97rP3Kge24HsbFuHdu6N2AiDDddLnHtW9rFCm13ugPbG9yhxe8Ceeg8Ce5ka",
  "key21": "4xS7xiMcdrb6tzL7SK9khRtTAuc8b47v3s6RLJi9acZy9La2b2Mh9DLnwWyUmM6TJGJizhnmJs2ddsdJFmnkAgev",
  "key22": "A8E2LbkNFJZmoxDgWfgZJkWNtwQF6f6hs6SSaL1EzHjXEd2gc8sEfUrsoanR9qmHQ4wi7rCk4CiFDxzbdsJd64u",
  "key23": "5jhie3MxGsHx5V7PhcPYzNj6NnjKYG8LjvbE2Bpqdur9th2K9TTnQ1VaKLG9q7pCBDdyEmskHAVNmhRP8U4KK3cR",
  "key24": "5jmcXiMJ2TCox3STFBpHjfE6cQBfCFp7LKWCTNKTP1vGHPTmSK1FdxCC2846vrmt7tXocX91ucTismoULxRndNix",
  "key25": "5xW7ZqGgrkQkGjqGM8FQzryinmhn3ji6pL5cuNKn3YMkT9hiPqWaK8Bammtuf2RVxhXRfA2WpzoRmFzcff8zrRpH",
  "key26": "4BvvA9yjp11hBvvDyS5Dhzx2eJwBm6FmUPnrtG3WcB7qJ8SCHdt2ycKW78271g1v5z5NsxoLuqytnULHL18Kyuqf",
  "key27": "4VFBYEhy5rKogZnLx114NojBstPusq4vZunra2pNFcXcffqdMUyhfwbMnMiDgXHcQwGYFRY8pUVfBHxE12zA95av",
  "key28": "5kc6ygC83AZ3hfUxtdMuBR9yYyyLjuZdfyB8yHGQx4pUDqgWrhDWYwrJhtk7rbVxa6ZjxAXMCgC71nSY2w1w3DYF",
  "key29": "4HN946yuCCLksgyhbgRUhF4rr8NteXRwmroQWSPEPxdwr3Wg2t57evyj7RgkDzFAAEB4onqsZXK7Ubzppb1bZENi",
  "key30": "5PrXCwNmCHAmX3C1kJiT4vbmr69D2FAYBF6Ue1LztkaysnZJw51aNogwvELBtUCkrTPdRwvc9BR75LDkUuZnk6bq",
  "key31": "4BtRMQtZkCuuAo6SQdnx2zjBDJ1QFuT8s1bdmWGNonu9Xzfj5VkStLdJkKGxA4sajadsvsQgpNsEe9BQyUL9FY5A",
  "key32": "sztw3ZeCnt7BTqo7EwARDiWYEPH4wuDzoMDQEHc6tcGVBhXToE5sPp4hyByJG6Cne8gKV2MYXhy1VRmY2XipCjC",
  "key33": "529aMFHCmYeyKoLnFdBZZQYHCU8Q7okCJG1itXc6hEy1DoLqKfUGssS77PSX1mse832XT4MxPiGSnie6y6u9djfk",
  "key34": "RLrPHTy8z4Vt3mhBrcBbtsVHKjupq64Khs4bSyUndcFPrfRbWML5WG7uBJCDLnMyw8PJKpitY6Wb232uLAEJRvA",
  "key35": "4pUWswhFKVhC5GxH5cggjiogD6qN7TUy6DAhVot46T3smnTxUYwBstFVzReqHGFoPcQSkg5u3CZri24ZuJgq7rni",
  "key36": "377z9bZKUnu5DXHTyoW37LnSjmrL6pEE1hbqyvr7sY4NrQauKznpmdM7Uz9EnGpi6F1vR4y9tkofyPJsTCBF6ZQ8",
  "key37": "5THMVmLgoEgzxb1CNWimjQfzV9U8XN9dAzkRMykk2fyvau7KhAZcMn3FDH5qnuvCToheALWUGY6uaYBpQZzeXpT4",
  "key38": "2LuHAYAN7Shb1kk3J5azv5XF11SyhtJXAWJZa1pSafp8vWyQAqRCjdMKFwugGMS9JwgMouuuJAi1URBR68MKnh8w",
  "key39": "62VCLKzwkrYqKyV2VWfMvPidZiZupaY6KpTc6o4JPppqUEsnG3gnnme8WEMprgiwKiDj3WVN4YPpnCNj1EJygyLD",
  "key40": "2mjgTLoLNUqTdEQYQuYipGj9punhd7VtmfwZsBP3wH4b8PJS83AqLUd4tPUwbrq179QgZwAgtrTTob3jghRThxRo",
  "key41": "48VjG1ArePDY73tHYs8sDF5imf2BqEkiCEmGWGR1mgWvYE1SEyEUtHbzUETeoLyPYPym6ZXSAV3unCGvj1wDHQao",
  "key42": "5Kk1th9HJDr7Xs2b7KdkT9V8UTeAQdDcYBhjRRZF3qjJUZNRaBEwxS85zUzRDdQkjUtT3LCdMrzab2cKT26t986o",
  "key43": "37kNsBT6XUN5Y9dKgu8LXPzoiJcA4ygXTp35rGoeHJAXbSdMTcFBE2PgHtPSjJ9ZX4gj5uHSrcjtHTWzVvotkE7j",
  "key44": "yDSEVXH2d6xHjPaHrTSuwPaMfxQnYBaRAmpzVkZG3q7XEvjX1vVqi6ySsGvswd1SXBV5SuaM7H9xchoR9KNBbx1",
  "key45": "3CakULH1ZwbPs1DStCYqjAYuMUqy4TdmDxTHVFQ7t1vZzTYaZdJ2AZTA7QLxWQ4A84U67teuk3YAfaNGQzFMgvF5",
  "key46": "dHgYD8zWSNocGjSBK2SjdXgy19mfiMj82f4VP9qa7xUqWqEsFtGDEDmaX17zjEQjDhod9nJo5Jx6wDja7RQ9mnH",
  "key47": "wpRx318esa9x1ShmawcJoM1Cfv4eaaPSb5LxFQx7o2E8BVpaxw9kK5hPmfiiYG9QkpYSdbNe3P5KoXa5YNAbZwV",
  "key48": "YmcS4Fq5LmNapQgAjrzfnY6Y9yUp9n9uPkK1iiPuzDzu1wdh4NowgWBLohGUzgxHFxMeJHAkVogPGM3Nnx8QuzZ",
  "key49": "3M9y1dmU1rgBRSK6H1ZBH75k7xUFMaXegtsESMeXYTz1Hun4GmJA5NbqXVrUEy69Qn6Jkw9WuxPBQAPXDnNonD5D"
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
