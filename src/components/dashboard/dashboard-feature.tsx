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
    "yQD3eU8C9vVAJCatkeE8KZJYGg9uGEpS73xqQgZsmBWNCb9bbJTs7TfHatHP5WeWGmN7qCq3bMLBfao38xrZWMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLFPcYaDjy5uGAMk4f6M4kCk6mWWkfNjCNPQckzWPzsKjHi1LgiKyNjx8Fn2FNtpq5YB4Ln8uFxuucuoX4m5Em2",
  "key1": "4ATsmJDCFLpZxu6TCfe2nkHYVqAsJpUhC8a1q8SS51x3DRD1AFHBMuAw9TmkWBnvesUbNVv4n2vUM61rSo26Qif7",
  "key2": "Vb7RaKpA1f7HQUVD2j5r6oLJBbS1ERnMhq9q98cEEwXZJ1FWXUX5YgA3oT4V8C3nvTbYawpoh5GkfLe79aJmfr1",
  "key3": "2R5uQa9faJa34jCsxCt9LdeoTMR8e1ujduV2FfPzNdZCbcm8JumdbtY79dCLUyweeLcmU1pB5qiaSihdURM2KjDu",
  "key4": "4j725Xqp3cXumQU4BVb2j7DnnEe9AHZacbCHXqfMspGFKfZbaBgVKwEbdxnDSXdFqT7oGbur3u4NPZL1mob42HH8",
  "key5": "3iWdDuNCbvc8MvauWhkxE6WsY1e6UCYMwnTmcDGjvKb6jPybow3q7x9tVF9D1pJiWiTE8PYi7ZqLxoMrVw6StCrc",
  "key6": "3B813VuaJ33eWryACa98ecg9q5ZKnBvzshDwQqbQkFdiL8xKmgxWWiDnCodAKrJ7UAxKYenTqvQPR78Smo2q29XP",
  "key7": "5DDhWm8Ms2LPyM5MnowsiuHZZi3c33twg61vQeT6wkBB7e5rCxYAiy4hny67gprCcmuXK4m6evGbymrexT2JKx5J",
  "key8": "7ZbjEJEzvpiDuda6VRzdfyh7S1D8uo1FmD6QVQfDYBgJBdjMQypHjkqywaaEBW18j8ik7xivvt6ycUexj78nFmb",
  "key9": "4YtEbzPU7Th5sNMxdAyHS5Uyr4By9LTUrHKBRaWxaScWFVvyeWvYL7AdfBGqccP8PBtq9fZZoZn7fCwWVHNdNUG4",
  "key10": "4QWw89Hgf9VCHfeoDPvsvLN6kJTGeW9xnfWYstJwuhwWsoot22WgkNbBjemtQLDE1MXbzavCuCpidjhCnVm7acrk",
  "key11": "SFghzo24JxD1QFU7c6ucMg6dBtg3RA2DuKwLMUz27ASXZF2XKe1bBcQLfuFBmnfY7h6eq6krSvRW1vqndKVVMJS",
  "key12": "3jaqfmg3DvdBE6ZuWNyTeKC4zwDY81zGHWhnXPP3LaLQQkt7uA1zmXCS2uJCLgt39zRMnAwVTxPbRh4EShFjat3s",
  "key13": "2hbJWGWon4WcZnAFR3ERfUG6miapt5sY6pSxjpBvEtH9dSAtZZsdjmFqGKu1vHsx6zieKJNigFRgVE2m1Pkf32g6",
  "key14": "4WD7cCXfpGBcz1cX8DgFVLMVmxY9FYRndFknCvZDVF4JLEK8atgEd82vxfTfTEnanaiMxxukKLL3z3YZo7HDjMbR",
  "key15": "2ddyoLVsiXSQd7Z4mrfr3VXWCndwg1H2ai5GK2B4ZVCCXSuze23LxLWtAMcpX1woabhfmbAL3NChTADKXceKh4wb",
  "key16": "22gbP4PyVhrgKBE4K41jqbfTeuwsCETLgVt6hZM6Gs9z1Qf2n4LbyJvwJMfuHAM84JvkHdgudcfgFAyu3n1E8Cok",
  "key17": "27NU6qcSJbiZbBKvoz4iS8wBRxguDu7Z76erbECcvW9e4hftNJAFudVC6weAFuvV1zmFnEJmRBsrhpKLTmom23CQ",
  "key18": "5o6TZLtiFbhanPoM92BzjfWwGKbAAptw4PxQqGrNa57uk9hBJmfpHWaWd5ekrk3CCQW5BNzV8x6ggUSf3Bp9esoo",
  "key19": "GhMbphkh1xbVhe18yUrmWymiQ15j2ZNNc32NQqb1d4SxfaZjfBYTfsuq1gtxz9cWNVYNvTwkwoM9ATtd1ap5zfZ",
  "key20": "24rHFKqDShQutzLXTD14aKfo4NqEYhgHiaFNN3bpZocvSqJ6fKVhBPMfptzZV7yHMbrdwbgsNZn7WvEkCpSsMFyt",
  "key21": "gpwBMKrFSFZHMoLYtbEpaUh3Ewyj7XmsSuzMntdPwB7wTMsbKTYmVwhDX3JxcQwu2f99CCDBkhQQidgnJQ2qUbC",
  "key22": "3rmdgRNyR1wCk3UJFJZ62aq2x5X3uEpz8jmZoVNwaimibNjUVx6rSqGs6Ei3XxSbngXMboawwLtjRghUyzZNcZKu",
  "key23": "3GeVo6Wg5y5ztQwoWSHt6YiKRt68jS7wyNPgBGc6PgsHg5SLoSstXHEsbnSFqApqrDxJhzFG7osAnMa1UoZDCPf9",
  "key24": "2RHNUBgvX5bsVZmW3wKfwGD1UiEmMNoR3BU94xZMR9xSjkJduSX14TSRV6MwJwnZ4jM8EnoogBx4FP3KMhhmgcBj",
  "key25": "5rTkxB6v8BcHEuTTPbNFubUB4rtAeLgSQDkWtBkHzCuPVnRAZdGwsCLJ1PaktEmQQ9DKCaaCvptztiLjyge3jD7h",
  "key26": "2EcTJk9TigWxamh7k7pnK47dAcZGCYDnKdXPdKiGPEPtmTgJ2txUKPAs4bx4SCXPm4GNaGcYMDpzSdryrQSoU6Nu",
  "key27": "38wXvggBQzpMMfAqpQHiotdJ3tqNtwk6sPPPLbEkSYDMnqWQa9ENCtYESBBrcaRxeRYycXZkaTenDZK4LF6MmTKm",
  "key28": "492W1BPd5LFLmeNYfJVNw3415FQE3tVRyj1wgJTY64JwzhL8ew8obxKMdY4LzwyqoeUGGc4G7FtRTWKLZvxKdqNq",
  "key29": "5mBqbAkmXb6zPvejUiEsTm7jSdv6KAFnc4QQX8M3fJxFHS1dCB2fjqNXjhCczNMNCEXMRaS3DR716RGMjSL14Urr",
  "key30": "5e3wK8XrfY39ukhSN2a8fLEAoCpqpQx86HPpMYaNtPdv7QvYor1CiKomqb8x53rvhvLeB29xcW4iqtzy2ZdEuGoo",
  "key31": "32BhLcYF5gyVsGYwARyRWeE81ZwRqecKrCx9fd5F7n6yBSVUawyxNfxSx5m7S1cnY5g3tYpMZCSdAx7Q6PGBRNEc",
  "key32": "5pC6LSqMrWsMJxk88WHakvqEPoTSZC2DB3ye3fi1bB7dt3fyfa9sJfQnRspa3i58PgkCYnGSXL85bvHJcyJ82PjV",
  "key33": "2bV3s312kMDbrAq5iyKZ5h9BbKiB5MhELreVQsxiGEB2BwAjQPvWEtjv4Sti17fFWNri6nTQamArS8YCSg9x1HLk",
  "key34": "5pHtW7mb4R7ocoBphqGSBLmvMv6H7sKuHBzQA7owG2sjCjXwRF2PaEsMMmriHE8pJiDvnvPy1XYEFYNSPnC2skYq",
  "key35": "5qTGzkyuo4XX8zMUUmCpLn5bh8QNaDGJ6aysgsdmjEpG57Qy6zhVLprYX8BnKTLD2Tp9wnLXgXVVQzF33ERvAzL5",
  "key36": "57oAxk2ugTzoy4qkJyQ8q8pFXGsteE8AHHKuuArRTVySMsJzPoLups7ioQWWhHc8pCgcw2MMmFQkTG6C8FBHm7Ga",
  "key37": "354vQtFrduxybQYz7P6KmMHQgCDXU61UptYCq8qwYE5bYgcxkMzrsWtHQhVoUwgqNKuhBueyzX7SeK7aZpc9yxTA",
  "key38": "3qc8KspbiwEgTBp1Lc41U4h2uaK4ZYqMbr7odUXVfPv1rWV4DnSXHes85VjyhZzFbsGSXNBD2R4tA8Ldu5ewFegb",
  "key39": "5Z1287LUHxHNTLG3j2Se47KCgQXNmhQwkcN7RoP5xHsiba7MCFWrtidJchcAHK6C7PvqD11QAGDJL4RCAHL24iPa",
  "key40": "28affoKL3kb4hSFDgFXLX35s9ENdjG99LaapQaqwxGkkN1X9mH7iaSdYSW9HFEXaxAejtBmQXgXR5ReUMhYMywUP",
  "key41": "5YMYur24EA7991kTRStsfn3uLe4uecF7juV3gFuK5dzhnUdTcsNgkxeiaKKBtAzGeWwJB8pXkGJWELSmJSZNoept"
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
