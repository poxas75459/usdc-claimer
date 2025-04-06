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
    "jSomrctw6iswU5o8Wgb88hsiTy4J3ihWSvu6NzWjP5BayDVYMzCAFC6GYBXPKcS1HyuYNTeV2SqKhT2yBsF3KLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233PXd2UU9eYSBmbEimsm6nhru6XxvEVwmge4Ku5d587E5AgZypFCe3UCiZmnjV7Dn1YYpj3z3scEAZXA4fwZ4vr",
  "key1": "5pXKZWZw816kU7P63dRrFEu1WX41nrA5aTs2GeYYGPU23SXP2tdaLYCFyxy7WD34VDoGpFze3cwcZ2VuxYEgg2D1",
  "key2": "yFY4uyDNrsaqTeEeKVU7LgqVDoZEocc5WFq3XXhtBaaBKcYS5nE45237QxSF1VNaCxGx74dzFfKYpAVEtfhaW69",
  "key3": "3EC3tiEXxqt2Z4Wz7iz4PfYWd3S2bypkuNh61HYhehyMc9mNGLTprHQLMH34uqHZM3UZ3o7WV2NGGWNAWbUR6ALY",
  "key4": "47oM8UUC6wzf9xB8471NpzTfFdqCBBu1xenEbXw9zAqiU2iSxcrZRnsTCEQmi5anHo8GKgggd3X9vijm8XQPfqbK",
  "key5": "tHVK6pFNSCqcZzvBrvtdjEuHUPhvR1jPsAALTjCT4ebychgSX48d91GgpgJhjJMsQZQXjySr7HS1DyNnenJd2T8",
  "key6": "2MmKDrYBNw1DgpGZmHfKPyUFshGtXecC6RE8uW3skLhr7SFJEqgYaDPRfJuodWvfSTCVauCAXTXVdHA5sGEtEVCh",
  "key7": "3aUzdEJup3yHTGrdFG1XTgNpJb3zakmLhjDgwom4wJnyn6sUgXnKWF7qzGeM12FiouXuDrpFcyvigX4uD6JBdwrq",
  "key8": "8PUxtanJFPBG9ha4jSvSybW1bHo2hHDaWov74UUTR4WNbvXqueXfjLag47N4BFkpXK89231S11UvTG4bG11CpFd",
  "key9": "2DALhf3pEezrujFgFhxPjHoYJTGSfem6Vw7KTQHtyzZsW6d8qeFDY6d78p2n1suZu6XAekV6Fy4kj98xoaiN7A8j",
  "key10": "3bWva7d29ZAqb5k1obvky4Tbv1VY6eSfYcWdvmBAUccEiCFL1MqttcuR4HD9mWmshTeWFMHY9M51F4SB6cHZaPZz",
  "key11": "3G5CZzAXjeWqN6qgfEGKyu49fR2Ep6UMFgm6GAYhEDYCbG8BWR6WbUqS4biFJ7sburnrvGLr8vwsZaEenJLrL6Nh",
  "key12": "4V3xWM3VsoUt1HL2pakok5q744r8LY1rBZXMoKiFkUjiwsyQQBEA9wcDD95VhyosaQSx9okqWcRb4F4bx2v8ov5D",
  "key13": "2Ztc5auN6vg7Sz4PowDWRVcBH9Kop1wCDLamgeJSj98AnPSqQfXMdojgBmvyZcHk5cg5K5HtjGdNHxmuZepMkXnW",
  "key14": "5sNAjtoQi75YqcyB6SMYmT26YLYRtz7hGPYuyc41aMTtfxVRQ6QeEBtmmke2xLTkKQYaKGviEEgGaNs5Yxp6t5JE",
  "key15": "1SDYYmdmXku6tLfztugsGGXste6eZ2LKMupmFGPAekUXMH8BWmaTkJgFLgobyNaMtUNWjvjBNQGdc9KMFoBXhuJ",
  "key16": "35xaetSdgwcVpUFcgScyJcoDQgzhxvmxgAWiCvLFkjpbTRk4AWq278hPP5ESdjBKr28F7EaSKfY9MHEFW9aAfV7Y",
  "key17": "KL2PgJSN3ARfkmqmJY6QTnx1C9Um6yUm6iX4E67Kr9dsEMVosnKggaWjw4f3y7ccJ9i5FRhzYPpSfC6moiz658H",
  "key18": "bE89K7LhFbMY1ajFdD87ZGoGzKXi2LLjspM9s1kArctycSwnqfrqqogBGNNKMBYE9WjQx6JNSMeD3TSVd4Ev8nN",
  "key19": "5jqPu9nnAPjzkjVhYKgJt7LoUV8yjhjJ4jH26z5XAWfeTV4vogM2GovQuNoCof932wcJ78rB7ZxBrCPFhsruu4ss",
  "key20": "66oytvhydNDD3hnH17oZAGXM1mNXfNfKF869cD2zvNB84VdXXxMFdS6sr3QRHsBkz3V7a9LUeuRgUVVfetnbt4ue",
  "key21": "4C91o8TDPtpxp12xEZvjZAnNscYZd9ASonnvdk2r12m4LsssUU5KjHJBtYYpxuy5FGnga7nX5pQZiwdxU6yHuVP3",
  "key22": "3fKEDdF4zCsMugKMC81U1ki8KxSJSZ4u5EHabUhXaGiyR98Y5UnuBJXaxEWCexU1xHbL8dfsjtN38B6Chemp5FG5",
  "key23": "4CjNfBQE7SKsWeGTngJRNZgKP971JM9Ai4FDBWfVMy3JmNYDgdXUPENpWq4LWRuqXyNv17bCHgebp3a8TRjKkfho",
  "key24": "3yPimBHvmDkzdeS7dEm12KhDtvVPPiSzm2ERtaBeSF8LkB7nFw1H2ZjXPSPAFapxVK44YmGj9FNXQ2kRc57TiUUz",
  "key25": "34fiiC7f5sjk4eXKfog2oDueccE7Bj6xmxxwjdCwip1VgvweEv4giSviCd9J8NQ1s49wjx6kruhq84XiVQ1btBZR",
  "key26": "J1e6MJYdujHhxzcAuyEaxGmT3Hf3KDWZGJ3m6qR6vdfzENNnWcHTDQfnQoTAhe7ZCnXR5vGtPBuZXfJ66JHKVdY",
  "key27": "4AGmEPmuyaBRUpReXsFiFvYNzD6A1mTJV974aUhNMFh3xMmGuH9NT8FSV2H1sEFULNV9XZAhByM5ukyRJs1k3ZuX",
  "key28": "25FP5C4mxZCxoeET4NcxaR1748wNyCFky9yBCf4nUZRii1bSknD5yMboi5CJQfrSWTTyHkXXrynh8SxoerAudVA8",
  "key29": "4s7ikgfhDo6RBKbQSTMU91KU5MpNCNk4bLeDyVRSiYUoBek7wSRoqxs443s69nSgFzBx9XdgUVQzw1fwKrHchUQ8",
  "key30": "5oC4p8At8SoUH71T7ETYGvWeAHEYKHcTSRn2Li3fqazB3A9YGhXU9AjjfAGXDavEVZmLP6jW5JzTz4GrjahqDqRM",
  "key31": "4QRERGxPs1Km4E1fssCk27BKziMJANMyyEHv6SemGqtYH6T59Y9a7MNSrogMdWGuKkCwGqrZMk63RRyCHfYcw4WQ"
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
