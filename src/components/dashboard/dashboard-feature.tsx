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
    "5wNR9JAMinsDzSfuih4iJKs6YbGKgoSWMqCFoNAX5YBCvrAW7HqMSkLFkXA3EMEsCvYxELiVeK5QNUn65iR4nxuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mw59K3nWV2KpiQNxbX26Jf24VkokrRSbr7vPdxiYq6s4bkP8khNfJWJoLzZTbQCa7rVt2F9PJYAvb9B8bFvQXg8",
  "key1": "4RXQopKszFmvqxRytvnJfufGqT6rGQ4wS7HTjo7gVaNfnLxfTiKNfbb5QjtFSNFf59RHxnmaqrL3o9jRB47GpysN",
  "key2": "FwRQb7Y4Xu72E58ZaYxLdGKoa8TXwz45PziYDsfgGHy6mft4DnTKcKCyRjJjBkFSaJhiJu2jYPQFgkju61Fnz3X",
  "key3": "3rzhGRKchdEXzMv5Z5axL7YnTmsCMyPscYoiawkuuRN3X8HnmX6Zf4KMBty2BcXJkbxWaHkWmKzh9uXR8thF2mni",
  "key4": "2E6NeLmZcYiEuDJ8qydnGNkHmQNXLsJGFEMpix5JzABau8JJHiA5ypXU3zsVrk5CZwQznVn24v1WrTA7y1s88nAC",
  "key5": "cc4Lau1b7nrpNdorK9dTKo5QdNszWdXi4a5ajXiawjBVJvjt5XVn3NZ1iDJo75a9XafSws8fUp3h8VmH5n15rgF",
  "key6": "2WibMEZpM5VvGrpUxLDzE2Sv7s2KzjEuxwbJktLnCXVMcmV6ymtEo4UvUCKaYsePLyqrS5pqG44vxHKw2sCPKU2H",
  "key7": "E5zZMSfXSn58xZ9cEs54NvzSch5Cn11JoN6QAcxHQk2CsxQSkD6v8WPKiKLZAH33fT6ZHkBKuq4ZCftJn1BhePh",
  "key8": "42rbKCBpGQ6sS5YZZ4AC5U6FZPSHR3qrBysc9A586jNhUqzZ7MuiwemdV7cgmjJ57XKjmbNY75fmq5eHs6WLoNwE",
  "key9": "3L522B2mREbTf72GNQSG5JbRQBo4p5sqeycEgWvQ2NJqm8ds4pwRoqujuqq8WdohfW4qJcTD6PzfA2p7SbbxttrF",
  "key10": "3EM6p2qYKW2cKq8yu99r5wzKB1Q6RYk7DcLCsSCnNL63tvZUMeWz9U1WnAJiyqTwDg1cNdn5ei54zoP1jjgZuFwo",
  "key11": "63njfZTEFGUvNAHjkZaRQkXfXdv5SLvhoKCjcdvhxzg3D3WpEhsqvtTAuNe5Ucuz9u2HTWE4bE1boNvFtVbcz4YR",
  "key12": "28HSQRQ1ifXYQW63VkWWguaax76ArtFho9YMRCFPdDhaaBgqjvJmUUUNWVhNoYu7CATEcCnXYZCjd7nXetLBUx22",
  "key13": "ELMWLZmai6XMf6bxkTEXAYjFmBwyWkAjpscoDbX2cwJNEXL3Ec9nijC5fFkTGY42D3tWSUXog9a3cqL1rfRjZsj",
  "key14": "4YTPj8NH8xL3NZtwwigmSxbiPfSca8sRn81ovQfcqwYeuRSaX49S2G2wBqSGEyBzwpFRV9EBdqcQWJcCA1BL7cH4",
  "key15": "5G7Tvr5EBni9fML5owEVWADTkX7brztFo522ZgL9qRbWBpo8YTK2vLwiTriEHkja6Gt7YUgVsxAdwz18k6TrEL6P",
  "key16": "8zzmUSKgfY9QbeBpoQcuUiYQ7YF5wbWWxc8dLnRzXAi7fbCVC2xfbhHqn3Y3mjmv4fFeZbgWdKVsK1Xo8DycDR2",
  "key17": "2eMbBwgW1CvDTTojmh4QuyVjGmhePUFS6u9nxWyn6pdZFmMiKHzLiMNELhaSLvyoPUa8RALvZpQ8pHSA2DZRMUB8",
  "key18": "TZ4CDZpb17ZoEbs3zU7meA3fuVuqStGTxV5LTpRTRvTtwxJDuZrSy5tsiGAo6iZxFZCsoQPCHaF57a7SRaJhqCQ",
  "key19": "2sh9XCM18Ffsg2mSkzrm7eB35VsJJNT6GCkRtMqfjGVG34m4EFuiJwJjJa4mbHMzCTovQKmim82RURwo3qXSD5PB",
  "key20": "2fF4Xu7B4NDnxt9vD9bMMuetF7KWi8a6T5iWiHPkFf3MzbPUSz9mR7DwaC9ra65gxJrSkdFmVyQRJXZXFd6tW5MY",
  "key21": "51uAgeumj1pjQw22UHinWSm2Krbqod3N4EtUFPQbawrNHQPc2YGsHyojNGT1kukUC8B4hvMAC6Sua9Rm9ipyNBqd",
  "key22": "2w7o6LsrQkdJGrriePb16f1ppUv19Fe3AiWsRX5XGgG75GgJdBXuAssJJBBVDMBT3SMMAB6DDRwcNmFDQSX5LTJd",
  "key23": "38cL1FovCWzDvQqMQ774Uuq5z4yKYu9ShHiPnYLoUEktWAF4QNDb4EqjGfzdCj9S2preFTsRqzifP1i14pZcQ21a",
  "key24": "393bb8zB9PGxxYeVaNTiZ1titCgfz6N7Q5ygnEQC9EiqN8bcGHnmY7pCyYa2j73aCJFtVVJbhj6YP74ckyS2X6eT",
  "key25": "WQY42o5NyahgTx959AScgnUaZk2XgbzR7rjzTFKyiq4PjSPzD1uypBNR7NAABE7REAyGBwUHndXs79mQP3jnjcy",
  "key26": "4hMLY7wB84DPPx86bqJC6UfXCDC8gU9P2af5Gis2WweKxfZG5SNtmv3NFifoNi2sasLvgwvsTBzgR9xCxC85wUXq",
  "key27": "5qQShnHUEjBMLJ3dxhnXG9nrZu3oHYcviR3aACMUvvvEPnYmn2NPv4TuVf7NpdhMLFcVh76NZGKNvvQYgntEa2FK",
  "key28": "XJwRMYDm94p3FL6A4eSjXEhg6XrhQN3ZhhbJ8AKWw57BiiYqqNpUWJWvZNt9UtUphAAzixBJ8BRbQAqFnJ45zWn",
  "key29": "4rY9Fmz3A9t8ojR5n3ek3JqbyZpdbkMvnEJCZ3hPRb6QvbtPhRCLqenxNWknJGkgcTvoWE2zXgmQZ3weqwGy4dpM",
  "key30": "5hKoKcuwDUh92HTUEwj6UTSRGQhEhTiRdKYm11qKYxWq4kt3FJ3b8cuBFRJ4o2wkpCUvm6QtPRoxfBk3FCqwywsc",
  "key31": "5pBqwAf9Y1tt6q2uJWWn9UeXhRBKUYqpuqsPvowVWju2fFJFTq3bWrpoJVM581hMDCAKHkdLUmC5ppFoRB8mTjM5",
  "key32": "54fGKfhjUaQNZDrmyHWtJSoEVKZdAQ1DmhsQzHuaBkorGURs6UHTvozDp9AiRZVKMdghkezUoraL32K3ikmVhivM",
  "key33": "AvkqkGjP3Q3mih2meqrUfuM4pgZJzEWw7SBC5MBUEvYMwzdSqxHdT6CyXRexs3btwm1zXAuoCKSLb8yCjTeaKXt",
  "key34": "3Qt3iqrrBSiwbeY882UJxxRiJMez9hzaqVjpX23tXrLMcJEQoLJt7UwAK4xEnBH2wSAKbj5kDnnce6HcvAGFwiJX",
  "key35": "5Z6w3rHDEMB7nNmt6sV3qEFZHT5rGVHAXGt1TjtYBaaZhtytSfuKSb5G4a31YTxbV1D3ymCpSte2w9Zv3CeZ8h9f",
  "key36": "2kGfrGSsTh3QpLdT6LtWXiyVvf1H9dM9iESXiSNwAXsQiJ1TswLYiQ6U3VJEKtjTebu94Z3XNZuUcRZWdoFamc67",
  "key37": "2AJAEBvSpzk4GEu3qAAqy1LchKwBoU3wfDtJZTbFC7rQJyKNzTAcrU6rEGvr79WmDG4nvHXKxQs2guS5QvULMcm6",
  "key38": "2ZJfBdYJM7HcgM33JbpFaPwet1T1TSoXuy6iLYDFd3Z3YwrsLZgfQvaAET9BmU8vmosSR68zWnWEYJVfdShXpepB",
  "key39": "3cVAd234GJBFnY5NGmdhYhwMJ91ZjQTxeMuv4HkSXSegRuZwKm8dY42nj8KMFH124jijx3Qye9LusRMPwxg1aFLG",
  "key40": "5cWYZ1b8b3YUKvgNGfTcUtrzDZhtmbGQEcXyEBJGJU1TzAtyW32dUoEvszFzr9Uuz9RwCb8toFDhqQtaNZVkVbeK",
  "key41": "5b3nHVeJFmnhkRvyu2EAz5nQoVwqPX4mHzkS3rYJ8RGtiFFAhm56qRa7Rhe8vuXW2jL6LgTX9ThV961pVepquP5F",
  "key42": "5TsikGZPQ3p7bfH3BAEt9Jgrh5LKHegDfBHTwYoeUBYxu6veXyyHre9XkgfiXJeQimnLuDNzqD7nJDJeuQr4dDHT",
  "key43": "2zRAkbnqETbTGDqBc57FYCdAnvT2ahkJKT8dwJr1Z8EbAFhsy96jRB65RoRjpTvCAcLZPXBBkAhq9Q5KbLUaWacW"
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
