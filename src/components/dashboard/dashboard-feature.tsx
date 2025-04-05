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
    "UvWYw4C1yqav7HWqEJHDkBG2SqQW5fFi34GZ2NaRvxshAAZDuoa9LHUy9vQpq4TBG283oh72imTf2mdE2vMBCUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3H7WaYthc3NKF2G1g8jwN2iRyRiaRAkhtVVajC11z7PLvaQ8LPNuQoBLsXWf2T2pG8HXjqQyjgVKpPkoP6TwHw",
  "key1": "1A4i6qCsGxmCAZNb86zFBS2Ti6SiWrx1FeEFPcMQKudNb7d3md3teD1zYUEVrKunooFi6gtFHqiEpU8diqhEjMH",
  "key2": "5PKxWcs3P2rFvHHcmoqvWDPQbbrHfnhvJGCCyccaU9cVVZnQWhTnGcraddgrAw8C97U6TbzQvEp6Bc12U2BV98my",
  "key3": "rcuvKFyMLsbXoB9UPXiumcRoHPDxincdgdokBv9fYso938WcGLgXcMXFMHYkjuUMBXYsaNdUc5fH4FGfZ1xfv4Q",
  "key4": "3sQkX7LXRdBghxHkbQF6auGe64zGpUhbsjmLTXcshxsHWJdvP6wiDmkPq6T373CX6gJtMe6QQjKpw85RodhJf3Kt",
  "key5": "wqumFNy1HovQCXAifWtEukzPRsxuF7dF7MAVf6aJtXcrRfp5Gtzom4Gigrpuy24dcnUkThWnnG1KHRVj297rmep",
  "key6": "CQfhjCTPZLCBNneDNLG3PrxsVvVtmns787jriyeoKXYgGJ3hprx1yFed8z2XmcXuw2FhD1tPGB1bvTpd9tA45kk",
  "key7": "5Jfwd7pzLsuGyifHVD59jsohz2eTkYkhMQBCt9WHTRinU9iTZv23hka4y9AnEiLCQAwT3YCNzf7c7LWwP7HskPuz",
  "key8": "3qY9kbBgR5EdBY7wdB7FpaG6zuhE34yQkApbdz2nXi7NtyjHNd2JbXDALAVpGPcfipcB1DXcEV7kJHZBdXZr5t2s",
  "key9": "nHGxRcAKrkmqvRcqH5EGfqL2GVQbHysijJ6tPjv6bHowyEWyaZ74gCWCkv4tD4NgpLRRH7GqNhJuCwzsAMK8xuX",
  "key10": "61h6hMMahKhgZc3AoG9Yh8AafTRPEtWwyDdoyCE2YnErirpQGJZ9eCTRtKFUdkyjFqmARAFejRqNvstPiVGsFYDu",
  "key11": "3CDiQjSDBA5JW49BLwGtNL3KEcBtXa9HEcsRxJQLLJMrqxP8wG8sg5PchESD4HPnNe9m8P2U4HpfzRznyF8yvNW8",
  "key12": "4gvFNH21omL37YC2QESyVi6Cr2v2HutJgksaiJuzQHGHWYqVgoRjADC3WNCAfcbRXrdKQm88tbCQPbKNWq2Q6Ats",
  "key13": "5EPbot71T1ukU4LqYi1eZYzcj3DjiJwLashTWjgfzETkPhrELpTXhmUjjPnb9q2U65p18r7JHqufJzePuRu8yjBU",
  "key14": "Ne5gfhuTpuAVhm28G3sjiukUajdzAwWe9kJvkVjcpupZw441Qu751fgbM2a2hRN1hMXj6r2E2GxpfMffcxgwuxv",
  "key15": "4CQzkDqKMuCfeKZ3tYp2iDgENAehbEKGSHntySr84bMkRqLpEC9kDEKTAgZW9qvmpharR2MrL38jJTMHyghqksiA",
  "key16": "MbETb3oDuHgvo4wDisuHSrQDwQWUFqvzi1avCQ8bVFweHNFfFzP2G6kAfe1Xoh5zNWvQQodbsXNJE1VmwRQUK85",
  "key17": "59rFycfS3jPg1dcGBqWdkaEXYnpwVy3ZnRhY7bwzhcRZqEg3s4BGL4LhWwmgRc3Hr1E4RCt8bEqishNcQ1B2YxUJ",
  "key18": "2aDV7jxHqxM6r35LCKNGMm31cd4QUCjrXeqouh1x7yRsfkEKkKEZWUmX9mUHd34CKWh3i5a5imYFV52YKZ1sbg4e",
  "key19": "4uZC2KqNQMmoHetki3vov5hAPVNtffqg4YmcSJfRzQdnrFJHkpp4h5vgxZFqZbJZAAHf6VoXt6zB9LpLgxSC2ptH",
  "key20": "2SfGNE6XN4eykRKEevFFbmCgqSU7Wkkcpx7YQTugW4XhCdZAjfBkYcaS7cs4N9kkbRgfbfH9CW5TkTHqr4PZPjWZ",
  "key21": "4giQ7rNXgE8cVBRTzjsZWTXPz4MyFqaK7xQjRe3M139eSapW7R8CpSoqcBsk7qLxbw1pPRDWY89Vxx5fVdK1xxxX",
  "key22": "4eWX1PZKxjGaxwbUUCQ5trB2T6sj1iL6NhFDB898MNnu542odfEtSdQ3UYDiTn1HGqsajLXE1SmxaKQeDKZWMhE2",
  "key23": "Mb935ws8FzQ5ZPA5YqZgcHh6w2sBLJMg5gwv7gyPxKq8TCoHoRCjZaDQ8GmMn2G6HY7ebLHJJUQ4YSg56MGczEJ",
  "key24": "5AvFVN9x8FdDgTZg3LiTZkyD2fpzh74QS7FhkCFDVHrc6sjNmwuXEn2FUqjyozqHavbeJf2r3xd7XZtLZdovPwQu",
  "key25": "4vmMRXNRCoVz3i7XHthFz27xFAKERtz4BF5WbqLQYbbFBfjThVjtXVyAPUub7L2CxGRcg6XDvwuv92pFfhkbKTKV",
  "key26": "4KPUVk71BqrdxhR5EEnnKEAxx7sXunrz2ySyusVD3BU8Q4iLgaHxxJEQQzeK8eLs1XG4XQiBDychazXYaPR5aprA"
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
