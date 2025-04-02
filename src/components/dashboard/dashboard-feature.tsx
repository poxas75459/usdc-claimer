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
    "w822D8iXcge6c7YcSXctjg6oHR4pgDUGkkZir1uzEtPaqmaEAQ51sAeZyHS7KZ17aBeVFJZerz2kKY3Fh8miGxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWQ14wwREZLzbXErYmWjBMCE534Sf7hnMd3M2RUqtCTvAkpitq1punNT8osoo4FDQAEtMLbvMxAZh8WEjXmkAjo",
  "key1": "ex5bpaq7upxZ7FZxAjGPeU8rnBCJzJk2BgfnGjSFJjEVuD5Psch8NvdowyYh3PoeHUN9PVGbHn7eNuRKqvwqyfn",
  "key2": "FhVPo4wN6zhFEt6UWAt47YGJG5CK6bS74bm1D4Pqzp2TobPBCCxvB4cSkZHjvxqK1a56q3yQ8D7CbRtJATfzzSS",
  "key3": "52a4RNp87KHA8eF9mv3oxM5hwAAayXeFxphSp6roJeCLJbv2FWeRUYnqdTnqwUgEiE5bvGPVMNG6Kq6NfeaJ3YT5",
  "key4": "2BJyZyh6t4gUVqWg3NeJP8FfzKVQ8J3rLqa6gHeWvM4UE54fdHQkqw8qtPDk8sTqZwure8ApnsyuxXbpQt5wR1WW",
  "key5": "3UnpsJGqdxvnrjcGn18TUQnR67jZPUf8JiNTAfQuJUsgMMuMoxtvB6MLYFphUPjXvqZEFPXRbMUuUmjunMxERq43",
  "key6": "5PJ2cyRPDNc76HxsqqFpBqSRyDFn82XeZsW8st1HKCgqhAg1mcFvsuGom7BpB8coffPNApyC4yUbg5qEPJJcg7kT",
  "key7": "3DbtdTjD1VBqvnns5yXgCBHXBFv22oF4br8LSgKpNdKcWxz5wy9Gbr7rmNYZa7bF9egUvmUS2jbGyScskJ9ToBqD",
  "key8": "2VaRH61H8wzUUS1Q77yNVNeCBYKVVL11YVhtQfjn5uKsVFURVLq9vpP69Urpjz3pXe7bdhC6uUziUwpxqRosNYdv",
  "key9": "4VHaYdEFuMq4S5svCStma23cf3zkj5xxPg6dCecWMErvH3j7Ey9LhmFTuaR5ovP38sZc2qzWjSiGaZkMvrLEkCZK",
  "key10": "2RkZ9PfPLgqKFfsx2TpvYBboLcQb3g31wqyRx8wW84i9TL3f1Bm3QZvfGQfQeTYf6ZqrQ41aY36uFzgtChwdRBeT",
  "key11": "3ctHb9EGxc9n56ykA5c2UhfE9EDkcRP7YJe4p9SiphoCA6bx5zryuWoh1mxFLwRXy6aAeMX2WSjsAr2vC3Jnqyb1",
  "key12": "4NUmp6bh2eaiW9n7JRawmnKQ9dvedghqvfku4j6NE9V7cXVj9akJ9J3x6bEundwxLHwKSQEE6Ur3GVdVWPG8S4iM",
  "key13": "YjJMC1yMN1KqocuDvVj5NeBmKePprvopCGQ9WqCHNF8U6PqxQys7bRA8f4zUxEsPiQr7gfzTVB2JNYE5nK8patf",
  "key14": "2bSbi6RTDQpvPfhWv4BLgHq7nNgSxCXfnunosdrFssKBvBYcFju9BUwPUjxQheQsFK4eakPt9MQ61DbGQtb6DWVL",
  "key15": "3n1PwjNe5VB5Jqbbfnr21T4ZkCpR2GbVbhmy7MFMfceo4aCyJA2YzLiDP4DYxg9DeLvKBxnCb1nzK4vz87xbtr3W",
  "key16": "2MZUUtUPEJgkvFYFeY7RRS9K6xPEZu96Z6P4KUhKkdDTa5bdgCUuH8FsqBHsUn3PqmZ1ccGCS5H8PdTAupTEWgLW",
  "key17": "65etbDeEPSz1eJoVFjjFd4t6h9od7p6B7hYca6Pwok3GHhg6y5t5ihmVs9E8KeLubQzg7HadhPVMGqpj48WMTmXS",
  "key18": "2SHS7Xz6sf1YdY3SVKWYSqajnGGJCHky6NG6Mgx3d3CufLyPjfVmfnzbkMopiaKwSZtCAh8vZDNNbCxkwqBjTwXT",
  "key19": "4qznCKCNN7zcYhMLJ3V3zwQwvnKcDJL8RarxLbRcSRgza4XLKohDGcJjQbLd4c4TWxpKzzpZhigE6zJAtDEXHTik",
  "key20": "4SocLdUpagte7qRXEqrgqkWD7H8rE5jgjLezz8hRoykLBV5LnMBFfutv8qHYSXeH3k6Dwkzdb22rdM1Ue8RDiYc3",
  "key21": "53ZwHM8f1xvXt2fguidQBGnXzNX9yijUdTW2vccMDCcVfim4AxcmqPpcKNksu2cnEQhWpG1RjBdo9GQW7F4Hz1ks",
  "key22": "3rmXZyqLdQXWq8aQDGQa51niPrNC896dyL4Q6QaSk8MeFgupevCoEFirEnMddcv4Zk4izN2CufVNGJLJtmnEAAQk",
  "key23": "5MwmaY9qxNwovrHNDyv1GsUvSptsxioY2JWhWb6rdaEaqpkcafB5bEbcK3S5GfzYAhKcx5GaZdYZ4iT2ueEW4rTn",
  "key24": "2cNQKvYbUj8AWYS87nmiGT4Jmh3ftGPJH6XD2raBoVpPV3HusLtbhq7i2dpaFxQpCYquhcnt17wL9LN2df6KJ9PF",
  "key25": "5x32B8kyaWSzHHrUvsoNpznFRTkeLeUrWMhqE52uenJRycGZatvEz3neGVVTDFme6Fj1TvCDLBNMnpZvAKM2yx3H",
  "key26": "3VEWFqy3gXs2R1tNBpymVe7yny8ewDMJzoDRoSQTDpZW3tNmjZNRAzHZ39fYKMrHATDbzRsvv1ViEWpGyNyaocXy",
  "key27": "51wiXHhQGJ4uViN6ZiuTix11at6tL7wxAj2eZ22bvLBNEBRSXWB6drSF5YxLi4AW9VqevsNtKkC2dXbL5EEBJny5",
  "key28": "RCwXeNE4YFUnh726VtpdNWCTMC45tHXCXw1mSXiVxn7RptbWRTJpzvdHxdpZxgbuDSDUc2PHRpnu6bhtmRpvHnD"
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
