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
    "2Lrrj4fe6mgo2NwCumFNJrDwTS8gTU9cBDy65mLu7zJs5mB7bdBcTpECTXrTWTSrDtXdYba6SrENaCAEYyEcRPw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9G1rQvFxYWcTrEQKMFftnEvwgPvou7sqBMJ9Fm6tC3qogVtJjaCcaHgTXa3oH6HAZ7oaSBE77f7AzcVFrfffLns",
  "key1": "2dBy2ZWhEWAW9uzZzhVqxMsbdGrrtgzGMTrUWWcHHPQyY4YebT8bfqtJvUgkKzBtXwwnttC3dHLqyjg27CrikxPJ",
  "key2": "3HEdSpeQZFZDzQqK4zApVk582BJDP4XFpxGKy86ng3mxBmxrVJMowwV7BK9Md81dw2nzvJaQpdDf6hQZs4kF8tDg",
  "key3": "4Ni3TJxsuB3QsM9AMbXzEgg4qX1AsG7CEW5AC17Ng1nRG1hkCBb2nMyZu7CWaQ1Kvq4gEDXwJC4rGskcRovvosxy",
  "key4": "4Ja7HLmdvAY6j7HwEXh74TMM2pngV294SpUbmtHsheBz63bv9KjV7qMW1eCom9Y1d68XPuoLg2AqoEXuCMEFhvHC",
  "key5": "4XsFCFrRCfEmNEKd1XJK3DBVRwb6tAwnDaBpGiPBDgej8P6PqStaRnrJZ5sZpbJbKGHgz2PY9brTKSFgZYSRnm7u",
  "key6": "3ix1MkmBse5So76HoSEW1rvg34kRcSs6gUJiHMteLg3FfddvAq59eBUochFkXC6JHLR8ut6o29Wsf53TCdFmMdST",
  "key7": "5oxugaxYFctJcoQPSe1xEE3CciGtVu4YW1x1FR6xTb4jpQvwncWoa2eWQ2UahsmAwProcyr1pwZzszttLAfgVrPD",
  "key8": "4MHArdGcABviouiZDZvJ8CpS8Ff5q7Ep3V441TgzYi1J4jAe3JR7vtxFDRbf5CaWxFdAA5Zkg19VYDMkMiYGQH5c",
  "key9": "5wSN7oJucZpbWxQtJv1UYmw6TASRKTnkyj223ZGY6LYRsmbyrNz78QqqBDtWpzYrR5AXPnmSLyosvASrPqPovChU",
  "key10": "3MgpX1gm4QXgBWbAYnajPepQ5ceWAVq6f4wLrRZHyei6Y4wP9bK1Qk1KsQUoQmAbxZQPUULrZb7iUyCXZkZ3M3Ba",
  "key11": "2k8RTXhqu6pQtxtiQnxoc4cpMtN14xoJDX2twA7Db2V89rmQmroEGnvuDmM7ebYLc9bzZFuqK5s3fpre4wNpAE2t",
  "key12": "2tE3vnqQVVgZDrTLoRWhCgnWaVVLAahc4GfpbZzmK7mAah5Tz52yfCVBZANvckfgDLuG3nRzvjPGvdQaj2GZS3Cg",
  "key13": "3M23XhXgSPxNoHdsyQPpkVfXdiDqtULnUBvbbGB8HaXmcC5dZK4RL653JKDp9h1DKYHisUeQGVttQg6iT2YmP8NF",
  "key14": "5XnXXqjXRsatDw4YjwZwYZ7KSUbgceeYxofs4hqYjvEKVnE6wnqfzF6e5EJXUh9sFyASuZcAbmsbQvF8cAbvb5RX",
  "key15": "3wvzbyYc1nZBZq1keZkUxRKJn96ToVgqgVLwkMYSAwEUUx4wF26ktjVbqCvwDtPDmrGzPq3cJixiFh8hVveDzZr4",
  "key16": "1iZuXY9qNJfh8Z2TscEXBXEbXX4RqFLpf3MG4GupU1ok6QMKUNnWN1GgfwGgBivYu4qNJoUXBt9zfzBZtspH6xF",
  "key17": "4RKoivTW2KqAt9UdaUNr85MV25PQ4u5GZhAohu2AaLzyxLeXcF7pHrD4SgGNRjdxCQt2bfJJPKXCa8gGFBU1XeFE",
  "key18": "3rYnKT8Z3oSAzDPhhEjbRogxronE3SUcJt1EEqwWQ2Xt4xtaDPebPcvBrsfQGuYV9mAz7SzRsHo4UqS3cf3Xbabc",
  "key19": "5jHn65LVq3ZuTQphgs3LquxQcXbaHvBdF1aGJUCSdEFW9mNEtu1xcyGtnMmYi85NM23HAsYRJ2fBUkkv7pFEVCJD",
  "key20": "43P9h6tkNzwCdWsCYqBEc8nqZpWyCBB86GnASbttQeHxy8xq2NYy5GdnuPSRciE7v3MsCwy2yNRPhyKn8m27WdcN",
  "key21": "4r6x4dQeiAqhPjrJgBtEndJRAfbEiQTbJAocFZGZq4wgg9ebcpq6drMhaBXJWYDe3YWNcnd87Sv54npotKxqVaZ2",
  "key22": "2aqRR9W3fesxcGKiWZ6LedvMhcWGKDSpiiaKitsiajzPe86Lrm5xrcSS3C51f61cXafR9C4BdMq6yWMwrLNpTx2J",
  "key23": "3yMbjTpt2sGrpLHMUeUzjNoteYS2BCNWvod6VYLfEk7uasC48wbm9BjTPq9Tozdf4PmbYVBHCLZ8bfhtFmmVS3WR",
  "key24": "5VCtbjM5BD3WU95xhyuqvghgq83zV3HGVNuUcvqhBz6hgs8tEWcF2U9c2GnmBTEhE3zcyu9HnbbDURtuU6eT96Hd",
  "key25": "26TheNjZTzf3CxKPpSaPRGmozEwkCzGyBSegEdYPkMkcPc3dtJPmZy5cdkyEEQK1jam8feHnfuBKQoh6yzHysAkc",
  "key26": "QtDnnX2JokkGnrdv9C16F7fF9HZDtf5TuJ3m1qK9zQThuwF2BYdLZhofJRSZ5YS44E4dHemMjPygcFs2z35bDtH",
  "key27": "4LCDiWFm8mCvRqzhA8aw58aFHcrBgijz6pT3xM2UU2c8tPew2DY8D8ny6R5NLjpLuCZn1ZHS1DcWJvsTnRty3QGh",
  "key28": "5dVoPoQoGbofVtDp4KzAdR2cNzm2PvoEnKM9LsqcRoJpQnyhVDW2169pycme391wVmWVTKYb5E38EzLmbTEU8TYP",
  "key29": "5VY8WsUzsDQ9a6cbnAtqbP85CyTH5xE7NA3JHHrJBhXBtzGSSAeV9XLDoce3t4c5JUZcvUDSFwZisD6k9psEwWuH",
  "key30": "1uiZxERDBEphngoQHzXxQaXXbzJDT3xvgQ33r4zSCwS8BmPj4b3aEDPj6yXFkEi9Hs2seUtps4bKBFr33Z2meJw",
  "key31": "5sm531XJqhBkNMZpLzUJUAXQGHcKfbMKutgW5EJkskfeLpq8mE4JqaUcLbs3cfth6M6hRUEeww6R8yrMmvutHnVF",
  "key32": "5BkH6qvMYsTJSESbv8mrfhGrX9zStEu6vx1BnZ3Bh3KRxtvXJmYFuTEivwWZuYXGEGHQ4HykpQUjEfALoQezX2Y8",
  "key33": "4oQaVThb9kk7XG6HtPzjfrxVtwU8oZPD6rVuiPFd79t9hpjxYRXAU5qYFDmMDbAMegyWDgQvVhcWRa8dSiLGqf73",
  "key34": "3d8HTtGLzzrWq4oVJWcm2QUgNPWwjSwqgSpYXqMZQCSX3TuqTXWrESJ1DFqxd8K2NkkPA3gXHVHycnjsFj2n9okE",
  "key35": "614TuqjXz15YEpYS5ckQ4jKVJKQSD3qSnzgQzSZ3G6zNp9kzpm4JaGojnQcau5HZrqk7G3TuhXVGZq5xtqe1Zyd",
  "key36": "24KpTHy7ugoA1DHF35GAbyfg62AswtF1PKMmo7Z5WscZceBnmNxB51nrpj1sb42H7D6cfv2MWhnmyuTZVVmzcguz",
  "key37": "UNkH2bYgsB6qwvNoGCR3y3CoYNeGTyzHMjkfkTcZ9wHcRJ4cKd5vQsX8nmmmuuD2Nkh5m1HXpovWZWJHAuS9fgG",
  "key38": "NR439X6yoTz64r5bV1TwLfK8nDCTKKFbfmQ3HHu2HyHeCCp17VJGk2eCJipbqA2WrAhU1s7mTuMSZSxdZe3XrAk",
  "key39": "2oX4CMwer9zcrRP8oiZXowW2hAYnhUWPa6xJMJn1HUEoWLLWhCQDNtJRCJqUZZKUe9TfRckjiVC6nAH7NUmg2XrG",
  "key40": "5zwx6xCuLzLMSMmzycxZyxdyaPKW4uEwcCrnqng5qyega78xPbpzRjLo71E7kED3GSvRmudDYxbuUhrqC2qRPey6",
  "key41": "vwUcMtqY69TvdFoEmfqoRPCEb6MefnHTxumV64ZDd9Ujro1NwTWFqvvD3im1B36jGhXuNF4PY5HQZNcTsSAZKym",
  "key42": "8y9MEzhyNCUCEz9g3sWdj5CPiUKSPxUhv4gbxsGtLUft7gaxiWWP6cQvo6gnHYnuiQeC1tBegz95H8a7BWn5mLe",
  "key43": "GRhdJSp8uPaNiY8MHP9fxy7uUfSs8ErUybREeVPBLKxi82CDyjqypKsVQkJyJzY9qsgxfBYG3XrvbVKAwZU2Fhp"
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
