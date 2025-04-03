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
    "5GZKLtAxrB2mKoDzYfkNEFjVerKmi51kwQP1uPRyDNW1CfoFyg6eZjswgcf5nGbrDRXqHKAFd3wASTuvHJBNvJ2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cwdTwmhpDxgfatF8wnCi4b64iRctu3h33HtAhP44tC9xjNAPpb9Gm4XdyGgz6AEWn9d6Wko8pkYgsmAvAbjSkoL",
  "key1": "WcReF39XJLsFrTArv3xySCFXbRRMeSGykThWMG7ePPc484uu8ftJNvwrC8MxU798MhSsoZ9mmA1cD4Kx7rz5NdY",
  "key2": "45JLDbz8xwQSAQvK9nUonRes7h73pnrX6ykhsDgYNfKu5a5VvHcfmFtwdQzRxHk3Qkhi7dkruPoEh59WWBiBXoZq",
  "key3": "rBGnCSXKCUmzxtJ194SVmWLviibdB6eARdiRw75v6Vsww8UCkpMvdzajyYm6mkFJ1aQjzuRWVhCUN5PVnyt5pDc",
  "key4": "3XV2hvnUuGposrJkT8aRBW3HDHZ8vhCieR9VhL5g2cqUcnaYVreZv4FtRyLCoNoDs2C2AAAgisEk8fjBnR4v62Sf",
  "key5": "vpixdzPcZXafzrEzWDemubcaKpxpw74nJ35xpSRmTfLzii5ranr8ZD3gsDKPx8nMn6HwxhUjm1T95rWA4eiNZ6X",
  "key6": "3GYrtzFVQWiEYYsbKjFBJXo71eud5WQYNXKdZZNT5n8hAyxmZ7zNEnabXYAR3w2vdwKV6MvB91jLG13s6U9mYWLg",
  "key7": "3etUTM7zHT2G15VSN8sEzg7Q2xMDsw8ErLynFBJgPjhDKhEfQv5AR8wLCFWtvoxsMt2yHEj7b23UNNZ3P7nMyGCL",
  "key8": "5PTLa76m9GHy2B8rYWmWqtRGBEWfUAV19F9RKJkCfexViBDuvMnhUGyzCnJgATnwG71TK5hc2f4kW7DQPVD9MPDp",
  "key9": "4noTHDHsZfivmsSpcJLj1CkR3mAp5a4kF4k1rs9LoHJ7ZRg9kEqVB8LjhU3EMXfKwSGLtUs6DH7pXg42yaYCuaLa",
  "key10": "jM5VuqoJDjKCHdBzkBQCKTz5bzg5dbGcStJAGNpbZFq3Lv6rqCthk1SAM88zCWogR8ufebzTJA8AYwJTVKjsFED",
  "key11": "2RodgW6aYJ7GRAL6NpCA7h3ND452ZV1gkDthGraqxJMH2TwyNmq3YPKfwusuXqvYHFfqNToeGUUgfymemqyeztBf",
  "key12": "5C16zcdt8ruJGYVRDUjVjmkJyJWxPu4uMHMiYdzFCpQgNHNkpusmUMfEWbKnerhRqVAVCpXgFzjb3hyaHYdDto5J",
  "key13": "3akViXJPdgZNFjE3gcyjpVrv6GEKEHiP6JqFpkZq5K4DM546owCC1YgCjRKRuqhjRZdRgBcaQSjWSyd33bDH8cUn",
  "key14": "4GbMQrAcmNCf8Gy22MKYFCkLRFL1pcxegvkdrUwd3Cye2rSfMHG4j2LDJfkyqFtVveJgdUpZCL3PRmQJKfkVeTLe",
  "key15": "56wEdSdbe7z9gQjbWxBy1xM3N193cZHmXo6FsssMPgUy4G3PK51ZHjFPeHQ4omUWsQTwmsKuqXJS5Eik8UKWzRZ2",
  "key16": "4DBaNBv3TRYzpQnjuhvbVew3XZq9dniEHtzisqYUDLaMMeZ6Sr3H8fQKVf737sjVKruMR2118oZgrYmGpzuFN9yH",
  "key17": "4oD78H5derGrHk2GToRW2Jwx5Aa481jfbWchm8mCZLuNn7epaKndAXmC4mpa75tRocDrimydp9G6SBD3fjHxnLtM",
  "key18": "4XDF6sugNXMzHsm475YPYw28Txe7cQ36ZMbaaN6Lrm9uEPcCbX4ueSZeCkVfpVE3Vd3n6D6dntwMptWcTnmuQmjy",
  "key19": "4hEQAHZiiuEwAHr843i9voeQRkeZ9QZMjqKYy5LoN1MrjnxcuPaZ4tfRBkK5MRKZmEN39vXW3pByhWcqtST7KNoC",
  "key20": "5mNMWzBdeKkXss8WQD4dh185DY2eg4YPjyVDTtowY4hhDT7zW3fWE7wSW3swHLmivsMKuSqh1PFi8C2AcYUzJUHd",
  "key21": "JdGLgFDStfconaFmNHRKK9SPZA7N6mr7NLfq7ERKLAezDpTHfbhmBRemcc7hGMA7LDAJQQ3oA8WPLygdEoWqdY9",
  "key22": "2fQdggNFUiEpvd936awQAA6st8vtMsybySMAmJ61Xo3xdkqWmuSdG7HhUYkc4LJ7NR8ZSd5uPeRS41kifyCbPqJ7",
  "key23": "21equShybPUAZi8T4g1WumhKCxmtJn6iiDmg9FY53FCTMBhSDt7fQqZoWh47NQ7xjj3QZsX13WjVgMMVZDW8xo9D",
  "key24": "5TNNqv2GfCebzkmrjbHmBxTJ821SepawkgeDvxTBtN1qcYADn4PAT3m57gLcYksD6qrhHe7uJuBsKWqG1cXqVkDD",
  "key25": "yW7G68xy7mQ5NaLT4S3jVyM3x6uh3T8zgNh1tNQUbiVkokVmP98VLcr2Ftxs9peRF2MBidMKiDSMVgUEY8S9Ma4",
  "key26": "2TGvbeA9C3P4MTP27ixLBwzLjpJCcLm1tWY9izZjrDiqBDLWLdT4VujUBBjQ2HEi7DDvGg3SXN68qaRU9X3gsAsf",
  "key27": "EuiN6qadoTGVT2wC1gMxAF7nKCNtm1WFvrSnrWmF7p5gJyHnMAchKDa6h9HpYTCrfgDZ7MGHguy6g96BZZL3acd",
  "key28": "2AbBUK7xYhNAgCJduaRUwa9HT3tPWQnwsp96s8ZNrzq2tg7NS1hmvi4pWBVdWwJGJ7eyzy8DUGZrpXmaBHGDNssu",
  "key29": "2prbYyZRaLeyeXyt16Th1cJ2Y13eZdq4iPSxxUL335uZuiTL6nUsV5EamgyYzfm996GLuBXiepZgBfS2jeMPPdQm",
  "key30": "332mdAY37kjCMt5WnVsRJeeJPNAvigyi2Tueth9yjYtZAAJ4bboZaFSeNDwTdWu3RGvYfh38dWQq5gauqStosMH8",
  "key31": "4LKpkqdXx5QQkjEPreRQNvQcJprUDfdYVRyqF8Ssio7gnDR17ij2S45FPKBnMCstkk2rP7zMPkrxynNwQAWUuQqE",
  "key32": "3wqeC5y3tQ4C3nWmwifFxpAjahy8dL2THzJJqXFkmZmCDBSGRy2WL5yYPFGkVM6KyY5cbF7oSm7dsYAdrScPqmms",
  "key33": "5UkpPvt1DUJS9bSPPGqRmUq85Q6iQdjsiz7bFMBLiejNM9DDbYRpKy8JtxJm3kwKnN2oJR1ypFXtuKwThQ7ZwZV3",
  "key34": "2Z4QoGUcZ4UyG4xxKfVJNu9P7pmzrsUpFLJjBj5tMrSL9XZVwpN1Wd1rexxrVtQZxuW19xxScRMfjsmes5aACrhX",
  "key35": "465JSKn9cWXhFYerk96Tuq4f1C64LhRK1f5zzL4cZHMZcB4oU8HANMdxxPaowpM71u44jNftPxz8qsZfMp1E8NR8",
  "key36": "3WjZDHP1FjUi3cMp8NXNKaKJXpwyXyYphxMpJo7kh8gptfPSZk5Kfh5reNyD6uMhwX3r7TkBmyAjg6j9dbmWW5ad",
  "key37": "5TaV6CosSUcKxAtmw3kMcHEEBJ2BbczvnhcuYiwR8F2Ni3e3LzuPnBxiqaNVKchXSvEm9RjrsPkqgzNkRq4JPb2w",
  "key38": "4tdaannU2dUnLc8DZTHJ18XxeT47z9ehpzWrNvUBMYp3JEmTqTarxpjfJKajixzub2tgmYkNxheicCmkVDimUpZb",
  "key39": "3ETUtZF5fqgzxV7s5srRs2Qbf8PLD4H8wdia8UDKprPcy63r2dfSQLdUSpvhvdwDJbSvbZL4KxKVrEVaaFdEK52o",
  "key40": "84HW9miZEcZzUpeGuDFNakJQ1t7tdcfEXyTY9eNo8xrNCaGSFsAMWr2nFDk2m7P3fDXvif2iMWQcZUnpNw5gYxo",
  "key41": "3oLxn2iqFgxTwnrwdNuBYu1w4mWUQHHKMLk5mJS7WWRdw8gAthc9pvUkKJna2j3XCc6K2ZYqwtof2HUhrE5bSGXm",
  "key42": "29MbNTypvUUKqgMHSMVWjLzpdF9rfeHK9uvDaMvsAM99Kji9aBaBwykNVprHDZhsJhnjeNMpQeGzv9Hfv3tLenK1",
  "key43": "5si6eAQArnRaqLtpZ9QaUpWR1BbA6N3Fw7sBohTfk6a9GhPiYY4kaqPp2RBLNH7Jk2DMrQHcddpnV44GeiGSwGMp",
  "key44": "3Vk2qx649ataEMcibKEF3kTbNpPss3z6AV62YicAyTxUkJo7nUUWRM8cyyVSRGWuHNrXnfzEcLnCpkXDuD3n3ABS",
  "key45": "BjfgGBwUPBwtsaCDuxFib2CrYUAzshA2DbnbEqjD72jdJ71Mdm2i8M2fqE2SGcVgyX2gkoETfWi4j1KqvoaK8Xv",
  "key46": "4ks7pAUvADL2aBCZzHaH6q3tm9JJWTpdjxh1pdvufZHKNU7JHB82oxNZCXtTS1pkNCQ5x35HDYwgSRaFgYFeUuT8",
  "key47": "5D7iLYfL71Z6AEo3sKToETmZYwzvXC6zySXsjuNdB1fFnR4kwLkvVGCMoVTpBSG9fRZtFcmh9BF9h8SAHMqZkiQi"
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
