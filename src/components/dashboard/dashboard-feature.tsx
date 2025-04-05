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
    "XUw2bhTXCPw8KKTUrSbdzj2avQjEUnXzCvtDGhcwoCBTfg6xNGpMqZe8kad5N29sgYk7hGkjoDNqkHwBYddzup1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53n1HoLmcAEJzSeDH3f9Z8nucbAB45deHEsh8f6BXc3CyMsXMv1xFz39XCtqbLETZxNJQw9QjVvaZatw26vH1mxY",
  "key1": "3Gej99Q943gHVbdnP6sRjzBWgybod4aU6QMXZkYaktwSGANYt7bWTpcYJFgXvDzg9RYXcNjKSY3QiwP8f9eHD8t4",
  "key2": "5JRCsmFr3r4WA9HHtV8296emgaDMJwYqXw4PZCadLr4cn8SMP8q6nJ7W5vhWV1ZnpBCqA845VpHm81Dr8RYjdEgi",
  "key3": "4XUnGALcYo51fb2dumXXZNX1LMYHzW9nubAfyWF5CzgsctUE8vY3ajXEv3gHrhAXTak3zZj1abFbL2kGjt5odL8t",
  "key4": "4n8aWq2tEPZgSheqMcmnWjYUs8VcwEfofKCR5EqLdAbrMPX9Xm8XQMGPMEon2eyagJf31NNJT49SZohtJCkYg7Xx",
  "key5": "28b4EJQwF74w964xEcVX83T8AZfwap6282WzecuP7RmdWM4TX9maidWTp3AhVNa9zVziaazJrcj2Xcg9ueu9ctoq",
  "key6": "5p1y7LQyy2UjuSQR6oe3MCUcUs75FQnoCaf5NHAZwfqbCEjiiJa1wH5ENftbG3YdJFqXCp5WRgeFhb3S55GSLoWr",
  "key7": "3eDV77pYRPJuBnCcyAHgGT4fTdLU9FFK3Zqx1a6L3RNFgmXS1nThQAYnhQ8FY4wQASFFvvE18JqwtRHmp6w6EEkc",
  "key8": "BdifXRqvkk414fh9g5gXjZ2VRpob3mnbN8CvUoH36uYaxZ5CCug4WCawGYgokGVauq5LLhqSErdeJU49ZeuL1Ww",
  "key9": "2V7DJRYNpkNsQjLC7VeHGwc173oEyvHDtjpWkAvmKdAZ8AaQe6cm8EJrfrK94BLXousoqzBCeX85TW2q2ywkvBSY",
  "key10": "6RRNWjG2QsuS6FLPKCBqjuWFLEHvUAd9auFm4B41webZHcsQSn25hrgud4CvQp2ejfKRKQL3oXBkkNregBVVudt",
  "key11": "5F5zP9H38bC9q6fyfSS2Cpm5NfdjDU9bNKutsyLt8Zng6A8qjDkgqLpgyNQqXC9ZnmpTuciAreSLsmaCR3Ed3RmZ",
  "key12": "2AFYKkbpXxFsQdMnxyrxpz3nzkuxRyjXjzMzQUdDWHiNxvPWwUQu7ti7Re5bcpqHnBjfuLCbqsAu6QcXayuj414B",
  "key13": "3nw3LZ5RG543foa7BLJqmxtLPLpp7Wki9vPh3WhbfGYG1vz68yBv1iEVnK2qj8JvMRuvD6x681BJzV77vMRTSyzL",
  "key14": "5fDUaAma3jUE88gaMKDfEALojAhp5gJ4az6ZwUQxvvrNGnW4DQDtJyYjpe6C6mEhBE3Gsnw9jyvQM36qvXPxg9n6",
  "key15": "598MYnxgGGDz2XNP3ABkN3zJt8orFb5vLbKTeMyXidxTxgjRagsHzXkcyBte6GN5g4nJu4CQ52gqHSCZPzdhAgwn",
  "key16": "35i5QjtUBHRKbNCQTHCVhhw2DUauMy9HYEXUSh5tkmmbjKzG4MxvneAE8FHzpikkTfUSH8f7hmcz15mrJSCeuxKJ",
  "key17": "39r22g8gRThjZYrx6CS2TqCJeUqP6rMZufHgL7DNv25D7tqyYqADryxucoixXrmN2sTpCHYRM6oAEdL2S2BnpqPf",
  "key18": "4fBAmTuDUFtNcqmwbyhAZvdfYTT7AzXFbeu1nAWW9WzTxhLqgMSUTHjVKedvTWQWv8gCs2cr7veW5jRTYKM8gGJX",
  "key19": "rrXVrbNDsRPACz6gk89jaKgKoE3KSDHZZ6SMfCziNooVQDp1kpMebNvb1K5bNfz1t5RjzvY5GWoyZEynQUKqj6C",
  "key20": "228JcPwDPrmgZy1FDkde24XveaNouEH1KmQDgXTaFWV1dDLJEccCKKTnbSantjhJvyfV4zu1MbiZFr87JBsa6Sdz",
  "key21": "23bsfDEXXSZcDLQRKPKLQPr7CPaBtQFUrmpDLHLe5FKwTygiBaBLNL9188DnuuB7Cv4uykHrs7zGBgjCzRbzvKNd",
  "key22": "41KH7jmsGidNFFomhjXXr54WiaEEKpoVjNhX81u45Letn7SquAGnVUgR63LZCLcd6yEJQwUnid3LDC91nR5VAr7E",
  "key23": "4h4XHCFWVFnia7bFwAyafHUZCLcFnG5htcVMKuBmGVdb5kcKGBZ6c8msEogJaxWjLAmvfsMNVKKLrRXLH7PYm8e",
  "key24": "5mSQu1VZeE4LyC2ob7G51jLHs6aoS6Ds1hwGy6e8Cb5dU6XH68KWGBeN61J5hQAaa5PkMdPC4NBuq2xqojEnaPXw",
  "key25": "5jj5qTz1beu3j1J3RdSQMiJqLxnn3LQGW2XEnFgFAr6x7z5twj6ZGkuLBEfhPTZk6YbFJQwsJp2T9S72R7FigQY",
  "key26": "3UruFvqM5NiH7h6RtTbyvuDps9R1rf4EJfKyNERj6ktuCQKeQkvgn8Zbiuw1QPQUTtpVGLcsy4cEZAb8rfrxWi2C",
  "key27": "3CPUT8stJT2mGH6fUcGeHZShBKzpzjGoLMjjBV7eqZ9fuK1Pb7QD3TY1qPidvaz7x575F3ymQrV6GdQ1rYtixnVL",
  "key28": "37KFdDQ2xXXzqyHUuL5yFi6HRBebeRKudw5QQssoasZYxBKLU5nFG4aKJJwPBtxZRrBRMAK3deqNk8i7WKpBS3Ra",
  "key29": "5kxuA6qNT9WYBmG8JYhrqNofeQaSHL9Kf9Yr9QXkTjdJ6Nz5SYJ75LVu5GW1z6PLrJK1JFvZEL7Yu9B37krerrNR",
  "key30": "jDRXSn2ZUPDkCJ1VFrchART3DWLm3dmw8C2M4MtufkZ55ztb3xPKTMfCVoMtHTnnabL1XCA8jdNv6g15KrtrQJi",
  "key31": "6yKXcKcP2uZqvGKSxTyWNuHk9H8o5ZJoszKkTVmjmBnCgvS8cksNh7vUL4Shc6uBpsALCei7D5zYTf6zSVoeqHD",
  "key32": "3tYtHvvch8QLF55EQfX8A3FDSJCMctUyGBiW9QTobz1buR7tWrCNff5SrBS5uRJXJN3QGE2Qau7JG1uYwZgkum5o",
  "key33": "2SPV6iMFWY7HEM3KFw2rBMkQgpWcGnU4CQr4PJ4uAkHfvwvuQEqyi6nJv9nJvkaS3sFHfqyU4XhW9fK1JADdC2Fc",
  "key34": "EGHPU6FKBUChvZ1dioFakd6ypP5bmQGVk3pd1yLEfo63aA2wfUokzwHa1HHFT6J8JEqDuF1dmUgVXDNksgnzYAR",
  "key35": "5qjufJF1ofzA6Dzbd49ZyFCvpT4Ra3ggD42Qhm8RoqVT34Pn5afYVSSJQJQT9qBHMcSyXvoRtfEkQjG9pewGvp6C",
  "key36": "e9D4Hi7JjSbaLpyNYXYRSSMxsQFhemt7CnMKp4umKpdSdg5JfLEogKUrWeKtL8FqPzi1WJ14xzjPCqXAjbzTNSf",
  "key37": "4XVNifqeXRNGzCCPNwgazpKG89sgmcdh5c5tKffXmo7mpyTtuX4eYM9ZJEq7tj5os1hHUq5nLjV3E7dTyqxxTuwz",
  "key38": "5iKTnSTrwbvHUtQjNc7QaJAeX5YHMg99xvLhHa4eAjnd1TYDP7ZrZYhGzN3TGfbaeQJwjEcNkkw3AhcsR8LQAqnr",
  "key39": "2iAQ2K3YrwQUpwQuHALAjdUpdVeVdtt4KRjWuAyh4mLTyjf8RENxRYFVh1RkwFP7f5s9tDEGPCACLBo4jz6etTQ2",
  "key40": "34osWmpPksfMEdUAfVy8kkNyjaJndu359J572RWPRizfDhjTWLJDu1kJwH9zYCa8yoAo2q8XxU1xZBtudbE9rziQ",
  "key41": "2q6z7kA8gueVnvm2jE7dGiUCVJH3yoGPWapGkysywyRYVBUjCAojvP1eSNTMdYWKSXH3R1CBbhAvguZv6bSprwVK",
  "key42": "2QyaCpj7madPECkj9RGXDToNx2pFwt3MDngnCPEkMfh4qAKf4onQQru1bGMTnR9XP1XhsbWi8N9uVX9hdvLnJgSe",
  "key43": "3vLPqJq5Yj639cBS7ZFSCxaqhitAL8MmTz3NRKwyY3sLqtrW9FHT36gSMwpfmtoZkUKwhkD6yAhLy1kCqqATm7Z7",
  "key44": "66fA4gjd8Hx944XtUiYc6vXASiiBf8G6d6zjnwEn671gKxcfBtR7n4LLQB6zaxu7n8UJXhT99Cv7UmqgmXEEfC6T",
  "key45": "4Q4Gg1HNFRbbkivjCz1zCTh4rBtci2U3yEYJ9ts86NmBmuQhGo5wzvn6sftYw3fXs6SC7yXGk6jcMYvKWJicQpJT",
  "key46": "5n953nroieeL69FubUgU42jsSLYUe6edrswsQ9yPmtCBgqiCKGEzbPNSDrhfCoob5hVeod3Yi8Bmoj3nFwmQpngu"
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
