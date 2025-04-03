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
    "3DHrkHT3qnGEGqTP9sMx9PaXnBa3YiuWEfeckJjaWpurram8QHFkeax5KxRZyKRFgRUvi7Wpc9nMx3RVYAESWSYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XjUY54Aou7b1fKJhdoj5iLViESfiHJKgsYCuyNHR2dtx9UwHwvBvQVv5hRmu41Q1A7Y1Z1Pg2D8LwCkDD8NZ9fp",
  "key1": "3suVCCyB2H5pSqUzWbGUvuPgf6pcien6GJwYKCnoyJhiBBQN8PeJ8AKis62aP5YkfTYDD9LJQtJzbLGhYNz2Euu6",
  "key2": "3RLdqi5DVwEuUpSQwCGdWsWg1uFmbwuMPMP1g1dqeLKNAAr7uWaPeBM5aXsov1QitG7JQAvVgsqETCthzQjeSwhE",
  "key3": "4KGTmM7HHFZCWzCZ9deqcr4VzArtjjvbHUZFBg1qCofUnYEPGRvLC3ndHUPeffMhoTgBxb9rRrrgQf9DVcydoQF7",
  "key4": "2faecL8G5km12BN4KFJ7ffv57qRShyLhScapFMFm4AKpo7mjwxCRwBXQ4h2gbQZnxsXrQPNxnjuxDxTaKsYHhXy5",
  "key5": "4D9gPzqLamhaszz1Y7XxZCPqNyGhaAqW96oKd5TKCNA479gP3TyKGifs1ArdFHZsBBfLwKxswkT6sJgtXWRKqrUW",
  "key6": "W8MiUQRJQ7dqzG3UKJo6gi9oBnuSEPnkt15PaKRhb8BEuh8Lh8u4ADWSvVdgtmnLq97qaR1yaBV9U7TcHWyuQN9",
  "key7": "3Pxwg1ntng4dVy5PBDtgDFFteT3sq8ab7AmqSGGyFo1X5ziDd1QTaNHA6saBrDBQ8Qo6jQ4zm5yHCWvtSRgyFHGz",
  "key8": "5vmvwjBvd8rn1VA3amrCUZgEsVaT99cUtqi26qDSXjhrkBhmzL7bXEsUhX4zqUNB6qfdGRJK53Jngwy79Lacrpmw",
  "key9": "zbw3sftb1ZgP42kaRbDgdWT6PyA4FmJz3Qum6LaGHTvt7tTxC4mhckNe2SbkRizuC5tLkSkoEUo5FfSdb6qobwm",
  "key10": "2Dyjm4BYXS7L7ReGDTYfpAEok6FftMqSUq75pn1Prz4ZDDUy4HDX9zyVSK3zqvrFuvmMfz9EhncnW2kNwxDz5WTj",
  "key11": "vuucQj7NReFaAYeCKniFVTyVA2uNd1dqy1T9U4NdWkxsJ6He9Q36aaQEaAQaa4G28UpEN1ZWqVUVrDXm7swZALF",
  "key12": "5oEqZj9rqVN4m8iK5qt7CA5idKvD2e2zCKNua3cW2nkp6oCcNBmP6CBv3ZCZ19WAgRdHeFLMXS19aiH2foAJm6FE",
  "key13": "3CqzNy44SfTZ8RTqtj5yz9Njc4VSnCREhE9wkaNEHKDfJ1FHkorW6Eqgyc8JMyyVuBB81H6zJTohx7E4neFnkTu8",
  "key14": "5YqmCVX9TErXGkAGgUqitRhBaXw5Uj5FU4ijhLrek4vE6MffL66XPb8ZfZLMZJWpXwG6wcni7u4Pe7uphcr1gdPN",
  "key15": "7dc4vBvwZykmfhtMiCxymser7eWM5tYbrM7ngHaFZmGQZPbHuRhHvwdzsCAfvfjyEYnYBadWtegcyhTTJ5bVwmM",
  "key16": "3Vtq7HjWQpArAXkcZABagQsPHteJMxAwCDn5McMTZDXtv5rZG9VGQ9cz4bvab1R3NxmwQvforU9x1bP5GZy4kFBR",
  "key17": "3F2o8VauhTcUtHGm5znQ3kn9ocRpBUgfmrZ3AES7h64gnE4SwN5hunWLmFWMPuZYgxxUxAnLqh7jHH3W2XJbfvvU",
  "key18": "4G7iSXhTaZnxcGWkJ1psUNRSqHmAchYwf4tFeZ9zp3u8ggjaSsFRMXMcDfeAhMWkyDkmFmoXxEL82HPnFTfrCbKP",
  "key19": "yxsVABxYMTe1Kb1dPPkmLmEvoPLK9nuNVzBV2EAF5hohhVPSLQ1h6AFdExFwuaZBmrDN2HNhW1fcsbEhyT7Z9S3",
  "key20": "5W5b5fvx9D7ASowAan4UAxKJNhx2gBBYty1uZ459Z6cwARJzLJBxH99hVkDXn1Q6mr2Sag8CFuwZmPry6Fi2cMk1",
  "key21": "3HwfKDspthReL3nn8Q9vXhox92DSHttJ6dLd433Fm12fxyCCVo2yrsJnPqkPUXjoUrqGZ1u3Tn7QDSneekTWzn1z",
  "key22": "4QPmCHFEMuGzb8najfmkVDSZQtJJPMnC5vHKqDky4JAAVt8udwZeNPDwkV386vapaERYmE9PTkGLNrASghQ1Bwiy",
  "key23": "2GzNFM2ZcZpu6zQ7Tk2P3gqCX8UL8g5g1kRE21jH3DebZUwga3jW8DYmaqUb9KfamXp8Hi1EzMNrYnNohWEU3ghV",
  "key24": "34zi7EevQpP89iY6gZxsR1rx6qgwuc61Ag2pEjSyGmb9guCU94uToZyVa4uLaTPjZfHGcK2BBFT1Vq8CXR2YgW5N",
  "key25": "4DdDm8RrRLCskUYVeXcXcm1Nsp7upgvMAdv2dWbbUAb57CFonEbfGdUR3eQ9yWb5uDkM8MbxD6GCvuq1eXPBAP8Q",
  "key26": "3LUoLEr567jA5ZcKi1gxVntGUCQbHPXEJpcfmewsksc9J9vqy83tQXMEunpj2wqSSvj7xd7VX2txqN7CQjFA4ZtJ",
  "key27": "as1615Y4Ps7nhV1NHRYMjWJZjGGJ24sYc2m6iXkU8FhjY65hZkNW9y5PeiN9E3uJWWAX6cvv1m5Dj9srf5PcZm6",
  "key28": "gV6GsC9MDnap9Jja5h71KbBhfBGRs2WbPkdSbqCWVx2741VMmtyLeXd7gKjTbbM6PkCkaqxsprtquT3fzQJkR9N",
  "key29": "rBkVNtUwDNhEv23fpuidy9pnMrBPheu8UMqtvHs88UeEDanWeBE9cQoy7q9LQ4rgJvRbXotupsuVB2rxxCo3EBs",
  "key30": "3VHoR1b9fAedSBM32aDPqNA4P4rrqbenvQTVC8sGTJKrLmKdkMmVkkhZt8qdgvuE3UuY7H8vXkhR3Fj9GbSNRphH",
  "key31": "z3XYPqRjh45qA1JbbDTx8oL4WrjPFKbAfWSbhFqWA5X2qMtCtdk9tEyAEYfzQgrZosrSTGJ64o2pMSduV1RaxnA",
  "key32": "3aw1tnV9RFCvxpGHcwks3i6fG2WnAToSfbDuhtV2hPm2a5PnqBLN28j8GBSzpjVYonZsWwaSCMqBwiQrsmwuafkH",
  "key33": "3BGSUWBdr361BpoCpj8jz4dMat1k6v6BbecGSxkriRnaguKk8r52AmZ2D9yp9BE51VMkALYycMpGenxn2LfsEp7B",
  "key34": "2ib1T7ZqqnJb2KqgqYKkrHwfB8C2VdqkNW2fRiEitpyCccfaiVmLJsGMZCRJajQd1SwyxujpL6AmZrMZMLm9mAEx",
  "key35": "4atRozDk3bN2RAnfRKGmmqeJrRuSrKmu3Z8DtbSdouLQCoCbkaTNtmHFFd93dNTCL1gidMx5Xvd2j4vkUTFTNJ3R",
  "key36": "3DuYztmvTZGgsVpB9YopiCkDsHmaJm8LSYTWLJvqv26DutnVptHpa8c1dazjkyFCyfy47pC6yAwFbfzKhGingQKo",
  "key37": "5P8XnPhQ8XBLBmj6T33xF18NugBDqUvmBxzKJLuUZwZn9U6vu2hG7WfZGsba3Qird4LQZbAUUYCUfVz8dQTX6LDt",
  "key38": "28EiPFrsur12RLqG22zd1rueeu1UNNDHsWQtwSXELLJVnWoXe9mGrx9vtSu3YW6AxrVbkrQ8sUEScoZSCKGiZwxg"
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
