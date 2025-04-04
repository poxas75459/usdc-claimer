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
    "4nSHKVL3BeVdThn1YKB8LMPVLuGn5ysu5pdwiatR2LcoTrKmR52yVm1UWzvfwTUhy6TC8GxdeJYrA5QDLzoeGu3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6335UvjYGpBb97z7cpYhFMdPNa5vZ4uS686U93rmfXFkVakP7XEEQPHTt88Z9xMEwQQVQwTa37E9rqhZ7jitRa",
  "key1": "f81qyWiiaQJ8kJrfXW9HwUNZhUsjS5gwyFv82SHgPQRGyv3yvyqEThuyR4E1XCt1jUFoW8GKLMWwYfaBEGqwFkP",
  "key2": "4uCjfkHvp83c7FSy9XZ6vUPaBWRDmi7FJ4psm5Snmbjw3RFBda8mz5pAyUdLx4y7sTfH3ZXTw7KLqVrCetEfWZtX",
  "key3": "4Tdfj1QfErF8TNUQgEvVJXV5HXpu9pKQRKy7LcvveAx2uZCmWz8zW1aR9ZZ6BGsmPaQuh8ikhjKk8kojHQqxaJ7S",
  "key4": "MUWhz731cVMqoyi2vpvjVMBeWbAXfS7zwRVahLJyvTbX8emJPgWJwAhBhzQexP5D9pQqxU2A6ekvBvE8LMma8us",
  "key5": "2pPjFGzhKoUxs3DktDs9nH5FsgtCbbSZvbd1uSdJSjSpW6Qk8FJsWarCbxYgKTDruGyXQghuDf3stzMMmLRmVCre",
  "key6": "DAbdYkX7LVS97aucH42XLw5cpCZFabuUVibRUJaR3GQzaZgjvTQnQf8fvYu9GzuV5oNvZCn4QthEv7b3ARSihhK",
  "key7": "4w3THZFHt8Gt86RJtUNddT7UMi3gNACt2N9PBStTrfEjBJpbhL259RUsBQ3LW8fwua1wYone9rgwBESuDSUWQHXW",
  "key8": "dDXkdPedx8nGLpgJRdkza5ufJD8xYfhEXJjVFEWMXYvyDYWtdLKhBQnMedEhAiFTHGqrK6jiaqhm2EUGSo6dtQe",
  "key9": "4d1MuVE1pZGzUP8cNkJ9gxHnWT96frC4ZPavnbdwqvGkaqnCGkwnzS1vfvptit1ATNxvZb5GoWp3WXp1HTRvAJLP",
  "key10": "55JPUWtZDxL1Stob56FG6bAPZoc8CFCgvoUn42JuvWgFQ3HP2KEmG6LwzNrHCfbBPruUn5s54cKjKNQxxF1HSVjA",
  "key11": "3gGpq8wkLeZJAAEkMmzr8sSDLNgd1A9kLUwT9vtEo65VLbvgvx1GTbgGCenHjAHN5CDPWsKwLRNKJfGEAucP2tdC",
  "key12": "342BCes6YEz7k15gehLkAR5bPme7mvZ3x7jMZzXhfxrrZLx6eNyeFcSdWcWPGtaoK47mXPWW1dD2t25uAAKSUiZU",
  "key13": "2TtP3v8YMUEfAdPLDTQsPiAm7du5tMCvrKzHnWMJQ53LsC1t15YBgrYUPgXtGteK4g5MaduGDgN1xzQygc5a7TRc",
  "key14": "iLA4XqewtScAHQJQV8Cf5RPn3JCtQfw57FSVxKcm3acNR1x3M8hiAs5CwtuQ5HXx53gp9HZqRkFGC9ovE5yLU3d",
  "key15": "qVxwDNv2PTVTkeJSYo5dBbFXp8zgTtf2YC7Amc7gQtXtrC5DKKNMwsBKMA5FKbZ4aqdhrYVtidzEvS3THjUs2W9",
  "key16": "fj1k8rSUnrVAeh79N677epmLG6FSVbh9CwaX6sQsPD4CfgUAF1DPS12M7btMZ6znZg8eLJ2em923WXvrkXjEXiH",
  "key17": "5hickP5THLk2UyMPBMdD2iABFyMmzS2mrXG7XmWwhVzf3RdcET66hhEpmJ4kyDUiKaDh1HroAwe42fniLCYhcDXF",
  "key18": "2Jdq4cdmLizPCcHhsr7SxaGXbC5q7QkJyXtNSWYnisyC8vNL5BBnMQkeKPWNn9DkmGETL1iw98gDhVDn9P9APfvB",
  "key19": "3kK91gW5D6JdNvUkgJoMSB5bcfckCrQ2DgJ6pfT6FQqVwc1fnwZxpTMXhR6aJN6z8qSAnHNoyao5zHVtuud3jnqb",
  "key20": "3hZDtX6LhG8DCVu1NYJKVMGy4JYHCAUPiWiVQfxVC7GgL6jsAbYPgvyt96HBWxDZNG8QANgp18hBxWe6b6EtyFzQ",
  "key21": "5qzhi2hc8rDbXvnNaAohxnuCo3jzcFnrMcjbK2YgzQwBmtgHnCkoKSp7VYuJpiUhJQPV8TaBqvCATb92fy8XSWvu",
  "key22": "2bwWN1Mj48F5wzW579RpFiQSN3G5sADkuBSsf4Z9mptHevYP5SwEvsj7XNZfoJ3UvxJwjzNUKPGJ9LTsu57asYwg",
  "key23": "qcB2wXJ19SG1qu43vL5X1RWCuUqG2wH8GHLmNURprtV77pbuVT3SMK25t5rgmS9BEcXekoMNUGH1JuUbd5DGN5D",
  "key24": "4aGqbrxTVDzeULLyYjwms6rT9LpeGH7MRA1nhtNRghKTp1nnLfAW7PFSnRjHxqYMB8igdUBesixSJ5MYk57iEvtR",
  "key25": "3y4hBJyUsCSsnUsSzk8uEiFmKeCdomP1BeNMMsJyyEHw9zeYhEiBjTMKQNabeJKrNxN7uYA7TXHDGX2gk6LrpphV",
  "key26": "5SAeTUfsZDueApwmWK5EPYXfDxu1PvB79nMQuhXigwYAPKZhdsrooTXSdo4WojxW3LboYL5xkhr2rci3BeV6fEAk",
  "key27": "2LRboRX8Sc5iRRK41KyWSqzikaY8s3jGAwNX9KytHJDVhdK7Yd8dJ7wQE8zwjZQZqNA8ScpCPCSdTzHVrYrjpXoa",
  "key28": "2AsS1Qs9WVvCk3ozs55Z2VfiRD1K3m7deLTJeL949MoP6zkucB22Wc3G7Y35mp2LNhCV3V4mdVNK8PwPUtpEx2X1",
  "key29": "2aRqCMuzXH4gSPYY7cPMWiobhxNJhb8MaTiwvJMiFd9nEusaRX9fmtyPJxYkwMB13cgqXWznhdV9gaPnmbpey5qx",
  "key30": "2o4Y7yeftheyUyCPYxd7XpaW5gQUstZ7LscMUwNSCBT6qeEyKeDUj6AeKbEWzJDV8Zyqwi5Geyi1wNkeQxwYDUQM",
  "key31": "5WmgEnQ6uYyDnKoUeRZbwUPh7nTohLuzdkCzW8Zo8kpyAGKeXVNJ5xTG7MshQJgj9T1KVqSscB3mBpueU2TPvsa6",
  "key32": "66wgqxo94zH8xFzJi7NZo42T8vNC1yQyq6NwJCBWUpM91ewun1pHzZLcEeKuVgRjSDhsVsYgPQ5BNye7Dkomb162",
  "key33": "22AdSbfDmQiEadKc9z3GBVVU41BFQeAemN78PLdFcGqCYdbEriTStEaXGXvVMMFnFzZuh6CkyGiELmRZwp9ijXdM",
  "key34": "2TYC5BpmP1wzjfoEHWGRAckpVWZmEfXzU2XNkmRiQTQn6weaPBgzFg13HwgymMBPKTsG646gPip76nDoFXcV1Wko",
  "key35": "gJsrBv5o8SmvTghPfvuwzGcUVLJmuKnWckjNtRVCZHYNu62VgGXU5uPiyTybsjhHAxhXwH8ErbXvKJKfVnQTstX",
  "key36": "4sw9tajv69tH1DJB5X3Tu4qBHdDg1ANfssKdVeqZ9L3SB1FvRs6psbcF2nk98AfW4DXFzPMDLYrfDGNFK6c1VNfF",
  "key37": "2BcH8HmHZQv27pfNSEZ67vNGgDrB3bXXuXhuHFzUJnUiHu3P1cMoqSkS9TvwR19sp5VAox3rJZCcHMZCUDsGwJv1",
  "key38": "4hhJbxoa96qpzWkay9vj5ZDvcMMvBbwBAzk3RxDY9yJDvxJR1voGSMpvR8ZY2c1fZmsJznDGUf6YoYrEESmtYczh",
  "key39": "1agHntZYyuE4CKwkwdmadHvT6neFi9vCNK2o4DysviNbWtPYQ6WTnFXEhHmUgcBdAmp7VUe6UvMaGLSAEmYD3Ek",
  "key40": "56egwxwAUHXEa1vVA28TzXC6dGmQcRgAUoasH3aXvHZ7dfzuxLURuqCWLz65b7VwNpYzUF1Ebsu4VtPvkHmv5rsr",
  "key41": "4PurhadPn4T7UjtodrNwa7MncAj2pMdFAW2ZjXWtfaQyb5Gm6zbDbxuE74npG6BuYvXPaResr1kUsEfEp2usqT7"
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
