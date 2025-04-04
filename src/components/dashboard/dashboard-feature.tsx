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
    "6zxinoDYe8QV6tAhKTULLPJcChS8QEmYrt42y9rqLns7zT1uQ3bCRjSM7w74XXmmXLMGYP3DDqodZywRhMoApif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gooaxLB6zmn15UCsTFGh7Lw9U2zvg7ATpe9yRWjt2XrAMTrJ5zBW4yovwEBnXucGW3P3Mnxc65B43zWZPH3TTfe",
  "key1": "3Jzjw5HXuSnDWLsGjjoB4MStrWBLCjmLWsoGaYD6cSGk8mggqi5tUaVmJn4oTcWcT2VaezqRchKBBYdLtrWvRSPB",
  "key2": "AS2FzPBuyDL5qV339H6pZ6ALmzhxm33MN23Qh1TFiRBXXjehM3NxHfMyFcF3AiCe7N9JRBAc8JgVVvwAJMyjs96",
  "key3": "2veo75eigiw8tJgoZbqeFxzqryZHobcQAwSzGeJFgGX19qhZuzLG2Yq3s39mxzZ1QnkYzSdNpD8vxTSSdYTP2Bhi",
  "key4": "5xwqk4KEzimwkKYmiKuSRT5pSrQxpa5YZmbehRTbySZPnX7dZW8tNqrq6pSn1Uwy8T5ugKfUPM3ETWPkWE2qp2aN",
  "key5": "wJTbzMHBh4av5aGXkDwpzmmutTr2JGJLPctU3Yj1xDR5eTirGBpTdpTY4c9mEg6axpKTAesrbfnmVqnKfWBQuAD",
  "key6": "4paM95CNfzPh6zo8uqw4hwrzsTNHfeH61A8apzULVrR3HYCNYNoDhaJAsLTAFSVxPgYzDUr6RYcdXntzzBuJkg3k",
  "key7": "2Pq2fButRKSuVwj3uhpAueAydjVYyEZDcyqjED3iyzwVNcaY7n41ivXnP4QwZ8Yojf2wQ6VsdQ2kJzUhPGqrpgpn",
  "key8": "4tomSVMSNm2uctjmUrdETsQtjcyLNmvdoDisJsWNvxLMDaQVjZfYvvBfgjPtdsgW4wVH4cnGhsrqv4efjTDv5WYd",
  "key9": "3P8871ZYoftRt18iyBPbNHnoXzj8Yia1NMErNYaBSJMkRuztciMANqm2nAPoGJgKhhiRpzh3JpvGPpQc7Xe9JyXf",
  "key10": "3mKfjfMLX18iCNB3i8kxuHZ8u4LhbdA59t3rBXU6wx93EGtJgBtGc8XCAiJhdCEkmoWtZKywPJi7d9hLP61iBsLB",
  "key11": "35QD8BinsCFtUftAwAXxLKYDz8TYgxG4mZ1kUckWZ8mjbfJuAx65GZvT21TZvddpKYkZTCLE9fsa5A4L7k2xbcAk",
  "key12": "3w5bMwqKApYRjvPxJr7WHfpjYEAxag7xbfzdTxSoRf1DJeqhrTM4qSeMRbTUCjoSRQJTrqLBJ3WU3E7ca5XJJ3gw",
  "key13": "vuFDzUm4UZx4Z5siBoYjhHmnb1FHcAASroFCyF1iLS9x6bzLHqLHoKaQHxtk1K9DX8R2Rj4PetyYcykDrM5ZhJN",
  "key14": "4kd1NLMWJG3FaaAW5GwsS3He4TzHLQjREXBq3aEUNqDGzYkJFXxZebRCaZKYqHNj9NfhiHkRj3q3KKHVKM65Ubs",
  "key15": "48wxP7By6ug29qy5x863WfwiQ45Q8eVDbfrTRqogJpa1yfL6yNjDcaM3Xn7HXN1CLMcompPsNmJppMeYhLYdTMVx",
  "key16": "35FyghWxFpZ9PdKh4sUUPyjov8fgsz6MVp39DEdsBMFbBomAhJ6mJvso7VBV4iA9qi5tJ1Z2oZPiuRtTyAvcY1f2",
  "key17": "2t4gs6kwKbxLazF6HbovpRpneQ9cX2hjyT5LXyui2ht1f4nr9GjxR5BEPqyDuo8irLbVQtLq4dx1ZNQSjE9JiG5W",
  "key18": "4CwRGD7ZcjAghDdvLkdNN81F3PMz2NhpUKU9NTXDwuu414qGfqTMQWndCqwoddPxEwZdYYRUjCARzJ5FBpGwWk3f",
  "key19": "3e7JuFvaSr1yoj2kvLjSfYGqoDoa4hcySFBos7Aa9AcqCnUq3KLxGGpqM9fzVe8A61m8UGy94antFyLZenQ4apdo",
  "key20": "5cbCbqZn86hMPJSR6pdsgByVyA5QZf9nYcTANN31T4ud8p3XY89kGAxaL1uAjNDgpNmqaB3gTJKBs8QCAD2sTsQv",
  "key21": "5exDspmkFqn4NhMoraZtu1ZNwrLotF6io64HvbvKKoZSXQ45UHB3Lts3xAwwfneHVZmD9U8x7zwLZDHKpY6Szs63",
  "key22": "4TrGrfvg4XE7oLjkcDRFwdsLjFWJh4xotYYRjAwp7hcvuLcp8kg9khgEtsRRKEHUpHCReWA16RZzgQvS5FegxKfE",
  "key23": "JFHMzo8vRnHPwT6uma2nFuRj7qEE8F4262aZuKsX9W44ogWhioxZSM3TidDzDaBXiTRXNd6ro77ZFm5Mj2R2Vr4",
  "key24": "3H6dJvmB4zaMUnfup4tHiUWEqGMMFNdqPXJZx7MdmTXL89SexAGus8nVGEzyvVw8fhfbV4AT1Xucgvdi7ufjQ9iW",
  "key25": "3fygxymhcmEo39vYzZCefWFxYrZQ1K9K7aYfmHR5bdbJeP7jWiMUrYMyZbXC8i3SjuP9ktPotYQ5puXQ3gqjBqz9",
  "key26": "2tT9m2mcucjDsn9cEHeMk9ynLws6s7xaHmc9j69hAYvmteLQ5QFoHp7NAQSmTJDDdJZex2DSAwb1SVZug5G7Lmbm",
  "key27": "7MaBWiSY3wm6kwJdJ5bYhVYbB6EHU7PFwtaVgH7yG6MW9ZgP2kkWt9EAkxa4d6ce1L5fmFLM63hwbQMLGfYJerz",
  "key28": "iEZvYjV8AoE4B358BKDZUfFaWfZQ4rzUEg2JCh8CSYzRh9coexvPcERVLT4ReUUKteXXpM1bLtcMg2ru3ciGkyc",
  "key29": "4E53NQM7LmmutBsNxvaks2rQWC6sitjJMfkYSPEouHjfoWbM9XkpVWfLg3Jho3iVagoRdozZsJFWMUZQkQCjfEw7",
  "key30": "3d5RL9X677Fu8MBKLyqgtcHkP4mKNCBHmsVXEMmF7otHQQYfqbb9CxkvEJdYzSvy43xcz5Lnw1gKULsC23mob6r9",
  "key31": "Z6aWqxHw26NJshFzmzJnAXMr6yZFyLSceUT3RBdjKjmDH51SsFwmD46JySH28tGYLsZpDRmuFdoMJYP5kSXGKzx",
  "key32": "Lou6hfTWpwfEazdA92o85YmHrBLxhFrzEfG3K1rRRhaKyMgi5Kaw52hkh2UhbcxmSsLwXVUvzaa6sogAfTyPpLT",
  "key33": "2gXp9d4QqUtTfdYPSYfu2MCiDhx13WwP3udVFk8wkU9ijowgWvsCPHizZuudoSCmBwAcKSuqTePgK6k1amRyKs5Y",
  "key34": "5ARBdAzTvfquRhH8W1DsRdmNwCHVzdnHDMFTpicC38iXjRr7SVNXQXvW6cHVMGWgotStwKCiGy8DWZ67rVsLnubo",
  "key35": "5ZgcxH3Dn1mVhUhBqYdcrUoLP71yDbAe4yYDbzpMMSBJ8L7KWCn8XoVJ4vFGbxfPBtgX2tUVRvfnNhQ2ipk3WhsW",
  "key36": "tVBRmRQ7vyLfe4v4a3Y8LrWMFgEJB9tpET8CsTR1SRWANnHtXWe3wbNCgTh6DK5JD8qb2N12tgPUdwr3HP9jxJ1",
  "key37": "5ZnSrYrGV65kg3wkoNQUi1Yw729m5RwFdyGdjt4AqZi7cJfe2wNBGQbGEKfysN9oDiRK1zDExe3JPmJbLwPGjzaj",
  "key38": "3L8Rn8L8HPR7gJxkuBHG5gzFudSuzj1vhghTuCansf5x7Qj6BKacQENDT61Jmj753rVM1kgSzsnVio6vHSCLkmQ7",
  "key39": "5QREzBPsTn1bke7TzTL6RCVrpiqSFxX6s8mj5ydFjdYcTKsGsmCf5TpnwdcjgaFPkfAeDRpKNZZjyovNpJv4UVwf",
  "key40": "3fo91GhmY4kyskhPbMUJeFnxWDy64eurMxy8vesnMetzmhaVV1iqguRwyFeRM3DEEEnTsV9rDCgUHtPfoPz9NCzp",
  "key41": "3RExExD4g16jSbEGr1MeqcFqNxPDQotEe95bkxLaFdGYPm1q6cuojCDE9Q1P9MVRniRQx9weFdPNAP1n83rMb1Fb",
  "key42": "5i3SUz4YZbroU6ZsgvdrrRLyjPRxJv7jX6yihm1YspCSWzfCPzZCpwchnvHiW3DkRnQPDp7oz9dbGYBjHShQmviZ",
  "key43": "r24LzwFCJJisniB5A58Dv5CfBD1evGzM5aYHozui5iiva8LMcpZK3d9ZpasnJisuitCHLJaPhrd1fBf81N28jYM",
  "key44": "2Ruj1SMHTNZa3Kofnfd6un2kw8xYzNwKmGENmZHPrXzVTeH8QpCcPGtiti98KFiPY1HRw6QW5rdMB9UnBpCpuprQ",
  "key45": "55M4V1qQLSXhk6XtkHJbhkdQZQ2qEkMPM3hG9MR2rLvetjaN9bb8hGoKpsb616PXchw8uq8M79g1WuGrX3nsF4WP",
  "key46": "3j2ZKQfjwLC6mSEQ7X82iaB9MsL15PFhaNvzHWtFVcR75Y9hegho7XdH56kQusykrr6WeE8v4wo3aqSSSXwHVePi",
  "key47": "WvRMahxA5dWm7FRGyykQuy425CtZJR63z6Krtf9TRoFbVivqjGcbgRKfNVLyTRGTmamaoXv63YFVSs2CPQp5qYs",
  "key48": "2k4eu3jg9gezpBvjMyeosie5REgvEcrYYLQTpKBypTLU8YrCcmwrrpe4WBwFyxGmsz115qfuoDVVFp8HYFVKn5vU",
  "key49": "3YY2a9D8z8xSSBMcL4DEj83njAvtYDag2ZLLiurGZZpZFLbF3d17uqueYkwtrHSJpRi4GnR8gpqDR9EL5RSnsBv7"
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
