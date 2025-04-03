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
    "5rRV2aJ1NENkbjvfeYRPyGBuMwA9jKFuinfD8V74Gp84tjiZ9uoMwEu39drzGsDU2DyKfB9CzHSQTeXR2eYpT4yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2582oiWsQZ3jtyWZ9NX6FtB1rkMKqLM6XeeMwrEUWAXLWMqahfvgkBhbVfdeC9hbzDVo7zSGy7scvbfVjMWUNm",
  "key1": "49sbvQihypsSsCa7HE4dBjgkRpn77Lyi1ef8SPWqb5Gz1FYGV7YPqP3UtyEHCqYmmaYDSbnAsTFdxDUW6guTrUZY",
  "key2": "5RufXjxqCfKp5fYtCWK5fJBn7FNoyzTckDB5aY2yz7c64z33WZPSjULdZyg1BH9LhfZSLJ6dM2ivfa5AuNX4BK5M",
  "key3": "2KGizHNUCJqnHS76MH6RvTi5UZpv1XuU5GXJQ15xXGnqDU99CHXzvxoUmRxHVsaXB4QvQmhR4AiyB5aCxocrWW4u",
  "key4": "4Ng4F8UcsLqvo1fmrF6FfmoCLk2Hbtpobw2DrfH9pHT54hUGKPJedTjyShcuX85EiiLKSTTuKmq9XrdDEMsGgSev",
  "key5": "5fSadxZKtt79su3oXmSk6MZm198yTLUUUynTpz5tfi59TfedTZMeJXfNLd8KwtDrvdLEMjGAdQjqM6w9fPFqsTmf",
  "key6": "213WztjASAog5AQxD5UnY9awCPSYaodFA4y3EY99tsFFSW9FbabAaHFS56Fv9CaLku1jup5h8MEjSAjf4mhtLvUQ",
  "key7": "4BLygHYZLiRPeKThEDTk2rfcWTMkDi3sTYWa3EXZwNtY1BDs14XVqoVGzVbHPV1WSJSGqwaYwTSC9pCMq2PUiTur",
  "key8": "WRvr1cuqdrLuAGWpGJmsTeVqVbSPdqrN3v6fFcTMdfLf3BJgPXnF8VJZZe8YBqAPMAd4eLUdknMH2P95zDYUubi",
  "key9": "5R9rj3ccH3QAtw7LM3MrqdPKMQKE1inkxbfoGsKpX9m8yT9B4DGcda6nong8RmQM7njKwAUcxytkuziCqNdBmXkf",
  "key10": "3VjZ1Jv3voXpnSVA9y2cUKWEbaqDQztQi9YfSt9tWSD5h9rDacGaKjYJMaSGgSKAjmPs3YM8JETLersfGN1HZesu",
  "key11": "62G35Z8y7sYru8v7o1u2c3ZkboPvvGp1ztfcKRthCDq96gv7aWWcaEhNJTRfeibD5QxwxaUeKNX4mbD9Zx95dCvm",
  "key12": "5NobypHvwKaGdeJRNdX93f3CR69Wy5xMEB56T3BZmRRvA5pQ2Q8acrdb7HqyaruCfdJ6MKpMs5Pk9UU7vsvjteAj",
  "key13": "5rzxozPifefESGHs6oVm2re8gMNdFxzhX5CXSTrxo8jfkkGGmW1dMMRNub1vdJkWa1Lc1pDCQeXCkWDyhMKAqLSR",
  "key14": "2rukeNZ22Ha3J9Ekd2dJXqqXRCAxquYtKizJLfn5rV4PMSpq8ojic4KWT46D5ACAgDyWQpjje5zKx2tWAvjkbvjV",
  "key15": "5ffKZHzxHGSPUrsKebtrjg8uZMJz4TEpv8UZGiwpLM5Afras2nef8Y6ZyR5vz51EBHuw4J3AVRrgXgKk8bH65Xjx",
  "key16": "3oSpPvRtg2bJjpPFD7G5Fhnr1bFVwpFhTtsFEUuZRwZqBmJny1jYhZosMBef5KJpzqLSuZS4oC9ZSN1XomBKSr2J",
  "key17": "5gbr9MNEEoiR1AQB4PD1kqwDktPWe7LpFEGNnakQGEouRJeFc1ms2MedapuinuD7CKJBfncGbKyXqgoJ7ArPL1ze",
  "key18": "5YmVGQMCP5un4dZS2gtkNkuMPSPVQN7r5TxZj3qBaP2rhXyQ5LYEYRrzd6PckxYV7ze9ta83GvcXqWegQNT7uJjF",
  "key19": "2sHLvx2ER5XdAaGtfm3PEFsCzuKT9zEp7FsTGiAQsiC3yB5zDvbCTneH5NHEzXHD2GBJS8AfjRiKw6Q2F4sFB5we",
  "key20": "So62JNPCgVBaiqrT7jWHkqRUuMsGMy4Q1gp8vevTLsH8ML9LipXUCWktfCt33sLg6gP6UM53U7yFuXZwG2pA3WE",
  "key21": "4DLKHHPwhGqdmfSWcXiQ6tqZxLLgVmFvwTqQ37MqybVHmDs2t8mGkTcLxMXh8dwoG4rLHXDB47UMWszjccn681U8",
  "key22": "2FC56FHPF1zZRySgFj2sdi2PvTLhRV6x4TuqSuHefUENYiKqXQr751qnvvVALcrDZeuBtFxBgaY8ZSdF8r6Q4aJ5",
  "key23": "3QhYfgTwg4oF9E99ijEE9XvYj3g75kx9osEuzEPR4riGqr445x7ctym6BbwkcYwrQKo4QgURig1EuKYaJgVhM16a",
  "key24": "5HggewbPJUAHBQQo4Q8y5WvzKxymLpAHGSsmBrqQrJpZfbFrnRcfZtuCeyLt16CB6B4WAQXQ2s7t85dSFFi9jNC8",
  "key25": "4RNej2RBgLQ64LezJmozvy8M9TBTpaxvW7UMVKauW5QMyuWTWs5YtTYTQbbCSBosh1aRTJyfXSNq7AuB5Ksz6iVJ",
  "key26": "2bVmh86DmdGFXCca8TasWtFGjAw9UVgWxSHRhoU7Zd5Kmdea3yr742QxKA25hfGAAFmZDrKhGKeCYEBWw8En6WmQ",
  "key27": "5TeSXSVrxbMZhmZGsdxhgz2JoYoPMXVWQRxKUXqKkFq4pM7JUFw7XFPjCAgAnU4PYgBwsdhsj3795HqabWGnZUKJ",
  "key28": "4eXEV9pbZRc9wqXScHbPkQEueGtuSNgFZqHqkf3PXV8CQZVDt1hwcHQV3gaRYu28n4281Wi7rPSJBVmNZYo9FpUX",
  "key29": "KgRwUEz7DEvRbT9vYfdNKowXs9VEiBRMD8FAHW4ocrnod6d7T4WgfMyKYeDJfukX1tcEk1rPzNcaS1kdPUa3Stu"
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
