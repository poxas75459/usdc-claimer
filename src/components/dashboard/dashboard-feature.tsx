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
    "5QWRBF9KBVK3Zo3FmVS1HDpwb49YHK4v4w1sCv3LZ3TxM41ehWoF39fN6LbXsQqXDoCWYr8gUGtRy4RuLzNhn45Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W9QqnN9u4RcZxDeWELz6ZvLvEwLFvM4zUFkTs2wJjmSqhWB3j4w198yAc2jAxRXmdsrRDyVSCw45w5cMZEqRCHR",
  "key1": "5n6YxAqHvZqHqQ9LVnZXYYp8hSmFnXLAeatx6Aonj3mMaH6wZJPvUJHKhYGWc285QV9o6VG1kRDJQpH3WA5rSLr8",
  "key2": "31os9wYt95p8sq6jXAYggnY2rhxyodKLgtc9csVBK7mGh1Ps6ogx9tgXauPXLSKsG7TTYbny28RUwCkao8yxuLiJ",
  "key3": "35632BgSqJxu2qSDjCfQtyhQWEcKbcpP3jNJrZNcVGhjfSP3SvY2ZC69kqrMSndrPywMQAqMtxmx9Kajnsa8kvFj",
  "key4": "xz54UqhFNieNkAWLqSR3uvvBL6LSQNr8VeNtVnG5aARgcoxtoxPLXGjokKMjtG4CePfwbY8UpeZ1R36uPVpTdcX",
  "key5": "VZxc4JYRRCfiUdA7jABCC5w3iJnMwmoFDEHJjDjRDzGWKqGe4Sa5AU26c3pPmkHJg4LG3TR1RLgwXzN35Mw6qht",
  "key6": "4uWijUz9XHgNDeVmQ1mcSYd1ZT128qYwtK7GnS8pXpYmH4kytL88J6htqL7THRCNKyugSPBRNcCaAC5kjxPi8yaW",
  "key7": "2WXfzpKArSVQp5ZK1uToFC3zK3pK49gnJs8GEXGbVoF52NXFfzHnhy2up2gdwcd3otS6oTWdmBJ8AqAnE1EGqQpu",
  "key8": "4SXRe1QZgQ4ShoCVzromcPTR8YqUiYpYyxqovCqowiWp3pcLFT4wZ4SMVBwHiRpqNFUrrCDtZbLWQhPQAHLWY4yT",
  "key9": "36MjhdCuaFT8k8yS19xQ4saJ6Ava8fh5HgQQz7LkuPoaTpfitfojdM2EyvNF1eFquW8yMkCSGZXKdsGWYi8WAzJf",
  "key10": "ayxjdrcK6pMgHDVMbHNWDmEZUqQCyAr22tsx4cZNTLzqwyr3DGmKPBzQFTGwxGkvDR474ifHNUDwNEy7HiUPeQa",
  "key11": "64Nkh5Wo32R12XUHsgTTwRrBxhbuHNAEASUzC2S4Rpbd1H3CM78VdsXDSJvoyVpFEESJ3NSeZPUQ1XTSSCM7wuC7",
  "key12": "3hm54sGJEhg1yVwV7QqqpXRAquLMcPeLvyTidbmj2JxBHdQktXXkFtoGRhyHzbFw1nkLZVefq8GM2q7XNrUecw4t",
  "key13": "M5jTNZFTdc7uPFD5y1efQXrTx31Qgw3LQfswtf6TWinhEUD3AUMaAcfLxkt34Ao9iqpRMiTt4uJy5wamQ5pjvB7",
  "key14": "V3SFPpSsc8x2RLppvGJ6ixSEB217gouNuGKeKxUkyVZoA3PHds1xrodj4QieuKbWFbLapgcLutLjaTtNYNFqFfL",
  "key15": "2xtixX9VAXyFj7zuMdn6ZBNSCR4Sa8W8HDkTrJMW1DGmxfjbj8PwQSgG4vmW24veMmCfN89K8ZfxzC48k2Uri8MK",
  "key16": "7LP8Af9AeRjhD9XccMND3tYJR94nCLryuUihMDjg7QzXmLjKDjGnbn7exb5iWg76XUmB6VxhQVqMt3MUzBXnnng",
  "key17": "66yqwNpBCQyfTDKuYUff8sCxtkBDViakQc9aLgaeifXLfnbzmX3ENXzkFzFLWuaEyHe9nmtdnwsTQSpUPC2kNeYn",
  "key18": "2oUJC5U9MchbCs3TcshW46MUS7JekuxT84MHBR7PsB1gPAQC9kbqofznQeAzQ86ryfYJvdmnMuZfnjA8zcW4Y37a",
  "key19": "4XzoisTL8VoCtPiYobqW5REZwGRPy7wxnYiUyUktgw8q5T1dNFZkGvALL7BGTHW7o9X9KQSzD9HTZqcwhq2bxNCL",
  "key20": "4dfmKz2aocGcqkVKDwGXRN9joknCccyZPUfRxjjHXXcAQNezaYZpq1YUBZEHKBrapDZnGMBt3qkvUwJFf1VctXZv",
  "key21": "4N6w9YGGbgRBs5F2TPA5ZPX9qJws3bFt4PGG26oFKHtMAcpohDt6SNAKZbeGya5xtDuNdReeacPhxc3GUscRzg5h",
  "key22": "4n7mK59mSgLmt4nVuXGjSRi5g2aLwQrCfDF4L74DGZpz8reLjgHJzwXQ8FYDk6VvfZQqBrges6WVgHoY8sWVPPtt",
  "key23": "4Rv8Yaytg3QkDGDGXZCmSnkfAutfm9UmK3ApovTQyDV6UNSepjL1EHuEXNb4A2u8ETbmgTMLv3a1txUg57P7LkKz",
  "key24": "CoW48iK3bvZtGgZUGnXgXmPBgxc77mD6djz4d5XiKD5YRs4seSVFRu3FGofrcYRrS9nzvEkLiBecRfpR2wjseYW",
  "key25": "3BuP4moSYdPwZDbGTbqYf4Kj4nHpgfeX16GztKD9YFPa7JhC5Z8aM3No1iPs1zuXzP58wynbut16WDGSkRhBvzcb",
  "key26": "5hkyC7r9Ea58yQnAaGzs51JNiaJGDHd3DY4vRyGtutMkXNuCymf66T6KPcFLpiQLJKeW8FpNjAiYsQr1PgJ77So",
  "key27": "4EWUc78C7Tmwip5DfcLPmZ32cSxhmViHhgjkwiFdVKmWMxjqYCACTZHgPZgEhWqGTGfd9QZj2yVJCu2PvBVauswU"
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
