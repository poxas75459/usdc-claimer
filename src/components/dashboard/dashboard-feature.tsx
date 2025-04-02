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
    "4HrVFCME2V6NBfgncbujjoESFjpPFtPtiruPyza2bSr9iWzpDLwx3VcdDn6LgLgM4cAHaBGq64S3xS1DWJPasVrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v4rF73CY89wqCSAHvweaE6yWrXcdNReFsrzP2DXhfipaG9HThV2nh2nccRNCydT6ddypCa7m7gAxfxEGNachdYq",
  "key1": "npf5Mv9B2Q4QQSBZeQftaN8Ls7K4bTSLWL7e7fJaeRWfSWrWrBRP5rRezX67v9Vg6YSVXtgakNrKa8Gy5PN26Wc",
  "key2": "2bpCSpyWNo2sT3EGA8iEYYNNohx4x269sXorUKb5Q6MbPjdBX3bkcEVE42sKN5TNavXWYwCUk3YYRYkndrfqxKT4",
  "key3": "41eEp26HrnMbnagUZ693HKqdUNcH5We1pnBRJkHL4VgoJgPAo3b5GWC8eroRrxT2DHDGafFkvoND7B9HWaH6kn5f",
  "key4": "2b6jYih37HZZTWRjwodNeNrsE8vD2YhnwwbWt1WxPYy3bmUu7W63tFMESsz6N7vGeoqxEcUj1E4d3hdcu2LhQKek",
  "key5": "hyxNuTSsMrcHyQdFwRq5KFkSDdMHouj9vYJadpQcMem9NZnGsFKwSXzFpkThpPMovzqGTMNkUaD1cwSAdY7Rpcm",
  "key6": "s4hfDHkQmjKv7BWghXHTwhRhYUa7TA85NXSLZYXtFiaJmMXYV5AnevmDsEsKGeqEYDLMe6sQDpiBVeXc7QRQZgz",
  "key7": "2a5w1Vu5HtMcgn9drPTKinAqkfKtJ8JPYNf3NpKpyqfvANsd1rc8haqK4T1RNgUJkP5VUv7UcKRTgLBCAcAnz2Rm",
  "key8": "55ggYnhC1DPXzEMUM6epHJubcwdxg9zt8HmmsioTiMZjDPoa21T9TzsUJBn5wfSHvUNYB9sAZspexniqw4p83Ryb",
  "key9": "4DAQbNL8XZnGWviPzoihWTB3m2tTuNkLagwcYT1en7E1HD3PsuGg8vbJY5BE7irrAXRmgsmBuFEWQpq5Mx1RThvv",
  "key10": "4c91MzwuPza3QDKGBgnuZqwu29TR1qyGThotM5KRYc999Uspmy7Cri8pDdDYvqmang19tcnEvaeXXBJKiLNyuHNS",
  "key11": "4VmJinRxd77dM9b2pvoEJanDDy4NffpsHKCvcdzyQUVRopqy6YrBHAYDDQASeuvaxSQW5eBUcgAnvzaMwdKyYqMH",
  "key12": "2FnB69MpuTLxNfMMCf4FLSVdvunHPt35wiBysifHxVCKkghUJynBp4wzjp11JheUWZ2n6BW4e8nHdDeNMWRRJL7s",
  "key13": "5zjkFuPAjr4zi6WMiW5cyDG32qE9sEYKEH3RaqituB5nFbnHRUCXpYoGbDFZnTgcF4GNBQzvx6tzTC21DJuh8AqW",
  "key14": "2qDkB26taEmZeudLMkDdqW5YNuxzPaMyK1fvFDJJeNUP7kPWsY5CRbr68cCoMXZgwnBRa6UYkJVs61V55KHHTCku",
  "key15": "4UiQ5oxBgPwQNEMinXdwaCQH9aa1fU1egedVZUPZnzErN7GrMuechuh1kjxcpyJwsFfNxFB3hRgidK82nyLPQKdi",
  "key16": "2tJEPh5pgrABNYAVCwbuPWensbhYwzmwKvGHUnzQuLRkLz3hNHciWPSHuLaEmmxYKjWiYRSw2yRQX42xN9ZyRFZW",
  "key17": "zaEsFwaoBKtH4RWGmYD12GWpyPtB15i5QJpjZMLynAYBTjNPbw8u9HfnNDUvrgf9J22AgdeYXUyypM2Z3iFSE3o",
  "key18": "4YiSvApBU84CD6LTK7dVBEtHh3GQQry77dVmBFNwmJrNAMM4dK1KDSCFZbiEUsZAAaowkqvhkcLZQ2odgSEBvAL1",
  "key19": "3yNKBNZx388tj82j6Zp8fTLGtSDsD3tBK4f3SvhbxWJCNLMsXZoaVGAaSzAhWVaEANQ8axdnaJZquUAdnHLSvESQ",
  "key20": "ZkUnYCQtsYTRcznVcfmtJ3Yz2VmZVhKEnHf3Zex5Vv621PPNzqnyKz9EaDfHJCGtPUMxD29d2LJ4AqKq3EoPSQG",
  "key21": "5rPDk8mKv4sZBWYbmQMTMCqLK9yFfyZmaMPyaSmW7pw8PLKj5f5VAQYq9Uk3hnxSvoQVNk8Fv5R7h3rRjqgztQ8P",
  "key22": "4tWXBpDZKH2ky3PHuvVxiMPBGLAhSbQPAQKXAQgvi6TytN4ZcDZDWRXFTyTwFFiJS2tkLD7Yzx5K4dqrK2Vx3fFP",
  "key23": "5FyKNkaXpZH87Wd5JQhN6KT7iAuQT9My1GT2sX4zpdJmHMtua6f244PXZqFaYpPPjjDsJjdeSzvezoVywEgji4Lp",
  "key24": "KZLFNaqRsKy7iUe6RUvbKkB1Vi9UasEfbJaEPDqEpTSauvPVPYiJea4rLXyHxHUfYGG7msfyMLh1MgJ7gSbuJXS",
  "key25": "2hjdNGWNkmmn6sTHNn9YncDzk6PS2dC799tGPMfc6ohSSBY1JMaj12Ce922rYZEbdHu7QP1MtiCj2Pyr3hxpQELt",
  "key26": "4DqDbFUFs6fxbc21qneq8QyaHpQhHmdqym9Uy51wyjXYNNDgNTbrXDD6447gCKBDDeZk2w2BKov2v8u5FpDUdsa4",
  "key27": "4M17kuG3TVvvP4djk2pvr5afRBhC2jvcLyQBGwwU2RFgU29J6PAkVScMyU9F7ekVbSPErAZJ2zkbszAk3jso1ASg",
  "key28": "2mQqdWiaKNihBM9ogERVaD6kQGxxZkZBJkKPmkuYyvaEFxnFVRQwy1Zw5LR5u8d6EBWn73ua8yMWHYBqc9kNRdyX",
  "key29": "3UkorCPw9VtHFM9fz8oD8HUog45mCkHbBuuYzVr8XMHaAFaiqAxccqvNBU3J78gbq2sgWaTPfxYz3DHKxQK3vc4H",
  "key30": "2NAqGRUuD9U2WSzaJKgGL9g971TTFvsXFS4DgxbfqREFxEFsPmiMRhKSbw9aoy3sCQNijCZfrF6ucmLHwwVFD6W3",
  "key31": "3na1q9KEYngqfsY44woUS731q1scgV7kkft1rr7BtwNM3aB3vbMgvrFHPemyvyYCrRGzCesjRTSeoU3QRzLDbEiE",
  "key32": "4Czj1QcedppvZsAPKxWcwFUitoCLb6GiirKD1j6VPJiDe1oCt932z2sb1PoR3i8as7JUaKber8yKGxCqomZfXNwV",
  "key33": "4GnKth8po4snQqatLyMvTLBmjgQwfQwZwNRUWaQSPG9o1gakPxnoAuR5mw8Zt5SGHhiRgHNo93cqgT9uvGN9SdsR",
  "key34": "4pnfAfmSUHqHQpLLphPWjMvHp2YwZdXBWnSojZCN762UiJJsan5dx8ye9CWsNLpg6LBpw8k2y4gEoF4umD7ZBLzo",
  "key35": "QzYuzmk6VXtRnBx8ER56yVsjZBo7YFENgCEbz1YcU1SzSBj7orndcQvig5v5zufEgzpFXRXXorMGUGHqjEjBX1q",
  "key36": "3ibBMMoD6j9ujJHjqqaLzubsQ2nue7zkkaXXG423sMVKHGv1c6tnfVeDCB1g75fps2CpHb7VmBHKn46cN7Y13e5h",
  "key37": "ACgfmRvm6hd6XdYwBi7sXPd1QEdKGtWCERpNCWXvWbxMnsGCNV56EqBNMVpRVd5Xji9s87UE5aUeubkwRBZeGpD",
  "key38": "m4yCgk62wgKfguvwdnEbkygMwm9Nn3CtPx4S2aSFafvevJRf4WHT4E9MBkyJHASJUkF9Ngrmz4cL46mJZH2CKpu",
  "key39": "3SxhaSxv1rmxZh8bPS8ukqJBQLKYQuiViL7Xruv7fsRdGtXsUEywLTzYi64XvGRBiCinDoUipqV4WFb6v6a66E3B",
  "key40": "4pkAxCPovrPGSKpdi9gZMZMuMyiJ2ahki4FVjWmYRR4BZCkCfPw1P99n44sLnDUeMoRpVRukKZAQHfJTEAXfEnDf",
  "key41": "3QqnFpStLJ4pmX2TKQ8bTSp5oKwYhoBd3u4D8e8nr6Wk2J69Z9GdzJfqCTj9WdQJsCozNvYLsD7GysE5GF5bxYDV",
  "key42": "2kq3RZTF4qmfUVZ9t8NKEkUhavUeWLkpUjHVMSYmcY9PaTZ3ZsL5EXGQEATV6rCUbCzb1VGThb89ZyGF5CexzwH1",
  "key43": "5WyAq4bBAL76Ay1VFBEsgWsDwaTXhajA264VCFGt9WNmkbAYqnMw7JSo3NktMJpuxfMZ4F45rTjLFo1Z5acN9gPv",
  "key44": "2f6V4xsHnaxjDPDv6Z83Qpj1xhz8AghGwYKBXmTSfzzjimbc4HffUUyAbTJ9fmyfai8Ugov6MdKqEEMfstt35HY8"
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
