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
    "4dFQ3o2fx2dcpxNV64M1e2H5CXSn6RwU6ydLDTXyyBihpYGMKFxcKMRXWFtVDcdEr3RPaCDXnZYPbrJSCPwvw5gR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iqegGq8jh8HTRcWcXuJM5X7F3dWzANQDCiR3xMcCBesYaD8QziLr9UYKLy6JHR5sSGt1mE83snBgk9WHfdHTmVJ",
  "key1": "37rRA1BK3q2ToJqiMZHRkjCzCAZW9RQs8FZStvF9MEqMaGvNveumcu2mi8Vxbe8JjJg5VNopwSACApASkZMkzwQK",
  "key2": "45dAAxpDqLvzp2MeTjMGzDhReGY6gmQ7jS5d3XJ1Sxp7htBhpHMRHCKimroKWVee6bVfwtqvGvdiyhvXTsAHfLZ1",
  "key3": "96AH7ZvgDbUeczcb6nnL2sjX1AiD9RiAtBNjqamp8AB7sJqAtfZJ7tn4Rawf52xnzpZo66iCzQ3EFf14UbUDR6L",
  "key4": "3peED92siCAj8LavJoJoBq35iFGfisXHvS71ExxkNK5C3pKLzAdMugak62vBiTRShCXPFdjPG1XqNau3Bd7A4pRL",
  "key5": "5Ydx2XMpPU2bqamti4xyAd4eAMyzQsv4YFgT8YhTYTAAT8ytH9rUtRznFQZAXUQ5KMuNFbcVsW8kEMBWrA4W8oxw",
  "key6": "5kG9hGcCyASM82VwhcAgkaUqUVAKMaq6RRewQM5cjU8aSLmUdxaFWQFRYU5rSkC8wKHTrZ25nX6WJsFFB1HsSWRw",
  "key7": "SDLptCSD4VTKzrmxTHUJsjjBFgMFuBVnoqrXUwQtJjppbZTSECNkLJsopQRfVsLRKhms1V73vopj3tDCV3LWLoK",
  "key8": "vxCCfYvX43cHQYo6UBrYiMtVhdTpmbwsafo65P3gxmaeX321WxgoUTepevBRhfgAyx5pzZTfVK8CvihSqJxQptX",
  "key9": "2ikQCiYj1Uet3m5dxbBZMVCiSTamM253C8xTWLBLkNktwV4RAGbVKXbGcpZJe1qjkXSvYC5z9ztKugzhZ4bvVbAn",
  "key10": "5VGH37p7U5VNpK859o3y3W7X3AFNKzC9ts3RY53EGCUDvTsLyYhN4fpA5cX4wM9QXrXNZiWU2bGV2oYh4kmYHBm",
  "key11": "oAQWcfwHxP1LGu6BsnwmnNRxTsV3HTKMpxeKs9zKSa6dzyreic15iwZtG99W6VXmLXVouQo754Ev5DDBq6d6FNE",
  "key12": "3DKi7drVtmPVm14XweRLkp88nThd7EsjNDXHeiFUsJrz3E7F4m6EBrrX9cdszPgCdFPtnuQbJgjqzTqgHyJpWS13",
  "key13": "4gBRa1uNZVsENXRPmEW9CojzVdyNkSiya5AB3VeuRjsTCtKrCbhqRbfBPbTpCrsTRCvmntEZkgA7o5ziuthFjzB7",
  "key14": "fqPdniY8tw6JJ286LfTFwnGUzxyjZNe1YHSRAXjdVtTEiq1fXu4LarSKR4AF4L1PNUexPwsX55h6rQmPauD1tdf",
  "key15": "4F9sa1pFGTFoJ3TcDm7BehJTPyWgxtUgL6LccVUwKn4i96HNXT9eDWAmTNWnkL7aT6VAAh4oZUUxYP22ok3pUy4i",
  "key16": "5wmsRrhW4uKx7utBsM1xNFYrDS5kqbmCrmnQtXe34j7hjVK2ZQURJLWYzjULSBbUa6mtisrHbApTJCMnckTimCbn",
  "key17": "5v4FpCXXtdnFtKYTP8ZwMgMJeELtcn6cjVck8Mukgx6ALe9z2Ko1TLBhDZBNn6AWoGnqFcCQj7vDvtHSodVzDaaJ",
  "key18": "3oGaZD3GGfsuM5FUrEQTMELe66eScFJCxpvsrtm73nAXGi1vwb1cFraMwYReS9zFufJJrAZmvtyohYMmxZe9cNWg",
  "key19": "2P67EEgAZh5P5TDnTqWQ8tk8pVV7vrRNRgfa9KP3ZQpr3uZcibyHUtiXtx2tado7x9zmsNFoZ8G9H9eN4WQLEhZW",
  "key20": "5HtRTC9aLqjW7KAVhguFMyvtC6SiowYn3ftuCyTV3JwKDxcp4HAYMJ1i3iJu9oZZh7X81e2P2TSj6BCbpcpJitrh",
  "key21": "4A8U76xpUwW4jMV9RMsdpVVZS4nT7gaRfrK33LA8ScaB2zhMmdwJioxV18i6M5GHzuvCez6Rtt2wXcGmAjSKX99t",
  "key22": "3wmW5GktPQHjwSAW8QHn4kgZY8rKt6f73fm7fCksvrZZfNeohHB1sD7Kn3hngNdGsDRH3fLXMYNpQUsrg46JNCZv",
  "key23": "51FLi1x7uYR5nv8NcRZrybdWNwk8oMmNqQziUqwWGJF6JW2pPvwye9GCsQ48cKeMv39bCRbo3sFvF8sbpqwzFa6T",
  "key24": "3xRosNish8PxUgT8dZ6tdw5e3U7erdcziJBxaZVyVaN1Lh8B6TN3WShvVzJbdje7bhNJxwnLN2Y63ZpE6pedFwYd",
  "key25": "3o8wPoZzwAJN5vbqvNMFuQb6VWmWtAABjyYMVJgrUFN5rB2F6wk9Bmd3czPvLQcLsvREAypHGgv1KAN4zQu24wRv",
  "key26": "3MRAwPZEGWrQidmxCMtWQxkrpFJZoZrJqFdQJ3Rkv4LrFQ1Zh2dQtp3Ai2hPweuFu36rMGoasKQjkfFpWtYWC1hp",
  "key27": "3SCuN19wfBheFKVFs2hjXUMjESWvgYBQzfbZV2mfwnRTCEkvx2eTFnsatbhU7bsknD7SUZJA6srRx55p1pFYT6i",
  "key28": "W9Yw6UNCrtr4kKnMQWciBHo682FmQPe4ArvhVJQx1PhjUXp6e9JPpFQMFZcryy2MVJLYaFaKXPbWXu9rqhy58qg",
  "key29": "scP31ad6LM3PbAXpogwk3NcPY3d1RLBpjhVMF1aPdSzk43Bsza6h7yb8z4oNH3aWjY57gra8gEFkQ82BVA7S6s6",
  "key30": "5NAadcVaogTMUwxMXPycj1yDY4jZwv1KHM7AayN8hTPa1VGfJ7EkJ1v1sj1Y1UH7pbVscnuun9ELY7yC1KYwfsFW"
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
