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
    "3mLKVa7sFHWmeYqFxnz5Xk7sYye1tDAdt9kLTgz9HxVQfQRGzzPsifL3k8jFJWeEQ1fmDaLKaYQ45LD7uM9WvJbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tavhJcxvEzoQXXiV73wRuy798hhbFkRDCegrFcL5mPP6enKMRP7FmXgUG7C4wrY2rVL4DHFg1yQQNr9533MJgcE",
  "key1": "45EXsgSBgbD5BvZ2CAxCuFEQLnDgak6dHzRYfcLAMQNnAdaSUPMdWW4rgAygij7hbPvfdFRfjRf2FvoqUqDCaW93",
  "key2": "2A4kcWBxZfK7oZTrrdixXrzX6ddbkvSUHgD3S8TJriYFsuJyLN61dap5QVQqQ1Y2ft6vqB5c3MrpEMcYPsNoaudJ",
  "key3": "5PQ1N3JBuEZrY8J7Bhy8jayjdxo2sp5pWFmSk5DyZGsZEkyZQR9QaFUV9ZrgJDqubKjou5ejt6z7ty8eKDioViS6",
  "key4": "uHNzHFCdyTKywCkNHJH5qMx1QxUauwY6md63ig8uffSsaMQ8Q82GtkzWXyc6GrusyienR8Uuwg64r4sL8F7RTGD",
  "key5": "2jTrdopeSczZ2DLAXfQfdBZgdwdQ3rAd6zhYaeRx8Buu6CvXXBJ94BL1U1H6qoQ2wsbxappSbvWs6oykxQUrxo9f",
  "key6": "5PAnqXPrU9tAZJ5Dk1zrpgmNJcu2NCYRTz7ENN2fNuRLk4tFqEXXynpGd3y3g8yJbJwXyiZR35kFzAagc2TyYHm5",
  "key7": "4sdj3R2UoakpgC86V4ycg5ZHtrZbTWogVdqjagiQBySWEgtzJkUTfjeLcmRwPtTXktoVZggyKwMHU9c2pEPqMCLN",
  "key8": "4Xqp75h72SK9RCojHk3W9UkRUWAyvZxFyHTMtRxRvUzNav3KwNC6YngJd4HBFXjr1eEC4UDNmyg26zmbBhBb5vqK",
  "key9": "NCWM9343pfHknPpnKa4WSTMAJJyruFB5L9zhKYGHqut6eX2ZZEr4sadThzWME99y97ivexMfnijqTxPfL5N5AwV",
  "key10": "3tXW2gUuHxxZs3eR85zX5RR3eXsjVYfzbdaUELWgNabmtqud4NqhiLM4Y6VGkLiH5rjV3S3mNSEfDxrad1oz6Cup",
  "key11": "2K1cw3Mg9E9jfTFNSsgqKyr4K8VapjFURPNKVqEAtwmn41JxTitKWxevXBPxW6UpRtudn1XS1uoWxmhKss1UA6MF",
  "key12": "AnNTbdzqkZvYoVSQks1hdsEacz4JEjyYv9xJG4GswW7MWoJAu55CzuYFwRxGeJfTNas2GgcinrWQUVoLYdgFFtX",
  "key13": "3A5DZE1mSW381ZWExj1trGJe4Q9tEcJAWoJ1g5FVfzsV3etBy1FmvqzAJQRs2MzFWDkuGEEoSArv8ektx1aK1YsP",
  "key14": "3rMhbMu5qoY2113pdEAH5GMraG5CubXjpv7zfQKs39TWcPHmvyKGHhY8gggwmbdMH4tq94Hdo8SZWU4B2qZxso7c",
  "key15": "5BpX3z7c76wQv7QndHio85HZrqkmuUcNnYwuRHyc6DahjzGC1md2zP3wpAptp53FSesrgAqCPSkTguLMSVfUyFwr",
  "key16": "perpqQXcz78qC4Zj6xRKC1pHwpcURhZetaJxDEUQYfPDHUg6sXffe9XMd3pfB6GoXxRR9yx6daWoxHSyincm71c",
  "key17": "2AF8co18c9WZA3338zGND4Qj195fcuG2L7M9uQY2Z7hdZ6onnNN34AmouAA5oerCk9NtMSX9RZhgoveT1RKW2uUH",
  "key18": "4Q5smHnhVPVEyj2omm1ZYdiv6yyHzsJ4gqrNDBtAitchAPcdV467DHBujWZ9WHuru93P11FxkcP7ftS1aoSLrF93",
  "key19": "5Eh9JDrT7feg1U5bttaLUU9vNhLJ6sK58uiz2S6DkvB7ZtsBqVZXua5DXVHryZ7KKAAm9UzNEGjFVRptwi8PfeJ2",
  "key20": "42Re4iVh7cc1Eob6y1SLzHSgKSnkBZEd5dyx6WNfhNuRCHu5qWNPv8jz24px6xREzgkjZcVZWPSkJCLNuV27Ek5g",
  "key21": "4mqbfpKfg1YKCx2qdXFLQNnWJpA6oy7CCBq1zUKVKDYsez4HpMRpe7SejHWgUYqpCh3TvtGfarRYQVsmTTZinQoz",
  "key22": "2oTUDFGu9orN2FFCfUNgsiwjNXKMtSyqwt4GcJBj4CKeQkYx6154ZWg6e2s5SGhxSDVZyi3QTSTboh6JFAHgaRGe",
  "key23": "3bv9sRrXkM1hGrwDiVhz9TnBEZmNpdkPFJi89EBRRMt2nDpvAnDshfE5p2DeAjbmeqQPZzgMTuYkPwXdbZ24WYns",
  "key24": "3tdGJd3enBGJp4EMUgRYAi74TySyENCDUspyNhDQjJ6DCkX8jL6pj19ynWnMpY4GDBEypBsGt7mUz2Jgf2C1P9BQ",
  "key25": "3DJZcRYgv1kGdbEQaFmsevtA73Ujm6xUeGnhtsasaFrYk9y6pPjd2avZpnA1n7cMNrC5sQg4BDmxdukER9WMnqis",
  "key26": "2AKVDy3W8jfPKsprD7KrDB4PDvkq7iVTvrTd774gzn8esJW8WpE3Pofrik2hoACTEqGuzVxaNQRqsea2GRg93xsr",
  "key27": "5CEYgkRkgyzd4r6gm2ZEdYwXk3dubTagqt168aRuzTmDZxjhZuLfXmYVJsuDJCcu7CAvjHYvmTd4iT4WpTyCF9Zj",
  "key28": "5yw1FfYdiCzi8ZNDNt5AzcQJ5RbFFvDR5DaqmEYZj571jXp5AACCiB7gJKx7nEwkDwpF3UQAufPAT8QmhrbanNjB",
  "key29": "4HXDimPcob5agTNXRfP1ebjSLScYgooZWYp4f4FZ8a8uHZiC93NoNRdfBZw1DVQnkHcBrvJEioBJ6ptxpb5nGVpc",
  "key30": "hWC3rawthmSfBo3CqMKo7z4LhkJ7sfX7ozYNtu9jfVFyohoY5XM6YUM39YnrFPZhe5PSZUPXXCTt3DpFHcdY7Xe",
  "key31": "2bjeyFzie36Q9keuzUNX3x9zECKQ2apNsQgqmVddtW9y651DrwjkVRWC5M3bMVJN7HPSZocLXoBpgbpqbS4xAKKb",
  "key32": "4ZsZT6AXvA5FEfxhnfh4LryyG8Hy9c7MAMDkZLSK8YwAHZR6CyUcL5SxkGDjBgdPBcbJ7S3dBytWv5cyLSDECH3Y",
  "key33": "25ccMwxngcdYFYR3urJZk6W1n9cSe7tnDaZo4XdkEH9vojbPvAqN5HjqLJGC4nhLaRZwegsepx2Lxhy8Xenomu4s",
  "key34": "4Hyj3sx1Lg3uMnANnqXuQWQ2mdrWPLQJSgHo3DxWdpKgNc8VdQHLHjxhHBygCX9hN2YnwmJGH6vFqmasTxVajyzF"
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
