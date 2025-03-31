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
    "hL8PXt1rMT2h4GEbuu5STWtxfEK9CQBWz71kSfqyZmWM6FcPQ4CL4bWifdz4DRaPKtWcBN3F9gRTHgnwXS6T8dR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDe155afu2JA7VkJnJbBzaidnZTDyRqWhBSp8FxvcCETSkgdSpTjGqV26vBwwZ1s66tyRKfbDMjQcPLd4v8t6H",
  "key1": "5Wq4VeGq8uNvmQi7JVpRVQ6FZBb7yxT6G8UxMG6sv43wQK9vGfLM3qy1jR3pmiZMJg3xkw3BtTcP9ojYJHR2tsPm",
  "key2": "3hzzv2TwiBWuKPtVs19BGhTm2QUW7KKrvdYcwpVR9opp7xxgZQmLDX4jT9WupL2UHqvyXtZ4CSKvQRs1Du7hUFTm",
  "key3": "2iVdvXYkY8ZKFJpoCoSiTE6MWMWZwHTGYFiuAJm931ix6U7ArkeR76QGEXAERdkLLozgSzXdKqxQ7tpY2QqYJUjG",
  "key4": "49PsyADGJAijnLQ7g2XNvckBZHUpnhqYnpY1uk6RGb24wVtyFsUcytJQQEcXpYz7U5Yw4WUZiMQgnMiYCHQdibvH",
  "key5": "3iHtRoaGnS7uUs154djkWSEkC2oMdL6cqEZhRqH3L6TPnzVmi8us72J5HJYcRL7ifA54aRQyKmRAvBA4cc7wdhKG",
  "key6": "5Aj6FNuTiMTUu4wXEMd6QbQmJ8JrJ2Z6WBNQfrD9ycEBatSSjv9zZMha3EyNpnRLC1NhRsk3Roz9WtnCzQRnmnsW",
  "key7": "4S6NmP2w34cH8uPsBzMbGtTQzW7pwJHsktdbuezEhYhaPUrtrYXXyXtgVkWGVeLBm2MqFZ2sDPE8rX9mrfc7NMg2",
  "key8": "fVrFms8pWTTgYaY9yvCSrmq6hD54mUJhAsSduuNkDsTiH9HY1X4ApREjM5RKpSxcrJiuFUVng599bmgVGXSYuXV",
  "key9": "ZwLkY3CgEVgTGvkCmQTgure9yiyR2L2KF8AzFkvE7FFPqVDVZZZJ98XDuMVEVV6TcXemn6MfmThVhPkhXGEm4sm",
  "key10": "394KG7RiB4NsheFpr7BJEzaz8Ks6VfESyuJpVevZNqTz7JwtftdmopYAZ9xDPGHroCnLifT3bk5z24vKzdTxpkDH",
  "key11": "3UVJMARcGMQg1BKSSQzNj9ZmowVKE1bbZQ1sUFhEftAcjdXNbtZnShCTDRhCSWPps9CyYuGof1GpWvXagLhQLxC3",
  "key12": "3LfAedi43m27516F7YQJH9ku9DXt4HcZb7h8j3bYMFyTjgBHx7eVF8AW5JZukJ4na7PBm2787iUNm4zwihed7VxD",
  "key13": "5JQSBhvyQK3xSB3MrUN2igjB7ZWatjMK4NiMfGfWxGJRRtq4KhDScGfoGABduMMKsCcpDYJU2pwJBDYuxNyobsED",
  "key14": "3xGHZ3GhZ9pCbWJSQcACy1MudhmFK6riQb7SCuoKoxJoAB82EFvehCMyUuhJHYMRiNk4fbdiaiQpK3qDuDCnKNF9",
  "key15": "5qLD52sjkMfcGncPLecqxx9DK4wrGPoFj4vRxtEYWLXGSChj9TEEoJx2dE6Qa1M8BAMGH9v7LH6SYeqYQArTxGg5",
  "key16": "2Xcn8bG7dGKLARhurNWAKsDbBy6aYLjHh9tVjhp5SUbt5Q34SnDpJEQqYQZMrcr21JAsUjttafbN4h6dzjhUPcbY",
  "key17": "4Q3fU9ELX4DQHhQMgS6aMgSYt1TBBvkPakqt2H2T8b4X6aSTbC3dER8WPcuxJN65PwpBzLCh5VgtnUQDSkTHebk9",
  "key18": "3m8uFDdb9dkSGSAguvFHJM8g2Doc2u8PzJaHML2VFheikDQf8btEBqiPUK4GeMbYXNG2arcwRfYMrkQ1aMQ6yydC",
  "key19": "2344dxF3STLdQroNxtBz2P51ynHkRwy3JqSjfZfoBZDvcTS1kftP9un92g9d51DTiPJ5qe4ZTt9jrnuNcj4TR4Jz",
  "key20": "51XZHTYYRef6P1q56GSvy6h6N3uou8VBEdiNoVEZLbndLw92oVdpA2CcL5dRKtdqXeRifePLx9ze6BWEriNMx5jm",
  "key21": "5rsF6hsAMa1McUqRPSK1eEBYm7uBqhmA4Zwmy3omcLYzvxwNvAbHRJH4cmARTzh2BVSPzn2kdkWTL9m3f3hj2kfe",
  "key22": "5TLzAVdq5YqxYVGKFuLu1fEGr2tNys7euZ4h6GTxVYj48R7HzUyccWUW13VicGmHs8mEzEfcb4ycWv7oMwyx9ei6",
  "key23": "2bU91JtT4eQbWURFFoySfnWdAQ52C8u2PabMGtCfkDniFo4t3swcfQXuQa4Ln4dXUb5o9amio7gk2Y1UhVYzNNZz",
  "key24": "3XNLvoH94DH1bNxrQrxBFbDJyyWqZ1mHHBa5vqS1P28kBz5Yhc4tTwa8weB6pRKTFepgPeKhWeVpx96xoCjkjxHZ",
  "key25": "4UbY6Leefy8AUVwuzRis1hTF69CcLMfrTpWozFu8igCjgNagkcaPW58FzwZspKEUGecvWueG4jZ8ifNcuiguxE1v",
  "key26": "1849sJo4UAxuuDUHN9F29eovr9G2ZiNKeR4HkoQ93kHkXrKER9Kmn8Nz4qFyZL9WWqTn4UFfJBoWHaFxSdFrVNz",
  "key27": "GUsMFQWGBbHTxFwi2sBYnLw3jsnTptYqpeq7rVqrK7c87e4rzbzkM5AsLeUgvVcLhahQGCUybhugt2frtC6kjqv",
  "key28": "2FP7zsLuwGpvwxjSHVEPiVcfVGruyc9LZDacJqtApBD5xZxDPue6k2mnvGMNuc9KDRHtif59ZfChdrPCba3UzGUT",
  "key29": "4MoMtpJTb9FKcn6XBVDRB9j39E4QMDi11fo6SH9HL6Mv5X63acETGt3s4dquqL8kCdAm3CqUCg9f7f7AXfkcBxuE",
  "key30": "38qzhGu5GbKCtR7PQJVViwne4zFggUUyRgXD19CM1KLH3Z8J3NA1uLFJzZmE6ZqBycZRdaMtNYLfXCGoN96gqFj5",
  "key31": "2SZ5JbGZJF8u9qUqbrxPidciu6v69kYchVSNrRDYhvZn3eWb4DXfzrX8NjjGXJ46uU6STn3AWnvq4VZ9d3s3EUF2"
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
