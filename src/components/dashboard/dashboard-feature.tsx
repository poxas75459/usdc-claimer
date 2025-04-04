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
    "4KaQ9ihoScHedNM4UhtWU2Mj22kkEX7q8nTp2ogi7p47fy1WuxeBFFCCRqDaZ8Y4sPXKFNYBQ8VkGEbd777f8gue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qACQchX89M4f3QgVrvweqPLRxiL9XvRvNHAimdnMN2r9v8utjtwRNZEtFbEERtexySwCM5LxxuAfTqyuBDwfi4L",
  "key1": "3jM7HtfefuRxVXd7yEzTwtah61Uis4ieb4RCeJzsmChNsZ6Q4UZ2xyntUY1LJTkWE6UWe22B7f3u7dp73c9HQH1S",
  "key2": "2ocYfqTr8ss8SEY9Jzjq47aTCDc7nyYwiE6Xn9oQYqrNd4NYA4QgfVVLgu352gc5ftx24Co913rqjKRzT3GpHRgQ",
  "key3": "29DT66ePJfiVNEb98AvWgHmmXGpZDHinXrjZiS6bsoyKcZSe1VUj34ixPomdN8aqW3pvJgMGjfcdUTjAhCg9y5kg",
  "key4": "5KU5QoyBmaWAYoqNafoaURkAgCqUimtGbz2GiEoQC42y48WeDETw5REbMZJNYa4so2UTXtEq8VMHvFa18usE1UTV",
  "key5": "5N9rDZg1nfq6uNKbPRxnREhyu221P1mVqVZbpMk99jbkh1iaZAfdCvBw9JAWkWjFGycehPfVkZTEv4EDDVcSGjoJ",
  "key6": "3ZV9KaHV3BvbqjAfDm8fiShxveHxWPToe42hYS9mDcL7wUZuoqdc67EM5ziJ2pbjEvC1pKhyNxvbmLnei5SJ7Rww",
  "key7": "3CmknJeaiVq6rmgn39vGFvH2W8KGUFkm5vshi598LARDQ3mtVNbzt62eLyVNn3ZCjEkwYcXMPxPWKFvDYnghonng",
  "key8": "aMryoJVy6AdVSoetWr2kXgKX3qkJ1nvnnqsDppAEiQZN7Te2QfejrjGiLuNf2Fv5NgfbYPYCLJuA54jNY61uSfS",
  "key9": "2Jjq5LXP41Tf3bjFvASXmDPey7NqchzTErGERZdwYoQ4LDkQJUJzqpBAD8LGk78ycG5erY3SWS4rXrLnuAqqi11e",
  "key10": "5zkiuGLGqMQe7oPt1C7dX2dmMWNWeYyJyWmupoMb7JdH9EK1FuDDfH5VevPcixAN7Uvb81B4rdJ5fiuyqCQruVTu",
  "key11": "3V1YcQiT5MzUgSJN2QXZf6CGrxVGBYJFDBF5BxcePRoKybFgXbQv6CNvHts5dBYN1ULPeZh4L7jUi8EVG3M1KvBd",
  "key12": "3BZrC4awcqts4xZqHqQwt4a2aStN8Sq8KfVDWF2CNaM3ubAiizXdvAPpQut641byLYk5BA3mgE2sZasRdTUEckm2",
  "key13": "4MatSEBbukbzHJjQerSx9akFdZDgRC5njrych6goaVETgSRRzagDv5mhBgKjYLon2xVmcW8TTreDDDrbxe3eLr39",
  "key14": "4jdWhbwJR3FjS8zzjFRSXjZwDtT6iBUa1mna1munKyAY3JS4QPSJphYmsGDiUe7LEB3cJdHKSY1Vvczx1gQ2hQ9A",
  "key15": "LvuNW3uGTmecpsQWfa5WDQgecX36c9w5ryvx222XNQfWmqYWUgGzysLdSiANHNKFSQ52UmL6FE8QcKEHNHbZUko",
  "key16": "48SR1oyD7mVnhTWckzfXCBQt5uFd9cVcHo9gPoYyUYvJEaC34UddHPvmBwtnMYbH7sSFUSSW46DaXfxR2XJqB646",
  "key17": "2fnXKQxScQFD5yZdLN59zwpTsBahaGvTTLr7GE5acifh6ZUgbw17JsYS2FV51meUTyEnmzr6SEiQjtNAtGixWSjA",
  "key18": "4EdBnAtnNK6nxbrM6pTkaDQ9RNyM4cKMbPzWUDm4DuZ95ZNvRW1EirPtxiTQia3pC2RBM48NswhxpiB7BbKu4T3b",
  "key19": "28ZLDHULNBA3NdgCsieEjLzBogF7iGx6P5WZXy658JTjqeFdGRFihCMsEzYtJ7xevfqB3Z7VmaEA8EvxcMB5LbcJ",
  "key20": "493SqJyBJMzZGCN85hTri1FcfV6gFJGkBhXR66Y8Zt2sQ81XhcGLFRosJup75j9y292NX2DoSSG78DnEUAr1wMYY",
  "key21": "s2yhK1Da1mPN4Rx2fXtywf5kGRthWcHfLdXJieA3jogn2otwd8mx2oYKUQhmZKdgPLwL2qsgr1ob8GvJLhJC2nn",
  "key22": "54pyUdMUTZiqxawZGxBrr7NWjHTZpd7zaPEJc9eDrfYKnqiqoBYpnGhidxw39hYNXAzt5hTKPcfjcAKmPYpzSt6M",
  "key23": "2yg24uYkUEi6mH3x7AZpJco6EU11zVGMVZWwz7VjH8Gcyt99YQF59jv74KaBUaKSKakAg3k2Eqgpcx8RwdYohW7C",
  "key24": "3oE5jqbzEWTEKau4MowNEcSrKREKNKVkXg7LX4Y5MHM7Q4JFze59rStv1oo4u4TBgwyaL1YttYGuMXG4x6JfXriB",
  "key25": "3VSJNFJUhVXjKW6oqz37EVt7khUD89e2MurRtkex4cPp5AVGn5JE5P5L6CrdGeDMHVBjqSQHQoVgysdchXrwJVdD",
  "key26": "3Fa3D34f1MRvR5TLU3QVZJLGxsFaZ1qiXskK84CF65oAhE96DiSqW8rXKc23P3FxJjJw6pewnrJ4KhsueZinYGqe",
  "key27": "2BBtDkoGtGvomPjZ99YzEVLcxk4TWuEsgdzpxKM5wUhTC3doP3NLiddhNRMv2QWXytYHb1aivqoGunMT5jnYmR2D",
  "key28": "5oqaX2qSveCV3FKVKXoeL8LWyr3New3C3bYbShuvpYTJEDng9r9DziENWcKSxSXx6E9MmRv4vXnjhgxMnFcSRJGa",
  "key29": "5tybEQL1hjyqyU2juXKXshcVKtpgVSDUcLmoeaXM6YT5r9AXf4mhxMP37vP273Yofb7qe1Eqv6fAaNCjb4esfCK3",
  "key30": "22gBrLkFaYbTSEvy1fvADKR9V4PudLowj1bdVrmhrca5EXJRDmtQ7S5M2SNdArPh2BmWw1GipufdhNwCwcobhVmQ",
  "key31": "3RSWGcQnnhT6UwusYP5CG26rMiTXkShhNauN8nydQdSJSnuMNDaGfToNT2kv4ughhd998nDyyyUuAqceKfpHmgoe",
  "key32": "zG8EomkusfnhHoZNPXM7m6oQU2F2vWRYSv7F1KvtG3ZoF2DLS4zvLKPK6rAuR6SLAnRrvdtEPW1vZ8v7NcASqh1",
  "key33": "J7ovFhcU8DQoMWsiWspfMgLTrcMc1nMJp3k2yFrNLJhRHfWhELfdz8pH4sLTZmLiRSiCEsRD6uQGJUS6QLmJG6C",
  "key34": "35MPjW8F3LZpT5none8DfLGmeZyG53RGY1UBJr217gqhQdh4oc42RuvZ78zgTTZ3V8ZrFpJDLmoMxoPGYEg49BWW",
  "key35": "5aQxoBcJW56E1sXt2Dg3Lw7dM8WTUYxXwB5zRibziGP5izzFxzNXAqUYxeYuPBxMKPML1GSzAEkv2Sdrv59Gooo8",
  "key36": "2Eff9VRrx1JjsyaC6Siycrgf6D6xLhUnmguupx7Fy9WDsthfjg4ZdB2vBcMq86ztbTo46ANLvgfw9xtWbz8MBchw",
  "key37": "2TUHh81TVgSPXRmbe5fmtbT5rpbWQxyifrnzGYr6tFef69dN9Ah7zVfDcy3J1NYvFRu1mMLyRUx6tTxp96vGV5Tx",
  "key38": "xwvc5uLps5pC4jfePR9c5VPc5VpifzCBvG6JekuvNLAFAZ3hVgQ93T19axU81M51XC6Q4biwqWiHBwnw94CnzNu",
  "key39": "5ZyA8b713hsJvh4CNvH4UJ1CvnJEkqhRFVVcYAXdoz86GAr7SGonZcKSFu8mLXDsvKZwH88jQX1vDpr8pyorsFZS"
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
