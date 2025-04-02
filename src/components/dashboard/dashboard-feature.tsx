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
    "2PC4MGHoHgSJdagQcHdPsM9mkXWX9Dh3dMfQwR2Lt3VpuW4aYkndw7fDfq9pe9F5uKkS5MpUqmGJTXA5NrxSg4v5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55R7sT8sVUHGKn6hwD4KXHXCWqxJR1vfc6C94GLatcEzLPvdJdZmp3op1VM6ids3HgBqbGnV8q6yAMXDTPfphhgT",
  "key1": "2zwidDeJe1r1CaRoAKpKmz9mNTRtECFS1BUTTyJLpemnMfT9ToryWeWRo6PZm4WTRDW7w6cDTfXyg1VSKgD99fVU",
  "key2": "3LYz2Yd5qAi2cSpyCMEKozzWW6JvRZnvB7RuWoXy22ECtR9iU3Embg7zndFoB6tpiMky1q1eUjUKoLSfY5rnxJS2",
  "key3": "2sEVKM8hryzuT26f8sQBxVB2tqMB4D2bxLsTXcoRR1PNDeJzGgQCwhKXMfpyrc3J1idS6vyiqzUAfvQQ1mepdxy4",
  "key4": "2LD5XR45vHrXczuXxAVhLR86LLjMjgSzrmXsoV2fpo9MqLJQkMJd6MRqdo4Vq2kDn7AknrCjbgN6ZmJcsTw3SFS4",
  "key5": "59yzvZLgvCn5z8MWhk2j47mxcQEu8hC6Sg935ydRfD5cQrBSXirwYL2t5P6e8BissZu9cRFW2HGDP8UPEtcHCFR8",
  "key6": "61SfeacKoYfSjBaGNDqGJomxxsJ7MaKNAJ14KJTzN2LajYXeqtxyssEZi4Lu3H3zhjqLSihzRPucbPFkN9d6tvTg",
  "key7": "42viDer77B6WK5SNif1E1KFyE1X2BVf5LAAMbTn7qgsHk1A9EXj6haJsUHqdRXEBdL4XkWFrBVAMfCCZrp24usT5",
  "key8": "5ecPxTgCoVZ3qzdSow5sCAq1CKQdQ8Z8ZmQpdmjbfASWE19aXkHagpPu5Qp6DCMfjUuzkg8QzfzM8vEa7zMJM9A3",
  "key9": "5gqy3XHKiVLbdDvZiK78SAWKR2tmVcJ8tUG6ngbfm6PBkK49gVZe8ZC6TLMEmnGDiczC6W55DbVHUfU7qhMrYwEo",
  "key10": "3mu6rUFZ4HqACo1tzcdjRSMDRPGzSyPQcgX1Cg8i6TBrXjabrW8s5Cr3AQWrUKHtY7gtinpck5Zi42mimSkMG8JQ",
  "key11": "26SDTXa4AL5Uw5JQZWhw4gLtj58zQr2k7v6biB4L29aGJeTaoLawjNaE8GrFP9xjyCzqGZNMWi7JDyHxtNBWVaAK",
  "key12": "4vuFYZw4bAj8epPmEDxY9VzCrCZ74xTP3CJtWVVj7rnHHsSALeFn3Wdhitbw3aRkVukDuHnMsMa3rJBq3SSGbXRR",
  "key13": "5Aa3tZjwzaYBCtYbBX7E2L2H3BfGeLZiasonkMSKh9EH5VLm5JNyXX5Tqx2ymo8Rxgj1TTjcT3WC2c4iS9nKBVT7",
  "key14": "4Zy3ZL6xxn91xbZFSBmgpnXcih3ajVkz3gVBCwCZ4kVZpnerTD31jE7pBzphhMqqaQ5JDuwQrUoruHtjaYUgtfJy",
  "key15": "4nkV6sBdz9XUy5T7CXX9qr2cyCrvDZjcZPgBWasDt5RVJWxJ8Hx8zA31KKF3Nsqwqrk1upXPfq58xtpemYx5bjr6",
  "key16": "2NgyutaDXAv9oR4sQcCFMPjBNGK3f6qNv13qT75QgfPzz59s4Ea3ZKWPciBmvraL49m5yismBrymTpSU6sDsceZU",
  "key17": "4DNye6erqBNbpCnZEk6GWJP9wq73eygLBvymQZ8VeQStK9NodGo5ackjNL7aKGSHUqaaUW8u1zrpLkgLJZYwfDXS",
  "key18": "tMwEQULQgQDtUgEtgfcaoGcTeSt9GbeXifXbU8f2EKN4z1n3Pxj5Yynr71XXULMTxcfTSfqtnmTaPCGqqqtvWTy",
  "key19": "5ThT5sDKuFaf17Aq8uPyDJXvJjry4PYkVAbput5zHhkJJ724ekCx42fCoVmEneNq3WbwZRWukjY9gUh6T92Vb9c2",
  "key20": "46rdgHxNL1GrfHZj5FKivF33sd7BALX2o4qPR3EQ9ZJoF8R5G7fMDJAYcMTzSxtFWEUpzZHsbqTf2aipAAkLCieo",
  "key21": "A5Ha7UnhkdfZynXsm5awxb8e4nmXy7FwEmr9djWq4QF6qYxB356ywx15fWLwt6tXof5q1MjfYrSUQawPeiEVwyq",
  "key22": "2SMb2ATc5KCiaD8jScK28rk8xxRFbvA3FAhCa1Zc7s5KYEEJcnS7BAKPvKn5yEpAzMcEpTQGD74AzFJgSQSkjhbv",
  "key23": "3hpBxmqpfgb6FKW2j8E1WL5gFt5Gud9bRuFVpo7TMbPynYD8BbSJyG6E8HnWEJvmQeo9LgEPBWWbgMedHfcBykRh",
  "key24": "oNuTw6UR5TYMpxdMfetUBWoPx6QJ4ri2uKMfB5h6Cg3eMq6opzXEUruRrjKiqPoMtFMcAcHCZ3DKKL5tBiGcXwJ",
  "key25": "5oeFpf85d2tcsgEJxG65qHR4KW5LQPE4aavMUKMUaA6pinvaxhkxLLF2iPAJ4ciMFXiRyG4c53nWiz2ab11SuhVb",
  "key26": "ECUYiTnBYf87CGJ4YfzA2hjdK5bj237pWXPenf4vL8sAZyohq3WqFPgYH4H6PScxGLRXrtmsUyDN6TxkBGBKT6Y",
  "key27": "27r3n5gAYc6e5dqcZN3gJyhF5egrhgSGH72o6rFbtVj4kmQqupqEuGRf9KWTxQaRLayXhyumt5ELJVJbuhEQbXxc",
  "key28": "5mFszCL1pHdNaG88dUeWMWESxSebgfXpji72yUh1QrKmF7N2n2KZDeBLEQcHjFC3wanMufzxu8aPYAj4RV3vjJrD",
  "key29": "1Bs8vxNz9x1gJJACy9biZh5n2tEpFq2DfbTaKfZdVd36u6EMJegU6N4qGew52wTgaq4Zmz29C7Q4iJU8o9KkLWD",
  "key30": "2x2HxFfnNVbLMqYHRoewBYWZCVwSUT1yhhLaErNjtQ7PCxf2NrFMV1vm5vCvT3VnKHYGL3LQcS1xVYcpER5d3AuJ",
  "key31": "4fRjF8VEmQoJurFWtmhfvSohkBeiNJDj3DCTp8EfrWYx4WF5AYbDdCBfCLSw4CzGKqUgFnC5Qo7ansMamr9RA8np",
  "key32": "HBaeHc7ztu8MatQjiXywgy1hvMcCxMGUbEz1a7DD6Rn2istNBp18KPV9N5AFEySE51mFZwk3s34PKxBP5i9RQbJ",
  "key33": "2D5Te7UPfzTUGoTxuHAnY2imE959yLGiXzgVgsoyhMGZnsz7orwdFEVnzBaCMsfjc3xLpCYuXQVAh8R5Y4HFDEFp",
  "key34": "44VF4jNV9Xie1iuqaQNQZwKZbDEPnKu99ftPmiR6JxYG3CsifNXXtcJydgTRHqYPenPPCc5RcAzbTiQC1Brk5bLS",
  "key35": "36bz4fTW9Qm2CCTTsGytFrRqEHdndiv2vnwNrntPXfGjfpCDeZ3RfLTQRMZUyD7PtQiLAEcAprUy7sZ3gcfSxpxF",
  "key36": "25XM7eZWczkUgajsHu36akeosqN37ZrWPt8WbYpLqkYUjqeLs5H3navoJQogXpJFoiauXmHKad85Yxgq5c881V2H",
  "key37": "2HwUmJz935Z2G7L6NpFhPCXCy1zW9ctwTLjSyQLEQ8AsTPVxaEqdaMBM9ZMiijKnCa1sP9tYqBPCh1zefpM9rq44"
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
