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
    "4XhJRV7th1y1HomB7F4SYJnXHEBsmkvCFaM6TaLw3kqBnqSNowrsumyoVtzPQN1kAQfCijTXHpsneqqsP15EAQ14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UoTW2ATDvPs1DtDXxHLdsy6v4wDoafWUREVKAQ1YVYo3PjfuxDtwYwd8mcNQYuW6CB4RdYA6SJVMfjpS2C6cchE",
  "key1": "3xJ6bGyewYfsjE9phe3mjfsfBCk77WCVuzuE6KqZpm57SzUE1gdnbPe2UHfAGW5w5Mfc7X1Seg8HZyjAPxinDBNF",
  "key2": "f6rtLu29y93nYxfUo5oRPtAjQa8qdXUB2tdaXkEgyyY8K6KGXu5ShfUF5ZCHtjGMv1kamqoPcj3oHxS3ofWCJun",
  "key3": "EczXvTsHenFcsUftBEjpYtLpksxA21PVKGoimdS5nCHrKQEiEpTaVP4RWT7eXjXeWkky82sGLKiHH4bjinj7szM",
  "key4": "4rsH4TNxgv2xS7zy79L4QTSpLGWkD7BQU5Nkw3E75csNDdfSjsWTo5hSxGZFwiH2KRGwQgMJzRqUBW6YdDEznhdf",
  "key5": "46wJGpPwQjo1fghev27pYi8iHYf8ZdHTKU8ztsU8nQWbsdrE18VhfeMtBRqSEK5rbavnemnQ69P1UZPunL3Mnms4",
  "key6": "4KUuecC6xdU6z9ivEBiQwJchtRSpoBMTvR4oP9t16mtSDEX2MHUDGvBxDSYx2pdTTeM4rZVvxbxCkAYtuLEhsGAm",
  "key7": "59y5B3QQbGYyWRnBEegc3MJtdzDsrRe7Ho6BasKbdbHZnXCENWR99rTYaabiMFgy9cqtJzDX8KXdPZSdgt6LWfxV",
  "key8": "2d1NXAoiLmXM2K7sE69XJnfEHmcvxWgTzc7o7NLBg5wGXUKoNsgpgEiDdPv8QWP4ob5KMjZLNf19SYC9H9jnYK1W",
  "key9": "5bEWrfT9kfqCEiwhcegCwcvQj4igJ5MqFc8YxW1mGtv2bqxqcC8ghsMFaNNaTVepC881DJQjstLggjHM7WThG81F",
  "key10": "4MV3HYAw6Vysewc99xpfvbG5GGrwUNuWDnGwewBmFJzxfRaHgSUqJQcLT1oDXuzRNrDhgrgAsUxvbJr5x1aw7oPD",
  "key11": "2fPhciZDdBbLphEWrvqUb3bxVTfV9u3meiGyacfrHJTTz2yAXcscX1eCSVk4rGg7y4c1eitikKRSKFAZKDyZLcS",
  "key12": "3s2YXhLVDoVF4WVbQoHFza7mjm9PFNkvsYCpjh5uAUTV5feFr2trPwTjRHhSWJqK4XWnTsRw9tSgnL4twGNQLc4T",
  "key13": "2JKjKZtyufpW6qSoVgE9e1F115BARrAa3JyW2dj7zkviWLt9T1mQ7pzi1ox8A55LPDzhsT5oGWY68UJvRawALBKs",
  "key14": "3LK9VvbTEP9QmaJmejype2tV79c7koJjfae6gp2bXFRYjmDrCf7oNJBCW7u57fbQZduTcYmVUWmTTdBcoKVQAkXZ",
  "key15": "2wWhHEAv1rdZ6aVVpaLFpadiQaKkk1HfHC3cfc1XB5LTSp4VHjUk6c3VJ5t4yo3ZDfV8bzno9Nw63MQWp4S1FRmM",
  "key16": "5TuqT6LcnWY3UJDsZ3cmVcNkWXRga9YWVBpSyCYW7w56FcZ1XHfnY2fvosxiyyKjQcow5PzYq3rDRztJ8hiGbhmm",
  "key17": "3ooyna8nKZDmZHUHodBTbM1VX2TgoivPYoPwedZBJZMfX8AjMZgJzvcscmQFdSRRZP3koLiqSZdzRz4iHgdeBSPa",
  "key18": "5cFhXaST2Mruk9T8W22AcuUMQdUAtqeXtQ8RunJsnkDnd6AsL6n4NBhS4QutTDq8NqiFJ2ygD7S3tpHbP12C74kn",
  "key19": "2hMwt4U2Jpo7hmg2DRccN7z3zfiR3DXQR7KkPLbDbDjyFTTkh1btqCZApWYsqJZte8B61i9BVJs3oFGwCZDjhmvR",
  "key20": "5kVnSf4YUHiEjUKa3L7F7rMGg8BkWuYWCy8JHSXjfnfBtx7SiMk6eVnszDBwhSTThA9Pt7L96bbENoWkJgriNzwi",
  "key21": "4Ne8sTLEKTW5egRQbGJdgtpXN4vUcPGBfRw64ABBzuitBpWxksATkDXVZeNyaRRoRaT3AaAH8B5Wr27qBtMRNuiE",
  "key22": "4mPD6Wx2dVQEuH2TZbGVKSoWFWsnTGJZSnjAcFaywfq2LkHBCYQtcPw3VeWsaTjevvoNRDoCn9E4VrDyhhUrCxvq",
  "key23": "8smvbCP1FF2xq4r3FyToySypjFXNzey4TMugU12CZKW6Esuqubkxk3Cs67jKnk6YWrVs4ncKKAXZ1uwqkRyhru7",
  "key24": "4cQFjBerMgYwwpFhHr467sUuzpgW87XcqWse6M82BqYAfXCLsHCiU7LMtmTFQbxdeWg2gLW5n1eopA6kh4DNbNV4",
  "key25": "24am3hWPHTu7baRNXG1prRzvAzfyAMTk3ovRK8JeRg3v5eMHZ2eaDMDw8WAKWh84ABGGLxKwzZrPJfysaJaHLPbz",
  "key26": "mKGvqQKEy33okwDqtueBASei9xyGhunbVkZxgfuMMNMp2AUiKCPQssovUJTQekbsTAAPfrP9vBXQDUp1XFvND2T",
  "key27": "3MDZJVyWDa4QWJr5xyBxuQoHfgh2Y8stY7eANVKVG3jhxBm2CCG91GzaXXfGn637Hj2cVscaWheDPhcHThQ7nEX2",
  "key28": "3ZvoLwVZkXXwdF3qvdt2jPH9ANbArCMZULnUV8EJZUqUy3RZ3bHXc2uNKdNoxUMJEwaXqMFCiEyHzRFd9vcE8gkV",
  "key29": "eoeMzYjp3FGEDETC41UhZveh53xNToaRugmDHuqnHhk1UAv3ujngBRPzWgcy26zV9Y23jHHnxDfSeeNtf1MyVbb",
  "key30": "BUqRek6R1Ms1mP2pWo8wMo8fWUVznpfRgTww4JW7pmBS6snTZtPkmUGzHyB6QxLRKt1k9kqDac9ATS5q8EfDtwa",
  "key31": "5gW77ZB6k4z4c1fgXGtHN22sd5YiepXinPnCHQtnhdKLJDRbdnmVvs3zYezc9dThBoiJrSdEQyKgP2cuDrSgqqSD",
  "key32": "E6cqj5YBzEyxXqVb8T5bp51nwYuG6BwMXzEh927RTm1yqe7F5Nc9o99Pwd8jJUJ7JmvG2USqH5XxaaC4X5GE5iX",
  "key33": "3gZyw54WTT14s5J5zVMFZh5if1eY6RwrCV18n6fdp5hwdCUhZYwT21Hm2vBfkGHVzJ4t4muzFaowpTPevRhtYSQH",
  "key34": "wU2nc3kZsHZ5tYLkC4M5kzVZtG9mz8ZF5tSWsPVWYwTdZKfroQ684nf5nXAhbWq7dtnFcJizfAP4fYZJQcYeu9i",
  "key35": "5ypAjEr9JshzaWbJSLRf3tCdDdrggXXURGToYYqYS3gp95ysoharWDzLyJfV9XpmbvSqJaRjQNMi5MaUZG747zYo",
  "key36": "2FCKZ7DXGC58g8MoVEHVxc8q51VekW2BXCSFoPMsvEqef2cvwtYJJSzR75U1aBcodHvLjhvW7MMmKPrMiitGZMCR",
  "key37": "4FRpEcZByNFy3qAYQNo43KMenSSELXjMDzGisKZ2T7pufeCkJDaWXCGhKoZJ9tLzuyZkbS4WN27cWQZdDT1sXMaB",
  "key38": "ipvD8DJzjMV4sehb1UPT2fD38EsH6gGWf98XZi54DZSaY7nTTkr2evgRyNVK6MMg5NGSMmC4V6784mgzneeRDB5",
  "key39": "5wkTc3dMztaeXjJmHb6bspgqYsrvx2KS7TAP2dcKgjn2Q3SaNrfxKMLhT5CtkZKdgHCpbnMy7kieoDp1gJW8bmjE",
  "key40": "4X2zN6r4X6zQWiiGYnZ3nB6gNiqsUgejweMr37axJp7YaP2NdiysXfnSw8XeEnuYPRFn3zH5jPYmPRnBaZgRyCLr",
  "key41": "3DBhTXTmYdZvZ6XPRsNzJeiWKo6Kkw2pPdMFuZjyv3guZbRoVfHSiE5sJeFAhdkGfgjLPLfJKKoaqpFJBUPnTCTE",
  "key42": "21QCgz1Luj7LMqgwadsLBsDRzWNsBq8kftjHyU9GXYcwXCnZsYAaoJYNtGf1kCqDAJzLwcmWUzqURRsgus6jji9b",
  "key43": "48xFvsvJGb8b8uSNDgu32fssSC8Kdo6CWux3iMJe8rkjZKvf14VqBKiPV1UXQp6Dr9t52kzEWbGgpAVJQKRUxsnF",
  "key44": "3St1UDUjjSiwnCRF1KPkxpWgnXR4Hu7UXVoxQRhK2PSbcp5kT4B88YCXzVEwN5G7ikhMA7nrB7Q4pmn2zXVzW9HQ",
  "key45": "4LYLBjqg9pzBmFtp8CsF96AtKBkVG2C9DZ3eDoXiGFjT5A2H7N7Z5fgNBvumhCfEtszW5qkVs29nfUZHCd3XzwYn",
  "key46": "5pzn1U8vcvmzV2Q7jNPe6AWsUn2uKF58gFRWy6csDeSyyuBwfsJRiivCJD32EzM2y6KuNUbcCp1k9ADP1smQD2Qd",
  "key47": "5EqqradYohcucyFJtFiQ3VueLriptvcEEdAsmdKYdKHoyfUfUXcqUVGmhvo47bdBc5wK77J4hWUUg1L1Jm4aA72J"
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
