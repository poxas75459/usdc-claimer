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
    "54nZsQ9dsSReeKEo87fiHkTU7zwmkZQaTQX6MGvtnEFDTnLasYGJM7mjmBctYz3tqP4ResoWYFUzS433pbDt8BYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DW6yZk8nfxRP1yxZfTHD1aYGj1sdS54oZC5ym9q9KLiBretFDnD5NwuXLZDtUo9TUdf6pQyUPfCifd2BmEzBBZZ",
  "key1": "56mkeyTB8kLmRfPkLHeEV7BaEB5tiVxHhvN1msK8yaUVD5GLPzoe9z3UEReYdBjGdYspHoJmpyQqpn6i1HVvyz5A",
  "key2": "2oyfEWExVGJi4vxBrpmFatJzriMaQAHDQBSXVmA7LmncbsDeNus1MSZiwHZM6xv4WEs4aFbpbBho81nvuDJicAT6",
  "key3": "2F9C9i446RbDhfCCEwRACiXTcjLv8xN5y59e2V5fwKjARTraNs2FcXhwi1PBfw61ZgaXPoqrVWnT9TNfJLpmrk2b",
  "key4": "4LCkaFwBBabRjFVB9zomw7HV1sDvqjKJcT1xqTmbWBzM4J1VUzPBCgv3LV92jtsieGpP7LxkneNY6VRxjWGWtMaK",
  "key5": "2AF7jFvNkYt5qbpgQQYx97SKpJPy9ZjuwrX9UDM2nbannGjUdKz3aptRTqgQKBFgTAKjY3NJRhdofj19u9P6vTUr",
  "key6": "4N2GJJncCUZenXreWmKH812h19xc3wquZrJjaZMha46ePZbP6q9YJV8YxnKwQbm6bTqjhs8qJAtC6qAaSJUnkWkX",
  "key7": "vDBReyxK9imfgy1TqpDgbFUKii1SkcSW41wQuAKHK4hkc35xmDb47kSsbSzDWBVTjW2z2jC6isSqnsUfKpeDVwH",
  "key8": "3KxK8awPj8vKE9S4ENkA1Subyxr6msozhzHgRAak6HGeNdzAQG5fUmAdkNe7anUzFTUesHdTLu48BddTFoNeAces",
  "key9": "gGPqi7kYMCb6YmpTDrT64VTq2BbKdwPZX4HPjjFsH82R58n2JwVenukficn3FeUMqczz9ANqsWADkVxEPwmhBH5",
  "key10": "4VViEfEB2VXhpU6mTJxoqr8TgB1ekv2L1DYqn3DebT5nH7iuQPj3ew8sSvBD1yFejopd85z8z9LbvQEgRUUtMp8N",
  "key11": "3YweVBCAzpkTcL6A3ovX3Ltzrm436G3s5r1E1mjM3FhHRfzYh7bdjySHmAHNopJpBupxjAcjHL1hoair4pLfn8kT",
  "key12": "5WvTBCnAJjQSR4WStJDrNCDmdTaWnG7uE9Hdg9fBHTw6EAUEYXGWWmjGJU2Zt2upyVCisr8zN9npWtmQW13kfsrk",
  "key13": "5y7kHkNJRL6vPHRMQq88Xb53v8yCCr5xSQ4wonu5zjLYyZhtL4dWxyUBgpiRW6P44ShpnwpTqF7Q69NW5LrULpGN",
  "key14": "5vZX6t7qDs85tGxzmGD3ZgWYBmAuKPGeM1P9oXxuz5mYP9kmGkLpAk1KnueiWFG67nrQJmMtGjq8NkZcL5gXrS3i",
  "key15": "9XWn7xjkp69USJ4C8oJUu8rimyi7GtBEa1LixW1dFKz6Pv7Vt9YGfP9FSdys12srSrvT8YzrkYSBBkEQKXUbf8a",
  "key16": "62cUm8a2aCgUweNzZ9cHrjgDtBadAVRW5odhZkapTjNtZEoQS2SBonom7LLDD7uNVk4FVbEuE4Kr9Z8HmPJGsbWN",
  "key17": "2oqhNFQa1tPDuzgibYtTPVbmbdSyaq7F6eutEnNWi8cFk2Yi223tQ4PzM6CfFtS7J54xZV4yHadqseRbkvxkHwHw",
  "key18": "4fxieJEjJBFHCGE8VqSzhZdWS75jEx4pxW6cbBUhNZ2Mfg7HWTVqvRrwge3dQhVBbjob8XuxUaJcThTTaqzhgUJz",
  "key19": "4LyQoqHieFLbfsD2449xdZuHoBB7bMjpjY51N2LUnGqWRdjjKcb5uGp6UJFnPBn2acmHjjrdy39VzF3MpaGcHDiX",
  "key20": "2Jari3dMFZknr48G4z1uhgTpGA1C8niX7q2hcf7moqScbQNxukR7h6cVK4WNnpdEVsNCVqX9yudiVxqkeW2hoP2c",
  "key21": "FK9ye93rhGNuom9EDHoyahybWCvNuwBwxSWAbLZtnxT3eEdL2uMwHYDSsFX9qaSn5wBQcKhezy4DgvvDk2CQrr8",
  "key22": "4eCjR1MTpSwBZr4TByX7kMwkRrBhd2XU5qQfYBdy6QW8wLWayxNx8qM9HkbVuGzwbE7qQgRVvuJpn3xS3ZJYg3Uu",
  "key23": "4rV2ep8NK5EBrMHrNg2boycBgPi3ppGco1H1No9KCBAQbweHY4ZmRQKe7j8ZfVq5ucoYUNQfjEDWFBVreAN9Nwdw",
  "key24": "3keJovYoodPDmvW3Tzc98Mvms7B2sEiUYhpV3MU8C7ZRxhfjBUQHhUBew2WsuEKjKHTr3HkNroJdCiPWzbUSxENN",
  "key25": "3EGivSJcQbzkuu4gZ55qdU2RWMojdvS1jbToFenwnn82E9S6Te43MNpTU68A3Cy18U8Q2CFgP2qKRHodLBqaqh6V",
  "key26": "3FjPJi9sxD6WBk2VPJLcauHLbTkpsHVG6mdLkAbaeGRPS8agukRtcgVpJNRdnQmUJVicvAQBCiG4hD8s8U8MRdiP",
  "key27": "uPpa2fwEZ3WRhJRMNfPDZrpN49Kt1kBmDxXiP1iQ2BMhdxAMp16grNDj8TZ8nCvghBjXuo47xfqj52rNtQrrG3D",
  "key28": "A5Ut3XTAjLovPyEjRYs2gxgtYLXGQPfUCQoTJNNozuYoBYaG7Rfv8NBvQTeS8rQ2as14oRFvG7JYjnBP5AFwogr",
  "key29": "628DMkgRQAWVfYLfv1uu2r2rFPNWJoftMrdpZsdwdxJQ5ABHgTR9nFBeTWSBHaQhxkKLgvaSCNchSg1kM1uBKfY1",
  "key30": "37Q4vakK3NM2RojYQr91xWrpNBgXyNKKtzXLfXqu5o48fzBuNox43rr2DeXDpgtCSukdymvW9zkAce1bz5TYrrKc",
  "key31": "3nCm1svDBv2Qoh5xLaMgDpDCvgZK6GxupP7vGy8JhjHPtHy6f9WBEmWu1seK3iLVRdtwSK2ELanW4Jxy8Pyqxf66",
  "key32": "3cSeaBLhhK8QMUiyH99ZH2PjKJZ5U1iC4RvMcrD2rD4KuwszBn4vhKe5KpnVRRffX3zCEd9CwA3yGLPHgTcB4GgT",
  "key33": "63NZumj9F2K9Q43aKYcY5GQk53jDNi6Ex7SDVNNeoqiuYgFNo4XjTdNsNGFWkykMwti5nMtw9dmntc9kbTKhHEpe",
  "key34": "2Lw3C47AbywHpA1k7BxtSpwZru3ifMJsrdEToCR7ock7Z5gktoBMAtfuHkJE1CSCCdVxdgW5joUonbTfwuQDUsdP",
  "key35": "yzEmqXZFPgNYBYhf3z9Xuyc7hPaRpjFjb6FPGaFcM3rEKztxHcPZ4Mo2Xv7ZrG8G1vk6oSh8YkAHAa9XJjqZVHg",
  "key36": "3HJhFVrJMognEWnpbmpfdWTHsfh1akGUJET8dP9LZnfkQWfhQ9WrDh1wzWqPxLM1Gf1gkpj3xAS5kk1Z5ViwMN8L",
  "key37": "4DjEvaG6Fp7ugg3BV14qRgi2FUXyJ3ZM5TdaHkhUGKAUoj7JRmarS8HvCix4U5dwF9TaYkFFusWWF3hJ8dA7uxU8",
  "key38": "5Kes9DrXaJodqKdarHF1aTpcxoTaNFcuoEbT3Dd9uz5DyJkAajidTxmyuEYwWkawPRyzM59e7pfPrwFqpqXmYgva"
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
