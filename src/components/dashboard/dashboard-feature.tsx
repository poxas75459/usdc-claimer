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
    "3cXSFgtmayiQCbTFRJYQQrq1wEnbauw2UHGubza6xKALss56vhkZFNcVTzk6RCx8NiGm875NDacAPYwVCKMzTTCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rFse2uuKH445CwZbH8NYfZBfTwy9oidAL7qa6aQKLFcAVgkMwHBjquXAQopr5y2Fz55S4EXuTyQZmb9spcDfdLL",
  "key1": "3TRpwZKJrbC2Rgnsr57cHsCSSapXw2FQ8d8PXqz3tfi2hsmgbkSdMqiLQhAqQJzM7CEtFnH5JEvNB3MeYj9bWPAQ",
  "key2": "zZjcciHugQ2P4LWe8tAT8BHmN6SdTQZMsQhWEhvMuennqEmGk8Z1PdYwVMPuuBRrsxHsF5pvferv7wPu6kayxke",
  "key3": "2NVVnbZf99vRyqQvzFTXC7mCv6qJ74tQ9se6EbbTgTw1UNuNVbob1QnxzzoNjPAQz7MJWnKTscMP2Kn4baWDA1Qc",
  "key4": "3pPKhGZXeVGeoabaNZWaWX3AQG37kZVfKTgRVaGK7zLWvTxBQ2tTMAAePSc2zXxSdJ9BSPSpiuqRvAewHXxyCf7J",
  "key5": "3d1yEPt4uA8BVGSdJ8AVDUgwg8Yod1ubnmaHkkWBW7TF76ZMbGbEjeHbz3zC4LWxJZhoc8kgoq2nFf7jnFLbdZTk",
  "key6": "2LE84gUohA7dscPRCc2sKZ6KYUoXyrMcBb1tebRgLRJM8q84ZH3CJj2QiisBCVPvRUHmQZT9vbJojkegHR3EfxWf",
  "key7": "5aRGW8yZRUZ9b7Ke5Yq6DyLwBqp8adowC2eiw2PLyajCJSAqE2ife4AqBrmL3N9GmzdrKfRkqoPDUiT5NFtwrjZC",
  "key8": "66hyYAV9aeLAgu93t7uSNFcK6exhLpBoUByh81y2NJMR2NXbZTcKBZfvAGuMMqVuEB2ucMfw7D28Wcr9G47Z8vz4",
  "key9": "5v5GNJs2mzzLHRAazDozoYHHqKkoLEJq6uo3V6gTcRHPz5VBr5TtM66iiCScuCpJ4g1mLrf7xGR1x4FqqLqFCppr",
  "key10": "4B9nX2TsuSiruVT5TkoLQU19VJDMEEMYBDkoG7a3287LKJWmBrHRYiGiHZHpYRB3hLN9Dmg68CdJXZVbiuzPsC7",
  "key11": "5qzDEpXByAUcJuvGiU2DCiryarrVBhetSopbskUo7xgpfNV23jMRLaVWwkjHA3k7dn9MzjEpK8CwkN9wavyTgtCu",
  "key12": "pbyAwNvnEem5zaFTUzq58q9EtySH13KxnJYRZ6zWSDHAHgYBhCwfYtQpmAMcVvp7BcNb678db5vvvHJRRq894AF",
  "key13": "49Hc62H5rZgK7b9hguf4X66J4wubvwkwY7DPxaZTSmzGaHZNkp8VVQAxBExhDcArpbjY7QtE5XBPDeu68YeJries",
  "key14": "3jsWhpkcw4SyjXjKBkFYbUHgbXWBBVSVZZNyQt8zMAi9Qu7eQKLu55aBpmPhx4CCoBrZPmXXiZUWYJbYvzHuY9C5",
  "key15": "2pggLBbbfqmqx8eX8qKMGDp86NHUZ4SntzYNw2kWJyuM5nSP78YPN398YNoVdoqHtgDfJZQGssg2r2TXXfUeWAML",
  "key16": "3UGEi6GFoxjsCdcFzikXSWyuB4DGVoS8E3v4tnV16SH6nrmzMqbs1T2tB14PELz4GjSz5FBZebn5DkKxhanbv7f6",
  "key17": "5DvZS9nmV6457wqMkh9TcenjWSYFTnb2hhhBcJyLzTeA3QwwAB8vPbidhgpkrePQWYdjbeyMGQp22sdbeXxuvqEL",
  "key18": "32FpZVzgaGQx4pVkcGxyftrPn6WrBHpHJk7CoDat5qvxUyH7PaTx3YD3csi9PzwKmvmgzKcSfMFntDzQF1zAzt5F",
  "key19": "3w9B3YPfoCxjQANUQ3kjtcbed22ARLaBXXWrAnq8RdiEMNPjuLo67pUE5xWThLRhu2abm9CWkMdMNZ81fFmH8Pq5",
  "key20": "559GZzcauzyNpazxgVsWoywQVpjhGD6tacs5CqdAzPDk8omxq9bzDG1iBWyYFhrmjEjZc5XsCg2op2Mdv7anDb4w",
  "key21": "4SaeeTbxFKS5tVtSSrWpwWXvRkpdc2bP7tFeAsX9NzGL9ddUgq9NU8ggsCEBXMm8eVyHaro4k7n7ZiXxMGqLnhht",
  "key22": "5cDJgUR5hcwLarCDACHrqRoBEBNtCE65ZMeRqzHKV5NfCth9SQ4ChhFnmJrXtjR7WuHnqwVPtGrSsQpjozYLo1Nn",
  "key23": "5S9FwbX4tZFf4go82B7EDporaiLGCjgNujsBtctoGb32Kyiz5xmRiAXTC3oCEgkwamDmGKgBp1SwQY3VRojWpGrc",
  "key24": "2ACntbC8qMXHFst5x1JyteBJTSxaAuuBdCpARq3fFpTpTUNAtqQYWSXy8xAQN4pDdidDAV21QtbHVyy93UUHLTHh",
  "key25": "r613Q1VTvQuatedzWBddqsywQjRKiimEyKCT3nUNUzWeZVVkPdLcS4c8MiqgK4xBPGcDeuhEAeFjvnHj3MLBKhS",
  "key26": "4xr14kXfdSVXjiK66ZpQtEXZQE41wh15WThfBgMaH7NHxpcx1azwgnUu6VSefemPCt27csybSyZk9Bmn69D4kz38",
  "key27": "4Pc6LUeqKwEfC7KbY77nYJfHDU6p45EBm1VVxKz4A729nvNwWd6g2RBm5sHW3C5ac5mNa8asWUVLWnDZW2tr6ref",
  "key28": "3yFTrpZ2SLMCXAMyrmSAdsQ5ibZNupQNLzycZEKuZ7RrdKwTaeu2R3QRCze3ectJw8YokdZucwRxYh4PTzLLU2Nz",
  "key29": "3XwqBkpGDbMjeY1vCNiMmSUDq5ggjbBehzWZ5U1oVidKjUUcpkXY5bHQmsNhgbre4ECPKhmmw2KFqm289CJD773f",
  "key30": "4dDs3GF43EHAcGk6nayquYgJJ9nwhdW3CQwHRHhtDYTmMT93tT2GwVKnVk8VnDZhn93ic19iBEtpqqsiyYu7kUA4",
  "key31": "GCg9cDBYQjqBEbLQszNYYmthnkNmR1bF5HG2FcVK822LkEAQVAPxUdF3BQGXCHGEfR6ffaJfooCdFFe7bC2ZftU",
  "key32": "4DApwUeGENF5ksD7cBfbQgBHTpQQzQx9AEhuAvepWQ3i9MhFbziCjdQe53M5qiSFfLMQnQkG4YFbxKztqiHtu6pN",
  "key33": "4HkSRX2tsWbZRLD8pn9HaDE3pCrZogY9CstZUnFRyGHkv8VXA9SWSLWVfWuNDTpsSaxHPqr1c4X6v3T5YZnN12QU",
  "key34": "5GQfJ8Ji2Rw91LbgBqryYFUox8atA81djAnkXAF8FJ6scCeT6HgoyRR7C99HafYLzQAxepkZo6Z8Ju3EcCPKeo2e",
  "key35": "29BzBJt3oavBEtFcV8rWchCNrPCaEkDf9yHnULzrywCGkQQMX7yrVHZKTzQ4WAVQBjPacaJmizFsq8wJdAohTLcc"
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
