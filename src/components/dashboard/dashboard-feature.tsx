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
    "3VF8wyE56UZcbxf7S2QX6P4M9FyNKLC7dpi7acq6HNsbepjwHyUsSsGtDBHXV4ntgasg8ks9Si2hoeDCr5KAA2iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fLKXN6GwrR7p9n8hFKX88UvJb76oDR2oksFSGRLLU3GFWCKvT4kfbfxrstRmUpHpyHn8uj3nwaBBKQme8B61yiy",
  "key1": "2n8VtGurFCE65E28XJoskMpFZSX2BRLiQPRaAsuynL3hKNU3nnpCP3QrA7gUxh6tZE5Kw9ooxSmzfyo7Ay8VeC3V",
  "key2": "4tjNSGMWByq7H4JqL3Hz62xisLstLrbJoshqa67G8zVWTKYvemXD3N1E3BvBHHQ7weG8uo786H3auksZZDCoBKeV",
  "key3": "5Fm4MJ8RXPC2K1RzdjzsFNNsHYUnpovxBjrx5g6qviLXe6o5R41zb2krwijY69F1NNHuDvSnchfFbzaHaZTdh51f",
  "key4": "3wCyf5GV2hHMZNwrNgzAh29qkvDKzgxLMin5AV8wjvdCXow1QVnsNcZ6A7RZTNSCJcAQStSz57ajJ6vDT4zpWYC1",
  "key5": "4cSVdjkvH7ucuLxFAi2co5qfTjWPBKjZxWzjycjvs42HhzZ28amUW6xdeWQR2QnhJe9GpXfXFhjpm9TgLiNjFUrA",
  "key6": "49KA22k57mdXDafmRuNuVSUTpgWFs1eUfHwo8b24twotkDKCGQvTWQoULd5HuCurKMww4hPbTnJKaaDe9vTJHjEg",
  "key7": "4WJuUSo34Z2uL4mirtRDNMiZexQDXxhXaRjk8qVg9g1KBkJ4PgR4VhGzgzzFnBKz5rQ3BhVMHRLFmjnJsxfxWxn9",
  "key8": "2E5MSgT3AMjizLH7GfpiSCdSHWDA8g4a4tT7WwmTLnmVYxeQrzzZsBH8zzLoEHnuEyua3kPD4HyRzQQFx71AzGWV",
  "key9": "46ahfmMmjkCkeY8fSjzmCUnHDUJCgn2t1XYYsNEV4LiSvp4TRTk9Q2yY1EpLscMBooNLsEvcqD3oT11TA7Py1KRr",
  "key10": "fvhsUvxJaPnXXf2y23BP1uiZs2ShqqXfBbVV8RYrr7dDkXMJHNccVedwtVJLzEvZ9Fjjv1HcHxJnh9BCEv65s3n",
  "key11": "Y1JLusWkWPQdFsejxgJ8tAoSvpQeAuDxP3P4SLHj3xNEeLKeDDKmN8G7RmAGWZn1x5Ri4KdgpsoysgkCZxWhXP4",
  "key12": "5qtB56u6xHpJus6n3FtkHwXcGn9iwxHP5qJA4JhZLqLnX9uKMmUJGG6t4sKFFHLKtJpQCfzfs3XfbDgUkbU57cjF",
  "key13": "8ovLCtQrKkaeVUU5vJfAyBK4Unj8RZWjqkdfqmL2R6LL4RYrUiPUx2i5b1epQ2KvPCEiWJhoH4XS77a7pJ5qUhc",
  "key14": "342H342LWzZJMH8fPM2E2QfS3DXCPSxPG2GKx4zu7MWQa1WA8uD8Vry5y4QPBZwSQgVHpyqsXYQ5Y7Xo7iip5S8",
  "key15": "4z7vJBs9MjTBUpbG2LWRCXp6vKnRK1rvSyFSiMxxH4v79cSmPiZuHHW9HPn5bhMZtCcZDGjnz21zLds9mrjtGVfQ",
  "key16": "2QxUE6wehKA3a2ziQzM6ad28qnk1wJ8DihRc2fkSPSAQ1V8P88ybDZeE4YiVPnMMMEBszb5nf7TJr45jgEVNj4TQ",
  "key17": "ZqDCL2W3MxiW1gay1tqYz1CjiM8pRmzwMBneeGXKdHR3yy3vUGD35yNtoig5VkSSen6LKTek57B6V42YL4H77cy",
  "key18": "59GCv6BixtBb6Rh53nRJNYjjCcmbLV4zxjcVvfFEwGAz16mkHjB4dLYbS1SajYb6RbRG4bfENk2p1k5a2Bz6sh2W",
  "key19": "3y3yzPcb1bNe6nrkmvyGtcBgnqiRhax4EWCVqnddHek41vLUupzhpxpF8iBatLDauMkyKyoVFZKn4V8GBVHg8Axb",
  "key20": "33mAghDowQdjL75aPQXLDm4PWnHkNx8rxhPBvEf6ZiBPpyuabPjZCrWwe5717V6A6nxaSCWr8UokriCvtLtJysVf",
  "key21": "emE7Juf8yjgH2qnPJUtrZtgfGbddJAQTm5hPaL2Z7oUQm81Pf1DzsYrsg3fS2MBDxr323Wcz2NFD3AxaqubgQxP",
  "key22": "2NDUhUBprH2HCanPjKdDsGaTjHHeV8Dp72BH4BvaRywyYFgWQGzurZfHk13qCd2b38W81XZAhM8hnRz9kz8HwvzC",
  "key23": "35uza5JafSNPXPH9fRP3ACaZmqL1yyippKfYvjT2fD1uwWgdsZcmRumY4QbSqQbESXpSbxi7WWh3hAAVN9aCV7PT",
  "key24": "53bk8WbTViR1wUhTM2RV3HwyCiqoP7BPfCgczTwxSeZ2uPwx5sDgaPc26oeyvuci8aauwFQvt2NNMyM3WJMc1RKo",
  "key25": "4vXWRqfCFSiTNuQDBcijzcrD162nua2Es2Tz9pdE4KJkVGNfa4r7GbxGoe468HKoAseHmvj83FMzX7t2okXM2D2H",
  "key26": "pBi6mBq4RqfCfrwJpXvts9JjWe7eRJoUDQh6pkWyxEFPnd9WrsUSAJPfBXYrtqFPDJ9EeW3yp77Wjm1AR7LW4J6",
  "key27": "5DSiyAZyMX6QdPBw8EV2qU1WQdxTmwYJzGRU3B3unwuTHhc5nTQ7X4LtvqsdrdAfispK2QSfieWoQqwTxoLb8q92",
  "key28": "5CD8A61qzH7KWmbcMempwLTpnbMENnQBw1udxjhDuiyHYJkKcPcX2rejwy6Tzgo6tMtouS71MWbUpMiYwLrCN3uZ",
  "key29": "5Z8XKGtaA3fNqUwsBwTf8bxeoHZBZRwGvzR1VmMAX2b3ZPV7riB2j7hquuZdnuuTwtKXLHmAeohaFeeeiEp2PxU8",
  "key30": "4dcpUzDkGZy5QKTPzEGhvGs8e3mPgdGFjk7FZXTVfjXpC199JreJHE4rjk3xje92xwcdPcqAMn7BJ31kPeEiTdh5",
  "key31": "5wGSMZQxRUxrCzMb6ypcqJ3Sv7Mz3AzKsHDzye9B1ERgu2pCqjrpRFXA3sksbZqBq4QT5TL9xnuw1iSzqfadAhF9",
  "key32": "AH2pGUhqBPWLfUEg3PZmdmtiakrcDLFk8QDnNrWq3ZomyaBMVByUSuJ2WE6soKxgJiTwn1Ub9v2psxTpCQfznh5"
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
