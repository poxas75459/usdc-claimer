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
    "HkvH3DRj4ttp3FvvFSamwMids4rdyGBsNC4XRKnzLTqQcWfxDe7MQxeQXLGxXEg3VmezftevExsHQB2EEkkZVri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xuEQDu8TAfT8vXzDfdo1r1qsUN7XEUSy81An3pAk4XtoPHaxZi2YMLLEtPYoqa6xhthCCUP2a3uJkyLVxiF3Fra",
  "key1": "qJTxj8d2nfiRxe5HuSkTLurCfCajtVjPU8njsxLENYvaAMaR9hftmcNU1ejqmNz9pg4QnR2DXSNyso8PyL7NLCM",
  "key2": "4DQw7MAiZaXha3GdpgpjfuPARSyba1H6jUy8B5Uheoz4Wd7qCYEmDmzKDNCt8sbV33RLuwS4PckZm4n8inHKPEn6",
  "key3": "5tQ9ABL25C5z3ZPXDJj5ofnmkuq1YQJ22GXHwxTphiLdkyRXqQXKCCPUbTHt3gnb3ssN3M4pdN6HYF9HBwNpTPCq",
  "key4": "5cnARwUH2YSM4s66Hh3AjniKbfTRHiAX4o3K6ogW9VaNwEBHg59soAYDPeYiNWHddHXTKapkvnMjob2gZ5d5ZVwA",
  "key5": "3pKQxp7i8RoYesrmCPp3y5Ws5cVUSPRMuafSwqQyMBffHh6Bi8oWvXBohWC29bfGJqFCm7UHS5FZFDwkw7uAkCE6",
  "key6": "kq7ejVFCN6sFnjvJBpk2b39Qpex9u4s6s5YTAzaSN5DRXgb1qkP3HAWQvquAMPa33KQw4SDUGonFnHmneBk2fbS",
  "key7": "3kJHQ6sTpkFusraZshn21e9G6sf1b4doR2x81tsUMgjGCuEYoYR4zbRgz8eBgvDtZz15S3EYXx8Li5rqbr4xudsc",
  "key8": "2yciazv7m6oEEmCWKAihUU8VYkfR3RzhMwPXc2BqscJWrwBC2fbAMUWRpgMdBWAWgE5DoLDv6mNjWPjNEBYD2xb6",
  "key9": "3kW2AatpWWNHdaMrvEAuXmnrrHwQnkxfqGobp5Kf4jsREQG3p9okHqaDzAWSLu91Aq1UUx5xyLRJhpq2H7VY8u29",
  "key10": "2iFsqHfiAt9dGXf3qkM11AtMSfWGiUvjGcJ6Ldm5wUGCURJxgam2MKNxcrCjoH7g6xUqMA4eQKwQfrJwzdFXXirS",
  "key11": "29JskiTYayyg45mmMzc8fAv7AExvN2PUJmhGfM9bn24aqqrj8LrWfUaGCxxBGYCeBqpf1KCoTdPJvdEmUjjUNrgY",
  "key12": "2m7m7eXJ1Zd3jWNvGhpRJS6MQSQ37LTyDzL7KzASBVRDGpB2JjocexAm6fRPpuQzAKB8fV3A5foewr4UfLxk9iK7",
  "key13": "5y2pKHuGknpVyJFrUhRvHByUgoFqE4buZ8J4YXFpmWfdY7DS5abjiBjwEVcESpkxwjque5Bh5DwyQjfuv8snb6QB",
  "key14": "5pZy1ag9XF7nhJht2eFYRpK54rqpUiWX1kPkXH7yzwkYGFvB4WtSyJRoGp3h4guEcBAVDeALpLLo4g6M9Ma1B4ri",
  "key15": "4E6BzEoqp5t4sDf2ExoTqJuyRKr7D9p7Wk2dSsEJWLyCP4RDZ8EpennkSVe1kjY4UC8nsKjQGny8uE76uFgZhU9",
  "key16": "3Ht1r5EWuF1FpohDPiUt7SbS4zK9S1C6ysigY5sAJbU6ZofEPH4cMMcRFT6iEdRhqRUEJPFi1ndyPVwF7Gf3pEs3",
  "key17": "3Y8X4NLsKDgYBJUmXx8b57pHn8RY2uc1Zom24brQWMcHHZwpXmjoy91FU2uBGRPNF3P86MxCCudRKfqoa61g7eR",
  "key18": "4xiPnAFKF6KCZ5dNFRu1RHkMcexeSz29dnzdA1PAmqs9V9455uo4umVGuRCWK5gLfFzRnndLgSPN4FdRA6hwkhyt",
  "key19": "2Z1kgUZjvhdRzcXAmcnMWeJs5VBYLEAh8MDZvGboyGFt33SMzrm2UhvqxCNPsyYLdzKGZEDA11BfJXFoA2vkJtFE",
  "key20": "4gogTebozbacDHbCgzBF1QAT7vJ1f2Saus7W9NksSjdsNY2FxL5WQ9YadEfS5SDysaxvNqZaMvV45PonQx4BKv9M",
  "key21": "FC4XvdgV3qMjC52j9uner8qCbpMpMPxBLP2VpytanoL5beRRGgt11Gw8gkk6TxeTxuJ2KaHbtzJgqu7NSsXXBPB",
  "key22": "4dXupru2GjcFBJruvioh8Zxy1XGUuk96tHEYeiChTSVvNuwt1Dumq3Nqha6QNRhapif4ZNu5HSTVkTX7nFEAfDbJ",
  "key23": "5kp8GBTdoaUr3wFoCUKRdtW5GzBaAMBESoQvoeBiGWBzndAA9fe1NRnoxMQNgxce5iKRCjjHYAJfP3CooZLrfFjs",
  "key24": "yBKnML8kzqL4xXWgMQYoUXye6ei7empP2BsaNqVqp7kiz3XE1nwekRymRS3TgFtaaEBWE2CFdgCY14fTWf2vASG",
  "key25": "3Ew4yQyf8PPH5e9a8Lqdh2a7ytwMWmo6fk8UigwQsziXbn3BySFnnsxoeQCBFSuvQ7mXhr9agzVrmtqpdMMBzFoL",
  "key26": "uVcNBtf5rymrPhgEX1vsLtSYNAoB99GrdCbCoSXtjoXaABxpoFpbD8roRzEJfCMfeapYZhqgWk2enJbpYrzVBkb",
  "key27": "2Qwpb9uNdc3sHhnGQdouzMBavkD3GT9j85pbHv6b1ZkXJ6SUNxTUKmAS62oRxYcYkwd4NGAdZhc74QzYgFxcTzi3",
  "key28": "5dPfHYobpWebH7hFwbpr3HNpFEUVzd59m3K1oLGanQiBmmGwwDnHjCMuvV9zzBrVLLB3YeZiHcfiwAyKtaoNPhDb",
  "key29": "kueAcKpYSjYAm8NKKSHT9CFBaNLkyF3PGy1mHXUujga6PtCNWJhEiD8vtfkNTQpJahamX7qYJ5h67pWDsYjtSPX",
  "key30": "4wVhYLKsHgUyJtJfFwnBFXZZBmnaFM8UkoVoch8q8hmzj8ezBM8uG7PqHJMhN2jwvcxFXSJSyTpTspUbNPif3Ckm",
  "key31": "3eoLdsWudhfLZWEPai3F7zwFrqDSvr9NkyYD9tBmfft83sYd7YRVbk1K46d2xx97j2cTZr8FqerzP2ynLTFevkTE",
  "key32": "FboTL2qwEyXBrLgwLTmHWtpQv1ptnyTj8duw1Ntsc9UUhRPJCzqv7sjCE6rNcuxXwDGAXptjAvENxDjEoVzZX9L",
  "key33": "epsDJuDq4g8fp3s8VATjn8TQSBLjx3CJQVPV6MRNm4Z9i3MTNB9jvuKfvH1ojhpNkXh15basuNb6xJCKWHmtekD",
  "key34": "2r4NsUpZFAZGcCJqbWRyWJkXFkyKthe5eMVeccLmi2XFnZ3eYg63CCUcB1GvXDgV2sWapo6ngd2gdb12feTF2dbY",
  "key35": "jczj9GjLtZehTfa93VyaJVFDC4Fvd2tjBbetqY98WnixGr9tLar4myNPijmpnQm2iGq8rUAqrr6ksbQ3RYW1dB5",
  "key36": "5aM8jKFUkxDAhgvVwJ1RsQ2UR72T2emvFz6W85YWPFnuatwoBw1Cy11r2hsWoLAhbEgRGhuo2krMKEyusnXbtinK",
  "key37": "BD58ZSVDykzfP8m2cwaEfsomcTs6qSdfgTJVML2362H2yoTvHKqmTTVAeMfKvQXpSLssWQnxdse5FdqY9v1B3QD",
  "key38": "4iL13ep6xYCzC41F932sECtaVYSRDVqm6z8KNhVqpbvmWsWqimMfQwxmPjsnaTkeqxX4nsFGH8w3S2B4B5nVRsvu",
  "key39": "FoLY847xZAhnNQq2JEv52oVrLewbaYG3w9XVHByo4gqHJ9AnNGXRR8X4cL8KtL8tfc1kswiF1bJLwXzCCWcfMDK",
  "key40": "5CymdZJpBgkZzAPyMtcxKetz9dxgE5i77LoQhZ7FpxpqVJZU3Mv8FaickgRjMZeLeyCnt8cbXbZLcSyWoTA81jym",
  "key41": "5qoMEoWDm7gjCyeebn7CYMh1Fa2nQBo4WF3RPp8vboTPjgLBWbhCHNC9PcGKZMm85tTgUQzKygb3uSK6d7RQmdhr",
  "key42": "3dRkgqdgJCFgMoRE31kGTPSQi1xqXE19XLnYCcM55GMdj1icp2MUyB32JFdBsyqKCdrfagVRjifguzrV38HSmByG"
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
