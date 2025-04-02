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
    "5Ej3scjr8496AGoympf6CLJs9yx8r77R2oK3trWJwXcfZPmup1Mh5wPEeQ9274sc2tqdYeXWxEhCgMEsGR82qJ4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrumVjNspK8RqRKpGCCraphukGHvHGgdSABYBsjnXq8tPyfVKSGKpBGF9GPsArmhh5eTdTESdwou62SX9fo2WAe",
  "key1": "3KTgu4GPMs2xQeGNojnyThKnuVpPfZjWC4VLF12PWDEdvgZYfm8tJnhbRfamY2L1kJ8trfFiXxHashMVhJQjYauq",
  "key2": "2t6B4VnxrVuTo6kzNCVrFKS7iSbHZF3T7efRGkBZjJkh1DKeK76MFrEB1nAMf7CHLvVQ7hRnCHtcUFcB3sENtd1D",
  "key3": "5NqWT4sSq1fY1Ap8BKowHJbywDsRZeTkq83TwnbfbH9DhgQ1VJbKoryFZpm7bm7ksTZyjw5kBAANyKzg9qdfbQzz",
  "key4": "5BAVATSa5CK2VKsZAdVe1tVZwGoZKjTL7wjDUS1tdMjoun4bH1pqMXDR8nw9k23KWC3epE7UbxgRcZJDMMKF75hj",
  "key5": "5VMy872sPzr4PaAHTQq1NiiF7h7yHmmMF72U8JU8V9AKAxXmfa6JKu2cEgVaJmgnmBjjPxhu3fdLmFjX2MwHnG4Q",
  "key6": "BV5LV5rd5NrwRCzzPWFUFpK54fJroxQJmxsWNJA9HL8BLihB9C8oKxzV8wG1NN9wKwpK3C3sYff3JVDdEFUTQHe",
  "key7": "5gvDyiAH8qZfCMK3pNi75yHtxSGEzpmLMM5RrgV1j47F8qrypS15MSTunoxGKq3D3UNXGs7XX6GW9NrxpxwMPSW7",
  "key8": "tHuwygWJiwkBiH7yQNFDKa9LwaMoNZqc5cK2bbahzHP7jzz1LUa1712x9psSs82W8LWQjg86uo8Lxghj9jb1qD8",
  "key9": "5GMh7Uiy5FXZxKqhpZRhStpy1kdLZpdZPsSbWSKRJYhQR1XFUVGUo1572faRbQBXBHsUTTPK3piWUXP7x9yqSiaA",
  "key10": "2UkjfTEPdzBjigaAK5EhYvLfebQYoTVUpqc1tzrUpo9kJaUufxieYngqrUsmcvdWLZ2d3GrX6xYCoDHT16TC4aHi",
  "key11": "41PNSKxoEZq9FzKT19NVegVBEPfVXT1CtndXHn2BkggJEN5ZWNVij25knfjbsb47Jy1WCTrkXDrtQfPZTEyZDXBY",
  "key12": "YuicVxBmFyfWARj8zbhutN1LG576pvvEpqqQJc4hnwCf6korJy7ZzRtba4jka6jLgoA7WCZeYPwd8TMu2dnVkXu",
  "key13": "5ZrvEGnZXfMYvuxSxjpDwQGNAHcfmbhgDDf8cCNstLfARHGb7Bg7Saf457A387qUCDFf6Y8p54RZrzFqqrUb1MEu",
  "key14": "4gT7ycAGAzGZRw8arZ7fzh5GCfWwd8GpBkpXWvEcutWMY8aBGvXkzAfVuPF5ZWahSALntTbJicRZ6sTwJEZ8xLLM",
  "key15": "67fG4gPGPVBQtWvpJ15nJUvqYsvXShEGPBaV9h4GeRvcbsvhDTvgapnKnrVrqw2J3u1JbBjUt6CVdVHPfuNVEmky",
  "key16": "wso2TLu5LnnAzXtZucxG38tA5GHBMwKYYjwbuwRC72subBhk3PyaPtFUHo7mTroM1nWGTDBT2MWkAQUwcQa1FaV",
  "key17": "5V8nNw6ZnD3befpqCwL46rZL3T4XvkNuj6FoWZGf4HcHZhEq5hq3YYhNASBKM6SuTWBKLbt2d14cN9sH6zH4EyZJ",
  "key18": "278VjgweonLTV89DJRfAbuMVGj94W5QqP1cTPVExuehQMtVPfuWcuXoEYx7MrU3Q2UJh35o2gTLshZve17oXzZSa",
  "key19": "5taCyjAnf1BmHdftbDtdodW5cYpQc1KSTzLNZ1GmCnBcYHcmbS9H7ezF67nnhRfEUFToCtNZoVKRrAiSe8B5695Z",
  "key20": "5cfXdWfyH6jwr9oXCQs57VauqUWzEVNRrK2N5qbt3FKTVVBauN64rct3b3ZM1DqDQuLQ6ZGdgAxXNKtkDxAbm4FG",
  "key21": "4N8x5ammNMHxyn4AQGm7E46Dzm7fPQEzUZUmMQ5H7cBcmAdsn7Zfq6MPbVo51dTPETKTXoUFWH3aMiaXQf6QPafk",
  "key22": "JrEAwzFpb1rYssricAQvbxuet2Rgts8F5nYjE7AbtPVnmRFGdD9UdDxPuSTk2N83AC4XySoUkkKs6T8KkQzPpHN",
  "key23": "2MBFugtGqa9U2F2Lf56i9bKVAGpNHxgPNTjwQYdiyhb2ad2uE1PX9nySeN9qpdsJRSbrLXfg8KMmzjdgzDYhxeJ9",
  "key24": "3ikSQcHRyWfG1SUt2MF2o2QCrRaezRuoLkhvNXa3Pd15XLPPLdqoAxi6B6pKxTRFjrePxvyPMFNF4XrnKDWjejka",
  "key25": "5jLmJpDUgttAjMETLaJnMqaBnw5mzphjvnDa3PNW4xE38MEeGp3jeGEB2gY2SZc3E9pNKY8TQqtH9zXh3rfGwZzy"
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
