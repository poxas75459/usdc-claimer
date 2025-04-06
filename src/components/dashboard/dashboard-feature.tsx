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
    "rbcUsEkuD8YZiVbmk4EvEAbyKfNdoYbMuxEwywFRJASKGpiQsK637xcfLb8buVBayKPcGKoQ2CnCjMgtJ9U8HnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPHpegg6bh4AW1skj2hjDfp9dJNcLgSujVjm3U725zupntG9YXYoCCSUETofBsVmrMACYv54jfAAD9J3MTsCz5b",
  "key1": "4j4aPuMUs3eZ7zCXFQkZJATqhrKw3SAJiQiStfgL5FTxFRKtsGPUjYyxLCdh4TQyd3ASMyRKTHzq3gU6JtKWkDjd",
  "key2": "4iY3Ddod7536es7aLyf9ScaPxvV9P26xyZqhbbjaK5TZsE7v3ypj1U1TuDYPCGngpaEenzrY36tLraFLjrE7j9tN",
  "key3": "2TKmsfkTCGUSX3nJrG6DwXWEcTAuoqNzBW6EC83pc3xj1y9kRQx5rD4We3GwXKZ3f2rwVKoBLCdkQvspzLm3rRd4",
  "key4": "2qs5n3C2gnXEPi2pYkiSRYBqKtZEQFW5Z1R73uuV7Jpe6wrTMc6doUcwQsm7XMuYemW8K4WmxeTBoGCYG1eosBib",
  "key5": "4J3FpY9EEDJUjSWgqwJWmMqRy4PuJhCqQxXpjBc8x9TQ3KNKcA6jBkgFRxqJQVwnjmeiC668Emu41Vb1oDYYnLbG",
  "key6": "3rqceaAFrarFPZ9XxK1EY4NsNbJmo92E8JwtpfWAkUy575a67rFYjenJJarDujjYC66yXnH81xRsu7Ccn42rCM28",
  "key7": "xBSd8FNmhf3MR33ARXQsBuAYRwW2M7d7oSTFWm4U7egt8bakD5zUx4o32MQBwmPVNWxq5ZC94rmBdchQ2kBtqKw",
  "key8": "p3RQYg1wCVGfoHFKrbxgB3JKPaeXn5XcCXLzr6Jev2XVek3RtvgL28KtFtRtS9iUnyBNKp9CBNpYADLdo4Gr5tz",
  "key9": "4EvcTXTGUV63SnSpR22sf8TRzNyYxtGB1gcLLWp9v56Wig4PMPb4hvKPnUTJNBDFnruFEcsRrnVtGYbqKeHUg8vV",
  "key10": "4MibuzxxApje8xv7x1eUhNF7LiGwx8AKib65igGuwYNzAGeMZF3yearv15zkymCg8QkW4ZfgZKS4GvsgxTjdBavs",
  "key11": "3n6joYn2bqXqJQwKcv7p6MvnnZbXqG8mz67NPo96sLWQDR5Bqs3NWnBireTvHa3r8fJiDfwyrdWEbyvt73mqHB2n",
  "key12": "3LBphMQkWCZJ4F52HJgHJ7pjUSE2vAqsQvmZrHr4428ZUCxUbxg6ViFHUossRpYfweVZFqYk6Coy1GFCsr3MHTv8",
  "key13": "5dTF4R3E3iJNJo8L9u46ZSbYxrmn47HiE3wvLFodZrB16abQCDoHx4ExG8bRCg82AJ21dv2vgdi44j1w1NUSrN7q",
  "key14": "2XUjpjnGYvCmfjpBFNo7oKJTrev9Pf2NjpVqMG6HFLuVTosJR2xwPmTDvAdEG6f7G68hz2TwVnzRntuTrYajPWXn",
  "key15": "3QHrHZZrYNBKyJo6MmvgftMx7a8UcwfX5x1J44SXFsTqVQuzKh157FkwyrgwQ4123p5hMhYCmW8vTMSV7NjhBmKE",
  "key16": "V9uckPVp9kyvtChqgJgynS7uPkU919fVqu8wVRSmXRuMNYkAmnp6LYJbG8iDwfKVCQ5SqU4kAU434HvcAifwFDH",
  "key17": "5UUwXA1zm2AoPUHvkVUYeKFBAmKj1LKNk81bTHvtBSbFDtzm7bGGfgM8r1QAYVWaNKgPMYE2sQZMUp8LrXkBRaTU",
  "key18": "2hYzwgNXF3DesH6pYvEx8tQL6jUk7x59mXyMLqRdzSSLa4TNzCt4yapi6vKkrvn3Phug7c9oZsDcyMR4DL1DTXsY",
  "key19": "5ebph1w4AxeBYuPUXVFjdvEi2esM1rTqUfvpzxbi4raArF8y2curVK9q2HPbTcnTTFmGz353CJ1z8rTaK9ccAsJd",
  "key20": "5GbE1cLU7trEY391bAtbD3hTK6AtbaGeMorjsLAqkASQ5o6hkNv5BJLUGPW8QtGLtYB6MsqagAGNL6YvTFUP21VG",
  "key21": "rbDaJFPcpfbiwyhdAz4ECKcjWt7LzUzbWJQToXfzK6myA3YL8Goco7TMDPvjfspmK68LsCNvGa75eczzq2EPphw",
  "key22": "56JFcTAHNneARDiaQzsdzTe1zyJ3azSFad1gB59Ad4RMnUtCdYJCAxFVVRxszQL6hdL8xv42evPmpPQNq9Sse5Xi",
  "key23": "4KfUsBQCH1Z5xQVweB4dtURW15h6oTqG8XdvwwkENNB6Avj1S8ocW9mtELyJ24CPYpoRRvXfhWTGj89dzSUVQ7yx",
  "key24": "2u7PvNphj7gUgdSyZpvGv4K1SpNjx3C9b51S8yP59CPis7pgTfYrmeYtmuabQD47BeZrtAqPHmKx1XLJiucidu5n",
  "key25": "4wzha1sPwNxn6jx4gnjrkQDyuyijicNLYD8XAXdjcKvQR86PD5XT8Wjtd7XrcmMPMsEw7skuewUwzQUJiinjAqzw",
  "key26": "2SJJ2nYidnro36sxpRLXsN5qZSsDBM9ziWxodYQ7bC3v864VDzNpa9z8ChmJraLF1eqq63MTqSC8KrL7pKBnwtsf",
  "key27": "4TBZCGzVguDQaXEDNYpEojJecBrsPLMrGfzhNKj4448Y3QW24cpr7F4o4tPwj5fnFmD3QdFmdCWUnEeUX5xrqdDP",
  "key28": "3esQeb75qVL3y3nhBmD2rVSSkMwunfUQh2wcKbMhezHBvfcQvyzj9K7bVjJDBGoutNZfMPRJhYFEYRoMuY2npXPK",
  "key29": "38aKmj7iKpRiTco98heBvkweK9jg2vUb1FMwrAtqorRiErBHFB9k9bGzURXUbDj8fpzYcpud5FrcUFJpooJczs4c",
  "key30": "5qPKspZ5F58xT9X3Emj4shW82aPxwqUPgo6v35j8jJ9VjmrUdsDWztDGqsTE48x2x5bwKXTLoceJPXLYoTv1kspL",
  "key31": "519E2G1vsBpntnddZ5KvAGQWeHcYh4nbEqZdEo2imAekGf7rYfLaYgEJ4nrNycyEsLVvHP38KSctzbQ7LPKCWqyZ",
  "key32": "2RLhSJL24TjGEHs72jkSk9765t8Rfnre8YzqFLbBSZTSoLHbpDNngz1RNUFUadJuc35J8vxuzg1vtcrAMJigMupn",
  "key33": "4irfsMrMXWXLAK8N2bY6X48az35gQe6L31oaeGNhmbdb7bjtspj5hUYrdbnuZdKmSPK1gAGQeCEgpQANCUjLMRUi",
  "key34": "4rPAoRE61sxwSZf9ms22RmpRVkMLscySAHLacvUhpJxVcNyuxRQUzXCtPdwJoyHbBAdU1BiH8TrXqBWByf4WSAx2",
  "key35": "g5DMtSQQatA1h6YbGHkhUQr682BBrD38Z5S5WChJiDe4nvQbD5LshVdfV767skCRAozJeXebrRnmJioft6EDp1K",
  "key36": "2CTbriaTZZRUUNUiq6SzRzKztgomHGWwZ1BUrCJwi7dGJm61PFSicLxTaix5BMwJoYYu2Qt85xwoAwNTMcLBUAQo",
  "key37": "fYn85SQuf6mVPVNzWWAgZbG9nATBHgwd42Act1Q2ji3sMJfqYrM31hs6NjoGQFiiWwJDuM545DNJ8WeorWyH5uy",
  "key38": "3Ps4px76Fp4XrpurFRPHxyzTzxx9Uf7h4cv9LiUNWveznxaXSgaoBy2oSwcrfoPUrEi8JYDUV5pzxpaXFhpF2iHs",
  "key39": "4VhmkMWVnWgpMpKUa33f2h8HvKSVLL7sz2AevDSTLNuYsQ1tMzJrkp8djEDk5LPUbopeEWB8WhhYFZ3ray8mvTTo",
  "key40": "2s9TBfwrH7bpmfurEoFUgbMm7L7pLo63SDw1rh1ucULb7habP8THmTx8GCn3QTss1JcQFPQ3UMh1RFywqqPmhTX6",
  "key41": "4jUbdfBkT9beCty1ySNv81sf78y7XkpkBRKEneRALauFxWUDoAkER9eWvYRhoTaUegGaBdBveweTiHsiCXgFmXtd",
  "key42": "2gKqdMCsoGKgTidye1qWMKTR2Y9PLdqzRsnjB83N9NkF3aKZUJzScmbsdSVUi5LdMhCtmo3oao641sTDQPVnWYKn"
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
