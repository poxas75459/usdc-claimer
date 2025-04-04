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
    "aJGdBc3mUaCb7NLsJahHbYnTcZiKffGrUTgA9vfCJ4EpfGMWtB7Rad8NXQhSiMCeup6bjba4DairxCYi5xWrNi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qiDYrxNtPbpb6yXVTNy7sjZqfQf15JZUtouJLyhihY85deG3hcWdcMCU1C1mY7VnByDnyf7KTXwyPfxN6qhdHgo",
  "key1": "4EceozhH6Ge5RmoRpsGCzJL4tbthbLufHmmdZUutZjhqPW5kGK8iS34C5Ynr7uUDbSKHdju3RLZ5D8AP6QHTHVq3",
  "key2": "e3npwUDQuqFdQRGzdXg6pBC5Pt92TCDuBJDJHprAWDPuF5WVV1vXzjHPkYtvPc3u5bvPu29J7p8CNHLwympJeZ6",
  "key3": "4yQTSQYKT6xTGtbtuk3bCTCh1NWaNK9pZH4KrttXvsKHzw9K1Tzks1LYTKYWQwVZbvoeCYzpDire72jzVgJr6nKh",
  "key4": "5V2KDWKL5Ek2EGSzuKReBUGMCZ9U3N9wwEVQDyE1fTkhzSK1EoGuK7TnHnd12Dqp7XhsrwQZZfncxHM4nkPSXJVy",
  "key5": "5a6feXyEGzxmxSTWHfiLP7wPQmLkXAA7i3crKo8q34AiBL8TcPVEcd7HG44FdkYd8VJ9rKmeNvpkhqehMEhrBC23",
  "key6": "93gqS5Zf97rUFqqVg4dUaZA3bxnvuKfgEXmCqdMuxZ378KEA9bqRBQaScrNjmTBAyr4ZausTNy2AruSiUwr7X3k",
  "key7": "3TQKZNzLbGYmKeFVKW3v9HAGgiYAVaUFn1soQ3zQrKWesGPw53WkgwWTARqsmc1qGjsgkvD97JT9u1yc3sBpE3rr",
  "key8": "2zuv58SvnWSmgV1RC5XVqP6yPxwRMpmDhKCAxc5C6vQzW5FyNGVAE78vmDXh2CAEHuWUNANWxP5FSWgy6MxUABmg",
  "key9": "5H7qLuoSEV4BNRmtpYz8Rtqh8kEhZPhESGWexjYxNcvqjhdSTcyNPRGDv1NSyTa3cVJDpseJTMuCkSe2p2KKw5kd",
  "key10": "3QfjfobA9iiYKT1YJU9fmEfU2EJgzzFWSVea3QBkZkSRtZSkR2sGUAAoavgqqQ4AZGT8LvmM7hAY24gituzZ81rm",
  "key11": "ZtQNkGTF5PxH6FKovPrbi6gqA8HgHizFPdCmdpvgNCg3AdX65Jhdsfxvsbb5SN55hTrfH9WoNb11yydv9VVV3in",
  "key12": "3Z9cqdYMZTU1vLF4wceTxv4UXPqn61NLcpAu4vJ4jFqdeK4rgaLhqMheCJ25rWPgwyLqXe4aNrC4d8irjTop38Mz",
  "key13": "CFTcv2SoLGsPt1gwLY5rPR888CSCaQmnzkLbrD4bsLDz5xiW7tk24oy4qZFNfNVeH3xGoTG5RQnHUrTNGDUNdLj",
  "key14": "3ZeizXsEmzfnzcAHFj58q2nuxw1VJXR3UGpTw1cjMtTa4f32QqX3rMYX1SEgAssGnZk3wPHp5wFAUq11sUxHb2qF",
  "key15": "3N3Pj6LmsGPJiZfb6JZq9ozMoJ97oHJmhGF78EmRZtoKZmgNgVS3LtpVKNwmdHHGhNxwXX5m24axHHgXTYMCpCL7",
  "key16": "2TyicxE2xX1ebQgVc6FtoowhdVWqvQhVctAkiWEhpjufER2oNqEEbGxkG1kxCbWLqsSrhgsc9ytH8Kt13kMMc8H1",
  "key17": "32PTFz9efu7nABfnB2DmBzytvknbCAVzdEBZiWtzcn72NY3qxoHs5a3j1hRm2jUd11CgMkDRarpMDcMWubkL3b9V",
  "key18": "2ZxBxjemapBpGRjSEedg5BiCnBXX8HeiVhqmJQAh54RcJ7DZsUfFiqvh5Q7b8p17mvuMVSEccMEyGR6mbZnvpcbL",
  "key19": "rSEKBCXfRjSX7JWdkbTBuavEM2Vux5ZDJb3G9JUdTDf56ExND9cYnDKR71nqadZjyehB6rx6iVy8jDwpVybDmsJ",
  "key20": "5RkQFVbu3x8pCvLw2S5EPFaJBTC2kD6My8gbBm2fFaPbfef82RmKXoytQLuufLedHkCpxhHsKwV7vfWoJmAcwdyR",
  "key21": "61tHKZyqSoSzwM82dFYMtuUEFMnqGejMFacNazqHhpPMpyyr7AJH6qESdQAdsCSH9d7kNzNCk9iHor2MojdaEwCr",
  "key22": "4r7AYXvotkAGS25Tpvp7CUBieMvW8duPDAk5CGGf5qbsNzML7CaZWstK57DdtbKPuV9GL4kbhKXVMcSmWGFmoanX",
  "key23": "3ibLvfhgRh4UErh9kx7AUpodH5UrrSGuWD3VbDbvrFnAMtrwSm6Z82uXjr6wkvPHmBN3h8HbUa5MMWaejRKXzdEL",
  "key24": "3ctPfShTpe1z7toAWreBFtvXJgu6KQFBx3fS8nyBSgVAXKENZVo5ibKSeJR91ETwmoUYbShMFg7zKkPtcRoJ5iPz",
  "key25": "3uCDfLbhw8oG87vYntoKgGmRrs1HfEP3ot2RYGdTc9QMQcnRkLoFD8KyaK8aLPGsEHCK13P2GpijvZMPozWyDGsW",
  "key26": "5tAMJQvsB8rxUq1JPrtkVCxMHWwxt3jwWD78LWBGvneKmhdCX6aNJucV8vQjEiFQiRRhb27fnc9bkBP2BDbAPqdM",
  "key27": "5KAGH6it5AE5JKyJ44auM9vvDKcUSuRBos7mAkgJSGEo2vC2GdsXgXrntgAY7sBGhevptWSaAdpsxcvEZmpThKSn",
  "key28": "4DQyLGPpu6p87kZApejhCrZG2ubpAFLKH6drPWAZpwYePyx5f2e6LteiMwi8KTjzhyuxE2vbhkUK1s41dHkCEL2a",
  "key29": "42eH1wmuu4wS8UqbxbykUUUC4jvWZVBuxBn6LqacYbQVvN3ArHn66oVWHCAuaPSqCVGgSppYLTg2hHhepwSH5zHF",
  "key30": "4eUEz8HDTThhXNNiXkgeN8jxZ1E56BkyMvg7znmmgoeXbf3PgELWYjCi2mzLJYADsLR7Quz8GvoVqxm2JTVgUvAM",
  "key31": "1pPPgQKpDy48cyaFin4f55oEKCLHUGYxBceYr4xZBYUWobXpAFyuPqsRiqsaYs7ppGyWrhDi2MPE5r5hLDY8qo7",
  "key32": "38s484WVCj2VKcfHddAAWt2yYZHFjjMby4XxbHiGBSpYwTWHHjB5SEEUwqt8XgCeTAQ8jZXx9HytNHJhR6wDttZ",
  "key33": "3U4rM4iK1ykT41287DFpHG8CbKBDM1cT8pSML9kZifDiV42UZiJzwKVd7eyNP39DXmxBcmZjPV3wkSko3kN2VmJe",
  "key34": "fr6jeqtvaDDqEakU11bdxELWy9Sa9MJJpw49axKSCfkgFQ3Lqji7mhJUXC4iBFgorwFrzHquHSyGuxjVjpa8L8d",
  "key35": "3uMn81QZWWJAk1xc3LgrwEwxi6TwaRB4gb5yxNp86TgkJurYbBUXdWUzog21vVFbhBxeeuFV8tvdrfn2BApnVe2Q",
  "key36": "58K2e95bFBkcWD1AYtUJ3LJ48i3cwAp2MH1pQ66vaKnwYW9j22tD79Dcbyepzh3sCS7HVQXNb4oPqnSicZfHa94S",
  "key37": "nLB7VFoxPSt57KmSqNaPF2Eacqp4rUS4e95ywedLukoaWFW6rPebRMfJnKntScxQTZS8pxfx1pnd86XxT3VkFR7",
  "key38": "yxTzsKyaMYWsqB7YKKuVtj2q3Hr8WrZzZHvPGTfhykQ5Ju8QAfPqu3vFJewVuUScskVpsASp6uXFgecwj1Sjjbq",
  "key39": "5qNaPZTgsTbGkzNipGHzxC541LGWu3ZZYosCCPi6AyQEm7JKy1H5Kbm8ZAkpNWTC26s2X6QwYC398KrAwfCutm1w",
  "key40": "e9JaC3f9XxBGQ2JffkUAVm9rosv6KDeitS7n21sPGFTVEcvDqyZMb4zJrbyhw3W84bLGiTXd6gFMYXKhV7hspqR",
  "key41": "3XytAe1ibeBuzjy7ZuArHDTckshRnievDZGWfXCSTfmpjntXaPPQAjmFR6sEXXE1dAmHJxLnKBM8ZRUCtUdUz7P7",
  "key42": "R1D16acq4UZuYuCVf7s6ae9hhvBEGiWwY8ca39TyrMLJHsPxHZkcjyUBMBamppzRktBJzd6nBnU1CLMPUZH3wpY",
  "key43": "3Je6fFkpZU7RaeKoVwjLSj5xfgz1owdJ5RDXS6yp5qDi6YTkpFfVDY4rbtrEdDzcy3zQRtN3NtkMQsLULe7HDJcs",
  "key44": "4AsKzHja9XQAVDsVfCSxBURXK7VAzgU7BTEF5AvFAJ4i11TZuGCCQahvkZuSMCLnbP3G6raeoibcWc4F8vi35Rxh",
  "key45": "3J4EVVdD9gfPyA2CLpuLE9R3g4yW7zNc9VHaPuekRSp5FNtqgjKMSuh9NLLPMe6Dc7cN9SiR4e1TkAYKocjnGna3",
  "key46": "4598tDFV9nxwdAgYe7AzF8NBbNiL3p3Xvb8khagrnkxsMwseJF1omPWoJ5Suqgj4SMg1GoixzmfuyfZrMRFJsrTR",
  "key47": "63smpQYqR6CVAZrPqvnR2SuJKysYjbRNPabrWKwe2K5snUE7rFZF4eyZ3pnavjZtiX47LYLsi8CJLYVSCibeGGpd",
  "key48": "2e5KueD2Mzhmcxhz1rdPw7mtsVdvpWDy1FynrRonYJnRaZZSG7VRSzP4Gqhi1kEgpBif6QApD89ciXZatrCvRnTB",
  "key49": "62Z4bY7FWN6QHEGANacRMyjmNX8p6wE6SSico5MGVBQrJ68nFf6cHPzAnJKWuKqBnQBjLsPb2gu26b4C1rBxfPou"
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
