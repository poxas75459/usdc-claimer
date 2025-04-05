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
    "458DHRm74aL1fDYahVTGt7y1nEfdt8vXGtNsMe63gwThVSrQy5CjGyf3ZrxDwhMMBYd21YStg1CmiUtnYmtCf7Ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SqSp9Za4S81ujwyNB3pGcx1nMZNFBDf85X5uxWAjrW1MaD6jEKztKLZ3gA8qLJVyVauBwBBdorRjehB1qhhuJnk",
  "key1": "5TJbfnzM8VhiALU1BDAU3m9HsDJGFzTWcJKGRE3CmqBZYgwxzDaAaAL39pTLybcYADvReGyN3TeXtdjpJvRA3Cuy",
  "key2": "2ctUkTWV71L5E6ozd93truW5hbT1DiepsfA12nWGEX5UwHHajDQfwoGmz4xi2ixDctt1ndxV8aJKkmQb7oxGAnMm",
  "key3": "2G9rh7NvoicTsTwhZxBbuZUBAGrDuFAFUiqE6EXGmo9b6KuzL9733m1CXM2pU7dyT4jCBJG5GRK88ZY1QhNgvYZM",
  "key4": "6Lp5yBtqSuskPHBotYX6B2L5u5CnrmEiZ5yvLG6pnVsNuMrVfhQHfP4sRixhDHEKQtUSPL95RUMN9wSiT8wbnHt",
  "key5": "3anDz4Lnt5ugSCr8F1hxfKZCFD7FcVoYmjcRhY1L5V7cMwJgZTPm5TjJ4fMbEzWWTog9AwgBK2sJo7M25hCAH2Ta",
  "key6": "rTBYFqTonPdq2S7puGQxpUAyqsvPyS4UyKPJJnSdYHzk6fnERFTYQJqaEHXbssCiYD4bgfAZnbx3AkpxxeQAgPm",
  "key7": "4tHVabH4jcqYZStW2Vk6ZrteBKU4RvXDkMhHwF79N3QQKn2hSYDhddU8REVyZSXwmS2KqaU6LSQjevjDuQBobmoD",
  "key8": "4PgskMZnmzr8caKVsyrB4paa1NZmZm23e9JqMDnLBRqXV82YHzcp8uusskFE5EZ9Z5ZPkQeY4mrU7Gja8UoTiFeC",
  "key9": "BK1kQtqf4kFnHGmU8cmK42NND5vcyaHwfKUL8oTmEYR2NxGX7tkx6Q2n8hz9ifcesE4pQd2GSERkVSxPyTj6R83",
  "key10": "4i7qN1QiNvEL66BEYFo6Vi5hUQygeoNmB3N3UV35A7eT5QeDNWZdqYeQikCf8D8onS3zhYL536kgyAAzJAivqDT5",
  "key11": "purLJs3CetV3SvspZkv6bN3eaJxmoj76tGs5pjEQWfQWaCVphH52suZJ1G7uMmvgCrxzHZbuJ9BZipxi9ZyEYGQ",
  "key12": "4onEaSTpem6ycUfc9bwfikXbLpZTnu1K4QFn4fAwpTLAjBdVG4xAUtbCpix7dVYqTc8vAupaZeeL8xA4iLTrfG8p",
  "key13": "2aajZZfzZnqakgVwhTcZciHPjiHAvkybGn144pjwqdLRXUYKJXmZd1eFqZ43swPXBsnAWLRLtKKdERdtZohdhNhV",
  "key14": "4fTsmuy4E6JE1KKzzd3M9Zw1LyZWcUNwircU9V9RN3XMUyrV3H2sicj5ysv5ZjoEoXbkcCEfhypmT1q1pg7FxNKy",
  "key15": "3T6e5J3C7wbSKTvo9DALFTRRiBoyqPEdC4YfnwsgWHZAC5mFwYJv5vp3KYDMKKW6jmN2sAGE4MmPkQgJ9JF698LB",
  "key16": "QUZkfxvtKvguqMd584j1kqYSjcUuUHS1rxQHRb4kFg3yx2czmKdNPjhhZUqkQciPakivzNo4ss3KAtHNVR3RTFW",
  "key17": "caXir4kib7L8Psq57RPqmmbj7MAYZReTeppmPUkymNaXxzVy6yqXcYfZj6EeispZqpfsqSpx74sc6AkGQBiqygY",
  "key18": "3m9WhBbYfphT7WB1zcKcPi5A6EPWC7hNgouP4nUr1M85N1MjntiEFDPPHzbHo77eh3gGRa3Vu1dGZgmsoRHvRqyq",
  "key19": "63SMqdYYe6L4YU5GqKyGPKEUeFjPM3aGDWtj1VbtnFD3Pd6gcekwtTKant55UjW3Ehv5tzTnYwneZnLQkahDViUn",
  "key20": "5i5dEmKjKsLamfDCLPUE837SNiWtJCx6TGc9YUJN3LuViPZkHrLvmLm3Am9ktGSCHMfyvjxDELjn2kxZynU2tfx",
  "key21": "35oyhvLgWF7AGA35pJAyB6iQw1vrzmRU3tXptZZ7e6nVLtVBNFLeWHiEEos66ghgTcz2wnGRJvfj5NMCeLC7YXt4",
  "key22": "5SPYinSUmWmYraGqm93DcDReubZ7EUsQX85S574NzZjkcTM1xki5NM6TKwoAXNuAzsQzC1NvkGB3Whwi1F74kcHY",
  "key23": "4EhL1ffNo3RYYaG5VXRZARUURiFscCQxafR5yzGLuAo1PUJCrVKnNvrRUrivncS93acHkdKCtJxrxuGy66jdVGy2",
  "key24": "xUSHZJSpQBn8HZYa3RLSnECgLBfzqYPG7wGd5caaTSGVrinAMqaEaHYr1StyRXwxTtCmTvbud1dNbGSNkTMWXqC",
  "key25": "2Gj8mzkmTGrbScRjPrKzF31Ho6KvfUHtbFMwETez9gN7APEy3GX3RgaxtAYYXXQKsocsj1RVeYuuC9ZwF18C5Cu1",
  "key26": "51bweKrrkFki7jkRDfguiPKXbUevVmRvjmvSwT7HVwNUfrDX5UrYwfEiAwzqCQVknrouWBFTo2nkxFsgkoq8jVCd",
  "key27": "4YUsMuJdxsWxK79K4Vh8zCWPqp6iW7CV61zWoPDjKodppmrCFBaQToZfj21C59RheRDTvdC7R9NkHJ7SdmnTx59y",
  "key28": "2cHbExeXbtbTY2hioFArZ6d8UzzKHvW9gyx8G9pAghrMnRb3nDwKD8GxQLgNCXkQR4mxJU8HgQ1TNqsFCLEEAGz5",
  "key29": "3mGQi7xG6zvS8Ho5nuVMpZC2fQgYpD9SRW3Yjz4QYXsrSbSN4vR9sH6TWRYSrzuwXTgLVANY4n1K95yCuQtuaTB",
  "key30": "46JiYkG9t8szvHZ9iWKLKmaa74iwnViMXLatzPMdU44GfrhRxiTUh1ipt3m9iq2xqfDgS1BYAnM4avptE6uzFENq",
  "key31": "4kNbvnKPvN3cjA1L22WNaew2ibp2hJ6ZGK8h3sTy52gyKF24HrUpiZn7ihBeZqTyjrv91t2UdayzrdQ6SyjEbaTV"
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
