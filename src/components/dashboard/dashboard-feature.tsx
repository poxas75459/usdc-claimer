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
    "3Bv3ryszAHaG14Ha6reoYUAS3HTBHGUPL2ZBfX5UGopQxsBCDAxFK9Umzf74RXVKgaRTQqKfMs8dT8Va6PANbGi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ALqp1ht9L9GCbPy7cTPMWfrZoB6ennf2ta3coLz74oNFAWBnjQGHdqnLsdwjZJpkiq6sQg25NznxT8ZZHyyCXtB",
  "key1": "5JVsN5oDUnXA2b6JRUJEzwTW52aB5uLXRPtkCcXN9ShGzyftNQkLUJ1vQWffszLRL3uJfVSvuyy22y98kbgaLz9N",
  "key2": "aUq7XrBaFyd5J3pv15MfZz4wHi1hDid4SG2BqnyjaHShJ8Brr7vy4sQjZuoXMfMR8eyaTrtaFkdNY64oJPuwsDP",
  "key3": "5YyRN7m7CquaKq9CSyrXzUxnzPuwTJpExGVvDFZ7w2yFbAXUrY9Y9ZPdgNbPkpRan2sQ1YpWbg3w4G1vK24d9rWb",
  "key4": "QyZWLWYTzsNpwJBEqqy9pj5pQV8q7XYmEtBCTWDVkDtCjpDw4jRUqenEFL1S1CmbrR9XAYwMmpit3MQFRPWgTfG",
  "key5": "4Uh1kYKLb9JndneZoaoLkS19LJu5es3k2YdpKgyAMqNJkANAo3YicQcUEMWPUjkFnhC8UmWcojCW5DZVdmX44xJc",
  "key6": "DLVcPjwKjzwZ32T3HjjqFqXi4tjeC2z4pNaWW8pgutK9jciYBXrcA5GPdXRP2NTWSAkaZmHVggr1CrUCvurrQPQ",
  "key7": "2PvAdHuBCjxVQKDggGPN5EweCV12DwyhVQGTbuwR1ezMYLFs7zn83iVw4s4i7rBwAWCvQBfT4hEaHqn68hr6srQG",
  "key8": "23nietshYaQcjzhEAYp9V2EFhRAyFQUDSDVhVEdkzKrBg6XUf5jXAUFeXuGovhPQ6srZ5GMRHb4AyjLZG59i97Nk",
  "key9": "3dKkdcJdBmzVeNwqX2TxJaQmdXJYnDieWRJD6ZDUVTkTBpdbv5WiWf757DbLKK2ri9JKkaUuMb4bNYFiyrm9VBzY",
  "key10": "5PmXuDXcmK7SkAxxMU3LraA6Yct5eCchkx6gHKp9Rz3TBY6YQMWuH5NbYiGdTYgLGE9cb9DGEa1yvja8LGfqPxh4",
  "key11": "zQsT7drHiKvftiurGqU85MnpjoBQZmSs342gwKA6qQkiyo7c2GubkmcGeGYfiyDtc7qbU9a2hcK1GppSBiiLQYt",
  "key12": "36XqUihWZCQwtpX69UNpgYjW8SbFnWEmJa6xKJA1UfiUvHcCiNSCBbzbM9mLBmqfMgB2bjrCT9JNKyyLtv5CCWmL",
  "key13": "3FcKsuVQceab4XFCeYh6Vm1Qs6a9yX7jtHXiDGroYFpfkr37oGv7254WZLUxCZZ8aupoWaefXF633a2WmM2UgnuS",
  "key14": "zwarLMJuh3x6erZsFhqw7boqao5PMkJnyiZEVtxTiEtR9wkqyRCH1Cy7oVBCS8fdMLGAaBbS6iY4rofcgtMMqfA",
  "key15": "5zEiC3qXT1rH7s7PuLQAPFdUgjbEmB4Tht2RD9wvZEiWeTyu1hDyCVuKUFQQMab69Ev5caynjK6qWxCu4JkhgVs4",
  "key16": "fjAPC8AUDFD81pjQRXpyTtiE391tFhEwLvaECvpMPUxKPj9BY1PtcXTYSXYDndV5GHM9B7o51mkxVP4Z67dnGLj",
  "key17": "HTeG7ZGCLmvo9um97L8EjqbMwJBYKW1sDnty9FHRiHTyzEke8WpzVDdhg1TB5PX5KPWpFz3eeuFHn2kqLkFJEbD",
  "key18": "3EbsjSAr5JRDVy4ArbswfjRQ64Xo5Aqd1r6kFHpBZBhmigvrjaRPVxejyNvtKqV73bd2yTAfkiac824DdgT61fLD",
  "key19": "4qUEGFFVeE4Krms1G2FMR8XjiEiRTGLkfU9nWyzN3icdVkdQfczFbS5cG8X43sUPHEKvDupakae2zqdTvM88GNDN",
  "key20": "5AHif7hkzDHgfWd241DqsRJVg443UEyseoT7kvxaZv7n4hdKgFUCPgNCwTxEnepGtMMSent3TbvekV4GUP3vBjJM",
  "key21": "4SpA9u1gA4bCcVZ2qDCzWt2YBUhXAzkYHEqKmN8jfQtwww2nffAWHMfNLhADrawF6C1NuPnh7mBbGxyvKAc9hUYC",
  "key22": "541L2ko1pPX4k5Jiud2HnRrRtMeU4GqahfzQ8Rn8qasJNS5eHVKzDsvitTa2tUXTnwd9ef1AnkRa4qbSqQJuLc3A",
  "key23": "3xe3NH3Br2Yyq41DcCu5s9zFUBEU2F3Z116Aya1iXp1vX7esiwQWBNJUFkFR5D2yKBetHyfqsByeQ5rG1koBQwcf",
  "key24": "61RR2ecrs397gCx1PY1UwTbvGmdBGcjdrtnrZ7VeTxMunVKdMhwR8GUwfkzb2FyReCKuTMrQ1MbjWvKx9Sf4aKjh",
  "key25": "49i8zDQikCRAv8JmbNRYMzNg1AnHunKcSfy9uvPJni2CY3pPhCr9veYpupUM3u47RmLFrwfTAurAxJLfTiDsVzmS",
  "key26": "2peSsHdqT3AHEzeUeMP82oqSnHxM6frdCmTRmotgK99MeDiqmcbFRn7JA2U8D1oYiQGeErTXHCGBnDFE86zjGde2",
  "key27": "5qKuSPHq3QBtiSv6CHVX3o5J1ZPu5bKTjKNZWDtRGevguSvvreJZob2ZAPrKsLmMg4MNTDopDRkWwKiVPkKwakmz",
  "key28": "5tMkn1RxDpMp3BdgCVU6TommR61ae7Mfn6v7v9E5ZUgKYQSXpVUk982n1tJTsuB6K9EiLHfejiuujWXNNwAFHAvT",
  "key29": "HBsbWzhNxbkpmoTqZfMvyBFLJnqopaGUxNnRZDuJ54yrRDBnDBFUs6NvF3zMdzJkh6abwcpKVuDwtVorwEWVNy5",
  "key30": "2wDPAwkWo5yFHiksdKtAq2U6pDPFHeWXz8wgAPmuJUASLNui3vEr8KED93MwqPwr6CEetuzfbttZVT5mBs8vB418",
  "key31": "2ikSFFkUhxUiCAUf3Jk22zzs8b8qsfkStvxAtbtfPL8ENb2RGd8tNnHM7eo4mdAvoE12xNnoSnRHYXW7Wz2YhAUL",
  "key32": "4BodDKp3u6Kb8mifSdkjLJrCDdzaFcAKxzJq8wQbfeQqQabFiE7RF5PyFTvrnTvVQHKorFF7dP1G9kSo8QGVFXL9",
  "key33": "5aRPvjCTX35kvA3c2yBVJKUEqkwhspk4Ep3EpTK6gq4zXaJucTKYF5UxfQnZURFB5XSj5BmWmUM8jaEir8TmQm9Z",
  "key34": "4a4LEj3DtdL29rLcvWWAWdvJViCee7QEAAU2WD4GFZFnT5JXzRmkkAjY25MeZRgxqstYzVhn4Yy7aWQzQpDaSTZ7",
  "key35": "38hSEEj1dDSdvydT9kATAg2y1udFTqGPBt1V6gkuoPd7yYN1gpemjUjpabLZg2LukyUF1mfBPxqdVL81KJVFHQi2",
  "key36": "23CrJ3CrtwdnFP1dT6AQB2tLk9erUXPTEKR57nhWbuuCKVvwNc6Z2H88M59TNUor5wCiGXFY5xe1F2sBbjM9Ch1F",
  "key37": "4wEQ6kYtVYzBkKR98KFNCrgL5hT66h2hbGk2Ewu3pwSTWQ7ETFmBiZQFttFtTa5eovidizzvqXmdAPpfBWQ96Qo7",
  "key38": "Xsk6hyxAoz4SrKH3x425dvnwiKR9Z8KbtF3hg8ED6oLNPP9ToCHqdDNvg7n4htDHacoEhV9BwSauHWGq3SzCfkj",
  "key39": "4EL9EMFjKpR3bN5HN8Y87MqyQHgRKHiK8fCCXHp39jpyf2pGyBp52ye81cjkJUAbRE3dqKt2Af6mBaGYuVQR2k6C",
  "key40": "4p9xdj74Qjm9dYPoX46SdKZ23W6t1qE9Q54oYXEvGnbgvexkZz19gbNS56rQvCaC9gLzzWjawKWRmEBmwrwWEboc",
  "key41": "3qAKhpJcuKBAyjreKHAuhLr7sVYk6BBDVDUh9sKKmrEoQQU6RxmrNbPVYC4KGUwa6cccSMzWeAbPt8BXMPCc5SxM",
  "key42": "3Qdbgn5wS4DRMyqPNDMNCdDxGxDNbDF9wrC6519YXZ2SMbZGj8giZtnbPMENYtmDEXsjaHPMgBksv11PuyARoHfm"
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
