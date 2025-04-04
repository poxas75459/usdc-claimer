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
    "2WEfqoRc5cqFfukhz685sw9rajsVL5fqZqJR869EACP7qdqD3Y49FWEiSdByupkJE36pUi74xTp6aeLcwUKpHpvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SDKWuJXVTHiaPoEGwbdL6jasjV6QDw4x98baidb8AcdDCFGQSYWNvMVwcvirgq1oigEK8VaSJRrkxcdug8XqmAz",
  "key1": "4LWvgz15FGSu3RPvFJ85HweRFYadBMerfJzKfxCYPTzC1sA8ErYLxG3xq3q4yfqR18ytZc7Y5HfakVYr5fjitjNc",
  "key2": "278vg2CUgWT2Mwv2HeDdfdLBydgApjnQKX4s22G3GbhZpHFVeGZQ8ihsGauddpJabQ5QEVnCqVrhxFq3dAnKnNcu",
  "key3": "Mz2WrLnP3b8BmaJs2AtHfWFkeX3vfNPrUYyTsako2S8eZc6cMm4by5nRanSieR87ySLq1QUhimXtQZ4eiPDm58x",
  "key4": "27QqRX68mwMcC3fg6CejUZEQpJA8KQTHgDCBB9FRiwdrc2BGuoMfFJVhpFrXPkUMwgn3Sid17NxCNyaSXxs6bXZu",
  "key5": "4GGcYd6Tj9BGzTXP2wCyRC3SSS5KHXHMmntvgz7TYnk5H2mSNZjXnDYJ1UTH9XGK5oFSxNvkefxbrwr6FJCai4Wf",
  "key6": "2h6P15dTrDUkeJnED1zoMGqXxQbndMQWd2chvBRSroWCetJbZKoyLYVGPkShwrEEQqCkjguvhACJbfm9v6UnAKbt",
  "key7": "3YBQceRLHkbvGHFkYMaRrV14ZtbgeNAZJtA2ge5BLiFdMp4jSxgNcEeC9kzMRg9kLpPxPeNvHho4L5R5EFX4D129",
  "key8": "gt4h71cDyipxJWN23sfY7sSX1r8fhBRv7o2LqM2mHtgoQcnEErc2hPLuYWcWWH1VvP7JU5bFNPrgd9TwuuB9gSf",
  "key9": "3R6SWt72YskkCogEh9DcJ5VfdEas55iR9s5oxx1RK2wVUyXMrMzej1vCWJephtgEDvHzrBaEQjuxc1TQFj5xvq8e",
  "key10": "2ZiM62ybNkQLCQSn6gqyJQfwEQqXHCXQLsBQyjyCVbuZx3HeMzy9XDMomALrsZ5wFWD7iUuHjVvNWsFfRXgotfHP",
  "key11": "4ucpqz36dgt8eCM6WD8TCjhmraqhyVeLtm4hgL4HzzZSXSz3yBMnMbGMU61HTj5JWJDqkr8dC8A4SZf92gdMEaz4",
  "key12": "5eEy4Mdd8uUwmTzSpxtmXz6hV64GpqQn3ykpm92FKW9osthT4DyBz1HJ7X7wyccAqMfUBKs4quBX7m5ZYJK8uoRT",
  "key13": "66SNGPxh5QrFTHftM4ssruNQ8gFYVeLFxDrdRz61irxzGkSdMv6ojN7FTKNHPTtYWUJtp1TwxkwjP4PbjmVX2Tdr",
  "key14": "A5n2V6LpP22YV4Scf8jf3XN2YCsW6kLVzaBmPDQCQJ8bYbg1C9v9qBRBF8AHWStXriatxGTBVGiZFf7PSiJzwUs",
  "key15": "SQ7guGfQhhPKCydABXzsZqP4VvW157tcrxB4m5Vsmnzw4KCXBnS5wbghzSLYh4BFDdATADM99QxtiW7N1A8V5BE",
  "key16": "4Pq1bY4tbm9LQcJE32herov3CPYqfWU3hqD4V2GZhPg9ZLEys97g7E7Fhenffw8taJvQSR7EwRVzLbEdQ5mJYpBM",
  "key17": "3bs1q31TSrKo1Ga1tfj9Zkq2P44w49LybeKJKnUz2cCrSZRNLkyYvS7sMJkNfkcTe7YfRi5USbhkGjxBPxhithFJ",
  "key18": "3vmRcQVoSQHRQQ7ufMt6Ks8G4LNeTvFNgcKbMCJLKdQHZgsECa2FrHwNnN5rdrUhbDJxrqj4qNmRS8dyv9f93rXF",
  "key19": "42gbqeEUhdiqexagJbC1gUnWQBEyR12P8DneSngnYJ9FgKfenUxy71vCjHXXegrmrk92sX98bVrGL5uwvxLQgUS3",
  "key20": "21yU8FuRtbp1y6iLLEuwP1FjDrrHaVvNi7tW9ccE1HhAs7A17CoJ28z792Pp7BQ9z3KgREwoH2tiAQRxvfSSgiyH",
  "key21": "4ikjucCSF9yu4Xw1qCDWXSabZyp7kqUAd1kJXamx5buK8BbSuBeFbDdf1KEtDBYpgAA5Shz7rVhGDMpDUEat7k5J",
  "key22": "3Acce6JctABEzoEPgNtncSSzrjf9T6P7h82KBXNvrr9pojoKbywd8K9yyYtCDQG8vkpLbEKr4S2apVcQo1aai1q7",
  "key23": "B9RsA8bySEFx7PfvFUmBirs4HwdBLKRA3q67AtH5ALya2se7uFi8yp44vajW8pJV62bh7BowFBHjTUSQ7K135mP",
  "key24": "3qLnE99dfr9PPqJGTGqUksw5xeJjykD7p4zj1ZbXAxBA8QMyst9as7WEBBgUNUjNBS8QPjqtjCtzCLzo6J2YDusd",
  "key25": "2eHXGtZYEvfz6W12w74C8iBsbNXCAGd9HhnLiCvCTvXF2Hmupp4JNLkEC2zaLsjgMrqeiFmhZYox7Z8azSiAsdat",
  "key26": "ivF7zUCgLQCWNs2vyadPsbAaR9EyQgvjSroo8P4cbXoBRv1R9eN1bCnDPCFdSzUAExcpd7aop7MvUwPHDWx8Tz4",
  "key27": "3MAK7zuU2gMBmQkp6xGnd8h6n6dE4QTpfQjhD4PwtcnSKXP6DXT1VRzEQoozC8UxEng3GUS94y9CHhkvHHsX5HoQ",
  "key28": "5FEH3fyiU8Mng6ZzfCxMNBxY17cCt8dcAbVxtvN7HRDJu227Cq6GWPvb8qYoBN7ECUPumarSyUKVoEKf73MsXyi1",
  "key29": "4CX79gUkXgVpH921yBWuQVKJ9HWQtP2vcCn7neqQnW5waGqzgwX2pPYjbTkVkT59FKd97HGMQaCNv8AYNSqgEaEM",
  "key30": "4E87x3oL4LRBH2cRUxmM1hk52ybNm7q3DXisBCB93Kxr5SbxPNkGM3B212Qu5WMjfkMnBG8S3KtgVW7U4DN1Yq8w",
  "key31": "BZ4pksTUXjDy2wdHyVPUbBHBQSRvfU3ce3nhCvu8w6VpZH9u2JwhFDpVXSTHUW5sTEEUSYVnffqVzodAs5C76TZ",
  "key32": "4qnz6q46A1wacGE6j5iXumBqC7K63BRJ3eCnWJnpHfENXiho2hV4goxA1hKqHekw4GhumPn2uiV2tQd6NE2akKGW",
  "key33": "3ormyZkWr3RokCK6i3PeNrDHQPhUbx61k65kYJf2QAFSbETASqfSMjXiCptJRgsgHwNwKHJhbPkiHf8XENY5yNNk",
  "key34": "iDQ61HCTw1St9azmbzuFn6x6kEWRdRETkQeHssHfEmLttLTXvfv7Pq9iE4LL7uFTF6bh2r42qGquyAomPxNPgAc",
  "key35": "2mJhh4gLus1MQGjQLaUS2xgkbRU73vAK58xiPH9PSDRjqxPZaKXGz7Ku15hf8PuKySsMmm2kWmN1F6ApuPKKbT11",
  "key36": "584iesqVQ4FZN9Mxxtuf5wT7uRJnWtUA3AESKwzdEdwcbQFDxKUzf2rrMvJ2gBciDb6B1oVVvsMejSjRbq5h51YX",
  "key37": "3udyQp2N1Q1hihAGVAL1onwoir7rwFuAzW7w9Mm5UrsvrkndpVR5DrALjyTuAmt63Hi1H89ktJDResbA54vjwcM",
  "key38": "5Tko6sZRDJHyxhZJ5Rcegij6WeH9s7ZwYnksKAqtEY9QTiio27C7VaLXrbSQpB5FP18aEpBMfjPc85X4c2yUDgHu",
  "key39": "4Enwu4reR2SKweLUBcUuqaNizSvy1zwTKyhNsq5YJLpGkFYThKTM64EFyhTNGS8LuYRuewLcN7zQGdx9GrCJWHzH",
  "key40": "LE6FaNHLm12UAxRckdRSD38vrKESdDpGGMiKbkrNnJrghDaiL3CCQSqLsjdgkKgcHREcCnm2k9HthLLmy9S7AaR",
  "key41": "yv8WRngPqoUPEW9YAWhBpKNDRENrh53fAD31P4tfsqewvpbA8KGKq6KMpeaFJSjapmwCunKdAVcBosHRYjDkF3k",
  "key42": "4daFhGpQP4Kv9Wiry5rQmvs9iRXSpM9orpZVoRVDrDt6R9h8F4vdFzx2MqA636f4a3rJSvKksHdNC3uCUHwJ1SHe",
  "key43": "273rpPTgHb2mSmk9S5JFCqyfC9HYtJA4REULFM8LBx7ncx5DJ8fdJc5Q5dmn1pG5qJmp4TsewraHsSN5mq4XXptu",
  "key44": "5A7EHXgWgfiwFPfSvnGDZrgYoqNRwAfJrW93b4Czub3qePs68qCY9VXSWwNohUnweCfxng2zMqm6Csx4HzLX5cFT",
  "key45": "5CMLsNAMNkC2JDYgA1F1NbofTqEo41KYRHqq93hRqTwyupNKzNHc6mm7f7gDHRwGnjDmfvTKrR7hR2KF7i3HZr52",
  "key46": "51T3rVugmMsEF7TXgAbZktc1zjAr9YqMoYtknHXGgsT4FQGRhbDxfSPtuWU3iWEpSC13BKuKqfesUNf6MSFfDw3i",
  "key47": "2GxiPMuPN7MSgFBzAC9ELBrMk7zpaZzRJr8ayphz8dMWHKQRj6XBbCm1nVK554xzPMMA4zbywUSgQbNoESMYfBq5",
  "key48": "5oq8TUcRFsNKfTPZyHyrpViyELTXwc2RszeH9UpYBqjH7boD6c1RRAJNJwHM9HquboUYF4xiBf8V7cS3qdFxA8id",
  "key49": "3wD98zTccqRdCt9o5GyXPcgwM5M3cz8aEvLL36tJi5JAbVArgzVf55eNQ6WLJpy1j2iqVS1xffTCrxUMWHy9txvR"
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
