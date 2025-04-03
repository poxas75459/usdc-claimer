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
    "5G4ahzyz8dn5SjjsDgitLqdJPJP8exn7Nyi8j6mFqvQ8TDy7DB9HtDejYZkizhZYRt6RZ9QjiLdLW31AY6EbyqPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rErViPWcGrZSkpb18s2mDn5mDEbfA4waXyYU7p4imsBWpFyFRNeB8PJ1zDc5uPsnyggSHuvXQuhNwJGqzTjopHN",
  "key1": "579EupmKRCuxGFBtcRTbvsuvzNgy2YkfBDhHFa2GH7QBS5XRtB8k6hvUtvPZRmdo8GkqPp9AtwV9YQqjAmzF3qmo",
  "key2": "31x89d3gyzGCESWejZ6yA3gGBUh47mL5tPSruDSBLAYEqeDfVRGwpirNNskFvdSFv25oA4y44HC8gGVEi1ReXtja",
  "key3": "4xFVZtJedQ2nXQ83Kyfe3BUqnmurvJTxnb4S9EWA1CmdNhjM2zQXUtyhYMiMyh7XV9X4yUUPFyjedZX6ec9UKa6K",
  "key4": "3k98yjMm6HKGLhJVktEX8t367S75ofiPAVDwQDTzNDWweipbyYRHo5sDAamDndwbnvMP4fpYfeQLyW6ARvYJ8t6S",
  "key5": "5En3LsaFfcBz1TkqfYRxwXbwhENq8JLfqmFyT1Tizh44e2iAZL2LqpWxZWmPWVeeyosfqx8AbpXyaCP4Jvuyzt95",
  "key6": "ctnXjfpbwAF1avMve5ttJcSmA6AsgGzXkjFRZHGbzFkNTwcNvdGc9TwhbPtcxZYqLmMymdtXCZddgkMgasBKQtZ",
  "key7": "4aYxAR6xZUdGyZpYyq3FCLFqB9DmReq6vezySzJQ1mRqEt5DHbBeRGH7oKD22rbnT9edNxed43iQHjBpR1gwWwbE",
  "key8": "3MS1GpW1sZqzD7PDeY6hPxt1HofjBQt6aztZQDUt1QDU9K37Rp4i6erp4GmTVCLtkpjUdWrkHcThjnVq2trq2Maj",
  "key9": "2zgmRfNDhqj8gqgzyiFgnjdt4RZdMU1DVDfXuj6K1mdYhexWnQ8HFmExsu39oZjQd7TGuTsnLnWLNjFsqaUGwa8E",
  "key10": "CYuKJzGdP7nyEjb2jPewNkUFG44ZD8w5Jcb2DFAkyq6AzJSzVS4RWWo6wTDmcZ1S6dd9wCLJ7Q51hYLyDsQoTNx",
  "key11": "4AqxAVMRtT2BKg9vhi9ZhdeLamPFVoVSWdxxbuirk8c138QWtcv6jgiABG23UqtJrEAnytdqq1tipktuziv6cXRj",
  "key12": "2MDPs94Y6Y2UPezZy95ypjUCR5DPjAPJN78Aqcc6taNHjkBz97phtbdEyMqyMDYoCd3CqkdN7mpnkyQUy5gt7Agk",
  "key13": "zpvgFWQDKC9YCV7VhfAvxseYyNquyyWLf85SPuFC8hybk8BHV8hK2HgYFQiaQZxDasHJ6Bvxac1Z4k1MDfgyBsz",
  "key14": "3W2FCAyKveCzHfHRgDmgn6trgvJkYRWcH3TzyepzQEDCqLKDi2SRjzdQLKWtRgkxtF59fsd6PKWKHTF4TNBofLCg",
  "key15": "t5wiDtXg6SH6YfrhkYETiHwzAvjUyHrEbDTDkjVa7FDTcCcM7EjNg1qDBvQTAHEmdj93RCLQAXbJv4WjPH2B4MT",
  "key16": "4QutD6oTgYiB5U5Kce4WQWknjLUwc9pirGb1pPbstGrHkT99sNZ4agfvuJkiFajYggHEAV6ZamqSzpvwuvAo4Jch",
  "key17": "2G2in3f7vjVHRKLDYr98qGL6jxGfEMTeS3xK6hQZ9fPZdC5zYvYsmRZb47Wm3KdiTgCTA7wNEkN9CaJ7Xj3BzNZg",
  "key18": "2uNyfTqqzXwGNpRtBMssZWQ6zZYtsvkufsRA1VsxNQh44pPrYf6rZBB9kRsQqp6ACmEDmrySqSG1XcFqDghwePwS",
  "key19": "2saciQnqGFU9jNG45JgPrZqSDfpRu7jZiuqK8YGuVKoi78Lf1aBCuQhCxF7CmEj4fH8W39mSzeqcdm5XSidm7GP7",
  "key20": "2asbDj1rVq6cZFztrSR7uSxT3qQJR4tYTJw3ArbkZji46wyfyhHRUa7JUfq1BBQ8UT6ton9U3hktmgR9LJBDCPf",
  "key21": "xvNCTeaWUQz3iwzt9p6ba3n6FVKeuexaXkd8KyuTFCX7Pxc6FQ1hLZcte5cFt6ss1FgwYXKX2KjBVFxEYxEyrF6",
  "key22": "4xBExHCGuoY4hgY7Xy1zLFB6v1cYoZJ9V56MiPub46Bdj9sVV7ydFbTbacsgQBJDVgNSJzoU5RmWe2SAP5VRbhwo",
  "key23": "2c1D8RzXvnzArRNMs71Xk4ZjFuqVA6oGCmQ5fUhy9gZppcPkcUHL2nGXwvn4ZrL3dYH82He7bqE7b6JG7jXpLv7n",
  "key24": "3hE417LcHjY9KoLGRiAsSVvZUpdEKDbumLoGxYmZD95SFwa1QuFcjkuVBhdnayFh8xLRhgmRemE5v8EnZhTay1hL",
  "key25": "5cx7YuWeNmB9m1ttLgyjKunayVJzrhjE11HyPeXn3ujx8UArzr5zfWFY9RoMzmfnQm5C87APmpAf5yjZ7iJjzAmz",
  "key26": "4wNqaHKgcWMw3zu51Qsx7igJn7LuuE6yYTYfQnxVL8a9ZEzBnZWktzoZ6m49Lc4jFkyB6jpPYMbo4pHrSLMRR7D8",
  "key27": "4PWzYobvqkAEBgW9U4e9Gq48JDeXDNjz214eAdrk3z2WxEqKXVgvyMtALxMTMkE2344YFQ7vDDqa7XnoozPXmN6f",
  "key28": "5Xa1Ymf3JEPyEg6iuUug4tLmYGYW4wCVp2Cfv5RgNoSAebJQPjXJpG6hCVLmHmZgk1jMurGHbCcUD58jEyHkd4KB",
  "key29": "2FKobJCuwDDmEi1CxtmSrd2vwieCzt5CpPPdMjJKdaiKvuUdzccfrQiwNxyTLQ4BajH3Ymf5o9fNvHRcS3JHW1DX",
  "key30": "55LMgSWWpfndPyb5mGFw2crU74wphp3XgULHtmvJhnoEZBYJMaXjAkYPJhCCPoRto1X4ADUoQ7Ns13J2QRExYCxy",
  "key31": "oQRJYkGj1AtA7hMTshyXo9AV18icBe9E512tVXvuGPoGXMPB5w8NaeWbsMsQ9FkNVdP7iusuLCYm1QmFQz5U3Yh",
  "key32": "HUdBo7VYAVGN9EHvfcS1qZET81mEoKrD2Q4wAwC4Nsm15UAN8kMPnr79HuJj6nezmuyeFqtKwij7HeQvu3XPYMs",
  "key33": "8TsDCrTzME4oKT2JHLtKgYECmkSv8uiDgTJmWW2hVRMhyoSetqkPRd8gP8np18ACHcbKvEz8WBJwPxLzhkhBfr2",
  "key34": "3pRcJNKvtyMDsAMKNhhh81daaccx51FPD5DiRkYkTeBG8eFBFwnhCNJb1zd78g5nJouuRt8arHL16azxABfwJEeH",
  "key35": "2xug9Q8zyPj1vSkDi33jRLsmLTpnQHvxC5YCcj6GtLxSsL3NxEV2Zd7Y8wMYn5okGbokwuEcu6An1GZPCteNjxBK",
  "key36": "3NcgQcPcrs5P8oAFkiqcixvexWyM7XWRHibBxmgUhGoeg3n1gXQyqBo7SpYgDpyPNdKuLqZfRSp9AgocdR3tjZiX",
  "key37": "5SWGiVEPo5m4r2eNPPWtkucG853g9tvj9MP4uJUZuifHEanRpyrRJr1mqCem12mTt96RkLBsKoay2H1K13HH9Nej",
  "key38": "tCn8TELTNXyLzEGKo4VGWoYNXrPAEGLqnx57hFw3WbmVUD89uhhoPbDpqq4tA1sm1ZLCRQAmTuttzpRXpt4sfZm",
  "key39": "3ALWsfJXwTU3wFGNtiJBFg2pa5MS4c1gzFo3cF2DFRaNQi9icFvnBDmA7nu5bpGPpUDn8rh5yevVPZVhX5bhX27c",
  "key40": "2UzEYQftumc4cvu6BK61g7kgJMH2nicQhBEjNbjaeoZoFVqWj3qxbAA4CmLwVRGZWBJ66CYYFsebBYnHEsJZ3JTN",
  "key41": "3psc5BxT3FJc5uQkMbYntjZ8Uzfu5gQrWGVz5b3A8oWGZSNKG8BszDGC7mUySXmd7mBYhaMX3tCo7eiAEruFbJzy",
  "key42": "48sHYdDbZiTiXDLjz9GUjZmztitESESuMBFSde227ptZk7n19FmTHMnBcTTdW2eXVPGGZhwbZCPgqqpMsR3TDsE6",
  "key43": "4Uwncvht83hwdbervrwkeimkX6L3HKcPPnacU8fo56W367drUXQjiykj4PuuAcdPjcZqtD9LVjNiYyg3m1YEwNmo",
  "key44": "39kScNS9XKe7t5iffiXzuHRBtx4D9eZaXpYF4VbyeqwizXmzaSMYTd3bThFAydt1vjiaKpvp9D5aY2iWnP8sP95e",
  "key45": "3M3tX4qNRzNmR7SNdum77UaLTTWzCKLsAefNzJR5jj1yRe6Mfur7JRdJjdspvWvmCjnTWkA9RRzWKhxN5JrGaD4Z",
  "key46": "CdfHp9FPiS3ceHiw4dUhjHJmwHmrsHR2rvF2chJAoVF6Mh5PM3bokSHfGodLCVHhKE28Gvxm7SHHc3waeJdVfnZ",
  "key47": "2dwgM4z2k2FCVZsEwkxQwCAzuZbeNQ85hGxFxcs4HxdJmjC4Nkab8ps5MfTx6VA9LSaGKcbZvotNLw8Eqh6CBndb",
  "key48": "5bLhTp3tFsJyEbKJSx3pBKC66cvR4aJrWQA1iMJQjoctDPYFsVpWaqpyrn7WGsrjhJBaTnd1vveDT6CUB19njhwW"
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
