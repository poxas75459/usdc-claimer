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
    "T62Mv9y1UR1ZZNZJjxaFB9wwEwiFhRpLmHYy2tinBGpTtDyrvq95ktRWp85HUzDjagKE1zmsm9RPEvV8PZkucwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UYY4Z1KjqCugLDJwwAbpzk6RCSjQsZakjRrmWoeNbSuctKKBEY8uDknaZ1zMHuR1wx9vAYD37iGsQb8YWzjyEui",
  "key1": "4iZZ6tijX7DGkiDH4JXenBocivbGGodyXa7hbGMTVw1bToqzbAxgW7Ge8r8b9pkDn8NisSq8De4C8zHhYqSXkcNM",
  "key2": "259mSJsEeWh8eixjQtmXuo5mgYCSX1LyGQsLnAKC5xmuCAq2hRmPCkmZkxrmd5pt2d8HJfVuuXB9BuJX42RaibKn",
  "key3": "5KaR4kpYWH9KrBwdC8ChseZSafwG42KhC52kDEsg2zgjY7MdC314KicCTimkvjmpRdED42z34dPqGzi3m8Za8FV9",
  "key4": "5dzLRFgpoiKRkjkaGjFRjYYYd7MUoZYKMXf5Dw8er24MKmyak7fs7BaeCGP3SesQzUA43tW12B8DTofKKHvU1zJN",
  "key5": "2opzKA3ZyCURPkk52p6Y4sQ8bepqdSrTQ3C92AXgo5P7SghP7x1ABknfkDe6DnZohJ8otxZiVgzs1hHCnHCX3pf3",
  "key6": "3rhkqn4xH8aWjrtxPTsVqQ5VBUGwx4j58v6o4bqbbVBFm2U4gdv22qRDAVa4w7hbaMZruVWFbAzXm8wnhJ4t2ckW",
  "key7": "5BwVLXtH7cnU3u5uZmG8jkHG8f5M7aFCWnAfbN2h6697zq9gY9Us5NsX1rwADminXC21a1yEojkSQsUPXgV5BG4u",
  "key8": "4KJkBUkGoU3ym5MTAEv41T317LBFGp1CpdpUVEiw1KB83ehF61xU9h94HacAL93uXEu41c5pHsB6d9hHc5MFWqBd",
  "key9": "4z2NNAfmeh2vgtGkCQk3U7WU4HXDpZq4hN2hvn5xxaGX1bonnCADqmbnDSeS834eH53HCT1UtjV4Jcu6BjcsMF71",
  "key10": "7T8BKNF19EFnTMZ4uRR7t7FBwQspia1NEqaxnFCXRs8fBHAguqChkaCo1JBXuUzgofgUA9MFt8DS28NLynd7vfw",
  "key11": "3uaWTPkLiQnM787oYNfANfDfaRoFzgL8sEYt9DfnkLpHmZCSMh4FmsBLPFwWWcGbCJGMH5E97qeLPDf3ETWqbD7n",
  "key12": "52r6aZiLRTTgRYx3kTNwtiyaWpzL7AsdcdfQcighmhiEJB7zWJLMn7QDyfcf84cWWojmqpfFnLgBY7vGhio9EoU1",
  "key13": "33YvFoTvxP15fE3PVN8UtF4Vwvh3c8wWW2X36oZHSgcbZspug4KzeviTmqt47Tbaita1Z7yGjWvotRCJ7FSsnU8d",
  "key14": "38tAKFKM56n3j7G6fjNqUW5zfWSra9vsfnUDicboPRVhjLskmDjpziSseuVEEuWFHqzC9ZtYvvDyGjVLBGYUCvQg",
  "key15": "2S1p4cZaKUHZgbVGjyetz8gqJmjr35e14da8fP1LkzXK5YAAdp9EwAe6prnPQS7E5giJyRCu7FVi4dPZBbMYRZBz",
  "key16": "52bYq1zYR66ZMe8nitVyxMHUEo1ByKZJkPLGQJC9G8WhkS9FFATWS8kaUimQobUR1NGHXogPZR3ji8tVHtAdqutr",
  "key17": "zPTtF9W2KJQdTqfnCSNDoK6pkeXa84j5inCfggiynASgmceTg39pSa4FzzPx791XgZW9ufRSj6FLRjqrALRrvf5",
  "key18": "5BiS87mksBffpar7VwJ1EJczgBiuDdCoc8J6c6TbR9aHKSVg2BkQQiE1TvoQRaUCZFtz1o1TuYCreHY1QaHNUs3j",
  "key19": "cXkSMz3J4GUrVCyVDL8FUL4cVA7kKv3HogS1Tg1KWU3iQoq2oSgE44R8sUdHiqWuyVcCDNUbrNeQc2RQWrNY4be",
  "key20": "2ZLT2ychMakESFD3XEFLmz9aYmUeppXAZ367CWx1HUEHRFY23qoqqzHuWXtHSoCmfHAFjGrTyW8BVHA72amwC2N3",
  "key21": "cGdGM6dU46AGwn9mLSFZ1VvSeaiQxG8rMxt81R7sdUXYEtTmtu3MZLVCzyHEmmmLc1fv5MvSdk9LqFrj7qPQQ1T",
  "key22": "3RMBSRZUEEEybGuQZR32hJGv2yvuEADJLsroUjVZAoN6R3bTgPBTjRHgVhUXWopesS6ayYaUoMsVPZVdhFUS1hvE",
  "key23": "2gqXMkUifdkLqmxM5buEakLd1DY88vZtb5HniJFkRfcEUTxPYs4TEfxpfTE5qX4DvooMKN9CLJ2yE2X1FKkH8thX",
  "key24": "59aibegyeyGeZNPzjpLp3JbgpJJmZj1NzYsY9jrynV9oTuSxGwyMEyU9EaMYMYnAHSic6cBKGfjcQEbKeUEGpgSG",
  "key25": "3V5YApcrHZNzDrT6TSJQqCQoSoVZwHHPM4onezCX8zYoBihE5GVVFB9eTXgErmwF7soYYPLkMxAxxeEEJsRSWPkU",
  "key26": "GgWGMDAgZWxyGje2qGHdmA7ceSksRt1AvoQoZtY6o49oqCerih5VYKWcDocK8PbV1KtK5a2NYrgT2xiuu2LRduj",
  "key27": "43NndQM1Xoh7U9o7Qm43fd7PYhyZypTbMEYkEYRG2xCFKspPm76mDsxXRm1ZTY4QhPdoH3xFDSwa3GPanXSsreu8",
  "key28": "5NMxJ6tgwMQDkQQ8P4bagZZjAZ52XyGqR43sTc1uxXweM1hJDUbiHKGh8j7JxUV5ah3aZ6gSDJk7BurFMazNm8QU",
  "key29": "2rJU5h6vF7Y9u5uUoX27cG2h3ZVyRVfNHMQTdS1SfpC8uw67eSNFv7om53msZ2GBXiRi66aQpCisxUNYV7w8kkZ4",
  "key30": "VBz7oikUxXbrrVXMKrjzcTwPUonC6YtTiree1CdTB7cF8VKQmM1ukeRxJPAH7Z5Nxx1kyYdRd4BaWzxKxHMU6Z4",
  "key31": "5pX4wAfagbM5dv8qsY9gA4bwxcdUdKaNtVFgccguHsZL6kgnpvmJyNdEu4tdXeNnJ1cAJ61QR39t9jUVoKBXLVtU",
  "key32": "3dq5uXLpUuryesGsHvekAmGnPksHUsSGadYyQ5xp4RATHdzA1SaAHD2wUdXKT1XqoaWPHCEgFtJhyRcN7gNHwokv",
  "key33": "4Q1ffw7sXY2ei8NJVSeKNgnmsPi9RuugtLLbwBfnhkJ4HnXfLQpNsrPc5nmEKJoXn7Xaa67b3sd293KFpxLaYE97",
  "key34": "2Aaq3rejY6RzbuTYPEvbiK6bRJjTWB9m49FDC3uvGrpSZ5TXndvj9NNBdautAgwqD1gQdh6FdRZFfySZu5b6ZfNj",
  "key35": "5GhYFLetsUMkWB8LHLK7UaPKP6BveX6HsEyerzbo9NaQDC8fnyFki1k1bZeBoJG3WMfC44nqT4MWgoBXRqkkfWSb",
  "key36": "5g353R6inHmyXD9yGa8iyZ1gXZdEBbj1vn5kr7CDRR4YR488sGwGdP6W8rB5quCREVA2FjUDUJoPty988R3ahZwq",
  "key37": "3Xpn6Uq9eJGgN2ppXjKsLbXecg8iBX4BjKCrQaTMJ2zE3iHHuTx3KqQHuSK5w3qYZ1y6KHEt5PEQRBoWGqvK9S1j",
  "key38": "3cY3D7MX66SHXqpycYtXbiuiHtctDMnAqHJC3Xi86EhFFNkzfXX4f5Q1F9Z4E63qNNtbCc1PQd9QYAVouqSmXD56",
  "key39": "rhZdGfJbKNjW4f9MqQs9pVFepseMdsvcfkv2RpZxdNbJxvkNW2Pb5wiJcMAgfLG1J3N93EnnaXe25gzVRyZ2agR",
  "key40": "3DrLcSbcm2gtaU88J6HYMGVsgCzFvaajVBmgNJ92CoqnNw8JDxV9eG2F5n73iVnDdiChcaMtGfkhoZTsG8EuKUDv"
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
