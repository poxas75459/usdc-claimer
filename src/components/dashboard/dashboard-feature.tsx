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
    "p9Y14WYgqZmRn3sTSGrU96tXsHgpKotY5buzvqVN5sc6XPE6ZWvamhkaxgDbAGGavrdczaywX2ks2SGyKiNrinZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476QUzjYALCpXuk1X6ofvY7PaWnsHt2gSor7TWpUDa84KCTvbsWiJoKQFBERrMKietzG4Qwp25kyb931QQjh1YLQ",
  "key1": "5YqCgR5z6FuTYdFQ9nDMpyowYu7Unk2NeFfa7QvXDYhU9RaAjpQwEthJA8sQejeW3GY6p2NkVKBzMPZwkFWRFZna",
  "key2": "3D24dS2PMaqTxiCixFJCtLDryWprUzZHPrNApCzyS9Gg7B7RYPY9Ngx7qyDDEdqnjcfugweWjHBqR8Fp1JJwEoRi",
  "key3": "2BTVorYT3PLhHss1YGg2KFLne7ssh5PqMGSW7wgyWb5mwxVbRqLJmdbPTHkTE5hrd1tjejfqsLsP6U7hYgbZvkzu",
  "key4": "XzakScQZqUik6yErNPuuBpGrS52RzM5o9cPSQVD5uZu4ijH9Spf4Jq57AesqiTJ4R3piXXyFpYPZHuzuQkegmUZ",
  "key5": "3xK7rU1BNnyaERiKwTg945XCQTqHhxtMEnMYog7Cv8mEgnS5BhVNRxdRx795wKueuZdxq1rAxxWn2yD4JPgDTybb",
  "key6": "3stCpbkBBnzFWXdNMTkWCq1Y1D7Gn1RELqQQQxjQRRhMp2SJ96vRZiQEvcYeSEv52fvoJwukPkeH2ixeowsuLzqg",
  "key7": "48bRbTZYuYKBd1NPQUxHMENYQ2eTi7z4a1EiRQhYde8KGgRZfDvZX3m3cPzkG7cQv1N7M3AmkrEx7ArE87e2nDDK",
  "key8": "3Nhrq8VYHTDqQfXafG4oq4X4LcUbtZEyANQEVuQ1SMbacwPpoDj4SgwAJXRWLEz6Fmg4gJ3dPcRojo3o3veZBEWF",
  "key9": "4cM8cifaecY5YnKx6sjACsgYCciTXKMSi3NSEKpfHai7pCafPd5YcVo3XWGBuNGxBpJMnD76iAHFF1y2tqabxDhy",
  "key10": "4wHqVQ8oDtLGZr1wyePL95PufcMyTuABx4XaSUzwfFrKZKEpqvsCWNsgZv3db9mzc7DS3URQHLPMyWjjwSZ1xuGu",
  "key11": "UKzCEbb157BTmuGgCPxUhsukq1NgfyihhxXm7VzD4FU7CpJFASo5644VNW6HjCczJJNQZze7KoHgERV9YBX8RY4",
  "key12": "64HykTseGwBUWLTDAJg4QWYyZEK34TV4TSXBju7P91EzWBazqeqTceBm54Hago5YW64mWrJ7YeXA4XUAFkRY18rp",
  "key13": "39K6WvMmGFzvDAiG8bzzFzyVWVgegEPro5cntJnjsnExXeXRYYQQFmoyrDV2fqY5pHeZVyW46tTwsrJRinPRQb3u",
  "key14": "3YatoBek6isHLQZPpYdspGry3gHo8q6bgpML6pGby1Bwukh6MVewhVuQmQhqMo5s96oxMoTygJfoT3aVLNdELrS1",
  "key15": "3885zYHLWbSULyPLVqNeMetcdL7XTSUgMWrXw1h2HgSKbBPa89crqvj83SZFiY7p7GFzzvCPdxo9qMYkRDy5KG9N",
  "key16": "f6mPEf5BrvSTu3xRCKzpDRTX2rXYssCYMNk6hw3goNhpr3xWAQzRBijNSWaXLS8xiLcWHXQtZaA9vGL2znkTaTM",
  "key17": "54rLgLemM6Nz2nH8WCcKRsNg5h9fdZ3m92SD2hNdcp7fuwj7voh53WxG4aPjnpjeF1YPoKi6fAHTTCcACJXuQEK9",
  "key18": "2TUQp53WUkYpJFknWf3yjnzUcXA4CXLH9xGc2Y7ceHKK2okyB8B9gwt49q2PxRDMWg9rokKW2ADkbUf5YerV5kTw",
  "key19": "5KZ7d2igcpKTfupD9n7edGKF2sjn2fsKq8GGCRQ6wkFATuUwyx5TTfvM1wowmAguy6y19tkycV9LNMs1CGSctMDy",
  "key20": "28moDZT1cdXYTV3E6eoyxjJ84APGg4XsDyTxq5ZMeEBiu2dUhZYDmoTnTcLLn8tQHSaGQLRhsshuzTEwMCZZ1oTQ",
  "key21": "qW4v4cACCwLxwB7FRNzBu81Tm7xEa7VG2WoQLxSjAWt6HfZuSCpP6yimgTAfaNMLNuNg9xteMmtK1LB4wyfNbjd",
  "key22": "4cxMTv7UUH5nh3tC1kmf8wT9sizYDVXqxNkJ7WRWLSFHAmdgPFMyzENYWTSB46vbqdMvJEAazuYb3vREymJptj3e",
  "key23": "DG3rQYaFNa1SQzevmMWu2fMgx9DPW4QrXfKoSejpu6ToqXRQAqmqinRv9sUN6Bj35gBEPVEPK7BUqaGxN5hjQaV",
  "key24": "eVMQ218ine9CSYqm7HwGywWitjBs7sWMYAU3GZKaeyPw53N5qHkWWRE69qD5geKoMHLMnZHPFDbAVw7VeQqF8Ch",
  "key25": "qqCMb4FUKDCZSZzGf8MvVAARFPYsHdSVNBFfZ8ze4p2CqAw22S183aKUuqtw1pfZ6gWbZQWVkfwYvbcGRAWdJqu",
  "key26": "5pzzk2ewPLt5iB9Sh6qsC7aXAa8abPMuQ3Htngaz1aMDuSTnD7xCnvnHysDFJL6RYfNVZ8nGP96c7JJXM96t5z7x",
  "key27": "vBUmk2XJcvCdMjXXcpwoRPFVDQPnbWTqw9ayjQJuFrKTAx5rpiYVUgE1kB2rTAmJqN5jYCoUEzJD8sembCJaDDC",
  "key28": "3ptyyjRGyjRzgzM6q1yWvGk3S5875dkFMFNW72EvExuRnaopEYpYfsHKf28YdDfSXYRVufwGdraNUY7fHj9oBgsR",
  "key29": "5jWCqwFm6fUqPM2hgKq7VgZQKuAg6ZG6zoKPxWFrEkFpxY8kQwhXCcU3w7ZHSdKZjJaLKtQ3baJMYQA1QQe7gry5",
  "key30": "2S9QKZ7QhmjEUMEq26WR8WefczwXgf2HHKnVqE9kXPqWEE4hsxWZT31CEMPYYGuUkkgGUJcjpaVEwDQXzcWWRZu7",
  "key31": "52yZD32GRo86GtAq1wG5fXb299EZ4d5V7LrwPK3otzhvaWxrNcFTR5DWLy9QwZLSJjLiZsfJR45YuB9h4SWWZiJf",
  "key32": "4idzndNW5Xu2qHNXBVgwrFpD2C6ewYXwwDmY1mkAzxUmHyk3Dtgp7xaZ9zwK4Xbz8ZwSGPZ2LVQcdv8Y2ubKACtY",
  "key33": "wRQN7FBzL2jiKTksnUDmCeUj41K2ka34aUzUkhroXKHJonim2vuuQZxPnWhA9kz4smF6Xg1Yq3fzbvBVbtJX1Ty",
  "key34": "3cGxFxE41bfxsuo8xmeaQ99Gxa3GcdumLj569rVdMEj3M36RPEVievDKoUkTUgMFtFWcjoixANLFj3kCjy1k4k4U",
  "key35": "47h3rv959bZW9ZWjvTCAcUFTpLv5n8z2HbL1KfgJTiGDf9Yd3C1GV1PJfVh3oZJnVVky7tiXUEW2PhvjiMszLVxs",
  "key36": "u9qXciCn8yBBafWxVtpVts24QNbkWthzgyR2c7HaS3eEDpdaQyH6BhHNxktXgw8kNVqkErzQYAVZr1ubXpVmSMr",
  "key37": "5qXDjaqJ2YenarzmckU1qfmYhsWJH455EQmSZYEPKZtmhvVuc49v1HFjfJ3gKJaGzZMY3AnBY2fWKPA17Ws5FERG",
  "key38": "TqHgUbEKwQ8jDDZhxtViZogMBiqqCbTjtueec8z2gE4BxaEeruA4wdBHNSvCD3QUC8yW7h3S3dr2fyxQMZNxABq",
  "key39": "3oJM8B5tkmkPU3a4grTe32Ev6xBx7PuzokhTLnXA7w7VMBfiHDFh7H4t3iSDkMTxGc7c7GAapzJA4T5ydbf3mfbS",
  "key40": "wdHVA1V7zZFPqkWfmkxSqMAsJQFssg9i6zmny1fz1XCCSWwEVVWwdJmianKxLYeJLLEXnbPtJgKUoVcHnfTSc4n",
  "key41": "wed6m7uQy9rytEy4b9DwUMjyQsE4RKXtFbmADL2hmHZSSM5kLKda6farhAk5Zj7B8So1VLu6tGJaHUw2xaYfoim",
  "key42": "4evScUaBva9pxZaQ2pV2YhmEmmfnf6o6o4KGggUaPqKSsbDLoVevQnP8rXuNp93XiWxzhK9LDwqZJ9obSEbdEhFy",
  "key43": "3qS2aXAswRWguyg1cSaoFhdmpSG7dZ9Ts4YGeVkzANU1UdR7bsnGjtmfQo6VmN5xPhNQdp8MTJ868o9BmFBV3zBP",
  "key44": "4XzVRpfP2nW2wBx35NuCaY14sdGsG4bCp4kecSg1w55btBYo6pDPc1Bdcsu2k7M6gNWb6hhMu368RP3n73PKSSqF",
  "key45": "4SNgdf9qRbtzZM2NL2h2NPma8bFVfgMF2cBDrYsSUuKN1bAV4A2bBoFEQsjF3yyrnWCkYtKkoANQaWmQPiJSoEu7",
  "key46": "4WLCshLMAELGDc9W6MzDHmKzCSeGqXJZhRt5cjSE2CwSiAsSMuxXYzStevjmyqB5oS8AxoQZ9rhyQzrXthFBNajZ",
  "key47": "31TYHXN44LJcKs9Cq4HoTK5nGuR85J22NMauD2wiWCnxt738mddabFyX3BWFvuDCdgYqVJVZZ1eKQGzRp5auCf3p",
  "key48": "K3UEkg8yB5rmZs79wmKWvvhtuHWFYq3BS6fbA8E3kjv4QcYb7jLfgQaKQvNh1x7hZTpFLkuTWK67q7X6PCEh8Hn",
  "key49": "4YbJzec3c5QWNGtFHt8NffoaW1q6VeoqbS5yvaGTi5dQMKstQ353yNsn2rvW8gc5w92d7TGqhvEWUd3nmugR82mn"
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
