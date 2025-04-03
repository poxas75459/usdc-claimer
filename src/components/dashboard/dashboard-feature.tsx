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
    "3vS4DF6MtPB2rUHHR2VyxUJZWYYa5VCkDV8xRiJx1hjeaXC98dXnjTEpQxKtdzAVNh3Q9eq23Y4du6S9ffFc9MPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2D5UoDL36yvBVWNCXhVyZkCyS8QnUPqFpa3PhGYSM6ERTCH5UreL37Wn2YukDD7EmeJsCPrQo24zd9zNXx5x99",
  "key1": "dVytENbdekuKF7ivQ2zuTytMQ7MpBDabnBWKQRtF6bnRu5jSJHpScX55DBTBhYNH55VFdja2Q2tiaFNk2aPvfQS",
  "key2": "5Uhj4rbiHTpKd6nfe9zuBii9nuZTRLKBGp12Kpb6qA4cWEW8kNs7XGGbM11UGRTtUHTKhbjs2b8Je8rynDiD6a4a",
  "key3": "KSUP7orENu7M9yNcNGruWZw7bE9XSHyiqUAxzw8JRZUKrCfyKmsd3u4btsSUfBKXFaYKNyay1ijuNk9bhmFcArX",
  "key4": "px49yvNufpvEsGS8DYcETz7qUJL1D7F3e3Eut1KVAH1JCrXRVBZpFwqxW4inKaTwzZuLq6nkD9t6WnKYajpVPaQ",
  "key5": "29gkh7CwRH7bByhgDWxr8mei1hRJu1yyeUiusTwaNnaPjKoBjNKKAkYMYpZ5Do4qtrnAcM6As5qaaZdQFZu4kRNP",
  "key6": "4KFM7PujyjTj3bu5ohUdUZAGo63LpgHfPzFPBU4V9zTGkR6QH4srYiY11xetn4C8F2Xyq5XMQc239uubeAtEJfwn",
  "key7": "2V75znU2yzhgZePwwNvvGwPx39qcAZvFKzz6mA6D1osW14G9TXH5KVLZJahNJrXx2H8P97eTjaHFeV6BpN2QTnfJ",
  "key8": "2hrYjYgvuWqi9j3eGLLv8DGqDEj6stsexw9eh4PvYDCCKwejXKGjkKs8CmDQG8YEbrJTqTaHK4NxFYgqt9qDjszW",
  "key9": "3ccUmLkxWME4iFbH3wsqU76Qn5pntZpruoVwKyfaw6E6g1EAcjAS3JEj3jjJwzUB8pA2DAPX4TP3qyV1X8sMhgXt",
  "key10": "37AusBPLq7Ldb1MWHcLaBtkpWaWR2L5qLXYSbR2B9Xr5FkCwUAMm9wjJrf6w2DEUGqkpjynQRHq6U9HjTh7kEf3H",
  "key11": "5M6YxCz4wnPBhrGvwJ5EYsyz2Wn8orAosbB46FznfyeFevEvrQfTNLTMUG8nwxYejXGp33BqCscnqgMW5nzAiErm",
  "key12": "54zmmw9jdKRXJ7H1ttmT1a4cMTQr7irxtE82vtvTj7nhxm4EXzYG2ovNR8hGriXFYQf5wAqNWnDYbDkvA4bzPo4w",
  "key13": "5DT8NeG4Rw9zvyAqFJ4T51gmBkA2c2fA6KVawfcgpCmz3xMRcPhnM134RKjdTnb8f6eudfsnY2MHz3r43r9ruFUN",
  "key14": "B4CXj1bqbBp7c1qxY2TgnHEJA5DGG5zNaiBnXgUZ1fmbg6AJVi896VcELng5B5pp3dfEN1z21KV95jqVGN5zpHY",
  "key15": "55z44NhDBikhznUPqMBUkDBuyoNEH7fpr6rdUwdZudiZwmCHu5MY6h6gZTSWCxaDLj2QhPHpMQDdzeaBR1FvUQsB",
  "key16": "28qbVshWH49nbcjRAUmrry4XnT1MHHDQfSxae1UNBfYZj2ikvsN19ntDVCAWbzaNZZdhk5j8fABJNMxQxtp6Af23",
  "key17": "4cjk2uZmw82fyVyg8NFnSc3TSgwXrax7wVqAXHgZU9chXhWedjAPwrzsqUQZrE2LAibBp1fEAFWWpJLvNtXPWGKn",
  "key18": "4HtoKRMsRHBHHfLDCJ489pEiUyhegRPPPxmHgmABo5H5VC2kMVzT79dzwweNebLZefsQQPAigkRHrpdZQCMkY7Qn",
  "key19": "5qwAvnr9YmiTUUR6J4sENHEbsksXat1dSX2ddp9C7hMMvCdx9L4V856Axd86Asncxt781FcDQFm1r5aJavdrxmyb",
  "key20": "5Qqe6tfWZkynew7vZLZs9jMfbttuctG8kF5kjCeYWUXZ263a5Si9Yt74tgp5U3JSoL6fCZc9Qmjv7gN929KcFb2E",
  "key21": "BcBGMJLdhWH62yLsCvjQcanm6MX2XXAeknZh7XUN8viisUB9JitMve4GsnTwdj1TiL7rwH9P1FWMQq2X2kRJftQ",
  "key22": "493c5KtffSMMrDPsebs8JSS9qifCcrLQB1X2aerGcGc3MerZSubqbrEzY46xp5UfvoqiH9J1TKDmYZ1gdAiP75Y4",
  "key23": "jhyfRfpWAXEB4f7kx4mZsWLbzLL8ofsqVK8rxqWViDFxEBa22bU4atzA49Ttw3NRasYtiZ5fcY8HHw3Si5nw7vU",
  "key24": "NxVWVogVmsBUhje2111isnKDGP6dwWhBjs2fTnw8gq93S4g93EK2M4L28ZbWxcyxGZnpzove2DdH2aMqQ8VdzLi",
  "key25": "3NgvYv4F3EJKS7N75GBzxDUxxFyhgvbjnAURXkARsv2nZrKUjf5SYDwB6cWDQ4LtgM7wrBTKFeFSzgHSSCuXXGgT",
  "key26": "57XHXkTXLy4busboTgSmnwk58BrNTU6JNVKRgV2UW8qoKFKvAAH63G3FdJq9jMZTzUB54SVDZCZtHKKKcPMHrCAm",
  "key27": "4dNWAZT3ZZkcXC32yeKVccXMXiQHzmpJxonkB219RBAQDj5Lte2TKVjRqNSqAURj64xnQEGkZS97biCJzm6oRiwh",
  "key28": "3nkyCfaK9cTofrYPVnPpAAEDUhUdbjndA6e5QdEqgoxGUL4PRbwUgBYdA4k4HP4jTXJLqd3bwijydjVxKkLd2VAZ",
  "key29": "4vkhJDjV1PeowtzAv763s7XXfwY2vBEvGHsg8FgNvUBm85bQaFfZuyqAzLmPJqCKQ5rgwQYT762hPxLreaQ2NmN4",
  "key30": "2hsGqfsk8dvxw7K9e2xrLRahPaTQhLdhF951Mnz1VSWDesZeKHy9ht1ZtQufrbD6Fufhujm1ruM4Ub9Mvjg5rCJ",
  "key31": "LTupRUJBsQKe7zdEr6E3heMUJEGXC9qoHPkJfJXP6FYuS4n2e4NGx28euPzR9yomh5x9vbZTkew9w6p51VG6nuJ",
  "key32": "gF5jRumLBJE722Z8htDBXVkRCgZnHV4cdUich2qJZK3RKNnLp3kjADCwhBwTZegjt9KnP1PibYdoXPAywc1GTda",
  "key33": "stB5Ldqo8YpvbXuCDn4CnL3suWx6T89oUKXcxDsx9SLwFmPkt6ZQ5wxyCcnb4tBm5tPUSFnFUTbMYej4gDYfPVb",
  "key34": "4ChrnzZP52AxjfpBwMFfbvnkNVt95rcnm5Ge1YqURHttuL6c7PrAdHLfkRCvmxhng266XDA8teQ3WNTZYHfCdmFS",
  "key35": "4GV6ziTqr5dLgHpvBptaMwnDnttnDvW3QofjnhSGRfMk5RLh4qT53sto3iXFWVyEnxjHwKr19PouL6WNXAMLLqgX",
  "key36": "3ziZ96F9hCAGhVGUG1L5KZw4o7Y2tr5WMmb5fzFJQoXRxDrc7Ay4RSGGzowhg1MyUeZDMYzyYU2u2zqrXAk1HiK1",
  "key37": "5RNo7WdW4AEdk8wywnf3JhwBadqBorGwiUutMheS9KWu7iYFpJvbDDFHfa25ZFfywpUbE8gPrUh74sGsknu3S1Ri",
  "key38": "39bB137vbjuoSThpCDwVX7TXrRMqfdWaUg2h8MYQnAtpBUnQxcjRxBmrdrDr69eYj1Ei9jE3kgFptXM58soqk8Nr",
  "key39": "J1us4AA2CS8N4qVhSDtEvfhMyYRKcfkvPQHGDKa1w62BpoVLyKacJJ8t5b7vGfXFCUPKtFbM6nSfwmdMBWMhMUL",
  "key40": "3JQLUmFeqoJUNKAwwgYgRbvHnqqQRKCyRZs2PGSAA1cikjHFTkWZaujWyQMGX7Xh9eWk9anQBt3RnpPkdF9yc5k"
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
