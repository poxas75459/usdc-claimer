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
    "4GJqLm5Q3Cgr7d91F823fqyNaDKejxPKpf7TQetfordCKTRVUfuMe3Z9MLXipRAgD7NKquQzEdCd1NiXEmGh541V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZUjGtEVDi1Hh7UvDH6289gyk8iX988ZTJ7DGdCr3vsSqoBXoyzEemaFac8DGqkrUuxQZ1E4sTTQP4v1TGM2ZR3",
  "key1": "3ZHb9PM2ZjU951HmRd5iWkA38heVYnbCVyzqhZUfqZE9zuauWQoxhWcTFXiZpgcxwE5HjPgssA7gytGQX4GyncDr",
  "key2": "3W9dGKARGsxxCJtNgiisaaLWZCqvpezbo8sEWttEJgEsQeqow78KAJjxxDYkFRMCWQmzrorVzRtbjbWf4TWV14Lg",
  "key3": "3YAG3XXJbd58mnzzACTUr7SW3q2VudcLaUYpiH3nxwujXbangvBsSNMZkv86r3ALAi8pbRbw7STM5mkdcCvBQd9e",
  "key4": "5gnYmQK9RGJgRCRuAxfy24rNVrrybFRErjNwy5S9QJH2nuwCsQWkVc8dgjBXtKm1p712pptwd3toFc7Aun5Z9Tdz",
  "key5": "36aQXfcxbfrytk3v7wQ55LCyTqKdTLp15t5ayKwEhRb2SkqPfXJ4cyGBK5jhGvybhu8AKqzLuu1KjyvAYHzBL7YM",
  "key6": "66ay1VKn9yQWjfJ7wRBHhBefh7YGgJyVcudKeangyPfy2jwaE5h86BxfHSauU7Gm45rhRZAT7NyiuocqiE5tKetS",
  "key7": "5w24XjTPMDRg5SXJN6xwamjxPXaWQLcsERC8y6qjjzrCRmT6vNySxH5stGRcaXnhdCgmYH7AmYa3pwQaVuuTMBgw",
  "key8": "n4iUXz7kuCYJ74snFVDPS2LhEPzKgVzM3bix8jYQ16ca56Sg2tMbAU5FaBDqBdrWjtqc7XhtV7XYazobteVMXsv",
  "key9": "4w1oPosTUJchyB8Qjtag5YpziaJRnLZVpJL58KA3KZKkWwfzeQSkiHWDc8Buwigphtxc1bE6CJLecTTo1gUUoDUV",
  "key10": "2C7g1DM99Y9tx5PtjJ2sFEKriim6LG35rk2CSiJMQ3ug2EJ1ZQPAnvuYtuY3ubNYvqyDGVJpd5FyRLh5XpJAXAvt",
  "key11": "5FVhLf3Rw9zdQFZDgi3qBpRRErhRsD7rjpE3jGMoASxDv7ZPUeVmmVbjYm36UMCjH9Pk8friUaCUtDcVmBEXPgJW",
  "key12": "2FtvdC2Z28g29G9mxS1gLN29e3XKPNKHZ4JmNo6jQN2J9kyqt1wAbcQNQVJwvCoiXSjJ7DfGJ5SPshkgJMk5K28U",
  "key13": "5GxYxeurfRZTA1zuwwfYPF5zBfFE76qymeY2QLJ6Wro7bNmG6DdV3sUddFwXffCNVnFntY3QBCedMFDG9JsAmHV7",
  "key14": "2ypg4qXuDeaCS5mf1oeKAbkF7PMxD5SURHCPLa3z1bLVsmEfmYdzLs7EFfSxNAMJ46N54NFSzwjQoNngrFKTNxCh",
  "key15": "27XGTd5aU1mFWSvmdHBNVNusCusKcoTPmSmPthNnUQ9TeWeVsYKbcMQFtcFcYrM1WMTzyw6cyYD5mCjwiwFd1VuY",
  "key16": "5WHibHNh8FwRKF8DmNijQUn4ow8MSYMhEFsWWGAZ7uY2XE6RmG6rqy7cFiw9XEHCQ1qovYxnqWCLqS1THMUbvLvd",
  "key17": "BVBvudpEFtwBiR6YPWRATZC1m9g2QWbETnWgMzkszGGQbAdMZ5bPB7pcM8nKJpvKCZL2vQPuSko7HC5mz2oRn4d",
  "key18": "2bUznP1JKNr2iMzybR4t9g5gL6tQKotnJmXtcFdaRZisRkArLMsZXUM8LdmtsPowfkTcDxCMduj3Zzn5nN74RJMq",
  "key19": "4suUbfNyW5wVvZZwXXRq47aaopsriYDa9X25A28Lc9DEuZyRikNE3ViWVekJBhSoD8Qe21pRLkUBAJErJhyqB56A",
  "key20": "2EkVJnVRfFKDT34ypxd39uySx6svyfqFHytcCPPMhPt28mh7RsYcNSLGy5qfjrQ9YvvMVqKcYMTetAbrr15tZCah",
  "key21": "4S7jcycuCk6vMa25X33QnAHJpDUzr3jnUonzLLMYkQuX3eGQehLnQE2Qw7HRbd9CqFKWQupMbudfUyizDRh1Cvpa",
  "key22": "4WS9wdD51gbwKQUdgJM1Z23AmPCRiEcuCx8NAsnrUhaYjWcTnb1Kvbpua5B29CTRThwfqSbBxc9ueGwdTLwnvirk",
  "key23": "4ReWVB2pVVKoCXwwsnWmcMcjFCkHjFG7hxN2msViMvZcXpWGbY3X8dCaHCRD2Wpv73ujNzku5yUwMnZPzoeqwF3G",
  "key24": "5fXE6fYWei7Fjyz3PAy2QE8P2G172Riz4MPZPmQXa1Gh5NLuXNQgi8m9DFihcfRxNZik7sVwgHogSYWUM88u85TK",
  "key25": "tB9S9eSTZW77UYDoZLHNupMiRSxGpuy84MV64B9xkRpqbsaonfFcNo7LUyEBffpp1Q2TyxQSbrYoFGQNj1LqDZp",
  "key26": "4zG85uJ1FvZovMUor8iZqfZXnLfneFQ9bwSXsDVNu5bPa8WxEhwVC61vp5BQsd9tciYxBeAh7Z6oNjHWEzDTQ9gP",
  "key27": "5D4hrw2toDYURB3Wp42TWYHStMmCWvhLJpiZPN95UqqfDbmbMBsj3xNG9tTryag25ypKLnaREzUyfLJJUrPtKQbe"
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
