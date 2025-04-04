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
    "3qw4HENuUXmMZcVxywnW1Kri914mkvCXXHSWKiuFEAVgxTTp3n3Z6dVxyoUSv9sQqb5BJ5qSLEXdzAFajKGRR4XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBpXLGBpaz3GmukQ6FkvyxddNjkxYUmSR3Cf82ydbfHh1maErmUKAnY2arCE5Fc6hzcb1FTJG7ddGnAJxNDoQGK",
  "key1": "622wi1WLN4s7hsAjymUB6XsSURUACPekSajiZuz3sDU3tVUvUxhdpWtyh8DHkUtQdQEp3urpFmvXSDfwK3Z77X52",
  "key2": "2bmV294FWrxb5jPmoHDQUzJ2EbECjWPCYvLAvF2KQg5dfpUDQvKA5wMpcrVavnFhENbi1xjcLMK8cbcNQ6zsWJxo",
  "key3": "2WgCB2QqrxTySSrAtwK4BXbMbx5gb2JGeseJGhMd5Pcv9qoApfaDApx2vc99irpqVkm3hH546QrEoWfRqCYXc6K8",
  "key4": "2JSZqAXJK2yoMXVHwHg3FUn2D62jJbM26un9wSbBmsd5iDYBB3KnsMXDuNGoxhjAGyqZnK4iQogXxUgaZPnCiQRo",
  "key5": "4f1fReqmMK2geru44snyCaSZCexUzNxLV6YzSnBHjL2fxSeUZTfPs9DVYPwEHfqADJYjxW2tamBFHCYhzg2hm6cC",
  "key6": "3prnHkewPLQQTp4WGH3wUd4eVfVX1HxySEDAPsQDsiE7D8ugHbC5qWbpbpzX8EoByKKd3wQPd5TKcfPwuQJgdBXt",
  "key7": "55BhVmpqUAC1huEehZF3a4FBUxduXVpWwMQMBdELbsZY7PStu7SHgsZkk73RbGjhxuN9rm5wD4z2saoQXmRrzuqA",
  "key8": "2r4Lp7aa6MPWziQetfXpR6aHFBNndQayFZ4JPLYf7N88A3kwCmrFNAeCxFdsw2Z7xMnPqM22TmU6RkEqYdxR3ffG",
  "key9": "5Dv6veAnVEk5c3Nse41YiEo8L2Cp66KvpKagVGqezhw1Tekx9ECZEiKuPope67CJgeWySQjomnE7VSCLFEnbPNR7",
  "key10": "2qtiwNU2R7khz6FT5erB4VAFw2do8jJL5ks5KJFQEa8bkmasf1yovvwEnz7CC8SzDfvUfM8fGEP5FpmpW3cLfMML",
  "key11": "1R1b6gahgMJxH2BhTJ24ZGF4G4Jjr8pthuMSoRPiL3SzbTcaiZ8ZVGMVuYf3C1qoSPW1HA1JgzN9c34M9Bk9AMH",
  "key12": "4gUTMXStk13h91jw3XVu3pSUx6aDGsXsyeXkwbZ7xutMuf1UrMC4G5YxGVrAvKvWPkxzuwFiKxhULpAbDofrnLpq",
  "key13": "2bvicvSAhKnLFsL7icmxLmjRJD5qF4gSMejoh5FUQcSaMCe7qWcyFmBkzXKppkgZyaCnjvU11KuF7yVHCfiCtjKn",
  "key14": "E9nWpEpay8WzgoUb6KAWsjNDMHLfR7G1T9EpyisosbGjtE5PcbsbgAh8tL3DvK9bCPNGd5p7pGxuJYmSTB1JfWt",
  "key15": "aq11rt5kfDwWGYKJBHckR6RkoySJCeNdN3tDn51fYsqJD8UtYZXPLZwvwpdnuTXSPTAb5NxK8natxqGHj53pmA7",
  "key16": "kikmoMAAGwfdEPQnkaaMg6bis9HSncobpafGMWeNxVh85QEo5uVKYyLSFemmhY8WhuKHaTzX87cpWhHksntT229",
  "key17": "463owe4w6aY6KjGnJQcWh5NVdPQT9uNhVNQjG8ZscG45U23uAyGEpt2KTwCSdvcvkDF7ysZJCM1WrUdVgJsWN6Qz",
  "key18": "5BMZCsqWJ2vDtCeq9LnPYopnszS4A8Fn1RHAtb16fZGNbmnRthvFMt84oMhg7cDq5XjtoHeKUiXGKgdxtA2WeiAR",
  "key19": "aTwFUmt86ygwmpJHsRUicUraH8QfofZdtjnG95eRnxsdDuwQmHCY1Rv53Dc46FVxN2RGn1wK23ci7PfY7rT6mBe",
  "key20": "NgL9bDFjVc3CSwo4b1sfUbchrUS8kDcgysD2JEweKVJ2qPyefn8n5a9Ch7X3LzaLRXQxuxi3gNJFdusq4yfjjTG",
  "key21": "pA2QZoAVcYmCEskTnbtBnJFf8fpqzuJYjpfcXWyGDkmj2YjrkJ8cNnAwrJNHCcEnT1cBBEhDd5E6pY3XwwJdZZA",
  "key22": "MXdzafRZmV1WbprPQkMfbXbd2DgeUE1SwkNUHD5HrJB2qt6qQZrzNeBnJBVtnpXTpZuyYeKTZjdLLgWnxaALMpE",
  "key23": "3w4N1hi18RJ7AzhjPC8MEGKNvsuzTPxxQ8uZZAXouf1fRta7G2V1rRzPKeXPc2Ai8187S44eaL7DgdBBJA777tiY",
  "key24": "Jd5mxr3JbNrfyqRCBKo1gXvw5AKTopSVxZ147tA42n6rdcAUC4xHa7MXZ4as1gYbzoYtFMLP4Yfz5f6aQ2xpmvm",
  "key25": "2Kw4VLNKC1TKAhPMCGUP4FJfKQ4784LmcAj1nnE4U9MFJ8e468YsUchSsxenE5qrTqoD9H5UWWnz1j7SSjx3eL4n",
  "key26": "22otcd4owGRRoCLp7joohNLJxwDJazyLMNZDdFTukWyuRrGpQhf8L68Zk4tiowcWdfsfZDYtShHSD69MK6dgcUpj",
  "key27": "5P98VsJBrzP2C2YEr4SAzMmd7JzHW5oobbQqodP1ManriZeUY1D3DpyhtZbuqafXP3TB8jQaGgApQuKMUC6xoe76",
  "key28": "3h9FztM4BAkALLtWp7L7kMstmPcg9FMXkt44B6nkfLshhpgqsW746fBdmR2ZvmMNhgPcLqA7WC8NyQJJeR6R3C1P",
  "key29": "2SV5HbgxP58Cn5VW84YWr4L3RAU7f89F5G46wLyezzL6cgbBAkEhsYsg7wfBBQrRVy21VrLnX5zxV2Wzriqvj52q",
  "key30": "FSMW72Z8TxBZ5a7CA1gT4kS4tREVkVZrotTD788AiSyZS23yC4htLPLPfkBiXpxWeMSz9odsDXLz5XUZTKdiEfi",
  "key31": "S4VehaMUooLtNzU7cyMRW5FBUdK6zQyjRCX4bDwFV6BZkAWdLx11ZSHyQzqx1P8WHva1FAFXTjg8gGy4zjoTJjX",
  "key32": "5GGhpECaf9Ym3W8NmckwM2iSG4nVes9QXZ7wsKaFV7gdDPNpfvDxACzioutPn3wuUfYg4bKGZy8af3p4J16RFeUS",
  "key33": "3aRo8wsFHsiuzdQEg19YLd7apTLnpGvZX8zirYddevVnt9dJzYQyMeURWBmz1zKCBMNQtegMtwvDNhLtB6FMXkcd",
  "key34": "2aZEjN4D6ibZydqLEsuzHA3cJKJ7i2oSd6FAtQu1EuDp4VrtUidN6DYyyydPAJqTVTrJwyCUNw3bhj7pySx2RQb8",
  "key35": "ugYfK2f94pJw68SZLzAG3b7NJFjxaWvRhiZJ4Nsmj5csWmGX3npWzGT12Jud3NZVPyMukkqFcYoV8yVFYW1nm6q",
  "key36": "3ryVHz9HAGhGyJLRmVc3aYaZWnJY3dYEqnTxKgYcdJggsSqHr4ujqAe1KUFtMEpwRiaKPkgufuizKfFc8yh6gtpr",
  "key37": "61s7aKbvZV8GTdMhpyrXqsysg2XGRH2kDU7CHMGCJ3D2nbQkhqSaHvNVZV81wCRfymhPPonTVsBoUh9fcyxaKR6N",
  "key38": "1rtxpHdv3F3bNEogyBeNYWq6dfpYzZaTSQCqC6xxfAi1nVFu8LKqn2zrH12BBpAvcEz6ahhHt8LBQ9aj4NrvaLU"
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
