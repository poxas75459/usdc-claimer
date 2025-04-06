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
    "SVXVkaQdxhE8zXbQs61ZFDn4uLBdNvAGsHBN6egNJLQGSEWTEH5f43icnLPodKeX1YAHT8wLP44kADWqzbhT942"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKERNMQjz7q5gZv8kBjj64uJoSLLRspRe9CdzVqjgQm5nmzva7Fag3L3HZzjhxm84xhtFmTV9iHA4dsNednVw9J",
  "key1": "3KQSh2Y7gzxT4zLdNxqrcP1WvPx2uFaGq185H2gpzpEQWJ7dWt8W3Jpy7zshBseTSE7fatoFFRffefw67JcSPAxd",
  "key2": "2Z3VqduE3xyV4xBbtpq8qpLXJ5Q6ixXnez9KCk4ncWBy8UMmF9T5hwSKTa9zMqTLETTDBnZdc3Ur2Dzdgm7PtbRK",
  "key3": "4mT8RvkHtYvFqRv88RWtn7qxRLT3NyHRKf8yD6VPPGPTBPHtkYwK7RHiWRPU6xghE62UHG7PfhXPYDDaRAsoen3Q",
  "key4": "3WhVEvjyyoBon1JPkUBoGTWv9XH5WY8KhGhCqCCZCimuEbuSvnk2o3t14HHg7zF8DRp1CdKHHvt7oWQBdPr49YMv",
  "key5": "2ZVxX9XtJrSV6FtXaMu6gepXTip4odJo4BhpjySrdyTazyWpDzeDxRhTh8Ri1eExGTgwVp2izSRExNuEBWL9gqai",
  "key6": "bKL1qgRQJTUmyCLAFKPQRZPGCSXt4G7BYXiK1iGxMSLdV1XmMh91763esBPNcdQr2m7aF4ZgeBfVCnet4k8yTaq",
  "key7": "4dQmiQnck8ET9sdvjPoSwhrkMimaFJpdtK4sPpfgoujBzYCXf3XqNFJmt9w4H5hCWq325sCN3arGVzaZfi4Tbem9",
  "key8": "4Eg5XM8b229injCJ9fTqVN91Kfdhv9jRZPpBhrsmZgGxa4g9FaW2C93XHEV9gkLML2s1scn42tABQ8Nkr5EPRCVq",
  "key9": "SFgs4BELrTLiL98mxodbtm1tWX2frFr4f5BdbGorVb6MvPh55xKnvnDPgrv9FYqcq8rD6EGagqd9ZKTwihMWSKu",
  "key10": "38WnxQ4cjHmw38rhDaktxAemuV88yMen5VzsWg9KtLtP7siPxyiVyARptS5K2F56iRSayh6D4koYLf5DfGm8xjor",
  "key11": "5vjcJCvCvJwx42NNrNrrg5ZXozNN4mN55ACjKTA4yP7ds5Zcqe7VhwM7tZ4cT9G6DwdpJobUDEXKidBDercPUNFa",
  "key12": "ZPmUGgGfVMFnuyb65hcaMBr2ZBFccdoaiHr17TyQgCpgmtRefyy75Cu4CQkpGCbFvq3f65Z3ACGuW8gcEu6uoPi",
  "key13": "SvkRNfwYTq8hdXmy9Z5DvVUzttSrQTnYQPq8QMcHtRVQj7khzb9bbgzJpqX2Usay1N36zrCnpQTdQD9ttWsaYHr",
  "key14": "5dWShcRbG7bd8JZyF3WyS7z9Mm1FWge1WJRRPTsetMkqbDrzpfEE1MpLAEDMxq8Wpz7M3WGKxTHFybbskHB3X6h3",
  "key15": "2iqM13Sphi98kxE3T6dBHuVaMKLBa1bygAU3jHiEd4Be3PoGn8AwnqAQAeu6xPC4T5NrrmrLBS9DRfh2oaumM2QH",
  "key16": "4j1PAViPW4uq83gcv5SeDvqgPC6HKMwUZa2iedKvQNsHEjFGhTotamXJ8q2ibLV7rKnSzSeM5mVxSkzqSqHJvBoJ",
  "key17": "2XuTB1zBCi1nM7tRoZCBGPKGFwQMSK8wfuK4DZCwdZBS2AHZ5q9G1QZLefvDtaiu5hWEwDdKxiJTfxsjFAqohoxm",
  "key18": "5GZ6uyCTxEBYgRwmrKJKwCRYFVbpmW4wUEyiLDTtJfphfpY2kRPaUeoZcsNUUCLbvteQoMrsdDnyLPcrHQBZGfFK",
  "key19": "2BKaBBL96y86gTNGkPWF5vTwrLG6JfY9WFZyhuJaYkNB4wT6QpS6bBX5nCFVUxoeyJa2iLWf97MkawhTsHNxSJTJ",
  "key20": "5PXywKJPkmjXjP1ohUVh8oTyBW72C1WutHm3NuLreCjmFMSKVYZeD2tr3rHadpUGLe8mG2BLDeDD2XZRAuY8zyYa",
  "key21": "23f5JhNiMBLQCZcbJU8XXS6duneq6qDY2SX9ou22k5ttDJECMUfj9JoiTAKXiLGfHE6dmTof5BSBxsGtxsgLBr2T",
  "key22": "4Zf5A67TSXEzZrqVA3umMxBt5ZD5UXYtKKRTbMR73kbpKBWYsHNkKZsPkUyBnH3qjcWX4zhau8FAHZmJeTQdHVu9",
  "key23": "5iUJqNvBrFc4nW5JenhvgdZ1wm9XYwDeDsBkZty8kA2bc2xrMBHRk3wirZMNDWSnFFoWrGjxcGwg9PkZuRF7GK93",
  "key24": "2JBP7xni4B8F9HQQznGcSrC42o8dnDb2tyuTLzH1u9xgZ5CN4exc5wuCRoTeCArLeiawCWyGVBLfa7qGCCv29Te5",
  "key25": "3YEwF2U6YDcX3KTvgDGBUbtzDYBbmrotjsSfJV1MyrAj1s4d3Eo9xMdPVWb6KhhnPccYcYtkLKVHtbkpj6exmzXy"
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
