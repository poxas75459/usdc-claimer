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
    "5DVeaFjsEDS5HRPHoCnziEbDhUbDKs5KTNJ7ay5mScnNCxWSBLugdWD4FjtgRrx8iU94iPLiW4KbVJzyyVcddPTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GSpUh5nG8NpbxFfDGNwPsETX4KcwQAod7btru6TRLUFhhHEF9WrgSjVnv392WNa8etBUEJNAP5TMwH38vSNjWPY",
  "key1": "2pULbQfAJFnWfevkqHqnFvSqtMGSmtFS4NiTCL6ZKsVRTkWJr2hph4uUyC1x8DXaPKSQbjd78v3uWG9nVELEnaCq",
  "key2": "4QkvobhSv1mHVmRkih1Wux4FLmUfvFycexxfk19aCtWGytEhSwaa2BJAJjoRnbKtc7VcHQ678sT4NwifzGBWcJW2",
  "key3": "5KLsCi2MY7Pe3Gvx6GPAJBuFomojkrgK3hF5xfM3denYQj8tETrXZV69JZgUNEoATwoGihiH8oDmwDiFbUB5HQqU",
  "key4": "j5GabvW17G8w1zjfwTY31NbwGBzX1WkN92ArAb29ZPWXL6kHi9U8KherHrzHjh7rX1xZw4zKm4qA9DZGxecdacY",
  "key5": "23nB8yadg6S7MQjcTZPUiFMfkRhpbG6DWy3qC9kz3dU9ibRomMwDepjEWpgG3yXb3GHLcxUpBRHkkZFKSZrAgSk5",
  "key6": "5UrqeGZ6tavrMnE8S1f4DjzWEM4vAmSse5rjaQLninfGY7naVABhzpsbQ7hswRLE3CYwq4AYAZcuismq4dsPduh9",
  "key7": "HXEcykVdqzHgRMmK7Hb6jXerEY4os35RyJdULnB1cvAeJn7DZmfvdFvZae25yzRVg31AePPh4b3zvJ5uk2MYMjJ",
  "key8": "3KBbZ4YxgXHu3xWrQMgFxNGY2ZP89wJrSVtQKPiHDgEq7gT73bzhCyUVzRybR5rojzeJkWR4qN3AyA6bM5pgMnTV",
  "key9": "2zYiMYYdJLsz8kRfdbYxNj2jDwuTL3QaKs86w1U78GNybdS8GviRHdpenZpQstUbZMM2JoKNgXNHy8kMqL8eHvhR",
  "key10": "doEyHxZXK8tXYTyByTgfV77fTtWVoz89MG6nnyb6F1byM3n2uvDACQvJmTM8CFZjxBGS7yTLHV2ps3CFoxbCVGS",
  "key11": "3J3DdUrM2C8sPEy8VR1yyAHvdFKe5RmPb8TdmbBMZd3hs8y1L8rhZuPBC9g15u8R5Nzg7Wf53Se4j6SBe5Ayb7VE",
  "key12": "Th6rSJoDoA3LHZsSFWKfS2rPAjBdydZgL9A8myEZ3wqvnivPCwGPZyJRjJXdPcy8ChbcU7FdpEBrjJjuxNXT2n1",
  "key13": "2PSHSVzfhGCzGJmSy185SxBVkctkUtryRz1W58kV21pnJrd8G7RZsV4CXWjPxrRrFZV6WS4uiQMquUXMmCYDK2k",
  "key14": "359AL1d4svQ6yLRpfzV3xST3qUYZAD5GZbaFcqgAH2A3tmo3UGcqJxwdZsdx95NkxLzzi8EDhu55aU6gNdFtq3dC",
  "key15": "4pUnkhyVhZk8o7RWzn6PLQ7ht7PcrqEYvBVi7ArTZjyuic8VjKRx3CrxgULFQga5qAkWWDF94yCQyLHeaQibTtHS",
  "key16": "2HoQHZz8RghpuhhKyE6TPC8k4DS2X6fQ1qKCH9FeX1Mhn59go6MhFw2DDvygLiB4EBufqzeP5ydjEyyqxKDuYLae",
  "key17": "31oENxMj5vnCfnk2RUnKVmgoimPvaiVQxbVBtgp9yZPBLC2pU1HM7SfCk4C457TzNZSdvkbxc2QeqpTy6o5CrXbx",
  "key18": "3eYexMFhxoHB2v7gA16E5fa9Es5zv8ixZ5pqgdVCwqWSSMGbvwhdf3MDQiGLmCsRsZTPuubtD8XctHowNXThbGwj",
  "key19": "5LSKEZjrYtVPn4AheWDzw5ZpE7MpW58SMuXhbqTkUkewZPneqKy1SCmoxfu3oZYCF3kopb32p68quicoCYFKEjo2",
  "key20": "suhfiAyLRRpEhAaLatgA3o3JJNWYp3DAV5rKg8CuJa3Ko3oicUzqLeQk2cLquMhXQz1kvPAiqTRSPV38oNbkZ7d",
  "key21": "4iNpdzrR9CunPrVrUqQj9Tn4ChZLj9DMRqo56WCRAnv4nu8EasGCSdm65bdAMZ5ELSGE82CV22JhGF6D7rYNe5w4",
  "key22": "4rGojVa3RSzj8Uefty4nTmd6RtFsAFYxnsShcKTGHNkAVBvdyfsKYWAgbfgjsHBpPBsEFjDWAWBX9CKZ5ZK5EKCW",
  "key23": "vY4HJmkqBYnQWSmQx7JiizfqGd5PsNwm2ebDSHVCWnqcywWQDyoyLQgmbNDcjkLiXJ4ZdmEwzb3z1ymAZUGb8g5",
  "key24": "jyfA9VDSb3MDd7ELoLvDU19C5VxVj5W5f23VGfxkrGjaLUdxN4iRthCzW5mqoNMr54B7ZedcSKmeaFrc9GBxPB9",
  "key25": "24YN3eHRqhhCAVp9o6zpTfcxpTehxdUkSgZXcEvNZQczhrsDW6twDtMyi69GuEgCWvQDD5fNMPmsDgDpJHBF7Rij",
  "key26": "4CEMhFUUaitdJBFLGCwiNnLccU5Sve3BFpR1SRrJ7KpjSuLTvF1Szv3xdCaC8qRJDp4SNaZZnaAawR5ayNn71uf8",
  "key27": "5cvQyeNgxki7MZgGjKU8qJXEV7DaPyEqsxauCokiMV4gbCrQPEAubYm8Gqwd5zxZ714u4t1hp9TuSLvtAGGnzng",
  "key28": "oDwZgQaQDBbdgmo8oy6ES1ykvD5jQHxwkz262kDCo5UmqL8nADUNt8h1D2hGK4pjkuY5m9oiPDnPXZckXjWWWGE",
  "key29": "3EVCkgAq5fJgEDrYyYcQTqnWghqTD2BaS9v5m2XwFYNmQmgqeHuH8RZcAepheVXfCkLGvGkAQNYMUzju9qZW2Uo9",
  "key30": "5iXJDe5VEp9nK2A2y5HkX2VAnnQBEN76fR29o8tEoqooQDrpW26GYjEfuvijkhbtC1eERLVWnpLqPRNns94hEgHg",
  "key31": "4A6NsKJmdkkn4gkYFbnpJhARhx7JyqQPLFFRLFAmJEVKSVTZUubdKBnyfR6JTGmCtH3mcdb3pPVd5S1x52HXg7M8",
  "key32": "5fM8f72LauBYVeTS8LEr5fHzqnh3RGa6zrBovhrHpTKKc7wQs5x6rQ8QBzsHgY9VMh1C3uBkdEMBRhsx87YDVxik",
  "key33": "M6kDaeEVEJj1Anok2UzNrWw7rT7zxgLgZQ196RjrVEEJe5WYRXXYoyDFD2DPmETJVCt5fqHTpuBgvn2JUEoqj1F",
  "key34": "hhnsPS4GfwH8qGwjYCN9E1iDiSPcjuapnJ8KZfb9HrqCpxd81EiKxpxFqMnvrP7v6bqPkLeFyYVRpZHMtobkRit",
  "key35": "Z4eSh2devasAnbaWnj33wUSwB33d6wgVZhqQjKYs5HDbKPXhrWh1r8aMuEJjuEkWT6xRsHi3GTxWYMYCf32TeZ7",
  "key36": "3iaLFqQw6aU2rWQdVkRy5DcnG37BKkvVKRPjd8ucGvL12t7wovMAiGfCUDLSJ2kr1W5qnpyujoQjb5cC1wmCVBNV",
  "key37": "5XbuqGM3gziJwVo1iT3N8YzGftnqu8hDoZ3CqMNJQQJYkZ1xBJQz8EHLrRHRViMqkKzxbgWE3imn44TkpVugKqVG",
  "key38": "5qwqgDm8S7MT32A7E4poR9CMyG9QeL5xDJfSuWfYpiwHKCXa1U36ZVPbEYyjAaMqnGQLAr56o848vN94raw8SMgV",
  "key39": "3nTWZf91sHhuWybALvqYv4pKYZtNN1JLEPeCfFVF9q95KbwX7FnW4wu6YCmYxe1Lsj5ZhmHPnSiMC93hd9rmXyag",
  "key40": "5otJhBPmoDWPPWZ9ovGJb2zbq2PLHghQoBut2UKYrUSSQ37Vg4NCS2j1X8TMfYy9AJjAMDeBmBYp6Sqn4Pw8jpzc",
  "key41": "5f8cUeP56Yb3DQCxzKZH2i4cagwDmUoUYqRgwyyRUzBG6L3GQSjdSd9FKRf7D8qidJ6xnsNmegFiSTYiRkHQ9e5p",
  "key42": "SoT7SF7iGNqKQ4bMDSFAiyhAtZb9X6DGsninJ9b7MCQuN79kpKw4C3MJf2Zxahwo4jgGdZ85pKnP5foXLroN3M1",
  "key43": "2UQ1mdeaSUqYdbzy2z18Fzhq5evJADsZhQevNdfq8zZDKJCzSLGifq9wwdwEQCP5mCNUjtE4LLaDcdYYNwdEyvxY",
  "key44": "5BTiVmV7fvAh7oZLBVrSzoBfcxnsVT1G1SjguYLAWoTqZYmbkfEft92DEDUc16YqQa2GJiZ7vPEvgyRYobkfeCzQ"
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
