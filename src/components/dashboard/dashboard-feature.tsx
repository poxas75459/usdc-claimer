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
    "5RqS7bCfDFryj73KkNfHqcVc8J2ntHzfXKzUt3Qu1yyUucWQhFTR66Lw4upuduS9RLCj7vv6FBVFNWQeT3u6yxB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifcPgTyfdmzFTLEAimr8rJwdx22axQbfVcneG9N8AeNKuTQP2J3eueumAwtY5uE9DJW69WVStF6g5BniPgpq5c8",
  "key1": "56jCUqeFe2v2BJSpkVMpZ2afvCusnKQdP8RCn9rAVk1pwfU4MxKEtdvocnPGw3Vo9NPdax93sbZwMVC1GukMpjdn",
  "key2": "52K7g7PRn7Bxo8NPoC9nX3irASGVXUs2zKCHDypzsw18SgU58m1W5JkHj6PVY1HdVc1qverGCFL6YEsUSNezeeV",
  "key3": "2doNsvcyTxBaf9EpWFwuDACsNGddD7RCxRxYp8rAW4ijKk6aRKBJqksqvPv2Zueh7iE12M3DaBxPsVY71K9LrbQV",
  "key4": "4onFFKpXuRgxECyLe1H6UWjZeitHWZ43gBbhx7uTz7vve73DDdpGoqTLT4xEdZHdXSsWUBLwU4XADJN7oeSoFAW8",
  "key5": "57MQYQsJJuzKrNRXZxEJsRdW1N7kRTjUWAs55CJPKzQn2qZfLr433j6EYReuGCc96XknHToFbUCsdX6WrP8suY9a",
  "key6": "54nxtaJGbLfvwqGUcFNYZXQr4Xn2zFcoyqz6sp4NCmoGWsiFMwTXhXJtiiuQm25eFgfUq6Q7DViPLHnFFihKx63K",
  "key7": "5HxM6bKwCunxNd9oJZWvutJwcpEUfxELVvhU77QKEuKGbd2BrTGAiq35ndnfNd27V1VQD5Z2s7bKqqhBHqeEvE3P",
  "key8": "4VXcStXNoKycVUCr6Y4x3236Hx56umw8tsZ8y67GNzxgyaWYDDCqLZEBDgHLkNbZ594K63ntGC9QYMksxahLy835",
  "key9": "2f2uPVsfE1ABnfhWB9VVfHyUgiapnC5LJ9hJfJmfqprS5aoyTiBxDd6qgrzZjqgDL87CH6SveocmjE6JqbpaF54s",
  "key10": "TDjM8oy5fXYvUmFrwwF49YKxLYjUDj3FvFh2L6KCFHfkKtQ6YndXriH3zqvCBud7grvHrW4GbT5xFhY4Js4wcZx",
  "key11": "4FFuZqUpYWkVZvLuBUsTKDfubU7cNkVs4C3WDqjaHyQZcsurT1owk3BDbth3FeesTin6b6NbGJp2Gc393hZCM2PQ",
  "key12": "2zYmge9czAmNZCPKpKiYDonsHovZMkghkbuPFJToQGasxCvjwqXWJvox2hxVcL4RQYz6SVq7ABgrXU5Jvtcs98Dj",
  "key13": "2d7SB93BvZpzwJEcz92gVnzJvLPr1oaW3T2wytqweKCKW4Q6YotofKSWVU5AZYnXutea3JESqNaBEfv3V8eXAWht",
  "key14": "ENQcwd6JXukqdv2shYN4LmbF66L8zqkmafJmz7WRc9Dzvy2vmMri7jbi5NKZVVobZuAQdkft6Gu44mKYmto1WFQ",
  "key15": "2U38TVi8uvAsFZ5wNgFQC2wjoyRnJm65uFwcipJ8Zmt9grqQm7EL5vbJkHVuaTesgnYYNS8VLT6nJpQEQhNAanRT",
  "key16": "3MaDj2Xr4kUArbiwxgQBNSvGGUJr7G52PLWLjmQ6ybTiWkrSZNzyeX7TWDabEigBLimMeBXjA35aJFDLMZ2vfBuP",
  "key17": "59xUgn3SVNWbJdud73qB8ozkrfG8Eyz4M7UdNsqBodoXYZcEZxqoRUJwk2o4eoQqRfz7DxuvJEVx7FxeWKarqZRG",
  "key18": "2FqZpjbdTRbXmMZuAK7f6YujMrHWMmr8kMBBiMvTDZkeEfsPWr94Rrz6CWnU3Hgs893B5nPJGptsudP8QZrzc9w8",
  "key19": "2hPm78KncKkm4e64oQcFfa9Y78rKvef3qPibDjngKGLtoHTcTZpES6k4hPZ7FbVfKGEtd5Syr7KFyDv8D4Ewhjs3",
  "key20": "5XZzuZMECLc9abkv3V9x6bkDRWHo2ZQzNY7cksnpy2BmP48zaK9iaxkf42uNeZj4tqLYG97nmjYX9StvFGWZyPUK",
  "key21": "aBReDccmAEBzg1GHtMGeLZVTFckDSoDLjPdtFrSCFzJAWP8dQQFME8XuXsVyiCPcyoYqfeVk1fB1LD3ZC6iZh5n",
  "key22": "38WZ4QLqjWXfQcRcpSGGogzzemA3kYwM75f8W9wUqXivydZXggBTbirUGyWtStPaSrsCfWfdHwvxF9NSUhjRtUVH",
  "key23": "5Kubft61JFyoqVqKvjPHYgj7PV8H5nyCWvsWbjUAChoCBc3DVGqv5yP56JCTskBCngiChqWh9kW6ufmmooSuRU6d",
  "key24": "2ThG51PCEkJHVKUdC5F26rjyD1Lnvs2x3JxH2e5wfQTgM1V6ayt9ZHGhpHHNvXANog3YbLycA4AEUmijzBkxji3z",
  "key25": "5xiig1dR6pp3NkJEs8r4oXM8QDDwdz8NpJmhkkgiLyjsGRGBseF4Qh4zWkpnSnUmpMF4RYDKPjbjnorp6YbGzeUb",
  "key26": "3ggEYz1xtgpLV8rgRQ71EH2uQ1Nz4aPmiFas5RbKk4EBpVCtWxRXxVqeYPc5nLSJSYmtstf1cWnK3Tt6QpkMqHEs",
  "key27": "isZ75HiNYL8tiDKEeBL8dCwfgXg2gfoAt1SmQwrwaqLx9HYJTUpHVP2mu56csxGxQmPgrapBSpKEU5HpAwyMuYo",
  "key28": "2TLw8WEUe2aXFWnh5ibwz6JaScGHeS9W1GuoHSXAiASNNzahToC4zcXRxESDetXoTzq2DepVb481HjyGBGYko5nG",
  "key29": "3tabXDjVcwDzR5DQM8ifBZvfd92GA3AgWfRQPUwjwZqJmjPJGr1VRz4LmCchiS6FuRZmkJocRZyauVXxFVZHexNE",
  "key30": "26PVwNcJaXqzwQf5JZuucs2Y6i9NsGfie1fa1ockN5nMzGD4DMdq7WsDzUBKLDFQsZzA3LvedeA6S6nVb2471zwo",
  "key31": "4Xe4xZpFNfeZ47Eb1Y1oYwYKEuotF2qNVbxXxxsZheWvnMssvZBKU2dwkBq6Y1gk6cxpPJ7CDgQB5URFp1hzXRZS",
  "key32": "2b2auSYDZ9W4LuQ7CAjGqVnQ2XbotWjUpc2UrXZ7vpQ4Ns8Nhx62mVK3Lic8gFWVHQoX9ufDkUzx23baCQL2vQmX",
  "key33": "4vNvvPJzNqDUY76F4LwBKbpgGyUvJcRAZ6cE8EhxWPBi4NjkHqCeUAvzPmMizRXhFiYMMnqGLiUBXhvPjXB87Keb",
  "key34": "2kab3mSYw4GSUXRefW6EpKX9sbaqjPpwwFD1GyuX998ZbQtqDoMvEBarP8ZpPYq7gtKPg7cZ377DqHjJewxtLPaF",
  "key35": "5HXPYsx7gtpEqoQcDabiLvpQhDhGD3URLZiPkk7qf64A4bXKEfabTBZK6Gm7gvXHHi8jQbjjSNErc1skjTf5d44t"
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
