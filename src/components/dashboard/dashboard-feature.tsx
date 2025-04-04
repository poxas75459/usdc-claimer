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
    "3iNjSWuVgvaC8c5xc57AiWuqSHZbmyrR526mr4JWhMfYBmJHHG3meEwcwACxdpXyPjttUw536jcCWsrzsZ46yadv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbKkkEQi93354tymsdFMQk46k5SYyKi6oVAQYXGTDxahoNHzv5tQESMQe7uHwJ4RGyAE6BWvw3Kk1wc7NeZ6pF3",
  "key1": "2g9L2zS9xLv1EV3biAwNyLAmDaNwhgBzFb2AbtQ58AiuGWWfBSo1dnR9cBEUEE3j32MTzK11uzUgmc4Sk4DwvdwK",
  "key2": "Q1jxRJHkSSP2XtFbH2xKV3YiXaVjpggUy7b8vdUbjpmiGWw6SUf8xVUP8Nj87rpYyce4yiAa6vCEmrmEqKH6UAN",
  "key3": "4k6cLaMKh8Q4fUwsNTrrZ3e3vVuj1JTxm3MjwDpEkUz71wVXLsn5S8vAswmYE94vu2zNFQn1WUw8Uns7F61EVQyY",
  "key4": "5QsLn1xcLYWkrhCLo86c6YHs6HZLF86RDBaEefmegxGst8fGxyTF4eQCoJWzYJz9mponsQ2qFX4TC6uJQvnNC6WJ",
  "key5": "4jPydFVv32tmmo98geaHTa7VE3fH5BK9f77kAuRGic7ZdnpCYXLr9WC8MfP7dBmELcmFmb8AdtuS2jW14iQAGWid",
  "key6": "2FiSpdwYGnZJAaW4UTRt4q9jEz29agxKU8uBrD3Ub61KGNhNk6pkEsxLYahA2qQrgQA7GCSx9Y4E82beQGUWw9BG",
  "key7": "4f7FKpzX6Hiq6VZcP1x7UQUCP9Jz5mE8FdXsL2KfDaMRQAerMMzNs9o3wyfrk3GrXVRxL98ESo4s7okrsbhFW4CJ",
  "key8": "axoMtrqtFQWcuDARLTHynRyvShRnWmHxBvDcSmKzfr6mDtF6TxmGzuhBvK2hPQwFAcFY8iNGXjxwiviLNxNPqmX",
  "key9": "3iptVsiAg3QwvD3mSb5yBWtLxZnTisd5DFVV977B3bCD5j9uv9WkJMUAnJu78Z7h6MkKmFQtyGcYWdinrUHstmE1",
  "key10": "3T641oop8hrCgdehAjHRujctYCifbcjFTMAcYPpCaTGiYC7GnoemdjXGKQQYkzcvQmgfinEoAxxV8PUBUtvD6dyH",
  "key11": "3vMiapXhoc9p6m4Q5ugiyTxobqvn13pSWZpvmTYQujk97fW3srW2VyXoiAmCxLjDtpuKyqNeu1TipfsRBJBwTCbx",
  "key12": "4AULDeYa6MZtS3eZx3TkuFBx4Yw3ou8eYMCxo6BKDgdfvtr7ogkvXWSowe6z2AzTay7HX8kkouZ2m4gjdsvzK5Se",
  "key13": "upCnFdTxBj4qbT5kNYTDau24aBS1HcM7qDqFfTyCnoaQL3yaWYAM3EhE2jcYmxM9mo4L4pb9yrkLmJqafLr6a83",
  "key14": "3fsH9WjCmckFGTShp5p2cJWYW72o68ACg2p8XRhoWXP5xWDJcMe76enLj8qnjHvyLSZ1sXcMaX2QHqyxNfWug48s",
  "key15": "5W5b77ZcBzRkoH5PFkqvVLq1hvpe7nFMTyy7XnzgDRty5Mdasg4o3d7Sug1EuCmDp8PnqVfNW2F5jNRh8d3Zsn6T",
  "key16": "Cu8ZH61nHe6rRbyt7xp8s5kqDM795vjonMcrLYMQutbwvrGEKQxPBvgoEs66oWPoEX2uve8uxibqxxUDMmMhfj8",
  "key17": "LiLNZsTWmb8HjuwLeKofzjGLb7x1zR6ERTuzKrG2WQSknxk7ouxFALRet4HgoG2HfzC3zAELrj9bC9Tr5fj6zhP",
  "key18": "9usaa8by46XiSZYmRNQcsx86WbXdcAzzA4XBkfwqXwMnpBq9dtgfkqi2AumwxASTy38L8gNpn2Lu1RrbRhffCx5",
  "key19": "2BqVeGs2KyZ8e12wMFLLrMBvR6pgeapbG87dmQMPA4v2PXQL8tKKhm3igrZH7XBesJjGdR2gZcKvFTTPtHzpMZuH",
  "key20": "14KdaSXpjZ5LBo2X9jz4KucuMN8hsSGH15GLa9Zdd95Lg2s4Xaf6SK3TCgPh6hXqHfkEQdFFsRKz2jtmAKn7gVU",
  "key21": "2PowzVcwsdA1eitZ2g4qHRNVZSHuRVxrKuChVVPfqd6Vvt8qyw4E8ehigQdpgs8Z2WGQThG3V1Ws1Vte97T1BfDV",
  "key22": "2mMZwLsWRtMhwMudkv3H3dBLEqwzZKshRSb859thbn7N3rZVwUuZEG3GXSxkfPhYpR3ZQUcgyMqg7jWDAo7ES2qP",
  "key23": "cX1b4nH1XiDSVJqBe68HV2CpZku5HUv5DG7fDcVvc4JiYpiJL4nPu2k94un2MXw7kFky8yJXwa2C5s3kg7MHFvs",
  "key24": "5o4daDxdSmLyYpNvCE6V7hDhf4Xz7R9mx6jeXua2YchDuGfkSeubJLUKVY3ri5TJShkQxzmeFt9xn8WNgBCLXhA",
  "key25": "4GgK5QcEc8ueNERJDbw66vzQD9mGPD1Hbvy97fZouACZhwxnpTaFYMQotzo5aj68WgHCAepYcfL55a4UWuHmRxZg",
  "key26": "2XMyqQvdZj8WQEyQjHgWtMrmZU6XkUubQECb6NX86SYjuDChJFCyT6zHwWN3UXrjxt5N8PmjsZnbaw45rb8Kn6mP",
  "key27": "2KdgRhwtYkPpgAHpTqLYphRN6U3cnSZ1J5bJdWYe4CuBQbLiQ5pR4JMXhLR6hS36Z85BYN3sSp9TXAVk9x879YNB",
  "key28": "2rHNctr6wr5DkFmzKyJAGCkEZJsgRJGkuWWxW8JxSnP1tT2qg1DBg14Nhu9GjDo8cKNMhJ6uAp4Vwqj6TcchdtxY",
  "key29": "2yyQytWe8XHLLcRmctUkS4H627jSeaUsUVqWnj6EDFcGC4KfRC8cjP41qBUrwfpMcnQGH7GyPwEYJufAXPk6RTNC",
  "key30": "56FSnuZ7F6gRQ3JcajDkCCBLLUJx251iEMfCfbfwYrgKv9rATkxQpqvwZdFR2uxUHvk5PN5ZDfcScpqRSQQfkGoL",
  "key31": "2hhsb1niyC1o5WTiu4CzTJcDVuZKwhXRJNm1TX1JaEugLnZkX1Ydj5NBzW37HGqUKSSJdLWVEevEZvN2QFpfcSrj",
  "key32": "k4EgKYC9HCmGRyx2rSXpzTUKN6trBYVMZQptgK5jDa3sCk5fxG5vCFafNcydn1HiEYj6hLHyWFCMQ9an1X3ftVV",
  "key33": "PsiMgwXa2ChSiB4UyKAWDn998W6fuKgyXwxGsZ5FPqRRfD1cXz1gyiTd4KJXkhr9iVGQ9y66k5foBhw8aj8zWuH",
  "key34": "GNSdV8AFw3Z1PqyhCZg1LK8m9TvWFkBAAYy9zSYVAtpfKPvTw8A74kbpw9vdUxxBFCK2o1S5mSJMfuTTdwse3xQ",
  "key35": "2zqDtfdutBRQZVKN1xzm5eiXZxrYi8ZRu49aCBLuYRDUYydh1g5cEMGZmmrymzTA7PUWb5YTWRDfkvLyxTqGVXhz",
  "key36": "3qdqvWwkPTUMSDr1k9griuwNMsbA1ufiadWdPBPsT2iJtnZScw7v5g5c8D97eVLma2zCCsaETn5rv4hG9gg5EJY1",
  "key37": "246E8vedhiTFo8apTGN93Yv9xMDMQKEfamJWmn9T41VsTSZLnNMRg1ruhVFPgWh3TgudRgajJjUQS1yZFqr9Hc9K",
  "key38": "5sAuyd4cb86h2nmZBc2CHE56JcuqLJrgGdsunk5eyo358n15jVGQxxQ5jf3P333c7EtMaPqwLAeheezA4VYj8Etr",
  "key39": "4T6qwQ733yeT3u5iiqxdDxYNnJTVTqgvfXDPHaviHa5QkrFxxoLrLYc1npUw5UnLfEyK8XETB443fUKv8z4qZQ8J",
  "key40": "2ez6f7hVho34NBx8ijXjE5dcKbPs1BJik7p1eVtCWjceH6NJw5swJw4zUsJgRvZpby3nK7h9cg2aJQyzt6nhdUhb"
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
