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
    "3ujtfjqLmTPJT6zSFWv2p3GWM4iVKvMkXYQ8Q4CUeUj7MMDsSWAknnytxuBdN68Q5mJzgKJ3zbN3JUwchDo6GYvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eVqmdyrXwsp5DSHitz6ZBBfTWdQWqA9yuSSshLnxLxbj7j29pdxrHV5d4qNaubSDD9GTr1XnG89PHVQfQ6PKgv3",
  "key1": "4m6AcXu7Q3gkcgSnHf1qChY2RWuPGhAUphvGKs6RtWY7Zpw6fkR5ympNWJMp5AUEywVHgijyXUNXkphuUhiRx4Ue",
  "key2": "4eo1YXKpqboyptvTeYmnN5hinkP9PG42Dc9jL9JTrgjcAXBovERvvF3GnQSrcZjwjDuuLhJSTZyneMZCQTH8vjTu",
  "key3": "43JyYDm8jGtAxLLHW5S8fXKeJaMSinbrxN7DLns4rVuCy9SgMa2ULT4sybeR5J8PiFTRCRR8f6xsPHpMVFv1GMZe",
  "key4": "4FS1zGEcefoirrj6RLETaNyUqch34ZVmW643gRYzZbSRspbadvGfmF9ohALZ2B3TGS6XtWZf67DY4Pafef19HY8r",
  "key5": "j5w19UyqnRXiH5C9igBRqcxUUkqGS8WTCXQz1yQcR4bEBGmS6LTpEXutoDmBPEnNBrEXcTMBk8sKJTjhCcBsemh",
  "key6": "3Zc9eYa9FcHuR7xrtj3Akpxno6az4GdiJMbFKbNcZ45mFk2ET6XiKLVKuU9aFYpod8JBBM2R4vgPJw1ePBfQa5jm",
  "key7": "2t2hUQFjVKNojepp8hVQyxMTsPaKV6LsBLXg3HBacGHnVLSoRL4BDbSpBppe1madLXvMt4TN2LPMs3oLTR7e6FhE",
  "key8": "4a9XJ8s6bi7Y9sEnb6QhqrqSU8TFyTkTAKvzXux6zxkyqHvQHi2W8Cs4PUo2BUrESg9LRPKnEPDtKyzZeCbJF5BE",
  "key9": "4zXFBby9c8nhpE6RgM5QiE9KAu4ZcFPBmQ7cJMa4y5YdwNjn1GB6uCnA9snNroir28Jw73CPceRsN1XG3oz99aTf",
  "key10": "28M5MduaAAdiVhxqWcwgFXSj4LCLX1k6LKCxiq7C67NQBjb9n1u13nPkCN3YDcTBys1xrYoTESSyHxKF5roydp6Z",
  "key11": "61BobVBjMQh1CzmKrQhFC8qGqJA5bAeKUikGJdf3riZ7GvNe6o6ihTCK4DjrHY1D3NRxrPvkoDV3VFfVafPcfmhd",
  "key12": "2ssg3MyuPkpU6YjyffAnP4irNtmbFXTFNdoMqzyu9wwncbiXUNjQiX8bfBmR65zrZFF9stP2kKkxXZekpctbzYiS",
  "key13": "5yc9CLCYedTMh4rPd6PnoD9fvRJGEHxcMcacLCZLFJm2SsXSony5Q4ZhdAyx8DjAW6fdC5rQWt5n5Ykjn6nQVahT",
  "key14": "3KVUJVPG36kCbVRghGNRPpbZ3gnQAnv1s88ycGPpSJiw4rzDkrAUoGa3ipQNywR9VaT64HhrF2CUniKzX9riu3oD",
  "key15": "4WMaqQfdqrHM73y9VZJNc2eCtfHmYVYK6dGM2RbY2XmYRmV9xjN4DV1XUqvD6CT9sip7iNK19RjVMHriqGemhemp",
  "key16": "3BDbtYGDJ4xobPe4zG32mLa2aEJFpYFeNfVnF7W5DckUzRbrDHangpCgU3J6VcyeNwbq1rUbcv78r91Q7rQXzUUs",
  "key17": "2tBUtz3jrwZx66kM88UUSmvrj5Rum9MdaoudWunQ5wkieXrw26sLwBtcndASxhq4JFhKCGWXu7uQKTPL3jj6mBBo",
  "key18": "3K8g9RFzuUAL7va3DTxKppw7HASqrbXYeG4BNTZzuE3qzAgTk7XYN6zvhbUaqiH9YVcZsxgw8fDNmHUtMQUBQULe",
  "key19": "5qiHKPk9Br8UUU3XCnJJhjXRjEcWrTjjJ1NqjCMXs9FYAr32UHoDWaud5GpUy3dDQSXjWqCHLuUnP9zKpNPdmKMP",
  "key20": "FyURs2EBNQeC2Zi9QXpiapet6DcvHkSXH53RDWYCPm5Ci9s6iohdMrqJ2v6c9jafAstphqWbD7SsazxKwChYS8v",
  "key21": "3n5eRBCWhqhfDkDBL7tHUH8beTdyJgRx1cJAhzRwRKvwF26jEy9JzB2cJfRCnHwsCQnremaxJfNLWgfdYttsFjvF",
  "key22": "2hNV1byB6F5kmJp83fZ3jkoRqZuQLGp1jv5bX8MDWdbV8znA1aJKAMh6hZ7GRBU8AYScHpiY7xxMUNQstAJT7d9L",
  "key23": "4Ldyp8NVsHQhS5dMWEBBRRKynrTBT2XcqgNxHsTo2vegPhwhaj5V6RPoxYhL5hGqRjDuD4NUGQkWdRx28u316tWa",
  "key24": "4BrQNQ1oYH61QuvJi9ZnXFfL3EjQSocpLHxfk4qY8kGzUFo8V9dBxcWK9BsUGFoN6A25BSJfJNR9stJvVm5SSqNN",
  "key25": "3MAebB7DNLzCJNcQpEkJQtbiAWCzBCmuG4UdyPcpgusKJi7VuvU128Jpd2r9DZE8VtuqmQthoHTnfmBwUciuf94m",
  "key26": "5xMiKHadXVqUxYpyvpbwzW48dNaVNo8k1MuP6xZp8vZxYGFebJbZavueTare8ZxuJ5q81vbcDEfV9xTGwMfcD2zt",
  "key27": "4ySKSkLspZX7wafZkgATVdn28P2YnGYYqMYxgdnDEr38Uce6Lz1JtmwssBi5Kuamky54kmo6gAVEGxAcY3CSMLea",
  "key28": "4ASzk8rPjN2qpMSE4MLEZNmzygY2at5imAW88muRNV3kXjK8exBEsmo5iDC5khh3Jh1YLRCGqaLMuUWr2F72yH7n",
  "key29": "3eFknQkSrYBDF8UJM37Dvm5q74kQQqoxGaPT1z6C13crWYX9xqPayzVc18sZcCLp6hJoW71McK9tLjFUTuiBqt81",
  "key30": "2iN67sDthBjVo5RBqbdpAXBkEwpiY8Rf6yjuA6BYt14Vfuu1BkvsUJE16CdhR8XApFtmnnrsHwjUUP82JjLXod8S",
  "key31": "4AJfCxci5evuZUnyzc6CsrbuzbYzthSeNGb6sdDo7TZkuJ3EuB8abr1RGoQRCG2JhwR7tSk3brHrW8b3MLuHKn51",
  "key32": "c71FP9SWjsc3VyuxJcrnn8WN2G2dNUT3Kf8S1ekGWNbm4KMseHSQY92c8GTGdeQy2eJpuTDWHm5kV97maryf3FH",
  "key33": "5tNq1fvskS2U9u6xrsdXtNid6f6MCGnPVc9CEBq1BVzhsRJV58Jx1E5AZ9M8UKMDW1AcBErqELeSNPcH7M6ea7iH",
  "key34": "5fqQnpGivC7AhY5zV3GaXaJVcb5ZcBRafGD69gbhXUDSih9q4vKt57AZQoqgGrjHqfxa9rea4KFV2dC6D2BEsnEC",
  "key35": "2Mx5P31Nd2aAcr33y4Sn5FtRMpxhf2KzEsr6vEMGf9SUEiU1J7ULk7EH3brcXq1yvaUw1eiZn9TQPoeqikKBkskQ",
  "key36": "38zKYZwMdSDa5PvuwA5mmMCTdZjtpM8o27WLoQomX7sqTHcnrBZ7DHskbjeCXavXeELA8bWpD6oGDbRwqLVf3y1B",
  "key37": "2HvdGrnF9bp7U4VR31suUCNC9oQRFKa6Xdem6LV64Mo92No8NaKdvoPiH7ZWoWktFyHpDW9hx3Ynr1NNhtG3H1FB",
  "key38": "2UGTPK15wAvSPyYDupt5Eztx6m8rcGSNifptZW84MUWXndSgGrkSGjpTCNdEAZ73Tjrsn4GCEVV9KkVeXnEnGtNQ",
  "key39": "5nCmC2GpN9BCAZmDNCK4LwDMP4uPSiVGZpuHu1WhoBst6t63LqC8UgyAxayipxG9Bu9qhMFp6rdvNU73SatwiDmf",
  "key40": "smJ8W1FwGXwG94C3fUYUZqPKFj1nbLfSmKpyZbqVECozyGenK6h1Rd32KuE6ZT1oHxqbgkFrRB3ssuExGj22vS9",
  "key41": "3M5FGGFQAkRaDnK1osZpwFC3k9evQsNQGtZhmsxdoyT9ZCkvKv1HXmAoHopnmSfDj7juRwLyKkqPcp5RYvHCsuYz"
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
