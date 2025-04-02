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
    "5zCxQt4rvzpXSBW4HcPrP3EdkvtMajEsroH8nxuKQvuF73jULmkJs59M1d5EWqowXkCEdopesojP7BRzSs2pd1Tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fx4Ub8gFDALCpB5igBEKjnch9FujMWowGfeYd9LNHgNpDwd9EK9TMirF3pZyA1bs7BUoVLhGCDDmPRVn4bL5myh",
  "key1": "5LgwKDaEFtV1RhZvUQNZLq61YucUX5CeyUX7XY3LuArYQLA8wwjNawiBQ4amKZX5soJD1rDuer1eNwnJoWBCP9xf",
  "key2": "2k86aMnwZX4RNeMc12uZ2q7qyXvB9YSJeaSqTGG8p2wBSvBysxusaq3sxdsSFpHYxuQKBuokhuuVDJBojrF4DRSH",
  "key3": "5jcszZdQTqRJrrWSn9pkXqQZAV2mtoGatcPncP57kCYXknXG335kEubULznSMJWFYnmH985URKcZ4ZhC5akMk1C2",
  "key4": "3BScvAxW6ssodnAaqPp9v39rPtQvj1E27JPbPvLMVbQAFjh47TJan3jhc9KoxzxZE2RnkhdfdZoBVtTwMk4u236G",
  "key5": "4iwSmPh47mVLTi4G3JmFZ5R7YkfK3WcULxZnoha3RHxMPqb6hAY2i3T6ZjY6kqvxByHVG2hDzydN77gLuSoX3HS7",
  "key6": "5nz7XsZZVd2LtoVEujWV6kUcE4igUdXeGSR9NHkgZBCd5vweMmY1KhRmzAPWDKG4rcsadr7pgrHUygBYDkA3CjZs",
  "key7": "2mAuvGcdD3pHVYieshUUzV39USFJoK796Ytbc8SwEvd4dB1yDDRAA5K2uVbL99qcH1zSPHKk83fqijdMwJz9eRhR",
  "key8": "27gedwaS4vYAALbggd9j2cAv9t8qU46PuMbpcWeoFRdfksH2GcVMio2ZEXACn8TbDKCyJMp1vnfSSdMXX8qUv2qQ",
  "key9": "5LhXBLRMmt2rmHgNoC4eRdkJgCkaprvRjeoQUA6QoexY3fDYsVvdN8J4Pa25u47R4huZ7ccqJH187tiDxGG5gubK",
  "key10": "2FKr8e1r4zCLEGpbHpv1prtZ54drLjw9Gsg1aZ7d6muLK7bCceiyaiur9EnusQiDoekPYUtqx9TwnBPMDaka7j8x",
  "key11": "38A2E6EMyBqTyEg9chwkxgXqW7WcBKYy5xffWA8jJ2zqEH6GAt34C7sWB2UqcGpxCzVcS4n63FYQZnWWks8urYyG",
  "key12": "2DS23XHLiygiLYJuZBzZQ2zgwNSogxGt5qX7w91XVGo9WMDMN3rL41a6TP922woank2LoxgaHDmh492xTcE8LS56",
  "key13": "4pLaajLwyFfhTeaH92ojQabEUKP7qvTu4hxAgQ7bHeqbaguMtxHW8gmNL2pBExFCfccGP3U7a8DR7HhKUo5bTfvi",
  "key14": "5RftA5RCA2tAXxxA3aXXQBDDfRDsjAXcgE823tKNduFJHMmJUuciQW5iYG1nMdAMKb2jpDYcQwKnziiKEE9fWd42",
  "key15": "3KmtG5Wy8gFpkVMoeo63v5bHY5xPoCxH4PJHk4Sf8gsn22xnpw2jQk99YRR9tTgMrSSDdTN3Jw2pgAqHwrVRzbwc",
  "key16": "5RE5QBfcddM6RC2zc4s2SMwmvNRKGhT2Dtf6p7x4hg1ovxZYAuyTcbrbA5RB8tH3PUr3gqAKPr4EuyrH1m9VvQa6",
  "key17": "5oQVxbKhNSGvRiJ9e3sgKjRWozjgoka59a2yevdccM4mV7WWdqhWuhTRCZ2xK2PZdssnFfBEvRbE8LdoJxf1e8RM",
  "key18": "498DEtHoPKZYSZPztEvy5ud2PqYf5r5uCTzgxGLnv9P2KfL3ChsHLvdPcyduzPA5SePWAC8jkRnQC4vjFP4PMuXm",
  "key19": "3MnXZcyeFK3eX1PPDC35DanBBfckw1yd3P6sQpNnC6efKWp2JCA2jrCJciL96mx1ccuArUaJZJo7DeHAFAWxZA2d",
  "key20": "4wfFqyb2UVmX3amcWxki872wSS592NHocaLFS6BZ8E4ABv1XMdFBkD9QsrewPmfD6i8MVa7v54TFfnhRgMrQ4reM",
  "key21": "meR6ZkKuWr6RxPG4uoDX6EvAa6Y111Ld8nUoBapi1CQDHGTvizok8FFcQB3bvZsgvegc7RhFXMHTMfvFmzcptNk",
  "key22": "5skAFS3712kDspCoNypir7RFidZJAWt656LjG8mcVJYMqs2WRiwuCh4JemsjiTPqkUXAZwXppNsjBkjLj3SSEhGd",
  "key23": "Xdz4WxXHUkLqCtHBsijGNQpq42NBxDF8XKD2QRu9JTnQ8JGYALztjv3VZg5NiALXWqYaexyrQYUgW8vaGSbTtbi",
  "key24": "3nX6yTEpaC5U8uNh62Aoy2ZoChLpk29dUAtDwqzmTbyQtjCNXAtSWSBFXZvsraSCoKcChWfTRgmq3eQmXrshu2By",
  "key25": "417jw2Zadk1DQkPgf75rm3tT5LBDcL36D4RoXcYzZdd6BwvmGhqYNVRSHKBg6n13wDTxTcofKca8dsikTZQtJzoi"
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
