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
    "QsE5ckmzxvaLvLY4Tx4eXFin5Ru1YWSVb4hecUgEMJgduRmTW7zoiUs9GNXDe2XMbhxqUCjipkixa2QR7CUrzpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cxiLszZpenbwWRjWgF4Vn5VWiUdXQtpYtFv4k2PU853WqngvGZSgiEyLyG4CRqsH6rU8gETov5g3UNq8UUDxmNu",
  "key1": "2g7VYaK1nWykDhWTrB1iz7Dnq3gEof9KsHzc5SfM2RcgBRUG7bpYBy3ymhnkyoWJvtTg3M9xHxN4ctd6caPox8H5",
  "key2": "3CBFEzwn7TVmQSG9W4PgFbioiPikk4YUed62mj6MGNwga9DjqWJdsQfCQQLrzDoAJHdUKFCSy3QMdBzBpT2KhBSb",
  "key3": "5AL8vVuq6N7f8K87m2XNCCXpTBUvke5XD6LNkqEpS2iMAquXiWVHDPnWFhrWQL3rnB9gGo8C74fRU712dix9wnZa",
  "key4": "5dAey8FmSMofM6TvhkaJVRYbYGNGt59CkMGc1hQXwFXsL3pqcK1m4gwtyUBWwkKkBUovFinGWGGHaqLRtDuUZ7iV",
  "key5": "3p7Tn6eznuaNzc6gVxzu2uSnJLDbgGZgi1B1DgE5R5m7wyF97HxHU3yJmTeppvzppZ47MgymV6TCunr3E9uVMJvW",
  "key6": "4Nd9Wd3sY1koMT6urTRfpwrZy9Z2s3bSkwS25w8cQXZEtNBTnZfTuHU78jyUCL381UFrDzix4vQEPamqa1Keeeh2",
  "key7": "4pGn9BJwafj1fzCpPaR8z9jkQ8vx616c673ZKJ4MYxQHXB4KQVuQLookAaDHjQUQCasdKAmZ9CwddHr8SWKvjPyc",
  "key8": "24mGPnoMT3tTLBM5DVeeEkzKCDyCBHWYGGPodzsCsHfyJrfQPN9DrBYMB5yM7wDoTj681UihFGpu4ns1LzT25DB7",
  "key9": "p4Wsi8GPkyDLWMDqkkn194ZzmCn6HU2nKXs95eyMM5DL13eSfdrhHY67nAMdVsG6NBxHh1YAkjVkFtiu8RUVdC6",
  "key10": "2Xc7c9TUKyyfzN4bZxDB2PBXSDAN5FTo67eyqRPfJtSuHzcH8gPA326FLp7J34pY4ZZeFdc2kmW9YwUdha7qaeQY",
  "key11": "2zmVD7FJjGK2H6wtFnH3oHX9ebCheDVBrg2AeTnJZnXxVeuS6GKp2EdyTqKbcHWnGzQS2d7YhuxhiV7MzSMrxY99",
  "key12": "3Xa5gKJyb6xF5M87jmbYQsrvdwLKrZPssNcfn9hLoGTSo6EVvuuXCZh7CWMEM9VKsi1g6iWVCCScbvcKdnsJPQMY",
  "key13": "3RwFrjBoAnv7MiBV4eL4931GyzuiKEyecsv5ide8dMd5sCf6waGxzKgboc4fHXqrTYyU4A8oNSGuvk48yiCDSFr3",
  "key14": "2B4jGffdZgnM2VnTEtWR74JcUL8d8yeQawdJhX5Pcy9kfr9FKjC5cqCdEcrNx83xqgNGtf2Nf7nPZKUKMVXZ9cnG",
  "key15": "3C92siYUyCHaRB6VLhfyhpRhEWwCEQyqzKKzHEtDQhqMKriNeuWvCHHT9jn2C3pTswXY1G3PUbZ1LCp4aUXstpjw",
  "key16": "7U7WWRhRnWWwZ1TKhXSarRt11ZESUQbWGxxs4rrNS7ApM4chkF2u3DVcwUyfKPrmcLfZGqKUtMT2w3Tj4VgLeAj",
  "key17": "2ZBJdHXdy3wSGdsScTXrQaopbhm5RBogStUXHGNPciDfvCJxphyspnayg9SHMTN6u4ShHDnf1rygzWizJCxfMT24",
  "key18": "2o5kPjmiE7EhKmYKpj3zMqJpobgZqa7HYsajebLKn5uaCKEX6Z6KGP1bJAqgVr2z2Bz6R8XdY2xjWzLAW42ZrL9G",
  "key19": "61HF6s1KYTRR6qtxw96fveYW127Nt32P4JPqHbLC1pt7hExie6pck8FroxwRjukFx6zWnEZJZewtPsrHjiKMcj9D",
  "key20": "5eo93Pbae9L1T9gsZTYxshiZ4wxrmU4WCFQ8FMfDjWJ3uqkVtFoMuebuxyuXgt1q2XqDDc1ACd8wSNrabRkg7Z9Y",
  "key21": "4d9iJXgVTE6LpRqtdNdvX8udLHQRJLwtWprSLNrELPR9D9i4REgSK81jxfNq92k5hhkS3nEERS2q9mmWKnGYznyM",
  "key22": "3yfcEs7z7BtnEDcSGNmYDZ911694cM5b5dCaZG5mmXdvgCDimFzBUqNoukCJQzfQaqcEgYkeAiTkJFXHVX3cJsRv",
  "key23": "4PpGWrHApQS6Z9pZ83ozxf8kLP4b2g7s6mPwTX2uFFkjtqW3CdHmcpx2CQebYtL7e1jVeAt6NjzLE9xw9scy8f2P",
  "key24": "5xNPrAsyevAS5xE5C3npW294vYoRmffgZDgfPUXnCeFWHR7ptH9VD6TEUBpr1pww2ZZNLw1Q2RY5pPMFqepoXDWW",
  "key25": "4wvbtLVdNTjshzRY7UBxcCVo3a9EZQqApZRz9dLJ4BrxvqkFMU68dsXiNz2mSsWhmLiq1KmicucP9kjocR34Z735",
  "key26": "4PaS8fQrbZDebRVMg2m4VkNFVnYoSPzWkEYi4ocgN58aJaDGh4QBc23HmjvgJgV4hSpew9c8MJpVJHsLJVWrDPbh",
  "key27": "4v7AL2DineD54fHacAy9kCU67iT7Dt2EpocxWuNNja5fr5esZVvw4xvGkmEMPaRDADFHeRzVUPyeXnsKS5sS6kQ1",
  "key28": "34GFyMM1QjUXfwkriYp5ne4GWD4x6PN53QP3AUZsR7mHUV9pf6jzggxez5LC3yY97zxzqYqnMo4XkmNcvhRCBcLW"
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
