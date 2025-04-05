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
    "3pcyczyaDGbvsxbsnxi6A5nQSbiFuVhKM8WFkkogfQCouJ8igQg4tSxkHGTTnrJwAcWei3nnit2wuBDk1tFCX3em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hojhsTy8kazR4ZnJMf9w6dytFnFavTe5m3AwhTZYApRC3vDK6rgiBerbq5HxtCChaEREKeLEQEjkU3Yxs6Ng2FV",
  "key1": "3hQNXMD3x6H85dwxA86LyLrr3z2NEaXHSMKqSmsmbcBQmbqsjAD5hwZ5Zkpx3zRMU3NdxYGnqN6L8rf3MQzU1bCt",
  "key2": "3XppQyau5nMA7kuaTUrgGbrPu7ntAKvFfXcmfhY5JWSQy28SBBbf1uz1YA8P52tXkcTnRY7C3F3o8LvjbdA74tVg",
  "key3": "3sM6QyzEVYEf55uv8NPygjBsfUciJZc1o1pFT2JyC7S6PYoJsaugbULWWJRzgoVQoWvo7FgcaiFUWZUEASfiPN1Q",
  "key4": "24QTxnXK3z2vcmDLKt4DkWjSVKSkxvJL8aUdhCMQEeRcKRzR8bs8gh9QGYaTkB4nPUwdXj6un9ABaanCD3H4Vx6y",
  "key5": "5NxAP9ntxsEnvBTGTmkre1wGXS864gXdniMMcSHXuZ1TPPUaGzY1LPoqYeDojqEfXbFc6Lue1Qc57FdL3EF8VYVj",
  "key6": "2a7rLBSGUaeVtoxDnBNogLpuEKzMmmjgxyUmNxAXRB3Q1A1CYtGHxLouvpLdWE1cUHvTnsrY1nHJrAi6MJ18inpH",
  "key7": "2DfE1jHiMv3b8K1Zp38AN3r7vkXkbCU9X9boqeZJNy6T67AVCDTEE5zvMm28oQfUK7WA9NhGLCYEr5t6FxMXbsAU",
  "key8": "3Q3un6cwLcxQypx5zTrZfSuttfFEzcaygFmWB4qa6v44fHRunH2DJkoPapn134ZrtdQkRjGGtvqSGjgmxbF8HoxE",
  "key9": "66PF1RuuTLBQbunptcRfZEm3m246pC2L5bGW5EdVsgFLxNVMDnsmrTMngLi12gkmoTRCNziUW28CEL2B6P4r5rNE",
  "key10": "2YL44UZT1w9zhm6PwNytCGH9Ebg7kV2NcEnGMh1RZrtZfF3xtgVeN3HJb3xTTTySSGoww5TUQZzqSMo5K2oJbKbS",
  "key11": "4qSR57BUizatAp8Jd2x9m4RbEpBJVvEbF9WE8aaMvo6JWFdf6yLUVjoGJEmtiSkna9pPUqNktufz4PtzQBybXj9K",
  "key12": "442MMNQX4Jmv8Wqkaea7kzLKXQkjafokRZi7G7P3pwcFMeFftkD3v6zGy4zC9gByX4dMBMoHq7Er8qURwxbU6tff",
  "key13": "5AdcoaYv5ecpCZUbg7WRpLjZXtj3dfgKy6Y83seG2zdpvR1Q3tHJBSiYZe2yrozNWTab9z9AL3sYbcNxbuoAKz7V",
  "key14": "5RQsbs2EyLaXDFWoHBnbDdtzVyQLNNTqe9pkVeLxc9nsbSRHjFQn8E1VYVrc1wn6uyjQJerEGUAjEGrGMXAEMgeN",
  "key15": "38J8nC2BPp3jpU6YqP8uXNQXZxmdFGsEtTyNDswaepiQjx1g8tEHST6V5XZiAxQZ2GLgyVqJCJvM8VcpZosrhvoS",
  "key16": "nkpCYdWfL7TGWM28mRqHstDRuyeQjQE13E3witMTYydvzjP1nWu6vfsP6qd2Z2TmjjZcNB7n1qfixuAP1t9R8g1",
  "key17": "4HjkRPtdAJmp5gToewQY7sF3m8iGBuxfqU2d2Xyj5QBHUDXN6dcD3y7NCi7cUUzRk5iyfCu8cirv6n6RFi7BqJiR",
  "key18": "4gJFiMH3wQzW4tbDmruRsgAoebEXJ42Q4Ro3QA9eoEWrqHnHFXpbTqPZVryCb4EhfyiFZfWDdbo1ZE9wvw8kCTK3",
  "key19": "45Ei94TkrE4b75tUUtTJFkPS7f3oYzJxc2hyUH3Hjjt29E9zNiMmyJuTVvFGKVUH6XL7NsGVDFtrXwbwtY3xBT7X",
  "key20": "5TR5ndiuk8tndmJQXmF9oK1yuo4gmmAiSzHPtLpeEj8pmoLSFhhu1ow37jHUqhTp6Mzwmn8dhXZRw1KDQL1XfjB8",
  "key21": "4YCQDgeyFqrhWjn4N7keXpmpNGeRXovnjZQ4K7iCrtfkqvLNtcZtPexqyfR6SCg5fN8VoBT8s5ZGZ3XwMQXJqt79",
  "key22": "5nC9Voei9gjZcGpJmLr3n6VP5dBsbm3YNsbdCVknQo7A2DyjZaznx5R65iaCXwrnbjHysiofh3vfwwWFgoErumvh",
  "key23": "28bBZLoV3iTMmFhdDLdSHNN5A6Y6ESvQ2RMhW7h125vTVo4KWvfKuLR4rcu3P728FqMBZJXmkHUsmbJ2kM53k7c3",
  "key24": "5CXtSusNGSrPFBz4asidMS1MyMEjZiEyhGVbeb1mAiagaZoTMWUaoDUm7Zk82P3tskd2DVJzvSbd891iEitJ1pBm",
  "key25": "3Ut9dNZx7KopQ2faqkWA1huJABkuPwap4TQk1EhLaLZbCNois5LgRRtB9HUKx7xM1tYmmAHa8B4kT9BLnMrdTDe6",
  "key26": "3Faa2zjpudQ1btWQ7x7P4bBCV7bVGJd7jbkD71DymneBvs2KsZ5KKAxFwVJUz8yQMRZpCt9zNGypMgP5dcX2cyms",
  "key27": "47mq3u8urhKbTRw5sDf6zwzQtf5pigzeCvejUek1VT78TDZjkmKYqKvUgMfYqepGSRNQTqr1hwj5jo2dz3sP4NVz",
  "key28": "4pLSH7Tp8vWqfaR3tyirZZBs4SK5x26bhKNVVb4F3UmoZVmM2JAaHhByfEuUHzPRjm2MThHCnj5PdmbD2YRtdUfQ",
  "key29": "xC7k4uyC9R1cc9poCU4Lfy6tfZAKcjeqw1Rk37XkHENBzQgtseYPdB1ojrDfmGzc58YVhxZjeyccPdHZF2tUzaV",
  "key30": "2UY2LPrWs59XXGZhK2ZYSNsnuyf2vauq6nEMtoG8hXaFnV523Fm8WzABfj9nSGRVGrWYvYUuLK3DczMT436vN93k",
  "key31": "2jaKxDCqrdVvn5oyshYYcwnrk4SgeD4zdF4KVpFgT2ZGbNGdzs2QVsQVYUQJD7LA5iJgeHGY2wo7PAhd6Gbj2irW",
  "key32": "5QHHSR8Fj1NtjneSJByXVMEe7W3YQtTShamvg8Yt4FFbBg21X7poR6eBQL6EvYXQAtAt4FermWVEjm1uSin5xpse",
  "key33": "5PnqfnaRjKdZTphbjQTA4NFzEiRmcxcBGxx6LvNUqu428tCYD3S2iR8fSeyByKgdx1oRpiAF3zYYSoCy5TDM2EDW",
  "key34": "2vkehD6fVwi6hqEwGU27vLMosERemNrGdZSZSfgattNiM7seWHYbA4GbMvUfYvBX6B7ZGq1PGefisfSztcmSZXL2",
  "key35": "4778LuUWtTZXCATon6zTY7tXV8Gs9819jQW5xJAnRTGZ1QUPWuS8U7Bg7tpcX41QgcyB6t4UGYu7pcD7z5y9F5oR",
  "key36": "2uXdoKzP7JTVnEBENoEsrjqvmgCZ7NMD5kvSza8dTQ4yKV1bekaDrBHp6WmxLDpLR89TrTc7TDkFUG5un7SSkMcf",
  "key37": "2DKgn3DPWaSHgFMGmNcSPAm3TPPVtcfxxReVXg6HhGxTtxTqiFta3KEc1FeayaRQWHEhZ4iWEHsucKffhSWueHzw"
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
