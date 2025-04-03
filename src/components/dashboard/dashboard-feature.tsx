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
    "4SsrNe4sd7EP9ZxFkvjPrwropKyZDx2XNx2k9HAR3F7bhCGXhCWwn6fSdLcg4CcowTEtZUHSWkm8b5uQ57yHgXoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srDEvrupRjUy8uUi3fdCT4pAkhJ1VNTyiuPSZNHNj1gjpcMXWNfFMn52cwaKsAAuBZTP7h3TP53JpbnBr1tcpgM",
  "key1": "3DfE4a8Fnf8WwvRmn5mJoMEp6ucz2S6yfjtwH8XBt8RYaGEtvmyCB2KQ3SVTURoiPCgEA7yZ4Vby1hwwfuZ9po4C",
  "key2": "5kvMebvjQgP7oFuGkoxEpUkKAMJ7xwt5RP1GXryDJN1U2pXa5U6gzY3u3J9E8mVouGh41YEknHyuR1aBSuNox6id",
  "key3": "2QFGWdPmFNDjz3k1yemXaPsih2Lt9kAkJ7tHDzbE6koAedfxN9afvyiWmebrHbKAiQeJwsgWNWkLJ5BNZmbfQKHy",
  "key4": "stYkC4oQQMDoYtYfU7grLvK39bsTFnHBba8KVfpyJgbQvXUaKfFAAdmPnDb1Zk6btDSDX95V7xmy21oDxz8qSjd",
  "key5": "2wGkPxwT7pwD79BKYzCcGE7JzFEDLoJQFbUDsndN67vez29hqfiPMLm6GLYb5atZZRRZqFJKPfaD5HTToJTC4h3P",
  "key6": "2Wzszz2tLq9YyCwbXpp9XwbGMVWDPrQ7Du9MgdPFcVJbvxovvdTchGeJauQfZmKqUS7LZfU155RUayfpaEyo9VjE",
  "key7": "2LXoEes2NZntpirwtH6tBDqxAHd4kJqg8J4d4iJBuNi5jmfmgVKfEBTRsWBd2gwFS4UptgWdjYA9govapFGRrNnY",
  "key8": "3gcgEvXFF2wXoMwaiscS8WTfUX4nZmdzQT3h6hj24V5fWzm5yk7dncaR6NnJzNJ18UqEcGStJ8a3R6n28nmwsQPi",
  "key9": "22iJyezjRyUWAQrrKX36LuH6JgdqVgq96755Kek78nCyapHk48s5p9hKKRNyCCAP9vANr8vQZDtQyyDPCDfvuoAy",
  "key10": "3Qp7A47kwxxKYUu4jjEy76BUzsL5yueKhVJrZxj1gTuYg4dfcZmBpsivfvVwjFaK5Ygym3mqnaDxa3xch5pJfbNR",
  "key11": "4wuv9gQUPVqDtN75pKeFAMniJ8C5jDdu81b7N6GsEar5ua5TgyBn22KzKt8i6VdqGdzqJ4U5mr8kupJgH1KPEHvF",
  "key12": "5YeuyKJtqzTfQkZvGr3K5xysw5KQQC7wstJWhfGnevQmVwoWqkdJqPqZ1vzPV4aBaZSShBLmiTTJT5cdoLDXbRd7",
  "key13": "dcw7JqUtpAKcrK8AW98iCNJX7RMuCg6jYqdtrqU1s67ZMURi2Cwv6csNJYmswrpEeshNJdjeNfiBh8U1JAX4rAg",
  "key14": "3hrpLrgzkevGy4zhXKDTzL5ephhxhPa5vYwVmnEjQ4fFcs1qFW8vvJtfEnu48Mp4Qzr1duLJjHpLGyBxfN98bpyE",
  "key15": "5KSfzhWUhquaYc6QkLQrtQnnZBPbmKExRqCgRuTb12xbYFR2ZYyumjaqjiJMqA6cquRaPXiWqykMy7hr6YksJ2aq",
  "key16": "23tWQE9fcK3nuhVP3tueNraK1JsG7UysgJkhVavAJaNNcmT8ix2qtUVSV7zdT99fPpBZKBY34u6RnuTXbvBgn9Us",
  "key17": "5Yt3kh1Lp4PNfL8cEwaWTU5Hs3UjqZzPFShCoRU8r7dZLH7QCicH5U2w4pNGkFNVjH3j96b9pHgUPxbgxNsiPUUK",
  "key18": "2JZ3QYr2LQmU9tPDDz2RbqujxptJtamDh4Md4WXZGmgw3Px6E8oQHsL6WRppKHasEGeSqLdpnZpaJVwsrjzjVsHE",
  "key19": "59mWC6ocBfj4mpe9ikMivWQXtsk64dPnMpUrTES4rTZdg4bhAEuMfmD8yNQhGpxEVYyUvT3uDw2GbN26xj3Hn7Ue",
  "key20": "3au2YP3qPa8U3nKqS2CQqYMMUHLhJwexwwYfwABpfsGiwrtxE1LbDJKJFpUNCneUKRAqE7RhJvyuU3B9KLo7eZs1",
  "key21": "2dGhGbthg2jg39AdPyPvQ77hSVcAtDwXChn8rvna4374HyYt9fgLe3Rv1s2DoX8inSiuYpQRZENREmag4muf86jq",
  "key22": "2RowRxRJiuys3z6fmgZPbYEPGjWPXU7mo556wJgjSHzLLtfBDu23u64QkEyWiRJNXupzBg9uT6LbsrvsbzWDecuz",
  "key23": "JfXdPqKTQtYnhFBD2kBCtcvLmTBoL5XYVZLgPyfuxSqNq977cbB1WCf1477TULqpDrFseBnYq1jLnL1BGFWzCHX",
  "key24": "3dAVERMKKK7KNoXQJRzZgtUByuSCZs2ez8Fppfr61oJL1jJtvaJLf3oh3VLbkp5AFqcCJnnJkd4ciACaS3EsBGS6",
  "key25": "3GYxqA7b4qY1ikNj52ttHTSLH8bYbiCCGH5cms24KtT1pVhLpywi3A2b7v31nppNXyR3HeqDy7CVYvg67kYCPuLM",
  "key26": "Jikhj9R2KxGvbDhPLcenfp4X6CtphLaxaTdgwxsn63TUZwad5cxwSoyUaGbh8yytSvGqukFFgJDmvx8fswvXsgP",
  "key27": "5q4W6qaq76cWnWv3Tpx4kKnH4dYGnEEpX7b7crhGRvRNbyh4yAxC5FtrMMJM1XGGgafFo5vygwgHVmKdBD2xQg4b",
  "key28": "4X7USHXUQQyuXksXZcS96QzMC4xC9YDWLhpyVGRz7TwzSRMQKTtDXVAYTBgfT7Hb23ehtPkgtH4BoDydhCFgrCud",
  "key29": "46h5qCnR1ansm3hFdJ8Z3GMQhkPC9yvf3s9LeAqhuxDWHUTxDbh9iuo2S9HU2zsq1kMPA2r1Rwuft834neUCYic6"
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
