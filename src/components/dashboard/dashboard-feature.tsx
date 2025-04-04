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
    "LN1zvtemHq45JPeTRXiHfMBSqGStadxNi3wJnPv37TTg93aq5ypGPYAqhHZLny3MsXD3ZNzFx4TT8TQ9C1GKiho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JgytGdp1jFakfs4sT7eH7ueacsjNcJrZXyNgAFKbr8TAZ1cnv289f51fq6trVhMGQmxbxGETwiRW5xhWuUP59f9",
  "key1": "5ZaWxt9VYc1GoCZfXgpPN6Mz8pGG1o4Uq9AiMn6vMC28E3GsaDoXFe8N5JAfPrmwWfAyJTyy6CrLVshZ7yzDTMeY",
  "key2": "61GaEEmaKmW42YBuDRR8hXTkuHzXzWQspTFPWHcYzk3o3eUCk1pGVCmfDTwAJTYRmhAinS6aqcNbGhEzAxYmsuGC",
  "key3": "5DC2be8pvADH8fCQHT5dvZaj2UCWSsE1ziXn4SPUevMmiSUfUwV21G7syZernLjTCt6fFQn2tbX2dRacSgnovCue",
  "key4": "3NtUnSZA3VbccYKHnPUkA5wfj5h1B2NkSRFPnc96F86P72mGGsUeZeZNa7dqNJVXngxXLups65W2PFYjP4BZD5BZ",
  "key5": "3hjNQEKdZi6ojpENVT4exybQ9GX5vAc4qdJprWSKiVM4UKnmdmTeps9au78SdZDyHn1HiiwTCA9Yy8Yz2NLfbdWQ",
  "key6": "jmEgjFAcYU4sNJ5t7uFAcJXmnPgqrK7Nyzuy5ichW6HTBTrVjzV4p33BUvv5GYqpj6P2hBCtjq1DrhUDZosMiRk",
  "key7": "5NKwUCFmoot6DbSw5GwzJFMKQTuY1PqCjDx8NfS1XcGsS9kjXZFGbinK1zN6pPs4T4fmReCWSTJhZDBSVVA6qqmV",
  "key8": "2u6vLm21YW4k5smbyiJqhKhUDQQsM36RWaoaaHjWNAYA6aD8UAeuCDbBYB8wfSw41VCyT17LFMdqL9tG2djrCj9w",
  "key9": "YxzYygTZehxC2F4Vd71C3N2k5iDNJB5GUr1ajpcq9v7XqJLP77LjjymNfN9RVnqVUVEfQHtgCxLyoMPBabQjKtb",
  "key10": "4rxf4a1zw7gC8afdPJe56QeDvRe4JP9ZtT2oTB64RD9kYn6jeBVpKESQRxK2q1xYvhRyXs4ZV5gF563ReU2roB53",
  "key11": "5TcpchjZc9gAxgmzCdM7Vvjgdmp4DXKPnSNKxETJL2GQgygDBLs71uKcg9racF2PqC1KmRP5FMxG6j1WijdZKC1f",
  "key12": "YK3QwuG6DaFvtncwy8M2EvcoEghxpJzqVTWUapk8BhUufsRtvmXQFFvsvQXnWoUuBDQW4gjuTHLLXyd8tCKNevV",
  "key13": "4o3XMQApBuhkGghbixVnWHyZaZiphmLaLETaE9m3McyjkhBu7N1kPi9S5A98B2WCsK31bKxvBoJE1J3sDSZdUKfc",
  "key14": "4z8DjH8rBcJmqkeHawMULZKC6c8CvjWFZLgpwDpxatAycx2h7icBikP1nH1DRTaqF7THC2dSFZm2J9TBUT954frP",
  "key15": "5WUFNMTHvYWX2AC4vUxf94sa7aV944d19Uhm76a9jLHWiMqUMuDLpcjsWXvKxxVuUq21k1wesa5WQq6evZX8Sxd",
  "key16": "5jjzXcGixgnnMdx9qhQxLVzx6WAK1BEwzArbnmXyu8As8dEUq9FtaJGYEmEV4jrZPQdG13Kq8MytCWR6sDscDAcx",
  "key17": "3sjhWGm33b3SNvaczEXhmRMNL7BUBZpFW6Rb5zXWeR42vA5EaqMoqh1f6ZUbSgLP3TKJeHXi7U7eJd4dCBXNT7pP",
  "key18": "5Fxy9c8fFhXzqTtPazGLpFSZwHAqbVy8eVY2UQ5fVFegqKp37VvoMcD5fnPNAVbQNikCNjQ1eGrtukkPvtzMb8b8",
  "key19": "2u3sG3Nk7XzPicXUgGoT19ej5Aw1q96dAP1yJj1NXbWVkQHwMteug3bzvHnHAMDfAnQWVW3AB5kyRemDkGEbAqHp",
  "key20": "4Pk9sntfN69vL4EnWVJtCJmQPTq2kSbci5zkwB1PQWHJSYRYbqFAxsY7HKPYpYfm4JGVfEf4SyMtxirXUhkUywSj",
  "key21": "4GZtZ7dmeMqkMR1cEaNSqNfA3jGbuMQjEy2nXDurCk5rBnyQY2PhsasGz2gjmdwXcjRRL95cVuRauisygXWHPYqJ",
  "key22": "yN2q7a7HVwkHRyse3tF8evnfN55wSWKJMkDDXpeWgXzippaAVFaRtKxJ6TuFZgC88q25zSNRsZHMf8iN6w2o2oP",
  "key23": "2rsjAngzYGindULdNbV9SziYXiWzDAktLvBKGbmjbjbjTuiyUjZPfJztDkiQXiW3YbpwL8QBXq159zqJTACenEK",
  "key24": "kyy8LBwFidn1EoSQa6Zg2AemN1VoEpjWwqnEctP3WZdUNoFX9Vwz7XDtqr38bgrEAgdBPUv8nv9iym9jnc7jmAN",
  "key25": "2QfKYybNjf3pvkvDaCiTKdWc55rGyAym93qDyqKemm3wpZ8x8PzGm42JdTDpszfeQpDyQEwZCMoSP67tRXwQYG4H",
  "key26": "5saYcWeGUobvQgQ5rRUMYSMCR9vz5zsBqPAH9YFBNEvkpNRj1ueK94cFfDR89K1TGUMydHvjF5dKnvDs7owgns42",
  "key27": "31b2VSR4LYPcmzrFoS9n1VNKFMuzUzEd4SaSjTJQ5q5bNxCKNY7uW29U62XbPof5WwRng7UhWi3HbgdQayTJHsE2",
  "key28": "3858CTJdMFcYwjKr2G6tWU1qxzRfzjyZ2oKVCCrFEMcr9B24Yo4dJkNKMojbabbiGhKfJHJsNDg2RuppNdTZn6Lw",
  "key29": "2d1eTeZxhZhz7DKioN43NcySdsKJ38LBmK4MuS8EEBug6BGYYpUc2isGLYYWwZEZEk2geY9XtWQWX8wSgGDAFWRh",
  "key30": "4jsR9eBMT1xPLWa1GqLFeZJKrRk1nwQ9X4JkpgdkbNqLHVVPXVmD6MygtmAxKMUFGVyxVHxvfanmGqn6m6fKZsmx",
  "key31": "4pfTuKMMHBGyh29bX9n9FmSyiv637T6b3SVdESrnJowCbFqoekk6uGHxpXKT1DQAYd5UDDYSuGAksio93fD1f4K9",
  "key32": "9JEdDVpueHcvMh1H6HM9jcUZPEvJtCNBwpo43STYmRyi1ZkRrRfeNZ5dHSsAjjehU5vYyXSr5AV1rV2qbTSP6Vm"
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
