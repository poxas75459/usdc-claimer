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
    "4kPMCdeEPzi8RQHju2LsRr5XJhr5hkHRZGJrKtJ1ZjLzDKYPGgyYkqQY7z1hx3U3DERKSjQmPvkgNjiKHHwT37qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DzqwEbeVHpJM9PN9WzkvAbgZ8H1hFwrVTiJ4qw3pjpEiy24PZCZCwU6EfmKTR2pV5z7Mwv6bNezt79ptBQumBP8",
  "key1": "23DrpUsigyQqiXGWRPMk6L3ZgYevCzysX6QscAJ1qDRoKs7WsiHT83joCCyJ1Pgsoayj5iwk8mUxqFjrD1uEm9sm",
  "key2": "5fWnLZ7JShgpMQc24wE53evaiDKDz52XjgX7yEcQDCi857szjpSC24rQDonwP7vHAW1wFse1CMbrW7eS121u4Lrv",
  "key3": "3e5Zd8eacnK9rwNooGncB4KZcABbWpFqPxZsWWauUXwH4vbb8tenGstvtrrBJbVsV6y59PM7uzKkZZUvWdfaNJYM",
  "key4": "EHfYzmYeXirWsKbrSFbMY2EFNov7bC4AQ67jbjzGxPMgmK6bVeTpdbTTU12yow7sTXvyFTtmhbqpdE2x4VdELPi",
  "key5": "2CRK5JCmij5eW98fiok1W57zj5yfNEujMvNhyHBnLAaNubds9HBZqR3mRjH2GaSYeaAANsmcSUna7uHNgPEe2vab",
  "key6": "3s48uvuEwjArhQVEUXhpbvdmtLHaCWYGh32d4cRhFcFFhaHGs1GZJLroXAv4DzQACRvp5Lr2kvqBjPFNFmgd5P3F",
  "key7": "5NKiTJsKzp44gkXPhMmSMT898gmg3ukAR7SYj12nBkBvMLuZTC8uK4oNsa5ux7ZuAzFCvDKDFXt6tKTYgrWq1zE4",
  "key8": "sqRUUWGxGiyk6JmBCJsUN23TyUuLLJUWV8obj7icBdsusmeftYPieoWu1gEmjdzMh8CSTT7kMQFnFHXmziZR7iB",
  "key9": "5simx8NXaCpiiHPwSQAy8Uug4FJQikMUqBQFghAFHjG8QgvS5bzYmvVc9sBDneA3AzuyKr8BYGoBE5VM46sr2XnK",
  "key10": "ifV2oAVjy3RxrnFxrm9o2TVwXuiMfUfgBnqaoiawxWCb6pUoiv5ENNz3FTE9TFrpZKqzTukuY5S6KbxzzmP84Xq",
  "key11": "XzHJPsQ4y39nVurevxqHmPS8FJE2ddcJdrLF91sb66AdWQ2FCZ5tKitBDMLwEM46EBSuZiMqxxTkRYSE1Suf48S",
  "key12": "3gxGAD9uig6R8ibPdi1QfP4rZbeVWopHDqjHwdNTq282rpdZg3rXEHGGoVLQTA9YyLwbJC1bhNHgrdJnKrxtfmEC",
  "key13": "W8SQtQ2HfX7kbXHVyAPhb3zwS6dHpN87Dnp5BQ68Y2MEaanQZ2dDH5pTukE8mD1LZQdd5jKs9Qv6uvmBJwdyXFC",
  "key14": "2t9EG9JUmjE2T1Yg3sqxw538Di6fU9y7JSsv4hjHsDKFw4rom9bM9hpEa59tUgy9AxvHmAQKgzg34ym5UkorCvZc",
  "key15": "KN3FuJ23e8yDx7FFkDNtEdzdXzfJzatJT4cnqpZjj6HeGVpaJ5RamnWsrErpDwDRSwynUZ8ZZPbY8oU4NrjT1YC",
  "key16": "3TKd9epjijZeAPC77LLy4fGCDRukiUQHHakh5Sb6p5sL9QZyaeHTPbSwxZc9ME2UzLu91kTxTZWoLqeKa9NKNWak",
  "key17": "4XNXD9XKyumZQ6Dx7YJjfq5Sg5b7TJU9YJnqKxZFFvWtvuVVK3JSByM3c6sueVKWoUvsfKUetiPYWk3VKQQYt9Xb",
  "key18": "4axZZVd5BRRTkzotnbjrbMfbRVoqZWJ4k9H8XDdYiNUuMM9qnBotAJu27T15eHiNVqPnF6jfU4aGT5WMjkC9KTPD",
  "key19": "4UsgvA3nYtJTV7rodY2SWs7EuBj3XuZYLMRWtH3EnhBzfmXCyzRKUDZ8nTL8f6FtKLdUaTR8HgwEzRrZCrQJK6F1",
  "key20": "3b3b7PRitZ5BdxXy7XH7AMjzra23wCUPEKRdfmK6zyGbyRfDg9q3Q6ow5M18FoJ7QY38DJxxinNJFaDYKsHRvira",
  "key21": "4PqwuSD1np2Hh8HBPnm5avf1YYdxDCHUYSJdDnA5BQWBYTa1rq2rW9ZhEL5QR7TbJJ9LBRKVnP1hbZMqitEnBF92",
  "key22": "53CgMPXFWSxTtcqogXpwdg2xk1p1wbCwjKCPd4fqvFT7UTtiRmngxsd3rE2Zb5Amh7AU5C4F9iHViaHjMNTRRPZ5",
  "key23": "Fh8bqhnGmrkH8MKdMEdWx2KsNh4dCgScJzpFifDMnqxQraLiBDVzK2XvDqmXzVqQmNmWFAqwbD8ftSw8UqQnj6r",
  "key24": "485B51B1dqfatocfGWAujZdMLc1yKDjKkEUUzydEn8igce9EQ8WAp65nYhYMtgMUPTz4J5q3LwSp6WzsRGoG2rfp",
  "key25": "4j8CpoJVYk9ARQVVBEThRLABJSxGdqi3KNi7H572d6KDvySJoacft5hcaiDdPmUEoFW4oio1aKCzQGgXwiBmnPZf",
  "key26": "5LiCVbpunAtrF2xJogZ9zPeJc2D4HbUviMLJ7bDptL9EVANVBxJdYq1wNnE29j2eu1Y7x9Hi3uF6YMToQcTdupDK",
  "key27": "3VxYakBLnugWLDwqZXZhfRJtkVZrgaX9GwtdAdw7aHKryPjWhLfHSLWDpXXEfzbLeKbRDjWiQEoFBYWA6UKiQfaq",
  "key28": "zuai9D3gRDGmpkQ34v3aSR53L9JuGPsvhLodghHD5PcLQZxMgTYoSvYYaMwhQkEkS4nvbuPeZzzBoS37xh1guYb",
  "key29": "5SPfngCV3KjSQLzXF5FD3LkfJ7X1AobsySGrnKBzqunAx3JpFAUdHAc3iaBVpicP5hSguoYE4wEJGKxx3Cw3sezn",
  "key30": "56qFik2qMEUZD9C7LGwvz4mJWHdvbBjrKzA51NaXaNi5nrqYvXRx8UQwKiZCjD6JNgaiPUVrM9fS8PSbrNMptYcW",
  "key31": "3zmqLNN3ETucMMzngTdByxSD3anN6mryujwm7pX956d7uY6xtKsHerugBRRNNbVTkoTsjBvVYVUFC8bBzHaYFyDT",
  "key32": "Uf1aYi4nEneJf1wpBMtyQyTjE5Tvk8WjNs31FizeidJTTB8K6qaAk2MrsXCouK5rES4HFSLpXHp8zPrfZPp8TKu",
  "key33": "3hWfgFTXC1VyEpbcYxwaXvrocDSHbRQ3hzoukTibCjwztNcfMPRDLCz3RriTWigStkm9ozDaA7cidSfsugJwyrsy",
  "key34": "4s2DfX4jX6Bequzm1vCmvkhs9HwmKFjbcDKX17Her1ScPb64Rkqb22yrkMY1c3bVLPGnaAqviAvEZUvbe794kCNJ",
  "key35": "2aEJYE6BMCw6pUmE9fjh4yU6ytn1ooh39sMfG6FvjnFJyzG9zU8G5VxvG2mQoxbSW3YxYg3gfwpbLoNdsKpsqJqa"
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
