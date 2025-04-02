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
    "3sXowrE7iGgTiSXtQo3sXDwYCbkuiBnWqKhsiACtbxPeJBxWVJQJVf61Qs3ncnaQjVxbQnrADuW49QxYswCqxzEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dSDpqXQUZnFzsS9UDgCvmCHNoMmDqDahyMKVnzMQQdJxLcnmKu5dy6MB246gfUistSESGJVmtoWfm18hdno4978",
  "key1": "3oGEgrnMDP91UbbXAzn5sEjwK1jWcGdYb5ktY3SVn6rRwA1kYYRueVz3Z8cFyDtyRD9thK6oqt7fa7WUH2zSKDFk",
  "key2": "2fpxSHt2ZnTNie74coRrdpzWM4T2askB9kTvWcLdeqBGs8FQsPp3wzJgxnDXN8XRNz8noeFJ4RyYvabFirvxE29o",
  "key3": "bHmzr5onedeseAuwc24e6ksVpQJkzM637PSn4AYzqabQxjS45gRzPsbAmfeBZ5p7xNS69qerh2LaRaKVK5Vjogn",
  "key4": "25FQxbQVaDCxhKNkMUHMcgjd9PRSbtMhyNnnp62gvCxAGK3YNyxwyuEqMkzZ9jvR6UPFxi4xFdPp3bV3Dox5h7b2",
  "key5": "4RyxMS2NLrHFeLnYvKQpCLdyGDGk8ZgkczbtsKYSc6rtutLq2vmths71tQRjtNr35iyeqcCxVDqRkaiAvctosMEx",
  "key6": "37eAGhcFCxvPJ4qhX6Uk5S4zBHjdi47D8VqHL5KediZ2zDeNm4ZLoaU9UvivGv4ZCTQYoLssbsSZKoMhwpB4hi2L",
  "key7": "3NUfsQqxPqmuzfoVa3tFHDGESSmeB9v1y4uo2gRHJmGuLnavXy7hpY6Pj8SoFfckGWABRijXTgm8oVpvUWQfWaFv",
  "key8": "28sQgJTbfqhC3UAmnKYxvedDAHX1opwa9VQtJBc2p6QD24yXComU883DmficzMiShNNMTGYn5Jv54yVAkPoBdQRP",
  "key9": "mUjhDwnVQ6gsJTSV2yLU1QAy7d87xNPh4N5okjj2FPTBEBA8ye3YJXVCZyH4MiedBRJcZmmfhjhRTDuNoaV1TFN",
  "key10": "3RLaQH3SiZBoTDXuUuM5sxyWPbX1V43ZqQNFQjNYmDJg5Ko4WkAZgcPaZb4y3umzUuds5ZSVr6ypRj1eVvoiCUaY",
  "key11": "2Dv6hswYsfuAaRXRjoGRELFtmBTq3DSJvkM25iznysyCbBThd1f25VMQb8or74oquHUzAgXDiheuZJaXKduRzPyv",
  "key12": "pajJ5rCrFDAMDxVxhaG3H7xmJf39gLcpYxDmsZVnKCnwm4T395fxq1LF5BR2Xe8vCozt14h39UP9csv7d1YhJqG",
  "key13": "47uWPiYadxcQkicLt7QqA97JXsc3hDwkEDbW6TZjLckoGPuMmcWfmYYJc4wRvEaCPp3R77ePhCgVFLr2ztzCgsRX",
  "key14": "5soWA33kcs7qqGCJ7SwVRUhykKXht7L2xrbqVLzguHeri4nXMDN5gEHhgsQ5r5rpa2fNJkoQrGq5cNE1hE4qYWzx",
  "key15": "3aVNfSSPwUpJ8A6AR7GHdQW1BeiBqi7DiqZuUKw8k1baN3fNiyYLYcL8tQazfvmrs5EFNPC3JNXHkE6tRtqN2UrW",
  "key16": "2cvc1SvguiZ5DinVsefVJtCdnYPbxVgGFnEkwiDwqYkFjFTR8LyCzcUwEvPkGgY4E36mhvh68v1mr6rHcpdko2eH",
  "key17": "3weRK4rhn5wYbuagurGyU4wk3Et3xVtiFBpBcvmSPfVfHttFjodtq6tHDE2oGD4oXagTDRoDfYccBBtK42P1Fb7s",
  "key18": "4zGeHCruXxq8EoUqLdF7Y8WNERFpUXCWQnsX3ebyquesxeUuDe8fmj3meM7kRfNhWMnsGgUEQRf7w3sT7n5V7aKS",
  "key19": "5e9aZmH8iJUogZRgmGJSah6PnP6DP7e98KdwSEmDgmnk1smv9rfY2oZ6JFi7QvoyJ84nUqpU9uc8VBo2MRsg8hUD",
  "key20": "2W2ktmGJY7jY4U5VMhr37XqLDNNCL4eg6vZ5YywK4LADZpBMsRTRkx8URfAmSjJRt84CSTd733qEPcnagFZP5B5k",
  "key21": "HfKMfAW2gyNJmvx5NBTCroMziZPfYSx7XKmsyyN1ET2igP1XhsRojV3oE4hn1veeKykhhZs2x8cQ7urbUcaGT9g",
  "key22": "4QthSWeofQa36sqGfEHVbgBjfCfH7grjJhghj5CFy31ZxcNRSjaaugGa3tg7taHT4o4JmUVyNFprpNr3HVijs5ZF",
  "key23": "44LT4nkPxp6qxfVLmRFmwXN4dkDPi3XmiekiRZ1XwRKtTRUQ9PgGJ9CyLhZf9qh3p8fSC5pRY3qsaFrb8cmtJhEf",
  "key24": "65qa7DLfLQySUXVaM91uWWgBAyRVzMpxV7DLJGMhTJKUbUnqb8sSi2hnKCoEbvuVPyNYL6pxpPdrxpncg4ntEugC",
  "key25": "2Kqn8FZTzB8x2GjiHpsWMyaejMEnzjpB2g1GNGuhBhNBbsmQHfxPKkTV1rgd5pT4ApNfZJ7nBtokwhC6qNL2gqfF",
  "key26": "4yqUAvjxRLpuhcBWmtxwZvmfh5Jy5V4GGymj382bAALGtj1xrVPZ4B51UjFYYSU5FnitycZN8nrPEcfqHADwtyje",
  "key27": "WDEVsaCKir2nKCDV79inF1cJBAfzwD5wo9mAxVNMptqT8Fhn5MbfAu8WhiPo92xoykr7p3PXE22EoecYdr7hEpi",
  "key28": "3CXFjcVUDNJHeisYT1R3rgnUmcjyHc5HsGLdVEYDVaXXN1NyXftG23RPK2TC1La8d9JqRdguGGcjaRDqmGjrSKvv",
  "key29": "3PAFmLu15JxpKFnCjEC2wp5PCMUhLmLQ8z6mgeE3Fq6k75qCJ4YB1P5QPSE5JiwnCnQnyY2Kz6ZknWV75LC2UqLU",
  "key30": "2xjoakcnzDcJQzpPXUVuuz1A385movERj9CvLF7Z1DYbggPhyYF6RFMbVM25Y4krWZ9swwsdMgQsFdusfV9Ti5Na",
  "key31": "3VHypk2Tgu2DJTawjuLMwWDdWff8PK9aYjb2xavz69vpCQaR62VWsotbyXfZWGQg8oDff9YUyJd1wPxqz52zeSXt",
  "key32": "3uR7pynZa9auB1oecQyG1Z8VGVAU9f7idKPEztB2mENdi87qog3USKJ4pp7ZtYFJRjbGJFE34ZW1eGC5NeXuVnKX",
  "key33": "3W4qcq6BWX8PqSgQRGK3bUvemD4L5efxKKR9XBLM12Wh4giXFKcFVasADGfaN7GpPmAGsvvUiSMJ2dqwsunJSLWE",
  "key34": "85xmVGf4d1Rq4FzzLm9y3CuX1rB7XowDMLDmQp3bQZHyx9zN8yYvHtDcCxo2Z727odhv6WLu2XBBxaVDtpCtNbL",
  "key35": "3YcCcghMiZtjTg9UW8UAKn6hnhAzVFGqT5aFdQQncrYgJiJkstEo56G7VMEZdA23owvnbCsL369wykQEpyJqXngN",
  "key36": "3h1YQoumUxQYPr9yjaHs3ocCBSUg9XtvFZQ2kJDHGKq9gQRdT5iDUzP9sRux4XLxPwroT2YxdKE2o9BBMu4PLgFs",
  "key37": "4WEkM7eBNohFAHDRN7YFjV3v9htewMEnqCHzhfxzL5mtcoCGtbYE4phr9ivyhZSw1gm8SVkHGzPMnPBbcNeZ9yez"
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
