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
    "25Zh9MbhbAAYsbSRLJjzJ7A59vvGg9DBcZVZwEz9ZDJbtxoum7qk9SbvyrmXviYZVjTXwJXodK3gw5H4kZD7JNWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwexWA8ccHXw7PvpK5xHtRvNtTacY69L5cvavDwdTz3joSMLZ7dKHvV8nhF6wc6iLynwxEGnYMngPoq83tpnr68",
  "key1": "3EqRfPjANqk5wUSrNd6BPpS3CKVbLQJdK7r5V2BAS5pGmcUvPkvM2ZxgTfMutssNk12xSUtjhn5pm9DAuRZxiCeS",
  "key2": "21rC71RsHDVL1rXMSxEfaYNCxCrYamHav4eGJ7JyskwrHMQ3kvfXS2oJwddJSmywCzXfhstd7kUskbmidM2c2beu",
  "key3": "3bqwLyBv6tJpXdkCtUYM7w5LNEQcvxMFxawToeDd2c4J74jL46LhLcvdNbp8WS4MXHtqCjzHVFqw6uMozft5MZ9k",
  "key4": "8ddMUmExkULRi6iXuE88d5hDw9adMEWnhsw9NzzA31c5Uic5TVGPofAqtC9ceb87hNnidS2NVXbWePEZ6cYDK6c",
  "key5": "5QCfgdYs1LThHTWFzZYiAUVPaqbof683mA5FU5npwurQiAiqEJcbRZf9JHmx3BdbEsyHccWQJZ62HGETDsT5WSka",
  "key6": "4P3bTWfJxUNArQJNj3RtH61srWZRXukkEFE2jrRqhBdkALGpKosbXWj4eSjXn2uxvj17KRwvpS4QBRgNMcmTX4fy",
  "key7": "j4M29DGKwbANTRf2fXLFB9EuCVb8tey9simvj66Vb19egQmBvv1eB18pNqDiSBCX93uGvPmx1GgxE1ayygkG8xs",
  "key8": "jFQJEeThF1vJ2pbHB7ERyVe7qbQERSMgmsNYUni1eqzEFrHkEyQoTZfpE6JmK2r5LKrg7vd1AXh7PeTjXUnycFu",
  "key9": "rrgjpmDb7DMxGkDJ1cQYuwzqNRweLqdVAGSngfXirKT92N1o17qRzDqwq6r5kqwMJdJF6F62tGGxUfNxdnx6g8q",
  "key10": "4app5dfNm95ZD1UKqyFEuBwXfDyRZ3ffYk2y4kzswHZjvJohiDtn9sj4JL4oQD5AW8VhPxBhD6nu5yoyHnbcntKH",
  "key11": "5HtgfgQyDjsXMbsr9k2wEaj4hVLoxZTcti2QLGY5thBM4T4M8VWayJQu7Fd3HEEB4bc6rR1zPajFobeAbHd9ZnPs",
  "key12": "3GCTLhR8ghg1PgXn2Zb5EttXiwuSm7h3qutCTMqfZ9RvDL5pz9Ze9dt41H3LCtQYYDKHKRiGjzg1EMLPmFwskwjx",
  "key13": "5nxRzKJTXrzYqHViackwRZHejEfupCW7EF6SxFyBVxgW3s7c9Eaaytgq19ShDTbs2rnEbB4HjNnYQ2vUpSkVYuuT",
  "key14": "47GQ3kMAfR8URz7xXW5hQv6MDfJ7eF8CcnjFJFgL3VPDx5o8M8hT2m2s3nB2Ts3ZPQFYqshNKnYokj9uKJNASa8X",
  "key15": "3a8C6GyhEVUmLwYj2C55BEAtar4uEGGVXyMHkZmjDn4Q71GTdDcareVvTRSSH3oL5wcSMF5tfo1ACFAm97r5C6Zp",
  "key16": "hf9phR32poRGqqEz6K9Hb1TS2csdxm47zyKeJcQF6qf5Q3eCLas5ghTUrncsYYpj4hzbmj3wGMsLp8QQZA3u2ni",
  "key17": "iKWnqjgum8huw4UU2SuCPp2wmdxyVTgqT3cf63mhhJqijvHz75Lo95D89WgUa9bwRf5qqpBe5CpQ8t81eW8XSyu",
  "key18": "3FKm5FvEcK8ESSjTvsenLeyz1ZjKtdjPupzL3hkdjhNYS17pRPZAXjBe3hj2MgznZmo3raBjPea1UKXqnxRCQkL8",
  "key19": "4YpBikUfFozruvrNxH2qu4CmjcV2ngjLQyYMh7mJ93iWszBh5bVw5y17Z2AetosEjjdMTgi5umXUujsuQPhmaURe",
  "key20": "2V3SLgnbkYtbXxBRJvjC5TEFD7fuA6Hob7sQePbfsqAPgUavFqGeouKV52WvF9SHkcnfMpj6rWFV9WVCovTQg6o2",
  "key21": "3PjGxoYGerhrF2U1mqsHxv2oPW4pLm3to7Hx4wezWQ6a7h2aQ7cLQbcxkg5QUWQXBQofLgV4XHwmU2jFeasnz1Ej",
  "key22": "5ak9johhVwamZ5wxF92u2kaURa65EibKM4BQTSUXUGRGa5GKv8fU9Enc73n1o4jNroiF9eq3gS3JFHq9tXWgWeY5",
  "key23": "4zTCBWuZFheVfvte8irGWSwzRQDhyQxhvRzSuefebgZZzeLsKo9NvdTMx7sU1EMC7VEMwKfWtJ4WmWsFhNimKdez",
  "key24": "2eMPkF8QnxuXaU5phdsKNW87FCemRLFTnboavKxgwjxtN5BomDJiPtShR2cWEYkBKdA9tc5susfsNK9Ej4XbTb1R",
  "key25": "3NVRoZ7R4yEDU2949DeYAVKJ1TJk6mvToKpfVhi1hMojvWyvHHisR5qqHoWgradqJzSVtiapK33iFrd5gF74AKpL",
  "key26": "3U9knJii8a5Cx7rLfpDNt7WmM7kpLgdkEzJa9K37Ms3Ed4QDpiPFW73CLvmKY4TSx38ZLqXAvfTG12yEDMok3Tvd",
  "key27": "39gq7ufeBnmPGJzdNnQsDHYxiiKH5ZtKHt4NUQvUF73gAN1g47LrfBskwXuMggLpqWWuQTyfg7m4dxpvvtoJy6PX",
  "key28": "5XeGyt9bAvwyC4LUjcH8dSuPBDe1gcvRF4zMPM2TuK1U55j1dnaiJrBCyFzsLEzpC5RHjQjHezTz6cBTWaE47Fz5",
  "key29": "62SDgoswvcpTMHtihFFr1X84BnkCv8utvT7G8i3PTB5c8rHQgMrN6aS7nRTS5wVyyR3q8yDR6qXGGY4otExguQoY",
  "key30": "4NfuNuy1uLDLqNoxsPbVAbowLqJJrY7fKxpjYWw43G7WGiwvQbF6bgjyRn6B6eJh1WAoUXGh72gBWVhi8zjoftfc",
  "key31": "3HNXzmqTZ3NXWg1XQLV7n1WdzJteeTVWb77ZSihNBcfbTWG2qfY95iMBnZKB6TfUziFkdkvf1mtZ6svNiGAsRu3o",
  "key32": "5ix995qzKVHgq2PU1YZGysbjWXj7NJaRcWiDhzMgNFnzrfyM5CVwGvysC8qndaPdBGo3An27eU1kjjpfqj3ivow7",
  "key33": "24CrDk6dbfr3SLdpXvXE89hcdcwwVViM9rdnorCYB3NRBFUcPLzRxux7JEcumJPJ98hjF8nXHsmUjApLXSFz3PMM",
  "key34": "34ZFdL8xbRmZon5MS4jgwsnLXSvqGT8UtLJiJnG588iMqCMR6b4n95AerP1NxneFQTPBqzCHcadM2omQ5VwtddCk",
  "key35": "5CLe8JFsXUiSbhzHUdvXQXSBM3Xhjyxg71VuguQGT89z5qHL4SM5kfXmvSNDMjuQ6KDTmZK9JN3BGFeSJWaqUSAx",
  "key36": "3tazQbCLktVco2jG9tsBb5Bn4j6mbW2hMqAU3cezoqSontTxPXLiRrMFGoU3g8T5qk8YrAcW3JKrku1QUvjRkJ6o",
  "key37": "5NbwL41v8oD9vtSwJ1k4qyanhZk64sBScFjnqrvGZChgJS7LDZizvnjsycGm8jHhgrFdHuQpPBz71eHKxkrnGY1Q",
  "key38": "pXVSzCuDTQZDtnHsfoZqwoH4oi72JQtJUZenbQWFoxA3h6B48AnSZmhnSRLQaBzJmUEkEvTnt2FeqauQwtn4bDB",
  "key39": "63wXE3RrQdnW4PDMqw7XbW2XSQrWPQoKwXhzQP38272omx6KH8tNPN8gioABMFkK9EXBPAXe4nX4gh7dnojU3phV",
  "key40": "3bsvMaGj3JPCmYVdHUo5XDm6gbp4TARzuyvdwk7qk3eSWVmJZKQeKYSCRDAknQzoJPpnDRkgRjVQkDXouDqz45Dz",
  "key41": "4myLoQRqLMtBLR8Ke3g2izoWsY8E1SNt5Wm6h7YfFVhZxJ2hH5PhTy6DKWuR9fwwKpzJmbM7awUw6yjfnYHmVvJD",
  "key42": "5kDMqoYw6ELomn564Pda6n5nyQXvkqKzqzm6uCoynJsVMQfmgP7NQCz1WBuTChm3ccp9f8eCi5p3r32zEdLWNMcL",
  "key43": "teuwnT9wCvG4ZSsgj3nKRAtf2fftxttzkzLgorkSqncCx8sTYupDV2VAoNQRWxKbwKmqiAsf7yCormFgzm1oNyi",
  "key44": "2YGdUsTKZVSYV1JeuAAx3TY6hpj7Q2YVNaWNmAFsfrFEUQtVHCjA7x9hZuj8tbzBURZKzEB8n5uaYUS5NapVSp1t"
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
