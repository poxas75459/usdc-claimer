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
    "5hHpYGYtveruKEqc513i3tMzdN9HuZg8mScPS6N8GRL7SsDDeKYxzU87Mo4KaWeLRz2UzRwVxGMpXsmHwEHmwvPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QoKjXqzu4Fw8q2WM8nUtBtNM1h4TdRHfo5LZdqepS1LJwVKd7py5QmXtjwVsrcxNwah2GrdTRDwYPUVAQFhShfx",
  "key1": "62zVtb4CmYKuquYmdbxY4jfVud3A5oTFDEiRJMZbbLPgGTunecuYr4QxU9vrw483JtG6XfyhYK1bFPTvCNJZJMdB",
  "key2": "4QntRqgfjmQi27sYUabMXpodG9MVTvDBDt6Vj7MmCyUKVsFYotnSw51AbZqjTw9ERQEcyM6JAn9cu8tJ9KXYPDq5",
  "key3": "5ij9Tdu25qHWmuvFqwiakLTmLcAnahVeNgjNDi2cS8AavHfSEhzrKGQRrvo4yGop3bsGz65b151csfvbgANbWQFP",
  "key4": "2wMgsXLuHWWxiYr1BQTYxb7t8cNJYjGui5pU3mepJwNKXLoxjWGCUboWDUAB4GKNJYCJvRDdMdxeJ1AivwxMZbiW",
  "key5": "4mnCyRYk81mqYtwGt1rt2sGGKVgJh27p7ZNm3TMn9FWZutXWNRfUbAzH1tDHCgEnGWUXAKMCMwupmt93rv8Ebvw6",
  "key6": "3QfjYzw2EHPBQkGuvVbzp3tArYHkfn9H8DbCMbEq3ReDUVr1zg5enQYqdj9qhvyARouJQ7at38o7nKc64DywqVFe",
  "key7": "3YBwjxGzrDYHihqAoXvT9KBsKvuWbBuMwvB3DGo7ZyxNyKEM5sc2UM532v8siJ4F5Fa8perusBhVBLsvbwhcJDWK",
  "key8": "5tKQX91FRPRF8vbhnJkvxKDewXhKWazUaebCmASaeGjcSsRtGofqnnWoQ1qa9LTZoMWSANRySxSz7GBPgnXpkzyj",
  "key9": "2hmJ7JcPn1qUyjAWuotR8i2THuad2TYTEnfAUTBGE6v6W2wHwMPNKvyFWi7BTnj5XNuZYyNDx3A5s3SmNZ9Weq75",
  "key10": "5hzBXjZrfF29H83PsuWM1zfxzZJDDpGX2ZzWW4nBDJBeTYE2ZYx58n35CCiVW6RnKPJKAESnDjbthBhLA1KmqWLW",
  "key11": "hJ9Q7E3Gip6amMi3CtvNBBZvm69MyXzphwS9J7vEHM2vagY1gqeRs5KUBKRvDuFaLE1rFxEbVWkDJTFtmCQy38i",
  "key12": "5fL4Yx9mhXPphdQbdHQQiGsUSEi9bEBJmtcTGLkG326kcxwaGeYh8jPUozPacnd4mfniVJPCqdnbKtkNiEpzwJTb",
  "key13": "5J5LXARaMgR1vGDEH5P5cYZzYtN4PZuhH8xoQM1HVtynU8V9NM7AX8L4Q3jxLRrUtbHVADH2PugHdfGiYhByGAJB",
  "key14": "rXgsAcYG1N7duxDT2YbmamabxbrLnq3wrZSaJ12asMKL4ELMecbNiu4vUJKLH9f27hpzDapVf4rVMuKQ9RNk2Y9",
  "key15": "48Rw34C4u6JPXMv2ddhzDy45BfQSazMBxs5FDGk3JQriYunqDJ2AGgs2Lnb4fu61k2NGQrCF4oH7yojhArxyenmS",
  "key16": "35ijRGB4W3E6wHqT9pqpa89wwQ1xsWcRPKAgpr91jTHHG5Q8N4AWou32FeGYjuyNrXqx6vBgYVz1nZ219meE3aH3",
  "key17": "4nVDwaW2EMfrss6GMJUE1XzxRyJ7eP1zPVLQrUvCkPCMXZAtuxpZVQCqwR8U5gPg14DQ2UzEkuPBAy2XQAmPbKg6",
  "key18": "Pbhmoy6FcYHvPxXjfyZvs4wapgovaegDfsDMseQqFxCwX4oeJZndB9siiqwtjpahcPw59fK9w8AS9XrJrB3kxCV",
  "key19": "5wmxBNFAnk3DPaYNWWAmTD3EFDDuymao4juKd2YrZ3rDfyhKYkGECBRqGCg5HmuV4PcYKd1U1U57AunDJwJe6hZj",
  "key20": "7qsa4aEniPtufCof5ZWQ55vfF9Byzfx5HpanbHT4Ciw9MbEGkafJLceDiwmirQXgWN3kJvWnx88axRxfX3ZvNu3",
  "key21": "i3gk9cdbAEhjNNsJszX5cSSdoVA5Q6R54ydVamE4UUzuuxsBWTqVmLe9gLeLqB3qzoi6zgg1fhJubE6dN662fZ1",
  "key22": "4rhb7sScrcmD5N2gzLCFcJumGp9iZ9oxhySEfaGPEWSwNVEYahyXAX3cpCpnaBY5GuMsTgDm9ykLuyCkTtQEz5Ee",
  "key23": "24diUbtbMvMZ67V5J3BdqnvnMBLRZF4SfvGR2q5bTPN1MVPo6PMjKZeSuMZiZdyQDT3FCYVXNbhg7uYxyfQaZAyc",
  "key24": "5VaiuK1KidPNrxvMZXkzwUG1WH5Q67dd5z7KJkZ8r5ZBw8DpmCnVXpNLNgpswNdjB9HBZojnVQ99pdgHPvifYAfT",
  "key25": "4sRc6SRmYH1X6AGNrpfpwg9L5Q2kePGezDv9S7krqJ934Py9tRLPAVoiR8Ek7PWKggbr7jWrJrVHBaNTi7Hp3DWz",
  "key26": "3KVePrN5zFnN8eFfZNimHWcQHsqv3xoP9XgzEP2o849EMCNDRmAnHyTRKRheTJBkDdtVJXRF258DYyGsDZ4yZsku",
  "key27": "2Yt5KH1C4fSzDvujvzZJdBXqmpEMRZg2aNFRmgjwNcqJarDVK8T3UcVn6xvrrNLqKKagt2ZBNN6yFZDncndY788H",
  "key28": "65vWxfbRwaC9VKuJDuSPCHeZTXvkJ7tnpEHD5MT2aH9L6AoCt758gJWX98cX7HpXZ6Xh2e94JezMfJkkvVXVVXej",
  "key29": "ZD5x9dGBEbFUn4aCFiyznB1gJUcqZAKbTxkbFRgPnAW5iaLoAALAaxNqHJgqzEffc78Z3YZp2dftJrCmS6DPyaE",
  "key30": "2PCPDUSQHe8ackkM8fhfXcb6UtiQ8f9oeUgAAAFfB3c9pVt7arWxM7h7VzT2D2GmgW3pwz6Zb1o1tJMWZcG5uEyq",
  "key31": "4NmVUsMFuMsTyaSiPCtVSPpmnWGiQXNbSXLDApD7JHNQK7S7NAWKWArQpGQGkA4cTku1GDik5uS3KS6Vmbp9dj2A",
  "key32": "Kjtt7iCCbSz472QY19Q4yYeVKDDyAepwDjXqPwhiEyDWUKfAD26etNc754omYWXoK1Evz4pbKpMNJa7hJcsHXM1",
  "key33": "SHRTEL7AB69VbfugM336KcfH1AJLDUQTBR5NsubLjqmdxh4aBhWbbNAnhxn4YzkJLuRQawEnbvLyESxS3pJXmcg",
  "key34": "3gKuWqMMMSNeyD2bam8MekjZ8RoggAMyb3BEDTxbBoPFNGnmBJE612VmYBZeSXsik946neHZ3MY9Y3bX6VQHbm1H",
  "key35": "453HRHfhxfDmo9k1j9aBE61rMq1cRti8MxvjkWvAbSmnifndYvYjEXt5QyD5G6WuV5qRXmZ3rfphrukMfWucCgkF",
  "key36": "3e6SLsR1wH8HSnbEUfFAG9JJHhsVNAuS6UdjRKoUCt6TrB6kx524cz7Pj2CEKQMkG7YHviLQ1MqCuvT2NxAMYRcF",
  "key37": "2dMcPeDuJN73sPzERhiw7ciXP5QM6U8rHabryW7PWWYQu1RGbTrmeHijuM5R6JtSQRmQDt5hdNNMuAiMJa6SuVEZ",
  "key38": "5RttNNuTNMV5t9WYKg2NT26vDcHiKBunTVpd3poYr9DUUTsejcWGmYHLVSin1v7qkhXcNLVJ1JXrcRrDJ5WKiPri",
  "key39": "2mtUxNmESZG51Q1p4weJaVybhwTtbHBPWFn5maRB6GkpDbtUuKSEUEu9iB9bYxqmLD4NBwN1xysN3xNuFCYxDGHC",
  "key40": "4tj4DJWMz7TVstGJXfMugfsZbqzL4LdJ7xXuBacnJHzwJ2vhAJFVF1P9ErGopT7S3x2So53i7WRNrnWskEZa6rxG",
  "key41": "5HVpNf6B84bA6sitWW5JoDMP1D6dqndHxiAKGUVQcWomcTkvJWdmeHyAdoC2LcGZ7g4FYrAEpELEVkGGmUeAbHJk",
  "key42": "2zPBJLioLFcizLtXUnhC9vHkPxQ9aJvNfUXhteK2T8LYNUS1EWp73PvJv8bNt1GhuX6z7R8RjPSg9vSYRFwF3JF7"
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
