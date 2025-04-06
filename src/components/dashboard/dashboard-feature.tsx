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
    "2SQd5wywWtEsh6zNqkq7rUEBF3pLgWh64RYX6ToeXcVRJHUCM3fMHxZFxz4inTizaoxhqHWddiQ1mVK97n456YEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQvouGYcXqP17XmaGyYtiPnFZZ2aZ1ddnLobz2md52amUTPV2g3b2xn5WgA4tf94Lg3mn8uAsPcdozsCyr6piin",
  "key1": "4cUnfUbnXbvKwE8Drhgr5wm1dkjrKFcZsTgny8adeGvfFNP55R1MK2b9xtjf7wK59Uv5xv1B8karX7jU7tPDBMAw",
  "key2": "57ZQiZVAs3yA189NvkQC7LCi7saPZYFUJAASaRWKRuGzYNBf8kohWt3NK2UKy6Tjf4KvQZXHDhhJvrHK3eUNBSa5",
  "key3": "5Yb22J529HFwQiAa49Mn16QVcAvRnyXk1uMmLpz5fZP1mpRAayX5UhxjYonGKC74VvbtwVd2pennbmtdTdQNqZh8",
  "key4": "3Q3Sp14fTkXfExtpmJzAMk7RjPLFJ9gSBq6acMgfDmEXLsFuDSmY57vFWjE3eu5geDjjFeZ99tDyU2aXbuEGhTby",
  "key5": "4755LF96MSxDCc3KCeaTan6w2EcUUqjjBL4szQ2AubcDCSwTRLcqWqriwCXDzhukriEcBXxhDCRx2gxDoYauAJwP",
  "key6": "4oxMsQWUiBFqYpmPz9QBdSGqzCVigasdsVfLbnWKytHrDhKjhdemac3DyJBFdr6LfGxsNDMsk282NH3vc6ZTduVc",
  "key7": "4y6xheQoavUKhJjynjFxsY6Gv7bTe8JqbbaYa38ZdnhMCdyL2nQG58kimVX4PbPQgkhhgUZqfAUYdjALKfLdcyep",
  "key8": "SLAWTUVgCC48uPDiWGzwwzoSQQY92aGsqrfRiQakR16JBBYP4ZrNiyRHkYFxWbccuHDJ6DRfHG6gL58vFkSEpNt",
  "key9": "2SDpHCLQtKfLaHWQicoKffaBiDgF2Rqj3DYyaGC6duTugWjN9nmmANNa7TXnGkFC6phh9Ysk6f4x2TeK7ev1QCHe",
  "key10": "6326w9m771SXP8wpRTy6uNyq6AE2XjY63MBURv1qRanHhpaVdK1zkjCR3Uw3Q6sjotDrAqU8bS8NNVsbYZbfYpL6",
  "key11": "TvYqvWXQw1TfdApR3SDE8VbotoPMn4CfWqttGPCE8wVA9ZQASBvZiq8F2tszMKDZDQiXsmeqCAabScGcpSnzcpV",
  "key12": "iKdsxnsvg6FCaMQsprHyuJLPrCTvj7inWmVmHZSb3XTrUJSMzFkzdKDZ7hjvbCFfsHtSRUmyZN8h4fj4EBiSc7D",
  "key13": "4VJpjQTRocysaA8kvVWqpjnVqxbUwYzBKupNMWBdfnR4v4pCapNgL38US4aRWmdQkYd4pAx3Ef11x9Ma41j36A4Z",
  "key14": "kJ6TAhHFhtfwKHPRWFqCXUQk7aMHbLACogt5JyX7szuecXV3GpmuFeEiLKtp1NYHTGoLf6jJb6XDv1EeqeVCJoy",
  "key15": "FwWdUkhGfbZbPNTyXfpcCinZSzsPm6Ao3nVJt9ueWaKoX4vDeoQfMiHPbKHmq118jcWnKm3oVkLazQMQvDRv6oo",
  "key16": "3BkeNz9XBNqugis5kLDu6oJFsocuAZZyZF3G486G2C2uLAVB8c17eAtUqJR3q7tWj2LCApMURpRF3ikbvGzAWxz4",
  "key17": "4YDoT1W685VP8Ehw2Gxq7bvmikDs373BRbgHMu3r6fLuda2a7rx6XgPtuKSD216po5AuXXkusUwDEBhEfSAe4iCZ",
  "key18": "4Y2HrRkhoWns3ruvnT87PM9d7fmELP7FYQ1nDuhovRFSJHyb6RUoXFjtHb8Zu5z32oZvrg8Hy8Ru8KDvjhB6Bzh3",
  "key19": "2ho1ub1rrEstkzpN6PkH2Hbms41XdNYQtDVkqKL4qQDdPPFUqgQ8DjCsSJ6ZSQ8hB5GygvXjW3RJLTB86VRsNru5",
  "key20": "3ZVH6TDLzULhG2jxDeQhrW6Ksg33bzak3M5HkFyrdMsRPAMdAKuyUFYxHAJWFuUSHtAn34fFwdEDsQH6MHgHN8F",
  "key21": "2bn3DhGM481WiQ74JAMtimq9YzbWv32Xefj2Laa8rsyABHambm7y6k8JZssQ8QXvzSiYSKFjFNRZhj7x7ezsSSxB",
  "key22": "2vpB7GcoTFL5faJckQ2uJiuicggVKcQNGCAGDkeoGC427mBjHQ1d943ATWdABh5YNpiDZGgXgfobNTUAqc1ZtBpa",
  "key23": "4osto37ahbwYeV14C5A5YhkX17zVAhnPcz6pC8MRe6VvPGjHNermvmxZWiksUsY8tNWtG1WcuvFpmDzfedkmnFjN",
  "key24": "2iBXAwe6YsqT41WRZTZcbgrxdVkbyP6v5ewRcXfduwQ4YAJ83Hx68QuqRYzZGNsTZK5dzEjJcKGa5pgXdgJq3ftk",
  "key25": "4ryBnf5Xe2RDDbQ6Fsye1usrJFMFiYvK63CnfUYUyzgV82eEzVtMkWL274nAaV5QzPET1vWiUJw7LzV6VDq9YRAE",
  "key26": "4AMUHnBXpBp5mx7cvae8ujRXfHYE3QNRj7hFJuSGuMfic6tHjUihGzAUGP7PfV8MVin3Fc4CpYEm2wEUXyY8pnjL",
  "key27": "71Koadko4JjeHM68GHNsbHyqbNwDmKyZzBDkDCvqM9LqLDLPf24FkDfjj7BmZL4Lg3k9xjp23qVPr3vqvKV2YF4",
  "key28": "3VptVUEPP9U61zzGMqXzKcUAZRYg3J3Z3WYnp5ezvJ4pmzxdMSSpepvnLc87hfiZgLrwCNN87WfcrC9dLnhhUsfC",
  "key29": "2hWc5vsmmKzANvyVC1KWDKkxz1FiqUjfDSwrPYfaNf8wFbDUxQ8BnzaLhk7x9SACqo1XvtQ5BrtuFxJHfctqr1FD",
  "key30": "aTauR3K3L6YxgiFWywi2QuJAEqUnkaozKzqUVfjCdPDrux9eSiCvJeMtLoaokwZTJoZWNagyeDq3qewDQRgLWar",
  "key31": "xMuU5g8WDRFc1aMshazvXiYM2cXQs9CCTKc7JTzU9bB6fzaoKP9Mhyn55S5BMa2c4BiVeJZGgzdsBnvbn3aLKU2",
  "key32": "2STL7BqhPJkVodUPi8XauyqijHBLkF6trUTo7qZt9b99eNjXDVU2d5a7RiUSW6KSXp1QKdg4qoa8y7n6CkknTcX4",
  "key33": "3fzGMbR3b72R7YhqknPBwVtwfxHFbqJLT9Gs2J6WSsTo6ZPf7oZowxw3EsUkhj2RB4g7d8BfVfDGC5ooY8ah4PJW",
  "key34": "4CKhqGdgh2H4s8ed6YfqDymhfMFhMXw6S2yrStmkbA7U3anV7rVgj5WteUPpWdgW2KjLKArgn39RT8MFviuF8t6X"
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
