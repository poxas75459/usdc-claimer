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
    "2hgQNT2ogRh3dtqadgGXCqmFgnvDHW4UEcyNZFx5vfGhDrCg1QCHcQJ7mgUAMfqECixSHxQPgyFcNZEgvSetNpgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqtQLwRUVSwoHTms7fVMW143D3Xtr9W6dSduXtLN4sMcxb86L2jMhNi1Ly5B7mNTA6h5GNorQmMyQc8KmRYVPD7",
  "key1": "3VpNRdKiA2TuYGX57d3ND6GchrQog8wr26DfZ1CN2XsZ6nANwkZakZjE3dKuSAdk7zSdRaSL8MRN83nEwVi8dPBS",
  "key2": "2FcgSkkr7gr9gAbNPFniKWEb8BWt6Dgk5LGTCVNwq43aNWAGuChd5KtxbMrJzEkrYmWET6tihXeXJAvLJ1sW79kJ",
  "key3": "3Q6b1B6D3h61qJZLMeziJDtLyBVaVHKLwwovHyWmGh5Ms87N6Fp83fHuBARZmfPPGRMEqdTPXVp5npuWEuyVZaFy",
  "key4": "28FENpz56YDtV7N3sKJNGBvoTmB9MB11gobmsfvwKnjWLrFCdNEHZv9yuzf3nZNHDu7QWPcQeM9tLjonSr8cSpAe",
  "key5": "3gYQJkj8FEbX4jqhL7nbZoLZEh7izadNq7Kxk9yK2vgseNysRpykCxCpuiH8tGS7K1bFNBavFbw4rXwWoP7qPJFU",
  "key6": "3ZCSEw4CaaJqUSy9RmNfPcpHMTeYjwthjbSan5FEcL5AJCdiFbDt8XFRbPVozGQoEmNa6ooQ38dt9uxmSeAcdRjk",
  "key7": "2rwSeeTxkiZnujxvbFkBrQsU5t9CpWdcAmrvnhKj34scXCmb7pzadqxpJzmJSCuVHkaahKWMA6CASncZU6pMJ5H7",
  "key8": "5AkjErhRLv1ce6JLhzoWSLSGkq4S6RihTskXnk2RtVenf9sYzKe4aREPPa8KRFtLY2d2kuGcXg6PK3wGLRZhRdDN",
  "key9": "4BgBWZCMp1togRAd4zq5oowv3wcqFz7K2KpWdyvewNnZQCkoJhkZAfn97Y2bksF3VzMoNAS6B2uHYanjdDobShwU",
  "key10": "4ftt9pCfjUmMmtazxQ2V6wa4pVVWu1pvEnGKqB5eEVJ5ATDUEcM35M7WyhRg8t88iiSjLnQeQKeSCDyLFcXkEddW",
  "key11": "2pfCMscUiNUcp6dJpVzHRXmJaa4v77fn5b8osgVRkoUbqfmDEibQMyhfwAYmJwFeeFWTPEcYaWSev1en3RTmRFmK",
  "key12": "eF94AQoqDUE9BdXFo5XTJgtKsudghrmbpvdzggway1mkBuN8x252jenmoQLApCB7vVLKGfg992fTX5seTWnbPVB",
  "key13": "5LjkdNBn8v7gtNEGvd6BSk7H3oKE9rhdvYHzaPxcCMGqnHWtzYpdp8LJxTNRQ1DxxHUCqLGsbLPcSf2rcWP2C6mt",
  "key14": "542dQkdd93i9YFa965HK75b3tdA7jUaEVrihBfjnR9bmifw6QE7okTKRSFqYoBRbGYpFopb3Kjq5yyo2EbEF9H8",
  "key15": "q6v8DkMLxPvJDKdKrpDhNv7qdPNknRP76FPskww1GH3GQdWSuDMs1Tue9XyAkmVuTvxRJuH6RwE4z8nqQzpgcaT",
  "key16": "5frMoxEiGuNGJn6LY8XNyAWg7AvuEF9WSmKqqXv9ECK7iy25hB6oUrV3KFbTVuQQLwpBZEQ9ZuxuN2R1M4JCETp2",
  "key17": "2Ve2dbfKDK4FTCdCh3hSvJwQzxNt8m5it152bfQZYQs1ztEAF1CXf2jWf5r2SRxTa1ehhQKTfYWYHW2DAGpE2KCE",
  "key18": "31pBvsn3qb1PV51i14BUgKNA16NjnFjT5Gi7MKezYJdcUgJurXSkaXJZk8GECjmdBjWzwmD7L8Jh5xPrRvScPbZp",
  "key19": "5d7eYAdk7mnkc4Ho9a1b29KLDUK9RABCCT7CitA8K3CUSEAUGGfHWnJdDbxtmPE2uNVCJbiXjnzbekAwbsebZhS1",
  "key20": "46rFsQv9rxyHFYotMRbqBGWZ8TZtpdXUgKB2mqg623hvYLKfX9eKU7EVeB5KMWN2W6sGP6me9WzyzqSQabDJPvUi",
  "key21": "itjYdQ6S4jJdx8SNi8Eaj53Hp5MY17zWLhgC2rkXyZ2jbvhE9NzCvdA7B2Hoo7DminvTNbUYZTxstJxznqRPMkc",
  "key22": "rZZmCPSsBfdVNWogVc7fb158woYtzqCYWhy6kr69MTG6ReWh27iUXKL4MNYbNvFZCsaJA1tiNHFkHh8qCXuAiF1",
  "key23": "34YcxJpKxaWSHJ1yRgLGVrQNEVkrb6suoXJhH8gnmJT58t91oHDebz1YCsvGxKM4uZq7dfhKKFaxqawXgX4g2nRa",
  "key24": "2UHpFbSScVdPhCD8FVQcbiQmS6AM9euagjqBAJKETTkrQFpeYQqnD3ZgyDGQsnUsWzRcm3SZkpS2CKzMP6rzkWQr",
  "key25": "Z6koNWRUhqFkWgi1MRMfdbNjcJod6cqxW2ciodZh3FtcTdaFRncz8k2py99c8mDUiPrX8fWyd1TdNProvP8YUMZ",
  "key26": "5ZyzTDbaKgTfsMds4jMmZMzCVGBhnVcUejL6Kovy32CVHMuHWA9NPNBNGM5NT5bqcdh1Y5RYNdq5hq8UGk6nevmN",
  "key27": "fZMi4Vcpggox1vH6MJUZqBKZeZR7NAR86dCWshYyjseyXqcissrzWovzFQfrG3ma7JpekxkjQPZLBHNjuSLGtDA",
  "key28": "L6j8BK1RfjtXDu1HGEM4WgDTAh3ec1SwyTvRDPFzudTNTpUCHueCbAd4txgpVoPTPpXE9cKobPmPf3s2wKVub9p",
  "key29": "314rKJhPCrdeGGDuGSq3xf5kLEjA5FwVULcf79zUsLJVkR9bW2P2JGZuYUPjX1mCbzTKjoHr7dZEJkwKu3u68q3x",
  "key30": "3LQ4FqnfHiyXBUTEB4nsUwcRh3zCYp1q97UzUzYtNsWBNLxvLV2XfFPG7Z2yEApMUx1okwNW9qeDwK9STJFejU1k",
  "key31": "2UeXJXfruWUsm3sXPfU3WKevypBTBMLUz76FwpjwmoMBHFtoCz2wKmWSqZNVwSUeZyif9wuSQQkoc4a8FFDvnYKx",
  "key32": "24FhMYcuXxhJZsaQ9aHTsWTe6HSunSbxC35sZAmyGfUGoQQW7k55GKyFjXKHo1odbtX2989YGoAar3QS1UxA1etu"
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
