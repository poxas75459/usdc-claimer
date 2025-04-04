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
    "3Nde8voiZcxnVDXttY2hKBUet87oWwGK6czUpjuC6RCpwBmtfSm1WnLjsXh1wTxQSUMd3GTtZJoaMd3KsG5t6bKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y6nDckbJjedEcNEhgYzSJJ3HQBuNxWkaiEkhHnNvL3qAnduZiy5TaijJiA6Q5KV6mBeus7FzNXjTWir88eGNeU4",
  "key1": "btVncrStG86AMjPAcd42QDZbMXKxKLz3ZB8jcaxab264dVcyReZwggwqsi733CfDcTWQfMyvwV8WKaYpmHacHoD",
  "key2": "5PSWjfTKjXkHG7xrCJP7BhEoQacxXckUe9y83qmp1tWSG92AQ8kgASQxrHfwhbNjhPWs7wzB1coGCe9SBYvGJVFS",
  "key3": "zqHTLWdT6K32A71oZ7zMTwaGCPAdfRnPyMr9yVsebA9KzeL47TugENQAZ2eq6Nhz9FnCuTEJbzvZT3h5xfJJPrp",
  "key4": "25uW9D1xTxUC4LobtgNC3Gc9QxtQwGQPmvKbsYgxV66vXLjBeFo33BSAJTz8DTM9zYua2HZjtEvRoqit5rGyY3E7",
  "key5": "4nJJ9nvC6JSFJ17MM3CP5tftoQ4GR1dWM3fxwUzSSupZjRmYsF7CpUMU91kn3zWWaSr73zCyWPSUHpwsfYTMprNP",
  "key6": "3NCeUumsdwt4yDgpJXFNHy2QoEMUnttUHA8pZkrAFBJDzaj56rcJXM83WMo4tf2h11FCznL1NKoGjm65Czjbneij",
  "key7": "5wNFUdUWRxHVQsCBnJiBR99kPiPgy2pqABWkA9DtzkVfbVPkosVfM3Qr9LyaaCvg1fVurfT8ghxzDi2ABXTMPyqH",
  "key8": "5KonM8VG1V9G6xAxSsVHQQGQNbd4wc4VGoFhxXkctxZ7n6CWPSNbXweLTwg1qNfyGBpyJG3g7BbHKoEHybyTyL7v",
  "key9": "5GHAaCDFNvpPBa6GZkpn85f7shSWZ3ho9vE7aTfoVepuCMvbn4ZmmKBmvAwi5uqg7nAugMLfUL7d7UBSiKoA4ntM",
  "key10": "5E8BH24Gb8UKMLPpRnjtbYAYzWMonefS7e21hFfBBSR8Spo29A1y2Vh6muUaSrgyspi3R4vHMk3d6V99eB9EvQuV",
  "key11": "44h7JV8nPkBY95n2Rz8VY26ViafcZoY6Rfuue6WGx92AHWgSgPP9NMq2ksuETZKhHfBxLCEabHFVor5pPHaqCvWS",
  "key12": "59BjKER1EQxMUqAuSTGpaGgmrFb5ubyCHwV3eMXX3C9mQY5def92T1te1LoN61QWpujuLdAbFokLxF6kudsbv2aJ",
  "key13": "5p4nwPPs59Tyr7UjHE4iiD2eS616DKrT6hEwKd1Uh1JAPkdhFFhhka86mq247HvzetN7tANteoSx2RQv7v1rXgE7",
  "key14": "5rjdSTj9x9fvoWGpoc3paGq313VrZ35phWWrToU8a3JmETuExKHWVgFE9oucXGPxMjciLT6WoWTd2ocmfts4UTks",
  "key15": "3cy5sisR2jmL6BwrZZiAi3jaxcXRNWcVsLDRcEwUAfevtntWfEbreujTSzudFDawpsxFVvnKraAGuhWf6ory5JA5",
  "key16": "wgwpFkeXcoKTx6M1uVX5Qo57bL5AVwibBXzcuQgdnSNv2p5cJY4rkAtUUH2yxMfYiYd9iDE4LihiG94zXoK62EY",
  "key17": "3t1PgsxWB5K4v9HcgCenyF1br5Up4wZDB6pXtfGRpycVDiQwju6dB8YoydtTf2TeovknWrYyUELWymWieyM8Vpq4",
  "key18": "5kdgRwrMKhNwCTVzLiG2VfuqqzYyxfSZiyfStZhLVhLiJAUcQphABtmPnZ1BWLMHcftSh9bq1tLiN1Z4b1L2NJBw",
  "key19": "3u7JLqmcQ8kjfZa8utqcZxeTzh7WwgPAtJ6pmpMq8bphBhhtLF58eEE5zU9jAuQ5HkFzvvuezEALyXfQ6cUYKc8J",
  "key20": "3rVFDiNzT8x1AU6RtUbx3KAi2jhhnZsdhGLFFYFgCqQF6KCGo1pkYVMqeLDqSHBf1bBXRwrNMSNjCSoCjy1pimCn",
  "key21": "2ry25akjASLfYYhjK2vvVDmTVPT8oPTTVXBeBNSrd6XDGEwvWUEBjm5fnsXAsyBAWR7qbCmYaAvj5vGv7t9R2B42",
  "key22": "32zDUmi933uVPuVPUjHiWYTEFhdARePczfsAxLVCgLfMbWVhwN7i6gsfoA6aDnzBQUqXcRGprPenRVqxk8GNBheA",
  "key23": "24toot1kzioHZvKuRuzq4XGyiQC63AijfjrgcdYvUzEcRDGiAqfZrm1v8cpbytjWzu3ue1wXNNkQ7N2r8SZH4xok",
  "key24": "3q5r7g75WFarcsL8HyGz193taGreBRZFbAiRtFEg1EJv9TY2LWYgvA934zv2P5FXPpdGZqcvGynWLbjAzk2wRETH",
  "key25": "vptWofPZhCXEbVAbMsTtyCtiHsPcBZmQmpTX5KyxRz3kGDenMF7FgDnqmaY3Qvike6Gy9tkHYifsTyY5Q8Ws2vi",
  "key26": "3bqNfu2vgUAYv1bTw9MYeD9xoZnq4GYUpdoUYuS2D1ko2BPsyy45J5Q1drSTjrfa8voDQJ6FjzhDzKA7R1vf5Nho",
  "key27": "5oLMpWT7pvamXBjq4QzdN6Rz3jje7QoZCiYYRUfzNfEonudUZFECEoKWdXSkvMwoCyeZN67kyaDp3hedGo5Qxu9A"
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
