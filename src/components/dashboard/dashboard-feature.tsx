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
    "3j92rqHpGR229BXLmDaAL2KFnhDscMkpXMmaHV5JXusCHmNmP5HmnYhHHT7tUQbEiSg3xT4TWRwkkd652v6fKNR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9MYy9XsSiV7NDHQV8hD7MwUofHZqH7Mt6yS53KFb9CBdPSmKn4PHpWEVaEVy1Nq5X99XSd1wBJQkZ2yWzzDpsG",
  "key1": "34DCpq8nq3aUe9i4h1VGiUvfgjc3chqyGG9K8qGqn4MCNpvCdLjTd8gMJhj7S6qfJDDaSGwH5S5Rvbk1LQqsHWCz",
  "key2": "3AUYX5DXNytyhrJ1UC7UkPDRjfNQwLnofN758rU3fCqPGHDUobQyfzYLRZs9NTSd3GmyMLKHxLDSCA8b29ztk2XJ",
  "key3": "2nHzgjs2ZkDE78PYb9yaxAb9tg4HzPxYjtgEyhnFtTyJLUcqm9vK8yvXgcnHVCCAC5fhaaova5TmdPM6HnyggLJY",
  "key4": "5TB2CN1vxkjx82BUwyJsgCZb4yep94WQkNViHd4gNNjsC4zzdCxgCRTGgHaeKjdpmYEuBEf6Kcg2Lm92gDT3cWUQ",
  "key5": "2W22oRt2uz9sbb3fvnq1cZmBHkHqbMpqSepgiyc5CPjoQgqF4fUQREBCvrya9tvxYGG6FDyzUDoHHB3QGbrZGhHX",
  "key6": "36qnEdYNCgPGLdWHo2fXvBR7jJiNQwhyR1BoQY4rwjdinSmEHPk4X1x1cZYY5wvJdPF99YgmEZqQw4PMV7SX22NW",
  "key7": "tzFeYa6N1GeHgu5w3eCbQSznhk3W3b81pKZL67c4TtetH1nPS1sJxWZe6GtDZqKHiCnXXLBLuonrTJw2RntGgxs",
  "key8": "5769zhvYLW4f8FyHTtHXofuj8tJviwe9WHHPdGaE9DaZQxTuuRDusoJEh775cNpB44SPNcisT8pSV6KqxcoUCMgf",
  "key9": "324UNt3VJLuU1nihp8Zp7VGGbrDnBJ5qoDvT9Q4ujgCFgSL2cc8KATM7Ahi9C2x3QWfof7DsohKQqWPT2QwwiSQu",
  "key10": "3zFX9Tp6BNKa3XKTSAqupPBLdGJw7qdueMSNT5W8NCgKuBERHKn7DoK14eKtKC2JxiwS1cQqURH66wUqTyh6TqUQ",
  "key11": "MsXW4gKzj3FSpEn4qoNqQjUK982GK3HgjnbauRrTpoHCnswEajTuwq4GoEmXhxDcjie76iMsdKonk6XpUur7uP2",
  "key12": "JaWpf6JDH9UWCwKFotaCHTq4s6Ba8Fz3w4ZqTAr2L5d4CTV9KjqQK8bPaE3qiuQ2t4f8cbA522W1gWEty7k8Mv3",
  "key13": "2LUHdSpzGNJnnzqsQP2MYjoA5vGcvrTf4K6TjjSPBYgnzfDVJiGju6aN41dz8UJ8MgfMDsZmwuyvD2owi8G9G2Fv",
  "key14": "4tg4oZaJyxqWwW2fck8fCb7RkSxkr7eBWxW2aao9s72i4h3CwAb7NawD2bHVMu2XLS4bSjybyXkYnc8zDhNCiqK1",
  "key15": "kax85DLNN7ta2Suc3HxMmmvZomhXgeBRxUxRJvwZn3hEhwgkRVCnA7qBBVfgBRdmCrxsDUn1wNsVa17SfVtq9Ga",
  "key16": "5oNsB5tHAAWKf2Ak44SYEqhouuVgtGQywhp49opVa19iKk1yQRK2kAFLD25WLudNnxyUoRhVo4pqbx6a2NTfTBif",
  "key17": "4TRHkqVy5XPsTSgGYy477FcPMyfCyagrYUvyqHDxmbcYrpNCGbdxEvfc7BugVNwH8ctwAsmppMYcHgJUA1LKmRPT",
  "key18": "3ASoL1djNB638zhnJydcJgHn19DcwdnvHxnffjPsv3a8SJ8Wh6c5r6myACuaw5z9aJHEEPqoSKWpcqiRgbtNXBFM",
  "key19": "2aPF15XRoFedXknJ9dnaZMDK1qWKZJ4y5XTCkqaaaNCi9gvtJ3DJf671BRfYALLsYU5fv3TfenQjLjhk9Ecdj3PS",
  "key20": "2Hm363Rwa49jQrr4rZ7GcUJjWfj5HXwpcsfFii4WgUie2ua3S4ed7z1UKR26yeDBGQEkbRKQjypqHdYq1LCvk3uT",
  "key21": "5H5EM5yDCMZkgJE3KfohHhwMuy6Th1g8dsxWtDg2nd2eAjgYwEeUbxubid7UV9XnvuL9w4cRQz7YJ7uZbBuGQPjD",
  "key22": "66XkTJBQzEsS4WkQs2kmfYJAYxFtEv8b4wCSwDPJjd17WAHRmYBt7kS5Gax5oPvsBMr3qi7vcDdXZzEdCDJ2PtQQ",
  "key23": "32ZSLt5xCCNrQWcpy9QUSszwPetvC7gRnCu6PZMPzJv12JmJ6dGc2V1mUcBXwukYcf5McMsFNwSNdCcPPASrsxnh",
  "key24": "96ZbojzNK1LsjhdHUrQXiw8f6PWzjcQYzhoS3WQPWfU7YRprd8oqZHyMq69mcRjZvoj354iejxms7CfNH8D14q3",
  "key25": "3mGEeVoFPm2FjRdmanyCsw2qQsnHNdvaFUhWkhmitu43DL4fwdw8rAktAbTndz3BGK1Bc1RwXLXVQL9VdsURyZAw",
  "key26": "4zqHc93GsNHPcEnEwAv493dq5euqGELFYPW46DGoeY6DHktpfgaJPj1vHKdJm9CdsZ1A6fnrZeYmQmNWFtXMPv9A",
  "key27": "1LEUnga4hPyCkYhiJzsAZsSqmdT9HngRqDS3jih8oxHupaYSEnQzoANJUV2ZbLbjUE2GFKMRit2jECLwSPZsrSb",
  "key28": "ZYCNjR8r4YbUqL5KSCtXD2rX9gUuvHXCCAiCuor64bHsBRPuvHr7zHZruFM8BND7w2wyd4foAY4Z8Y611rQiLR9",
  "key29": "3JPRxHYTBSqRiFiiqHFCFEF4gkzWas9q1vFG5Qh99ES1eYB7RMBAnDpzf2qPq7h9s6kuNuvJ8oKpTYGCtoEqCwFx",
  "key30": "3n42tupeZAowB57XjWMfVrS7kx2doRYcTzzBnTXRWZmCNA4h61aiSJdhM1oTs9uKS4LffGaT5ovJsp5XMKbXcxVf",
  "key31": "4eMiyCTomGWsrNHMQsvKvXbz2rCP5f5MQsk9srVXvANWzmNCoPkPNxnn4ZWyhGHGQpMqmhcktGipNr5RKKLZGySN",
  "key32": "39zKwD5bMqiZSxUrJYabzPcEUR5tH6VLzxNx7Dk2G9WhgPSrY93Uw2aquHXMnBXCdzKp9PnFGEdqLsJufjp1ApJ1",
  "key33": "5G28aQrPfSmA4FRY1QsdZckprgbQbLcr8Bqs5bGo2RKkq7pbnYUQCwk375h8ahdQEHtq1CLumRVMy7eS8jqkh57G",
  "key34": "5VMU3PqH9GFi13yLUpjmJqnbGstz4gvmwLMCbERThGwRULq7EjZPbZqobF9SAApUwVwYGN1vFkhE1YJh832rhizy",
  "key35": "38kmdCMmpBohbNrdav1xqFsP2EUrBtk9XQtXq5irXsr436WZSpZjgy2TFUBu8QceT9UHNm2JxLJ2rHAHEKRA9Fhf",
  "key36": "EJzy5MRLeugwJhuyG1D6sVFndqZqGaTALnLx3t8ZGhS5gpY79fSPTnYVNgQp2Urjh7eY2fdqrTcs3t11oeeMvw9",
  "key37": "5s7rNSmK9PmFsjxhMRzae2Sgu5Zi7Xse4iuJbeeUUeTJ4newYBV2eu2AQNkyCdvnzJdPEUHbAp3Bk2J96aBinL1g",
  "key38": "2CCTo21yqQnT6KStz1s9u3eRRDujVxcXyScJXf6ogCcsVYuw69fEu2RMu3V4HS3QAgFD8eXJUCc5ETGZVGAQhp6S",
  "key39": "4K3Wdr1QbSYSfGZ2wfv8NySAVgKpTm8ukYDV9rAvUm6F9ZcU6NjemutUJ7TqGLS9NniFgUGjAhVmPnWXBBsWuVs1",
  "key40": "4VWWWhd9DsFeqhYJ4LbwS1BApmCiC6AL6DuxX9pJfQ7cPUb8bW5uoaDbFVWAgrEfC5TgX2ve8MuyJFN1t1dyUeXx",
  "key41": "123HW7WZctsXb5WHNE5PEKeCrpBzP6Ck4FzJXErRaq29FjUgebxB1BWfPex8VoCdaRWrtgLdKafXWTatKZEeU835",
  "key42": "4zMNirT8nPjdk6UWPE5kJNQiGQp6GqGcqYcqwkpdRPD1stZVSeFiGJSvjTxdeLwKDLXDY1BCbdbTvLzoDie1cz6H",
  "key43": "42cPB2dnnGBPsT6Yhyx1RYgVFJ3WYtUAYVKccBzcy1CWXSsMmitwNVkXs2PnFzgBuS8aKzJHioTABERNo1vGUnp8",
  "key44": "64RE22qEpS7dqL8Np89XDpFpcq4c3bjfnNd48Aco7SjtDkoAMFJQvwCXn9YQD2WybBsajEM9HvaBPWdgDqJfjX5Z",
  "key45": "5eFKkdx5YRkN5d2yawPTdRAGm7UKqfwm5gyQ9edyuHfYpKwP9gQVSMu9zgos2dPbwRe1D7RED6RDitDVGxWEAqvJ",
  "key46": "3W7oioXE59KsQbrj27L5xnhivys3vhmyGhMqBtdwm1M96cazVhLdZJCebDRYtnvhhRKfAzBv585gcmXFwX8qZVL2",
  "key47": "NvtcxiyUWPCyW3qViAM9KKqJGmZFuTrTfQB7minC9cr8JPLjE1aAt4QQ1fK3DmWqtQDcREdo4pXc3c6zt4S8Mwv",
  "key48": "4sgQH9UZWD7pYYyDjBR9RDvbn5AP21MyR55okKp83DbLMvuj3Rr3uddYptQriYAdEtUZk4qqPWzGiF36Niqj47Hh",
  "key49": "3PJE6FXUwFg2ccewair8w9RAETw25aZt2Nn7nrNiRhMePmqgADinneQmrB1Q3FfK5PJRq7ErkNgHjPTvQmYHnnPE"
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
