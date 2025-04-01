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
    "49vsWuReJRLEhWwrtPrg6vMUcdxNEZk7vgD1foDzEdkiDaqRapCcJf3u4fujMvzJBJXYMqFaxSDGWimNwiUdbrzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfEgaW3tF9REAg4H1nBXDdA6garLvrZNq4zr67xVRLfCKTK4XmbmqKNimDzgjD6AHWsudzaEiyeTMGyLabsAX9c",
  "key1": "4Q6EuQyHRDxShRykP4YrH7ZcAYG2rxdEsHzZmyCFTcw1PukeuzAMBjjMEU8NvtRYg4TTLb5NZYGHAvW8DEfTcNwF",
  "key2": "g43oqrMNpBWqpkdvYwetD6E7RvETeyshv7PxjQygYKmL8fvKzW4TsjpFDs1PohcLvpn59sL86kauWzGH18kPxXx",
  "key3": "baBpF1SojWgZ2CxbUsxoJwPpyCZoqrMT2HyNzShawyXMKbCSnMkV6F76qdk5r9Z7GRpCV7N1s5ZTCxWzmkyRJNR",
  "key4": "2jvd5P74K9D86YZ4uAunDcgCRNMM2ZdDSDHXV3FPGqYVsPsrtCfuG84YrUrbR6JVGH8zz1Zr5CLvcnv2TZWH68j4",
  "key5": "v3pwL27ad9HChmCzi2jW8Lqeqb9oUu7einJqXbJiGAajV95zkjBxu6Y2b24m7gPjdFxLkqAt7yTJHAsfrBELftf",
  "key6": "wD28siSJ8mfa7hfGh4desF4S1QvGmyPgQsPKiEQ9H3ETt4gW2PsPqrabL9u9nYGczsYNV9jMWVM74V4oCerJhnF",
  "key7": "zT6Fy6gqUtVdLZ78wFDn4XciMgvEcUDY8NPnwdmUirzA31apsiyfxn8hbkntrt7t9bvpBAMDQ1ZEXMfAViLdrsK",
  "key8": "UqX1bDDS14qaZ61kP1DrzuBf8Nu3nL8niqifjPJL3LdnoN7gNBkTR23NxRqSUUvPHtDRYaTxtvkTn9fCwPwbcn9",
  "key9": "4uYBjmok79UxMGfkS5LQqhG578VSpH9txvrDjabhKNJUWk8Ai5fUshSf2eZyLKWdwMBTiFk4s6867GuYtV3RUyuj",
  "key10": "4bphpiZ97ZW42zkqKaX7xiC6wKR7xd6wEUwibCXYSSwdMEjvS518uHU9PKeVk9hzW6wGGo3XgqETdSVnyaNQ8gPZ",
  "key11": "2SKhDpkxZLAr1a2qGg4ehbP5e48Aro8YCr7fMd6NocZ8X3urFC5Gc4GDG177L3pSNuy8itmnUFPNWx1L4H7z8bPu",
  "key12": "uVf1odkVY3mWw4e5EcfToaNPHnanfi9v6FnisQ1mEefd47EvvQxxo22FUa8zGCRicu2gjQ1FYP2vLys74EknQ5G",
  "key13": "3KzHDpz39UiYBn1uCB11NdQST16kmrGeUc9dzF8aZSyFZsTdmP4nGBXRUKrv5ftjFDXHnLvmQX7x1sFMFVHnFhcs",
  "key14": "3ancMd6Becr5U9CdgXvquXKuScr3t7ebpk1PWGWfLvF6xdhzNJ9gHTAWAKBvtsH18M59jMHgf6Ts2JfGwrH6tXUY",
  "key15": "8kF73matb91nDYA6T3btXQdpYc6TJMxZ59aQ1HpTwresHZi4w953qzeD8kjgCjcej2xwLnkXJpsaepufjkzKQDf",
  "key16": "2VH7UjyK1Gp93VzjEZcTBNSKLjPoeJjruZvB6sLSLWw8eJ7Yef1VrLGQCFV9JVnn8mooMZCTx3NZL9ptuytUH8cz",
  "key17": "5cWYZ1XpK8fvs5wCWrS1kiZskVdw6Qv5rZ3YthRmaP3tgmW9gd2CAASTupNdk6UWDL4sQHFjwYL5kdvhnKHWtxpZ",
  "key18": "2AnMWM6VKTm7Wy52D222bSfqzKeT95n8xWxKV6FfZtnqySa2Kyof4nNxaE9oRmoNM2fFBtqijdUQKawpBXwmxdHy",
  "key19": "3Jcf9k9ekPMveqa7pAcXYW5TgcbJ58Nd6RBMVrsxfNiogLqV2CTP6YHztb4YVzjv8uckgTnnGFPzkWTZ3sDmVQQZ",
  "key20": "4t2BTncseAzMs5PpAouS9NB4jUArJLxkNcoTsc1PgThqwi2L12bP66muMDneZsVuKKFCoD8oChXiwqkzGUvVfPXm",
  "key21": "5PdimnvyVcvfF42WDKN7euFiABx2CBWi7hPeAACZiyCrR7N5C6FYGEQyYRzsVnipACE2GjrWRbo1v8Eyz3JE9YCu",
  "key22": "3ZUoijUKTZ3WbFMjgSSUuZsTSGcJsCmuAdtwfxxqnNuv7G536ociR2GoSZR1tZJZdPoXc6jSGDGr8zP84MTiasfb",
  "key23": "4UnkLYVv1rby2CX2WewwFPgDTBq7ZDra5rn33sQ3RLwhT4EHmSfEbkBXoNj6YjmHBH5EF16GtKWWf7jtLGW7CcP5",
  "key24": "4mk3crhLCFHaP4EWJ9UMFzVMxs8xPZVtxbk8cGFXnDmJgn8NzLJWUbtQa2xcbR6HbXfgGvjzrQVULKnLNCNoXidZ",
  "key25": "4NPAyU12qBUDwYKVVTs3XXLFUXG2uT1yhPUEU7PufG6hGvs8s8T26QaBMqhbzkjtDXxGC3pM5oBtJPSqYeui2akK",
  "key26": "3hYGz1PzoF4vgWAgzCtPJAr9DPG8RBxyAj2LZ9VVYdLFDR3WfSvw78DdwKysVYy7uXLGqmAFnjKBH1GsqMJwJUuy",
  "key27": "2z9F2GpdBmxXACWXnL3c7ct16WL6AwmXxeW6Mknq2yq3xxkapfBk79PcvKCqU3kYdknQAc1so9YCpHEjKbxzZquq",
  "key28": "4nuyWky28e99jTswRu3bHNEUp6roS6vVQKDnsARskmquD85PTYxX5rmpEjVsoK9itkZ7xL9pnhFMEkumt2hyxGkQ",
  "key29": "4Q2h5pCDQu3t1Boxje1vUVKEZnHhVgu2YFE27xD5H2EdR7LEmzPG6yjefM12gEaAjHx5vKzGqbW9ZRF5XH9K8h7G",
  "key30": "39f5jVKZ8Spe18Age7UJciY2FdFxdaff5YCbhd7Xges76sVc51HJVn2MT3sA4mvphNJqkkBoSoG73kaJDGbpJw7s"
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
