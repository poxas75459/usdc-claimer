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
    "3wehLAaGBdLiaSgguADq3DnPTEjgQPYBzw35EA6PUbpK48uyESdrd6T9J81SQecwXScT3KiqqpvzuHYoQibFVv6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2zyCFtmHpk3gxbfntgCv692dbR1nmPkXUApK437pfuj8FRJLanqkB6LYrHyP7PAcDQoNzhM54tifcN2wQFtYNY",
  "key1": "54jT3pwtpMubb8X7HepHtzFDZpZRNBBtm33MU5YSaDBiippkwzkX9NeCHU1eCHqr1PBSWQLqZG6QByMLGeScUuvv",
  "key2": "4iHxm8tLaQ9G9qgYQ1XPHPnCyCMR19famscatqdQKe3c6dsokMuYLozBfEaUomuC1o7K2Vs9XTFhsqmEe8k5d44m",
  "key3": "LZS9tunarJ72HGp9QsmLHVGsNgnSQSGbFGMPr9zfiRvU1siaRtQSn4tcxvpoYaCZ5mZX4riVCk65QhKzuceCo4X",
  "key4": "3yS9qNqB5h1vHiVLGuwQ1eYinL7t4HLUkT5YAH5hkNEfkmAxpAgqofhVF2c12Gc58ED7TtYJfziaPqefvvoHP9Pm",
  "key5": "23YW1VKYRGti82MjgxC3Lz4J9SPgNn1xPCfnZwujc7tJyMR599vaRbNEcJMFt59zwtBC1YNHb2vpY5hpt9wHCFe8",
  "key6": "5fpYRY1L1dKgPGozfRukmNT3L5rrkA8hbbit69dRF4ysV7JKjgHFsscj4Ds2WdXTP7GrMaWb7ckj1YmGstiPDZGx",
  "key7": "3iLYrbqeN94sH24GgnuJ5GLKKcaJGJFju1BxnQ9QoQmyPzCLFV7EC7E8VMxcJcQhygsf5DKPyRersABMXbV9Gdk9",
  "key8": "iKWBiCt25erU7eZtVwftgKYMvygxt1KFDz3ioYukvM1PpWRDtj9C7FcZYL8Pyvp7WJGsowCmLATnT9BRPqCTC7K",
  "key9": "4MacgCJYWZPBDw3iNDDxUMwBxcb4zyRH3qMCsXAyEGJ3XF9Zs17wJ9tXuKhk4G6r86kwh85SG5abKht26fNTznq4",
  "key10": "4L9NWYGvHAjT554x3hCrPAC69MCUWX9mA3dPjBZakv3Vz3qsVwPm4hKmiHSekEcFkcqbiCNiQExzhwnDquztvXXE",
  "key11": "2mmXg8vfwbyTnJtnGvxkHY9dYY4sjE2ZDVLqJgGTmhCGk3Ny6etijFv5mT6rJ3ipdwUEXyMe2R4dcLEGxBEkRowQ",
  "key12": "4TFscsvT5a9TfSiaB8fFuWRfUSvWy4h28jfRW7jsUA6vQtuh7DYvc8UgTcBwAByeKCP3KgrQB2QQ5G7R6dTsB2Xs",
  "key13": "35DqHkySFnyTecchR6LQ4QV5NXUqZFqsHV7326cbAgjWCK5DWuS9xMQgXMdmbzZU9MH5AmkENQMq3Xof2uzp7GkV",
  "key14": "2ktNBk6PDLgj62Rcmw442zno1GyPNfoqn6sEbC3NwBdUoMnta8MYRGpucYjBig3x18ZMPYJaMeHkYd6h7FNQMKZX",
  "key15": "34JdPja8XUP93v38ZzstvDBWpciWDU99p1vXj2bUzfRJqKJ98ZRtTWHQXPi7wNXtcnhneyo1Bb8YoxN3rAnyHJ8s",
  "key16": "63xT5RRcf7ZYC1jqemsdxbv1Hmc41XokYRW5Yscdv3ES5Q7hMDu966cJU9sBcwxjPasCVsQ1yxqdb723N887H2E",
  "key17": "4dqiGZrUD2MK6FvpfHiqWTGQ3ZovoTk8iFK8Ske8pfNrQiXzpaufzxfqTnq6os1y3urgYZxn8xhob8WnuvqK7wm9",
  "key18": "5dv6JhXzP3WLdTzSMpDv295kCi6Kwaw2sYccn5Z4yWWaTCwNAUkH7waGG6aVmvWXqNWaSZXXwL9uypwtGDHdC5HX",
  "key19": "4dqPVEL5MAxLmgRmTkS3K74QUdK9u3nyLHXjptzxiVr1eETVbsrK4b8E9gk3rnasJ2x8j6Ry3KjJfwv4Ukn1K5Kw",
  "key20": "26XprH11bFqf4bX5ioWsGynamqPAEoqS1jDucXkVL9tc2FqWhxdSN19hkHrTL9uQ8G24U6oWF8kJLB2y3Swv6mPq",
  "key21": "3EZb6VAHSZB2q97NqbGkG7u9K2XMW6WDqCXZwVUCe3KMcJDtCyGoVQVg68kXGvq631sfX4d7KGEs89Ar6nezwJeL",
  "key22": "VfGPihZow1zbsrqWXFVDz8JwcFpUfiCpQdkLYNk4HN3WFHkfRdLDZHmbjgWbfx6s4a8eZ2hQG2KNyv6SY2dh5n7",
  "key23": "4q2RjH7yypuBFSvs6Whreh6Yd6NRetHhmfSLwV6nicuzTKvV4R29MDVTezeBfYqJXjtiU6ZwdbsjXeibtZKM1jbF",
  "key24": "2EPwTmTAM3CnfAdCiSPtPRyTduWNFHRo7wkcJDkFY2xXbhvXjmJkKepLm4Wa8PmkndDjxF9W5AMrATErJ3pf6v7a",
  "key25": "5B6DA2sa9omsFMfKMXrGJmhPeJvBWqk3F8ZCU8ydB45bMaHbCuMw7hEiryyFiB49S7PxVo1N7w8wAgM4DJhS2jXY",
  "key26": "2w4ZBbjwqVKYaYJfPQkYKykGgjoVAnwZ9om9HpV9qkvhrWV3vXUq4czJtNU1CkiB9pbpzzgez6u4pNuJqKdr6n6p",
  "key27": "42KHaD8RZwHpzxJUVPrgcig85gN1iYJFz5HuS3b9bc7uxRcpQ7LBzYCeiS6knYwZ55gB57fdsFu9prgWF9HTzDZr",
  "key28": "3coWtYtDArxaEqQpYRASqgjoxHnuTggg1HKcR15uEHA4VJsWSPXrqbJXQDZZh9pw4CnpHJT4tZPgpAE5mhM98o92",
  "key29": "91GGQakKe4ndL2o632JjBLWYt4SWDxoTakyxAS3XFfa1zyC3y4JPyHy58tnM7BzVQuSuK43SxN8HPPE8U6Zxn4k",
  "key30": "2nL9HC2mEJLTtSpLiGFDChPAmGN6hqUy3Mg1hhhi5Lcp44p7Y8S9EbqFqzt3XNGpXguMusv6pPrMHCMMQf785krs",
  "key31": "32V6F66GCiTjjVTtGxQXQ3fFWtqAzs6iqx5t12jP5kQPuQce3yVGBkMBBppRwXsmBEaV8iNiVu4ecixtKpn6bTHt",
  "key32": "LtXHvTscL4knsrHq1TBwh5tYMgorQEbUYCwmSJXaNksxwcoWheMREqB5HJRoLiwEWxGc79B81A4CFkCqVHhDp4E",
  "key33": "SVooBecLwhFe8SB6VBWvgAp994jFwCcEvqCj5HTGm55d2NtsE47kHqQfdNHcL1pieW4QfZCYut9vyCuBHB16o8c",
  "key34": "4b4FBE8kA8jLQrkR7kDV9WyDB6s8rLRjbc8T5CD88eYVXUpGvXcqirDsBZmgBnqdyPN3QdJDtGnjEX8HqP9qx7Mc",
  "key35": "3Ww4WzubYcMmqg9eeEfkPngiwUyXBDyhnUGwscYKJX7CB9jLF2Y5Q5rrBi4apXrVebCg9a7Ti2DWnHaYt9qYhdWP",
  "key36": "1fSA1bac1H7u9Cc7mch4WqN91qWHbspDMUwEnH8QhsvGocRmP8MFZpoGce5P3CXBv75qgJz5gjs8tS5JkNoMXiq",
  "key37": "3LZU7jVW2r4bav3gYaXk9ooQuULxnpRCpXEg3YFCXH3vjK4UYZq3d4SBnWTJvSPx1Y6pW8tvM4rkzPXf1AnxX4xG",
  "key38": "2g6oh2i9Jevw1AbPhFNSiJfWfhRjbL35MGsuNJfr7tn65gz9iPia52tKAffDxF6Wh5xwxKW5xcJoHWzYRxgBCMor",
  "key39": "5kJ9oMcyn8pqFUUBDe9gEZtSb7aTYaE6VGXrTvw2ukxxPZujJQvMxgCkVk2cQVrX3t1HJRupMsDJh1Rzg6X5c2jB",
  "key40": "4n3hLvdfDbCB1a1Qydtndyw1b2jHH9t5XTKwXH2pGhegjmT3D39uiXUEbiFJv2WRakUauyECVi7A7HeKmvbQ2KoR",
  "key41": "38zw1MCg53VJhLs9zpqsXadTCz1FLGASv5SjMFzh1UgXPjok1WGNCb31Y3SWS13FHDmxdjm66QYduaZ4VcZzx29d",
  "key42": "567JkHtqU4RTfU7tJ45m7TS5rFyZbxUT9eNgBdnaWzSYx2cD5RfLuY99qtWEPUb7JTdARamLHb3mjKezBqDyqFV1",
  "key43": "4YDhToyuwBi2M5Jbdra1VssNC2AwLbbwTt3pqyAb5mRZ6heP5t1r4Wy6a8JWDv6pEVZiFaJSiC1hUatJTNPCeaFV",
  "key44": "3nmwbHFVb8FXTRFekMtJrTZ83hWEnh43ccA3z2yaSwLLbuoeaWkNXrbqBo3h4FznqYsayr1MnKSf9XN3rqikKqH7",
  "key45": "3Gk92jwyAFECLhx14WUyenXf9VEUmd6kaw2aUC2yu891fHofwcJetKJwq6rphzC6UiQKmqtWG9YBA2327xGURNWa",
  "key46": "3V2YNxCpLqYpEXr8f1oiip2SPQ8AZ2P3ze5aPsPL8ME8LGnshDKpdrs6gMoz3GVRPjgfcemhSLYzGQ3xUhDrMHBq",
  "key47": "tHcVGSkLaFJjmGDH9K1cgzFcg18oeHUeDjhe7fHeYusaVNUCEpggPRY5buoGjKhZ7WL4q3pP2GrdXLgjkphT9Up",
  "key48": "4hSv3sB4CjzDuMqnxrJqdnT6nphL15fHwA5Tft1RTxbFnnmjRmQqajRF3o6V5KkNjn6KVwVWEfrQuHoA85B9uNnS",
  "key49": "8NCaowXapyCdKB1CcV4AFJ2DJV7wsedaVqj6EHGZ2tD4DfXivnADPcNBw1NzFBziWWjRjiYFUdkXWdCvuW3KGve"
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
