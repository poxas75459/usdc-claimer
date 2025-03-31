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
    "J39H2wLKmgTDfkfdkjT45eDc2zWhFuRYxeLo1eVsGUmZAEiruHu4mYcXdGYTgvGwyvCWBcjFn9qhd4jP55VmpdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAd9FWxW8zWMi27KqUGssRuQDGjowRNnyyD6hUjS25qYdvMXWyFhG4P5JyKDXDNkJnZJmLM4YWiEQTrD4tR6Fgj",
  "key1": "4fwXo9xo1uJYJcukMGdV3CRxodweihi1oU3JVRQR2hDkZgUTQACvma5NW4BfJJCPR8Vf36cUZnnqAwwHxFgw7W3s",
  "key2": "38v7AqEbUkCGyv1inwCL54WGe5KfUYnpxCQ7dKA2Wb9JJh5NSZAAKzSeuPZpWAyUwBuxoCF7Wv88wGVuaZ8zDtEt",
  "key3": "3iAA4PAgABjKhG6tY49qwaK2FmdTLgFKnrqvHsX1FhpUzmC8mRJqzkxvVYNmNBkrGd2RgPHAUhawuUSKHiyVQXPe",
  "key4": "jGzRZsvmRMr7J7h6nGT72Y3kNHT3nBUoN4XYvyVB5py2Py2YqLYGZ47N1rAT8GJKUaecVmcqbzjjvTU1cri1cKk",
  "key5": "D42nkDC2pQXf4YK96BiP3LdMNYacRUCrr1sWXoDemukwJJCiQt2P3Fs32qnVbqkPVLFD4YBbMDCUTVjuVPibJ9c",
  "key6": "64qJFejmRh7e3kPhZ9bpFCj8uJ1S66JiTAEdYW3dtzCQzdThdLsHxeN16WstWNxywPR2sKhjJfdckSfrW426cSey",
  "key7": "3nNbm8jPbjF9u1fSLg3ndL7iW59jQ9ePnjPWm4tAo3vG2Nu5XWuRBSbScWq7j1UwcEkKHYK7P4PbMGu7Pv2FLKAU",
  "key8": "3pEaNRAYCGmt3YPDeLzcH8ivgGEC2xNcXBvCvaTYrS2GdxbA4R42GJZcFUN8CVmio2EH8ACe6vJ3GmnuSa3zr7Hc",
  "key9": "3cn3xw914McgrzUw1ktGz9msVRqZWdvJqvzG3guq3w2brhrQ5P9ptx6E19PJvGnwFjCzCzPXFJeqG1o24ap9FuAA",
  "key10": "2kGR4Y2mSQkwMWK3wW7pEMpXKK4fKrUDCxExpYYViRxCWWz8PjneSjWdekXxqqPJrwE5rv6DxYGj53fuaCR17uMg",
  "key11": "5bLfozgjHWVhn97FF2TvYyYt6Z5ERXheocovvrCqqmAxjvPo2LZmHjc5jDi53XFHLzZ1Rw1NMnZ1LTQYs8CDADi7",
  "key12": "4Fcy1SCUocAcWyrcvhFyLpohmoGgG6Tpjgd1hzrE7wBvHEc3wTGvidFeHLXGTaTeQJQbqyBhXHeQAzdrkoy1Tjjm",
  "key13": "2udLoXZ5fev2eePPjTRQdrqzGVTYRLRic9TWvQgzKjxHixqkB9mJqHYVrJKBJ3915BpBn682yECGBXZQLEu343Qs",
  "key14": "32YiWn35kXQxZHCSVmkuqEmP7swjora7jkH8nRnKAoMpx86BPZNX3B2xVaMt3ft4ud5N8qiTTVqfKRwSBeic3Mxz",
  "key15": "4oA9k2t3wi5KhFKeDh4Mzv9iwbpJ5qGZMBwB3KSGvH2jYMJ3zQAS2MryUx5TJfiLGs1RjHRDGVQXNHYKKzq5Vk3d",
  "key16": "SfEhHcPura2ztecJTsSUUh3gB7qFzDTuUDa7kGAYk73GeUoFQ9rvvUVVZQDS9dz857Nf9TtBtLtSNzBGYxbhjcZ",
  "key17": "2AQybHeYMJydznBpsxygBddNZFy9eqvkEpSnHBRJRK2skj6Do8oD8Q2zdDxu4ciEjTAZaiXxa9UEEQknBijW6uoY",
  "key18": "5HZ6LwcbKh86E6Bc8jW16vUW3Ner7GBwn599AbeCu29v32kZLWZsEYKowH3kKVEGG6BheNrNQMEXRp59fTWGf57E",
  "key19": "4fAN52cjZSus1UKCshoibCeHWWBPJPxtzf6KVxQpJhDEZ9W8vYScpJjhmDnoWyPyKzcq1nqqRt4otRbeworAM969",
  "key20": "4vgXJAyb9QP4WTnXsv7g71CpmL9Mm4hevwWDQTf96EB8Hnyd78WbCdUpEDSFsbPrpfwpRTVgT5EWvU12UL7eYn8w",
  "key21": "2p6M7XMtcuHoKrttPVgfwRcBgT2iH4Pf5rWikymaWi4d7Gciisck3RpiZhXVXZij6mjnVNFsPD3Gj9drHN3WV26F",
  "key22": "33VbYCqVuUD7RFpd86UGorRbonxYuX9GpSJLg6JoM2BAo1GBywQjEbSbGgZit8x1fyk4fiDQ5uDmQJXtKeXoHQpm",
  "key23": "2zoYtkyyu5uHhaYn8Y23TENgGsVLauw434M7NZNrMwcs2iAm85zhs55tzywbmsAC3zwHAR3X6GTpRK8cUKragprY",
  "key24": "2q1tt7TmgqtaYmKxysUxU9X9GPCbq3fBwbTZ8EfmPkzQ6eH9LaafbB9KbW8sQJDxJLKWuVRQMcsPGizypzqs8zbc",
  "key25": "3DZ1qiWXGSvjKCgAQQCF24wz4dwfviFL8xDqxU2XfnoeQuHZ8FU9wgJvt5M7XoWJEHYZw68FY9sUMQ8eC41DLth1",
  "key26": "299UXcSL1pCr85BW4aoJhkcJj2DUCnW934LMmRWhH7SuER1RXT1gd83rww1xwg6i7L7Qz4bcJQZWSx6jgVY5bmBS",
  "key27": "3iB1wKvevKmPs6YMKuBRhyLv6FfQEFo2hL63a4kVNExj4Bk2Z2SpcK6d3QzyJSyecaeCwN95jgsBKDtY6bjXAcn2",
  "key28": "5VXYNRu2FjWVz6CShEiToVuhUpn7MRePmtgb6JbqcSqgJoX5eH3BJN3KfCvM1ZhFYjgidAmZ14jzarS51qAhB3zT",
  "key29": "2CBdgxAJB6zde4Ld836t8UWQVpenPSYLp71ZqTseuZHSHNHVcTYb3EgYnvLfK9AHXDxCQ1wMawW9yZuvL9DNELof",
  "key30": "5pTHEey8asGfVBuMi6FC9j5LZRfwbKTU1mFCr4KQr6FmuBqevT9ts3TJcqiuqS8uEAFdQ2B97hLY7btS7stxHyBk",
  "key31": "5kfqUE4vTx5btYPVJVd2GkV4RD2DqyWCjCJge5z5mwvhdKw6dbCTVJw2RXUEyP8SCyPHeFe2V5AGAsAuft2GdMRQ",
  "key32": "4ovfB4JBrFBoCbEJved1u2sfDMQqJUHYzk3tVUrTgZpMcQgAcApuKGVFiRHV3zzFJpKaHaNpe3PQG6SABwggnz2m",
  "key33": "5wi75PXcUR79HU6ts5VGHiHtpnRJqQTJshFDpmjeC68nRvDEvhCsn1qRbgvmzfj6gVffvn8DTiUVaaKqmPPCAsPC",
  "key34": "5o9dPUgFRjfnUxYht9tVFuwY2VZg8atK68WivTz6icCR3HmrsVta8ymKtvRmCg4m4UsaU32gsz7XiqyZKmnXKJ37",
  "key35": "4r1hwBfSKpaU82cwq5WJZUKnzxCbvqDB845Wq8PXHkNrg49QbhPQfvqN8WcdadgRGmf3yfkEfoKWz5jaFCg8S8ug",
  "key36": "3mqPYAMzgWHPp8HuFXieRDpzJJ54kio1Nfb6nEUD3DrLFrDwW7Ae2gKEjv2Rj6kBtpbSrriT3dnKd5NeTmhZpyhL",
  "key37": "4mEKNDfUHXoqaEwSmxXE3ZyXw8jqvmo3e83BHmYnjk5iyzA4D5MLRd9PSnFza414KPVvWH7792ykW5dk5MeCTbm7",
  "key38": "4wkLqZuSNAmLJArk6yU1pBAEZej2kJHLDqdMZnGWny7gbeLUXZe8TEJsvCiduuWwKLfDbBubX65N7x4Ch1DJvgWJ",
  "key39": "4kT1KUdX9Kx2K4mSSdNYuM89t63p1qJxf4FbPj2AJZwF75xnyebvarGhPaBfMwf4pXFtZhFZuRzEUTRvKQTETreU"
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
