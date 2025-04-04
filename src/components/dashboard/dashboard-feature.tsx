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
    "2oovbAZMTx3wjYmvARwnv1VUoYYfFKbe5VHAcQmjeeyRvZYNgYXxDMBCoeoMmNBfLsQvw3JS1fUjLV7Ja5bTKQFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25oLA2qPgMUNnQZknxSeR3KHKB9yiiiEyDPEXLqQU6cxsjb8xYp4igPN3wvA1V3PxpuWj6tLd1NrUrUS7FeVHTVt",
  "key1": "3Dxa3H4xyqD74iRp2VT87hZBkrXC8RMW8435mZB1g7HGLHXhef5TGhY5qdy17cXoGCx3ofTXnSKQZA5CRkpF3Pbz",
  "key2": "23ebotCEiGWEyc812bXTVZ2z4WJPpzwxHHgMyG2UrfL1At4uFYgNCM3bsBQ47q4eNdpDra25PupmuBjJCwPHBuQ9",
  "key3": "3WT6uubzBgFnCHDjXWdVEdNHzeHRGMDw41fiFWujLmR8nHAXzMzG8P779dHYQez8AFkxyyP9oiX4pVxHHYZ8xJ61",
  "key4": "4dcKQWmLmFWaehAxdgrChybtDBNpPE5ZzMUb7qAwztE8PMzHb2kY14NNcyTL16FnAhMWvCWdpxipbJV6m83oNy9K",
  "key5": "49AD5DykRhuUnKSN6eBPeBc6Qi55nsK1NBkdDhJkpHCYSGY3d1RNRYNFnpTCXXJK3ocQUyThLkRTRrpzcxqFMuEu",
  "key6": "2qdgbhL245cG9ct8Awrp1R4NUyfXdfRkrM8F4fvCdvd7usEfY86rymJzKU9S9n6aGvpTw3ToNozU9yz5KoCrmFvL",
  "key7": "2u8otGnKTBSUewNE3TfW6VbkXASvRzqhnf4ZvkLU2zbSvNCg9DNF6wYqDB6NEVZnFp35pkzRJuKWRkbnxi9FuFCZ",
  "key8": "5cx7yVYejeCXMGZnkKLRd9kdxdRouXLNoA6nWvRivQAoJeMVgxQGEoH52cvWy4NXTAXnoj5gT8Rr1NnWTJayqxtm",
  "key9": "36E2F1DoA4FaMTbUFFX3WSK47DEPft14qUA2nKVSWLR3WohsnJ2dWvACAkSZzdCTHuLMBz6fNjDz7aGgubq2U3nf",
  "key10": "3Shs99CUGEZrBURhY5Aj2wVY3QpVtRCeqt9fHYMUuJw6mmq1XheKuLnHkzTw8JrUkNBY9QEPVstz8pb8uBByDAMd",
  "key11": "5TkCjZn4m7TcyemskV6CeHb7s2JAtLhk8FmvkSFaAfutbFP5PZU7x19hTHUjEaHGTMiB5j9YzKNV4mWYDMkgrLbM",
  "key12": "5RnQPTn3TH1ASfVwCJ3u5vfCfLPyCXQv3bW6UhK93n6UW8xMeQHnVn84dgjJpV7V8GpZfeyFbcDfPiUYAAtVz1D5",
  "key13": "26So1JjtLH5nxRJKXddZx8p7fPXUpGHsHdca8irDiX357Vk6R2yxiN3Donvs8mxrE7CweXu3YpNjUbcxfsqLnvNY",
  "key14": "5jJEXDa62bsy3EozmxYYPazt8ED33YWZq64DYxjXhtoYZ7P1XTTRm98y2qw9DPeurs14KJ99vkyf3VZ6UxXctQPt",
  "key15": "5t4nD9Gco7reDBXMNUTXY5hjGBgWMJtcCLzTg4cdQYXNf3GX2Tb2eGsR8CPNuUq3pqks9EBkQhhXLQGeWzBfkUqa",
  "key16": "3WZcJCTqqwXQ91itVBoEgG2fPiTNRJk8qiCV9dS4yec9k8jp8QJVuHr785kkeKBwn35TcDwJcbncrP7q9f7neY9A",
  "key17": "45j1p8vrUuBvpSkWr6fbqAg1cwESYz419XCCTrWvtUHqVZ5ydh3xSHnFnmvo8bRejYfFaPV5yKRJKdgVwdGE4zEY",
  "key18": "2DsWe9HnYy3Z3mVdWKfG5LmhEcx4QNHis3iHgYpw7kXpYX1cRq39PJTE3CZMstF46RFyyzcqFyfWFzPgDZhqJsr3",
  "key19": "5uRPFoVMvxrxbaZrHCEffcoEoDtbSbb18FMHX4j2PHnm9G9iagXem2g8UGbQ1NrjSLWGKEnabXLCFuosQu5wgYc6",
  "key20": "39y51JdV8UWU1WCX9cL54WxZwGW4uP77WvrWqKaUB8Bkor8gLGwTeNNYv9XPWxrxLgvojwXYXbzsT1AEUHFrJwAS",
  "key21": "2wfeUqbHPU526AkRRSijcHH4rFPp4dVUqLzfMhS7KDEQcidtuztNhvYLitHskJLuQ8iwFoGESThsBVr7z7yyKiqM",
  "key22": "3hvxJebX3UzxM94jdiUhMQAohp73KNVgDD4h2wxT3BhtRkCJinaWmy4BixEwwbq5dgdNGhsqAhVtyt3Tg7pAZKDi",
  "key23": "4w1cPqCTdFUCNuFvRdbC785dbzKXauzcq4sJuK4G7t4sBKpV4oQyqM27G54rqMmLpQkZQx9uikmjdmqmXUmsCNUX",
  "key24": "2hGuVgmk633E3Ny1Neifwn3BAWvxA7T3NqYiSXu5U5cUgzfuN5WYKtjBDSSTHk7WqNbjC4LB5UEx7Ercww3avK7G",
  "key25": "5idHVLekbJEyWsvDm2bSRxKABaYyyy8z4gm5K1PMRFLj5u17Rm6mNcZGb6x2AbP2bRco7WNArHhQKkXikDepQqcY",
  "key26": "2MEWyKUedAQUjqN7UYP5Nc7CgXy25xwrRUqNRRxr8XidhkHyA1dEDAscqQYdk8w3tycQw5cYkNzQzohs18g3oBvf",
  "key27": "5q86iLK4ToXNhEwtDsTS3JQszLZudeV1KYq3yyPi4i4rjbJawvxBJbJxDtecGsjWJrnJSt4esqhj7gmbi3ZKsT4k"
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
