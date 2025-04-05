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
    "58A9HziBKqyMfv9xkYwD8kX16xRwzAZfNKjTTQmbTgy2fnHfWZgLfgUpkgHZoMfoZuff4W8Cvmz9fLNgEAY9gNys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oNChU4DmWbswjbpGMy7h56NQwtZctNb7Nzs84vSWoDynp5S4mzdDDHFfdc5NW4HtaQ7z1omHr8dMyATmBPunCBw",
  "key1": "3i8Rrmq5FSPCsKCiqdguQh8LsBxNHDfNGCZjjNYWpWe3a4nkSeKveawfJ2Yts1NAk9fBN9PinA4Ho2KheFZw7HBJ",
  "key2": "33nJ74M9ZAwAmk1fcSEV1ohY8UAAgw2rb9wxeDXygUbEAdBUg4qrZ8FMmXeaRFeMnieTwmJhQYqe4cRXkAiWWc82",
  "key3": "aPKSUS5nsya9SiKKwHKYZcxm3T4eBzXLkfwkz4dxZkaG7gPLVoSThkG3q8h2NSwaXyqBZDyncVJL6XxmDZkxDMV",
  "key4": "4kB5my7KJ3jGvh3cyndTcMXPbNQqdiC4G57VvRYPzV7F3abnQWbMdzNF9pTtDynj4De7p7g7enSzExNJue83HRTB",
  "key5": "fhNntLtnW3zjkDrjTiF8JuG1f6QkKnXfWqo5kJYGK3FHCac8hfgxFH1bwcfEcoCou1hTSb24uYsnZCEGyAizSfS",
  "key6": "2YFCWpiKHqHFYVf8ELJJLcdAyhEQNEer9ZEXtYqxQM55DaSMnVqWEEo8ChWBAgSTD84XWjXoMD9Mi89FZ2FdCgo5",
  "key7": "58mTRPaQiJ8Jp5YnjstqjaAtcHruXXJXkNRHjCkH355g9CFb4ymsCd9oi4z4pU9diowhkdr5Xyz754LScX45XqKn",
  "key8": "5rhKNHoBDUCxJK4Fw2y8xRW2rKXM4Nt2U7jWCcujSEBRT2vkBc9z6eSbcjAMnxu66rdskQzYFvoY2U3v3hD5Ppj7",
  "key9": "4jiM354xXzbRe3o3Ey9PnDjMuX3LD6kGWgjuFAZEdpUqWHsnuPHN9yBUtLNhqjv5mSgGnHXUcsUyemQBTSMUPF3t",
  "key10": "2UjDh4VAr4N7ZqD3Q7pYxLuC8Lwtnir5hg992D3ud24voi9B4pF1KUd5G5M4y3ShdbCUFWYwGZvrJtJGM83S7F2x",
  "key11": "5qfJagC5f8DUjpFa7NcKGfjNjj8q4RskgDCZ3mzp47LrLTtfTwP1twdFPJK6ev486pM1xgniXNzrRZYXsPCUYb3H",
  "key12": "jhapjdixd6wX62yyzqKDjB6HtPeS2bF1u62zGCJTkp4ibLJQ7eZf2GDMbxZMoPaPMEHj5sAUQ2NBWyQuvp1rngw",
  "key13": "3RS6cvz6WPiipBDbNrAPpBwQxZcsdS75ix8PRcRMSBrdjFav1EEmPw3ujferM6uqEBZb95geeUEUE3s996Qd2FWW",
  "key14": "maG9qqz1WjqG6wgUhRGzkBWZQ64fPAT39JY5eWg6C79rMVVmaUwvkMp5gZvDF3L4ia2FRA1LjPXv7KeZueLRs7i",
  "key15": "2wM75ewXx8kmcfbDCigpsJko9s16YEfAFibRJb9ZUQDbx6sGzuB2RyCfHGSUokESE4KwVD2NgNFeCLZSUF6YCiz4",
  "key16": "3gYCHgJAfpELPpoS9iFhMyCqi4AzMaVZK5EfGj39wVsCrSqd1Fd1fYA5FwEGE65r4vyCozfkDrvosvBZTaHtAYRY",
  "key17": "21Z8WMRA27ja1EAM9WuJJYLsF4Dyp9A5Go1M81MqKteihapKLG8a2LSNDkFGcjnmPNxqWj8R7ZTFKvpuX4WYvACy",
  "key18": "5sd5vtkkrRDCALxhNEdPiqBDVTKu2vaJSvGhjvfqL2z2Dphto2xF4tGx3Ljs5zYPSqhAdbe7XS9ggHiu8qR4oTmc",
  "key19": "5UFszMN1JSL8ZJHBuRZML8KWbWWVqJKvqQCF32NmBqGDAF6UU3FuvTvZxvUKAmRpX3TQyRxKQN7jcZpKFqazhvSH",
  "key20": "2EbqibXkCynKSB6s6q5ahgbWwzwDwHDQ7wsdwvQcd8SvqzVN71qpQ8mJ3vndCxNkeyZecfUxjkjGb3iAtyma8KwY",
  "key21": "4EHKa9sghdSEjugBPWesNmT2XYqLvLoSk4oMJBwnn8zx9YGVeAtFAzHV2kstPumQABLkEfkih5UBsYtpL4EtQtZ6",
  "key22": "4xcGPWeypYkGUZwewUPG9cBrhATWRgZaPEMRD5tfhiLc2uHj3tD41xfHUjJPz2vunz46YLhUrExewNnXSv4MyFeT",
  "key23": "5X3d9W6ABoq4LUcjcceLz6bQse21D3qJHR4cdKVQKBx1MF8fS5VegerhZrmRvtAHGoxgBuTRNuvhkyCgMuVpJfa1",
  "key24": "3x5rFqVCDCduciZbNfYRVd7iozvefu2imPadzNkRf77b2ijTGMq1YfRuFgAe83WqXqfLyCgzjezEomd7CENguZf2",
  "key25": "57e1KZvB4G14AGTem6du5d3ZDPF7XnBTvS29ZkP7ARiAfYNDe6dnhYStj14zkVXFejxDaQQh4cWJZ6QqevJi2Bod",
  "key26": "3CrQ7ckNgSZzjHfg62k7dS1EKYhVTN1bFa1Gn1fPrGoFRGKgVHMHGPjhXxQJ6Hh45wToref1pZ7SdgFtkqcmGhjF",
  "key27": "5hAz7UFVTtRwzdm2YcYC9mGBsXVPBqSVB6Pu4NbfkiAPDDNVAqtoLi99Hi9YReseKcu4XrLFZrVWq13VA8ZYrAhx",
  "key28": "FJnZysVVTruQzkhaNku9vBjwPqunibtfPGz6xvYUcPqi81ZJii1tohaDYxFyNJifuE58HwpsuHeqfu5rw9ouMpz",
  "key29": "4MngLoYtfhcEyqNuS2hKJ26Fe6rfWPapzCCGe7cEgAhSxpvkyZnqDdULAfiTvce6V3TYPoVMcxcyB38Cm36BhysY",
  "key30": "5mB91sQD5im5yzL26idwLRNZibr4Qn9H8aB6D6SjhBQGET5BAcGDbFrqH6n7canaJtZWTAYNKR7ZZcn3cwN1tJsK",
  "key31": "37ZTeBdAL5ABkRZhcavYjcoqNipNwccsDHN7nX4nez1so6WHqRvGiwJunezLBdKA7x9rdyLdFimKsf9PaxEj2y6o",
  "key32": "3VhoHgAdYSVtM5hdtPMqFx59J1jctxpQ1baHiNLDgSjSW2U9hJnS3RQTjvoCPJ42CuaeqKkcQbRfHWN3Zyn2PbPm",
  "key33": "56GDjAfCT5CvKTXTi5pvVRLZDHeA2S4ooY3dHcUFXjFwEZSQ4KUa65gWgk6sVkL7KXmdynsbp5Cq8HQKgMfhYmMt",
  "key34": "5UKBWLFASjJihXVaM27EjAnAzkNtJDnoeXDr2a4YwZHTEQks1YZme9NdUnXHNJ3fB8cPMiZGB6SSbCCkYkXYvuJv",
  "key35": "YySM5yTDHiVpMbUk49iVQN1ecRFj58ETf7HaTWEXV2fyEyNpztMYQSpYvytmq2jQ7WWmKEf9uHV3LCZdAFZbZfk"
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
