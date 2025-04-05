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
    "5TwushdgbZz9EZA5MjezTUvzW8PfiHdnPfQVje1EndA3waUMXWHZmmvnZXYDcFEBgQyVacL2Dw56nazn2YMQhMLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAnbdA6YkzymYYSyk6Poc1YCzNfx6a6gADYA1rxBgR2F5tmJ1DEFeRfmSfz475KiDn8GTS5taWqoTzonU9tsXF4",
  "key1": "ebT9atF56JjwgCFuJCp164JJ3eDyDMwpjHjW5ypgE8g6m3jqNG8TQH1dKCDG3yaMp5JUZNNAuw3DUWZJ7wDhVUd",
  "key2": "2TJMbVqtimQgCVfuGJwC6bN7YWBBZR9MBtLiBYsv8vAoMyfZUAhLkCAqZAtNrr9e8pYSLtQ41ociyfN9KGwQ6sDP",
  "key3": "5U6Njv7bjytUfw1H9fq5nwjUk9tnoJKyqX37eDLApxArNteLMnMtz4htJqFfNTdJEwqSuYEfY8ssJ5G73Lk4Nh9d",
  "key4": "5AeRimwdyWWXkrPNHtMVFbvi85pgnLi6BPhq7WboTD72yX1BiNCzAyPRfBY71ZCRsuxsximwEiubtWJqusgYQf7G",
  "key5": "5inNBMZSatS9Mn61sML2YFAfpJ9f5yQH8Q9ogK1zf1bc5AuuQVhqdPKRVH4qj4x9cirTcP1XePqfwa9qEnEcBvc7",
  "key6": "2XdQ3jMHC924Zsy21ZghwdfsFDoio8qWmegaajjLttHrRyeDUTno6DMAfv5zK5EZrArV1Zico9ftsbEja9Q3X49U",
  "key7": "5x326hJtZ6MoRWJLgWRHttw3NLDgofX8YWKNxEcnxYLkGhT16bqJ3ZDT5nAf9w3zHCBVJqoMSPeU5W3xuxf7P6Eu",
  "key8": "5e86Ef6wNVNGgoagt7GapSR6VcSGLhtuw5hJ48ykhRG3XB6bAiRa5vyCP2FFhXfNDzZSNZAXQJXRV643eC9mKJGM",
  "key9": "64ybkd8GCZKbuZWph5VYW14ybMYGCvLFVM7t6Bx8nyKDKVzvrJbieF9Z3wHxMYbtACrkMVNxVGHZUzYKA1UDth3Q",
  "key10": "2moAaQ7En9mEndsLjCouvAajvj5GL92zvobRvfUZqfZWnVurtRVDDHiz2pPUbFxDkL62ST2AqX339CGiWWQ4rdaF",
  "key11": "4UHDiTxrfhWEY5o923L3ZweQhzXR8AczbsReE7j6uJ4UnxditpPmgGtG55zTQxqomuoyEZycwRHdV86ZfsnSaby7",
  "key12": "tMqu6bNmf9ZZGc4o1QPgr1sZucFKz8aEQ2LtJ7EE63rvexWKat1Q2fZKUHqZwSpHFDpVnkR78md5MmotphSzftp",
  "key13": "2bxEDtx5z5ZwPgqPtpK7UvFf3DMkEwdpjPBDcAhGfVgVPzy4FZ83TY2i82e1NHEGJpzmU6nCwq9eo6ckhbCNW6QZ",
  "key14": "4JL7GthZNAKBqGH8AbvEAMs7dddQjnzBd5EutPH7NvBcVawKvsvhK2kjUDQxnDj6RLGtsifr8uUEjc842cc5TRMH",
  "key15": "jZT5brPTcjhyKDqJqpMo5ffubXyBjWbouJNt9cDRQV94EGSvWXSuBJ42rHRAaJXDgp5VjwMB1x3XmcfPUUWBkvP",
  "key16": "3UBvH3jxMUkBwP2KADz4pjhAyr3JwBy4c3RPSsoJ9WKAbCcdzPjmpZRdTPuc2zcGRLRi345oeyNkzAYgtCapHfUY",
  "key17": "2o55SZg9nXTivTX8HJmPWW77ED6dabmcsUtz8TvQuxgDd8oaPsEzjeasUMUf5pwwbmwGoiAkiPcjizUKbs8oJr5H",
  "key18": "34Y1Pia51fVNoVEUC6MRwgF3833XKx7Nu2gEL8qdaJfmxsWLAWbUJUsX84YwkvAGyo6yWTxeguJgPVS25EaAZoyQ",
  "key19": "5TKiw526YjNZhsHx7KfpKKZ2tT5EdQ3K5PF6BgYPpogyse8qf6KvCuXyS8uy3WEef8GGPZWvhifikaYg66J32WRR",
  "key20": "3z5pB8dsoMzFuhaDzmr5c3GRN3pdBfq4PnjgNNaYEMmcJd9C2kJujUV42GKEc2zpSpwrYLhxjYMto38CCpoFo5Pr",
  "key21": "3mRm6L136kkSCpSFB9hnBMFCnbhzvsqdTueWLMKBs8BSKMKYnQQfhodocRqWtvmdjfdTbvLbaTJzjE7QBNboS4ZX",
  "key22": "2VFLJ3NCE1HhDvSxLr46N1AceeYCbAFwKJoFfbo64jgwgWsjLJqrTHNpxBX9Wu8ELvHydywSuKXPNrQPRjamhqGb",
  "key23": "5cR5rjKBcsfmebD4Me9xGheLnvw3uxgSucB5qZ4LxXDksa9ZagUgPjZD8yaPc5qgDUjK4HPWpnSxx9FnpcUfdfi6",
  "key24": "3BnRCn7drc6invs3Xrup5yPGfsVipqmPufa8UTfu3GaruZM4zmbkBwrwnBPtkWoZNygE4VZgYqZvvhmRyWhjzKw9",
  "key25": "2ZH2a4pjJqpSjoEL2erfMs7sgDzUKGzLM3JShkYRzRFzzL8CvAsHXn5AbTbUt8n3V1MEuEudJvQbdybUrG3zwbQF",
  "key26": "4q7SrhQ9Kn13YR3EJaudoea8vVgagRBXSDot9X4b2yDBsbyZb1bh2SVR6q7jbRmCBgYd4uhzSwQjoHnJEhvTYL8s",
  "key27": "JXsqxbvE2V5EwvpCD6MoaDgRFt2zjz8DdZGPwtDLZ2bY1YHg4AxFxfhv8fyA5NQNciRdecZh72ipwDeHBDgx6UR",
  "key28": "23P5URipLy8Vh51i74X8ofYhmSLsXdjPDghzU31gRq3XpUzTMQXjKVzBwFM1QuD41X8byPWxmZvPyAR2BH9kHxUA",
  "key29": "5WQuXenG4DHyCzGZkTsSPHVzrpNbz86PkFNdCSLPCFVnnJK2E66M9Daq2zRYghQeAG2qfJa1bLzyioC6SSKZz32u",
  "key30": "2cQZh7PRs3DsBgtdGqgjyGEAVjgvYAyFEQbVJNjEp7ufKNsybK49bJioLHp7oiTCpHJakDHWDCpkCHaSd8WaYzTk",
  "key31": "3Goae8qYpmUwDmvySNiA8ynrdKTgUBgWK3Lcc8nxUtLWdXyGpWZLuS1gfZ9d3pfQf15kHsV2ZRS55CaufAyma2Vk",
  "key32": "54xPYPNah2asGcbZPCLyFF26dnvKPAdomQAdAueVz3wy8Q3i3CM5YjCRyyhBJZLDnqPBZAWmBQEw8ba1jDH8yRxi",
  "key33": "2YAkb7b5RoWnwpce487DXbZq8NqhfTFWB7ZLB8rbL9pc9bv4t8CoGrAZMsm9ieV9kQnbpHCLWnDPNAFfPRW8DK6v",
  "key34": "3YQkzD5sjzXjKVdbFSAt11aNSXqjBJe6gcuLbuaw3JLutD9iqgPz4QF6g84oLfzMjhAViv9HAYuJUyS9kyBtqZxS",
  "key35": "rpWW53rDin4VzpYC7LAqE9Tzg5D2pqJQG2NiCCMjaSuNGVH6fQ9Yo7iKW8CVGS4JXQu3vJt9mj6tb69U1dn1uDM",
  "key36": "5HMA7UiyAuNxYfZxzmRmfyUPcUEvKT9ma3ZNVuE1YQNbF5xj1mZhR7C7SpVNXtW3uUNHWQ1NiG6QbkTeTSwkz41B",
  "key37": "598wTnpcMknMpegahEi6QtczHR1onqzTG3Zea16zteSrf5zCgmsDrZerXmvoGVJyLgtwmhhZesTWmkTabLabJMYo",
  "key38": "3FzwDvzttTYrNrNi6174oFcoY6wHVus6o1tgYLwyRUAJUzfXLjpUswRrqPLa2iYwoLd81K7BCSt466KLkAebsrNv",
  "key39": "3oPeHurwRE2HDbzSriQodQ7TBAo7MgA1BR8w7bg8MM4dfLGJif2ubKSompEPgyRweHNNkfwme3SCASSNJ1UKb9Fr",
  "key40": "63dhgSFSL7CjCErAZAuq75FJ6NM9CDbpXJD8tGnMrBqut7DovejUGt19P6xAWKQ7BaFzcqBfeuxNnDMMWM9uaSLG",
  "key41": "5pq5x9wWSNqCGyE7skDEMnGFSs9SgQrVLVk2yMx6oCs7cEB3xHfAVeoMcdcnsiYPFB6REc2ZrHfbhEkFT87Da1MG",
  "key42": "4t5bbZYAHZLZdQ9r28N5Dkar1o5ZekDP9vFXZL7Y8MBNeSff87aoCPzivLcHrFYCXKGobhtMCKSRwez2ewYjf1EJ"
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
