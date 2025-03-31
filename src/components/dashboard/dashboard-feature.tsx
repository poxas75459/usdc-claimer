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
    "sqnGttRarQwyEVCSZFHWBr16tnarbBJv4n91XUXfjtC5ZEsM6E2dezxisKVTApjgmo3TqfHxDKHMNd1WhZiNZ6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dgcUAWaQBRvYWm8fLsrULeR9SNvWTjc2HEoW8krnRBcp8UgeKwFbgNCr7mzvZ1YonLGP8G3w5Ef7huyhkMrM119",
  "key1": "3LHVeH6Knk5GCXsZpzqN8pdygV6tJ23HtmgDXAmMxSpUAk3Hc7yR2GDyq47p7ACWH7z5vAqcnvsM9onaHyF25DvA",
  "key2": "5QfvihtS36c8vUifeFar9ojuWxFJFCy2diqf1eRC1KyST1LyFdMg2nLZA44YPccoC7DEDmjYuW2TgHBg5adZv1cZ",
  "key3": "2iRk7stU6ebcaZa2Jr8b8W1mLckp2dsPTYMruq6RYiswm94RRw4LdYkokeFy5BZkAaWBz7kT8HTvvxUean6FjqRU",
  "key4": "5ayN8atLRs4cQij1Wykks5wHohiqU1u4tH1onVjCFwqwiX59spN8KxZWKgWup8rtkKnTVQ5fUAk2ZAhcoxigkiq5",
  "key5": "5Cw4e4bB6FHVVYXkRFcPM1WxFPmX1iX7TMCBsw5cJ9sP588CeXSDhTY1cKJ1KsqnshNbHsmDiwXLqjLCBW9ryhuy",
  "key6": "5ZR34sn3xPqCXxyaCcATn8zPanyi6Vsw6TLUXcxFZhj5N3zRX6BA9YujKyYAQo97EXz7WCsMTmMjxDWWCkEr1qgQ",
  "key7": "3fUsBab2EkdtjeMRpHnoTeRxTxPWcbtPW7cmcDzGfGFYoAbPTSGfWntp5esYHsUBF5G62dbNSvTDm6ibXfiMCUji",
  "key8": "5Tfd4HkTE7kw5x4hjuyE62zZo9fgHf87GgRasCuJNfwdfthyG47ssvX384BXU2SXPibBLXePpgqfiRkgNiD1qV1s",
  "key9": "4hf6oqDGhwUsorw5zU1R4cFAfYH2GndJXmZjpkw5nK93qeAHttq1eyNU9UCKg2TrpYWSPYDQqD9iYxorhPgSGh1m",
  "key10": "3yX2yzxYvca1w2oDxpJZ41DKn7YXgFfi7bDtZTgDCfMQPMwd4nAD1VmC9Qz9sgno2sLRSpHa7p9Zm5Pa77rxbReX",
  "key11": "2sSFNgExgG1kosDLXzQHc5z2AVvjEPXUBwtdQ1xvo4JR5QUtMMsEF1fRTyx9BgzupXdCWuukWjVswcRShjxiDdWZ",
  "key12": "2fBtWcUTHYfupMz2ULU2j5PZ7pGJVeQhdUoHtjwwBkFsdduX5wj28Y9At1dCQYrc1FYWX8wVgQ86NpkDs2wDEeTG",
  "key13": "5oEc9aN5cM3TuQxQ9yE2TrztELkY8mQC4hjncwnxa13xRGcedDj6rxtmvJMkYTf1nRXnzwjGKLmd6tjwUS3o1TU",
  "key14": "3z3HES3jrKhyBovqpFHLFx5CbasNY4GyfFT4cnrp8nP1LhbHaU7oUzTgtWtVHmz5ykVQ6NTANf49k9jbQkbvrmQ3",
  "key15": "2NtzwWs4YkHq9D6NkH74hr28HGqd1GtAyojm3pDECjyuJazuf4m8b2F6mwwWfbp4EmPwZoi1i386Y8M4CFb6ESdy",
  "key16": "39S46uncHmPoRvqTvr5NrZBbXqgG1ZSYbM9229aggvsZTyYgRKwYRSFiXmFJGRikaCSc9GcxkCmYzqNzD7NviMuy",
  "key17": "YFvcRypE9y2Ghb9TEbq8dWhdvCfWpeQovSe6R9uywNpBEHNYtC2cAxJJuj92P3uKxKg7WVMucSQ66ChYkcvrPa2",
  "key18": "5w2nywec9iosUDuwznkHTwVkiN1A62v7r1h7mzgRqG2cC1hj5D2CqjNh2AjgYWYzCPdACbAmkXr3LMeJnAUhCzyd",
  "key19": "4anQoescYbVjMY87DS5Dfig7vF4MJdCcnPNuMGS6346hBM6Pmsg6wKKVAws3z9gym9wyre74e16CWWWGFsKGuhXN",
  "key20": "5bXpWXrV5sKZLYqb3zkVu47aH4SNo7a7MK8NA1UmeNakgMKyj2aknfZ7zGuJur14dFBDcdhKPo5aYNW2L2vnA2As",
  "key21": "Wnzx5LHevHLb5HJ3NNwJxkmkf8ticYgtp6mgag2SFTFYkUSLHDedgo6iHUT4CQfAmDRMjsvGh5aYBRDZ5bMF4v1",
  "key22": "5cYZfE4zb1Qc3f3GvpAo5weaBQV8x4DS6gW8zKEDAgxHCE98FVVo58G6VpPMwaxPixBA6CGFGZTcKqFLdt9kDiUn",
  "key23": "44vpbfM8YjooKrwD4zmn7jXCEyvhePHZbhCUPiuUrgEME7rFNsvFERNceFYj4AVyXkBE6EskbKZCifgyArBeJyZ7",
  "key24": "ZXSmFXrQhi8sGFMqLaFdayqr5AJYnn6yqeq5LszuNLF9jyXWwd2VYu7mhVX5UZwCcNdYhHywmwR6UmTpr6zeSfG",
  "key25": "4QbWRHrjAWwsJ4fVUousUkY5hyS62EzBWqRwaCgbCyc5araGaDMVEcr91LxLWk9DJavTWAbgXqsNonWJHBGPpVN7",
  "key26": "t39pjH7hD7jWGnpUxQC71vzDBJKYJb2nfuvKAdSXFGAJ2wnPDtaZQi3HPGQmLTzfErvhABN9bxWSxYHDxzKhnah",
  "key27": "5SdDhWrBQ4y3Pr6Krv3wmmM3RoPQn7Pqspz5QcaQhYdudDWbgDcfeq87sKWzJaUEeRiyM1aAWpgVoNTsBtCfhAxE",
  "key28": "3EyyW37rViNWxVJZVVmHYykEhiqVAXhASVi9B9DWPej9ZKPLSPaMo6v8TyQz6AzvVP9rJsS4DNKXF7DJdf8kGMPt",
  "key29": "56CrTSSQaUAKszXpYzFsYKWgHfoXqnGJBTaSaV7XBM2oDqqCfDer8rMEfSDWLp52ooJfxojFMVeP5rnJXmnM9eKm",
  "key30": "MDDv3Y5PEZHyNFHFpAvrN1PN8wvytLCwskWa8XJk9gAJtvZ1dsoUBeS7J2PK3eDzSEuVT2hi19g1G2ZE9J8D76S",
  "key31": "2xmdD2MQx7DHNpuvcuaZ5FxKdJRw7oX6uwJvS8REm9wQbgZFyPT9At4cLDz9PYoXW3ZjiHnQtJdSR3pah3hm2rLX",
  "key32": "PiatLAMcSoNyQwQa8V5TTi6hvzAFDwFcLeqiDE6cUynAttNwVHAP8ztF6QNPonSsNbx2LUxNoUnHMXFC1yXA1hN",
  "key33": "HLzHjFZWui1yNQNiGo5WrRzC13cx1PdmBxEUkrZER6Qn9W47Fn9ngboYFhTyJma5ovkN3yUDcf25dsVUnc2efcv",
  "key34": "4BC2EkvhZVCptkaVAAfbYVmiBMQ3bCWJRMdH38jKS3TQBKCKucT14jiTExCgKLDMJsHtDRZqiySwbRRGqX2wE7w9",
  "key35": "2AEE67VuXE3Gdp5JWusQCx3mmWMNffJrorrLLYbHcSwYL871nt2VqtKaX5R7ZFGYTkPMqwMKkEYeHx5JSGQmotDm",
  "key36": "3pmU11sq7SiUJQ8iPaYLpMNoZm3tVNJctUTMD8FV63SyU2v9ZW2xJbgWrNHqKky3WtqTq7ZutTWYewLPJR43USMm",
  "key37": "2a1XJsLwZvT9fRHuHrmZs6ngWetvzM4B5Tt5PrspbxHuTE79no1pLDs1sJqGMxGRoRhHnYK424RDLbhhCJnsd6wD",
  "key38": "5EKfJbRtoZ8StmfVRWdP9pTzsU1Nmmc6yaf3giAcgx9e16chCENuunKf2VDRaNCayVUmncbY4XCJPjnsAw8R7iCc",
  "key39": "57sYsZfd4mcKRmzWToJs96CqMSuzDqgQEaoy4CrMZsca5uEJyUvZk5RLD9T8XKpq281GxidYes2otjc1hV2pihAm",
  "key40": "2hKm8gmDQEbGBVWsx33PNUuKzkpzuaeAqM48iywmDzzpLfREtv6GbU3BpNiWVDBs392K7Bo1x7pTTVa3UnuoaANG",
  "key41": "4tzfzacyVHHpbkyQyhPdQm6WyZPUYGmf2FWWjw4gr4Ln16e81xP8EreUcxw6Lqmoj5MyUHdn7jtwpVpWNv8jTEmq",
  "key42": "5KGpAKKdbs4A1KGhbuJ5AQnbVa6LMMh9EoV9F5p8UqcntYcqu6u8kzC2MAkTpaCxRSfvLAeaZHnWWDQPhSsodjPo",
  "key43": "4uyQC32D8V1YPN8iLKbsG2xewbwvMoQj4YTt1RjCR2SB5aFPQ5Eo2arkhiDebp57rSg8FqHAbVoFyYC1HhK562Vt",
  "key44": "2Ty6tYCnpWnLeJpAb6GT2H1xePAwEneW6fzE3aphjiY5j87frcJs9EaLJcUEMYpyK5hivK9RiTpxST8ofJK1CRpp",
  "key45": "2SGsU2BojP5H34DB71TvaBSAWuAFw7G5D9Xnns8wWGrUMjEozExxYDK4cSQnsoNrSaZjww8Nks3hp9R4d7o61hHe",
  "key46": "2hxxYeba3E4ETh9nsrLBrUT3zXe8f9GStguPNCWmkUCNimbNahWrktfniB6U3AfX9dNfZaW7d6YDpvV61nz7Vicm",
  "key47": "3k9aJfgwsVkabp7zH4RAVN3uzmtzdFYpXaMeVvqM7jkFg88uX7Sv8pLJvssBVpH4hB5MMzC2yMzDzmtPkzH6b1y1"
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
