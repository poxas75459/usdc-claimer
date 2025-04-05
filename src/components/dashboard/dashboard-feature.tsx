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
    "jcWFjpm6kYNRzWZi6aJosyKf34scsyfA4eQtUogwFy5TMdZjGLChPtQVck7ZJwnAkGoHZKkJKFwipfPBWH43ALy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z8mBax7YX6MyvEBVGshcCLvrj8fre6r5GvffHtYsAbBVtdSzTHQXBwh1H6JzpLqiXJA6ZKMovYzZ9BmSRMmH7Gf",
  "key1": "23RfkQ66t95AhB4QzgMeRmCG9PV6ohZxmmBUwFsUXFKjQNeA2gHHWTX1Hm4Ji44xMamEdcv4zQWV5dEvCH6ybnaQ",
  "key2": "4SGwhBLLEsBPeLknTbbhNtYp8EKhWEZJtqtqzx8VioboUj5JndK5uJuvaRh7CEcQQFyFGJtCid4ZtbzzpNbP8cvF",
  "key3": "5pdVBPeHV2WEbdgGDpZHZDTiAP8t3kxvUEWTEhLZujucNCBUu3mo7qqNaeKByyGNGusKpa8VmaF6miZeN76vpECN",
  "key4": "54tHkwwRm6YhrfSPn13X1cDZ2LcBFfnsyXnJa3Q5WRB6xKhZB59Kdcf84h9iYVhPH8hqnhocqiQSBxfLgMu66s4S",
  "key5": "4B4EfxhrFjYGtM6zE6teAJJmm5LnhZU59UEs1cwMMECksN7xs9VkpN5QG6y2FwgBZms7qguA7LCusVismZaY6WXx",
  "key6": "4XbQeMg9aJyQCvXeyFaNUbafMuj61tgh6i9oxGDfSdAzHSkKqFrsri1yrMKyGf4hsM4TDeNPD8zveM4AvY1qML3N",
  "key7": "5LVruA9XkBYZNBhpithP57jyk5WS1fKKAX4FLWCXroXphFvY4aBu978JohffNHeoWK6RYJe4AtjDp8vqoUmhJprh",
  "key8": "5Usyfu8gVjg636HsSerjTWHDnP2SNb26SNpJ6aKnNwMhL77u1skQq87HRDJsAfADPvPsMVeRdTm9FNyqQm4fedGk",
  "key9": "4bAo5K868HHZxfYqXbY1cCaiproasswfXp1BXGwWvzak7JUVz8ZZFmYyB8K2A2N3KXU1SFWHDbjBEaPseZpt66MS",
  "key10": "3vwA623dCXkfEv5T2tqf5XnjgzHsNAsDbFWdfZrxTwJAPM4jYvmPtGztfWuaAyD2JRTTNcYXkT3GWMTcnGgzeeTZ",
  "key11": "qsfAa5rbUsBgyThLDWt7r3MXBtrx5zKiSkssTD48Qz3e1Pn31Hwk7WTDfABgvU9JgmsXYFjpqiBY9cpmKE3CbSx",
  "key12": "33b1y3BFNXNojWbWB1zDjmRccZAdz1TqPmghED3B4C7x9RiUSavZneRtibHbHVD2JRBmp98YjfUSkJa5a7xLtJex",
  "key13": "5DxhjKKd28C1Hs1Fae7w59rVg3jw6EB75GERTTCLXbzzV94DN8YLxBTuKtzju7DJYovdCoHonGRLCA29VcMvb6gN",
  "key14": "4q1FcH8em7Kqu7rYUJka3Ycy4PdVUJAW5jicQo5PZJyvwAYEa38g2EFkRZKV1nUbR3PSGzWZAAhcKYFzy7UccZFq",
  "key15": "3DVpEtdGgTuQmSxidW7RXZGHM767VD6hLyhkzoLVF8HFZEMRYkQZELM98pQjRaW6uCEs494Grp6Dy9ZBYrVvwPwa",
  "key16": "5mSAptFcfrKM2WTUHHKZ3CAveH1RBiDGWGtCVdd6F4aRiAszYtxsRM5RPc1f4cVNkEng1zw1vJyfSCNESfXXyfF1",
  "key17": "WHzsnnUhVst5ACausniDDaBymGkjnXYC4sfHNeAoXj36b2F2zjGKFmtRehuDupQVrxkF8hb63LJYkVNQetouVBa",
  "key18": "5zKgbPnUQXf2P84Nun8ZJKqv2MvekxfwCjCQWzKYge1FiCRJRAjmAjBFtubebryDDprjaNRAGgSqvYH8W5NMPLke",
  "key19": "5QuEREjrAYLTSq1dV7ymmZiQdVu3LhK5h26ZJcgVGtqXcUuPVwJtaFbyxYyDenrZct9nFjcNnCsaKMUE7mRJegZc",
  "key20": "43R22cZCBPmPPWFEvxVWcPNZpeUpQmbPonU4QKBnMbRh3KYpUiBBUw3Bmye1ShxeZLZ5H8JCRsqHnAzshUoMvKfp",
  "key21": "5qH8o7ns1wTmsiiD9fqgf3e4P4qbhXdhexFMAxZZ4j9fQ23gbTCkmpAVq4WnJdFZgiU47EGMWe36xJFgtLTBsBGY",
  "key22": "3q8q6bx9cCDbaXNyTXLbY6dnTpsqiddZydp4fH8UKjunb1AsbpFvivDvZLC8eTdSryJUV45EPqxMKovRLmZtS2p3",
  "key23": "46pZxxB7EPb6NyjCMY6uQjK8vDjCGYBEvtu2eFAWNCdLiVvK3mqQkWZByiKnEZvByvhmYCNH8kPHV5tqZvTGNTXL",
  "key24": "4uFgrPkoMdhsCmxi647nmT1Avc3TrgXVo8uDWnBZEcrVNKmWsZtbbScEQLDzjRRbYFpfhkXBvotxpA3MHrtdvAKS",
  "key25": "5jfWutEKomJ4Eb8P8KcwMa67iji7feLFiprDMYfMSmEM1sJ1tnsYNbC3WPGAdp462vbCsz2LmgaGKR9gDDggzpUJ",
  "key26": "2hPj6UzgWJo6W6T1Bvv18G2CUdKCATVpFWjXwAo8oYKHaabkcacsqW5J2VsEGf7xC982VYUtmyZCJnHeg1CkLfRZ",
  "key27": "3iQtsVsqHVbWPJtAyv9FFVAhGSNwrP4ibgu3RW6hSzRWwvbzMC4GSY9FNZpvRkLTSuYqwQdJmsj9ini2uDGSe8YY",
  "key28": "47tcM8U6pm4LesnvKcbb3NYAfFsUXJrVfdzVo2UGdPDfpnez45YGHEUgwYyQu9RdTG3xKvL9ZvPxkbgB2QVqiTot",
  "key29": "3GTJ2VJ5c35TrDKNuDP54g6MfYM6gp22VAZHar1ssii9PLQnKs8DfeDQAuv1pGB4T5T4gS4ZD86eExpCYugyAb8m",
  "key30": "4rqsZc5BMCVuaK7TeyFAMiXzrWdTQtLRXm7jh39AZnRny9NSessm1aRT1aexKnbixjUtihrfdm5wHNtn2LUv2taT",
  "key31": "5pHdaDHbk84HgeSZ9JwPzpn78vvSqfz8Nboqdmn2xqJEh48rszZSuyeHPYJDprxaKqcy7z7vwNz4yfGXS83VbyiG",
  "key32": "44wvuPk8Xuaz9UK4LCzGUcxT9HsDiEjRQbGHWVVABPbid7kPA4XWQTCwHTCu45EzYzN47ZXoiag3tM4kz1jBhFpm",
  "key33": "2V2djv7U7bpPp3MUe9zSBkg2SDuJZpY6zbKinu4kaJBFwfQp5RszmLaEa86d9iydfYd4icnjWfYjdfXa2CK7YZg2",
  "key34": "2nKGRb1TmekTRgEWqEQh3u97kjmoGjt1qR1cct4RinC2Wh1njdUyBAA7nyqxy4hfcA9MFNiWeJwmDZNvaVwhaJG4",
  "key35": "4rVF27sxAy7tviGB5bkffbvSY7qYimoqs52cppA5MdvH26ZSQL37ogcarR3pjPb6ZXEgfcmYZzCoBVUhKFbWT9XT",
  "key36": "2K11zdGPLQbXB3P4AncUuTcjJs8G7uhN3S4huvt1pTu74ptkXomyzMaq3Ko5Lcz6EwoqHFk8fiFYc1779c55SLfW",
  "key37": "5uWggqQLVEim4ZBHijM7Md6CAUuANQjt95MgNDcPz9R4dTothWNEd7hwQmNRZABmr9Qr1rAtAfhCdQaAt5fEoeVN",
  "key38": "4bgQS34uPjYcqtARmxhooVkN3hnSGFaZiGQBbhDiKVMT3FQFAtmFiwhkM1VjykGqQ4zhGjMJnb9iUgYdkcR5LqSW",
  "key39": "iARae5r5o5TkUBEnm3uWUAWbLdqbWqdekgk2X9sXsQA8bsHm7vESX7SzcoTSzdS79HgrhyfKjwZ3rJomJyD1v7r",
  "key40": "5mqZkwHaBfmBnecEBi1zsdd7pYhKcyP18VZ1eTiH5s3SxTHKNdVAxLdH3P4JBZAiDcbSEiZPN2mKrrFGkzVAmekV",
  "key41": "XrGUoAotV2ywnjGTKdBtC7YBU8ABtsYytFW2nRSKaSGQAvvefryaJGz3TyV3F7BdZjZKSTx54f895cwAQnZ9Fns",
  "key42": "5ibiTnsBWgmUJdmmnkbCdckDDpxn4znu6sGH1dhVMVL5KBtpBvtfQ7LCUNyWBNEEXJLHx3kKhzrDuGWyN11psasQ",
  "key43": "33XCMLyRhcwfNXkeZfLAVmfFFSDG6Tw6o67MN2Pkw1Hx6Z2891qPp9ipP4kDgwubEWPXyBwNxwAoVUfhogLycwHC",
  "key44": "53p1Ji7GHKSzTGpXLXxbkkMjPdJPXQP1RehgnPKVGLqn8BmBW2CD35J8Dw3oSHLk6pEsdapK8ByPHUwNDETLcd1L",
  "key45": "5RTWiydity324UxTzxYfJ7k9mnBFQVvUgfcSHXp8osQCxYVF1m9zKgc3qmfbJx3SUvKRQQFjeQJc6JsRAv6JBAm6",
  "key46": "2UNKgJ1pBDYheM4FdZnUHkZLnyooteRmdjaUxbvi1fBr4GkHjJQjTaGmJ8S21nXf9H28WEhn3znrzi4McXK7LQ1z"
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
