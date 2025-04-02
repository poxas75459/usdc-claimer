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
    "3wShiUufV9e5zL2ozHhy1EpJPYDq24dpUgb4o2yp5hqTtCL222PUEmmFwUh3bF7YgG7iCHeSdFvzyuYLM9SrAmpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCA4q9y2PAsPmibktvEbZ8xJ8CBLY9XywUg7j8SwY9uix9pTtXPCyvjCoubUimsru83HuJEZCkpoQV2TvbKJAwz",
  "key1": "5cf2PV3xsFvhFQA7pLqmZFWPGvALsPmSyvzgW6oNFEYSG1wWFusF85UYqMxG2DNAwjWXp7qyzgma5HeCYwfKM2t5",
  "key2": "3KYnqQmXKixfaCnYccbFyc2pdFxzWDTLQ9kzF5h6PPUtFmn6onBjLAyiJe1TYHJHip2ugg5vwibsXdPQBNrM5VNR",
  "key3": "29FkT9m1JLavXmbfeBexouurs5mBkGtg4FxShSgTzQMezwSx2pCMJ4fYqTCi2RaYXUqENm33x3mPYE3HqcdxGocV",
  "key4": "3mkfi16hywFHQUhWxfmSvjFaghgpr4Fzqsjm14JKhDj4RdgjQU8DWYZnA83fDtVuaisp6Ea6N1PxYihbceEdeEVz",
  "key5": "5PKjqogEthjd6S3o45s8AaPkoSdMpLmE2ABfCHaRr1CV7RmMieBrx3A3s5q6Ut1y47aQbd3c4B3fyGgEtkLYVab1",
  "key6": "4taXb3gVHPcgC57DN535iBEjUtwCFqHsYDmvkyurxGnLaa8Eb4aWM8cvojThYyaHFwVNpHbs3bN5thSWY3ZXbH5R",
  "key7": "555Xk6BnR5dmzX5s8n5NJGBWGuYknoiQZXeBMSCBMyg2adSSjSQZ42PEnGH4qiFX7AGxAFF3yonSNbqSbLLbXh4B",
  "key8": "2huV4tY6kX8mqJ1MDfAMKxCsnkx9RjpW398DfcsVotXSrxjxiKEcHe8ympdshL5fH19s5keWDjF8X6Hq5o8bBdTV",
  "key9": "2za1gWPEF9XVKpqT5fU6zaHGuDqTXk3NKxqb7NY3WThAZcPJdzw4cSNqhT1p7WrNX75pvYooo323VwCj3ZLU91Ke",
  "key10": "29BzLrZMwW4YcZKq2WhfXQ6ddqz8wXXwFaxrjoE1SRBTZyKT8z7bTYncGRouajrdSpitUBQxedoESLzvk1gAATR3",
  "key11": "48Rnynjdpwvss9pyZnHyUBhce3sVDsMTdNL5KKNDGF4NNfU9skjrgFntoggaN5DoicGmLBbKnNaJW82tnDZqJbKm",
  "key12": "28gWLL9qBrsadUVHEGDKMkm8CSt3cHwjozSTERHdAT2zZoFb7Vu5htG36iiF6q1EzJf5N5ZKrpzXL2DbVDfMnadT",
  "key13": "kK4oGCxQ8fNHZoZ58tj734khsMPSsbD1FhrKw98oFtQ8hUDgRh2sYXhALB8f2xVa8UkepfvYejp2mLphAXwAk4B",
  "key14": "39kPe3hUor5H9VjTNgj9JETkCT8B6mL5zYKbrbuQpvJGN4aJLDzJqEjtTpKMhAmg94RHRd2pg1CjXqmiQcEUgRik",
  "key15": "2XvcA21C9wWoLrhaN3E7yxsW8dm4pSK3PuJRfqDSJUFLwPnCAVLbu4G7nGJmAJk1SNGZyGsC6nV6VBrH38ffVQL9",
  "key16": "RjoybSvwDMzwc56jWSvQqWq6PK6vHrZ1A6AughKRTmrLLnTM5vCA55g3QdVQFVLt5X48Z9CjwnLu1UhircS8LzR",
  "key17": "5Hpk8ow8hMsQ3vvck6r7H5imyktDcgUtEsNq5rj71JLBFeLxo2zk82EUi32bev2zjKvYHtJ5NmEu2koLU8SZsF4H",
  "key18": "2TBYBpogmQ516sfjPJtUaW1dpx5o7Ba4hQeUbhxwz31JqcwXEcJ2yR9jmx3ABUc97AYT2RntfKNtQAW6sjoQwxHD",
  "key19": "3iyCsLWA13UUPWgarAxseZ7j8n75Gt82ZLmrFHan21AVoF9FvREYi3LfmpkiKoyUeBefGXCtRizUamBD5uth5sYr",
  "key20": "5khTKLf1vRTGLBu6H621PnYXUX4HKieQstZwe5ea9e4kjYBWV2ht55ir1DHAUCpuzsDSauAvTLAzsdpV19eKGhfp",
  "key21": "2oZdyQE5YJKU9nJyoTiUK2D3mFajp5nAc9RQJGokBReveuKfKMPPzdYJpjceSWK9nYMEFNEGZ9GdFdnS2u1QkAgM",
  "key22": "5MqaxnQ17ZbWTyYfAYQiUxN8zs4fdpxn2w2txiRbjtPhcnxrwtbkRu4771FWBnJR2CUUF2MPcgk2c1oBqiayHbi9",
  "key23": "5z3i6bB2y2UNzgzio6yh8n3pJf6Yvkrhe4uBW8sXnp5vYw6zg9MaZRU8VQ5L5di7xkrMz7hByj33Cw5zqHGga6zw",
  "key24": "LJnd288zTgSxPgG583LFRxvVALWNGk3jkUW4XgDM5Hrqw5gD79wheAW3poAiEnfV4WpkW1G7x4NizWuUU3KcPUc",
  "key25": "2DmzP7G8AemohhDMen5LqFzwcLenWdwLdgd3p7nLsfBKgeyUJNha5qsJRaK3K8u2J8NSfesrWt3WuMQEPUm6y4rv",
  "key26": "ggxobx6kH3gAp9dKDyr8FecfUAWXcLXBgacZg56DYEC7rb6WfdeMNH873r8HWyeUtffrUqgeU1cEBHYWJY2evQM",
  "key27": "3wyWoqhswDW1oRW79NFwDAPgCWp9QDSmzprVxMJBoDT7CyTiGWWutq4s25UZiYMvSF1ttPKxehPe3HSRyEfv1aBN",
  "key28": "2CQGv2YkqfDXddkcnuwW11ioMvrQJMSDHTLXBRgSjJKQFyoXcZhZCiGDBMCUf9R2FKkx1opZaFCRGFg5gswJpKZB",
  "key29": "3ABjwfuVJ1QnSDrbsgDXhSc4Z7hNikqUr96mVsCD4VCKEiZvobLxHcR4Us73oBJjbA1zUFTqW1aEceJx3Q7FfKpS",
  "key30": "46KKsqryQ5iTfuEnVqtCmqfm9yLMH8zQ6KvQTf6D79gvD9fY5A87Xeypo9TqXRn1dfu9bPWWxg6NU9ida5iwUpUs",
  "key31": "2QdCWDyqa1b3sXHsCxdox3e1Yfm6V2TwFSpvKMQorHFNZCmVK41GDnUMFaaEwGoVmCoyxQRHT3QqJWtW5WVF4pWM",
  "key32": "4jJ2Csx1H7MLe6snrFXGJY2DGNfgbnFC9PPS3FfsdBRBjofFeNWrn4HXJJiU1rxy4kF5vWoZj1dmd7xL5JwA3mhJ",
  "key33": "4xpgE7wvefQwpUWypzZdckxesUvjakrTBmU6Y6y3QBpzpUN5D8KJZM219Hi37HeasMkZ8AWZGVz7uFPrAxcC6FL5",
  "key34": "3xXCTAkRoqJt6n5xSk3q18YPwiAkBCmEMypvqBzRP68QFgY3aNjGtb7oRbEcob5YspCinfhayz3GmoPUVyPT7qVo",
  "key35": "46X3tWtjDPoZaahenYjfkLpsv8kYnrZjriM5Q3VNMjhj3j6GLFAPtJzrXfww4ktsgn2iRpHpvaapopirSYRt7MBB",
  "key36": "3nAsPGWUhHffxYdBLfZWcwbd5wVGbLDw4o4wHtcMy3qq41cjXyGcC9ow6JCesdHKEJTiz1kNA4kRcEN7dyxvxSFz",
  "key37": "4kMHikGfiCfGSnZspXjTAdxyKxeCK2oC8HZAvwGfvseAV7hoJdaRTPjUSa7gKPvvsAXSrHABQUrgkPstNteucFTR",
  "key38": "3rdC1VMP1SKL1BEWj3DyUXaNja8jmfiHMfPKP2JPbYJu5V86rRbxzBjptyZ3rZV7DzbkEpPDiUqJEyRhYKvKNdu2",
  "key39": "5juVc4q3NZYkKiHs98NprDVwdmoNrDyG7YnxQvumPAAZmrwA8yV12FRbdTf733RgjyTy1BxFuJPCserF2H7YnC78",
  "key40": "fvER6zqkgCX8ywvNXFFz8dKrDYvRLXGy7sPi4HTiuBixKgwPeVRhMzuEfEvXhgWNEz4pmoM1htpZ7XGvXPK4ccN",
  "key41": "5bSiwBcYtgidugtsjxsaqeD6PzT5WfxftboajnbeJThHG3Cw8w5qsocGv4rykMSKXnEmqEoB7ai7eqSmvi59c2dv",
  "key42": "5JC8Lnr88XxisLFXkGDHVWBxA8hsvHdGCeg9wZ7eJfxjbdrsVjEH3WgEMRfYFnjUWD9FV2d6AC1GDQcgamyv5aqT",
  "key43": "4dwh9dxRwh7sW8eousf2o5wPgK6mC25uQQa4qn4hTGhL2RTQsVCDSCJF5C5y5NWCTWHkiy9D4s3MQ9AUEbMqRczr",
  "key44": "5HMU59Ja4EZR8BniC5QFK1Rr5a4D1ySUj7y6P6uo1oUcDgrZqa2i1kthkvyYnT5w88EWH8EU28Qkv12UtDZXnt6s",
  "key45": "3HHQnWPAfCPJn72sGJLdQ8cwrHmJDbZq2DzcKFKXe1Q6AiH9phFSAm1gRdS9qvbU2U5wqitJRZ8mXrqLmfj6PCML",
  "key46": "3p6fuf5S99Ddp84kxCQgnXcMHq8VcRkQWmrgfYGbUCd6UDgVtpG3x5jp6PE2jjcBsHriusin2PL5xRaLMh7BUDrU",
  "key47": "3EV8k8c6U1bXWTVtUKXwMzyyFwm8zdaDmZmjJNEDBFfFb7nnfactXX1fsMb4SmqUvAtQmemFLB9aE1kQMW6f9CyD",
  "key48": "3f3UDnqKtrXLTqt7Uc7WPhWjovaqojhoWrtZy4mGcxtJowWqim1fLNSWM93KLruiwNQjcJaUP1bs1Ki2RiRvzruy",
  "key49": "gNoxnFJcgHdUpsTZMoTHkH7GWvGJWqe7nrLXkeW1CPLijU4eDEAiFELuesh5FSRNwwiGTjhqp3q7idJbHtcqmHM"
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
