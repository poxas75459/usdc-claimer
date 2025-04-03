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
    "2qkFobEjEFWoUWzmS7C5PkHpunrsyYPNT5EEPMXHBMoED9KJPAv8edmyHrB7hMt6yiiaJ9P6wKixZsNDx1jgra9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XracEPP6nzfwfZCXkrQ1v98HEc4XBU3WDUJ1bn7NohxRTSTASh3RcZpH5rttbSp3VXcnDfuwz5zbSbbfTmqEnFm",
  "key1": "5Y61mZ2d33JE5VxQ7qBzjpyLycD66paTwivg2SGzmVxHPAx7Sd5Bgz4wAP2mpqtz1P6YpEQbJHrPkwtzDVMmzRhd",
  "key2": "129wvL3egqiiqdXZrwDPMgNKqtoAkFS9CLw9NBk6uzYPfbEVsmPNCAzwhBTYtcZYW4mCyzce5j8BrcnyX4FxHC6g",
  "key3": "5VXDxzph5h9M3SLBr4fMKYdGamq82zdV5dnosCbaFXu827rgVJf7ChWNqdhqyGvuRPLhZYR8UsqtsoiYu6aRiLPK",
  "key4": "5jZD5ssGZ9gCKWwrjuB6yHtE4Sf3V8wDhho54YaWyR49WJVdrR8tXRaX1mX5zwpqdD8XoBSfFmvXwpM17VKaz6mf",
  "key5": "4iPhV8Xevg9fC57inLqo4kA9xVxUWcqyD1MLQuhQerGtyQCPU1HZk78uY44CUiTZF2VDHaqNwyETDrSBF1BPnFu7",
  "key6": "3boju9sdNrSwDGdDg3xrQBnyZiFf8YxEm8rGvv84eU5gL9WduvAyYVG1wSProXGa8K1V4x2fYzZyLXMCGZb5JHaH",
  "key7": "4TScg45uE4pkXExFa7dNB7Lz8nEupPRqaHyt9kegkLws6FPWARAA8bcRPBup7CJ3ys15dDB9jhW8kULoA7CyLevh",
  "key8": "3CaNxAiUMRzzRAcTfpNuzzJe4J6N2z6AMCNfdVXzhqfcHMFpnHM9fmCoubnQa6p1VwE9nXeMzqk6bGvCfLBnVUsM",
  "key9": "vPhy6j5f3Xjn7PA6DbAwTkdmynpYaRhS44HrxCRZHXvha2BQQxPXaKPakTnDTuK8VmdGWw5EFfy1beeti1aH4kA",
  "key10": "2Tn8QnLwXsBJtfqEAn7U8dRdavoPThcsL67oEXYA4RaekLWhJE44XMFVExLyrtPWvLK5FViMycAJJ1mfkwefFtj7",
  "key11": "5frjxCtigCT3dv7KtxWa2d7cd71Z7G7cqJX6kkCRuTn3YSDVikmtH1LPkVgCVvY3amwepBiGMYcxUYUxnDsfpNAf",
  "key12": "ZjfvGtxGbH4HCQQBCTeJDJMqszWK5BNeXeEuadHPEGt9GQN3uUSXMag4sh59EKFwHF1HS3KJLKFisv1qcsowRKy",
  "key13": "5oq9dPXyHM4WpThxm4obDJLZx2bEPPTZuP6xc61FX85Rp1ujeYyePcMWdMsdejLNZYxFVTe1jztzCLwJBk8S13ye",
  "key14": "2KofML1xssuQVQBrVtBTe8GaMPDbChBEPRm24ji8ZRvGanbE3w2PWSgXQEHBGqtYQQv8wE8j2QHB88qdC52TqXNM",
  "key15": "4NYPJzGT9QJTZPQPzC4evd84LkLUeZ7SVRCngJCkSAcE8fftNiWiU2TC4eD7hWV7Zq7To5SwMrWYe7NdaVc8v7hK",
  "key16": "2sGVv9hH3zsBaDETvAXBEjq5H3RtLbAY3X55sSuW2rjVBXTpsVa443SMnswBYXXwzNEbEedAGkpP4swaFqvD4pap",
  "key17": "3VCexrrEjgd5pHoHTMkTiMUwdvSRoX6dRUmKVqPWVJ7Lmk2qHCVmJvMDZQ61cpq4Vmf464zocBBZE1SkcqVkifyL",
  "key18": "2RKdQxZFAmLFUUiDBEUv4odMJyiDRmNSMhX9gwgkmYyrSgPMHWUcNwFtCJBg2sjwJD2KrhEQezeMTkUtcW4YGfCS",
  "key19": "3RrXmkLnvDZnuA6opKwEAW2X6RptFuzw1dmUTbUMbjF3R9ZQQaWVF3WyPJunom4PrcBwtT1immKUDUezyW4FcCi8",
  "key20": "45yMwZ27JrhyJB8zYnHNfDLdw6JrgRLPfWxSoRNUkhThD3fuuG1PihLJ1mG4rL7npjhkuHPABKNHrqJ7sgcehseN",
  "key21": "6cPridLK7pcwxwBdRkgbj4ESvBcEuFBrjqf4asxZEwkBoyzsD2F9u68Gi57584TJSX7rpGRUFTtEWVPv4tRR6Qm",
  "key22": "9Gfeqwxp7fQTdvaZ63JUap19iW2YFx1E73VPw29BnBJQy3b6PYzBEki2Wz221ZdgGAKpJN7fbzgJNHjPXaghhQq",
  "key23": "2s7ZXAiuogjPMHtQxaUUPgJCAcnfCkfkeSHfdAPNB2jyd3r6irYqTpLwnUESYyZMoF3RCMBoniuzZd4EAL8xu4Rd",
  "key24": "3roie3k84SWqFKQaZQg2KQU9pz9iVadAhcHLQPvNuYK4WJsTCGsCGXuiyQH5huKLCGx344T88EFRN9a8VBc2uPuY",
  "key25": "2zZhAjMEm9UgqCbmMJ7tqiEAMRxwBvNUkdBEFY3DLeHuRSUvnabVFhojM4zhidyXngtngDtWxf8qyPnXfKHVCpgv",
  "key26": "4xKJWNzFWrsKbKcC6sN5A16of8cw1c4GaYu6dQvBZ5pQBHxFdMUWnuL4pFrwnSzRsk4Luxnu8TNRD5hPtasVm721",
  "key27": "2JWXWG7V6kiGcF76FzKtKd3RqXo2H1CJVFkzBsaiGMwNFyW9rdg9fqSGNCQsayFdJ2oUSMVjnGeCAE5gVgUMYiEN",
  "key28": "62Wz4v2h87XGhdeyhFrmnxvJi8io1BwGF9zb9Y7xnAMJpELzitJNPJkqKn7Cv3RrGrmu8pxJVzZW8gwDCu18KA4z",
  "key29": "65nn91xXY5r8eVVK9sVDEr6sQKHn2LuoKUPqkZH7sxwnQ68ik8BgP5yLYpCDXvwqpnzuGdzSVmw5bDwfCA338wAq",
  "key30": "2rbq7WWpm6ayg3VgdaYdtsSBy1FNub9TVNU1asnK3bp5eCRW3eEwGKu6kyvVGXFrWXxgPVCaucqktKzKx4UtKUVE",
  "key31": "4LgUPf1gnwioo5To8xyEs6y6EUd8T6CVuGmMfNxfSzJxfVjdX2GfQYLcwGtkKDQVhsDrQj1k6m7RXJvLpfVjcRtS",
  "key32": "2nm97kcXgR91PxNM3ihzjM3uxBmAx9kozGVjkXnCxc1eriBMrcTMFwRJMimwpCiHfCxF556H9tstqF3sXAqdc263",
  "key33": "5HCo7qGC6c8pE7R9PAVu3V5kuiydyEtpcvD4uWe96MTrrPc8dPYBiLSK2E8GyJ8RtSqXFKoA2oWvsDLCCMYKaYJy",
  "key34": "28DzS59pugjniRzcCuSpBBLAwnYQ2VessoamcjNHUaFJYiEi9UnoPpfPVSD1AuXmW2KJ4WqmDGU7XrN41mAvf9Mc",
  "key35": "2nQLpEG7TCKzXzjXLkg6fjCPhVKqw86YjyXiD414LJWkMUZJzX5nunwJcsBS7FknM7zxAkNpypmaqaEmc8YXXc6X",
  "key36": "ps7wLdUW71kSDNALoL2D86ctPsdPB5E9GATTHzCExouv5CmwBZXRajDYnTLnXNFBouq1vXatgMXBDzyVuMHsX8B"
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
