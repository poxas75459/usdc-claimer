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
    "555MkWUeYBHLNNXnEkriHnXN1KMgJjZDnGHfBByYDf71DTwCHAbvBD67a8X2gCue8JmQhpkTsStvrqzQFavHGgDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cpUyo8RpJ8Xr2b7XrAPR44L1jLpwby2gd815zFK3R5nGAQYviKWzsobW3e7JQdvjJ5rax15JoRpNBHWk7AidgeK",
  "key1": "5dnyeU3ksoNrDK7Sj5vgN6FHTEq5zSE6PZaaN89WZ7kHD9tdnegSGry8MFQtofeRgbRJqXV5SADvSyTLMvWeXj7w",
  "key2": "5sQs4cqd7bQoxjmx4qgvEVHbdnvndsLVyfdqnSyoxSjERA1ChwFDNzo8RZ8ZnXBRwmXjPzWPMYA2b5NCXs8aZhSG",
  "key3": "5cwf79WDUuCmDXpyqodYJyDf3Dj5NsDjG8GRdpSDQQeNoP8xA2UeX6RUAaXUWR4dNDDvUkRnTjEMWBW8hqdwxT9d",
  "key4": "2q8NNVYwUh2FKHoHPmEjJNexvnKYuzawrDdBGUqqX418YA46XmXbVBMNXLqZxRayw8oRWNXByczKxTYpmMHpQFWs",
  "key5": "62jWUkGNZPv3GujBgsZKT9YfkYVFZUoypeMrJ87EcfeaQ1UQGHa4vtDzcLu8yF47hEnKp7otvLxeYQ6QQto9HwkC",
  "key6": "7TLJ73gFHyvazV4a2JnvBfMV6FrtiP1hyUtoZWqDpC84BczxmhkgsrU4vNBtJvgMcnKTUj33trhcaVwpvuiCYrm",
  "key7": "5ooZDsDVcehVPf7Lp2jrNNr2bwyWapYsfDoG3QAcxfeNNihUswaNwA2CHDPHfPWZmjSjjR4bC6ewSJmQW8ig2Rqh",
  "key8": "5F1Uf1pysmh92y14tJ9ZkCGH1jAa4Wu4fHzFdPBF4WSdFrHX43hLbtjisvirn5wPBnNj81otNHDmtyvxyREXUmAD",
  "key9": "2oaPKkyjrSJoXcqW7U4ivT7dH7zfPzGbbzdRQtx6gwLDVCN2vu8dr9h8HQy4pFrEsuBMgn4pAhH5XavbNH6QbbPM",
  "key10": "53TVJoxTsQokjFVqRYLbw1Yf4p47UGCRChwpG6XoJhfxHCv6yaD26xumbDDCRiXCPEs2oQ9xSJRYxhzMohuE9Lm9",
  "key11": "5gw4md1PjoBth5mdQrEF2btCN1UYXmyHDb6rLrk4s4bRUBE2KwNH9JNpdrM4HBm8Pn1ubEYFX5SpY9aYag9iirR5",
  "key12": "2gnMJxFG5ym6PAMmGiUiqsWcJ8E1vYiSU4f82RiPGcKihsb1Ta19VCGTPe3DvQthSDojVceMBb24rXMi8B6mbUxA",
  "key13": "4WHoYEKCTMxnMqMSCQKSNT5Mihoj3qrN7KRCZr47eKepStsGhUkcGPPBpEGWgPzssY6dppVLjqwxj4YTzmrMAY6x",
  "key14": "2tRNV2EWRnRk2aXr3ffKTWwCrJeatSCE2fbr1Vna8udRoapW7hdnDeCq8Wr62FwD5KWgwMKP5YQiMe1NkLSW2dp7",
  "key15": "3mrUyyTCJr56PYG45PMK7Jd3PFqmKp9PT3KZTTRXeif8uDTEBBi3u6vfdpCzGiS3fen4EkZ2jDkHa5J2Rdb4DYba",
  "key16": "2urbe58qsYimYEBWC1arXaLeHDaWSiVNVviLTHpYdBprPrSAYJBrNLr3veGt9F8QbdSmmsBZH7NWcBRfKjG44cuV",
  "key17": "G449aYJtwuf4sDshSCsoVjW4S4dnG3QvoKdRSmz8GozxpBUpSuGbWA1TF2oSfjcrAtyYKp6XoGTRE6Zztfvu7n9",
  "key18": "4o3NQHurCsCeb76kAJ2tKvzQNQB229i7ECmGy9uVUDE3LKzv9aEd5yQWKSsyVRA8a3oaieJ8AiGn2if1dLkyJy9s",
  "key19": "4wKYFTkBtDjz9AsjDytoZKEDbm3HKx8B7s86TAr1kUawfhafu68RefJihYBi8vtxYMVPe4RCadcvaHx9476FPUEb",
  "key20": "3k8X8zpQswcYKaxydpsHHDacPsdoWcVJUGpCx8XKAxcnXTne7WVqyVA6evvm8BFNcnsAEET9Mg2tumMTXtcBemGe",
  "key21": "LJcgbkvLrKpJeuPr1ociEzKT1rzkbxyqyNQ85acnw4qHbbLHbW75mmtDo964vBaEhU2j4tozHW8VSQEs95pAY5c",
  "key22": "5L2sRjQQwEQBiJHDqc1Vc2h9cyqs1fb5LgCw3xSExcLxK34V4xvedMJY5Jt6Wvnho3b8S94serqHDYNRWv9JHuNc",
  "key23": "ioJkdcSENDKn79kG2H9HMnxLpQkyVbuS6pMEMVFo4NRoWJfsKWP98WvwupPnkSKxRmmYSv7nv7s1phFeQKcaoSu",
  "key24": "5EFDQqJBPDRkBDQbZxNggUujmVMhF3cRrtmhx6N158ssZbcTLTQxegr7QEXpdoLRrns1SRC6VtZAQmT3GR9cu1Zh",
  "key25": "2uzc2HY34Fw1GoJmFviz5XeDbiLtHJgbo5P46cz1XnApzBoBabiLE6sNBZMSzBMhWoJQ3oqKpTh1rbxqsYzXSrhE",
  "key26": "3buvbgCA8K6jr25TRXXwMm72PxyewN9zgKbuad7a17goSbwZHJEbKYNSFUFrPrKPSKQ9BPZxjL9GU3YyBXYec6i4",
  "key27": "53DwmLL8mLqN8Yk7cGjDct9pqF8DG64jCEoVHP72Y2Y65G7PxCfxFcsDNWQxuG5GWA8YtcP76TWoZ2CC9aiopbHd",
  "key28": "2D4FmffMo2MGXKqMbey1F5QgjRvhX2rzS8T8zf5UJnxucYdXzZibTAYwx79XX8WSRC7FZ2yYxV4nfRLZVSezW9mm",
  "key29": "25pPQqhmNjdC6xkVsWgsW1KNfT2AcDa1HsWsn5BsmTWc3zuXMztXyiJi5VFgMi3wTRL1wEWHChHjy9bDFzjKc5yj",
  "key30": "4y6dxkKg9aPg1n3SSesiesQbwQMsqd4t5WWvWgLggZHA45mBoPvPQHsiwFm9BaQFM4K8h1SGz11MhrRtaM6Cy3Eu",
  "key31": "Tpggj2Cjutvs3qy1QJ6TNPRU94eoGVTxuxniQB87zvk45FuEMvLE8vrjBahzQmHjGa5yZUYPN27TtHpvSiwgvCZ",
  "key32": "25Dnw7wvTDoZDRD2qQ1Z1nkGcETwibWN6Rh2yKVSvi6JtoBp5VbXVpXr21bzvAfqofDHWB6xm7c7HQxhkppGu1oe",
  "key33": "3BjdowQdcgkEVyPhvXwqg7zwTg5ZufSF6VLqMhZZFgvtWbALYyNyHiWFYXYVgEvXnXMDq7FbhCTXZMAXRrmtJkFU",
  "key34": "srzqa2ptVVzm3Chgy8Gcp2bKi3396krhuasptJERJUj9vC36tGye9kQ6DnCfgtqeiUTrnh5HH47mMCBxo2rDom8",
  "key35": "5HVEDF6qq2d66yTNebEtmjM49xr9ya4i9d8KwV3GpzFJsNiVt3CUcF5781eXoiQnebSr7cSRmztMXwYYX92awSiW",
  "key36": "64iAbxcgxbF3RV3q1d2cxqYKeG59d5VkfqCpNzkF6MhNwSs8i9M8sfvhUiZ9Wf5gujXEbAq9oh7EEDJ6EstfVYse",
  "key37": "4z2Yjf49YhY6AyGv47xh1vmoddhiZseFJUNCXQR7DpUGrCTKMumT6PUaquG4wppY4aCTcQpW1uJC4x5HKhKS97gn",
  "key38": "3EF1Db7aLQkQvnwRN3ak2EWvw2DbJQhkKXSh9eTtFGWZnEdfQ4u4MbQuzs3unWbdTE1qnuFfUd9PmzqcwqKJ45VV",
  "key39": "vohUMgRKQwxQgEXp215U8GeYkXHRyE5pZRYEF7ovPHSdtZtfcjcan6vXQww9fcWHe71PjWpcgmtxLtBTyztZsz6",
  "key40": "5VWQTB7vaF7Lx6gLpZcRwKMcnsjpPJcJdUktnz3NCU6ARWmZiVL3B79fzyNAgRajZGAQ1LhKeKz9K8Nu3niEzHwM"
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
