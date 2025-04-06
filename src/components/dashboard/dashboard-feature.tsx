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
    "2hpMSYYP8FzQjLgz8JxnVxNiHgv5GK3cAcuEzW28wRXNzNYnCNjLh24tECAcByvDfoxobyDktCXPnrakmQGpS1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67cFsVeKBKGkMcR3nmK84j6JWNWW8HmwmuVRpxpE7Fz82P8kzs2Lh4EM3VmVEVhSdZMam57tS912BKcPjikQCdnb",
  "key1": "TMs87nMvJZuqgkk2ijcynij9BPf7Kt5p659CT8xh3vayLucpqxHNgSyF6u9iD9ekWQLeM3W7kJV7KdWSZEAxjbT",
  "key2": "42LmZ2xhCUv2Zw8ihkDcX5jZSKkEn9UJyGsemMYX9H6rxSyoaQV8oUAmb87wRW961USMVRYweLRajjS4tJKCRPa6",
  "key3": "HNw7fvafQurBHWh9ZBhsB5B8uzKhpPQ9opPDyQ4aa2EDsDf2uqtKGEaaDvbF8xAQn2ZEZaA8YADMcP1xWpKKU5z",
  "key4": "5N9B6tEbVmwgUFnhvH8stRPSMSoR9dVMU6CqYPKzND71NFMaed7BV6X6U9kA9br16z9o61PUU6f4eGB5s5Q1izkQ",
  "key5": "4JhRJtkeYaZMMJkZ2TtK6gRfnWdWv93RjPeKCD3U3xdzSvTzvgL82ZKyzPvqXmvQSiz9EMvCU1KcACmaYfXcdgTh",
  "key6": "5au6Qd4Ubm3h5RUstTH2fxJWgr5bcwwgb2n48ghEBr2LURT8ocyWd8NaPuxoBzBQ6RJauSf7TQkwW25rHU4m3yi8",
  "key7": "26CfijjGGTWM5hJ4RgtZFW6k1VK1TY5PQjuq9iby1apueY1RvHzEDcRXkWjbtsuDrBMLJE1qBJ2fsViQaEaAzAwT",
  "key8": "4v84aHt3vhuGzybt45Bay3CYPA11A6Qw9cnpVRq7WDySuZZLHqF4We3EnkkKsyRHwWtaBRWQVTzfLApCwdjcn9dJ",
  "key9": "4tydCHjZubzmsb3cfAUuwSyiqg34BDqJbpaXoVNTa6xCR1Q841y1SP9hxEjECRVWnrkRJMpWV3cXvajNfW7T4yzt",
  "key10": "2kH9BJiQHdFG66AbkA36emGmgrbXMoUVVN65anZCydP2c9LkoB6VZAs75s3QtfSgfFZ7kVFVGDPJPipKuMEHEWEQ",
  "key11": "3hxtajiB1RN94Gm1UUAmNp1v91UE9dNDpvZHc52xhiHzprMbztJC4Umx6epBWhtbLBVHD154g9SQYDLjvRYMw4BE",
  "key12": "67Qx5XHvH9DViW3ptpH3sd4P1X957ChsUgpDgzWZGyTJAfXsUgx8psBicqEqKeo5tNshMC87WHDNfw55CVFo1uYk",
  "key13": "bk8nq7rmjz7sgwKuPAVmkQgyqh668XhtEuRLcfgwTVnh2yW7MZLF1cJjbafXaUeKWpCHmdJpxGEdHNSDoZ5AV74",
  "key14": "3ws6qXYH1sPkyv1UEKq6hVxATpJEunQd22Vkzy2PHHDFCbQuK5s4TqkxoaZL22tpkavnHvRV2VVbVVxSu4D4rMgF",
  "key15": "2NLNkKr8FFatdbJ41dLZEazrT82C65QeSJ8AxPDLBesfWXpVgdYym5jKEqUL2PyF6oRhBBvdK65xoGaGQ7mryvyL",
  "key16": "2C4Bq6c4ZB85ya16Bgj9HxjsVjgCNQVt4eJYsdhni1YFn4AMJPMJ4XecV7Jefd21TTtGLJzQzy1dAMspcGvfHwW3",
  "key17": "4ia8Dnt98nMhVvth3NH2tDtV5d9PNdMCP5Kz5kksuYXM5PvDoqST1dpZd2uUVL2QsimumHFpCEuUxptVMiTRAHDN",
  "key18": "5WNY9AuA7cWkiK8aU1u7e57aGeGTvyNzxb83sEhyCS7CjDi9Pkc74j3suUTj2k544B5VA4a1X5rFYhweEkSvHjCX",
  "key19": "3YAoRrdsvMz9fwTSRdUL8de71YH4X5BChvz4a1ER6KuuiEjfej8YBYVgASAjph4FNhLumMBgMKwsamjUygzR98hg",
  "key20": "4Ged8rRFbHzXgB1h5zois522ibNvFAszAuHWqXqXSvE8RKYwQ1mkwdgg3wi7bu2RJyTPr2Kk6KgnQKekni2bVzkA",
  "key21": "22Guxjt8cBz8iYyuwCmMa2UZx1EVXpvsJRMUc3FxmzR6ZWCD6DQH6WZVgzgmgDBmvdbLUSiPPNKWhmx3Yhu7nDDz",
  "key22": "3krDBDo7m8PuU1YbLopBY2Qh8AQSXaPLxT6NzrgLJrTasJHjUUmF68Gre8zKtbZmoi2naUp1SNAX634eL4z7ZaCE",
  "key23": "5pcTMppCg978RqsxmWeD2hc719T2XvEc2fGjvnsW919DDhFtPmE8QyMPBPnLLFQP1E9UNHFmQZxL5UuycQ4ENBpt",
  "key24": "2tBSAX74P9ZSYEeNj2GondrDaBf8ZyF5yLdtLohctZE79tCosTcxHMyyqckfRpR1mVZqXLdMf9oFCPdC26F5n8MQ",
  "key25": "38Ujxax8EpEpzkLFCCSeewLqn6tDxBf1bDjvweTAYVbNLA2NC7JJ2W81XW8Y1ePnCEkhg133vkTzMKDtyQNQZC5A",
  "key26": "2uVDD4wSyqWi9Rrt2Vb6b5kBpvZoybFn3TfVpK8zqyXVgF3jxoE5UtwZspHkR6b9M5q5VwNmZ7bhTY2HHkx2Bd9Q",
  "key27": "bNRFSmUAPH1KspSc8HC8uGgVmQfAVhsWEYr8k4WasFHLU3yRRgAhxSTYewGB8wsmDC6eTK9aw79B7AmakwiZbNi",
  "key28": "5URhxDqUT5hdCQQveQKtnmeBWZCL4tfRkASU2pD2GUQ9vSE9oVWAbGWPwyL8vfZUsgNjrVDECwAeSvcvfs5hU6pZ",
  "key29": "4QBC7q2RU37Q4DQ96mqUNFG1RyiwmpK6xPoz7TLcEB3EbqsTpHmzmG8ZennmoZQZ6638zwYV67mwsaJVzjnBRPq",
  "key30": "63bZTUfHtdPJATrHwG9coY1sxjbvCvykN48BsrFJYr5KqmpKtCv1VZoJPBjvtsmt2fQgfKbkgaDVhcSCGaSu67wb",
  "key31": "64uscSttPkwAPokAr4ZkSMcQVYJiuD5SPXMDJ29s3wrzxvidGHqHrvKmrNdsqS8sEJGpqNDA6qhRDoBrSFToaZ1c",
  "key32": "YsFiQRmpKyszdBoWACVeP5aZrrjRnahWBbbBbwLnPSd4dZ5GQskcwDj6Mv53KbAoRJozGee6DQiRnHRBgxivFhS",
  "key33": "PwmF2vQUQGHuAtEv6c5cZt7sN9HcWter2GX1KLHC9w6ahXvfXYy1evS7ggwL3GXqUXJsbi3EPZayUjKMTud3RPW",
  "key34": "3uTcaGepBWzknWCH9TuxjD2sGJeD1kxCPedWMt5HBBNhpgupV3hhHwqyT1L1pS5fQS8bAgDTCiNcoW54qsTPkq33",
  "key35": "4QDY8Qe7wGjDj5vzgX6T1mzgfmFEoQ4UtKVw7h3Fq3AZhkMVkD3xd2VBSBmyXPPoBDZMxRLcWSzM362SctDgAxgc",
  "key36": "4nQ2xzqE2TnZ82TVSJWtStN7pkMANpwagAw5Zsv1ZDXKdSxnMWDwEUDvNPTNqBgwVVEMYteWLfddd8mGA4jJgjP4",
  "key37": "66axLvkFC9VXFjYdqrZXA4uo5RQbryGCquZacjAW3cdE5Hm2ayZJKbebxjZ3iXfituq3rWqgUEYCAiiqhjiCW4Zu",
  "key38": "2yVfv98BojQTsVUHpj6qm4XVr23Fm73tPkeoYjHmPszGCwcXbs2qcavqwKpkpt51cQ5xJCyX199MoU8KFB2bM5oJ",
  "key39": "5uZeAm2NFH14X4qExbFUKfaCC3LdcWtrTAKg4kBDb7YKp5eDTsJ3vNZEy2LG7ktyTdY8ebCSCsdVKRCWebi3iq12",
  "key40": "5h4AwUw6T1MAUhUJC7LyMEHcSvnDHzZ23vqFdcX5CR79yeb1wGZ8qf7F6vh1yNsSuZwngTLhZBeZ2Sfcw8sjGVp9",
  "key41": "612U9FtYj6d96MV4DUik4FSAMLHq85EkX6nqj7v1jizGGpG8VoDfau3riAXCR1vXn9jn1HCmMrZJAyoWSGo1jT89",
  "key42": "65SyFw29SuRebFMVYFDzzsoFGfCRwYNwYqziiGyYomgCv7eCqWZfeA1cvULmP7SFYj9VzPbATRBfUhZ3ABTRfcA8"
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
