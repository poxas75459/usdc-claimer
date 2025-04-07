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
    "34rsLPqpw56WjviLSHZqUj1Vmmt81xcUBz8r81KBHgfndXynA69MfT5sDtmKybY4taYisDWNwXBozic71QBmyLDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mTgC91bSut87rMd2tzH1fwNnhSJJipSh3pTh5MPEwWHnFiiVZWKqTtnbG9LKG6dC2bNa9RsRnssiP7i6erVLaaW",
  "key1": "4dNBFZ2qbizGGpQ7mvvwK6GkSENzRZhwEpGM6ErDoTXeYjjmJJHanJw39nG7swogAo71neyvZ2bcq63nPzaQvsTk",
  "key2": "3hWCmCF9rFihA1WspjTVkN9JmgPmzvztYcmKmpUH8T4Gi2F3du1bKV9npn8KF75AnrNLoqdNBmQLqwPpSy2BSFed",
  "key3": "5gkeY29UZ1QgGJ6CutvXfyMkonc1y44eHZ6eBoNRHCXhsvpRxCXfUximhr6W2uMcEhYnFTdg17ewcK8h2VaPaMmZ",
  "key4": "5UoBXAAeJxnQ18V1UTxhLHo3XWZBDTHnakbnoHCbNLcmh6sntR822LPyAgyvZsmRSF8pcbzu4YBLSJ8boXnwMbLL",
  "key5": "4h8MM5nr1SruiRtc42Kt6dJS7Pyc2KyekBhubfEubeTH6tv9d4tfKcFN8ULE4hknRZmZNu6CjZrbXrCHPNjEgjoq",
  "key6": "gVf7CQZ1y33TXkA1aB7Su9eXyZY2kkGzYuHFUBqPs5b8VsgZH68tc66Cy7acBE5t3ZbAoMuud2goQJcW7uM53PL",
  "key7": "4dmTxktsWdBm66N21D1ksmQribkxa1wq3FF2Wu2B9We8gFxdWudaYwJ2syz4GtkzxLmtXcwuLYFvWUEyMmstzhup",
  "key8": "2o4sFzpnL755xvPgzzmLNDwWk6h2t222P2WJ2qe3AfPvk9sWM15K6FLZSw9ytP6eNLcBb68BN4MUPjFgidZbktiS",
  "key9": "2PTYzkFJJSagXnrA7Ht3eFwKaKcgVGvLL9cw5nVUeqFS83v6UwZXfgicohMoJFLoYxR8djG4M5KXtYMNq8gZgFPU",
  "key10": "2oTSSKPUuh146stUAB5fcNViQDHPs3fQxMZe8hQQBWVSkToBaKMJA7Yx1R6ef1hkFujbUCGSzkMFnGgzUaEZh8YJ",
  "key11": "43taYKm6cq4skbB3Apsh62MJDGcsR6TaWEbcVKurou5odqFgaQyx1xFbNZorxdFwo8VSunK2jBJg8KLzaixNq8ZU",
  "key12": "yEB5s7rr1LNArPnqRdkMJP5bCUB6ckqrsnLxwj3QLP7cpFUdMWErp4XHFbcaLtcyeiqdS61FZr4itESREzB8zcu",
  "key13": "yRNjzV693zxaow7fv1Y8yBUanyJxpZ7y2wX3WLqpVW4N2qt2jnT1GLVjqP9zHnd3jmqRU8UmaoQvQDk5MBmgQAe",
  "key14": "2EA69nxKbND5HAbfXtyzvTo9PPe4naz4ygyQqWSo6oJtmkTktnZF7QqUv3kKHe6HbaWR5s1q48ReUub4EADKNRoG",
  "key15": "4sVxsrzScbK16Sacjrs4JMnP2b7FAhUdGJUAAWCyeM5bwZcsfKFZCGTZkEA1URfCaXcs6dZ3sHKT13hMLzhWtTEr",
  "key16": "3jHcq6aqNxGpFRNJgnzRUzNrRBk8yL7jmZxgbjroip6xxa1gkRfTWV5S5nWNL7JVDN62ZF96nwwxXhg2bUXzj9TC",
  "key17": "5Vu78PHrNQt5dyQQ5A1yxoYADf7bhesTYtqbXrywJNYyzxJ8PsmuXiKYiEERcRLDG9WQWWKiueiafGNa3VpdZUdX",
  "key18": "4gvyehCqAb2tZcAdMpGAJ8rQKLsc6zmkYM1gNaAe63vyVaS4YkoVeuJX3eWovPupSrojQSb5Dr2C9wm8WEUxuomc",
  "key19": "4UE8SNWvsXDyEwHqE43vM1mbAhohP5Zt1FM39SRVfydqVmLaHAjterQrLoc5SkQhxJ57zovffASRiCRfTs2VDkRn",
  "key20": "3NoTRGuVVcCqaVpt73MnM2Vwt9NHsHdeKyQc36cXceWam36sjaTR5akmLkGWffR3CP3TD6w4KG6pZq1uxm9V7Te4",
  "key21": "5wJsMsfmVeP8ZSgD5ginedRpV8c8gfuDjd5H69bbvRjUt5JKbCwqJU7tUab4m7dTx4gxyCef5aLy9JuVcvyn4SJW",
  "key22": "GPUZbmBQUFgBeKF3Yezt77qmxUtkTaqjyCQbW9p7P9odvkP6q4VJgndJ6mGKXHnnAJKPXYHBohkCXCUwTgqZv2h",
  "key23": "5jB1gxxrTu4C76HpX93XVwUaMhcdWYxUdENiKa6honHmtuAnKHohVRKeDWtyoyQ1AHD1oRLk7uqdHSjWLFMiK8gm",
  "key24": "3XmGKtnLXE3gXwbcD8UJtBMtnC1tf3S61eqhqaVntxjv7msh7NuY55fnDY2jje2jJLJLhgWACL9hGgv61yHJfETr",
  "key25": "4jZnhVQpuFZGW2eYThjyjmVHwtAtk5DHEQ2zDqbtuG87zaV13Q8zehFmeRTLAeW6gmvNX8hhUbHFPZtxfsKBotGS",
  "key26": "2CuP8v2gBjE3pd9sJTNjAD36MyVpQqikKZreryXK1JrWFu1UHmdLFdcw4jf7reFx2zwGnSPr1JrKLRsxE5Fakgwt",
  "key27": "22DTYYRGQFouXzQHowSHjHDYJpsmjUN4r7RNyya3H8Y5nTpgN8yRxtcVkbqbZ8idxgmE9wS4FbTuNm7MJ5jFQNim",
  "key28": "25BsE6BFZMUJcFYBzZT7sKb8XGwfkKgKi8y8dhFKh14HD5ABfH511co3yZa3LcZim8A84eSjA4a7eRL3pwVhYdmp",
  "key29": "55r3b3fYAy2XRovY4fxcZe2NaqeLxaBLhaqg8afwdE2PQufqehNevFzsb5m589iBAH1AwnZSSGgJ1YHjf8Xvs3By",
  "key30": "5jhcH1UcbCBf9mD56kHyEB41PotiAzLqjP7uJoKKfDSv9WEayG1XfPyeYD8w5KTNUqhFsWvc5vjFUVfN9CzUtDSu",
  "key31": "21Dm19kmKGorQ9nwqd16RZDALCa1g22jxL4KN1LLMuVHMyBnEDauUj4ybWfUwzzzp2XEaod5P5P2EctmhsJ25gzH",
  "key32": "VSgfNd293qkTY9mzqSTXz69mBZw6423WJ16z4Gnnyg4XWh3nSPvJWa24PpPdFCfFJTj5EZuECG22xjdHszci81U",
  "key33": "5Gggryg4b3Z6qQa1DnBZgY5EmLHdnEhZrrbLFwzkawzsYudQYyzPs5qaAKwveUUdHCo8a2UvJd3yG5Nq6Xs8T9gQ",
  "key34": "5cB4BzFz2iP6iDhcu1ZMrjPPryYxXXDvz8VsXZ5UVL869phZtZj1usYzDPGwuqKt4CESDJUHY544jUyU7na9pAgA",
  "key35": "PHGE1brEN9dNzCpjrjhaB7iXoNQztj5qNLDHfibYvj8f8yeCRc2ZjDnRxdRTNSTXjYV459TwVkb7xiQve2BbLqL",
  "key36": "2iwQQ3zDL8p5Zae46GKPT1UFb6bstpsQ1sCtSrnAfw13uJRxNhdd2wNymLvAY4NuEd6MVyuLQai15ZXHnZtW8pgV",
  "key37": "3fc6UtoHsEugqDAE44sHycdDTrqN1aKB6x5mAqHds6cFsT6SGZtZQYnue1yPcK72E2bbtMjv5GGF4XYtbBMNv4vF",
  "key38": "5SVhwrVs2kk2nmJKQJ1rw5oELyLtwJT94zWyFLCybUhE3c29ZJp5wARX1CQwbB9DcKfHhkuJGbrmPwvquZde8YqH",
  "key39": "5jo4wMyMHeBNn5bR2fPaDPSzjU5uMMMJGQ8W1ty5t4Q9VfMBsaoQLywaNtvXufmrci5mFibjE8CzZEyBiXEP8PRh",
  "key40": "4hBG36mns7L4WgJH6rKNKD5hV4t5hu5mBfMevQx4zeGbfPqgN9p4jxnYdZabynKPKZMiDeCGPqZskwGzSozPTBCA",
  "key41": "6UrXsGbuo4fvZJRy1ZJQB6kY3GKQGPpu5udHcuqGCRb1RQ3MycBA18iEPT5QeLRyw3PfeqJKcb41gakVvMe2YHa",
  "key42": "PMznRAhjqhTj1EdZEFbArk8gfmojnipuvg7SKsjMxxYK9yNkJEQcZ1So7ikMcFo8kaUZCsgKMk3BMS1PJDeupLb",
  "key43": "41mqFgKPW8Qy87n7iWDTsvNM3j84MATCnX4ELcxAiESiiopo1xVmxAS86Sr4XAnCRbQnfmHjWkS38abqLWaWBokg",
  "key44": "564nqZV56gNQvgxtMdWCh5xBTiopt1A1fFE9Cn1fenzRcJdTfAxnWqRi39K1LenDcfDZjvv9vrZajGmFMdtBF2dP",
  "key45": "43oXy3KHE6GiE89e9z9Sb6xjmJ733ZzFYvxmQ9vSznnCdAtFdHWqZNCHNxZsvzy5KxbxMX4SFTGN3QDWuBcAD2aX",
  "key46": "5SajAF928eMuqNY8ob32FGGHi8NYGK5xWeZohHwUyQeuNyrTEvLMBgyz9DPVyFy3WFPjLK6uiHGe4jECNxrtAQGz",
  "key47": "2Vtg928asiUEYMy8hjhrdGSrdZyNbyP4PxV8x1VdisDwkhBPwABpBsNTWSSaqn3b5SPEtMhiLgrggTemJ7cvBwdH",
  "key48": "2mbvxKveiG3Ma33RMrsKimA3CwfahcPxwFpdyzoXQvEGpHvEgDj8rmy3jedJZLdHHW9HCmXq8tePkkdd4NFukJSG"
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
