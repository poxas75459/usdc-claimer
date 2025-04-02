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
    "2Eac44VHr31doYLgWF24HLR5dfZiPLro8rduxdvBAWK9soiBV24vj8Bw3kGQB1frudZoV8we2HLnC4Hpppo13zcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WdKL77hreQFSWk8434SJnv1xV24DcGiEsLwHEVrvVD3oE8LqjB5gzaPyJ1sJsG7bR1M9sUafaLc2sukrCYEaxew",
  "key1": "3QuSnpBCMbZa4CaokCcw6sRKewDwM7q18F8jimbdA6yuZcEtXJ672kuAh2QGRa1Bw6qbhAWzg8kZE5a1gFbfG4jC",
  "key2": "4wDi8JbyhNqgw9rbSYJJrbK6ZbVpt6EtxYnTEKSmdscDbTVMTe5psk7x9su8BuuQcZbNbEtwQUsxLYH8RcB7kN1P",
  "key3": "4ABt4iN6XeV6vf3W9roYZvdGUz5YPK89d5K27B2EddnhVncLHgSTj1jfDKgT9VBcB5zbMzwzoUhgYbpVKPZ4srMz",
  "key4": "35qFhzmgKbTd7fnFDseCpZhiJ12hEVhJFdMAwQT25oavJc25jYxKV86zAy1CMnu3NcxHFE8s9EyAiGw5Ay3QHHim",
  "key5": "5tUBTrybD7wNXvZ7gWmgG4Qh5AcGB9F2bJxw85qGTdVe7Fm2ZE8yvftH8r8nwc2wFL8RLbnqHLhHp1uMuPFUxhSx",
  "key6": "3YTuwGJri34bfKkaigJvd2JuhKxtoDgdTBxrATXHgByge3QNj3uWfvvMwxoa3mFzUMXg3b4houNcGQi7vChE7veQ",
  "key7": "2PqdbyHkFChRrucG1JbFLDMgit3QurVTEke9BFVVxASQTEY1akmMnini6em3NK2BRmrQwGhrbk9hemvbhCzAs83v",
  "key8": "2CpZQ3n8SyEeTJshSguLJNcGfKDgFn9z28ndQrbggYC9kxYCZ98tHT2BwXkXMSFqmxGwGtCbckVKrpCkgonniKxe",
  "key9": "4cdX56jxboFnoBqzEFngi6nMdBMkA3DLp2ctwNa8N54socSkBMtDUw2bKc4CaBoZw39UD2dELs3AdCJnfJMCScxq",
  "key10": "3UNh1KVMJZk8ew4HR7pWc28M8D6AsK8QCBnwFAw7HmGDqv4KfwUyFL7DGXGAQR9agsvN9EEUpBd6sBfvsi1EgDK",
  "key11": "5JHVbovvF1zBYZtLvwEv1doPyzdhwZZMyVWFhZSG2hZeCefQa23fm2Ewtq4mJa2fvT7HhhfCbFkFF4d2ANvQ3dNq",
  "key12": "3Y11a7y7EmhCeea1DDKyV1hJgpegWQCbFm6TKKJDtxcJDbrsV1KsuVtRpWDLBhkDNZCvByw6kFsLvq5WwcUCrjAX",
  "key13": "21uDGpRRqfRzQHA38mACqxZiVqBDqXXc9xR1e7FSMQF6eMk19fyLDU3Afw1nqAiNrdY1w8a4e4WLwDfPw9DJrMfh",
  "key14": "67TBXTzVdAW4dT6u7NYXeYE62zXsS2PWPASn3KBByrQycwr7nFXqJuZSnHXYtGWmV1VTAERL58zv4DHfrQZjecmX",
  "key15": "4sNkBCZDdyNb73f7tx2WSiXo8xyZqsd8mALoFSpjPsSZmCDjVuf6BNRv9Jwrkqm88EoymGE4vgqs8SDd5eLhyBFc",
  "key16": "58HRVyKBtm2T8k173GK6eNpAHouh11qjgJ8MSTa79fcv8QVaRrw4MwM3pNYgGvW8iojoXASego4kC5nTAGmUeqKS",
  "key17": "52wiefJ6TvsLLJYoBWLsWXkgh16DHVGZww99skD3Dbfvbwc1s7VQi9JxWceWedfq6YksR6eZRY29YwFfrhBwAJSW",
  "key18": "7Do1g5MVpKnXoBGMz8VyQEVBd9VS51Ro7aBh3EQuZGwqGRv36qWJLZwtrnipzpdeFh9tcJueAuN47Z9fqMzh6WP",
  "key19": "3GzPoVCQ7t8rdCuPUSxgz5RaMFSmLicLzGauy4gKN8N1YJgZT1s52p17bRKxFoeKpmgeqQY6bC7stZmpjzifSuk1",
  "key20": "3gefdpLqdBTptyHiaVSRXUzaPUfdtemjusDXvbJE8S5xdA8MJL8mtCrMWVkrTBUyMBpDXsVEU2MvjMx37UHdb5Jt",
  "key21": "5Bi2Pto65MbrQVoz1y3nvFrQn3mMXFxYRiNYqpwH8gFKff41vCMsUyv94jm63Dw68WJh5CittWGXkA8ebkQdLpZs",
  "key22": "3pZtAGiPF2rPSkyyx5hLcECFc5AvdCK7JJkzbERAmeNXrZk6vZSGuFKKmF9MbeVPciVC8FHDFsUpxZ8GKVSiYpSN",
  "key23": "4GzQipKJRvxPBNQMZGvqLYURMrZYH4fh8HAe8v7gAu83PAHKHccBihMPxb7NBMfXdiKTCtS2qxHG3iVu1GSGSpwF",
  "key24": "2BeeKL2vhApzoGzShRcc317nUSZGzVEcZjYbaMvLb1BxKTo3MK4SM9j9xpeMGsCbrvcfG93UjSxMyDMuWj3We8VN",
  "key25": "53tPmiDot3yNZ43pa8J4XPnMnUvUX1euSRD8UiTL9pJ6L9nKWDQw1qTDQae2ZaM1uz2LVJQggbtYKHozZHGGWuwK",
  "key26": "3CoNDVviF8RjeLCAMpbPEZtgxuw1pJ8693LZ9yiPURysE86A3952MpkMmGYneczoyNu64dbaKzHee2vYaVdZUmWz",
  "key27": "55P3XMzccWMJTo1jtPcAAeDcN7CxLuv61SMs9avCALm8uHBEciSFQffJP2tASREkpriSPGtVJ6huCb9LiqpAsLUc",
  "key28": "QAD1qUiwLtvqJTC5W7ftKrG3z5QY88QfyTQDpxn5DG5qLwMNH6kmHb2mZQYiAybRw2FNMKahh9roRPXr2koib67",
  "key29": "3c8epaewCzxLeWcLe7M9wHpX8jvZKAEU9bRzwQoPSJNXABW4iHg1ifauQzuj62RZuspVcPZ4ufgVcUP1UWs7q5cb",
  "key30": "4idhF9K4afDixH4yfpRZrbMShXpCC61fD2qyMJ89GWjeBEEA2Ug9f4JKyn1HsumLBXvijP2eogdatsZD12NJVArX",
  "key31": "586mshaRUmLKjKjmyqzC4BYGJJAapf2Dq29UWxcqh7GxPB5urTKcLTBxUjuVu8wKh7bLPWYMKT9z6ztKrULRjwyD",
  "key32": "2H6fBnEaunJJLooVGTBoba2UENazBVWbWe2uE7qmnRybqMPRgqFiZeGXBFUYma9jxcjFqBk2BYMFQQvwJFkobWL4",
  "key33": "3sFDwjpvYibiTc9smhPe5hmV33GsLk15JoTY7NebZoGQzwrqMV1T3AJzrkPe5rFoa4h2WxzzzX5Fj5MK9Mi6vHYS",
  "key34": "BA4SsbLXi6vTdKxHKGAJWjc55RKFBiTQqgKFdk7RMJRJKYswRAZ63GkTvxZDgu1PGRcWsdQBeiiXtsygZiCm5eD",
  "key35": "5Lbb1tMPYJR3eY9jrpEAhynqJ9V4StPVFjBMe9XS1ET853h6UpscgqSbpCQvVir4FTpFjpQwm5xtd1kU7PGwokZX",
  "key36": "27Jjs9NMihiPvWCPHNh8qWgNRaJGxLWLjkaXo9KWj3w2efDHpt1eHJDvh5eQyCWuoJUATMZnF17qpusVFXW87zLC",
  "key37": "24BNrjfXt6n5fQTW5f4vjzceq9gRkNXfKJEx3DbmrxLZXdDfg27RYtivz54vS8tVdjnwv8JYigzmMU5jzrHebtm2",
  "key38": "3HvcDNNZCKRgbzkDbVQL6z6y6J99YRVAoWjJQbv1CH7RCGFkACKNigiJCPDyPk7QhDwDFZpwxLfGavLpzVQ7V5Sh",
  "key39": "47GbTibNcqkuPBHvD7vGHijq7QMVgGRs68z3PiRFsn3MVFEtzbhYymiamsk79vN3KiEGQfXUKzonA35zpeRzZEUY",
  "key40": "2DaoPBSSeoCnk7hHdCCZfcuTeWtbcBZQdDK91P3Y4N8mtsD6mEqzE54VAXRgXhjZriFUC71qgrWLuLDL9ocqLvKu",
  "key41": "2rSdytW7yYNcPZWD5DpoLS9s5zyoapmcYQrfy5rp4bkBdQejxy7cGidJANswuRQP5L5DkNiDhomSPvUo3kqDB5mt",
  "key42": "55uiVcMc7bkcvt7FdQgcTWTzdvthBwJmWWwY3cLadXUzXBWBdtTqcGaNnGh9LLLUuy1vR5UAgxnSq8xCBxHToaZu",
  "key43": "5abxiCaNp7SVN8kpu3FBHPbYQax7MiMSeusuPRYsYGy3GbrzaHLUGN5J2pjbv2US9Chzqp2pDuZsteYGSuWgUF4Z",
  "key44": "5psKC3tz8YyczC5xxJCnWg8JTLtgCXVkjAw41Rw3NjF7HuXfFxSj2Z3pFqgQ717mWLX4Fb9TcdgoDgFJxEwNARJH"
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
