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
    "5XSc6y2hBqLb19aYPfjYaq43C1nUX7fXaoDDnoH8KSqPgZ7nEuAiuxEFavcKgYFv39u3HnLwr9i1nXhDiLb8ghCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRTmwtMVRiAD76B7fpCa18p86qQY5VypqCARKb586w57fh968Zq7bL1ZLdFEz4Rup4p1nR2hhi2Ji43vo1aFfyq",
  "key1": "47Gv3V9UqXeWvj4KinJJKVyKfkwq2dfX8XLeST6WjK342r56HviKPik8Y27YWYvH4ghVESbbVDEJ2JzLWPNJXmKq",
  "key2": "pqtLzsKnzaJRsDiyVwB3nPwST2robpKGeSxLqvE9GaXJUag3zppPMjCcJ9oWyj8AS8kNAGme7tYMWzsgobZyPw1",
  "key3": "3Hsak684hopEVYfK3dUCCh8KnxcUUiYuz4BTQbjEAPNKN7JD23cqgsJRrtPUuSyxoQRga4UQXY2seJgyqNw7hZH5",
  "key4": "3aYS7u7awFewGnyoULoQbvL2YuyD3XoWLtjZVWiQ1TVzPVnbdZMmqHnvQq7NYn74LCXAZnTMYLK8ysAnfPJtkz6w",
  "key5": "5wGoTYGB7uE3BSdibEtD4X2xHsmusm2UMzFwF7S3f7s1s6fMoNFHLKou8bTcK6qHf8SmqxiZVPJPkfNemAi7m712",
  "key6": "7crS2QToNrQVdr7PCAQPGa6cW1tBkuRZkHXzmNYpZEeb5pAtRZkCXRifAwjzVbmEGW4mFErbuUeDkFK9r9kJpHo",
  "key7": "2wEFafhwv8vPvMwRhHwnD11AyiL7GCZBDvejhxcs1zR4DVs3VnzhLgJsGQ4bGXxjp5y6ycKTitVuPiwwqY7XKng8",
  "key8": "3u44Q5Z1TtG7HXxHZPbqgiPpKGUPhuYiRZA7BP19kTEnEaKZRrChkWHTLiGu1HvFiQGGzM9LYibet7LVGTgnpaqN",
  "key9": "FWuY8LAP28hiezDvYWh62Qx6wtFp2KtPxX1eCVGz9Rss812uU5a2n45qqBxUvbthwECHcDLWEudZs4K23fmys5y",
  "key10": "4Hu8ruTMGkd3ukS21yqbvrFQCvYYXj727HJ6i1sRRjaRBghiZ98eZeGJniXb3vyx3rDmhCTaLe9yCHbcgkjqgTgf",
  "key11": "44vFngyoM89vr6zpZtoAinPrCVkmV8yhsUzfK19QzYVmqr8K7W9dNmPYaZkAKpGEZ4fEjS5hUne3y2kR4fCgnbya",
  "key12": "2sHewYQwuviYoZCcpGSBdngRE5x53Vvb7WcMVm1BSGcixPAkhze8MkEu6MnjqcPeAtBc8EUymkJ4Phr3y8uzwea3",
  "key13": "6QPh4Fre6ssdNnMnm5Q2AZSF1yRPFAzxeoDpjE67PvdekVKtcciUxSet9tT9VahVbDjBoRB6AzJCkQLuUV5qgVd",
  "key14": "396eTR8caQk92uTW7VhrqDj9vThuXSkUB5fcav72BtYBQmBENuLpSddSGEom5A2171HdPfvoiQ6Akej9KnJQ7Nnd",
  "key15": "2zvY3frLBVbSEPHV8pddZ4sRSkdr82R5dC7mXyPJSo7pY3WPTwbf5wrLapFc3RmPwLKisGLWXwU8yFDoAVAKUsRJ",
  "key16": "Tt5K9GSVtSUwQmGd5un3JgeoPPfVt6qbpzaEcHRvgmzTGre2m46PxEdnh31btMWdKqR2SocAV9ZEdn8s6Uw6n7f",
  "key17": "2idfsi2qhUcVZ94yyj5ucwN84EdducEcQZpqUFSAdUaXoFSDu548XFbpQ6kBUfowBizYfPUmc4uC4CqnjwMNuk6v",
  "key18": "3bXbHwucJ8Rsp3sxdZHvVmdZufp5NDpdTUoFMCg5cR3n1aEVkZPfxKXGmBpW2pUNgav1SVVc3yJkfQJYEjY2ycYu",
  "key19": "4RcsqYPKAsfbGjmh6NQAWzZvsSrXBszHkTfAK6csm24vZsmcpu6QRv44RjU52xwCyRvspyayvkatsE5GSLL4QWro",
  "key20": "3gRnNuAWWHusubyGgFS1YobPt547eq8KLFjDASh5bspUE3rR5BJyPGBfxBZ1QsiVviwtnNbwCvSchjM9HJf6tMAJ",
  "key21": "59wPDRoTzYZhDfEjpuaQgRNXUUBLC5iNLagEQ9vEoamp7NERnRxx3e6ZB4kWagkLYiiWPv6tbvKo6eAo4diogjiT",
  "key22": "9nSfp85DRX8qc4UCvssYEkyTLzzfBCvovQ6wMignoAFn56ecKRxsWCn5uGxbe9dePJzoagUDvLUyKmMQB5Q5Jhg",
  "key23": "3jKTrBkpNqbTYnadttzdQX6wvpLT4FcVQCMAwNJYRXrMMtsw4P83Y9pAaciRxdvS9CUxemPatyCpJevmDBdVYNyq",
  "key24": "3N7ZWcM9Fu2MLHpiuKzoELxxRfRPcwH1xhXcz2vx96JS8DbvRZXXxBzSxL744hcLepDnnNnDKiDLeyH6A6g5NEjG",
  "key25": "2FYwt3MqxqpZiPKgy7ZGwE6uWWuAuynXAmBJ1sJAADUvDq6LE13CY4tPoZpanbaGzYezVBi6F8vj94fcu9sZLrak",
  "key26": "4MkTdxszQpSBogRYvkr86ggYvUz5uMecVKcYYwkx9sFoCQmMnDP9zqEyWLiMHSWr7C85sdpSwvgCBLxgQ4teABv1",
  "key27": "5nX66o6asbGCN5js16yb9vtexEm6hY5F2A2zjHiCHCbM9erptnb2V8G3Ur1ZurB3wcZ8RrvCBYLtCbxFmv75o3B3",
  "key28": "4p5DSLDGEZqssevRLCx9DvxhzVPagdPyMZ8M6RQfZXyTSQ4XjokriBFoaA7JFpemRk5KzLRcYKz759fTEdW9WKVf",
  "key29": "43QMeotwqWDwE6HisECS93pvFFciCi5ZU3zV8759j5njjkT4czsRKz3s1c5tpNiAhuoyjSCYutopKUUXURq28G5K",
  "key30": "61yP72BrSeQtHaeJFy4TzUEsEa4N1bbi4RvLaC5TN1QAMMcfXSVL7GiJ36v7rqaCAX7QUUHJQ66vk37hpHB5AkM6",
  "key31": "5RbCpBp9uHvyg3Udbc3EDrAV4nshqpS1Ew9U5cyc8fhC3fByYY3MNMaTbZC9nUyEkdgjnb6nv9oxrnL541fVTYkA",
  "key32": "4bgyULKNy8poPQ4nvic2B7ohYCboJWALDkpP3J7jUaKdWtoQtWZ5WgAfacmGKskY1n6oyqkDFZv5H3T8FxwXwfcC",
  "key33": "3Cmgws9LthG73buE3EjP6dG6w2bGYEzDwp6VGHdCVfeN1SHRxNk5qho1y8cjYbUqTdrUs6Ba9j49HQ1wKNVpDbgR",
  "key34": "VUjoobNLavrCYT5byvXCrpE7NjKPEpo2vMK91Eg4VpMBCMwBSetT4XtWPPr4Hesz3X5T9Q8SeQCMoBPbdrx2fxU",
  "key35": "5JTn7YrvFcasoAvz2AFkVMtRbopPBBbrqpNV5jBSve5xveBK8gdBPYEWqdzx95CXURpkWgvcMt5bbkz5JrsFg6J4"
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
