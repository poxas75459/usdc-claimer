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
    "fPDrjxZRfdCrM6p13vDydTubcbUPk9HxjQUdENs4VPUz4Xuvfb5rS3WYyQZKLBrR897cs8e7EX8dcgru7EdkPYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2psX6jpkUvZC7rNdekY4LvqVJTzF6TW2HqbKxwURkdevQMxnEARLn9XBhmyzba3UoFyBGy2dg7XducV9rAzUHuZA",
  "key1": "4QPeAHMzBHcNJePqMo2AKHgft3Y5Y1vn2U9BRyHGH2bos3eM8fLkLMYcK5Y57PQ79paEeVyz8R2jgrNMJfa8CAqH",
  "key2": "4i8wAWADQxZc3nq2dUMyk6HnHX7GcTJh8ZeL3Dt8ceZpjAGQNNkZDFstek34FWTQ9nfPzt7ZjUDeLj4GwoDYkfVB",
  "key3": "4T4Mz37F4MJXwG9ZLbvgkhWGp1eN4UBXk5tyti4YWvFbnABWHCEN8NzquX7Hh9T6v9pY4HziowhkijsRCNSsroWi",
  "key4": "4PTTegahjRefSwUg3z93AfHrhxtQJCk9xjT6pCYjMjCUNYHJpYg2odCMGysrQuGWaNMP9eHHpUHvBGi8gM3zvQ4d",
  "key5": "5gKLbsYmHTGrD8zcx5GHx47JNBp6aoGzcHgZ2TmikDcE7efowv5EKJbLevTV2goUZrJtkgKBYtyoBi9U4r98Bhd5",
  "key6": "ytC3uDXPisQiMZBMrufNZowAjCD6KZBgkB7N2cEaMXp1K1ZJ4tPBdQJQoT8cH75sqf32bDioj1bK1DNnVFMd7EF",
  "key7": "2xGg1Z6zwWuhE4gd4uDTGzN8Vu22vzN8kRpueoG6MVe2DnA52SWnfhyZNuSvXKweBLhcektuGGyJSYQrPz5Hj8zP",
  "key8": "CZfLEjZk1qXwEmrFhMcXTvUjDTQ15faxESTnpCLAjaKKNbDbdfdCtT28FVC8hVUJcoNi5Ch4uE3YY37X381rer7",
  "key9": "5wN115sRYmgwLvED3GhSV2AG75WNKABmpoZUtCZ5LufforaGAMN6QWDR8t7Cks26EaqAMggg3cWE7kEw731ki2C",
  "key10": "4Fk1v17GSGs8mTj4Ui42rYgJwkiTTX6xvvDPAKJTcQQaKKcRVKJyXmpX48ynMW5rwJYEM3uaDW6QM9KHiLVBEPXK",
  "key11": "5PM5nUqqURLU7Wyz6nuGY9sXsZCcVHi8Y15RfEUrQeCBdeYg2CwgVmVbemfF6H78oCfmY1aPon5yQTnpNAKMbXWc",
  "key12": "2ySMhgMXURRY5RhnWKjHG3grpz9qFqBnZ8XTDjQ7PUsy7ACaLqzbzhwuaMzf25LETWtLBCCQ42VhCbGkPZELiuqV",
  "key13": "2KZi57uQBoqP46jW5hS1TJxu5wwjRmci64po4EpA5XywcHwMhoKVQDJrHc3XMwbQHni8bpiVaj2M8MKzwCdQJesY",
  "key14": "29y7Nb1s973MvJRdcPQr3EeF7NAAkeJnkh8fEVV6ymWPx7RhsFjSRJZgJUigiRMStjtTW6McVgJNkacopMsZQ6Cw",
  "key15": "4ms4nhMi1TtuqVUQFyqEaSEw7CM3ijKvpv33gzyynT32qVoRD1QyghgMmtQXjuigWiqTA1VjSqrZixQnCqv1jaAR",
  "key16": "31xofpJ8ybB7zqq3ufwpGoKC3LcPMC4z4MCA4PrcBhyiCL1JXTyY3oVupZhAauWCZkYdkhfpyQd41xdxAuUJMeHi",
  "key17": "4V3XVh8GzR3o5PorhzzDHAuMRAikU5qNGMtidBEzcuhBhoSCJPn4mMUEq1Ecd96wVBG7vPGaKWVvBL4s2oGNGDVB",
  "key18": "5BwX475vEhGsgYSpbZRba3cnxqXfMLg7bg2aaVZB2PhC5FCNfJwq6aPp5voDZb9JGmi66ZgnjZhXqKDjwQgzEash",
  "key19": "447NsFtt1xyik3DCdZJzqFxEF7E3rG7vzhNgRjH3PPDskiqacoiWTQcrNDFzW5GmyRcdapeDxoqx9V8aKrjrYjDu",
  "key20": "4yKU3Kuvdvbf48NT3bTXQG1ysJkGob4PVyjfxbCEJ3BpjbinXVykpjauhT2jshBCGXQPue6sM7d3jpvn9HQE3rBq",
  "key21": "4DpXenRjatnEgANFbmqmsiWg6zKbzcamBwnZpnr8xKmyE2ge4A8j3PB5toJsWMBwj5E5PNR7VKyradQvBLfHnT4h",
  "key22": "5zWD3gFUSppC2gby4NFGaEAkeQoMVY3QQTHg8pUEwPxRnaEhKSFj5RMnaqQHTMxA1gWwAgtwTnKzCo5JsXRkX8G4",
  "key23": "Yh4MMyKmtVCbn3QyEu68nhtA8sLEJyHcDTcU7QKiJEQdJAASC1VLku6ahY8RJyvG1mBFuEfRWe1ELs6oXCtxu73",
  "key24": "2YBZ1qsDatwjtHXwvRPabvcbLk4Jj7CBGjNkK9TiqW9AK7Q2TfKRPr88ijed3zyZby6AYiBLyHucvKeoMPbQ5FsZ",
  "key25": "4WcA1j7bV1F26p5HhpSJ5bAbv5Ec17eZr5i8BH58TyGJcCRErwhnkHJr5os5kNKFsFDUYgG1fmFcyh4jHCXsWE27",
  "key26": "4UnbL4gzbPjB3nUKGmuFqDHsdJavaLbSQC2E3LdVpodm3uXE7x4fL2pZVNAaqFgiTo7ZUfQ4YF4yRzmY7eRR6yTt",
  "key27": "jwabRhErwGHPRD1PSzwwyvnfaFSYhzzqyx3nWyxGLKqqMrEKXHWKCDXQV8uwu2MXP5Kh5u19qAPJWj6Akbr4Wr3",
  "key28": "38fBKthGPrgceoa29Ts8bwwjGcXYdiu2gLxGcD7GaK5t4M9g89wDXputiyBgbjmcqhjS7oVra7EWDXxPDEZ7dq59",
  "key29": "4ZWCBcKV8mgcLUZDi2y1rsDs7GoMmWTQ4j4vR9f9hU6G2GjbJdNNQ6SrNntWTmMaMDRQHymFFizRtY6gg4bbb2n1",
  "key30": "tUX9jTuWrNAQr7MyVK5ZCRznY2qnfb26S5LZYbc5yoRp5cPJZY92rCT8DPJSfEfqEYDe9aQu8UDLWKDosXi9SYN",
  "key31": "tRUMC9G5UGv5F9aVBFrMACkggytcm45wCuuweXVhwY8DCNr4ahtfnqG8wZGNj9pLy5CgYyraXW8YWP7KUNFXmeN",
  "key32": "4kpdu7JCzi6KfsWTZfpVo93Ub1RjLAp1mmFVeQjmRsKUM1bjZWA7RTRbD6LLYEw9N1gYqUwegtg3owFKdDnXAkvb",
  "key33": "bRN5qvL57TPH2TCrw99X7nVLTFbTSte1YKdoaJ2Ykn27JW8oxej9EnFQQDexBorKrEj2QYpQR6rJwGcjVhbCgHF",
  "key34": "8qe978bk5mJcAuJ4h4FhwhkFXHm5rAhkqkqPgYLk54tX1M8xmVKayfF7cb6FS6i96yZ9oS1nuMY6VJtD8YjhDwF",
  "key35": "3A7zkooQgoNi6K7NWczRV4CXdkNM71RBjWhxBkwQffuJBpnst5SBuzoRXsGBAHTn4bgr2Fu25ggYtKASFLi82Vgg",
  "key36": "2V9KgKCETb7rLqpdNV6kbo1T7os5C1hRqMcWXDKMNmj7Jbk3pR2BggMSku37FqWt8r8MzQ5UJhrqVFBdTYBqSVbP"
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
