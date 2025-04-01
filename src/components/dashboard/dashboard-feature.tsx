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
    "f5sTSmCVLMQezZyXzrCUWYSQBxuN7Gs18bBKXQEB2euH3nALY8Ye3TwYgmbMMSC7kYk2fZcfvF4y9oNTLCgo4dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TDDFGWd9mJQDAaVp8yvGY5FUzxhyLaLyXBdKwW8wB6cQZRZGq9t7E5niDBiimk9mpoMfXuUz75AXMnZPECtDtEW",
  "key1": "W7AWXsai7Kbq6b6RE9MNPSBsiTWjwA6yPVFPXJHQHpEYW2FxKYCvf857ru9xtBYkqjFZeV8C8RKSVcj6qZee5MT",
  "key2": "36urZWbUsFsdEAgN99JRRa8wrSNmezv1mRA1HFzANS6cQhshBSfQXLBvbumPWtP7pFeCcUsh6GSafJKEb1jK95D1",
  "key3": "dfG5AWxpJyU7C5TstzAtAAS1nMvtHGKwhM3sXsK4Lw3rLJ2ehWQcM2L9Xx59FsxAu8zy2hdvFbinETmSUmjE4Kh",
  "key4": "5M7SRd7nXkk3TSdjhPpfvRLuuokCtdL3awPwEVLRifFy5EYzJvvPGwc7RamTpxmXTjYpfQiLcxAVKwdGJAMhCncy",
  "key5": "5GKjoFPApX1MxtMPBSVoi67XXmRtbv3gqc3qNPtSCTWzzpC2x9SF22s2VAApcXkJwXGmN2FXqv2xsSrS4QdTin9s",
  "key6": "H8e7yHQCpmJrzqjvFqu2yAgqArXYfnt5UQxNbc8hTsiKwPvBVTdo3XoLa4J2Qz9sbDbpGcGCLwQfrvJMyzYi5RH",
  "key7": "2htQcUgkRbf4ZnEKoUSRHxbmvf17i2iNGUzdqy78ermkgZS4TVRC1kM5xHVyX8ufhkLm4krYy823jFy7VnhYUZEQ",
  "key8": "29cVNjD5NgZnzG2Uqdo1HqL2cPMogi8yHnxjoD4SPsZum6svBf8zGjHJUDKdiZ9UUajfdBQMLtFoLDonS32qebJU",
  "key9": "2LVHfutzGNLNsAqZ6HNYJBNgVX7FvBh3xTHPbCEz7W9KyZMbLyXnxJRvAWXYaXiM6wPCXfACe4anme3TJgoYcUUU",
  "key10": "3ALyhmeXH6Vgqu7MFWpizdT6SZ89E8eqppYrBNQLeAd7Sy35E6NRMDABLWt32qgYcCkcc6WcDBQjfQFBtGrcyX6t",
  "key11": "492f8WgjqFTCBf7beK7qFFVUGzXjCDDU3y5RtXGpPsAynHeNNEHg2eCY8jTtkoRXWcC69aKH8Ti6oqxtYJzUcAMT",
  "key12": "LHMFkYkvCSLZmbMEHUano4jwg7eioLgbBeK4BK7s7PN8J2cqvhBPREucb1YNgfFATyoXpyfKTGcen2S8yP4rkEp",
  "key13": "28eiCGs8T94y4gcK6W5jQKoSR4mos9prpV6c3YkKfycDEPF1kKY2vb7pCVF1t1dXdqfxwUwj2ZLMQEzQihAMTbZs",
  "key14": "4ehNYYbXQCkspjkdzjAX3nhAmdSXfg645smuuEXRCzLduxP3rATH4kAQjqAT6Mo2xXsVR5Rn5BDKxRmX6RK7iW3A",
  "key15": "452TPtzzWPVf83s3cHAS6DbuLryx7WMRYC3DVo7paL1ZcSN2TKRTQe7dbWVAw5VQCeb3bauhHjTuLn7L2r7SrumF",
  "key16": "22dFFmvCwKnohf8QTZwpF6Ysn9HzC69Qwk5YaPeFzZKfQBQjbChHBHmksbfQA3xpi2cwxhxwJDM2aKgbD1DKL2d3",
  "key17": "3e871iX22i7sC2SrHYGLR6cL4SMWYpMxu3xtcFjuuhpUo7JEkCdV5geZLCnLiaQmZu9CsgkApqfKMrWV22wckEHB",
  "key18": "2KbHBSuxpS8kpSw2V7PdqwXS2YhjztASPH928U7WzDPxpgNp4u5KgNHfY4bqoh8qcpHtYjh1dTKqQJirkS3i9MFa",
  "key19": "MWJ8VDMf7EhEV5uNdGcuddFXGM3UWG3We1qshE7UD6t7pRTnSfLt9XfuPcWuSZems6pjr92HTg6FxvvFx5NLKMv",
  "key20": "rYqHSZk7p8hq3F4LbXNckWJp15M6oZyeEMTtErrpm5vH8HAoA2HvL7Ebuh2f6PKx7p5cjApkikWpRjnASAX7YxG",
  "key21": "2vQUq8fptAxjPiBpfxEdV1VK1hr6aNn2djZymxWzL96NBYx8DLbVnBbppq7FDcnj5nwr56zjLBPxLGvKTHdBaYat",
  "key22": "2PZsrQ32t3xXayJSUyw6Byhdn7d4oJQjxggRJ21DjNKSxFApGDC8Tyh5iSkof5LNFCtNDAmjo2V4qGWs5i9q9hK7",
  "key23": "3JMaTyPfJWFpxAEGLUppzWcG2ZwKGLTtQQXAeBrsWXeHDdEeMw9oe3qgZxB5orLk4t2Y3HDc1Lfi61RyNBJ8apPX",
  "key24": "3B3rWFMSKGwuugKbveTf2k1HPfoAFWJJUWHaxFkfyQ5St2yKAmCLSBkoV1EFR8iv1Y3yrwczfvrEGQ4aiDXungeV",
  "key25": "2L35E2kN3ojGUBq4nwFWrPxoNS2c7xV253ReDriH2GFEWgNcLipyRo7A9XHvr8NwjZbFbE9nudeSkstEdSUxzK3S",
  "key26": "4scXL8gKvdSM5BSDrCwFgbNb86sLmjXoxZTuUZvhEF3b7tHEiQoHWJXpH35jNB4SnLunxP7HKHoE1LLaziSWmYWn",
  "key27": "jFVSPysdtwKSDeb7FVVS5iMioQj7rWdZvHpWjKdJx9GZd9NdFciqwreyfu2LgH1p3sYB1UnbDxNenApw4kcbzqB",
  "key28": "2TXXmYZNgTgLn7TVAMW8nBQcehzfWEgXiLoenaWvTU4Cyjkkqo6M2JJ5ubPfQga8oGAN8T8Q8U5db3QQeLXZZP5p",
  "key29": "5PBXkKwspAA1t4YVHgPRYbUnsBMA2w5rGApvGTKH61ehp36QH7Bk8fqcu3jaUR3AFQcnNEjwvdragEiaCLdsFRLJ",
  "key30": "2PgkkN334SHoNdMM89bXW4Tf7sAyVokwsrphVYX691ZDVddMv2zw81hHXbQLZCDAiCZQR1TYdUSmrAcuKQ3hMLW5",
  "key31": "3t97iCqFktTZwwCA9FjjyfyJ2UK4XpL6pzkddNNNK5Xs9DDYTcmFUFCvcyKMR9eZspyoPmWMmSD2YnDFKD2FQPWj",
  "key32": "2vKvEpYurgBzNtwFcrPfsDSCer73RBCBr914nNBQsTiVY6xPU4kTPTHjqBmduyTVNK8RX24nvk3Rqp2C8GasVh6H",
  "key33": "ggFLSAq7M6B4XoHt88dmAvvcH7rJeuGkU5Mkme6qxMCCjot7ifB63vSjEu7eg9YBkWR4qM9kRyrG3bTys2iwCpd",
  "key34": "2jL7vUYMc18KzZvcfi7epdS2EMjYpXNDAQ7CRkXD4aJd7JwWjU3yfZM6LWktaHJtjppSTX65KpWvXR1MM31vEnD9",
  "key35": "4jjdMPHfLo45uWLnekQoWJtGtmv9tkuJbVhySsmKhvTeabZAejx62zfafL1YMxHgApmKy33CUt7VG5RoPSnkphJi",
  "key36": "5myf83HD81rKfVVcdvuMz2BSvQyjeHo4QdRK6ebhgCvZMX1dGr9nWLCqWK1GJHRbABxrQ8byWx5mZ3kz92apWgTj",
  "key37": "5hTCLLLJCHMhPvJGKk4wJPDRr11FWzCMA9hbpccfRW1A1nf65bF4HWvzBr3dQD8Gy3zYfzhPA4VTba6XrP8CQzFo",
  "key38": "2H5evphKkoZizo6aB3DXGQbmDUc3B2pnTSjAkNQUfUdtgyaadX4vXt4nsF2FBf8hfi4rMs43MxfGRiira2Ypz4HD",
  "key39": "4eLWHf97tSy5pDAXuTqyKrFW5usPskrEffUMA9CNchEfdtdF8uA8i7p6EopGEFPDibj1SxzBa96jmu8ySfFYQYuA",
  "key40": "2eneHJLQ4Etg715zDoERB99AePR76NVDBcyF7kgBMQD9Ue5sQcP3wbxMFmhqrysBc9mRG5C4Ky92EYNaCqHibAmi",
  "key41": "ak6JXJDTeyk64ZHaMMtCEnc8YkEeE5nxpRraWLrzZkqhvzYHKvaWxgK725VujgqWTHTMFbuMjXVJXZjLQd8y96A",
  "key42": "ZgjvMiJ38SgwxReEdUJSnVYHZkwG2yFte7LMuPg4UqC4Ak7dWRbFdmjTdK8d6ZxsBNHZceNovGWtRwqRyAAGJnS",
  "key43": "3UzLaoeNdA4seqSJg5HGW9wxdQTxaeSjrQnfvXGTzsB1FqNSgAMKvAqoyBGvqzUkSJ5Jp1wCkqrYqnTykN6UsfSh",
  "key44": "4ozwRYVxBvNc8U8S8Pa4K3EHJPkf2NtXVqimYeWeYy8DYeKYszxHa6oSEgy4ghnKJhCdhLLYZ6zQbUL9ZBfSxG1u"
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
