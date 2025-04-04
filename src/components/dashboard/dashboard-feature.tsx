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
    "4exxwTJn3fwHtxMAx7LoNHmmoK5VWyCmihcvYdvgkCYGXPFzhPjid84aZqXfHTpxtZd4SdacoBTtGQiM1fE2RgP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZ94jMDdyeyPBY2yNqFuzH55PyHzxohuRuZojTVQ1xJR3uTwUzbmfNAE4kyMTajZnGyUGuYWawifBrzD9V8CrJa",
  "key1": "2QAvfRYXVFVurgUGHbVd9Fbwo65NfpcWYxVZscS1Tx8ZrcvhVKJKuA3gjUvPPyXaGzdwg7xoPP6vCdWXLkbhu1NX",
  "key2": "3CD8mCYSsx2ToStrph86REDwKmtzvYrDZk1oFAaXEmNoig2TwkatSuB3meGnaCRCc2kMv1M3bhbqejemxcVLLHQ6",
  "key3": "9SvLaeVMf1gxTew8qGsP3maWxeBUohUZr1gdjF4exqZXcYSrLmXLYexb2AqZyPSWbpCL36798qBVQaRMFRb8tRY",
  "key4": "6jpcBVM9TuXhwDtcb8XoabZYyTQsBzaWhzD724HE5VwnTVqWBM3hjkfGxDdzF9SgEhoK8WwWE7w3VPf1keRqCpt",
  "key5": "46hPzVs8wtaP74nkLsdyKJxFfcrnjkeQ5zUjyq9ZUfVG8xEkHsbHKfJuA1BYbJbGgCNdSfJQpjgbMH3k6jFsHLD",
  "key6": "3hho1m4NHFpqmEojmEirkVWfEvtb4gEgDd8x55ru545nyfdf5EYMzF8AoPe4wegN3FcpJFnXSk2MWrTe3SkYt9rn",
  "key7": "4cy2duAULZ9sjHrvL1Wkw4N6X8fWGbmj5A9gu8nrtwiGkT7j5Qibs4t2BN9pqAMgNd3i1RKSD9MWoU8iSYCKh6oq",
  "key8": "3EzL2hHYfGqKhkkcsZ3Z8CZttUTcaaFJ1UnJs7YjAKxfcZpFpKZYi1DFjqTGtNnNCz4HgBALrnRPWyAfcMmbgnuG",
  "key9": "2ZSuaetT2e9hMXwe1oMVRFCwWSik69PBxEEcoUAL2XdiXUTPXEJt1iM8nqLae7esE5fxcreNnPB5RVo5gNDsUdc4",
  "key10": "2mKMQwJiRUzVPY7cdkyZWvwKQ2NdewoYGhAvPc7Vj4s9nAM12wQfK7iDgpf11aKhQu4xd6X8GZxyP5qMgeNGZ9rB",
  "key11": "2uSFcYp3UEYrSBtePduiujashJoHqTPTJGnUT2xuitKTS1doLc7FJYFfhrCo4bgvMgtEotWL5Lpf6Po4SoiTvjD5",
  "key12": "3N2hMedu4XmKGFEHkU95WEPXw1Xxjaug9SdVU9vBjaATD2bCMJyGZXm2xQwWhpQ8BPHr7ThLu6YDh1Vub8rp91vk",
  "key13": "Rwq8NN1pRhsYLQkBbo2JmQizkVYuxibfUJP4cL6q9jxTeJXgM6wVq4ZGaKzrhh85hBv2BqPQsPsym8TbFuq79az",
  "key14": "2qiC4wihGdn3qZviLTLJFGTHeA8bGg6fKRCDvkPMy5sx9pwcnCz843aU9Ha194vbFNt9f9vEmQNhYyyR3MEwKEwT",
  "key15": "5WnDaRGnCSLjc8rk3dqBrKi24NFaGsBYDQyqzDMZDVMBofa3QZQYZ7r4DxDrfq2ADyJPPuQ7GbvbT4TXXnWvW5Rv",
  "key16": "251x3fXKyd1gYQgfRGg9C2c55a3FNAm7ZjxNUoUhALAr2dxbtR4uKQCRBcGetqS9ud64QsZptC3Gf4QEDJ5QpXzX",
  "key17": "4FTaUFQUsHNGkjkcDPpACKUJrfxxpW3XinaMRCSAXXrYBh3mJSWeLGaUp5MQbRiejUpJThQ8SXTKevVZFznHdfSD",
  "key18": "23czL21t2pVMxXvguSAkEEQgH3271MmgiGvP34dfJw7KvWFKYDn4zhU9CnSV4GqzT3Xb63Swww3e68xDVfWMEfVN",
  "key19": "5TJjZk34kNeM8VrJVXzJBXF5ysN6Lch1mgNYW5Umnem3yqQo67semdZPM8W5X9Bij8C9cApF3ayW3tJwvR238oW4",
  "key20": "22mxHqDH6i76MFZXRRALoEhdtLhpAdobNmx2ZYa89Xv4Cwyj6CWKNfheePQUamMqKWYQp6zbTQYDXqAuNqq7Jy9A",
  "key21": "5rYPfDagt74BTCMNvsDoUoyVQgymFZGLxrJoY5tpyDm1Sav4tuSzi3vjtXDmvP8UZ7EtvZiAN8ibLg23mChUASVq",
  "key22": "4uR4h4eFKtpzmAfR4LJKkBZTovNpnZNFzip937nq7SGtehzJKbVo1unjfMW72VfaEMMeCk5t1MPky7Gj3btLd4Uc",
  "key23": "2vEV1Knw7aPDbwbwZqC1jFdPWGYmSRoYZ4v1Kb7QkA2nDFUHAKyXti54Su7VbsnXM9FPC8sAFiXs5B5wpNSptDi2",
  "key24": "5aF2nitro7bauojKHBAcF8iLGu6zXbuDXXx8rNWaYotArkfmRBPBVqdgDdo8X4JvzeB1ZQSMcN346cfcrTUKzQ5i",
  "key25": "42zuZtARYYzsqtfF9JaouKH5LkKXsxMkcW68XWcBQMMrb3YA6eBzh7KrR7KwuSuMAogmP1ZLz1r6Q58BtDr9jvoi",
  "key26": "4nSieJRfEiKdHTrmQyEGMsLVtwLvFn1PDt7Yo55VkDmZf6m8TkGbAtBM6PTAxBZySTx3yQL1m4nwPq5jSZsJDdS9",
  "key27": "2mLUeZb11v3a89Wt5LVW5JCPewQ3dmEsNjiyszygfE94L4P9HMYXktPBZFeYvbKFz4ZYyfnosMTZv3J3KweWW3ey",
  "key28": "64nThGfifFPAvW7puu2MBUYDM4m8XXZL7xJYBZ78MMbR9ZNs3sgvFbrPworofTwXhyFyFL5Y2JMpt3VyavgqYzwx",
  "key29": "3VjR4qfXgrHvRvVAhoo6DYzRjawk8mYc9MZyY7fnrVrQmU7hWP9GCrwc9yA4azFF4Cm1owyYgRwNcTi4K8rpotb6",
  "key30": "NCpTCoKqhfxUEBTz9yFxvKq5U5DHizJuvHQJdBPTi9bSxY2BDyy7kHkQtB5cwMtfQWPQjm591kBC7D4gnB6XYda",
  "key31": "3iVbjRUbLE4kWr6C2iwUJ639Mh1wP2AZsRsLHFXsaB72opUqhyG9oem2mWun1NjLxXfpk4y91Xc4EiQRGYCUeUm5",
  "key32": "mTn3ox2evXNpYbRuX8r6Wjquntd7BZg9dEoDTUNigoG77Gpidfqg9tskFmxu4iKk9iGE1q6hPxn2mktmyVXSPbw",
  "key33": "2Rqv4CDBsdW7ykpHVvNVmkqLkJ6sr5YRvkjSnj2KvwGcwsfkRQ88Kpt79YWr6TDjW67kTiFVYksaTYgSPKvVrg6P",
  "key34": "3HQeZUnpcXnoTr58MmTrM7KifVDVf6TajSysZBnETR7BsnQTau8ykLRpTz9B1PHugtFkkJXZMd3woujKJJaYjvhw",
  "key35": "2vYyPHT9a33iWgayMN81Gr2SzDJtEToKPAQvoyqL3yHETNJ1nfvkR3GuEw7XLfLPC9pxkE8kAVmuSPT8ue8HTMYd",
  "key36": "4SmKHoBBj9w9wgtmVd3vWpuDwfjkVEfFdLK5gLXZRuJaTWX2cfV8qA5ageT82fqHoNzVmQ6ZQ2c1LRzwfcQdR3AH",
  "key37": "3ZCroaaxcEmqLh9VxBRCBibxhNkNhPT6YrtM9yqTef8mdKhuL7qKRTWmiJfdeqGG1Fj4f5oiQKPcHmsc3xdnsAzu",
  "key38": "2m887xAoguFXizcd7izKNWKFwEU8QhwLYDmpozzVYu1rPmh6dSry6ssn1E3gqVR2FNDzNeoXKgBBQmaSxh2jpTMe",
  "key39": "36kR72m4idCHdpH98F7yt5fyRJyzRPhRpFdXJRDEpYjYnyEXtErWxt6ppnSJQgk3qHP8CwtPThRfiv8aG4FDfqVR",
  "key40": "246JK8tbcMeeh6itQnRSMrATq5tjHtf15mBtzqxt55cHekPMErR45uhrMP18mw9xamerEQbGf74twEWd2nMzfLkP",
  "key41": "3K7bmS7BDKcLkR2t1HjURaK5UUD85gngsUYnWGX22hEtocxJvJbHzFhbaxzUR3sXyQBN2whyWfo4SJrxMM75z1Pq"
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
