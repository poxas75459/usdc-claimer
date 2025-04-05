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
    "28A5WRibsi5Pkqj3ZH1m2JM8mrJxjKXmuCbqpXhB2UFdncM266UTJruDcVJD9LNd8EwXLbqMw3b2vYYJWPbfhC8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AWGDGGfQ2kd2KP63jEsDQRnLL5qYsu37Sw4KS2DxShZWVkBQThtf2AoLk4tVwZSfCFRGbJLxamcRBVyXm2YzDoj",
  "key1": "3CkAgNgXPtfaS5xnekc5nsFCkLVCeLZFqEYfnx6uRFLJaEZr54ryuY63GcfsKoAtvdaAGHXZ2sKg2C6N2F72Wve7",
  "key2": "zhJTmR9xiXrk2w9XdTAJihRVe6PiA3LtftYp4uGrj9ssk1aNKEiTHeNTHYFAQnZDZB9eXHPriNTtgZd2zPgNDyJ",
  "key3": "bBEZaZjEq8QmXfPLqWcCNUJrkcAttiWA8RdxX2BYZscvbB36pSFvjYhCHzXUKhRLfVjwuAqabpPx8x3Adigy1MX",
  "key4": "4ySKUxQfFsEjR8KtVVL9MjmiDHeWZ2cVmKpSVbUo2ww9a3TyZR2LMLbmugWzgkCacAY8PfT7mEy8kvPmBmgFrepp",
  "key5": "3amqrzdB2vcvUTd5FpB5ez1ZkG6VUVWfbbVU7RonZz7XHuKzeqCSwxMyhjDg1pAE2jHuXa9KuuNbXCUPE5v9cSGJ",
  "key6": "W4vxMdr5XAG9BhyiosXxjHFMseZkbBBSoqhUNMENdT9dGUEuDnPBPeJCiPbAfaSqPBur6132rwRbBiVCzZE8ese",
  "key7": "3oGgnXwk94LbeUr4VNLitVkvNJp6awAnu1QEo3dFeK3y2wjdUy5Vp6LhGp273WwnXMSP6ppvNP6m3TM7ytCaMtw3",
  "key8": "5VFKrUxiyHvR9SheMYZkMUvuAGAtdzV7yygWXuybqP3nyS5oHB61XYkW3yHcF4PJLrRiefzCZoHYhugXtnkpQ7Na",
  "key9": "4SLNBrhnF3iYuNtPAfcytwXxax4UUxZVCuNrhk6ttNkAkvBJZRq9MMJ5zw22WmzVBehrdCDDrAxuePSUof7mbvRU",
  "key10": "4nfVULAVYPmwXFQruJHa1vJd8vt2kMnz6AVeReN9PFE96uACDVhwsS7CPdsjyfk62VBX5DcTtJ6TBPno6Gqab6k7",
  "key11": "5ijt1zV1dboTdNtrX5XtoSa86u9oGwQmF4AaWW1nCf4DmjqrtCc3FubsGoDZ61mBtTxcLsEvFNYCy9PqTbngeW6T",
  "key12": "3TNPG6dx93MDRWJcQZFP9vxVD1Mrpzcjd4KLYBVYvZ4hxQLgKK23V66mY169Nuk4XzS2KpymNbCPxzfeNp7jSZ7F",
  "key13": "5LdWRan3Ek4y3WovHsx8aASzRCaDqYTGe19FjXvZNhQxLkRpFkdCCefGDZnxWNjUcYSjp552EiiV8cX9y7246mE3",
  "key14": "4n8n5oxm4KyQuE3MRzK34DUZmWxefQAa1yQBjUkhkhDZougsrNX4LBosWYsfFXuDHK6KNvvdsYuhkE61Px1AMSH2",
  "key15": "2Aie4NohNeABdzk4u1fzYctw7QAmdrGEjZEsdnefSk9axbvnJVUKZb15UgPvzLvsdKurQGZcr3d3NXMAQj7JZADP",
  "key16": "KRUpeP8WcMvo3GSxzQsvjjvnKWLs35XjAGfY2Bor1ZhZEorqYK68Q2z36C3QArRUxozqakiTMXq8qMapPs3pvjc",
  "key17": "29eQ22keqn6mxLh94TdvxKmFG3Wn6oTrrHzXda9sQPVLpjBbXr85xSSNHkfqnEZG8JaqFqaw8ftesTMQarmanLDE",
  "key18": "3o1qe7EDMWyRUTZrmJp7BF6c49vRVU58GKaZ77nK9kJmLtQcPqSLbeA5BRy3XEVo2WbKMuBPTpmTW8tndqCAsPg",
  "key19": "2uzvw8icMd9GZbqvNCWfDwmGnjY6Cs2paB36pgdHvFUHJDXrZkwx3XtYpNhkxcRj71xdD8QxA5ka5uDaHy36odvz",
  "key20": "ZdDjMYJ4RBL1EhoQcwMR6RxkjByVdLWzh6Yq6sxiwTkUfaP6L2sCmWdACepppeEEYAqbhvPWVgCQYRdqHFXLp6G",
  "key21": "67pcKmN5NuhT2EtGsqBzWuXnTbfuRykH851bdrESRyWhHMJoHoAxiJuxHkb7BWztGkh7PZoxs53kUZWUTPdvfxx3",
  "key22": "4p4eNb2U5tBgKk33TwF33VggSMtaTpQrtNwzFfJpgSQD3f4KjENdhBmHVgDZfUvaaoD3LVNtrJ2QL7pjz5cLbnGz",
  "key23": "d4P3FHyW9Xc7fYAekUUDPgiET3o9bqWv6scawNEjXArrYBTgiLW4iHT2g9A7T92wvfb2z4YSfrh6N7CDpLRaLY3",
  "key24": "hUgsXH2UMzq8ck3389ZLAk91kZNJ6Fw3rn9Lpx2KeyXydqQWdpvVVdgCnHtj6oJVkFXd79dEW5kFwvRKKFjSknX",
  "key25": "5HsBMh6XFLPJ9AqwoWpyNWkWBxLtK39dJ98bP9uEHMDLm11FRH1ShARCUN5uauZfQpPHNzHiWZLb95a7n7vPKUPn",
  "key26": "2yV21UVysyZsybHdkRaSZE16cjD6BukaYxqhLKvif2kQdqDzuwpqeW6vSsajwam16TF6pkKsc8mJKcitMfbpLsP4",
  "key27": "4TedA3dU62fagfXVkyc4pwL3RNpr2UVhGP5g8jAFw2EdfAagAqW9AfmzuDaW4TfifNNTrJ8bRo5PCNUKL6EUv66Y",
  "key28": "2H7LCS2CnRHTr53BERy4KEhaAzuHtMoR7Jb68DqVw4bdRj7fGquu4y9VA9tafyMBYKrsS1X4u5By7DZhbieEqnTw",
  "key29": "31x6ecvEGu6L25ZnzJbhZiLY8xMj1m9MpTYVgEZkpLFY4dzkHVbuxLQgfQidenyjQL4uq2pfmeqRiNsL9jU7iqHx",
  "key30": "4KDUKWNoc4NGVufCwnQw4XeiWFUY16vgs6qs985MG4rqhmXZWxtQCkov5tYrWT2hWCqs3cVgF35TPzuv2auZ24oM",
  "key31": "2xfJittRqR5FQJ8RiGxD1ZA6HG9CZkd4QfmEdvMeN398nozTJzJKUKsrdUYZbHLgz6Cyc2Nfj2Furm6F9nd3woU1",
  "key32": "549pP1EjriEZdZrzbpfsQNNh9XiH7ZVQgZd1bfFcgCpwUvNc8NgovwgyPfvA1UHdJ6fxaPqHAEUnAtF7yLp2XKyZ",
  "key33": "MxtB2ahsDHe8QbRBwZxPeybXTZybfksww8oEHej7L4i7Wod38YfWvj32k8uoEJ34LdAFKYSu66yKdKaUfsyQ3vL",
  "key34": "3s1PwqkBJAV8ngnLaBXFLyHViK45KsTdbVsAF6PxVhEMN6ipHzBx3yvws6b1EtCgDmr9VjeerWKrtcm5jA9wGEJJ",
  "key35": "3CrkZCjGgxSrTEDnRsDTfezHoVWZBA32AMm8Dq7GsUVk7sMxQYWn93pKs2MgXrDZ2BLbnVP53xwLivbGwGBESoMW",
  "key36": "3ur3FmQZg34zwkPHgrPkT1yF9bD27i6FdKreuW9MsJvZ1roXjQynbYBFG3sNXtXTSgKe5sQ1iApo9gpfePyDQmRT",
  "key37": "Rs6YQ6VP1X3oy74eWwR2D9Ddb5KzB9SF9XBzAgR2QauJYxsH4c59QH2dNd5qp8FdJHBh4CjuwqKbp8eiwWppWs3",
  "key38": "3imv29zgEPEVahMov8gM8baFEZP1irW6WE2GmpeTb7T9gDRTJiL3UsF3gvXZ27cYZ8hmcwsVqXXXWZVk6cH5SmUS",
  "key39": "ERfSnBBDvQN2GrgCb53dR3hof3WNaMWMFRf5w7Pnb3HL14XojWAXWnfmYJEUABfbuYWKmvzpjttR3GqmSSt2TYi"
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
