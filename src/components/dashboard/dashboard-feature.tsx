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
    "dKtp7PkfQJpQnZQvfFGs7jT1VD5Xp2VeFGtxopiGiw5WnJ8QXQGyrDGkhmxzXw8wer6yMBQaQ5xbsRx9PxomJCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQcCmbxF2pSn1eAWkVcXWnCADkyLpRgSRdKZQs9NhRCqrnNqXRxQWbUgXS7cd2K5rhtAEJFDDJFNQo5jxpz2NyQ",
  "key1": "4jfnR7CBm8iVMBcijoZSA6h6mDzhFRnLUsPx4d77t84VgsCNiZu1NeZj6qj4QXRjuXesPKhKKWN3tMoyditrZgp4",
  "key2": "61edkKvxtN3C3gGTUvJYmGW6gHqUkh4wDNMzxi1w35EWH28KHtzXdLK27A92HDCv3myePJXPp51AacXgzax131bD",
  "key3": "XfLsoF7NFbYxQ2Cw1LF7pcPaNZzx4LwYRMb3jQn6y1hAZJoUSs9wQRhSL4t5qxw9ghZeXRHcbz8nzQKPS7hmxtL",
  "key4": "3Lj2A5PtDtDkZBNGqPZkQ786HKHaD336uFsPkLKAfub3YL7jfigxzKcWmPzGqGx7nHXrsc8Ku5kdEVKHraWop9R7",
  "key5": "5oD8z1j4sJMeePhiiTN9wPynkBVzKMnWKkTugGwEgfnqLDcy1gBsTfLkXDQT5Z8dBTNQnboCqepfAg48QPoi6Vu5",
  "key6": "3jsycYk7KqvDAmGRr5z9SkDfkTQq4pXFX45aESjt3vnYjeXYu4NGyNXDrhUhvn5wAafHuXvkMrpM91sS8gD4pcJE",
  "key7": "2oWS2ijFkn7z6qDsufJTxuSktGpc2y1YXUGKnPfs89txQb2eKt4KZ3xCUJQNoSaRBNN2kSLdPSiPFqPxPchJaipD",
  "key8": "57uH6j6hK1FvfU1FBN8kkCRCthbzh9tCkLivJmhspZGJYad8pcgH1cSF4q4G5zM2hCV2fywxaWVTT4vikCaqza6n",
  "key9": "bWU9iWHaixcxmwxw1i2NMBo6BopcRikxV2ru2a5aKSRT5a1c7hJYBSAtTthZmKMsDBXEUkaJc8tYAS8kCUnf8uj",
  "key10": "E5es3bBn1UfSieUDQZf8tv8ev6qR2BihGx5jQbNpsjnxhDG9WXYYF9abpLJY8n3jnU6HFMg4UaT7tQq6n5NQ7kv",
  "key11": "RZFMFD1CiDuFFGQoa1sfqYu2ELyqYm1ejudMPeJANiQ78JXwdcpi5jaLhWrR7Nny1kQc3KTKdwGuMBCtKBDsFpc",
  "key12": "3uv2DL8kUsPxuNBaQFdWvLtL2Dg9tDgHjzHufxmgbW6ojMZaotnxPWfNKTcsPk3Zby3oof3M8ogaZozocTyVURRL",
  "key13": "4XGremZTp453dZb4jNe6DgrhwKrMMkt9YL6GehTE8dhmNQgREjrRr6FxPSciRaJ2dmdDpR9a7gVdCXPsgaKbeFHV",
  "key14": "3HCsdmYLjaqGKEEnFrWWkpPwweU4AY1ZJqMqBbRie6TZf1awaMXoEeAnbBnfbZQfWm3JYqMWT3UnzQg3adfzRuLd",
  "key15": "KcX6ZEUdgxHtcxEdeJYciZjaP9ki73peJSGonkfq1oRp78vo4JYRF2bZRf4YzsVgiQVQ3o2Sj6jRF5ggjUw6a8m",
  "key16": "3KrQVciP77myqdVNc3rAK26F4CYZb8mH3Lv3wWF6EGUYwtDhotuc9sEBYFqLv8HF14zV3x5M5BK279rp1rmoRJep",
  "key17": "4cbhkCppYPcKoGQvoxzvwbWPNXwiV4sUkUVFoDRMELdrCAyxaLTgvENN2gh6DCSExfve9V4iqYYh8kjmqsswBHEG",
  "key18": "57RgM4zUAAVTFbaFdBxrPBUxbKdXJFJyzoRxdnMuGunBdzDDMwjgLh4UDSWsy8ojrxB3RBzgw98wenDv7SGVbPHg",
  "key19": "z1uuNv4ydLYQ9doD8kVRvyKUF5s1fidtUKbAYY4iUDYuqTEVAV9oSxfbYSMKHbtUETtXZuTEVdDAQcFvbXAMb5t",
  "key20": "2uFYFpa2wL7NcQei8jzWv6XYwzERgGZTBtbDVzHf8DyzDXTGfVrfw4NAL1g4WQ7jNkh2ZeSr6N1rimGVjePJsRZD",
  "key21": "3oXPJ6TrEzR62VonZXuLGJmKpF2hdxEAKKKpPii9sFKmb15NfRENsJ8ZnK5BZkZTk5pkHzLLvpgaEuGhUeXvHzwF",
  "key22": "5Hs2EhTK3D95eGDLuokEhj5AMNkhwtFkj4Fx6HwoZ9vFwc9G8n3bsTSx6yHDx39qWmjsjtvSpYecxc2J8zk3frZX",
  "key23": "2PDmM2UhM5CqmN3HojYthqn9TPgHFTWvEWckRdrayrawGiPdRTLTUvVaSkhhiuSjKtFbchovNB2eWBDgqkxmh14y",
  "key24": "31ppA59LPXp1V7FtCKKQfN4AYJ5RiA7EbdXfCsXfAMhwE3YjGTNj4LsjYnUVzp4zmarWt2ebXMoLde2myhvEkNMF",
  "key25": "4iAY3WsLHz1DqzuDYhbQCNQNuSRMJpDq6ZE9GC1W35U9LE2AoeKAYmkr2xwXSU3cf9hyRw41vrVQZwTrxM3aQswa",
  "key26": "5z4qGMCG7NKeujQqYi9npKtUSu6a2VgJ1QEaWYKtRNJWP81FzFZY772JN5apoxyp11qANHoWKqctmTQWpkdG8qDb",
  "key27": "5rYzxrNesYU2caGama54GByREn447B2vhfV1EzhJNasRWbpiyqezLM3oVwRq4JKVzF6YRGc91pQUKZ5EA3rjTDiu",
  "key28": "spqpUFjoxKptznQzhoBVszrRKaakKgzmsEngugBMXFmQi2KuFp9pizAjW58MPa7QCCEgJCFMy1kgjiHT8cFbsS1",
  "key29": "q1uK9AjkmzGQk6az8aHyPJZP6hHgrTyPXoHrxhUmzawBVNxfU1HPx4XfHqQEEDBTr66qAbyoUPiDPPDekyRp1GU",
  "key30": "WRzNArbZNZnTZKnHaAvSvG88zPpCUT3SKCwon9CnTb2PzpL6qVsXp9DDofMoc6t8PeDQp5ZVXENRacqdqyDeipM",
  "key31": "issvEp6YBt3JrufjZbRUGSHmHCGsa6jg4h4YYPCYoVM1FHXH1ANHYvbt8j7FFD4t5cYgWN3p1WkevVW7vBdqyd1",
  "key32": "mH7gWXyNLyVLkhLeuhamSi5fkicmBm5iaH3RR7wFaGCxkeTe8REMuWtfr4hYmaimi2srAfnTbHquJmtoJTbiWDr",
  "key33": "4ME335gpsro8b3BYdM7aVwk9SRrnzqPoVoSnUfRxu5c8U3ui7Kth1u9SsFpTka67UsX3Fcpzsk9DiEtQmwUPLyf2",
  "key34": "3KjS7tb79yfXnEoaSpJDCPHuTNvtwXEoUvu8KbL6JF6HkJXkCjSGcJhfGfUuvnTGDc7JGA2DUrzMfV13JHKUcZFA",
  "key35": "2tu9HYbB27C5vicybxt5ASGhvTA1S61T4oMpDAEmKCvuUnTQU57qdh5eXr4r7fkeDehTncCimDj77N9Kx1E7rVrD",
  "key36": "2R7NxM8eKEkL8hYuAWStkxVQDZ515CKoJ7Ay1nY9RgfLJ7sCXspXkgedLVueaYV79sypPminkeoi7ELw7w8PHUTo",
  "key37": "Q9jBacUHkiTCwPTfyEttbw1UqJ5c5bRCfzUzbKiHCWLWcLgsrzZfbx6Huuf8McU5oKhNShdbh4LmsaKC5P7xo2Q",
  "key38": "4a2HaZ6VPyfMm9FNj4ohboCwWJnkwNJhxKhsxvbuD1YSZccAb7Y1Tpq26vvaZ7PG8HKmpJYyMF7yod5t8UPBuQHt",
  "key39": "2dPEhLfovVTEePJg4BHjYqB3WBBmJiFXKp7HkKNpEXkVHEF4E4AhJGhmfGFCcqYYdmhSj3bX69BLju9J4oCeJwq1",
  "key40": "3UYomGWwnKfDqv2MSs7sazeRSQAfisk8TRocHX9nU9RDN9Ag3gn2x2LYKmvppHrF9KvcqRTTQXzafsGPh4YoXcWs",
  "key41": "5Pu9oRSRofVN7dGrhSbAJzMBB5N9KbrAG5Fy6Sgf2FEdcYDvsFZSgbLiuaEXwqwzt3mQaxNowGTAActMQDf7DMGm",
  "key42": "5e8JcXhkHoL3aEhvGh9RNgZ6iC5kozodsLA5Wk8jQvSdDaEngY13HV8skVChibZx26EYR6ttCYzY3c2no1qapYMt",
  "key43": "4p6Ws9DkE7Hm5z4Er8P9DpAaLxLae2ezmuQ6wv7WqgPMc2BBcxea4A6B6o7MkT4XZ4trw2fwdtUGh89PGVu219D3",
  "key44": "3eUL48cyoFnoHpbJxo6FteYxyhgurkAqoLrRwifbryDLsmLcASbMsQsV6e2sBnYogWQDHmXddZEFTR6x6y19tavG",
  "key45": "47MrgpmtFFtgwRtS6LTs3ySZKtWXLLjmFw3jFDKxxMR2nFEGvQtuSAxnK1xqV788SbfoJxvryLMxhbSZpRBqrywz",
  "key46": "5uNMBW5NZorLFWgTrtJiPD42kaBR7Vf7j9614wn7WPn5tjbFxcLpq9bqbCbSZRDPQWNBSYt78yXY8vm9eW9ZrUMi",
  "key47": "4N5UccborVvPih2iggT4Px4tUGvHwetnN9rMRQxzXeij8NGVHgS2Z4Bf4gGxG6Sc5jpzACDDxzkeJmHWGvYn9hH2",
  "key48": "4qMba5SJvJBNLMspoyP6d8m4jsyt5h3riEoMmxwhQq2PExDdTFftnXtu12sQyBALTo1cvwK6TYM7gewLY7CKcJvA"
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
