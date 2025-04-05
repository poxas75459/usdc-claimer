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
    "2uALMiU7LW6rjPoxfqMmPgd4wRdvQ7D4px74Sv4zWQgB5ffwRQtDr6fcn9oEDKQJ6ZVMysxbWUfibhrH5sCKiJPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8aBNebMsZvZyxyccFhEoJnY7GJRMgGpjVzAkqS2LhtW78dDPyGxvkFCCevdXcdnpD9dPXbVAVAhEQh1zop866n",
  "key1": "5yZyq7jfjuUrsGusLNbGQV8icAQM38vqXgNTZWzatjMycXjdMc8DAv8J8pZbonfRqM4MxfSe6yAiYqSujMgyxCp5",
  "key2": "j5s1UDKUfbFa5iPCdKu5LZ7sTZqiMBKF4MjAtjubZMRfFNoHKxFknEKHycAcpFe5GXBfABZWWYjstA6WdtMqJ8k",
  "key3": "2YbTLE4vJNhhosse15uwxUDdRLynyCEhhSSZNB57g6BgEXUw1TZfWmHtMT4iWY642RXyzuWmCUykhDGFMke6Mznn",
  "key4": "3wKpqezTcbQxQmhzz6CBnock3qFuR379ze7E2ATWcs6sSDnCj6je7dhHBMtfVRR2EqrySEdjATWbTYYduavVvwfa",
  "key5": "5yCu8c41myrZgud4QJWPs33ZLSmGiyB7tmFJ2NuRdQRMC764es7fe3NSsUw9y12a5WG3Cv65jLmt7d5hP5QfrxUY",
  "key6": "w6VQNwHeT3ScCyPXys5bJxL4p3xdEtzPVPa92mFxiCP7uqcU3S1DoezVdjfa8kNonXxZb4RW5UFakbBwNyQVKr5",
  "key7": "624uSvo2fW2z6TQoup6ror585J4KN1QZZJVLJCaVePW2EUU5A5TevkWasrimSVuhbHgZ4spiP2N9wwuP7kcu9HWt",
  "key8": "3337fYL4d35dwqdwPwHu9aAH1ApbRPnwtYFgCjoaBA2GeKFGAFbBy9Nnn16pFqDSF6YWF6mFiwZfYRiPEEFd4LdB",
  "key9": "578vZQPwd8Vg9Av4867UY67W2eYk4x8GoMGThWtEWm21EmYR1dZwLn21zNArCdLFBjZzTAVL4n1SZ4iJy7ozkTwa",
  "key10": "61rTWa3Zira4y3at2mYJDs749TKLRiKhwTNE7fUbFBXkuM1tft4uKNNZj3rdkDrj4jVtLABoGeuuQWwubJDgwc5F",
  "key11": "c477erxh9wKJjxBDPhtDfD6tVq659DLUJ7gEStgxf44riwi7nzsBuNcJjenEwEZz2tDarYgrU7hBSuVEA9sWS5Y",
  "key12": "643CBPp1zibdkxoF2unLvniTtoV7Bs6JeiwHbF3M8aQxMpLt5KgGeni16CaewxknZngDWsHZZK1XgT7V98gGpd3o",
  "key13": "t3GnjEU7joP2ij6pFDtUy2PsJkJEHjYUd6zssuHAQTzxPsBEKeSXcqr58VfgeYxGmAsy5T3qjTgBVowSdkvYaPi",
  "key14": "4MckJbU9KknrsFbK1VyJJE5S1FrHaUgeAtw2nt85Ahh9sWXWBQxwWe6n55YaBH1K6TpYvtw6J5CQrdeEGmPVnenS",
  "key15": "3ba9mp2quQX8akfifKTVAEdvLXQccpPMwQFPJVff4N8CuRBKGhYs4UbyUtiMZmZfoiyZrKrBmJcCN66TJmdSJJ1r",
  "key16": "32QrUtwFvUdUxxdGqJHD6HFTmGsVFRjxzFSRQK7tcdghhiHics3in3GFsHmi2AvVfGGpVmhoNTHKHUivSRrP7D2t",
  "key17": "5mjaPZow58zznNBK4nCqixG3xxtRpNb8w21BSJRYjtv4szmHhhwStihTcfKU3g9auTRXxvJSJrRUZQhpx6SynZzJ",
  "key18": "mEoFS6hUL4T5CpooyHn76EY8W53BMmb2ZgxZFfdzYqpQFiyLkBgqZ5qw8FrNQDczmnQgf3u4ffA2M88mHiTyDx7",
  "key19": "4XtLzNFc19amSAx48Fi8mUf64fWUmYBZANmPqJKmVbFbjzMgcBHoAcvb6S1hqRTrZPBQEif2RPUu6uGKGfP22ELD",
  "key20": "2FD6TsnxpqVgFpPUJMcQKVCVTJxxbSgx7JpUR8U6SEQ9BpHgGPPsWtBiUbqwVEG63uaoneZc3kYhbPmfHsbqPAV",
  "key21": "517DkMD74UtAG4wJXsTTBQ93z9GMLRDYrJcsgE132kKi23hg7Tkr8VZA69Nry9N9kT3XLXycXJnwihB9qknz1Lun",
  "key22": "5ZJuN1H9aLCtJGRnw647zaSabeMLysRsVJCMHoXCaWwesYCQpG4Lne8YHLbQUiipceEgQEKZA21D7AsgpZEeTyKq",
  "key23": "4PrVJDJkwwp1YtRZYVcrPRAwvWuPQth6DK3XkoVxZ7wdLBjCc5MRpoAjsvNc4jfRbvZkjBdLPHnVptWo6icnZuqn",
  "key24": "4KMnhTAg42Xk3XonFUXiuX4qyfkvXgP775ctbXzz7p3SKYdrJoRLgJmprbTTBXCc2HqKySRpgUdtBcgf7bgPNHqG",
  "key25": "m7wKiZxUgQX6njVk5BUHDfDtBodiHddqD3DhzesNemXpqASvr5j5W5G86oTrfbFQVV77FtcgBuPNExzCLxaE9gw",
  "key26": "7kKb2nfL6ZtUBQwyzuaMgmtLLx1es3Am8gfzTvWr64bXRjVKJ9uDATRXxxQTRtsEVn3vQuHZu6ANUE8qedUufBx",
  "key27": "4T7BJTP6demEaLt4msRUycyXKdxfPmbJJqs9GHxm2vQNw9LdstGuMo63GywaVkSRgehQNEHYf1jvbytJiZFVyGSY",
  "key28": "2wfKe6WSo46Y6Pmm1fN6qnbgqmpnGwZkE8SyiWubK6BgfDhfCS2vqBKU3M8aj14LgSnYMKGhj2DUJ2tXz8yTbtNJ",
  "key29": "C8R8D6b5GVLoAvUHVXdCGbu5HxRsb4ZPun8i3QKYUwYRek58Ppymhuods6s76j4D1Q5PHCvPKj9yAnQwesC36Mv",
  "key30": "23oJJByPzK4HNFPAYnrD6DpKjWTsg4bbzvXuXQc12gXMb6yPhsaJvU5UBG7bM9xP6GJF4d2mHpscDThxw4KKrfFM",
  "key31": "2QzvVAtyikpVvbUxfVfd7NpHoGFJXGL2XktSysgQVPihK9F6A8T32ZNdyJ7CYf4ZwjyTMjdf4kMwHBX3iztmdL4o"
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
