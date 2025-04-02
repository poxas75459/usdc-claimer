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
    "3u81THnCkCVHFGcYNKNRob6TXcfk6tEsoU6edYYQViXv417TevWqmKSHvDyfHLTf8yaPJ44RxcLvNuKgFK3jt7hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467zJ8nAYpgT3SZEvFZqzUkMkVo4xySPtEAJJ39e1TZZtv4cBJ9qFurXH9W3T6yJgA9rjD7mnXfd7dTAcSGXZaBN",
  "key1": "5XbEpEA4oRzPSKWrRmwjQcBui1RnRrw9gbSdHBt5cd7FeKKpJKsNxKx6mKitrBncqeQN8SFNWZm9cYtERXxmHuDd",
  "key2": "cDRfZ8NcEdj4Y3F1cmD1Fc2m2RrZJS7nQhJkFcVZ7AymS8qRtQbmmYzmP3jnXX5WgXGYZRi6zJcTxuWfNivRsRA",
  "key3": "24NMqq3VcbU2p3s5xGqwFp9rsCCPZu9QjTAwiVyYwvwUvy4fyRqtwDjSjehgkSQKZT8ts4huwphmT1MwpZqky8Vy",
  "key4": "4Teiw1cYRq4UerGZtFh84LCFAE7qCfTnctDAs32WgaX3tj7jBkNfFh1d9WewhFZfM3p7tXLpLnP2SrZjcz9mY1KD",
  "key5": "43cz6QcH3k1pa7sVspiqDsLAATYxELCKAabzdcqTph7waXoqTsK1qksRof5X45aioq3naRy52gpVp5eQMGLBqSvt",
  "key6": "3pT1LWufHH1zU49FynXpsipipCP5ZcQjueiL7KbCTHXwfn7qocLxqQhAf9dUsnHNesk4VCDBMVYYj3wBkwBy7BDw",
  "key7": "zbRdpQzSYuLTtewhkhmrieBF3rYGX299wBCG7BkFH9jmQENTJdeYvLAGKoy5usQJrgrzosfL4ey7tyPvyXpYSUm",
  "key8": "5gBgVHq2n969NkY6XupJnSYnZugu8U2wyv8Y4UcrLQw5guUr4KkbuMwuWSTqqhUg7W15X4BSPg54ELyL5iHPSJy2",
  "key9": "5fmR8ReTnyz4xdb6hZcMBZRVgT4jdJF8eoHvJsWvv1QHfMmZFnk85DzcNtqCP7V9uv8ioKphUiB1173gHuVhVox5",
  "key10": "tP2TCJbt4JjmNh88myNCoJwCdg5YfrVHPbdX19TzPfeZBUp3HYHfB8RZiTJ2PEsgzgsoxCXdWeR3ARbd7mTJXiN",
  "key11": "2ceYGPkf2R5ncLzMuCK533mX19xn9UhKE2yzZzS1JCwLwBATfbP342toNFyoaqzhuix6ZzQ1Mmq7PqKm2jZ4ScVX",
  "key12": "52dAa1ykQWnZBdXfquBxNoj2W7rGRg8LAQXAgKou6AtUMZu4sSto7mpeJSFzfCJ8iBTK9WSbkS6KqZtcXpRYYFF7",
  "key13": "5dku7HHTcp7uRv8SizVSmPof7dScNPTzZLfxHQsC9RneesjGEz4r2g1xbgBBw5RDBp47tRNpbzY3PUsyKtEXq2wb",
  "key14": "2nJeThPemmSTX7xesmV4HwjrBhBwaQ6fH4QgUzeSSzvEr11XBTVZVwTPq1iWXbWLm3cyRhAAkhA8cNs2rSWkRWH6",
  "key15": "Jh8MBTyHqVF6xH5aSmLSWnPu1pqTg3AGD4asizFgxVjtNeY43w9WMEj3tXsn9vxpY4hcWbnpog9qPjLm86sXxE8",
  "key16": "5M6jTovzD9RMUj7KQsoB9vyAmgjxnndY3qpwTZFUmUFMWA9ow4D84TZtq49ADpxhrgnVzAphkd4cLEsWkfJk7fC5",
  "key17": "3ZSPLeUnFvZTbaLYAVrbeJHMbpwzzQnwY8dEMhxZTR8VeE1UNwQ1Fn3D9MUgpfAABJ4xNGXHFJBGWRrWDmCdjx66",
  "key18": "3kCCYe13sHKvGdTL2e6Z4etAiv2rWKowCxMg95RZGEGHMPYbxXXcKNddzBvLaen8yt4YV719BUwsXotnNsSj7oeh",
  "key19": "AYRjxmtB2xk14nCoqzXGdrjA9djDoUx4Pa4HPTnKhV48Qmn8H4VwQZtBVQ8xqCLWhNerzqtzx4FCcbZSXCMA6MJ",
  "key20": "5XmDr2o74xfgA9guWe62pDQs1pC6qo3XePGHXxJ91jHYP3ijBL4C9XCGrSPVRqsKiuYFtyCFCffqNjvLYwwsfKkD",
  "key21": "Rn9RAChHj8vcwQNozpBzNRzzj4RepEBKMpxhYD712cS1rhA6rF34a3WvWh5azM9xkZjovkEjzMan4aBNSbWXANS",
  "key22": "46bu7eGwxr5ycbiQ7HvcBSy8iotUCYmFJKGwqkfbposxjVZMwz1BKsVweNwLSCSVogAUXxnTzdSsEda4ccV7tvht",
  "key23": "2Lv2wi3TZvyfcMC5y6WWXw97xS3iqft9od5gEhj5KxCXmTfqVKysvY4GoMf2KxuimkZ7VLVQ6rgtZSJqC68bCuab",
  "key24": "NTziZ6xMNW9EnZpsu1Ti2JqWgsrK7vGC1K6pKSYeYFYGdZMUb7egraE5gzzt98t668yRPdVPuVvFGHGRcf3n6c3"
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
