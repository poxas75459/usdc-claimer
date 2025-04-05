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
    "4MdyrLevHLitbeTV1hcXdXXRadaSmA5CPo45N147JZEZPGRjUd22N2jNAFxekh9b1JQQxVMhGBSHuFNUZwaocy4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DykLUYjKrPnsLSZb7TDQen859wRU8waoZczKdegwbwhTzC5h68AjdXhfBofPKErDrZRRtGTWZH8V83fzoNSRuZA",
  "key1": "5ZGaNXwpqXRDYz8paaKpMTHZRnXnWJL4bRRv2XvFE5DH5x8DSWW4gcfKQ7XsB9fhkpb9xeXSBctwc8hj2NJpygR8",
  "key2": "pWDKFD3WEJP1bEoafr7G6wKYdcZpTqTNJmmVC6f5SBgG7BxuHNAr2cuCWqZYKmybZqv5q1ZFkBgf9rALvegTMPX",
  "key3": "63j3z6tKeRAC6YCgmGVttNBT2pN8drWXZgEt4zwT6rwmQrsCR6SAxBEMERqYsZTr8BaEVQLSEULebT1MaB9q3ju6",
  "key4": "2vxrfQGZPcxqvFfZavisxHbhcWpxbK5cioA8rUcScPVbgUz7A5PvdDM6gnFxEhv3SE41X331DrvP6m7djLPvdZE4",
  "key5": "2YA7k97ZwLfst1w6HAGpfKHGhLvinbCaVuENca59S7DAmHD9XcbA3bRzLTW7izcC33HTea3kkr15EvBN6b6xPfzW",
  "key6": "3395W7KAay1n2c4jQXmAxUGa4nMQvDrQHNXs6483ChT16rhQnSDVY7LcQCTyU5yKcjasqHiKCXhNuiRgT8rZw89Z",
  "key7": "9CvMXTbiqL2KANps44anVSjQbbVKNLa83cnpaY5g3dL7dgyFraw7a81BZ6L8UivgJkHq6V9SrdbHGgo3ctc7Rcn",
  "key8": "2dtTAd1CVCMoULdMWzCoaNEjDG5fmEc8ankDK4c1nukXZ74PS6tPiMBH4xxAK9rz33w464pA9Hw2iEMKkpBfNZrx",
  "key9": "4DTKUMYcKiLnFM9qj8zjSKedjke7Vz8rPSdL9LVW7hqmxhpcgbRGYtmzQh76g6UT6eSGvpBqWirsfKL7qSVc4jdE",
  "key10": "4cBr4TPGXc7pE9EmethVQR3n59MjR19us5gAn27KVS329uaATs55kHQknArMhwUnAFKr7AT6oRJmnGSfNXFCwpx2",
  "key11": "28jekKBjJa3uedV6fca8b8a3khGV2Jn9Hftys6HH8msaoEWF8TTfSDXPYxaMW3FZfiqKb5HZaXMRM3P7wWLdhq1s",
  "key12": "kSWHMJgrcM4JLXWupsGSPqvZV8oZmaYqtMMqr6iLrEP7ubVSPbVr2RmNyqrZEoMsv5yDXgacTMdaMugrueu51Xf",
  "key13": "Vkm28eM7gUNTmui7yThJbXtCXZVBhub1tADACemMVvebjrUR1PK4uLgVavHQgyQmEq374ZGbnAQQhYSohaqyuGL",
  "key14": "4hQXaNbgSvNj2h2a74LpsY7gt7HXjRALQ47AGZqQe7NRiQA69ugHYGJsM6S2JU5zoLEL9GizgiuxFgtpv4PhB4Hk",
  "key15": "5DJiAtLtoUqCEwfffHVG47hMkBtwb8Xrv6Pb5X578jffTuy84zyp7DMA7aLzwvQFiV5Zbs4r4V7m3MzsnABhfKYg",
  "key16": "2PJdbaY5NxxBpKhc593dc7jRn1nwh1tRBcqVtodL6hPmxcyR4sDJohdWK8cvW7pnCVYccAJd1HPQ7zKDu1EAPZrH",
  "key17": "3nJjs6eDjMHuHVktnFUBQXXzRzjDj3MvmsxGtoHJufojKsY7ED8nqnRhiZuyVMLPxe2pzy1yjowrcJL9TBBcnD4b",
  "key18": "H3v6zpFbcT6Er79oncX2rGtSiW6kVcS9oxyfqvL8j72kakkeq32GkqctaUEQnLoFy1EQq9Qw1YUVzJtM4K7oPUA",
  "key19": "44CaoqMpTJnVw26W9qZcZegVRVaXrSV8SksxbzAVRFEJZd4pfZCgqAjiuV72ZXD6o93EbZaCzSLw8jz7BSg2VU8w",
  "key20": "3EVBtksRe2zp2SA8S5QCBNqrwZgKVevg2nA8oFnWtBePXFueCUDuyjDWSk4c36vQQFvcdV8sBRamAqqHnJszFZf2",
  "key21": "oWeHWo88yF2yPzrTvwFMRwPUG4xKwjzyCokPhHogw4p7jHYVtquxygwgDkqQEWCn2exqntqQYz6mySEDvyPufJT",
  "key22": "4YAVfhQYjRvEddpicn3w9Vmu7dUWJhubjjMdntf3uQXwzTfXJbYdooBYZzqABimTE695hSovWa2g1f5PPuiWnGa8",
  "key23": "55fx6RPaWGFE4wgM8xCBKzu9PXZZvvY8BRdzeL7A3yRCJEnA81kCaa9hnJbMGRuKXw1fpQdGiTLewQ5ANkXDumDu",
  "key24": "2XwhesqrU3KKUGLUZVd2pWNSbSiMiQspeN7H5uF7JjDZsSrCwtKc8x5T1tLwQ1tquCTvt8o9xZkc54W6Lc9HPcTd",
  "key25": "2ZxHo7wTgDcBzRn96eijgP7wR8frw3QggUwfUmabUQ8QKoBW3ekP29YStPfz3u5KXnadtDeBrF9g8CY8Fgf8TAKk",
  "key26": "2Se4hZ8fh3ZCkxCpvjDThWb3wnJ3eg9QcjSoEsioe3EWmp8eEbF8FnNYnq1cXRX5b1iXy4FKvo3cCk7Br1WPTvq5",
  "key27": "59vVZDJwtpaqS3xNJ7FcjUdTHKuWpTRQZZ91ybAUT8rCfsH5qT4YTWja88XTvhhA8rzThwZCt4JQajWEVmvn1mVE",
  "key28": "3Xx35n9XJNywcR96iPoiK5paZqL11i1aaQCCXatsVmoi6wmLYEdio1NYXVfw92nXNU8UVdBafMy8Qa7MKtbFN5Ws",
  "key29": "4tFWZtR1h4VWw9YWXz8ouEyFywJfNbfwCVC7t3FyzDYv14V1QE4eufNq8ChuMURcfL7PcSSxav6saja2BjbwZYdw",
  "key30": "4daoQ7oJwEb6hbXcWd7wivt8ywRbRGYamHMV1spMBpzDtzS8hCRVrbUkf2UCMrDnCojnpqyLjMnL3Wr8StJaempU",
  "key31": "5izedcxaek8Tda1d6hNDEX9JUSk2g43myUMQHax2pyi7qtfrsqiLYuPe9Z4AW1K3t1dNVq9bZRmtaoxn5uLArZoc"
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
