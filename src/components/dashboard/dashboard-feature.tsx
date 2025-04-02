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
    "MHbqmJgzCqrSMTscotccAXRwDuEiYDZ7CihB3m5Wi1BTYg63dqZKnbCw5UtwXkHGfDjtSwPpKRMcPzvQF4VxxoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzPcv74RfEdkMohjPTb3S6HD6Jxn6AAgvYJoWqRufXT5NT8Kb847bGVoog4knH9QzaW2LhZExvVgyKLYpQ4oGt7",
  "key1": "5yeP98oV8u5MnVnrdKF1eYN7RjCxpb4vBo8NPvfW5UzLK3vQv7kb1ez4JV9SJTZZ1rQQzXkKg9GrvZXDXFJgt1cB",
  "key2": "2xTTEntGBuFKKAZVYpRYPrWDv8s2NqkbDGc8nBaEg8sDLs49HZweaRUpgpdsjAKWMTH6fiZYbnZvHLZwevExvtD4",
  "key3": "38ht8yVbP5xwzke9CzK5piX56Qb6GNUVZSCmeoakLAB7Xc58bpi8eUoxmKjxCzMgKnZLRCVkKnJKH9cb53CNEScL",
  "key4": "3Bct4Yr1gGB4rXxoBmb3dGVgr37ViLdwQkLkat5wRwmt1nzFehVg2wPvVqp7BDGVFD35q8jW2xuVZsZMKfyGWRX4",
  "key5": "5RqcdfKzEk4YvUJoq7o2wPkpvAswKcgaz7fcGN2iWv7fNkEMgMsn9Rx6LJ7NLFpPDiXzPZYNdnaXRpn6F1muHMRr",
  "key6": "om1PWDHKT6zoeNAX75ErrXussBzCB6KSGqksaV4ThFNMFtUKyfdaS9CmTZzkpbesHWiqSCDpHiMSwoaeu5kwcDo",
  "key7": "3G1BUVkVMpsHghzRQd9AQFVZjTy9zuvvmg9jfiVUTxS21GC8j8aA4nrJF6dmSE336s2c7oUv2xbWn74Pqk8qUhon",
  "key8": "4BU22D35a64VtztFaFBR4tjf9RzxXUihSRd311Yu6N5Xxes81S6yzfVSmzXywPEqVgT9r3Jt6oxcvnVpTVi6Kmqy",
  "key9": "DJcKadoEPnBqw6hCw9R3SWYjG4T1ireRHjT89VniSBvj37PkkvY55LQWTVqtZG24nhTQuxhmpjVmBz89jf7Pe3n",
  "key10": "67NFPxLrUVV1Mup3sVb4YCibwdGGnHgx4krE1j1m8yV17t3aBWp3Lue2GE5UVWJvkTc8JujJujsLjJyyaC2emnQq",
  "key11": "3jnvuLuwL2KVcsE5zMg1B8sRCNRqn3CXmhJtrovui5xop8XYRJswgNdMwuC6ffyZD74SBk5B9M1GCe9T4YFQVjsG",
  "key12": "4bjysJpf1RALWAvABbJbsyss2GDFdb2pm7fUEgTqbPYEGLy5WAazcEKDtRxtuYfbZBQeNCuvzYVLe1M6manAgGAd",
  "key13": "4zLgBpnTtxTNs3aJhwURgTvf2uTtJqjmUGm8AUZT7QPHzhzPKV25ejxLViHoSEJvmq3EcgP3Rh276Ffh3UvFJwVj",
  "key14": "RzXag5dc3KdRB6ryGaU9HCWXTQhfUJdB3tUqnEVDhwg8EwLw2P6PGiZVTqa8fMvxc7bymB5GPSCNB1wEN9XtwtS",
  "key15": "4K7KBFpDdd1HpmaB9L72ws3tVjXFUKze3aEPVRDgXmd3vKFJx6mcc9RMp6HceWiNqA9uD5JKCPkHKfx9nvVV137S",
  "key16": "5eJFnCRccm98yGD8sNYpryDTytkaTgwPDVwqjjFcpzQWtKS3E8SKA5Mhfp9S1WjNqaWidn4EWYzouVtcYHyZ8bgb",
  "key17": "3ZG6TBXV8hRhYqgLYNDZJgEtu6DJ5eBwkjsRVjZCfiseNTFGBjgHs3Po8XHq8VoFYsuoCBdGAEKvZ6ytUXbFzwr6",
  "key18": "4bb4WQVeYcvhYVQQbN9jRS4muqc3JesVpCigrMkMK5eFjBUV4XGUKtjpwSWxvG5ThDXqZwrargAE6moSymM8Qa7t",
  "key19": "41WrYVvsfG9qwLW3F8xYRC5dGG3QDMi8EjVK2ktnzZMQvGogZ9fWfkeQWTsrrabgaVv3P2f54MK22L728LJjUNHr",
  "key20": "45EnZ44tfLVjcKRikZXzqHUEcx97dYjg4kZ8SFeS31phDZ7yy4JWiNHTF7Fx4i3AfYMJHP5Pg3Jp7bwQ6nHHcRDW",
  "key21": "ST5aS7wDDtvVwU7cCGHiCEHGDuV8HM8YdKd5A8gMa7KW1iymZTarfPgQDaJb6A5pGK5BqNbLPqaq64whtTsQRpR",
  "key22": "2AcRtRFNG1wEs7jiBuPrM8AqW6HP9S66bwH8Yz9XNMANzAY8S83AkMcZ1ni7Wnf3y9ECQofD9pS3eZ3KrApHr2Qp",
  "key23": "617ERVR2mo2BmVoWEECc18vHN2MBK9f8GLiFkHS2z56JFFy8mwAkrGcLbSqssWm7UQ5DnavKzktQYmzjMMfZCjzo",
  "key24": "4dxjmySGLuMp9SreBNTJQw5uBdDA3Mm1LPn98D5wLSscmx1p79o5MRw3ZaNGaz5d9KQDnuP9uYjt74TDFSZ322p2",
  "key25": "2gt3aq3fem8QreqpUuU51bJNM29Jm2zJik9SrmyYBVVdCHjszCbs2EhrUH929U8VkLmGfeFG2WsRMiow8yKBDxTY",
  "key26": "645Ekc91GXAkApHYf3DuqB6YdgrABoTDNDQ73DiKJFkoHQtvFKQkA1DxkRtvdm65nSbPsitb2rjkebhz8yJiX4np",
  "key27": "2DXN27zpF84s2XKswNuMVvhzwjRejnb6SnMYWMSMyNGEEHu4u1wncvwn3HSkvfMMbFurBdccisEixv6f8RzN7uMP",
  "key28": "AKjWkfFSUuLugifgWLh3fzhJ88zg8dLEVNSATtqsPG7VXia8FUs6VDrbxETCksseo68TQQe6xMRTw6WPci4eoC9",
  "key29": "4vYf75JkyLVgV2EeH6zvefcaUZZhKeJKJornvwrXHQb8VHL9cJzaMWY8w6KuWbgYno7VYZEauV51saPbDoSSEzkN",
  "key30": "3yuSUw1KFpfmtgg1vceFQ2Np8m6qtnbop9bEqeRaCddnTwTwrCjqAvZm4qzp4KipGpVwnaE5uiMhdpiiSYZTwtNm",
  "key31": "4tp7bbvWvoWJ4m2Rz9M6QDuSMJWPYmmYLAkfPUxVwQ1Sqz3Rv6QsAKgkGHy5zMEX7Wg8sxEg2jS8sEJJLYB5QvZw",
  "key32": "48mifok9bQs2L2NkJWSSBDmkytpRF4bsigwWWbEBqSzxLhpKpXogGY3FsSN9RG4y6tD6B5NzWd4Dvy93nuK5rwRv",
  "key33": "4qDkNiSCw935rQWTCx3mn3fXdPPAh6asHCe3uTs6b1zjPuFgRnWEzSKXKci22zsqToNuDLSSa7KMUntehxwCAfLW",
  "key34": "2GLsLbaAT139uZzPPTazzxgzn9Qcys927gApmyJdnC3vhiu5zyGYazSNJGWBfCzyD4tzqUEqNJ78334wwbqLhjCF",
  "key35": "2UWDkGQQZR4SdWzBFBTeYmxLdYkhpWaWpfVN8LaVF2FTLZYbdHgPc2PLYXTjBwKtynPALPVP9c2TDH1DUBrvYtBg",
  "key36": "2a8hqFD2igmTBWe7FPVNnmkHGhZUaGNTYXVfNrakgbgc2D9S4XLF9rHD1bEjhPRikjf3ttXx2qLEn5vn4K5AWaee",
  "key37": "2kiS4MRsaxSeFLiToPF6NhrxbBbB7AvrUDqz4GJi4mM1Gmg82Sfc8NYz7Tiv5zNihNr5NGhHdiBX2YgNK8wi7Xcm",
  "key38": "2bhMCPef3h2fLhkgTtXh2Uh6Z679Yb61xBFB8Q3njvyp84R4vdBzoEu91GSg7f4cptp3U77913svMXAab69qsrv3",
  "key39": "2GMrbXkZadTBtBFN4QmLYvxiTWyz9qyB9YZ7nycfMMNqsM6EMu53ZB883zpbdhxio886WrkH8A6Y2AzNmH6rC4o1",
  "key40": "4hQy5na3dUXTmnHgxQS5s3pJkrT5mhh8SMKxiXKXtdB5kyBE26MNpNzqkzMGdMHJxvpnUQSuJJAcQdDwhH8eEe7W",
  "key41": "SF5QUAFbn8gte7dS3aqq3CsNmpNmbYgmhy4Qmf9sYR3mDSLeZ7cS1KwrTRs2T74W7LTW5gSmZucZYkUppzMCBsT",
  "key42": "4fHwMz1ktLBbE36CaBZsncmrZzFtxJE4qUUVdHesNz9erPjgAWYqPrDJAitF8P5vdCX39kMErFNfaxgxcT6WQh1S",
  "key43": "4LeewQtqxdm8ajmUifr8hev8Hpt6fjMbN5k6r4UqyKNjj4hucus2TwXPFxN8nEoLK6w78r6pbSmU5PwRMbHCR2EP",
  "key44": "5xZtyCXHPijX63tcEjgMii2WPWoMi5vWbvQSAkm4iNvgFPeUvD7ctev2Xb8TnKzqanDNna1iDeQpEF8JgR4bfEuL",
  "key45": "3t2d7D27vZCL6AVdjTQN7y9hYX2j83JZtMVnF1mZPekbnpwXzfxEwFKCJRnjzzqXyFLtYJdbkU3mnAGpCbwZccj3",
  "key46": "55nvcQxga1toqy4AqP5FJi9YBCsdQ2CtN19n1xLuZcbtTdsK7JdvHKsioK4moQ2DmLBvACKyAUnAvuDJjup28pbs",
  "key47": "w97xExrgsATNCcNPPkD27skGitYK3rfbStLkWZrzK9wEX8sCTVAF4XzjqsFyXas6gRwz41qutVV8EptFnuZzzGh",
  "key48": "YbNSsaEC8bwXDpMgmpMJK9HEKBLiQZup3N9mWsAWA6JEWewr6dFQqrM1WmM28KDZHRqZTfFgWix5qvotbysx7xt",
  "key49": "5WM998mh9i15eGtJtoFMCSWUDXrDKFPUm5sx52qTQAkK2gHPWegCazciWZD2QuJV4ke2sx9ud5SJzGwPgCea3HGX"
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
