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
    "2py1hKMR7BCdh5XJeXzDe36feJXGRBXeHrx3goswHkoYHxQVmR52sEHAZo7Gjhe6fxi62vrvsDC7r3NSZwpmRP93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d9ve5L7KCRhaZiDQK9H2c2MmYVQjT11qMvmcKGiU37zRi4J1DD3ZRi1zC8tL58QHsj42NbZebTzbgDh1UDM8kut",
  "key1": "2zYeeZG3bEu4ZM6dMuMfomAFy3ksat5ci1MJiX22RLMkQnPTGkVv7YemPQkmikHzXiykRjBm7XzGYgaF9ayeXJUN",
  "key2": "51sYS8gr7fXC6nori7n746xAWpt4kj7LMx64ZJDs7QQ6Rx4yNjt1HENrdpGSyFN6rYL4etHTvV6moPbroEjY9Te4",
  "key3": "2EwnRobGzTaR7xpJ1uuCACmE5j5ghfDCEkGj7sgXhFiwpXYfCtn4oYWU94p6Hq6qmVkjfrkYiSWPSv7X3oi7MNYH",
  "key4": "4TafNPxxg9vxYB54c8dWg8gtZzLFAZemT7e145GXwJ7c78Q845fvuxnGDp9g9TMhuxsmBqNF8HxK2LkL64wCz6Fu",
  "key5": "2NURt2KoB6RrB6Noch2xWA2tBpbVChPHhKa4F9KtN334pnFi584kLDL49eZzTua1sxDFfAQKbHVLf7RHKhdfXikT",
  "key6": "2pbk9gVWpMKZxLFdH6hSBS1LA2VQgv8UHkM7FCXXg9YwiccSpRTyJ5GpvkYF11doftT5Wroi6eTmN3h2RsEdoBZT",
  "key7": "1jLJgFPMVdwTqUG21xvWLaeQazZy4LdXYccHSoNxPSZXvLWG9y8Vp1d6aWUj26TGKMsc2MF7yUEorkSWXxbHyw8",
  "key8": "bTC6zJdKaJxLffmF6JkW2JzhYpi5N2qq8g26gbBWYuz7ZDmkifAVt2fmgeGcTVrzvnwtH7QkJmytfBpxrYhPc7K",
  "key9": "x6BSbcGxJoC6UBWFBt5NsDVroL8eeVWTh16Svnc6Y7dPhvjfv6jAzqYHTBi8uXGRXJswQ4XYcLeXvHuqQgjBpoA",
  "key10": "3m7wuGMMUFyNVCGebwmW4jhgHK4ebKFFM8BZEmEVVBgGjUtrdFAbJwc1JDpLxWrokwYgwyJzWMavp943bipfaNmM",
  "key11": "TXT2MmTxCK6NmemXGUcBZW8rskak4junEPRkgriCYMQ4iSkjGEgqyZ5Bfd9aZYNRXUgKFpYU7wJ53qreTFgXoWG",
  "key12": "3mwxkySedWGSvNZJM6Z1yoiginxDmoavQ6RggzQekWtuQq4sRdbiwBuqK2uHpV7YexTepGatt4p6Uxdh2pJwnBoP",
  "key13": "2LFghyFrRAvDBvmAY6CoBc6BJ3mbXyxQ9BMnSpigQdhkXvwtpGQJpwSWJrVqowBpAQqhwQ71JTpejAVf2zENXs87",
  "key14": "32dtzfbM4VZNGeVRjrfjUu3GW9195FaEPmdHqQdZzxXKw9wzFxgENahYu1E2RJEXTeXZNVXiabKXpnn7fqtnzeH6",
  "key15": "3kfenR56pgQMVmeSJNqBNR4wi9HaEnKydYLdbjNzt22mzuvrxNpSLVyWhNK5itBgCPXUJm2V5gtf3iK5vrMyU5mS",
  "key16": "5pHAmX1iTUxHjGc9pGKwdas3fLmjXKiHHD6rjddqzULZQcKpjeSfjXK3BbBqcEMz3hLa177YirYGyoHTKr84J7P4",
  "key17": "2JsPphCfCSxteJtLoaW5efTbhs1qzX67ZS4njrEag3fW2TBp3633eHmQ7GZr5GpU5WudiBMCuw3sDffqe9Ms9DQV",
  "key18": "5xpSMbpfcPymsHWAFVU35mrsuKaNwFii8V2LGHsaGTCsWsocQjsmnAAgwkEZrpZ5Z8629rzQZ9JBCpeRBa3muYkL",
  "key19": "3UAw7QQ8tZvzgY7d33royQFuu2cF22ksJCSN17hLpJDggdrxN1yd2C5tKk3PWQjhq1sHeteW4cfSHZuJMHjFNE8B",
  "key20": "3LD9meLbvbLPrcKM99L6kQFNTaTW9apqCkeLywicYntNqztgeELW8nNEvyMVGx3F81ScbJLQpJEG97tGp3BSz3Pc",
  "key21": "PzsDpvjMuhLbfrotA2CThEcxYA2H9mhAMn1JNjGmAJWaf5vhWCuwvnLzmYVk5eyeAsJXGMS8QJZ814ry8SGUhx4",
  "key22": "2RxEAJ5kG9K16sxgkG2ncR32PVKdkcrxZX6nsf9UX4szBrzJJzqQjgY63VREhQpaWWvhSUzENhGGZ9Y5r7dKvzes",
  "key23": "SKrW9PqSPckgEmog6arb5QVcomfoZTiNJLddULqpnMgHUzDZtedM8XNvMn5fkp62SYQ6viQyS2GArHTi19EYBEd",
  "key24": "5CGdYeVW1kmQXnCqpMrKFnDH3pns3nVrsBu2rgAzqwVbaxVpXhMXwAJRTPTNzvTFtGAD2Wrs34SkV9tBn76wEtZS",
  "key25": "Gpv31uMat1SrMi25uQzWxzpx7vzW41oSvj8MhJJtuabbGT35Nj2k7SPb6Wv2h5DXXgCNcWev93NQkqMAcnTZh6W",
  "key26": "3ZFaqpHbYsNkBeYQeuvuqcRCsxJ3qM646RVYtVNoBuLmuyU7cs4V7FsWDNCEhnBdvppL4DokkELhp1WyiBPM9RVS",
  "key27": "2HNGYDtz7wPLu9t4Q2tW8jDZooXNLkxX91MxznBnRuRJ9ivcm73uhH9KHzSiNLESdaDS2GGp13DWNBc42q2SSv48",
  "key28": "4KHnVk8ovU1PARYdP8v1R6M8aYeDRq79LrzuPeixv7KJJ8PUm9aY92FV85KfNq9wZ7MCK6kwKzSjWJUG5RHK7Ftb",
  "key29": "3AwDyvLob9GWBxvytSxg2AindENR4vHJSh455PCjXyfEp5bkypKanhnk97gfx1XpWBTuPrCLLQ1szv6CrXKhJcmr",
  "key30": "5fc1vGiVDrzs9m9R5yGqQZ4JCpYHZTyLPfWVcvXejsSnNgBLADYS4yNZoy4HfNnEzYadztQtPaok4BqRg97s3Y4R",
  "key31": "UrmNcZB85Scxvv5sNzcFnP4XiTAVbbenNWq5S6pgS1wST2pCZXivhK8AGzJWhbU7rZuKh87YsrmrXxFaaEnXHmB",
  "key32": "2xqecj6LteGpWUFXKggREtKvNVAaaAoCHDCccb1vup3hVCnkKvJxvxvMKKce3jY3v2mACLSfonUPvusrgBtf62JX",
  "key33": "5GsMoHng5HLzJQTpQGjabJk8eqm9qA9DnLZ4PsTQquvFT1uRxBkRqU9ykdefi17iL7EAHokadFjBJf3297yNT7ED",
  "key34": "vQscM1ABpk11K5ZJfhaYGk7eGwtatvtMKc4dDnfHiUPeJG4gtGwL8R74utManytV6qYHGKrdD8Kef1R5zZcLqJD",
  "key35": "SY1qnR5eWofjEnPNpAzXkyn3EyVuVufAAazcHNqTV9vLqtczSKSSSo9eUvz2T6Mh4fMq2DJWErKvgWwGXgnncGq",
  "key36": "tRyP8eXPwwNaeAPhdEFUPVjp3fa8fM15aHxwWThiBp5aEehwfDFKrTcBbD4NS1YfoSe1CPaF9WBuidQnuAScUt1",
  "key37": "UH4jaCXmMneB7f9GdrgcQ8yJokVhmGryfZirvLhhLuEr6HwWeg8WbCUJoKVM5nuCVM6x2HDa8RZXxFYMZTxG28C",
  "key38": "tBYLivRrQ4TBva7UB6zp9JrJpgJS8Myj6rawv3QkAymwWMzGBHjKszHqZXWntTH6NYo5B9oYJTfjjmwMWGx9HGt",
  "key39": "4hC6xVnyA1oZgAJKhkEkdmzFP7pEQ8RpaPcKkYkc7xLq6DSCUT3ZAxanoUVncDAzPLMttqcKrZYWBx9qN5ANB324",
  "key40": "4xQzaHuww8BpW3FPWcjeLyyvW7PUVXffevyKHSPLGuT21bdCY3z4syuoHsbnfjCMHQejsfZojUf7iDvBhnoYrZkc",
  "key41": "648cvzyqGfwV36mmfjHEoaB9YBUYowzZFr3Wyzdt3s83QMC4t3FQcoVxLvbV36LYtUUpSz99okiRUSu3xdAm87Qu",
  "key42": "5uX5ATo5wDSpstRh3mt8BgZrRDNk526q72vgQbutRkhPvrDwY33AR9efmsg1t4K4TQGJWog3JibUFvyGyxcSXA8D",
  "key43": "5h66vyXB5EodF3xnWqubFaRzfztbQXYFMzs2YhogpU48jh4Hymf8sefaqAhbxRdgnPu1q7gRqebQcjdotKNsCF8"
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
