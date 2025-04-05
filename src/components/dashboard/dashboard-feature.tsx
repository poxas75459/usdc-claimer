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
    "3PqfKx6aoYuu84Yzu4AnpFoKG5xbvJ3WGooPDy4qBx3D8e29VW7CtcqF1rV2TJEHuVoXfACPJHom5mQUq2UfCFE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyVsDQasVoVzgRNkPkiT898zGgJcpvt8oDgxbj6VntpZtYU5iUS1FPWZKYwhikW3WWxPZLmrfMDdnDsGeXrrYc6",
  "key1": "61h88C1KmipKwxv34GR2KK5LeeuvxxC7Pvyy9EDcLZTgtHaFgXK5qmtjLxeKP9PVeftK7iGCaaBqX9uXcmUieMsg",
  "key2": "256W8WWQoc7jnns4dWwTvxEq3gtESmNAiR1wFAs7AkG33RcSuNB81rtp2AsLxk6nQAcsYd3r8H3DDyaodZ6irUh4",
  "key3": "2zUEXNrHRWE69hBokvnUe7p3D3puyXcLRPbioTEaLDP51L2hVgCXmnKjWZj4H37fZcJzXXrgtoKEY4jUv7xdxLRP",
  "key4": "5L5eR8mSRjQyDUqA1NyUCLAzxgS4s812bzz2n1d6kjbcreFs7yBrQZRzb7v7qtG7eNTFZPWw5bFEUZbv5z66N7nc",
  "key5": "5vCFPWfp3pfNHCMUa2NukJ9Q9cWPSQDhQUu5Bhj5jt87FB5BWRwtacwJthBNZS3bdJD8PexPKJn6hPdsiuaWVnfQ",
  "key6": "5qYCeMVdJWkubX4Z6WriybtYYggyxJ5UxxLam3u4bCB1Wc1pdvc4FPMR4AVuZYy17odhTpK5XB1eMsKUVprabAnh",
  "key7": "3c1vErRFPFotSA27gk1DVA5WK1XtFQABSx9EANmMvXqNKUb8ReQf35muX4ydZyAHBzEcpvxa6r8E2PJD6g1mZyLn",
  "key8": "5WcLF5qaf3U9BETvEMf3prFtybuGbJFtYaKnbxWwSkyHUKpLwStrUzXMz19oPAbtwWv6Svt15xJDDWxY4zrXHomx",
  "key9": "4gMSrSkG7DPYpaT7BpJPXvQr92RkpMwWCZBFb4zec7jeSVGYKM6a3nAPwYLdYS99NYM2GyHkbqvyUV3yp7FfcMeJ",
  "key10": "4teZv4LcsrGvbgUxGFEuc77PebH49ADQE2AWHrgxDyFVqBzzdSb1ZY222R2SDM6PWCFGdvcyjXZHnRxmKFt6JYk5",
  "key11": "2nDCd9fFx6Yqcj4He1ZwcZ89ZxPREXFp89aWNydAQgLd7XWZaucN6Dt343jptnDJyeWav4xghCLJDtiTuhoEovFE",
  "key12": "3yjXjDaDMi7ryydHViBEQ2UsNU58pBEy7iSJbofsaCfbTQQB5m79g2LkLZAYBfXk2GzbZjjWRx5Sia6iCn1zgwHs",
  "key13": "2HC2v3Ha43GkjJsw8CdYj3h6iPEFh51NmigxyYX9URZ1PMduh5dBC2R194FxzD56jd7g1bBdqm2kbB1SbxrkLVbM",
  "key14": "2DLHcseHXR8dfmBMheLT9goN9GtPpmvPXjzhCvyvc1ChdUpxWeTYrAvV33Ltk2LgjVB7XnUkFpTdeRW8RXWEVi5N",
  "key15": "G9zFyftRV9p7TC9gTesaNfvemHoTpux3CTMvt5cCHhqzCVka8NTWLbmGfUEtnSjhzJkK2cdV9kca62cqfdxNe3q",
  "key16": "4yzqgRTZkqiAZEqn6Nrxcr4ngs7xywqtmfSCRpxdYMq6P6KmYh2irev4x152Sss3Qg6BvzkcYF8mxZRkUtiWgi41",
  "key17": "5D4cAEyvjbqUFK3MSfg9AC85MGo8WCyY7dKxEtPRfcs2AB2SyxAb1aMyNnMPmLCXNcvAtoX9qMbupMUFxsQADBwZ",
  "key18": "5pUxDaUmbf1FZd8ch4bNQATSHJFuFEH6WYGG2JTXaYQQ5M1Fprdvm1X7GKCBiNv2FULaBh15E8oWWUH9UBoarJgo",
  "key19": "3dku3szEJG6kYTsZDkbMTvosnZ8b5jnMZS9HSA2Jdvhd7R3D2qSr4YYHfen8suWgfRtarD32mrhR816dDLPwE5ti",
  "key20": "4VSvwKatYdog6uVASqYh9idJ1dGnEedbzduV67G67s4eQ3x7LG1QihxvRhGaFxEeMwhcCCTta56cpBUBQXjHLnze",
  "key21": "622BknujHUeFZf7LfWSRgBiYVqNmosNWzZtoYX7jPv9daFbCYSgQ586T7z5usH3SsqM9eTZtdrp6KdZanYEyNzXS",
  "key22": "26KuYKjzVzkHhJpQ3rNTGqXNF12Zu8h7ujcsbREsKe76TJpQrCCwuHPbynYVe5kmUHBCb12dtyCC2DfnazQet8dF",
  "key23": "3GJMWerHzoZsZ2iQgQT4nuhM6RhbdkHP197KVAshWhvBLA8m118ieyae9AgkXqsYFFDzHLgfXNCHPMfusKrtdjCS",
  "key24": "3DfokEjxmgwkCRdpHBoeAd1LgyoW2b6Toprne8WUyMKge5Yvx2UngohXbe5jg2LikHhQmuz1uRvEZBWdRkBmtVaP",
  "key25": "2TGwhgXh2QW3k56pLaATihWeEhfP2MRu6KdwyG93zxDN6CKvDtQZVW7hRwBuHXpjL7kHtBrznVe5mUQoF5K4Ljb2",
  "key26": "2zSvcrCecCMsgEWc5tHtqN8FWye7ZPPSawKQ8TppCUEnAn9mtPaxakMZ6qe8CgRJzJYqiSbwc2RN2zEwywe5JPrT",
  "key27": "21FYXY9z2iz9SQXEb1t6YvS11sE1284w5SGgz5XhmD5rt1cutGp33BBzLevoDXXmcdyaA3Co8iiinSPjZwXBU1PQ",
  "key28": "2fES2MQ1Ti7NfUtANm7ULXZRsZRhtoaVgjnH1AGFZGaxTt74eW3vQ21RVjqWmE91RXFzzScezMWbEzUYVdyoGyXq",
  "key29": "5yuy8g922Ekf6hEujcG96rSNeAstDt1CmHi8WQrcmVwtkDfqzbdkczT9JpEJdL4VJmLWLQvthU6TC4W8TEdS5vhG",
  "key30": "foC1w11YntyfUYXL3WLcmctXGQmCyeCrH2yfFndWt3UUjCr6ND3aMj2v7Mb4YSACvjb71xstPVLjuxYh6xKbDKn",
  "key31": "3ioS6ukKaFVthWR13qq75vGvfUPwQ3opPPVHLwXRma55tkLkF1HmZGXmo3RwtMNyhm1dLnFpzjfEr2bs5hmxRssa",
  "key32": "4S1Gk5peQDW1ZAeYHQBfkZdQSjWPZiAuY6erP74suwnXpBFAfJB3hPJQrnDQ8Gqj8eApPtjC4tXHJ1cc3QFMeZwU",
  "key33": "KT5ES4oGz3tMqCQan9YPy5DUcTyB55cAFPnJBuQuDxUWJf6KiMjdtih8M63sfpLFKGcrkiPKHVnscffJkhzghq8",
  "key34": "5tbfRfiCSUNuHaK1DCQeainJSfHRtSAt8563S2MRcpMVC8MA6GjBPP1W4UeNTC2gzCqE8EHpe3QXsGEjp3W7R9V6",
  "key35": "msPBLoKomepNF8qPbtUZ2LsS4LZbbx2aRhJhsK9yjbEAyJq38ghsjXLNrBNBTKD8rdb7monFxtfnE2oLBcwcfoq"
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
