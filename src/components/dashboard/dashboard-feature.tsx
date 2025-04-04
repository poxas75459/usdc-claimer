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
    "3YR1qwXKRycj5bhd4t7njoB82hRk2Qpus716t57CP8hRfajqS43ghEeTYWjnbCrw1BBaB2Po8jkMdYWneLCcVDtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkJkdetSkEuRfSu3CaxVTqCBvbxbMHGLQzi9jhfdtBfszWmVek4YK7aKrB1LS5ehhf5gEqG2P3t6ruvqV81EJ7M",
  "key1": "2jjEXAdNs75FUdeQd9F8M2XdSDYXvtNN9KNJnNULtHubpmjcC1pSih5o3KBskkF4quN2XFGSZtKopvXZhnUBJ2vZ",
  "key2": "aVj6C1DiR3csD1gLm8hBPuNRvHLYQiYjqBHhpXNR1gNbadNptV7cSqShXykCaNSy6LBvRWje1Y2Lg3i4uRccAMp",
  "key3": "2SgGKg5cwHdLQJdorrEbArNvRfGvJPTTAPHmgf9oqstoPcpv1UfBYBh9WTsypFAqkkqL8gjgE5QGw5gRSZzyULjh",
  "key4": "zqP7b4b4zN9C4dAbdZpLkzvVxVNrwNNnGZGsvg62CFQuN1nSwLwHpHA43sk4F7aQzV5BKR7HKckLA4sQTyZeRN8",
  "key5": "3GZzWjHnKw6s8qVLqmbceSaMvnSugxCFPe5qYQeV3VQVcFDER2ftcmLBvKm9okfNUJF6Go3GZ6smaxou5pBQugHF",
  "key6": "4HBat9HtCTtyYwxfkJpb6CLTBEDdCNK6zPJGBQwjz447ezk7bKNBjdyAMkkPjAAM2rT3wMe16cTSARfbQqw4T25",
  "key7": "ZxJ2ZBx5oLNoC3tsTau7ejzLzD4F2o1GgLiodGkYhVB4cG3BDa1EUNC6eBJzhBdNQo1xJaBBAfHcEndd4rP3sjP",
  "key8": "1Fz92SVVLu6ZrqYXXK5smRGBBGjzMPdDV6B9zDHZWZ552vHmx7n2tZ5vS99a7VFKsPT8TzoQxx89E9R3G1A58VS",
  "key9": "5uqKRvDWdwgRc5TebbtUEUKYqTUtNZjNcqBSNpFjNKTE82PUE7S9RnLGvJr1JS6wVviThP9FjZRWjJAmExKq8q6V",
  "key10": "4gTTz9pWrmDDmBjR7dq5AwepStxEW1v6Tb8eUUTHaxtk5qSuew2DD6MebBr484XyP5CjNyHM1VVTpQfQH3FcLDsG",
  "key11": "HpuLP9CM5f67SyyjyhNDJsgFZLVW9s4jbKgX78mCgMQKPWdAxq3e6syjYevFZzjPeNf9q8WqfCuZQtExJpWyuiD",
  "key12": "GT3j9bRjBNvFk13t7gx1vcE8wKJgjTakifqzeNaEj1q52x7SEdc3qvEQuNP9w3HqKi9RTxiCbry3LVX7QEkyvys",
  "key13": "ibuBJZvEkWnkp6XJvpSCCXYUSBJaM46Z6uYeR279fezE7EYaxHvtospzsDSXFzgkXvWQEFE7yrnaBBvPkTt1ZBn",
  "key14": "4YA7jKKHX98jn1UrLQfG3sfBwFprX5fjXx3vwuZhvVxF31bdMMzgEw4MBVqSzPGn6ug81cADm7CME1gCpipoVu9f",
  "key15": "hFXqiiMKM9NvpGr6osEz6WFuitjgdrEZVmSgnyGJUdGrVxUrESScRAN56gQmz5sJXgvcgdhrg6kuaG2ceyybPPL",
  "key16": "4H4Nnd4oVcrYmsbPR9VXkE1S4hXGiPLtCusKnBcaht5fdebmafcZQy3TyKDjfG8iN4hzHykcG4MGrM7SX6Xhh9Uj",
  "key17": "43pPu4REzjPKZFyvXXW3Q41xdpTHd1UyV6C3inWYMGxA6ricWKHy3R5gKt5Ma26LWibpfcW5Q1DL37L7ojy8V53Q",
  "key18": "5b2P6pRiUnj25aPs1Q2ZPHKmXkRtAcPnQqJLsau9NhFAgNi1FFZjotmjzwgYZBF5noubpTUZtdc3jZU19C8MdCkc",
  "key19": "33iFH6ZwNNCSBnXixuYkCnfbMA3KUzrqHseDahGukyiR8UDogn12Tu8339BfkEWb5yp58sdsKw8Q26Qw3BPeSZd2",
  "key20": "4132FRWSo4BVhTe5HZkE2qXHdg8VyGP5h1Y7NTmB1ECjpekUzCtQmj5PRexGncJDW6bvrEC64mWLcvCzTijhHJag",
  "key21": "5aUah6tUxP2z2htYcNNqss8th9qNyTYcKWoZZLG78VT1FxDfVRseHgBAe54RcidDFmQgvGouPPrK8mXskZgHAvVd",
  "key22": "3QQJWcSaGTZypKHx378qec9MM22ALqFhEQf4WRaJXmrfNYqVStpM1ZqHjDM9rHM7HBQiTbAcaX9wR2qnPJeadqPg",
  "key23": "4ysVj6rhsp18ryt4hdXCcZVKkG4dQpjDV35rpLZi8St547RrqHHgFDTdGdhg3dNiNKjbnjhAPTJN8mR5NQnuFF38",
  "key24": "tat1wbYRhQnUsAoGe9mPx34v3MRg6X76GRGWjv5ThKRp35TEGa2mHwYrqHjUZyyHFTFU9eQWuK9Qutm4MVnrHg2",
  "key25": "2455NDGMXed4y9W9nRrFVzYSw6WyYWxGbTsVYN53wPUpejUVWqYi3erFYtPtmV77n3mQ5k9DY1KRMBUNWpj2HthM",
  "key26": "5oR7RH31DM1o8irPCrpT1yw4xg9vq1qGAQ5oCtisKYNyQJW9xiMftSpDMz81jRB1Q8nVq7c7oaWEa9QHFDB2zTwK",
  "key27": "UyERvH1BKjALrY8K1CeRDATQD7BedscPsoE9WQZyrZdP8FZbsv8mbp8EoC4pbecumWK1DHcfsXiEZQXdoS1fQLw",
  "key28": "52gscVFS2wE5krDqzmcxBgeYkxYK7zE72pwZWDqZ6wfLcDmHZp3Maap9E5CssxeADm4Uv9p4VUvYEi8dPqk6gnbb",
  "key29": "5GapNyCjBC792roeiWMtAQN4ZtbsBxeBCWgzsfnwnhka4o5q6wErnvLGBh6DNV2Dm4PWNZbxUyAYMuNsYmmeGbA2",
  "key30": "BAq1aF7h19JjnuJfSxg6fgoeeabWnwHVrAaZyQ77u3roeV29KKKSn8GSramYappnKEnAiF7rRZg2FQqibgumB1Y",
  "key31": "hPQ1iUZfd9gaDZnTdwxUnS9ptt5wYjns6zHcBrYBTxYy8syATdWDrK8ZRzuuSsPmyTKKb7HQ9i7pC9CPjvkL61q",
  "key32": "2Pknr8qACmsJ5ZHL3uSW1i7nszMUSsq337MpbrRdAi5oUBcsVZFs4sZ5AVbeuTYL2w2jozerx918LhgkSobj7Tza",
  "key33": "2HXRZHJnmQYstLjD9FPdiM8znyDzYrFiFDL3JX7rufzi1FRxeq2fbZq9Z6DEPyQoACsSSBpfSx4zDPbvNN2241cN",
  "key34": "4jLnDNFJmAVsDT1HF2RqDPgXxpXr1Kb7TN8TC1wdLBj3piXLr9HQEGUb5m12R7rU1rhVWGKVDQaAh4GTanV5BPLf",
  "key35": "62D4jtDB5agji4KL3YJQpEfJTwzNQCMhQvzbDosUCVZtLiMPUYPfDdyH5BAkrtVCJiv8WgyRdhnJDSAU7sTn2fSE",
  "key36": "35SdkRvEr31Zdxbm6YNf8NTbvSD9QKcXivZzGusFLHqqn5wHYANPwLiZFb9WrNiNWzSNcEVMbR9G1Q6Uk73twYNf",
  "key37": "3aekYuDf1vJR56tj7BvcS3XkBkF8XPnb2C1JZqiMkDpidHkEdCasp8jZpyjYRdJBBMdnMzYYFD5QBLPUgX2j2TYq",
  "key38": "5pNNSpPtZ27T5BT2YuyK6bwgeau3eCjrdpK8jAsgnuYkE52qKdPXhz7amR4os1C3MoTWQYcNmCdBkusp3oCg5qAG",
  "key39": "48q1iWGzF9MLzQjb8mWjtnEx5XpNdAWaHerUryT6aLdNfLU2MFG5NoTfXmAkZxVJwzvPtoCNdregR5DoVP2mb7rk"
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
