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
    "55GER27LUHT9ufL9JdC4DHPJKokbUm7dKtQVXDHkXiVT7NKEWhz4Hwe3yKZbvnNFuryPze62vdfR4YcbJhCLkysh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y1CiCfbhEjXEc1KpfsxUYhRm7S5h7CMBkEpan3TyUFNfuZt4jBGf6s1WtR8fg1rvLDNfJttinqiE5cwcsbxqers",
  "key1": "3nEuS5VpaTkjs7Q1fR7gCHUnVdjtuBeSLM6wTd2Cj5gtssfAaiyWFYd9Yxu6KreMNtN6RQzzTA14NGAZYefxZv9X",
  "key2": "37iQpvrh789XrTx8jbJt9Hfr5FgUfdR7PwGQF8hfXmU3PRjPrR6SjmqCXGVqR79wtQcG2h2AZ9LrP3qxHUt7TQTt",
  "key3": "2vAsTkjxnLJXtLZ3B3UF1J4NYvFW8WVtUNiLuAt2xnrgkxGaAWYPYwuVBhmgZtwsoK7ee7KeAr8gm9WE2KF2a2Nn",
  "key4": "X5zWMUhNp82zR3HFRWkAuHAJc3JJ1KmfwjPkFkW3RhLSrFQ8KKYLRzdvhK1vjwnVNVvUm87JD47M4jCuQdchdZd",
  "key5": "3xW1iWqbnemW3PnNyxGipGE3NX2u13RFDrfj1FoZqjNw1mNpNYiVcqj1yoR5X3BtHfXtY2jkU59YhAdxh8aZ2r5L",
  "key6": "5FjExeDsXjENzVBcLwn2x3yE5ebZAVm1AgDJ49Kt9HbA4u8B9tYEYisGPCnqYqvpB2F5eA3G45drDHyTcDvMt7Zn",
  "key7": "5XowEeCsaVMVUa8EQ8QbgqbLjVvjtafD1LcJiDW82CascHoQ2Jg48GBp7shmp3hAqSLqpwNnrdfVV8BvRRHRaZEh",
  "key8": "2qF9mhnsSEHGFGesn6YcD8dB1miJkXCTYF77T7VfHyyQcDCQ6jTBDjS89GhRthf1fPhYuDFEdYjj4ervKztMriiu",
  "key9": "3eaVDanMcg96LjgUh7N1RYBDzpqvGVEiGxYacFnG87XfWp2EFtHo6tv6ssJredmGrwd5H5X4gZNWiqTkk7A7mL6i",
  "key10": "3kVyZv1hxiQ9CjiQr8xwR1M3bWoSxQBKKJqN7mmFfbVAZRynMs3Hr89QUdSxu3FLwGp8VbpiDs3fdgt4o9rK7kcn",
  "key11": "5MxxhqGXSUA1FFq7LAZDxUBajivfyjXV5uwxabPU6WGL6sngshph2iVbWtPEpugiKHJzFM5UhsXf6PkbkCEvZcAt",
  "key12": "2WNLVB6L3EMSPPSG55cV3yZSU26kgv2R5fm7mZDmtY82UGMbrDpNZ4j5ZKbhSP4Xw7nBBbcT9rUhuTyMAUrL6Bqm",
  "key13": "44DvNXhWTF5RLnnqRvMUiA7SudL8S9b1dciBRYMBSCBTnK3u3CwVPn7wWMXbqjnR9niR8DNyPmBmRFUJQkQyoxQL",
  "key14": "22HabosxsDpD4hoKHZshwSbzKQN9VPS88XufL8Pc5C19gKs2Ta6hrqKDswAyxi4JambNS83cei2gfW4HUeyr4YAe",
  "key15": "5LW6fTxJzfmsnUMXnh4FEjgxpGJa9Jack5mUAD1JnYF5v9pUzkNnuuuHfQ4ipiA9P5NycNiiig674vTZWGdWZ1TG",
  "key16": "3wY5XtYu1V4kyYdtF1YJvHk5Fh6uksgjQGKvZ8K2ARiWpvHWA5gWPyjHQbCPfiAaGjY3tPYn5Gyk6uCazXWck4B7",
  "key17": "XjLGRZ9xRL2RvQsiAbeYG6c1QbgoonCi7Vc3gdGAxyttsZmdqNYdvvj1PCvA2rNj5GGbPDggXZrXPQ1caGr9Lrd",
  "key18": "1SGvhFBJrcNDig9ncXK31n8VTXaSQ5vArcfdAPySeS1tTrxve2N52PwZqwiwUvDnjwSp5kBiB3zyEULZnTUiVLU",
  "key19": "5DMAqHYNz9tCnrxLRU5VpwnS37BZi77RBkuNyu8wU57QNwsfwJFFJxgn1dW8Ab7ffGSXm7Bw4SLEK9ZobzHJK7hm",
  "key20": "mzqU1monWcNw1erP1uzKGGnHHyGoB6Bjg2JxuYgrPiES13NF9ZB8kgDUFEECgXFxoDwQ6FLsN5uQmuTBgcnNtRg",
  "key21": "3DdJarMfUVUoWgXEza4oK89zzgM3t944hxoYAf8yLCdddbBxhxdBDQNARtSApGfZMksBBob33SBwdLVFBKEQ5fHn",
  "key22": "2XTB37mee6tCowkxTbLLGQjpoxUQkNHPyndtisZrpbWEqEdTogfxTtx1TYPjt3SQEybEaBgW1yqeBdy4UYutqhji",
  "key23": "CBJ94NrMXFp74C36DJYHsuFw3syWbjM3xChzbboKxW8Zrf4xiaNz1etCerbas8D6fwotP4gKznyPKamqXQebbED",
  "key24": "NAoEZfziGNPF3649jVaQGEz38YxBx2StPerr1sCXERU1Y5o3eErHmgqvmNEH6ptzHkRAj2QSmaVMcDtNdxpwSZP",
  "key25": "xPwb4jkcwWLdffhu21nUq4PrVZSKaK2y3URh72doCMwLf3xH7thceSvzWeSTfcRJstz4gFxVVynVQkipUVyCYsG",
  "key26": "3tRdcQz2gf6ke4M5FHLxGXDYLNTkAdJmMtS3TVFkArEXnTEwkz3LXtytBkfo9VmnPTrougUCR2CFAwPXtuxTuaHm",
  "key27": "27CwJUhSFbF73j9mHiHCEwScvjuGsGBj9MpU92QEChqJ4jfhsSogXuVXFFdhzwPHu6ajRAeUzheKfyg2HxyWaXqt",
  "key28": "No8Huu2j924wzn7XzCzmJvV21bh7pGFWKViXysxWAAn1wWtZvcMSshmeff9SooknVPpJLJSpZgUqmMmet6tktsg",
  "key29": "5vKLx2X1zdcB1ZZSapTwC4Q1C3W7AWuDkmjNzUowRu8mi3fS76iF1awau3BsnhPfw8CX8rNKtjNCbwHwWwgEEFhz",
  "key30": "3QoT3hd1GMUqfJoZc9zRUuZFiiXQogevp87PxbTJPVhwuWW8vWRcCzp3N6wYPBSSbbbdBkhNYQ54Wa41yutkW4mk",
  "key31": "4Qrq28diJTbgyuUjFKR8wVpGWiRf5nZBA7wH6RubYPwkRz2TLthSSE8L7E8kxxewXrDmvNbQLEKh5BhGUX7sGZCp",
  "key32": "4ws7CWdDxhnPKHhcyaauwpkJ1QQ8FDFZZPv9mrbjXvHf84WTQYBtohvbmVtzMao1WaDTa7h1tTEhd4Kr1AdnNm5a"
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
