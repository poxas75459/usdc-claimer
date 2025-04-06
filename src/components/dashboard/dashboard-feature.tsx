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
    "5eg3Ddxek6FYTWszNJA9gcBX6E19mDww8mCboBMoQLYu8eQxAG5umphUeYrDKkKMLdjXmZKnntcstjBLGUPgLek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHV3NCKgkbMsRj3KpYrLD2SyT7Zoyx4HZ6WXoKhvZVabbhUhcCAYhy4o1iorv85ba5zNdEZLGE85m3wwQkemcan",
  "key1": "4aReXFAB4cmyGgZY4jHtRtbnsMr7kFgwrYix98a5gi9cSYPZk9Lcm7YgTvcNA3W6tygGZxk7d7UZjT2t2C6tUX93",
  "key2": "2PCF5QEPoGk25GiHfx7NGfsmoYjkwL3XHqqZEooyZpwaGDp27nYsuMwrN9Jmy1cDV1pagw7jS4sNfddQzdv73CdC",
  "key3": "2HfKMgMfNGEwVrDUfh84MQ2xyASGayvra9rjju2HyBWQ297M4srNrzvTGSjZ9L5XkydpCkwvRAnQvYGYcmVFiUN1",
  "key4": "67jrJ6CvSXRCh86AhRpqW5h5tdD2aDZMCEHkVn2KPjK84qJa6oZ45gp3PYvBY98Nw9kEAcs9V92h9SJDHtFt7Xxb",
  "key5": "2G6HWApWdFkhMxryQ9uAd1jxnqH2XBzkCbCsb1QpGfkWiNDdF8xnAsqbnzRaWumiMhdoVSxga7SUB7aZjkktojV7",
  "key6": "fT24mPekTWdDoaPbyiQuh6T2gNfUq2rTtunsbyqiNr2qswXccoriZFr9x9W5P3tRFLqLPHBWA2npN63qx6sbgsn",
  "key7": "3b9TZhqPi73cBvup2qMN7qmMxyDuEkWyiVZLgnQiYkyMmvsoYDeDZ347zoHmrdtzz2MLHmdXMVccSutncvweCh41",
  "key8": "6DCBefWXn6hjXzpUtfbHNxMVhCGQhhEj2cPShDbp4VxZMv9xvycmo39MMyNv12cCjgjgXRhG7TRqSWEinxPwfs1",
  "key9": "5aRABWibKx7Xq3Kjp5fgyuRyUzhEPedqJZJ5aRTC8N25K67MWtTKmcouNo9s9tnu7JxSAwRYp2pmq4opk1tecPRL",
  "key10": "TuY2QELfLqFoRnY1NGVpqNwV1d5kkduVcEJ6CTjKHMERhEYvDL84b1ExLHRcWDX9NpuTPdBvzDVREJ1sv96xryg",
  "key11": "5dvcjh9W1MutCv2gVkFgbZjtsA6UUv1UMNxzT8KR3cLEBjW9TE72Z6RRixNAcEwUb15D25GACqmLJBWp1tz6dRf6",
  "key12": "2yoN2z9WahgadWSmxvgxr77h72khd3KcKo4gRsagPEvveatkJonNKkag5j9fFLRTyqeMEJ23JWkqPDwGnwzUnemq",
  "key13": "3mRTYFHCWPLynx6tKQ5FWS9vyhhpHbDfDQUNMFNk6wAduBmPBLpfandTNLfjeaeufN31UT21uxu6CoVzTEd4Fwcq",
  "key14": "WLb3wQKqQuiWZv6r8hagPax9cfHPujTfhrGeHvM2XsAMKKRJeEjF1GzxHGyCMfCtSxkZ7PDTaTETJQ7hr4FQ71z",
  "key15": "3fgke3bkmioU9mKYRWhVBvu65TMyihmaM8Nbv5tYcq6zvNanLnayKmvp8g4nbdbKuQPGZFVU1ieiV1icMs6Gjm44",
  "key16": "2Rja9eMpW6TWVWvkT2Y2kGypgmaN1KR8nPkJeMurtDV4x8kMgQFP2SMNA4kS8JP8di8aLgZvrNHCkic8VdZC615d",
  "key17": "2rQAvv6HjBKsuHDgg7qVo1p4NjnmGbhdA16k6HsADqJK1kwLDAqgVFT9Epy8fCN64V4qj6dUw7EdWiacT4DceU29",
  "key18": "2YbPFJNXn8quqGiEZCMwpTxMXHzTvGNat3kozSbdPJD2scvFrbNQQVnEJNFQNvSGEfLVkFLyGJNXWReYzhVTC1H6",
  "key19": "oLLKnkzpXbWeRU2gjZ1remvFTWjToRVGRpDX2c2E832M8TRL8mUVDMu9P68mknJeZRtg4gZ5ptNS1Rf9NZ7aXMR",
  "key20": "462KMqVYfd9snjRxpGSCjpFKNca3yamds2AcQgSo99GthqwpNeFPd8wvTKSPqfemnAKTBsuqremrU7RpcfmHr3nR",
  "key21": "64qutNM4gnLCVxfj4y2jjfC31VktqrXajN3mQ5zC11v8VYyZX1YsbwGyUSansLsyUkpcAttYKv6nDRBi2P4sjUaB",
  "key22": "3pzKHeTqSo8zAasBm9Xc12fGRrDi7GkCySYqRvYsU3osnUNFBcoLX9jHusdYiA1LdSDvoBbPT5STH9fxrxKataj2",
  "key23": "2ZQMC3k1z8GGSafKbW1FQGMmXFZJateY3YpzLbkaSuHhQs2df7EvBX3DQEXjDDnM8VLi1v8h4ucNSp4RxzgDuBrD",
  "key24": "4QDfA1FJ85QeXfzTssptucjTPaeXAuCCuDnE2XKMZ88oP666d725F3GTzQBmyJvP8QPsT2yPH9fa6xHcyAu7GAVd",
  "key25": "89nydfonSfKpshKgtcT3sfTmy2JUVjX6QsVF5UhTmvHzMdMJjMrJZHbmZapnDTZfVS8MnNjJCa6UUGEN6QDrMRg",
  "key26": "4dmYa4mnwmeapphtPfJyDXKt8XULCG2AnvNu5bnxNgvwzsV7A56wTnjcL5RGRBzCJMWgbaFcxXxWt9HvxoYoa1gt",
  "key27": "4ig2L3K1dntS3BBgTeDTaNZxePxVTUCsT3arRHqjcn4e9jrCDWbfE8MiHokJypdPeKJigUXx5h7JCeVAUcaB4XW5",
  "key28": "2cuCcTHE79Up7vbgHmyrBz31yhrRFxeKaLJCS7Cw5jYW5fyDrTuVxhTfvQ211hob61bFQASvy4bah4NEnY2XsHyV",
  "key29": "46YcqCpw2VKht29CXez6pY2R5AK3FETxdLpueWAUQp5FEauTBEKPTEKRzXSjUouc65ihBWETPiQXtfkXywkpeqKY",
  "key30": "hwfF5yTcamdbuHw8FGpexzhgijZhv2b61tzn55BDu7hiXoCm4MjUdL5PnSGyWt237xn3fqv2ds5zWJqXcQWENZY",
  "key31": "2QYX19LbeWHaFvZLa6CYkNDczPGsBaiRkRWpJwnLBRv1PJFr75DbbY3tqiCpGNSzc8VigdyxqbrBBzmx7DpgaeCf",
  "key32": "3CJmPwMfdAi7ypC3cnropbyJdDfXUDg4bwKECRGyr3TFqwVH9f54nEvLkAhjZLztR6H2hVxdrjBKiBfh1cL4zCgz",
  "key33": "3Gg1UxFC3j4Mk5dd9nsrDWm2KCZakSQymke2AaXbpAX4k8JRQ6b43AfXiKGp58Aetvvpkp9cx4Eoh3W4K9ZZep2T",
  "key34": "2faHYdXLK5nk2Srffk2yetPoQaG5rygHTjoE6ZwNvjJrVEAUtTEQmE7UTbMgYe59jq3GFViyv3w7niVFQKTRFb8i",
  "key35": "4RqMYdqJH9QM2iCfrgMHRbRFcFRk8AxyraaTRFC6LUz4F64SK1451KRV98t1VKWXSiBVtHAxp7jcWx3ArMLmwAC2",
  "key36": "58eXuP2MbZnKDbiEE7kRnq8LRHr42zzomqBWNnJgpaYZfXNmgPbTbtDT4mYrL41uGgXV828vfTPd3rqG85FxpAkA",
  "key37": "3tafuVQPX4zvyxZw3f2vKvBJYusq1ydVZ9Gv8iAcsU8C3saW6ZYKw8kmDkwSSYgc9c9vZMkMhP2zhqCQV43GbzuE",
  "key38": "5n5avLSEZy74taMc9sBE2kRtEiPNHYKVw7srRbNb4Y12NEC3j4xvAa2Q4FqdoTeFXhpxMEy84F8fx5wsmKUfrbXb",
  "key39": "5n4oPGqSPB71JbLVkoxR772kq5pKjKroru7yMh7KDMwJaLuzkWNuupB9cAVQh2EZ36xnhb4B7P3kKhNk5bjRiWMK",
  "key40": "3dXxjEdxD8aMowsHRFW3n8ps3CQrGUpvwGFoFte8gkqo9TYzxEoire8RERCTVjgHnM7YCFA1ZqYdmdvj1wuEErWa",
  "key41": "5JG2tFHYqaFte8W6nNNKX78LLdDxAxSz2VGRJZMmKwcjhYvHNwWCJq5yuJ2yKo3fM2UkAPi29dNy8GWHPHXgJXcL",
  "key42": "5D8a3urgcZKn81BSYCqekkUUDAHqp5FaWjHmc4fj5s7ytWeviuMxFuL9irUkCkhKnqsbRsL1jDovkxUf1Bya4xkx"
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
