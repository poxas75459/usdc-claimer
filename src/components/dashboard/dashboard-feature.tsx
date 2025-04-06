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
    "66zvutHTkbspXiYEfwETWo9TVNcr6PJ5FGzLJna6FUe9byft1sRshJU1bgFkhzCKHortm8XxT7YSLQjin1RFJEoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F3nxc9MvJJa8zwE7rsJKMEq2zuoc5Qk5ncqWCERHmdF2FkpSWH137hA5UEx98fGpRMJmPphGEKQwQmneasmQgLc",
  "key1": "2zynJxkWABQjjdYxXV1f45LNE6t11o2ZfP4a4x2edBPykNUYtj4TCD7Sf4qkinkxR5KW6e6HgUmP7JsWq1KxUuBT",
  "key2": "2qpEw15qDNqYB4trAyXrFLdpH85sLayYzt8SGbHmZUwTPefw9RUKeHLzm4nhhrrCfFPvvtk6AJ89WMXt3t7EHkzT",
  "key3": "3n6MUVcitrQjwqZNxn8HaJWwn2kKXJpK64TfXBZwQB83o8MQbX4KKPcq5qZKigz23tz2cfzvG2L1PdvY7Aihem3J",
  "key4": "D5areYzR5AaLSyQG94y3zuQXYoCy4u5oHNjzHrwFTrcir5VdBmp6iFE3TaUbgtBGsQontjxhHsgU55UwTd5h7wU",
  "key5": "5r2JoM6dH6x2LEHZdutLZ66f9LcX2r81UUHgJDYt7WTXoGaBrs9rw3QzMKav29xEQT3fGTNgm4jssZo7RABXqnJY",
  "key6": "4bBwTBV95FYcWdDq72brBaqbzFhKJ7xgEWj5jiThKf5jqFZuwximy3aWDGYhDUcsBWcQhuSAk5XbF9qNFw4zDcKx",
  "key7": "2G1hLkqV5UbKMTDgScnx5KaXtFw3KSXKTP4rm2R9tPzSHDK8X2vDhaXbPbkFxoTwfCr1B8Xmz4sHVkRmJZw5PRE4",
  "key8": "4iGJoQvDAivLL3uUjRfSRnffSLzzuH3rUUL3vrnoESHh8X3hhdB62BgUc5bFU7PmH2bW4TUSd3iqSnVvYypkrfnh",
  "key9": "3gP5RhRQ56AmoVUsAikWay4LMfQGeeZutypqvrkXYvJffcBSZ5mSoW5d35hT5a3b8FPeiKnBSjEyijgeAm6Mica9",
  "key10": "J36wkQdkXMMdsEv9BkdeGDEjetLDqFbWTd4tSVJaf4tmnRq8fyE4qKsRDiuhmEayeeawcehA4BiyVws6XEWKsXF",
  "key11": "4zAzVBtfmXBzfQfw2KY6QH4YH9abGPyteUW6MNs8JhU8NBGpEt7MrF1w1SZzCuDcL48mgCkTt23RGRM1rhFdpDT7",
  "key12": "4rNqEWwQ91dkw9LdwEsDQiJv1MXoZLDEow77cWuQzVhdsspAXvjjc2yXJdq5oAJHczP4fMpaJWJwrtFhwFKNfddQ",
  "key13": "4nto3keD8DHBwuTWyUoqE1jVMVHyR3MHweLVm8hpomj5ajTaNbAfk3jPTY18Qw9kHFtG6f4mYLfn5mRjuYXnSsgN",
  "key14": "5rB7CjVWjrGZ3JDLzzwPV9f4qdgRt7jZx52iu32vyqPWLBfoDznuPaT2J4DH6X74p1LUph2cv4ZDUQ36b2LzBxKT",
  "key15": "2kFceBeLSrPEfvWALS9uvhgYrqxdtseQWEyd6MBpUgZtHcNuUg8UVva5RG16cyGbtkKw4dZUXG5MZmZpcNMMXJy8",
  "key16": "2bkpG75RcMmwB244epWkEm6XeFcz6iUqdSihV1ATp9VorFt2gJvCKENREUqTGzx6QTNJrvqsSu9vTubjST74xuMd",
  "key17": "5bdrMG1KKAe35WeKieXBJcAzMnpC454ShS9EYMzbHXFY8j8iDsz3UbSSiLRBksHLHh2eXwUk6uVt9frmSZxYJdAT",
  "key18": "5z5TrUUYqDAA6hAxyzcBHJCjqwLLKPqwU9xDweVGkR2q14VQCAzYN69XfcTSjSG4zcdWKP7qaRPsVCFAbJke7Ajn",
  "key19": "Qc9o7eh2bkA9ppxLrJfvE8iaFUda7rQuu7KiEyNpvixNFSDV6m2WiKwxSk2Zty7nBDVKEg8LxNy5aDQ3XrKHkP7",
  "key20": "2EqtJEW1GEyN7tSepMotr9NcTCDgZomJ3ouTmVaH2Njk7F8mZh27NSVYiFMANzPRxBKHmHYkJhSvhvSdEH5zLeir",
  "key21": "23Qw8wVsNmiZ1Y9CZoAfSCZefHhEmFAxh26scvx7MjLm5CASke139NhgRFg9sRm7YJBBBePo8zrJhhTomXckT6h5",
  "key22": "5qX3MegZSFMumfXs1TBTKwPymHcqeXiZqp1Sw6rXfzYa9DHo3C236fhmBUCmPDFWTg6ovY7oEuwn9s2tJsdnpYu1",
  "key23": "pLKt29dQuunCVkcyr8LS28anQ4stwY998HEfEp3ycfzwj8uEWLa6vkpxwsAjQvvkhuJ16kXqfLDcz1DYamgH3F5",
  "key24": "sWJ3No1AYm7LuZ3SvsogrDL8rTQKPYnyiRSSXKnEbsjBa2ZDECcmJnF4speXMHke4nes9ZPZMJv5mrwLkF9oDnR",
  "key25": "61UC4BCVXPoJ9eSpiwBifcu1gW1GxD1fQRdmaVpd6wXmvnWQjZBEfRNu1C8Wur49ZEetbupEKPXiqACf3MSbYUUK",
  "key26": "5BDgJhAwcqgBvG7nUicNkZsu5NKfhsK6isfHZXdGWy92CdGZUXCc9ubtVwBCTfWHhPb734aE2i6K1RZQiQFEjcRN",
  "key27": "5scp4tw6AtWb5ebH43p7yQHHuEY7viw2SgJPVdaSKMtrtAYBozQqQWmzwfEnbSwbaMZxyVswedG8pi9Tr65Kjpdc",
  "key28": "qNp8ecibd4WPNBXi3hqbnxNfZbxzNTYRcdeeZcxDBsumx2yZZ2F5VP9HN6WiufQwE2xGFHDLiP38Syx9rNhcvsR",
  "key29": "3RApCLNpqQcMHz7swAt8LrwWnNvPXS5AeXBFna5HWJKQkHBpM93mmb6gZwpHPTmDv5BHj37KPhEbzN2Xqrbwaozh",
  "key30": "3jUfLGanwRoF2xpvdFc4daDthKstnCbkQ5K6CVzrgmPVKMBBpKW3yFp4DTCbtmJpw3piQhKc5Hoo3RCMfvff1yii"
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
