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
    "3Qi8TotH4t9uvf51jBHVb8D6DJQxXyV6TwgheQ2xiKXsBQzQT4gfMUWJAa3G62Us5PEtweES28ReEnWV73trsz9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epgbqFDKJjiegAmG1k1b3jr97PjxCGjHkCuFaxxaensY4u27DCQyEb6fZ5fP7boMFd7HxZ67ricDh2Q4pXziUkm",
  "key1": "gVsSJeesyHWmANs2yYgx5ZmEdMjkpob3hRuFRi28QKvcGzF3ANiGT6JxZJYqR8CpuYUzPuYE6RLKki6GkifoNRU",
  "key2": "APzqA1LudRxb8yhsCZKyXwTHu3R15ngMrTmrg8ZVRdLdU3NpQ85ph1Z587Ucspc2886bCkEjVUx9pTTHCX8aMSK",
  "key3": "2CGUuRYuB8H2oAK9Vs4RmSCH1UpccjmynBgzByVfLyyY6wWwfCU8aoCRNt742GB8J1uchpWBZANrgBFXtgBWtgdp",
  "key4": "4EKeQgkQhP969mqJxpPpUDv5sczBcaGHHUWvUU4VFtPuW2DZwW9MZsXSo4nZReEth6vTXE2zr2empZkS6L77uoqp",
  "key5": "5um35DgH9sZwYE815GCrSPPy3fypi4MsTPwLLx6S31kTJ3TnwShyPpze1aMZCUgtxYtSotdPGTo9XVHsLyTgzoK",
  "key6": "2PFswoCZo4yZEuHHUiBFXVvcSnpsi1qJwBXXaKKFpjYLDYUi8QF46RTPQ7Zh5tszmDmQiKXtFhr1LBcZui7Tmd4U",
  "key7": "XP3QcDupz3yGaJ1u6xkEesMtJaN2AgdQwGNQyn9cjGTZMUeyhS362yvw1koAci35x1Sd8AJSnNC2KVoZiKrv1oH",
  "key8": "2NUeAf8AZfykxGs5p2S5AHQR9ubCCJbvpdik2JgqbjCbv4cYW6KVwX1HJusDTSbEavaaDyCXZXjGPQEHpzUmh62L",
  "key9": "5nNnbrRgkiutmps2QXN6BtRYjboUWoKCQK4rRTXE2oRjD2myBvF5zXjH7jiy2Eogge6jk9sBF6RJG44M1U5xWKS",
  "key10": "2pWaxSf4J4nN9JpjycMajVgbaD12LniiRzAs64oGTK59ZpN5S3TtCAmPr5352hehLqAv3bTT7PahswQQB1umgX56",
  "key11": "51GNcrDHAGEE8tvZ477PCq6gZECTc3tnAkV8bor6zKBPMah7J47hQjLy6PzAWqsK1NVsTb2MAafsrADwnPVEfMct",
  "key12": "4jmxQV7EBtYb5vtHeJF9Vz57gSV1yiCtMbDohtkbPX7dEyXVWRUUhEfSg16GBadmMpZjhjJyH2v8jjPvLq59mFJD",
  "key13": "3tDXQa8B4kGM3AyQKGRfB5hcnSasN8KjKrL9hbhC5wMYkjU6w6Kz435RjiFkT44fWDTjcuztnQZNPupUgXeW4tiy",
  "key14": "4xvnEhSu9MJ9Zks3B4QfXcbcJ5PL9tAr8ZQfpoWw2pNYRARRLJCKqcd1LAXarTsPYFCB97uz7wzw1pJFy8PEEMN7",
  "key15": "4wQzM4MZcrEsTa7nPb6VotmSzkgw34onxj3repPWRFZBCxSdWxVfysFGSAdesVGTzkUhdSJwpC3yeRK19rgwFyZ9",
  "key16": "54nzVrFfSgpDhx1ggSqndokqp6XgRYwVBYNs43PY7czLRQaHRafDke9Z1tv13aovo4BZL6i8GDpKuwUj4jr29a6V",
  "key17": "5BkBACEGqCvtFxiRPzov6bKFP7RUe7Aei6LERZFSkoetfYtMW6jNA39pNxAvFJ1BQo9rMtJyB7wEsHhQq1gPH7x",
  "key18": "39vFRwQd1wmL7e679qvZn1Mdw2oxfanTRBjSuMa9JHCmZPUCzjXeAfRyuvtGstsT1Swi7oZZ4dvforejxJp8x1xx",
  "key19": "4ARq4zH4skX34EKf9zVpre4JwCiZcpL6SZSjgTqyXTQ6niJdNT44cSVqPEQHmg3MB8BKodb47yCZCEX4oECDzhtk",
  "key20": "Hd9QSBd4ceaTkDGFbevGYxbSY38v5WiM6QS2gz1PLqax6HRM7RQjuLgmHoqUJ3ir8nWWc3zJEKdqhjbv9iufhrK",
  "key21": "5CwonvREsYo8RLWQLqL5P6Qq5VBmqPq16neBeHzK6p7fded5dpNUZjKcBFkAJZSKodpiQV6YEx7W2ysxfDSj5Qrr",
  "key22": "4SMDXj4kZXE5MST1KPEK7PVdCj52oTec6sggeMsBQmqq9cFaG9k7Zqp9mS54P3rtyWFYbnSxqbWGGzXv2jN7uwWB",
  "key23": "2R11drCnqNkMPUm99h9uHTJRMGUFJRgcYrEp6Ahr9FLFXsjRZSshSGiR75skG31oyBWcsTR863Vxo8dkHpGuy2An",
  "key24": "4xiu8a14Z3tUB9wRsfUcoGoh98nBdn8wQim1mLkTdxuvsAs3CQqzCdTT7sVZ9UzjKi5XDgRVC8nAueRSYg2JcVvA",
  "key25": "5Zb4AU86NJUez5ZC4G2MNcj2zSAu5nNTTcWxpzag7pTPyumugEqyJHgSxwc3fmY8orughMLPDC3sSerXuiV3eZQs",
  "key26": "3dgJ9Xtc8A4mGVdBj3GXnw94BQv8LMjcP5j5dFKw56iPUy5wQsm2G12KEVR7umaJBHjALoW5ppVCUSm2ymoMqj2G",
  "key27": "4PGE4M3aPpBfyh43682LZome3rx8odvo9N4rhToy6WmH9QNy1sqFDp4PGDgcPvXK3kCgU9AV7TyQ7r7PvMuuNXEJ",
  "key28": "6qjd923VXQioHu6ZeiWvs9fFJdw1qYgk4Q36vcTtR6KKWf29EULDfCqbmaUpK3uz6aJwHTEMsRKABJaqgAjR7TR",
  "key29": "moJosCfVBjv936TSkDNytz4Go3d9awDQweScxrYQEta5YibTLVuMTcU3MuNHXt5qS13aARdEQBa4WDxBfvKTgg6"
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
