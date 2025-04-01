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
    "4KwR9qBK1qyfUh78wQrfJ3k6AYZoFLW7bxUgYwNvDBipZXGXy7GZrB7ZzHZeJvoKZfgYrVjhNzeFbxkpxyV7kY3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXGTpPKC5xph9MkgdFdrpHYTsrR8BBkos2fjDzKYLiMw9mipLvHeiKh3dFVuj2ZhfbUSkbV9JqztrdgK57HKWJB",
  "key1": "5LabFF6S6KBcd4GBD5joWRFFvrKmqgAk2e2zcZz86GBQGx1NxURdSQFv4yawEHm2zNxzwUdBX9J9o9WA6F8gsWWQ",
  "key2": "5thBrSc6JKGW5fWtq8d7Xt1aAkiA64oq8BNpTRWNHc9HC67FZXwpb5ynWVfBMbcVjwYaVxszzkBExmd1m7Ak8x5z",
  "key3": "SP6G6C4x7QbhpE9Tt5zCMGhYrWoJJzQrkYoyVgLPcCsdBNKLGYyRR4WMdE4enuVzZYLJr69ybU5ygw7D1TAVHXd",
  "key4": "CHmMdVJaPpMZJH7yLtuPPHWLBx5bz8jWAxv8sKaAq2sHifX1caCMNGEsFeVaqRU9b3hLiD6XJrBSobtGXNoGuGG",
  "key5": "4Tm2AYScLW85nnsWWXt17D52U7XENnRR2v3cFcUoHeTu8g7gknKBnu3wrcs249JwQJpxjhSwMe1Rnjog1xSi4unW",
  "key6": "3u3r42hXqeJb3fhwjBnBH8h4LNht6Wo9M3uAVyTZJKQNqW3QBq4LEQY6YvYrseyhoAa87q31HwfmvxQHWEnyS9rE",
  "key7": "3uqnziZxRbUz34vGkUUKvEF3em6vMvd4QpMEjQ31U4Qg2YeBy6XjeDhjw1k2bfTaj6cxxkjo6y5Q2m734XcNzQfA",
  "key8": "5QGDCtjU5EXKHV7kNJVjy53JTM8a4XeBt8PN8ixQM8Zz2HUENxfQuh3RDbcDWp2UUi2gZr1poHDQsXgUkVAFdYCR",
  "key9": "2EZmrs83neXMx7RLKrNL7cuArtc2AkbT1Zzh8maXmT1k7q2wVUXah5mDpSe3KHXj3FZGTm15pd5LUmt6Sv494EzV",
  "key10": "5BXwnaPz8XN6ZSJbTiw4KRo5MLfjK4FfrAUyDtaeEH17JFxZDMWNKJdgpKiYNr2M2NqEjmdGFy931xnnQRNDMxQF",
  "key11": "ZAF1NBiVjKH5goeU3TQi4VbmfhPQoduzG1eABPetGY4XfaLTajJUhaFKCVRcdYSFFjxqQ1xUa1vBjpjRA3WdKzh",
  "key12": "3G7Z126YnsYnRSmtezkaNdy2aZJ52dyyTfc4ByTdV11JvjF8Akgiv8wxteXjcaSAwcrynYVYmq7kzuuuMKxwpNMm",
  "key13": "2AFZZ7eJuStMASRRnMgARanTLiK6Tp1f7R5QJWEKS57FreiDT1GiaQZnr1qKrQuYrnhRuLb1g4EC66zmcex1s3ZZ",
  "key14": "2tnoG9d1r92dyG8wie15Qt1UCxtmwbsnp8MMPk36cvXgRj3wupHqALZJXPynvrSNt1SAPmGBkYnQF8Q1EKd5gGi2",
  "key15": "2FFM8pRPcWHa6e2ApS5eB5P6bLNXgP57DUDsjGfZqw8EWgMHPmQ4LdYCC5SMZAhqkbQXQUuBCKijkTZYekkmaQZc",
  "key16": "5kdfLc8A64CPjWuEWXLTEbL4MPJRQAWyA9fzz6KF8ZmDZc8wGq9TwdZ8hhtg7MJFoiDoJUg4smgrDYPVLM8v7Hno",
  "key17": "4bFneEupjnfrmB6C947RGhrUMVKdjiToQLNjsSq6D1mm5zi34mwyszoh3xawmxjnsKuJ255pJ7ohZoj2e15YW23i",
  "key18": "3Ye8jH6hmx6wtaBcGsuGzPCeB37PMCRhfWfRQB6pJ3VadAipgD4PoGKXvSviBrd7CBCTwY1ouMYa7taAPUQoYUFf",
  "key19": "44CBDWaMgBQkhA18FDpojkFnmnmgW7DkYhciCyvJb3FMBKNf3g6nBYYxdWTXNZP9Dnsz82dWkgqM197CRHeRNF84",
  "key20": "668yNL97vjAdVW2bRmseMiHyaNve4C8k25DJMumh7G4kPi56T9Y7RWEfEUeaMpqsyAf894ezuA5DVHiSHhKQ1ByP",
  "key21": "4Hyco18UJ28pqanKYxteiFDSDdhNQPSjpGBvvCZdAKvrrRwypeFMBUHFsQiT9aw3yqDb79AUrA3Y4kBz4D4fwAd5",
  "key22": "UukPsjwWtuQ7uaoC5aq7RwiCV6xwmkos5eG7sixcWnPEoqk7xFza1CkLEwYu9WESAR14ErTZA4PXxKWG9ZUB7AE",
  "key23": "qLkNsdPBDXMV6q24KrUJzHG7CAsE85n6AegboqLend4bts4oZFARV7sfUN2cSkbBRCk4dnAY8pL3AYAX3Bew1Vm",
  "key24": "1aZhLxVepcEgztZLTTjNP28rBFZ1vvk9Uy9Tp8nf7twsZMBYf5WydpzW27wTfxrpvotPcusckzVpG51kJ4ak2Wd",
  "key25": "5sf5LfqpzDscQfZJRLVbnBsV4donEakvASkqGMQYKHMdVJELjfhzBsakKzZ4cXKVQzHTfpLcoMrRBGzBXPYhzThb",
  "key26": "3iY2adT6BtSBP3sDdk1BZmnzBSgNkSCRVgdukwrCcks68vwyQPGzuKxrz6pB6K2oFVoCKjjZPYJbZUFxcQDU2trw",
  "key27": "4jMyddHdroLX1fVLkhiddYHPEaM3kurfEvVChnNRKeYaPVJzZtGQFHVY6CE5gQQ6AD9R3rkmVo9eECc8sbrBJvjx",
  "key28": "5DoXXsW17md8PHnFAZKgNsSAhXDXcnYJAamut7BrvjYt5Z6GrnTZ5sFQ2dJ5LBG2NbktET7658uVfWAnZma39TaA",
  "key29": "33bN9GJ6RAN4AnpizMNUGc9EtVoDXzFzT7CyyER3cRqWnEjD1XqLrA14ua1AjvtEs7n1sqJQEa9GhicwHC7Rkbur",
  "key30": "5awpTNQjAyf5scxvXeFmrqWfk2hCpQwhhNnc9v6wMgGqxMEBbNYASCxgXNiqX2CLSw8ZR5zUte11yrsU3ttUGYcx",
  "key31": "41C8qNVrtV4iQPAHFCShGQYeeCdrBj9gVUUNuHRqH3cS1FYTjhSNp5e7RkEo9s61uVdaQrPS91vAekaQzbDmzxoK",
  "key32": "3LLuKy91PGC5Fa5VfYaAuTbuJsGmZ3SQnCynnzUYBVWR8R61V3gzPhRGaT6cHmgkgbq2TcNUPnepZEP8bB5NEhvR",
  "key33": "34fUdqZQBLGABeqHn6hZU3ER9c8mLxxjyrVrPXADT2zTebKp5XrNsEirpHLzph1aYEtPJyq4Gj9cq8Un9WxZasVV",
  "key34": "nzQLPbp7B7hWqvj1i3Hpv5PmJ7pi52UgPMJ5tweftbhhAytGrV4p6FQcynvBC1yX8Lfa3tsCMCkCd3Hz6dZZRf5",
  "key35": "67huaBfVeGveKkMu8QYX5m5Pp1VsQ1LTDQdgaQQivZz2Tjx5RF9xFHAVmeCa4694RBimWdzHsC9Rpqu4bV5Jv6ge",
  "key36": "2PAWC9tt6TXP7U4e1eZjbCMwRg9BkqTtTfZN64Wx7JGSNdHSy7tvXf4bVzroN1Mqd89wHkbyiFKFxzoZdh8N6c2L",
  "key37": "2SJeJg7u8DuARfTzwRnaUYQZM2ZKNcx3gViJYhMkv8miYpYFSPdieLnYGa8R6oJdnitrWD436UwbZ3HmaeeP4Ur",
  "key38": "3B3e4MWEVCHjTYUzPRTQP6szHUm2upJxGFKCto7UhXLiPXshHN1c79JwEanquiDMXvZa5wufn5NDFEYqrmMq4dRf",
  "key39": "3oRkfmtEixcVhwW6Yiwf9ub2idxvB29hvFZKfB5PpZjNwz6uYA5YsSz9aVCAL4jTMEPVaKjiDHfHtDR1ERzkAYQz",
  "key40": "4MgjM4nMoRzHvvut46HSkGzcXUKx4r79NRGQjGjjSTSCgdBvfctm6pBZ7zHHgTtDj7mq1wpj7wxZNMHD5P8wAr7T",
  "key41": "4XApTVto64tv5JvSeEPwdp2N9uafMqaxp2EbADJ7xPeLKhTuiqdDZWbgTqtJ6snh7P2weVWv82n14521vKL5xuKD"
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
