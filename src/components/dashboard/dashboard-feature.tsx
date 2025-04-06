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
    "4FULMextnJCL17Xgq3mZQq7vQs5gRFkMjxDEwREZ9iL19JuWQqzxAwLDhSt58W9WvnvL7KiqtzdLTo8WHWF7BQU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jd6vsqPAtBfJPo1ZTwY6M5E6jCVZXx467vdoBjs4Dexkm6Usj8Hrm5YxiTU7CSxvpQy4BcKCARKrw8mHYQmYdEU",
  "key1": "4ioQhzawSM2z1BQdbjvtzHNEXxm7hZAfzY5mZKjbZZFKLAHGktGSAysvsqrrFVkLy2CfDbm1r7WgnxjXjo3n8rKs",
  "key2": "5VFJNP1jcxbpeT5YoXyWyJj6rtNwsGhg56ZQbqb9uLQi2LHCAxVvXjafqBigqzKgiVaHATHwhRaxpayK4QBKAE6B",
  "key3": "4mAmCJDdpFz6Mt9ZDNpLkisXmXELqdJ6o2Ereqyr6JaLH2BojPhr9BkEKhGoxzmzqoJBbqvuw18jdhJZrujPk56X",
  "key4": "2gBDbhqMk8ps5xbnZtuehXDdHdEFbgqC9UbT2RMJj3y3LwVCq2kznZMBdz5kDXZDk7feL82CLk1gcCKi2sn74BqT",
  "key5": "2BxMFrEsAppnS13Pgm2mqjzVv4vkFzh7rgdUKdPceYxjPP4RRL4NXfAHwW5S4Y7BJKRh9TfsZWfGHSAPHBqvmBnL",
  "key6": "4nnWBE1bmbtera9ykdqnuW4roJzzpZ8aZFMbMaFXp5QmawR18CJGjP8Y1WPEiUppokACW83PEHzjmEUPH6HUcHqh",
  "key7": "2Lf1tvhijRD12JBAoUPLJg5khisTkLCLfyTi6zkGbbKJD8q3RiomnAnnv7Y21m8PsPAot4MawoWdEqqHjRQHhHdN",
  "key8": "3NK82Hpg5Yu498kLCt6TZbdftwQVWgMLFGgT53zc7yjNu1Kzbk37Mg96ijYzvRzcJWeZpFs9nbTpZzrit5uWX7q6",
  "key9": "XG8s2dtN8w33Jb63QvVvC6hiZiL1fzgJB9VTXcZrLgVeJBLaaaAJN8AMSBYreCfEmXkCv4izhrujig3EFT4w1gK",
  "key10": "2DNqCtf3dJap2dB4rhQ6TJcdhLJgUVRK2ixSH43iBa7tvYTtDZ8PTrRGjt83wPGtL99QG6WymfKmvyEeRkF6eFsE",
  "key11": "4iH5E72XQxbCbGu5APc57Pd6t3Px7vWAupnRduBg7qvo51QvB5AwCeKcW2wScfF6zQcWLDSJ14StzQ96wxuKWhwE",
  "key12": "3EzWBoLkfcEtoxE2b3e5LmDg4RUtLbkevBYjtkcsfdQ89Am8ovLXogRx8ZyuEuWsNxoMtF3VJGyGfPLK1GCywpTa",
  "key13": "2FUbiJiCbG526zL7buv6AD4rLspv3s77NUEev9AZM7cmjFm3eMDH2KsHeVVbVNUCCa9LtMrzRRV9gZVi5Qmw52EY",
  "key14": "3Wq7z2rXBXiRFsQB1zhNs6ofB11bQr8fwBSfatYgKjAdszLrZ87N6qpazS2UNwP9o4Dt9roX7KsXVWu76pbi6ztg",
  "key15": "2trLGYLu8F8b4huiHoJhrjn3fqmpDassxeY6nrpv7T1rZbJiRDnsv7sRknqsJnTCxCmJERmWsGgxftZ2Jum5TiCw",
  "key16": "4VSFWvhKWNiHWyMv76BfBvouAecioAiS6SfiHMNLjFrwfg99Xpchh9AdKZcnAS642UpK3yp1DvusbpKhYzy97Md9",
  "key17": "618q2ykhxbiwfYUd8ar1moTrrwrrjbfzkCe9tsM2R2YSgmQJzevQYL14ZZc3myuj8ePdG2winPRDi9oqYzDmCpdc",
  "key18": "3VXjaN9HScxeSaoEvULcDw9iciWcP5qTUxzjXJV5nQ2ZY47m6CxEqE85kZUiTxYpq1TiDFUFDsREQbrFFjY5k2oC",
  "key19": "USEfs6935fUbrch5gpZGNyrG2VNwM2qRwWc3ziSvCypSXy19AeeDYmtBAduCDPPppauufpJotaGb57Pa7a5gqkd",
  "key20": "tBvK5sFAePChk9L44L9FSJNwWaY5B7tJHr4YkX4169eQfUWGsePXRE3qRSRnDRYqaq9Zqix7VfKHK52BQfce2Mx",
  "key21": "EenipE3CpxXUnFdVsc5WDvyFgggKJy7s1SBjHVDzd77WFyaHY6kQLisTHmgAzZEdyzuxyQJTtMUQh7yWS6Kjz27",
  "key22": "3ZWDSwg9SGYWifZ9ceLRsraw3iT7afSMgQ7LczqfG6ysrZ8n68w4UmNGkza3irWSvQWVwHZv9Z6qE2PooG3Kqgi8",
  "key23": "2fXEnrXxenbSfFBR2vmLRzKUShyfwHrPudwp85n1TTphwgiU3SgohYDD2JCXywUdtUTvHVZvmdM3NNJp1LXPgF36",
  "key24": "3k2xSRsdG8JU2m3QC5a5DH47zZTsUHb4D2J1G58DdYnc5ScGsCxhV6GRGVc7frMxQVJLaxYVgWbS7bALwCqCz9BD",
  "key25": "2vxViCjR3nNjFCgjzZYBkw76m1jHhqVvsENfzo9A4HZSUUjYFNjFBZ2EwSnJy3y5EtSVEAY8LxViQWRzrqTFxy9E",
  "key26": "3NsvjMQUB8kWxLsf29QjS8vavfdc6uR2UKXWobjUNnydUf8JEe3TZhDUibdkSvE3vCtSeDVPLMBUy7BePqYTiaBS",
  "key27": "3McXvqQwbG22hFbhv6GUP9fXwEAHzGP539uayjS8GKdD6nhF8LFFejQ4kSiQuTv8f9j8VQrhMmbLFvYCZ5fmXU33",
  "key28": "vu3kCBvCJpKkXUaSKnXqaaJ5YLrk468Gd9X2tnKPyKZPU897UL72qoS9jZWEjdw9Z5X5NZESeeURrhYXu1hY6Ga",
  "key29": "4HrpNLwaMBStxSEmj5po9w6JXiDGEzG494rQH1Amj4cbroczyEsxTpyx5SScfLmbVDjkagjWdrc4iBWqwKdf1L9w",
  "key30": "3TjQngSCKzNxBU3GDgpLAiH8ZHmuYoG5sxqst1Vv1pYAcVv6SnctZQq6yL54vLuZ4V4CfHVvSQyb6hGTwiZKkkAS",
  "key31": "67eqeDFYjybLkxzPLmXGAdtFPDwWSqTWoi6dVnEhR5qkLnR52cB8KHr5thu1e7uWRK86utfsB88TPdLH7wL8CsBf",
  "key32": "24pkus9awpdxwYFLZPrGxkbq4gYAtgm3ri7sHiwDqALQ2qcJEFFXyTjyHdyWhU7NkgjV3GvnETw5VGoNcoj2JL4a",
  "key33": "2i4kmLa4PdMKrER1cq8LdasPF4pRb7vbg5oPACB8mWChnu5S47EFtcqZCNzNZxbvjC2XJb6BreyLjx3pbLDzrBC8",
  "key34": "4BWuDChxrpqGQRkWzAJQ13McDmyf2UnijBvZigayZXKbKgDEWX8iVXjRWgHqEYrivpZK18Ji31FakvULR2mc41mR",
  "key35": "3BzNQjNsNmAintUgQCQRh7KLCKVcW4BkojpftmYMsRPvuMnakQTizYzJX9bBd8T2yjfvwUBqSemoNmaGwE2ibP8U"
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
