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
    "4Neur3bNBAAwpmnpAMzy5QLdZ1YBPn7hRZULayK84NXktmVbxvPHanEyMh4mCFrRCBozzZzFuuJxqyE8UBVdcSt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FjbJdAddZnJJ9oPF35P7B6pheKdRbKvy9JqMENw1HrdMFC4kAPzB1YkoFKHGZNCn2KGpDPUkRERGFDX8SsxerL",
  "key1": "2nPGxCto7RNVuBG1MHhmuMTFfG64wUoBNDdrkGWNDPBE7Eeodf8J7zukm1qdqVzutbNs1XaXEXMjnwWBepvS7MV8",
  "key2": "3yPJtUnHhLacrwtBgxAL6vc9Vm7Dj8b63dQaLDPjk53T8Qj48NHZF9Ykz3JVGCggnK4GSHAkK6yMoYav5DCNRaaR",
  "key3": "3qFdoTSm7gXEof6UEJNK8uZz7sWjuXFbUJRcYUpptqQ8ax6Np48AdkM2asmoKCYToBr9ccyCXmqG45B9mNBCgAgZ",
  "key4": "2BPecV1FjTNvF1KEv2UAd9VUdGW8wXmuuaNNK35GhpmTsghrHxt3xGULuwize9muEH6saMmhMR2SS4W7r69c5Mas",
  "key5": "3xcCjrwwkdc7aXr6B9raxw7aEna4YeC7S8i7Ba73aVRebZwqiXitgH1iQZeFhrh8ReGkiRuVScrtQcRzg7EghUHv",
  "key6": "2AeEDfEgkKs7KcA3MKARTnAqtkRRiY31yL5APGg7n6bxgZeSiY1LiQNLxAAQGfBH3KVtnfm1ak7ckZBJn4bji6Q4",
  "key7": "3YzoyPdgHf1XxrCLf6aDvzzeXmFrg6V7qPfA2qSjZRKqVvjTFkk5pvKChWzCJdGp9ZCbxLrYU9doFLnDYDa8FqkT",
  "key8": "2vv78TP1AMeB2APYKgT128fpa5xpvjC5sq7B4acos6GP2EjJ3XMNK2MhRp121a84Jb3B9mBVtKZf3rFyKwXNarKR",
  "key9": "3MkePXxvPpbfQjhvaJJQBci9pdVVMvQGZkJCFPVFkPWWguqSCuYiTpkQn1MsiMvzrX4GdNLNEQTktWLjDkCHtmjV",
  "key10": "2VoMR4Jd5qcfb7sNJkjQVWaz44N9A78XxqfJ3yu7dpcXfCiAQeHUjXboT69sKVStni4pSq2fn2XDS4JEA53eoBmb",
  "key11": "5SdH46zRVwVbdoQGdQyX7AWHfzejQAWfrxnrxVqPCDDaBX6DZMQALD3WvtSFaqd8hRxqzjtDNrfiM3WeWnwcNrDH",
  "key12": "ZUrsVH1hrSqVJ52oKBhbvQdxf86fq9R7zZXRiSLbd59he97kKAE8Zpy46QFCjTkeHp4A898nTrcEPhppXcwhoFK",
  "key13": "52CUWQVtzM8S2zcQ6TnxMcHaAkS1FgM1vBW95fkVpX25Rdvobf2VoAK7V2NVRx4mFxxKnm5kkk8mgRD6L6PUnSQ4",
  "key14": "5H2dbgZmDGAbXGCpGLPimJHwjswzLFQYigAXNG4dTe7bWtkm6A1BCHh1axe4u9zUsFxp3sTgYGNViYicQih5YruT",
  "key15": "3L8hA2GTv1ZJND44Hzkwfd4V49qwEs6BiweaLsjDXhMyED1eirLhKcdHXSNeNXs6pZP83rkzUZPLdxS15t4tpVxB",
  "key16": "2xvHi89rMqRBLSTEmoZajfyrpZ5WYFYsm5fBUmVbqxaocCWFNTx3pqgHyqfu3c8bh5LokhvHRBTLRD5bGkKQQhPb",
  "key17": "yVCxmgsyWbFAy5xHCxczwgB5dfBTHSs5UjwTi6S99cPhXCqMkRBzNnRLhU7EBa7ejCaw13RbphDpRUjvj7Z3Spn",
  "key18": "iUimkTYCbNwb3gBaPys6NMWnzADHdCTHdQSKBWo8n1Q7VQcPFERxpfL6ABijnEPFsi9AetoKBCkxJVHf9TBaz7i",
  "key19": "4X5yp15dgLBCeavCVSXtDxC7hZNBASiHBVQoLZderzAiNQHzSzYtuYdzxdD8MCuaxGKtZzkBqU37qcMmDCDKXJsZ",
  "key20": "FBynpJaNH4Bz81UsNHGzbmgBFiLfwhUM3jxRfVmYKmzPL2LS8dQEhqWC3621nXCwuvfoPSo7YxJh1qQndkBtdYV",
  "key21": "2qRanrA5jqzjwd5uwF7EwXu8fJ2x8D5kGMQ6js53byKJGgq9hmKun69TTkB5cWQj9Rw8ypFgroT2V3WEueun1kRJ",
  "key22": "4sfgHpz5qny2tXWMPsj1JAaxZ9fj1mi43UPst4LVmAqNeoQkuJS4rLhe9wRsgtGZ2bBLaS1tUgpUXHEhPTBAUuGC",
  "key23": "3CgDuCS1jyxJaMWvitoHY3awEnoJHuxJXY653ARawtj9rfciTqdkjePihLcn7Hp3HYBKbNqk7R3pMAcRBQzeXpRq",
  "key24": "Q7p1S6tkK9KFmEVi3iefu3vvZWhmLGsijym9uSPJ5k2VrgVmPw1csUSt5P73cB7qo6cjg8fjJBdfvHZFh7Q87aZ",
  "key25": "s4gAc91BpX6UMxHe9D1GSmjDk1KvvAwh7hWDsH5DgDP89MFEcu9wbhwh7kKsEm68GwgMBQRXcm58AD8Z9N5aB2r",
  "key26": "2UYbjC2XyZhkZag6zShDpBGFSKXb2izojXt9Wq88RwPYSXZRPCquK1q2ufdvk2YsS9rtpA3b44e8mys2P9Tj6fAd",
  "key27": "4bVkezExg3e6eU7UnMWQh57ighHwGMiL8ZTE8ynSW6ogxCMwcwBruTdtXiAZWxHfYsbbJ4D5FNVZven1QR3rm9qP",
  "key28": "28bCAbaoQQnLTQ2FpAnkvyrFPiuhTbotG5KnsL3oxibsMgMeMnATQqieqjKvCxsABUWDy2uNCTzPgG358nVKSyMj",
  "key29": "hzQXJQsakXJGSKFu3PmjpkKHGjsJ2BKKJrYbJMMa7tBHRuPDC5NmzQjXFrvvGq4yu3SJSo4KGYZ4Ews99gzBUAB",
  "key30": "5LJ2XGRnLtkZD4McFrbDtU1nv2ueUHNf9ghZgbbEMivuWQTVQxkTMtRGYZFScXuNBxX2aKV14LA2pz9TpuKmZXfK",
  "key31": "4Qw6rBisChyCLddfFmyJcVy7T6FnKwsP2HnpmGnLGjgXXy6szgcUwikgDjfTtxJQ6TjeQcgvF4kFy347Xj91pUXg",
  "key32": "4AQGqm5iucmdB1aeVC12eJgwNsqc5wc4VPEFPU547UtaKBnkfqWG32tcQ7WFJ1evaxFZ8reiP3RABDnJchN5shdk",
  "key33": "2Qi3oN4gpGDpdoqnd6C1FqLX1Fua25MJXATvTUmjpPwUfWVPKaCE3GHj1Ghxew3Y6QDiGH2r39HmTjyov5Acqrdu",
  "key34": "2LTs2vnCUeNnzAiHALrmNhMVot6bL2vSKtcJzyYXjUXoPuoQZBJjb4X6fnTFM4qfDoRJyKcvTdWtTTLBUo7NVW7x",
  "key35": "4RCqTPSvfVvzjqKfEWT6SkrZWteSRBjvfiUwiyq5GVsWzmsXiNzYhv9YWxufjjsPBLUiTzSxchGuQwAzopaFX1Gk",
  "key36": "Yw5pWYPMjWnYWqHPdtBs3fVtejLhzNUs6m5Zy3B2mS6pkyWY8W8G4uMQNGU6JjDUXqrx4QzQgghtUZsjztej9Aw",
  "key37": "43QGZbVXUw6vJvGs2Wngy8JWaYXE8tTdLYV9d9NHJbDf89b6zci7mG3WrcwXmPk1DQpnks41M8H1cR2cvj7sV9kp",
  "key38": "56hp4kBFfZMoezzE2CbbXVLiKnkU9PaouA7tW8QdgubJzUUg7aJQ7DtkpKbGSRsYky8X4cMwUweumm6Gmkv3QNzY",
  "key39": "nYHRx8wgKZGx395GkdtvAX2t4J5Xszfgv7piG8pV2CGF18Pb2Hs9AfAcUGjv6HY2Lp5pQmHLhid9XUAj3F84sUm",
  "key40": "4YxFmfyC1pfQTd63aQZMJNZZ2GvYHaubUkfHBaNfQnWq8KCTduV9k3HEnvXVwa5K626w8m1VyzXVM28T7kxEPWKA",
  "key41": "kZc6Cp9GyjwYbUSPDpxVYEiW3ijECPH22udj4DUDe2EqH6fCsahtWvAqd6DjMhubF6mPft82vzGheQHqrTgmN8Z",
  "key42": "5U9Ahps65spfnk7c23zHHyRhi14SbVW7BaVEUVMhSWVFRuoVPJtLUmAYKJpwYShPe4Zwtszjvb31AqSWka3384NG"
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
