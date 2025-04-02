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
    "2bR9VqxbA3mxoL4Cr5uzDtr7LteSJ2PaA5LJcDnHVyVQuvmJgni6twSQDvczDaPqgLP8RaDGsCtmEpEfFtMiAxto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u62FJRGh3HwL7mjmTkJorw1Ls7Xp7MW8XLRKwhwfS14DJUepfkbBGbBFMHkcyUpgsVf1CBC5A4tzQanVirJg3gK",
  "key1": "5pBsskNagL6kGJYzuUMZjNuEzhqJjBqZUsd1UAuhMRWGiHyZqzRk7Dv4xVdqN3qao1Y1tQkeqoFyD4JFvbneNvR5",
  "key2": "3c2vZfBW6AELr79Cguiqhrs5RLp87RZN9uydFruBwABSW6dpBZyFzvb7QhJSujc8a85RAUXxi6ab1Zexj9wYNpKs",
  "key3": "5UkDy5d1xdjuY7mnKTNRJGA7B9YgH417qxJ1irQCcP334DNPt7cKBvo7bZL3VQXf6V2rsMZpkJo4aWEpHf34njji",
  "key4": "26U2ab98AyxUKTASSGzMMsMYzwisDkkCRfc83kUKXZhwUyoKZWLH64zfPEvivgUcWS24ZFmdKo2hf54BEX3K1bHu",
  "key5": "4C97d9m8dZDTjWFxJjGzPnBCLdK5cySctMdun9gCFzrqs59DhW1z9kmYRmY6G7pm4fLywassmk1WJHDLUrfvgz3f",
  "key6": "mrsNTLYwUx6eikA4sig7qztZV2Gm4j4QgGLYiQJR5J5LttSwBFLoq47zwCcQ6ZXjHc5sur3shaopG9APsJC7nxW",
  "key7": "2B1nx1rZw7FrRTQq3UXQTFcMDQgEJuAMFBouxDvxaz5y2UJWNdKhvZfzWYgnFN5b2mFcNoa1SGmLZCzD8KvuV6E3",
  "key8": "3JT5ZYVVNrwzHyNNzwBbt7Rd74sEjTGdTwumkZdUrv32WWFH2he1TenGbmVDWZ6H49eqAVL9vcudhyNGKJozaWsH",
  "key9": "2BrKaWJaKqm6uf97dYYrCdQ2QJmVX7PX1WwY5YedLoB6TRSByGxs6bMLuygddHjsxXVbFh9DwpzdPdN29yHWgRGu",
  "key10": "oTx4kwZVAknHND8RohjS2pibkoix1ao7raoB56QL126hecBktxVeoeuMPir2EKMyv7ypvk74ztchzSaCsBy9hTX",
  "key11": "5hxd1VLVDZr83ASCjtm3AdpvVShv89cxaeesVFUYjztP2u3imRknGDLF6PPvtAJRyYtqCVv3CWeGbFWK1rrGM2uT",
  "key12": "5i9rrLM5TSaUSsfaj84P6wSWcauzHiP1CsBFQtCWjt64amhMxtohn2o4p3EoTFeBZPNp9KWHJ5JvW35soncDmadW",
  "key13": "fpz9YSm6jQvAj7qMtJjUhkoogwMcjUujEHKsPTyB5F24VL3KSuPZxrsQFv2ETTWFEMWfDniE4gD4KV1YT7Ju3d2",
  "key14": "4pKithM5d7iNRR3udt6tDGqjyySAVNhZYro4cW3YwG3dMu77Qz13X2Z2wG669NEVHvJu4EYtnFsFpKCvYUtzjM3H",
  "key15": "5mbijDVHLoaHqpKxuhRBfE5vSPNrKvBgdYwq9MsjibLqi3w7DBAh5tTS1yFfuFcxxtMvfo89hhHKdFaXkQJcv7kr",
  "key16": "2LLUpSs9nAvrarqRCAfBaoLdjMXyo3eTxsMwVBvGCyBop3k7idpzwNjMVRnewwpRyk9bEGmPzpY9SAebpZno1RDu",
  "key17": "3sDre3RhaFDdaskhnwLHBztjc93ZvFhkZqQEMD3jyUSMqrmJekmDUt2TiwQzYBqxnQ7e5QTbCcqUF9YxJf16Xo1g",
  "key18": "4wSP4Qw8ctVH9yAJdKUuUzcxCZ4N3pq6VWkJ1HrF2Q2nJs2dcSoN3yNbE9GSu5hfQbJpc1o5poc9aZ2HwcJZ31Fa",
  "key19": "4G3tqbMWQc3CuNtc5nnM5NbbeBeBL6zUHra4b96GKn3FQJuxwc5gkieFxRKy4sjKBG9bPNtUYUQZAUiMf8BGRbpZ",
  "key20": "EAJhVTaig5AQraPNrqsbdFSBmujaHuA1WpL71J5cQWZ7rAtVKhQapg9P1Bd3BBQSjByitPXGa34FbCXUQojKMY9",
  "key21": "3nBHGqcu8ui4pzj9vjk4qsD7tz4ePdngNpsBcY7DAUhEpxuZbhkvLxTPUxJKWjo2SmYxeT8Jk8prohDWUh3ZZQzv",
  "key22": "5ZBwHSdW3QtYQaRkKpBFrsDene89cGur4VJHhgBkUQs4LJt8BPsYBigf1iHw9XJuQjjb5Wq4FsbWUyZn2bc1ESRM",
  "key23": "2ExZFL1rBzDWfmhey8sCmrDKpeVU2KCptCf2ZnncC9d9S9DgR6XWzQ68UBVz9NKJjibm2dWFcVzvK6QYWvyWxRKh",
  "key24": "4FxeDEGYqdKwUwVWHkmSeZdLBQQwLshjyhaRF6YtemvhABaZGS4KwPjaWLXagSzdxfvubenyCSNw96pVQXq77UXk",
  "key25": "3RvALsjxWWVByX9w1NAVA17VwSfc638NdDyg2guZjwjqoPXrcCssJzviNifE66AQnpAnBwtsu6mZxDdSBiGgoeWQ",
  "key26": "5q6cJy8t1Tu4nZCKGzLZwytWjpZioqUug1bSkP4gaURByuxVPMvY7QeFiqJPtgtqBSevHKp6JXx4xsnSzYoVkPES",
  "key27": "4k6pHyKpZmfN3xjLHouwkLuwgFroejJfHkSkKueycofR2ekze67Zdjk34QN97kS1sUC6dFBdWMFjofKK5uXmrV69",
  "key28": "37LVH5GbVUuDq7rGwvtKKG5p9g66kwLT8Rk2kvt9zSMjVvGfPnusbuFeCgTVa7mHWcKitJjJNAqqoo3scywdhh8k",
  "key29": "5qdZUdnWXLQhCDNjaNYSyeyRbUqTvY3MbEqL6pt1vWdGJ57jLZ5myFZwyzbE9Hdd4nPtuXtJ3XjsoyzcHfoafaNx",
  "key30": "58DX92NGB8sczNzV5gL84xZYVBnGvgKpPej8nkXaWA284Lrn3KDNUZhytvE6sTukKtiJhpYGaPJ7LWb6imPmCqmu",
  "key31": "tzLwGfNssXKGaM9t8CNskmuV8xa5Tv7sPLYtex2SoqK5mAeKD29riKzyarzi9b2gDWpGmGUuZqfMRyuqBycJ8kJ",
  "key32": "3t9xwNhLEEX3ikUVX7LszFQQ2ycBRkAksyVXis5NxoQPpBJjGBkcerfCKiWC7bGoNbNJjdB9yPaVCG9GUmLC8evd"
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
