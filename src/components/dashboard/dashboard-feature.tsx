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
    "38efxCBHPNNUeV9H9GhCcXDtZEh5sQiYWzrc5SESVN8hyTrBtPGiXTWZF6EW9PCvktAzs37sEn64Z41ohax6SVpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBSoeAxbqiJTv9QArAaT6nu1rqNS8xsYo7ueNhopCv5xmpECUFvs3mgHS3tJQA1zHSq1zcwBP5qEi6tCdEE9EDe",
  "key1": "5tY12z8PUTNmqYdH9t3MXhu26JuqypueNS1BZBuChGW89HsWHRSXTH2o4ZuBpPvt2hi8pgwLeiQbBZdSHxavijBt",
  "key2": "44etehkgDWM8Hpe8XiL135GLKYB1foZv7pEPKZeaLRRpHBLaZpNMyp5nteWAd3nQiV7hcM46NY6k7FVL7ZjVVKDo",
  "key3": "59Q5wCtemFQvuzbF3GmhaKRdxX2iUHNRyH6fdKbwewSU2yRpq2Y4KF6hF5mj2afYsetnR8ubhs2P7vqV63J9vU3v",
  "key4": "4cwfYxPHQZp8weHGoRkk1HPxLNGYBwZagNPDYiVLYozNLjzjCZAeKrQzvfA75BrHxDkD8CUPv7rDuf1TQkACFBgj",
  "key5": "YgtzGQ8QEb8irjLquKpwvSeTG212Hs2cAx3bU7idAZtA1qkQGfLT47iBMbNACpeGhiETMyrXsRBFMs4NVtriAEd",
  "key6": "4EWZXwBgY2VKRnUHF9garSdgW5cDdwmuJtcunoddyWuTxWtY396spApHxG68NLBvKPy84VNAFt2uydXanmtGnM6L",
  "key7": "5A5CTMgBDUpLzUVHUTHcdAtsTfzMdGczqMyNVzuFgqw2bK3EWmEdyGNfMTG7zpTGpKz8m3KafZrjEpgT8xRYFCE8",
  "key8": "482TU9tcnFhEcRfa9LbtJBDrTxscSrjmRtaiqJGUteWgLGbb5NpWYkpZZjYpW1ztbX7YAwjUeq1HzVhbpHKNe44E",
  "key9": "45QruLUFinsWjBEAnb6W2a9cCvczDphCf1qJ6GW3USmAAiM1zQxXKP8dxqphwoAmkBAx9VnH58DdPjqs6pM9MoB6",
  "key10": "5weKFTZaqcjwMtutV5mDXUoaSfxnXuS1oeVnDr78qXjZwmHykxTEg9MFSM8RYQrsj3m7RcwYQoF9tqBXniY1dPBz",
  "key11": "4dg2S1sczWm6VeFmxyb6HhZ45zS9at6rLnqEqsv22BM4f9cHrBft5DGPt2hfm2ZxCoMnHELfx65y9qazYqkxsT8",
  "key12": "6tHpe6AyVjZX6EUDtAzMzRzYgJsE46qB82bRcu1n792mzJ8nzzjYM6CZomzW9czvsWWRcDFTPPSSK77TqMv7v48",
  "key13": "2i5kH2aNrtmHdQP2rsCzqLJycwSVq8m3dakyYk2VET8vVvwNYPGFDaqw68rJHhuS4WSSHsLnzWYR5JQtmHKLSC48",
  "key14": "3HiJFuTyKWNdLsrDTTxujqXYvYbiq5cK4ZpCHf8wAxLdKRvPHjKGKkkA4TRyGwwak74ZRYpS98cLeGziobN9jEtU",
  "key15": "4t9KtEWhBM5xuUhE9sDb3UcgELUeK926cwNpB3LcoHruvwJHPeDRZZYuM6fTbcoBBkLYHkwgGecX3JssEdWHxG7U",
  "key16": "3TaVDNzaBMgH2SotYcSkyqe2SxvPigkRNeSvEYT9FqfDhpN381fo5cAJY1VM3KHiL59sJ3N5JTqBZmpYiDRchn4t",
  "key17": "w99SNq1UwhcGBto2xxuLQSort6GzFqse57ByyUg8VpjEE65TGcgMHxwbjoGsq4bSFLbCSGKAeGGHgBBxrCWzUB5",
  "key18": "QSzDhBRDkvWpJ1mtaBj5oDcTekxwuGUCsKdFGRJQYWm1LmKfB6JuhP15aE7QaW8RDB8kUvXBVsiDdEHu34CbQyR",
  "key19": "5HJcE9eEBCRk54PcgPKozGHKhcqYKr4wfAcy2giivTKNgQqnZVd43xukHoH2kkdJpC1q3pEo6y7tvLtVZdRMvdhV",
  "key20": "2eSrJUQzDroYqdCDct5Bo8tz7LXounw76q27rSbwj7X5r4MaCSMaEDSiC8yJRruxga1sqV8UVqEZKFJ1p177dJks",
  "key21": "u5GGBEbrdMEVjGF8KEtTisUUYtP8a7ppKgqeTon8Q1fyrHA4XA5CtQJYVv9qd7nc8dueGPdWWq1z6pUrYwZd9tS",
  "key22": "nDzJpgHa4Df2WBczzMcZGDwraTxD83T33ibPLfbY91Y4aXKyGDLtv8qZKmTTw5VLKUG8JXh2ggZ5cdPFCtvW6gs",
  "key23": "3MzThFhCNXnP5mciDpvuseeqBnuSVQpTW9EzDybZjBowMowANwHhPFCFHuJp1EsQ2B5nN2Mz9mMJeak5ghuQTBdh",
  "key24": "2zoD12GvXiXrQxBwq2YWdRq1v8bVkhvUE8Mbrfc2MRigMgTutk2di5ZpxS9VrPnCvXNKphxNpkYLSS9oSa25Tw9B",
  "key25": "ZacPPHj3qZQbDjL1e4jd3ECJ3hr4arNuSWGsCMWgDizUb4EAF2A1Ma1oWhFLDBa58oKMdt7czsQJpvpe8qQWui8",
  "key26": "3Ls8zbybCWz371rx6SciL8LQtx1Tpn1P4rCVBMVrbTQBbTb1bqXjp7KUiqgifc1gQRDqhmtSiAVShmNAo6zXaHAU",
  "key27": "4vkU43khKaFimmS5REr1cN62AwrWova347phNjrVmp6Q1rWQyT8mwtc4Qo3AogYM5FACUutLjY8gxtoUJdVWCtPU",
  "key28": "2ePKsBPCPD9qHUcF8FU4MWsLKGsuzwGZ3yvxLqSiEsXSGR5ZCiaVF2CDuzSwrNhBHY3SFuNHAJnFcTU26Gk3HHPa",
  "key29": "2PCh5RpFDmSVN5TWCdgxxmj8h21bmLwZzWd1YSHKBF42qFqaMwjktvWU8FMpV3UsrdJYvP7RbK6d8TmGJJqJzwoi",
  "key30": "zRPtghS7dgMD8VgGcfSFLcUxSJf5PSwWtM75SRke5AfucagabYdHPyUNUVydgUywWZXz9R8zxEghPGMG7vEvKQ8",
  "key31": "2qYVDeyz6gMq6n4pvuJEUhk9UGQQUUYkgAAPbzqgJFeSS6HLqEphpsbbRRkW4vReuA7EXbNrKmo13dVwnuUzRzcW",
  "key32": "5BVD524VVNmEaUsxezrChaTqnGDY5NdgN7r4NneofuMdvUsYdZjbi6PgKovnUYNLM8tTPrrj94QhspNLtkKJ5XoQ",
  "key33": "2rLRLMfDrRa8Wr4WaKpLokC8hTXos6XH72hud3j9R95TKCThCdxe7QucmjDA7ya3PHrPMRHZgfmjE76N84xKAqiU",
  "key34": "3rjFCg4doXCADM5DLbZTkCAcjk4r6a2Dc7EY9r4Btd28NuxT8CydkWQDgRCbJEHTNBDdMqCR6bV6xvJJxagKoYpW",
  "key35": "5XRd8PYBGY8yFVKRDdSquxcJp3Z4i2w7eFmo3ZYT1hDehoq5ozL7EZd7bcS2iK9yq3DYTzHQMq4fXuqGDojuy9jH",
  "key36": "375tPniMZfPVCLxyCzok7492UvRdiYeCkkWzJKJ8PuTMb1fRiK6cbn2TL7aPdiWrsMyEB3a99QnbqEo9faDv4Xn7",
  "key37": "5PkfVGmpYPApsAje4DHJyMPxCq6jLWrV9VBY4MSbggA3P9bduvAGBGMc9apcZaH87Qs4UzdGgF2EEu4eL5ESJxzj",
  "key38": "275iy2YtM8Lv9RKDrf5FaeCk9Ftdaup7ixgXRGUoqnEmDrsVXStSgPmDXc1KAjSWtpfR6gsbFEuqvWzKGm7pYJcB"
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
