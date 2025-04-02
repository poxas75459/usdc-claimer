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
    "2VAzZdDgVuvhGTfz183jgpUnJCm4zX5fPw7LTervczaV6Ctik45wUTbQU6CjRdJu89v2t1xS8okzdVVWed1mHwgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RprpeyY1waWB9HXR97yF4aVEq6rqaJtRoGiYF9BJcZW5TpaVVoya8KrmTeU912vGRB9dQQ1Poj6gvRXJ18p9mr4",
  "key1": "42jgNQnWV9w1XvzbWg3bKcKWfbzT62tR7ZsDfpjhGXcvfSPZza5ZWAKXDsGjLspenoQZaqP8xRZRM6j4Kig2xDaj",
  "key2": "3q7EVxAmivTwPh55apM3qbJV957d2o1rMLFfKRXUj266G96YYErVmJMRk1U4825xbsa5ccTZ8L28TeSFZBbDuvrT",
  "key3": "5tukUGUUrLro2XKRg2tzqurpm23BQtkPvP8ibFfcFfoBkAmPddmvb9QBtcPMA5kXTH4dnK8axg97TjmradeXgybL",
  "key4": "JmuW3AsrnpVyG9g1esrNrMvWWDsC1puwB4WQmVHZxcbPSnDEtH5f3c7keMovE1UKoY3uUMHrFCN1jfgo4bc5bpn",
  "key5": "2wD3Va3uCyFa7Ba9C1a4FrZLSBNL7A7KCLYBgyQYeSaZG1MD59TtWfNXFHTE64sGqJThAQdnmCFYhJdug6QjkCrY",
  "key6": "3Z1H1d7crLzr9r2MKrwpJYDinWuVyuyPZeoY8kEYRfJeq34YVCAYFZ7J43oEqJYJzHSQbt2U9B4ZwK5hyy9eeapv",
  "key7": "yc4D75kcsSiMtXRARsLnW5FEzzwnVZP4ZhBUjVzwJm1UECUjF1yx25G3nv7eW5f2rdHUy4VNb3H7uYKbA9tPxrQ",
  "key8": "46VmdGjHFj1VJFMf9FBoieMcRJbxEVeikZnupVB2VZzKGouruG4bxYA6UTGmwU7ts7KyqHufVv6aonmpw7qey2cD",
  "key9": "4t4pFSgcM2EEWrudzef7pmVAyBV52n5uEEGjQkaYyxp7iUbmKnpNbapQEEGQT3dKkXQJPxy6d5ujuyMBnwLVsAMm",
  "key10": "2h57m1G6n5zouS8S4yMBuGxaMb9WZj81x8eP7fwrTL9Dzp8BqCZruRMGF1P4Do4s8jot24TXPEZVeCoGMz22Tk6P",
  "key11": "2cvsrQ985S3p6NXcmJtH6gDFMKvsZbR1E8ihCwonr39quBVbVGNJrfTJBRWYzjjLkkLEAfLMJJDqcPTzX9tYVPA4",
  "key12": "Pc96ERoH8qfMRnE1LChnSiJ1CzqUKcf98Mbeeqvnt9CkJ5qygDRTRRJHAtYCjZZW4bdDXE33Wmb5F3Ky2XBCZrf",
  "key13": "3kUowqBhyH95DRfaVqvUYaPg49wTZGzYzV35PP8FjjwWnwZstZeNhggetXraCWk6XFhQP7CPkwfFYw5FXT53SGJr",
  "key14": "fFxrcPpgXpCwCkJ9R6j8fVzwP6CZ5TkZKuxU3fntnFAe1UEppTC8raWcKFVLP9i3xWo66BofGJXbBdgiuaufx3F",
  "key15": "27wnoFHPaiyDvxu8NNVBgPYXRBudRHbgiKo16BpD3q6wJGfBCpUxx7EGR5mwP3F5RkVabk8duaHXcACLBRuRp4GU",
  "key16": "3VCeMdKDweKmUPkzM9j21ZUDJk9MFuB2BWiy54Zt8QhGjMvYe4pPvP4wMc84DDzeUEsBb5wtzBuPAopvAMq4xQXz",
  "key17": "2iTxVoaCpdXxLqStnK94JCm31jhB2ekJKKAmqdduPf95ML5ZAowZp5SXs8CkTxnQpHNNxoejMC9G5LAFbcQyEwbj",
  "key18": "3ZfKr8CS4K239Hi9iB5vqXtWZZqz9JQyuBJqk9BrTW5YXSCJ5cXkXDvtXtEaxzHvpMXvT7YU6whKGWkxWifPQoj9",
  "key19": "ZE6mAwdFanAkTLTqQFYXNQFUUmgY8kfnvMbmJLRb2BTX2yqUsNo4TAok8pz1p6AMeYdyBpziwbqN6vEi3gMTsR5",
  "key20": "obawcZkJx1Fy3ZTuz1aVt8kK4CcxsvncRYAGksuZhsNiJwxbf1fGT5pdUsw5FtqUYwgPM78eNmhYeA8BKsH85bM",
  "key21": "5h3UapaqmdPbEj3t3zbZgnFTQP7xVC9WNQpdeTY6WLGDZmxStSUsXNTGFPsZCAgvrhKVPzFTU6DjW9PzfJc5wuUR",
  "key22": "21sxqCFo2cKt3JzxcGWha7MpoqkpfkfCQptvCypr8swctxa1JJrJoyzm4eiCnKNog4m41L6i7J2Q22ze9ZWD8Fsp",
  "key23": "3jC7A1YZATvZcBKmTaEEE42NqaR182VzkheYioa41WYfzyUfpVR3CRZ5EHzJpTAjBE88BrGUtAwRtTCk9Mxah1p3",
  "key24": "4N9j7HzpEGbeGWNz9RyJvsagpaFLZL1b1Cmxgae1d2QWUJGKNSXDtxLsV7TRS4dfgxjiHpq9Xwy2vQNs3vfHYuYF",
  "key25": "56kA6waQ2eBhX6GgFaeh7QGBfKPdECF42YzaJY3QgUcCm9q9YqFnhMCv89xmCxubHSDe7e4mrpKhVmnNJMvvLfZk",
  "key26": "3ECnkGdX9tKEPVKpgrhkPpfnjLTXWVhkihohsfAurMzTHoD7z5MsoGJvt3tzXZvr4UuBCfjqm6XhDcqWkcSmebGs",
  "key27": "U39WNqNcRBQVfTLovC7aKwqKoZXc17db9C2gmYYobdsAovxAn4K3HeB3WaqUbue68ncUQxLHaB9wkUvEgysPYzU",
  "key28": "4Fsve9ATV8DavuiLGPLcpmpHsEhgXcQr6gqY1ofTcnuTrhuWzjF9eDoYbvqWxqcmPHsVHcBJQy1XkFXfBC9fHSXL",
  "key29": "3uTGS2xsMqoCYpn5wi3hTYWQT2W63rfm4VGEAAES1MP2EHxFxYY4dbLDb4qqFTQtrxJUxUoYovYgsZZkjFSx6ham",
  "key30": "2uxqGTjEnWaqyNtw1hZtenVdd2VyoBNJew9iEtUf4hafPqj7ZXqy4fnHo7TSBrJzJTc7TYccJVUHq1uj2Szo1EGd",
  "key31": "5pBCA9rgUsxo6oEA6j2AVc6KKXMky98cpuXLnY4zJ8VUYrN3rJKaoPXvv3q2tVDxySF24Q2Ca5MfGfdriCKMwAuw",
  "key32": "4KNHFU65Di1i9JdSwPKzk7NrN6QmgRE8aGYEy9W3G8FEnPkL1UdKkojmUwEvW7i7tCRv2QswYdWjDcNobnoWxbpU",
  "key33": "5BLR6GnRd8jcRdJt352A5yPqw3Q6PNeM6XrTJiACwwtfhn7MQVJCtUjwmbNYr9DjFkS14p8nhnVjTRXvqbTe3h46"
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
