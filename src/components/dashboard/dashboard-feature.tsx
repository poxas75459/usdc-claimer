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
    "hQ36re1MvL3AxdUiPBcqqtVe43gCCMvsA9T9b4cyzPKsGSbwcWnRsQp9ihvCw1b8pFCQCvmcnHhUZfLnF9ESccr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5STBUhYuybLpMZ1er2M4w2msJEYG9HqqvVSzbAZHBgaWtVuT4RFn3hha7jDrmprL7jej82vWok1SPwVnSbREwLfi",
  "key1": "3pKzrbQgaoPEHcpmuiCwBkxJWPPvYjTq8jjRVdmoL1pXjPLnyaDyEufzeeCvRpz5Qj5JPX3japaTKjbruh6bDrcs",
  "key2": "3L46ohbGLbxiVjKo5N6tAzdeVmhzgT7K999nzScAMfU7zWi82pNg5kWEQzkWpHjNV26q57BmDLaT4jaiVeX8eamT",
  "key3": "4fESuGiuCQAtKkhBufbn9vo4T6hTFTNRexnqXWRt8qPmDcCkjq3cASzkJbB192VcoVeXjGQoxpJ7Gsbdfay2qcAQ",
  "key4": "5z1QMAQe1j2VQwz4mDUke9Z7QgkTtyJayqoaPteJB7fZ43MMWz9wWvVQHh1TsPkAhhjVwpqJ4KtvWpKMAWEXrFwR",
  "key5": "4ocT5n2KPo2SQVHLwEeRzkWtPuyvxvajcgPChNsg3X8Sfyb4jBN5XRqkQuTV7ZnSvJDMs3yVdi2gFgswmNzFTqjt",
  "key6": "8boWodEb1iw1WvoJ2sUpPR52KWBPe4evuJeX1FxgQVJagDzE2ZF9gHfKZsyYFzkTDSxonvY5DuQK1ra9b5PHVjS",
  "key7": "vjkQvMwtDCQosqjSH73CQgrQbciMNobKYzHuh796GH7VeVWNfg4ULaT4K27kwmHGEn1hStsmLbRStNfHKtWF7Re",
  "key8": "2yetU38ay3B3YZExT8ZoQjv52VaeUgmkQKtVi6NGGT5FDsgWp2e57rGKZccjzFAcyEvyr23aMB8oismVJDrJuKg",
  "key9": "ifnA4zcDP9EfE9LBAbAnJJD66yU6nHif7ZFHYAFLPtb4MvFMY22DUjGi4v3vQdciLKg59RRLYtqZFKF7ABmur4m",
  "key10": "4Bxpf57FHjqi7ov61CVrSQednis15miSFM3d9KsDRb3gqXGTvCVqBn9enKRdEwVwM2F4tRerQKnammkb5p5aPD7L",
  "key11": "4owwNroJZAxdtpYgtYk3kVDtE7bc2Wk4srgBspVhwXcKZ2mPwwErNPN358nk9hPspzntUNL7EggrpvotmgjRB3wv",
  "key12": "3Xt5j5A8XRW2TH5xtfQEXojTRn5iBstsvgYPHcbJDKsSxukq6GBwbq4PCeFkekoFynhvvk2AzMG5GV3zLEGuynkf",
  "key13": "5mYBqtw2HG6VHjpAKbs2AYUitwKFYkYJLLaVUmJtFnC25s7nKQVcUy6wag2hAMvufxzUJEdkwpNicqsGLtXVztXy",
  "key14": "4WUu8wnA8EG5Y1GeUkSVDKUwmj1wZeah9zDMULJzbhWvbvEbhLpHV73VnpDMUdQRUVyoKkcdyvcSZ3tBc5VkGDdz",
  "key15": "J4YEEdVuXgM1ykN2UWD96gihnHoi6Snhsd6duFTX6CE4891G5p4Z9TKRNRHPKZ6BNpHVC62pkY2NHFYkNJGRnCB",
  "key16": "4hwsUy9UJEi1mPMWHK2ZG3q8iphRR8LhTb9hwQEV2LDY3MoHZEZ7xR6epEJoqQwWv5d66LMcmRgqgKuXwLME7EJA",
  "key17": "2zUYWyB4ctkN6JDLjwDnfkjUaFfP41hVGtpt75AWZgwqzdfsZNCNF6GZsjfRU4ojLHZS5atj8kK3sRL7WFrryc4i",
  "key18": "f9AxPd8uehHBhj4Ko8kEHPu4VXfRWkJz7s583VqSJP1NPcESXRZfW8yqMgFD3EBfcUDWY88Sr9H4qSJdzCaiyQL",
  "key19": "35HHRqJYYb1HCCiQsHiPCEPCgRm1NkjEZuXq3ecHdPyD5DtF9RpSbcpypmRA4Lp2k5roDMZy92je56iDfFvC4ZXy",
  "key20": "3FjrN1sPDo1gV8azaxFM9wJQAWJnkEtgf26QB5begZ9HbfA3TpyMV3VbEzrK6JGvphu1TyRDZSQZbDAmYHAWrvVs",
  "key21": "4QZe3kAqcHsZW5PMRLNSic7u7cTe9voqNirswhMbiXBcx8D4dQqDNeP1e6TqxUmDaajLm3c2DA7q9BewgddJbzEp",
  "key22": "41F8bKFeN4iKt2sX1UfRcz2tsSaCDSqiHmXoLKBDfvT5wvWHGszfNQLyf8aYeqBaRnLUSkvyBwWfXKMzM1Rc5XRr",
  "key23": "284T4Q3mpRhKmid7F2GM1VWoBGTUcwMvm7ASpqhWinVNiGNYsqZcetKpyb42jvoJVBLvR59fL1YgmqnvLXuzyn55",
  "key24": "4v81f6Dn5UdRvPLczZkj4ffcfbZV7JguMmq8pVzfa7S8ioT1RYkWk9sYTMqkv7EuJ1BKFRZ5nxoH1psRUCYe18Kz",
  "key25": "5nwhJvj9fX84rW7rpCvRWyWXcRfRR6doLSjeqW3XFDLoCBqsUsifFbtXnGwr3tsK8t6jffjGGZXWi3Egnqcg95bA",
  "key26": "3VV3PGyM7TXp4bP7F4h4jrVr6vegUsNLrqZcSSx2oyYhtUdQdgY3FignvPQRbBcYb8jPvpjWFV253eYpr5bZfYzm",
  "key27": "4svHkAZwprXzGBhGqH23qxFLRy1rRT1dtQj1gQMSuwQJxaVVN3VtTCKhveqzjj6MsciXzeC87Jfa6FPa2JTiWTXc",
  "key28": "54vgypzU3beFjcDHgSUbPyts3p489nYHLwopmnqAVgjRV2DjiNCuzBmgpqzkgpNWZeQo1FvPTqQEk2xZT4pSWLTi",
  "key29": "4sQWfT7MFgXcgyBUk1qcNccLdNhDfuxXeD4e63Qap18dqEY57r3pCmMrYWWvDSwUBQ6nTwfjBR2t2VrzScwhwZ4z",
  "key30": "28XGPMoApmddDFW9UCpJFrD344fxwa9B5tbbSBMUzfbBnmyqPzj6VgmtqmoN1Y5yYw66iVrwuojHEXDUFu2WU8MK",
  "key31": "2yPQ2VGEG1g6Xy7G75BT8CzJbQiy8EY1jJW6FiuxagJGBscd8LkRJezSSam8nkKAprkYZtVSQHg8C33BDqT1AMh4",
  "key32": "3mV2Xtqff3juVCz6bUTurZiKBhrWNYXhUsmR27CuyBsJGU773RMEcLRtkRTitvgSe7nkZsbLYrzeH5zJ8b4X3b4w",
  "key33": "3o3iL4UNFihztb3Yo9wsMFuLBJMpmCGxwN9aCvukmArtoPE9baNT3FZEQhk2Ma4DPPnU6Vm9eGD1RJcjww6N3Z8E",
  "key34": "3NeArMjFsafSF7dHBgJPwwBSNH1EQse9bcw7qxaLrCMV2bo2xpqC8zyPFdj5QBx3WdUaW1upJuSFfVf4aYEKf69J",
  "key35": "rUTX6ENif5X6YoSg8CANq84pNxeGhg9B2vV5Hf7JgppbyKu1pAMzVSFo1FPV9A69QVH4jkZYcfYa9G4zdTRTUPf",
  "key36": "5cY6HDq3z8uTqLL1Nfn31eVe2maJTh9QZH85HpLrM6iYrCAg2sd9xomDDmdJNzLn1wbTbKG7pJBnPDfnfvd92tHr",
  "key37": "5Tqby6mWaLKjoKnbMjRB2GQ1At65Z24nsRY1GGhiTm4p22cKAR5UTDTdpCPKNejc2fsk8kK8LUWATyBkYm57ZybW",
  "key38": "3B6Uww77Xx9Q2LFFTQnndWoitnrsCvhTEq8NGjtFw4GN183zTcyvVgdJU2Lw7QnRgzx2PF8mhx8KYoVsdSamRY73",
  "key39": "3tUzQ2YxffY5zY6WHWuHNqbL4SeeCoA9BbhMDo3SrxrZyQfKoX9qfokfKBihey9JZZsiEDc4FekDadRbShAY9SZw",
  "key40": "65vv3bXYnsY83yrD8oxJ7kAKmQGfh5VWPWMeBRUdhaytrrWMMSS2vbCZYJRh5WwxbXvAWVsZUUDELCUi1atmkadw",
  "key41": "9NpnJY4W9WWR7rtrCGLDAwzFLdewGtN3AfRSS8cXjzoHvybBvvYPU3VPwt7fj6ZFFRyXXBGzDBruQHdwQaFawpW",
  "key42": "31jaSp57uM4iy6XUDeMVtxXWJTEYSyen9cmmjNDrgdF8E14J96fEhMJpsheVzv7aMgyUoqLLzXsWchD6UQPPRkL8",
  "key43": "nUJWb14A4vLFSjCQBuUgsxEsqEFBRMkuw897rEdcUERdo9oere1jf2kX6ZhNjpxKrHgJk7ru37tJvhh32AvK3eq",
  "key44": "4Q5eh7GRLxYga3fTs9YohmTza216t1PjCmxJbZR3D2iTDQtdgYew6SbeXQinvN9Wdmf26uJG8GjbYao429RN9y4",
  "key45": "3eqcmAnsCGqx1E2aTX4s5CiHERqX8vvEiEoM8TLefHdV9eaSquh8uUTHCzdTiVhRV3VnWTdBYrkdGLEV3MrETdpa"
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
