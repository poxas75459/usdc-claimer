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
    "5ccHcZyFLaCyUpctTYDPEzbJPyNB5Z1ZutcgArqyvz9pJtEm3Y43LQBzj2ySwAQvYD5o6mWsaQAajDu2m65kkEbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZAwDLUPzmr8QgjZH3pddNkGKEbVQ8QSHjTWdU9W16zqQYHuui17f5HCxsr6D76QgRtMZLUrPRHeCdZbwwyZ5xn",
  "key1": "2AVoFRGpH6GKdz7o6FAH4Dp8eM5KFM11BVa4EdPKnRbNaradzhvcJKkVumGjhiAMwuNoZUeQM4ezZiAU58TWnuGa",
  "key2": "4pTZ9o9PrsyFpw623oXwyLRWnCuHNm2j25dCRm27swvq2MDxbzRxyXrAKpJUW9mzrrzcwYNhaS3VQRjwoJi8zb61",
  "key3": "5QUMkQagtCntS3SYotpUQaxWx881goj3meS4iD6yNGzKJcFz4z9xMAupAYpEgffeFvzwHK1M8h7U5pGyoLASiL47",
  "key4": "4CMpt3KGEepzpNBf1P17D4k9fYkieyYjbzM4JRd5482eJBAe792Vm1NxDahc4bmJpb6h5zgLjfSBpLBzriz2tJkq",
  "key5": "BtuUTNW6QQceAALrqaqGvkiLnsedmgMZfJdMJzVwGG8Q46gD4mCN1ueqDNEHMntiuUqvFDMtB2TfMkZ92b6nrLs",
  "key6": "3noSXWq5BGwaFtUefyWeEr1SBe9tFRewTvGhgDxKaDSBL5UXgjhPLBYkm1UEYUwsekN8RmvNL7du5uzLiLVkCA5B",
  "key7": "5mnU27kDJ3B1axHTijq97hvZPgcQSuyGvhzJDrFbbjRtbQuPusVyYnHiZ1ghp5WbvhpHTaYZCPZF4R7qi1eJEU9",
  "key8": "4A9g7oo6UcmUksVLUKKYtW4esEM7rPMVfdo98NihSDZ1FHwmvnQa7zM25U2qQSNCR8nSNVzPxoLksA787fUzp7Ax",
  "key9": "3Hbwt7mYFSm2xXDZ9mGhhZiS77VL9gGFbT9pbhiiL5C8cYfy5gdt9V8zYQZa9mNsmPnCjBukoK7FAPJWeSrUx7s",
  "key10": "3EJzp58sd5gDyxhm3jJe97euDtiFa5Po17PT9Q4xkCSmj7mx4KbNg6nE9TMsfx9xmz6DwyzrqW4e9vC1qcuJt4SS",
  "key11": "4uyMWPzGyCmqRML5kypX2GG7uvzYwwHw28bkzoV9teyJdJ832zCSZB1hkgXhxZDBM3XqSfUNZrnKa7FGz6hcss76",
  "key12": "62Ska4AMHAfi7HmDmBcB2CtNigX2Xqfzo6qCFf2EyVmyivKsawSbt6prtJ9F7DvgPQyb2itHzX9skYMeEKTD9XaU",
  "key13": "3qoL6BFjrwaJ8ubtAHeNVzRkQ4CzHqMCh6oBW4FDoqk9psAewutQxVaAF5Qn7s2qDy5w6LztLB9iCWc2BfDV1WkZ",
  "key14": "EdoY8MpzoVeEwvY3BA9v7vRoEtPeNFjrhxSks2aGDHY1ZqSEHVAFP9jBDqTw7ALFTU9mQCTFBeEH4rQ94SZSFaJ",
  "key15": "3wodK7sWjAatC1otZPpFMvgie3u4m5BEHKJBjvNgM7rnAXGofhbCWxRtmMbhnQVCGumphdfmtSDkYi4AsUi8eZHG",
  "key16": "5t9LsLLaZej3ZyYhqJuJ6ZRtqYS973swrBB2wYLJn4MxoEgArr7zAd9HXjTrpkGvW3kPa2ahm21bK9YS316ApRF1",
  "key17": "4qwk7zDkaiwTckkYRWBriqHkUT7kCjT6D9qJkQRWHyyNVHUBe6MMbNzJWXvLrWGp6LjCqBLdHaYn5KWuqCyYLxkv",
  "key18": "sjmSRNxgQjnFyodevSBQJntEcf44HY7pNaPvkx1KMjVqkRh9V3oAjHtKA32RtQSVw9hCZ68ZUy3sVqFBtMmbtxM",
  "key19": "3oxJie5TyCWAnsh7QyZKQKAYFSwhidHSgrAt5Jn9ty82nG8v6YgXpdELzXDynFuDAFLSRc1955dDt5zwh2LjTe1r",
  "key20": "2WAuR39AMFY9GzgxihnDbFmJrHK32ifnFY7MfcTpThtnrJJMuBWjrZqwGev9iQhtHycR15S5aE2dSNnN5tCE6Npk",
  "key21": "4Mh4C7iJgkiUo2Tx3rHn5UhDA9sfwmDYDD9dhRCStVGX136NXJVx24ZA42JduSnhv16A4ZAGjsnzFZ4uvrj5rbvB",
  "key22": "pnzoXTPDDngkKnt6inqpPiWEjGPckBgEQDzS8ZmhWwEEbyUaZk6YEdcGXJS1VZBdhNnqbVj9tUhbEycXt2rDffd",
  "key23": "31Bk4cc4ZNSG7EDw62GtyZZzpYYnTWTwVBw9pHgvVxE9kcN8xd8hutJ7B3FJffp2qosGmdvtxTnQ6M9PSs6RRini",
  "key24": "x6at8cyuKZNQg1Rywvg61axaRXgdBaTC2hb5uLs8W7cNw35cgDNty1z9sVcbnGGwAuG1uCnLwcziib72nJPGaHg",
  "key25": "4niHwEWHbFJ7beFigiUGHKbmpFyJhVfdVSCR2doadH63wvC3MyoJh2Ju5SPpZ5BxaXee3dvx8HLxcjkwWwKZMGpY",
  "key26": "3rfSG9392ybRoxrDfCjSAZfdv5gk4qMJ8NAf16Mw2zGD35VShtE98GkkksFZxLkQ5FfgvonUFqvAZR93QKw8MDwq",
  "key27": "pKSQMXxBkyAd72sDox37zAhAAqYGG6sMPBk9jUGHVXNdHp5Wn8ezne3BBr4YwbZqS3sZii1LqTEt7vftjiJdgrU",
  "key28": "57zuXomMgwCn62mL8jAHXG4haP8x1qvFMY9rbuLJpT2A5BaV4Xp8xRr33GtC23DGZXhPEZCvSYse3TL4sLtehuVB",
  "key29": "3dQY7xKamVNYspmYASehVqVJYdLkgGEaPYajtPpjN87BvvHPSZeU2x82YpKaTeNnEUng94pwtsByUAcRPbf4uuLF",
  "key30": "9Wf4MfA6s7TYgC8akXshzxwvoAr9sMLVdJWV9VaGbSF8UcyMSnYjVia88cqmXXEiz8tqZ8PUZZpr3tdBrMeKwHD",
  "key31": "2rfA8dU2r3baLdBNSrLcPK21WiKTsVdDKLBcBk4ejPqfriVigH512AX6rAMsJnFqaX7JBrj9G8SdtDL49LbR6sBH",
  "key32": "4TYM6bWMLo62PYZrmN6ZwoANHCGwyiwK6CP6mLJaLxkKYjCinXzVA3DyXUd3TLfA4Ji2qubyRU2N7PEbBwSgBvK1",
  "key33": "2xjs4qM5Wrqj9WXur8EiZr9FG2JBXftTEWc8dXRK8h1y8PntNcJCNXEq1vzuGUtrS8djNhFXQ5fvHBtK7ZsKnXTC",
  "key34": "5umdustBXRSih4z5yoBFArPEucC5C7re9CARk57bhH3MvXfFyteruSgtyStFNd4g8LfNGrm9B1QD2yg7Yv2us6oN",
  "key35": "4JLgsxaSrp9Hi3ZcnYVpWFLCdenjLoLnng97nbHu2nVBnY8TshMH3xZhwJKcbnmQuMC6XfRR1XgWRTNsFvwzAbUp",
  "key36": "21wJ2gWsAEhyXh5znbG5iQXR58bpatzKhcJr5TA66E3vpnLciJcXoKpUutf9pzcWfbzxb2qikthe8p3cUiXchg8F",
  "key37": "4kG3ExdxyFkGt8G7fv7p3dvaHUKLYxPEtfRKsjSzr6ywtXAqrC4Bq7NiTbNiwqshNq4C3p3xtxCu8gZYvBNHi4uW",
  "key38": "UJqm6RpPT2THFMcKVdqTnEXHbHAtMpYA88qYba2yPSpvnAqp9mWpeVRBXnEkuq4ZhuUtNsFuzpL3LxFBKZ2jJb5",
  "key39": "AvKMN18LE3BbZjF2gX6x99wBg441ABMHL5yhU4jUPm9inFTKzRbXdbUASKReV4oN1zhT34hDwLiDuSiA5fewx1F",
  "key40": "5ApJT2TfvtC9eoULTghu9ziuyRXCFdUAKYzEXpZq6S4zSsoACAG1GLwJndxFRdmK7MFpppPj8Z3TiawAPgXKufc5",
  "key41": "34g14dV4dmaDu8SaNhGqpsNLHr7yxCqz2h1BX9QofvWdh9fe9am1WvVJPNwJgYoCVtUAzj7rQYkAVvSJeeux9hyA",
  "key42": "3eKQ5UfpcT8w9BTPFnHogVjnvLanJg2uHYZhcsWcy24CtNRBz8VqJDUkNKMPz7kRurKQaFEKmkpc868Y2fPyMqDP",
  "key43": "5a2sj8oc2ytfawExtGtmdSfXT7XCHa1H44nLKxDmcFss4UjVLfQJFqebxGKoXskB5hiedyx8QzQy7o6brCgrT6zk"
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
