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
    "hawz2UXqaywEaVgnusP8BvzF4rDUGA5Qgqd8As8bVAy757HwgyuRPaMpRtaaoB9U4BeniFQ14ADYySKJAZYeGUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UNdT5ndxmDBg1ik1jYF6mEWMArL4WvUqBGosyGSb5jrZsKR3fJtDGUgzniHKeZdW9ZA9TyzXb9CkPLkRu95CTQx",
  "key1": "5A62bEakefi1cfzuPWiy1Tjp4M4TpSsggoZv7ssxt9AqtUBEdMyUwsg6zTXNsJz76rCHfXZpjutPWbvNyCPBaqC3",
  "key2": "5z51qvLo36Vs4TMw29tj26qMpWrxBFd8XRWENFaZknxzJiF6v75ktJmijMnemP6eimyyNB8HJqeJzEF3Q42Wodfe",
  "key3": "5HMBmi9aZAvrxfzQQEAyy3LWpzH9dG81YXqaTcKrrBFwZQEf1WmHocdRn4Usurjx993Mt7ZuBFHiaAWmEtL1FceE",
  "key4": "4uBeC1TYCXGbgtaaMsRdKWywVsvrVNtcmuFhNGcBF5ooZbR1m74kFn1hKcRNftEctb2yopXsZvwDdvMuBoswPYhs",
  "key5": "3BYjGj8WPwEceEL7nzQ98GB2MNK5Ev6UHkbVjd7S7HgnkUeWAsBRc64y7fVhRCXvGFnnGoQQ73eGMYF7pjbhUFgy",
  "key6": "4CHr7kB2uZUkRqKEBuEhbgQvoWKhCtCxRhjzRJCwYhGCjUysbEfYsiS1KcitzB62wApkBUALBPcLVoMoR3QvWG51",
  "key7": "5aTeejywzqT8cE4B2Y3HvtP3GUS6zq5YSqNHTqWy7xHDeQQjKeMb7AEqC8k8weqLh2iHcAguhyL36ggf9pb3TxaD",
  "key8": "5c8ns53uWWDtUrXQzx6VfH9UimdHf452jF3nJgqEL1zToV6pJZYqhasyiSstKoa19yy9oSih4wtoF6iHUiMPFfji",
  "key9": "5kXBe5RNEarHMcyULjKJfDn11XLEr38F2dqoELLUyKh2vGTPkCoejN1PZWmwAGksmicKLYGTXBnEgDfXbPAc9toN",
  "key10": "66ABKtmLcUMbeXD4pAbCsJ9GeGRFn4ofRXDP8TzBPeWxv8kuDKteJ73PmEes4eSAJBN1apRQEQkaPrmqVN7nY4yX",
  "key11": "3PQtBwZADFJEgPRXaV3h72FphJquPqmH36SYqBZATRnkmBGidtAsLBRsrg2BZWMZtE1nFbqzgMCDHBfZhY6nYHCS",
  "key12": "5iCx2enzuAFiCStPZbnRTb4Hx9z9u8iSSvB3iNPHVRq7xhyRALwuCkEufoqG8Qp6h4P5vMpwFR4p8rX5Jwoew367",
  "key13": "evgeqzfJa2ew9wtNgUcy2v2fPs1JMMhSnaHXNBHpD2YGmBr5cTsM1wKNR6Ug7pTagpr8o3pjfnM4byv6GkwR4HS",
  "key14": "4kBQYtWrsYtowJGNczJhLJ4YUJuXuthmL7NzWPfURyRsqr3DALJukZSByTGyv8JN5BnFrbB6uPoFprrQRKaco1y4",
  "key15": "8iZ13LJRtVb18WqMC7JkboY9NiZ95purYZNSS4oAizAb4DWnUVKGyFWAi3eXHfdsLAG5aZcw9j2EJCuQRENBYhs",
  "key16": "4Cvg6Zg8VXSpeQtd2hjkGFUCemJCJ7mhmkMDaNY5yRFbE2dExRNJhZ1WU5P161oYzcryE8uRbuyuFhRb62aNE3aN",
  "key17": "33LJSX3Fs1reiGpBzZFVB4mfBACjXTwaC5yKNPXFhVp1xfwJPxJWLo5Qc9HvmzVvAkC4v58zNh6YHQf4SdMy2hfp",
  "key18": "5anPqrtJpEeYgxf6qEq3HHYLa67mLhJqgVUCocnGAH62Psscu85upNyS83G4s5SgzjdncoAQ3vtw8QkmGWV8ZSTB",
  "key19": "2yzRfBvcQTZANnqf9mH7SZ7GTueiFhsWtzFQJYKQzxTQc9s7QMYDkksx9NXEVsv7bRs7onLvFNhmBohRRTJvSprt",
  "key20": "3UTjYbPoZ5FDWHw2jJeY7fDCj3Yf5MnkqdqzpR43FWE7LYsAquWTp3f2tdwD5RJsTn9UHF5YcRUtLCPLQv9dBYHc",
  "key21": "jT6k5ewCLpKdqZTnFjkr6NAtqb1QsN68EiwRYguVYUGr41KoMecMpzoyVK7aX3yDYa6Fdz5LcUzcawxt6nn1556",
  "key22": "3mvKWuKAnoS4AQqdYLYnSRQr7mfFYsorzhW4fr8iqcLertbRB2dXy15tCEeNDvUQJosz3x2ZK3pT2fKRS2gcRbTs",
  "key23": "2fmRWiTqX1FVQssmwXexpCv5Meqj8WhdCLRHR4qWoL7LdVJxTRFfo4pBBeYkeZtrHcDMoAVSMqo1s9Xc87HbazUw",
  "key24": "5xqDhwnMc4oveLHPKdAYf2fXtJyeVQENJLriSSQfJK3bUU45t3tz9Lo4s2s6Ti7Uhq5dQ7M7mmnCCeTRY2n5yZTs",
  "key25": "4Ma2ZajmXpQ9vTZsvJZHYnjiVuZqiFEAAGhSarUbwiBUMv5uKJnUwBtZirYbxuLHKmnnCFtVhA67pyykW3TjrnNe",
  "key26": "3kMy1cx5ZSsHDxNtyaV2mcU3hJoAv2wQBG3gU72NN52PcuhYwG1vFL4t3bqYkwFj9VaLkpJq5S5ihEZhjK43ATta",
  "key27": "3ufcYbFx9KCgbuJ4N46eykdzp44LBi3wDyLzvfTNBDtgPqhCLfU4fd77iMzbCoeMW6KSiEdTYAx2fimrmFUpyesz",
  "key28": "38MmddqNSty9WC6tUJcGWfheZU5wQ4cAwmmsBERq84ZHMMJHA488NVD4ZHhfDpKfw1neeB8HsuyMrtmztyhGaqh2",
  "key29": "66qqKtrxUpTdCpERxUyyFzqjmNAi81avRXccUWR7jN9xdKhKx2nhycwWYb4ZzRRtWtjLkbRQCWD4nSfHB65hjoKq",
  "key30": "3tf4h3xZ4Qh2qoHbG5FrZgqdC25ex2GqFmAc7psVm3i9GYS3ZtqdUaeMBKbBdAZzh4NQgEabq4rHjLcEsizTHUx5",
  "key31": "hW33apAY7ZN8dk4usScLFHKwXQdqMRwgjLWHQhu47ha2Ud2MPgC8S4SJYCvmbhYEQGzvUgd9h6PyjdUPKqdXmsD",
  "key32": "3uXr5h2JvjCjmhUdVjUJLFrUzUHqf1vd183mKSkFPwYGNwvpmjVevGJbEt9vYJSjRCanQt72ueN2XyLnEt1LArJJ",
  "key33": "4uTekwV17ZnrkMVjf3tc7hdq63NTw3i5Q1FoSEe7o2qeG2QecsQA5dQYB1xpS1kmMzYMcTytCNdZZxSu5tVszF79",
  "key34": "67B1zfXVuxbYzZxxmibWPZorjuoauejWqnzY9TN8PLT5SxXRsUKAnWtUmDVjVba1u2PkZ3vHJBbFeMEnAgwk91AC",
  "key35": "2n5UvS9UabFNZt5ozh4KcF4JQkfoPh8MWpSGdmY5YrjgS9ti2kTq8wrEweL9JbcnYkwd2urNgyKGQdKqjwknnLDZ",
  "key36": "42weyDn6gcCZE5GQA3sXsiFGXXQ1JZAewghBda3bkavvsbJyMPZqWw1awdptc2C9ViucJxDFGUMXzwFkdowPJUFS",
  "key37": "2FArix4qbuKq3dM1szfh3NimvXYKBZpEkwVsVimsQoNCTr62ML5nxH7A7uFQ9jnk6aibAs3vdqsbZoMbHRuPLGJc"
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
