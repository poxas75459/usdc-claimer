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
    "25AJF8GdLuB3C7fjUfAiky56ETinDY8AxxwZnNQb53vtqy6Lknte4iNxBbbyEb5MPFBe8K4CPCCsaP8CFYHCQgyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBRE4nHJpSs5tTmLAqwnHawXiMdEyYCTMVar12XSUSDyPvF2ZpTgVXTCDZjgEyM6kLcYp6hkQCZfyMFTq6Ua3g3",
  "key1": "fZaGmpxk7wK4197HWQAjmw6M5nEK2XLiZdN9gjWpvLLDPwsuNaqLMTpN7XcNvHMRX9fqwBse2G3Q7MSXF3KHnHe",
  "key2": "4Rvns1KmKaBiXiuiWDYqKG4vJ4G89gFnLZa1tp1tZqLqrHHLE3G9Lpx7FqgNW8msKq6xoVST4aMhsgwViwfDD75W",
  "key3": "5f2Es7paGW1qBEyB5z32yLQBn4TbZ71qcgAuGYNSvfhwtavJVkNvPDBTR6Z9RmipRLy6rtFMumktWGkr4JaCv7qb",
  "key4": "3KWAz5F9BRUHZwuSVimGfhqwYhk6MAPayBL2TwNrkcwvts5NyKhGT8pxjGX7pT2DUr3HoCNCH9JqvMb7Rqjfah8f",
  "key5": "4XYhTCZpiax55JD7WE5meZFdV8xxoN7K5JgBKUzaG5MTREumU7XhaCUofwBX5ToGp1qWvxvwhQevrjGU5QasBaFA",
  "key6": "fbXCVG737tUgDJcnuX8JAdgyjAF5EsdoAn5MZfmSM3AaV5d6txvLvctCFtLjx9y495oUBpmrNQoYk6PTsWVyy7B",
  "key7": "4xjvdn2TSCCWuopNKJcB3hAziwaTVutGLSPVrVTkgQ4vmeDdAMWvhY6Zt6TnBLYyVEXz8Khy6mNkDifF63eLZVXA",
  "key8": "2p2GLFoW6DwjD9n1ZEC3C33xZs3nZCeoWHau4hHkdketNPBfcZ9jHQdzuKEEG28BAAAu43nyfjaSQsR6grxU7Qs",
  "key9": "5jVQnqhPG7djKbi3CSuYfGTvWTyFVixd26i5bssXhtqX7qge8wrquE1nJjcGWJ6cQM9SGX2nx7xSfyLriYJvym51",
  "key10": "2DfanxXqvR7NFmE8dAj4jz81K86WKfEs1UTpNqkjJuqBkapqyxV24sQGwCepgYr5Qaw62kqa6UGU6xH9X1eD7TvW",
  "key11": "473gJLnhZ8AMe7XV5yGEsYRTwYffDTsfoZxMWtj2wAqDJKkgWxVLjTqgsvjLtN9NbN8YYgetnmd8xpdDNDxzCLfx",
  "key12": "2bkzAZFNxF5wEALjzbosaRSm8zoAaA8unLoZV8U3ATST8njJppsYbrKMK6Ussr1hHmcL2S3sgS4S3L6qaDnuSBnT",
  "key13": "8FxtsYQc2PpCdHSLBtPKDo4PzVcGG5m4FzwmZ4vx3uqBhKbFowKo3neQqdevvNa4sTQSrH21zNNums39fx2YkCm",
  "key14": "4r8ZiUsyJz8dCH6tpS1vtvcdqMyde7S1BjKFc82MExg9Au7dkQF7HJN91j3x3Lg6LigDeMJyBzw4rGSR41d2wd2L",
  "key15": "4qBsKE5e1MgRBKEBX5CpfJeTWAfXUEGu4G9eYLDtvSWPB64BXMQZseEsL416dt2HKuguwwoVxifpgKfZiNqzKP4F",
  "key16": "4Pe8wUxWYoZeXSvVD37w3TCFHe3j59JdEyhdz9b1cBwHkQtyoxmChw94SD8giqg9ppxhhk4FLoNETaY9HvjhhjoB",
  "key17": "4bzXvW2LD44U7T8VnFDzeujmuPkkS5U9wUo8qZQ86SQq7cwtV9dEavZgmWh68NRvn6eJJRCBYspLHQVRAdCLBmta",
  "key18": "5dbvJj89FRfmu6TARp9D6r5cZx1hFRqujVzfQ53DgUUNhFeNSWY4VRtqd27424e1HmMhXigJmJXcFctTmcCgaV6j",
  "key19": "3BbEStVFULjHQLVMbU8qMjgwMKxRV1RRh3kHGh5HTUdTHw9xRjTRFsEi1jsrqreusjeJrFNtvTLBLo89TLe72KC6",
  "key20": "48EFBtvhzLC1PRtpN18R7UBAGgQQPiCkviRUi8rzuETo2Xf1JsBTMjKXqcQa7u8tFZCZt5mLv1HW3qMqyCnrTaeq",
  "key21": "4DZGmrJDMgfTGL9kBRGeXaPQy4iPiaor28FtkM766wYGUuVwRUERT4TxBea3gSy69fBULVMXnS89aZGowK5qdgPn",
  "key22": "37fa85oy6mi2J1MKT8n8tEdS6iyboQhXWszxXvKYG1BAGBzCwhqQDXXpQnSnc9nqexVhf4N649mheZKyxoN38kKC",
  "key23": "5kzVhE72EELZ2SjDvSekRnFYenpDmcuSYK5iANFFpiDgymnJqG4CHvcGLgKXAWtGRMg9HfWKaonBAXkzLpXHCtSK",
  "key24": "BsVcdAadA1rxWKshXEjoNdCqkt8YDNhUjVYkSYMRv9mwE4hSCs3w7geWCBCPRFkg4fmMq3PUUrPn6KgbiQnVFsN",
  "key25": "4gTkL7ym949V5sKLwMyXW76Ho9ArpMVcYi6V1nVVdsGBScZUbbbThKf9aAQJxC2hjhjimjozTgakdB4BeZC5PV1p",
  "key26": "Hb2w7mt3UNCxKHiBSnytxCEcWkP3sFR1yk549Hcg4UqW1uGjbTejwVqBmJGGMEXX3YxioT7cfaCvqDPHJsuYGZ3",
  "key27": "5LrxYqpmpH45tNNnpLs95fpwWCy5RvTU5yL1PMjdBnXKTUX5tHD6tVuakezPtvqihTDr7nF2nxVF5UGTMx7K6HYh",
  "key28": "4o6zy3yGRCfDT7Xzr74Jbh54jN5JHeVmUSL5tqGojXK5LmcGJ9dGZAX9nx5UmTgMbvrCPCePFTfbYMH3oAyPRQos"
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
