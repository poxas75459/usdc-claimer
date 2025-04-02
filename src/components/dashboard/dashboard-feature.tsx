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
    "4wg2JRg3DFFDVVgSjEifBPwusMyvHJJwujnq8MvXNmV8dGvvC3RFGtRcyvvWAAane7wy9MNhXgXFe9SFR67fUcsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSXtznxjmaSo6YogjYpnD1HxHHNW2NVJeNEVpRzqmruCsTSCqXGnC5r1zakkeZJDLp3ncWoeFuvnnuwDeiiCvut",
  "key1": "7AQQj2bJK5begivw2XUXkJbpF3nb5qUiyxZDQhtkiez3xZUKdxDnjzT3xSaG9XFp1BrYm7GVNcDBJPBWT8caDEV",
  "key2": "2S6crofYnwMNueFzHAqKz1s6PUhrarDyZiYwhnGxbNGHmZ3LYF1HAGBkemaqC928RTXMMAnbVAvw8JxWFyBkHzK4",
  "key3": "qJVnymoQR3sKoTdrD78gyN2zF28oshFG6mv2Yqa1zD7U74u4KsPf9R45r4pTMgzukovu2gVR5KsJAesrNXnGNNE",
  "key4": "5kY6WW8qbs7h4LgTpu5ukDQ3adNd9TJTQNaABqDwyN7Uh5aNw5FHC1hxdj5VvsKJkTFRZdqyqUJRGvsrQKajAwQ6",
  "key5": "66B6MhkokGHL9wQCXhmHNsYirfFDfSHnx94QiFqrJRCTNvCSUtFzdS52vwxbHYmWbUXJGuFVzCG3GCii5i2JHWBS",
  "key6": "4YdJPQqZ78cGcStkPV5UUKKRgKkc87n25N9uQR1oSd8LXPV4QVyv9J5pZYSvymSNARFKVL8sLaKsnigCiZYeTajQ",
  "key7": "4Jm78jtnTT3BKAxQPeyKtfSTDrfDP6VgmKMwBF4kBMYfw3365uqGaxvYm1QV58xcUHFQWGdvFHNsbznxwCCdhJFp",
  "key8": "5pF6PzqeFs8FmmBRPhYGhxNQW48LFD9wXEEBwmmXZcsS8LsHqaWDfoPjuWmfi61KXXxHKieqd8ZnkNiVYdB7jNxq",
  "key9": "5w9dEfxEBTNsEJM7gLhDTaAJeMy5gTHKjoJtG5jn1fBqBXX9P1subFo45NdjgzcsqX46hh5PySgwptnrmnJ395Ms",
  "key10": "4nB49wc4SdE5tvViLsqYD5qyz3qKUgb4WyFc7ahZ6RH5hPfrFdRRKsL9yF1wgG9TZuGT2jY9iPv2J5F3QEp71J1e",
  "key11": "PpMekQ15d9b6RnyQhB3UGRWoahzA1CqBTFWgWKfkdVhFRhRnzzpyN2bNF3henrkPqm69RYJrjCp7rMmR1a6d44v",
  "key12": "4BofVMfL6nPXwqz3iWTqAe7nsSkFJfxnSdyVgpDKJxRTUS1iEsK7DgwK7Krzy8pUym67b9REeLeCoKkVXZsMjmhD",
  "key13": "3U46CAo9tQo6452xNgLAtw9WNLSxLnjxpxFSZdR8tBwxasUUVjUbgHqxmyBtQsYqq5zYcWr1jpvoc1T1UXZ7L4xc",
  "key14": "5B6ZtqrqAmZ7ZUgVkvAeHsc1y5hKo98p6qEg6AN3XTM4AExV5AmtedPmEhg5X6CVvHghDsLC787Djg2Fsd4Pbim1",
  "key15": "5s4Vbz2pNLQuyX6J4n73HqA8edQ742UdK5Rt1QtDdQxjmDwPs1jRzJdqrG2S2qu4YWrUsozDXhymVytfHAAJCaBV",
  "key16": "1tSg5CvErdQAf3eb8HY6Kv6JGGz5E5WY8Rr7dMkgHkAswEdjKvaA23q5Fhc6cBHdRBWsFWZwe93qANYw939JfT1",
  "key17": "3CaBchFbLJxJxw5eZiw6FgfpwRhFhcvWRB9ozLw9fyrZ4L1MH4s1QR3uqsNDGeXnTT72WbdcHjQx3QJNjRDAsgwb",
  "key18": "4cWr1fn8pYpwMMqUpcRfDRtcBBf1mGwCJ8PUG2A21sXDSVUyqwKmSikpfVrGDkTvQB2momv1ndTsE6SgpU8MJiUm",
  "key19": "4CzGP4AHct9LEjPCEzxMYNNzSX82GcZuyufX785Nmem89ShVtpfEd47raBhQ5QWr9hm3gzkKXmimMVJs3w3Gosi9",
  "key20": "58KCVJpPMr7atxSGyuwcWkY2Qa3EXJwNJYacX6qDFHE3JDSYNXDKBkaJo93kpoHVf1zr3ZvPSCSaceybfUniqhyf",
  "key21": "5RUPxq9ZR8dyrTeRBPg2PRMpbrbZJGyi3eXVqBcjb2MG9PrfofToSvSCTdTZaCjPXmBffPxAF9zoTr3cbVN6hCQV",
  "key22": "5e6yVzqnrP27djco2edDxqtAejg33BTBLoRzEQv3StRbvZafkySMpZ3zjTQiMSfVpgbTKXUTtz91k1MDh2vRKTKw",
  "key23": "51tNxro6NwY8y3sVjym89rpgP5a1xX2NVF58xAKTNKs13sKGwZfSsvs12e8p8P9z1maXBNKUDFJVq4m4C8pieUzD",
  "key24": "VHhywfxsbCeFmqAm1tRWnTStYZTu24pbyfnKjzLEhTyuVSDmzMRiA7XToiuVyouQpUJnjrjKMsZdriNBYHeqWdy",
  "key25": "5X1Y66xdf6mLW8mDVcF7BhwobcLHBYGbTB3yfoBa5rfbWcLpcqvDjpZMBB2Kk2iHiuWN5KyzMZVKgebRsxrNJ7Yb",
  "key26": "66bji3PwU7Xo6HwJfxuw9QJj5nQpzaWFtsSVXZXMQLLUHGBXmXQRVJH3zb3hFEsCxChnCt4s1rVx6u6w6u2AtnZj",
  "key27": "cEEyn1y1CfTHhozLB9kNKgY4Euy6uFDqi1U58Dq6dkv5WxpMnFcwHsYfEPR1WB4AP3xuY4HrNLfkzhVdzC5XcVK",
  "key28": "3Ev7hprNAAJgu2hgCE6Q2VuTDa3m8hMPnk6rc3YU46GaJJTtWiLfpoQ9Ak1aYYWPyKEEz3XUV8MJgyT3sKcZticx",
  "key29": "3Zahgx1xDmjxn1vszbKeYoyGpG6PtHVVzhocsDPqWirM6eorfah9WmMkp7BEKRE4PmvmcvXwYsCycWWHzzHNZBDH",
  "key30": "4D83zD3FDWeBrgCYuough2Rj4YBvcYLVs9tZv72cckV4QjbToSREekJ7QaokshYm8eQgWc1CC7FKu1NZe2h9Y3WA",
  "key31": "3oWUbTDSYo5CqW9SVzWstq7wVcyS9qENhWPBy4esFH9zVudU46zyhn96Q53pMiHiTBLe5m21xfEnH3mqSw5q7htf",
  "key32": "2mJYftsbPogJQttTTLds837x37GaMNyBQgxvXqPNC6DafnnuP185XDeoJQTV9NqZcdNmaBTq8YkeMscDoyBQpaFE",
  "key33": "47bGg286wCqbc9GnXSRJbaXbK4bUom22s6WzBNdNvX3KiUH3LikM9KLNDCr5TnC9YE69ZZheQM1DNMc1Acj6HRu2",
  "key34": "64ZVaje5ufB3k69buPfSqjEP6rQ6SfpWi7SRnDj9znad1cMrcYgTVhaszSNNizuhsNssJAjPfidb5bE2iAQh4htc",
  "key35": "4CwcKNRsRQXZzVykkUsBqaTZgZGcfds4QveXkN1X2jHkpBQUD5Ndnp5nwweeTCVX6BkbNFkedN6im8kr7JHcUgi",
  "key36": "4n5h6WBwRGv7xhTnaCr9yBPeWC1cDGggJoGePZoudKcraZMHnSVbfDvhvm8KeeAzbFPVEDjWyrFkr6ZRQbQPK2Vs",
  "key37": "2uCtPPA5QMppEsjjqnTwBWRFdZBbSx3Xie9JUN9ZnkiCjLQPBe9fM6yaTihe1xy67A8N9qYWUc7F6BLmJwFkQBFi",
  "key38": "kRvtvonXwe1EE94yjty4Qrh9cEHWw6CudoFK4eUSYgEbAHY3RshJGkaDyCp2GmvagVKv8maRHmfzGNpG8FhX2z8",
  "key39": "igZSabvdniHzyAAdrZCCvqrFoznLfgboSa3ekcRyDrJHzbxFBapu6cYnxyxtcdt4WzQPqE8w6zrf6yR6u2NVhPy",
  "key40": "3D4izufiEfwBSfPfEgocQ4jm9xZwPWTaa8Ny5PpxXML23AXzKpEsYN4vugdymaLs7h8SrkkN6AqfzkMKRoHMmerV",
  "key41": "4uf97rDfmYJfNFhDQRWrACvRKVjbZGkX3cCc8J8uZ4XS2gvXWA2RNJk6KHmf6u2K4EVHpckAVN8PpQ5fTYTLP1gt",
  "key42": "66S6CoK8xHRT2uGuYMpX8qwTaihtxQUq4B8hctSTDVDRDnsqf5CAdcNnN9DKLkEXz5hGhuqtCXtZQFsoych4buQc",
  "key43": "4t7ZD6gyRpAiGQB9yfSxLqAXixU6X4zZcHNwwj5F2JwdaGbJgU6oQsuQHbenXH7sDogFidUgC6djxga4vS1PAXFZ",
  "key44": "2ZnZ7fwYTkyMPdSMJ32wP18tyjLr9hFeNqeJgUv3AXC7SXuWkfwqeyi3Ny3xJmr9ENfabrvxWoTit3WhEYieeKaf",
  "key45": "it1xeLi65CVobFwoid3v7nDBHpsrsMz8pSt82aWAeDrDFYu4Au9WeFWcuhm1WFmbA4xbVqXtJBEDRZJiX3nZG2A",
  "key46": "kDoFsCzw3HNUcLrGQLCCd1ygTUQwu2wMs6A6FckabfwWPjPXDFt4pb7T9bm57QEWzFg3DGpUFuhLsjMVvTYvgqK"
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
