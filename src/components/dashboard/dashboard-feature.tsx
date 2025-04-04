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
    "237KBBZR8qupvPi3UwTejsBhYh7Lu7QG35zVy1cDVXxaBe3a3vsvYqZRSPUZVAJqKMRsG2Bq3VUKmcL42S6KfZST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdmMJQSUG53zu1NAmik2hn54kHx3RPYsVBJ1rYw8uTGGva7q7bYo3Sse5zy9WL37cshcdyou2LbbR1dYLy7sPd1",
  "key1": "3t1DB8LEghHfGC7WBdJvnyuWnW2eRxUDC5hbPUVgfUATEqwSkuv5z6RADEW8aAVNmDWbqWGpqV3VEg3DGnEsQS9s",
  "key2": "3XrnDnB2asiKHRgdQ3GCjVxAZzJ5qJdtBq3Q6UPAKdC2fEZMktjv1tdX8ua1hVhwkBgH1h9reo2hqTXvYXfrPHGx",
  "key3": "4zCjmEc8RoJvCz72WEswqXttMq1NGxU23LQrd6KzqDQhkuRJpfCU2L9CmSiTmPSiMsrfmz1P7QBfqfVdEPsi4vEk",
  "key4": "DyVD5tTNeDbGYnhwHU58udSGMGJVMag1LxQxxUNMsZ5pvttiztq4MUAL1Joa3QLEVuviCc1ETnXaXvT7NVMtQQx",
  "key5": "4ANxZywU7f6eWcyGnEymnb3vwgCUtVoUiu9e9uw8DtMKMWx1TGUhVy15wKoLyhTziQPyrzD5NEaKisFnEe1QDgg",
  "key6": "3ZoHK3TGjvcZ8uDSuuv3GKV32KKx2q3vx7q7rC5NWX9XL8SsRU4QPFCQysUm2ecwtK4NhuCbfBRFCdyrmHZ9UBks",
  "key7": "21WP8SvqHAYwHS1psCRTUDhZKMxBbk2NEinxeiwUKU2MUFMAvpijQMpoKuEpDFibQtpqC9T4FuV5U742GPFfQyqP",
  "key8": "5ERNiYo3psLvAXcnmhSKoi5RThdRRKW66aAASu1J7TCJhBFHGpuouHexfAvBpPWWr8inJ1fTmJfmaQmdCMGcq7wR",
  "key9": "5srpkPU8aB4n5KeNKLAdwBj2ssVcXhah4X912YmtjMwuzHHD8R3eJDoE1KmrtwgTh2u4dQApcUyZgeR7CSNrS6Bk",
  "key10": "3oeZRLpaPGvwMnmPxqYkaiEiYzSZdmAvy58sNTAf2gqEr7dqWWsZ54U3isgm9bgWfjYqy3CzRh8erF6z5VTpd6M9",
  "key11": "FfqgkipQYgsHBhN42FAoYq2LrBXbWBbKoRxrHmd8o6j4K2MKqp3Achs1Knqmzxkpvk9gVBbjRdLjWQVTG81CTc4",
  "key12": "SVkRfNSUduju7Y2AT9cverss2T8iSdfjT4qVCYaFjMVBuurzJHPsYCFREwaWvcG7dRtsuze4ino26gDNZ84kE4p",
  "key13": "Ydz9bBBk5x4YWK7Y4tP6AYNQQYtcNrZAmwdTy8MNizriSPVe2zpW4j9iauY319WhNKprSfQqHJuhYML9HmPwZfU",
  "key14": "5xQWj9t7VhA9pAm7V9ycLciiRCQ2iwfpPWLpwckeLBGFowEDNcra8jYgKkiDa4vkXKzhfTNmcAdzvJmnVbCHhZ8d",
  "key15": "2YWzS81ZtK24bQqKam5LYFSCagZm58uzWihTULUrBuvZHNqwbQWfod19iSM5QGohwe1PKMyNDDbhurTzq9wxGwKo",
  "key16": "4zbytcNnLsQyg6VQrc42SAEzVLNwbZccdkV7sVYiEm6og1A6zGCM2QfMV1X9y6smE8LMoVjaTBzXr2Ee3Phfs82D",
  "key17": "2iKznCA77K9HPiosu1kcEEnsqBUJiWZzb2QPod135ipBMytTHp5he6NaXYpQGArXPHyGLqNY4GaUfTnGdGHKn1wA",
  "key18": "2ELzFAkahmHheH1L1hzmzwaYmLzCPeHSkzuXns74CCcQSABHyq2uoJABYQ9PJubo4JgJmMh9jdwmCyguZ2HvQx5L",
  "key19": "L2QYm9Fq9RSEFCjGGwX539FWgQfEmhGA3EJX2VRRxG1qUXVmF8RVXVFUqZ5aSJwdYS3UdAhb7rcSr5XgW1h5bJ8",
  "key20": "4RbjpCD3KFL5S2TErjbo8oZQJN1eJ51G9jdMdoSvECzU8p8htYmRxBuJJMAQYWj7ap1rEsZFSDfzir92GrGqTiE9",
  "key21": "5L9C6W8WDjtHXeqkrVT7UkATx7u3kxA8h4JH5WH7hi6eAqnrb46hVyTC8TXQqntewoZ1JGFvUPJQoW12rMoxcGVD",
  "key22": "3q8vUS82zcxufyJtfXHXyEUWdbSqrmTVqMQ8mpQXgCEJEHWF1XcZshhptKMHEjKnKAX1i8tEr1k4DLnHsoayejwB",
  "key23": "4UKFmYcs31X22MuWoQVavSBWGEK7jRoazoZzKw7hiuJVt53pH85NjTjRu9eEaW9UmvMPghTW76EjMcn9FuXVk3PX",
  "key24": "2QEw21vDA3nAVFhfcZVAefpukbVZW3huSWSRuQcEvAGiX4SJnmLc7QuDYCdj371fS7Ppj45ziogvjQ343ULDW871",
  "key25": "Y84yp1ZoQerrggZiwDDVFgKDUXh24gvWYo3yc19phckkCtgoqhGgHsvSCEuQ8iuLQjDCM5fo5b8AEWQMT3WnF4A",
  "key26": "35dG973Lm3nrgnrL9kfinuBe8bayx9gT1iDZ8Eykmhf6aseLMsxZiz88VkrPYayBDr6zC7tEzMnsumAnLpaoiSqn",
  "key27": "3ZdP2wnT5tytvxLV2iRXPgdqoaQFeo6aKhLjQjw9znwG7d7n4F3e5Kgzba69kVrRf1kyAKdxpLPCFdnJrKZb9zEE",
  "key28": "3hNDQCVj9iRcLDGFygKXmx8Wxge6g5jjjebxm2yqgz92wYiaxLLGKqtQpqMw7Wz2aD6JK7xtpH9fkRm3y1DcrxaD",
  "key29": "3LJ1M4xuTV6kbrmBgY5j8eYfAVdK5nAofeboGM1ui2jbfLGW1Rg7E9gZC7RMWdeisxBinpaFhftyzMSuGn3dCUTa",
  "key30": "2FFD7ZGnx4Uap94QafHdh4CPkyVJPgxhCv3W4PCRShGrXaz13xPbR9CFnLQvkqbCon63CrThzF5bonM97vfjLQdK",
  "key31": "3tpgeVz7SYyEyD4RSx42W8vqAjjBY7zRRupxNHUAJhAD1Z91sT569Es3EXu3yUxZDQSN2Bk9F8cTc19wnnThBVdy",
  "key32": "629kCXosAYSWrRsuNYFLe3bYa2jsAje48dAawigHrSoHXvizhvVWED64t9VqYTm4LMWTDF7Fyyk3FZF4iKdobyPj",
  "key33": "DBzvN5yyyWYmw7Yr5Bh4myZBoZAwyFWEAvyE8exnnPm9PZnjBmfGbc3G3SqMPnCiKLwX4rByQfkT7ix4oSfmydU",
  "key34": "48ik5VomMf95XJp3S2kNjPJGTmPgvRCNvknqGYiD8Szru7YN7BhDdcyZCZCdjyuhzqpWfk6muqsYnKPEsB8xg8pe",
  "key35": "4Mc6WYNZL2hMhaEfhX6GBBtXebXKUddXS4jcwt4aooRHmaZqahfSd24a5bM64SNjTRxhTgF72xEuncTScaKtZGZa",
  "key36": "wg7Jp5BJ4DSfvbn9DbGR3uzaNYLG3HyuHmnEQ27tByzRoozVBecoJ9CHpMGo2ypzFDQSd5fM4MJfpy87tnLECgn",
  "key37": "3jw1BSemT6BxQpdoY4w3aWycHUh1P8zyjxnBMjs8vT7yp2ccq6YH2x5ZuygctFpsxhDpLtgWjbeQ9GdeFpQVgmUg",
  "key38": "2RD6z9afXq8STsAk7Lf17u3HmsVbHBXuRetABaCoHFeUTHZNyK7v7stTbW6r2z3sLoUxkmHcJ8JtkqHD4wjdZbrG",
  "key39": "24fLo2SJbQ4HSauwPP24cMrFNr6N1FDZY1VWuhCuEhWmfszQpiEXYqWJPudC5tN8WFif5Nfcuy142z3wx9aTu8BR",
  "key40": "4CNgNBh4skB45fdxTLzfx1bZmGWZatiRJt7fmHeCGS79gLQ9e8LPsqfQTVfhW7B33zM4RvJvt5AZkDgu6hoyiNge",
  "key41": "NvuPmSaa6paojgDTzakmAm7Gv9FCihVtJttAVFbyRe4rCqqXxSFMgtg3gsTPpC9VaQoVQ9Kg6HWXGXVFpY7dApZ",
  "key42": "3rTEeZuXAXh4UHrh51gDBi9rDcchSr42SnRZUgV1faahC4ieHTajAVBshYe9v4xacYbeLXWagx6Agb4aZW66TRzR",
  "key43": "4ju2LusZBgq5PULELd2HraTPjFfa3U4PjUQDjHi9Ka7T2VHPNmUBoj3WFLvuv17gMGX1XPGwpXoDR34KXY4UJAH9",
  "key44": "4J6Tis9FBnenfSQv4UYhmupjHDGMR6HpMVM4FdGKheBUk4vr6RWe1828uGmyPzHBGoBApwYE25YSTVijf5wQvK29",
  "key45": "4ZJGp96csZLGb67zarSJGWXmwSqktqxbFUaGjtXDrU8wPkYypMgCmuUPyEWyKfJZAnaC7MXBSp4TqAfRw1NyfqYD",
  "key46": "5RQoMVhJG7SwWQiMkyWZaF1m1s4NfvWL2KNdDshzaGz7QGpR5MFB7EkuRyJ2ai5QAbkuuXttFvEJURHshfb51kaY",
  "key47": "591ZiNGtzyunp8Ubj15EGHhYtCJVZ1N1WMmiC9FngtZM4KX4hkZkBVmnEqPSPrmqVeVSYb16BpQ2gcT5ySX6rDJf",
  "key48": "29umka6c6TKj5KeG15MTAukFJDm9Q7Sg1omKCavgMTJB8iD9gTAg1mG8gwN15iWcPRfGArmuAScAkhEhbCZkMCiR",
  "key49": "4nmGka1dmskgoC4rU4Ngj8GrgBq2942wgwgNNPsWwMjdpmeMAGbAMm5YHh7y8ZjNx6DyvJqnkdddN4fHkuvqUeRK"
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
