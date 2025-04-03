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
    "3BVDj5vxrNRttY3ocAky43ppDnGVResNGkrXMPH2jDMCvCaUDJJtCUzVg1StUrRo91mWARSycVNBcnuJtrw5NsL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X3kgZASbB1ngxPGVKYaY3wf77R5RUDjFJzajg5kerexgap69SCkJhnY4dSvZBtcuiKmdJDTye1Ltcr7HbD16VR7",
  "key1": "4wuHMrYyTrwTKcRZqN8AxrS4uFY5AADxjTFYftsZrLB2V9RLPiEFXZYKUaTujiANZGkE618AtjqTfgnruMLF97te",
  "key2": "5Wne4XanfFD9pMQ56bjzGhWLUvTSBCULDwjvbz1KgDMeu64uR4cfvE1fezVKV3vXmPjfLZrr78mq7xEQH3wxpWfd",
  "key3": "2u6mAucFz6JkatYUpRzb4CoV7MzJaSZ2VX1uWRGUJ5E3KFVCG4GXb92fL46xnuuaFArFCaT9ZrKHf1tBmpfzd3kT",
  "key4": "LPnj7GDBSWHNBY5m6McuFwJSgrM2E7jnz14wmRNqmVBmjomMWvtkLxxKC8uMEDhaaVGVYrq8vvbSuDqnKm4xZNV",
  "key5": "3nCRQYd8L3pJz5CRfjaVjAhJD7WuoviYdP3ffAJJbEXNLyi5z6j3TrryDTyRNuzPavLfbUAZ63TNHtD96Y4ZANrU",
  "key6": "274hrrcJ5zTyuGQutV7TKLfBPqTyReKje28YdQRnUNAnTCtHEMoFBysg2uP5pXUpHsPvvP8byJvKuANuj8uHVdR4",
  "key7": "5hCaxagKkHBU7YeHVJds3GkW7dMAZSrUJ1jd1YofRizvVX4eE7kjmcqLMHEinsZK6iTyE2jvEaA5fSgddiuYJcEF",
  "key8": "LeVch2CZuCpF1UF3E6MSkAeMyM8uixwjYYZZ38sgE6SVw32DSk63AcRXCDAz4NjFvH2Rfp5j22H7fRMGZ9KNW3D",
  "key9": "p6FxqsK2HLKciCGHj7Vs6KAD4K4f8TVfW8JVC2N56tCD7v2ZYvYn31jDs18hFSiYvU11MwBtTNvUJSKMv8AfRNA",
  "key10": "p3wd8VKJsMG9wrdcEZUAeshjAAYJpHrLjFLPsPEPDG8RCHyMCvhYY93dxaNnZFiDBNVCM5jGZjn7s8UbimQ7p6L",
  "key11": "2S4vVkCVbzFUZuDpdQu46wHByJehErC3VZSF9F2uPKdcbjBMufVKzVDXYAwFsLkoZTEorzieHCaHM52XrZ1JMx8C",
  "key12": "5bThZ3XguoeKqRyWwJXpzkJfkuKJqRj9SHycNnxL9kNsCPY4B3V7Yv7pYJ1ggKrnebBiSyP5zC1SzugcSN7FzURR",
  "key13": "8nsuQ3npNXt5ydyxuc8JN2Xoicnjh5QEgXLfPzEMEaCQS6TzytZNPAZXV4TZpmHrDrcVkKSQgo2UUxwwWd6eBDm",
  "key14": "4xyNvUgwEUFphvqWrwX95VAknjChJZFsmn4qqNZi2L7rGmsnb1sz6QFJKrQD1oHKqVFCDtxouhVufxvhzkoRG8Nw",
  "key15": "JCz5v5CmYXGiTNcWZf3786AsDyfDot7JMZzdkBhhxgGDBvfufXm2QDzkVbDCv1eskZtVa7vF9wq72d64cR5bkjm",
  "key16": "4RfcfdKJcBsQ792xiTaXzCC2Kgp4MELAbuiLiNV47cp77DTNtG5rKCZyeqmbZuC77ukAjRqNWt2ZnMKeMDrdoc5A",
  "key17": "ZAteeW2ze8MPd5W9Ly4LgcwY26TA1WTCuTHr1d9T3AY4zaoFZ7oLsUeRWg7TQcdVRF7PXChq3MBoWxvT7n1GBst",
  "key18": "QGKZ6CmvGTLBQAobFGvVFVSwae7f7HxUJWX5QUB3hZqqG47CetPMVCnS5pBx61XE2ZtmvTUGBbHxgP43CqWaNPY",
  "key19": "3a7X9D6cAxXNWhn8SkgBkJMgcyk1uX2LbwVqB1aS1ynUxpwrgv6K7mAKFT5YTd3UgcpAZMuvWBTXbkdXFwHSXxda",
  "key20": "bT1fzAMDVibyhNxbMbdYk2a5F7dJyaBzSDBtfQcQ7NwqLPkyJjpPfww58TTobc9rY7txPtZ3w5Tm4ATkZMzKtz1",
  "key21": "4XfsRb3C5tCojQy28hvb8koBcnWCSwB8JqiS9DAqZ3utVCCyxzdSJhiMCde9VEGXH3XAqVZPSob4UJUDJvXrmCMS",
  "key22": "42qjXJbsP3cQyAMxByXXML9dxAdN8WYsqABv8eMCKMVvCE3vwTfauowpPjsoh2uciU1kxZExb18MEqog8FaJCHJq",
  "key23": "4B2itgSjkgFHagCNrbMiAtR19f7J6wNpBCotK1z2MXBhx2pyqU8mJqP8engmoxkdtHFoheJ1KtkuCwLU1NQoqH88",
  "key24": "5x9byNWEmCoZmLUFQvko3Y9qL11ChGKoYoSkyisbc13H2yAF3ZTLEXZ2RCGCgqfVajhrMG7RHiDu8FsGczVS9Zty",
  "key25": "4w3kUL6P9bdBeA5xPQ3D6m12AwQ3W22PGtUbcQjpXAvDTb4vFhjgFTMsdt4oPy1Skei9SVFficKzVTrRNAJ1RmD1",
  "key26": "24CFVkf9buQKXUAaf8AANWbWPkwwLtPdzLinVJGJGcRsZ3tPZf3T65MDQFRdF9ufMBxWGR7SkGcG2hGXJn2GwcJH",
  "key27": "5Eznm3WJtjNXKfrepdb6b8GVCiebysHwhFrtJReATBgNR49jnidQh2HDVCq6SXcBq3rDrXMVTcA8xNSNW5iNNauE",
  "key28": "MpLM6k7GbNU6cBEJNZrUaAKcV9gs9vjpNi646cLq39e3XfCHaHvU3btoK9W5mtsbp9hz84W9VQAe43n7YDr1ZqH",
  "key29": "3tq4fLdkiTvFQeg8AjKJ4x7hVoouyh6JDpcqCgzUmKjAgx8rQNFz7mBhyBY7cUMGvpgtkaRoGAQiXvBAuoXsU9BU",
  "key30": "3ZNH7FerrU4xQ59QftZwsEg7gciYAVUxbPDinh36uyV2V7sGU2fWdggryeuHu3QuAtdhQxdrVZtgAjkcT7P8EhjE",
  "key31": "4yRd6wHBzfShZ8vovXjV7mFEf84HURY6jaAGve1WBu81K1PCfA4LzebCcFyjb6VVrh2QvdNA3MtEUx24dWsH9c9r",
  "key32": "4fZ4qFLUVyxJYTdr7JRpfnK1BMWkMuYteSUKtiQV5Si6Jqm3foJ5JH8fnSg5444mxDJRrdt1e9VX93LSJEeagwgd",
  "key33": "5YW5bd3arz9ZMMrUzujkJidfvyBUx4qAsf4b4WBh63yFXMh1N6rzY177XnWJnv6Sfi6yXRcTEuwxA2eR2MfNiFFB",
  "key34": "fYG1F7dBrUVYNsTpJetJSYnr68EMf65ZUWbWkorzr6u84D9LVeny1H76h8shCsBYUy1zzgBePyGX4nZcR1aeqaT",
  "key35": "4DUTf8j3YKvQapxTeHccjnqg9j3hRy4QsCcSizW4e4Snwt1uCn1DVftvZJo5448fw3WCrQ627RdjyJKtfvdWNr9w",
  "key36": "2NWxgvbMfoqcf5wEU6kYLzouDTqKbmL8s4RZuq5XbdcJgXTDBUJKfyijzPMJHi5TCEixu66qcxi4eCpSkpUgTgof",
  "key37": "ucmYq2tm7QrJvgiKdTma86wZNEsDKGQyN3suyoX8iK3LeaWFSWua5hDtNnHuFS2EoaishnT8LXbjTUWez58Rbms",
  "key38": "3NiLXpec7exPzMCu8sTckDZcqr9RGyjWmcRSmKZ63VFQfq5veWxKnoH3FTKzdy6wLqxPoww6AXA264P5mjrbdAHL",
  "key39": "3UUVVu6ugCHGmWpJHgEcrMu8PnF2YbPj9crkV8HeDWiwRwB2qwe8hP1bKzMs9iDA8wJCFim6iN71TAzpRAsNyHjo",
  "key40": "4KNda9LLJGZmncsha3GnnmDSZswqNHhEHrJJoBGkc94dVYBQTS2XHjkXpnKdM7Pg7wc3J2JHkhbRYvWc5j7sxe4c",
  "key41": "2eDc5qrnBFcrTi7a8Qh23x2xSscEPaNtEfQAsKe2uq5ee2n2cPSKiMduwgUq6MqXc5ea8qku8FU7BRRbcQsEfACG",
  "key42": "358g4fHMqCbCZLYGhWiw8akEnJMYZ2FWKegMqcbiYAL4rf8FrW62cM3nBF7R5ZA9mKVtJFX6F5phJiQVGx4EBRxa",
  "key43": "5PJmQp5YdVEqHg5ydLorPMdiD4PrDLQGSqKLdn5FVK2PQkjJWZp49y5UwgeMQgBebsrjENewM2V6VxHEaTK9z1ca",
  "key44": "5kE4836NeWN7rdTV7eu88QDArYotbWJrQiAPgGYptXEars1ACzDGuMWwePsd2RoYwjrunY3UfokXWcwVSHebaxsp"
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
