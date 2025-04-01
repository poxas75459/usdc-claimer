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
    "3Mr689X4DfRY6ThTces6V3xEvvPi3DSt1Vjt6gB2P4EuMuS1zBMPVURrC6KjNZWn1TbxGFSwpW3sGFeoprsj3WeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62bsXenDq7WBK3wy8mcjNkQm3KhZsxwwPC1PuQtGUGAuh8Zns29zJrrGH2cCd65C3Gi3hJkJ25ddGJWm4hYpouQc",
  "key1": "5BR2L6zvLaPoDymMpkDdzoPDS3of89YZx4sG8WdAcEA77KK3qMp3GW3xN7koWxwdU8ZyYLibxGg3bCbJzFZmYqdr",
  "key2": "35Ft1RaodkAdbxXvrrj4djC86iMZio6LY5Krt7XMovBx413UJS4C7TzQGbSmwKPFRgHH5TJyrGBbs87Vrz32BkaA",
  "key3": "5LXu5N7tMnBhDYK3rj8WqFaeUF1AZeQ6UiwQXmDm2nWp2UFmQas8yNSMt55UJgtqsmnDcPkpZXEtvohvdY8rGQG9",
  "key4": "2UnjWLaSNanfYJwrmPvmJtaSsTQRuSd3pusRMMQgWwm7XzWQhw58SWnnGGvvE7gaYmCzWXcPeDd7o6LTEvUreWTb",
  "key5": "AJDcBirt2UJYZqB1DP1sg3PWrPtT8C81yA7zQ2GS1sNpBHrBjRCMCjF45fm3eh5e8MoiBjuy6Uz36icCDyT9kHd",
  "key6": "3FPXbqeU44Nfk8C66w6gZYNurfjDg1FZyT4NUxUooRi4YFXm4hG2s9pqVyEtZ5jWqXdAGCmho82arq5HjuKNs4Xo",
  "key7": "4pLQ8c4XmGdTxoBNRf1KkyKjuFpTTikADszrPzshkK2BtLKw55yxxrKHeCDZgqrWJTd66P4CnUj2ueZZS9WghUN6",
  "key8": "316uyKPj36FvfoZ27FEvqmiWqbxuaTpsNLFxxUFQvaNRdPPy4tPV2BhWEohN6LXjnkdu9mhgZ5gRaXAruVER99CB",
  "key9": "2rmBQcSBS5hz6vfKgzp4oWmvXd9m2izsWS1nkwhfK464QvgHW7WrBMgSJ5pFRusWMoZU7Uio9ppPGVFAHagUb6wC",
  "key10": "282AarcUuNPWxxnRAGEkRrjV1dZkZU8jeHQJxFZV9skmFpVp5oxQ4AVFpNz2fQqzkt9WKhHwUa8hLHPYavZFs9nP",
  "key11": "48x9WAGFypo4N3MnmngDMdt7PXaK5939ZW4xdzcrP4rT26HtnvCHpbVagguXpRqMNab1FM3Vpod7uaPPG3RRp2wY",
  "key12": "3ELNpAmkb8chvEPqJdWuVgjhktyn8SRsCTF2HnmS367mHsoZK2k6UPLVe6rcAWzHjgCaMTBvFGASSi7HShb3MteC",
  "key13": "3SMcwrb8ToCQg1jWBLDjftqdza1kirJEmDM4HL4zEpFmteJxQk8hUehwiP1AwWYPKmSQ4MPvCvJcXm2T1sPQW8or",
  "key14": "4NZXbuJtdfSXXxE4ug3htAbc5zzBreRpRopTbmrRvK3T5idS3WzsxhYsJekjo8jtUxgzmoW9Rjg1ZerNRsfWrQPB",
  "key15": "5nbfdCCJJHtspqS4QELRhR92jPRrKHZGhsahbfugDiRiXitpvwSUsjrYq2pJ7tFYMAJhp6LyhqeZoHDXDHTDb7Kj",
  "key16": "66nyVG7F4tkkuoojK4KPWiuimSDFozD7QqJ9PptMbdS8bbSF6zNVwKRyZTUzwDMBaFJxQAD5TSFfwFJCZLGTL2Me",
  "key17": "4LsZYj22Et5vwoQ6X29AjPy7HJhi37QcgwXX5WnBbAFGZBUaSk8sto1ywM7q2jWTdDsny3z3hRBgy91YKFUYbsZD",
  "key18": "YuH41arkfBmSRR4Yqvcp7KgX3F3rC4HmFJWuusrg1XPMBkDKtnQjPJX8yoEc6UxjzHYFfSM6CVsSk4ZXCgefZoW",
  "key19": "4FksXhZG6sVd5jeyZ3SEvCXdR7yvLXSBz84zVLsZigqcC2LAi2akE3pur4kHNVUKqzbgXcYkCmwKDAk8N7AKn51",
  "key20": "7nGq651E7CE1dFJGzBFiJLjtoUbANAa4AHPiG2QutTxmsPhfYzKnxCGsgL9yEvkSFk5S44iJyYZFtbr7UKKrQTm",
  "key21": "3FmGTQ84jmycSSc1RPdkJd43iTxshSkv79HruEDmzDnEc6LCRSjgUWhw93vb7iCVk3SgpKKHgQ9uaY3wc87gWwM",
  "key22": "5KdfTtpgxeL9ANbRGoey7PFUXkwBcm4t1zGDKow49XGv478qCWurobL43AZUzbitgWoKErpqBqcAWPLJ8BhDGnXZ",
  "key23": "4FHHbLpBEz8fmZEXBDyePiK2FVQUv7x72xViTG5n6jzvLSSNs65qLi5QDzfzBjL86jhX5GLmjkSZ1WghpNCQsrw8",
  "key24": "2eaxVtSxxqfoRYWiLBDgetdUroiCnocRMXQUWztpzW5TonAkfXWfGSPFjWjMnUCGJNYX2kD3GMvqA7pKFwPRjYc3",
  "key25": "5xxkxRn974Ae4e1N5rHn36TWLJjx5xtskL2Q4bFG14n7ZsyVajzGvP86mdBJiq547eYK31ufdSgLLxEefGK1rtXG",
  "key26": "k1igqrwwNgaY5NX4KTkvgthgnA8o4WGdqs8eF6rhxBjqKFy6QGJCBVFbxPKbBWige6KxkzRDRaCZzJno667fqnc",
  "key27": "5XHP3SMWZ6Mqvr63EBZCrDJD71uh6ZK23YT5SGvQWr6yH8nkhfM8dxCbozVXBiK8QNc8FcyUYcwjCdfTYzz9TCym",
  "key28": "pVNYS2rp2h3m636adpSPuhPJme7P1ogKm8ZZ8ucwbdJdLZA6YNsXGjDwPPHSEkh9DRemSrhCHNZwn7fVVVDidu4",
  "key29": "5ednHtL1eNmdJeAzmA8DGB7YFTg1vYqwKMWLEC8VW2GuxBLx8n3hb8t8zwVQLUc7uH8biHPpTNuSzJtZeedfC6dS",
  "key30": "26U2676h4U4Nc6DCtn8g64w1fcSdAZMLLmMJwMYrWvhH2713kPgu1qiVm7HUwvqN3jbZH5arHC5S4KWecsgPv8hA",
  "key31": "4mB8VLHZDkZHsyn8aoRWR4MUwVD7LteRf6qFTJHZ7Psgu3sXR1vrqSVoaxX965EBXX9eBP1bZs5sKAGn14wv2b4X",
  "key32": "2c4vzopMFeiXxREt1Sno6Kd6juWwhUdhhKCDdBfTvULixwWg373S1t6vfDTKQhLM64jCZATbywpc6T7RZGGfJLTa",
  "key33": "2hJeAqE7tqLpe4fWhJyW7jF8vzpSNL2n1VS9J1AacoAiHW17aq8QqKoAz9EzuYfTfq5ytL63X9qNFBn3co6B3Qe1",
  "key34": "2ECH1nuGgpNkCasX6EZn9BDrZ5JXXcMipUKmfhvrCBiUJPaqPQ2KbKhGVdQeDGKruXCzZdQAjHWCLTvVcPNiu7fY",
  "key35": "4FsMdPoiu1Y34W6ou6ipQosNFsj4i6cJZ9z3HeYU4U8YabiYkoYKZh9AJPuUJRz84NgHvSq9qRwi9KYNky3hVWf9",
  "key36": "FL2PCMsbNjsDtfVzCThJ9v7WZbvRj2r161XABnUV4ie1qzFiNSHPBjg6ZvHyYJnCCmBgPFEAHae27bUEKjpZytQ"
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
