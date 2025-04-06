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
    "2iybiPNoPbJig9Yu1exe5Hxa5RaXkxFzPVEhEvhv2FFNndHiuVRed7KmiMEGKW2AV5EmUSMEPox9ZqipstKvDEMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HMW91sieejtPz5TPRSJyfurpB8SDdFbRdQhqPy6KA5yGXBtBaqfwdnmdHXBTpPj9PjU2y5ovgjRN7J79Zbv4Qva",
  "key1": "oTagwnkhEYdb3amfZwwTsNAfaXXLe9pwtnsn5ti8BBNXRRnRrCfKsTsuk9AzvLQenJo6VHUpTBgxZeU9XcRRvxD",
  "key2": "3KA6apaHKo9QUZ9Hq1sYGSAUwQvRnBk6rQnDbwW5jLsbRiy4C2okqU6n3Rz4C3p1EZjpyD77UNhrKtbMVecUUkjr",
  "key3": "2EK1vqtUi8ELxKHSNrHAREVXxzcy24CPd9igjjGgwggwbSqsRNhzJcGDE1LdH465x3CdECL56JQUuahgyoEZWeD4",
  "key4": "4T7r5c5ew41bAiP84LsL7UsDD9B5mxN7SNeyziZEd5mqXvtkkoM746HVLcDMnjKw9fcW5gxuXjEBGStztbZS2EzN",
  "key5": "5WvNduBHHVw47hiKKWjXjAWwkfCCnZu81YzLYjjpG7kctGxDcKKjYrSjxYW8QkHa8a4SpQdZDPpzHcF7JPSHoUr9",
  "key6": "5JFttXgc2TStoXBXtgyeZ4KHQX89shLYy4kHWmkHi9QfRYtPEC7QWceqd279nNUrA3m8mTgTEfagHXYxmb2BC5mE",
  "key7": "3WT4p4h4YrRyL1UWE2DzdR9Z8kM77CXgH2Gj18tssYASgiVELeGbkTxV1rU64PzVVGKC1hW1xhh6TH4p42XKqanb",
  "key8": "3eQf2BFLjsRXXLsHJBmZnQFKaRGm35cxuFehTV2vAuuaxsCg3hanFiuHNDUcizL5YryjF1hHYcXXMvynhR6gomVt",
  "key9": "368CLBB9EQBv1zPEUBiu1dWxdSh1Ma3ZiqF4tanMdEP43bCyeBVKrX9C4EfahzdHNhfSFZTKBngDCU6zg45XPCRy",
  "key10": "4pNNvXczxpi6pcTtw1CpZVAEZPrNBUqKq2awtS98JRMAoCnbW1tkpMhtdYgqNsASA5pZxzsaLj4HNRr4RCGZhZu2",
  "key11": "L2ybRS1XYT8C3cRw7Y3z3oiwbNNFb5jkRsQJh8A21WfY8U9hTYz4EyFk3o1UiNr4DeNHQAVFJUEAkKH9oQfyUmJ",
  "key12": "66s3BQhMAYRwo3utmZiALBTNdxKF2kYQkKiLh6jcV8sKmn6b7hmU4VGvQvzacekrWS97aZaSr7zXRXKPxv2zDnFm",
  "key13": "3cZAGwvfVH6NCY5qK3vbYBqCwr4ZMVsurpG5vw8bPC9FsHLVDGkohR2zcdRUeu7vsTfzzerDaQwsYkzH3i6hLSit",
  "key14": "ME4Zut9ntFthA64MYcUmuadx83rTSfe5ei3aDuCtNB9QAxTkC9iKtHi2eQbrPu88Kb9ctfBTNQZfjsTFpQf6Cg6",
  "key15": "5YZcwHzGyCneB3ZQGug6j2z1avx9tEQPLoo6semwzyHACA6MzVDMPqEqHwzneiPaBjtfuSB2J2okD6h6GUWJ9Sch",
  "key16": "EKL5eHmacZPq8p5gEK2E1Qo8nFqNVQUQM54rPc52dXYwP8aVDcGBDNNh29xgpAxhzAWRu4RC61citATKmbQbWj7",
  "key17": "62vTcRP488YFHDGRQLovhJFUg45gfe5TEMKuyV9r9gzTo2pstFaXknHgcwTDHj5hGCqEQ1bxUwP9NS21RQWnc3rc",
  "key18": "4mkJPFAGRdBrzMeRne6qz4y11u1ytJmFTCaa4iMRjuouE8agNFUXzuaY8nyWnemaEeG4LteLngLJyQ3Fmzztv1wM",
  "key19": "2Z9SmNBGzYMbhnnqrHjazCTbBFCZB1SvYWvwM6NG9VZ2WzQWKSKF5Ax6yWhkT8b6qMyJeWYRKZHW6uq1JddNhV8k",
  "key20": "5ykoHSXDchksmWNzb7Y5v8DoQMB3diBfk2zU6voBcorf4s9vvk2xncpqRaazB4cTttaYrSVJL8rqxvNgdErSynza",
  "key21": "2o1XtVGUiHSEiya4YCLuFoo38L1rsYNMiTKKQjweH27t7wKbcF6xL1n5zw5BFH9JjT9ydVaZGb4RFqhJc2vxXWVo",
  "key22": "24AJhNsD8hx6m6P8vXBHCK4JsobyZYt5eFw4ykGDstURixKHQGU5hXSntykdNLGSngRGkZtJRgeGRsDurDmgid2P",
  "key23": "Ay2dJdwEGdEpsRm8ovD9jvVr3MbCfNsANuFw3RgK5rfeXDehTqSEg5Lxfu9dtF55CUcShqgMhPhdLgS9GdrPWU7",
  "key24": "5PZEZdinDd5wDbTQEE6jdWmJ6nCwZ95VW9Q3YZLox8xLcX8Ui3xkRstV42VNSVQit6xwATRLHNdbVL3V8NS1xPHf",
  "key25": "2fPFovJwkqkwPV7HuzSFaoRaR3C5SFHG1PZ4JLhJBE1Q5wWPqjJtEtuQhArYe9DBnBQGaJvYoP87KT6TgwojHTHz",
  "key26": "3RPtfKvrJARWfr5ovZszwtUUQ871swv4mfXzrhyWd63ChMsBHQ3RhW6jzvovhS715awu4A6Cd8Ay6kakGJVVaCru",
  "key27": "2BzGsv8gKwQg7u6K6b8pS4R7eKtYxUcR41c6Yxenk9qTH7mwATGxEeze7KQ4pHy6NWkG8ybe21XDhzwG4nYMei4g",
  "key28": "5B4m8kNXLftvr9JUyGoRFuNgmFsZRuxPL8Lco8pPEgmie5BcLM25ZCTWSGZQq78HXsmKbVhJpRp5iixGpGxdjQeN",
  "key29": "9oUmQr29GLLXzuj9MrbDc7Ms5L8fK6DHb3r4UocbpSjqNwuwFzf88RcMHJiVX9a6ZaKm5jPP4oigJygTnkBQNQz",
  "key30": "3nLYtYy85RGxRy2pKp1TLTWhREF5ZNgeWZbEDnYDjEaQM3QuR3BsGLmD2NN8uF5RFDikLPkmkJEv7G8SJvFU4fz6"
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
