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
    "66kQVb8R1gfBmzTmWkhW15rf718iQFx8aWL8o3JQtfb3RBPVM4L3V1hQUfATDJMNgxoHf4WeaDiyTpSjXPvTjoDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Ed6eGP2vMUVgm2mZTzCKpCSE829eV1z6g2qHP5MbLiV8WeSq4LHAxLjMoom9GiKY59gZrxa6YMdFSdTDem5zyX",
  "key1": "3XZyyBenEN6DYCdadNe2xdWMZV9LF3ZuLyJ5bQqsxbgiyd5swmvDNrovCm2wMRQW7oHaoHCfZpEHAkLzWoVB4VoK",
  "key2": "hdfaWDPrxe1bku48rzk24GucfjKkpcgnKmDRt71gCn5ahdgKwgwuRf18n2AvBFdTESy114JkRRnceFKqcjLPBLE",
  "key3": "33FfzucRKK4g4Y1NJwfQGPwQyuMm3NUufcQqFBZbEbqeQhYRUnvT37tCcVA1uXc4yYCk9aU9yySLLkevbtW3aRAa",
  "key4": "2axUwYhraLU1ojPcAdZrefEQj5YsS9dDmNAajoU2nJd54vesAYzUX4oadE78nG1QaLgCrd1sRb2ZfUjPtb6w5d1V",
  "key5": "5prAuyrY51V4eoqjQCYKfVYcc96bmdj7pyg5oCaYZp3y3q7VT7jVsUsxZggQ4nAh5MDFbRn5U7vB3ttyPnHGbEcR",
  "key6": "2a9YyfTiouhyvrePwdEKscWUJpkaetG2sHCk5cnLW9Xk3fNnxk38jAaNtDnRaiFnSFocEyNFbEjBzmVb866JfZ6M",
  "key7": "2XA9YtV821ezqiYzTRSk2V1gUT5Y5LTSBr8P35LpiYnLbM3vNXb4Yo6amfyQzrDwJS5rs7J4qu2DnRUbRFucVTc1",
  "key8": "5wG9JD6FttnL4LTeDxHayPtuZFAHVEHSC92Byz8Hj1z7zoRGD6TBWggkH6ZpcGVYL2UNfX163mpZqWJbAJhtaqa6",
  "key9": "3YwYEYhxBSLGHNzHjuvQ9SpwrW8wRi69YuM9jJnqcnGRR7kzNer6SFhswyVTGemjjEjqfgnmTPXrkCjSjGXZs5u8",
  "key10": "43aEBmKfyRgR5gTCmG6G8dfkbURYE8a7MveAH6RCVJs4keex6rv2C3kezBWbWfZ19DiSBpUQjKVPDFUdqeD59iuY",
  "key11": "42bnX9ikwkt9W8CBkovUGtvxZHwVaPQ8sJ9qphad8ExjVFxh71phvxJN7ozsk2Zqbtyk4u2EgptGGoaGZ2iQVMGo",
  "key12": "5f8pMCQEnwwNfzyzTHAmsVkWLaiMkPnSLRQoR3cK4fU6ExQyoLfAzBU36dGF25tsroRKiWhfvVsegvBLDx5ECyYP",
  "key13": "4M2zY411mfRKBxbXL7N7nNqSuwRBZoxy5KqSaW4ta4MHrM88qn4nQyTGKDx5M4QqimhNfLX2wEsVEQzk1LjP1s9F",
  "key14": "22afdBRavSA5PMg9SKeGZyAb9yNcjKwnAct4eJ7BVZLjHFHFKdimAKtE5FpB42bEhFN6dEwUtRwWuuqDUScMNjvX",
  "key15": "3vjsJNC2CPQVEihL9j2VMrUX8c57fRSEv25jVZd5LTQB7ttsHwujU4TVmFNRaYgSfspgoYhSZwq5jFdnp25wQMyV",
  "key16": "2CjGrcZbva5mjUq3kQbv8dTSJv2n9g1PeMndcGeKVQGVfrdkW6d2kSC7JKX41nCvA6wDqMWUP5NdPsvHsQ6D37TY",
  "key17": "5hdKeqRPUhaTZn6DcSzLEt73jhYv62CEZbnRJuo8MihgF4optuvBvYzQMANxAN1LJQcZAGZT8wq8SgvyBxcZMWuT",
  "key18": "3WFtyykqPjnKDqwE6rBr9qLuFGqvC4y7yNnXNRjUSpguJiKB3HQhrjwfHze8N4Ez2TeGdrivzztz74hDNRz4sFkK",
  "key19": "5gvUiSkzk9pW2poeVsbcSnkEMWRv4EYxXUZpL7d2RDijmRqQFtDB7ayD8c1yQoS1LZdc7UwDyq7m8TxgbZADgj4Y",
  "key20": "4XhrADwfqCbrJj25jeDfzVTo8opU3PSy3m1wySBiYy2KEEbn5BFqsrt3DNNKVrEXB2TKuKdYSLWHWS4PggV97EUm",
  "key21": "4zcFi8eArcyaP6yQytZGBKzZPcHPHs3H4UNgX3hSYo1MiorYrYwWYpCGEtss3kY5C3oBw6xiNgjrSpdGsduzBfMe",
  "key22": "2nkFH1EDqQyELvhczCAFEyEzTDX1KVB9CmmZ6b3xfV7f4D1NYX1Hud4cYkggG6c7t9Z1b5kj2N9jAEfqahCW2xXy",
  "key23": "378RUz9iKNguRWTxANfAGooTBPRJo67edRwsuAVztwRqDV2sYGfkeGzK8fXMwZT6rDYAk16wrMovsmXtz9UXbFGT",
  "key24": "243YTSxMgf2wuY64PcC1AKfexyAGgXmqCH2wRmEV9NZ1DbQgw8QoCKNnSm2wXAE7Y3AuPq2qg2oL3yBVBExCrG1Y",
  "key25": "5mtZsmXxx36nYKd6zJmDa5XKYKwVPhYpzBYH9CZyB6P5avdipdHmqZwt9A4dKiUjkpncPMfUVxtKgHM7YTCKRtt8",
  "key26": "2WikAUJSWTLst7DTYjTwnaehsBB1mArTfmp6tc5wHtP2yn5PaEk4jaqAEtPtFD7Xcqsx97pUY22YfgCEA29GQzMF",
  "key27": "3v3XQ6otT8V8teNtvUgx9dB9dv8djXvxtYjuxHgCSPsmgF1PkfyHrfwjUncCchE5QTehUcznQHhSa5iDix4gW45R",
  "key28": "2TJ7HMNnyRkMJp3WPfcNy4wfYwV1bCxq95pH5K4RfWBrrME7qFBy2tcRAtiXVSYP2Chh8xWkD886zXzKEUWq4sbM",
  "key29": "5ueLRJjAJwRumqw1tLujeeg2ppV9PTrFXZ9q5K9ib6b28BSikonkekcw9Ux3PgvLBFRw3MLYEDzHdvcFtqqk2PNd",
  "key30": "xDq563A96Lmnh4X6asjuzZmm93bSyMHkiWmCTZnXK3rWQ3vtYDzhmnBYD5cCCTShUTzyt3TzX4hGeuJa4wnbDLX",
  "key31": "5Xy9ngWJtzyqCLpcXAfm5xkmXFiJfJfr5KhRNyjK6L2GxRYG2jiXhPJSxwtSFTz8RCekY1w8mYELoveY7MmVtAc2",
  "key32": "2muu2VZbynUjsk3zohgLPAJD4h4UMeFYKY17iTbse5xsu9k2L5neAUM7owXXnLeUPTkRnpgibKpEG1dqPMpBAo7h",
  "key33": "5fQbTsoNGgtrH6S7cxz72vEQmnF7BGDnAFtnxX5d3jeQCVrkdYjU3DQJ2oTBAWWGjVT2x7EGkpaCqqMZrC23phJH",
  "key34": "5MFCR3npAZ5owqaExhqASnzRFCyRAuKHuCuLogsGRBdeB45CYivj5HPiNe7dEnHtDqqJaUMmihfZMp1HdcY7GNEB",
  "key35": "5g5osB5vsVbPCE7p7fShXoSyXqa6khA14VgwuzXQfRmMivYz4oSsyokVoBTDHj1T4DjJkZhDKJ9JVcdozG2k9eV9",
  "key36": "dB42eCZtd8QRbRTRwJ7SGjChHAve6zRNDZ2eg48Avp5Abw3xnhkBLxzzoznswTPXP9CRzE37EvYHiajVQNA5eQE",
  "key37": "3SVV7qiZ2rmACu73cT3GPMLY9NGu8nmiezb5YzWWoziDtMmKDJAU1psgk8cUPZRLcbgZd2q1C1xBVCCkU9GtGZHh",
  "key38": "5zWUicQKVDdsPVCZyZEQQUdihEXyD5wLDphVtmTw9hEB7svkN1KytZwx1JdymKgRwtCwDXmweuZdt96NsLp7tWXM",
  "key39": "5jgeSHYarTEwbXE4doay5UvBfbYJscr8nNcheeDfRKe8TJYedfUKZPCMoQ5SaJH1rFddDR7PBoiYRoPaBvydksJ4",
  "key40": "3a33piFatzxqpQEw6UDsccRkjmGrChSFZT9QEr3fozt2M2yWysKqrSvxA99K5quy1igfhF8QJb8pdbNUJR68id6C",
  "key41": "4m4AHUJnaaDqLnRy3na6biEETC6UJwss66E9pan4pvFpY5vXe1soF55JPpvgmTT4pCRtHf1nXczcCgaMwnRTpZFT",
  "key42": "2NZooU7PUiJuZSqQiBgpE2ePeqA8GRC2SR15a8bfBRZsbMaEaL4VjmP2mDnMXiSJ7z4gFXhk24JXHTmAFjZsNyet",
  "key43": "JQGnLsLyQHYF9zPT56WexvcJPL766o7NyKu55CADs5W7UrancjTHGSA4Npwrx4QeuM4AmbVtyA2r5nEYGZe8qZM"
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
