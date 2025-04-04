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
    "3tm9sDg848GJEhAd1meBBxovGDHYuzPosPAgRhG4nkL6u6qGRybMcLGv3HbjzEXkiXAbk9PnxKBWJLQofjJwcuo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iibs8cBLwEMKRT9AZ2tayNWPUZdbDQkQouJzQ8R7KnCr25zioArrSgVaPr7kTiY3SMf1hFs6AomwJ98XwDZns2B",
  "key1": "iG6CcmxHq4ytc3g1urjeCWpedPcBjzJP1ydcndCdLoNp2H5BjnJXNcighfQAePG7j77i8MKGQXpXt3Y2vt1LMyb",
  "key2": "5zyyED8yQDQLBgG1mrgZbhtkrPycUMXR3MaDBXSf271hYUrG64FgmW3R7fJPSeKGXhHn5oeY4DsZKpipRJ64Nq1t",
  "key3": "56FpMtSCHg2s5ThJJPyByo38yhhyutVZNPYxZ5NcuftQBvuqF8wRCj1R8KQFR15D5yi4QB5XmTVq8P7usquQUEdy",
  "key4": "4sszcN7TShSuN1aT2qnV2UBDULDBkhVSrzydtQsP2Xu6yn5mAnsdauzEE71kgv9dsvnbjQyYtPzRcNaPozFj8s8i",
  "key5": "63qVYYQgo5D1g4ivWavxUb8JS4h7T252DrHKUsrAVo1vuJCXxYVoQVNPRGgYhJindPNWTEZh5BPqokvsYAaMeZS2",
  "key6": "51a2Zy85z1yFXqRu44aFB8aYMoPDAUNgU2HhTs8iHwaZp4G8QCCrzY4VS2WGhi8SDTDPHuNerPwhmca5VrfDJsaW",
  "key7": "5SSmbSx6ayhEneggibCNk6fekNSZu88ymJ1xKdNbJjYNEvPotmfVg1EUidipezNTXzHKP4fUDXSQJji5v1nUJWa6",
  "key8": "38D38cHQZfffKJgu1i3oaLtYPGqhi7gdJCesRYwLvQ98AMWSHeN3SLpqFPMuYJUWQ2CrYvrr1qXLQr8oVdP4kR5s",
  "key9": "5M3WHnsgBbhzyKEbwXSzF8yghghbDoG6NM3D9JHcUhnSogEdDzpw7vUAZFNuNH4oaU7GkSSR7jBbDhcV1GRSzHPc",
  "key10": "3Xz752BJf2p5r6yhwtF94QYxG2T7ozGuut2u88p91LSQpcDDUCpMRxYycsxbgNJKJHz4bVPmD1YJVr8SeoXogLqq",
  "key11": "3fBDcM8Cr7meLedWFbkHgFaZu42auneCtd6fwMgLBfjsmnudoUVPU3yp7dNeoNCF2oFdMZdK7YncJX1xkD9uqWjF",
  "key12": "4c4U1V1aDUJdZFgyGNC24W7Vd2DTwGfTvp4rHS3KraGSCNnC8U7mUVo9MnhsxA6XzQewtRR5aT47Q9Z2yvdqSLCc",
  "key13": "2MhXy9Ntfr7r9VpG5auxfYx2jdoZkF9k9AiR2QeW5s3oPcmJ1JjL4ZsdzK6D58dLzW756tDVU5xKdXXQv6sEDEYn",
  "key14": "2uJ4StVLLPmir7nhocPdstdAfmGszbVd6q6uNTZLTPS8ARfVw8iTuzSne1FbcC2QhMbjnv29Q8Ypcm8qGWdScqAD",
  "key15": "5igFGPjG7SXsQtwZutPMYGBUYMwE6EbkdWDT7SFL9iSUq299pcJQxgRhMgzbS2FHDGLTfDPvHSGTYTKjxTEj72cu",
  "key16": "5bND7txAGgZSDpkWjszwxCN3bspx93DXd9eCZ1bpqfVWAK9dqVV3bnkHNSdGdsKueNJbqEDRSadPfuhnqaMfWFLD",
  "key17": "56JW2ZHKYgRCg9yMgU82ECKa21VkAiDYYGgQNaSS6p5yaooqmBRkBd8zz9SwHSaLz3zZCDoqvTnirVigfHV2LySZ",
  "key18": "EcFSdgAjNmiY9N4mjERJsXK5qT1ZXv4woDNwmrxG21L1j66bh4qF2pRAvJep7qbzm7CkdW2NgXssPAZZpVj8N7p",
  "key19": "57werfMwz49SQrDnLmx2mXsCreiWoc3d5b8hLTe4EzXV4wvTwaoJWTuY2gni4GRmN9uCR3UKv9LKKWBdthf7xjc7",
  "key20": "Ew5TPCCd4Jpp8WAGGm8WD5DS58ieUrxawkJr7JpeeKQhJy9aRDyk4x8JsKLnJHjs7XUVa9cWmjqpfLkAFosAGL6",
  "key21": "543vYhXrqV1y75x1e5V6vMyybXRbaZVRaWgr7LL5X3CESAW5ySxVhK4YGamYcx1RgicrP5nd8cme8eG75iGhCSji",
  "key22": "3Z5Scxm9w54En4WAAp7eipWjyHU8kvxtPYirVic2fR68sSva4maq3Liepkg56ggAAtxSmB5Lv7NmTnZefHpf7RAw",
  "key23": "3nNGn9dvybN6L3mQzw1bMW5W55RN8uyXV3YyGsXRqD2rvtHtKEp7QXxw78xKStPcEPNbbFNWHU1LjBLybJ8mRDZt",
  "key24": "fHAr3tpPjkYFtUEh7tEqHaTM8NL4q61pPuCpAzrx6NtHHm2VyBSpoQixUTT85RpQNVZ21kiMskJYwDQrGSiCuSr",
  "key25": "5WvbxWqgjRH4iRBSMCf7osacU4F6BDbJ8JLx7pm1XWC1mKJyfHv5ZKEaqXQqMUMmxaopamGyzsyf9tp9K5ZUE9wL",
  "key26": "5m1zwEEG4KWs4MqB7MDvVpd3ppecP94nxi5ZaiSDfSBfL9YbchxzVbosXv1g6taeHQE933TCS6z25sC8237B6GcC",
  "key27": "CxjaT2DPrht5tWyCGUyhN58QxqXS3xYSrks3cCau3ebucatLiKASn7zxH8a7eDBGpjEMTLMjM65EQ2iy8UxiHwC",
  "key28": "5JSrGArq8CJX5Ag8CKbqaS9agEW4MgpchrCv9XJf3UAWT7uvVZxPpzqMnzaUN2UeJfEFdVQriHapoEJmApRC5xpq",
  "key29": "3pMmVswx3KYRBsfevxEdNUQXKJfSARCYXD2CqGWoz7Wk2W1DHok69ffDWRuUVswcCApb3HKabnXfqpS6pn4CpBJa",
  "key30": "5agx36aSy7uipGwPdjQWmdsM3Yspm8Unvw3uEjnkax4qQtMTgjTKKse6WhbUT7ey2SeEVTTuwqjRVT4LgGoHFe2F",
  "key31": "4g4XVoH9TrXzsGtBEcZUJvdLFF9rQC7o2PdJkWw7XcTP1Y1XNVBdEDqhz2gXfRAeb1BXtwqgBxpmEQg5zhqRhdX3",
  "key32": "2sYrTAucqR6zErAwvctRpJLy35omwJRDf5RKG1GdmEqSMprbEnUPwzxfd2hCXwpNK9FTf6r9gxMq82qf9d5Dp7xB",
  "key33": "3q3YrpQN6MYSCo9Z1t87k3bjCHBHN5YSwF8boVjsAYvK3wDbcweLB7X59efuFHxwgD2bfL7RjLiiU495bChQRcot",
  "key34": "3s5viA7dwoKqYDopntAakbYD33XH1UirLbWJ4K2q1ZAJFbZpDJYYEHi1TS5EYpgP6zkXyAzAvrTBJSDxLdZ5rnyH",
  "key35": "3WaunpBKDKn41N14BmHip1gWHUShPVtnfW8YC4sqDGDCHywDK3QqALvKEePye9aECdP2VTuodv7QcpPXXhRZk17n",
  "key36": "3k1v2N5tyNeenGy4z5QFQNww4x3AbTgqWYWoAfpVYq6nQZF2EBRvUrb25WCqwTNcwyBGqSpb1bkL5pkhGZqeegCZ",
  "key37": "NDHH9kAxpkCTK9amT8r16fR62j9TU3FHjeQbHNuNeicvewMr8xGLaH9vsCTYaihcRwa49w5sb4HPTFx5dMtL8mJ",
  "key38": "4NV5xEDcETAujkgnJWgfiMdxSRqzyhbASFLwJbDj3qBSYdLyMhkmnyLrwWX3yKsY9jPJdcVV8RG6bA6FWei8kE9J"
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
