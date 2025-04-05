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
    "24UbhZB3VaeqU53jv2z6BRNLFvi84f5p79LJRfMvnFQiMQdnKbYgxymWJu9rmZ4ZugGEUzXw2asAjoPzJ3hAPFyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EVtn3hgX4UBha2bBEuAM6gdihqnCubwLbwFJF41SqiXAmyroFgVKD9RRwxMjRosSoVkvb8b7b3bZU1H8HZmUFwC",
  "key1": "4UuNaoaxCpb2LA9DTDiJwyGCzCFSpjo35eEF7aYTrgaZbhVUMQyRhokm4nqfCMfnttBpnvt7emR1y2zgsLRp2xsE",
  "key2": "5CTCUqtQLFQuK6KU8UfvFc5iCYdPUUr25w9YjfnHjbnfb7B9RcF7h8e3utawthmTWEdyJfAEKLaqSTXhRfBHWgHv",
  "key3": "MrNiqZde6zkzWv31esLzuo9MfqVPN8n6FNrWACaAWeTHbQ4dBxbZWNpWRS723D552hqzKQmDDPG5usnGmE8SWRs",
  "key4": "2WtLDJ4mZrs5Zctyxynn2Tk5MQQro6in4SjaQC2yBzxCmzJYPr8RNz8izAARR51RaASEKLqKDbmvWnw419iGKWXz",
  "key5": "5c1twjncjGbcYqbf6UexHHi13Jo8ZVdi6oDe3TwiXCDkn86eApJryPEub3uJmqZJ2yK8FgxjtNDARGiQbahDBHxC",
  "key6": "5rtXfpnxMAtVk6c9NAveZYutWofXvdqzcc7cTvDxfDx3h7CDj3pF7NnuZnk866L2np1E5WDSRrvuZvmyeonZEM6f",
  "key7": "DqgPnPiaGkNSb2Zghrd7YxBKbfKUrTdnioQZr59jhQkvMx5csL11FCC2EpwYf5UFizJs9uCy6UqGjgaqK7cBC5V",
  "key8": "4FVhfTk6eWHdRYkgLW8SkY1TGo5apKuPKgXkUFStMwjiUoT5yBBDPA1wQD7dNDmiEAG27VdEADqTJh11ng2srn1u",
  "key9": "3bAZU3v4B1Xemr5uhVu9RL16DjVABQzAEyKS4fmWWc58DJ28L2yyTguUWubddmebmebMTFx3DXW92utUGRJeQ6QA",
  "key10": "3t4nogdcHH53KLVaudn1H9xbv2K3sKvVamKSP8ng8frZBsKsZ4jd67i7hCTYYw572LoAKX4u3UK6F8pvVzGVefX4",
  "key11": "r7ZyYYsxG5iCtKDshX63DGYc2MYMnMtSNgvCBkv5gs6QoFvqx6rdyJqKNUwRVe3uuXDLJvAseXhBGs1TATSJ5Go",
  "key12": "3eieBRtr6KchHphCMCgqy288Fzx1gugamrZXQSijQLaXRmfGdRJfkjQCBdc2MqjJKPEByUNL3LXmErDbijvj7GFH",
  "key13": "2TmKmjVae1pewBPSpX7A99AJuQ5fhzWPsg9hbpiv4K5g8kHUUkwRSHKNNqXi7bYMsKjPW93qTggQeetyzWCKFL69",
  "key14": "49DTnLvsgfS3Qnx2j84rS3bxbr7TQ1Lk7bWWUgqvyf5RTyCz9CHdKYN18AWL3ioGCPKSPzfRpnx71U33RZs4NBAZ",
  "key15": "4bviARk8zqZ2vNAZsXTwU9fCcX7uGUk7Yo9sjHVoNfJR6S6L4TfmFnsPMxocZycNwCYb1B7w5s3XQ29Z2YvtVkQL",
  "key16": "5Bs6iJNX5XWqJ9XWeJnBPuB2d3ZCz68yZQFxYbM9cgxcR6VwMQGNn9bqnf9FawYkmAC4iuXt4USWNXniK2Gwjszx",
  "key17": "3u5N8WiMe6FWUoPAwQL3rn9GvpZE63urwN1rJogZiH1EbgtPgodV3GzrBZ4fpJH1HuMtqAET4RdQJSDZnGpbhefC",
  "key18": "FPGnxb9g8KMLBG5B4HHZU5i4dvaFRbqNZhfBEUQtWfqEx11B7YwGPvx9FE56siDLMKc5M969qAyC6F4AndxgBkp",
  "key19": "FnT5z5wzeYzfxHiu4wGftQ6MeYy52XajGhSgDpim4kNsQe9KiK5kDyw7Q2pB8Zp48xhetLFtfTpNmNjvJrUinAN",
  "key20": "2UAAp22mvU4iGRsAkiXa2rwGXeBsus2ci5yHgALt9cRKX3Zm6a4hsEijP9MfGRwEQj2VcsKgkdJ1jgxN7TMTsTLz",
  "key21": "2o82qJzRAGEHsWG9X6p4v782LHvSZTD4mhmmLZpReCzWpFsrZbz5KmPNggTxJp3bTqShXCTHZ7cng31RZ2G82ipB",
  "key22": "5V4SFNU6t845AyAXTxJysF5D75kcQuug9ZkZrHJJdh6NoBJzVnP1dgtfkiLQLv8WYwec9fDe92pksff2QWeNiT56",
  "key23": "66zzL958Za1wetnDGYGuooocCaNNjrsNRA7F9MLfwBSvVdboMYohi8U2hTWJpSqC3rHJHbcCyvdkodELaJCSQTPW",
  "key24": "2o2BEnZ9wLz1GWYpr4BGkdYbJhHig7VGc9X8sJhcASDMkHKPVVKkPXKK8wB5uJC9D7HxrrzELGc3FD32s3wmFyyw",
  "key25": "2AE2PUs77SsGq5wGX3xtcaCaxejVKLG6nMFXrssYNS5FWkfHR9quVkDhaKyVFCAizApjkcmVcxkZxJ6Lf8U5DzPj",
  "key26": "5PXNAp5xsBiHVGkTuxYHd54AcPNhWi6fvjkM6qkQ3katHJuPdJe6GGu8M8ghsNrKtyQju7Cx2LnTMP7Tz1y1KGCQ",
  "key27": "t1DubLpYn4gd37P5DJUsitMJhxjBcNtWrf7sWWVoGw34gbFBSCKTpXktGLmfaqB6CawQQGkj5HKTfMrg7VJj5Bn",
  "key28": "U9gByYrY9WfASVzTzJP9aiKXFDBEKXmPCUQ81XwiQoehM81JxBofoKysjrH2HQiSj52PnRRHCNJMh6qUd7DmUcf",
  "key29": "4oKw5ft3gq3GVvwiYxtxhbcqYfQZpuSBPSnDRsmAtenLdwuNLh6fjwRnAzkVrcT3hmqixrQP3hZJyMZzNThfDL1F",
  "key30": "GNYP6SRvYr1NKdpsMBjCPoLWf3QtdiazhUNpFZi4uzpBQrYRKYRU85WmCzbzA7M5htJ1C71QR7mSEQWWuQaEVa8",
  "key31": "6gyP1RbZ4Lgf6TVAHG1tcjgx1Bb2e3vL14Z9MgBRs5GerqphG6QEz9S1NcjErk3m9jtL6TNM12tpAoWDVoJPB34",
  "key32": "5TResXQGoJj3dwFwsu7ki4Tf2VT9DfpHhy2gFFErkc3ULKxodgvAg83ncjj6WQpZA2z7wA1VaQjMfzFxTvpVd5J6"
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
