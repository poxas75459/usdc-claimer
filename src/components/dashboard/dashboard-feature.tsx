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
    "4aGSRNFbxYU64NkXaVPCYCkQuAHTBH1ozGTNhJTFvXBG8zdpK1p4JA3NVY3RcyxX5omwL1EyBDxeqiA5WVh7SNmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iiMUd2gZhQmmEZBfvzN6TgXtXVFNph8LoPdLaKLaQbe9kFNHG1YXPPSkioUnY8PDor5Hznde9ozDDWosADUD8ny",
  "key1": "2vXeuzyfP41ZCss98KuTHAy2CYVqTPFKCyLG4ZnZsCKuVhcR26ma6SXuiGKnDfAD4pr7JVyXC88hnhCDMyaEGede",
  "key2": "4fsSuxPe7yU1DYinaWcsUMcCKBHGyYHNaPgyMu21vge2EUpfMcsYDTprUhgcnrnSawjyMRqN8uHpxrRSnH6Edc9H",
  "key3": "5FVWnpDp3vPDxEr9ZppjaBfaGgkpSdQTPg9ypE6C3KJGuVyX16mhqm8R8y8LWPw8mZCLAPX5n3xrcDK5awxLLy7m",
  "key4": "4abzM742r1P4A2qoSmPK3kUWKfb32rpz5E2v4S3f9aaNBVhqAWu42GhyUSGjDiyQrWjp4DBSJpr2RSbWYRpe3v7g",
  "key5": "5a6EPaPvxE4ZUju4iVkBLdx2FNKjUCiTpBPCHVtPxSfRbME4J2Q4s7hF9WQs3CWgnvDL2ydrhS4pxmdvNPnEynHL",
  "key6": "374dHGY9iYJ2XSXdT9XE6VX9vazeXmzDQaGcvzuy8rc93iQi7SA9sV3UEFwqN9qR2Mg4QaWLF41xhoPw9v338f5R",
  "key7": "5DVNyziEU4fDcNVCr9LuAVnYEZ5LvLnw17QkrtzFDk9ojrYmx5R3Le1nThbZF1U2yER9QDSkTKKMwRbErtg8mFZb",
  "key8": "4L4T8obRPDTNbhDpB3uLzDGwtuqcY5FTfTmV5desk9fgr22i2Ky7tSFaF7SiVXo4zy6cDxZr1vKLox1iZuzUwfxQ",
  "key9": "5FDGrf4BVVCXXKwkm8ntatgiPc35ZFrtPGeXhgRp13Wx9SmDoXJnmgeTU7csVrUEkXzWL92efoaWz3q2G1VJkE7p",
  "key10": "4Qp9Pahpv3dtc2z3ndhYBbLffH1M1epJxXKcnQkzxJgeiUUZB4W1UJk7b666MdwYwgMJxenYi3b8HydyGqPAiw17",
  "key11": "3mBZDJyeBMa6PnCB7Yy5HnA58D1uUJ147KTDYCABqeEK9kAvR9Gwppcat2y8yhx3jHK6CfkXXEEeyb7p7qCpGNee",
  "key12": "5pHmNsahNYwHvut45DxXWn55PogpQwR1ka8sY2eDHKY9TXbcAiVr6XSUACbr9dbfEpme4hWTq6cTCRkCxRr72maY",
  "key13": "3xjMpzegNKaha35PqLspuznUbWUAxycMS1yMoe8Y1C2tpvLAp859BVVWAgVpfEd4JK9hUWZmWTKUy81HQA4tJvkd",
  "key14": "5brrryxqQfPqoMavxWUMP1KMNY8Ybjn48RbTv8eAj53YwyEU9vStii9rTkktBVoLhd8Ux9zrydsAFXMUbr3MToG7",
  "key15": "2fVxE6SAb1NUsaAEfi1H8QK8ajkUDzjfPnCw765WuJWWCU7H3K7uKgJTFgpWZLwTge7zPWSPGbxS58si12RXZwND",
  "key16": "2oYDqW3S2sVGwp4EEVSay7vEXkLWEiWQCxbYcSNahsyXD7ysjdxqGfWeTUoVKwTTd4hcsuyhnEHv1efoEnvxWmz2",
  "key17": "ET2Evvkys8hZWUfZRnEPFxBPuHSqYGknCGU5di84w3H26ueeXMZRFLtrgQjFVLjQCWPESarsiv6zM8AipywqT4m",
  "key18": "4bYp4yxmjWi7sTTwe56CJacxqo7ntRnKanyJpbeBE4fkynSMDQAbZDyokitXiyFCcVyjXX8QQL4VMRXR1NPvBdrg",
  "key19": "4UqmrMQiRyPmACGQTKwEUUzryozQuJyfeb7eqtZJXFntUoV7uWoPPFUpHHeyhZgZK9JZqZ8Ef1LRJqagSc7FBveo",
  "key20": "43FLX3ubFrstEtfWDzjBxHnRw8kk8cGuKWZYAz3UL6gCAwz8i3tR7qvA1y13vr5Nu6vqqs8mJwAhdGwmRWWthShw",
  "key21": "4PFr1E3uqALbJKyCSziLTupfbCVFUZJso2UkTGYE3AWaqYLtuvDf6z8cfTMWMruuwHfy2Jj21pp4GWvZAUYWwfZG",
  "key22": "3GutqX66F8ar82G4yBgnv4oNQG3aLuhf2gi4uadqJn6jso6jpHVN9LxKoN7JBMz24Vv8e5UH8KPmnTwa2KPpQ3Y",
  "key23": "4kD6VXcPTA5niEidXzAaHkbBvAnpxoAh8PAGic2V9TdfGE4DU4ThyE8vQoyaSfuRQwXBkQd5PqYiKUUYkrT7CT2v",
  "key24": "5X4mXhppjZPrthT3QhWUM8gmMK4B6qfzrEcpvByWbTfv9z5az6YdeHeT5ogb5V7Ajeq45NriUFtAQUpTPVkgY5ty",
  "key25": "4X3KS2YLB1Bwuw2zwyYV2abyq3jmxkMUXqHuXHaC1C7fY9Xq8sNaasWtoG2swVMXYjvWxJ2s2rcvGnYTtMWVXZMN",
  "key26": "2RXKN57wUKXVX82Ds1RvdCbCyhSomUBthkEvDQUfyr8CjFAwmSnVb1jGUucSN2cxC9JWDNaqoXnW2cHoNvkV8x8Y",
  "key27": "24niwssHrHkXsk6FYV9fWuVhK8Y7XMa2iewKsdRd69rCnbv9S8fMuBd8RkJjk46U9bB5QW3pkPxPkQTngV9bTJpZ",
  "key28": "3Zabd4DCnZZ8YdgVPcmiCSuGemy1Uy7CuEAYSjMWHi1irW6ZBNKSYSGUtbXp6TJ5mREwvs5EZ2bSHLdZb2Z2M4Pp",
  "key29": "4pvsMhHg9ndEppFfdChDCgGGA43kJ7GYVUbuiuL5WY14UzL3ApVQTLYtFExprz7ZNgs1iHjEcd6gLuqiBk1zmvfP",
  "key30": "2xo4EeRzy29cvtwYKVfaaqVQgFoPAzGgfHqoortoeWtLmrUfY9HedVo98Zxm8nHwrS2ZJFKeFi6A6m5VXurAXjdB",
  "key31": "914Z6sKXEDn65FxiFknUf11Y4KKC7zLQAjhfzQJf4r5evmBHftXx9HxM6n41nrkBF7VK65JrhYCcm2WZcUgMDWq",
  "key32": "2DCgJrWTvccK3gJAqNmsdMQgkhzrpkRXmHAZunJnCZvnFDby4KZrb9WUVg1z7G8ndeKZVy7CbzGHPjNV8zbGCCcJ",
  "key33": "5Ee2514vAkhjN8aYJNvLdD13sruqQ1JsCwQXR1hNkT3uA2MHWQwtx6ivByXA1L26oQEE8PyC4ChY9XW5Cei2ABcC",
  "key34": "5efp9Y9Hy5XvNkNVSwxRrYohPM4EryXBdQ3jogrYoQy675o7fEXcCgpLUF11UsqpQWdqSyLWAbjpu3ZdmMvs7aW",
  "key35": "5gATsK37jGjxV8oCuZZKFFna6MTT23ZTqorQ8QFh7yvH1EDAdq6mZ6hkMxQ3MTHAWeqQNL3wmewKQnuCKtjXfhNx",
  "key36": "vRdGU2UyeSCh7jxW6ntRuH9QUKEtJtMwHk1CMwMFUXSZX9drz1KxUwaoNa98iAXLc47hUZH6eeSPLQMKW1xPXaD",
  "key37": "3j9ghfpgzGEnP39LaiE1KG4iCe7bL18CGprZD1yeNeuTv9B13c2rYxG44DzEwBKkNwqdZwxYs4YeLtLW63qDfAur",
  "key38": "5Kpw7P6TgTqZ5R54QuxX4LyvUWgPENnGfttvXXvHj9hAsNpL8NZVrKivojNxEj7mjREdinxtHBAw5yJVF8pzAKoR",
  "key39": "3h919QKLxEpyKgvhQ6iGApUBSMQ6fNMz5oePKnyoqyJtwaA54sX6ps9D6rdeJ1TDnsWkT6z1GkEHPsQY1RUaYYD6",
  "key40": "3cpoYdnKVk15iUxpz1E3pf4xgLTfsgurAH9GPCZCMvVh7HATrxQL2YB7rYutY6kEwZnZn8Pr2RXVFf5Ktozjgyc4",
  "key41": "5jtRV4dVP5HZu5DKN4yBVfgQhShZWeH3FDPgVAWpdQwBMQGX2mtjmKavnksc8U7X2UFXSqBk4gLhJTza1T4WyE1T",
  "key42": "4PWaDj6jgiGX7DjwgPfRMDEwDXvfsiMZfHq7H1sH1jvfN422igPzpteShTdh3mgWd51s9AXeUPhMitUPxGYthjEf",
  "key43": "5HTbkxKZEoqS2CfkJ1v81isCTTG9Co54bmUgKsk7s4pUbGZA1H9oVRUHhTsrPKftywEedfWvyFhRLENvj2ko1ztt",
  "key44": "BMWDp7iUfJLXNsGyLnjGfmaGr83Kw7Z3i5XDL3ZUb25pfgXNFk6aaZvGdGcbqRPCjmeBP8jDuKRZhFwK2fBwHu8",
  "key45": "4adEPgF3KfxWkZN6KRhHwBgVkZicbE6AbFP7gkCgJk8whjjsnzoQWumqsDJBsmTh6wqV1btPLQjJAkW2NgdKm191",
  "key46": "5VKUSBunznnCYti8pqKe1MiJrQmGJ35ThAqQ4RBsk9FZN1ZcgGSfaFNwwQHxF8MriE3ax9kReMwrSkFZcm9kPGrC",
  "key47": "4WgZgW2nDgh9xAmtyE8ctQ5CzaBpLwF7zVCeP54s2Awp2Eu6H4DRw96r3GHNLx55QnmfBbtYawcR7MeBqyCX9xbT",
  "key48": "2GtfeWUh68fLmfXuvYA1eGJUVHxZ8WxYt6qRN7mbYFMng95NHMf4RefsWMMLZwNeq5hHMcpnbg5aD739Qk5KfZx5"
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
