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
    "61PCHHpnCKgwBqi7si7PH98EPtDyxcVhb4qGXtpAN47gSuAiWsNB325pbxUuKZzAWqtm7QcqLWpiwSHS82uWyL8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhatLQeQTbJdRrJ8QeTPNH1rBKDtBEJZpKqTTf9nxpTDgkqh9YAn4FxAwGBN2fyyvBT99uwC6sTyXYfFi2AJrn8",
  "key1": "3x8Hz7pVQbkap5fhWgZmYSX35fuPNSBX979aFnBGshocDbNAgXfRHpGRFSkv2Sb3ddJTV3eZY9ZNxLXpmpgH4yuL",
  "key2": "2jFQtMTXRa6xxZf7fHSHKxAnA3Q7YFMjrRC7GKfHfAA22j76MZJwbMJ3BbtZvi21ehqdTPrdLgM4AVvCLRaXGBcu",
  "key3": "2xnv1kCXku638QYizg73zKYM7ysb3mMMVtDmgLyCL4wDRn3ZC5aM1VRoSbP5ZyWZP66AjEi7EUrE8R786WET28pp",
  "key4": "5No9tKu3KYzEBA5BBn8Vb2WRdbVipBPsJ3NXR1AuV9f6KLSoVdXUnJ8LpfHoN9Etq1WxysACkv62AV7KZdMX4THh",
  "key5": "5ghpMood6GbqDwNf4bif6DrzkVzZmJ4hMmTifoRnTGcJiMDvsvMaCmyLYs7b7y8Ya7aDzurjfhLYmLwAfbotkCSm",
  "key6": "2NSmNkSevp2UGDp97nGzmg4LoytkdgBJYG1iohTKUbbimxmiB5gGPwZdqZzsMwXzxkASuB7a6AQL3QZHJmX2bQKh",
  "key7": "tc7Z2s2uppBrneq8pEofKKZ7VyEmGpd8vUm9Qr43MEy4HTNBCUbrzBkrHcWZRfFCURXw5LTUjLfhCTtoLTHcjV6",
  "key8": "5K4ypGmM4n3tT8TVcSSMDyRWeodCCs746TxcAa847SwJpmPD1JjnnTQHyRXjxvjooiYC22bECLpC37sJ1cP2uYmS",
  "key9": "28CTGPcU2HcZjCEZT14PCN7sqpi4XDFeeiQGDTVcGXeWfA7rBJ7VyJJWw45X6Nyg1FrqoUeMcMM7cs18RGzrjUPo",
  "key10": "CeMmr1XqTK8HfgmqJ1rzj5CjvwvGDUFepQheVAM9dwqMMfckvdwLvTRj97iHCQWXYdUxawpoTcK7kQU5jYZ6wu2",
  "key11": "4CUuzFKbVLccus6ZueVPF2fuEoK1Yma8oPx3ge6HBGkQ6n6rUSQK5Jsf39MQcnzbTU8aUCPmx7grENJJMoh64ncb",
  "key12": "86XePEeccV21JaDbxUFnN9441sNwtDQKdE6gqfJzoWuPfA2gLdEY5UWEcsqmzd51MFfdNTdrXApYYm2wCzTX1bj",
  "key13": "2G5X4Wijjfi2DLTxcB32YcuvGS14shB7NkcJkw4NJB3HztEodQ7pJLiAEvgdvmyxYinnvh7T6wzJFdT7dUAsaaMb",
  "key14": "5o2HWDo17LQnuvhewH2ZrL6Qz16kwhWA7fd245MHXPP24uxSuDZfus7sT9tCSNGyTREjBAcadikKrA1DZSCuHW4i",
  "key15": "kzUGd9xutZstvdcSeH6UovzLpNVgkyoXb71CgbWi9jDAuXRc77oJ1ebqbw3sWfp2a9gxv8KNk3NT6rPMeKBQmr5",
  "key16": "5ksES9CXD7bf8pdkuGogQcmbnh6LnaZXE8vx8syReQijoEHd8jozAFdbgLyskTrSnTZjkwZp7uBNpzzqTZfmrCs1",
  "key17": "4K3y7irWQDgT1tDRgrtJcdhZZxRttSPmUGnAZyLYd7daUFphLG62kaGWDSyfiHEKSciQxscGMMZGNEXZdSZLLiuk",
  "key18": "24yZ9FUV8NZ9foGfxRZd5e3NnNjyQZW4QxFYsf6CY4hAw2BButBLxxP2Q3i7Xoxnn95ZpCTtXf8xsLcqAQCm6iVL",
  "key19": "3g2k3KkfAnjEfhq4H5UvszUJDzcHVUCiDwgEgyo8YoyHxwsNWzi1hKgYYHAc2EzgPBXSu9jswqEn2WYCPRWTRdnT",
  "key20": "47i3YA9i3NaZiC4bLGPqL9WgqW92B55MdqMQeWiaG9YmHCXfWUszSQuMZRLmE1d8Jkbjxzhf92A61HK2EjefMqm6",
  "key21": "531FC4K37oRxJJUEtEjviGPAbY2f9gM9m9wQXtZCeFY93JyP88FYxQVXZXVBwLgm447SUbFJw6r6WLRY8dXw84nD",
  "key22": "62g8rqgphvW5stHCpjA4nrfDND44yEs5cHEn1FkjQe1MzJiwdANtbS7362bWgG1btz7piEKiohsMK6NY3cboPEjJ",
  "key23": "5u6kMEMjZMmWVFfKt6uE3smCr72kyW2CfkQUrPiyD3vVx5AiDtiby1wzHZ8QV74wqw5kW3EcF8Go8FY6TpU9W1B7",
  "key24": "4XyrBeHYJYbY6ftqetr8jCMSBunMczFiWUsQj67sQCKEetdiFQhqUJGAYZTErpm9T1kUgRFf8VxsyQm9vQ1iDNS4",
  "key25": "5cpKnSApYBrLLG4LMtiu7SybcVb5Zrt1HhAdFrMYCjsnAwz7n6PB6F8Pa2u785NJYkhg9zfZCEjGKemByb6gdoyk",
  "key26": "4BEnN5R74VdH4LBZob8rRoGMfyjQwo8i2oFoXMREHzjJMzuDGJPZDqR919yTYp3aMZRpwggLuxpX6NGxYrQXVHHf",
  "key27": "37Ye4TWGt5c8iuRM8YUWvYTp1JWFq75m7NoNs1do7Y8E4QA8Tj22ubh8SMdEW1WTEYxSUU4hca2mY6GuDa8swy6b",
  "key28": "5YD1i7V9L5QmfRSsXXDCUHLKBP7soYea1R7NBrhq3p6na4Bgwn9HedJGUwsGsQoAESUQUdHq8J5DV8ggjVXq289X",
  "key29": "37cwSBcBRftNwyVZxwHJ29T8ZicLKvhSZEToGV4PZVk6F3MrWSVdbabF6FbkDnuixLdQadiBdHnYf9e8smMdYHJN",
  "key30": "5KpScVpzLx2bCTda9RHAJo3pdgfREdczJ1LYej97itf9iW4wMDvouGELpNbFpSaJU1NK9yBYY1o2Jx7J4WL9Ugzy",
  "key31": "59MLc8RJ7FJvfBU8F8XqbjkHxmVCpNqysmwxXag155VTjSHYGhFTiSXF6q63VsKP8qqnACBFWJYBsNLyysZQopsS",
  "key32": "5LyPKUZGegyXXbqwutdfNAzCUavoqmUhoKCUSy27k43jFMriKfQ8MGe2zDiTg88n2oYH8LLbuNxJg2i5JHjjzTJC",
  "key33": "MXuYPBcMdFc6Y6msGf7P6hGjQjGfEZeBtWTm5FmS2w3EMjf3SvVbYEzY3NbYa8ZVm59RwRJbiBooGF6zzjRxRZD",
  "key34": "57x85eqiV6BPU26eP1hLTgJK2czxE2j39czGvxxoVB3Qe5UrsAhvwBD8yT6darh1vrj4L9RiBXNvi4AqmTSRuH6k",
  "key35": "5aVwKspTwELx5t6HtSuwe7wBt3nHkYCVWpsFhmmda5u9E9hHWrCVxNKRvQK5DCNXHUbHFhwBrx9ETQ9tU5YJTov3",
  "key36": "3Z1sSSXxB3uqNeZw7cnMPjjBcAvdrYUtqDw8FHgeiuYCXzVh3zaU4YB9FdYgMPSnZ61tcEXjmJ1LXuPjz9bC527u",
  "key37": "61hkvSvW3WJm6a8ATDU3FpmhNfBCx1WQdRW7SeMt2FTMR1pzkQro9XjRREydGz53xYQo3vZV9XbDcksTztvfYc4b",
  "key38": "2hxX7bJfn49DFWwNf72S7JUB2AuCM2w2cEcX23vdKvzDNp8RAqyU5ZQgCcwQ476APU5EUYwUfMRJtJJkwJs158aq",
  "key39": "T6fiqJ3S3kkGgxa6BA9VjRRrn8X8WFu9shPXpa3gmpB8Ey4UMEQ1qnkr52SeQe3xvBDA8tfoQULF1HhUSC2tz76"
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
