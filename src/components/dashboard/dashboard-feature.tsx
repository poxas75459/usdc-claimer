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
    "vav7qRDCUCtsG6TgMTRnFtWxC14nRNhaSKwBZT24o6vKoXtBwrpQZkXxfm3UPgPZhHF3iNeACb4WcLhgcCAvuEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dMiFyeEupSdg127Tqtae9ikCEFv4LbmxsLqm8b7viSLDby3o8dn3XAbpFtVjMGfRybFYnv6Vbtazoct6wkdZeo",
  "key1": "nEHDMFnXhcDZWBDKQiJq32Lh5Q2NSp3RUgj4Y22c2d2kiPjiygnD3nqhE37Dvnv68Qvg8JD8qkxpH7YdGV7fJbT",
  "key2": "5rLFp34KxNkmKL3jSyQrQQUs2cafZECTRJCXmHBoPz22NApuPcNPubweSU7DrvkTJsaVfeYSgJtBBPZ11g51R4Cf",
  "key3": "3WQYmVmLUfo13QBAaaBtypWGTa8eS4Rxt6Q4aC2VYf2EBZhUkuy4sDP682Rd37CsGkkP9wqQvKwyQNwtB1cdtsYQ",
  "key4": "44hRzXU2hrAC1MSTgSr1UxR6cGKhrLnFAbQmiEk4W1AdNom2xBFo5EnUPBLB1cG7aW4sWsC5c2UYMyWcccZRjbDV",
  "key5": "SUUqwqxHtRuurYNT6VEkdqS8qR21uFtxFkzJDTDydZizCJ7QQZGgvkDcrb9b3pag4fUFtqBApXmJbdusbQ1MT5e",
  "key6": "3zuywo3uPAQft74bHNFJC6mw5JhJWKsU65THnyrPee1JZHgHgXGiW7UqcVB444hnmasCNTdpudyAGPHRA1JJfZdB",
  "key7": "3U8sJszYPuWn5TMDBbwS4yJagWNXGeREWszxUrJ8qVS2GXbH6MsJvQ8MoGuc1Spp59G1vu3kaALzyVAt3LvWxVG9",
  "key8": "3ePwEmF5m1sZ1KbUr5AfmJh9hvVBMeCanmYQ2HmXwe8Ty8ySUwc2JTNzNaJ72XQVRkEVtgYK7nJmbszF2BcQD1oL",
  "key9": "45XmoLDCdjQFc6gUjs81xMKdASBNnyEv79W3udDCTaCdk5kMK8Qui8qMmecithBwgXj17PwGmrTZC8Rqx4MxGKK2",
  "key10": "4UuciY7bzMrVtHwkcKURz2V9FGJRisgJQvRAJKEo6Rofwz8yNNFzLZvHb73SzNKLeojpgszN7Vzvmxv3aBwWT55V",
  "key11": "4JzEfAJ5Q4NH5tnAewasE1K3YktAK6wntDzFndMXmWjh8U6dTbuz4GotEusdoezXd2Dxu5oSudtifj9s3AbWF9Yb",
  "key12": "62UARBDGBa1b1xRgtewaP49GuFekNqgsoD6fZXwZVFRb3ugSZsBaKPvrC14jP2D15xweSmzGQsFqudHe5ahjDtCR",
  "key13": "46mkKRJz3tQveGXGQ3L5GUmspHrVied4eLwwwinvjtXZswjWBh8NmN21Jhw86z2uhKdGBdYqYxCCkmmFXUgSLWnm",
  "key14": "2G9NYSYAyammd3KzVf4ZySkMjC8qbDfnK6fXycZRS9m9Uixsnd4JqVb3dRiKaXu1iYCPxSisrcSof9oRtzb1uBf8",
  "key15": "47yTw4mmipc5NkJSXVHicswLmkD8TCezpgFKygJEQfk5rr9ni7kgDY7CUGkViDjy569Thw51rSEVzQJhZM3sKkcj",
  "key16": "5JkwkR3MdD1uYWQ91V48JFEcgfRCdUdcf9oXkQJvccbWcNWMYUPp2orhjABwbxP3Q1sT8AfFWTWV5p4TbznVAcjT",
  "key17": "JWr3mG1gu5oavpQnYzCMz819y4mYn5qJg49WcRAdhYsDTRFYC3dDFCnmPBAqNDpxXkwbYHqi1Q3rLUAf1smKK2v",
  "key18": "5c4H9PnGLfAoRS9t2CH4Lpuo2iqTd6iucUvNafgkp3s59gRSauE3CtBwZZQW1vhaUwBTRUW23EFPbApNs8wXQaba",
  "key19": "5zQJFumRyyXeyW6HPHB9yaQQAPU8UiVesBqtZ9eLPUFjQg7YJ4ATktVvycekDGdm4behMfuDLiY6eG94QDmf85Rj",
  "key20": "DFFxfwrbmjrCbAbWUtuM1RiVZGKzV9bVWkKLrkYpBsdGVt9jCFJMaYrByWTWHbW827VFD1d9HMkEgt6CFKMbXsK",
  "key21": "3tUc3o1QC6sFfvMvg16amT2iZqzj684cDuvHfG13Y2FRHpzRRZwZkraoEGyCCNut5uqqY6KyfAHqpXqKgts16B63",
  "key22": "2U4rUEnNR4ZtcwK5xAU58RsLNjLv8hhA5aHcSUGrhoMeuXH3F3geg9WLpXd5SWn9FfwvkYcrovGFehmrtcA6C9RA",
  "key23": "RZsUXM7p94edBPHfdNFwYFQ4Dn3TYx2BLwaGDz8EWtQQEtw3CdHnfYkNL9dDcyWG3iPE5eXzN8P8eys4MqGrpz7",
  "key24": "3jPDU2C6LU2ZV5gJNgy3Pm9HBCuYMbSw5GyXXhSpjEVdqHAZFmzHEZrRMribcMbNxmBFatHURZ7Uu8QFJJi2NcRo",
  "key25": "2egG7zBusAS6b3sAPkFMDAN4v4Cfe4JaQKq3Ax87ZPwuH6LkAKKWwGXL26rqgBMFNnwhuuGsiRyJZHc6BmtFMMa",
  "key26": "4EnWskpkQHPi4qPdGkdntvFGDxyQTg8rRrgi9BTKDkPsHVojnoDSLrGCh3pqmJ9SALX3USKCpFr4oherfvtaH4Lh",
  "key27": "478TDPZ4mzCKKppEJnYnUQcxuZUKJmxu7BcmvhhhRA11qFZuNkAvdFJ1aVXmmxwDeouHf9r11Jsq2RP4BHTpBz6V",
  "key28": "2Cdi8YDgrgXTaHNef6wiXmMmvrPEWSzsGvA1fy4o2SjgNGWQvDeuTSYrpAvUMQTnyfUe6eWGD5uLJDYXcoSYbMF7",
  "key29": "3mirmxYKTPSGr9BCUV91a47a1UpcyGF83Dhze6ENehdkwQYev9WG9v6Ziy3jYSf58TPiMr2hAYWu7aqvW2H78WqW",
  "key30": "3Kk1Si7Aycqs9jEqBHMMS2Fvd9ey7mgbz3uMhCDtb8oZiZuHg2SZ2n53a721sdSwNq4tn5hxQerAMQMkHdM4twBK",
  "key31": "4j9SfD3Hp8sKHJkon7xDe2BtkQ3tzmtvRvArh5Y33SFnYa2SGRkSUH4zfeXnCXcjbEYYhk9qBqJ12qL83QLJpoP7",
  "key32": "3bo2ft7wwbVMeFEhb6hWTNDDjnsN4hj3Goo97MgiAvMUoNnTrr4BTLLW3SnEpDN2zLFqkHW3kuSi95krr1zR4yuQ",
  "key33": "5CsooroREix7YfQ32GePwm29EP87bacuTdUtobhKp7qoqmWFpSSbHvwq6wE8pzedJ2bTLRrZnGQ5pLMJU9dZ2qLH",
  "key34": "4LyPMNi5oZQJLeezsSqwXkr1BqqSjKzGDj3hAvpAfHJaFxMaGPVdS4Cv82Mqy99RjrUDVWmVKszBCzVUJeqs3KDK",
  "key35": "Wn1DHHP54Scn6V7E6BP6J8Nro2nBSjxoLajJVfvT3TaAM1tmSPTTT2C9SToV4EJ9SaBmWmNpys1MUUmYDVKWyYi",
  "key36": "5sVxDJB8d5DBCJQhnRWnMbiEor9XFgwP5jsj6km23auajGqgGUy8CHVaAuzmtz9iwAJMTiojJ4UUvdxyhNhQqZMc",
  "key37": "ReGugKApCHsGwwqvk5aEYr51REe1eB3JHv8jcEiEGcsD95eHrXQP8truPshR3FAJoWp9qomcpSkDUSjFCLC1hyn",
  "key38": "25tCBeeg95eqjxZYjL7PrTnxP7ikucADTEJ2fX3JhU2dXwtSSKVmzJAoAf2tPjwJdHUBu1J1YsRi9JaTxHnnBoKV",
  "key39": "2MKqEMMg5pLeY9cVvaN6CYrPoxW47DAN2AAFLQMN63pYttdhuhFMefzk1xqsnaHVftifbyp6xKndRnLCSRbZkAzX",
  "key40": "2swpNREr1AVx5tCUYg4eM1WEG4EpAq3rENF1ZSkBb944G91wSguWDBbeE38dYdyYMDnuprBMgga3oaCdkcCEFVbv",
  "key41": "3t713Uz9GgMXaHroayBhCes6hJ6zD9ARrxTVGBTjwzEF99yXdx8WAD5mMR94asSkXGW4Z2kBKj5jTBYeJKW5MCTR",
  "key42": "57vtg82bpimFXFLZcjvJYoCBQrpH382HfUZqDZSWLZQk3kq7u8n9G6RLbHvMjHWeZ3dETUrjoyMpotZ72Bm137r",
  "key43": "5zRTSQ9RKVztSshbboksYjwXs8xDjzpiDRbPcK3gurqMxMNXnCdmwZ7rUbfsq2Sh4RBvGDCQsznAf6UPnKkSMY4H",
  "key44": "2KBZeU8cMz5BWMK2KijoVdk5Nbcg6nR6Yrci8Ymm4CyDrt4fGRxbbYU74Tphu1qWBcgqXqut34ik8gi7nMhBiyFX",
  "key45": "3pSqgcvpHh4TRKGmoZQ3BmJq5LZxzMJB3HPnkkn7Z6aPppkTAL3iL1dgmJS7rhtLTTLddSS89wbC8GHrs6DenHK6"
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
