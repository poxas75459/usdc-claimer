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
    "3kwCdf8R1ut2577X1WGF1JK5wsqKWZm9AWC5ihyshT5Pt8cSQ5eSxQUB1PxxkDA8Lo5Jypp27XhQXwLxcVJwBVLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G6UbXsfJNkvtqPY1xzgaiHckgDXAtg4KuiLrn1t66Yha6ZABJhFg8de8v1ZPqrzob8vDqJ5ZZWp5aVZhH9rD1J7",
  "key1": "2qM54gMMWfT6ynC1KuLRZefZhCnFSEmiCoFH6jaw4cw9Nc7Y2qZYM272Pbzh3aZxvSrCUYeJXnPhjFZ2D11iLQiH",
  "key2": "5Kdju6ZkQ4rFzNjQSNUskzjJdA13mG21oeMRdATj9CiApjpa88F9r6J3x5JAHMVb8yEG93bkCiQnAueKZoQBzoZ9",
  "key3": "43LzT7wtU8iMfDTUQk3mSYWiQbeh3QW7WWZgL8LJX5cs2EQPTtJDMtuxPnksDXFGoueESodAPEkenDnFzYcbjZxt",
  "key4": "wmqCCdJ3vstgLaYUQ2MQSzWWESoPgEwb9mtdwZcqSFkCvrXLuLHK8WRnQaHW4C4RixpZJdySo9UckF8xf7sSFqu",
  "key5": "58SH1mq9LZVTPbC67tcvt3mnbLJ3PQMJqb4pWnnapG385qorzf9TYbKYnqTYqXgDLZNEQJ6rEhDJZBMConNtgrzY",
  "key6": "2m92o1WRu3yg4ZPpNakZ14oqe3Nb92DMEx89zfQB3ePXzoyDVbcT9wMq33vgJDGp1o5np237xLWark8pGWc1JBUz",
  "key7": "5SeWTmdpJHTvFmn5hKBKL5xxDtLH9oXJAEcgD5g3xFL8srM2P1HjweCMQDK59dE7VUNZa1fwwSTYXx6G2jkgnbKT",
  "key8": "36cpzTq99iN1ejfoegAkQiY8P2UdGu493HXXQpQwMYR7XKh3Y6sDXuvSPibvigbrpt4STP3y977QtNVE99NMYkri",
  "key9": "3dGvA2vszQRm8P5n6TLYrkCYCLu4UkyYGjmTSc8wWembe95vu8JnS1C8zDjspugtM1mU4sDn6CEjAAUb7KA5LFSX",
  "key10": "39vocb8WtN6REuQewMgsLP4WVdCCmxSkFeX8EsxF2y4vbJWeRuLUh9WbMZE6TERyjzJFWt5JXb7wPCKeLmZQ1gX6",
  "key11": "3jHqkxpbDE2PphFvguizbp6wPgkJb69Kf257oWu1bY5eAXXcTHWwwMB9RZx9DxxGjocE8DioMU3MYjysp4Hf13PP",
  "key12": "31aaNxYFGuFFS8413u6MBTSA72kx6qedVqhHbS62WwkwnjvtLonCcs4gNG4UzJRwJySzidVwj7f4EtpJwvVWD9sh",
  "key13": "U1pF4UUCfNT4xTE7P9NEJZDiA4eVTdsQJ3q6Hzmqm3P65UiHcjHHkUa5JgevdCDL6SKcXsLKNhyrFF95UuFKPwS",
  "key14": "4mzUXWHfKiPgp7z4aGER7QyLetx68K31dQoVJbGKKEdneQ87HohuJsJVt33RXoZv9PpgHm3e22PXUkqYzqpZ8Rkd",
  "key15": "2kymuEX8gQKjVJEL6vFbWZyK2uu9fjWU8bhrJ9Ai2v5U8YTqxyCigX5bd6z1sRWtnUyfabzFybNe5Mj7LvAwHaNT",
  "key16": "5mLTtid7iNPYfnGEfdCcmgNCiAwYjCipvgBDch9qKeubdtMNi1smWjaapHQogtDkSCQ4akQSsM2aEE59tUgie1A7",
  "key17": "YKVn3QCcHzNYTRcGxy3gBWyCKMftz6C5nCG9qxDQ8gAp1BKCQkgmetDrPy3hsLrC57j6HUwwWuuMKbMQdZ5iDUK",
  "key18": "4jd8patvkq4ECzyzLaMM6zSjKhpALfwbctANM99zWSjhjQ44cBVtfvffXgW77pis5j9qEePxSuP8hMwJcpABbBnq",
  "key19": "aJu6EqEhw4N9LaZdi3JtgAEuBNBwiVknaT8fWM5Xu5R2dt9jwDS9TPfkTLyzrzNrVYLxXww1GA4DGgRJkwbmBuQ",
  "key20": "2Ea9NRSPt4HrmmwUrSUbFdJww9iqVthZLaLvPuNAyoG7bm97gAZHjJXc5LrmDwtuthsguP5uYxc9Ydq4chZkp4Y",
  "key21": "4F9FqXFFFfcneybWAzsNtLYipgbRFQBuGZ2RsdVKhnQWxiL4xwc1wK6ZvRN1morA2aAZkPpLaurKpTViwnTrFpTY",
  "key22": "3fEUF93RpH72DEHfodctjDL8C9obpk4o4796u7mohEE3hNEMMwVPDSQGMWNoGfv7RYDJWYEnxTFnMze8pq7TsHqA",
  "key23": "FbCmNRzt1rRnumTWayVJpJafxDHMLnHTVQziWV9q9F8DbUBq3NSWEyGajVabCEfxNMApkHtG4MtNviGwnQ2sD8a",
  "key24": "2c6HD1KyH8rNtvM55BzRqyxyTETExHq66r6P28yFf9facjVVZq7MkdCfYBwfpDpKVSbHVr9KSezPPerefPAL6cFH",
  "key25": "1X94C2nRrygaiuWoBEQkz79q1sXkdTLUydfg5nWyxGfSj6kfi2ic2PMLz3ZPd8WCPaEaFURvzUMUEcYRbNs9QjE",
  "key26": "3jQLrReuFtEywa88qr1ta6v1G5eKSH4vgG613ytPJLDYULBjUXyzFCzbpNBW7o3jwYfunGyPLmtkrpc5m4TxCB7j",
  "key27": "3gzGUNwvQHB5bjZBd9PhpNgDd6otZLKW4JZxjd48Pj4RU7nuzJKWxc7dw1PsgodERtV4DhjahhAZx6SgNmJFzD5D",
  "key28": "fPaKfnb2WJNBVQSZJ1dBqZizrxhrRbcV8G2oqEKGM8PX4tV2cPL4rS8K9QvALLwL47DYdPgSXFaGjmkL4ozUHq8",
  "key29": "44TxbfcCcH53WyoczVYCRGY7WeCHEQQ3zDLkibCr44dapJEKqUWpSdhPoDa3ZxFQjEjbj92HPKhSu8XeT33LdypH",
  "key30": "38RJgaGFt8GCzcmtJJGQNPapvSYFbBvVvb3VzXACBV7Uo5w67VxaCYD7PDiXbgFkY7TPbTosnsgwtLvefV9kNTer",
  "key31": "gEWLf5BMqWCbSf4bnfMnsKXcT46x6Tt3sZrBxwe4TfrvddXS5PgytXMVdkpPcJZkhZBh1CZ8mu6og6UcZB1gq1W",
  "key32": "4EeaTpM8wrwLVbUuz1vUJd9wH8dnBmE3BUKPpz7cudWNoxi8KZAHSCrbHtRqvggXp6erj1QefpcqQUaB2dTKD5X6",
  "key33": "2tqAjrfY6yk62xHx4y4XGroeSqfgGFHMgyj13o8g5c3b7ycfUNhjgXJceL1GwmaUGrAQdxMoC6ahEeFapErTLXDM",
  "key34": "5PwYqqMqdBBcr91uyBQmxYzauyCCrfFAJ3HTq5weNdHqDYXgtAiN8wFUWCaZo6JRsb8GuFM8bW7DYdh3CqGgvxYs",
  "key35": "3ngHY7YRZoT3PwBitzc24TSJDKDb5Nb6NpmPFqokbPm9TTEStGzXbJVfkUUb6ZY6yzegyujGUDR6sz5ZBM2wgVmU",
  "key36": "3KBDJoWfBg7va4GA1m4PERLvkTy3rBEec3j2n2CejuUoWZtHikKLwfbmTfbtWmqBX6SM8oN3yvy9kcDjvtCNdVZz",
  "key37": "45iJEhKrNNkeGM8cNaDGoKubfLVqcWgicKS7ZHBwPyLYFtwgojjYS1Rb9HKmznW8Fo1BKZbRNbHhT8Pdfs2vGBXB",
  "key38": "4WD85eVSs15B9JMnQzrgofvnVqE1zGGLA1rjeaonAUkeFyfmB3vNmspJ68ukNXN6M2dYpMAEfsABr6KaN3XCVFzM",
  "key39": "3fTEuGQ4CYAtsUcYwdNtvBDnHBZUV5XqPA27rjPzagzJDLkhTrbU2ZEQumR4rReMxCBaDDQz4aLEjogNPWD451Cr",
  "key40": "4Y9EcWdFnWSo6LSiX2Su1sashy6cZwR68MAYMbpJjP1hnuzNRmUV7TyqW4U95QkVUQgniNEyJreYvxSudra3uVpS"
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
