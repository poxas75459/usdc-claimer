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
    "f8avNShbHZwmtm4EE6HMQuXiLPTWGeVcoEeY9e9ebVTaXTPB8tYatjiU383TaamCsL3fMTkjErNWQ4vJ4iT6hv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMcvntuNEiyXvMu9PdYr2LvCDhZDQfFBSmryCKedRhCqipJ3DyhLjX9CTn9uqZfN5AjfkgTn81enDZPSeXE6ciY",
  "key1": "33YCib8CMkV9h7qgyaWpLShSPmtsaps1DQ6FWxJ4q8nFi5pErumBQWJGjYyQWJ1vsaWgHTtGXy75ZjKF2YPdrK7Q",
  "key2": "3FurjaHCNvZykUaHmwsDAS5dTg1xPoY82tYxGpvUbyHyRSRMYNstAucNXBaPkxxyy8ZboNe5BjkPeqgsV29WUyP5",
  "key3": "3PA1HEUVDAczXo36sDHALZHZe9sdy8PbVZz4RcZRj3ot4qKVN9jpxPLwzokmLAA7jVubeSQF9Dj4WGvfuPQMiGA4",
  "key4": "aVVDnBbbyRgv8vuHuGBxVeU3KwKMe6vdyDATAbuYSPqrf3vN6wxq1XaLiJMv9jRUEaGMRXoHyB1dE8ko8eTSffK",
  "key5": "XzhFx6Wvb5tGaGSpiNVUdY59vRC1mKEhKDy4txn9ffzWupE5H22gZ7BkJf9xiaYwzD637bNxckXDkK3z4xTBtng",
  "key6": "3Vu2MdADoYbi8qXxGvGrGk492ZRFS8hVbo6pVXrPqXYuQ8s2HCm6ULER1FYWCtLX5CrGN7W5mJirpnB9aFRp871A",
  "key7": "4gLPGFxqCa26RgUn4vTRDsRNCY3v1umuY1gFZhd8s6jEd8gw7uuFbCNU3bZ7de4rNyGBcsD8upXXFzBq49Xq4pZ5",
  "key8": "sNnanZvFsWJgZHe3hzPCzZh66SNtD7Dg8ypQowaxnAEuiDoib4U7WKmu8JMESB4ixg9KWVaieRcggMS1duer4Lm",
  "key9": "3XjezdM9SJVtLFtWn4mGadfHsrDqRns7yxynbbe8qYGDwpCwNBZPQfswd2uEdYRX2SPe2B1DnEMoteUnG1gNrFtt",
  "key10": "SKwH6SSKXvgNciDTf1oMRu4zPNaEGv9BEpAJEcxEQ3QoTc5XACuh2zZzr4xrUbDTws3Mt922naCmmAebeZnR7TB",
  "key11": "5NCCcXxzz7W7Y6aY2zsnmRhQ8tENECShEUdu1Xo1wzq55uJpUwLYNqrJKSruzsz2Gk23cok5JSKg6j8MRQfrAmzC",
  "key12": "Nk7nLotujThBntugfZVKn5b1VAWmdBTTPXpfYkJcypgdM91r9hQa3zBdwDDXfDDkXGeGxdTW2bCS19kJkcR5VNR",
  "key13": "3vYjPDsA4JZMqjPun1Jc6KgnWwvUEvnwPnapwu7NXFkGuAUuus1Z1L2cHRqX2p6oSkZqFcYi79gVH3JZhgBRkL56",
  "key14": "26Dg4ovyfP8M5GEnqEGotBcjaav22oMnGATceobbYZiGxB1w8ukKQMevr88bKXsmc6KAnncxE75YRMUsoDZaHjgq",
  "key15": "47MBnScp3shpMnxkgPMQm2oHFhC4oFdywPHFxsGEfxNQJnq91jNG34rRGWvapYWVMmexrTaFXBEeJNpNSV7R7wrN",
  "key16": "48QTxJjcney5JyuPnE9A64sA2nP6aZcD8ma23d2ZjwEtL9Hx8vDBE3xfc6jVGHT2CTP9bPG4pQ8KeRtbUFfPBtL",
  "key17": "3bmdXYKF118y6VL1FheeJsvZ48FJFH3X3DSebFKmWB8LW4h4QQzdJXf7jbFdqtQ14LMJZw5ay5b84RUvBfRCZivw",
  "key18": "25WNRKMMa2fNwot5AbMoSoYPcHwp7ATwAnsCbNzuUFVzDbqVjefTq4mQwQKo2vEeDVtjH2nZmBWCogjzExFjjSfc",
  "key19": "wUH68UPqK2Dm8NPC4aJp9BsWYzF2zYSHqPH2ejNujN65NS3GCx81tqZLuPp5fGTvbxmLAzAkxgjYdUf2dNFdQ2q",
  "key20": "aKLubLwTZMVEtmojZqC3kG4eUiuQR7qxReRHhitCY9bW3N89k1vYpftHALHaWwYXqtHAPfVLfL4ebepw7A3t9EG",
  "key21": "3fxtr1reU27eQyuhKaGcM89SugPi9oJtXxJBiiPQr6nbCZmoqncfcwVhyjQU2jxmhZ7drkgZnM6RwfedPR9oJxDn",
  "key22": "3JMMi3KpiNFRdC9LhuQE5A1nuv7yFGZuSq3TyDckkZdsfsVFZisd9u8FAS4N8iL6HTRYptGWHGcSQ7vpSBFVVfBp",
  "key23": "a96qTtCT34MmeqR8P6TbzhEFqa3atZDXbucxbYTzenRn3DKRmJPjs1nZQaa4yJKp6Fu275Zm9kBRCnB4BHGiQsN",
  "key24": "2dGPVfkqjCcmh6ZzuEQaqzELd41rsNuiZhrbviUQVsSRoecFD9G8gCY3HyANaokir8P3dBm8W6uRopi5cvbEv9tk",
  "key25": "UtwAe812ZBueeeMnraM4gT6n8ecwuyoyDfq8QE1qqC3DEAeKPVR3hgQXNyh9gZU32scvXnBKAM9oypmVGyHvZp4",
  "key26": "mr1VujGe4DRqCFanPTBhsYgi31M1w9F86gRgxp7qCj9mtYps9iBK1fMcuW5bBgjbFU8yLaMstqBq3bwRgFBpJep",
  "key27": "3zFag86YonevJ8KRPe1PbrTuedu85UibFb9MHwR1CWjTNKQzwj9cDyZ4LgUmbvQTb7GeGpbfcvaTYjW6Z81LWrGh",
  "key28": "2YxpvtiowPK8HRZg169Lawmpb5RH4r4azUia2jdNwbNPeEyTCYraKgEHjNqxDWQMuvzKD5kFXVd4U1D43qANbt3E",
  "key29": "29SjoAdW8FEsVviBqYeJ634KLehauvdvVB6V9QWYUGMm1Hi9FeGUPXN7cnCrUEHkS3LaLa67Qi2eTcEhV5F7a8An",
  "key30": "1sUESX25gCN8uS82ES1QLgoCC6QHtn21YCP7UJTJgPoLn1ss4mqD2JRTXzRyEhLR9iwfdkFNNU8rDtpYTDCkoeE",
  "key31": "e2chkgCuDFDsNFdL4Zfa8RfvjyaLteXGGTm2jYjTAdMLscYvxdxeU9Ef9mmVPq9pGjnFUtgaCJnPftnbViM1PVF",
  "key32": "4XSuD2Gf6c3za8yuUnfxVS32KxipE2QxmvophNunbEk56AJCYSJrmxyB8YJiT8PCvEz6NQQkdo1RxhPFfPhuCkTi",
  "key33": "4cqo1m4umeYDFxkrpzN8tiwd1rSaZUwiWjJxfK58MEPrAgqv8ezuY3gAmUkVw7c411XFtQ9g172hsDHGrdNTKump",
  "key34": "4uqhoThQeFVLThxJk8Z7RUMKLZ1HN1BVHykE6fY5b88wmXQmuoTRbuXSGtfcYfRJB1uJzxtbzQvC6t4ThsJFUWzq",
  "key35": "VSTW3xRrvLx36GyNLoiQ7Nu4Ut2zHzwpRn2bBmtQhytN4AYnD2xPxNgL3EC2mxWxmL1hYTphzgAEVsatJXUzBFJ",
  "key36": "Z16CPudnvH7tK8LdvwK15dhhzxmZURwvNYgoEk2ovjn9HDgFcub6TRxTWwiGqnkaafTkSM6AXzTxG59pLsDWFdg",
  "key37": "3Ca9Hbs4t7CeX8bJCxE2jALPkdjDmRLJKHNLjNBo2tzSQoSP4kzAZCsREm2fky1nxv8KHSYPgp3yrMkpLks4NRmf",
  "key38": "2Kekw1RdjQeV7nqnHKZhnnaD7bMP2j7uRoEJx9M97Em1qpyxg7EYHxZLPLn4mmo4oqkJhFrDSp33tTvrUVCJdwK4",
  "key39": "T7y2NFuPWkwzFouWVju3czfqKry8i1CDtBRanaTTiNhzqPsr2hUAqCi4M8mM4KEn5zsYsQg2SMgTyTK2fDQ38DZ",
  "key40": "2HzosA8Uayb8RfkdQygbWJxqtccBGBM7hBjzdHLC1GZkiUfDiLvCfh3PwwkFi5hpUxPkkPd38829TCRJxwA2ywSk",
  "key41": "4sYbP3s9HeQtg1Q5wzuuTz97K2GgUgSBFHW8axpaFABwuxU1snVGYqP9vDhDS4JTcCKg6yHCfE3V8cyDqWCS3SGo",
  "key42": "4gyAvwVpMyWuiMtu5QvovGzuiEFDVZGzD5uUJ2nRFFZvuR85jvGennqs9YUU4QaxmrkbHZjPozGvudpMd3qP6mAp",
  "key43": "47XPjMVLMagWryaetpGWiUee35vXBECAULR2TkayPU88pVwm9FSZbVrqrYzxzZHrhrQYPRCXu6pTHhJBaUK5xeb2",
  "key44": "7hRm5GcWbc7vRGJsT6y1jkDikTvBHL2Ks8HZUWqZmee1roVM9ctSHNxVUemZqpBjRWMC64i4XfAjgiJzmEe6XiY"
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
