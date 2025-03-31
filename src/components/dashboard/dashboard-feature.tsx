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
    "5cdDeyeFjw4kkwnYKQ3Svmyv1jmZTPSAaZtz8K3nMRbQ6kA36GbvhiBfK5Y5vKbVGqzA1Aj3nFNjQvogYmHYeCBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5L4HMBRXbCFV7HQnvtMc1cCW7BL8bPdg2UcDMiDzRdGZHFdowFNLr5uGuAQjLHCc6LakiAM2kav5UKYdRnHjCN",
  "key1": "5FqgxFZrjHJtADEEWnNNRKSpnh6qWzFMsqwUKcMZwcxkxFE4snDJmc9nAYXUWQSnbFdNQMqNCZD16hWLEytNZr7s",
  "key2": "LgoSYmYmzgLFcrbPVRtoksMRgZUWP74Z4gMxybrTHiNUVbQjaoGnNbjANb7dR1yNcgrhve6HL5fNJhSbYYYpH9E",
  "key3": "2JHC5uKgMxLu4YmGWdWFm56o8WVvHCL5cKY4wUDhqgpXM3TR82rJKi71aUDHz3tsfoNBP72i49pcsi9RSonw6kQZ",
  "key4": "49mSe55YhThmQ8tUxyzpaQXw16qB2pnfrrEQTgZYJR2nAwDx8p5kJN7woDDAA3gMPK48yPhYEyE9pVgrJM8XhHRz",
  "key5": "52Ey3Wv1Jw73HLMggdPzb6Z2mDNCLZDNoSrW2bKSH4s4NXghQ2P6XnVHLy3AZzEY9To31GG5YQEANj2fw1mFUjVo",
  "key6": "2dCMdULGEhJAhbuqFhT61UcCCMo2iuVfjbGEYzLGqxaFGBmDtw3HhehycELu8W1fb43McLz4YqBzGDEwJWwMM4UW",
  "key7": "4aZ9GzPrpAA7xWZdqrYLKsLNVapoohAoUnjDwtUvw9EmKYQwyUM3r9BjiLMgx2rBAarEdcJEn1HRRbV3XJc3qEMX",
  "key8": "36SqQFnWJskWsHAebuqVVh8kgdgswVqae4NKe7M1rtpfwmRzcvAVbh2CEaw9SPvxYmjk8KZpoiQAc47wkGMkSBzP",
  "key9": "3xNWvNa2kDvcisrTrDqEA5yoLzwLszVXXXsH5MD35AwxPnzzUFAUgCagSij5yBxx8vuhivt6m8EcYY741VACz4xb",
  "key10": "4s5GoCs2x9uxYjqrP5nmsBuyQcp49vLyNdytGyJu35BFaHz7dxCzjHcyotsQCqzvjWmywQmSH8e85KczyM5KCBmr",
  "key11": "5WyVWedUwUpm1X86M3yytLfEfoyvci4CJNHX4uNKH5ZoAguPunJ72crjVe4GDHnyFAh7J7RK5jLkHnpZWqyGV3Dx",
  "key12": "5RWaNRXCJc2DFE43wPSZ1QUQmGJSu3aF84E4hKNhU2HZPRW8wHpGY1RyopS3q7bQWgBKmzKTYndwLSrhVCjxMsxc",
  "key13": "5TGPoCrPooJ8izPWgno9qgnY1DH9nDj5sv4csZLBgV6FeTCawJFC45DpvrhG7qQo8wxPvZSXLN7RYhoMXbXXa8vz",
  "key14": "4zxhH4PG3w7bu21jhRdSDykK2Gt2R797AC5e6xL1945oiqwjsoGfVRyDvtHkxhXsgkXPFa6r1js7h1WNoA4SfZcn",
  "key15": "39U9UKFF2phZANzi5HVGYzQeb1ggGvU3gFAy7rXFYzvnyzpQxxgsGqbVZkbv6G16uvpAT4tN5Sxsg52pkPTjYnAH",
  "key16": "3WKHTXDfye4vseLUz6qQkas7oPW8JSHdTgobM5mR6hCBwQnHxDx5MxEi1NqrURyuNa9t7yiNqaGXwhPCm39VDqMi",
  "key17": "4cAwojFbWqHVfS4EUg5xsCrLfgmnTiAmVQvgTKN1nkFdRV5uqT5EyfsuWEuMfVnesh6G3CEjNGwfvvzShGSqGtAj",
  "key18": "2Czi5fEqL3fzxWKdL663WvHGgsyz5bwjDHbSzd4LzcbvUpdXniS6XqpP9sQne3ZdejsMrd76cbE6vgswdVha5HPt",
  "key19": "QecGTrPA8rVU1MncXzTPtVjy23ugFeiEVjMXFH9uHEY9Bb4SapfJsafkHnGBSEjkJrTTtGu5aZaqYED8318iGXw",
  "key20": "2VTE9vmvoQW73tbPUxvCuuSi7SUeciqWRWP9uPgCrGSDPYaLaZU4CoAvsyBH8bk1fMFpMrB2Hb1SdSDZxhh2Mcwg",
  "key21": "5NZaXDJvgJpXKq6fPFSgHJ1CZxrtLDFpGqtY9KQDkuJKvjBo3hZyVSrRMg3BYyVWow5VYAicvKmnSBEvgnJEGEsv",
  "key22": "4Gu132hed7b2SLHL1Mh8MMMVsYoC5zVEPz2VEE3469ktjkyPwU9LLfxo3DCencDDbKNFUhEhaoQagfLXKUszYFig",
  "key23": "3DF6NykMsQ25TjHEMLgfZNqVpfmfMKvKyXXn4UcGqipVKuXZJGmZZ8daMw77hN7cNSiSxxvsivP3yeo5N6Z84W8N",
  "key24": "5ULwFDahM6c561MBPUYJWhFsH2TfMdqYnE9FcgSKBG5jmfRR1MwcvLhPZNpjqGDMGbqqq5rfTLNhowGqhsT49hgB",
  "key25": "3iSwQS4Kp4wVApxauJ2y1Q8jvPrQbHgBskHuBrDct2f6UXW5GR1ZD8nrLTLckHfq8qLT7cGFFoZADKPoWNeDywXx",
  "key26": "2n1NV1Cj5xgpL8Y2iLwEJnnmCbp6yADCgc7d3oFTvEbNZXe7iRv2gKdtTfFrWQbZAZhCVWDrndkxMpXbMproF877",
  "key27": "kHNn4kK8ipYAhAWQLpABuUBMqc16AVhhr1Q7KPqUDe6VLjm3Kwc2rvxbrkj4Z8eEG3AM4qht7yHmEzZwswV7AUg",
  "key28": "nPP4gV2QEb1HbkVUQttCKeBdd67b9Js6o1iK7rZ1LSp9mBVau9gNyAjMYsxP8x2QJi3aUnBQTMVo6JaZnvpSUFK",
  "key29": "2g3qX3ZpVqfshL71b51EqFf3DRZ9pJNjbuFCSSrvDeBzfssYYDTvPtgNddDcgJPtNRqxGPJqZJkQ3S9jq6rq4DAP",
  "key30": "2mY3WN689kSfJPgiP8fJgiYBKhXRKMxJ7VbPzvkdyHivMW9oSQSGWLhtiTvjKY1iK4VgsZ7QVdSi7dxtfh1sy5PR",
  "key31": "3x2DxUiG9vMR631bvusaNtcXVtLVYNfpiwh6HSiTJ7bD3xHztsewCP62X1oT3hwk58zG1GsbYwsJSmUzdsdGyTYn",
  "key32": "4YCZXJUmmXBYbuZMqEwCuceEubvYVpphSCNb29r2PfoMB4oDegBgDkQZD4y3KvU4H22L8VubTeGNicYsacFdDPnR",
  "key33": "3vFe4Rywf27wBgFqiRYXTp9joRF7sQbKMpaEat3tkcrRwjVcssB3vfQxha1zCQzf8RpsRGLY2q6j89tp8ugyPJ4N"
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
