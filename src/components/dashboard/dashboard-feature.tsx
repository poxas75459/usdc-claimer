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
    "4E7wKAy4dAwbL6TynLKH3vDtEkQ21zPkLjJKt1fvfajZ3UvZs65NkKdTqt8bYs6etm8MwpHe6CbRt9sMrjYrmaBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "14JLMzFbiC2iwHrt7ZtDSzCBukY3hVmzu6BH1hrHytttEWd8bGEGKixGUPir1XWtvFsaaihyFYFULmqVfjv1xur",
  "key1": "2GfgKMFGaogdcsKA6YsAjipkn9QP2Sccsa1qtUfW9abfKPvRBEB53mszyQqx247Yz5e9PHG2prLNiYtRtEmPLvPE",
  "key2": "35cSkzrePQFDKern2KQzNnH2dsroTCvHEqkMZTYPhWbDqcCsgtDEvit5QXrCvLaj23YDxvBrV6dbHnh341bkuBC7",
  "key3": "afH1dYfxoigNasyYonhKUUYgJaX6bEmjGxYu5LxSHh9fDgmdS9eTcTn7uTSETrs3km5q4QNTCcEeWsEEb79mjTE",
  "key4": "4TaGfW3ojKur6fxoam5k93kxgVf6G253mrtVyaozmg5bEaUmHBgbZwksN9TEFCHT2oPMrD3pmHd9W5Mi8VKDuwBx",
  "key5": "5W8MwjsLPfrVmGKqyhEC4J7xxiKEGCycdf2BzknG5PqCgqMFjY3kxCTGWBFderYfqLhfZ79AQvZQtA5H9XHXu7Bo",
  "key6": "3c9pJxrctK1CjYgiAmfFx8eL67CFQg3eA5Eh9DMkHZL4BC6UPpieT9BEjv1DD7gUMxThzERWWvyXmj1z7eVczZ1G",
  "key7": "B3MscFUv65xkJ8KZeJggwtUqKwjn57atE3cfL82VgkotNt3Wb7MuGhrTmEB3wnW1HiJJ7dPEWvWf71K5jqTYsSi",
  "key8": "3Sdso1FRMwG7rPyDpbhJLu6KbWEZqT7whty3P2bsJoquE3xEqrREkUV16JbTmKwkwxKCT2Yr8dpWUfvuWzDRqzL2",
  "key9": "4rYecZaXcEwCmSLzxuGUXt6LyBoCwJtRH1c98e4npkERvuNSm4g6fkYQud4EcWrbzuNmZW14vQi6eACpihy2MjAC",
  "key10": "3ktw4ceHckdfekEEAxMzTWKKJx728wtER1ErmSvV1hhvhtgGgwXesGGLHYzfDoQkRzt5TRYJzMheRpJGH2AGJpLw",
  "key11": "2R2PnzkPN2ZMALkx53haizFds6mDtPayiKKn3fF4BwhPTnYRtvEuopiBrhNbQHvaVAK7jwyKQTxFUPL6yUeuspz",
  "key12": "3nX1GysCzWn3zUvR6QLgiechb7xzk96ajTUiuqYw5RhinkKqEDpF8FoukDfJETau8wWvzaGAso9zEHY4gCV5gLxA",
  "key13": "2poAFd7eBKFaxPyFzDNtKfpsQshVPZLHats7ix27dzmmjRjytNbVBcqyPTbVTaNSa42nipAi6FEWjgyHETHKUHY9",
  "key14": "29jQQiE9fykVHbvy4ND6etXVx3LGRmtFf8jL4k7TuCvBeTpWnqv5e2CjXYqxRvT4R2yYC7jG34dZiS7zjGyyPKn8",
  "key15": "2Cqbg1Ykc3JF1x8W4HvhLtRdCcXPX321WWu7h4AvU2qfBRW3JJyE2gzH3FRMFvcpzxMB8bLV2izNavarjFdj4o9W",
  "key16": "2yEkunwXQ4tx4D7ZZPfNXgMxt7GLdnbiQVUL21rPNGUmeJQuYV6ioDqNRvTFHXAAWjsErLt4fLEEAEbhvmM5vYPi",
  "key17": "2PGQz8e8zU1aWhHrWg3kiuw1ufAB6mG9Ky2bWHMb878772QNp5beqvQmj3JfRzRUxFe4et7Yfxi1cZaCGrwJbi3P",
  "key18": "2LWjjUF5hdVzYAxyT6AzsBaGLUL44zNnZWXUFK96YeDg8oyQ3U9YeoAPLikbbfGFQZDi9B4MTzgLud8pnH3XjJpB",
  "key19": "4DebouptGKcQAXUgPPa3pebJSn5e9nDHA77BVbikVPT4dNuGNTVBjgHRvbb1Vnvp2jwfBsVqzxcdVp2381YUFSXw",
  "key20": "qv7DiZapBX837HYUPx84WXSLwqcNt7iC3ppgSXn8yBBCDo1SMhXLeiE76XVyWezCpx7V7xxbUQZWkgAJwAym3s2",
  "key21": "2SJGzMAroJh2gCVkd4LZ3cUfDLHcV9ADePVpJvkSQmoVvSiz1MvfXpRXvBS82tQzsqUapiocE1LFrVtCfu7LkN4N",
  "key22": "5bQTAsRp6Cos1HGQhZpDJYHuXVF9tLmz6L2GJxGbktAQ2cM7ZaYGDjV1d87bKP1ispcEhYiC8Q6DAvxDoXF9ocL7",
  "key23": "4MRFgXAbPpCPK6CaY3DWT6W8JRJLQC5BBm2eniH37YfqLVFoCuh25YujCvNGvboQsVYar7nPinhoNpAxuo3fhgaS",
  "key24": "2637CZUL1qJoTnwK2WMzjmyruis16X7eXkR155ap65upMQPc3g1HGSvWFAQiWfJWUeQUDL3RYS2y4nq59DHFsbcD",
  "key25": "5coVGHVeHz5o1mADcmnko7dejCnxHDjtnJku7bVofcWFGKCEPH9aCLvsdYfKrH9ozg2wLcD5Bai1nWkmrrhrQVhA",
  "key26": "66ETVVVavHNKvgKxKv4cLtHPTeK9u5UX8tpV8BwLjNHQSejVRyVqC4npkeSdxSqCcx6QHadQYSdk8AsiBuDeRxVi",
  "key27": "2vEUpmqrnmF2NtTjEWdWFmgJzkcjTD7Z9DyjPHxV7PwLMQxesCcvgfvRRJkHo6kMv8VnXHVZ98dMHVYRHxjXXYnn",
  "key28": "4CMkoxS3XaT6hudHJ4D6DXeFkYxFDBYjdYzSyQpSwksKg6yev9ddzbEMucNF1iPLmusjTS2cgqC1BBTrXX4CaNAS",
  "key29": "3CTn4z3BXq2RP6k1Dyr2ZUfvGcgz5P8BEfTfki4eCQYKgB8Y9g7jhs1QxcGfXQBUt6EiRd8WVeWrDhz1NMY5H5ZY",
  "key30": "2nw4T4wHSPViHpY6ahxngBPj9hLD5CkaZtYJG9n7Ty3AooRvbqySRC3TPYeHCa2Q7VJgMJmkQcKhwXEYigUnZmf9",
  "key31": "3vfGKmhR15qwGgpePndy8CZJbQJLrcjeKmh3FsD8ef4PcGQHBJVvjh3zoQdprex8F3nkEvpZiyWmCBjkqLBuXPap",
  "key32": "5SE3EhzyrcaULYdtQZ1C1afZUgNUGxjqRRf8gTpp6npfb7Kb4xYEpEjJfiYbUWLyr1J4TEHXmswFLJdzqF4Q8qEy",
  "key33": "5hz99BoxnqFZkXjt14RqGxpSt5HpsEEVdJWAkAGHF8DwekxrjTNKRuZaqW78smZnzZGeqAhBHZ4PfF4HGxHseDxR",
  "key34": "2ewUvPPMZwGwrXrHMpVTZTpHCXEvaRiuRHGv9SBEsmtbEmc7m4eAGhxS7aNnss9F3qrHNGDqmBssrhaUFENUE1fF",
  "key35": "zm5iS1kthNeEhmg2BeF5nM2HoFLsmn5kgjEgsXwxCfG6DWt3DDGhus6hzmm98nP7SfTp8XbF97jg8Ki8eh9Hhxi",
  "key36": "5dRkFe2JtE4VimTxx62U3eyqzUoGgUo6oJpBRTpmLdKFQYm5wUTb8fSXn9Xq1aBdjdFVuh9uWHZNgFYNwrr82EYg",
  "key37": "4JwJ54sLbQrF7EkD3GiVD85kLrm5nKBSLSFuUzuvPtxY1cfpSWMJXtkVndS9S1ec7wka4NnS62SSQWvMPKjQdEQr",
  "key38": "67T2YbCS2u93eQ5ErqCeUG1J7LtezF9cyrHRw963SFPBnVV5wyjhaYwAYn4puWbKkf5cebD16vyHBHqth8WzEfTz",
  "key39": "4yif5vNNEv9QhtWcUxGq7QjWZvATorhjmzYddvbJ5VMzerySn1NGUMwQu6c2dq742DQ7aStzc4u5xR7ZsGkoXFYC",
  "key40": "54um5ifnmKk6t911SAiKpcYkdnhtGgz83QdWpVWgsCknBYd7pBH3ky82pbK3C67ufRayC3AarCBPrh95Ck9uDnhA",
  "key41": "5KXd1QNJdexDkG5gDjYTVBqRR879s4k5piX2NULhPcMr4madeyrvdTERqqRWfDDN5EET9W7u1XbNju1g4R5cc2w",
  "key42": "3eoSNgkiv4BbP5XvM9uhvaS1eCMXU1qGNpVNfVZPSHgDAaF4DGHxyu6r6cSA3FMRoAARDmyMwa7Uqyoi7FAmDoNi",
  "key43": "jJenw4WexuqYBCvQ4Nybs6uUKyQoduJtjarzYSNix2wTBKaWwowJ2nuPgKEzf2c1Mr3xbChv2TbTQRKqmfeYha4",
  "key44": "2P9KC8b8E7fS9TnS6zS6wKhop7Exs5WoFGA9sigqiZ23ZSPRG2ZstMxBfJBDvuA2SunnQCtRt4EPCNdn2uJfARCH",
  "key45": "3g2iGFV2KBrpntrnYYihDhc1sMXdEYaQ8byfL65jBgA4YS6c96CB5emvdxGfBVKJFdnMx1adHLwcEY6RSUv4whU4",
  "key46": "3AWApmpkvVcawxwpbxgDAkyuwrXKuUbcnoPrGwoNrwCAdNm1DQd6APatpykD7TQoEiZFVRwFknzA9XPpEp11WcJc"
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
