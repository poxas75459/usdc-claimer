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
    "3H9MPSb2VynoEuXTAhBor6CNJ19w1NQCh7YXTbR8utLDR9eUoKL1v6qE499TmEE28TyEoGsRg1124e9neJUmoZgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24awhXywRaL75betzLYgh2m4s7MiFpUBLq7LwwAcoVW52zMRA2vwekUWWoZPkaothzmr1PpULJdFZxQHHiseSzpK",
  "key1": "3j3vqSQbPU7MoGmhjTQGvDdJAtzjkgCunWemG223yhCcEGRpXokgYpSmNP42zZ7LHUkXvpQQejR6CQfwKaR57zBW",
  "key2": "FzqYW4hXLyCQ99xEDNvBgBqpbuvD7GjYHrige1QfkVDAPQsG1L6XkipiLebeJGCKNxfe6sFnuzB3JyD3X33N1RU",
  "key3": "NTvoDcaXoaEpDqKDPAwn9gRqA1uVvT7FkDuhzYUDDU3dpdQDFPUQ7HgUn6ZsrGJMns835AzdMDftnWZpx4JtfsZ",
  "key4": "5iWJgKcTNbBmpwrtCfXsMFptP4dav35ypqSx3oyCG1Z8FVPxbosF1ooi7MywyKtgRp4UpaZgcyAbgawGyF8rcsYm",
  "key5": "JVCjDRivL7HDzk6cXkrwcECMHJJJTiGdEx9qP34TVLPSYFZHe6K9JSFkwvroEfByvYSijLH7866Veu73K5fhrHh",
  "key6": "2Hby3Ls5qFCRHc9K36pHKqVvgxQBhpgaLKoeB4rF8Yf2e7oYYUxo2eS7gYJtDnPBvoRPT9QtvsZpGgpNCRH2KoSy",
  "key7": "4AsEg6av7nxEvypiHHgB3TpUVkg1yR45dPyF2Lb6zJNdWG8emwL6C7Ftz2DM6uxApE1eu4GhkrJUcEf89LdDDhQC",
  "key8": "8E2r6WZELPiAvSAo7XxiT8A2zUjfns4egaSC4CHZF2tyMS7x8htApcWWDdjcRfp2Lq8bzgMajvGqpX75KEBWtxf",
  "key9": "3bX6EbSxgR8onQhPYqXbdFN18HQurrtLgPAe9frHuFC4kXVpxgW6qxPuHzgxPmHcgu6NX2FRHBkx6Egw1sQHL7hS",
  "key10": "3CCqwYc2RzGdJw4wS9MS4XrLwnMWu8h7RL6NsCh61pWeFF9NhuSTYYyi6qKCAd9EHgWdwTtehHjaBnpXH9UqXhen",
  "key11": "4kQrxzdUaETxaHBZNpf3qyKaG8Cz3tRkZrB2PsiAxVoBkegWckC2s3tsjwjTnD8fvj6N3u6Eu563AUsnK5yp3KS2",
  "key12": "4f8fpSBYRM1EYYARGYe8zbZyX7X5bYCtrfF1rhoLi75t6jD5gFMktKmSPUjwnRFVwAjvY8ytjs7HKRVxpvxoTfGQ",
  "key13": "44yRmFtfccdKQXdfMer6TH8xwNBiUHzZs2fU58EPCRHVxEmaXGaKynQ1QMpRacbRhUub6AAvUxRzZyCT3BPpozQH",
  "key14": "5K4pycvTxJGfqwTxX2bqxc3jSerzunSDwTDezJo5LeBp4gJZPvnDN3NnaoW7zhqgnSFhgXZaWPgKYdxo7mryF4ML",
  "key15": "B6WjKPPh1edH1Yhk6FbJYj229kww67u8HJyxMQqideWhQLUR86RALDqXyKvXMtV8Ms6i6YjhjMpUKgJpQzYLmcx",
  "key16": "xHkpEdnBWsgR1isYDNCEQsYEJaFdWcmphMWoMX6Njy8Xjo38aX1yY7ef6scXKTRHeo1w4igUr6P8cV4ofhtV12W",
  "key17": "jzSWixqEAQCwvTCFSfDwJyxP5opEXFXdM9GxEqtmktfVnc9V5zYbh3hZV2pCXA1haP4bPgFWXCv24DpW8UYtY1T",
  "key18": "4sC1z1WwqsrWSCSq3W338oQQK27Gmjw85qM1A7N6DvRUuHmAJ1W46C288c3FGH1JaGXfijYwcdKCWyWn4pjDMCSj",
  "key19": "2p5nQhNYuNn5cZN5xWkjBYkeefyqCHKC8rceAWmsQ1oqFmi3Xabbwnrf4XeKTfi2qcFk8QzE8oh4Q253U9qfsMin",
  "key20": "2av63Fu6svphbTFXcka7tDVgS44sVWyoSqRa58n3vaKCcCqSwUeXVKxFWieyMFD7BaNNZHY1rUHF3oBceM9XGZcN",
  "key21": "5Lxd3QhuCZhegut5Ur6GJiMCU7KNp8kdP3Ni2xJrnjtmNv68S3dPU8z9izq8fsJf84EnSXL2643Zn27yWNJVPseZ",
  "key22": "2revjEJiid1iPqoiNdQQ46ZR5XywuS4jKf7admSbKLh69Su6Lw6f8okVMAvV8e4Q3KyJ6FhBQfAqFdmnZ7hP3cjW",
  "key23": "3qsjzrxHk2Y7tff8SzDgTgSfTbqRn8LPj5sDyW7uUpqEwFxVtd27jxKFZ9x6heKeRqMFZX6M9aryCSahaspTxM3m",
  "key24": "4XAx96dEir9n4HcRpVQAdc79TytiRERepvvUS9R3QQYxtuQGTnS7cSzFzE9R2rW2zvfXhU443BLgW1fFfozb5N8y",
  "key25": "GzKfd36mmCrZ3qhqNszNtNn5JTZDkQncYGgf16jHEHpfuxeDxziiFnTHHNPn3RP1tqQyNBYCHvgLvMywwv84HCN",
  "key26": "41FoQVWPwTdP3AH3gTyE7gMwx4GjAy8KPjtPtZb3KjGzG62zXGDmST5FGpwatrEtNcReKu1LZDptDuHNzSd2Dnvr",
  "key27": "44Zg4vs3nAXgrjGMvRj2dWNwsMWyzY2LyFEK7fbPzZhWYTqoJFmzVVv2swYo8Ucrrc8dVLco92SMvu9coLD5UXFn",
  "key28": "5hmMxb7i8nYvhxXJyhSnVcRq93DNrzqtMe5E7Mg9BkZMYcwpMDSY9cT59w35aBD1dNtEpzRu7TkGEmAFfgkksAae",
  "key29": "42edPYeteFWC34ZctKcoanRL8pvuYgzQh3cqRBtLqGnUx3su9bewbY5LfgUB4uxfzcqcFKbgcoQjwYqgT7fuSeU6",
  "key30": "5LvHf2RWtjATCxQqFryAZq2h17sWG37M9vCSt3LDeATHoaKLdBj3xrixH75kkVdum6CeNKzUEcJrD4SZ29LRgJQ5",
  "key31": "YmmQ3Jzmn7Qdxhd6GeJn2t5w9QgukV9je1dmofU75Kw4EicRQ66CeBHugRyeRHSmVqLn5zBM2RjcXUiSWczWQcq",
  "key32": "2RBA8Ye4he83TNyCuwYbdszRWc4VLmpd3jGf2ezxPj5eyj1DQ1QiFtwWX4w1Ch2UAx4kQkzZ6RgxewvTA1Z79xTc",
  "key33": "53RcAH9u4yzxDSSg4WJu6ss2czYSDNTdgSA1iFPJR2ZB9hmHfm9dg8YzdZARtwCC2ghKPz7sYaiCBL7k77uApyVF",
  "key34": "4VPc31vrajPA4tTRbpa6CAZ8MqBBjWFoToiQwmxwmfrDfzZztebsQ2sGKFrnYgL6be7U9H3Jkj1dVANBpgPDKx26",
  "key35": "5KSnmNpGJts5JNboKmW9Mdfof9VbshX6qdFwhe5my5j2QHfgQLgVhHKvcHejrHTjuhqWfRWA9pxjrPrgvqKGaAMA",
  "key36": "2pPnKq5F7JwRAAc2DdGSL3yVSgxx4RPEARzQyVa2S1jD5XrHEKF5vGN6evGqwtt73k1WFDSfbaDpXqsPn64fGEWa",
  "key37": "5PVsHWZGdre3PCB9d7Kwawo1o9vNJH5TuereGWp6rPodJdiYL5ey72zYuYAcDpUbd4jH6Gh2QGVQH4kf3vsqrq5q",
  "key38": "5nL2vrRu3FxBN1NGzioywCCTayBUHmPT67GXTfSU8XST1HaPPsLwPFBGtdGDPW926CtYkFyomdFHs4A1gMbDzyxz",
  "key39": "5wyP7FjGXqGPUgaysh2GHpLsUPDuivSJTEDT6WaMMo6NXiU9CWSci1JtKkzruEEELkRChH3z4Bs7DmuZb3WnrDi3",
  "key40": "5x5vD1jMp9Qykz1NuTmVgaZ7UKFLafRQDJP4B1MhsA5e98WNEXVGjDjPxsWzhRiVAKbheop2AAbTfkFPTqiw4Nzc"
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
