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
    "4EKUMwR9gXdJ3sdUtsCLcrm6LJ4KKBfghy1Do9Gj4kNBzxKQsn2GAQZG3FBbDfFqPvapK7w6HqUT2Vegvgn6T5SG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cYtacsoHcpnTknZKGw93pBq45mJsNEpqYwDuEjBUMzWxrMeuXC1mwfSbHGCnmTWe4cc9j3SYGrcsMxf91LsPtYN",
  "key1": "4xwrUkMGQ3m5vmpcUjTRRDCrkUqmzhDrWkbDALqepbAAZSXjWAmVkNMUVCRMJDxxh5V6HpTVDZwbkq1oss5i25GL",
  "key2": "58EkW1a2RtYUpPr8rYjZoiT2AAbzNjLwfGBEexJniEFmaAp1fyjev4TQPx55ChJHjzvA4DVtyjdqBd39CFqB7TH3",
  "key3": "5Twk24AWgyii4ubXsWcqjaxL23WeAsk6BAPAdtT1gFgJjMokMMpYfvGNKGyUnpDAGks3YQJreHD6VNig51vvj7CY",
  "key4": "3Ys2r5Tq2AzdarXyBQPjp5Pq6z98QaaVNkYMeGKXsf5QNb31VvduyY4Tfr3yHv6QydmLzBpYo2jtkvhhpgpcoe6p",
  "key5": "GshCB5BRfhiuZH9gwzRKUWdc93KvwG9ZDrVTAyYHbN9DWr1djkd6mfqJSkVyKtjUV31nyYNziiUezcmTpKffxtb",
  "key6": "pQerJZnQoyCKWcRrCxt6tRuC5zY4VND7ek6xFECE4sdPnQxHJDgjtuoFWAiKH58C5adFQYfoCoSG4JTa3AbVF57",
  "key7": "51nRWU5t3pdBduPpZH2M8Nekabopyjn83jhzAo6BXbvwL8MCsdSkcbrU3W8eqFeKbrf3Puy8ctdkxeoUCJDNm12V",
  "key8": "4AQzvy1FCmZjqup4HxZxAfLcwH9e4WQEUeAtsWGy46PRrbxJaCF5XsfqJ7utoRM8q4V7j2LMTzucmCQnAaEYGxLK",
  "key9": "4b4xgvbTMjQo7iqiPptKm5oJBVHwuDQ3auBToXEScysvv2UAGeLbwUFvciCB2wfzxGskAohwwEqsFhiUgckMri8n",
  "key10": "3FVK81WcMboyLZanUvJi7CCLTcaDc8XLhv2UhotSGAAsxTQ2Km34xEKUPHnRMgT4VDFBMUzPn18voKWhAGHzoxkx",
  "key11": "581ZGyLJJpQk2F4MW9PbhwSTnoEcLDhGLiE9aPtQ6AdyHG8ciMMY4Up7M7dqQoTFHWNDwYY6v8XMxr8xBhsVbAze",
  "key12": "233pZpxofKEmXWrD9hzq2iB37hjaCezqc21FEZBoYRzrRYesBxnCyaEQ1NmwTEX5VvKmcEhWbsTN72qv16j289ML",
  "key13": "3sGUpT2suydCNapiYaUydyMJAjfoTTPRqGr5Maseja17mKGK57Csowioe64qePzmHpKt3VmGiQ78i7Lq2oWTK8y5",
  "key14": "27tNsZbS1kGE7CHs9yWeRjs38kfN74mCSYS6GeyeREFLUFNYh9S7bB2pJ1Jm6fAsaXiKigCgFmuiR4wxi9oR7RZe",
  "key15": "3rd73omgp8deY5AQQhATj2gPMER1QuV2yGzG5sHvS83AyMkkauLPnWKxJ3aCjeDAaMTrAc8f3nc2CHiAYKqAXQGt",
  "key16": "XdtUSFfABVG4UC21GPRiZXbXzFDfCGRaP9MBaETV1zhNaZiKs3rRM2tSJC3xZPxEmG8UwzbKNLfNTKK1179AmSc",
  "key17": "9mvpxMNKWen6MxeUj9Bjv7WeVVhMnton8T3CLTwDoUrnrNuJHKgkpYsFrR3DNJ76e1AESi8CCxvn3oeAMAMdbPv",
  "key18": "3mRkDqhtTHVyvg7nDQzpn1PUXyg6VCDV2ferBZPDNq2Zqh4Bg8RZzJLTzR6cQQuDJ4ejcqtn8HUEzo7apb2mZef6",
  "key19": "4QeRjR5tDnh8j1KU5poMqnfyaVjBBsRiCjLwTNQfZqzisHmkE4Nr71NE1sV5ybw3sbZvn2BQRKDcbYdPi2uWrkPh",
  "key20": "29KNAVmp28M6jy1vZtyx4JkLFPKiS7LDrUpNGqQoV1MWRfizttqokZddxXvhsQ3CwAtUSjMCUgYBFacxVSAh4Lf3",
  "key21": "2hHj22MAdpc4AAkKMBPZ9QQiBhuUzoaG7g5gNj868K9ehTigHGPmWsPKk54chK4s1s9XnNPYsGT4PRFQVMjeaUN",
  "key22": "2BMaeTUYhpwS2q9jkTQcjDkgqN9HXUgngS2AXPeCMr2nhd86kFbV4hHEv4hb8Ek22MqB78tNRn59UawAMz1jrfyq",
  "key23": "5oqduh4Xmd1L5TPfrhYTtrSa329wKLRYxh8a1CPYdMiuMosW3kPNoQSTBYUmCajiDq6fUeDMXc3mjyqbRE95xkAy",
  "key24": "cxxj9Ma3g1Xor9Qg6T6AGf54nYvYJyEVWGkujBjchB7YnEbiR9yUGDoWfduZX489fM7vwB5vYcy6bNMM65Miq1Y",
  "key25": "35Svo8PJxRiXDY1kr2h6JiSTqW8v6n9yoHjnL96o4SepLgqTGrRM9yDuPTYJqueGFSTTWoYXVhXGsmRaqsaLoAaV",
  "key26": "2atpoHXco8RQpyQ4aTzJbo9m1DjkbtD5n1BjukZNguRC4owAQxbLRRyhBgCkhCB2CJX15uK7z2qPur1CtpMqhrjz",
  "key27": "2XCnjJ1ryzbwCxoQubNZoMrbXXNAKdHEeFexvH3mk9n663oW9KCq2y9GCPnh2jej5xicavBjAar1nYY6tHpXcdmu",
  "key28": "3UydzLy4C1ZDznXLcQgWqZk2kH1tXysuAvETFrd3Aecmgjf8nLwkDBqXxSTRB25BxN5zbgifvsLcCWn1Cifree57",
  "key29": "nRnEgmagmdehiiLaURaprK5sMuUvNJei5yK3CEAWtYMWQ1JtRgGxjE77E1gHiox2RVEjDywEev2PDajdj5zypgB",
  "key30": "3QwfqBuCuVo4cCtoc3BfSvXwwGdd2uQNP9srSXjHm3uetQHCAXYoW5v8VpNJHGiFeufHoQPUY5xHK3xG671o6UCm"
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
