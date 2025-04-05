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
    "3dRufkGJ2BkaSBY69CNxgftHSvEDA2sj6FCQR3x6Hzmi7oJeHtqzGnc2RvNpuGXi1wo11sYGXfY1X4VzkXD1H8rL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YczMDJC6YRX5jut2yP5P31NvEyzwqWbLo6jfrEp8DEDxvadrJJDuvny3sLnQoj2h8ocSie8yiWVvm1L9a1aqqWW",
  "key1": "5LTY8w8MXHa1VbYNPHFFJYwbV2QxxL6Uc6bteEhuw3y2gbkpRv5zqxdcVFuAdht4msGKCYRq5CTehrs4nFyLJp6d",
  "key2": "2rwxqo3t8j66vGS5PadjLmWoGLD9WX2qXquU9BNPdsTpbypDHiE257gDVaxUS8QbKnd6YV3NoWcQj965EKSeb7BG",
  "key3": "2HdnmhfC8sw1wEXYG1cJy9NoRcWm688WKUVD97EaNJ17YHW3tsT7FWghxvwynySrp9AKq64UfQi5HgxBSVj7SLxB",
  "key4": "2jcGxEg5vCzBTmX14b85n4aqmsWEpG54djWaWcCMiG1faSharqqWbLRzVCv246UurR5VqyQ2qZsELg2Hy7jqfKAb",
  "key5": "5DBdjqi4ev3spvv6EcpJad9vCEVvAGcuCisst2Jr2G1mtA6oCrbBcR9t5iZDbAP2T6ciUYNLG2cmY28KyDb6jQVu",
  "key6": "Sgasj6JpHjkZBo3NtNWrbVzhT32dths7V9gQ7b2yRkXhGNDaPzmfq58o8kXaCoiSW4AdwrmSdLzTnQfdmkwfoir",
  "key7": "4F52MdeP9UQpdeGHpgtkmvLvASZpghMRCsvSt2zBe6xUHHPbk6squDoQsWmSCEb2ktURYvCVLUpiE8oUCAwthVZ2",
  "key8": "HBHxkZDD5sum4f2syjoPYFgAo6mQRzLKQffHV5ZWs8wRp2NEnsphntRaTuQP2DaXkgyd9xE6rSt4hH3hKEikp2M",
  "key9": "co5ZqzGg38ECbTEdzy1zZp1E8CGDaFhKs9nRGs3tTpa4zB9d5xX5gv99bTVuzR3GDFNGGGiYAkN1cLLChgoMp8o",
  "key10": "3sGvbUdHM3fDGr7NuWckcP9NbfMbL1XVJivFJx2cYVJ1knR6KygaxCeC3v3eqDwYmj6VYtuPzFRDGFcsrEidiDWn",
  "key11": "53TQxh22QMcK4USoPpT9RmcFPtdYrqw91USbtDHoQXsax5wJNRxzSFQU2onCkuvHLrgHoDx1mjcUdQhxhyUQZQee",
  "key12": "27Rnu5cCSztKmCQPNVTjgg8wbWusaN7GbZBpVNdZw9zwrTRSDV8Dcusingoi9fUUCUwfUx5MBNA6L38p1mduiYzn",
  "key13": "5tco4eAQxRhhUBmChcdTS42pgYmqhhzTJQoyrqhQ4VL7u5WxtW8d37sUbszwxE4XVaKAGYU8qcQ5r4o9oD2PwvVt",
  "key14": "3qi9W1hh8QEkvSgoAQeFTufruDT6q4ffRWh1W28VMUtegnmW7t4LpgHoz6VjcxTy6abDiDYDQE9idCmVkid1K6kK",
  "key15": "4bQtHWANVe3s8sMJLzBuMGDjf2bzv8aziwhBPshQdUMZWNVbAQma1gLzaMkTE5XwWYxTBBS3bt1g7W5etNWVSfvs",
  "key16": "5q46MDhEJm3hCSXuBo7g4QjK7rXUh2dvsZZETcHUQyzPDnVLZExcxsUW5uBMCsc5fVhi1rNLndvQ7yGM4tbJrwvo",
  "key17": "5rsknT2cMXbcem258F6aH13CxcmUeDsm3EZJADfTPmQzA3pVddKvC7zHD2PLYCdjpxRBWiqLnTJqG6SQRjuihfVb",
  "key18": "55mqxjtsJaQBS1mGScaoR3pAHyQtVV6HPHDvedt5vcvUhuqpSrPWqq67MKa6HzMDbrDnwntvsjHFbZmuSWHnD4XQ",
  "key19": "5FrFzcEBjuJJyQqsfDGZYfTHpJD5ZVqAYB6JUX4b2s7e9pEh9HCQrAcHBGuxqs79qJuuEhCmCWQd8prMD4a4SrrB",
  "key20": "4pYtvgYN2bUbtFYs7z9rcXwbyW4jw2DhR4mQK6Hq49Hajk16ndBZNS8pdCU5vasKvYUqGc5uHYBSVbpcLLQBZLPB",
  "key21": "2ihuMVg12Pc4cKCbbpa1HZudSmanth2dKuR3cxnpR8mBqjgCPw9fsR1MjGbUtKY9f9GC8gbRJm8JcbmbeqzikBNg",
  "key22": "2tyUcAvjt28jAsKDWBg86HPvvG6Jnptru6c1eT7YgrmrCYnu7v41qQK6XQybrrGU7mYXJmT14fiu4qbaVZcCZPfP",
  "key23": "3G1648uSL5LownM95DpSjNj7WZBZo3mTHyEi1PxFeZV7EiQqnUBjGjfV8wDEjFiVQTkMYdiuwvfQv4sqiXHFPD6Y",
  "key24": "4Ayw4dMyPiN9ue8Qycma4Rz7zZFQ8FgRYFA5bV8zLZPweHxnBTpNs2Jtim33rTPG5jdwiWYxVch3X6LWSNP5pmoi",
  "key25": "5bFsSMfmrHpqGoqJj6pYySypHhBQq3VWC2Ty8NDsgHrk5TMYctFGsPtW9PgXYTCyDULQA5K5tC7CzBk1udKs9uYC",
  "key26": "26JVS2XoxDgXSNTfZH6CCLz4qKnz8ScjsnMXNYj6owvD2Ae2s6ccXJpioM8Wd9f6HAzyhetb2HJ2LRCHexfHH3Bu",
  "key27": "5JS2oFNFKJFpZQU5K8iLDpUnc9ESZFCkQEX8FsHNACkriNK6e5HieqjvXf3eyvV8GLTK6fS6QKubY6E8WQbmRQVq",
  "key28": "wyi854AwNFdFrd62eyzDtbGhSJtPr9VXCRBMkjdi8EwrrEjAgP8NYsVsFLvErwchCxbMjNWLPDPhAQRgCUqFFnD",
  "key29": "5n8B7ZxqqWFirterfNciYJc5LZWAmj8nCQQM4MgN64gYvm4b21B7Jfvs83byz3pHNNYq2FpsMUh9QM4W3bqwJ5cD",
  "key30": "54Pxjck4RKSgdxhSRvEPEvBvavW6S5NBnet2s9oGF8Pi48RWEDPjKGyLhR3TdF3kw79KzquZikSTNqrbb1ATHSz2",
  "key31": "2BCosECvpWKJQna2kU78RADXwdQVjny6rBQLhFrWLEmJrroCoXgtfZUwYsrBSuh7Yp7oHWKzbbC5sthRkNAdx5xw"
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
