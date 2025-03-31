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
    "5tVP3HdT66nJWMfSdiBkFTKhjaqNZSp7UiqdgJ2Jz9K2q8C2t2jxYRzgY2KSk42VWA8aQSvyPev2VDz6Xwvvd18Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rj3vBhCdnfAvRSzLa3eb6JdfjaHPhKps4w1gVpcBSz8uxRMMG3t38dBJqXVm9fDBYEkVd8m4V6nCHWT6sC1zDCu",
  "key1": "5aUNkzsimbxJuPsZDQfKyNwmPSN15Cj94xvcDSFeBB2uNmddGX1LwBAsnJNYhiN5knDGPSkzK6GKQWM13RxPg7TB",
  "key2": "5nijJvwMnXTa6KWqdDyPQhWgZzsUHhHjvJRfUsAEwMAbygpTDHSCSPw8qQqJFYsDipUMa3rbqHS1Nt5pfvkyuU5z",
  "key3": "uKWJ5GsWbWTk7ZJ2Szg9cK3FWpaPAUzUEZhafTPxKHrMcx4yFwhMhh8imLRk1UXfVnQ9HVKH88wThu67oNHdhjZ",
  "key4": "25mdSjUMer2WdFpg3JZsmBoqt2S4DiHQt71hyVSwGaiMnn8GPJ5fAV5PPMJNPcykmiHx3UJ6ZfX9retXgunWWSRa",
  "key5": "5PuUo2z4PEsR4QKEFK4VGArddQpVnHQXHLUCnMCu1oeK9msPFqw3epwKekQeFXtkF8LPotVFEnYv1fE47XCEKnUQ",
  "key6": "4ycSEmFkppf3GQDdt7EP2Fuum76NUqUs6s4LMQNYyGejDah8aJpgothonxfmwW5VaePNn8saES7ri2Jt5R1aKaNd",
  "key7": "3oP4dEg6i68YkubFmRERWjKgexULoxXoKsLVvyQAUqZdjGCqQjbse6vN9gMLdxnQV7CbhrnJNKBwvdCzCcDfE2vD",
  "key8": "ETb4oVA4mzqqbugSZjpraCD952GZsjg5KsusrZoTMTSzkYcXNpwcozvNnwXx2oicR9PRnnxfd7KTA4W25V72RcG",
  "key9": "5ks7UcqueFewavW6W6jC1oyGUSVG5Eva1rXnfbVQP9vtNLRzD9PD9BKdPGLyeUttffKXZUnnepLv9UkfBWVRBL7C",
  "key10": "2ZK322vSrRoA3USdbhGU2YC2yht8xxx8fCUejbSzY9UPR8qy31pAHpgfVVGm4s8DSzAigLi5a9YCExRoigBprAQu",
  "key11": "67Xjd9H9vrd9cVioSrqoXzpQMk25nCDiu4MkPE2icC2J8H2q9fz7aoYCrBebxX7Aiw9F1QR617ep8mkXrP5wDis9",
  "key12": "2DKdpN1rpfPpgW6zkVmf9MkzaS5LZd4my2Jq6aL2fx9QdjiZNjwjWpSFaVX3wrMyFTRCnkMDSadAWZUf9nAoj59y",
  "key13": "2SpxqcwAqLthgzLZJ6ngg4DwAAmzCPUm4n4E7ZfY5Z3mqJYTNdiB9cuUnG1YYEkDopvtquV5tpha6vGG4ZU5PnWf",
  "key14": "3UJmE6YHYrVPppAATpcyTuzM8iXxAhrt8ftRvHhqX441uZh7osotq589qcHQQj8DDJB8ZoRzBFYV9zUQFKQSr8qk",
  "key15": "5BZVKxijbv8swF8YEFyz6Kg7oqLDq8Grw4CFRY6b3XcbqDtuHg8Sn9RmtpXjViCcy8nRDpyXPNKHmQPGFQgNi9ww",
  "key16": "4fgau8JK3U8LozAkYGxjftMt2aRFAY9DBpMDYnksffutCqvbBCJ4jhxooDhyMTc4if6xYYbm5qUjDoZAegSmVRZe",
  "key17": "5r7TYGMDGmVSTcaKtoKZyVasZjh7YkXD4ET6yT9KVzuJfSAe94kza4v1tkJaZw3BpXMbXo3suTL29b5LSCEwhSi4",
  "key18": "2TFnwCXuzJ8FrTuFqabPHXQJ8Gh7qpzsKMHJCi18BSzyvYWzKQXTx2PGXsZAzHQQZsCkqnbbSgR4wTVLus4Rvecv",
  "key19": "2nFiv7x8ax8ZeDFCH7XHv1nYJ3vtdvs8WsMdhoiCbY2JFkfZQe1WQFU17uw1DEJqKN1gwUvsb1aQcKS1mKYsVDnX",
  "key20": "49JycVbGnTgPo7dt9KqchxPBkdwweebeAECxUED7cTwbp4dFZa4UQrkfQ9JpGSFSqzV6T1PMh82TgsYc8vKBydrM",
  "key21": "4xkoQxgzfJr6sTyj41ZuCCUWUveFTuxHUEDxeXsu2bg36RzsptT1AR66Ua1Mv16wVEBqUXekamiPSuc2AvZmqF9G",
  "key22": "5dfBt2Jhpxbker8DEeG63GLdcFmhBuktaCMmuqkNGhf63WxFqeGpuHB5f4i4z5zqL66D12KTZt4KJ9wbSabSJFzq",
  "key23": "5qMuWhz9KVPnEKWNUAmeajJz96n6zixSB3wWL58gbwzLTWtzd1a8rx97yYGyMSwQ8myHrofZxsc7RqAzCyTBxdUv",
  "key24": "4tGLUF4KrFFwZf9GWo35NCkHGZYrgn67rN9GtVmGcAcart3RRyZgcxqDMvSVgAa6zHUfgDfUkCP8mKWoWEmouhs8",
  "key25": "5G7k4B4HmxC9au5mLsJJaoJMD9RPyHgAh4rm8scBHFVe6eszAQim2GSAM5ZpLzJx9vNGuaiWhemQrhyULYa8C4CR",
  "key26": "sPPXzZrT5GKuvCVeJRBXPThkW92HSr4R2y4NdBGxYNtcP6ja7Pjm3eLMd9hUhR1xAscLBVmMSiTjPZC1Abn8gqo",
  "key27": "2EnTj7PUy18t5YynPepujZsAunMgacY7PyP5ovKvG1x4GVkmUWehnhFJHY77SfjbZdWX96hz2R5U5MiCuJSbMhJP",
  "key28": "5U1xt6vFzHkZTss9XXtZ3EuYTMmgUN5yUbnyeu4bEAQxsa7PVZFtUAzp9snyRqG1E3n2pTvYecDteyNnPjAeTb6Z",
  "key29": "4Cucg8X1RKh2wfw3SfXxNH2MfUFeyGeVcG1MkJvWtAEMDPv99wcrMukuPxWs6Gj2VK7hvovZeNQ2oq3v2x52tqpj",
  "key30": "3q82aZjtW4Y1UCsXqnRT5jse8oqP15SaH9JnHEB4meMEQNRppvwSJaTzKkSPxAicoh2YpvwsRJsizL2NrR6NbFiB",
  "key31": "5KpawYtygVoDXpYac74tGVXTY3Fx1VVNCNt6rZ4r7umsmEPp3hSJuUhoX5NAWjPsaSh4khZekSRJCM5YEb8ZR3vb",
  "key32": "37po8MWaxUEh9iNFkvqRvq7WkAf54iGqZdsgiFHdxVwpMz7hRvYLCYvEUsdeTND4nKzPxHQP35WiyNUaRMDAqAoc",
  "key33": "5RtGRRhVnc6mBarsSGLqDJCR5bfriNwd3nMf9G6Mhzo2hxQ5RgXdhg7yn9qE9nSww9z4y7vkiAgfgMwPuu8gkXZJ",
  "key34": "5nHMTEu4YAox8LKKWxcgshWed3Y7MbRQtPxxzbv4DMcT2UxTzhcwA4rhpBdZYw9iz2Ltw3VZ6bRzgPHuAV2k5exY"
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
