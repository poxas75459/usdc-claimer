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
    "5edPEoS86hiGX2bn3W7HgB2dWyb57JHJUvHaRoG7bxDoYVKSLucUVrL2rYN2tFyeN1xwBBhmaXH728YygaiqNm7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t2HuxnzyW6MufT4rtxnVhcDJNSK2qCNsvYL8Xb1ro99QZhPErArtsU5DpetPT59MrF3L3W7ZgXFhCezMvYdhBiT",
  "key1": "48EWi5hdgcrMmcwv2tnbSVLajGX6C7uwpfRrXC5ficNjgqoGuZQDnfub7PN4deTXpTBLaQEUH71Pva7YXg58wuxi",
  "key2": "9Y29geutHjEYerxF6LfGqqZxFCWwC2Bg8raAL2gUGNH65xNHdihCqfYuSuuNiZm5DxTEzSQFcwtcZmJUnhykqWF",
  "key3": "3weox7W8KkiWPz2gp8VXw7bJVdPqUJEcp6N5ViEuzYqyoQBBBqSVSViZAPLo1Kxxa2PFYBk2k5dJgGiXsoCkr3km",
  "key4": "3QaaN7ANZY7Y89PfnyrvNPd5nXMGkVSvsJ9TdZXWhQJjWkFvyPA9RSDQGWTVepvxEXh1FP7zRZBmVVCqVjZcZjaM",
  "key5": "3f7uTpyJBZDgJbD5PEc1t2CEAvycS7Pt8QGqSuYseYEf5Lp7dkaY6iwpsdAwAzSf4Brjt8wRzEQyWop1xCWz3rW",
  "key6": "4qUCaCXJYZ93SJjxg2fZHkVVfCzMmv4qtnANAteaFquM7f5KkCLdLLUwGj4uzWiD7aNqmgvDrKeUC9Pnw7tz768Y",
  "key7": "2otBQdJYLAqY7nmvsSt4KoWNUYu4m97g5btV33Fuug1ncMjGhfTPj2MW5EzhZswYatdataXrRnbmxGQEaovE9D3R",
  "key8": "hdgJGtCFue7GEb5aimev6uhukFGfbZAeXWWpZ742cYxQ8kTWFmMqDb1NJAw4pPL8khfFwUdSVotVFhD6L5Wq8sM",
  "key9": "4nG5cDpFx5dbcKDYYSu3i5CbzpCoqopbNmkWYoXHMLazxGRToCxuRqvXAumvoVLWeSoNYTaonFkTidxS3Qzmuv8W",
  "key10": "55ypJq1nyS7UKyjhThU8YVtckVYZsHVZ2mvbXcCsJmWs4pWrSfWMJEQJ7c4uMfG5CroTaJpT9tbJjZaMVog1beuG",
  "key11": "4rUyVSGtPqrHbu3X3vuPUmX9g58iXYWek7bAWcwdqVzz12UCBeAPCGZqb7izgtC4MnTLziqe56MuR1kdeNA17Prx",
  "key12": "2qSHfqs1vXfjckgbP4Fhj5PYYZTMYwLTPE5PSwK5FqMofBh5r9CBKq8fGi87a7juzNPZe32hCce6iTHSvsDb1Uzc",
  "key13": "2X24xHBbGnF4VYTTcWipkdK8eGrdF1Xq1QbjzGh1LCyMz4uid6DdjC1Lp14A1LXywARmJQhR2kEoGqZuETpcfnHo",
  "key14": "5pcNewvYK1GNznxiaPsjs1jFUFJDLDPyuSHnHR6UBDEqwtCd9vv6ve3S9iCch4weR2TeTCPPprVQXq9ijur3DRDq",
  "key15": "5c1c4FREyxSWxuGkT2gvKaDCXoFUHQrgjaXd2nZiahLXFkNiqWyhf8oshi56fVFhsNGMQdUTUmdtFraV2EVmwRuh",
  "key16": "3rYmFUamMSpRzo2UaabARgZkxV4Ck5x9E9b8q8fmtrTBrSbBMpxWqqbaazHg6DbMte3Ro1RCBLNutdXzVhFxBzfQ",
  "key17": "5FuEw9gWsEwjRRdf9raVDAtZyQc4ofJYYNuw32ohRetFJDp8rRZoUx9wTLRqqGnu1NpiHFVrU9YQ8zmbqkT4hNwb",
  "key18": "T67obS8kPX38Ji8BBwA1iScPJHfYZkFWtkNjPmeK1fNK3dqWBCq1f4FHc7GJNMhghaYRQnHBJkf9kNeSjkzJAgb",
  "key19": "3wj7GAs6DeNfket8LFpJXp1T5kXHNU22wPx9b5hgDBXE12tCkG49wu9kvFdtp1BndtFEGMSfZdnTZSGeKjUpT8Am",
  "key20": "pkArVAd9TGYhFxmMHzWg9pY2EUCLq1iNDZGSEKcCNZFPbYWv31VSqjLDYyfEc9ZGX1nvUzCtXBKGTtMLw5JY9Ue",
  "key21": "57npDgk3tGdevve7h6CiS1xbHfgVuv2vc7gjdX6L7TUEVybmipW7keo4eiqyXxMJPWobeEzKbXduMcYaeDoz22vT",
  "key22": "2msrcVWucjSjThTkT4G5ppRKun8coqtUcXnsAQQfKXZF4nEzJZv3rTVygucvBEarWCWP3AbLxELZATCgm9w1kNXN",
  "key23": "3iPhUd9yVLbj4KSPdYoc2dPvZHxe3wjaYZNLUCauV4DUtjKkoUZGd7Bq4S9nWM3AJ2eb3NbGpyRA3wTuTaZPDVkm",
  "key24": "5FvBbfrHioGmH6Ur66Z8SxpTLKczax67VXhXdUSUiC5kiNV9MBiHYXFfPhTtviNwrbf3sRkLJmddjWY6mzqmsPd8",
  "key25": "5YUiTttjX673bC8dNUDg4duJdBjdQtKHMiLym6sBM4jteAFkhv4nUa6uFpBUQ8LrSpmiiMdYL1YYcgKeGWKKkKkS",
  "key26": "3D47hxYHz3FG2SFb3FiZETuqjtHeis9t6tqTquQRhQvSG3k3dCW6AhqnNzhD1gyTmwFBXPzpns5b3m7PsteZdtt8",
  "key27": "3hkFod91v9iUjeuTPTBoirCC9pjXnYMSATwmjUAeeFJeWYm7mqKiw2act4SGszvf3NMbJCo7bzw4dZqVpM25RnUz",
  "key28": "3iwhFaxU9Ny5M9gogm2LzkTg3Qd7gJn5ddAbqQTDpnjbLbttLXPAeFZ8B7szfECUh8pJ54ZsbUhYNsWGETL3afaE",
  "key29": "JCzhB3r16pgnxD9dE1FJ69dnZHFp3YbwYw8mrWFQ3EYDvZMvf4PXSAEGYkW4ZcMaUqn2YvprC1VmymTYn2yn289",
  "key30": "491JCR4ycu3HuxJWmhW3qiSsPTWtD116phPPiZ5KCL3P6BLxjJdAkxh3M5JQ63pcrFL1soJo8UQAYLDHeoryeYjL",
  "key31": "3L2tkSvSV6Kvfc41gQFRs6cXB83Mgqrr6bRD2jhinEagPFTnHqEe2kZJ2ywG1bLtbd7PRdaoKQsDKAxSkLUPUAmD",
  "key32": "3pDTQEWJCEXif9M7rdGa8QYxpef4h9NQBBcaM4h9dqWCV8SETuRSHUg8iHnhTJcWD313ZFnhxtqFXNKDnoAXyM4d",
  "key33": "2rh8b1BJ3yxm7bdTq8T6cm94PyvkCmkyXCMkkMWTi2FXG6cq1gaZLYm9yC22EXQZPJWavMdUd41BijRRKVjjVQow",
  "key34": "3bW94kSCSUMj96qz78zb2W3XhFMk416vkymBSgd2EJ3MB6qLAmpqmgLGdDSDQNaq9s9qYDYoKrPd9WNSpTyixVq4",
  "key35": "3PRpe541SRf7kgF28U9G2ZoZaQSJMCrKMWfEYp2yPH1osed14P1w1KQFjxiD6rBptTV9ct2ZRcmNUwguVpgaKdfq",
  "key36": "2fzjvNUhTxzw8izcpa49NcZcggyJGMup9yL2DH1VmmuXgdPfjAa8cxZiAr6CFc4xBhct9UqxCoXqzUZ7mjxCs7wg",
  "key37": "TGuYjcPLBGHUJM9mHP43n8hHtb643XWgacQfPtCGmrQJP1RwdUEqFWB63kYpyCUo29VX28LPGUNKXLB23PaGbYh",
  "key38": "5Ue7bRJyzLnGN9Sb2vp6ujCvL49HoP8VxAAtKZ1atgP658PbN5KWdiXckcXf4sp96C55vBjynXHsEHstxsCWSpSd",
  "key39": "4NeAys5NJW41r2oax9xXmKv1FYdXLUdPhTCd8SknLrLPoAtGVyyAiNqdcWtbpBMy56qavbzu9iBxqpKb7qF6Pf59",
  "key40": "66F8hJk1E6gVQ48SkAddRKzdNGmuKdp44bhbW4xv6q2bUjb7UeRSir1d6skLC86x8buGU2GHHhe5WKR1SPJeJUQT",
  "key41": "3C4LKaSqM2WSfcXEnfuvRFizkcck5XAMLucqLqVVP3b9gKeR465K1MY1avkx3DsKtca1VUmFwPD3R38YL1nSZxuj",
  "key42": "4fPWuCD8ATRxoiKkVfJ83nEXE9Sk145HwnxGSS1wmLv5VPqADEmau3umtRxh2bVBdD6WVFDf7FyuQiF7QR7JyroY",
  "key43": "4gBCf3zTMKXrdjZZf3aUQvf6gofntgztVnncVDi5cqDs5RAVAcXADTtiYM6KfSkWEWBxrQ8NNhKdH7jghC14J7e4",
  "key44": "35mwbevN17WPfQtoRvLu1hAw2bptoyJbj3Dmz8mMPakKznJF1h3XFF7xSMhWYfX57kAxh4A3GbyXAdXfy6vqvW71",
  "key45": "5TNNjK6jP2twxEuvkUu1mm7nNp6pdYjoZvPCJSKm4nq7MZyKTjZqtLu8gwaQJD3D8AieDsr6kZsSzxLbPeFGBABV"
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
