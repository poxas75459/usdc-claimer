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
    "5YrybkLoLSkDW3sfQSVnWjE5Lb3j1mBehSprfBfCM1mkHKxM8Y1VwvPwKzah6Auh6fvgAaMh7iVF1yrQvLSS7npF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9Sw2FXRXqUpoPuZtUBhFnNBEQd2Xq5qc1jg6vKt2CKiRVrLJfib17FbfzozHNQF59emW18a5WfsqNtGKEnCTuF",
  "key1": "2fpQx9np8q5nEQPtdGGPAHWRasCL1fJz1rn12ZXUkhAEFRZSZfBqMVTntkkK2TP6CzPEKGnWkfhWdoSK4mnN5tqf",
  "key2": "35ie5mjWSHdQfvVsYeRS7jGpDqgSMTH5mF4jMa2yM9fbKT4rsM2GJZ6qDBSriQH7yUN4GUJEYuNBirUxSjDRJFyx",
  "key3": "2wyaLWhRawk8qCfPhMsjk5qfrrzr8Zuozz9BaHdTBXZovmMjrBYZY3tRWTHm6vnGsqYCdwqJZKPRoACZfnMwa8x1",
  "key4": "2jjhnunL6KW6C6kfsm1uhFGpR1eyfqMfwJpHuH3Qn69t5hSmc8E6Rv3FERZ1akppeWQAMBtHb1jrXnBfM1eq1upj",
  "key5": "2L4DmeE9sxfwGu4cUcVwLxC6B99nzmxRp4rfA92NovmT87ZH6deGeySn1rfiJzbp5hUQJZTebLT8a9QBneopprTX",
  "key6": "4JK4g4RnjKUcA3ZoPWfT1whUmvFp8HCZHdrgVwHdNYrPowdM4yRQYX7yB55yN8Vtk5r9PgntuUwYdeammrx9tYPw",
  "key7": "3AVH3RRzVvuAzpxHiVbPjk9uEuSrXw4JuXeTpBsyy7p7GeH9r4R2ewZJ37DsNVESyoC85wtoXAXdkvBYXPVzRvME",
  "key8": "3TTb8mNgEnuwysvnRFTtc2T5ycLJfMsdURyJkEwhc55JbrdEUxda4C6Wi5rPjJhEnXSXrTmNjGmKhhwpFU5Z6hud",
  "key9": "2o7Q3Z1uGoDnzhUD3A1vY2kujXKBCzeo9vViucdCXUQ2VfoADwSLAihv1YfCN2VHhhiyrtmwMtrnTfEmfW8hGar4",
  "key10": "2FcqektoxSkQXdMgodNskFKiSjRBCoTKx2dWQRoy9GR2AWoRDoZroe6dQhvWGMJM4EaP1vNPAq7FTM8CaTHuN6Yk",
  "key11": "yMvsC87LYv1eKFrrcQAxG9EiY4BmSCBWJqMJygSgnjEHcMjULWhtphepauscxusRPcPuE6KVzLugXTXnQcE4f66",
  "key12": "49VtpFWLsMxU5BxHv52WuBPMayX9sg5Asr8JwXHuxfARkp1fd5Vm3BAsFYGPtnojDU1zp7ztAwqEhSuYi3GkMGHj",
  "key13": "4fawcz2HrtdLoigCqeo9cz9GQWzumGvHZSMhpBMgEkg3tQJRLBnLhTKcKopQPfpmwX8nKe4CSdnLc3kkd2Wepnip",
  "key14": "4YvZ5mX1HBRQ8Dh1xohDcxQQ15HR4SFRuwswweNzYFqpsoHW9Tu9ya6iU2DpGiGRT16D8gFsfUmmzsnHPEQv2NNV",
  "key15": "UPFxHBpwEVscWpG8ZWseABq6nAVPsF58b7jjnn7uiLiwmqYDZtmZEgv2WV5a1yKv4PpqXzTSKPYN4SwnsfojNRQ",
  "key16": "3tzB3uLB8mFgajBN3CDos932nEkkjpv3yPonaLKDREBmNKfXKJDsbHiB7rTq3PY9mN6Lw1Rvcyeo1sU14WsAhWTD",
  "key17": "2tJzdzrHnAc18F951VwEtro3dMrXLXYb5VNr298uzSFAWEXjCH5CQ5KWqZLrZ5XwTBZDHhrj6MEHcj2nTkAkXZxV",
  "key18": "66cUZkPQxu48BQywdNUYb5gq4gKPmUn8SWBpFUu5qLJNXqe56R4xeAgwxAghTtCXm4wYTshcjqULshDCnRgkv99W",
  "key19": "4NVgBcbNAaFwjAdee2MQbqW8nFastGVSsLjA5KNqahLjD9JhZJ7g1Q4nJXrcNvp41rHtMzUyKxjumK2B5MFJNLN",
  "key20": "53AtEfSdpWdaGGS1AyuxF9rV3RdgiZebHwC69wP2UiJgKt11QW7XQQuv8d8HGffMePhiZdkgc6xRB2vYEFTa5ZNu",
  "key21": "61zNWFqkWr9Q1Cbvzftskw9GAT4x7vGRrZwzySreRpcv2gXyJh4tN8ZYfVQ3aQsmuJyCzurjh7bFKbsBLxk6rucG",
  "key22": "3niCG8wizKy2pVNPjAWewL6VpLCeHPQEE544FTjyZZM3LxsAiUAXov3pTL4tGc4ZgyQ34cbo3YBLojdsp2v418pe",
  "key23": "2iL5xT2JyFoWV2ArCdysox3bPQWGn1f2p6YcCrAJikAtVDvpQK2uHdPPyCZvJFQtc9Wg4yikjw9bsa7jAoA53RDL",
  "key24": "59MmDqctynsbB8B3Aj2UcVNcP9icNu2Qma9kiVcAVTbJdro8q4Vm4yYPVwqG7P2jncuX9DbksJvsV3cYkPyzFqbs",
  "key25": "x8zwbQ9KPjGZq9p38HGbvCJcUkDyjBkR3X9nqW5A6CyEwdWngh5fJRU66G1Todwr9neu4AhbhfTpWAiMWDFqhfW",
  "key26": "66JL2suevRVdakj8PAaZeHLNvDuLscQ39ES8qiAEzDSpxCiYeb2Ue5XH6hUxeUFxLsfEn2pdurWfD6XdqrQ3quB6",
  "key27": "5X2wcQp9BtDBbVkDcnq9P7fxARp3Lyz1z47Luuxa2cNzVjT3uyKcB3vqZj9X4L3RTnqm3rjxMtnkBStwXPMm6tcr",
  "key28": "4euEMk337X92DyJahcBweUMJbJaa7kFzSHbPx1A66Mw2RPK87e5sQ2Z4v5tqc3pCyDBML3NGUHqBXJHwPMDS2NQc",
  "key29": "4c1cdH6d7NbNmGZbXVBrGegWavVkgTzMvbZ7rGgyWu35pvoGwy5WQVR16M7vKxyqKyt5sjrrEViRGhNZxBncTyqp",
  "key30": "ioXX9xM9tfi5G8AYm5kGhHoTRDVmxdLF1mYfeHwdVcrweFCVdhWKkqxdigA9jeBSnj2sXgddQWJuT1xde6wRQhF",
  "key31": "5aJ2GE6AC8anqtMPi6k6E1r1bguNHf3NrZuETFDSThFgB8BAbf3SdmHW4ystYxdny888x34Uk2xh9wKa3KaYUZtx",
  "key32": "5deg3nAbB9NixvNWF9TaYnyWkaYvaoi9CATkr9rfURkXrSpUxpDtWA92GJzxGgscfBDMiXA1JvnABnaFPAKQQpSU",
  "key33": "MvteE9Lxfhve17PaW1X25a4R43YbfbYNHv8DQhqdrnBuv2AvBuPLQbs2phLqZZvFjxWGLpNUkXhW236zJwpxTci",
  "key34": "3cBHqB3UJAwm8aqwZgdBDjuKBWfwNAoitgsq3An5zK5d8JoLz3XsQtxr7aNXxAr2ttVs589d9PAaR3RRhxjugQzA",
  "key35": "25YG8w6diti6eitjPcBMRWJzC3DqQSW4pX3fNDBUu4ZmEcof7B242P11DyRotLgD13TXbBijXYsJNL8HfWf4dmVj",
  "key36": "39zJBjZt7Hazkp81ysNJc7rRYgPBK26ck24Bt4eJBCWuY8VbdsEnY2nXAw8NUyBCgWmA3EUYU4Dn2grwrQiGAhVr"
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
