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
    "4awHkephCQRX2zt8WTWmoMx1TgSpSenuM3vEHpzdL8EKmEAfRav6cdZVo982fmHKZCUVTmbcTC8NE3RW1rPLxAEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnxF9MXKWjfFpEUKZveo7hJrJCGiJD6zu7NNjpZ32dBtDWF7EEdK3cFwX4RAKQv5JS8xdRkCP7xp73YMYf78LEw",
  "key1": "39HqsgoMP6yQXFssGohZUcSvV8dF6MTxWPuJZXaj7Aj97VmrJtgn71gjW9EVhTr3BEeoYQeEPk8PEatBNvmnf8u2",
  "key2": "5dpu2ZyXk8B4zCL55UqJtHPQE8aeR4SoKrb2KiHnpZZZ2qUeseuKv1EaxfuWwiCEGPT6qH2HjusZ6ViHrJpUDG1T",
  "key3": "4s21GHWxNW8rBjfBTvPxzSuny572dF3eHq4SpKW2iEXFhuaDiResPL7L8H9gdKYrSsY1yKFjWCrk8jDMT7sUsLGx",
  "key4": "2oADHdyMHsrvrvCNS6j2C2hmpz7jDYEE7LnTN5fY5d24zomDXEuURAMzPy1G2tbFetDuGQ7BzwkbGWvyfVt7oJb3",
  "key5": "3ZP7zwNTPunH9NwCFZvhGzwMMipDg9fBxKTnKpRP6uTeJZp9rTCLYGN3cW9DuafcU1oNFAvXXU3HRFYjo3FB8KZG",
  "key6": "5ZbnP6VWMVgXyX4vrriaav4woPfrhDvrNWy7jckZncMdFHnYGYRqoqPw8V4NJsQ1jnbNkdBSAvUX7MNy9NBEJVQs",
  "key7": "3tUXkoetE7YiKFwr8BafqgHg57fAEka3knrrHMuXGCKsAUduha9uJ2531F5gSwQ6v2Hc9fRBGh1nacxC5dT123hk",
  "key8": "3cuEYckrUobAYhpPhNpphv9gcHh1cQ4a2P9M545dyMBS1EihykW3Uta4avJM1q2U8xWvZUy1zVJX3UoHHtzwC3Cm",
  "key9": "3ewQBBPbB4LNiKEJQGKDFwXGcw1Utvc2jQMZX1ptt9tVqAbvLnuqoHjbaYTrmJ1EAANksv6hfBAswnfJXoqtBi1k",
  "key10": "4xgHh6N2AKK3ZcxGyJWu7b15VEYX9mDMSeprhoPJecdpYAMCyMftTv1nosU39kFYrhSwHfsyMeftnooCsqhBP2Xa",
  "key11": "wnv9x4jK9NYPXdJhyBxTDAUkjHaDpKsDvWBSN8CwBs2G2K6Y2HNcmNKFeaczZ9vH4KtAS6yCQVDAWigVnwspth2",
  "key12": "oPGxHzpXNtXqiQSHpBwuLs1oDC4v7UcmcXYn6oWuBAcGtwhYTRE5iZKR53H2Tudg5yEctEjtzyknmpuzpxQxNyy",
  "key13": "3Bw79JhKz7ZX7FRUkCTEadMtRi1ZjEbjt7vkjYTtWoNWxGtNxznAFGfbKd4QP2qrsxoa3oNN23pG9qA3NtqjS3iN",
  "key14": "31yKj4WyGXQu8x3oiRZTBzaMvRGKazbbSag6t11NgHpJvXev3EebN4a3NLNxckHiC2PAzHLaLHzgpWenKxFdH5e2",
  "key15": "28LGNJHeUgtnNoNv3euVPiWyFqtM6u7CzPxdGGjYsBq2Ntd94SYxHznqZ4VdmdNhdeGng9uikZjm8KY3GQk2dFXj",
  "key16": "3iiwHbWeTEAsVvi4bwKXSK4Kr9o2ttRUBC9HRWgZmhgvgvY5o2QyJNNbSX9n6QYV4p2zfo7Q1NHycVTvt6bDDoWp",
  "key17": "5H3Cu3zmNTpqdjdF4SsPrgNRoEGjt3MfiuErz6cUBvKUu1oJqRZacoG98o9P5dRRa9zQTrnPmunJCrHN1G3fY2SN",
  "key18": "3BJhoAmk2AQjKTUYN4Z5MXnD6utoVvdVUfVzWNbu4mghMFjzy31eyZfP5nVRSmQJqcryM5bTPx1hm4zYDBYSYWxp",
  "key19": "5DhpiUrR2tGdLAt1bVu81SDvhGLgbiCwfjrEY75nhJG7qJom5SEguoMYVCwT3JQV8JSvAbp5SH4Y2u6ZvmoB2J4B",
  "key20": "5j1jm4sR7ewbYiPo5FXpbvfCmXvQHsSrAh7zVaST8G2Yg6PUaswTHEJD8atX1AzQ2sT5ERn7nb8ufU8pBAHep2CW",
  "key21": "4375ibmcT6uFAtWzoVhBqEikxLjdpJMdjavtdedHB3qA6QCDMrzj9N312rdNFUbAUq9yNdpYAUUjWWWzR4Xcoz11",
  "key22": "4pRWLobc1zVeotz5kEsxJnas1vYkvBz3HnLNvuhBA9NmbVEdpbD2PJZ4Sk9Hf1qb9omZhxSY245r3o8nC8DYHENG",
  "key23": "4Pt1aENMdh1TCTu7fxkt7SZHWeiwL9fTd1T5MLsipVm2P94Cy5pTERLpHVaw3FGk5znDjpi1j7QxXdHRgwrs81u1",
  "key24": "pK4dvjrPGRQWd4ExCXg6xFQEtWS37VPgFXQhJs6HH1RVzUKGg9z9pwqgS5CHBZejMcXFpTuV7kDnSkjapdEzzhH",
  "key25": "4j1S8Wf2NemfRwrdJcxHDdaCFBr3KrpvzqN2CdcEHk8hTKk1vNP84k8XFfLgj852drewwiBhm2pCMzmEcY6HHbBd",
  "key26": "2UqJnS4RCNXAPJfctYt1XNSZkA3nek6zwecEqYaZeQdehMznTDjMtRtapwwb4mgbBi1F1tnpVgLYAwUsUjKLQHH8",
  "key27": "5QsAfq7WftDvVsGT2xiG1HVMypvJwtVxwjpQGSRTZQ1uXcGuZiHCtdsFeSjviqK1bLqYAztL9maruBQdGYEixfXU",
  "key28": "4PxyeJLB3JGPopeZR8ozMbVXhyRFxNLN8h5E4Dfab277mFaD7KHeWrndX2hovhrFp9cm5JEZpXra56kzBo3yw61M",
  "key29": "4ZLCKk76Ri97V2xp1nGPUxnz85ZkeweP2t7DQ3vGMZGYBNU12vmjNi3qHa1FYSMoazmHaLjEmspvM4sZTLwPACku",
  "key30": "42DHkgFDkErPFwQjU7T7Qsb3F6pfZrg835y6duEc3URvE77dgDM1u8evGmPN1LEgbsKx8FAmm3E2MPT7uBPz6fpm",
  "key31": "4mP3YqchfawHDQ28NpbHKRoa88MjEVEXUxePWTukswDskABpK8VV4K5sPmUiwer3mVorpdhBJ6UZfBzbYDnV6hxR",
  "key32": "3h5981CqzQVSREQWZxeFHA2mfD5kTREGDDnrQhRF4arFchcAPTkqAsLZC4qkSjomi5eATA7Ap1LypjtFxUnwFWiA",
  "key33": "iLw1SbtAXfUmtHAZDJMeQ1BVXHZ1cMnkQ1EzyEZBh2f7N8KAo3gH6tL24nvUck6G95NExiVxGcbea2fWhiqViBq",
  "key34": "wqLB8U8Kr8PqFqwrmVPEQw2U8uP65jLjhZ3KMZhyp1nVoQDH4GkjEaniCxEp5MNRYMnkgzDuL6w83SztG4gSNGz",
  "key35": "31td6UujhosGYsJyLAKBpuHTHWT6VBThYDWaUbWsfuKcv8oPx9w4xECmH9Wzpd4oiFK8sTxzeaDpv2jsJ2cUN6s2",
  "key36": "5vMb4AacouH6CxvdWpLpPRTNXdcraHPaMZ9FhchVQ32RJTiZy1V8HUpwBHbwf1AWWaGZb6aEPcvUCvdeDJuRU9uG",
  "key37": "2ABKvp6zFcSdmufPMbsje33caSndLCU2YaMLithDUHorCP3zuGtR7SPNVe85L6m3mBFdiMkcVsMbAfPhTjFCjCDF",
  "key38": "bpenBVsHq2WyvXBRz9ZtXDQL2yrsqU1wAQXJUGRdM6fZj7MfVdqw1LHMVeya6CrSCKxZ37VKLapBU2vGofprJG7"
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
