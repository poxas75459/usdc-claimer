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
    "5u3FTjBGfUuSyZbZcv9AvjdChBzZDGWu6Y9g4pp7LbSH94ZmW8poeWGbmp8PXaASLaTzXS4ZxiBB4L1NhZ1aJqDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UDsWmuQWss9XguGm1T7eEkGhM3TsT6iwwYiKXdv1WRQSz12qAtM6xBZeZ3VhqsHHshWpCCVuKin1P1tyGbGADU",
  "key1": "4EHK9vC5hoDHHtLs6hL6wVqH1Y5RD2hXQkAzaeoRHBT3wvN9SC8AmS2aYHbVFebN6VtVw1JSZTnKbRsKQSvWoMfJ",
  "key2": "2U6mT4YUAqaE9v5mDt9NxLm7UQmVXoKsk3Act8nrN5LvT56RG4tcJTteATyeFqzPrvrHanr9wYGF7P3wSThZL1yL",
  "key3": "5eKFYNnx3xEY3NVx56zv8msL99eUkEQ5gzUnKwiec6b7L8my3HxcdrixMtdkMc7CPEXwrtfej6BHoWvM9YMoPzcM",
  "key4": "4XWnpjBrwWgs9yBoGJKKxJUYF6fC74KfupTnweNqUMZaRNV3KgRQ4G1GJMDhiLPb5Qs53JtG7pCMiFGJUUndCn3p",
  "key5": "3AZuPFBecgWk2NbkqFzXkCcmQrEbDRGtNARubVC1XDVGvM1BuSqWuckbZ8ZY5Fkao96sju7fckKEWGjiWiCRSciR",
  "key6": "4NpQKNWmqQqmY1pL1LZN7TV7WnA3Bbt19KHj7Du4G6pCysefWEdR9DSxWW2R2MC7emShw4DWsP9cbQ8iut825uqA",
  "key7": "4LBTCjnt5QQE6S2Fvq4UEsyL2SqPZaT2wsexDSVC8fcLyHwXtZa2bNGnRmwKb45ApJKxQCvpeuJBQVrfuyLUTPNR",
  "key8": "3qTu4KFxaedU7TLMGnznmcPRAxr6ZXNjBytcdCi5qEg3o5hun47bBu1d8vxGGNnqGAr4tvNkuJ4q11LGjn9JY6gm",
  "key9": "4b1G1gYVhxWZXaXeKdtA9QCKRJBycPqFZzNSge5NcdnB7jsp3rkmp1YNaJ5X3iVfUmACRaEwkj6VSfKE9e4KxRRp",
  "key10": "5ohvcJSQ1gzHK8x88CJfcENx571MKTgaDahjUeCdnKM7byT7SUrNUxzWpEWDEyS6qRYAkjjHjJEYHwP83zY9Zngg",
  "key11": "2KedaKUpyEtaDyFsNThwaZvXa5vkf1K4BcP7eqjnTDtY3mFxUK2GorCiFxHW91tJYmEVCsNbUULbmQLHXFAmgw5z",
  "key12": "sAgXRpcMRaWq4RRURQ3FxGjCvscnh7FC8eams5GbuvVeCdeq9wUgoKQ1XgokcZMTLydybQ9F8WqVesUQi79pXmE",
  "key13": "5oXWwEokkWV9o9QfmLSR7gATpdeVEoogrbr6ggb6rDrHefvambwjf5x2jVv9Vx2Qu3AQADvXvTumN9amWifMzvFr",
  "key14": "2BgfaS3M5GJvUSF4M63w2rR4U1gpFuYdSAa3yMkKwn1zTFwJNzgyCSYnPpL1eS7E62ragzYSi24A21Gp8vMwGExP",
  "key15": "3QEWjaFepwZAqX368S3Z4gyEDK74MTPdaRFra4ebCnHV7LAecjnRck8UaxYxuP26ChSJ6Cqknt7Kjoj21HDrhJim",
  "key16": "3YAV1eTBJWpnRJfdPA1jdM6r5YnFrWMk3Dh3YB1Nmj5HKieMqn9vzmBggQXCmqDMcPgyyQzXHQzMUwLjb6BmS8Sd",
  "key17": "59JLZUFzc4ncBJH2G6Fdegcuv5jz5oZEaHzMtmCPnP9CEr1ghJRxz3gXWThdKheFf6uL6Rc1NuPQUqw4sYopbGde",
  "key18": "4YFAc6w4jDUTirJzNgRq5L99iwCcHjJN66H3uUQ4jiQ1Umk2cNx54q6gjQ9DbuUS6PXi4wevPHXvCP4qFwFfv1J7",
  "key19": "2maWNrzPuoHxjPnroj7a1U5Nfx9prae37oXxzMt3PQgYW5YptPsgTsPUpNhb2ZvQNxEBhKLh2uoGeebsxXGQJ9dT",
  "key20": "3ByAz1EcUzyoesfjtgGNkkGzC8KNexswfqiwspDgf6KnBvbiRb9TBPMTN25tfEb7eH7jjEGHHMfr8QAsNSxb6Ni1",
  "key21": "3MJNP6qGSEy5r9J5oELmfvyy8N3cSLMCLY3BCVnXoA78TrPbnyN8gheHfGaJaQvUKH4uuDnK8E8tj5C2DrPsZ7vp",
  "key22": "2acmLX7AqAaGtZMMVbSUftfxEGMcZ6PHm6CyWgFejjHfaWK4DW3btkjtYkaQzNq7nUSS4vj63GBBj9MV8d1kBFVj",
  "key23": "mWCfHa9Fdb1KdosRZupLWGxSwGKX2HmCHcNFN9G6KqkuS3wyAWCm2Z1EPmWZFtLa8PaLSaA7KNFAwCTZu4LYJ5o",
  "key24": "2hsGTUyR3rN76VSdvncgQoFf6zUMjeRGwMZvxSbcVTuzm44gapaH9YsjfCnbJHCWo6AWoswuKiSfbFS8qKsXnVvx",
  "key25": "2Tv3tgaWFKfByHyjxoxdiLe39xgpbQZaceufaB5RtmxfR5tpAYT1P4W5XFwgsP9J7E8gGwbZgPoZUtVHkJ6pGh8K",
  "key26": "4nmhWKZ1qSf5zN4agV3g7LfDLXjbveeYxPHpJN8XFN1A6XM1qpKTi7GRPCywCENqcbdBfX5NtfiNwsSddbB8TSwu",
  "key27": "FC3hyQXgaKZiUwDpK2D84Ev7mvTf6YEJWJWnkadFFxXYJxoAgoyZSMQTb4YxcB5dfZywSjL2zrVLpHHrbqGhR7Z",
  "key28": "3jADinucCCnFaQTfTtgfekV1hsa592YjjJeUShgvwMhrEBHqJPPqX4VUZxsygG6K2fhQynmtkwoWoW1igLL8yyaB"
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
