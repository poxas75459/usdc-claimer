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
    "pPeFKjPS9unqZHTfPf6wGZbKCgo39YrkGuwxsWDmEBeBy6ZmQi6QDvjH9N8wpG3C5tmKeGVoecYAJKZbMVut9MR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUvALx19hPLwMY4u6UDcTzYdHKebPmQdnpPpYVQzFijdwaPTjYxYAAf6bMmr2C7xr9c8TyJbvDLF6ZhGkDxuS8V",
  "key1": "BMaLbFZmTLFTaLZGYq4FRu1h48NEi9KzCvVmjSDaqKCJxiPh3xbNp7txD5T9ejM2HDEaFBLSyaaiSMonPXVicv6",
  "key2": "ZFMBKgV9FMBjvNBN96C8kFG8tBdwdXU5e6kfSb9FDoCYsLaLairtKHrdReEbPdrbcmyfiypVzjVzZFbqZL4bxEe",
  "key3": "WMvXdAFV6VsiCZ8HRVdyYgRwRaSQrsv6xrUZSsnoyFzfyy68kNCeqnYg9CRGzksUWZABmETKvNBB5HDqxTG5jis",
  "key4": "wrUkBE8Kk6SdWoxwZvQrth1eGXrKBuBi5YZus6vUwvRfPejKgCRRdb2ido9ZKeV559pKmjh962s9J93YbwpLHyp",
  "key5": "iBBHDAzU3QyaADehtp5FSXXWWgafBWAGUK6U8UxHaidJknzGCe1YziLSf7bb5aXxzheT4AiCb88AhKhu12GH58A",
  "key6": "9fXDL8BvFwwuAANNtBV64TbXoi5vPWB4ZkPqew5mZkQh2tBkCRNQSaFwa7iwQMpNwChTxiWQ24Xk1bHs6HpckX3",
  "key7": "4ezaTanv4bUcgmsVoMiJrXRJ9MgaWvo63apqeVe9T27dmhYmgoRDe67n3jn2hE1NZyAM9jH9vGQMfNKSnJsQgh13",
  "key8": "5RTWGkTjD6ePnATLq7JV4JsKyH8rwytfYcEP3ekWetzDxyHUPZoRc3M1CWvLahBPRoQ7gcttCNwpTBQ3JUTnTVG2",
  "key9": "3ucsLhUgbnPbTcESLHnfNzrXUse3EMfNBjPbYZ7N19poktB4F6uDepqv65JmUcpKPWYfdFyHDuEaCberfVpWhg9d",
  "key10": "3A7FEnLb3fLRzaWCJpe9qUe7rULHFRMwFZk8nMaWrqPGcQ6AWp2wzaXwsTCWm1oYR2btcnyPjhGK2NnMDaXA5iZj",
  "key11": "4FsLmdTk9r5JGzS6hEXoShHJjncsSXTguamiEbjgXVFRw1TqHWpwtPq6mDyB6EuTZEB3LX8PeHKBnk4iUFezEvFt",
  "key12": "4yyQG8f7Q6jX1STEfNgQ6e3KbyPAJAwki7wQ98DG4W5Vqta68WBquyfwVAc2RdGzzvt7wXiXT4rkeqdR88smUABN",
  "key13": "4YaBwieGMdPveWEDkqAY2R6Jb4cp5bvt64tjStG4qdoBczsecdiNCENSKKdi8Y1N4VYQoxsnW2CLEWRq1hdp4dSx",
  "key14": "JV63cHo4a75Ta2AJfCwDvGHqA8nunH1NzsQCJHCzGJwmJUyK7dLxp2ZTrLytnY2vs1yb9i8SSGmDVAKwQUWF6CW",
  "key15": "2B9pChj2trL4hLeiby2zTVUX6ibf5fiKLB8gTwVbFP8KPhBZudnL9J82vtcFCcumpi1254nGXk3jLQr81ajLrfBU",
  "key16": "3SVoK3z814VFe5wqZGD8vCCJ6jkwpJCntrb4wxXDcd5WRWBtxcp5NFFcJbRXK2Fg88cn7FMXho1FBxgAPUY4gGzH",
  "key17": "3EXzLmJm2kNxJNntq6PFXiepvoLR6aH9ccNDKKcbs3GV1toPSB6wwHKT8scdYzfpap7b9TpcuqQL6rcxFQbxLgaQ",
  "key18": "4mZ1Vv4hmnHcxeDYqr6rXcdxumZ6uwbxw2BJKvxWaCyMMGKfbgiaXikn2gUkQ8AJL5vRFBLyTWqgXKZ78DGDgBHf",
  "key19": "2E3UqZJTeAupsGXrDaFYwbsASqyL8rQv1w3kxNzapJgRrZsZCKp8RCaoJ1U18KaVKaENF3HJQVkNt52BfB62f9oG",
  "key20": "5SCCcj1Tk7P2gz53QQMSNpc4P3fLPQi29GFCu4EPZoQooJoBmZZtn82a8mPRmEcQzc1eaf19csrDFJy4jRw7eucW",
  "key21": "5hGas2q71UaAqk9Fu5VMvm46J33q1BjTHUcBviga6pBKUqzJzYUrFwBZzFg83e5fZDTKr6uCm3ErtRpjn9Z9RevG",
  "key22": "2mtfTHY5GLPrEYKQTA9KLRaCc5whdJj8iS7r4tmwhNXDm9SCmC2Sg4GQcmnc97sJLKHK9kSnFosVmZrUHztYkMhC",
  "key23": "3wTdKwiZFACVzAHEviQAbNqL1RtDFc2FopHsEF7HmNDdxEXacacyGej4UQjTgj2zQfD7mx4EZzzVJHQYLUDi5bhJ",
  "key24": "4jjAiEvnvGSg375Hz3a2JLQgzEmqUWPV1rtW4DfQknmfGAQ6bx9oYacFusAa1kKvLH31TueusT8nkrcNqjR1dPHs",
  "key25": "25FbyaxXgeDaRd2MkvggwA9LTgYn1dQ3yX71WEnAn67iUL7cPMExFNEzpCUPEbtytojFcofZDmAapDJLfhYzhJFE",
  "key26": "2FyEGD71C2RVvHJrLZ9To2s3JmfYvDC7dPZU9SqdPY8MULeyyjfntwQxtsxnQKAHf614PkY8JQ4SAWqGhWrP2x9M",
  "key27": "3vZ877DbWiDPKjNeoqy8JVuaZdAMsxPYnX19jSF5t3HX5sKnWs95nptVLXaesjsokPzNdGhVfk2iNL2AxrM1MTSx",
  "key28": "4pQW5ggmuWEEUX1S8jQTvRcoqR7uwNa9zP2BPGF7AEvnroLmN3xqaga2o4ikR6foUV81KCCELyatkWhJpJ7cM7ge",
  "key29": "3nUckavv474yRSfWYwz7oftjquYMsoK6aTmxJaqnSqvM3N6cxs5A1LK42LdnKJxdhiARf2WTdHBdv3Cv3VV429cn",
  "key30": "9RG27CqeE1h16kcd77YpC1gYqEQk2jb2f4t15Psg2e9DwJvgT46x92E9FLpWLkZdCqN1yW5ojtZaRt2QLMBiMK3",
  "key31": "4XWzv9RvzsM83LYgdJyYTMbc3KCwq6KgGfBAdjCsp3EWYDGxfCqEQ43NJaaqaKA6AtZ1CgJHw9kPFEM9ZMhtug4n"
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
