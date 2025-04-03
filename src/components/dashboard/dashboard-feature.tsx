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
    "5hiLDwn7e485pT3s8Ru1TSdPqFPrgzQd7cQg35c9PhDXME2m1268JrJrYr1FfHMeLGYGiRt5LZboASdS4UNWKFNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SZSKgYvoFphvWURpnrmomwSMmLoF5235Scv4pUL37gDYed62FoaZ51scbz2z1STwufy8QUcgNED7urLMVSLxYr4",
  "key1": "pkQNBBFsZRWXvrx2jMdgLowZ8PWU5uRXyhWnnFmUp6xCTGvSZu6oybJFv37VofwXwRz5ms993HtpGAXQSjyUCPG",
  "key2": "5Bynrt8TjZEK7wt5MV7wpC8A2ueUpQxJ3ggYregx3iWN1SQzkrL7gdYVET8FRqEDATqXJZqRRLx8uxKSucFvrpTt",
  "key3": "3Y6oJeRPDUfTGBypyPUeqpAk4Zcm6g6ySEZ3GixVpqBn3P5FPnzRZUgBHmu68dXn8zzX9oY45xyskjB3eugDrQAt",
  "key4": "YuWCTygsX7AfHjVg1HFk9fcAXx52mCu8McLoYoWvRLg2ktojYdPm8hMBPGvzwZ7ET5GUQx6G1TzQ1vE32prkhUE",
  "key5": "rJKPPEcurFd1RFNrGVNWWARRhgZ7mRTAsbPh2hj6cHGA9wnBkL1p1m3dgbWyz7kjju3LJrsp9azG7MHhoDDb9xh",
  "key6": "uzcPVnic6Pnho4D3GW9NRfVSESRR75V42nyjfHExwXJVxKeDWAfdLAneBNbaRYwurWnsmUyKEgv92xaXY78e6bV",
  "key7": "4y7gceJe7zqytBxFd2UWGWovScVC89iKx5PruSyFiq3hvEQuYRkEveb5z5kzDajw1jLoL4suZzkUZDoGnEMoYres",
  "key8": "5oJKfw27Yykdt5dZf4LyCnX4YzV7t7wmcydNUFDftDfN4QEYFJ9AwCYn4HkKn9dnDCzaMi1vv7XEt3cnRkXgG78r",
  "key9": "2cimDGWenzMPN56Zjb1kDVVqwka1F1PQMf5BDPEFwH72P6eu7Cu64DcgGMJSjFdswi8msy31u32jRKxjTZvbWZc4",
  "key10": "2AgRLis7ynDsxJKAiSq2LSzYnRRQWGiRQs9DkfkjwQ55rtjT5ATfpAzprj2n9WjoAggiobHhhRmqKWUdDcWH9JbT",
  "key11": "HggYJFDYN4gSjzZQ8UrEEVnyXmWHjbqVQkbMCftZ21hgFSAuatPZn9fh6NqHNwzb1oXRwPVMM4TkPoAGGZ4m6Sg",
  "key12": "3J1iPDoSwtPtxrVUeU6pbQMtbGpvfJH2ofUTCPyYeBodykMpjB4kkbTJD9QdL22YPi51XbuuBeQjH5AFUrdX6iBY",
  "key13": "2ZptYkQvT7wfyvogigo674oztJGuMphUfoXy9sh2u7D4HTQXvUkDVdFzSwMtwocuvLFRPQhwd3CfMd5SeuddVPzM",
  "key14": "3PA4qZ2NYE41aRkW2UrdVmSqsXn456g7Ys1YZVDHx3noj33xDFY1WSCJhfhkmDXTrX2ya798YddeGj5yXVopqGPR",
  "key15": "mjxhBctPprkVcmLseTrachhg2SQgJAaREKuUGKH1RmrNZXzp29fXxxxYNuq6eZWXpPwxoUi6wmMTKXHd4Bxfvvy",
  "key16": "22nbES5PuXv9eELc38KMHwusuC8fjfMUGJ1c3KZA8AEYx5BYNoC8Vwj2sqLgYLV9VM1hEMS8fRaGcmfKG6DgpQ1r",
  "key17": "5xg4oKm6nQ7mR7gGQayvoQFFgrck3qPSs8jcJ43Wz6v6dmRySUPLK3PGG1AXosfD131VwBoKRGhi6kxSirEPJYv8",
  "key18": "uh9qsSCsw5VwmfJsrbUyBq3EYLzXu9RvYiPM3yg5orKgEFLje2Uz7Ycc2sjDievFhNcnMfGCZcCwYie9pofKagn",
  "key19": "57LwMBrTo3JS3RwNBVBGjdCKebvKxzubZiU6sHZ5J4fJ9Lqa4u7Yoky7LSKsb4sgyMRgJQsTyW4CdTjCN3VKtbA",
  "key20": "34mFEfAqeffn1dp7AiXjwUxC2zNNw8aAryYJeGp7HDs3rG3SxL9PPU7ZtyaY39KKvLLBGGpyikqA4bSPw2qBrBBv",
  "key21": "5unKQyzs78u8pQF9PGv2rbcikoGw2mSSvpvd868hiLy5ZqmZ7QoQ1EHGAowZC5H1v4svT27y3v2s4QKh7JJtTTeM",
  "key22": "5NWkcbNSNN7MNYfFewCyoMSKTBWYX2cXd7be19KmU87xuTRb5QGyGpYSV4h7DAEWXee2TfBiheHBhoMyVWTk2JgW",
  "key23": "5oeGpgCnSFhzrjxBK6qcrqtF6N97XVkqC2aR71bvZSvgSasGmGP54ckZ43mchB2DdXcw8mCXMamYbymNDyZspJaJ",
  "key24": "5YQ2MHskJbBs2qYJJHresbnJpykXv3u7tpWdLjvrwivoSxw9zFT7AT6f9D12jGpKhQ86nsn6E4ZGQ79v5v75HQKy",
  "key25": "49REQj2P64o5XSoLmUEsSbPs1uQKf2psrnk6ceiSYVvxw7LSn2zGU4wsDwNsqWqEA9DC9FYg3P3L3CtVxyrwytTi",
  "key26": "5t19DFX9RfeBBB2Uz8iLjwaPAcFXySNtHAx6SaFVViWL2cjcnGc4c6NUjXrRLMHZdH7wppHCoyeswHUM6fxLfLcU",
  "key27": "CUSMGRqP4cexTnpMTXFrdHdzY5Eym5NAppVQqadipFy49Mn1yFS2TjQdM6BWxqoiTERBZSh872y9wdMQPxBHA8z",
  "key28": "5fjJ7GMUxpK9RsVQ1Noc9TbWvxanM9DXyGnU4BDGrZNpYnRexXHTXsQhZUEXWnzFrPXJW26mqrmyXAwtmPmgRNGJ",
  "key29": "4w9sdiFaePPeCdVJajG95hraLYY95NJzEAUSRuKWxs8rz7S51a5PsEb5TtJXqPr8kuaRvY3h44zCNYe1uAmWEWCm",
  "key30": "UWU42qY6rk66dZgGYs7V66HUkhXzTTQomoCdKNuYccQKsE6rnM4Y67KQsFBFyShixQGfmW2sPhy3zs2G4hHxSd5",
  "key31": "4fYLkgKihU5MVd26jT9nmGxiARd56TWfBYmSXut3DBDUizcGhMkBsAcFRLX7P76pVet6fqpnErEQv4ow5ddZhcqD",
  "key32": "4sAWksMACHdPC7NHdxvWL4m38Me4TVJpJpYMmmiR6dCNC4rdnSywNaZ9U7UQRVAisR7dL2mVf4njyPhsKnWg8eyg",
  "key33": "4H6Zrwreye9pcDL79tdcXrkQ2B1J5LhTv68KRDTYcRGqJ7XEPYvmTauomvNTSRF9YuR1nTE3WzrnBcJeFQ3yVaSt",
  "key34": "5N5xgSEkwR8gyJCVGraL2CS4EyQbUMVHKLPKDWTCiPSEBSXpjiyas3rqMd7Ty4YHuL8dA1nyf7cjMb2XTrdkcvjL",
  "key35": "2rRnT14RH67hVcNFH3jGwJQuZSQ85JGEzNP6XtoF3wxv8Z2h55MX2yRNxpMpXDCZGRxq98WkSZto56QdNbmjoDe9",
  "key36": "3R22YuMCfDfNWYbsbZURjiBPtKFkSJDY1QxMq4yamUW5vhugVYb4k5jCZak88sXKydUHvKduQh5Zf6Wv9XdAYp4F",
  "key37": "5bZXA1ovmtPyguPiSVb1Va8nAe97gRAfPftJv5tQEn1VJ921ywo2jcC7oaQ6PSXPh9hqDL4BUxpPAEtyzWJF2Wfm",
  "key38": "2igYVpmuxwGyYPAGYNeNz6as7P8uM9ukNkNNvTbnfykyoEMXDD5er3kBiUjNve1dDyq4yxTHJaRbCSA5jwkEyMZh",
  "key39": "61y58GM3JvCQjNAWWJWcNaowXKjwyKTjA83JLQR2yWkyFUqoZ8a3Q6rvCjHbHJ71w4sZ6mxnhPvQdc5BK1PN5F15",
  "key40": "4QzEkPqGn68X8esSiKupYFWyHcQTpGzf2d7NJYDpYjmj7D5F7dz9r5HyCwEsBhxS8tbTHNG595Dv1tKLEPPq23nb",
  "key41": "5S3gxo26eQGuvKCXq1H5EgXXxTpA56msUF4hrwUho4cG99f4DMgyUHwC1LegWk4iVFLBbchQALhqaaH4gbNb8VZs",
  "key42": "23KBXN1KiZAPSYCy2qQjHyz7gSNCh9nQdoNe8n5rE8Q5QyFLBbaZpfnCkcRPqujsmE12dUu59moU79NV8FjWVLj6",
  "key43": "2fLieEzDYJQnJ4LbasZtxWdmPPCDLuCuGDy6YWC6e1vJwVR9bwvn4DvCR8UvzLtfQt9czArCCM5KCg9zcT3E4NZU",
  "key44": "eYk4Grpm68D56udRGVjp4MDzP1Kp1mLp9GwD723ggo3r26doUJLJK1kdgGr9qsKwCSQrsdBvMRwWZ275taRHyPx",
  "key45": "so115fRnQ8APTYbf4iQg4CgDEi7wC5CS25k9bGcyLBW5AoMKY6namQjW3ZQchYWB1uEddFYoSyk9augCJ9sPALY",
  "key46": "5EsbHC8CHmPzdZUxmgTTELbuLwEsw3SygHgdgzPjEbUEo9127Bh2cX5LcW8jM2M5f59qir8WkBynFqGqNvyuG6ig"
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
