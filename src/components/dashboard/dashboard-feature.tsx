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
    "3QA4LSJcKYB9zSCWCRvJLe52Kaxqb39143nM5v6pqCXrLBfAzyuVpoqyJVbebdMwVDAhJYViG7efvYqfSM7P1Ef8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJVRyhTpca9pL79RJCdt94DmYShMcsNnwXKtfCPbt9HSmbk6bobpJ64fpeSLAA2RRnmLCDPRGX7KHDuR2ffJaJ4",
  "key1": "5B2JUSTYj2EhDN495ZrqtLydDsGEuV6rvKFUqoPNv4MjjAXjHUzXibq8PNYP5W8FeEQpcKUBX6EVByFsHjUdMAiE",
  "key2": "63XKzE8HQEsHnBPdnHejKwZ3st1W5j2EgwHCdNxaXro9BWyPHN9DXVn3NmBFbXHQyseTvGzjDT2Vi5VjWfDVJKeC",
  "key3": "3VQ7mSeyXNESzGYSnHtqQyJsPgJYNUGgNimpccuomCN9h9fR6JpeqqJ5N5D515u4uXtYDbs7yB3DnpEU9wCgD3Bg",
  "key4": "3VmE7HyVVNZMt8QmQ4kDiCSDmrzZU7gBT5u1f9Qt4v5YzoGv65YPsd5UG5VdmVQMastGPdHDHvhjcWBpTdUChm6F",
  "key5": "3iJXiidLHKVtmdLQSVwLYRoG7y8Rhu6c8NJTuPa2y9SjCFpWH24LUnh4BEPDzGHiXkaHh8WgYhP49xzq5XL2cvCd",
  "key6": "RZR9QFZDkPgXHqZ6nQzbeRmJkSXTi8bFpWDj8rczXaGjYyYmybC3iqcamUsKUuK5zcgqvU36nwkahgQ9spBrCJ8",
  "key7": "2zY4s9tnwGFhxSmGfEZjw1bxV39QxaXsTnPbieVyXZ2hKDZhkrJkNMNUk3Qiv4BEb4UXJvywXSLmTWhiUkzNDJJA",
  "key8": "Zz7JJuoMUYrNnZcLhWzoN1TqHnepwGiPQRsHqp6nDSwoFVTdNt9K8UCxsnGNvbjRi3veb3EimCTVhjtk1sbaQsi",
  "key9": "35euZgehCapfyfPK6N5FUsisLUgN6PuRNaFFWVpojvin8nsqwGhY3HLWPBP1sue3fUKCoAj1YUsWMGFX5sasF2vW",
  "key10": "5vtZeRHVgs5YQnz11GUNsaoYPcpGiTpNxkGbnyMY2237bBDenHfWGxiabGJjRxvTd22sLKCDc33sgpYynyAdHDi8",
  "key11": "4csTg9XUWe8V396nEwWXtFag9j9gxpPEvbyVmsUP5zin6HEE4HnA247EjRnyDPjjf5G3tABUvE7wseHL6R7P6BPT",
  "key12": "3qyAwm4yoXKAMxdNvtQywj2XN2jJJCctHSaQ3neqBcCaouuZdQDxajq733Z2JY8YLhfotVY34q1F4yatMi3Pe1gt",
  "key13": "48jmyZJ5YhjBQCXuqnj1jme3ZkE3CQTezk6rd22EzezVdjvCy7b1GwMHx9NArz2jJuL57kxmac6mpRtmXRxE1Dqt",
  "key14": "3mEMn283Gv7X7oZPjrAi7j5Crj3wAoxKsF2zLZWrei2DGs89kDVsHkihykTg58nSj7YQFoTguQkPGhBu38D5pRHn",
  "key15": "3E5gb4gRP5L4ygfxo7YM81g7qYcCv5cwvs2wTU5soPv1SEu1vqrq77YvAucKSLsXNj1f2KW9Z8SqhDfJvnrGuP1M",
  "key16": "3bJdNHNkzadJGt4PGVVuWbEVb3PD85dD3p5iSeSCUfB1McugjKGwguqSwp7AePNtb6GnAjKDyfgm2J96TTsGoZPD",
  "key17": "3yFHL54fA6zKaBMCxpVeq1RdZvcuU5Ef8uhndff7JA6Tm1zYJEH1wsKHDNTpE45UfAGPm2z8L27SdBCZG1zFYsEZ",
  "key18": "5pFZmMuvMU9yhkGrC6XPpuvJNsfnxY9DNFeAJdp7ANWgx7ugd6dDt4hL7x9EkdhRHssXAQ9sivhu6BzD6axjZrRC",
  "key19": "YQtY2GapKEUocjr9gcUreAJpbqmRj2RGxEn3LZ1M4jgeGqARQSPUuTmSi9V1nTtCeLdWbw7MPKkY6xWZKJ9stCb",
  "key20": "3i3wkAjnQAfYvSYjusoiQSFjjfUZxNGupVhBbvxugDduaTYCvWyNVycKFMws4YgYkHbwHwzZgfUGVLiA3WGJazS1",
  "key21": "5M2nS4N3SNDTHYzN1DCjmXexTHD3MhYBi96FVBUn6ktRxZuZSZQTzZVQF2PZjfZkBouuW6mfobiiLTwn8cSuCoCP",
  "key22": "4anfa9NG1Zc2VHPqwbwRQNjMiE1Pdf5Vedc6Mwa6C3BTcx9USxtASRBgeyBZf1nmFc9tGquq28KqqXAAfZtGhapH",
  "key23": "3uSbtybsfKF8saPJm41wuoyEm9aTYoFtoUmDVZTyfwhjenTebff9QfbbMQ1sZFTnJGeboTWd6VnGYJVt7zqVY7ns",
  "key24": "31i9G63SDhGjPk5LT1AVK7wwtXn7Lz4P7binnufUoDkDnfMK2YSLQdMMQuSDSeL1iXoBGWbZ1owcRrfm7CFd3Mk",
  "key25": "x22KG1i2kA7XYaryaF1k7b3s21BmJ4qQFq6UgKi3b4N8XfFSvabBeAjDZ8uAW7dPThtw75DC2VTuUCHGfqHp3LW",
  "key26": "5Ar5ELBkrXTkFkC77GgDkAezFH6HjD27KfdKXnR8SscXC4bWgnaMAGTRbizJ9hpXPuefPkW4wt7ezAgDSZehqfE",
  "key27": "3Nf7MfjatU9swhip6taCR49fwy5jd6hZb1iG8Nawjme2zaT53TxzVzf5fYNEeKBt3mZRWfYTdACjmvD22XMiQcRc",
  "key28": "4nRB6tsRDEGHP3iGWujkuT15x9Y4FhWc32wiYrNSqZY5a2sALJWSTmNDJ9f94VprQ42RTf89LMruBeSvcJVopCs8",
  "key29": "3UzAy29YMMCMGgstCGWayWLqgk4cG9xa1UUBrBovum15NG9FSetwLeKpWBd1ewupY5cSqitSE2nfWdyWRBK6vbDA",
  "key30": "5wRNoVf56sas3FNrSh5ANHBuwhPHuT8QqtGrsf979ZSia7tpG17HYyv1wAY3uiuu2PoyfBP37pqPmGbHd1vmFRrj",
  "key31": "2PVQAmR4xF4eUpi22cgvbWQXvdknMdbnHWFvxfroXAr9GiUY1Bj9FhJmShFrWqAinWvxRddQQY37HmiUviBQq3hL",
  "key32": "qHXrJmrGSohrcjJK3cfdzDAu7zdAcNfCQGSfULMVTRBGpZ9fLEx79ujqRJAnRvCjgTVUVAqnF5tjJUN8r6d9FEV",
  "key33": "2q8vEQ1yGd3NQoFBP7bQGereyHnvMxfMLMhG2oWCzKaCjMdim75FunYpJrujkKq4fFyetEdS3SX4poXEy4oUEpvn",
  "key34": "4sJn3YadomrzZMAPoinV9teGk3MUEPUryAXD3TQzNT87n44e3XkQrGC7WWC8rAxwn7gcp2MqaK8Gyvwed6sJk9Ty",
  "key35": "2YCPPThsYaTfH3aYtRJuzp9ZBWs7RwoLXSvRHcUK9Vo7QqqCZmvjKDnKupReSA5K64c8NzT71Q6xmPi7gWaBxT4H",
  "key36": "3RsVNjN7utXTV5LwdnPnkPvsaz8v3JhDNy5YWkk6fZHrf5dqBEqDLp5vuFvNm2MfZNAW43u7fkntemThRhsQ7VrC",
  "key37": "2dpXKiZxcYF9QeXCzGyeanz6g5tbpnQmKRUMjRXKxzMq34e4fSjhNba9ENzTVoLAWBkqNyTsnjt2mPuqRogdkUGd",
  "key38": "34FtzTxgk7ZfygKU82ux7zZVNzVwPLJJE8GaeScLEhRhWueRUMVyzU3tTL7wTePEMHoce8xwUYfCEteH3RsJ9Hrx",
  "key39": "3MyxbEZ6fzXVhqrcqg74SnWK6X3gaQCXJzbGgmCu59QHvdZbBaS3AXJbogZ92seFR7AP6rq5totxKUrKjgj1EBzN"
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
