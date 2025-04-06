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
    "3kn8UtjeDVHvnCygyBBHbcoUdiJtne5ZSavU9KcGs5zFwfQh2nbWcfeDyjJYNM7TeWy19yQHKtyMmppFm1BF285"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4t3QUTEewpTnDTPcRX16UV5btzEp9iyoH3F1DhThNsbPKkRGeX9FA8Ue68vUQo37qJCzjGFAny9Uex9oTNjJw7",
  "key1": "5QhsDojY7PtDw792REHqeqfFLF8Y4Xv7dLN9yYeLb4i9kcnMESQ47LhJwc8krJDWLxptWSoD9WGxhfVnXLpqUTpU",
  "key2": "2DA4y9gw7SvXVnW7LZyNNe27zpZhC8hJmTdBiTVVJs6DBXZPCysjEvLXc3xGoMPzX2RmMgc7qwcad6eqDEL7FUt6",
  "key3": "4TkiUvTb2xdhDeEtV7qCT3baFKG4SYcC6dthDXDch8wiSiM9wjuQC5dkbQ2GyQqZ8bjmA1rDMxvAv5HWZcPNACwu",
  "key4": "bZepJty7pMLrpUQfQue4XT5ex5U6RLRr35J5F1bbUNSwAobpzEPTC3hEiPhppBX1nfewkrxVTzQuD6jHHFtYAGn",
  "key5": "dw1tbLeDbt6yoPLCT4ftbvzJtqNiDJHpPAiebRPYFgZNKKR5x5q6f6nwG96PbrQeViTb2ezhcFC1RizJeb7JDBt",
  "key6": "2Ay4xbLcuRG2HNNga5HtSZJts6sABSvXtygGtVE7zQtiNEEpCDT7hUQTw19XebCTvmwhBu6Rp22h7nCom8rS3HWK",
  "key7": "rg89yTPnwnQbgVEpSJh7YMoki4b2eV6bBCZhLqcsXx5VwaVdawd3uuDTN9yUULqV4ajAYPYwQCwCyP91WZveJ1h",
  "key8": "67WbWLZLm8rdt9uBChUpH1AePDf1Z1kdaMDaeJycwhaWnv9vTv4j3LQ8Fiko1QBevuGJLFoHJmxNayd7pNuvhCC",
  "key9": "3AQuM9viBgKJX9YXkdjSqyrv81BLuGNbUdPvTVPRTRbs8BACNPLUDc1mgsNC9n9i9sgriEYkASqUZ1LwSzzQ6ZuF",
  "key10": "2XP2EKRvYpz2oT9QRn7RG2FcC3WLLZu4KjUUkNMeXRPLMx9VmQXCJR2bYPGepuH9PJxxL4sJ7AoYe27hhGCsWj9B",
  "key11": "cmpiXGwP9Xg24WfF5YFYuUVBg8uBN7ax4P6Mv6R2Uixe6HpW3tkYcusrni8VajAVgjkp7iXixHxXgRVwQh3Wh48",
  "key12": "AFqpfT3r2vP7QFR4uCx6nJK3WCC4k5BntEDeXzxsTLw13ECFcCNT9y3QKRDDJdh8FuvDjfYEv5q1bkvKExJM99r",
  "key13": "3oRi14pm52G5CASpKgwVmUTogMpksTm2LfH45ZLUbLY1UBncPczqRDJc9gkjbF42YngL9x6VgNp7zqMpFjAk6uaA",
  "key14": "3XQ3KEXe8b5foUDMznFq6SMK2tUWGmiEjTqGbKTzag3WKtYEnAaS4a1Uw3pfmQdz7HiwrksVYxiHPpqGSWnMhBZn",
  "key15": "4uuruhjvv3QUdANiZXLKAqZYE5UGZTMQwutHhqF21jTe8147adNRtTGgV56qodZTyQzJ3Kf9qcHFDxf9TTVgtNUA",
  "key16": "Sw45HxpWpJpRgms95FUE7kBQVwdiZxaKLmVfCuJnKaZ1carthPqRWrdXKUX8BoTE8MCwp6PQ4YDwVGrG1qAKBzV",
  "key17": "2ZQ7FJAnFCgxmCVD8SfW6ve2hSxvcAA7PdPGLGMB6dGWM1LCn8wiUPWGFnUoP3fanGp45AuRswj2eCRXz5hRZN7j",
  "key18": "5JA5TEsnuC3FPSw7T5ZdXQDf1bhXBfMdSvi3X561dB5hxvr9e1tpLrrQPDaT5nEmRFgzQrQqmx58U8VappWTsBVh",
  "key19": "AhinQviDD8HrLmcrvvTPUrgva1o893TAZNe2NbpEo2nyp1yXyBPSMKGt56XVuJnhLKkTeGQcsmDJKZk59eGmrSn",
  "key20": "4VckJQ93ba45KxBpYKQm7ZD6FdkDAS3Ex86iUFpqBt6i4b3QycSkhZjYAY826UpEbzrXA5rXb3E3waNonf3gQh6y",
  "key21": "LgtLopxXB18Hg95TYsUnCtZjGC9ZQhLC3nDcWykHYXmq78tZrc25UBEXYG87aRbigk5nFrLD7PMJg1QS1k3omwy",
  "key22": "4cqLWxftJY5mCLk28TxkMM4XmBgHrnRPpY5NmrGTMR2NuHBdLpTHNAmoiRXUNi5eLifRdn1iBVbZXHTQHutMqjje",
  "key23": "H9sSzFbPMhjwDVQGDUGxAsXB4KVeG2SxnaVPreP1jXGNR8FNvgBQKnetAoscEharA2zRpUcwfB79h2ehnF5GsYD",
  "key24": "2ifdfmqt9TUdki9xn9eTHZmNbahZM32B2zo9mTuR7pGfmXbbPd17u6x1Fba3fr4Nqa1zMEwiWgjVWHJbzjhLsNff",
  "key25": "27YsbuKnXUijSUCWjxGB5Dsrwo2iuUb4fyY7B6zVFNvjrjQnT2QH3Xc34EgnLbgG2eRCPPWD5DbB2aim45TrkxzL",
  "key26": "nML2MMjytTQwFbb7YsZn1NVxWoLEb7umqD9ViTFc4bM6GVueRhGYbeaKadMRb7NMdg4gwEuuw6cy9GmrEkeFMZL",
  "key27": "aUY88unCVUayYsv1zNPTwpyFLtFyTMXMZFf4wWxhVzW4PaZCLmkUcmQp7i1x6MBrvksjfe6kLbGAatyzFJCTJDE",
  "key28": "2UpbVr7Sk4uAymyVdfSLKX8q11HcMbNf42WYbXWvGxBHWFrzNfN3qYXmGupt9aa3eqGjdY2HSq6S2Hm5DzcRPgWi",
  "key29": "2g1ScmNbf25bcYNANe3gPX4BCT2gTh4jU66HN8d7T8wFEWiBTVDMLsd6sJfYBvM48FHZ1BMWZdxch7PRh9RdjL4y",
  "key30": "2CVopXmu8Mc7A8VqUb1msQj9gBFBqGPoENgjJM6TkWSaWCwgFj4Kgoc3BRFWtbGJjt7nTbLSYcLQQXVsZ8vD6pg3",
  "key31": "67ZtxRxfZv8njYQVLCEfMW5VZya3mG2FK8JW1ZbCXE99SHVTJQMyeu31yrVd4Hm43hCvXVg4HyDpExsKY3PKzDES",
  "key32": "3MGYCBVH2UBg5QjNiCBE8xNM8F4Tqk4s7pXV1GdaZjBrXUVeY9ymZTDNyfcwM6Ssm9gqfqaB2x8QzmuzNWQwL5rh",
  "key33": "2oYP4C7KZrT4cWMkAm7VpnoL23A3hTbS8kMSzCpE3eH9SDvxKVUVor7KjLQbRxiYKdZELe5cYqHgzWJwSPDFKNnX",
  "key34": "5bL3T64FzHcmwepHrcP2TQwVGMTFDnE2Nvv22A54GAphynJK6TGHCPsbPjSSzFRFXEdnbM7S1RuoHpViVCtPW8PZ",
  "key35": "4uD7PaT6TjznMnhLokiJYuCsycuVehsV6V2LbqpJ8tuTHHgjJ2ETgoC4eyPLX4qQUAz9hc7JKQBQTfeQWY1eF6ap",
  "key36": "2mkKLzgFLK8cSouKxfKPeHdSEpkPZzmRN4SDRn7q8FRFLgSjjx1J6iZaxTRU1erG6zrtTu3YAE4NY8jLbR54zhPL",
  "key37": "2bRMxGUZg31o3VXubsLmi6kp7WtbUtkSxCg5HNvbwCKFXGeJ2iSSdFGvL2BFL3jFA64dn27bBsuJGnMiPEctEPoh",
  "key38": "2okcgPD5opDWNMG6AXdXNXmwH9ehtQoHkt5YjnmxjH89DqT6qmqHP1wMkux3vKcUqy5iP1isL9YNnPm7Q7ZrcJsz",
  "key39": "2kpqU7BuoeCy9moJbtCsLrV7LypMQ8KsuZpS1bJ66JJKFmx49dFqzZ8heeCNajLqT28aKBTWwTwCw4dKygnqGjsK"
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
