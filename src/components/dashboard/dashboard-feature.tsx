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
    "3mcTdVbK8mzCyK6qapdJELMqMb5zPFUpUtYkWnavFoGzoCX9UGZ9MuUxWcfzhF93YvGPN6xZKk2JGUK8GMZvJhmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XhQRUdH2wdy9x1QdQqoJpcZgP3NGnJwke7WrCrzjnb2L2Byt9xfwgoJXh5D2U7WnDnkDLYukxw5aXbDLAgWHtX",
  "key1": "5xi2yg624f3hze24jsZF5Kn2dZ5NbJwyHrpxT9QzhqDFZLJSNAomZwKfEYfz9D5iADoQJ1JFHMNHH7xDPrEXqNYe",
  "key2": "28f7ZHqaWgrAgyKDa7AcvAwrt9JHNcynZsdoFFsH4UeDhXW2oKTLS5hucHnDD8tJUoBTPDqn5x1RbFYzccyJrZTz",
  "key3": "2xJ9qq4ic4CKyifgvpHLBdYU8oJhUA4AE4yQefBqSGSXQjobZ7DZG7xB1gvMxAeD5HjTMjruw9rqFUyGyy1PdutN",
  "key4": "4ew83ck28B6Kz6841aLRhtdbK9vGYrVU9X1mgnRiZLNnvKfojcSHazSB3VuCzLmEXaa7V4cPzL3DzxhzUNZtv3sN",
  "key5": "5cWexaX1iD5suZz4sHAnBEWVKcXRo2Ffknfptm4be5oXJH5JhSYMUh5eZQEzDXMyNw1gHDMpjKUmcadzNDTqBzYi",
  "key6": "2cna1SK2ZVLov7s9WPUdVccWsTHcwZLYg3GxPPfhDqz4AkgXbzcp6fUUAZVLgdLDLfXFcAcGsK8pMGWLXTzSZmNJ",
  "key7": "sy24UFkcjFYb71BK7Upda4LiDGZrrEX8ZJ6UT9QKrt1F65UW6MXQUSPHXMvbvfLKELHmdh36PUmcZ12Qdv9tV5i",
  "key8": "35phW87Q5qVRoys4XgE2zWTTtKXFd1ycfeKPKcMFpc93wXTKodcr5J6uGad87YXrJB5fcr44x2fnQ5jmodfFgrkU",
  "key9": "5f1F7kkQmhARBsNTkour8ohsZg8ktHG4dYTp29pfXZ88YaPgEN2UTXGXwejLbKJ2XVUPmSX54Pq8xxfsSj2ZR7h4",
  "key10": "2JfNwxtGosb8jFp8wDaS3rTDd42k2EtrYn4h5g5LKQQm7JojuffomvSMa2w9tbMAna4whTeW9CGUhrpFo1RN3K6d",
  "key11": "3ff87zmb573mAamUAP7h6zBagVdnjqzmETiQ59cQkZbaEbaEom43SYwUdqJc9LdA6bEnUPFrXkx55wPar1W1yZYr",
  "key12": "2bUwh2SnKKMzuPu1z21tSksZp5B7KGVNo7BZCbuEtSADbTTnejLMRvAtk4TJQT63qTPJNfjMcWLhWnvHUbJ5mMQa",
  "key13": "3bXNUMyJ3TUB5xHk9w6PhF1gyfEdB1eknLw47QhVVqJHXMUsFQSooixcTNuJNykXvZPmzeHgtKQtCVkFxYaEd1sQ",
  "key14": "MewSX5haCjKoPnuzTwh4h61wkrDb7vcDB73VZRtGxSbkzfKvxzrzEfeuygfgR9szYbsmRgHXhp6ZVFzbY4QzoC1",
  "key15": "XyeEpKcYV2STyYLXEMXXMKSYZFN2BLwPPDiSjiEaEYJffcCYMQ8jK2CH8jG9FnsZN5BLJABs4U2E5pToN8idHU3",
  "key16": "tRU4EubYv2jNt5RpifZ6wTuWBEsT37NGL3CAS1X8DCx8vjLDpXjoqa85CUK17UgFeuSVsQvXeL3gBtBWeRthAaY",
  "key17": "4wweMqwWvrAL4GcW6fHjeUvr9Xc5zm5zWxQJzENYnozbKtto2U97qxTrqM6iRBRr26UAD7e7hAM2qr8qTPtQz2M8",
  "key18": "5UyKd5FDL1Sys3VEtx9h9JXgvgvVqjomQv5tZNDwLAQdR87rohApg1ZJkbXpnLYYSX3KGoevuy8cxvj6P9mK5bsv",
  "key19": "2uG6MQsiimpqZArqZ2X6qSJHutFz2tUgZDZ8jfpv53MPwD9wdDrhRnkw1tedRo1pawbrZawkMfCFYPzMa2WNYMGG",
  "key20": "2Xx9nBFUAe58vRtdoWVb26CrMbQAwZizaBzhZP7MF4nu8PNczqVThMJEAb18v1yFrXK88jSxekNHhDuN14N7SuSx",
  "key21": "2ZRxWchtGYiVrb9LmULhSuJdMVbhCjjArL9zmPHLRUXRho6fbrDq2d3av3zasQVCi2pDAkcMZvHvCdV8QAFmk3Bg",
  "key22": "52ECzi2RFMXP66SB3JhzaPknM7xTRUQYRNNTdsC661N8PmyYbPCpiry3MNDruAWLgnRCr4jo7enCmdHKmvKY9obb",
  "key23": "224fmAkyBDLpx4FkfvK9byCqMWu4jSF7qSKpohn2Hff6guVZKGx3WFqi4739EF8UqFoVacNj74vfUZPjzLzV1zGE",
  "key24": "5b4eVRkUtZQFsBw7PdNkA79xtgSC7t5jcBZAtuCzC9WnJahphRcMh9A9GzVUZ2quz5bM6NbDYvNAVrbhr7GteXw7",
  "key25": "2Gy9qPEMAkjmEC5139THe5bArU34amGZBc4SiPpd7CAWyohz3wRRkZeZ9RNmCagDvf5mK91iZ5WBpCvnyvD6H74L",
  "key26": "5SGuuAPR79BvJRf6kL4bxfMbBAXNMBLRzzKnZxoyqd4b4m2WLjuwYyZGmbpRpCwzu7YZyCK2R1srQxcPBLmkWiXD",
  "key27": "22tsp6Zw6m3fgUav47gBPu4AL9r5up7x4iUcBQZUyKNo878HmzuWu7BgVdVjAWtss2Ss1J2k5ra8bs1brTkW9gKV",
  "key28": "3QiVXE3pR2EsEscuHi49aapfK12yoVFB3RTL491dGQdksNjihHpFFo4xu6z8A4ET2b2HwbmaK3q5bZeRwWvNy13X"
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
