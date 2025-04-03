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
    "3PNUTpqUVYjpjJzo4HHEXhbdeD8Wr7WjkrQtKJopvRZx4ar412HoCtGjGn3RpVC5EXB2i9zCVw74ah7tZ4wB4E85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdGzYZMKtYiLjuuHxN7TrKyzVos88Cg5tz7ZivqPRFFtfTRnSnkizruUUa7RHoQoWxnfzCUcS19F35QrspN6qxy",
  "key1": "2bxwrYnsVaTsF7q8j5TfRFyG9NB9JbFDYwZJMpSLa6pCtYWPxGDxxEH3AWQ2SJx3PrYUu6oZuGj7XdavFhxqaE1D",
  "key2": "4LWEujW7MVT37wdEHxKmawvoJxJUGUJzi2hU6sfPFxUAVBxHAZ3C6ePygB6CX3gt6KGkNHYkKLHaEdzwaheZ2cLh",
  "key3": "4NhXttihZzwceXPkEegHnrz5svJ3yJUpVb83EKF8RY5TuPQYZo6LnD7dx4N9F1hetzdQ2apDhqqcvYj9j1Fszj8T",
  "key4": "eqKDiRjoU3hHuPfEM35he7JgAn29CtCFUpYorpd79Dm3PmJepwPRXw1yvGVU2VkrJVnGK9CLGvedGx85BJ4Vawd",
  "key5": "44VRmrFtEuuoZUdBnPYwi9f3TiULkmF1WNWN2JkfrS2X39zPYrXkvFmGCYYaTwHwfzmvjTUtuJzEHyGwKKYk1pGB",
  "key6": "38JdVH4csxWYQPMzWe8nmQkiTgzV5aRg8XhH69bdrgdNdiaka9FzKkdWNUuvguU8RbdTHQYgFqjjnGrP9p9CVNxv",
  "key7": "28PoHf2f83fJiL1vUcRopAvbdXkm7UVURkSrrzJYm3ah3SudEnSvtXwLesBstB1jLi6sMrxknwoa6ZUD11wWuPsr",
  "key8": "4x2cbEfzKAsccdSWp1rZZjKtysUzzPvRWjT7eGsp5iD1iktaijwwx1m4S4YY9jTmWYEaY6bV4yGwtTUWAcFv4X81",
  "key9": "2jinc2mvbbnkbg5CncCD66M4PfA6woTgaFDc7muqoo9bFqx7H3NezXvoaj5nBUuVfu3zy2wwJ9cYGKU1ubMWypGk",
  "key10": "4M8mDVJ5sFazULbzRX3vGDAkhkyUTyVhz96y3VZCTrUfsgGLyADUnH1xP5nrZaq5KqZ3KbVyBhysoD3h9zCsRA2G",
  "key11": "2EeCWqDiWtHWWvUWNBNVtk82Yvjvk7sQHbov6nVCthhjGdDBhcZ6Y5PL5EXjNC7UvMc2tFTR7SRPn325buTgtAXo",
  "key12": "5FgiqvmVapFzgKMgpEgwGjH5gGLJrhYxUKZ84KaKRg9gabueUvWi9PXU4Hn8N22suaa9rsF1SymPrZi2mf2qKkrp",
  "key13": "7448yTAhJrUQwk2SVYBqqy7hKQtcwhkmroq3byeBanW58QJ8GjMhfB3bJS3RoEnQhYrcHMDHwH61D3UYcQ4H1uL",
  "key14": "4pfdJdXMR4VSK4v5MGFebGcnH5EiHuJoa54N9h2gyxyHe8i5pzNxVLiwtCPkJhoP49bCLErHufegudD5V8T8dfgt",
  "key15": "4Eqmze1xpBYRgdGSnKP7hxibtLszKwE7WVCWwTbYNPCWKv4s7M5ij3EfePU7e8PuxJGEpkRPuZ8Ri9Cvbw4fs5e1",
  "key16": "3iDffwh3YUpVZVzb7Z2w6cBqbw14d1pvdehivzh1MxVC8ybpAte1HGEsD3szMQqu47446LNFF2Ndh57WwSdZXyEh",
  "key17": "344cDwnFvV7x3iLYyPzK562iYssMFKHrLkjVBZRC3r8ZdrJSKXWzVFwkByutzqFhM8QAyiRLADD4Ho6zjATkLanG",
  "key18": "4Jorqx1GQ68jpQ1CBvJCsXzpqQykP4BBq4y9tUG41sM1gbkuSiLB5BGZCWtmfEoPeqgZsJoVgvUAt1ULqEGmrixM",
  "key19": "28EZcsTE9trArKabgpwucC434DVN3hHP2HXxT5cjXPzHY5dXK2ZkGkzz3Ai6c24mHKQt3BNa2x95sG42VxBpngZX",
  "key20": "3MeCLvcMznmtRG3g7UcfnLyrYAsVJJ1jQbjJtnUJpAu5xBCKfAWePy24EYjHMcrfKUpDFsasmdgQeWyyJBzKVHZh",
  "key21": "DvFDbyGki3RhmoXhcYCW58vQn6ysbVWYKStXguB1Yb1C5K4ke66cCKgYsquL1VYt6fJym7Q4Tc2JnzE2Yyt3D7r",
  "key22": "5MZGYrCHnJtwwF6duCm7hSRBLq16faaZ46CNj6nVRcj1tXqrSas2YPApxVkGmcfjTwsLTe7tiX1isNXRho6W22Xe",
  "key23": "5r19JHj8zHYCTGgQjms4KemZna43YWeJVwHRW3jaWt4iYYYyZMKXfgHwsftQY2BuDb8UKd8KAXSPiPAYzeouVACZ",
  "key24": "5m2EpiQFGHNzyComuypgvMDebZEAenn6NJbYWRvjTa8aECW5n7bhABgpwJNuXCy4ChM7RV8zHT2ZHig1jDs3jmVr",
  "key25": "BhZqUNSsiEWdpQv6GT5y5aBwAyeDCJ9tWRyHRcoiwUyPvdJBx1RFDCcpcctBhNPWMmjURqFmWSumjgxhwhKqvqd",
  "key26": "sWPU16X6sRvS8UDXZwiJTB9vJE7mQAqy8v9KTUCEXzJAFbDVrpPNY2bS7kfVZatZMhX2Ebm1BmML95d8iPbDrLe",
  "key27": "5Xd4cDaPDF7kBi4MHdfciFv6hRNDermJWm88d9iGDciMvdHDNUF98U12A1xshiZaB9Y7hgXAADQCjTV4BU4NGU4E",
  "key28": "4F2NPqoQwxvuxyFKQSezdssJkTg9G2yA7ochPeq5MGdx3ic74fMy2n5ixYfmGC8bPBuEmWDY4ZLbgQRwNJvzXPjs",
  "key29": "PHykAVDTpqj1PHZ3zocopKsMD25vvNNaWUxrw4BcNmvu8fGec98Jj3qNG6gXg1LEq23b9buY4nHRCNm3NespczG",
  "key30": "4SrhxaFHYgbpNz3pwP84wvbtKkhVvmE4p5w5HyyuzG5BxzBMznumHs1YmWr1QecgZRbm77C8YSni79apbo6z5XZS",
  "key31": "2buiRU8QaQHCA5dTiqahpn3JKmttioripZ4W57PE8G2LMYgVMNxZjfLCtZfeg7StKQucZQBJS8dZFEybGtqYLHPx",
  "key32": "2Vj7peQQrSKoKx5AbJ7uoomPp6ToeCeSbTBRfmv9msYL3WjqArLQz4aJTT9uPBs7HFFt6xGvM8QFTDQx9HsRk3AR",
  "key33": "4WzKqz6A1LgigxUiXibUT73TZoaXmxQ88M8ZK4FaT5E1zWDTs2HtVN32fyaobqTfUiNgXiAZrAbQwevbbB2NMv8v",
  "key34": "4KzaKod1WdJSz4FW3J2URbov9Vdn3spr1dVc6Dv6p756hauQPGSBUs7MhhdxDMX5r4RyqnxAS3rW6nSwwkNh9JdP",
  "key35": "oe6AN2vd5jtoFc5FCrKPtkaRBLo85moz9FsDVqtw8RGBJCPYskQpnt3TzuW76ce1DSbwCXtVzT1t2SAADSeCgNm",
  "key36": "5Y6JDxXzr2f8sHQnwZ1egP3HRnaB3AeAak3EeyyBQiPYaffPVzcw1Jgdawf54uAyAsU3GT9CzrWDD3xBhpK1nCQa",
  "key37": "3e8xd2op1c25jpreBVgJ2bya8ACQzV8v4cRu4vzQqos76B52cjY8qdMdEqNNJx9JuVrmDdj1ob4LWjFpcbPp3Adt",
  "key38": "3Z2fvxvnbhQ3ZxdVkdAAdKM5ctFytKKD4snCTxtaDqjTG5DVdq7MET2e9aywGBwugFWGrVYgyrhQz283PXYR2ceR",
  "key39": "3TAZ15ugV6xa6PwZgvhW83mfWFx1Sjry7otm644iNaZ1kRQ4rH9CaPJ5acShuGmHidiCLEyvX5Jyo8AzWb1XQSCf",
  "key40": "5TK6KJWSa4STxjV1SCjG6EWhrBYzuh8Lw2yTwtb7ktRZeQDRwAxEto9bbpPaTWxt4JKZdBoosZvvU4K6tGbgK7dZ",
  "key41": "5VutSKmTY1mXfZwCGWL8C7tboRs6uCt8owd4iyFSKdbnT1jLmtXH7La3hBZyFddEURsqQJ3hThATLW2DrH5dHGeE",
  "key42": "4cg1ZEH5yGwEtV43TX6GNbmCPyeXWLWrJhJRWUyHn7Nm2cg7NqabFGDNoMnZpvcAfkubc3a5fX2Jynh2rTeXWAdn",
  "key43": "3aYmBAqk2xauJjxLygj6P6T9HNGS96eX4eqyzLivAD86GH7M8HqR16EWWCX4Qi1eFzz73MjdACgnSGanawBHZVok",
  "key44": "3xFF1HMuyb9wpWopNmkXJ2HiQvK11MYwM7HgWVF4GVi9GMKre5D7boakHGuVHHD92yXXa6jriB1FqpAQsa8s4hFs",
  "key45": "Bkb4uanXR79Duj8GL9db3pMQ3nxN2ktNTtZoJocMGLURrvEWaLaCktmoa7ZTayfUa8FSnuDgPKnWeXtqgC2oZgp",
  "key46": "C9SLzPQbJPCUsifW3HzcywH2eiZdY4RHUMhGrDRb26GQxjUPLS7KjKBD3Sa2GEiG2nmThoyBWptxZRjrDBxWSX1",
  "key47": "3zL29vSYKcyTBY5jtxhQmzgyUeNUpBctyhnwKQRNqPsM1saUKFigbv4q4jt9Wux9nXYowJAFDib2qcAyoKKg5igA",
  "key48": "3f4Er5qJZ9ndGUEf5Fr4ZCWyCjSJY6xa7jkrQ2zAhsqSAjK1qxYggotSPWkaWfcVMeyPhsUFPotkNwT2N8Q9okU7",
  "key49": "3rG6SijoeSRHWbY7LeEMYGGwv2cYXMUnnBpq8VugBS8TMvWBnJYg7RDH6WjEX92YfpWTHDbBM3kW886PJWEg8QJK"
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
