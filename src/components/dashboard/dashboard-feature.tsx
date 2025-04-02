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
    "218Rusdr7M7gkCrYdqCqUv54Bz2BuZa1tVQpVvjiz5EJLEHTYTbr5Sq8cs7LgppL4LYDGrNGs4LuCuPsMZJLSGKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yPYFaQuVxTLqnNsc2igLk4kuDchEqedJqE3ALNjXW5aJpD4QjLsEFeKK6ySyck6ckcXkFseWYaudsfPaeWR74Ci",
  "key1": "5MGbF5CioBhgbFphfWuyMXFwxPUNPtZSExrN2Fq87Hng7MEdN1ANyv8EHDtJaFmpETTz3LZVB3F2jmB5chbZZT5s",
  "key2": "DFqJJkthtEPK14peLaXND4qnFbRGuVXSZuMcTiouXospDe4muXUy1oWfnCAXaWYfhaCJoKEtJmcRRtdjvtu7ZSY",
  "key3": "4aEGGrQ6VR4oFuvbhALbQkGbgbMtw4RhGGaXeVPi4Xs4Qr7hMJ27sHfSmD2BEvYVGzGs22B6xSjTWnsUw9UA45ym",
  "key4": "5xrapFcZH62y9BunNcUKJuAKjcWaKh4NBT6ZhHyMnMw3UzTYkgDkrpBUmGeR4FUEmP3voyjdEnsVzhCUvRMvXASm",
  "key5": "3DxSwcbA42r6c3jxxs35mvxFYhzed8DgaNXbaWaHwZnrEyjotBdZSKFE4pGPDDAPoZMdcustyxLKnAtE4ue45uWt",
  "key6": "29AjeYcwZDJy5Z57v4rdmAMC7WTCrGcMGtgQU6KkNz62EHLBWf4JQhGHkw9KGZjTY5Yhrab9rSMVv4oDYFCwxe3z",
  "key7": "4rBei7hXiffrbgjbnz5gWhLNmoL71zUrvjcvemZXTSGMwaxr6C8TZUoWtwvtH4yfGwGRKQ1YX8s4WBGpYeHnvn9s",
  "key8": "3Y4KJAeb68ncorC8BTYEZaFAytYWEAX7son8BQ6JfJTPhFXjLQgDJLwg9pYWdN3R8fA4SudZPU4BzceEWbfbU9KJ",
  "key9": "2BRpxAd8a5icCHuwxVHtRUzyhehiLZF16PXUcJQ3AmgbC3nih2vKyNVun5QmCWU1cxRXLhCnA4DqVSo7VgKyESRJ",
  "key10": "4PzBzb6uXmA5epmTNqjS3BcveoX3G8FE7jD4NYJ4Nim4SjtJg1b8eqbekxR649vYJRUbcA51yihmpbv8WbnoznFn",
  "key11": "2etz9dpARRH27ftt18YodMKew99xFVta4XLAEhSg8bEMBZe36b5XL89dAt9qcaDQwsusPJjuFBsXabubtngWyzKZ",
  "key12": "tgQRWg8M2x3PY3HQeu2TccXdf8vLkciw44xrBmg3V1uiBwUgMX73Bppi8vhNquDxtvJmzFfVuygLfgiWvcfQMhZ",
  "key13": "2KBDcbN8zfeVgSYRQkENLQq8Jkn3FXFAXxc2NpvyEK9wJQtYZyghRyCzzC3rnHKviESU8SKtm3Cz9nJZ1jasboA",
  "key14": "2PNTikTg42k8W96PGLjGNMr5ZAbpToibWrnUs6oGTYtUSRJwhdUcRUTmBe13En25fnv6HJURHQE1dCFhgU3XmYuo",
  "key15": "rds3Bn6CjxiS5H8ze4KsYPnx3GRhpmCHDSNA3o8dsrerZj1EEpRhXg6QtfRQg9ompH9NXZ7FWGGmC4a1FH2tedu",
  "key16": "2mjPBT1MaL7PMXBs8dNGuZ2uHDsP1eoovu7RDJVY8g5yRyZ9HMTnAAyH1SoN48NZTGtukC8YBRjnUtfgUAgaicP5",
  "key17": "R4Qba34R57reYe716ZCCBXbu4oCEiduHQGz64YtmgzQ7bNEPAP8zJZmPx2XENWcizdmPRyics74Tm7eedpyGPs4",
  "key18": "4rjgPrjFiNjAu5SJUrAuWQG4fsu1UFfnMud64RTDv7enYvHa1vwTkcEyB7Eo8FSZNK7jfB7DvGPep2z4LYJe7jJ7",
  "key19": "4PZNJvYtGCXQF5nXHnvx3f2NtCUVKnuCsAx5mmcpGWLLFD1SRg4Ya785oie1LEjNQXTriT6xhbpuDKhAYa2q8QtH",
  "key20": "282GrVTNB44fjwv6EJe3PZfmgr1q1spoGudnWmstAU6t8YqQBs93qxg2JU6U6jcsXAR1oK9S5jNSsqjsRbRWkyTx",
  "key21": "4jRRqsyyMpbyStFxJuwfGTiTxyEHFVTFKbKngA6PALFUwpvFr2H5eJAEuDFhqJeqaSGeHWBuM7gRt9Yi3mdat5pr",
  "key22": "4FdoQSuyKA5mzcbxiearmSqs9AAFbwf5ynf9RiUrC94LMUSD2p5LUnVk7K2FMKcZujzuPpXjP12MP2uriaCh7jDd",
  "key23": "3MmNKtBhPzMLN2Dzpe5PTJd1tgeCzdzavKogzu6wNv3By5aEz7y9S8rFSciTbF3GW6dawKmWAbPgYe7AcCHXs4ds",
  "key24": "2XTQ2GpwRz141GfLL7iVgxs879pVrik5W8u9bXUbSoR35eaWS6yzwEcGcX3ew2SosAkaGt2hiYGVZZHR4E9GVMYw",
  "key25": "2PEumUNvwdkR3qZXMuKqieFn341QMydu9LZSXHrQEHBzgWGqyTXCrwXFV8wJ7Jd6twFH6nQStdDWegcmBThkt636",
  "key26": "cTYeXhv5WZuTojrrHHxNKYLLVb5ECaZqba773xKMDDS4T58X5STmPXEnEeEHgWsroVJaRYV6qZqcpE4yB1G3MGi",
  "key27": "5h74QV2TfZjyGEREnryhwu74FSEgrfWXzm9zZxKivALYK6baeUfUVMoNmKPhNxPyw1D7svkhGzCHNLTXYPndiVS7",
  "key28": "4M6e5j5Ah49RRLRjraJfuX81CEbiXRbgAnbPxcd4wkXXUfdhwhm6uB4sQvM63RFW4RnAzoptDyMSdLcgBZ3kPFCm",
  "key29": "3Muhxj2bcUjeWVGZRqQnKW11Ccse5JvNAX7qQKvTeHPvm8BD7VLq9MxYchY4yWw7BLoRQ51614xuvgWRGwHZSHxw",
  "key30": "2ioyBnhKhEZZyXs2N5sqhfmcBhwzyV7tUpqrPtXL6YRYSN8tSqj7wNUtMR74Hz7Aipdw7rPNxB81qAMyhR8wGsW",
  "key31": "59feASQcJCJqBpESr1bpFudpYiUXvKVAKbhSrvbEjeZsUoRDk5ZFZTWDLP5WJbmaxrgSG6N65WmsBuWU9EGhSYZB",
  "key32": "4sMKAqKronFW98vzDGqjB3EjzKDW8RmGfhjDAxGzwLynQVYvgnL5CQSeHN4hVCBf4y9yXVAKGa3pF1yYwGCSknCq",
  "key33": "4GDvtE3ft4RwodHfXp9xWViG5HjydvXCzcsPmNvzwpiZ5XC9tzSPA1k5Lb5hY6GUFoHPpJWJja3CdVq8mZAJma5e",
  "key34": "29ekAqzzSNxtKXd6LVtmZ34R87mZAKEqjRVwhWyu9iLvaGoMiLWr5XZB118cYzCbxtCAB3cwmFcyaJYTvcpwv3CT",
  "key35": "58sQMwKEuL2JjGFToWJqLeGz94fKhpaJiwACn1p5FJqb4GgRmUZmcaCwgvLEp6XQ1HA9SRxtkgpjitQ8cp6MkSqf",
  "key36": "5oT25ZwGRDzHB2xEPjNUQ6TCVo3SYpGPqN3s6YLvagLNrUyXk1LeyBrq2QaqZzs5FQLioSKenwpJhUWtgcmzmSqW",
  "key37": "226RMJmHV1fbBYRLe7czYrmD7MFwE822YDfgzqNvWwbeVGQuJBEpoUwgkgG3LVYDM6ww1yiAmBxHbRQqxdgAUAhv",
  "key38": "2oT34GjwAQLoYNMdT8bbpA2rt59vYhZDQoCf29pNank2dyRaPoSvmjnHpLaBV79uBLQ4qeWE3WMKrXSDeqQLGR5e",
  "key39": "PFPsU8RcTKjpVTitWmTc7frzi6hKBtWdZdWf33co77a6XAeWtTxgpMNoEN2PBPWfze1G9xELB31xrGvNyWDhNz4"
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
