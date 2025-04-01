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
    "4huBoErCAYSBjPaLSQV7vtZQa2w6C77ELEFPUzdeSdiRGFFtZX6K4omjQeWGSZGg731bu38UHEjiAUxsBXLUcey9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yx9Pxn7Pus7pRiF6BsBeDNp1xU3LPjebCfVNxZqSV6qzefPbj3YZpL26RNJ6SFyviDojgawy1A6mJkwRZ36S88e",
  "key1": "5e3v6xAevH7fiAuKdpS6S4fpnK4iXj79jQmh5wL6Qvi129n78CgKRDk5mc2gJXCMcfdv1ukNqBWEvXYWEJQYa3V3",
  "key2": "TGahDkQR9hpzEpv299RwjXA7KtQRmVUTxruwwfjVs1eQyHCcUBNonVMGYBs3gbULhST6rQxkdNBpKEx28F28F5r",
  "key3": "p7UuiiwptYZ7smK2Q4hB3zcKVPaPDQy4PkGRTLS5MTSRpGj1E6hEhqWoyVXJcGuNUG95do7MCXfFQxirWVoTD65",
  "key4": "3y6CNqBNYbH28yeKGJpQE5xmsmM5RupHP1W43W13Zb1odhRkwvC42SneCEB8wPcuj78nCrHTBCJbMXsinYuA3bpa",
  "key5": "4mgGu8bwBYFakNKQWtNuNRvrE3J7UpfPp46JxHHdi2wDt37wkoepDpk2NC99gUjSBsaHhcicL6G1VcRZJjD9petz",
  "key6": "2jffPpe9JtQRTHKSHMS2PeC42no3KjSC9peKnrfYY2RGHztgH5BwFAX1SnDge9Ba3p55cPNqTFMXCYdvHySthZEo",
  "key7": "4hmekNdYBVSb3Fo8o5xmvjQ3PoPPXV4zMHFNjUQoQts6muN9LHuMaPvCuUknMy6ThHVy1QgWkg1MVUXW828LznVe",
  "key8": "Ffy8K5EF6YTBoQWDjT3iWFJ6tZNX77Qmj8tEuvjv3fyfucc2pidiNL3pV3jB9i5AvMQjThSwk6yioFfT2yaoxET",
  "key9": "N9S8QojyW6YNWHyawrcvMiXPVGcDZiPpLAu7ByNpF3xCwQBoYf1SwNLcyaKGETnTnejNErAJdy32gBpddkggZtE",
  "key10": "4PvWivmbARwdvxYgjhHELtwVELz2RrpL6hQmeDKuoshQVnwrMZ6PgKmjFBRL3vKNUWaifg5yjBi5R9jsH3MSnUq8",
  "key11": "2pzDyrh77JyKh1VooE8SGZTUHwwYeJu3feAwhQA3a7BXcTcxELaDNUT2XDT3KxxEbjbtV5yGaaSiZ72yuUBWs2vF",
  "key12": "63SUMEt14h8Ducmg4T8YHba7iswhYDpgQVD12VG5jbRWSBigD9NvW7Mb8CxyMBcaqvAHLVDC2nb4nD7LWrcmJqnx",
  "key13": "L4HavWSRtdm8fjshzzhYTQtMKjHtEFKRwpjM61SmVzuCYR96Pw2LCApykkUttWz3HwcL9Uc1TCcZkdm53g27z4L",
  "key14": "39c6XghGmWRz3bP8rY6mbkHHSx57728d4mBbSWTbyT85D8TCpo8vgS3Zig7eLwgLh97dYwfUwvt1bUXV1K1AA549",
  "key15": "2p6no6j1ZnZ1Va1qWRDcrX9vrczTshVRucR7sgq38oVZAmrH2H5dsDK2c5fBL8NPeUEnhhEiQqrDYHfb56MdoQuk",
  "key16": "YUGkEhJPyUzEyDsbudjoSzHpS2GkbeRGhmufdiGyN9hgXFHAz7cwXmuZLwiSWEFSdGkoWzS9AFp1eiLHBm2fuF8",
  "key17": "BMDCJtQCKuWzGrF4eCa2nDMoJF38eod5aWmxf871xQLFTNRsy665cnw8UBYDRFmEAjro2wFV92XkUEZdBoH3S4i",
  "key18": "Pk5iHPSVBPR43Z1vKC9foPyvAreLDCAkze2kn6JA65TGsV8KDu1oc416UKZ259V7F4bFkWYAJhCB5HaB6yMgZEB",
  "key19": "45Zj83HqEQmY63cLntqyjxjDJisfQpYUCb2sum9pX9EVvSc7nB4YtTtk97R5Y95VrSA3DX1ujM5UDTC66ayPVrQ9",
  "key20": "V5GrEuDCkYkPsnBZgWkPx4x5xPjxfGVv5fSZnyWd6cXNjrczZeERQgxEpMnWAye5iwQyGySiuB6ZNFrd9QM9q3n",
  "key21": "ev7eXU1nCfxMQ5DjLSYWB4szENM5dXq9Y5jnZYNdbdabpk1GQpN2KzabHW3YHzAZs7gU23ULhMPzm5VZ3k5KKGs",
  "key22": "2DpPbYLuzq7HKEMkM1QpHcAmUZ4aokihLnHQbVhdoEa5UZqxLWWJk9EjLb5ynuh4V3h8hndQmJB6grEdeV1Uh49e",
  "key23": "dmJDNBxSX4VkxnbkjBmj5gciv64x4mApvFyHEtVcqaHrppSjq6ozgQq2zUTFC4iKMskAkaMAAnKbgLSag5Kgva5",
  "key24": "4Rt8KS2KvnCGh8jPQu3QJMKiX6daXZSC2y89gK79hKzBBiF9u5RAsYYy5ris1owWpbsVuq1aaGT132gRwoof8Eha",
  "key25": "3KRp7raVwkCxao5KUNT7hPCavQ98cTUx5e2nVxVkipssp16rxxXpM7nnGobnQYuLLyYBtYoMDShu3RKrdKYk3RXv",
  "key26": "4E3kALUJ6yqt5nX7mAVkMnRd4jo1NN7qvTmmAvLEQnCvDSzYb3qmX9SNiLEQRW4CQAmwhqye8LZHEtBGmZsPeoax",
  "key27": "128mRKRQcRW9pNfYiUCpF5DLsTEdoPn1DPQruwxTQ8Na3JTp4kqDArAj375YPM4dw1BD1tsApaPq2KsmL4ZEkqxH",
  "key28": "4NiTLi7W9SoZdPC9xgikU8TPzvnuzhtrwPukp4BqDHYyou1qZoX7CqPNm7QsbX5fJqJtdYtkC1PKPyoP1AdCr7E3",
  "key29": "3s2UJFTxYmHzohnC7fyPHKoXsrEunXuMsHrBe28SphaemepBPCkrp3CK9jztjXhRza6JhYK97NrvngjZvvqPzHtM",
  "key30": "4DHdMvN2khubQxrCPokiYB2mDPAgQhEhXnLLQ8tVbtDY9MN5hSewr7Um3Gcy7REo3hpUwePrUKDYMDFEByq8Gk5x",
  "key31": "bXQsi4GLxv4mam3y61Tj4d56ZVvAn3W34wX6WzXfhFs2yk3g5afiTm22NUWhEyp114guWavzs41p596ZaQEvmvo",
  "key32": "2m37USPdNv32Skf9FbKGNZ4cSsePD8LZSmM8Yiwwn6W6ooddoeC5Ds6avtRLH4cxw9R4K3ehR92Qtfwki1U7gCMA",
  "key33": "5vMkgGiqPXzNmgvKSm7Jewq9Yw4Yf1Uxshw2YSaQJFiavcguzbtMWmRL8YY84LEt8GZAnFyiGmtxPAyLAGz4ASXP",
  "key34": "3gqnKt6tbpxd5uEdzWX3btUgXNDGJU2NbVnNgCf4L36Zks6XhDCxy1tLrDesojWYLdAk7uyRy6rHs7qu1zQpcZSs",
  "key35": "5ZZRwXVoq4F2hfa4osc3gn2zaSfraNYDBokXv8qCbZz2U7vFeM9Ak5ib1zceqo7LnR8aTLzQKvK1svVCdZeeAhYj",
  "key36": "5MzMCSPoYTqfSLUQDvGRYA871Vjte8dNbB11DKKw3y1gkkPv1FG9sHkt4vwuQvXmeCvuirGdxhLrXSYFTRvuq91R"
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
