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
    "5tP1gumqA62AszPkCi8kmEnXEfBq5a4f5j36LVNiSZ2QWh5Gee4PDcMWM5RMkerQBvSduHqbRQukJDm5NqxYhGdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4gfWEuiJw5LGhBfgfN2fPps3x4KGbS3QbibEQaAWqzYFMZ4LatUuGSJKzM368beUnpfcFxpSfgyErEBSVec7cB",
  "key1": "5JgHTrq8LTPtSAZXhKSN7NmVQgbgJRAU8kGYEdnjS5LcwNMWYNsaf5V9HgLrE2AfdXa45DLFcCEV3159GMp5eUzA",
  "key2": "3xCYfpDq2f15TJ8Zt5zy4d3tzAq2uYMUppULvyGvHavMNYWYtesfAq8MqFCS15PFaTAeZ5YmvsAfAC6111j4qGhR",
  "key3": "5gUaovokMwCkcXfDZAjE6wMusft4o3CoZzQp7cVwzW7Ejbzrd1aU3GFfmQBRXBTvam9QFFvccbppBGbTwS8He6Zo",
  "key4": "2zce2iwSrEyoNh1wWCgcgr1w7ehXNENahbPLc1iHGsLygaPBYj9pJBYLDPqh6Y7NfyZTSGaLXsgijuDt5Bvc3QZN",
  "key5": "2pXNRKkTn5Bt36sRvbB84X5RLdjL8xMctr5yWEjzRmQbXsFGLJTNGYiSo6Wu8vMpUhAD8RcannAp3yG3MHyTRP9S",
  "key6": "5LzzAGA1RNTXRJVM17oo3UTBTzYKpctduoeoCUsYEEPPvNQbkgKUcNuB7M9vgqCDz1jJeVRZb6nCPDaJH6KHa6Lp",
  "key7": "4XUKJhG3smSUNVJC6sd7W8EdhssATxJdam2k4t6vaWxQ9FctqnFVRqBbocuB46gGfa31Unu1vEjSVdeMwdqtKRyt",
  "key8": "23krN9bXxagHhoNbG6XmwTMEFMYSYucqmUb7zkyrmaHegi7mMvQWGh5NmtAmesgoHkEaFGMMTtF9bEkHBh9aazDG",
  "key9": "4XYTTSSUjQho5FNomQyRcD6Q2YgAfyBCN8wNaB5tPPhZVG4gerfcMJ8CU4ubpMYa8QC6mcuBFxunYrvfxVnwnadE",
  "key10": "4aTt2NiYpVw9cdxwsTjRr9Z2NUTTCPx71r5qeasKu3GayY9p5fpcw316ymAseYrE4QtsPDmNZ7dC8SFQkaetGFNU",
  "key11": "6Z8Ez4VFfkutDHt7e9YNT868spHbfWZi5Uj4ATumcQQy77oxvp5dnHstxbidt1fY4X4cxMSWdR7kz9gFw9gX6jy",
  "key12": "4jGudZKshcZ1kwxBVFjrcZbak88zzL88FwxxhNbVz4a87qdAm3FdRRemLxy8zGSuYF7ZwetS4xLLAKnGDsowHata",
  "key13": "2PhMT3MhPQxM4uczZTrocZnQxoe8HsFyubyVq5TLRru2EGbqU7NgrwL5DeiHXQU3VDGMK4fBc5USqNsdjGfzgt9h",
  "key14": "2z6LFpxcTqkymXwAZnwLZHLeKq9mUs5rwUGVN5KQzL4C4Ni5pEdWa4Nxmqora786YohMJ2GrEFsB6FJb1Nu4Dqj7",
  "key15": "2smtMXvTjdVvG9sHv5P6sTWuGrCGBy9dXPAFXcbEsqmEZgByPBHTZyUkv6562jpKnynpDAuqhiknrUcqkKCzmoRL",
  "key16": "2QjLMeGyhyhFct1yYWhrazqpMrwrJJo8BANEL8STE7MesNojRqH7w7mLw48ZJQX5JjhTC244fB6ryNsNncjboq98",
  "key17": "u31z7oqRRKeZgeEgnbvLpcYuefHxUAdBdQCBUSgZPEzcm6UbL3rKoaNCw4Q2mNwXeBqhzRsygc9FdHyH2uo4jZU",
  "key18": "2kr4bpAohrAvUbnc9oWUNm5XudPsPR3gvhBuAYvkRFmAzKzLV6PntxU9EPu3i9fKrHpRSe112U2pD9G5RCbiHdGf",
  "key19": "Kpeer4EvebG3zfsXuKBvvCr2TrLRiZ2NcY9Vq5DfqC1F6KrLUTF41E8KvaJNuiwzjjdcj8vAXwCeLSxkM1ea5bN",
  "key20": "4xUwvhoggG9EkgWWigeVp69t244LYSJgoih2L1v58j1GBSPEa9XRLbpYdN4dJ3SXSnzMMKykseuzyXdZnEvURWce",
  "key21": "3bm7QheRSjFytpLQW4o2bP1NpTaEc5PZowAcN3KJ5sw1NCE9FaXhcV7VRaBn4mawJTmnLAB5VMq2yiFWAaRKLYPu",
  "key22": "3SJBC64QhLNEnirc4abVQGZbi6GN9yV9hfvZLVocahmfUXvLqiAEcNC1vNKkDUFhVzVTa3dk4mBbCxBTRWYrPRBi",
  "key23": "4Jx7LwVoMsRQQZEPL1WazbFryZxDHTDwv6Gjj8eXnMoEaWXcWawGUUUynCdiak1Ty5joRD4KBDhhWmS7kNo5Dieb",
  "key24": "4VH9oE9sgQ3KkHJBpxTiwRpVQ62cDY1J2KEU8oJpPBUaazS47H4WvNjVQpaiCS1pVtreXh8i1nh9GLvbBNeUCSf5",
  "key25": "2hRxfzpjkrhF4CjQaNpuebd5K8ByaoB2jQ5qqUKJ6nyqdCV9mLTBh6eK8NUcB3t7dztvzj8HDQzMNnzNec4NDjj9",
  "key26": "2hFKJMVuF371fHujRg3nt7RLGVcQEQiSCEAbMZncozLXTCCFjJJ58bk2SC3F4PbGMWG3NB9oA81GRRmXEq1NbQ1F",
  "key27": "2gGip3nz53sYSgCAZ55ecPjo9nMx5zjLjNREJTyJnmR4VKq57UK1ZZGVw46MDxLkFBhavHGwwWSM1jERw4UnD8g9",
  "key28": "3hSskwoyZyG2M6dqALBnRE39c6e96wueEohrqXXir5ydAHmtHKXzesebaZA7fQfPyq68JtyqUgG7oNmUgGwDNySx",
  "key29": "2Bx9e8CLD6zD5SKaxub4yXcEQDbCBNET7Jd6i97Y21EDZKDtgznX3P1yyTxDEbyMWY2C2yyrZLfwRNTUXTn8QZLK",
  "key30": "2HczSrMGB9upuyj8zGBKqacPs4n3wpiV81UtrnEMyVdmBZGXXd8oPNCJron2KCMTDapnvcgaxeVKT3MjtqjLE6oA",
  "key31": "5fHZGUPZkPJyYdyqFeeeCKkrt7M5AgFnRH7BQvF8G6eo9nanuHo1afSuD3NyGVtX6Y8ZTLzCXwFpTRJLpnfVzx9J",
  "key32": "49jG46YPUwSd9d2mPWBdgPDCNSTLe6J99fp9hKoLX18jf856Z7VYe7MEPx1xfezgnVkTmE7xBik7XnZoci3t9teW",
  "key33": "27XJxRpogNn2kynU4uZVPmibTi17freyAYtiEkQvuGu7XrY9g5J83qAafFC1wV4q7npPoVnwjYCKHKgzfYWUTKVo",
  "key34": "2k8YC2Cvy9JLXd2jjGnW637fL8XoGEyfz7gwy2DktBi1UMrNNZNSPELbXETjmjUy9VMFwsHgPELQCGvbY3c1M36T"
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
