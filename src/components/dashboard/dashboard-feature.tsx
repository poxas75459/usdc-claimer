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
    "5pdcMXoBkfKtBrzUvc8b3886bA7mCRAe2BvVg4aWYbTGNcVxRMe6Hxi7C1Rv1ct9VWVDsxEnv5agfMQcZYdQsvGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46c1oeLutHa8QNyqFxHPMtvacQEbemxy8SbMfCxRYo1WJQg6BYs26sFrnrVAyUCcvYEKvp7LHt81aw1uE5vLoYjM",
  "key1": "4BcyhLUVpfr7WKikZv8F22Zx16ozgE4mNvX7f5R8MWqFnN7sVFf6pgWGwb9bdEEABojAEbV2R8T9tpg8ZjwU9bL1",
  "key2": "2y6wysiywSCeCfAW7eLSwH1sKdQJL3aGeP2rqVY3gknPNrMMXuAafSraAtbmBBCiATechkLy97eyTmpK9s1dQiSh",
  "key3": "4UJBRA8ScWtkum4KNbPss7u15VVdw55XrnBK2rZJd2PJWdZRu4BRcAUdHftEWiA1guegvZvx9YyWYBUh7xhwYrmg",
  "key4": "3grAf5aZvTie99PH5sNNovDhtwMrmJ32f544j1s9ZG7b3oFHfsiMFojTL5UU2n4LxWMjwAXS4Em1puNNR8ugMqat",
  "key5": "4qUciFmtRhHw8kKozX79Q12oGcS4Tk6oVtyYDeVWfobpZqNzgKYZ24Co1mg2YWBzszi1vG4a6TqKi8mSpHfjY37c",
  "key6": "4MVHP5xxPmbr8BoD4fru1nxCvbCeNgQXDqLbC6HmAEprj6FhZoj265Sv753YuE19dneyDwmrZNcKfcQonF3NLbU",
  "key7": "YDvQmL3HTALPSBvRA9KhAdKDofErhSjoqSSPP1Z63cGBhdStRU2pDiwPvqm5y1tb8gHkHTc5yVuN4b431NsGSSv",
  "key8": "4yaXPJNyEj6HUi8GDzTQyFq86LpbkbMLsGMVvoWMwBZEd1r1uD1Q77GCR63zH7rCranbgcfpcc1wgDKvEHn6Ua3Y",
  "key9": "3ik1BbCybjn78PbNEZgGdkvDTc2tTGM66YPmtM6RUkb2rFi14GA6GwzTGBEUaQhniaz53tnsajhTJcikhn3r3tkx",
  "key10": "RH9eQKxtpE7jKPvsC1cFJ96LTK3qYyzeYzWQPBaewGQJFQcgqVzfcXgnczrAZY7YwsNiu3T2MVMD4AqxPrkrk9X",
  "key11": "3ExN3hk849DhN1SHhg3zbGcLXcTFza1WC3CKvZ4cSxG9AwLhRSqNMgUoc5cYGZMqA8LAh7cvGgaMBcvsmXuWgxNZ",
  "key12": "2LxFrCuVfK8X2U54vZw8xjVnd8yZHuGG5GkiuEn3LNkcu8S9h5uwm541EfoBHJBteYZqV1bUWiQ7EJopcrNM6aZm",
  "key13": "UdHTm2h8pBVeztFmTWbe5rjDn1sMx6XnM87ptud87UUkyqfxZQGdQiofUnJrwCWYLxosfJAVApF2CGQtdakpxEb",
  "key14": "2X81qudHqkQZuo1KL89qBz6CExLCi7m82vM1mNDAugDjUaMx2cECw96SyPvbS5nYBg8xbQtCryWtGEGLcCQHSgBy",
  "key15": "4d2NLUgrABUNHGv37YoQNRnamT4Q5azWiXdHtVFesZQvaGbvJXhi3PMrGKAYLVKHgFqWLAjouNnDrrCCCqnSVZKU",
  "key16": "3Bf2zjvF1V3v9pfCHMoWVbR2dV1RaSFm3EUiTgMjrFFCJ9pvfS965xRwqfVNAMECpBuNNdTzViReNMm2jeJJfiS9",
  "key17": "5UnKEK2neDnywraAPmZP9k6vsRSuSbDtNGmFPfz4KuYPY5MNgYfMafRh1DXVEXTAuqjk9Pym8ps2RJzNjPkhmd7q",
  "key18": "4j6mZAafUwc7dc6ttpuRAj1epCQZQKXLR1JrBB95YEx4unRgHevA5YXt8zNXctH5kKnuTyi8wG8iyqTkos9Ybgz8",
  "key19": "5wjA78A6JzLytRqdxAbMraLTL7zSrw79PM3nNiMNiNefvQ47748Eaj4ZG7UGNH98NDRphgzGKFi6XLNyhyX6mLyF",
  "key20": "RnFFpXLKKZWcbXVNvGKsQC5su6p1QbaoExXGio1Y28RKVT9aAZ8eFA2xBs9wqeTrcgpC9z3TME8bKrWX5t1iQKU",
  "key21": "3pETv6ixVmDm5UpQLKAqURXHfpo98oBJPt3nBF8GKU37BiSwNhcFWWqGzEZNsGCKrThQC2fJppUyxq57UAv95pN9",
  "key22": "493LpzfMmEaCqMeBRaToShWxHZLFKctkTuBxn2pSNStz1X27mKQmrNSw3ToH5Lh6m5fbSH7dMpG2xUhq7XjoUNbH",
  "key23": "5QZGPHMT4sY2Dxn7wLzPb59BadSgL2x7JTFsh4JH6BHWc4dHwqrTcavGZgjNTiPYNEWLX4FQ9sufnWLApFeNspSW",
  "key24": "nXrCcKRMSP6yGgtMpf3s5P2DemCGNEXNoJmvPmcUvyiUtxgUgBBhoF8j8TaDVXXAeG8seUS5EJhAfY7vDFAtMzG",
  "key25": "4L1XvNUtvRubne1MStT2TB4zNKkNnpxi4bjTerJu7mC5pKZpAZmij19Y5VSS7bNggGSZWkxEMiU2Rp1BupXHWekq",
  "key26": "2oTZdsYYBUSQyZnDYnDBNe5tAPQoRxKCJNjd7jibg1tQhc6kQRHZUegSauwhw8u4LxHRqN7ezqQzBD4PBifrcp4c",
  "key27": "3gA94VNCUXLJhB1RznCPzs5u6gExX8Ubx2DcGdRzJH7iRRcVc23FJZBESg5eRByPvQvmEAf7QJ9GHTH6KtxyEs9P",
  "key28": "4keNx2EmJ56KbzC12CtAmfnc49ixT5f4yKENNZwxjzN4DN3neJMEDeXVvpcLQdGvAgVDTxLCankhDZ2frTLTSs7i",
  "key29": "DxPp33mtiEjyWiWSz1Vi84qRxx4G5oHPFLAHskHhvgDKnLm1gfRYLMzJi7ek9H3xFiBuEfirh6X5ZKBYSJpddmh",
  "key30": "4gUZC1UtpGxuRAHx2sT5cHj9vtyqKJ4M5CiKTc3gT57MNKs4vySyEJjdtKWmGFFEi14DCa86ntek4FzLAyALd9jA",
  "key31": "EhtisqWMP8TLrQYJbxqZoAA9BU6Gz3ejgWM66jeTudJqnF6Uifr49bZFjiE6p8Fbm2boHSL6voWyFrxmyisuTHV",
  "key32": "3H5Z695oX9tcGomgpxG7MQBtFybERPbYTk3UPwj7vA4FBUCi2qjeT6RvhxypoLMwVV3pS2LLew1J42kdFbeRR9C4",
  "key33": "9LG7ULp7YVoPyc5JBz7qpt7eDizUaWr4iuKFeCKSMXtihuR96L1RorW8rhiq4k43xqoXNFPgMUBQCsKSydfMQh3",
  "key34": "2Z7yzWjBSwTneiCjzUw8bFFPgAMM3ZjQXRQYSytnkwqYiVFx68kxu83Uwiwn4WKRU56MGXAdCsNEyp7JiHAQ3B4J",
  "key35": "bq8ysQDE1dXxZxCyz7WGxy4JfN9kjGLZiRSWxEVVwuN336eP4rFRdJxwGMBzPCSmrkZ3CB4m1d3QdTEDAhDNwRV",
  "key36": "3KSxhrSn6TDicZCFcbBuQX617pCCLgS2cSZ7wkgqWmGA5LBPx68MKThPCYnmig5QPhaKd8wDmqxRzQHtTETxLNL8",
  "key37": "61zXaoYACNserF427gPpQM9txJoaZjGkbvEwVq3xVq1UDbF146E36Thw2o2nJiUK5dJ67gmC5BGp4ZRY3CenS4ht",
  "key38": "5bxPUCCaNz4baRdGEkZQExyw58i5r62DqMvn8hASNT4Yq16U4Ze3zw6CCg2Ph7eDz39VPpTsiGW1eraaSNs8UWgd",
  "key39": "4XPC3UTzTCFWDuoaU8L6fn4SPYV1tSx1vp6pMot3P2ineiFjZuXfZHRhhFtuYaercMeMF82kemwTqZtea86mijR5",
  "key40": "66ghaeiZ52f8rGWPy18Cpz4xdAHccBNDdA835Xkq6tmW4u8z5cGAPSFBYiCQsN42xd2DFzQKbnG92SQ9j8RgJZxp",
  "key41": "HMWvyhK51iNnG3BuayZJ4WqASbwbtNJ1HhtYjmScjHZsYXijx3xrk26AchvDcuVXjkNK7zQfCevR5AZta3Hpx8m",
  "key42": "5zctaWaji5dWg9j9Lu2vpouef5MFRuxAeTcvS71qK1wGzXNRrCUtmwFWm4tYviXXfbefx4LF4jYXU6GBxjwJjVwn",
  "key43": "4f8S9mMe1dENbEkjCJhzSMFok1TnUASnob3HiTPNnBDnAhFXtiacsNA6ghDrLDXD8yBTXR7TWXkfH9THXKqKD5HL",
  "key44": "3P1w7KjrHgd817hET57HhJQ8PHEP7x9vwjtCX9Hv6jFFmNBzqedxzC3qqPExvDZW68zvgUvjLxatrisK6mFpqLf"
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
