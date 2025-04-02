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
    "gKM7hTbPeDJozyoXoUWeHMN99JCPSzjuXeGWxRr3hT8BR7t5eibC91mi5w1AvBpUZ4Cv5JjSBuMsWuEjgEm2iaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vS66YjbiHdheWFniDbmSuqLi1qiN1UufyVsaEo5BTtULETYkVf6gnVxj35gri9VbvxkTWvWSpCcQt68LvcqoBm1",
  "key1": "2tWeeE4DztXgWe4RVTTcN1Ya7hkk1P2PY2bw1TsSw94yuXE7ksAsHMQy7s9o7MFfJC2rXXvzfRRsrjrNbSudnkvC",
  "key2": "ZZ2BfA5bmV4NJSGAZxR8hU2htC7DKMEzTMTQeZuyHvTvW9T8hm68nk1YNooDdPr6bHp2KxMDcbL8YcTVeb56c7f",
  "key3": "23xPzau2zYiu9yhu1FgYx5DEirZhchB2y4LkpYvrrhC7iJM5WrAGCd2yqfYpuCMAUWJPAJcv5hBc9nK1EiqQmXca",
  "key4": "24XspsbV31NVaWpFq4j5fo1WEvMnbWe1sHPWLUVjaSsnNCEgEjCivkLDPFnKPAeC59G8eM6FqgPosdfZMxphMRQ3",
  "key5": "5t9zhRQEBRZHNhb6VMnA9ARw975SEgBrQuXXbmJvtY4EvK981E7oePDgXXrePM4WeMAxgtHzAiN3Hi5s9nFVTkvE",
  "key6": "5z2rbEXxhZcAagbUdE2Yt2AhZtrQMB6Td4k4S8CWbLgs2xjK7HqYBmFzx9nF3c6ea8brVLgRECNJHzBw6y8CByCA",
  "key7": "5fuKvquC29DiC3VaPvPiEBEv5XxnL1PzuBbyZ3chEJbG8SiXNzQdwSBeYnohkftyZkcZM2dH3amvfe1wkcY7pnuM",
  "key8": "5Bv8f4WjmtxqfjuNU6ioXarRbbBcWMxbHu4eZs1Utftz397XzLas9bjWhTX7p78qKoPYBRYmYzHh9S1pMhyXZdr5",
  "key9": "3E4kSLz8yr3rnCk3xv1Tia3zq38jVjkFGJnMT4ztFsUjry2nYdheJysmoZG2jHKbqtVHrJ3UuH6cjhb4HMrCKssm",
  "key10": "24HaJLLpnekfQ5SCjW8YEektvG6sP2Sf4SNv9V18gQEPRxkg3Zrpbdenjqwvac6vnapyW7cn8CddEwnFURT7QFKE",
  "key11": "T8jhJdynbADxQxrmu6Sq12JtS8rkZ8G912bfZV4apR2ij7j4B4j4FDFnW9Cx4netkTv3RHft21DaxRB4uYRziKc",
  "key12": "2QRcksfmh77hP14L9SpBBmWBv5F48P3bkihTjERqepdUB7Fw3BSRa6ZqCXb3pWXNbsVXhDEJhPp7kxWH5ZYQZvmT",
  "key13": "5afPwBjRiozHEWQdp7DeRq9wqyf8yL8F6tmTGqdvCWqyJL2pdfm28ztuzR5yD6HhJm1Cgm21AmzvraHryFYTit49",
  "key14": "4chDCr9VmpmYuxARrhfBEBv6ev5R3HpRnzZZavYKdBgcb5Mpf3r2o8ojWKAB4z3W3uktw5wqpnFm15jT3kjyLadd",
  "key15": "4Vfz5CVbZQNEisTA1XuvjMCXjDM37rNYYKYALAczTcX447czxYQwG4uwgJR94Uh7GhYupM5cG9sn5wK4ioR2CnkA",
  "key16": "3Dg6qsZpynX39dc7pko1qHo82PkrbwuXWpSLjY8FPzP48HJosd2rhDd9tdrZNxrGkqJdCjM6Ljf9p9KuWTHJe8D5",
  "key17": "49nXGxc5bGUqRhDNkppQ7iJMghmJs7eVLsEEEHgwiS17G1626NkEe67kAVLnTquLSLGsE9ZWSngU8tuYKvdU8k4S",
  "key18": "3aamNnb5KsWXfR4VSmzjwqJtrZEzF5uio9Z5zmNJkDbZgbLM5ywNoMopaTP4v48kV41HNuFFWwNvcomD76fj3Uan",
  "key19": "3dLpoPUqmaz7NrAtvUeraYMGUjcAKg2TSW4ZzgYiZq8SYUzVW9ekyE4oJSgypGEWQQ3mgZ1oL8YrUmd9NLLpTMXw",
  "key20": "2X7NKw62MNvumgsakhX7CS2SpDFKiACVFyVjq2wcHtU1ZjfNVUTQLkRsTtpgEHMbVALgxcqi6Uqm1PRPeAHUdmR",
  "key21": "4CBCzf21nWB4Y3X8PtnJojXhN1wzdDvf9MBqwsFo4w4QFn2hcSg4yqsdjpciAFbdensfomo7YNX6GDvmcRmDDFN6",
  "key22": "3xehtk32iKxWzgYzaFNQ8vHC4YugDh2E5SxVTHMe2s4Hpu4rWzox7VHqKsSSMzYEMsKgWsev6F4odzn1BKZ5pqxN",
  "key23": "7jhbqeR8jawtkBmKSfAthM7UNMPM1vUxAmQ8QDPZu63aAwrz6WkMPbd1XrwQ2X3dxJn9rzFo8hYkmV7Q24A1xvU",
  "key24": "5VnckUQv7637hjiuxdFhCmCREoQ64fHs22noLuf9iToTPCZDRyxGmun6KcbPQKpLnNyAjMFT4CMYUADzU2CkJ5dq",
  "key25": "QmkgiGEBuxSKV79Zs5w5D8NsfHTPSwbKb2PURzjpzfNPhBTZM8HXnmdReDQ167CsAsRpRmWNamPXPKc8z3kSvss",
  "key26": "2Yc2XkE6C5Evd8rkXyrMBw6fAz99xKjETPPumriScWGWJAECHnhxfMthVcJ48VkdGiCsJ6ofk4rwqi6AspNDtefe",
  "key27": "35gUKcKD3UdULmAgThaX5qWG2pQZhX2xcz3rJgFhqnPeEUDjenMmH38m6nfiUWS7qXqpB84KHhypdJ9WLEirLR3D",
  "key28": "3HHJPDGt5nDbwtWaTVRoQt8eLLvKQyPvvHjC7GpoJYMpcszzXHf56Uiev9kZxBbTz6JhM44N1vVHzF8ShibXJGwo",
  "key29": "ULsw25p35NqS6zjpxfeJmwuPN5YGRCJu36SKpGsP1iLNnhDpJiFzCuQNpNCzLfaW5XJF8nvkVcV4sBCet2yZiSj",
  "key30": "2uxgBKJtdAtrwGCNwNqxURrVEAnyGZaJkoGgNHwg17k53V1F96Eo8WWtwjKMSV5tZz3SqVjhgp5qkffHTSLcBtzu"
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
