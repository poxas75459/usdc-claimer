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
    "uAJtiQ3w8vvbZeyjSdJwZMM397sSuTQg99SBmBXFrGZnZRRz1WtMeNdsEXUjynMRy6SoVfJi8kBHwFfSuma49s6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhZu6UacPU3UzZT23BmECvLbw2GJ7C96JCxFEwBCwpBVEjuJAdCqFDAorH89Qvr3Yn36UwbogNGxSyhf5mzYsbx",
  "key1": "8jqAaQ5uyATUhDqdKyVeUGWb2XuREEavHViNwtNoshBiQFzFskytWzarKrMgdjRNHqsWYijdUMhoWHrucEzfJXA",
  "key2": "4BGeL5F9rdAwEaWj5Yu3uAHmeMvvyfbQc9AmRdfwRebPttci5WcE5NGqYTPnoUTy11gbVbpJ3pUkXpBbaD6V4pTE",
  "key3": "3zFcF7nDBTSTMvV1b9kptcgZvMSXPYuNRRVjNH36oKftD7N6t3iXDLBXXrW1THZk51rpBvBcouFsqHkrfN7ENoyL",
  "key4": "4xP63SrSVRp7E2bqorawaZ9t463CxgCcuSMAHfTCewyZZ7AbdH2Pkd92Qbz3NoaVs6aEMihSw1SZJQmXGSoXd5pd",
  "key5": "FkAnqjNTpZ9kCf8VK7spiKgi1VYojxvF6PfwgdSUyfWigp9G1LMKwCDDCYngNuuPevxV5nSVszrJN1sbvKVWmeS",
  "key6": "5RZAfexSmwqaS49rQ9Z8qKe3AVeyYxPR325XgfwwqcNVEEW9J9gUUUezyFKgWVdC4LpZCiszAzHftVsp3hqZeocK",
  "key7": "noKfZoKdbq5HNsf3CrKfgZuyp66nzvYnY7qoTUq8XuK5swoXNfazCFPH2cjEAVU8aBgNT82oTM4rQVhEdRy38FQ",
  "key8": "2XmprKBZMdAUdEa9g7RNd8HmWukw2xMshps87BuevL5sRRTLwDPcciv2ZE3N1D6YUZ91WfQffnky9RAGGEe8yjix",
  "key9": "5n7Wxz5mKpp4g2RFUxwH6zUrnUv13GKysF96cz4vSmrHF8UZ3X7qXvQE3rmKJV1kDfj8M6tXuQ9F2teWdQ3NFvEN",
  "key10": "2KppafgFqqQEpJJekjpNga4weLmwmByQvVT9s1qBSgru7hYP6Bd3nnKw9AFH4M6x6Jw4GjkxpyFaJf3R5JCHsM1S",
  "key11": "4j4k5WUALtmGiYWWaU3YzGm17qHpyiUjNnzLaTF3R9smyMibU34r8mdhksvFJcHtsASmWrGDwUq8U4tDytzYHRxD",
  "key12": "4cVUY9ZCrS3rxmtNNecQJyU9worukf9doH54jMnSsnTMDtoWrBRYaGPEbAmogFTWNhDYf1GZ6mrmrDfwXz1M9tjQ",
  "key13": "2zj8AJnJaQ9wrZKdu6YxEKPVanLCuNw5kGzKuGDBBQMSiSWjDtUPXu5LM38Tg3Demnzuv5g3YCHSEjMrJDs77LDV",
  "key14": "4gT6QMVBsSKBreEUT7JqcubNN3wH3oPnRga4xuQ1dQpxEyn663crhWQyGgbv5NHFxdNRTgQf26iSmrSraRNdpptK",
  "key15": "aLHUYG7RAtfJ9XTDuF13JkZ5YKYtjRvgJLybjssAhLVVEWCPqrNH61vjvjhp9wtgAAdACmp3ozoAMgoXyq5QyJj",
  "key16": "5Fhob5YwopFFWhzZ9TdggrUcq2nKj18PV8ZSbkEks1NayQ62fYgGycmsQJ3zEYQusBKvHrBSsqxsxBxLqXhrMyKq",
  "key17": "3yqcdf44ANsiTvnXpwTKJxNQ7EyUCAecGTcKFi9YeFgQRXcmBVZurb1ZnZXf5R3zDnGwoPzS3CLYvkaDL12DRUz",
  "key18": "2c94Fo1TdsJzFwQpjhNHdfkXRQXFea8W5tYAebmKaXVZvRE11yU1G8C19CMazFo8Ed8xNWbj49ZREaJ46ZC74WWW",
  "key19": "2a179GQayVjWU7iHETPbAcscBwTCnrHnVbfxWJsMuWmzS5RxZa5SLY78HaghrZNfPjCDJxLcUZHo6mRBWNkWT5u5",
  "key20": "4YbRHkDuDD6tqRXQRsKQSPTLMd5giD5jPZqj48SsBdHw7etfKpVoMWYTfWbSjAcdGCCLLUbXmbCaBeCY69avyNMi",
  "key21": "cNP5NSW4u8YGybfzn8YuYz3Mp74137JGhYQnhK2soMDe1NNiqi3NzJHAu1PNfkrC1pbA6nAn5mz45pYv9aSS9Ri",
  "key22": "3Pb4MqkPQNkr9ZwQRyvAkBkC5PNc55xKeDzUM8MyUVc4ugGYoCS8D5xbrDinWPo4qeQhvt3LbvX55Ez7bm9w916J",
  "key23": "3SPqKXade1t88A8P9iUGyniEXtnNTKjLt6JsWyGu5HajZu2rkrjHKHFDR1EfL6pbTgvGK7r6FkVPE29ynaj5DESj",
  "key24": "FcT3JLdDJ4VsDrFYDtwj92MwCjv7fy1B83pUUQtEaq8iHCmtFeMrY5h7AN2AQ8uxYwbsSC3R3y9i8M7VqUmxrTu",
  "key25": "5vZjCdRpFoGT7L4mNHipGQSukL29XurAqiY8hhk7D7qk7QVZWfoAofKRQydK3yhCeUCXSKxNBQiFyHdb3F2pwUkm",
  "key26": "23UW9NchFg2GTKSJ2dKGTip9hL3XNmQW6SrC6bb1ByRtfhLmTPqm9UCZfEVZfGwSPZz3hH5gWQjij33WAFohhUN6",
  "key27": "4CJ9vwkebX64MJgU7dMNRWRwEXgwoqGmFH4vGyUydkTeYRVmUSyCGkPJ1uxreXLV8CDWuYXdzybtcnoJWBTrSqju",
  "key28": "3BUm1ftdUTyfJPGtTDfU3wqkkfAWePFXVs48NQ4YggyCrnLT2DVPBRqetSCTEVzgubbw1xQ28DdpqEDSVEx55xvH"
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
