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
    "3UjpKk3w8AQ4P2cnZUYvrcjJionV79f4LrJKHLN7SboZTWQsGiATxnS8XUTYGkxuaMpBt7RbtntXorPS7dWsru3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nMg5bS7LoGmuhdfJJV1s1AB37umCdRHTktnp8Qp8iBwubszgJEpZsfHj2ZFxHhSRCJQSoHkakBsjKFpyqMbySp3",
  "key1": "42Q1rL4CYAiNeyiKDVBRXg9pUdQXjDZpkmL8J2g8kcYyPY8H4GLHnKGJtVr9YTVYNBAmdWV5sWrAp6beBMY2Qs83",
  "key2": "5K61AYjyjGxbU8maxSq6Wq7ym57Q4gVEdhnrwBa545fSuPR1LE4BUdJSY4Y814shUkaYrTaoCCUbvLmQC3xpJQdW",
  "key3": "4E1ovbAtbbSuH7QoJdtD84RqppFjSWD8ZW9QdSZvb1FKVP5DpDAzY7AL7GUU4wdxBKT7FNyPePSHbFA7e7B2yTzx",
  "key4": "4KyC35Kere1KEft5mjS3E7BB2GfLwRDZsqhSoi6qK5RZrf9n9iQNAxML9npgzMxALAViDyyYTRsJKwtmWXDoqdGP",
  "key5": "QsD14vfJaYcLrS8c8wENytVtYZBJYkm747KsAVe1zPZBNrdaGdq1Ju5TwTyXmJ4vzZzd9B6L9mq19wXXodge1bC",
  "key6": "5oqVkeoK37aReT6Ld8WZsKkVgzT9RaKTTBeYxH253TL74ia9yPpp5bGXzJDMSA3n4J6mveEXASmvFgfUkhBsneSr",
  "key7": "3mQ8ktftc5363hGSD1LrwtFQJwWTmZhdG4oJCj6H1WPyjHmymRkSeMp4xCDhR14Tr3Trb52Hv8B2HKmEm9Tx9NXC",
  "key8": "4fiz3rv62X8cLSmXMkxL6v3VN5s1uU9LeYudJznt95JcqMVn1Ht7VsJDkpFjnXkazXAiASnyRKyDowgcSVvv8jZ9",
  "key9": "58AmDV6CC97YauohvCW6aAYzUdEKx3drTQgAKatt66mCK77jUQvRcvCw9bTH34cniQMpeimKrt6thmGf5rskHA9Y",
  "key10": "2MSR8Wz3RBJzS6fJUTSAHF6RfYoa2HRd1EyeV9Nkt516Ku1XV9j1nwoHdXDqHLs1xsuWDmQtxXNrQpf89TTyF7Be",
  "key11": "5q5zcx6hK9V6uP7qcj1E3bKuxs8E9tMyv5Ru94sEdajRgssXQdqAjiuHYsQEenmGJQ4a68bsf1owPCnmrY5UxnTr",
  "key12": "dXbbY72odJcfAorah7ktWi7oqri43ZCpkU8UZPk85vvqhk257JcGqfHYJQDLRTWy1tzewKSvHkW9J2svpdNpPsK",
  "key13": "7kA1MMeL8ooH4cR35tyeQ6qQbbHXSG7fd1dqFSq9n1zce1TwXbHTytB6k9trg65G14gxEE4gXYeGCmECgdWk86H",
  "key14": "5w4cWmSf9Jcqwaq3sLrRSFhhW5A7pVWDW1ps6bE3qP4tu96ord32y3cnacFgjqoFavM1MsMS88mJG1fye5MRFRZE",
  "key15": "4wEW1S9NL9TMBRsYM3cvjNQBLm7CXzSjqdibG2eYM21H4yPBkCTR2qvySH8sj7UPcBfhtq6fi76pboq2YJyUH4yz",
  "key16": "3Lt8VWgR7vkZCEgug6MEtR8u9JbtJMq9HNN9KJVfuEMZmGoepdFgRqyH3LkGbzhN38jKcRtRRYcgMit6CgBArem2",
  "key17": "5Bf5GDQETTH6s4kxMCBvcdZazqgSPURJGP5VkYvJ5BVUJZy1mtzAF2pSR8cEZ2DjowXhFG4ZwGXiFCXt3y6CjtMY",
  "key18": "5HLDwoQPpGGtFmeajr1PeZPdR3YWxJMQBSGXQtgBGkAENHYHHqBhqREajnzcZodV3e5Qp8EnYprkWXU4Fvp8CiWj",
  "key19": "25cxs8ak1VJuWRQP5FuiKRNtrX8mkWxgEff8H1u2av4o6XPGfxa2fcD8hsHXTrEHqXNTZVEGPpeguP6Gua7U2Nm7",
  "key20": "5uM2arE5PaSQtwotRhV3NK6diyGbbYF3Q96NsaygH7P227Rwo9yXkR2yC93uQXHifrQRcwh513XMgL1L4KGvJcwS",
  "key21": "3btfLVVvopTTtfNDSKiuUhRrQx9bub5ZUHHXckApHafHHNdbXzbxUe8casMwwxHuJeqgbVBmGwRkG6AezjTps24J",
  "key22": "2GoNnDmPpwbQBYmTie83tXs8DKdQuai4T6sebTRELazx5Yi6rF1nfcu1NpsdJynSGQHwSfjgcs9FvKYVzp8wSKfj",
  "key23": "UTt2XxhMwTA5nCcrNojDz9Uc3koeABkZRKwjHqPghRZy1jBDaw2neqmHBSrrPNqg6WgWhGdLs7VV12RAM5HBTnm",
  "key24": "5tYBbRGxwDqNi7T93k3f5NRqeiRugQ6Mc1yV8q7V9X8FzH9Zibt4pqBb3nwoe1FMk8kiPWib1YX5pUu6PRYvSSnp",
  "key25": "3nMPKQtjd9WrxBKU57MGUKvc5F7JgXXe7n4XmU9NJUipmLY7JafsG5tiYJh2z93n2WUxCciXEJWk5Ut3svhhM57r",
  "key26": "25mWiJQfZZd4XqaHugWsn3PhR5T1tdsrTB3JxdA5SyqPNPQSEQYpR5FhcXUjN13BeN92N7GbJmgR77QsSeJyVaDb",
  "key27": "4oCETgqhzMvt2JQ18kTs2S5mCJM3XQyie6yGWBgFwVpK2YKy5KfqRF7MATkMF8Wim1UCwu6dZ6g6Ky6Sh1fZeW4h",
  "key28": "3dDrfJSjCcxLY7PZv7pwde5WzALsmq7siRUcnWgpf3qJUPrJRCo46VQGGcg1gxYmgfkvH8PGAbc9sq6HzAKExrpv",
  "key29": "b3gM1xjJPhQJbdADKbARRJAEEwUQ8R8rfFa1pV99rNayzAv49QWyRy27Hcc67UXbe8jSBBA7vzhquuBzSJcwK4T",
  "key30": "4vgBrwMCwRpkWPgZXwGVuZGvv8dTTUfMWpEdKEW9LFbAiRNbokFaBwkV8UNXGiSAhTL3oWW6jpU9qYMigZ16u9bU",
  "key31": "XnerMJUSi3E7cThUHSEBq2cXPwNs6caWwPJ7xV8yensfvFUDPRppMBBn61pobVEBZaXiYV6YJg6CgQWnWvaTGq7",
  "key32": "2p7eHyDRXtwZT2MYZKeJyoqeDupgqK45aZL16ZPPp8MQ2gMvJ4esJXu1A1kerge3b4eBxbPBunLE8e1EMTFvjk5Y",
  "key33": "M86QgiiyJQ1rSib7nFQ4XuSPtWoFeUdLssiUvMwVWjC5sde6GbSUGApkHd6ndAqHPWsusumor6636wHUAhZ73am",
  "key34": "5qvQVThp79FPakKXF5RunJAxwnKWc2sstC6YggSiS2rZdGY2FrxaWZo6bCTATQ7pEaPAT7kbi26fZ9xvC4X33SYw",
  "key35": "3pGBwjvN4zM2evnkChdrG6Nf4uHooLCEAgftoMj7tuL6rtwCnsuC6oNRnmMVEXgavvWo39m59WLS5SFsMWiNDMos",
  "key36": "N7wcJvsbRMaX77ssMefpgZMpS1SaNY7aEHVw1QA9gYS7rKPSVJYMTpvkDWYLzgo1eb8Xv2XuvSKQiUywbXogxYs",
  "key37": "2p5ywKmC439RLRhLchctK35R5MqZNV4pJiVksSkQNAnjx3ESctaBfDt4syPzw6VnY6EYNLL9iVHRkVsT142tDGhw",
  "key38": "8Qr7KnCBgytqpcH8WBU51RWRndCx493mTMpzVLwZ5VxmMgv8eiH4FXpYTdNG31dUVYaHRmv1bKK8zfJK4LxeeDZ",
  "key39": "2YQYH2isAKFHwzgcjrgnAXGgE1tcgKhLpjpFczGYe5QUKAaVPk3H7UrqFk4ax958gszY8wQVW1nuPjLAH64Nj9Fy",
  "key40": "4cyFbcmmzdg31Fokd6yJdxi8GgJcfa58Ym8N1kXzpLGrKnxwha9JiuCoGaDQU6LUVKaRdHDEzSwpdf5u9K5hbcBJ",
  "key41": "35WDrkrQcAY2mXxmh24hnU21KA5JjzwuAXbVgMJcUXyG5Y3B2S79S7fwALJZKwrPUkWad8Xqp21xEYefH8oFzicZ",
  "key42": "3ZsEdToKvZAhwGWNpSjzfp4wUCF5NsXz5GLbTvPMfiqWPVkQbA9gDamKTnZXz35LxwyBwxwSDvbAEyAF1UaYh3QC",
  "key43": "38xoE5yqTx5iciZKepmLPLc2v46KiB9xJDn6RrRCr2tKYg3EZj5vu4Cu3sKDrmUNvD34HtkFLezGHSyCPFWjFebm",
  "key44": "3RfApmsCWKHdVQUJ8ArEjtm5KzUQWYgzDABGSfuZWyai5fGxyogHTLuY9w8TJkqRowhMW322cAgw4eHiQTUvcBBk",
  "key45": "29BXqc84tue7BjKARZSW3PSQqaD7k72m5autnsLWmYmkQXt3otBvAXnusa47y9wvYocZn58mA7f7z1Vvjd2x9HeA",
  "key46": "5FwxzaMpYvhcCmN6wnQb2LUFwZq26tAdij2ifmEGRwpPv9vGgBQGKGoaEpYp8ZqzG7fbX4VLL3AjcRs4Cnd7kfM"
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
