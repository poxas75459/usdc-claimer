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
    "4UWAtUcZ31FRZWGHna66e8z74gMMKTQWevXxVc35uhMgFaB62twJW3PCHyjXeHWaQAGqj8s47vX61aaqSrghNt8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JuZa9vj6DUad2whrqSZuSe9NXY2ibG5NpmT43zk5R3vJwMXoy7MaQrP2Funq347RVfbDrTktdRdTYFTunyhvvwu",
  "key1": "UZB7huSo2HgdBAW2Ap2EmDinDNair9W4Dw7NiVhS8Wi7oX5erRKBxfZRndRyryWmHx8q1ewdX7V9RYJZXTQQ5pp",
  "key2": "2Mt2B2F9e9VdmDLCXd191smVrxfNVZGNobA9Dw99o5ubYoFuSJ4E2csEGkBLt346o9cDmj98DhR4LCjVNq2buTza",
  "key3": "4qmmeAWHW9roZDoA5u1M5aTx2d2XXG65vyuPhrh4vWkKp1ASzMCdzLW9mTpDEjecrxVPWM2JcdrDpp64LCB69Y3L",
  "key4": "5KdJafHFfUAERgLxW8a3t2wjcJyBgxHvG4bexYYJQsXKXxjYoZi1vgHHeKhdnKVRgtgYWA89yiAzEGzKKF6ttDB",
  "key5": "3hG44b9e4YFXbhtqUhhgaGH5SkHffqxDVVNpHR4HHe1ffEEZ8MwzcofBGzf1dUucXFFFRM9Hc5JtzQrKc4t68m6t",
  "key6": "2S31r4Py1ZLc8vxzH7gcPQyLKCiyqgNsmUFwxc4Dqb4uats1GR4MZ4WxVoV9fDBYN2uJ4WxF4qqgWgVeJ13czApK",
  "key7": "5wRgvoUQGtR6DQNAN1eqDn4diMDKiQWwg9DYArNdWSdZBGaQtNHYtV2Trsg24PqFsxVbstUGahw8Zova48tgtqWf",
  "key8": "37y6FeQpp9894kP4tWb6ERURD48ie8jeQMvVpqU2M7ZBHoVdKDXY7tLjD6JGJdp13FDrsAheiWLY2VCXR4aNkzBY",
  "key9": "3VcZ3DSq9JetdUMSM9hLQ73TR1eTSW1H6tbbSQy3fXnU8k9GM4BxR9nXgGpnDAqfjbLiKU9SHgSSHCscWwvM5VzJ",
  "key10": "27qW6sBWsCP3eNfpXAVvW8eb3g5ZPJBLUN957YFBKBTZCbv4y4ShwDwu6R6cjpp8Y2ChmLNXBFTKmZEMXNm2axLB",
  "key11": "3wgz4ckJUKmyzV3Kk699ydbezv4Bnrzp78F9nEpXn7osXwKUZpgE7848ASXjBtyWp3CcbocCMR3VwfDSw5zqvsii",
  "key12": "2mAj4EfAGpyQuJ1CmY2ZcRmjRhoX4C8uzQGiWp7wAg99gjiYxhxurcUeJbRVzHfuSGmT7esSSA3xmKk1R4jWdJJB",
  "key13": "3kEXLKksNL45egyrd38asUQqd2ZjYS9NFiAgUmufvs4Ycq7xZUyfhbU91W4M63p8psWabyubEYqkNz8ra4EzoG2u",
  "key14": "T4bWo6epLhamAMXBSv8JVQnZbSkpgHVaUBV2isFY4kqqjFJUSgaehQVvxCQ2ci3RFc3jSci2kt4NnSxPehL7g87",
  "key15": "8aDPK6CSYU29hfmF7SRobJTk6PggbesLpMnRGRmSiwb1mpSnpkKA3D9LzcpqNmof492az5UHAb5gyY1q7zQmTjH",
  "key16": "LjHKPCiQA8RoTBLNkEJKETPkoHB521AJLugkWeG3eTtSwGouciT1V7QM3SMkucWsnsKifMjest33PVSYZdYTnv6",
  "key17": "CWbrt4B7UJRTPvw6RkontTxz7zbtWSL5T9aWQD9ZMWhkEm2SWcQrdXZKk3gdNpVJ3eEKnL765sL3NXYENfFQpD5",
  "key18": "5WTyQuR1W3JGZbi2SqXnsgjsZhY3Cwf8nxrXxTmv2P7UnJ3RkgtWMczqdX4pmy4DsgX8iTTGzGbLMdfAgmWTGwNX",
  "key19": "4FKDVLccufQ22gAjh17hkPinR7VkrdNuQw4nKiz8x2C9Pyv777LydXNWcCUBZD4gzw2tBrDwSYf1La7j19dx4oLB",
  "key20": "aF9xqea7wfAMyfYuABFUsf3tzmy2DBFhGAPHhL2tRPuwHxdhwJPziG9du3aLWY8P1igAckfu9XrezaCg99V22Yy",
  "key21": "4PgF6ssHs8xVS5jnSVa4Uz7NZwK4fefA35soMt5kULatWFbkX9ZK2dLmsdL67Viq166rPYaL5TFuUG3SXvpzLWvw",
  "key22": "4AqiUrDC34QAj3Lp7c8WabCLBKdMNuFzEnkb4nQfLH28qrpr9eYhDJiAtq1c8S9s1P1voyybzswgtuMZgaenAKXA",
  "key23": "3mYUQ9d9YJCEHjFR1GfgKcr1DajBzkwnoGono2PEuPtGmuwdDjtb3r9ia3rE7zPm2s4vSFuCgcc3L2fGy4nQmSro",
  "key24": "3Y27gBJ5WYskBwc49BefyHhgZZgAsde4saE6TpGXxLZttfd4ZmpTJyqPNuDunV6Cpj1YEnpHU5HSrGJLb8UZLBev",
  "key25": "4Ms23XPSxirixKL4yB8b8YZgnmzwK9mdgpmXTUDsYySv9mBr8JzGTccptm7kjKSD6Pxry5iGrT4Qha2Yv2JmNMhC",
  "key26": "BXiq8nWRQfwddjUCvpCkDPZdQJTNZSx9UduB75D7LuJTgx6HRuoCLhrG9W4bdeczpzwM8XqMTo6SuxKoa9GkSM3",
  "key27": "3A9MGJvTv5ZiKHn5kAJYo1ZdbW4PW2z2CJoaBGdUbSa7osEP2kysmdvf4Sxk8sCNfqwCNkfhrYibJ3EA5RqBaz2y",
  "key28": "JNufchjMzkHPdHKJidoBCiPoADDRXbimeVHKuBUtp5dbM8DnsQxw9XdaCKvgBtzVDG9jkHHjjUyxKHSfgsVUJXf",
  "key29": "2gm1meK3VKGr2as1e1eAo8mmGTdXfSh9U8d5dfQWg7fJ5PCKV9WDNX6neRGtZ2bEqRh1WruXrRiRQZV2JKPPV6r5",
  "key30": "2MyjswGXnamfmYrgMRpVR733pKPYKxkqkLDwkZdSZ18DbK65aVaXiyvmJD9SBUMVBiKW9VNj2egvaQsutrLsFX8W",
  "key31": "5fex2eC7yk7YLo5roKnY619Hyt1d27UfCVPu2WbAdHGHwBgyF98G5GBKcmqyr64JhX93nq9opVYU6G2bLLmhXeD1",
  "key32": "5B9emSewfHr3XYWgDQY1iMwB7s7rHortsHqZ8fittRNpajn4zoXMFvUjs2TxWtoK9gKF9Tu2KKoo6wDezkCR5V4K",
  "key33": "4rrvzLn7f9hYg2aVGgFjEHnYhZYEFTJ834ThjGYwtZmbRHBvjZYyVLqkQMhwSKh9nyuFeGUYfBiFqRCkscQwdMoP",
  "key34": "2UUk7pPD2DDab3PBdiMoUguV8echYPLtwR4svAVmvetq8wc9uigWH9u4aDxVx3zyNtTYM4SzGiPQrUzChT75949L",
  "key35": "4hgWbv6AVijiHkHNfpbvSihYWLWsuZaHywge7JcUW81PTYwbjpn3qf4yW9wibRx2TvibpiQbeb26RA1voxZQTDNh",
  "key36": "45zThQhvAisjXHQ1jUo9AeQH72fyHeg2HHMYGrANvxmWVvYtEvoQvbDwXuZi22hRtNmGv32NrqDzKhnwkhwmiiBN",
  "key37": "2kMzzp94UtdFbgNcnNKsxq33RyfqzBsa1HxffTWoCy3BjJsdEvbWMTibkgzBq7fXRy5J59fQK88tHfasNZ1r9Eym",
  "key38": "Nq9WJjPxdtawUdmhsneyCbYCjiuwCsdDHtbgFv9DEnWGmVubg4VnDtHrcRkiGuNMSzHqrR6AJjbakBWYr1dhS7k",
  "key39": "4YhG8qodVjNhx7BhQPBQdu5cNtcurrEPRGX2XurKHPwgLhu3zwrXnh7kBxTNbSFuPkho3xcNepWFRD5xvcRJspwZ",
  "key40": "3v9z5CGZaB8FqgSpsJkDa3CMkCTWirxgR8WFDmEJqBE1uLdRm6HH3CQSrcB1VHDfD4FYsgpe5ta6qieXyConXxf4",
  "key41": "5LizsEmyACBZa7eg99A6xN3yiTVQcukX82iDyUZMJWqYgDwGtDgRbKDB7VCd22Tcn1tF2ehBYszDBRBsiSzRycZE",
  "key42": "37tBRPszu8qhuSSnuGckZ2M2hMjbrUmjdY5wdCEuEJjJyCyFmzSJHBTh6sAfZgnfzKHoWk91U5yFDS2aw2j9Gjxr",
  "key43": "29P4TUF1JvKm1x3YVWJd2vxWUhBkJ4gXTFLVHWC3U2EB4snx89kjNsaT7ziUHUuCGakiW1LVrhhpDS8EVrHVGs2X",
  "key44": "3aekgAy7ASYYEYpX99kR4SnYCevt9vKbsbykVup9RHCsrGuKXFCE9CKrFG37osAip7XQ8PqbjJ6TxrVtjdLXCPTh",
  "key45": "5RwWQd8kN5cp3RhGqj5ZTZoX2qomMNpD9JcdDLYVo2QrYtqLxdMcFsfhfgArKZfExozxYW5ZA4L6kCaLAtyukWDG",
  "key46": "JosgQstoKVZbkdsfCLDyoE7UUWubZUtoo93P9GpPAHJJc6V5D7FVe6JLeDPhaWpiQk89rxopqfx3NyNZnyGkaqH",
  "key47": "M4zQnCNAnPzM9LteV3ECqeu74yjyBvvN4wLf7V121dnoWw558xZSmq879S3EsEfGKx1hqvRTZ6LT5FJG6qYUsxE",
  "key48": "2mQvrK4XcMgDatAxAEWCPmwqpZnRCB4ck9i44URrqYDL9FWrp5xkxXw1tmuBxsd2c2eBjHGyJQnu93MtRMJVaTg",
  "key49": "2Ltfeik96DiowPdtf3agPNKmX78rZqeysBTKesXMVUHvuSDezt4Nc5RntYnHpKVrH5XwRkAUh95defnsbesdjhfP"
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
