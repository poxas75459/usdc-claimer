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
    "3quWiiH1sxXz7zCkvuSS7zcpW3b2NBnpbJAQRo933cdee8nu7FGSdGoJhfH3L37Zu8ARJhTRp5hFUhukyFiTtKju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XiXZqpuqbC4qR7xq9UMVwmLYsw98SsH2U4wCNUejXL8rh9zom5SMMraWQAPAW7Yb57PYUJ4RSD96TiNqDJ6e6Nh",
  "key1": "3fDynFx9TCbcJ9Z3qp7bMKxZ53w4DP6tdBzywvD4hKa6nakdiSqSYvLQCWZhCuepQvx8QHYTqdtM2semQDN18aLV",
  "key2": "2gWmHZ4Sg8vMW9cJ4W1bo1XN6Udddnmp9JZNL8fQRLTfSBm6yYW6onCkVVrLxvU9HvtaxWi8B2koHWeu8P8wbEcj",
  "key3": "5ExhrU4ABM6ksUbFgaGuPp5cNmiEDBouQEF6dVeKtnjY9doWKfKub9AbntCr7vBuxKM8ambWacwWmzqDkGT7upZY",
  "key4": "3RgRFzqyGGDsjerJ1LAgs2qBt3Dree3YLJPZLdszT9KJbNV9TAJ8WBA6m9s7Hvmh6AspBtuZYEobF4cjLosWbMoc",
  "key5": "2tHVefWmQvCanJBh35q5nTNwnvcoEh5RsvYvgeCz6XQFepra4NHxFCVQx13gF37JYbet4xL7W9JSdJ4zbSh5NxLc",
  "key6": "2WPURVDdcaH1qHUXR4P3TFt8B4Nnz8MqDwt4WqE9dDGv3zvLYk9BSQAHsPZJi1s9zEB2ZqD5GVNuMsiPePEunTyW",
  "key7": "4ffLJeUfnKh2vHGTg18BpC4jKrWwGF1pApGkfSbKJr89zMGQmSJEFXqJ5z2Sv18MstKgnbLeF5gxQLrxzNvkZBNK",
  "key8": "28uo1d1A3BbvL8cJ1xuTBMUUxzTHdvHZtZUDu39ZERYUhuw7iXS81DoKmmYeHk6iGTuAdXvgpRJXWU6iZnwFf2p9",
  "key9": "2Mz5WLvY4ogqGajeF6Gmr9ziryeuxJrQWMSsX6xvG8KRxZy9dwLN3fJtoESHHUUwhGMo59yWezQSyqc5m9GBimfV",
  "key10": "4K2ZYxCkbqMjeR3Nnx34PVyVa1heFbF7363qvpR9yL3xsiMNzL7wNMcrcc6KiqT6xMTM1GPTPcqVDeyFTEAbp6TH",
  "key11": "5FX6KyQGApRn23CXmAm6ERfb3gLVDnFozPvgFvvcn7PXE3uqw2eXz5sMrJyVLxJo2NWBRrVAg6VK22G5nixoxD9u",
  "key12": "3sQH5AhaptYbnWWBK1uPK6EYKyh1S4gtKKwj9zmRqToNraZB423Hce4zZWqRCDiAysKscmwm7sQvNXyG5o4GQhK6",
  "key13": "3Gy2TArsyh8ybRmWUBLMoEQcxcbktRopn9hceL19vDkuQWzzFE8r7nzeGp4kZkhw3Smazqt4nEJSxEq7Bs97Y3QW",
  "key14": "3GD8Ef8VzmBNTCyEE34qSrbZdNJTZt2hqBHV9Y69AyuHhtvL6RAWgZQhU9gvvNhHtjA9XFMp3eUfFkaoHiLrv5Y8",
  "key15": "4x3BEbBw2W2xgzJNeqFawWkuFBxC29phSSB67z6t2LLtwGLLVKgeWFtTVmnKSdTDcTYt9V1e1BFJTs4ugHbpCkmq",
  "key16": "5N6DPLNZzu9VkXWd6ghqXvtRA3pdyondt5vCDpYj7uFLXx3pCyFPePwsYiPXmaaR4eQCwur8yNVzuLRpEqvE44BH",
  "key17": "3QDYziStzCvbGJ9TQGXFx3NCuYEjD1Xm8Mm33DtvwntM8b5G8bpDdszxHcHpjEXWcAdLBUuxufvuckj67rG5dq9a",
  "key18": "5ksrdEXu4rL3t9L73oSqqCbEY8GmPtUv4AN1c8CL7AK4yFvh8B5t6VMytqcoXteK2YucZq6RiiLZgnd8kP1nT1rZ",
  "key19": "zvCUPiNwBk9bSMorgpuVurdXC1iJramZqLKterDMbTT4YdTGChxegL2n77pfo8rLdmw7x74Rgd7rWVmHTR4DFMW",
  "key20": "5xTsqx6K1xVdtXSVrr3JNENbLbT1Di3hx7JK8nY9ZgAk9U6wrXCBriPvR3AKD67APXCmizKjDyTc3BUa6ZYQYvyM",
  "key21": "5io7HBb5uwbmUES6oJCaQr9DcPSMRuFYq2WaQML1ytcgaF2bCRXHpFakBBv3zUMVLRDXMG2Bps9PXNuJFQEtehYE",
  "key22": "4ViriELJTmR5DSmZM2H5PU2avEsJkCk7i2TN5dULyfLHiE5NPBw8pcerr4a3Cx9933y5X1RRAH1YP2MApbsrbMcG",
  "key23": "ia7Tr1oA3Q7DW27Z6YfCHBvRsACnWjTVR9RJqwhWL5AsxQbJX48n8sDDG1KGEV4sE3FbhxTdRSW2LRrULwFSqvS",
  "key24": "4nnd6uc7Yg7tMWjixKQdnFMwWjCnoFZqZAihXrKGoFjxa25G75j3mHuVbcrjedESG7qg8vAePvRw1yC7ZWpMRkvG",
  "key25": "24YMP4Ux3ofosyG8xxLtRu1GeCAj1ekKEYUGXdhvkpsgnkNg2bUh9nhb9cv4W6BpuHu7v8utoYmzka3dpKNEFBdC",
  "key26": "29bxyp3RHCvsoTtEYmwSSWKoggxmBieLYhcBMQ737bFfJhR2eD2PQbzjS6nUPkKP1G9JcpmXRd2ekFoDTYMnD194",
  "key27": "2TCxGhSuGK7FFN4YgryxaciGN7tib2nB8j3zaUCDWWfQipTm5J67YLHkS7HCTiRJFy7wAVVWcxps4a5UThUMsqkt",
  "key28": "3T4xucF3fWA9T5Y6q7LEhHRF87rtftFVT7s8uqPd6EbCrgPaXV6c5kYY6jSnipH2ZqWCoeFjaruPknsQVDaafBBA",
  "key29": "5usf72eKxgRcdumvQPxazmRSnBpb5bh5yL1aN2NEbSLDGebvjsnfbFvFHa1GsAzJvRFinhgBYffEDf6M2phD1394",
  "key30": "5wma2EdXKC78YsWB9NSjpewd71bFE5MRcnyPEdWFgdU6mNdxLnFJwFxwFeaDgaF1BhyAGFSv64ojWa4G37vRRfyM",
  "key31": "4QEUjpKT54gpTAchGuLTKPFYuU7qYJq5Ln1Ykvte9JWf5ZPfiHvEcXygTqiEvQ87VMh9jAMq84cS6LHPhgxT4Vue",
  "key32": "2URyJnAh38VPT749vZkgp8oWwuxJEq4cBC4sZveqmhRYczkuApGP8E7dCBititKjpw4pJEdNbEF9xPB8gcYykhPP",
  "key33": "3GBPjm9SifBsZcQVwYUKMUpBDxMpPsdYGkHapRKNrBczPDGqkqwtrXD6xgg72RkRMu3DSM3b97gRMx1afxu9Hxsy",
  "key34": "hgNt9v6qkx2RGgYdPNf2YjwrPqZCAYzUWA8PqjZqvtCotM7LeXjJfBM8CzCeAm5LNsChqGRgiDQf6dfPN8qffXE",
  "key35": "26fc9QvYfCXxdzJybdtVeYvnFyN72GBJuEEJKQvPPsUtP1CU8FpUFg5WeQGhsq3HzuibEepfe218RknbDboUdA4c"
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
