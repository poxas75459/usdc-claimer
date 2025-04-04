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
    "8bHncDdmVTSnYEsuqRAxvKY6g97NF6MU6kNnvnyebwADLVT2WrRTatcZ7aWVbN5aWY48zYCYLEkMTvovo6ALVgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZbjyFpY6Y2Z3kMyp1ba4ZP9qpALSR6TB41XeM2CqDtBLKDybELmcKPSD2dvnC85HXpwrgW8QCzuHgMQxR4Bn11L",
  "key1": "Hdi5AxpxAwEPhXWUUystrqGfsYjo1qthWLCHEbnErKVzY2zftrk6fqvJtMPpDCfi9Vgyr1TQu4FpFMxkgvavTfz",
  "key2": "VsqnaWvaARtnttPvosHPCEEpYGUMeYLBAE1BEeoCBnHYEQJy3qxq2EHf87jBTbQui6MdhivHf6EQuuALbhSEit4",
  "key3": "4RwGDFBscKoPuUDgFrtvqU1YBFuWyL1yvxdmMxbTouD7pKYCqdSpr1ZBPCzmk4ozG4CLqHfvWbThvruTUyPk2Mvi",
  "key4": "2xx5nDmM5Crjg2NfJDBUaeZLyMbf2KrEoiiS43GuT9N8cCGUp2VP96crhgis5LCF67d8SmLbZAt9aiLjpPBEX6SX",
  "key5": "eKxTcCZR4YybbW8ytVpp82hzgoBDzGJo8CVRegtGrwNh2fjPXCS6jmAphxzqixDoSooH21bvH3zdN85PzHxrEtZ",
  "key6": "5uC8rJcmXKNy4BiXi3LqTEZboVDtPXHnMFAdAzdpL7hDS7Hd1ihdFhkXHtQKd5XJ2fSZPChdHonGEftBheph1RtG",
  "key7": "5eDcvzLyi5ZqS8GXQ6Xstn2wsCoqTJ6gVkczUdKr4PSKzsBQrv13voLDhiR8WiGNkp9kqZk3eKSQbG8T1GmRMqKR",
  "key8": "2MFqLCFVH4rGMZYeEm9d1Bss5cS4Cn7AR8VtMNFpgRHRJSj5Pb4kdRRRgbFuJNbGkn5vACCSEZGmQdGD95sCh6CY",
  "key9": "5UGuHL2sUgK29Ex1nk67Wo2AAjuSrJ8iSNoL7eCQ5hbsTzb29EMQXnbqe8hK93XZucpiJFjpWvhdb2hBGYuaz68E",
  "key10": "3Xa2Dfak5LfAjVSGASy8DxSpNyFYkzH9AjKo1Kvv4qmKKBc45th4zBVBt2sD6KwcoHZn4uavBa1KbXEtbqcY6FUf",
  "key11": "3SRkobTfXfUiF2LTCTBfqEUQhWJHkZrajMLGQZmkvSWTyXTgmXsTwVbmzUZs8ToQgAhgvmXnx2e2KN7DADhwGqvF",
  "key12": "34iRog7rFKvAgmTHGiuMebCqCVDKhTSJnd3WrNUDZaivCzmLSWmgmuWsATE3gz5rHsYcTAweSPyeKaDA4yon8dJH",
  "key13": "5ba5ZQPrnsNZEcE3YftxMJtD6iZ8oz4N9HDoC5Sf5fSjrJPgMTiRyaEDWKs5Q2Sr6rnwKobyuTFSMHCnSNdp2u6j",
  "key14": "4LwAsR44LoamRRwtNa9pNTTLERiQxAoo9RAYZ75Ean3VKSuSMiikgWVFmPGo1VBbgBPqhSdhQR4g6iJVpuhNJaz9",
  "key15": "5MZ6ATs8yyEUrM8s217ftcp4oSQLnCSpDsg7t5SghV6W3nwZGaepx62PkWf2D8U6L256u65owfcAFhaPcE7mDDXV",
  "key16": "3GS8rPsQCsTZwJSQGRroinLHhbpuoqmrNruoZggwh5boWbES3M7A7nh3rGGvy4frECfH3thZfnYGnPygQzNdYmz5",
  "key17": "5zjqHi5BpuM7K16uD5xeyBNuhzNNDTwRqEfptCiTckWu1TeUMqjxTvFSsYRL5FgAJuMAaXgmdHKHWA3kuWdQGCnY",
  "key18": "4Y4mugdMtQKgHM3ei9h1jzGZnexmUvbtsMuQivGE1JeECyPaheD7cnDxAto8vAVtxLbk8GEJBfCKngserUVXek66",
  "key19": "5pwn7b2RKWmKwgicb4tNQzsG9DD2iGRYR37tSeUsm56CGxAEY463EwxNu2x4sSpjKwu1NBVZ3ezmtGnpyGo91o6D",
  "key20": "4xvLkkkcJ1sDHy4WSbror8VmLLxcop3oasGbddyZ98X5BZXgMa17yV6411UejpemNRAYiWdpQCTdhhvF1pr9h87a",
  "key21": "2xbfQDojZY99R8CwMgDFhz3iCc5qhm44WMcwREnDwu8wmKpcLXovm9UvU4Hd6zEFLX63brpfeYYrWnf8v1XspKSW",
  "key22": "2qtBBbsGd3iLzWHH9rHTEJH2NvdEKn6C8grwXr4syAGV5fXUPAYNWCNG3crjtVESLCa18xwwuXJsBAe68xnEnL9D",
  "key23": "3adBJiQPV1cxqWzu1BQBLKFeoQtN1zzLq4XsQtDMkqANoL91ReEd4XVtm2vJStSFvZxF8M5NC7fEoKLpkk5qMeZt",
  "key24": "44nSGAt5UAvvUnhSSTpPR5RgYDrP4gEaiUa3qtdyD7JiyHLDR75vphLztnni1z7cuyWHBBKyvBJZ5bvGeSXMngTc",
  "key25": "4ZqAwfYdMcB8XQB8Kmww2gxC2hDFfKzmKrrnaQRoho8ZjcuZbu8cyGS5dhXJBZF3EgCcpTmhYmiVEyHiQbjKJczX",
  "key26": "34dUFgG1fRCxMWEwNxgvRdFZ8dSavDJRHu14AubcY4WkXZaUPA26MskHMpoFUnGJAKwu5UzdCdFamyBFYqcs6p75",
  "key27": "2EwA6q5Lbub2RhLCBz7DmNwswkxQfLnpbA7nTWRyn75Z4tvP8iEZaFZ3QwXyMLGQEebKGPTAjunRHenW1Q8K4s7U",
  "key28": "4QqABDRBipZrGWwYG6fTcf7Tb3wE4bHd65HobK6fPa23ZpZHK5XrzHj12C8zXHxPsQciqCSBRTinaXMgpGVf59tH",
  "key29": "4pypkrH6xDgZ2F8nuTw7G4juoToU2fcaJ9N6kVeC8tHVN13egZP3V7BvorWhLh9ha4Lse8BFqcJSD9jjwGBkff8Z",
  "key30": "4xZr3DUyYgMJNjs9YMVU463eUpKrAWydhveJd2bLdAGSW4jt1t2NKgjFN2PG5GhQagExcJ6DktWwAaqtab8uyGGQ",
  "key31": "5DSkJQyTeWSFveRAMvqt9ocbNKiSc7ewJC9NvPNrzs23akqc14Ssh14z3BH9Jb1mAaNEffLCGU3R8Nr13nw4BrMX",
  "key32": "3ejYDpTzTso6V9RZFKVLqaTuWS8vDuKeTzajQJTvRBGPG7FfCFSu46g9WLqoMw1i6GzHP7VVLrcLZQ36mxBHw1Fa",
  "key33": "4oU4s12CDn4iH4QWHESon5fZdT1ar987FAcx3V3NGst62frKFWTVMf8FkJjRBHVUZ2et5JsU9myKTdzvBBoSSWgT",
  "key34": "HXRzDumF8EtSrYCz65puiQ5ixXNSfSp4ZF3iSCfHjr5DCKRY7wjuVEebWM6sm78PmYYDA34WRubpz4ZrCBG9AD6",
  "key35": "VjPah2U6e54s6J1B7dffqF7gHG222RqeGuDaBq7LzFZcUHAWhW4wNYvf4sdLY21uJqZriGotecLwTMwKiBq3Dg7"
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
