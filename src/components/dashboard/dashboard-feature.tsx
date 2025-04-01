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
    "2UPzG6LjByYNvTiz6PhgUe16WcrKcUHJDeZ1upkm17ZjdV5TGYocshsACBD2Yi26XcwsdazK6PWRHWut2QzMZSdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1q2i1RNp2uhhNeuJzDMzPo6eHn8Ta6pLfhXQEW8aCrSHjFiQSnD6NDkZE85TgfD5fhEkCUCu2dy13JE3t9u8wc",
  "key1": "4dcaq8S8SaTztNLbB1LNbQhPJPGzhXP6hFAv5dJS6mGoKAj2rMRFvis4x57Qj1aCaYcwEBN1zXCG4fg7FCceGp1S",
  "key2": "2z8qqomppzfYFcFJ35RZL6ToAmMyRKfnZuCJinMfKsqV43KTn4uckWRyymBwnXesBbbQ5244T3BeP6c7o48AwiCJ",
  "key3": "3AzJbN7hP1J7godbewicvjT9f6zdvPagMNHTR9f1xwnZnZvsjWLtTGvczSyof3C4efzhfG9ibTinUW5e1MeP4qc8",
  "key4": "2sH1nrFTWt6r5pwZfSAMrU5ejNrN24jPLrnzy1YKJWwbc1dCYDBBWchaNu2dd3RmT1JCt5z93VTKunNbBqAGquKm",
  "key5": "35YJgF8g4EWVkpynJaqWWfwrS6VHG8nKiFc8jKm5BEmNPxGH3TCGZeEUvnwr51oxDqa1Qhf9Pq2ryAW6fRKAeeJr",
  "key6": "2JJcz6Y3qwfBDfWMCS88DcUZdce8ynnru24qLD4T5177UvuiK49fSGNcnxzLejveAJahqgAG4iyqtd52K7PXVFrt",
  "key7": "f5cDefgzARedcvVmTWfuuSQMScWApWGBfm1TFZZwvWxthSy8UtEqFGvbUSoYgn29SHYReb5fg6ZfK6tHxtDKDAQ",
  "key8": "4MJxvidnr2LYwhaaek9Vhz33nexDWmEuRDdg23Qbya6Yz4haJrCnsgZSaLyCdp44ojEt6M2PzRuQMJfHfEmraTRr",
  "key9": "2tB6dxpw7zSpQrEsyR4juwTtWnbfb9UjLA6qNZh9mYzNfAG4HFcET8sRiqSgfZbPTDWzgtktyRs86VB3S6CQptoq",
  "key10": "4iAH25DLdCNdJsrbWhoZHPbyMc8y4S56nxSytGCxJjZP65GsCH2vf5Yk6x21w7UZ7YycFLbLWfBqcEEoYozjqGCg",
  "key11": "5QKq7LL8fmhxndkDaNwBkSdk4rxs78yvHnnJS4cxfyUVhhtDMzq8vpwySBorN57jkAL6ZXxfkCBCKPszznoJ7L2e",
  "key12": "4JKq5jNZh2MFYQhpYtegAtTv5uWAmQCFooMFYWKgwRV4cbrehrtiZEx5SQEjkPV47N5ii3TFJfVXSHJbd9pkDXz8",
  "key13": "5zq4wFEPiFchmD4bTkbfDc4u6BFRoz2qYymLLo1DSExtF9kUERmgJtpaTkjN6dbzUS9qEcmqhKcVhogNWeSJFc4M",
  "key14": "wmFoNqjKJbzg7Ywi8Zkpq49oVui9RoefnBG6MFuJ4ergzfh2qhBRFGuPyCbMscyxoqUJektSo7xVbUm26w9oSF9",
  "key15": "2djXTmM31SBM2TGkWVT6ojaFUB4cJ1L2ma4aZRVWydfYkwYL1t5NqgVE7osujzqiqhqeBixaooQCneb6tzPDpue7",
  "key16": "4hpqRG46wtaAQAEgEVsmwHdHPeBQrtPKc6ywADVCd23iQMh9ZFB8PrjXzusMFxh5k2rodijF5XJpqezqJKfjteXu",
  "key17": "5oEXParaAvWm2ESYeLzRmtgd2aaYrVKJKzKmq8khKF5JacDnXaBzXPF8pzUMXXUwZJu7MDD9eYpvipn4BUsU54cF",
  "key18": "XGodyktykbpvQRzonAaQRz6PTHG45htB6ZKP1xmgciMYYTZAR7qXJzeJ7a4Bvk2Y5cawznKaEiDUbdvWA2ad85R",
  "key19": "36MBVxez12YUUNo32M5cEejRgBQQNRsgrgDdRyDjkds4U6h9dvV8GJQdN1TpBmNXTybhLR1Xhu5q9uWVkqU6qWJ9",
  "key20": "3pz2G542uPTBnaRpb4vfMwJQWAUpD37RK8vNqpgbdChPnqzbtivzb1t5ebfn9EjHyZ5VaDnbYrdGpEBw3Y3Szr66",
  "key21": "2RMPWWCTukoAWxFRP1koBUNnLnvDVCycuMdi2gnozuakBQUMAoQ71qdJW4cVDoBNJ1LTNyWCq7FnM68RHtTagTCi",
  "key22": "5ry7EYeMgmAE7ME6SoojcwPhhE1DjEgv4nbKUQ1RgKfFTiX8KMYH4Tq4g2KAFbaYKYrWwEZL2Shq9TtupUqzqbmU",
  "key23": "2Ea8qxxe4uhcpBDwM7URsbooPi2wptPZ6peHvdEKCUqKiF2bdzrTYEGyAmaAnYB3hvf85Ew3T1RPErSKX1LdYsYy",
  "key24": "NGu82Vz2b2A1hebzg8aXnbb8AqRMUpZrJrecfJDuk1TryyKtbYyKZCMJzgfThnT3hQkDGxZPqv9vnufqEdagXoZ",
  "key25": "3w11BqFXtn8zAryGvchfffwUY68FeuxCJCYxh46ZNdHBUzBmJPpWijzJef8sayhHVX89rxxNJ5GK8Xk8px4CYzw5",
  "key26": "Bfkog1ipX3mu6nyMubof9raRfe9bDWKvdFYg8DbxetYeLos6BV1ossm76obQb7wjS48htwvYhSUqwa5RgzQztg7",
  "key27": "52XJfeX82RG9vkSCwSYXbS32kKsC387y1Z91zs7G5NNZ7To6ceM1D5zbQ2JifBLWJTM47Dy3GQEuQ658YctFNAjG",
  "key28": "2UbymTcma4TNgAuoLgdkUYcSYmvJdgkBnrcTKESTMyNvDzgNuVZAKjttWif7zuphtrtxYyntwLEHyh6ETg3Ads7A",
  "key29": "Qp1q42pQDSPiWxtnngjoAtNuwR55PZN8Sp2KeS8r9axjv58HbaefJuKNUeLG27ETrTDWbBaGKJ3y2NVbjGS1jVt",
  "key30": "3ErPAGvS8TmADidHu2SNrcN5QfdWTRMEApfTpDmDhFZN1xJK2wfQ195xHzQuEbaUydgr4oMBRtwLRdH3caLQpfuF",
  "key31": "5B3wAUA9mqsMFWXeWVLuLzhezE11Z8q6wdscTwrAEqp8WqVMraesztPJhsoUxnpRwHtpKKDAuivGP3NsbamW3ie4",
  "key32": "3nniP7FTPLX7d8RHPjX1BMs5VCwswhvHGBHNpWSP1HyAb1rNatBxep7K17fpKgTV8KHoP92FecEPrwBb6Yi6XZG9",
  "key33": "4Sfizs274NUhXT6PzbLmd6xMGwNZM7TM4ptRdFCvq395voi2oPf8v7bowgmfqtPvzE7fxTVkLK49ZkgqgRRWw58o",
  "key34": "3qmebhGUS8yFN4MZn8qvwKUjjYtKDgcRyMLwiP6oUWRpEKsYGbcivGPQCRv1h4PsLwSyS8UFn83T69KtvMn2a6fh",
  "key35": "5mGaJAUJXbE3K3y28CQUxKcFa77QjybjtrxPtTdFzHmC7adfMvxKVWKkE3jxFSJy49TSvbqoumJxaEuTggAYuMGw"
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
