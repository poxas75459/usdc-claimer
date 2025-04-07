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
    "4nqNxtzF25gP4D4EDArn4ZyYsriA95vEGxAjhTcbNufcm6kK2W3ioqhFKQ8VpQKo8NR9YjLSQokBW1DkJ6Rk3uhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D49rwnKuppmrg2Kkn27Zi9J2MMgxqvv3bLxEGU2xdfpQihtRG2J5VQEDDtzLDrK4isqZFGYZUFDkFTWjqCYo2EU",
  "key1": "42Gds8pphj3E6paWB4ePhmMeRoSS4GUefYSnVNvwc3AJiCYxHC2A1NBXNQNHD2dqwfJwq2RRmDHBzFSEbHXi8Ejc",
  "key2": "3H5Xbw3ofgjpF4UdVv6YKddbxrLVZf4tRGMYthcATKFibE9JTF5p5i9T9V65LmDtMv2PSETGXjvV9TZqP5KT3zFE",
  "key3": "26abdMZpDNH5Y2Tsb4mtbWrp4di34hopbGjWEp15eYFkA9XNjALCyUcGBan3g3uk6XecmvpTadaG3mLaCkYKkaEr",
  "key4": "2HYno3KJoMtt38TmCMqe3aMamGyhRfKfSpei4p2aPtvzugG4cHSwKJaqW8a5tyccQrQ99tC5YfzmWE1o6t1wGPsq",
  "key5": "7DWR1R5viQMhG8xXN99v4aMcyyZ8QYvfC9UnJF49EsfB7FDbpAbMD6XLt1JsyBWefbtrpvFxz6jV7foytVqpvWP",
  "key6": "3hUnCu44SwnHbZNppEyWLdTwbixLePzUoJKa9ih4sjjmqm894kW1DNtwCdSvC4noycakrJ5NgXNYghXcUcfFJpw9",
  "key7": "4xkuaeyBv6Kwm64teNuZQ3zJ4nHYktsFX3KnrN9u2RF3K91zowEsmgFdBnaVhH4diNXLGB9P5pKh8VaoEC64jsme",
  "key8": "4xHpbrphv6taoHGTWU7MwYUwmtyg8GUq91xr9AFomqp8dx7MyqknFwuCk3qNXbhohdtJ7usvTJs29pEwz9DaiPde",
  "key9": "2Ha49a3nZuj9BQW8sZuFs5sNpJcKAdQp9mmLd4Y4JvsA2mKJxCVyh6HS4KbmD1mfLoHreuwk9wpgNXBbPWUY6rYX",
  "key10": "2gR3iMcWVmQYXVFf5HJ8B6r9FJ7QNZdTuhQR855LNWbdmyV9zgtffDpDUvBcAb7CLWZWPj99vQg5RGnFAxEqg7yx",
  "key11": "4PWNsH4g7cF9mFyesCi7SGASaGftL7ZpAhSEbignbZMKfMggn6sKE6PaGZVoMARA6ozN1wQnJNVoRmjnKcMeVdWv",
  "key12": "L6GE2abAF3p9uLQGmudcA86BnXQBCDPT255LjNwZUNHQ9cENRZLmAh7Z9V1Da98rDPQFc3Nsi4pKd3YnZTizXoV",
  "key13": "VjTtaf7cwCtytjcTNiKBCyJKJ9LSXeBMbDRZUzWdT8yeC7Z3rPKjwE59ormQdgn1j4FatKRuskaZCtAsdZAAWqi",
  "key14": "2vKjtCY5RUztiXPqTcJhm5bJEULqLZ2GZVCaxeXr7SfgPdq6YVwAWApGqSnLcKVYXTkj3UQ3aufKdVxQpGhUAevP",
  "key15": "5ZU19Ye5xPq55fe1C3xHiD3A52u5kVaGgQgxZYcKo18bipE9JoXsf7aXzMHRTrR2XaRAPtf1thLe4p8WJLReX9wV",
  "key16": "5zRx7WFyXcZiE39o9UZPDyBTZEvkCWUSkNVhZZVFUpD338HFTjnBbrjLVB9vrcgLt2kuGztFqA3eDmyZcJAhN4SD",
  "key17": "2BPTkmJ4sxPA6kjcDHeBLfEb84qUTURJZb2Bky7QLPMq4WWNZfvWwxeQosgmnMr9XAykd7W8UmuTAN9yzvrFrjFr",
  "key18": "64TzZXsLCxcoma92fhzdaY9YZ1weusoaawzcbuc28nSkcT5VBuj8uxJyxrGH98XFxVsH86ZPwKuZoXnrJ8diiMLX",
  "key19": "Vh2UdBAaPNVFp95kseAxgFbTPKgDx6RcGAnr32F4QzinzXQNNQtMvJZEPXxR2cYqqzte4djL6DDo1bo95ZRqW94",
  "key20": "4VMiGGiCuA97BixJn5F4TQx49dFqLLNj1kHtZq75rEucTQABtuK3ohNrQfahmR8U7gPDNsTFKeZWLUbtcV4BopQ8",
  "key21": "4egVbpTfYP9Rgwdj9AkscHXoad8jZo2qd9aGhYAuXSH7uDJePfmMRRFcrd3WP17Wa7FZpqbAuT2aemmnooyNRsbN",
  "key22": "8Cy7Wgv3nVLmJcHs5YAfv6V9Se527XfFREdr3MrkfMpPQZXnJayHf2o4QUGgrT6QmkdrNQLkBGeuq8s7xNMEywj",
  "key23": "8Mg1zoRcL8fvwJGfo2VNRnHzv24hLGKPutiobs6EEXZrkAentWLBBhwKLUgqNSTvjbSMYWTGWKyz93BBxaoDmiE",
  "key24": "Mtvn3J5PpxWdCK3AQE6u5ULb83rtW2K86XLYCVZfEN8sR76KSKPTQEH5zCXXNsUQ9LdjiWXt9FynRVTDPFoYybf",
  "key25": "2cVPo6n5CwDtAeiyYX5ve2LWbqaay5SyXJh67fYf99hpy2ac69kpSt4UFcKMuJaWrx5d6qgErBP6pQo9a4NrmucL",
  "key26": "8hwzp1XzdKb4wd6q5XA1683hF7LZk7rNRgN67YBtCLpwdNQ9o8Eqe9GkmwxLcb6ivMFRwcWuLQ6nEpxudn4R7SL",
  "key27": "2G5DvnJvwCVGBYHBjzS5D8ap3CkuYQbsq7DmudMrGKRVeHRYwV7VHCQ8JRdXJ38ZGjpfG8jcEdQGgca4YWwpxXdH",
  "key28": "3EE3TWAeBCA8q6P7m23HhR86zBD6DGukoSBvEzUyruRYtvrVMcjwuDNzd1e8obx7GCwwZEeicd9nbAzhYKz3tSWo",
  "key29": "456wXX1sWeVcmGipFLT1TYoBTSAT28aZTDwMFWGRaALbCQ1vCVzp6w5V6oYtAWUTC7Fu9L3z9wk3PYB5PceUKwZt",
  "key30": "5hEpN64ZXsXwJcgEBu6qq9sb7TFpvsnVnMYaVoDtfrfXwcpuEsbx6ydCMQBeQmipDMPo7Q8foY7CH84LmsVEg31e",
  "key31": "4ZpFQYER2Aj2f4P8k6Eruo7Dc7DpuJTLVugcrXBkK5oo2xN8QN9G9bWcBBag7MGAM1w49PsyGQ96PSM8UHqG5GaW",
  "key32": "B9MLtvV4HzzUGAafvdFjrX4rVgk1V77BZeE1oYXhNRmPH13SioMxcjV9WKYjZ3X47sBRAfJccN66Ch829nkbLs9",
  "key33": "2no4mqgi8YoGkkUJQsiT8pDaEYoiYTdENRFogtMJLtQz2aZhn8Je62X2BNQmrZqzSdVxG87UvQpmqmHT8PT1Smgb",
  "key34": "nf81VMqUGVYMQwLSXkgK3wwCtDP6KPPv8Be7sskESixjQ2m9p35tFS9EzKtGwWzheZWcTC69r1HJu3SDaMso1WT",
  "key35": "4EJmWy2eBsfpEysNdPPzdACHdKW2d4uZtnaYDiED5njtsrBxvkXHr1j3fCTW1dz2pQGBwF1eFB3FkzWZn5qFEGN3",
  "key36": "5EAJAFBXYgGRTUC2eMgdZRLdf6k77xkLbFB63BxwFZSq8wgoigMkmxRPH7HXqw46FckoycWSuV6pHmpZxZeDfkB2",
  "key37": "2EM7gvNE9wTi5gjmaeDGLDvWFfZDYmfpEHkzYDd27ze8zcoJZeEyMJykjdPCb4qAcXDq5JMR38bgnrT7KG2WSeFm",
  "key38": "5mboYkANuXdpPs24pX1YFMvAojUnAhSwASDo81w9K9xYdurigaCboCG2xNrWTrPpMwTg6bEZdCSYEVuQ1f1uQRY6",
  "key39": "4qC964cNBpZJfhn5CEunbavQabJ663gAPkR8YMf4nd5oJzK9BfTpGhJqFtuQpmhWrddgiFmhjvhk1kA1Ai3B87fp",
  "key40": "bCEma1tQbAEqLuEY3wE62akx2dED4E1dMQm5xe6RsJkwb22FFKLsX6eaJ5mrYGWiGNsh31cpE93YguZ8Vzs2PtQ",
  "key41": "36Pop19fbc5WezrpxeCA5718Vpk5P7pYCQJn1AKcCzv2tAG1BUYbNgcGRTsLWBdu7acwyU4ZymwFnR83TnvaYqTN",
  "key42": "4hWk3dVyTN1x4fTiVD3xMKRuAa7oxRa6GesDGRpESScZ1WC2mGAYXrDLekb74CKhtw3xHx6pSH3sE7YHCqwYzhgk",
  "key43": "4MoEVMpT1QURtyF4SThwV5JYK5FLaDhycBaeUHJr8jPp6vEx5PGacbm2Mbhe1xur1BE8kEvGqGqjHDDqjSVn1695"
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
