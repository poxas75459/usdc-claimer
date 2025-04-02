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
    "2GZeraPUP9WECwyyx6w7F8nfKiWZbW4MQE93onH9XE6rsgDLAv4DKkPzoS2PDKVNZQvZBSaZHi9RodFuZ6H7j6oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eabzvXkoZdp1UW3VUuYEbFueaAdTdLXpDArs1AJkZmryqV7B6rccdedQNhVoAg6wxbQEJeBmcL8FnjEV1rb8q9P",
  "key1": "Z8gGQ9od4C1AnaUbNgdW4wpb1seg6PQaKAc9HLZPfhZwGqoxLZbt6m85NJ851kXD2VbEFR3Jmgojg5GbecEq8AV",
  "key2": "4c4NSqo5izKR2aqxNesvTcFb5orwKLXyr1wHCP5U3mR9wPHhV4sLHVgbxB7gLhyhyS55FWuMQLzD1ysAskD4ZfQE",
  "key3": "5A9vuQUoqsfBkfLGW2QsXYcVT6KgKrq9XFMDZE36Ddx4sRHS4nMYDme66sBbLaVN5UWq5TCsFfexG3Z6zUmpABne",
  "key4": "2wtUPCZbc9fyXFvf228XsFkLhhw4gSafq4HZPrQbMzGnTcRUQHJouw2mii8VovD9eM6CTwfoCqwbh8tqwjYopZch",
  "key5": "1Sm4wBzbzLJsVHtthKMj1PXSs7DrWaVEjRVTaucHFo9eT7yLfFfXakjw8n8eb5dyur4ZZWkfBmb7Qj8XhzMTdZS",
  "key6": "z9NJqknR3CB5Sozmqmo7Dk6oUqjWnuVf2pRiSaxuRTPxJhMFXRU8nRgWzx9a1TSnTix5HUuMHtR94sobmvazJ7s",
  "key7": "3N58FM8Q6UzuHawExS3AtueKxpQTo4JKjum5saYxK5krgcdQZuZGY5UeTEND6xcwArHUAoJWfdu7xbGRV3pB4SxF",
  "key8": "2aCbRcRDAeDHvacuKtZyHLBDpEHBGcdKQfEgHR3nakHmp2jroKbXLnbbafEoWou9zYNnjn2arU6UKx85KyYCUyGr",
  "key9": "24QPRUdhjDbt5B1CRjEFSSnzdU9qofJfhetBwQYM4TcuqeP8KZZSPaUrBwmwmjbPvFhSqkjmXEQL5pVHUvT6zPDU",
  "key10": "32NvL2FzDhKQ1owhvq4JQzVwcoMyGbvX5Q5nndnMgvoEd7te2spWUK6YpYbnaQya4xeWPDHoUW35Bm8wsUr5qnXP",
  "key11": "62hzUWdZjesZzX3FkdUhyNy1fXQh6Ep8mnAJoAbqHt7cYDx1FVfiy3FvZie23xwaam91GaYEyWc9nP3THQBUUhYW",
  "key12": "2XPAxzwDXNXKhcCwdkCueTTPU8fQx9x16MaWJDYmpJRwneNXKGrGuSZ5fjhHR4EsqcHadi7RZYwFoa3UYcqPtWHJ",
  "key13": "5YB8Nic1ju9FWMQJ48bzx2yP9iWREcDvqs9VPziMF6VNYEsFNEi5RrbBiFdCXeVNsWbDdDDc1EaeUAVv4PvtUk3B",
  "key14": "48LSwXvhG5Q2rKAAnKXUk2LbPdT8JgGormvbqop1rit4LqqGwGmJNkVfRHdJQS5UttQjHasXbbPHfvy4HzLhZbgo",
  "key15": "4nSpNLLzNxSxsuV9qCVSzASBc6HKB5JzGbtqk3bTFPA6LHdSkQuw3Lx4kcavmGv9hJ8Q9zjS5Z6FiUWJ7RfxzXSc",
  "key16": "47u4LJ2kLboChLoMnY3AZHogYa3G3bJBnvjoa8uFviPu9b2dNufmNgtqrcoqk3ftnqm9i3b7LYyhFMF7fVKaF7Kz",
  "key17": "62fggK2BbJqu7MsuuvgQF2ypSAKqMGHVBqjdn1znGkj4HuMkmnkxpnZcmHFz6gJNrqBiY9q13ovUdHXyUApjspqJ",
  "key18": "2YyWVHvjyZuey5K9EVoYg45SpZPdZH4te37EJ8yH1G6jQiXkbxAm91WpEC1GtGkT3uDFyZ16AtdK15Wac7t7DhX2",
  "key19": "2zUPCCHSagz69zoWQZj1dGtLGgMeJGbzKuQdnB9h5PvfVMJZvNHTU3JhBr8m2tUtThJdRhhnH2ByiCsinHTdzxXm",
  "key20": "64FHUTZAi6rwYmuTCqNoHrSDMfmkVrTaPKv8jsfSxtLh86KrU3jZTrG6cnCKewE6Ryg2mUzfvVzdUVfpo3WNTHHk",
  "key21": "4PakTCdXpV2tRd5WfDzuuGe7e3RUhRePWuRKge6qGiQAxMiQUSmMwHMq32MxrxHZBCaC7U5ceSizz3MYaTaiaQLe",
  "key22": "vY17ykZ11s3c7BjQpJM3y3fqVYPPnSpmLZdfPCkFMSH4WLALefDn6ECiNJjiTZ9Si9SRWdpMbV9sfGxSYCcRgjy",
  "key23": "5i8b1yqXWvNqUf5EYH8HdBH1hW8fJKB6254fs18JMi9YHqt9YRF1bh3zaGFDHQwFY72y8YAYpUjjh8GW7hR6qXkU",
  "key24": "55h4PtycBH5aoW2zSVfiGoAh2WfHZnYWFWWvZhjuXmJFCReig4tTaA8XWg24X5XHRbDXaE1rudbodSpx3JiZA8CT",
  "key25": "3NWwq9aAhz9iQcmJYNCw9fy6gqFP6M58JXCsBnistVdoMZNV216fUB9J11gUdz6rnPbypeSvPuS5iqUjXU9X7bkM",
  "key26": "F5P4gPkKNxb7Jjuy2H9bMSSxtEfup388DQmYTNhCnmCE5cgYKPfJLvsJ4g1cC1ip7RGeVtxRsSjUZN16oDWKPe7",
  "key27": "3nPpgxUjAqz4KQj7aktfijxMzAHuDgXAfoSwTxbK2HREDh8ESFR18GV2Yr5oNoaYn8eeL4Mt23bfc4jbmC9s2Cgx",
  "key28": "599X5Emdh1PxUqLo5e2UzvwSUdhyB9CaJixT3XrN7hjS5c6P3N3J1npHQY2wHwDqdVSnBGSJdhpqJJmeAiHy7HSE",
  "key29": "2MzLH7trqwwxyLiDfjqJqzUMfGwGyPZNVotA7yuUxooLP1LHFRJA7qBD5BCSMfw26XFLYjfPJAbQrdsaxon6YHHE",
  "key30": "4vF77wVnFxuedmGN1EsWp8ZeWZWhvc3zCvq5yKPorBooseBQnonQUf3uXi4iWpZGoXh2ZpwNAod71TiggTXn6Pew",
  "key31": "3aVSMtf9rf2zcfoUZPLXm6DqSb2K3aEmgzz8HNN9aMLvpiUMnEgRSy29nZVqHrZtKauAvfFrqUwPjFVpARTbMoF",
  "key32": "2Tckgieb5C7vHT56JrWrc6vSYkoMZXdewFCXF6xGVKmYwusjF9WyVpbjeJQUwRMFhJcbpBzgSSLsYXKyQAPvcALD",
  "key33": "2iC2fgvPjMsZqWbtCCoc1BYGYQ6WRvC4g6tuM5JFnDE8anxaSVjkUn1ECcFN3sruNLcWAfMhjqGopq1Y9Ba9DSwq",
  "key34": "4uVMp62HFMWGte4giYBjbg8FKxyj4mHsUZY1nfiizgoodULo1ULK9qnjoSmzMm3g9NbcJVgoZWhnqxe4fdSiDTRR"
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
