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
    "2kggmhEWDKjC3kA1nFDHTBuXWUf7xoKWiNY8vE63hrqoHmYRz19UBCuXTV3jYYUU79uqYxrtXtn8T6PXCxbK1yhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K7r8qMH1r5XVTBzZaqV5AUL2fsHYps2hnPa9Hd74Ye3un52u6oeMSU4yATMwwuj3dTjMSH2aqYbudy91YYbwTa4",
  "key1": "2GF8Y5YGAU5ZRT8P3hNZn8g5vx5BdJKAgcZJXABfhBZk2Ca1euryyT87fYChHL9ZegpMvmQjA91QB9WTUKp5fD4L",
  "key2": "rHYjVwb8YuEmP6TNdBffRvpu8hqRtHNAL2JBGd4UPi9vCLMr4hAq9XSE2jr9YgpR7eoVrkH2fPrY3jCyz6cMuxo",
  "key3": "5zjj9zebzYgaQ1wnXkEPXyUAGucUGbTzU6EjZ5oMZYdcHmN9tCtQgdscfDdTjoakia2iNacZmGdKeor72E1NuSw4",
  "key4": "5h9FAL9V2uP53RdE4HraWPer4UegqjUCRYGjNWVyEYEZoEo6FEHvzuCv91H7x5kD3FeKwRTzbWkqZzznPg74Yt4u",
  "key5": "nKAgYxTp9XQ7c12YknysAdh1dHEmWQ7zCRGxe6tyntuehLm3Y2kLaZX4814RKvQm7DHtpGHSmP3FCKFAi2RKYou",
  "key6": "5RezcV2ZH8NZgcatPBdbqGsyD3g8vRMxLdCR3tkaq8hRscXiYpYs7G2AcdFex7duFoNkw4ssPwe1BtPDyQrk4oyh",
  "key7": "2RH9RrJmJiPvoDCEicd3Gdhea2Hj45DsCsrkiTvZV4XYcgxGdzuK5Dgyv7fUcExH6PTn5XtrEQgHPnoXeuRtWCnj",
  "key8": "5TWwp5dQYJ1GppAA1BtXyBBYPR1XwgZ7wXYgoPcp3NQhrshuJRzSXVfw8UvAieVS6Jq789VqhX9yK92NnTjfGPZo",
  "key9": "5stVcCLG3Wiw7mEGBJGcW7j7Q4u5dYueBCcuVxGNbKoNkUwvxPhxFve8JHVRCBpSL3DR7uF4NqiSe3s5TDNRMGUT",
  "key10": "3zWfes3TPrV2mnVGZo7CEf8WxRYqQXo2zCtoTiNCU14y5jnjkev7tPofegPY5ZfLPU1xUk5fZqqs9cWLJbvbijhB",
  "key11": "d7sSHuvUDXJwXi8sqyEdHh3tgVN8JMD8LqehQoCfcNjKujUa8UvnvVmHZFoQ2MR275Xkpov2WGRLKEQm1pfofjH",
  "key12": "5vhnwSLFsDT6w43vs2b47e7XXLTefFPdm4V9eHfNw2TUVmeyixnQ65dEWyAq9WWSVjN9CMgFrBEug92EFpjrK9dA",
  "key13": "47U35secKwUfi2ci1JUDS7mfJQ8o3JCZcyGuyM3nSNTNF2A9bs3qSYgdsqy7pfyhX1qym4udS4JEWvASSuXcEQ2K",
  "key14": "3U2X8B9aZdCWGJo3kGd33iQfupZaLoMHxdrdUVG8rG1jAtHAPEnyycwcBpuJ5gmxTvUyexvu57H2EWYHVMiTdBdW",
  "key15": "3D3E4R1fn4fPDRZagFqcZHhVvhT2BRNGmhBrVWX1dZrWecTTyVa7MkDfDGqMTwFiuHkEmiGcBiNatYifdmQ8iVRK",
  "key16": "4iHH8P6fuJyXoRprYTKYxgRgCdAmUiJg78LWMDjLDMET5WyJnhtdR7N8BwYxk6NuzvWh9cYNfeWyQz6cnzDByLUG",
  "key17": "5p689AfHpspUwFhwhE4c1jbc257q16sG3FZ87KSLC4rAxSaUfpcgjFeqBJq7Dg1NhxfGQ6TkQzYDe6JBimArjpss",
  "key18": "3XmLciyNopf4qwjGKe26aJncqKTsJ1hbHscB8bESPN9zzei23cF2E3jnrd2NxxZkqNaFftm3bSzQBU7haAooAkcX",
  "key19": "3BHEzyx9N26vwu53vnzS13qsx5RjR2gnXLm4Giz2nYzbZS9vcdDDxGcpWdMWHF729nRSTua35rMuLqnm9ihHwGYH",
  "key20": "4RaXYS1Dmg6QtZe3SLmCrZUuDPJDLQzRh6L3JyDQzgvJcDvGYBUvSKvc8efVBJARX4TBBZuzeBPuQr4VsP8wFUX",
  "key21": "5GvpuRCAwSZuLb4hcxHxWoef1D12C4stbUcsjRq9UJHQcuUxWRg6B6Pr44NYWCbPWx8FJ7DkGxE8bA112sscnuy2",
  "key22": "2CyniES1Vq5TsDozc5sByzjdjTvyLipFVHWHYeTkRkHt7M6FyCkjbLbypb1QGWeFrsE7wE359q6zRzzUdJkjVmnC",
  "key23": "39TQBzwQD7Y6aGQBXw2f6D1vC5vpdct4EUjnttVrmmtUbHTPT2vo5ZxCxdnpAgegSC8vYomuYikr5stHnL3cucLm",
  "key24": "2AyCNMrfhkDDSKWgwJkeHotNTEEVCeKfHCiudGdAxS5qSQdX675WoN6r4kgTZDnE8YRiohUWWJxM7Be1JMysZ7Gk",
  "key25": "XkLFbsQBrQ453mRUSqJrCopyohbf7uTnKEs8CaUkuV1XqPChoXBZueUx2obFNQ78YCiH6hVHPqT4H6DC4ZrQdtw",
  "key26": "4P75SxTMGFqwWBtBTnYhgV11Mk2J1otSsrrRzj7MFraK4XZE31v14r3dUmeS1RDXr7iP8knJocBLJzcE7Mtduc1W",
  "key27": "5kCxgtAcgB72K5fX1qd4973WEW6SUp5BZ62cE4yLd8K6sYTCWfUxZFyzG65brNw44ptJNnhLNzHxNfTidUBNLkVL",
  "key28": "3nDQJPzvozugphz4jbDDZQQ9UT8E8EUMjHNyy3S59UEJKJG7sUx85NNb2kpuoaPXC2w4zdpPpD8y9bA1yCLfLG5w",
  "key29": "4DJQQ8tXnhtoNyPRataVmejUz3YuiCaQKdu4n5CSTMSiVKQxNczHenaBLB4ku1pT3VGjL4Gmi2Za53i4YfsfQgKo",
  "key30": "5x8xbEMCPn25niTcEFP8UAwo51Gt77GdGqXqoWjK7Xr1yjZ8essKvoTTdMnY3s29PjvWj5fbNGk15FpGzMsx27mT",
  "key31": "2azWSQnYnNk7qfYMEFhA8QuBT6cdGvm928gvcyuguff8Z389fLFvMdaY2StbqZkXaCy2TVmHGBYA4Q6rHiwFp4oP",
  "key32": "5Qwe9E52uFJ6a8PF4h2CMgUsxQ4cKsABZFgVLzhvWfwdB5ypqVghdPoyX9TDCDorqzKnj3wNnhpS9bAVMKjUwB3X",
  "key33": "3ymDHc5BR3YzD3KHgAg5Rfp54VfipS11TpgEgbtq5kcyNRspYBJQxdc3LvsgPbgztFFpztxtKtJ4EdNC5ZyRWozw",
  "key34": "5VkZS2BW2xHYDnj17iWEp7tDh8Aw8W9a1ZziLgB5HXozhYHyRC7ufdm9VWt78nfvs87X6gwhX8569RqyTbKj6sSK",
  "key35": "u3NqU8qqv6JZFhdciKJJ9oq2u7h3WoZeN6gdFW3szTSjMMTVaxMALFQLBD6HHrB2r2YegJvQRTAGbsFZURSACtB",
  "key36": "23noW1dnq4MVm9ttobjT6TFoUxh8YvAf9gRwcjJGHZ2JyyLYsN4eHRBddq9XymmBCE5JMFmPo4AByGTbLvL15bNE",
  "key37": "4NDp9w3dSpJBpdc74A7PwMM5eeCqfwAmacGdodHqKBkN7GnmpHRhXj2aHqza6YQF3eM8JdmWauyHEm6ZsJtE8TrY",
  "key38": "32WEr6D4zZYqDXfLUxSpB36V9CMp1BShhaEHgezLAyXxDAYiDeTXTfyGfxCDox2E1FtcPK14k4QV2y2sabqUR5ZS",
  "key39": "sLFcvnHW9eYgv4UNSdGuTVmxRceA6mHs5pWd5mQ9xxumRpgVws7ybMfznZpxQaYW2E1CiVGzPtm5524Ah62JN1L",
  "key40": "2pBn7pNiL2Hi9XEh1yc3PikQ7SiMn6iYdCsWitwtoGPMtyQJV9drCjYVHtZcoByzRAnBTtLwEbyVsJoetV8is5x",
  "key41": "4fYdFc4vjC3x7ZMqqzWGkZoNfgCHxDJB2Wr7kMzrxGgVfeJY9dhJa5qiggN9ovhr5KDTPe4NurY4bF3SrG1DZgqF",
  "key42": "5avKMvH6bqm8Mb9BBVkHA7QUBocz1U7gsDCpGmxQ9fkAjGLh97yasQ6mrLqr6ruXDXhWNfpvLY9XKvf4iX2i5NM8",
  "key43": "4JUzt1cDR8xU5uipxhUX8opBbJHK4BxcGf626G87e8BRqrLP7eEisoiCo9G1o5r4pMKGTaTvzaeG28T7nQtme7F1",
  "key44": "3a82j5FFzw6WRMTkmVAT3SMht2UF68iH7Hp7ehFwtq5gDbKujg9N78UtTxpAYhYzmmtPsahgvKGxq4opSJEkBFE4",
  "key45": "3h3XNLhrc9iF2p7r2BjZD84pn7XP9oBybULLHN8Cg2zVgiWf1XbYNirsGS9JBPaPqh2QmqPHBB7d1Kc2b9Nt1JZx",
  "key46": "4gbz5mkmdk9ZQNrYQyxCCKbzr85uDrmkrHuWhubxM6BresqCgyt5jFxbuDGqjYC7MSr8ccgjWotDkrKc7m7eMExK",
  "key47": "2smmj4Bx6Pu8Sna3N166bmGKkDAHquXybi4J3Js53WNJRT2pwkiWGKfWAPn6jtek5K2ohREreJohd4W4qrJuLZZ1",
  "key48": "4BbZ9GbPo4iYgpWfoLGgsfxnyZUcEv5gjPkHo9ZtisUF4NFhrP3ZX8UXdJ49W43qUR3dt1PQYnEE1RMM4FJfNnjc"
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
