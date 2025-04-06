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
    "2aMt55nVrxu2KPLSGJAAtYvLk74NWKU7GhGhk5yTraqykdRjvj5iFbPQFbsMpNJ88WdzbvF7rCC4rjC8bW8m8nWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GspHVhir9nbXpJLCois2CpSzV4cR5wS7HktfPRJBMNp6rwh2KSXZXCzCtpZfesvfQasi9a59YouC9e5VcH1VEwo",
  "key1": "2ftvfyF9h4oWrgU7mUQ2BS2NXrXRvXfm2GXzNBwMsZssyDD3Gc2AHmiH89pbH4TEcHCUoA9eA5W4aRVMu5dy76HF",
  "key2": "4tCBkS8JckHQz5Y7mQr4vP7QKCoUBEiPQvdAikWMPe1ynCqTsWYL2hPvt1prDeYtVGZpaTWSPLbUMyTzhPfgBX12",
  "key3": "3TAk5v3hBLe2RURGcNm7ghPVd6cLZaUrnQ6LYWAREj9ivt8K79kU6UyNooqUkbubgXY5fTEfcwT8AUvrRGHoHrSh",
  "key4": "G85DUaEMUpPYKgYbsC1w6BwKWm2EfRmoxvpcoAEEoaFfJ1ZtkhW9MoTsJu621noaXeyqp11ZBDKiBBnnWFbbKxY",
  "key5": "5MAi4ooiYqKxGQwRm8rUJP3wydiHu7g8VUQkP8F4j1fBbdHbak61yx9Eq1HLuQFXixko1jGDVKQtbJvmqLRNq9iD",
  "key6": "9m17gbdDSd61hct3xZppFD53oSkjFJxmyUS3UAGRUSNbfu5qmHaCWYw32dPLWcUuhpEkUeT7i5fwmspPCURgJoV",
  "key7": "5zdYoFJu4JpLK9gqZitiUK31hWrziKungDyMvZvS1Jw6oQ6guLDrDE3fdEvLecAB1AKbRSPhB1k3MqGhD6WvErHn",
  "key8": "3WY1XpjRg1HShuNKxteQKcjok36gvn6nhtBBYUZVzbGWL74ZuM5NKYU4bD8WkjNVeb8gWTsnr2o3kW3aXFhNedea",
  "key9": "2Rq9UUZAV3bNLCXTRRX85kSpxhMw3kHEdkb9x95qkDfDbDX6NxfzuDwXWKnJP3ALTXpSEydMoFiHjSzreGDcGxjP",
  "key10": "392iF7xrqAk5bAxqXPwemYViF86GiZZanRyyME34t3hd8erHcu3Q1p41XKA7HPSkaDJX7jgB8Yjha53rTFjSGgiw",
  "key11": "3qwUvXc7iyEHHvT5E8X2F3XusyzV7o5dF6iKY9heiQwAM5Utt7aQ8LTihyaB3zJr7cg5nAPkU7oQccVD1Ksk9vuy",
  "key12": "2EcoH9Qw4uLongwYHqRQXJ8usdYqPVuZcZ6xzVpwfp1AUm4jLgLQhx5a3EimADrxNwc5ciGtKpPyEDBzLBTTKbTK",
  "key13": "5SupiWVVREV2dyu9xws6MuxZ16QxzUrudMWts5uZCWxdUvWi1hxpKHab4AtyDfUBNrNmvHnzJyr8WL2YRS2Js13G",
  "key14": "28Qj1Lb8RcEWw8uD5Atd6Wqn1pBpFN48KsesbM1MCWHycWK8e78J2FCUzpynoZetdLfE47FgZ8FhhjrBzwWQbZSp",
  "key15": "e1BMbyVDgpYvXrRMyJjkLAUVXL9tCB8p7WuUHUqcfbnB3qjRYuntsWVTFRYQvuZhcJFQCxAtcmm5SMh1w23N7gE",
  "key16": "658g72kGUm5Dwf4U7kpR4g8hqDnwgDkSoZknup5RusqPWi7pv3YXV2LTVJdTq2xuxYSuqdq416fBPEf2m6LXwnPF",
  "key17": "ssVsWEWt6koa8Pr7zuYg5mNY8DRHJr7s3bP5jGY4Gt13sqkmrjbDYnLphTeViYXwutQjy92wbWnA6cdFW4HASSU",
  "key18": "67NCz6bvPLgZ8uV77kLS7d6E1g8wuST7j7hw541NAxjN7CVXNpkHEgaHqYVaw16JbyDMLgE9DMus8bs8ggsYWqoR",
  "key19": "5nJPXG5VKBt6RXLEFUri5FkgeFJjhcZ1AjzB6ATdR95kofiJAi7Sx2PmRpLbLSgg8iSsrWdsnWrXXA7y2HLLxZU6",
  "key20": "4ctDktY8ypYcT6VG4aRUKFLipmNG1oCAnucdKVVoVkx37hZmpw6NGbcGKWoFBHcwh6cxafUdyYKqLv5W3NuwYL7H",
  "key21": "5fHdXiwU88KKrrhjQcezwfjKy3onGPdemFZnzKTELokZURy524H8NmehwKAQKR1zvA9zr2Baf9iP6SxghUGuqgY7",
  "key22": "4ndHbR7WQHeQNWnRCzh7Gy5qt6TKbDWSHpMw2maALZtc6mDGngmun8pseSQRymfjfJZSvJ1WWsFusBNJmTaAmoow",
  "key23": "4YLz7tZx1kSE1FPxtwshSSTQuwA8t4ro35PwXeDCrvA5kccVj8Ms52QuokzrdtHQBye1BNUjTjQmSUokMQyywb74",
  "key24": "pWCYbDTWLH42e9dPeQuQVeJpMfmZQQ3wqjXqcmfu2ZBpy6qERAGkwjZudvcVWYVzyN4dBhCNwQvQ9oR7ug67Htq",
  "key25": "3YUYxJbgRK9giiWn1t5D5H12ZuEpzrKzbf4kNCXgEkzALxV9iMZR4ot6NQEQtFKetwHL3VHWwqwweoxhbXZRwkWF",
  "key26": "3Jea7Ztz8m3tZeeWEuA1nM8F3mVepApW9wfp9cHkGpZv8zaPrWXGTts3vTWEBN87Wygr5XFmy1LHCxErzojMtp1E",
  "key27": "3mDyqyvdnP8a3G8cMV7bozJJKT9dTCsPazoyLj5MzpgDmnixPyRrEnvDw5xEhXg6RDAvXyr41EzCo9QhscT3jdM5",
  "key28": "4kxb9PNctv7KcoFCK1AJohtXBRA9i6f6F2W29vZKb2s6NEhw7zLtmr5QqKKqfUBGapppgTjqi4oZApvzYi9tddR2",
  "key29": "2NMBLLZDU1cYhAhXHssm7cpgb1R2vssavTbSckvFA41PLhUTHnzJQrSJAEXpYW8F7XKUtrRMehcoW3dt3ySSrLJW",
  "key30": "4Mn1c1r3x8iGGSpPevjTcpdq96NN7hHXEWf9PFaaJ7tMu3nnboK8ZPeAk6kbk1JthmUGHgGU24yawmjGgA5VZWF7",
  "key31": "3NEW5GSj65hJzmEaAiAJeADgbyU7WMma77xRmzLvV9X5xAVZVWmceCCMvWvfCtoL2UiAnV5q2yzn9K6P3NdUzLUQ",
  "key32": "3tjmhNu7U5B3Y3A52mGDzcoDBHgVaiMhLQ5pWiG1LiTWonRr4o8rccaPZU2Ku5UaBqPfpMGoAsWYaQbp9ZaK5Nnd",
  "key33": "3byAGrtThEkApBTTWZKaYJvvzzMhdnNP3kkL77m4KVZHrcGaHuGCgMCAoNSWernyDDrNm7VDgUfQpc96ojGBwurC",
  "key34": "3rhAAkiECimVUD648i4u4GE4CqsY3A9wfUzAZfvWnjVYbkfKPk4PeabZi4zfEB9GcdwSRa2KLyiNxjkEUDZ7Q8gV",
  "key35": "3DQ4Dq3NkLBqs1jYn1x63PRPeJgBRUUFaPbZhZKwKEwyotAQG8kWkCCrJGaM9hmfKzYDyx7KzGnHWJUpaTHw2YVp",
  "key36": "4nf8j3vwosd1ap9D625wuWj2a5VBtfFyvAVVrrZfwxvFF8BEWuMBce5xQQtcfspHVAxyWr75NVD1xqxSp2pKgHiZ",
  "key37": "22uPkBbe5TLbFLNQbbnm2UoZ9n5N8zL6GAc1uwNgbg4sXM9zF7r6zMu4HQJajFymd4dZzDThZzKSJQ3JnR7VxoGy",
  "key38": "3iVnvqFuqpi95TZCvN7fe7476s4m9QWBk7y2CPXHzy2FzsQAjS3XqBFaRa7vksVmKXcyhoLDrfEZY3JHuZtdVf8D",
  "key39": "5DBLw5CDeM2JbAYtj11mARm33cdZ8ZDB9SyAR3YXf5y7XEayPS5mWL3Nfr1vZCMcVzUyWHWwma65x2yJdajBVbCb",
  "key40": "5XWcUHBvimPzpBzshrEsrKjnQvNaekfHwsacYjLuzATEhxnSsBQZTFXKAMkiapcxXLYmNGRcd958ZSdsWjsYpVE9",
  "key41": "552W2EAgyNPEnFq5YiYgf7Xi3nkgGSvTgPhPWFEoTrd68sNDEptnFXDYrCkLMYMysfMR5574mUDyyEzsaQip9iaZ",
  "key42": "5uQpauQEqxPGGdpcrCcNA434eoW8FiwUp6bWvpfDo7pBugeqA6qfuWsEYFzyjqawWf44JPb4DhjiF3dMSd5ieF66",
  "key43": "Vnyub1QEg7qAYF1eXcwXbVB7u78yGZQVH17jzmcEkv4sXWkrFYbxnbFLka8KaDkfRRB6P2GizEmiDHHU9SDo6Uw"
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
