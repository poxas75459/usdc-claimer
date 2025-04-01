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
    "2KFN315RutaN6tCTVwjGvCHvvMEgkFGdpthr7RJtLwCEu274J7JqKejBjdP6rb5YVXrb1u7okMjPp9cbRMUQrCYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fw4rTVAdTGqJJ7qGVSW3mHjozzWd7z31dhEGy73UZpWxj5u7pYJwYSduwZnWDzA59gVQtHBMutJx4a296GEknWB",
  "key1": "3XkQe156zrxxKbfcY9QopCA31Fy8wtntcX5W4JaEKcJFB6s5tv7D1e4SXsSJ1B5Y7Y3MQozKLska2VnRT1vxcnqE",
  "key2": "3in4VhpwNAVBrdApAoYqKmx8jtW68zHvcAkwwaDC7xU1eFbPmHTeujraDmSnGBRF4mbmFH5mQeuhk2rGNYHMY2Pa",
  "key3": "3w2Xubbgz5Uc7efebpsFF5tjMpie7G3AutQwjwjie5W9X6vmtjZXVic8Swr5Nm4ahtwt4mgnqSFDkwgZCp6LBvSM",
  "key4": "5iieUSqCZfWyxvjT3tN7uBz4PYNN9Px9wwoaZKDf4yziWRDnVdk4yP2toPwiZh5iUf281kddNGvh5cxh1jx8nED5",
  "key5": "5uQcKj14K4i25chrBqUxBdSU16qXUyAFEU8Rai1FhoEfLET8UkHVLdZQNfmz4dec3QeisuFyU7bTeLHpNUvfFp3K",
  "key6": "Bg1LqJ5rCm5tve6uEKM1WCdoZeQ5xBXT9PZ1XvVG6fZL6EX8aFYi7ahkJD8AtuxN4uaJABKTDJjNdUC9aHW2occ",
  "key7": "3NvVDJymsvbcUuqNFoymJfFKR4g3GDkfKVVdysYHQMzDDNiUQzT2kqgDVrwF4hwJcAkBrRboeBdtgCWxtMCeRdZc",
  "key8": "5HkjQvTmiNGjWUFaqFHWW2vGsNPjD2PcG6v68zqD5aQ3M5kQZbsjnwftun9ivcYz6Mx6StEeXnFe2ZJuUMDrJsdG",
  "key9": "2vaoFpUGJSZC7YzhCh8rGhB6BQroLN4JcxSWjwa8UDtHXroU7QnGHof96fYbeM8mkz91PNcfCXHcUjS1Vj5p9Soa",
  "key10": "4WbmHTbDKZ16k7ravNWvzeo93GFBewKwwWzvw8eo6GYaG7u2jcR7n9k8SNeCyCY5rHLDvr5qmmJRy2dk9BjmG1EG",
  "key11": "56WheCQ9EptdqwNSjSBBFBrW38Dm76YM4hxxjDTrn5RnRCJn88P4nAFnDsMNYMfx65U38FVRYV5AXN69PiSNFHxp",
  "key12": "5kfq1BnzNB2KXCraA4UJ8zB9hNrsYE1bZGxNyLUFUhYRhoYUMN1MYTTPbvjh41vxa7H2hLZYvnwRwT1Ktsiy55Su",
  "key13": "35EpKxDAjtZrUnHSTBxoqLPkkQDkQwjVL4faAeg2HtzRPfAfbhXftPp6Gw5LsGPSfMDJ7csYrHD8naMFZzFfmyCP",
  "key14": "5mhQyqo8kgKUDdwSoSXhqbz1Bh3LNKLqmPVRMJ9FnxuJCGCyFDuHvVaXpik9FXgAcoFAHLnE2bcEiDZvUg8KgNQu",
  "key15": "3KY2uqLYUKS5wDTmeowRdRe92kmCJSu4s4RXLkCcDcxSNNNEeEpe3wZ3WYJMUjb6PnkbTwwtskvkMSwrpc8EeGb3",
  "key16": "2CQWeaKngCu1FKikiufJDTy3H9GWw8HRuCjSmPqqfh9oemGnw5tNbs75yhxfLL4dfed1ZHGEE2SDLZFh8JdhZNK4",
  "key17": "N7J2ndCRSck4yyAAyoZsDCorHENxqu3NnSx1nxehRuC4A7ZEYjH2PwQiCTt6pJBEtPKBVoNxsgdJCjVdbM8QXHF",
  "key18": "242JqSZEwVbiwgneHnQzHBr61ieCXxqZMryjUXn4rQDTxPbC1tUof8kDAjoQV2vFHfwc6dpUoCfMbNVj5Xdj9aDF",
  "key19": "5Tg5C9KS6jD4mBDX6zySBSzN61ekQoFyq1yxRTQehS8dwoEbjMbZjBcHy7Tq4xzPKeV4i4gC2QE3B2U6eWoXfXAn",
  "key20": "3QSeo5KAX184oF22gZrsVFs1ST9mgNARVUZ9Fc1Et72hE9nrPCejXS3zXgGTQ871Aijc8j6UiMnq7P77jV5jH9yD",
  "key21": "59i1dm5vW4XKEkUWDgGPfJkumn1eaGo71tbccvn88mRpUvUEchU7HZipRCuUsC3D896Q1qpmcdkM4N5PeuAmW3gU",
  "key22": "CUQj8SirDeFVgDHZ5L4oV1rpwD1GQCgNDsbNgBCuh4bbbKC2FK3hZj9JuViuotUXPSbMVe1a7Tr4xodNycFzm28",
  "key23": "ZU9DS31Nv8jbkkXv2pvpRAqf44zcrsXQvQrFcSU89VquDKAUP4War1THA9bi8xD1MdJfsA1nh3Hgm67eRdtKetC",
  "key24": "GpKWkS7ho7aWkMqDNcxeE8esLikMGVCKdnseU1LPPEEPecYQxS9pykHKA6Q3qeU5GGNxQ2HGUG1ELpHCaJYr4vB",
  "key25": "5sTRHRXUdJvBt7hEqaKAvP31dAq4raxHj3okMJoBUx4kRwNySSwns7CRc388jLzCUNLoy77KaBbUXisDummyrxTE",
  "key26": "5Vdm6FFnPPrqhHNyKsESeYFNbozpcEPgNmdNP3P8L9L1z4GEZPSZqDusEFGH2q1ubRfxPgLGP4kga1v7VdPSnLnv",
  "key27": "3qCkQU7f5Gtn5NB8mAqKxUuGu1Vqr3w9M6KwsPdTXtZvDnh6VuiNU9YPdL6jvDXfW5rL3sZ8ND553M1xZrbPthpc",
  "key28": "27k1ZuYLyHGDtecceHH2o95ZnTcAjU1dGp6YjZHZD6tti5ghws8jJ7iV7rGfJPiJ8cKUrgufN272eWzZXMrqAoTv",
  "key29": "ErDXfMTxN8oXoZFGkb7SktKmeJAZYZ5cGw78aKea4EEKBgQkg92UMB2qc9kYsrNNvMs8j9nYfJna2SYF7C2MdBf",
  "key30": "e7C12nce2VfmL2KznCYwWqsxxrrkU29L4D9J8i5zCSYoZXUNT3JT8BHbD3WUyRqHyL6YDdjGSk8zwRLBmDMubqM",
  "key31": "5db76q8GM1bRhwEPR95rDGGMASEF3EPgJRDMxdALSfRYsCZFBQPMdLQrfTyGmUD1oBgaUmhxKM93Vx5ex2A81tEf",
  "key32": "57pHSgnuTzP5xtGmbRNbpZbUh8NLZzAQieTr37EceG2Ln3VjpYc6fzjZ34uezKMtJrpLRydB7KcbxPTiENCLNAzk",
  "key33": "4BxJ2HaYMcZR3DFsxjr8qytv4sFtDKxdKVM1otRfWstPeVDonNngBCHUCWGcrtqbauAfGQvjWqxPrXQ1FwTGfYNP",
  "key34": "3XMoQzyoxSKQiN2Pdpmi8ngaEH36oBWrjiHgPgaBxQJ9hKxCYZ9iBdMMeEq2Qc2LbtFNZJbobmm2m5ErxgBNLSxK",
  "key35": "3vWRGZZBtKDt45U8kdN5Z21TUd1B4C8aGWwJyBiR9N4eQQAVkP3SowWsGuipLNVGteho9a6etyQ3AoHPxuHAFRH7",
  "key36": "42m5qgVMDhPRnzJ8DZyVaviji8Nhawuuepn1b4QeLASpz1nhpabJzGskr6nNLiSPHuNCUScbcrDsM15UegD9nKQT",
  "key37": "2NnBXHBuAnzay3y5VFvUppnQAnj1eio6JgrsDF6RvDUWFTEzV49aVxfvWJiyR7Q4213UJ5DtiVwzRdRx2k5xyAFN"
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
