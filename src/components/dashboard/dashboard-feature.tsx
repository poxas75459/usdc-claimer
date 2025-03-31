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
    "4PxmW2SMz7o9fz3PgbHNYJrov9uh56jbv5scXk5eg9xPStApHW7FxTHMtA95FvzkQqCUqePZ2yd82ETBATdv5Z6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vngtipeu2HSQpkbDx6PPqiFcty3i4GLVeiZSHG718KEUjni2m6xdpT4TAuHPe6v6R9G4yDdyY4JWjbgsuun3w4o",
  "key1": "3mjiDvZ12sPaJN8ZUHe9WYxRRspqz9v8GTRGm5S19EQiw9uwcEdyMGEHY4WYUVkyxVunBJq5mEuFDzv7hb9fuezu",
  "key2": "6Fvmqsr6pgobEe34shPqWVsYm8MFMFf3ATa2erf5VszhZr6Mpc7BBVnJXaB85oH3VrpXXLkXY6s838Lu58vnsZb",
  "key3": "J9B4tYf2j3aLMZXRpstqYkt2mfe822RMDz4DX5K7iBNSFvm3cYq1B9SdxagoeQMgKWdY4heaJcHpX2LEeD9U9vm",
  "key4": "34pHiYT7FJifsmQx362uR1egV3J55bVjRhviNor5yUnNAPx6QPZj4eYUBnYmkbMs6aZXeGJaTfSrCP9ngvTV2vzo",
  "key5": "5umkKaMahQ79A9G4REzvoaqsbTrdZbcLGW88qUMfzKiFWTrGcBh5ymJSubbgsBhR4ux4z3YrMbYFyXC27z6jxitU",
  "key6": "33tzczUJoMyZAgNcrvkbvWK3Y2jei2vcnnjmTGfBRYbtaiVYrmBjbt6p5WJAFEf7nac3SB7hnESGiJZqVhi72ojG",
  "key7": "4Nn6jVFGKp5NTNWMewrUJQMqzgxwXvo9GxrS6WpVLUmE5LzwZhWG8F9NUYhrqGHJhTPty9EEJJG3QkgvTcK8jCK4",
  "key8": "24qQHiDXXjDqyxZPsMrfxbvjcG3HBK3cgWpNVQvnWAw5Sbc2G3RWhi7DujpuVggv7qgt4Av1UZgZEV2PdGLGQes4",
  "key9": "3XjfULmPi7EJWGarPypkMriH2j2bo3QWpt7XqwaMYZxjS7ubgZrWcxj5zzfeDKvFqP9mYS1y4tqxGEvFBwgqcFce",
  "key10": "5RfZPZdCvuxxtZNtLMSiTWh2QniDmzouvfK4ghgA4hXVy33K4Gxnohprp4LWyqkZYXeT1pAsBjDTsnaCf3aAfFJv",
  "key11": "4xFqB9Md81bYi8DTvpjAhFATPHYmUkVefdzfwUXrU3HxnS2o1HbR8pR7YCuxP7cCVrb3aZSb5eNeBH1diu64xCbz",
  "key12": "2MZkyHJUTnQLNzy6gFYK14Jxacaykac3s5YVvQ9zLDNuGiTZ6pCDaEo6nb8LmR8WyfD7qpzZte5TZjug9NB9NTh6",
  "key13": "4MK1ghAzdbNzvbgm9PTkkjewjhwwrhQezn8bmD9P4EmmxryHgqfbgj6PvpnqTgtVH9LpFNXXEBfYxs5wcnnwDJoS",
  "key14": "67YBXpqa65SmBd3EDh6MTav7HBgBVz6WH6yyM5sRjCsjupZKLeKXHZdzsbgi4V8Ht2GgZ9nxce6GfFb2ojd4Pea8",
  "key15": "4ZvQ5cRXhn19ZVHJYdJNyPCAi2euL34zsLNhFdSKsMvL1LFx9pnkL5LmjRaXLPVtdTVyrK3ktW91sa3B9m6VF7dU",
  "key16": "3MjfsjpD8k3YpYx9qg8WULFzxkQ2ELSrM3ypvt4jZ35T4yJU23hRuLAswU5ExWcjNJhGsrm3TNjPr4KM67nzgLqj",
  "key17": "56Dw6EFFMfFyAotyVExss3wa6o6FQTPPqRAUQDspb1NXmtPXLBJRoRN3EGRoFse9VjagXAJfiXH5GCVq6449D4WK",
  "key18": "5SS7sgawLKnQhGvRQYveKkA5qL73NVZ7xWNFmZkX7vgXY6ba65J34DoNwYNaBKfcziakpTn8yuDbGD7dVPQ36eLb",
  "key19": "4A8P34gzXoG7HXUPmD8BJ6namE5rW9N9iVSMj5YgrRjTKS9FfQYhLimm52VsHUchGqeHcjZsUZ5TBNRkposNCqhw",
  "key20": "2BdBA1xE4cmw4ENAjECVAGDxLC9WkcGAF8eX3XE381A9dLVQw9dUZFSaTiYov3zSnQb2B8tKZeP6Z8Q9XJ4fjWMA",
  "key21": "3usyqiTWWe9ZEw3rcT9Jzx2hS8kYUqKvYUuWnVa4C3ptReUSkLJxLLqUJNvNaw5DMmMxpVvkC9C7r29FitLGgaKX",
  "key22": "2wDZHCyo5AhUAJXCqR9sycHEuCBp4JB7zTZBBXjctD6N1eGJyMXgHbhpChzb84eV6ZPJPJT5LA9fBKBDmxU9PAhF",
  "key23": "4xKKSFzcoPQ7x43J4KhVgkfX5oUYiZMD4KiwCiRKRzjSWPSYQYtA7bnx6s9kZg8pDM3SmrdQmFahJjfkaRYLBRbk",
  "key24": "4j78D1KLmn6BLVSGzQcCue7rousqrL5tW2zX15xw7gP7PtGDTEHbGaBaRJb4M8C3M8VG9z422X8fW7P2moodNBC2",
  "key25": "4F3v29jr38FeNieaUA8vXCo6hb1hbTXrV1RvKY7NUg1tXYUAbDW2rTZZkY9FHQCXnfkMABxzJRCEE87e44WmFC2b",
  "key26": "47U1ry2n11ypfYpyVU1AbjA9xjivxNsgfnhxB5bzEDsFWyCUtsfcWNMyaZvsHEXKDS8vXt9HcyoMh1XEYUR8T7Bd",
  "key27": "L2smEoW9rSgyqhyEf8S4CUih9JHQKUfZdgC7ZwfLekPgRyk6ZqJGuU3EuFeJeU6eHXbWhpjVKGenimQ4XCrj8cU",
  "key28": "5ntCYp3T5g1qeWXzNnbP1MZUZbHzdENRT2HiggW6epY7jNs7xFJnmMcbNVtCX2o4vii252ytaAFzjS2sZrrhZV8s",
  "key29": "3D3qMGtGfceCep87cHbNnWZj1tBQB9gaMZDojvi1ADtH5BrYQPysp5kTdthezicm6MWGohKwPoTPfwXeM2TvtbBZ"
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
