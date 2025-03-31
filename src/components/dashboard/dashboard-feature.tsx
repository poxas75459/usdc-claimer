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
    "3mJ2qptZc5qDRMBPPCB2Th5qJAgZaTge7BK6tyvj5T9gmTWf6PDSXhaVzfQreBrW39ouTHtYcapBqWTCtxHJ8ahV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38U26MBUQTa9ajgjCWF5F2Ga2QYBKUUcG3c5oa2bmsqwCLqnRdwSiu1cQGodTkYY7cEDBtuptr6r9B7kkLmJ2fUd",
  "key1": "64sSmqmRyxrQWweyZR5wZvBg4j5GR7mjHzmu2ytQaPgc629t2tdKkFMigf43pRXHPugT2T8LwUWSTGFQXJU4vy3R",
  "key2": "3yDuQEhi5PhGHygBBV8upN1nrbiEWq4nwD1uRTWLkU3YpPnjwgKhkdGv2aYYYLUWe29uAFLjExGuxoZNjgZEUafr",
  "key3": "3cLKrMprYPJriVbU6hVSzdXdP9JT1VSJAXGbsK411W9vjkJJZPbmBgvbapEtLf2MmDFGk28cfWBFiPbz4aEq4o8H",
  "key4": "5xk6eYCEJiFy1rb8cGvLwoLfhMg1pvFn8YGACnTZpJi7sk8K4w1Rnodw93KJHcAFAhq1hHqs9PMhJMsrXGvv56uf",
  "key5": "2RFsaSpjy9PQMFW8AA3QCKtLawE3uPPw41fsdLVGphBPUBXjeqjDKt5teZV7VVnXCvShopENEjESKnX3FxZ8URwd",
  "key6": "4boEVtZUuu4yjHNDV6CVXUQzPbufbDfUAJvtoY6D2MSmtuBNxGKiGQWYyXjKVAZuhiNpfjB8pndH2UUDsUvGgvpc",
  "key7": "eENbAUuuFsXtr1Yn5SDFjMSHiVHSrvKtJGL2cWmPQ3Sqz3GJ3dJBGdjJfjwH7HiaU3GBxnQe9Hfc3ZJAyX7JURb",
  "key8": "5N8pb5Av5cB1DBLmJap4LwUsd24PcPHXzeVGckREsGckA7C9rGBoYgq8BDdHFcgkKPxffq5wvnRRz5RgxWAoLwXm",
  "key9": "4Zpiqw6cPePuVDFiMWtNYzk7QFzyvzv9n1f8bAifw6m6PeeHst4rUDDT67YytpJrzJLyD5BsEBKQPmWFLCXw4StX",
  "key10": "624rccWSXPGRALCPNi6kvM9cCXXAosuyYkqyUndPGMgePzB6t8xjeVbyxNA4at6bgVVVkET778K7V5MLrjU575B8",
  "key11": "24GEAzhdosHY1btRQ33FUuCbGZkBsxbJnzdsCaxLy7xnqrVekkDSD2vwDK8J3wXfSu5yJNkuG4KuP2EumVL2SZwf",
  "key12": "3aNvwMPkTjEEeFdNJ5euEukJkEQdQDtv4C4TYeAveDdQ8rDkps28NzkCu3aTeXLvXqyrmrTwCK57g7wQbXQTdckZ",
  "key13": "5t462L4NjHMSrkGXmbqU6Ni3vMUC5PSEFz8B6yopPj848NxgGnNmTHorv1QaPLAVfxhgkAJLWkrKCbmVeJAfqHas",
  "key14": "2zSHwSwShJ8sr17DqgQcnCoYGFLEc2UUzcrvpA8hLnFkgVhnX8kL1mKear2r1jDS5gdqXPzaYAZKTtuzLv67243A",
  "key15": "2HPuh75cMzzdBrrfFN9UESHup33dVs3swvHKJTd6SQLwkGGpr2JpvrWC8Jb7esX9ZE6CKRvx8zzCVr7hvUbVVL9g",
  "key16": "3yiRfCgczwEZajKLGfgMW6rvnSzpYtb5EmGyarypQzHVTxfcXJXjcrGAN5QeDztaZy5XkdoxosMutq59S9WxaJVT",
  "key17": "5KurTeSJKVHKod55RQYC9GapxDpXF8Gpn8mCPnoo8FQ7Yqq1NbyHNghhSan1wFBMdpXM9PVhXvT1CpPdsTgMq2fj",
  "key18": "3o7u62QbPtThEw7T1gfPfrcVGcqBSjWTGCmKY7fV1BFSgMHarb7y6r1M57jFHxg1sGYXxTu21T88T28KGBLK9nKp",
  "key19": "3xdet77ddqND3AH6aUS6rJgBJeg76DsPbkvDoY6qukmu9cWJuvoG7B9DDVC4djFoYT2SnJTamDiuX5CmRJepG6Tx",
  "key20": "42nXSP8SbeuPgZheQB5uTbXiuKwdHMJyuQ6FYZzN1oShjscULnBTpivJrbQdYZLkfy1V3NLDhXTkuF9m5mXyiC6C",
  "key21": "3pTKURrJsH2TmdbkC2Bs7yBiVh6QpRpypoD3HJRN1Mi2kwHPLaFM92xCgqgDCqtfGWkpNrhbWY2LUzzZUakn5sVm",
  "key22": "2crGWL9ucPjBxECfShAaeBwyT4McGRUzCHpVT6XGsFXrkL8AuNcjHb9TCwxP1aYKV71B9nVSSJPc2kaW7MiUHeQ3",
  "key23": "YWxQCSR83PVbC2sbc7pvSp17UMF39TA6zGD54DMQoV13NohjbjvHPvppZ9cEguPaLxHoX1KSeJsbEnzt42jGXyz",
  "key24": "4oVTwkZta8oMbqLwC3ZQvY8n7vZBh5NzdLU5odYJ1okL1LWCvWSSUaesHnFBxkKRd265sbqqTtZgfXtkDYBPUARU",
  "key25": "3HGRr1p5QSeRSMWs9BNmvFv1bBm9H1bzfZp1qBneayssZBK2R2T9VJQZMu8m7G3BxoGJCqGYMCzMjowaeWmB5m3",
  "key26": "4khnPsKVwh2mSo7XcG5aVpAwRmerVjWcks8TS9b7qLPavaqf7GQu8F1j8cgAzZvMLF8yRW5fy55raru5BXSSwgFn",
  "key27": "4hMzei9Tx4L5PuyBHcTaV6hMhPNwY777fEcMv1M5TDaPAmcRohns7pmxhTHv6HfW4s9o37hGaaoMZv2K689JtD1p",
  "key28": "54SutznoEfUXvngpitKUFH9yZkMVJ6tS7Du6atc4apnUXmfhKryzrhRNnDVYXPCcy6sZA3aZo3QKFwuuERAf4Q3C",
  "key29": "3eE5v8T65S9ommoAhr8WRL3gpncKdDp6e5iWxXuoKvhtrj3ds6YnpZA7yxWBfy2vVbSuPhewxn4u2MczucYMJN2m",
  "key30": "3jhUByd4EifH55ykKzpyBgioxPtvPyRfyNTn25htxRmoxG6oHqk9nsWbAS5GxvHheEivuGdQ77FVFFFjyMZ6Mqdq",
  "key31": "21pgVFEdkxbhLf11NB9AepniCiH8Zz771cycM9vAefSoTwwuPwMENMCNUQZqa1RVtL7bX3czaukQ7caFBkAMZ5n6",
  "key32": "3Dk3AhdYSmtAb29b55po9n1GQATepZw1qDG5EfZxX534MiD51dKw3YyPNoBaMSizLReFts4vaMpFgo19edjCdrP3",
  "key33": "3sDJebSs4Z2Q59uzbM2aKtCCaXhzBhiaWtw58kFk5xrFtPiiu6rNZ43qQhaVRAxkzgAHSw5LyNr4nVuGqsEJ4GtD",
  "key34": "3KxkxSixD5oybHgJh786F2RUXJffaouc2PwNp5DD7s1aNuMkkLUWmXSdX5p5UNjtJy91NE5mHS18YXLESJdNXEYw"
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
