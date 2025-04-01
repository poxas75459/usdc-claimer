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
    "5PLLgkHmKr8BC6s7v1RzzKyBbjrqs3JdeTQkXgVUzQqwQHrL4hV9AVQpHcZJcskCjyKY9upQ95qyJMEUb8hhC1W1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFoKrK38S37jwUoL57E3GapYsBzmjsMKEM6juKjiMxDXJKhX9vAz3F3W97HML2XNiCV5EYxiJLS9SJ8FmuMGtuA",
  "key1": "5Dpaoc2g4rkNWhK9JAFChpte9P8PcC3FNfTrjpphdMAHVJkxBBDtCbE4jFfA4bBLoTz37kg67oxz2pCXh4A6wvN6",
  "key2": "5kS2zH8vHJtGXqQqbm2seQNnP53z2XNYsE2xdpC4z84RhXoyF4ZoRz515YJaGfM8hcZfUZ8tSir4xxMzy9MC6JZu",
  "key3": "3QequgUP5VjU5GtCVc7X1mcBCEqH9jb4mhfehb8f1GCeUuP3ZReMXn7pPq4jT84CqhdoBUzkGiqQUgCWpKyYy6VL",
  "key4": "52Fx7sj6s7Dm5yCDBu2NuNBFxWwXFAtaXsmY4pnqMBDxqJrnRJt7Ux4PDMnEGaQLr8rpWg5YxWzPc5317qASUGw6",
  "key5": "46WEP9Yjgj3cRMRqKpjPcxdYDYvDQcJ9mgFsWtEuDJSUsHF5Jo2aA8pVafkdFLH3qmbsBKqxtQCWRnKv9rZaopNr",
  "key6": "5MSZf8cYaATToP2krqrz7NbfbA2YHHLk3gnYaHxyndzji2dcf9jVhPcucbZMTJjbHGGYXTGhRaPmFCJ1X4EhVdYY",
  "key7": "52Yok5a43Fue173zmECB4eeHXm5P9rdfuADqaEnLugJy96AQyzuQWMCqy4sGTvTREdjFvaz4dHJn5Kqrh9fVLurT",
  "key8": "26VwnZycq683heTm6ecCrEbvumwD5GApCtqgs1k95RudP5xBTTcsxX3tEmcZKxUs55H51ZSNySHEeiWDh2XDGFod",
  "key9": "4EDxW7PpfiWA9mjKtMgMpkGtQvXwdauenjoXDWBqtSLe16CdLyJbpBP8JNtdxSkpZ8g2CX33KQ542e1ZQSgfjsBK",
  "key10": "5biALy9SHEzfRKJBcT3ysKaN2XWSBVqiWLRa6Ecjw77yUKj6F3V6VB82kyZbShUh1kmXapiz6M95p9kyAyxgVCnF",
  "key11": "3zFoKuy6BeeSJbh78faT9YZ7CW637qJifyhv4MyumD4BE5jvVjhrSMkrcyaJq67iyFJJF4zPDq3rvhvNaPiSbjLN",
  "key12": "5AzLRqNZKhD9oJ4TKDxMr1cQhYRvDru5nU5M4qatsfHRwnWWYpgPKGCcq2REtdMckmsebw2bknazAiGHfaf3m8mj",
  "key13": "53yU8wPnR22S4SfWnM7SnARvRUUgD8WRPSa72qHoAxB3pyUHT1YMAEzDijBp5nzKi5sADXkHj84R532X8qnh9kE4",
  "key14": "3KSAsZcZpne6Jhce3Zh94gGsSQjPsvpx95i2pChD29BSxsMQ9uty8Kk6iZtXDqPkq1w5iQpEd9NZA7wRc4TXP7Mw",
  "key15": "2oXWXZUkgPSZGobWZJq4PXY57KBSG18hTp9k7k6Te3t9bMLYVT29759N8tjEqsBv8TjGVLB19o2vwmgtyz8tQNJy",
  "key16": "4STGcP7f5HG2YtahM4CTmmX9Nxp1KTszrGxkLkccZAZ7y9QvvHKyvdaWBCufn8YDLnGek1DDHZGMy4HuEdPkbv5w",
  "key17": "88AnZkvzsQEp2zVHrYENkcRLUpWnTqV4WuFAcXk1W7PigYSRgSwF39jM6JeyTaybkgwR6vbFcq4ZpFJXXBxDxud",
  "key18": "5hfgYUWaWUF4t3ozXwD6Xrfv5ZijPjMJaUiXS5nty1VzNTVVGB7Dcnn6Rp3BCoHsNLhjXPqbLVpg5TptZsLY7Fit",
  "key19": "xXWsjTa3wFX3iKZ5HZUSvfZzrnycothCRKfRGqMX7qjdqBttKBYe2igbuVGCD75YTb6rnYVvSMQCWrQCff53dAZ",
  "key20": "2MKVoYBMZmXiiKb2XGnpb7rx9NXTqC281hzSxc44zks4q8dBsRfXj7oY9LAL61kJhVuwW7kAZ3ib6Zq1MSgYrBwF",
  "key21": "4xH6mjvmQ54pE7KRijQSu7id4sAoML9hfRhHWKtHwCdJhp4X3bA1cmWsBbKQxPdRH3X44SLqVDQnC63kA4vFGgdo",
  "key22": "3E2wvpCsTwRtsExv9fw5843U9zEds2UTLACfzJik4iHtY4V3GsTCBCs8qjhYTcHqzJryZg82vhdbRbhA1tpz9DHP",
  "key23": "22vHAEDFFj1Ht7GVV5SoesL9EH444GeUcMGwviJVnkmQE6WzBN6Bze5E2PhZDWcPLURdsgp87q5pBQg3abk82znJ",
  "key24": "Eo52hmZSQYG1qXxGd6a4vK3v9Jzfki61FuTDQMqnRqrTtoocFSreMeRQTimoKVAxuVo2ExdriPBGhYj4HhPXKt8",
  "key25": "xaNN72BhUrSHvov1py7HEiDggsCTc5TmTQJzibq4cZb1dx7rfdbZVfJ1fTsU4GHny4M49gdVmD2fqfU81wxeSMa",
  "key26": "s5jiLYQ8LK1KJJo6dCP28UMDsRsMXpjbmXowjcBqDsCopoaGKxBGctmXSW9ewArnE25m15uBkzfzo37w96KViwP",
  "key27": "du59kfATukhd3RmYQMinmugRiVrVsVdL5JWAsvsvSEbFxuE93wLmE8Fd2kUo4a3UGaCd9rRZTnhSkmpBTPWBz7a",
  "key28": "4uoC2b3fSFkze4HXNbsMYW7G88XrNe7Y5wp9wpdSw6jP4oS4RRuBfLm2D9DWEys25SHHYXo4isugygmRhjrQiPgt",
  "key29": "2UGkhGsVuAj16riub5yDML1tsqkfgn2cyDi5D1zBoWqpag6yVtVNrDXUwT6iwqEdyTfai4RJHzgXcPBemFm41fi5"
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
