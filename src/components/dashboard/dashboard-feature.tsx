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
    "2HD4QdbmHgnmDAxM4nrdLp1qKeQKKfSDFgtDFvX3YxJ4ZFHxfPeiajEdqZNeXagDBxUN78nSPFvT3DW4wvpCUhBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PY4mqfgZfrGxQDTsp5aiPign8DNaKRq9aqLr6kvfV9ns9QbQccd4cP2GHZoVJEXr5bpnJ8dB9RWGggnCckm15wS",
  "key1": "5n5XcJ1MM4uS7nqvFiLzy5TNsGk3rxu21kAE1aWHtcpUYTwKqVLHeAhDpgDyqo7Ua82cnJH8PAxXCFb8651xCd1M",
  "key2": "54DEaaSVuJj4DheBVSTn6zjwAgL6ga9Bd96vt6bJXXHQJRqCsrRYcXeTkDZjgdAqS5hK4rcqFEpHHaLAMX14mVdP",
  "key3": "2mUqnfeHufqBEW7LD6sfxCkzKZh5NDMdskUUh8VT5aGhRSVsCvz65xhhqmu55FLvLhZnEYUwox475nrX8vc1ZWRC",
  "key4": "2qg9WHFvaZUGMixJq6VwD2E6xmYbkjZJUzRGBktBHuCA2d9nsmN2zhLtV7x3AbLbaNQedp2VrAwVLoRhWHkfSkKp",
  "key5": "5tWwHzEGwCTv9nnjRuRV7Empkgwws1GkRx7Hy12yguk4B7d4H5U5w6hcjqHMeqv4HbxscKXPfZD1HJjUx8Sd6faN",
  "key6": "3vUTJwMnXyJBqr7MT84hVo6H8pjEminmFrkAKfTTCDAYqTcxoTavic9VeQgYs3B5FSWR8KFd6C2AQrNipskMtLER",
  "key7": "S249EFgNkzi9d3hTgEdcnaEd3SdYM4soUQvaFzMjqYdepGrgX2pfx5aMkX9tvMF7fzBAre6FrNDLZnLb63jGYqN",
  "key8": "4cL95cPPTNv68e4JyACpNaujzSnS6AJT2Qb5Zgao2sNKQj76TWERo5WuLnaut9Go9FsZspcvXkbnCsq9W23mEfWX",
  "key9": "3N1p3TnTFKSYM5iB4BcFTmC5cZpe8DFGzBzb4UYR9ePfgA1DbHwpAVq9wZJ6arjKzmZMB7dYQf73bhrhk1bwavhk",
  "key10": "TsN8NSH2muGHhdzYeBKpjYpsuybith6Cxmic5T4GhnBSQbVxN571iBVMDSgSYJVUipcqWQBbeb9FbDEpoCdAkRy",
  "key11": "5DCVK33vFAxVpv76u9gwBJ44Ph7uzJD6rKgbhefpuhbW7sTjK8NdN5YJLkZoUn9RBc9RsUVYsMPhZyj1zw8USd4o",
  "key12": "4iLrYBKyqA3FXpyBkRchwMJPKfi4ExkxeWGJirH4M3hewTAXVMJxDo5efXeBNUHgBpAgY4R4SvRMUuHGfB6Yxq99",
  "key13": "4FbdmDw9RB7CdR5RvCHyt7hdiGdaBizYNhMe5fEp2Xs24bgMoyhyMAxzUoLkrmVveJo2Qa81ejhCNgnvrZ8U3fDB",
  "key14": "2hPEZEW5FtAdhuvFaXEogapfyKVsj42TzGcCN2qdL348LQtychi26jjSgv1YxepCqH48Q8P3oWFXbP6f3VDmSZ7J",
  "key15": "4cumbMEerdVjWjZgCEXzkMDKjwqB3XVrDWev9DLR9FJ4WnXqSjSZhUu8jMxzmsh5vbUs8tGr88ekytCesTm42sZe",
  "key16": "5PnVsZEe2kDw3icZSDoWEspNkp8T4A987zdXKnZ9KRYf6J7r3yawKX2ahBmxdKTPRxP8V1nCN8bbVM6aJMno3CWt",
  "key17": "5VrxjkKRGfpFhpLu2HCn6o2j9ToV99Vpyjz1wQ6iuU4toY7nb9mSeJquTb3mi3967Aat6PDNDW6NEAQWhKjrK1HU",
  "key18": "5S2zrShhKdyVpGNAS6wow8eRnc1dZPVhDwyLQ4jWEvy4fFN1ghUc7uDouj6PAKUKasXTi6uneXBrMfmRsU4WsmRp",
  "key19": "3fpJGpCbGijKoHgA5tQaJkZpBUDzjxLV9CQHpxNSEBHwgDdFUKPab9bdwZ63p267otEMFgH8LDowgbSYaRs17iDe",
  "key20": "4ZUvnPxzkkXQRzgk5EABmEGhf2kSAA6kBxTKwfRKggXZydL29MxDpGAFwojRpKEmXGyQq2KvrxvpH63iPMBL57p8",
  "key21": "XWtrB3aNoPCzTU7fW3oz8sE1zZbtfpgK87mzPxEm8z12XgmtU49pdtmzKWfQdGN1yxvQrUKJVjAYhCdA8VdHwbU",
  "key22": "52MWKsVomiLByLNKybTEHqiKpQ6JNv2coEG9PoPhg3qKreREahGMLRHrivpB7jyn8DBAFzyWBDCRjYT5utjMGPKc",
  "key23": "3hQxCqdsipdUPX93jvaxjxkd5wo3nLB7tHhwS8mxpRoFoBtwMTeTDDugrEkYMZ9aodyitXuvdtrc3eWLnMnZZhy3",
  "key24": "5YXgHk42BsaYcJH9txqmQ4csS7uZB3hwuh6vxVyjZdewC7KCdKz6sG6dtWBKyiWoGExDs4K6265qYK8z1GR4MoJa",
  "key25": "5gm84i6EZjeWr334T652oPZvkHkKTg32pCaWd1qbiXnQhBDkCXiWTVWaFd9eD1R56N49NT5TErURZyf7AhCyeo3d",
  "key26": "3AS4PHrxrGPV9vh9bfceKhgRUSFZU7XfZ83NjidAfT5Hr5TfwTK8GVMmM3Feaix4KqWSFygPGUeErKrwLCBE52nh",
  "key27": "5ptxYEKabrp2UqVxwYdGY5TLBrf9yPxGS3TWtnHMrZFiAXPZxDtkyBCjMfMzSH6tWTqpxHRjHwhsHkCec3wX5ywd"
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
