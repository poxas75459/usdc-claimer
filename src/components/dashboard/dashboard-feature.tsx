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
    "3viz38QpFsdrfjhhMK7HHn9HdKwFJmTNK64L2wKDTRcL35V8MvYrD522tDRjJ3kHtHHD8tTf3anF22uXrUcPSsKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QFBEpsSobZss6rhzcRHFA1BgB7UpyPy5aXXhss1hneCre4RTsY2iYVTf3xbJQefSeyUv3mdvLor8omA64V95YE",
  "key1": "pweDX9TL5KaAZ52CHXA8HMXXUfqSuie5Mc3fh8b14tWic9Xomovhcrb9GpGnWDHM4hQ37krMT8VWG4zJbN8Ndtq",
  "key2": "3vApPe71G7ZcRH88uGNnf5RX6ts6yjpMDdFNXoPpwoKKZ6zwWsipoHjCNhE6hdXGiuYTcQ5BpRXwZfMKhs5xVCkw",
  "key3": "5anXkpp9M5DnC9VuHmKyZ3T9kkMCdB2UZxBCB8BMbdm2BF5mK925Vov9L97WEgSv6eGA2CBJWuVGP1rmdZdxB4ve",
  "key4": "4ZVYW2BeaETdiZntv4JaV2R3jCkCPTzcKKGoH32untVQNDTk2f1K4AhZJ4wKXL6Gc4x9eXubNRgSMtRuLZ631zZS",
  "key5": "393yzGYarxF4jzbbqWP9mErjs5J21163tbV4oNxLKavgMuACrjTN9G4h3pnGcBqvPLLpqSVnwhchhuVmhtjXURoL",
  "key6": "24grWiYbhb8Vu5XVf76t5JPmV2CfhF6bUfUo92gGYPseuKwQsfPrEJwoH7QyVSDk4eEBAYXS4asMNN3rNaLoBUnW",
  "key7": "5DrEjfPnyseYQ6Y81kEPZqVH2yFshnJWJyCzJag4Z5DehF5iY1fJR6b8gTXwTcHdUE7wRiEgUj5eRkrQRyuwPXQn",
  "key8": "2vRYx539ZErEhgpq2NpF2siPSyrFAng8J4miVoeaiRy3beDtNc9wm9QLaUfDpXcdj9sByN6wc1BsnZN574emZqna",
  "key9": "3oJcWxGcVtQxKvuZfaPWvTAzQtWbjPu7QzcaCuJu6R2Xzg5fVd6ZtBrn6dbvuqXeXU3a228pTkUGyY9hnx7xcC4j",
  "key10": "4zSFnY18vZMmfTXzfpyuakgWXqvqmZEvguwsFdi6ruNGHu3m5SUj9xcu2tgBbG88tE3eEfQzdeentEhfQ16dBtdW",
  "key11": "4u8ciKLiNJ8yxxrYLfULFpGnjKqYjAuzXusaehCrnuCdaLr7K4KoM28d4G64Q6ioS28aQ1xcjGeftJcV37o8FXvv",
  "key12": "vPaFWdZJwr6epAa7QtQVCpuYHkyWF7ud74Jfw6pDHmt9jyyZU9Rr9mT7NdknPZqPnBGMNmUaNGpAVdhLRnqdgHz",
  "key13": "3fDeKJ2Skji6hQ4ohmKJMAB7ZpFbDNrxF5Qmc2eg3iCcz2uCjk5wuJqZujMH6cLaahT65BLdB5ZGwrGH9PAtPFh7",
  "key14": "22sQvzKAZ7XaT1vKUZn1YiqjJK5sfPLyfA9sa784DCPibw5SaYeW4NJJHDiDUtja2Rm8fuuGpbYnyoo9G3zcj9WA",
  "key15": "3oqKxNHcZfCB4nJv9HC82np9f1CZDoZEsz6ctF4z3ZcgcJj2tLbbe98dbFvvaEvruUMF9r4tFEz5fQAdqu44TUQo",
  "key16": "3w7nE2vtRxAGv99HbppFvJ8mwiLmhzZfipbwtjquETBqjo4RvKomhkrnnrLajbicnYhMwviQhioMJSt4QN1U3q8p",
  "key17": "3ndVY5F4uGCsaq1Hi8xhDJsjvQkvk5mxa7ZX2wnaj1mneV2TbFsrUKr3mt9mZZ28kaoKDKcmfkVr8cqSEQGrzUK7",
  "key18": "5U3qEgfM5dHmL2wyRB6viiDiQ95mWa35MpMXLfMTeEScYFMetqTbwvUkZ1AU9btdbe9A6ePYKGxDCgMr9X298Bqk",
  "key19": "5HaFhmmXRC85oxoueScZjreEWXFkDkeZtB1HGnSRtp2UadJFMMrZsPdzf8EqrXGLLZeDeBNXFpuHZhPNNCJHbcCW",
  "key20": "337NttRkDwkcRmQcxMAXe5c5hLwkCApM39UCJBaAWep9RSXpaoqJcSLrQ1YgabBtrGC6LkBsDRcpFmw4sw2As7Rg",
  "key21": "3H7WqN5BUF6Q4ixwoNtfxuYKGAdPgGp5hDagNVvmF35kztVVFX7HiXpR2jPrAxmT1L5YQ8mHhZuGrddFfXACnGq7",
  "key22": "5vNTtqW98CQ3PJKDb8xJ58BpRR5HMUFUEEs7Kx3rn3oCwfvyp92VUjgB8KZXPzsoVZwpfUZn3znb8dTVL1mJtRX3",
  "key23": "2dZVLZmJhCch4bMf9Asz4A7rPivNkNagXnNrnfvTLU2epFp87Te9U2noKYTCH38ax5JCBw5XTD3ZcJPgK2JULS5D",
  "key24": "2ZmJXwQNfZETtpQGg5Bu3T2oiVrCNA75UYQipaQi6PvfCpKae3xZF5QZionXK9RctnjpUDKZqhpLUnYGesnUAzJv",
  "key25": "5bCD8TQ2bNigD3xiX77MGUMvVPPSLj5w1Wyz3Vxy8Wvxwf1VbtjpUDshqD6niN4onMsUbAPkf94BYgkkQ12tTpnD",
  "key26": "5LxMpp2gRju7BXZytTdzAFNyJNtq3chTxQkGVVvEuRwyGbcwtiL7JQyh62bqDwRDPxh8vAQDLQ6iujVBJLEbqKNm",
  "key27": "4RmWYNtY69Kz3jvruoD6yTCBpqTbUhX9dWmsFZzeHEM8yEjRGoda3chtr9viApH8U69wy7pTGxqFrWwAxACUDs32",
  "key28": "5anfPTvLS4wSvKh88SHZ4uDgZZSYjK9KgiQnd8MDhwVz4tXUGhhpzFDtGY39Astdre1qLRFaAEXopqGLnhyXXp9q",
  "key29": "35fsefKrbpFfhtxdAKokcu8k42gZpEeXSK8JjSYpYXFKMnXbV5toJGsx7GmYMqWmbqR1dxZgNvD1UH1RC7V6Pefk",
  "key30": "3KR2geJnN1sW2w8ibgnAjAYN143asvw78y6aQXCt1PWnk4RSeesREpKnHGHcCrawnJNX6FrYMmAyt83Ew6v67LSb",
  "key31": "3pwyVVbuXEUciK373odU7HdkxLk87qkLsV3AbtXWtHiXmPcCNLo16N9pkAwmQogBM8KK9UaCGsHuKj89zEVBgPxc",
  "key32": "5N6RUna94oE7X87EckoLSe5PHfhQeW1q6LahAYyY9w4YfVdh9TU21TamX7N5GGrKQ1DyWMdCKMa2xVYLUCMX8dNn",
  "key33": "49wMJSVNUdACNM3XddcxStQruDdnuQpYhTUthbmAtQJjrXbqVyjoy3i5bsGiuiP5LNx9escVSDKbV5ZdHzbhxznr"
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
