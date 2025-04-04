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
    "4iEbHoC6T8iUJx8BA3phBwcoHTjXVJEqeJyToizsAs6bNDqRYe5VpKyjbMLx6Yxbf5G4f2c7WrU4v9a8NfbMDGJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rVwjyunouyZs3dkVWDyBpVEiJGXkHACZQCybdsfbkctpoo4bZ6HfoCfzFXf4px9hK1saqfuN4qAbnvJqHZtXSDt",
  "key1": "2rvcAawqv1qQLVr5GQhwpaj4pV6B5VfYVbq3L3eN26Q3sHWLCVQMYBtLMMVkFoj46SqEct8GprW364Wqk3N4tXqi",
  "key2": "2XZATfx7CwhWt7XerhkfZSyrkJ8pF2G5zFcq9vC9Az2mB9x7odHW5nC9adGguh7Qki7cbkax28f5vDezv1wErikA",
  "key3": "eEfzPpxLkpE481bBGHiqGfa6VuYUMQoHTknxAP6nkgw9DAR2YuuEmEpSuTU4LGtcvMvFy1t9u8bNttdPeXw8Wqd",
  "key4": "3wGKVB4bgTQjfnXqPWRg8pwe5Jj1o6hKqQ6Qzg5dXEjD4rFNy6oZhsPj1breo5mQceBFW5iqhurXUYwj7dzFYfbE",
  "key5": "37q8YK1zxK4fHsowr7aRFoKmy7N8pVEXaskntXfDRbRBvLzo5tonL1DLzasrpV6gAPDapGvxxaqKqPaU6CzdGavD",
  "key6": "3KDpGj6G4rSDSRUKky7JesL4bxR4Zh3Jehj7Jn7mAcXhBz3UtELT8XDFYXKrSrqhBQbxu28Srtk3VRJNGakziubq",
  "key7": "4kVCsZAJWcNsjdVKUmqb553FgpoCHrWSMrQKrV3zm63fThYvib3pN413Pg4JhANDRRwL25t41ku7REWRxNUjdF3H",
  "key8": "5rduLVki68FTC9jVsBdiSWcRxd7FeQXHZj1dm736KRK9cGUjN7VNifmZkgr3nidZzXX3FeMJH18YNn3ifGhQgtsu",
  "key9": "66ABk3PWyBMaaqGxyohyw6gTu9XsDQrngUmb44mhRv3upoFV7wZXYuU43LS8JAsug75Tu867DzTDSeGuovoYxSgJ",
  "key10": "5fTt2VDx4saJG9PkNkhcD4oEBSAb4ZoyK6KkYXeN979A12NwhB6B956NzAB3ui4VuapR4QTLqg4GXPfjL5kLYQxd",
  "key11": "4XLx8fgLSQSbWtUKkaSSYybQkVGjUMMPvGFc6Maw8BkSBvQHtAkg1oLpjCn2uBuVZ14pMPXYtLxV2CjRRnMMz5gH",
  "key12": "3byu4xnXYmdcD9amSvQjgJnFdKC5tVxoCH2CmvCvLddHSfUKyLzGM5k52tjbp96486vcTTbxmKwyoyHCYZHCoMVz",
  "key13": "8QrZNXqxZFu4jfxZERQUcTkAUjsawUF5oHo1amqrqnNXJ1Me5oZW4TgC9tV88nZtxHMNuJUVHtB41xa8T3C1heF",
  "key14": "471zqaXEG6FTNNk3WJsjZu3x3NXPVnHdeBhEj4ZyAxGGuREf2nid8JHt8HYq4LWGiszYnSAmF5aSkY8jXaMCoMTD",
  "key15": "Dg6LQEhzbrevvx96uCvcLzVS7Q6KfJRzPTi82FdYnaMMTEnNBtA2z4uoU3eVii28x5GutYUVbjbi31PNH6WhBZm",
  "key16": "4njiakBPm7ggetxDY8iU84FHWWrtYfNNNvowtM7bRb5eZF5NERjJdPQyz5vFvgzhcLLTDUYN8ZUq2tVupCf46xJK",
  "key17": "56TrCZuoWp81neJT3uPTBhpW8fUbcJ9D7j1Xr3N2pKNPDrHKCTWkxjL4pHJf224yfsvX5D6NiYmYTLWGeAnXBRjn",
  "key18": "4xovURRTZkAmSvDseVPw3tDX8N8yysfQw7VQeXsPmRa9F11Dv1xVkG8JgcnJXjatfp62xsBTVTCcFATiEXVnbUvS",
  "key19": "5WTN9qeCk6PYWCH6bLHHJMjGvkagVCAZvqWqnuB7vMBnRPHkbh8KYY36WCXi2V6XkZui8sFwogrJtTdgriPnR5QZ",
  "key20": "5FnEXea15eunMj2dyng75YDgPYG63UjqTm5mxTP5Hv7yEFVEQscYiBZgGh7ecKWUCFWV9htZ3Rtivg85JFywCGur",
  "key21": "5YHEmi7gJryS88Y16MUFHTXSi4j9WV73T35vaLvEYARJrWNfmAtDUimm8qc2YSSDebp1T5gJFZC34Dhnsn6BhooZ",
  "key22": "4CpHj1mqgpoNxQvZVm6McYCVFsbjYyuZWpBrtxyFGgZU4TsbnuS5qZnYR5SxpSpvnqZvRkED1VtTG8gZ3Jcy3t3Y",
  "key23": "2uP8ycYbW3njKHqgvm7EPZfbYJYz1nRmKq8PVZ865KTuVLjYHJ8wiUJa5Zq9LUJAppuAreSbR8Ub3uTbw8vteHgT",
  "key24": "49B74AiRFi6ZJHmPAFLzHdsKopz5PKS7jZix46w8tzRf65DsMZ5WyRiyGnPEKT3XX4HcaZ5EYCoWB7kjtSqe7KCB",
  "key25": "4cxJkrYHmLG2TRmsnhjqzT3SnTCc7EdW56bSsHanX63GMpNjHwd9UAy3ta4UFxLeJ4Xpzbgj1GrAfuo7nSixd8pk",
  "key26": "544okZiLDcRt5WWjYR76ZKauuW8En9MxZu3HePxX9eqX6e3i2ZEiX7cxS3ZjWM4iRixWd3NjgiMyz7V99HmdEXFv",
  "key27": "2qQGw3ih1LQgMmUFANqfP1KLP1qq6Geo9U6ibkqMEurcP42HtbXUgUypP9zpYhtizpnJnWpkEcKn2hWaum9aYekm",
  "key28": "5grg1AtGFuhnmdcyJzJGrjr6cgmCq4A8hfZLBwMrXE44d8kqmp1G2ptmHRP7PgHhfAvMAvu9FzJoTgG3zDAtnVRV",
  "key29": "SsaoWJZ8vkmMpbuDDm1qrUcdqDsdzV5BRH2xqTGuUCBpmGjf9BkFUqB1pbr9AKWcV8xX5q859R7JCB9gRimESBu",
  "key30": "mPdSPFEMQZNYBmqrMY6pMvFeKuZ2yhytThBDk6ECiRu1R5Sw4xE1b1eDr3QYdRtxCKrGSsJeoQSGrsUarc6UaFr",
  "key31": "g8dsrSYgjntxhdoJMFEXgrfZNGD9sSwiPi7B3jqRqfhj5JD8BNA849n6tE1GDAygCVf5NWxJhW4jxhwWRhiKcCc",
  "key32": "2sTayd2dgtpffEkFy1M7ACn5oFVtZiTUEAesSuVf5nhxErL5aZ1nzggxDEdet2wSC4Nr8Yzmr4RaeA7hXxbTbfQF",
  "key33": "3VygCSyPyf1T5ReaecEn3VcTq2y5pu5XNZngLihhGZLvNxQL4dKg9dG6KnvatphhbRyLeWW4odFNhZeQPWiqBbyk",
  "key34": "2uMC8izrgKh9n1a8xzC7rJEjLEkC4FG8NYJHPy5hq1FQsuPd1wmpMf7w8wpAunpw2u9bs54yMH55Bw7PxD8NRNDe",
  "key35": "2Fbotkd9LPh6A9B27iAVXd7tHJDERGADou1iFgtMAaEtuHKg6Ku26zmcZySUvZY2KzRLbWXr6GRetbYifZUDEbnP",
  "key36": "4f7Etk3CtR16yXCksmKVJLty8KvCEzUV9V7RmCLmrr9veGyjLALRDqqUbvxwZfmn159n286wY1s1FNN2P68yAE8B",
  "key37": "FNwm3simSUe7qH4qeGpirjPepdSbbLXwvG3miHUHHAEKjVd7ZTuS8W575rDPedkAVddYkXhH589SGkby97CrmCH",
  "key38": "AGvg3Hq5KMwcLY5eZkovjLUbdfTAE1Lrv3SA1nrmMBhdR4TdawTCXkoRKcSRmXHFFrmLx5qfkCBmFNu1dZWmcCg",
  "key39": "2U26af65kVZYPZWiMJKGovFMoZ8xwtLPJ929EAW4J6Kv34q3R8L7yK7hPirqRKNpxSnMxEKRCgonPxPAWGahMQUv"
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
