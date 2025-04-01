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
    "9gH58VYTBmtUwEqfWMewa2NJgr5BRn5LffTn9uWETtYe1XJLttaV6DN5LCN6fcWHfgKYGef7YABAVrNvf4Jw5NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lse5uoFZu7geWz4XoRFjRJLQT7ZdvKwPppjt3Z3Lj84z5rriJxxdgNxNGax85G8SVZk3s85Gr2grqA8YdXXXNJk",
  "key1": "5Z5A4sGqrhuoYXHUdeCqqH9jNRrMogfuEpVkQeBEs1Ar6GqMyBtyb9TiUGoYSQfPCti869MDWRhp6EjRYBeAaCWZ",
  "key2": "3jJWXsvtU2BG1KLVUF5xwBZ5J9Mvqx45vFE6MBy7PBvWDbscCpsbU4HueeVSmYpBAgyHfB18oZbPVuVGgfpGTphG",
  "key3": "3SMTLoraEfcQbcWPXGJcBkh157Ty6jqEWH8dR3L6nHaSa59E5fYT7hLfaREffubV2LvhtnW7QDxjVRw7jFLQ4tCc",
  "key4": "4BZnGjs1Y1FRhEeXhoKnEjUsU8bnE3dgCSm8xLHzdZNs645uUmiJWM21TyKs1rATUwBbnsWNYEksR15J7FNgjTDJ",
  "key5": "3MUdCrYkymnshtWsAgk2UJ7tombzEiZiJ2Nd77igsc5r5kbkCAn5VUDKQxAw4iuLQDX3yc3WdG2fYTzKXubTw3oc",
  "key6": "3qS4HEkr4NzqqZ34QYeu5JjhoT8efhUtpko63CxyySu49sbpgKZzKTqkQYt1WxSvsUyB6HEU6K61rksS81UfWsCY",
  "key7": "2NPwNdakDsEtDkamnhP7LYvvmzJbPEAcssPEbu7Gta4t8gSbzQEjj46gtbCX6FyVxLVM1XXEKuB1YwBBjZS6tJXT",
  "key8": "78sJyjGTUM1JjSwwdt69HdnNYEkXgJnK5NcyPDUFwzSe1DZmT4kVyPcUfHQhwNL4FdBpz5gU5NzNfnnG2pDPajQ",
  "key9": "5j3cGUZUSah6YciG37P3WAMQwwqysTRzUEY8Jd8jnYA2r3mRqqSt2qESsefnsXZZ1eRgLiKMY6rC1dq1eoasx8r7",
  "key10": "KqtTNpsg1YtBYqaAaM2yGvRwbvABwzUYYtDdRcbi5FAhvqdBVcFLqjcxgDkuF1shaE6gVsp4frdbzqxd89ci3VW",
  "key11": "FcQXddSfH5A5dUcYG4G6t7ZxsFsMcxc85xJVdRY9UArHedSYVbaSj6wDYFBWuxZGSyS9LhKBsCVR6rX96AbF3R3",
  "key12": "2q82FmLqmu82G6KeTKJG5xtRsSvBKm5zpZuBdnoZTxGui1B1RLDCH4FhFa2ndj955eGd2Vuz5Ne8fEVGgaj1pj2s",
  "key13": "375w2vPCi1SgXum2DUodeRUA1o5sqihki4Gh8wNDVMAPkHShFo5GjJDJce4UPNvZffYqdTw2GWGmAx6F9tFR83ET",
  "key14": "58738XjJA11de4fkggoZmNrStkHmnDWuzz6HTs9Jy6usKCC5JrBCe6Hx6UcSExoSBs8fxRbTWTAZYSoruJZbvFBg",
  "key15": "2xnVraK9pfQ7jvMvNUSZGDM3xrG5xR62UCRCPfq342YPyyHEkGntEQtFtcPUxYni1RCEJqgn4BPs6eL2hSovXfL9",
  "key16": "4zHdBnGKnTRyMtjRUDRM3au9KnReEPRqxUQ2p1GboHVyozZXKsTBs3SwrLMho8gE4f5GDoqs8DV1GoJvW7VKbGYw",
  "key17": "MYWmKyHg226RidmBXKZCrMA6tbyoYD3waocT8SzNXSEYhQFD1QjuGmuhxjX6vSPWiB4gL89cLsSVh3tCU8sYFrx",
  "key18": "3dn4d3HVuVmugh9ZXT84822DrkgiTKsAuM2chnKQbMrtqYp7jXDMnVo5iJzHT1jcWRKrYiRsuuDodEfTeecesouu",
  "key19": "2YCDyfooMd755EWfb4TYA23CD6Kx4bKyNNpTEebzrB2PM2g1Xrcyi62X4L8Qob4LPFs9AbH95DL88SotLpPmwC5y",
  "key20": "5dByvbh6oM9x8WTkkeCSd44SqjTZDvyfmtNmZ24fdn7E4biUAf37CeaRWnzLgZi6sdWBaQtyQ6LYiVtybAamYj1D",
  "key21": "35PrjFCrXEZjnPKk1r8U1gkPegWW9SmTdSyr82bBsCd32Tt5dXXMWj5z4FZrs5fLseAwyHKMDtKYA4znijjjWrY9",
  "key22": "5bQzpsGdKcoq1w5HLQ4yraDx5oAGNjTNuMd3qs2XX5HM6k7KiwTYnPLs3K3GT7TQcmHUFTSEg7oaWfSWbzyptWss",
  "key23": "Xevr9keWdNBYvKFstS9fMwpyhQisTXACB5LPMHu8X6BCxqZJnTJem1LT2TUe1ST2NPMN1kgQyxYcEUduxDgHjGb",
  "key24": "42c3BRX3Ubt692KRrFqbjyUtumrJ2fMx3fbNFBg7XspMuu2JiJHeHk27yB15V9XGrsng8oAeAPWk4w32PrL6Wpwv",
  "key25": "4jPxApAPsnSgr1fHtNtQmXSSA68JA9VHDHXBoMKPV8Ne9jFrDjJbLj4rPpXrz4kes7R6g4HRJrjKGeFLz6K4RCbU",
  "key26": "3XkjcUTX3a1NpvRUZKSb5G469TXiQ3N96ZmcpTHhYW8i2UE1PHAvAcWkXqM38upct5CX4b4B1yXGi7RcfheVazAH",
  "key27": "2GWCV4Sv8jW5KWZoAMaTVTFAaRkmqwNYFtipFmcdUHsWaFXFjpBxEprhfeiKFabyWoyuvAQumSsP58BLgWQ61q4s",
  "key28": "3XLvo3qQBGSrqJfasaYnhyt6ih1VckZc7oHNarGZ6XQRHKeNanwf4xBnRipfPqxSTXi2TfUQRBAZBvifXapZro61",
  "key29": "3hMw4ojxJ5aXeMwpSPn7FiSHQUzFq4hZ5Qwk4azvAaShMCPjiwjG1J2eyW6jp4yukDUx8orMKD8ypEojyJ1FD2Xf",
  "key30": "2T61jXcNHLHwntKP7YfCmW6ahuvFEQW1XypjtrRJEdcs7TbKio9GcFiRKNBmqnDGtvdBTdb1DEKpQRYdfCk7HUyB",
  "key31": "3abj5yAcBXMRceNttRduXtdGYctimhPjkAqe7R2J573RQjFC2mX38aJ85AhHricNCx6THC4cfeSMxoiXG3zKgS4B",
  "key32": "43CZ9wfT7eJTJEKTPSngmYwSj2PgGPyhmYGiCryCrUzgpfJZX3EaavJLCNFoGtnzoT7GKEb5p9mVsFjzrkWKuV5R",
  "key33": "4d9sWKDTC9n3R3YWaUGruxRcbn6QDhVv8oFF8ScLcpadEpfQx2VNfo9Kw4qDx4WiE8vuecCH5reqevSxg3RE9LKT",
  "key34": "2KJpvYpmfFNEaToqQviuZRzUXHqhxNkaPygyWq4eFeKf1zgP4eJqi2XwA3J1wUmmBZc4f52NYAGHFWbfdkRCvWJ8",
  "key35": "5XA1mb2mGLbYeNQLHQspGCWtGvAaiu3qxGcUuF6rcertMhogv84tGbapts1GtuBG6Nr3aorWzKboh6zx9uZFcSaU",
  "key36": "39pjLeQ2VwpzCRBL38ECeYsRx3wRbZnPpJYMofaBBHH144Vs98qBzGHEPTCVFEXmgyFaFUPm54GDxavsPy99HRzc",
  "key37": "45aeZNWxoasKbQeDuMmxeRdhpgRKDbjjrdM3gtnX6XVX8vPBak3499CXPTW25pVS58mLaDFhf9dJogvEw9UBfogR"
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
