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
    "2EPFMe23pDcJnG6m35wVcCjcKM8q6q4jQWNziSTBceXZycANMwsat5ozdFEmpJgHXnojWBG9bY7EVA3XVNEuvvgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qQsQ3xmpqkbtUia4o2sTwL84D7tcWRD2aKgMYx16GMsLDZvBjhUrAr1kKRT9zcjVQ2kEMaJriLZWQFuHGG8Tjq9",
  "key1": "2fuFLQW9Kc23qjhbXTjMKGHZeypYHH19JLSA2T9AM1SCZx1uVuTNBmMZZMgZpaNG8B3qW4sf6agfrYoTLboD7TNe",
  "key2": "LjzFuDBgmMza39eFaLDrhn2GGuCaN9Fa9jz61hag13npan2zhKSBQLHm5S23FeXsCSDNA4MtgJf2exKNqUxWpjj",
  "key3": "5ovpRnqyNUeS4JhUyy5b1r3gJpB1nBKMr1PSH2gLyqkJCknnMoQpnpnXbSoWQwrFKUKz6aaEcgVFT3mUHLjY3tsM",
  "key4": "4P9B18rKytiRib3WB1Vy45GTXDjSwacLAKeXHEZn38i8psSvaw1LeVwCUrR6NXviCL3Z8qAa196czgXZjKxZz4mg",
  "key5": "4PpPi7Ze4onRCWmkXaGoaom13cJzaCM1oXPGnqgTYwVgG4LoYA524dgwtPcP5vToeMqZqbpDbKzuiiJLYZRB6zE3",
  "key6": "VzWBts4kvfyqDBD8rpLAefrB3tuSMGDqw9kr66B2yWr9AMvPrwi6LCHXZ9WH4BCujDkFYvRtBdn75nMdcFZB4am",
  "key7": "4mARWwvucUkXmKrYdbRNLE9bMqrKRz6gpzdB9aCkkPnQJqfJ81ZtKKjVovmmVyPhtYRiPymTg3Z4EYEKFP1Toyuf",
  "key8": "5RDdtCZ9E9iXBJzxCV6gYuMLVXToxVFgRG7WK3yaV2w5AkXPDzsXdKWbHF9SxS4NEEH9GBWGcikHeDhKeWvam3q6",
  "key9": "5cXahTFP6CyxpkhF2b69jaSBGU3iT764EVRcJJuhQRfePqepDAMiZLyQrmEjp2ZR7kLzyB6XSJpvYJNemsowmWD2",
  "key10": "266oeq3MzyaV2CUipgBW9QiDKiGNwqZ8RQYx274Fifo2sZX6hhMnMFcsu7tKQFQB59SirFXywQXQsVruSVGodz91",
  "key11": "5UBrCp7JAYACQ94RL5BWMmwHyycgpZLjRBJQLJX8Vv2yD82nx7fFXAAirSHU1BwqoxgKuUEkb3mt518nwrUwC19C",
  "key12": "5xrG15VqiSbmPSUZ9FLfHuUbGM88NUN9Mcu2i4U2MHxiinT9yppMeF3rQuMipPrRkb77tD8W6ovd8jpediebJQh",
  "key13": "4QkhE92GJQxgtKz1Eez3HdP7QQUosRUcaRbgWH1Jb9uksUQdjrspvDcLkUgbjSUuY3mUYX8f6Xzsh2BMPL6MTWJN",
  "key14": "4NhKkQv3pi5knmGrvnLmoawTrSkho4z4HmZp4VCZLY9f1q4cYXAJmwn6BQd5Yo6piK6xXGctNHu5Lqvh6nNwX8tG",
  "key15": "32u72R1nnLD3QZVm7UP8nePAqDq42ktseiWwVF93VkLRjnisszXqf5CezjG44jaxzEijMPb5swD7eU2Ke4qfFzbr",
  "key16": "5Q2PyuG1MqVxkH85Rd6FMtemkjXNrxPRipccXrMTXem3ohjCvuExApjEamzGdi4kN4RsegpxeF9ghpUNuPiykGGq",
  "key17": "gWub8XRcAQJDo2Zpte98Gyk2X3UWwUMMyQEhYMsDqq8aSRzTvfcQbpUySQhK5VkiUxhYLJXQMyT5FC2YymCbNhY",
  "key18": "54eCgu1NWzxUW9w9RHsj7zC8rAeBTCFY6wXCY3nKPQWwrvAffKGQEwzhDqD3Q6o4hJKWyBZDLpRAiYnvmBoUfmBG",
  "key19": "4Dic4F9jjHFWBMBWrWFYFymJADorDgnDjRH5A4HrmpdyVcmdTdqgmF2sWrsBgn5xrBR79JNWjusH1uL6MrxxGUwe",
  "key20": "4d9hQvL97yV7WcTGgyxnzPV6jK4vYJkHxy8xvS8zV5nb5WBMJCJi5qLZ55AVn6Q74S9b68H6WaEBoB4ivsK5r52i",
  "key21": "5CFafFGDmJ7i7iiW1DmGr28ATvpZ9vHX7JXskvynKDeQ88aZQyimed37tcSsW7fbfa7KCqK9LCoiDUc8fYwp2wh5",
  "key22": "2fiDinB9UC1S7x2aRuGRD3WckzALUV5bj75bBJjfqfExMbEo2bouEGV7D8JR8Qo4Sf2npuYbZsuoz2Kp82bkz8JB",
  "key23": "5q9Y1ggnKGfUmoriAFGS9RomqwNASnpLw1SDbk33iaa7iDY6kKXFD81fZsZ62D4aGmDfC4eLm5GTjQPA4DqGJEjd",
  "key24": "4tXiow4CvCqd5QYrNR9pUY246ksxr7DCLd18ad22sGVbhueN9Zp6Jm7qVwpjjgmJkGPJwMNvEmS2x2NCRFp7cNmo",
  "key25": "5tZKj9F9xc1Qios4W6AJ8j3drYrEvmFmTSpBowRq3tXdHiaeJt8JpPU4vAJTDK5ZtL6ndpvEHHj5X2zABGPP5H4J",
  "key26": "2e3ff7ddnwN2X9qfVLmkgmCRBJzuy6BCLUw5s1vxLs3LEhTvWwBtx8cPSEgxC8QRqPPeys9Lerd9DoMWFEj2t2hT",
  "key27": "5omau9iwmcMKPH9JUepnxARswoHmegb2rtQmtvrLZjYAuxW6mm17cgWiyUNsvWPh6t6oa6aCvQRg3ofTBKVhM83m",
  "key28": "65rQw3iH6WH7KNozjmEG8SSk5PW2juiBzVCPiBHYytDiRodQoEdfVTHvh5YpdShptUKuQpiNbXeCepzH52sGvJAD",
  "key29": "2RyC54H7SZziztBQt11WK82zF4qTnShJPJvZCzSAAVmLGrVdHw8wZ6kJdXD8H1KG9mg35tRhabT5qR6owaDNz3QX",
  "key30": "4jREQjT3zSR7dTsoCYhCWTLxWVDvJ9fwyt1cjtBZNDjaEXS5srYMYqAFCw8pfPkQcJB4k5xS5atE6csc8W6qRsDR",
  "key31": "3e1dkLbtDtG7rk8FHZr52c2e9mtNnaVyNhLFKrSN6xYjTyYNiyF2u6S89nyYAFrVb2BnWjv6RznzPmgnVfumLuYw",
  "key32": "hmuzW2ccfqgpGn9kZ7i8RL8xiHwXyvogjBgLs9jAH2CVYT9oit86xBoBDAFPvBeTebfRye3RBYFmGBarKy3SVNV",
  "key33": "4zZq2cChLbJ4DCzuh4uYyQrdDohCjnrJhUW6J756YNK2MRPx5r6Dgr7rqFnBdiU7eMGoogDdHwWFW1PuEr1pHtvW",
  "key34": "8tGJAirEamiVmgNiGuLc3R9N7rKf5yHSsW7FvnpX8FWgjK5h2eHH4st4tvakE4xrzbpqPxS7KThsKDGyrct6yhA",
  "key35": "4jJJLdur6zph7SwN9bvgDDnRYBuriFVn787iPUpuPqNDzZcSKA1bkEZKr7A9PAMGbbuZukpe1KEnxhxqi18uq6EU",
  "key36": "NszdjUegJT4Y6P8vivmhaRq5Qy7xUJVkQ1b6QmVsaKmahRAf7ddJMR6iCZbdiiYftpZE8csybLgnFoHj2Cd5sDn",
  "key37": "3zbppAcMttonRL4Ry4pi88FUMZVq2bPtvBKHMRM5D6YRsdZyCS8s5UQXgUNUqxSUnYvYBb93uT6jbpEy71gVnYP9",
  "key38": "wpLBZVqjutKaz2v4agM3jV9CLfTkeoLC5YdvUWXv4NM9i8qLLnYLh9TKD7xATJPHtBNcjdnparCVqjoAtpQJYP3",
  "key39": "5RGVAZJuv7LNDr4BGsPZZwqMeL5mjULcf5pXS2JVfxttK3kpe1i2DNbh6fctwFqGc9AoiSVpWzXnAySn8QTgrsf7",
  "key40": "3MgxpwZQh2rHbChSYmdwFUqEPhXgKvFQHEksdWYGaDEHbiGbVoPBgiHevTLeNo5jLgbXvNKh468FFyx14k4QbrRc",
  "key41": "6WkMeWSB9D1sZZWrbDrYXDgpwr8b6WcR79JS24q1Hgy7MAA26dnUKnQwAQnzzbNeV9NHZvD97WsPGB3Ypc2Zk8c",
  "key42": "3CWnZ9QMNNKKxmsPJDZJLPfuZ5C5Xh5SYiN4EmCMwQdbGToWE9aT5P4aB4ZiagC9FqwHETNs6HVFBUYdg8fCXw1K"
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
