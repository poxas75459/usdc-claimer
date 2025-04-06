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
    "rv4kToE3E1bPmhWk4m9sCijxNnrPTvySTaaqJwVVPVjwqadxKTYj9hjBP2iYmTs7h2f1KQZKmp8V9gxos4i8JqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rJwFzdSguUg1nEhCoQ78fYbdoP6GJdvHfFK3v14h7P1SUcKeDtU48jhXvpCqLNNr9d7oHVdwnd68Kp7AGiMSaAC",
  "key1": "tjBiz1PHYxUsWxDiZkKzjMne5cJhtCj8z6DQMak743Ctj8HxJwV9YmeVbieRJ8deekagMJW9W6RSvzw2ejjy5y1",
  "key2": "2Rvua5kVE96rzvBZdZvzjwtFtDr17BqchegV96ukeeYBbwWv8ZNVFzWE7iGs9w5CRPE5XvdcMLjSqnw8fp9YyD9W",
  "key3": "381NyciS4FLhdLBwBBbnPU3hfxT9bqNm59WrT9DHY1pQjw8Awxep6PLC2PmHwCcjTnLAazyrU5s5MXeBT5Cv2RT",
  "key4": "3E57bgHu2XX4uiV2QeRVKvNvZAMLAddeTU1kERbsp2NQPu7oWEMip8WHisG4nNQcrwCcmVELQLWQvyXwQJx65t5a",
  "key5": "4RCFLVSxoMvAEdUeQnfwKz8GprakPa15b2YW8xy42h1GLaAc88N4xqw7cKJjKbjKRKrTvPUiVxmFh8DCSkCkQ4Me",
  "key6": "4zhWLNMHozfxP9tZnRE8yAMpe6b9CXja7YhbhVYuUm9WKVaJ1qxm3E581QJm6QoH9SkWmRSn8nXkD9NDxnbtUck3",
  "key7": "5ya2xjpSqJMzF7EnsoFUFf7zrB1zcE6qiZbJKHTKPxo3hG39zfSTTiDus3q4LEP75dVLJfat4ZHjwmGapuDxXXZ4",
  "key8": "5sADCcF2CKQERRVbek1nZ8U4HLxNiva7uoseqCWSnTezA9qy4BHnPoPwZegoWjnMgRmhk642f46by8sJJUCSxE5G",
  "key9": "3SsgNKnZQY4kqNtxTTumKpCRoy7FX37zT6Rz33Bq1qdezUqh3DK3Kv7z9D65ujL1YKcaYcv8SpfkayCwZy4SEoV3",
  "key10": "ZukxuYPWxnpBfJVsBWj6YUBREjSPkpLs5tTVYSFK9NC8UsCdQYZjhhD1ZXajC39yCeCJhh1ewgJ1WniGDmxLFdF",
  "key11": "3MJJWp4UXwZvGFRPJpH12iYq1tQDZbawJypAubBcX12vaELEpLaL4ayAEVVPfY6cdDbjmRP1esLzAVHZfUoAyVFx",
  "key12": "4acXtSExFY83wfawXiTGz6pZrHFiXN5G45fjThfmc8QTEsFbNim6179bmWVefms6q1BnRUERivYGVSFzCEw1wMmk",
  "key13": "ucfApwYSPeuWNxTbZrYrtUDwbf64X5gfbGwcneqbrtqqwocFfMJhg7BtGaXzHbNrUwFwLUHx5SzFD89EiySSdMN",
  "key14": "4AP883gi1dFjkzwj6xF2e8DgrhySeuU2sVPgr9vVPDJWCsEXMzxpRDapQH7yJhcfbkdFqemim6SuH86dBmRBn2ds",
  "key15": "4UoF8Gb3YTEXwiDyeHgXX5uWmYDvt6oqkyaY1PxVWphAYqiAseXyT5AMh7gHAieUJv5HbwnRvGxwUqDJZv8u6cTr",
  "key16": "5aMENsvkMhvCJ91wVVsdPoWESC3qqoetE5Mt58EobwbmKtG2kSUveCw46dVAYxntyxXjne6HJDBayhN6t4qHKSK4",
  "key17": "4VrWmTFk2Xc1A2UtkbGGshENUhCXjygmMDmSV2edzyDhdmpE3Y593uhwfpf1mENgXy6MhkUZBMBgKZTj1WdY5Hjp",
  "key18": "2QeE4GAtQwmY5KpyXsvy89eZTtDrAsLFJFYGkzv3db7gqGPGpWNAffU1kEWpVKTKGW979xymfNgXkRjyeXSeDJCx",
  "key19": "2yw75fxAXy4kjMco1QKu5j4sMVfCkY5vxwY3Lv5rJizQm395xWUS33tWmJn224AFeCF6xXq52uwVk9Y89qhCifRU",
  "key20": "2dNXrtGyn4ifD4aghQ81oZ5mz4TzY1EeGqV4deEgP5JvRx1wykSkAgKgJXmoCt8y2DKf2ebi2UaCSR4F6r28aEbM",
  "key21": "3kb3kAGVGgpJdW9St5M5NPBuNhN17hAxAwdx5eknFs92V3kbENXXdQ1bLMhmfF47ReaKGt1XAQA7kzcwrDoLi1cZ",
  "key22": "4kSniJH9BvBUrdqwePimam4Vc93Gu5mcrTU4o6z5nDd5JfQHyUHcxvLVuzLqN4rhdmkUXXiuzKqSn5NrYwUhR6B",
  "key23": "2GJCxGMYPSgWdjehmXkwmMxf6VAyd96tgW1mmLnGbWdjaryC6p2n7DxJyKyHcM9kLTgiKwifEwASG6MrKnXhKz8V",
  "key24": "62xPhnhNUEUXjegrHrE2MyL6yTSqwbYUFQ6b9Z1x176pTgmsmgwEQXWZ56q6MkvtJ3XZn38pSTDLfhVA6PUUt9k4",
  "key25": "5tTTCt7jCJiAvpSypwTDDmmTcas6WKT2d3uepfjooLDuvTxiDBqfxDuaCZ5W4t11ApZoVA7qudyrMAmvMXEUzfzc",
  "key26": "2ZXZfAGouESw4jaCW1GV9wMPtM1vMvr7YuGASrxMkWTYPNnSUDHySD4UcZoo71ctEVtAABd7SjM6fNgLFpGaJXeZ",
  "key27": "NsR5JKgxJnS5vzRWXa5nVrdF9CjCUTgvd3cS6X8CrnLUPgNY63kpxXhsNjsj8QfrdnbsVpro6A8yokyCrRtLMqJ",
  "key28": "YjvvfThw7W7y4aM9XE3SYSp57DBjkHMRUZKyaP2f5ZrcydbSsgptTqDasCrainZLAFVrnk9UHXVct5GHLbtmYoM",
  "key29": "3MXHYbGQhvjaGXpwygxye66kHkBzY6ZBzU5SgPCfmzBMutcqLwgYQB7kJaUpjr2HrcFoGpfvTobm4VNXdNxoAyED",
  "key30": "6fiy5RCt875GQ33yQ7AWNepN4yZfshdr7Se4SZjWMJfcbvBe7KXCGNNc5tthcu46tSqp8bwfERAk5wdpr6JyA1v",
  "key31": "3S6HeLKFPVPnrErhdMB7xPg5f3PA6MHzFfugSw79mNuL5w6YYPAqxQQNcpFb8ZvnKwg3PywNnPAvrAD5NQLqXExb",
  "key32": "3ppmkM2YAhEvNo8FZyrSqQKoCY8Dq43PSbyD8ZPxfpZL7Nfw1roAVJZM3TozY7Dkp9JfvV3K3FgikzHHPSkcDACt",
  "key33": "5qFp687Js8TXteYNL9wZEXr2yt2sK6E8KBzQV7Qtm6pJfKLVAWGfSagBhdBDdc4BuY6thKJzeoQT53EfSPojfJUA",
  "key34": "673tAsZHxEN75EccyykAZy7GU55n8fsdHXxVj3jqpQhQfF5ZM8F9Cc97pvo68HtpXuvdAg1SbGw7VjwERCoqcqBT",
  "key35": "389JUdYGecYCNhpPLP8QZjGCjDP8Ecs9ZstuTeq5ui2CjRSpuHttbDjVpKKhNM6kDPkQNqvHphD7HJ6CVL7Ew2RR",
  "key36": "3ytvXPnTzFgDaBXz5kNXmeyAe2DnUjccLjW9DukjgD5TNMPXmmVBXtBFzWcnrMAmHMnwHNYt6VULhdRhG3WDDjyK",
  "key37": "6EZqAgej9DM1eGs8ipqQLchSjagHC9PprQFR6YHqGWmAmrLy6weas7ejCH3NcJ5mDRgzu1WZ91kr1K4qsmTfRdn",
  "key38": "32wYhqNVTY5AZKmivFLsW1gXPr18EjeJ34arVCVgym37VLdJTh42PmA8YAAonn649674VDxRd2tGC8oKs71cpS9t",
  "key39": "4fNFwSmMeWSLeDDKkSuMye5DwA8M8TWnp2U9Ho77myTDYk4DBK9QH9Kr3JepALwBupr3Fh1GmcX98oeaCsTp6wjy"
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
