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
    "3uacVYyRfkzFk7fiaybgha56ScyUsGhS89gWkWMENtBwzSoDicHGoqTKBwrACx2QqXZokg9JA4F89cv8iCHUZXxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C3uFW3L1b6DHUbeScx9wFsaZVPYMrRih1g2MGoGxehu3M6VwN4bXhcHuNfUa2DPBW43aNDVqZ39o85Fyh3ZyP5N",
  "key1": "5wxW53LJVikgeq55uGEgzqwLxVY4SRK2sNTG7KToUvYS8pxMeGEAbzursufZqkW2nYyyVpoLTo3qpeRNAKfVYLZX",
  "key2": "2so47wvNJ2Jteht2FtoLQq9SLjNeR5MGFj42EEdjyBdvVMT2NXMKijBDD3kR52TrLhZaownyprwwyKLDrfz4Eqxw",
  "key3": "5vgSv2HyvXfTudaJHb9i7pLCb3LyiDbL73213g1xJbPGDtxWqhWGEKbTGo2ENdWXPbCQfumsjrbdGrcbdUT8m1zk",
  "key4": "5M6nEwU3psrECAz3BnC8sizSEQ5WYPUEB6ERx7z4WxgRUDKicC9myp6fiYDoQvcdUbKvWyWiyM61zxTeiAgo4Neh",
  "key5": "4Kemi5iJcVG1kbzvPj95VAwkvi9Qr9jRqgdTfRjhWdGkj95aDNBVZbqj6LNzdsW5J7NcwLD3S8nb3abLqbVSF8S1",
  "key6": "2EVxApeYVC4qGmwGzo8cDa8PR3LLEvUg9fZ8ztxcHCWY9C4dkGNNrgxo3pmsHviQqn4j4di2fbLZjiSSRqaNT2at",
  "key7": "58BXAMnUNPC4DiSx9VWnFWXAqoVQ82aGefAYRQqoti6QRZtxQSscEYKd2i7Y3nztCgYy1ad2Cfkkyd4T4TVw7mjW",
  "key8": "5ykCP79dLmTsmBW9pzp6ZvTtTGxe57f2dVqx2vnZkvvT6y7RZMHYRkxF1sAvkQRecYwFkwXYouNDUwFuCSS7mrDa",
  "key9": "3MJSwbwKMsfM3HFbRueh1VhHSSA4ptfrnfkyT8zNPfEtmGcWfixddVhE3Qd5nVK8GFZCddqZjf7WhoHwJjfP7gwX",
  "key10": "k9aoXA8KkQpCUU1DijFJaY8czJFsXZgznPWyjbSA7qNFuaBzXL5cn92MN9Khg3pYuyDP4pKNc7z5z6b9tJKTWaB",
  "key11": "VRArGCrdG8EoApfn18WAXSqkqhTnynqsqY4nekMAMGSUjE9dk8iYD3yEfoLbPwjTtqHvnpiQtb2CzB2Ug79Whrq",
  "key12": "4S7DuyhnnvRn8nPCKrUAfjHKFXzemG5Kd9RA5RK4qmtJJECfEsoXDDiPWHt6dE92HVvLX2Hzv8DZUhg36pqeBw39",
  "key13": "2vDfCQrrQ2VYrCqfzZfCD4iAY22FsDsvhkrQjoMVLHLARNombybXjCy68gCB3SwQZPWWyr75x7kph15z92u1NHM4",
  "key14": "3NVhMoXa8Rt2nCViWvFFuP2d8bJCLJWhtbjVHjDSymDc7YHvLnHzd1v5MESFZBa48hwzE3NGp2dcZwS5CkYs1Zc1",
  "key15": "66EZCQMzeqXbPvxhfVkdFSjpucvYoyhRM2iwGocSCuMJktC7J8wwTPzrCmyL9Qonh2sXiTW1YUCnYRrfKUEfZbR5",
  "key16": "4P6ZiMHUT6DwAh3YrMP2QjENRmSeTzy51mWLHSfvgtYYfXGdWc2sKJBv2NRToghSiGup7AJHtjdEAHQyvKwVScmw",
  "key17": "3JcPEYwjdcJ4Zqbb8LN8eV1ozhXi3GF4W5Z3R1s4CkJu21958F5sXa27H6ojEuMYXgpXxHFQStCwAFhHwGnaaTeG",
  "key18": "5zghtVTg2CEw3rvpNiz1LtVgJgKT3sHYHfYM6czRAqJJnUijrM7ThZz2DbPJcT5gHvC5D1wR2zZzPnztCw16piBS",
  "key19": "2AtdTY9riEFLsqMeQFyuuk785HrksCYFPcQHBvbmD2KbnFmw2dPAuHnoAzjHEjBQdzXRHUNH8fSFcqNGtgkVk78x",
  "key20": "2P2ohPcExGKmFYFfC3ndwMFEXQuTHo7S8adSwggXpzGQ1unwQfEEoFbKcdrZULbP5WVQNScimudTYpwCwP7eXYya",
  "key21": "4qz4x6Qp6DqxEwzqzNCmRx9rDNHyWgq3XN5y1eDGLVh7NH2vDSK59gud1mAKjWAHpDQggfE6cZCo7sEwUaLp3WFf",
  "key22": "4WV8VhjTk82F3SU6XXXfKgkCUf5DmWPZi4eJuL1AyL6WLXbGaxd1pVTVp8Hd6VMvEw4fbiiwfjf3mxqaSzAsA8bo",
  "key23": "5yhEvm63hDypywjkx4JWSQBiBvDEGVUEyqvyTwrGrKHMPdQZjg7y1AqNTnAcTG3gQ6cM8wu7QhnBRN6vfogHnvBc",
  "key24": "2VMMK8XJLfTZvYJDKL9jAPRiYkZqySJ569dVjoS8agYx2tapnJNwah7T3YKwRboAsFAmtY2Vtr7P7U21wNGB8h3x",
  "key25": "5GhomvechW5Za4Xue2n6DFMKg1GgQeDGjMeHwVcHXK5bsc2sutzYxF8e6FLpt3cYxSfgMfX8pMWQNjG2jgvvHr3f",
  "key26": "2KwZ3pZeFFyCFMgUaGxcHYnsm1YsoyLAfKiScwctK5qS5jui9s8NhVhRi4bfyWaXgURhUWbrwCBsqpgBjLa8VVDg",
  "key27": "4BmaioVHxh4NL7vvQmARW5aFBMrvqKShxGrt5WxQbx8SNnbEk1JjU8DcJsbvW7Kp1yMP6C3ZXTVc7idw9w6heMZN",
  "key28": "2twoxMTViKqJofrseJji2fU6mSeFYFoTY5stGcDrqEMb95pUcsz573WX4Zepx5o7mJ2se8tAe8SWt5rRtLJ6SiFE",
  "key29": "2B9wihreKPsmeACBEmCWXbpUkoRuKP8MfyUWkWSoAoKZnnWaM4qzdaKCPqdSXmaB4AL9GFpzoPDh744VnFUUoSBf",
  "key30": "3pEnzYd7VzghgXt3DhfqLPoPnjVyjaRLGrGzy9rQZxLMQMXHGQB7JjCdhP4oR6SUMYard67LWEimUWbcxS651xxz",
  "key31": "4n2b4YfnYbmAJ3zTXyZh4eTpppxxLhgUc98wESfJKvZQgDgY2cHKxGeFLpZXaxw7tp47fDv1VQYoddEpBjGGtrTP",
  "key32": "dbuaWyYus7uKRN7paEdpnooTsND3EqCV16jZBERwmcrYDQLJyG3Zo6wxDUrsa3DeMi366q9GD6dwgQPzH7YTs2h",
  "key33": "3ZRhCpNf1c2kJdCthfQ5MNRHbCP1d2GkbX7XWnLwQQxeDZ9zHbu2PViSSamgfsj4MmPu6ukTeb7Lcppm6dMQxypL",
  "key34": "gc9XAHpvhCrC7ryc5Yr1Ydugx3YqYMDBheWnubii1hsgxbUuJgNiHQYcDKc2Lcn6q9ePYCVx7NpLGU7xPz8oMkv",
  "key35": "2HTmN5MXmaK7yA5atuSSSDmxqVA979ozUs92qXKmap9SGfWFvYiRNmvYxuLQ86RHHFdRES9ZWgENiwHWp2kug84d",
  "key36": "5xwYZ7dd8EeVRctC1btuzU6mMoKx5yMdGRgswfMayCgT82dKWHYa4MKiyV34VaVWL4UfUpjfnux8gLMyb58idckb",
  "key37": "4gy8FJHdJR41tMLLn5rTxHCrHPmoc27Bwt2sZCxV9kK2dfuXEuFJhLxvbiqcisZA3teF5A3pxP9KijkAA7g1aQYn",
  "key38": "2F2JTYt5hpiBCcmc4taQgbNtPqaCrwcmzStDR8GNn6eYdxmhPN2QB2iEqkLzN64PWCV4Upbyv2RSTfwTULu82XPT",
  "key39": "5dSf8Rcp2QCoM9g7d5VpKgwshrTXAmJE68VsPNeokNbtKt1s74LtRR4EHyCqQt9F5V51gKUZbWMJkbi46JUrREQj",
  "key40": "5CAxcM472ZdB4hyAXKmU4woymGP4mnZFzZkmT9JAsTrq9Y5jMinQfiY5mweAinR3tCkx6Cay18uVePfGYuFGdE97",
  "key41": "dSKrm698iC5vjPwSoCdt8zUYYKtuYdZeCY4CeAmjVBo4gh5fBNNS8MLVuyRCZm4JcGfLC32eXCsdGFAZ5aNjkpi",
  "key42": "FWFVzxLpnNqqW2V1BQKdb6aCws41D2bvDCykyALkeb6d9bZUTu6wKqF1NTTawHqa1QpJhFqLLspN5u22XXfrhVQ",
  "key43": "3yQtUhbzva7joo2a4sR84fMinQRRdN14mNFexeC4opuujKDZiQ418fowY2imA7QK6wAu9vKuqnBZMYmzGzG9VAxn",
  "key44": "4JFZUJGxvtJx6EWhiMj2KDhv4KC5KdAfp8XMEcsvhTTg1rCBdsG8C2NMQeHBeRZGPJZDBWbt6Wz6moneD1GQBGnh",
  "key45": "5LTwpmnCKj1WLS1PVPFXeXcrszk6g4P3b9JXKkDmwTPSVSUzjs6acSErvX2gzst3UozFCHDYEnFPTiA1wyZVU2zY",
  "key46": "3LA87EfSJhxV3gg4KRMHYiBsme73dD9nyTq6uZgodZUsJu7UaKjXNCnb3R6Thv9jjHSSieQLjZzuKma17qLtMXvZ",
  "key47": "2AJzSdSrutbunSCi4R4141X6VXEuW5oJ2sGpkk29JanE19NA15fJuTtmcwVT4mCfWe8VwYe4JcvXNrnmFiDdLgYq"
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
