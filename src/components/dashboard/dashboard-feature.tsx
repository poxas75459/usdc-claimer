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
    "5PaGr9ccLLsSWGM4MVA9PuUBSB16dPWWYUKR6jPQjAuc1NDhxQ8GdVUUtwAvXkT6U1UMQCH8uc7m8Mr9E3LwX8Vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vPAis9xtvWGRCyjqRURLNsN1zTsAVEXi4zVadiy7aAZWvCxaDUSndA3xj8CbrqyNjKFNNUjsuMVU5Q9YbCFLEjF",
  "key1": "4UY54UiQkFoM1s6sYFkE8E23cdHUhY4FsWz1e7JidKXgsD8efJS1ZDackDCNBTkH4YkoQAJKduWgp9bb9QA3ia12",
  "key2": "WopHYVCFZrA3cQaWJ8r8GHY3eEmkthEe7mxskdgQuf5JJPuC3MmuXM9Lbd5DEAt25DvKtXuBah1osfqL11a8pas",
  "key3": "3VUcMrsRZj7vBWkeLui1QVJFUvwvvmpahFzAatT9A3tCq58hSvTynuQHxCUN18MbaEGAN5KWUZHgy81SDq66ews1",
  "key4": "4KAYwHs6uhfVE1S45W9KjYRsoD7ApZEMCZRy7uMSgofq37jRDiGqwTyRxBrxXkxmoTdqgETxAzm5uQtXDFdeWyXA",
  "key5": "2GUkQhbhRaRmMvkMWP4E9A97EzT2F8mPMUCByYgZVbciNV7xdzJ7ZfHEJdhkwN8AygCy6GfLx2cN2tBCLed7XMsg",
  "key6": "5v7Rokn3jcNeRTqtenpktoQNipJ5G4g1hrCpUEMojQHHRCg1MUwBVw6JzjxEJz9Pp65k85oSJ25YTu5UHKr8B8xp",
  "key7": "3XEjk6VtB6JmQ6vqrHqyUmrJxdpSnygoU5KR92Ug3mU5vZGHixiUBsva6NDaSBU8T4qt2aCtCP63F1t85TwxvjxT",
  "key8": "6R9JhTn4HvH2wLeFagjD24f4JHsLucBxSm24fmQxKPbkUVrDSBbj8F6MEr3MGNjn4pcSR85PvRW1GZhgGgrVByb",
  "key9": "UBmwDUmUx6rbuhtWNYDYbDoF7XmXe9gW9cUuwpQTD4spKf8QECtEfS43EtuzFvLya6VFHjQYyNJVmw3BhW2gcdW",
  "key10": "PDvKPM6QVsaaB8UFKryLuSVr4kUKjZiYYWbwuHBNDtx2Sn73JX2VT5trtpjvCodutkF1mUYL3c2EL9AcfeQAM1u",
  "key11": "4PyEpumjLT2qs1MFr66JTN4LQpvvKKpt57Ks3HWy1vgaNyniRCaHvqffLvc9NzrjNMnzwzdhLUfGXEXpNLEFCsCN",
  "key12": "2yCcMBR5ivfXhKPXU2xNLNBRZVY6r63sFGE1RtD7aeeWT5vQuNpuCw1wkjDLhqXSmb69doUVQNM52UvpEgnwd8w8",
  "key13": "3PxNdXHDN5JEk3zAcJEiTG7kuzzncqAG7QNFgavnJTjfwBvADCGGuJBW8nmMAPgL3VukGZZLEc5n5LEwYLjxNemr",
  "key14": "GFitnKTwtcDo22dyrknVzbSXc7UxrV5htLW19oUST7DHkccn4zeSDTGWsKcQFiYA1Fir4uABpQesu5mRyLBEutz",
  "key15": "Pknx3vAK9hruj4qiLUsEuC8pBjxFYyLtgFxVPSr93WkKFkTUjWBxbiEkyH1ty7ubUVf92G8dVJLqbDEFZV2pQCs",
  "key16": "29M9d96PFrVszRxGfgymwgDX3wVZx3fvEhySqZYyLJbzobfTJPABV1wU5U383STG2nnqUut6rmapBAxhWEPtgG5t",
  "key17": "2Jo831jrxdtV9JaoiWyHqSiYZWvadnzYHCsXmYBEn5NygTa7XAMkDnHtDjfSw8cUtYBQ9Ha9nuWypnNu4TYdrTqw",
  "key18": "4J67xvYvWkirrDRcycnCvtuaMS8MfYs5Do4Dq7TG6s2DtfBrL1GNvrK1A4Jcy2VAvDxjs1jpHSxCTDLRGCWjTb28",
  "key19": "4V33jWP2hw4Tq8iCVZEYzR37pgkur51sTmE97kpzQ66CLQqQSURyzKLca9V7vjrCcn8E3YLmeoQKHDtM1QxByqBd",
  "key20": "5usGwwukZXhat6SUi2xw5ZikCgiram6oxagSz1aYD4JCKLiDBQ3uoukGjnH8zFSsR1FD6wXSNVNCmqUEYbecMKVU",
  "key21": "5dExVbHbuKQcKk1LtGiDYo25a4KXNEVmoJeizUvZqguUtUgvWnrwUwhybg4Ma4pehr4kEsaFdvGjCnF3JmXWEiJA",
  "key22": "yRGyh278eRZY2xPv7TT5HR24EvsYyYeVLcJB48UUMY2MxUjE56YTgwRVyeiCRJZa6Fxr1pyQkJNuas9wWbbJfwp",
  "key23": "5WrCcxoF78JTtQw8f5NeuYe9EpufEHz5BYnYyyQrNtMk9UfKkQ5A35oa5bfCHZmEtEz6YsG8bQxpNLHY4JpxZH8k",
  "key24": "anLVXqaWzRPzLRniRhtW96TjHXXz91oguqrQ2atTuV6bgSbq8qCCuZF1sqjgnHtGwNLi4ApfmhZh1TnzUKmtfZy",
  "key25": "4VRdmrzPpx69NGQFfTZr1WWgC1u74KZYJx4s8odDWWLwkc5b16RbLhcKAqmRrKnqymBtMkeDgicAH9r4nY9yfqew",
  "key26": "3t5fikwkWERqyZbB7o3rALBGYEwVnPfiuMrZ6o6dqGCtUJfrXGHPeB1aFixSEWiExsVnVtHMLtBYDHeRErZ4BiUC",
  "key27": "5PdrtJMAQKU63NbUy5zcNg8xRQhocjUVXVG75pP9cpkQR4Lk9LUmJqNQBwjmzXDW3wAN8aLvw8R5KWRmzFuZi829",
  "key28": "51uMazXXKnjojRDG58vu6AcCeiJLyZ8qtREDzrPoMjVXjqgFbbQB3M2GGtenmAELHoR8umuEAdYnKimNUfvYCRz3",
  "key29": "35Uc1FF5rAMfh4ubtVvcdpgjr5HoQDKdk42AQuNT5E5dTNKcumTHYmxb3f99rdrLCBK7LVR9cMYm2AnGg5LBWHST",
  "key30": "5hA9R1fv6BvRe93SmAjA7VeAqu5KCg8WxS9FU8NXyAmfs8hZ686uMuTtujVhWWQGEnuss1bVL8aVYRxNU7kY1KJC",
  "key31": "U99b82Nm6SCdbqc15Amf11RmnGXhqdqiiT5WkdrZKEgPxu1srNjV8aoJHkYVRjh7xrPd5G79dkHHQ86Dvk178jn",
  "key32": "5ZgBhmcsindrNvdkNv8e8xTHDNdgaGsqVRXefGeLioKAqkyRgbrYDzbrPmZestnz6dcXvr6MQSH2yqFTwFwbcwYv",
  "key33": "295rvTy3XT8PLufcqQRaVuiG2ZMhSZve8URCoCpgL3bz3RMDw7GfrPzGpfYQuzXBGYtcVGiPnpaJ6eHABh3wS22S",
  "key34": "4Sm2nCDdzBmhtFRkHbvkStse7i7hCHmxY2YRmz1icj9hs1iefDpqgh7V7BnR8VdQuYMa8MG1R7EuidCHXnknW8YX",
  "key35": "58txYRUVbE81wnDuDgHvQqGjvisZFoPopSqUG67VXQod9BZHnTB9fwNTJPoGgkVJhzWHZHXs8bBY2qjBkX8rKruX",
  "key36": "3Qo2C1shhttSJ2u9X99C9eGJUKS1ZpRa4U85j9QeqTVk5ELehHw1aC5NdULytoF2FmL6nvAG3h9GtBKMChs4LohC",
  "key37": "2DUbqo8DqAE9eJRXVjB6rmanYKp2tuANyQenJ8MhBrAg3mrRhH3HmqZ8wmcCaSLoFMNc3M2csWL8HHPm6AingZR2",
  "key38": "5Hw8Cvw194xEYCLiXmwdVRTAopq3G8daHWbGd2ogX47SmPcktd8qAfEJYevPtXwFdoJViFZpWuc49tuqJfWUN2dj",
  "key39": "59yYDCUJ4h1DxoNGVQqhqFoBXu5PpupdkTvohcxWKDMrQJSuDmuAsiUKnHoZ84qdoL28eSS6yUdnXcS2z3xSyRcn",
  "key40": "2UCHV1XePDAF56BPFZUgzUUYZm3SWy9sJ7sEecEc9sgUtWzrttyBoGoZXKkpCs3cvJdRTYQAAJP9ZNT6M2voHAek",
  "key41": "2T7ftE7uSU64XEeP7jueQuUGTCWuMw2WhX5CFWPv18XBnFqUtXsnxojfsvaG4Z49CY7Ya9bpULzB364jrQAtp9g8",
  "key42": "gyu73e2utyWLjr9wgAdUjr9AsmaEwVG5xrCpeVwHGHtkaLdg4C3TDEo2ZsDBivQBuv4NDA7SvyM1zELo7oygWPh",
  "key43": "5ThoLfvqXMC88pt9wKALsPZ4vg3XpnsoWigUd7vAF9XfDqheQ84iSnZV5DdMLd8v4gyYhWxceUQjDc97W69dGEzC",
  "key44": "2yvGmuL4squKJ3M6dghruzPcJM3VRvRWMRmHVzuqc1gEwKwAFL6BoQEm1TyeeQ1x7qRMVap1acqo3AvLU9iVju6",
  "key45": "jeTTxREJ2Comgq9NS5iEbqUWqGtTZZg2A3NvQ1UVyw3sY6dSMzi1tKLRF7sbYT5R6t55vkQfQ7iJPXW886LEhje",
  "key46": "52467vy3crswzePfdAXwNnxn1aA7p5vFk7gaDTWVjkwc9paAK3RXC4TgTiVk2JaGKBa8mXaGW7icjMUWDhUbvTEm",
  "key47": "59mReP5tXZ7Pd8isfKbiF1GQYHwLR8kBEHg3zHUWxqXD8UzEH3Y5LXSQV3uzL9jhBLwhGWqc1HrDqYuJi11okguD"
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
