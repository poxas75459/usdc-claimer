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
    "5YfcYU2cRmqLQTqv6ASAEUR9Yv1s2Kbq8B4FT4c6b94cuKeypMVPbYxFJtRRZG3zyJnH2UzW4q2D2oqJGLq9ebnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZxHAryzGBTZsqk44vQXrkoXiRZ9aie2Do73aPJ1vPQ2jg34REYTMjNuzezUqaGAvpeePwf8FEcoiHHu69Tnz4aL",
  "key1": "3cYtwEzwTqdr3WZs1AG4hQHT2WBReS7k4LYeVGidjcA2uTnMW5uuLbQckvHhRn4MJmjX5eJRmRWgPyaVFHVP2833",
  "key2": "2ueHRpa1wP5VSxHHJkSNzyj98B6oriK6znzk5vqwSxXKqRrFr8sTYZMiiZeQmcjcAaza623nteH4eGnXkmfks12Z",
  "key3": "3U2f9M92iFMDasiCSQzhqW2C16t2wEajwvvMwPwuAw46h5JoKZWs14jUsJGasGbCSZGkSJFbHXGLkdxmu1CKyqiZ",
  "key4": "cR73j6eAovczoxgZgUDnu9i1TcS595ZWE3mkLaBoqkBNju9hRw7P96vPHy5qoJYGMvBbWfYgdFvvZwqzF591nva",
  "key5": "5YwAWuXnfuFGxyhRQoagNcFMdAMi3furjw7oQcDW5quA23SFTnY2y81CufNY6vwSHkVSu6KCfRGeV43x1NveWzyX",
  "key6": "3fNTC9DQHKzGWRYqpEDnw3Lfm7ModbAGkKmhG4oZSWDq8dyUU9UomRQj8cPuptwcd7wTXCzderQrmgJqYBbEJpDC",
  "key7": "5sE3YaKoLgt4deeFpLNnWkJvNMDY53dLJcR3UcAqUS9DX5UpZRbC3aNsHCbBN6sgwbnJR11idzJqtvrXYPTFeDoe",
  "key8": "Tk5rA83YUcerofGrnGCDBqsd46eXePutepDAJfB2PoUdG8rXZEZF9ekpEVR1SDJGJe9eFXXaya2Xqr68sAmFkMh",
  "key9": "399AETiBRsj67aDJngVY34KFLszFN9jsTBRcXzMoJKdxXTurMYuHMkXRWRpAmZmMK31d4E8FqTdPJ3B6Xa1475pc",
  "key10": "5idMnDLunKDAnsYKDX4o2Fd7xq4AyvKX6vPRNBJXriAVoRsjg3bRSWbxRARaofLstWzrg9hPGFtf8Umw9oYLVcYB",
  "key11": "3SJG5rhgxgtC7QAE7iSrd7DZdgeU3U9goW7Umq9DfdjUsK7jMo3cqzq9vwrP7UDJrQsDgB698bE9szEMyywo3CNW",
  "key12": "2yoBuHxs6gb1LX6JEmHtT6m9okcwNiLNiQRmRsGHoqpz9qXKiRDzcJPnyNcmssvnsSaVixA2qDVu9JAWFVPL9TMY",
  "key13": "358HrHvCAQHHwqQDya1FEx63iboRDNfW53SVqpg2QUZ6AgvF1cqiZfh99CHE2UTUqPPDYJCfJZA4dkwvaQfdgzid",
  "key14": "waftb9b5RWAy2eVTeiwXhjCJwabroNSm7fVn8StKEGLYn6156n9ueJA535Sajt5Ma2RzVXEGdmXxsBHeRv2XfUS",
  "key15": "4o66EBo2fKYiTbormqNqG4xbbdvZ9hcWui14BiMKvgaL52aL1mt6BVd7dXBPYdrU5VML2HVZmaP8LUNFbEd4diDQ",
  "key16": "5NBDimjJHCm3rqFhUYwrPh8DmkmxmLwUNtbBFdtaDdiaTYB3gmSqyFQxVZHQkiwfyajYygqkTAvVQCVLrxA1fUHA",
  "key17": "2ptuVtL92rxKseiAT4kwumb8akoxkp6UZ2UJVpV46ZvxRFUYvDxt48JqJYQYauo4ECTdHsEexVxG8iJLYHKjrho5",
  "key18": "5G6peqZUsCk66fKjn4uTgAeyLChtBD7RVoatrssnFQ9uScCYDrYmfEKEJjeWNiEdCuHKNf6wEPwUBoF6qoAk7M5m",
  "key19": "5N6fZhEcuyFGBN2jGMM2Ly4UUBk8GtwdkxgAXtYUcZCvNSNK548UgPzUeiyEJ7ZQBCK1jUqr27DTAMu9NJaY9Ghv",
  "key20": "3hz7c9e23pdN8UbFpqjmWZFXJueUPWQV1kuh2vqsjrwM7CQ2RJhUTPpEALwv9FkExCkZCyyNAU5CvgqomUbgGaEY",
  "key21": "ZHEfxLMXoHPxaCkk9KiF74tfkZEunu6q4ojFQGB2FXYactmG4F8LPbCEVqvWZqP6t4YJXiFC6Vj3p1Kvuugiz14",
  "key22": "2juF7af28Ky2bafyvoicTUxefYohB9EQtBd1HYJGj8iLoHUo7XUGTaTgGp5V7s1ay5TzcLTV93iRa6pF7yNnydvN",
  "key23": "2Mz9njTegCitw17fDAC9N9pqPy9pK7m4mNJu7d9CR9qXN6uW1Vpe1dVzvjMYCZznd1WKPpdmReqtgb4JQzjB75gz",
  "key24": "rsJ5M2Re3cKoaEDkwjM7Cca9cc81BRUg1WBnRHomog1izs9TyveMeJv3yJmBz53Qav85imdLxD3RjQXSg7MR5Gm",
  "key25": "3v4GvdaYzvh32aswHVjWyEme5GvMensFJPwwbiTrodDKNm2te11akuycze1PQKCfPhSYuTnKrwD8vdtTxxBRUBd7",
  "key26": "5BQSMfbxiVTb5ai9tUW1k3RBSYCb46nRWso6Wty7S3otYGwEJyuRmmBWMY8nsmZNvYAXT3La9ZMzTrfhJ4VyHXBZ",
  "key27": "5QtQVmq73zjygs25jkVNB9z58Y1c6bMFucUajELGiWZkMVus91A9dgRug7wYKrDghd5k2fC5y9fkzyDgQYyJUpf5",
  "key28": "5zqpkPxHZ5mL5nt99urp8dWRe1vn9g5obj7xc5JDUtr6prPTeKXSh47119xgh3AwkcxggwpsK1vhN6FCsPytn5aS",
  "key29": "54adCmN78P6JgHuioibjZuF98wi7CCnfKm48DvvhAQvd4QSTokzAzSJfa91YtRjj15tATpxLKRHtsSot1yqKMrMB",
  "key30": "Dty4Sf3nT4f1G96SKYkGEy45TyHpLPt4cjhfZRnf5NT1mdFj6njaW12FgnijHGs1hauJWeBEQpSd5RbEutZ8NAV",
  "key31": "5KdHwcXbdrr7JCvAgC32WPLRgVJg2X4c4vyuEbjAfY5JPgtRXX4WKFdPRV2ue1wJV7q9jHNtjitGCkHWbCYg4CL2",
  "key32": "4sHRhLfV7katsuR43KD55pyHVcXNNE45qan1CYC11QNXa31NGCsrbGGwGuNWD5SBEA2F58ZkAhBZsGggXPz1pgko",
  "key33": "Dqc8ZPYLtAAnrsc8SBcvZ2a58gMMDrYQFLDZg4zq7dCbM9FcsXCYkqGf2oFTbeFUggMPFuqNTkR5JaLWcemvKdn",
  "key34": "5yW7XewgRAth5cvfvnKoTRe2UumSX2RVBMdfDqEWP6pMHU59SG9rPuMShBTbYZLpKNxkRSWVRDMWaRb4yjqoiE6V",
  "key35": "SakLFvge5BxXTbrabcbGPah6RHcLrXyLQW25DHHRqAnvNqavBThh7A4g61xRTEzWa2osBZh3qc1bfAezakbbQqT",
  "key36": "3hLsBFxF2b5ehcYkqD4QuyYanJbVjfwr5KFZ66HmQvS6vTJ3kE22KENuEjgnsDbGCwe5Snyqwy3YKhwKm1MxKzVC",
  "key37": "pbWEvfdykUrNYMM3jSw9VzF3FrAwYDtMKdRSJHRoJjaSANWzEzGRaPS1xxhxpcf6hREqX4xAvZurRSfwWSnfLQX",
  "key38": "5F5y4zZLoDAtYyfZua6wh6BBvu8aMyKBgqruRqPsm6uDnRwZP9LYjy1GZpNYxwGLHCR8VJwK9aPnPphnh7AnmzcH",
  "key39": "5zdWNzuujLGvVZVz1wgwdHDbojWQwbXqBhBxCvsPNztwQRi9R1nTWvt8Uh5JRiXjowHtcqrLeq9g3BjLNohyyaqB",
  "key40": "5UN44ex9XLbpkWkTcHHenzuRhSw7h93phaUfyQQbes3SnvqDPTkJahVELm8yVkroQdQczPngPdSzsiTxx43tPC7Q",
  "key41": "4Z2UNZZWa2KTng47HQWQHfcdT91caqYx4mJJL46UoTtZpAUqyhTWxdMwaaYQdhNhQfGUG25Bh5yWCE9ZQVHtGHKT",
  "key42": "3fE1MwdWZDaYQWERKhbLsRYtaGyqLnfrRc8ZHVEP6SLbmmswmCn2tMEV86kyMXdG7gKi9F15NgcMtZ2XoMiLBdtV",
  "key43": "23YLssuobjxFtvWw86qncXdV1gLzF1Skn3AsMYVXtMH2CZDKMYBzYtEYRbRqZzUzVKCW84rKt6w2F3H1qpMTASSU",
  "key44": "5wtJS4d2RF5vcx1o5SxSegKJ2mPS6jQSeibJScGfRYFhxfHL8mR8Hb6sEq737ygpfUM7SAPXosEE5XEWd9kg5Tnm",
  "key45": "4vbBpTDVCyw4GCZv6YQT3FESBNaETVABigiwzuxkPo5CTQQthAyovWtbtZpQ1azLckdGgsYnqBHPpwN2uDpZkspP",
  "key46": "28JBLucSyzX7hHGNbVwy4P5NzRxUFPbLujE8QdxxmYnvYmxNR9sP6HamA8hEJ7og5beAiJ3nqZVVYR3WCikZqxD5"
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
