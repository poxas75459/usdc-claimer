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
    "2DjBmCxKvfzThWLZytqnnH1EGBTZqEcRrdbx8eFwaVAMvimB38qJk2zWSZs5Ysftk617oRW115FJjpdw3b8CFUze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktyVETqSaKu45uEvh1wqaaaxUmRThVK63mvHniLMExbtDPq3em8d9p2e2uEqBbAJgddKFmGbh5heW16TtqnzRRS",
  "key1": "2y4Lt936n93AqxpnMySgpKrwjRXh7e8dTLbhK5354SaxHQU3vBREnju5AAcmzsP8KzCwpnJGakHu5iepca1K8LfR",
  "key2": "W5MQMSEgRdzdTYizF3dv7LdVmWBhxvQG95gbnGzr8RoxmKsWgUuxHmgXaYm38cyUtpKagiiuT8UQa7rxBZ97Sa1",
  "key3": "3jiQ6tEPsLiENpq94osMSuzcUTkjYMD4etZ63ACH2ezu6MiuCv6JYA6e1buRKbHNAawuvyRMoqbFE6L3tPR54tbM",
  "key4": "2fyW9qKN3V39iRi3bj5zaV9G1puN2u7Yk5s94NzCxqFaeTxwDLv1zPYtsPkSJTu1KsLhBohFSoD6h6mE4sbUkTS2",
  "key5": "vqYMkFqtdqfZYgRtA3BDv2XjoyM7F4dpKFdZVT2uEx3ATBNgiiqK4hKh2bxCevVBNjLDo1HmVnPW3MtvbGqYR5N",
  "key6": "2QvAvrBVWwrQQdyWN5buKbZ8G7RGARVHvobtty6cZwmWa4j5C9E2MaoPWparhLCZb1XksoxYxwzxKxhbHvnbTEdX",
  "key7": "54bNpH9Uhna8jRw85i2eWhBDFccvD4MNE1GmXSYXBdaxissDEm7ZdKbmsNecTff6XGAm2SPi9KTnbDytafeMxw5g",
  "key8": "cSLa7x5CiypT6e1JNN6HuYjePrTFjxWauZ4JoQM937vQteAJL9g45ozarTkzVEidSBJGVMw5CZsF9fuYVLChRBQ",
  "key9": "DUeFgCfEpUzMdYf5po1sN3xrWuG8aB8zVm5RnRPSk9rsiPhvkDRGenaBfv2D1ezXqz1zYRuHB9rGDDWZYYJxo1P",
  "key10": "4e4hM91ykV3HBKANAW3JFLby5um8k3CzEcbx71Fi2J2TJoVvsXGGZR9a9sL8esavrbSTm3E4cQh7LY4MqKgHpwUv",
  "key11": "cDnWsmdNKQ6cyvfpGgVxKjYjenGpAX3atsXrsUjBu9aj6nK5xa86udkXwH6BiXEp1ExzAYF9cYec67hncdv5Wja",
  "key12": "5vfJTfynrXtmVDg9WaYzZ8sV4Qq2nsyH3sud2bLr8n6QNcxLAZPew9mGgQ6troHu8YSRy6CzKW1L45fCsVc88hac",
  "key13": "2GycWXQiynu9NSsaMMnW1gQPtDva35rrEyuJ6MjNazLWHcW4yssxvrmkLhzZFdxuRv5vcEotrqF6Ghm9f974ETzZ",
  "key14": "4bM7ueKfpWcXAyT9g1ziGFZEbwxLKpBgDYMFSSr6nzQsCxEbX67U3DYG24ikVzzvG88T25TngHdezDb6uiLEr4ZL",
  "key15": "59nJVQftCYmAdP3KswdiwoDfPWYGZYsRZumdwy7cF7o8cEvgtaUaXq3SPeVcYQXidXawa7p5a6cG7uKwCRAcazqe",
  "key16": "XVZPy4GKZBHxgXcih9RUyDXAtAVsonG8q6qNXLsU8w2acQfeHLTYVQ155uojwtu1ounZB4FhLGtpMQMrCkCj74F",
  "key17": "2WpFemaA1eEhiGcM1qKcQx8HJuZw7eATZLAncu3ULtBCbtzAq4CpYp5jKXECbgyoFjKG9ZQL2ch3nDNt8jdmQpUC",
  "key18": "3WMvkZtE8JAwYVnbTtSKznbNBiWHiLGyK5UiAmacDvAYbqbiVW24FZKYC4JEHiRRsyXT8Nw9XdSsTD5s51KQyHko",
  "key19": "3b4V6jJaYtH4KXNRfqoUpRpXL1LomTWXVopnQmJYKBTr62iSGTuNxo5h2iSqEQn3QeHDnDpdRcKct1B47fiDUiWx",
  "key20": "2MV3atRM1vvidHDzxRwsVazzWJAJxFCsnbmUR721r42aphXFACLSEVYwMkjG39RVkonQ8zV2hDJRhwLugBHMGZy4",
  "key21": "54qwZukqKFLnXrcvsdVGowbRJ1wEmC6Kznop55vqAF7cMUcf3kHdbZ7Kv2kpNAVN1L62fd9uQPNH8uqje5rJwwvQ",
  "key22": "4WKtvnVYQe5M1dKSvM3KgvEDMXrXFrLa3EDbnxB6fx1968duw1UVMFkNaz4BkZWa3f3vyYJfsauFbCBHe91T33TR",
  "key23": "3dbcUR3FPy7xndHejZ1gxpeaCTF3xGrGY6DdxuhigvrdGEZgb5NJvhvj3FYfEXCwHkaozyYPVBtmeFWuXKGG9pJ8",
  "key24": "38EksCt3oyPJpvrz9ZX2qAKiXaFaTwwsfVCcLejp7pCrS5JCo4nbvCsayr3CSZtiVCdyYxaeKLeJiwHFfcnutMH5",
  "key25": "3sM8SCNDXYfWvEHDYegGsZZeyY63fhYnbFY4CnfZ1Xe3iutyRAWVNWKbcYuEYqM856zsFpUZLR2fxMZgDFUfFpbM",
  "key26": "4YGy3rZjVeiMnJU3VxLDrAuvWgJ8onKbpv5WMi3byc8SrcRx9Pm9gefRztPo7BAXpM6DSsaVQdqWHmkoPurkZEgH",
  "key27": "2zBj3bK466cVgY74A2ixyDLvykj7398ZKiKwW1eQQ28XBDvtRzVhjZHYD5qoaXm9vaxWiBttDQhvvyf6wRn4vWbM",
  "key28": "3L1ktopKCYegUqjZkbGjWUSMrMbSqX3fxMdhMA7c9AxkRKw8PhGjwEaAFDt33iKxx3ed4mCSAMjSoBjWzhYqq6dP",
  "key29": "2sXXEjcJnKtsDW7Ht7E2u9L4sYSLf9sPz8ovd4rs9rssYdHdbX2r8FwvNvT8kP7fCxS8NwfThPUvBGe4pVbFroqh",
  "key30": "3nJR5PLvyjRX1S7JDunXnfnEYXGZGJpLttPdBxSG6XHzDuYnA6YYTCSys5P8TeD3hf2Q775vz8xvz9C51e6VX558",
  "key31": "2gwomoHYciZcGmdrJVgL1cQvvTmAzv7H651h9LcUrUYEegGaJQjqRRhA3BmdGZaRrnAAEGaVGDtqxVHiCRwCDLGf",
  "key32": "5Q1qkh9NKPYwM88GykRz14Pj588dfXeABdpq1jHFmqCF9x7sLC48aWbUhZYGmHNHWoCewkbqJLh3xxcMVAW8a5zB",
  "key33": "iC9vMW7L7NvruZYdoRhdR19FbbCcS4zu6KTQ2s7sp39Ed6XU2CNDa1T7d173nrgjcFyJ4aePSv1TuX5VbVCBcrS",
  "key34": "ucqqobXnp9dQpLqHQFRLgSe4jkEHmxzZS6DTR8NLxFA7mLfjEu8LsYtwBVZpUAL7u8NJN87rzcfFYP7jnypXLrU",
  "key35": "4BWMvCkH1GPv5mmYjHvJGj1p6R7L3JHbPH6JibnVh3QzujJFc7571vvyQEEtSdUw7FLJ9q2uQxQfhAcFwKZCpEyo",
  "key36": "4sMDEZYnrNA4Aqe44feDsnDPn6vPZafxJLvnLKLGQoN7cvK9SEfBQGDacJCd4mGZjjEoKuJ2RfWYjRDMbRjS8jhu",
  "key37": "44bJ37n8pFi2CL8BDyi3Kp2kRVtUz2fELHrQP5VnEqYXRF22Rc4LN7bKSNxr6sLvZFuxp5Hke3e2hZHUPAi3EUsH",
  "key38": "61VqgomruBqzRGqx1fofXLJ1PQVosx15WnuST8Lp6Y6FwFpqgLSu9fF4s7EuQr1RaGPYwK9xMpmMRmDB6GuesGSa",
  "key39": "37bTMALPN1CJdXGnHiFmeSu9BXa8i16wsQFeBTrJPMY68mKjtMDGXXfAQP9ZLgfGeuy7LTFM8Dp4JkgoraNHj9K2",
  "key40": "3tKLefYon8Sbqv2XyGoTraqiE37x2jevR8waAw4Z9n87MaA9zCTr4YpFU7v54AKX7kh8g4rVDiqGvwNhqmHEyQJ5",
  "key41": "5WNmZv51BCkYsJge2o9pNasGSHHa1GjqA3NJY41XMSwcMiAgUKHcL992TEVCvBRb1UKGoKApoCmerx7Ca91tARre",
  "key42": "3KMGeR1qqCD3jLFvXLMsRXe496ebxsFT16i6ymcYVPSBU9JK586dtiXeQ4Bf7yL22frPgTS4PozFL9i7Q1q4HtyY",
  "key43": "28wTf9nC5ABCMVTrmFzxHQTrXgaePCcc5HgSRyuz3fZofUj93xMrtLQwS1bwAoq1VV7pazRYepjZ2khAcmdCMzKv"
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
