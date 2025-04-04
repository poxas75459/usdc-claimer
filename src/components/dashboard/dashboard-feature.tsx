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
    "3kunfv6RducfC2VFXeXJ3qp8tB2qDGHFe3jXPUsr3n6BsLz2CByrVXSWRGtYafese5tt2sbooS6gimo43kCcbGWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJVLuvKWkLaquAnA88MXa8vCzr3HLNDLqCcD9K7D5zK3Y5cF7pXYwz45Cmz2EFmvfb2prhMZH2AEjrAazgszEid",
  "key1": "3LiNkXz4M6VZSNeab3MMWRJVC8An4xiLeXiC2w4DyjXY6psw75ZvnGS1gGqQ116wqTbVNGkDoGHpQd3dSH49XuRk",
  "key2": "4RwMZBS3dyKXxHYXUcicWALvA2eD67z9ScAVec5GaN1TVeibcB9e7ZWS8qFbg8qmmVGfCEfqr1cptdfD7ztxszbB",
  "key3": "QhjtqhkTy5VvSkw6WnSKzhiQx7efFD7GGb3ZZDzb8h4etzfi6Lby2Low1zNCsUx4z873Dj9oNtUaRVZLdoFDha2",
  "key4": "WRobsp1f3t9s4ZDwYuERVHvauuceMRsBjPzqNLmaLt3FEJz5yyCfnyecb2D83Yip5NsGdUxsXSdpUJhFuwTWreV",
  "key5": "4QbNsGtY7xrBrqBbYwANX88T3VLyBCdg7X7yrL4ABseDRobLCrp1ZqYT5uk8tZMCpa6s12mPPL1ejLFPfhQwnikx",
  "key6": "PJkDNXvhmTgtnudFur3PCeVMrVhopino5jF4fY1tsrPyJhriq16wXQdUhSThGCMcgcG8SaLrfgoK5RMAUv8oYV2",
  "key7": "3Kpv7njLarPzEUZJQRDWSX15Tyee9u4TYJKPA7zNrT339sMi3RP9D1H5CAQSYDbjFGtS6YJXRYdWttDt2tgK398B",
  "key8": "4H7uaWwxLkGEFo9SLLtYkyDYvAjREWsXvpjW7ppULgqFwrmhusXCjrcZATPRvY3aAj7R6auyYJ4m1etyY6xa4V1A",
  "key9": "2z8r4C38rNfAiDF4ToAPhJoK7pzvzQBytDwPRTRkm8gHqdyBciVA6JimbokgxxKYFBN2e9UTKWyhnoCwnBg8cqZU",
  "key10": "3NxeEWUiS5DLBvVBoBN8xx2YQbNRdB8u7vbKmaiKfT8tn2Xijm2npFktQCNFV2PE71xWfD9tUJ141ZBjaRM3q7qP",
  "key11": "521HBHtz4d1k6nkzzZ963PEaoiKXRjU3TynmnQi4otpmHVCUQWi5YnSsPrW3ayVRiDwFPpVaQpGJ7HQFP5XU2nLQ",
  "key12": "3g8HLXNGGQwcMZqKnPFhjD5XZyhaTp1pG9xKGRmY8gMh9aVfE8NN7UQj6hm6VQC2Ued5hWHvHfx3S3TDvWtYyCdJ",
  "key13": "BLzYMwTCjsPyAmVaAmgBddfsWrLVTSyN1XQNAgbWTUNJFiXvQsrhjsxAPnsbYo4URqCP9eNb2aBijia8exstJwV",
  "key14": "3kzVoKwp3rJXfBRRFuQjbhdzXdk6FyqfverbG6E9ha72ohB7CrUZXz7Kx4wgeoHUvH7biJy6v5iYQ5Jscg2sPuxm",
  "key15": "2psifS66RRVxfpZJPsbXxuAsMCmCzNbTdC135mcMAbtwhAPKJt6YD31nFzYu9qDHdceM4xBxJwCeZVRoCFEzArHF",
  "key16": "5j8Tv8YGoNUCMLGTG7cNq3qt8Y2diUQbVsF4ucKxwEwWjkzHYZ4hd2bj4EbRM3yTRj8zNUzcx7uLzZ7hQx4yNudF",
  "key17": "Jv827GMYpL7gLxkRdzFs5cZEA6Tnf4GhY22ihbaZh1SQ7Dou7amzgWUMB38RGDnand3fh63V8Ti55Cwb4FCoS2i",
  "key18": "2f6uA1gzUUzGq8UFqx4BEx2JusNwLZdB5XxMWQgqgx8C7YbK9ZC2fry2p3CtSbybsF8NmsfKHDGZyXJ8Sxdin4Eq",
  "key19": "2ajDkbVhFSZxvwEHNbX8RNswj6wuwxDNArq3JmA4Nvm8jxmpHBa16vogYat1Ee5WoVFQcsawWbVxdNT4obRApgq3",
  "key20": "3z94VpUsBDxEo4pTf3WP5KrtPpGpdWRGDf1NTufQAUemwZwXVuvyLTPH9vck81EMi5P6wjWBKHtjg2B6TgZQQDan",
  "key21": "4ozgUVfrijdM7DefYvMR2XaHcYY2f8KBuh5JN8fW3QaEpqxmWbucHEmeb4aFVm2bdWGVSaQtxJYrVu3JucMUHkfR",
  "key22": "53DWvhyAkFWQK8LGH9mgEwMUnZ75APf1afUWHJPPFAEuYg2qLtasytscQmMGRwiDkdnJcL7pzs1vw3X27e5GnPWj",
  "key23": "2hxKwFWS9WuCnJYmP2kfrfU2frQWfZTT4P3UDFnrjS4hRoeMwrV7G2TePYWE87fSdtcDHLb69f4PuVd5BwVr3t2d",
  "key24": "4DiP251aB3DG1TZ8EVPgTzqDANkgQYf1oytfPiBynHHue7fwkKnkh2HVKPpxh1bi6oboCp19DjJyZ4peXxEw9xL1",
  "key25": "5csYbcYLVD5vS9y2eBv69cscVkghQK5N3fVLDRJEdcqvnkx5gLxdPR6DexX7uZtYRA8szeo2TKjoXSM7V8Hx75xb",
  "key26": "5XSbM3EPP3HqThbpS1i48xbZ8bE8Naoss824bMRPG5jZGgcrh3hYiKXZacx5gLKowr6K9bPdtM4cfFaU7iReer6e",
  "key27": "28r6BGHzgzCWkmZc18WHDJmFHzprQf2js8NMhuEVxUZBieUDuDjKTHPhg1TpZ2gCtpUmaeiWN6aF9M7p28p9z52W",
  "key28": "3pQKa8GwX7zYheNt7Yk2tNgu6BmLvhdXTjK1nD1F8tqDq3hwUcPn3bKyWLXEATYiFnWpn53UtNijdM92dHu2z8vx",
  "key29": "38GLx7urW8JfmCTq4baLj6ew5yYv4RsGyWFWHjpPYuk7fyanFJ9yb7CxbRSU8FnNDPHhA5KjB2pgAzahimMFSuuo",
  "key30": "4A2RfwwJ2qcG15S7sosvGWmLoBfh6UJcriUUjMss7EquhRPSLpLbGakyCMLhSKSn2jhqDEkdkFa29bATH3m6z2Xs",
  "key31": "XZ4yRFG8JoyKBRy76t3hAzyr8aRVeHcyXKdL41nVkij8q1UhGzp68csUAPSPBB9zPg4U1g456YY42o3GpxcNhKt",
  "key32": "5S3zBjcLh4a1RnTdpv1wEcw88aHGdjS7FQWwkwKtWgpz224JhfBZJgQabyC8tEuEgV7D94MmAYB9DEzH8xDFumDq"
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
