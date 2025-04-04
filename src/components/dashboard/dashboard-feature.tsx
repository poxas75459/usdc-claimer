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
    "2gPMv4ffHvRpZt9gD1Lt6HKjn6B8TZ7hJcYUJpaAqvyLfQQz6vaTm5ixtG714XQa3qsLXVLG7SvexStWcJB4LVhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eVe3FHaffKEKZEDbqRDCUYBEqFsqKrnV95popo4uG5wuQ94TUGHfrZc3ksEq95ntGGwZD8rfWKoujbGprpnhs6R",
  "key1": "BxahZVjJjYzzvMwVZimfqn2xTtV9xE6z7ggAx5KLbFMKid81Po24qmv2HEdGLsTrmwwWUqfcfkoi6XUsT9XDPxP",
  "key2": "pRXzD2jF7MFzdFuqAhLFbMgCSpc6nNDnAUKg7W7m8BxjuNfs9LcjyhqSpmQeTmEzAyYJp2AMp9ghNRbiXeozKAc",
  "key3": "nFi4ubSuG8YzbdjmKSpmPsm7ifRasnqsAnkxK2E2r4ARx6DWXqMNipXfCy8cKvVbyiX5JRZSv36YhprJrnfrHbv",
  "key4": "2LK8R7JRHasszv8HhmqMMTnf2kghUaGrmmgku61fTkRQFJBpdoGAMcj481NbSiUohbXKrbf5qogJmgAbxYmYZood",
  "key5": "2roNxxvRsUvLGi3QzCDawmz92APQLBvxSyPkRkS4uMXwfHEUEisV4Y7zRcpFjgBEFdtRwEL828DQudzxNo4on1TK",
  "key6": "2cwmFUCJm5ksakcuEy8AhC4pPpMsdXyJLanByW8ZEzpzLBoU3wdnXrwadxnQTYQ9rwmHw5jtd84PHoQQ6gM6UFoL",
  "key7": "3sGNqijBdeNWc2y7nAvhr4hcw7BPZMtw6A3CsuwQoX7Nh7MJ7WrBpQ6DBGh1SLRZ2cnEkhU7juExCLFkWTbuy1Sc",
  "key8": "3SFYqzxwrzDgV3LoMctosyUCZgZkmGQ5PtnTFhRe3e2pz1takd7Aq7gmU4Jyr42ts7H68L2JafNQnPCyhxTvX9jy",
  "key9": "32W5ubijdRfpYtDzXqxQ4qaE3eFpPKtRdNYhfmdRDC6tWEK1UdUJPHggDBHU3QQ1vTaa5XoGA3yaw1EaFADmZ4wh",
  "key10": "5rMmtS9MZ4vSQvfCXrUT2J2aa7veZfF1Xj8shW3YTpSUbUZCMXE4soejaDNDcyxPn34UM1EJLQABsvhriA3VrJZp",
  "key11": "4YgsYs3JJ3BMiBikSAGJMaGwFWcWf5xByroizdBKH3NaPZ1YDEvZcCu9k4jHWZ2oQ6od2Ubso5XGwswY8VeZsD2M",
  "key12": "2EGVybpHmUTcEJzAuVvHQboxDbweBbkqaJh9D83C54sZnejijPMAQWjYGAwWSFg8vnoD9mLd9hxMDv3M2uP7s7bz",
  "key13": "3s7hiWkSWTxXr8jAYpxXQuBwMtEYz8wm4sQcTuYji1z3hxWF3RJYqmLa57ZQxAjpFf3rGUrkK2JeDXPomVuLN7Ex",
  "key14": "4jyACTcoSDoR9qrRsgdGFTcH6yGDR2gM6vGGsJuvK7AEidBjkpUZkuZRV2G8rgGxBSB4Pv9JxNW9PXB33cQyQmDb",
  "key15": "5fprm53Udm67P5XY2dpj7USTQb4QtTifcjZz7PfP1KYjRSUVrGcDjQU4StpNC91kVHpRnKPAMMgDvUVoTHi2Fp5U",
  "key16": "5Ez5f5uKkirQQgnzB97WNSjo328dMM9ta5GuCY1WWB2fXCCyS28HD7i6fFuGAkEPxqZxFQQj82MiRwuhgSyVeAZ",
  "key17": "3w2VtwZTExCpjDVyUiZG7DnKNrLyppvjzQW9VQLnDrG1SDmXSSLkB6QNUG8NL56eSoW3MXMX94gKzEqmmzN7TbnA",
  "key18": "3zfcyPnMJHKQpr3AxnUtPFXu4fAn2vqDMPhK3Dd5djYdMXnYVWi8DYmcKrxB5i18K9BwJ5fDf5UvdpyHkcTQbjNW",
  "key19": "DhwK47s8AsvtT2vUg6fV5k9bdfz4ceaiPeZNiEqCe9MDJJ9wJobH2B2xJSjDyZ4DJLuGpZn4EYagoKKHPaj8aN2",
  "key20": "3DDjFmD9Vwuie7DgbAgj9VbeTSkMMHu3rPXGFZuPWbDNix2esHg6ng1VcS8mUqJSmqZD9xErRckKpWZogatVaLQF",
  "key21": "diPUnUJYQCDmqt19SkK6wqgwnsnoSuBWthbz5dE7ZWAQ4nmdFXjzKHXwpcR1uUgc2FfWZHEioE767RYyispuMhF",
  "key22": "2Rwg8jbaQ67KFTHbqhDUrGJwbxoNNzMQ48RtCXghhAWSDLq3jnBrZvjjYvA98WgHAfvUvAMZCa1SDkBfQTv3J5gr",
  "key23": "3NuYj6D26C2p3qNJfstjtzWL9jBGWTkHEyyhjrjx9CedKEoHX8dw8QwB9SJh5KFmwbG9Y6FSnrXHJLEUoDh86g4m",
  "key24": "MnE8uMJxQrvv5xZVNxqXh4So666aTc3Tzj3ED76WzQJK7peBZFiKa1Mi6NdPe1jFgkHw9YWCFYVWK2P7f3gx1ry",
  "key25": "4QcchamwVFbNVoXovHrR1gq32FX19XFsgjsENEvJbeV28qsQYbGjbKq3b6cw116gEVjDpXN9JhhY2mCxNVt26yLH",
  "key26": "5B2Ssvz5Xe5RWF34WKFERd1usYwefRMeHzxAAYwTSwjcoDgLXKKsqfQNjsqrTuFkmDTMutL1qoWe5NcNt2NLAKfr",
  "key27": "5GNKS9SCoXcoHyLZqkLS8BhbzSNj4tkiX9L7g47qKJdrHE4wZSUNKYV7gwDTvyJn1LpcqjwyG5MGGQGCEdcMD2W8",
  "key28": "4fphtFVo8KE3wfcRPbsmbLmNTvcvPvY8Tuo4ySqxLoXi5sgUDDAQsfvbM5pR39B9oChoZZkZrURKRJAcck4BwpDi",
  "key29": "2KuEhnW4GC7GuBVfRyrNq9qyc6LiGq51YqFngMZeco4R23zgiW1Wwa2YJQh5VAhzwu3yLdRBnrJPjFxcJWmHBQdb",
  "key30": "364ZdP9gGgWcCqVD7LwqrCZsKuzgAtGhbvbBihJu5i9B7vkGrLjHGbv6b8EKiBcZAhN9o8f3RZuNnRMDCrWkpA22",
  "key31": "5Yjeox9kyuhzP9Cbr2DSr4tv6oUKvB7eWYKDhudsQuSZyftVYwV3B1WBH5ZzNcMEute8TtDuQRD88Sx3wVPwGV6e"
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
