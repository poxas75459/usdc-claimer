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
    "5uZeF2qCLYQx3rzWMKVjL6DQQ6qkkXFxfsJ23odWzLdfJLDcfzAnhzUDCZ19DCeGfucbZfs8Zx5fgkA4C7F6voSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b5En2YMQJgAqrjT7jmZ4A18edMzXHxGZPTPqhghFADKMmMP5YEkcBHy36YApJuZ9Ygd27DtdFhXL5XQjh3WELZq",
  "key1": "2mQYEJTaVPtA7A59Q2yq79gUxDU2tzPXGNo47xDEvep3GV7GpCQ97Ys2nWFF6yRM7KDcrcvqxAEFhLUUSSeedqTE",
  "key2": "4zdt6Q5QL6QZEgyTsBPJVv4TAqCDa14XWqpfW816Jny5J5pWEnivjLkKPrbmbgLZ38NnVedx1E47EHHiML8TGdyh",
  "key3": "4XS1bT7kwuh7D656M4jrzhDrWaqTBJdGj38SdT55LsgXb8f5UB2TFijzFFBN46F3c7sJAHkX9jS8xiNXoH7beVkH",
  "key4": "3UkjZfEwfNpWsEqDrwdwG6fh7MDpucXu7veKiEQc9emdfXhhYG9M1T1wXdgkX4x1qrUnT8LmsiPJcCeArRVVDp9Z",
  "key5": "3Mqd5vKHbfi948wL2mXULKc85YXwgbMg3hjgre73ziy6Uk88pe4p5ZRgHXCdfe4gZsZxUM8ybUA5tpm3qGkBR8RP",
  "key6": "4iKs7Q3vWDWBWDC3EuQUJK4nQ3BVvxvQdxWCkrjf1ws2GDqiV2m14uaiRAY7NgwGcXMbq2gUGU9SpN6KLUTQDWGc",
  "key7": "3aW4c1LfPJTfFK4eyhDYUHjbcjyKpZkDHrk7CdVRWnKmPHccp4EXU6AGwJVmB7rzuqZMqHjmfJ8FHYQsnHMCF98a",
  "key8": "4h2KjXenQ5gqtiFiDezkAZbbPxFhxFHEH8vxpGMnx3aZMug5r8mWaQ9Yzng2E6TwUzx2kieSSA7aJZdnSmhT1y2f",
  "key9": "VCXbubHtEdEZCcJ32pzQvvU62KqNz22Ci64rPbsZX29C6n9Y8QrR2Y5UBEwasarNUKXkJrb7RYGWYStMBLMGvP1",
  "key10": "5aYkKkyRUQAvpuAhN5aL7Sh6LUePGacDiF9ykrScRxJktRttUyVWWBWPPoHCPJyfoyZ4tuMeE5ArY4hsGS3C1sX2",
  "key11": "4TJmm6r7uRQipQg2tagjefrdz93YPbhouaSRiR1f4ZWK8DAorVQBJ3LevRCJXm4HVuG7RteKAgWoFjXYTbjPnnfz",
  "key12": "2BKJfM9spXaxyXK9RnrohRerXLpHhzfnF2shAhe6PkuyEkreQbeWftWrGEmHHzcLtCcjUy8Vboi7tKkXMcm1ee6q",
  "key13": "7ZRsRD93aMNcph4JV3fwWTLpigjbFJGiLThhCseTdWGsR3kEZZe8qLHoYAn4c1fUKUTkCtR8fUyoW9BNyu7LMjB",
  "key14": "4h132kwmmdj4ETbkEAhTGcntphXrMu51uDXLwgjZcyiej4aoc7gKgLZV868APGRVTx7x8VMHVR911qvCQmscVfzp",
  "key15": "4pC6q2TEnK2qXRHoMxaAd9MyDt3g9bCcRV26LCzArEK1YdsyV5pGURKLmpHWMn9iCUru34gMr9drFQums4dcJDUc",
  "key16": "kTa1rsdX6VeAmZdyu35MrWWSVKmhazKG4c4FgGcJ4KVHpqYiMZacYd4pdPYnapiAaS6neFZBK8mtBDesm4pTnEL",
  "key17": "47HuXLe6x1FHh8vgiJah2UPxtsv8A5cdU4w9UTvgTPthL3xexZtnr4a2z5UQCrckJ3PEhzH1d9wezMh2aBAy5gWh",
  "key18": "2wSbx1Lrc6Fjpt8oViDF7WQU22jxnAZd3VGh9QWUjnbJt6AhdNFCxuQ5iShPkKc2BnBrKrHLuwtjKdjD7DbNFW3m",
  "key19": "24V3EY3Poy7EAM35ihHGFmjqieqTbUMcUjJrfVYG7xbJ8Nwfc4ybkUjb3DmihbqK5SmpSvcHbPS7TkdDtSzCLPdV",
  "key20": "3yAuDARsWiWeC9ZGmd5xvK7FMNbnNUCnLeXSpHoYZFx2SvCGGrTv2hNKVvbNZuM5cLgbU8uKQ5frZk61VAfsY9Qi",
  "key21": "3KLkQZWzYFkmoVXorjk1BMjv9n2fkRQgg1C1BT4AFC7zm8h4ocaQb5ZVUeeLn41whxV3DrK3H1TSKictbHFYsCYE",
  "key22": "3uNHEtcjw2JxJ3nXqC9AF6MMAwtKxfGNNz7rPGFTptJ5nrWEGtNB817oue6CcBbifZZDKEzhTNmtTuBy7jk5FR9v",
  "key23": "3Rw1exNT7fTYCR4c91joGWfzFstyRTzWp5LjnZyFtwd51q7ZY31crwRzkJp9dc12ggCERFZufGbYDZYHktmqWPs7",
  "key24": "4NA7xrn5SospQJyDLt8eAMZvgmyEHqGsB2BUr9SPX4wsEYWCSe4xtJ9LawCKZS4VrVZVREVmg9G3VUJPnpXqDY1s",
  "key25": "24qBfQVQ9vm38DQVdS47YRrSVrt8usp692fbxHr8FsQAcQEiw6cfW4Qj3ZSpkjDnFJNau6MD5vdLXyEgytW3JKfR",
  "key26": "929jarjYH3bgLHnSAckHcwSekJuMrLoAzaufGB21qTSTH2397mYoPbVCHPwkzzyGahgQkiC4qt7hucH1TRaoBay",
  "key27": "4H58EGpWfPs8VpWVJDF78sqG5zDPRPsmLgEj9ZiyMat8ktAb8kxUP8qP3LARjDn3RCo6pJ8ytrXuMsQfUMVDHLHN",
  "key28": "4xgZciXs7wrjPe3FfUxKjM5uc4uYo7Pw9CRnTxUyZHtPUtuDwiDzEGumpJYxpXWQUnbuhaRzMGy5MTFKaAdVedqL",
  "key29": "hHmdZgLvoZMv4YyL6F6sksy3piYCkCQrrTXAftisQCEwAJpqoG6rmdL8UZrvebbz3n5mB6VLvPeZTi7PhtS4XBG",
  "key30": "34FGssbdbREPVkjQsohySd45YqRXNMkhUXCgbVGR7n6W32CjQ2DtdweZKnjXtDM4GX36mVNNpFgn1Biba69cKaNh",
  "key31": "2uRjPSMKbdvMru4fyYEt41gJxFQPxy2DxLWce5tw21s2psLveDTDz7PJSd6vZRVySJVE9GxZjkbEFtvdG6c4zfBw",
  "key32": "5BZ9RGorevKkvN1U1msxECadf1hRT7HPfdi6XxSP5ysmvXwWuhwXvvp3vvJNic1byvcWFSS8gWSrZt3dady99c5g",
  "key33": "3v2wKFXMJontavJ8UC6u51Z6aFpeyRohnxSZQoUs4RFH6B6BvRAPdG3VtdCc55Xr4TyokwSn2DgFwmGuFNJLk6gm",
  "key34": "5H9NUd85RwUv2hh2hRvAVwbd8x3ukMBVLsb2WTPMdvm3eLesn2XPa9mrAVJgh9BSFjCbCq8BkeJTuP2tfVbmfCqR",
  "key35": "3Q2RGJWcscJoD5WG8Y8F7PhTFuwTjGmKSauLWrqTU4ZECJgbMQEYArQocNtBch9DbpaB7XCgRwrgWAEQQLCTZA1d",
  "key36": "4HXKA2khL2qvGadAYggszSYjcnQndy9gBwDd6ejopprMVJAr9r6JHYU2PxWdb48VkCLmMv94nExFNZkgTAfYngQs",
  "key37": "5f8xbVtjEkyVRiVYx3WHBs6XgCTzHz9gs1ojubibNFDvC57JMqnGG6soaBDQmEtoNPUDGNnp8EfmdEUYz3Nu7wuf",
  "key38": "3QWQg9MUjCwSNDRoZoeNQtGMG17T5nLo5qQ2UuvD8tiSLw19JhJnGPzWbodwXUD19s8Laaof4ktMdjJqWQBtdX5q",
  "key39": "59DxeTULJEaNVV9LskGqXrgL7Qk2FScststC3ThtVzzaLzsfaZCqqarQMkRK7fBeu7u2ahuV78ke91vUZfQY3wkX",
  "key40": "QzmS1bNhcMwbGY7VbyTNEkPKnRo8bR27hPVYFBgoD987fYSZQwLS75ZSYJFRvXE9Zxmc8mR6ZsfHtTLFQaS62JA",
  "key41": "2mxqBBXtg4Buxe5FdVNrTD1WvGxKroHToC4TFEt8q7XMPFn5Bb4qoYDk9MuSCUYDoZW1Ha8JW4sTe5tTZ5e7oubU",
  "key42": "4JUQvqGCiwJZoTKN2NMRUAj337Yods6TneXjuNmenDuvMr1992JkVTggFTkMDKkJ6CTMg4gqfEu4NeeUQHFPjh6u",
  "key43": "2qLRZvq9kXiRxGdMkhBDZox4CyeSiRoJfXhNkSSHBAtPR1Ms36YMm4aDDYGdW3CBAv4dn3sndvqeHgN96Kth4kbk",
  "key44": "3FQccG7Nq58QXsW7qAL2z7hhQNYjrsj1BMStPk1iUACHtNHb7eySGcftoZjWXQY4suvzn5JjRvtP4Z5u5jb9QoEw",
  "key45": "3EPSGv1Ujv6rZ1jHHFD8FDYjU2UtCQqhZfNeme5rmSaeAcDtWosnZS4S5ADthHK9ikUxzZgyx1aLLxgWebBHj57K",
  "key46": "63ipMSh8qYMNdbZpZ2NmGzKocyq7zX7kVqvVNsQWqZN2nu2CaUR3auDkFraKyS2Ssi2zZmWb481ktvwKgrxwrxnJ",
  "key47": "e9xkH9yBbTPzEAVZVgGV8BBq8zT6WzoJP1RkKq1EcNaFuzZqGq193WaV98X2UEcM3UJU657qYDrzc7QxS6EsYVY"
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
