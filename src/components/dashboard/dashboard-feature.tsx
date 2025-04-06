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
    "3bKtSi4gHF2QjUNqzPkhii9265BqnAv22rVyvYeEh7EvoZyeoAGXSTAzKBhZL8j1SeZazoXSFZFHT5JeHYVU2uNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38zqwW5Q9epY22Z9qS9Z8EEmT1cpCsiDLsWBuctXUJLQufD8ip6HRGkTF7gQWSraGJNjdgdUrKe3mokJyNBfegRt",
  "key1": "458wf2D4z5mpZBqEWkiMquyW9yiKVBb8hSbyAYfrPDVeUKUPZHEXGa8GHPnmjPYAFPkxhmocB3DrvSUzQW191nSm",
  "key2": "Vyrj9MJtBEvCoP6w3nefm5pYg9UJpgxxdjAvqJrURDAF9dpSy3mBP5ccBVBJgPkz8whrPmskufLVWZSimysdXDV",
  "key3": "5NX3wexTL7q8oHrd8CqNUjDZB9wmhJWz2GUUSzM8mv7tvLSDo68qNWG13C95rsgg6uXVgZdNx5ZRmtmU9aRfMv7f",
  "key4": "23a3VR53xTPAg17ZE7eJRizL7JNPCoRDoUoxB7wso3p5C5x6QA3bep9ACDYPhB4ZUMkofyBU6bjfk2xfJfgTwsi3",
  "key5": "5p8fDVzaejKvLBhXukKyQx2TKi3P2i68Y5rTf268pkzrvReKrC82cK459LHwkwyVjQv1bLc55ia9fd8gv3UBk9Ui",
  "key6": "42YPZHkwtAznm7Hb4psFMwfWo5q5bu89SQqjY8Sd2tqpHaF7B7k75y1M78CqUVvBGH3hsrN1FUZX94xngNFwWzdy",
  "key7": "9k2f4goQWCKmhu3ZP2f2tpLk3xKG5hKpSzK5xYFutx2WWNU6utC3Amx3Q1C4j7dfeuBsARX6ErGJ1ZA6tHc1H6e",
  "key8": "5Vh6m7Y9RshaMgwhEMynvcv65SpGM2zmNAGY2U1bAo9pRtQk8MC2H7HeqqTFusWqx9ZLWZR7pLWkuhFBU1asaLE8",
  "key9": "4EPtQPoYw6qX6sqavzQb5sLzvxKLjTuUcRDWP7JDksPPEWx9B6DNQYiqL4wf3YzecMu1imQNcXYjSKAZwwmjw6vJ",
  "key10": "3bJC1QxiQ6a2n3NL6entcmnx277KbWEz6R176WvJUrpD9XJMcUuyn316dKurdbu3SnxU5LtVWVq773j6bXg6S3VY",
  "key11": "4AUtHg9D1usYbBaocudBC4Da3RwxJgtoLwaji5PbmcKbqXZog5NJmaeRfpxjY71PW5SFrF4q6HottZGVMqWFnb4R",
  "key12": "uaFGgtaUQx3RViMfiF6gU7ijGzsaYQj45x6wB2NsX6unv2qW35UwrXS1RvkcmQLDPWP2HPcmxSDFkyig7bRTESz",
  "key13": "e6Zem5nsHcBDT7hBzW4DvuBQ4XSQJaAfbHiZngTQd1A95z1zr6H5UEcfAPJPsTrMgYfjRZNfyed9ajqEg671TBQ",
  "key14": "5zkKrP7aMwcpVk7TiXgxeSE86oq8swfWCdQ22BY99jNmhNZHLLZj8YbBSuNJLe7hPLPJhHes3DNoZjRo4ywYfKAe",
  "key15": "39PUijeg8EpN4WvynjefXT9PjaqwSgyhDTuHtweFWSCERmfLDUWtvHMps58U9uezG6zrhW6XyRmcyuqvCx6auQcL",
  "key16": "4PwVAFvKbv7pch38QYc5CQdicFDLmp2UXrQxe1pFCDNYFm2FhEh3mhLA2HDdV7vaERxCACnzEzaF53aPyYqofTud",
  "key17": "4UPK9x8bDe7JqekhJiMscAZXHc4Z2ySvptT3DgeybqrgcBmpj2ZbCz577PupB8nFzbwHqeMc7BQrQrnek5W4T1g2",
  "key18": "23maTUPiMKqhwoiUohmCQepw1MPitHiHTy2RD7WVsuxUhuq4X91Pe6iUiPSjMZsZGjZ7kh9BHdDvp6SsWCxeA45Z",
  "key19": "GqHFib5oBNnzky91KFAmfrZxYwdWGt9sdXZAo3YTzC1GhdUvUbgfmWaVkSCFfAPyfgeGv2aS5Wj2rGeKAstYTHn",
  "key20": "TTpmR4yhKiTTpqL6nRGVVayh9JgXNUWcngkEimC79fRaiLmsCU1oeLSDuxfYcTPo94Doxzn8ajLqVr6akQ6abiU",
  "key21": "3tve4V6JwHSxtLHQNvrAsQe7Bs2kCCoB2EiKAAw5YmPtuYpVeShwcSVS4yzMH7TRgPjaq9aXpCkcJsQUKSBT9JZg",
  "key22": "3tnJpjGtArbasAnm2jU1STbrSKXaVhDrzrTvPennTMBB7kiu2Yu5wbaUC4AAXrKFSkVqSCj4WKr8GH2nzqarseJn",
  "key23": "3YsKhzF6Js5bJi9jpXBukNmEqUC4JMybaNWrWacmDJbQn7ZeoW7aTtEMEhLbBqSyviZFZxNSonBT4M1iFajc7Duy",
  "key24": "4nPWRtC1TdxuBBP1ufbnySFfdCdmViqXYqKs2D1E7d9BrXSPkRppSqZeEZ3uB6MhdsW5SifWLQwnMUowtSkyoBrH",
  "key25": "65nyeUPLeF1U7Ht9aG5kTDNuv7RBkBMYdqDamRWC2WmY6XJPprcuxa9m1ZFQ82K6mzXP9tNRRxZXCczuXgjTQdrX",
  "key26": "4yoxaereS1Y9q89Xhpso7CJEJK1SDiR77QCc5iKLih4KzpKLxX36HJeDQ4pJbvBhzLC34gwof85kJGekb9R3bz26",
  "key27": "2QZK3Sui8k6kDygeJE4fdq37uk3yvmUVQNpetXUUQj5mW56oNitCEMMaZmRpXJUdDo4aZ1FrPYaVMG2KkUvRLpbb",
  "key28": "9Si86ksqBJCakeGYjgPSS9Gqsv2MGtKzymeTnovzwbWCrPz8PKXhdLTMjXrkZuXehnpEcQx7qzW5EdpSutUXFKb"
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
