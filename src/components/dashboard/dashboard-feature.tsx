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
    "674WJqaKukKMohZqpWu9RChF2mxqwF6FJxFwigoYxBzTdm7cAqS5kiGijMAR4KkAE59QiSMPSNT2Vg76nU54gipc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53TTt3Sxz4yA8QmHXg7Q5S2MkbjTprD1JURvXbHnkL7suEd9X5UJCaFbWp3kjhSbNrco8MmfS3R9rLqsywNXcYbZ",
  "key1": "5t8mhQazu5HsTSKymUCSwocmZ2UBDpSTP1iZfopsZmtTQ2x15Jex7jVsKbkJ8mj3LnoaUtigveeuDo5tzxYyJYDU",
  "key2": "2e2hbw1tbmYeGvJY4HTS7sno9z6u7LCva4wu8b4UfBdR7MfMSejdjX1MuixCbeQAQXzGURUAAm6fkhBAQ9eYGirk",
  "key3": "5itANFsunrY9BMfHWctYBegsiiG3EM6aFP5TyxuVyVh67eXtsza8LdnWgNVbBdiCtpP9fbTsEJBHGk18XmGfzBUx",
  "key4": "9DLBV73BhtsQUVF73RpUiZNUgeTVw1rxwNFGndq4QBjG3h597rpVFeeP6xGsMJaNUMQCz39EknjDuuJk88Q462b",
  "key5": "4B82i8rf3LGoB2mFQ2Xy4B4BAvNBBdoGgwUAuhkt7txz92NoXKELYMLuizvQSEPFNmfWx9cwtSdHPLZTM5gjwgTL",
  "key6": "2MB1eec2dVkjpJhUzoupi5STuxpA1AhW1PW3QPZZje7FagCtezbzmQsKL2DVkntPWgwNUdBSmeUqU2yx28JLAuEk",
  "key7": "nmdXWoUWGcwhp9W2aNKh6xQKvJZdXAGFhusX2XAVQ2m3xg65TLsd85U4X9McSfDQp4bVJJsCWyhxEC48XdWdGiQ",
  "key8": "3pMusftpD5Z5BcppyT46fX2GxwMZE7tpLN7pGXwFXjRUjZyYRcuu1ZmCCcf5z5xzz1TgPiKZt7DX2dXDYNS4jF43",
  "key9": "A7iFuGmW8ZzRax6LrS39wMuSMdMTJPPrzjA3rxJMbPuFiz91GRSBHSCuQ6mExouLywtnNrrSZvGAHXdxsyHXUS3",
  "key10": "21GsbGJrtocBBjuHQeFzxamMvufAkbKqYogac2tSu8wFS4G9en9tGnLLN1FUKUFvaURCpFCfFhtRm5dqb7zZVvWi",
  "key11": "5KLsqtZtamw414LFEomBJBwMPM4dGiWMReukiVd982aumBE7Zsit6JRK8mFXKMeC3anFsMh7AeQBffBNYdbkgzup",
  "key12": "5v3eyqWhTs6kNytSRoCcsN8KnUXRRW97KGYdTfUXdr9gD5rsVzPoeEYiaJTcdirLXjkqL8FjCkiRTxZVjF5ErUcQ",
  "key13": "5oTmWa6LqRqGpHd8TuH113vfiNpo41vnnfkETA7uijYUy3THRry9aPtzw4oac8Ms5vw2wqGDiJDdsr94r6rcF6XV",
  "key14": "2N6LxxQuXxPECBhYvASwN6SGitv9D12i3jDuDFtEu995rCFeWq3Fd1pgsLqLEBcj2sHptbcMA7viuwEk54S1ssJg",
  "key15": "28p1w5kVhPJhhysx3jUTXq59cJgsFFDK8LnMuUvUG1Xx3tujkGCZQtgG8Bx2dKc8C1eTWpjzLgmmHi6AjbbQ4GZF",
  "key16": "47yasiPxkz53nLnNLxykcPF5hC2Us9yFnBVa65U76accPNhgbhLXFC5Fh49qHW865ZzSNPY6rPg7CrbTKTW9nZqf",
  "key17": "3H2U98Aeh5iXkAG5a3rQ2QhsR92toSZ1wVPeHftjuuZo6iCJd9bkvMFCAVwQ27V1URF1USwkuXczW9XA91YvVJFr",
  "key18": "5E1VznAVfD1JEqDtbgtWwz8b27QB7e4dBVy52v6TujaXMzuaAraNBCfg16D1yWG35m772L8yv3erW15iwYSmP3PE",
  "key19": "1dF9YHYHs6R3FhX5Nh8FA3oYrEkayGavDaGXq1TPUi7qQMTBiGnruZFkXiWrin33fyaxb9HQe4tVqkqjpqq1eub",
  "key20": "41wDKixSP4hZen9VewrAdb2wugXgkTHRc5QnfXb9zMaQJFrJ3JGsaoFcqoS8h8XEfN8FHLwYoAWRBJ6iXQZf5nQi",
  "key21": "3D1jLD1nmSXayPN7m4PyfCS49nKBFSKiAy7nee4iBwVeJf51hJYKihTgkBgvKv3jWPQUNf3Gj5HpEFGj4RZbQzbA",
  "key22": "2b6XkpKUKeuCKyAGBJbELBypFaBGufUCEXn3QRajq7nCUxDgxQuykS6C6x7Wdjd7i463s6QYU5jqggWHx8paW7KK",
  "key23": "36cumB8NjCbZY6PvVtwQmRpS27nYpY89dLmQz696gDoapV9f2egseeQgA2PTxsL8Y5rypZCyKzSuqWguxJxA4W9g",
  "key24": "5Wo6fs1FXrJMFnvoc5999yYSZGpoMbfJLoKcDAPpUtGvjaVDcZiaUNdQyxM9S9meHoM8ZjWcEZyrz6hSNahprLwv",
  "key25": "3827WiUEas8hT7TzzAV21w6gCoxRjasZ5ECzhRFN6z7rqZRwX37kovniEzBFEgvixGPCfgGwqLvHQLrUCfxYBrHP",
  "key26": "55J2ppCgoU6wnnpuRYiQuzARieM4YHsDbCb6Cy8C6SdaVzo4645tkLbvaLrxBwv2GfGddwhig2kmxgXCGR8WyMTk",
  "key27": "57uJoKPqZ8sCzkbfJYouJWuiPFSxmPuDv8z7TeQdQEwWYQ9JpmW4ch8Tdo4TLycvVsFotsN7zW1GDCyuV9nMfXbs",
  "key28": "5KmE785ZBCC6zayxmrQELAJjy691U7dVvrVVSHR36815hmReoREjjuJd5G3AdZajumyFEmLyiu6pVh6CAzwzWjsc",
  "key29": "nh65iGofw1LaH1NmSicgYdNDnkvGvES4TsqRrDBfj26DmCoKV69RQQ8YKPgNd6ejThY1xNoaHfspiy9ZnWEPM7F",
  "key30": "usytGseWdiMsU3E3xNH1HevNWao4YUUUJnGeoQy7sGGpSVd5NiLPPZmk1uk67U6MCtTLJUkmyBeUSAjwx2agNFN",
  "key31": "4tX2jd5yT41Vv4RyLD6gLyCgAv7p92AYWsFhs8YvASES3dcaVECygwXXwm4XUjhp5kfN6i7VGroYncRH1unahKvy",
  "key32": "5CTaYXP1W5tscs2BZprpR8uJpzD9jwnZkgBQB5EGQjwMjuvauYZr1CgAvYxBSWTxZg8NMYzTAL1WWpePAqwMwrbE",
  "key33": "Qx7jqFnWajb8Bkef9edsKZrSMSwsWC1QpoK1iQhuvFGpmfb73ykoKArMtcw9w5kuAmECQG1ymycU8Bz4BAtYDB6",
  "key34": "5x2GycMMATqEi7izrugkRPyKdBLANFHa5J9SJrrBLyksbV6b6xTY1rwKkUz3gBA2C3LnbXBkXMskQsuxLQqxvkUW",
  "key35": "2VR3Cd7KFYkzzw3AJDL5bB2g5CFQaiJjHf8QoU5M2DCtaEZEAuJusA13Bhm1tZoycS41tBeaqFvNXTouUth5CyWd",
  "key36": "2LfvusWia6LcRJpSmTSy6ejUZpZJXgaCXhvSYQPjbLQfqyZq7go7mMRBvg9iMYUZ1mKya4ziGRrx7XHWKWYwZjK6",
  "key37": "2k1quU32Deb5pt3a4WV6tjR8KCsxzZZgdb7hZMAAY7V96LoWHba8eMikQNNoDuWi4mWknboVwP8SkR1zERrUg2h8",
  "key38": "5UAMceHQ6yBCAXGZS3vqBQz8Vm7PguZBNVFeW71Rwep6dburNArPrAFRFZPXr4uT7Pnun7Ns5TjN5GYye8aExZ3d",
  "key39": "5jFd2oWPLvT5iEQs5aQUCaqNguBTheCca2XZLUaiD1aVDfFuWXUxFS8H8kPbquLk9TuGAM4zHJxzjGdwUfjpxzLw",
  "key40": "ecaQjHGRw5AG6bbANa9xJ6kTFSfGQa1P11vTvkvbxQHFoU43eDDmD4ReDeKPVWNDz4xdmLN8syVh6WHRifYUDXn",
  "key41": "3rhhRDzKy4SfSbhjzfQnWzFjn1Db7KWcF9USWyb7L7aYqynmZGNSkVmT3BzXBgc6U4pSav9KDo6UcWwMnnr3bLU2",
  "key42": "5yjR5Ua4Btbe2sFixNKtr8Y5ZSK7uWAoPxSSS6utSPV7mgvE1R13oWpnEXcDDtS9HPaAzcdsWgrkhn5pskBrKYDY"
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
