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
    "5zMRDdjYKuujfpzEXhPS1aPgTDAgk5Yh142unSUDdFStNz9PFFqudvSxwWQLzx7q3G9kRY7YaNYB9Fqr4P1ufK51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z2aSvD9b7QrZtdGL6uhdSNKQWc834cTPs2KvUEXLnt95DscTcNqsMfSfLZ48MW7DEVRiEB3injju2DSHDSE5GCf",
  "key1": "4Q7pC6AbDfwxtdta6Mk3sED8buQiFt81HiqTYydrcKiBBw8Gc9WkrNGGzae8gFY2sHbppSDcNEXFXEL91jDN1Vyt",
  "key2": "fbipAAASUeVXWfC7DxxrQVMWe1mBvgF5mSP1jAZfFSH49yqj9STqSjPVbn5JeEqpeVT7WZnKSHxdkDVtjEQtF9Z",
  "key3": "3U7cSSPckaKVqrQKGH84MvMQdZiXcBPdLFffGZCnV5haPseEoBAPYC8oW4VfFc4gLqCNuHtodnowUyBViYY81jAR",
  "key4": "243Tm7UXtxE1gVJYJ8mSXi1NwfrgR93mmCD6ypzdak4vahLFkk9uHiE2j5HFZo2UQWBF7x1RxJgeqZD7dwBE5qwg",
  "key5": "5t5AbQdYYXANvcfDpjXLQFmiuojerMtD48hrQZe38FVQ1bQgDeWQKJtFurFoggjUKviHagqc8CgZB6PvqC93cCw1",
  "key6": "45SwBTGx3fDG4XWuoqAEogkdBjvDayTM3NEzhPPB6WxxUoKzRgWNwUi6S8kBzPxLu5epaz2ncAxfQ937rS6Mh8cU",
  "key7": "3A6qx1AsvtfQ5rLbJTMoYZ7A8qYpx7qZ3N3ZwUKi3hotFFEumX4bNkCDfbTXtETiqGRUTf1hiCzNnJNspGFFG3md",
  "key8": "4FJjUyA1fXhuZGhJSW46ULNqpCtGKxiKhqkuS5ZDCrZfTSf1gZBCN6xE9yN1AxMc7E39zyUrrnZKLiQ3cpJmCbDB",
  "key9": "5cqY9j3fNvqUBBRTsejSUB8mmgaJRxNyfn9T3spDuxeMAiVb3gTCQYDT8FLcjTp9ydC6FuJCYdTATCqtKrNGWm56",
  "key10": "5C8NhMXKqvNC5V6YJrevoze2uxS5rjWJd5vkZjUUBKhGbCdeMrhQ2WghJmpY2SRAxWQaztvNPN896shogbU8aAPS",
  "key11": "28QXq6mUNkRfky9sdAkGe28t2Wu1kD7ry3wnpKN8NhpJmW7KHqEKY1Kj26fNY5cA52b56GJvZzGHRhzMGX8UNGmo",
  "key12": "4LFPmB7UQsegyQ8wK8yujRh6aB316UpcgXfQDP2PuZgbEiP51LdfpvvH5SJuRg4N6SyjFZ5gYmW68QXfGuvYcvaE",
  "key13": "4jR5vMrzKtGzA8DPtkDMJ5jr6yAxAUCxbKqMAKjJfbShtJA1B5jwgZVek3CnLzAuDpvnCh9MycEq6NnHvTqVRdKF",
  "key14": "57QtUEeiWv6qbfxoxLKAFhfS9S97FoCcZyskQBWHZtRC9VqgXJvDwNnNAKqZrFqNsr6NTrRLTyMgsTk2AhBm15RD",
  "key15": "3sJA8hfP7dSzfbGMd7wwFhHfEee9tJwfnBv7FzPLoU4RuBLCkJUhfSxngSzdAguUCwfYJCFiayg5fgAi49nJJsWx",
  "key16": "5cMTyykwxuVAiYJVwtrR3k1RqZ4n4YEDbc7uHr4fWt9denmcv8gzDNGyCzT8K1zer7kKr1qrB7nCn8i5wghhUSKG",
  "key17": "33R64vUbSrbXem7x4AkEoihNCT6VZTjcR3HtuWEGbcnkPyp4Tuj8R7EU8S3db7pywbyobGRcCjUEFGKuD9mVtgbY",
  "key18": "2PAM7kSrUM1UxAqVK8FceZ7aTZLEt5gTe931JK81RR9MJ8zgZqefncn6ykEXa5kaKZkcWzfKHQ3BUNyjwU2Xhi7Q",
  "key19": "64D6bhmBnNpPCKs6AMHnGuWgAf2vF5JgczcmY1PHTfjt5QfCxEtJBFhK7VHbSbGy9tn1QiqnuKHqaWUaUE9tG1dW",
  "key20": "2jaJHSjzPJxneLkQ4wsZSUHujpwbwm3kbu4kgFbGryTmPzEqc6M1iaevKhLRUd5Ea3oM3JUstNoMUjvu29YbTrKy",
  "key21": "56mr6qcuUjVNn3jYiQg4gtDbgXafb6UEUMTu3xbXH2jgvR3G2GQ4tFzPsfuqPYgx19aBGCBXAZwGshSfbTAozw8g",
  "key22": "NLsvjjD87JNxbBrKDyMKLVZvdeoA3GVbTCpuxufJmdo1AG5U99uJsYLNukomAfDFo3J18TFmtoba57ZJ3oXbgg5",
  "key23": "33T8HunzajNo5nTh76PW6Cg8S4k8bUV8KTTVSNGNHsQxgXBx62LGzpDKk38rN4u4K2Q712LDTDfrc9HSzpYgbjR9",
  "key24": "5azuGmNPFH29xmbWrHKpmHMbePxHEXgBhTvNBYnUj6YfuP7utBCJosnGhZxH795tyPukVH3K9nn6crUUd9HTdKBS",
  "key25": "2ftkGZ2saT56HpP1nPnJ2BE6iXJzatrxEKWPoPWxKtEUXBnhi7kS5shvDhBAyqzLxXW4hV4wTMYmzQo94sD7Xgz9",
  "key26": "2frEG1uw1caj9gCe3LfKMoHHunxNTUDY9kzZcRvnEGUG6ubRLYgKE8JofWLZajnfd9KpmedLyp7XPuU1FHfcN4aF",
  "key27": "357GUqYRekqD6rDZS1KqCVeDB8pVBf74A3eLqCUU9LfhhkmegCsrEVneyzDur4Hqdg51QkGURdRDHMmKCVSFUZrE",
  "key28": "gZ25QVgBquqhoiwJKTsGwPHzY6H4QFMhz4SDrYpoTkDy4LgCFCKPh34erBBXxKa37S7H9TzrFytbAedAxCr8yeP",
  "key29": "48BWFNedSqn2FvQSmntrSGaW9B6h5h33fn2kwP8pRJLh8DgtrcpjtVj7UN7amngQr3X28nU8ZjsXtTThv8dJZemc",
  "key30": "3Zdmzyjg362Udmie4oPV25jjrQoJa2KR3yPo4UnvUmNpQTzqUoZFVMmfiRNLJ1W6GJiN1xtGpETBzqCbaA92tfTw",
  "key31": "3Jf26XbkG3E25KED7nCkDxxMGLHk3yyabHt6puRRQgfkzdmugWfcix4m8hebNGs4qd4EhgqKVfWzqBYK9oUUBKLZ",
  "key32": "3FsBBa31jgiTMi6NAZK1pKhgw4oyW6MjPYK5cWFER17HDtv5sSNyzebLi5tpVtzThwxQjzphgt2eKgHYBmtYEng7",
  "key33": "4i9CEMz9pUpjr5BXwdsZkbULhtCjpi3ABiComcfiWZXemFqL8gbmq2xUqGWnPyCE3mmXv8Q7Pa13dVvJA11Hr9PG",
  "key34": "3SJsL3VuvfpqbiH9Xhwrx6dCa1FymbctkUu7DjUprLNnhHKq2G9ri3W3YHkM5nPreU78nv7Y9gFXBzaE2LEfSWMQ"
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
