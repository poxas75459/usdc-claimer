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
    "21kHcRMxFZ78TCgNJXLGYXJoFJLb3ZEjEhHt1o4UUUsG537ASxqLefwYJ2x6bzYm9hPCnNJ6egETqtMGCAhPpGn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tHM8P5vqU4XaT64tnREDwvtiS6s8siBDNGCQBy9YiNHVuwCi5kdijQjJH8L5QpZJouFHn4a9iCuLjy4zkqTu9f9",
  "key1": "5oUXUstpqDSXVr4bJgC8XXhSLKz3kjYSAbvDbxqF3NVByJUuUBZT9bVKuNJsS9N3qP7e3J39gnT6HnVZDMnRf1j",
  "key2": "4yhfz7Qroi3QYbc8FQ3JkC9b3ewpXpmoXjD5zYYgxEwR2KDsTN6UP8yZ3USjyPvbmJdkSGokq9gSdH5d1CaZPYQn",
  "key3": "2HmTZ32TsoPt4NYHfEDwwmr1yX4szwXrWbTh6An6abmNG7nKcmN4zNFntqCRSFEZG7Z7bC4HyPAxekDT4gdsixPG",
  "key4": "3J7P3SyZAKJUXrBLJobWgLVygA383hwhhet1oVkn6A98adu6aJt9fd2aQfqzDvCjULPKoX1pFefyqtcenZRmTtBm",
  "key5": "5HEX9SmvK1YRuRgV4HFpv4RnEevurbFbwM71N5GUGpGgcf5kwJz7dMp8SEUDJv4yFC4ycsepZt7BwU2TcYcPVYwi",
  "key6": "5KHCRenQ2QntyJmefAjhY5sfKt1vcxb76zjKubgnUCRy4PfdMSkWaTm12vvY9apLkNatpnVfEfADJ5Wr6mEwAM3N",
  "key7": "5EWEZ1fjZJEKpb2o88SeUgPsYWEszeAS2mvrCNnkJKmSGRcCyPDC2dThxXGrptC72mCymxrQrbf174Lr84mNTKMC",
  "key8": "3QpxfndU9ST7iWBrNmzJukDAtFiCYyRSTvSBETaGA5BqcNiv23eLpb1nGGfSWiiTkmE7v1BaaNdkgbhf9spXBWim",
  "key9": "4ig8Z94NRy4SmNbdB2jjpynoTp1HsDtMAkY2h77Z5dibENiaFpfofqgmae64UVShqe9KyQyMUiPHT7Uf1B9yQPpR",
  "key10": "4cvaA29j3CxKKhTRnFrazFgC3QbRNaEfWRwWhqkmzudfRN15ucJiZEJazHEpgmWmQeQB8Rp2tPnBE9GAF7fBEdRy",
  "key11": "9eHscmiM2pGNvKda4sRpP4cQfdwU3soFipGzni9ap6czhLE5HvVsP1taJwqeHXfKgEy2WiUXy2Y9Tk6zFfYpXSZ",
  "key12": "3tkUr42aSjFaKGq1d1db53LvNjZnEN9ZLNVgKaztF3AXDHWEmV6RByVd3dkSV4mK57yKe2D9KwMsWHW9p7tmtuVF",
  "key13": "51Ruj7MS3GYpM7HjNsA4j5EubaL8g9NkXBdzPpgyEz5Pff9WhWx4L4FwmaT61aig3Tbp7ktcAaFpYkQKg3NRTLUE",
  "key14": "MQnQLbs4UvARwHJhbuiqxDN8ZwdgZbFzciGFq4Udjpx8C9LFV8EJjPn1j3w1h6kivQawAZyxk1hMxzuHEnnuf2g",
  "key15": "4aECW72pMiJVLXjjCE73S4YSkD1G3eZGRaVu4dgsN75vxZF43YMCBLSjVARJnZe1ft9ZJbXEumBbnBxUXEXPqrhD",
  "key16": "5XCon9bqEZBNXG5s5ASFRLaWjFcMwhg6Yp1cQCt6QSQZxiAN8NWtR2khgqu1G5cNxo9BmymZ4KpNXXBcqmatvBFK",
  "key17": "5Dt1NuSaoZwMt1Bhh1DAB1qSYjkESRA6oTyPGiPLgybF7guHTE69uPhUhznLsv9eixjosdsWYcamuQP3EYXXCnjj",
  "key18": "5cWXHKs3bkpriEKYY61Cej4YdKoj1zKEGw8efSPfPx5c4yqnxNvdjDVwdKG7kdngQDmFRrtr3ijd9SbYEt2qGbri",
  "key19": "4MHEZ7XEPhj1cZvzr4GunFdzGowbPjyABrw5xjjpEizearRokecbwpKpvHJrM9RZiQSvnuGcEiMe8HtJGs3juJWo",
  "key20": "5zPjxLhoWpmMZZVdKVfb9tWbnR9ndkf3B3pWSyQbHLAjiTL6QA3kxwGorUJjAg7c8pC2kLXvSaXaDSxmY8jg5m3n",
  "key21": "2CXagMfVeaF2Qjdbu2wfNFbEayJH2gnhTmhdJu9hrToJXSFdzd8zpEbHjCjYkiY85cT8YSoSiQgY3XUPuWkCsaQi",
  "key22": "4tcgCQ6pcbtVrJzr8wqigZ3vYPHAbu8t6BCHzVm4iMJSrxod9n5VbxHr2WdGeugvr3QNSVAqt8NF56GBE8X7Bmf9",
  "key23": "3H8urfDTvVVRE2tuGWW64FCVuj6XWuXrGrMh6XfoXaLuevNLCtGNwjTQjUPkxzd7ZXmgoCbNiZV5TkzmzTUJpuG8",
  "key24": "3EKekKzu4SLvEANs3K2AG5eqGJzd74him5Uu7kuxTW7yg6efo6fZnSDiHBMc7PjhDLgHG8dbgjKUwYCK4F92TyUe",
  "key25": "4KtJpKxn7QuBdu52F2oDUkynrgGPtaQSwqn45RWKmrvUamFjmnou9BQ7WYjuN2Y3aDXQryiP8rRuaA11BTtbP8vx",
  "key26": "2Mew6Px8fydY34PucUouhfTC3NdH4zw6yDUvU8gKygNYpL9M2Kw2hSZop3BGv8b3LFoe8JNUn4cvxY7moAtPfHRn",
  "key27": "5rW8TLTVwGYPAJ6Udo8vA3ifqqwgTyGRtWWjLrWUhQeE393dzo3tEQE5uhpLVxbFwdk2S2NAFDB32ytWBiwrptCd",
  "key28": "5a8edqPagTqVKWd6DN1hJ5tpA7TtkHw3fFdZZ4WvmJJLZahCScvjGodne3innHsGgSJhCZ3xrDrDBF98GFZLEMfz",
  "key29": "2PVYncawqGFKFZZTHxnUJ2GxUpsXQbcfzbcPkYYh2kvryXcV1x5MeNJZiyT7bq25rTYbZHYNvGQ6eoVdKvtBEmup",
  "key30": "47jtkGDii7qPzV9vMPPuWWy17cT6oJUAKbbF4TFZ3LC892XWde6aDyKkSmC5c5i41w7D2jBUNwhhiPkf7tL87fGp",
  "key31": "3163Vz1hE2RExrEW3n78v4FzPMitZasB6qXTRVhypqDzZ1M3LLhikNWBcS846JL7somQogSwDR5SxhS9w9ZXapzF",
  "key32": "4Era2z7NtsKEfKaj9syYCrDSiGCzhcDQTh9BnExgCEHfiFP3EPpkAKWspE6Na9qrCCrndYJYS3qgWEigUEArkFqA",
  "key33": "3eQuhgN3NN3F1GfdAMMh5r1YS4J4nRbbqbwyyWwVbpsY74TfSSUT1yeLgmuXcJGZ3uQ58gDM6U8ngksFaJdqAK57",
  "key34": "2A5Pi9Y1hYgNVnUSqE3krj8mHU3MeQXjUqQWzZDdu9cZzom3h6bYxqZwGBFAtbjb89SACPHUtqYXQbtG9DnGK2zf",
  "key35": "3TkqEkj1FbkXNdVuHrBVpMjPvTSVdFpexnWUJXt3uS992fNwpvvSpNS1Er4DjWmusRoeJ2d9KnrbMMZUZXWiKdkg",
  "key36": "pKho3Y4yDe8BeBoRiUyEdtKJsgaPrRma5su537PzcJUdLpNLagDVuyJEGmV6mKRgiGe115UrxACmPfqurHdkgSH",
  "key37": "5pSz1bGc4rS4Qdqfg5WrjKJQr9AdwbJJisxJ8WQMCsiGGiKRE6NVq1Uegtp1GnQRHMjzJLvoCozkSZ999d8ce3jW",
  "key38": "SLXHa8ovbuXNwVtBQ8gaFqjYgeYJMUryj9nm1ZvjPAupTTU5n6NE3RsTF7fQpb6MyTRagm42nEVNydU2XySXpMq",
  "key39": "4fGo57mjiJurkYyAE54d51Di6HBH2nHZDkMWc2NG2EzMBRQrZ9kLmRigsW96aPdwVfkkT9AceoCXbvKbvo2Szgmq",
  "key40": "8g2YsGGy8cst5gMKHAucicFeyuehxKh9goJFS4tit8UahNvfe9kyb35LryHCdnCQnFFedcbNpXtG5gckJy2hLpe",
  "key41": "5jAjKouNh99HDnGqWYjXPVjnVzvcC9hy231UqhSy3vbJBWYAjwVAfMzuVeLbkhuJVk8JHnpfTVg4BFvZ76unbRC9",
  "key42": "PGtULizeLYGTwwudLug2Dt5k5bDcaQZxH2mB3ARdrSPBf5TYUnZNXrLysVD1QRrXk5FKQJBikQ11fMnDrrWyMVi",
  "key43": "2WXCG8yBa9k89koQBaSMH42xUfSmsbhetAySzC4ZBe9raMJXUW8cDmAWnqLxngodDDXFrWmaaaQCCu4kojjy6RVV",
  "key44": "2PURTN8tLwQy8S9SZ2mCV5yimGf2Bb1ufWzeCTQULZPQYkvrDbz4oGEy5EXqTh5Dvj5ev1BnyakTsbybuhYMRsez",
  "key45": "5kuVkWL3Yjz8ou2rSDv6aHBGisWYNLtDYtq4sahbZqGjKLR95sT3Q8f5XMqYVQuGkFhx2siPSeGNB4hgrhSHS3VQ",
  "key46": "2dw7EmsSayiC7SB2aGP46anCvP2AaxmJJa45SdVKBHM6PpgSiAqGNE9YB3orBcL8EgnL6GYCMt8mg7XSuwMVB3yC",
  "key47": "5i6N48MHJoAQFi6PGWJUwBaH3jxmon45zxK7v1EXCbw1C1hkeUsZRkeuCpd7dxMCfMsiAF6VHhimQubC97mz7Djb",
  "key48": "5reXzzMqEipZPtJFTPe6eEmkj7Hv5qCYtpTAuQmqdWxDv5Lusj95uudSpKyxgg5C7mdYocmSg8jDbRUtfy3nQeXa",
  "key49": "4k44Hd7mv6rdBVCKcbBb1akoiuDceJG6WejFihDqQsCZbBsy63kA5gGKocnqzNMxYajEDYdYARf8wtzLEvpqYDdd"
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
