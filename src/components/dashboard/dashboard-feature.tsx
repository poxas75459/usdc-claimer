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
    "3xfbNBZCqtXSUDUR4mciuHjXTdaS7LzuPQwkiBnYa2WUB9qbyBotBNKJ4YdzcfUZ4pqvz8SqhvGA4JBewvcyNPkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2EGanQ4owsdtZvgJdetDYdYEkzvfmND9KPeruXDygp1g2Cv92dJwyHHaCy8kuLniZxRfee761BVWwtxhc1MxY7",
  "key1": "2hudgcUyAvvqPn12APT4zRMifDfkJq79Y6epyhukW5bQ8VNhMjXstgofaeYUUSyHrsehyMyyCRapDiy6aAuuR5tk",
  "key2": "4BSuht9gmWwVqEiK8VdUxeGEdTULNEBgKmX41dYaFTkZg4ihoHmLLnhYNzAdPL9EQLSZFf6undoYLjjHHMgj8Ggu",
  "key3": "c6d21eMo3DmAAFcXaXKvJQ53BzhK7goX7souLxGFXjz41RyfVGfv5TR39H7kfgF5kaF8wfaYb1YWuk3qfEpRiCB",
  "key4": "52kXycptWGEvRfahn8yVWYTTCv88XurxBmDXjekFTiCoziJByhXyUu6SX2pNcRBCtLv6EmmaBGvxRTMdD7CLvAtd",
  "key5": "5qdjG5c3SRvJ117zzdYZoRezo54jhV1UfDefgnYuApGBh2H2PMsk8awLaXVdEzTAynKdVZXXED3cCZFib4xpVGWZ",
  "key6": "4XnaqAzmSbuF6NWCMbzKk6N1JN1mdzXjk5hR5fCCPK57u4pFtBiwaVNvXLTEvg5oBCiuFfw81ZvCEb2rQsPHQNJ4",
  "key7": "3nE5TNsKxwki9zQX8vmBrfwRoxL2qaPArDURUcRZoqgReMz5XHLvkpz4AADVvWQ4jZ4skjy8rN1dstAD8jDBURRX",
  "key8": "3CnjNKj6Zw1Z1LWgo8fVVvLfJJCoMDmxrAkpNBFmEbSdZQpj8sWob4Q96gm4rNDTjk6FzkfboVE3yPnvBpBbsTpk",
  "key9": "2LdW8J9vgv3jFA4KH5EhhfJxoQ72tJo7GnpDuTY6gxD5ES4m4gu1m76Jaxgd7pYBsp1b4cmJdhNBzX4Jbn65ueih",
  "key10": "5mkPtNxcXJf2z7uxh6D3WJFD6Je6862eX7Ha42HChEYfBficNPbifB2VKUyiVWZbzHrbZB4k41QhiV9FTzFFE6Cq",
  "key11": "3VpemQVgkmk6qBZBMjBkPHwZUawg2P9ZS6MjheAfojLHZg4VKgRrhVjdbfoGoDHaodvyfphtp6h9bS1kB27gRn4y",
  "key12": "2gm6tcvVDPo6sJ6n8gTRe4QzVxHmUdn1DET18Gnzrtm3J1b8YSamjLCgrjGur5c43hVUGY3Hq6N2RCG6BrgtMwRB",
  "key13": "2yrB4Jap4krLRVhwEEmdRWRxZP1D5ikWTk4BzQvai39RxV5RjMj2NtJdPJFQ2YJmfbWzeb3ok9JZezjspcbL4c5B",
  "key14": "3u6YjKDqyXS9ZR7tmtPZVjDiADofuNUWBxFf1WiAEDE98Crv7xoR19ZHsd3hVWbEd7QDVR5zTiEotJG1xKtbCKZa",
  "key15": "29Ym9p4KBGFR1pnJbdYai43CLStcMLitJ8HEg9CnbzCSi4RjyR6YL3tNQPa847iyRrTKudwJnriZukzwphKvLqW2",
  "key16": "51vXwA8ZSW9EPLJoTEtzp97ywByDyhXFEtHTooKmtessJPrWxwz8WyA58csPnPfGBKdtqPq32RsrWx6dvjA5wj2q",
  "key17": "g1EB5ZwJfQCRW8Vj2CXVJFDGrD5C3VusrrrsSCiNfk5qYQCo5RoJNR6udKAggirMkS5sxhi1tguAJ3sUyGzLUDY",
  "key18": "AXLDq44QoTJDpPocji6sXDCoZ3PUYtfqukc155QdRiVPcnh56duoB9uXAiwQzXxMUJbgxM5Fs9hKMieWTfSt9Xs",
  "key19": "2z18Kwdw3K8BWs1RK4HqKGqnR1uoPLjo5VT1BNnrVysR6kKKP39UpH7ovgeGiJatMidzfqBi2AzUBLk6ddamrdGk",
  "key20": "3Yc7s5qoY8y6YjSCviMsNF6JfyGayUuyvym3wE3Ppds6dDTygJpb2wW44To4cm21mPdvb9nFdRnAnxEscSsXPTc4",
  "key21": "CqFTPTvDLjtowUXRCWi3ZThz7HhCRzLtdcE9Wm5EwVUhgUgkbpnrZtDFeEbsW5iXtXT3ExtSpRJECiEW3eJErab",
  "key22": "5SWCLry8SZf4K7LcSFVzPQ3a6UrpRYq7NcdRU1HTVAMAeF396DNhQC9dByFsVoA4u2oeQ7ig8KYCsAtAdMzgLMu4",
  "key23": "3LowuuPLkbocKv4Fbbyt7wuYdaw4T51CVXSPA3yHV69afc4egMFDWsWU5Cskhu84EjAzZiGukTkjKxJ4avHpKk1G",
  "key24": "3pnUYxfj1QHmKYwESEiTJDr3E31SHz4jXwuMaEsQFwkEJppUXB5rPJhpvsDJjTUoMRMWBtA682BtaAabaMJo8mdr",
  "key25": "CK3poayDJX9v7avrBSaH1EnR7dRotscAeYptFzPXQYTz7unxujCY1iSwpgReSV1PTZK5bwP47YuRKcTic9AUi9j",
  "key26": "2TWFrkmo4XC7CHuF3AJaavXrhD9YP9JmsszVH9fEWh87QYGpQdhx8y65FffSsYjJGEPqnY9xLMLWztzR1TmvU22i",
  "key27": "2xHb9WYfkhtrtf7o57XcihJHZVQWxkEYEk1iapfErfvmihWvigMrKqVNcWRRWVqK7cUjz28oN7ZYQABYpanbh8r5",
  "key28": "27LCkmbvwhBaKfytCf3U9HBFBgH3ACWz2xUf9npjFnG7jPoRMEmGm3gT6SnM5r7FKcjXqpuYYJea6S5Sqvax2aCb",
  "key29": "2HH5RGofccN9J8tnKfJAZfhjskUT4nE8sMCUW4DEzjPUiGeD5kceYuFBYX6BsdpYQrUphRU1m3r75MM3pUxzJRyH",
  "key30": "4siYWmke1MwHB9VuK9SNpNREeoYo2CWPjBycQb3De6abt9tYNibQdv9dfstJy7m6t47JyqhdJrNYMza4YeTE8UBB",
  "key31": "49xiAJtUWUripnMUmGVPA5BjnMLrTcnUktp8owuJvVRZ1HENPtVqm8GvWaPsdRsbprxRBh7sMdM15AzQ8VxsehQs",
  "key32": "5tgmR2EpX4WoRoBmqQLBtrJgYi8WCLw35u4gfwAbY1rDEJBhNHBx6PRBQRCXbHnYnkDkh7uKhkPt6nopqpRYqet",
  "key33": "5DFHChHCC4PQjngzKrN3MrSmyP6acH5EbXfrwFw1dLdKeY9Kw8TGPfT5wsVxMkc8PuaXNsYefpYuzijiGdvGCkeE"
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
