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
    "3MZBUVisuCcZguhqyxZL1u5MYo7coDkLYWjFDmv1GPCjqz48AASNW3nZjFYwXdVMrqX4YgFBsiuEetyZPoWU9dPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Jrm4avWwXoYtJ6VJFr4C3he8Q5Ft77Y8vFjbMjEx49TkPnz481d9EkyScv9pFPHsuni1pQDSkRFHVeSnuv2PNG",
  "key1": "3ztoASdrSvz6zWFSBKSuQ9G1UExiiZfxDY5M9e5ibs5E6fmbZeFFjp6scWyGtqg5R4myphavq1yB8xtsPyfDNHGv",
  "key2": "47hzHj3eiRvZW5wUWbMhpFhFwU81enhKNJhTwWDgyn8ZpYN9crJPjhs5wje5wFXuLvKRXy8wDrQrRT892JFsf22u",
  "key3": "443vubBSMJCgLcSgjRBY2s1CQA8FapNL4Vhy9wtMMUimrL5iMUdih2gZvNzVDhQpU1qCW29FAEowytZAKgnRu9oe",
  "key4": "5fXZktWm5F2RN1f3twNaZPvGKGefWLeSppNZ7LvR24taR1M77LxTcmTnZH2ApGDa61UWMp1iajjBGh4pAuLNwCau",
  "key5": "52sDuAx5oDoKbzVXTb9HHu49M52rmDYBM3aRXM8y5xae536awe54fr1S47vFnvnNnpbvGT9CSw343fEWHuhYqynF",
  "key6": "4XM5ZLcdoPrXYNj1dcFcJvaRNgyBvmuHd3k9jVfoXHYt2S9p58PxyGxwkqrkrFm6JxSNXiMgHM7gbZ4eoQURKbsh",
  "key7": "3Wx2DjSfeQgMRpgn9Psv7FFxYwBWP1H1AvyDBF3qwFoQhY92mCySZt4kAQyXNzG6AXVF3XYTcwGtaJW5RfDM3xSh",
  "key8": "2Tpu3vQTkPgPUY3Dp2ybrteDPYxkrsZLc3Ni5HMqkxzDgyTiW9uRHVWyB6Bc72ctbhhmc3hCn4rfd9gu8HGhgKvQ",
  "key9": "2sTKeNvwifPoj3zSTrTaTb5CDcFeUBhZVxWsstPjVLpUHp8sdervGDfWeAgaQShi22tmwBAMJyK5YQBGpKniAi9e",
  "key10": "3YpsFfbKKPAm33pZYS2fV2SqWpd3VrLar7eyRY2ZsN62AJ8Hm8kTAHMoR3rdXzSZpf61rBdwFYj2rRfDVLVfKiBn",
  "key11": "RP3iAZ5tJQ8QyPwwB93ai1MQhPSfMycVevoauzvvTVZk3SRC2eVcarvDb7C3cMLo8a2MvS6puULwtLVQAj13Rhe",
  "key12": "mAdkB2kuWWGDokfqZG1NW5DVE3cCjVt5bSueJ4s8aPUHapjrUkSVHC8HyhujUXsfztDk5VLnJfBSgSLMEdpRUer",
  "key13": "sP468yq9K8XxJdQR5ZXjzzEbRjXSecdi4wfcUfLWYyCGYuXW6F79j62fiPpyw5tMT7yK9RqKNoEBty1FJMeuiid",
  "key14": "5pCiXMn1tyPHYBjfh6jzYdWMnVbtnMJyJKmzYxNKHq8SoGWCUZn3U54w6XierFrtdfAsPiaZkYTpcra2kPhhhnQU",
  "key15": "2wDUAiFHtf2w5PdG3RqpsShhMJFzxNJEN3ieFWB2PA2u1PkpBiRyrxALfBxXdbns8NtTjD5CoVq4yJA2iGXW4vk9",
  "key16": "26LJFUYHvg4je4G84vJMzRnN8NWS54jioJHLbukFDwh2B42VUgr6HWp1Vhi2jfsmXSn2a8meursEdysE6WCeBjCP",
  "key17": "56Mi4w5zMs8uK39QH2MBpgkvujuUkN92NLJfBo8FvBd8TD9MhWLx4BMy5oLKvRqctNvtP7GcLdJUar7bbd5wB3sP",
  "key18": "4SbXeE9vCNz6KLoc3XqH5MjNr9W2HqtJoZTkUmY7zb3Fq5JoMGnrsB8pq7JyALbFjy8Gp8a2JpoQN5TjNCVAkz1q",
  "key19": "42AeU8R3FaUYTu9ofdwmysGp75p2Ke6Rrmzksaew5axjxsddGJhvRs8CYoAWSNCRNcL5jE6DPdqobbQfeZztp1b5",
  "key20": "4GfoRPYRnn7t3vACVEfqUWFSJhMs8zs2p6YDXbeq5ba1dAh7U6bKTVFkZHRtB9DfuV1Z28DfM4Ej6uZa8bPnzymr",
  "key21": "BQp58MoTiqJefRp7ncMZYLnydt3pP774fxEzT8QREZ5k7tsU3xVhVZShvNfk2ZeqvYqyToEojYhK6uobz4xxqEC",
  "key22": "4gxVqFXwc1idxvDVpkATZ4AifbUnwEJTwy7C8eMBPsVFhyGxe5ht383mjrbxeWZ3uKZSuh1rmc87yeiXvqdPG6HL",
  "key23": "5rMN8QCGXJhi1G8g5QjxAKUbKZpKQZHTEmc78fGxrDxLr3TyuvbCo9ewZbtEHvdQCxe8mswWSy2mGye9V6H97A75",
  "key24": "2ffFRKLVo62AbeAaiEk5XMekrhbPWsaKda3vsxc1HuLBNnkQoH8bgnjQs4U5QXy4z28bwdfJQvYKUBNFiqjZPo4Z",
  "key25": "6LfLWTZ67gjxuc3DH31cVcSedpsdDqweandBfzUpr4Kdx2Nfup53cLu82aTrikhVTQ2tEDMapzxp9bH7k2J2rsT",
  "key26": "UQdyQ34KrMY9dEVAFAFxEACa81TL4jzua1gjnwYbuqkcpKtqXANzEULJyN3cvTTLK6nZWyXyDMLUPBcqD8iEpqH",
  "key27": "3zK9SiVD7vXHUSYM3kmx3pREF75xzfLy8R78JCCzKj2w5EGjgTwpcB6L1dVadDYj1E3m4SjDsmQDkYASbovL5Tkq",
  "key28": "2ej2pgUncWTdHLrpJ78JjgrBoREkshkbAqFCysNd5hDVtcuLauQChvnQCX4Yr8cr45GxAPbWHm8cCvemjqsWYvrk"
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
