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
    "5tVRis6CQkgdkQCHu2kJ6KTmYsXbuBkmsLKf2aLTH2WyW2AKYxavDoVGy2W9prUigrmm2VGJ3YzuPFSBbANYNQYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXXSDzCp98zNciUV424A5VB7HdSAiiz7gft65Phyob7vZEdq2JkuugjthzAYMu8RQ2SVty1CHyMbp2cfxMCbDgU",
  "key1": "QDNFzYVNps8PvMoqQTyn4jnyNMxRd5ZZK87UKKwEvqmsjEFDdD9s6JzL77FyEZ7vZvEWURtSQGfkmTYhLAwj3fq",
  "key2": "3AuckDa3HqAhutgKQ1tbqu5SdgW8BkAZgFjtYV2iXrdQjunypy5aMdHMyM9MAKLDezWpddwXd94ZCCxbzVxZdTKR",
  "key3": "2msq3YmH5X7WTe5imCJMQK1Wr5w6vJyoSZinDP9v4sc1rxmT57jdDxGz3iBFv19Lgi1TcapLCQt7QCVevB9G7Xe2",
  "key4": "2Kpya7kUu8XUGANVDnJzqmBwio9bnJpW9nm4CAzZe5vy8gSGiyeoMuNAqXv3ShcH8qUWMaxUGstUDtFdXn88nvhs",
  "key5": "3yvLVYk2bekwhRZPHom9x9ktJSdnpFKV9hGFJUYfX5hGizWJFRjUKv1SgqgfuuGGYikvdNUPDKuqZfbob2tWumG3",
  "key6": "31vrD1EDkm2kjJ6bupgurbXtgDiJrfMogAU3fDscSwWb4oe1RrFMQRQxqAQHAgan9rPTEo6NJZv4WKV1nPEzxnRV",
  "key7": "4hkrZwpbmqia8tRdtBkCVksBMQ1VrFYNZBoohHgqVwMLwnSSPfDETDPUjPt5QFd2hSTVSedxa7xbkGKmitaZxQvk",
  "key8": "Rxjo87ZccaWtdSbr3EaKnnHyXcbiajFsihCi2ynvVC6NHQYaxuwCn71Au3bND1z5U6pnXwZDWcYud19GUHWcedp",
  "key9": "5G3CD6jNwqvDNuYXKRBdD8KAQgDHruMVUCQFt5J5G3Zjj7BSu3KmaiekRUybP5qQYSdR27BFdnEbLFPDY82zoCYF",
  "key10": "3ZVHU5WNipHiYHbgYYuihzN5mRezu2SpWy8QMTwhBGgPJj4reVpfTX1fgCMH3Lt6daEQz8DsJAXTbMXJ41yfkR1D",
  "key11": "5cYT9JfTXHmF7VTTKrqEHPPXVLRYnbuzWVRDd57kdtgPQAEUKUibDfVR9wuu1dCqFYsbLyQcqPvEtMhaPvYShoGU",
  "key12": "2i5FUcnFcXeWndHiWuxCpbSPm4Ng6jbjGYG2teHC8RkAQJB7iR5CGrv4g3xxhSMTGG3vTNeEpan6vGiG9gb8Xdyb",
  "key13": "3NRT7nraTC2TAJ8Dh7Q9zZvgguoCCUzPsC6BCad6zyHRpCi1jh4gfCfmJS6BSqFEw9do9fsmwwnSGWeQmM6c3kSu",
  "key14": "5WPDGvWKTioXb4SfCEoDmGYCEYSRSdeDWrTvZ6hTJ8oDZxXRrc4A3dewYKt16UfYvzwmNLcZZxexb7YaCpxytESf",
  "key15": "3V9FhsHWSM7hkNu6u3C6oStWW3E2pSeaL8U5UZPswXtgpNpjcSBms4oP4H5GVJQmhoxbnebdcKWQgyxTBxoRhWUu",
  "key16": "mVCosLDGb439xjPbRmGEHcoChuDk12Kzq11Mtm97TVEzCcSuY2GZREgRwkLyRmLhzThQ2Tz4VgtEAyjywyLrv3Y",
  "key17": "2ArvpbdbbC2qvtdmP3BbLMCf8Rp9t4Zod3JEMJXp3CjvLNNpVDhPxSdThEPdyXmhQNQDoKXks8SenMMQbEcMkAAb",
  "key18": "9b41Rpf48iZFTdbb2cb5fSHwKwqSt73bXWrUYeQNTi6Eoxzx8ULubegUDcLPgjDBNteQ2n3gJPmHSdaPLtvYYLj",
  "key19": "56yTkJqKkdvu9d7eLGEn7MbkpT3LTqFwV1sqeMbrdsBitGB3TNNWtDXJVEqp9eZbx6paCCsT3459qfPiHWYakRJs",
  "key20": "3KoxmNRZukAicBFUdWLmVXUEvTzmf7hqmvPiRFPCyaWSkqaxhMrSUKnbiaSzzyHJGDeyXTHks6EAYFkW7HbgaNH9",
  "key21": "2sirpqbib7yi8Thez1WWLf3i4Lv2cvXpJmgxvDdex8uUFdBzLGGLrvzkKQxm7hCxuMGummDAUW9Dve7KLpxHHoUK",
  "key22": "4k8Epx45mJ3hpoVacYX5s6Yp6xHCdsu7TqZsGaPLq8qw84D2qvZe2m3Mqi2CoLarK6R9jfUYVVeNf8EqVjW8ob3j",
  "key23": "4c9ZefWFrTgKRDKpTPaLx9F1YEEUgHaERzZ1RPCQeyigLYTZEu1NbAU1atZya8XTFwJukZjz33jMx5FXDDkMEZLp",
  "key24": "xsuy6goyZoj32JiMQC2Y6H5uCY131uDk873jnnJEGaFvjbiZbX3k8xtSoxQFmMcLWBFhHUR4GWvapEGNAz5S4Ph",
  "key25": "4N28rryKBdqsu6oTtcNsmkTMECgytnkKMZuRmTWjChhxekdCmnq9bKXDP7N4LiAVUckRryq2UAG2mKGjLmeaTBFE",
  "key26": "4tNSv9Pr6ASZns88vVW2AGKa2GCE7kQZ6hucdrv3hchAgQKoxgtsJ6i1d2nGHECUKbkPHyW5EdJGLWQEj7rwBPjd",
  "key27": "dyQr9rGg2XskhFCckhi2GeVt329Ah11fKJtDXeSSqjseGqGd25e16NmXnRcLVPBgHs8G2QmE92vD3o3WG3zb2Je",
  "key28": "3coz4giB6avNk2mH8PpkVSLJUFE2PJLkRRJdkjirFUxKbqy6imYpUcaSdhbRFNmZ2a8rxg1moh3WoPczSNJXSek3",
  "key29": "3DjnZDghZVY6jzjvpQGVjTjCruP2gHqRMUmCMqEzYySqtZdkJtCD6F3XSjATF6LAe92wyUZ6PGLVjbYmQ4mdfkB2",
  "key30": "28VXfbAqWBcBdjrfYpm3Mt3jJLbJBhK81SwAkVc8zS6Vau85zNxKixRSpPaEsmTZEGCJWeC1XWLEqr5oaG25jNSb",
  "key31": "4WkzkFbCKVpz7sVwRxx2iCNKjcyziNJKUJMUgc1LMvWLr9oEiTxUAyr7TLMuamWtW97royspVQKuzHEy1AgncPg3",
  "key32": "5zmu8bDNLDzrBUfcms84vHxuBTnS4pN55TmS3ZfRKhH5qG4EgwirJHXpFaHFccUqvGjBa5uC8fU5zmVdiqB4eHRb",
  "key33": "2VawQgHmja3nu1B6TcqyKxrH8MG8N1xbm42WjXHtd6CERgYivsST7bvhBAUurirB4KH2HTzc4dCdWugKWvk9HrrB",
  "key34": "3xVXYprxo1RS9yQWNC3VaEKec7i4kMXKZKJWz5WxU2KAAJbkQGuHwTWeSXRfzbrsFiiUquSAgPUBmBm7aQiW1Hhf",
  "key35": "4e5mAMERofQZa6TTdG9K5GoBziWcsMNeR3coJE39HyGxTW9TuVvaw9gSN9DEkjgEiPdWHxHJXptbdrNu4BK9S3w4",
  "key36": "47S2v3kN44uNMZ13zCu53iBy7aaZzD8SxGivrfHpxBXtbKG4MABzVXs7zsdAMBR2YjgbY5LWr65mSrA3mTKQhz6m",
  "key37": "59vNt39Nr856Axb13Gwv32xb8U4kTFxN4xKraLCxqKAf2umHrKpdQbmvLBSXhg3yE7eXooTee55TnKvWT3uQMDTG",
  "key38": "56Rrgy5BPz9Rgeq6hQvP727r2poZSNhcJhTTJ3eJ63F5msMyuN6ioQbJYWcmzVS9GjJ3AWtLTypd7Qf1S9j1S2Ra",
  "key39": "34YmenUFNGukzfmCwHvXLsTpbxS64yJmt3FnrPvWZdwxfQxB2owcDD5ZLs2gYJ2RhnnraMQBZ2w1AyZmCntPBwXF",
  "key40": "5z4aJ88D4bQtG6zDvgGwaKgj5c1TpbgD4Z7pz55GttyaijW5hiWcnqnjjWxANEbiKbLzTCairzzuKHqCHYik4LXk",
  "key41": "3x25qk9okAhgn6PN9UiJd5x5eMA9VGkYWdBCLCGVh78Roy2e6ZZERf88RQYMgoMR3kGoTAREJG5Rw4y7ERaWHrwh",
  "key42": "3n7gCrZH34otS8wfQijW2pMJJE3aNNCeKCcYWJ2JCo3vF6mTevwk5VZeg82fJA82i3MWRTbs6pu5L6H2iN29mV4t",
  "key43": "3RJzVirJbiND8K8iZBDhSAT8fTYTxcPKZDzEHuVcGUjsbQ8iiTXkkuyVoWvHqqUuzBPVfjsihMW1GJfAofahH7PG",
  "key44": "57JX6bgZbJEoTFPsxk1Ab5wnLdmrgQCLPM1i6RzmwoabwQm532b6udvn5qTuzMzSgKaHnN8KCagFpsW3FSzDbVt",
  "key45": "vAXQTKTzYhPRC4JsEFf1McQLXEaVNoRwBtuEy8wS6qNzsHwWXPxZTuacpts4ztpnsDyh6xEF5GgjiHwDmVAmDuN",
  "key46": "3QX1FWmSZPM26o3iufoHuCPJitB5xjAerpoR1ijSCYvwGH41QrKvXE2r8sgwB5SALXXbiXyZvBRYNaQx9TdTXfCb"
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
