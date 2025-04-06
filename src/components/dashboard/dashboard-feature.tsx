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
    "5cvbG69AGe6JYynBV7jgnpvCk3Bj1iVjsDR69tbeTmkh6vcqQts1Z9aBSscUVY2uY77oizxfcgA9SVFazjWzbBpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZPPmF5ciZBKUMeauQPbXJ3SVH6QhaKYkBmoFNHJpJ2EFCif9oTL4Rvm7LTo7odwFYdy6WtqJ1ZVDk2STY4TDxc",
  "key1": "3kcmjVGL92r6n6BQ6CKxsUMSEEwaFiGLbXcghHzQ9HUaYb9gF322VbaA58u6jyLwBJ78gv9m6KYE9sYiZpiPrYbQ",
  "key2": "3FLywGsRPSu7BoBdKU32giJon6oapXPaiUHig7uRobaoVYT3G4xKyPphgsVqhZQTgYkEbvpEvtXpQ63EHFrNRBY4",
  "key3": "5gFzskHkzaZiPrZxN7E1i68UPY2hYBZmBChnXT66RiYCx91VJHF3sL4PFush9LCo58BYRsBHk6m6gb6EWsLXUEZT",
  "key4": "5K15r9sav3vZtqmzvLWKwmf7nsLSM4oHVJ74VAjfnmTQ6xnQ3gkL2wSeVFnXcoQH2mdiBY8nxxEoysmxAvVosXXt",
  "key5": "5F9k6ofixu8TDZ7CraShLgQeiXsPbTJHvTGJBS9sRoyDFAsHUmNVqS5GCdNhM3m5AWXFUrC26jm5W7NNPuzgcDH3",
  "key6": "42pxVYbKEMqMLfkt36HGkyFmofTDRuYsa6byPy5dtiqF5xn9NnzfAWjafXRGcZAJxfA3khaZNNKoXrdxGc9T243Y",
  "key7": "4C6GkZcaRzTwVxQ1kC6vFJaexgEt9CFR4FgugrapsNf6e1Pdgfhh7dWM6ux4B1Qvj5g1ozYcWX3AYGtXdkAH2bj8",
  "key8": "3tMm4DrgWHX9fmdgwo5D1ASNz4ZFXPNqaGk7QLgDNiJ4QbFDr8SndLAnwL2DLR5ufg7gHhyvmXmxmAhiCfWDee33",
  "key9": "2D4jLjYZXRyJEcNywX8RuD71d4gku5RvR6aqYwigmWxKZ3hXP1BV9Rs1UJhBkr5VvFxbJvqM7e8NYP8NxCzd3wHq",
  "key10": "29NbGwsPcUktDFKWT9gBD1K16MN1ohFGMzWvkfdtYRA2h8ML2x665qrXCmTDcBRAKS1sd6YP3Nx4JcUtMYbSTdtR",
  "key11": "3ARNWCHmgHxRMANqLjcsQoz81GGkxePM3hanv7vKCvN3oPRqsv8AhqNBJNEEzrenEScYJrJMqHUEN6VojtUrPQdv",
  "key12": "4PgGCuDDzFZqp2F28e6BDs1GSHCruDKLVqvVCR9WXGat8XYRN8zV2hW4ZLdmBFrBQ1FF2i66p9yJeT38rgPxJ9iS",
  "key13": "3kYP5j47Jh9xFkKYZT4RwcrhrmfhLHAnKKPxSiBtPuMw2txzHxmfbR8fGQ5gEGLUwhJDjedWqszD22QFbQv7QPLo",
  "key14": "5DXSq1j6wbMxUx1i6oKavy4b36VkJ2D3hbYN1gM6vDE4VCs25u7GAEHEZCcr2DrPzdo1GJBtBpNrFpWQE5kxVc8i",
  "key15": "5zZbHQrQdTqNqErVBpfRYcm7SFNesdrSuebCGWKr3mj33g9QJbjtii1MZBY3TY394dRQqMyviB7T3RQjAAREZ3yB",
  "key16": "5dwg335NKZidmExhaLRXRKcMcuCMhUWjCeqfeS7LpXMXNJdKMWtWP239HHmT3queJ7KQV58uVsndNiCW5Ke1hm3B",
  "key17": "baRF968kF7fmsWZgxE1wbTE2ZgkrYBh1TgCKxobS1sXWtmsdzFCib5haY3Ag4GofYCUDFkNTpU5BWMGX7RwQVF6",
  "key18": "43rgqENidkwDKyY4QxnY4QR7DVBGAPu4d4gGsF3mnhJZbAMsyQGsmzNb1R7AHMtFTk8uNbztGQfA2zCPBdJbvCz1",
  "key19": "5VnnqZmy4xGEbofxMvo9aUcmKthRCCcswfAZgFNTWrPtzpYsUucqMXpETpKFjsqRHjFZLnmYhGcfj5sZRs7w47NZ",
  "key20": "UDZALQFkxN7LYQuYBWygaPYX7E9BfbEFJUHH7qmTGbaoXtWG5Lpvtrtjf5N3CxsCpKdp3u15GDQxB37qErpTeMJ",
  "key21": "3YLqhWsfAWX4b21BScDZV4QrxPgpcCC8rgtj83iKeG3YxsTz2okNkASu2B6TFiVubEKgx5xqd3wRFNd8LAbg7DqK",
  "key22": "pbCQqaYJtzpv97RvaMJsK3C6dny6cHQ38ADDHtG49Go4vdutsv2NZ9FMejJVis4uPhJJHEXjPRg6kLxAo5JR71u",
  "key23": "CCqy9xJNRDkPr6ZrX8aGEVBUQU57nK5AmRV7tMqWuQiBaUD48j3bWoYscW318pDo4crw3yKap7VYBFpXEZg7c59",
  "key24": "5pXqcRfHfBYLaapUJz6jA1vPodWdp6LiFF8WbxRii1JJgCT5bUk9kWrwDBLBJcEBwxbfT7QZViewhhrchDBaKCSo",
  "key25": "5onnZ3rV9UmVn3Grdx7PwtYUpCbwZZHDAN4rppLS5QdiNrhtiaSEeSAWpo3zxxMQXuDiQYv68EgbrUKdgyAnfF7g",
  "key26": "2kQYW1ZADFGcD9Rr8kXqsH5yE4nHcK6dgAg9A7LKUYuYshBzFLWweyS7Eby3TkjWPVM3jo6ALsaWyhV2mzk7MwWs",
  "key27": "5HptbCTC1hRKQZ47GnzJku1vTRvpKmDnjXeSgdBs3qpHkgTKhzK2SRgNfwWs5X3Gy9FMhdzuNgZsZszMNGKuZ2YF",
  "key28": "27EAJUrA6aBLPuoF6BGqKh5zDQWrUusepf4xNkKoeurfkNHbntQM8vKwMzQ4ArCAQnbFrBFfKhSx6ZjFznuAhWKk",
  "key29": "4BtAUDiDqtmLNEyLmtXCDXM4etWxqNVGspgxh91SKDCgCEjfnWXwBR7jfxEL9zLXoc3ZzaJ5tWPAzMQUoaebgXXc",
  "key30": "AFarYBWkcSxMqBxczgAX52PfnRz7TPWWU5GBWLJmvGs2P2CBu5nLuwG7fqdgvsjvZNqDYih86abL3ZidRtHpdXh",
  "key31": "2hWmeN3F1mZuV7AjwJyi6ArBEmiC27PDdBaMoQHWyAbNx3hJisRnTos4wAwnwt7B7qPumcqBYyu4dHQ2zGMDEZQs",
  "key32": "45NtggHQSMPTdJXJm6EegxXVgKa81WnTpLediPPL5s2g7WniHgtXVuj4SSNeFaZsDsdBi4k68TzKcX89oA1FQjeA",
  "key33": "5eBdjYbfRGxFhy6bBZfAKvLX7kpepK36GjNMfZ9ZkLFeT9qqWCZUsf5gqScBxcd4NJziS44D8K3cvVGT9KJzh8h6",
  "key34": "mMuhvypZRrp7bP8SziZYek1ApBVjatjSzdemkhCJdtT41d9peY79mWYXoyQZv116tKAJ32PxegJNNh4s4QV75TM",
  "key35": "46MVwmgD97jLwYrQd1pRRuiYESNPdJysyJmmLHTWR6nYSG3jpprt4BJ4uTrcU6gTGtkMh5D1337MEXSs5knN5JKY",
  "key36": "2effojWLMVpChX4sPGYzJP2M54axtQe2U2D9detXPrV3eHEFDXu5SQGdiCkXDtuREFoJyioJwbKx3FmsaYbBRtxw"
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
