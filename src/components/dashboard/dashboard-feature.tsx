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
    "5nPQG6Ero9QRDPKPrMY5ejdSdEvtgJpFvJCp6RHLiRY8Mep2CWs7kqXH2YwjY46qkzLNGCDCbyCXLGkNhapLYsC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nt4CBhWMCycDgZC5m2TiSiEMi9CzLhpxef7TcUmh2e3L2FyH8Hnc8o3V5x1C3qESgQ51Ab39PPypchwZEBUPq4y",
  "key1": "2hVqouHGbiKPTQEvquMLrarneo4r96hBGnPtw3NokeiC5PirXCxSEXssoAp5WHZSYjbvFNuXqXe6rx43stkoJf4y",
  "key2": "55DHum22FkGf9jx5WatqnSf8eCLUfN7LC4a31J5fb4fYT3XmAVSYr4mdyxBbXnCVF2XawhoRMHSwRBnBMPwV8YES",
  "key3": "23g17krjjJz9nKbHy7jePPi2demKAdu4zDzBRGSxqRatmJviinUyhmr2DFU3Jz2v2nVhmAcyt3ysptpsd9s1Mize",
  "key4": "29RYZSHhPf1n9axoGMUVWxNAj2QJBHvgpkupKWZmVXjMV3XnNqJuM8LyHuSUZoG3cMvaW8hDyd5R4X47K6V8bUtd",
  "key5": "5jAGQpXWAhMoxspH7673pUKS1aSRuQoXBdEH1jzQvBisihQNZv2GZYTdXBDhWY3fdbY4jRsyQQ4SHP5zQfZS6UWG",
  "key6": "5FNnQBsj7oV7FpMxRyRiHmPRiPovBRGPugck3L8rHWgvCue1HrXYGRkmUsoA8WYRA9cf6KmWMixjmvXNTpCoX1L4",
  "key7": "4MbVYB53pKgz91CUHFsCE3HbHSDV7xfFAAb7Dg7P8qA1XwMHsyaS4pouw3tbnaBvdng4savKdcTpvWdbrsAe2era",
  "key8": "4Ta3aaGSnzxoRNK8zWSmzwNbF96eBfcGyj7qZ61CZvVGm3oYtPbDEPreZm4eD4YcTsRZxR5AfYvLEUxqTBVBRooL",
  "key9": "44MuvtXgzj4LLYY4ApDSTzRYxqBm9e9d1p1U5P26Jp5neeBn7WrVHKbe6PXAttTaXgMJQREYpNZkccfaw2vqMUhX",
  "key10": "5CmmLuvHshcgiPpTRQHetLG1h49C7pbJD1eQ1g7i3xwLCBexbHp1fsHfs8aiLSxr3wFvh2YER8eYtZFAT4Jqp2Gp",
  "key11": "5d9RNkpdeNfqBitR5z6xmDhdmWxrkiXdFDRzL1B7m7uq8uF5EJwfToGERMdwdu35CACn8WcmBXVDi1eL4ENaVnkt",
  "key12": "3S1WPSjqEuR915wuAm6Lugt9YUmms4ooxNdTw9s8CNqWSoe6feSWrPnKJPDKH88Qzv9tZGYhkG18hwYkvgb7dZn8",
  "key13": "rVWCzbXj54yj585Bn7sAPAHjvdBUm1MpBAeRXtaen6Lvu1Kkzw6mC2gjaSuYVWz8UsQ87trqqdik8mpVc4tqG4r",
  "key14": "4MFctoyFcsFKfiqhzRj3Esatv3J4eMZynwLRFtnfL9kwdg3gkyV3KVbUGMfkXSFXE88q7PErYbFQAUMuihXYdtxy",
  "key15": "oBSGtuYQQdBkXXZqLUhQDVfXJKgaRNxL1sJ7q9TYy4EYdbAppvB2NXAzYftNjQafZFBwgEJ2hDr23auTUvzgR2j",
  "key16": "5wf6wGARpwScj7oEDsijqEqqs5MosVnJXaJqwJNvpw4hHPS7cSYHefvtpiD3ztqqibocHig5EZnojkgCb6UZ9UKa",
  "key17": "3Q3nBeTq48y7oxFQMs9ooUnE4CbgqC7XnCihZzEUtbKdFiC7s2yK4ZJxG5pecmDGqRz9MfcZBt6i9JTyhoX4rMJL",
  "key18": "677BZDKeNPdMVAEpK8ZWUjcoP1dcfbryr3HswQM9RTa8RAWYaTu8E7oANbtQ8K6f2aFLXN3rsKhrshu4Xj3it5TD",
  "key19": "4z69XYNBa4UdDT8iSxYejSRDeKeh2ozViEEkKC5Np7c3ufX7HEgWmpvdoJJy5CsrdmhXo8cCLncL4iaVHCswegGa",
  "key20": "5LVMKtMAeGhDMQNiu5WoZ16nzqU1mys3XV7kfS4dyfaaxwACjjyXvoTny7YGBKD2QarhTawAcWuYFmGVo69dmhSB",
  "key21": "EX7Tr5DkkuH1LfdYCfjTJycjk3xpuAKb1c773rdmJnZppJ7ehYdLm5vyq16ksKbVDQh5Ms2JaZvbEPcuXYDfyZy",
  "key22": "2FBZamsvyRB3txePM52dPZUDEPEY5H7twgD366rBP5bHUtzXGbkizPm7fuov4ZRcipfVfJuS8yhEM8xgNmfhuKGu",
  "key23": "JX6sjtiEW5qVPaUw7XEk9JpoZq81C3bXgvUDtsjiFWYPLqFvuygRoi8hriHE3xPb55DkJ59zfeFpLwcdjJrMB56",
  "key24": "2qBJTZkjRBHsuP9WdoP1XoB4NhmTksczea2ninjb4229DNRZhTmgXPmvsv4W8HzSQP2ki1vvPZCvo2aeRGXkyiFC",
  "key25": "LFpWQAmMSLUpr8ui5t68K2GEFzmjWoA4wFccYTGuCRkrcUAE43q9C3NcYNzivHfFXYNz6QsU4EVEn62Tgz7MTqw",
  "key26": "2MLFkmWMqQ1jCRjqFf3s8XdPpXHgdti8qWHkxixiwQuuXvCZKyTvKVos1suRwXNJrBxCGegMR9UtQfWiHjibVPGN",
  "key27": "3L9GapP4T8m8PowcumdqY1iHJ9QxzWJEMGVNRd48CsftKVn9swRJQo3oNrkikmS4vY9W45YtZQs5p4iFpKKRgR9K",
  "key28": "62JCVGzpsTQ37VEQNWftLpPDYvMcqidNCUgLAETJvqS3yrBtKsQK7bc81QW3QV1trj6m1U31Q9HL8QKBGuMMWrWs",
  "key29": "2DEf6tmJ7JejZYwsP9u3VpbYm2Z11CHnaDPcQGDJSuakHA2p2jpMnQ5LQMNptnajY1wMAZNKXuRGmL9CH8sAo2w8",
  "key30": "3rS5hbu8c4mFLpALcE4Re6exBKmSxrEhDN9oBWqKpZKkPqfTnwg8cbhXcKT6pJWvEDNgXck9PTzZ4CpWG6htanyP",
  "key31": "5LNX1V7CY2PH4px6cSVvUg2NnKc6aMPfJ5Lg9ZG33JNyEEj9DGADjAYDCpGFkjuYgLCmTyrqRUktMWCdRzt4tmsC",
  "key32": "2d4csjK2TzaKvMd7hu8hSQWcULSMc69Pz74gJwZnxWxNXTVPEcsJsvLqRg6oWneLCLi6u24L5z6Rm5964fDkg26v",
  "key33": "3NricQuNXzBbGpGz691TfzvU6TQJr4XqmuYHc2owvrGTA9pkcA2veaWSDn3knEaaFsqjrxVW1YZYetpPcswLxL4E",
  "key34": "2cPWVjUdaZtTPBZijHM2mb38e1LdFUiWub1uqK46tFWSSHqXusigwNjstGCSE26BvZxjQ1p8zukPgUhQBfRxN2uK",
  "key35": "56q6HbGjqgtBKvEH3tYtnLfH3QroksHrj5S3biTbHjw3d4NxxQDBHoNochoFpUnfC4KnsDSkukeKKKocpecNfSUT",
  "key36": "4nRf7jSmULy85HcaxH3dRvUnZTXu9FejpruTjL1hXCezo8dodYDopngv2n8sH1dcWj52B9bvDtswzjKsbYBUp3ZB",
  "key37": "5QG7WPgC5WhcJUkLYPCzvkw1GVVFWPEBw8DMFSAtwzc8dH3zNCwEt3DMoQGJHaSwhYa5kNsBNyxae5xxGrsWb86J",
  "key38": "65Wym6eQBuqB1Qe4XAtc2ZbSWuAMuBc22YTix2XoNDB54xcVc2qdBJshrJgjJLjWLhcwLdgCvbcadL1sugVfGJTt",
  "key39": "45nPBKZvBQdwgFs4Tgtx4LVGGgQtyb3cQNvbZGWp3ZVAmnAu7PpD3dpnUdCiXRuJKUMCH2cxdJUybHDHvKWGANYX",
  "key40": "2CsY2s1pAQHE3VVLNWkY2NyzC4Sd3rgaLt5gmbcyAmfVumDzdYC4LJhHSN3jjzsHpxHGsHocxT9KHnsue2q9d9si",
  "key41": "qheDaB5BJAJuNARGRDmd3jxrPpHMPMZkmYrDyxeVhpmULfg8x8JfLfUmgp9xeJmQfdS79vdyNTETb5Zts247Txy",
  "key42": "3Y3Vu7BTEbC85Qyj9WsH7AjaPB3pKV6ZnhjHatbUSePo2PV6qzF969KEy6KjXpVSPQUTLZiTVenMis2vxZwEBirU",
  "key43": "5onKPnoL5DxZEUmZreHVnu2uWd5pJnHfkrgB1ZX9aWyDpdA4jHVUCKC4vcq67y48xpbkkFqNpRMo7guPJqQ5v8AF",
  "key44": "3F55KTMpyRT2RGNdNvx5qsk4b6jpbKQ3AnEmX1JbKjE9Gg1NNFiSnTknYtRstNZvwLqx2jYePPik83DjSpJvMf7L",
  "key45": "5XAvbUfBtjrpjWSNHpxYoC6AoE3v2HzJYQKhK9SybWcU5aKLPVvCXGtrAwfoQmd5g64vjUAunkb9fC9pxoVPoEMJ",
  "key46": "3LRm4g118kB2HxqEoULkNDM7rVkkC2jWz7aKfGdCMRNLSsUms1Ykz6bbzGMkSHzZ92crhiJwDvVCXkeSgMrKV3Vc",
  "key47": "4z9FVLoh4bGPZrNMraYzYVqx9Q6QsQAgsWwVWuv15fLA586jpxzbNfy8TkmVi414n63yjMfncPzUa8qkCxMJockE",
  "key48": "4FgQ5nX8kQ2x4D6iGnqN98KtiuYsYNh5Miou8nkCEbk7mbJsV1v61gsDVc8NthaxDB25nZqG8wrpupznGHUroMzm",
  "key49": "2mk9ZKRcE9PPXSjQUFTevro5ajYCStUmMksKGmCasW6piGfv8V8t5q4msvaiiHYvnavMbkUZVLGD2kEuEVgCiVVP"
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
