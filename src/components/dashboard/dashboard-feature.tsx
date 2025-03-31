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
    "4gnXR4EZev56CpbZbFjvnW2FK6tSJ5P34BfjmWbknc1vmarPuc5vt8DFtRrsHgvMRnRMA9cBKcN8NAL1GXnSkEcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBRmxCTE1nD5nqZouDgpY4x7PeidHynCPVfFk4BWcna141JdPzUVRcu86dzZ9iRhCFNmS4wbS8hBUz6fMrdL3ff",
  "key1": "NjNYTwzvJU1qXBJ2CfSc96ATbMzoMF5NoZABMDwcHLqZaL9KixbZvd9WFKsRmjuHakx4YQcbC3dyqbRt6oEUqWL",
  "key2": "3Y1ZqDJ3vb9H8Ca3WoBWpdbW1LYdyTeGD1LW3ePNPfiXS5GW6M4duUBVp28bSBSzKK8wRpYskA2L6kg4dHttCe5q",
  "key3": "5vj3Lkr5Cp3y2jHeAkW4AyRyGzeiHzo1pGV1ZEhRvuJ64tFs5RfjgKGxDNEi6pbnbisGeFa1Q5GeYVrAukjwFoz",
  "key4": "4WJukuPScGWGSYknmJKsDH5RqBDmb688ZaSnnq8a7NAcepNudwswPcU7H8a3bnjWiDWrendv1yJoJyJtrKh95F7E",
  "key5": "5tHnVxQHPuXcXfgVTW2cPuA5fkHGX3og3d456VWGwFE9tV6JqSkmiheMkrumBaB8x6k7gXyWWmKFji3ZwPbJ4Skh",
  "key6": "554aXb8xYJ1qGH7TEiLQxvdepAmrK33twcdn47GqEeUh1tqm63gYUaezicVqAPwhFC5nE3c6hsiLmXoVLi57SBEJ",
  "key7": "4sADfiCJFeb5TvN7MZiiRuMpUTSL49hgqE2VWuW9AKT6hQQrpb3jPaAZVA4jvPYxm4x6AfuHQpp5Y5k4ttN6pimD",
  "key8": "2XkzoV8t7B6eKXvTZMBu3dKNLuknMRYWm1sveMt9KBu6GWFqZxx3d2eaCzbotxc1Hnmb8CFk31eVLBsruBXjDkRH",
  "key9": "yfvqtAreqPuo1uabzYdJaG89RefDvA6QPq3fN1v3DMy9NYwP859E22p4RtJTUw95SPv7hqMs7J6oDFdrWPCwfRd",
  "key10": "4Xc24ykHxnGGKGdDX45tSo6BSJCobHyDZMPv3FjT29W7nv7A9rR6QEkiyH16biLyxaPfTHBNx7f87fc7D8HiCrQG",
  "key11": "3a3RULnmKPnNr3uXX4HRB6LbhCg7LPgJeFctmnPV3qZqqJ2V1gTfkVUG1xKytPbDQLHFABjNd8AVHRNQVJXGLWLN",
  "key12": "3c8dTVYKnsH2dm1NUx19LbshbaHxw7shoWGe5Z4KQA6cQUfJUwXdovSEgGXzH4YT9Qg6TVxgq1u1gDZbcBdLhbMq",
  "key13": "5qxpV3oBqH7trJoAHdYT8FPyokDm82EepXVdJ4m8Fs7sdBP5LuASQTvb5LCTzUPHf8qoG1hT98K1TAv9Vpp1zvyy",
  "key14": "2HomrYKJqcjWjBHqe65nVb4pFtPa7hk4vzDiexJNvH8t9nFwaUi1V1VrbjY7LAyvLvckMwPsdCRT5UU6T1QFqRnF",
  "key15": "2pk9xWFDaJCB7MP2d1aLMK5EdotJMh2MtccYp74vE83rBa4ZHqBaQekcvTTb59E28RcGz1ZUw7yxyhk67yXW7XV7",
  "key16": "uwMjAB3qwTyHD2e3DxE5WETNWcEjkrzt5RkVD5Kr1oPnWFvabVU6hij9k3SgKBqNfv9Rt327K4ofSj4nBk3QczT",
  "key17": "2isFUjK42pwRJZ49gqmN6U1achnk95rxSMcY7TEDFhFnQo1KWwe2rtaW1JNvXDTzuwaFXV6uCBb5Jh6AamKobqXF",
  "key18": "4wqKqbhNNYT69XPXLsYcWKogfNe3yTPHipnKhWUeHrCwR6rR3zyDP8SV4xbrGL9vMzfT6s4ymNw6FfDNYyvyCEHg",
  "key19": "dKXgbUaK8gWMNmgadK1k71UB1FUwC9badNycyTyYnGuS996WyKDFwaBHH75vwQ5T4h2aqXGybVz7WbPfHrDSi93",
  "key20": "4FdLtNqdoGNCZAVeBTnPtFDojBbKWMATBtqySynJrs16Yn1oCDuQh55TFPY12ZKNvgrW35pewTY23N1jrHSGcpb8",
  "key21": "4pNottgtgD61aQASdVaTqoS3UhskkKKPzbahjrC2EXBeWiprL9drm4d7NHb6Hf36DF5yUknWXhTR476sLfrsCWBJ",
  "key22": "xK2D7cSnMY5rAUfBG9j7NG3FL5XVdJ7HBeq74UTPbasx2DmVrCxdknRn6w3BNR546ppe18jzK9bwvd7eHjqaY3f",
  "key23": "4f7JPMzGWHZNWhWK9zV7TCyiYpwPh1G9Ge2PrVmC6y94gQJakyLvbnnxbA6SRAkse2ztwHu8npN1JmiM8kQdpLMk",
  "key24": "49WqbANCHf19MMhPtwjGJHQD8SHWEZ2349dTYv3NikVQHXpSiVBGxz7L1mJghMATSQXTDDk2mGWNMm9hsMYJPHnG",
  "key25": "Wgyp1M4fDLDL1E27JBkxgo2q1YeKU84LTbF4ioTEFYrCYmHpy5p1pZYp4dbQX6h8KoqB1xswnqxZ9oE4xd5PtrB",
  "key26": "AgHYk4KmpcYwFRzqGfocNukZe4WmkBbj8nPPAhXiEfZweUA59UtgvpiBusABvWuuSozSCqMzhibdzKm9Cuz61DP",
  "key27": "5rmBgYzEVUizqBM83CwnjH48BNtHBBvgneqxzYhA43QuFy48R361iK92u545mdAHj3BEzyGth6o6EkUQc9r85Kv4",
  "key28": "xvHzL3LFtXbEtgiLf6yyVkDLv5bv6vpJ9xwr13Q3yfNyYGBTKsqkHnbu14HnrYPBZih4zFrRtapAcsPaaFutnPN",
  "key29": "37J39SUDC8neGCkJcaamvEBSF3b7aEBkqJ7cdg68no2dqQ5rfV3466vtuPz7MnzMtBa8HkbJX6XpfqL3uTcUmtbf",
  "key30": "5z9TvUH9u1HfK9Rhh3haumBB5hk1PjfmwSXVhttSbC8HaoXNbAzcjCi58JKA3kUPhvayaS4asLNXwRZWtHbh5cJN",
  "key31": "55tpuitUMsfAFbUgZCxxi9GA8nKuYJCNWpsH7EvqjBzkEGLNQe4bzKjNNsMhArPdqfNLpKDt9uXbbV5bTQj3aMHW",
  "key32": "4AiZAfYnheHRU9xEmzs73F6FuXnGeTyan7ScuU3CvUdgyjiSB6dmXZ8QbYWkYMeurbpxi3LuEmP1HsVkhCsnnteU",
  "key33": "5BoF3gWWmuXJqk1sxUmEsHjPhpGrrQkeiozbreNnXQR4Q4vnUUy3NZV1TMrCfRzXLsD9V8mixrJ5eGmMbW9EcKWX",
  "key34": "5c9WRDwvjYM9b19oPJfNu3tskqVr9jvFqHPhNxcLpqpwMXhMNjWK2bsXFn3rS9mWNTiUUvZK1MF886N4uE7Bh3ZN",
  "key35": "21G8jKd8p53kLcjeADF9SfGaWgxDRvW48eonYxZTfk1y5PbgoSpRm7BZdYzou9n7KhWJVR8ga2H2r3cdzHHGtDYZ",
  "key36": "2s3ZjkBBxNFj9FBs3gKQ49y9ZBtrcMxd53aQryfRMHFQxnPcygMdAVvGWrqpyQsGFrtL2b3ZGjb9hFn47Pxq1WQv",
  "key37": "4jiKcgvBnHqQTYwxgZ9hrnx2BLKk3nZPE4u5SxygZNFqpdho7s9u9gARnz7mJjFFAdNLHmFAwCSpEqHFPveAcSds",
  "key38": "2WgWRxVToBAXMeF5QnAkPRH9PxpseQKTKBwyrZN1RBgmtWXe8J8Ht9y7ZPMkHgAAAhLmDHdGEdL3aEiqccYsmaH4",
  "key39": "262dKbsdhKznXWMLfrfoL6CK5x1UYpg1wisKZ7u2e736VYvF1RbKJ2tw11pvevsVckQjhdfbSEqjviKbUiG8XVaV",
  "key40": "6UZ4xH3bvPN9JunuWHAFFxktSaSGSfhdNBUAMx7RaUCgpgLzvU97tyvwwN8JtjnoNUNBHVsLxppmRkpHHGQAp9F"
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
