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
    "2MaZiXF6KPDeb847uZyqTjd3Gs5ADrHmW3E6t94QBBup2Hef8m6Ci8wemc5W3nu5HcfoEgm9QqZ28WKVEqqFLMKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NC9rjSsPojocXegfey6E6PE9gEu1GkBJc18Z3WU2z7uYeKV43vV8ke7GuE42SBGqzBU1qT5EJ3rwMCbBvMXLQny",
  "key1": "U27ywdCCcqp2LnJpV8Ru3PCxvnQ3pZAo8c5UoHGE9j5mG6VMrNLuN4oEuc6QYcSKtXqPrXYdsyWBpvfixwQbuwU",
  "key2": "4QHcww5sop66VDoKCqrEjfRKfCLfUwcUF84KC6E2XwNEfbH8TDR7KHRgMppc8A95q7cBRi2npePjXV6ndSJP73wX",
  "key3": "5DxtCVvNhcvn6Vf7piWmAsQrqmB92t58rcpua7ACtDUjjf4rpemQ5RJ3BjAG5gyN4uqQ7xUshNMWsvx3qhnKbjzZ",
  "key4": "3Tta3XfkwZBHakr7mJXdGUhrp6BQ8f6jMj88eEy5F1gsda1rcdHUkN6Jd9rivmMUbBbfzXQWuNicC8ppETtpcN4a",
  "key5": "5QkTEBKaQyX7QUCxWm6edJ2YeZfuvGThM8cqANDeisCBNCpcBPhRafTNfd8niZYtJ8opjfXQCVHM72PnMy19kD7R",
  "key6": "JyLJTwUvFLAdKin79tN4gavDQ7nvL6eY31Htn4axy5fYmu5VLoQxJx1kCQPTXNSnFZJ6g7M9hnnSYFsJVYirir2",
  "key7": "2ncuAafEL9KLvX2Ddpc2EHqwiD9dyttfbA7GGJYLpLAF41VRBZtahHaqBYpjxgtM6g49wUYaSA75hC9sWVnYFePk",
  "key8": "5ufNkn1WBEaBWo2z9mWinVPGEYFLtjPkEWUDgEq19KmkSznPmsHFYuLQRpFsDZd14kpQc2wStyC6YqYQrQXGih2W",
  "key9": "5KAZVbefsVYZ5pFD93mZXMdnoe6mW25r8E6LWnN19Ntzah9opQeV16M9acrG6oXCY7FiEZ8tSurL8DuPEYvJ4FT2",
  "key10": "5XwEKHTaqpSVTqh9YTg1F2MbKbXgMuJtB45hnLRH4SQek2bB66KSJaZrsSmR5yc4Eyw7vPMxKSBwcFH52U7PkjNk",
  "key11": "4Vbx33CanCXhRq3vnD9LoFtvpzjXeprrFJTfXjVgssgBun7FbQb5WRbYGujBwKFUFpgStk8f3z74A2AbgSDKMNy9",
  "key12": "5faSKdbS8SyDn4qmh4tGbLB5HTafPYwY6iUXD2AhnextBxhGBKbjUtirvuvsNWRFtQqHqhqzNCSMDwaSAQuUTzea",
  "key13": "4CiykC7DSZRQGqYDxxbGuNRBMXvzjbzjGF57DrqaNbm9r8hHxLHxhSGCHkcuKNdh7ChVG2teniPcqMT7xxLdy2En",
  "key14": "4FYWDndpRgs7NKqxvMWVC7V77txC34Lsgsj8FcMBFzg2MiY6AhPmjhNY7x65HhWuQupSy9EzdpXf8p1qtKk9bvHo",
  "key15": "3yFWKEvExwJM9erNyFmbqxaERJKpVmNEWkr5FfAiR9Hk3z1M6kW4SW5xBwoNPpL3pAvhu1Wf2LBuSUhfy6uoxV53",
  "key16": "43ECdVwiRQu22fHnKh2BegEMqDEAdTKJBrWCSyJAjMXycvcawbG7whMfbqNivp2Di9cojzDGoMbGwwy5GHVaphmu",
  "key17": "4LfUGhR2mwsz3ivL8T9Z7xUwW36TyzGb7QADgMtBH5syMXXwZzHdrK1D8G3jDCioyUYZpm3pgyV3oZBShEq6eubi",
  "key18": "5Gm2Lqqtv9g9PhYGvjrkkeYTxNMJ68dFQppskvE5LkbhNWqduKvAJvnwzCAhaaYoV4XdEhWGp5vGG7z5eo2dYEHi",
  "key19": "58ZixSzVoXYSKCbD4hpQfqY3Brs6vE9Lf6hqxrV3jHocxhAS8Q9AbtbRdtCB6WJCkHfoFGhQcmVdxGQL7XVoFGp4",
  "key20": "khcGAGbt1MtWJJJLgaQLB6NDtBRuKuGRsVoG9ZRTVxdPEVtjPnesS5GxdgtiSrBjtYj17bMJdSwXigiQ89sQ8sv",
  "key21": "45bzJqPoZAyGYxYoRP3zn7z2mdJxYrwpnxZy6L8vbYbEtDqrZ77VB6WYUYLbNSY4zL3hvFhq163hWMhKGetpudji",
  "key22": "2yCTkq6AbdTWVnmituLUZZfW6WCxYJs5G6QrzobxZAS9W8z3ZwKLwsy39KbsZAZeSRLnp6zhjpiiWnY4i37MBgWM",
  "key23": "mGtWA2qjXzg4UHE6fkHJvFeZNiTzetgmTLhBR4bz3CXh98ubTrwsUAWhhFqMy4M3a1x5snjury4ZFF4vRVyuzBY",
  "key24": "5qYewVoX78nShtsMeGahJtEDrKgGWbop4Hds3mCRiX9T8DDtFUQspXCGgPG8Pzq3pCs53o66Zj8QRTSUArqRENqi",
  "key25": "48MAGNg5xusKWCRiq7TQBAop9QEZEpNjGVvRL26iti4ZMosnaE3ipTJ3yzN2fnrkdXtAwt3x63BCah9ibMkbmiqb",
  "key26": "2YF37fzERrSWErCdx4z58VLi31AeYZSmiyFa9kXLRDBRAnmiisENdpinJGAvMny22LRfhsbPRYTyscJ16zhthsZS",
  "key27": "VLUcdqKsw3XGvJQLwmXr3dDkQUYtjgcRATmwhNWkR1HdjtHQNqTdnxws2h1c9AEvZPVipb5G7S9agiST5mtxyNt",
  "key28": "4bjLjWNVwmbFAoMuKJR1tZR3Y7cNGh8TduSy6pLfNn3dNdWFsyLFYv3mi7kpG9H8zrUxJAefAu8nXwkrS9GrNq4N",
  "key29": "5Yv4YKRRhtFj72toUw4ZqUyzBEFqXNwd1qp4c9qFMokF3BCSmcgecRgUzKFeA8jyWPN4RuDPeHDxMgCdPu22dhGZ",
  "key30": "ssZssLyxxJpCJH82oJ1wpLxV6ksocRe6P3sAxmGTD6VkxP7Nnd1S3TmNW3LCfQmLPeNjVZgbFnGCwbiyaff6ogq",
  "key31": "xMZ48F21Xikbyd5xqwunr5kCvEHpdNXoEWRRXBA6ChDsyqHUsriXpFs9xQ75558Xs2jzPjFZVa8iiUrbRLJtKbt",
  "key32": "65L6t2Us8DGwX9aLrjpTmdo6jrhvXQQ5cQqT5RMnXW29eiHj179W3889BYSu2EPrYv3Tbesm6gFgdZcmACkqZGDd",
  "key33": "3pSQ5bPXL2ZfEUkVKjPKE8p59uG1q6GF7RPadZuP7BoVXPTtL8DKFLVQFVcCaxjg6fA5BUc5Y7doc1A1wz3rZkiz",
  "key34": "5JSdD113ZH4JUyfYPyQ1sJ6Cund4fqaYsw4d6rk5Gro1HFWpG5gaAsTvvDiXxQFed9YGFJyhcksDvNuSWuZQCsDN",
  "key35": "2qpEhUkvtevZAunYRW6b9yNSyTQVeJZTejeJDswtFmKRa3pefzM5L9YsmDySQ4dVdUpZuwEQJoVxQSmjmcT8hyX7",
  "key36": "4QBXm3UApwfZd97drtiqrFeeRQuGPoQQW83zEDv8V18FcV4ZHBmQ9rWxLbHCRsL67xmDhvARENhMRtfvXHGiTJgu",
  "key37": "3d25Np7QkcaPkWQxWAXkucCurd7iJeDD1MU3ER88Npkz5sAFHNTqyawGdtTPawvkPQZcnvCZ4b6Gkn6emCRBnPo",
  "key38": "58F5AB8MRcracfDQbbJmdRGQPW7cEnbfM4AUewqSS5sJMNj3xdY5iYp7PudZztoQwnm7FBGjBfx2dF689rQaHSbm",
  "key39": "5dRn5ciDWurQWdZsPY6C3eirW1SDhYbxDqn9GKJwMYFva3LaQCNEbT56fr4Fa7hB1pZJ3drwxG5dYuTUcsebLDZ9",
  "key40": "5RsgnEBVqYyiBQNezwGFzGwC9qen8tYH5d2KuDgoN3ax7v5dQZyFFmvK9dQCMQYv885Yv9ErjEJiU3NwzS5f2eE4",
  "key41": "64Np5dp293Kn2mZuDzneMdneLoi8b3JuKsocaidsdwFKt4SrPHZGQW7EkHLg58qwqd1cbkF2dYToHDHA8TDWHY6j",
  "key42": "2fDeiyJWDuJRUbAPGPgDCEJ9tA5mYybAZZfLiF5Pgt6vkkX6EjemynZCJPNZfXC9zVLS2o4LX8dRRRN8dbW5zRp7",
  "key43": "23JSyYVxMMZVySL7ocB3sF4RAxgg3mNhy3b1y3GZtw2Vy9BkJ5YNHHhF2SaFRJH8zoP2FJHLxJ7HHnLp7PuF1EVX"
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
