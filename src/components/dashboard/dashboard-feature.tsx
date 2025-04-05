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
    "3JVNXTj4bb4fLMTNXGVVkvYiorjYmXD1QesRyPLXn2nb7bSGYLem4nRgDxmVDQKLZLsBh1Kj2E6PdQYJcwQ45xBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RV7zgp3Hvb5XUnFm5gp7qwRhysdT35S7wTy1k7zfPizyj6QNPfXZQtaibtJbcRSgc5RhYyaFRkEir9qHiDaL4U6",
  "key1": "5RyMnEUiFG9wBxy9ETYwpiUdiBzg2j1MtGFGGq6ALcrCdPErHkx5pcRdgYgATpaRXBv2dq92Nk2sQZhF4dEJ7z7K",
  "key2": "2E5ui7oGHfaXLk8vg27DNcCpE2qqvySZr18PCvE7YNVJpoHh8h4bqCu6HGsTBdgS5Ld3p7QX3R2afTwKg1SHVajf",
  "key3": "RJAg3L9ngu1D8EMLaV26qDVgNDH2CHtLevtt8HRy2x8mZ69CQeXiZLgp9NGnVM1Lue2vy4veHnQXaZsGjXi5oiv",
  "key4": "64ryQGbpayhxutcmNYjKFTj6AaiSBpGXSAj7mEvZgLnZy4ZFEJruVqbt5xFKmLgaAsVHPbXJRhXaqm4AWB2gY1VJ",
  "key5": "2v4BTiFczsatfmWWSTkjyi8aMYkTYubyrZygBw5i6aQCTn8L93FL2mt2KGusoDvrDpKDxNV5be22unhNdJx43paz",
  "key6": "2CUW9ZLS89Xws8rp8SpYgBHbLrnJZku1oT1hM4MJzYBxdZnSR1VbZwRs5FrWnFmB9WS68G6vFnkVYrorvV5tSy7G",
  "key7": "SeL8PPNAmuGoA5VndxWQTsY59ij7EMGDQB25QGtRFRnB3Tr5FvK333TfJeit2hLPQDHTq4qJ5xiJAKXVK72VZhx",
  "key8": "3szs2LhEUb5hiLyWj6RhhacLpbitu7nMEbj62WY5FTaS6GR1iEShNZPuBRaUFEeXdXcBJFu1LVABBd9upZtEH8f9",
  "key9": "5mGzunWpbpnKbbdtQ8JwVsSzyqvjjwnpqDviqaaqK6GJKSMjToT4VcgRDEVEofUrYKv3ru3ZSgCRULDUPz9uE32G",
  "key10": "5Cmffo8eJxcSMkc4Vjch8q1GgakznacyjDMQVhWpgwcZqXBhZ3v1k7VNYFXHqDVPujM5Bfh2xVt7eiPKzWJsxD4T",
  "key11": "59SFHkAtnNKJ7MgCzWeB8gtoKqxUUU5d3fBQGuHWeHDFCKCPKaV2c8uWaHKTQEVEmVqzDbwMNrJ8fJjANUfNuMAu",
  "key12": "3YKy32skEDgFKvPXJXVhMU6wbBSQ6Hc4p7KYD9ogQJW284B3fhi3vA77AN16XL65hzkVB9njxQT8aCgSRyJqKRJ5",
  "key13": "2rVSMFZPRagjuSirThvibMv8arc9WVVAPCxcwrhueqMqjhRkL6D9Cf59hsEzmCTG2pSKRqp299v2u4Yymk7DupR9",
  "key14": "5uQu9swETZ168bUw6cXoZMJrjkK1tzm35FB9QN9sneyJ8fVEvJhFRYKACnomD2TARMYEsttrWkCwpde8H6zuAoYq",
  "key15": "3RkZMSyL7gMHbakwvqN57ZSZ6nL4fkpKeh1EXGhyxSJXbD69Lxho5mRuMeANbmmNzFPkAHZmRdPg43uJUB1Zrnn9",
  "key16": "3te3i2m1V12M6L8p5KeqN5XdN453qzHkfkCZrN7kohWXSi2G5AHwr6EsvNKLq6qFV6Qq8gfu7L1HgMEkD12jnxZz",
  "key17": "4DABLha7sMY4zU9nkbjosWRVPLVBYmFAY37RJS3wzhKTtv8ir8yx3ZfzVkdpPtY6aSSCBDTp7C9JJoKv9t44zGT",
  "key18": "64bqznJK1Kv6X4taSz6XbBv93DyBpqZ7cV65EJN6b2GAowwVQNinYHL17AAMXfSBtSLZaE7RWVGErkmpmBoRW9b2",
  "key19": "3myouNQPAz2PhE7mmc1UMF9Bpuub3jDfqPjtgiJ2k4bC68YnGbNd5Qo2TmVULuze8zHrCPKXBqduqPScpK8riskv",
  "key20": "5Vcpe3zYqwZQiWBAduLVmL4VHyfo7pHz2YYbURTFbt7BihRhPwZo3HbCqwwMP6wuGBgJFYV6ksdKmRC7uo4NuWK5",
  "key21": "5tKdYR8275bZN7Enb9yP3BDuDcWU1E5JrtLEU1A7cJ9qdYsAtGmEKuzCL2V8oWMVcq9FXTaUozgDjQDPtEQiB69T",
  "key22": "4ndFbJDgP1W2z7s7TPjQWQ3fsBAku9QkHS729C1snQJUUjcN2beTpiEUPYLtPwpZGQno3DtNrE2NedjPPCh8x9KY",
  "key23": "58a3uohNBfUd782UomwozFriT3A9GYr1zQonS9p66Pq12BjQQZFYuabu25gKLKvztK4nj1cYEZiE1R634gWc4YsP",
  "key24": "4z19sUn4rUH8qxq5LjkzZAXSnQkTiUBPZSQRKs4cRry9NW8m3XcXZMVCtY1EpBQL2quJFQtXkR5N2hkvjnydtwPA",
  "key25": "2itKxhVuN9CjEWTdw9haHu4sqZKkRa9jShQqrZsjyBpQo8eEmcH5N7Eg7StaF3TjEYYATuVKMmZsS61wUF3cJTGk",
  "key26": "285Nc4hRVu2DtTdpRzUnnr5bsWyD5jwF59mxnM1U4iZS7s2MatcPhKWHkP8fHzyrG6EiYGHAsYJVu6E89tXzxB3h",
  "key27": "4nBdEAJcumdmgPUWkfJp3KGieZdJTwLG9mkTty5fbpEFq5jEm21fu8kvVH7DfJVdqhccyvZcCXsqcPcv7WJitPpq",
  "key28": "2Zy7fCMsk4NocxDJyFgfAUPHpkVk1dRrjHQNAYEMTaqYD1BCwsnvGXgrkkHZDXr1DVDccKcBg4i2rGQqWN38AzWg",
  "key29": "3Nd8cJPKobpCbxNUYrRvRbcnXtL7uR42Tv1ovMgWZkKKDWy7LRQT7kp6VUCt9WCPsPSnzfh1uDnUapWSfe4QqNGe",
  "key30": "4mhmpgSpdaY2vvyFXiwzXaipWeZFJ5xiaCVC2TwJm67J1S7LbKUKzuSmrPjQeAzag63My1FrgRAU3Evq4hojd648",
  "key31": "5jnvbXhejHotRv7RHX4oikNeg99zRRhRTtSubzgGgWdYCCfAScdCwDjYsnAaaMmyV7WmwhZ3Cc9WdxTEfKepBA8P",
  "key32": "3oEDhJosCwuXBchr6kxGHZSjixc9U2Tbxuv4og31V8Z2qzjhP71ZerjHbjtFpx4ypP9xLGYq2d5EuJMFqe2tv3ey",
  "key33": "3HCJBZBxJPVqy6fZX8EmZNzrbdHmVdqNJjp2BLRd4szH2tK9K83UgSQMyu6EUwUXYPrCkspe4c2DgJEgufYv2Ht6",
  "key34": "4YavdS2nzaocWTk3w3j2LL1o6esjHPjz8PenYqDLMccHro2p6dMGfM9shZJ7F6rRkTuqWm9DCDS1oGHNn8PajG2d",
  "key35": "41eRsmmeQJCRkLxvXywPNNchXCKnnx59d5WSkWJBjmL4rDcppuk81JyFFJoF7y5ui15pLGnN3yVgUsAwb74d7cBP",
  "key36": "kKQVyY7CKMyHDyWSUZ6s1jVCHCPmgkT6RFXFbBwyzb8JSvZVSnpfNwyPQ8KvoiZgoR25rRMzXTTY8WFeiDocRCu",
  "key37": "2wV8m2CnX3UBkUa2VJrxBNP5mo8johqW8e4PPHprw7sbgZvYvFSH7Tzp37ELdvmPtoWezhihyrJdiBP4qXw6obpH",
  "key38": "46Nfvv5JQhJJDYcANZrshHFyWTsohHR2JCQuvEM7bHxquudFTh2bncNdaCbsq2cP7SqRdAKETscBWx6MHhemwCct",
  "key39": "5HMcjczWfuoBhDLzen6VXZyZxisNJ2GyvaVCMXxNGfis5gofMUjftmFqfLPSwr7CpuLHDC2YPxfxRC2NFB1ZNejp",
  "key40": "2k1Ck8URn6SFVxnkLmJv67Ee9weHRwF5hEm9KH5nVfPtzZSv9aD3jWJcCzGz5S4nnLHqX2SiFKA27kyCdDFEBNxa",
  "key41": "3tuZP9ArueF7xsErdReqX8XnnTR1iuercYxMfyd7htjpcmMSjdWih4JQbhvBa5d9CV5KkZmZFsYK3JBBUfScXeUZ",
  "key42": "4Au2JNja9AD2ZaZjQLrquU664UPk91EQRuxQV3Y6CXwPxvVYH45uSXT61AUg4xHhraKZdcoz2BMi3HBDLY6hfCmX",
  "key43": "uJcbWatcXL52e63FTWgWpvUjm5QtEyL2QQQMqWvaogyUkXeGpNHr3X46qDDBndzThPGjnTbfbd2CfKz6SepeokM",
  "key44": "vFQq6VnfuMUKKdLCgyKkqw4igonwGM9dvePZr7GaPxRhQfuqxBgLKgXwNhfvj4B9NZQK7Yqdx9Vare3ymoWVPK4",
  "key45": "4Vs17SfQaojUSVRCMcfTojiHG1CHwdgCXyDFYsDpipHr2GckaXKwwKJuoSii3GdfZzL59AEARMf8UTBjj1jUxUTC",
  "key46": "3c7S27asdWFXdVVSijM9AuTnAFVxn9QJ3aYnA1UU8A9VUvwWpxSDpY1noVASRM7C9d71PUTBMoN6EdCusUEFP5Cn",
  "key47": "22fGBnG7wCc6vss2o4WhH33uNS77bm1jVLjVjiBkZcPquVQHQXxnuzDtYppZEz1dJ6VzeGnJrbFTPwHqvDesNxsJ",
  "key48": "25D4SqrasmCfmqFaEoGbJCU1m9ZhLtQiLAKyAbVpNUyJVpR3PMG8cPGH98R4uM8TQmEaRHhbtcYNB7uoHtv76Y8A"
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
