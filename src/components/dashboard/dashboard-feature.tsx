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
    "5ZGEARkQo5H1YAkKRMc6Jne6zpKBjoN4tgcYDotvQNHXy5TNSjdbEkUJGf47RnRmaHDYy8ebgFmm4RVicj8AYFbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZaiEMdZ1drRE2jVtfu5yRemWdu2ZQEvvXhD9xpfG8ax61wGm9wHaEttHGNt5YbFVnQ1efbDxEfFgn5YmzBnkjWn",
  "key1": "4Doq3QUErTDxfJJARvGHw8hJ9vDBLttQKiRLfkeXf3Pj7Lcm3rH68uo7sF3mD5HM7ZdQctvme8ZWftVBnTCHCcdC",
  "key2": "dVSBBWLd8ehe1brMhnwhJkwm4L2tuXubvpSzA5RreQRwcaMgoS6VS3RBbpxWZns98hGxPjhMseWkcYPHSAsg4Pr",
  "key3": "3NNBCC2zZe2kFYikk9CkGSNDEUQDjVPL2skt6JhJLSkWTPZyhXK8CNynNrN7P8fW92Zed7W1qe3H39Bjn4wBBpa8",
  "key4": "5NL3wheyUW74VzaWwYDpUv4yLbmmanQ8LGDCrHBtxmMdZw4GGJRoesr9pPUgQThyNJ47dsU8x7FZLW3GRxCjVrzu",
  "key5": "5fMKCo9vG3SprKJ2jq9oTCgh5Aiu5M9EiqBtxdikfGXYctgsKfB4b7evdQpEcRHKs7WYCEZBm3ze86DzP4xfQViU",
  "key6": "4HUYmaFZmmvUKd4szyxjFMn2B2yEv9HE5c7LDHGYDCdqBfncNSHSYk2MAeR45ygYWjDpyGVHpgY5ZeegufuaCvn2",
  "key7": "2zkoZJCq79k8dwnK6FJABqEcaCcxeW28HjoMWzripZcEuvPSTQMHLqPnFT63BM8czFQXLDgK9PEwefYiiksGicnW",
  "key8": "4SpMMH7QrHHqXwqX9PgZjYkxt3o9hUzzoK5Umy99FSgXC7TdDYDEhdzMX5W3uY8tzn49HwycrAnfygMXfnSHo2aZ",
  "key9": "3aQ7sesmoAhLVGjkjF4V2Tf7BqezAhVDw6knrdmpVJ6WpLetrjXuiaqwSnjrgJdcuzdvz1GfhrXV2dRBLjgq2Vwt",
  "key10": "2wfpN4jByRPTYsx9y5qL3oavvWuFjHzsTknvWvm2SM9fsWZNx8D7MwKVGwMdKEEdQEUovVB77EnP7117tLZHndaJ",
  "key11": "3bnTKKBn3f2svedefVGy8kKAdp6Ft7J6oU2HrFEccLzLa65HMY4GNBSPhXGHDe7x4Dix27Kbp5ms8AS9oP3Xp8iQ",
  "key12": "2KVrZQ8HaDYQgzXAYV2Dw9ywUbnLFFbtA33fqcR55mbyAf34oskYScDTVGWjBNKuaKVcThhSDN4XiHiCiUHPYzDK",
  "key13": "3y5j9RxDSQeeHCLkm5WCyyVdjEvYBMykyxsiuyKUQpcKLZi9s4uQQw8ZicyzTzaPEviY37kQbCk4mJZJMBgx1P8z",
  "key14": "2ZtpiA7TP13c9DBWF8AqNWJfGN4XsnM4qFDEy9LVXi65JegPaxcuPU15NCTbpo5zs2EL8tNC8p549zcxKkRiZo77",
  "key15": "HM41RvWMpwynrQzSNRRkQ64K92ez6mKkjwZJZ2yoiNRmEnVK8SRBYdhS554Hd75JBo4XzwGk3sjRWUCcNXHk4Sr",
  "key16": "3XwzG1rcbZWYQNQbWioxLJ41dmpvYMcEnCMb32BepsnAEgTBv481br6oWbU5hVgQoSnGwm5QXExwaFJphmNpDYQf",
  "key17": "4E4J8deWWNXLJ8NvGvjPtU6tZCnF7D1wCkHPPoXq8SodKzZMpryjmWbgwqDpyngdRHGhCM3aWqhe7cvFhvep6o8i",
  "key18": "25SRs8KvaMMDuWVfPmfRd7KBGzN1QqLZwwMhZYUvM732CYqwx7rig9YQziRhdAFUohxTBPWceqp7LFVHa8Kyd8Ch",
  "key19": "mkF9LgPCJsJCajkdxRKUQoDuvphW2NniLwJjDi2BiUbeaKnX1CbfdWzrQvS8xCfrJnEsgjCb35mzoZ5LFerbsoV",
  "key20": "YHHCixk4pmQ5ZeEfJVS6176xYenYsnPTX9LUKiVQcEUrQLmbb1jZhRFCczT5YnevLVDyGtfVN7at1A4orMwAedH",
  "key21": "5JRttyhd8nfqqJympq5oreHmVVbwQoAaZ1Afj5sL8SqFrjjaA5M2Ny36A87oq2AHt9FYRGSLUotuinmQSdaowyj9",
  "key22": "mgFkXU4ipbVLt2JX6XHXzREWgz7NhEg5Xs3mjtzDzdgdG37wtqmWj7aUdzZqJwx5WxQigpyZshxGJ8wJ3vHfjbD",
  "key23": "4TWKj2TqmSsVjG2moa1G9wsmPpjBHXWK9r8HBrqW19PZAvry1YXrY69fZph9GdKZ4c2Y721VNtzXATw9TeBV4WSG",
  "key24": "2B6YxAexYLqUQdgHU8TYnbHNL8727t4TFR1Xrxg3rCPRkNbtQKeq728YJnfMb6LSVkKVn7UmLg5DMgnxfQJ4bbzb",
  "key25": "2KG59QdTvR5NBoAX55R9RdLefUqaQCixrrm841ywb7wdubafDFA3KW6PQoNa1pv5VxUSN1jQdRdpwU2YkRHqFmfG",
  "key26": "28qs8HLQqk4u8j7cYasg21QCYwLXnPsVxhPjHZfUU8tCzB3g7QibXdJEzr9bxMeVGSFzm68Dxh6VGF6k8MConRyK",
  "key27": "47cQDt8mnwamLbrJG7RvTRpfCkuGvK4Nwfqnbt2QUeceKXM2h8Xywh3d9bUMCWNifGh6bJJKciq35gYQU8ybqiJv",
  "key28": "2YAmEpngwkkeSrtkD9nirj6siK97qA5C3kSmfmkJ29Y9pFQP1pxWZe9jv7fR1Rw7x5ahijjqWEWp9WQzfYxskAY7",
  "key29": "iHcYiJvZSMj2kVJM4467BaCLaCbtckUx6PZcBEJxVcnZKfTzzF6p9SnT93dTyJEeUMvoDPhdTdrU6p3c5TNAvEM",
  "key30": "2V2TuPrYMMF9c8xqwzJKKK72LuMGJCztCcYDc3HufBE1BKA1PdH12ZV312JF116429qGzXKfeqT9GeMk9WR1Zmj9",
  "key31": "3DpyG4RHdsePqu2is9a1rSLD3ajHHTA4BMjusygatnYo6WT4fzVYwze7cyy328odZfo4wQeb8CjZ4r6UfVaos3tM",
  "key32": "5niHiu1FxkqbEKFG6iBvYNVTb7TBq1LkApBGzn7Y7ztdV1xXCDf5HrvsBXADBECEf5ek3ginFEuGrTq73M7HyaLH",
  "key33": "hro3aDdiPPsYVTeugmutD4cE5153voMoeUR23E7U7AxGVrNkKX3P19D8XQqV57pCBLiH4WnwtrwQQMG9UjbBX9H",
  "key34": "4Cahm8PmuWVh6GMMJxNgYVv2riRtGdoP3p9kzyRUCVkrYP6NJrmNubHXNd1y412mjdnuzY16BdmZoB615hdABzxT",
  "key35": "41Ltrt3qReSh5TqjBzTG4aUWH3bQp6s3kqJNTyqyfJRzEEraACnaYD5SHcUNcLNncPe3zR3dfDGK6eRneLwYZThC",
  "key36": "4u8ZnVnDP3ndxJGn23XUYEjJDzd4fbtaP1X23F6CUKGUAvXaUWdvW4sxG5rTZBSzqaZomhKTv7xZa2mbkrfrAtbG",
  "key37": "3QKuwH613hgu22ZLPbihCyKa2WFaU72CaofcRascyTJLASrM5MJisTMNdjq1Z7xM6J7SLjTrCr7XNkCHumqEpKn6",
  "key38": "2ZxjbCLcewHCdos8yvXc7eSNa3b9MY4BRjyuSZSqWiKFWd2WdJREuEzyKRVqLmY6zoM1ULj6HwPormtq6i1dWasm",
  "key39": "4KrBq2h17raLXZDADGskSu3LtFVQGhszQrERkrrm6JAez47LPmyFyAP64JqjAJ567EaSkVeLAopBgFga79hVXfcn",
  "key40": "5Qd9djUmwEoDATUgiceEFeiqmuqEykNk2W8He9hioScPNWTD4J8tzQ5wFCJ9ayVPrDL7CJ95NyaKxGb2foxQpfNm",
  "key41": "3Gi9XfqzRvMbj43PNGCtRLSFuoTDy8ayYXF9Xpju8MH599PBecdKqYDJMQMv59VzVREqd6avWVseJ7acFd9fN6bS",
  "key42": "5NQHZGezVf7qAkaT2Fukux81jba1XtkDFBRp1X7rS9mteTap6qun9KD7tfcDaccDxyY9nz1Ub6deasEKJ9nGt5sS",
  "key43": "2w5EkohhJcwaEuwULx3hWtX23Eh7JGL9GxiQ89xGnqHc4TPkCmTUa8CePZuck6mq6tUR54F3G4jvbySPAuhHmsQL",
  "key44": "5hQKYYXD7YLFhRodfCknByLHdLoxFF1EJobVGUGSRseuj9MimHA9DLgcij7TKXVJVd7KSDY293Cu9eJeZpKMWZxy",
  "key45": "HnsN2ain4g7zWpudEJgh6X3c78BeQNc65Us8pT6LYYYCZoNBgA7CiqziWVX52ze2sqoccRMBdpnmehJE2Zo9Fhj",
  "key46": "3LtwmkJqaxPxR26h7i2GboxP641xL56ymjMdByNrCQtYmrXNYq57XXrrapGwXZEzgN8Nc6C62P6aS35F9Xks9jds"
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
