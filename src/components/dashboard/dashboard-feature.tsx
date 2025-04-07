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
    "4FUt4Wfa8RYvtu8W12Q5jJZGMmXpikDYezju79UHYaspReuzUx8vrfxdaxqDrRHWh5YZt3QnN9DnhMcxgBVcV2ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ujipNZyotz8EecZGLCt3BmzNHWDBFXheLw56N4FmSobF4TzDtswcJ6ETRh28ZtNTF8Cy1syqJ6xu8xCfcLeiNNf",
  "key1": "tycR6WyKoJqi2KTqbjdWpcexfHDepxRNPzJXZ7PmQTEhwUpdJMcSwn7tihCWJhCmB4bdXsmuC7u7t8UCAYXu4it",
  "key2": "hZE32q5TzHcnfszd9JeEeHu8eoFxTJrMGhFtpwuHQVfBQQLa2YXFpN2PxiGvUtbtHVqScuw1fJEMhVtyWgE3KUr",
  "key3": "5TfwozvLub7Aw3anjKKZjuXup5dUUA5VwNnvERdDgsH92Nu8LjBSUK4yQen5q1JMvNzs8HpoT5bwSXsFixyAWZGj",
  "key4": "5vPAS2qTwmuGu2YyWbJTNckj5jjGLLpzTgJLoKDmwqthpK54pAv39aKvUXyJbjGExSFcjDvknHPLwm9rFvnUPAiM",
  "key5": "3NQF3vb5bWfm4FJvALV9wqemvCAFPX1eZDX3pnSc7kbSM1q8U8wSLeHbnEGo8R8x7CZUXZFT4UTfjUzectdNvnTz",
  "key6": "2DGQyzMymrL4pHNFXY7f6M2Z9rGmb8EQ2noyZaW4zA7cu7VVPL7izHEte5SdCXkTMmZGCtnXcEDPck4HeNSMhoRC",
  "key7": "5Qwes9y2xRUdw6oEpPnFS7QzmgqCtssdhZdLwM6b7CGXfaD2Q9aGAHpin8KS3283Xe3tA16FG298qtLuJZcSMD17",
  "key8": "5HsnGFxg8CYVaLb3t1GSDAYERZkpebLyDpDCu4ARC36HnrnPRGtuJjLz2ncBt4ZhKvHfg4JdaNYaCwx8HpvbMDhi",
  "key9": "4qLiDwxyoUKsAUr3FYQDbqnAorVHASYJhCndg3qc5HGWbcs5SszNfs21f5WiidBuizyGpkVghfGZsvVP5Yx7BtyE",
  "key10": "3u3GBwym6ZQsTX1q9NFPgnSW2x12Af7bLnJQLqMJzUnfGrLu9KJseBygJXJ9g2y2UfsCdrNAss2TMYQ863wpSxoC",
  "key11": "2zkApVaerPxrQq4nCxyZYtknS9Af9yY8Usb93e5hHChBvp7932mdb1wN6KyWnYrBYQhYCm6nTTtr8JTheHMf5NKX",
  "key12": "28xjVHqRzAC3kceZMUPawZEioRdMbjZjDeyxxE1yjZuBznJWVDD95jVuuEfd4V1NPPMYcKAhq1tYVYeY5Y4YFg3T",
  "key13": "5YTqYbp62E87hETnATupogQimJtufxYNdvEXJTMAgBV8WD6HfTmNtzNoNpuoFpAWniyBtQ2jiKzsoFrUoNDXNMj",
  "key14": "3xcaq7jjXoKxMQMb6DYEQ6rFHJk4LbizycQmjxDRU8aKedf2MPVXdKM1jBnE9wFttqP4hEWzfupoxFQacJgJDRD2",
  "key15": "NuMWWL3o6YKbWye5komGtKWnaFsTav3Mhti1ARJXTUSEC1v99wMzUCMm3cHBMtQMHMcsz5Zguxivz9WhaJUd9g1",
  "key16": "5kgz8as4ZCMwxKx4eAhwh8fZLxEQbfZbVv1Wcb6QFi9VSKfWRTZuiv4sPswU7sH3C3CAMMnQL75aE7RCjxjbgCJ1",
  "key17": "WTD3GeYNGpBCYqqS7fKyTzsFebsjDrkgNx4NNz41pk4pZ5j6Lrmmk75VKd4FsJ4yKucar6QyrhvdzFeKMn3FjdL",
  "key18": "3xnzFSZox4gJmjjjP2mwmgLAugsDgppS9dhnVscYn2goA2aZATogiqZLd4xPFr9UuQyy92bL5mF9ZH15gnPMszsC",
  "key19": "4GCYrR6cBdr7Wvf1efQ73MT4fiUX2qAEFhJcJk7tsPvTQC21CqijmKHxRc1zDtyYTWJfFo4roYQEGx39vrk55PV1",
  "key20": "5V7G1TXZCxXYX7RPUBL882zhasU6KbyWHp49Tu3TBr9YaCb7QoPPopbimMVKpVJATeeXtHWBpHaVov9wVMWtgAsB",
  "key21": "3qwyMh1H7z3irLW1acSV7DXkfktf1cKJYjiH5tpSb6H7e1heBD8feBQVdw4yXsmp9LFNDHvarWzSgVYdv4RYV2Bs",
  "key22": "41ymQZvJtFC72gMTCgjp4zp1rfSjFA5DqgdwhCuDtDGdxwrCn3WbsUTJWn74DxeV3QSTMdCERpFMGrt1NQ5DfHaC",
  "key23": "3biYerJaF6BTwi2L8eb9BYkkSqP2UyB15CUt9nX32frupwfJCKMWuE82xn8QVHEA65zBAPHAKGcvtiaga5MHkCRh",
  "key24": "2AUQnj8zrpSGHrs2JTpxwJ4zT1aiNgaJX9eb6R2b7BhX3fAuNwhpUPN1CNQC3hBdFrtDJ2KrsqertVCaf3z4x1uM",
  "key25": "65A4Efk4fDWyiBzxWUKp66uAYHpv7TBqqY383yhxZaF1SRJhPTf4PcBZxmFFRAG4ZtJCt7THAH1wv8RmUtomiqrB",
  "key26": "DH5X4mWtTVJyALVXb4dBGZetY8N3PiRdVQMxJEmkxEyGhFVQxHsGBug8eTv4ppdtxsHQReA5bAqkj3esSoRwjyR",
  "key27": "i1BdmztaA6ymKvW69VCYWgUVoe6B3EeuaC48E8gPFLvaEJgrDtt4YencrscHaNH3nzkBb6MJh44hZcWkwBhw1Zu",
  "key28": "2vzRxKpzcFHAWm6bWyzh2kGq2yTWPGPCUk1AFuiGJMoEaC5BUJxABYDqUTVvLvrmYSPBpW5e8znnBEwZsjSxNzSz",
  "key29": "5mv97tHhpA1amaQGRpmhJjVhgEQLCgAf8Xx8ohHKzN8wstJLMiru7WbjDfAhkLUshsCxD2EDJCQRBXck6FpWZJFT",
  "key30": "3mY71Z8U5GWYUHPM1HZhdLQyVoXwxVt1Gv7VmY41kbt8QBKRE8NciGJt651Vq71b1TBnTRVoEfbUPamZ4wvxA7Mn",
  "key31": "5nLctp5pSm41zi5nqKbPK1jAGqiZRRZ79TMapvGgkzXfXXf3j6sC38EMKqezYmbkDtZzLcAMNKqdhrczN3eVLWk2",
  "key32": "5t43mQ1xQnFebLBBanygVaKP8kk78tMEaoXE2V9i6GyJiMbKcvqqsuCgNftptP7dENSGGRu5BCJDfdiCiEyj2Yen"
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
