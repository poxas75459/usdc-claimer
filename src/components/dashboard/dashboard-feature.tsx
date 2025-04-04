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
    "2pRTXgiMJpU9meDdx3UPSjXyVwRj1aKCajr6Tqcw4vFCjq65QTBt3Bd42n368r8j6rhYCPMYLjrph3XV9gFkcjtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ngga1xrUjpvo3Ztg7Mr3DoX1dq85MiYxrqKMtX92SVDv9j7wW1zKxXUEjxqJ6sfjLMckKU5C4MBsfs7VVqPBNEj",
  "key1": "4bwkqiVYJVAcex63fzm3BYMFSFsptBXF378japf1D416uniJQ4Cj1zyZ7H8RfjMD6qW3XEJLGWbXMRnfpSXE1tJY",
  "key2": "67obnrJ5bbtbo1PeC9fTHU7777i1vg4um2EhgWX8pMDdDkBqjeZfqMqgqjWWZXT6YP6pKLE3aMxNDFM4F5GK7JKQ",
  "key3": "3N9LWei1FoATqQEbEEBBnqQftFCenerxxgDk1unvL8aaDVCJhGJebW8QuyrrMWzdXxojQTNAQsna2y46AUmSarXp",
  "key4": "4whBz9psRAikh7TxFqktaVKfW865CFn3c6usBypozAi1c6cNULyhFfB6eFLwwnXi9HxVSBhXJDND8kW5McAh8C2B",
  "key5": "3VKqqjdqxzheNNPQYbVeZXkTCcHKXQQsrqVeJDPaWA7fTBBETiq4paTQAuD6WJw5KGcS3eT6F7UQcDkxrCqrVPBs",
  "key6": "3Jm2FgetMoALKz3heHKLHPCG845HTcvAuENuPvg1Mp9g5RT9YaeeDkcnJXpDsevmcvmtEyiGg2P7dhhPZ4sPE5Fn",
  "key7": "4gLqQ5wxZNXgXdBwMjRoDs8SWBhWf26D7EUZ5AJFJ2FfHqHXaSyWHNKSckeNdyr3qYH1KjVd7Zgs3DP3cd3xcaJs",
  "key8": "5nX7oBTDLnFVb7chfcAha9JASUjF2aCu1PARiep5KZQGpZw6UgrtUKMqQ9G2gzR6hNPR2Skf7e7soCRcJyqE2UJz",
  "key9": "4euri5ZeZnxYs2xjLNmvrXyamgPouL3cepWohkrntV99ZphfByMEunGq58UAe5sLTXWhy1xLUoK3atxU3qgAMoPy",
  "key10": "2gUTbViEH2oRtmKA2xxt2SZVKbJBwQdsRFQRsynfjYx9Xa2tDUt5vugVtyMh893PJcPs1C55nscTK4cPLpDh8p43",
  "key11": "3s4Hw2WpeSSsD4W5SYYmkVTX18azCsMhdosdJZQYhtjGDg4PGsBgjRTPXyLBKXQvomhqyKDHE4RhNENZDYvx35dU",
  "key12": "ziebs1MVrXhS7dyWwaNErjKZjgEv18aGehLE5Esjn3Kng3jR9VXThJeMvEFiFA8Uy3kacsjCwJChk4fVaqZU8bp",
  "key13": "2Fp9VJA7CKLJYNULRjZZZPZXCYs2f3LdX2mwujyuRZCyLYt2cBjzoFnDSy6x3TUQosoB4k7aCV8JyYqUGxo35ftg",
  "key14": "4HhRz47G9jRm7Ruj8C3vj7rNfPzqNVhiM2vnSwjVEfuXNcqpvtMam2ma5pM3tNHrBLb7BgVjShp123YYz16fwBdH",
  "key15": "3JyRkxxKsp85BHxssTLbFd4CojhoafapgKMwLh9v6Ne6G5rAdz8RPQvYFhhuDqV7maryDhYZZRGDbB9Bdbrv7ShB",
  "key16": "3omxbdjv1EQyx2a7gJTYTDsP367DGXrEy2aN9xUr9cyKsddFLwkmVKSe7fAfGcusKGKfzsagFo5GxGy7AvQ3uZHW",
  "key17": "S1i59wFrRhyHz4839ZoQFUJCX2cwVpANYV365aPN9FabK6xDnmWpNJsjRESzXPsrsHPeWp3CAszi4fD1EWpP2Ad",
  "key18": "5McxSxDVkUWakxjLD1Q4mMRe7hwUTdiVCb5cUVDiJyq5nsY7mGwkhUq7eTTbiJf48UBkLH4qedZHMhxzjDQ2qzpt",
  "key19": "QPiSL2h8gfpbU79siRSfnFEyjb6TPXK1kMLoWkCLrcpjeru5e6mKvyinYXy6uEEjJZ62jwNgispXQw5bs6JbEzA",
  "key20": "5V4tnAAEMsNHFYpFY6b69c36t1NQBjZvB69Eeqkejq8CMqNdvkCZhfwGgm6xJpqHWzKVH94WFxmYkxa6NoPT2h9E",
  "key21": "5Kqq1SqS9P8jhjmYePPx6rdGrcLjbAxixnZ2Zgh6ZEosmdttivccbZHAbFTGwje6Bnj9m77eiiCKgEJ1PRqsvFwL",
  "key22": "26jRvzuY3oMmBZsULUJdj2Ek2N7JNpbM5sGcev5CNVrkKyb1E24YcTLLRDjurTHzyG7GwhY82D9rwu44u2WyLp9K",
  "key23": "2getMTv5hEn39486VLgmvkFPBSZuJxBDLn32UZPXND3yR6tNywX9QvCSxLh8hrchoQWGS25nBfHHjS8NTukWCWSe",
  "key24": "4PyfqwkE7b1KxFRCwQs4t915NysgHJUriyDJUJaxmT13YXREM4mbtZKSW1tC912btwRwULnAPqaNcMCKX2ZPnjLM",
  "key25": "XHK3gmCNGxVdTyzU9pSWkA6rbp8JNMQzsMAtYCAdCWKcyvypxfuCcySf6AexURXp8yQdQB5DbGxAjwdTcs6mi9Y",
  "key26": "32QZ4i7kGhBE2cbqfeWnSQxXa2y4rwwYNiSxtK7V7TbRVxPaphbceY53bEyMWX2QviataySzeAiy2C99qRytK7Ha",
  "key27": "2iCQTvKz4i9ALXJ7CDywsuMHeGGNomVX5uCmSrXsTDbmx2AjvRM3tzrtvLMDHU9dK4wXo6jkHrxeDorQuGsWuYAA",
  "key28": "4NbKycgmqHBLiagM3hHVVcw38rhgj8535SL6kF2TfkBSTCCPAAsLu7ZEeXhgmu2z91niiWf5E9iVNhCidAdZREa9",
  "key29": "2G1ajbpZ6RZ86SffdYU5PDHZMvdYsrhd3G3nvGrhBk82VVdC7cQDWhf7qEHrrJvLn7ULH2dCMLVNDJzQ4gTQFvan",
  "key30": "62AgBxVSWWQeAAxBWKrCnEDk7DXo3iLTku1aud8sKGP3Yg2ecZegaQpUHC3BHWuxmTcpdqoGxH9KqmQMEZjQxJg8",
  "key31": "2MyWyS3JqjTR6cPTGH52tubv6CJ95MUdcVQyKwyL3Ea6N4hG2UmodRjrYqsv9ukL7R4Jn7GFWxTu7hvJuDDEcZXC",
  "key32": "Sz6ha2w8YFkqoifuabAPJY1tY1V5Xd6oZt6grkJa323hUczHoMpbvtKGLHNerRkD4DAdXQPZ17pdswVL12aT7bA",
  "key33": "2vhK7JCEQ6BCD659TjAnnVtmdnmN3jbePXKBp5JX5jP87N7urBmSBf3N5LY5JRJNg8fQYAqSmWdzATfW91ApWcyk",
  "key34": "SzAoxvNokwgaDGhHDEHoHmJo5e447JhH7DP3EoopwvJztv58RxkS53FtS58r6od2sU27mqgBATNRWtEvaHT4exE"
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
