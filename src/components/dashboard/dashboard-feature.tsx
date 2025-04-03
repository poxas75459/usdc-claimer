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
    "2Fd5jLjRcEHsyt8SyUCGz1qcJovyZkRAH4dhsSTQYKKsWHWe6oXtmp1snV4DJteKufRL6hy7K5R9yi5hbkAJ95md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uT2agjBjUnvAu1uwQG5Zof5hxuVCXGcf4tVUXQWwj2mCgfwWLP7TnAF7wSaUUiX5dKq2B95WTFxsdjBWkATtrDS",
  "key1": "3xCngxwCAB68ZNJjwzva7YbfZYpnqXdwW12ipCsV6DK48C9fGPEqsKWYrqjo1GF4YRJ8RJM1jqv3wEYhXPNyL6XU",
  "key2": "aQFPPjAHWDQAyKoQmKBQKcwRWwr1YpDn7kLrpCcrTojHzbHuU98917uCHgu6NnNTUwpyujRLjArtrk7paWQSD8e",
  "key3": "tTqDzHMyQf2FwHFeL8ASANBuxD8F5ukh42pjBLZHasmJxfKA8G6Agx9dqFw9SHvX5GyYiHEoWSExiHeNVQdov53",
  "key4": "42adod4iJH4tAxh56fgiZfSwTocQnhnGX492DSPbSUgHUGBv1yyPLpd4e4YLfYL4tZT73Cast1oLhL5TFu8V7BUT",
  "key5": "4Qw7VmcSZHdzu7C5MnquSbEJrdAn9cMxn3dQy71jKAH8bndWtmbiw9cseP6Bxx4Yat2y6qydFKAB9TrERG59NxoT",
  "key6": "42wbGnHTVvNZy77RiQRPpiLxZhe7nrc5BSFq9RSAtFctLm5NDbatYCKKJx9BLFHpBmJXNtt8fN5xyCC3tXpDv7ZR",
  "key7": "4LPgr7vPkCNuKjNya23UAnSUBKTnhTxXfa1EfshhggSY15KGNmPzY4jCgawjgniJyMWH5nHPE5b7xVQJPW43Ueyq",
  "key8": "4xa7JEuCB3UdJWms6ugfr1k7yb9EP4TkgNMrjaTouTEfqw81NVNXdMUoeFy82MHy7vNN3WcM8B8jwazveMdjPbcy",
  "key9": "3LBKGCxP5Fnf4JYMibxZVr4ZrGumdxb3aWJrVkampjXVjBR6tv7qNPP5nGgQgPG45PZZJo2zes26NdyEEgZqhrj1",
  "key10": "5wZys9yuN2FgeqAig61Fy7MzPyKy6EyVxdfMxCQvVwbHXvN8UfJBqghmBB5WpChVpNgBtNhVSb9uEoucP5oyMJtC",
  "key11": "5hpEqSWtSoUogGSx6jK3PYv5S1PE6rghpys43EVAnwmhie8RpgiLCTcPP6gc7Svq3LuCp5snGx6T9ZvMsTXd9G61",
  "key12": "4yAr1WbmbUy3Bs7vPzG6ekJLaH6R1rjxbno9KhCG5G8Us5XtvXtKPA43cbnjaEqn3DiV1kavsLXprrbeYsqxNKdw",
  "key13": "5mh3BNLVovLnRTVMBdUgMZTVB8DkURA7wibZFqDa3i6Vv96AAhSqQrxvHhvV6KR2zngkL7emXHe1Av45Ssx63e8E",
  "key14": "5qpJZkvJpuYnkoG4CU7jNf6MnWaztD1PbHtcFYF2UerCEVrR945VZEyD7XaEz2rMjEvbYqgadhU23XsEm8Qwytky",
  "key15": "3ENeaVaKGz2n9tf615vP2fVwZTrVNnW8SPn3oEHwHLe4xgSjBPo1oXQYehXLnXCgqs6Q4Ap9rCC9MLjDdVJ2ATrR",
  "key16": "2S2Zt9WTxcoyhZEZ8DHhgeLcZ9G6yjnKMAPLSw1oeyRSX3YcucbLfYK2UxKDHoESBkLeHKffVWD25Dmunu2an1ru",
  "key17": "3nVEoQehdBRQy8UNDnWw4FwgpnEszQvBzj5FX5wDG8KEkDJCCQ34CkahtqfopsC13dYzFhbnT897KwfG6cZDqLeP",
  "key18": "3kPtzpnzVXKBk67hScLKntBpFf3eXGMME29xXChEfSiER2GfqNjFtLpo8CFyhX7iwHwegDo1ALHaGJ9yZW5sKhqu",
  "key19": "4j5QxiRcPUXZg5kLvb7KPnZ5efQEujR3W5xvQzH4ha3ufA6ufeGWt6dW2NedSYXHRxYkxz3Wu5jKFZZLjjquLgQU",
  "key20": "2N4wQ7GyotZfwBKbXMy2pjJHmv47HYL6YmDtS77Y3fPKNf6RDQXv2p92xDL6F8w2i2yXjjh9uEHc5YZHTKNwypHr",
  "key21": "2mmD4zrVWT7eDUeKLKTuZmtPBFG6EYFAYYMD7GPGha57pUGPHvf5a2xHx69xK6rJhYSkKBbWbUwhTS5b9LR5wH1X",
  "key22": "e642dX5WTQ9HwpMKbJ8KikQfdrv9YhZRE4hu7D4objMBWvMBPaZ2SztgoUdAAgLZxZUhwWD9YyNfPMmxNdxVDLd",
  "key23": "sWwmEW1Gsb4ptdV9eg3YWdRyZo1Vm4vPFZ2rPXLQTUV3QdkneMLrYL1ySRpFbCkQ11GQBvVxtGrQh1Ef8UThMXX",
  "key24": "4rybt1pRHSiPBuT66NniVo8dQMea2oDd6qU5CfVJpAX2wdL11hu5pHVbU28DKwzZRQt3YPq6nbmH32sy5D6KKsAr",
  "key25": "2kxGrSDA3qcMuYch1NiSH9hknPseKKtiP4g7yA1GRNBxZxnThBMEmyhxdz3BLwe4omtt1F7nkKQyMukapyGJormt",
  "key26": "3CTEc9QvgobnaeD4NsYnJagaCP6UbG7HWKGJAcbLNefmGuUuK1xcvLWiETCoyVCAg72XJwNgr4dQHptJzRoiAvSM"
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
