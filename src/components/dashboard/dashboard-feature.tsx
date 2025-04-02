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
    "3JN8gX5PBBDYEb2md94FiUJ1PsDgoPDDbn2vVdrj7ogzCYGwgaDkGz8HGS4E5NxTiTb7Vf7SMpMcZKh8ezosMiMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyMaQWNa99tJgGKnQyKRyYPqTqFDEBoQWtnzbC2oh3GV48tGrKoPBzkAUBfgmx3EmgA6xtE5YUb5jbUFXivnXxz",
  "key1": "4VbHKcdNp2LUFsj42DcQ1yrgcKQNdzDuD8sruwThFXa3LVPaBheWvjVMLFfoFajQxn1u9AQcQF7XQpV93LzhPbFB",
  "key2": "2vMeEHgfckSQ49F91pcEc8aY39hvdz4DajjyeDQZNieuq1Lb8w7rrz652LZGeUW7y9mRN34H9h5hkyy4oCD3XRcM",
  "key3": "47UMa6t85QNR8Mu1aWzQB35w9jJdXhD8mKTFLfmrCyNUvyEYbdRsRZimDTbKgtrSgYQKLMkMXtqgGnuryqAxp5RA",
  "key4": "3n9hnJxDxa7XC7tCjcnjq4v1STUAFNk2G9RzHqhBmNDwjRpdwSYCHFBQEMfEnfjBqzuSp1enCgD7wXZQWvtUjxZD",
  "key5": "4pwcUgFjL46MQd8DDghxQnYtYRLqVtn8kXLu7w7mdqSy8z3cPCHeBn9rUucdNtg53k4GjNnHDT87UwaMM1biMSt5",
  "key6": "3fYRqbQefng6Y4MtHhzMc3UGJ6b8DLwFAHCVTdojsGnBN5rZkdhxQ35AwLsWUVU9uYcLu7WXWLhaFVBzSqhaTar",
  "key7": "CPUiLyKVngb5vEEnCPWXz7HeeRW8eXcttgfHp2PW1hP1cGhN9agqu7qkSosoKeD1eWe8ctkC5qLNGh7t53AdJLz",
  "key8": "3kPbZ2dPEM7BVZ7hFXqPZzWPx4CHa7fvVMuEeHpTis42gn6PDcf5MqQ3xeZy6TcKbXcfFwiYERNUf2YQ4wxLsecb",
  "key9": "61G8YgbpTyFbe1JzaMu6rtpQcudep28EKDwTQe8UGXVxCkYKCkAed6UxFSEoRYCmHV64coaRW2gCsFWx2MLHZv6e",
  "key10": "5bg6wydU8tGgnzYWSk68NiLrgbNcwB29GNX57YTN1eugq8RxBzNEog4953zSGQYMwykYfsykURL5A7hwqBtdKh3i",
  "key11": "5g1jcdaNv3ciTDE72gYTsjJAJrAsQmzdS4hLKnJZJKJtfQWdgznqG7ZdM92gXr1fEGScpA84Vatgoav6rPYCKnDo",
  "key12": "5S9uifRWouUJGsnEkF1Tj1TNJQ8M45oh8nYjadRqjwndbohky7Ftwmnyw7DRhY4Zgydamjo6et9gbBPpEEn4V3gu",
  "key13": "5fejwZsPdiwWERUEjVjsozhygZztYGhM7qL3W9gCZnQsfmn81vk8PmEwbhgf8L66DqWcq2aRYxquwMWgv5Nr9ctP",
  "key14": "4Z4fS3wr4sG2KFhFkmVD9EeJ8USJ1qrdqKd9HCuFPDRo3CpbPe6YjeuLDC7x6EvMa2D5v36o6byExQ1vd8prGahN",
  "key15": "3qqqPHTK7bRNRQ3RVNqmhfwNmQd9CGEC6ArhT9qypt7ariGofEph1DvEUHV2Z3Qv1j8CjRUXuVnvo5FU7Syh5TAq",
  "key16": "2STyWgkfVFyw9RKEyGuikNMXA9zf8HzAU4NacJi6whisdzoYRiTwbKfBJJCYJDUqKtgwSHSWdmxpvbA2vqgnv1He",
  "key17": "2tSUFsdYkMCCKA23KftCt1rn7hkFr6wT8cpnCD6MZdCe937TkmQMiKFJhi78qizDNKSHxoCjvbiqxaKY1Paz2ZUe",
  "key18": "4e8bd7CiTxq3jystfdKPceDUK3d7zyayoQfUJQEAr5JCk3xUv8j19kok9K1oQ6pPnFzDL7qn4RTNxbGLUr4fcdyZ",
  "key19": "EqaaJftP9H7HEoowB61Tsq8qPuYYAZmL4eRrAfPDAhwMx4CTcSmXDMhnMqa2AfwqsPEpBdqmXX8nDa3WcjEJj7m",
  "key20": "2Y7ui3dQtaXLkABqu1EUEBEQp2LmqimP6PuyNAZiuZ1pM5rWRqNi64jTCvHoZUrbYgK2E7BbBmYpBMu8n6DS33kZ",
  "key21": "5f4D9HD1zw5MkGGocUaQFHQvYLYCeAihbFJafVxkJBa4ZKzX3YXaWANjKfhJWVgHKKWMPsMkKfLh9ErvfdxH4Cja",
  "key22": "2SY8pXheFuzAiF33FUmTwYEappLXFcrjAWsoqD2KaW2CR545bEzRrF4gmw4heRWCUEcdqjVoSSeqNXWCB1SVWxqY",
  "key23": "i8b81NGfQYuCaksqQdowdC9teoCvz3Yx9A3EUQScAWLAR17TDEwccYRnEKYcvaCguw5zDnfFdvXrYuZEjsDxXMw",
  "key24": "24yo1T5Q6pSmADYWg7pAozLP8zGLX8QzXJVrvZhW3HLdVojcVqhCqFa7XqKX9xCU3P6ucHbq2tvLuve6qLu7148G",
  "key25": "4XzJYYCdPJheaSXyAC4WQyr8JN3vNWCUMqysYo4coD7DMUFWUJXFcJfn7WmN9UiGTBgLCJ9ZYRHTT5BKeh7zuEgo",
  "key26": "4DBHUy9YzbmJBV6H4VAykwUqdF2euwSJ8U79gFUGMVXdacTbVy8nAiiaAWKCKtMziHdEpJtN5UrEAo5LeigFWiDV",
  "key27": "D5oYhSwWvQ1Sw5t3WV9PL76CAXbdvDvgf89eE54cadD3SNx3gpNZSsX4GZLpYdSHJdc7zbuzF8gcwz4B85y9j6w",
  "key28": "4Tjyvbo7CwGurr2zi1wUUKrLkW6sRznwWon6p7JPY5zXt7LJGESgD7yLHbeH3gHqrpJmsuEDW9hx5ykrvsDpQrEC",
  "key29": "cbaVnpQmQjHAnegftckxSnVe7fqqYRZWoDo3ZU5KGRne96yeJmWoGEMSp1q768DsquE2SUgAjpkg74qe9EpSx4S",
  "key30": "2TwxDGkaNnJbQw36aKkYFBu364gVVRzMrHoPXcHVj2zBJ5kC9coh4RSZ98cA3awTBb7MaWikEQfWLwMqBNZw3A4A",
  "key31": "5hgs6E2C5r9HMXtQAZF71oDGCheHTN25tQyP9XAmf3dHJHmByUGPWukMiuW4J7k3AvPRBPJ2TbsBh3dqKxGY9fGh",
  "key32": "54rK4rLcDmXa9QJcMd1ca87jLmZjsndGfJh8GPGo28ycjXdSf4yfkKjLrCgfT5z9JU1Typ7X2ViUinQ56tfUqQuj",
  "key33": "2TKTEKhnvjYhfQGiAMqXJBHu7f3MsvZAcmNqXNZCwV4bQHbHJbMP9dTYA112bm6oCitXzsrUsfoX5z28w6GPZUKH",
  "key34": "UByaQvNj37t4m2fPKtrQ47inG1pe3uNGt3QRsMG3DTTqSDQy3qSq3ZnSUH3CvCCwnmRshM3xgBb3sinEQAuAEru",
  "key35": "NL51hpDgGs6PTubrfk3Qdm32Srz4Fo4e21eEYbhLpfB5EzpqRgfbzvws7TU8qAHxTbVww5SGHB8FbtAtEMacxQz",
  "key36": "3TL6uD1VB8y9VCZy38EAQiYYb93fP2VQFP9AW8SbLdhzX94CJP1kNL1sebqi5Soq2oK2oooNbQgcmc24VNoGyeoH",
  "key37": "3VvWEUXk3MjSYvbLc8wPTbtVbssFFwfYjbLKe1fM9K1xzWty1nLYLGuKPoZnKhbYyUot4i5XiLey8pV9voDTavxp",
  "key38": "nYPN5xnP6KqfvRqpzjKrSyjxkppJJZV5rwE5Vo8pnnBXQAX6rkY3J54HPAbBaBCacbF2wy93JzeU9pW4L9PcMNU",
  "key39": "4TPurRWiLF1bXxDn5uULzAdKbnmSfQH9pZ4ukAveADoZmwi5o7inxnRaHau11afFqiHcXCDqoQCMPXfodN7oNS2u",
  "key40": "2gXU8T9rhMWWopoDAryr5og8zQ9KngdrkpgL96exq4BJMkkgQdWvdRWAecDjFeyXrKJo9GMSAudeLmQATNpcgkKh",
  "key41": "3HDr5mvbq3vnUvqkJyrYfkkjgS5QT5k1EcdrBobarruayJLcJxWAVT9t5eWLPAgWGqypKK3iGBhkuTTCT7mh4XgX"
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
