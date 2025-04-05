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
    "5MKMyWYXRyuwc5yfvgdGrZotEcnZCXsrJ3qt2XKTiPX2RRDDqQQwGasDfz8St8mTcKsbfvQG4jyqPm4w6krcEYVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xzcvs6foW5ByexFfffBkHQ8vzBVjPfDF2uWd1e1tCtQYqreRNgDpCPYuJCe6z3BiptZ4UmqDVWA1YFYnzvX3tHy",
  "key1": "5DgV1PV1t2UVRGfAPYsUJy4eBzCNhaqFZDsN2MgtHudT9EHm8Bbjz7sBLRG9HBH89maKguiEwNKjF1Uc6rN67FK9",
  "key2": "549e7eFc1VMNWTtEnaJojk5XKbEjrUfYw3pbjewzSG7gvjUPn1Ma8JpA7g1LLWwzFvCZEeFHA2jExK9dY97jE6Qj",
  "key3": "2tTs9NAERnoQV4sJMJtorpTFZ9J8wJcPUqJAyy542u7VuKUSSXg1Tr5aYwADPz9mZyUyUae7pzpgZtvxxnSrJiuS",
  "key4": "4Qpmj62h8AK21NKC49bxZr4eTmh9LjGdZFrH1Gox1UxPmJKL3imB1ArrvY2oxrvnXrg2xxmbu4RZPnou1zgzqiKD",
  "key5": "ojUkRfBpA6SW9NRBYguBzZ9XGw7YvGdY2atVp1r5hy7XhNz2GfixvsFnHyoj6asZ3ia2hTXHvypcpGMYp6UcZGq",
  "key6": "3dUgiq9YhyFJYcZT6Z4hooMc5ZKehvH8kyS6hKz7S5kGRwNpFte9x5kSg6e87KJuApKjcpy51dgpL4Wdg2wSnAdc",
  "key7": "4dKevruNi1FMX1MRB85Pocg16qkyBYuJYqXhcKRcQehGcMK36FacS1Y9vD2e7b1G9TpqtC3iV5mcvhdvDGrdzPkD",
  "key8": "4HeyQx45Fzo6zMauQPtfa3MFVxmhu6ujE7JZon9vaELY7nr4SV3ANEi2G3kEyTgX7W9n6cG8WCQTiJxZwKjDp2QD",
  "key9": "2qkXvvxgDxRRHm3Eq4VQ52za4bFhxSyZ8GhVMAbpxufKVVEy6Mn3qG4CsvH68Mt9ESMVzthtfcfdcTFZknAaKyEq",
  "key10": "4oP8CtBZMxFuGZMnuDNgQYmSHKt5Psoefv6iHSzMhK8xu6UyWrxAzNyYLz9MD51GJs23ei4Y6Pzy1fzjHbh6oy6D",
  "key11": "3qrxgDb9JZMNK316eTPiNpz6B6TQD9PZ6NLGbnrn2q6C35rPbwFeEi1SGb5b6NBrt4UKRyKUc1ykm17m6YDM5PRQ",
  "key12": "5gvNZ1uEQWAHnCzZTZG75NnkhsbhEgT3kijsXohwMZ2rb8pyDL4Z2hEfLcZbiLzpmBbEJ2JBbUzDJjYX85QCzvc2",
  "key13": "3eoLiLiK8FWGDWZ38bv9CA6jrRRmVFtiMVAkTYuTeCwacfQQuKCCuFbXUyYRxr24bHoYVcQwFoPLFzLg8WHXCCq1",
  "key14": "2vTTYugQ3dVj3tbiXrCNGGoEw6bvnh6wFxJs6SB2nGpwGgFSEjLmM9yuoWDmospC5JZ8cnASrwXbK3LUvU62B4zs",
  "key15": "kzWYmCQC9xYcGcQTPRApC4UabAoNjGrxoVzNHkoByj5G51563mhAfwBNqAub2gdutoVNwtVqR5MwbUdtmNBDhcG",
  "key16": "33axShN1Xzk2BXA9DjUF32TTicmtZgd1AyVo95FFBY71F5KNN4xUf9nwpBhATVF1w92s1oiQXs8K2P5NaG9yDNkX",
  "key17": "2dec9bKXhtDXHfudBHRMzBZ6r1ogu43FDBhWRnD9BMoFsiFTzgKQsmKTNLfsyRvg5o89Tc2FX5RvZsENuT3GRcCi",
  "key18": "2e1EUUXfyyb2yj8u7qs6YYMG9ZX4EM3DNM8p9J84pVtJW6dwtd937ucxqWf3Di6n8tdLvMRbkPcdpYoHDcHRG3K4",
  "key19": "2W6Y9D3xCYN3DTw5Dz2m1XYfZUTFRC9ASynWv89LXV4K2DT6PiroVfsJiHcCngz4FL6jLgToSBgHDsbm7DPDS1iy",
  "key20": "2YmqyVUMb5n46Hf5rrCvJvhZnTSMMuUCkSErXxRAgvQ433Jp6poAHmBVjCBsMQzT99w9EhpiKWWH1ypR5JB3uNz3",
  "key21": "4mKWPxoJAdBsXgSSZDwpf1HnbsQe3mBvLBDrzsNKgPoqvGz2ZmEiy8oEqKYTmws3VrFU2BAaYb8gWRKsCbFx494d",
  "key22": "wacAmG3fEpd5AKfrcrZY1fcX9MNdWnb9fTw8DFzH7SmkLmniWH4Lz4wCNWFBnCL25X5sfbFoTCjuTbEr2MmjSB6",
  "key23": "4hddeq8nAfn6awhJbDHBxBQHSaib4JPReCpds3MGD5BgrWRyWbJLtU4SfLVdc2XWWTSZ1CKrhYWhb5ZpfMUaUAt1",
  "key24": "5TLdbjtFQjFSLJf1mTaZKqCBqnpsGw1Xgx4M7dxYD2ZFKhNqVccZnRWUiV8iJ1McFtyJhTr5YiAP7WL4dv5s1Y2A",
  "key25": "5ZtrMBbM2VGqiFDYbNatfCWGzCfbRLoSazASxgdh5C1eSHdkZNrKJYUJhNSc4ymuCGVs33NXfzjtE85SNuvyru3T",
  "key26": "4pnwrMNyyqjkze22vmwt7Z3UtDFnMCUMgCgrcyMUnq1ALSMSE8dESZKttppGKmB6GmXdh2XQoyoDwnfsfay3DrPN",
  "key27": "3c4xNL9otUfoqAeBqPBUv5XQvNs5gSn9hfyGbza1kKPKRJ3FJEXV6dBQoasRkfC8FjA9u5Fgbfhi8tuwWQ5XiqeQ",
  "key28": "3cZPg25G9TSDbY1Q7x57wyMDX7HDQjTHcC6S5ee9NqhpWPSsUgJpr3JnJBLkRcr3HybZbpkdyogrV2b4q1Pnpg8Z",
  "key29": "3eUvADhopyM4zGutDsH4KRtiXAwztvfqPYiLU7hrZnD64PexFh3usQLnC4LksSVD8CJsAmsneJjQqFRMiLWdrLEh",
  "key30": "2SzzPhaBw3JpGmjm92989mZVHCr1fsqu79a8VrvdbRnrYDj29vEwX2K27vaoL6UzaQJYDZWT47dp8rKsfWrNt2yB",
  "key31": "2nHhuLCPWBSfzPsevY9x8CQty6LxrSMDJyhexQbSCnNmtXiJRYC8Wzqp3Lp1GQXV8ubTmBswQn4g89qXXZh7gtsQ",
  "key32": "55QpYomjNM6AB6em3Vui8wkVauDUftexpC3P45MfderLqFFo8FLNZkS22u4tNREf9B1xBNq4MGyarCemd1YBtfE7"
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
