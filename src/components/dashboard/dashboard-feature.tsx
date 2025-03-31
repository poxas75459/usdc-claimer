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
    "tF7WhchmmDykmj2RBaNbVY6Fp5kN44H8R6gU1Prk4hMySML7jhqPCdtwN5X3WdeGphwZgTzKB1T7kjCDfemfvtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pG7e4D8e8b8BjHRS62hSQpHmRQcKBPFUQJF4SvjD9BLya5hc32SFizuKbQy6nsBCGXjrtyD2a4WDs9Aym5rrYLN",
  "key1": "66QMJjKSNQ65678AGANmc5GUFrhYjcceH3Zfi2hoRzYDyqnvcHuh6waJk2iPu3Y44YU6RaLwsxSuK3ScybAU9aVa",
  "key2": "5M6osCweXDbaVLvFTXGeNLDY9x54EKJAiPJr4nwCK8YcA5MGwMBW7w5vKH5kUvfTQ7tAGXwmCJH25DBGyhgPq6jH",
  "key3": "xFp7zNstGyKVhrqJ438dTV5GT4Gs34FpuvE3fL4oMGQJKfc6j9tLBrNKME7gdJLcpNVuHnkqFjKypAaFhSYQ7dJ",
  "key4": "3jNYEPpzBDNbX4dhApt4MFH3JR4uVoGoTgeug8zFKA6QAo5bq2NAaVjydRkqRQfd8X7M1yjrx4SF4NxDQHGUFptW",
  "key5": "2KuBJhMjcZAuSVwLYjYRQEMhbEXVTDZ6z9F28P3iCbCmv3EqmJXidnCjjw1AYWtUGvqrurYEKvF3nADtVStxhcrX",
  "key6": "tmDLpa2gyj2aPX3WL2WKvD4Uy8PUQbqhuJ64NpPrWyeEaVXL2i4cQBy3CR8qpsFqtdyEeGyjWDSxawu3EK94US6",
  "key7": "64S6dMAngkPm8oCYyYNXnaxD3QTYCNGbqLmssKtk5WAVKUrFKCSWcEeSFZjfyijAyW2jA4NxWtyi4YRRtmXr2JAq",
  "key8": "3Km3wQBiWcUtgKBBiX1kgyBUxfDUi748oXNLAyZQRpqTsFDNL8ARKMTYzSjNLFc8hXiXPnRQrwojAkeF49sYZa2v",
  "key9": "26k6YqPSQ9xjLxWrw8mpiQFALSkMwMrwcNhp3KZWpCVGf3QAViwFbqrBshZ6X6Hd4V1xnHQunTEpgUQKqJrrdtT7",
  "key10": "22RumHFqGzGvQ1vW2jXu6HwpTQYAxBfAGDY9WfxQdABrFkz4rYRuNPFvUnvcrgCyVwLxSPSJgcS37MjC274T3CcT",
  "key11": "23tj5Qd7z91kNpDgKAs6muP4Pm2pg95a36rrMftMafFESJGEb19VkXuFAz13cHk1jcc8Ec9e6T1zK8QL8uDWkKuJ",
  "key12": "5iUFR84WcHj79gURQVDTqNWss4uirF2uWrZ1x1Mkwh51BuzgCXm42dSJYEKMxW7E7H79e9XLeGGyxuJvNnfUfLtj",
  "key13": "4vBycXkttnPtZBD84H7nydmqtHLpqupDwBcqm8J1bzC9QML5AgfAWGWfCSLDtVkDGHs97eaUrx3F6ycErzmPSNzA",
  "key14": "2TVQ1VprH2SvuoRTbYLf5RJkm4pScmHSxGidNmJh9jNJ8HR23cHFNdSZDdsk3QWL1Ye6SSGQXxA6EoZiWqdBMwCg",
  "key15": "52Cb5bYUbsxtkzoX3QTBAx8dQLRUiQGi4pKTtpZ8UMRHwZG1dmBvomW26cbx8q43QtxyqfjcUvQF3rSPyNfZnq8n",
  "key16": "359stt6yf4kMYGRxWgDS9Q4zc7U3RgJL637R1i6Bbg9Y1gCLUs1h5DQvuxLzZ8d8cbBfhRPbz2EfQdkK83LE5gkB",
  "key17": "54PgvGDC1fxuzkAxHbVFKBbdSCLdYBE1oGsj8UMNmnfXvxhBB3zAfs5F7Y13wMzS55V5irywi8PP64VN3DtsdYU4",
  "key18": "5oyAZSoYeTrPqUS3PjmBhGMVC3MjuiiWhD1Hy8tjZDMieJY4uaNrwrZVa89tBMznyhRxsnuQh7XZkz3zD7oejpLj",
  "key19": "2pVPUWi6Y7UyL7tEjrJud7XW6TmFPaFYkH3Xy53TocA9T3UtjMVQuDEKzx1iHR57mu5jAPzjfarGVtvQLCE2L9a3",
  "key20": "5EsBJBL5ULV34T6n9AaExeEV6b4eGomNcB9VCkzvzdoaxUANSmS99ahkrTB6HufmrX4xBpMXzhDKUW8HQaBgyYqf",
  "key21": "s42HfMs7saoYAFMTevH18kmXRML52J8rE6k2V8TmSuKKtfDFNMZBm9fHBM6tFk4ddqzfyu2SsH9guHURt8ouYue",
  "key22": "hoLj1MFp1hU7BXdKQ8c2ryczhqjLf9rtip8TPg5eNophJyoRLdndQFW15CcBRv25dPbe4KAyc1EmnyrNMBw91L8",
  "key23": "5xT6NSijXwXmfqrZJY18tzsWVrDo8W4LthTgzwU9ibeodJZY3WMSok1qXaVRTYm6JeaxPKXCzu2dLvYd3LvCPCkY",
  "key24": "4feLeRoYTutPvZWYHc7w7SA7mrtsyps9vm7NsEL6cCvi3vRB65ZWxk7nnZe3j7UkFRNLipUb3hgTn9LVAE52MFa6",
  "key25": "3g9zzjYsJmDHNcX4VKuC3FRpnE4XCXuwoZKUVrNYZMs16nDzjSM6baxh7aw88KGhin5kRPhC8FZqUrnmRRWhRWrh",
  "key26": "ysDGszwCeybpuCCX49fE9NAFJDNfvvbuqcXJbdLJZ21DnsyCtdxNuZXjVo7r5rN2avNAd3AFYWhd7njqjUeWNVH",
  "key27": "4xNaf1BBLPbKyXhYRD9wkk4TkdwPZjiasW6g7X51Ywgmezd28nH2LZZ5PGpz8yxb6uMyXMp7atKMne1cDnKrnNfB",
  "key28": "331N4AzAwvwA1D6ZpbNTo25pJGz8q3M636x5k7wJHKCNEEPeeUKDh7B73XDuva9345wFrNrLTuConpXm8Ce3nTvH",
  "key29": "4EmMFkkNH6xqKRhUoSkGwCP8FsmKDDF7WAc6NRwqRduW8bctEqqhuj6CaH9MThuzkhsXZ7La5H9FKcMLQodtHGD7",
  "key30": "HkC9ArttBNX19Ak3X8jAf25ag3PUjrNNHZgMLcmQnjQrYBTsWxRNQ9YFvubQ24GhLJV7zAxSyLK7Qx8UzPiRRuX",
  "key31": "5Mpczso1f8y6wm25DB1UgUFbVpGMBZj7Czywj7wmGwFtW9mX2qh9qo8JSrdnEp2cgkTcEKLz8vEuCK95UuvZFja5",
  "key32": "VENPbBmbPyiB1hbQQdNB9ueZHrtxT9SZCjsGjCih3VczZ8CpgZEyUZ63bnfyFnbfp6iJgSGoSzSwqK9X2k5v99s",
  "key33": "H1RTv2921cDW1qfRvDa13WMSTwDJrok278dqfw7xZo3HagLYJQmRrUsnzDw8zKZSSChF2iruxvhJvDpusdgKaTF",
  "key34": "4uWR4qs3b3W9VqrvsuZSCdE8B1LYvAug8xTiSxNaaA2NiqY9U3WQtiEPxHj4PvifLse9CPaVKDwVhjs2hEPQ3KQc",
  "key35": "C3cj8nfa6irJFRfAH6yvZBHQr5E8HrMKJfKT3CQvmm1y8GFZEeYvf7fGiC1s8z7AiYoAX4EXBKTVkYphnconAje",
  "key36": "33bueCwFq9U7gduiZomJinE6A9ZNsJZjzjq8ghh6zuAyWPzvjVaYRp7A9Fsni7ShKNtfZ7EbE8Mu5JgjPPdbxPeA",
  "key37": "kqJPwfkX446s8DhopTfhJtudE16khYvbPGs2z1y9wfMGYbbrVAU9ikAn6EhX9emLLx65ezRxJ39aqFKFLsh9DzE",
  "key38": "acdwe1bkyWppJg215ZXaEvjFr8qbYPFn5euEcSc7Ve41ZsJKhT7vwrnaPEfmrXZCZUEuEmKUmXtcy4C5YemoEHe",
  "key39": "4aMMGrVEZ27CtVWForngXSJE8uDPjdwpVpbqBLtkVnvM8TT6wLwhXPKWvgk4jz6o5PNvoL7pjPRuR6o3nYhKFWQQ",
  "key40": "W4rZwq1Lme3jNrxAMxsZFmTN4n92KtznnwP39gQFq434RET1VZWeNw3ffSg1j1hdo6MW2AFvrDfwR7ZUTfr1SnC",
  "key41": "2A5XQQTLDsM6YjjgpkNJfWwrFYyJMViDuVzb31AQqtbNynEQ45m9GB4hp8hTCd4gWGAicmxGoKydU3f6UCKHdBxd",
  "key42": "5Uw4EMQpuLZrWE24PNtm33DPeYLGTi1ctBE7usmF32jR5cKKQhq5rownoUBpP9mNXf96gTLbRybkWkrq9AUKbz3b",
  "key43": "dQTkxNdTQHqTbGoamyVFrPdwTkXJDyprofQ56pzMiY41HZrTbxu74LVVqm8oyxPESvNB4qxithNhsL2QJZVykoC",
  "key44": "4hQXt8FPikpaUAx2foBe7EhE3bCAJxgsaCCEuCmV5vttPcmp6gbkqtVk2bto5qpjLvrv88JciREYPzEtRT2CfkhX",
  "key45": "5R2K8AAzTzEQTPmbKTf2wA3BmeJC4vCgohTgVQemhWMBKz8GcZEDbu13GQ9NjBBAbCp1mnETeVnCYjC9QwqT8t7J",
  "key46": "Yridrpy98JC9z21LDyDVRQkdboVGpBkynYNkDMDQG39Rw2zwS5j8NRK8jX3h58wWXgZbXm4bAe3rNYWKaiVyMNQ"
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
