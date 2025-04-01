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
    "31hq7znrdfcCUVW5CMDEuXJ9DmP6smtYwfxwUxoBFeYADEY4bDWZvMXfyToQaWaagM2ACYCfBAM5m4R8og2fqJRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcduUqnDG3xDWNFQywNPm3NiQL1bApsTxwqSGC5xr2qN1EVoZ9GudFoZouS9CHSc7dRxh87zjxRJ93CEsoVDeCF",
  "key1": "5yZTWVXUqdiHjwZYQiSYqMV2Hnu8e6cspndNotFu3smrhK2mjkMhVKPy7z96ZmrL4Pi51CGfsGUjY8EqoNER1xyU",
  "key2": "2RiMV9ypBaviV5DjR61UqiEn7a31FnYNAE1uJSw14z6qq3xES8F2tfVcekZMnJeWqNKW3gWixZ5ur5bMWVGxjFQV",
  "key3": "pQnixgWdxbwDDJP2CZE6UHm8wLgBVnC193VVPrXgs7UnArjpjFiBRyRVUSCBNzuk2g9uXVsX9dmdEPjzdf9Moys",
  "key4": "67qTNLwh5mbEn43AdCCEMY28cUz2GqxnLdc3qKhfNjTcujUuq7cUii9qxsk9Y5o46oZFjG3YfLx5nNHyjWvnNzqa",
  "key5": "478ZStEmUfy7obgtzcucT2WBaEToPhpkzHnQjpnfy4DcSfMQhibsBM46qruBPnkTzb465H6qF9Q78yp6YQnTLW2P",
  "key6": "2k2o9AcyQBWm7b3wJf4pKNnSr29FzBrYwbBE2JJp2xELA7Rc45WbGbBK2JSsWSqwg1MAEuDnwYkj5KPTydr3h7FV",
  "key7": "5YvbiBXfUYGnuaoHPaHV9bWw3Ej13vjqQgcmXCgXoYM6QSTxw9MUWWtxHo5L63mD98HsUay4ErdN65168ahWNLZu",
  "key8": "2zCez5QJsP9Bt1CkGGkMhz5U3HenW3LTyRYuCeffmkNbcZhYMxT59QyqSLpyASCV7bjStMNe3FHafMoP28hW1ZEM",
  "key9": "4xBCtSkNm9aGjj2P4u7jng25xPyKkzNguHwGxgJcHezsgqPRqfZT5LxLQEtcYS5NSDVsPFcBK6Gq3LQZTPWBSJkt",
  "key10": "2FHvDzgE1geG9KRPXjBhfyScsueayo3bUSZ2N81qoJwmKyUTxsaxFKtpfKNm1wq7oTF6Ez8nzE1cs17wfcqPqBto",
  "key11": "wekd3MdeUBU11ASajv7AFFaBa7Xnuj9NVHjuwayPPXKfEUT47mjVjEF8m8PPv8pBNn2NSDq6Wj1f1D2MyRuvqdt",
  "key12": "2vux7YyMekHNTd3Y1KZTpXSep2JZagQ4o6TjTjgmThnf6qAn1pCXnTaTELb5fXiuhFywSbdGJntvGU8bdqhyePPJ",
  "key13": "5AgAA63vUENBFXwE31deE287iVk8recepp4WAgrQKkJXmc3tbWV8cfaGqcYgQSJ7RZnVHX3NhQup5EB9HSutXwbo",
  "key14": "5CLSRmJDGBYwx58MDckqk7GrRkaEdE9CeVERvAaXBsutCfHiPrqWUsqjqznscrrSeHSr5r4xGNbfJSnfcHeWZ6x1",
  "key15": "5jTcSQNQJo18kBzkHrJkDaDtEDNgRvKjemEv8pm3qe6si3VXAWv2VuVH798NFaPjkcP1x89hLVc2tWviDEChkCDt",
  "key16": "4kmJeWAq31LJzijYoSG9KMxNVAraqSaQQDiHx8vGBzvrccVaWqSWFgvuboGZCPKaDXMs1aVFP669tXUDbtCuSPE8",
  "key17": "3KHWPdU2kH2qq6etH9hXayt1x6NEmtV3aKwopbrG6sk3J3A5nB7zeabqW4qbwZySXmvRYbK1roeL6xYhVmNhynPw",
  "key18": "2DCVgzffR2tobkRoeRTifBnd9t7ZyyMCnWw1wiY1g6ZDbJdyTqXE2hHwMJ1R99Sd5izZbhEYQumVi5QvYXTf7bG1",
  "key19": "5747zkr5E142LgHZ4g1JWTweMtFicrfzGQKn6V7CCTYiXTts61bY5y9SjX276g9Dv8u7sGL5pWwHwQgnzn8tH314",
  "key20": "2ZrogyL8ZQze5d2NV5c2oeoxCqZzn7G1wvv42o1dAfKvHguWN7zzcTYXgxfSn7Dq4PsFLhJzwVBwzawp9wVYQCnn",
  "key21": "25hkQVPtSWxvLzRfg6XknSjoDeWEBEww3gkHSYfMPMqf4mTqQfwYSm98RQ34VCooSc5wJ232SpXnXMXWSSpYQuqV",
  "key22": "2kDyXo8b6rx8HdXDcCpYCtmKNkozsB4CDkVD9YPNFoHARVaAghkGeJg22ef8z9sHBpuxFvNAwjHdQc6VF8KpEJKc",
  "key23": "4YtusgKVAHAJnzN6SaBFNEBPWHhtZxsrdzp4eZSfrW7fP2QLnNYoycBMGLkwmcwqcmokGr6pSiuDRx4eVeahUNdE",
  "key24": "3qwyTy3V7etvY7UBq3XbkwyyfhwzxTz3HwwsDYnqekqf4rBrVQHLviC8wR5Q21BEjsYFPAGYyteMaV9r9G4RNdsS",
  "key25": "KPvcepaAPiwhBx4MeAXtRChXg4FFCZdUjwMt7WqV5GoSKctSKcqn2RKHZfjmTe53QvK622mTBB9h2YcGQnXDn7V",
  "key26": "bBV8RtA8zHLxF2iBBbTAMnG1twEYiXQkSDDxnjAuRyvsZprf3U4hCKfVE6HsycsNTCmYhLxfjG7AaJq2254DJGz",
  "key27": "4xaJZR362oeuwYCCmaVagfCbZpqXKznxLbqJYViMjZzyrePwvSZgXa2dZesAPmSY5PrQ7KRjpz1LQXv7PtsuZKp7",
  "key28": "28P2sEpTQnVS3dqCCosGEivxGoW9batuNpaqbNk8x5wVE6uyAPFukvQqU18zSPaUbb1MmJMdSnSfVqB47dk5KdEt",
  "key29": "2D4Ttur6EyYXN8naWGSfuuB1H3iaPf6hTuzGQMpTqRWT4fhMapqJzpFGYrQkfydxjVmBpRvtVN5hqvmZjNhCgF42",
  "key30": "3NU2ELweEqryae1bH6tXv4H7GeRHzWQbrY6M7z3mQxqMTpdzrphK6UudUbJ5uQeu8NqgVhQmEFViBUfu7UNE3D34",
  "key31": "4SH3gwRDNehhyqSFQwouUiYenD87DmzkvpNXAVDKRqAg9daBYmfgFd816xirRrTNvQ6DqsaL7TS47EENSQfd2gMm",
  "key32": "2scxXGHHkzqXXAZsAge4a3fg2QfRdeCGLTxrCKDBCLi6a1U9CTG38jeLm9kcd9nqXefKjmLR3CWca3hiwhY4eux8",
  "key33": "JLSdNtVHT3KUMZgeTwugoy5h1pswPEfKS7eHXCUaZfLyNynSPtF1fqjaVpLXfrX4YJNgs9WSS5X4H2dhBdJYW1n",
  "key34": "5p1xe339dNiojFPQUfGkX51f9MFdyLWcBPmLBvoAvyn7LdGZZRuXpjnYDGk44k3Vcwp6B1PTy4xnMh34ipaoEVpF",
  "key35": "4LQy7cb4D9J7w9mnZaH17WDDsDpPFSo3UhZ9X8YQ3SNPW5Rp7YjNnMZn8cjAm2CUnTSJpkeKSFXTAt2wPvDCd7o1",
  "key36": "3G526Nax6Jo8aEdV9utLadhKVTEdtP876GLmkb49r9UU73jD4gtu1ntdaMt3g2K4x57Xkn7THNuby74JkRNMxPZC",
  "key37": "ZMncJ5bTfMC4z6LqEsmEsYqfRKtWtMb9PTasgbAS319tDkizicr98igm6oZBAiYZZ5Yea9DwiFa6fPhAjwzdzBX",
  "key38": "5pY4Fn2cdZVKGWAWkMnbZ35bctwAS32J3eKFoNcSE38CfSu6PY31zqrpgVm6EuqahKaLFRJq4467hceEZxtsAuhj",
  "key39": "2vykjdFVQtap9ZALBrW3ezz99SBqRHPSnfmd3L4SmeyPCkinGnkdRZgrUtGnRN2SeQhESJSjkc3EQh1ae6WEKasf",
  "key40": "tj199tYSM61Ui2Nf24faJB9EqsWk9e3hRWHjDxjNg9q7PFpZ6vRUQq6GNWfJzSiGhzYScNHfAWUyPSeR1go3xwM",
  "key41": "3w85fQ7otwUT646kAE8rN7DXJR42zapdRvR4hm9pq8tHNUiKmiKmGgRsVN94CTdaXx8HsaMkS5hbfTX3LWPx8Dhd",
  "key42": "4kmeU65wGDpC36VRNxM7wjGkEfgN6hHpyGuRhLf6EooTf6EnkXzPXahLkVYJ1YvH4p7GqXBaTk4FwzHfZmUsadez",
  "key43": "3jEAr7yqqmePj2cXVRMmDJTvAKanxBDgKxP3XeQpcfYo4bXKdhz9XGhTNxGU2yhdNrDkW9XiWZkmrzK3gbfgiEJe",
  "key44": "qtt3kPh28NkS2EYDQp9GWsDTEfjDXBUQzRyj23DwaqGmn1dzLtjQwhW2oY3m7cJdbWWxZdTr7YGm5ErKAz5yrB6",
  "key45": "2ZbZZvY17fB7S9CjWcm13Dh9pFE6Zi2rHbeiZKLsmYqQrBMChPTxXmJRDBRpVP8bV7K5ww1BmpPyThQ559wMJ5xf",
  "key46": "2FAYRXVDMMwPhvv5g9sp2MxSEfMr2qSbj4MvGNYBGf1gh7F6RvDHqWTcMmKPRsen7ukZsrnSXGmvcVC6uTNFziUG",
  "key47": "z3oFnMF11iPGsCPrKGzB7pVkKyBCoDs42uekzNzwu467mSnsqCJuXbJa3ycakJTZTBYncZp4WaJdoHu8i1c7WN2"
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
