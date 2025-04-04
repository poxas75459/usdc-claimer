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
    "3MkWEdf3k3wVjPW4udXn7KhSQG1Eu9LgN4V5JeaySVmyLg1Z5ZuGuf6gRB3UspAgpwQFiS4CPDtzSoxNbZEG1JN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UWxj1zRFCRAGdRDnM95V9Gd8v5n9oypzfFJYSnfw8qYmCHFUE1Qsuma5XF5d13Y7uYGGTE6QYjCdQFxsduupVjw",
  "key1": "4mGwCbk6vDemmeYZftN6241wNvGRzUDQPTQemG8R7QyNSbgYcdSaEKoJqkUru35Q2svEyzgSm7KhqUMBw6EiBz6z",
  "key2": "3Wm3hniVzFjatyj8G3JC2598A2C1BNYuqcfNbf3sHkzAzeEW96551GwmyxaBt3gs2yxjkB7VYivz86YNZ2EYPBYd",
  "key3": "4BpYKeNmo4jiN8zWuZD5vAkzjMQ8RwbhNe45QZWf3rZLbZ7ZXTJti4Buj2tiZqgM7qdEx472NJwb4XDy47DccKWa",
  "key4": "2wXDYZngibqG7GwCjNds4zD7AkEbtqhF4kJrayUQm2KpYsmJzT6oiEebFSchkZiC8vbpXfkyveQWnL5ssN8oJNoo",
  "key5": "2HkHdj9TCPCirUXX32mZCoXNNAtA5H1oD6YigM1YvN86h2iTiDQ3wtHACcSGA8QcaAAma8nMZmtUvbBHnmdzRBkU",
  "key6": "vFd447M856uhHxNzA8HcnnZ7K8cGuWK5mnuvcW9LjUgK796pgS7vYaGXG5cYaTSMzub7EUchXvAcAqPa5ZuD1XD",
  "key7": "2WZ9hXmbKRLifnSK8oqAZ4juZ1tT6ENVbnSrd6SZb5SKBQGbWwhSX9pEpvXBYAQi5cdF6S4SP5ku6qJpFRkdh4cz",
  "key8": "3MQCsVRe11bnjTiscbwY5s1s6BjH2zM4hBx3QkVNtzqK4Mob7CDiW74JKnSVUpUM6MFZtztY9BKNseYUApgTXhcF",
  "key9": "3aA9oQjnXuUZgesM9QgaBY5irP7ResoMc86D57DCBVgpknUcSWh8uK7EXHt2Rf3qynUJewiqk5uFVvdQ4hS73Kg5",
  "key10": "E1XBCgc3u6bwURszMHaj4LgpbqfnsHu98H6xubLWqRejXyu2xik4e8nwNFP9uzUhNzSuiWynfdxUh5sNrSCwmEH",
  "key11": "44Dv6CLTf2yJAuACC6RKHFCFNF69tGACNfS4UqEMMKqt1cvQuuiRweziwH73E1fsHqN14h3G6hWnnx6FtLydX8k1",
  "key12": "297FZrEm2ynRThgtztWLhitio5kQBZHvtVFLVm9dfm4U22AVNoziStWjDDdUFixmN1SVVhxmuFaBoZ7jtLHtyPwg",
  "key13": "3FV5mNhJUkXLS7395NZ5xyjgMreNNuPqtBiFRQZMdybLftx7DF53VDV8XWtUEnsWmDHYDN1dypJGiATxAvyqxm9Y",
  "key14": "2f5gedvsu3iEdH15L1ZJexV7UHcVgxYgwDdC1aNWYFbxLTeu6t2bFr8fxown34Xg9A6ZdyKBn5UzizCBgCCM3UQJ",
  "key15": "2gXU8A4HaDDDdf59ddbk8DQRR1MYnZCjRXNthvUAZ5bKUXPu6b9fycr4e53JAQgM6JkFHarBQFYRmnN7BSXN9L7Y",
  "key16": "33p24ZBkgc6is1uosDnyusejnnLxkAEPtVeiRgocUZV9jJmbgFAzBVFvoquYNGqPjNNSrDQStP5K2Y3sEHGLCsj7",
  "key17": "5NvcsWHFvBgej6uhPhxeJuvubBEVzteS29UCP3scJeysjvj44PYFnuTQw7TJpd23YhBehM3GNvyM6gyV3FkX4CbT",
  "key18": "Ukb2iE1ut9Tw54DiGZQ8q7F3VvagXhaZAeZxN77e3xnGK9FG8pATUQxKRWqVVQyuuDL1ksydKQqRWDTGF3EW3q5",
  "key19": "2s57kJgF5k3Lb1GdhxuAdJNpS6wcDp4eTqox1wvdoqu9ym2yGHp9Fj5CNwigzjL1wW2o9ycQ2W6nNGP8r7cV5WTK",
  "key20": "3aLq2RfGZLrXEbsyf8EhfCYzkspKTKoxUJCXvkpWp44YDMDSZsSgt3BuL1B3eNqNqSv3QqcLxRgp9zKPq7EuVEUC",
  "key21": "2HSw7iJSRhFz95nHzYV7g1Kbz8mp1kvK5PnUDDwmx5Vnuo3jwKvQP8rGEdxr2uYJ1gBk97kbaMFAXBmeP7C7VT6y",
  "key22": "2QdRood9Zk2R7tPvC4EFuWHh2gKUogLaTLnm71G2N2AY7j8nujfn2byGsBBNPDM4X3rcBp448RNtQLX7VzpfobpY",
  "key23": "2gzPW6dpE7MhG9E6Zyxnsw2WjyEYwMnkH9uTZJkFmCpjPpkgnTXAk2P4AvYSY8qF1DFCiSNbFBqWx2XpaAZc5ei",
  "key24": "3Fx2B1iyCwaddv15R85f1oA124JF54Uf6Hf5eHNphVJJRXi1rySZrrY2sHgt2atMA6Dp7JCv8BuGeX2i62XPcpgb",
  "key25": "2LJ7q9nWpxM1Bzuvo5gMoNMwhP5BmBuswE36aUG77qTegi8XLUz35dHk8FkSqrU9Y5EGAe7Gu6FDxxYzrcKYH5tw",
  "key26": "4Ap8nbdmpZnvWhZCkzewLdX4Vc3y7EL73JHxBZ1FDC1uqhXkitViCnKoeTB6FR32fVazZXyVmpEyqovewVjmVRH",
  "key27": "2Mp98ndZkocsLojxcXppgxtxfkhNeex1QqWPPU9E6CJ7Qq1u2q9hXPAwjspfDQHxDuaWVpw6ku8FAtzbXA7RMP9z",
  "key28": "52nPxFiQHr6QSKappuhKDKXEqHHkczVEyABhVfx8tW5qWyk6d6TVkoSpNdpTqxQYCeH5KLqXBbpeowFf23AjWmkq",
  "key29": "4LdiD9Vu9xQ1ymoDxyUnCSU4P6Ge2YMFhtBEPdQWLMSr9Mj3Ca2e8PXDoeDJwsaGmmzTnRp3U9gASF7KrwXhJH8x",
  "key30": "56Gk9rF55RPZgPLwncv4mih725fcV4qWRHVvMUsxunAfGQ3KTtnaHsMLAsBmfipn4DoJbsWD4whEpAFFvg8qFzDM",
  "key31": "3axQRoQVJFyPf5rwaMvRPMQGQyYsNV45yH2kGP4bhXBL3652CGtCzUpUwiPjkCy2AjKjTH3WmmmWMdGN9AYijfoZ",
  "key32": "4T4kHN6URncTdCebDqoeiX71NAFFwCeg8apHxREAYkneRNdRALSCa3gzbuPPS9GJeQQaRcTfUbA9iBbum1JLq39C",
  "key33": "3GJymSkPEiiSwiMSfwmXfYJMYMhrJUZqEuZTLNGygSgrnb9RfFWLhtktjqejy9Xqu94GaatL9LCMJ1XEatzp8YUz",
  "key34": "2ck9o42LSQonDjYVuzCAMdPa9fr3Jy9mpv24j4euqdTfVVKaUPBLqWt9yCvkiLktUxrFsKTQ4cUAZkh5DyR7wVXg",
  "key35": "4sBdGo9LvZeFHg369ANbC62MjkYi7BDJCYL7s7fqKkxnKrhEtfiqMSKPDwgdeDGLTeHdSQN4uQP99iTtLJ23sRj1",
  "key36": "5RsMro5xcqfhkx7dBqoKpnbcsgmXkV4o5gE3wVgQ9YWtL3ehbaypmt33hJFB8hXqFMbjR3tnpKxyV4cpkxKUEZRV",
  "key37": "4FxaG9yFqP8MCCGk4fqADpoVHyxdqmTSF8Nx496D3MQXdwFkoaL6PP35G9fqY5pxFCNwXveJgZcykmmAsDSPfeft",
  "key38": "3Q5RjSZFL8tLQFsTFJkcpiX7jQ4yPrutxj48HCA8NCBdPoQqeX8EY4PaeMZo2KWqEQ1gwkQkRTF2sm5zMNHUxcnh",
  "key39": "4XpRBPFHmHbZ6yLd2U8rPr1jgJeTuEbKwPHxKEYCoBiChQVmvU4YdErbb2GL8ZRv1Yzj1ShCRgEDYGCsshH1ndK3",
  "key40": "9zV7HCEVFDzMWpRGTKcwwDye1dmgRE1kPcZxt9dK5RecqLd4T8ASEMjVwdfTB8xbw8FacFebKFotz92wYD6Ta98",
  "key41": "3LJ5P3C1QdDLHdnq7vAEzSVqtxf9a9HWrd1R7kiWvK9b2DkahRVPjyAgqc2vuTGCpAtzKh8gqqyca3cFExaA6Yrp",
  "key42": "j7rfAWLnJdiUuJXRtsc6LyccYhroqrANhwf3hXMn4CpdbpdTqKmLzsq6vdT6VAGGhYbmopZV4xRiVijXC8vT3qT",
  "key43": "4yXWsRAyfz8KmoxjhDBP4Z9GA6vkhhxG9dKFow2ZFm7pXniiw3v3rw4YWu6TUkXCNbGh6k1FmituTUTVS8gm3kL3",
  "key44": "4o7176Hn9p8zJbAWvaqUmND6993BC7kwuTE2XeQsRKLNqaHpwyyA1TL6PV8NhkE9oZ96rSgJdrrpD9Gg6phziaPx",
  "key45": "2vQDWtJHQdwje97NH5EouWsREC3TVq24yJaG3wftGWL3cEfjhDZmaCkNwdwFEjv3Tjw4tV513zHa5Q7WbyWb11Wh",
  "key46": "2Jq6WPK4qQU5Rvx7ZYxpZRVE2K5177VNPp2BuMscFtCcRAu4aBVQpzw7g95AfWq9RHT8jeH87AHwF7HemwnRYiZC",
  "key47": "3AZpGh9rH1WX66MkkeBw8wc4DdYvRgnbsPT68KbL3R87hQnq64oSd7fKimMdt7VeDdEvwz6tsYghyzMdhdEmHUii"
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
