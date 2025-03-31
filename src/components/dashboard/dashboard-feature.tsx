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
    "5psuUf5be6bx2wDoQEH7hu3ktUHbBBv2tb8iHXk46Xcb85BZm25Es8dkx5XTXutM7kDWMaXqyYS9hDLLskonmDhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFeHV5qfjAP71dFNxtsechhwb3rfjRy31HcEr1bs17DBQrPassbkXzpyy1x4iMFeU7S3dP3RTYSjMx2A5CBGWKU",
  "key1": "54mAdVXzcUP4kRwZYHQv7W7mNjrXviP5fomEh4eqxAH2DHybvj43UaKJazpuBRrtJwUX29ELVnz2dBptQqbcmj3d",
  "key2": "4Bsu8gsZn57hFknpwFybb66wwVSQGjUniD6xaT42foHLtjWWu4Wd1Q2aYud7MYhjrQbDFoic9VKvWJiqsJT5p9b4",
  "key3": "5vkk4DvUJPTXAhE7cGYC8DuYpqpLfpnhBpDqCFE9pcBmrydPf9Jrc1bsabKZZq7XNRvjakUwQQeLUnQn1VjwvuYg",
  "key4": "4bunozJGYcugyRz8mDCBsSNzivNqrqyw8xBy5iztiHwLoizzdnGK8GsBvtwPg9vkxTYKrXRBbqySMD9odig3Ygq7",
  "key5": "5c4BvLLtEmRTvge9K6TPu7poMiGWtPNMUk8VuXjcroHwGzyoR12SeSRDw48cjU1wYQ4MMzgiCByXw6oMkdcMmPdb",
  "key6": "2hZri9s3V7LdHGmAx1v72Q1AucA6hmsW7M77XGfF1T3MYwtLUVQ1x2eaTmZfoXSYJjRjwhEdoiVEzgWwvTocjyvR",
  "key7": "Q3apxrPP2a2NoKkPKK1FmyKgVgNDZyyMz6t9DnZnJj44EXmoXVsacMm54Z4o8CGmwHV6tPbzmdre6kfPgahwzyf",
  "key8": "2crZNS9GF5YXsdbxP8rJwn9bgaHCcW15CFpBooZBh8oEDFAMVzxqFcBDWDNYfYkfwv3K9YWHZG51GEkLTG4A37BC",
  "key9": "47SCPHC8BeQCxnNr7CUR1e8VSXpserm4MWX4vyZw6YtMdCR4jijzDDom6ZzdThbSJapMU5HJpcJ74VtHfBCq5Ma8",
  "key10": "2ig9rtx8v3HycqnVPaWJT3TnqK8KzCKpTpMX93f19pgM4bAuE7HaRgTnduhCmCg7tt9Zz4CEEaHvWruddU8SgTF7",
  "key11": "3PTdZEN9gDgEerKBxvyfp2tiiK5n7YsTFLuH6XS2RRdgKmeRT2WFaR7ophLXNNpARNKtc7puQb8kAaKzGCzFvsXt",
  "key12": "2aYNMXrKmjXQWwdUCaFGMzUQfsYBxLamnsvpNicNpenQuZ8zinpticZqBt6DiijKt3vmMq7eA19BBi5F5RFTtF2c",
  "key13": "5eXkr22VZRyp3GyXtTumaahK32pLU9pCnr8aPxHZT7RseBkUqjVXHbctqZB9BAcTB36vaSsKFwspnABaZ8y2UYQL",
  "key14": "5RckjudCnLpow4wtuXHiLgNfUm73khxixSdZhektTM3ypfT6G8gZXSsVPN9qRDptmSyWBE25KUcNBTXVRVrz5VEJ",
  "key15": "C4pDTwr6WjEZtwCZojyekzsq5hdSho4m5QC8qt1zZPtSDNSrXb11thpea1a39UoqLQxDHPfS77Yqrb7jhEXE1TH",
  "key16": "YkxfNAtfaFpLQmeKAVz992Wcj8wEQXXphp7E3cHghbsQKpmjcWE92WyuWUgDhMcoLftA2LzYcj7wJUyFK7WR1yh",
  "key17": "51Zbm4wjBw2AUjZMttjsDYgWt6h2sEgPyjKSxvZJfQnTpugmh2UkBKWjRmafMNvBjLyVD7UDzHVugqq2mt3T9j2K",
  "key18": "4xV3ELr8uv2HnZpUbz4XBnKebkgP8ZrhDEq6jrndYUc4onax8Uk2HAKUXjo3gKxzoQshkVdGutsrzQmAV7Lhjc6E",
  "key19": "5mZxqeKmxDSf1Z2ZDJb8s7mhXZBczV4c61JrfNyCbNjq8oy8RbvepAE4yVKJ2i7utZFF3jHE9vTzz71tFKRDB1vK",
  "key20": "2jfzPdwHADnmmWSSnCzNz2sxk6bdsk3RicBTz3YfWvZdXDyADmf53Q3xdmgvMDCPrzVtTr59maJV995o3oL85Nzx",
  "key21": "4SnfoAVCf5U8xGwZ4PfVKHFYkXsKphWt9cKxakwj3uKeJHPPGFGPPGaKJFYzYjk21KjPHY8629fTDxXVNfhhc8qJ",
  "key22": "2GohkfjT2xYwQEEF2J3N61oE9FYWH8WFujD9hz27A3LjJfTKT1ZDhoSff8ZtAygrVuPVN1nFCS6hRv5wjkQZ2Ejo",
  "key23": "bVMg4aSUqMoT9m97sKpxDbaLdtipkjkwCw9M3MXsdYgrNqPJLjvexjCtH1KPgQ2gPsfqHS4F64HtmA88yB7S1Px",
  "key24": "nH9Cq7JAKFcUCq3byGHyQ2tgSpe1FW83s3Q5nxGyGvDgQsWZdgkFRLM7dnZv2gB7ryMJbrRPjZo9dBwhRr2NHfp",
  "key25": "4feyEyXgCMcYDBRAPXuVLe9y6nC6YCwhZSiZRbyYePurq84yGGrTxs8JZ9ZKZmBCAJ4faAZd41Gc2FtJHJidvWhj",
  "key26": "aNA2GFXSBJyCq6LMZWrKyN6vxJv8FgorQKyhzs8dJKDdNbDtZv2TSFBMeQdcHxMjL82sA95dpmngANLXFgkRqub"
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
