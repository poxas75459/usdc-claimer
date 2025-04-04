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
    "3pmTXRsUdhwE946jMAoKU7W62NkqJw58pQxPsMaja6oxbkmf3psdcHvC58D8RNbpWVcKZdZ29eFBX2vGxDt3czEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCNqb4hKsbSp3GDYz4Whp8TPVGpViHgdAdBcGtZKu9PrAUruZuYsw3RyiLuiuxWxtqjK7vt9XjVXS92C5n2JhwH",
  "key1": "3AEKqHFWbep7Q98ivsPbo4ochpzYd97hLKNwYWGcHtHcq7WCbU5rwjqdtFvRarpLzQ9nJfncfuv3WBQsmdZBXpNm",
  "key2": "5aoBuuAvZV6Sex5cnz8w1eGAPDujrSRtEUqe14Y6QjnswKdhGnkF59X1PumB8cgLvJyAg5Bykvfq2mnD6gZ6r8rx",
  "key3": "3b9cuvKjEfkWkjTjAYSSMb3katV411WGHrBVEmcRHfpiNx3PnihbJtSigvJQEn5KZjXFfYixxVs4ipgjZWf8X7Tc",
  "key4": "34xiJ3WwBe6smeDDiNVbJkLsGzL8nxZUzypj74kKSfgRmnGAWocdZKDHiqruFdeSBH14UirZinFTS2vpZBUyuDTG",
  "key5": "eTJ3Rb5PtuvbP1shqKJ6wVTw7jmZj23h9focfy9zoZwRhNZQ3TN79RA4buEMRFPQ8f8Kox4HeR44Ls3uVonoz1a",
  "key6": "4Eo9vmAum9iGNi3mdfjP9Hn7q1bohhhGUctJCkmKbXzpSkgisNQsrc5tv7HnYcFnDnpcGfsSkyZTGgu8duGohikS",
  "key7": "REVesVgh53gXGYhLhzSFjLvpAtZPnCpCixmLWGcN8Nz2Yx2mDJtaBASDNuXhNpUVPXQs5F8KJhPTymhD3EdwGJY",
  "key8": "2zMjFS2hFUGy4GzdQmWXUSqbhDKmhis7nN1K1AxFFpywCYfPSW9GhAxqgqUhnDMWyuFtiZikmgnhs7HLSKEcogpT",
  "key9": "4RHBHreVQZfDnHyhQjaPLu7pzXE7khJT4iPx8eLjjzjkhhQ6BRxQQXgwZ4zhkYcJ8eypvDL33UJxzETKJDYibutn",
  "key10": "4DuiLe7vokkiczLBxy34Y8HA5ANa78gGwPrLSxnwKtirfz7wNa6VfDFf87mcXG4mwFYmgLF2nmiJgLvBbyvamrXj",
  "key11": "XPPgSNszNYCgwFTm9gEChaYa2FshhY3P1Y2yTV8ATaW6jYWSzrXFg4Zw6EXY2GdhLNycYPXVTErqsBc3svqCuKc",
  "key12": "XMxzZhz9B764xoaFEYieyMbC54uJ2iZY6Lm7zfetknqnMTTNKxt1g9QUsyXUwgJqiFKEeBCZ4G6rr9pA3VpxLHa",
  "key13": "35XbjcMrtY4cppGK2z4KdDJkwgXHx2ZCCu2M7VdtPNnuhj276VT4zDzBDGm8PjkJaPrPMWBKNYkSLq9o4GU23mTN",
  "key14": "2WC8zKLUtnQucEnz8T1wFevvTVHprXofvemTDLsP5avysiNP1syUmwxDtdLd6tn55ptSnuytppqkG5KFcTpMWH8x",
  "key15": "2hkspp11xTtEinzqETanrZjYiD16iyKp5vuxesJHF8kGQeBroodz9Qzhc8i9Fy3JpDKw5dMM9rtRtfgiQpNeByNW",
  "key16": "44kcbF5GxvWV9DpPZiwbMwPFrayjDPmy1NPGbsEbh4cvNyc9K8NaHWdi1psgcRQWnJBAd7P7LD41hrtpMjv5GJuH",
  "key17": "VEifYvbsHmct7APzrZRMmgHrTZ9SrR27PSxhayZYFpevptUZQEhp7q6Ptf7TrNgYsu5yNykb1ThsevJunwEmsj7",
  "key18": "3eXnUeNqej5nc3F1ydRSSfUvgxoGQV7kSLWUwnq9vNZSFuVZkV2Y8LxQowf3GQ6Lhr7Uv1py6iX2on5uJC5dzqGA",
  "key19": "3WhMsaNLn9X4pW2E5S6vww2U32Ha4tshEyWP1DCEtchoogAKFXnHwvuDLwgoLiMEKbT1YqxTYLFtWsv23j2G1iJr",
  "key20": "5bNMcpkFJh2YtsCsJigP3BFqp4uDYtpP3ASNqm4SDSbbxEnMFULksBEb2vtX9oZr97SM7XmZh7FrxaCoiGnAKxHG",
  "key21": "XNFL1vCxsmU2HV5jXcu9pjtvDDManDx1twzvJTEE7ZwAT4bMsAfCHCJSy12foRAEfxFzbmVVUpkwu2KGmQw45DA",
  "key22": "qfNT2grt683XtPGgFTZEKNoGBoD9STVLVZtdWFnvzpC9JmVRPNfdhuT2TF6n7sPZiRZDZ3tN8vecwTLqYqc5Fr1",
  "key23": "nxVdRXJ25YHftxJmHGZMvEWgoQzgBrRsedMa5cgyu31cyCbSneU4gmRoobScRbg9PZsUF6g23gs4dZuy2J6hZJi",
  "key24": "2mxMxKHXmowhZTfMVzZR9S9JuoA16y8MsSTGzyjU9hVKAZdMhYLR8E1vTA7iSnbMJnEutRa8PaU7dTu5xTPdzFph",
  "key25": "44vqQKbg6sFiHc5tqr6SJALaREMSMi1PG8BRxq4qkzE9JX77XhG3UHDjRTDx8ErzPWyPnYrwStEhJkwRoV8qzEcp",
  "key26": "2LSsRbo18LrNfYfS2SrBmjYwujV2x82CWt3L7msi3Xpyb2hiqZK9d9j4bXKUB2KWEmY1AX83Nag11BwYGgPZdgjh",
  "key27": "4X8WpHUkrB2qcHtmw29nH9Jrs7qS3eBJKRgBcjNz9GMBbirgTEhiCBBTjY7rEkVGWoaFZ3x8XJzeZr3Q4PnjrGqZ",
  "key28": "2LjUaqJCrGBYEmrQe9ptRuavdoGxNwtM52Lm4P2nW2rygrjnPsqgVRMPsrTCDDBwak1b1md6AtURcVLzVgsc5Zu4",
  "key29": "N8qvFwkFTG1EES2yGD6NdL1ymPQ2PMJM8F5oWu6gX5kKqNxEDpyKHe6UWvidEK6Dx9MKB47nSNNYKA3rvwHn2Jg",
  "key30": "5GzHj3oyc64K27owiYoML9PaDcVmsh2ToFwmga4aik1gDmLsj6g83GL3kyrBJZpRNa4eQhQsddcb42NY7y5qrMq",
  "key31": "2CQEy2ZiG5cMRihotqRHcvWE3rqj1s61LFTUiH4KQAvDHttz12P8JbdYJgnsZV9s25KBHDcxa8Nwd3bXkhuVMrA2",
  "key32": "2zN4UzQdJzycidNTRJWUNKyFXRTgiPwxsrF9fEYHgQWfw3qFMx4WVSLxz4zYFEBFUv53gLTmpUR5kYivDiGGjj6E",
  "key33": "63ykgEBJ28knWyZSXAk5xpMYs1cKiYzbamFHx1C3SZPBcAT3SaQe2Buu6A9j95MouuNHrNXd2LWUku9ZNv9Y7vZU",
  "key34": "53UTq1d8HQCRhqD54HM4vgbkU5iAT6rEGbj8Ko84Dgdc2y5gAttJPmTpKuixdMYN2vYUYYBaH3G4qG4jTk2jvnrP",
  "key35": "WtmygMU12oSSQMtJePXWpqQcmQY6TNLp4qX3wE3L7tp92fEerhvGJScFBuTPvAz4Rb5RJoAf2SqaSbRub9unHuz",
  "key36": "467M3wLFcTKVN7ccobTkwSHKZeqJYsUcEqG3ZiK9qteWqpZ9WNTRbyMwzLRcxeY9NMVa3Vjp319PTC6uAYACU3Dq"
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
