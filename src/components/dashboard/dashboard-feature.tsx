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
    "g65fvKVzyJ2hybcQ3HMfHx5MCCDLdHSzDNqUJTTjKBR7d1uadXdgCPoufgsRC4PSSZwkYNXwJZHa9Mt74rRJRR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAhQapfnbGarqQgFjKKvufGG5TSp51NM69Sb3LyTmqvneSnSfZEq8oAFGjmrUXFk1zPfnvkWKAaaAoujKHyF3CN",
  "key1": "4jfyUNufzp3vrcKEzzhqZVDkQNK7UVEu5XgMiYBgKxGi9i6n3mQdUDWdX3zhZgzQLYiehpTSyUyBqdrkeTxoWZus",
  "key2": "31E9rWf8Thb2ggu279QE4MqwWLCBP47i1fuVXudeRfALX7HEZnz1U4SZvee7LQoWqtjETcFfYT1CL5A9iTetHu6R",
  "key3": "29tvovyT5WfWaAdYcBY4hcPd1EqGwfVkPxi22tL4AyYN3BanM3W6aM5QSSSmzD9UxLmys6goZasxohjMfDiuAFLx",
  "key4": "4UKfuUucRjCkdLXzEUHmmQuUwQveXKytS2jg1nZs9uneh554E7jibzYjZrbJBapoQwZYh5Go5Qc1yEGRREzC9Zi9",
  "key5": "2bsp7VbmKvzR8QX8XPDrwjkJM8wkn4bNiV9TMYSGQ8q7pvGppxNamQM3HGt8Xexbe9MVvDbo8BP7MbSESD6wxwkq",
  "key6": "HzTTRCAtoziAAQtczEgwEyBrcCQ3RDhwD6UL3PMt8kz4JHy58c2azUDotynNDLGtAzJqLAa3D18chsS4PjEPDNN",
  "key7": "8KHYXuaYCvKJMnCQHdtnVjdYGjmiia9gN9zMzxGgjbYcW1cDpwETZa6jtedJfR8icHR9ZJjZg5hoEjBVk6h34qK",
  "key8": "5aXV6Jo7SjE8utB2DgGw9tb1eso5wXKWXwbCnHUAH7rzLUHwG976QKmmyj8rEsRNczH9kwnCVyp3hJjJfngFX2YZ",
  "key9": "C4b5HRbtPDh5EcQQXW4PHXDv73YFxYACKmufgXsYbFqLEjwCTRZZ6usjUjvfeVLe3MbLtgToueX6uF4XF7ttNDt",
  "key10": "ybmtFt7KD7dsb84kcpD7dP6PtogZmZo4cufXPkE5Df27pWAzc5mhXVBZqc4AdWdwXVozyEgMCxpYWQ3UW7tpx8r",
  "key11": "5ob51Pg9rL3jPEjwqa1i9jhVKCyqE3vsx9cKWL8ojx4G3v8rbtaRSqKvo8kAx69FihnU6RC7ZPAd5F9FXF8SE9Nt",
  "key12": "4SiaxUFVZSXVHWwSLJJ5H1Ka8f5d66k32wctraBEhiR7MG9F1pUhCFaMAN5DuYiS2UKonCVAZRAQvxCpPAc8rL2V",
  "key13": "5Mcb1qXY9itwWmceimG7NzUYgUdgf66DnLGGp7Ypyti2PpuzBpDzpPzWWSSxMVUE4Vhf78xEMSMnJyVhCfyt2KoT",
  "key14": "5qfeT78oednaUn8J5p7jMYHzM3Ho5wu46Wx8PMbNXHSvSWjgon5XzfGcMVdGKjvACqzunqNadPcgrEgzthvditWa",
  "key15": "2Y7yreufAcRovzE5hbwSbqBeWGKYXVJEojrYZB4G6KnBwqvNwu534MVZD9nhtstPkvRUK6Eze9NJH9Dh9xoGYYqF",
  "key16": "tKfZJ1gCj5ftkDjRhhhgtb6pWZ9patczgoF53jpAUBE97ow54HXghqXxb6nLH47peBSnRSewNxuQV9Qp5Lrcrfj",
  "key17": "4vvhvCKRHtZDVNHQcAnw7hUTBbh4p7uW82ZCBtvNv7hS4aeHeZ73rJGTrVeFLG74EEdLhPEQs6dEMseCcGqKRBD3",
  "key18": "rGSjb8GJjpqDoxxCpFtLNWKxhRPbtWDeHAtU4iMfamgXoqrWLH1oAWCBWi2PnoDTLM3tTHv2h6X7d3fzH7bkVye",
  "key19": "4cRYkK3H6VeLbKtM34hN9SJvUFJHu78gh2fQhbuSAx8LXTsovew3RoiM56xFGentv7nVR7MigDE1JsaqgDBatGER",
  "key20": "31SHBA7xtFQzaGiRtu12LerWVgbMZwqjkt8sUAuTWsgKASjKoMcjh36FFtgbzYL5g9psMNymYvPheMG5SDMUPtpC",
  "key21": "5AeJGc1MG2uEivAACjCUeDYcN17SBsTjVg2tppWRz68boH4nPxXxEVUVUU4ZkTzEAbHwY9BaimTCZoc4KoW9wcAn",
  "key22": "3utUXUXoxb7Nzdk7iJozDLfPUPvhNTcWz44DQKx1SbsyTmPDT4vHr76smk9yqpSWaPHTPLi5ufrvC4heoBLqZdZJ",
  "key23": "2eUPHWqT1Ef8ZShFrJ7tPMkAbjrni9ySRg9jb3hBMz4bJSXBZFCeMQobnG48PnuT5qCvycvRVTVDTCZCq5Hs9n5M",
  "key24": "2jesp9xvSESqw6fb3ktPe5GkN1UXDvYJ3hDxpuM76jX8DHiezWmu894UY6rNfAxsUZnnib5iSo8kpG7AGYS5pm5p"
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
