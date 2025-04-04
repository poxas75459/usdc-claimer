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
    "3EzcbdnZZYFqifEVZg8YZ5ccHKey89a1dbSVXFdWyFAbtdBrWQiTT3uhe28ikiohBQDGzL6D3UQagnUkXGivAowh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L181optLsXsXEZH9Eao6U1oQoTmoLU5jxQAYWT5FSgia5fYTUTCvxxdxPEjNiaS2iQSTQUzFqnbjDhLxQSXMuME",
  "key1": "4Uurx6N5kFC5Pxk74z2fHkfvJKFpVhbzLsYWunvXMbAVceGpyxXA7uT6db8hvcJ5mXzi1QPn1HqadAYeQU4ckdVJ",
  "key2": "42Ve4EAQ6BHHa8pCFxEAkuyPz91zgNFwUEr2d5uqtpaouSdui4WxuC5RjDffEyrb6eWYGuzzbqbh9gqmPNLPGWGT",
  "key3": "5DYdRjGpLxodhs2hfDgQ7so2C6ccDtcin1PUw62GoYJSXSapq8QRDqYJ1SPEWrtYDLxK1mT2Nghg9cKAVm3iZy6V",
  "key4": "4CLSa8cvnJcCtizp9t8Y7wx5vbzW1fm8dP9VEgFUGQau3bfMeSt4RzLxdA9WGAUjTk7BFdBoLfzHJ5hMnD12arbz",
  "key5": "4CPSJiiMQohnCgaJECGmzLhGNs9hDxfMWCJhNs5doZkaimmBzLsszZHTwpU1oCVc3d3EFR5xv5cXuUhZYwiRfXEo",
  "key6": "28t3zrLtCGLVpgtLhfGd1Xz7X4Le9T2ia5tXwyhsTxYZuvmz5QzkAZknLehtUkWvo1PzgQf2jUN371fxrAhyE3EF",
  "key7": "3Y9GAYAFeCoMmy5ZHUUwW7Ucy9vWxzsfUgiG1FBCLPMYMFMfW5VAYGSLoAQvwxCiw8oRiUzGu2WNM8xTxqWzLnp9",
  "key8": "26BB8sukRkUKByp1sqkvobqPwgm9AQHqXd3sPJCPKZUB6XCLMB3oGy2LUH157zw52vF8UzVWzhomUqNdz1DfPcqH",
  "key9": "2GsAzxiUDQWiHPmy8Ghx5Zyq6GiStkY421WFcqWkFpiUMm6bcRauuciNkCHgrbaVRTj7FqWpFtuM5yAYsRWer6XE",
  "key10": "5rH5jM3YtkW9mLD1qkNX5DLu56aBGGu5DiWk5eVx6KU12hmKm3nJTkAF6QStDcP2nuXQXQtz7MWVSMVmVgkbwH1S",
  "key11": "2AhRnFNVQrSeNfgzvbz3joAVWHNTDJ1wrqV5xqhbj7sPUZUSfsnkYWNhvaixEnBxqQqZyyy63abadqGhDF56i3yj",
  "key12": "g3h9hqewqdTGQqU8RJ2DCBuPULns8Lb8fWzjGB5rf44UTfFuFi7eRpVcpSJ8hqErNtWc89XAvKj7qPEuep7zdur",
  "key13": "2n4pPifV7GPeLGqYzbvv5Tf6Zx8XfGg1z4wULSjnHA6N6gRKMou7v7SVY6TSUuwpGPEc2nYrCPHXDEBQVKx6vzQT",
  "key14": "4hxn96DMQT5qVegX9oC7wEH15Xhc7hxWPLtEL77RYVcVfvcjhL2DyL6dSc6FUKxPvdaDVNCoQarLEWRTj67A2ctp",
  "key15": "211jRy3j9HsDv4y3DmaNtzYEz4geLs96yZgPho7uZTSPRvwQXVYsXXeo8eKSJqwDX63ukgWDTESwUQBSgGoMe3PC",
  "key16": "3r9xjkLSMoVNDsmthzYHeRsnhBgu86AbWUuiWrSG5484EsUdqua9WntrN7BUDxJvfxXzUVnHymN76cx2yRUMpg2b",
  "key17": "46HRioE8CfCvigBRewe585TSxfx4AhY3PVr7dkZ6kVL5ggFiD5zJJuaWyD2LQfM3RTUgCY5Rwurx83UTnKQqA5Mz",
  "key18": "3xBau2eBq4PHyhewY5hoPmoTkbGAT2qLPe3ozsUkLqDr6wgWyt6EDcQUamzi3q33PMCDhmFykYxg57jNpkyAVi1n",
  "key19": "HuU4yb9WzLUfcfmfhDSKz98Yx5e8otTQ6kuNvdzefpEEyxNgje7JzNemoYL8fRr3BSn6Q39xhJjy77AhtEcYAx8",
  "key20": "gkqFNjrMPf3kKbZQFTTu1g5kLz9SXHY2YxUJfA7p3pCkyZUprMFTZYmSfgfLSCgVbDpWen7t7bvK8tVRAJ3nJYv",
  "key21": "fAyF6QBHENeVvRZ61epY6K9wDw5KEFveZf6LWJVsw4h2H1HwSKgWyrdVLkj5wjvdFdV5qyMW5k7Fz6Hcqd1FuvG",
  "key22": "2Dzt6pMwfwfuQP6u4KGz1RYq5BvtpVFHzTw4xGLRCgsZ1aon1owmpEbCKk7bxARR3APwmzfVdDEDE9N4ivx5YcPL",
  "key23": "5ydTs1LxggAS5FYU8A123gyJZnoViKfj5vAX1JLqrppehSbWUNXqxGypHmqGMh7FaYqsucbLKRqfS1zG5HbXK27j",
  "key24": "25BB6yyr7BtPPBsnN31fmwVjjAkWCgrFMduJ8mmL1NSsaxgK9uPG21pxVYsDpsMH1xCrGRn9ZET5Nkp6QESaUYhf",
  "key25": "49DVje69ATj945JqWpGybbhypGK2AvLdTCuyRsHHgLwR1tMAtaKm6BEExNBsBvL2GKn56YbV3mMmqNqTdnF8zxUm",
  "key26": "DcUYC9enEoFnKf1pXPRSxic873ySgFmLhKjhtRTwfyRYfjv2QywZFFba1ehqGsBk6tQyGCaTNZQ3roUSUxiRKms",
  "key27": "5mhxGYToYdz65E41pSsxoAw6QEmXDFKbFET7xLPBfxW4NH3LZ3LffawcHPexZscFrcmuQtsnFoVQDbEquGiYVTre",
  "key28": "3ZXfC7reYdXFM9RqkY3QZaDhiJ8BjNzGfiHC2iWUAgfmvQkSsnHZ5AYzkff4Qg3XQmCtkLZF4Vitw7kXSP4bjaN8",
  "key29": "49NdSooYPhtTAMPMPMpBj8zuQTByo1KVeJDFDfEAyhwPeophhMsbEA7e6ifKgcjGitveyYRuL4H249iG4UXbkF1K",
  "key30": "3vkWUoc2RB5MhL36SKVuNfTx16PBSyicmvEnWEzpKjVQ2SzUSagLgg2e46S2nrZt1Gyhic7NTMV6ZqJw1zgLsryZ",
  "key31": "42fVeavb9RR9By85tpx6oS3BAm2Qbc64FMgywN6cBEia21NJxhuXeoTczbyhiV9tgNAq8xd5Z8hn7pRfYi4oykkf",
  "key32": "5F7ucgCFkU9xhmiDh38c14PS4BLdtGsgrZtY6howRGMWsRhGtCRn9Q1JyYciC79KrZvjz71Bu1yDYXARTYqwP3ZZ"
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
