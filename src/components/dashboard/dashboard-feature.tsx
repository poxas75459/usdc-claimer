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
    "4BicAZYugAGFKm6iQvQQ57mw52wYWocTCjuE7KSjfqRGJsQtABdzMBgsFPTwPxbtrRhSqwbYNJqyjvdLsu6wk7yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swPo6AfwEiLhTEcswHiZR2SDmZJSwu63h6d4bpDmKLTMhuW1vjzBLrsRu95djHdcquAdzwYjG34HhXGspJAZ2fH",
  "key1": "2kSATBSdKEocHBUJDA3Nc3BUnNyVPiENER276yR7vF9qhHdN14e7D3GnbqBtaxC4qLP16FN6SZ2VJtpErdFLEbpe",
  "key2": "5eBZktPpQBvBRYDyTTAaF3sgEVqZwPh7HvZhgSGMfLbbtTwgHeptGdk5wMpvNUsE3dYo57EftV9eYWRqgiq45RSt",
  "key3": "3xsk4tPNWrxPFFMUoAC1yN1ntDRpV5o9FnA6jLCbfv75cjPKeLwCxqw8CnFqPQ9j4pEVduoGyPwaPpfZbT9Dv7c4",
  "key4": "B8sMkaY2FJCsrVeG2jPQ3VMFVpW1iWKSD2S6MxXzLxFGPJh3p1iyMD7Zb4seZ3suExRiEEF3a7ARnCXpJDH7YwR",
  "key5": "3xeBSfXBz4nDzSxYP486NWytUNNz2gMkYbHKp6uqAXyhLLs4ucMC5RfEisu36WdHBJRXH1pnN7uk3cZ7uGdoiLk7",
  "key6": "zLygfthdYuUfU4WXHfsHoSSYTPdqSUBDVwvjqwLHVSLDhDdS9pGbMec2nneMDcSRZtUiTjQdBLb53iStL2hVi5D",
  "key7": "3Gh5bLxL1E36jYkFG7h5mKVibfJEEPZu7eWdeMXugnHnvhK7VwYAGsm58gMd3prGpS3oqPu34sC9btuVJ9kHMtmF",
  "key8": "3ZdMeWtjShtZmhhgWwWU5GhCkKotBVYB6csEaRV7Pzu7RhE9uizWR2uXVVipcZZhUyLWknix3gUnpeLeBG7m3QzB",
  "key9": "4er5mm9jgKeQRTC27jz9WchnEgb8kTjLrqZmjKhnEhsWXxuWXfG8DPmJwXFFcoxhfSPtLnADL8QdmipSFSqSBDU5",
  "key10": "4D8suuoLTogoFhBYQq8hCkcMrhVNgZSk7P1fHRb9pSQDPcoVuef1Z8z13gYJCnn7iwaBmJiyU1BUB4BakCYcpTpu",
  "key11": "4NKV8gX9q5W57mG7MgvGqCPbgRMYZKYAChohz6jCbo4Yh1Y41HqSW7U9xoXhdbYds1CNU4JHMGscQhCBXxMsFMxP",
  "key12": "4MrQpk4Urpc1X41wGHM5Ga2eetgbsML2cvcAVFqEd9ZzPoYrpmQDeCjSa4U99Kmgwza1ziPsU1QHXZiEJQE2fS5c",
  "key13": "2nY8fPjES4y87JgY8J4jAERMouRndsqsEkimu7Nbktg9QGC25dqn4YT3gYZtb43Ej5AVDE4RUfALoCrS3E11rp5p",
  "key14": "5m1GQayqq1KTFG23k2s7o3pcvChw6p2MHwoqPGrpCAwd5FQyXj41tg4BAcXFAY4CALF9aRiGc9ZupzbbDPHvKVW6",
  "key15": "4LzgvSaXqV8J5QBbVZCJGsdnVxfF9UDnn1ipcosNrQE1jHuTLvhf7f1BfN9FLPuTSHbAVmEQhb4UR5dfvRZqBSK5",
  "key16": "kNodpuVqRWuBvN5FAbCFeJnAr5kHrDYfGwzbSmBcpJXHFtm7pEdkNdrFYAApcisDhkUUeKZsbGU6RQufrTe9tYX",
  "key17": "31NvKWGepxMR8HaJmZAKbHh7RbhUBA7Y9q2ypk26b8wXVRKFFwx6SfLZccDUNLVNVWhnDXciA3mmrKz5vYpTtzZt",
  "key18": "3YcQg7PPwHPkSAowoD3a7CrQNQvD9RMYcvbG6HWQ9XPXAKWijmB3Ch5dMCyAVvdaHVXopUN89S4t5DceXs1ZyQUe",
  "key19": "3u9jPeQjSZfjDy1UqoqKm2ZAwabyuW9V1pCNNiZxKRPwHCSYyzUi4G56mErkMhBaorZAhoWCrWayQp43bwTYSaiP",
  "key20": "4vdrYcGni2ubLy8zxZyRCF9aAet9Ai4URNEnG3igWP5A2ad1EVqHumYBo4t9xwjccLqoHnN4KTwg8ixjVMg34CLD",
  "key21": "3kL7ZFcpUvsPDbE1FF3zmESu5Ba2Koqp2RGqW7PtUQYk3eQD7uzqXMErMpduh2bqNUcPLANDrwsHAs6eCfPgMrjW",
  "key22": "5hY9oaUBA9eiaN15VxBBtrjmnuxATdxVPKxNR6GKgCjTivvMdzkYjTUPhuhdTwR3zH25atAmEBh1LvMWPfaFzUeH",
  "key23": "2x1bZjYjuaC945yFc44RnPP25RKpCSpXi2yNZWfYrBmChazbRG85sGrTzp43zC1DssdBw1rV2xVXkqo318YLtJJf",
  "key24": "2jrBae3M3avns7daBmtKntsUQw8RS3YNQ4SUtbHjK6XSayk8r3Rzt499QhMw3RaMVptCtZkxGJWU5crnM2hG2SYo"
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
