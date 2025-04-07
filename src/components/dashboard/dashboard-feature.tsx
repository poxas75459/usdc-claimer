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
    "8JPQXScbbNRH823REcYvhZvgFjA33rW5THV52QxnUspVxr2E4qMh62GAvoKAw5GJjTdtxuHJz6vgZwuXyFimwHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SGW3dtftPu39L7P9vvjq4bGBsSG6tX8kJbvxpChthZrVzHco6CcgHTJjSLiYjLkr4HZXKXq8NP3jYd8wrqWVW1",
  "key1": "5RiUAzBcCrnnGmV99HgruQfK7Eek5sEs1eea22kjj8uknbx3JzXuwLCKB1RNgPtRbS1Ai5oPEBFygaaob9G4fkAL",
  "key2": "4BUB3wnGVCvoyrJMvQ6RGGiEisJnEWbrJdvgwDsoP6HZ1cvuh8vfsdBo47PipSerrkn3uFy5Kbhb3hCvrQHGbFhF",
  "key3": "31wPZr3yguHbU4xF9Ue5jG4icYYkhaEqn9GfNkUrGb5U21oTodJ1kXs1xhRJpMKtMMcSGmu3fccHuMZLEpAtMvvp",
  "key4": "5u4BY96Xb1AXu7QoTTPTekbyCxmSnh7iNoenQFhW65hdTpjocHtQJkgD6bejK1Ncb12ftuE6VXUAtjDD5DJ878gL",
  "key5": "3uzfCk8hRasZT2Bgvqs9VGHx8WB858N3hKvVbUSvFBu5A3o9PG1b3aQJGwARUhKAgJo75QK7MCTwJXt2n9zJRYgq",
  "key6": "5BqZnxxRMhC2jJCgQfjouHGcwwYKeEqpswF2dJfBU1NtffKSB5y8HHs8H3TaCGqrSp4JZ43uHBxEqoaLVauUby4v",
  "key7": "XfrF59JJX3Fz7LTwoFomFbfHAodLCQkSDbWe4JQ3haEPBePYW6QVgqUc7CbrWKz6eNPuzMFLFoKaimSv1n91VRk",
  "key8": "3ZNxKdvuxhu7cZXm8bXr8MCbMka2RpWd4ytCHTGvsmorPAV2qnPVRPZHYmc8njP3zkZeDvDN5YTYhYMLg2GWYxXU",
  "key9": "3LpgcDCPGk4brhYKMJH4qrwNaBkirWf5PfsELtWUf7da5L6wJ3zBij8BM2dkdVD239qYpcop6q5usXP25rHYUxEq",
  "key10": "5hhmTRyDmv1r4ERi32U5P4SNBwSmZ7cirVJGEKm8mPeCj4Cg7mWJcWL6hJcue66MYiRJ3p94vTFNg4KVn61WP12Z",
  "key11": "3tkYNJq9BxMwtuaRRn24VutZbNWdGQuzoS8myNrvTEzwtLFhJa2wpp6g8898bCPPzgfr2mhfzdQjMbshz1NFEmNq",
  "key12": "4q1dF1dxWSNGXgXsHSMBiqtD7oiVbekZktKbB2GJGFEmtFQxykBeb29tbZYtJBuHFiW7LdWXVuryw3f2dxoke32U",
  "key13": "2Pf68wRKaQnguDonJWK41rt7ybxPEeJmiNZMydnUFg5z7f13AdyKHkU1pCo6hcDrdiK2Mr1FutsetVkC7CunC19P",
  "key14": "43bs6BvVPJP7em86wGDCnsvJHX57SfQo4Ypya9PHhL4iMs4NRPbZXrCgtJPYFxjU2RTDKkqKGjkeKVpRUF6UzNun",
  "key15": "3zJ6o8UPzQnX1xr2UFQyrq4PrEMKX8goMAuqG87a4NXnAhcuuQEEXoNKQaCAeV9ayExzVxPe74B9ndx3f415FT5q",
  "key16": "25pbkfgWfiLYWCXyx5V6tVpbkkbzKfV5SAixM6bR7LGJhAGmLi25YFUDmmK8qybxmmn8jPGQuRbNfSuzngZjqBhs",
  "key17": "2Skc2ZY1QFRdKV7ALBo4zAjt9KhWLiVXQF6ebY1TnkKtWLnVjVF9eaDdcB9ce29K7NLzxkwuTyzqkASZnTnEXa1S",
  "key18": "tgLrZjRUBrwQ3J7cERNM3hzGrJR6nzFmD7umbPWMYGU93xGjTWAseSe7E8HAVKp4RjsESn2CkQdKGTsACxVaSoD",
  "key19": "3wYTAwrLtaAhhzsJQJx9EuzNiof1rWGRSudYayjRah64TWNxKXyggJ19JDSZmANC73tAoCtjErGpayZm7cWd1SPP",
  "key20": "4Fw8tMy6tAjKDMNYEF4wRu8j2XFqfyX3kRueaGJBZK9cGnjfh1kAqeJXRV2vbBwqPFP14zLByXYCHisbxreyuZfB",
  "key21": "4xhKE8ULbSAeWa1mVr7K4cUxRWdGs7wGsCS8qME7CeDQWSGgR9fFX9SyvBZT33spmksceatPcVUFBQBds6MFmT6b",
  "key22": "2zYECBJcfxuPfbCyFgYj5ieDdXEoPPxZi1LX1AQb879MmSnLeMsogfFCFQQgUXZnd78iEwmNaLFGvSxDtB6xCuBs",
  "key23": "5rR3NGkw1aQBH5AFiY9464GM3pQNTUPfnSwtBVs8o5sLFcCALQiJL4rWuAQWFrwQUxgUHP7XQfC5yQEg1mJpcpiZ",
  "key24": "x93yHuMdPqEnpWHWgvB9LJrH2Nwg753KcQvRtDvymBNCUKw9Maof2hB1zGMHwmw67tRXpfdxj5UwF16XtLWJSr3",
  "key25": "2JWfzcKLV9PyEmT5iLDGeCUF3YQGsPppzxwcyu69RoGi7czaFFZUBm7RTit9kmUNCurPvCuVngXeByMNM6uBU9YJ",
  "key26": "33mGB491rRSBB6wY7Ax5wHmYXgbLsCCKkTMU8vz98nSWXT8UvjFtPSoL5SFgQ55LMPCWgEpCssxXyi1CFdVnUpqG",
  "key27": "5Hnge3ZCarKk4SQusmEqhi2VeN2Uqtk1SFFRcz1md7FvTpQwkdnZZCApuke1EkD14VqDxyRgu7Y7JzswxHKtaS9i",
  "key28": "383LQbhvxsa2ghYRXp1P9uL3FUp6byH5PDHmTvvYY5doLvXijSn4AsakPYJNFTacXDeghAETN735WVJmzWu88UkZ",
  "key29": "2XDcUP4ZNtxKU2VAwBgDcKCDUrgKecQzQ9SArmes1n3WcBd4dsSGYejBqmPS8eE89SPB6FGTEz8EWSmiHHH1eMxT",
  "key30": "2SbzGHgPEmBoxXqEakK2pTrbFQqUo1NAAcw8m1d7UWBvdzV1MxG1BWTqXBQd2S9EaU7ELxw6keEqNPHoyAGQQDvo",
  "key31": "5EoYd6fs1RSfn6aUgdnwxdWRrAR2gKT6Nb4qFfVsMBJVL512Biu2yJwkR2MAEoAgcosqzyqkoAkH6bYMoXConXVA",
  "key32": "84oiByQbX9bjcp9649NUqza6EtHt7DvVSTGey5YR7wmrAScy5TmnZBbf7xihDBjaXuVZ8CCr4CC1BvKYvZnWZpY",
  "key33": "2d8qb6vVF6SP5qSzDkLtXc15LKJSxir18bKpfKtMx5znvA2QfaK9zg1aotiqjxi3g8p6LUTmWJE1AmBejJspPykd",
  "key34": "motXmh9SvdJq42ApHwXKEbryXV2qDvGWBC9AoKo99N32Pzmg8zeQusSup2rSiKjX6G9iQkhp5cRbsD62MVeZUtQ",
  "key35": "5yimqByyQeRApht3zqbi7bjeVR423m9hSTmtGKi8y5utCNDqSfZ1StBdVJykefPHJza6RxRgw5puCjtmNkLKErRo",
  "key36": "2e2UuHt8FFJVQU5wGyLqpT2r93mVGWDmpgsNXU1E4Jm454ZV3ctovc7EzGjJY3V8BTRTeefRr9twupQVTBnbiFVX",
  "key37": "2rxY4y4NHmf95UYNgNt4D7pHnvvcDzgYqZsTxRqhvY8Qg4FeTQP8UJavE9XwsZBngCcVJsBQcP9NVTWLA9NXGqvH",
  "key38": "QumSQ66EK9Eu6u3YRfjFP6i7gjQ17vZtpea12dn2JVpZHYKjg3ZQzSnSpH2oTcbUPfPSWdNWpuhgG4Uzn7V8hC4",
  "key39": "d6HC5qMSzWc7SaxsUjm257npH8o8h3BJeFYXNBz8tUyLbkYBVM9XB7EvML8R4E9Lv6kx2PiJFowZ8WMFeQ1XQkA",
  "key40": "2LXCkj2qHgXcE1UBZe98qyALxw73ye2EA2dWuoT2awULQWMGeN37edqkNWwy6smqTzXh32cTwbDHJzDeH9qD14Dd",
  "key41": "5AhxfNfQ7vUm97J6ZqMR1sdzfqnrzXP6Xyvt1XQaWJyYVsxz1nr8DRmNYsrSbHav1k3EZdfAAcjnDPAaEDvg3Gsa",
  "key42": "638JkwPUGokTS3mDqMT7s7QT9GkdCM6t5SkYbV76U8svitfZAF8wRwkqCoh9K9SKdMLCpVuUckK1TCs6udEJiBj3",
  "key43": "4ifQV1NGipSymkjJA3PqLicFj97wb5Dr8Yo88vBsHk5QK2yS1XV1opH6Tw6dBqhLj2pbJgDm8UDoFTndj57xvmL6",
  "key44": "55DEwZhykBgRH1z7rVkbiqxo8HLUJHMsmLFuHWZFz6FfzCHSr8Jm7KkuNdpZuUdRBDkJX5SDDpMMcivLyUQ9nwiP",
  "key45": "5CvouWozKe1QLGyQGrFbmKAB1d6mxGzeWtPCtwg8iukpaWkvmE4Zu2M3ZYaa8uSAYJqEVwVTjVCWpi5WMquJK8fK",
  "key46": "xpaTLEfBRJmCbBQzyGYxg3YivgM2pcqkc5aF67N7tX36zZxymTkKhGAFgGEvHvHMAho569cEtZpt5GsK4g1pK5t",
  "key47": "7vy87juZuL9YVjZncUgrjg7RL4QQkV6gQKmhKEbDrHTp5FFeJbMfvoSZEQEQ4rdabu2XhQB5ssF6YQJ83wDEuw2"
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
