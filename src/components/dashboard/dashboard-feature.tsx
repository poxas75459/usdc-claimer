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
    "Sdfkqn4XMDtCS8LvrRELRz5DfoZ4NDaAcxj7fTSpohnCk6sDAzgGsvnAi1er2DCuhSDW9YPhZzMotctPSU5xsGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SrMmZVRr21fWts3UW4zWj1RFUfGETWzYH3WqCZE6WukfecwukSwHY8gFeiLqYX6a4XyQB4rFVZR942MffJazksA",
  "key1": "3JLvPof33zAoAxpMWHVxKURDFWTfoqk67eL8FHQWfLbLjqZKBN9PuPReB4pvBYKmN1H9TT5e7tid5iopsrgGKhej",
  "key2": "5GCnfkEQo22j3P5h1mkJXjmX55ZcVJQWnqXMwtcs4vV3zDCCUkbxcaAiQa3ksp7D5pMkEvqicRNRKrb51HgCpcn7",
  "key3": "21EnfQtKNPPoSmLGdJ9kRQt8g5U4UunpYnnyfbBYhSWy5Vnd745LxKPsTGfTVFLRn6HXnHgCKQTuoq7JBx4UhwKU",
  "key4": "fXCh2Q1hMSE1mi5tf3TERrsTJ6NEBSAi6rfJEZx3DTV1eoYSSfS9J7xp1Xe8S9zkMcXeuA55sb7eDBARiHD1LZQ",
  "key5": "3EqcqcKuiF1hGxeeJAEGr8RvJ7k3scSKP9hzSL3K8v2R53aLgJBwyHGfgZUWdE7Ac3LuQnDnfDPokRuxxEcRtMUx",
  "key6": "2U8hesu8qZK7ACxUWYiyH5RsRkN5bw3oRBPYxDZ8WRbmz7CVBmLdHPDuH9BU1BxAyEmH9bJuJLGUKkreNh7pfn9H",
  "key7": "2yJ5rzuDiroZQBsYZDrMMntG8Gfq9PAiNyKYkEuAmFaZAa1MPem8PcaLZkkbbNNoWmRKDcbYBn9UsApz4wJKXvdv",
  "key8": "wxATryowozhNWiB5eeNmtKAgNN9nPrgDMrk8HzoasvpFDfhrGQDshMa6EBRBJPoSqCHhA5NUHdnomJ4Xb5Hqh2f",
  "key9": "5RLYpGCvYFTeafSfjuQHd3fQSsKhPLJL8H4yFjUiqRWgRKukFrfswKyLCwyCMEMVF77T7hL4M6ywTJxc19eCCyPb",
  "key10": "2jCwpCvBWY19CYXRw3d7vkrWLVnJjaDuSi7BTupc6iYixsbrXQ6i2WVTqwuVM2TBP4XrAPharP8wX4pjyzCR2Sxb",
  "key11": "Fg3eMXPhtn78xmrSMdHvV7eEp9j7fkAVdUQ5zqkJMVrB8mVxnrte47igpqaD1hxiU1atGKgPWiZ6Na5183zpSUb",
  "key12": "2BVobh383gU87pfKoxXFUuK9jrZTh6EBnKkRy9CjtezPS2Rp3F2AhrSy3CUpAXQ4GdzzqK87vwhHLu2E2qJ462mM",
  "key13": "57v5tKodFN89Q7f2Q5DQEjkvfRk8QiFtKEf3D8zCD9TxNHVYTy37FxUbSVTQzjDLvkWKBWmpu6TZtJiv4QodhNtw",
  "key14": "JgUAWcPkcc4n4WmwDv1bxuvScqX4gVYxDs5ybhYybBwTzjgQgBYPRFa4dYLSGnWtvbwxWQuxnMX5ByJE8rpy7Yf",
  "key15": "Z2dgjHJiwNfGHHRfXcoN2xocXwj5fxvUJBs2HVV6CK1mgdHuahVxX1V81uyfjyJeS7VMTJ6uLHM3EZgM5XrRUvF",
  "key16": "4rVpuPd96ADkArpuUFpSvVPZEcTBvJrAZT2rFDEi1GJF8SWroroyaxuGgEisH7Y1bZJgkTBcaksj9PmE5K1Ee4pM",
  "key17": "4eh2Zrm3CjpZ17f1EWViW4MuEFjTidLAJUU2r2UcAQUxKqdXFgwJZZ9K8W2eiPbNn8xWNz7i673xjKgHinq91WTB",
  "key18": "4LQjwBUx6D33GU68HZoXLDkv2HtFsE6AcTfcGQJ1KU1aegaKjcWmfPVpTXULZsXWpXQ6sJj66GxGaSVrDwoRwzq7",
  "key19": "53a2nMubS1FMafFnY92Uv9raWoAZ42jmrrxsrrQ3je4zbSDttda16nDpqWtMx7kJQLaS2FSyKLh1c6EWyp8a2wms",
  "key20": "dCfXW6EaPZskDVMpSp1Ka6wRX3hpsNenFdd4t3qe9ZMWv2my8CFiGBdBj4dBRKsLewiWGeSAASVKmvyuKeWznVb",
  "key21": "BppeQ5w3Vs9y7cA2eutMvhg8wzQiHYYfdeK1KUh6T8MsUFikvDgnKC39hf71KSux6BcfVEHXvRnCwByu9kUtEz1",
  "key22": "5eHMi8vudz27RtPNS4kTBehUDrYtUu2CL2pGPBGDoHTmR2tJpyCBho81HbvCE1EYpM8h1K6cxGcHgeThuLcm1c5N",
  "key23": "3ReH9R2uNPoUg6DNPFzTegqgboeqVdkLKpNW7Rtdi1AwkjCWgjjS5zH7yGtDvsFAPzrKrqwR7cTpm97qprXbuGiq",
  "key24": "2X1fk2uxv6rUs21aUiMPbpUkHjHpbmnrsKgNVkEs2DMCVBiRC4gZLwNKPmpwi1umup3SQUWocnhZ2pR8uMrR8xrm",
  "key25": "2xSeDHf1Eu6wNdRLRqszBqn2rMqY6T5kZhzP8mFx4HrWhAjYEeUNU8vApjW85x7KQgcXgdUg5pmqM11mPnrdi7gJ",
  "key26": "62ECvvCukaYQL4AEzwSLiNYyDy6kgN13vJRmqWmmxvs7FJ8hQMCscqsZJn78jeYzSzvoF2LRbWakWiPWDe5yab2x",
  "key27": "5xmB4qqp8sfC3YkRn1WwwrbMvfu5p6vr3tKZ7hWmra6jLoiXXnTEYjC38ZovuAWHgZe39YkfrKiHGYm69ZKhiVR4",
  "key28": "51z9LpJNTFnYFxNWhuLrRUEPospseyRGw62k8nee9ZhL3SWtun536NKjba5LJcVZgyq8QQLcof4D5wS3VMxYy6oQ",
  "key29": "2URiuSKu5BEK88bfbcDUgec63nu6vkym7k5GuGNMtgZJ6rxksdLsKABKr9UtZscKpAi544jT5HLrsD8ssfmXPdQT",
  "key30": "5xq8AFaUPxuFmW2tsaqjivJx2SykLzHqx4yuHSC2iQ1X9P7yVm85r6zURchU2ArAzKgkoF4kFnAvKuaoAjmQEdXY",
  "key31": "5AtJE2HFYdb2NdJY5bhZQsFhr7WGomWLALhnYsQFPgpSzv7s3LnrA5PhVM3eQBeo2CHkoMpK8H7t6s4Koks4NnS9",
  "key32": "WPrtE5iRQzsituMnnBJNWSB7UjUbjPsEKF85n6QTR8UJNWNCTWHh4TH3mGoggo5BYmtQuVk9Xby5919PuDQKjPf",
  "key33": "2uU8V9nEaMrqf3UyPET1EAQSN9J3P12JZeHnSGv1cxBWy9AqhtQkgqc4NiVCs7AQXqHSd3idFJmrrV6FHQeZ9Ara",
  "key34": "3EdkZpoJXe1piExqDMYNjCM3m3hgscaFMofsauyEnCHajoqFTeUF7LwfrSs7Q9U4G7ooV8rq1mJoMURxT5FXXrdt"
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
