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
    "2zNMsVvdyQTfNvEQU4KmA5aXLZ73w9DGdWCi6kiFF9bmoQs2yRKWL4GWBsdgUWRQCQJg4gM3GXbN1tV1TEZ6vERh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hm77SjW9PpPqz2RBsV6A5YyyjP6EomveQvnHfeun9ksWicSucbyXaycztWUvvAVx3c9QGTcjAmxZF642YRBWQP7",
  "key1": "5WZ9AK4SBHUu2Tdg1LVaupB4rTKBu5WWadNUsDgwha9Ks7DJxhEv1ghhZeqbvdCWe5fA1fMLUJnA21a5JjjR8tKx",
  "key2": "fSf9g2cqVa7u278Ed6TocSkgkU2X6bboEi9zwgfaQkbfHwcyqNQ1t3LJEdsrkJLpKazAnx2xztn5aN3gjepX8RR",
  "key3": "67CAfqTZWPPvm7dcYBkocsxgUZYauy99SwoADpFCN5PDejMoy1186eq5yQEutponivj9dzM3hWZtthMXhWERc5Ys",
  "key4": "4VjDGkbvzGvrgnJa8hz44qW7YHQugbhQLkVqnu63a8S8AJ3ez7ADN8eQdWJYwJxVb7igJjBazFMLmqu5JzNhRE8D",
  "key5": "5LXTFSdQe2dZDA8VJAjqKQjTvrJEmCeu4c5uJUdhmJYmqDBqJvKj2X5KbwAyFeG1WLZTS8JVazE9FrDSu83CS4oJ",
  "key6": "JQYuvgXAWdRoWiks8e8q5epSfnNLGnSfNdGpiPyomij5ZALTMbQEyRkRzy2L8dcqf5DgJ39Gih5NH87sHWKC5vg",
  "key7": "irRbo4DH3qtTdZ9U7iveuYi2hZCdiQU1mJvFE2Pk3rBwykQ5KBfVjDFzMpg6A91tEMTrakahY6pxNmsBuNNC3PK",
  "key8": "3wAZ9o9GqnEbFTgA9G5SM78nqud2etvqx5T7GLm1j3GQtwXDnvYrzvhTmnja8mPp1iwJvtdYpNwTT7hs7VFz18RV",
  "key9": "8RGyEKirvT3d5siHTBw9yroFzJ125kSrYSkufJ4WDrGknAs3JwAkapm1JvqnKQTYJd9rXz3znGEmonUz4mhfov3",
  "key10": "2v2EntCbnV24mNWzKykXJcdzckAzWZ2VJkf16sj3JogsnKAuWjorcpt8vNQSyteK5S51pFMMAsfojsq3gqdoarYg",
  "key11": "44pGBUDyYn4cKYWkNCCZGoMgojW7hUxnaiJAFQdUvm1dbE64b9HYEoNJwVKMdj2p7r8VRngGnoRHZtUFmZvVV1Qe",
  "key12": "2TU9gNkjUyau8AYYdLxF53XW7dmokaYNuF5f8JXteyYmzWLYEuZsMtguNfZwho9ySrju5321Mewhz93cMCfry8UU",
  "key13": "nxtSvLRQNsWmj6HSatMR8Uc8YSaCmbfFTM8Aw4tu9KbH3sPag7uXYJ3Eu6H9TmgWEV6AxGmYc1ABt6he91CKsvJ",
  "key14": "4dGEvMXRe6VEXmJpbibHAwxMDugUqfBoEhJ9QGpTdC3zjxKebHLVWHdjpSEoEKWMmm37FtMjdsmEFh8574dwFvm9",
  "key15": "2FmGS3cvRMCidshY4bw4tYHT6CDjGZFhRzT474FdSLKgD3DLuPDDzzGcufoeRFDjufNriUteGBEwY3TH62FMYMfB",
  "key16": "5NYRg3jGZPT9P4tZWCcp2YqgPvUGBHgeNpjppfyKLrw8NZt1dR5Cira8hxUyBusmKKsVNWUANVHNGXXTrpkgr2pS",
  "key17": "V5hGfpbWDZEVqhDMQU9EmLPCQ8MVoULXdDHK6VzMdruSEz32zRBUBgGYJGyk2jNM25rU6DrM5Bsa6YZWb7d7ELF",
  "key18": "4jK5BCLHyw6Vn55jge2cNek5vLkmCtiLiwdRSrMCXVUStCz3J1vpBpaR9UPyjGVrtT2L6iMoAtBFTSnHwCzv222p",
  "key19": "5otPB7ipY5fC7ZXS6WJFSWk2KiV7VD2T5vt3coUe8sBMxqr9TksQ4E71kvPMA9fTFxRJtxXyv26ozwBwLbUsnbiT",
  "key20": "2ZebwkTixBhDwK9FjwSjaGQLnWQavR7JN658gAFG27cDngPUwC5Z2z5hKRtevE4nFX88hGxzMm6Ca1Ho2KgpHATy",
  "key21": "23MSDEFWuCMUrTu4Utt3tjjUSKtjhRRJgrVt69SwMF5KzEcA9N6ZVVsmAq8HFHzemaUpM5qwVaPoyqsg6PmzeLpQ",
  "key22": "4HqFhEPnXoQtqqdJA7Ay6g6opPe4cJF2Lzn7abFKoPAze8WUEhMQGzyYtbW2fpk3j4t3pACQqyD1huRupTuxboKW",
  "key23": "Vw1jnW4aMyReyLeZqGhqNthdDReqxvkxPQgsueSPpodRF2EjFSPXwxLzfht3syXhFqF826aSPsGXKC5FvtmKFDr",
  "key24": "3VmCNG7qkNzjfJLt9aWwFmTcUMNKZYf1z6V2QwhMnvdNDzgkwB2zDNiWQArog1S7ueD6xKeX7n9tQAdit8fHJo71",
  "key25": "5AMhPZbDLAVWUDbuh3LbB6pKEadGtvk3vqmBCqWMx39J6B6t15SNy6TBfPhnnRracp3VQ52aj9EwXcjewkm5DbcC",
  "key26": "3Q5orYksQMAXmXUA7vf7V9JmymSygBZFTtBUya7fcpSEzg8ZHrZhuKK7LDXjWTge5UKtP5NQcbGYYPN9Xzr2zLPo",
  "key27": "34EGSgKeTCiFcWL2Pkjte3HAwd7BERa9fCxsTbGGnxbGHqcHn5s7zp32j5tJJ1h5gU66wkVn4zJjCXDjKragFyau",
  "key28": "2uegvCYgq2arEmMuZLxVewbbEP4gZoVWhA9Kv6GiXG7Fs8JR6aGYTi6mFwjpPjCTfb1EigVGNjXtfxc8QDy87GEA",
  "key29": "5ZHiTTtSWmzj5daYjQWVEAFWg5ocLLcQrmscpnoN5zSrbSoGE28JR6tcSb6yFMZTkmNP6S9tgzf5hK2xwHWTGCXJ",
  "key30": "5imMJBshGc1xBFwK3qd46aqEGFU1wcmmjt27UHrgFtBCXiSt8aALnPRKLym8UXcKYqoNzkYuk6a4vyifpFJfVs9Z",
  "key31": "4mJRjYMJ5bE9H2Q3wz52QKaeKwVaQ9aQWiuT7437d69C1R9teo7BhCpzJJG7y6SnQg4TpAtKNMdraTkh3waPekPu",
  "key32": "4pdcBhziTE87B7ihdbA9FAKwnTTnM4Kv9ATZNf8cBHRsNpvnBDV3ALBoz3KzB3LqtmLHbN9vcdTU6g7V5RcgjWwb",
  "key33": "g4uVSQpMyKSpy7Di8KcSWY7TWYg7AUvHueFqNHgaesGBCbJp6YCMDwLpVTvAFXqADsa5Hs8SD7hVDWhWihKhxza",
  "key34": "5ahGdjKYBu3xAvvEo2yaAntgKzvLZ2poa7iYVWEQcAzXaxL58tDk6xqByxfwntRvfqfeLvpnaWqYgM2sc2mEFVBG",
  "key35": "4fy934nD3XZFsuC7ubUdwb1bbooVs4y1nnneMcwAPQbkzMGqwnWtKZybG5FmyB8hqy5PikZZEs2rbd6gGFsRP3kn",
  "key36": "4FyccFis9M89xxaQNivcb4mYbJ4ii4TnimeisekmYiYmUPuP1nZ3aqYtJxzYEByfFKkUft7Mjm5nVgxfDuLFwZnP"
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
