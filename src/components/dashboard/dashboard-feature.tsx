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
    "3GzX65DYtfbNBe6e5HW4kdaAAgCTtXF45XQV2n9kXdCVbzaB5dqQnAKaXy22psKe1sNzHcmQ1b3hQsbmAyugxVp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26oJAGfi3U6PdXsFGVPETKyNK5aNAFna2hLREexr8UshMYPwZrfJL6r6CMAFAHiuk9RTavuDtqwTdgXJ8MXhUHMt",
  "key1": "64UZ7NBzwQyyjHQ6mkEHnKQ5LsHTqfuYY6EZy7H13rAAAhhp1EEbYfHSSm35UHpso4GF4veLV1Ejg5s9gi97gF3t",
  "key2": "4Ye137sDNtmnbMLkuV8VfhhHRfoVpXnmtZtbcntSwaqrL4RojsWT5hpWyRWwWfXnK8MzgULY14Q1pwkTYgMFakdp",
  "key3": "moFby6wRy9PzcNw5KEraGVJUhncoqheybGEiobdh18cpUmKFqXuZ2ZxD5X2Aq6V4dXsx8ovsb9C1RdTWxr33Gga",
  "key4": "2T3kZ3fwAAoYz8U8nH6KXXTQMQZUUaWRoN2DxWjzo5Hymt3xuHX5cf9cMSNzhYeU7UUC3e85hWWUyQ4HsC5ESAG1",
  "key5": "3d5k5bSyJYNjZeuqn3GRu3BuiAL5V84d34mfLxSeYPdab9YZ1Bm2GLBL3Y8jbeCg5sDptAo2bzTqXCm9nbqu6ub3",
  "key6": "247x1965xvDGF3vLXockRXTTXiqznNBiVEAWUkMGKJHnzxuEmDt9zgGgGDbk5Lrtkp9XwnWCBGUfYHHXFE2ey1V2",
  "key7": "3Yz7YixXb9hBpPqfWVnWNSBzkoFzhgKhUju9ywUD42YUCraot3HCrito5AMwMiUZTQPEAGP13EUkDSsY4AtG3zYg",
  "key8": "cqw4QkTQXjynmCZefiXrbTxigyfK3obp6bdapDxNyapB1uE4DiRFbKG93WWhf1JdfvTRTbSXxxMP4NU98icVn1L",
  "key9": "5cMmVWvEXTp5ETkrbmi8zaWRqS2VohBZQCMbEo4gernTdH1GxFvnofhE27SNWMvZc1JLDYkPYWdzH2b49ozZitu9",
  "key10": "2MqC5qFJavcuchduMYU2JqjadUhKazBiq9YwqUiZtxt2tqr4YVKvZ9Zyn4yRDuGzA4cMt6yeUd57ftTGnVSwBdx8",
  "key11": "4yiLVqiQ9eEY2DDeV1whSwDib5bgXNCgnqD7VyWT4iS3FoZeE8owUqwehecBPFQdjw9yprgiSX2UzJYDCickqDh8",
  "key12": "5nV4Gi15JLwCUMXC4zzTepKNyZvBHJsPU2eKswfQKZoWkXkvcqeShCWZcBDxrgPmNBbVABGWzpaSj2jgSwTp8mgB",
  "key13": "5haFYofMGsKqaoJr2jFHDVo1WoBwHwDUK9LLR8Q46mwc5fVqKG7wSCgZzyhCJAbYAAuDFXy7ndN5WZ232gcuvhME",
  "key14": "KYypHaq8T4PLtiT849uGEP7QEMdYMbeKyi8XNy31kjrJCtWdsrtu9Y1EReD7BQgR3hrrBETwN4uP6arCrHCCHKp",
  "key15": "2HxLuVS5BEg8szxYhcZekNAEJBZfeRrjHYwc8FnCN4UkPR47Rb9gKCwWRxDaKqKXVECQy2j3zi5GQot6NRgHf3sN",
  "key16": "2nHgXCy8KnAXy1YCRR4dn1JUMtR2UTSwWVm3cK7u2Dij3XCWMWUU5JhQrZRqo71CHj24WLzsAR1C4uXNwH5GH77d",
  "key17": "5rFDo194adpZ9YsXsMdCcHxSXVfBL3MqhaSL8jVxGdCu7kwuqBWYoQbq8mMegZmC4iRM8NDwrcV4oihR7c8EVD8A",
  "key18": "5q88RDBzMGWF6rqE2nQgGZVNwhuUg65v3XcxvePDKQ9VV438Mx4oDiSASw3i7zzbNWZtTqEFtdV7C9HrTbz1PKp7",
  "key19": "2C2ZK7a4x41V8E8RvYkSub9sZvLUhXNwEZTa4JqLjPN45Atu2GMHbF82Viv6ALCTEDQ5YabW5mhYyL7vRDnRssw8",
  "key20": "3oQ9szXxVv5CLaQ5iuY3RqoqmA9un2tRPFNTDypfw2Z72M5K1tZPnP8WZohKqSUJxb2nHmmjnruwAyFzWzJzECin",
  "key21": "2bfMwk7DGwT49aU1ZBnE2PxMReeWSzndAaaVUg73AMpqBhJHuSo9q6z43rdsn15DrGxDU5UPT3ApvJPeJQTkbsSm",
  "key22": "3G1vhFUBRdFiRNqaunL5T1AgpySHDxFKbtrb7ecFN3zNJCqeLsBHGVYGQ73p4zxtnio5WMafmHbcfW2ixroExb57",
  "key23": "3rCtTsMMy7KtHE3fySixw3VXJAVTJ3wkwHgbgxWxVu7Maxu6jLkVEZ5rZUwMa5wE8N9KiZ1Be9Kp4RM3EJhyqh97",
  "key24": "3W5iAaSW7DUTtaUjk6MVvL1PCbMZZxiUnr9bU8Y8nVQ6EVoaExsHNahNPcxQ7dJ1LxA2tbEEYhTHKCDmEBP5pJDF",
  "key25": "4U1kzVjtnn2qgCGoNxsyQ7uMBD1XKoGSbpiZjHPR35BqsYcTgjEBGs63gH38c4zxWdF21jPyE8eYMgadiStn1mUn",
  "key26": "324AeWd5jHrHHoJJ4tDRF79FQVnBgdVbKHmWHEHi6ey4vQhehREwb4KGet1Y1zVFMkzsqXMkhbP4SuMjaoteL9yD",
  "key27": "3nbC9TxSudMkZuKwXW1Q9RoYev8fik7HpwC57tF2VxW8GWztcM6YLdVwWfh447LMmdQxN6npdLtyjf7X5rscySqP",
  "key28": "318frP47zEwJXe6SiQx9LdZZkww4ErrQZLhudZYYCBx5jmAQbTs6GqcUjitiNAWgpztaLN9ffjfqY5kWn9f98ar4",
  "key29": "5R9VfdTwH3wYqeuvr15rjdyCboPrxuY2txrnsemPwErYX3qcvnmXTgRboHnCBWzFZ8m9SG1Kq3YzjYen8P3bhnP7",
  "key30": "3VQVfU3o78UXcoM1qQCzutUQ9ynsYQfkJ24xN7jmAbjSC2Wkwz2cFMM5rV1DNfxTo8u5CRxQJjAhumgNu9dd89VW",
  "key31": "4j6vn2fT3DWa37UCDKCEbGXskqjj3wUczgBqVgk59smmYdMtRR15mjCGKrE56AFGSigPtoiKgvQQGJWm1scFzMBy",
  "key32": "3mA2A3di9GZU68XE1tB14N2LCwQVb1ix82x6mmTEbQZt35PHc1TobYUDJ3KRDrNehMv5sWVKVv2LocngRPLhkH8Z",
  "key33": "2fGMEaM5hddC3FfQGGDPqK8RXUvUJKGYqpu9qoWVMjw6fYtLqeuPBA74aHkxKcGyxMCbhQLEji7nfNQXqCwwK3h6",
  "key34": "2kp3kfX3Mp6pNrVKNCxxt9stt83WELrfrtboUxKx8KNRT8nMpAYNfUpMbxZGQ4c9mRRWrw6d2oXHfyCwtNr89wZ1",
  "key35": "273ypHNba8CRsnvcucResNDNWtF5FjL9qFw77ALsLH7fYFs2snYb1midyWRA8RZdy5GpjCgaYFkfYXX6bho7trgR",
  "key36": "3H5tYpx98MMqNSAWRdkTpEWHct25cXTc4XqdotRAKwWrAzKBvMUKAppeTQCnpGUzagofoUsieZpTuduReK3BLiB5",
  "key37": "453DYxZBnrAsHQTM7TsmB4Kw3vokmHFRsMtg5SKP8K9QR1DaBDBThFdYAMZ71J2CsnCQHdThjf65GPUbnLkZbK3c",
  "key38": "5YBJXBmH8Jvy1UUskc5y1LqPmKMiJXUqQFRdvppc3pShRpp4uokfRCercEtww2MdLmUo3tEHDfSqVhivkxXGbnQ1",
  "key39": "2P3RnjLHFZJJ7yJDjyWMbGSmYBLVbhDWaPe2H2m8rJeoshzXVWrrLq8wxdSx2x3YbEbc2nY8sEoFmyvnDM7U98Xs"
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
