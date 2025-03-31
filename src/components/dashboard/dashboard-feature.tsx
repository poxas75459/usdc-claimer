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
    "2BdXp9jyC1bsc1hvBnwfyh4U1tMbs29ghzwfD6idcRXKx72aJ1Epc49GDM8TrSyGKsTuwbVgWpVRR2TTDcmvJZyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DhyavrQr8TzxU6PqmegYYhqKnh4y1Ev8GkftV8kWH7hbsv4LfbrDfzfaanZghXuqDYEwh9okfWXFPs9scmu65SV",
  "key1": "3KPfkDfob9RxZcDPgbxR9uDaifJxx4YB1cYPXup2adDkK3XWnYJivkpMiNX1GNuW5fdpB4dGcp7DSXesPXvuoGKp",
  "key2": "3T2zmQbELyPUnGu2nWzi55Le6HTjonq4ezCcQ8EZtg8Wajjv18hGpahN7pQpMbLi3hbH54BqHuZeHpbpCfzYrXW4",
  "key3": "2uWWESCGjpempPqyYoTfX69DMfoTbVhmeDaPEutNvn6NszTCUgA9fTKuQrtnv4PEf1wqNqagBYhu93rXmrvBgtnY",
  "key4": "393tZFzVutB5gAHyZR9ABmy6xLSDR4X5FohwdKY2Y2gjPKB97XQrk9PcUPRfmmUhLvvufuJvyZpWHkeJPV6Dw1No",
  "key5": "3HJnajJePCgYC1PjAm6gu71mzDADqBmBpWP8tP5ZmdddbxD6eToDg6ZFht9BFnNuhau95rmkhwJjdpcuehtrW1N9",
  "key6": "2fWHminV6fSqRY5fEc7duhErbQSYwHQvKNYjRzpz7hLocs9HAC48WayVm1j82PBzMDq52zQezWr5BMPivpCC4P2X",
  "key7": "3Hytj5TWfDe9nQnuhWLndM9B9VehLS18mQQVLHBkgyxK6ngZV8VGC8dVzpu6ScF7ChJVzj8bdYCn7QB8NeF6E1bY",
  "key8": "46mrfxjd54jiR3nbrfK8iSxGBGKARSn8VJkWU73zYm22txLzE33PjyfPHB7fDfBtY89Y7RSvcSqGoK75CVU4k9Vw",
  "key9": "2PzE5UxttkPM3TatHcJMJUoP7Hqq8MEo8aHrdn12Uh8zsHR4DdRLXUCQG5uugHE7GkPxjby3KL6FYyGYtnXP5MHK",
  "key10": "3d7mMX6z5eTzf74szWUxR2NvVkmibjRVydpC2t5RASm5decuJjdJzLwDYHN5SaNcJPukmVkcEi6rtdXtqXGjbj5J",
  "key11": "3Q7jfvprCeZ1jpvMmx4sSetDtEoR5JEeJ4ca2ujVBjsr93adNxRzz6cPcbJSkjdVqtJjrQA85hAbNiNo9JBiNrh",
  "key12": "5fTZW4X9CUWtnZNeeCWdytVPfqcUD1asEprXaxrMMRspKvkgcTr2jWKxF7U7GvGxj7SJapBewN9iLVH6GmxZ6aXd",
  "key13": "4z36eGryoV5pdqaeX9tXgvxWvFJXice13g7dM6GWcKGHbCscFwteZsimfsSbDVTU9QQjm3jH39jNX3W1SzsVTfc8",
  "key14": "4rqsCBGnX1D3cNxvhWWyb3n5c1nyRKdco7zjygt3qMiMqVxiPN9H9R3VfxhxSLemPLmTov6xiut4KMDCgTEyxMe4",
  "key15": "5gsKDh2e1fWGJEA7P9Y9N2RG272xf8FXgmU7vnZAg2H2eSMjKFxbjAE6uSz3grWf4N37qmeBrmqDBP3jeu6oveyK",
  "key16": "2zBzgRbfav4KbeWQkNwLQdQUQpbAfcYa7LmPswCcboSqyAjBCzEi7LnoS6HshUwfu4LRVLZandHpCJ3X755PznPP",
  "key17": "UjSskZPrdxY6rPh5gPEvK9ae9cM7f8j14MU4VozamZj1RQbEbRhrbXqh3jnXiwBnYCBMR2GB7tY9HpJWLScwFqc",
  "key18": "aTQKXC9uN4VKuwKcnch2bdmzBe2EvkDB2yd9vWxUg2mFy7jSwR9s4rLnRhNHEAYRZ87wXewTwVzQVvYosZnPRtp",
  "key19": "55k5WhKHM6pDtT8F5vGAt4QVBDwJpqnfc8BFtE4wdYyrqhKZN6j3MXHPGJ9ePNRTK12AQsqHh4VvmfTXimEVmu6U",
  "key20": "5ky3rTrDSfHmPP4h9vC33oCfL1upJSrfW5VCy4z9JwqRpaEhPhYt3BeT2HbrNqbdP3H16Gr4kqSABqWEfYAxsHzP",
  "key21": "65ndeYjU6LwtGvNUP8RWxE1cEd85oKEdMx9gYh5Ghx7fiknWFsf3ae9Fq17u54LEtLN3qDh8zKM7ac1vrtMEwspA",
  "key22": "3Lq8gpLyMt9SdzxQFyJchR37pVorSfaTn9QC7Fp413DyWNhWfd6hjFAgXB5ap5YH7NV6oq5wdFmhh1LLzitdx5Ki",
  "key23": "3Hamf9ii2XUSh6T8aLstXJ92fTuJtn6wYhxNXcnwfqfHb9p5F1agc9rx9WG2mNCCxKeNQN227ZtTCdnFJ7mravDe",
  "key24": "5wZNqD2Q2BhE7V5UStbRXo8eddAoukBohCR1y8ZCJLmcAkJciX57G5h7uFvqSoAU6sNvNbknAqHfA8yrbyx51ptc",
  "key25": "4k3QysKknukRho6iBM46gCYtX8g9tzet8vPrpapxJrLMkoc6aM9JxoCjayPKx6Vs4d651dQJyMXPZTC8AD6Df9qT",
  "key26": "VmsGM9DsyL2SwJxQqGrpf8tQyiWs9kSsnNgxsosvGL2mF66RJrKHxhX3mbMwoUPibZzwYgEq4xSEiD7MBRgVmWn",
  "key27": "32TVeqBrdZFWuKS9sZeCN46bpcC9p66DcB98N4GBBCzLaLUiEHVM7ZHjfWuPQVAwHR5o5EeTe5eUT5Ur2xh6DTfC",
  "key28": "BK36JDpxUbcoJ3QvmoZtjo5U1VBsWJdziJJHNTa7kLL5aqddUrN82nU1jPC4DgQ2xEnVUSVVKbgDnkFzewefFzU",
  "key29": "313CPoiXvd8Nr95Nct7jkaa1S5hLJ2Sf7Q7wsbCxKVJ2fJkwN3wjM9qJc3CDfTqjCQViwSoEBa8xtfEdFDys2PUw",
  "key30": "3RuPTvTMbtEpHdqJid3yUY7hVjjN2V9MvYfjimBNAckpxtgNXuBvMc1MpYSF6cePct7U5mXW1hhtGkLRcAps2WDy",
  "key31": "51VS44YmHNq26H2aT3YMeL4QRhddCEyLAdQUUoZUQq3TPD6jUqW1arifEGUWvWdzoDJLYzMLfE7pzZcdsu74BfvD"
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
