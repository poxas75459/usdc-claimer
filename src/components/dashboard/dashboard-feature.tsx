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
    "5okPHLJ2BuYSbNKWnqkrAXcCkYCkGbk8k6jWPNHVPmHw1iQc4bgkWNVX1D5wLoKeNc5TED1fTSWgE6utaKnHeKg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xDiCCYTVk6fPDJhwBj89WiGrD5LJybbzrTsvHAo8GAuUPVdD6bc2wA7sA7ZAhGw5mF8SwxUjLx1Rz7YJSVjfeWx",
  "key1": "5ctsXspp5Q9zuuPKPX277Lm7CBHB2WxiG6723UkPDP2RYEYBvtmkQq2jy8uAEbTNkHHKJDGmbNi6t2rkfoHhnhGu",
  "key2": "GTQwi6qgPvS4rwcwGCqvbvdZkV91mN4UuZSt8KYBTjbotBCfZXvTUiWddb3dajEJrj3Y6EfrKb4iJmSetZfC5Ui",
  "key3": "4xxoXE1yF3AB72SPEXV5rSwawCpUuGiMs6exfwf3YsxRqZwPs5CiHLjAA4zCyXTnVnnnjXKHfcMxRqLbCkDramZX",
  "key4": "k5nhK1P2KrCe43B9wmbuvePQykrYJVr7rUgFEEAuC5EuPWAm3PaKL5RQtD4syYpC9tAXn4meS8aADHQE1vD6FQ7",
  "key5": "5r7q6T2q2ddXNuAhXmND81UDpQQdEfbYzFQSZtHwKVsPHHUMQAVfAhKkwZgMq2VLPY5DWiCibKjXx8vkWbQ4WDPT",
  "key6": "2BwwonNFXz63mxh2uG19L36UbTr2KktQpxcK2cSbxgbC8hsH4q72QkLcu7PSHnsj1UXkgKMj4WQS3fB7qoxF6S61",
  "key7": "3QWgM5b2BSFqy7s342c8QNod7dBthNrYcyz9tjGxGv87yJ4QTEppwWGkoBH7JYtEuMo8Qwi9SBTXRgpUZm17sDww",
  "key8": "5nxbR2WCt7ECQYtfik6UcjYkrQJz1rCHDSx7E7T6my3k3FQYJ9YP7meqo2qBsZ6DvcQvoisLWA3UCF4hCjvZJjrS",
  "key9": "4876RnpPBFy4jPXMn6k7n2VHZwh7cG8E5CpxD3XQvCa7vcdsCEYZyo6BjnfRwzRDNPBLUvL8vCZPsACEG2Pr1bo5",
  "key10": "5JR7CMkENnJEkiY3yY9oxjPYBKW7wS6j4mUwE2XSTZke28otNVHnwUJAPwwcbWWnRZtXu7BsZyG63B2Cixxs1Seb",
  "key11": "4bnMiNip9dgZ5g6FzsN5aDJC4fKnZ33DrKCLKRHLZ6gLQpNE5AxViGJG3bPhCW2mNSjBGwqZibWyv6KqwCoGyfH8",
  "key12": "3JeWsAvFZsFiy4XenUX8pUmoAFGoHLYQwpnv2dHBf8uxCAzWFu7xQsS7vkUUbWpZ5mE1z3VzY4DjZDrFBF3BkzsW",
  "key13": "2QoWpYM8kdde4EcC7iUACdLpx9M1o2rne34tsu8mmBfgJNQUxzGYgZBpZUJBQcbuXNRfnE48A7AWVZQ3mbFvR9Ye",
  "key14": "xWyvEbAzkHCu9WBsfSQ6AQbVwv7kvfVJ18Pm1Mtgpapv5RoHMXiRtiFCdTGjMKHiXgHNgnjfaYaEST7JC9tXPYh",
  "key15": "3uirpkxs4Jwx3vcrv3ugpUX3QJSpaomHLozhXizD8DGyYJj3HPJQSZ7ByrAFmaBvjscCf8vtRtojnBNC7i38uGjn",
  "key16": "5ZqBM3WKTYPm1cVHEFM2d87jYN7zAwWerxbH4VEu9iDAgzQVAZjoiMQY8iAuxiJ5jYLbo91snTYBk7nfb3KCU6i5",
  "key17": "3h2EtaDFTKxtiAaJLWpbNLzqUau4doRpkD9ZZGgT16LqdTkTHQu4tS5YjS2ayuo2TBNyUpYtAbaes21vufdukRkP",
  "key18": "3ovwEf47wX8wLV3iW9tUiGvxfcNWzhbJzb6aQqzexXPyGeEzGewaY1TackugWkDWGV1o2dPvdSXoRWYonNyFax7Q",
  "key19": "4dT9ooWyiXq5gYR8DtdfervCuhtcaVFJvt8srHGvcLnqJB6RgajdPDy8wTYDj96f1MhvT3XmcfKczVj9jWyvCJEX",
  "key20": "3FhjxXzLARoVs5hxT15uzGAwLV1fQv2YgMsC2KdmMT1iTB8A3SHn7pMk5P6LSt7VALNxDbsWHYKKUfiBzpjLTM75",
  "key21": "25ZGSnJVD3KFtTuMg6hSSpGZKgueKtbn9qX1euUgEyfJ6KuZDfRsTzG5mBEkN8NKJyzATAnLTnhLpfg1tse3EjCS",
  "key22": "BfTF8w9mPhfgLoWQdAWqjdHFGkonynzdko93NtjzVQZsj5irgVXMm8ePi9YMdcbjbhiffAuqDDRScsDGDSg5CJT",
  "key23": "3En4GtZ5F3S2A3amBVBTtgvV8A3kwe5usrP5uviVWJxLP74iqTjZc8o7m8HzQDNBu9pbgfrkWqU7AcwRTpAB7bdq",
  "key24": "5FSTBxrjLpcVbyBEnDsYiAtrdaR1LBWQhxCNzpr18sH9itd6hgcsiD9fFNqLxhZaq61URJcHWt7F372hVbLDMDSt",
  "key25": "5s6BNV1kpaTU8EQGjtBnA9hExTfwM2TVk2SfStPLULnr5RHJ23BAmYBqMv58rWeKyM3FzGdJBaFbqpMEWcfa6RZH",
  "key26": "4r5uJx3UonhunDxkVwmvrrT34EfsxmQnQEAYEoibiPR8P9zBvuBTMwLaYCGYaWaW3AcyD7wMjjfgQDDL5ygFf2bj",
  "key27": "4d19GrK4G6xbFTaLxgGksZqBG8Zj9uXVpPhW4BGEy5pXRoHZRAso2Kon4DcAXBAruayimcJj1Q7sMMQtMJQASxHr",
  "key28": "597L31t5VRd3kPMYqzGAWvwDrLxCofhYFBPxxMkBJB1NhRiwcrtcYogakfsbKbgLjsgvpkGwbHfWhAC6hkFdcVZy",
  "key29": "5Gi328bqrkWx95oCmkZee32CvonJ8vQ1LpS3aC2ZVKYokGp42LSsJZcAhQN4w8uSP8Xs6cqfMBMUWUJA9otMxxE1",
  "key30": "4kPvb4fr65abtHjmd1jkwn2DDNkvxYiZZWvgetsH8GFRg3YD4MVTJcqqqRVurQ8BANBPTgQBBoKdbCrzWUW1WMx7",
  "key31": "3KdcAVEHS5b6pQnpDU4g5WGbFdMKXrswef7V3RyMD9ofaCoYC8JbpiDLtRM6zbroJUMtcCUKFUsQwEHs4PiQkztM",
  "key32": "2Umk6Ms8hENrMyEpJ16C6yqaEV5RKbLyFKdrxp4S4ZWffYGGgr5wiW9pjaR5nxs6GpuctVKn3Xx5zmRQVjzBehd",
  "key33": "55ow5cq6qrxTZa5HtwaVgxGbCYvVR2XFupcJgpYVHQzhBRyoUPsaGKjwkwMrtDRUqLqFPj3gxLGSE6Vfi4fhnU6h",
  "key34": "3YrePkKrJrTpxAm7kgk6Lw5KXTsGaBYM82HY1ytmENRe3sCD4DqkjXwE1ByaXVopk6zrjNNTWuz4W4kp1HLARWcC",
  "key35": "5JNvWvBa9JNwPsnN6ET9GEoueBKb1qyKYiBVx6ohhqJwjoDu37Xs61cSAtaXJJ3mrZi3CSXz8JuKP3SZNyAkZ4AA",
  "key36": "C44R4wDDuoCU5D5KnhqLLKnfRGRh7LwSC3vYL3iotwqKnE7Lk3PFoPbXw5nr8kNdHrQcCHzxLSTFh267HhXa59B",
  "key37": "3cJTnyNkn5HDs8nypo9fQHFC8TTbNFupwXxy9KvDwtj7impjRkK3FsuusW54kFdNkdGSSEJAQ12e6Zw36qS3jmTN"
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
