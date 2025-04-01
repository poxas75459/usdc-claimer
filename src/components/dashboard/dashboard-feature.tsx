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
    "52M8NKmsNKrPYJhZ3yc3NWG1zgKxEprBttpx7vzuWMLwzck9qJwCLShEPt2rXrhDWrTWy6cBQfnEkWkxst2W6wzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYHAh8wnMpmZuJpKi6n76HPrbpR3Eq4wpcVzE5XZEeLoyv9gPAfy333fAFbnHpYGckD98dz5szzKzg5re44y9um",
  "key1": "3CqU7aeEngcfNUQig2VxuwaUsPxNCUKzxy6JYUNSWGtjuyRb7qPcYHPy6yEmQDLvB7uzBcBa6TXddxri2KUfmsZ6",
  "key2": "5s7E3h6DvxGvBEHm4eyomfNQMZF9xrRQsHYM4MBk5Ctpgb7j1sgbn2gj6r6MHDWibCKW5krefWLtBocGjnPmxbdk",
  "key3": "64N3DNd6trCh5RDmVbsem4fkg5LXKNvfWjGmsKp7Nnrtc23VyyrMqDYUctrAhnBcE9x8Hcbn7U4U4Lijvhj6WVyE",
  "key4": "zi8T3hzaxavMPSuoxPcfUVqxK9VPDaKr3pLVrktUA5GQqmJNNsjfuneXK7Pr9PXd2tSvgih7Kz1b4ZtZCSWShvq",
  "key5": "4a6JyrakwxsgR8jkcimTipusnaFwfizFzeFQpGPYx57WvjHFjD2ywJmWe95FmAYiYUP3v7utXtqDVfGoEgPt94rC",
  "key6": "5YM7QuxnUEfhNmED4n2ugPD4dMbyh3h5ZwVrGbv2fWAywfL9Dco75a8ot3xhv9rWHWZ9Ho8jJ4SBdMAKQ1Jh2HnM",
  "key7": "WkzoVPsxkTxcPmycSXhdc35ZFufDFbzYg9XQWPakRAkjAqAAgdravB7UF2VsqsYBKeWb58p8MFz2uf8k5vZTvh9",
  "key8": "3PZ8Rq6BaXPoh4SjYjan7FihAWgqVgBDABJPkVUoqkucNcJDv4enecw5WPCL5p5owUMe7xV4CQBjwWdyczNbaRc5",
  "key9": "AN4hHdoPC9Hia1nxuyGk4Xniqk6bZ9ub9UdbdyDPhn6MJgd2PeSS1FP9bTpd6BWtnEfakqcD2LSBFJ5oHW8amfU",
  "key10": "xKe3aFE5TFKrTn79u1NVgTJiHKsPL7PEHUxCTvMDHU1WC1QXYgr4cB7r4tnA43zyBNZEPsHZUn38mzR6URboXE9",
  "key11": "3wTqUJrnE15BGcDrarm6xgx48RQMjMpq3WJsLd6cMEuDicnEYMfrwuA99vYNUCP83WhhkUscs64nFJCZ1gbLkPHv",
  "key12": "2doaiJhvWBJa4n6C6AMR24Sa6HeBSVBiCQCmmBne274seytpfibJaUHq9VLUt77yCqeq6PwkcpQUjbKT9SUYKdkg",
  "key13": "5tiHt2tVLb5PWWpV7TSEPksZy4dSYTuXcGhfrMrSz6ojtXHeVBqztVS6uGadL9WWFwup8RHzt3T6kvPxmky2uzZF",
  "key14": "27E8VsT21p5Baf1M9CHcci9RucsffhKupxCTZ23JKfAfuZ1GWxDvy9PixUApEtoMxKrmJN3VH2v8cxBU3TKKBcpw",
  "key15": "2XZUuQgGnrvseBJBE1eoM5dSo9fVnbDaMP2XGC1Pj1HLEheexAEMg27cpQBtjEd8ZxLKesRK3odrQB77sojCe4Zp",
  "key16": "2ZqUwnzT72SDEWLFzSnSUHUzGQasH8P5z8nPt4BbBJVEoXJaTAqcwTMJeYkkkLEWo7HCPBzzvM6Bmaq6cYsntoEM",
  "key17": "48XTuaT1Hmikhpuj7EdEvCWKShmUdnNL79e92q1iYwCQCdiqnCdvAqhVZw2p92CvZCTYESH9Y8Hmf4c3b8TKcddk",
  "key18": "2sbaFAqaxV4Buvv7EKqhEd5B7jRnxc9pFk2HUv7kogo7UcxQhTZ1AaQ3iuVeExLFBwBnhYqDVt1MYKpRaeM3jAPy",
  "key19": "245DxKuxPLJSVWdafDsf1Mab8w378fcFmP51CTKeQJXv7vpgzrFrM6ziCfrz988N3phFqqnFf2oP8UXaZd7HPnM9",
  "key20": "4r1VUYmjt7aqbdcJq68RbXTw4FhjZ22dHHLR6HPMqEYVKkmqNtJmcBmu4PAXEhBaxUdH3UtMFG8pX64DQTLTh1M6",
  "key21": "3ifWSiNSAjuNS2kf7BX78Wrt4b6gkAzQmX3JvrUbv2NLjYBewarmjPrJRwpgiHbyu7nPuQRFY2tYcDnUvu67xCM",
  "key22": "2GVzGdyd8W3WNU3UQouRPMqCssGGeA917PUmzp1RoeWDQ9AF5Z9HBSvYUHRz7BVtP21fmfSZRJjT4XZcf4pM4a6A",
  "key23": "5kSLrXzSHtRt4UYaiyKzXuqzudXUczMeEFkmBXWkxQfVqGh6iDhLvYC6kiFPr8fCkA6cann7QEt49idY9G2mAk3S",
  "key24": "5KTJ5bYYQm25j6N6NC6PxNWXTU36VKWz7FNWnvHCAJF5te7rPeBci54KbiQEgDDyjRXxd82TYMLVJayiiLSGLJRg",
  "key25": "EnwV5iaJzikwoqtT3Pa1TftC9BC3ARLxow4DwTmVxz89JR3B4HASEe5cZDCPUX8GLgmh6xiMLpPxBx3Y9i8NHdB"
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
