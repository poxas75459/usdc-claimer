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
    "5RtLvnbDdB8im1zdorMdkKHNUujbRkSYaxUedqngjRuwABx2RxM9J2Ues2mbRZMkgY631Q92SsLWCgupu3FrkpeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJXhSc7WTMifENf77VgvXYBJJPRcSHtJbUkiE8z1SFB4SZn4ZaQeF7fs1MVLLNqRH2DYaaFq5y91GMzewGxazLc",
  "key1": "2VNCKn24R8cxgtaqsvoVEvkf17jyMNtk5ZqLyjFH3GBZqzQxPfVzGh1VHd5CqZ9Y8uLL5o2gCXfWghRrhStArJBs",
  "key2": "N1cdnwdjdxxc6XeeruYAdjM4gA5r2JKR68DQyTikrUPvZAsMDquGw5syZqkyt6UkrDvtYLzQooNM4PsYh83sCjf",
  "key3": "3BqUtvSe2ghnNEPgLYuxUzqxAzF2f9oWgjDQn3cy2tNcwEpyxpKJCUSAqCySp3rUSjxyNzwudtjMYMCAbczJmqTa",
  "key4": "5rvoHrxwh8tTDFbC7ak8st81hV9ZtwusEGATcQj3vnJPRQ3uTCwvKptTXDAJH6zag5TeuoefB5BLvZB6pVUGfixy",
  "key5": "4DKbYpKG1CQiRQWbHJqsqV2DGAvfrkDVXkDjrX5yKPbpa6JtVYkDTKZHHRvdriX118FJeysTzN2r4spk9DoVXawU",
  "key6": "2zULm1MFDVK638A1Ba3fTchvyFfDDj7zzBy3RGgs369Gp1koDHDFEKp9UzetAtGV1YB73eyFaCizLZaNEH4Mf7C4",
  "key7": "65JUjEdZLdjMdUTNTxJ1k4BWj5e2PYjCgPevu9vPv8Wnhhps4QaVefo4PTKgmzqmHTVf1YFe7Vnwa1USmBEwN2gr",
  "key8": "2Q7VEhdD6HpMKVi2E5s7n4TkJPDLQf44YJcKzXRjcdquDpVjYD1pi55mRaXDthsNbU8r8mt9xoK7WsNCtNm4VAF1",
  "key9": "2m2cfpSXDcJtviojqfqSM9bpozyubvvCZ8RCV3mQ9KDsUwFPUgKRRrutUVbVmuRZuKLsd9ZV3C7djP6chg7f5GXx",
  "key10": "3rqZtDYhjryKcGEt8azUrmmgD64p1GmokEp8A6hMpSsXvfo4ncG22USiy8DteAcHLkJ8fLRGJXYe6KsqXrKxRTfQ",
  "key11": "5sQdnpV9c4rkaoHrn8DahNosGFbYDdaTSBLvNg9AgmtUv5vkRgC3u1QwReaKTCbKJkZt9W6pVFNtHSjLJraSBeA8",
  "key12": "5Pmd3Wvw3pSVdb2tbDz3ZC2fwS5wu3JN9J1AyjpFvtKjeHT9aymv2QV4MmKg3KjGjpMShuLxBRHDBivK5kmySwsM",
  "key13": "ByS9az7485713FGyznowHfzpBM1BELVT3HWbjZ2EU3sXHVpznXAQZTpWX2EbWZfJbPKq6xJsapT5d2sttqAxWwY",
  "key14": "3ph6wB9HXZvMwzfphuEthtXV8Hm3sumwrYqA8SZVEnJVnHTeFLpP8qodnWS69AoQuuY36MFq8XULu7wJfNGtdGeb",
  "key15": "A5km6TK9hN6U8fC2Q6dyvS3GjV83L25C6LGYxyZH7oA8zHA4xuGP4quTc1KVRVdvsNtnWM5Ue98q1Xu4Ki8UHPL",
  "key16": "58LtPtGUEpVP77ipMSB3n9brQH3tBgAczXikycSg6KatTnCpxLpvzdp6VBTKQ3jG9JgyJjTsybyrXvMfBKKxwvEm",
  "key17": "5EdJgLqVJnCFJnANvyr6ZAiTattXKkXxgUU5aEUpidqcRmwPpdWELTxxEvme6oP3pcUV5E4Q1mxCpQuyewofN2z9",
  "key18": "463fAfxmpZP4d7iQbpkMk8r2pbaVm3C6JmJAqRMoTKXiXYFdNcqaebvx7U2cEVom71rTbXhiDe8tyNBsDKSJ4tka",
  "key19": "3h7QKtnyuuVELbfUd3icZQNPqYpQNHTV1yVwgwq4zKR3XiZzKWydt2nkwkyZLdSyNnfamYD9uC1DPxM2ewUX7yp5",
  "key20": "21TyvCUFRwPzpLcyyhqjndAofx1w91ubtW2F5s8gcEFDJX2vjZihZ6FVHtB2G14QjjGcGYrat3Dj7pC3PUNCA9BJ",
  "key21": "5i4tFrWNG5gdxoWEbJqxjBELr8U63R9WiGCT5qW5US7BUfNeA1bk8BMwtPuG2eo2pkX6g7Aog6ybjyZaLWQZ877V",
  "key22": "5FrBExk8NRBrJ8g3no4Rn62kNoPkgkrM4JbSaHgR9FePiR79vxtnh2LFC4tRumMx7V4YrNpJNXd8yyhBzgrEwuFk",
  "key23": "48noNNQESPM6CG8QjKMyTR4Q33b3Bug5nTFdJV43UTTVtBH9vsRBC5av5UPBYwPwzcY9QoJndqfCDLExfymVTiAD",
  "key24": "3rYJvWonsric3jkUNZXcnHFts5N7uepA1DzYQ6UaQNLVHYk3ToVddTdQgncswEVryYLR6zaJ9aKM9e4FaLsvc18w",
  "key25": "2cxfzcQjYQaNJFGBrohXiFspHMkQTwj6rX27kvyr1KGtVjqs5o5Sa9cYc3zKraayNuAaKquLxA8HYZRKTq8xWpev",
  "key26": "2Mzt2VgPcmhxhwUMdqp7fRuhDhLy5ZjGWSnYdKDo1dg5U5pJs3e6anQuGbCBTSr6RtAUnpbaEaf6FdCoP2uS4j6w",
  "key27": "3fgwrvdfkURJ2CsDinCufLkGezNNwcRE2NdJXSWpNHdo98mXPChjCBPzafsc2E8XuRSQcS8DG7dyNCHGjmYCFkoX",
  "key28": "3uMehAkdUrN2SJF3emysXzhZUW1pNgtHSadsAnJfGRLw7xs9orZZXzwYcwW8GeG7jHCBQBJKVbCsayudBr4MWcsT",
  "key29": "3UCsvPkEmaBZPbi1miDhj8xSUyxmeCVuBPTjtncwGsjWCyFSF6cEroaQkN1DmNTToTWBtRUKs4vTZ6ybfn4W2QTz",
  "key30": "2SR6ept5cTufiTLUrsbxs7bUUkqS4d6cqYAStrfSWeYDsHekp8CJG4ZrUq7TivKeQNSMU26dEuwCMLdWDn2grqML",
  "key31": "Hpvvx8ieTvEmcyrqCr8oJDFEFLawSURerJJj64yAP7m8h7aBKqeLQugumNMa18yQwkJp3pmAXvY5i9ymLEtAjQ7",
  "key32": "5vaELanscNNscVGrtwuqvd6qMBmoMXhW8F3a85oE6ssMgSvnL4MShMutG7dEdYMURDzbzmM4hVJLgF4PvNFZ6pgv",
  "key33": "Hzc9mMN9RepRfDYqwHQz3fCLx5zeudaUYZdzMEt94wkAJ6iaGKiZGMwSTngEFKfonfaY3Jxr4sxsPu2TcLXqNcm",
  "key34": "3e9DJ9iMobTuF9tzH9KWfB8DNbXMSSxybdn9MQymKLz7HdMFiWcyN668XxHX5rPfQiPvXfGU9NHjDxqb2u6V53XK",
  "key35": "cFeztwqeA4S1utPQRJDidVAufYyXcVJDKeYvwfBPHdDg1xn1md2QhHSpEikXiNzT4j3TnRSNPLFcWgAkZZmS7Qm",
  "key36": "4RWvhfVTTYUSD1Yz4KrKAuPwZ74RtCfextfaFGgHgjpQLKxpDwywK6L2UjMLVQZvneT5mJPgz6hBKjQ831knz9s2",
  "key37": "5MkHHTLXydBYaHgxQZwrdQwtpo85un9vVpHgJq27Dr6rcMZS3pbe6KUynuQAHzCAcvELXaisB37omd8yfi7bQBp3",
  "key38": "JkvmWqzGbASW9cAgmpeBXXVbAkYWND64NT6wbkwoTJPKvobFwnciM4fLG5j5koKBwNP9G3C4yo3BLYSmViUgrtf",
  "key39": "2yJpKKTpWAaS15cx1KazNB5RJDLn2TSQQ7QajxRZwEzq1c46pDwxDQifpFc5NNUhdMJpCy1XTAwePNe9TwJkHkRT",
  "key40": "3hwwWppeiPdaYAbVxfdNN8EVqmMzCQsYjGhZByEwQgHD3rjMubt4Gz2mDCAPKHL4Rp4TJv7v7r8y1SuLpUYj3bcJ",
  "key41": "42oXKMD4SjZKk477A1Q99mr9edDMYZFsoaRafsGshNEiNF7eUgXjcvJJ7Dhj8U4e4GuNN3NG25xVsHFk8oxEfxTK",
  "key42": "2MHBceztpe9cEc8LJ6hPwbNabeeDt64SSniTCxfVbCTwX7L85TveDTauDjPXdYzbZhuYSkgS3ZcQn5NuMDn17qtt",
  "key43": "2rGic8r6u2s6rZHU4LHffnzxcgJwodACmDmCZXiQNV8WpzEDGPHeYfdBHw2dd1HrfBb43P7FK1MGGTro8GMrF9Rh",
  "key44": "3k4hb3uqrDzHUYt8F4cWCdnCWyHPF3XQw6SAnnv6FjqsDCFoiFnN75AkaEmRKCfyLDMmhYpnjNnEXjTnbHJoo2H2",
  "key45": "LxADk8uf9BRadPQDMV8yXib3WJsMxkraqn2VJP3yQmABfrUPC9gjgiZJfvQsWaVpH3nAWDiJXRnTBo2Da3Vs2To",
  "key46": "2EkvnKUfRbXWkWHvzrjZNqUckT8V5tiE5ZsxQsj61horhHHKvz49giwvJ6zdHw82EiN2HFCEiKYSp9QLRBSDxVXM"
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
