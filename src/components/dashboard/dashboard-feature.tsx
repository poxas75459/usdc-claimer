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
    "3LqDnSt46pFxFQV1VdmPhNKzHAWB5VBh1vVVsYWTYZSD5TNvXykGhrQTsVBQZ5MjtisuBr1y2Y9uG3tPxtWRgA77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vhkhjb3TQwLaFne942VSpbcznmbWGfND4SCdZcGbdrv5iccnaqc4Luxorphmy3xqXgYiVw1HdXkio3p9SEbq1ZC",
  "key1": "5HH86dd6pca98GP6hwqksVvZRifoMyFqvbwy8DBbSojSVUEbtR9Hm7An8Sn7jhizJvMAQ4DM3akiqvNwKj3UF5Bz",
  "key2": "2io883c53Jvrkg221wSNTK8Nht2cNtPiqhbm33zEK3bUGBq318fpz7zvAqUhjJ7mY3ps65SahALwHiKyzn6XfUEd",
  "key3": "2MfTqM6PogfdidEvnA4CB8pTqDEfeweHvNH5eBMt3bUJ5mmKL6jxFAXZbgH2PtUagw1i8taMNRFGuew6G5SKvmYU",
  "key4": "27PNK3ZQCMFoNTjv1aZZu8rj8AQzGWcaPMvwNBJCT4k4KEEqkNVfLV6WxB8tnPd9bqwjVkGD9bzweXFYV3w9mQiM",
  "key5": "5KRkjDiBnNTQeDWMmF3bV26QJdf93iRGoQNKuWr3eAHCFcTRJoSxdRnYieAktZXCGGKnSpJMQZR5qRLX6i3Y9JDb",
  "key6": "wYzcPTMJrujzW1TUs425wBgbfbmj9G2sc8yq9tLTzqf6mA97iJqFqxsN6euTV5mNjRoift7gjduKXdgtUgZcwxw",
  "key7": "YxuxtNB7gnbsdwnAdMBnYgqpAVQJ1KFnnLerY4bmbhfBUQbx6ZoAAbYHe2DAfr7j8uhPba6LUx7YGZjeKujcZqL",
  "key8": "31A8ZtwNx6xrwb1bcq7dYqmCdSDDz9a2MrMUEoh6WbV3ZE8dGcAks8VjnHqvfzthQuRGDoPvugU1hEPtENbMLjqj",
  "key9": "5zVMRS8YmYRQyCi4j4Ji99KnHzMjCZYQvgMnTioTcHx2xjvNmjMibmH3MmLrhciDCzqbnh2RTQhwnqTRPPYMAXqp",
  "key10": "5pHgJoQ6CBx8S3pThBVk16ViQwy5eFZfnr5Jd4qEQzEfXrt2cVBrsZ2n6xJ9GXNnDCmZe7EeJpNg9dr4yac4y1cd",
  "key11": "4bvdHCGBBMY9YUhL4sPZmyoh7ngsddZLsqroUjBuriZ1TnyLJRo858gCG6uSeizC1S3x7fbLWDAQaHTHJY9JM5Es",
  "key12": "4NubEugn5Ke6z3ChYJTuJ5qoFkhM1MAxkfyAypd8yqsWDHV3B47hxXYtni8Hr5o4BgaLVaamPoyM2S32bY4wUzCz",
  "key13": "5mvBb3cbpgDerVvSQv5WpztRmYgHjgj5BsZNnsC4N31hEx3JxKH8ak33JBMC1qGevjsH8W8DWc8ySaFDEupqnovL",
  "key14": "5RNiMippoheYDpRr6AYUQYGwh1gBvpDTsFjZMGV3BoKQWM2CvgBKQ1ZQNPB5Me3dusz9aiSyfnu7gCgajsoospE5",
  "key15": "yjYqDagqTvCwrEE546J12rUPQS7VL4BppsRWLAJ46uzo2DLgacyH45PxYWFXGhTmVmL8xDHKCvaEmmzVv3NmhZo",
  "key16": "48vFhx2asg2wLfNVCcDDoaBVJX8UKYyLzTMqkLMasNrx1bNhjj1HjEvWBxtZE16zuau4akfoFAeMTFHQ4iqJCn8m",
  "key17": "n1yZ9jgdouz5AQK2XYaJ9Lo88NGnpz9BBuiXGsRyEejj5bMWGtgRN87dWFEXU54J7WYPekPpGmQxT1XYabyE4kX",
  "key18": "QUMbGa31GjVqshB6ZKHXh1mQ5frw4UnszudLXcKmdzaZ8BnnutyzptqYCm67zCD5uJ5sZrFtTFac8jqLD1rHZE3",
  "key19": "4Z1YKw6sLNQSTDRZsMHEwXXU31DPxVhiu1yWfSijWhTtX33EptSsEhrstZ9E8J2mVLXZiZbceiJ8mo5sGUHKjdmW",
  "key20": "3BSgSs2TZ1z2Q1gdCVEq4eWv9E1WkMK2wMJdX51oJNtSnjZfot4rZuaPUhrpKZ9Yf1rtxDMFJrw8JT4UXpWsoEnr",
  "key21": "5cBHkpWQrNtJmnrb5dvZeRD5AnE3Juu79aMp6eFWo1Pk7aQd6Hwzi6pFmNv2LhbMEyYfzzxZ8QBACLDX9sWJAJrr",
  "key22": "4XzApy9YfsJL6yaGzLVVqxpRJGivW3QA3kuwGYUHVdmPrmAKcadvo2DhQFsCCWyerxgoL1rSabQ581itZyuYMSZM",
  "key23": "2E6nhniq3Fem6XS7LfjPMhsftLKEkHJVTagatD3kQB1gNz6xvquNxECwEZhA3o39XZsvyDV1NqNTLDtQxUZHh4U4",
  "key24": "pUkGX3qabge2Lz1fGyrc8uNuJ1cUpyvHMfHDJ5U7Q4k2E5TBj5NY2NVsUorWJ9nQodMGvGft4fH1NpFPYNPhNwT",
  "key25": "qs6jPEoAeBQXZu7TqnEMEf9CkXztAoMQZcMFxUbSDAUaVoxhFQkqpeL2MG6SmEwzPkA9R3sBH4VPLLm7PzFhyCk",
  "key26": "4avqSa3Ykx3F7bHcQdu8FHURnBQ5kKu7yGAENGdC9vjkj5MJMEzkyWdH8KxgKpe9ERHFX9DMmCu2RewuTNri4XZG",
  "key27": "5oED9uVbW8pmxRDjHXYR4S2kop39yJ5uydfN1z87aTu28kTqfNLgAPQ5gBZ37pR4SGJPKjyqgrBMYdYyAodJ1rQ9",
  "key28": "ipLYGhF8iUgVPQ9sbwmGMMemjdUyX6fco829dmEAAeDkAjVNAA1SADKTZMp3hDsDNkEbqH4vrioKs5VGeLvZKD2",
  "key29": "4aRKmipN5MdXasnp8T48ua5pTdtvVPYgpbNPpy6urhdFvrwVVErXKd6giVxhmYgRniSY9qSE27fFZizKzMtyhBSr",
  "key30": "5ePGjmkXK73ipdHUELKQFqhADcMqoAbohC2EvNxULes2crBBtR1BnUYkHvDTwyfAvPa9ZT5LuhhMhahXDkV7umuL",
  "key31": "a62tT1PKA1vV4o7u7u845gRQ3vEvW6jTxnCU46zAUAmKYJ42awSpeVUZP1UB87Qjd2EbVaMyuGNEFLLQPir5ZSj",
  "key32": "2RKjEpFHzPTJufJF2Pk54dzj1JMuPEE7bFZgT3idjBdsqkADYFrQna8tn4TzNRtkJQuMYVAKCCxtX24Lz3ZoNeZY",
  "key33": "4ZMkiJ9EfU22dJBsEvgyo4cop9TzbNPwjtnCLs8W165ZT4W13zb61hJK6BXNkBccWaGJjtMTSMnGx2h3gPfuUX49",
  "key34": "26zghbQ9WzEgCk5mtnWW5Fe3BbsyjUSBW3jJWcZeHH6HHA9diZcAc74HKCKsVX8sMBhEbW75NuxjAg7wNFmw7LVh",
  "key35": "4HCqYSq3Fs6xaayHU2SvESgAiqAE87yqBTAMFebJ6C334otoqFd1U2hmVzmvKXu84eCGc9K6NyoiXiNDzAR3GPBC",
  "key36": "4s6nC4x5mVjeD6rap2rQyuoen9Z72zHv3iEgB3pnMU2s2ZQyWtbUm16DZ87JHEGRGeySFuBvae39juo2MHycyHap",
  "key37": "24mRRxM79DACYimNQvK7UiH6wGrG9ug9Ss5e5ToXBwoGNYMHLTEm3oi538GzMiTK3ciNFS2w9EqM1z8H9SESu7xK",
  "key38": "3u5kjnKtKRRXTgh5NXqH1rLWJFhtt8UMrRP6jkigHEXM1EvqUDXaegpGmeuf3q57mgujSCjpd4StLCqJ4AKgbg6S",
  "key39": "3NvcHhP7JKMvjViC1rk7JDWFabDg5HdxFntU9btajSLL6UR68SnMUGQHvLkabVjhyqpDqmCsMYkoQUh8rXU8sNcB",
  "key40": "4tgbH7R5qtNLABRuUajmA3gyRUhFCS7BHyDfiC9N3xNMaMr94xgpLqR7bJLshKgd1aEqzc6hoVcu3GJPEcA5inVJ"
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
