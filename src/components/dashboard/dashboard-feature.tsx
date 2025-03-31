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
    "27nfMv83jfNSricZAmfgMVG8ZAov6Df99XengF2anfBd7bfEKcARMmN2rgwUiADZ2nrigezqFh12izqygjwbAFRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehFF6pkGiLZYAWSFKG946cJLh65si6B8KdBZoueZwCL6R6R699LNFeHPdBfaJoZXHWwYtHhGmW9z8XB5aCteGyW",
  "key1": "3VSKCbEMYfM72eDaJJrEJNyVJ847FsdLCYF8y6uEBTeYaFNkNacmXgBZJ2yhmuDkUtVhvKgmDDaqVQCGAreEeoRj",
  "key2": "41DY9wDFreh2C9oUhi2weX4GMysYAnNpXYC4anxmWSacPWyMskkNuZR5BLibCLcWvZqwKofeT2fH97tKv2WRrtG1",
  "key3": "5oo1dTifDgiac6Ya8wBs1FiufSm6DnXfYADwYfiEGRqWEcSpV5wxwH4NsECHp8ZgdcUXKpmTrmF6tFitop8hgvXe",
  "key4": "7KVyzUyW45xdPoMZNNkkXmvo7Z97Y2EuUNbYmBdxzXZWiEy1B4LiPfpnrpkRVzDERvtT8HThEQignH6uayNYvs8",
  "key5": "5cx3Mu79Pt8T7A9Jns8BXCo2gaQ763SAVMUfYJHvxJchovhBj2Dr3315SA1CWRjERxriuYZNExnKgUBt6dtCrN3b",
  "key6": "5yXRbvDLo6qQCdMC9PEUuE2syS6GBamMxqVcG33Pr2pGPKE6r5XsRbqQBPnnEQAKkuE68FQDSkkrqqSs7vc3Zi4P",
  "key7": "5JMs6hkNCbKSKKQL4t3U96gpJobRpXR5YGkyBZ2YnS45URGuGxzCaJC72SF36riC62zD15SordYHtSkpuwEtfgzF",
  "key8": "3h5nz2pUxVGsaUBpqhULPaR7AFNBRPASKugatZiWUfVGm226DTZQzzuG38Nw7cMhRUDNBJ7NHJBPLuTyRXLCtJZ2",
  "key9": "5PRm3q3M8s2yKUcyRNY9PXDTGgyzQZZf99Sede2jzbSg2HmVKjdUsvPVjnAgpAWTQbc1gSahVnus3WFgcufUjzJq",
  "key10": "2FYFj3xoey3dwKkm9Ty1NG2cg8hhXFUAZaqnMo8MLRmt8qLNWvu22CgNSPRuQTsdqA5DTwcYKxR3vp7BmkkxhyLA",
  "key11": "5dfPZBqDH1WMe8KdMybNRteZawxAmwMsQ16RUnsbTMAcrBFu6vLh8Nt9jokj8FP7KqsFkaNLf947axtwbLPCcSQ7",
  "key12": "3jk2geLj7qv7rXgMsA4jKTc5VR8KNDxjCGaPg8xvXHpLW1vKzBcR84XUZxprJwp696ax6XUTHRW7ufQ2FgSR7DxV",
  "key13": "4VJhgGnfskRGGMnidJRfwm1qHJqWzHEchWadqAU5NaPMQxTGRgbKQddXnadj7HsaahptYUZqSj4etP3pPKEQ7qWE",
  "key14": "5LL6a5P7vyhy2pznNjyVFhMNgy9sACKnKEt3jxtMpq9AZ2P4y775H2347RhjozUSjpdx7LA4RfUZLhQrAPYWdaKf",
  "key15": "3N3K34SZbsvzkXc5kV7b83Vgzo1oRWgraPcijWQ7ZUvq3RcMQ2cVzSLbbdZCfMZvUbvQRMwQ8iN5fVaNoe1PdK6X",
  "key16": "8b3E7oebMdzSGoCuPZXYG2eDYMLC1WBnvhPvQgUwAqbBNGfEUU3DUmMv4cGTjnCoNUVuUseYogWpY1ktWvt2jzS",
  "key17": "C3xmiHHt8JChiT4kt3spb9b5aso7nGHXHVW4pwJNFjeXPXrPBnGtmGZR6piyQBg1mR6nJiMPCsbcqPzBJ4T72Tg",
  "key18": "5k6Czb2wFbLhAY9qyx2vbyxJ9zJPEongoz42Nxq8KWz35JTDRkoSUddhY665BDi6tbv8wgiqepVZXuuTQc6CEPLC",
  "key19": "2jaR7pM5GzJK3afH1BhEkL2LV6eFBGT67HKFjX8TMmKfW6p7prLPRydCaZHkYDYM31SXojhtkZDaLFJE43KgzmLm",
  "key20": "2hxiFtgAJMccaEPSuUgo2qfuk7XU26593sWUKs8U61H1F4DYCFkWniDtdhYL9XnwDfGHY9WePJ55LQsefTHFHzKv",
  "key21": "4j9UXXw38kExhhyBPceJPpap5nGoLTGawEJFruwnRFLXRcVNSHU9EgTXAGTUjnksTT2unqpqnh9zjt1tuQWTLPgZ",
  "key22": "3eewGqWoHebu5eGFX4WF9NpTtckwffnRCE6JrXShRtCBq8FhUbeDSGdcSVB5BEHmTs1u6cN5rnwodKnKRbZ9oYrj",
  "key23": "4G76Vxkaebg7DuApNzhvcFYdx7mRxysCu9p6mzNNv84nLRDkFP3CNz5MHC13Hdg8P8PTaAqtXP2tU6HQnwSv8JTm",
  "key24": "3CtcWwtvUxauzfwdRqGP1ZTazniRhS51ERszxBJ7G7z1Nu3GCs8WCC2ZNhBLY5hDuDLFjNt5jSGgQn9iex8LjZa3",
  "key25": "23Xu2ctaiCFrgZxuom2LWS99ZNx2Yew1bhZu7d5a21d6Ths7XdA5rqQajQm5dmUeULP7PdrfrTKdKxsVifeYmAVv",
  "key26": "2eYUxzffNpKiAXi37TA3Gc6LEMJcNLBG73dax8cJt2YPFJd5Gto8Z9ZAnC5rsSUNLn1ZkntrLsivFDgnPpkEH9Mq",
  "key27": "4GkcHqsDBiwPsUdR5v7iHNJoUb3HzpFyNHKChdPLPnMD3KmmxBaGkYAnXdUEMCNXjCy3tv9a5w6GUniz5xcpAq7B",
  "key28": "469wrtQxgq69KVZrSq9BFqnuQtXL5V13FRxhfFmUUyDghrvx4ig9UJKpWErJVBqWMbGhEPKVpXtmaMF9g2jUn1Xo",
  "key29": "2EUTD9MWCx4BQF2a3QtfKBJVFUCx1semwkpqCWpMC2N3iUSz3pvBWNTXFLCZUSQXr3nCyCqJn1JuqaeMZ8ezShZp",
  "key30": "55YdrmwKa6DQjYkixyLC1dgQRgSerZTsEindPhwzGuLwJpDTyG2AeHraBzBvSHcY5ica5xY6tkbm7U8A2hZCqxMo",
  "key31": "y7WGzJg1FGuRuk1UWizLeiqGxbDFEWzZ8vQZFwAe6KvWYNTphnhcYQ4CRQtytRFSPi61nzxqsJHU3MjmLxcr82b",
  "key32": "2KYPrFCxsA3RFzFa3bJjY3ntf8iLT6s93qkRLisfctKwp7MhHswr9ZYRKqXA6TJXeEKCDnbugzC9Ez8Vmjbpib7S",
  "key33": "2uaMZrVLAi5NjxPzHXzmoGADo7wKwex5fHdyf1W7Q2rbmjUe1LYYT6o9Z9svTdic7SjndXRFf6DTgE1Ua1pvS6XE",
  "key34": "3gMZ1HnLqfvUomFuKCDviUJAV4xte3AMTFkMTGKVRYst9k4nBgxDUgoNcNvSvVifC67RSXQxnn3ezG2Zhu7XeD6",
  "key35": "3Z49XsAeMdQ5weiq2X4qc8i4xz8CDtvYpxyXXSim7bPbZhcW89LjAGjvk2q5fcrhXKxWZR9RHjouXqVhqxgTVCW3",
  "key36": "2ENDoYR46UwexfXxAZF8reYw3MoBVkXH6mYN3GMCAA3rmodZEYzfkEqmedyQZ9RyU2S3BrAwwHkUF1fqhRqcBKby",
  "key37": "3deGYUML6hdLpCz4K2NZSm3X2729CkDLveg8RskbWjLm95WC8yzmxsUsrPWHa1zZomCtjt8tcCzPXRuG5tTCAAij",
  "key38": "31bszaGuvSF1z9qGKZ67gUmhqQTC62XYmY5H2qkNk4K2AQrd5EX9U1bEKwdVszCSNJXAhj92sLrNcj7CGk3Sje3r",
  "key39": "2spiQLpAV2g4rcJr3MfJjZ2zYYrbKvUmrnWDNqEdB8Hoz81nSMWtyEKQzE4DgUdegR7j5YdVmLp57iavQZM2KJkT",
  "key40": "JWnBdBHdAvJnVmbQFfdTm7vpA8r1kcDgeYEP2oMxnUeiUYFqFGmSa7uh8kXcG6wqJ3rVocuWKpf9qnhkTnbbQTN",
  "key41": "2J9f5Eit9pMaArqvCQ54ZBShvRfRkrvrYiS2WLr8sxifcWjCxQub8zSGdEFpZbwtGvRido7Z1WCg5XXACM8tYWSp",
  "key42": "4ERNV18T2FcVBfaSh6KnuSU5GyiwwFnwsnVYiQWntfEdmSq1T5PWF3SEbGvNaSTSEAsW2yoPceHQBjS7FWqAmWuP",
  "key43": "GLc7cv7nVaSSZiGqFfEhjf1FMGFf684vZr4oY6opxKYuZNr293RU8Mkk7wmriST9qnMEXvE4MPXE3kF9i85Pj9U",
  "key44": "2uwncQ99NzuQnUQpQX41NzHZJkauHF6mhTTLZzBjCmb5FsxKhAYqgJSMu7vCUoMfvhM5kGTShtn1qSKKTy5bbgm1",
  "key45": "5GupAGNsGX3yebStV72zfzxmXTx4auzhcNCwj1DMDxgrNjcwh8E31oD7LjVpnLJTKJceoB9BzqhugESUn7C7yGm"
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
