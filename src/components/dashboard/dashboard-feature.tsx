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
    "FMuWc3aE7E8ngZRwHeZo2gZWpsVLN72mWNYRfLtNCrKucFthAbuL2448rJ3pEGkzh9e3UMhgvAoenRRSwoi8MFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCj58pKjmbUmPX6S8NmKciFviRNUpRYCppwdSwTNEMf152wN4f9ZJnrLHeG1nLFRTgisHPxXuCnERtnXi3QUHgk",
  "key1": "5nDqQ2m4JeZqpgy6qJF9PBSR7wG8QavjdHCiotifZnhAmyX8k4ePgt28aeKcUosic9A7cppQbdjuNhRBLjXgsvEt",
  "key2": "mAoQYXvXWaAdH6DAfDhbABCTM5txHGMtE3tkBW7yzBvLAzV4Na5WqGVHh9MGSZLGzD7qu5oJq6TWjHegyyaJWw6",
  "key3": "4WLVDEWZb8jR3rwa8DK4m1LdtVk6RkxiTrDmYe9Rax4JcGo42kzxb17LmWX2XyZUfoyRSbvkU6CdzD7PrRyZuPxH",
  "key4": "2VWArvEo2fRiDHWYYq42RCrdLgUuDNcUXSy1sWSqjDXE1xGNeQUgPxuB4zdnz3iuDWvP5Hd9uoHgQgDHXQtoTyjL",
  "key5": "4EPuADxr8xWVfQECm5mZksFW9BSUP174hnD6Bbyhkeq5ehjwJ43cFFDseJCPFcrZVrkHJdRHPxNnMfeU9g7amK35",
  "key6": "5zhpfUCLd6UPcjxcLiiAXtYXCtzahAuBjMGQ5KvDBHozdcVzpEUR4DJUwc3jG3cJWrLCFZxMF4ggRrDp58W9A86Q",
  "key7": "4FYRmYdAPDu8bKL3ZYAFExmrfdxUQspGc3hEjnNgoRhyKyB8m8invntLdwE583A5eVPag47UhiKmiCz3ihMQw34Y",
  "key8": "4JR2ztoi2cHA1khf7hAoBTC4FVnngxseNepKDe68Z6iWsmQ3j1QC7GyZxwEv3wHjhxiiRHSSciU9gFfpaEdNaBkR",
  "key9": "226giHWokEW9fAbNabcBDd6drpUAc3PxvnfbUzTmqXdE7d6NnFPsACU4cZRKXGbBUnsRp7fvJpEmGVKVnw8GWGX1",
  "key10": "46HP7cua6HeiYnY1Vv8GdkuZJdCQkzwuySajJss23Yppf2xHjsNs1AwkYRDHLomgVqboRdxiWpNxinzFj9RCj1LP",
  "key11": "9HG7VAbXoKX7N4xxSfAXkjHT1DiNTrp3iA25Jc7A7pGZPyDTBhNSsL3pLEF2BtWyKpuip5FynWa7BTpd9G9N2bm",
  "key12": "4nBNRxP5s5BzLgXZfC8HcDgJR9KHVHjLpe8NQcYzM8Xs6rRzRxGNj8FScSzec24mBXfct8GmVZhJYyKYSw8f2HrQ",
  "key13": "57N9yVuje5WLN7vnsmHzxzLuTUnz9GdEUhEdF2tRxpESS3aFqJWzZ8xt3wB9T8EeJc6ubyvkDycEpH5DQphtgtcq",
  "key14": "5431EFAXqAGTe42j2Em4AJYAaJTdxk5PWNyrNyDTzM8ynbePJAq87YYLcW1Nvz6mbo12c7qVySnhFWEbaWSYtUjZ",
  "key15": "5XXQDViMhkgZjEAoLTfAHsZVEtNRHMJ5JGw6ZaWajSbbPUJXV2GNPqkuqauUe2Rexf99nakNnC7NHTwkRfMZvkh7",
  "key16": "3qyWZZyV2Q33BxkSYhtUtrCVrdatCHEmVT5nDFsbNQA7JrBWogQHp1YD4qBTshTEXvu4oTPTXjViTshV242pqTUJ",
  "key17": "47AkbeKEh3cmDrBEy3UFPPU7TeacdYVTMzB4d25aPVj2cG8giz4SmdRCMbJcnjymDHC1k7ZDd3NkFfYb55LYih27",
  "key18": "2V2LDSXM353Qx1gqomdjNkucUx3gBeESUWtpeQzC4bW7f5ENJvYDGwN1CfHYxgHN5Z8wYeyU1zN1y7ZThTUkZdiN",
  "key19": "4iWFG2Yy7yTVdi89s1hMP86SmzyiALF6udbNSsfPg9fAkmQn1Ey4SPpXQVB4RbwVwmACwt6pafVdWPARygMsu6kf",
  "key20": "5fCNqfcEETRm5FBWtbWX2RzDRUSG2fQY1VGmwHyefSFMFgNSaDYnQYJZR47BbUErTi8mf5sGKvVHArA7X3EEPnhH",
  "key21": "5s4vsA2sDLzY62qERnZsXTSYeD8Ks67RULWWfNcCS5zfDY27R5L3TmvdT1xJSJMJmbvEWgaiQs6F72fRfvFxnnqs",
  "key22": "3DQEypXHeJEyQ29fqXAkbN9Ki4zAzj7xEi5KAyTvD5Wd8TB9vroB19arLVm9axeZMPMZzNBA2aSW2SEdWyQt5YB6",
  "key23": "mL8kUKKDKEAzcqQ5uwcmVDvFA2Xip9v56YWSwyhmi9GyFTra5Wz99xKZikgWNyb3GreC4Nx1PiwLfbHrAbYLwrf",
  "key24": "2RLEsNGFViXjgY6huDnVPtYj4QKsivQam4pkRQb7FJWoVaGjj93kNUeF8kHLht1QsvchumLqNoom2URZ8UWYYt32",
  "key25": "5YejBkfERcwtkV1nuKq34T2eE3iKRqXtjLuypDLGzD3abCBpeUq83zurAh8JHmfW49QSEwek15X5uvFmhWmWyoBf",
  "key26": "5v1CjTWmMCUvh9UAULh96tmPvPQ59NjXagJZsT2rDuK86pwnYpy6UTE9rVPPPDZooS1dAiRoPMcrmVaLWLcg944P",
  "key27": "44pkbQcQXwYR7kk2dyx57FK1DeSsYEnKP9VKZFHJbLWof3RUWZ6WntXWd6ee57cFT1LT95BwC8niG3Lr32QwtoEJ",
  "key28": "42k67NW9A482qLjjoad3DZnhHojH3DqBUQ6cZ22j4NDeDzoZxK5r5GVZQyhe7mwYLrt1XWvfV8KjbZfxoaA67ZtY",
  "key29": "5qxXparU2EnpRzBp3X8ykVDdLLp95u2D99CKP2JTDH6tkNB6Yq4zZvhuRrZS8qjnwod7NtbrWjYXhzGRoaMV7yK7",
  "key30": "5waFQw46NBqGuuofwSK1sQ975VsHtw6TDG2yhc4Pw4d74R1nGCC85nhsA9or757zUDtpR8hG4EXofqKesnJWLqHS",
  "key31": "4HYK6HnyUFbJnWSNAdXMnJP8hXhDRzqjy2bbPe4RvuAXJS7k2SLDfSbGVXiGZ194bdVCdwgDAWw6LGMNgCFxNMr4",
  "key32": "CpgsHSBFAtF9fGABErqJmmFdh4di3mvB3Wfz5SfESEKmh1KPHaofssu2WGERSiJ4szX2Xxnx6iqUWkPcXtQPs5w",
  "key33": "5hyjWqWWs7muCtmcxCMh9cq4TLYcmgv2wFWMjP3vvgJpEbxSZowJ4Y9PTnrUqXZdXdCW9khDsBhRWkNpPnHvatRd",
  "key34": "5MpWt8fziCrVZRqtwcvvP7aMHLFQyYAFdibsCxqCNuPEDu59vuhbeLLYcJr8XWZTKvP1VQsxGPvG9Jw8qM4qm4Q3",
  "key35": "5FLjaU2UuR9KNS41HV1BcgyqJjGAnUyW4sCGFEYZEPuAc54MZ8at1x7TaAdJcMKkxBEappXPWNUH8muuDbrqV5tr",
  "key36": "5HZ6Mpvk9z97eHpavzrHGFKYe5DCWPCmRg6vfYxtzn76mVudrcfiz6r9U5u7prejE9E8nXnKAR71RSLsfojUh7sM"
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
