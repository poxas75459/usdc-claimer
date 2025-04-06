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
    "4CjTQMWw1TviHzBsiTA2hqT2F93A2ihRXiczQ8oBFU1HTwPJi1TSWLESHhqNugJvGHhX3mv1puF82gRs4BCbJrWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45a9ULpH9M1Hqup5uNjbcUxd9iqjAXxsfxA5bpGYDbAbh6VNNeKeaLFoH1gGYuJxJee5j16NkGEM98sLNQ7EwKff",
  "key1": "2ZHaaqZi7ReQu2Ym3d6LDdqZMhFvqVrbrr5YptsGuukes4DFL9XyucVCAuehE2hRPkacGqWmwqBLAHr7hvadaByb",
  "key2": "4uPFevp1XprbUAjo4rq8EYMQeeLSpiKGRTnkd4EfjjquSb1Eu9Kiq5Gq7chLNYZBNB8fBnDNLqgXWcEHNHAhRasY",
  "key3": "NoFS6TqurLRFTCacpszm47gBkNii4G1XbCH4sF84Xie5HnV4woDNw2gJTHoW3xiZtScaFxW5uif85MKAoiQryyv",
  "key4": "5KdMkXtCtQbnksHKdTgpNomFXWxHqzyF5a7Msvaas8yCRT7t3VPNY8jDd1z5FQMsEchbJgJm8P3SrqYvxGcpzqTN",
  "key5": "2vBqxgUKUVyF2tREQ6nAfrcd3tfQLs8rxZHNkm85XaYfCMYqq1LU2kF54cFeFEQniSX8E1GP4frLjKppFgEZz4ps",
  "key6": "4r1NhZReQnXvwUA9fD1GP2ptvgndxsdXPEtUHPi7VSLMKe88EAzkRzkaKaNsUN8Qd5nNA2PHBJQgjdtjP5cT4eZA",
  "key7": "6NDtVA46BhuQTEwTE7Byh5PoM3DK1f5BZwkzBuVCmJdZmRjxpyatx5bFDSnr7S8YNCr5DE4M6q86MXMP4czyxJT",
  "key8": "5STVy4Z7ZdNg8obKkzJASEnoqE5iX6v2t4VvrzGn3bo6arQtBoNdpCpN6zsZBjfq6zpSg5RWg44SmKy21neoEEBr",
  "key9": "4G89YhdvosEGFd9LN2hrjTAiPZPUPR2skcaMjc85YWDs2AEQpf2oWg5QuJbNX3jWa59ArygkKrSxjjHdsBGb8udP",
  "key10": "2JEmJYFiiaPRK6zRjTUG3x8RAie23jbpv8eDoRxswKdPXiqgySeRUprvs3SxeFUdyVs7KdWDACr6uGZGn5RUun8t",
  "key11": "65vTazdATEYrKJoNKLQm5URQC96HXs8rx6J7UTFq8Lo2Yunb2HM6CvJSFHhPNPbYHFa7AET3tyf6DUW8JZfssBrz",
  "key12": "3KVPSFRAAmdDDELNJiFU55yaVd3XXbuCScNoHUe5n1vDkKYgzsWRxZg3fTpRUCHEyhYrXPYBicmgzkfRDMfTVhf1",
  "key13": "3GGWk4MJFofAG1Uye3KGgRWdVeN3U6zTim8nch3eh5Uj4N626K5LpXTJj1APFrkioTcgJb3kJr8uu4DgaivY9wkE",
  "key14": "2NLfrxthVcq3u7q4QFB5VmNosCGTSm7yJjckHDQBuA5Gpqg4eUQy5P4uzcDPYptWjz7yQ4U1dDwRXkWvWWp9qNQQ",
  "key15": "4ToD9pYwfV62ZmDQ1WCrisvpJfzKaNN5GB2pWjw9eGi3YTkWNJRqCSHZMw4JcmP1vaQSBrGBpMfb4oj3QJwqwaVe",
  "key16": "GFK5FjrT5w9LCJty8f7cj6q3ZsibuEK2RCY3PqQSMMTMjwnhS21MqkARk78FSnFMhvoZvryC4fMuBLK7GoQGH75",
  "key17": "612h4gQWa7u6yJ8g2Q2jgg5pS2GKipxoZ5HcHuMX4yfkEwxwgLNrQ7e8CRGfWygwfL2TuiNUGKtRCFq4DZmcCLSc",
  "key18": "2dVrdUEsVujH5oFmcT5oK822rk7VTGXzdZYvpcXhxz9ZJ2Nq4jE3ZRZHtNzKUv7GjAzFaSawpwumykesz1X3VaGr",
  "key19": "5vK4VK4Cim78T57yYzCaTZ7sWQuiqTKb8cJqXViJQJFAmE6JGdbXmuY3QAGZTCXWes3LCLKq9xH6MpoLhStrzTz",
  "key20": "29ThASfWu73xtzWQnGTb9KXE8ERuroPgBHMNdUZwmHQeM9Fo5C4GyEiN9u7NUjBAB6DEE4CX8Fo7s64VuFWYp9ex",
  "key21": "5nqCTuTKGL5tbnwTV1Hfdf5duk64VGrEZD9zVX7aX2ZfjRTZnzhvxqsRFsny656J7jyvy5Txzo3yUtdyfqrhPggy",
  "key22": "48L7dFtGdEYPV5m7qGvwuRnng5QXmVzSwJLycsM5E9YPeqH8ASYa4RXPcKckaPMDBGJfWYZ4SUjcshTNpogWZYis",
  "key23": "4cvJ1Rz8ykzp1sYDZL7Ba1WT6b7gWcxXK7yaTXc4aqaqUiweRQ4FNgDgRpSAe8MikQbLtTRzpv46EzfajNSfCGDC",
  "key24": "4fBfJvN9Gg3AgdjCNfZ23Pw5LaErqpYcTcC6S8CUdc4B2fiqvDoBTXrLbyCNWHUWFuLhjBCgeuov9zynyHugvLPf",
  "key25": "5Ar85X3jB1srULMwitPQQbcuuW6yPnCBJL5jnxHSybx55VHCLzNBnuTaggucrMHZ7JXL4gg14eUXnKPurjszvMJv",
  "key26": "4fc8TJ54WZsGbtz1js5w99FgrFVQXWXDt78JU1gT44pixsMNMzGptLe3QaxtEweybQuyGcL5XdeTd9Cyz2arBzUp",
  "key27": "EEJRt7X19QnXbKSAAt3Dk8uGPscHNPLdgNDLHvGvQBQJFZZTDG2HCYgLyamae2NvKjz7fmXiC9DZnnAtKJtiz8s",
  "key28": "49HB9NDDg7hi4cAhjjsxKhZx6sweXNW6feXpYYPFGb7JmiGDwEVmZMMBRtSBHYPcyStnDm1gnZWXAGtiY9fPtBDn",
  "key29": "5vKqGcV6T1SW9FgbQpMjKhfv2tyjqSBWawSaPT4WvGUiF9AEeZgU96wRpEeBHjCAfEX5hAoqxDY2i2vw2a82LfKP",
  "key30": "5x1y3VVfPFE3DBbe4qVJjKAT53YJjZ129ZtGzTsF98LiEWtQfGhXudHNXtSMGWmNrfM7UnoNedpA4DaNRJ9J832c",
  "key31": "T6FQRpAKyxDNSruFKUiqQLFJEGBJp3sPofp7wopLonibMToxzuiDSGAFjjE5GCzC9SxNFKVSS2oGMZNJ5iUBPUV",
  "key32": "61KJ8wLzHprU6Jdcwj8ULi9cCy7ieWbHJFcCnqdsNowuGhKxuzHqaxGPuwrhahnV81UEsSfSRQo2ZqoKW3S2p1w4",
  "key33": "4D6ZLvDanvZJdu9XLhvF6dXFMeESnrUVdDdJWifS9Edd7Ro8bFae4oDfCQm2YJ5p7asajo2Vvy14iuQWwAQ6J6Ak",
  "key34": "xHnPU1KJYe5SDRsD97QzEjVEhjDZiE2TeYqReezSPgVFBjHPBmwUi7xXeVw1SiyShmswWyaMWRtV1WeYhZFC6uH",
  "key35": "3YgTuZZXgrPS3bC2TcAHg4m1vPdgXkQE7WyEyJi6xKkC2MK6DBHETSt6qZjtCyc8A8cXdxJeZ8kCsyDLcXNuExze"
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
