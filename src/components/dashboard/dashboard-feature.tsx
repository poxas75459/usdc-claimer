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
    "2iQJPerSBesribs7Yi3EhLmU7H2avYMFsKZUk8xnkWbMiR6u6SV1e9WWARaCgWvr5AVYD5QFFR43g4rq4cxx1yib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ruSi2KWqHZtgktCoNKnm73PmVajkLssYSNDUPAkVcfmF6gjup4cit2y1SucTJq5UwywVMyDAgqouPtHbWUBF3iH",
  "key1": "E8mf5ovCMqZ5QnPq4YMPEyWCc1BwZgQY5PugCXkqyuGBs6ip3LhVDs7RKTciiUbcPrC4Kw7kzHwxeQiT5s4k7pW",
  "key2": "4ywdnKUE7xsEWVr85bZzTdp99H1Zg288yodHRwoFYqT3M2TdYwqfubf8dVP9e5an9BmBmCV2fWiTUMmNGRtHhRig",
  "key3": "3t6fCxQwTmHRiVUDREzhz6NurqZZYHffY6JmybWSL88b9fahtU7dw3YzdEkF1yiuG8pKVUG8Z5zRV8TTKcEhoVwi",
  "key4": "31ZDrqvK32nqVky3RArUxG6yqjdxN3MVN1UjQ4JxUkNFV63gskUzP3zjr5vQ7vhMjUvdw5N4hdpL4tBJYLmGjeKN",
  "key5": "63nisd89nTbZgv4CKmCrsQoMK9sfg73QTBt17wfpJv7933cwGLfyHymhusdShY9X5hQ9yN8tNQTJ3fN5ke67Ysad",
  "key6": "3xqZ2Y2pcejbmqfcSYowUiWaMczbqVDsG14VqoD5gPR2v5YHGqRqNGdjkjwHr5QcTdt8pA1cF5wVF7hE7vky517B",
  "key7": "4gyJ18vxdoo8ZkoVFKNBFqTQDyZMvVMqsvtKneNvpxkh2QieBqKoo7276HrL9pq1X5Fhke8vCzNkF8yx75uxmrHH",
  "key8": "5dcbKkT24xMSwBgokpCk9w9pNijpjgc4Z6eV7wUgUj3xo7zka2273sLMVi4ruRhedUwgdEyj1iK5GN2jiVSY2SmQ",
  "key9": "5R34tHvhxzqnxagpp7ikS3CAKKa29g9R6QXcbnApRujE1Ur1TRzFkGWESJutf9Y4a2V5cUtrubUWoT42gcnpY8K2",
  "key10": "5Ndr91Y9oekuQUM6DXGGKcVKeqyFeZ9YZQfgzPRE5RaqtJxTTTSNSgrPX46BXB5uosRo9Pz3LMybwfp9y1neUMui",
  "key11": "3rjD9nUjaDXeNXTrxvVHr9C9E3QzhYN1vedowLCGpG8BffcLQamZMowPurnV1MLLrc1F4jW6h7w1roRikaG1yU6v",
  "key12": "5rbFphqgf6ndvaaENJmHiEEYEmnZ77KsuKMaVqC9KmFhXyoLzywuzH3mDUTc2RezEAP2CQhVhXBUosq6LqbMVeDz",
  "key13": "3SSb3QafzVK6wvR1eu1rmorkzLXDyACBfzWAZBjKikFCCusKhyXNoVDNtSmww3cLGMFwueFmJcxiRMm8qE2LT9js",
  "key14": "4kbUXTRwLWgZhppzuY2zvpbWQuDWCrpN3MwVTdyyrk8UWZr5R2CEUZNXNuYoW4e4Bg9n2ziHCMjATg99KxZ6aWrC",
  "key15": "4Q2YbEsjRjP9WD1s73wNxfZyUn58QnZJ83zSSNUjLnbXznzPHcjzTRxx5rtw27DQTLoerVsdt2vJrYTMeNSi3W2S",
  "key16": "3Rx8ZxN2EzpNaMUVYa9yQg1DJjY7K6RxpfK4MDi85S7ekbLWt2pRSAuQUK121BvuCvnn5VdwDph6s53NRHcckjbo",
  "key17": "3ftH4MUZjvnWUe7Mz2TpAN9qvQhbXJgh6VKffUXTjY9Un8M5CwHMVNkdKdFVvzZmQXTgM7XocTnjc6JiKULBJ3gj",
  "key18": "2YUxiYeuqA1gcR8YvszTfBLtDhAJ1d7bE3JtUUycBkETSB99zxtvUrmhgnZi2GyGGAZC2ug7KbfiUt3zrs5kwKJe",
  "key19": "q5jMRJVVVykEZ3kZZ5ugwf4wRE3yoicrvpMVGHPxAzc55eNxzUVcW3ihw7Byhs7UYEHcKXx83rF8eLhB11yQtWJ",
  "key20": "4bByWnfcHUTpwSECMtT1dGaRNUCkfS44X2NFqtZqRukCTG8X79AYeqiJ8KbbbmufLH1yKcKSPt2S232KyKr7FSHN",
  "key21": "4fTdUZ497YQ9rMAKXfhaohi9Fh6NcZ7R1qvNQYW9WMKZNRtwmTUN5vFh7hJAKCkw7btKo4Z3cgPUn3xX9M6YK6Y8",
  "key22": "61JVzK6cdmjoeJpv1inGa9YtLEvk37rk8pxfspMJQy6PWVN76exWZP3CMp1L3siVszasgXZ4QrLUAWKn8yyq8Apx",
  "key23": "45jwNkmBW3zUScvLSxaoBfhWkaoaeie6nVfj6eqMVx4gR577ejsxJJYBJHwGT4vrrzQbdmmBpA8ZxNeTGaqY1wkb",
  "key24": "4aBBmNkysQ8SysQE4RiJah6n8bjyWEViHnj1w3gUSxupLsfE7R5u1gyyHxLXwAvNVSBgek7CguBWyXNvdsvhw8Ur",
  "key25": "2z2QSVLRdFF4o5tU72muiWjooS2GHqL58XGbRcSQdw2FYYu6Xvt3G9yVoTsYvfjZyvDFwy7gAWrwCpBck8Gh57Gq",
  "key26": "GZtNG9ukjcwokz1QMCzunEtQ1fyes34VhgLVTVR8k53PNWT36j4vuuEe8MzXbQd7RhCC7zhqsU8b55Jaas2e2cq",
  "key27": "QSq1GkEzVwqKT85RTbCyFhNiiTf8A1HnyyKUy4qZHYUpuVZUHL6CbgQ12ddwSK12Fi9LzB9oNUdGwDCFYsKaMtt",
  "key28": "2CWyUJp53fDfuDzjmYcZeW9z527m82hroZckZ2mHDq8DFi1kdSWdcXffBvGvuYyesUC15D3GX5828HhwUJNb6DxG",
  "key29": "Kwas1Yjhr52hxyCdj6QTHgs8NGCmvwkP2zuKZRgVuYABjp3eS342LTZy8adnK1rqmhWPbSXw9pxQVdU8hhftRbJ",
  "key30": "tXxrszTDsSm33Ce9zrjay2awzCrKaHck9ZJ2sH3tAn4eH3VADsUzxAjK9vUCx5hFhX1ir3bw2HEYbf2Ptu1d4J7",
  "key31": "22azEvY3p2WknbUYFJyzbtTA3g3KrbyKHX9erSqA1bvvERoUwP6FMajwKAM7jBNSfRYaKfp5RX99f6ES2T371afE",
  "key32": "4GMkm3s46S4kNgr14odvPjjakTR5KRNUgQt8gDHeSpvzi6EWHnoXgoeVAtFsNB9dLNxbqg4oDYNNMjuyXLkTm1qx",
  "key33": "2jjer4YMtKwggCp7JGL1XGtM23REfbqridgSwi5VUw6svsz7xzWxRfet6JC8f91naxxrp3Ld1hs2QKnDNqPnB8gX",
  "key34": "Mhs2n1gEQeHuAuLg8oWGo7SRc9qRSMpABHBf6PF74AVdJezf4o3bC3H7RyJGkSZKrQgzdA8HwkzYv58yKCQWAvn",
  "key35": "398FsydfmXfk4DaXrQAcMYWQU9URiibHUvtjKGbQargatKq3ut8NEMatKPTEhD2iUARnjo1Ef4Wr8mgjuUHFoNvY",
  "key36": "31yMaAEK9jzShvfgJXK4xVX296hVnV66GWzfcmfoLdCXQXmofkkHiPD9RZpvHBubtefEtADSAYUtNkXivfUZBc5y",
  "key37": "61DsRBTe1i7f6jsD8b9JstZknvyij3LFwhNW4xkPccNpU7gnM6iuSvqBD87wQMfGkPGGLrJpDwU9E63j7uJ5pRwq",
  "key38": "5FeJBjCukm2MfAFhTP7LJUKF71GuyQeNH6dS6WKzUfwcpnod5n4rPDVihuZ9ohkBF92a1t9wPeWo18VU4NFz1dVe",
  "key39": "3CK4AZqfU1NthMe1caiiKeCyG1LTUHqwscTU8FPnJH48W3iDtBRHBhsunvZQZDWJw5Mcz3pxUC6eHXuVSgnex6r9",
  "key40": "5suYwx5KyiWv98ACX3pkZdberhxrcwN5YWXVmjZzvMjkXVHmZ473b4hq49tAsaHszxKMbn9LA78XBH5b1RS3Gf6K",
  "key41": "4VZSZFKYg974qohvcZMpN1RmHkCYXdq2VpZvywUCmhF9jzM4vFk4bu6jZv1wvkfTzqr1LBi7rkqXuYgrAJ6qsSf4",
  "key42": "5KaXaZ23nZvZNZtfw37mjm7nhuR3o1LaQZ6AkvQiJ8x9YhNjZ6X8DKnLMEuvnxDSd7zxyZ7g5yo4D3zDQxPF48ej"
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
