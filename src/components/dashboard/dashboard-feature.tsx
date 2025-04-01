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
    "55SPfWAtCQNzsCXt3NBTPMVRfLeMrcQrnW6rrXAicRiSuAebNGj8vssnY2vT4DCsJR6TfCL5QNfuV8QnEbyxTLyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a3bqGLm7ewzwSmykBqeCLXMZVv6guoirVa4SsykHpqz1LGx7w4DpHmhHbz1TP9WXACyKK1evqG1v8JeZDKdid8i",
  "key1": "2QaCVWjtGSM6RDiBnHpTHrvGVv8ZWDysPBV63K3xGjEuRL4eRFwTuvPBR8QzEFTnb1WZjaxcs4FKpQym6MyJcb59",
  "key2": "5ACbmpbngLVynKx78ewvpdtCuCRLj6KhddyijwaPeSQVysLjFnTYGkZE8JSkz7iiMy83Ax5pkZhYpWb9EBp7jK1v",
  "key3": "5whPsdJBa5hjkpu6zc1hJDhKotVgwJbYzXg9Bhng4nJfKZiRL5EPnfAN4YqoMcXrNcMSbiw3XTPj5vA1c5HgvJxj",
  "key4": "3ro6kWgCszVLmR9B6dfKMtaKNDu1y7SsFJK4tzV2tuL3zNTtSffLqz19vmpmkVfYeNLcF9ei6C74AhLtMDWBr8P9",
  "key5": "3z3MJcgF1VtQYQ9Wwr2cKGRwujm5FXw4eA1faEx6sTB6ab2kzhW4FYdkxQK5DhkyVi3vuFkihhLXyYUvYZAAyPQ4",
  "key6": "3QDztGJWdAUkQhT83Uv6CxJWidnWYMFK7J4JxPvYw8APCdKWUC2sSC5x9bUvUT9HRrgqxyyTLBoq5emduD9XfwCS",
  "key7": "5HkH65XrNmEH1cAjtKrgvd9Tc2Yd4vcFLrmjEnYGYDwhQ3mJFQFDoAukDhZ4KQsgRpJCBtHjZC1jfNRUzHAHsZDB",
  "key8": "53f9Sdud9AoyaMuwsUcMyUuVbnBRBGXYRSXRSPP1W3in344gFR547sop9k9q2pbRWBdkKZwGaLCL5u8jYx9Ae1WB",
  "key9": "5JedtgDeWivtMjd5nZPjRQhhkw31EohpTvLQzbotvK1Ewr9VSjGzJLGStgg22Ma3mv2faYytxthkfaMNVD7VcpuV",
  "key10": "2MxuCY7U9Rk7p5fXjr1AbXCCmCH7RjMvVRTu5R8RyWM2oLzDM2W1fGKDpDM2ERyaTQ9faH7tE2yrAgaHYm5J8Uez",
  "key11": "378Pbh1YXNAFWRtuLnmG1AXb17eTiC96NRJbnnWtzQns9PU4o2wYHJ4BkyanGy8uEBzqpd3x2MmnNh62uW7qgqqk",
  "key12": "5MjTwRCkfcbXE2EvPwVsiwuaxAW1SZZ7wUBp6rKKZP73Q6m7XWZykur9ZrkDNQ9gDUg99e4Aiidq4KRkw2ZYkU49",
  "key13": "52P4w5BVx4sHyU9ZyR3cmrLAigY8mLpZBgw8kvqGRYpMG2ZipAckK13uX2qj1MW26pk6DSgE5zD64q9sELiW4dzE",
  "key14": "21yW9EKKgdznXjFcE5AnLi2YE7n1nFzvp5NgtQbAYWYczzULTWWuGbqvVJncTNVjssQ3zBqmnCTc127snCSdHhHd",
  "key15": "5Kb9823M8iwMzAs9YjV2XVo9YnGt5jYX6yinjXsUyhJFZwCf7VZQndUF8Lgi9Xnxk5sWWB8AoZs8KcF1H5xkcWqK",
  "key16": "7dfYtsiJc7SfCNhBfXZwNrNNJD3oNNrNFmcE7DBBZMZdxR1RBzGesNsY7sZDfznsqpkucoF3draNvbcVeSweJP3",
  "key17": "5qrfkKcgMReoTH6Vb3x2QTEnfW2bWoxUpD96iFj7qY6NsGXxEdr159D4WgTfot5TDFAht8ksTUw9ss5dRYeJFsiT",
  "key18": "3QbyNL6rKgkJcJKzszFQ3DwqyEeGY4tTuVDunrJxArACdMZFmxfdMddvUF1J4uLopzEfModXHq7ocnH2MS6L5yPW",
  "key19": "Eg6mJ9DtFF4QGsds2UXgun1Wc9qwUVSLXC6J39cPEY7Nf8KtmctsKs9S7dHTb5WsvWngL23wC2rr7Ukp5BYwtqq",
  "key20": "4t5Te9JKRYsgsisXMUnqk4sbEaPVaN8pJMV2CMdjHjzEmRMUMxqyCDxNbobvzoVzwAiM8fQq9n2GPZXCmJ3ZYmpj",
  "key21": "3iTRW628VzFaLHLY3tN7gUa9K65zECUYfng5bUtCSspkcayRBiyR4QV9LXFMbftSmheMvGMtiGud73ASxjcSgGnm",
  "key22": "ogRet4mTBLYwWtumAvS4gjzGtxGUnTTH2vGFR3XZay4iWE59ncd7coGDAoUEDea5ZwqMCvJMmECAaahd5s6vd45",
  "key23": "5G1vXBHwUrdSGNH53XBxKxy1PbqhFvLNk2NBU2h5P6uNJmSmBgF9JQ9632kehXMBmbK79786K622cCChxm7rUtZz",
  "key24": "4w5n8H4jW2BXdAvN2kf4WgZkcDqo2kr6SKVD44sUiSnMRzeAEgPpsE3Vvs9v3kxDNFizNvx7jT3F1bKhg1GW5JJ2",
  "key25": "8WaDtHmgDtcjT539uqQmat43Th2Xm713ERMp9K13sZBtJXXczn9CPiT6xVANt8XDX8zpiipXA7Hj82sNhWnqv8Y",
  "key26": "3wuoiLtT6M8HEE67Z89QbNVy8oNRACg68hj22wZYirNLGxKdSr3FVLyYQGZ2E5pmSmeKFk1UUyR9ou8q7ExvDfjz",
  "key27": "Mz8jqqKY9oerGCTBoT2XJt82u4h4weeVUE7rgtf6YZVRs9n7xVyT6Pc6KCb8exm1VdgpXo2gzG4L5fHnvUcri7s",
  "key28": "3o4N5XifEaH9vB5ZNEiQC2ha52PhvnLQMQgwaFVc7iDeKptRaDt19PYoxFDTqmfPkDyRRx6WJzNw1iAJk5gRGR1c",
  "key29": "3otuszff3FFLDKBnsdYbUMPDBbkHGogvxvbgAosnerBTgKSqvJiiv8uSv664c1TyF4pEtapeLWMbGVFHbDo23Vw8",
  "key30": "2Kr8t9s4bZL1Msj5eabiS6eWapep3Ynf69hg2TLbaHpCpSXy3UJxEbbJcwtNR7QhiFaEsfkLMNs4rcq4vP7Y1yUa",
  "key31": "2fLv7NqNfKBrmm1ZsHawqJwfgFmLmsSXjYvRAupmGCjBu6JzEgEZxBtKKNfMRtsVJMdxNSgeGx3Wfgwdco555xKT",
  "key32": "46RYw3kkvNbo5H7FJt65Rq35AwJXBvQXCj9z8U821sWXbR7NACptdDebjoQN3LKc2dEkRRqqsJ7EZXdSMQkCsmGk",
  "key33": "5yRDZSkhb8gJCz4wLqY4AjbYvdmuwAzUa6P3KE6uQ4jkDDKCej5P771KWfBxwVYnX93CChG1YrjTDNPu3qo466tk",
  "key34": "5qSDkHQPJE19pyhYVKdjd1YXoU5RQxsujxis8JTpLhes6tUaNi9z29L4mJ6we3P9bv8HxT4qvhbSZZoadM8MaYJe",
  "key35": "FWWQVjyapSRvJfcpXzm8ZMWcazqdNqpEMu4pdVrAvAfSaKt2sLZsVqhEgDfZQDapQ7n3caisngPwyWyEvgkHTSc",
  "key36": "5CgYwFTXEiWChicXWTQKogdCipvazxwxAS2eAZymk3C8TenrYFX7MDTPoecKGSq79bSTnhAHqZf417MvSGpkenhu",
  "key37": "5sFA651z679CDQ4XKHpR2WLn2XUUdkGjVSFwAWWuSc4wQbJkyGrmVcCGKqmEAgPDH3e5rca3BAXfq7cJbeHgQvfQ",
  "key38": "2wbokMT9hwVrbAD21Tbsv6usDmA1DdZhnsWX7qgY5UYAcKHmWUaM1Y5RRkB1yjXco97KGjftNJE6SrhzNiHK2NC5",
  "key39": "5XsTJq1uBN199FU4tR4deBQCMA6NuoTBiTxs1v5uhrvAfQAZk8Bmb5bEFNRQP57rhyxpJb1fwcH1V21sgthqodgD",
  "key40": "4QZGrnCM2zX1tW18o2f67GRag61e5ALWko3rC6tD2Ei9AeFWnBMnPaMAP8KfzQFk4Yo9Y8ikhyiCBPoy8qBTGZxS",
  "key41": "U6UavGbsKMEmdbExK18ZZWNVWMh5yn7WC23oqUDC4GJcvjmhu4p65rWhHhnPRmZVCFn8vXxsofSFEZ7VVQkhbP5",
  "key42": "4ASWf9LScFLjjoWUf22QG2v2L9wyfG2bAqEW6StaQhhg1ZqLTgZXarp7hkoyFuHYh9X18e5Q7hwg3AJq1dzE3WWq",
  "key43": "HgUZiiD6WEK48LmaNJ5VVWnKogHPHgxuNkp7GuWK5p4d72SSSuCjYV1JDXaJYmrCgPP5DVe1ubpW4BrFCLTv5wq",
  "key44": "2vxAgafXKHiCK61VHEmzT32x3QsrUQogTx1b9RbB2PSUxWoCBMqpeZMqfqabjYUQdJuvVxoxfHuQNWtvMGX4v1tB",
  "key45": "34t9tZErHWiveaxfYoUh9xq8zYky1yxJgiabFkgaDS7bDRCRHs63AvaN62fkj4RoEzcZNgGbXDFpoNkXXdGF6Zeb",
  "key46": "21DR5JZUCZSTezfTuJXQgw81FMihSm84GBvtDvhEeruDrwfB5Q9ewdcXyidaNuWwpptYAzafo1E1nhVc5HydXWs1"
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
