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
    "4cdDFTtib5oJN7PKh618Hrne7pkTJxDDYpujFPstUi2nK1TVuWoysaAPQ2xnZr1A4fa7yK5gJfcdHnou9MWBPyfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QoUf8AuUTsv2EK6ZmRYDpTJcJZ2s8PR9Aaz8Rsio3xUwz57G7NJ6ArPeV6qjRbLFqXL6xckQB2Fe3awhshkSWk",
  "key1": "5CMihxex9vbwoRQGNE9CrcZGD3XdH9PQrgUfd6uEzAwRY6n4i3QachUYbzeA7FsXPekr24VhfgppEuitfNgQDFva",
  "key2": "2egxCU3B9yBL3pGtmqV6uc85qX1qLPzyuvMp1CEFpLUH8iLfie7UKzvACnNCJnx7BV4f9MBb4WNFq7cmqb9sYqNk",
  "key3": "3zZC5y6e3bf4bPPX8WQwKceiYxbm1ZgMHpAxWCE15DroNBmxgkGt4XR7UpUkzkZ21ERxMSo5HZKXHSQQ8TctVET5",
  "key4": "56EPMjq1zDWDaPk3F4QFgPABT7vks9GDKVMPnbB1WyrsPUFcw9y8r4fLWvRLtYWi6j6pmBYNBryjTaYMUXYyrTv9",
  "key5": "2HMAYtYnFdrueSbjzPfgBrdLcMwUR6sHDnZAj6CCa6Xh5gAaaGmJkQRefzUEZiq4jvvKSPq1xpkA2vwoqr8RohQL",
  "key6": "3xP7b6ye3BjSR9NTijnzMSEUm7ceTisCTCzYmU1NwRp6ci4rUhHxezdFdhvTMtJLdDMKoN3xmUZ7QeddnX5FqmZB",
  "key7": "LYoAs2VDv4s6iM4AXM5QqSf1Bxdb6szpNoRWaWjG4HBDsiSipUyowNdMZiHRRKkPABqU8Er5AMHKdGEdTrhCKYW",
  "key8": "3v5khtfMmh5dc4bFP7AUfRs6nyRwutupQUPwk4NTFNXqxHHrgG3DAwdBKenA4FSihz5kgtt7411op6ouowwjcxXJ",
  "key9": "5BNjiWg25P3S9D3B7d3YXbKjG8sTJN8bhCdy6i9VaiuW4CxvpUrDinMDaXGKR4XSf6NNuz2Lb1Dfe8AdC62i7Jb3",
  "key10": "4vBxVtwTJGfZ8ppQD9CifR21AbQ4YRHbG8zZCq7oJf4gTMPAw41cL5E7myv65KHswuRycHrc4m86H5Leb1hRFjGf",
  "key11": "4AXHr9kGZCTdz9iqZC6c1DYJpAnbKUnNG4Jru6RMPqzUha5Cm6MdTZJ8J6QgCTQEFjd72TAD1SvHt1KQz9Sd61ZG",
  "key12": "5NoPypPXtPfYuzVg5QjxFDSFvHiEsvomUe3rxuvaQhT6woSJnztdQ1xkaWczfuXzfQ2rw7s17saK26LYdFLqaUz2",
  "key13": "LQkdWbiX4jhQqw6wKvA3iAEhAfrCuthojybnFBPWF4KLbSjnuXp5Pnvi11rejAsvHJQLNmzJQyZNZCkXHuwxzYZ",
  "key14": "44QnsGUYZ6jHgWmejQzFZyW8nd322scbt2rxjke6Ty7ot6kWXzc4PErs1X3UJBQoZPikejYyrFN5kyz18aHcg2Xc",
  "key15": "cber6VSK7NXwMRRtmP4orkmCcJu1ECxoKG2b7KDoKpvXNUtAzsfdf9aVdawZVSMHFiW1nYMJZXArLqVx2aJ4qBA",
  "key16": "fsJUkZZYxaBr9XQuZcfU2Q1WPpNEMJWxMPEeamAchVTfsJzKDcdrYsFFjL9762C6sW9WWJwC4oPYTikNSK1UH5J",
  "key17": "42CRG4HZnVvXto3QMAL8iN7AkHavXw25obm5v6rLoUTx7K1Pe45YKWL5hzT31J1rHYYwRL3tzXmyd7oB7UpwDqPz",
  "key18": "gNRwYT4nZyt4u2Zem9ag2YtRS4EaeNSmkjdjKMGxCc6a62Rruv6Q8EWrxyFV2pdJFPH4JsKwXJ8vUpHJUttxbnx",
  "key19": "66sVqZgp3KgejEwSTBtxyGCsbWKvVXHSR8oFDdRUy1mNESP2qZ1Xd3zBoK6dwWQ6L2gSyUGYFK4fUv2yzRwvNWKX",
  "key20": "2SuhQ42tTV5EKc3u1yckg6Gpfze3By3VohiybG1UNeeKnDZBZ4rot8CXMFm2no77TnbEEg7sy1bXtyszpL4W152q",
  "key21": "4RQiG3ZFTf88HdrEhVrMvnUM3HxBvzcCaJihFfdEYtLToAtV7ux4MiVqSekast3DGCZvcTmpbT8rpFiBd1SrBidn",
  "key22": "4QZFV7pCzCm4hir7xBXDrrDnEAcQGgw9A9gpbhLz8sG8qY8DQzHGL5Cj3hvXq5BTQ8rLXL1CSKhgDysXdrqnzj6B",
  "key23": "3Kbv9NChHPBSHQd7urPKUw41bYUbVUC7KzkGnjztdcV5ooCh2SdkyeiQMr9jJZxDHqdBSWnbbYGYsGxaoZJQBV4j",
  "key24": "3pPqaGYwi4JWHbKd3uwJQQyBNgL2jaqTALa1kkQfhsohDEsJfXbJSApKo6iBBaMAby3HyCaTywnHiXeBn8p8xoFF",
  "key25": "2BaiEBJCoCRTknT6ZMJC8uADWaA8d7se2j8w9w5tW7suzCwQAmML3eg7YTPy4ViayGSAqGFWaEvthr53En9Z8W5J",
  "key26": "2uNvSYKTzMsc7MtsZgHbnBGhe4Gwoko3kmCMSisZCy7YSVLMMUvFNN9179ramM8xGHduPdyyUTRJvLVGyAWdijYt",
  "key27": "18TaJPzSpNuJAyvKchv42ToaBiEPuFxfpeoo4jLB6moaPEJgWeHPDgVA8NVvFRmr5QGVVkzFq2vttsVpQrkrs93",
  "key28": "5RjwKDoJcCXwJdF9ifj9WtdZanswQPPLcrwiXx1YC9BhFevaqsEywWND6qqPYQmMn1kmDmjD3txCmDSXgCxpJuc7",
  "key29": "4RmkhqABRpLkDL9xGiwzJXZeqrMHV9p4i7Wzdp38L2k66YjEajNq8PK4HQvezvdXAHBdiHVx1KKWRjGKmfXtcgbf"
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
