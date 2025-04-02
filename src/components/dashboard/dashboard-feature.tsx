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
    "58KnPDUy1eQN6Wk8e4vfJcW4Ln17v8VeweLhXQ3CErAfLoqbFCuEDiuxGVLScHem279nWyReBgchjPyt9j2V3SSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzhtVe2czaY1sCqKQipPLpWQA23adg2e2WX5AssYQ6wfCW35wSGGj4jCbnNTK8dKnAu42imm7GDBTjVAnvioSx1",
  "key1": "5ZzepZbZVW18VvFKxKiQSGp7zPWzGzUT2memDypVnXZonhriFrWKR9FpJZU5u1cCrkuUam8Wxu9yP7xpnxCBJRPh",
  "key2": "5EGUcXsVuX83tMwi9JgNsFfL2EQi25dE3BREBMkCkvyv6s9Rd14PxMDK7cMYvuyxojed5VVtvD3Z2rQfHUHZZeMN",
  "key3": "59M9B8gnkQ75fQx461uTw91wwkfymgRXgzz8cRqxikizaxw2xzWCJNY81MAhhJdyUoVGe5mutdQb2vgVwsqrYUYC",
  "key4": "2nRArXTRcFP92fAjd5PNM7AhEcomhgdxCn3vM4qke5MFiFSkdX1gRWnfP2sKw4WCR8cEAUCkW6Ft6jt4jSeLGFRr",
  "key5": "5kPpWNdXxez8V47UiejfAv3TVrJt9ugMUZzwZpAoapZkvEQ2s6UzfrFmWA3X6mQPJZa5GVdhB7SwZgPZvBRZYXpy",
  "key6": "4wb24rAvSjQaQZ7UbBfpenBHkf5EF8cKMx5HwYmcKb28AxkGLzXwaGkuqd7YNLgvYhNYKWPYVVXLG7rhpndtPaBy",
  "key7": "3FVhQqqMHBe2D4VEy7zAKXMWVRwA4iDq65NZg2XHKyPrTBnvGRLBkR92gfiRjjbt9Afkr2X7Xoyd3cQn2sWrnuFr",
  "key8": "23PzmCxgpSMvTn7ELGtFNhDkA8Wgd8TsLcSqff2afLZMJwd1hZuF6eAHFMsnVH8xrZ9yjHDSR79AFHt1chcGsqnG",
  "key9": "5dScDvH51HyzjiEe8X4oGg3EgPwbmW5JghwHNeCC3K8oc8Wp4LUPAKyVep39GmDbkxPYJw2p7iC8fw4RcaepRzGW",
  "key10": "4PqThEuBuiTAq3NySAB9JEmRAVJcgF1oCbBjLoj7ZDqeowFvk7YNEbnDr9W9QckPURe8W9YCKzRgjLwMgXnemG1T",
  "key11": "5qK6mDb7tQuA7y2vTX3BBWTCvvU4vX3MDshHiPUJUcecCRvE8gYfaW9tx6ok5bXUNaRRWFrAUiCqU2Z6pb3o8Snx",
  "key12": "TdGCgQ9ZpJgGUipr4zFxD3xxf5Pk72GvtLwwMjJtoKDyCZ8ijBCpqXcEiaJjYfyxHgr3RLpWxE8DaR8sYnQnLUW",
  "key13": "2o5mscUVXrfvsULoSqR31uPHHfZKAqBYGV5fiN6JBGdZ2UXJjGhBp6CK22z3eS99JUaTjx15zmPPj5mGNhLQHhtX",
  "key14": "WNCE2UrFWwNKTkSwuagRY2qgoCJTbFuuoUtxQA8TT1SNRiScWDEk7wt3yjiFmpEMkHBGQFKQt1sSho2GoyWLNZy",
  "key15": "4c8PtvGuX9cuWvE83bQ1S4eDBFDGcNRtPKbKP1ApkLDSRGo3E8iuUE99stp4kFgYr1X9LXrFx8JxKUkpnYGQHSyu",
  "key16": "3phmryZ9weEV8RGx5uQq2FBq2HqBDB5K5H6CtFpv4cxiRnwP8byDiKD9LyN5wWS6LetyxT9yopxpkeeYrforKbdW",
  "key17": "3k73vJE5Xha7gncnKwBjjJdfwmY8Lkf8QUXDAYXR1QERRBaJMJ1dSrXZw2DH78BXTz76Zh7sCqPwJVqevnG79Vja",
  "key18": "TxtR28x4uY4SZ7CFM8HaCL2HNRyFJ6c8M6SpT2dFowrzUHfQVTMQMjfN5Ms4DmxmWLCRGU2FjVXH8NBKtiT3sUi",
  "key19": "2idL8AWn67aqTUQLh2zp2krfNuPUCu9eKuxL4qhREVHqoz2Gu4DJvg2mGeNu9LY8QYSSy7UN8QRVQW56HbNkpnC2",
  "key20": "4hzCNjyDSpEwWhQ8VVUtq1g83WYUzBMHJgCPbHux5i8XNTpBoKDcS4tBSrumS6cNhVwSvBjhqrbZquviJx48F4zJ",
  "key21": "636D9Tp96tWbPp65Nr24VJ3xsV4gai1fS7nTbYaPNuR5DauDZF6hHBafauMFib3V77PcPftsBBtfyhnsV1cgUwFD",
  "key22": "5KWtQ3Qy3FmAxLxB7ALTdGrJmC3GcxGDQQcyTetJQ1wveFuD6HZufqdhdGsbEtfqT7kst9fwvBhgJqFtrUG43crk",
  "key23": "2AKQk6sjtBNvis1ACHJP2TMsaru8S4QfnqeP37s4ksoF5poSQjkHXJSzJ6CJrvGucMFXZRbKpuvaUwVJUrdWacSB",
  "key24": "4iCtFqbNYDgtGa7tTwYcwnGJdTqiXrK2ukq2H29XBUijnT5QZEWYLD1o5YEWjN1CsNkm9E1xsiMamHdwoy3KkSRY",
  "key25": "56HNDZwjThLtTQLV1cV2BMySUcJm9BaAVJFf55YTzbHfCiLocfXQpogx4UGFs1Xn4L2kY1i2ho31L1Dq3cTgKCk6",
  "key26": "VAZzuXw98J1UV1ptbvxAxEc5gdQEz1XD9jc9tGamRE8LrjhxgJPZX1L8yfLuLWoQVTPqALT2sva6T2VzUppRXoe",
  "key27": "62Swbcg6FLuv4oPFKxcs8fFLNN6twnc7z1h6oMRFo534Wx77u8TjeaAWiVYSzrrL8C5SRyiYsszEygodep3ewHiF"
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
