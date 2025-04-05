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
    "41gbeR3z9s643mVxhCidBXiiWePAm4vJF2nNy8GWFQejy5BAAaZ1TnHRBsssrEnTKF69hXQ37TfmV24eu7FiZcsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66zTzhyhovVtEa5FDXUV52vVGHAnhkhsdRfE4a1RLwQ9LtrLSY5xXk9CU9VHTPXuyV8c4BKe3CjyHixYibtDvw8g",
  "key1": "4jffstfQJukWuBAMX86YXhd8xfX8cyq7zrSPjgpxXD6QavuCwZzQBWphPKLH3hGq1qZpv6VhUY1QakbRHA7fQoWK",
  "key2": "3eqPYgQiEXDNWAEwv1MRM8MoYRBaCjq5TuEYi2xvvtcruGLtq5TKVfCGriH8Y6W9GqRiyxdJtC6h8UKSorv2V2DY",
  "key3": "5he27dc6F9KHQ5nZg7VAyxqQmcTNFwXWMhX4nTQ1TJyMqsMUHkbCuGVaxFzxEi6Gfn1eAjgVhVrZNH6FdU8sdvrp",
  "key4": "4qKgcomzM2UaNpv4jrzVBNoRC43RY2XPs7uq8ck1b4szC2fsDrBB3crNJfmEHYDmPrPv1oyE1V1onPyvMKp9uf8u",
  "key5": "3heYaQMVhkRDP9E4hSUoYR5y55LFavXsBWZETVuimVzW3cccYj7J36vKsftbiyP29kmK6fQr5AfJjvW3ZKx32rFx",
  "key6": "67Yk5QTF9nShAdTqHP7PDU9yKHgLyaow13GXKuyrmrdcxhooSPDriELofpxbGoYvcXg1XwgsMd62jVPUVYBJGbmk",
  "key7": "v5vhhgg4vQEq2QAZPVqmosa6uvRr2v1q3VV7oXBJS2mFeg4Cw6LmGF27BcSXCxr4F8vti1U67HRPYbRx9NFVpdJ",
  "key8": "74jLZ19X4cLFPsNemk6hDGLMEyftGmwV6TB5n6MtJNpEsy6axESszZ7Sn4sFwPNjJiBnkwztKTGWZL4YjKKUKZA",
  "key9": "ooNF9pLMLSjYa8dEBK2h8tsG9Ngm9tpUxxizSbVdz8W4yqPuvbXmsv5cP68PL37k6ChdXPyBwFxsU6weTjC2z99",
  "key10": "4nW1AzoSSCEF9PQonjvxSfBp2Dr36crDF1LQZjzZ1Wp6ToExr7Ydu2M9yXZhpGNwdAU2VDbYsL99bFjtt26RkFR",
  "key11": "d4Ne62n1HsGyqZY1RvzbgARcswaMwLhHhcukp6kLdLP5KDTfLWhwnSdLtBFcxnHdjiXuxLm6tvh9QLHhrNLtz7n",
  "key12": "mjRg28VHLnwijFao1YXaTaAuwddL8Pm23iDcqDpGXhhCtD2mAeyNQdKrUDqJS4U2AmNT6cpkF5boESDKtNHTkjv",
  "key13": "CGb7NctRjVxAJ8RPATQ9jBg2Kdmikz1a6NEij5nit59nHB8a5AtEBpwkrLsT6LxnfsmfrDg1tE41L2qTbEdm1mK",
  "key14": "4EZ6DBKHUVCUie3oNGTyYK9TtQ7o27X24AgdrhqZ1pYQ887J9eAUhQjJk7vupeAy47ctSCNSGZNx7FCYcceAhvWF",
  "key15": "46Tz7qYgnkDVksrAXwvNvXpfQuKYTgA3qsKtw32GAAAuPYyh7CEffSgwx2hPDZRrDtidUYZYofDPxiw2Ds3Bj8yn",
  "key16": "4xzPZjz4Zq4Rhh7SknXb3gnFAXADAzNpm6u92CrPBbpLhMUgCB8stGo3miSeNyXkyJBqam1v3rbGnaoYe197RQzm",
  "key17": "5r6S868q7SVe4mMH1eJZggZi8stMW4JiJzDnrmdzJajE1tpDDSSbCQTAv9Fm7vXTDqsp4tdcKUDKtxYQau6UA18f",
  "key18": "5DHHXYhiq51BZy4i1sDjBqeVuHc9ou8HyGzSh6MKnyHrwawi4mJtZCRAWUzALqXCnHP3pxeNbnNTYoRzUVdXbhw4",
  "key19": "66MFWUMquPbcAVqBgeqtYHVb2znGDPZz2meVMTbrv8DgS3JTWCqDV9yWuBNGYrXHYoyLb5AkddgvvfjyCTbRUtTV",
  "key20": "CRoe6tkE2jYvFhsu1p6nVomed59hU7vnXjcbNWt9uRWFd84Pfg7gTXwyRBZ6Z8wmTwjiTY2XuTkawKk6KmtxB3B",
  "key21": "2YNbr19DvN2f72ogLL5NHNfcCw11B4QjiJfrrqAi8Bd7MR4qsX1r7X2JUgmqJJufrR2TKmUMqBtdsLvAThzxLTv1",
  "key22": "5pSCVU1DBDttvMdYLutshk6tZr4P1VynJmvoWsJW5RbcD4FA9fv1SR2ED4yAyW4jtZjVpffotoPEpip493rnJDif",
  "key23": "4qd15V3nVhDyhPHTPrMg4Rp8qQK42eCgbvqm2hAVfKupxDSxyRbAYib6TqjF9qhDgbbGXTTbPjYz14Abnx9c9BMk",
  "key24": "4BrpVqQE14n5fs9sduzUELVn82LyDifK1Cab4pmKvHfQ6boAg39J3EAcFjncJiCNeXimyP8JLhJ1DccR1n9T8KxD",
  "key25": "k4ShSjJGPiuFKKE1QQWEAkjVwG3sk5eqhif8kw7HRHZ6WCgMiXv2gKhgZE3ZEEo97y1DGybwmTD4AiS6DL18jUs",
  "key26": "ckpBJhTzHXVbpHSrJUtH65pFhhgWkamnLqvstGvVUCxS4qDVfoaukKZxs4bwHF626vQpMwVZpWSHch2RUk87RJb",
  "key27": "3jyQUf6DXF54HzDkgZJs18cQpGB3zKyCyHJ2etmiXZKfVn9g7KgEan8uvk1BTeHKHRW2m8dgqrgntAHn9FrtbGgx",
  "key28": "3hYhC1UL8FKguYd6J49dxrSDXddAqN5brtLP81tnmGuxZHJGLVMF46eiWpTnzZpnasKfMoN1KYRT6m4CBQF2c2eA",
  "key29": "2XYMEQpPKETFTRb1KF1eUrhHppZFvpzHVZkugkzuF5AWS8bVbnbnDjFCbPmm7GLPrUXZZyRViSUfztoTzCfDrU9H",
  "key30": "4SNASLmngDZEv342HLqjxcueNiLih1fuJy3mEPtzCgaD9Fs6Q6nUnE9EMjps15hqSJAS1TtFcLm18n6EzzsQD42z",
  "key31": "d8sWJqXHMD4ekZCDHNDdhkbtT9m5wkkSbAY3HUh4PLdmHrcLBv4RJBH5fmAMCZScuJPednM4Ly3QPNNVRkmDkw2",
  "key32": "2FenAunkShbg3HQNvaMmn9tFtetamGiymoFRbauRPP65CEd1uJY7cUfrHnUc4T6bqKCpWTpwAMxYZwetZiKUu61M",
  "key33": "5fc3v6q3L2yb8YRaDiiRquZ94DDRN54jMgB9Psmk3XzYBXTLFfuZuLtF5yaPgc4oo14hyNE3hGHXp3JzsWMJNdKw"
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
