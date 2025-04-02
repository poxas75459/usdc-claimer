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
    "p2ZQSeX2YZUdipTwjLwLao9TdPB37f8mKV6PqrY4Z2phwaU2zFCPqnCD6yZ64atBiUsK8uWA3oRsAZeLT2JzHmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKmRRurd6CP5wh3P797SbcmocffxWbpu2hajhYdWsUxHyETQrUMewudDe2Mt4XmxDUokhL2153UVgdrxtroR1Tk",
  "key1": "tXZAJDYibXbUhaSic6RBmP672bagw57QKPyRSzxuNcD4qtEjTrSL47z2ckArHxDjRmfHjm4vxsGXUtH66ySauLx",
  "key2": "kf2PVnQtzruyfEGdbF5Ec6PYUUaJAswNy69ETCupamtD7gd5boKRFf3cbrsLpp4Me1SXKS6BRnFwpRYVcVX519R",
  "key3": "286P7jXEbm8NARgwmFYzrg8GNMbhgCg2mniqDLYEPxzuJqPBaDJr9Jz7waRwAEDbNqvTF3PbPs86Vd9QajXjavj7",
  "key4": "2dDVTGQqD3Y87vySobFcCDddM5PAPtA995EbSp5YaXEnTcaD68NePcm76wztqHcDqmDRZpgDPkS73Qcaz4UeSKQw",
  "key5": "B3CvS8EUF8wrUrnz4zspcEcWrK5Tj6BRiyn43BUSKG6FoWvtMZGKFyEYeaKs4kGcXpCsvqMzHqLBEa5jVwNvmVV",
  "key6": "266gGBdarKT5CA4z8jqTMH1gUcdxLtPVA72bXHHGhYPGzZC5nEbxqF2BXvdb9dL55puqNRAk2cNemMxGb3KY95SJ",
  "key7": "z9LrNZNDyVtwKy4pHFnzXHQJc1m9ggqoJtvjBiTeCzPGzRGDvYSUKTFGebWnGpHTRZi6SJDtjfVUGyGYpKDLGxP",
  "key8": "5RGUCX7A8gqjyE5yiYRLpzoQwqDMfNgv6WgLgyzHyiWdkuqXzcGw4aWMmdGf3sEfapLGt8P2bEMY5JgHPrgxDG8",
  "key9": "5BjfBY9ZzQuYvs5U1dub5JitNNMFPX1itFoBCv1XGrnLBgmqd2MTfPBmGuPT3asNkfvc8xxaNTc5VJ4KN9Mb4tZC",
  "key10": "4m4aimWJzouE51LLzj6TBxrbs4VXsUzhZ7pZK2zXhrS43GY9dycw8N9aBmSDCCkCimcjirwdqA2zT3rAuEfJ3u7G",
  "key11": "GYNxi1BiTkcWsDTtC323CLiJcL97cWiB3qJ1sa8koRGEsfjaRMwsgYN9bfXA8rGpJgAhb2Xtqrw69rpjAkELjGX",
  "key12": "47PCTioV4HSfUYf3UnKskpZCYZ2mRsLvMwjzXz6RbmJRuWZqWQjWtKTuc2BQQVF1pFFroPqgmefGHqPtCYCx2yZZ",
  "key13": "5jnxwJnchQ8kmdGRE8NGhyJyhNR4foJU9qyN1SNPiN4p8ydbSz6kesJFyvtUZsKfSFMBPcrQriz36YMsfpaxQfb6",
  "key14": "5kHrBdfxTbmcSA1Aptnnje26Wjok8Ar95rgjrfdgmP9Ybo1cgNrWAdiq4mu3xzkUQHPqLT3zn43XrNbcNa6eJWu1",
  "key15": "2G5ZciWuKaWaqwvDr6W9F5nGMEuy2eNbZvSZUqkZ5woaVV9dRtfCCQUcgQrerukZ4g78rdTwpSgN9xZAeJUhw4E8",
  "key16": "5wh84c33PWvj5TXEqju1j4fEbqEjBqvWt4XTi6423W5wb7e38fnFjW7nPmWrxHDYqQegMKQK3tpHPEHaXnGizYCy",
  "key17": "4fWXFqZnZTLU67ZrnDDk1NSGAC5YY3JTvZHnYniLan4ny1cKQGxsBtZM1SBKLB7fDzXS6i4SgggE46GZSNC5uSNF",
  "key18": "X7BH8yYBNHCgayr6xN17zggVihb9yDwnVbcA9nQsdvcWTipqTk9HUymcq4zUBpHERyxAEm3s2EuxnvH1v8hiNu3",
  "key19": "7U2uSxZQNkJ3QHRGM2Yx7X1K6v9m6RyJ3o82Pr7w4ycEC3ecVKtEomvies9P5cWj6DMWyoW1GAGuWtSTxgYgiCi",
  "key20": "3xDZBVF6W4YSHQ4L9L8M2uR3TKN9edUjfCDV7n67nji5o377PxLrLNg7KjmioJyXgy2rpuBJw837WzK9to3zbxkR",
  "key21": "3ASGGbBmXotwC6PtkR4ag5zBSLRs2osz6wQ4DRd5RPgdJfVDTcwoYam98FG56NaHrmgYgYwV6xnhqfMzRKoLeV5E",
  "key22": "3LGwWecZvHhsU1WDHRXWCz25Sfooj6XcpnLgj2WhKBEhuzXR3LXuMJkWWLR9X8y4BMfCf1xNvBUT98W5Q5ofrnWF",
  "key23": "46c1qnejQ94UtMmpweue5s2W79CZEwGNshosvLJ9Lf2m73Ui1Mt6y5gUByXn8vAvvWvRx5TCExAmm8PNzFrbNyq",
  "key24": "2TTQgr9AYta9wR89sLjxWdJVSgMX4mUUmnNrtVGQKrAk8GkvPHY9BURbUCitGrCNTbjSRxdotQxpxw8T1HjbxUsc",
  "key25": "b6bU2fu8gH5GgBVUEK13eCZmDSiy22rPq18fvbtMbnRTw6hb4wnGERYegu6ca4bf1SNTNgfnZYZ79p8vAKvNnZ1"
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
