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
    "stfofzazC5m5ctzYdBgVx8fQtWx1EeYqvifbEqiUesHsnkk77Yc7tFWHRSjLE1bQ8dEcupgZXqKBCgacbQF91So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4atbHRpA8emtXcye4o8bGTzEPLEB6QRgh4KRcvtMzyvt7NLZZzWEStVZuadAYVwYNAQcuetxtWLqxshbJdt1H3o2",
  "key1": "5kttf5Y3LkkLdUhhJQipvGvVDebSgvaWgMB8A2UQUGMjgD3qjcbQYscxMLFb1r3pXCPMUtd5iRtJhcuiay51opiV",
  "key2": "62FTHkKUEEPp8evvSkp7AR4aVEDkZfwAtCkarfoPngYyxYAUngz7Rswb4o3XHsFZA6MhmiTy6utzNuBQMNN5y9ku",
  "key3": "5djXMnALhc6y4UExbmU7tXvyvsyrFaWjwcCf6sCs42UMwyNbJKXM4QqhAf1qyAEyWemVnseiduEwkobn5rTQqvLs",
  "key4": "aUL6SFJ27UUmY7gjgq9fE4RgCHXfzQtyzNWB46VS4o9m6NEwBELcfqSJ8qsSqhQYDYF8m9nC4zUBWDJcmJhEqYw",
  "key5": "4KLaNcq8MEpScBd2czV9Hsir9JzUm3Lfkgduen6U4YhKTGfrWXCBt2L3s3zhTKRCCPwiPksG6MuW5VP1m6irBsjN",
  "key6": "39KjVNuWwu4acytbvAsAR6HL6g2Cn1b99XjJMidTia6MHpbWpHTgoTjs2iVhNm4RTfEG6oHkborSZMsWwyAujQkS",
  "key7": "3GK4kZRbF4ZSsG1ackD81oza8Y3EvWApGw5T58aNSsXjmJGdH3hEcsBGND8SAV8Tgn6om9g7nCUZdcZtcWUuBptR",
  "key8": "3mf7aWJD3UDkUJVdv8BzVqJcVzHzuafGdghKfoFL2oqyUTotCnLG7CDMwcKRUhu9rdwYiQFtZLfSTa3K8X84x2nz",
  "key9": "4EEr6PTADSx8zwegXcBMovjtPWpcCa7ApknvKNxSTGgQxrnMj7hbEtzP5ELkkVvXNVkWTdxk6J76Y4D8cWYwKNWJ",
  "key10": "3e2ZbN3AapmRLyvPewyWyixb9aSes3jLr8yujbWvkcB2QmWx5dwFACU7cmuZw1vonECfM8UsgDu5xvjKabLiQPtR",
  "key11": "vyqxbkmWHMmJdBGZmxJC4NZ23Xs3BAbzp8fFwVkbo1tgWS4akJ9aPyT2uEjp59uPSoxYbi2kc4o5p3C91a9VfMx",
  "key12": "3aHrbabX9sUMaDCmdCAeudvzcKsKDRhpHJBZZZtX81Fnua3u8wGp3k6awZLtbxD1eErFLvt5U88vjLTSzY6pX5GX",
  "key13": "9ifUTcH3pH4BqJf3rkuZ97SY9Qe2wtKR4W7dPT5ukuBjNdonR9P9oM32cFDhQouHWEyrAn9KiHRDwipnWsbBjn7",
  "key14": "5xEmNpbj1xR1QLUgbHom8qTxzm3ciWoemKVGqhNLBYzp1yYUxPAhW9wakndHdjh5bvKPMGgL5EYprFFUAx2evSq1",
  "key15": "4bovTNJye15nF1GUFnCzQZNTrs14m1HQQ8HkaUGGosUqp1dsvKCHtC2qb2G9ELSDymvDb7ADA17krmrUxNSk3Hwa",
  "key16": "2qtgn8pJdL84VKJnKCU4GGwiC7kePpPLyFmL9Pb1xzZxSt5aDKHxYXDhjXzC1yisQohbJi9wodYaYJ1br9FZ2QNJ",
  "key17": "5PS6hvbZpkcmfnsJsvuPTvENU6PrAU96RRsPi31rNBtgGESibL4YaWX5Kg2SU1uv9SbBb4vvRyRFHVb7wU5KAvEF",
  "key18": "47udSYc7oBduDRLxCSd91kt11PzUP51LCgCYMDHw7gATWD8nKngnsAEUZBwr3kH5ayxkvSoSRa1f3gcmVJ4ABJsa",
  "key19": "mCg1mDJeD2aPMUkdM2PAh3kGJLnNQ1ov5uuC5mMUm6jCHhmixza7jL5Ub1hUYqEJmENRMYesteiLjcp3yJQNa76",
  "key20": "22hk8XeuCXVveddZpuHvNCFgWFNSbLpo9qo7vsgyf87x79ai1pEZMQDtRFDbkDVyiXNRRz9rnmprkQx8xkWyViyv",
  "key21": "4o81fr8S96Sxm3T5Um5PaA44cpbyNMr3ypqbcJcF7bHY7L8wx4sS2df3u2ofgnsekmmrTsuW9aiJzcWHx3BvH3gD",
  "key22": "4VeHbQkxZuB4mKAMT7Ac4hdWeidAwaLsFRtkAUYP7CVKpSNxXRxoXhzchmNYtKxQie5jrtTszWe7V6jZqaBiR7FY",
  "key23": "2GKSKBHQ1J8ybECQsoHqvgYqwmbrqjuyAn39C4eRWtxEhCeRUC6iPgPabiJ6pT2KrNY5kJFTbBkx24ai77Rs1Spc",
  "key24": "2Ain3zjMC58HGnYRzNvafGMGVuFw9BzxWsDoy9Cx8TrLrgAHxNHAnS2LktVVTVdZBcKATXyt5SFVqsqZ9iAvchnh",
  "key25": "5g35wtk9akB1YTtVpcMk4GEGeq1nACfoZcQSUoj86BBUyAqG8txFbqfxWBMzQD7XLCUnvicTjxeUdyEaiUJxyqFh",
  "key26": "UmG4G414Mjdi4svQqUwXJpA5BfuL8SJxMhCLnWNJ32u9HHtZJyEMZWUxHv317PjS7esJpvRY3jdHGK6McwsU2Ga",
  "key27": "4Bhi5is3bitCTQct1QQmkT8FcCq3USgxpH2SPDL7Vvq8t7aicYdjhz7N7c3u7tnf2VeLFZ8sSCEs4BA5Av13twA3",
  "key28": "43jTLBTnzk6tPPRHgak99GusUEeG14YZp13Qjg1PDZo3ibqi72HLWLhAyDRCQktVXVo4terPbAoJmPuzVppetBNA",
  "key29": "JkRqrxCTUTsm7p9KPBxR1rq6Nb2nbw9FRfsuqzynx6xHp7wjuZjUzq3WhwknCD15zVKZPUD2BYVcEzxEyLCKppA",
  "key30": "fqX9LSwZNJt9pc5VzMRFgNzwrEksLvt9ojNQKzWJFatWqojkwJNkke6pJVeWsUS9EkiHo8FEVkxhWCQiXy3SiCE"
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
