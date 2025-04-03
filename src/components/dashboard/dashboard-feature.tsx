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
    "5wj6VqkgZS9gUCYyxdZTwCpKq4sQoubgSzKMwnNXQ7JRwx21yv73BrNCZdUN1dpNPNAsZLdaWoQMpjgNtaJv9WXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cLmPdp9EbdkkCEC9KjYqw5Gi8AxzTiimZ4FBszn5SRpUu5VWCgc2ZwoRGFjiK2GbEhkMJ4mbn25953Ewu6328uM",
  "key1": "VLJQjvCpxhwES4wPZsZKEHuCm2ibVTzPD7vfUtxwY3HvY4Z2wdfKtn6DEGqNbgWunATfxYGmbsE6QZsa2dujhBu",
  "key2": "3FuSzD8NRGMTPwiYt3K9UTzARo8CfGEqAoC1TrHCti5AXy3q9Xq1B4PhzqDQUrDVnMyHEZtSMEqXMq4XAy74Ds4N",
  "key3": "52NNiCQZF9qfJZfq8nAPitgRWhVWFkvwxfsCpPPsebZ9dRo7oFmyfAyxhCBYFezLmN4gmMff4h4dkBcbAVekXMZP",
  "key4": "f9uZU1EkFnkg4adicyNuhNDYfXJPHFUX93Niv9RzeQnDBewdic1muok6PP8VhwLDuepTTxsLmnCP5gi72DwjdjJ",
  "key5": "9tEhN7p5nooP2SwYmqC8jFPGvyMaMvCQtnNSicRNoGqc3pJ1wQBfJXr8jRSZbJWApkna5yPa39WmDiwMTmSFdda",
  "key6": "4ZPH1nCErEsUd2ywQDE7winxM63Jq2BoH5ETUGtLUg6UTET9Ebe5GM51adTVY8pdBzXH8r8M7gYfoYHiSad16vk4",
  "key7": "A4eP4tG7odSrkXYwMpXdAQnC2AQQohF8UJJPHiekfgWAxEFizLNK1DaUg1KEC4nue94FANU3aj5HaGvrsG3nPXB",
  "key8": "jVjtSX4YPtCdcPjN187cPeDMKoj1CFaEwqMktxKFsfXCWGY1hKigXrVYhH4gTWzAcgytvWCN7j5QkEgwXEzzarG",
  "key9": "47kC9HxXirFKw8q3RrNYib1gqrsyGbuSi4JCvPUAahUgyjjzFDgkdq2e7cauSsY3gvf3v7MuBTs9Qe7Bcpaj1kn8",
  "key10": "5fov68BuUQRh1dV6vRHwGXK72uDqQpcFTsjreUiGwW3FsGNPAUk9msxRoZj8uFU6TyEeFmwCJpAYs64MyM6tnXov",
  "key11": "2qRknr1W3W3smUscjur2rbRRb4mJH8g7d2UmtExHDDAJG5hnhmHsSFqquQy413orkHBDHLnAt9oYZamPyQUzBrhg",
  "key12": "GQd7Zpd21nyor5TYi5yUpBmY4z7KttUE7mgX8N3hdS2WUHrk7TVEJkCSBZaQh4FWc73QtURzHRML4YTr4MeLoGN",
  "key13": "5X39UsyxMLq4PdfUi9rE8sUK2wSq1y4AKdmf7REvTcsetx36Bkz3NwMrjiFb2kxynWXKMLgwniwh6W9DWaZnRHR8",
  "key14": "M6d34BLP1gXrCQUkENKrssK2Y2FMVynQfSUGKbLgFFVHvHgAta5AALDkteckHecpaCGGyJHsMsKbi7mawrr9fC1",
  "key15": "xMoffCRgW5AWRkg1rJe7vyU6vtV22ypUch9e2guD87Vkq72WKHDmD4DmbeoazWf65WnqNQZiMZJiMhUS7uReDJX",
  "key16": "HjK4qnoJ9DEr2piRy2gUiQLqTBHbJbNDPSJApnYGxvM7fwjhZTzjCjLoZxYaEHBPKmENjbf5ppi2Dqx1NDVCYED",
  "key17": "2QqMQSvRt1MAqpwTetmVyPfg3oPDyuNfntVLLvqrPWm2hFrnfrSnMEhUrK8phzTAwyhT88pcpQq5QzzD1g8642wE",
  "key18": "b4PeGkK7QcfPUx3nswzS9DCWPJALHzZB65q63C4UXnmEiWGZZdPSvfsRbbyX23wJbDrU8RzmPL7phX1EeFWLxTi",
  "key19": "5SKLWouhkTeyFkGuVNxQo1PZ6yhGQ4xmN4UxfQkLarVbPNpBgDRgjnm3DfiGK2xhiYfraR18SZhv37Fr3QWaNmTR",
  "key20": "5qu8q7fiMhBezAi58VCrzeDL2xFDgN1aVCagWFhdv8ntMSN6QRoGxXnDpoVzDPYDSnD9cV4F1z67AjmBuPiyvqwC",
  "key21": "p6UquMNKonGMsPAXhQ3bxqDeZbL8qgBpXhKBLRbgLkCTc4N8pfMZpk4eS9KZ6xH6Ry1g6Xwya4rXCYxmiZaKtiS",
  "key22": "5LBPLftxZ96ppnQUfnAjwxJ3its7cZEK4a1aBZU8CLnufeJwinMP1RUcmhQdSbwiUNxn6aYBBBmQqF3aa4Unt1DW",
  "key23": "5BsgtDzdZwqkwCuigYoKUBs7o3fkUV7BiZwkSXRB3mnwph9aGbaryefJNxED8PDbo6ifaSUFrsnbEF6xG57MvHAZ",
  "key24": "3uE236sNLmChNyNj1vLVTAMN2tm7XsMvvw1UG6iadw4N8w6xz3MgE11aE2AoL9X5FeM7TyDFuB4g11cuCvWgFGdw",
  "key25": "5J8NremnX9eE8YqH35QtinmcdkzbgZ6GoP77hoWEkweJYyJPTmmt5prGDxvRSWtXMh6xZPUrs3pobXdjin1fWqec",
  "key26": "CZiQJLUiijfezSmWHpk4TXUEbi87kRMFhcrtNWM71BpD5f5CCi52g3hTakbUx44TsiowzhrfDH1k1pxwdtJ5zSP",
  "key27": "2r99iQkK54LWV81oRjrqmKig2zpGDuA7LqBaTUWW4KZL649vAT2AoWqYBHUoCxFsbhaBzhLAP1qBdJZHmNzXV4hj",
  "key28": "5cPqqFjKTufRXPQuV7swBUUQCsuzxKURkMYTCMMvaMr9aaVRKUiPd25hd8M5qoFVo69HhGsVZunS2zPvY2Asw1VG",
  "key29": "38ydcRK1piFa3XMSVDyyHyBiqYrHez6XkmwwGrFYKbe3PYJvKfXXktVVMnnTXbeTs3RajRgpkkXmVMZSgPA7Ufmj",
  "key30": "2yECMsiBimcX8iVgXwTjZtv6yg1mVjmY235rB2ekWxLwEYmizqhiV3Yr45L4CRWPzvDtJxD2x44QZKEM2Qdtw1pb",
  "key31": "2DneNNCxH5p1ExhQrZfoTQVGdK7WosnnKdaqat7qu2pZvSNBfgSfwyazMBcKmMRKuhuebEaiNEupNSm7fopW2Bt9",
  "key32": "48jKbYm3BZTHmmDKhV63BzCtgDobts6Rx97uZnMAfFgsHt2kpdJGYv6a8aVCMvNcazeRot68zfWEs9tiqcu71tJ6",
  "key33": "3voSKPPWcH664v3ob2XMLp34Vft3SCmhX82Dz4imex3FnEnAnedy7c2LP3EF3nUXReertx7Ap5PrzJWiasE4u95n",
  "key34": "5MNSVs6WpEbUv3iFoBCasXct9v8qSPLPMhKNm8DZM11P6RfJ7PtYQxuS4nRhY28spjRTTTZg1svj3ASjCqDW5Xvs"
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
