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
    "3dL8FrdmNVaWuN7xzeqa5J6vxJwfXgGXZxpSyRCaqvuZop2hdkMfZin8Zv9CnVgPQ24C11xqcFFf2Zt1DFavbZvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MU1AyLJ847QyjiNb33Y1cYHX4vn6kKvVh2gc2PaHpm2VNc47BwgU5g2s6HW8D67vRgTg2S7CCYXn593R1fv8Mtn",
  "key1": "59TTVfDzSVL7SGJRKUhYN16GDagwTsCRoMgDC2NnR4xKboLRcaDWJ7vHe3ZFDiLEGyU1DZ8gC2qmrKZEj2ki3BhV",
  "key2": "2u25W37Y12iMbcbhuE7dfj6oXcibmrXWyxW3dKLYw6eVQcGAWvdnuNhhhSWgQJuKYXG9ePRQ7aPfg2h16kfC1mw3",
  "key3": "26Q7kPQhKkjsFNCyP8aL82C2VvvE9LnB4k56WXeZWwsqcLWVx6YmKyb6WnuZLgpaXisjS4dFSNjCGQ62NN753rsC",
  "key4": "5KyyKSaopvD6iRFkNtLxbisvyAgT15HxopzCrHB2Zeqdr15TrrKkLscVg7AQm3zD1VDuPt4keKh5BVGEXV9KdXZZ",
  "key5": "2tr6bUsok9h9BFh5Ud7pCKkBTM4rzcN9Noz97nfqZpuagdFoJtcPmoj29YEhe6EikcKYt2E9a6uHxviAnzohtiFe",
  "key6": "2Qa46GJ3sp6DNWJy2ePiuyw5E3SkHHg9XTcPyChDZ2X7iy5KSCEnWHYZw9F8js25wgU5PFYkHo3Hp1qPde5qFpzh",
  "key7": "3avrRPs38pFfvvxTg13onm5NNVNDijGWqDUyz7M8mm4fsFH32jxcw7vNUuZegwHtPHtoSM8337EN7ite2KrteuQa",
  "key8": "29t33JuwUQhPidc7aPVxp5TNfsNMpTTrv5UoD7KMWNNRKyWCBLXys2h7ZX91GeZTybLwgiv9Z3QGtZwiGEd3gZmG",
  "key9": "3cAFq9U1cgFdhk32qTkahuj9fNPveAqRzAVL6yJhJwsW8LLoRzG3Wwe75hzpdspWk6F9cEBpLtegAjsji7TbcmAg",
  "key10": "62HLMa9EK1ajzRVtnPwAUUwZ5yZqUJe7bZdDby8krBrUL3PDvHsbPzDKcvWeWHpr9KJgqHkTqb19urp6GUXExArt",
  "key11": "21eZPuC9XWZDehJtK42mQAgXEb4TgfowGSGhqWo2R44qNkFq8xNQ6CR4ghHNJ4ZZDEQPNT72F98LqA9hTAV3TGRS",
  "key12": "435n9hPTGaedtvgB8sQxqCWE6DTRWkL1m7V3xHQizxMo1BdjgqBojyJX3uqQuPEBQbELssQ1MgGvtWnLNZEiVnMx",
  "key13": "3WBrB7qBhPsnG1N4mFT8m2AMhVz1jroQXgxpSYMfyZS15Bk3edSvZ4NxeT913fgYYUE5PJHg8ZxUejewZkhCxUDi",
  "key14": "5Yt2YXexdNWxQ35JCAHXeQjq7gjyyZ3kZsGC7t3CHDBRdyhcffRMcLhfaVcfneyDNHJzrV4imvNW4AWNtkRR7mPs",
  "key15": "5oQSzzKuM1jweBwUXcAThj9B3dfh44a3S7Y5vjpPGx8em3ZbArGz2k9wXxgQZ6s4tVD1eYjuMK66zn73FFY5ij42",
  "key16": "55JxPzmQ17nx61tHQ9bJ9Cora5tGjHC3yZpnNJBDGbv3hCsRhuBfyo93vTE3nTYPbB7ptiEjuHerzkgiS4rMAzKs",
  "key17": "28GjVYbBeyLfzovPJ4ej2PLKnsV6JZTeRLafudV93ZVz373vdULZFhTMBnurFcUfQqqmS7TaqxunKh3MuFryDtyc",
  "key18": "1kQPZWv3aEjLdYZ3jyV7xnuKg5tjuVyfA8TWGjfC3oQCjuXs24i8uS9FnjULi6qUjzcsCgouLkDdeHjhsphgVGu",
  "key19": "MtX3rfRgKUWxDfgpuHJYx5MZvisp8rDJ52PENfWivaXgqy4P1h7KX6yNxehZcQ2ogvCK4Lt4bHVc6M6niLZDnVR",
  "key20": "5ch5MaztsDm7kZdkCKkPZX8JMw6C2eUc9yqdueD79H58sVKtfBRjsuE4re2Q6EaciASvPdZPzmUhvXEmKRaToJZT",
  "key21": "5SDZ49Xmpgm3WVauUUNNaoFsgwbYkjrFEdTNDQyaPhQMtrLKhNBGCvJTYy3We4fDvX9uVW8qUZ6vb1r8vjxuyShW",
  "key22": "2RuJpjkVJ4CSnTp7ywuhS4GMeexhJT9GdGiVbhySsAt4qUSfnzgSAWHKpzP2yifzhzPeqNbFWhuK8FyEE8yExQRw",
  "key23": "5iw7RB1hg38XER51JgccQymiHTLgSMHecXZvRNEr4ecwuPTfDzRSKJXpgMhtJyqmwPubihRc5n5PM314EcJ3owq6",
  "key24": "593ZCrY7skvwc19u3vJBGcJhKiYLMXWB3B8nL1S8jdywEZd83TowYTQMLnQU34y1R82NMbs6onSi7SyxSmCtxR7w",
  "key25": "5gJPkftLxrXpCUt3Q9JS6GPGdHrh41GD9bcm9AUxDMcUFqEweGFugcorY3gGKiRLj5UyKyxFB7ooDHwfuj4CAsRR",
  "key26": "6z56XCo4FySM6MdAJfi56MFUHEMNDWGVR7GRjfqkJfsrHXaXFLiQjXV1izh6ePu8jF7A2zBcQepjLvxcwjxBkXr",
  "key27": "5QsDvPdUQtEYNvCYVfReAzK62t8L9zTmFCSYKQY1Rrk78iMWRkG28nwKfvS7QZEKWxDaJs7jXxj1AE3ZSCVxLMzE",
  "key28": "3EvVFXyr2UvMHoySubFmKJeYw7CRAa9A7k1dhZmo6jLsAED55P4Ctpun35s1wnbWWmU9reacz1QfF4hTa42QShGK"
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
