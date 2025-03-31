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
    "5P9nSmqRv88RBkEFn1d12wLK91YtTzkWckhwdRLq2kAtB8pan3xcJdiP5CexjM2jW8y8tFZ926MLDHgkFDHzHCAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CDwZmrTsrDVQrozj1qWmeTJ7SZ9gehbVKccHTnGuHN2ERPpzMJ58f311x3aYkT25WD5fmdshKYV4mMsTq7a6ywt",
  "key1": "3MgroS3Ti4mj6nQRwyNrQgF3RjhxojEvtacmXSrAimFYhD2sQyUanz1bo5xVza2qNCCY97Adxk5Q6MhzFgoAzRRz",
  "key2": "Q14CbW4Avgp948CHxG5vrPxmxx2howpxHzkogQMPeFnVUDCwaYyVawXnsMbUATgUSq1GSdxQT4ae8nC5mBizQtv",
  "key3": "2NfPgaJW2umqWYbXcRS7vRu2QfMaN5fkYbG7pT7oHhvemEDnFFxNhm583R5Xca7AtC63T9csYr3uXcG2BTykUBvR",
  "key4": "3caaQuQLRQZ7CipMNx3CEaJ8H5d6HmeH4pgXxxKqLJa1SKyR4coZhHE18CwMdf1CnKc2hAntDCWA4fPfixXkVNHi",
  "key5": "gbWpFfhEhJpjJuNpGGcSQV1MmL61oaCp85DqUWjLhB5VFcqEPmgZiZPa7Nz4xapmbXdZYFpAtxRMKfXnKk76ePd",
  "key6": "24gDHsfM7yoiDJJaP7vqvs4dvcmGjBbqAVr8F32SVhBRfkzX8woPWRNDpNmgsBEkh7mudkpvyQ2BXY6ue5tTvfee",
  "key7": "34DQidoqvzEw3TjRymfjv6Bp5pTLNMp1tVxkQBaQfDUbWt4Vt79PM81wgw3WHyKQtLRQjfVCYrY9hopawrSLrm4H",
  "key8": "TTRrKZjNxgipTqHsQvJ358j43CFEaC76kjb6FZjt7MVKwdbo9dcSyQvi46oTbRDP6vnrvSpm1Bod6iP3x7JyKLQ",
  "key9": "4Tmr96xzJft9U3isTb2f7UXy6me2RNYdHFjrTNq8EQfv5BCiVvCfr7tpnQ1swXxq1Po9Uz3Ji2uugYvNLYMBUNmd",
  "key10": "65J2xQ9mk2PSVgZxoTCgYMpuNCEDjNyFhwrBzhvVGdoV11Y4YYLwZVof9fg26iM1FoaDgQoibDr9w7AwbNfBAAXZ",
  "key11": "whHWJLSY5TRdPMc2Qivjq8HTjhzfcrsr1S3dLKYrkkFEjc4rJik1hV7nrs4SoHYq9BxDUZkbDNukRCEnurhxU1v",
  "key12": "3kTvAEtZgD1i4Ay6xYwVRFQ52vpDZmLUagEB69fPE1FatTUuqzjsceNPkPnYLnyPdzift7keEfVvGgAJmFoTLQUd",
  "key13": "3szpArHF7kQ3c5o2Ptb7MezoM7k2i9NJJugbQcTNHMfNYFqimdiDPGtv22JRhDf5eR5grwQp871uvdL8BRLv1DjS",
  "key14": "4fXxBzJ49fJvaE1JdTW3TS458FUCT86MmvfQvpbDzSdra3cjjkUDb4y5Cb4fyhw7RdGG2khtVtRmmnpMPeGVXsiA",
  "key15": "3eLwg4NVFWP1za7orgMZV2fNjWLPDvyd19JQUwHbdHpMRHxXaSaS9C5bKy7E8TjUJr4cquXuhPpiRGmPEj89iC6B",
  "key16": "2vuqZLbTagePnhkAEF8UtB3k3J6gXvSpksS9SBFwanhNivmV8ybmBkcTy9sXUBiNJHU9GyprGJ6ycyaRuXAfPAAT",
  "key17": "4K5JyTx61NiJhGpWCadLSxnviA94WBAHVWwDK6N54EZ3dHZfDBWBKDieb1rdgYsbRBxLVfNRU5NehbiauojiekpK",
  "key18": "KG325VoZsHLAdFHuMdoDbd3cq6SsDE7KXoxwwgb1TUonPaoY5wCeQR5chMqJvX2fHW313dL55x4JFEza9UT8EBw",
  "key19": "HY6YjryivnRTz2JHBxcGW44S6ZKzLhYTagMtnbS8tPFuLEfEbyEmkT5gP6Wnut36LRt1QunmWj9kAyhqAvBYSmj",
  "key20": "57fD15PHccShWiJusse5Fqm1LkCxtY27i7qiWYJuuAAApAkY8J1PwyQPv8GuaanrGYmqq4QB93VCRDKpTHA2fVHA",
  "key21": "516bmnPEAPpaRhUdWcCLuGzKVQ6dnddjFPM7GRNgnRVXUctzNExCNZbNJjmLd3VySAdG3JJRAe8c5umNGPfdxMtL",
  "key22": "31sqA51WTkARNYuhJkAn5JQqVWZhRp2rVxXjw7d5kiKvtDFrhRiDviWS1Eseq6UqTJuzUkQvHh9kbtqDENVd948U",
  "key23": "5eDtsA823sk5GPaXHdCcD1eB2TTC9PQKif1W2kk5ZGkqrRHYBWRqshbHWy9WappVdHqm5eUwPBWB7uATDPSYtcXk",
  "key24": "34pZXBvhct1BKpFTcxHh7a63ZUX6tZQCrwRZNXTYtUh5fLXZs7zqN17bS3aUtmrSBbwwMzegqsnH4NCcYYQt5cgL",
  "key25": "4USdKwdNCwEKNfFFrAhfQ97QdTV1xYSPbJVcjsAmjgjYpG5h8mUb884UHf88nZBpjvuGowe1R9TaKX4RLDZgaSdp",
  "key26": "5AMWCVJUV1N7EcdcoQ3WhhAGDEHdQ93eYAJ3DXuJPdxVbJ5u4i8S9VugjNkYgFwjfKeCWcdFpjMiAafsMEAHH7Mj"
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
