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
    "5WA5McyHY4WRWqnxYa1GgcyTxtmcH4TSA8BbvFdTm2ByC9wrGHJpfgbf9v8ieMb835fJuF5s1wvSoD5gBnEguzNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TkEfJLZizK1XXBW3kCenMh5wQbXGdbh3a7EumdoQ6qYvuj7yYNB3PuxF3WVCUzwp1vWWj9tkGp85H1JaiCWVBC4",
  "key1": "4gjwWK4JsLp1x7HbzfEJCoTiURUs961meXWgMKf2oqFes47AFKjAUTndKa7xz9yGcgLchnTtYQqvsfRuWw1vYxuk",
  "key2": "4gQPvow86eUyQVD3QAF5m93KYpjQizMbbTjz6ggBna9CUBBuqTMedeNu8aasXCsmrHU2KjyQ3eUM1b3kP7GgX89G",
  "key3": "3BAun6HMQHHhckemE3JKtaK7CR2ZYfiS8RbfL8Y4AgKEGgmMVF1v2a9tY6vk7BiTMMpSnPKMnkPSF4dLCkWFiKbp",
  "key4": "3KptzL5uSpENmmNmsaciRwyao3tid9vAQJsJvxjbmVvFjPJC31VVHhtcpSDKPxDDVD3uRRPUZ8prKMSW9Xrn5853",
  "key5": "2fT5yc9AX711uSFp1JX4uESfE7GtLKec9jZpbucyHxoXyqzWsTGAt3HrDF7xb6Sbekowqjc7FFv3A751wbseUYmd",
  "key6": "5Bd3ECAarjV8YQvgZZFjAp6V5s2PxaUQF8Vf4GbsGfDN2c5DVy7aMJ9JGQNqQL4CnRuonYe4dtJFcPCQYv4VnsVF",
  "key7": "2H98rSfvd1nysdoxfqo9GMhd8QuVcftEpDXCvr6r1Sqj3qNKLV1TipLEcjKqmtEq7p1ZxBcSnV4K4CZ7ULBfsLN8",
  "key8": "29ggXxhy2Yw6STtju8C8dJRjE3ALQjy8b8hedx2aVPjqvK5uacvvT5UR4GkSzrNRtjrm32W1TXa8Uz818UM8nmwL",
  "key9": "2S89J5wAJU6jgmmEozwbB63reBcFWuAgGso4DX5Ftgjry6sVmu8Vg8eC7t3q1QUsqNJEFM4QoLgbPTYiFkguvVT5",
  "key10": "5g37vQrwkDPAwzRLHQpG9A27MrCMyiquE3Apju5hwsEfcPreYM3yYCRWN6GuvQuVq9XFVDfmrYqW53pnokt1ewUb",
  "key11": "5qf7dkVn3u4nRVb5Gb2eRcnHuWvf3GtSUkjiQMSeNJz86NQa9ocrj8Jkr9R1uu4Drtoy4tVyeBwoRFaQmZAMk4Sk",
  "key12": "43dMs4nbACR39dp3AAczc6yi32V2TYHRPuFQtPnj27RXsMfE48z4XmWpuCw1Ena58joPUsZvuipyHJEGCK91aeKP",
  "key13": "2q4tCr81FzrnN5WG6JVtE6ez7xpYXZUwZfPwXMd7tCPqmeqr3AqPP96oiMBUDVkDpyEefJrP7qa4rMTtdLRqn9jK",
  "key14": "42HtCfPtiuT4xaqFpTpFQtMsZmZdCjKE2m5ndxuVdH67FbGXsgnwsqHpj8VMk9Lo4yRqyri2VDjChtLgyL3p7aCa",
  "key15": "4Uki7pGg3VaDnZMCg17FRJdzZLZcHBPH2GBLPnvDTmTGhWisXT81ThDkD7Zdt3fTUcp8Y5Pg4eAX2obCqEvve2dn",
  "key16": "5cpLkTLgqAWjvTQ9YgFkGfi3x4eKJ3Y6NQjv4JgHhjrTSRyALYf9ZWk9sbGEXja9mV2F1Gms9rovab2MvrCSUrpJ",
  "key17": "4afgBF6DP7UhwGZA8LGnTf4CXBUga9zi9vL3xJTuyFTCJ7bWc1tudAzNfhGVQtXfVJDcC1GNwe1b7QaEuYPFQ2qd",
  "key18": "5Ct3m7Q6CT2QwN99rjGYhCc76w9ZMgywCCDutxKBwumG5pRgszneJHsNahWa36y9sffzZZFKG4pBA8yjaRDXnsN",
  "key19": "x7JTk1eTGJvfEYHbvxUmTFjDE2AvnNaXS1a2DGDA4s3kVDVu9qtjxtfjA3fzc5n5ZqZQbsuJT9is5nADUuwcpbv",
  "key20": "4xaH5GT9N99KGW6L1hCDs4SfstuGv9VrYNyob63GuSrNbTgnHtztQoVgKKuUC9sYeCjXbTZEJx8g8oHQWxTrjC2K",
  "key21": "3Wka9NNSKhjpnpVJU9UAQPXJc7WonSY3E3Y6L2KyEavEfwv7wdmJWGxf4AVuyWJtLu39FNxBAXBoQuuxoJXHmxf9",
  "key22": "5yTCTWUKCH827goCsUCBwpgxNRXGXdC7n6iRbWg143PNAP7ztmMBVs8Q8SMHDcpLtoj1daZHKrNn6z84uv8Dj99N",
  "key23": "34yGn4ESWYeHRMggwqeEUAv7xqFYRui6uHseGLnoiu3L5kekL5raqaCbNR7haB4qwS58t79ZjS1M1NSeb4qmKR7i",
  "key24": "5kZ8ukqtBH2FgwwHSQKFGZSd1EA7PBDhgFRCdjVpc2PBDXttd8bMYnjzTDNR3AHsA43nTtE4tEr3wiu3R1ZRAYSV",
  "key25": "65UZD7BEkvgFVy6RoQ7BGo87hrCy1tRW13MT1kPfAh1LoMgg4AW66KJ6qQPaQxFZYLubxdNb9uvYh8G8gPd9EwDn",
  "key26": "w9frsFjmiCnFCJFQruPABEZmoYNh9LU737PaA2vK2Z3KnWZXSabtT8J4CRuHvtmUGQmgnFJmA3LXhxnr7D58Mb7",
  "key27": "31o9GBN3PcZeSwxAcMxAeWpcV1pKDMtpoaJAVSW4iBhAL5jgTeywnxPWqDYC3nMLdrWsL3vLo7nYr2QLcJmxZGLz"
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
