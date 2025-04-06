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
    "4sWMFuk7aH5KH5RQcWLAGQWyAUrHxaRQZSj5Tv9HjSmEeijdNNkjVeUUSgXD6KjFLu9T6eL4Mcpk2DJA2a61F9Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3RwdtAFARxSeFP26EyvjR81xNw77RdAPJpLwS2VbexLNQGbqG6xvDtSRVXWaijYZQ8CihTDkxw6o4JinZWgRyV",
  "key1": "5hNL2vJsKuAMNz6LMF488Q5RjgW6hWYd5KzqWBtAmA547gDCcNanqzkimH8GHs4xLgSqABBhEhokkjhsNdUWDjgk",
  "key2": "5JRuqvrCFAngRvrLKC3EDLYFfYpK7aUB1nTyGGUXp9fYCtjk7xXRKu8mi3d1iBoLSJ15hyQZ4UL2SYEe2D3E96Zh",
  "key3": "3TsBJyWJe4GAiFa3WZofFR8EAgNZ6iZ7JWkivsHrPzjYXZn72AidtcYW4yWo6XyJV7wUkWKQXFqrUaTc4A6REiB5",
  "key4": "25KLTvnKBEHVKT7LboZhVas19PQUcW1xwzHkNodeYso8SaUAfzwKcMMiDZP7Q1M2rBucBsDtp9APbpAaoh5wFTBJ",
  "key5": "2edNPtXsUXqN2biLnuh4tkNjxYgZ18dhJ3fJvrBRGCKUk7BnHgf6x3SUH6aNVHXfyrzNfwz8C6Ryusy4i1a4Vhf6",
  "key6": "8RnwYpH5aZog7PxkVh89Cf9sJNCcQybQDezTt1Ufzneey6sLENqWo2JUbjLcdvegy42qPvhCJweqPWzKTzgS3CV",
  "key7": "5GZGLGHiDhy1d63TfXNVcc9B9krqz3ZJ65YAsjdAJh5QexTY8YGneGtSV5t2sCddMy7V8wCLXxj6aUVYXjg38gWC",
  "key8": "5FibytyjDDpgexTnFjhd9BHzBTNZ97pnDJqqYvJZuNYZ2vBJsxq6UE6mwGcudjNcxAxbuWECfTkScbENHBojTsWg",
  "key9": "WT4eaqXVsiyK7XgV1ZBBPTdGDpqwcAau1kKcYv63dkKZnxNWzSE3oRN7sBTpekvJ3CUL3AWzCw2HHS5Prp6iJUV",
  "key10": "5rLqVqMNnwT9KRWXJkWxzLjEqQYPN22L9a2UDCrxXMhGLhR2wDUg1XJTK8bTPAF4F3D3VaAfLdQ4EP2q1hWStaWJ",
  "key11": "Jad1CTciyDvEikemiBPGAA2695syw6ZH3bk66uke2Xy1gGkTmitFHXm6TFmCJdEiDA4DVQnQJTeJXTeizpUg1Ds",
  "key12": "2mmNEP51MpjQXtXkBYq5Sz8BfqrF6RgQgoQVsUi1gqSXxwpodKzTS4X9KPeVW34Jwf7Cj6scKNwSG6WHQfH1RWUx",
  "key13": "3EanK1Lr4DmVmQKQvTnA1w7QX26Jm7yRjLMuvqaEbo8wzKp6zi2o46rknifUysiLeQrZg3wGvGmYa39YTcM6RZuu",
  "key14": "i88HQmraSEhX1xjS9uESPscbr48s6WHLwXqKYQAReeGs4siPD2QGfUwBUCzeuzwpzjs5rR9iwBej77e6jGgRa7K",
  "key15": "3RPQDrtc6jsiAewbY7xZWuntCteHUuvKGyBWeEmAiawLHdN5Nenmsc8v257NET2Cm3XqjzYfU6gzQnJA2TxLTynE",
  "key16": "QHrjcpx1w7TTA3sTiWYrWFCouan5QU2gi4ibYCQgEdwhxzSrLbfwxu7MWkGMrAnukEmCyWY5AhUKdCQMXCH8aBn",
  "key17": "3nt7NjM3Uy49hgk4kFiHg9LZG2mdZDnr3xojK5WgiAfAPtfDdRFNhEafRVvQBUQnnzeYQimhcwCwpAuNkz5Tgsjf",
  "key18": "5Y2xiodgS9GWGz2W7bKp3Z7ucJBDfT59QuCv5CCXGw4PVdqCUzymZCddw27gnmHz7om5ncs7kxYBwLhXNpjYCAk3",
  "key19": "55tKY1AZgzxqSK2jSS2maJERXBBPAasP43pynhMzx53onp2QZwNirQQcCnn77ij1YMMNV9tVb2M459esLi9DPPtd",
  "key20": "2fziY1EAMG2xwYh8cbq1ASerq5mmJJKh2EHTFTe2f2YJf9AwREfSJjFSLeEjLLj7z3TBeLqMGP77rdmvcNaN34ry",
  "key21": "41g7XpLF8DbcAJWyCUhKsNT5fSGNE5sg4DVbkJbz8VpP5DVL3mudk17B6CJg99x19qzzS17txk7zWBd8f8aWKCHY",
  "key22": "23bnoHTDkq8DjaMKajqAYJNP9MeqdKJqPsrvwAqcgwmYDrUhtH9jwnsPUYycSbyHo9EKeAri37eTgppWMh2ZJpW8",
  "key23": "5TgozTB6CF68P685nFNf7tf3kaYGevfA23mE3CcvoYX883XhnuhcLvrsetgZ6u9WyeDmf5ydwNdSerhWzpMDML2M",
  "key24": "2vwfAkYhC45TM9YCR6XNGsSWSn8jmXgtrgYruHimLJwydAo5bxbcGoXSzUr2ZghNGcWnZDwbKycYG5YNFYRf715N",
  "key25": "465Cxw7EQurdXsZQm7XJ9TNSaAbUNJ9aMFxnytwXBKmtCs4Ugc9ZETjsfuEoYp7pWCzwcu81T12zaMjgUju7WGYD",
  "key26": "2i4PttVfENPYW35mEat8uyaFNavpcviS47E8cKwiLq85iYEtKpQGUDxEDioyL2JTHYep3sankk7w1KttbovRC56N",
  "key27": "kVC1bCNvawjdAFRyZzhs1CXpXDdhWHF3y8kP1RiMvSsjfaaV9jPaxRev2xqa6rKbmQHT4gDZUrtw5Jc5kwCSMDY",
  "key28": "3RN99P6qs3b3v8SrjbzDKrwDXaW2nswJk39PWbRLMqo2AtbiXoqe8wmfDGfTNaqSDaHHm8jCrp7m7KayhYm41RtA",
  "key29": "5a9mDh8axBSe2tjtLeUFc28jSM1TaxvVZG6fAWKxfFdEw1q225cDW9q9rRvU7KYe2KwUnW75GQhFvqyWQY6FpBNU",
  "key30": "3eg6ozgSbYHLMmHnyEta2kAKS9QptcuLx7ioBsrjJGnBW7W5WpvN7GMk9KPrMLoSDNd7orxJRy5VdonauDrmFzvs",
  "key31": "WF1bNEMoLDWaVrnTXT7Yp9vEh9S1X12WAe21ba49tCa1YGwb81Y2sUMQR3w9qQP2SGws8V8LJuA24dcqfWB4F3o",
  "key32": "3TrGsF8eZ6UbAS29nuqHdGtQskSToxpXmJzS7RfPEARUPdCLdyMh5hsS61pBErPNQrVjq4nqXsiyVCPFwYnBWiov",
  "key33": "3UKijqt8dz5fLAwgbJn5sp7SqDUWHxkCKtknkgVq3NxadhCNJxJtEscrHiUyV18fmRFnzq3CKLCEba3hU59e1RSJ",
  "key34": "2dA2VPKUj61QHK6JV7kXdpUbjKUZQuoDMPV15baFsRxRXM6hCwQEpqZr2fmkF7P7YGjCCxVDFYuTEH1ujTSDt9uw",
  "key35": "22SCSEH1t3ZyojRbrGedfgJ4k5A4HtuHfDM7B58dxQZKHfE1DQBbDAzsr3drFiuo1UX8iW5ANu65ta7vcp1Pi9x2",
  "key36": "46H3d33ekZN5faM4bCGX4tiLdRmAbA2nmrDuYKTqv96Y586LMqnm1gtxtY2yk2uVdLCw6YzeYHAWSsvMgrtZziX9",
  "key37": "27kgrMkVU7av42bTF937i2dvEHsoNhWmGxRzeqRRedCPyW3zuR98pUPW8tDMVRBi8nKghTkdhMnjNhGmow8CBtqb",
  "key38": "2TmWYs9u5uUGQkdPyMRetY1qX96n9QWkikAJhKLxyYTsdJnVAG1WxgwvUAEYfsN3ccy1M9btZe6qQTLaznL1SdyL",
  "key39": "5pHScaYg3vCERcv2aHmoQGRpDVSgC2K4mhAXN4NEUuArfqvzRSjBJMaaKMBos8etLoaSYFTWQodPL6pqmE824yXv",
  "key40": "S3ru14keToFAowXoU2hhy9nFWmxnLg9UWvAXBNWgwcSzgM3LkimYKZkFPYhWpNL6P6VKt3oiFncbticnFDdVy6C",
  "key41": "UERU1fwk6wzmzZx7Z35dJP3vfHQX7ftNqYQfmLKL4VHRpYrPFtMdXzmx9wGTqcfDMbkfUkqvJBrUPP2hRv6irZ8",
  "key42": "4BaRSwebk8wsRhXcDwoQFzu2jS5XpewPj8h2rwsCN6ZrGNdNP5XTRNxLA3CWnqUc78STh4xGHYsbtosfdtRCN6XX",
  "key43": "52muWZ9h17e3dBQ3G1dZdXDHhTcPShNdyYQYeyRxdCWhvjDpnPZZqwLSXr5raCKmai4bFWaMso3onnBTPGJvMjHV",
  "key44": "65ETeWorg2qT7yiGs3v1hXP3jCtW5BDrvCP9PvMRHrZW7tbS4SSE8PoDYcFNCmDFMk1nwh2tVetCNntDRNzSgTJS",
  "key45": "25SnytavfbR7NMCABsttcwTpWn8XWYweWhbZN5yjtHvEH6e3svLUspgsQz5WzK3BkNgbUdo6GLTywCXE96jXrzSe",
  "key46": "4vqnJvVxfe6tzEW6yPvYonHNQdB4vFprDJtxGUfQz4zn1ef44hkGzKjYKZFQUmshwTr5Hx4sZdujAe7pYw9uw2d7"
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
