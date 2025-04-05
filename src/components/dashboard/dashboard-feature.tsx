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
    "5PozeXmQW12NqoBMVYpSh6T411jPAufERNsso9HNXEP4VqZxwPtRKjaauockwqi4pCuZrK4mxeMf74M1R1H43oTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXes1cmJxpqPrmaFNKbwMP1qGfEUw7iecc4qgMwajZA38jhtxrjan72iKxjxpmg57PzfiHwqqQFutRZpLNXWhZx",
  "key1": "5pxfC5KWsVfEffCdvsM7qKPQG6gXEGKtxbiMUfCWH8LkaVe9uTbks4pm78bFpVA721ZdcNrnwVAYrcSY3UjMwBDS",
  "key2": "27ptq1gzwAYrCtACRUpYTbcZ2kNsRRHReZnVb5xLnAJtcghwFAAWvTFK7mQp4EKVr2j18nNfKSjUYStRWio53oqv",
  "key3": "397Uj6wTKXuRSVXMTMWJn72g63idyDH3oGzCHdj9LqRLt7wihx2sGAmN4ypBwiqTxH7iPrt4voFb2GR5MEWeLsx3",
  "key4": "2PZ3tcte5PwbhiWSbrKbw7FGqPWpAVzFgXf61dpZWfvbKJLZh8uDLCbEzDNCRX91NEbfrPfkyyHroEJu5pQPwYo8",
  "key5": "2ymy4Uz6qjS44VwUovk6NTpQTiWcxEXstXdKFAeUMcfL3xVK96hCeKWyFd68CsT5DkApXFSi4dwXNYscfAzmJszQ",
  "key6": "4on6AbeKK75r6eixVMVZ2EZ2xPWbyT7SJQWc5QNPfcFckfKfnss5MW8YETmVfF7D7MTip317LotkHvjtkSg5JJ3h",
  "key7": "5sUEhHmqqT6ip1HzJ8V4JB32MP9ZtvYvmfkWKjTn2h8dfts4e4P5oiQGaoZWbAj2Cd7BQupyS8unqkngYZjobiRx",
  "key8": "3Nc2snnRrBveG9C9HyVYYw5bVq6edXvYzGkqnopJVC4o61Bo8yK2NguFtkf9sWiKbagoKRtthassaGZZoho25nQw",
  "key9": "BMoMnnX64fefurpwvoyutQSLTJjtmP19qcdvpEV4fimZMeiZntmMVmBGtEBBfFc67DDuqPnxv1xhi8qxWpzmYUn",
  "key10": "3ahN1U51Jkmw3Ev3xfV3naqp9ncC231mRAVU5WU8UvuqBAtVDaAa5U19StS3GrCtQ3fmzb3SNwVdnKuqks72FPRw",
  "key11": "3uTddNt5qZ55xKUHm68oB5pacztSRGBQD5FBGpLd7LBZYGJjmfB8FhnFYUK3MhfJW8PPK1T1aiyuZWry5XYay4it",
  "key12": "3efWS82bM1K9gFt5LVxSFRkd98UYURP3P5oMFuTEVYZEFSh1wDjuXfXVHCJdkw58YWFdhTidZAt8cNuobEDR6jsH",
  "key13": "5GEKr9jjk9MM7webeLT31CyCzEGfgxyzh9NMQiKYfaEvyXResmxz6tYvi7q1WhEBwpHXUQyeP2E7oA3rUS3wQGPQ",
  "key14": "4K7EqfX52Kbrrg2L4nzNvqZMK8DQ1jF2TZeFgkHBFnD6SMp3ZxhToWUhfiCt1bqc8UZzgu5gvitqFPrJFLt1RKDG",
  "key15": "4UQRXjhqs6SudPvavHWtdXzmbBDZJExnjuvinzcj5STymXTFxTEMLWJ6KZ8tnsBFM6fDBDp4kmhyamkhNJfJMV3p",
  "key16": "4gDUSgMfqLjVwNvw8p1nHjuYfzdv65kPnLz5MdD2yJQE4bjnvj6hpvgcYLknLStKZ6bnFAu6GFjUj6vQSBe5q3QJ",
  "key17": "2SpHA5DBAijUkMvbN5dKhHBUtc1LRs8XEExFwM8cqDZ7FzMjVkybSu42d93DZH2q6gfpYVe7WbJBYUyTWFwQjmFX",
  "key18": "2tay2j4tMn3bD8xCHhj5V9GyTyki1P7Qid6PjyJ8KRCeFkDbKQjudeFR3FqnF5w9dmA3kSBkov51cMwenAnzPh2T",
  "key19": "3x29SFk2LHSdfGU21iu3nNH18jHUhGzUGGkXaLF9nu2YQ3JapP6zKqkK19AfbibippBzVaDy6exmBihK1uKE3wHt",
  "key20": "i7cHHihEb9L1RNignMimdW9cmgGJCa1CtGVEx12xg61pcbSVDMNLqWZ3gDJHxHKn92C8cpVb7nB2raNFCP7wWEZ",
  "key21": "wvuttoHNubL82kWCZ7zg1616RNBipo6KRtQPbQNbXPHPr58HVqjkQox45qCHLvhxYTtkKTMw4JML9U156SPouD3",
  "key22": "61RCSewp1xADCisbmWoyqKuKYkjAsxWBwGq2mPJqBUAfm5TX12zUiWGnB3UZfYZZVERgb56hjFCyxb8fF2sRKYxd",
  "key23": "4UmySLHXkQ1B7uJ8m6ZkSH3MWPfnqrMt8bk6Yu79wtEpvxKaHvsGaWw11tQEhM6e4bb6bh5AyS3A2v7pFtmhrLE6",
  "key24": "4tG4LQqQ1xERMviybz9DRsVXAezA76WYpsBVz7tcFgB7PRzJgJuWKX1P2knRDGMcyFpKTZtCiFKrN1mnCaK7uYFW",
  "key25": "2ZAQ88NVzYKawSMLVv2YKJZyHU3YMS5AVcHhSpJEVprvLiKSNVhQc5BN8jjx6QGhYkSGGBxTWMt7Zc2oPKJ4MciD",
  "key26": "5jy5TeDKFyHMyocHQ5PAGbQqgASYYjAepohEq1tWP6BWWKUPoa41ryYD8bieZE7ZXia5iHRr5VYrfTQV9ScCqotW",
  "key27": "5ZWPZomsaAhscHGrSCdKsGsQCe2QYihtu37nZTNoddj6qdyWbnvT7x3VCy88VpBdzACjHm4Ai5N2FAEztbCF1Nwe",
  "key28": "62pgALnyGK2FqcbfmYcL1LR7nQWQeZ4ezW3pQ7xJeQXvzyZGSbdmvQWTPaPfQBwztrmvDPPJZEU897XtGJYohNMX",
  "key29": "3LdZZQC3dPZgYeETw75ZKab86QbQeHMyqo2btrwwmAdRUaL84EVRaEr8pDhdVKZQpN6jkARtkFjxt2WFdgiXTuAN",
  "key30": "3fwgSpLEPz27W4x5te5qA1Qgkm299iN6gq9uTbKcZHKsP7wsxNAjPDUjDLm4WdjSzkunzkFYUk8gc5tuxvYUJKKH",
  "key31": "3kjTMZmEa3Bv3U1MDythauqzYXhcedX8Joqkdd9a12aNTs51CCwoEL6FoR9xmn3xRkZsPFCHe2n8tofePXeXcxQ5",
  "key32": "29bY9aCHuWj3jFrHKRGmtxJf5Wu4L5BzpzY3W31kxrXhyfPnAHqa9Ta7nZZYJMJGYkBbwz8Zo4aLxi5YhSNEQdS4",
  "key33": "v5rFy8QWYYGXHgpPTevmubWhD3jVUZKemGTKmYLUq8q9eHa27seYuJkZGJyrW44oPPqfFHqDLHozvKrP6YpijsN",
  "key34": "3gxE6E91hn5m78rhvnJJooNS7opko4aQyzPAyeyKCG6mByijxrfjaAfRMwkJ2tg1XN2abncqW4kAmVC4aoGypM4Y",
  "key35": "4XiutLcpm9sUoUJomPDcNugY2oWFetATx6MhLvZfiJyWVvJCz2mqzD2XHBaRum4nMaJgRW6dg6g5RRLEMyEkX35G",
  "key36": "4Asmn6kezkRE78GmJwWJ37JU2vJsfVLQr2WEXNFMt8Qwkt5N7S1RQWZ3vUHYHHsxE96rBvhziwYUiFYtitTXHyaN",
  "key37": "5Eqsrru4PqpfjRhWx6WXmZLyrPVBLV8Ndogu9G82rrstCvyo43wG4bF2zWf7wgStd1CmBvintnbEzuiStpwyHH1R",
  "key38": "47qkdjqAfsfh8cED5Z8GeuYZ8PWXRTopF1BkGhFX4GXvKeCnaa4CkxVaUw9RZfbWGR6AYnxc2fHe1xm6FRVtY1ue",
  "key39": "2UW2HfbmbD614wH2MCdxmqvHKjzULfoTW1XTifU29QPs3eNrsaYvPPXbA4cUEP3zKwHnK9ofSn5c7NpaDRRJzvSM"
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
