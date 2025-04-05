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
    "2oeJM3CZmm96aVwpj8SWaZYiaoLTVRaQ8MvH8D4jTaCL1nfSsDfcFZXdMpxRfpww8ZUaGUQE6AXUvughdESQSPoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KAUxarkMUuaT5Ln4rCN8JnS1ZnZcxCjHzSBWkWDpuG1xng8BkgbhYorXuT5br9PgVuM6PNttXe2sKngS3cUWYxx",
  "key1": "2hy6HvcvUPMSMAPaHqNLVNgKcQXrwmR4WTZG8jfKMCN95VwguyxpnnNfX9ixuch6wpMZEoytUn2wnQnz7fueWfFb",
  "key2": "4QrN7QtsxJeCijA1vPXNauTF1RYybBKrfYPdTP6eMcRtvobHHas8cYV91ywu8Uhne6RNHruuYvPQJJ9TP76vpnBo",
  "key3": "wctkGVbFj2zVT9crEjQmSe4LVwhGsxSde8m8P4r2fwTZrnWtjGLGDHxHwcJ9gNphZ8NMarHRFUKhunLPYdVGSt4",
  "key4": "C71Njo1HFeYGHHsB6Hu3NphD9Cq2bQEq7mz86Vodkm3Y63T8JZnPK6a2c3gd1LXapzXwjq5Dm8xTTq9dhH7htMF",
  "key5": "4feHJHYA3i4frTLkwYwfrYqmqiPPsmqP3SBykcz587gonYH7oGv6DtavWnffxG91zQp14zP6Eb6hxeU75hE26gKx",
  "key6": "3sBJiokEKtagQ9DdBZjXGi1qdkAWZhQhmoD85Uz9mvLsN8BXVkhGc2h9y4dmxXfAzR1jw6F6i6xt5y7W1cSwiA9S",
  "key7": "2ae28WprSyKJR6hYTgwxBZjffWpadyhXCywkYntkvpKD2TsnZ84tpudPGyYv44HHQWhCVs7gcnJSifuUER9Pv91g",
  "key8": "39UsirDGfDSfDUr7czRuPH19HKTtWtGTHBwLNSVLhL83mu2uQwrtQ3PMfj2wJNRuhDHpCDqa832aUKSwRsdkDJVB",
  "key9": "RwNXptwGm6faDZRLGQbUgtZT56cEZgQfVKEmRy7znvBVenPRpS1rqqWfuaWWx8NjJcE6gUXY2tt8FQiJkWwpJxs",
  "key10": "2oqApzDbv7kCP2WPs5wntMrSYLdyny3JGsExqxDvp8cS8f5k6Gz5S9UCyuV6BdFHmdSsVKuEptoyPUGDsq5Bw6yK",
  "key11": "juBa8nfHMSBLRpP44MjrQWbQwFL4Rd5notXTLEZfifRqMpyx53xDNbbaKqRHgVqB8wudLkLprcfaXDBwjj2J4cE",
  "key12": "3L8w7YCgjqBW9FCDWYFeUrUzE3C6gWPK1219HKPKcpwQpJA62r9s5LCB17bcrup3eZgo5q6PSpwB5Q5HfoPXxVW3",
  "key13": "2XC6RcWHi1YGkznSvxQPT6Dgi8kySgeBupZkUJd1rXh725ktpGYdGNLeCcL4nVwJ5UkSvdyrREFE6M6Hm3TjFvUk",
  "key14": "38hBvztg9N4qRy27BtPsn1dLmpWwJ6LTfEoCpfm5sdJYWWMq4bd6NAtqT2FVmpZU6EguBarAXcj4QEPrMWy5wKSn",
  "key15": "4uiDogDjQtEbY5vv59hwmpKgoNGYq6jz6uwDM5xqrMf2EBm9TMMn3hoV2DMXNaaWHh6UuQk4fZ5XEBdEZrfDMpG4",
  "key16": "24dTmxCgeXNKQhFLvusBb8HvUsQsYtr83v7kcPJr52uoPU398JWZ3EAKRhDqoGg1rt14h2nPDV55zxSVRNyRLydH",
  "key17": "3k9DZ7MomkghrBkE5wNNVZZ9GanvpjVkMYgi6ciwu91viQ66pMpxLZUTv2Jwp76waa8U2QGW8as9K6KxjzqUCfEg",
  "key18": "5tNNt2du5FRSXbVySGVT2FhHEPjsbAjj3AgMEJxRoG98uUpyNzcrnCpknnz7a2AfZu71SUCLjweBeGV35pEZW56G",
  "key19": "45MK6hgsvrqHw8EQV5QxECEwRenHwkyxyXkiokJzpn1TrdT9emwUZBYuVLnXYHQDJnhJADqCJeWSwrzv4spGW743",
  "key20": "2CJYnsrdy35fZ99gYocuhBs2QPJQmN8tfmRBPrHU8sdAfrHQBgZht6zyHiuqLfM3VPnnyM9HbhYN25JYW5FA9MSU",
  "key21": "Y3LpyPkSnYYhh5KoR8UFxa8N4g26KXUMXXpS2RkdrM7TKishkJviNZmNMSnZUJDfndAbs3rBWZebN4JxnznAtgo",
  "key22": "eiDSkGbKzcz5W6RZrtB4uEZ3bXBT7wFrJ67kxBS4Pa3JFM8eoS6aGZ2PvNUFaCYiZGyCVhhfjBTB2ggoPr4ENvV",
  "key23": "24pvHs1FnppYz1qvuPc3kStk1BuGoygbycdSz8o4wxk58j732biJPVTZg7FKgZrwVGorygLSBRtvCJiKmAYETB2D",
  "key24": "5E9MfLM1P1R6h3SQyTkFiedih43zQ1pZvYECTxX3hfy6T33AMySJ6QsmfAg8vzZDKp2BMmTTUdtMJPXpz8mrxVfa",
  "key25": "37o2QjGdG5odMGMZBkugAuZJiEKYq4SfYV38srU1HnP6S6mRsGewLixREwGqvUrTDBYyGDheDnyvm3W9KQfxhys6",
  "key26": "2RLgBcEWomsnPzyQTbEqce4zFUihFWwtyk1wg3QjSXZicyHE4Vz1vpP4uMeyvh1YNSUBDciKWYd1SJtSUAwXH4RB",
  "key27": "eLFQ6zZEVNG8pWQwT7M1sTrXPVXGD3EdtGvAqS6q52dgBu6PmiJzPsM47cycMho637V6cBtBceGSHGWzRUNj8Rd",
  "key28": "4mmdPg2jg1y8snYsPzRAteewbQkLuK98xasTtpQkSfzjwUzL26FEYxoRyAWDaxHKLp7o3YuYi5QpPwRcH8guFUW9",
  "key29": "2beSvA6n1N6ewNJcxieTMvGdo8RJbzW8gQanDqD4L6S31g8xCmHPpeuVS8Tn11aJtWFF3EwxaBMkANgbUL4fB1ag",
  "key30": "5NvKLXZ3S3aMrNWrZstT6KxyJUXjUcML5tpTuKxecbn2QF4ZFQP7X7Xq1Kx6pFpSMpZC8tGj48MsCoDhy6CR9sdb",
  "key31": "2CH8bCG3pTkw2UTtbHCm5tB9t1M9YgMF98mrZtRwauABessq9Q5E2SUz5MSk4uEVxYQzhZwUuTSTy6sMi2KqAzfw",
  "key32": "2NfBE6Amn3ZVGLMqvauvUFepnWfabUu9HZbsuHg5puYVtEUZfZApAHkA9s64JEXzJVNJ5CDG2SbgrXH5ftVRLhcj"
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
