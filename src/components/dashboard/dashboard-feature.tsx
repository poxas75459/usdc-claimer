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
    "2uYFbddviRibFneBS4m7pDjUsH3VNpR3x7cXAWgaRwYVEoZ6X48uXRzWkJz3mtzT6zjb7CxRDG56jhdtmHfx9t2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6EzgjMu1eTnTcw8gP9aTBYQpyBRYgXrX9oY7WCz5ZWEjvAX8ruciML7atwGu6gEeNntC6TfVtJUFrZtvDJUyR2",
  "key1": "4LEHUmt4nqwWBACMKv63H5UmxbHwDWJQxZKHqBrAhPsU4MPh36sBrYQ3cVXTtgaPxe2QXr1RA2tatehPbcgDXNtZ",
  "key2": "KxXbMnF7Uh9CJAprpwEybgToqmTRfAqEMWS1REhf446R93jYaqcTHAGLutTSqT2x44zp8XmJiistsy7UGAiqzbN",
  "key3": "4vqyEV3iAUunnaKfGNjUtmSTQ1qZkZ4L3CaJN3NpCGuXD5ed7SuS9vkF66S9Fer8ctYAeX8axsH2HpUr9Hw4iwZJ",
  "key4": "5iAKPv6Eu5G4oPAeBTsqsMjy9MBPnACWcu9KgmmmoHnkwd36duq6qCbCk9yZsba2vjKn4uAN6y681No8LdPYsgSH",
  "key5": "31FhEq95a5izJdyXpNBRm2J4AVGfbPjaCHERuEqKU7EuaTXThUyjmZcwAqX5HPECxaXqDK7sXmAmKdrGmoYd2GGT",
  "key6": "5MNXkJKVUuDtYHYQnF76FSYMnqhh4TnthHpAk8kPEQD8uuNnqSdXvSZBAa2i66FzFPwYCwQa4m8AejBHRL9CQiXK",
  "key7": "28uz3dqqtPSbpVm7EqSShFfAGWqFFzzmDrCwYPJsLKhsG7S68i5sFW4aK1dey7Cp8PnarKSh3b3BdMz8wz4q1Eju",
  "key8": "3q1dTzg28JybqD3coWLNhYba2qZREWL1ugTRkya7ZU7DzKDGVVWSmyBvLyfxpKdQQmy5nEX7cQhGYLvUhYVwY3HF",
  "key9": "FADPJsAogeNC2Sr3R4BZhLF1THRRLT8o2NgHhEQxATSWrHEaRCHwibWrbJoAZE4Tr3EK4EDGjnN9LT5oaZ7VJdk",
  "key10": "12uz3THZmTV9kQBJWdfNYANwqeB6fWHexcS3fTRgcw89Ci4x8EtR2GGpESqCydisa3rxTqFcQz4NfLBjAsAuRGA",
  "key11": "3cyVpp7TmGcbRLXp1EnNbkch9bMBCD9hRqwhNDfcfVg9Yxrx82epGKLyC9XWXHqctaYo5iXzHdfoJSXFztnCSZZG",
  "key12": "5VZwsdtEu2k5KQupuNL1sZGAcy3LXpZ3nG5MhZqEaF83XTtSViz5AEvvbMnzo7wKfmN5NPHoVUc4yQtkvHE8TxDQ",
  "key13": "61SqqB4qbs3idpQhPwRHU2WGv1hb965xr7aSDGEVVTy8vxi3kt7TG9EyY7ZM5G4FzVUGy33ARr8CLWyM8vV9mVcL",
  "key14": "A4FfmjwZe7WzKCdkDxXn3gjrw5K8PozcHuSVh8CDgrJ5ysQz7DoWNurWrn3K1vLowdKrT3R5jdXuUHrF6fLPUaH",
  "key15": "5jGgoJxnkicmY2PKTHXsgcXwCYDw6uUY3pAoGDYh4hGyaW33KDjeebz4UdQtPBQjnEuALwUr5fP3jWtebsYqgH15",
  "key16": "WqDNmDY3qmDvUz4pqtCX77KFRDFbHGwNPrSax8Yk1fRgww1Gmsys7MeUh9xvX51VHzT4yGmT67DyfqT9B1oiE61",
  "key17": "2G1eCQ5WjfNkwuW1jW3xSSKMCKZ89J9rJ72qBHsbzxTSDx7978TVGG4erUaENKKfePHi22h44TVZ8Aon1ZMUwQLX",
  "key18": "4dEkRbVPpfJW8hLZgGFzfECZLMtR3mdEAP9efGBVztVFut8y37ACaMTnaamgDsW4DbPA5KTRmFiNgweW35387rBi",
  "key19": "5Cr4kDHhwRoaDwdBDjgmW8buBAtoXxtDhi8BCr38sMa4prKrdapSppdisZ5uFePMbmH4MjZ3m9RUwfqDrtT67979",
  "key20": "5oGyPyPxgiVkFV6uPd9ZNbZ2q4LB46tTyZkLdDe1frGNFKBPQexbkULeSNmLSXcKhT57nytUGPujBaykU7oNVKX2",
  "key21": "3NC3S6fMYg9BMHyuBTBx4YAxQtAMWSrHayUz1KC7xKD9rybdMZgVcJpxVp594Hmn4CxeKGSpZnFKzzwcJkfY6rME",
  "key22": "2cX46JUBpNGJcPJqL6N74z6AC2shKi4HNdGVNqZf7ubseLYxwvTrfTsrhodqcGVTXVQshKAfq4MRU6yrX2js5TNh",
  "key23": "3HSNDNxqc7oXTq6chX4eZTPAkMuLoQZVFX3kht8NPxQe28SwAfz1KH2wBsxtURpAKTbRyWXS2ML2L8r75xD8HQhT",
  "key24": "3AmMenKk3dYSD4RNby3uvz9UWVqUnQQaQ4PGoA2zMMbQuBrdxoBpSM1DckKZbkVtQVP7s7BdgCGiomsHxEQzuXJd",
  "key25": "56hT2dx63rbQeMTDFDSStgoRARYJVkMG756otkj8TwVbFMnTGkfUc9MbvCcmeu3va3zKbvxr5vgKwnoFbpPZ5JbF",
  "key26": "4yFLbAWAxsG8SRH6oez5jgKfCM6XDZnQPAxvzG64ezVoR93SovuEottyh1HgYvGig3gmy8pBy8MiNda9Wpy41YEq",
  "key27": "34ea1YTCoyeErW6isjwbHjjbmaobwVFkQuFmmiyMwLuZURz2TEcVpQmLwuGMiQqpBFymJdFMjLWf7SWuwQEerWKt",
  "key28": "2AfodWJjWB4j5y1y22DUiH3QJtFfcwT2L3xsZoD1w9KfLQuNfjnryiwfUqP4SeVp8MRF2APsjeMJU9JGZwGfpUzy",
  "key29": "4jzhz3GWy54ScFj8YN93me8dXedtXhMRFTuCLMDPB8st8Xv9Y6rfgUepKBMW8mF4bfP5JyLeZZM6ewYbaWczoeCj",
  "key30": "mPZZ7UZma4s8exBhM3gQdkL1oUbb6ApG6msjM5PoymempogYgtJruJrSNqaH5DshyX6XZBCp4Lcm1Wy5pSrmN3p",
  "key31": "37NQJ1XQxfaSnXT4HK1PnnKooqgNjjgkxJdWuWjhTD6NdKtzY271q2EkaG5hv6mptaXZbHceNaFtATtU15emZPog",
  "key32": "4DAatYNGwKS7hiRthDm7qcUz8mFjrDBFAV4sQkfWwjDmtz8MT5Z7n8KciAQDYfQ4RrWewp2hynibkaihNvbd8ddA",
  "key33": "2cSQoUPWGKBu9TLPEKn68H1pHY87hthDcmkgeft7JhjVGR5jHc4WWKq91KF7wfVG3aG8UW1schuvgEM5Z2wL3oVt",
  "key34": "WVWzFZ1L56fXsqtTsyL8BNjw5aGygNezgtFvqs7SDoAoAvhiJ4B1K2PQHPgb5rM5kdX49Mvn8rykafikea7XeGL",
  "key35": "featVBmwShCP6pzW5ZMbxyBCJYQYioXeQhs8K7VVFsErbkvaJWtsF6t6H8qbnca26TVkvHN5fsZTPZFMUuaZbFb",
  "key36": "as5ggxtbz8N7eho4twiCTsJeRVyKaJMBvbW7B9JLvqWF7SUDj1tyrhNf8BpUs8zfcB2nRVqzBEx3xJ4gRbWtCQ4",
  "key37": "BkiDgLuyieyTJz4ZmVp9mZqYy4BeNqw5eAfzVKcTGrWvcWTAxnFoTZ4pjbiKgjCXpuABL2B1a8f1H8KA1id9cNB",
  "key38": "583yw1xfBDCdtvRwY6aTvo731gCmanvbduMzSk7f2zN9QpPN8TjtX3P4fwcr1ojENqYjd5AFgqYHiZ6JfkdNPatR"
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
