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
    "47fe7UtucwYFQYkypfNtFkhxvRhxnT6Nr8nNXHQGwbRWPDq8oqn2GYn4XmAANc2hm9AwaWKtGuFNit4py15Mteii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KQGvmbn2cW99SduYyENwLsKRrDPidGRCd8w7CFeWqFcSU6qKqAuixAE5QG5r1xc6ZJ4XXXk9Unav3c1irK4XRXg",
  "key1": "574KgjVwPQxYJhW33S3gKGJVc6iPJ5jBqL4XubqAsFBP8ieMMWw471LbzmAGyLsqT6UN8dPyyx71mFKPnWrSUe4U",
  "key2": "5HishBnt94N3HQZr3ct2xCfqvGWSV43nvZdCSzjV2aadLz8nhxcwVVBwrJvBxrWQVnXho3fsMMUa8KoFGZ4ZkZxa",
  "key3": "4PCC5iLPYrDFJPocDxJukFngz5XeFRNv5FzhvB3qNHG4zPyasqqRZ6fveQELJenZ4PbYyjM5VAfHhsfFVsB6GEow",
  "key4": "5iAMEL18b564ED7K52PpxagU1mwcgHFTikCusAvsswnMU1EWnqxYRGYNkfb7scPMFimaNPjD97ojS1zXUBTKCyL7",
  "key5": "4D6qG6zVSkwm8d4keXYWgnW8DvVbyJR8unfZVT4zfsXq69jSzgsTY3VCL3nQQWrAsxb1NUKCDzSCiaavh1EkcRv5",
  "key6": "2Vd3hKExJhLt4rmjWCZg2mKRxLTVCAyikRzG5AxEWQ2YjZCAv1kUxpzBn4pbjc7QURncBipMLTYuFgV55oq2orez",
  "key7": "5jYAd3dgiDHQoi2DTMe19NDnwMa8oKj1iDFmySQ3ADueum3kmr9WxP1XyKwSsVtywn9iehtgsbZ16w5JWh9S5wbF",
  "key8": "5fQE27JJ6HW2gK9yuXQnuDpZvDM2pY6ePzxF2Zd4Z9zQduU7zio9uJTRrUqLXZggG2im1qXvnNps8wxTk2A8w6DY",
  "key9": "4WWCATf2gsBrt5kjYnDrQLG9NAhWaB3ntzLwyp84Xoo5eyJbq5m4Fa1Bjmt98k8MczN1HKXA4Lzp2xSV596XyuV9",
  "key10": "43gmy6Vvif6eCf3DVYWPNhsNUjV66u6qKBVimMtY3SgD41Rq3Ur2sjThMs1f2tPPGcewpXKcTxUucwcdK6txkBBu",
  "key11": "4K2fQeRyzrvASZgC55AeBXXYh3YVfFjxFvrVJiU1jBWZYT7s9tMCkFaHjnLaHrKwePuixouE5xkyLftZ82RGHsQ5",
  "key12": "3hY4DtGUiPTsw1yowm8Fvx3BDuY14LBYwteLziYv1g1JdFwS7vEQyDaqXtwk1D91RvuwNoE9Pfv8pvXWXqbvY6WA",
  "key13": "2AbEzaMgiz49pFJo3qGpZkanaTv8sin3w54dHV3Zr9CcqpF8WZc86GJiDkx5gz6y3JtNPV94gNDzg8yRV4dLgLmu",
  "key14": "49k49yFA9pfE51TcXKmbYhQrpuuvqw6Mb9Bhsax1mHZ3cj9CqSuAb5KVMEjXUUsTEeUpDwQiTo2Sh3UWAmTWnEC",
  "key15": "2ayX7br5XBWKWRRe9uKwRintM3yovL5ogN7n2vncEXfpxKSPbMu9LjYbj3HssznhRsCJj17XXePrjEie9UzRbqEA",
  "key16": "9fPhA29LamStvchmD1iLF1Hvx3uVwGWKzk4ucceHa6AZGt4H9LD6TAarMAY14H8Atg3r7hh5Rfrn4345FjJQchj",
  "key17": "3df9wXDcoDsgpcCqLWDZ4NGV8LSRQRsV68NWHTFWYpDRniA91wqwZbvkB5QZy8aSZbpYU4jjFTvsywXMe4nDJq4e",
  "key18": "2odeZzTSvfjcHBZCGMVkavgHoSCvLAExDiz5SUrCt5i81AhaA1PN9vBpTr9etMxg69xSyyhu6t5tyeTnNrrxaVjF",
  "key19": "2AzTmEHXRDj49AfgDVZPhwZwLH1UYsmm4mwXPSsfYQzuPYQ95exFMRii4Zbj8gsvzrgcKUuCtqZNtj4PK2uDTJa8",
  "key20": "4KhUNQQwg4vm9jGnsRLQguTzN7gUVDo7vBPLVkRftfxAbxTLhVV71UbJykqSSZh5Saw2t3g5sjXeEVjFwaxkv5sP",
  "key21": "3FX5kGdRepiC2KYZFrBvZd5xya1etuLh5EvU1YLgUEkdEiS3DTaZmBp79Bk6RqsiaoMofra6SYteLdA7ZH3TMGYi",
  "key22": "3rcD6sZbDKRhx11gjYyhaAfd8VsTJCdenDxW5oAHwRAqSqdYhAcT2bYNUb2C9tSEmkgLX5ktagPtLCAu7P5FMTgs",
  "key23": "pRn2RNK5mF5tsazGLKdYbC2TuszzXjib7bxDT8xVGgbqR6mYpgMbobKbsZJbWCaMdHsfZoSP1hK9PSYoJLbCM2z",
  "key24": "2kjG5rhtC3AjgsteSzDtc5Z4d6wjccbRJCbNvxxEMGAe75EeRedJyiNaMsQCzyjweQXCkKAH9ZU8yjTJSxxByUcS",
  "key25": "JyQTze12eDjSM47TDVrYXt5mUKzSDz8pksjTvXaTWB6esNRjfb4Twd7dVgT61tQnMGwnekMDumaWdh2hD3Qtm66",
  "key26": "hq9CNg24264693rGX9Uy1YUZR2XcSeWHHUa3kCn4id2RCVee9LJ674mitQsnver9d4gUBwPprJXTXih3A61hzn5",
  "key27": "298srQMQFpFj1zr5auicgzhDsnbAobCLzBDvQnuMBLq2U1VmDwDbohWCiv2d5bDYKhENp4g24bULXK3K3B9VwxtL",
  "key28": "d8yQNjvg7sXKbhJPmykm8xwY8niLECfQY7DT75cnRrMX8qgVSXmA6Kdf13feFpjsJ7T96L8YqGyocvoZhBSkexE",
  "key29": "5FhQUqbX6HxekbbN9UKoPJfndhvETtfggEhGXfcUVAMLh2mCfd1nyEPVxhxtLkoY4Zjw4zuWQoCWgLiATXRaHJpp",
  "key30": "431T7rEf5VMa6QoBSLqBaHpRLGEiPrVs6GZVUwcY7vQ9R9ZUoXiuKA7kmdxojQJvk7QDmQ1ykYQgWjJZ3og1LLzj",
  "key31": "3FJn4BVvTZPa8moFQXTwcGX5LDCXYJZgX3pRMs63pZJWYDZVbTSz2MNtbjHN2uqaxV6QErFMDQUn5nRZetzLwWcC",
  "key32": "3UME2xvV8E7Yh15NfpBR3iVYxmXgEyjKbEm4xpfVJpk51sqN91rd4uTFdC5epe9eRmGf8M9RPhZQxQHr7gXLVjM1",
  "key33": "5qykdpiRCRPBoDjqaVHdtM8nmr3wtTuAuJ4DB6NYwG1r4XiHgtgTiJ1m2bheBCFCQDzVNmmgqiavkad94E9veZYX",
  "key34": "3sTfZVKRmSxn7tQ7ZdkJF16fJUJofN4x8V9GKRmb7Kkdps1cCZ8rc69JGhCYYyH4b5xs5uh4CVUD66TZgvwmAjmk",
  "key35": "5uijYQQ3DG77VCKeJQLmiijnLZV45trFM3YXJkXUZT9Wy5mddZkX4xKjjzZGWCwXhbshcmBwBK9H4gjJqmeTcuBH",
  "key36": "4ks3V7TwwQhmDK8QSGcp4AFe9MsXsFnzLzBcZjxpzDzqSkPA4uKaTcYjAz1mNf1hby1eb7PGKkAHXXx8gL7LZqGV",
  "key37": "2dT5in3b1pUG3Pe4iqeapGdC586GiByC3146dqDTvWQTAv7Vof2sinzT2F3VhAssAHtmnBzCBAFaC2VhserH6qjq",
  "key38": "dovnLbko6oyY461jT2d4Jp8nZskBKdaDFqz2YKFmmHyCrnyXqK7UmK9fc15Rt2pgCjqaoMsBVnR7KgbhRjVUmkV",
  "key39": "5L2bVQ87q4ujqmoRLG76Lw5Cunfgd4aGU26MEcASeTmvGsnqwUpgQ7AMUNAhyBmnWSAifxjhJjErfT4VyRdy6SrK",
  "key40": "397iy7Q5bW1RwQoV1LTVRUnftPCJ94XdZFt68DgCJ4NcJVPqbiyMVKDgDVUgayxQ9kT8kkLWxjzqQWwjZLd496K9",
  "key41": "3DjGeg2zKNm7JZZc3M5sH5JnxorcpDZYd1cSPcP8uYnWe12VEtr9BTqXNTkQPqRb9Etq9MfasJKNFadrPN8Dknvf",
  "key42": "2vWaDFK61BnPW8Cw8grynX62Qcc1AWma9Mom7AEL1SFbTJF4CQQ8ZvWthtUi3UeswjJVXz5SkTGoo9WffVuxbdJs"
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
