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
    "3VnRnqWM7RGe8DKXYecL8aWprTwnET5dwHpiC48GkwPdKfTMAGgaE8yXKh6aidJCMHhBFkAFtTdpJ9scH172nRro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f5giksZkETnsnqZGd3hoLLsBHQXHcx5e86FH94ycMweeYyJmRDu83hxm2oU8gufFhSGwVVP15iosxDMBRxBMyf4",
  "key1": "3ADn7Z54Q2Adr3kEqyPZ2C1ZSRcU5Ff9F6YUv6P3RhRUFTUDXvTZRgDhBNpBiBpSCheQdMs2LoHaXvUDb2zkf7Ht",
  "key2": "4naKRaaNtiy48GZrsyciAxX8tvhW4cQHc6SBwJfVMchmFDtbso49HMsvxQQNGFLdEkRHsLzWPrQKnWBAkrfeJsPd",
  "key3": "4LEpYidxtpSmNdyZrCfzYQ4JXcsYmVgenzD4rsLbsYGWAUKRqRo4ZLWK93RVKb6634sLc3nwp5xV1m28icbTuQJg",
  "key4": "2kSnDt7jvoKBEeU1PDbJeirBjpoUuNAhXRsrnBdV76AGdLnDYdwy7bTbbU9FXZ2NjBn8qjzEmGze2KidRmSfedNK",
  "key5": "5rPoYKDTKrDzfeMN7SPgS49VJKyMw1BmQcFAFGZQbsJVLA4VcLFZXScB4XpZq7y75rH62q22S9hhz9N8TpjkKAdR",
  "key6": "3syXoJfbQuYzFJmVJkUWAL5G3bWJQmbH8iXoNDp5KaGUnd5WiY3qYRwBNJATVNe4EDi6ggBPx8FDG3buZRe6iZBH",
  "key7": "4fkqAQdHDgXyHVr9t7vBzMDRN9p9QXfSYhe7E5QhHiVHdqQjZuLR67Y7C7VUXK11FXVRZvbXabW8xWD4QUGimwrQ",
  "key8": "5FPhDqDKxf8bfxAS49dZ2XWqXzkAjtKdEaXQ8uDVqgvHBL8EnJtSvZeVpxgowkH2G3pTzjHKCnpJNRho4ufmz5Rh",
  "key9": "4ym6CzgW2qijgjBGimfqx8gYPyTbjVoowZWrx9b3NaBRBaGUh8QroGRa3BCinAq8aytNS2GysUQpoEr4ohcMLVLS",
  "key10": "5q3dmhydbEYuK6FVM9jbveQ54oVjR1VE9YVGgk4CB7qfnTearn6xFfQQZbJdu1uMVuJ2uw8CAqMiW2z2GvALU7ae",
  "key11": "y1JnazrWxpkkrqxP6AQHo9Jk2rBkEgAepcsQenzTgYbDpzbLDA5Tic2scsgom48ZkhFoVaSttYt79gwyQpeyJRc",
  "key12": "3bS6JiBkoZ2RiJMfyKZ1drAahiAAeVCgmmGuzXz8VKWbeUWifxMTZ72E6AMherX2GRP6TepC8SGLcfMb6zt3fw4t",
  "key13": "3q3daEEwpPgWHvHTs7y4A2TEhKGSRobwELGSqYN7EKok9LaeQTSoW23aHaYy8XNotj2mV948ccFxyg4Su8coaAiv",
  "key14": "8pghaUij6TzcXg5SE5zNeQCYutVZCZUobJEewkztCpBpQv3rLnwh585CPW35Yd6Qn8UnrSxFvScpP4KebpbBKoC",
  "key15": "pCvnw9aSFZsCRAe8ieginZKRvmuprTdkrtjsfLuTDrBdMpWqCMSSMhg2RucBaB6cEi65Cf1qfqUs63cXJtW5n1r",
  "key16": "45v73JYNxBEqk9XrYHKdooy7GKJfaYZRCFsLXCDMn4ggvGF3B6SgmSQBuk7w5oS1GMqr6Qc3UQQEL4cyimxuzMBm",
  "key17": "33tasSJJoQDcdLeyigPcminxmU8vEhF24DvQ9FK7jUCciueps3ynpsB9wEMCdAvwCVDtADaTwyjo4WNXmyN2R7uV",
  "key18": "FzVx6bKkDLzRvkVED1GyfWbd6fY6P5PVFaPkouJpZ6pent2uEKySadzbRrhP7LDsZAuE61TUJMGWADn5zrVv6Gb",
  "key19": "4gA1pw8CYjHNnQ4sj5XhE1yN8aPvixaHq99YHR4peAqKsekezAEZWb2CSrnR8RNBywyrYU1V81r3WF8wAa4r4yt6",
  "key20": "55w65xdGUWJfWu1UvrjZ6LYxpjBxfQmjg4P4PApkayTM72vTsbyUTyyPdzm5DLUJD19b8Tr6Nbz3gZafRDwzhou4",
  "key21": "5AXtGaQNHEJGt6z73V4UxptKKjByrDZeouUkvTcqSb1SzTPQ2Xn97wE2UyyK2GJDEpe3QjJMMnMRyzHopYfB85tL",
  "key22": "2UaYwHVitLUY5WFsTNYJtzdUjhjmfgjWydwJNAbRmow1QnczHX3YcH5FXxtKCjGzsW5BR55n2NwP46McdxyrwP7Y",
  "key23": "4FaMgbaESKpF22fq4KyQYtvnqLvopyK7H8RZn9SmB7A3WNFRJaaPtoFfjzFz9Uoc2Hj3nopcTTvkVNKShL9UuR8S",
  "key24": "2GWCZfWYi8LGeoZ4TaEwhA4qPZuFBimyZ5RekvDDBPVK5knPTzJ5KuRsdoLLVKNGYAR9wTq3NwvVchV1uVdRHdLL",
  "key25": "5xEAqSJg6eqr3gVvtQLkGfFexW2ueuWj4cDyrkJ6aayQ2xLKNsJnhrzhDjWgnCs2AfaRboeU7C3v4ciiLKqgLpY3",
  "key26": "36Pv4iUsdSWt9KpZiSdX9kjg6LDd4KfSUA612ZDVZCgaYf1bUsFbpVbmLnRG9JDA8PnVd18vTjQ1PVosdhUYLMt",
  "key27": "2SatPPytUbppBxNGAsqT57ti6BW5QYN7piAxFxjxQVRuw8of7AjxmHo4eYYx1s7eQZC62KgfTiCToLiNQoQRuMjo",
  "key28": "612nkS8LGT2EwjXZmZT7xHfAeh2Enzi9YJiFezgcERZjUG7Ln6JuzDVmPqu3HjcsM6j5W7zicDatssmqRQFdMDsu",
  "key29": "3G4tPSB7f12xHcpdUw8zm6zUocpqoewHeKMVfWXTgaCMS3ciX6V3qSHe8nzEZVwtXmyVuFRnX2WRLt8uCJiVt3Ui",
  "key30": "56QdN3ts4f5Lrcud3kjnM2qL9SbN91U7fuo6J8yWG1x1qP7rndzFVm7x3SUHoDPQBS3kuopXiwuX7Uc8EKRmtAmh",
  "key31": "488Wd8ABsbREKHMcMBFctMTeTeW5wHX4VHuAaf7Uh8zYWVPJxdVXKfyH6PqwNimHdgBqUjNwtShmrfRZatFnQn7y",
  "key32": "3pGNjoqeCzD6PBDDJbT91A3HN21ucM7VUf6L9zNFHtoodxRzrMnrmKLHV1hFpuaqz61Zu7L8XVkyszkySosHFC4L",
  "key33": "4Pbe11QATgTpMTbX3sPQ3WTtqYsH5aZapThHgetazFxfzkJQimmkV53SawrzsBHY37hPcsrZXKVjQ3j7kTsHfhgF",
  "key34": "5NRA1GP69ce8TpGiLVAF87ESm4NrcZgwPCHvSgCUQNK8Pg7sTtskGnYFiRBZho6SgfMDwDBihY4LWf14B4m3LJdV",
  "key35": "3Wv3rRGoNBaMLmw1XrsbCFo53EaUTYkHLnwESJzNGnC4AAVB9FY4TQHqi5Xcc2qpwSo55zkFgsVpJsiLCfft5brL",
  "key36": "3ZrFHGk5UfjoCtwSNuPhXcwjXJeZgkDkHEChkthuZ3xh5JwkA7E3xVU4YfuYia6uyXRWy76AY8DP1cMWfksXunS3",
  "key37": "J5arcZPoDnjTiatXh3EPxCDhAEyGn5oKgnCn4tsiN29utmS2wpMeqKYYp85ZgGCNVySGNGE2xHppbqhMf96frcg",
  "key38": "3GGoGQGs55HL9hWvAhqRiNJMG1bG6K16WRz5k3JzpY7sLVXsqhv5cYFqXTUXN9CvsfCZCX25pQ4V3CoYTNYWquC1",
  "key39": "N2Khbb42FVqrzDJGE6fu4yNfeAi9hwLeoGaagYHXSs2fdQnAi8w6nndK64TXMZ4tPYhUud7ibph87gx8TKtfMjv",
  "key40": "3TnxFuvJnAnMpGRbi6sWE9ELDjMeyRu59aZ6152Uf4ryf7AVMAF3soxFK1YJT9CkBmJgE9wLLA1JHE6YnGZexVwe",
  "key41": "5F8AQTLhn4MdSamBDvnzeGFsduhN6EmfxabVS24ZaeERa5CLvZEagYGsv4RpeFE1BAL2NUmZ3AzF3ynDkGQezT2b"
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
