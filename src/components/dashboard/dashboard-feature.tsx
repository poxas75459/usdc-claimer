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
    "3yMx9Wvapyo8UM27YTAdGuQovfhc5FZfpbHAPmGQR6yqKhAU4hn6KoBLqSFBwrZhr4gcgLVjH27HeaHsvoyfTD5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ptdsq6VS55buh9UkRDXcxwhFQMxdRdfSFWcdmXpuXFYCHk6A8yQmR4fcRZNPcy59YzUBmR2Tskfy9QThkVawF6",
  "key1": "4ht62QEN4ZaQ1KHP6NAVshHuYypGqvX2zCPqzcQGH23bZbQhSpGumH6NuhMbQMSf4gU7RujYk5dBnAYZFhV4vZ9B",
  "key2": "4SE2N732GrBcUcysHBtCCsgtazvQ1NQtmSGYVCydB33atGYScQFMsuhiw9HJ13FtwTKm3rdTFdn88h1nVhb42tAx",
  "key3": "3VBY6dEnSx5cdw6oJVnHgoUo2geT7a3o8cHvZG2czWupF3TUgVuMgNGPTAnFALcVFETsMbqH99k9CjcujUog8vzZ",
  "key4": "ERECAJcmWGfHNNCTfA3pxoxHqVb5SpUQh8HNt5ATQGfC5ThPZRG8DcJCZQnouEzd4M3cuU9fHXSvzLtLyV6PWUy",
  "key5": "2Lgv4uwW3qsKGWAc6tohSMw8H16pK8ckzzs6rC4RL7zbja5GP6S43BadiyEx5Dh7HutBs8ky3LCnFNuTrEXFYd75",
  "key6": "4jyJ8ybvbVFqkU1r4XZqokTd2TgkGQkGndX7Rqh2xeTtfBPUmmUK4ptPnntVmzcshKzJ7dFVH5bbJC51VKJovtZa",
  "key7": "312WSHGXk4JMoxwnxy3wEga7ipxfEKnRS9uz1V85q3J1DVVj6Lkj5Wgu1P4zRVQHR5o1GGEAAZW8JzZRZF2jrkAW",
  "key8": "2juVh9fAwQaUPGu4S9uYhD4QL23LmFiMuVwLvp6GSW9ynLbmGP55a3wtz17JKWh7F244tYB8eQjhHqWJsownps7R",
  "key9": "3tXMhJf41TdJEheYBfT1YfG6k9qVoJro7ZgAguGQS4zZcJLuzB5uJDn7hXF6vbhSTm5BknCFLi3EbQTP2fqWLwA5",
  "key10": "2ezgsk1JKvePUP5wsapPjHiFA5M6E49fsomFCcPB54Vjzi8hcHZv5QutY3RdyDCbvFVycMPiE6ysVVbn86BTFDAC",
  "key11": "2JrDn8RPDeaAnqUH8XfMAC9rXHnCX4F7bfKoqeE25zApGdiMdVBu5egUCkK5bfTpJ7HKVyDRJsFt9jbHQu57kQjE",
  "key12": "H6NEai1gwnDxvjwzJCnjX9D7HvbjAwnhLq8QcWjz3T8atw8gLquTaaeXdhtqk4yuGRmbSezw7n4L43hhSC8niKv",
  "key13": "31UoL65ULDYQEHk8V5YGEMjQnrRL6BeDj7g6rxZ842bTs9Lt6FtHcZ37rHRYwcLKvcMeK2gK97qNBqfVXgVQbyMx",
  "key14": "iJr9tYyN2SuBut8w1ZZj4AuAkmAEcdwCUXxkt2Yv49koLdBMyL7ZEMSKhCF8RwfMiHPmhuFVvHDr8W1fpN5dq31",
  "key15": "DiqmrkNSwB5dNxm5CWbDVHo4uu971bDCWXPPK7fj6Cv3nuhWhyefMbQeUNwXqb68i1ZBCCn8QhG1vGKCWyi8mTK",
  "key16": "31kTinBF1yyctiDf9q5jp4tZN4GgPFrfv2vKuqMdkFgECHcvnXBTXiEiUKrguCNYbNttbahb17QLCeeLUzX6V1am",
  "key17": "2K6XbJfutcvQzwDnixhSDR84fJBgjCneg5eXh3M1tDy2megpbugfKRwcYMfS64r8PuCscQyjWmNYZCPYJ52ZacuS",
  "key18": "4jrVduD99SMrRrwfsPHuYE9YhYmMaskdV3hxiGck8RajJ9fUfAp9bZUAUdsRguoX5QTSQgQyS7kKr1JQ4Ncxh1Rw",
  "key19": "4RfdP7533q9Sh3JPxhDgvBinmoXTE1JHKPzcakYyN8cSVeVdAJzxYRMwTxX5husstNGZJXDQnhB8Evr7MomzLvtt",
  "key20": "gJnfVDDR3V7PrphnVVsZdHrbaBHqVZeS8zafNXaMSdZnMFuNsCP4a2TVnnEggFMtBdYVxVbCuugUwwX6KQSBZdf",
  "key21": "4aLxZ4ZDB6whxRKqHqKkxppCXZujHVimqHtDhYmtSDQLfKPHPjsc4AJDD67K5hVr5f2DdJMG36boyDEzsTkzVmcP",
  "key22": "5Ho4ziQ9i4kXa4n7DKYS7vMie6ax6eBjgYA3uNrz1NE3bgz9mKF9EbgaNBPUaV5MR3ti6D9rMxRGRSjsW9unpwih",
  "key23": "5dVCMkm3pQyEmxB1tQ1DKKEKWvLiXrtrrkpD2hMQUWNZv4W68WZTZp2WQFz5HAYq6Bjbg1XaCHCrw4U5LtnZ23hv",
  "key24": "2cSjC8LLRUtzoAzrKqBJp34BNzD8QsURPgr74usWyqxCvzY2ZfGrxa5KdxqLiNHgCQi991wSdkanEYsifZCtZ2nM",
  "key25": "5CCgEj64Gy8nKFcExPZTLVW2sUyXwdDY3j6JuetGhpdmTiZRLxDCw3vmGu4ioqYwgsHeS4uDskJwQNkVgChNyL94",
  "key26": "3DTYQdSKAfYZEBvtbJhab5YAC2EK221VqJXMJTqo4BLxcJMcuuMMxFCP67dvh73QWRJ3752wCF6be6p86HmePodY",
  "key27": "2YPQf2iHBK7bXTj6THi9qAgDAbJLdFKhXivnrXTDHVgwndV9un13JeT2Jv4MukMV7RUEnhs3hPCf2Y8vEx9F59Xd",
  "key28": "3h3mHrEA97PSSvk2z1K33xhuUpYroXkcp7ZQUu2ydZG1zbpFHhStKRz61bXpzaJ5RP25T7rV8eXBRViuRqYM2XM7",
  "key29": "31FR8Af57kFwG56CHSFEActszD2NNv5JuAseUuneQStQnc8eFj3QRyWBZ4fADpeDbZVsuBA6Xy4Po5NyCU6Eu5e4",
  "key30": "x4qrCf3hJBzqX5L95s4bz8moSMpVRGfp1vYyPgPRE35rUxcgcpEnJ5ShcYNeBFi4oWzwRy57iCG98s8Kfkph5JV",
  "key31": "3ffUVnBHu9RZHBgTDVzaGfsW13HX7pqc67YWNg47CG1ywH3tcqVyb7fbYnS1kTTeLYdbv1fYbZT25TruP2F6PLr4",
  "key32": "33XYdUvbDCoWcrMP4WPx8dQnyki8aKAJrCCvMppnDtG8sxSGUMec8rGx7nqncpkRpX1vvtpQZtoHgMRqMVwQUpNh",
  "key33": "9Va3VJ656f71wuYFgQfG6XUdWXRLAbPyBaY42H5dsp8rr8EgdXaPRkQ3kU9wvrndk96HZprCmMtm81nVkXXxsLv",
  "key34": "SADnUpwBRJiETLv9crJHPbhGZnHopGz3C4RbDwjCTC1H6v46nvy7Pa73aWgmpzn8PgQiBtk9jAuA1nXp5F9nUCD",
  "key35": "4JpqhYAhpYoHKDAPAodkeVHiar7VrAHmyX8krRmVgRasCZZiaepwk3uj6GYH3WrWrPyT6Fe7yUXmcsPY2veHHrWp",
  "key36": "3P7KhQf2voxLFHasgF2sRzK9htauFu6Qip16hjJ71mc8xWoGHQTNB7MCxdt48SfvBSt3zhcfpuvcU5vtXUctbgvv",
  "key37": "3kcR9LbPiEFvtB6UHTCzykQ89cZpNTDhhHm7uFhs7E4huv9hhZKNWHGCaA2z1EubbQEhM7W8LJBty6KKLoGkkHA7",
  "key38": "4yCMLLpiJrv314VBAtgt42xxajoQcG1ggjnG2Fyzw7wy5vD2rDV7EHx5tzRNgBr8RSvirzsDW61saz3QyR4P3uZK",
  "key39": "2FMSjgZetMmemMhHoMdjp8qb7YUnxq6hUQndBDN7ogNDm3xVLjiQM2XBDfgb1QL78PFhFQm8c3Q3vQAhPP3onSPX",
  "key40": "5zJjbYW23d1uBsWuwvRAKeEuPjVNxmpCQyS1M1Da5PWHVXnytcG9yr3saKnGhPuvk7va4v4FQgs9tH8Ek6gm8W5b",
  "key41": "bXLDZRB5nXVmrwHxK2wN2N2kqWDN9nS8VbktZcm6vMbxg1CghfFa3gHvvdouNxuN5wVzThZQmikHYhFVqG4oKok",
  "key42": "Bt5jQji6LtXQnuqHj4eSKqNcRdWLhnTkfBJb16DQcXsub74R56sazszrougb88JioDfGWf1siVuVJwgcMTksMmC",
  "key43": "3whcR4XHxR4ehgHWXwB9tZkdYubE2AuDwhv2ipchQWQXtJ6y2HnNME6vaEpopW3MzEQGiL1L1QyhE8gPGtFasMVP",
  "key44": "EqoH8sWYiLN3pCHf25Kch4SudUbUrkpaxi9Bnh9V47eV4w5UBXuRA9dTanWhzgkzkrKMuFffpr3eTj3wzwUMZ5g",
  "key45": "4AZU3hEc1txBGMYMPSsn8Za5kMQB3xRCLCQKtavescRntRnfEDLjAGQZKzjnKbgrV5LNFTsGNKb8vaM6aQtCud9i",
  "key46": "2pg8EJh1U9o1AoBC1x55DM5WMC4W1PrgDfhiGkyC2arK3CqH7Rmg72zAijAZ95eNWyRytzVsNU3Ur3hurjy9aYYf",
  "key47": "4S5aVtKJ5z9bGmvFonFq9QgUiPhtKn5BEWQGDx89gaNDzvNZ9LmgyYGcwSCXHavGHHNSK4NjLWYXZT9YQDmKbV2w"
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
