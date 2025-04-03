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
    "4rvamHP2fbC8HgYUonfLgNGMQA2ktNiiHSxY6W8QDKxTjNPFRjRPx7vmzMDGPXHkJWH9eEKj8WZYdFVeia7U9sXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cCB1aYdNQT5C4cDwMGhTKtgPXam6B9YvbKZDme4qT9EyBNNXoFgbqNPYiFGzYKxB51rP9RGpjFSkYq7cbVh3SmY",
  "key1": "fzAQDY9sWs3Bz6rkALSDngWLfCwfiovWoScvz5Swnsp34WLzY7uZQPTqe47RfwqEc6FwQ65CfmRzAryEtbQQoPA",
  "key2": "4jTzVi74pNRUJN5MizF1LKTY3tSBeuET4J9VXd4hsnd57CCLTeURatHt7rMYHGRGVj3iW4iyS31RpLYB4VgMfPcr",
  "key3": "57jFnDqTcJiYTcfUtRzVmjBZyDndnu4vs81vK1bMBTCCJFTh3B8spubaNLagLfHbv9YJ36siZbbdDnXaKkV3ZStd",
  "key4": "5Pa5mnmSvRAf4qe7krMoZdubWb9xz5yRQV16Drz5ba3cfnxUsaSpKqacFD7zZzGtxFwxAMgNAMMFjCoUrLfyAPRt",
  "key5": "5sdFgnibZQ5pcUusXzoSHkDRChj3FpbCF3fnyQNKVNEZmnbAetyviGenvkqExLNMaaZquWrovCXL6tEtBYSdQN5b",
  "key6": "4sf5ipeBDbpG9q4nZs121wwT96abu8NHr3nwFg9geuoNj81e1AhBS349MfQdosYoGjnEzW2sXqKciCNboYQETqWc",
  "key7": "2JC5YpbS2snG1GyHTjc9FphzEhkRoQeyU1zM9e5YrJsCswVuBZyamRfEwcxWFWKS9ij1az3wkCuM35jczJeMYJQ7",
  "key8": "7QdHx3Ewt1fZC6H7vTEcELR14mXGhFq4XAbghk5arXzG5aq222qTaYgB6XBA2RRr9Sd6u5DpjzJM4QkSMwHXCpR",
  "key9": "grxS9ePsNvjP9F5AqaniZ4oCjFSQSJsJTG8jC1gkHXa8GQK4Mv3L3XXnyoZ1PAqsyqSMRCSauJKbDD2B9skxLf9",
  "key10": "3HQ5J4hckHrFyqAKoCeeL4LVqSj8ZdR3NzbwwvRTjtjTtNKMd7wdxCNKQqacQdbRE6TjskwwmFtJ5Pai5r82PhZT",
  "key11": "2obLFBbqtsDY3ewShS7X8cNyJbvjrCt3r3fhMdSb7DU7qWheqSWxVPT86XJGD9QFEQ6JwXZ15yRaAn7AkztyeAub",
  "key12": "3WZZqNDe7CQsCJTUhtERchsdqoQLA3wiDdfJv7o7eugjtyQjCpyJqf66ywjxVngUpLCh7EYtRfsVNxKZdpiv1GyG",
  "key13": "5x4ESmC9TH9Xjp5imMa6ginaUzSJu6iUYNQVEnjQEASEvmHarLK2zD5RNMNQPxu44wVK5HJoaTR9mbyAk9H4HXpq",
  "key14": "4wSSb2JuejfaBGd5m5QjcMVFCpWKY72UVjNCbNDYFZMRjvPd8TkZanNPLQs8YwQ97RyJ2bkaGd1eUmm3R668RUp2",
  "key15": "4uc8Z3CtVQKaAnuvkEcgTRGdUQvoDz4D6sYYxwTD8XntPr1DEQ92JJodwYA29bwGQg73UMWhTsmpyP51t4iZXaht",
  "key16": "3oXEc7iaE5pxjKH7y88izTy1Jv9vgiYcnrV8a1FHiwEgUwFME14Z6sq3TVMSvc6kBovdKw6sGRJMtqAhDB6A2NvN",
  "key17": "9UfyC7bvxWXUpoVPueFwWM5WiHDXhxrh9tA3GWntgdmf8HEKi2jmbs9dFxs53w23Ja5x8hoEU9XtmCcAcGmW5Ud",
  "key18": "5BcbWj2HFwtGPNi75JdiJ3Qu4WWUN8mdKVy4hxCvyADakVjkaDZExpLhK9hcUSNwuh3BnHRdHNYjeewkbyefizuj",
  "key19": "4xSQn7e688FiKpBuTfCsGmKid8Xnv5CjobA5z1deJpRXXi2zNMuVx4KMrBtAzUgdQN7npvBZqWirYQ38gAjyf2V4",
  "key20": "3GvtXBcFJqbrim3DTZZenfMRi8wokWTXqJL63hPtu26yjFTRrUnAM5RjejiPJXGGcDK2MaK3cGkHw5LAXrmvVgnT",
  "key21": "42FtkqrDAJxAyM6G4nixocBhWm7gRPULsMQysLyHtqhny7y8ZjHWU6udxhsA4fmVj3QjYqcPqRFqJQhHeWAk93d",
  "key22": "5dNGxYDNUwdqC4Bo2mp22bEssu1WyispWohw88jUW4q8bGWp4GgrkX3R3MRXbtUMqYWqd73G1XbjB2u6kJFoGffc",
  "key23": "5UD7AWMeYFTV5DTQfR8Qb1dNtw2UXK5CjaptfwvkYpFsmG9vU8CHBkpfnYmoh35QFby4AkEaAEtdM25sA1jSmnbU",
  "key24": "5Y72kVxPgDsqYmPSupGuydVPpNCJYRAiwnXX5nUKTW4Jn8jhnEFqiZSu37VoVe7Etys4CMJt9qyRzKAWZeNYRyPd",
  "key25": "2vxPgVBrT45Q7Gt46vCjHrBbHZ2GSzKDmfZ6iQApP5CMTE3a1pZvigibxy7NwomGe2R7mL1RsNGe6t5mSqBkAbNH",
  "key26": "5q1G58ie9Nsbbi4GVRT7uCxs8rhJVhefThNkEVHkxfYcyYdbUki4rqzWivGbQG2F39JkJhC9MZm6fvi6TbewZ7rN",
  "key27": "5QAxCB2FLfXGsEE3vkmMpVQ8Rk9C554skkKCsBhJXTmNgPnggQ9FMYGFcuThCK9TT3Mq7ykk4Vg5x6mq1Kv7b33S",
  "key28": "2mPcBfHaYeuaZ41vGQ9F7RpNkbFELQJM1vbGUNwag5c78EHYMhqPDrnFGFn78FvosR5pXgmoLHWjPFktMnon2Zgr",
  "key29": "3prThpb97CfE9f3s2iqc7yNXEUUv4Zz59vjnXXdvVd43mYcvCi1ydXR1Zj1bQk6ryPQhzzYoXnwZvi61xBxAEfdq",
  "key30": "4mKDUAaWPsW4L7gntMKv38gFYc1UYEMoao5DbN8pATTykjB31ZEeN7ka3ub6YBGVNSSKDDptdDeMZkoCx4NSWHbz",
  "key31": "KgwMksCN1KqQvhTx32HfsDdR8TWnHV9KLdDXtxCVKcQJuEbQ8jKEKVS3xgLd7pTy5qZM5AZFSptxG5dqhPv5hnE",
  "key32": "5GaDRFwk3i5kDM7u464dCG8bFPaqskcqUpTrY1KRfjP2mSCJsb3VAgtYeF1jPu8o7FERhM3jv8ToLeGphV3mXmxo",
  "key33": "3cCj9gSWLNJhUxVJXjtiE1AbpwbVr66YQXnHqub1WKLnrK13ZBC1kQKnc7f5U5VXCD3Y4AfZ41ADc6ZtWU1crs19",
  "key34": "2hXodsTt3v61KnXKFoEBmqACet4JeTJFzkE1PrLR9gpkwE646Lb4QNkKkLYJV1KC1xpyVjFevdep9YbxVCF2PA61",
  "key35": "4CRjHvLqusSQV45vvC2oGVjuGZHVmNv42EsPk5d9fktpt9TpKoVvavhyiLmMsnjNPdSxhms2CGBJ5mwTRGvP3wXe",
  "key36": "4YHzEJv5xs14W1sZiwvSuvF2sekmXpQrew1PLzL6k3peTVFGtv2gCFUdNabbewGRZPF8saqsTP8v4UaGp8uxbVrT",
  "key37": "4EYBPhMU3PXnRq6Hbi9xqUN24qhPHCYRzTNUDt53FFUgvt4VZMUS6Zuy6sc75vSDQxqxpvfkeX2Y95qP3HmWf7f4",
  "key38": "SWZo3hxdtT7t524caTtaTsTnms5qN8tgPKcBJUYuKWBpt2b1qF5qaz68fZkF14rSEqztC8or2qyH5pkbRMjVCmy",
  "key39": "3HkpDSqvDDd9BBMML67XW12QFkdJ34TFrYtb4pVQ2gDRPdPgstSt2rwo8nKNGer4jqQvA7ZU1yqjMUbLvvvBgXAR",
  "key40": "4KW8cFZW39NTDL3ewd27FmgHRRQen8ReU7QXA268VahsThVmKzjAbx57JThzZDf7mKe7LSn6kGeR5DbkkZHSnn38",
  "key41": "4Yhj8SFTgrZgnmrsCyYd1iiKqqBW7xydkh4FrJ4VMRuKeoxcoMHxjgRc1RTnq4MCDz9mhMhzFCk4wZwRMT9RqfpF",
  "key42": "NkAHVpPEKUtcqM4ZoaL2PbTZc2qqNE4o2g5iyfkxKa1rKKwdXhP9X6tVERQ3Utk9V8EwhAACTnzfdAR9suefxX6",
  "key43": "4J6JvF1z4yHtHDgpJy18k8GxQsKDJ9pGYk7gn63BQrBTkMVsQfYF7utLCD3veEf7sHhg74McnhJvrdKkY8aTrM5A",
  "key44": "5YEqCzcHQ68HBcEiZy1F7GBq9xpTApMBFxA1aiWfCNkMSynx4zwJfuB6fMGNDK5Ds8upmMAzEKf5cmQ6u5WgPZTh",
  "key45": "3W7xjMVF4YzruKg7AgtxJodsMLWksMcd66xyDjtS1fc83ebop7X7DA2bTRgbp6MeQxMJFKkqQ2BvWnVW7hXjLFUe",
  "key46": "3KsVpC7zJWHH1CGjtN9yr74PbP5Un5o5jzYAzJEFsjsaNmYeYfZGMZtdAsUoQgzsGy6Vrj5pMf4kyZgmSAoWpGTJ",
  "key47": "7Jogh3facrv18a5cERZL5WsLcXiJhQgTkspoiKVb32mrQC1pY2a4dvPKrHK5kjzhqgj8i37suutsr9g3vkokbPA",
  "key48": "V6S8xdHVbPDKcxeMKvdhHALR1iWwMnkmpDx8BKFy1Z6S7R5yrYK4fLtuuwpGPST2r4ptmZZDQSbqTko4Z4Bd4ZN"
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
