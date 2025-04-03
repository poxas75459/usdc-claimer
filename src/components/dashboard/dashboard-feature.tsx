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
    "417UEEwe3SWpVjDdNj5xU4pVcw3teqRqfn3SBMuxmkbJscJkVqhpwpDiJjA3YrSg41krYQh3WRfTWWcx8V9zntZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fTtuJgVpb859MBWZaQN5u9PwPHpNUcnLUBGKNizZ4KFQrAjc9WE6N7U82GsgpWbuUxmoLWkyXsqfAMHqgmTJ6Qr",
  "key1": "22qKmfaP8348kUaEtQbeCirKNfUAyABCLrFbrCPsLZ63o8tq8j8JZvja79XZbcAoMRjTtwYZjskyEViRj186ij6D",
  "key2": "WPeDmzTVquciTVzrbBBQTGUxdA7yUTGWitUY1JfgtA7v15VzP3SoAjdsZs3R2KbHg26PJFWtPL8LZEiYWxdxqUu",
  "key3": "5vr7VoNBskxyCRbEL6648nm12RaeA2jtVG2rFVEAWFXhPKW2jssfBUJaC35H9VPdUEYyjFwxYkrprtjDxPFBYfRc",
  "key4": "59RAdhb2QdXMDqiHyUZCnoY1Ak6shHLpXtJHxKBcpQFfjwck8EqD3KoPUsPnK9vattrj9a3YwdRaPKG6mC9Y9GwH",
  "key5": "3Qx7h4VfRdH5CCfD5i4QVLrvV85StWjSYTMV5Ur1ri4WCfLq3SvdUHT1CTKKQiQXNK5SMtRkLoHwCC6pQvkGef1F",
  "key6": "5Mo4T3kKcz3iwuNjx6qZHU8EN7cppDjTcmfRHY9RaXEsHrWHxHWG4Un3CRqvFWBwJtf6rtn7PmmxDgmwNyLYUoAy",
  "key7": "2C1m4d1dEp6emNHaM7Z7obAo6gvRoeKuTXRcVB7eQeTEvBexVmeiYS4Gzswdd6NAA2r1LPP2iYyJ9GtAwtdRERrp",
  "key8": "5GG23zdsS7NwhTEZH3Tz1oAhqEvLcjDxvthA5wjxbsnHyAe2sD7FeFNqLyRJmWXiDnKLgwJErCw6uFGHL3Vuwth3",
  "key9": "5nmMatgTfF5NxAewb8K5F9XtQDVgkUGWaufLyJ33LJ7kWbKZMhUnnnhXgBUwApb9yZ67E8oQHP5z2B5umF2EXJJw",
  "key10": "76BuPTr7L84ASaeRLxF8goRzAqHDTsXyQXEsajZDZ76LMBMH8G1hABWfiH9DAro5K1w51xBwvz38jJiQ5kqRHpK",
  "key11": "k8AKZYZJQ6Djb68f8br4YFcsYH1oktMDrbwr5NoQcMYGHhgaiB1aTgH3UwRrZP85QhzYtCF1QKbJ3o677cTsX11",
  "key12": "2SbzE1LFemxnqsm9XBhMsyx7FKrH9SP9wv8sdFR5fnE9cArsrGqiENYKNmRhHweFcyYYWA3vits45u7gWEgqFg26",
  "key13": "4Su4QDrpzw5DDoSzkBmd8Bz5MNMnqE3mRoQ9GuM7j9pftWt1RKm8sm3aVEPmfXzBJW9HePP718rW25F3umPvtNWV",
  "key14": "63aWqvJGKrADkKTd1sv3JAU2jLPHLN4CgSp7L8aQGUCw8TaYrCYzLEzXFfdYVeMDxv9xmnXnqPhE59uiLF6EWAHz",
  "key15": "3BPMGnkXvn4FP3JoWRaStwtDburLc1ZdsTa3wEyUYWwVq44kd4qeLPcmpgjXEoJkRnqr1dM8XDWvAsphQjP2Wzpi",
  "key16": "5WSoYQVWCtGwiX1Dn3CcEcQmvauvKMGGbVytVdc7wLxUPQ4Vwx618ChL66874vXpjceByNLDdWkUe3p6Tc4tE34N",
  "key17": "5cterJm1KpbE2axfo3JmyLZwyexWPtVheWNvd8ek1DD3U27V46vmcDfHPz8cio5WbWamX8Wm35DPBSAR6xuehnD9",
  "key18": "2SaNKZnYjp2qmWg3KnwNGktigZRqMWGGdHQWnfbmE73wEiyKtjUbXCK8v7vWG2XjBKWRidmVYTx1J1xSJiKqL1nL",
  "key19": "4yzpuTKMaxPvq6QXuykjPbKT2ZdXaTNgz47WXQvUvQ8P2Va6V3BaqBFj8DYw3mEhthCCNEYFyQRNLrQ7P3CgAAf3",
  "key20": "26dPauL9awoXBEw45ueeXXUfCi3EdaegLZEmx4qt85JKQvgyZk7bC4FRFNXEsaWRj68bRcKNKSYxsXJ6ba77uqJd",
  "key21": "8EQZyHkWwKBbA7X6t2gRwa5aaiLDvJAHqUdgRZu3AgAvafQ2UrJQVvpc9VQV8rpa5R5SXnYYxhhPdmhjdXoESRg",
  "key22": "27Kp7eY56rK6Leinn4vA7owVC7caxcgAQBreeMrPwuxtUkphrc3bguMHe1MgHPG7CK9WFynL2SkAbL5U966bF27P",
  "key23": "42NJytcyh5uPRt5R35wy21dAEwJgCpZTsLuupLcxRgfeSDD84aLL2sG8qbNsDwUGN55c2xZ1XZKkxtgtjSZ8mh28",
  "key24": "3ENK3aj6V4ZsSvWVQCTsVjDfZn3yT2MLWYbbc2QBn7xwZjtjkCyGHvt3cqPz3oyGPtehGSkap8ptgVnvxHUkTAbG",
  "key25": "3eDrvdEhf84fuK6GHkgdhzUHnxNAs2y5nz4eJFJqzqwp2nP1BTawxBb5Q3WutBhwTFGJMXvGC5v8rwtA22YgbJ5g",
  "key26": "4etEvtqaXYBsBndVS2Zrmsn7zNEmY4vm4t4SVuG22Z2YHTtREwNTofeEjQxwhgBFJDCf9PA76Aq2BRPViCSNDE6c",
  "key27": "r5C84ydHft18za6cvj7nHibXFSkDpFvRwtMrpLiH8ZoNFKjdMRN7gemWDsdWwD95FFgjWjXSst8GtZ2FuwiXsc4",
  "key28": "5mJfBEimzm1LmBG7WLnQBL8y1brHTBDtuoLjpM7AHodCMMDjxSLba22RNdaknRD6CBdeEf8UUrPdgjbVzEMy3Ws6",
  "key29": "4rADwz9rfQGn4ALpJ6Ds8NRAsHidb4muoGyJdmWoGLzU1iaFVgQ9UreXr4jqUMeZ8W3jqyN2oyomUiGteV6R6ZEw",
  "key30": "67iNBwq1HWnAjmd2GTpAUNYPKQ8V14vCLBrtGUs81mEKxDqgoujbQpx4xbpm77cpKynhmiaPk2yXGaQUpRqyoSYs",
  "key31": "2fRY9vhvKkPFyzqEdFuE48xJS613oukRVhiyzMB6CvTL3sn26U25TDKGKc8PqJvVzJP8DZ6RKhzcTvYvsjq15Nvx",
  "key32": "2ebqyXKJfSog4d1CAFCmLdrSN4HDqEjs9adqtmpYNBoE9xVRJKgXz8YMxBj21BzPXGwa1peymcW8k1CA98t326Aw",
  "key33": "5jPj3DwXajLuD96rbEykakBMkVuJNseUbEfwvLao2wCsn7XbjY3wZwTehKa6cr4oboDT16Gz78vHuRcXsEaDvrqq",
  "key34": "63kYvXvhDCzeLEDeLxqZ4hmYiNj6j4VPbaCnNP5uq7jWK8fdo6DSLrt4FSnVHb5DNnrdRfTcmukuRJFU4Xyf7L9z",
  "key35": "2rQBP3Vd4Sd8jqRBnrAJWvVMzuxfyR2mYqY794biKEXi9tcJT2nTb2D3x8SDz5fRLYpRt316SsMQpy3pLXjjDeeJ",
  "key36": "4uiupgATmLb1BXp8jTjnyq2EeNrQpFvJTqgiAbNrCX43mh9VFAYaaqNS3j7yxzr76yWkwD8JGJrYgKhKi3WLhXkp",
  "key37": "5ZZuAoLUWAiFkC1ECnXLCpQM2s3hPsdREjiqdyBRg4X5oAv86UBD4MysT4YU4XqQzF6J8H4xFkKdoKGsy7m2V95D",
  "key38": "4uMSjUUt7rqa3UwLjVHkTdRSWcs663XiwjbcF8tyktAnBwoZTgqb2Q5YAUxA4yFkp2GdA9EZyVnhW3mcZvCxrYJt",
  "key39": "5s3wL5J2rApczv9eu2oaAciBd6waK4dtXXs2UrgmiuRN5S8ANGMgGa9jXq8tkpbmZuziRxcxetGbMSe1sTywouSC",
  "key40": "3BwTMCH6F6Qx9HE27MvbH4n5tmYN8KnLdzQdYnQJ4QPjRbZynqqEkPMyUFgLeKcnvcj2j6UT4ZXN9zcjggeWC6BX",
  "key41": "4DRiAB88Fo2mWgxukqXq3wbgtBQLobpRQqyQMkrYRoy7a76cEmJfxVF8MyXo7eAD2iSJ5ZNRrhS3PkwQtAFrbnqA",
  "key42": "3o77djQ9y1NA6KjAqswLYLUyMTdvQGPEubSdqSTYGk7PtWjkBWFo2nWMkCQi3hpxoiRU5kNSpPArV8vkZG6RtuN8",
  "key43": "5X2qYNQyRmR9rpXTS2ogJcZC4EGGVX3YwvthRhCmwNyt4HpmmpeGTxUzyWqXbSbmMMKxsCXnxgA3J2w9aSqSazMo",
  "key44": "ad54K42k1Jf7Ww9YSZi1H5t4DcbyeV1TA5WKtpoT9LB1NEasbySdJgD27ymAqddmvZ61MxosuqHdTcPWB7uNcXh",
  "key45": "62m6wsxffmWkifU9SBrV66HKMJtiKjkJnKCtLDjJw4frEJaHSUSGArD5CrChwZtiaQjQbhEJyUEKkL8QcuqAPuBh",
  "key46": "5Q8UKZ7BLVNnMBU9vSDbm6YStGWL552qqJMrpDXQNnNyrfperrfwquBm5iBThBrpJZYLZif1oC2opRjqwR4baiUp",
  "key47": "8t6WyZ6j2NshLP95CCQyHkqAKAJFSgSDP1yXDaSWviQQAT2aSnxHCQsVbAvHmrn1sbYHZYoYvTZebdf3uGVqKyn"
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
