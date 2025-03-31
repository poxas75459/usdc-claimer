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
    "4S428YoavpbbQy9fkYrxxWYGUXizrDFK1PoTDrYYhfLjeyvjBDb9kAiJBRsc4UuKrFk9DN5E4XXmZwBsyYoj1p6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jYMMrkvohU5AQm24FZ6BSXCAqn6VvSV4poQz4qeZLajok18JHmHVDKPjqRanoDDhtgkzQcr6KctTnYRhpM7Q8M2",
  "key1": "PGMYpEUADFjgxYtus9CRpZunWXgXTKdqvcLXW8CM1sz8xUDYTPpBFg7XcsNX6iLXNYEndWVkv6LFBvbcg384Raj",
  "key2": "2gNkoykiaisP1y7Wi9Vy1ZY2kzhRpUxES7W1JSAxxPWebDfQFoYJ5PZ7RAL8TS2mVMq95HTukV738NjabXdUu6wj",
  "key3": "4wXSdqnZsQmBXTioAL6kVfxy8b3DKjr6sqPQbgaoJPzXY8cJtHRf3sGu8EPVhEwAf3FePBtmJgwzgrBS56vUeP1M",
  "key4": "2Dd2HqLbgHUuTUqfU7t5p1Mnfqe6qygQTgBBaoShwAw6ev3KcB873EJPwNtzMV4haFsLXKU6zaFmSoTvwAAs2HAu",
  "key5": "3PtjrRvSjKQTeS4dZZiwYZfw1iWvjD4WX9sTEMRR7CwgwpfuufifFDpyA8HAHCYm5XFRPtC3h5cXwfCyqDMiotrE",
  "key6": "5Mu9jnUZDF7se5eSfZhY9MhTXQBZ8FGNU1moZhPz7WGmBQ33Ttno7E5882hqPBThCHZCYoYY1K4YR17t5SsUuQvr",
  "key7": "62ccouAYSm9wPbz9PgKzZ2HhE3gTr4EvDxXHQFjmnrLQi14K2wxeus1EtUsSMurCEHpBoTTUwu6tTMatdVM2Ksf5",
  "key8": "2LGns4EXcoRwbMNgfTYCQos7rHiSFMxHo9wwJ2nxDYH1aCX1VmpNYwKmwmzsQQGEn6iq9SXYkwMbFFaFKYZ7sVfs",
  "key9": "2dgQ8JnxrKeykrM79dUdvsKZR5gKLtwwaf5tp6MfAa1UdR7aRbAZbdV7XrdBKkm1njSzSrnUvWu1V7TYGdEsXd7U",
  "key10": "3nWnm5RePQQUbDVxf324bkM3U7MYutRRGu4My2erdGAABmYbnARbUEQ2814QJMz8jQTKtaZhFVW8c1M88VuaTigp",
  "key11": "5QzptkHghaxGxZh4DmJPrQL5EWHsoqdKToQoBko6J7FB7F2H9hq9t2NC3Cx2LMoYwqyucJLh8Gvx7H7pEMpnZLaX",
  "key12": "21RVpdLxS9CbX29tt9D1ZQKCvqJQ3uiEUqLCJCD4rz3LxtWZbHtuuuFejRmQ2ruLkEPdBMexNfTWKc4ZmE1344NJ",
  "key13": "M2uWpu42QgH5nARKShhEK3uecmtpyoeepYGXcrWXoReP8XLuU9NmxaksP6FbTUKi8imNxzjpC9de87iZKqQK26C",
  "key14": "6511e8cuwa35pDpGUGNsFKEp7cUA8vPB3B8AXZkwSVL43QT6Dm5PTxCjGWFeH5FQvVwKfbiCmrKjy1z8KdDNJbo",
  "key15": "FSC115q8YDZit91trDtP1pQVpfuvJQfT2LbaD2vqiJGsQ4Sdg3JMapRhAsaPdxYwHGUDcdsVcD1oXZLVkhzvYVH",
  "key16": "5dEazATKQhJTqJ7ph3TgBnmpPfsXcTPLNZcQoVqqjGpHXPijVt1mA22RVpyU4k4PxYKWAsBD99oUKurYTjr5Nykr",
  "key17": "48BAb45Zdx9PizcZzQUY5R66XLNHw1pbZSbTRGtGr9q9gbPfnR8MDbZ6fwseHhQiAVuSj3Q8y2H1W5554VLRvjU",
  "key18": "3dDtJ4KBDauGbMXHn7QkEFecVYPr1YvgTbiox3mf9CFvmQLaXBs7fo1yonL49CGwoACM8iCb1xVRCXPYnQojqUcd",
  "key19": "62kfNUtbfvhhceP91fJwq6t5peyYSG8nuhYHHQnW4KGQJEXVYJw9N1wVjsNNAqL47EiLymbQsdXxH2XWixToQVV3",
  "key20": "5Fmk8E2nJ25AND1wLeFX1ikrk5LWZSeroeK7wH7afEpJG7JAJJZsWhbp8NXseJqJ2a2hBcyddwvBTNzcePhwNNXx",
  "key21": "4ZmWoc8wdSc9Hy9qjUwh3mV7iCudppR2RFv2BvYJH9ZaVi7sPp3cRvPkNRk2nbDXn6LRSupmZ3PAG3HcudJTCGe7",
  "key22": "5Gxp6m3g8jwgBqfsoxhYaWz7gbThzBoWNs4jnnnprYQUTfPiszuJeAKoyRJTVvaqt6GRdSkETxbiqZFVnERJcCrR",
  "key23": "4EWP216VjRWE4q31YqeajGpcs9iiqqZSTquWZCMzjMaa3AviKft648c3BBaQDKgdJusumXAXKKt9C476JN8YFfFv",
  "key24": "5kkD29yf9aKuG5eFp3ZCWXrzAzkdTLNVUA3P6fvwTdbUokbzjQJYJycZSDLnTc4w2cB5pML9EuYEwtkn5WvLeD5A",
  "key25": "Ut1xfsu3j4tCroRyp4g2fA1cqVWyXsg9Jf6qrQ4Lb2fnUhSQTPEztcNtP1jCbq7vsBducbjsHp2UYvnBRkXVEzc",
  "key26": "3cZB3cjarGsYsN3w81RX5xeD7RAH7cZiHPSVmX8p9L1wBzdTKtf1s1m6hbtAdkmViJj7SaTbRFNUqzQas45PTRa6",
  "key27": "3pZC3Pau1Ltn89BXy5UkuZ8TraX6WESg6fMi1eHbUpD5Z1wMdHyhEPQECu8DkSryCjugqxVvPCvBvAL5erH5gZvE",
  "key28": "3beNoiKkGYMygSLqrN1uyPpKcqqhF4vuz2qGSbmbNMwJGesJcJ2vBEkQKZpzg5F7Dq5LDUjVWLbYFaYhiVH4FEnd",
  "key29": "2JuLvMThqMag5CEbmXiGEfFcEeT1LrNzxGNR8P4LzZuDBhZPkQnBtPBfJ5UohtEKFGC7JnCgjEeEWk6HENLa1iJS",
  "key30": "5JEsTKtjcy3wEuuEqj3vP1Ax1a63M5A76qeU8xdfgG3MPGhr5ngHunLueYT7Wxp5YifE3sTn4vRHhYQFooaZ1Hgr",
  "key31": "2Sc37dwLMhpYqBKcTXADNcbBHryfSfZ5VTS7ztp9DXaMP9fqeDEcu5VJXYYd1tncprUGtQRWnWQGD9nt42XWViWW",
  "key32": "5jLriBFsGSix4UrgR1t46hTZByLz8m6Tzics8Tqaq8Y3LoCtSiwdaf8CHX1ipT91B9VjrQ48UKaBwWNcF5KwxDVF",
  "key33": "36SSFaYKvPv9xNc8ncu9nWCcT9WBpNaK1LxmbvWVoq7vFnPdAhyReYEAPr4nuhsjMRTzMR4JrtE9x5qAAmBzowKF"
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
