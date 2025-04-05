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
    "5wsjZG2AtPyFwF1MrPTz8dnb8SAWgdpuFZCb51tcErJCuWZ5NrPeA2eDyyB78R2j6TMUA7wMZZHo2peuDpNniACR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ei6Ucemcd4P5ehwHW2rJsMQasHEndigFegdqGaLPKb2Y2VQPRoX5Bkmy2XjL1pf76ykU9Ry4HgAfZ4CTQYp4eev",
  "key1": "3zar4PzChdyKvcY2D5Uen3E75cK2ovhQocEJF6eqQ9tKiYs925g9CvKwoXtHji4hrsuNkGAK98LooJ9fgY7oTmu",
  "key2": "2v8E8eNARwt4V58kZJcgDYw1P6LyJEBGyQ1ff6kf7LWERH7yUZboMaPqg9ZBRQDh9QvTTdawCpzYyvn1ow5yukKt",
  "key3": "5CgnP5r8WNn7URroBAswW6VNDv1MEcWN1coDkaUe4nE4Vf5riREsnhY5GNar8iBD3kqvrXjcceHzwxmmbZSKLUEF",
  "key4": "5nux1CNrq2LWtxWkYDJC3n165xrk38YQGDHZbMRGZCX3J2qCqubRTMW2rc7PqLkAjamYCn1JVrXJhB9tFh9zTqJQ",
  "key5": "2yaBejTKf5cYTQACfWaWpWShfutb9m1xjm7TmCsi5enZBkCT6crwDW3PvBqVcWhJZk9uNv45NdfsbAVzDzcjczmm",
  "key6": "a2TbaQSRwiaSBunLtqziLsjXFE7RDzMFxLAAEBBEDUYBwT5FUPPvWfAzUatnGk96ePgdgcWL3SXBdELta9A53t1",
  "key7": "4u1nzu6JBa9ffwFkHG7Wz4Qryjtujs7XPNmn7a6a95ohVr9U5NSHjDhbYdxQ8HbFc9UVSex5qhCLL2LNaopJvP6Z",
  "key8": "3j6KZC72PKYN8JXQ5N9QVBpzRdS7FM44PAXb5A3P54rZnebdeYqMxhTTm6jb9nCCz7zRXaNuJueXEpovjnx89LjR",
  "key9": "2rTtWqJ2vp7fqMMgdWbjBqBiETQKpDPCF2RneyiusKSAnh8VkZQd2RzdpFNFUQb11vNKSs3kyQjcaQsDdrH5jSS1",
  "key10": "o7VkAdKF7yAeEY4jLJCdG8Esn1anUTbYDk4QbE73nGeYooZszkF8MbeAhpptHP722tpHNuyryZR2ShLc5DgMJGx",
  "key11": "4xRjurzp8KH8foGkFkfKNFexrEiNK2o91rzd2zzKbj8GwtL58WuSdpyN1oL5CJTcoF7j5AS15DLzoRQiGDisYv6m",
  "key12": "3toiGSnxknena8xDahaowLR6VQXCWMKHbLvTWk5KeFBkcfQhp8o8koiHfoGn2XUJpGghhPHD7sQWrhPpUxY7nECb",
  "key13": "2xhKPXXsESsHvfrMYvPUjQrZFkqgP4mwfcmKvGeZ7bNCxTnFkNpRwjj4D54y9F3AePvdBbn7KoyJkG6hPXKg2RJG",
  "key14": "2v1xj8gVntLbKmLeL5PDE5zPtFfb6E6Zz6zgjVk85odFfKHn8SjcmPREc65ymnjYgEqvUra5c3ZFqY1oXMmUNLBZ",
  "key15": "5nQucTbc47YeGkJs6rLd9TtJVGQBrtfNHNacqeBfDNkCQYDHApfQjoTFLnPxNYPZ9L3fGt5gjBQpf1utLQ6usLZZ",
  "key16": "4ntzZBTCYG6mRBbzsvFmQm8aUxjEVcgM6QBW59557HGf7sDaC1rjdEidVoB7kFkpkce6ZmN8YKRXw2P4RiUuc3f",
  "key17": "2RUJMtcm5uTEUFssT15uEiXYLdLD1bS6ogzczWjj4HtD1S4phCJuDAG6cWoYr1Xs6znu3DjEWLCz5jai8s5yjkz2",
  "key18": "3GJfCLof3er1aPSTvH6SAGRmtZYLCWAT6raHRwFW5fUXuAB6QKAZfKSJJTx9hVg88SqNCZFwen5W1YjNuFmK4dUH",
  "key19": "ijKJpbJgDhkDKayp9bjt93ZVfeSnGJYUP4uLoiQ4toVz1yNYoCPik78ZuAGYRWLpSBCyt17ZMjMKV6WZbpxMS8m",
  "key20": "4d5kBSLvMcMQKkdkarXE4avxAw82tmTQxQjQZd2JcCVF5zwjfLFe9w6gUsmZG496ZZnkPsm4aecKEqM2DjHqrD9e",
  "key21": "65eYHDvu5aKnCvxS6ijfZ84nWg8WjecfScyTWfapyQ4X6AszTYcWHpH3bVVaMCJN2maMfcPm8YvcXSZ7or5naLoM",
  "key22": "3PNvHnuRgqGN3cCpQgY3kUk9YGbGkrTcdunPV2a68UsSx5nmiyAvhymTy5mrrhL3ec9HpvkJyzvSPcJUSUHKj3sQ",
  "key23": "5rqcjj4nUuE9vCu83QrVjgZVavt6wEKydJTisnSqjzzdgEWE1uMUUk99o9nL7UBHjgwEDN3k554KuTALJmm1eXSv",
  "key24": "Djc5vpJHpKcJ9yiTcTcqh6hbU2ekiKLKDkrMC1oLtUvzGy8KQaHoEPxtS7tvnyoPBRsiJPeEy6nU2LWcgME81pR",
  "key25": "27nmCa132w6dUbhx6sNHPXt6PP12jVi2VftrxXsgw7WUx8zeiC5aUAnExUeArgfzPHqM442JbsuxbPSq2TiQkxP7",
  "key26": "SKVVjRt9AxcpHGn6JEkkZfnSi9KqBKMQHJ4Uf4U5m2or87x625e8tvzgfBUwktHB2a5UePhxTvVxUpr7A2z7Lte",
  "key27": "64U8GyAtqgnuCKVDjmMEKeSPr9cWaahp8WrCtNfoixkFLny62qnDq7dzd7E5Zyzi5aHF5jHkKVE8AM3bzc1hVEt2",
  "key28": "5juFcGwdGJTrGqBKTmXtiKpm4HAiUE38fwSSpLCfgiWrtbQbaeFeFKkYjZK33W6h5qXvaCQihqoGQQ26BXU31VpJ",
  "key29": "3kL6p9Aum5i1eFXFHxsH5uv7HCP9pas6LLjyDiVVwDoTYT8WFKXWFudGPmghVyAEnuUiy6tK1dgrxv8gNbCnKb8z",
  "key30": "3ZMoGExUfcmnf1brwgXYizq7LFW3vfySRDYVX6dkd27xGPZMwHHR5ekLKTAj2PBdeGQeP14z4Ka34VK154rdHBVz",
  "key31": "3FNxMkcHoSWPc58NjWrC8fYH6kbTuTdJSznKV2fqr62zoMN4yKPziMqKcJ69w6HMK6WrEiLcaeaLZyDwzs7R5x9M",
  "key32": "3o8xP2Xy3qQgivH9P17Ai5vizwjVPWA1tQSijfNZjCwUvUuueR5rWQK3hk1EXq2fYBf1GAikCXy81KHfNphEmSSY",
  "key33": "3ZBDTEFSdnthom5H4B1HbpP6U82ajxRfxKYNzYQv7UtmvQhDpNcLQ1yL5n2Yhfi3DxRMiZUjJrTypZKfioGes3HV",
  "key34": "4gqZcN5s8LkSiJWyxgGRkqJn6Qr6KDHRBwpAWS753LfSnmuoPoTMHa1KasNLnBRr4RXtqoLuBVawuxWd3SUEMy7E",
  "key35": "3MEp9dajMerN6ziKYBWiu9BLt9GBPZrJicDxEFXVr7sf5bGaXDSM2eLeaEZGbc2Qoj3tgL2Dkgxmw1JDMSAgfb1o",
  "key36": "2epBd9PG1a41mSVMnfH4rwMCUsiBcfw9kRMjoYQvuLva42VGpdSqiECA1RVy1aZXfdaNMY2B6SHSKLPMEgaRVvZH",
  "key37": "5uDqbQvFAFrTrjws6GzqUPB1mbXatqgAk8tfgsfowja1R7qZJMoB3V2T2yGYSwjHWJfyRbBrRVKf4PS1dREojzGo",
  "key38": "3R5nKhAUZTxtZXSZMzu9fzKEWDYB9389VXTn9bKdBj8eGEa31nVfVTpHrhFtbujmfPxxz46iqfaq5BMDf7iR4HDN",
  "key39": "63eTsjeWXTzfsgh6JfRj2QkSL1GjUnApDfsvUxxrDQXoqAfJ4nsrcXWaLkLBJFZyVMtzNwCxRp1Gs1m2kSW9aZfz",
  "key40": "4XjhftAXJsMNwmnkdUt4oWvVPirjRGvd8DhmJjHTiFG3pC7VX9aZF5JFzBPMGPNZGJChcS8NmoLQTw4gd2pP8Ypr",
  "key41": "21AKmqWQLfh8Nej967Q1ZapCDX4HPCYD1bE6QLBxW4wvHJSdqcgUQtdeHWjnuMZh6ZT223ns1aFkYyXd8aQWm4jt",
  "key42": "43MTd9kMXpBkueASzcjeFcghykKhAFmF1V3xA6bW2b53St3LYM7rbusB8GqsaKXDjPSob1kNtbbapKdQzowWzP8V",
  "key43": "4M5YWZbCQu9T19Tiwqt5kn9Mr23pLnYMxFtgnaGMtYQQsnS7Q3v9MsiUiTyPMyPj2YFKGzdMoQSZfjtog284qUDu",
  "key44": "4PdgH69w59TV4uUeJhzWZS5vVAqr7vVuqXQ9xn2qLEXoHq6Hxf5eNi4zdY59GtLzKZsDYcZgj9KaonJ2wBrF3YJC",
  "key45": "DgamzyWTFjRtdzvjLEjHNGQXD2ajqY6hqYzPv5k73mwxRM6dof5XruhkbfjWymiPjhm6Eo6itUwtijatsYWjD2P",
  "key46": "3p9qiRnGvfBXuqxdrLFjqejXThn3Zthvyu5n2sZhseTk19xzP85gMeGgok2Mqmr5eJ7b6w3QSvW4PFZSTJvqJhrR"
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
