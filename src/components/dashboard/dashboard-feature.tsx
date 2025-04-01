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
    "526iQ3RL5hUzmHXBoVr98VRJdFFNva5wDvpzcuaA5BavhkEoZncqppbhLrzsQ1fhnRL87ZZXHYpYnaJK5q9UwC1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NvHHtCb8whagykb9cPU9sREn2vwT3ryK5oxwRKDmqv7XGvQbJJixskE4A546JEAKvyasyZeyiVifinRTEP4ruJz",
  "key1": "5m9VjnLkr1VvPcrTPQW7ZyaCkhGrbmbU8QR5uZ5aaJTxMrboTn8SP9t76NEb4EmPiLaoZhXQzDJocTfgJcxgts1d",
  "key2": "EhM2CWsD1s9aBJHkGxU4cxywR5ubNCbNnUa1ZdgKjDKtrKs9GHb8fJEn7XMBv7vxUfc65qqByyHvznHLeaXoFDz",
  "key3": "5sEmLTtYfz2PiZBi3QJnWCLFTXBryPCGhvBJYdpiYDBPB2SswxATMybPC3w1nM2i85EegBGHCWxns1qpvXmfZCXj",
  "key4": "3arA9YUWkXjZkQ5h5tsXPfCVaHJp66cg3YwB3fatoMbXR4ffFAK2622QHtiQmMzQEDaVbZiVUHxEauZySiyXHWnd",
  "key5": "5DpT9sDrYMPpzbrtZDkESyanABwi5a4FYNwfZrAK4Gt9Q43kqJkvbuL5fKEfVhg8hXYeBJk4HsF2wZwMwNxcZaG2",
  "key6": "4ANM76jEq488pq5kWtfHMo94uL3gNASbCPQynBbByaGan4ghQKTWYVnwr1kTNfKjz4bhZKZFu2wquoupDtNkdG4k",
  "key7": "5HMdfFqHyr2RA5zJTidKtXRBeASgTd1JCFXfNpCfcmES6NMopHqfRHM1biAYsLAdGg7WfBvo9or9kyt1uwPYAd7G",
  "key8": "52GGeJfceMAhx2GpfyraHrsUqEQWYrnoHE1zppHeErsxcW2Yepn74ReeWujdPDaxf5huYzea8RvF6MueWD7VjAnY",
  "key9": "5QaqT3tP8gPeGFpQy3tVDZyQuWkfs39EPGuHFUxn6gj5sppThHQMvuieaTtvsAX3nCnae26aXPVFbBQ2Zxg11DMK",
  "key10": "2ZJKnJYLuCyCEzrNcnnjQe7TnhuE4tQJ8CZfenNkWteA4DU1d7euNV5uptw4WjDvPckbUtCejwZveACZH2RVytcr",
  "key11": "2WWCq2JZeBsGbspgEQtwK4mUc2jRMjSNy4w9ZkFCtvP4Mk9UpDG9L7gnnY74DHa1NMXEq61gcD1D7LM34zA4gKKb",
  "key12": "DFyZBMZiyJkubd88q4a9w6ofwTWgATbjUYwhoBUxjJecWKMBEtq3QD4Sos6y6g2QvCxiko7kLn4zTZqZHDV78nJ",
  "key13": "3qf8DVQRF9fhPYv6Ehtjq8KVXK5h5b8uYEcaCWnTJdjPvxDufazooqMHD9RTQfxy9Szaxkwev2WGpDT37JmkeaGT",
  "key14": "4ujfEdCz4m9aYByzqEjS4suvEgerQ4vV4nPnAjQWNaRpL7qXihAEj2inGbrvfDpNUqeeFEEk4LLt5sVyev5KKJ1j",
  "key15": "4PBbEGHdLbYxBQToZkbP6y6bV97KsHRLBiJVYbkMRKPjJ2rUXoDybvxc5wogpSXpjDcgqBjeJxvPZ2JCgpY4GQnZ",
  "key16": "4tMSxGrADZ6J3bkMVwy3vV52qGN16c8cqvTWGujQMF7Zpuf7Uk8AuSCXTb3nYNRfDCrjTq7Vmra94iCFvT88C1yR",
  "key17": "4mJofUFQmoRkJVEPuHdDCQDAHQvUkbZVbYhwHmEW1NJirAvZPWtfsrLUs1UUQYAJftAtPKapDTQZtBaAGQ1Nia8m",
  "key18": "4CEh8XkT49FhdXmsAa8c4DzxcwZxcCRRxoGBxR6NNtrsSG2SX2Rtqujq9WxNoGN3vzLCdVxAzuWi8XA57sF5Fx13",
  "key19": "4DWSSCAH6NkvdjrFrL97pHJzZbsmQyz4Kqei2YSGU9gNRsmKDhF3mFrPUqyKs7PoKCkn2XJ2DfvfAeYYpRvvhpdv",
  "key20": "4RJVzATMy5PvG3Tp4wQYwyoA6rfyUzRMtjGyxfgFaEzpZXc3PRRviLgamguF62cB2hLLGZpMbUenmtpy5bmSvNPY",
  "key21": "4oGqc5SjQ9k1WE3qKPEXhRWYhr6qdh52XfN6oz2fLzZ2KYQXGWyHKfz4XwnrYCd6kFJXQ5nDdr1VUErh8yJ5t6xS",
  "key22": "2Y8Z3d6tujfGFRqb1aGmLATX3zqkt6Tfw9waKy6c4UUPA4uJk2in3Da7tdm8HPKLw75ZrADEVesFQXJ3RFqXqsHb",
  "key23": "MBPzDvmCfmoKX9q7FqLvzNm6CVdCUwYYozLMuxBdqCQkU2oEGAje2LpsJAwJRY1i4dbQ91YhMyvRha1hMrCh3oq",
  "key24": "3XZeCyj6u1jCg79541aKAXEdGBFiCc4BbRX8sz7YM8H3faXt6w5ohVPj8Gh87HucftdAAFGdq3dgAvQLW9SrfEUb",
  "key25": "4ntj3ZJweeBbyU4oDBrYNFzC8r3ivUTZUaoyBQKDrnQcG7Ba9Q5YLvyp3wqzSejqrgRQfEmMdG1ffn2WoZQ6MCVx",
  "key26": "uJzsiAKahvxDWm7bQhBkFWirfNJ79FWcLfSWf4utx9EE3AXCWRKSYXAeqsiNaLPDkjx5QRRt9p4AbFeQ2pWVP9p",
  "key27": "44sQubS81DP8EmtmhkbC3Eu7ehPjjNpa1A5NJh3HUU3K5Di3Cew9SGXkbvw4hE65V44kUuzVuWCCaxQDbFZXM2wd",
  "key28": "2BkgYfwDNkTNMoZuhEkFXU3rfbH8Dif6JqSLufAAYxN7sG8VT7xXG1muSbHtQixf5MzyRCzEduQTae5JTJnwYQ64",
  "key29": "iBJnduTci1z5ym7hMkqwsfSfgcca3XChJPRwmeuBsEZtkymhbwMukNDnDz6a42nUfZ1fPT45QkJS17wfuTaGssj",
  "key30": "Pxc6rY3XkuSofUsKHtAn2Qd9itm1pQDGnJDwWqwZkFJAenQ1dbbv46w7sSH9i5UWDThcQsAowXWqZoXpk6dQhnc",
  "key31": "RNf48RgfZ6Dj5No6vbejAKNKReKHHF56oykEcVw9BC3xEB5UHXwvQz9bFa4ggV4hpD7L2BM8CyE5cJpdFsnLXaf",
  "key32": "2smp2PGcWCTxkMkLdQjCg6gECcivZTRzCMyYFEkwgSqGd4o3j2FoXD6TzCkR9DVEEFmKQ4hoKqDUHqXCfLLQdgFG",
  "key33": "2ZYxv9VakMwxCLmLngYYdFLvxoguzopPHm6Rt6X79KHfyJixeKbASgw64raVfokPeghaxW1KaMXPLxxLqSr7C562",
  "key34": "5bgUt8pnuajXk4WGNEo6cpJyqzXy7jURCAZx4PRGC8ALjhxbu8wxZ25rp411s5VUz5WgJjD4zfwQPTKidMoswDDw",
  "key35": "3fY8X2yYP8ApTZ7fAAKijxibDmW6eJddqeJHasumdwZzaFr9xTVepLZEySHnjP3osSucsNDePXiDg2BUcptFXhLg",
  "key36": "2sySM2aUwnVohvMGY1Q7gQg8pEDeMkQthd5q7BceES8fwRw86R8qAuQqeNPiELtfGFpDtdiPH3Brpuv9xNw7SWLx",
  "key37": "5mpDTbuVCBLVanVorHVjuvJwt76mmRqNd1fsnmByAmfhSKPuZbKaYz8oeAxRx4hStz3xyyJVpnSzE9QqrzFN1P1D",
  "key38": "CjYfV3riDC5jQPui9tWFHQ2yaMqZixZojb17jyeurbsHcrQjiQrFofJ8vq3cS9prPrtpugpyGgKq4gZL89LcpSg",
  "key39": "3pJ9su19Hq3Q4zZwDiLmhPZJo7GTCE56hLreXNmPkPD2LtbFNbyLhCRULkdnPEaNSD6oquAuq1xT5r3ZsskYVaY"
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
