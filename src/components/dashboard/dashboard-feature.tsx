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
    "2zit8awKpLPkNGEKhzdgWDMPS9SSksqUA1k7bpGjNbdLnu5xHWkKUpX11Smo4A4uLvt9JTxbJtcoEBjHzDLenv1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jk6snSnwbbzH96Nfgt6JUtg7Gk6U1skNWDX4oDKt1KPfWgfdt4bt5AWbQeCqYbaQ8N3C4merkyZgKYAq19i1AAe",
  "key1": "5VaZ139nrC3FXe292KLvvKzzWxnBGfbvZeTdpCWHswoYuy6V62JddjVe5gat7sCrxqEM7u51cnzPqc8gFKWWwkGj",
  "key2": "427RN5v39vTf8AvytnHUXh8FYVGzrQLL4ZP3c4t7z9PNviNmL1fnXfQ1LJqdjuTm46qWD1cNSG9g7whCcUsmW3je",
  "key3": "3RLh6pzoLWHWX9MuiKKTHF6dADdbQqernWuLqZuhUiB7wVnrURUnYEVA8TvnaU671cs3cSaxDDDcbBGt7eMHBTRs",
  "key4": "3AZ6YVS58Hz5nie6iCZRcY4uC5nmmnQG4ci16ejWz8n46qXicfgGnV9w9wmzKXrw8YyViiJUCbXvraSxX4pTUs8A",
  "key5": "46fB9AscSoqHCtaSoRAMbZxK9YqNgWF7RB59VDni7NvtaRofzibUyDaCLmarE6WYZRkKV47euPFd6Z89WbDi95gB",
  "key6": "4mVfTsoY86sGj3UCnBDbP2QcQ6VsdVgbMfDxd7sPUzek4mnEPosbS4DgCdLuKTJ4SzHpy6LaSUBeMjbaaJYnaXL6",
  "key7": "4t6gFpFkotKibDbV8pjT2Ubc9QByhotPpm1kzawMawfCjGYJvY3V4evGK74S13yiReZ3B9aqLJzFomV8MpqmRVqp",
  "key8": "5iEwvscNYB2yRYHJDKYRwgHMvuZaPRLzafwdaXQbjjKPTCUbRiYF2wT5unjQqULFKvM6AQikPu9fdGyYgV4hSXh1",
  "key9": "67mh3zhiWswpx6aAgm4134iEQmYom6Jp3SX21Qjr53yqVScVY6fXJu5eiNsdG88VQBa9wWb3wkemxea1irm6XeJk",
  "key10": "39cbXBkHrR5G8fbSD8BWn9WY9GG4mXPf9PzszFUkdXchy1drp1e4yMPoxFeHMyvmh1AatzhdRFb3cAzGS7hs5PYg",
  "key11": "2rtvjwsSJYkwiBRas7sw3tqCTR5MvwUZboQuUYuFpawxB1VBhD8wLLwT7vySgq6wxdRDFxx6ggiLMeqA1e7rJgyp",
  "key12": "asGnH7uac1KaDyEAkUT12oV7DcDVuzpj3KtSqkWvBApW4bMDQgUzsL4FNh3AW4S64nFRrMnx7zrkofAAqUCzrU4",
  "key13": "jDgMJN6dcqTvWr8v5GjzFd15YEgsz4S7WzgzfHkThAR36Qju7H4Q3xMC6HKY31AEaqHmv17mneJXRorfHHxYnzG",
  "key14": "3GQ2kbapjZYDxdrfTic4RqDNHT79Cd1tKhzyVqWDs7Lv5NpPE6pAJrHJDp8NMaXup4SHQxQTK6vByzqpxCM191Bh",
  "key15": "4anNxF41KvL7nF3xN4extEhGyj2cktWapagDmrmY9rbPF2LL96xL7yZvRVfCwJHReRGqEiCoBMGjXiYjbFzRiQVC",
  "key16": "3VeLMsznYyoNSV9UmC7zx6MnFQFyYt6gbwKb9s1Z317uhdZocPDebX7ZrDfQVjVze2EKWucznK2mKGnGrtEq8ZDm",
  "key17": "4KguzXG4MwJU6qfMqCF4qCn2AAodyaw5K9Ra3d2uNAfBYJkGnQDqA1V5G6poy2SE5jWBRwciVfsMDvVS9oekiSww",
  "key18": "2AZaQAcGcYRubPfwUMn3PjxH4RacgePK8PEVtHGTjwunxuK2NiLdMsiPYSbxUNQgowbUXxcT6bFPifWFXFiUucYX",
  "key19": "5V5DLq9n5K4Nodsy6pWQxgBGgJfbrJsGy4wwrm5A6ZmLMyPcx29L62Aw1gAtGRdzWdUqKDjScTbDLrQZhmQkFoSc",
  "key20": "4QBKfqTsRt5hhBBWBtp7WuF699KDaBfN7eJtBWCciqVxhg7rgMVmxWcwR5LV4LQUD92ds9UWBpKyJephnKePG6K5",
  "key21": "KtEaqS9tUkH7LMbJ9LWoJ65GcXX5cVu89vm1XZ54FtYMrXGJrMpxzqNRwuxJ5e8Koaseb8VVDvtLf8YL9Ag6ewY",
  "key22": "5AJHVRNSxPY5CS8eKTvKbaMFQf5Yt65Dpej586JjV287EdANW58Q2BsQVHt9y3cr3CEiASq8kYSfT2owrGXoxje6",
  "key23": "53FFAjgECfwUhqbxrZLNoH6L7YAtwk4BuMChDGVae8P34hdYAiyEiJWxb7M5EU7N2FB2cg7FEzBpHfJZCixxkD55",
  "key24": "3ZAm9xrsxUecEbZQtEWYFogcumCyCicMaGn5KcWUSZuwpL3h7KAFQXc9trbEhT644wtqmtrFcFxarUdaygCWDfmo",
  "key25": "4QRaQnjD96ddmbT8CQLMAF8dRaZ9mjwAxfSrufJHT6MbQicss9UGEmMvFuxYjGqZxLANrddAGeqFmk4ZBS7iihcQ",
  "key26": "2EPSxFnMU8LxXz6gzfsUoboLYa2phvQpfPabEpkkoo2szsHMFBov8hKNdUes2d8JwQpqNECyhvMHb6AfXs1dEL8r",
  "key27": "5yzs3ZfRwJNK1M2U3eMphHdrdZCsDwKXSktdTYcsKyNpK6XLQ9Fg58839fQtGWvJgHKSgDkyRWA5EiKUra4nGmze",
  "key28": "4dYSxivMcZh9mBDb9Kbp8Y2xp9Rn98t8Mo1rJUT3eu1vQj3SpDmKu1jxuZ1WGhy9vnyCdQWWwvZE3ZBVogwxsmgx",
  "key29": "38YEuGko8P1dsudgKVSuVRgjGvKsfhusEcvVrf8jrhXVnynmg63TkxdpXTSDD5GTEjpdFZUoEyq46r6Gtee1tToR"
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
