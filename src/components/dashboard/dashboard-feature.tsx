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
    "2hRB7MWFTHs8c6u8CBmCPrr9bY5g7qV1vW7MMH54Bw2UcFWmmHVgWQWFmgiKZcELexi2VQtcE3hhLgfWuF8c9MJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5okYokviSXuevbJSYaWG5TzMbfsHogn964UgN6g9QRXCTBG9DMumPTUN1J8dHe2TEmhqRmZhT4rpQ9pEmtEqn6kB",
  "key1": "2rStc8ViMvs2LGrWbVLYd8rVhvqst2buDqLA2Ygyq6tbuCcV6KkK5E4MWjsz4WhoNMERYZZWLuW89MfMXeZYUee4",
  "key2": "3LC5aY4qeezTX9evfuWU49XKowuKJRbofur8F4hZRcJbGfARXgjbhm3FUGEeQm2XyjbUBK73bC7EsZMxW9ApVKMz",
  "key3": "2jjcovzMkhevKGCLmzDuf7srTEbt11YTA2wj23GreVAHxc3Bwms7P1y6RetZugLrmfxQbxtjfHZGA7X7Xc7mBM4j",
  "key4": "4ptKGkMCTX7N8VXZxygRv4wFgRRw3q7GwJan3ctxDp8AhfnBERGyAVLW4UZKLmdFwrKD5qeThReGE1SRQZABAL43",
  "key5": "4fUxrM9oGHjEn9tMyF6vKpkhP1HqCDSYn4RwypEZvA7Xb729fNnnBfDo3YaEjBYF9EEinHqn9SUFBVVKNTYv2Azu",
  "key6": "4UHpDpJVryHvkdg2AXxHHUhs3fKBcnKmasTYz3sY1woGs5L97TXJcTA9scuNSnZwVhTaEc5VgqJymdxFJg7AqkCu",
  "key7": "53UUNEC1pCJ9ahfQpA5sEzMLYoG2YMifyYtoApjrxULK3wmQK5uJdPQcTiv44qKyrmwPtLKkuf1acoityH9PaLdH",
  "key8": "5GM5B62Gp36zci216oh9CiQHXcKcfn5cZXVF7UMhf8FyaBAVG1zRuRLB3odeSmZaPjWAusboQ5mYH1VYVUtzky71",
  "key9": "5oKig2KhNSdZWjMjzovknCh2pP1rd47B2CJTxCni6x2tLW26rqNEMnF253ijmA6iKjQ8RfrmrrgFkEoKhoxuBG6f",
  "key10": "35Cfku4m55E9YUj6z2tPdfMzmPi5vQYHBJmEQz5hhhhZcyJSMTwZ9ftnS8zKyMgD6QkE7uFtsJF8p9GvLW2cFjWy",
  "key11": "4BmwrepC1539FYuSzaCm9Sb1bA2BJYqyF2e8z8gz3wJudDw6Sasuxio7XzbjQY1JphV6wprqhdEGF4amLVPg2zqN",
  "key12": "36NTQrgsQXCunfZ6hEMNwFivEW9gSBXApPox2dYFzpghtkvbPNTBS7UNbp6yW6C5HvDxfBxgcpgQHDpV6TkQotE",
  "key13": "YWVTrsqYDJTF4YJ7xojZfL22yqzhDjutgYRMEK6aWjuKZeXtrJ4CGNZT8UzsW12zx84DDogbenHBsWLHDDDy4y3",
  "key14": "4xTLoWiRxbPucsyodgbrcmE4MxapWrMR73KLCyVLzAB2Rn5oZxMc4UVBbxKXUbJmSDm6uMFqdQKbqf986M7TduWu",
  "key15": "3HPGGRmzuCWmnwYvoQH77AqfmaKK15iHJ1dk8CYTFsnEbywM8BQddd2k7vieetcfeMyAKHMpZCdRQE2Nq6qsYf7Q",
  "key16": "3pgmgLvvkveGQhJrgLG7sobZAirCRF1FaKG6Vo9XP7gRbVd9GctAaF4xHbWxmh9zzpQJNW5ipU2NPPwjFAWpHeHP",
  "key17": "5GQoxT93PYL6Y9WiPAjSMHSC1APoA6yMVzqPWrTorwojpS2NiMyeUGMYA3tAbJUiq2V9Hat5uJorXNeyWrMn9p4",
  "key18": "3CrjpimAjNLfpJHDMZxsEyThCiskC3wb8uB2YAEuR88NSgHuko3eTGPp6yPoJTWu3WkuL79JbDbDzWavcH9BvzH1",
  "key19": "5Z5A2fMa5o3oJ7J6g9RCkbiUkKRm8UWrALUkyxCtmdMxCNXtkUsJwMRJKHk4woe2EUBakR4D3uANKDKMJgkRWSfP",
  "key20": "4rNe923HyTe789u82QrsHFRVngomN4rkdWiXZbvzGQWxsFRMzDmxgNrAycbKRj51Yr9grSX5e9GETGn69PkESKAa",
  "key21": "5pJ2d5WXTRpHZgv5KAYiQVfFfeJbG3o5Z7YaLxyzhWtWKWLY14GvXo6ZJ1ekmQAk5ZQukbiVsurhBLpHBd8umCim",
  "key22": "MGRRZGuQsk6Ge4bc4uKFZgEk42gK8iKHL33Znu8pfmVb2WCSTVhNyWLPgv9uFBR8U7zdZAEbPZ5Ra5FS6ojGdBW",
  "key23": "61hpFQvq1SHYGsZYhJHHbRUav9CfYWbpSdYBndPZ6wgJv7aGZL8KMuPeHzNTkCRodyod5q4JAwCF3KCWV4Rqtjb9",
  "key24": "3Xmb8qjfkZiEnazLDdgCVDNWcqMGGByh2BjF8h3SEerRtrWnE9ZjscavERhjZ8Ccb43i3anyUFp8t4tjMHY3GgyH",
  "key25": "ipzqdTbMv5eQqq2a5HqAsjQsk9u1Kd4AckgYsg4brPuzqg2a7mEfGzhe7sDPVxQ47zPVJomamrLKxfr4gFtLo11",
  "key26": "2owPhUgEaCrMnkP2454jeTvZz2MdbQ4F1v2Vtw5F1MKeL8iwu1JEFZzx7rquCUyBJSr5ZZrJ8FR8zazC2pyqrFJb",
  "key27": "CVoGoPSJ8csY8AaLnjZZZJkh1qQXmTZn29M1zNUjgi2rnMX7xkvNCU5nkTmEvFXJw2GqLKiNYHR4GT2P9AnaYSh",
  "key28": "47yRz56jC2FjpiWaeG3ZHKBJPTtc8yhnLXBVTT3BemhYLWK5eRnaSN7YyH6xqAUTnmiUGf6HRBsmQgdFKStW9fMc",
  "key29": "5giWCiW4Vh7Dw8gsrKH5KyNV5PzvjT9dt9stTnLdvQeaVXrFekB6AuQzh6pQdixRgGPsKqWZx3LgigDcTrQwp2Fg",
  "key30": "3oKrd4UTQy9rSvQXo6nVvf1TxRYZkGJb6Qx4RDwF8c6WZmaSfk6JHFf6ucRmjVBqfiVQZkrRZQE1BqFeWY1KgbQy",
  "key31": "3nD5gbhHbf7JpGmm8R2wxdtv5VxcXNGfJNQQAhq42R8JVXehQJZmSKqybfjz9MbAfN8TcYcWisiGc3YssE75snaA",
  "key32": "51Y7zTEtM9xnbJiZ1zG3TTvZw5RcHjrhcgnnXFXunRoAiTnWbAbj2C4f1Ume6ckCqXzgz21ELVXiQM2mohMduDj4",
  "key33": "2EtcFcmkNB5fGgTeiT6CzNB153ToxuXTbfkA8pYTqSNubLHoFDwq5PvXxocuRYkaDwnS3LMXw6nLB5n7usA7NkxU",
  "key34": "4Yb5xizkWreh1ark19bHeSpR1U6SGRvHH2wYtbLAVTAsEDdcKZDe4KGWENnDUvzvxSMpBHR6hZc2mFVAxxavMVLX",
  "key35": "4E3cZ1bWEwusmp6nSwYVbZ1vGNX9qUfLxp1bxkZiVoU2p1dF5G4tUY4vHmoCNU4XhCfvmPY9SkzLNE2wPVsn13KX",
  "key36": "6zYqjovkBthZv6Xoi2DJSoYJShc2DizeJPmzc6Se7NwptRq7tE23JunqGDyX9QLQjNFxBWQ8Ak1P7TTzevRoteU",
  "key37": "5GJ8dJV3werLVZjHQphMY7MKF4TdsXRrrKm9X5cFiwdznh1Z1j1oZAazFs13wyQpK1H34tgUpjgoUwD8FB5hbrzh"
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
