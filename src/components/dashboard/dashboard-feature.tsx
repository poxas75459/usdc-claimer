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
    "5rQfGNZLiV3BgvvCN6j1TxLNp4MGyDEdpaVdhC3TGzoxHa92eQixtpqJyt82WaFURaDWCmnyrspd3Qdf5kpiN76h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dstbniAS8KVyR7q5KCeQrUDh4ucAo8UnFGaPvj3oGiUnTMwKkTSAsCTEB2QBBYPj18CpcNhVquwqiJb8sgQvamy",
  "key1": "3FrxYBN1M3gUBp9ynxujtkpGPyRkVvMHrzJTGoD819LwwYt3FtiQq3DXr2CGegCaJexwVyKzHRUPcPNhBjJMpVQm",
  "key2": "LqKbroJtPVS7nBCvbp4cdwtDqvnH27Ns6YAc1c7M1tLWpYP2sLjPJ3pYAtGTrsHgQ5fYNxFn3d6Q73TSdKnyzo3",
  "key3": "3AdLR7wnQgtGXDCBL3NFXX9GQScLcCWgX3LG2PQzSTdawEXTnzctdTeoaW9f3VqG799YFhgMENoJQT4uEdACRXRH",
  "key4": "5FEQUFjAVoaxtrsJanTJLS3ARzfnhuyn2uv26eLzHyUYq6NNAYvvuuceSkGZVvXKUy1m1G1Mm8KQaWNQxDkSUJo1",
  "key5": "4BjXUzKzYdqfjBGEUuEoYjmjVnRMSTqPhq58UDchXyHP5HGt9M7Gx8m1axrRUaPmavmcXg74zfy5WUxnkXFfYxs5",
  "key6": "52L7qS47tL27nyhfPLS28j5Q5Qn7bJmAxEJuZi2zg6WPXSPpPTDqefw8YS7XGvUnswnZonw3LpKnyaq7H5FwLyTL",
  "key7": "4VJPLGEW8kMEgLecyGgkCvC7WLQwotxcL4Ee1o5rGa7ZH5V19VbBdx8qjsh9XNCPNhTp8P1ezY4PxH3LBQB1EKmm",
  "key8": "3fE82P82mq22mgGeuK6sMyt3HqsJ33cjXBVG6g5PyuLtt6maHz29WAVEQCfKpoyV1ko1jPsqJcgQqbbF8bD73adK",
  "key9": "5Rv2JXLWLdjtpTKY2YT2cbSHQqRn4LCTPaNcLzWuG9buso9tDSaUET3ctErmwgzoqVVGPV5zdDz1KB5cZZqK7YAX",
  "key10": "279ex44XRKQGGXbFUMW7Hz2adXDfuyCcg8USjZVCHSf1tMZMyw3a9RbCRfxqg71cnz9a7keAzBwKjAjrDHJ12o7X",
  "key11": "2iAJQSNTgnVLVt4TdkPB6MGtxdZzwkGc2GvDbZ7ptRrSCuwaxd7XyK5cUMciyxLe1bbg5Mxfdy7gPh4XhPeEYBkD",
  "key12": "4bLjEBwoUFQLisg4Grnah5jw8th2YLZQrtdfxie7p1Wovb4PJy4B9TgMcRgRPLqWFrRxwiHBeRwaVEFBsLKjdHXi",
  "key13": "26jrNUMU4LNSzrdkyxGktr6bXtm9cAjZFzx8yHgrWEmonzGccQJFLcTMiFNSUHz5P9hEW3g4Md17p4JygT81nz51",
  "key14": "3DdMEhV7HARkwxrQKXsX1xV7WR29cDVRGCFrcxSuK2zzkA2CPnQgRhQrttByHewkd2uhymm3rcfCxhP6ciGvmCoU",
  "key15": "TpUDZTq4868Dcbz4va2wccrDteY6qCsfqsWJMHU3wN2nPEgGcKW1eEHuUx4ZSpPajqo7bUVwZT1bpb1vmmK9mXd",
  "key16": "3TobpSzcNBkMPMTyvL1CXwxApiLDCrW8sLshjfwpVRCHSkRP4aby8M1H92DrFUB326upABVQ49UMygx5Hj6wALdi",
  "key17": "t7yB86XmnTeYZdmcZBzr5znyc9mAvTzAzx1kKNzi42Yu2PzuErT4fQwv4UDmc7Y7fxD3NcVZmM1w94CuhzCy3P1",
  "key18": "5Uq6wS4S6KAG1aVeWHuvNe6As4Bk6jTbfvvUXcu4HYrtMFjMFLspnDVvzWLa3cP4QeuPoaeMwE5DvKQfy9tXBwKv",
  "key19": "QmotxDd654cyd8SNKS8f6H52nLkYaHindZ7gNWH6DX2ZQYZ2tR4HFW6n9Q7rJTzrCx3RBJW3XEevMmrNLhThGfA",
  "key20": "5ftCMnrcd9d3KXTpGzjNBx8M8jMKD7YSvC4TQ7Po2YSR2EQGWNavqx8mcB2ntaBita7hPgwwEdN9zPKjgyqgHXXx",
  "key21": "4gt3dwNWxvKJgn1NbjTgkc1sT4Cr6viqi3R5E8jRKpqZsrfkr27j1Nmy3XeZENcPA9rwWSWqxvnt8opJ7wf7XetL",
  "key22": "2pD6cc56WPTBsSGrs1XYeeuMuEszTSNiGqbL4gQ7Ra7DQHP2C2VdYrb7xQv4bvkk4VVwu8pxW3wV4NDGpsg9CniE",
  "key23": "3pom4yxcEhRCNAgFVBcWV6TPWD8cmP4bsVjQfF52ZRRYUdHTwsNeaYHgJoLVCBPdytGVG7m43uy7BR63g8LVnagn",
  "key24": "2rHPP7bzdn2kg2eyPHdajbq1uSQmqZMJ8GqcbcVgi9E2zKgFZ1Cdu3Bu9MqYP3eyAiFEPKD3MsqBjd7JWyNvwWvw",
  "key25": "33A5aaEZWsqYbsjbbhvScUUArdfCyZCgHMFBMpRksyJoa9rwPV4145WnjW9XgE2yZLXpKF35Keq2CFF7R5M1Baso",
  "key26": "3e3qjBNFDtjiysbscJaxqshFBSs71Su3aia2a6qRmVfydcRPXk9M9oJNvHPeBdaVK8wTtWEuARZqMWw42kZ5DXFe",
  "key27": "5dAaYxg1R35j3zh2FPQudpcQiJdFEMcVFM8ZJbe87acaMMWgRyyUChf3EcLY2Cck3m9j5pL6GwAb1eP1FKdfDqyf",
  "key28": "GNxJAGtEocJgPsEiqVaFJCtJoB8rJ9XBebgGxNMHj9kzPPHiETnFNEUn8PtkeK8VH7HBZ9HzDCY3ATXL5voxYYK",
  "key29": "27aHTbywLy6ZWgyZE2SHAWUF5WCaZPKsUCDn1gEnqUwxcKHQ3PbUQ1nVHQkcDUeZwvbMhYv6VCK3FHCpptyq3mTz",
  "key30": "62kbmaiqeTRtbmq94EWvUWyqYgWNkGqMCgKaQjesXrXy5fwJw4F1HEAaHND38vvmf4Sms8KQ45YixBWY7KKhgYAd",
  "key31": "5YQtF5PMYFrB15rgUevXsoW57uxAnjoFvBNYhEAPuC5hJVMjhuCcaqomC33bPupswnLNrdPwxogyYbPXfrsYZu1d",
  "key32": "2WBTbM3exfAD75DnauZn9JB9ehvq7jzNe1rcDK12vGJ7zRMfpHKu47E5Km2MbNuFJQxWcugCaM1cUuyiMWMHqPAs",
  "key33": "oDd5zWhxc5Njh86FVEHcvwQgofFZcHAKzUxc2bmdNJjcxRKy4wZxHkET6c5pFwA4bshnhzA3VTJZVVM2kEms574",
  "key34": "2s47iNDphLUYms3QYB5RUG7jVGU53Kcp2RraWw4rmGqUTki7m6ZXasCUaQ9mebzXaptvdGzSgdTL3PFnToegidGe",
  "key35": "3txCMt6RScBjULYJcSPt4BocLVQSSnmdhGVWwhBhE591jCumidP5jCHrEKRCEaASS5RXJH1af4w1v3iseNB16drY",
  "key36": "5sogHc8GXZ2TqQx5N8kfvRzXfQGNZ7LxkmkVbdd63H39u7yCtpMSiWjcK7j3sYa3pFS6yHW5vpJmuAyj3HKPjJtV",
  "key37": "59sEwovndZY7wvweabavKrHiabqsiKE6f6n8Q5SU8zCE4CJMQA2u34XSoQVmSSGX9mMASgvtLfMywGA5UUCvKNcA",
  "key38": "2sa5tQxwsQgMbJfEAG4Ji9xc4fo8LoiSUzU3nncHbajrYfnsk7omWHbGgWT8B53wARrfmbgZmGgBMDBjoZmzAtP5",
  "key39": "o5td3x6Mmx69nDkgTfooLUsRAMVyBPpgvBDzcq9Gc8oCA8rjUsLGWKwCouEeDd5tXrWSFKsT9AZEGMGdpope7Q8",
  "key40": "5wngzsCPB5FRhB9jv2DDhSahVa3ovQL6CeBuuXxMS4QVGEi9XzShb6KgcUJQYatPojbiq2Fv21bzf8MXcUHPnXRo",
  "key41": "zPAxEZW6gFW96YpGqExgXZ61m6uX4oCGjyZdCecCkkHbEXvBjMnUkFRQaDmCxQqhV97Q3djGHvD5Eci72xy5hnd",
  "key42": "3cC4JfY2DLQ4qk9UyP1k6BndZNcr6QfgSd7YKmjT5i9176mVVLGE5NezA7irWcTBvnsmb3oDVEkQEG8DgVgAwZtT",
  "key43": "2EowpuCDvMNFWKuLMBdshUc7ZoZohxs2VqLw7uwLDU3jekwaJ6zmA3CPq3YqNdK3FCFPCQBWCo2QaqzcRfgdm7eA",
  "key44": "2r6jv5QBXTxSbASvov3o4pC3FULKX5TQw9iNGLoPYd26QoZiHAHzAWvuWNhX1GbiohVUvtgfttYgWHUaXnDha8Ez",
  "key45": "5JXrNMjnB1AGbHVnNuPpyXEWXSx49LbnYM7Ngqhkq6N5ogfYpS7aM4Us2TFZfTMWwfne48naki1yEQ3tHVgr3s6A",
  "key46": "4tX7ZABKLGVno4hNQBXn7TcDztYiuAuWDBXe3GRz8yhRev9SiBrz6FwhsPBqzpyaRStzqojG846SonhcKeV9BMBp",
  "key47": "3GycMLZFukn5xtWKM91WBNEjFRPyniDD3knK4Czm5WUwerBaz4hXYguHy4g6QPDp9KT9ewtmt6yw4WbbqkVb7vPh",
  "key48": "34jWYCX84SacQT2zeSSdZbQGirn1yTbwJm5dEXLBLkGNQ9GdbezjhozkpoqMTDPgjrvrqyrvHbeCYEjJD6F99isB"
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
