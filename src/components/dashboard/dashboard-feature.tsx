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
    "3CfXgjeUBiCLMFdtCxYXneJSBHoTmv7PKjFykRzEtW5VvJbwtXa1EmmFb4K9kQzGfchkgZFNNocQnGZPdBWNMvB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QdKtPAZGZ3FamptMLiEvXMKhy927Jrikok6Zq1sSoLWMh8VFo1wZfpj6NN4RmscFSKdTh7CS7vBB7rTg6Avm3Ks",
  "key1": "3CHXzy4QRn6JHnuwc96DUb9LqZB4gMGaMQBSfRgi73LkJeKApYT3YrZovyWpxUp5oQwyKe59Gp3MoDLE1ctHGY6J",
  "key2": "wJ7eAi61iqiQyPW3p1uH8J7c3bcryBhyrRbfEEVCB4GKaNgFEwxyX1zoGvFfJ296dUVTKGviwxJwB1doZxgCnbd",
  "key3": "243dZgKwkARvL5f3yfeuPZ4SM3422KWRfWWy6uBPUCAeymMhHL1cuz9gnBNcNKBkousKXmwib12gcEYWnCvpXDDr",
  "key4": "5qztD8kpUkeAwRKpxB4a1bG5QLSws1C224Bc7r5pa7sCRAcBtwSeu7qEwhfDookCJbGhpmwCVixQv5Yn1tdApTrq",
  "key5": "4MkaKLGg7hs5kdwdLLLoCkyuFPaMRwXD66MrVJxQysYhtLXXxdffD8yeTawwqRKq3UE11K14aGrmdJsiFu2kwS7g",
  "key6": "2pENSDYUf5gjq2zJ5CJzKfGsHVRsPX6Y2vcXMjAWP1tcXjARQ2KhrrZrJfBzE57jKwANM8aHGQrUj69z5WardW9x",
  "key7": "RndCLmhhF6a1WSRpUJj5CpFH6tkj4Z8EeRtuYvXiCLSR2EFryUeCtRWGZyvv7WydLKdXg6a4i5dQCgWwc9iEpo5",
  "key8": "4mLAXcVf6cT7gAEoqVvT6uP3fzS3xk5bWXJJRjYSLrNfN6iEFEBoBuGpWeGzoTtYpXQswoUhRfH65ow882baHA77",
  "key9": "63sVCy4t4HL5ZEWG6f72vAbYD45xyha5RXpcqZkduhU3HSspsEc1NMuRewNXEEuancM6aHAcUSZ26j5WiQdQxJ8B",
  "key10": "51T3E5bhJihpFrNR86sYW2pVMroC5yuffEZvBc4UkZXsM2y5Q7yWQ3wmHBGJaYSLNRJDq2opdGSuGmExwv1XR5Pc",
  "key11": "44t1H1FTwV3Kc4Vabi75qrEzXTdTgV3XMe2kNrE9CcSZKmaaMFAsyWGMmFuCm7mCyMqtwAsHuLjPQ4e3RNi1EA4w",
  "key12": "5opETSLfJAgTSvfZdVKcHHnLfL6EiKWi6m9uQ4fMtL6wf33fUnDx15CvGcNEjUxEEHeH8QaQT3buBq8eAgtPRaHa",
  "key13": "3FdzASYDXkNN8L2ek2Rf7pncvoMtv8gbTVfUG3WMr7MiHnWaX3LWr56dNq4otSkEkRV7gFrCJvWkspMZEqTkCRTZ",
  "key14": "pecA6sZVaQgQudS3ZbD2TFF1XfhwUENMUMHUnLAvAkQn7gvnofHRyMYcf9SJZPLcu1Vefnf9Fq4W4SJB9C2xNRF",
  "key15": "2BMzSZPmp86VvqqVPtASpaycFT3vJTLas18QqWhxer5QkGGyB3Hvdr1tErUaELtyyAMTjvJ7HBazGbR1oACk6eBe",
  "key16": "3QEAsJF1r52VrUWAckYDzTHQfhNrCDG6khAwqLSCuMrxNBMBH6XejLySozbhTALGjZV2pDJrR8WKmjhAcnRQ1qGz",
  "key17": "4CEg2JjU2byKA9mad7AfvGDKVjzZrqhczjysmxAgYN3HDi9MN2m49kZMB8PmVk4dKYYfvW35mG8pEQXRq6Bu4qE8",
  "key18": "5WrMFqhHiDeuWwPLhmuKojcqcxpSxsPwbwgbo42MyV1tkdWh4LxTkW69AZFn7bPMQsxVeeJJWTJSSc4vgWf8wKCJ",
  "key19": "uwF7dzgWZK8AT8LD8dnVi2myTRU8gbM5mdv7rzj7L3BggFxy5cf6QfvLskuJgYYoBU6DJENBUfKFUDhwEJUcuJQ",
  "key20": "48P4J6thKDDBMLSHtN3o4BCe8YWgGQXeeYn13BWSZeuBAQAnhbPovNEdr82D8mM2xfnEJGMNe9FCS8JJgY2P1r1L",
  "key21": "3hGqqgCsJsqzDgUwtKWfrhzaNDa14LBso44gusvTg3PMjC8fjkbDnXj4E94Pa4L31qbPXTUFp113aXXscGiN66hm",
  "key22": "5znWAEWYE5YCWfNjNT9cgWbVbM7S1fY7gLuXZzVG5o52YCaHQbAnWbckMzGRvuHCXc79fFdSHKVeFay9DZv4snYV",
  "key23": "4eL9TdEfLwqGPZztGKobXvkW2UgqdUQwioK2YgfMTDCjgWys6LMdD4r2UnC6kCmerpDNsAq4ZpQja5pt9Q3xV1ET",
  "key24": "63R71nvVFX29FmvqzSEptjTWTcHaN7ac4SYR2Hzo81m9wLYzUZFxFRkVaw9yq17fQRz8MA83PRarRqvJ5YKGbmLy",
  "key25": "5fPR6fwFywUPaQfW57SrC5JaAREAEQ4xLEhLLQZDVAVFPK677BFLgedYr9LXYfD9rQkr6WPAVfDvpnjfeQrYwKxY",
  "key26": "4omeGX24vYp5EVK5sXZaHXfNbTAn3PmMWZvLksy8VfgipUJPvsM6T3sigKavDMmSb5ikuzbkTSFKQRYpoyu1MKCV",
  "key27": "5rHE82nZDEjSsH67gB8ewV25aXCyiJPfSHQYSnk7TfRc9vRvoapXK3EARJ8ndXydJPF64tvUrnf7zFwpaNaT6rz4",
  "key28": "EWyy1ZcAPBwaJyD6knrKXPzj6WymHkCqWhzP28iFPLKSfUgBZbFtmULprQBXctvjn4JBxYfr1PoXRCQQm6Rsqx7",
  "key29": "4rmdMnT8T2vzbjFCgii96y5Fy2gLTZzXrQdz3PJCPrbpHPjw1BKXLYo9jmg7jFZLVqoHjBDMEaHzLL6XY6v5DtPp"
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
