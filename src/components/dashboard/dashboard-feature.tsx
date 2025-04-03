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
    "bNmnFvVWwuXusiHVimEjAUbFQzCvJNMq8a79GXcmKuyDwZ86FSsacuPzD27ypcPViZzU1FEcBCESuXmGkCC84VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhKV6Yc7ueaahFdtQ7Je3qgDzyoQRgr1nEMCK4Jv9CPBYFRrVBar76oSiHroyRnT3tzM4qPJSgHiRs3fCfKU6VD",
  "key1": "3joyeFNcmGVNY6JsU7fMCj7pZs8cEjynwTNYGoBb7rdYPPhqXQY2ei1nswFB9EsKwN33VKoDfAqeayvVWfsfCAvZ",
  "key2": "2CWYcMbWDdaq1ax6AtYPhYuFMYRQ2JTjDQGnHDXs9xQZMVNYVDamj9UT4zun2SCPoCcchXCcRzzuEJXxYgtYuCqf",
  "key3": "44xJbetEJzghF9AdHxGTzzCH25fPcYDhtA74Xqox93mn5qTaXApPFV9fEVJspKxWR8ePGuajsixsjZPf6HHdkhi",
  "key4": "5KYbeQWcHVWiyjtti3sEEvjaSoH3mNm1HYfanwZjDCZ922n54czKFBxnNaJEvjpzCCWPgiUzWVjKpuyKMj3k3E8u",
  "key5": "Gwf9fssZAaxSNiWRiX8MTjcEHPY4ZPJuW5YVq36Jx8nYM6CwLZZPbGQB3FJbweZcUTWowrphmEq794wTc4Yy8dQ",
  "key6": "4bKy2zSi352XZPd4rUjakavWjwgktyWUbgWDQwo48oVAgSaPHDWkvZaLAAGKqDjEaaC5cDqcB6e6kD2kVDhcFbCS",
  "key7": "5a4kj4XKXFzUnc846os2h7njpXc2BciEQRz3GFMRSLhxdT1dowpcXR19E47WSsj62qznKDeSeSuLftb8yi6e75qW",
  "key8": "2rhgXMA5jYahGivRLcAK4i83vq2AybtWuiKQZnvUSVTKzb554Xp2VtXvit4SKgDHyJJ5GcQTk7rYpRYXVUQL4d7B",
  "key9": "3ejq3GoDsr2dPxSMxtJRjrRKpvU3vNoRUBQfnG9DsVjPdhVzQZPK7oS85zC7kn2Z8eXgNK6rxEy2PdLTN8MA983E",
  "key10": "21Ci2TjvtwKgqEU6nTC1redWMcEgEwxq8agHow42SXm1gd8Ha9QQ5Rz7yJzwMU9WQrNcJmgjUCuuXnxoX5DhRi4E",
  "key11": "35X4UN5wzAnsmy5iNTSEvTvJY1baSJ6GXqsNNFraLjk7GBvJY7xiaPRkqJKnxa7uEykAzWeVVyu4aGvPtyGZeiWa",
  "key12": "37wubR7eSZ8ZwwuBFfZVyGgXEmBiDDnHcoizwxce4VcjGgaR7Q2FLNGSYURYSPVbX2h7QaoAFh7TxoemoRJUw3y3",
  "key13": "4WVgSm7v3Yikg9ThwBqBo1YApNfamFynePgoRUHZLSAAXZj8By19pcVGcWoJs4TTbYFAo7Kn7Y84mdhPKeEzmrfy",
  "key14": "3GPmygKUUE761csWvmAyt8bEd8q2rDE62Zo1bRVHThPwEhTmznpPuxCjgKM8LRKJ37UQammc4PKjsuSfWrFcb4ka",
  "key15": "jwWP6xpTzNoHZnbs5h9HePUcmXnxqaK8NHnxmiw1EEczSJpK4bVWziu4KA6cNEjGUhvqbmFprXggh9iEUgzWLTH",
  "key16": "5nkBDCTxKMH7pY7KH1Fd5x9nfLNF8QKKqtoCDqUbgb5UNSvMkZuvQTq73j1RWU3BzpXLr1NqdXS9pX6s3NTqrEW",
  "key17": "YXhUj58vJeSruS9rBNcLMroGY5xvmV2gaJxyFD2BYApNum9EpE8BA38e6wcQzZcsJ3p949uRoiWQmHjQcLTEP6D",
  "key18": "5mxsQ1rHDhT5iwieaqz4HLtWeZUABqBwkkCYPiHnArt2zvu6ik1UrESvkzxKL9mr7PWby36S2eNzuQEVPztm1Pdr",
  "key19": "2A6iuJdotJh9sGN8HcdMzqC92ZxC2GD9RHorbdCcfvD9gppG6cZEFwN5y26kzMWkgNFdv7imaPzhaJfjUA8uJp7P",
  "key20": "58juTqMPJU9y6L9pQmB1PCCLqXfmdLvcJjbLnKVsndqnvmPHkMHorv3dX8AMYAfaJ9PHg1XoADUAh1fbvjUDC5mj",
  "key21": "wkah6yoiUJPanFu46kifQjowEHSqfc42P3F8M5ZMzTAu8owR8V4rEsqMBFSVtZksJm3ybK3EqzakLNpfMPYA8x2",
  "key22": "2o5MwRd2BeXK6ycWVXZB7ewygZK2dELG7iFeABUQjLW6FrPRvSacEvKiJSdWdDY6LF883VBx7Q1hr63g1LBaTTQm",
  "key23": "4NXF2oB6mjTiK9qV1bhmx3rKMSufKzyRArQjVBtbDBS9ErREqUNNj6UDedQMbJ4axzF78zxzb8Ka15rXofpw2Kto",
  "key24": "2GvmTWjL4k3FdwMoYPJAx6DxMRhvBLSR4PD4LGqUegKKwZasuZAazx1FPrVCzm6x6i64fnsSKatyCvFJzWVri69d",
  "key25": "4uo8oxfENtrUXX4szZBa1Gt4p3ubYmCsyQHmfPfLnqTPsLxDYp8H63SKaVdeiwqC1Y938rH56foRZzckhDqWXYdz",
  "key26": "ezbtfZ5ZQKRGxzzMV2UrNZQhW2Bx83VbLdsTFPJYd5CTkTRpBbNPFFXApenUFUctg9upUvw14Vi5p977GPvrLEZ",
  "key27": "bp441QeFcCiRnFjczrtpGFSLptAV4vyQjzu42nZiWdTS5BQoRFDkgooaUhLrtPtzhwKWuK5HGrkbgRrmkS72ZFw",
  "key28": "5tm7LKhV92qEgR3TjiFuteMKhJKR3GzJjnKaMQiqQTda2aS9wcy4zAsgNp8c5eP7cFiuYPq2o55vwGckCCNq5wVg",
  "key29": "2rebC3PLdyhueD6q8kwPhCB17W52ezHRaM4WczX1CzeVC78W2mJKkee1pyxT5oMbW67dy54JfotPEs4z5sJBnZ6a",
  "key30": "4ayhyaYn2p56Lna1d42QBZs4VHJDSmbkzVaru8oN8JjjLLmUEk13Nhcntxeg6Bk2Jjz9Vq8KyoruiuHFQ1ajfUHx",
  "key31": "89KjePw6GkeGYCL7yPJM5E49eL8K8dF2X74AatfB2xzwPUUGqRTiqAk2rots83mdh1HWUMxKWj2hG3UFfbhxjM1"
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
