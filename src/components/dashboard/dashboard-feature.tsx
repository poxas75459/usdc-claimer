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
    "5Y6qQXdz8HRVKXSyXMzgAsAUxbJV4ySJ6UspgrfWg6CuzUAZzdqyRE13cZnDGaqQFtGtSnae1aZmyWtGv1yvWqBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GdHdgpHchawqfLGYGW1pXrkUp7oVEdtGLDCTqoHi7NkPvbJfS9i7QBVS8aR5sTRRasNTc1naLnMhLXjVvQumidN",
  "key1": "4Cpngccjvq4go3Lr6uZ1dbzHPSEs32XJh1buqo4St5XRsFafpc9AGX12cx8RfjBPUfef24CUhoqmheBHq1U9DQsv",
  "key2": "4cG2JnkGEfmcgBjb2hDMT4v9Pu37fsTstDsyeKKzTakhuyrUBtjheCZko4hNJPUsKeuXpAFP9PjmmMTGEUtuWLhA",
  "key3": "2FYaiXzxK4hz5fYWj6VhW8JCdSDydoDFS1zM17M2xQVYdvVyPTugJsUoJ9ziQEj94YnzX7gheXFfmKtkCV989HfK",
  "key4": "HiRt7bssGveaqXSet2odt98Lwf7HNfueLtJLcxQ5shmzz8dunAnGw2nPvQJpvo4B8TzLg7JV6xqeJ5q7gUpX6j9",
  "key5": "55wBgMxDg34xLcUNVvCDWbbgpSfUVULNEbba7YTdwz2Kr51qtL7BZYgKA6bjGKDMP5JBJ8AxiNw4DoGRnYKghNZZ",
  "key6": "5GjiVWbGrGTUfa8wePGX6PMNEVvcR8rrFgca1SwpFi8GQKUCR81v9NnpAYvm1mt9hnQ26rNsT7mZAMLjJnbV7Lzm",
  "key7": "wBjb56Eh5PgDK6XKytZCpk7GaTN626iqNYBvLTzQfr12bA6cM1C2Js6vhNd2avbF7jAN1DYwkcgSMEjGqmpm3yt",
  "key8": "ppmFWatTAQyjyjRAnxytpbLkhoFtJ4QkchvrMCozH6T2wEcyQ5zXYtft1SJHAJatsn4YgYBF5TkzRvv3otAn2JM",
  "key9": "57oNCbcoE2G59HHtmyBTb8pXRZS6yx3uzTvAGgdGhqnDdNbMGvegHkLUVSGz7jWd3Rmz99VEmiVtC62rKhQinpeZ",
  "key10": "2qBbVFEfRqzHQp6UbGXgxvzKxUDexGtSwLxw51H52XjTrdzKMabnc6qq4ev4byWQZfcaf67tU6AY5qDuRWaHzfPQ",
  "key11": "5ztFCT7Vpesh527bxJxKtwbyyKscmzMYAFWzt9F2YiLZ8Hm8KkrtDce6WbE6JT5nshBiXjM2x8ZbUKfZFcuruXgY",
  "key12": "5M2cva5Tmcqj7Z14d71v2K5vLmoFihWkoeMoikJfSZRW9fi9jL53bjjEU4WhLVFUq8NJHy5RevNU4j8Ks2y5P6U7",
  "key13": "5DKwEJa2x4jk5iGrPr6tuFmN1h2zyMXPtrU2g1wHkgLgPdV5ry7ZHroQcsVQErXc8hWJMrbpF1oHCe9dzUPzConn",
  "key14": "4uTQhTgdjGjymYbJ8wfdUBnztESbnQyaxeMdc6CUmpBHnCszBuMEq9QXGRpS2VG3BskMoSroscETGqf1fNyRSyRP",
  "key15": "31fqX1CX5SeR4tpYviHvTWRZu5tWweeqSTCQgZ8HQ5fw97ZVrgyCvdAFAjwo3tWMwGkN52KWpVpqTBUJLi1T1vmN",
  "key16": "57pZary58G16bik4oAcQQ1PFNgHvVoAz3jMcr3CPN3zKaH5G3W5YRH5xT71u9KgpFj3r3LjTMkMxohkMa5JNLaQx",
  "key17": "4a93u4sW67pLiigXbnNgNhAESYGdqfVx1DSPRvM1SDzpSEapoc4ejsw5mJjr2JggqyYLG7QPYsspnqHqLFKQfm69",
  "key18": "4DGmssaTYciT1uB5Ft7AvwGZrbiDSy6cPVjBq8QAayMszCdHb1t7pbzAZuYkPRnAyXzG58gR8gNnWGr1mUiN2Y9M",
  "key19": "3EY27dxFanbRFxjJw2xBFrFMp9BDFMU1goQ3Z6eq5ZDn5QbyEbYEY1U55t9MbGKAgCS7oFme8MffKmM2j1ZwowFf",
  "key20": "RMnHJpK1gUVYVVwayXg8FhSBhm8FcajyZocjKKP8UaWpF3LBEM4yU915K2drUMLsPwmKnsT1RQoDwHM6iqNfyAs",
  "key21": "cLHjZCo1mt6GjCsS2NHNMrJaDH3EgPGJkP5MX7z3fq7zkzD8Z3Lu2dy532WdjhxnfJE1wp28qbtVZF7XVQK9sWC",
  "key22": "gkPFxPEeMj8vGTRTBBJLBqUE69Mwvx6LMPLnd6f533fYWkqMapDPLMzY6e5FpDxoSGXPEaZfiDMf6ec445NBEnS",
  "key23": "4svqdDKa5dVkMxVFnrbubnop4CJrDE6N8Ae2HmiiE2vMpuPpDha4kUHHhP6nBCLtnNHSkcLB9nmi9oTcSWdxJxvw",
  "key24": "BbEKBaTRDirDfBnePeEmaBaXXejTawkVqEt1E3pqBinwnBFS7cyD9nNptatQrM8rWqjVYcALHh7Rejpd6VnXTGR",
  "key25": "hsd8XRQhTc7KNtSsq3s1M3EUmqy4iwuTCjyHvi4Wm7cz7bj6DcF8SNxoeiJEEWrKNJ3bZ1hUpsFfCTDTgCvmNwS",
  "key26": "2LwozAcKtMeYBSxANm82A2Yiyp95TbkVzU1utGPT6rn2XVvD3q1B9Qd3WAeoAyRP2M1gL3VBLboA97iYFxuwQMav"
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
