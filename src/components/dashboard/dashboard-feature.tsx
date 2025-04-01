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
    "M6gpq57WgZLUDntLTF9aU3igtdnkkk7hxF2T9onemZsqBoNj1dfX8oMCcbyWAbPwVHLiGiHBGwNN4hhqAJhmYa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BQe4wJhbp7d26CcHbvGVuZuQEncvhmdcyo6ZVc3ftbYgjeJ97W9GUT5pNc84B6TbwkRZei9TRy4tnbH4rGRgn2j",
  "key1": "3qQGwTBCnBvasuWkdCX6TWQsQ1BbXHnTvqsmedTBwaEZYAEoX8q1xDFFxaHDvH5nVwH985BWNdiVNTJVyEDGR7dT",
  "key2": "5gQ1rBKEFWYH6Pj12L3ovjeQq6kWPnAT1uX6sbCJ3hxWFJQhpVDf6jvF7eRG3kwgTg9Ltkg9w7ureSwsHkwQTxQV",
  "key3": "21oSd9r5NWRgPwVxNniN9otC5Q7s42MAhoJrGny2PmkLPB8wCSQonukTz7TnJrRmpdLPRqwMF5UP789XhneaiKLQ",
  "key4": "3wdx7ESNrveS878eazKmEkVmcUi29xkhEYXQppSbFqs2tzicu7WF7gLdogsAWSgnKnTwUv3hecrgWk9HkrsNhHai",
  "key5": "55UqURH6jHUFLeBnVLbbQAGusQDc585RERZo2kBPyiY9fjhoe1gYJXavYEgK6V51YqoZe72v6ZKAQDHPSifYfbTG",
  "key6": "3ZgmmiB5xiPP6W5MzDTTjp9eAxeDZh3jKfzduyGFwwuJh1LFJj9byTKoLDNKZA3pPqTPoZEnSPj1A41KBcB8UDqW",
  "key7": "46SgFD3wxG6V3XDH1ftNf58pyuszYDw1HXcPFJoJ5GnD6rRiECypFEb5EMWWqR7DHSvwExUs5Qdj2Y2wzhTGjyJQ",
  "key8": "4Mwp2TSXZ57i8TSakGUGjdSGsXCmW8BFwjk8yFPjnstPbGaSvo1DmQnUFJESm8NfCgExQAN56J1jFqSzcygvt2YG",
  "key9": "5cy8TD6afhztXYtWPncmxRK1wc3spRLzbDDdBM2nxqY96wUojRWcoVWKnzJsX3L66YCv9BTN47cMAeR8TwVov9CU",
  "key10": "4QD4EAUrjidmo3g2yiMc7NVmvT2zJ48j4so5sWKAwMxBaQ7jEwxqmveuzA2cC5rxPD4H6uaDDtPexBvFRFhL62Ts",
  "key11": "3DEneFPhjtmyMy8ZkU37BkWE9u2SbuBNFHQeed48LnuGu8dtNawVPuxf5MxSHpeHCic8SkC9yzEdvkNVKyrbDFCd",
  "key12": "3J9BFp4AHWPEzjkiqc4AgJebJPLgYYGygAx5PPSpb97jU8D2wpWJnJRLtFt3tDKSK7DuJtiRGA8GzBJwfQ2TbNwD",
  "key13": "2PtEJcsjpBNWDjMh3z9BpstpNr5GBVPFBwCbkVEfMja2Zg1wVc1K3sE4j5JZeQABViVd2hNAuvLPFqZJUgHxRS6P",
  "key14": "3sx5qMK5co5DsNH3WFZeamzG6vgt6c3UPcC8BN5d9wbk57rySyxFRznDLRE4WK2D9caBqhZhz3Jt6LUgd5s3z1g7",
  "key15": "3ZF4GR5g29FiFbmNWFHo6U5gYu4dgCHGiDiYsSTMD6vMS3swJHskZsfimtW6DNkgKFYVHPboSRBpWe6RZ8jebQKP",
  "key16": "3dTY5furTKRHAMsLr2sJq7FcodUpYa7bu8NG9apFGH7U2KSoddDq9RfhJuUoToxTQ32fKGJhVL2KPHTfogFTjTUR",
  "key17": "5e7yjBwp2xeciDfaFfosKoU68CcSuNGdCzLC5s1x4i1913h6yrEVUQA4CXNyxXro2P9CLe7AwanqYBsBmPoXwftU",
  "key18": "335oe1NFkW8CC5vZLWszFwLPD2aLdPLcGifE2BuUfGC8s5Q8QwXnHdBRg6yds2x3SowpQf58MDom8vnPbdVxti4b",
  "key19": "JJz7ENgac5ChfMkBX1LzqmP563L9ivzyQo6tiYKAJXnCE3iYRUtnMnB2xNft12qjYN1KFjK3ZzcMnBiTDA3E1td",
  "key20": "2U5cKK6DYj3Zw4zv5Gk1xpKdeEk9HST8HaQDsBRThZxmVr13dg2wuonPbXBUb41nju9vEiUphCXB3XyQa5p3LwXs",
  "key21": "3r9CYQXBA6sviYoF6vhRCn9xuvh8v3AG4Eq1BBW8xyqQ5tdwh6VkaUDSiSeLvuyxm1YxaPsAYtUEZKpwYv1hkZaj",
  "key22": "3YXXM64vR8qLdvUMuiuwpSCusrKKvyTdKjBkTWCHrVYqYkcnL9YiPdgFgSgM2rR15Ci7iSBaLrTwUxMgdhj7rLH4",
  "key23": "2aeFroScg7VyypAXDSn5oGUvXntweVDqP4ZnnAzA5wWAFHQk5ZzWJTmkkNfXpjihqhPBBr9uZQKUFJ7uyzvCv1YC",
  "key24": "39RBQinN6HxgbUSGrLAPyiUzKHEP6UoPrJf6VQXy2qFgLooGhec5ES6d8HUeaXpzwJ2vQe5tqzmwChwdg1TiGKMZ",
  "key25": "5Pwv6qaPMYSLefN2cRwsHbA9hAF2vwFw4hUoUnnyZmtYX3yp7kBQcEAy5HnZqfiTL171WtEuvq4LdeJrazkGmmyR",
  "key26": "4jZ6KPeMu5CJdfs5VSoEVpC2TGm9C9BUqZ1xmcwRJkTNxN7U1fweG798fUxmWAxXz3T2vW8HGGyA6U8anNyMwDgn",
  "key27": "2XsxJm3bfBANRqChA9HQa1rnBMjZcNFwDxxuBSZ3dvA7piSPvVt2iawVX5pbtqoPdLrbFQ5RN76SmFvLKFVrZcXB",
  "key28": "oj351FkPMfUMgSmsLfb2WTD7CkfExuhrKpX8J6tcxuzs6rtr5mTgvTJmqHrPacaxiqL2tSj8aKeFKXteW48RhoH",
  "key29": "4LjTB7XWU1qbsnE3uEoQV96DgvL9xZpouD8oEJvgF8duAfYg1fn1tUdEkK7uC1aYZSRG6wLQbr5tnRc14eLyqpQ9",
  "key30": "2DBRaBMT86F48uMwuLqeTUoSTizDGZrzFDUwp64p4LK94ufz6TbtMp3emKTDFvgCxJZ7dEdsDHEWuSgMqVvrTmRJ",
  "key31": "3CYSXoP1rdbZKXEzBzmPAejsHF3sQfxmqMrtJBWSZdXyQzUrAAWvavCDVNiGGeqgmtg571Bihag8VKai1ntL3gTa",
  "key32": "54v1GCbSaczXBC3o4tb8n9Cjpo3FgXjbbgRJESN4S6TGexUdwboFPuPc9avnTL2axVompnBsXW2x5HAh5HghPZaE",
  "key33": "3JxP2HKhYWmJz77iN5HCX11x7UYRC86peWATWoQ7GVvaXMkgAhqNW9jtgf1PAsocQEDCn1D9Jp89okqBc8oJnBFW",
  "key34": "62yF2LHv6MierKWJomzajoDFjkGiQywijDRRXoWDgWp8zCorFfoJifDgJTvg2899hFyWbK8TScuVFVm5n6oFzEXf"
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
