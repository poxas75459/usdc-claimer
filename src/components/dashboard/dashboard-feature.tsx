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
    "4333aY4ZjVG1LTSSavFLMDE66p476GE1CWLvnLZgqAVzMtV9dnitwxn6bS62mcTAhfU3Bg5K5qtqi6d1LJgwCA1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RysiLk8x6CTqbqX66iRydMYjT2F5kQ3LkAp8QjR7iWTsubTr9CK43i5ymNDe5GHKz7qz7UihKRkciDK4ehTXZJq",
  "key1": "24h3HoKAuiEWWwtdphLdZQAiJn3fuUUpQwG55VYaPJizsGj69sN8mcHwiWKipW4yZaNuFXDznbeadY9ghF6nT8NJ",
  "key2": "5RFQViMDZt4rx3WFQdHsQ27wZLoAiki9ED9fmG5St3MaddoTGCTE2eBcKi7PnX3Tum3d5fQTo1Ds2SzWnpCMexcG",
  "key3": "2nMhxPuK6cj2U3sNmYsPcGJCQwZ8qr2hdwStYFebWH3nDkXnp6FmZWyDgTvTPnnBfFj8eXudXho2ELWs6JMosWGn",
  "key4": "3ygpWzTdKuULjbqUAaFAhVGrDAoVL1oJxg9pNRqACguZMaX5eb4hDevMFFrnxSQdn2D9XyPUKWF13985KA9YBsqA",
  "key5": "3K7fcwgpLNTycTtjq277MCiwQXBTLChDCy1Czch4xUCzbt7rQJk6KXo9gfygo29fckSeTdGEY4YyGTQkwGQUY5y",
  "key6": "34HyX4PT4UHMnzi5Wj1Eq6rcqGuM7EHFmcqZHaxx4hXr6fU21gvfmKsxZd2yDmwkZLxey3E4eTtLgHSjapgnt6cP",
  "key7": "2WFSKh1TpTRCPuNsCrCEY7Ry88mZqDfRPBbhEkzvaNZU9Hxr7jLh5nsQhimFctxExsBMMHaWxmqRVJspapNZrbXB",
  "key8": "SgtS9tYhFn1QE2oZSwUj5j5UUe7XESp3jkTe5NAPhqFAa7Cjtq6s8PjdNQ8LrKSyPSuMJG8ahDvGupMvyVgUFNM",
  "key9": "3jDPhmKkFuw1iJa2DeXBB39mF6oAZCbn9TuouLtzui7UWUT2Azjnz62516ramy49dk1CHuJSDhSpyJ7QQwbpj4SC",
  "key10": "CJ8JW7qUNVZPp4WHBxPEby4mDT7Ekx75YmkiwCjjqHCjRer5iv6kZGQaPZ92dExxufC8jDdbv6We4pCn5oE3sZv",
  "key11": "4n9HQ5WCx5s49LaxfeT8dTtuGvkrMfGA1cxZyvwrGpgRVzF84KA25FU9Pz9b1v9VAhZ4HicstepgYeP4XFE4Nmkg",
  "key12": "37z1UdeN8HmBApo4hVZu6UcHebvrVxC8mp6yJJ5ToHcH17NcpTPQQBCz9YqmJ4suJKozqGdY51Y2XgtG8dio1da3",
  "key13": "3Gee2ftjRCemju4UtdtTPcUfmX56mgXXC6wmE1EvS2JG1z4vneWR3WW6VhwygVH5f12MbfdNMqsv4MqTtNFpHgR5",
  "key14": "2PdQw83F2YdYPfyMiwU2HuijeuQpbijYxNGoteF5rKkSQe6wLBjpESxSwG7bWWRyQwvjBv5b7diBGP5RxaS81eh9",
  "key15": "3hoychodxuY8thGrG7DaxFyMza7tnF6V4mVD7LfASmidyeK8En4KYZjo4agRa1avzkHprabBiSh7MUtXK686b2Yq",
  "key16": "4gPu9dmdPgvvHYvyYeXa4n41UkWQzCrKzFH7Q9KPMsMkumLysJNKvFUnLvxExDFZUczK9svWSEAwXCioMQGE4MkP",
  "key17": "12769AZfHTHPBxHzv12PiVG9Vdd3TpofvXVjkMVHtWkSuMEUqmS2HzNp42xAvJ3on6AGiu7v6wXTQBxsbkNV2sw1",
  "key18": "2hTyFESrRf7fVNjEo2JjS7zLgobtFiK7Javtv6zMQx1e4aPNXsaXWSr2XcBeW5jcShCBUHu1z3RaDprxtk4CaV2H",
  "key19": "62VPbgFdsDQXQetKvn8T8DLZKw3Y11X4q7q7xbcUx53uv7y63SS2NYXib2p78i4iwffnrmANqviDkeQ4BNrFcHa8",
  "key20": "5T64w8y8bev57UPKveWDWwFMB1rUXXVieknEz89yjQvm8aDys9pvPadLbkbb1HgEezBsFV3YRYfXbD5Qnqtgi3Hi",
  "key21": "4tc3hDJbkUDAiLYwVxLayXE2nNGK9S3wnHqiicjTzkrszyj5C2Us4MmkynDB8p4N4QD3LS7S3LuHaK12Sk7ng9Xb",
  "key22": "pUYMXwtMQJCx3v6W3afcuvBHEzw9jJXUBV7GDT7mM92S5HYLRCLgEbnTXDWyyJ58LKnmRmgc2pZ7zrQuRaZPWyE",
  "key23": "3y2zyvCBLaPSPGWcTipz88wv8yaQGXn4g5NYbpiYDLwbE3hiRiazUbgvX6r7HQaGZPBiTovZQMersfECxHikqYnL",
  "key24": "23zbDosPfHcpkdR12ouHe21UmkoXqSU4JJAbmzrY66FVFBwQ3gfBqQXKov9R2Qwo46bJ9eFpjQYaa6CZWqujNWb3",
  "key25": "3KWLF9s6HfD8MWe5WAn8R85WkV8oCWvsfxwX5cDrqBCt3HTDUbiniAa2LiDk4TinC6ZpxxBgNiHqfAwBwW6WuvuP",
  "key26": "38JEZeb5TQheNEKdXGkUyUZsY8GXmoitqGPdov3fFudvgwrx2kvhzwHQv2ue2si8TauwvnrqHWr4TYE22DbgYJEK",
  "key27": "2vRYvp7B3ttgBbBky6MQTyccNduFiBGD84ZqJXEx6kd3CcCmA4ZTmkrdpEigNYiXFv3ev1d5EytAbwhTnDetceMe",
  "key28": "34PcMnpMH8YmpAj4qt7PTt4BgW8RHgWmravCBw8oPdBh21DAoy3Xp3qXh1rTayoYBAo37KCnTexrZCDnijhPadBM",
  "key29": "5GEtzndeEPcCxP7dAGmuuyAsgREEurWztR9xV9ZAtr2fAtYy8Gjjce86SyvxbEgVM4P44hDFFytfG983eGcgZRRi",
  "key30": "4rYvyGQT39xyo7QkJiRvtkYn4hsVGGQv13a6LUm74XHQ6PXmz2iKJTijw7yeDuVqvkDSvRmH3Ev9pcdQXCwgNgzo",
  "key31": "RLJtHrptRdiT27sTLHEEpKsAaRoYFZ9BVLdJFinu2UqoLAk1MAzNieprsnkSqGazb69Atj4cTMivW5iAWPgDfGp",
  "key32": "5Ar1Y35MNNuMUvkYT49YUfY7sG3hpuNQkg4Cg6NYViW5bkPbgFMf4PMz7bQL6kSiwykRFGXJFgpCRFMs5UEnftbR",
  "key33": "3f5NB6CdhhnJB4AytkFFJrANZBrik4yVc5yhkCHGQhA73kiAnJhWahZ3btusFthWThvVnhncz7hhb2pSAYQGSRMd",
  "key34": "jnuTRWLaUo4Eqeda9eHoNNRyx1dE8QaWf7XByvnAnTVnaNsWVe2KaPqtDXiYCmozb19FB5HCqJAzxYyyUdUkoZQ",
  "key35": "35LkJkZMapHXRxecRzZPmuxLL8CRyZ2Kykajmo4nT7uKDFE3tEDzGpSSxAZZJUpqyRvt3erap9bJt8sj15TR4F9Y",
  "key36": "5smFJWo7vyavgj1Lin5hBBy8RPQAXn85RWzdyMuAKKkfUGiBqRgqUC2HeEFukedp2JFhFxacEQJLKAXwrJo2wtV",
  "key37": "42nqsbdvK3Pjqwof9XwzBfpi3GVNtWXMuuirf6mZXPqGTjx9pz3v8f7Y7Kd4UFVsvXLy8rwWeAr4vXor8NCLAdPG"
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
