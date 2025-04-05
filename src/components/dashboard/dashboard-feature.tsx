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
    "5d6DtLZHkFc5V6WRDYWRJAVXUje8NehkKLqYeJqMU2d6VEgUvSkt8KJM4REoRHTQv46GB5Bu35zTRpztPS6Ry2Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgRmPWMNzVFxgdDoopQHVVYRU9UczmpZ6xjPnbKpB7tEDSx4Pc3GwvHXtBF9j1QXHpfNWh9mSnPYgpyNXxAycP7",
  "key1": "5U8MqtmVJx4VrnUM9rKy45ptLP4ZJHj6GCpyozdajYEQNi9NrzdnANF5YjVrzMyC9UxMfpzQj51zkRxgwUpMaTXJ",
  "key2": "3B5gNRciwmxyoW2zJYZDmgTVieVpat47KXQgqnututG3UVLHHuSaTyK6YtAQ1gkV5XFd4km3dMBSFjLzyJgJppz4",
  "key3": "21rHue9jam5zS55XgihvyJKxNmrQLgWdhK7wV1uvFfqw9tzQu87dAWuQK6xMYwQKCdoJQWvkxwQ13Lkfwnu8eYV6",
  "key4": "3yegbfjxY1czfXdkrG5m379kkzDdprmfSBMvt3b6ZHuDcQJHP6QbiE6AvLjZtxtjPJ2L9oDM7gTATioiF6hEfThV",
  "key5": "52hga3a4uAWbwrqALcvtubcJC5XUC9nstpe6nG7CqExCqXrHfiUD9uaaQHZ7gnV6r5mBvveQQcMeCzoFMxEmMMYY",
  "key6": "28FUbh3YwxrG6jNSMFy8CPXUTr9zJviwjHypaPpNZ9rKs1BV3vEjM67Z1mskLJUmw4DT8qCsnW3xtGh6JMnsDJSW",
  "key7": "4kidPJg6V1NaSLWo3ubTQX5ExmbDtPTWbKDeLhWckpHtb9WwZHJFgMcLM7TVMxtxQCuTTQSPzBv74gD96bdCSEW1",
  "key8": "Re24AaqWCHKCWR6dDERztCrMJARFKC2TdYE1YXhFnrn1ezEHsNdr7yh1a356z8WvPzGRbpKKina5gVzNSHaC9Hk",
  "key9": "44n6F1qVLmKkSrbTy14ZSj62g4xYQK6Uio6WvaUQrW7Jq2bCyLhXSEV3Wmea4PXqynZHpDyrPsnyNebdESqVDHzJ",
  "key10": "wZntAozxDdYEEz5UoSHQwAGNn4pZ5txoYdBHsLJSLSFFBdVgozWgNFyN7QrhyCABkpnJCc4Sm7NyEwFqP9SfMdF",
  "key11": "64g7shMeXTowxWkTHWNfKzE6hvgeAXcM4E6v2fAQrgzdw1ey7Ge8JM8uGANCzZBqot9uNVk6TPuq4mbkh9FUGYRi",
  "key12": "3pX2nGAtkjbjg7PxXtNn795nWt6fbhMYePSuTJnRzjWikebQBfXXeNuygsGdFknYyv25NYkr1GrmtVGjXk6xgQjs",
  "key13": "5Cdwj5guuFnWxgjbCTdXgm4YZcHxGLAD3uwrkVnAwbsCWXaqsFMm8uGytJSW4dF7PWrrPwtifnQATaw3vcAS18q2",
  "key14": "4nvJXYcnDSza5He42WBUH4MSaWrBVGUQngs9fz8rdDHitMNXvQ1bZuwHVEbpTBz1mC5uXurqNWANKan1Lq2b9szx",
  "key15": "Vp7wGHed57UUcWqG1mDvgtpn8EVd1KX68YRY496AKVryPjvmmdV1iKzcCsNeiFpT6ZRTCy95CkakoL1tyKAAhFo",
  "key16": "53v8mxnjNF1RXTWubcCiWFBLPq3QVsMpyMePuwNxhuQziaxrr7tJXw12aJ8EQdHn2aq3MbWuW9qVMZPt6Wq1UjnA",
  "key17": "3qVi4kJiKN922zhpJNLu3PGe6Mydtegz8LByqfXDvL1SoZ9kERwHi2nP37a5sNT4fRh4DKLwCVZHMyFT62pCcP1q",
  "key18": "3N5RcWw6WXQYtmRGLCaSdsV3ESjV3szsxd3J2wo9XogfHyHVTVwAFpNbcRhhhWfDvNDBse2a4CTCQYFAYiKkRKua",
  "key19": "3f6XRMqbLhpCmKFdmwUEABvY7JBkBwkxKuze1er2fWq6zhp9ztYJaowBBoU4qdZor84TCivNcrVmtGMpSoiDMoK2",
  "key20": "5WmgHQLFsTF2St45XYp4KQCkMYgs4hyK8Z1AbkKMSYbP1FKCrpQHjoXwChNF2ZMfHgc1i5W7Y18Sx4uq6R9boZev",
  "key21": "wJg6ktqMW5qJmwSofbDgKm5EvbqPE7jp4Y9UGU5AFSAJw6aEeuHLgb8y3xFHXrPrAWLse39yzZ9Sq1S9y3Am2Pn",
  "key22": "Uo4PJqWsMopJAcazBFX97jdhE1iV5vrTEevKjhKePrMZnwDqrxV8et9zHDRJ5i16yVoJ1BwQDWFgaVY1cmx8LqU",
  "key23": "4Tm1CopFFSmcw4Eo8mUa5kvhP3jdZJKytzSx5KBPnAS61RpMpzDUqHfuD6PAQ2VqeEV9AyuZR3XgGVomHiJLH4ue",
  "key24": "4ZTekiD4QkYnYrbu6yi7NvUpoV33v3719hQWrQV4fvug8rrrizhbqav3d3LyefRAtyQdP29wDzaa2Ac4D7rocypT",
  "key25": "4fF2RFZo67iCz9qDYgGHz6r7pKYnCsRY5EQhBq84YD3cpA6vkbqhyDvdZDz4pLa6gVGgP8J3en6AKeBPKKKA5csa",
  "key26": "3nCfdZus3LjEShvmoLMzD7LubT3wbaeUfPSrvCpty2ZMZkA9QYtBou2cQF5voj5LLWRy6vMeKz2Exj6gJy1cMUWb",
  "key27": "cMj5gjrS56Gy78WiqrfJkn1xitNN3GRSWx5gKLeudBoLqd2sEkSsXNSAEumAoHMZSxEncxZbwXvGUJe3GZF13wc",
  "key28": "3Ayf2L2bE77eJA3aQSFvGb5FLvqu4HFhrQkD8ixnGWRELSphpoiC6ZiVTvaTMaCUY9iyvZBEgdqFH8sgLhZknxZL",
  "key29": "371Rmh6hpk33rdBQZe9Gab73wte6j9HJGctbAQafrBF3YoxLDKmTM2GdqqQfRr1uRiHJkSDUBxj3JgUvP632wrbC",
  "key30": "3kut6gquiYsWU3WvPpEb7fckLicwak5emeRAiLu5YoGH273mqBwCTEst3JChZmuZbZsMePvCmoVvCgjf6RQ2n9z2",
  "key31": "4YnJArntVPfne7aHXhAwWzxe8NwS9trwBN3A2vbVHQNRvxAo7U9ARM1TS6NayFC8Xi8QX7BSFuJfZxMJA4znxFhL",
  "key32": "YVks56s9NayUocrNY5J4Fps9E9xwABu5vYF6oKrrLkgXxUDbBgruVkVkyn8XXkLxNcLmXDi2M3xWhp8qFTvsbew",
  "key33": "5m2uQyhQszMA1vN215HumyJSQcePQB5xvvDdDm56UbhsAt2EgyWgUPQVQwTEuXhLjG5YryZv7o3yniN4yJMoNg8",
  "key34": "2zpThAQxdpC1Kyjh1agCTekBRrwCf2QGhX96cfTLTmVj7aPnRocbbeggcstpCzeiHccvn6oGy1Te7hv2koNXamnZ",
  "key35": "4dzhcA7mLCxdLLniQVDx2yVxKbu2oiXo8u67zrokuYsVPiBKBSD7sTVsNH5qwwFrRefMWvAgTPuiZcHt3JLhQSsH",
  "key36": "tXHXuCCi95jN2dAYYqWhqLa1Kzd8Cb7RRfrhvECRehLkHwyyARmCsWSbdByvyKUTozH64bvGr45kYMGv9iJn6Qx",
  "key37": "3qDV96R1WrS8kZnhbRAoz41HbmuFpbBvRRmZb8fuAZffvRecJKvFFf3UDhBoatgT6ywusgU2C7YdYt8Z8F5CdwiH"
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
