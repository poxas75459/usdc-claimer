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
    "2Pfypgv8zCzdWD1DaDMjPt1NbruLQAT2Ujjj3fdEieLf4qw9eVwYff2rdajyFVssAXTASyc38TM4eawVq1F3eSHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtrWvG8MQkYziQ6fLn4cawmyRAGC1oXFzJRAVLsBnwioRuCvuiemNj8b8AWeV46mxTVS9MLuhKPod8HFX2te3nJ",
  "key1": "4shZSDSiRC79e94DNWpoxMHLWHkMwfdAHtujS1xRTyWefhuH7RFRjQceNfLLrgWPLfEs3oeH3xMY75UYvKYsD9DL",
  "key2": "4QLdbHonTbUufngn2xmexjZvf5qmieRBT2bSWa6hVuaLMr72JRrA2KQV7yGDonb2SP8uVid2Hqs6wjeEvXioCgYY",
  "key3": "5LvRYcQ4LcGD5AT6YWQHnFmVZL8xjay3DeTdsnaGWB3gtfHJnR5w1YPchnD1Z3RVrg7KKs58igc4WD4G3qSKedt5",
  "key4": "4iEyebhJs8GEJCgmYwZjEz9X5n9tV2d97iWUy9KcoZNreM6bDxtFpCgmux1xZoZZHK7kRJMfLqM5JTgXBgFBdec8",
  "key5": "65gvFjAoZsyrPgq2CFEXNiPiPa45P5oQ9bvRa1wongCh4QpLEQwyFPuuqX2evmyN3eU6ZHQLRQeeEaPN6Dwdz4VA",
  "key6": "5gHovL9qaMKtg2XaWvt9bA4VrvzG96q5fmHAE3bVxjqGGmZBxxCFBjFQLj66DfCmDgvZhoC6dWPJJvZ2noJxQ2pQ",
  "key7": "2Uc5VxkHJmk1juvqDb4JmBkywuzP3oPYcP5wZbss6CrCUJJR6K5MSuowgPV1PYMakq7dM5qFkukG4TvXQufu7JZY",
  "key8": "2ECbEoaT8FDDfVkfKmPzpezAk96SKqgyuKKo65DpjsqFdFXMoD2QpMd5suFuEgpzvEvSmFTpT5pA44Cb3wygMjYn",
  "key9": "3Ct3vEF2ZMP12LgZbcd6g2BroYUZK7v1SLgf1VczcCXFo3zCAkDmmMjaBasrny64t3taicCe5PJqFqtwG295y1D3",
  "key10": "o9vW8WVBhHSextANgy2a5nGSLKpvEKrZdufYEjN3k1evynWxwznB8xDQSBwHNHGaGJa9M6sb1oaD87knPzV6wR7",
  "key11": "5WnUcmpjGyeoDdy7rvWqE2PPL565NJYBwZ3g3BzKU4thiCdPEzTfgwqykEuQX9KwzaisZ5YTcbyPhzpZkskDKuFf",
  "key12": "9mNpeas74JuH939yeN2KMpirYMU628ue8D73NBfKZGq6Ca4pidLyTMDXExfVrfss4rDsMAhw6UB9nYJkbYPC7mb",
  "key13": "51Ew3DrtVxUJUrcBbE8hDvwbcb7Hcoa6XuoL6kuvLLJ2ebPG34TvwW9yofjAW77VALRzJSXK6f52rpthAS5WB8Lv",
  "key14": "4fgsmTQVwCTLPgV1gMxSMK1Ntg3C7GxRVZ3qd4rNJUCEq14a11EonJvjvtNJRn6NbHKBckehHosc986NNwJo95FT",
  "key15": "3dsGCAb3n2oMA3TtsZewd5M2mmaHQKfUN1iytros7FVU5ZfAUvBynaBURkHCu6Rj42uGS9UeVxSX1FWC8iwPkzhY",
  "key16": "SbTS4LE9aoTajgouAnVP8eF7pzYyUEtSzctPurELw28aKPmCb5mt8Lz5VVg1mW69zjKitUUGUhEGvVUMoFQryEj",
  "key17": "3vD2zXoa5WTABpTHH9ft5VyG3sXKuNJbtEqaaBdsshddNG2uejffswbRtbf4MThJCJMWsM6QMnqamCb6pvA5iBXv",
  "key18": "5iZcssve3LEypmxCUh7m41dFVFS47mRe6iA8AQGr9n7EitbQ45vXWqDj8LPTxED6cBvg6c9kB2maXo6NVdCuREV",
  "key19": "sVettkyUyywhfbUq9oW98ymYNTivGHh7yRXENST43qUQgSHGCwAD3xDRM1eKfW3Q1MH6q5PK3W62EtBVPuTwJzP",
  "key20": "5VAMAw1QNSYFn4HeQvdMPUPVq3iHSVAs7bALJpv2M5j4rGB9QcyxkqkB4B5rzsVwg7DtofeGdx2ugTsRL5V5TGEX",
  "key21": "2RBUuFSySwU2nyAjqqFSgThnKGDKJ3ebhzKG7Xt7mpZXtRSb1FkkUnATyaLQNMjwVodyaJuUdKc3zoQLWUdDP7XX",
  "key22": "4MmTCpd5aQ7wc6E9WuLkPwx8Px2dZanio2q2zx6s9yCQ3sXAdMLjYZ861hXcGotqNcZGFPzGy8kNGxMJb3EHqHJd",
  "key23": "4jxJ5DC2ek4UtFhaJhES74rJYGaBacYJJZGxYaHQgprcLMk7SAacdm1qeSsMuXbvEMoE2Y7ZtANRu8oQyh7LXkf9",
  "key24": "21g4ybAvZxzJoMscok5HdBE2j9jCXHF85vB7eudK3Wq1FyEwLB1VBfRoUEXEzWBcLTxZ6LQgtxyE4ttFVu9r5VJz"
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
