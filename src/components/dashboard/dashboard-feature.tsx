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
    "5G78ntXK38PoL88ERHqfUnpzUWEZPNw15ju3UELTFvYQ7KRKsNcJ7EK8whdUmM1veLo1swtAtmjmzqLGUPn1NniZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kYcPU9wPxRy3AMJkJbPv96Sswrk6hEj916VXFJgXUHWeMxvyy4wV4G7a95JZm53ztHR5MCFxs6cBVqArKAbQAfn",
  "key1": "2F3vQDy5fpqmtsKKsWPpZv4X2B8vQWcVtE4Zf5XdtT37yqrSB9kqPvh9joeTVm64KgjubsBgqZYxiBNgm9A8rAq9",
  "key2": "5BcbsrgUsnjAZn7C3GjbKyAMSXsxVR3afLrMsRXVUL6qn92EKgUzacjGRpEgKSCR7dQb1oNs6ni7JhF2j4Piyj2Y",
  "key3": "w5TCFYxL5u9fx6RErc2tVkodeyYccR2coAnSZdp9F4ZwVBqMWyTYVBo6F9sh8rrhSfqaGWagkzSux2uT7sUwG9P",
  "key4": "49acqthmR5sWXBjGGAkmc4uDZRUFHwKL58U8u3GSYKN7Qkt35VwgEHZweNuxTgG38qtDDF2ZDtKZPLtdRRt78LVt",
  "key5": "5scnkYC2QKtJXH4dabRgRvHFmHWWnjdrhg8BTougTcgRww3coDQtPcsxqFhpS28MHYfpavjN5dmHF4TEP3snkLij",
  "key6": "3V1Gre57z19hD5PwRa6C3Bnvz2cQSXbxXAsWFWgTxAGtBBQJSS1BjYA9wG8TAgYYyZ35Bq24uNZutUJ2gbwByNQ1",
  "key7": "k7dyLwVmnH412sq433SV3y5haTD4NcrsrnrgXvkF763mZsxHrp9B4m65LDSupQhXN5QYrVeqBh1un9a3g6XB49N",
  "key8": "hk9fNVJhFgC3H1zHE7fpsjHGPbXZtRNx4d2gPtz1GfcX3ibgad3B4drs5GUj5Mu41wRpM9HDjQtJUe447b6e4Kn",
  "key9": "5ru8Y9fwQLhhEqWAxdTZQb9FDwRR8f1C77ZV8n7ZDEgEkNMdb3V7CFNXRfXZEQi2ctG4p3hxiwmZE8ZsJDV48u2S",
  "key10": "4ZgykrLyoea7pPvGsQMQ55DcN1YzpyyBA7abWXXq8pcYec28suotLeGz1DZ9SGaB9yKNXNQHQAYWE53Vk3KEY4Lq",
  "key11": "2kfkdqzbj12Qkqdq3wC1HjMhKU7oiKeRhVHZ1mGazKRB5SYg3425VdpXSDPHGNDkcgisvoXiUZwAqBCCovatpFGE",
  "key12": "4iaZBVKWG57dd44GR6eKVG8e3o2XF4SofDBK9gBMWwURYiD3zpZBDGTU4Umhdrs3turTZDNMTHCtEfUwRj4QFjny",
  "key13": "4KGB1wAonVAL9fS3GQT3Loq5edfobXtX94hw3S817wgVZTjwwZS1N3CvJofkkqdxRBdEFkrheVBd76Au9GEbjaqW",
  "key14": "4w1Uod7bedw9cpi7yAGpwvgNRpp6RQEx6qab8JBcMAwdPKfriKdqDfP99mddj7SXLq3R5tTc6VMpia2eD3BPPZhM",
  "key15": "3B4j5kPiMe1fgTbnJCQU5qapcL8hgCUeoUDv3TxfgZS6Xb3VDPY3KkVKvi1mvmFW6gFMogQ9bsSFLRGGd6ySLZwd",
  "key16": "2jYNZHHUJC9cM7hmeCzg1z22QjFVdFXF4heL8knQuVQgdharKzFfMgksDnayGJQJyFGDJFbnaKbZoZtUQjjjcNoK",
  "key17": "2qdNR4zkFL14t8Ut6i3BEXqYFGGSpDjCi35pEhf3ESytpP3MpQBRf68jTvtE8kHYkVU3VVumwH4qjc4ocAxXJp9",
  "key18": "5J9bmoh5nD5Ke9P8caSjwHVBL9VXzrHvGoyLmQz7XXtnFyeoxHwtUKGwCnFGgebpycHNir8WujX9ev31NqTz6vV9",
  "key19": "4mFYbPch3PjT581NGEVaMKsHEJ8HNGqfnyeGDbynTgEZy4PVkEqETUN9TuQ9bNdPpRC5A6Ny1KivMvUb2ReL3gni",
  "key20": "4YiRYSJgbDG9qEEqQy1i72fbqb4F6TZFsJzmVkEK6CkkyPYsGMZykoPn5FRNjna5U8n3RD1DfVv95V1G63cEsTvs",
  "key21": "49N7ZqqYLfzFb3GGNwXnKQqYBr47m6BqahxX27ZvT8ykNSDTF4DQMFvB83A9EdZm6sgGZKH3CQYgftxD3PfZkaDX",
  "key22": "3H9g47xtKBGu84epmdQ3PqiTPXgiQUtwHCVtpDJ4VeGB8haSDaciqFvrFrUxKbnrEA1yEQkQhWqwrkzWcSHK8UFV",
  "key23": "efgzZRjp6JJW8p2bc7kmzXif6HFJ7GG2yw7jGoodt1fc7Yep5bs2giZDQ2ycHNvF1p5qh9znSWnckdzv8aDUF8d",
  "key24": "2NTnmvf2RHUyWEzRVV6Xjzb88k1tckeajKvS83qftDhiY2HEm69FMUJbK6hM5JCCE9jB62hyAzjYFBW5EdWCHQeW",
  "key25": "5SeZasXkb4MqAFr3akt1xciSfhaTkQF7UhXi6DhbANegFNrZFcbzKmk6ZpwKmmk8WMXywnP5yhnzKXLjcubvvton",
  "key26": "iFeWP9JRRht3ZoTc92Vba1Ea1ho1doaXyvc1y2QitBTnKoyMmdp9UXJWpbQvsH5k38WCGrdvibDo1AmsgiRZnMD",
  "key27": "P2n2J4DxecW1aTNFpq6ZxCecS3xQx4sN5apHJxgKwLvoodFoMYfMJ2R9T1Qcc92JCqgNWDPxzvbyv7NH1iiwuMv",
  "key28": "5K522r5hSCwrnorxEqs3MqNiNkiHhUzDKcnjtuLYkNJLgbTSQ6T985XKB1BFzSTCzaQwpQTLtMQq6X42BQ8HPMdu",
  "key29": "2qRyg26eaS4Xw3RmJnEigeEuMg2La3x8rVzpYyc1PYSy6ccw3FffkzesXnJ77au5XH5PhHYwhFyN6vZKGhy8JoWp",
  "key30": "32QPzTo5Vk62V15kYVbrqC31BkLYihgN1ujewiv6jypPqdqUFmw3stShp7X99SG5JTHjMafgL2RU5sjGNMRjgjXV",
  "key31": "AuYSsTjsD8BxxHDDA6Nvn4BFiNScQ4vKMXBYkZeuXfG2scNunLBRdZ76akfpFMxeMW8vaShjsgWTpPyh1UcLn92",
  "key32": "4KFmwgCKjLPHzgybLoieBFYCzQwtX2apBaHhENeudscxUoGRswAvjkM9gZdfWjg7GKmMQkunjAYD5MBikTSX4d2H",
  "key33": "2Tcyg9oGvLDWD7z2iZfob35mjFQZD4G8UUuCxb4LeZXucu1TURRAxnRfKZfK5cvs9ZhMVoW199eDPySohWETaQBL",
  "key34": "4WpZmmncrX6wKzb5DcP1hX7i3dQNerymje89ogVf86pvMtELYH4nLFoBMw3UrMSt3JYyaSb8us9MJwmv9EqXwvgL",
  "key35": "66PWakWsBTNZm6SsuBr7zyzLgPp6CZc8TXf6WmAJU68msTJDNhE4kaHrGoEBdwCvrPqmUS9cNRdQ16CpAhmmUYhf",
  "key36": "3jEH38kHd9ePRBx5xZgQRBBqmmQbwRLMHuYK3jf1aEjeJKfALSmVp57yU6MbgBU4nGdaKcQQojUV7AFeeyrH2bma",
  "key37": "44AfzJDmWwAVBw82YmjXEfadYoRQbXBhGWayJhRHoyhr65sg1RsjsS7Ero9jLqyWbkVfigXxna6gMbr8sqeUVJ8y",
  "key38": "4znpxt7EeCcgCXkQDsZMWQHvxmeUYo9CqakcBk24WnyHz9tsfB1hyPk7zqB7VYi2jXa8ZtQAogDGwAmE3ysY3JrT",
  "key39": "4aH8EgrwpR7ekXksh1XfR7Te2tnUgaj9kjC27DQ8Ssyh4xDomHhqZYbDS1FtNMCdNYxULHUuUq5miW9CidQ8akay",
  "key40": "5emnkRrCNDZfbc2CfUGvRCG2umssAzjdaogvZo43B8gBrrN3aoBSarbixiVsixCgzRB4wWWruEtW1q6FH5n4GWi5",
  "key41": "4xZL2K6BYvF4GUs8VaFFhGC2nNYXNhNtcML8C1JjCvcT2SuLqvhNwLWRNW5DNfzDZZJRU3HN4EBixvFXpzyu4Wfo",
  "key42": "J5XmAqG3gXmPG5ydt9FyMz6NGYtUsVEC9f5wyrnFfHExp4E54RNYDszJNYq7koYJGdD3FhGFBvPoDnbasvAbNyC",
  "key43": "3734wuodwtcm39FrwN7SNfC5PBhxvtce55kexNRfQYg4xMMwGNmin96B7mSAmWZrF9JxuA58ofKPzn29eNmap1QH"
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
