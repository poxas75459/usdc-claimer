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
    "Jz2XnodwrBQMQBp8YCQcQspKcmVqSWzCsMkgEXyzAU4NdM8rN5UBLpPGSqwzNnCfJ5aJhPfg3erEfqW36rMH2po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247KeTkQ4zahToToWzzf6gqtgQeVCbdHPe2Efc7FkYHvrWAm5UVwAZvwJN1D6Ly4P3wg7anMsE2FVgeJExfX64pn",
  "key1": "5d9uXQs3CwWB3jqreZ8hZ6fZDqPZUFwWeNHT32TAaniRc7C51YNfGA2oKeSQKPqjmoiErpPB1VdTTCu9ysZeNQP6",
  "key2": "3Hd3Pudte6m1MKT5cMsWCVhuELHBbXC5qWWjiJFEGHKVjJKhQJBQagqVef1qtmv5WxJGDFm4iyDF3ndgGB6hKn8Q",
  "key3": "41oQPx6QXVayevWuJrioEFZKGRgxwtBkvYbpYSwhPahQ9vGpTDfhC8ernTebn3ZFLtCzPjrFQ4MGnQDVoyaYrRXt",
  "key4": "qCjFxN2xj6qaH4TDtNrgHFXEq7JzsJKkom88FfiprpS9KttetBkrdMBMM6ZAQMzQaZ3nF1YfxixGuAGdoDV1Ar8",
  "key5": "553RVPhoZ2oyWfwLyrFdSKZtQE2sRL7zGCWxnkvixf8AqXCALmW2WKAZc2TAkdgaRuw3eYMqJjTxsJjPSRUGjX1e",
  "key6": "4DptSu4dfjxkbKy6CSqwUPv6jc8SBYgQPHJ9zLVAvLjX4QvgRuwJdDoFPYACosWa16aBeh4qSaW6GY4xn1e4bKq8",
  "key7": "3G8uk9MS1ptxjH3VDFXYfwRNgcKe82QrWGnJHosinng1sLFDo8kbm7yobmPdqHBS2C5M7oUjCqR6WAU1RNG256BH",
  "key8": "4ARzCxos2szCUoRDuJqW6niPLq2HZWCr8eTkz1XbDmA4Ntd2zgg6eYrqwnek4MQSmjgyBADpYnVTQd254yhgpS2n",
  "key9": "42xJxW992vAUG7jfLzA7HSYGsBwnNtvBeLJhpRyrptkzvRAyUsFBqJwDzCUkWAX8es8MzM3CShvgtp4jjYLa7s4q",
  "key10": "32NB2dbwPBKQ1nqNQLH6M3ezwdcA2U7XXRzxLiHvAH9nB6dsw64qnarPB1QqCQzMt4xcW1qK27LYuZvGGH55TPhg",
  "key11": "4TAwN2eXwKAAY6LLaM2z7Ndp48niiKBSnh5dPRTvX8KzK1VKFPtA2BSX5TGTzcKpuM4fJujxnpBqKp1rWFXHyst8",
  "key12": "3cRntgty7TXQe2NdrjY22fdLa5Ziv8Ranfmsz2RUu2UPgJTdnKQhdrKK3PoZTcSzZ4X9igxQjdGxerPyh52DafSJ",
  "key13": "3uipdmGUzzZhNFRpsfDyruesFTC7Ko4ztXZdBMXYYcoWpABe5FPwDnBeMvKRcNBxUnJz8tLWxzz4Qsdm8g2pMgBM",
  "key14": "4z6UoYoWenp2ZoqAXEQxeV7VZVULvZNmQh4AWRgR3dhBHueEaENnzjB2J7DTdDGS7dHj5Aza1fRnDdN9SXzDvhbj",
  "key15": "5VhmADpvggeyMP6AddB8dNLaQ3uY9646Q4Dq8Ar2HUQDQjMgYqYbUCfsNVrwiYKGK37EqQnQDFco4KAoR93F9aHe",
  "key16": "5mybenU9wy6a6YJvBMKnXS5g47zpZsEv4SyvGRDqvRyZL7DcwMXax4Pp7UdV2Sz9Pvk1r5ABcZkqwy942qMzbBrG",
  "key17": "5ATYnGhdu3H1UegJ1NmiuhL474BcctDnsecnHze4hSLNUov78JkSgwQBad5i2GukLG1c8GHGXgpp8RJqo1dz8bAf",
  "key18": "2zWApfvNfMCozyscrTmZCzHKDD5xd4jWKkNUCEhfdXWPYAZWCGn68PeB9bKvcLqJsB8fpGFeXtE1XUGU3R1U7Rt6",
  "key19": "3in6V6GZPuXFNk43hDPVuMBs5NWZ6nijGMR28GunSssBngGDD3t77hbiwxry9zVaJAyZecDCe63y2qaSo8zbhJQm",
  "key20": "4tz5fUvFrw3CtdrRbvRvZepKL1KfWsVBWri8JZD2Zz25ZVPbBPFyxkJnx7MpSEgbdpDxtAb3Jfgbz1ZwqaNRgmks",
  "key21": "3FjpH1hnV92s2W5wK1ztMseP9Y2mYwcPcUp6Bd1J6YcKidJ4ypuvyeaS8bEKWgftmkLrFhbfn4ZVPmjRpSVpBBTG",
  "key22": "28KQk26x3j4tBvJfA8BCiGeUruVZwPTB5Q3xikrRZMR4A7HpAAJ2Y5aYdZTa9VQSrFLZp7foGuBs9HhATr9RZQ5K",
  "key23": "32QenVwaGRUy6fR4tNfc7yydznVbrXS6p1QYDfisYLmHBeVgbowKkxJdCzmZV1bF5MiV8UEndsYgSSeFV6zZgmCd",
  "key24": "QLjaW9f5j9RmuhP1mbafJLyacRFUSjfpdxCa8QhQHiEcvosfvJMEPzS8yvsNP8grxsYEzBTGxXojujVjcqc7XpZ",
  "key25": "5QVkeJkKVEphicQD5uHj95ZV41nK2WhX35ngUpMRAASsVSVx4gqTNgkgN1Y6RCRRiM3C8vUpkgBzThheXkymEKBY",
  "key26": "37oX35vkB7NqZY4KgDf7gBkeGAsQPE8iatQZPaBrmKecH3MADVK2dgoTo38qxQojMHtMwKssuQmA9M6k3xrhDb5a",
  "key27": "3P4QVHdP7ai6FL8SRxxQJMJ1bj92tJ4eedcFYSAQMnk9yCK5vAf6kGXWop98B3LtfcKysMf1QHtDFQppzv21SSVD",
  "key28": "56CN5MhZtWynHQC4JGrigCryfQt12iS8j3vqAhsFcBxiMHw9ULreGfTPEvAjiDffhXRvJH6swnKLafH9Q8BL8CgW",
  "key29": "5fjQBFkTU2Db1UuCrsv7agCNT8ZTckYAhJi4sCf3We81Xg981xo8WYDVWkAofN6dB98wjyhnPK5BZ2KVqP968NaQ",
  "key30": "2yxhmC1XZqhv8EN8URnmsv9S9DEcFyuiRzhT7T9R7jTamLYsR6r9DDftdCRnnpMrQZRRctExKRMnN5AWYzt7A831",
  "key31": "2mc2GA8BGYBa6r3ytgtpmV4ismeZ7K4MyY1nQXHooLYHMLKnqSQDBwaFa6GXcMkznmyzHUUCDiq6YuPDWGLsshct",
  "key32": "3FF4HB2GS4Xqy8mzVLXKdEvC5rVXUErEZukcUbtHHfJAACch1hYkmhRbUWB7CKjL48awq7HUHoXYMexxqc8TVoUq",
  "key33": "4NEy5pAi5oiyRZKjxx6hFeWMGqp8KM9zqGfdroxeJ375HFNAHB8y1DxH7C1hEZWH6kzH4Nm2PukPLu5gDkqbHmh2",
  "key34": "ziFjiNdGMeJXNFQSfrS6eW4BrAJndcNwcXM5N6697APx3QpivbDrG3BE8djBToexeDan7u924mUrRjekE3PrynC",
  "key35": "4G8nZbDBeLdFREuL5uAKE2iE41p944Cv7J3AE87RxTG8AM3ggbNBpdyaMTEB2oxmGtG8Sxafs7d77XVnXPMwjDwu",
  "key36": "4Aspi3YTXMre21NTpHAwt1Bc2bs2X73C8VZj6gnQt43mvh9gZqdvX5PKFERW2pDKDYYp6RK6YwJ4ikNLZTqnTnrf",
  "key37": "2UjBLAQ5XEDrG61mdVxXk9GXMQVnrYkdwcz6kbC3ykcFskKHziRJ5fPbsZB8Xc2z7yqtPxZgNiKW9d7VzgJ7b24w",
  "key38": "3S21SuFt4TtHA3qKSAc4kDEezcjXap2yAb3jG2MR3rRzcLYXcNB2KxuJsSbZVkgDMmYBArRUSzh7f3kZtGdVstm4",
  "key39": "3RAMAnezbefbhXBZhRdHDHkNiXtEz79q6aK93UVSWKR3ACZheFBwxccxiVxToHAKCKbrkzMbv4kGqqGXLhtS4qfU",
  "key40": "2ywdh15BrUbZzY24g7C7Ttk9rKJnvquR8HXA5LcYWPNS53jRqgGztjApr6PRXZx7oDNRPpxvEQ2bYKJqf3HCuYQS",
  "key41": "2NDEzMoqoUDJuW2g9UTLnPGNFhMmgn1NvcQhMezbL6Bhesy5QSg9UHNQUi78Pz7pnaFyRpvaPPXDVUW91oywRHGW",
  "key42": "pJYXDz6MCkYTj5sFFjZkUDStB7pLHe7gsUmqYhfEdY6Ba5iwosk22Ji8FzkrhG5hqqixShNFLfTUfxkunjomD3K",
  "key43": "2Pyf3T5kgRKagkeWtTbjD19tGZzqxqzr9qwsYGyrn1UwbKBQ8ztzNKmnXxbS4LhaEmHJUXGjsHbT2MxAfXZFEfUU",
  "key44": "2Sfzm7GzbiMpsBLDbaeBLLH7MzUZQbwVihyjtwbDkqKmEZZ3LrWymEknRBbnZw8vqB9navQi9LxMsYLgJDcKNcjJ"
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
