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
    "5Pq7pGvzXDuQbPxLzFfbT2h2NhBPzprtY9ReEPdSUQKFqjUANyFuQPRKGEUFChemWRYF84zbbh2juXfmVcu8BDB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jm6d2NPL23xaKw8rRm6e3NB6tmRkQ8qCBNGsQcLRFS6oara4G7SL5jTiySUo9XNgjMD9odEaoT2Ft7ByFxRp5X6",
  "key1": "4d8aqqdcSHQKYCvFb2TFntkSjELndo8FPMyWd5f3F9WagDvLi7ZeqBa6moeSXmPxoRNPvnUas8F4G8zSqvAMEPx1",
  "key2": "2R4P6wvoSDg9dC6Dyo3HLs2WcEKfwCqsi4CJ6nsH8SjYQkvEdDaEQLkRFE94TGv4pDVB2FMVyQFf8zqBEBiHGMZS",
  "key3": "3xeQGeZDcDFmuDruLMxDKNdyzTFVroCaz1RzPFrVrXFmVSCwCNoZkKiemoFNNbt74fBGCFE4V4AtML2RKEz241aA",
  "key4": "5sZTsMXCV2XsfyzCfUuUSv8LWRpUSjHT4K1MeQrgaLgHuCqWYmQ316wmrX7M7ikh9eByeXxCYtkM4tpzADkJEzMt",
  "key5": "g5c38w5wKWWoR7PcvDGTtjeboLABdoN8xmm1xSoFn51AKqvXYYcPdEyx3uBiZiaeyKTtvDjrmokAAs3u96jrWT3",
  "key6": "t1d3cjP9HrBHJCpgSLvXUxfJ5q2MaugogBP2xVe3Jt1NKm5BvRUwpgD8BSJ479oGt3iGNBL7MGDo7i3paAAEPUV",
  "key7": "5FVBKYUb7f8rbq3798iGNiTSrJXjphM2SmMnfVaa6zMRZP6c8T2XvQN8XP7wnD4dn6qmakABbGeaPVpoazNdgPWN",
  "key8": "3iJL7Y2VmrL5Nq6AWDgVzbjq6rP2LsihnAEyUXWjkiqFCuuUb42nAanogGDEZHhhkbENoFwkGro9GBL3G9gQgYgz",
  "key9": "3pqG9kwdfajTTvtUXQrZP1yuegcsYGzyzmDm2RgkKpXMzWQP1bKuax6XAhUPjLy7Tjkvog8qHDbeGvb7iji84gVp",
  "key10": "2MHhyDjAcN2qGTcBz1n47FDVguNoARRR6utQwZvoZXwo3BqWwp4GRVaq6UeRnzeUiiVafjeYm2UvdeXYMwCv4VDd",
  "key11": "tQRvFRgy81LQE1WCYSW7MR5xXQ6mCQunb1HtwupKRBtakijrByf2mYLLu9Lv5jbkiM2viXzR1yEUctuQcmcbo9k",
  "key12": "415x5DZTyu6VhEgFgkKYD9U9CSCUTtoqJ7cn7GxTXULMuRFzp84GTXqb1247bAHshKsnqqkXS9r8A4TSZEUwrkCK",
  "key13": "4oce1bnWRnhBJ4SPhjrX5wHY2DYv8PoKRTfLiwWBLCkHKcpuvCfzGmB1jbsVi6Drw4k4rQtm4xdwaGqnYzoG7CJS",
  "key14": "jCM95ktLsHYAiUYqdRmdQ6EyfzUygYfncw9h887N8cTKJTwbmryjHuoyAZZ9XTCuwpvMxqr3ZDsr8sxjALVo3bb",
  "key15": "4wXZfVyary6whRUAbf1dSjGcgo9FzbpstXhygapdphMiEvRmPwydHyEPZ5DSRSxB4k9uxRN47HT9hKrNDWzUwmDd",
  "key16": "4jx9muBbUzbUVg1ZnNh3G4ofPf9nQ7ayCFkkxJqxfQxaieSzc7oMun6UtFY4Fx5As98tnXqm2BaTmpFyCbeXGwTi",
  "key17": "3zzZaAjgfZ9G4sdAskDxF7onuSEjzoy1JzkxMYoX3M6bZmJhupq2PzqaJg4U191g7so3CVJHcK6M11B2yhviuvZd",
  "key18": "589suFHtQBVtES97QPCHbH1Vm5wRAMo8s34KFs7Jxr9LbdKVD7cXsCXydjknkm9cPUc4NjYB5tF27ZYFsfrKRrAm",
  "key19": "3KXPVDRWiTBp7hHvE3Tvda38C7ccmuqhk9ugxaJC8Rbau3R5sX5uLYjSnqu9Ru645ErA2ievSKQX5KDciB5ji87m",
  "key20": "4TqfrWDtdX6szqfmMScWwkPwriJee7VUA9NfT1t57ZpQR4ph5nRcXrUVZmAJfd226K9wkzvTN6idv7gmZpwJ9DBd",
  "key21": "5owhszMfQXuWZF4XwhsqTzimhSeMxpSsyMdpNkkk5Qgj99dS7TWCRZD8ffRvPum7KwzzfMBV4i6dWSPjxXnkB1N",
  "key22": "BBBYEHRiP3ysMgrMYFdi3ggKuApcFv2jXF1tfe2ctoA376bKM1e9gjRDWUa4Pr4o2oRzHeJLEA9SynZvtRJNfLy",
  "key23": "22tHTMvefDnNtaBfYEdBJ1ZeSSQgMfiaDxx7i4krtEipBujt8PfNvmJdSQgawftKMWrcB4tqZCusqZkCk8gNBb2R",
  "key24": "cTQztv4E1Los5p6KtWQFaNNGJcqJKB42eJttQNvLQrRh2Eyd4mGfzdCD2qFF6NgwH2GaLhQmSdnQBzf2kEDjJGU",
  "key25": "y1LvyMxHvv8qmaC6LLwyxDEC9d3u9CCf8Q5d2KyhRiv1JUhpMkBhnaKATpb3cq3QZ55pufBc4NVsQvgZPhVJ8VU",
  "key26": "5bUu2TnPbM6JkAcz8U8aZCPvTkrRfVaYfakH1WGJGfRuoeSBivsw3E4hXP95Sz3dHKY8ZF5maDNYAS6XRhTbVXEE",
  "key27": "4rC2rhe6XQNYs9b7ryQdgCiB3PVSEd64gLR2CdQtT5NMsd95UANS57STEGcx2dFP8E5L2vTiNbCBThWooFsFyGXv",
  "key28": "2KbvLyYwoRmMDjtXLd5Sh7HD5LGYKHvsThxJWLZrUipgiHfiaYmq34KrNhUYpKFp8WJ9qPAj3796YXaMAL3uo8jj",
  "key29": "3AWCNhwDbnrDj6P33Ac2pBK3AVKS8iKLiD3zMX2TpY4YwhXVNb95vBtmZjBhHWKi9df2o9Y4Rj2vGRRy3Wh9RJu8",
  "key30": "65G6PoFPVNtSJL1683HiNKjysGRaWGBav2hmA69PN1ZffTnMdjVksRPShG7iRymupbF4Wx5ieiRLNQrUmmRhtGDC",
  "key31": "4sU21YydP8BiKtGq46Spiraoj1HyjQVSzbkpjEPFTVz7sSxmehSDo6yuonm2dCPqbe7hfncy1roadv8hGTba8R4n",
  "key32": "5zg5598g8A3pwDqzc1ZUQZweRnVWLxmCz46YAgjPgdc62FyVUtf9TL51fCmsK1ur1mnBecPG76T59eUkbTXEc5t5",
  "key33": "5oJKYdsNUFab2CZuMo8codNvmibXTXVMSMcT1NFfCjxn79vrGCJwXewVhHphm7NzJX1hb9igRv9QuikapWvnHAky",
  "key34": "4AQp2c6reeqrGX5x7grhRpANwFz9TqZ1LXRbgQrBHNE3rt21Pdwwfc3RCr4sXtCsrZYQWPADjGtJbqCJUSqUjqkf",
  "key35": "564UDVfMrzqCTTGrr9K53SCvKce9rM1mghVGw44GVov8er28iL8KVJdXafnchuKpdptCzWPg7MsG3YASN4vdVpxh",
  "key36": "5GkmEmYKA9Naj54pXyQBFca53idGZaQk9s4r7L2Qre186TX9WHswv2j2VhSTSv8nuQxyXKMfDW14vtzUEy8m36zY",
  "key37": "6y5Re6G2SK1ZY5AjfruymrFkUhgABASfupz4vXAWP4nNRKut6Ha3YQWhWkC3yVBM2eV9whu5HZ2xNDp5T9PvA4U",
  "key38": "2H9MPqMYvzUQLdBRTnhnUedVs1FsLKYtoMJ1ZuA7SMxunJCBFBPbV8enZnwV2SgRX6F4MLcoTN6ZPJhhZ4NuN221",
  "key39": "3NTebhXji5sTMSpirnU9cmHnkZudhkqpSfk6HgmwL5P6cWECWLN4oAYi1NzKGnPksymZ4CPquhEPxkv2mr2JRpCD"
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
