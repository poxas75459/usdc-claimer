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
    "3CwTyanxNH93qjFiFqniRwbGuRwhF6KRzVvVwP2T8hBSvhtkRfGjGXZCfua7eGynKXkM5ci62hvoBcKynPyNBVKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kf5DtFgxNdMiWrJXyrjMXBsr7fQa1YFR5r5P7pqowisaXftcw98S7ya1Mxb7eYVXvdFzSTUJGAJ1HQ3CFUFj66n",
  "key1": "34SWBCCdBPS3g2GUQr6inQMnwYDTq4aYb75ADaCbbrWim13N5ETL5Uxe4vd4tk9XzUmQAqH7jAJegEQcuyZgSTMY",
  "key2": "CrAmPGiGzMHPJdrG8CawZXJQyTaAJ8sXKsaF8CubEyjMvTazNmkKqH2PyRUpF7YR7SoHWWx4VNLgfxQD8Ya3JS4",
  "key3": "4Jn1N7Rzia2xmGVgenV1y8Y1ErpbSQsj7V7Q79AahduJ86KX88YAeAKWFwcwVnpsDnhWQKHyDMZVYom49eGDov8k",
  "key4": "2nL9RPq3Dgz7sCPfQpLf9y82V9TkxjLmuPUQsY6C4oaecSEpBV19hYSjqfYRtHRgH9wDRJWVr3CiVi7Rzvjt4Gon",
  "key5": "3s6iMcvxFsmGf1jG7Eg3iZfz61gsr49y9vzTpWxbavEBWG3Q9JrndPhiwZef1kgtwfBFTWNgDn31N3DuSk9reBtQ",
  "key6": "qsiKEEqw1nDpE4fnSnFH6mLuWYgn4VVVwJtvAwn6mBU2ekvzdDd6daz2vTyWqv2g6t3s2A9Xsi5e4xqkFiuRsKm",
  "key7": "2Ejh5V3EQ4JUHttgBqnPLwfX3ByAaGy8nMqTdtfUcitVC7Hjf9exhyQjSmEWV2Ui44EXjddW9XQNQ7cphHX7sggy",
  "key8": "4JtrkjzWTqE4STpdQh8qQXhnYsqaoy4U8JUFiP5f3pYZ5XBsTrwXu589hRKnNqsQ15ip5JFg6L9iXWxWvuj3noSG",
  "key9": "2qruJynznAnoTVtvnWppmSrEvKmSq8xAqMCsSviGrH9serBwtm5QXaW188Y4zdwdiAEUMgJhiHTimyWzrwj76AQu",
  "key10": "5ErT6RFodrYAY94gCfpeAq6pySs4apesH51sygPaTRmUSFhWsfaLnZXzhuKH9F3sKF3tUQ2pQH8sUaiMGFoZ8XL9",
  "key11": "NVApdVfs4DYWhyNK3ZSxhtwqktuCNXSTqSuhe2n42ThYAT2MxEboUR2buGkSerXtZLYoWnCpfuxCp7kp9fLDh8k",
  "key12": "5yrbC1YFDcWQCrLXDBFjJvJ8LAEvxgdgjMPGTsUU6dWVcY8JTNh8zzovsuMN46QXjdLRp9D8mbF3gXWydr42drdn",
  "key13": "41WvWSSWetQpcCDvNCcirBYK2qh4oYyARiCrqxNKFwJmdMtqgSUTdmz4z4BHBpRzeZvyLG4tfCmp27vsM7CWvXZh",
  "key14": "34ACMKq61PQHmtXCWbvmmDJfnBXzdfQzjFncXbiNqegkr6VRJzw1VSN8ZtmKrS7nxUvx3yzrNgYo8WYXnLVCTpyN",
  "key15": "jXpruNCsvjxcaypRBFJREWAUSjmUs4oi3eT2MqXEZZD6EaR8hhjzwJudyhp3YzcMqqdcrZN198Jug8d5n4X5jPC",
  "key16": "2xim8Zo5C8MDVB5TGnU8DRg2FBxYBLBi4vaX5X1otMR9NyyYQ395ffdGd2CUcJXLcphzjhecEv89vHhwf8M1ME7s",
  "key17": "2VVH6H9qwcmh14pZszwRQSFgG6v8z5hCE5AHFFFd14nLu7cfovuaRYvaV8VWebGHKmLgaAD7EasmncR4MTPUqbPz",
  "key18": "35ZnKH1bSBCi6BrWoxJCRrUFFKPp8S5W6Kxf9DPCZpusyhZ1kVvayFSKMDhasZ3XMXPxWaqhHSpHkzkHC77vgaww",
  "key19": "399bL8rPNyXZSGiTaTZpKwjgqGmfqh7beoWBAqDj9LjV597RAMLP6TSBxMEiwKBbcPsLbpnC6EXKZZes9H1tsR3V",
  "key20": "2uvbxHbJgP7hT7sqgbUn1hJM34HA2Mva2qQB6LovrBwjMYkQhJBuSmW2V4jiuZwyk5CFxmMRrEUgWjYGebfFHEwz",
  "key21": "bbPSQWHEh46GWmocfe5YbfakBJEfv3L79XvasX9o6aidnXiC9n76wZw2CVQG1jXpFvgG8kxh8Z55sssynGYECRo",
  "key22": "bzazoYeGXQ6Aayzt6Xp6Pw8cPHCJDnbcXJEfXBMPxuWF3v1kDf5AAPJQ6j9pLEz5Q5B9AP5R8aHFJEBazhgXjSG",
  "key23": "3ZC1W6cXKN9M9sJjY4qDct8SybbYn1A23FdphVCebgvH67JVeNhhVR4FCFZous2Mr5RgaGSfYSio43TE2U6NKw7c",
  "key24": "2XNBLvsmYnGp8vRxB8Hcm7MbpknTYgAW8ity8SGeB3c5ni8Tz8VYSZ1Xf4gdfQMQ2qqMo82rzJedbqfyKHkCpKRK",
  "key25": "42KA2L8CzR5UWy9Cpg89oXrWd3XU8ia8BcvnEcvQafFs7dXUxcoXjRBvtacQAidzDa3FeUperLSDmA4vYuTFEkGc",
  "key26": "3sKAydpZvFEuzPHzVVUdxL6YTvZVsazkdvW1ZwbbQyULXs3HuUzUPwwuDDkDnqLq7ngyqWujxgZynmCvgcoVoBif",
  "key27": "3eLxcKgLnL3oJt1fze8qFbDNba4P8vJFvJgnPruXZDTjFYerCtfjonEH5NCZrkiBwK6T29wpzW8CUkQPMSUcKJgA",
  "key28": "47gXasdbA4k26MEGATYsbHyPzaEBS7Kdx7wCnKJfQCXjrTTmJ95wvd8PMoZXZEx5Wd3GhGHnacS2Ujc9huLW5pwM",
  "key29": "DTYQr8rnUm6NumzJzpzMFMxJ4feEiumuLYBGzSp5yH162TBNHhEapJHnF5vzR2P1DUvvSwsoP9bVCQB9Z7UbaDQ",
  "key30": "21BkB3xjmArkDP3TmC24L6HJ8hcWiu7ug4re9BG5xZ3b8tJPh1majLXe2zk4MTq22CCHtcewPro78c8V9K1uLArS",
  "key31": "5XptXVJLbCqXdAGjsy7jFxERsZ9ryUA5A3rQ4x2VfWPxuSqf89g65W1XU11ymHcxLB1taFp91KKkWiLDiQHRChNg",
  "key32": "4Tb48Kf6edcFwVur9dQ32LmtnQBuPMfNDpsZ4eG3bXpYhPwAG7n73WkJ1Y6HxEfwrRCjD3SVfiUXbYbiGic73PrD",
  "key33": "4FT7iMs5bLJbA41PLRgkSbENJXaZtmqv5RKBxKyqCbwVVYsUomajQt51UbVwMRm8HYt63Z15kHo1zewfcaF5a2oH",
  "key34": "tBgHfvj3c6xh43QNkUdC8gwgVydGvGqqcJFbSpKHKnumzU6FXGgSc1SuDm9tma9VmwoauKQD3Th8MFkqWsNkEHH",
  "key35": "47nQBpqJoFjZdHCgYdiNNp88zU6Sk3mWesU59Km7RWN6EAeJvjGrf21kayjSEhMTwUW5sdpkeZDzmRRq1YM3NoqT",
  "key36": "3cdJu5jRDgCqzK1FQxG1xqBsVXjb6ickCjRWYWDUF4GuJWWgXrTfgjpFA8JNaKLBLymcBxLZDrdP6LxRN3LfJnE7",
  "key37": "5TUgTeL55DpQVFPAhuEkQSGFhjBP6wuQAKYSzRdUZoVjG1wSh919opQKy3xpcwetC6PgmUxUHC2y3waAUzHKJzzf",
  "key38": "4LRJa5XXC8yS1phL7ZTj3kNUvU1L3baLsQcNVYxnYdqVXaEKaVY6ftmEcDARvVsjD53NvzxkmeSNCFua7qKNtjPH",
  "key39": "wNFiiLsmiDRF7yeZoHm2y8Ben2XkDEBfRd6R2vhgFLp56BYqG1n4uPKHEjAu281hMpbeo2CdKrxK8nNMGMy4D39",
  "key40": "23nyeJmKWoGLbvMrVgmJ39XSnijzZFuGnwLKeAR19Q1wB2843qnMEGd1WE6y9XtgZEzCfouwMQU12RWbtMi8rGEP",
  "key41": "eYqrXdA6GCDHZqjEpwDbKBfLgB88myFGiJqxmJxvaAkjPMka2ZZ8YFjWWSqWmAKFk2RVnLapQBkqkesxPKxN5ZZ",
  "key42": "3VzgBDgiHMegwyeaDdA7TnSrKS5G72RCdmDa2z7eo6xigtneyBSgUdCzhu9zqZVs5fBNCrPAQrYvvvpsuGC3tHQ2",
  "key43": "4JFVvNJJ6BrAMCyLw3nkuZMzav6unPYJzCzKG3MGnvUyrBCsiR1H9WnAcuSLwxgj55Ne5Ezr9BGr5CyswnDv1P11",
  "key44": "57A92T2P5pNpSW6ihmTFFEk3zZuxEzcNpZCDc24GmLdSTaLdvxedCx9EF2ZXpUdJizXspkqkdb3CwD7m2WEz7aE4",
  "key45": "31mf52tDJYU3v9vnyDqciaHCGdY4Bm5kMMFJPFGaj9NdF2WRoNEBvjsRfzjGZrMmbPEK5gV9W3LytcqFmkc8nJBs"
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
