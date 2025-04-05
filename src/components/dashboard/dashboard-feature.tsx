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
    "39Eq153VHuacw6wXdyWbAHHBoii9oCQRtY2qq4vDe3fa1x79U6iDdyteiAcwfkvcxisUnvj5W3ycG7vDiv1qSFxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CToj9KudXdJwXuAaTHCexgqUPYCjb2Y6WFep53WaWbi6Jv93vecGFkSBmxzsjeQfCsKdUHDu4N9hqihvhTjT7qG",
  "key1": "4kp2G7KHWx3PRxzBG21eKJFw1Je4xZEvxLGfhUtgcQMPSPTMfZ89L8QkP8MKqxLtrXVcezB8DX5svmFxjYFnGSTr",
  "key2": "WM8rzhZD8zJP7SezM4URWoSQpC2LAUHAHGczW1K5xyaPNak9HY3MSTmc3eHRqp6zGd7gfPZnpzWxYPSN5EXYuGy",
  "key3": "4eVDZodTUr8d1LqcqD5qvcv7b4v4GS7SAJMM2xBDkSLG2HANh9V6KSnxq3yGNhFwL3WGLB98tnVm6jfAgS8u91v",
  "key4": "4wx8J1MUznYnhj6t1qW3eMogJNPzQrJZEEYzHzxX8apYBC5WvydSMJFoQMDyfFMboEK9xud3FwQ2TGbfUVQumk6F",
  "key5": "4WrjXHtRrpckKJkLeD2Ng19q4E2Mv61kqdT1u5v3vNhG2G5TLNATAvjDfgEYqvdG1oZtCji86BRz19FB6xxmU4BZ",
  "key6": "2RLYVupWVE4ZZwSaAby1HgMJoXFZuCGN9z7pCohMT3mjaFoZjLabBNMNx5HZS2ou6WGmr3jruZsYrUucaQcggh4L",
  "key7": "5s69Yqe3veeRXQRvekwXwp4qb5LTG3oZuAGcWPv8HEGpQNeSYrXk2xuoEHS1jiJdYEYzB1wy8uEzWnpF1xU4281E",
  "key8": "5btat95eCUtMAjCw1oswKiE9BSvAKyGWrSkAGMBsTsvisVkScBnS88aAaNi9zrppiULX7YLFg8wxXcaBDpRorAeF",
  "key9": "3Ewx1rDFJ8XTkEZitMCywQrRpGUFWQ52SkS42gYdhykw6arhFC1c3w9m6x9mtLe6EoCUjZsMEeqwWCiFVdRNqLwG",
  "key10": "ZzkaQ2MD6J4bUHCJ6HFg81dvqjSiUn7cMN1GBEPwTrUyvmgbS2Mrbz5UDRCMsbgLK6aGZM4P82Psooy86ZZSevE",
  "key11": "5t6iT6diA5rmtPpBDCqaWYz8jqrmS21fWQybXdsXFBEMAym37gpY9asbv8UWKiPeBQzVZQ4LE4ETKqV2xci6D2dZ",
  "key12": "2FVa8SVpZjmcAhXWwaZREwhsRRoNAnVHuFusWCcGGoicNf4EGq9a2xEpDfGFXKsqqHKWPUhBBdkgXG4SrSxxW5QL",
  "key13": "3YmCxhpmGCUru9nWM9Aqp4ZTFYRJ5HaxF7Lj9FSRM6QU6ELpcFfbucbaDUTPHxUiFs2vv9X7zTWkhzDpCFCJdp7c",
  "key14": "ZdZNvRTGDtFuHaRh3cmQNyWGm3TUvuHYebfhxGBiHtJL75bijrcpFCrEHPQEFpopYCGMrTXfwjFYoZMGsDBkiAp",
  "key15": "42zTC9aas2d7dNL29nAcHfgwUUrHSyEreWCbv94pjspVCUh8vr41PiptiZoWvJTNYmChmRFRkRfX63c6XSggMfET",
  "key16": "61Qyi9VKKUehm8QcgopfcN6MXEYz9REzgc2MZRZHX8TB2es2WKcwmUoU57yY7Uc6UeXY4XYA59VZcyTjkRWMQmek",
  "key17": "2teXAiV7nbZkW8tC3reAekLJs2ZR8Wh8JjCcstng8DP3jp34E69UKVSUYf7DZnNvxT1VcUkXPyvzLhqmzfGZgUG3",
  "key18": "5vntqPHbXi66iUTuDyqun5DenLH8pgJsvt8fHj88qbV36KuR9GXoYYrnH9dAw4edzYfiyzJcX9XogyhdSw5T4RY2",
  "key19": "2pHmED7LeWdM4eQTxyvh1CpsNF21q8NsjXWCHx86WDrYnziA3vrag6d5pXoQuuXmsXU1vSxpSpR72zEXVMJ53ePu",
  "key20": "3KBp9b4m7rUXvFRmBonzmvTsjkUmPe8b4uDzAHADwoXex33HYwM9wXsWHyBiTVLyJHiR31HsvSDqJkvVaUm63RDf",
  "key21": "2JkukDveJk3hbsHaKCX8CtYfeAfUGbrhiUJfpCc63Ks4fJgtWBVb5j7NT4ysvMJ7WN57z4PZVX9DRfqE6EKBShhJ",
  "key22": "39ViaHA2W9ZXfwAEqpSwRoCTZ9fSF9w4HtNM4a63GwcYziKSqJFRmdsPyn8sxhTHbqWuPPwrns4fFpAAGBtmaFs7",
  "key23": "2dbhiMf1ZCAf156mJn3TWraVfZxMMxbZHDH6tptJjKTnR2QK2iAFy7rA4ks7kn9bdJoocCynfEZFqjaaZHKCZhHk",
  "key24": "59vWPzj24o3ipRcqjc8an4s95DsFTEJjLMoRjqX7dWmPmGdn4Lv97ouNujW1xddknN6Wi5WzFYrX8sJuFwVg94u1",
  "key25": "JsBCU9NC8Yqj6kUd6sBYbTfV8SZi2xdimXVFhZ6GQebge1T6Sf8tNT67o2oTkanpjpBP2GRDCcnK5fiBuXyiFKz",
  "key26": "FEK2twrkxECUavj54ZsASZLxBYbJofcZyzL9xHEMMeCGjfp6izLjPjh6YrSzSXrwBx7UMDmBQnp1NvLSg62TLC8",
  "key27": "3esYGPfe34bWL438HBX4EFT1SRXAD5575DH7Gs4Rb3WSeCFX3Q9EUyR9EHwZN7LHTEhqdfev1qCeW3qtuwDEz3fP"
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
