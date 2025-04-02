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
    "2MH4YAPuaahBQPgz5tVvgbGxYH3Ep5y2bPtJXQcaPq5f25kgtr3LsoC6EMEKhiuoC7xhzdJPv7PQsvPUVCBkwSeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvULb9ByEYZxsdhJ1dK3642Za7PRCVa19PifdHjXiR6xDpNDfJozE9NtGgWQt9bXuHjQansfigwwQreFyDKUZQa",
  "key1": "4wUfSkz3vwQ1FyCU6hMfrNuEuS49Y8fRTKn7qF3VAepYfVrDmvbiqPbTpxeKK7U1iNxegqtZdxC3U25PbDrh6ygn",
  "key2": "5TYxSSU9KQGghW3QTDAK3FCKGKEDfAcs658zz5THFee7aW6G68mJtAprr1nipLKQpZT2UxEnGVsfYxBMVVkHp2gL",
  "key3": "KwafpedX7msaZMy7LegFuoAFC6F3gtVqhvJNKLkoHuqstLZpFjfKxesQbAdM5s4a3vU439f3MET1hfg6t4rnUZ6",
  "key4": "5nwP1L8x3s3wjAYwuKjui3mHvWmE7pbpbUhoXWBsueeLJ3YHCqT99AbzqoDuqFQ64mikXwxLirXaPpzYiFJFY5Ag",
  "key5": "2EXdd9co7vdbAJma75euJVPc4Hbn8K9do4cZ7ukXD462BC11JNj17JfFdDJNcGAKE53PW82RoAWCP7QZbHcVLDDf",
  "key6": "iusnpds1DCjTU2wg2h9qoSC8K2TKjsKei53redyyTTJQELGCAEimqWGxyy93X5N883rChHHc7KWL5im6PKwcihP",
  "key7": "3F5eEjcRwEw2oWuBb76uFSD78RKtAwiWgnHxfTzatL6vFrf3AxX6oSJVRMjYCwsE5ugoGffUchru1gB4G8keuWbq",
  "key8": "CZvBqAbFPvV2xMKMwza4NA6YxfqdLbSFeME1yBqHxvgPezYVdk1ACVmE88H3DfmEeQzi71ksH57LKL4qRJWVCkn",
  "key9": "2ReEsAmTQTqmBPjBztp5Jc1PcWyzH2AW4w9LvX1SCreSsWX8HZHGL5aYYpwEYdZkK4jAnG6sJTfA84Pgrm9WKVG8",
  "key10": "asvbn3HH2i6JfvDTdA5Q1eLrMrqCKsuuoEtM1oyduHNQwGdJtsMnJu7S1E4NDopVkc8Qc2AuSDBaq5YN29aLytU",
  "key11": "5jL8GtWHxBMnFiw3PTKBXGTJm1iJhRVPKTH3i6tVYFp6WiBQ3BShdSfj7qXhww1B5HjbGGK6vYHHvghLbL5gvVq7",
  "key12": "4vfNrKLtk7Kv3ytYwbC1WXVMWCcK9qkgH4scKB4Dwj1Y6VUgWHgk1iQS2gT1QeLXdWUCwrHwX3eyf8V62HDLKv3D",
  "key13": "5ZGo69NL87jKe1ebvsVcy17jL8kFBcWANCaym6yww98kco3pfj3xVej5K1WDGuGtBDBhSMoCAmmwQaAdeDvZh2nj",
  "key14": "4byvBiUmPzRGUJni8pLkw2xchqxNnPXkmVJWQqT56xPQjFJXfDhDUDoNiFipbFP9AKLPMW8feVhFLnYTVEkHvfGx",
  "key15": "2Mw2vhXeQYCpzzUCzJ8jaTcvpdCtJAEmKqG2nThjLjddcnizC3avuprHUXoNTrTfgJNPRL94tUDpknpmyAk9ezmj",
  "key16": "2hZ4AZdgrdyAFnZmjUhLxvQ2Cak1d91q3ikEnng7DMbCr7JZ2vccpGmjaNxXN4b9jNu5NRESFZfAAsiq1HFJfya4",
  "key17": "4tJuLkT7MJS9hYrPrH9dADBwVp3rvvL8XsXMnhPae1gh68pNuUkxET9vBpqRs8EPQLhLqeRtXiqyTep1NrFdaQw3",
  "key18": "3TGKdo8jdEnXZVcMB8hpjvwCPAwZgdNMkqDGBEGz7bBz33hTLfM2UwGVUuA7faFGnrv6VeH7gMNcwv3m5rik8Wch",
  "key19": "24rrEas9q3YbJyKS9sZSqnGejLp9yR57RtYNsz8UKHD5suQ2AUr9Q3os1y3mLRptzyZf7bo4tMYR3uH538kCt99N",
  "key20": "3w36CdGQuyFc5PJBMa6oRmhKhRtDHfNua45uj5xdECNr3h4MHntaQWyPC5Y4fGmWthgdWJpivpd3KqHUSN1xSPsa",
  "key21": "3WEjshxUC6p8JZMfyraMfXc3tNGdtp4aSJJYpyyjWXtHqmDD3qk4Q2QPtQzZWdyc9UngYxayiAMNjYRM7LWEWpLq",
  "key22": "2H1qJy8SWwmxaWwj1Z7ttqnFZ4ut7toh9qAiur3geqExGjXJM3bf7hcoqUE547Z4k3f9mm718PZ8B5Kjsz5heS26",
  "key23": "2g3ejQFps4nfX15phGcKPiwbXJAmWmXk37Ld6YB3TGD4bCqFyjpsqWNRpEkEHp6qPVupBguDPNyf5ymmq4hHpKxD",
  "key24": "4ur4wDaXeUVTVkLpYb9Ukk9kmCKS7tWZUJKU5Yy4jAt7JNsAtCqQXM7hJ8B3M3hogjeRoq1nBwjzEEYqD8wkpmPG",
  "key25": "2TwC2m521CoLNhiEdaa1CHHyXhYkU8F1BNaHG99ADR6cZFAdDeT13YMasZhxAviZRz2wtCZkTEndqoWEfLkEkiNe",
  "key26": "chfd2mPHqWjiZ7MrT54Yxm5HfEXz8VYeLoT2K64sgzswsKetEagN3KK1upG3NcfsBxFaRbZuhXb9oDeKWqU9ySY",
  "key27": "nhqtLSibS1o74RoJUhNwYsQsumG4YvyJHQ8iZddHk8UbHxnpJXpZRyG7nbQU8iFCN2mABzhcFTtp1qSi9zXfw8F",
  "key28": "YqG2CgZaZKDXdSi7Z4cQMiaBrGvD1rqvHGVWvirwdWFpgQuQgaxTgG7JfQRbjdu1g8GdY61GndR7ySwnGnaq2Tp",
  "key29": "55BAHXU2zMGaQfmozWYfPfo737hiC5azHP9Q9b48FUG3rr9c6yJ96YePcHjSNsJT7K1hrpTMJBFKCdMakkPZRiwT",
  "key30": "5GfCupn2rBS7jVLvStuexcTk4QFhggX9txeLAMDqdh4NvLTB2ieXKNtRsV1gx4gTmzPMbi2Rso4KjSV1VMtdqENW",
  "key31": "5xL8j41R3JDki8y4PYvfZpzrJoipNJTViJBXgF8q5uTbdWQfCLnPLVumh7Lr9GancQXAA767iB9kC67dQ7DsQ5Qp",
  "key32": "3rvmeT33ump1yvszKyeyNgsTNyskWdrnmyXD1NaztQFfobUNEPLkPmZLXCbHVxDjmFpGgeSdP3CWxjJWtyQZmYjs"
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
