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
    "5rJrcUzfwpfQDH1XA5DBVEzNbyY4CjhYVKwS84asthA9NxVxRL6zEkSGNgK68X6yKH4Dbar9xvS72JAajM8e1qsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aj6T87A52E4bbhd4xKpgRWumvqX1NoNn1yU9pNQGHzQ7s8ivpe1aSnTuNGkoR6cGktSQazorXCeCY2De1jcDMKg",
  "key1": "2CdmStZoQsWdQwDck2RKB7ffNZpXYVSUqYqTXRU3SLEjYbpiedC4xEFQ7tPSnfvV5WGMy1CZ1KqZrZMkqURw2VF3",
  "key2": "3q8RSdmKvyVqjFcx5ord8W5ZzwqJmLNh13wQmKX5cPW6DuArcvHbbUR7mx19UMW18wx1e4L8mbhVGzjUxVy86Xoq",
  "key3": "2qbBdSdk6JDEanvSyNa3qhCdonvEtHnaxu5Ds5qjZVEfEvM6AbmmYfszKbQf2Uy9AR1SGgHCouC5o2qbrCfkWjSE",
  "key4": "3B86iU427xV7uH5mF7c321rR9M74Qm7uEPnfqeDdJ42tRiMbTd5RwT2MKwsQ79T7ULs1eJtwz4pWps5ggPdYpA8d",
  "key5": "31xNC4kkacjtxParvkEQC1mzL1Yn3RdmHsA6E8r2BoDLPqYKWtVewJYHS7JnHSRV4Q8o2CZjcnGW6iyF6BqH8Zh2",
  "key6": "421VcizzKMkZi6QgBjqCvyRBWepj1ZfHgfMiNUBWjCsjsSMBifaE4xLBWTs3FCkne5o84WdGr6YfzxeRQPWfnE3t",
  "key7": "2RLsr1s4CeGBA7SbivuFzJGWNTu6yXQme6ZsxKS8jgJuUFtFcrh3imMbz8PPsLcNdAY2LeJJN918yvSAFCFbqioy",
  "key8": "2rWMBGdAWnFcz43D1Vk3MSRRmYEjPZaBXkpkQ6oaR8eNnBYs7MaRiHej9qY4zjBbKDFLCByhEc1AyAMBkxR5ujzD",
  "key9": "BXHXEiAbsXnmTKLDvxt33inSXEqmmFzsv1qTvbe3fybEPibyiMSYoaRnbFTXN8Su8XDYViq9TkXvbKXD32YySfU",
  "key10": "45BX572MQiGP934yjJczDkCTVo3T9TKuf4HrMDZPLdAfTraKcf6fnXPsGptiib7hWPaqPpD9gf7qexKbNBmUUDq1",
  "key11": "4mSBDCJTrH9g8GgBdcdUwFKxJKNVbyFC91dLcpaY2nqaSt4M6tetSgRtNHA8tconfZhH5A6igpUdN8zYCAMUxWym",
  "key12": "2PZawdswReRYUKgMt18wx5HedpZeLtddNhiEkzLNwP4T4y7PCgf1QM4rUt28MStwR5oMWPX4pNKG4ryLg4DHGQgA",
  "key13": "2SdYtoVR9q4rDyGK1DX92khurXqcgTUAhzf4r2TwWB9TxSwARdp3RvfPP3ZVEsF9CDoCFKos83cmMyLmkZ3bXFsT",
  "key14": "565hb7cAaFGE6BHiREVSWNrKiT8pQkjxgUx7mcHHzaaTg5M7agGNu8c1WNsbKnfbmR22NDnbxKLQETtdHsJTCa9e",
  "key15": "39nPkHnFm2ffZ1p6wsoSHJLcnnEGwK5rNSx7GM4L7r2AMpkdCjGhToZDM9zS5FfTCzLB2EZ2PwRZyNjYQkvNijgy",
  "key16": "MpU8JcMdck5gTFt6hcMv37xVnBHDRVzzEBvYVGin8vTwWSms2EHFqmBrEpJXCh2mpgeEAKKVF2swL2XWT8mZ36U",
  "key17": "3gK2Nwf8imwX4QyzZHSMCJLiEgrQFbhFAPUXXSnyAX4Gmvrd81znu3XPS8NxAWA8P9Z9aGYtaw6uhbHU3MjySjLD",
  "key18": "3BxiYyLeoK2CbmZyQbrjJGDkfq3YeN8r6aUZkn5vUQiz5rMvsxcntQB44LP2Ebpa3uU7q7xou6UtxaG3hJQbDZVN",
  "key19": "9dXWYQCiv4Nbmj5PnhXdg7gJfnxs6t6xgLrLZcUWKH8abF5VTDAx1RzcBBmRDFtZAF5ovRnju3KvsLxCeKs2pBY",
  "key20": "FjYQAXrTCQP2VAnaMhUcAuPLpCyZUV7KJGPgEt3BPamFfyo9Yh9zPyoPu4k1BfsXSDSC2apDVodN5YoVJpydb34",
  "key21": "2gWUHWmmX4dbw6SEUX94quXoUL7mvJV97FNMbzCnLoS25Ko5ph9D24kwWMk7j9JWs24jgMtU6MoWQGcyVr4H1haF",
  "key22": "3E8dCuPjkSMgLuRV3G71Xd6TrFJdnJds6Votrs2fLyxRNFDMYfYBxYvujqRyPxn2HHwLLjf7H6hosWiN4eBS69E7",
  "key23": "5e2Cumqvu5Terc6t3nme1AvUESCpvyJ2XBCNkiCxmHzM6vAYYdvryuBwq9HHGaXq5Zxd7CygYZJ3N8oMDtuR6pWZ",
  "key24": "2TTMj3oEgw8cZYhFbiGVJWwVwMnWjp3SdvqVdaexH514aXbzxNLYZeJ6AWihoanK73S5TXMTWDBsPZZq1DF2AnZt",
  "key25": "2b5wiMDp2J5RH5nZsqr7t69j42ziK9hFp8QeY5qvDADBGXChyxC5ws6MwdS2n3z42RYZA32SVSHd7AvKzvESPDB4",
  "key26": "5QdZTyCGBaPFDffUXx8ecHud3TnkSM4WQWiLYg371FFFK2EbriPFzsv3RKWfAPP5uwkpmppKbVX3idtpjnH2KtE",
  "key27": "2pqhHujUhRwGKQ54wu6a14qAK6idjZHvWo3QZSoKWT14mK6fURXbzpWCNGyfjxSZCXCnDVKP8tCkWZXWVyKFzUpg",
  "key28": "4xvyT8P53rCEgSessz96w5S3VoWxEU8MV7ZMvwktYRSL2BST1jBL1Yx31TfhPEVd7v9vNxZEFc1KwYc1NDwwC3w5",
  "key29": "5pcfKYwCEfQGePucnkeuqRfaZzXmL5z4WnJiKN3HUBXcue3u6RBEuNHCiPAFNVf9B9Dciwf3dbyq7HomELoDhhGM",
  "key30": "5Wzwd9BHAdFYo9giistY7FkepwJsfBh3D7QEdfqhPV7Yey2rGqGKYPkdgt2ojgUT1ecynGeTRbHicGPK5uAm2BhF",
  "key31": "5BuLiy65BzpV63rKC9qtYXafUWV7AL3fNNxYRaNzvsNTo2udLPN3UNwKdDtXYNvzXgwRbAoUacV5nVod4V4BiNpD"
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
