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
    "64AQPAqwN8vskMeVuaq5trFU5tooHbvbgN4oW6WaFLXcccSjhADVPfZixTnC9kV6tKe4HSzkFVQm9cVLiU3juj3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSdM31Sa6toh3VJ6LsDLNExB6xnrY4EV4ut54dxbEBDgA74DkmBXn6mFG1yEFyscco2tPj2go4z5CDD5p6P8GmF",
  "key1": "8Z8dQghKqZZqPvcwCFdL54FoN4e4ZyFWTENWvrwH3Sr75kPGT1pbHLHpEGBofZujEpLRAtc4Qy9urVfd6Rpo8KP",
  "key2": "5UwL6KoCdYUswjKTPpE97Ww6Qo8395wGWPEd5K4mfx72J34QfWuCtELspgLHT4cpRJa4mz9nKMzMKH5ks5rnMqjW",
  "key3": "2THhKASePog5w7ZmnePQ5FG1queKJ8VvNFAkUZPPBLEVJ7fxBfHnsa1bX5LYgF34m2tBR5xaBYuSVUSfpKsmQFCZ",
  "key4": "5WxCZxwnwht8hFm29VyjFQQbtg9WAdid1vGzCKJYXLnrkD5q9cLTHp3sJvGtSb8ZCWjMG4pVXkYqU5xuHAmWiUqh",
  "key5": "2MApP8SRPHdsMmn5hoKT1FuvGLUBT7J5DRWo1wNbZRWrSgV6LNNRTNGo75PW59oZBZRLSNqbYEGXrZHbokTSSPn",
  "key6": "rQM4Rkipj4o2W1tLWcPJPLKjk38jzLkQvvQtZXmexQyer2LAT9v2p3LGjJsqWA147gDwVzd2V7qT1jrWBBF9cHK",
  "key7": "3z6CjrGrRDyEbnrXuSQfXkiXnabs4p9ukZX5pnYwHmUfVHSXLUKWeefVbX1Usa66evCXNJm3QzoP2DPAaa5mi52b",
  "key8": "vTj2CL3SsXawsrrmjPB4xQuhHGcdZwnZL9qy8KV6dWhEhQHnktXdU52RMmFituagGwf5rpkXjxj7qyqX7oYKQwr",
  "key9": "38nmfCn8hetTCHmmyC4MSW4BeDeA7pWeqkoxntdJ7erXWA3qh5C1HpVVvsoPqeMSMrVS1pxKC4s3yN2ZE8SSJzq2",
  "key10": "5Q15zhGewQd2PLaFRDj4gsdSgPcKvnzafLnvWCFDpss9GMdymzNbxAnaKkvomF35aoV1RayQfdBuxoh5PPCS2SXj",
  "key11": "5QjVz85BSCWnT3R3uTywYXKtAP4AAXropwA5b3ezwiMwrB6kSeM5ZFgd6NE9jWxTWCXPQd5KuQ26wxKvQ14qeWyC",
  "key12": "syXLpz4R1qa6AkheSRKPqjdf2ttvMhHQaNSL9TY2hzE7GroPEGLHpCRER37hevGfrRX6NdEvZKPXsre9tzSzCLR",
  "key13": "3skyNAnSDJuQw5zygGhnw714dRL5vRHA9aB8h7UkGhhGuiENYhkLVZCAKBvKQTXENuCvu2YRNYuWUXn7yNt95Wrh",
  "key14": "4M9EV8enqTAmxLw3eLit1asjdjgowQ1GmTV8URNJwMG5dcVvPBMLA9DkjxzgFqcizpgxqVfutrUbBAuHMgYB5oT4",
  "key15": "4hTPfg741Tco7wE2dcMieZz6wNK44DqzRUZzS23FzR4mdASBFHG17EyUm5toUwY8C99uh3ZVpnSfULdcyv34wHCA",
  "key16": "4pobDc1JVqk4ewEpiFmVSXd4SsurnwmMGBtj8nVMbHMym5kYWw2AeiWo2GQ9KrdyMwHJ8dde7Gjpbe6L61FwzKoA",
  "key17": "21FTpZv3bv7KkpwJVtgdRMiTvXVWQojGantxqzCL9W952Tf8QizrGUyom3emnYKWmE7TiHcT5EuuUqbZG59Ahi4c",
  "key18": "2BRNJncb6NK7bb2SGBLv9yNg5t9ACZN3AfheiRACQLcHgEi8tnFwScDrTEqbA52yN8KEpiCJqUDwFVUd3QjrqWAJ",
  "key19": "3K5Gg5X76N2uWDpGXQoZr5f2qmVJ9edgzuWZ7ww2Hc579o9yrN6PcguniihQ717F78NyEqjS6wRK3ofdeWLR1kn6",
  "key20": "5CXAVL4UfXB2nLaS2CfQZtGybNzyJhRLAc8qkvaxQZwBKuM15R5YrK5t4jw4hry2oW3Zss4r1mj2HGNxsc1anCLE",
  "key21": "3iezjZ35iWyGuLBQeNjWYEn64uWR4L72GZzrCv7qLuUWoRncf73SA4RToqJctB61NdhgURQPpngE2sNUZMMJn5Uh",
  "key22": "6LnjqwdzdTcZjCozEo4dicSHVF1giNmV4wukBRmaDVu28Uqom2ghcB6ntFHpCiVsM2V3Y8iHgtbKESnZiXcvzNS",
  "key23": "2TrCJqSRpodvENfrcwrABYMBnHZj3ouY9VMEEu2MCyWeujoyjbToSUoPHBR7AqgA7miYJPdMupNH5gJyTArxi4m6",
  "key24": "3Bew4zGaXYCT4cg5QhcN2gvMFfX4kP36csjj8dREdqhg8VzjVoWhAKsFAFN5iQUAbYzara5mYvbvTvRh3jDsC1cF",
  "key25": "p5AVjMUtpqmVipZjTBHtvkmNLMkeuyXbQUwHtZ66S3WSMu4aQCfhiM4d9QmDRF76TBGY5C9s24BiF5gnHz6x8MZ",
  "key26": "Tcze2tKzr4ydDyJUUnrpTNdxnCHCrgKPfmJrLv7XKTkwLJtXH81SV7xrzMjdzbaXA9raLZJdqztaLmFGMNqCkGL",
  "key27": "4bhUPDsBjpxYX12UStXW84yLXyDXzvReKMGUvATToiNxJmKVTizt84rVT5y4XCz7imyGMrumqFfLCZEdQbVBqBnn",
  "key28": "4sQGMynDgYbdHoc9FtU32YjkizbQHtF7mb2TyKbfjuyaWMg8St3VVwLvCKEneXsr6iXm4JQ6g6jGgp8zVsY2Rmgb",
  "key29": "PCYCGawKoV3PcdYo7Uaa8JHWds8J9e2MrUV4uQTRZ17RfdKRMawbN5YLUM7nE2qge11cieLCL3Y5i4Eu6WAoMzt",
  "key30": "KJbGzccZXeH7YdeyuNpmTsYUf4A7i55Ni1dnQTNyxYgfWohTyvUjmQfBp69BH8LkZ9cg4VkJ7dB5WMYm45uDYdW",
  "key31": "4sC5K3P1NRb41cdQAczqVPThuTeP1qKLMEr7DvMQg5W9cQzFWrPCAmAuhbMUhFqwPC9qKbEPgUQ7Tf97LF9xDorZ",
  "key32": "51zNcRfefeRH19YM3iRnoLhj4CFw5wLZAG7szMADPAAB4NcPynqmKGgW9j6Y9nkGvdLg7QGFX4FUxCg4cHWFJQF4",
  "key33": "3WERzcXH7ZcejGRtDoaT5tFqQczLf7wNXHC8DDpdYYANzDEGiaUk6gggxijG77d2x6RWxpWyT2z4qVqFvKc8RSuZ",
  "key34": "3pZxwEpNPy915cForFYyNutEzc3zTXEKmPA1KZgjGTQP2aVoGeLP9jChhrReN9wURR1f9R9DFKsTWpvNSCHJexnk"
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
