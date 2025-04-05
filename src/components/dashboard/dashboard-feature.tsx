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
    "3jY8K2DaJDrdv9vN3wV8t1VZWYhse4HhaEMfxJqXFDPuNni1UzCCWA5tUU5tuhbQCXmW78zeigfb8rvtY8sQcP3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65tmny8hHDiCF6QVGp7EMiY1YuP1nb39wZ7Cx4jeB7skuXeGiuDuvANEi85Y8Lvi7jbR7ebYcdgg8J3uMh8YSHsq",
  "key1": "5sSNtFpdgquTFjQWZ5S4vSbmt2q2MoGjwGrkRkTsJdFgiuuFHhk5UDxyx97ppoMaqw78RBxBEFiKMz8Z8qqwpsds",
  "key2": "78u7QPsEqgrBx3yfpukv89BJCSaPfjXqSJNjXVp9q6TTVmk3AN2SRhVrp4Em2jK995Da4u2YSXnm3izD8ZceUJ8",
  "key3": "5h5pPbyShPCeL1WhfoFQG3fH2p8oHEfCLcdtC5DGpAEp97emq6B2ctDpDKfaCnpun7pZM7nFnGoALZ8ccpPfGPu6",
  "key4": "43b2qK64MiViBFpy7mUW2swfNpiDcwx74rqSWAPBAoHTWJD2QdPYswqYMukHHixFNLRaEL6NxmqczAtm7NN9qF94",
  "key5": "5uWsPVDSzrHqV2JsUTPUP37ojU4ox91jT9J6vFh53V5Xog8odJN499kWXZGw1QPgRMPW9yyjNpiFsCjC2tLFKjpy",
  "key6": "5fwdKvgr5TKTaCSzF7S8XRKk2Q8NMDSKLtjLQ6wKE9rUqGvPFXEoh64KGwBf2FKnFFNwda172N17NB3AMenoZzm3",
  "key7": "3KgxkTr4kYhMkk8b9QYjZiDz1B95mKLj9tnwAcZAap2D1CjRhYVs7H6sZdf1Z6QtVpJR9s4iduFycYMVZvGckAs7",
  "key8": "38QMBbxNnhnQgdoDH7QgPckL9yKJ1C4oXQvCbh3UMXf3wQioNEcw6tZ7YWhWmdM514ZiS68HNpGxkwpS6edNpaJ",
  "key9": "3DndJMg9wWcGiaHhRfRiZgyoXP8XqoDHonCx9Fc4Aau86yct2W3DCAqhjmuM5eW9YXhTDz81Unhf7KAcLvdhzKuv",
  "key10": "3kwR8v2B7TwjSGvV7FNt2Nmw4thSri8AsrV7FfKjA7T9LqxkmwmZm93fh9vSN9ip1WDpLqcGcq1T4iZvrs7HNdqR",
  "key11": "2dG8KT297mgJKz9Zj3UHzVpkJiXZE7GW1PZtY4mNTLZ3KycdLUySmdFMBpuCusaLscVcnbNW81UjTtQgNMByB2De",
  "key12": "5XX1RfoBykJBQ13DGJH8rGrQzkP2hMt31Vybb3vyY6gYYbYK79pdkGHkmMdvaJm1QzK2ufKtDAmd15zD4BUzM4DF",
  "key13": "5XFym4K3EA88GnwcVyLG4ntbSmrLGWbjyB6sHx88S1TdmiSihvXsrVynV1w5Mwq9G6MiNYT5Sep7gVVN2DwNwk9L",
  "key14": "2oJAQJQ52SneULuKyw5KF2WgytfnLTvJpUTLunBX7QAW1np5TCCgxW3c1WERVFSf4nWavaP1WeBPMtcrWo3uXspS",
  "key15": "3TvYfRrdurg2ezaHfeGhRwG1rfvkk66bQFuggST9tsSfyQdygrdUAZj4xb3wVEFxvzvEtYmXArXHJpE3hXTCj8VB",
  "key16": "5YS1rQrjVjpfCeynuJ8hoBZtsTEapzrnXt9F7Njxt8stjKnbnofHcfBhzTUVN7rQKccUC2og1jBPmh5sA8mVPEJn",
  "key17": "3H1W5dy89AUyNXdh4YXzKaZVebfTMry9F2FCr1cPbQcYcywrS5U2WCgdCfZ98tHWpuo93EzdeGtTp2w9sZ9FBjCQ",
  "key18": "3MGENXTZ5ZMek6miMF8mM3pU8bTBoMLwma373HpcxRuguvzqR6s3utG8UYG6E5pzfL5L5n7aWPdSKq8HTWk3SF18",
  "key19": "2Nri7UzhuTMHVUBEkkrAZcMpeZPuSdPmewERsTKzrAv3dYo9fDSJTv1iWH5nnkuBC88pUGYAQ4rGzS27juXTUbu6",
  "key20": "ZKrqBKAT3SbZjmenJsu5hQcSap4e8LuLmWhTx1hS6MkZuCD7VXrUC2JWYqb8fshQYAPE84kuUedf12ZeMHy9g2x",
  "key21": "3snfr3jPTB8u8nwevJJFko6drfcNsN3hiFpZ7AVexSf7efjJzBCqBFNgKPFQ4vRczPB7Kofpu2Lbzxv8Uo3ocdwE",
  "key22": "T9ixHZebAfP9DjGxfQKjQh6JFzJ8BrYTknJn4kmU4ikSyQHrkWfqwyT4GXm3XGoDqR9ZeN2ywfCvXH18uWFJF1H",
  "key23": "4B5h373AoPoVY4kQDWdoywPXqDZLg9E4wxQT3CLGgG5PbV7ZJh6mdb2bEmMdhiLTLp7YnPKg8K3uyrTY6fBAMHGG",
  "key24": "5uHttxGHGio9ZxVjxjHNs2TKeyTkwd3CKEAKmefTvTbgNuCNDWkMePnb2x1dNEPQWA5LmRt1aCQnyLDZSFp29o8F",
  "key25": "61nBsx26KMg2rPLf2uUXttfmabCAke1amjKtvboUKpLWyaJY7MSykJ3pq591CA9BqVFY8brYi6JPVCZpmYNkpGh5",
  "key26": "35i1VEmgRUNte6Nr3joaJj1VDhRnZm8QNf2EcA3PxH4nyBgr7K99kzSyiMZAwZru874n4iFB8Jp82skATRSb2pf1",
  "key27": "2HdAVM99bBP91DPKHp5vNQQXbYtQNURdSZroxfHRCZxnCSnRQexuRYdH8Y9af6936NK2PWJtwHWLzn1DGPYWfaz7",
  "key28": "2ygmFjoraSNUhHsM3koHacscbCkkeT21mWVicM6WCfURB51XSNp9XxNFw5GAqCDpVT35kccuVqiqX3qgrJti2boh",
  "key29": "3cFTTg1gUcBSd8eCCVmSsXFgoudjMwYtJF8ffA5yW3a5mLHdhwPDnwA9eR5jESbf3wcyeirAc1QdgN1cESENj8B7",
  "key30": "4jBNqeWnuVuwxzB295e2i3E1W9uKeiDgM9Y2fK5e1LALpZa1UVr3uMhG7JrxW5uuzYnKRnenpymFuK81ZRXGfN1Z",
  "key31": "cagUxj2uY4mF18kRvU6FBJaBzPVY16WjckwnaTnEHwdaGi5k7H3oBTvZ6w2eiQjDdoQtWhX96kuFBUiw5PoeqUY",
  "key32": "3xsjLPJn2nXKkrndVFJPU2tsQ5SogP916j4eKXmTa3CikiwZn2zjzTBSUngS8vCH1V2Ln8X1m4b8rnNMnGMKAWfD",
  "key33": "5qMKtksXU2EFU4E1GijF9BRRx4xXudpkeRfUBKFyUTCV6mBSRrRbqtVgZ7tRrZcFcES693JsP5v4t4H3DCee7tJB"
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
