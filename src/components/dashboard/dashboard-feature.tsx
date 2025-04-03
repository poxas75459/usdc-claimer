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
    "3XtyozWYFmnjHUMZHM1wg1DRKXD1KSAvxThHUDTYHdyHYBnGhCKA4MosVZqbSHFqv1hRD53cgwv6f6NiMAZSJjM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22oHGcUefxFfMcvKVhoGfetLR7VFLLgdhEGMFUhSbzQxVh6VPs3zccRG91uJ5fCFF2ft893fudZphqvzmaq1WkdQ",
  "key1": "5RgKoCfU9RUfQ8ooLxRdieW8xgSef7c57RCRKQNv2EgNwvLiNRBTjgnL5zTjjm1wqMG8hQy2dGq9FNvjZLD67NSt",
  "key2": "66brs17bjAYLAtgwucViLMJ3mp1CmdJgcgdFqU2D961n5VgMhL4ZHaVvAPrwVfnjTNYHCkXwxkQs1MJWnH9Y7iRh",
  "key3": "2Jfy7jL9HWMcAN9hHWzEGsTueXy4JEtTVXdtYTqA3etVdDGhsqq2d47UvXV5qHCmX5wbyGUxRumwPLhmiLiVoxMQ",
  "key4": "41f4pX9xtVemu5USpkf5zkE7vLo1T8h2VSfQZmeKQr5X8bHokgkahZYpD9jLjMcaw5GT3fH4t4Lw4ysQ5bk9zWPi",
  "key5": "5wpnFb86xfzmeGbQN99uNeWxaBz8BQfi4BwR37q7ZmknA4GtX1ymJfn4mrmpdJjbejmnJeca2cSXkBb38jHr2BXg",
  "key6": "4vuVeGKYMNjxdKMB4FVsCLoXeJ2sc2EeP3PoE3TzxFanoFofiBpVMK9VxEYRmC1fw3p7rAhjCqMsBYtdCrAKbrzM",
  "key7": "5fGZEf5A7scdoHYhtw4uqZaqVK6MwSpPQGmPu26xkN8paz35FpBCQoh6a6jt5iRxdLVJ8c27w2zKiWz9y3Hyw1if",
  "key8": "2PgEriJxCc5o3bNaNaP14eXhCj8E8NhtJiMDxtKL9wu6P7afisPPUumpH6C4njyvYhRSgJWWbaPJgAdnPbZVonmQ",
  "key9": "3MiU4AV2gGsuk7nhmLQbhVvdaNzG3MusE8qJsRj2L4WiyWRHuF4FhRrEZSj5qSd7Yxo9tLWzYwrjwX6tS2j23wUQ",
  "key10": "5t5ZGjjjBoEHZx28avQwm8Uh3AzKm2RtStPrEu9xNiwsuCWimMvbuv8i8bS7FkAK1DTHpqnmL4mT4RJbdgFDVVot",
  "key11": "2iq4kpDhQLWptgncCZAG2nxuPp63oVmiAR5KEdk7P3p9wBZLjegN19Esz7NC8xqdpBaKRC6ymjs2yvevqo8oZ3Z1",
  "key12": "4RjgqaHRA9nF4wfkN8YWnCxCVirKL2t2iarBsiEctMqrUWJ9eUU6jHkAUovaddsdjVnQMjPHZMbzmSQ1GfNvnHv8",
  "key13": "3bi2M9LGV9BBjTJgpKCsvTsks1ah78Lt2D3MvFJCVUgozH1Dacu1NrP18asZiqBZnMHNyJ8dqeEpPhj9bvDwdZKn",
  "key14": "4AzqMa6EWBX1LvfX4PKVD3mKw3WihHVr9VC3uvr6DwM1nj4MNZUpvBFL1Uob5624yPHywTJbHPfRXjaw1SH3qeRp",
  "key15": "62EBExdULCFvM99wg53AwLMEx1kwMZGESmvNj3rSWxerwRYfE4HQVgAEoAYej5aBwKSVQZ89sp1TyMQUF516ADXK",
  "key16": "2FX8WsWd4nAsH9vsjBcPnyU7pSYzjxCcJnN65udjLXMqSCYxVvoeRVoS72hcYF7MQPzJ5oWjgWoMyCBvUMTuxTUE",
  "key17": "cGkJQhVNHQAWbUSw6VL1z91gMgWuHbP3DGqADXNbsV5LcRjUt7g42ujGV1VNfEf1mKMQnzxpkvG8k6G44GHiiQe",
  "key18": "2Yfa7WHqrpsgp7XmW3cDEAX3yJ6ByPF7J6uQo5ZvkcUcWKHC3Thi4A3H1vUUkM4U2F7Fr3TQeAGo4sJZ4fRSQqG5",
  "key19": "2VFyguUBjjv1nSDtiahtmqxpkBXSLUGpY7DkpJyfUShFknRuyS8xHdyyCFYLMQUjos7DCrwKjSavmgasAAtr1nBF",
  "key20": "2NNQp7moGS1nVNgXEh1UDvJeZQReEGnjJaq3B3PTJwD8BqvePx98gjRx3XhXAnkEV7YWEsutRHLiaCwjwBeyi2g6",
  "key21": "tB4TRR4KJbJGSDsK1BtvYUdGDpUro3KVjXMdraEh5maizE6DHhDsKF8fYqouhs29AAhnhCQxBejHdfU3xyAVg5M",
  "key22": "3UwuaMxJM5acqJQwh2bWDYq5RiB4GJAhzkPmTdtozxu9jNTdcrWxQWtbHKkt6HmusCtSGRXKYsQSbENNsBLLHz7a",
  "key23": "3siR6EwQzrS37YEqk5cARDv2oQAfmCmUmVavCC6pozv3dtyHHHy3LcdB7Epoh6HUnUWpLxRAmahfruZGradam2K5",
  "key24": "5T1VaDUT84MTmABenYHojY9NbAsgeJGWZAPQs4XwkKDM74RCxCuomCLLevHesAh4SKEaTBkPZgrCRQadudPdHu7N",
  "key25": "4UpGEniS26nmbJaqKi27wHF4tzrWDraNUwsQGniam9PHSJJpfz8odMDJUdh54ytLYL5h3ApSyDHgaJzpzm1sJNXk",
  "key26": "24p6aPfLoCLi6xo3icbLZZo2PFpNuNzPsKyqbmNCqH7b69xS11SmaUpFZ1zHQgiPQqkyubrEyh43G61N2ybt6Eiw",
  "key27": "21PzBQSDpXLmDtfFuCMxYn2zS6GN8eHYLTnmTAd7Tv7SacXEfAnrJSqtgKTViyaAgWLBsiSiKDdKgABWDsKfy6Aq",
  "key28": "zKGjYo7E1ZqQ6qUczgTYkUD4YREtBFUUUh19Ae2ju7hjQvrdZoH9FG4RCymVsB9tCtWwxWkHyoWBPGYutwyBbjG",
  "key29": "3bh8KvHaDEVgqfREANYP5BZx1XyX8KXWQDWerNF8KFjdb7eA5WcqKceTsZANuhhpykZyq5fPhMjvZNwmx5nByR27",
  "key30": "2fQKguYp7eZivkHvxMrBnDNvfGhoQDwoVs67NmvbR7zVWv12tvy929DqEiDiYh4e8jxHyKvKgwZR8Tt35qSpkysW",
  "key31": "2hbGn6macjiP8nAkq3EgMkweXGdwXhZieWCgXzzS17iv8Zy4FWixCBkZzWDEsFqpj9LYLBBqxvaf15C2WVyvLmyW",
  "key32": "2tJGEqoCJoq7oXAng1A683Tn4ECE4dPABnsaHhmXiSApjKz4zhGhefGxAtHSTpKdtZJdm8ED4253QZPrus25XrBy",
  "key33": "5u4XSXHMdsZAcifCnSP3LFeZWiz59zzRg6NtcBGujrX5cygv57VKCqyz3qb7CiRm8kq3uH3S97eYwGmP6DakjzX6",
  "key34": "4kZGC7NDKJmNKrwYovAsyVyTaNCN8Euvty2dguCB4CwvGnyf9sB9xbvcnTzwGTeWGd3skt4kmWMKqdQESo6FAMBr",
  "key35": "YWCE5k3vunSDT9WoMWHkicCWUzHBa3F9NU3gdZagoLLhpxL742pNteMxUzgJzF2td5kn1ccoJjHELxHdAHNiip1",
  "key36": "51dcSdfJvMLnQ9hP3qKqNs9T3cXKtQspw4Akd66fBZJx2sCzGUFGZbRkhWyWgB525Uj5GcekQmEKhSEVnCwtyi8M",
  "key37": "2dzNqgxTR7tA9xJwgcB2b7diz6ZjbgPWYRp8S7HJA75hv6BYVADZ67EemT7uvszu5shrbnmFQnUvDsvg6v6oUXAn",
  "key38": "txCsTHGGtX4KJhtKMVpZV8DGFkXeHHQsDEW5GUycSjHVT1maZUEE1hcrR2aaF8NXTtpSsLv638FLkhxBHDUveS3",
  "key39": "4DoSsR6wBCKttgPpUbwbg8FEDz8QtmNEt8x6BdZTgH8F9M7P61KaZLXXYaqJ9dUnoKzU161DUixHwDm6bRPDkEPA",
  "key40": "4yzVj59UbGcPGxGG3v3CYw2n3ugCJwXtUf1YYrjAP6fs7hTLncRXnX5jkuFJGHS9D2GRP5oeddhto5YTcG8z8Bnk",
  "key41": "3XG7eXmeq7ytqqM8xeCsEysVdWzQtHa9t4cBq5TZ9aR5JoQYkTkxsZWVTacTxx95Mc4cbqhiR9hNzvaD9Mzzharp",
  "key42": "2WhXBESFQjsQm9dLqkQCgqLHwgUkzoRQ7A1d21XW4e1FYomHGh3MQ6dXcTVisuccBn73DKNitEEsyYqtbHs7PJCq",
  "key43": "3kf95wPf8XwFuRqfBtBLzqBqGotW2nRjon13nBGPrhQ3Xaf9UZuB6YLHbNQms7JWzPjxurKgJuZrkmk8go9fBcpD"
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
