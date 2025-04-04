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
    "3mh9m3wSdwGiyTCNGjmNhmcJPVLqB73dZQfVbtqcnnyCneBDRYFhYFdgdFuLmxnYkeQd3RtDvEHHTroUK1acJqWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WPXi94StceipbRH4rbdnmhmAQ45oPfKkGN6gUHLBBivp8fsg6kLEF4RvdxGCjoCzErrpcVF5jHX1AtJxL1zYsfZ",
  "key1": "5hoSKZTKCNMEV37XxFmsNEAuE9CaPVcv1879VpdLjgskpxhhvKg6y1BqgYsB3QUEEGjq8pz2VEMHkw6iakHoZBhh",
  "key2": "3UfTgujHNtb3RkkXXvokRw3JeAW3GkorTQWsWEkrTncHbNVSGUxCx99U3ir9MfCV2XzqRC2zCQkDED43Y61jTHQx",
  "key3": "PX1x4eL8WHB4DYwFY6DXmC6AszvkrF6TBg1ueJdocMVBXcVw1Yv1gYuGsr6wqEhWRRVKkSpu3xUjZzetkSv7Tb7",
  "key4": "2VHf8KxFXvXbzWhtPyQHGWxMyUQCPaXqBJsXBVfyext7VzNiUxJ77bFjn2PDzQSQ22c4EkWEGLBLt2eYRY3tZhVR",
  "key5": "ZQZcvEJ4ptUtnUNavEgXxdiHH5J8mJ8RvZmqvKeE2jXaAwkeoDeiN2Mpygvve5dUhUSpAfHGa5jgBM9MBBQnwMo",
  "key6": "2FngvEvreoxvF61pX5qGmremSPwjLc1w3YF945rvym7fyad3P9Z8HFEos3qqrU5yNzzKsNxuhwp5JKYWLvXKQBrq",
  "key7": "2bS3SXxxrTH1KPibYo1GWLiHygBQV4veT66KrkfWd7KSJG4QaRU5KkmWxJ7JDEAqQLZxN2aZxuvwdeJM8TwPGjgU",
  "key8": "2ZPbh8h6tyVeXaS39sM5dbgzbYbQfHGKJxazqQUe18yvDm4FruQf5gSQmC4VhgN2m4AyoBE5cJ3zwR1cDBWzdcAe",
  "key9": "4Ax3VdV6ua2BhpQovW88keyo9XJRs1NRdeZA6DMRUBhowntjhx5QzT5pfTKcwm7ktf1sSWU3BUCeNnckLsdzwadb",
  "key10": "gLWsRRjrjHzCMRBFfFS4Z7dGZNnQg9qPLGoDpC4EbLaP5P4KyJMFEMsdNt4qcwZgVgA3kERSbYC2WRY3k1QKgNs",
  "key11": "5Rjnm5KRTPcg9GJLdput7AZYLMwPoVVisk8e6Ux8Y77Gg1QqvUFqHCPDjFpiUX8Ry4tnLQpyjPAmtm5ETURwQiie",
  "key12": "4oxHKwV5oM737tBeGh8zGDq985pXCARLr8SAFfAaXUvAA1upoqPLgHgrYqx2hWqsMuXgTNVSSkzdK4D3FZFZ5KF5",
  "key13": "4pqqbh6sHCwLC7yxg44JAL79K1wMjRnsRXwD4ibTPtC3Nrgok1KUHVsuv22FptfwtoGyUnwqBcaKb2wpVGAj2XzA",
  "key14": "27iNxkKnZmU7DvpXgtE9aCmCoW1XUWS7VLiEcgbbJiX17RqjtVZkHYM7mBZpWAUQDBUczEpjMQ3S3kLknFg45ZSo",
  "key15": "4ouo2r41A5b55cC5HGLJe7EH1qDnDVHuX2pKdgm63aaYa26bmWuUA3cBfgdR7TMTDY3sx67iKWmXkmaZ6hfwA3f6",
  "key16": "V2NZsu53jEYSXdcGaDFtRuhXm95neovGGR72kbaY3KG1G28JnCgq9xzJJNMxT9uRr5rh6DghogAsDv4QTewd3Ue",
  "key17": "4wRt4tzJWAUjG728s53GCarzpJUcUUYz6m6qp4iXuaY5ZiduM9frCtWHFCZ1FVSB7BiphZPPqnWnYJvCpYzuiEP7",
  "key18": "52q7imbQ9PU2wSi2xBSvLhGsHbuBEQ97fiCq4Gk17jmTwoLxy1pNeUrfFeWGbhYf4FeqzqaphmJYgC4j8HaW4p3a",
  "key19": "2jQyY5tmewxT5c7GWNxN4QvTX7CxQauXYDd6EzViYKUpgN2HpDQwUpUsJrdNZZXNAY2Egmquqa5Bf869Msjggn7q",
  "key20": "3WwJMVE1wuAcn3fEz91VcRMRQABVgo4ixM9uzp75tZpESq954VaZWKGTQCHDqS9ten3iFcFvzCdYvawtH3P72CZg",
  "key21": "48HLt8iaMKXHgT2oU37qB1kpxFgSwYzUCZsyMko6Cbpqt7SyqkcfaRjVtd6pkaLLCv5z4TQWhZaaP38VCR6zWQ4b",
  "key22": "4KgAZvgbtw87DmPDG4F29oc2y2HZPEzxjdpwvr3JSxuasNoBrZyMUdX9iGS5BicJAdvn8WtXVmcPzfyVqmHUURHF",
  "key23": "2Tz5E8V31Lowy1imRHeTJLgRBZjfBNyCVnETytor3aSc62JNFjLeWmjyhSGNUzsvq6JB8kWYxfDHcuBYpTa7nCZF",
  "key24": "2km88KoDmkRMUm33NYwCA3DWPb1ueKvQ9f6twZyzEbq7GZty3aoE9QKJJs4FJrEuccFPjGhhgFzua2cfbzZPhFAc",
  "key25": "5MNoB7AeieGXJRXkaqVNaDW1QevdigkDyTMhhkYJFKBUyZFvjpsGa31UfTwJ4ui7BBQQmA3KwFrgsXAU5YpwQZzR",
  "key26": "5oiUrrd9YrEYMtVvSEEWZEQpfyqwzBKZo3teStsXdMy5rdjVE7Ymmgj1Fh7qEVPiqrQuQEQfW2UCpWdtWBYztfiP",
  "key27": "4vxWyhoEjkBTYzZ252gWsG9YHLnDtR5mzRNuxqJTvxw79Na1aQmVjJPxZ7g51a6tsuyJtvvYswve43uHHi69vD5R",
  "key28": "2vJbowjrQt6hSURzDZ15i4NMgckRBm1fSQPazyyRu1pQWYD4DrTC5JVntQK7U6AvXvQ89d8xT9cR4FxwLXzK76su"
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
