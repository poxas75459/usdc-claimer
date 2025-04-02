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
    "2bvnzQjuPzMy48s4B2KQJ5SeZY2rthi7xH5fFC3RrLFZpq3MfPZgZeoLBQfDRxTcVdDFPhALDJU5t1pXB7BmQ8ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QrXrnV4MHfZbVwHAgVebKqvFCuVE41tdQQW9DU9nUbggpuFbN3aSzcmoPn5ncDw3iSHVYRQMFGDj6DnxcbTN13F",
  "key1": "36XkVnE4V8uiSAfoZc5JhDwqDP8VdGJLNjdMwz68iS2ZVTNc9yeM9kPqRLVHVLVtXaUrpJZAJtA5W1yU2dZp51Au",
  "key2": "jq64ZrMCBLLeynZ9Z3dT9WkoQhXXZgrd8r9WMZimTsysxEZ5QZDGi5DCVVh68x7j2miirdD5dGfEJ8TWF2BUquz",
  "key3": "5e4AAzQjYQvTbnWBhE6nuY1DMLYdv9CgPBTdtKJbh4Tn9aC7tfb2iiUSaJU43UKQSoxoBukTktHvMNCiikgFkrJG",
  "key4": "4oyUBWfyDbQ6TL1RdEaRuEVzFrdMhs8aTFF1z15s28MdvHdwMhA5rdJky5gWkVuQS7guewcukwUpPBuxLRc44NGg",
  "key5": "2G1vLKxuJa9aAYHrA6z2ck9S3ZZrpJzNMQCNceBQRMmAYrM8hRnmY4VeS1U714NBxVFSjrZH6Vd5FZdztqPidtWW",
  "key6": "KPjPXxa4puRqo5vB52dVwSS8QGH9Uu8duwoTBom3UbKc15cUFKuTEgVXL95gdjDDJHmeSV8Gg2y4QRsEbpj3VM5",
  "key7": "3TWfXofagnUCiLHg5m7LskH5hSSHj8Qroe1sYEC6QFdRpbMS8WGLBZX5ULBuMXXb3m81BfcdESvghjd95QU9w1gp",
  "key8": "5VTtQsohuywvQqpc5gZj3j4RWBeb1kKKw5id5VKomzb4PSGWLq1dAuyHp1DXHmUkDAzJVeNBbyFRGD2nvoLBfuTR",
  "key9": "2nJy56o8AUG1K9EAxJm4nYfbJN3jjRcxxrLVF6iF1i82GNHvhdRZRQQG49i7jajuWquuxLkbnfktCvTTxcztt6B7",
  "key10": "5QJsZP586Th1Cg5W61yuGDYbhANZWFr2WdesHQGrrC5NRMQmXL7L6K2G81keUx54JDzTCQBcxpoTtGgLW9pzevvE",
  "key11": "3uRub3A8FePA8T55TuZ65tG4GbhybS2kkVwEsv7eBq7zHnnb9TTvtk5g7soETvwt3TacKoT2wqiG9NGL1t2HpbSq",
  "key12": "4RmAmacea1b1AyFLPBYafAYU9agWyeepwWGkZqQk33UxmWEXhANCbvhvpuJW8c16KrYcMxccM92B2nFKQnYZdV1K",
  "key13": "4uXP6iXueYjnG4Ja61zmHtsDZYP54tcnX1TuxCAEGqKs68idWQyLXtptQtjuiEYN1sK1K7S7EXeNY3gAaQsrbXdd",
  "key14": "3cJNEikYamatLtJbk8EJXWwV1CH8xUArAfjscRt3VYP54wrdmVWzGrKhzaGAzN5scH2DtLnVor8gS4wPuJkVZacR",
  "key15": "2ntu5AyMbE9Pf8zo8aKgD4hkt9McvE5r1v4qw6aQetwYFJFw8USd7FHow3UmM82Ciun3ak3HL94p1TUsZv9NZ2xp",
  "key16": "5uLMLKgD5uQBDUQ4zKF1bHwiGZ1YhoULLFoRahMYoAoUZvbgZnmguwshVaGYH223r9AGgTVV1xcf9xSbCY7GdnAb",
  "key17": "5FXJJy6aCeGB5nc5Af3QTz6akrvLHkhvwUx6PQDcwVpTj6MKm4rR6CQGmrnnFeLefB23K1kvEbuQq4qhYE1YFKT6",
  "key18": "43BUer7iQsortdvukTUpmkkKdgNdb5NY544UGBdPS37g1HfSCxJjbtXpPR3QLDHJxV2gEd84czPYjcWb6z8GucS1",
  "key19": "4xLvuthu8qihEMQJnDvmz3zNUdSG3fXdFgmw81We51684PFkpLXr7S7tDUvsyJjM5E2D97pjxyGC9SjC49J1zocJ",
  "key20": "5Fc1SYePp7BySBc3TwTXMqPgrGedb1zcmoziwqUqy69W67LsCqAFRqoxxCaspmT1muAWbSNKfiby7ogHVAMsgy2V",
  "key21": "3BnDysB8h4w3JKsBd1qAEf4eF9d18efFxrKu8NHm71PZMzb8jmw6rwF61gj4QcBZPHQ7TVTJ1uv2KmJrK6fN7vuC",
  "key22": "vHL9Q8XN57jKFoMGavZZZ2AuJqEdJFjVrjRtGvN9Earx2SdH6RDhMASiVMLaPjuX7RaeXqoupMukipEwsk92pye",
  "key23": "5WCUjh1MxS3vAPNNxAyx93NMAeye5SxUjCgSYAcRCAhn3XVAZytdzeK6qPjnL8pq6y1FsehgtDU8nYXrigWTKcA5",
  "key24": "imbA9HwTxj4TZaDj9hY1j4WtF5ve1JTCHcEvRuV5gs6Jt84sahbZ9G6HepFKDxKr1vnT8JFxis6gesfZLq75bVV",
  "key25": "5uiQ8nV2PGfvFKwL4Jp8xYfHGBYX3mkKN1CQgvr5yfefUmFbjWV47yYjjy1ne5Yk9xay2xaKzV4zEN7XqaRqH4xU",
  "key26": "2ufneq8cY2j4Fuv5iMMQmUoSXWRnHASaPo49uyzoG7rP5Qa28PhRqRRj4BHqVT31UojvDyEpNUumQT5FyaZcvAR1",
  "key27": "5pQmxqVnHNsGxHQAXUxVaqrqAUMeaTFXPk46ghvPz24MWPrUDxUXtd65KhrhaFLDYsj634iczCEYU1mgEjghpvq8",
  "key28": "5UGCmDq5ndmFD4EtHRLAxgbRTSGcjXed4asitGKdqGPeRwQ58aq31EErVRTX3ZC7uH6cQTds6pzYg8L1QnoHNAgU",
  "key29": "yndUTvCLXVxzB8uAmFe5VFxLuqftEVbRstLuW2Cim4P6sphxayWj35JcKgF1on8q7nfy1agq35BQHmmJZV3kNSS",
  "key30": "32EZHR5528LftxtnphNewMXzjfrtRpDYKYSP63AUA4as7V47A7nh8Mhx3zmktT4iV93Pf1hto4GJVrnj5sKjbwtW",
  "key31": "4awphgy58Df9oYDtcb5oEJASY3XaSR8VTfNzMFjfnzYsPKdoz7wQbekZFUewZWfwZKAPu5f52c2vMRM7JBuvfign",
  "key32": "4Nmu5JqhWDAm9oqpWYmZFUx5RoHsk68ZscC4yQXsL89VqUjGcGjxAHmjeW2hr2W48Z671Dvy2upEbWUKXGcsjH2V",
  "key33": "3QtZNgoKFquxCGGQui37ZE4JcP7n6NGUYf2we5gz7q4vAEKZbt8BQmJZREATRo5QzNTGCtaHxUPx4dWDvoiDutZT",
  "key34": "2bitxKbpPdW7Sbog4jAvFiKgxxKoGm9AA9yLHxJt6LSXUYPm2p5ZX1spck6kzPthLrBdNXnVHUr3ECKzJems4XLH",
  "key35": "4ocaucFTZ9KwvjKU8R9rZ1a1yZaDkRNmiawDL4TtUHHbQS9ZYdqnzozeXd6XY3G7boRkqB1W58aeR8S59pVLpCzg",
  "key36": "o369j7AWeN9K7ZSAfFiBHcEyjCT2qunJeRkP1iAS28yw5CC2uWzsBpYWabjT8Lxx3YVmLKTeCyGxFe7BU2aSRYW",
  "key37": "4eq6sNLEAsMdnw4KWCytYRniFr4oHfAJj1ruLTgtXicfWy6GDykQzSJmLpfYhib6ZchAv1UMQUhtdt9MGXPEtrAg",
  "key38": "5ARxxgYR72du7Avby9gN3Kz1ge45h3HNehPtxmksKQoR8AowDdsVBoDFY9jUmz4qafp1b5dCEuqtLcVoyHvvncs3",
  "key39": "4FsgBwRxSQxzkQe1evDGN77EKEF51GhoZUiF5vwuM4scyoQ2b5L4eYMXCtW4mGXpZtZ3aczYvjTa5XvfVBEgdH3P",
  "key40": "55of9jLmpgxJ96FdsUewXjsHUhLtZ9Cmd1DfFqrFduXxYSeckM3GPMoNTjA1SPUs7yfs5nnZMPkGfNiVwKuUqQX4",
  "key41": "5ZmRbKUitJcKBNdRt5Z7Lqtb1mjUmT1obxqDbCiXAqRMrdt4ajYwHFwov3bEamY1saidXqME5L3T7zZvL6QQ1sHM",
  "key42": "2V61vEB5pAXgAw5SsdzA7W1E5xbaYPCDusju26YsvFUoimgEjzmKnXHWTyvjQeGVEuNa4eunH78vQcZigSzMu8nC",
  "key43": "2u2XMewbjtPKBR8rrGpnVseVG9k8GpU9ydPKWVo98KiR5kPDs5hrMfcH7QfUFFW5oE7SFGUk1x9R1jAAv5BXUHTc"
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
