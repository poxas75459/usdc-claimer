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
    "TdkQh6uYNC11QMrvTPZdwHLyLY8aTX2UdjMkNiLr2SJJ5aB4oGH3QYxezHvBKoK2bNSWTGzWYANYUhsxnpP31Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qT85r2Tqv7Y9hzmuFUTvowPvgYwzsQYYXyiGDnTKB5aBXadRqtaRb4TanKvz82vEepjYv1QhuBog6VyMjZw7Ymk",
  "key1": "2JGJg1vK3KNEXaMHsTu3JAtRDJda5QHu2y6wn9pqMpzHfrXMBKRCGVBLZCTAjLrvaFcTtUQGLQsqLhNCVmvWTvB6",
  "key2": "5CwazFH2G1iLHEpJmBRbkfExGvsFZGhcKN17GVUgguseN5uxo8CzaHyaEN9hUYXkKQ5Ncr1csAUnS6MzT48nit8j",
  "key3": "4HFSrrAx4GhAD4CbyuvUG2YBVKPjiLC39VTM38ZcLT28hJGVxyTR5MKyEUNMJdxivqk8m1ifiLJhovg58zaPVNLV",
  "key4": "qGHni983XUSxYdKPjtE815ARqfMVaB4ybM4Su3no3UhNSzQBh6EbcAQJtPTCsRsWCXtanKxjhi5SN86QRxdBpg9",
  "key5": "2nrJ682Bnt2AwYbbhKqMbvcDkPP1jpSFAbRqTqUPqZjaaaVS4NDbZvtya9TsDHPGkcVeUED3rCscXKrVvMrGXTfp",
  "key6": "5KJSrLv4evd9eCc3Vr6jP6hSnjE8wmZSfyUwBTU9QCZsESW8Uzffq1MZA63wSV4CygCZM8FXCAos2DrL742jQLf2",
  "key7": "5iMeibuFvaj327jdCGDqrW8m68N3J1z9AurrpsFgbRGcSMHWfLicquwDbs75dnTbe83BpuvaE8hDgLnm4Nmhi8yn",
  "key8": "3vnqkMejSwanJWFPAU81x5kqx2AbWNmWwxPwEgLrSpSTfwF4brPACttec4i5ox3fB8QmBer381AxZNaPw6jWttMH",
  "key9": "MPVz4NCmtFjqka5XxD7kyZ9VfpYQH3aARZdFBptaJC1grjC8VWrPGgMZCpKcuPypzoHxV3UfrpjLoWLHvZAUwa2",
  "key10": "aNxQeC6SrD7btxDfFLaKV1qCTMfvS821vd8zf6uEG59GrkjcBatbSNHJmZjR2n2agfZEe4Xaq2PzJaSEZqz47oH",
  "key11": "4Bkpy7bWiXv7BDof8kgnT9aZSEi77SBFiXppeuTGw5KaYzAmHAo3k9MpCzuUTfNWRckQafUbAwZ5GQvbpo81HWrf",
  "key12": "467Qcav4UZpagQJ7fM8MG8SxGRZchmttj2B7ZBiaBQMkwqbB5eqZ45fZLwJKhuNtcraW8yTVHeD2456QXqfYgZ79",
  "key13": "55kLcL1eGrg6NguL3QpsZBse8SuS6wX4mpdJzUoGW2tJjESrriF4XnkvCZPbPH44gWDP29fFJzPidJSRrDo3VejZ",
  "key14": "2iRoBFA7K6iV8rNPmSZnS3BGgWGvdrdPtLSKR2kaPPBESxiahLmZyUCN32ZFVWGeDB4oWwdVVLG9cDZ6VCJFpXZb",
  "key15": "joVHuF3AHwLeSMVsXo7AArjPHzoo9LNHzs7jLKPhYCqWQa22ctJZhKusezwk3eWLpUip1kiVEQpSaTFrJRNUNjB",
  "key16": "5X3y4ej2BFEdc93jyNEzR6x816oe89QiXDE6RB39kuGoSEwwQSjoaUDw3LR1hhoduh9uKZh3aA3eAsZTF4x3dRHr",
  "key17": "4f4jz7GUJjbCbwjuUPjxdpH2Aj2dsLQhBkiejfFn1FkKdK9oC8LNC1SXPtVHNTXtpo6qAEZqrs3seAWzGkaj3cKd",
  "key18": "5ucpxuacrNT1G3LEZhKk7JFy2uCjsSwCJrmmdGsPPdzigCyXej6uCi3pErkPQiRneXtpDtpUESxoCsopkVVTpWZx",
  "key19": "5buV84QBwr6raYGvoGU15pYsdXpnvXNuG4WkDvySKrJXKAv6vqXHaVd3odqtYjBCEtYre5acXe6ZLpwysumgBRWE",
  "key20": "a7ZTbqfBY7xSygycwp4QJhwNv9DnF3V2UY1WaFUqCqmMi4xxYtKt1Qjk6aEE9a2wXcAnxzRYv2S6zaWei8jwEqh",
  "key21": "9hwccJTb9YAVFKuVdDGPUXzkkVcRka9RDMiH2cDzHexQYZtHT1AMpxojmnjSr2EXBdJ7C8W5Rc7tGvYTWA8DZoR",
  "key22": "3fG3jQYpTTPs5yPfbmmVzjJskeHGkfhWsCEASB6daEzV77KRW5v4XD92gEuTDcU6C6VebhWoPpy3zEcaPWn7y4TB",
  "key23": "536iEo13tQsvKF82jYm4jgLghJXDyEgSaWGDVy7ixoKcroz7sa9Nujm6zBFx24JRQT3z61dBW3eByPPxjU32iKVn",
  "key24": "3WNCQUCf3iSk1sFmvk16NPkZsuxsZ4oZrQWqSrreq2HSg1vBDdJR6JK2Et5rMaq4XZ968WiKfJpP84dFk7y3DVgS",
  "key25": "3u9Y7LY8kwajRp3szinbsgSbcUcZ3H6xsDZFUCmfRCmrjFagycAFUXZ1V1xtg23cEsNu1jPVweB4SdvHcP1EcK3N",
  "key26": "4JJ3ZirpNfTazqUPE9AZrFxCua8Jt3XscQzMnpysS8dtpn21APsPSKgxKL4Am44ggCvd3fzdgmGhYwpYqXYfbzrP",
  "key27": "3T1pCy9oe8FKMbqW4P3LKhk38CUbUmmmbiXqpx4fVCndZ3iu3aSoAdPvbieVoTSjwFBJbz9pdxuELC1XRLy4wiVC",
  "key28": "56fkvJ4PZz4m8SfwdU5ZsERH3KwQknpjyyEqJXLHAhtJyS8WfG1eWWKK8yvXRTtRBznfUMA7MeTumYqGJsK4bKXH",
  "key29": "3mXdmgV5RyMAmQYAafiWRGmZRxyM42cMUjWsty9L8ZjYFRWnBqa1gJx2H8bAE4piSxEpPWdwrrmgUmJq32kKU9zs",
  "key30": "21eBxXRefbooWzvPP2xSQeZCJtQt82yA1GWooyuJyhAiHgYNhtrbcJ8dkuQ4aqYtWVGdJcpaFERUaZgb8K2gbXEU",
  "key31": "5oMNsF2vr4TNcVLFprFM6ez9urKSUiZiYmvwLchRpxeKsDZRBwuEPfP85RBYz8frxZw5nhSrVEPDA2qTGuKf9MYC",
  "key32": "2XNBR3ieamBbmMTLXspF8pGdE4yeaEtEoX6GfwTE1WgzDZ5AibZyKVYTUjB2eHgQNvjE5sjofdT3jc7SS2NTszd",
  "key33": "xFnG4sUVPz9rwAF91oA87hN3Gh97V7j25JBLcrmMvaPztJD6FUB1yLJCgeFC1UJ9M3CRfFBMzy1PLjco6fTC4zo",
  "key34": "4CLkkKiaka99nmqjgFdSakxxjRTgLLXetTnr7vd5X3N4ByPZEvaF9YmXMafzswMdyz1Lo24YPyo1pzRd8zXmvcni",
  "key35": "YNhSa2Xoa9WkTUnZ6yA92ZMTJKzVatFHEA5CMi5K5K93KU8tGc7VjC1LA7rW78ei37i5ttxPuhprBoZdu9VjKRs",
  "key36": "44a3JEg9keVtrdHoPy3QZPSVfm66yZUBv6Sye19d4hnzopFKeH9EEDpVD6fXqpJESmdvGQQEXkJFccGLX8hhdbCy",
  "key37": "3isNKW6PPVCUbjpYXCAQko9ScToZPVCCxnAsbDMMwneYFAqRPh9x9VQgTKtK9UUjPQDBqe2QQG1q3jsvjprbNGrM",
  "key38": "2cLdL5pyxYLEbwKcTZc6kPQBc2Z2AvTNjnaARcW5P7nVKaTzR77YWAmuCc81EVdv9xs8FGzu7NUgadLCZ16zTbb1",
  "key39": "29BJnciT83tJbhsssYWx3jAmicWyqhAW9ubSDx4XgGur375a2HhTEh4r38p7VF6WNUgDFpKCo6CMNjiVAphQFMiR"
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
