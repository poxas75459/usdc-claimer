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
    "2dg8YcfSKQmnTsasmvtdcPGmomndaJ9WGP1LGxVAF1YuYbVviqY5gry7guUf4NesQZuhwUcQ3q6mL6xXKTSwP2gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KEi1nHEpf9CZvNFSa3h8RiXKPobxeCfLKZjQaeq69JZFLrzZSVSa4Q8FobBuLRzwK4jsrjyHtsrJjaMk93BimBL",
  "key1": "pg5YDXw4aAmDHfzcWps7cW1QyUARVLiT5bVFz9XKwapu8HWU9rFqYkLZbzfJZX8XLPUW1pFuSr1jTdTScXhwkjY",
  "key2": "and5g9JJYJfmRAHvyPxVuie24w8iX5b4jzJtmLo8Rr15k94LkPi9YqXJiJe3fLVzhaHsALi1j18enMLArQeGw7U",
  "key3": "2h34VAENP6aaBfPgm2bM9K2Ns1Z8QLXF9xdCXrnJ5orqsp6iU63hj5EXpdkkMRwac7K6Cv6tJfGjmwfAqoEpEZ1k",
  "key4": "2NdcWFv2ovQeUawnfso4hAMHCwrdWvm6QWyH73tNymdjoktsX2D5M9yKyVcqAyHXxU61AWB2Vn9CACJV5nZRheAb",
  "key5": "3zNxQBXpXRSckuWDRQbqFqrSMcDVvcyzkThX76iBZ3J1XUT36coiKzKwr3Z1AtNDZuNrV8Mb9VNjdJ33wdyry7on",
  "key6": "22KsgXWxnWwty4orkBsYm8tdotiXZEpENBE6aymGX6nT1vraW9U371KsBhUDEbYtutUiUTts6tXxN7FiQGy3AvTJ",
  "key7": "4r6bd7NNnPVWZS7fiPFiJ3D37iH2SwJ9W16wGnq6XBR1HiH9SD1Sn3iZ4XuwgygZwHBwGNgv6skULUDHBetnhFqd",
  "key8": "4mfxDrMwmode66oAPz9uNuAiiwEhZD8JgCugg22o8F2KmrWSPcTFP59RDR5cjqg73CTYAEbHMLsWbb4jT8kACnN",
  "key9": "3v9ZbZzK64KJPQ2uHFCEL5p3qLfGukeZN8PsTWTn73NjQEWZq6cu3ggMgdJhAwFYAxrBtMPW5owrCapbtGf1RRrv",
  "key10": "3L9seSyEULZUxzxApcy8UQNxsax1jt7nZgdMeGAoQRhH2jws68BJ878pyBLhiV4azWixZEftpTP4kNTgqgAADmkM",
  "key11": "2GchqRRbQbVPhoyGTCdiXw3cMwp16Z3gRuDYsR6xfbeKSASx2BmgeVmJgbPrHTBPzNtsNBKzJ8ufaZC5usZfRtm4",
  "key12": "5ivZmN6u46wn1TULPJFygWmAQ7T7ctvTdXLNL8REvUdQkKvSDRnjUyKPWwmNNwQMkFfx82DJxmd6aoi9LxEpunEW",
  "key13": "3JsuxYRuD9nqnHXxBWdHyLDQNLBUadQ3fyaBUP2Z1qhtWLz88b3UQ3ig7Dk7stm1s3RnHTfWSUMbkoMSA97eX8JE",
  "key14": "4CmZRVExbd7yhc2cBeam3b3YCMKd8cRy9doLUuyNEamxmpkT1UtSZxDctdMcaUvPKBswvrdZzJJ34jY8tjp7SQJv",
  "key15": "28PkuC1PqYG8zG4b4YwHanhNaWjt3kcCb1LdCBoeijEP5UqpGc24xnjn24vtKNBsvzfq8gPGSzmJqrkBoeKzDWyg",
  "key16": "4UGrcHwvDrUsaucQqSANChSa7JgiUt7ZLLyMk2ZouGvtM243meTdWYzLpZuB3tfv3uSTHZHrJxE2mZcqf1yGNS1z",
  "key17": "3bS12pff78QFRck7ZgLCc3yGwJ5A4JsqCZn9tx3vrR4kQozXSTf29jgTBiTiRiA3buxzj47s7B3Dx7G34H971Fuc",
  "key18": "51BBi9VaAb6ng38WJExqEikETz3CuVwf4bbYVAjT81EpC3ACcthFF8eLFaUyBhY5UdYYGhHombmv4xvQZdVdohvr",
  "key19": "2VvtpXQLQMZKpFNVJy1pJGDA6yCBq3ixPgC2284rRn5XyQWZ3dXNiZ2QTg4wAdsNpVnw58chZY9jdSmDZ2QrBb91",
  "key20": "7g9mmMzyJ74g56S4FX3GbpV8B2aBmsFdvs9UocpGbDVKVYijAgK6fmNUqYgYdFn48Ar7FwSUdAnHKQF2TTkrseF",
  "key21": "3V8m5qiWNN5QNoD7RVfSojaB9UXDKXjeGEfiMYuMVAZm3du7iVbLGiUiC7Q5fKPUazt3B4jsRFLYteWYhwFPwBAv",
  "key22": "5jrLrcfhJkXzdKuMix3e2SqkvWFMBvLvrKLZc54sHK2fokZXQgFwVKJYFA77YHdWgGkFJUqinW3xrQpWbcPNCDUg",
  "key23": "43zt6c6J8A5Vp52NYEA7yDUYqZLot9N2Vq5chzckBzPCmo5RCyCQLt3qJpfa9y4vbMscPY7NuUmFgrDkVokabc3a",
  "key24": "366Bdx725Kaqf1gMpUr2wPv8Y5ZaR94B57Awm2Hnpi21sEgmrKRUDY7d3qyKpiWKYuEtwEvRW8oj5sSqAWKYB3AE",
  "key25": "64AqW72DzJohvjyWdKYbCFCJzw4yFAYgSztd6Gs1SppUYX2Q5DLccmZWmh2TqEoy3uMyQe4n6TjoELhswWTmhuoc",
  "key26": "3MeR4MwG2Ys7YhgPwvG9ssRfhQZNnSrpHJdrPsZqnYi7z67BUE4RTfUicP7FxpbhBRWDF1wkANPskrcYyWbfWhuX",
  "key27": "4NQRuJMY1vAz5Bfy9gwcw2oMj7m5AsqtfK19kt1fNS1YySsPSrpasYqaqxhQUMFhXHseTyqGqspr1WuKVvdHsGja",
  "key28": "2oqeTar1t2RSpHZRLgkjcSf5kF6mDZzfCTrcNLcHJcpkyhggr9beZGsmcAF46GVs5YkC6n9yfxNygpZdZYyxizv5",
  "key29": "2NyXGvE6Rwn8qoi2xJD1r3EzmiDtZUE8nNLBV9z7WaHVqUwrEJMCw3iTikjyEmvq1VTBAQGNUFWu8eWghHAKwfgX",
  "key30": "46kukNKVArDZSF4MMfUWP7TPoPcj7EFkAzwiXPRhjLtmJ4My4GqrStWfmy6L9cgfqrjuevykujzexk9TWkjVX3sp",
  "key31": "3pKmcof9FJ6m3dkDertxbUFcj3SDYgbK1oX23ZXAKtigfRVJx3X5VqhaYeLsDkkAki7aCqsMHWsynygDoE4SN8eH",
  "key32": "4Ax9EZuMAKaFFY7WUgTDoN3YJJmuRRxR9wFmYPbFgqmVpVzhYsEbepyhu1YNfXCHKeG3roo1auxY6NSF5hYiEuw1",
  "key33": "559uJRD6JBu3VHLYRes6CMiWH1VoBaQNuoPREMUhjK2Cfaixw6bnqHLTyK6c3AYQ3tvNvyErmsQwLKoRZxJsb8sV",
  "key34": "26NcdC8xR9Zph8MpusqoWnAT3dqD1f9MTi7uP6ZnCVUCfJKKoSp8J1E5QNCsimFvukz5HyRRhoBvXkw5rBiesuH6",
  "key35": "4qNzUhR1HbfFQoxgjgsSPv7X7sRxwpoEoXwzE3BBs59m6vuYctAMjZ7C5hjvejB6auYt4y3B3DCvpjg2aX2zTwzf",
  "key36": "FaHzDNR3nA2mGUakP82WTkWNyp55F4gTHDGNAaVxhs1gbU8fznHhKrRPDscJ21Cfd8VRiFGHQwdHaTKdC3AEVcY",
  "key37": "4hC8rgLxbTyQZSdjfZ5uRLyrjVn24VjKSHRJ1LmKRabzz19CV6X1JFm3NDQU3Xdv99zVDJJURkNAdLiN2MscQC7j",
  "key38": "5yA5Qtr9kCNGYPxQqL5frdDUgnDwLhFBnMfXqmPKvkTCpaoQbYnPAD3dRL3HkGKxbVJ2r7AtHjPMhHDJHRdQfsPo",
  "key39": "5Fkiu29UDCFdMHCvAGbDSj4re2FqnmSwo6hnrWjo8XLqrw9xTg24MEVB5tLjJGkdc8KGrmQxxWd4LSpewqK5DWE2",
  "key40": "2txL8XVX8m3gL3KEAfQ972je4ZRKSM5gXyPB8BUJJiMebfUxBkPaTc7Q2yVRUvzKSLkgbWfsj29iM5fuQnWQCV8g",
  "key41": "4xSnyAKjoRjwP1CAF9N7jR2sAvghWgK584uWYmKDgrieivt9WBVQTrvNdV2DmMKZkYPqYXeoP5S9D3U7UKPaFzTm",
  "key42": "2Cg6hbLj2nws1MNX7Rxi45WmsPercNbm5PJzRCVh51HCpNkTJTm35oxTx1jS2aZ6uYet3vTXZknG9kgVG739sid2",
  "key43": "4ne8kHQjRUkyP4KS6YTQ2djjyQKby33K4WYb7trQdKkUNh8r6fG82cs8T5E1W8Q9s5tY6FLzUVHXhDDCghdsLuUk",
  "key44": "2H9yHSd7VcLhL8UHgHp3Tq7JtXAWUKMbekUVgSuJLQRXC6WhaPUnjSThjAXHA5G6ZdDUSXk9pZMJbmuwttmpXLCn",
  "key45": "5UVmZXoQChozgg7ciWJJHsmUnz2jPyPaqt8sVLUot6fYRV3DfTFhe39jzKkX7JHxLWyxi8QsXifjD6LMVQ7iGYww"
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
