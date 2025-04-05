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
    "5yx2TmeBeNMqCAQJouooyyxwptGaEoWCwHNLEJP7Nxe8jFcA9vMLFT1aaW3MPJDtKqTQnDk4dmeKWLg94DFtNmq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fGR99BXgNcKY6TPRZhuL623PnTbNU5iLB7U4krsJHR9QqgwKp5o55QSWVEJ5tZFXK4GbSHMDrNZYUG2NFxtjtvy",
  "key1": "4uVsKU6wrN7NmpGEyECapczFSKACs952bmaw4rGPiaCws2yyCuGyfhTJGTMruAfivc1aiAD1hdLgzZ8bTgT7m5o9",
  "key2": "5M4Yr4vjyw1cEohgnX7dnvWZKzDd6j7DfVk2ayQ7zTKp6cdF2qndeLBTRbRm37TfHJFvbzRUjt6g5mZEnQkHNV4t",
  "key3": "5DrSnMdDeQr2dTjUUSx24Cc2KZ1EJatkvgaFDYDYUMfUs7mbfLybF1rHyEjr5KmRshZE72PQFbiEXXUd467GUSei",
  "key4": "5TSHjUusbFaSthaaznfPv82oQuKKSKiXDGXsqHCFoXA93rttYgfxKizKWdkCw49SjVzTNiWZ6xvbqqYgWW3evcfV",
  "key5": "3gRKz4ZCbXqNFe5aRKaKMNaLfro1NhtU6eKCc9uzmC2UjBkK1r8H2QLzweP8TJKribaCZdCnU3c9wLt7zrXqUKn",
  "key6": "4UzVBMvr32LhyzxszV8jzaTVRyWSMqs3uZZvmxrZzkh66P7sodNXtBn6QsbWDkWmXYTg2LG6wEKSCwiiUJD6VKEu",
  "key7": "3XxQXoa53KSjpro7d2SPq5F4WTuqHBoUiBrqVrVLb1jCCrCNkHhiYjuxb7fVqAp2XKMnM2ejk1B9SDsFvh2PebSQ",
  "key8": "5VKbVRTub6dBvcJYB1aVqn4CD9mgBp97hzhe4FsAkLvxFAyNV2NThaZBVs7M9RHQkHQERttfvoKqcC9XuewedDSm",
  "key9": "54h65vYipRKqwteSnbWd52HTPZkf7bp1KhQL8UCq1ibviRxpeE7MVRuJbcqmiEc7VZJeRbNA2vEd2ynktYU5C71K",
  "key10": "iZdKkWdwGjdEAL1uuF7GRejtKpMkJS37QfUZWLDPjQdHqQExvVinVFNtWBsL9pFpCYxMLVENnv1YXjmmNvT8JZB",
  "key11": "xA2x7QqkriQfRzLi5bWjELzfF1QAPDKNzP4t2XZ6AnJGTU2QtgyYgdir92U6PrWRxUUHuiYx2dGpnYH3FBysCpR",
  "key12": "4qudqHjGd5AWM5oyNGBHXjFvSJnPLt9xuZCBqGr174FNkcu3UgcU7gZkZ5GQiMKLYwoQ8bXqeSUcatAyVbqUTLFP",
  "key13": "63UeRNsRAwHePSpyxr1NA6MxPUrDnhmnU9H1XUyd7CQvBETAXQ8o6WQbUmVaACwYJ5k6MRGvVpk2dpZ8EqJWvpW4",
  "key14": "58akdVr1f6a7SgQ98ffKM1ovaaKyWwbDdQykfB1gwyBkuLzMRQydhoqiuUzpqbdbpwzpwhKiiAcVLN67ZdaMv32D",
  "key15": "3LB3SerY7kQdFzWUGpWvg8yB3thhvxzWqri2zz6VAUCmxCP61MqzF6KWrhgpv7njpwg9YHYTPRRkeRza9gUEXus9",
  "key16": "s66r2bs6FjEcr9zHK5Svokr6Jz1pb3gqwadPnX3dt7BzywkBbxr5ggFZE2tqrvtEATZgQCHdxUjRzjUXj5BrzMb",
  "key17": "3WCn75KoY5oHeKi1LPiuw698qw8JPDX8pL8SQaN96PCUsPeR1ur8TYr4uUcCKP3XKGLS1GghC1h4y5DYPjZwf7wp",
  "key18": "4KULC2bh56G2DEmgzZEv4zWAVkJ6HBYnxoKGQA9zdrFqp8npy9gZnfUqmPrQ4WniXqxQfLEMuzxspcnRrVcZ4nhY",
  "key19": "5S8cci8GAqnb6Yq9SvxZf5n9Xx39tsVRgpzXJzEpxyXyLwAX7gxww3hZTnCDs9dj72c5temJWAKz2PFygUBs9tqA",
  "key20": "2VViNqq58krydijABLCqVdHkfw5DRPQVM2W14AaAPvFMRXFuQSedYt2GW9B7FukWVVNw3o2UaD2febZ61MNcMgYT",
  "key21": "252q5U6qKBMybj2kbsQk7NhPSEdZEMkY98o3Nkg9z4tNwKGxnuBXcBE2TU6JbwdGKNdAv9VnCfLwAfjtYc6nw6Md",
  "key22": "3ZrCRsCoYqKMYDX7nTgHFzbhbVqFJFPv2YkjRHWpcU8e4uxJk1VH9shagWDdqD8W1hnuyPbBSzeVbwuQVuZWhotc",
  "key23": "4rgrtTd84DrL9hGWEJRaHUqHr1LUF6UomMcN3G53FttM7XbV8V3ua7inUyabVRZsc4N1n7X2u2hUwxucBpAB5A51",
  "key24": "3zv3LppAzWd8un5bTNuWPW2hVTU9Ra96qedjP1oyREyax7jpkRTBpdqxVF4fTDUM3bEuXx4EZP1K7EhHvx47GCUr"
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
