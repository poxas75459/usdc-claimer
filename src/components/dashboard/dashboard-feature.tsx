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
    "59nXC78WvswJxxizpQ7SMajb3t4jzELq4sE2Wt1cKmeGiUd1D9m5y5APbEtdQvMV6C9mH58aStSsqzPrNGePyfB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E3qjTWdAv1QPrwmhGiv8KZ238iMQfadusKuETu27yjMGrf7YRL2WVvwbc1sEJtpRfxzQ89hkvrpSHf7kbGGPwd3",
  "key1": "3FWSzR5oAJqm4ZUK54LHKME8j5fECJLDA7HYJuy8USSfUFi3PLfYiPi3iMUwPZXaMEV5TmxNSdhpacNXTPRDR9NR",
  "key2": "5s1CfxYGdRxyY1c6dN7CvPpY3hguf1kevR91TEabaEKMkLTBpbHw2juwXafBU1NKjskyhK8JQhJYdyCo6xbXhrn5",
  "key3": "5BPH7dS7o14tjH9qCJQ9cVgu6BMoGHBCVFHXM8cnpHbmbb4kat91FRA5TDSfo4YF1NNetoEE7AFH5FD8XcYxN8vV",
  "key4": "5emmiLtHxGncWxxSpEjdUAAb2Vc7MbGqa2ef115FSmqecM4jG6p7jjBvMVGf4xAvDzQzcE3UsPyvHTE58fRQFjRq",
  "key5": "Ue6CU1RGEUre6HmGQMxm8pNrYCxujMRV9Z9PUbANzpWzT1AerbtvSDdPCFufzpdTWzjvWasd3vFHdA3H3sQ2i36",
  "key6": "J4BRJ5h35hjEKsb7KUgbwBGUeBAjTX3TnFTDbkQ1sskQiCpgF1Gz86sevwwB1KQgFTEh2rnQHVCEWiZ3xrWLw7P",
  "key7": "5uvi8SwbtTcu6NBekjPRrF1UEXzUb2VedxkNhu34WSK6ZSX3p8oRxMytd8t4nwj3iXZ7MwNJPUiyVD5SjxRoYmXq",
  "key8": "5zuwNTnMzegANHQiadY9YsyBzfxxr4Xi9Rd1APUGx1ADoA2gZLG7uXXTCbzL7iBLLYGLEKjTKgxp3SUUYVLbdSpo",
  "key9": "2bB13AeUnXyKRjjP9GHRQyVouE6Ez1p9QGVjQRfzUuEq6gUoCnFv7shAPzvg3rhy31KcZ2JcijVPx3rRAVWsNJxQ",
  "key10": "2iawLZZPYM69Je3SAL6jkdy8M4R7ZZYLDmktZ9Sk8P7RdgVNtrgJw8suudQDRzvwDJR9ESXwDPLwETddGYsNxmo7",
  "key11": "4181Gf5o8hEXKWwGvDE4r9Xu7x6E5zGUFq2VF9A4fmACiDwff6SaNJZ9CVYF289gCAPvwzBdimbA4cqDRLJdGJ95",
  "key12": "2EkYFowjqHxpszaXv2gR34wGRNDdvwCFux5MDXMEvFexe393BnsGoZifXeqzqP9uVDf8jMSaLGyMhBqm4LyWRdEE",
  "key13": "2rUfUJNDXGHRiPBxV9HtYyRYMxCAW23vAxdMGo8WUVQ7jkjjiDRCVm7RYMehKnShNTpCrUve32whY7ZJvFzvFcsB",
  "key14": "4obZGGnU1S8xt4w5C73AdEiiNjwTNkV2SFDych9ie35wyJ1ZK4TaoSXZCkgb8iJx4tVbvCwuUfdLGMke13LKbZ1U",
  "key15": "LEXdRgnc6Bqhddfzu2FdMxJRcS7hJuQh97QRanrM3bicoDWx431W9tx7twZjA1GoZK8U3hagE1fkWM2AkSV1tRy",
  "key16": "5eZbhesiWCcvYP9Cu2qgJSyTPeLazgS6HhMbGCsZfftsavkNQJcCbFe1rtQyxnvqRsj3RAQsK2gtw45rET4PYWAM",
  "key17": "KyMUSTUesQhCdBEeniMgWHNgGoMV8DWo2pDcicwqtpBJMaXt1D3uuAVP9Zh91TkituVpD8NbD3stjpPiRX2VeUT",
  "key18": "3sFXkDBBCzx2Mwh8JQXAoyrKa4AVRAojSzzfNvn1BXhpXx8aPKT2NvpT3gLCWASGaNUuKkbSP4B6BTATBd17yGJJ",
  "key19": "4aMubWPgHmDz5rdCsN5uhqJbGpmmCUT491z1QMEarEUDGfMEJV7aRQUgUYQeSDbt79Ds56Vcbwis7pKY8ANPWeuY",
  "key20": "2gnGLSyx4hLUYMhDEbNHo7qUPhicdZgEbb7wMzQR69zG6HoRjEybAkS4qb5aK6vET6ksoLzc9xofWPMPrjyKHgNE",
  "key21": "56RZp4WNy3VUNDEcvaRHXo3C2jDF3kfijiFmVJUduRLxahQDbxfnZMMAVyUqMSoU4DiCjGAeHm96V3nnQ6jTNBft",
  "key22": "FebNTnJfT2BaiSSsijdyuFR1D1Er7jVdGfBh42DUmwRbVh457AVNb2qs5aYtVftbFwub41WCpFe4xXS149NPnax",
  "key23": "4J8seqZyLfq2Gp9XsgyFm5WnyhX4XKr4hLskw6Ez77WCrGxbfC9G3tr8XemeYsbkhicUosoStcdrTR46uK9BP1eW",
  "key24": "3fkQjHPhbDiax1pF3jSRaiWCMpm2xreJ19ok96EsKbjvxFCk5okJvtEJKcfAad8tZuVeMwkmWXzYwLK3kiTBgVwZ",
  "key25": "2V5nHA4GXkNXg9W2bLjMf33H6HTcWQNwWxusMra2ptvqSgzgGmWPXg67xmxdJUBV4yn3Ui3o4jFUicB8jaNxayBH",
  "key26": "5nQpibcc49XB5hEfb2HpX4VU2JRbJ8afkaaXd43y6uMhsviS9Vem2ajgAhLJtf62H3esztpnZKVaZro8V19PjUze",
  "key27": "5zUCD2Y1XC14ji72HskL75gBy8jdE5dKUgLs3WE4SL4U48GVVhJGbYUPyofJBFM7HCsBqqGz6x9eukEwt2X5YW2U",
  "key28": "Co6BFGe6X7rZ965GDAMK7QLipq7FThN469cpxrDokNAYwBSgNaX8TZUsS9xXU4QKTQ3X5hdfCXA9ZSYUr7uFGxG",
  "key29": "3cy9k4F22BtknbWAGihWfMkcwihupRouKvuryygSZzP4xFPXYwe1CZTDyRguBPnZzFAgiZ7YDYGwvUEuwvwF6F5T",
  "key30": "2UcsBX3EcRm4i6PYuaY2XEGd3xhcGjYwbCPNAQFh5dmHNTE2ikpH2cmAmRppsKTmXGGPnm4z5dzuzNoCn95ZiYTN"
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
