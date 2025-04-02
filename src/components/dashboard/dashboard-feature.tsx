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
    "4753sfqGj2KUUpwrxV8yqAnR7fBUtXVPJoNutzUMjs8m9aJ1mEjaoHfQhnwtmMPAaXHvxb6SJnHsjZjbpUwmdekQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oaXGY4KYzm5zXiLJnsqdiwSxVK6WrCjezbG3QJixTaiQzSEoNCiZMYC2TXty7jm89Ri1G5Xwt7yMbJH1JWDFfZ3",
  "key1": "3y7ZunZgc6Ae73915brY837g9NWbz9R4sXGaSSeGqcTYGL1h4AVvKhBT4oiqZnSf4GT6woo9TwtvX4Gyrtmeo41y",
  "key2": "3KGJaDZvCDBnXxsxd55g3VeuD3huBQR3Uo9busLLwR8XmGFc6GwYXq91msYvfnmTezwXzTYt8GrEuMKV8NcHvGud",
  "key3": "2P3jDStUGcqBfL2LNwZmvhRHizFtNv5FSAJvdwgNStBBHD6iiNwXzhgqBR23jtGxeBpmShvDFjVRMXC3XoCeuPvV",
  "key4": "4hHzXzwey65vCnDyChkZZCorzGkfanpogyME28HYkNxqBgkGhRUnK7R1Q2TBJLg3aMrxaoAc1897HB4asaEW53Ms",
  "key5": "h8y67gDgKunPXYLMavQkyDFYSjGeT8Jnz1x6bHuze5YASqmiwJeWavAKL7uG5RKWADZenX5nGMWWzzwxNcHByhe",
  "key6": "o3b1Pi5hAUuFL1mYnrPixsFfRSsLz84bfDC3ZbQdNGZc8JF8p4p6PuMHFtYrSZEbVUEh53g2xWmdxsWcwQa7quA",
  "key7": "3XPzuRWHcRd92J1A4pwYN4RYHx54EYdoxjQr2kGrabjZzLMcGFUc1fSP1QcMXyT1hCo9q3u1LHMQkVGuVm7QhAkm",
  "key8": "499eDLSfTbZijffn8rMn4QQCqwD1HaqmuhJFxiSWUrvFuBue9dsMrH4pAgFFZ7pfnvKpH92Fjt4Awf8o8fCdzuP1",
  "key9": "4uoMQT9URDnZafC8Jq6N5ypWXUbJ5ngVCSxzcGrwtVFY4FqVY7QYUmQJnARamK9Fa2XftpSFa4SqVvV8zGRkLZKr",
  "key10": "2pBmz1SFkZHLsTfhLK6HZQ4BqAayw3SM45K4YvuBPeQYmR3Y7AdJ1StxxgJnsNQnaqouc67CCciCMKbwfhHT4fmg",
  "key11": "5FC6G7NMbtSUJH9xhzM2LqQC96YDYLoJFFqTSwfHDUbRZQXNZ44J25bYJ7iSJvz4X4GApzT9JKL9qR3zhvw1njwJ",
  "key12": "5LvwUz95fynPXqCEY2tg34LCbQFipCDhdt92eK4db3xLH3ZgzWxEYfvVw11cgE8rTXUac8CFjLi83FQ89EBKiV9J",
  "key13": "29mor4K6GEwCJ6Eg8kFEkCD7SdErgFaih8wT3Bp7esMpRyjiY43RacqGkZGHxZB78oeCPS2uQAq5me1wWEVgohWm",
  "key14": "3BfiAtahMEkvoarYguf5q7xMSiGaC3zeHbypmKRp3C3TEPSNJADB7y2UEPPKKQ9E8Bg5T2LjFHi2dAMFfdRHwcF8",
  "key15": "4N3TMzEgy9zmYTmaQ8XPB5HhCt7DjAk7cYTCfpVjqSEYBdXhgPi8rip1PJMBhVG3sJH7gvx44i5vBNs6W5NoRbfy",
  "key16": "3PBqvMP7fXXf6kPUaBY9pKpaafBwYaANVuBqbz6CFqqojyhqMhmNDB7LZJFEVYw9es7WXnUDjJDcagUoX6FTnuqY",
  "key17": "5K7hM9WqyDYXCFC2nac8kbQTGzBsCJAShnnjWoFEdq585tZYs9jwho76X1p9JY79Fz6E4TZpsSzJ4noc8oGgwL4v",
  "key18": "5GCiyhoMY3AaUYpUe8yCqmH7rWfCmXFqc8uH4LS6brTSdHzJqDt5DQbi2nXYexHKFzbQikNSatRb6rsceC8DKfPA",
  "key19": "2i6P3guApwbqce4ZFeSdiSeiQFL83Zc8fjY5xXZzuMw7poocuB8Aq2PNA4cHyMEzMKVSar2mLJwsyq1APhTLoDak",
  "key20": "2mZKGpPTwV84zw2hyChKuNyx8R2aSo9kfU1pdJzpgBJB8x7zCBv5rtYbXGbHrJSiQDkvcR69voDjjiUnb3SRZRFH",
  "key21": "HEqqUNowyE9mWuSe461sWLC71o6eDerJAEdi3MKcNkawpHmGXYX7wnQkypyv9BkLGxg9eTx6fF6bByhuH54K3E1",
  "key22": "2tB2CWzcDnVPHgMSk8yAe63C5QFxgVyscgk9ozpfaReRpNCDy43PxzRYvbyCvHAN5fN1ffZerQKMrud16smPCsvZ",
  "key23": "geQSfREvAhLnPfcqjRPXUDFeXaxLRkan2amPjnW4DKFWi872GX37myUrGyZN2obThv8nzQ4PL6yMqNrKVpAmdXW",
  "key24": "4fKwfrwdMkkeFW84xvhYrEkwRVzyDXKBXZ1CDsqi2pSzmGvbgqhBfBt6XmaWvWpCzaDvZWXSTK4aprkdt8VyFwYq",
  "key25": "4CUFzPvWrZdeGyP78dUc1goWYVJbd4oYuyw7ySZyKSdFv4QLFysyZ22Zwsf1HwqxtiFTDEkxoQAMWDL5kP8HvpHX",
  "key26": "38eXnLnTBuWuUzNVHQUd23pNDzHCDKPyYsJB16o9u8TS1tkgwhB7ZKDjMuUHueNqzQZ3JY3q9EBAauV1A5pEXtza",
  "key27": "5usA33Y1XQFFPe3VA2whCw3LGUqV36vkhx7MeKPTDDscm6y55p8kLM8EDt3xa9QCNEQKLZPdYph3bowBjtkerpZw",
  "key28": "ZZtanZ97pURX4y1MncErGaknWDyGjXiqmagbqkhiaPJyNnFPZpPoA3qFYUgdUG6h6uLa7fxuVuegQgmVTEKNRvM",
  "key29": "2R3VudjrjSwojftF4oUYJg9wS8KCFbcxNaYQ4twZsH8WUCsYMubaVXrkJE1kUo4fs6o6TU4QY4Q5QFtG8FRwDHMg",
  "key30": "nPDSQXwBTn6zhHD2UioCeDU2E9zbS24uK7sN5E6md2Wefb4A9UjPJ6udTVaktNSDKd2oD4uetYeDsh8ZMhrTJng",
  "key31": "DM3fr6YszBcuL2LzDT3aTLTeHwzwjFPCV8PfZqatcTHNVhRrheEutQsnveionytxYjZA7i8CbEGm3c7Rz8vvQyn",
  "key32": "4jVK2QxiFzrhSW86yiEF1wxrVzL9FYQH6roUFRaXCjEd5HzHSWeaTnLPa5cqDjoZiDKYmLcPVXwxfWXDCjQ9DVUb",
  "key33": "5YSGv1tRWoYSiYgDJ1NDGn9LVak7pfSLysBiXfst3kwHGvG4EgRYbgsuyrCCF6QfFTL86NE5kCPaHkLoHjfcqQuR",
  "key34": "5XTsLLpbYDUtw8QXPnw238BBDUpiuqd3yyxiVXGtGDYDzdEjiQCDgdsk1Q77fegg8dYSyG26tzRM56hxZH5fVZnL",
  "key35": "5ymdZ2L5kTpkQsRdWCFtrtHHF7R8h9SxnfAe9daW1ULQ5zqZMJnGyv7Mn19FmSW3uMENxmbY9EUKi8E6nxFEQmyf",
  "key36": "QFbzFSpcXPtq2wK3QDohw1pQyK6cMsxfQeYx5dBeRnvapfan3m6L42amGixFSHpku3MeqWYqGZpyqkzHZKVKT6T",
  "key37": "2MsWKMifgkYsJNp7U6F5oS37fSJ5d1dZFJfwPH23eRU1pqvuzDrfcs1bexhj4ZhDsbdEKuu6CDwwS1n6WJvSxB3b",
  "key38": "2CGaXXcFYBv1iVFhaqF5NWjv67ikDfX2ktwa4o946p73PtQK9gogmEyWTRsqvj2zRoiz7MjDP6baLBbresn8J1MW",
  "key39": "3zCJTe4RCb9mMUYXUenJN5ACjjuYgqxRaeX4TLQTsb7VyZvACdVLNMdgn8CXwRc6LrfdZPeCtsEEcAdJfZmku933",
  "key40": "32LbVdLqfVDTdYBrFozZxwoRujcBmfQ2m4GjPLx4viqJmTjFb43WXbMQ2zqYKRJHmBJSwDbHnp9a4fytVLKzRmx2",
  "key41": "B8gZKz8iMVvGWRrBtX6JWjB4yp14BAvHwFtDQEpkpurmHUhXLGSUp4WStNu3bMP1bYPTBxMP2jjdfJYaXshiBSy"
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
