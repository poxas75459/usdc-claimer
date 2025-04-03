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
    "4c6DiXaekVMKUKXjdr5pQfreTuhMhRKia9UywXNYsMyCrGYShhYAwxsrt8hvsMh9xh5HVyTMSyRyJJJvPXKRvwLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2HTyQbxAoBSaqkmrqKxWmBXhrDvN85Pz6UoqqrdbqKhAjhWjzWGD2FJSw2vQjhUJpYkkbCJjSJY2yS114Si5R",
  "key1": "2E5JgbJ6gd8jHcvTxtCHNrwMgNLJWf7RY76YcWTLzJx33HxsZTwhUsXv9ocxMpMXB9bnh2Gy7Layb5HaG52R8FGc",
  "key2": "6166D8NjhtxDRfRs1sUNKc33YFmsEeDLRubsR4zSWfrMQANvp2cTNWABXuZGKry9P5Md1q6FNumwLXBkoT9Eb91E",
  "key3": "59TcAovwC1q6LE8dHo5gkgDFoVVUA6tED8wxcwMTxMHqSuHbLYMUP3ta6ZcP8hYNYgGUwDNfkCx3cj8MLFzH51dQ",
  "key4": "3VNs1QdR7fq8CsemAH2RSF4MVk3UNqAeF2dpRd6CKX5RsSfqEimAXuG1kEuXaB4U5965iJmV6rJXCe5635GpoXQH",
  "key5": "5NCsurTjBJmifjUcDRPEuHTvKgvQ8XrecUaX2qm9LtSCMGrG9VdeKWLezjtcJxLBgTU1vzjUG9dNkjedK2XfjtXF",
  "key6": "5nTeMmSYgXw5i3BjnJXwqufMyNqCZRMu933UumGg3mzfPGxG3M4wDMj1kw2QusEsZWsTZUY6xCFYc9JwfsVpPy8j",
  "key7": "3djv5tSAcBASjaUmKLjfNuNK2C23XbZ2eJZVVVecE79P2KtWCWvqStAqAz4GGJXp2cAGPVvY2ZrpFAdsjb2cBn6N",
  "key8": "3d1FWtRByLWNCa3C7n1oBnZpK1a69kfrKrHU6CmjyHPptQxPLeFW4iGv6opJftX32aXjWxmqGu8aTpykrJgR9Fvw",
  "key9": "2U1Y6eEhDNbWTvTcrPAQ1xhgmYKPGnzKJdYCPjv5LzA7KC7fMrugn1hJ83Rtq4w8fDEkKbH8RE6KfLaybMdhPDmc",
  "key10": "S3tKwTkcsi9W7Wq5DCZh1gX2HkYFjgRraD7HWuDEk51tcapjii8BdtDi9ZDtPzH1dfNgxgupziaHhhu7Q6Xo8FQ",
  "key11": "3zA9T2NjERoaYh6ka7Fm5Bih8VXr45ifFKw4fupdzyDY2mqomV8JuBMqY3eEDGAvGUjEMdnVeBwBMqScTvrdQsDH",
  "key12": "5x7BJTtBuq7yVskEqsx4gfxgDFPAB2cjBqJY7WpvgxZdby6BuJrHdyBf9x1Xn6jdR4T9zEqv33CQyqSs4qTc8Vme",
  "key13": "5DHg1svjGC5aEWVQxFVAyA4wo63qmF9D9A7YYe41txkqj1GmLzbPKiDFyZ46qGXXPjeEkowB89SjH3Qjhbp4hquf",
  "key14": "4YQ247gAyYoHet2Y4sC6ZBskbaX2udSQ1JvXXfmKWTtmofXebBntj8ANU6mP6Mv8oxWdnEXNwNzNuz4KJdg7nGwE",
  "key15": "5xuk7zis7Hrh3hLcmC3s3VQMHKC68AcqgPYPx7sEcz2jiVX3FLWgfkMmBHHTqqCCUpaD6de6MufWKkHyvzRkMd4D",
  "key16": "2psnvVdaAKx8zGU91MSfCkjUJR2H4bzmhqYjpxeQE1WsX3ue9w1JsqLP5o4UhYDX33FTrCrFgLYkXrGeiRtRjeHa",
  "key17": "Co9ZDEmNwpy7ySxh1LmMnPW2b7tVdR1GxoWu8TC7F2hrk9SoWGyckn7MCWRZdbTsNUBEre22Wa23LY9JxkGVGJ7",
  "key18": "2iwATHMgFb2DfGEp7DsstfYvyfgmncEpYEXFyb1HPnrHFU2fkdELbduFngUtHdn52ri3uEvmMCF6EHk5KR714jZ8",
  "key19": "2Crus4pbAoHtHivw6ocjp18soGez5ZCsEwCp5pJ8ghKrNVEY9x29tkKAonNYSEveg8vH5oRDddCaETTUbt4X6W9T",
  "key20": "kjWdPAguqGpEJggmA7sZMdaHLMjBUWm4JdR5X8JrcVsFEgMTbP29SMEcXZanXD5FnasVGtmbf99sZ6RwVNfEkc6",
  "key21": "SEipgK5tx9KeLqhRM1kgkJCY2FRkZG8JqBzu5XxVgvoZh2NuwqzJz3pfze7yncfHUNsSd429rG76aeCr488uHET",
  "key22": "34NJ2hkjKPyQTh3yfJ6DqN7V6sAqfaP33NZkRT7CtmPqrV4gCaFKxfzSmX2w3PSJLFGXxYeGf5AaoRhFJiypKTgN",
  "key23": "5RYB3bQcgZQcLtpiuJpnw1KvV6kYehNVBfWa1aVevS8b3e2GxQy11Smi1ngE6B8XWNQSL8STCjkAwE4N1zip2gbp",
  "key24": "4DGE1xP3eZL3djWRMJGY2pSisqNerw2qcuFPEoDi5pCW4TM6WtrxnQqeYQoLnFr8EaCiYA8N4f3ci9PqBEw54rDX",
  "key25": "2ceZgZoQqo9gkLxQQSkdov248TbWWnKeyQ8tZp3voBsm97CLfkBzgzG6C5EVCdcMoecsLy2Gt1v9bxXgTGJte3VM",
  "key26": "2LkLXzwVqJLp5wQx91fM6RN2XriH6LemEo3u6Y56udtir4kMFipJh9cvVeP7eK6Jby5TM24kBQ1yKtmCTbmG1CUY",
  "key27": "2riyevphw3SwaeykhgU5frPGhdhCEjjdpVum9fvsytSSVeHEzV1CLsuVKkpFGMQhScUhChuYW4rcwdBimqwLcBWV",
  "key28": "5ymuNRFc7cpfWcyiDf4TqPeqBwv7x9UE2554zrmf8jjZyjNMgqsqr2feFfuRhWe2rUge8g7U5q3ed52dC3oUUgSz",
  "key29": "4HurYGaMgPBboN9aDe1VrL8ueJDsMLgrYohgFbVSocc7SATFsBrDLn7CfvmbFmxYJQSbPnRHwmsqdhV7evrNpUNp",
  "key30": "2EjuabTTWgsCvA6KZ6sHDYgTmt81DF2nFNyeeiF5TsZiaC2zMnzCxEVa6vCJLJZww4SQcpYyoJEaTTAGBrA3WDRd",
  "key31": "4pPhgNbnDLXWb4ihBxuWCXmechh1XB1EkPQxvnJAiEG1cgyS4y9B9maQdKcU7aspTsQ7fcWqaKfaoY2bGgzR9yQd",
  "key32": "5rnJixgArM9FmhjSmEtWGdMaDy15JMos1gofECBd1XLszd8wC5mLp9FrB3aJ6RTxZ5SGmvirfKBKYewGy9qi28Gu",
  "key33": "49mtdhUeiqSdhY5jWM33MVQdMvrK1EqiEdpdNRXr5E7Cd3Xt7NG7ppM3XvWnjqnuiz4vDuNz7eJ6E7oLWUYFbXmr",
  "key34": "5TQKgxTbeyWrk7KacS21GAnyddoS7YrRckN6vmBULpPgYb8g5xSz9SVRp6gqBjX22LXJp9FgNSCV7fCXMB6dURGF",
  "key35": "4FykYvn7GCiKhYkYrGn2VW1b43ui8C2XDv2P5MPGz6GKCtz8Gq7AhEUinaJS5rrnfMyu3Dihvp6TWaoHMReTvmm1",
  "key36": "3A84fzJtvLf5PbMn1LLtTtrwvPGXRhs64LcTsUwSVGiKiT6kmBYuj93LJrrQz3XE7LrTMJxBb2vRN7QrGTXYUdXj",
  "key37": "2dvdJGdLvrS893WgPxBNGaPmtEBxFGe5XYFc69cV6cqhGAuV8xBbrGugnZdzpSFY7tsHYVuPwhrU3pp7pJoTzoWU",
  "key38": "5zAiryR6YUNgui5S6WhJbd6RNQzY3bcxCTqgq3nCuRa2yyAYPNMjfnFiSLug4H2RXAY3aYGHL62H23gSETEbBJ5z",
  "key39": "5KFyqPadfRjCDsvoAEjZsDbgv3PDJuRbUCqDjHA9JrNG6GqEQpZrRXuqPtjvwHgMHhua1hiW127dugbBuREg8vxG",
  "key40": "4xpVTCTwsdv1sKtJvQHzagNz6dYaWNJ28DDvnYSnTk8nka6K24eDXbbypKUfpZwzzUJmXWe2RaujzHCJhkjST8nb",
  "key41": "4W2SDLr4F9JaV2tz5bsxVM73BeqjzmPgfe77FNMxFczcLPPrBjbuEDa17RnmaNhSCcQ8p1U7mPCvhtavNSCC7tLu"
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
