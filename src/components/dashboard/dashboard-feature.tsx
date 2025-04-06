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
    "UyQfraYRh65Ucj6av8UfTjFBykN7gBCcYXkx9dKR925r1iv99BSwABV5MdUXhgUWhZf78KaSs9Ce65bEoV578JG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LgNrmTQGVS3RYd1nBhmopkJRoATKiYmFdDUedzgxWrSbMEepw7CRx2asTk9LF7Q6kMZ6Z2ketpD5RCKusNbVgNR",
  "key1": "2H1fBngksQD1KRAcHuiW6ceQzxadxC6n6MC5DUm7LRorukCHHGSF3z4W9rVyEM7tKDjUhUordagPt46gp63TbJyq",
  "key2": "53dSHZa8bEEKnq2YU8tX23m6KVEpe6hk1gieSurWYNPTzwf7QdRNkKDRFTEskFwu3ie6owvcZDnTmUzGhhwsotG4",
  "key3": "gXhQamGxjZ4ewdPHffYtCpctir3qVtwiHzTqqCWy3FBxwW34fWSHEYYsTbZFngnLtEbyk5H29JnEedqUGT4LFup",
  "key4": "4SzT6QcVPuamip9wu46t3d3srj4b6gxtHo2MWD7bY6zLFhFQoHRjAQagD8R1dEGfa4pSe9dk42TkxqpgYokk2dDq",
  "key5": "5ytDx1STyrirQZFHXjLYC2vQD1SqwkBWZZRLUbCqarSU8ynVWQNcDr8ZBPDosXSHL8gRTT5fih7wccExrdZHSUqx",
  "key6": "iitnpwkHF7ShrnGRzY1g9bbF8B1HCeAJyvcdkyKqbAvh17wEphQphpjthzyA9K5JAEzyAQ1BEsRrevbqoFk6Zqp",
  "key7": "Ay3k7WQvmfTNoVkp9a7cSxLXNy6zybjLS5oPk1aYveXtHu63HncMLQQ2mMuGrQKdbVnPiwe9zAbFaPm2HR5TJW4",
  "key8": "3YA1w7sYGD3BQjQmR1JGnpvVdMHERnF9gZkXmfTsu4qhcARjmUSPQ43QrmgZR4qJmi9JHKxiotu8TT5snM4epR2L",
  "key9": "4CKYc9A7FQUami7NspLJt82aqakhSS1aR8mk6xA5XcrV6tX4L7xsjgE21Yp6RVry1bwaYv8DExUCpE3mqeUa8DkK",
  "key10": "4HTVHkS34RJfH4y5gpSnVwVB37TipNG9NhjYwiMRB5Hx14QBbLqiKSafKcq8rTTBimZgZeoksQoLcc4BqtNfB5fk",
  "key11": "5dXvBQ5JaccxEKnBL8StVSr1J6kWcrN7AbkhQ7w61MsgiJzkjYpYwoNow3Byxft2rvJ5q1g1AXgTxP9uu6B8PkDx",
  "key12": "3eNmiGVYUdFfBYgBEf2LsZoumvwooGnEWecjbzFsCT4CHTpKrDDWaae3SdWKTBYXczZBXdti9HTvJUZ58thTUd2z",
  "key13": "5Q77AAhfs72BNs4fkt1kZcMSYgMnfDk8TmEGyNbdX992Qt2nhHivoTPM86KCaibQ6m7w1qTsdZmqwTbAcA6GQuWA",
  "key14": "3ikNQ2CbyDoGcEYLpvAVGbdHfyFKeDzPZVP2qvSWxpVwpjLrNsn32oTcvEiZQoqqkYDX2QVeMPoD3VY25V2DNccm",
  "key15": "3GzXK4J7zedFP8ZnTsTWSRuxcAcerGGqsDD1tvi9osFTXDPYgspAVARC4KwWnNRY4tnuSiqTWNMUW3Nq84NCK3vD",
  "key16": "3Zqfd8dCMteWKeoWEMYr2gwYbjcPAMsieFEBDvtos7Fd6YjjxqD7B217JEM4BMhYUr8jRR9RU5BH29hgu6mFCLgB",
  "key17": "4bx1829GdgLAHADnykbKVTZtRbhqdSnyJCGGg6Rz1RfdWxFXWqJbuTz4a3i6TJJqJkCXqoZuPakLamaeFeiH2cwn",
  "key18": "2ms23PTWJSsMcZxKfWStXLa24rHowkSicZGcoo9sDjstpb3zcrQ6i7YpTYPJtZMpPEs2Cqck6A3ShaTLJdF9MyTB",
  "key19": "4suuLanAZ8XkuCkNxyQz3ha3XY9gVgMJaZ77wGquX1AeVt92QuNdbAvmx6YMSFhRJqHicfZaBz9EGDCUPjTjrr7a",
  "key20": "d7fcBkGZoFR4GpJM1nnqoFw54QmvUMhvkTCQqyj1vmjzbgpGECquYK6Dp3NLW7MT2pgFP3YjkdtbLAKrvTpbmgn",
  "key21": "3XY1DseW6h2tR9469bnYi1SAYY6jPpaQowaJ2dQGyJ4vcsN9bFJHbyqq7yZdCV8yvWLTG6q5G6rRKDTZUbQEckc4",
  "key22": "3NohngAc1HeTT8tLUXtWXGF72LYc1VJ9LhXxwBQfBKkuZb3bouASiZh78c4P3iHT4UVCC3UQbSofBTzrG5oFQPUj",
  "key23": "5Rd5GRYiBK32pjbdSkTm83qXfjBxHibGP3qKRNVo9rBkXD3iNLvFEmhbnkKpNZFue6bSA4bLFFXSHJsnabpRUDst",
  "key24": "4awfeY45HB8LcnVdEPSnDFTRQYaA72n1Kj4UmzfFADxLH2vLGJNs11Cefmt5mGxfB4Sq5tgS41ivVswiPDNpHjBZ",
  "key25": "GFp4y2nqSAivg9yCQVyg4YUcHcqwQvLhEgdP3LLBaeAdLM87Es8DsDcfQdNDudPeFevFCKSUzr3vHo8HBz9bfmX",
  "key26": "5PrYSxcpQ1TKZMd4FEKYSL3xKFpmrjJDU2vRHk8PgVj2YtdciEhznvUB7KD2N4A96ehUGcJSZaG4fjpYaLvPZjwu",
  "key27": "2n6MqtxhLyWJRxKVPFR181cRNTpJ6J8GYAQVgBrWjv8NMJCFFSVva9aHYne5jFGmXK3FvTAdpQJ5DLoZc9TXXGNy",
  "key28": "5MkUca6KiFEDreWTdPg54yBXY3159mx9eCu9DGJ5ZDcvLN2wMuJz6qnME8hbNjTAtPXgJoc8uMysWV9YEFrtc1jY",
  "key29": "2okCz7Zvpfq1WJ1fANJHP3GaayNC6GRHByBFS9VTwL3nmXXj8GaUVWKELKfHfpmg5ev77FRm2sQRJm52a2x7rF9j",
  "key30": "4tZ58qSGiVv5zMfsP251z9yhLgkxD7vUj1uwxu6GvWdjLLDEuXexDpV7s2h92UDjVB4CXM6jPVJSkZM8eoutofAc",
  "key31": "3R6FivLTFbuqCqiRPayFZnjdSQAtYN7zvPVwXDXr8shky8bNu3oaYsRJcU7Yrh17Hr2AZaWZ9ZhMj3jfwLnZX9Gz",
  "key32": "2vxyr3f7NueCdE24Rrg2oWFWk8NprEBH9DsYcYYCipSSy4rhJFNNn4rvJF2U3W9ceXEEj8WzuBN57R6Ht1KUi6ZM",
  "key33": "4g9R9HpUPjEtMJ234U6uUws8WGst52xZuTYbPVxEC11Y1rxR767xUPyxuXa35CcyMaGR66uxAyuJK7Cj2K6MKvf7",
  "key34": "4i9HSPEXh7tTUcFb4xzoihDSUDZwbehQ8nwR4hgHHzLJET4bpNhXeJ6JaQ371ft1EbKg3eYySdZWqQoMgonG7o8s",
  "key35": "3tZHCYa3qMY5b6pkg12d79as8gWokc3ZDWmP3Ga2ud79dijXrnHnHG5CmpaoPWGaDCoK5fokC4PJ6A4KCumxWDT5",
  "key36": "3qj4Suf5UL76GTXdGPKAxEWqB2EqNEcjVCwjRcqiBmL2PgxcLH8uDbNmimcJh9DpbVtKovNrJ1wCHkZvDHSjbosi",
  "key37": "3xAo2eUF1VfKiFEnqXXUstRsJNw25t4BPhiwK8zSPJAjmA1P2rMD7eMkNYg9ovEnbN5YsWPWh7WXsweeXfhUNcyC"
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
