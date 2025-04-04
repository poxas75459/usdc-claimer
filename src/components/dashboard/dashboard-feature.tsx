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
    "PbpYEjgEunasGMNgojnb7CLiiuFquz1DHuMneAkjEMPLYM4tKbPHzaZUwcn7ahydD6H1xTTT6ScW3xCcmfe8MNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihkgUj46k2WmWQZxJbq4MuENZLDxyKNciabSk76aeRGeQFA3ji55PDC9Hf3zVE9WMsQx2sX5YihWCWN9SNGfybQ",
  "key1": "4M3dxvx7nGeE1B9ZyPSEqZwbgP6ezpi7XTiQHi4cRMbqwZt9HsEWdPSWtT4ZVb95EsQYSbnGT61NHRWZ5gqfxeUg",
  "key2": "34r7JsiPV4C1fERqjND9ZyrM953zzWn3TiRgD6TT8UzvZ75LtV61i6ABVWeqg6CAUaFyALmqUiz3TXbbiogJJobU",
  "key3": "NB8tJQKVK8M2sryVq1SiQvbBcaz5T6jkKXgD1PczwcfaU5oMgi1bAdPTrzYDDqTf1uAQPAb3TKGbQrnuyyLnhGw",
  "key4": "2HZCjJi4dg4sr989djL7bMoMfmAMRvEbWcJpntr6UN6urwRBHPmJrabLEBfCHZBx3us47BfajUuN6VcxcsMN1Agu",
  "key5": "umHbuWLdWeqvAePQnqRaGGzrCEJFZ5SsCQXGWK6y8ZYkmySQTLDJQLBgrsn6EzcERFVMfB1ACnwek4AM5Tfk8oQ",
  "key6": "ifi4TTDizstVyNaVA9ViwqQM5XGgdddY1cycygqfVDPPKwZWvYccQbQzGhzTt34GJZf66Gw2PwtMSfQ1Lg1SVgF",
  "key7": "Ap22BVcsMnWTAgsEBKH152Bi21UokzqzsgSPZ6tnsuxUwWSUHLQsf8m3RnwKMsji8YkNsGuSxs6BQP2kEYEWiDD",
  "key8": "5prtrtNZRzRJB6mvuTxGbp9XrLt89ss8jhHYEGmX5JKkfz6s81UtooKqPqARktPiaL5idJ5Y45Kj5NbutTE7WzA5",
  "key9": "2YCzAPBberVjSVx4M4iVrF9usmVGmZiroqq3Uacfpaak5riwuYb5cGQ4973sVyE6VH2trMDbf5NZVYnPn3tz5Rfy",
  "key10": "3LHguqrYWNPZiamyx3WBtkAPPwjaVKMLkqbLbsNRViTCfmRgr3qxKcxVeL7oDBhA1ezrhmYFVUzJiTCThjzHCmZM",
  "key11": "4jsid3kP8rFSCwTdaW4PDxzvAq9vELWqJgfmN3GtFtpfaYdj8WTZSYD6TEGVV8ZweUgL6yanjvWcifDuSvkzGHe7",
  "key12": "4d2Pth76yc6Y416628Y3tTs1Gb1dSZYsyp9rnrTrYWxTNtrKJR6RJQS6JGQMifDNipb3XqoFpRuB4CTyGr4M2JcX",
  "key13": "2Z9wUEjUWmMYc2q6r3JvyARZ7zVhiChqwhecNGu7Kt7FLuT96dBRfpKLfoG6KAGxoZum6pxfvU3PcuoGuHsaiEAr",
  "key14": "2HiSbfvLwSEpv7V8tPEkPzRFShMU3YPagKdmLwFVMsPh5gizpPmG5MiAnVR44MJiBuryY3mmk9zibfRv2f7LD5Cs",
  "key15": "5HeQj7J4fWrBjZ3xvk3jySYiPowX2kmt6wGbjaJnZ69UEXZq3qPKFWRpzQpsXmuyqqMu6FeM4TncKvgSakKUCNyd",
  "key16": "4VpnHwHnRk5rW8v6ZGG78Tvq8xWnTWagVfXWiHisuGAqHBD82faXjqZv8VmMMTuuxhJBuwRR8vxdPcxduWwMnr6a",
  "key17": "2R6NtiAh6n6LSkL1NDQQ8WzxMYSep9GBGqsAVL9cQYpSPXZxoasqTy9gYgG1p4vddKUFRbY96W8fVyDfBAGPMGqD",
  "key18": "fgPrJWbYYH5oofJ6Kuhc61f2pUNGMCLjSGhhGDiZ5cY5uY6VSRit8HSLut3VeL8jJcirjaQDB8a55XTS3MLQE1E",
  "key19": "kjzopDbNFGaNduWA8qkHEPChHQXp7AZUsvPwd8Cs78JDQtQbYtLCWZYmoHtfAvqeB1yyuD6hDwGf31XwgyWEvkY",
  "key20": "2uENZyu9VcVQGjhNaFzufKxsJ14JwRqS7CP99Ze6sia8qk1Vv88vEa13pDBj2A7FXDV4Enx7LPpsdzSST8JNN6kn",
  "key21": "5qmNG6ySdTquSzwkwK9LWFiY6ibFjcmEfsqUHSrLskCbwCaDKNZvJBnxECzHz7HpQAhDFg7fXx37iVJ4gAJjVq7g",
  "key22": "2XU298QRcoWPPsYQ2aN5dqfAMDVkLdPgnHNvi9FyQNNskbBjaquLerW5J6ebEwDA9zWbg5zE1zZx2TjSpQZEpsMS",
  "key23": "2vtHqtDHZmrYswANXdEiRtJnujjC3u7gkjUZef4aqteUvqfkoHH71KdUXEQ9EvKJ8FzbePqVPj23fRMuRs8noBmf",
  "key24": "ovojbTznFABNiM6A9xBq5Rd6VmKYoMDZhxW8zXDNyFAYVD7F1behrkSvQtETUngechbmxcv1sZcyXyNxSxW5xyH",
  "key25": "25dPgHNpCJ7JwEizHLutFdDjXz9ErffaGfwNUw6LFWoQVdUwYtD1RH5a5A5RadqdeMM9heyueixhcwZFUwGdBiha",
  "key26": "4r5XcX8eAD6SKwDxozigwwDXVJE7Yg2ci9JdmV6AmFM3kuGrQz8qehPUB6kmxm3H7Ddj9oLwAoeXSaXYVo5WZfMy",
  "key27": "67YRUCgocn8riTFza2avKDrxQ1NfyYyuPRUB7cYAnDbZ4WjHF5ovL6m2CiegSnBak5Wj7Jsq9Akr6NPytNfN66qF",
  "key28": "4JgSnhEKEQ4QXogKM3ntsgawvUznz7RkbboaG9Eu9E7BLyBm2XBvJE6sSzWEetqQ2kY9qojKvPEPFLzR6qNid8iz",
  "key29": "3JKcsxRcgo8aehxxSPkg7C8eyuZVwYVE7nQw2ADUcskvW8pN8Hs3zJWPqbsj3stLoDypJwQMgQ7YfQYgCzUrDy1u",
  "key30": "35JnraKAfQT7BLn6cZ3g3iAGBr5zfcXR4Gyf8psjXUEpGomfsnsLqyNWR665AL6joe3XgbmS1XVsuSJWesJN1d7L",
  "key31": "3o8m5WDJKBPzRB4EU1TuQLsAC3aN3vXZ6tn4AVWN2sUiTnwRDfyyYUYZZr9vrENW6gsuUo7pMoj8jmuJ1B6qBBMG",
  "key32": "5KQPbiZ2HvULtatMQ7JBQ1jzrVFoFQhRm24Dj4y7NmNs53Xzjs2RPh9efEXLe8naSodwaYCBkGeu3gmefWiWW9qA",
  "key33": "2wdKmM5wHYFbeP37EvYTHnQJFmS5cVMF2ypNMTCeKq8wTGGfjmHEc63MFHhg4v6bWBCUM4DwsZ2MuhprJJy8A2Xr",
  "key34": "2nJPa3mjaAdq6RUkFdUw7rzQVjPcBGWu88JxNLWDYkJnwErDE3wSj59wQGw6h7RZyFidgUBGqcfTMvKWGydC94nb",
  "key35": "3cMm7y3uzfewFDLwu2grHz6Qpdw3kTHzLFkTLkKL4aE4KA5PctqKDNX1aLYGsgLxJfATkw2cbRYxsiLmVhDcz26c",
  "key36": "52bTPEcmCE1Q21kgpvmFC58pg7UtbK6osJ7LGnPaGwnLKGNngbZMps9PXwDicPQFULE9Y3utLPFpdpJWELUeYab5",
  "key37": "3Dg4TVzRtZziRL9FxAxcKicWivQ2BKMnPMMtUcpEYtHrZY1cnbC1mYEm1P1D7P1SjR6Lm21AJEaaxN7gZARNFBcv",
  "key38": "5hQnYZ5Wu3d4Kj2tnskckuHxtqyFKpqf186U4DMGVQSPsJMtGCYPRVL1hqSSHskGKzvhn31ZLA4TpaNy2PdntbN6",
  "key39": "3kSQ6udEqzAP2bscYWQGkF3GhYVSKHZ5ZaYwjvDfvXdXkgJfnSqXKmLZH7ha2uGuMZBPCUwnUNoiyj22yLwCcFsc",
  "key40": "2Eu9R4suVLuqKYJ5PvSwBcDmQzgfgD7eb8DDhXu384kBxNP8BG9qhpRcKkEe2UwgxeqAoNrKdwpdWscqKoTvGakf",
  "key41": "rp7iEdcD7YLj6bEDjurAVfMX5msw7eJmjqvpAYbCmXy4LXb1ojzbyCv1WhFnftdPZxLaoUBpe1eBWiR58bCePhm",
  "key42": "5VFwr1tDfMRmQqut8kum78PHwAxXhxTFeSEV3JP6sf6XMpELAxFHbHXzmCZwxegjGrj8iNjNPMoRwoT9r8WCqFH8",
  "key43": "2cpFKqRE9CK516j33wkq4GwQy3XejZdHZ7wiPQ6yVALA1LHQNoz8APxTrE9ZJkayCbK8577TBHfNYQ8d5PFdAnLm",
  "key44": "4MHosWZ4emQ8HkiQ6NFYx5nKu1Ju79XtdNgCkMT5RRrWR1NtiNDFCCeCHHxLnBZQg2kf7rH1hwS4Gb468Ht4YWuW",
  "key45": "2uysUK5cTcZaiBxVe4NDRurALpBkCTcx9nghT5CBYMQnBkuUFKK5bf3b6bJc2YWRP7VArEFuawnKie9P6Wycv5T2",
  "key46": "5KkGUUxpzFkFK7kuiswsionLsqzdHDPEdVeBNiEPPBrF1wKKZf9UvWbLwiPxCZy6swC1dwRb9mnSUJPiwh7qMWUA",
  "key47": "34PpinHFvSQmkNxKiuYjhDgDKdBbZLjSVUzAHBPNUTN7xCVp3YBxM22h3zgYPhigKErJWpkyAEyWqs5vTr14K3Q7",
  "key48": "4MYCjKG9xYaS6MruHwBRR29PkiLN1vaDj9v16w2dsps8VS5ouWZ7gFYurzm61s9rb8hWjuBanP69suZtCzoVTDzt",
  "key49": "4adpwyJihwzB5cPi4z4LYwcd1G6En7pxd8tdLV9i6SLnzZRTeTo82FG8nonZgFh6Waa4ZRGyW8oAKCzVjrJwydb8"
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
