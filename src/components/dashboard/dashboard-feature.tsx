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
    "2yX8Z1UhVunfRAZfmdhHHkddEQ3cDQ2hesFHTzNgG3D92oDAkjKVCBsxfMoUBiYhwf9CBB9xj1efi71dR4QUmcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tWFwyC27oNzcu3422ranQN6eDddib9DAU3gzZNLxXffPyQKecNCDq9VSQdavTsbqVH2AEatH963tA8NAzQ5UTbw",
  "key1": "5uCqiUZXTm4Azh4Mw6wBNr8GCffUBsVFiBKCH6us2eSaBmti6g5mWtJX3oogRsAMauA8Dk2TqDpZAkSH3EfHA2sn",
  "key2": "47UEXLDoxBZ4YTEmfVPZNJwvsiSqwibRpfxJGC1hCb4XwvRHNWpXH8HaeKbZx3vkgPCbS7som1avGNfkKLoAjSfi",
  "key3": "2Gp5MUEJVThZB6oDHrig5LQyHqTcTayvzpPp3HXhKHYKY1WM9JJDovovPKD3WUDWcQ79msM6CqsxLcYa59xn3zR2",
  "key4": "25hmfErVfX4iUvR33UGpt1hkpGHs6muhW9tocNMYpkJTcMwTrwMJyZ37gGfLJkuZLZ52yhsF2KS7jfAh68geMGvu",
  "key5": "5oRkyoPgUBhQo9rfwUNmU8CMrJUPbHD84QvFSqSkTkTFhzpsQWB9xZ683YzSpsVhPMWmHCXawBd7CMNUV2hUwCGH",
  "key6": "2sToNJKcumZVkS7T6z3tZcbb3Y1UohmrvR76T2ZsrXxDdbZg2bEsSLjbAYymQSAfajtaMJ6VdAP8TvrhMF3bwdJ2",
  "key7": "5tWd5aTfMe6FPWsfUtQxUqHo7b5C5KWafi2pxfy9STiyii99TkEbgGcQ79HmRN3qVzhYbbY2SyCZS6L8Zycia5mh",
  "key8": "2n7UbSfj9F38PnAf5ZpYGxyBe9tEVM47Ww1zs4KxquW9hdFGzYegepPBkFzBwSA8C2sVq5xoi9J988PJgzr6cpdE",
  "key9": "4m7sQFZYfyEyCM8dF95wauMG5gtZpsWVgS8wHpTwmLEzWnZxYub93fy6iaWsyzJkk1xW4GVDkTsTohgxUZKzAivj",
  "key10": "5JQcL91FchnGecEtjJZ2SgWJMRDgqGBBBXgYxzzfJi8P6PkhKZTcRvziiVLFcTkBaoXGKvVtpyeFXnFfiqodC3Vm",
  "key11": "3RpCY4Z1rELde3jqeo2NYJCBfdbEFFkgVJxTafesjPEDEs8tcQ5ZZ86ukG4JEBhE82QTuxp2N57ga2A6WToM6BUa",
  "key12": "42a1KR8aFFnuR6BCfVDhEojc6py6BdXAapFd9eU5D7tgXCroC9kpVWwEc4wkTpbL5ardGwdmbCAxTJ4FqpAi1vkj",
  "key13": "5fC1uKM1uXdzxUgq11PmzZ9bJPovqG1rHmP1Mihvsciqi5m99ss7sx43i8QYiAUpBMgWyX87ps2axKPE1STSjfAX",
  "key14": "3beUjUbGVywxXLqDQ7WFfEV99EqEtLPDGwLPqehMwTAS75mv7HENSDoDhtywVXW8zsjacLxAwB5VWyhSqBGXPFhg",
  "key15": "3nTdGA1d1nspnRbmubSc9cF3iCqXDuU4DP5pjSB6aX4p7KHKuxUjU2nzc8n56rMEncFjH4vwR7wHAjzm9UR12kCN",
  "key16": "61LV7MSdqtkhq3PndpLmJoha2cfqEKmAVe2iKxaukjDsyzsdXB5esmkofPZHkTMEf7X7N2W81pi4CCqRbyZC8Eg5",
  "key17": "42erNNmwf1iTDPvdT7JqN9NMj3yhVz8pdhGDewzLjzypZm6iPi2eeFUkgiyh48rgmu6kT3GoiWdcx6YehUaVjUTN",
  "key18": "3eXktyEJGpe97YPSe65nWMUQJ1Z9VYvDmv3k1cHKkizFdQjkEH14eckmfjKQ4zB2h2rQSRXipaHcD5WdyRqeLsJT",
  "key19": "21nTDy84AruNrqBwYbsToQjNuM8DySDgDLyrb5D7w1QwXYzhanH47LKQqUYiV9iZFN2YuqY7g9wQqVyx7JxCRkDd",
  "key20": "2p1tiYYnijYTBzP7PafRzFefBu54sQqRnrAJSozVcvZDdDCqvVhTQE1uiuac6a7V7MkKfRF4QZcJVvk5DBXUTPJs",
  "key21": "3zBCuo35ACS8PR57kEsEcZpcDTq4XxgwBCqXzbwtdSkYn85Ki87izxoLoseQa6uxwVCWNYTQWbd6ZFH1RBpU1rWp",
  "key22": "DKss9bT8hRKRPb9k9SvyJC7Rwp4VR5yxNsGuX9rzxwLtTn4Mcc32DDjTufaYkv8NHauwYgLU9YLTagnNGCzqnyN",
  "key23": "3waHnwKPoy9KLzxZUxAps8KLSjswPqXn1o55mDjXVmdkNQDDTPs26prmLDdPMHNFhVzqtZYttKuz7BPP7m5zBQ7",
  "key24": "8sarnWvoypry5eVmmMvvrvekTpp9KZA94Nxu9nxFAVgJsK1jtw83nWLkQCsnS1j7YFGxnvRBu2BAdaZ4nWertLQ",
  "key25": "QumBEQWRSc6vLGJTr5qprPDTmaKQHJFnqGrcGcXnFMpgHngJwTMm6ZQSuQqSADdzhgyYuU7FbTazmafzHHdcM5u",
  "key26": "4pHbYHZZiwUSFVjv2kZRr4ozqyoRooM3KznREekqHYZwJdWSvZNtR4tF1c91nVGkJLfa5U83w2BizXvULod6FDzB",
  "key27": "4rMMFbjD4GDAjNQ7gDeUgGdakYWwtxXBzvbB5Mywz7ZBQ3qxPR4SbEXdvqiapcivAQo996SfNFMQsrZM6brhFUdd",
  "key28": "2ZXzxFec56LbjwQunGKHYRYt98r3VEgU5a1uB1zPGbvn2BK15BKHaZLUszJ1fTPsj6HvuHYudmsPqRbugPW32CUw",
  "key29": "5PF5hZ8cLrHbCKgmmT9F6AnK6unaYifoNEx8QX9fjwdadFQarRaoJNVh8Zok6qw34deFCNht1tqUFZP5hJsFGbXB",
  "key30": "5Ty383YLhGJinptHcZr2412FQPjGgYx3fJ7ELdV7sLMx2kwn93LWsZhAvgjvATyZALi696pwJFfmhUwCmHjtPBa5",
  "key31": "2QtXy8w1S5skGV5KEasDdkWDjH7EU5m8bUTPNGYSr7iDmdbzHLSyWMqPpFNsvsmFH37Zw7Wrk8p1bvdvMYLzWiRU",
  "key32": "4BBHwiGCVUtrGr8ZyRozTPAZngYzu8taAAR8AA5Hkt47TCRBkVze1RwuZmsSbaNGaZ2FfhJw2w2EMUn54qyNQFty",
  "key33": "3Tx3msc5ZcQpD4LKXkWa4yFxgatMPxxqbdLVuGQFWZrw7qkgrTYBsefchVjFFGVvuRTAXW93rqPFSZYshTWFEwkP",
  "key34": "4v9B1WBTWaTaDyWuaqXPAHDN1Yt5YSDAhzAGFT1YZ2pMNJV7ktsFypk3r9pEUTwum9b145AvwQ1MdCwpBTK3uEsY",
  "key35": "4oAGcDtw35QfxBF5RKQc88jtFtH8mAFinhieJ6xHRi8g4ahfT59nAjVHk1dKiExBE5QzyxEfeKMjvwYiYXfmqFnz",
  "key36": "4QLu7o3Wgk78ZzYavg7NVUFW6ncVjE7rKHwLVw9GJgEmGncEAA9V8z98EK1HaiE3pSKuVu9N2TKDjVE3kkL8CFP9"
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
