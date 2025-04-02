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
    "ztRnycJMZx6wGRqv8i84tfYA8L35hQCu1vDjJyaVeQAQGt3AMDxdb57ZFAwgZNkrFDQvJD3GpTLr8PoYbiqVDfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qPvy5HERBj69nprWBf9LD7YE5jPaMvGyw7dgv3nZxdbBeJhF1KBxTWXkEq7vx1qUAesSoDJab8tRexaziyVtDJ",
  "key1": "2ZmWBJBuuP8F3eWcnz7pNykcTpFbcRsVQnxp5FdpmMx8j6XDoQD8gVBsywdqYkFKVkWdYahUwgJ3X14DJunqABgF",
  "key2": "MdsCBQ2A7ysy45bNCu3AkexgkC1qFxqo1mRjAJn4KJAVtHE9PppWobMkyX92GSHz94UxPy5ogVfpDV4CXAEmL8o",
  "key3": "5zv8PAttnegFgwpcu4mM3ticyBGXy5xQuGkmPRKGbxChzNWjsg478SPdwkwxN9wxtbnG7LYdnZKZ1S2MpwbkLqho",
  "key4": "5p4r49oEv1NZhHY1KTYoHd5ZVPPqTF4J4Z1Y6QQYazFuwMYSqzVXfYTqG2Y5gdD3ML2dwMV84z5RcRL87t4D9y85",
  "key5": "4W1fMWv5J3R9hnkrjoCeMQ8QwXzPsFS1Br4nTvik3PhuEYote2kiT7ZEEW2FrMTgJsUkp4wzzdENkk6hfQczLCVR",
  "key6": "2UExAm7uuPnp3q1EKLSQfXgfFXpwtEKvUSPUefS2nPyAkfMxTh6k9U735ahqdg32Xv1FDZcsmGRm41qyrWvVRXru",
  "key7": "67EiZCzUeaGiG7mbtHmtzPScvYvt1cmNLt1ecVfDohDWKPvbSRSbKLGSosEif2MQDSVspySgwjSqDq5HvvL5Wfcd",
  "key8": "4MhL81GVHZF4mXmaN26YLu1YiDZPB8uYivft9bFjEBmr5n8C5DQsnQy2iyP5UiphWQjkd8c3SenPGendvjB193aM",
  "key9": "5wMrY4emp7F1H4QFePDaUijRmzPTvscVhEygFZsSHodFBa9AA5bxGEE8svEB6uMNgsNnZnxm7kCU7TVg6xka3CYT",
  "key10": "3nW7V3Hos7Tsh8iSKCE9k5M8pQMLsHTteHKkZiBPkNEJHJRB7w49XoWz7n9WupZxJGzfNXYMbEicZq6HP7dRnpfv",
  "key11": "2JtweSZ53gvbrmKdWynrE53HmrG8hXsHxiAjPsvB4JuuaSTqUHbN3M6u3DgtiHTs7siDUzdF9SzQ9txk2qf7tJB",
  "key12": "2KzSebFCXKefh5mih4SYeYJnAV8ejMd57dwT9YDjCRLaskvcNrPztQuzTQbg1FmksnhUtEfEusUtiuWh5MVBhoAk",
  "key13": "5hXfwRZXqzVsUBwLA9KdAaMR3Jz2ANwZKGL6G5YFgx8DnxFyNmSNPdwva26Axwv8NRGArnzNqwWB9xVvMFmB28Gs",
  "key14": "4LNVbRYEuRQs3qfNgHdWnsXaQz1bVchBvk3zmQUkdaACaioALisvZa4tCuewg5HdwYckQbNqfvuQyvFRDfZEdnqs",
  "key15": "45Bduva3qfNYpmixiXmMpoSRAUpecF9a2ZzZW3g5mb6Ugcd18tu65BcjpU4kiCE3VK2a8T96LCcj8QZJ3mWSPJzR",
  "key16": "39FdvAykLeviPnNRnWEvGbNiorDzUQec64z52miGbhxBsM9A174UXLa1akdt4FuL7WFNspR1W5Fh4ewA7ixTy2dh",
  "key17": "7af8j5E5yUihQGZmY3edL35jCTmV1t7PyAVwzQoDKWQP2U9utKFN6XZFAhT1TAX1G38FgmRvZDv7dTaw7wmxNMY",
  "key18": "EquK2wzfuesScJmuYaaiZHZTydWhi6cW9Nkstae8xQLZ9vChk35nhY6F9GVfC3HKwRzJWQz8ZA49chtdb7S33vw",
  "key19": "HUAD4YejCoww227Qevhvt3FzKKjbWCSR6stXDFazuDabdtxjLXb6CFVWF4fodCRA7GMBr3bGAEUQCe8cgXouKkF",
  "key20": "61K4iBDWWa6zinJzJrfoXG8UUWSTC8uM1VAz19JerUdLTockdb9qzBzSc7YWjRrnm9EpwACs1xd8jYEf5BvPYews",
  "key21": "EccCpSvibcYtjZNEvEqGgQGZUvQwkFTFXHxRCcA7FeRsBPJ6w12y2o8fTRzY1yf7GNeap35oKyFoqXUN2BQJK2g",
  "key22": "4BPNDQSivK14vZUfA9xU1UMTFqp7d14NEHtvD27eDw8yh1w6LnMs2QvhnbHV4xvo1ceMSdFfPw7aRRcMTpc4feZ6",
  "key23": "5qsAzXk669YWKVtnnaQtkgn6hYE44UM3F9zCefwELNMi5TWsUNWdkrHhfUoMHtd7ytuh28gPBsttEd21LP5BAoC3",
  "key24": "jKe5sAWMwe3HC6N4GZRyw5ofnEqjMY8oJzdb4jo7RMBcsKTCtjYMN6FjDLxncST3FKMHn4NoxWxuGyNtcDJVSX5",
  "key25": "4ZLagSvXAMjeRQGr5YkmVWk97EzbJydhmRx6wcUuHjdj7PqCVqrWYRdKorhWnkHx9QeSFQSWJmKh3ayD8sJMDAPw",
  "key26": "3AtHbWU4P5u4jBri3CTpFVRmEwWSbE1iGyoJB1Ti3VZZ6agsuSEU7krYsT2x6JyvKKG6vAH8ZvTkWPisiNj5qEWt",
  "key27": "wxVufqSuEQkfTMnXXZ1Di5cxdcYsxJJAxhymQKUjHundq8tQkP6Bno2Zhk5b9s4jxSZZYjeFm3YTkgK7Ukr6M1w",
  "key28": "3FBysGsdR7dhudAUpncAesVDsAijtLromiA9pK1kFr2f5gzQE6BuPb671y9wHa4LfpKqU9sbro1hMusiUhRuEgXE",
  "key29": "3t97kAXJmJ6Qi85RU5kdGRLtLPyhwxbbv3E8bCihqcWG9B8zVYWEswiXWXteKVKuQhNTccenNRAvWhmJ22kjbB6i",
  "key30": "5WtKudCvQfjsqZu3k75pVovXKWNTQ9LsDjDjwo6zh94SPruGGbdDhSxHMHuYY2cRVTeDtgBKCsVQARqfmFJsQWw5",
  "key31": "2vpCRvoaZEvyuvihvWPTphnACvz8qoUxvy42hfAzMvR2dZEc197VtqHky4ZUMnqP1hDyXCtdgbcz1uvPyTQSCogX",
  "key32": "2GX1SA3ubt9y324FnNzfmTnhJS5se4nFGdVLRo8TizMb27RsYQM16C4PNnuQAS2Jh4LYhvUoyTm2k2HBci7pbxoH",
  "key33": "qxjHPHM42mNtCauuvHLjXUcS3stWBMuvwYYGt1bzLrReJ4jB6rEDPQpUsn7TaAvYMGzFVFg2FUjxPS64Wopyi5f",
  "key34": "2zmxkXye9Ue2iCUuxN6HKG1XFZFtuy9Jrs3We1Rn5YJCsHnVWNkbGXcTaJM31cU4p71X9yj3yMy9dFxQ8xxZbayg",
  "key35": "6fA1a3UQaB4oTtmtVjNbWqULFujk5ZSY4fBxRPG2CNDpAsQJgg9r2XpC5GcJVq59zVeMmC2hgmzVnqiNu2aECZE",
  "key36": "2vDKXwRvQLT4JorNCBX1pMkn7hNmQQ2F1Z3AZBxird3Zrn7jvvXTuEFLk3f1ydFnfA47LJs1aVSy8M7i6Z3nicnh"
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
