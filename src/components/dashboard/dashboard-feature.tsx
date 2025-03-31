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
    "2z3eKWzedxcGLb5WtoevDxEnc1XJcVArWMsmSznnys3QjamafurFTZ46VAVFiBvXgm8RY1yfhSEGFKQa4W7PhHRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44UUYGUFAEpJXdZD21JZZQhZc1sV8ciR2qFxdyNRY4GacmRM2TbnsPohfBy7HKHGx9R2FxtrgAM2YNiraNGe8mvN",
  "key1": "4NsPbN424WKwJLWbEpf4pZdg2zbeLsrKVkiy5dfkfEEq4GaH9CYVe6Snaj5pq9Hdydh81qXDQ1cqd9YNzreB7KtC",
  "key2": "46VBcJZfEzmvYYnq8ho7xeAQFdu6YSEBnzSwSHM9kbDXkUSK13FG5sKE6uBaemwbpPJebh2vAdwBQ4jK4fKjJVJm",
  "key3": "2s6dSTxHEncJST6Q1jbsi9qQu699A3uR1hmexp3Y35kcXp6mZAiYHrE7DfDA3nC6ispU8oAutRFrktTPYjtkwMbw",
  "key4": "34kDTRTxhyCGB2Bb8zmuSXC6wnuceN6TUApwpABjA7ypsnVDYKAHVPiAU9gwJMoffhcdZH8L7Lw459NydRSc2mLb",
  "key5": "3J92zsyzqe3Kr4ve88krUuHpVhhk7t1zUbnD29B2ScyPxjXVZQkEY67xZxK3fBKr5QqtrrBUUXGi68Ycea67sYPM",
  "key6": "3zdrn1mShdqnG27MTe21zXfB5hh4GtmmNLwgrUxxZ5bQ9YMpTdVfViWNUiuofpNFa9BCjqkYfXpqnUtAYqGS4rNQ",
  "key7": "4yyxTi8fJNdjfFDfq1GTc2NTAEbPKxundEWMV9bZqpTGM7wXr5WQALuPHgZyVUKDj9tZ9z3pKGV3VRSDQmDMwJ2i",
  "key8": "4ngRng8neyPtQQftAK3cyNbaYet7D9vTJ44FFxeCGNgZtuJMPNzRYJobLwwAkjzgzfiCfwKW4YRhqR8oStZrLKPs",
  "key9": "3jshXyahZxdXjy9YQo5QN2UWGvuj4DYLVJ5PhCGZLDFXMbVyNxRPnPjWXJgZRSqxXWmKnq3Yz8tSUDqMhZCUJgQe",
  "key10": "63Bx8BrnuKzpAv71ShwRDdQvqWpZpVD3e2NQo9Hq3hj4ihCfUYn4VbJKzpoVdU6vLQt3PCGeaaUPkow3f67r7VZR",
  "key11": "5kkSpnfftxq5Ximxa1SLr63y3Z4uhuHY6e8gVLfEWnPUJ6tBdE8uTR4DTUxW7qWAcsY7g3Lq8faPrREsHGfD6AWJ",
  "key12": "5bHjX1JijBP3TTBJj27j4CMUGPc7dGHLd5oUaH7B8GF4RUm6MMzktPEpPyeQJzywdv8dX9n7tE3ABCap5B4YqQor",
  "key13": "3E93aenpjfPRSYDxroSh8d7t73FK4g9eA5EztUz6utJdB5BYd1nJLGBjsSJBKaFXuxhWQ5SJEpwhadccVyzCyP7t",
  "key14": "3znkTpFKhrrSJS9uPDRqPw3N3KgmkSnrB5n1sjGkcUwBVkDCrcNhopsmUJ99EnhUZWCrZtv6CSe1JJUXdcYc3miR",
  "key15": "3hx2QYehaXhoTcAgP2b2MDKDrmkrgBRXnfRcKVaz8xe3xena1hL7Anp6d2bU8FGVyF8ZBBzeGsYNuYhVfbyRaYNy",
  "key16": "2CxMiYxcArFuK49bQiNYFxoXkYLsyHwHkJ1xDwazRETKtTZZ21x1Vj4hLExBWTD1JSNgrBEL9vdTMwHsYVtnkwJT",
  "key17": "53xMbEbYeppLLV7eAYXCVZ1WSycmyYhaacRTAxZti3wbExYJRsTKZm3Gvi2PS3jmbg9sFy4ZQTSet7tQqGfansva",
  "key18": "Z2YUGvbyKg5Dz6oU2gfcAeaSpjL7ixg4o4DzQB4Fd6DNZvufSySqEp9LeJAYBtk9QVUKb5GV6CMYh8NPjU3ETCY",
  "key19": "5WwW2mTTMV6aoXUSmXX2pDqsqdRDyN59juax5HKdr5KhYMx1i2Gxj28d5W6JEvPw7WcPh2vig9YmbWVMhErJvSVP",
  "key20": "2Eum26oyK23pYW8gptQZ8335nPHHQtpzUNCdFdM2oW5AojGm2R4LinwTwQxf5BkjcszicLMy7ZErjsCkHnFcoxET",
  "key21": "4DXTLiBGxWUDANW4K4jkQR9xmFrsXAPud9UbDtY7gew9v81VKkACVTSoRDd6FXG4VMgqrhDvHaMGSuravLXerCR4",
  "key22": "4Ppfr754g3aqwveDEiqE8m44tdWDCLpCKajcDcPN8fKr73kjcmLgrD9hDE22ChfThr6U2zpzGcTaimEaiKiPfqNe",
  "key23": "2AurFyh3YYQSEcQxCSihiSELMA23Fn1vfxtixgxo33fY8y16TY3cNieGRPyvEZfLvJxnwCL1WaRUE8vFW99EbBzu",
  "key24": "39DbG8t85ogggHX5hwA11TwwpF96AgLHyMHR8BNirm4HxGGShJcGKaHyE9TYfGgrN2jW2i4GgJFQJMDQCnvAsVUp",
  "key25": "56TXRhGcHPDZgHqGLMZCKtwBQ3U72LWMopytPoRiANmQ8T86z7XboiSXhUKHq4CTTMfUwipVvKh9FXfnnhpwzXw7",
  "key26": "ghKy8io2RZLWupm5tzwS6JF6nXUxD5wQPV6MALyheVkCogV5sz32Yjq5RQY9KDqS1VvHPrF8eS3Lq7o81F4tDe3",
  "key27": "bFkaLPrj1c9cqSG6dsYhcPwiqSuGLsNezWSSp7jE8b8ktF5chohTust3hLHLTNaQXe4RB6bNdTUMYQXxcpBu5gN",
  "key28": "3AvgtpN36BrV46Eeop6JUMLQaZLXDfRgbope4R3krvRM6tUHzJq15u8mN54fn7bozaeEH8nXxQ4jyocdVM14Hs7V",
  "key29": "2pjp6krKHJAd4HcbQMaXGTmNkbj2fJRTWUJ87jf3CcypTU5G9p9gLVWS2nGhSqFuWeEasfh2xjrz2mavZbM4Kn1g",
  "key30": "3oUXMkk4ymHLUPYVVL265ZrMFa12Y2LQbvnkgk8cZcBHbKPs35poU2LoXhWC4DVgu1vZSsREiZXxNxfupEqPrSRD",
  "key31": "4Pbyy2tzXeSGUnD7GRRP9PPSQG9ibdjuGMZNYbNEADd1pqADxbf2jV1oELuESypHj3TjHCkZt1ih58PFzTWuokjd",
  "key32": "3Ef1qTqfyrpYTYPPBKcR7gdfJSreVc9J7VPdRMSpJqpDwgD3Kv5tDjaqbd5FN5iXVKoudWYx5MGJ16CvcEYb9Piv",
  "key33": "3oArdp6Xm1qT8Zz6QayfBMi6iJeFBGFFi1oaZpSSXLfYr7gaoz1Gisa1xkEdE6uj4skffDghrqSFEtddKoLwne99",
  "key34": "2VW1hNa2jjfpjsF64wGEW1V3ntwcWpys61jZKuvB6iTQzoW2cdRZP6kZGwKcc6wM7ueyXjfAbvDiSthNXT3MPixu"
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
