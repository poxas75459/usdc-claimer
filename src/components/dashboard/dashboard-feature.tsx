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
    "5LuRyV3z7snUoSW342ZBEoXSUHxxUMBvRDFnxDV4svJSz74BCNPcsDJTsGSSb7qoDgHVzfPv4DD7dFEKjnns9gZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmQyVoGo1yo2ooYikuEHDSZXBaoyKNYcUkY6DDabW7BZbdUKchyYbESCxcr89qAJs6Cz64GFFtVhxDo9osLq83i",
  "key1": "5t39VmHa5mWdQXZUyoVvE64eJE4bX4KQgaxkojrn9z6Zzvg1ip2i4rfoa2E1zbnBhHbfj2qtwh1QmsXxRMF7Khkk",
  "key2": "51zVypdqb1Feu1jS6vnczRqBjegJu7rvNFVtsmHWY7f23PErbs1yLaDJU1f3GxNWVsu4PESc4uZThvGqA8QDqYz9",
  "key3": "37CBUMZ6db2qM69zj7Fif54suELnL5casti4BND8Mo4M6gF4Sp3tzjRgNcAADywmx8BT3L8HkAmvs8o2xZN9paik",
  "key4": "2XjsmRiUQ1tUjxH9DHui15mC9E3sHJavuuhmSyyUcSymvDK7TExTTtuBXc1X5vea6StVpLsAz7TpXrB6FcDfoMm8",
  "key5": "5HcWxMzSNTf6MsN96j5MVPvh4YF1FaWBQgSi7tzD3Gwnp3DW3p1H5h5gqvwRAjQFRVisg8rGp1dWMfUJ8TTefjEX",
  "key6": "4hrqzH1vE97Xzr6qPG2Csk3MxJr6cUQbs9bhkR4UveGqtBQL6TB1MynbwzZSxkjQFdSgXwCgLVA6KuQ2xq85a6EP",
  "key7": "4tkpx9J9gqxzLQnaH5bqk5TMTQURusYvSr8c2EYXv3vquDPccnrebBdSeC5rdcyKs6RP8kt5pSouuRbXmsXcpxYD",
  "key8": "23ffAim3kpYjiLRkrbHAR9yjzZW1PvNGidoWvPg8g2LLYzVCRskaWHusRrWdoTP3A4VApqR6e1oLn3VFK4PpJqH8",
  "key9": "59xFYUQPXMLpm4JBRnJZHMjXM65c237DRVumBiWxxToxfBmz5VSYX13DXy8JQQEtdLTY3RUKLNVyYfm3CFtGcieS",
  "key10": "5QzDHrVnc2caGs15GmjUzv1H2kVoQQx8QsZJicChAWj6UdUnqWvEEMU3Vy8dwewFAB1FzKJ2cLDf5M7HnPR7JR1s",
  "key11": "2bSJ7FjCqAQBCwCQpbh35XkYwNhcfdQRKwamS43ycsPJwPtUmbBaryjHWbvBUpHmC7koJVHePvuARQh4b3N9xGck",
  "key12": "2Fh3rxFufgKBa5vxJzrpebtZJkQJpKM7huNPMCSn4hMLBqLCoZmVkZjyU4QmZZYZJ77iiLcEnqhXpqdSgEBZUWk3",
  "key13": "Ykbfq7uMoxYjsj7mGt8CE2WUu1gkBMsLhRrEWTotz7d322kLkkZC6zbA5WckC7Ekpu8ruxLQhicsX7jNmLkapDw",
  "key14": "5tuzpVfD6TwCPbtR5RzV4U73ejWrcQBSDDfji2qso6Auh9n6Nzx9J3mH8yc9veFWW1aShZiQtf687hXiZ9hxo5RW",
  "key15": "4GbkJGv8c54Xndgh4z4mCEw9uk4mLCoS9ZGcaWWCKQuPd8zq6csFVpPkWmuAF8wYJ7aESW4Ca9dzHrNchfqYL4N5",
  "key16": "SmW67odN4RBnR22YtiT5enDsKpNX1GDZkVBnFcG47vKGa28JDiy74ZhuAnpMoS5bvdcgUKtruxPmLLwEP7kRDLJ",
  "key17": "3NLTRxFTy5kG6JcdeKUj8dMQgHSCfhRVyFchqvVQXZNXn6S33FgZfzMB7XTUT7PejqjKMvmgXTjBwwdqQuGdS67Q",
  "key18": "3zhatbrtrwmtoC32zwcFWH57L3cMRVFFx9NyiGrb6S8xAFRyzb4DeRjwba2vw8WZZovtpWtjQpWF3RwohkpEBJ6j",
  "key19": "54dGEDDvaa3XPMfEyd9nn2xStjaZ5dzfVMWrHQBgHeXajvuYxtHkXLWJ4eJaJLPDHDzcggXWq1hW7JKczLHn8Bxd",
  "key20": "4KVAgasyXrnbtrTxNp962NB86qC3ZZZs47aJkcXLDD522GegcksLxcc6BZarKDXwgV8PUZPr19TsD57tAYhn9tVz",
  "key21": "4Ctq14ummBWWQ5Zfym793Xheccbrc9rRV86QMJ29x4252QXwYJ4mFYhwZDwJybq6Hb9CuaHesCeQXjz4jxjrMvso",
  "key22": "7T9sHpLfnLNSFkohsxFJU11XARDL6fWbEQ9QnWYF2pfGE1AaM2qE9SmSavoLc5RQqvZDS7dFcWWQTiupdNvKxSB",
  "key23": "5MzeQmWfoqzsh6QLBmtpasF2K7VvniFvqLaysxHh3RaHzvWHbsLfahfonE66XnktaUSQNGXAynYThZvivpEaF9o7",
  "key24": "3eCcXrnNvwXpUa1ghjenGc43oi7ycq9W9yn6oBAbw54SVeV78NJtyaTDPuE7ZRizEdeNYJJ31VF4yxrGxwKtakmw",
  "key25": "2a3SRw6gQ8BEP3p3gHFXLM78tiH3VH6mzpobSGPvxpLL77oJBuXF1WQ44wXLF6ShkPDXr2r7NRjnTNz5TUdC8VoG",
  "key26": "xBY4Vagr88pSXDo7f4a1MFV1Lbzj9jdYoKp2Rm9qNDoKyAz2WjYn4x5S64mYLoRmYgK7BnhtFaPcd17kYtZRcg3",
  "key27": "5FBRg3U2uUBD88VaCcYkP28P663iYSP2Yr5ycPdHQaXZctKHn5KF3vS1b3tWj9YZdFMBuTf3PdcXRJnqe66nFMgx",
  "key28": "3vgTaSA79r5r6yCbfBbuQ3Z8HvAZnXRFq9cLL5N6njPKaNA29AR6PCYWbSjt6hbsmgdBRsBz1v54L9ML7VaNwwoN",
  "key29": "c3paQSvKxV3tWu5PNZYSH77AktZ3Hyh2ZiJWQfrQ9kbvzaGayRuXJBeDQuaU51diEgvnniBfBifRaWHgeRmiftn",
  "key30": "5yZM1yciKuM4bz85DE7djtJfEHr9JbU5TcrgC5bqbqBkWKrsHyVPjGvBEZc1aT2s2QSYhPfWz6bwjAK47B8gveWa",
  "key31": "65HqPuLzuHj6S1dYXo6JQy98bCu6RitYw8SjiQS3aNTekNF59Av4LKwqV9mfcpRtuw2fJytws7N4QpnQbR8zt5Np",
  "key32": "5sjtnJ5jkHHeWCWuhtD77KYE9mu4UwBy1dre5EYe9jJoh9qUPNRFJHxEFPqwL85uUpKumeBpUS5cErHnVS86thsx",
  "key33": "4uhRBYAqT63DjS5MLNELKe7G9VzUGCupQn1Rg1WivReqhBRw5VzzFMUEme1P5XE1wEeGd49e8uMW6oU9WqxeWk4Y",
  "key34": "5uAVLeRWkP6ak5GgKt1REi9tdUDHstTL8vcve1LdLb5XvJutcX3BKvFRWGZarJmiSzYBuS2zPBm2M4F38hQUshvF"
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
