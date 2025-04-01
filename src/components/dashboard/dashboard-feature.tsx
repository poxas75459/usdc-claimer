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
    "3DaqTRmLKfWSc9vFpL1v8SHNS8HWZdq8BFF3A4ijQxgyQU9bkT79RjajEvZpigPWTwMXXzhEwDS1iwQ6819HXBfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMhmB3PFMpPQuSwg57VxC7ikVKdpbfoK9qjTGxfTWmQcNNZDs2jZaLngP3tEJRafv4dM5z4EUHhYVvDNvmzzjb",
  "key1": "22bDVFogSFRKEAg78crAvXSfaGQWzLSzK4PkcST9CWr6rU5FCBYEmrYjyjhph19ATGYnVWToi2TSXG2AGtY3Skvf",
  "key2": "2sjh8AC7edjgJqhb65N7cfYtHY6kf4wqfUnGaBvd9jQrAFewCi9pXw8iedtcXZSF4qWcnjTu1dY8A9kexBk87a6c",
  "key3": "3GgjxxsGWFNx9EwV63BaW7sWnW7BDrdRaQSkWSp2tfCautGqrE6oATzwZJRJSA3ZMGafmwXSKBApv5AZmVrpanT5",
  "key4": "UwyqQCNFk6VQTtPXfck3eJ34rC3yrukQHxJ92dyzWYARKnukSfCUqm9xeNguzSU7WCWXbgQM2k7r3GUo2RpPyi3",
  "key5": "29Lk7C9TwSFtDxqjYgTrJ9kTUy4PSsgMeo5AC7jaV4Bgpk9NkPmoy2LobmGExLN6WFKn2etVrg2JaEfy1zTGuDMz",
  "key6": "3wHGndWkRnKauxjPsHjCwjTNzZNZNy151CKWtU5cXaiXDaEKf19Gi6JSTSfAH6PkJsPay9enYqCoVVA95HKUEBxm",
  "key7": "2BTrrXMfAh53ZYiyqMfssPz1q1Z4mVcrPho72jajecQuGXNLzuzdNetBdzH2Nt8W6jxyZY87euNZUqbnZ8Kq6PVg",
  "key8": "47UrvVW47eDz9VC8qBEKkJeg9mbPRcFmvFLUGbifyUUBSafsg1cJ44UH8esNuQxPEZL4du1y24Pev5NEEJdmxdjF",
  "key9": "2VbaHgRrbKowNKVRRTmNQXaZU83q1DK1EKpU7ZRbofjc9e7wJvagDTdP5Zd7wGp45DgWWtwrTXJE3ct2iXk74Ydc",
  "key10": "ZUpC9eqwJGijqsdL678kSXiHVoL6neuxpDZfmz8P14wGNPUrT3C9j4gqPRTeYXw9yk6Z7Gcy5GCVDG8njuH9ZC5",
  "key11": "41f2vsuqDsugvjBTBKeU3RT8Wg8NViEdF9zgW1krqh1E2RKesbLLjk32xC6Q3a9UgP9iyDMMgKSEKPVV6SAtgLbo",
  "key12": "3hxF3sM33zr9YJrxTngDEMxDPhUJdJsrws2fPzGkmkZZKFnJpv1rknNju5un5t6dqwTBKqnLxYdexmtdtt4XJhwy",
  "key13": "4wJKSGVyuyfKEjkbapKj49muvsVxyVXQg2U4SZ4dX59qWf3Hr2UKsSWZnE3Jc9fU3Bd6fM5oc9mVPk5sK2HwvpVX",
  "key14": "5y6JJ9GVA8r7RRoS4nzzuscPvoRynZG8XzLkECcqGE9MaL5pNaL7sL2PUHHFTXy6VJNaS9xjD7t7PLh97mkpX7PB",
  "key15": "3YNbcQaBQSEPQufj4VpMb1CcE4RpAv33gmNhPtwxEFzazbuWJw9Ew4Qo2xxMKsPq8B6duYutidHwetARSFeeqfUY",
  "key16": "5gn5SXffTdL97bwZ7uECQEfgJyHTGiYYDZ6x7t9Zmy1EkCWNJoyvxf5iWrxyGMHoNyFeoLXuWXyThzhhGAEQJART",
  "key17": "66ENzzrNcoMmjrNWmHdLwMQtVv2AjNDQEqwjfHYCmeRFnmbMWm31jQSzFi9JGcvV4rbSWe6QRtDU88DJmQRvdLac",
  "key18": "3T4ncXdnrGqzGU2BGT1qHgxbhAjDp6iEmdYuigDoYjzWFxKVYwQFYgfZKEea6EVEf51GPcpLD8nrB6iZKPPGHbQY",
  "key19": "3Y3QgVT4UojvXEJc81qdw172QSnq5u7oq8Bh9GAmuoHk9eBw7i4BE84B1m47et7SWvUWig2tkBV8SGmtiCRzTzze",
  "key20": "Xfp2E4rnz5E2L4VxAjaw4irWso1FrpSwBDZ9yfyDuDV6BGHizdtyTfducMQCS14MG9yr5sffwhukxES5rSzuuTK",
  "key21": "2PPibTwSxVtboAMksQBVXZPav1K4qYEP3n2H2wHBanZQfchNxE5AnC4yadxtw3feRduGKFxFM3qoGWWPkoLkJeAv",
  "key22": "3FtBAC1DGQZQF1fcnpNpG7Ycy8DMorstub2tej5HsV1gZm6hJnEPNnXC9MV2wSyUNfx42DSr7oA5FKzZqQLsskXY",
  "key23": "3MBrFukJkJujnBDc5ZWwffqjFWC9RYgSwYrQrvVtz2XzodhiodaCuaGEKqPV9S7DBACaNejsfr7t3hXHuyuM1Rtx",
  "key24": "2Jo14XQqbAfagz99vdGqxYZjmodsGJJRJ4MKB4owRfuHaz4nksno7z54XfenV5Gu7ioZNdS3pm5uyY8AjqLHTwX8",
  "key25": "4haMPjHdvSi6Q8NAFZFjzD5UzKBuXEawiFEY2Janq4zWiKEYBS3eSJXsyA94zaP5ot8aX7ZRG1eDhi9W9gu9EDPQ",
  "key26": "38gQbbnu6bpWbFaB1V5fKmNXSaCEQ746QNNRRourmrLThP9zkPaZxTFtxCLH5CvD7Ds3kj6uCBn9F9zSu7uUfmyi",
  "key27": "3UzWAbk2d1HeErxsEaZ1mcDgxiPmqDs8W2zJSC28e1qdfpoNRYrR82pG7vrLYjKeFTntJfzKS6VUGMvwJd9oYTB6",
  "key28": "34N8CLx99xj5XhgjpRsNoQ6phERaK3iVE8qzvcdSLoo6ZNV2Jc1derQoBFhTBVr91NTSungVboTS9Z6R8S7zrbkp",
  "key29": "3uUGjCb84Knv5rq94RmGjf3djuEZ53VkP35KspckErtTCwTimiwfJq6yvznB2QUo3mNhbCTe3jhLiVvdf7Uis1ti",
  "key30": "3fSan8dMCjrTAXeWNKAz4hJNoAyiJzKroMMKNUkUnTkU6KpRHZg6FPNgo7XfQ32HXtMkLJWWb3PT96zfRCVGQrF1",
  "key31": "2Jvzg6T21CoWJzHKuzWrrsUPPYG2RjmWdWfKCHca2VmTXuEyuLDjJZQrtaGXLf1fwzZQ3MTytV1nCRKtNmA4bUXw",
  "key32": "43x1oaKpesaY59QkjVZ3fiv6LyW3Rn3Ho5P5xJUYjAnBbZpEGyQSrWXWYaMXwina6U9TETqmpyLDvu7A1Y1pXhB5",
  "key33": "2JGT2mPNMR36oMc4Euyfyf4Sv1p7KvsnoHXgSn3K92vn1xjgQskvg3ira7YeaVLTnLwrUmxfqRw68DCUTN5xnYNU",
  "key34": "2mPCQG6e27wQgRuvd7Lkz5xkoUVWJkXMZkhLs5KdRVApDZNwS6ksUAQyxwCs6MfDA2dRr3Kj3R9MNhoQFMT3CHY5",
  "key35": "sAXfgsH7QPLyeSpS12e2Zus8cHETcnirrWnjPQ9B6MWUyhw9H3aVs31yN5vRvAr2j4bqk3q6W2Hx9kJjDXwkjVh",
  "key36": "4XtN8V4P2j9iG3sUpNR3Ee6Wiqaap2kVocQGLBTvBhk3wgx3vhnK7QTPsffW6RJVWnoEmv4ysQ78WtxevXabtsYJ",
  "key37": "5jNt6C6S4i8gYqP3HQde8tTZB9eG7YHSAMQttFJ7a1rFZb2y2AJwSwkC1Fo7gmAQnYwob4G18aoEbXeTCKHfVT95",
  "key38": "3JxwgMuZeLN9nbi7ah4apBiRWmJT9xKA14AKr6cdHYRAou2EdCd6W9ztNrJHrQ1vi45pLVHo4fGKpqKS8feLFR5Y",
  "key39": "657ixYumFoRbLKfZDLkwZBtj7LaHQCNhKZaehCzFmuhbMKJqZrsJH8m4su6TaqVCqxnsbxqxxDZ2xVGqf4d5wo35",
  "key40": "4BiCLJESzQ2by9QaBf8zicGzmtFA84hC57JSNTR7gdHNbJwVHwGmdbtrqSBM9V28uuQPB11zrvBVs9cyEqxY4q9u",
  "key41": "3eKRcHZp3EsuKtgntMTXVXn9UZFZq5yQaGKVqARmMoBwuMw8K9EpSnvVu1egSXxjRQmqV7ZGifQ3mLjvw3ZJyzm3",
  "key42": "HSrLoBhMhDofHRAJotVAPFVG3hWpLymKR46t6aRLe3d26U185BHMB3Qt6miYJRsVzxbSGNoVkACbZytnP94fhsz",
  "key43": "3j6uvSsKyBBX65Z8jA2jDytKN53FtMLksefLgbuV7zhrtAeHsBzq4Bzvu9CxhPehVKGwBRVByNVP5hNcH3aJ3bCP",
  "key44": "CPTJtdsJgpvTVYWQK15DnQN78iFuC83HGbBCYTs5wuBuzkWDg2e6QFRb77g8mvoLqWXoVYt5fStJkA1BTrQfP8u",
  "key45": "5EjPNwX5j7b4xvfgD6jA2pHrtZiKf2eYBJoadxfoyhYbVeDYLHGfZXCVkWVjMZupkkhxdqpKonzdvADToUQnQPbp",
  "key46": "tQPMjEy5wtnLyQAHC6fPUPSkZcCpcBUkRaKDbAu6ceJHMwruy4E3hm2unbLvbkQwFU1pCj9oKg2he3PtAALBwgP"
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
