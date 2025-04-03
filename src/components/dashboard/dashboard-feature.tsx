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
    "y59QQrqsRLgnd1SNYWL3uNt149omsgZzATMWAep7bdBZsSxGH9kRKxiHyMFZG65wQaat5fqU4DMLcph8K7bCpsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tm2uVcigBzjg6URV2a1GJXEnAhBygSR5zNY3UoN6EHLehGFJsXARCd7zGVcqegjQvCyfdE2kM6GkrhxhvDqGks4",
  "key1": "3yuCjzjfEi6KbeDcPSwujJw4RGyxXjaFaCrx78XwjDfJq1aTamJ9jei8YxRoqxLShsXppFd2CHrUGc7iPMu2DuWk",
  "key2": "5wabRbCCo57H9r86EuQJnL4bq6bfnHDTo7CdTVMzwLDS4kSVs8ZE73iFLa7xJKApoQXtikeXUgTmfhrkxhLGD5Y9",
  "key3": "44iJxJrkaWQPMMAVAHLkgfc9WfaGV92WJq7GdethbgHfgDxVKLP7vESbPZt1jisL5UsbHSo6gJVwXC4JinZPb3y6",
  "key4": "4ncUizjtzjC5cvDAX8GjUqvEusWEFCxas7dGU1ndK8JA9KYrji3PE8vRR1wA4weHjKUyNyn3zmcgyQKxxrDHEbLF",
  "key5": "21TsLBMEjySyXC7WcuTCqcqaHGhr9ZNrM7raL66U32kcu9v1stTJ5nbjAb7Qp857n5eHHhtu1jFzPwDqhi8PLSnE",
  "key6": "5itSZccEoHV7MsKxqhAzNS9S426FmHMjjAT8RNcU3xzhKhckcd2Qms6D2fQUv5W1eaxu6kRHLScGuqPCXreS8wE",
  "key7": "3MAo199nprDH6LGpvxqzyx56PafABqBhbdWQ5MDcFXgB8fAchXM8jEeH8HfLpbBVhk7J3BqYZh2fEUnjVBKUHip3",
  "key8": "4DckVHKFUgZf9k5vq7iC1bVFNarxpPt4uSjoGQqkHPHq6ohCqN7gBaLnyJjMPQ9jYTKvT63duxFB5dqyCkkvUY7G",
  "key9": "2VxsMCL12T7Wb2fqX6nkZFignkAfPdsFvFYN9RUFDSYiAejFtQXb7eKbWbjP84kQbL4x3qtJBJdtG3K6aF3sDwVr",
  "key10": "5kSuPUsqCf1sELoPjQFD2cuEGGVcZ91BoHjgYcxhzSjWLeDncx7VFLtrcsA5e1z7z5fam8JiJSoETXLdXDJsqYgt",
  "key11": "5jtxfq68ypeH3DxkQiNZ9j3bbcDLMwDJxtDRVkkw7zFyCyasKzLuXUkWJjLwHx72vWb69Wj2wWXkedrpAKQAVBHw",
  "key12": "tq6e1nUEH5Lp593s8aZJexaNUPCJHKJEmnjSdrYjPxziJw7RKV3uYbQK5iymWPawPndekwD3TVk7v3gRd3LKTen",
  "key13": "9h6AgXNX4ne2xqzsFP3chydJzNDAETYQgoVFQCf4jdDNZXpsUTKDmq6tswdRMWLXFPp5Z2SmzdKPFs3SLKvtvKh",
  "key14": "4r2tfEjPnAkSwS5uxR1mAie8D5NH8CTY6Wuiq64Jp7fgH8EcXVCF9nxev4HRksDtbRTax2DKEqASFhz8kRUVkNug",
  "key15": "4BfMNXCRRNkRUPy8usNTwhv9yb7fNxZRJpMCmm9mCXzoLARQ484mgXgaYj4FpLHc7AiKnP48Soc4zYqhYMUssWWm",
  "key16": "2tutrRDUqXPQJCVzyQDn3RDwtKjp5iz1zHYN6sE7yEaUASrdwX58oneaNNj8bv2hS84upFcRGY2hizjSdtNun8N3",
  "key17": "5JCWnPVePiJCArxvR8G6BqKUmihE1QWtxXjxTZqCJLHX4Yg3jGBQX5DLFLaiymuWqf1kdfvg6Bgo84u2MejdaVzq",
  "key18": "4wpEG6wAK5ACsCXAKNbfm2JMSyxEhEpKZMJJ95qSdxnVm8YQp6bV2Fq8nVA3z5SNtSsjxd2VnAHkPw8VGu3qJyii",
  "key19": "5GedBeisLXhYMAW9ieDTtHhPgnjjV9YaaEJEYUC7M9GLsQnMBBLpCsr9wNTxLwKrC9kM8YdMc9CPs66b79WtgoQo",
  "key20": "PrS59LCq8CtFtzLMu3aY3qwmd3489qMaihFu8MVY5UPuEwA8eJiYHUEW3jFuFnRxATf8hRuJDXLJvfjoQ3hKET1",
  "key21": "5VQVZTVSUfog25yvcQQMkrRda6UrWfrUFMw8denZcB4HaZxMGZAFH9tYz6GBtJiMPuRR4QyfKBq2PdJiukGnySNh",
  "key22": "3YntSNjTGLyK8w36x89oTpvbSYZd9R5td7mY6gCraSGY3dY8Sv3UDRTXanbDJ1QYPM83Ptwp25gxDK19H5TERg7r",
  "key23": "2GCec9QSjnHc6SNxHmE5vGWicwEwDvmgtwFNhePYigoKBL4UReGaThQ8pV9SpHsgJHDU7tm77Vh2Xp5B8URWr6tb",
  "key24": "38EmgZvDW7AkC5t2cx14vxzsqRxLVTr1GfnzDUZqHTmURi3NwLMYN2FCbFPXS11TUbEiiZSWJxZ4Q9HiLiyBNedb",
  "key25": "3DsBS68z8ASarYeof92fiYwwMFYtaFuCwVfWxBgNDUACA9XK4adPcHVHkSG9K232t6XkP3wxFsu347FVSjkNBmS9",
  "key26": "53zLhyp7xmJT8tMUE13ofhXjgnKJutXmxEm6NUJQwpfn43TameBXv23tv6G7y7xYMvcqwu16gXhnKt3iK3Mv8aGF",
  "key27": "2V2SY83HZWDjoCoFuUovNSqDNRqHhKKq5BR2hLY2E3bPyhryCYjfCvacjFV2wD1yvAKKGcQWPwqpGnz3A2rWKmCS"
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
