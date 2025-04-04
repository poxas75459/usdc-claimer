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
    "4UZKPUMrfq774V34Qb2rzVDWvMurJmnMXY8bSQRUoDkvBmj5ahJKDQYqRA5P4A6V3Awr1qiUwMqQuMr2Bzs18iMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2joiwS9zaNjsVYjtuDGAhwEwMf2eUmNy36siaAxdx2e1Zp9jh7ShLjvH86BVYi6F2t6WFR7FvytaJcSx3Vj4om2o",
  "key1": "4fDKiCxyhT9x7z89k8xfYQgEh1s9suuZ3wXZL4EEr3FRSickSEFcK7ekWVD9gyDHTtxNUqhLTTTSrNgxV6ZmSVgZ",
  "key2": "5sp48QtXHrqV2wP541xdZ67kbbEwY6KKoBj3ZukrfKUuxQ18i3wuubrg3PqVRgvwxAr7U4V37J383bVtAfzxC3H9",
  "key3": "3QXSr5xpWBGRHNJrLS5WpCXRtxK8ub6UpPWT9uTmVSKt1gJCUGtxQyVNv4K3eBp6uWCzhYFYfx4ptPfoYh9smUk6",
  "key4": "5Kjs9J9MfgMqk9SdY13tutjiL5WwXcRp9R6C66yua4jZvE1HbvYjg4TwX7CaaK3eGAz2NLS6DcUnVW1CAfmmb47c",
  "key5": "33MxwVZosu7hhpnJ2vSzds3mx4a8cGUZYHu9RmW6smdBBMpAHqQ5PpvPSRREa6xbURFidYohwKEuSt9WYbgdMmdz",
  "key6": "3uFv5sJzc1oBy4JQY5h6Zbr4G7W2M1izBYARr3dWzqYQRSwKVFLkJ7Cb89grzErG5ywUaXmpqXs9drPZZwRSYt69",
  "key7": "4XJCVdnVNm2AysvPBbs3GPY1KYuqcG1bYSo38qmdgvqaPNfbxpxa9BFDKHipkUn2xrW4HEAASUpPnbL1AaA5W1BD",
  "key8": "3wfFY2VVfoutePU9eUpUuBRpQ5VVCSwXccRTNKubta5nununkuKnKc8e5oq4KzCXhiGegUQy7dJuif6FZoActCTr",
  "key9": "5QG4ZnyXVkGxoPNtyuSCiHi4kGkZSgYHkWifjFYgVFkKvjvXnAWqzmUNQ88iVZvuxDyhumPxkjTvYpqW1MGyC2Z3",
  "key10": "3GWwwwHKChNd6gHuytuSW17DMhq89MNhJkMDQ9JpQbHtYbT3wrjkeRPxxawDXfa8gPH6HyRCgycopXj3HTm63Ccf",
  "key11": "4At2QLozfSfjUJPuP9uj252LBbmpJBCfrKG5skUL2TfsJYnnCbz7uP5UP7EmnpodBVD7KBV9yi6XcBmq5cAjd9nR",
  "key12": "64swiKDJhU7SnNyrmC19EPus6s2ps1DKBuxUK1iGujDKzvdoj8GurkB5V48L1yBhbVSS9reQaqmc9o6dNVtiwxn9",
  "key13": "5UJsJYZL7eRqaZvBa6QksSyd895TeDx15umPLDfFReBsiUCfRMhtFqgdJkH1UjmLKhVo3sEa56xTgL61nrDAKe1o",
  "key14": "56ERS5TVDRBHvgAc9vNX7dJKn8xaHj9BKWfK9b84S5poH4SnpPX4w976xv4aoSF9Xb28Endr7ckyhPtvWS6KPhhk",
  "key15": "3E8ttXEkU1iALqebrdxTsqfyajfD5EtTU36DNniWGWUCrPNPsizNfguvoLvu8tSeXGJrgBy87cRzmmU6Qeg9JUJp",
  "key16": "5ohC8BTpaa68NEKh1jqwYg93qCeFjDR5C86HZgxqDBdWQPRVKbq4V1tufDuv1ESVa5jvLYjgpBhdcURsW2u6n5sm",
  "key17": "35JRVEormyorZsoSEztcihQajaXi5oXSXXmExdi1cbQ4pBxYivmvyWvnLYm5mbvzGpuXNM7iXo3iMEWrbsS1EB17",
  "key18": "4jcrdfqGdgspaeERbuSYvsKB24QUcbTxVsQDJPgJCAdu9tqks6JVyX9SD9MfctDs6Aih8iwUMBPDKssLpH6isMFg",
  "key19": "488Qpo2sxtKExAyhYfzoiJ8FGSpNF486JUZoohYYCnkUo9Uyv8Co4VAzU281MbziLCC7VFfxcAowLqYMr27XvQBM",
  "key20": "BYGjtddLXM94qBRdLETQ9Gjjy3zYRe9wAnmNQr6yEgUp4sScn23dcKkeK7krqTF2SGt9rmupREfrqezYpDNaUqX",
  "key21": "BZRE9WFPPWi8WwB6JqYYrpKxYFCr9zoiY7Ya9kM4MhQpWN2wvUQpNiVX9tSubPMEGoc6oy6VeZ8UPpW5Xa4JqwF",
  "key22": "3Ch5cygFHxJgdiQL21uMJPe6zp1exdEzgkHGsqdNvMd3FtVvBB3Dgx6V2DsKgvbgf6H9s5YJV2wvqZ4VpKFKeCrg",
  "key23": "2M7jkpRPWTyhCef1aWJnRkoYQAsKpPbwpdy1zuJmfnmJdRgBJHCeBGxU3DwmFBPGbEBHjfTak2pfHpy6TDBt2iKU",
  "key24": "4muvpPQdwbsSvZ8wB9SbSjcF8x2dJrCwtxdLXZg71RUiQNGo726ZDjgsXKKEyrKuoWcs8RZp4dTPeXzeHnPPFoP2",
  "key25": "3Fkz99tUjyMApcWH1exnSnws6q9uguYxotY3CydpZTqzEU2SskHPzz1tThNy3PzVuJhuhzm54EB28C8s3y1PuKQW",
  "key26": "kGJ8v3Q9CkYYP1U4mYKE1pJJ4DpoYJ526bW6QVp1X9eSzrXSx5Cg3Hhz1aeCQX3XCmxPjcrVZ7bhDyZqC3xyk3v",
  "key27": "2hNxKCJP24EziLqbLDpq8dzo2RmTSKnEcDhoZtKDYtKoUZKt4DXa5fbZ4Q6KMXU1S7GRBTjeFj6HzuQYsJ1rijWg",
  "key28": "3qqfqd5urN4DXN85y9Jx2tkpKY97kiQt8PVxUeAMBkd8dgCKKTJGenMF7JHqohNnuTkTTLLizR9y8cMusEamaY5z",
  "key29": "3P4Re76s5pMbwEZV6yZFwvhZWHZfJxQtSYZchyg9WgXrGcgBWxhrXao4TRvQZN7gC33PTxWL9EsfupnWCaywrqJ5",
  "key30": "a5Xe5ebizdpRsENYcqXH3fLcwHJDqJpgmBN6jYRZNFbiuGjRBRhHX6HRSdmeSyFAZUcJTPKTf1mBfa9tP8EmTum",
  "key31": "38kV6aqNGPCDrz2PkqtUvJn1sadDCRmBiBR19HCGTUBuvmKHtrfhckEpvunRuSmAUKDifNm4cESE84zc5wzUSxDa",
  "key32": "3FcibWydUTbk4SPMPavxR1vY8tGTQ6VpoCVB4RAHuy9Ryf3EKyAsQxnoKFE4938ehg1Ai6nHDehCWBKDxxNF8sBk",
  "key33": "pGkxm8FDUrtpPQ4vMX4NWSPRk67jrceyYgXho36UWs92GS2popFd6JE7T28SGH9HRnZWbpzYY11J2QeLMESKykK",
  "key34": "dAVcRhT2SLWeiGL12ibX95sb23TRCYXT1cJcMjFhiTMihPhoALhZurdQR7qJFzj1YWEpf3ezPFrptzb3NG8CuyE",
  "key35": "5g9d3yuRQuUx8HrfrgBUigWTJqMGgRwWnHBTN1mGBbatXB8madjDgFeDQSCbXYtk1cS5TSo3BqPptHZJzuZh8zeZ",
  "key36": "5DpG3kw5BRnUhE7FMW8f555zFwNW1FzG7wkX7MTSMQKmNQW6hjsEKtx5CCcM7bweQYaeL3AtBW743KuM7qDqWY8x",
  "key37": "4AZQmcje36DnS1eyqJR9tVYRRm19t1rxo9NfNnv7q8xvm3o2h154dLeQKzGt4gV2Unt5nDJhX7yqU6QgHSL2z6vY",
  "key38": "2GYb7ghdXStbQPx4sNvk6nQRng79SqJzYmBdz6CTi13kkcjKr2jKLKhLBtLXkbDezi7ku2CcFkDsairc1Vmp1iBH",
  "key39": "hmDVtXpnq1zjJUY12SaaVEUGDEgEZiaw8zrarUfiYACwcfiGSsWYmZ1fUKtYXoMAX4LtbPvCbfrUsH1cvkyRaPM"
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
