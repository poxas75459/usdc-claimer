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
    "6DSNiZ5vS8SRa3WpEfjwNBp85ZpZLw59KzbAwRBdP7aR8PbEkpmBseM2uK54XDsxDwa2hJQf2mpmVSrWSLtXD18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RyGybPFk1YRcTMQwFtJT83ke1eURvV57S7rcHnWrTDeq9NqPcJ2fhrq4UHhqXw8appnnvDmG7syJ1buvZq3wrST",
  "key1": "5uiUWNuzoW2R398RVg9kND7qHKHA1CottWZajgPpVrVLWRz2BvSKtV3pa2ujspWh7CnF79r9zZcYuEewTj2p733F",
  "key2": "5ZycthcFKzb3yw3JBze38SPmhN8nnUN3i9tcE7K3xayfFCxSn8KvSKUihSGcJxLzKKrg7sGNokWePtisTBq3kaCs",
  "key3": "C78XVEECmD99Hb5oAXwPjgQZdgP73zuTFvzf7Bdpy8uhWNhL1mK2oyVWjcoLdsH4W6veYR4vE4JwFXsRhK71oVd",
  "key4": "2zGCDnsok1jmeRTXbQZYdpzWECPMPbPook79VdRr9sVbf5Wk3PNNZs196efwAkJ3N64yYTWwxXxZnpiUZPVjMUkR",
  "key5": "rNEUsXpWC6LCQsxJSCcqWktf7tbTtMPWet5nYLv2h81fMBZJJLLuMcnLDnVKug2ayTGrJFLVscKyifNNEAn3Sb5",
  "key6": "2Yf4XTMDAoWDfgcykpAc1FuRv2QiJ5y6HvcoPemBBXXMYxccGte8PKLkYUQpLG436mc2VdrXq5JDxFef2UtWebhS",
  "key7": "66pVW6uFy3i8JVUkRfUKgpfFFb5S3JBDxtv8WEHpp52QVKC9GRKEdj68GCeG7L5LsJLjfXa74FVoKu1VoqcQb4Sd",
  "key8": "31Zcuv9t4qANd655A8ceoTQM62TUiRDYMgo2rVzCatqywo8Da7mPBXo2vxazGLHUL6mpYeLTGdZ4DTLoydjKuj5A",
  "key9": "SWSzfVbuG8siA3iBi8xs4s8tWvXUdVD3Q3m7WaLP8bABs5FM34zuYiBcWL6RfdozC9puXoL4NzetXY3oTtRWg5U",
  "key10": "3h8APuPGs5nFF7gXE4ogcW6FtFqfPjf7395aXg1ATSuwgThXMag59WTPPB5GemeD5gUbK941MFaQAic91r91HRRU",
  "key11": "3AWjft6P9ZEQjh2KtrPrV1FGkieBJdhFYWW1AossEx1XRuXZi6ZCFtHz24cm4mdrc7vKMbCnybTnbdrz25D9rEXD",
  "key12": "iUVoTYc19x4DDHGo4Zueq98FJfheGPYtRQdqvQ7sFxyiF9t3vBrb1TX9Z4FdLvCywHagoyC397Xuj5a6tVTjTne",
  "key13": "4HsijNDDSgcMC4ARYq1PoKppVkdz5pJ7MTLgubpPNvNS919KVNCpt7BQTHbdGRLkGmKZmJp1KAUHuW9BCk6nytGC",
  "key14": "5SNdy34JdiGsYWicCzvBTmKU46VayuADvTM1dP565UyfFBKqa4uNZdBz15Eggs1Utu7cSq9H2paHa2AoH3CnRvRV",
  "key15": "2hDTUJdH3RGoRJBsoG1qG6XUiLUpq4ENkCJ6LjTtNaUYZqxDkUK3BZuzgCN9KTXu9tuyDrbMArsCRfpgoR67FzFB",
  "key16": "3YWRF1ZRbi983UE5kn5oShBG8C6pKY8GapqT4ktPS1H258tGcug5pCZLwX3z3Srsa14M4M8ZWLTAkwyZHrRPeQsZ",
  "key17": "2wnoPUkeukyUt6JBKypxzRZA6Af8CqSA3ND4ZdVzQTJSwye9vpkvbGoCvyNLVvW8jZ2YDSBoA1S8t91NYtCY5ibn",
  "key18": "vCkxXs65yyo5kn4aAkbe9Nq4mLETgWc3cR7VkJAxQtKxTm3ENZoGBrv8ce6Zq1nTshYB6A2HH5aLG6ebcFkUEtT",
  "key19": "27JnVZuc3zQZJGdiYKrrnV9Cx2wh4n1LYZWnhjkq6MMHoSUizuJBgGHkSpFkDbyKRMJTbL2FmGZe4KTtGydYCxS1",
  "key20": "62w7NUheHFyvFDYibThog1SCuwEk1WjFcmq5V1BvV3STMPfpBUKd3jML9eHTC28Vb3pAGSGU8j8xc1xeXbHA1iXe",
  "key21": "4AysuQ5BMoT74efpeYWbaPUSb1JbJ5r7sJ7KbG5UxQQNf1PaDjarAXZ9wBhgYcVfk59wZKmYXZYTfyiDhSCzoygM",
  "key22": "4EkpCG94h9vNNKbdt8vVVXJFc3zN2UrQYwCor2RjCbahw2SWEHuZ2sGKx8DgpFxcpUnmDcLvQyffwZms9KAi62b2",
  "key23": "5hVidt9vLKyYqakkQGAjXbmwTs3qtH34G2tE9jR2b83uZcwFjAQxh5YauP3P4XvK6xbr3NoEB1KJ445MmfJXnb6d",
  "key24": "JmWxicCt5mspLccHcXXhCtpv38REvKKi6pz1akMBNFXipHR3FNYdWqLt9TP856kYrnv6ZbkUW5gAGjzv7oKrpg7",
  "key25": "5jJ9HEmPZebYzibibfHTw11h94Tv5jvM7e9cp5q8A5v96ihThANGq4Km6Qz3HEi1n8jTkDWF8ModLexjwA4H8KZp",
  "key26": "5J6Z5Kg7E6stVPEpdZVjY4g6r3vBcGpq5jouNU4532YeJSwB5FwKxZD85JQMjfV3qNwV1G26LpoPjkxKcfgegoqx",
  "key27": "MniY1HsnBttZZzcyGpjZGLgLnv36oEcHsRKYkS8YBRyhp8gutfX1McGThArr7ioN4rSXU1siy6DqNwGsdcN71g3",
  "key28": "557AkKWjB4E699nyXb2591GhyCMznoDemey1VfTGi7CRfAUp5eSq7EHWt7sgcBPMY4UKxy6zPyuLLRKfm3vDfeFP",
  "key29": "3nLk4kpWrCFeDLuqMG8kKq3jDWPutT4TvGEztx77VgNZpjPqFjcAqX2Tqx6FKJjSPokByA3NBpPHYPV9yH4RtDa4",
  "key30": "F5WjJBifqPr9i7H5ZnbqBCeqHtmyRUe9T7qta3AJKM5b2MSB8hvzi4TvbfRR5V1GAHSsxPqo2PQJxQWZYU3PrAm",
  "key31": "3AzLPyTaN831V7LPGouJw6wKACQgkjuc9dboo8XDXmxDTXiWDJfTk59QjcDRKVbAXYwhuehm7uSnRTMUkYJCn12w",
  "key32": "koYid77LG93gx6mjZb7NfsBKYtqxjmLrb81RxN96FWcTNKbaV6AuP5GWmZfkDBYMMfrgBECqc55CxYTbNDbBTwg",
  "key33": "52Z9YpiptEizeArExeRCGRMC9YykATHm2aiYVK5EoC1E4gkk1N7WSVKdMextimv5htMdnexUTHdSkYBMHZcxyRMD",
  "key34": "2aKBa6n8uUTbhGjtgZKeMBBvw4jeHWdNrLCjzjqqtvTpsiEqykxzwxbt2oWdCV7ahkvhWGu9cYWWPapZehj93CWo",
  "key35": "5wBNBD4JgPMesUre2QPVBtKoZNGpaY2M6JiYLtgR7iYV1gzvNPhySCPm69uB2Wbm9onBuM9rSVgwXCjWvE8H4eH6",
  "key36": "54dPtWGDboBCVwMyXEVfnFhDmDJ2BEmLkici6dp7y24hRo4bYVDjDRFqfApQAVG2Yhe5FsjxHJYYt2iPj2SWzTku"
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
