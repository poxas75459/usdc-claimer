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
    "4LvYeQHPBXS8NVBN9NhtAq7SkWQPLzFv1VEMoX3z6mos1onCSYaDq8HoEPLUogrfm72ZHruhzZ4LcPPGDQRVsRnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JbJLe6qriuTDfhTGNzWUsppnSf7epkRvQtSK4jiryog7twpaRiNrASExE5M4rsh2NuWwM72CYx4PPY1ERRLYFdZ",
  "key1": "3fCCB9Q1ev9fQhu1Xuzfsjmb1uesyB2JvXLkSpfB8FWHkMKERDkEghhPbHxc4cFw9F6mbSAzLKx8dFgbFZvQLhFM",
  "key2": "5daXiymGEZUQeQCLx6H7hJuWfWSwFmCDcHdaZWLDiE2WY8KYjMP9zGkWKeQqrkVnEB8Cyhcd7r68eD8ur8HvqWvR",
  "key3": "4jJeYGx6HFHCuGBjA93fRWEjQpvG1BEYLTR8XYiATpJHWWSyVJUScvoEcz47fG6k9Wx5w3REMFu7wzuX4AHQQkRW",
  "key4": "4hubRZvESVDrZYvNUKmdnzRzGWJ2pUqzgd7V5ujTqUG1dCUQK5R2zerpqoyebuu19Y51Hi5uLWiT9GK47iWQV1hu",
  "key5": "5kKjHPfxFUz9MP1xMEM32mq2HXUvQtvupSuTDb4Z4oK9QWeQqpim34SbkRHGrmxtc5EMB6hSYNHQAHXk9urZqqrK",
  "key6": "4uQk7r8WY6MjywkEJDqS4X8uwtWJ66gdTxmu1TguVV6bzpXsP1p1c3ZwfeC3TJiuXxXTBWJRZKeKX7H3s5mET7Zs",
  "key7": "4YWfkz9Nd9cmr9yTHszXno27fs9vmmyZzZVPXXG8wKDQoCqE28ytW7chBhYHHG9QSdT7Zo65nrPTaHKhcszgozit",
  "key8": "4M28HPvXFAFuXdDg2ABTmfXE9uaLV8Dp47UpFkokwXVjsiE9dHkhoJjTSxn3FzPZnyFkN3hv1Dq8V83brwj7yb8W",
  "key9": "4vyUb1N7ShPGnpxwgMiRVBLGAwYgCnk58YSEQDWabsijQKsJhTCUmCUWieQYLY9Z64a1cKaS8CSv3JR9jUw5gND7",
  "key10": "9wwLjdqVENcdK3xJUy9Puha4yfcZkdBhifh8z9D3iRwQrnSXpfkBxSht9QBGyQd5JP8qR6D1o2ZV56qHJLSpL2N",
  "key11": "5txHYSRh1tExpiWkipxUdsHsGuirBECz5Xdw46CVqwcYCAT2JbfJqoGucx6GZzx1eqtFqV4CwEd1ymrQYFgnnngT",
  "key12": "4StdE4HQMkHCxgRc36MceLdUJxBHNYwrYcXcyWJVdNcXVREfPMDc2GZCjDSvRf8PnBcNyQJ3dhGpTVDqsndHvKuG",
  "key13": "2wrDZLuRyJQTGVwWUiaZ8EYUeSe7sZV1pX3qm1w4GHNC9jLWfyHc8sFAQv2v3AicUaXFMJWj13x7rBhXWLScimP1",
  "key14": "44MZuUkADvvXM4S5bztRKCH12v6tYq2CLqHkZxFpbN76LVfMmhxuXAtizF8N39wL9mfX6zAJHqPidBmVkPnE8oTR",
  "key15": "tY6CVRwJ2q7TEgN4pADtpuKrafsgQ9q6kEG1sNAmRFLkmLwkC3nzsC48ACjsygSsFgsEWRVYYFjRmf8XumsiY3Q",
  "key16": "2W6ePF6sCLM4yL8WgFJ2Yy46NcdNeZPgaj3xXHJwwmXDgLSZcUqhg1peZx8CBNuqTHjAc8BYKiHQgQB6C1YkZg53",
  "key17": "T1Mt7U8qeNWXq9sKmHfoYUucyiLJBsaByMoLjk7tnzbVghPj19cqoZWmZDauGWyc9qdzHZ6ArXmVCXVaL7dtVwy",
  "key18": "3L4kRDwTktuwkgqyB3TpDooxe9T2SL8k4MpZeFhpjZCyVcZ4JnoVjsec7NpqXTqieXQMfmuepgLu9HCXEUfSfFTf",
  "key19": "4vAw6YLaJVmVVKxyPCt7Nh2nMsKZuQr4f3mVqn6YDPRWciaeLsunzFtjcDnD5fZQXqcui8vGLfrpV8zB1p1Hw2ST",
  "key20": "5cd3cqZ2urCNyev7yx9Fb5wBSyd8UQ3cQ88qwtpi21oD9esSQEznbTUdqjXxYReyPfCXmtExPvvG2wPxA2HzJ48y",
  "key21": "5aEpntQCL4X9VVcLtF61bSsEMiyAqRTVzfaeXTdqea2hshA2Q3fRwy3kMUHapdYsVCdQjjP1JfAEKyHkM4DRrYE8",
  "key22": "VBxifH4iUgRzei1jUnvS89gutjdz5VQJyhUQEEc9e7gE4e7AyjEZxdAoKqmEdsC3skzqNZFaRJvYArFbtcgtSA3",
  "key23": "2tyNoYMJt7YP4G5TTLPRfzAJPjcsRDdwi2td2ZydNgynC91jvJbkAMAcfbeY7rM2eQNdw4pfsE5c11AriDExyXaY",
  "key24": "2UEog8MMUwETfMYYR7MbkKUuA4VJ2mA1jLEKgRZuEB5sCU2Msq2TPRGq5owE9yPK8q95dArRQ7D7fVAWVZu5bUoP",
  "key25": "3seLXsHeHCcNXFoAkSqptHj42rcp5yHnhUM5c35UrRoGGfnFYeb2xmYEvBUGvd4H2fKPJL1nsyYtCNZ9MVqFVfHG",
  "key26": "tQWA8cug2G764mSdAK3EBTcfjbeJh7zVgsGerQNrh1piG8SNPgMevhn1XLwNfpr3NVLWL2nJNi8WSfMFpCmfgjv",
  "key27": "2WAi2pdKVkcfhJeDBDfPzvkQx4peNCqunKpMeWWv9UETsoWDt9CiJifCuZ6c7JjXE7VwF3XDDAUzs2Z38AUZnSYU",
  "key28": "4MHrzysJtgZohin2bcuosgYSe7ejdZUj5RdGZonBCM5r7Rt1LykXvfwdHRZXhq8aRQzKdiwtnSu73RrxxHGCSheo",
  "key29": "54tTXnbgpUQcXZN286KVvCFtttgvJEPqErPo7QdmDSa623FbwLurXFXJwWE9x9d64jX8HeDtMai8RyqVM4aW7tZD",
  "key30": "3dv33WHahp86korqnG3wX9HFGhUYvhU5Aqm5JcUNnRFrymf86ownWSvkGhKssTBVnwMeKvEVcAp2SA9d9udGjEdd",
  "key31": "MGP9pgXsViM8yU2yWEKoJvQKxbC1Qd4483xhxUbjmzTEAeW7AE5eWnsjjEUc52WNudxEFkwZipXNpErgmndYz4h",
  "key32": "33L1fLBD93epdNuaGyYbd6Kh7UKvuGFW78eciYg6id3euVCw5idLUUBy3Dgm9NpVszJf7u5Gwx3DmnKsZp3yAohs",
  "key33": "3GfqJDNJgy7Bg6Y8V7BLbN6x1ghm7oUF2aAopmyDExgT5V3famjCf3Nnbhoxq5qtWbtkwkx87RajQiMAb6B8d8NW",
  "key34": "52bsGXgUWZjpCjoufom57eyjjyVFVzkZDUjj5XEqYAjK14mkmufTGShkfXA65bboj6q7BufuB4xFVjF5jaXTxSHs",
  "key35": "rJ2NFRZhtQyRMfZ8eeAm339s2ijGW3cssZzkmzcW1u5YRfBmnF9vAQjL7FDiAJsdi71X9B1oa4NZYkNwgtrDr89",
  "key36": "bEMZNYp314siTBVAdQVQrfzrS4zWDEfwdXaedF2hjAmzzDeiWg367sVWzgkqm4wBa4JdTTNJhvUDL7sq24rCTnA",
  "key37": "5QmMWS92gSfkkxgqx7TWQsxpVjt1WWyzhG2vPitPg5L8C5LLshxWCdKkYpffsaMVmoGEjifE6pP9GA13998aHXnX",
  "key38": "5Kzki8yoLdN8AB91RWL3seYFVtn7dGwYZ9b5KZWGe89Hk3PtMBwQ2g8iFJE3djXrV8fhFHJgMqsyMG25w2o1QGQU",
  "key39": "S5bSQCZgZy9n7CxZYmgCxhjnAvUMb6VfRcTmvKpin6CkzcFczJRjxJZnFKBwDJf9gnniWQ99vHGSx5VuDgAhEDW",
  "key40": "2CdZh9ocWvKhBsvnR6ZQVK6nxt4EDa3HcS324Nbivpx3kT6gnudCQDaGiX8uSmeXyUZnVWM1GEVKrawqqtJV7gyw"
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
