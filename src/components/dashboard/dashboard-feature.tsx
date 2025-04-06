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
    "46F1wVWKeZxfc5jshVKVmiQ3RPgamtytJ8dFiEanFncVmw8NNKxUZgChwEP4J7v8Uqy5FRNoWFbiRxAFAi8c892x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mJfusuT5Q5wcHWtVAXD9Un3jQVYYFdCJGiyNSr9EcoTUjviajgJE1KfxLAxYpKok78J5bP7beuwqTMUaVUb2YYK",
  "key1": "SqFJpnn3LMxLwjSPQdsqkU7Yky7Z5LbUbRBbX7F8fFdaEiGLRN89SoJ4faRdghKnwLLfeiHDp8v1rCn6Y1w5Bkn",
  "key2": "2hXWfyESkkJQ8ET476ySmtRdmR8mkFVTNqKR89hAz2uvKpkEwECm1G7KcJAHsZxKE3wAm39kmHWEzMXNdyNi7t6a",
  "key3": "3CTKWyNryuJfK1D9ocXYMdgzufXnjGNTQ16bYAWxq2mjuPL3rL98qUJdAr23NcHsHpFgqkYKjAKKSogHYeMyE5cd",
  "key4": "5PkYtMR2mLdwbZoSZbTf84mr6UH8nBQS6WNwsDoxNwfHSeePjEuz29wmr9MdXcWuCj7WQUYKC3pmZ99wEAtgnCVv",
  "key5": "2jNihxJ9jETseue4thVrGaJxHN553z8fEFYGFUakAm7ZqWygYhXLPej9EgqMFPXVfq4fWJD13oZGzcaLJVMqqETR",
  "key6": "3TjTgQzhivojMMzMSzeqpcvZL6TkWuZKYEB7VDtg1Do3ABnBrWj6PDo1sXcg5gL5PU6ktRXym4bcdzTtWfCGEaD6",
  "key7": "3UMwPHbf3MKri79S3EDcrDaG97F25SdeZTYi4fK3PFc8Jc8w4fosLo95BMXo7hVF9zBPuDr6bfceAXps7rt4M6UR",
  "key8": "3fFT7W6MHa1N8H4vMCba9EwqzFuhDXtuyYdsjVFi4WdDBdUYNEuCLqKkY6uyy6Xyhw7efvL1fjVGukVMARsKRSoL",
  "key9": "571ax8gCuCr2c4aioqfSGo7pQ1gRvsRRTUpMvUGsu6swL9UJufxsLBdUUnwe47XDEHDMG7vH7gNdD58zoUetqHBq",
  "key10": "4pQ6xN2xgXGotDbFSJdZ92EexVitFxrDDZ3Qzi7L4uik8RWJtmF4DbLjigL58M9n1i4bcVAF627PwMWq89s9XnP",
  "key11": "2MEx3sBgaNThhLanC8L8TxcVGYbSs4sKu95tWi8QSnaB9Wf8eXjrRT4vkRv8G6twVSvAjDbfFX8Zr59RidB8yi4n",
  "key12": "93qx4Mxd8ySX5FKK8o7T1qKcGfDT8z8gUfDzE53gC4SSkSsBNQcJdPmwfABH3F9BqCX9QWgniqMkJFqEh4RYEoK",
  "key13": "2Rdj2H29zXm8NGQViTNro6e6Yw9DEpoKxwHkG7qTwsxAcrimTBipLjziiq7BKckwBgg4CC4w8cs3VwMaJqTye9rY",
  "key14": "5XTExJeEo3eUkA3RimrEYbmYDnaZm83AKFchGBqsnKkCqh5as6gE1MRnFwg4JJ6PYhH7vBSeZTczMnPmAWo93c3T",
  "key15": "57RYax8hrN1RVYVzsugG7dPMSTgXA6z8hWGpw6kxA8f88y41dxkc8fLskqSyYidHbcsg6JKFza8GsRTt1Z8MivfU",
  "key16": "2CsZU7xgqerG5rRQRGaBYeuXTev3A8UehEtxNGQ4E8AfuuEgbBZSFpkzcyDe7Tt846WvR7kWYKFi5aPaiHCgQgPA",
  "key17": "32fXRy7CwNL7brh9ubb3VyDfkY7PHiLkq2FMtKbhsQswcENN8WUhBDbvbb6Wz8dvyt1aAYkRQnP3bjrCAYo3u62A",
  "key18": "2qJkewpq5FNRMjaARNH5YCn9X44Ui2yStGvQ2A2GDVidgdqDgTi1sChUuFa93r5oH1Fbg6DcTJmAUaumNyaQJPxv",
  "key19": "2ndpthyFgxZ5zy74iEmvoHgSekuUAtqSZ4wasEbq44yuKZKVk3Ys6UCVqEpg5QGe8hpUpxUDat1YWqumnUJjGdvg",
  "key20": "51JZu8JMBVzSQZns2NNQomMfN663ukWc2sCz6RZJCUEZZGaEsERFC9nprWjwVkwofz1r7Xwh6jjVN544q9n7gnBh",
  "key21": "5X3KD7MJyHNfbC5b1fTqMJrAJgWAQYmFvSHUaWZn25je9DwooTWFKt5VKFffA2RG6rTNQ6CBnfLD153vSZGh8N1Q",
  "key22": "d94hbBxmSV6eLSBW56ab67ivjJx2bSByfmUKDibXdsfsCieMPEfhqNorXo7kcpmmz7NoDg9YGo7WK2Rz4K1bLMt",
  "key23": "2wLfg5UGBjsHSdu8jeh9Ts1nGvNbpsxYRbHLJ9dyaKebheni9ZyK5U4rPEyXu1WwHuhb9yarZRn1pf6zuPCYMFsm",
  "key24": "5JC2p2pVVaHTMjZFfhBaJRJw2SfXnRpvPmJ7f79VYNbekD1GupyVhwXeDszbA6P4Y8GF1ieqqZxAqB2vvUkVMHt1",
  "key25": "5CWUsKJrfS3vfPg93Dvdhm5VQPCMWvP8UkaUtMN8UctjqTygT7AZa2SnhTYE8PmvYzaSa9fHEnqGYdNf2ZNVvec9",
  "key26": "4KRc25JrVzwfLKiS8m3nfsNpmYidhUPUiGpdeEiUsRJKpfC7dz4eqmMoN8G3UDeuEseR3fwSQScFZs6WyJL3amyX",
  "key27": "2jFezfc8Amxj43GYDXnqAXLMEHwWFYi52Rh9CwSDBf6ce2sJY2T5namBYLPZR3GZYGTTtMWDPX5eMEMBhQnybDZV",
  "key28": "StE3hPku9iUX6ZHro1AEVw185xuPCEK2oJGdHw59e7HNLzL1EkhSDrqTeiryMppL4RLkQrVVxXvknWjmMZ2ffNP",
  "key29": "4RrgumFYWSvJzaxeTpNhSyFjW5HpnJsbu4aHftxWpaevLwFPHbZGPoBV1jHEQXZdVLQ2dju9h98CuTaXqwtHn2V2",
  "key30": "hjzZfcTyhM3881D4uDkRrLqAnrV1nU9xyo9B8Ti6L5PKntGWuGWbqEmEgN7JsYzYTeVoZETFmHB67Xq2kL7ppTK",
  "key31": "2F9zHhHrJzfkmMJsPBv17GmwhFcyZpMH1y9rF7tYmG5YxSgV5dJFSZWbrenXF3HaFjmVbFgdv1hsrxPi1CS9e3yi",
  "key32": "2GCD5eBe6xZubgd5hEX113TydAXZ1CAczSsyuC3LHAwjcvVYuFXVHm6XdtEA1NVow8cvgcHgrLigDKzCyR23oJLk",
  "key33": "5Y7DfQtG1wc7pbVuGAyC62UZFAmZWqKHvrWV65rA99dAUsEHKXBvKJsNgKA1oNfhje61i6QWrz6cR8CPMJxRiAL9"
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
