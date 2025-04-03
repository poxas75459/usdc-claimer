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
    "3dJedoDzCRFvxEoPp9GaQtAzXEcgDu68G4JQv4rVaoNe8MhAQPogMb7pRxb7gKEoB1EQk1zXZkQaxSkT5LLuiRb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d3ifSyKmniAWr7SFteW1xUJXxUJjPQD1tmmaB5LwYNiFc9giTnjPxuCtihP54T9EZgcowsATagysPBRhj35uiAq",
  "key1": "5QEE269HD63nCsGtsg7p5nwvy2XLrRzJ5xywpvXQWc5mXAqrcpViN1qRtm5tSfWUvEA17rcGLEDReifutvC21w1y",
  "key2": "36gXozLdWUqVUdf6wo582xYkyZPz18BqQZZzJuHczDWFjxv5tizhEKoqCyVHyp4CzzDyTvPgai6rCQST13fjjBWe",
  "key3": "2iBqMRA9pJQ9YiwbqFwVLGkjw86XwuaKijVenUqQN5jthMd6eQGqWKBcJb3QnKmaT6wjwMw2XaSFDXDAAtBhZTNf",
  "key4": "2W8Mzkfr1mqCwfuP2nBo9URTfJNEVEQtXHSZB5eiWbbwCQsuW9zzog6M7yayoJuEiE7RycAQcBesVbNtwFa6aQEg",
  "key5": "5LUXVbKXBvStosFZqRHsaA2Jw4vhU7WqYQ5VAqj7p88shnaR4vM2LsHgEN3b89JcjJnrXusCBYyN9yoHLycLLrHk",
  "key6": "2bkrCpoNfrUiUuhwG1XRA94hCQ7PnFEgzVEJpk4x2R63vhkST622CCe286Vg3TjaVBK213A1GD4if2Cz9NZ6NaRe",
  "key7": "MnhexgjrqmfJo7oauK6P5K62AtDQ2Np7ogKtB1vArJCy2rfykpDiAhiWThnXpbajJuWfXDtKvnNkAQz1osuvEkC",
  "key8": "2t2inXpNDVq8oQzhjfFupHx1dqV2KUyPwbMfqTNSvTSZPgHCcSZN7AVp21YgrXU6UxDhne3gqV6KRk9ZsrX75rp9",
  "key9": "5hvF67htNwzyWJ9AE83bq2DCgoiWknsi5kcLy2AvUNpJ133Tq9e4y2HHRkZfKLXML82dmNCkN1kkFn2DJimVYwgj",
  "key10": "VGLQ8gorHeXcQuJp8yRAFkDmiMNpuCcEevCeWVzs8q1mMf25Maf8bxBtTX4rvW7Th6gmqkySqrk724tsrf9DiCR",
  "key11": "2v8R8orJ87cDVPHCgMoGagKhpwVx8W6cnepkDVAvuMDWjtrT4zSik17zHBwqYsj3q8TrELWzYMC3YhzqTUwJq57g",
  "key12": "3CSrSvZ6YsFDsyLpcxiYEVJCrgWmHniD89vfaj8xbxcJdcvRLmprfC6q6Jd6g7cpEXW8yZdS7ZvkSLHTqP33FeNs",
  "key13": "54HjWw4DUMDopz7Ew3kHz4wHTUGfSyzhJaCrhVKaioCDnyGEJE1SJDEcUgpjX353oWzYuLLR3RLzNzKTufx9xnR1",
  "key14": "5rm4r24z4NuWCQ5uxJtnYGj4b7jw3dN2EUXYjJzhzza1YUuzmUppqSL4LTDgyMcQnVeQ2L6HBXNN9q5zp1L5UyLC",
  "key15": "2uEwxBNKsniMggPK4dfzSutpb4ddMK2wtrJ648cBVuhyYDMiJuhTx3LpwgwZQ9S2jqL3Csq84YY1ciUqGi3PGZ3o",
  "key16": "51PqoPJ92EANmG3scivVVJagybXgDjKoF1DMcN6YLfKUmRGyJZ7UvGsWFCdriaTVwAThZZbrgE4sPXzw3b1p2iZc",
  "key17": "4SyuJVEcBeSdKiuJMUzH3MRmfHgfhxvkYqsKX3FbFAmheMjz1jsNCSMjFcwJmPzZTU8U2kjm54VYKBWvhYw88GeV",
  "key18": "5XGsjZTj2C7oEz8HX2WQGB6BUMQXxq24NtmgAKmQYBdo3qda8jJyfaCr6Tzcc8RTR25WzCmaFusNt1vRnvkyDWXz",
  "key19": "dQWJCC9AsoSqKYzkUib4jjgvQDyQySD7F2KCsDWVvNfhbzutCY65i7S4HFrvaccerapHZw4shRU69h5cM6d5ZF4",
  "key20": "647YGyyraWEeMjocKnY8Aus3TeX8sasebLr8FnZYuBEU9uk5EyxBLa71QzXzz2xBY8EohQaohUUA6bSAZiXqWeYK",
  "key21": "1qqz97ysUGh9WikG5gFLWWuFB7sbJgU2xRSwXu8mwAogheGLFCYSGu4FSADuRUSNUdPud2dQA36E7A7zx3k5vaR",
  "key22": "XN8MtvGYtYyUqmv5aEtNHatpZMtYMPQR4APHKRNnAgU2SHGADMxLvE2FN2jFxANDCN2dNE873WXK38HrEE4m558",
  "key23": "2qqUY6ePk2X4XTjHdTpNEdauyZDBbBih7ot4yEgzUoWXjuPowTXTqS4WdVN1hBiDjpPpqVEoCe5p2e4s89G92ULb",
  "key24": "3YdZkT26iF56L3vkUBUCVc2kytatZ6FfS17DATFtB4aspRwBYGCRdBZ7Hq1ez4gypVEdvACKPttqxTMF9QmGEbye",
  "key25": "28fjkPHWvidDh4eCe4A9bHnHjB8enfgtsaH6kNokCkvdmEsuRNBbATwm3vm9pw8aQKtBV1xBYYarpoc8siCtPH7n",
  "key26": "fgq2St2smRxfvXaNnbBWNPdGoewEJx5djHyo9pV2gUYyiHdXAyeMeEJFncAHZo2t1rCKEHzkAUvmPRd9V71EqHk",
  "key27": "2C5Sdd3TEEznTQtajBVc5vSMCgR8HNShpkeQWHF3miLVkGhSEgeEDctAMxx9ynPpW1pgZwVnGj5KVGLFK9Eiqe1j",
  "key28": "3voFZ5Ch42Xr66TgX6mNxMLQVNUCzSdYcUVep5ZVz7WWMULiQf12n85ZRd7RcE7hHdqfXyzC37BxhheXABAUAzdc",
  "key29": "28d9oEDpyXzCNjDHzCMgpYYydiDo56GrZHfhwxkLFNZp4svekrwLgEFdh5gqvqXvSrTpkqubdcsxXDvGKsZvULYV",
  "key30": "3GxsmuPQs5gwodrN3SneEXbtgZDp1JKpZAdRG5BycznR4kvsZQtjcLh5u9QkvZc9qtsv8TD2iwCV54P3drguyHQv",
  "key31": "aAbrw8FMNd8LkFpUW7KTw38tMaLvZpZCj2Vq7hRkt2NJ1pAbNW9Me1iLtKdzcXgkYHHQCfRKP8bs5H7ud1yRi75",
  "key32": "dcqt5EamumLA5oBdSqi5dE1jpGZCALrMPPy4qr8JFgq2Mqw4gp14GmEXr17SszwuLCEbnVLSDkRcRAGGbDmzL68",
  "key33": "3hLzBfqr8kJBHDocv21JPmi5H6hEq9LXdtEQFDJKRHaizuYPA6HcoW5zyFvKTv5ZhRsDQuy9QsSXjs8DRa6jnQx",
  "key34": "33i3LXgHSpZqLbJ9Ge9TrV8DPMQFfkrtyfmDQdHphdjJt6htVmyVAY1H7bomoCroWfpF9HjdEv3C2cok8EXESaRh",
  "key35": "3fXtgGQt1SyfS5whaUf8ZjgxJzAWf2BkWys2c2pSwDVGibUjAsqsBK6US2e4wFAWXrMQiAs9jcxZ1JVPKJdEasiy",
  "key36": "5W8KDkKTJapoGYKxDv79u3xE2dP68uA6ahVoDwBzyGsuQYgPmBJCRjC7shyRgAMDszJScVYBiar99kxYzai1zhmz",
  "key37": "58DKDMtwNzRGtx7uGecsFEkDyCsiKHJKSCa5suwYn1ZME51x9VLo4B5yjZae8KQpbMdSLnoBgF8BSCvnfNmUKhzq",
  "key38": "2puvU6Yi2eNp3fS7RVjEYnGcHTCqqtJKHsBZ3bPaKBA9siUBXDcKW8kmPRRAW11zX4mqc2Vo5NhV3ZDJCHTb6iaC",
  "key39": "p3c6BvBs2ErUD9nHtreUc6i3NnSE27j3kkun3SucTMe3yxP2rhcjAEE9DPQ8ETUNzv2SvR1NHWbf131jkMpZ1JJ",
  "key40": "4kbBkCM1CyZXvzj3eVUUWMwyMATWntdsxGXmEteiNNctM8AHuBuZevDwkJpFbKs6nteWFPAnr4ojSGhzDyHWMYk1",
  "key41": "ZrLAhcELrBRkuj3f2w7L42jhzbtdcaKwHPftvsCgxz37Vwy7qXZkg7ZX7zjET4fVoXtyEM44bpuXX8MiBaL3v1a",
  "key42": "G2GUuFCRKSradR2iRcZekgeFTpmmJusnNVEdqT8Hkni4JCXa3H8tMm9ht5g8iWAM7tnyivXQcXkqmuYwcycuiNj",
  "key43": "4gNK11aYy5BPmB4bD8A7vpVeJuFjhhJJhDsrcgmaaUfPuJmP2mSBxp24PKJa9T39T8LQcDQcfEXiD3tAzUsNsX9x"
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
