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
    "4HBbzn3KLUSDe3QvTBW8NSgr5nTS3oTBCTJXQSpeCwVqLeztzfUZB4i4CH82X1NUYPPkCzvy422CFuySkK7FGxjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yALXRCfncKwbk8QNtacJBmQyreSAKYPEoseX6hYjkQm5L6vZd1Ap2HRrT3tggC71DfnbA3wruAnHTM9VXncxWbm",
  "key1": "4jof6sKCiqSgLEJ2dHgtnsQNV5Kq5MMJfVJNVBNvHrXEVbKNjDefMPzGQfz4vvbQEWEeUmuELp54SxgZUX4JixBn",
  "key2": "3gYF72g14ScRAqv9Bpm4CxgE6UHV7RZAoChiQ9Gt1bMeCnRuKgFJKgRMSVqqGgyZi2goLM4ng2NKoXDynks3aY4F",
  "key3": "5sVzobokh5mbodpbE6TKK9GEWuy5jqio7GwexZU9KRtxhJ9b2pvXv8HRNENGcgTBMDTCGuezGw82oxfvqAtCzk1F",
  "key4": "24RwjeuSZAsW72WSUPowsGa5UVbdSxodd1YVS9A8Mtmbsp27tZ6Eiw8EFE3Z78uCbAXixUURCRBTVtT5Z9Nizrmz",
  "key5": "2Uk3MVF1oxYTjPQgYPNzcgEeowD3L52MjZozz1JrNmnbRZzLqAQWPozQxSohfZzDzzsa5f7PnbJYTgcMAvaQK3As",
  "key6": "3tr3uGxizMfzxWDHM7feXnfBqdjDKPUPoKSisAW2aWo36Z8JKwB2BXEjfdA4Gq2v1w85Sp6xxp3ksWMC13bKYgNT",
  "key7": "1dJBJT9AKjCkZuGqtUhQV6mphTWsxdM52CzRHutrsB1pc3YWzEj1mTpc8AUz5g6759ecrb3btMjPRYjVyQjwTPB",
  "key8": "5n5FKjwUjdqkPAget8pXMCfh8zpUTnV7RHxUfCZEzsdrXViaYneMHHBAEZbaRo85oruaZXGbXQBpXefRWShGrDbx",
  "key9": "55x9BdXPSJsJs1E9WYeJW2eGZPmKkbho47sxm5QH9Jo7ia7LFze6t45rVbMqFFmF4N8qoDr5MYwXhCz16sXVSxUk",
  "key10": "667N2z5mMUV2dqEdxB7NHgpPUb3YTSNvwbdynrLoVz9HRaRV8JdUKG7VmnKt4saknxxy4PntPDZ7S6tuy6xbshzs",
  "key11": "2Aqzouog8nSuCjWQPVPatuZFYSQHQsaJgkJq4CUaLWX1eE9YLa1c81q5wtFhHrqQuzzcksiY7YYbUWbCiYwDiZaB",
  "key12": "66tW3k3yhbwSoUCNW1uQLT3qUQaNbhvz6yyMRywuFNzuTocWwnxVV3qDMZCzefC4uJPSxGQWcVbwYSQmBpAzUaR3",
  "key13": "4rgHXKaPiCktsrsMTYgWLRj6PQVp4QQLT3XX916Fppg5z5jxMhoP7CoQmkNb9u7JeKV4HV8r7ACVaXA3VjFQz1Tf",
  "key14": "5yPZZgCAvsjFsdgD3rbVXofDy3gTLZr7s45mniUDmu6WB5C1RR8zUPvD2HQXooVopbvpdfxDimMNbwupz9Ez6VUK",
  "key15": "394M3MY6tDCTwYa5VbfWyFQLHQyAtYa6wEddc5CwAcVyvWpXELQ9gMYCUqm2Uq6fAaxXfz2FPyoTSmUnwtLkoSqG",
  "key16": "5zUSMLkPDXStLVUFBuhmGbp79fNcJpRmmFnPa2zfGpEsL7HFHu5xWLvTGCCdzHYzMpCawdUhdC6rEZMmW9Q2Wvce",
  "key17": "5TMSAz5gaqqHdo23KMc3bbtThviLfd4aRQzGJ9ppfUfowFD4MgT5u156c6sw4PmA8QAVyDDfUi3qfAvz6D2Z7r5D",
  "key18": "4zMCFnVZ3EnCa9NZUW8PWaQhXWp1LsPPUQvKiTXvMjYg6vaDX5WwRpH11arnDwjFUHeL5DyfcuRTYWhPZZUq9m6g",
  "key19": "2sibwU1YGkMJ9RgAMsTbPcURdTqSAna1afQcuxZVVG6uXAuPnPTP5rBZaqjgTDv7aZUBozS5SFeTk9Cy5x71jKJ7",
  "key20": "39D5Yn47FTMyHVjHbSLrLw5FDUtYKZZMWagZPEbPx1zY8st7CyrNPAmmDsgqbUxMGhuBnWDUmwuqvKpyHpfjJqgo",
  "key21": "4rgZPRGphsV4aYEFo1KvcT26iKJ5LAhduKu2kjo84iBPYpmbSr7aQMTyF7ZMAwEq6Vy7DQQyNKPVwzAv93JCNEhe",
  "key22": "2CRPKHW64ZXHdRik9od2ex7MhgBKT7gbvjRPfdf1cCZmzuJuD4M8nZnaZvCWfAhmaBwTH3kPbNUakZ6iChdu85Cx",
  "key23": "4WNzrGJR6zKfNzjaudWSpp6irMtJp7ApDDFvGWGmr7toPSPgeAA83nnm4A4xDRviUxUufj8njRj9Mw3kvWbGuj8Z",
  "key24": "514SPoMDSHJkmzsVLJ9ydBkR2gWX2ioieNezWb6JByTx8FzaEzbPt3kKisZUhJUPF15dc6b8xcUd6dAEx2mdbHMT",
  "key25": "3jRdSmsY6PWNjx4ukGf8Qe7ZyEciHXZS9rLL47bAGx2z6Jgb6hccGPuY2TU6A7uXiYupv4hQVjYy89MX4GSLwRgs",
  "key26": "5RrN26MafdVc1eCrjnmge5TmUVe4P8zA27kFNnEHA5Zhd7WNJ2BV1Y76qwDSuWZEVyy17bEd7w36TkhffkJT426s",
  "key27": "2tDgSaNTkj7sv68cDW4qRfdnhsD3erxT5roS2QJASKeGMRPWoBY7enzgLFt7fzgjNFEb38XpRSnRx9jVnvmr5P6e",
  "key28": "Ysu6WRh29ZvazkFfy2s5WPZ7Xz3dQDzrZSFhhfEAPM95rHUsyQfGksbziRyuzQcsvHCdAKaGtiEoXvJFkBe9APG",
  "key29": "2Lia5Ei26ym6A9jbxxbVWGLnFtX3ETnmvTFqLLEP6biZCxaKi2ZLpfWaCFjm8DW5dyG6woeArQ868wpsdC2pi3Za",
  "key30": "24UN6K9dJQqEQrypcrJhuydnXzLop79JLbBqp9FNyrLSE7tXs6ipAXsQDHKG8nXZg8kgX9RtUpiywQaB9pWvhWt1",
  "key31": "CLetxCecpM5gQ2rA12ythutiGK6MLsoyt8QrWaFxg9bA8oCdfvfrfMTYiAT1L4S4zcWrEQ1K17UWA78M2fTYD8i",
  "key32": "TQQoTcASaEXpejxrR7e8t2gNrPCkrcHzzfaDHGFo9eTvRoFqB2LE6UwpT1b83YUD8a9oiiXDx9MBq3wP5DeRZSz",
  "key33": "5kpftPS4hbypiHiEyqAE2oCbYFBGF6NgsWDjyBrnrr8p1FGLZa7fbsXffW1A4rHtPMyfYmf5wynthCi5hU2446Gc",
  "key34": "3socdUryNkNGwjCBffatc3nmmtjZeZ1JXMJSW6QbHsNrwXx8MGi483oKX48JYwGq9SJ9X6tDWtMBJQXwRLd52r2L",
  "key35": "2jHjzbjXHh3CEVHmEwUKeDVAiDY63dTXvFw9upznBgBmN4Yv7cBos3EVP8mpQj7sgpGWdR71WnoTdzmKjzy8Jgpm"
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
