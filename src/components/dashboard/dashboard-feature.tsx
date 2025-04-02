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
    "2ARMftq4x5zoAknUrXXNxJwMzawkkuHA3uM3cFeVixbMKSSJaoUdYDCp4dP3zqwCLtjA2uyAz4T5oxUiAdF7J3xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rX1xoTaRViCo78tKMWt6RQRZxStF4h2ddpZV8EDEt4aTqXzt1po6kKECLPcWPi9iAAwwuKEUhFQz6ctF7nt5uiE",
  "key1": "4WfVZafwAJyQytD5KSRJSWXa1Vq1YGTmtV8ptw4oZ3Mv13L1iXULCa9ZnQUCfGDEFfSe5YMyddxSVTriAbqbDyce",
  "key2": "23SESFPZtLXMf68sQzLQVAJYkcxqPqRDvQhwPdbeSui82ubMGiZJAgz6VNtTDsR4DwHfC3xazXPry4MQf9ZgepWw",
  "key3": "qRfyKsDJgGZtv9AyiXHsKGN9jRmVLqTWMdGfgZKjM4AWjm19NfZHSgvydZ62rW2a4rcSECS3YgASdmVoccru2oR",
  "key4": "A2YmqJPs3cxhKpzThzrXQWTDCYBgY9VwQhdrPtmGt7Kk7gwtCH2gt8SKYow589hN13fXyMXs9pF4cNk7HrQsLFi",
  "key5": "3FHXFroGfN4Ux5o8jivQ6F1QUnS38NAoq2N1tZAiopAathG3aNZgJ3R2pmqYcr1VtWzJyigWQDhHHSovVGNgUxyG",
  "key6": "4A3KwnKTr1YGMyVAY1QTQsZWdgJEEDW3BraqGcny7N9uDrVuqWUE9DJAQpu2QhLGxXAoDyTc4Yu23JePHEgNgPPX",
  "key7": "sY9b4kymspq9SmmjpsSm1MehjdPywLjQHaMzE51LzRanSuPrzzae8GtDh9HfPyW4cKs1QhrPBKVhTaDgK7Pop93",
  "key8": "X4i6YdW6LXsYTSJAYjsVjAd1SL9WFaPaYMxEHVhY6PFkQeew48deqzY7DvHkPuvECbNx23ckxc19gLdH3PLGFDj",
  "key9": "4A1Acg5J17oSTBVU5kML92DbFFkdiPiT3UeELYbdVXmASX8sMhoDAG3N1r3AHprnt9nRj7qENHWPEDWujSud9D8H",
  "key10": "4p2omwhBtXas5Rj1nndbDWeX5vr55K7xXMQ3ptheh3sx9kosxMJ7336WkP6U4CuqTsyZHgowkKp4aLNRLxwN7xFQ",
  "key11": "48WwinZ687qxz9iPPBBnrc1Z96QjbFKqoxQ1mLRAywo7pRRgUWvWyQJRVVcSc6tNXM1WX6m5e32CpQ8KkAvkD5fy",
  "key12": "48eNdoENs6yBL3GUPZ8VPw9SYa8X8mVmQvQYE4pgccZ37GhobsJm6qKvFMK7KB77L6CkxMTvmckfahVKjLyt8BF1",
  "key13": "dex1pZwVKa7HBFxuUPAzf2qy4fRXsYN8VZnVksYGBKa28TWrhuKjCfsNdkBmzYnXd9SqsC1gN9ZqCChpcyU7bKN",
  "key14": "3mHek3je1X9Yt3ATAWCP34rxBQqpDeYHf4aspwtUdqyJ1AhtmL2jMzRpgXP3os9QC1VQZ3mAeMM1NZGeQEG7cYz7",
  "key15": "46FumutMUCsEk8nyno3785MmEVnpmavssAEAUjdaxkJNqA93XgQBUwPYGMeWumxQYL1nt49cerD1YZfSp6NSTGmC",
  "key16": "2brBtmxh6ujwHBBJPPUU2cKzszb8NhpNQ5BDjbrFdr2RpyTJ2g5qAF6xvtx6b5S13JDWaxqrPb4NW6teBnH99qfu",
  "key17": "5VtyVUJLZ9FJYdrWmVM1PbUfkr3pSbd7fLG5UJYUNi15wk7QBwhkUL4eS5UHF24PoipcUazajg5qqUkf3agKCXJ8",
  "key18": "25xQqJxq1Mm8szuNu6VpSS5VfipUbp2rDua84FEp5AyGYdGbMSTfMwQ7wZPNMufTWxo7or4BAVLLu5tBQdSgJyvv",
  "key19": "8AxL6cnYXQ7VB84fVHwJmaniUK7bWnia45WKE3h8hztF1Zykh69D6Y9T16wHqjMDtBp2UT5xCBcZNYfmdsJPRiY",
  "key20": "C3hYUBzq6rVbQ5FaPs4r8avJLYbNqwk6U46T8Df5LNYu2XdK5wHdqXvRg3cuEWTexc3RiB7RsLpkfGuGaDh5NgK",
  "key21": "4k3KgAgM7yVD96io5AYsm6L4uTT7dsP78o2hdY8iQNDeWPeGoWT4GWwerUtd2H1FjVUNAqJxSSKf1iMLy2sixJpz",
  "key22": "ErKpo7s1U7KMUgA4fV3otpkSBCbDbpPaf47LvGEnzWFDJBpi3j17dxA5uc7ti2FeK2NmmfR9ohP95CfAQ4uzqTf",
  "key23": "2dawjZC16broKMGGy7LLg7e634jUJb2oqmHFj6ue3HFFpXMGaZkjMd9SmiWTQBfjPEEpKfdkMSLRQzEzM23TbLgK",
  "key24": "3Za68LM7B9852dwfAPDFkuQfPA6D5HijWTVea97DGfJyG4eS1MLBqcnKseQAvcRymJJbnV2taZsunXGTpnQURpBK",
  "key25": "2upkahfRfe9iZPvEfC8s8QoMJnbF6jE17M5s44U9uWiPJoykRFZRw4XkF64VXh9s4SNyrmg1Va7egofAuN91WoVV"
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
