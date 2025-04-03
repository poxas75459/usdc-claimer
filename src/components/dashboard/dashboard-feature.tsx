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
    "2vznLfbzG9rJXEHVawMPQPe5H9J69tAzizX1CwZ5Gcq8cvGZqjvaHk5kkqL9VcUVvJSR6HZQCLraHfaQYn7dcjkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqpYqBuiUcuAd5rxzyiZnsgFMz3DC4ZXM5LLMsqyBRUAAgScx9idi6hJ8rVWqpGrv6Y3JMuGCccighmQNs9sQYJ",
  "key1": "4xy5do2iCKVgqqqYZ9wKvxocTaLKhu8CXsCJEqzVsDVhV927Umk7UBfcnQQyhQpAgGbKpKdx2PZ8d8tEAVWKjN5d",
  "key2": "3ToTxAvK1vkxrJVfMADsMVem214SXw3t9XdekKZGF2gXpXDrGxp4rDB3oHjLY3FcnCyP2Uih79TiSVKFQWYm496w",
  "key3": "3t2y4ot78eiPm2V6wt8NdgCsSJ1FQfGkhETR4tpg2Dt6mSzf2qVXn9DGqctTjzrUho1NwJ5LE3YJtzSqQZbKvq5V",
  "key4": "3kjXt8ppEszjpbJkUW7NSpcssVUU4NY1R1Mi3DN5Fvqc1GB4uGtahonUQRbkQs2uXCCANxNQS1b2yY9YaecyzKog",
  "key5": "nVL23A5Ni5xDWp7nz2at47TxhUEUzfVBaiqicRmZgpNtAZvXZmjYhLKZKEjLcDV9zWoqD2Sw22S5J1WA1f5jXDU",
  "key6": "4ZeNQpinMDyCuaXv1xvXd1TPPLobyuDQQW7AobrbVKHavVFiT19FkC7ZmJFvkakjxp6uNDV6KGW7bdggAmwfSAag",
  "key7": "Ed6Pb6yS9RJt18tM1LxxFAx1rvR6KDsfD1g5M6z2v4SE1F46iuw2E76hkAYBbhwDfYsLP5YWfUgu8zL2xgC998N",
  "key8": "64T4b1eXBAp4bU9PRJXWRumGVsy4eTqsn6sPYdetnvcUxHR4Z447wTPQSHbFN8QH1PzjZeC83dVrC1Uideu1sEXC",
  "key9": "4T9ohKcwxqDWyQbJYnvMbw6SG8s2khKN7sT6agFkq1j1cz5zfFtn5YBCDHAYnx3y79dqQw1C59dxAg6BLKWqeXc7",
  "key10": "7knxaHsrPzfa36KSg42rNkjovcQDmFMkAtmDuv3jQyjjJtkLPRdxVbqV52qP6Ncp7SbYsN3gpEeydeHgA4RfZdu",
  "key11": "vjKqhWRH7VeBdpG3n6FTcWzDZSHTQRowFggP1uQQS5SP1NHk842BEHuyFHUZnPwwH5LxC7L6pAjTZHhw5su9SaK",
  "key12": "45SKyoZkvxAWhjNw2KoKKNoNZEdKTd4nVdMFtnF56Qmzd2N2bw5fYNLxM3T8noT8LYZPeA6gDnikE2z2RbPn2ho8",
  "key13": "343aqhvPkurkgj2jTYL6XPPtvn5GyXz6NHP8qdFiPL6BHLZgLSTmgDUBkHuqbsdGb6tWPfCNHr2bsF9SEV4ydfBk",
  "key14": "3NvgFNDtYCxTDgHj6kwXxgiWMrKC1RCkBmCnbNwxdqPh9xzdK9GC8uAZbs3YTDjyn4teZpjGgrCEhtLsfPpQ2srK",
  "key15": "3Hki7wX9kuJDFAcPomSxBA3HJjpMagBKh4AKAenZn2wps93AAFJ8DHe1sVrPMshdk5v7n6RDRqocjtbNy2EWRzLE",
  "key16": "3zNDp4ZPxPouLT6nWPhaqaVEcfJHq3Wekzv5gqpYZLJ9TitzvW5e94PJxNfAypvUCESECS4euXrKobxmEPesAjrZ",
  "key17": "4nQbjC9PHKuQaHyBn3hnZesfGR45UoCaj8wyXsrUUbLoeUEaD3xUBtXAjkqBSpXPoV6uq6vV6dMbsi9AgDjyFFF7",
  "key18": "3SwLBpVpUcauJmbq41a6J8S858hSii7uBHaCzJDvjXKZER9VA9wd3d52eafjJnJtV2P8HYGZtfnkpuQ5RjCXHBuP",
  "key19": "557hQPD7aQLrKcMVdj1DB7M4BbZeDEiGRs4yM7tb9BJF2j5ZE7VLS7wHDxu8VhW9rktZcXSwbEtx8aSj4tQ4kscA",
  "key20": "4tjqsAA7EM5gZ4re7kCEkCnHs6MGtoiGoRmGkUDX3VPz8EAukv5i3Nc31icdqmbEwtnHNHgjVPeXsaRFUrLGzi8s",
  "key21": "9jiLej6dXRamNdiPEVPBDv6Hq7sjynoUMsFaDVv1TwoVEg3SfkDE2ESU2C15JZqUCHRL6w8WXLpLF7Mr6cmNtB9",
  "key22": "4WR4aoUakZAtaLsn79Fo1wLijcL5UpBRNV6L9XqqJUHELM2xXWynYr3u4eMJdKcJjZPo9cn5MH9dX3esdKRLrDsn",
  "key23": "2tCQoi22Q82gW7WzJXVhUAcFqBm2eau3xMNwGHfP6jkWYVBC7AwzTJrTYteHNXTEKYwpGyKwhnnuPEWgKNMvPtLJ",
  "key24": "5hpEsRG45JKZ5eLc81cRAS2aV5aCSDQHwwEFYhJULkkeyfzX2ZwjKfeC2khGzWLfzUNAYTx6y6KGUotqHR2N81B3",
  "key25": "4ybD3mTb2wV2T6ghEoC27t22Y3gqewHy7vvTPyAd6HMuM3VQHjdqSjmB8vj4MRLK3NT6CZNQJrEU46hhkqETJ5Fo",
  "key26": "3azJAeczZJT7xMaP2RUN9WMcnnmWwZ8r5AWqhBrAT8BHBSJruysqPKA5swpcp7ppwj81BSCNXeeg5BMWMTQiJDZB",
  "key27": "vFbh6TJiHd92D1seD3Hpmq6WWPAL5GKbHRFq92rhkH3Nfcswa5UjMJK4QJ7Y6f1oLGNjKgNYjF3CEbkgnh1cAoB",
  "key28": "XubBMo8TPAyPhph6cH6uCayamiD4mmZ4B3Vh9N5ong9s9Quii3WYzMaV18dUTz2x9xbXeEGm3oPrJaS3MgdgKz6",
  "key29": "5zMQEYEivjA2A7YYByJqcizq3yPjsQovWo494kZom1LPw4oQZjFE9nLkEoBpqHUxnUW22eyBYkmzWaYeyVV6f2tQ",
  "key30": "2xyPqmUm7yBoDCLiQHZKZNe8zWtmTuy81oypJ1RbhsWF82NJkVnsHg1AswmRQ9U32qXNtGvjcSDTbmiQLwBzbUYV",
  "key31": "3STq9jWGRqxNi11GQuXWPiCEo1LhPVUE1oTEnLW5vhVhpyhYjeg7AU3D7MtoohuPZVwg1ysnMnup2rwyEtTZcZi9",
  "key32": "2aCwm9ZSioBRDayB23sHLU1gD7H44KnsXJtpN6ct2bDZuRouP9cNbyMvDd5xWG62Za1P6YzgxxULEMkfKL9Gur9C",
  "key33": "4JC44sgkhWRY7zeDG6Cj1vZpkC1PQDnMeUujUtsctEDEDPr1rS9RsDcKdhouwYCL4bPqAcAcELStcs4dH3Rw37Zx",
  "key34": "2FbijmTX7E1ob6sSfh5ufz6kHhV8pKm1CoHQiEjC7ziGpSYKUJDcPH9imzUYcLddZ6pqoYuLUa9ypbKyJcrdsjQ2",
  "key35": "35E4SzjW3yHS9W973t75a3bs35mnbz2pebSCkV9sHgRTqATpbJh61iCvWV2HWhWANtTrVUfTUrh14z1X9A7KT5kn",
  "key36": "4eug68KNsRr37vbnfj8z4tJNNAwdmY4c6hp9NBduvq3bKRsaupbyYWZtkjeeL6L4J9wCeczd4D7nwuuZHvezxvHv",
  "key37": "jSWxQfTwPTbaYQd3NK3jbG81gTWc8Qu44fkuqyKM4gbxBmKkwYERhvY31RVFDSNQwhc2efR7yMzfF78hGqRmn7R",
  "key38": "5Hr8X8LP6CzKpHTAZCgCafFG8Qm47ztn1dMAQLRD6WchWeszf47DgoFM6R6AUWd6FiMCBfLpdG1udsxoEV12WMVL",
  "key39": "2t8FEaKqh4qQS5isJeWqufaTty3x9J6qY65CTPMhf2w27UgQ6H6iJ6jhbyvnohtDcr36nznKnTKHyUqQjjRBBorN",
  "key40": "3cdU4tJZSWy2fo4wcrG8946mgWTtCpGcPgguqScVbpRLc6eu6LCWPLhyDHxW2PYtMfvuX81uAwjEPAyLcZVqvTpv"
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
