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
    "3CFkNVo6WvYtobuxcVxw6qAvHNWcmnq5SkG9q4wTiKtTwvvC4tLMQje8qXTSM4JmHHFMHfCkHMpMZs7BKTXp84E4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEL7azRyW2gv1JjX295Cf2Yxvr9WmLiFiewfkgg3D1e3A21eqwCSk66tQdwNax89McYuXmTLvLsh2eo24cX1VRK",
  "key1": "5jxe8GaquGyMua9ZFp15xFHqEMDCW5YiQbQfvLp3hP74SegKsLLj8P6osqpqZsZnrEJjDHTSdLQJYDvpbaSC6WW4",
  "key2": "5shUGCgiHSGrt8aQBwkErqkrE2SHXnyym1F9dM68fh4fZETuprXjCHDsQnbf2PkVm1s99ny8QDWSBccpuuVZFB6z",
  "key3": "2uLhXDFp3Jm1EATkwrLdJb9P8bC5ecYjAM6zwT4Xhd23jAgwDcGtdhscL1o8TTep1fouC5Ngg31QLaTw8A5rV7Vx",
  "key4": "4LjwUYv4Mjrs72jaNtkqtyij8Z8rnkC7cdRqD1oZM3SMgYmaSz83FEZcmpCYPyek7seQV5Hy41uKavP4CyD8Ahhb",
  "key5": "51Tj2CDYCwvzEhWavn4mg8Kk3NXDied2nou6CU7LnCmMBTa2tfpgwQyioT1jrTU29J5ZDCcYUEa6PV5dRjbHCGN7",
  "key6": "3wBZThYWkwrjakhCGVBmNzNGe2fSfjBS4zbhcs2AunBw7Qmi5fMBGqpUznagByEJcfYP88PvnAKTHpRZkbReSdz4",
  "key7": "5FRCygjom2zPWG7Wd1b2zDGwCQWXXidrq9W1xyCMfBpeCcisazX6Qrfy1TJocT43wptDkca74G5waWuqybHvEWHN",
  "key8": "3dDBtaMmJ1rggRHn9FCaiBtgaCimKF2tVZ8vH3fwoK24Xoa9ca93xGvAKsoygfMRqDWTgoikg8QGStGoq3ASZo3u",
  "key9": "2d6AWuw2KwHY8WfrJQiU75TRDTuTLjqBfYr6HntRM6j1qgXqQ5LhyKctPDZMdjKWoDvLMzxCgUsTWaJgJfmxU8vs",
  "key10": "2qFcyZfauaUQRQoqDCfHGG9ab6DarDHDBwj1soKSCkReAyNCt1bd7XqfShExSjUoPrFst3FoBQFCjG63ZFZ29EV8",
  "key11": "2naQJFJfzqDDNtCiDbUDRd9aEUG1JxC7N854djVzKWeEDkMdvruCQVSEMzJs2EJNwuSYC5X3Bq1tFMrLiPseTjub",
  "key12": "2awJzQx12JA5NhWy1dtjiT9HPw515dTsgaG9BsSezU1v22NDMYkNEsPwpVB91eWtijeeCLaKmGdBZYtq6yTjtf4P",
  "key13": "2243289EzMES8C7RFLUVoMtTFDaMmj9XY4bmEDxCqGc66N9R43P1qAu25BkdnDyh9RMgEH5yp8sSRciWYqjWmsbq",
  "key14": "54wuMCVDdZRceMS7JYYKpkdTUtPHKytcqhoRMWu4N6ASL6LhFfJMCwtJXRQCFayfMtgEbsCLVWQV9UNkUEqkZxzc",
  "key15": "3KxJHZsu47hjAKD6iGv2qCQZCZnn43zrUj1nuLgwJepcnhReDrqH9Kfy2kmFBxktRhS1PZe6vDvJt84dEJstcH8g",
  "key16": "3judCUNNNbRbhT3KAEL1Dg7Tm8skHAXoT4XqPeS9x4GwcqD5bc6ChqSLNJNGtF8Tk7VeixJsN49ipen6fAMECiBZ",
  "key17": "2hUhYzKkr4vKJ85PhMzDW6FyG9RX3YPKXbr9MnDVWMguyGUufvhkzrpi5iYhVJoe2Q5fiRqxuVeGR8tPLxxFP3QF",
  "key18": "bzgrCVXLHqDBSqu1ebHPre7WgbTsCSLxjoyZYhsgCeX3Ttf8Nbzhhu14U4iZ4QCFokqL5LyNFfWxCbRt9wdVtqy",
  "key19": "4cvmozGNphFgAamUeo7hWGJVMWWjfVMH2rbSWECUww8LkEdqAb5bghzcYVNb1vYFmSF59suKvuLRQp8wLut25d6f",
  "key20": "5Wxax36hsjbD1FDdEmnroRYGg55eqyJg74h6VbwHUowH2W1vkVCaJGruXYz6BqHt8bfiNZd8kabevz71kqSRkV1v",
  "key21": "2sTgssK99FnQ6suyJAXvu3aB1ibswHbHnkoi32jJ13kEHPtL1GwCsFHvkoUxRTEXqYKvG5nmn6ioxp16zi7DYzfD",
  "key22": "3yMRWijU1xQQGnWe45h3DFLy1FrJJaEp3RD6F9jtEv8KQaKEBrvBuTwxTRMJ2jbGnkb88vLnN1FhR9zSHZ7qoESY",
  "key23": "2RgNLqEmwoDkteJTbiBW8m5nBhi8RaqGjkj4Kjhm1N26ZSVFT1iCbBy42T6BWaPibEJ8Vvab4ibXV9kZwy9AJSip",
  "key24": "31bAKcqfUooHUuBbt9dJNAKapVgyyYmLSvWhSiMU4qnvzggdeGRN22ydGa3GnpHuGYHAsj9mzXbP9PH38RfqYdQV",
  "key25": "4xvT7JJkBSuZQCi8m2ufnAvYG3P6YASDkMiXrN6wmFJWq21FxNWTHmvm3imRtqRWYXAi95UjMX9YTSHabfkftfsp",
  "key26": "GDTnNauukDvofybXLSeJwLBYewQyiPnrcc9eb8Z2E6Kz3Pk1GdduwD6annhjJL4F9H529RS748NDrUUHk4B6mBW",
  "key27": "463SmEBvbHrreFMU16GCDpp6736iKRcR1E9WyShT6Lw1BHkMoNvCBZBLsfzzSB59s2Y7WC9MHZQYXQBPmkPeqUc4",
  "key28": "5tLemQLRDjcvuE63QziAWFyCy6GJG2HdPWDz38TxpzSaYfm181GgYZ9TzRhaD8BkWZsWaMPAUtJpBoRMvHLEXzwz",
  "key29": "jVGDeV2yhHfYeSC5WxjXAMfVw9zXz5NyJaeHAqSdDHPV7LCBFxpiANbxai92PXmaKvXcrX9vFP2mW7bFk5oeAE4",
  "key30": "WGAAmiBjy7fEjUL7wYaLtKbW7HmBf2xS72tLfGxX4BGd2kKhkejwSgLVq2mAEvjEFvTpyhuNKSbVVuDkE31sRR3",
  "key31": "5Lpa3K7PJZdBd7SsTiGLFYNnVq2zaTQzcNDuhja46yDruaXSgYQyrePQUY4e5qGQuu2fdt37izxtfGWK5o9RtHCz",
  "key32": "3aa4kh8ce17SRrTR16UMUcBGo2QcBY5VvYxABSDXpfYGRizC6NJy4iebpwyADRiS2YkLHoLjxBDN2C9EGzN9nxRU",
  "key33": "Q6CRbjbFK3wCh2pKMpQjjyT6tMh64yzeK5sepoD27dzfguhZQXcCS6RS65M3Du2vzbaHzjJwN81hptzxNz8gymJ",
  "key34": "4pt36rUFFa9JAburNQTXbSqdaKy3uJ9MpSs3fLU7sk3cyWmnMoLTtkjxGQTvuevrEoC5HL1wBcGBrbKThjgFiJmo",
  "key35": "2bK7D8tmhinuzmBFJ1K5aDSsHCahkd8oMZ63GZ6RnUf3Ug6wDJrKeD6vS4iuNvFH8rmBD29d28HuFsNCBF6Mr3R4",
  "key36": "3of6VW7TqZcX9H3kP4diMp5AJvrV2SUR5ULhkivSjXUrTRswfzW5h6ymwpyYynoh9rNEo33UgNTLCoeqMHiC22Yd",
  "key37": "4JJve3GhnvaXpXMgWpWRytWqqZYLZQV5PNW9atKQm2Y43yAcc3tMrWcfE5vpEMigb8zyaD4Kq8krQB1DZUwofZuy",
  "key38": "FWgWuLMuByiKAFtvki1UPrvijbcDNi37R3BaQaiWFVSedeXkWGcLnKU5tVAaCM1VvTQd94twAg7VpuPfxgHe6Gi",
  "key39": "3qGvTcQ7CqtcapT9ZnfgZDmUdqSXdNUfJ8SXqmsUteFb2dpyx113SR8UcBbxDgitGEM6qoWA25H1RfGagc2RhRj3",
  "key40": "5e6axZewoDFojYxQEUUyeTvynL1mNNHE4hsnmWWz97Q9pccxYkGR5qfoZhWGV8YY4CqgmP72p8hLeYfZcfrmoM4u",
  "key41": "5jBs5BnWDRAPUE76noFn29F37C7EEBMgjdyLMyBY1wb6Ft7Dq5mUkX2eKFG5thF5i9ZgvQ4T7jehSEQxj57wGbsB",
  "key42": "2Ru9fPgY3Qw6v7wCkJ9pzkgMbnPhwDkRLxyP5e1HZkAmNJQkCrWhJxUgLkFz3Hw4yaWAfdVbwpvmthVxYDZmkwW3",
  "key43": "5PipmV7zNGRB1Agug47YyggB2TXGSTrV491283L55u6JUteaKzEAeqWaZtupQsG1ynnTbSi9njxYHRustxArGy1X",
  "key44": "4LghSPPSbujhAM36o89HFRmcfpSnwbkxxs5Qk2YipCwjo9GdiFMmyWKoF92qCVWch6s9bzJqFxeqiYPb89kwdJvc",
  "key45": "4zZyoAmj2a5YfHmK6KLXJV6YbmZJ5dYdqZ8q22h4jPQFoCSuTRDUM9rJn31E9uYBW1f5b7LFGwdL8UjKsAeNWxkY",
  "key46": "1eWZBGCZ7W1e8hVHGo2zYG9dSHYuzUo7t8B4VdfuVcmEcuoYrU362SEDppvgt6KDE67YxieC6bQ8hKEGo4sfysi",
  "key47": "2tarUyjiu8MNDd5BiyLE6yjo1UFGuK5kdk4cVj3AYbqascJQh67JtKudqHwUGNyWykms6j12MjGtMfKJebQhRsfP",
  "key48": "2xpiaUmu7BfNnGWSyxZV1hkqrduyD8k8AVQgjeFy2MSUH3SLFMWmwchd8R2uDWsiypKECETfLVAPGxW2jD4gCfZp",
  "key49": "3VTBySn7fS43gvnN6WGk1qZsXNiunGRDPK7k487fQSyg5wyoSnZLUDo87JGeUhvxrEo4wetyFCKpX3SDgHBGkw4X"
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
