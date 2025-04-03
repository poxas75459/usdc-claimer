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
    "4c7J543dQUinzM4b62KgKhSaDwaSpDUQ2FriQdXxavvmvUrjZPdZL1auB8htP3neDzxu4k4K3H89U8mnHaLpq2ih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TQ93EALc1xdav9no3FTHYr1nphKx3ypv8TPvJ3iARYc4tos9x3iU2ja9TKmLNQVdj2zznHuE3Ys3bxaeLi1Rr4t",
  "key1": "ZPvBB1K9VSY4SNW353mL5HrYqmXxkBUpH6K24Tf4bDXotBYUJXjgXiUZUkXzBoc9ymzJJ6bA373Whd6QpcAd3HT",
  "key2": "4q2UXCLJ7Eqs2eCkiZ5ci6qk7BjtkvjoMwZo3QBv7cPe9DeZE72mE4KFTJHcTBEuaEEbgx7aTqMWe1UoHMd4mKSn",
  "key3": "5zVHc5jQn5JiWeLfd8sJcDbHqNXeiLd9vhuQ72UPNCBjawkKyM5bz49dnfV5cFjz2BE4FHX6n5cWNRbttrbUhMTR",
  "key4": "65eTSiBP3ci6319hSV6axNo1J9eAinX69C1Vq84b7XDrgFS41Re16spTnqZEjMZxtfQBKYmcdKJrSEmgYrotRnrA",
  "key5": "3Ne9x4P3j5thixwgQ7JpPmqxjF5SyqqTuExNMf938afe1D6bGsS7n4LdZt2GxW4A3AMJW7c4hTbywqLGkb3qsnWV",
  "key6": "4kMUbWauP8jUQg989j7giQcr2S6sYfqXuzuS8Gu3Kx5zaQE518JRjh3TbSnXCerk4GkAsmk6SpVykWUXk4XdX5Z",
  "key7": "54iL5GzZnNjuuRTJLfnPsYVWKJ5ULj2YWa5jNSQqPXAHbR4d4G4GuPa7iNGYwpozMbnoUsyUBBqEe2psPNbXvDkQ",
  "key8": "59TqFWemFBgw1Qw7Zgwwc41SA9juV8PS2TSCuJadXXbsUhbMFKTNtoQgSTHEY9xyBrbv4mMFXWmQoPEUBqVauS3L",
  "key9": "3E62fe8d5RBUm5qt5VVv3r55QyRbVCgyafpYUQhpV2GCpebfYpEDoWtkXUF3PpcJo17jD4MtUQvVgXMs4iwDXY8z",
  "key10": "2XAVsn384caBXUnMudz8eE2kiGHWKsPLFU8p1aeDoyi8ewH3BjYa7j2aLBkUwS6Jtfkw6nC259qWkzoWaFKa83SY",
  "key11": "3oh9PvYiXi8D6bPWn7y1GzBtLWJo8oRcn9EAJYsGgFKCmnoFzxedH6bbx3TuBDibLjMYYTwQPN5Y5oeVXhGVD8bM",
  "key12": "5ybDXjguwP9sH7sH66eDXyXScKdmRynau5TvXxQuX3g8hRnMCFkWFuNiFq8pFBhVi8E45jrpYk3fapp81zeAqNq2",
  "key13": "4FQzuWozmkPtmNw5kUTXLovykfnjJknrvwL2FbT289CK6pjyjnqUaPbfkr2VcMdMxZpoFYtcZtYov8fdeC5vgPrB",
  "key14": "2zuR1oZLNVrzQkQpZYc6hAA7EDRhz3kT7cMrRZav4XAN8vb2SWTHeRvq3FPMEPG4bQZYNf5FgWQJnthRLgE7VrGx",
  "key15": "5MVq2JRhTfutURbRQjtFvGLMTFfwuwwephWzBNPMgHzA5v58C2NHzj7nasLMgWudtZiCku6tvjq4HWm6kh8hbZm2",
  "key16": "RSNckFmKFuxTcNnmmm6VWKiwrjwpAyWvGwZRxyhznha57FCP8eG1zcJT6rDfknkFktpx6eB96jwQ5mQvjYfCxtp",
  "key17": "ED2cDg61PWi8xddy9i21ooWJwDkz3CgBP7jaJXDRUuyiqyp36wccuDrWBA2x1xCRyZKfEd4wmqUCqU9TEbNecsT",
  "key18": "5Ab1RHTB37xibidvgskfeeXm5MouE3pNwceN7LU41cLkpDfLGZwWS15TraCnUgCnEN64ZSpE8ZQrRrBGwVNX4b3E",
  "key19": "3QJXKYRtQbp9jaaSLwCLufxqyqeanbAZY2h8BskT5xrGG6BEUtseYB1WshhvQV76CcaYjezjybaDzo1suv3WeDVz",
  "key20": "5AC3qFbKXkmxvPwrjGcgeSoNPfcgJkVg6e8dy1HgvgTWowLifznQXxkXDUPnGchyuV6ctwD9Vjrt45LwEKVaD4mF",
  "key21": "3AfAsdcCtzjbEgCQFuHpa4URbVdoSbXTf4t8eMVHJEm8CGUm8rwUSMoiu5RVRhRXjtAABCvy3nR512gVPBCbwGgw",
  "key22": "3KxKfBc2Cm3mLpaNDjh9Yab8wwezSxVUvK2vxdGvHkV64VykK2w2wXjN9LbP2M1oKaZnooSzdfdnTnj8Po7r5wBR",
  "key23": "5eBSSa59Kde1TV7b3yJTvC9QQmwjL4ePJdD62dRG46eWJaQxRXHxM25iyQixbdJsruGnpSFXWzFRzaAuYptcQNg8",
  "key24": "3xiHUS3xRNAfN24yuvpnda3kJCzEvyuir1Ktz7rWeCjufJpZJYpBjkbHR998VEaY2FrCsonh6WWjvTyRyuFfzAQT",
  "key25": "4N8447dNJ2idoRanBACAGNp5K9pVSwYTj6vabdN9CCs744irQs1LVPRogARrjLnmZSQJzSJH2HmLnmKAw5ihhiRW",
  "key26": "5prDvXVNUTorYCKyP2wt9QuF5tnBo6t6FS5PaG5rZPXYycRzvQweqr5tj7qm6VBj4A9CcVwzkeWo4dAHm4tdUUVU",
  "key27": "tcrZZ5PaZqCd4AhGBywwjQe8DzEJKTxhmfSJoGkrf92EXtGcWzDVA8gQMYYbUCiwuPWTx2Re7458B85X8b1Fuqw",
  "key28": "jNYWWLm8vLsSvozhJNK6AEzTfs48ZhXonUCAA7CMZTqb5Ld2Q39kxryrNFqYuaby87DC3eg5T9WTTsPT4qBwHvo",
  "key29": "2Ywgdvv29aHmSYpAj4d7GG7EntFbSsh3XE6cMa83Jwu6C76vbZrRYB9wzhaXUsNt2CcnSYHYRhQaJFrSX3moiMFq",
  "key30": "2cmJ4xn6ZQFoRFHgomnDxWXSBTnDitscfzRHXc9fdDwtUzfFSZC2Q8TsCtTh9drJ6GcHbAnnXrJA7jgHhu2ETFS2",
  "key31": "5mbAX7SPv9F2vE5e8e5qyMm3gkYiQsQYsboN7jDDFZgA7eiPD1KhWfeAPDk3e6VpAEdgTuN1TnK6Rz2aS8RvD4wD",
  "key32": "2WVxGd5ZRDuo5UutVjfZxbEbHkZVfQYxS4PhEoiTpqK3CzqH3w33M9K5oDqgC1z8sQ4GDpJmxd4aLYRQaGYLJkcb",
  "key33": "3Yff7obhrcXu2Ma1sqsyZefxZXeDnFUz1J5JQjtXEdBVPzeBCATSoxMbDVDWKu6wYe9W9XnqdNeo8M5RP53V8nvz",
  "key34": "3ETrhMVsrqqSxnCadaXKTM2h3t2YUcRfyTocrn3ksvnTqyp2pb73paiFAC6inRaHZgMjtc5nuX28xZV5QkLXPScY",
  "key35": "51Kt37AdKxzHUaoyjD8SudefjhZQAECCFhwwJdaQCFTC6LEGZzX5tc4hQdbKWhKYpFcCqABz37x65n44DNZRJeLv",
  "key36": "4DF8A4Bm1kMFUfhAwad3oMCXK8dRRKxDgiiTpN9nUW6REvoEGnRjMYRe9MrPXiZAbtqGphh196MHLDHX1sdZPwVM",
  "key37": "2JXfcf4r2xkbGg4y2QD7zWdJJwRqrZ4GxycBUd5Cn4GcarYKUwSPRkm1bZVHjqfHWQDCwLpxXwBT3dQCsi8BkMGt",
  "key38": "PYb5hZczBkmbYLncNveBAVPMJ3iusrkCuNZqwu7TefimWKoUasWsfpahkKpVfYBXRF2GoU68ibjtoXa8btS6sAy",
  "key39": "65hs41DWyDjvji6xBjbc6XaZYnw8zHHdm1EYHTkCz74qt4eYjK4hdtk4rXm5Viwr5LTNNqXheK8jfrT2scTS8KFs",
  "key40": "wmTESGfYUxJ45cJrYfrC4ZK23272tAQfJMA3jxJmhLc7odTEuWbbPjH7JS819bX62jqubQTLB5eUSSvYte39Vau",
  "key41": "3XiJSVqKFP9hR7Jb5gaHtdcHy5u6nsWJLdBr9oRRv4FZ6ozmGVQiZCaeZdmxrXNwApNJetuLQrL8eyt7vdW1uyg9",
  "key42": "43rbPBiJoqpJHiiZmm8TDPYZrZG8dU2hh1iBp5p7op38f4HrsPSiCvDJcgiTBkSVB6JN9twpEq9FyRK5uSRQETXF"
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
