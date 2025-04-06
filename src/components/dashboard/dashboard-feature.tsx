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
    "56ZZwVaBwuHNcgWS3yvDCVVc1RPzaS5e3y8eFco2oE1RrYg52eqpQz5q28XdVFmquPCHjz3CPaB8tixNFt6fa9CD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43hgcQm23zkawB5AxDtwfYK6wf5cuMkTHsHkCHb8xYXcpRarWCDqu7CWpez2pjPwtTWyoDwRDCeLdmbvuPGexcuP",
  "key1": "21cTX432T33UQ55xowD8W8umDo3cp3kLw8meKYKN38F5jQoAzte2DSjUr7QZ7dJ2wxWTjEdtyzTurRsTXTp9wES9",
  "key2": "4bWRuurCsANkjX4gwsnRguj6HyjKE9Z2gHBzbibaFxcRiA2PfejoDbgk1u1jnB8KZVXPwG6HSFrTPwq6UqZgyrvn",
  "key3": "38S5yLt93KjbdZMfhxXz8vhcJm7zBzmmVBrZxHUZ656esaAd5YMVFgophgCYnfs3dogjxRKgps6K1EYheXQ714RF",
  "key4": "qH2edgdPnfSDL2Rt4ZE3V9y8Qsuwe2XEc7qoCSdhth6mnF3ZKxU54Q1NEx1aaqbohJhJx4LfXxUrUCipGj5NUGk",
  "key5": "jGa2ZuvkPt6SRf4hKCZZADEqRM8LzvgYXZTjmeYPbEPgonNZZ4jxAbdUEbh31Ch8NzWE2iPDsAURzP8W4CRDebW",
  "key6": "62ZfX1HabDThCb2rjejTJFDc9VbdTRKtAkpskiMV829dzTG9TvscLWVLtVdraxTWCdiUjLjJniBYB4f9fquEDjj7",
  "key7": "B8zhm3HngpBa4UfaYSEiG8HCJiHkByov1ZEdrzAvR4NaRUFNJ52PL9WV2yHJjhuE3rHnte5fXZEtxEUQBVXKFH1",
  "key8": "2AguupoE1qjo5ysW4ofEiYJvKXUyjF1ViX2gSnpb9dWMQ5RQYT4vSNito7CXu5YULGmhJSDAqSM8gPgKqXkRCJjB",
  "key9": "47qPJVkoL1VQaaoNEhK8arkp8FWJtqNnJ7a7oJMuHZjKiLAP2bJfopULQXVe9z5MH1fmi4HhndGb7vy4MUjKVhzw",
  "key10": "3AMZSoj6CsPdLDaV1SdPWrUfmb9F8ghVAdB29PW7gdU2LpCRezo1DFoBZjvtQpjSKcruRgHS8tPkgWShdEf4BgyP",
  "key11": "5VHsiu9RQkn1kbmq4DtZFNrmpXG6sKvCRqKvcSrdLypCA3zoK9YMyEnW8odjjriBbeEqWGGkQwBwphKHkQdXyqSo",
  "key12": "2gjnC2tgVRkg3mSmtnRfM8j9zqdsw51FrEMxQ5wXfoHuygGa8myDrCiHp5VMhPDxgfxYsT7JYVSKj9g4rV3xfH5Y",
  "key13": "kxz4QdxnQCiLQ6KGVsTSJ8Y6pw4uDTJXkhzfA9fKLX8gzBcMNwqKXRuGmScXgGWMr7ugXDY9ccHSh9FXXhKHATP",
  "key14": "f9hzSHAv4AzfNWAuzNHugRcQEaiXuuZtZZdfabJu8JRxGAjcSn8K6ZhndqXrbz3FZE1Lc3GV85wG8jhUZd2xcsW",
  "key15": "4TJTAmyRNRbijKQWbfJiS9EFPKxH57qnFE7aieYcDnqxQTHuBEUg17nwCUhtbvyqort8FVTFAYjgmw2JxxiYWXqd",
  "key16": "4Xjad8wsdmZs9D24UYQ6HkBynYsboxrKL4HwbyoiHVgn3V6S4xMcyfBbaWRsEuhxGg8RTmLHvWjeeYeqa3bKhq6",
  "key17": "2wu1VyzqrkcFU3bFm14RZAT867HcQmXYUQkCCUmyH9akSs2rKa9ewNdgVHvHkjVjkN1E5nEEHYSHVfBV3kjPsSYY",
  "key18": "48wZXVu2KTZKTzkgZjwVcFNJ7aCEUKY1W9gczvB4h4vYYYVmpGcLUqRnB6xXZ8oWLGz3ZLkn5WKjw8hDRQjFAMha",
  "key19": "4mSRDpe2Kn72uA94xa9vnmrtBuxCtQi1KFsVGiN4y6nvyecxxkbCpZ7KbNTCTfojeCx7RDjLyqApGL6N5MdXNqmc",
  "key20": "w3gzqdXxGbqs5k6DxfseWsEvpVthj88AcQgEDQcxtnDwuodiXrQs8tqMUhiPfYrnDfrvzhagJ3XzKVmVFHn8zsg",
  "key21": "3tAgnEkYzT2sxcyvu5n3jjQK2ipzZC7djfwDhCjTp38AXUpFZSdpe3JfkmDKn8AQB3KC2qN8Vp7VJB6i1djoWsVD",
  "key22": "3ZvaQBv3hSJLBFcVLXjm41woRWAsVxbBSi368QtV3juU3Pc8sNv4NnUMnusUMqT986SpXRbDfnEd8JJgxRc3VQ27",
  "key23": "5W7dw9hDTDnjiPPGX2QHzYJdhHdewPzrC321mU2oCJZSfA4R5cAZzsfb9YdBFYtxQyh432V1JZqWwvPHnwc4881C",
  "key24": "4YMG4nm34m54zaQWgiqxasVa4iHMqx1wNqnmNkej9CYkXJdsZwk55k7g2h2XwammJy18zHBbMQqYMcxvCn7fWJHe",
  "key25": "FfmVDiEZDQTh8ATxj99DhdwDeCavHWMJ5XDMcvYayodVvmkZ3NDtWZ2B3rzsHr3yoY3ybwZHeqnyc3tnLYGA3GX",
  "key26": "5SXpvYUKeeTE4nqRr1WeseB8yZrJRxi1DweibEqJBcsXr2vtZHX3AeuUEruEWdXaYC8VmS54xshXTXTBhDWj5NJh",
  "key27": "5aLkREozokYPMEJGyAWAnAoMYRZvMjohGHstpCEWsThpCAwcDrMTFcq8KRrZNibFE8L6KByhDFQKyJHFjwqywvDB",
  "key28": "5zFDapVj4S3zggLWVBS3kfMvuwGRSmKctQCEt5nkZaHCc58VXamq12HmtGmhteBctQf99fozx1ryDVuNBymcDj2j",
  "key29": "ZTT1ffEZu1Cguniu6Zj7i9zRu3cFrGsifkfQMXVHiPDhkqra2QBPQ6SMZsWxWetPT1booFg8k1g1soW3oWMaELz",
  "key30": "3743EXbRQfVce9zeuxr7EBBhP5okBNeXhyftUR17RCdBwpdt6SSQDNiaFa9PKS2vj5nsN4uhnJTzrMH3qjBt17Ld",
  "key31": "NZW7WuAeEkAvUCVyGYgUJhAnYPrUSGHrTP2srG7iMquJqFA25EMJxpTShmYrrtfFb4RhQFKhUpSHgDd5TS7hB9W",
  "key32": "4AiUzucBomtSVQfGTQVi27NRtuqXeCY6f73z3ckXfhiCKiFAtsX4fMKffeAKA2vDu8VSzNf26sZd6AAtAweQgy6X",
  "key33": "9VL8Twe5W3sr4DTEeQU3x2mhKMThZM9Xad1kz5hjb5KbLcmfrHERY2iXDSQhujdmuS9ijQKruP4JZZxYCXiwU2i",
  "key34": "3o5vpc81nYgFhhzvRkfUK1BbWR25ZKnhHNs5JUTvGY4LPUagSNRRg1EVq4NUA7iRtwsWkev6XFEFvWR2Bweh7dpa"
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
