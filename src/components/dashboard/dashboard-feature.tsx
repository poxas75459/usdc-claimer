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
    "3zhkLxzZzo3oGoyAxAjxFNFjFP31TaqF1iccC14a5DTX8kpS62iddgUBLzxjPUubUQ7reS88HXAVggbd5z2Ku52M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UzqmXToqmoMQXtLWr3A6JsekGoKnmecrRQvR7dAmGoLD7QdMXtzmZEHMsGnyoGzBnFCAh6DM9h1FQvkL5XXLkrh",
  "key1": "4eahC47wAD7EFbuqqUTVU31SqnyPMW43Je69wepncsUynp6t23422ys1XgZ5xxPPz5zrwgKJKtKuRdbmEaLY7VZj",
  "key2": "6au1bpiw4ucnZEjp4DVugfY87KVWoXUnmWp4ZKJvV92nn2gUBN6gT4z3RAzUijxzm1CyzEN91wFGKGk3CFeMVe1",
  "key3": "3vEmPDTWm56GMkVJiMiqi8T8HboVskE5RoULhJDRBnsAyBMjAsHCMNWMd49J8pDm7a9EF5ksw1JEU3sU8pmvbXGV",
  "key4": "2PeydQccUBCsiPbnGoyBmy2ARk4igJDLd3ANhEbjrPBwH9cgcxF5NrcCZgSMF5KD65zYCmQxpwKPjz3tk8W1sdDf",
  "key5": "3RL6TGGg1kwZWAF3tjdNgTxLo189ArhkCXFGfQ1ffVPwZYkhe2UqtV1ZvP2wXMaTBaykdWWSiukJ2HxN6TbvLofS",
  "key6": "2qWDdG2CnM5qeSxHBTd1WbNtkkDJfzpMC61vvMZGuBNSG2pAUvLc411CyGRAMfN5JidWtVXeWXAwsv5icrXtRsgP",
  "key7": "5YiWR7v5BpcdFmU6wnqP7LxC1u59WYscUibVUKmRBZadwkJucfTYYbQMo81bWTbvcL7jiqGY3xPWhmLnrsjnbYmz",
  "key8": "5sub931drJ9pNXrPJwAMsthY4Yvs2prSXKUFrPATZ7UQrnDUHTpHPePpUcmEdUiDh77XgmDP2988bkbb9T4aA6MT",
  "key9": "5qwDZiBQ1J1YsWZvTNq7fKKzs1B5bgFdTarA5PJGmvTAE5KeoN4udjLHPK5rX1sV4BUVDcfi7PAbXr6yq1Eo2byq",
  "key10": "66EDKzfWW8fmZrdPCudYKtcuwudcSnRr4rZjNjLh5XArVz82PBL4vD5MM5Fcf1hsaxqow6sbNGpwnXachCQEoPs8",
  "key11": "4CqDkMjiz3AgUgSep8eAAdUNpKKYLNpgHiNL2RfgKwWZ5CiZ9HSQHxA6sHrfM8V78FT4i8UGCXUTVB3ZTztch7mr",
  "key12": "5AfAd1Hq7L7jS9v1HdmFw8rbPm5pzUSS3kuNjq45vJmcqnfJWFUERMhUHz2gPjwWdxj8urRXnhqNojGodXk2QMn9",
  "key13": "5hwVHJdNwyHHpgacFmeQYWA7GyWQMarwDrXoarTJRjNB7Nonrr2mmFxskNDFwexYZkvj7rzH6RiFEwAEzGcivXFK",
  "key14": "LQgrR4vC9ksHHBeW1StuQYRAfcBYRB5iNApa7XfCc9owRjB34HAzuEfgtCipN2cpVa9Thcn79tgr2BUxtxjmQuK",
  "key15": "eXmLXUJjXCVmB2Ku2hivgoTPepSM7S5GkLiysozYuXe5CjvfeddaxLna2rHatoEy3LoJGECENJoKZ2w7nx8Y4yh",
  "key16": "3oynQPFcaGd2Ph7Xpxhnj7Geznc8rnEEhjFngFq8VA82w5eVRrx4eXFA9kErpX2HTRVFGfZNdhcFY5A9sEmqNLWq",
  "key17": "3MQNvjWerZdiTwNRnFqaj3ntNT9rzfgJYBeH1UtSmqeEZmcBxFGer5YAfuWX8uuJToyFkEG21xWUdbd5Vj1S3Akp",
  "key18": "4JpDpsgCFzCETYgpD2TLFGCBriT7CSrJHvuCNtkDVpBSpjdKybdGaVPXAyYpkmzMzPKWNVAeaVVFEACa5FnmJNN7",
  "key19": "iEckxJhznMiJ8obSPfYyMZ8L7BqgTa16qTLgWmNxvAsk3iY6tR6m2LeEk6nLEiwxN97TSgwmcVvbPpz9D33tc7K",
  "key20": "5SmSuw9TLAopAEgswUk63f1K8UbGpWQCvyMnNTa7khRRbY5k4WjgUC18Xs1qGK6GDVejyVjeMnHReQ6YUVXSEcvs",
  "key21": "W3YHpcTgHzukg5aKs1FV1ZCnxppFFQtgqztuqmACiTGAZisvhycHcsW6VQqmtmHZDFGkoKPAxSLPWvhjBMreYbv",
  "key22": "2p2zJ65bwdoP9bVHQkFfgrKRENnqZEo8SEXgJGMgZrdfRXV9dHgT6e5BUU4RAPdEycv7APxfPbKuXDGQWhddBk5V",
  "key23": "gVs9U3TBqm1gj3v2U3o7UEX7zpZU2xe3RGU7EGeNish8mKedxQ71GSHsbDaLRoXNKS7bc3fvQQrpGQTFAL4yzD8",
  "key24": "5SDugUJBKJUHXkK1EgsXgdHemx8ysMWq58TFBk6Z7HwcKxiuTJ4ES5gjU1aVNm32VG1yj9D7B3a4XXLobBPx1Aud"
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
