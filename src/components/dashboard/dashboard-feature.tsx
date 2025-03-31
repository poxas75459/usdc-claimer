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
    "5Ah7PvbnbnTMrqk6yBW8RZAgbwH8V4MCkTZn8zo5SxGjbDRNQ5sFJSgtyxfghAYYFGeeagcG2mFwGGP9dkB7yQDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zQdx8tiAcdBzsSQny6Z9bp5pRidyvi3hSiqSNJsqTDimKMX2JbVa5kHNsDzdUt7YiCWRrkSKi6FFbKW6XgfY1vz",
  "key1": "3Yt7SkXUkkSgExReDdpqUeJWZofwXTszHABsypmZ1X5VmWHpNqXW4HDNEXCBZArYK1sj2sRnYsVEWjkeMZNU5xZB",
  "key2": "5Z3EaDapArR6jdxCNLQ8k17UsCRdqWsvrv1Jwo2z1mpWnXK9DbfDXABotJpqGoNENgxofWA3p6bCcyQZn8yoAgnA",
  "key3": "32zScXnLXBu6XKV3a2wM17uPLT5UY2XeE3977ci7oAjq9415gjPbqU5mEUp2C1UYvSbJ1Gt1h5DwSSDfY4zGmBVP",
  "key4": "4fGASqeVkgvEZRt4uNCGnxeUyYZHozWYU8PjmtizSXR9AFY9SLfaDwjoBgxwi1mxd7JMGkRtcBLzCxgd2nqnSjh3",
  "key5": "27krM5xxCSYKrC4sLJDetdR1Pbpc1KmEvkpCg29HNZaoP8r6jhbXEM25TBCEcVSn448eGg7GCGhQnwGzw1wrs5xz",
  "key6": "4ZLBFEWxvoAttiLCsdJaBpVJVpoxgq7ueSUScjQAsdB2fWJjUXG1cvBPktGj6oLyJhuPveU6JuMj7Ner78C77EKo",
  "key7": "2K4MTLq8KH1Wfc8wa4fj3728JS3tpbgFvMUU9Bbh6r4izGxqTDPyUzoghZcBzSoHV95uAKdtpyp8if5oXxAYfmyL",
  "key8": "3JaACr3vAg7FjXHgsdWxA9Nyvrf9FoGHmcwhNc3prB3HpK7kty1Rm6SKVRCqCYTE8XqEpdKibn8E91cA1JkvDPNS",
  "key9": "4vfbVpLjVD6S3yCcE1TFEch1cZVaT8TjPBsd3UV1wxh857XpJYQFyYZKY9etpWKwzr8dT6srdwMvNcDXifrK5EVH",
  "key10": "3FtPRgdQQvk6cd5pXCAZJqwVBKHm6QGb1dqB42SAQyhKxTz4W2ULPFHedo45pYHEYTFhE8xderJWsG9qRZjWSEBd",
  "key11": "DFvEhizmaHaSkmw6JSEssys2k9ER5gpCf9oN7TyJHtpVYYNg9ajjFvZMFT6ZjUQAFeA5Aij9yzz5qEM29rHCn5w",
  "key12": "5y7bEmk8PQFogt7SuxmKPqpQRJZpthASsrJoQa3bQtcUYPPHiZUFFbMJX2rvqWH1D3ViWMe677ena2xD18YfxYNK",
  "key13": "28wcXR7FCbgLzTNrdFfefAGsU9uNYv2kyk93CnkfoRztwuU3VCE2Q8MTWbNki1C1UPdgGiXEHdgEDoeY9xtcj6X1",
  "key14": "n9mZK2VXtxZZqxw5TRwp94PovGSLkvkxDt8wjLyLvgSjJyp98T45UaKyUBN6dkU8p6J7pVNyBJUom3rkW1qbH1i",
  "key15": "4UThMMu4HHAojpSNLkf6cw6r3Ddy7g9qLWysYKGfZFew47vbM33AaVMzhef43VZpyVy4qyHhBpNVmDF8Hah7Q9ih",
  "key16": "3eEZtsVWqTKCmZB8NakeXyav1gDRgxuQdb1e4fBHFpFXzNybnRRGN9XA8Fp31DTQtnYGqq2S6AumYThwCAhkv5ot",
  "key17": "2bkkPVrFg1CuomChGnLccXBxhfqfe8Vp5sKgxhVZdbvZ4ojB41tKGZ2vHr43iWHxH7WULTp9iP4YU9t2FK1u1yJx",
  "key18": "3KwuWhHYNh2hsi4pwjpmtahdGYunoBVqKttRhfbbYuk5vEiVuySTr8ZShPunzdrX3cUFvwJeokBN6fSWn9gxSdD6",
  "key19": "3Pfi2iEhVensCxE3yCxppWCSDivGmHjGbZJnomS4xRyE5Zxt6v6kXNJcjMFvoYqypK85BjuZmw7TfGTDJcBhwfAr",
  "key20": "4x9Ci8T89NiveJAFNC2TD6uJRoYdbf6U7guLyhjLrCXn8sKqShX3T7d1x5MLggCmS4jH6ZLHJspEicRpPoBx4TvC",
  "key21": "2vL5drfVk9RcpfpPB9pRXF2FmNiqHeuRouTD8tch1R2bgd5Y9L2VTU1tKA2t76a5f9UfNm8fu6pGtXAcikmP5TDV",
  "key22": "3j9jTEMh2R7QCethKWK1sQ5wRsTy7fxrYuXLz6XJhAe6oxrnwnARkNpP5cLd14rH7Lsk5wFbqfYiqKHbYNxwqFN2",
  "key23": "4wLnHj5wg1QG4FDiGyB1V2Rxe49iNDPQVgFDZyLTjXAZ28F4Vps47yEWCGKEGVss8VQVjWp9og9cx6zbeheHgvjv",
  "key24": "VS6tYdPBKRuHLUMXm78HtpGbP1ttzULmacDcukQxXU3DBNtX2WTMP2Gg5wth63bsDMysLAtDzArq4aWHp6WmLwE",
  "key25": "3mi4WLmxkWqCgbvC4GhiemUyrqfqBQLvi2vQ5QzkUaKQKeRWkgrm63UZxQSbHVfVx9CqQW7DFTmusMYKKS9UdBC5",
  "key26": "3UyLTB79L8iJ5aPxizTNvg4ansmCGhXrgt7seWAQ9AJTdoaJGwEDYH3WJRx5WkWW26Xe8MQpfbsVujiqRHpUrjrN",
  "key27": "4qJQqLyW3UJYitrr6XcKLgvBu5nPjPKwwKhrK1WutSYtah4QrkRjDYNFGGDYDpid9KPFoV4uJd915hACKyFoy6hc",
  "key28": "3FLeapnA6PrZvNopkHavh3M3ZXLM8tDx2UE4TT2BE31HoiQrtpkAMdniQRUniTaa2nEemdq9etvCSrZCfjymPFWb",
  "key29": "3JKkC1Ruy84kzXv9GBETSp1LBk4jqTdPEyyYQkacgLSNGeGkWHhrGH2Z5UgNmdQptthsruzQhRwJ5MD2VxdMPYuV",
  "key30": "3fG39Jv5QeNg3uWtEuFVus3iAyRD8rvqA1bBPN3mQGoqtgSVGDzUn7vRG4sFBbc7iwZ5jFnZNtrDkSFwcQWTG88P",
  "key31": "3srxFtp5eHQnuVm5kKUZ98yRGjQQ6q2yqH4LFvBY7TPJcKyaTSbtYNfs67f9s2mWbDfw7EvtKYCDkspcz4ydCHhV",
  "key32": "5MVmKsETDnRaoViwf1WZzkWVtHpY5ppM9Fmj7A54YPrfQnPDwVJ2bS2NytGGT8HVhBaaUPcYqnTp34za3VRvacgx",
  "key33": "4yQdw9kL9czTX8i6Z1sZtfEu5hypJsWDw4s1w7BinZxdkGfvsx2UgEDNGYRex2eNcyUhV35fvcPJQjSWvo9tGZeD"
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
