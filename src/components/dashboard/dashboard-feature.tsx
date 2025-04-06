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
    "4iTPzYWscuMPX25tNn3TVW987mKmH6hiAPm2DL7Kj52uoJg6Bvbg1MMhX1DTVtEDRnH32V2nSjscHRse2ueRaPSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HfpHicZ21o1qHXxGG1BZVND64LEQuyYskZuHYifcg11jmqfaM92P8yhsUyNHY4qHHqGj36fZFxA8A8DQWAenhCX",
  "key1": "2EgiKYaGJ9DsfNvBQXWGx9ohYLQGkDnTrEka3Es9KkXkfqaKhosJTXNy2PFUDQJT7jyfaFASUKreoXtz9d5VnbzM",
  "key2": "5GPLqgeT4CPQ93Wa5tq6UNm76QPQdva4hDxEoVko8fn2UfRrB3o8L9GUyiLyceAMjEUea4sbPBCL9cRvSjB2Udtk",
  "key3": "4UoinkHTKHSaXSRe7AVuV1i2MWb3pujJK8eaREAUxEZEt5RdjfaqBR4CKms5U9VvybsDnfajgC7CNNFXDeDXCrYM",
  "key4": "4G8AfgN8H565ruo6Gyt48omXg34wkvYBJqniYRXRFV2RgYGckeVtjzRqBnHWY7rsAMMkNBVBmi2dfJoFgVuJmDn8",
  "key5": "yBrcxhkAMKxbQKRfcRAjcvbWAkc3324GepqVkD8igfRgV6gT4FRhk7g2eqU77S8BiCwDkJqb7RtdxHwhc8YjzhT",
  "key6": "35JRQAqEdRqDcBAbaLX3VPYjJYeoFx9uAQmrfPd3MA5N2CvCa5i94mQaiuZ5JaoZQ5CT769Kwpe5t1iBMojhc6Rm",
  "key7": "5YHpdNqNSCaribfpKSG8AfWsJZf6kGKYhGaK5eggHmbJcvPGL526rYUHdy1h75ozhRXe2DEJUPQbroDQsq84WRo7",
  "key8": "2Beze7mBC5kGqNenQU9qRRkncDKr9eeuWf9k29SGcGyHjx6U7ceYdC9CV7PEQea8SsFvQyq73E9mF7RgwMqsA3Bb",
  "key9": "5W4qqMEyfeuFJjYaia1hVLWySpdudHp1YXZ7L8SrF3HgwKVdJsMi88ykn7QCtBhUHZA8CDoXGpn293hvbqwDELmE",
  "key10": "A1CiWSrWUJZcR1gJtoiQvYR7pdGBieRLerJMp4hhAdUQLpc445gw7bQ1HK8ns8ZBWrCNtrmN9D3wKRHBVgCs4ut",
  "key11": "3iuj75viQ7Q3fAVkGmjQaSN8mFEijdoGZ63WhML1b7f3hSTk9THGkR27dUUW9eftxRXY9xgC7BPmEmVA2SAes9jT",
  "key12": "21ug9kvsdY5FuK8P7ry5AgBWqADyuS3wKza9i8fhK1jCsLqysBarRQzkT7bG1FBvXuTD3AZx8uD62Ytzskr83noc",
  "key13": "5beZMRjnoX5cYLjw6WCNYtk4GzVBMmfsdWZ3Va1wE8dRE6Pdo6pHUQ57HK6RxrF6hpkKqoTVbKuBSYrWhT85ZBy",
  "key14": "2UbCn6nuuFBuDc4cQA72FCeDnmKxkL4XZuCqK5Ttj1FHGWq8BRQkjwGRx2yqHyLv7JuwUBTgEJ4HQFM64Mohg3Ac",
  "key15": "3mfKRoJaVc1unfT8dck9cYgaBTDPndhgJiFtvf3dko2qgN4JidKbJqBMLZgCZiB418Qgg5WzhKQms2KqtK5m26j2",
  "key16": "3VirZpGVZsu1bA7RUqHBDBFU6URhzLz8vUK1hq7sYW9YBsdVEKtX5C6AmEzEeBB6u35XVQwPk2MC16qAA1VGpZRw",
  "key17": "KdHSFabLbf7axVjya7QrRdE2EGjmnBAS2ruL2WSTj4LrDCvvJQtepDQw8uo9Wyq7ub6yk9k8cZQHrN8TSPQsymk",
  "key18": "5UttSfGLSL2tLcrgbCNX5yt52cjqZ2QVKrYCVCPamAc3Pv6CyMkyYvBZvCr5TDBtHq4mpJ27Uhj3vyRDWbdbeffS",
  "key19": "3E9deYWiwaqaj6kJyg7HyrTwbVMuijscVGE6ja8AodBmdLsoPRzBsDgwZnDXcFRYViGq5E8gygWRuvEki5RbFiXi",
  "key20": "2Ji184st3xeHTAvVyXVzXVeJSajGYgcxHQhGQJErRzHZaatDFpFsnTR4zDUf9qZ3SpfnyMDxcX6FhUoD722zNU55",
  "key21": "4RG8uQ6nnTK86h24vxe2SFC1ZmgSv9ZkHozDAz4puFPkDzgXDhBX5E4p3Bge7UAWmtyzbgdAFSNA8pVycjf3LKSr",
  "key22": "2TANjYmus2c4YyzKsXNkKEhM7ZoakRTDZpq7ZjHE5n9Djn9cacR3P737frDCJc8jJzakYejtU2AwZxHienozFcNC",
  "key23": "2pRgh7no2LT7gq2chYw2Kv32X53UamvL7h7adw1n2g4ejN999X4FFVh5aTNu2QgWAZd3JxN9X3frwSvyMcr7ErBG",
  "key24": "32k1DeMUAkBLtwAQpAYijgTbUJHaPX4GGgq9n4d6kaLekWg2sphMqopNv2yvL6SfGhDDyF1PgCa1hmnNXzmPga6K",
  "key25": "5thrrPtrJxb7UoKNs2jGyZiPvfcrQLCkaGgS6op4G5dWNUN1XikCULWn1JVuPmM5NtyFaVLevwkFYeCF7vJ79zGJ",
  "key26": "SVhfpRiqbSUoLfYYmSLiKCqa1akWkeqSnNZRH5LrtoBnbc2Tr35HrUQAoCSc2pbTcxnc5RP9YbSo6cQ2sk8Frfs",
  "key27": "2uyoeuGorPQoNDKwfKbWPnhvZA1WPYDyKVP35rcZt2gX7dqkA7y2eynzuTUDx1UxCrsCN2pnE9jhgMyzEjrbG3Me",
  "key28": "5LJFzV3m6bxTHL5GuExhkTPESDHTvezkv7vqqqMcDDouv87Wk8T4Xvyy5Dp143bBmttF2sf2LYmu7ppMrBJc4GzW",
  "key29": "3qyr86JWUSC87M74rLHaZM2BitHx18GDEvThmNoBfBGtsZsfwnBVVYvZis9HhwhZpsQJSngvEQZExMBR7qdYfw5A",
  "key30": "5MkyF4SYTowSZoXoYNUAXrZoUD3JDF7NFDnH46FeMzCWXnBFEFKn3oWRXLPqhs3AwY7jzAW5C1F9EUrCZz4B9BN3",
  "key31": "24WAyMiauscJimT3AHJk9wpCa7DxVYuG6Ee6S5uhoTfxE5QFhNFYJrWHy61L7QuVXgUXDKtXNQGbrtreXvE4BiEu",
  "key32": "FwEd9QEdnX7Gr8VxpwaVh3pYPSWFXcQovg22S7tTT4NoudrtVHEhqXqEf33u3D8Amg98ErvJkLfoxqCMjM5H95q",
  "key33": "51tB5a8VwNcC2KYhuVLfK7mbNwqCnzgJeia96Q3MsFf2qM9zQR3wJHuug77USFpvhkTQh8BwNkrHqHJxkWxywted",
  "key34": "2r1NabhxF7QJPCBLw8BcUe7mfnndMhMgvXebVWfadjb4dX3h3ch1VdkWhLKhYH5WWi2hmRB6BMTrHnobz1a267Mf"
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
