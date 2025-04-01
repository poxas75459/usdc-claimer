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
    "4Hf6Qzr5EKNMWfbQhnQjPNkCMjJcYY9RWyTi7UMUJqxXseim7ewA5Efny9qe7foqNmdMsdjF86SapUy7TJvKjnyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38eGkY76AX6DYxQNTCaDckhpDvCp7HfWZAxfwG59rU9RsYGmVEnacnoUCnjNFSYvBeVSvSQrXPk1RRv7vENKSBop",
  "key1": "313772LgemtAv7dETrhfhcnyf5UihEumR7wZQB2us8eA2hiYXWbtncs9iHdcxb4f8WaHh1tonTaPGJNVMW6bncJi",
  "key2": "3JrnYK64bSoNPjApUngWz3LQp9cdvZS9CkdVhN6day7fGdZpBjSsnmS2seBn69YAYk4gW3NosmsRTGoRNKKQzrbw",
  "key3": "2JLF8MGgwGQYxgpsBwbhwVtXnRnnqvdyXp6GHNLENUfUSavnR6H8YvkdpZrkqvX26FAFFf6WFGewvhvooNxQ12xu",
  "key4": "4WGmR3D1dUxRE3gCbqwiw1kcRWmCZJkpUhge91AogSEXhWRgeBjMM7r91U8ZKBXSZUGrnsdoCv2qYvUnyNoh4Zo3",
  "key5": "2M6yiiAGkoTAJkaB4N3XdkgwouApK63DVqxntbPMTsu1wFWLY9kB2sMgRVnyEAG4bu7BNAoDxE6ymtKupwF4CnqL",
  "key6": "4A6X5zBKNDoEpTfgeqhybTCHRRiAQ3GA7G6xBizM63wTwQihEnfSw1GEMMsDerA8gY86KhqzXtZRRjTN6xs9Sj3d",
  "key7": "5Gon4wURbQXLhdsxf2dMG1qf7jDqUbHf4e7RUjws1dfAKryDJevC4xWM3eZqoJ4gBn7xcdJ4shwyaiRmxM64hDT2",
  "key8": "bwtZQ4SekMqrQ5vxkUVMVVRMdFd4Lg12jfcgifGLV45h3yW5NjKr4ehf9xwKMYpxmsFzQfCKaTdK8bzeiheDDBP",
  "key9": "5bQLtRmkxUgPYBQeKsFVnAbUbwcGM43txqZgeStWBck7X8ZEHjncAVLY7XeHwgWsAxdkAsH76JNu7Mn6N1VdrPHh",
  "key10": "5x7qSEuNuK3KF5y7UGsQyQ9tZLXLknw2f7tbS8tE6FgbQAkPPd9sR56m348XaVtheK4xhVTopwjdCDZvjdCX4fec",
  "key11": "39hSxBZEfzupV9qsKZzQEQ1hE4phAUWFSZPaFvLesq4PU8LfwEhE5TWhHa73pYQ4WSNhDnvPW4SjNS5ALhWioqKd",
  "key12": "5y6egAkeAMdqhRHun8TrCiGPZ6UVpAWuLb5EZjpyCoLQLHD47yWfB82ju5PGBaso2eGLHtEGVV9kgUnLfxQjyLa3",
  "key13": "2ocBM9sjJF2NqU627B8urazJsPgofjMs4GT2SPdA5CKYcKAWa6KoRfDax4jpfcf7xk6D23cKHLyTDiPgTp61BuaW",
  "key14": "4g4KKE7hSxzD4xzg7V1D7tvEytHWNnUKw8cQ7wqqqMvJ3QacUsoF1NK477QWipuQjV4jCccR1qCrRdHtWYvPRwAu",
  "key15": "2wF2fCpNhwL5NtmVjeubXDKY8YZoS1dD58z5A96VBxQbaNYUwASZJLy75joi6N3Qz2kWWqRBeZdiZWn2imSTRRKE",
  "key16": "3dVwycP1hKnZHixR53YFPHXj1qheBkE5AUQwRAN8LroLEwzh9vfxQgzxJQGnr2omqvThLxjb9vsGoiazXyjdcb9A",
  "key17": "i3jzvCSbEHbZJTGuPmcQJWSkqekqfbv8jECkZJKddxDYaopvKCBo7iERfdnZr27EGszx5qnD6y848BbKcNfrzZW",
  "key18": "H7Gy1ZNX8hG3VMXvf5sYeJ5GsAda1P3JhDreXEeLAntsorKEJgTfBKEvXdTs2CsX5xk6xzkSPiNM3vpMoLMhFDR",
  "key19": "4hByWKCLSxabrMkHmgHAMZ21jTC59z7tqhyJaXvHD7FzzDWVRK1hcCfBaeEGCGx4YauECoiL8o5YVLjmoBhc35mv",
  "key20": "4q5uKfyP2Ga82w3nMe2bh8szUGud67Gp1kaNHRV6NSVr5UFMTFf32w3Pw3VaiAzXYqmSmPSWi74em42TPayDRUMj",
  "key21": "5xNuig481E7Gwy83WaeLThdYEerPHYi4Z7iHQfcSVSpEr68BT5EvksZk1b3aFoogBpMZMxid68RcGppiCJewLfDL",
  "key22": "5qRSvXfPiDmkhZekYZyfS9pTdC2fbxUYr4sjfiR4W1BqfDs1nqxAhnxgG55karZ6rFNt1mL8dfF3pfqqBxX7V1e",
  "key23": "2mg3fqXy6rMfJ7AT1To8u2jfT1vUQeBh7ibsyEHdRXhqbhRdDxV4H4VmWo95ZjzaVtanaxeuJJqe2LK3reYj6U3g",
  "key24": "4Sso5EeMPbxDhAXLG8ESP1htb3g57QAXVFjGvEgXsNnGxhRCD3eb1zyuSj9kNETm3VJmz5BB8EcsXpzi9bWuyQNj",
  "key25": "5rEqvQ6c79Kit13uDHW2GKQ3QNkuVK5H7R288r7ybE7Ug7jL6tBEoej2Gk5rsriA1nug3A8BXXfC2besHdWYnLa1",
  "key26": "23WVj6hwTvx8SYBGSgqs6zzTg48SCz6puMixB2oCJRhFCmMfqdhpu8MA6HYDRWz3XCXe4QeMaHHSTdBcDLFigNWe",
  "key27": "t9nT8NK1h2xWwDv1Rc8VALpt1fgrHedqLW1enkKNFVKbNp5v63e8YkVeA5hUoKDof6GZ5JFUgin85zmh7WDo59f"
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
