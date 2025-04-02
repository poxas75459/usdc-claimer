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
    "3HZEWv7E8CbEFHNZjjKfQ77pvmjSghgB5pwkQpxDZRbkNhB4EpFjxJBhn5Jqk26jgZvGG4ouKaKMN6UgDiBXsuWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVJse2N8vjmACkvUnLN4mQNFf7y5QQkwRsbcaH3nGTWf2UVWWbDVZwhhf7Wm5xwaj3RnueUh2Cc4jjJ3DGadjcQ",
  "key1": "3Wx1u7DdNhhsaAjrcHB3onr7qPWZHjBHCBTnkCPdiXaV8fAd1wD8CaxvZeZsSAhjQQBLH22KmrinkyTU3PtknCWa",
  "key2": "3qvTstTgQMRtyrKdejEc757ZpUL2Md4sahTjzFH8sMJzP7mB8KEm49hfdFHPe546RBbb3AKt2E45FtNQ2yuV12UM",
  "key3": "3AhLFtGCzKCUQViJEGrhxnkTGeH1VvCc6T8BnxxZ5WYME8JZ6fJUCuLzrFo36vRJvXKX3W2nfo1b689C3sCkofXs",
  "key4": "5JUDiVxjvexAtMhaRNJAkXs615YiG3iVTDePv2DcBaL1cvUhxEWWbWNFe7AzZrF6AcEwnsJVqQ41qZJPjdCRoAhw",
  "key5": "4WM55JPZgTqaFtJaLM7VzQezAyW3Hr84QkZNFPpiUrbSJSEioqqqPkGpP6wkMHrrCLSuLkwBz5SJuwm4jdfknQ3k",
  "key6": "3PGBVrvmuB2YfESqipmTEgXty1kqJwBt8D8ZhCEezY7ea4TduKQiRD4cXoCepiWPxZXtJTmXQbsmDtWwhDDxn88a",
  "key7": "3aa1egrq6sC6vcYqgtxSBBb45Gujk4H6aiTn4BgneGWveTWEcqWq77Awb2yTRppcVzdzPETmeMfpLEYZ1sKBYKgQ",
  "key8": "3Gs7BnmvUAHUWfV3v9ijTjQ5Xm74qXJaz43rADV3upnKvRHDvM3eVUUz47YK4B6CQUXt2VMyZ5BREtQ7fkHWJKVV",
  "key9": "5hzn24MgKspVsTtWD6GUcA9zW167bfA7JAYPadLsqEfFtGMTAY8Z49iYwoohRT5fAHHCF7XcNsnqhQk68wyhPiGQ",
  "key10": "wowz4ppXgZSm4W2enBXWwHmU3uvMbcoVg8Z5CQe1UXSrioNQ5goqUCN5iHfHot1L2rhpVCA9n8U67T1WMZU8MWy",
  "key11": "BZKLwJUL9FER6Y4pUSZqePnootYor4G3AJi7K5BLintWGW6kzKZFxDNvt5JgWwicpr4MdXMjWszy6Y8Shm7Vfmo",
  "key12": "4uhzhw7kUAjoUSeJ2FeGmYMX42qytAYXceq1bCW4QUrt7aTRF8VWBskHXpiJHhvPwUk1bewM7mXpmKf4vU7fjZeo",
  "key13": "3u5YV2NGzqTybu61UdpQxWD8jb6PbmQoZuyy62392y6Am6C7dHgnRrm3wFKNLqQ5bMM5RfeaQgYjrNcuH97GHnHW",
  "key14": "2QcpwBcmwrpK9xhQ6ravKLaLxKkVdZapmmRUuF4TiFr3zetbppxo25NWLSAkSkj17ZNTB2aKdJNVALtQo1AcSeQJ",
  "key15": "67cAiVrfR6UwNrXcE4JWFSCoS5TrnobBHv1azW3WkmBYHd8es7968eimvBcY8mMoAJFxF7ZyCepUtsqFvbiyuL1k",
  "key16": "8UrpvdVZzJ8e6ykMkVtFLajmYNjDbMJgWq2FK7t7F7A45KKHc6pFPEo1Fmkg1LLge6wwVXRg1yi6nmUJsG2Eo1H",
  "key17": "3tCiXNaErYYVrs2vv8J3NFSCqR2UnZM3zyQESwCqQzxNjRxhaAEJH4Jmb1Vkb5DrbGybokFWxmqAPek1EwrzKZVY",
  "key18": "5X5gkPsGdyq2U2nTbTcvdAUoThPxXe1ps8jCdUefzrf96iUPERgSptNdkXRfy69fKtmAMvCcUEutjna6YXJZj2wJ",
  "key19": "2qwAq9crbhFwnWAvcRGRdRHPyfV7U5qiYWLsUwJfkG1zXNefDgjoqDny8dfcxcMMZAdWPSbadKiFTyVNUwPVYixq",
  "key20": "2KcdPTs4yNPYjmVp1SEJDf9ERkh2XkpJMPEf1xuLs5a15KazfU1jRd2Zro7vDPwNLwCu5LgJ7CvQ5NYGYZdWwKdW",
  "key21": "v4VaCP8AF5qUvscV3revABo6joEBuWdGWZ2b5qJ13rhn4ejJ1pXtjswh7ihofg3jPoSmFm4WGacK2UGq7TjhzjT",
  "key22": "2Zkg1VF6JuuuRCdpqyNh6YjV3t7Zv6n5BDA8sqaiW9sZ6rXaETTbMX7SoYvbgrC4KPEZXoucHNp2Jnok2EHqxYgC",
  "key23": "5ZuJEuKKs1vcQg2T7AUdK3upJLKsSzs16notxGmfLYMiVu4YtgeqQpQ3nXBWTRVvZTA9euGWE7xkFifLtrvxsACP",
  "key24": "2pLBAiq1szsnSpfBZ7vW6ZAJuXxieP9FsmFjKDtwM33dWuQS2kASi39nbGcksB5JZ6FZthWt4KHSk86P91373bcU",
  "key25": "3qbRDVyDxC9BjfXLKfonxEbqE3XnyyzwAhUfM3aShqa4f4GpaFUj1HQjV1zDiNYWEioggM4ZRUUEHxvN3XrqY7dV",
  "key26": "5jfuePxqTzHfUnivagcvEhtfYYs2K8RLUj1v4HeHkaMWB3VeYzbU24gk9gthDwdcTYXmJY8zMB2MuGTA6QK1988M",
  "key27": "5LmRJK5VPRnLwUkkwqBxCFfBj2G242P3vLDsDeGqkyjTcKhQ3Ge3puPGbCJDLFaEG69SpjBi3m8zDWV5f4cGFeGK",
  "key28": "bjkcaStkcs1zfRqEr2XsLGcu3xse5MoqowDAAJbWkXF6ik8gWvaui5XDyGSzdMJMpi1cMwNRtN86aFXZ87wkdTH"
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
