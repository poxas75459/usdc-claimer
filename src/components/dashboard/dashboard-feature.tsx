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
    "4at9DsxvH71oE7watYwSbALwNd9zXLk4zQtXP3v8mNTVZjcukeiJ36znAveR4ppFd35SUtWnKM7AAN5nWN4JHgBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ndgMpo2f7rr4USfbEPCTW2bHJXR6f5Su7AwT2S6z8TTYVDm32nBmy4SDfsKahLzQFGkJ7fzV8TWHHmj2Zv7z7TN",
  "key1": "gNxrTtZtbwuiJgbhaprtZX2F4v7oZmxqvVrDcXC4DbWnb3cKT7GJCW7z5gKtf8RxD1qGZ8pEPnDqJS85B1N3MAW",
  "key2": "3iJfx8FoqCdULzpNF8o4ezWh2XGTahQsazF7QERsukzLxHgYoW1UpewBsViTLjQGbY5QRVrc5C8Deay3ps687PP7",
  "key3": "2V5sprMic4dtjUZZQHR7pXoQrrT3NRRwqJJqeFeaPfR4yd5JE86hjtQnopkmTjcywrH7LDe3rYVrUMYHQk9W97Wd",
  "key4": "7QwbjjyKFURiMbu3cm7bX4VHU7akGnjodWxExf33xrofpFPnWfyn6qeLbFBB49eM97ZmnJsAQ2LyJjdVj5jQ3NN",
  "key5": "2UgkqPovKRyo4Bn7j9cF8RR2kYRFASy4rhCxDp93t9KoK2xF1LkNVDBVCUUhdaFahxwfHnPy4rzngdWpy7VM1JKq",
  "key6": "5KbTipZXLE8CQkxvdXnk57ZBUHq3YYQHY47WdReimz4hbgXsiPFoeQSzhdwSWGCyHssmjeaf9Mk5pJ8Y7zHjhg7M",
  "key7": "2rbgyTCt42uvQDZw74PXFuMTR6zVciQBGtLBaRoSqD9CLEoWoV4bX7Smokyigf576zF3hvFUe32wob3Z2g1A9Qw5",
  "key8": "2E7WM5WBa9gEWuWW3j5eXWFRwMqb72ZFpRLi8FQP8AfRDgkjhKhQRr7xVYByMi3WSiAnK7YeXhNMxbLHDHF3YJX9",
  "key9": "4yJG3qgJXMXzrbRxeuB8ESmUiDghim54izawKQtfS2X5VHNJ4P5s3F8G52b8WuJLbzo1D9p9RLvyh5ZHEcHvYbnU",
  "key10": "2zpajkKkDrm8xEhdMVt66BTBcgQTrZrvT6ioW68yRG93wPWY8GM1HCVytErRrrnR4iy3FJwAChLL1VAvvhkcioZK",
  "key11": "3VfEKGDDX9AwWwHZLPUryowjwV6sxQpqx6HVtMHR6Wz78KNkpUYSyqnnckmvgagdjNUNbY62zdtPmCTWbkBncEMv",
  "key12": "4TuTSBDvAeeNerUBiNXUupm4dLbQo7acVNFm62927kn53tjgoeckiJohPH63X65ApKdQx9du8ZgZCbmLXDpLiV29",
  "key13": "aC8K6441DBzasK7TcMMmH9XaVqiPcNuLXbmbWdLvL1NLbF2cTcc3yrNfiZubYfYCH6HHRZ6ysnb9aBC1qfio5n5",
  "key14": "2mXX6P3vQgQzV3oGoo58j9U5FE2qfzJPhk9xeijyLRYh3SBaf6fA29mjWQmjcS9fJSwQ5apBo4M72zQBNFm7SbDu",
  "key15": "2DQfqwYPVqQdSciV3fciurYXeZ4HFoN4nK1cgkaUbT1MUR3h2si3QiNrBk27VuupGjfA8qJzvZ1mG8ZaBtWgQaq",
  "key16": "tFdU962qRb5c9R63x5Qvu2J9PEY4iPE47pnkncVBaehE6vXXEehkBej1wPWAFhG1ZaeLec5jeQze8xG62GWegps",
  "key17": "eWJHWTrvKuWCV4qKKLMXT5XagSfctzfxCPPVKiybiFECQyXr46cLTTPX34bqPWTLkbsT4YPUME1N8E6iZPXyh5j",
  "key18": "5KgDdW2Mt73pNWK58fU8w2btR2LYVMc4ZqJciwVs4NgcC4R5913C7dLZB8nJDzNSE2532FmEMeup3Q1ShvvVZJFu",
  "key19": "aAcuqQk7nxXyfwRhCgMKMN6u7sxupuVfB41YSHo3sFwWqkN5bMMokaCqGsYd1pEwGmiGHPsCv7PXMgJ9vssG8rL",
  "key20": "24jRSBAFXZH4rzUA1Ub7TgYP7Q6XtDTWxYTzQS2fg7RBog8vwKbni12W3r354Ky3k4o3FsuwdCeJeA3Rnjq7pZKb",
  "key21": "A22kEMQZpZ2sngwNq8m253kz3p9URBENicchV2VkqtZZGaPQ9f39EZsJrVUfCGcahTvdwpLg7ZUy4s5nuKsqeTa",
  "key22": "zEmSxLSonsjVsxAwCLfD7r6CatxAsfrgtJ3WjKXBhzU8SDz1SWukTAHsWG87tDnCMsr9JkkrZBWjQHLdbxP1N43",
  "key23": "2wYHSb9Qx1a82ctWp2Qv3UjZx3gD666D8YhXaQfezHRWmwQFKZwwNp8GZ2566yXRtnmJGfhSBxAejfGgY97tj66V",
  "key24": "5CMD95SL7ydAsGHpsCvm2HGN2FwHeDqvcYwGz92BRN7xc1TXPxoKTjjbLzfjtePpSeFuFPdgNVHcwpQVt84Gtb5o",
  "key25": "2YAKphRmnmKpq1DFJLbveRYTifCRJtzkSZYrxWSUQsWiGLrtijoPFuM2SepZCqWfzuMRkjpwHCJVJjkqHZuM86dx",
  "key26": "5rv6yn1cMsFQNmE4b8wGN8mpgRDfBKUZUEwaHvEpnvTSnQoyAncRh8RmXGgLrHbEtAjJawj7q3GqSb63YHuogTvf",
  "key27": "2iVVdcs4tmxSjQNTRmWLA7FZGdgUsRSJdioRmTdZeqcR2YzhKTKFi6j3dKVKw96PWiCcs2McK8fRkkTzVGWoBk2x",
  "key28": "23xDVSdpXwPXZRzzbf48SmQkA5NamTcW71v6SkcxhELVfLFc9PMgAQnmND5qqPbBU7FJHjoqGpCFWSCoisUEmkpz",
  "key29": "4nKM4aQa5HPCCpErVhbofWXtowr5XZFjRSNFj7WxhVptxrjpohUHUpfbRSVwpZMJLPoddmjWYq3PXrj4FXYPD3ms",
  "key30": "3jjL1LovT6fUKkqEymxtKV61ztFyjLAdoXXELkUQJXvMjZ6r7hej3BJf5yF45AnpxM3De4HJNy8vE1iwwY6rfZnH",
  "key31": "5geWjWwddtrS7a3EtSBwA2AuwbTB91nRFxqqJLUQh3BFtq8kVznx8MtytRYEbR7pqP54tvE7uugKYSKRBnZz2cbr",
  "key32": "2QALDVcsTxRSjWQmv9Xc8wH8YmKMFboroQviKKJN7qtcao8dJxbNj5izgp8NVCdKWMbwCVyJaNecYxGp7ocT1Vih",
  "key33": "3S1FJLvm9p4ojbfjWHzsvNfcVJBv4J8GvfL4drN6xRcMRafhH8phtcZR1hzNQscoGcCaQNCJjESWGTPXhGNGWDBc",
  "key34": "TahewJteKiWKTHoXXKd9BWV9xbZnzoBkPzfA8Czr8TwCdtyTWYvvEoEFbZdpU5RAAbYz69K4P9Ah1e88kMWuwYK",
  "key35": "4MyLxJeCQLfkhmct3dDMKqWrcNjS49DEXLj7nF33aKrFDcvMFF4ezt8QzH3ZqxbnTJ4e1uPSUZTz1uj43SCFR3RU",
  "key36": "3dSSL2gv23KUbHHr56tYgiXaCKhqwjLUMoczQF4Mr27Kz2Ni8wjfkf5xtREJNFxccSiFvxT93cafwtKeM2M4TVkZ",
  "key37": "59nUbAmDnBne7LRnVD6DPR6qXyXvWHVegyy8JksENcYZ1wmJ5hY6DacLT1m9NhBf4jxrJPcVu1FWBNRif79SvCiC",
  "key38": "5yBa1EH7aruk3fkhrX5J7bnkq6e1gdB2KxrrxHDDD8W87b8TWQpoHZq9CLRjsJr1fpnXDoiVvvXDTiS5pPD9xNpb",
  "key39": "PvLzV45AMiLaNFis8sMiaFF9sukUMh6HDHxaj8v7sj9jUwvoHfnmLNeVkuJqUEhZyU13rRN4LVVgZ1wGrTUPigY",
  "key40": "2dfqTf7NTVd8Tkq6c9bCtVGL3xPKwi4UtZQRBYB8eB7C1YTF3SKDXqfBDxn5nmFBXGnyt3qVhEPn3KdjtsZR7b4t",
  "key41": "CKim4aTs46ezKdV4Wbjt11tVNcnbxTqZJTKq9kNimMf5VVGfwbTayQ6o9Dt9LFAyEaUNNSdC9MhsJx6ANKBY492"
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
