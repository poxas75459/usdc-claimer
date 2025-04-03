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
    "gJgm1UqsJBJSW5dAhiFnjeLJQQMdhhYQA9qxE2cNJ1FQAYRqk2KezqnbMLZUSGESh3ZeVXXXgjDYQ6rkyCoPZd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2wL16TSMroZ2Q6DrSsdb2D9T2dzZ4gQ1yR1UAWCZquvW8Kvc6a71wV7LiUsF9TBnfWP5Nhk1iiQgP7dJrAhega",
  "key1": "2q6Kgn5GTm6DTJbk11bmJ2q2kD4JtYsna38f4dLQxUnvd9aBBmoTVQsyjgB3KJcdro2GDJDzvnZ1u5Z6zoagniua",
  "key2": "5LDopGBhaKWauPKVzdAAi6QwyZbm7Hq71dPEECtDiM7rHArxB2r9Ga5hGLZMKoeFdgrDoWqf1ZGxWCMnW74iwgjM",
  "key3": "3tHJWGWyKdjTRxQitrY5Xz6ETfLYCK3BBM8FtR5H8u8TuwCm1RLntX9b5T7gcQAGmHQDYH5Y1YmhoS32qDv7SrgB",
  "key4": "XwAYQWUcwU6KNc7E31YdDMtaXeU9eVQ4J9nQ4KZjA8AaYTRfo8Q8DSMJc7gmSrsUA9EvVcAh2WdozKhG9BNZgpg",
  "key5": "3MsisWvxASZyzdUcEi5L8WrTpyx2kWkxkirjDP2NWzFzwkkTMbYNWz9oGf4kT5V421TpRAHekM4MpMnSDnjsHosJ",
  "key6": "2XLxh91Q7habiEy7SLA2N61SBdvKSa93ko5fwiyhdnNG73t6FGRk1BwgNZky3cvcrFMMEuwkGrqtDcsW7RLwCH4",
  "key7": "3u439NEanEnUQsQHPEHiwPzZi4djT7Gxi4qUBdkNpWpEQKDfLQFuAKnsMBrHx5MWDshq9qm2DqBncyPAEbdAgfx3",
  "key8": "3cYxsTa8S97v5YpdzoKCi6Tjmo8kLhaToyfAL5Rha2CAE85UmygFRMNdLdA6MgfC531qq9euzU12Fnonmnxgsome",
  "key9": "5LSsj4EF9GuLa2sYc4Mr1AUaXeb5FymgVeN94WzshCwbDbMiRXMr5ncZVibUytNXSa8EsBp68Nu4RmzQA8nnYXCw",
  "key10": "4hHS78Hpd8MtWG5X5Y7N2iwqY7kysxyyX5wdBukAtVoXfzxUESmLndPun2a5TwTa4YLj4HNxWh4Y5ViPBtw61q6T",
  "key11": "66fX4B6VVUrHiPLwDoooHx8jb1BQF3UCDWZDK9nJPU64495eyVv9LWxjK2sFgT2NntM2pY4k4A2VTHZ9SACdJn4P",
  "key12": "2j5QWBqG14FiFtzGtqzgCWLJUhe8XWzZDk18pT9UL87gALbvZYQwtHR6y8EJeGVVT8bT4bvLe8HshxAp5CP6k1r2",
  "key13": "5P8DVfbDRyFJqyZjTaxbiCnFcY87MspNB8s5M11eBi6GUoaTHS6tFGeoospe2LAtq3XoZk4BXH6opJbFarBXznsE",
  "key14": "Tca6U9SMSj8iN7Tj6mUhewpzxg6u1tv6rZNWmVkuiRXteMAshF3Vvv6SWxFu7vZZsnmbYLdrg4PKUZBwRyx5w4C",
  "key15": "2vwwoWKMpgPwZfGUAtRyPeoB3WyxVHk2apgvyJYkBWAJZcmZ6iPcDqHeJykYfydgQpZm8eDRwbavpmy4h1h9AWak",
  "key16": "5rBPHifbRZtbQMSHumsjMDbDvsVyjBArJAxiNDXHy88ZNFCD2V5DUSkYU3H19bheXyCoFUeHKspNoS6C1e7oyMNe",
  "key17": "MgFy6z46XtiVqzot67rKuX3bGZSqxff5Fp8KZ89LRhLzG83287P3cKCg3nG5ozhbfEe3qwatGtZPaxASamSsvH8",
  "key18": "3S4dZfKZKoD9HuSnDXBpt5mZTxkJjhw2RZGTAAcZPDqtqmvTQEPiNWPP2KVDN976QGrsgPcbZtAd3125yRCrL6MJ",
  "key19": "2DFKwqunfPN731vpECswcviEj3J1dL4KfJqyGAT9tJpabmsFqPed5YQpo3vGqhDQHuxEb1oeZAosFo5uRqW9irn8",
  "key20": "4mN3To3oTxrM5Z1J7Lmm4hFfgD9JsEZr3wJKeEEfUsFi1eQ9iFVXSQEgYayXeqstgbKyQ9vbF7SDmv4fUaL6DGys",
  "key21": "4NPEx7xJ3yap2r8xp9B31mvyL67v4tU23dQR4qGJ5AvqCvh9FhrKUvyHVT94B8UgEnbFjJfjnANV2ASZjsVbdq3y",
  "key22": "58H3VaDZBkBTkw9cGBNELKQEiD1Tj6AFHFXWBrc4dkw8NXo3MTqWkM6ZmZrnnTp6SDuDXZm1CibxvfNCgtbtSBxA",
  "key23": "5Huik5m3o7M23tXTrdWCsht8FmnV37PmfNj6QkHoejoS373dGbMXGvvspXjYqsBqZPqzkb71pzb7nHaaYxEg5yBA",
  "key24": "2g4iUAiRTeYUGGJLBzCZohffBRzva3gkinEymdXbgfiDft7tUotkCXpJkk8BDFKXutsd9BXd6n94jcQ3NLmATjUw",
  "key25": "4UJhnf64sUctj9YN2Hf6EhgTxNS539UUW4pvBSXpGQLbvRG4tFrSLYFCQcrysXZ5a6155miHvcbSeCPj94QiHZcE",
  "key26": "3ZtHi551qhA3JSzZ98eHXQ1f8oLs8r5pt1ctS6zdd7A6NsT1ED9wcWxaoKSMPm7k5UvQf5SrfpJfqMv6WbzoUzw6",
  "key27": "mxgk2AK1vxjvtsHABWw7Qt2yUe76k9VA6egdsPEyyTt6HjE649PeN4UKWm25udRjBeNVJYRPdyw2YLE6rkUoKRE",
  "key28": "2rR4Abui9aHNXkbggHyCXe81fwr626tPowVY1zQuHr4QNRPfkkrYxqLK71JJJgNQPVNm517Nmj2fQM8d75MQqw9C",
  "key29": "5xfSxQ9n2seWef4ZaApzENVwHywdAiPb1Fpx9uxNSE4QaBnWZ66bM3U8FDxZ6hAgnqXaXVPfXrPb19SQu41sHhGs",
  "key30": "P4Xqh3bP9v21v7ZDFJd6NDpJESTKWPw2TCPQRGqoNpop4TJD7yGrBwok6u8ziMPopMPxoNkgcArt7i89eUTkdz8",
  "key31": "3vKK5Nit8uoqEtR9cAxQMxpWFEnCBosWpF6kWSxgcY4FiBBHjw3XRZLR66XE67yEjaqWkyXzKMJ1oGD5C7QYsnL4",
  "key32": "YGAvki5JsYn6gBCP6C4LXTUyo1MhPSPmVXofQu1fkUjj55pztYxcEMFgYpJMYSra6Tr2zfdAcVVqJdvCw9AxFwB",
  "key33": "63B1UYkMnsq6xCWH3QcyQL2Mi5se3oYJLA3JVFAkB2sr2MZ4uWEMJq35MSHPSP1kgUH1Br1KFjDD4BSNbsM5DzBc",
  "key34": "3Cx4xmphdVz2hNqFkmMALktRmF2yzUEjZzg1EcvZU8eiFg2M9zTHWQJx2Xc2DCbXGjm96Z5UC6w1Aa6vMHxaQgRN",
  "key35": "2xRsXvPpTs8457Bebf4wkm1bPRvAXpHhyPj9QGEFVxm7Y5Sn1PnvcYTAKj3DqSnV6sc6PaigwQAz3hmkYXSnccNj",
  "key36": "5fEWt11YejnqRb8rSTpFYYZf9Nofd5NgPDnrb1JzoMRhvq8nNTvnwJnLzTUTAKxKBMHQhPb87QQM5VBg22tM2hSi",
  "key37": "66ZtQNzXx5v2dorg75VpsH512ro4vkUt9GkMzbyUEPid3QeR2mkZoTViQzfGEeqNwwmvbTmitRbY89S3BKAqsndu",
  "key38": "45S2ZkpLNFFqpMTXhPKiNSgra4B1Sg5JEzVW2KAKUC9F4CNc9g74nwcMZwAQgAUf1unfhWF57LkBij64CTLw9NPe",
  "key39": "Nbi47knHRtKuUXit66xAq8zpiG8ZqLzUx1biM7CuGNkgSqx1iG7JHAqHACeSQxNvHjFAbSmhdpENpLsxQ8uU4jE",
  "key40": "Wq2ytuxeTCTowwBhfY2xSTTrThm12nUMUkGvFLWW4z9yQSSHNGScWpHjtMHsCU2JwJy8TftjJo5CpjYK8JXeo2p",
  "key41": "3mfNSRmDT3vuCqofHwJNWpj4ZzVKXb1JWFhRj4vwDy2QbsTHXLZ6sxJEro97Ni89FHr68RRG3SyiJZp9n9ZxeSz3",
  "key42": "3cqNDaaYLqHCqpbBVXdPjc18RVAa5m4yz7k5bzAvt3iJ46AcpVd9X7qvTgYfcqhBWK7QzJp5rXAxC8XLa9RgzZZk"
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
