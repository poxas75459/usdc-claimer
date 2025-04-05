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
    "318azH52YbUjS4nHsBowCyxPCXtpuj8SskvXW4jfDHcV8jcdmwpJKweLK1yT1kQVSRGC721M3Xuf1QohPgRkZ5cX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kFFfwLh4Hj8jy9GMBirdfLTmuJzBmvTHGrssQeRGehjDT5W4HCFrtEgqpyZ9qL63PWhuq1ycEww5SMazjVw2X2h",
  "key1": "2w7yVKQpjGJg3eNRYQZ8wU8UCHUWPgPihSRZ7P8XCcKJKXyE7LeycbDdueC9HxkmnKtnwuKnaWK5gbEvxM64gkR8",
  "key2": "3WmAzjk3zyjKfrV1Xa84t1Arcnhuuq5Pu9VcRJU1J2kNMyVbBFCcvbQdW8nF1pei3FmEjhwVjAPSCKkzKJq7fCVx",
  "key3": "5qfrSDRHgtVdxkfKrKZLY32zaLCANQnPH8mkJ2pfiWXiYHJwwK2KY895kMqdQSeTwBcYEpNUnZox15eKbbiUu2RX",
  "key4": "Rtk3fihThW6F7oxfxR7eiXe41GrdFDWcbRp8KvDcqwKHzjFB5xrbEVW91zzvTWEpFNYsLzKuqDZN71JxFeKMXbQ",
  "key5": "AjPPJ1xEkvk9tNPpkF7yZHLvEksi8VN1TL5MgSTRkQSZU3jX81UMRCe73uYLjM6jgNm3iLvhyNBkG42oDdmeY6a",
  "key6": "yU9yVwdcqtLENVzPHc7F2i5TuVEnPtQ8W4RFA4VhN6XJLT9rW5tYtzreQ18krdnNdfMnRnkTCf1P3RN3KtVvnA7",
  "key7": "2FKAPUwTqi5UMwV3DrgQwonHpqpkgjzWzBTreGjZZVdqSH76mgt95Sm9U6yx5GwqZNSkWHev7TnJUaU7b75YagsZ",
  "key8": "4BX4aQ4E1Qc6rW4ccqZ3fmmUksNZwbd7SuK3983n71jGcqtqEWkKDDMzPXbBLasebwa1ohSQuGBk36sxE24orPbW",
  "key9": "2SuowYNF8cnpQ2evY25ZdSXRP52MZkfrEEAvkuTCSSPcvnnXpENgbuCZN8zLML6LmQN2B8TeP6F8N7PMFb1tn4Wc",
  "key10": "5RMXTRVDENy4NLHinehqDtq9CjTMVmymQbSs2ymMafb8piBMLT9HzNHnuta47TpnFSRQ89HoRFEnJa5ed4jaEJws",
  "key11": "5q6jiaec5XuR7PLb728PeCcM8DW8ZVLdYLvFvLjGE5Ze1FqvzDmPMaWweeyNdcDigWLuMLSLuptdunUb9rPHrRU",
  "key12": "3JCgJXHKTowPe2dKNS3U8cBSDxB5QVGgGZRQyeJZHKVqAfz5fPpbZE2UWXz2drebQABuW5S7kZcQM5kMGdZyHiqh",
  "key13": "4yZpALpdhumSc7X7SerETfcEmWAAWcjTcAm49edq6GXp6WVACeL2MWHrMBRqsoLRY97EGaJcvhpP5x8itiJjtmrL",
  "key14": "3Czd96RMftdxbUbXMfgMLwECLLe1bKQttHG3xvCLUKAxSDpKVRPJH4oCYFzw3M4SWY7SqffoeMBDFhuBZ94hoLaN",
  "key15": "41FM6wVTmx7N6kWxwKd5wCc7vZEUpzY3QG8yz8jATDp1N6pwytzKiBBpKAMnmqEFfG1yTUnA5KhggQCDhBV4112P",
  "key16": "21niNpesDCoNPBZWrjoJyVgbQMhJausD3rZg5wW5cpo8FeWoEhrwpgHLjKrdVQzbPFzDCzREW4XRKSmaWQx4x5x9",
  "key17": "8eQNVA9Cmo8a76zh6cMv6Vc34oNBGbzVvzomWhGw2BDQHrXxQ5GNfheoZmJePRBoUrP2e9kS58NjGYJR5esEbVj",
  "key18": "5mzrwZ37h3qFG838mGJ1oGtQgSpC5ck35wu4775u4qnjDnm3v1QxcNekA5abGb1EBB6TJDTNUDhFTCKSccjMNGaY",
  "key19": "2ZZu3UwR7QBBWHAs9dWNu1G1S3cS15rqM1pCJQnL6doVAFwGs4UWGCBVcdh5WKarDhdfXn7jEV7AXJk3hqmHZkdB",
  "key20": "2XDEoqJHvS6dw3i7gwoRdZPPqm5aAwQ6iKuympzEKqKRQtmffc7sbKgVQqquTutwmVGSEjwXkHZGzfeQV8FQ7Cec",
  "key21": "51EhHV52NHMpsPvCkgTWfoFGxChseif6ELFHFPbkS8bWFgzJXyw2ukGber5ahBRvrPfY1v92BcLdezamLoUGEz9X",
  "key22": "2EZCCg6t5arotM5yGd29Be7mt13aRj58YgBTuRKSgWY3bewxtrZSRfq8DFDucp6ah2sxZHTiNWZKqEgQgZV8yGt6",
  "key23": "2kaxdGUBsEdJMjgKh3jPmFCozta6rGC9Z9ALe7MjDy9KUz4uFc1sV6okjjRcoiDJRK8DyMsM9ZxYPWAcyhxVeWFp",
  "key24": "6CBe1ZG3YgHmZSQPn4GeWSmkr4aFdwXMEFtkP2SUJRc5nrajmkv8PVYhxHCwRBKWnRnpbfHqz4iFC8j7VzPbdEV",
  "key25": "3MSWowzKDdCTN6sjACxidKu1zyNw58SoSHXW2yFWEzCF44Svz1Cjk9akmayTyniZ9Z7NvVFdoj7yKR9gV1D9tDdg",
  "key26": "bkEdd9qkeynJwqBP6mh9LDFzi2vjiRBHfBz3srXDRWDmH5HWyfeCkDcFXixLx7zi3f84rofE4XrH12ZMeMxpwHN"
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
