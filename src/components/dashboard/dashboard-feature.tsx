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
    "YH9HQbJMdNPBH9UHJjEwJsEEc7LydubwbBExa5Lfpt6aFyJ7LBb3MvMsmSg5R5NCX6xoJn4Gbje6yoQga548M5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdMFgRNvpSs8X56BSjFGY4GPci8XwRcmAm8B3BXfy8gbYCmUrXrVkLErLDdu9R4D4uKwLrr5p7ZACwiuC3qiWm3",
  "key1": "4cndq24Rz6k4cnCuioZkDRUSedkjcGJPYTSNH6hP4dae2YvQYqqdEpYUGoiERGhDSVwa9UfQfpZ8nh3qXrGFxk3Z",
  "key2": "2z16NthWcicY518SZX65We3mkKp76vs6FpNmVovJceq8NqxM9bRGoSfwav2sBS1au1t1rMcNGZfB8sKkYt1SMXfj",
  "key3": "5j8FX78qTZ7wZaKt8yuJBsEcr78vRjQv4qjVFxd57Wnv5E63JLmDG164PN3ekD3gSpvVyBukXDGjw46bcHnQTgdJ",
  "key4": "ttMw1bnZm7hzF9DbFYmq4aU4YSvUv6rYNotk3VxV4YNVgioggbM8ghXM4Tk5i98NGkAtD8781EN9MWize7uSMh8",
  "key5": "3czV94jP55mBbvX2C38eNu4HHaBxZ7f1GkxeJa9XZdgEkEcpXU8rPrfgEWsjHuGNyTLVJmcthPG4YC7vZjfahAh9",
  "key6": "3x9NB3ecx7i7JUgu1HhpskR96Khv7EgDrDcrVXZ3zewCaa2AHWFKR1oJgjuUhh1osM2JnHsSZ8XFLiiDKP3tmFYm",
  "key7": "22iBhLKBv8LJmuEo12oTwypBHkz35XLSUpdQVGbfagKGh1pHQXNKWRVsA4hmCDDnXCWPsuBtiZiLTqGqMhgT9ERw",
  "key8": "4TfJZnd9qdRXNV9dPW3whoqqUbkx7bDf12uc8zbxbyEgsRuysfYh82ou42jrbCozMgNMJoriy2Tn6Ni8UQ2j7vsp",
  "key9": "61FazeVaVHCfELKrx2cf2wvr6Cg6AsjgaobRQffbNsUzZv98LmTpQcmZw8iFKJQLvCURUH3vXgVUDjBxyBKhVYZP",
  "key10": "n7fwBNVjMoCPKUxQ9owfNNr1oSJWCcvaAkpTggrkyGY1J65bUvNvhn8GwH9BgxVLjySWvjU4MrqsW1vkwc3ZzTV",
  "key11": "4dtgG3JryhXetqCb1JJyt6fHHKE4J5DXfBxsZ5QgwRzYcFsKV83rd8vV57R7mS6Eveey1rPRpBsiG9wr2cwMvouJ",
  "key12": "uQ5GA1qWTJWtfs51ZvA99pJuXhizoBJTHdgnwdRF9bwgyVisCXWGiPZzBNUArhaYrSC5nKXQQ9q69Z3X2ewAkTA",
  "key13": "3ZMLCpJ7kyZa6sdcwvXLgxZrsQXsdVQNpmviYcauaRSLWWeVgf5PP7RCHuCu2C2PtkSv5QXXz6cYYzDNAefbCjPk",
  "key14": "3KZA3ueuK2EgM6RXYjnD1f4yJ3MbL22p5vEEUZRPrfrq5MtR5hay7HsVu7AbUu8Trg3E8dFALbrhhJLaK4duAwd8",
  "key15": "5x2BPa2b923iS9r3yKCwFe7hVdJSozeQoyt975MTGzg3rSayWAV1pVtiyh6VbRBkaAuZxGLD9jLUaKh1Mv7HR4J1",
  "key16": "3AT6onFjENHv1teGZpqQCt2exPpopZ6izaaX3Nye2632zXV3to6qvVK9z22LKNPzG2Z7Q1oLKfQ1rxmqUYWTgRCJ",
  "key17": "5UK7nziiePotmnJExBDuwuc53zgoeSDEqWDLQCRnCgW4gwP1GkxKZPyAcrTAcaSE545KAJpLKzS417jYCHYQtq66",
  "key18": "4iUzR6iKhRgwR5sitv68UrEahkkKjkQ1Wz67qRNBYurWfU3LYhKHL1AKz3bb3i53wR2fNcJFxDRfTxUbZ6ciNbgz",
  "key19": "2E5LWwNiMDMmptAxzrWNby9dAP6GXa6rUX5BigqwxaiR1isaK16ZJthvrL7fBSktVeKVa9ruxMv2TFyMwNFany6a",
  "key20": "2n3M331dHNbkBfq6zqewVZK6o4VPRuakZZhxCbpNYQrWjn1FhZWqhULLvYDcz6pqmxsDVNr7KmtXqYqmDRN5Ggdd",
  "key21": "54kAGuMFxiDYApkC9u5GeHtym3s784T8fYuTrPFgCxm8F5Mj9eXkPucbKRyH7YUR86YhkBcS3NHqvS27f5n4UWRC",
  "key22": "ZTCQDwdd1y4tuGHoQkrTsnp4c89h4XNGoJWc5h7vAcCLxJNWa4eSqv2kehn1VPCeUJxWbCCYuLjjvhzzD9K5DKM",
  "key23": "4h7nH4WQ8yp32XopWrhLCF83cLirUxDNMZKaotcSpRvfSJ16gQkGWXgaUc2V1495saPPQRkLRqha9SAQDiaZxonW",
  "key24": "i5zJ454JD9aL7C3Kmp3q5ozraT7AFFW2J8uoZZ1yeytJNMJoQPK1KZeXPhqAEKVJ3eFAhxNj63rA9k6P5Ej2meD",
  "key25": "3f8dKqnozkQroV5y9Qqgagiw8ks9wRHSUCkQDodtKg6qJ93Ydy72ofCfcYEBqQkkRVFEaXpnEh5uKsU9UkRUiBcR",
  "key26": "2PaeTTq5WheNAWQKiLh8foLbe4bkqfkbh8RruVLEXWDahYcpZB84QgetGP2S6U7wpfDgnZHJxp8jREjgrMZB9zLg",
  "key27": "54a2ZyERPYPB6M57Rd6iz3gKrjt8cmKEykrin42WdhvzP5GmzM7eB19EB2zWk1R7ZfGtQWEgzo1U6MYrE1UJRXbr",
  "key28": "3ojyP8jHvXKsBSMQNHVN2PLJk1xHTHmS7ySe9GJ3Mpy6m9uVFFYzWymCq94PvxC9XPhLNwxEYSdhWmujrtnvfC3V",
  "key29": "NTEsYn5wz6xUsUBorC3eMYkqAP832TqzroDhLEDWeaEu6FzkpjWGQJFERqZ28oQTtx4vkb72VHv8RKXg48fEzMw",
  "key30": "2VUNrFxq24ofgUUhUthXzCtkQbGxZhyC4e5zPSeDcooFuxqXrnyRyMy1WwX69pZ4tn58kyFnX6kTUtNry7R9T3Xx",
  "key31": "5EyctVrVARKQ8KZmvLWVDVThnkaRBN53T8HAX9YVGEkq4udM3GxCahX9CcxYX2LQhLHHXecEayEvhEYcyd4Ph2S",
  "key32": "ormFJXcwmzjkH9wtq3bfbXaV2WpntrCSfHSRs4AwXmMH5HVDw7ghVUFLwShnrLv97x8AmqWZvZJuk8mVjq84Dhd",
  "key33": "5K94b1P7rbgVrEgVkGsE9rFbdozgbg2H3KdBF8d53UGat3YeWouDU6r8U1Bna7mf1KSy9kq9RsMduhHd88Xsk7hU",
  "key34": "4de8kwnWXwHwMvnvKvh84YJfJ8VLepw9TzSPmQw8PXG1pttY4xUv1oKyk4ca3Brg4qX2VWfYBjgt8xb8Ascka5gD",
  "key35": "63Prhq9jPuZaN7nDy7yfXTSMbtp8SrEa16HdSUBDT7XCBn4uwFL3Z3feahxdktSLWE8jza7jzdfzEi2ArMYQgP6i",
  "key36": "3KFYDE5Ci31DdGmPkFx4a47JeBBUCMJGnugT2ETbyTYZWLML8UiuenBZ4e33pabcTmvQEGNK6JNzB3P3htU3uM9x",
  "key37": "2x93DxuDNcq8nSdeyK13myTJGXQmEqdW9HHeDkoUbEBis1fYpE15zg64FfmfPmPjjZy3cmgNR5zarpmFJdUTF7mM",
  "key38": "3dqyGUfR8gkchDUK4c7ngn2DFR4SisqDH5hZRGkz48UZXZ6jEXz1MK2pVAHjcG6Q6otsn1VqpWE3eF4vUgjgpzKG",
  "key39": "5XDnDtQGZeatZztWFsnf9zcyk5sionjgGBSmc9zBw17kxhHNAijUqct5oyXEUe5kkxqcdBM2j3en7GyuRxuyLfMx",
  "key40": "4PgQjK4SGZ3RFKq9S28mHim7JcgMh6vHcVfj435zz8aPSQ9tw3JVptgoYPvvcE93MRWJLVXuctQRyfwWoRXiktvB"
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
