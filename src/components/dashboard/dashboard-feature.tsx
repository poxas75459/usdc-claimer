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
    "P7g4EvBbPa7Ebmh1E83W5EpJ5TzLXv8fTqL4kYNZdYuYBtDf2yP7yZhE4JbopAVmkAJF9rc4JZiSRkcZub9Xyav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kYBdqsf6X8hnGm61aYJWashp8yqQ35G6JErf2S5cnL4K9dKjwt3ssmcaaP7m9e3RVtTrGvaeqrtkN3bZbgv2hUG",
  "key1": "3eLuzWGgowZzzGGyWYqn4fdxMRodPMsN74acWv1FXQEHepZKgW9d7gY9xbcwBytMcEhrvCYxR3nZs5h8cG78VkRL",
  "key2": "2Sp8iTHJzFBh8iqart2HWKqY9Y338CQvz2RHp77uHJX11nkhn9zeFTsvtLbob3XmDj9PTWFzwywk8gBq1Ugah33a",
  "key3": "4JPYmjWKVPiAsboM8CScJxv1BcCEv9DdUK5c5heqqcTdgaunMn5GfYhGsiZCD1uRZvJAXzug35nFhHLoFGDyXrNg",
  "key4": "dyT1RRWFfzn5ecajxNkg6PT7tRbE3ahaHSKuQ2XX5KNGkKQGGu1neu2d5pJqnmeXESEWwnQZbXV6UUxrAPFAeNd",
  "key5": "273EtMb27F6NYnvCWxPzQMWdfZBUkVr6JfjsXeVAL3HygBM7oSuzE5TU8kFNJX4M55egq2L31HRuy2B6cBuUatTt",
  "key6": "4X8inSdmtzqTeXKUdi77nvsSquvJZAWz56Cwfu6LdNkBfqmW9pCyNzuzaC5V3zkYdqnKEnQErbf9mFssDWhvSiiA",
  "key7": "31A73w6VLtt75R2T4LjZWke3mSyvUFtFP95DDFA4zpKJoVXe9HsJXhQX2EWcwgZ5a4wtDUqEjjyBpVLfYu45kL1j",
  "key8": "2V1MppvZP78x6kRkMM9dvAWBEVqe3Bq5BsneAFarVmtQKwgsZnzrec9zdgXHZqrYoY5XQmdsivyaZrZvKNPgKjG2",
  "key9": "3DYK8Zpi5AzWLRmLmAiZSU5wq7zbJW6vC8cs3yEiije42M85675ZA8um3HgcbVoq2217tkTseGxsih6Phx77bm1X",
  "key10": "65vn9MnSD8zVCEpLwduJdUL36oSCSRUxRyvAm1xNM277Zh1ymhX3QTCc3WQTf13v7iw8Uy91RqnjqGq45fjkCUcn",
  "key11": "22kNjzY4DYeJE5LA8z9Z8bAtHe39KSPV7wNcdAMQ764BRJ2jT8eZAJR5ta84ZesU72yczCvbGruk5bA2LUS4EgKT",
  "key12": "2NJqT7yKr1pBCf3h5WJPCgcuxwnxLi4zpZ2Eor9uFtvYwMbibvJwnPhq23g7XyaapPGce6SZpBWpQHrXtqm6jfbH",
  "key13": "3srsDeEdHW2YgG62kg9Y6B5y7CraCWm2WFESQ6qj8m15tYDH1KMSmYxbcSUkvoAqTSEioroRT1jmnBe4MXeQf4EF",
  "key14": "5xd6gvLw6KATCULdDRBBiPdR9mmhLrA77DJDsySTd3dj1uzXuHrfEmRJaJD2ioXitPPRUg7L4L9au7R1xmq1qmAb",
  "key15": "2pqypeGUMEx4bNCAM42u5Q1nqt8suVc8qq5npPDeiJTcEFXfJLVPXe9Zf6notZZ66rw1mChGzAWT6R5ahN8LRKrE",
  "key16": "5bAhmLgkyE6AePqgu7PwrZbTHYqs29QnXkps6ptGEaLZGqEcoN7jxtt2coNm8AGxoeXuGavks9eAhKdAFoskLfss",
  "key17": "48y9U7694VagnViiNRXh5NxLrw267Fn8SF8G9mjUXfp69zvgDLKdhAau3PEfXVk5E7fCA7vt46vngx44VaXvdz7i",
  "key18": "4zwUcWmz9zquqS9BxFqPqwZaAo9ACp7D2tX2o2U9A6wroy5yB5LPjtX4kmJs2WxmvDAPEi4YS9nThTxBbHSQM8ks",
  "key19": "4sJLNYctBifL95Bauck4tguLSWjiEvPeUhzMVH8tM2CQ1vpZubzHzwgYpzhRgdQGnGeUVR4113zx2CRddGu4ZQXa",
  "key20": "4qEkVko21nQidsCWokXWeqgEQaKagnJChAnohAk2d9vfEtLWTzZvKntRpdafDaCJHLecJm6bERrLQkqVpUvLB69c",
  "key21": "vMnWvneyh1ffDHqPiNT3qViJDyy4GosHaVt87aoV9fAAqNGCB1xZ1y5Cqr5ZjUB3hSAA5V2SAbPxZgiesxi7MXt",
  "key22": "5tLgWftszoXQExniJY9jCH4g9eEcTJXz7PVBH9BUofFuT94LuhqaPGXM9J4HorH7ZYpL75Qq3UKxF1eruhM9hNh8",
  "key23": "3FC9oXT5QVj53FFr63bi16FaNicW3eD6v81fwR5jXESHFBhASLSARRoFyMQzj3ZedDu5ELLYbLv7PDj62fhWJW3q",
  "key24": "3Wzo3PwsrTwvvmwZ84a2xkGBUPyW28LHYYntD4X1y5bksdGJWK5iue2VJ9VCoPp8TwcRWmuzd2BgC9g8rUMEMdEv",
  "key25": "4XM7ZFVpmgSN7basmy4cRpLrEPgyZikECgX7e1yvRqfqVA1BVe4dufGG2AkEJcbjdj6MsPqMpXJqcmgqV5QTgzm8",
  "key26": "3ZEDgRQe3AKqvN9MW9qPqqCcBrJZ9sPj4sqF6dYCgYvTx8tHtqSV1v4XV2MqWmwSETnrDiFDzFyzSwRAtzK1woYn",
  "key27": "pyG5YB2h3geu8Me8WXtaA7SmQpo5GS1q31DrCKE4SrjLxkLAYJdTEt6eVzie9exJkXtbQL2GfdVE4af9weyRWmm",
  "key28": "26HjSJuPvBagYKwPVci5EFJJnYAb9QoYcg6jYeG6zubVCJCPWT3ht8BgzaWQXb6FGAjnf72KQQhL1tR6QyTs9mZL",
  "key29": "67Nr92iyt7KtFTNHVC4nPvNKGH29HahjHvsgCRA6mEN9QaQGDC6L7qfWG9AxhFW5KqqbxPpRjoMEGLpa5nW2is1r",
  "key30": "2Y1b8sVZ45M5NDiARVMw9MC7QSLPpRi8MuqvWHGUXKkQNhSiQVqzjVVX1hsjmy9oWp6epjf4YPW14tY5oqYVmbso",
  "key31": "tndDX9F3RaKztpKxbsGDx5mU7UR8tgyqVeHNbszoKP1HVoD852wiNNzztAPWsLG9qdcx23q6jNdcdLuE9V9vtYT",
  "key32": "rp5FK7vsVKwR9Md1X2SBxyswBhDLYgeddHCSxFTY9ipeZsRvM61FifcJ2twwbDuW2diuBYxN7GhVS6sUeTXmKDZ",
  "key33": "3HqD6PmAfULHRiXJnDSCAv6u2Ymo8tw8cCdUA7832zBUvprzoJ1TPjan4WhTarbZQqKWEFNMjkDT2gNfTsthAzTs",
  "key34": "2Ki93hsyxKwSU4YhSRZn98ViPpowAx942zLq28s5s4F5eyKSbUekZSp6W181TCsWwXUqom5HDVxbUy2yQqAsHFkP",
  "key35": "2xjDP1UT1wiy5uaCEFhwzQE17eCevXEwe6bV2KsTqp5N7HnhbG9KrDSzjzHbRUAMkYySUkgT6zVeEfL5KftAtyo2",
  "key36": "2Ey1cWLzAjsHB2Av5NRKWhpvq23fgRvkHLca2aN4otc25c6xHdEsVxPWBmwa2SXVmoHzYPyVbqGooiZEdgg13w1K",
  "key37": "2yba1eqtyk6mRvMqrZyVjseUGLsHhuukRXkVJU1iE665S35L3x6kRL7WPUd9VYecfYVLPrstDNYnpaFmEGMCfji8",
  "key38": "23Fwk2o6xgSf6CW2NVWgFMo2KyyWQVRKxVr7D31CZAYcuxfmbxKFm7Y6ronpRxr6Pp253R3CXfgtaUis8qfmaMMa",
  "key39": "LpgnEHV1BmarWWchkHJVK92QJT2WAp433t1VVdGfsdQACBHPApGVxiRL7p3kmPZnVhcmFsGs4EVhfSWtHZFJwKP",
  "key40": "hTmQWffYip2jK5UUNgLgCoyX5iSC5mJwCdp7G172SwK6USgaCiAmUzR9HrqC5PaCqDYv2FsTgF5wujq6YxifDgv",
  "key41": "59j7nBxPvDCEKJTxGuKuznNWNB3RvNgMGEBsUA4ekPdkbQUNEYBXNkkDT7HJm27cjxHquqtJBAuij5YmjaCS28wf",
  "key42": "4YW6Tmiddhjju6v6z2JsitP17255btxG8cZyB785d2sgpD9TQjcKnbv84G44qCFmoTNkWBSdt4Cox67eVf2RS8Gz",
  "key43": "3Ygaf9yLnLTcVhrSXJFLgmab8taKYHeuURfWmBt2dVifPXRT3C13QjUfwx8VCKX7qqHztpXV5LiVL7pUB3wy32Qs",
  "key44": "4ZqTwWxQxdJEFnETLjPTN57H4qLhWy7VhS9tenF3gmQjivFC3HpBeHn265YQccLP5MjiLv2mCcTVbisfpGdbshAm",
  "key45": "4mrTJ5QUukY83bMkoJadm5y5nBrj2H5WycFW5UoUzNRp5nfoLoNoNFAtwfENEUnMnk5RcaMcAdrKJo3iC1BUeWbV",
  "key46": "5rz746mXjK2JUFw5zWZcePLkT5Uzifr6twyjqVoyttpNPtcWcPQAbBQMGwhiHEBjy4oQUCWH9dqXV1DF3CDWSTxn",
  "key47": "4LbTsh6Xad8oTigfWoU9VBNtuvsnfVc9JVRq3MagiUA5RWFijqFZq9dEf1gvfRgXSBhiPiBgL1QEubPGFevGVJmY",
  "key48": "5QJSC86yARVL8axBZaQjDepKVVxmjivqBCUuK1Zms5cVJ938EVZ38LerR3ojZtPG33E5qqxtc2XoasUt3Ytg8HQt",
  "key49": "4STM5ecVV8TzBzCCByJQbfmi7oNoCKSFQkKy7Sg3RHXHEvTyq2mZ2nzRUX899YPrt1qABkFJqY9R8Pzr44WCm7JM"
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
