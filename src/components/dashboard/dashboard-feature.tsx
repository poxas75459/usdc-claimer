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
    "5NiVKbw2YCvfisfXsGdYtkRy9j58bwxnoq7SKoBghDBM8XDetGTxGfPD7k55kxEXbQ5h2sxRQ5crVfzV57wVusBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BekFXxiKhikwHHEBMRLEiykzE536rCN1ZVBnX5faBZJ4qSkdCTVEMvHUFVVckYDzQSc3QhLdtCspA9yjRgZTc3U",
  "key1": "pS9VY7w6RDZ8QkGLtFEeSw6TxY3kbpGSHUu5RVN3XZRszxusZarB1wajEfsNyq89FiGJEYFRkohXseZtEBXEQcV",
  "key2": "3tY2b1oE1tjP2rHhatrV3VfuMJuanPdP6YfusHuFoR5R267NZLadvrGq8braJsfvzrntVre7abxB3mMcfcvopozi",
  "key3": "4LfJCZXWhJgJ9yfBM8VypvSfEUmH6vNsLoyVpycbnfgqai4YkKvo2ZgkM3DLq7LS6DfgU9ggQL8GhncXBxDeUGEa",
  "key4": "Wjjtsw4cDQiHhHqcbu7t4Ryjn445HvN6FVTG464mbxdBFXF3jUwg85jeTbPvT2oKSYQX4YLKWvaed6tPq8sLCDM",
  "key5": "3C39TaQ9UkJaw7JUVjgZAgDHvCLM72fz1KQJYjLyFwkiPxrW3yDcwSjj3YQhhRsTPacK6mYM7PrJUQUwpedgeQdy",
  "key6": "39xYmKbakBuMMbSU4L3f9pXrNKn5YWVSXKSRHBPxwxycxy7k2pSgG21PVX3puAnWz2hECwEXo68yZhxbXCBJYrJ1",
  "key7": "51agL8LTRF4tR4Jfaogb7vFb7HxECspHQwHTtsnYZ6LxNNEQxuCsiw9UNA93SiLKrkacqbvhTFKwPgQ7Q9eGK3ns",
  "key8": "3amNiKZv1jchS3p2GR6zbYMthY8iXPMfG1wofYeBxSN46gQ8U7enBk2d4ZLZeikJi7wGFan95U7JCzbz1dtBWjLs",
  "key9": "5HWUvAFWS1esdy6drYv1CnBtv64Bden14DKN9mJbZYCNYrAdkRrPPkPnuGvfGw6pehdXvapxDeySWu8jC1orcaAi",
  "key10": "5gYxbBtHpmnnAC9Nm18dY81QMdKYwWK3Pth4iT742NA2KFsjWANudVJKDPzSUNSgcDXJHe6XFAa6AMR29MATeZba",
  "key11": "3rebEDW98nDezJQBW64NHbVJqebobp1ZQTvVK2N8eGYtkZ3njz4Bm9noGyhRN1jicha2GTqpTSRhf4HrLjQfHffL",
  "key12": "qXPzx86m91WR28ZNcDWPkVRyJVWLPWuGXBvECCYPCer4vAa2TPKt45S56FMqiZAZCjDZuvpGiuc7A2dyzrBF4AZ",
  "key13": "378MghVKwDThs6sBJpKSoZMH6uGFgdTiLF9kWCYypDoBiFJtGdGZ8DrKtLmrb4qLrtX6NNhTxcHEk5qfgenv44ry",
  "key14": "35nPyqhNqKyvRVTvv9t4u3SS4xbSsyL1q4qTg6dBt29a5kXCLvKp7tKwPKRyWQf1QDhahqmeMyaivqmj4qmLUwLg",
  "key15": "4Hx3TnKFPeT9pThm464L5nnEiNWTx8EWPMcfDm8aEgZiqSbagnCn3x8FwAUtJ75wj4ab554USiauz3w2saSPu9p1",
  "key16": "2vdgUgPqYLyHVLNGspZ7dXeiEhoFyYuc78UCshuTT8mcaLLi263XVESM9vjWYxiFLH6gPVrAsT9gaDJNJhBe3HDp",
  "key17": "4NGufopa8LVveHowjyky4wo4urwZZvo6mRTJZmUgrz72tt1yQfhmqtgLu3JvEZLSu5THRFT37TE9t2D5RbybLNWy",
  "key18": "4r2HrFLXEtQPj2rZ7p5GNLRcfWSzmHn1CZ68BfcnijRuXkyppdz3TCq3GEBaThRyaXPA9QvyuZqSzz1YuKG2Y3DX",
  "key19": "3vv5jfAtAi82RZCGaypNSpjLZU8vGwYLMZQ8KnQS7m5igFmTi648mTkyknLb7GuhL6CoEt6mpxQvbJkSAGAXYQBt",
  "key20": "3rxs2iGc29nx5WJgca1AFkeXEAf5Dear5fbB2WpACG2YPsgkCV82xzTKTmgQMjw8ZVRo1T5BY81CdCa2gW3T4wH6",
  "key21": "3gkK8BiYBBvPv1gLcPNWHZbX6cDHxCtCpXEpVH1Pu6VM2pWkyM9CktNj22dDz55MpDPpUGvaBjn1RHG7QHgKSy9Y",
  "key22": "2QLjWJ7BxUiYEYC25DVMFLKBMN158kq5DUi1sbYiaUUjkbizwaivNPYPH8c1AntSBwG78Qf99zjDSTY8iAWP35iq",
  "key23": "3PdbZ2mQVQ39RuvdTF4mU47E7nyv2m7qgZUTdeEb9eNEAh5dybJ9pUxQuFtuB3ezCeXW9wYfQ4KT8NzUjn6dGqhZ",
  "key24": "3WcEMw3tQQKmoEnZdeyF96WSW2eiP258B3gWsvrsSb4vraMzo7YHQNX9LXaLxdt7b3kiAw6QajANJh6YK7mHpBGx",
  "key25": "4odfUT8CVB4CrFtLTZLw86iQFG9RmC4QSnFE7Jn5uKVES8tULg4bEmyWabetm5HHucqzFaS6CGsDnsVkEgNdvRe4",
  "key26": "Nf36opM5483VeAZYxZN6gtPPDsrcq7biBQkij1oxVjuhX9detnBHV63c6k8jfqSHtyEc2JKSFyuHntLQQ9fqsPk",
  "key27": "5pgoYHRPZWLfhfM7wWdjMQ3fY3heWst6cDT8Nd3CbJk6wqRLsFTXPHB4SiffabcsEkv4q8Z8g5KXeM8kXqSB6YDZ",
  "key28": "5iVWBchZ3v3viypm3HgaAd1SZvKuvhkYLB7U9VHKheFYZxF35gKhRaiSLXz7C86qSA8BzDCLho1aBtPEmbPtzFLk",
  "key29": "5VrBpqhudpkTxf1uYfVPi9XQDtXtrGmhp78eZihrQ5gKrRF3H3a9Hwn88jGdAN4vsZ8a1NSJytoJpwjuRrN7CfME",
  "key30": "4BhAWCb3HnLkA1rQ4jvcoEHnec9Td1PHZAjLLXbutRrYknjw4YAmiTwrDpigwRWqSQK7mWjWkTpbFLQwLxSNVsmL",
  "key31": "3J1qF8JDJPALs3A4z78MKJiJYFYZQ27jRZW6RBzWJHkYdG7dACuvC2bxZbjaQGvtFrBmEWbriRcXMZ4V3wMHbjDr",
  "key32": "H2kbB8eZ86d7wfYd7fm5sH4kjdTnGxDv4ip9hL5Q5zWmwTQZTVmwkQXSf8Nn55JAguQBRafuV8gcHR4Keo3Fukz",
  "key33": "3zUoXgtaCMqGM73dBmfofD2bPPqATJzFrKrjF6gphSBfdZG8bAvMj5aY5NpSDeSU8qpXHLgMAtAg51kfDHV1bVXN",
  "key34": "55XsxE45ttvSSwMbJgvvFvA1kZS7rpmkAyRf1bUv4KGguvcaJfkZSkcQPdVeAb6rmoPgVENBPc9UZbJdmXEWV69S",
  "key35": "25qhWdnLRhbkUUhvLSxGK8HS5KEEbTqs4AHvSAtT7a3jbBbxbCGRAxhLRTYaDB7YBwCRS7R5yHg1Q9eKcVguRC7a",
  "key36": "4CXJKbeKjBL6tBqLx89bfgCJctwfijS6znxzhpasKqBkV8TBDSHVz6S6gT5v9vjJTDBL9PFoPQPGy1g1r4YKJRRC",
  "key37": "fY2tyfnw1xzQLphV557ATYEuaTfkz6i4XeaWiA56GSBKFUitSepXu2dqe7WSXZrPTpWsHmYGWJAavq9nZZ8aRwd",
  "key38": "5kjqGG7szxd31seLgs2x73DuBBAYUL1EDvV4KcEHMSQozQCLx26NsfJXEgDStmh7r3YoNVTZdAAfz29mijhXiMuF",
  "key39": "61iZzkPSXSX3d2hvATcq8efnLWy57doyNwvXXVG5Wss47s7abGt4rkDj9LYrGk5shfWr4j74qmdJxv9QmT2RRYdZ",
  "key40": "2dXHkUpvTp4xzBTr71M87XvboG1pHquTWF8byNAcf3EjzvDHBK5q2vstHwfJPQ2MUDDAnhXuMfZb41zKAVfetbaG",
  "key41": "3qgqBV7EZtViZtJBo6gCdRazu4hTHVHidWWrmSgmguRBrpXa23Sk8jTyx2QELwivUL7WW3P1DkxpQ878a9FiYwWa",
  "key42": "ECFqPdFV7KCCnEoWJZmWR7bdyzazGC6dbBPoZXHwJsq8RRnf9ag5GEwdwxEgxMFwYxoHCaAm9oHSCu71SQcWPbx",
  "key43": "4hWCsf1BUdfCYTskiGQuPrCYdPcZ14NckX6phymku8ZQoqZKSjAhVZLKyumPefJ9w1xKAcRe11hiRc3yTGG78oX9",
  "key44": "661bZsUhSiGG9yHJ4cC9rMLn544ZmewweoccEos8S6dEuAE2dsT8bzjPZetQfBF5ELsfpT5iMqpd7GC6kLVmDQeF"
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
