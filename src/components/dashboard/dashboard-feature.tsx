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
    "2VqLFRXdKTc1yMMNBh1H7DCEvtxyXj88xT6SD1Tgn12Zpkndkbs6dmjktPcNtDcEyjpRSqcYB4L8vrazctyxJfAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52PBqmDT49aNefLeThz5672b77XrTUgNnBbtG7A9AAVhNwPw5EQeYxe9gF5R5ahBVo4tbFCXmXXQXZVzNZMX29Pp",
  "key1": "kh7Wi8pSvTBzYDdiiQf7qHeEcLPLnNBjKL9hDzR9rxbePb7qhZjp8ahpkqhHQfLJVdQqfZJcvDXnN5wvubJoS2o",
  "key2": "64gmgm8sJhmH3YmA6w8MRFcX4FFNkzkrm5eY6zKSDsQGKBLLkxL1DeAxVC6TtAqEgfHdWXDmG3g62UsPdKhNcMXB",
  "key3": "5JGti4KzLnrafhDbuSDCbDFaiQWvLAiYpwmrmcp1BBbDLCFsiTLUUNp2sBh4FnuUjt2fytqEUK5QuVFzF2AUMJhZ",
  "key4": "nMvSmVmAsgUhjH9a4h7g9hAAupag9kA114XVkd4X919KsaZtJinmvrKkx6XQdQ5159z2AZwzor5XehtPvYMYMbf",
  "key5": "4cv7jdZE235oKqhyKTKrVQ1HH4RM9HmC2Y8zjUmDLuBmWmjfGMrSmgGQAod5fZyKP6K277UHRQLjJKNddYpZ7e7e",
  "key6": "4o1zX95aAizBY5XxJgNH1Kd5A8KwehRfXCZAtHh4mryNa465iVfs18cV3kfoKgzymNkEKHEfPPGuMrUL45LdgZ5s",
  "key7": "2RwWES9dQnwpC9d9eavp6VssQPy2EPhApcrY54SgH6aSHGRkbyQzo71FhcPMdLJLhk9LGmcEyHHBmJYNge4QEeLH",
  "key8": "YW9XGKT4GSdA1VPU9oaJezC4spvHjPM6K9xUqLhYkhdDuWP9ZnAq1hxJu7W1QUtYcVXmnDsAPfwoLzXcxFkM3Hd",
  "key9": "XXboK5Mt4aCEEpKq5VEDkVy9W1V4fmWHgP7s4KrfejFzh3WB5t2U9XvXZSguxWvoCwUF5Z2mJFysZyQaMWnv96P",
  "key10": "37xFDAaHDb1kZePq6DQUhhk1yM7NAPNES5cMd6nquhXjDnEK9FZJZdcx56Wi6GMKzxbuUsHR2kAJHHwgYk2FaJJL",
  "key11": "5gNGDeideJwHc2sWm6Hmn2jZPdvENanwLrKDtBXNFB54po2Qae5Wcet6BXBybwXU9TYPksem3kuHjmKZPXxP9hC1",
  "key12": "3jwLHipYzxJXvtyu6FLnMp8wdWpnoysiEcUhmCojNtVBS2KeqG1aYqFpyCbJT4uqAMqsz9VehRTsk6HNfn1iiWYu",
  "key13": "37uqzU3RYkQai4Y4as2Js4eUhuKwt2us9nuFMSdFSwNHFgUxW9JWNdt5gr811s8wb46A2cSyycexpaSANwqAVnet",
  "key14": "2vQ2HBgPKW1v39yFxof4E7bz2BRa4hrZnQEdynWDHJJPtPQXdwjib42EfVZmvZ4tk33Q5qmsnqsVuCYisMk7cGpB",
  "key15": "3VYNT8tZmeopSkCHjigZnnKfH3oacJQu61K9BBLETkGoNXbeeBFTq4rwfD7wSD7mxTTDXpwfjQYuAjxvLiraqsBG",
  "key16": "2eaP3hXnCxAU6uZsHgjv5wy3siZgrMuinEVbjrZMLxQ84Bmu3Ktj6QTg3zhZSmn5vG4Tz4NjZPGfgXoXF27LsFzj",
  "key17": "59fQboiuFrpQsQZkviuNvtP7X13KBYsbpQyZeedyvsERAmqje5FgFzosXvdnHU9mjgyGrhiNWuoh3NN1Ynp4Y1En",
  "key18": "nAv7Ndgnb4wKRvExuz6APMQXuuEVVqnio99m6AzbEzJZHbekCRhb2KmnruCvPN3ZtLeBoG2EaZp8E37ZAQiU7b2",
  "key19": "57DQ2EJAZ2Px4Zx6RhPvZnpjJPuYiksGeqLPgyQHRWJ9LoNomaGVqC45EKbkJGstbUByztGwfnUVWVrGhMLRMT6P",
  "key20": "26giqCg4zvsmkhavJLchyH1P8HrbRFzUstx4qPLhrwmjyQNtaYpy53BY4LPU9qwrbSAMi97cEKGBuVEE3eLNxrec",
  "key21": "igMdKTiDxZvgYJqrBxGXvTZ1hLCZRfnPpWVbMNV2LCdmDBEUQxiPwZC36qtSFoupqgJJ9ocLGbV4F8uFRs9MknX",
  "key22": "2k9EHXY2DZqdLVF4r75tCAxdJa95vtix3W6CsdH4qYGK5S2NU7yWAKt5MXrPn5WAQw6mmzmLTcq3oPGtrmEofnoT",
  "key23": "2K5Wym3mfyZXAYxZQk9Bj3xpURReeCXknER5C4fVLvQHERgqCPpkvzm7rif32k3qYveArXxpViNupArHHV2EUDiw",
  "key24": "3DjJ39Dr1eoZft77g7edHEPcyC5qGVbvbDYB87h7eu1b7i6S4pfHJgWar527UkHhQde6cgLvBreMBk7x7odDuL2f",
  "key25": "2HQ3b4YHYCQvJofXF7HeDN9uc4AhY3wqRTWyvS2PpeJJNLtD7aG4ZdNN2XZhFyc4zhFxcKpmP9crnd4zuCmtDonh",
  "key26": "3ZRALXDfzYHUcDkJhTifZovbePkjwUKxPgHVG7biTebY9gk9o7dqmaR4X7kPNV3UtGQuSz14VK4kHwwHmiUudxjE",
  "key27": "5dUrcSvSLDTUq2GoQ9BmZBx4mvE7zMKyYdGgfFSENuEHpNVisCQB1ZWBqnXhtZzY37wgY8qB3nxCVZByWKpYQZuT",
  "key28": "4iVZDbxLKWa757e7k3S6DQTJKZimm8uh9bt7mEP62T9X9YfGUANJ3k2Gf7F63kMzTUSFuNV23dK8jN9Zs7xrVax6",
  "key29": "5siR14ckTUGiJyoEVyi4ynhntEKyr8CsKLq81KHxC4NwEGNwMZeESKSWrdYb51rpEZjnw7JuSLSg7sQEyEfdrv55",
  "key30": "2R8nbBK7KwA8XGrWk2HQM5KMCPdePhPeBFk8NaLt6B3jY2z2z8Dm915bdK8Xts9wttZJWwi3Ru1bbVLHhmMYRLxv",
  "key31": "4cD8iKoUtpSjmwgAGkwS1N2hzykJcCJYena4XyZWrCaeh5GjpJNSwT5V8j6V1TBo1hzvg6DxWV7XX1HLGBMbhHKe",
  "key32": "5gcJvneqb2E61b63qQbe4FJG7T6iFvwCTabLPNr3WFDeq69AU9tWqdjWHGVdsJYJKfFha84XDhJgF5TFaDW2Ayhy",
  "key33": "qBUA5sSxdzXJLqNdXJyhPpKREcMpWHaxkpvcdwWcX7vWkz1726BMv5uioWbTedyurnXTJHYsBWbfPH16c5cQq7p",
  "key34": "4DpGyfsHBB29TcSzYLaf639uGAiQ3XBJg112xxpk6e67QEjhZhbjMMkP5upsG1Ma5qGdWeU3xKbFyopoRJeUuBZE",
  "key35": "22udxctdUzXcrC42v3Wt81S31UD3m2ckn3MV8P7vRiDzqNemRhupn6Vbn3DsZzKw8dNvAGtwndBE3Ek5zTpEw5y9",
  "key36": "5Z2V98LjxjyP21Dn624PVeHTCso3Vbn79quXDEP2yUGwRncrz84wpJWZ41woeRNnx3tLryxNqSYKmfmorrnBoexc",
  "key37": "67TcSPooUEqq7Gj4rw92wSHGwtaKkhfk6mPpaZbAfPgKzxnddRC4qTCYcchtpNZvtPtksCWw7upqeQ2UB6nbPGco",
  "key38": "4gUQvMjqpV7cP54R3PNsp4nMAohDSTVrVQkDq9uEo5JBBuuRbN3NaZ6cZwrR3X9fn8xMb5oh2nWB4ySK86TjsbEa",
  "key39": "2QdkN4igkXPZRJA1ijnkcYzYbZ1WzLC6ohrEgDGJ3LzCRoFUBstmg9kDZBsZAvbfQnnDk5kAUXANJsfbcyqydkKd",
  "key40": "4cQJQ4P7fg4zTAHykaHNbZwT75KsBtBjZaCakH5pvyHdxcCiFgLpeMDFnyCo3AmEwMMGAgykTjy48ZZpeim5Q1TQ",
  "key41": "RoJ6XwZhPoRxYC5kvQjJYFSJSgnAKgGcBWHk54A8mX2akYAjUE52XMEv7KUmisLejf91iZGMUHUvtVq3PxYg6D2",
  "key42": "3u2faJiqv1drHTeYm5J3QkCC2gwR3PBfLkg9zu4MZsEcTRgYirxXoN6qHAQjcrnL5FpDagqhRcc5rMQvj7gmDdjW",
  "key43": "5d3DkwjgTxbtDr19brx71mmJpiYQJajvP4VCWoMr5pTZyJ4jEnr5wzVy4mJKhZFWt3Ht8sHRx91nhrWLSij6PMvU",
  "key44": "3Dswnan2dqTowxBZBwu5H2iDiSmfXowr6RaXDh1pZJ2GBDTQDgyuvcugbhFrGZAfwYxjrHKyoYpG5oZSuXKQsWNt",
  "key45": "3wwnbttKtdVNSncZL4KXJs6JHPkef7DroudJikFFe8oRz9PBLRCCVhBWv9Wq5uRhBw86aQ3xuwBqVZYsEqfBMAwF"
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
