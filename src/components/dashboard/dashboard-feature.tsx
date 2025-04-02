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
    "45CiR6HEzrf7JCPjf4DrfGYE21Wzydy11u3XkQNgM2BKFdyyZs9mCwC9UAi5vEpUVHN43HDT5NwMGTyaYYuLxLZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zW1FaN5jsK4fznTpGUwevrLWUbJSZbDa5FoMN1rrgS7WjRgZzEsGBcPqJqiE6TrE18bCSjMMb1D3NEjcShYQqFK",
  "key1": "Bdic4AbRTtbJ2kG3mbBnwVQbJQQC8nkqDQupd6gtMvJ1NVVvJZZ9UCT9oxGSJ2bJStPNh1gG6eTjqQ8JDXAKePv",
  "key2": "5iAxM6YNqT7jMGQaJRtd4WmKaNpC9SrKwd7xMpU9cehJwaiv5FJRkHRy4Aw8TRV4EJxLoiGsHdQZwaWg4YzgTj6C",
  "key3": "31JXmimthdTBXWGo6G7UUcCYBjdmBS4QaB2yaM2AAsNbzuQSrb4xoEy623dLovbrwxAi3J1RW1KXHGy6SqeqFn89",
  "key4": "4iThjQ88sxr2uFYoQQHLZNU22hA7hp2xpmi3bnJS68iE4vdheFhS1SeW2gdD8cCKVHrogSvMUTzepSMWyjPiXtRK",
  "key5": "4vmugDGvw2yF6AKTUj3ziNTALVNccnyr514YBABZGvFepfoTLpWjLYXoWpVNCJSY78T5D7o91uvm8jeN4jPDckP3",
  "key6": "3x2VhMqgzdHxKppbh1He9caFihY41qq4iyQb2o26qXkjod7K7bZzrP6ytD67HRfid4XewNNw91mYcjBFgG7Embcp",
  "key7": "3MAEgiFnMhWvebEn1jiiZYZgftFuNreR5nZ5nDbmjJSzLy4JsDbQkztbnWwpAUqzC73AJewmmVfovsR52FFKWamx",
  "key8": "2MxeGqpHAQQL41MNQtysK67DGxjW5RJebViqUPUK1Vm7aSP2nNQHEFuLkPRbMbzL5F7RGxraL9mL8Bfmnirfy248",
  "key9": "RzVPjYt1vB5FNwkxPtvRnejWJGJXeXFu6DCHV8B4TSv3JZD3PpUyGFe8uMEQcccWMXZcPkaSzpFsj4r95q3woxz",
  "key10": "5cLBLKMBYeRXov11Qhji57Gyqxi52diiPr3y8kLdz34WND5RWsd1CcCPPxNzoXoWHBQzHEAEu9P8E1EQK3gUSXMh",
  "key11": "7rnbMTYRKzn5WP2J98RPSHD2qCqyMAnJHqb5yEtu6d5Qoq64zy7p1Tv8jqchnZvNqnjrpDddiZWYiWibUyNm6mS",
  "key12": "5HeWb5D95cTanCrz37kzMAhhdkg3w2GhfGvq27G6721ynhMQPawLeELUEFh9FLenFFw2mkQVFFiWUXVLM7H6o17t",
  "key13": "4SSCu3ANP1yKNCcHyiTtHpnjYSY1f5AQQiYr1PcnC5sp1EkmwE8AUHKjxLZ7ikmeqk5KGg3pKnc4taTu8p1TmFY8",
  "key14": "5o8V7UN8RH6dQzR9X51H1FKBbsuokdhjXdah5UwdDoV6XjgvD1C1KCgbVt4Qp8NotX8GTmknDdd7seP8kGZBnxQS",
  "key15": "PYpJnSM1ZNWypVKAkRZtXQ6rHae95n7Vttvab4Yp8JQaFhPrd3oZBL9TjL2CG34ykKiqxqmxzEj3RZwZsy9wWD4",
  "key16": "T1wh51JWNAs9KWc4nPt5bdBe5p6Sg55Cgy7Wvj1dUoqBBHCyqe7J5pmPamCsJ9MPNw6AfL5gcMbanffRTrZGMgN",
  "key17": "3pGBGrntMRrgaW4gS8rLLiVPpNjqqP5cwqzezGxvT15FDr5QkTW2ZDEeBb9hrmDaTeb3NXZgqK5YaMjXatU4q9jJ",
  "key18": "41wKvWdjjvMTAeKw2xPekaw3UESnJiyDhMR2cRJQEmMHaTjJocC1SGtanAx7JAA6QnnHzxij3jmhFmyEs28u4Tmc",
  "key19": "33E2iEoJoEEpzLaYZGnfbv9rLpwJa1TD3MCGGd8EzgnCgvyJMg8bPkHsZuGPCpY49RnrLnfCmn8Y2crD1radhQcs",
  "key20": "5c4Fogxgj3YhME7fxuA2NAjhiVFDwBmuPPMSTA6ZCuJXuTWXDtRVRKsdyrNq9aqsGA43WSG1cahAohDNmkvUYRFY",
  "key21": "5egsgk2tYyo5aAG4nUE3skpNX6kpsC1m7tWBW8MRzUX2MLxPJZFG7yDTNDZtmLg5g6Qm7Z5dVKPqQcgLGD8Twgk9",
  "key22": "51UuS4K9tuE2bWJQEGHF9iWNW1ZvgcmcEDwAnPd2WH5XwJ8FDXePJ6PijuefsJK4qDzgxFUDkTFNAmoeHUidvSgY",
  "key23": "2uYAB5j9ncrPL9PoxWqU5u5vfrvVDWfKWsx5AgKjXHnM15gMTV45H8QXLxrdtTmfHuHSv927qRuB287qmHHAvS9",
  "key24": "yFEMDL8RJeEv8jzJG2EFAnBbyuTPxq4QxaXdN8zyDqRu3ZntzSXbBVWYYQZDTozSU1rtNqQGJCjuVa7UpjRgrtG"
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
