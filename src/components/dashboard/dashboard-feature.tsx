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
    "2YtCsPU13coawxadYLVyc7QWwBcNHS5pCmE9uTcCjGdUWCtzb39nMEgDtmrjZtmuinbUQiHmxoLHS9soJdh6ic7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZcHzBwtqZrV6PnHmJjVPbyaiYkPtfqpdKFbHVXM8iKMN4u9VETgNZcsPwU3e78FoTNGdQMPXXWNB4W6SQnPLf59",
  "key1": "244EtXwE1bCVJ33jKdDHmRFG3om6S9pjm5EZLddJGinnMYtRErtn4SwcyMrC1nWTFJYsi3aqytbVTwy9hFDMxnNF",
  "key2": "26oqLuVvt4zyxMqy8depn1vjeKspZ2fff2MNyFRdRsWHrGHAPBnrSaQkVxskRo4QGcvfzJR9ZVgjz27U3p1Hf9nF",
  "key3": "4AEcspkyeh9PLRdQSsc1idjXGPMuNyKJvNXMViLoBNbQ9GPJmQ1fiPvfEHhgqfQm4R68Lv4riRFAneL5iG9qdnb",
  "key4": "2fFaWqYZP4TWzzw1D8HrTKnnUf4yVZcHFsgZWhB2vhhAboswHQi9r6ZkiccRdAWfgYMTvJMMGGb7QN9APAT2jytD",
  "key5": "4v2CYoThFwp2XSVUcnzNCf9ZnPkaCE38oU1L2tuj2PR5DLvUMVKxsgXmSwuvDnz4KYnFjBpnp4KhupXC4jNXsGE2",
  "key6": "5apo3uuE48fUHHW5TvRZW7qPeWcULuaqtahhsxjQGKDm2m33EDHvjMP8Nk1terC9jCuQNQ8aJa5ipzdZ5XNDRs6D",
  "key7": "5ZiiKyd3n812VJWYSRgQKP5QcPtJ7bHVaS8LrLMQVCzVU9sZYHLofsFcmZ35DPaxAERvVfrpdeBEvKoXNDcb8N72",
  "key8": "3FYTn9m5ggrBRKXoHbq51iS7vZp9jsip6vzS7sC4cJhehroB2iMyAcE9x6fDj933bWPejU3J9a4U5f9PKumgyyJV",
  "key9": "xRezMaUtoU7zgpXMgC3PUbEj3uHnF9YPpD5ExLhG3h2AuzueNPfwRknJegNCdtubnEvbsdxytG3BHYRHFYqoYvY",
  "key10": "3AVZjVujECUdhRjCu6v8cPmm3s5ubHdATkngAuyfoJvC3FvGW2opJPNi54MfTBC8HRNusHdYCFajAz9GugEvLNVu",
  "key11": "4iqC9Sn7yMHJijE3TdGCgFs748cmosTN3bsT454GxjnNBYc3wRnQysCPnQouaZZjpA4BrqDUWFJQtey1sorYiGLs",
  "key12": "2m1EorKXzfGFxi8FWwyxjbLxS2GboqjrLaDSSz3Yp4AFvN4Rsvfg2F5cUMbyfJ3vV7bQp9pSeNTp3E13hCLYHt9r",
  "key13": "4MiqAfabLCKcshUT9SiULyxzbeNU1ZwGCATLrwXhHSCKfb9jWyzFchRJ96L1vkrpVogK7UQaFCAXp1xkqpSEfWNn",
  "key14": "2uBXEE9B3nQAcGkNAzUWMYc7f5TaJ2GHGHsBxqgWenfpb2eZEE3MKU8y45NGLDqy3njNhih8zTg4vqBHB6SAqDGC",
  "key15": "22aJstMA4D7rd7NNyt6ekBLYvZRAyoY7ziv1fbGJo4G7WvWFpF5Mo6JpTe1XegySimKwweMy9mvvwd4hU91aWSu9",
  "key16": "3fU5H6Sax8Bhhc3UuGzgPsMpcRNWZ6xAhXLRpVoRDfJTBMrSigHTVXrKFwG49uxEVgqQ6pLcMUWf8PePWJRVkMti",
  "key17": "5vk7tzjxZZk74j6S7YJNDQSSc9DeWvz6kpW3JZPrGpYKeiybk74SESqBtbm96Vyy5Nu6Ymua9vdChy35pCcKUh7K",
  "key18": "5HnJCbn9nHsQ8HSaBUgXofM3cN97NiHXQWiz5oe7LQr272o8uMzz5zt1P5w2TDjPNMUiUX5UTkGM4BzfE9Z94tLa",
  "key19": "3XP8paibu6TeoWDwJgSuzKAezTxFBvaMNcHHqKYzMWTygxjTN9LHYuSc5yy7FimDumz1APCvE5GbsQf5PmDKqzGo",
  "key20": "27F7fWA8t73Ct6wruw3Zano3JWTkAEtyNznDMJqkTPP1DgVCsAKAQNrknD32NzN2dgthvAy4pcj5mVAkQmdTSefU",
  "key21": "GagvZyCjaqcDhVBHcxG85fMtX9gac2YX9KTUMmt64t2Sn8UQPjNrDn1keGtNDXUkQmBQykNbdtub7cGiwRUWUAN",
  "key22": "cK2SmPoFAGHPXRLtbsFWT2fHRnbqPaLhzS9cu3v28XLmJYuhXkaJ5HoPp6iuVTi6B81uUXXuoVeq3PNJcgLkxap",
  "key23": "bsDxtUKkmqcnSwKwZgLdFbdYKPbBhfHFnELEB9BeUVYghVzLFj1xNz18HwafFXJku11knLRwYWd4VFoa4RqNhGV",
  "key24": "5sGs5LucFfHrABHPWnGPpQezMsdJNkBzS3q48dDDqoHpdw2oBZxfoWgB1RMZW5pUTkydkZYeCJfYhbLXapWHJjhp",
  "key25": "3RttgzJmoR4iB8qtJC8AesZExdwM3ovy3hkcEDkUwSAUGZrseAmdEEkWqkZWoVAAFaGnHqkQxXu7FK1BcQKDCboc",
  "key26": "BuQ2EFRLn4xjyXa6qU9tnu8RbMERbAwc7weSRdYCkLdbebp4c1wswnE4SrnKFTPoZErvbM6HEh1vmp8wVYFY8Uc",
  "key27": "4RrGhqWPJtSFrSLkzpAUUooewTS2Mu9GZrykVNXRyg21oEGqHBLssoi6FZxbvUsBzYzVLdBuYf6F3oCXrDaMgVXr",
  "key28": "Dm2pznQxV6G6wUqAMikpfxvEhhjVCAUfazJEebVZ6ne9PfDJb7Fi3gjRtVpccEGgqrDdS7JHZRj4q7pvkx1EwEX",
  "key29": "3tUoWSD9cb24sZf8dZwxRemx99oZeY75i6H3ZcR9LJ9AWHsrnwQRU87rL3wMcGn375R4Ch27BRxaTiwDqG4PcJKQ",
  "key30": "3h79tcyHQuGsz7uahrkH1e1bDojXWRWmG1sX4SRh9Dx5ZqXS3GNi9GknWawSmYnobyJV35gc4n8hkXg8Ets4TorR",
  "key31": "3tr5EGVgNx8Qi9W42pVV49hhALW7QWx4q1QZUkDheWf7XsnMYBQXVbSZUSgEVt7qYjvqjCNf5PL11pb5igbY3AvU",
  "key32": "5XaL9hBWqmNVA7TzXk2gFD199CvemzDQUHb2t2D3U5iTU4Z7nLyop2G9p5LFLVT1Mscu2m6ugd8F9V3n8tEd9So4",
  "key33": "kC37s1vbonx9UnF8FzqHGzbEziUG6XQEmUaadvsSxJoy7NRxU5pQDs9aTQAegtHsHdqytdViHTVyAwrzjXnBtef",
  "key34": "Ers9YsEy3R4jm4jPvuR9r8gRV3ZUyX9nitu4wFGwSrkHMYn14TgX3zkAZrDGDfkbzv13bGMscypho71EGzTrGbK",
  "key35": "4t6SVzDTf2fnvS62AbdWzh3c7Cr75xLr3CCMaPocg399maakcRJBbDYRXzhK1pkii35M9sDcQdtKZZXtgdJ46wUr",
  "key36": "5yCJ8djurrszDtWQ1bZiCRqAz5UETiRwYbmxVZzRcM4rewnvP4cCdsya1AQy47ZKhLAyRyVzF7FSMsWJMfNDhMBe",
  "key37": "3Xnd2GN61f9aVFiUDGk58dV5yhXCaj7zVZUzmcNLHoo3tpEuFRLjBiB9ayCbR8MXpTm5gBLuswsATAkfh4ePjgPQ",
  "key38": "2ucurQEGhmLTb5rP6jiPuSXJMdc1gXT7hccxFtneWiAmwCisTMuk36jAcniK6UXaKLvbJyZCoYzSs1jo4MEhdbDF",
  "key39": "2zuVHZLFvrJNhfKGh3e8RiEFWGSTr3mgNTxF3oPfgstaxUQK2zDUcswoFXq3uGaEVrFvjgQjDBNAFQD1jssZJdcm",
  "key40": "32HDQNre1r2nwbbU3ECtAiHvW3rL6t2a5Y1h2jsnNQi5gvoqu5ysQNwQYAFUMiftG512HkkiS2ACidvuJj2yJoJp",
  "key41": "4kX1177gSW5tpKeP6ageb19JxyZqwaXhP4EnsppMAHPVVtLpxEsi17o1snx3gBPUvnWPJ8bQvH3hipdeNcA5oLn6",
  "key42": "2p42srh53PtSZWbbSbyR5XZfBnJAdvbWka9nAZ56W2NXDUGd6T4JF8GtAVzcXHGrdQMu6X3a1KbMoDhBWma6curY"
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
