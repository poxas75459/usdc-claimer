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
    "2CZWNvukz3yBxvvfc4ZWdk2W2JEcsZNRgRBw4YbuLcsfvZ34X5r6t2sjFJUc5aVnwJJCggFw1n7P7ZZsqziXemVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e8vxUsmT8ZUXJ7w6rgyfAAusRtL3VU8ApT17eJmDYV1cZwEqZyWjECanEbxU9i288urHYmL1PKBuzWZCsqBL1jE",
  "key1": "3ApdX9v2W6gpU4eDeyZ9BzAiDa3wHNXUVvPiNzKA2Y1BgV33tRbsk4cUaQc24XyvQh7PLkaFJjPwn5hVxLXmTKzc",
  "key2": "3bNyrqakWhFiBYGof5wzBuB5U3XEdhvNtNLJ7JXsYsxY2nQHWsk3qwJSZsewx2MWBpf4gfPGixR7W7fxeXBa5mKn",
  "key3": "pi9zewLDK9YNj8mXBJYjCTWJuzMzLY1d64XhDiVEH515GC5eYt7SNk2uzyrHPm3N9C3CkHXkjng35wTugWfApWH",
  "key4": "43BEu3HZZhnSYudjxPGAmk2TKUdYWR4cTGAs6G36zMh3bmRqJa4XyEpPZUHR3HUhVZ9peqEgH7fdhgHokHNd1ojV",
  "key5": "2TW997FRCWM29cnyeD9hxXwe3gVaEmSy8F5hiZcuFnfDNdehbRF2ZUQbFXmyZqZhL5EQ6VaA3fk7HoDCRxEvbNvj",
  "key6": "3KAWgMNvrRnkaP3L2jVTVdNRmC9m4p5Y92NkRY94A7LeqGxeDBwhJuPqGjrwLAsZfdDQLP8vE3R6k984YZ8TXTLd",
  "key7": "3To7M3U49fiFkac3ady2qiyqy7HCidvwxbm72kCgi8v2C87LGh4aSMmQT1m6dE4qb8v5FUKxhSihY7swJNbda7Uc",
  "key8": "2og1x512UPXVX2n5zSConsspDCyCJTbLQmMqJZQRXpd39bQffUhUN3HEY5UPEyNizjVVnazasS3cu6UZXd2wrwYM",
  "key9": "672kHq7NZ7Y5GtFfRnCMNJGm1JkvhFSc7TU9Y2RWdxhW2yYuenhGT6fQCpUChYVpKtKDqvoHkpeGfbDegzusYS58",
  "key10": "4L9uana8NxqMVpwJSz4sUeoWqtxMxMcUKfB6kYJa6TKVQvkPqb2m1bLExmEA5E68Z7bGb548kf8WBjAn5DyNiQtS",
  "key11": "5Ce7CsqNEs1XJLjyabu3cpeC79QreNrHkFXmyyqAjCNw6c6fgmsCoGE2DV6SBuSimtrz6LGWhMimhTZorStZ55K3",
  "key12": "5nLUHfzTWKat8wwzgx6p4H8MWizgH5QBU7cXgJSXsqpJwWHQ3XnvAiTEBdUggA65pin921ok1PDRKpWabQskDD1q",
  "key13": "2S5ehz3S4cQCemQDQUkR8RwEWeaWsBVJXuQULfH8o44FrxPzaMKFv7hYQ7D1Ed7LXaSnnSrAmhAkHdQbvQntTX5i",
  "key14": "2BseJQw4b2nwGMRCsQvDdWvZt6D2X81KZ8X2HKNNc1qEkH8CcZFegf4TXJCmMw17pE3BvgufgjmpWVjLC7q5ykke",
  "key15": "5y3VB7TmYQGC8SetkAsMLwvWpMiUDbrPtbMuDkcAvAtjXFSAsNRyJ7k8QcVqsbUmkYoTnbxo4YDhGukPViFo2Y7C",
  "key16": "sJasGhEib5vPG4LanZtedSgir89UzMJSLh5j9sj8bjumKDnorUQZLhpwBmWba12MfhsKKqTGKKtG926gozbTz8e",
  "key17": "48ggkuUvunrHSjXY3hFkhykUspbQ1ESgztmUm9oBRs73on73GTFXUdEoFA6pjCK3tVFdaXGA9QjHeuLZzfUfDZhF",
  "key18": "3BwkUZkLS4awWfPNvmrq2kLDgEmNB7vYjEjWWJDjFarLfMMWx8MsmLcJZgpvtrdG7bDokbh7VR35Zv3N5Yc59xJ9",
  "key19": "4XjPAwsJvQHMFXcchpfeZSV7JXxMfanx5gY7sLpkk8mo8aSPRqneDVPwepw1izUGYHerDFuo56XN3L3WtEvRvwSZ",
  "key20": "35BKVYafFfCWpxDGhzYWfu1RZXUmuyK2tnawhf5xuLAPHqMVxZzmCoEBNcvELGYJuRT5gcn3VmMze2aeBpTgftr6",
  "key21": "66xVDXvHts82iVw77AK96WcdiJrfqt3XAQCMXFvDbyRjm1Pf2qMHVcLmwyjoUtoNKGvXbc3FZXJABs3kXsVx6t9Q",
  "key22": "52U3zBKTbgNHByLAwF6wY9C7ccEcyqMBnVbspwdQoR8mFoFz7yTqyz7jz8Gm4VawFev3dKk1FSCzmCnJyKEEqqRe",
  "key23": "2uoQedkNogiDhWPDczEU9yiwvD9nJ1FpUGTdpxNgoj1Uk9Scgj3YiA2RB8jNAwmrec9BZ1ybUdZEQZkU3kDDjLjn",
  "key24": "2vbtpvjiDBvykWucANT8czUNzKd8w6VP5bzvYYdtbJnCESEKfWy7dduN94HD4xvG7XcJS7cvicb6hAkRBvu3faNj",
  "key25": "5cjwGidsVAsK2XWuBzzM8gzFRCbJUJzTxXwzD82N2FeRz7zbUseksLJQY4FDiKU2yusSa7fCNYFf1vo32SzmGxj4",
  "key26": "5ivM1CrT2FMC9oWndswPRV7xQhDDyvFUdR5jRDUwHox5UuHf9ppttLgJmAfJLHqwfRNmRqh2TDHfpdHwwPj4M3rw",
  "key27": "49Bbg5D3A2S8Tuss8zXsP1neuX2M37tH7pYvjHpgSYNWa4MvnLvZNutNcBNJwMFYmi95MHMXAeGru2iPa1sQgBy3",
  "key28": "5oZyFnFYEP7c9N4uZXxbJ3vGN7uzfyZdyt3HYnkJuwZir9e57Spdx9oDDFFT6JwevocY6y6aQgDdLJvtLybYKusi",
  "key29": "3Zu5gTcZf9hP5WtAgUZDQ9WS33v5oD3h8B9sovudeZ1nVTCTfDjq5DHUMHfKr7zmjDru8e7i2KUewiHM37zmTbkH",
  "key30": "2Sy1MpHkVWVXznaGzkbb6TsQjsYuHVZVPnBJu7q7N7MqVxy6ZjubmwGDpUHutf5ierKVQfTz3PUTsGUp1dTbfXLc",
  "key31": "2zEm2aC51nqWukEssRLiDMrMCJMaU3QEdtQuHavhsPDXpzSZDvSBBgaugNN5nYDfsBkHafeEVtPHz8u8GemEUZiD",
  "key32": "3PoxSWnfqMzzs9FHNeNtnkRAbNxdZfPGXBg6JKkqAL9CcDy3h8T8JTvYFse386Ys4QFcxG9uz28vNYBh6AwcY7Ht",
  "key33": "bByuvt6FpURoFgspgdPDrKkDBscqwgMNZ7bE1PkVwoMfQUmK8ToGSwbs96bhhwEYaxYnjDpXkq196SccZbQvBwJ",
  "key34": "3Can4bL5ygUGt6Nct3yqjv66hFgyPWNZMpsNjEXXh7UJYmVY5ak2SwREU32Zk2Li2TusnQ4cuX5Auor5zJieGq8C",
  "key35": "4ZvMFAKXkVBYiEJuiKqjcERw5veKaS93y7WykWoM5KdNKA7Aw8KGB5qnSJtZfuab3Zzi2QaavBjstymftRFBwSry",
  "key36": "eWdAwRf3WApZMQAjpeutPtsL6zjX8dXkPzpqRhHECREz8VkanFucHFBcUwNE6gYqDXhUmfA251jKnhE16jgL7cE",
  "key37": "3Yfy2DrCLJbi3EWMExg5ESM6iSMs7qTYL8poz8SAGXiUNr6KsEvksMMG132ZxBZxtc45VQVz3NNFK6Ef31fQVQkZ",
  "key38": "21mNoYJ5dd8YVZCpaJLyg6hmoCnWe16SCo8mFg35AnMpJsShiqAXnHYvuMDEawSyAn36nB9PhdDJqqS7WEyjN7u1",
  "key39": "3gZtfBxtf7kGMWa9evGejWdAhkaVXHige6Kphg7JSnuS2EPg2oy5BdDpAFtaB2o7nbibJ3TE4Vfu8pQJETa56rQZ",
  "key40": "dauseYNcrHW9GT3F7FB1YuDZLbmbnuvRcTQg4BgWXNw9TEocjYo2TUttgyeauwbs89TUxyg6UGVu5QPdKtZFa7V",
  "key41": "2ECD2K3CndhidMJtv1Z9JJgsEexgAzpjLX2m9uLTp9N3BLoq7zbTebpSKwzPb9aMzT5Eqa5Q1RuwHEpFGFVJgSZ2",
  "key42": "kyrappEgoExDSX2FdCSF1QCSWF6qbfdAarehPiHPysZKkhzuh73QTSJ8bnm8bQNQtrJjERFSRizQ34o37cXjZBP"
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
