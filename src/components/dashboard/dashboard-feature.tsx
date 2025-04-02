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
    "2Q7L7ocwCREn1b56iQ38pr2Mi8r3w8nUBSmZWnfuoXhLDc1WTCbHGnn1rcNDjLM5uiA9WZnyrKnyjGwbLeMN4cYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b8EereihoKdrcGSk7MTDpJbWNLXUKEFfh8BC2yf6evHV3GB1tcWqJL2ukqN9ECGuWUoaGMAn1a8Xv98qiMuQfz7",
  "key1": "3qsP6NUCg8ed2aVvsCCtze4fG9rqCia3HDApu1bpDutcs4d3xBmxucX3SajHdvtkRpsfai3PYChky6x8pcB6C7HL",
  "key2": "TTmzmegwcU8vdmgQHxXemiSxnMCzwsERywpnmvebDRmTXoTpuYAmgPmr9tPpp2uTGJML9Sa5BJUzdrgLHidB3SA",
  "key3": "2wEQiFzct4ASnxnt3MVVcSxiUtx1gDxzvNmuBUneCXzqitx71n7GAgDsHN8ofgHaSDpgWyHRB5HvhVRv6dQsSjMU",
  "key4": "2biiFqcea7xMc2VBEVjntW2dPzkdXnvY3N7yARHSeZHjQaMGNrDCvH8Y1iqM5kfL1cjkaBSzZPsediZiftsEuDfG",
  "key5": "5Ru1Hmx7LUo1BXqPuGjL8hP2uprrTm1jDCTYA6SL8VsyGnNCUiZTRajp98sbU8kSpeRxBaYSwfbDaEe5py6gy864",
  "key6": "5Np2XpACwvLbERaxsTqPHYXQCZaHn3EzrfNLCtCVrM6Ajcb8YT7FpKihN8LsSzVNHmwuyXUGRko6CFquZBbiUo8e",
  "key7": "4ZBdHwbA3SFQJf4TefdYsjcWk4FU7USxDDzj5fjGfiTQ4Jk1P34mbrJPzvssgUJipNNcKK1Y4HeFwZ2GVVnPJeCX",
  "key8": "HkXyJCmsEbXgdzdePNzBdDmjE7nongcUHWpQSDP3wHADy1mkcmLi9fK7H3TUq1LMSNuQVzFHmAKtwBkJuwfknLf",
  "key9": "4zLw8fspPFPhURbJfJsTaikH89sYZspn939jTpvRDQ9Cak31HyRfBYFje5fshyqwYhYT5FyxLTZimKtQMoujwbYY",
  "key10": "64BQ9fgHqqmReajf2dA6ArzKm2sPHCm13vybuVMhNmkdvd6cquh5PqKduX4VFnRCLQESAt3ftYtUC7VMde9xwLBk",
  "key11": "RZRzoY1pujsAWzNk3R9EjfSx2E8ydQ4GFQiJLr7WHK48e9HPanNT1pTwGjUTjdBXM5nNFX1qKeagPCV6qKdiHbc",
  "key12": "4AXW5zcJs8wtSHxmi9PJfPxhRJgYEYEHUZu9cosUCJQNFQampDUYdMUGPHY2mGuaS7S435KkuHyW5CWnCgT1frNz",
  "key13": "656evQAtfvbYFxwksVrz5AV5dJfsB9Vq6CudDZZ5PXzz5RXqRwnXANb6pLk9vn6kj7NJt2XiuBXwwFLLgiWop7Wh",
  "key14": "4FjLrE2JLwL3VVLWug8ky1D3voJBUxrNFHLYHFdUHFDERZttUhdKsjiNqYDG9jGz42557NfPzSDWZsq8G9RgEqKP",
  "key15": "SiUbnGEgzBcQrb98SUxXHygLUo8kNyh4ju4JedniNX2LBGp4bHCYzgm4dVrQmrPpqsCLZWKprizbBVWk4ZNnWJv",
  "key16": "3BwmwNbafd6hxP84ibeDcoijuUfqf2Y7u12R3h7hoXKXv99Yrr1gGM7qjgUc6LQd64iTM3q16ykQoG1DtoR6vXji",
  "key17": "3NJojYJg6b4NDwtZKcz5aUvq3VXCcGxkUYe8VGyGhX2BKj26VmxvP3TSe5u5gsCEonavJorgkcQeVy8SK6sQhsbf",
  "key18": "5DFdF21gf5Ypo2NkRB95sE8cfLuR63UN34tQWKHSNZDVmSYyMStUuKgdhiFUb8cmXjT7CZbc8z9SZ86NZHiryyum",
  "key19": "3qxY2oD2bH49bnG6fZ3UNgrwxiYyTMz566yyLscrrxETeoXtotDPAJYG6pjkhpJkbu7b6hQWjgeSmRNxDZXg4vbx",
  "key20": "39t41RZGmq2zUzZfCMb8yvHzFA5qZifVwBaZgCMm8W1pv7ApN6gtmdQguXhMxSe3uGJ4ZRSR6bJq5AMidu84njP3",
  "key21": "5obcbvbkUL4tvg98aiPDYoV8hXXXG2VNdA1S8PSnPazNquCe32ydFTCPkK1hKBfuiq62DxvxB6KYVNkYTVAAYgDc",
  "key22": "SbwX5ZtdQ9KYdZypoS1gq7rtt6kBH3CVBefBNKGtsb8trKwVjifKftzxwC7ZNxDugEMtQE6XMevicL533xr8Noy",
  "key23": "4g9iHHYZyX5NzHNWWVepCpnAMjKBqFyeNzMXARJq2v4YovR17y2phw8Amo9hp1nv3UwRYcGBDN9wZhBnZHj97gH2",
  "key24": "47NCvgbsvyRPbWoYDKEBhobqczbYQTUU82n6C4QRDVBc3og8hwgoep1cGbczmPPyMAZMxhn6axpz3UDd6yYX7CMx",
  "key25": "3BU1DcD9niGDzy89R8zSf6mwmXvahBTDpqjHGL8zQvcv28mDB1vZZRtdEdQX52oed9c9m1vGsssdpUW99Hq4cjRK",
  "key26": "5pD46gy1adCDd2zgwjDWijBbfXGe9wbtkCoas6UN8izt4x71M9pNicCm6ZAnG2i5YaboHARykWRDvcjor5icmWsY",
  "key27": "44WA6gvgX1E8fun8rdxAtCJ4fa2zb1n8nKuSz8YCkYvKXhC9gdao7BEvcRZb6xdVzXYizTZfhRAqsBJv4559G4wh",
  "key28": "2BxdgjsLJXbYd11Wh4vDaXNPLVm88duRNuk3nYMt76W1kH95BZ9P2ZZstMGz4gXz94jQ5VMyRxeAFDhdgPA1G4dP",
  "key29": "R7JzvCsYGTyGfzWP2J7upyrADcz9vLKuLEXaeoct3PJnCdMT2Fpb4Lx6ZmMsxdJ8Ts8pmunWfEtzexV7hHQw5ji"
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
