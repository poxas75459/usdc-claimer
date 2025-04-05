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
    "o2WpAwCmYY5ddpJnL4a7B8hCGXydJY3TJG7zGxi1hqnKLbwBcrmDSVoRsohR3SD6pncStbWh9N6f3q2fGgpPTyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkRKgiorHmnsChu3UPKnBUd95URZxYfubMocheJfYkUxiKtGEVDtAPfKdNpMQr9WRXRqKTgfYCu7xa6zChcZrR3",
  "key1": "YRQiaE54WmT9PsVyVy424QPBZ4roaocdwetvyfRdxNBVR3TcWYR8QJrxUnc3UWi7LfKGfHZSVuJB54whFAWagfc",
  "key2": "4jCk2GerBWdbQNoi7JNrubL6knUQqwjcs21aCuV42Fpg29xJSNzHgBT7A6uYbka9EGk7tUHvYyirnpvfsjSo59nj",
  "key3": "23dAXmiqDkMtpQPzuaBQafL4qf6iFPFTpeQ7bcnb9f525B6KpDEE2DbGHSFgz79enRWKvMW9kDghdnT1axfzzhBp",
  "key4": "4aRbX1XBjYnXokfpnJXxAvydMscPih8FFehuvEg4GS8PeWnyXtGE2iwi6spWNp9HPa7sAShJnyvCpWc2sU3K7NTE",
  "key5": "2eKSd2JnLu7s7Sz7LSEC2S8Qi6h2fKk7J8JTBGLgvAEPBxRrLooNLMRLmFN8UFaLdjN4FokCb3MLMisqHg4LJsza",
  "key6": "36ZwAkt36j4VWHbwoVYj2Z8AJsJLN3qEiamhupir5szxeZQ55Pgxkf1b1Kxh5QLmUvrQWhuv2WqjNzCcFTbMvYFF",
  "key7": "3PaFKQJ4KNBCvzQjAmCtuT5qQTfmfiU3XEF249buU1E5M21Ne4dV6pmERsizTjDUdEueUPG3zDaUDKtDQxCuKnJk",
  "key8": "5fYsHF594xTyLBabMpzJdZN1Hsu47Tm3HbvcsHsjmJ9qcahK7vj9W2d28mPav3CrFU5RYTotMt6ip2X592x9YJx1",
  "key9": "nLjPJ1cuAE1WxbL8cYCTgNnSn8f4b1C3X3TK26fo2DQRyBKEe4RDi2gPDjZqryfMp8k8xxAeYJnoXUfUKnpj36Z",
  "key10": "CE3CkoAZnvjGF7qHLtZXYmnFZAtYcuBQWBSjBti6PP1Tg3dwnnrEUBq2WHBa2PBsdrd3xD3LTtZ4QoxaP7bD5Ag",
  "key11": "9sqPnDPCAPErUvTanajqfnH8PKhwdmAEPHNmVqUdAKKXYgF9RmkSpYVSn1odiCCBssndEsqPCRAxA3Ray5RGpfH",
  "key12": "5SkYEwbgYBHHisazkAumZU3NaXMR57Fv7EYaMf1vaBoQDrQTRnHsyjBaiZ2hbmedYqyvrfxSpBirGDPCjbn3JwEu",
  "key13": "4m2ZRgCK5B64ZhsgNtEREAKtRiAxQdwp6MgA3xZC63ZsV48zhBfi7quBuSvLnfu7GamuWWPM9fWgX1HVTHf5BrnC",
  "key14": "2qYiwwWij6iBJ3sWXwqzsmFxDigXdqWAtJwoph23dF1e8kQVouSWYnM6PBFg3QGVaQT54GrQw8TzcdCHDHgUB7wm",
  "key15": "5GLWGxtsggfkFvdrtQdrfYr8iJ2EcDauh19L8iraWjpo4jkUU6Kx7WhW3KtdoiCBJzKwrHADQRDnu4uGVJhuYYfZ",
  "key16": "5SGSFV7NfdpFt2bjiFLtSyJ1TDm7tCkN839ccqkqCZnASvW3ZtBtcNPSBTPZpme1jvKKdCZsB5Y4hYzeWYH26Kyr",
  "key17": "YJcV4tCsBLwRSFR13h8TDtNqWs7srixgyX6Ghn5Be2SuxZ1TfXV7fVdfSgaYMPkYwE41Ym9tBHCqpcqfRr4DxSu",
  "key18": "3dx9CzSdV3MiRDH2TSVLey3RZqJSNjM5Up4eAsDEb9GfYbTzWwjfYSKZNqj7fro5dNDP6avQDLBgbTB2y7X2Ni5p",
  "key19": "3pmdTBGKYzxZggVBFCf6UjoFPF4VCn1AFtVndGeYSaM4QahxEytnNePkdUK8EpgEdZkR4C2ZgsLuKTmL5cT2kuhE",
  "key20": "2Rh1zAT29f979uB2Nei43W57CS8Y2GGAKaF4YGz1MT7hmRQCPTqzrDbKLEoEoJHN83QnWs2L8nV2eGktxqpJE54D",
  "key21": "4datmjCfVbrEoCViiAwTPx7Mwt5rPj7pVpFMFoLo4VeQS4yViTzJ21CrnEqFyagcGXnDtd25iURE9KApe2ujvUyT",
  "key22": "3x3khWWo1jDWaTHN2r1HCDzgwZ3Ceu6pXHtgjmiEsnvvWa7LyNB6Vi8xR3jMrdNeb3tySsXoDMfXogu3SbWjDJfb",
  "key23": "5EvbKHMYxsogZQ1bTAc7ZxzkrmZh7fuwKcATWcJ59gDhEqKUTUEvRKqApsXSLnvzptsyYksn6AvsCii5Sbkvz9Y5",
  "key24": "6M1K1NU3jpPwRgWYiuGhx3AWUvdVr8ZJJUwXhZt7AYmDsZzZ4WX4xihhNVVGcb9h8iEcKvoxDspWf6zyHywpNu7",
  "key25": "244dUQB6rSwwaj4EcDwkwsX6U2xSThTSeS5ksQCJ6KB2J6YvStiJq6uAfm6YHL4T5R6geTsncw6GXnuLSF6dRqBX",
  "key26": "2jnku2oja7EoeyCHMouyyh7SqoqsXVSWdbjwmZcFE4C5yT3ENEXHsfaxVEmp9iiNehoyuYSJG5NCKhp4TifnBZ3C",
  "key27": "5Y4aBGis3MgXp1PFnWuq9ZffHxfWSzr87ygTvytjXt5p18YAiKAGFdyGb45k9eqjfMkedhJEAPCBEEWqpZdMwamx",
  "key28": "fu2tXu7MzUUwpcMATtmqKKiosyNihbThgmRShNTwgotq4LNsUQhpdb29qZL3GTtRXxJ6M2ceP8Am4hDCNKvudpr",
  "key29": "3aDXMxwmX1Yau2k84BLGz5NQmMaeiv4vm4GPXuhU7gW8AxhAvyozpt6wdZNpBm9gif6emSWA66Qx9JvgRMqMT6Gd",
  "key30": "32oKH9MDYwwesfKvv5VuxMbhGBRd1FjpMXiwGESvzMsazBbGdXj4PrzRNFnJG5tme9itmRkW9epoP4wMMEVVHS4Z",
  "key31": "24FQpMBnoU4jNS7KJdp8VLHGAhk92JAPuYgB6sBWyGXti6R83FzTYvKrKrjB8Mm56rhEYyk7SWvGjW2B3nc4BTtc",
  "key32": "5YZ2JPbUh9mqTeWjmumWNQLfgmwg3jAwZz1AbPTHHus4UPKYrmLd5cxMMEFyg4NHxLREVpADexwF1wjQbEvUVPKq",
  "key33": "36bD4Wx65sxqMis7Eto7YHwGtJhk6kLSXD2HB2in2fzTbDSTPNrfui1Qm4aRGnJnAEd6ZvWhriMQ9Q8sYrfvURUy",
  "key34": "2tpy9TbMwboAZB1e18eJN9sQpWRMd2AhHaqeq9jVxiyBfZWxT7HmdS3c2uAfpuedoyBYedkTrMXMmumaYF9Zz134",
  "key35": "UiY4GGhGfVBWoQFSN3N7fpPTuRgqEyrAXD9Qy8YLX7gxSndkomKFoFWgtM9sSTArVEK9y3PyXvCaE3JHfkcgGB6",
  "key36": "3eonZev32RZnKfDB4sR1CfdkTZyxXSiUi6npb6eeqAJ2abQGc3FAbztZyq26GeTGzvE4kwsgxCFL5JrjJWNUK8D6",
  "key37": "4HJ4QeAs5DLxMembXaNQm6eRSPEewgiGCek2WWnXA5WkUhhswyrop2qxdQrg8Amn2Bhk3JaqbXJ4feFMdijsQsx8",
  "key38": "4vyCrvaozwzcDdQ7j3hH5frWQt4uyv6ih9tNWAtywh3PTRqEDqpY5ZRP35Ed3kobXz6SLoegMwwYWGFDtG3Y5nsh",
  "key39": "2CjdwhdsHVpqm5zVQXUCy5FyxPhtqTvRU2yFMFbGWGGrtn7aiaXMzfkAmkW1XFxFJ4xsChw4X4rLysGN4X9Ut3sy",
  "key40": "5m99WALNzuQe7TvaUMXnJ2H3ZPt2gNi6zH3vs4ULbm5gf13ed7CgnR3PUkcnBy9vvhqRphnKUgy6FKkyyHpw45Xw",
  "key41": "RwotM7uQnvWrH8SHfh4snLU26aooYXmfYmD9HvKHpBjqBeMt1K9R9SUYerE1EiprowPPXmmaV1teR2gq7JJ8VUV",
  "key42": "5h96Th9pPuwZ7rREQcrTUx39YQbEf6nV5PNdwvBatyDea6hXF7q2Awwn11JcQToz9zxzaYKpE968Fv2iriogrY2x",
  "key43": "4cpjW53riVFq5kKTPbbCbragXdQVJzpCNHDcQKQb7nqNMLY8WaLW3eYffnuQfK2ZdQnMdLawpKnZpVzP6jvV6Gpm",
  "key44": "4uHNfzNSSPGN5mcwFCXBhKmHn8wBz82kNjz4ptYYb5pjpfaCny8BHoAdkT7ExY7AnC7HeapCWDVom314Ub6BeUBN",
  "key45": "HPCAujymyztfhZPXdJFYCvKUGuXcpN2jonLrs9HrNK2R6LrWiTs2XbrmRGCBkEmtRTRRYASs7KrHZvWTJiD9e7m",
  "key46": "2LxRAo75NneooEcA8QkimPyeD8kibEtvJdZBUrGD59h3mz3gVf9iinp2AR82KQwB8r5UJCSoy942HNpZxSwuocbA",
  "key47": "v4wjtX1imx3Muip8hgLcwehn5c3ZsfsvoZosqpZmcXTL9aRBvUUkJv451F8gsZ7mywAf1PXHwekrcFeRJ2ZMRf8",
  "key48": "3uuPZmqCLiP8TrowcSmJnPkgDFpRniRxNQUGzotkv7FQKnNHsM382LsFzVbtyy4uBZpuJdub6LwPqGURAKjK7iBU",
  "key49": "5Gb5RpLQ72m67BcsvUG2Qjem2FE5ok89kcVSCU3KtUo8h2kj8Zaf756cJUkVSxNcqRZZkJExt5hpz8hr71iEueqC"
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
