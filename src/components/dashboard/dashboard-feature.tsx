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
    "3A1BwFrF4SsQ8UdYTXrTFFLW7gQqHkWC5hiUpmWj3RePcfUZ24pPtzkJggQSo2oFVpydQXk1jGTTr1KJrFfUArC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxib4EnCyndY1GtrQgoZEZZBU3AwZKtgqypmwvqcY8WMRwSvuMq9ZvrRrfCXWGiyWBLwvfKfFWAfs4a3hbk6mt3",
  "key1": "29xRYJrzECjQgsDSnC4K1TDzTLxuSYVK9zgKPHXaBA4wZmedANbKqjXQAM1XBCFJgyLxKpwZZE4PS16hqor4KiFw",
  "key2": "tbpa2ds1oc4SSFReF73DkFbkPFEx7QgXXvPJrbWRAr73S9RnKDeWa2zToqrXKpq8YWtixxZ4S6GZoPbBBhkjTE7",
  "key3": "347ND33sSf6uo79W1R2GqYkfmu8nSCpRAFzsFe7H2LAuDPjF3N2FZDEBWgxEFRixrezanEoPeCtDcsk4y3kC955g",
  "key4": "21emb5bzTGd4AQ2PgH8way8qM4Tts4K4uyixAeAYMde92NLnpBmAVTdaJLsUAJnHHQXCR2BbHs1b8EV4FnsPC4zp",
  "key5": "4Ft8jNen7r6gmf7pnt1q8koWhMkAeZnL4MJAPPYFdEfbGg5rGzx26HuMgNwC1arZp3rTfqxUrcAugKCBbC3bLTuQ",
  "key6": "4ZEFxVsxdbZ7X7iQ9Do5yc4kxLMCTDgNENThQZSF135jKrSVjybTHAVD59Bih1ezLL7dtZavFxbHFJXWVXvwxVcJ",
  "key7": "RwUVMYkmhGhzP4aXQ725KFJA4J9Kf88vUr82WtPF1jQTrDXoPyLjvB69hS3jgNsAG4JQbCBw2bgPA7XknZzVZk2",
  "key8": "5BCfFwxQxLwnWpoNhBEKUunpPjYjm6ap7mu4zam944Ttm7C4XkoNbqQu5MUJ12E5AwDw75zwVy9NvHUhe9dERNPL",
  "key9": "4yzwWENfrtmagGzFUL8p645AVe1ibdGYCJhQTsY8mXviFnQQXjx66FEfJN8JYCkJvaGaD4HuSpd64HjrkA1j6C8d",
  "key10": "5o6Vj6JTBYGJ7xFVvrJCZQGoX86QK7ZtXAYiF4zi1UKeP9AMJCP9VQN7KKam123F3EzHGZbPJfaVu3kQXxqPhH8",
  "key11": "3nNbE5b51kHLzWJNnQJHQpBNa9hZcb4Coc6oLaq65Be9s2Lnov8pWcGu5uyegW2BKzJT4bGEHPvB7T9uTedSmh7h",
  "key12": "645sLrsinHRKGeM4UW7YUPRJUW1aZ3Y6ca7rfn3UcDPyode5Qcv2tQLPij7atdP6znMAZkSDcas83qxajsVCw4E3",
  "key13": "4NS1e7zTnykR9Yb7kCKoiW7USQhbtmjiL69Q62XxtQUgDRwMV6JAotjy8goxpZ3WxfvKu8CqAVjScSsSbnWRmPtn",
  "key14": "5GAqQP8rhcecgG5YSbjPVNRUMErMTURVApn8SVfF8mVANHF5BxSRs7NaaN66prWy7Tyg58R6RtpQ7dAzvVM5y1DM",
  "key15": "57UduiUJWPhFZQKR5VjrN2zZyarZAs39Lkw6Bqq1HNyMf9FsHnkV9vTc9qK2ginWpiyscsg8aMCsAEoSjyj99vjG",
  "key16": "5q2GL28sj8R2J86JiM2ak4GuJ5kPgAhv6YhTSUKSmqMfthzS51XjmWmjstF2TmdAtu5WGn2oaVeA2JkrQECCDpZ3",
  "key17": "4XVjKUhV3acjBUEGrqQ1g2ZRnBNhFRCNqbHjeXw9pETSywDxzrLJybt1ZMAJx22Z91VqAtkot1ijaxxuWh5sFZGQ",
  "key18": "2NUHxvstUGxXJGrjsHU5VM8qJeoxjvG7XFfwhvxJw1rDWAZjFVhJeHZh1AdTTsPb5dN1r1MZMmxhm3tmJc1EqTxt",
  "key19": "2F5taGmH5K1h5MA65Cpe5xDwkY2HNvrdhVqBiFVPRUj1myaaSpRZD53jzPnSkXqNQQoSf9WpkPyUhBUwXh5H32wg",
  "key20": "5MYw4RerpFGpxGs5qbH7FbZLoELtn7cjZxa5zPzza1s9G7Vk6Xo71EuuLw59seFDEuBfaU9WpJyLD6wCc14CYH2c",
  "key21": "TwE2gqH5U1qxboyxeZEcN1TxroGGM37ncVh7Qxub4APQUJmqTRfvJjBd4J7VQYNp9sZsrpM9AuqmUAbTmuZNc3S",
  "key22": "2Kmo1DCm833V7VjWyUNA8tQBkWnk53bUhJCviAtkSWYHSq6Zrcb2f7XpEXhDphqWzPY95AXsGjVLVLbvYmZ55GfY",
  "key23": "2bF7Y6tjFAHPQ9g4N1gq4mLkN2q7ktv7N9suSQzYvoxkbShrXDWwgUwHLewKNz9M8QccY4n83PDg4g7N7QzjYcCX",
  "key24": "61u9fpXVCon9sAaskctkmu1DUwW9ceXDsVn3vAMmwWwuzQoqemq8HpC6dRXDwx5HyuJNov785qvnRCgkjgjEFfnk",
  "key25": "2wXELCjyft1mtsoZRDZ5qPJWZASJA1zV5ECAEAKJjigf4HXwSYm7kMoesQpH1uJwGGYa37siTaTB44D7Fv2TQ1hn",
  "key26": "3yCwkws5yWbV85ZxQHVSvm2JgaoAAUpY5uVeHBjK833Kk5ojv4cs2sR1gr7Hz5zBYqMyeJgM6DoWpcqE3aVu8Jco",
  "key27": "2K7LULM9Hr1UREKEMcvBcNhqDN8ZmsrAWqbZ41NKMNFJW83SVewQqcNtfzdKhqz6eFyRd9AQovWtCYa98mVKrpaE",
  "key28": "2ApMgfaS6CpDQf17yqb56L1XvgHSTZJoJEx77CHo1hXCkJFRa1Dt2dWTppcsHXDPDox4jSkTwhdZjWDBpta8vAti",
  "key29": "4hHeGXiVtCAW96SPS268WR1uA7YbZfrSgbQwtur5ByT8UfXq6xmkNcbe5Umt1Ca4NwtJWxBtcKpvcNkkHM5rE8xf",
  "key30": "5S8aPRGmWx9toQ89Z6Dsb9yoF5v3ZFDkYLAmDtmPb8DzNBzCNHTVaxpcj9wEq9QgRPSBFFrzTj9UJajsQWN1eFpF"
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
