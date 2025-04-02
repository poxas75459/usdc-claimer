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
    "5SSmPBpWgcnLjdoStfGbx8w7MUMsHdpcJCpwmTtcrHmu7VWBgb1yBvQEtMaPraywo6atLqJT651Afg9juQcf9WaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ANuJqiYUGigWoWWjLPoQVJYLdbAnyYUfgefsYTm1NWCbsLceytppsYEjUc1i5ZUTt1RMt6BEMUKHTJgpadWiSkD",
  "key1": "4p68qRMrmKt5xaQr7iAvWwcRPqYSY5NHug9d5avmL6T1EU2J72rr5UkqJxjUHraihKcqn3fcpcbef2Hogm1uBQSZ",
  "key2": "4RKb4rRYwkFxZ8NkcT7TBu4VFHBCJVj24Hc2VroCr3NvCsEjYd6TjjAWYoUdzq7w4frWd5QiqrJbx6uuCZ6njWzo",
  "key3": "4xKjPVHrF9gvK7LEKBqN4YCWCpNM9BthTkV23DuFdXn7MA9w2eBqx6nMNMKsFQQ7VPBcQzooCcFi53GFULwFrc1g",
  "key4": "5J7WXLf6WSL9xstwowCfnzPyCsAwKQTtiFeFXYavnPU8ufsgovZXYcGuEnsg2k6Cc8au8qFfzUFxeWWhMi1q4Msu",
  "key5": "4u6WnTomxgeKnY3Da5eDTLtbWKJJKyWHN8qKedwAMQ77figu92msnPcZSdfTBKiLxhv6mqTnTQBQzXhDQoefnQDT",
  "key6": "2ytgS7KxuDDqSvQeTFAp98Ke2YgXxontoggM9QXwgAiXBFHw4tEvUxzDLfz9Xfgrcsb26Gdvdzs56W8EdfPfucnX",
  "key7": "3m38QuLhY818QLdfxBDowBKv64YiWdBUndSxEveFnRgj8r7K7bRsPLWbzjzWx7JmXZaCYYP9nUUyyNJSRmvn6Fcb",
  "key8": "2ft4kH9GtguCBB7CA1rYh8JAdPbJvLd3CTjsdSuKUxf2r6WoffKv6QvkVvPhVcNt8S9MgBuirsXYkphUQn7vkFFy",
  "key9": "2Vf8dHoqLtVdtu1ekogrLMafZHN1RX27u4mh9ENYWzw6nfhD8CcHm4ofq6UPRS295tooAT78oPA6XQPLoeW9mmFv",
  "key10": "nawynYh6i1AQBiRF7Z6WP2841CLCNuSfA59nMQieeN6Nt8v37tY7J2atwACZS7U4Rn2X7c4eJWD7mRL2QR7586i",
  "key11": "5hiY5ufmhLN74yL3mzhUhbCPFzobQDd5QvgJ2m43ezhxUxuPSoWUVWrXwvoKzQNZnKgkcZED6sfk3GnneeUkCt5b",
  "key12": "4ADK4JJpYgtbbsoQJFJiSszHkgJZ5Ywgn3CXK1q46yRKswvS1eS6yqqgre6huJ6H8k8d3SxP5vu2aYD64xnU7rq7",
  "key13": "2jPgCYMswFBeYPeGJifRHH91qBHQWsKgE33xjsummmuWrcEXJobxs33CuAHcZjXDDGnf64U9vCvqgbr9ukoYdaYb",
  "key14": "5LcLPzndjG4mRJ6LMzfbqdY1znxAeppjFm362ujqnP3ttHZvkyzsMybnr62mJ5nPQAzJ555ajSLQKHMFYSdafsd5",
  "key15": "4PERYyh64AAAFEVWfRTLcyA9D2oBQdS8q4rHnUFgBit9EH6svQHFtPQezs32RWstAim987656PgRiKpXs419maCA",
  "key16": "3KhMJNSKTv7UdWyv2YLAKB1cm9eEbDYX3iZ9QRwD2ZcEoEezsk1Mo8HyMXwhmMfaJ5uP4gKu3Cnp49VbqtDME51Q",
  "key17": "3mjXSAxGcc1bWpK3TAHpBHRyRS6k6QQ8R6RTxEdK1hUoX5zoT5EbUXgX4svjYsuiZVvAysMwh2msmBqKQMusmSgV",
  "key18": "4Fpa27sM7AmMEviyFFWgStswYcPAUN6HTR17CXv92AwrYfb6t8mR13x8Qinh6RzwDLi3AeWEzhrrdttjjKon4XvM",
  "key19": "28rWbBDA5UDuy6a5Nr2d6WJiYhgXLUocqN8Yqxo6tnwdKcW82cDe2xiJT3UQs8Zx56nG1WRkG5QpMLwGkcmzhhBz",
  "key20": "XrW8B8ofHNCu8UwENjocFzaybrNX44r58R2dDg5V8W1RRVupVEbLVGaMFZDDrR8MvmKWBfmAx1gUsRC5e4J24hB",
  "key21": "3EL7mMD1cLPUs7o75RQuFd8TM72JsaVog6zofi7xefhxzCyo6tc2rHfPgu3DPifKnrsZ6vbsCmt6LTdtC6A9ZMWX",
  "key22": "WVD625sZHkkGEZRMr8R4BHjaDkTyhQ5ebM7pgFMBXHo9K5rgVjp2xX71vD3eabdH2tbTedsQ3cZtWnCwU8rhyPh",
  "key23": "L27CEHjU9XcJRAiLRz4BQbgi3T8bB4aiH3XSKLaxtBzFZie9cqZCnHFYFBbBBZgekApepqTJ2Fdns8kbsFF93Sk",
  "key24": "2atdw7XKzdWX1NdnrtZrk2UwURkSM3mUbpdFxGRS9ZXUGJ3jM6rXKYyFmVp72UZ89YsHrv8ASZbNAsLssj9MbsXN",
  "key25": "jiQ9tYKkMD8HZtJeJnk6Sg7Y6DTzgRF2R8bq2fCkkpNpQQLroEMT9UKuYrokJmgmuhoWhERvVPxc6BP5xs2TwzP",
  "key26": "5esBc9u2Hh2qReAKKU2JuKZJo531yX3LRAv7P5fC75xtvHAUF3M9PYDHxts7vCBwpJCsTYYjDmwQp9gQVtG41DoR",
  "key27": "3h5s39RBbxFWTrZUj62uQUs5iUSvV3MDPQ5pQEaNC2GCySMa8Ufgc4vY4PkNyD5dWteNBDo8j9PABC7HjdSf17Nx",
  "key28": "8cyS3qn3eqApkCPBm7h2oHSu5kTimiZqZwLnraFbNSfdqFiN537nS9BQvGxM4yoRxYCZKk7gpNmctKGohFtGAeX",
  "key29": "bbh6hnRfg45jNhoCVFTg1C4GHssiSqVmMhsqZD9s3ggWoCBeMxSUtup8jwSHXhRrw38NdStztSQbx3T1xXSUxfU",
  "key30": "24ygMJKyNhvTP8bJRNpWAsUnXHY4PQgftHWVuSP9n6PbRwirxw7mx8KPLMH8Pg71gJoazv4u3JVqT8ez2xKdruPJ",
  "key31": "5g4zZdDU1pZD7SWYMaCDZFc3REWr16EaKz7yaydY5hJ4HCTiT47wH1SkRFqggBYFJDgP9h49MF148ih4brTxb5iW"
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
