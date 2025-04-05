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
    "5puiB9i9CVmte7kiGv6JpbGpPMcvbQSDDn4gTuHdi2Aq4PrhooW9F1tAvZ9V8SBJLssRuc7N56yqrFwajQspwFT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i1fwSoMyTxRxwRhCgFxZ6H9YqQuTNLPtQR5XRCjFF4GCCJ5zLa7E5SCzaC87c65ajzUwPXVZEsPJdR8SYFL3Fem",
  "key1": "3JNbqbiNkGt21REaSwzu1TqYqRkYKV69nzdbuYM1KtwY1bbzfXquu9GKJSLxaVehkVfrSPjk1HCgs6KMP7WHEXQ2",
  "key2": "2SZ9x5nMDdZSbDxMxUtVVXtj2yHMhJMdQPGN58ynDFJzaMzvmPj5eQDM1huigGJ2p6s7LpBuZji2pg8wCCjsYtNk",
  "key3": "2LYwbdWLN6bKwGf9fqwVD6aau8XpsA348RWtb38nHkj98b6dFkzK777dmXgzqShJF6Am1nZPhSU8RNFAXYPTVDnE",
  "key4": "4imbdTbVF3BcWcSYMX7AY1DPeT3nygvEapoUdbdWaoapAfnFVXTRf1erS1mApxjeDm39XVPCbe3Tr1YPWp8Rm6BP",
  "key5": "2gU62Mr34oW6n7qk7RwC2qYTQesVmqaWPokN8gbYqPbPMsqUjHb6ccrATDwtj9ZgqSnhjSEX2muyFPxCm2PG6EDt",
  "key6": "d9p5f7NVEzbVYT6kkX7VDuCLpEkNWhFKCfT9QiYhTf7EnFvnfxazWWypKoNg19VgEDpWgh3bc26NFfUPFMXQC5q",
  "key7": "2cU1iqrpNwin8STbd56KAPdr7hsvSXamxLoxuAbxVWbS3SkBdoNM5nbGRLScu11HyGgC9TFNSYd2qobSMbvHHAYd",
  "key8": "3hheZyWYfgVbrFS2zLqCFPLkcQ6jjMiuW7fVLtXiK4JV2nKdV3PvqCs6MYZtkmBMaWhihzfmR9gwHDSbkLKGjEKy",
  "key9": "4LeUSfDjuKMMMmCB3Ai7sziqUKGsj5cBEEXZZ89c2frbuv8gMjdypa1cCFAchU5ka5KK7kWysvGvPf3GJWez3Yuu",
  "key10": "2WqzTLD8W4CmawVtik5AyAk9PLaFbMP67BYeZFFhNyiq7upPbNWxmbmM8e6eF874UgHJsuKhTL4DtBndCMq2a4xw",
  "key11": "4iSZxuzwuDPX6gzyBjgBR5qks4kUcLZiQotDX99kXZ6ee2uFmFKx9Q95NsPN3ZDfCJGHRCafbpybRKvSmsyTiR6e",
  "key12": "4dp5fhRUbtre9muavp3kVXvCL6r5DKTbbRgLLPv5bhM3ZfFE2nHmB7X8mjmLap4J23DSFBcA2wFCAugEuBhpkmaN",
  "key13": "21F3UU9LXCw7f5uNQxgEXFP4ii1XGnaRAuEjbKwQXdCgVpiic73tCym5uk1FnzmxapoGfrHGbn9qWoPABZRkvfQp",
  "key14": "4K5MhM7buFuPTLuBurFTVS6gETTPNPQw5ZiPzfGvZmKV3CL5yfMpsdEMfqbQ3svZBiXnx8xRKmGyaU6p7QN4J7ZC",
  "key15": "34pSyZCazte4xTciA9TDMosA1kojVekDaza77NS3jKvUNGn14BkMnHPRFTSRHePryxqBMga5CdXHAVNW1qLaS2Kh",
  "key16": "3X1vAUfxwuqSfYLnrBLGqzY9W8v3vGZQRCZbJQ2sK7YoiQzGh496VLKXjMYrQpEgps2K5ZCRVmD9vZzxheb3gwMH",
  "key17": "3y9hosqJXqy7Fpa7gymsprZMLC4WjTdsXiHEQ8KRRJ3YF8NNdkFu4zdoZUTbP27igS3TCbhX9v2R6RN3wH9tUiLR",
  "key18": "4hJMSgfzcNDFNtHM7qKhoMdetWNYrMwQCiv6PHezEGqtc64VxA5Jp4Lf4xRodakQ1Etsi8gPqrfWyqNmnuqWbgdS",
  "key19": "87Q1xsbGS5HBo2fRnRNDwU4SgmmpWUCH2AMKNevmokuqG56PCVrKyQaRGjfogSGT5mJua1Ei9W5Mmne8s6oxVWG",
  "key20": "5r8kqGzVV3ejZG31JyMoC6toqpAUz6eGAFRvNWsLaeJUMjzVs6DUQM9EQYTprZNwSRXA5S5TQJ6PxHWpmg72cv9B",
  "key21": "246sWykqXva7cP1pDx3qpWKX7PoE22iwsxi3Fm4LW7WT8KuW5FJ9CeDyxjEhxoWz3fCW1dSDCivV5ytyhvPSXCkf",
  "key22": "5DQfr1MThZAHTCLWgD5koBX5ZZEUiQuJWbnt78n3roxrfxWquWCaSNNEqKphwziSMjJBYXWMx6hjDzSg7vT7Lz1K",
  "key23": "53d1A3u3biLvnuF86yCmjjHDi2McyLdcy3TX1uT2QDLCXRV8vQBpawLGTPgEb6ZhLYDPpG7jQpnQfFfoabWSW5on",
  "key24": "4jXNFjL94oGXnGw6v2zeLBSzgWyEjKLbDKckRVTyrh5ugHJf5TsTsrLevMxevPE3NC84jhfo6YYVM6cp1Af4UVnG",
  "key25": "3fKeKQokJ7jPsaX6ochXzh1aGcpC5qjWecMxEoUCMxmtx18j3XSdwRPeT7UPiHdtgzvyixEZXaMV7gPfMoZpkbto",
  "key26": "3HLWiQWHobp9jVSwZY9fwVJTSKuRQpr9Dkw4rtM7yPNVPZADqQmJdkQkaY3pYW5J2W32E4Sk21NW9fhC4o4Cd2nx",
  "key27": "5raMqptzWJEn84MbQGCiHXPR9s47P3KVDLDzEoVw41ya5J6szGeL8uKzzPkSqHRXFcJSxGR2FXxvkRa37Sxo16Ki",
  "key28": "2Codu1jGMfRZXadokWAUXuGzoiVdv2HbssaKW8cPRezJT9QSGJ14ycTnSuTKFaah55s33apMLUcLX2CoBVaSCN2x",
  "key29": "4P79pDGx4cZZiuMHMiUrpkwbPYCB87Tp3ZnVp1zk1LqmNMQxDiY5wUG9mX4FUHBpShWdKduFKrNx3WpAuJ1p7LSt",
  "key30": "5LGpTiieZiPU9KTk8sr7q4nDi2qn6gD6wGEx8zgAeeh5muxRzNWccX5jN6QKfmKDHae31WmcgBytLR5T8ykPXA9i",
  "key31": "2SapzyapTVB9L1mqwQ9bRSKb9BvNyi3BYn2NVw89xZjgNzpQswxb2LzmLNHM4wgU4iaX6ssB2DV6Uy4FPPiFMoet",
  "key32": "3uVFPhtDvUD9xFpnWCsmeULsmuwYPMWPE7ZJV9X4hb4Ty1YRugxkSNUDYzJjufNP2u8XnjXMcUDAo1FJq1A3ae43",
  "key33": "355bFnMDzX3Aa2Zzo8T6CBEmTxsbrjZR6VyuRTYq38knSNxd14QGcTQrNNkXk44v2pfqtdfTi9NG8gFwCY8jy43j",
  "key34": "2JhYxXWkKrYbmoEZfmmjZome6JzzGMhjuLLB1YCx4tNqrWdg3hTLFZg53Hs4f98F4mmgYeBoddVS8s4HkiRaikKQ",
  "key35": "4erpS287doRvdyRC494xKvnnCi6EDZ9fjaQn4oK5wvN3J23t8jR7VnBvSYYAYkEqV2Ds7ZqMVuwEerwo3eBpug4e",
  "key36": "4PVRUPH7YVEzARbofktcntnMySAibcy2eHqREveMqVhNFk2WhZ883sM2Jou7hLdQGPiYJ4kUybxDFq7YCx5pbRCt",
  "key37": "3HEhZvV3cZiBiF2jwXm6cJC1mwskPjrP3ZDHU53wWpmFWPWzCWspam98td3B2JWK6uHAjCmREc1Uw3jfA2sWvPA3",
  "key38": "633GV97NhnarNtETjey3s3f14xZHCzX8fzRBdmASDLPrcH4A4uCA9cGsyDLz5ij1vRCWvMpenRft6EhC3yvAQTtf",
  "key39": "npvdMjD1Fy5oMozXYUVivhocv9QFYZ1VdYYB5oV6gZKdmrjTgj2aXgoypLtiLG9p4DuL8PvRGoKZz6kiSWfd7gC"
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
