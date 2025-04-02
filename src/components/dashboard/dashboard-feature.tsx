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
    "4vRmDgdgHaEkqAEy8gYafTN1gBND8zhFXxmk9RVXXXuQeuJYpHhBz1p3fTu3cNxuobaJguZE2E2HLWAfQzft96Q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bjo853VeW8WEcrB77pAZwqsTiqy4AUGTVm24mQdEJJNqF7xf8eBKEf986XGztwffKeX2mGVR14EhuN4WhaNxgEG",
  "key1": "4QfXbhGtt68VBhuVw6ZaQ3SWz95mBtYUwZPw23LRGErcsxkKsKSNHTb78MGvrwqzbqdmsGXAJcyTsix2KiQWVGw8",
  "key2": "46Bt2HkXs1zXhuLxEnCXNoe2XuYD7nq4JLhYiHrYdAzGZYMczdc9QRBB6khhK16WZu3CJYTVAnQ1SZumfVvnhpC7",
  "key3": "5TWzKVBFqiv5X5sjMWGa334jYtJnBqRKHrdn3DPdDspNFD7brEdGDFEs3rit4mt4s5v1kxTvpD4EWAABRwno6SVD",
  "key4": "kbW7RZfosfCNBzwJQpVqoo2RVoXgAeavsu6zoBPYy1mBrLEFKrz9CGs2ZhsovrtVDNyAmb1MpSdTLVniSZJJKQY",
  "key5": "3yeTKD3kxdUxGTxpqBj9EWTPnPYqYDCByAFzJPnx8XsjAnA4EcJvdarjMsTqg4AfkteHpoFZzAjwAx5WBX8J81e5",
  "key6": "ahnWzD35vmHrXzRt3irFhZe8Wirq1Hhtm8B1j8v5vwcBignhbg68vg2GLW2Z1RkXxxThXuiiRLBUaGmSLi8GTHA",
  "key7": "5gzK6DiF9RQcHstF8rCwcRsX31ue7ZHTSNy8wogKGvEfx5PWrCgynWBdjJvKsN9aifRV7RRSsunabHhe8evgxzo4",
  "key8": "4Fd3zmYwQQ1Kqu5G7ixLTpg19X91RKZCd79SFQ1i4XvuMbH9ex72m7wJMRhaAahgv9g3kLvfbrKv4qYErjeuyDCk",
  "key9": "5AUACC7YWV7Ksx9jnrcdvFXDcM58VjXZBL7R6dhgcz9HB3YQLKGdRyzpzWpR3wNqTxTskdzcAa61QT4aXEtLCFLQ",
  "key10": "4Y565DghBfqhEFwnMC9bo4qd9xq1UtbBaqr35jGgVf4YFSAQzaqiLxAaBhGTToLL4bz961Qx98EXsXx3Jbc5aCsi",
  "key11": "2FnpWGHVNHjmk3jengyCnoq5StRHpxrsjPLGePEzG9ftWTa1JiomrQ9HHaXnCmW64h6M4uh6BW9Qg6g8hcVa8VCR",
  "key12": "2gx8CrhQPeGfbuTpoKsPW7LPnXpUWTNKEt44hEtGgpEmDiwiTQS4FMEKU2GbhNyEcYPg7qo3Sv7DHXcA3oRTFzrf",
  "key13": "qmrDzbsjy2nkSrmgCzJvQQx9KqfxAvZEyt5zpkifJs6s2FaYhCR1gZN4d9d73YBUS76KE4rgZXTjWnf5BbWMUB3",
  "key14": "636zTdkLXBesGFeCG65Z9NjztokU2HASPVkR5punhbfdWAP9yd5o97wghrDDyCXzTJbxWTL6kKy4BFdQEBVoXw8p",
  "key15": "5fHw8mz3Xpj6Z163N6FqsS2PPbxNYiJZgs5gRHnjGfp6mXwvwxG5ZNyiLdA515A7gQLgCw4CFWfeP3gLwFboMMwG",
  "key16": "5nxEMTFrcMWRBoCEJq4QZ83kMRKxSS2HJBe5FPEDG1jQBbeCshK57931xq3cnLMz4uzFv6GDCTAVnUqBFjprir2w",
  "key17": "44jonFkdjXrkvaW2RQrKSL4gQ23d2g4bxPJNfKjPcyso1y84GBDZzQuaopfZd3EzhXAqLTVt2dQxXy3dCECpCo32",
  "key18": "3SeUr3aWcveVfMfXfqQ7bzuDuM1io7nw3ASowS8z8UL9hqu9V4pfLm85pERY4FZvBawdSQo6wGUwyu6LL8sURpc",
  "key19": "3XCSz7j5HM67Pj1rQnwZs4MjYdHY3k8eD1Eyr2mYpbd1b8AfL1cgEafPti2TD9gFf9Tvq6M8uMbntEaC5yPyAu2",
  "key20": "Cyk7YcribF5D3zrQawJC8MFo3dGbXYfFSwxpmEE6P8FK8NbVMBqhw7jFF37XmPuQtfWdnC6cjnLbvwLAjAhZngq",
  "key21": "2xtVtZDXcs5QZ2CiaZMNDTzgnWgx1DG5YF3zZPEKhMHSFXMfXGQNcUD6iHdEPtCEH98GChJof8WL43rkoY1Z1Fpy",
  "key22": "RmMvu67WnUqAp7MHTempVjXvU1yJXeSh9vZ1duvPVUmGudQhKsq6TKQiMUG2E8uJD5TT2sv725rJF1gzkdYCoKZ",
  "key23": "HJDJ3zbg723HbiPEP9rf3zjr53En4BEsiBh4k8Sp3JjNzECFAZ13oez2BwBb7kBcCZFHa9zcJbkBUqFNhFtVVuV",
  "key24": "52RL9AAn71YYKXVCfngFKkLED5wpfRciSMD1tnEE9tF6kFHSitgRfaMSD8yZzCGuH3D2rQuz2LW1uXsHpK1ijjW3",
  "key25": "WQa7LavgnTi2CUzN5nPctqpnXEFuCtVXAGTdhmvudbdyPjUttRngs5F3qJriZyvbZDxZHwj7uJuNFvnVnJmzQ6P",
  "key26": "XXBHfZFAezZc1WFseSuS6qQUxVUWD6JMPrF5XzgmBgL5RvhkxxH6bbRdaWdMaRKkQtnMs5pAdEQrWvwrtJU5kpM",
  "key27": "4G8P7Q7z61GqNR4n2ARBhhhdYqmxjusBUASKHYu1YStAQxcoDPSzcxzJxsdfhgYg8AiAkJtYRsDyPQ88BXFrkpSw",
  "key28": "5Bdxsr9r4DCiaun1AVe6uGuDoVTc8iEcZhQ8hzAPUsvPz4ErLHttmC9qhhK7znY5Achuv49Sf7Ptx8kGBqBdBjJb",
  "key29": "3RSngDb2iHpiZ8ZcVpXpZQKYEvsf1PZ7iAGrshWd2JQJ8dNyDuVDddaSggsjFenccT8mizq7TnoQc6rGLp9QL5eq",
  "key30": "2dUPoi2PSA32P1YDHtX41t4p4Ve9EUm8gxMtUzWP2c77jhX49sztfLfxRVWQifxpWGdrB6YMfEFpQDf34T5Mwqct",
  "key31": "23CXzstr3mfKM5kq88n6dSAxfgpUrowp1E3vp7L4NtZUm8qXGruWdDd5aFnzyM9Fqno2VjeYvaMnbpu7dqDc6a3h",
  "key32": "3DSHMZTwaweLXmMkE2yBVsQZrbMzRXcCh8LXAotTmANSKSK3QpvMDbDso1ZQ73nfSf8Hb4Hdvh9wEzuj8MRn3Ldk",
  "key33": "3Z5xZ6eoULUCQsvoFy13BnCqrW45PX1LPuCZWYtDRkiDNTJG5QAGVUsKZy7REV7pi9ut9YZCQrujsuMDjCcraKAL",
  "key34": "rN4FcbvjpuhTh2uMSe7YWKuefkysTaABK43kUNvhvGGJ6oTjJMCHCfnwPYq1Vza73PHyPXq7kEh7qPwt7zBkhuz"
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
