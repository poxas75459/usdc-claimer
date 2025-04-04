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
    "2ZuLXbqoNuUN6wk9ehaozCbsrYTyTmEr9ib4CACzqs2mJYJJoQHQH5FGCR4z8c2MptUvQYbXQSqJU1rbLSSBr94R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59CSutiSCpvveyxc9mXtQmXG6iY6QpzWc4miWjk29DRPeT6psTzBXaZDUgFh7TGwpDSokt2WMvk5GJrtELM81Pr6",
  "key1": "2sdSmxfYcmHqgZrLHRDCbiPHMuaXpxBRS4uLiHborm7SLBcRVodx24cMjdBDF8UCN3TsP8Z2yTBNZ5maae7PHGHJ",
  "key2": "5NbhDJ1R31Q15NU2btBuPrzeoy3Hpaxip4i5BJr9qL1713yJ1dqStEhb7voXgrsBfXBWZgxxS3Y5kWMgGoseXjnj",
  "key3": "4mGE1oEphQeVhexzygMkG3SDmDCEZSoM9dYMuMAstJBoJDRxdHLHHVsrxXhVBZhVjgmmrEkkRYP1LUEaK8SHVNde",
  "key4": "4K8nbDma7taPSXwrxTxNkEqY2nioizoiVTTt84NNvrnX4J6T2FyJS27qQ7Fea31tF412sHZ1cq22GnAGPQLAF5dT",
  "key5": "56J9k2mEmM8jn6YtZv4C2aEq9wJFZ15Ztjjw5qbQUseU34J2P2HajfqZMDND5K5TvSPB3DCCcZREoRr1XtrbkzhH",
  "key6": "2XgsuiDtuBy1PRUHN9mRTZKSSjp2nCKSye3PdNcLk9yDwr2zNhHckpssKKsEN7r49biCGNJkzUzcoxf4NfFkpxhv",
  "key7": "3pFj5ostWb3TXzqzsATVvwTQZoMnkJhQEcNLJ1qebpCUnvJoi7PXManrnDVtmV422VeADtZuEBaVnisXJoyqXCXA",
  "key8": "21BujPxmrgorRuSkV2K2txPMYh5rJEnoYQxGHGvGGCkrXLWA36yF9JSvHyx5nBwvxWP5r19gLF7v9wh9XPxkmgBF",
  "key9": "2RhPsHS7suVGJv5upscWWc1byLRNZwyb3kmZp1KHcyzjDQb7Vr2889b3NFMeBhK9gNiwwrsPAcAVB5G2rEzirFoF",
  "key10": "hLMRwZZteUopFNTd72UMHVJQQnGXnkKapZK1hTMa2s5dyjThm542hUMorKL6kUBBzEevNif1wBHhxQpnFBwTsbk",
  "key11": "2Nwo8RavUJvMA9JKgFrML6NrwMbX62FdF63CRnbg9ar1vf6yTgAHd8NJL6vbpfPrKaczVp9ymA9v9sFuwnXGQXNJ",
  "key12": "xBMNXCdE2fPtNxpNjoqocff8M5DZBEDF7y3FAMHX5BdkGhw7A3a3Q8KECyymZALeD73RvpbnuE6g1CoChKTLZ5k",
  "key13": "3ex7bif8ANgGVeiCVL6ugjrogowm981tohqhXuSJnkmdoApx4ZrTGrtjjU4vQdxb2rhg4Qnb1UfH2i9V6c96uSRL",
  "key14": "5Depb9Hp67c4hhJkKn1Y1nPnqUpkv27jr7x88pV29y9Yv3dw5RFEaSMTPM2DADn9ZwYip2FuCZJPCPjxpaNpX9JJ",
  "key15": "5CWHBssRVd8YLsQsjWPjunyUcrcdAMq484gbASLsHYKmPFR44p36bdN2EJCBqwNCmjj4ad2kZWNh8Qp7Wb7Cdovt",
  "key16": "3J2M51VpTr5GsVzSUvDRwFw8tUZCVtmQoVpkkD5TbzneiyPCUM5Fm5AcC55HGYLAKkv3Jb8BmvihAUSMRWLqJE1m",
  "key17": "K8iiqqvgWSJ47rsNB8AmMAaLoqYUkjbq3zF9hEyU8Kff8ytPtf5JcuLcqLiQ3XNv9dJt5TenXEGTVR6eofzNvA7",
  "key18": "3eDb6YbZz8hTxyK6wXabNbbZGRx8JGo1EoDKDoiymKy9ApYGQ7zvXTKCVYwtmygKJdwPxjroPQmEfbrCVvbZW97C",
  "key19": "5DjBqZw3jaa5gME5DRg5ByHJHLBzF7aUcWeQ1xBv6MSEnriH5evay3pzE8eBTzEQg7mGJ9WSfgYGxnMKCiBx5hkB",
  "key20": "5DGhVe5ezRJu8qWBqHKc939AYyVxgjT6PagmLzr1d3hB119B2LF3xUQwFXQFaM6dbxcSdVj2KWC36GnXUJuDpdM1",
  "key21": "3nYx7ivRVT6JngkVVV6ucNSVQR6EdwBt9XsvFTnLJbXCnuxMFSUwEMe28ZCka2bDcEsuY7q22qmhSJPWCmQWq3EN",
  "key22": "JQn6Wxvbgexi8fE6GjdTMB6M4iBgvQxk25PXTuWPJ3nsJdeDa3KhcNFUk9ADzLEqzR35qYczNT4uNbSWg65yYJf",
  "key23": "21sBrCSJtFSu6jk49nMw7GYKsYPYqt57gL45G1Fzfsc2xKfxVdiUtwpCA9wD5JcxsUSf6y9rdwRhVaR3XyLtnR6o",
  "key24": "5HBNDEEjeKaF5j1ofWsT6vB2R6RmtibbdMiX7AhJzwKihL4jHHnmhqt3Wdbz7KKh7JPqzhS3ripdijwoVPkPzdyt",
  "key25": "1QGWyXVjST4GAyPmdqDCU9F4u1Gr53ZAd8QhSZmSF7Km4GyT78Sz2YVxsW7cFToDVSwenTnFL1yAgoLdFsg8UGS",
  "key26": "iPiBPUKmvKZPsbvRkWFCwpBgBgG6zXDWWSiHuKZfhckR4b7hG1qrijomcEWh8PQuTxAGhwc6Hbi682g9XZt6eXt",
  "key27": "3hu45STFeBmDaLiGoZBibwUYSfvEHWwgktjAsxj5WHpXngKtt9z3SahUwExR3uxcy4KWLVTD51EQWboWDwwMSCNc",
  "key28": "5gUBurFfhFg5HcrwoosZdpEdpRCXVX6BvnWxj1CQaCC9r9fdC4R73xRfLLYpVDN5XBG3Dw98KDkC8tTxfTMCgeMX",
  "key29": "5V13uAVsXpL9MoDQHaFsundkZK454JAub8tz7jkPckE4dnZQiMEANr7SBp1WXxgxaW76TPDstiLDSeEmyZHFFrpT",
  "key30": "4XVAktbSzveL59ZfpE5BpzP3d9H2mmXV8cdV7vRgux4VKFsZd6PGvyHtxUY99SvnP8Fx5117ikbhHP7CfQBZyg9A",
  "key31": "H1XSQSyqyRwEqiodscfF5kqvDeEwfHoXhhC2tsaY5KKnC14sndQtMGXUeu45y1CY7XmNAV2ycmNzKvCedAB34qp",
  "key32": "4rzpWPSdPdcnurqM4VJ9czzMWqZyA7iLGygX74krtwA4XEAccbT1ebpUXnqoQQivwinFK4fxdqMxu8EUSqd5z7cc",
  "key33": "5U8XNpKjtK1iexpohVjscmDAAhaQSD55ajzEDa8iFfPkEwwgBZNzeM4Lnb3VmgnHkMdpfDBXXUqJJhmCKvDi9zyA",
  "key34": "4HRXWUcC4kJwmVbWe4BNDLt7PKC4BtABgBeyymojjuK989FdY1ErmbdZ8fbG4yVZuZFetJDjpZG4tvP56248pg7C",
  "key35": "ZxLWddQGe4bsgBBJeLcvZWqcGaRZae5v9sxzXS15RFefY7CrSM2v3dwAsgmqobNcxfjw6KHMA1aDaeQcxMJZK8d",
  "key36": "5ASgfxQWXyfNsqDCL1n5qkedK8hZzgmUdjiqSYux3KauqUYWrbsjCSTUdND3peMHJoZSYDqenjLJCxFhDYpfkjAS",
  "key37": "3sb7eTJr1HqTEx3J8cyzTNxAkzaWrTHoGBYHzjTKtQceacyUPmAkTSvXBSRJPJe82FR1fBiNwYedeRY7VaJGBJJc",
  "key38": "5u1MJP59tdCTQJkPk5gUrqDaHBsifLoH6G2jqTm2vDzUXHCEfUWCa3w4bSF8MRzuviuVJhs2mYsYeF7hEKpWqAiZ",
  "key39": "2BG5Jw8DHaGt6gKBXmMgX3q9XxxZprRHnan5Zocw3rXpx1ZjJA2FuJKkJwrtUKFwsG21kEakUSZGPKELMYwhcsGo",
  "key40": "4E6XctnyfhWiKog2mVB1hC5Y9rs6Yo73BNonycsm8xxrNA8Wp6zDopiCSy4F4Am2H3hfSkCLv7JEyBwXWArFPEUC",
  "key41": "4qKkMXKtrqCKzC3JHsqsDuAq5s5kVsbBvpCwJuPtGpkQuiTpxFBk2tTpRouJZuohAJzmTKZ6hEHFKsfRjpC1vqse",
  "key42": "4vjAS1DEpc2pHDPseUUa92n1fPCBa8hrrMGmrTXLjjPNzQ7CjdVCe1eqm9gnsBJb9p1WdLnnkxN2HfjZ5BFZRcep",
  "key43": "2CnUTXhX9YWs6UEzLC99rHiSRdTc5b9edYVhpujKFzTcFfh8JboxKEAnivMde745uZfbaq4GVhKpzQSr6aJXWxfn",
  "key44": "28eKNYu22edm4HZw2mBhKFUjHs2DfngYLfH1qmFTzXAEWDni9BjgLAG6cAHc7F7L85fXrR5AKdUkQdHAJxmbxAL5",
  "key45": "3rpu7QAXgyHwpA564zAW8cJxiQ2dN1FJpUcdmn1tDAneFLUErRcuqP3fUyYurkMEFq5Uf4SU7umCjkrKPDoPDmFg",
  "key46": "67nWiePzcpz7ycuEn9ZYiMN76vkqCLXe4t2zqqDdX9LXQyrwNRGBWTfdNwVAQzJFUeBWMZRuryTJYSXCph59RnBv"
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
