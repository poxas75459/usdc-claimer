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
    "5Q6xHgHeNgiGBpuqAXVTEzhfubzdQCWjRKAoPMwDdc7jjUstJfct4a3KG4bocThTR69LT1jY6Nb19RNZiJbrTYiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnnoherWZx22YyxE23HTbN6L1dXhrGo1zhDvVYmfGZ8gR6RZwdJP8vHqFqqzVtgL5wDaUnb1ZEb8kAoXDnYBFRq",
  "key1": "YL6VMvGySD1H8X6go7QySAq8wEZBvamnfbrCfCTMvq8FApjpHmn31uGz9SjUGp2NJK52rZTDt6BDNs6JvRHhKd3",
  "key2": "5NBqnM3pWg81yZnveJ8pN5FdGEbfS8RqToH9YKrB151aNhGqiSFmHSPLWDGXT14u29EvX8RxdCP4tZU3fwB6LPYa",
  "key3": "reCYYyr6hUUgU4MqxYGdjHTLJKaHohPWqmD3VY9BnmvCfxdPCbZxXqd78MjxWhwzv9FCwSF2BRqGK4yW69pP93Y",
  "key4": "2R83r95aVjfLJFbhH75mm2gC8GRQiorKf977v6pAU8JFiKzaqnD9Dais5Btu43nP6K7z56TQq34tiMAKAmza3Ci8",
  "key5": "5GaKgMnqRgBT4xbnBiTHQ1oECfMvi7d11cywpMdERtVJSQC9jbZhh6ZAPE7wf7g1tKyF4JKxJUJr7iN9dmaUKsTJ",
  "key6": "3VsZK9VAo2wrV5HMNq3HEUY3FC71SnHcSGrKoJnnQ3AZj9iyZD7sVzHV1MqczaNZFionmAoWVurhK61Jv2AwQ5XF",
  "key7": "PoTLw7JmEqZGZFwE14kWpk23J4u7AxWbCmFNAQWt9bDJGeusXZLAhfB4vS1cZDJFh7h8TPYGcDffs4ghquFWn3b",
  "key8": "5pDs8JbEtdi3q4dJnbiqv68iq8xDFi8AGNhrjSDipnCEkLEWANzW8S2Xh5aifx6HQmZv99ejocBbnshbTwCYwLkd",
  "key9": "4XHTrZjQrHvd2sAmQSdgdCTByv97v3XLAygGJqU8koHA6AfbGZdnMRdhuF4d5CMtEc3cWcQ3xXgF2dJL8DWepgm5",
  "key10": "2SdqjbuxfjhyexSoXxgw9qCiSKXpS46H6HPmKhPoBtu3ynQL8buJLCmwpE1uJqpKXgH4V1X5wT5HV72dX9HhjEdc",
  "key11": "SH6iji2ybKMUiD41z9Cu28fBWhJ1vGJ3mCQDgAjMiyoTuVREjfPN8ikSV1Gpzpz4s3PVScgyyCxKb2GwZzoqAiR",
  "key12": "5EJ1iMZygKQRxz981A8zENh2RGDEeK7iLqjjwvmVHMt5zQt9mzDYqSWnZr6jTdX6XAq2UhpGUA2nKKaYF7kCwYiE",
  "key13": "57yNHMoodHMc37GwnmU5qibXozGTS3BXazYBMnBx4yHNSrA7u5hZ5JXsvM5vtN81W5oSznePgJ7MwfSrWjYcGVsy",
  "key14": "TG5gqoHumMrXvkvAwBKU9yEum3tjiGwiNMstizgd7ZdrZFfANDXMqHJHuUVGaNYHhPzFcPY6EpKT4fRTZ3RPrjM",
  "key15": "2jiDNBytX1Y7qX9ufzWt9ZNJnZymJ7roZhhwucsxmQwWpMdKpffCQ6ABYWogKjFQTggy7Jcvm2hm3WvnkArTRTDG",
  "key16": "5MiYLQH2hav7PKaYRkRLDVKhZNzCgrzCLtKcjwRTGmP7Pdo73PzLQjSmLv2RYheg269NtT7218CPNQ57FkcCYg7d",
  "key17": "GDZAtzjzZ3sSiJJMnqa27eL6enMobiyhzr1VqAEw9Y6mXKdYF9ATguSJc3EcAUk8fVp5wrXFtvB3LGQr9KtuvTi",
  "key18": "3BdNFpSHS5eue4sfog7ackVpehjEyFe3WtyHPgaUNAzg4giBwsoYgMsKMrmrXBr5nTRJDAX7v8zW68QkBQx2SMGU",
  "key19": "2trzgZHKjcDRTrcBfBbfnugmJSWeS84Rmp5Bew19tgoTt157PSGWi5TCvEenbtw8YYVqR583BsESuB8MiGiKzs4E",
  "key20": "5sC7icYhNTHX6bq6et1wUjTbHATf5GWqGjDD9V62vVtYXq6Xn5C5cRXC5drYkZs1QUeWjPywHvcraqs61H45dSqd",
  "key21": "3fjSEuZvDyh7VQ5nuGQqdH377pgZEct7SRBKCRMZvJSsUdg5ESwqadgehKXF6qAeZryesoL1dp5ns8Ku7nmBPvRy",
  "key22": "3PLy3HPdChpawEyAvAxExQy17J7XQDaMVX6v6PuTwhJAUjuTtPsycpYrZgghNQj2HtVe2qso3ftA7YBeavm2mTSD",
  "key23": "3eaD9k9PvVHXgDV8zZYeAfVbSYUp9Ww9KTWyuq3jK4y6tQn3gEB77kRhcBJaTiFVr9Vf1wiJDJ2oqT3WeFvvSHWZ",
  "key24": "4Tux7ku14GCDtBciuuCPWM5BTWaFNDKcQeFuCiZxR8Wyy8SqRS92yAsmzfWcnPYAvhFF4kBvv8usBkaSJTmhxVWA",
  "key25": "51yR1ha3WMLWQkWFsiAapHwriKD5YXNwH6yfczuuZkqeAaUcXtKYUT1T67jqguwT7MUsjkeNpC8Uicqyz4gesLcg",
  "key26": "4DQb3KsVSJHzf8GjZbPWYe6ep8Lxk34LgzcVWkb4D2LxFCSxZMzW2wTQ1YzAYSp6hPTRcURff2seb17zgdZGmKzL",
  "key27": "3Yxrbhe6u9iLftvpjd4XmZV57MrFS2T5FqsnKUSYqUCd5BT7SLsFhm3nn3XA3uZqQibvAQzpDVL8atrUPkwRVLY3",
  "key28": "4x5uL57j7vDgH5Hx2PUNZWBLwuWSHfaoaztTLF1EKw1VLzQoGbZoj8yt594r3ChwFMrabrMTAtFqiRmvVajS8QB6",
  "key29": "3PNG8Z2ys1cyhpi941M8twkdZStYeY2eZx9LT46BrbVU7m1HfXfufeWZzvqKzVSnM5P2vgiFyjuMfvWsATNmSLzY",
  "key30": "4nfxzGcmQ5F3n4vSXprwaHiB45Hh244nHhKDPmZd1xhmTW5eSFKBQoTwaUbZE1ZVBfFfWkaHTYbLW1U9ZtRJaoYu"
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
