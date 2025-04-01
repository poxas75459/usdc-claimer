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
    "2iHL7FRcpbhZZG2cK3EH6g1RNUrzj9PdrE1fvchSGZWYwWHVFzkuof6PsGwm7Eo2Zi8QYjvkrxxbjP32QQB1U2Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44PzHNfpxFcH5NHCNkoV9eYmRM99WztzahTMY4QfsQt1sWxi5Wowsjco8C19SufCGYDvDbitm4KMu3SKgi2mKo13",
  "key1": "nzogYnzNWPvhNoGiovReicTbLWEaP23QQ9ZnSUJR27UB6tYKc6wr4ikHaJQkRK5piQfZVFpnndiNbZpotqLJqR9",
  "key2": "5tunW97dNhdH2f2MGcpPUpT1MonpF6oJcGQ26YGKeajDvkUp5BF4ZokXxLs7eC2hYT3NcEUggREGgaRY4XpgCRiy",
  "key3": "4WHfNNXosFytBU2WPQQidmrss4urMtUzvNprpvWG6vzQGxUXteukGDoXdP67oV8qd1c3YD7a3BVBeCvSbLjgrNfE",
  "key4": "4XPUrqc5neCB1EUbVTxyqpz9DFF2s5rr29CG663mGhsVMQNdFdzDaJECvdaTkYtHAwB9LeMv1vwWsA66eqDZ5L64",
  "key5": "2ohxbAFzgE32SfXEfw8HWRFVHyTks5CKHVBLMwMdt8QKMSukev1KNyBbU7hkkGGuNNnntEeLxCnbqGxAovaa4pkc",
  "key6": "2Th6X4fHHPaQMXGPe8QAb6CSsK3wxiXTDKSBqmjvD8DGkvmNF2AQPbVWnrKHBPkUP98QgUi5TPLtZS31ivVj8zpo",
  "key7": "3HknfdBHtxo5rGLdH68XsqzWivXUEHLFfZKRjdKgmo2vwRaYtgkmsPECYTd8uLBexS6MjYQTQSyDWxK8M38JAdML",
  "key8": "eHMVpMwXSsFgkGykGHkrAvQ7i9F6yMS9odncuDUNFrXtqsSYbBdzXbiRmUfZdqcEc9mwhJzxoWetKNZ7oc6Ku4C",
  "key9": "2JCfRQTnSm49j7jK7FcArk5Xt9jCgyFUfNt9sUoeUTJ1NTxAT5i8Px6L1cQRrbCZBUTVQHJFv8MdXicHhNUytRi5",
  "key10": "2UdgruZgvJ29VdsenQdZT2KmWDiKdxiZ7wbrK18fjCnQZTs4eq3rWe4DxfGNEqcf2xe3HLBFyeqv3rrUp7tZV1FS",
  "key11": "2j3wXQUGJXu8opxeHmKd1V2d95fLrErHVheZYRxY9CWD14Nro5e77Fqh3JBhbXgQuPkHmAf4cpHy8ixk4JFSaGJt",
  "key12": "5rb8S5gV2DND8xgxqfEXWTNsBvirnE5q7kVJWmtwoL7tycbntSd3WqahqL6fs3uv6kDAJSZoEmbWCeU1PZoR3Haw",
  "key13": "2hMj9tab4cghw2MHGJfoPLagZcCMauTcsip8rueJGz6Nw2wpzDb2JENaZ6cnowqGuEYMWtiwCZchjxLZB4VkcuvN",
  "key14": "4nb86qbw7nKp45m9e9ERmNvzwhxFi9hS6tGQPAqPqHRu3B2jg6bJEECmkW7zLsxT9Jths2RhAKJ3esZxnoeiFs5j",
  "key15": "58gWSijm5DeWjhFrS7xZ2rpRoYUTHbaEbHFyDifKc6x53dqAyngqvWFNi6Vh3PfdKcpfoftyGGbTaeSA7CESHwkX",
  "key16": "3sQW1xmQJQKRZmkWJMovfackjkbpU6XrnCgpsuiTYidUyyt5eYi1yYJKzyGjYgFF6JTFfAkv835XFDmjSCSrudPy",
  "key17": "sVayppi6uKKLrTu86GaNe7NiWjttUocgsy4WeWExN72UJMwZwg1TDKe4fQtMxQedsQSPBiCDEiabH7Va3wGWy5p",
  "key18": "FL8wANGiPwxAL2NdfH88LSpQcuPYUEkKM7dPKpEcTh2pZV49NMjGwyjzsa3iovBGfPmP8NB4ayEd1FDUXSQb9Uq",
  "key19": "j4QKjJQqM5VBF7WjKnKEGSUUjtoLzz9xJt8aYM3jeBXzk49FS45E5nvvHUVKjaqGF7nRy7HTtVb6PYPTUZPr67c",
  "key20": "5td8C3d5ecGdyx11pHXk7GSajHvPMMqd8drfb2r2zZYLkCDwWJACnxpPBM5fjuYjCwkjHSiStFkgyuikwcYY5Gr",
  "key21": "KvQK9VYn6kNxaAhq4u4HtWnd1kcLdGcQ6DQ3MRsosAgmarLL65kxLUYAJZeKPRXSLcRitjFw5YfdxCnRMLLqjjp",
  "key22": "jaDrzsLP7Ly5qFR2zrVuTU2w9uMDP5rmLsj357NWhjv7NptQ7Kj2b7NMBQ8ej1aRpWcbudwJSWWr7h8bkS1XVms",
  "key23": "3GjM1St5sWkxN9yLED3ZPVmZRz5mYPgT21Mfb6Lpv2Gmbj3pmqepk8kSuod2UpzDiwsTJm3VQW8S1L4QDWrqoF2e",
  "key24": "3wPnT7v6TKYW8C6X3fW9eqvbq4WjkArncDumVas42Utnt2RmwCnVjWgYSrWbYwdWzKLGjuXb5cwEGQnThxvdHQLE",
  "key25": "4QApZD31Gf7URuSM3PpWEFA8LwLMnDKMKv4L3i5rd9YCG3x7aqcu6nEw8jxjY5zxukMu8tygSpXkAr4hMFHut4wL",
  "key26": "6knh6M5WcrsKocb4oo4Fzxz5XLQ7CP9HcmY3zTg4PzQGC9Z8HffDhSb1PqNisPsgrVoz1CjTnLRRJc8EAtVPg97",
  "key27": "55vjZrbgmqLXTcc3Dt4dFBxbbGqHUwWSaKb1QQihpcAL6ZYAAdRn9FA8QfcyaizSuKX9sZLbxU5EVp4j7zFXQJjB",
  "key28": "2Je5jkTpVPeTTvwegJFWfYj2x7WtG1erzaK6hNAH5Xh5iuaU3FbkyoQeGBZpZnSqzWsTzefUaAYPf6vh3aViGbHG",
  "key29": "4RqMeN1FhgSkiRqj3VL7jsPahgEagXrLs9nckWoFwHYUAGqY7AbSBk54unpmedd4jPpMSZK3B5BHR6MxQJpLyrWE",
  "key30": "5LW7rG6aDBbshuHXxxmVW29Di2eTVWpYVPed5Km5FpePiWVAenyzBu8Ci17nozjPFWH1LZmUUL9ikrwNVXveKjmf",
  "key31": "4868wqHyGmp48KZnXFm2TGDQiVYUjo4YiDMgfz6Yx8TMywughxsKyS4FkKjRpeEe79u2EMyuiBCtNehvtphhTh28",
  "key32": "2kzSDecZTsRfoxfJwHx5CnPJ7JmWh5Mxinv4Skr1UU27gbNmBqpjSF3g4KLdxSee9NUbpea8vS3aZmxarMZMGG7S",
  "key33": "2tQUfvvDEzH3kdArPqHvmzieQmmgGiurofMA2uXh8F38fzbzJuD2ZNBCRd2EK3aEXybDvR6g79qZ73uG1E7VjedU"
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
