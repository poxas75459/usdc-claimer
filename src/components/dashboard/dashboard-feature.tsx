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
    "4pv8oDBfQCyhJykx7rJL97Lc5RWrZBDcDBXnvQkiZAztAMpteAX6YTj5KPYx9fNTG1iAmTNwh5foTTMViPHStQRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7MrtCux8c5yiDsdGCdJsc7btDEwn6HTUaF1g4MgwLFzqtXEVyhYLzZCqDjgVuThfZK8Lhom6UmrykTnknS7Yz3",
  "key1": "SwU3BKeuDQcPFfPrZKnmqQnhVrXGd6tWkUSQeDJzD9WVqYYTRmy2E2F5fCwRCqjHMaMDHvs3kDoafPNu4FBWuZa",
  "key2": "3kfNhVnDoTysyAEJrheBGd1RQ2qGB7bw4Z63gN5pNu5DidvKofDXvmURpdBbDDF3YaGXRWpmVuHQV77o2nyd6trJ",
  "key3": "3ei3jZJc2eKyhh2tQeKsumXmaYdzMbsZuam3SfHbSigxRQfpjYodTruBKVKVetfb7mWrQCGmrWqwdtgWi9VxaKBL",
  "key4": "53DhEot35qNsRmobd69LnbCN2M8MpsFXmLVAXpRcCtStJcR1pqVxJMbcf3W51JrQa3e5GNQBiJzLzE37ZyHEyxMq",
  "key5": "8HJc3FPRzGwS88peMS2JMeQ5nDWKV1SZCqTSm16RoLvEYF7NjZ2tAjW33QoSk2d3grhZcgEXnxFBnVhzfcVNZr8",
  "key6": "29j7afGaZsbMrYQECmfmDTkRgY4oQYZkydBsivxHAABqApygrVqfzGWSeHB1zqt4xTzkNVxZU92WnzoFYRxLN5Wq",
  "key7": "3hZF8BHrpxh2zVcwAhoXAgSq5oBQEf3qFU2Ne5CCV6vrpRGrYreytzqHDp7BF7ZdpVXTKxrs3my7Sg7W5KGXkyQz",
  "key8": "W1bC4mZm3zRwMzVupAauExrkLKPeRSe2d5DvLYKouabDQTGzvVKDdJH8RoSJy8U2tGr9QfKhEkBADMbw28rxDiz",
  "key9": "5dXYX5A1fHR1xhd7PXBExGC4Au2VTFUQSQm1aENToz39WV33RUS5LhDrHqMchdkge6SSjnySUqQ8AvN8bHaPmS7Q",
  "key10": "3UwfXJdsAarXuase98tgXGzskXRBSp5nCac6oVcbQBMPkWNaMZMn1uMZeGoCwxDLpBt6cXuxGfNnDymeaN1hgfVV",
  "key11": "5CNqb2in8XtHnnziFYnjMHyVQKjPezRkE8c1aciSc9vPwd5Uev7HiVYDJJajLRKXhNUufULbegk6Ds6y14FDDpWS",
  "key12": "4ktBWAHtWCVLAmW6Cide5mgwKWuW4SSUoT2fDJsZNuGA7WjZnnJVCX5NrVJ8GzMjsNmeTTZmAQHUqiqUg3C9D6UT",
  "key13": "2XAZ7H9PDGAkHmyw7qDm2DynnrCiikNWiMwsGsYbNR7HgCsXfZzj8rUAzhSj55wZbDw6D88Hjb9Hx9Kx1cRtBkag",
  "key14": "4kDFQCndi8yE7ao9akjVbYymTBUBDHEBLrTT7aZmbRWJzQmiTrjJAAqzELNKeaRARHpkr2DRgzgBy9iEEMvY5Wtm",
  "key15": "3Z7Bf8oexcC3S3UDiLseofZnid2K1AZPu7szzE4wFrcf1kaHJmfGVsoySJ16mBN2yb5jofcxjXhKGaVwGBY3XHW8",
  "key16": "3f6JsWUS4qvVkLJkUv4zwAjjC9cBUD65zYwm8MS1Gg91VFpQiU9wmqForLuVoQZKwdNqEZyX9dAMZvKfRQzrUyw6",
  "key17": "324GudA5KLjhumpQQEABCvbdgHLWDgeHqJi4LHUSGANDxUEeG5FH72rqci3bdB14kaMFZxqscvZ5ZaRbWvQkZwZL",
  "key18": "2smqvefhkbJfiH6ck2WCrndANHtV22SJydnnB9Z5bH7hsRiQwxeWWWin8dpc76cpQWeYEB7he5BeaJCRxXz2WQ7W",
  "key19": "2DGFLZa7gWPYG7Dpqi7fwiSQXfi2tfdzwDpjCdeCMe9zqxUUhTYcWqjigpwFc5TWqhui5HHkiSMoDtoR8wU9S5MR",
  "key20": "4tm8ATSuRPgAH9QaVsJTULzPZiQqDSfK2nUYfn3snJHGxf7HsCQwXWGaAgCYczRGmFrFR6vTr3TL1mrTTZ6fuk1n",
  "key21": "LGMDXoadEqMtn1oBmeFp5NfFXhJqhmozuKDeCTvZ3QTrn8FnoyCM8VSNyRSdn27ggY85x77sQ6iMYCypXKjfVt5",
  "key22": "3fCqeX5PPmxhhVFKwCzjH8HPfhfdSJXS4bMYHgt4WVAbehKHjWu8uU7JyUJzaiWmCLEdZNJzQjwLAystm5B3DLkc",
  "key23": "4hTA8Qv6zY8BH3VJXtvzzPCejTNgF1ojzmUvoqf6RxoCBirEmjM4jhxAju4gJBKsx3KJihNLhVB23nBXuqyS36y5",
  "key24": "UhzVYyR8Vyp7thXXQQMRgGrLDnX2ScFZKtChKb7XiykLMoFhLe2yaRJhfj2FyuM5StmGyawtMHd2MeQLceCqWLz",
  "key25": "3CeuCMnJJELrfXGkszuN38miWsTgujmym3EPT2VfN9cU78U8yihTCmsKpUc4gNWff2tygPjJj6M9pMMNpuwAhMSr",
  "key26": "5wqbXnSmuVfmVp4wcEALPiw41WRgqrWNowEVPGww5sr8KP9TAagnhW92eKcSsm8SCZGKBiC8Xs9F1gMSnU7e8vfV",
  "key27": "24FTzVKc66F9reGTucfAsL5udvzeAd5MWWAt5DgUbydX6phgdqrY3Cb2hXUZFoEaAw3gh48RumULrBpFLD2UTP42",
  "key28": "qMU7Vtr41byz2Gz8fCboqnNf1MxZJ55bnaZT51nhEufxZaaMttQo78F12AKX6yvVZPVsRiG3fHgNY9BZqzta6zr",
  "key29": "32H7PGf7TSiwLY1NeoctXkmSL8dmSWHyAWVUzCr7625GAtFTb3MncvizY5xsSu4jwUcp3r6BNhnKYjnHpjy4XcD4",
  "key30": "2VtQV8dC5yawgv9aaG3wGGnGRmpLbzH4xBXn9TtcuYuTBkeYCJ1sePXiHXgSxn6WAv59E1CeLWxbMK4dMNSSBGh2",
  "key31": "8jcUAnbasE9vg34DczYSjjEmGihFzawRNv6NHGLH4vfAFLzruxdJkK3ZZ6dnG69PN2ZVVkamdoGWVnuRuvt2cvH",
  "key32": "3MV5G8BxL91Afr9Jht6QnYaFAt8VcSji1CBrxxB4j57mT5HpEq79ChymYuntNyu8YNp3QNH4Pc12NAZ2x7x8ywWc",
  "key33": "4dSkm5VqjGzkCxW5LdePmBkHZfi4HaCkFqheVAsGsoT2ervHTyDjhC3WQgvS9wTbBfCA99nRpnpFiZftn9uUGpJo",
  "key34": "44YP19g9oLjwMBk6533bihPrBnzSoAPnHAjnPutpxq1KFpk19FzAUGQKCzrdCGHUCPdep4AVyNpBMuEH9gju3aMm"
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
