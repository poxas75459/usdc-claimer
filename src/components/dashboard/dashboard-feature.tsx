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
    "22D2p4eRAGsQ6Q3Vxq5szz7pJpoCzYq8ZjRB6SZjTgiN76P7pvzmfvTFT3nbgPJGytJECrfihLj9pg8suD4WCA8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNe2ddFaJwmRPXvqbcXpJTsSrEyTVZzutVHGuACrkdRn2j21f9ihk39scyU3zprTuJihxP3nm5jmBR6tHyAf5Fx",
  "key1": "2YpPvD4cBPBk1etBAXUM9WPH964yegCKTNnFBkLLa7Kp3xaiKeqwV89FP5vctN3N4V2pezAJSdYxzttgH5ZV4ZYa",
  "key2": "2rqVNZUKnBZd8f8Jkc8L7KU3v58sG7d5xd7u8QC7ZjUEEPDwkJestZLKL3fUnGbyaTqXBCRGKoBmxzXUiJ7gJNYG",
  "key3": "2wFvshwurLWbD5HvwhgUhTCbXfUgy5jEf1PoPF9X4PWHumeicseqbV3UFXxr9Ru7EpssdVdfmdQ2j27UtBFVApAH",
  "key4": "25L4vbZFk8AUBZLn1Pgpewe5APb82i7CdvzjvyHymjDWwtUbJX6nD9saehi8rNT5YCTeDy4aV67PLTMs92cTzTeo",
  "key5": "3XUhQbdtsyHyEv37gU9xSUXzis935NrSvA1paPZeJpWkqpuzhGogmA4p6ssbpUUEqnrKGvyxBwkfwcx4zybcgyZd",
  "key6": "2P5Bc2Q5H2N9mG1QFMgKcC9GsoKgnJFQnGSPAeVG1HEhVSN3Bhhg55LYZjzGXVPuTgNv5PNgEG8oJJa2RJr2qsTP",
  "key7": "4GG56Zrkf8SWneHPcPLWSr7jVzJuDif2Joajavr6Gharpmq8bAaGZikVet2mSFebxKJH9eHeAV2hHC9FUrVcpTJ3",
  "key8": "32Vcd5Y6Lq6Ts5nrsnwBpca6P6XvxMWCmRENx5zg4o76qfwPZ46P4xgRRzBT8Czt5cgtrt6xLH1NNwDopkExFccY",
  "key9": "aApQVp8YxdiSML262fBKKL3g6h2DTThevU3jstrt6mZRygdniGcSLbH7zCtrRdzuZqEJGdQuFLUvwjs4gnfHR6e",
  "key10": "4SoDJtYqZtgvfvouL41bfzEjL24f6n9Za6Q8PbSFyms9YoWkAAo5sMdziZNFMZu9zzThaHjiBMUpbSzCMixc8Uiu",
  "key11": "4rfCYCY3yh5cap9tsD5XqYH4VZE7LTim1FYRB2h1YHjVd2k69Pf3VVebdfWWLhCMT3AcAuTTzn4uNavCkKZqVcY5",
  "key12": "pM9gWx4xcpwZ15cP14FKtqKQrogEmzVcqnkQBRa8AufFbKBaTmKEoaRarXuxdL2HujVcqSxUSPPYwhXQjZBbxYY",
  "key13": "4VqtsSEfanjQY3wbmZB3mPx7XMyDEra6xxoyPnEZ4DpdsuLSAxJ5noe2tXXsNX1SYHKrmgYBDn3HjueJUNBZoi55",
  "key14": "4thqqEfNDzJX91AMA5uEuvBU7fAws3YLAzM7qaJjDbrJN1FcrZRJc18fo8YQQzPVPzWU3zy8k36nyUFetRQ5YRrv",
  "key15": "5NcvJAcqSSSmhgjyJe519pvc7cBRN3w523zFbVW7msntUwohn2kUVPexuq6FDQYdhPyHK5RRj9ANyeWMRM2t62wm",
  "key16": "41UmneN4vw1cRWrX7APqPww6FynYEDCME38um6sQaoBhuXjzZRGc6uoVia2dPiAV8xeAM5nrfNnBc2N3xW3DXfbA",
  "key17": "3nouUHRFXyAQnZJ9S256rFsf8Rovx4QzfhQrq3QCTEU9WFzv6saiGRruE5TTPQZ9Ui9bwfrxN1DjjAaF3wdzJ5a6",
  "key18": "sgrpM2edKDwV31QU7BFLVzgqzMvggGQfzH4PRuKkGu98pT3tUzaKFXhHbYoWz2PKjFXas5wtxuNUvSCesoPhCKF",
  "key19": "5tmRZcYicWBGfEQEqhgJi8SnGnnhduZupEsEeETnsBkD6iGQPCrvpkCkn3gLjY6TcfDe5XYhWDCveBkbKoTDi1Vf",
  "key20": "5ckxmNb1c6mpNqfkbdaEVMTheyTzo1PDJ7VsWUcHrGLt61YJe4AS2hYQ8z5eV1bh2XjFuiu8MYnK6b6hiNQUfTjv",
  "key21": "5zKciEdn6NBnnuDcRXy9s4HzJeTAgXqGt6eqqKtfKqQf6iVG3imJ9aXiduiCpHGPPKRhkYxKfKFmfqtBd5DVifQB",
  "key22": "5UhABfKcHW2mLjSo7UopPLo7zZjizTWeLKc8Pr5cCyTvEScEE6mmYN2ZbvVACCyrmNwJDtJGbtcp9EzkvdvLwxu9",
  "key23": "4gsT54uKL2rFoWqWo9hWygjhGNnDBXFmCo6QpEXXvtSS2mgykeQtgSHYww4cVA2Sg2uBpiAdG31KSp2xKS7t5kec",
  "key24": "53y6NRMAXZra5b4m67X6mV4endL7LtbNuYo4GczPrweTu2hwWrLHMKgqiTpwum4BpiFzLHUYs2y5S3TJTN4QvTY7",
  "key25": "2NwCbMoXmsj1ferxb5CB6WJHMEwdYVL4WbVXZevqN7C4gnwpNiy5a8QbmZiGfdv986Z6FbSgPCvCTLMCn6RXDJTc",
  "key26": "2uyck7XNfCKxi4uCNKX71qLRoYAMrhEirYhaFnAb46t4FKkzvfXPomLZctKYPv5YZuXRAX4qEvrubw9v4if522xu",
  "key27": "KaYtSLRZPY62fgza2L9QAQBVcpGy6YwJTRtfkv6Wd25rqDrNj8mnGXGW7FWLggra6ESWJ78sEthAtaq7hhompuc",
  "key28": "5y5pdM7haNx3t8XCrUiY1U7NoiXSAPiEt4FNSSmEc4pXFNZi3ipPkAxiEv8TeMh21RjuByz5UJ8zEFR2sgMDDoTq",
  "key29": "2Kk4zkJFGdhVDDSwx2xRy1ESDPRinZs2Yd2PhE2Q1pd9CRh3vktCoDiTbTBVaZVEPLtyfHMcPixVGaeS1GxGdXWg",
  "key30": "5zeHVacdAvva8rqPATZoR2vAsPtMMzGqw242t2UCR2TeBXudUNm3ajrpXqNSf7W6rTCoyrqCJpzyXgWGNFZqN57L",
  "key31": "2ES58Aac1KDrR1N8HFXheNiojv21azwh8JZPM8R1CmAmVLKVwW131Eyuk1pLTu7VWZoPLzv6Q1DpjNxwvX7GtGQe",
  "key32": "3u38gDUhP3GKzB26a8Ari45LatrBMLtkJPfrvmMurNRdQMGLsaYbCH74GcyxqoKwJk4JAVXUFSsrdPCx5j2Z6bcZ",
  "key33": "JBp4NH3mkMWSZGn3cMz8o9MRUGr6AaoK3givE7YmfZKh4deJmWKL1NpquXTvzHRcEg6mkVNWTF51QQA4KTJVdJY",
  "key34": "4CmwjR24YNVTLtf3984pGc1YTbWnjN4H8MHM4pmKa4kTnsomeiHwdquZvPMBFQD2nn9X8jWT3i8CckEfYz7x4VXH",
  "key35": "1bXvAtTrbQNB8rrQDcBQjfW9nW7CdMeCWdyTna9hx2XzpJWYw6pCwDGeWiVQQfHXP22KS4LoyN3bGUGWvD5ab41",
  "key36": "61ghFKHsynLgvVZMVCiEVBZVh5eNbqCRJYuskgbZm4ExoLmacYoyWfMyULR79xPY5ZZphfr3VDMvGjrntZ22y4T6",
  "key37": "4mQN5vH8pXkMj5THSp5q3FwLm7asAqo9exDxtZS5ShHuvStFZrQCfkkMVPqFVPwq63o5BhDrxMpWqxbzvyqmPxUq",
  "key38": "5DnTnUJiQEsSAYj6fKeNTpkrALu4GuFLD2dLhxL8q8vGtqwfnHCybw5NkuZUwfKyVSVKVjrTgh7hE2ZAg4PVbfoC",
  "key39": "44q8HC1hxdZvzcqazsSEkhx7a2TWrjq98d819UWB469NGBJVKNnJDvJuUC5m7WewpcsuXQWDeTS2jaooVGKKcAL9",
  "key40": "4ifAGjoDbxzTY8Ln8WAPKPtn4Z75VBoaRssBiMDy2X64vw9Xe2meJ65WmKMBic4iNzwpzdZDj1XBoeQPR7RLKpEf",
  "key41": "nvVpLUGkjsc7XwZndtQPBHeceQZwPWVH6D4sXquxHedj8kikxofFshVsE5TqAPXhKUGzBN77t9AvUqSmyZSKy6h",
  "key42": "3mmtLPhvBX13EM4w7N3iWk2rarXWZQTHM8QcNPui5GHZ8Sg8oZoNK4KFWpMe6GbjQUGkqeNPaWx6MLgkQ7vg1QZy",
  "key43": "3xnCDkpxHgBnACbpDterqT2zT4Txwp9vY7PjeYRw2nfFXMCN8JE8MgtbwzESBqcLvxUwFTfdRWEAMnCbK1vGYStZ",
  "key44": "4RwsNHc8wbEYgNjPhT9TwjPb1aabwdz3ZM3terLsFaRjpzkuNmXchtxvbRyVwtge5dbsuNtYcpXotmmAsUN2T3ZF",
  "key45": "5n5HzpAumAoSM8a5zeZLrxT7y6zgjm5iBzrS8n9C5gpEB1Lk8obhampYkZ6czmWHzqwm2dFX569Ppd9toCEK6Fj5",
  "key46": "45ZLMzT5omDhbmaXPHHgcGZb8Dn4esi622nRWjG6JctYUixafgx8G4AzxE6KetX9rFMKA7LMM75qoUew2LcAQzyX",
  "key47": "1pEEbz8X8qb5yGjKs7SwF4UcmauTMoYtu2Wsv8Qq3zw9Q5jxv2u8VHDBaYSLDsxsPdmibcKR4W1FSWFzW24Ubk8"
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
