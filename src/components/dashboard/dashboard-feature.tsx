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
    "4q6GGBAcKWWE8HbZvbWBXsmYFjkwuhXfms5ufPnMBmyjMAABLW4igNV8h2zrxW2EL5icRPeQuBm7NTqAeY9NJPv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NXwpW3seXcGYuVFqeRYsSw9vzXcPDRNhohD2cFVZtgwRsNRzUFdByYnoLH5WAsLqHDjLjcdxShepnxQm4CkKmx",
  "key1": "5H9XVs3UcsUMESVpWwWmegY91kHoKQjV66qtZT9waJSZJnQ7xYBXUhRTGoRfRvzcPaAvRWGv7zUTZrDUGEH38oDd",
  "key2": "5GomoCbbBL3VY1br8FPijBP7SJx7r9W2UrmxQdMU2ihybuBrqeAVbpF2EUQceWRWKqGqerssx8Wgy4Feut5jNVH2",
  "key3": "2Trdo95rP7jazUp194wLmH2UVhbYqb1jY77sjauU9izR5XAufyf6zmVabwTxnPmLGxxEcKro9jdVatwM93TRBMcU",
  "key4": "3A7kQZ5oD2ipyNKQB2Dtg1EFeoSRxAbobiy7UzkfxcRcUL9YG9DhpeF5fQoBdPm2jrbkVoHu4jJPN8aHc2Cunf4j",
  "key5": "3yf8JBvJtuXRJhLfFsCmJfk37XyPiEaAMjkkUD4h7a2YHB6n2VWCX6tq2HBCav27mfjf3waMYk4wUzFUHopFCFrf",
  "key6": "4BUhZuVQVWPJWMxGfpMB6VDxVA53vyygbfzF83D5Xty4mef1r91m8QK6i226K6HxFqgP6diJKtx8x9ayCBixDX6m",
  "key7": "DDaP5Ehg4g97Gd89NANgZcP9ydC3chEfVGkJqpcSYTfmMHpEAWBzYg7JGXQMUzKQiidLfPsfyrgnhpWMV2TwtMn",
  "key8": "452UaKT8zst5pG41i4TpU8hr3dqqsiywgzdQwijZnnXGYwSwCoEsP49tTT8WxBvzfKHwRu8xSbqNMfM4Xc44LaCQ",
  "key9": "4A5fM4FFkwZ8JYgVPLZLnnbffRFmWg2ACzF6M8UvrXW9VttbixQeWjUJygGW9QghZLKirdZ1nBv15sT76BLqaeK1",
  "key10": "R6JxoSqozFZfCyEK2v3jXhuX7EW6bRxB6chhQxGQ1ow1nunf4FTtgUGGpSNP4AqY24tzuw7oWHdKZdqqUHvhoB1",
  "key11": "gCGNgeBWecxQXB3ejWBDsbyQKwwx1sBSvGmeWcRcdnWZTLHRjbnzDgR5mcFsULU2joDqZPoxG3DATuzvBz8QWQY",
  "key12": "3amxXgjawfztkKuPtfQSoo47Rh3gCf86wSzpWWvJhNqthgMaQ9TEKaQD7JHUfVmnad7FPUMKv7vBqJGUuDbSin1v",
  "key13": "ycUQJKXE7XBJHMS7Cj4VHiLwU8Wh8E8Dpu2oyMrfYGZMDuywQkYpjudAEhVtoWhKJBWkkBtxSUTeui73kCyDZ5Z",
  "key14": "5aBkxn7CppLkxqmWToMiQv7nyJJHM4tA8TQBwoNnSHujRzdXrqV6EMQMggFsgjQGLdxTeH6JQF8rfgSb1eR3c2Dh",
  "key15": "3xRLndGn32snT3EfJYXRhRqLsEwwkQ8qoMTKCTLdx5tnCYr75cSmAyNzNnDmJ2S1UJuJchwzUMAK2vPkvQyrr5so",
  "key16": "5mgKdq2M3k4nH4VTDjy49sdKbtr6YXghGZVqigCxNorYo8U66bvVDbE5SiNoHNhZW4zs4XxKQ7TA5RD4DNRkKzSv",
  "key17": "4uQG66QQnuDDGo7DgPuyJ351xNFnYGdwbyHE8ucsEdbgeQcRKo1zhjzQrRBCatg1KtL9rZCMSD3QyQgEZqTnPL9p",
  "key18": "5n5QwDLNCPHQdcWkiVNrZbJb25skznniKMQhuhUSoVW3wybD3XsNuKy1vFykKByPAvo3ey1xer7H2kizuUifxiHC",
  "key19": "2Pvb6Umb3ES4AmQabExccNRpUmGUrvJCtbByuNQ6WMmF7R1fosbgwi2BzrMECiEamMcU2Gp1BKpWNGZMuEgRDhLj",
  "key20": "4mqKjeNefgmVAncE3Ywg6ygRFTmvba5QqRGrtzEDfUcrdC78jqT1W4tRQ2intXX6176VyXuU1pmAQqKmkcwFR34M",
  "key21": "3nbHdhwwsc4RyjeszLTK62kqHS1uK1JVGKXfdUQMcTp33Gk6BNCpnXn19x1DPTnjgUCnsUxkdXj6SrjSDdqvjgLp",
  "key22": "4qCWu5J4SfWhfxZLjXP7Rvoxg8MJAdM3BFbUL6d3utXDsUd5Fm9WDYPiCQVM8wr9hPSuHWyu1nhxxQeH6HqgcNZd",
  "key23": "5Pwss3mfmYRmD9ANFW2zMcZTUVASs6AJqrA3XAGiLzg7iftgZWDo3YnTtC5XXJpRva5yRmMBzwhmgx5XxPHR3umq",
  "key24": "3xF6dooaBwKts562LrC94fza1hHpGcNpeDENGHhYARh1uKXw9gJgYWpoGgtUDSid6yWqgHTfNfZspYR8u7BQ8zo8",
  "key25": "63jP3VbMXkCLwCSdoQnaDS6nZ5eEBFgnehYoEewobbmxYdqfAFpuGzXoRJf8PFQyLgE3fS1UHGdyJEfXH8kHoHq1",
  "key26": "VrjMZYngD4ccaAWwzs3qcEZvqfPRTnNoaV8FruZwsSin3XajHvBzwkrVMdXMnr7t96ixL6bFK8Q49vWNTtxoSzT",
  "key27": "2pRb5YG32fr7ZyptzTbK3a5Ufxs6cJTYV3Cf2aND18CnmsSppbpATFrV1mWrvTmnh6ZSFgoDzfoZBQH9AufwLHAa",
  "key28": "2UAt3rzsYvRpXnsVTdAb74UFg3M7GKyKDpqzM1PZCsV4ENjnVek4umzc6ss3enK7xzFyX1MnanrLmEecQhJGQgZH",
  "key29": "3iHMufT6PGCpdWJH8GHF39mzkCmxHvnMDuQMe4uMgTQugUhuPtfoHYx3pDTP1DzQMAWAiCY38xMxsqZFSPmxMok8",
  "key30": "2UdDSYpoNMeR5QtiwGgWHdwCPw8tLoGBnEUTLXhVKj5qmEzkBv1dj4CDhCgV9dW9a2cotZjTqzABYqHfXYKE49Pj",
  "key31": "2ArMc7qsrAxbhuT1qyWhUJFVMCefxTC2RPeLve5wGHUUG2j4yfZVVyG1GoCjWf76HkfsbhRPdEbP73zCfyEDZNSN",
  "key32": "2KfXtSyPBaQJnCkw7JxZD9hebXvXDw2DdBgogfTijvHdkveFAM1zsgoFbF4dfNr2bW8w8VgVC8aTZKixE1bxxACx",
  "key33": "2o6PDKjirGUu2oYbXJEZiv8hPkd5BbEMLWNh5AkY5bfekRFGoNaQppv8Vfv4HKLg5yYrmfdt6F4FKm7JEFrkyuwK",
  "key34": "2kPns7Cuw8fi2GzDmkpkg5fqHhE6odot3DHfv7hN1D46bCW7u22KcAHTsUHmLVJSBFcfrZUxhERzRZzfssDeeRU6",
  "key35": "2SvHFTxE2gEymmuXeccfXa9ETo19pGAaTKuMVqEfMrUTi7qbC4GrYQn98uCX9gHhwrTMZH14FMF37gvCfcKiKcds",
  "key36": "4V5yUjHkwUB6oShm1MvceYvXiUSQYmxA5mtfrxFy4vwNpyJoudXTAmW7dfVVQDfSEwCvvV9iEymxpwmTcw2kGRef",
  "key37": "4vZYBiWrUY2Gr68VLUFg6XGdKBu1iPUtFWXwG4TFU2wbaGav1RbHB1uA4FsikjkiRUKJ5f6a9TnkcqwH5EyhW7w6",
  "key38": "4WkQJ26bdWo8NNa6Kfydn2huuerRZq52oft3owA6pGLwDYgqLwJ8kjmAmk6LYk67BxWaCTPFvVW8cjPALui5qZyN",
  "key39": "4398KM9e5fsdNFoLXUyZbBYW4CbZo9HwwXbB1NTSvv3zNH3nw86XcgwuL7BrLePrQ2AR86o7y6rMNqzVQbNQ5Cho",
  "key40": "3RrMXcLea2FDmp9FHvg788SzeddTqz1i1KNACh13JQDikgo6y3xoVdEVJ8CfvWCx7bqWFELPM2s3wMXX7sYKaoQx"
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
