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
    "EkkvqGpa2X8gJCj8VEc53eze8NDSUYkTJj7LDGn7tozSoT8E6H2qHpTzJ4AZVurEP8Lx35wNUu9nQ9LtnJH1rj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2emvo3fUrHShuruDcu2yYguqYJRrH2dRMPEqoYVtprMecajPEiC5PXoC9b6yAipp4NZk2NcHmvXmpF8fp1gEVTop",
  "key1": "EwTvTE9asZ6YUL3fniJo52fc1gD5mYotRuepARniKscLtKq19NdF1twbVFM19y6vcdSTK3tJy8f9k8jGREV9MXj",
  "key2": "54EkZLZrSfpKdoGAcTkAR3VYivMVPow1oebK7NzAEH2Rv8eexihzbSkGZaB3zZJGaLrfisVupVpX3W1TSofnwusv",
  "key3": "59FVwLTQPjbG1dm6sErt2WkmkSe8sX2ipxTRgJzYLbPtsyuhYR5dzsVqygkWJYK6LbkWdP9U8FBpkuYKxtZSDf3r",
  "key4": "5HrS7ZXH8mDtipnBR4JnxYdbXyG3Ko5sWrQnSUEdQNSStGGJx9nxaEKPDoovtBrHMJmthnMm1E9KyGNevZqFXS7q",
  "key5": "2Hgo5QquzR8bUdRuMi5MZBSxu4mGcdeb5XKQcFxL3UDHLu6GyKireXCVJEFs1PJ8S52DVW9zrdFvahQiafiDVJcY",
  "key6": "4ty6TFEn7EGauidJaw3Re84MyBqDEHVnmDFSiV3KtFxQmunQM7fTfjPEVYormnKWWJpp9oS5qdVUUXKnDkZE2NQ8",
  "key7": "vkcroJMEjzkKJBcGh1WjHbHN9QygMCPgt1TPg6DgJPPhuXNtU5hTzcfjwu8i9z8g5VWvYxRsFg4C1V5g1H45QaD",
  "key8": "4SJQEVcPfSq4N4Ln4YDDafPve5bEGh3dFAyvpTEJoUUnJGT77dVNGDdvcKMKWC8q95ayvwTLqLvkpCJUVkF46v7g",
  "key9": "5TdiW88NCpJnQVtT3HMSUymE6Sh43TYoV2cWxf8xaAosJLKUw56pVF23YApzyPHvYDBsNsvkDxJqxShSMQ7AfrLe",
  "key10": "QBhZisQydqAqSJkXA54jNA86n3hXFVTa2PukSWJzbp1HjyeZs16RMK3B2hey4PCRkwXCYPe9v7cuLTHUCWFH4VC",
  "key11": "3VTusqziLoNvehdVfGkenHxWyhaPUJtEyA69yfzrcYooaRwHJugkkuVjeZgiW4nkskepydZC4cNciXfAw9Pjrrin",
  "key12": "4hocnjyg5pyVUkjTB9huNUseb4wxBDCySK8mXbrYFELAA4MbTrTSpLf6aUfeBojC5KhFs28heaECdF74MBG9zDoj",
  "key13": "oZQBpWqtsFY2p2yJKdqdRozBji2eugkTybuj14mq71UraJKn5Dw74Gd7qRKYoKcdatXwX6xmixTFR7EffDuWw3u",
  "key14": "5PkwFubE8JoCMRYgM9EeJjs5s5Y3PwS4zqrDeHFGyMtBMKe53XaFiMdaHFyyGdygv59M9d5293r5ZLa2GuCZyeDj",
  "key15": "3Xy2k2QMNfMGiw2iBqv5b6S8j4zUEV5ycwCJAnwJz8aAQBwk1JhAPS8oumX5e5QSdp13zQkeH2myU6GxPzbvgSWG",
  "key16": "4orEFyUKoqwW5TcEjJD3T3zjrcBsYBtNJ7EJKSK4KhCet7ryGdivzN1koNihiLH87gpjFcG3SB2vy4E84CkgzRcr",
  "key17": "5Pf1yFDY8faQnpKnRgyFVvZzQVZeK4r8P8ZbqUbG6ewZx3psQxPxfhapiW9Trtkma56vK8xouiEfWBQmD5BkLV9Z",
  "key18": "478kG8Gs3PwiT6BL2JhwLm4ocFJUmt6W22vxRBjfSFmYRHjxyhys7cCdYr7PyZRpH9tcrXLqAmMLohKHZ8T5mmKN",
  "key19": "4nmAno7Pq1ZQAQvgcmbpVZfZ7c7e8NVycpDSF42wM9q7qqqDe9eyEw9YVpSNpcKSogLE34VtMFpPtr5jhn9mRuca",
  "key20": "2p3xDNFcsYm7LKaPgAiRb9AcnvK4tkVfJ1EKPxiNRg3AYAWqKutV8tgn4moB4eNP2XG6BYCuZgz11GCVdtfsy7H4",
  "key21": "tFNagdfcVTHFpoKKgggw5cizrhKDwh2c9YQ6pXP6H2mxTGULXtjhFEDrwtQnsgn3PXgRC18wzEc8uYn46warG2D",
  "key22": "2Kh1kFN9nUDrC5SRkeKbxNYAhww6HyL7heDo34RpUpmxpp5DJQBqg4cUMgEViTtzCg14F5PE2pCS6UYrUJKA7Nof",
  "key23": "27xdJFxd4nHxMWqhktDDFQmY3yv6ZoGbCdrHieukmWhgo9SQCR25eYVRwhxkubm5Gy7bipac2Xo2LWWvqZMs3dUQ",
  "key24": "oFkhSqaEaqWQ83CgbJgryjoAbtNhaGxmrBXkBfbtfiStD9N3oTiBQ2QNiKxYvVMYUopsMijRUbUZWQrxtq3Mpjn",
  "key25": "66gLYHakGJCqFZDffZBxUty4ASGChkSBzE6Zpjb4RT444zsFyNfARxj2TN8qLJSwCJArGJrhxAcdU1sZfu3JV39q",
  "key26": "2GKr3XPdAdwUsPfrUrRtrj6xXj7LZNiGNYxwKuv3sgvMxcNbsjnLQpEFcD5KSi5RG9pTQJEmaRHHF1Kj6KSyfuyn",
  "key27": "48TtHBfyVZc1NStWTnubDcNW9n7oCEUUvobaX6YiT6ft4PdwPALTw2TT7jfs2c3HXguxY3SS5HjUY5CcKu3YaW29",
  "key28": "24pUeumZyUC32om5RKM2r2f9r1v1anzuniY859AonVPyQsfeJJxfwTKRXuKiPFnj3mxpt7E9kmwsxusC9iAnHzjT",
  "key29": "4n3Mkj3gCRM1Wk43pU536mw58Go2S7kqEp4rQgHUmVe8kxBfVwHAYFjbkC4VjnksK9xV58kNcgNCAWjHRJeqGZxh",
  "key30": "4rAcfFmGG84Y1NEdeN7F2ebobcCrT5ksH24gonfrKRKHx4QCDh8zbngEfKoDWpnjfbv3X5kDVyXkrsT4vwqYdMu9"
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
