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
    "2rpB6eco6PGwyQ7fGQPN8tsiWGwv2rM9f1ZVMp7qdSB2ypuCy855SsevTqfqVj5iCdUnvXMHVoxvJmaazDBzhNhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6742u2bSoEVatAp68PWYSTjpWLbTkZ15ysjVaAPiyPFVQPN7qtQr9L7V7gEATEg2NtKB61BUvVBzEFg2d9Abc4fE",
  "key1": "2DNy2QKoiAyWNqhv84W81pHgELPTGN9aLsM1TgFfdQur4RwEQ9sp5tg5yrm6FiUPAYzKxWvNnTL6uSXB25WYFBzT",
  "key2": "GrMkCJG1cMjjUVjmFK6H9Myqs9PGbF8DDR9wHUPFiMioMNQBGRMGzNWHhpmdRxvtVTcgHFcP4v2gBnrfYaH1YDC",
  "key3": "3bs6Wk2vs8iQ6fCtUBfYwCQbXYLS3csj73Boy9aNHrUptmEcHTwM1e7VVwEQ9Jwb5mjja4QjvEqt9ihuWeFTpSy",
  "key4": "4UTrxKTrpPqjAYz1UwbQGMQtvVVGhWGbTsR1PaA64nHUMn73g6zeZWgQjrTrQanuaGt5ksHS1nddNqR1DjMybbbJ",
  "key5": "5UE8yGM6QVzHkNr92KrZecjGvxBq3G7CJBnAtYztM5NX55YvJ9z5YG1bxVG3uUDYFsmrSHX6hZbSNB2f4rRzeiga",
  "key6": "3qHHD8C7pE52oy7S7rerdqTAVwa58PXtDLaqgUoYtQgEuTbLiAL7RoZwaTjEDVdBAd9238ttqdht7X3487pi6AwM",
  "key7": "2cgjyiXSgWzzQuUFru7xYcrq5bDAUnNmXTpaBCACjzevxXDjoFfamhP7LzvYU6haWSz59Hq1kBApe1wZgk3wa17U",
  "key8": "4yR3XCQTW3wpbkV8BdgPPLyk7W1bwddmFh3US7MmxMo4bPsHQXZDfjExUCGPv9gK13nRis7Cdyn9JmRSaLjiZQZp",
  "key9": "4jy4bKFBdK2iP1ihVybp5EDSenkcFNx81DxfBVXZgf3mJMGC8b8x7bphw5aLBU45esVyb3K1PvfF6oFbaThVP2Bx",
  "key10": "LoQnXUVYyXxVqurzBuW9MMrXdcPUmU7HBdUsEX3q8YZtokhsTWGSQQ2xXDoRxJdjnLwXTsrCRz98fdVntfuohkM",
  "key11": "2nbEQjjYtqa8vZRq41XcJQN2U4GUQUAwsVctshUAiT3K1msC4X3e1be8sZQ3bsTEHgU6cWN1zwcPCm7wesKj4ZDk",
  "key12": "M2FJu3sHrBjrEYhANzEVYnAjVnbu1twn4GuSAUJGfLvaYwAZwfMTc3gBgTjKdUdhBjVjD5hG7uNd6AiguZ8Hn5J",
  "key13": "2aW49hRnLbD3grMqUNY28JnJHP36xyzJ7fqLmGy84kQxEuzTaQMmELamGM57YvsZdDz421igMEsV7fNZTUxGPn9V",
  "key14": "5DmZzx7j8PnKGrYcxsGTTN4L79mPEmQJfdAHKZ4UGx5KoLiJqcSKeai6J5NUG7j4ExZ85gwgN51cTAFCmMUqMZVm",
  "key15": "5HBuBK4FFueUrKZ9M8Qpa8GybnymtbN8uJwg79zw71MGCFn3s3qRMjj6SNknnuwpQGW1JuzX2WfHe87VCGJTigzL",
  "key16": "5dHbMprLkSfmU85JwhfYxFjW59EJUFXZpg6LDJvriUDjGbmZxqd8aGZNAX11rBtAYfuW6CznjKD32XyzDrQHpkYg",
  "key17": "m6DhfmhQ51f6qyUaafMxC3iNGmfp4mZT4uwKoUYV7dBK2XHKpAqFoYQGqoYxtxx5KUJFnGKYQVwLiukaJAYd84U",
  "key18": "61ZjMMBtmBwCibcVWVjo4eqXNsZCMHhh6MX9D9qeMMzQ8qP5jrSgvSfsQxHv2c1d3V8e5pLNZfY9DeTcvx1RAVwa",
  "key19": "4TvJnreNi9Jk7FRYTnNY1SkGk4LrGFFWNRuzmKuSGy6ykMmU2DJyz7yvftnZeZS6pnDabFxpaAkLds8mKmwqPfnX",
  "key20": "4BQmj7vL51rcPicutuTEUBe44aKhtuFyDFhdHqG6gwcmApoFS37oGe8jypYSkXuyyEsJ8ZUoeXPwiyk1gHUnxuUB",
  "key21": "2CLXRJbJRyNYuoXQftzWDvv7MQT6BJz6QY7iSW9nA7ZMfo2DgnbHJoSY4vxzQoGytU6v73ynnw6uyuH18ixbtdwz",
  "key22": "QvtXa6eXpuZPc6NvKh16HpMDC4bukouLNfb5XJ9E4Yn6gpwYa7nF1MKvfdpPis5NU5JXpahsihgAjjqt6z7PduG",
  "key23": "5E77piiUoWGLYtBgfeJJbi3YB2KMeLQkuso1PGHV5Nu2SvjZ7aJdYSsswbABi6vBHkCt5ycSqQ2woaLudU1wVXWE",
  "key24": "53MyqvtTmEpjTGtyDGYL5TmjSGLXhqQzmz7AbDMHa6JJN7GF3qCpyjmTp9TEkppvU5tK6Bw2jM9vmt7r5Qg765eo",
  "key25": "22JpTLuMVrYV7Su3zPZ76uqF9Ltja7oVePaJoJirRkm7zGoGpb4QVGEjn1tMbtLZVYxWba1rVTSEBk3rHV6wUnvU",
  "key26": "vKC1ifxgdHemrgFgA77DCGAui1excnadJtbpKRkbejX6FdtBsyaJi27ECtfasnCDTnSDGYdzxigZ9RZ2ZZLoTfV"
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
