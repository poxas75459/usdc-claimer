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
    "5vA53vwDdbejgRaHoYSBtgbeKtFAwhhaM4KJujKiVYNBsGagTW43kVNY2nJne1jTdEgAeZ7eysAH2xB9RyQnkhDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ZKds3L7BjRTmbLoNHVfqbE8tWHzw85ByaPo4HLzwRtCDeyjUGnAaAC2NrzpaUYANCJi7g5oTwyTe9xrurh1ucC",
  "key1": "42reQz1Y8zTGvEDuNKebCaFP2h2zATatWcNik8D7Y2z5V3xGPcHD2Fu3uQsf9TJLNWHeQPpdY6D4Rz6XXkQxhcsB",
  "key2": "3YY1GWxc4wocK2agqnsFbq768TNKjuNbeg4x9CFeJKTkh19dqLWS6nr4hNK7cAZV73rYnYCZhvozmCtYkwpY3Ave",
  "key3": "34jhrHsWTxqYmbz6NLa8cuPhTP1kqZ9ooyWDeRhW4ekintQF4Db5TME7RxRx71PJAqgnno5Zco5f6BJAYhMH9F2",
  "key4": "9M7CDvxTzA5hY6mjkNqLbL1gAmV6kix7WYBHbzrUtnSRTMKbDDrHnheV4kJQscT9X3d4h6aSc9zvh6Pk4pFjQfc",
  "key5": "ccY8V8pAF3TvyNJiFD8iVNUmPUDBa97fh5rZWcrkVotdBtMTuvYtXinhSh4Pa14cuudeTQ8t6SkcMXLn1UaMc17",
  "key6": "qFniNKJ35RdNZrmb8Ftf56n3wb18YrzofiwTSrVp8pkcebTXpZLYDDmfiMb5An2t6ZUdS9uqWpeiUjWHNjS2zBj",
  "key7": "2NPmr2q4uKmcomZWHK9sfaefUfMdTbPhvomo1BtTjvUY5TFbBqbRpsh6XtWTTv8pA9jDet84ncP7L53AW9fZnHzT",
  "key8": "3bW4ismqMnHFyDTNMai4nm9v2yxe4zwFvYRRSGj1bYDnHLFkueT5i6MZcHk3TZP2C5dpM8MWSggwBcphsxHgsZ2t",
  "key9": "4GRWPBgyRxAtNzSdGM7E1cvJahiiC1y53ahYWo8XBXPenPH3MAJ4DBCjT7FDY5oCptJKxLZDDf6BgikXLyKEU5yu",
  "key10": "3c464CRoWePa1miidbqPtWijNLSY2uaff5CFhqmkUWj7pzwyJVkdkiY9xhHriXUdZJheyDbjKRDwyHr2bvtz8RsS",
  "key11": "5fGwmadjFapDqEMYD2zGAxgHhL82uupKBDJuFDy2udsmQ7z3WnzCkuipBwjhRN2jgdv2gUmCWXxBUWonbvzMmjgp",
  "key12": "2d5YEUVp5cf6Vs27wi2g89mbVz2cGFpTkpDKauUzUgNxxioT4G3aSPfLscNokNXrA22i9sPmRv9PdK9LQ8iuvuZQ",
  "key13": "2z3VhkjmdRa3iwcq5oRdqGeg8nakRpKmoihmF1bguUm563YmTY3Sg8AfhmnXxHdHhkpG2vXi1rVrVFwexWfSnXnt",
  "key14": "51hwDUeoVSawL27LToEcFveesaePwFRszezZQ9Mx5kTfyCPLUEXiU9EVZyHxArRKc6G5bS7RuF9HM3z8BLqBQGzj",
  "key15": "2v93fj5ndjftSNDUf136RiGh3TEpiZ7rygEcV8W87YQxAUoF3kMmZggfBnN7DtLXgaWUvo3abFg78QraLsxgznvW",
  "key16": "2CeQaxBtVa4xuFgna3wgU8TvUoqXGF7TkYBZJidmxcg133MX8oZxZK47wD4dzJ4tw5Ev8jPyHGJaE79Z1RnTjY4a",
  "key17": "4Yr7V8Kpn7EVA8zuVuwmETkcehndhBmq9pJ4TczUf5UeYTkijx7MAWG31NXVuZZEXGCPEPH17hdgqeD651tPtFTW",
  "key18": "56o7gDkNu23axMDCxakZbQZBoRR4svRDEVHJWy5BmkEHEmS9PPJ1bJYqXYqb7NXEe47s2XusgzTo2phb6gexASv",
  "key19": "t9RLDCd85i9DCJ3f734Zfvxh8EUYnmm36aavFMXpFGQ6qcBp4moa1GJq7UJjx42MUfqsgeun69bJMdkuf38UfVj",
  "key20": "53av64FaV3N5Hu5Lm2VZm4d9xwMgLMJkrhHzjj7cJddrXkW9fxRxfgokuMNFFwvRWq5H8Rr7uy9C58YrXJc9ZT8Q",
  "key21": "2uzJm43FYWiCKPR9c6pkUGzJnpUCWJkZwsiKwMNKz7HunYKStapY9KPpZLN8DUYccEioECa8CE1VBWJY3x8YZqMc",
  "key22": "3kp8oD1SEZy4xCYVWMBfPvJNbbTghyJFcJh2QSiXhrCe7WUmqybd8LrXRur3o6NCq27hmZzy2zvCTKxw313Bo8SR",
  "key23": "4WnfMfqXRTqtZ3akoAWuBaaCTH6ScvPJWX2tQ8y95JewcYA5ryrfxFX4GktYsvAga9bGRb9RA4mhNDtmdThswT8N",
  "key24": "31nKuJfHBaus91ut5L388RZaBxxXzMCvEkmUmprJ6NmjnyqnmPFRAt5cNf9ybxKhCcxX3tsLAWjDXhpH9mHEssx2",
  "key25": "A4X89KEu9em6tZd5ogHojtTFnWBVpWyjfUE6Uj5LYnTaM3QKHeHpzqPw8HDhuq3wVw917NNGX3ydEp7BQD6kjtj",
  "key26": "4LdcmvAkqUbpSEDvysCcuLH16v8gU8yRWEwi6nciawQNvzkvfRW88be1J5DFUfXGZ2aZRUXptqsf7P4iysTFLhoc",
  "key27": "3cfY3qRYVahLUbsC9ZoMrdW9rA8GYtpc4mxyc1WVjrjNomoiDpmbL8c7vHLzhyEsoqtiWYWPgon6YMjjFyfAG6E8",
  "key28": "2pM4pJckC8QPciqcmfJN6C5pJAniNo7ChFLcFoVa6Vic4FbvD8W81Chxn9XUiABdqt24bdvbgt9WzwcmnMjeY1q4",
  "key29": "3Jua9ETxW57GhQV9AQW21PViveqCWXFYzharxW9kkBhynxNRffLWunVoJLdkWapmn7c6uTzidfH6D9V5WqPcSxzw",
  "key30": "3sPbj6qdnoMu9xbZCsRDuPxsaLH6SSaEztBtUJombmJd51d4D9b1c7TjGYizbjoNWicPLSFxDSvSebLpEjtT1qnJ",
  "key31": "3arnanmCmhEmW4kfSP2mLrDJPg8ZMd4Wv6ZmUpRwNqCy49bZuQdv17cuFnXfe8EPwEwnJVJ8uekwQhHJCPuJrdK6",
  "key32": "53wsckz1hrLovt3jYuj5fFbVwJkFuURJyev6unaSEoND8MM9akY1wUK2a7zZzk7TDQGBcnjNnvo2R3X9rRfoS7j",
  "key33": "5TrrhE7ync9cvfDhNWM7VFxicTQpzy3UStuu7Z8GwSXBema4YpNFx8RTAtnK6e2u83Loy9GjES5eiRXLoi9xcHDx",
  "key34": "2pgzpJ6kDLxKQ83hXzD2RaoRo29Puow8mXoRUFUgMG4pZMPr9RDpW9aHoE5NeQHR3Wyhsobwai4gAY4vkug6qtGx",
  "key35": "2RUdcqpH9JSzZFpcV2xoQrU1UBsfZFHg8fLcPLNMyKJN4Mcw6s3zre2qBGp7daFfcr3yZkHrq94FzCUvpm5FnQxK",
  "key36": "2CsGfkPdQL4vAG1vyvWCeEdipojJZSiAY4UESFGrJEN3fGxqhC2iAvUPebxcRqnWpWCJzQCsio87r2CWRL7bfVZZ",
  "key37": "4TAqspiCC3YNJDVtw1Gi1vD9QAdn58t5zyzFvLJvZrurPqNoYoAsqQK2NdJVkJYZ1UPQXE5Y4AxMtHLe78pipYVK",
  "key38": "jw2y4J6fZSc5N5UWd8cCs8vtxWJtAPS8U8Ycuz3GZdkP8mpBxuqQFUoExNxEjA1dPrgjWcysNnTZLzdQqZkhusW",
  "key39": "3Q4mnZdSLAoiXu3QF6Mbu8Q6dPgStL3iUrKRhTVzCgVpjfeuRtB8cHdvkcM1pRzoR3i8N4echw8Bv3ajmCVgLL6w",
  "key40": "2DpMWDqe923qSQNL6hyokhsTLKMk2FSgJCERJkWTcn7rbHCaNB5emc2Dwt5xot8uFn8bwV2bHgSwizwH9iz89hvs",
  "key41": "3M5QWHEguWakhs4wVwdSMXuE2fnNTyPAta5knhrzcSEwx4NwWBcnWmJz8stiCcX7rDdLCL6yKgzSmM1wVj2ChceR",
  "key42": "2LHB88DE1PnCUzUH7r7BxnkM5HNnVxAMNqyZduAYyU24Gs1MFmHo3H6uirBp6adsZaPQwhiL3MJapzTcKDg7ecKy",
  "key43": "37DMKrByWVVhDg3gkSduwGet6Ap2uBcYit4jGLDPA1DWQ59d4kGT1kZzwqDaPV3XJfVznh2NkMBkePRijeTWj749",
  "key44": "644KJ5EaTkiKmM2XCUvJ5gV1BAu2Y81A6JzpRTi8AAXRjQaDxPwrVff8C6xyBsQwfhMeEjV93JWwuw8whXqA6BDS",
  "key45": "2yeYnhNgm1tFHz5ueiqzMSADEiyo8tE5SXGBJTP3hoFBFDbu9AFMDRnotBz33UK1mxejEPTbUN36uf2SGUTLecXk",
  "key46": "TMkNoW2jC1sYuEzrtHKeUw8jqGkBKhER1ALhXK4iwqCMUKLsFC6nAVdJRBeCWypwFvZc8y1BpBeqxNVP85gPZBX",
  "key47": "3pZq9cRwkHyT65dE4GBGtqZacQrkQgGnqiHLUkGZ9FPUgGmHiXJTzasWrv3QRKURkiu5Z7obPzhk3ixmNLTRfSxs",
  "key48": "2Am1SUoU9iESgsvMmcQ5ZJrugwKiU1y8Y1zzLUfNGKa4zr3Lpo7vLdLPYvaeRcYJrsQu4cdnfdNPd15gVmRPfnPP"
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
