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
    "kwAZbzQWwps4a6CLGaQeaTTNkAmKaVK3rE1YZxnsf97emTscu61HRq6uFLJUHrqto9BTmqMbBK6BUWB4zBX6Ug8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFr18PMSdfTAemWwdxv9F8UdFdLoq3LHoH84BG81uK7Z1eFmmhvq5Qdn6r3ucBZ6XBgKd71g7wi2sxfLd2CvWXL",
  "key1": "xPKNSikwin54v9yRY3vdjwDc9bYscrZzKPzTYBrfSt4uF8JgPs18o699cPGCr6KajFcBLScdGZYydgLgGmN26Kz",
  "key2": "5JrcqZ4DAwEPCB2dzraVfRGsUSHrLmk5XtjSa5foKEyVRh6D5n5TKSuXduNnh5c3upnNqxSixCjH1ZAhWSB3jiMY",
  "key3": "4Cqhjhiq9hcrBYxhBvQPchoqDrEfNLabmrJSSVjFdnWMoPKjnr1dyLrHfJg71Ew8VUGoaHMdXc8HZg7MfU493wT5",
  "key4": "5mdDj4TJ42L3q4RjLPHs3PjgNRqsbnuthVVDJeSBQ1jMYSqNnbsNYRVAmfGM25iJa6eJ3DjZK1u4F6HpMUn7XQyd",
  "key5": "j5891YRYTTK7pLQmDrbxmj9uWD9VNtSnwGzq2ngM9kgHSBtL7AosJjQKqRkTXM9Mw5GmeErFxJfRoAQrnNnLkfY",
  "key6": "4nErokSrrYcDytRVXRkLWXbDFAzAkM5jfJyugviugri7kf9HLi4wcQakKJejQ5QTSnaVx48pgXq7v7FvuLfirwzh",
  "key7": "33AsMmuvZorfe43BGghg9PwFBgdQBK3mTH2g7MC6D4cAoAcSSg4HgRAzALqGNKbbWqHu4He6JwcCoCKrmibrubSz",
  "key8": "4YWBcYPNYf6TdYWE1u1FHteELi3kHoWD7vrx16c1sRP68XiohkdwaNNSmKHqTHecC4JAwNFALVp1bhVH3joo6Mue",
  "key9": "2Jn3rnBun6gbtRG3aFW7spSGeeXsHCAeg1H8CwQHyZY4AaA4RzDFfqqSkv4mMpUHfsq8v4Zqn8VsT7eYC8zqGC2A",
  "key10": "3tDn1hXKvUk6Lr4wDWsDk6HJsnaPBYowpZ63hJekFna4hXeGSEqVQ6Q9hEJLzuxFoGKR6FBMoQ2xoh1MgfniTvpK",
  "key11": "2jGNH8VtCUMNsf7ZhUZdv7JDtzXQYGVueXRue3wt74Hua7TicLLdzbG4rRgAekeSHk1ziSDnskwHnZwaCy7NfQtA",
  "key12": "2UZ9NAYPHfdMcGdCLj8YCuPvCDMUzL64JhVTU7CoLUe6aXbbXF8FSKVQ4Tvj1BD8fHQToPn3X9vg5ytVWsMJ8WXA",
  "key13": "3bAkaxErb5HYTpQpDwef2t3utSwa5JDm14usc8KGbgivbKKwkTFYY3BTfQWMYLkQ356ehM2idGcfqRWxNdtcAhJv",
  "key14": "2i2x7gdFq5k8hxpkkcKjkiVxf9SFF19FhB3rZ5hfzV82TWSERGrAoMRnVPdnmpCWeDPhAApfcjZKrNiJSpbjTC4r",
  "key15": "3KhrsVFN6Y6gCn6QBtF9gkq3jEjWP5Yij8E3bBeEoug66Dzrz63sGSN6HcfLQq18bJsDYbCrvTKgjVjdQJuYVpWv",
  "key16": "Q8YNAr1fUdT5YKMB1DgLCEXTEBUfDjcf1LS8yRx9h2PSyZUrQ35hmVqQ97KRe7tfKiLcQhwwihH5rWSZv758DLC",
  "key17": "54rxkMW1z8EmCUBNVNhMLwoyyhBrFDEwgXafcbHu2vsjhyjHpq4jbpTu9cPcFXgyQhRTCVSAUvwoeUaKqrfrfZiE",
  "key18": "26Qezepx7WcUyMptCzTUN9Mkotza1yQRfGHeUtRZA3C1tRgYwfH2PZENKx2d4qsmfHJS77a8TTry1PSLtHtqfGTP",
  "key19": "615et61pz2PPkbEiW2ddVBhV9Korp4o6tBjp15dPtLQw9ThBZ5TR1mYb4Ei5YDsjc64s8WSYJm6aStwM1ZgL6ra2",
  "key20": "5v8HXP3Ho2drW3hRoJnKvhSHpx8w5427EmKWSRQtfWh4s3zrQQXnDqJq4ewBwoXJuvmNAPVcXGiRqQ3spixm7MQC",
  "key21": "5rd1gZrfs4y3kVQ3x3NQStQFqtL6ERtooDxJ7EtVAWciJ8HvUVn4psKmcA1ZbnZpv42MKnKB3xnkLuJ243v7cewH",
  "key22": "3MhTecBVD91HjDyu4tLgBLm9ZRKEqPG6yqcifZXxYtPjYAJiAYkJPBBdEWtKukZ7JCtBwJhhzADYrRHTqjXtEtk",
  "key23": "XYrfmQYxx19ySanqvRtewWUnzTtUrZrCK5HvPy8Jz964FdRHTQ31CNQaVC1CXeizvSGf6HCYRy3EBs5DrhoyUwb",
  "key24": "2EkxV1sJZfj1H6W17toyRm2UkBHRkNEC5QWzbJsy1HwzXBZ72zThAxbobhD18Vu6sneapuFVUN3vjTixapHqQMs6",
  "key25": "3JworURcNpvRrXrj83DLTuxo2phMznsm8HwFgkrpVNi8obg6FLkX79ndGAF9d9xeoJ6o93wfZs9WgQ22VzEfaFn",
  "key26": "5CYrFFGNpJKnehzRxFGRm92MND1FeFknFfiGNF2yjzP8Un62J464swJ7EBmHqjXRhiRWDko47ZqeBcTbwfYZGJxk",
  "key27": "4YGENaSPHXVC3acG2ig66BwRwUXGPNH8e3eNmBqF69TbLX4onPm2mEDKu7J8NwxyKA1gvKDXVXVXNarbi1CVtNDT",
  "key28": "5KdVnXM279Hw9Zj35KVBinWh6igxkWxEXgfzg8f6jZ3DqmBqG6AxYPcpGzBe4Zzb4bPDnmu7M6dePkPqJxuPiHbR",
  "key29": "3oP5Wx5ffMkVPuQNB2Xx7B5d425aREhqtVh7GmnrNqxYVmKscWwjd113cdRQAMqfZjM6SANCQTmXdMP5bbjj2QGP",
  "key30": "5ethV5ZHxyptgLjd8pXdF6PgfDLzpgU3MEYmbaJgvuRU4cR3BeF8DPdQK72KJY3Kh8gsEiKrAtcURZ451gaGsvvz",
  "key31": "4vhViVwJhvYr6iSpgtZNNz4fvAF8MhGsUTb6gYTLWmoXg4BWco2h3aXyY173LA7xZxSNBajLhsg2o9s3EubiMmFB",
  "key32": "2yvY3A4YTZfgJ5GnBAobypt66oxPVfZx1L9eM4psSHdCjue3GwTp2kcFVBukZf1KG34uWy8QjG9wMF3SmCePkcfs",
  "key33": "23ZfPutVKLjHthLVDnVuJnVWLBzFqAvbvhToybFo7KxsPTfSrwfgLJVYaTaHCV2Y9pKUtzMdN1QoAaMm2PcxEp6s",
  "key34": "2UVoTjmzaJJ6tkH3vv8zZmyQKCcRrzxL4etZAHSJPs47Vfgy98grRynouxRVpi89heoptuwJBkykuxps54qF8v6",
  "key35": "49yX9KnD9vk9Ub2xq2WuhPoEUaZFpTs1jkhX5Twd7LSegd3Jf16nAXgF9MnDFn1cWGv9Sz3Zk5VraF4jB3toNv9m",
  "key36": "5CVzDegUUx4uJgKmey349WgcgB2KoKBZvMeYbFk9kBnsKUdFfD821wqTQzcLuv512DELQGEVBTE2eiWZFVNjqtZk",
  "key37": "4rfDCUNs9AM6eBGXpS9SaB7W34DyRRHgPACCKNE4o4iTxn15LVGV8kDYvWCV7wHeFJD97b6ovMVoDEoGerd6XdcF",
  "key38": "iVB5NEVHBL91Qh6kq5XxFJQDiUtiN2YWMN7HheY1tBCx3vTCdkMe69xXT7ZnwTqgFSuEeSKutZz26vxXVQtxucS",
  "key39": "YvG1b7ifCQocQ2xDpfo6jcJvzYuMJYxGNVXrZ74NWtXKvJhtSopeVH9wuqZ2zSb69CzpbH1esWUrmjWMbYXZnZA",
  "key40": "584kcMNnLLMQy5APAzSVAhdZjqzNe1h7uWvdyPwERLJ9ev8YNA3CvxpAaMuDX3EyYfwx717TNdBYQWk4aL8Hb8Su",
  "key41": "5MfvXGZqKwsaoLhJtMtF3Nvu4MUvxFydHVwReaShQW3SJGD999tTWsEzwzS29ebmQ74NBNT61fEW82AZvUzvCVd1",
  "key42": "38SRUfPAnnEC4cR8Zp8yRDWuKJLxumvqL3vCQAeuzZWeJhNvTJfoKw9S87Kqk6dYcbLYhgzzaeA8NJvAmtb2qmAL",
  "key43": "3Rt9Xwx24Z7C42mEnsactafAtxnWfo4XKWrsgLWoh6HPCwNmAKFvb6SWtxoVZzuS6e62agVnhYenCRQPLxnJ5uiw",
  "key44": "27H1e2WgmzAxZKHiRM22bV2ayioMeQM9RtVeLuUG5okSQP7JFrU9jFxujzGqxMq1sbHNZMFdAAVNRuW4J4nm6ZXP",
  "key45": "21Vu3FdzANo2LT37RkztuhVSxH3vbYeNj6PmZ45suXbXfiVr1ZzXLHueywDK49ajY5v4tgtmHDX5qJRT2hktgFGd",
  "key46": "4j7RxHs4NYqBn2ZUAQrSvaBJ1vyqHokH4NpLtXKrUe2QagpgbNmjp9zLbw9oGH4CskgW74iZjuNJ7NFyKDpChxyM",
  "key47": "dzmBzjhqBbniCUPkrSoG3prg7yr8mhDU2Q9ExvMBEN9VcZ6HgSiqbvFTuNcLobjzgStUaMCc3HkUpZ6EAgqzWoV",
  "key48": "oKRK3NeyZvdxDego8KBxeotEGoZdm1wMgY5xn719QfdLZDysf7NVnvLVSfBywshvqrbsu3MUJWpCQ2CDYdkWQHQ"
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
