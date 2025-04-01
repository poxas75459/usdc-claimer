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
    "57eWvkWMZ26vdzV5M8kniBDYk4zGRttQMkKi2sdQ4GfewBefpERePhdJhT7UxemQLQ6uQsZN2zMf4QnvFvgi37iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tgaB1P1zhgbCwuvgYzQiVchqfHUx4jc4YsynTpAxUW7YJf2xaVFcxNB6xBp73boHA47KjXrgFmWWR8HJEA8DYbc",
  "key1": "3yTAghQoEzGqkY1xFtYBxd9yaKZibmTMRUNdtmKu9k1PdnM15yCDnbmRec9mTuxovAnjzfVERNzuxMtBn6wgUzaF",
  "key2": "2BU9YtVUz2k2VET6sM9FNfo9cU78airKjkWqFYWpEJdCMEhazmTfEEXWftGd2fr6o2eSKbtieSr8gmGNrZ46Q7YE",
  "key3": "46H3UtchZEgUnVGgKpND3UjZYo4ifT7uBu7amfZX7XLK82hqipn1cZfRaLQJt7dJX77piSrAUMcDyiYTVW3wNjBz",
  "key4": "2W5txDC4F5LRGWQU6kn8xH4LLqGpesuTtg4z2JWWVqFv2TmELu2hF5z94jdsgmVjVXP1CgQqMouWuk7v2g7ALa38",
  "key5": "AXozuFGFvZZbt8BY9Zz3tfT7HUxowAp8Hrk8MFZ6Jt9ZmRYVsJusGzYprgovZicwWzGvJ497AQBFjDmXB7SfeAh",
  "key6": "5XYnH6z8koj2cYDJ2AqXepz1dnxe6qon8ZHCn5QpLqep6A8PY6phZRrgw9o6zVxNC6vP9c2bNeLi8zPADp5hjthC",
  "key7": "2K9NGoMe19WFRpjj9mX6AihWX6m2PcyJd64czsRQTDSDzgjEko3SbbnvbLGunsAkVrVRpbZsJMDAFy4EpLQR6pQE",
  "key8": "5u1MfH75y7jQR28FCHFmCWmDJiWCNNgMsy7PVnQmPNfyBWc8W9sqDCE1y7uWoSDizWwGfs6w7nHSkZgT2Sz38km1",
  "key9": "wDAEBfgUdZfATX8MnyL1ZbYNtGGPJbJJX9B9xqVsqszgpJ1d5zhmj5csFRaXNbE6C54Ys49JMTymU6qHa3xJ9z4",
  "key10": "2XWS8Z5cwwZA6F1QtqhKSBUARWuT5SRfV2Hu3oCJaBMusEKPuePSeoGMfyDjqPoNJ2pxuTeYQq16VgWdjCzTfKK8",
  "key11": "YDS6dVepCihdfVKbNogktwaENTQ3JGdJzKXUbg6ApZDbmTARWCmpXy3Lz6ac3LbSFwdFLj1qqE55UwkgkuiWEb8",
  "key12": "3zQAKtqSpyeDZppdtmkVQQ4wojY91vYjkUMqT1Kfe4nNMJuQbxSFqLEBx9UdTgFz43iMgkAKona6qo4baY5sM3rh",
  "key13": "dMuouZqkL9PxYbsY7ZDDJaQ9kmJ9XGzhJQFUVb7QePmggk3PBMb6Qbeo99xMwrSeHvWaoV3T8tUFeXAD6VFiuhz",
  "key14": "3LRJxVVytmdLnmFyj4kqdZenpT5Hr3oi1M1qTivktA3rPMVJBRn7xQyMkawLU5W1nkYe7JUnpsYb1Kuux5xJHS6q",
  "key15": "5BP8eAstay1gR65NDKXaCm5qbUi3oWtJNKxLLWmMvtqPM2GQ36z9CFEuVdCjoiDm1hTRQkUdqCrYx6z8Q87jRYop",
  "key16": "4ymFQzVi5UCMsjCmncWuegpAe23MBdgeHGD6HWCVJf3yQ6NDysXqqWHRLdYK2YcAFAX3zfB9wJYbDnwraTebSCB3",
  "key17": "5AsUac7S6kwMvfdd4wd96Uktopx9ZdYAind1jJf2d4BcR4VRHMmqg24fRfDLTpEVf56Ki7WuzgMQHEchWehuVUC4",
  "key18": "3sZQpyr9NrJt1bG6eMF6XW9F5Gw9mEKwQcgfBQj7Me6rpUW1mUSUzJb5sz8bMZ6k68gin8rXNg3o4mvGR94nhrjY",
  "key19": "N82cE8oESw9ZQCQFDQY5KQ93yqyvX3LdZq4P6yvTG1mhPEqXvX6NH3UiqXaopAXGuKkJsmXhz1e7cPpymiKDexA",
  "key20": "4mtNMCTCSYotMwybgDXGprK8XcoFbCD79gqRAtjnSe7jiXWes8PuABXRVjxNjuU11wiUd2mDZ3JcoKSUFwsy414x",
  "key21": "3JGdnMGUXLrvZhQr8MZFeCujxCc3yFUUT6FbKmtpi2eyvR5W1nNDW3jfEwQzVCbSq18TsKnAiJ9RDn4yGbuWTJNi",
  "key22": "674itiVBC2JfWAVNfpkhdAVGdnKK5ECoP6PFUYcQ62npbraUzYstp5KE1QDnfajYXkGLGUmYrEESM7QpBDCL4vzA",
  "key23": "4faqtJ5Fk96dHt9akffvaKbja8EJEES8vta2AsL8M6pMtyTz5Hd2SAeeyK2fT9ju545rD9UUYTf6HcJ2iLVyTtWi",
  "key24": "4kE78fdgsBM9pZhh5z3MDBcNMGrAK7nhukaH4PEEUMbLrGkaJmiiuXJ6N45Yr6D8pZAt1nLRjQBQ3we6T1gfFrPD",
  "key25": "5V1zXk1X3YLua7AUP2AKzBDprmUsvtiBpJY2rotfyTUJQdpHXTh2rf4X9Hs54tAzypprtHwJCv5kNN1awXxiQXPz",
  "key26": "5xJnDE8FupUBP3CghBpQfNm76D34qzpgt5vYETVmR5vtR8q3TE1sFvk46qyBEwqcEoXfB5o8tRDCSh51DJoctwjX",
  "key27": "4R8SAdebdU5hu7cfftk42DgQQqrSRUEvphM7isUzsVh9CUc32xbWzHNH22ZpV5shRc2LWQ8JL8ka8TBP2j2fK8QD"
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
