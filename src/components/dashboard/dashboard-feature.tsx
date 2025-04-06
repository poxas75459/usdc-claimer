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
    "4cYKJJJWwj1mbgA4wJEBascoFx6SBKcmJE2GdCTxLcc9e1fTKcU8X9NtMofJQ3dsh4eVgoRkzCtnf8QKNHav9Uds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W549eVs4vnD7inwTDJT4XCLmFpCeDChgWkr1B4d6TV3NtTy2wLJuPhEg58JDs11yE5YpLK3fN8fmjcbDhnyxTEe",
  "key1": "3ZY4jtRDmQFpna8KWQxwXioLJdnGzQHR23BzyrviKwQfuwjAY5yLFA76paC87nAVvkpypP5kqE2bAftfmUJuGpWZ",
  "key2": "wmBWfEgvaLS8adbqywUSNBPQQ8dcRS8SBZGbaNqTz5MQ4hrBuc34kmXNWwuxWj5ra61hQN1wQqoAc9uWmfngyLb",
  "key3": "4hrb98vRtzkTxhkJUqqpHKnnoULcDGcWmir2qrfRWMicW6HYfsNtJ67AoKguG78jMVRD5kLNAXT4U4KTHUJfQLMa",
  "key4": "3h3uYKU4xVAHQLsL3ke8pLCxDm1H4fnkuFzqfD3uaC3VpCy5kay8w4QTkuF2WW8ocWpiT4figWs2JwYNcDkSSEk",
  "key5": "HhUZNJpMRRmwqDGnwjPmjKQuB4gM43qFH7oih215w6Us73XCUQLQLbxyAoaMghUAVMnZPNwAAGYRo7KaMVwAgu7",
  "key6": "4Z9MM81jBVDZDFb7ZthCDTNJeCBZxsUQCPErvChmgGejXRXxA8ECgjM6TWvYv4QPH3CkeNCWrYgNwCvH5pAZQNJw",
  "key7": "57ETME57FtSjFqnhK5AH2Mbu1qugukPGBVeWcC9v4iVXPHb3pvVXZxK8E2W7bHmYnB9ggdfV7THJxMtJbnqy4P2A",
  "key8": "GeTkcMWpAYfJSdc2eVeF9BcX5hTWEf5n778oxgvbw19r9BBbgDvyxap88wYAHYcxbCnTwxygQh8cN5oy3yMR6qG",
  "key9": "3XsqQerzaFcv9tpfgjPgZozYxyrgCic6ZNyGrjydwuUnrapagqLRaYeFk4hS55RGMRNiuMez53xMdhBiqriC75VD",
  "key10": "2qneLmvQVqBuR2LgaJ8GCX3gvqEJK2bKNn7xrw6rNH4x9S9rnHBAxxAFDoMWYG3jiJ6ZJ5BrDN8TaYykRhKvR6h5",
  "key11": "4XMgShAE14j5eXavfrYuN96PLha4gCAHj77p4oW7sVQf6spazBnukg4qBG6zgby8b8yW5tsNKGxZXVtpMpPPqT24",
  "key12": "2HKUsJUEvgM8CHpKQkCbXn5b3DJPoXoA31qEwBZAkFG8phXSJaq8CtRuYwShnaeej2Ev8AXeBTh76s7j7q6HFVFf",
  "key13": "2TGSg1zZvXj8R8qMh6VPhxwPfjtxHMNP72sc12VQeGT1NNBReaTBwzDGMrhgZMTGBhaK7eaHmYk8S9zKUMuwMGhG",
  "key14": "3xJRgQaw4WY5wWx8As5LYKDvj94TmmViTBcYQtQMM1k6F4djaB1aVs76PRtDuCd2szGwXnadNzzakwdR22HrpHtD",
  "key15": "2P7yzH95irgxLQb3J1YXskh5nJafnPAxDYKNqHBfuZSK696gGwuCysYd9QUwDef4fC8roQwDzfqM4GSvHn6uUmCG",
  "key16": "Jn5NJV96mSQmnmJgX9cz7RMWwrZuGYTzitmM7KcFpmxXuBzFc5G2vrHeBUf5j3zrock8x9soU3gvAtQ7H5x28h7",
  "key17": "2i8rWuHYkNuaTUiYktRuncTEJAnzNSzRmQyqNQLyebArzMbV3nzYGg2eYb2WdpL8NhCCzHNXx6q3stqVXKYYDRX8",
  "key18": "5h9AwMRVvwT7in62MvkCgkQvzHzcraZvxY7UECRXDbCJvNcBsXaMtmnwp7fCBfMBNNUwFD7i4Sard2WbDrbdgMYo",
  "key19": "2L8LdCpqfv9pc39tziXhLWbooyUXEZeTWQmNgZdVqFie8NLYwyCiPKRUq4Bx5vYjaP5YLpU62sVLN36gQgrgDWR7",
  "key20": "2bv8YKaTxNRhybMfKgdc3TDtNZHbpe1bM6xFuaXGTJkmxbdhhquP53NZy7tfAvUjCrCLfACZaoCnEaw7SUs6HUPH",
  "key21": "3rELrhVde9wrMsfLa4ZUUL3cGc1UADhipic9Ki4p2oq1eMVKWYJnDTQe6MamcZdtdEPQNEZa6eMcr1iMCxZUkUEz",
  "key22": "2N7Px4zmKzeLoYp1cgVwdzrBKsZfqnji5KFxcZRkk3sPFLf85w2N12Xscg1cH5GYsrzQca84Fxdxknr3VMPNKADe",
  "key23": "3XHDsYcZvQ5jFMjT6VbxFvjtMzBG8qAcgba8mVooZUGB6jqqwp2zi1fuw6Xfeh9ST1zidDZktuCyq65ks7bAWoei",
  "key24": "Fo1gXK2LR4SfrZbHTgCu6MqUgAPv4pQcV5raCM4DiL9vvLEZU63fUtZNsKoq9fkeW74dL7fmToRT3vQuds6gLJZ",
  "key25": "4MoDt1GLcg9U3cKWjfisFyJLXGpd7tvY8BZQkLoaa1sKcFKMVLKh1zZH7UFSzfb7oddb47PFQyZnhiAeyhKER6CM",
  "key26": "4zHXfBzKfJBqqMzzoNq7aTrapom2ryrwfpJe9cqMSkVNiYFsnPVdo6QxARdVmfCjsoVWfYPHTd5sGtwe5Q67WPkH",
  "key27": "4WysfBuykCmsQTHpYRxxyCowcBwXNVn4mdkmof5q97SnMcZ4ejytfMjtWEmy8yVdjRYtAZL6ackfUYnQVrqASmvP",
  "key28": "5vteVp8cKuBgndx9xE3ZwAaRHpCmUFyXSU9AF6nkY745BvoCMRqdb26eR3fXgXB251FgyYqXpmS59g4zwbeAjLCU",
  "key29": "53G2tkAjwL3BFmxqEBGxDS4HBNGDn6cb9YuUVrue5yFv8Aju85JftNZivzZHFPdZErVAh9VbiQbfqPhFMLa4Jva3",
  "key30": "3W6AHpMLegVfTkqBtUhcMxot7ZJktwgnANtg4wLMxLRAqsQopbnXYHaVLKAKuWMJtjPmzwk3HXXB8ZXYZ9RQySTq",
  "key31": "3afmPShZEhMV7HG36HMzcb2j2RN4Uhnb7GNRJx2HCtwhcUsg3myJWd1r81kb3v3hWUrH5yL9jxiVG5UhGPzjb7de",
  "key32": "2i9TqhaVAkiGA5dZG1CXYAJywzargzfCk5J6ZBUgzLrLx53F7vMTSe8WG4fCztL1Xp1LyFAYrbBaxvtWHyKYxNpM",
  "key33": "NrzBsW4QZAs3gimtYgM4qjL6yXdviCXFWG6KcC5H9q5UGts3Zv6UAfaqmPnHbeoXvk8e1cx7McX7LmVUmmTJyFW",
  "key34": "3ZTTsJkfpaZGdE9xcF63W8LdqnJKrxa9pTfiSjphSLsaqVbHALCbakuhUMRVGejZj84qg9Yx8G5ERTrzqtz9Mw5F",
  "key35": "y4bPQ5VUkYptvL22rdkBxs29cbdz3cYTDHSZwL9c6q44SvyQFancHCdKq3V9n3erpQBewQdj3NwBqNWeoUgkfCr",
  "key36": "5T8FZjFNCCiQewBudcjRcoxgfwq6kc1DLNvbuyGGrBmT8sZrHVEpDmRCxhVrtvn51VpUR31rdKjpzPNpKUQpWVW5",
  "key37": "5k16pTESkJFzHRzqxEbWTiZLKRPzNkhGHNSKiShDRxr2TxVyzbPbj2tcY4LWvVVtzCwcMftPPFNHPrani6Si9BKa",
  "key38": "3BhpS56U5iRCw5Xcb8g8rswPNdBdnvparSTmotXBL2FahAJ6n5hBbjWsDweYM9UMUQGVaQ3HV3C3q316aKs6eZfk",
  "key39": "2EFPrfXpXLbQycjbmadgkEH8qnRLq7UhHUipMoQuir284t42oZrEKcjNbH4MKXvNtBaV41D89tciu2KcbGL9GFA7",
  "key40": "4PLWLq5o4DLtxKdc9HzgdeVxLZ3KoA3FusZ7KJZ1jVtP2hMCFyJocx4QSg5VAPfzwkfTSiKZZLF9CDNiiXwaoam8"
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
