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
    "65ydBMuTM3XrN8P3FJstjntvpxFFgLS7yx7iFijNRBMMcGCKns7KitzLwkh3FzAn5Ey2pS3QJ1DBCeLBCqJrgnr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38655Ek5gPSyrXaWPhN89fDoS2xSvu2UEN77xumm5biZLj4pJLFSyiYoKy47ZPgwGBuKL6DRxw6aZCXTfBaKh9uD",
  "key1": "3KL5FMrYWmQsqLZMkHLzPmhyy6mcfmwCMvjX3EmBUE7mwn6rU6AFPbiCPhdFDTx6LaotyyZPfGxJ1ppgqKxHvLTR",
  "key2": "2SEUTtvoWtFe6AfbLDfTwH52dydhTN8aj8tPK1B16jdujR4CrTMzrRy7XrvT2b31ysfRKUYfszXLT18UHPRvv447",
  "key3": "3WYKQee7yvsAwJyUJRBW9yuj2u13GStRWLcJRs3Ufh9VAKz5zP8QD4LQQu3Q3xq8DxQgj2WPVujcL9bwCioMTDFx",
  "key4": "TCdH85prEumdACQTJ56kxpUw2B1HhzUzeehoJqpDZ5wvWq8uuAQ8QUyLm8FVC3DhAZY16DST8Z687Zp3Mcgy1CZ",
  "key5": "3uTakuRJBjWVzHnXBNKMF3gxjiU7NNuTpqc5VGBVCgLT3dX7sgJjntEkx8rU9jwtx5ebwC5AF4MpgXxcLWqgt5Vi",
  "key6": "No8qZRHFJWLo3jVnCwEnEeJiYLdzmARJvAzHLe8HU6KNkYG9kUzYcqBBZMw7qyMLs9ArvLgA1G2jBia9H7uitSe",
  "key7": "5ADum4AMx7YEzChX97rHLrZbV2otqKDeAkmKmwMo8jobRF6a2J6hLZscdv1NGiWqVwMvaopXDSMpBLNWn2FNuWk",
  "key8": "3qhpGEUKCnpgUiqZUY4PQYhzD7d2attoz396DeebNwXFP7qQ5rtWsQZBeHQeeV4SDPHxiHqYPWTkSh4wyknAncEX",
  "key9": "42R7c9BqujzB8xp4328LN4ucozyqznMhTBM192qkiScg82f4XLCKhki5CmY28wBTT14LD81MYPEqPHmCPEcBq1pd",
  "key10": "4ugfmVpE7DZPwpnNR6Qm6EqQD4XawtMhG9CoMaRHwsng5ja33RXHMkj8jhmxcjDxgMVoAQFd5NDNBMU9krNTKRoK",
  "key11": "59qZ7yqvgJriDFKQ2w8PN5zumtRkDZx51nJVz5g9k8q9nUUY4NAokMTZwTe1focC8terkWNsDTvMgtzYUxAVyvD",
  "key12": "5mMXDAEtgYNVLxMZgRhtbxJftBmcHxGS96ZrwiPMcmoL8VcfcywcDveyMoJsXk21f96G9jeRpW1eTG7QDypfKDhY",
  "key13": "5k8ZKwvz1DRz2MPaMg8vF1ca6nsxmsYh7WuJW4ktBBpKiM3QwG9KEf53CrgjomyfHphE5G99wEojcSW67qh9WVMf",
  "key14": "3rXCHFWS6txz18CbWJk3jS5uSFdd9Zn7tperCLZbYaRdGxCZ52cQtB9oSzsTyoAGjpG65KhAh4HD9yRRZ2A33ENR",
  "key15": "2TaZDXHhdnwybYesePmbvacYj1Zqt2J5CSDvJHxU3RdDFAppSJ3HngNJdS3SJi4LFUDeTQqZqbcYs48EjYxAKFLL",
  "key16": "3yjQ9EQpx8GApH2zCpGHeRJYasxKvQokZiiwBmViHRvZX2a4xJ5wbo7Nop4cxtqW1WPYavE6ex8XSaPcY6PDLixR",
  "key17": "tK8oWtFHPrCpLoczoTG94sHW57prbeJw5ywxsSzriNhwzJg8BFhXpkzD861MtJ7hT22Wk5NUDiTyGDUh8d2pdFq",
  "key18": "NPAzzzmmXHuCYWzENbBGRHWrYnS5DugPXRcu5haWYKN3XcrwMVa4Zyb4bkmCfRuNsM3uYGXmX8H5NoL8H3jAfcW",
  "key19": "247mLxG9cmPgjmafcvJd91AJofM8xPouf87owQhc7dgtHBioTVEvgP7XEie5wKctoF3HFRJSZA4RjKArTDK44pWm",
  "key20": "66pf4hsnHbGNH1S82kdN69wqe2fySWJE29qTKhe7coDgkY8SmynhFXYej9LZuNphUfvykk3yrUtJbTw7awsxiKsa",
  "key21": "52LVMWWL7rrqNX8Ysri8zxQHFPKMkEpdWGb3TgxEmbj5wvoxn9TuWnCQtWifkDEcYDDDk7vLGyZwSDTWGYYLRsnJ",
  "key22": "2Qhd4UeG8kY28dG37gMKxjimpjZU5rzkzsus8jPwPPiCAEwN3NtynkbfC3mvwNzcWrHe5GV9uybQXiT5eyeSWNmn",
  "key23": "vmaamxDzyKdyg4onUmuRznn4bRm7FV7TZb7V6Cgd9jhiCgRf2wNS8my7NQzqJMK3ymsrsDs19QbrHLqx9Tm8Ufe",
  "key24": "5kx87pFSwRFzNpmGVQ128F7PqDfwxgv7oxMQsJa2a5UDKJsoFXJZwPzJ4ssDBcz4EAS4fKLK6s4LNuFWp5mj6Miy",
  "key25": "67AmjSCKEBpLRCdL5CEY3291ToYwJQZEBzCxpDomrBWwYp9ox6wK5YFzgQaXXjgexuGSKVV24sLXRjZ2mJusfVNk",
  "key26": "SdKjMy1KHA6Cuu42RcyiVGjLMJt7wZSqPG74cB2ZRB1m2JpD6fVnB3xfwxSp3di67y8jWaUoUsm8STfJEkpXCS1",
  "key27": "2ns62tDigpyfBvCf9QKB8HLnNwgkwoZFVuDvpUMKVftBUHWqGBhiDHvu3NyCRYyaVfJRN5iZnvSAuaKCo8c2WHU2",
  "key28": "4L6WVRrKhQV5kgRFasMehVKnveUy7o4qaVgTHqZjgBgbaGNVu4QRsBZZr75jaixvXaZVwETkZfdKA58cVejWZvkC",
  "key29": "2EBec2TQnpuG29beG3enZxuYqWMv7MeRCR1X14KQPuY5HEti6XqMtrwxvAtUTHRj3ury1A8b4ykBbe7N3ngVjQSq"
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
