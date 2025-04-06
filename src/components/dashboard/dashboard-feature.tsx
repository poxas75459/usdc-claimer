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
    "4LNXvf3wtdCh1Q51nr8fYzCQkcsaRPcU7phiYY5L6FG7CncwpLkJmYwo4Fqi4u9wStCqEviHQHCgQ8b3DwH2LyeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUkB4Uf8xwF9jnEW7kKrhKPQrVtThwgWyD3FuD6pH8yH8SZ5J2JjyXRTdL5kq1kJisSgPNHyNnxPUs2RqrvCzM7",
  "key1": "47tHqgB8qKH7YbAGDxQaBr9jhJ4hHcLowxCswgUAKnyyr7T3T5GcTD2d4QtbtoY2HvgS6VJtMCVs95PWqUPM7TCX",
  "key2": "3549deR1iZq3bnsRDqCDaAkF5jRTep5wi8EsAckWoxJe9GbYRGg1xVgHJZwLE9sqo1iuP9RBAvqVSydCwH6Hc6tb",
  "key3": "9q1DBxrt7XQoHgKT5tH6b8n6ScBcP1ookHxHkaq4vqGzFcJXWEUm1FuWKTtA43jZBrS1dMER6V7GN7rDAX2uuNG",
  "key4": "3Cr4zasvP7o4aWELoEFqpw3eeHNjm6W92EUkFJfii2vg5wUz1t7FaRARuaVn3f1uLV4DHbf8bFUfkSRGD4fEA4vm",
  "key5": "fQ2nTN9dSjFYcWRD43YgPb6UJVb4VTP4D8Gps9DoLceqyP35FQghQA1dMYyHLY5RcgnuCJboif1Y8NZfGLjJb8P",
  "key6": "hTb65oFYF8y2PiGP637mpSkxUPstSEYCBf4JrLEFz8Vbt5FybSQZCNJUsZfoZ5Pi6789YPwJaJ2FQevLiDaGZ6r",
  "key7": "ZJHEeDpYc7zbUWyQmVY8sbd2mGG4VEuXMztmG8KfoYfeWymYZoy3pfrZr9Q9pnygowg2F6wqguYRr551y8VwczR",
  "key8": "5v3xqgQK3o5YBgT4vk5WUrCXpBHeQTCxLgfWWuRadJEe3N4DndcDE8uUozsGe6ftdf1EQ8nq8DZr2C3JEcnULYF7",
  "key9": "2Xuha7iy8Xt3QpQNzE3oxbmrNH1jsU7s3NPwpcTkzag9pTgbB9Hxbwtd2fMBgqZE9Aq3gwLeA45cUqD2ekvQyFZe",
  "key10": "3KerisqVddC5kZEn9Ex42nbutsAdgexghyvYUgPHZHUcV1MfpEengNw1BAKkrznFKQoS9DVu7svVSsaCyQFzCLnt",
  "key11": "5sWRg2mqqQ4PoqWjDw5GBrwXwR4PZvXuYx6H1jmzvBsQyVCfBaA5xHzUAxRUQZTe3gj1wGhEtw3i3HBDKyJ5LpBy",
  "key12": "3Dzgmqrb5sHzNEmBeQvNG7qaDu2pjQjPLGra4mjtk6LNRfmjfS4m17YZkss9ZHsDNX8vb7fakYondmzahrNwQfER",
  "key13": "2TVNCKUrq5at2SkjVZkA1eWK6Uxtc177vSFJGNd8R7csDwHWmZb5Sv5De4gTk69jxrfvMu6vByhFNobUf4SBJ56Q",
  "key14": "4HPtaE3TsVegh65CnKnf3atzf2EV1qAKgT7vJfayK7AGMMiSpMiEdzVZPMMFDfFqhdMnq6Bir59wxoJvdewTYtju",
  "key15": "5WVwM9ExQesj4uAqTXxU2Rc6f8DdP1ojjHUYpRgWEa7ASmRZpSR8h8jaEy9Kd4dkAxkCK92YEB8LQJK5BBJBzddY",
  "key16": "3jr5qePc3dP3FiH4gGvHsqyLfEACqUNu5k3K9aKTHf2tXocs4oF2FFRSWTg4XDHqXjT8nmMhv54c8GJE14Fsrps",
  "key17": "DgQnRNL6etuT5uBk8rT8B7W9CEajMNqY1BikSHhzCwbZ8ZKBJ5M1axrp9TWBZZh9dfTkAo1BSbken2vDdgTxdhj",
  "key18": "5jZymdiePRxQmd1HxsV8cgTCBEbQoAR4gFQHdAMH5HFQtLxquVJRZH1s3iyX7u9qT7gFhB6fHkGtxrbjwiMwGT3r",
  "key19": "5YdZsseLGJDLERysuSWuwKfa9GRGt5saZ5qHH4zdZFAVSnWz53Bru6kdUXHFs9VZZJpJpyZbT8ysM9dxnDM7KPhe",
  "key20": "ktgv8KVCep9d3h9QQYMKGSsXYMmYfob3T74ka3SZKYhTHTM8vAUsuHPUkE8LUX61GzTqasTansVj1sFazWgZRFn",
  "key21": "2YuMxZKjPyLZXsjjBJzpZFvsLL8BBDnAsex3NUVimTAC3Yq36NgSDKGH8gkuK2zmyr6SSbRwMHQrk9eeyCe8eAPG",
  "key22": "2Bvx2NfGfZDqx7HbB8ZWWPLHKXLRN7btFzEiTyZyZcZhhFimfHHXd4vC33H3qjgzqmhZEuaVXHhJQBeF4ZW8wCeL",
  "key23": "4BoEHhGNEDkVHRJ8gsryujfXQVF4WhQuDvDdPVrMQKG5AicVkfGngJFsaxaHVwFxzpeJUDiFwhwcK6q3R6XPKeYm",
  "key24": "278SbN4EQsf23xsYHcnn2kpK3dTJ5iJzpwRqYmKZ3FStoujUnnquS8tdRDUXyMTrtzmqMFv4xh288toLNhtUfy7u",
  "key25": "pEbpXfjYmP5ti46KHrrUPjqYQT1Cd962fRhdSoTxsskRncw26Wuk6TU41JZEd2xoM6sxE1kxN93Gm7cdoa9yrhZ",
  "key26": "369RWXZG7La2RR9gYnaKWxFdVrTAxtHGUtCgmL7jCdw3mB9oSYnzQ2rsG31pdjuyABXb1BU8N6ebXZSaSAvm7Fi8",
  "key27": "2kutYGQ81whPtxfZNGzj4qVUBq8TJi54uVfX4jcJdYU8m1YfMYSedKQ2X2Z4WXZx9dAvxSBKLeWDW3m9bz5qTmta",
  "key28": "3PsYm4CFUauAhNy2ABb75sRSgLMRWKDnPp6AYxiba1XXVmGAHxDv3SUMencr8gw3wEKAQLB7btWBkLAJkQB8HjAb",
  "key29": "3RLxfaSwWbidqa28zBjShBhZ5B1Bst2HZuLZbGs9M39xeTb3WdWhoFYij7DCXxTt9dmQsrf8Ht8iXPUFcr8y42pr",
  "key30": "2Aq3vpqfWSMFyJ2hAkcHKsozQ7iw495uikLJQShQNBn29mUr1zbVx65c4vN1CmdUgPC1b31TewpnU4LNWPgVEoyc",
  "key31": "21GaVWMc3VQbnENhm2tBzihrMTK7FtUgjBGpYNCSzyS2A57QMPmu1HiM4J5jcpmtfvVyn83zrLQAqeE4sQFZJBmY",
  "key32": "SYhY5fos72iie6HpdDm7mHRY71j9F9sDmDa8xyi3jjwtqCzzzmGmPyvA1tYaXMz8j81TT9v1kUTQiyJtAjaZqzh",
  "key33": "2McCFYJFpmMZAdeBAsCyFBj2HnzuutGS3pUVfvHCXKLWrrcXAUfKCsNrp8oBzUyxcTKpHyRTmKfnDRP5ajL4xsVA",
  "key34": "3GfsAUoTsPizSdNCnNkzwBipfxMut1sXnmWeXt2N4juKK34dyRdmJqne6N7B9giZq7NbhYVBS6ocuFz9AE91NEPT",
  "key35": "bsyt49hGT6qyBThK7gvN8T3RVQ5yqoqMh8YE25CLkDtRatnmLPPSTcJXiz8CydExAKFE9fsphmj9wDkqN144g1W",
  "key36": "3aoRefGTvEMa37NpkKftSNa3KyE1DDKSSPAxobFVPTyzmhxAGxCnUtcxuhX6Jp1W44ChjamZvXXgLDKNdZ4J2boq",
  "key37": "SyfyuPpzdtiAtKnJKkQySefSqvTnwRizVUpgegcJmBCcFCseSidbPsYb8kRAYorR1FZqNzP2FZV66DNzeUfrm3S",
  "key38": "5bbn8iS54b1jJnbeV4bgydugmpgdj4q8ZY12s6o3xqhj62eehaiu7gm5wDiu5GXa89WpZQPLMFwt18PQEoTzYNHc",
  "key39": "2o9PnWm1fWEnx7rWSxpnQbyFqRcm29qmJS1XeQG3KLJhA6tVUCA4559kj3h63adHMJEEoC3hC7WDUPJpX8P4zte4",
  "key40": "5MTpCFzV3XrjwmjmpJyG8f9w7rrYAAxDsu2DZE1ou8HFjMua5JLLoYfekNXn98MuZQ7id4jxwR4cBAx9X6fHjyfX",
  "key41": "4A6RGkSuwpEEVJZaq9nxdLiYbVcEtn7bY3YYNJUnFJPQgCv2J6R9Mtq1nuFaxBMfVgXUYLd1U495ekssueBZfd1m",
  "key42": "5pMkxE7AW1sRHreUrqoWeyqrwUvKUnyNC3sWDfqPDxrupyMpwrofep9oZarvHgUKQec7E7Ljad9oLpwPLLDkMkdc",
  "key43": "3kViXfFrgSNiMYQN4mw8bjv4PVv4Lz6fVedyehtRNbVagg1RtpJyDw9ZoEMuGndShaKyME7WFhes8TNVtfGh1MnY",
  "key44": "5xN85BJ9hpqkZ6VZbRLHZTNYy8kNMqw4XEeBuP82rA9sxm6k3P5oDBaVgJQ4kiJzuPS1Pwajvs6dMTqThjsQQsac"
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
