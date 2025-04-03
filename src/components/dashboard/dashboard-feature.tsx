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
    "3BTQ455eRrbFNiDAjycYvkobgrTtrppjTBaYCcpD5XYMPzsLNJDRy9LXuYSjvkiVjRgKem2hvWFfSDVE1C7ovTP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vMnDuEMPsRojSmfzHhAbi47fCRZ9bDMNY1mBpXz7pwKqmQ4i9LitasB5Zz1AsL8QSVDM8gDUr8YUur9RNSN61n",
  "key1": "4Yo3ZYSMYCt5RkSqJD6ayMHCdqpuHDyjHNY7hfYZHNkXQvhjCoHRRTNDiYJUrZowLHn6W2xv5yhBYNcLRnUJwMAD",
  "key2": "5nfw92ZwjRYAsNZkjdfzp8kZrKUPB6eiEVF3auNvvFP9w752RUViLCadi1YA8x4gSDwZa4FCMiGN9Mz6xRVnv4B9",
  "key3": "34BjpfEB4FApLiVWeD6RcJ9rZL2byeTXyc82fz3ZH3MEX6LMfygDsBCW6mq5CvU2VnHbEndPV1Um5uTWYF3qKeYa",
  "key4": "5PutZV2VFdFE3NhvWrHURo8pe7sbpohHEkSqmhGepfrECJEigra21iQbZ5WH7GLSZjkfgBuK8BgzHemhN5u1aXdc",
  "key5": "2PtS4o8XWmsDf4bU2gwZbeibknaUEqhzMSmbeZotwxW87rBowwMQ928RENK6Bq5ZYM7WSg8YhTfU8TMLgKYsXjem",
  "key6": "3x7iULDfrG8MyvFzQbbXeD3Geu13FxyfdnWz5aYXD8f2f1pDj3JarpDEiGeXfmXzdnHn986U6MCV9X3KNCHfMoft",
  "key7": "2CsjJwg9UpxzEqizuWKY1QK9WAwJnpRSZnqAm6vTvcGVoCaUDNtZdQVhMKnBpxNrGRmfRcKL8q7vpGrS4MmeETwA",
  "key8": "2uK1S3cveGH25RywivFrnPtqzi4tHc7nf92NtzXrWfbaaWZHY6Jgs1ocMpNSY51X4PbKmKXHcy8wQxWqeJPr1qWq",
  "key9": "2FkPSCLw8U5DvuEdyEN71VFuZ7Uq5UKpRehP3XWsuDPG53Pzyh5jiQCzkkJa81fpGg9cooNqbzbEWqGJmYNZkNV3",
  "key10": "19eU6tNJZaXd3GX6ozjwFE4kYLBs1Qyw6bZviSWoXzk225oBtEPMo8SSpFe4fKM4ggjEWvtrGsQr7cpRaehsYDu",
  "key11": "2oyUAqHDZiNisPZXr8seftnMMidgWpi94U9hrmrPvQ8wYGTUbyi2U2wvAzM1xhPxbiqZkzSQ3Be74iNxCeqY5hN4",
  "key12": "4yFvYCeFQ3CFDMBMxS5z7fjcxihd9oGciVuFSonrYnJUp9XC7pY5ZfSwZRfB7jvQkrDbFSJhduS3Sb2y6n23QknZ",
  "key13": "3hNGGZgsukLzbrcMEqtEJ8Ye5dvFRV97SXRDxK3ZatqCbXbM6qaKEu5aUhwAaxmbJsL2riPeG29EYS4HTeacQAnj",
  "key14": "2L7LDurgwfViEh4HypBPPgjjvsLb8Z1udVXJ69ECjpSxVokiiqHVXn9QtzQ3fwVq2rJUvDhupFCaSGjeu7RjLeUE",
  "key15": "2EQqj2NoBf9XZq3V8PdAL7CPzNrjzvsSNfhGvGbTw3aRTWgH7Kb6bozACusRUMscsGWdz5H1sb5yJeNniek4kz7h",
  "key16": "4RvMXnkgvwSTtXDqnohuk93Cn9i6JuEFQ3HHtygix8FdvdUgzLtTxqJc4EHFU4Jxsr2A9UNcY3XDsRGjTXfwUDme",
  "key17": "2HZpgjJBiedSEJncjDoa1nBRoDU91RBGqtAmno6LxPhwjL3ai7gajTWdp2y2S9NiBwZmmRbwRhiMKzY3u1oAUWvR",
  "key18": "zamXyA6sepiqNSoEjHVJXD8E9UW66fPLZS9iEXkaAVyLNexdxjyeAG9LLPri6nEiUDmyoWrNNFGH4tZ2Xt2HKN8",
  "key19": "4nu7dKcZH9p3MUHeSyH9kkzpcn1t1Q5waB9WDxjCwKvy1khw4mhQVYZ3WUCYP1NQXB1QCopUwnu84HPRjzP16jVK",
  "key20": "5ZUCpAsjTPbZ4dbKPiHUVoAYcdkkjgLPVnbzk8zRaf8ysUyTkhTQ2p288h4Ym6gRxa5Dxy5VNaPPP4WBokaYhB8Q",
  "key21": "3jQKE55FK66cj2GuiyRVLesM5WUAwvocj5q8zAHiqktZYhCnZBZGQ2kqoPVahog3LYpvY8dC8W5BsbaiAJoYeyiA",
  "key22": "3HKnD5kanbYWXBYiDgLittf62wpbXNsYsmGzJ4tiKmveuqNDjn1sVpYBZrhBoLvqWsyiKisr9et7z2eWwoc3cpSy",
  "key23": "4zMTjvg633B9LoDm1Jt8GDmMTfm58hDvTSiuAUrfC37PKgSFtUqbohKpdU6dbfY1jQLsDvwGr9zZho8Zaw1u1yrp",
  "key24": "4ND6BVvDqvgpqKagXCw1oQDYTeaR7wwsvW7MJXg8bCXvGGHfxLDcKdcxDc7VA3MGThand8WYgZoj1k6Vzktvt1w6",
  "key25": "24pN6mfDdjvGuG6A79Rx6y9P9yys7qr9ZdomuEXXQcrPR2gffL1zRPJYRTHAXiMayYATexh34PJwAPYpcfcwEoqb",
  "key26": "2cE7wt3PEd1HVp6XUPb2NLqkDQqdAAuxGn3yzEv4rBByu8y5tRE1kdXS2sVr9Y1tRSCPRbE5AeSBzcq2KsGhut6G",
  "key27": "2X8nwtuR9AjXatwLn3j7CCHkAPVSq9y2vRtS9oggJM8kompr3mVkHpjpACxwKdu6eX7zD3s1vXP4kigwY1coz6aU",
  "key28": "3rHocwyRr2hnThdFGCDWi83SUz3yvCFWJxHDTKE642RpWeRvfExCMafp2GdaoWYAqzmeJmjvjZDdeE4zZUPzExf9",
  "key29": "5N8foM2He7FJtAMErvtWuZ5D1JCLEqcPjf3daknaTCxzwHSXLoi3DXtb2RKEeHAumLy8q6xGSU8Poyc4zG16tqJz",
  "key30": "2ufE5mXUKA1YFfvvNwNbRVW7p5UHsjLVru7WaAdAmwWtkjFmpwRcFX8xSTgocHamdPeRmL6fo1V2cJjQUB8eHStD",
  "key31": "263DnWbM3RGZ33uaTc3tkjfSsKG4tEbBuK9C71hhtQRwCZTxaVqkiXmJfApfAnaHi9cpFgcRCDjPTNrdrgVurMrB",
  "key32": "2gmyAR3cyJ2haZw9YTJ8futSUxbo76ZMJc2ReD3xyAQGY8CpWg3a7xr9TaUCe2rSnGLMTtPMVGDi4v6RYiRJKuzd",
  "key33": "tmjiGNRgqS862NkLNTBfk83nftGqs5pHZSWypK48AnWFhrSWvhThNQF46NJKHjw14iV59zjTMqSoTKBAc5U1b6L",
  "key34": "2nCWnu1wDbJg2d4JVzSxRj8ggki4DtbXFfQafuHKFp5BdYerqCQj1ZTMidxqujdrmhCPjG6cVFLj1ui1RpBu8gBt",
  "key35": "37zcNdo7Kmg7JhVKzKEwNnTdZzjXhGAPn38XpqYFNNNw1c9i7krJqypfAW7sG1oHRSXUyGX5LXbBL6gN3PaSDNkS",
  "key36": "5hWrddf9k2JG3aoqzFGGJnwjvovqbsxX7eTtapSWL4E1Pgixb4rYsQ1XyfrKuozpcSqGLRrSDAhyzRUCyEm1Nnce",
  "key37": "4bAKcZSNKu25SBaXbyoNNKmntwguN1pB5YB2u7u6vYiH4HjccoU78EJej2KE7AUVWLge3o5afW3dKsPQZ5EWDKMM",
  "key38": "6kQKUfPSbhuKE6ZHHuGGQ2GvEiXNMe9BPB4cg4zSbrroLxjtqysMzpZJh3XAzKpcjY1PjspX9bqiGgAAHtu4gms",
  "key39": "2euT34nnNV2bScgDkz3ET1vMHRgfAgnKRpcc49adYHXQwC6ZWLymSVFUgFgvA7aqMWgpipdgnNSnSKErt9x16BhS",
  "key40": "61g6zsheCAe1GcjiWDqLTfTXNoateRz8EVJboVpqFTypXKoXzUS4cKpxQzH8yVb7hMWboksoJNVYtheuL73Zeqhe",
  "key41": "49NRXEK3nevJXSXBWPxr2PtLSzRf5R3CgVozDTwLam5pLcJS1LisWcejsBb8i5wrRoiFqRyJkK6TgAGEY9os8qSU",
  "key42": "44n1LzkngdiJJnFUB2z3odADNU69VoZYsstzNgSmc6Ad6frurRGy7jgFzJqK9i9nvqks9FDH1USAMV1pFzU6sZR",
  "key43": "2TGN8vpiWRnoa2B2AwbT5eGLxTU1wg5QSgryfkg4moU97MJ3gHDPFUtq4RCWMJC8uThVZyE6MaN5jUpC8jp2e2tM",
  "key44": "2d642xNHmEja1NugvcNQBj6uapGT8i3gxFmGgdccji1XLcTZJePmFmMxY1wTxZN8iR5reimGvZxgxFmmqzBQpQJP"
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
