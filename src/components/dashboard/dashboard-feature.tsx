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
    "2fznUpPMtGgWGS7oiUDGKTL51axQEok2MRkDv2hS2cqrfzRms5U7R8bGamdHB3T4A8hn6SX4PbMac2VEDu9HsVJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oF5Bms2JScmmQU8Qs4SyMuJfA9UHpbKfvyG4gJWrzmYsqDCnPwypvjmpcLN1452eyF8XqY8BmifZu61cogwzeEG",
  "key1": "2ynXB8RZhk47rrKX7rjB61EYcnnf9en68X8nywbi8hTPVdUWenYVNvYaX1hAgYnjPogEhLHsafjEAMem8w7ESTgs",
  "key2": "5GZHfPreEj7h5FN4UQZQyMqthBY66UapAkksSQN3DtAR5JxUurwoP2NPk5kZ2piH7YUgyT4s6THiFFtoPkrpXavR",
  "key3": "4FC5zXxQQTVwHmPncDcWq9n5moNHLo4CTLzRTCw8G4Di1cHB12P2jZoeMcEiyNDYXgKMu2USgkvXAfmwpsPuf4ZL",
  "key4": "4j4Sv4zcyy6XS7xwZTyMGe8b7tzkxmHJWJvAZjyLr8CTQmYaivJa2sZaWNTuZ7miZectP9RvT1DJL3LCSfcRtFKM",
  "key5": "5KoNiAFLqbP3p8hkieVQo8cHwZLqnzQmpk2k3kftoR6vxsHxiKkbN7nLSyB8mCYMvndg2qsxKyjKFNKN6yXXLxSo",
  "key6": "29WaSKzX1EQba2HcLkxgUYX5JzxiMRxVupTF3F7nD7mxoEHomBB2ZM3QYP3KY2EHyYNrFWGJkLJy7sPVWnZqWn9C",
  "key7": "5TRKnsY1qGTShtDL579NJxGE8RCPE85Ebzd3s39jRcakcczVqTiFqNpbLk58aHw2A1hfPNK4E3D3egMuW1xQhPQV",
  "key8": "56Yraviq5EJRai8kJLyKZFbvDNQKkSK4nxWqb7MmM5W11n8sdwzU5hTgTkKZrsBbTvrFKxrtsa7hspMUmRVHEkpX",
  "key9": "ZNdC4qNfuyfa4zMD1DHCKpAmQBYEmDZtjLxbqEeRHh8SP6nzT1RDRRmVD5Au1jttZqZmXwwoA7yYg5VtUvte1pU",
  "key10": "A77Uz93R8oH6oMq6okN7AEvnTDJ5Jn1qUVSc6m88EFiEfj1eNiGWwG3hswR5ytoDjzPxCD7Kwru99uoL6YA4pV6",
  "key11": "5HZGv6eARtyQzDDBMB97mPRgiFsoyMaC47xKMjcDV72oZfAa3DmsCom9YvqJxzQD5oAsyPDa9mXd13QXvdiWkw8w",
  "key12": "2ur7tksw45LVoyTDUSgto293jEG9tj8iq6VZj6m5isUfSGYVY4dYwRwv4w5r7SkHsRTfSdpszzWPypmVzsWxKnV2",
  "key13": "4XRUYdJJTQvTyhqHpkovGWGAxAv86PHTW3rN92Wd72Z8eazVifgo82yPd4dBhgAPJCvStLnHWEYJqVtZLD8Xo57X",
  "key14": "3r4nKv6LU8YyhTq9GkzkkbA97HTXmbtAvNp3PLMGqjku5WeChgFQMyxpNT2Z3Si9UbLWL1TMGgjDpFUf5K1wDZP2",
  "key15": "2kkpdTeyqk5t9apJKorJvxytZnNQCiBk2d6GZ5J9MiE9r6UTyFEcWXQ7V93eEV8b23kCckfuPVeFXwzZv7j3ASoq",
  "key16": "2XiLwTGdMs1ufjxmd3uRM2TAGJD5JmwdBspnmsL5gkdxd3n29t2eC5uNLZvJ58Vy9hce4XtH37BCwrxXKZiB7hVr",
  "key17": "27emPbFFd8eH56gniMnvqBG8PSyhSrUR59eA4F7fexTBnFizJud8uzJN4ABKdPpJK9aopYHwKiQQKFHsyZnjEisP",
  "key18": "642P73As2APRGWrXmNjvmqUf8XTzsWegq4JGHCNcD4zNn4L7Y1GF2YKA5RtendQV15jepUgVUUSJPpQcKBkdgRRL",
  "key19": "4umTYJAF9StbFSfgs3Qt2cU1XBUf8fYkru8vetsbcPJj1NtsjA8L9dd2wyHR7FMD9kGwNeYtNYaoNCUoSUoLoase",
  "key20": "dyEzMEqgwdXYza1xNUVXkh9XPj5VRCTvXFt4PfXY3mWCv4KrwRTVWrcUr8FnkqhZc3DdLmdEn2RuXFbDcHKSDAN",
  "key21": "2ZfGsf5vu386gFbcS33bdYtrs3b9sxACkQL82JEohqNdEy9zkD2PKpzJJzVRYcprwb8XvwwKFg62v5oQJ1kQQe5q",
  "key22": "3qBMH6tnMQSxcMJhzAPQ81q6kaBysECXtXUTLQ1eVpRVLWwsRjBruJaALmk9jsAkqvKcbT81XBXNkfBeH2DKmyz1",
  "key23": "s6ovs8rBrA9nkwXtMegyQBD15z8KE2f4rGvrsQE2MumFCWLcEkYCDdikufs2aa3n9wWJisvoEVxbHShHYvYWSfW",
  "key24": "3uizMP6jCxAAMBr2HJWy2eu9x6y4k29pmuit2VyQMFUSqDZFZWs7KJ6tAXZX147rcPKZfg4xAkVAbD9eReejSVVi",
  "key25": "4EDrQsNevQ7svRy6Pg3Cub3AtXc3SoeG5sq14KD8PibjngLNMrfHXDDCWnTrMAmfBAqBVzoojdxss2mNV9cSHTv",
  "key26": "2JFDV9B2LmtS1RrRr5R8bKNaedTc9HuUj1wdUuyva19QzvwRNn14TCRobmwMgyEocwTwNyKWfbnCcFwwYxSXk12D",
  "key27": "9NavPLg1wCMUFg4F6fTUhtuMH4hvjjg2h8HhcmMdC3QFKS559X8hfs73vvyH7iTgLSDxxtRFaMKyRftZuVbvGgF",
  "key28": "39D8XdY5JHf23ijquKaBsXVnv9AuUYC4N93aHChLjnjGzUQTuCqyDbWnqc61TW9bEJg6wyPMeEt1wacs6EBuiqeq",
  "key29": "XH3Z9bkw7dzFbcbV8NevQT12qFA5PYczMSTkbuUwWkCuycDjWYpT1m7bj2dETcvuy6EdT6z5UpnvhHxXDuX4JT6",
  "key30": "4XAA7unz7Fq94bKEotmh2VHRVYDPWHWBEcADSW6L43W59WEKzC2hwrWx74Qr7cM9ZbBqVDJSLhajqVSGzjPZhQgV",
  "key31": "8pHAeeqFa1gPPabDwekdVLcqnLUComVX15Q1TsTfrT6Et9kDaVPPnu7F459Mxx2pNRuAHDChjbNjhufawmQcQgc",
  "key32": "5j4qaAPsuGPMccEZWjo8t4YVhVduTwMzjTCxzPckEstZ15DkgoUPSefrMz7acXVkdZV45GtZDApk3jGymHsTUoAz",
  "key33": "2uCZLMvsy6YifwGwwmmUF3QmXjfLjHsqz3fh3ANk6HKNaqSrw8S2E5m9bbF6JvsfEQZnVgobDwqGqQNFT9xGfc79",
  "key34": "5szTfRH9RAKTbGkTLsXNNVjdbtAkQPqW6GW2A7ZmEegnYwdRFonuvkfH2pafg1H4XHSuzf2SHhGStqAhkHSM6oag"
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
