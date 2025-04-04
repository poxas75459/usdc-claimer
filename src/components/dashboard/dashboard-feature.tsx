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
    "WKyf65XAFxYu1kzXtr1Ft1QvCoBXKY9KurgWjTapump9C2rVn1cw2pXiC4P8GCcJ8tVB61QG4vChT5RptpGzj26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48dwQwJfhTD2YCHsXiZgL16YRMpEpSDPy1JAq1DJBBwDnbau51RHXXaT51WSaZBdbYdpFdDBdUu8YdGCRJYAKqfK",
  "key1": "nm8SMMYRpkQLP7QpjSaYqSCkBHbkS2Kvw4tDX4kxRUJF7EnJBEbNQXDuUikdxWLHwi7Efgg7cRRtzBJdycAJM8C",
  "key2": "CNE8NYdFHwtyUPaC5pQEnPSvritDoJwdm4P9zbESmFp9MrUM6mPNZaC4AvZBUuQKCGhVUX2ssyirt8TzCBKeAR8",
  "key3": "f2qEuFGb3ECiQDDr8j25zCxMortHTafiKZNArSzFSB3VDXQbLgPZNhEgk7tnUUavWr7rdHJ1St6AgS6xPgT3wiG",
  "key4": "3w5uRwffKKt2zNFNQtSRFBadvgQncCqbEWQddH8ykv7xoGsvW5mq7G2DHaLroBQMsNpuzS41DqyKeLa9L7RiuW6f",
  "key5": "4kL5MXTL38By8Wvr7Y7i8ZiBFD9ipMEqtmNdcdCDqSV3q6hCBcGgyEuu9P3DWKdNExtTGZ147HofhJpwUF4bPzDq",
  "key6": "34Jhbtv2LBiSbdT2ByPquxxN1Sr8BDFRFXJpsy3Gp28yJsLpwf3QAiN9fNyX33P7gaAJMLMVr38WzRp6rarpa1Wv",
  "key7": "2nWEof16ggqYvCJgEgYxmro2vHBQAS32LYtqckmvKLGrd19wfaoTHfMZ1jSMGfVY7szVep4BEgK2h16y3hJSc9zi",
  "key8": "5oFna9QcSxZ6ks7DMbS5dAxRnPQdZ7v5qVHYH1DrXupd9ydes55uKA3QRbquoAqSrm5ADeaeaJtQwSwnQwfMLjr3",
  "key9": "4AxA8wCi32XSvjE97GSyjUkrzxFcijJDUyyKN7rwYJUD4yzmMdTVB4e3QHKUY1y4ZxJ96kSv3aCmgTgHT5rGGJ5C",
  "key10": "4qMJ7mBVxjb7mYuFAi5wkgTbAH12ByyhnAAXzqZkMf8hJmka9Ui41McfTx9grRaDs9Z6S6t1QY1pjoyH1jGWjqgL",
  "key11": "5aEh27SX33Z3FFHgXMk5oJxVC8dFs1NaaLKLmemPyW6fvGTCdvyYwVp3WwQumk2Kt3tEFm4rwfi1uYyXB5UMw5dW",
  "key12": "4FWUsD2PVDV85L8CesAJ8UzgK9LcC4416WGJzuh4Lar1zXtr1o77CyLkgsfXf3U8tvkKvDPKngDUicCQZM2Ws9mu",
  "key13": "3SJFqBA9J84kUDbjaPHapeUkruStEg7Ub4yMj2umbrGg7rNtLDzCvs2PnC1TXfnwsQnSKEsE3jUSLEu8FtE42pmK",
  "key14": "2Zr7Qqf7sEiLmQfRKivWYU4Q3uand4v9i9adL9uEMEWPqwzBu9SiRv7U9YXK99EPBfPfyG4n4RT4jPgaVxbYgZRP",
  "key15": "2rgtuR8J7Dpw1H95P29LQ7yiEU9sjYzrReFGB5ySNQKkvoN4pXQ8io3VcR9VNz4fsJhF6iUPRG1ca5SiDXNzxqBe",
  "key16": "5n4Z5Xh2iiPya221LmsiskWWMERiksvJocYuDcBGAjrUXF35SiSeEiLaKUfF6aMhP8cFsT46eKCgJhP3tMFyqjzT",
  "key17": "3LCsbzgbSuFvRFNo56BPdoA3CTsGu3GDY4Pxu9vPSqKGWdcxJ94bhikzHgi47SLHKpjKRycuaHJcrhufoD3vu1Di",
  "key18": "5qiZHotxAAFa6obFxeJQeW1sa9v9DW5Hxh7wuX3YfB7FkVdC21s8741shEHRP5mCvRzPqWRWHJsTWr3bDCw2SYX5",
  "key19": "2qbwqm2odXkyHKmEkRPoGhMR8rCEPsSNGhWdsa9Cu6nHjHsuWB4Kr4ria8GaZBVPaptdPP8MMz9KY3esRRZVa4hp",
  "key20": "maoEUaoeAbiPGq9obBC3nuxAYUV4ALajMhdzj8B9kE3ysBCbzeQWyGNQVUqStEs1v5RsLWk5bi9yao6cegN92u2",
  "key21": "3qA1wq6P2RJ1bgNtW1ppxMhHw2ZZqbis38U94aG8HWJLvGoSLSGsBsDP41bRfJw5vtEAQMjbokEo1GZKbP8g7Jbq",
  "key22": "T6FUFMpERpvHni4b2aarvLAdLNyd7trQeT1sXCnDgC52rJMUN4Avi5xzCMjsFmsRfpkrKMHAM9sSdEyCNPDx2Km",
  "key23": "2XAkBwzCLQyVZNAcJaPjjXHrVD1M5rTP4h6CbbEwmYxzPVRB6oYXEJzAUnVDHdQJ6J9Y86A19VYtWLHp232kHWfh",
  "key24": "2PP4EWWi4fDVc4gwMq7grAK32xC2JNovGWDsyiLTXCQAPEHkZ68fjGB9YwVPCWGEzFX9NXcbtkUvpuSxwyLZ9JvW",
  "key25": "3WCn38Qqawm9ThA6oAKXAAXMriEg4JpG1aC32criTwYgJX4FA1GjUJAKUCRzeLHPzNVHYwPnQ52xeZgi2zGR2xW9",
  "key26": "2vUE6ZhQa1pvWciuvZ4AMG93CKyQ8ZoCEy17kesc2dvc4YbsJe8Zas6uNbyMZUizSfxLfRJpA9BomEMk6ZZxLrYE",
  "key27": "26iEzqBVyVZbyXDsoGjNu9CKsp7U8Uw93LJMSk9DUhEqCCu5w1zzu5rdsGTJpugow9jMYhVHJzgKcku7izFGmiBt",
  "key28": "T3kvFJD5kZEqRvYEh88Zvti7DQCAZoXxvJCjbBp6XPx7CGPtSbgjJcSYaauxmtYRm7VkxRpjbSbW9GUnxzhpF2T",
  "key29": "3uezy53VWHF2yGHSLoBfConf8quZB15B3jHeAKRhmfLh3hM1djoiUgVZzWqKfiaEkQoZcSvMdmYm5JnYoLjRP3Sj",
  "key30": "4y9ca3N9mNzmdxLpWC5x7LsCaXmE73AFqSYtAUwh91Yu2KHtKzyhzuMfB2guNrmRA8Q651BBv7C6tRAVUnf6c7tf",
  "key31": "4xa47aHK31C3iFSyErYgYTSSX8rADELV3RicXYoENKweSBBUeuSZHoeUo3uBUTvbX94tQr4B7HN1yLKaFWSgRjcH",
  "key32": "p4f6ZzrjAi58oJStnZ34EfFQfEKgKZMhXypi3LRb4BnYL7yVfBXEDf4gPany9zR4W9f2RT5pwvqWaNV4sS21759",
  "key33": "UgTueoiMaBrJXAecrTS3Ds6GhP8X7NHjq35ytRmzxC1ecrzUTuskMb6G25twDLeaevxFS6pkqyEJTVosXn2HjAS",
  "key34": "4A21SYP44nju5E4hxHWW2r6jnvu1FC2xyDCVUyyUox47Q7mCt5zFJ5zrzcYKVGAn6fQyPxo7dZCjECy1HTo2TJDe",
  "key35": "5bA4mS7n3jDttWVTdNryFhUD8izk1sU8DpsGQpzdJWh2UNWNGPS53tdqqTH93UvCghsbqwGHZzzvJbGa4WvuGiJR"
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
