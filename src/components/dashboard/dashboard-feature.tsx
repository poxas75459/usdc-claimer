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
    "4g9GudkyBg6XrKr2HCx8yM2mTnWCtHAKzfHHikW2njFiZVwcKtkCsjdRvNbVjdntnErCWaWf8NcTsgoRXf4nPchF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXsLfHcgag3Xvf8p9wkKEWiQBTPHbkw8SYdzCcLCCyzMmDwyUGPat17QyAqYeyZ8ku4ARjumXHKghPP6WL9Cs7y",
  "key1": "2vDKX8Rsrpravu7hjJtVCMvFE6XxqUDzP24YFwL28SFH3FsW8v7GNoqcjS5kiRMkxdq3zUur2YRaBjdueMAVdEmc",
  "key2": "jpxg7UqAp7vLgoxxCD2e2EvawqrxYxfppV9B6bm78eQJwrVM3FUDoNBmjJGK9XN86PrzwzXWnnKU3FLMmmVpqqD",
  "key3": "5fyhUCX3XuqDRqUbkTEQjBtbVL93zyK95TDbQJW6mSMTGa7xyzuiArLe2Nb3qNjqTk8yuLxV7xMsgA1mhLwVGzB5",
  "key4": "5HhhpJGtaLR1dkZDsdpUcBuDqeNWAAoESk3m4EuTW4mvLXoRjE2dmiPGxW823WgidfSnk6NdL3RFQ4tto8XUySb4",
  "key5": "58Bi7ftmw61bqTbmuurqT6KZR774Z3B4NoXcy4okQsjSwXZUBxD2iZVPMHDcWBZRPdAHghybHa4k5aVUroK7HQ7c",
  "key6": "5YAoNcLw5WkTAHegqnVH4MUT5CUn2eNhvUPAiZci86pqx9nK9ZqxiDAqUb5ezyg3Y8Z4rSxStCjEN6iJRGMhxBiU",
  "key7": "3wVjKXLEA5WCFSqm3bQ5F1U6kbDxh42AXcRMLU4JyLJxqNRGMWF8DYTpZDJDUNoKk8NHyu9zBPFjpn81wMLRz4Zy",
  "key8": "fkx19AbTYxJbmDVrSELm8pDFTsCjTKwfhaiA5HKgLmCJ7NBWjXFb7i3LFQcGgytm2KNQACY7xYrbSYXSuqqybEs",
  "key9": "21GGFuRfBMarQmeVAqTCEFvyqKGs8NBxVv6CyMueznzyCuDmci3tAgGkpK4JJQGZsTcQqUvZ5JG5NN6noXutyoZE",
  "key10": "35cqTThyv2tYZDpoYMsTXeQpbFm5d3z9bpvCae1d8R1fbdw5qoxHhRBsCZe7K43EFdHtaGTAF1g5hiDmxj8kvfgq",
  "key11": "3DtKjSZZT9G2gkChaYc3MCCt2EgoNzn48uwdLbEcHyi1c9LhnQ4M1sU1FuajvzX4c94hvb9rvFzPANH2XJ441E5x",
  "key12": "2ZHRRSiUXK3xjeifxJ6PH6fJKCTDbpU5e4kLwhfqW4RqxfsP4v3v4WRhYKQoMBiLC66Z5fKD5f67cvLqp8tzagjL",
  "key13": "4uWTh1V49KhUz71ahmSjdJM9nEZJGZ6cotJTHZvAWG94Kq6FwiaHMyH7X3zTeCFD7FG3gKpy3EdGHhFU9ddXk5oY",
  "key14": "4HN27Sw9SHts8F7evSnDQoAKFcn9w3jcCKcsaR7Nce8KyX4NvrjPwMZoKCfpTgyYUkUyXhyaVRFx2kixwxACYdrC",
  "key15": "SKsJre697DWTEttj4YwbQhZn3evEJg35x9pWMZP7qRVKAt7wdCE25Wq3DizBZGJEEecr9LV5UtgnkZSBNgQMaFC",
  "key16": "ENpoB3VRVwDLQphXMjRAvuR6uFkSb4G29JQbH4zhHGAaQUgpPHMGYUrU4DBiyG5vcnRjAW68FCkpL1n5GcQgJvc",
  "key17": "5yMntPjWUGh1dE6EKtUavQPwxAAZWUa536arpGetCyve6KC32p7S2huFY6weN13xhLFdVyHCXkfDHdNBzjbQJfHk",
  "key18": "5KVJcSj2Vv5nQtbY9DRvHqd7RUr5AZ6UoDxnXd3VrbbkNkYtt4rXziAreyRN3dUyfs7Fkuk5XMS88VncKA8325gh",
  "key19": "36aNaUqo3kh6vU7WatRhwtqQANa6io46xUjv2hNg7TGPVwXqySS8fXbMJdRxt4MqXa2WEShsyt5ZgvDUjRyJVEpg",
  "key20": "4KchBnKqkGkMgxU1ErB3mK55Bjuzxoaj5NMEkVuUyHZ4h7yCniY2S2wdAF7ikDmBwvC1KzBopW6MsV7EsJGTnha8",
  "key21": "qvhVqY9aYnH3iVbWzkcjjA9RJd6iBFETM7BNehKJgBjZN7q4NwYJhLJQb3FZujiaKGU7XHnpCJAyfM6Lz1FH3zz",
  "key22": "5vZ33nYVZPVakESRMi4fmyT7JM4e4bieTCdsPbGdsiuKgn7tMLiLHNtSSk7mkFg9CYr1kndb48oakwXvXhJ1eCg7",
  "key23": "iMmYrsoT9kKu4yCvyBEFYBGgZRG2FbcmE68G8KtbyPaQwUNdTXyK5hbwsDoVcdCVgnWdfmmFbMjAg8HLqCic3tR",
  "key24": "4NzyXeqpLmf1K4eXoiy9iKAruVcHs1SvAkPrFkmtFxvLYHSrc2BwA4ratKJBHqp4KQX29Ft7TQ1ZsribtnwXzawk",
  "key25": "4iXNfAoaBAh1mcHWoSz7ApgfX6wPXYVB4fr7uHm6BLE3AgnyToG6D1eaK6AwXnBcNMLQ7PUk6QbzbqV9iMMB3osB",
  "key26": "5qqk1vPihdKc8Y6j5EeYE9YNi5qbvm43CwC5eaJQWyz68rgHh3zNvTZHL135a49XpcAYfVqhCC6SzuuWWdpnGfwc",
  "key27": "5sn15PewH8qcosbtc2kYkSMjZiZVV1ZEoPTwrXKuPgw57VcJoCdHt8MByUdV9uZitXJTyFJJmUjEwnsUfKaM1rrv",
  "key28": "2CUu4bie8XuVqzUWgYuYdnKoUFNbQHRC4PUvcUaSJkuEnGJ8iLQ84iJJh1pifSfQ2GoEtReuYiYKNA4WbRwQwz4x",
  "key29": "2B3YUebVkbKd4Y3VsJqAr9Bi2iGsi4gPJ8QcScPEKFCKk2oegdz2xH9cP8LWe9RNrb5TRqKfeRzFYcj7Nb2S5DkP",
  "key30": "3iAe56rBV4fRq3WmCiMKLvjCGbNqikx8ymRkMdHHRNaoTezk79XM1u81Snx4ro2XRaqdi1mp2b33sn97ekKDNrgR",
  "key31": "2xwVtCSP19h8bK1N6HFs6C2aYbc3wUx8hvUFGgK9zh93oP9Bwz2AGrZgAvBnhvVZ3Bhnr6mhTKyyYd267GqCpSM8",
  "key32": "4yZsZiwkzF9pJbEWUE7oVWqS8q766vEtF2eVAxnyHcXDez4nWQd5RTtiWKPFYT1eWDwsC4mNRdKUVGZaiaVfoY7V",
  "key33": "26TrZunpQBgkdh31cPz95joPWkqfd5roPtRcyw7nCCuLgbwggLtpkxgf9qi8jk9L4PhAMmYSFU2Sxbc2v8KrkE3X",
  "key34": "2KQG7hSMopWKzE3LtTycBUHaoDtjgHti9xj2qXqM4chfT7i8vZrCKTvkhTk1raRnZJUwEhQ3zUQ6zhwHDP8JfWFC",
  "key35": "4SqphZUEP33pHMGoyLzBPTx5xMFrhD4WjzKrvwjZhTzarVTHQnxhuqF34j1fhBzTdXzHUeHWP6CnGei3rT3q6VBV",
  "key36": "3sX1BLLBZK5yepczXz9pLm3W12GuwY6U6kHKbP9Eed1w3XKALAeyAcvcxGp8Khh31E95jX1zhNoz3P6mNWi6k57i",
  "key37": "2TEToxSAqqKGjSrKpqgtMYSDYKMqN5jYu4vfbbkocku1A7deHBVz3J7bRdmbZB8i1ZXDh3cWgXn6VMMFcW2o8dC9",
  "key38": "zi2wprvCfNHtrQU5jSdKhMHSCe4uZpaLGyjyMc1vJUGQHpLz3AdzCA5NaWncnX2Zk83WAnLB5Pf5ryzbgtuNjN4"
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
