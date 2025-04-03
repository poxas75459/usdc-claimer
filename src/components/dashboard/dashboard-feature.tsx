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
    "46sntPhTqwjYQWevR3ZGTKUattCHKsPHbHhS56s2E8ioGvYDJ9KWchSsFwZs8ZZe5kGpfRkGJStqUYyVVpX74cSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DXJFL94F9kSNDfDuHxUQq5zkYVfawyMKAaBGbGW1aq6MjcHe35bz1TgfugRt4Dnrc7Tw45jaT46FnhQSaZaezwP",
  "key1": "51ymESsF4cvUbAVHHCubNuEq7TNkBGf9RgDsWGcQUKX1W1xiGFBHUbrzShPnDKmdyfERRGtoSJwxooDtcmvNZAjv",
  "key2": "3WgGbD6wQuCfotEjp2VbDaxgY6u53xgbTpxxixsZw3hkHzAM1oJKvCvdyuM2UXeUh6nGhf2Se2jkszTkS8VvMaRr",
  "key3": "cb9MNnyNzimr1wtKMxuQCxUHAhGneuEFjr7YymDsd7aCBaSBQEhNRJWNB9gQk9Xy1z3Md3ZVGBBHFRrygqjC822",
  "key4": "4fmXfd4jgTpAHnT7MAwHRp16Fn8dvqgwVk9fVDCGUBwNnA2DpVKXZoFL8zpvpxAfbeDUue9rQdkvhgjcAJvBDhff",
  "key5": "4Q2bx3Eu3dUPfcVsWfiEEuCLJNH6uh1W7XH6MX6JEaDyy3aE1FzyUJrhPGE9qBoyRxPWc7zWXkM8EYAygV6tV6kz",
  "key6": "62prPoHMoP4Tsx9nHNyXxSccS8zrqbWahVMeEFRNxiYUbrq1jHF72SECsjA6DXQ128ojkzbvBhQnzmXRqwD74dB8",
  "key7": "2nrgVrhLVvPKsRx3uxo3KNVRQhqxC7g6HFvWh3MkU2EVWM8NfxzY3cE7E5uRbPxRFeKCgtLsfzrsh5TCt25Z88dz",
  "key8": "4md2RvRjmzwMFKjaEt6zbdcrY4dAtMY1QCHd5kKamfVdXwgFChc56VLDEquuaNrDQWTdnYtVL9mJ6rSktcCE71SS",
  "key9": "4dmsK9z2BLUzF16o2xzhMNwVD5wnYJXCpvdVTbtQVDEsKHjiCE3QB5QY8L9m8DcruGmPUiTSfuhHpCmadAWUguyA",
  "key10": "NTvwS6RuJoaJxCm8jhQkhyJuJWZ6rTdewtgqvUf5YRGZwKj19Ms2wfLYdyQWs47QzZ56rsZefFpr2oRShskff1z",
  "key11": "3fJ49sMPKxE7EjaPKy3UGUy96Gy3oNo848GYKg3eD3aFXyxfxEZaxh6Px6EHPU6rPsLi1Ja8of3AhZaCad4PfcC3",
  "key12": "3yVDZLe5sUdfsHSqVaEB6ZcyLu8GG5rR9EGxNxjcSX4FgejJRKSgtp9gGzRGoVUgcMiyxFT8kfBQDVdHwTDzHj5L",
  "key13": "2UYpZEb7dfSEESadBxSmBb3d9vsxHwikE1U9BQe8dtPkqq1NZip3J6Vv8FHVRFEZnq3K4w5tEgnUHXPzc1ByriGg",
  "key14": "5RzPRrs7CTdWfHCX4FiHS8FKZeLiPyteCDvVxoqzi9iZeVqjHnoFuoJL1vJhFxAf5zLYGEzFqx4harBbVV23wArK",
  "key15": "3LGKLoEF6qu6tW6t1xUjrptUjWLRqkgAiCN3D2AaQiT92i7gmqgxGpKGRRug7wPJsQtjDyfLueLwkstXHfYgLwEm",
  "key16": "3KSx6yxywgeRreyahyhpfTFn5YPk1RRR6euk3EN7tbiM6NtxU9y7pV5jH8bx7pMxyB7Q3VkThSWjaPEwNXAKzYg9",
  "key17": "TbWqhdr1hc52VxRf8Z154VZ5KZ3vazAY7LgTcYWPGhBpWhtRLjZHKJiLR6W1bKQ8fiwhkfWTEZUBnUjeGpMsZAr",
  "key18": "3h31afbGzRwvcTcBCvZqTppSk3pgjRFaMGXBk3xQ4YCwJBQR6DUGipTSgSF4m65XQDgy7sSFpVP34eb8459C1zLJ",
  "key19": "5Lvw9xd477XShsioGXXrBECK6qW4rZPvVc7jqWGo8mRuWovdTQg5fSpNdurLDgvEZuzL85pRAKDgpjA33qYxvqTU",
  "key20": "mUTvZuc5GuXwfdGHZDEM3agJvKaWuHzhj7rZeEjokcBVU8JfyoAAQ4BFyfzky5B4iBL38NKbaFtQEMDjDrCmFb3",
  "key21": "2uYUbqfzTXJUpEpqX2s6AarZtmL1B24ak29PnxVhonvMkoY3DGNB75btcPKYirVmYrmNTLbLTMjN7xj3d4URUhDL",
  "key22": "4BQGqxa3HGkkWX6VCTNp5toihGS2DK1fK1nFYgWT4UN77HNavZkd2shKcf5zjsiyHACwCSVCDbcuqirU364H9XRp",
  "key23": "5EtbcrK1eUcXkMhQoo8Ke5MUwqPnZixE9AdUJJuhgHRgxmbngFKCzFmXNBqnxa19FUxZ2pkeGPNyKcKvxTzFYaee",
  "key24": "4ers7yBCy4Jsde2vjBJwtUxcFr1hgzJF3LXMTY2cdRPzprrBqLHTKg1BEw4SFT8GprX3Sk8sFk6kzYSDMH2hSwyq",
  "key25": "5WszMYuJfeCysegdWrTcStWqpGPDrMXYtZQv1EMQM95ma2RRm1okSnrU9gegjUDNkNywP2ZozAYStPCFch9T6Cfe",
  "key26": "btVfkzwM28MDqFQDDYp7xxEcn76fyAXuKDsTPjj4SnB4GgULUssQxxBhxffjNYVFggBAyvzxTxev6x3YDg1Ds4x",
  "key27": "4AzG8397G5q1ALaKvP4P4oc596qv3GtrPGupwX848M729DN8Fj6uPSaKxhf5oXh9PHCDTRtuCz5SwyVKBp3y6TCC",
  "key28": "2mwDWgPhdVCDnCuwzV1MHihyxmJBEVwhQYgMuG97AvhHh3maxiex93KtzHnPiwfkooeU5kthqNdzNoSz9bN23Lav",
  "key29": "4kyoTCnrHbAXmzGUYp5zrFmq7XsajNBrUWSNZzeqMMrwxpBWDKfzvercLvk4rPpegEr3RG2Wo2KiTSXemFn99Nyt",
  "key30": "ao4QLubjk9PWUcdsSXnVENiZ8mKVZnxmoDhQPjBbDSYrXnfpeZWpQDLn3WdEzMBX8zUgBqhVCqi3fRKGC6TKVLM",
  "key31": "35NwuY9wmwwTEhbokoRGyMMuRnGf7rZ13rFWH8D3iQ9zPBi3FAAjVwaK3tzyXnPPYFXiyDk7tdYWVGiu1K2T8Pfh",
  "key32": "4iuafs1hZz1JknQpeeSb7fwYwPmNa1tibwMLsFzm8hRoXkRzLnKQ7WLGsFtJgQQajE99JtExqYtuCzHPToVkoTas",
  "key33": "5zjKqnD4C1nfyDeXdkXuozWXoiScKsFzCUd4JEd2LaJQEUarNpzsYFKcDrwT33SqBSjQycPJAq4su3VHF1ccoW8n",
  "key34": "2z5uU4MNr8xiLHk5xhY1EC1tLpNA4xMn739kgUVUWyovTGZeq6BvR7tSJw3o21NJerFDAwWdEwY7vcLmWr1Kxi7Q"
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
