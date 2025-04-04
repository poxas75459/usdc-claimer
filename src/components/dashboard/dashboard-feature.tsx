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
    "RfxJ4dVqNG8J3aEXRn6RNYGyTuHeE7o9PcUwtwmF1XRsL1zsyHh3HrEU9YqWLdcV1NC1MrBgYDSoKGXLU7u93To"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3gEQDLPMFHq4E3vU8VvG4pzq4sWNixh5ZF5SFyu73kqTWybCUV7ukNmV4KPnehWSrjBu9bdBG2WUsDogiWVEVu",
  "key1": "3KRzzdUZjtpa1B9WCYkYpTJsk1M4zX3xq8Yut3X9SazD5YXGMZUX4HnqVwwrHyhmSR7XzaUdczQs6Jr7zFQxLtK7",
  "key2": "5EMYFTAy8UpemJBY8cgfJ2n9HUkmDqw6GmVEp8hz6FrhNWepNdyttzoV2rp21tCTjZy9Vhc9mL3mN8ZNfJVWZZxy",
  "key3": "3VtqBkvagdsmWPHNJwmNQaGaxDM6kxk1JytYS9Xa2DpKA22ZyzeL3uGcHovawLg4dbcvfBCHYJaU9qiL3Xp3Xwzg",
  "key4": "5jwJBnCURjLuXZV7JUsGWLRmniLT8CbX6aaAqLNEjePTPkFM6SywzxJv8P9KS71D1wGstphZBhq3GNnVJkQ5YnQ3",
  "key5": "35X7mMNXVxgmPqBQjYaZTwGgTGmBDngKtSLwQ9yHb5hjzXTP4ErLtgRqiTMMHR28UiYUh5R14HbzHUAXhpK4JryN",
  "key6": "226MnAwRBzmA3ERBe3xKkPgk9LnypTo8Qa6VwbA1pcszV37BC7cJbkYoYz4iNP5GwHXvTHosjpu7rK7edkV5DNwz",
  "key7": "s9zsqA9xK8fRYwmdGbYs6NpT4exwYtyJguYjVCLypqWJ8zhNtbHHSusDrf9wMB2by8NGfh2WF34Df1iLonR8CaX",
  "key8": "3ujirsq2BikJcbwibzf8gyZbgAQs456RsG4vWHrt3m7cEctKHwjgEuueQSJqNNeFxZEgyyHC5tsYh4Xidg3yUJX2",
  "key9": "3kBXJPngZ7dYKLnwCnUxLaCh4DqDfKdghxZGo7gAq9JvLpTWqzGwYTraprdc2wCphBdZhcBsijVHTDdVtqXk8FWP",
  "key10": "4BF72wrVm8XKYz68AUXTYHUGn3hUasw6KF42Mm7GCDko6XiQpF8g4DrrwL4eogkVT2Z5h4DYYRJemN3nr6vuBWea",
  "key11": "2L9jNVpt4VorrfWKLUTrikhmtzMJvPTusnKtJKokKbeybChbk4M3epS8KhnfzENC8LTzmFHzpfbGJKjhJNRvhWcr",
  "key12": "3LCY25YeUCRvMjNCcoMhYPE71H33VNZwqHTbw9GHQMbDKrNwD7c2ybBSVvDcdD3TEuZMxpGyXgZsZn3gJe3tY8aW",
  "key13": "2MTWEnmaiTxyPaAM1mJnsGEjp9panZebWUpHL9eEEywdsVizeFfkYur7oxv2WyAKUmj5EPR56sryudYbt2AmEVrx",
  "key14": "5ef5U4tNvegMUFuD3ZJSSpbYRAFhQQknbuRqyUiEyCsTXwLR3k9tRWFYA5PxinAm3F3pA6sV1EYQXw2mpRUfPzfJ",
  "key15": "3Z4TMs71bDVpoAAKzgfPxWP1pUMQxXA1134QZijhYk5BbMkbq1zQLLZNePyWNV7JaSi7ZomTHZFHCJpCqJYxFKMM",
  "key16": "5oPQeY3LYVxJ1NBx9xqWbfVPhGathz8HCMgmXRNAMRRcQvUoizWhRoU66npu2v3sjSpnPZ8vkuLfzR3oFJfk5wWW",
  "key17": "5VNFoitUDw9yNgsRQvjoSFnLHY4wx7xsoz7x3Mx5XU8YnFYDuDvcaspytgyMgnnXtTneE7kbkrjE8JD6fHTJNHCb",
  "key18": "1f9mcPgASgpqKyDWhNT1VBQcsoiJDCQyQjDdfwqG53Uim3ajbozSuRMAXs4ryDr7c7JZ5x7ZxrLrEBYo34RejPR",
  "key19": "49cJjaNsr9gvSVHmFGeWwW75HowBd4oA2aMgbGdBBSqGgowrxJ8c4XV5AsS9nyC1fBSW85XJy1kRcgibbpiFwxMT",
  "key20": "3qY4BsLVauX3a5MWvKUtiJ3Lqe9UpLcB7jLTC1MCD8dWDKn8E234Mv3gdNcm21zUEFnAHBg9uiBY5aSFchhYjYJ1",
  "key21": "4JqDBx2P6oKMwB1zHVc12zJz93NgMTrJSUubR6LP8Z3Mqqab6wHAityPHeZ54HJU1NS6t9ogQoM2stxxs8TYTUNf",
  "key22": "3pJfGrX27WjVmeVh7wSQSUibrrEr8soRJ6etYSQQmSzmH8feYUKxyFyun96LSHK26PTsErdcqoeti7xgpA9kUJWS",
  "key23": "NwfCXg7aD2YfB63TUianMCm8b6sKactNya1EEussD6dySvRTTBHmn3rQBndUgQP4mNFRDVK1DDMK4uihLD8KDPS",
  "key24": "5aP3QQJRTzurX5bS7K2zGjZRKSqkhADkai7nwgQHTftBgnxAaaP4qUdHaJmjpVvYiT5G9kRGhRiCYyi4hUkPGWjS",
  "key25": "2CDAefzHynGJMRma2WjC2zHh4TiqA5VDh1Duq7cjdYQ7wE5YyzKo1CMxs4JorBFkR92uchFA6htiLb3Yvhmv7S1t",
  "key26": "5mAEjThh8Bc8w8qjnXDtbXHcsLfRWtvPinzwbm8ptqyxq8Xsqvinv5Nbw2XzSLJTd25Kf6YpePpP1odUKtdFbPWq",
  "key27": "3xQUPXkHjTzqzC9dGtDHnNMqqy6BRTuCztszcwQGk8gc2BBW2764LKARrEUYXJ8DkMmAZHeSsNwUJfubmofJDzMb",
  "key28": "2y7u4D38twU2rxQdKe1MkkK1hF6BCBTYSDqwWQcPa5BmL669ydffVoBzFQHyJMGfsr9xuR6xUynw6y8LfYWauFRt",
  "key29": "5mSLXBB277XKeQh5zrdsA1Hn7b8JSyDPyX6rFybgm3UEGow3SeDv3qhZmEudutBZbvBRAxCMvWcXALE7ERy9fX45",
  "key30": "3cGaa75wL5WPKnkLBx3Wf5Kj5KWRH8FCpZM36zeZE8mEuN6zpDRcEfUqPyN14uGnMDHwQVs6mVD9ZKEzEW26JCG7"
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
