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
    "4iQdMn3euuZ4rtxATs7FPn8bzkUWEHsjf6EeprHzjrKX7imRUgpkDqxZDW3ukFcKEG5LS2yaFC7yffFUY7BQasvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdM5MQScFWbXtRaeugzj4SkgUiQxWxcnF3zF6Pb8q57wmFwsbCGAKypRCn4nQTYEyijEG6GJW9UzTxe4fduo84u",
  "key1": "6zh57X9TY3Xz1Eoo6KdkwNzzEx7qB8v84NHY2heqkEZLeFetYtyK33EwT8yHjWA4q69YsrGfMr668zgJUFvk7BL",
  "key2": "2ZUCtNmuxsout46h1bcFjjTX6KKFv4kfWbytTvHUWpzHnkoSZpWbfXdA5ECmu4gKYtZcZH7UJq7DNdA1nyYBzsUe",
  "key3": "2QdKWUsMgUb7xs8p1skbsxqHuc82vJNB2rPkxQuXQjnVUaCkdZy6nyyqzPq3E743gQoaQuXHG21Z18LqJzP2nYd9",
  "key4": "6vHisGmbRMQGVL9vobU1iQnJ3y2pcXAK2Ta6Qv4UfLwqSAAGwZQEWkDLiJD8bPCcqdzQi5LfMGbicdh1Xnpokxm",
  "key5": "3bjj2NURhNCQnQ2LAv3Vggo6buLpvg4wnaA7wbAgdJP34ay1U2Nmexo4RvQk7YTuWWZjDzZEYCa81mUwSS5NkdXi",
  "key6": "2mxAMmbCyGjJfXeUZLWUv9byfBpCBU39oYvp5ZMNWfVPs2D7AWGu2YR1379gh7SUTm2V5618HCcDqoQEVG8Pbm6E",
  "key7": "63s1Ua89YBWJZ4kgVhAb3auKiLTUgqmJxN6UjRace6YY7AeLPcSq7mawxeYdFeGeWRMCxPi7DLDGdTzbHhqDEVDJ",
  "key8": "3PsK3SdEgXmK49f8TvtcVsZs7PdLvgHBYnV679LRw2bFfnB7HquFmfWdyvL7bTSqbJ21UkUq6WMCG9EJXUrfm5oq",
  "key9": "2HpNYc7CghqkLCxCU9WRszLhq4cCwJoAPPNTKTSPKUrr3F6SbNua4djkJc5tDkfJBtWVMWtXZMaC71p28mGciwPH",
  "key10": "4FaWYbJFbNoAwgDHrWckczQANxw1RKJubT8nkHErKqPdAPvMhkVgCWikgMNtXQaA4miaJJhzkLzotRTFwfoBP6ws",
  "key11": "3yBdcjHZdiPPR9cmphj5Gi9WZJqRHYVvsv7Tec3f95vaxZpyw2C4Wam7EwthrTWdsgGTjktdQEtNmeVteqYLoPQh",
  "key12": "4E5bjESyupiz7KrU8TTHpv1yvUZKBefkPXbcHK9q4yPbdW4d4TXr99DnM8sL12yS7Lg2qex8mdCk8w4LnYqZtkhS",
  "key13": "3EjQfHdShaRC45KZSj1EdN7gyuoWieBGasHgmfcjQYbBB7k9fuzyFyvGm8YK6prAzXM3wKoyc3fWaj4Td9E25hpn",
  "key14": "3kiZfZTTV8CtLZY2TRMiQQuaVawva3zAYZpEGFtiRVJrTxd2YUsmoMNyRAvEP2B3hvi8Zc7n6uHeKB9FedRjmJC5",
  "key15": "3QwR4CpRBYL8jNMt2wchMZuPHX1TL7o2bNDnNh9YMh5SoTv86CDhzsfP6MdGy5KMabeX6NuUj8V1fuibufmMxxpT",
  "key16": "2ZgiKZiZFT25U8rKYp15Ry4r1t7Hnu6L5jRxGDtxXwuNAbmnxZEgfZRbM3jZVniLsUAeVsmR2rQYgNQZjskx9MUQ",
  "key17": "kkyExb7cFmxKUctgL9XLuZonQx9n1w8pds9w9LZqUtGN92gcE8jS5EJTVEa4ZANLzon1DyFfXQMXyYtkwj2DFzV",
  "key18": "5ysNEY5LFnTcWKjtPd4KUbFcpVwwSVcG9yb8fRtdFmSXusQwnKUtNV9Ab1Ra4RAnLyHhVkYG2GbPb62jtREMgsyC",
  "key19": "EVGi3snAuDgs3Q8CznHXAicjV7uRc78ws6ZBkh36m8aGe7q1PQXNCs47y1P4wYXYqXWUEsh4B4UEYrBrofsMuL5",
  "key20": "3xUZHCGzE1NsczFNgsx6kCNvkKBWzCavko9MThrMv6YmL6PMktTGcsUGouYDWVhhnrcr9pd3DcqiXdrKeQ6ezMgP",
  "key21": "jiAUv47VPxBi2ZXu6L33o4sgKecdNSTwniFBgyGBKBonnGyKqgCz9iqHcowf73iSDQGLj2D2zmDTyfcoEjMV47K",
  "key22": "3a9bmrSQBvdiNXgCqwezgP77ZvHptGcvi5k6TYpWonAC6oPgwmFBWb8z4R58n9Q6JVtBmFf5noEA5fZnhGDsXsqv",
  "key23": "3BGPZLuLktypBcm79pK4RY2zo6ZrkfsvHWtkrf7jJMQdAA2ZkYgCEJnGZub9kJDvL944xnngrYUGekQ8V3yJj6my",
  "key24": "2zw4LpZgmc1YBn4PfX49K9iBSEZT4mPYYGkn6avgbKpqLG9CRBKLXGwKV9sZji1kvk8iSB5N3R7apG85tDhsiNJf"
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
