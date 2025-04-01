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
    "9ir8jGkVTYDUouhanQCLBELCq7G95mBCEsPuHwTopaBnNFx7FzwfrhHpViMGyZiG9msypLS7P2yQfrnToBbtbRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mhKKxQMEvLskokcLeRKghjSejYSeR1en6cfQmBfCr5chD6mLxxbBaepaRqLxZUgK92TrUskVkpG3e83ykavKm21",
  "key1": "3f4qfwuBg63jvK7m9UMdQPz6bU4K9BEXs6wpKV7zrApXQi7jFVJ2jpMMFBChhNJsCQcYge3Lr65iK51d8Cnrdg5T",
  "key2": "4yK9z6cUjauhbwbj8k4QHQirKPPt95PpPGg556967HyMR4Y1V9zF6xfnGpNGsk2eBkqGmRXj9xAceDsjLv8TUpfx",
  "key3": "22T4i1VAZmr5GfYyjuc3wou75RisPk1RLhVhQNPG2GuBPBxnUtSbmyHG4HT1XgfxA61a1n6EPromEy1HcgMPefic",
  "key4": "5FqqX6KJ6LMUYZPiQSpiTLvPPNc8cuXfgsVgfPwQydVEoVYA3f7xo1CwZ8azEF1QmfwM8yRiC6biDsEBm9Q6YYHP",
  "key5": "22eJMahQUv8cMA5sQ4z7VKhT8qozgpduJzbWXa1xTVUPz4Ceq2wGkyKDa1vNFhjP3Zc7yrkeswLyUAexvA6prakY",
  "key6": "4PtEQda52oR8y4eTM2C1LfPxnzQBoJB75v4Fk39YNXjqFJ75wqJNpyeNMNrj3Nuu6aCAaEUWPHbmefHLGgPUdB7U",
  "key7": "5H3AJEa7TQfAsbKWjv8AWTVVihQFyr9okba8gCs1WeTTByAFf9NyMarkoBxGKt6SGz8E3XQhC7PiW5fFVZ8dtYMn",
  "key8": "3ZXbjqTdmLqnWxS32rEP25Ca9irY4oGxVMz5hY2Mf84JrnUEswikpTAPd8F3s34kbaR9pZm8SPe1worufcwLYvfR",
  "key9": "5iLYPiJXPcDSBgAaM4wtJCV6rg8qTD5ipGA93nDMbJJNuNVzP1xiCLLAhiF6Uf3Jaq45AfnYgT8WeWbVGUT4UsdC",
  "key10": "5MBkKwB1JJXSQKrvRzdbPoyybeYgWHcx4MgXBT1NF4hRqrQ3zRdJtP7zpvKZ2pbxQ7uy8vnzB28aDgFwbwsURdWb",
  "key11": "4voA6bfgdc45DmoRUe1hD9wUGSfxfmAmaB8jws73FbRT88wmkQw2YTY99q82bdhXhGnv6DWetapzkczhCtJccFdJ",
  "key12": "323udUGa2vwovqYpVSY7dxpijWwdqNn2qGV1H4Hh78cZ5JR2vaKu7YZkhP9pQPpYPnVZjVKPPqC4TS2ZLg2GkSUF",
  "key13": "5AWWpZnbwtwH5bQKtehuZvbDYgepNNPdRzUqSL6RBSmUAxAALjt28SxunkgfRZnqP2cHjMrHm97ojZPiXnCjw98",
  "key14": "5T5SPBysXaX1EEqWeii4akspwB8wTdzwwig47i3Jad9RtApN6hMC8rNVfjZTtYVevfjJ5ZZ3DzDjQnfTK97ts3AL",
  "key15": "5azPTPwp685ARXsLNxMX1Wmq4CyAFs7jEHwf3comUvR67qMVLEJaHDSUYZKRV9caPHWVBFzfErX4tzCBmqmz1y6",
  "key16": "NPUZa3cvVCjXVDYo5aZRPyvx1CvdYftKgQhVQZ61umgCsWrXYfNjUDzZ1Ki3TrDHdvKQ5FfVeoc2giGX98ZFBMs",
  "key17": "21YW7PMkWu7wtPhFvFG4rEwNDLEuMSDWqfhiJ3mWwJwfMR1y1xaapfa88Sh1R5CL8AxJ6KQQETTTwm2YALws6Mew",
  "key18": "4UZSd5Crv9kKBtvjmZBSZ42c7hEiELpR6eZG4hJjrNzvQ5pdtbMX9gDqZNDYfVWnE62FpuEorqfyd8cdfyW3FBc2",
  "key19": "29nty5bWXE3iF8j3C94Viifx3qGY1C677JtbvbVWxtQq9xsthCKLGhevmht1dtn9WGJR12jDT6Qoi7rMu4GLdXcH",
  "key20": "RCBFBshGgFVg1i2vcGuUJHSQd6TBi425DiSdqG4PLuBnJPajySse7uFTkf9JbyYjeLQe5xJXBLuwB7QSoMJY8sv",
  "key21": "2AGudCPhG7yo3uyqSPrGuDqFs7SiNWbXhSiuv2dyHYj8sG8jfJfdMNYtv1kCvj5gbEep68a2p9kWPc1mKme9UvTe",
  "key22": "THtYPM8HW3UoaEFsaFyiY1hqXoYSSB6BW5H9zcwDsRzqARV7CSnwTkJ8LQvnzDgurMfpD3RXzma1SJNUtd5xJYy",
  "key23": "46e19QpBEyRBNkfhj7t7NG7sqz3rTG5i1HeX35vctidb7RgAu4DEsDCreyT4pG6mf8dyYnzWQmrmm8VwKSQCapNu",
  "key24": "4zUP2jhVNxnSRGuSFSzntzf7AqPUn3PA61BHjvcc6NLwB9q2bfnbXQ7b5p78gL94diLu5bgEbvV4jXWr7uBkRW4k",
  "key25": "4yUpCu7BwVPpQeK6JrXLBTGvUarv67zfagRd8mn543QoS7uhz53urosrRYkKZ7mMbfAWBGE3DpKaC5BTbGWFeLYo",
  "key26": "62KC7dd5FscBz6pPuciPAjo54UCVdzwH565uN7FFVnHcfJx16qQhbxN8T3aE6wN5MvDj96tzKq5LDkmoQqjs7c7d",
  "key27": "4X6FZQnkWH62aGGpSGJy1WRCGfgkV74t2JTiFuqHJaxcbSzS79bWtrJPTNkyc5PpZf42YtEnPUcPi1P2Xiinjf3G",
  "key28": "51WkFqHtV45hDzhVQdjwc84NW8sFEFKUcLY9ZZhD2p5eATh9cMoeKYrAjnEKDrxVD1sEjxWYWZccDUDp73M5mxYJ",
  "key29": "3PtZrR5JWy8oweVW5asG7fxM7GJ8hBBW1enQSFZqJJe2UEBGjGd4b9zQsSUreqv8ReVnWU5NEWvaPoi8wL3bao1v",
  "key30": "jTvQiuYpBQoft7zp8NS9xTQsXALR9um5u36ZMZVRFkKQKn9NwMW32WU6WdzuMR86JyffzWhDqMPUu5u9NHaGUEq",
  "key31": "5759rhVU86tzWGw1AiaiTpbk9CzPoNWwv7RgqH5koxq4Q9ZQo8JjcHuxjgdVvW7nbvgWENqbPbX7TVUiU2Mxq3xR"
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
