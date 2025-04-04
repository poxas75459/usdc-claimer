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
    "5TpdazpTdRaaiwGofeG1FZGtU1M5B3G6omVxBFEGAUR5hCi645yLsCJEK8R4zQvyZfx5v3J6PS2rcZrtFYk5Y21p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ig6d5s1PyHcj3JBs13vQyarKrsYw2AiEGkNkAteb12etYvm2QxSSPUMrygsTViMxiXjuSs4w1SVZNEiUCSyFCy4",
  "key1": "36iexcnCgw3dFhDLzDFghtmBX78uSXU812KitJBwZR9o12dW84uUtVYqhcTYCH5CV2fMJGY98gE5iguQENjcNnQn",
  "key2": "66ELMD8rYupS643Bdsro7bW4eUThxJrQKGSnCuJwyc1E7WVUUTrj4DEUf3LfyRZYsKSRJZNYckqnteVAvTPgA6Am",
  "key3": "nuCPTh44d9LRp5sW8xA2kBy9vjFfoB5dyQMkvXpqzuff82CWsDDVwzhLXfjETuouYCaojqz5dGSw7YiD76HcLQ2",
  "key4": "3S7zyAa6HNqu91Xjz1SYfez8hRYAA9YCGD99hYcSC6td4vzqZq6s1SHWYioADE3JyAcAa1M7pR4P3sFQ5mBbRHhg",
  "key5": "5ZhPyiFkbYjRCxLqafyHPbZtjkYiywmVsKo97NPPnU51rs8nTo8xJnMLss2RB9H49GBRtRiGv1846GZUsh8cCh8Z",
  "key6": "8jAzPkzSVqVPQbVv5vJ2AtyPhQXZCthcDZYoKXxTA13jk2JstiD9NNytJQiCrT3x6sWZGkhS7Z1pBJgN49RdkPC",
  "key7": "5bu5zRRHVh5DaDrgy9mCvra1nswVgiaVXx9y1v8QxHAmTqv4C5D5LaD9nQVdgKnWAZN9YxzEKZUgNX4ypd5jrE6t",
  "key8": "3sePLz78dmaz4nYcS49WCC4FcVfPKQeAFJtgwLecGmtCmk5dX5T1yZgGV35Vdph4fjqnTMuob1eBj6JhnbEZkwpF",
  "key9": "2g1SG36JdAVypyNUwG1YYpkKis5GccVAgD37zjSTQX3caS4ZRa3FhzAU4WxZXLfc1WChzC4b3KrMNxGeY5UFhubu",
  "key10": "5zKuXP45i5KFXkmougVFo1tjeD5YfURW7ci3fNHrRaG4X664cB5KLtsLphzS7SS6SZVSsJ5QuCkUNcEjs8hLYnnN",
  "key11": "2iCiyQhhJC9kyRv7WVUvi5vDs2FDmP85B4mRmhTVPRGKanCRmCGf1vcnajQ393LzRnRiNc8aVwttzpuNTrAR6met",
  "key12": "36t7X1yp6bXw7Fv3MRXJkBzr8UX4nUcF14CE3kDbRiEJvjG9g19JgTJduWo6ui436VCmXCNZg9399PR9keQPG1XN",
  "key13": "5nhdYFrGojD4shCRc1WP6idPY5CVniZWU496uAikLfMP6HFDn85xXiCnwHWH8xn5MdUS8VuRcDFWrcHqSScFdqns",
  "key14": "4VHgHKxYzka76882rE6QweN1EMCCY49VGnqzT25nWbgTyoi3FRBtV2Umr16svgmHHQWTLXdzro7jtmCRNPSjKuMC",
  "key15": "3eiaxyWuo1GbTBHyBN36akdNohCpSP8QksHikyqB3J8YG8A4Zcit7AZuVbN3R3HzXDLBKSMgjUFb84m9RpLp6xcm",
  "key16": "5HWiBTpfW7hn4BXXSQs6oibwBohid4oFEGYc6cKV2yL6fLaRQyK9J961h2D9GneNN9pPAf9hjCV9YuTD9JndDLxY",
  "key17": "5gq22Q3bV1cEu9muwUniARPMRjkfhjMDJmft13fmrVYtBw98y3tMinYw81jsTyokPHGzQAxNaLYVgZryNPr82HnA",
  "key18": "2Z9tGd4PZNMd7DK59cKp46PtX3P6x54H4dd6z5TuRVnnbbY9YFY5SmyL8Wi7TT1XbkEdcVjp7XaRNa17UqnVKQ4j",
  "key19": "4q9udjGtCoc6D1hxYHniZ8RgRLg9Vgx5RcGUnQQM3RmKLPXcHyMEQh8siXi4Ab9a58iSctGynsbPDzPPHmacyfXF",
  "key20": "SU9CBRDaSL3L8Vn3rTC8zWsb2dKBpv2PLQwjyReEHvQKG5cvD1ycBXugCVvXKpWZm6ryVU1KiU8i26x4rxw7FR7",
  "key21": "2UCkwWcHT9qbBynmAmHYdR17eo2FqGwT73L1NSNXBzFfuLugc7ee6Ti9Ym8iLDRfSiG5ZNkePKSdrreLeRznHLiC",
  "key22": "44ErJqxnrhmPdr8WXY3pvTP1AtPnKuMHQpPYpBtnaPJJzxtUxPHLF8hSuyh5ujkSiatsEhS4S9sieHKtBwpbuvmu",
  "key23": "4P92SpERK5XXRikVdUqxp5xHX2ecUFgpk1ReRwZ5FpAXiuMWZQ4XJzDHftujTHoB2hRPJUgUsMbP439a8ZdhA3ft",
  "key24": "5J3Sj5KXQ4iE3xf5bZcwucQ36dyvPfnf3J2RKjZfdLeMReDmPa2rBoeiNt8g8LqZokYYCSTgcU7wpSro1iFy8x2z",
  "key25": "3j8fCind4Wt95DMwDenjj4sRCATG4B51ypex53GrDmJSYyTPP81otBLS3E92GRWW1Zs21UjefE1kZg75dyt6JZTj",
  "key26": "5bMxfEQQaK213YYgkFr2SdpR6LEo2XCXFjPAKcLeHuneMBn3Dwi2wPMdwoaBntrAWn2kzKyEdgQiHdmhf9vbZ89c",
  "key27": "obERLYZNfDpd83QiVSAFtHV5Lm4ZwD65aBtGpKxRUS2RwBPxGYM8AZmiW2ewEDCtwHe36Uqfr3eae5i1bjYZjXB",
  "key28": "e4YAzhDRPgUzkgYab5k2wJwKaQYriGBL5vGnVMBMS1ZsjfK98xfoagAcdnhE4SoEok9NVExByncr3Cu88ECyc6c",
  "key29": "2EzoAZdwFhpb7wEx9NtNLZmLvYVfMukqxcQVRetEwEAcNLSZXvZeLEPdSsnr2bo1w2RtJxYV7cCiddoHxRVDrKSF",
  "key30": "3SKRWsWqz1m94kS8HPArzk7k1PVhMuEbE48doaGTwn67DV2k8seGvc12kDFMkKhRVrgHgnkMdhk2Ld8hLGEQifNa",
  "key31": "4Gj5GqTitxcc8yX4dFDSK7VHmZShzoDP1gtJdZkxicJVX39y51yaxjBeagXq4zpHRwdkopBw8FW1JmyuuyAd6Z6C",
  "key32": "23LQmwK3GQmCDKvYz3dwLTrY6cKv3bZZQteWAz2KQ7PDtBznbwNx6Eusmy3BePZbLVqnVRXaVE2p89UMct76Z9Bn",
  "key33": "5osyXfRvq2Z658M42Z3n5Xi8UvwZshYvZRJQHGip55pZYge5uqeEvwYjk2gtun3F7duZTjGnKorW4D5oiEdSuyDy",
  "key34": "4g5zPU6CNWmBTtPPHgKUiu6qrEqsenz8FouqfvcujPphFpuLE9ibXZdRiKe5JfvY9ocaLpHRgQ1y7mYHGk7krHoU",
  "key35": "3AfAbULnXTP1VBD15rtXk22jtV3ZUPMMQLkr7BiVwL22xbg9jyhB1kVSonBZYnBJ2nEV62qzNDfoGUPmAnKZya4T",
  "key36": "3rktReJQeJLhtj8nx2VStKqcjwGn41HMSfChEEk2ReLLAhaHWsfDdwFZ2pyc21vF7sRHoDGttn66caeXeXM2rihr",
  "key37": "59GRqGz6nJoJLKBV6MYxU3FXzTeh2s7S3ude89rTsceiFJpSve4ANPmGojYYTM8QhL8PXa1qJB4cZRLo5rJUUKKB",
  "key38": "42LrvbXemd9XwMQD4BTgY62GkNkyLe3W3jV4ZqnCsXWE3SD6ZquKCYJMF7Ge2EDi6t85VHdLMQ685nd2xJ5mwPiD",
  "key39": "4zgUTTt3MY8NppvDAzbX6SriwYiheWjQjaeMiuhWvGtTBQjEUY6xFcS52PqP74Z614W6YcPe4oHWAzNbiFtsXJrs",
  "key40": "2hA4f5AG887TkuH8VuoF8g4XFFJKe52R9SNsJJAgb7FaXHPiUX68tLc2Qjf4bpUuM6cvcHhp9mdoby2YP8L7yUc1",
  "key41": "5VaLjYT7aDfm3xRfQSRh8gXiJjpMnW7Zfo1RmmoPWJDgpeiMnL9cieefABtvzd8VgWWbCCMd3MZKrx8vnn8dVDBE",
  "key42": "5UKwsVAqkiKQk7bUT98UbYzmVD2uZZ8oiqdWhXpFLiFm9kMXCqZRvEFbyZizwKVLyu8jAat6jBrkNqSpwXHfgbvN",
  "key43": "5hJBAigiBpu5WUa5uG2ayWD775Lv5doSbb3STiRNrdpaVx9enzTMN5pVQEgz2CwGvxZQajqiJV6vyW2EzGF32kL3"
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
