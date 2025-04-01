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
    "2F2xP5k6Q4ePGmMredzhdJsjrY5GAztzyDpxeFwqcuE8pQSxkkWHymko2gXim2q4gz47YMYUdcNMwdJA1NjWFs1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hGC5uhbq5LCe7zLFhbreXDEenHiWkkgYFWjuyfiW7bCoee1tytbXQn8ajsTPMgiHsF7urqzNX8YDe97E5bP14xs",
  "key1": "5GtzrmHb2Eh7D8YvLffoW48g3dpvsPLDYNeivYcWHR7PBDwKpcZwhtDNPdF1JiAhhPN6AHquHcJcoq1Fy5tZsoSQ",
  "key2": "pgLXu13YEY6JmYh3YZ4h1yvCV1aiZU8RkPrHLSUTnVeuWNuQSgM6G7pJP19rax7JtNShTcSzNm7eCfJifr84JKF",
  "key3": "4nVPyRcqTZKA1iu7FPfZBB4YfrnHZeBMtzX8HtJFYqZczV1JPgr9A4iDfd3gJoNKLt5whEJqKBYvdmGspK5campc",
  "key4": "3rhkpu58jBpktSZE4LjyEqWhi4cPSTywUngT7xLPthJcBwhdGhs7QB3m8EqL6CiCsCbwaUeyCsLpLzomyeGZGFo7",
  "key5": "jfX3Gb6j5GFBLUJzgWxd5yr6JXuxUMVcAe37QZ3PX6e8z4KiA2187vT2cw24eDuWL3ukxsp3pwV39seTycryhhT",
  "key6": "2hNRWQtoWKVFYf375pQwuyN6sVF51w1wsk8zCH54C6pcxszCFhhQfZyu6CMKpMnt8PNW3rCibZb9nzGhheWZ3SWg",
  "key7": "4BonPw81f88HJjm9iiybpGdT6jcZ4KLNhDaZdv1trCWkiDkMXHkggd2SmitQayfEiZGT5NsjdkfERByEsbNpM3D6",
  "key8": "3Pwpd5vBr2sC8dzkr32xxFmr1waSTakYh2R8BaPEt6QYoL3fDHhYafVU44WeXyGfUVkzQAgSawFhNYdSrSCao7Cu",
  "key9": "5um5Y9rPWfo97dKqs3AqCYujJtu9VYPXFuuKJqCnZgFLJUYmXHd6EkTJVJvnwfz2gHeF1hFtycoK8Mzwc8PZPZ8e",
  "key10": "43MrDnKcng6bnft1EKVi4EMtEB7QmYe59U8J3mghGs5gG88oC7khs7sTf2BDnyLfhCrHkL22bXWamqUmDiNc6Tgu",
  "key11": "2rvKn9EAXkEJBrsg1Y2nkTFSsEvPDYUZPxSXxrJs6CjnuAbhGs6uRtYhkZbonX1DfhyDgWRoYMZZQa4oJbGhFRnB",
  "key12": "3M85ttYxpEY8eVWQTSJ9nc6j2kMSB7v7vYNVuyhKVYX67jRA11tUQbd6U31KQYJveDPj5ok7N9NovLfwrrjtjD7j",
  "key13": "5tUrBHfxRVwN5dPPP4Nn1FpbAtR7ZhYnUbxZjxtYzyPWL37Rp4dEhdjGsjyrvYbRXXmH4FkuNf8dzMpSf2DfKAtr",
  "key14": "9XrHJiC7BdYtDmiTXFUdgPrGPww1nPLXQYsg2SFwyQwLzumVx3Z8sBayBYQWWu1Ty7bTPJEQrVSqJx4Mm3iesbk",
  "key15": "39dRV91EBg7jWjCYohnhDTz52kACxM1RoKLWNfziQV2muCremh1M15MyUBYfyR4VVmVPPLyQuzvMUTot5qq8x7EW",
  "key16": "Vs4AH79ED5WJamEb6dd6moQhhPPmLttFYaRBTJxKJKvNVKFQoQuqLB244dk3d3cQbq9DKXNMkaVuMGyDB3mAGeY",
  "key17": "2FPGSaoDTA758priWSQWC9yrq15S38fx7WFPxefLiou8gjGeXJnxaqi2khQQFj8wd6avdkBiDyWc8vFAZf7way6w",
  "key18": "5Ja2d3HDHayQjCbwVbNSqbUsP1RoWn6KzM67LTYrHRGF7eLQ7PMHZBNtejtW1ceAhFnKDxXPqxWNUT9ofGg6LS4x",
  "key19": "3sjswnGtvT7AJbUbiepXfVKZbRATJVKfrvJyEtKcqtxe3ECxwRPMVu9qp2cBsrUqoPpFdtnMz83qY1RPEBVxzADS",
  "key20": "4VQEreNV9ts58shgtj6aY1FLeHhSXs8E7eZkkDBhR4sR9LSyKBBaK9rPzfVqayiwx5TdQ4bjFYsEbDVxcEhNCPEW",
  "key21": "2yKL8Nu6bSuLjBYi8EygwUeHQXchLrePF43eUtxor4JJtL3yKfiJSHLyuNzRDT1rMRZ7G2M2PJzrRNXWF3eNBVQ9",
  "key22": "2CZJtMQi7cvtoTYkqgn118Q9rjdsF8LcfxYWNiyPUw2fRmcTVGF5jmRvbZqgfqKiRdez7sYbQbSb53zt4T5L1H14",
  "key23": "4fqSWAzWNeCxVxUHNasJUtzvwDXvYHAxkPAfx5Qa1CTNtByEKu7tgYu16XFNKHX6HX3y1tvX8BfsWSfK38XudAgy",
  "key24": "5eHF13F8sLoXer9FVRiGPfMdSSzSH9nNqhTaR5aG1KeGKhLgqKCfVkmFDVW61jUKCqVixCTCYVxczpdbtHAAKgan",
  "key25": "573RB17rv2ktYu3U51fKVzcnBrYn6E5iTwxzyXBYk4fzvB9seWNdSwuymqrbE1ean93crt3jV7Be57sZkagEWJ4B",
  "key26": "5Xog2rARKZLqCLVMo79Nv8dnDWHxC6TqaS4kRLvS6ULXmCstkwNrgknFrdTsUct132ncGEN1sck2xCxXZpZ9CgR6",
  "key27": "4XGgCr7Rq4NxjPC3nd1HkxKTGKFAkjvoDwoqG5N332U1wfbjUqAzqh8Nz5ZXAzfcC7uxPPYUantNhEr7N76mbs8s",
  "key28": "5JwGCAHNZ79RuQG2NRZNTzPcgXFY9TH1ANvQzmvPna7t5RLSgUSzSe3wzbE6CtGJ7873RyE2ah4vzoxZih5mTG6Z",
  "key29": "63kncbFgmstz7rL4PwSfkfhBcihyXoTTkW9MxYUhCNZVaPMfTUJFfQegBdZwHV2gXVR8F4cGjjdFSuNHzsiGgqQ7",
  "key30": "29bsmTM3uELxEtiWKgwZwjzt1ttiKEUehLr2x4JFfvX3aoFCDmzZwQV6AwTpxsyyhEB2K4WoQdQR2mH9rUtojvD7",
  "key31": "57GaQ5VAxrGdz97w2Ek9YLVMRNn4BgBovmMbHNfJvwjYJrE9gbCSA7Fiv3rUxNjdG5CazdXjzgMgS6kNENHwFRfy",
  "key32": "5VTuztgfhq4YqJZXj9TWArS6qJfPWPJZJG6esd18zB4vq547cVD9Za8dWQrFK5PHEywkzxb742FYfVFc9b1bxwhm"
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
