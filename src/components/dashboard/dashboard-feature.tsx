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
    "3Ak9Cfaja15oAa8qCejszJr6iLJ2MpKQY4DzoYcKekvyDppVGnw7SR9aA5w4VCpyAF38wQ2CnWmmf1BmqR8nAhiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YoKNzwLcCJg4dc5ZjpNPxXUZAeo2sdVRxhFZSswxbFYLK3ytFtWzrNjUHSCp5s1owXjXyhSx9g1uoaTHSjyAU1Y",
  "key1": "48zwg7vRm7oQBGGNvjmhHsKEqSKjrq7ZgJJCNP4Ak1AdDKFHPyDpv1WqCHL7yUJanZiXWpfPFyTcnGokp1Vyu9kz",
  "key2": "mkeLxMDKQ4PFeK9CmxjnHHQ2qvYsDeXtt8UXrZV3s7nex1rVZzX5H7R8EbzNyYymr13V5SNhDfmjZK5CPE5T3i8",
  "key3": "5PMzmSqpEfFniD5GpHFGNQUYQeeW5xzKbsU7gVjxDLp3TdPVqdH26dzaQqkfpK8qrjU2GV4ep3JC17WqKbG6Zti",
  "key4": "5ycg4CuZ3h3kt5fM3JcBa8GVgJzupV93SfdAkUH71F89pvS8Q2tmTER3bFYHc6sVppemWa4zMG6SspRsRbVNFLDK",
  "key5": "4yrBhvTj3m8NcZfwjX2fmm8bQcdHHzQGKHTRuupmWzT36owiPLphUNK25z22L9H3CbWMfX6yDMS36jG6PsF5Py7h",
  "key6": "3Wrdkj9UVBPPWrnRUhy1ZbomZUKsFtFL8Hx8KmbZfwL3qjqR4ypCDn3ng4H4hxdW2Xr4Tgc5N6q2teF5BxN1K1HU",
  "key7": "3dQPNxhyoBD99xKWBFwdgNW6KhEGqWFJgN6yMDJ2zwLfXJLZMxBQDspYsMEeQbeF3regvBtQ613kpUYpSQbNwveT",
  "key8": "4yzqMEWp88biUQbs8UuyXz23P3ULewJZfR9tmVcDdUv4CMYGh7BUNEX5MwcmWeXSr7yXxWP3XqQgC8QKnKHWpCRq",
  "key9": "5eqewxfmo4oeWpdZLoVteQm6xfm3nRqDqFuN1vN3RBNR6fdMNpQY328fx5xESdMik5mcTYbdbNVuh9hff7Du1UBV",
  "key10": "3vn1LppFu8PjyaxMoNMuXb8TYtiRwATteo92etmRkcLkwaPFn5apHnwbAp6r7fmrz8NBPWtgKXfHAUJK3WeuxE75",
  "key11": "xJsxJ5CvkvQj6KjmCJzX11qdcdr9jjFiQY1JbzXHWT1zwJFGpUyPLLHryXgCfBGqAMFJPtXBne3ZMv6r6CAwZBS",
  "key12": "4oERprxFsowaPEhoJyUZqXBcPFZVyiMYuPdi4X7e4zAuhq3qMU3xoVqUn4TSHTp7ykwAc2rhk9VXKFUSG2c4efEz",
  "key13": "3KTMuigU8ydeetKNx34cdBoMBtAShUZw4tziH4X762heGLJAo8YDDDcU9ba9m3XB4kaJqqRZydCWKRdfjD44voEU",
  "key14": "5H8SFXJPABUKgymjNU2WgCDCGQbfBnttDZJF1HegsJpWv44AHqneXxDEC23c4Eu3fzqJK2qDXM3iMLDETC8v6Cwt",
  "key15": "4hdexECAWtwdhG4RjFh8V4VmD9mDDaZTeJfhQ6XUYf5HZcFULbffRspcawZZQuS6MR2hwSuh2H2KuH3WbKqLjBNB",
  "key16": "5RMVfvZ23RL43P2huRsAfa53eygqKjYVGMCdomksTHrHaTniHSZXaeZUWroKU9QEUGXNSp9p3QMHWVzoQGbVYQ68",
  "key17": "qS2eejTpvivXiCjcFqwBTgENgNPLCwcRRAvc8ekzDRG7K2eoEvh1Y3x8RXfNkDfB87SNNU6UdKLdxFTV3kWsUbb",
  "key18": "3fiAgHkVWswLnTuuN2TJ8d87zy8xL622SF5FWY2zrVKuQqn25nt75pY6WuGGeAngVjwj8KbJwBRN2VGXKRRkqt6Z",
  "key19": "4GkwhNwMCQZo7zkad7GsCd9zGCp8sq8n7WqgMKtFLmWTMP2ENy7Ce8CVCS5eCW4HvHSqaHZZkUDScF71CrKy3nTo",
  "key20": "4re9bZpzaDihaihoWpEC5Cn6W6jWKRk3nqzBoCWskh7HFRMCySAM15cLtwonoMGXBKYopF2byx5FHW7d4gAELqke",
  "key21": "5QPnJsZQgtuZrTG1GqKEZXbAnJpv9w5nJeZentdEkZkdSyj7xsKp24nCzQMJ29TodX8XfZtczbcoyHdeBeuL51HG",
  "key22": "51dggz3eSyRJUazuDYQUmuUiN9wFob17WK2pXFRLcbKWvzmY7yVFqn3P9bt8cHf5j2KJ4aGqMBYp6crwEwpKpyL9",
  "key23": "5AauALSukRqyjnREnjPqD7n1KSGtxB7QKeNXxHq8eaqQ3MXFAnowKnVQH2i9sByPty38cj6vXnJnD1LqjjyJLXeV",
  "key24": "4AStdAUrCBybvnXHbXW3Mxhcb2Q4oNiM1ShDFWj3XoHZhZYCnqKoCEBC5L7sFkzedhMnjMJ3vWg8qnrE3Rk8Te68",
  "key25": "5pRAx8muksBbuqrAFaicZdsTNA1grxhW8kEjmDehbsuS73TkXGxT946ZA9kuvCNVM1LNcrZ6WT5iA35LZw1D5xU8",
  "key26": "5nEn1482yR9pAytpVBVdLYqCBRHHKv7CjTuHs4y7nTCfYtvo2v1iW1P9YzpQJVpCGnbMpxU8rLQPFt5tQBsyCmmY",
  "key27": "66BJjdJXQ24bknxzzj9vWs26UxrGXHKhDHBY1BQfCdVGen4R3omWYd4CbxBq5ZtCdhtHx6HwfK7tE7hrUSznxbhH",
  "key28": "56nXEsDSZPhtujC6n9Vf8ufNcBnzGcxbHLMXeATeWsFW5TFD45NecMEzSne4ysTiywXzspKdig7q8qUQoD8b4tGM",
  "key29": "5RCQ1rwrhMzFXkQKsCgywMrAa5GNHPKWo41nMQRDCVtd5m5UAkXrtdjS769LbifMHtWorPJLVdMeefTssLLnua9k",
  "key30": "2RJ271bK37nj5swU8miAFHh8JcCwK2bCe8eh7jG5fRX5Jg2ck86s3P6RFx1tJvLfj6KPpjYCnBNgi2aBmBwyoTUY",
  "key31": "3W6fzVYvyqFjoxs9hEVrWmnz5uQMnYQfBL9dKuKqMyobFAaHCQuH7ao2ZrK4CGYcTWRDxPcu2Rr5C6o6BQrCgQFA",
  "key32": "5MAS8nfg1RqrksdqZE5vvCmtV2RWpeKtkCVVdQkxKbzDyJkVJW22ZLGn5Rs3M6cGpKbQ11qkSTFugPqLYruiYwUs",
  "key33": "2t7jFvCQnLQoeRssSZ3FZRZrWvBsbHU73bGqYveU2to5NB672GT2TqCAbFEStffToRcdny6PFM18JgjHQvEd3555",
  "key34": "2p99u87Rrn6KPTgP352LE7TAQcTAv4cLSxep6WNzH3QhbvF8zXBreUfPfcpuhz1yHEDNd4GZCnd4eyYcB1MvVkyJ",
  "key35": "4vB1Kz6ehYy6FAF7d3dAsHdmUYJAQ7mUonTVCBuV4NwiRvixhrfJ2ceHaMwJRN2bgDeNGuzv6C86XAY8mGRUQvbi",
  "key36": "4Z4eq2NenqGxfGW5AMVtsvnYCa3QaeLoXWQrafm9KuPuBqL71BB1e2EaMUvVGb1EUEfTTKGPZYqrE7hu96uztPsF",
  "key37": "3bi4VF6jeXc2RqbmSiJbJM65mSz3mWf88VbEEYKWcun3JEqTK8kaaWZPnFoWfxcnM8WtUzfWfQVFNexm5nd521JJ",
  "key38": "4yWxxRMNBt3LEq8FxJANXKdtcaxCXLSDzs7RGQPshYwNHLWyYgjmL1Lcfnr7gnXbGKUxrzczxxUTWiqaVQTYmBEC",
  "key39": "34JEkDbGj3Kc7hM1RkCkqMwKctbzum8GFJYzAGqq2WX4oGB5qcSwDjvKvJ2cft9xudu9wxgJDwzU3V1oa7FA6mmg",
  "key40": "5PMLbwGHJJKKZuhnTm7uotgHpHbZSpWETWcZxEYpvmfy7J6uLKQKYDLM2M86DAXMqii8drgQciWT4CVx6rVammLt"
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
