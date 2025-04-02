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
    "4obWN994hNxoGc97BXaPhzTwdjRkgUQyvKDasqf1QMhJj2nMN2ZsHq1bdFKU1jo5qenYBZPKkMaY1pNcDswMD4WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m4VQPPsTybDPARnRAVNmB8xXnAuGJRrnx3PTvXkmoHUS4ZRQA33nLUfaQyLDAA1ggssugrKwTK1j2EfrYeitfww",
  "key1": "2iPcTdGdi2sc3idpzABGoxXncczcA3daxuwvDrUp8i1qtpBRsmSzLgg8RcJiQhoo7tGg7XjYnQq7Jd88pxPKyQGj",
  "key2": "oQuGa9E9XhU5GXbhjeTDCbJuGBmzq42KjQ9XdeSrzXipMAeW4P7mNuPzxJENELn6ixpkMeN8uukTnigaZPuVqtQ",
  "key3": "2zrb1vKyEqzCByhymdf4gD24incYCBxAZLKw3siWcpuJapqQ6pQmuEbBpPLBoX8s5WbWJNJvhGLQzUgnTqEdg4K4",
  "key4": "3EHjrXGPdkhFt34MDLJzHBzDtfkJABE6fSXVqzW7H6ZJzPTnURBQ2FU93iYodryyD6d6bga9SABAVqc2pafNmcik",
  "key5": "5NPg7mtUnF7QNGDZw3UPL1wYG1maw5LSJ1JaBwasrysZGVwXvxjzvULKvzujUdE4aPuArzbSR9Lt2zVECcCyCg3k",
  "key6": "3ZuVbfs2kTv2NH5fdJrU9n34CmPuuvqV1UNc1hL1xqZZ8URXQLBkwP6MQXUANB3Ka8BTz2xC5j2h4QQk4Pxfnvz7",
  "key7": "4i3qxxh16qwjgK6yDcxVZyL22cQNEFgiDhTbXgKnX9txYwtutE2i6xtn2gCMoD8xjt4YeB2KHtCyn6bhezxTUjgp",
  "key8": "5QWTYsYFsxbz3fQgmnfJyPa8Be7gqYoq186qw2ffEtbXLdGvk7EoDWQdPNY4CZfPKFGntiu5GT2ZQPM5yZ8YbdRY",
  "key9": "53LkHXzP2BFMsLkLGqMV7cmTyByKi1UUw6bbboe2MYuEDaHJtqM7RN5ZFuTLoeeGBFyj6YNAUh5oeY3wNNEGGQXV",
  "key10": "2SaAykKBUahwuTRfe9vBCWueqyaewayFuwVwNYxsNNCweLgcvepfGbZkJa4FmJyxoC1wPP6vJ9Kb1arTFUySKVSB",
  "key11": "3js9x35siKh8MzEFnd9GM8NexiQq6sjNXsLyU8oJBTHES6xVzwqGL8sc6rKHre6tscfcZqztnV4pBPrJxc4g2ApL",
  "key12": "4EfGyCnsXdSycFFKPseS1WVsRNBMgoMLcWDNmA7HxmYUcoq5pR37wNMVudgAw1cUawe353TVqWQdKJVeLUW79opb",
  "key13": "4Pdigjsr8i7rt3LbDjQzZGjPuiFHEfmRcKSQCXQrhg29MchHbEUPHUtGG4TaUXHmyHxmu55QSwkCvoEmXX5DRLWz",
  "key14": "5k6C97qD2ZzWrYinFfFFYVCYzCy94vCWkS2ZnA5ykFaNGr2DYYDoK5uNr6WxgLWMtTK86nggZfbTAx9HjNUYCH1t",
  "key15": "4ZhWKh164i9bxuzojuapZGP2nL12mkVr4UHcCnE1cqor17ok3XK5pRW9BATMKp3myA8wJ8twBYZ5Jd3DXsQxCVZR",
  "key16": "3hPjPPnSAHQfqfHVzAiwE7Be7seB6NBRAf8gtRPsnC5AQJdhFiy4Ve9xSnAp4mZwmqoVtSQE8jLE5QnzLFfbV2X3",
  "key17": "35qBzMW5y8FR8CethXrwCBAgguZ5BjdyuWY8zs627fMH22QKvQFeFUXZE4gA45RcMCxByQyJWhHp9dQpnvTTE7DF",
  "key18": "nxmHz61j1o6MtxsRbyXbCU1wjopvNCPxt5Vkg2rBwLbtNu3vAtTwGW7mkTQgUX6YxruahShz2SFTGstUo48xRBL",
  "key19": "3UfWiekk1QDFQ2d2nZH1mNj9pWLHxDSJ5bmHUjfTo47uNnLMzAaeM5V2eLGR8e6cMTiETkBRfcxjnzJ9LoaeLL36",
  "key20": "SAKMGgewY5PitcXxGhWmEGH98F8FoquxAmMFFdo23K4fsCYaNJ3vzGbnSohAigbn1FMnZUbsUMa9koVENiVLSQi",
  "key21": "jKKmgkDtoXtSTooiPYm8YD1pKrWEG8uc3Y1s7N3udqCgvJmiG4H43nDfQjUSTCLjnegerXH1sM1QvjujVnWvZzT",
  "key22": "4VGinx2yLnysDxxMqa6PZTEVwvjUr1oTELSAb3mfRWthUJ5oezV9WNqrK7B2hK2G6SJLTd7hFHu8cyxaXj21MhDF",
  "key23": "5CvWUmxc62sRKgf5bepMEC744hSbiBtTJ4FfBx3YtQDSh3yhCJ27FpE2xb4rXqrfyhAj2aMTWXm7DQhQTVoixCRz",
  "key24": "2Hg3gprmFGBVib3Ws31LMBafQ8N6WRdpAsXMrruywCrcSZTiyBKRMoxbmCpraRCkN8CgAEM4nw5pQGxXCDAYSRzd",
  "key25": "3h56HsAsiSYyi69GQFZNf4fLrB5Q9b7fjwxSbfs5nEiViT7mu5Z2aEdTXp4qYff5MjvbtUCQS4TzGHAKq73fZqjS",
  "key26": "3v6Vx2vGXmxwAVBZCv7rtJDe6MCMsKn5U239fJMeiVo7Vbf4LnXNDLmmDQxRKjWsmL2KQf6NiKH5NabBRf7cxwPU",
  "key27": "3ykgU4924ba5b8hKYhawLTQEEzygHvMq7SM3NFR1i6isarSqt4MfSjdEHZECtWVtzAtmkhPnKmva4fNbwrRKA3eG",
  "key28": "3qhBHjMx36KRCoovSrYzaHtmkwPDDJRZKTzd3AGBBe63JM8DiquxuB3nREiHcnhKPahi1smNQEVfzE7hCsac5e5A",
  "key29": "GKDjAvmi3UWy3MLiRf6NWsfnmsz8jqsNPY9hnYp1cV2aZ12bKWsyTpuxfvMALEKzNmJRkJpHbqYJ9mCqCZKYoby",
  "key30": "YdwooTSU47iTynPufg5q8eXzNqanhh6dDHnYtbyQw1iTDQjthj5gjvkxafD3xFm6rraPcrShAz3EUbGmzaHzFsh",
  "key31": "3kveaswZNAcNwWnf87cg1853wGE4SWNt6Ni3r1M2LeZ5aRpXJcczE7qD2WBntmT92poaEmBLc8vn5DQQRjWrAvQX",
  "key32": "5Jc8uEAsm1wDnYgyydxdgKMEKHYjd2eppFMiV633jGQAwgJmXpgRJDK5TmZU5zPteQHGNqx5b1JJHAtUCAxqfRpN",
  "key33": "4RG2EugJnDsCJTN98roikEXwiDp8CHfBu7vxXAUPYHkHaS4JMCjG3Si9C6mkdQTXYar3xnQm2vPVbjh7RbGv63o1",
  "key34": "52bQUPZrtwiAbef5WQZY1d7vcphUwPYwyLyT1UpWWpgeRfkY72sBLDyt5qWwyYyodUVrwLZ2MNKoJpHFqtX21sVV",
  "key35": "46vh1Ntu2o66oEkouQt5mGvxaxLVAQ2zE94S2Vcwmy5RD7oM1wCZZZF61WuZVgACjyEMaiPJZZspMMYKfvTD3WKP",
  "key36": "3ZwkzHDbErkD5rNxDawKozTNdWqrpKGk2EFiAWzuV6YkZmRpaTfafNfvSxG3GGyMECDjBNzSEAy1mkb75JGYKgcr",
  "key37": "3wDMcVXtF7Ty7PLLYFFxzVaPQosnaSTzGo2gGi9uohXQji3G2RQJA5PJNSWvoKMipwNvqUBDZ3yEfc5eMhQpjUu",
  "key38": "5shJDk35amgvWef5bs7FFzwjUQfVp7T9wu6s2NaknaA6Nawrv1jKvPcgzw7bMqH8MBZ9kc7qW3td6pJ8CRVATJx8",
  "key39": "5jurqBXog2bFUFFLJz9p7uueV15Bj7BekuAYpzHUUgbdmUM6iDyvyyPqdg3cdeMPqUuTTntxcpWvvddrqVv9WbAa"
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
