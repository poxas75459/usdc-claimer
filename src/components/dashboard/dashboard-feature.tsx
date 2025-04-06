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
    "4WxmW4zJmnE1JNGUhvKAXLwuyZu54w56iWCDpEJEEzM5Lt1aLDU4q4A8inEgTVLqL6xWqYBSPrasSGDSQUWUx6A8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cobdststg7fBd56sKfHoskmD5ih2skzDGBtviC3PpGLWBFiNTeQ1688WCj2vi2vLQwdTJLzcVk39r8ca8ozyUnd",
  "key1": "4hjbQ6S6iFQw9uMM5D9L834xCXWpBVw3YDSLnQKzMySh6J4ZB2AJkTuN3FpAe1ogxPDwqQRD9b6sBYypmkuW35ZN",
  "key2": "4Ra52RDCkQYkxbRNMX2A1g4Ynm27WhV2NDrxWvtrMpScXX4dkmWkMAe891rJeQS7Abq7eAqMLMzAYggywRrKut9N",
  "key3": "3ncMeLz3cjkDvqvyRM4J3M9boBaWmLyoh1qAkBRqt4oB9DxyWSYuXWtoSEZ6fkGuxKGYV1r7dt5HmpU1aSqCkr7Y",
  "key4": "dCzu9Da46eu1fvCeCELk1fYAKaTK4oEoz6NJbPERFWBg8WXDpu5rpsgKeSSj68zzNQmubJnfPDcevUkK7WktshL",
  "key5": "3G3iyZqsXXjeR54SGBZtf6xrHaE666YNj5Qd5cdVimMLhWTyjs5iMevZpUDtBYCRLg4FvBzRrJepHsmgS63Udupv",
  "key6": "4m3CbEnQvPGqmFANETJoXYcmeqipxXS5rPmxYKNxu2TMrxfxJJfE2ZgPzL4uG83amvAbu6V9cgPnVFRm92AxbPRk",
  "key7": "3NumMvNSoK9Jr55xnAQ3G7gdndSe6dNkP7sQBHs13DHdbx4vkaCYAratsQUvjd1Wmogx54F7qdiQvkCJqruTMwgp",
  "key8": "4TVBVfkoQ73ur9ANkYpYbpDoEFEXQc5k4r8jEj2LurTWXsqsEqE2Vgt3itc7gFg7bNqWNQPZf5jABLXb3SMEULeH",
  "key9": "kigLcxWSWJ2gZDH8nbsNujWNNdSWAotRYopjXFkr3CGP2beH465Q1mY2ZyQWvGtAxkfgVwSvw6jAz1qgCuA8vcJ",
  "key10": "3LuYkta5o7q6zXgWUW8GGuwHBsdursgugPMB76ZPJZ2XaD6ewsPEAzrerUhtr85oDAgQtEuC5XkPCAQeCAi1kX9i",
  "key11": "2XUqxdY1cgJRxS8EbqDKFDcEuvjWf2roYJEkUqyJfg3jaWnJg2bswo7aC3BaRfa5YqUjx6EVSLtFs4WVTfWFaYim",
  "key12": "2FKBg1hrRiCcuyzpVzrd3o2VG2ziQGot5qPhzRVqPAxZZq6JRV8ip7nYEaCrrSnsvLvACygwoxLJphYqbS53QQb",
  "key13": "3h3FE8FdoSzZJ5SJn9uqdKxuJKPjCwVxPdNwY9Mv1bX8yXkYxTenMqjF8uSENuuauGVDvpWAUdfou5UZMXxK4Wud",
  "key14": "2DhWBsixbEJmPENyVRuHyYL1YWMj8Wkqec49XHnrA5iSQp6hdxia9rtMshKoyLshyb2ZtQtEXTYEFUCWMzNLRNsX",
  "key15": "hTCCaxyjxA38K5gwWgfAqdfPk2CDWeWQcbtEpm1PrG8q3wzJBPCxcDCgqXN9cq7BF2L767edgHBgay64jamJNxn",
  "key16": "3JJ218YWuppgm9ggZjb4GYHbGeTvFNGMptSohdfnsWvaFnK4bMfEDWV7cCQvJEiJQ8vS4oq2mHMSFpfavwUh4vym",
  "key17": "2Udi5Y1EHjW5Lyg3T941zNAKtKMKZAeZQgdTZz5UK24MnRCg3NpKr3UPM7uQTHme8mKVarx1QG3vb58Gwc9ZVj8z",
  "key18": "5t8omTbnNpGuTXYD9BLSaSovmUknayqTED4CwdDkTciKooSUodHAKVGvZ1fe2UCSQ4HjSmUUeRvFTmWL9GJkZgE3",
  "key19": "3JKRA2SRZXra6mJro473pVQeMSyt1svuLAdC7kRJVpHjitMJpsLeNTNmdmq6No8pzrm3cwHwZMDzRCj5DNsYvdcp",
  "key20": "2yoeyujjFjRRaAQZvgPWSKZAMuuKa7NeBt6iLoD6kbwAZRuZevMbSu76DJQmc4TH6jYxz5yXjNxyLyMcFr7gX6fc",
  "key21": "Jo1Ga3scrGSjd4YVqyJ8jjd3GcY5hjDk1mmzSAdhCjypsEQjvBVfeqpkgcgZyfGDBTQ3fAe1moQKmPzQDDdkyk5",
  "key22": "5Fk953SffWarpT7zCN9dkZrbCpQFRhnaWxuTrghvvF5HWa1nBavKpmuCNNMWxgdjUEcsWoNo9uhg6AT2GSmVSL4j",
  "key23": "3DfeTmWf2TadaXiFikBj2vdW8Dy9xbYnof98Kcx1zSYaQdNq1saERbxW546NNyATLqyyUGyohun5iRnqGF23Dpso",
  "key24": "RM3z7U4XK7uSR45ZctiqmfuxhJYAXRWuTB2DRsBiHgsSunzvRMx1kh42vcysEgQw186YMuQHPjC5FMMHQhAuK5z",
  "key25": "5bFTCNR5pTuRQTomVvEY7StGihYNn3pVM8CJ2KubDfWtLgL191QksbnPNAVn6y9L8UvpoNVCwH9B7TidQhvgAMWb",
  "key26": "3Pgxyvi8AB9aKe6ZFNkJNidcFj6nsxbnEvGDM9fiyCzWq88ajjo4JWaGcFUPLAiqdSA6yMEuJFmGh16pbH1hqSiY",
  "key27": "5jpitUEdpQFBGz1Rw56VQWikphpRMhskqqVLnRerdqsvr3ktajSGrVmpn18QBCUVnmDCiEy2K5TAee91BcUJq8w8",
  "key28": "2PDaw3Ly2rn2skkMEs2ymLkv3jFeCLsHs8wTqRypMTFuhMwJaGw9vDcHasru4Umm3EZYHdSqwSimyGdVWoA2N5rR",
  "key29": "2r4X3cq9pfAAHZDWZC5ZYfJNW9m9tfqzhCCTocHS1L4Sazg4E5E4HpoZxiny46156prEU2DBqZNenaMwTHvMHQb6",
  "key30": "5xtVpqx3bETyCEj5yN4Dxc4ioNnUi5FL2n8bzTvaQND8cw7aYCMLNMJX9eh9eop2S6sLFJ2434soNNBFGZ7ovZk",
  "key31": "4aUZTMUG4bpvqpsTCsXWYNq54BkYXdgmv8aq3AUMfXYLK4oKuUEDZpKBgKkbF8gKHqgF1hJGFEDEeZce4T4yHZQK",
  "key32": "5E9TmsTWgkkcftKT6ASZGA97esJJLDUVcGhNJnpqRunCNmQvxZFQFyympYpurczosig7cvZS5GK8DckC3qhXPXjf",
  "key33": "4pnGR1ijRf2bV1R7UbyhDt4AE3fvMi6PoJ9H3hr9ZxpBDQabJnGSEytrY7SgW6kg2BxF6z68akBQaJNszgP7d6kr",
  "key34": "k1742gvPrdonV5of6NYmzCVhEtDLJudHCzsTG3pYpuyxxopzrxSFGKFmg3RpNbbfhe2iKtrjcFfARPz3fNF2Dwy",
  "key35": "4orcFNm1bEb2Rgnw2D5NjzpMrqBddn6LdF81Z4sE622EHFMNNtdy3ypLPNjFekPMoHpT4gJnLmR5LFmPqsfvZVVn",
  "key36": "f6fs4pqTAKnpYn52A7F9e8ayjLzpp3RpKCeimGrk88AFRWFyb4ESmP1YnB4RLci1TUfWyT5FHi7qpnmk6Nz9zqu",
  "key37": "5RPtUgE2Y2x74FSXmtLu9BRGhkWKejZW9M1aCJwpiVFZ3r7ncZTw4AuqZvx3ipqPwECnc8xJSMyMhN3qu2wE4zeD",
  "key38": "4WakZH6bk8md3QyGh4cbJfozjCoYF1daCNsGTREvKtAa6hrVCPH4cJSFSgsnXKpcbfEH2ck2gqVX4D3TjMncbZmH",
  "key39": "37ypjDYuQmEvxfni2jMW9tgCUD5fwF9yo6Uk55B8jArq9Z47PbVGsoMPk84Z2tVtqe4gXioSnert5iVMs195XrAy",
  "key40": "26ix5epVnwDwnSCAnwPtfJcMxGmoRURUhhTVqDhk1LUzGtnHkjvXJTXhxyrQv61e1CnBuKJM1ovUc38Q5u369zwS",
  "key41": "2dEoSCXwCJeSvmYWho5ys2iyKpkxwrAGnkbSnf5ZgnBG2VLroDyzXKbZ9vtZy7aSBVqDzbCfhT5LdTRL3E5c6nCi",
  "key42": "4Y99Zq43X6jtbz4mH4e8N19CdnzgAbh3UQE1dfyMunZNAk5zdmwzVmyJfiG5nkLdHLuGEFrSVze2zw3SdmAmZJxa",
  "key43": "5zxSzgZucb8QvyUBWCye9UMbR8KCHgcszLPqSUFZNEH7i3uVaybtj9g2YqnwcTZfFdrPawJ36ntfrWkm6FRMySM2",
  "key44": "fGpgMsZe3CigBSp11qW8a7dcFdFEGmySAjbvH281N24Joamw15cETvuoXEAqvRiQY2exwEPuTZT8oYbeRQrbuYV",
  "key45": "3dFPhcc3rh35H6YGwVPphrELdWWDWBvnYA8t8hx8aQ1EKB1GdfP3vXFU1FwiYPAoLT94dfQckkQoDmjpPGs8EPFU",
  "key46": "65kUFbCj2Y9Ra7yqL23Shn2EFQa8sBBnNawRbz1H9vWeXWCoMxkunHsmp8TutyktrFjKAvDRVS98LtuahNi73V3b",
  "key47": "5PXKcr4FzwoNiuAJnoDGhFpPQk6unGuscUfd9d44UcEWLnKXsFgA2iQJDJr1xTCmRUMc1U6uNMfDrZm4XEEzB6bX"
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
