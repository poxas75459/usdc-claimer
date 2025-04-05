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
    "2cw1dZX9ZyULVa5WEwmJPn6fCqyNZvgNnEiVPqc2gDaScQTqUUKL1CJ5oGdkWrFTdJkPH9iHcwKzbcPmTfDr6E7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h2bUGJvpYSJWGxzh8km2ujfDpMnwUtDxibY4sNr2oxKj59ee6isKAUSrtsyckJiPj2LRNhJdALG47G7jJWfg8Dz",
  "key1": "2bjJtCr8oz5bExQRMwT1bee1ai5YbxENRSLDwwEETGzy11wPSkdLZNm2srKE7eQo1QGhyBi8QEPs3opPqjR13ccw",
  "key2": "5qJErkef4D87vo6punkhoH2t5udApqUnZWxc4C4ZBJRcAanAQdMzQgVJMuavJxNV8iqaN2NdmT7smwfutByExF5R",
  "key3": "355cMvgeJykNumXNVWHCaFeTnJwKa7DcBewxQpEWrro2PRx2bincNnZaYg9Rc4fSv6ppYnJx9tpStYuvPbmrq9wT",
  "key4": "2BujKrD7fUqEv7z6tnqzAdkofbfmVcXSi99E68h8dbwiBAVPPi4RvSHVWGa21ZxjB5Hpjo9zPTLNUDQap9QveM3H",
  "key5": "3E3bidXVfawnwWjegKYiaQDnRSpfe1iCruGSLdDtancWiCEPQpNnwwb8YXxMWftBdK8AHvvSpPbaCG4dJBNDenPH",
  "key6": "TvWCPnyhyEVxt7SWcnTYzPJByAxPhvP8FJ2E6T8QETE3tvRMfjWWVzJm2Tvd2snsPHrpSmYkssN85ANfE1UyPfV",
  "key7": "4FXjvd435tQZH5wn6TtWpKDMD1XekZwtTitEt9MMPgcTMpTwzk5LVKp9vn7dhL3hyBzJgyfawbovhFp8jG726hrA",
  "key8": "2A2DiJD73iMwL78rJi1mnv3Q62f5dDJa9esPD7FpDKFbtAApdyivYmfE1k8dPkbSwqh4w6CyCT8d8yFPRsukeCmh",
  "key9": "2BFt58rMxAJMoFNzKbfqJH7DXaakzSLom9tGy3oWzWNZEszSG5k9fYah1rsWVQ6sFxCA7R8fHaxoskHFfY6YHAL3",
  "key10": "4efD9cuvZczZG428zHSFPfi1UofGMPfbPry43SYHWJmCBMCY84z9eeqvDNFJg8onL9QwwAnXEsgAsNAGNKUrci5e",
  "key11": "3vxKEkFyX3DYwQ5jNR6FVaxrfMWRNFYg5KEbDymAnAKi2dQHdBouZ9GX2D1fhS6rsVFw8LTXEAnFpriNtRXXh5k3",
  "key12": "4MFNPkXoN9m8QdtUUAT3LEJCpVmQqDXGxrABzmT6teq3eFADKvqErrwGfLAiPytk9g4Hr1zSh1gC4WQXXyRiDser",
  "key13": "3mc1dntZg5WS4KgVk6FCQ6BsTeMrzu18PFExRFNXkkifJU3rZpgP1fNGBHJuuxLqDAFyjYDayaEZ22mRBmcj55oK",
  "key14": "2wfzTXX1HjsL74fvixnKeA42dj12dnTc8uyQ5ByJgZE8WnTSMcu1Xyk9nE47N8HS2go3HGXzbujEa7J728MvJyBT",
  "key15": "3xERUTgCwdwLixUs3bEZJq2kqpCtSZvkVXT7zGuQX2tcan5mEb2WJuQgeWGcQCYQ427FRn3PwBs5kt1uAUDSErd1",
  "key16": "3sdu5s9KfrVM7AsqnLxH2cLsZx6ymv35b6CanLzBqggimEYAvbcgo3F8hm71ZR9v4Kdnm9tQ7ZTXQjGyhssctYh3",
  "key17": "2vwrBwq7CUmjSLfUrrKWcjF7qqBk9guZruKhoFhY54g365vPqk1Cj75jRRWhgdxP2GhhBDH6WtfKxyyD2xur7aVx",
  "key18": "24JtH5xGFeeiKmdsYNEqwooxPJXrKR1nh8w7UVkAXyZARMdznLkZyWXTZ3somf7jfgfbDPj8emzqDuUxSUj4GFvf",
  "key19": "2cxuzeuXwtteeQoAwrxWe7twfTda1cF3qx9uK6v4C5T8ZJg9pNpS4tZpXoeNo5XA18EPbW8Er3CVnmjM8yZQAbhi",
  "key20": "SXcKiiccVyQEb7xW7YeXzJxahhWUyMdEttYhLM9ra2w6kc75GzhPazNXEozRFi27QxMuR48ehzaTvDZKH4h2zrB",
  "key21": "3WE8KCbrjWSQyYmGK8JGNy6m9htM6ij4qLfP8vgjYjzvMCzregScZxHGKbX4EaZ9Vt9yrd2s39DSpccCtUT4Q565",
  "key22": "3at6dm7ziKx9CkGk8sjtomzmQDEaCeC6bLnvvhzQRQehyympWXCTPExt6jkpGbt5Qx8MUTLNASD2GckENf3Y9aMd",
  "key23": "3P2akathwToPjhZ3bhS9QeCgMh1ZQU3i3NJN1pRJVotQgdntSLQk6bYhkCRyb2TgNWLyKq1kEMCTJARBrR3usDHJ",
  "key24": "47fawwyLKHqtj2NzF63of5x8MHEoczuw6N7rH3bByDj5V4rbwyTUutAzyC4EDnXb8ZYTQAztTJi1V6BDGFyPsAVB",
  "key25": "41CVmVdNzE6CJZWDyfVoGJmviSf32fBtjYuwC5XBELETwzKeJv1iihMNnsLKwnARtrvTNwABAw6oeFJuxjWFQAzP",
  "key26": "3VLyehQjYLeYyQ2LurhH2mzJzyMz57iNXxcP3eX5vEouajr2pig8UsZLpPL142GGWskiEkrTVgWawNw45bko6qr2",
  "key27": "4SoudxPwsr4ZgGm1wgm7iJfiQ2c1gx3abj1W5UgDntUtawoPbDHnqtThfFWxu87uX6K4f6Cc85FvTrxkg8fgWVmd",
  "key28": "uNGi5wmSM9gdxRUsoECmaiQ3rouMM2s5N2QYTdM8wj2CGVTTAJzwu6eNT37vb6SVmZjfXqvogmEyeJYq8rEL3fx",
  "key29": "3JksizpXJsj1UMwqiQpVWDf1vSjRSLEySN7upwWSYEyJB8zmNDPvUKS17TSuH2MhAeo4e1pgxcZWJ8X1agHQvg7D",
  "key30": "3zmLfUDwMCRb9Ydcbrozka8ssHM63XJYJAJgPiMr6Wd2VDr7LYmVtVHssT1FAue7LKt9WzUQuADRrF8PfH6Q9Mja",
  "key31": "2qxjJPfHGAZE9nuTpVrNhXRddzKWS8bdQn2Pza4KQm37U5VyvkKjVbgGxzU6hsWtcHvEFNQ9eHNXPYEErzXidz8n",
  "key32": "qfNBbTdY7i1PXAVcocYNiBxPLf4aRRR5kBqE39gnFxGRJXA9o29zPvhtQjdccCbEFHw7J6cWMPhFJXjfbXF7snf",
  "key33": "Jbmn56YjpNQpmZc1qWwknFH46JB2GPtkQVj6zQRbPpYUo1w1dj61DUHz2X2dj6bHxoUeipueSHECEKZC37eLt8d",
  "key34": "QocP6LKsjvfGF2wneZa9pQ7jaUMdfB5KNFUrNCHGK4riehPHLJF4jzhf9zUam2fDdy1LoxPYFdGNTurNRtYaZ5U",
  "key35": "5Hxr1nZVgD4gHqhogdxMzSwfBnRPyGYsPcRp6tcpiJBeBxPp2Ym2Zf4mnJiADba2EdPc1iVxsEyYGrWYjSuWF2wZ",
  "key36": "23xmXAVgJHstdASdYa2fHShWLyQbgiCqtzaUPFjpT4edEeskeSu3ErPL6HjHBJSVELLjMRQv9YD4cT87WR25zHvF",
  "key37": "5unu3xu2yr1eW7tSpmHgUy8ux9rpmtZAuiRSyQ3EGSLvLcd5KT9drQBEaQ7Lrim58F27mvEjYBbdh763sTrSxsf4",
  "key38": "57x87S8bwyVU2h9FsLFHuGT4c6XAXY4AEsLi86NfqWEf4a2idvHrTjRhgFD7aBRRVikmT2wrgqpeouUx9vZgK4y6",
  "key39": "8CQ8p29zxi9Q6rtccrRLRALRVp5aBnFAHDp6WooHAufoPtkdMcW1kwh3JsmKwpaTejvN27JtvEAtUuycynrbgdm"
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
