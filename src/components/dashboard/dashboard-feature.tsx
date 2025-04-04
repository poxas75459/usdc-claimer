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
    "32CH5Bf2rd3pSKtCSV6aE79MMA7VRx7nXgNB4cR6aY75mt4HFmW4VDt8TKKJPcydwfapahS1cTJTssjcZ8g4vqF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SpWtSyBfkdUBgSk57MUDgyRP6eTJGpPtgNHFnY86f9vLYbPGNzJxz8ieAV2pGCt47iiawXTsntSKKfv9ZqTjKAJ",
  "key1": "2JUSSiJ262jHmxxKvcJVw6H5KrFxgMjS8w48TzzdGdT4T3Ax95imGHJD1L33cbiw4HUmtnXVCcRcJTZ6f1QGiM7M",
  "key2": "3JByEXHTPvC4wW8n9kPgrV1CjUxkMdHrzeARUpDCTGiLw5eBA5DXzGzMpmvVu64dAUwPTCzdQoKApKrVaKizqjkT",
  "key3": "62JZvx5V4BJ9bsbXNmQr6i9ArGWo6Q6M8GPkCCLdAuVrqweAMRsZivzMCqeEuW5toHk76ibZVG1jn1r3iJRKHWDy",
  "key4": "33VUA42Z7Nvt2jqwSDF9iNUgiuzg1BoYKxZLfUpzjgswiZUTAZLutqnK42yzA7rD7dJwuC9Ro4PBjCqvH8vYdT9y",
  "key5": "nhb34C64YtgaVpYLSuxw5Jzm8DF7weEfEJaQA55DndUjNKzB5bNfjbiDVK8v4XTcowZjbXo69LEZjpzoWVCaCiP",
  "key6": "8FdvXP1adA5NfJAGxu43JecgqxfCHmvVrazrHQXcmqoHcxjANdtw4wXdb2SFtBFLbLQBX6b7RAAZeBbhFCvz9oC",
  "key7": "3Mwgc2yreffmhzjfxouaR3vqBM2cfxyoni26b8ND3zTHdaZq1rfnHiJUmPs43Jky2TbJZeb2VEt1q5BxCuQHTLvk",
  "key8": "3hh6KKvss6m3QBdB7HdKqx4fZSsP5B9Q93wPihLRuAm3XV1hKLMVHFawsCG7bXRm4VrkAK9noUj6m7FycCXMsFDS",
  "key9": "5JzTZzF17NKZeZCPTFttNf557LM6DAmvRfukeuToqrovh6psBa7kn4atyHMZLdsXBLznhvGE4ynPvtEYv8N9jav3",
  "key10": "5hnpMuJFKtShFhop2igYiuAQdobRRYU9wrKExtQfycJetbcKjoceaN4eBDQH19rS7YvyfGfRCB7gpX25AbW4YByV",
  "key11": "22D8rzHzhkqwqv2WZ6rxbyFjnYrNyjqwJhaJj1ipuLdCVZ4GXi8EyP4GQLEAWSpfM5CictFtTHwcT9KzN7gJrJGa",
  "key12": "ZwQ6mvRkcYVcjmEK39jegDrz8DrQSmiAZ9UX6eYFun92c3BpnkLT75pbrhKZUirJ8jBnmjW3XhzmZ7VE4q2DkCY",
  "key13": "4ACCy2ZeEJd3Ndazv3sgN937GNzn9RsxkxJN8x6dj3nv43hCEGyNjRQyLiaHheA1WYmQQivauHX4zr1gvqY1dDEZ",
  "key14": "fkWHf4iE3MM3tZNUwL9cJkywN4wRZyzC4FjzBgGsnL9nirZZGEJVFqT2wb6jvQfDgyKo6dMiaqeQ9rUkn2iGhdk",
  "key15": "1SeXp9CFvtjv2rxPZWFNm4UgfcimPK1Xgo7D2ZVkBRx8L7QpesKmCkRBL641naTGAXwtnxhiq2yb6kcaJ5Vwr7W",
  "key16": "2PL64ejWQoXLyrP8bNXPcWNxXzCHozor4cEQBLkEqTYCZcasurQVxva3pffuJpk6fUWHjCgsAKkkjEMuVSTAuKaE",
  "key17": "41HWZ49FnmhCmnffNJ4GEqhWubPWw9Wr5KSAqDJfnkZPYMQZiEW5N1J5Hs6GsD8v5G8sjMnk3EJkXrekviLbWWA7",
  "key18": "3dnbkD1Gu14nJADYDFohzttBMYLZvJbQKsjA1vf8nQtQuq47JPe3QEcbtwsVs4jfZZcSjbD73dMeGfDBtUWGKcCs",
  "key19": "2vfKYNoFKKYPJAHbvUEFczFYf554XpHq5sJFaS1iaUZWqjX6FeKuHEDvP4g2NyZGicPKqX4XTXmt9RBTJ3jz15i",
  "key20": "3nad5KdmyQFJtd7zUKJ2bXAuW5sXun2xA4MLXX4nhDZiZogx9pmyMGa2bNPFqVCiw3n1WezWsgPh5d9hrA9AGjxK",
  "key21": "31EYVjAMBCxbekJfWh7SjrAQ2P8FswppYfjKVTMD13WHZrVQ18Ef8ShGvYpammhb4Nnm7uiQqWL3ZifA6iCAothp",
  "key22": "265HzRCgWjjv1XzznXVvm7vHxkt4YYFKsLuLZgKm5mJCPrNRGK37Bq1Kf5vUQg1K4NHoV1mfCpJUiiEsP6JbwMmW",
  "key23": "3FBzcbUyc3o2JZCgdFByfAKSoARdp6apki27MhKFVCTLrC5gXHbCXaboyCfzty2wvxYy7J9f98YzcDcG9ADSC9Ai",
  "key24": "5X1rJGhMXTbH4XiKseUWVDUaEyVjvjUQM5dCmDpKU1QDNdtgqErftXfkr3644jpeDVQqWQzFxxzjRhWCjeJJXfmq",
  "key25": "23sXWmgb5pLf8YRX2dgqY1oWqEpsr8kSaat7WM2QcA4YZtCohSbVxG3QkFhUZ6gn1tNpunu2BinAxkUTZe5sguVx",
  "key26": "3WjVRR2xf5RUJub2Af1DwYMwRT6iAbDgmjzmbJnLDB2TjEcsvgttmJ6xRqU3e217L4c4v9PSPx5m6PM3itAyZpTE",
  "key27": "4Gh2DfRqNfDA4abtqqfx9dkFDZkGWiwcU3w72uQK7MfgR7mALPFgNbkuPdk35CKbGWq1gvyEPhYzdGqQuoWbCCBp",
  "key28": "24avCvLgCtYFk6EpmDDpTqMNU5VDSsiWdTxLzchfKBrd7sJuDKnbL1P5avu3EWCvH5QNFjUhfUC1cd4PRfRu9KLp",
  "key29": "3bxqpNp7yHD3QvYFrvVD5aj4YqVXyaxwTjUA8AmEPYELHgHBiEx3HUQRayMByD9G1JituMnrFoJbTYADigCdXHBD",
  "key30": "5E7gQ5WU3ySaR4PY7jmEvUFUFZTZcoTsFJe1uxhxAHdXhVBnxSfe7h3Y91JoCrRJxRWQQEfeV2aUU573avS9BMQE",
  "key31": "vw3ESajYMeTPCRSxvV8nGYZa4B4VtWR6MnbYs2Hre8wHW48TnXoHAM7agpzj6XuCYEmJbdsZQFA8ApM9SQXBqZV",
  "key32": "5SEuRTgw4X74ViJZgCHsQrU3KDxnaWvDNb4T29RmXgWzE5FapL5242nkC3eEQaA4GE37ktCsybFfQk87WsATRAws",
  "key33": "5XxNCSJoBLfBxwwjMGdphCnyWeC9nbE6cKdEZBSSPx1cGEWB1hVrnJJ7NuAwkGtPKVi1rPMCfcRq6qLa1hxnBtS5",
  "key34": "7vxZ99XoAQRjcAsdZQxcyESHFGE1yVXasd1Q2K3dd6LbiK7PX6GiGtk6qdbg6oYE1aYebcMh9aKce6xRAACfBtk",
  "key35": "5DEbDEnMy15cDAGBC1KdcTusEUZHWkvqibMHh6s2CiBwyjhv8b1RCW6RvqJQsFBd8xcSrbQAwkpzc3pvSKVujKBC",
  "key36": "oF7XjCrQxSShNfyuL7qEzjfDgwnG3Y8JWRiecorNoU7DumgyfPRsaihD1bzNT5zdTPDDBRQYGWq68WUEFt9sz5o",
  "key37": "4qRHUU3pS91WwD7ZzQsmJeGScqHL3WhHgRHNEwciCxewUPkH59WD487GBHuodB1WNBQe8PtWdDTyG1eYF2Mh4ijR",
  "key38": "2bFiNRSbGPCfYx53q4u7fo8r4hJgaRzbZApWvCy4ZLmCXo5FArx969x8mQgGuMxg4mh5YcS3eYWkyw5KjzozjFRT",
  "key39": "4T9qP5JmJ1nyre5JPDVWSQgPqTeyV3RHWsP3U37Bz62rdUaS2uk899V1FxSKCCNmr9QFyhxJTLEFVhhdto3kLBFa"
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
