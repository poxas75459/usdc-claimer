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
    "57uiWcqBPi1BPUEJbnGo9TLRzLAnEgLgtUd8thh628MiVwqJ6bkDfjMQd2sazi9cAkU9Xvsr71oK4kctut1kn9uP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3kNW95kvhtDiz793MdMwNavYjnxfrKjk5FVKVibpXNBRoXFgxgCgMEJKGBzofV6EwHoXrkyhSKcLZcxqdEHEyi",
  "key1": "5gtn1w2L7oNieLkXfz6d64VdUDeL2owThNL7AuQVmY6LcrF144FkgsuGorLDqdrwdbW8rAZAPwwCC6XBtqwuLxu6",
  "key2": "27pMcugWcWm3ZsmhzuxrQokryHDuJo8sjGoDcVPJSsEHm9Ym5LYjH4j7FCZj3FPR5fnsSAPDMQBxz11DYUvycGiD",
  "key3": "2VhZGU93W3FaCNntncBLUB32qPicyQhZnSF4vWnaLx2Ky2Kz794XWqnbXMFBmd4WNx753bgbsjB2yGH4L2vc8hQQ",
  "key4": "j8STwCg7MxwFPiFUEMg6SyQUgFgHHnhruMiDCGHqs1wLeXmFMTpiV6Byq7fsLu1FhdSVQC7RMsayiVjC9DLbNr4",
  "key5": "5v817kRwJ8X66vgc4NgfgNvrqFtjyzPBpaMgBbKRAzsM9hTFpM4TixinnSeB28YQohDAXarqXkVyBZFbxrjtnp33",
  "key6": "3Y5pGduPvFZc4VmLnjrNgSpNdJte3Ssqmw7drP1YiekVzj7R1of3n9CgMLb9d4U1q5MNRe8XHCaqaWpr1p4fUxeg",
  "key7": "32JHSt9Pjz2CymAuM3xiMNoYGnBEoxDPsWpp6qzPd3QXNPiXhBAK4Z2qaMnQD3UoPxKc1o9ysJTJbXac7vLCELxs",
  "key8": "3qSZeMsbtbdkhT9MZfgMwhcoGymKPjfSZcHDQCpkkun3uTdsyaBQzBi9zqTxkuKRmzjkezaTeMCSA4Lq9bmbXKJa",
  "key9": "5SMMRzpxiXsur1BnKzXwg7wN9G2FBSvggeMzFd8GU7gAESireaiR4mGtjQaDA21HyCZvpWcjPQcV8YZSRZpsE33U",
  "key10": "3NYLwh7s8osaGJMsbp4j1iVRdZKq74ycpWPB4TPo9Ww91p2uis2UyATqC6B3DtY9BZWLKd6NNNGVTWJ5AF7RnPB2",
  "key11": "52ffysFTdDYgs75DKtdSzACFRDedbTLCtKUei4BptCHRemDKr7s6CyJuyNydJyMtGJW4FPcFjxqmQEgGPK4bxhVi",
  "key12": "5Z5RbSVJtT79fG4LFARxh8agG3nsX6jENknofQPy8GrP6QPRurHUKhvFPj6jRUfEzgC3noNyRdb1Fkc1wQgQyU3R",
  "key13": "5PLEuFJSqCEMHkuX6CuNsVbeXFcAzyoEvVe84rq8vs91xKUrVs8prHY8JbLLSBxat87pRBbjNpmDyXS3pudMo226",
  "key14": "4SLhpmwCZkmLEsN5JGLSQ5MgBTuQ5dgzfKH6KytpZ7soDypAcbmh36vqCZ5aeBuqEk597DMd9PgDeuFZzsXwVWZg",
  "key15": "3RzKy2x8BCBpdRYA5e8PtEMXWjDzXkAPd84M3m3kJfBw6azY118qVQabeZaGiBn5nQn6Zx3BfRdY98x2NxoH1nUJ",
  "key16": "2eV2QwXRNDRLL2dzsZBqqvpq6wXcVvebqhbUmmEoQczdEoGiwg9AirDzBjDSxHWvyMcGoMw5B2UcmJJg9VkpvdoP",
  "key17": "57k9FfY5jaciiCMK7mZ6ViWVesqrA6Ux1GtnTSnzKUJVv2mqaRVQvNoozp4UExVJSGaD32ZmY79PizLFEJLkTDZG",
  "key18": "5gvsTUWinAGzdAtT35n2PMCffRzY7aFCLiqBZyjPQDwzetMkn4cCxvRJMe4WjGMWWbqX9JfTgYojrDnPqPJ2X9uC",
  "key19": "FX2b6DWAqF1awRjhVdP6qx147oHt2C6pDWdCT2oiB5BXnE5fhaj6eFuK8AMTJmXaHnmE25LL9NWd5gBCiKeVrrE",
  "key20": "8npanDRFuutwppQ44k5whGhm1HhbeNw6g6xHPaw2KSesNFRUi5f5ciQYRjS9ZoR9o37EU3n4VuaYcm7hqRHMrC6",
  "key21": "VWqjTranMJmiqySDM9p5ARLkmgpiNbA8zFc7sJ2fwfYC491CuocEY29JXhfmfSKdh8CSE17tN7DkVGMbJZPjDbW",
  "key22": "5rQZbNqeAis3CXR96vwxJTN7xPd9gh1ndDRZwvmkTCUUhSsqt59X6kLdafveZyeBccUPVzyFYe991cP8WhrVHnUq",
  "key23": "5veKXWoor5LJ4seyEZhezWxwNiH7bfF3oftWbSmyrsVLG6kR378h4csV5UZsLrCjWaXNkehdKB7K85vEaQhpTEso",
  "key24": "4sSNcfCPatbry7q62MN9w3BARBKsUDKk4ZpYA2zZfW5HqnCoxf91vhYnsvcUn8hReXb1sXzYgCrbsxrxfZHMRf5Q",
  "key25": "Qz59mgGrPjbb9teHBKiSpEFPMJM12kj3efgHAzRLYaRDGufLFfP4phRypfsSk1mTN6QtqMgY2cmWZvyvPUMKA7Y",
  "key26": "4pCEwBCuY3BgcD69JiJ3B9majXchZ4Z3JNR3P6jFu1UbvLJizFx1EvUaiyTLzRRrNhpGJdQkew63WvaifJdZXC8N",
  "key27": "2QY36SQEkYBXR7DFLLnqbem3xaMzKi6TNetCejBZLfFrM7UPXzdzhu4fJ1KHmRFVucLu92395f5tdbDVbinEJq7X",
  "key28": "VFhZbV69WxrvRfDUnmXbtimF6QGfk2XPc41YNStjHhigWAQfScV5AYrDfFwXuSuBKhBkk16CgPhewy2ZQ5YwtRK",
  "key29": "7jgfPbFymENpCWWiXANnfjJjNu4pcsv6Y7X8u1sTuU6LbaXETaNWer3Z4y4vksjrEJNGsBtUPXQxNiYkVRWRCWR",
  "key30": "GffQkHAjvzodqRpSS58VrbLRDAxrDmeALS9arj9hi4mahVTrzdyeH9PAj6h4P7SWTwfKJ5v5P8SbL8G9g5CJrxR",
  "key31": "1JD5r4BJv2Pzo9x3LRrvu3v6cd67zhQ7QvpUqdGF8GHWKftEFmzrSZ9y9q3CHFjVBXXCummEtArM9sA6eRjusjN",
  "key32": "5oBhURts5VH1Sj9htVNeAFpNmJhi9PNVzsZZs7AiMNJBoGWfniWzTTnMtHUbPP4HpvRXBUwdTJHtSXwrMjMBHWrE",
  "key33": "4VkbRmfduNvzouNrpNaQjmgT74jsozn757W7C2p7wD3u4hn15xjee6WZHQg3sxHkQ9fqAR81uR17Hky4mNEFn6y2",
  "key34": "z7TKxLsKBpYs3nVSf91ecD87kQB7GF3WUModZg1vk3WCzx6yEQStZqjRJYTRQuo5iv8RdC1sMLt5sZNhi1Pqrak",
  "key35": "kKZDaadZjhgyFML57dWbZckb6EVqYKFDZf3vvPJv17tzis68tBnbjH54pBcvUjNbQJ3xn6KLWqUA98VHaLGMC2V",
  "key36": "4VbNdttquuaNX3zjnAV8SuDQm9qkGa8KcbzXYA7Gkkzrw5qtaGWNRzhjFuNYd8Ax9vvkGWwq1sqsYuAx7z5oJDP8"
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
