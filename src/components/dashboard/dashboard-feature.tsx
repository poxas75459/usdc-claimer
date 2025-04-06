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
    "5Ub3zbXauh9Gvm9NqUcCPMaBzKf9X3xa5QDHEnvdiwjz7yda2LKAXUNe9YWEbxYLpfuyRs4MTs6yJx9XjEXV8YFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435FqUMNaRkyhLHBNFp1bUZsXfxeHWZa9142H3y9A7hxAW31N453M1swu3w2byZ8MTRE4pwGMvEaxUfcP3GhV1Um",
  "key1": "39JuZ9CJLHHRjTm2J1vYwZU7JtdxbtqwQuruDHiBjQtTR1dLCRxZp6xsAZMeULkVuLUzMc1rdk3Hkz73zwBHUsa1",
  "key2": "3DLYGCiPcQjKAG1CnpRw7DVBV9R5BB4N9wR9yMggL4Xje1UwdEkDjtk278cLm6URYVbsptWZyR965GrqHqdqLzzQ",
  "key3": "3SzprmgLwrkhsMWFw6GCS7KDe2bYbGMxVmeoewYeQDJT6puPpMS3HAoC7NrmgiHQvXhM7xzF2ap5Z892pnT8y5LE",
  "key4": "2tTByJLsgbhKBBr6jiQbj7v3G2hvSkW2P9rhJxLFsyNfCLVUvmgbJXYvdeYytu5RoUNUYsyuX7hc8T8LSzcTMP86",
  "key5": "3FQjQajcgVmPVKAQgLgpVQQ58Wzz8JBRxfCG2fw7Ao3sEYtb8gcfMP1WNbU7NYpu12P5JjnAswVNPqeVbq21K8L7",
  "key6": "51HuPWurM2MBxAsfeHGHakFJTiF7UwFZWyUdNz3LJ1bpt3i2RWZkxTqqXmQ2Ud6sYKXKxsXMH3KkJrWX2LEQ1J5h",
  "key7": "5UGbrMHgewumPT1aJ12YaQmvQzsE9DnYrMvo72fEVa6r6gVfCxEpdDZde5fVsP9CbArzBBxLU5AZ6Bnxj4JS88sc",
  "key8": "5m5RuZipc6v3tcqBgYxQt5raB7TBvtk1jaSVRnDM8JxL6rSWVCiftHViPu6Hna8NXpD7Z6xd48dYz1xQNnmCJQhX",
  "key9": "55ku3CynWhC5LNmfgLvh9FSjHWXaGhgNqJkjc6LDHHX3h6koh5EnvJu9PuGaxocJHpFAuqKdzEatrumWpZ9P2v3V",
  "key10": "QJJyhEaGzkMToKVtz5wpDs9zRLwsAamFh9TdBn3Ejs1VAMnz3bgqmrRcK5xmZtjiDov8JrZ9hbTGoqYNCbYRXjR",
  "key11": "5rEEUvAUZ8div4DLPESkzKhHA4VGbBbzs9hiVSsBfLHdHCeAzhQseieGDErKnTFS6UytdyNruKRVN9CXV1SyrjAS",
  "key12": "2V6Rz2hPFJ5JSzgAmFDpWXTZeJW2Hp6VPmRBMAdAqb3mE5YM12VypPYtWoSxMMd2h8XKnW5CvAZSn5GJyxFwZLG3",
  "key13": "3cJRxiLCg7PWtTQ1FWt5kjPqgSLYTa5LG7ivgAW86bc1cHL8YuauyvxefBB8xdY346fQbctWUBr3bK7hpuLKsULq",
  "key14": "3W6dPkE8sCwMYU4DCkAHvNMUFkuw347VULVk2xDpqxL5XDCqhiTH4i4NUn1TXHcxeckKnhRw6cjCQCYJBZjNHftx",
  "key15": "3191ewYNjims4gh1gpcUJLpYfjbaumhgvW8fA5g8Tx79Ffkd4YvnDwh3kb7BGETAXKFXSLB2j5VY8upgogiKmwc",
  "key16": "NKRnNahMfM58uXSc2njns5pYdNmyEgRBhTWEtbQgSN8dcg6ewviaMAM2QrbKm7s6HUYtmv2MqRgxEJ5fHHQX2F9",
  "key17": "4kDypUvGERQ4e2oyTk7wz4Qi3iQDotpmLG4ZnTxy3ooR4XzFw4cZhbbDHigpVmCAv6cDxdyu28proouwLvypRcSQ",
  "key18": "28PSpVY4neRM938pjbXLscA5WWexGJMETG3oX9PHZdby4Kr7bUcEWPCUcvfjPZ69WACGYUoosFNjnEYemdS7TzbG",
  "key19": "3UpVbhTeNBcxTPYio8z5zMcCPW6TpiLvRRpYqYyMZcBdXbUM5VPsoRKHFoDYvozmBvSsPnky3XXWjrz5NfNRgUEi",
  "key20": "5pZhuGQkcaA3nwAcdySXTb2sXzU5E9inqkuY6VNr56gqp8Zz6ESKtwLdHqjhSrrpvgLApyKmEEN8cG4TV16ALPXb",
  "key21": "4kjfwN9SjZrPeVAMxSoEqegnVcMRqUJUYX1nsxDuUqcWcXMQAaRRJZkrfDQmnC2MKgpFrb2Ly83qFRonT31ZySLA",
  "key22": "5DT5YJqi8bMRtHNNoCNT1uZaeTk4wW1RoQf1tEUo6cgVH9hEAzufySa152f6cpfMgMqjF9BCJrsETLiF9K8J6HrF",
  "key23": "3h4jWL5L7zEUVF9C8vrPGqWSezfSNiPEgFUPPcyNLPiJCubupJebgJzdfXx5QHehdAKJjNgqEBuyUKmtyBzMCnFr",
  "key24": "dnTzA5zYN1EFhgi2qkvGNGH1JmB3kT3SxXmgMTzD5ba7BAJjBWaWkvVYexYQN7yCufcyj2cibMDMVNerBkbLq6W",
  "key25": "4H54ikDZStskev6XkcB9YBqsckByhs1bXHAEvxm7kA8KKiMs5Jx9PBSXirVApZfG27sBfkpukvwMmh7nwrnX5TDX",
  "key26": "3j9bzWXPPp752uPKp6tFt6PPovkrwb65nzEU7rs284Wz4u7A6sCtgRE3fEUQg4ss7RiyMwXFy45YHEMXejGRfLVY",
  "key27": "33GNEcxux6RhnGpnvTPYfdiXmxXysUYJt5Se2se3LTPrFwQyCqDJuiwE4rvQhpYuDBzTJGLes1Q1jSrFCrX46gkE",
  "key28": "3a23bpzsCTEwcUSDWPJscm58J4GkVYtCALeSgZhEBcerFXEZpDktFh7Aa8TEDwYMx5ykYKMkaSmRdCgwwoPJJfAf",
  "key29": "cdskjYpXxA2tzUQzQkPcpbvrFZh7Yx8daNghPLHnNuJA4f285uAq3x5GdWBiz9YUfzZtEmguN94QKdHcyVW5vCk",
  "key30": "5zR2TGx2CWYHk18ogUkFEV3ygyUbQZzDrHSaMiLNB6czzWwqZfxzgL6rGeUCQa9dWvcY7rcK2X9WtwC9LmBM35Z7",
  "key31": "4V1gKGEj8yWi3U1f5CmCZQQ5pM2rAoNptsU5yHmp7PMDyDsgBYeqWhGNtjP3rd87Ve79LPopZdUxNvaFCCXooyuR",
  "key32": "4sdyZf1tUPaYPgDP8aGxgS3YbhuyEDrtrNfY4G7UmqYdD8JPKZ5AourYTbr763AsijpZJ2WAkAU3eAMvdfvEwREG",
  "key33": "zioCsuuzCoz3c11cGypLUiYdM2a97U8xohSdAoXqoy621qCWhRJQwFnH9tByvgaTfXhb1co99sxn7PPGbonmtNX",
  "key34": "3GL99QvVypHnHtJzRUuKwHkqZC1gLVdERZZ8bFPTm6Mz4WfgcZhHpA52jbbaJFqa8cYRDSbzJbbwhYVWzhEAba5t",
  "key35": "48t9uVQJYBunnPu35QDjKJ93tgk4V24o4Tt9M2hG4iTYAGYPEp72AYUg2HE7PCpEU4tpPS3rtmaLcFt8u29cHgir",
  "key36": "DEmVN6vyErBeeUnrn55rCqLyz4FangPJwvTiaCFneAv1ydWJX26JVDNi3ifV8eBCaetCJHH2ipakQ9QX2SXs8WK",
  "key37": "4oo98oLN8TK91NxD5KEMJ6z75PchnrqqAP6eUL6ftvDaFs6xTpnd8KHYVDsnhfCg2m1BS2WkSjWV2RAAoDbYJvnv",
  "key38": "2bwf1b2inwfzTtFxvKmeAZoASurEgXkHFbwVksToDCBo7CvdbE3ZJLWMrRJFEYB7MsenURyctokQxqmWvm7kewnU",
  "key39": "5yXkG5FKP4A99yynywF72MwEvk5XNpUYDtWNYht2wQyq4dyKm6UE3zg7EjmdeRxCihpJoKbpfiRX4PqYSH5nknH1",
  "key40": "5quZ8JkDyBv8K8q6z6zR7NrhLGReJtkUTdvjcuqVREdfPrVftDTSCy61WeQLGwCE9QLzho5nLNPjDFNuh6oYrEkR",
  "key41": "2uTTeJVbEFczWUxrDcxFusNezAmCbUdEkgBJkUxPcbBXGZUBc1ZQEWsdSKgALhrYxRw9hVmcuGDdS4AzPJeoG15k",
  "key42": "4ysWqdNaa23uBterFhvncQ7nV9tZtfxZsMFBsVAcsquhzBxmtXtdt2cTz9S4dYYFS9Tx9YrC1HdpExgDqeCMoywg",
  "key43": "u8PF4seTBKcQJRA63Ve57jXm5xEtLqJcmMFYMh4CwkFt8j4LG8i1gNWoqoTHbkJmQXZFP6o9hc4E9fBb7nniGFp",
  "key44": "2gQorJbAEyASaEfBsW2a9SKuj93SDk825R7e8rs7Ca43DLobc8b5GvGZNkC1WCHrXCBkh18tQ6cHcRPQh1s7SyqF",
  "key45": "33Wp22i3rMMgS5Pi9BqW4Ze5q7a5Bo5NnnwF6Kq8RZEXBFNeBaw8bE1HFEXTm8kkSgC5mZTsVwWemh1Xvqnen5JG",
  "key46": "2q75hBE1hr2xPBRfLoXZQrRquzgzQTFQjxMa4vbJ3JLa89m8iH2WQeuwJoot43HAhDecbF8ZaG2wVQr1cSPu4yX1",
  "key47": "33h4Pzk9rgoZoHdi9ac16iKkHdh73YcQb35iL8po76LPR3AwshYikJc4qbudPBESFtFRiu2rhmRcioBmTi9FS9k8",
  "key48": "2QNJyfpPLeHmLHMuuaaSsCSPnjNRs2SmBUwbo7vYK3QxB4bFVYKqg8ifyiNyefekejL6EET4qHj9Dpqu9JAD1gKc",
  "key49": "3ZqvYPRticwkticPCThXWYUDsoSpwDxn9ADrxrC9qwYUpZ2RvQ5AJ95EUUojFFSf8EdQ8FaPs7jTD4KZqzsqrc9W"
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
