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
    "3DPoLVbMFRZsLjTq7s6aPN194KoCneb46XFjkisB9qqkERFeRCG7bFf9jqAnZvH98bPPL9HVyaayG9BntAGsH6L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8zkVg8Bm9931pHy5dETLNxC9e66nXyGBJo2vhLJ9JVCiW5S1ShXudChuXETWbibzZLvt6N8PZhdj2159AXTfdi",
  "key1": "65cZUyT7zh4Pqpp3j5suWegEJ7nQ3KmsdMLTN6Xyiek3Rj51EqRACWpw6d87aPw84qzpYqCLsGhX8rViQRswLjaw",
  "key2": "2cprV5oLvQWTuc7DmoMPfqVHbLHgCyvmDy11YSkYxTYZkt74KahKpQZtwkiwyqR9YfDHBvgu1qyUhmzWbBA3kNhR",
  "key3": "3uu4Rr22a5chCRyEUbx3cXP9qGgFr7V31X1bVVtUTEQjxWkqwbwsfyzuTYgmCQGkVz6MfVQdqz2zwK6ohbgkvCC",
  "key4": "2DdUTXrjABXUMDfAJb5RhWgJhtUSdtXiVH3oExjP3j831NbzfaV6nWaKxGtucGRM2FY1LUaB4hTCJzoHoFS4MtgL",
  "key5": "43gPSV9SZJRkXeojAbwnLPWMW7oARS4EvXoM8udd9d4fPLsuSUon7N8cEdnbZsKhH3kkBcb8r6zopbKueovcFbsq",
  "key6": "5W3HbxRQaXqqEVpbdTmcpuu91grF7fbaWvRwyibf5SoUGpz9QKsrAriJbk3Bo3kZqNmjV1svSaEsNy29P8JQmn1T",
  "key7": "5QVUsQ5KB1YpPpbpKhm6iqJtFydBBr8zvUxRjqgVSRBEvXF6cUzR96Lb7YkesnL31BWMFUL6kH889yAgzrdGUi1E",
  "key8": "484nCf41arrBq7pLFx4PyzHyfzD3mGQdrTwcDrWkx5ZsG8wfsCtnyvdrGKMtyQPZc24vXmU9f54A1uF6xJtQ5PVA",
  "key9": "4217QyuHXtCzj9m8Cer5phQ21RbhnnfMCbtcu15acQjTMnQNNMA8WmTE5thJwpihBs2hnBkXaqDDec2Qvrfv9J3w",
  "key10": "3RsLrfVVGtdtK67Y78nN3vnzovdYFFM8fJwKN7obz1iFBCaFabqDoQkQLiqFLtvRQpBSdM9CX9aerz1CXdpva9K5",
  "key11": "49e9uCK9Pz3sinodkyXTdgqJvpKHsZeLS32eZJLuHoKZTTWkYndVpTfLDFQGcG5uR19H5WCo5VWm54H4fxk6eCyc",
  "key12": "4UTzSh5tZhqDQav2LVf8WT2zkkcWV62s9AP5W6qc9GtXzsGsv4vubG3LzFTqW2fybTJmHWr5NyMTfZhsbYhwN6WT",
  "key13": "3aeRDxpNtUM5osQ5GtnVihQpLWsFw83s3Dgtw1n3ynzTZjdTBqyBNwDTWbjQWu5mRxUZPuuZBpB5qWz5eGWRkVSm",
  "key14": "2WAtR8tP6m6Fcbu89G7EXhY9pTF7LMDG8a5qXY6fYbRK7yLwMzDN96YH1cV1vjQRtnE2JgnSH2F4sHDSg8esZ4Zb",
  "key15": "yu9JVwzNM4Leyxz2161n6i5ug7WhbGBm2gaPANGWSMzWuW4LHnpMfwYrNGpowvBVJ3DfbppizkhZ3YH2fLYArv9",
  "key16": "RBHD1srsRziWzBNVD6uxuuRWeoEwrUQK8hy5yk3Vwf3q4n9YdsHrhZpb3zvg8HvdaUscWYR5EyjiFyPYV76B1So",
  "key17": "3jSvL3DKGTWCEwuPJdZ64ELKU6thiKNfvTbxZz9jBzURiDmQFFsQmRrG4pL36fZY8rc3RwFy99p73HZ8BTNEiZda",
  "key18": "5DUXCo39TzLJxCvtwv4fy5biHJRvfGj9PC66P2b2nGZdc5fpBEWpsgY633sDXZMzJLC85PeGURgY37Edx2y1s417",
  "key19": "611vR3KfZdHGPWN2cYyKqdnNEgfT9JSD2c4os8JR2ZmZJQYPKiC5miUkmwcpQ4DtxrDqXWF8RAicfmx2sKR9efTG",
  "key20": "2FNYGNaEVR22G76ZNBWQtVUEJ1tgi8pXMzPbSdKoEGSzLtK5H1FX4GZEGm6L9P6jTmUL84ZjHWk3Lxvf84ZNSp1y",
  "key21": "5nKFvk677xYwZJXYb7ir62vxGq3sZSibRx8YuSMWS2xkZkoCVzJYtvDZepzmmeGe9WSV8Y5JGdHLqHwcKbgGnJvq",
  "key22": "2rKKXoffyUV2vxQqHf29yi81cSwi3ug5k4H9MMYdxHxmmhmQLYbX39RhrziibymkPtxopNAZ3WGxQmmf4F2ktMLe",
  "key23": "5RsgpKH5qvMuLyuwbReeZs5hKrqdLDx8Kd4KVAyJv1y6SfJQbeX7VrsqLCAMjfM5NoJuSE1s2quE9CmKVskGLZ3B",
  "key24": "5wM9Xj86DZZoX7au7uWQ1yiRfhXTrAVs49VuidUJhxLiGmUGb6EJQ8uwvDAvbs83YsmuzdAZQgDt46dssfyn3XsB",
  "key25": "3gQJHu5sFPF8ptSpqhQCaE9v97iGF5wRU1dQpzMBba5Jz4PZWhFHTZtdZyNkGRzuZvD7JYaJwdojdd7qXiU3uZPz",
  "key26": "3k1MMYSVzhEcs9Cjxj6Vs3FT9zp8pVNrWFHxsY5LHwWd7fMcMdwrLnML2Qt3kaYaeNDEsksdvJ6EWNtRwei12Wub",
  "key27": "4VtuRofesqGBgdmeG9jf4G1D64GkJthLT5XEHQSi2xS57Ybab64Ku3h3VPrWqMUZHVn1MfvpnryogviiYThMFJAP",
  "key28": "poa8EJHgD1oCgcJVbBsfWdZ2PvoHPcQiSek8f3f2kVt3yNzqdKy4dg6H8UfVjN4tBSJJDpBk8mGT57WTnPMZDWh",
  "key29": "TqS3UGtC4HyFfrJavs5WZZnMsYJjvKYowiXxEC6PfPrhjkPVTqsYWjH6U4wih4X1Jj4cC2JTWRH5RfHsH7uMw8A",
  "key30": "2TvyDvbmjKKhC7byZ4dCwZh8jF7fdfFssXVVtjxZajgJXsDNpeMkh6jLKfPcoufNXmGGzhABLRL3Ezidqgk8LybN",
  "key31": "37SjkYmJKKeEAB4TcGmSzs2VsKq3PXsXrrFfr1TAaGat91wfXzmjiR1NbkugtvumtYu4bM5mUznVm1uteZC1pRSq",
  "key32": "MfG7wPVGE2SyZhptd2s3NrFnaBypvtFDgrzSBL4NcdDLUUuGAP3BWsoTZubCqhHR74dNEGRrgh2Hpyy55AheBu4",
  "key33": "5ym4uMj9GiFGJXghpwbGJFjNxbVcqoHwNTrgVFQ476UxH25Z3K2UiuMwECTwsfE48RYYrZupwz7ihydMBwyxRqbX",
  "key34": "28ktn5MJbm373sER9z1NrHRsMFzNphzFhupDeK3NQASTFztsFQPFQJRAfbESQk7zJMBDj36S7VfkW4rvsxUEeCPb",
  "key35": "5pcsZTbyYuSv7iYNASUJfbV7U5UupyeTCdUs2ZnxLasPADFRc7fko5Ae9urzFd4Kd3NMDMp67UbUbUc5oRG4g4oQ",
  "key36": "57f12LNntpT6ay8FrZuyhtibUNvkz7BxjrRyqBAXndqVkZNzN2UAWwN3R4zJCF2VgzJH3QKBuAMcSn7GnqdTdRys",
  "key37": "4CMZyyK3SqprkhYFJvHsWNg6hveXRDZZLpvKEsnAzSEE6sFBMiJggpFEf2UW73MTqZcXFz3jewT1DwEv2iuYr33y"
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
