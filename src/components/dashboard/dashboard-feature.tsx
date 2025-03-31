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
    "u6hFKmYKcWBKAnrf9Bhqmxei2a6RT3B3n5PJRrTZSuQpDB6Aoak2gZWFdhb7UghakmodyWFei7ePanB6xM1HnWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46HfXTw1NL3pU9kDJgwJcqHeJDS3SByQN1qkbbfFHG7v7Xp9BFvVnKpr6CyCnUz3To16W2Ujjak7FYsWdxqfu7pq",
  "key1": "3M5PZSkHZf5WqRrCbo1uzXUq8J2ahUipWLiWBF1KKzXUPBvfjTE3GfrPmWqMkPCc9BAaSZ6NgMXZv7mgBKJQyJm2",
  "key2": "4x6ddPiceJv7axAhZ8khi27pSPKF88RyFQrSUnFrVaiYuBbWHz4kZkpiEYqiym1j7esT93xAPCAN1AbZLsRdRSNH",
  "key3": "52YrCMkDwQDRM3UATYY3Ho87wzhJ6sCwxT4hXzYXXLonZmJqEeT3tMBNEjzZRQ64YKPbm88GZQtskvbF7wCNMafy",
  "key4": "4mDGZnDi3emxC1JmCsieiARxVqskdUJFu2hP1iegGEKZ52tqyk4QYx1T3gyHc6RNdKn1r6jWmcUdrXUpzSJWzzfN",
  "key5": "2JGK9ZPiBSXSH9MgKqwEbTyDkWG7yxzikz18vJ8b3oQ3FU9A5B4NRBPGrEyeR4Lq6FGhnkQdSP78WTMMajEdsmUy",
  "key6": "366G6hNdKULwGtM4zhU6HZypLFiLrQWvNkDmR8jJiMRoz9D5TA41bseumJXhyUtaDaoExqdvnjW6YK2wgc3AqdoY",
  "key7": "3xCkHC9r4v1UPJdvDYJKzXfuGzeJdxqMrc88TZjeef9mTuDjC6YhxNrwCzKiTKjEqtJQkLeBxb8mgjDQJVc8b1mP",
  "key8": "4VZCpb1gwc4NNGmwH4QqzkkoPBfy8dRt8qW6EjUaoMZhxQywRdut5YoDPU56JX9VFdFuPh4CpvXyteXuR17vtzBm",
  "key9": "4zBAsQhyQMTXDh34cXuFUu7wpvcVXjyYggTpxhFhkDXS4EGiZpk2zosoSHkNmgrc1GokSDmStWjfGRxjisEwYqsR",
  "key10": "4tpicT9WpmDBwb8r1DUkBVE9WRQS5ChRFeB75o4d1yoQJGvJGayhW7Ad5iufDFqKVWzMqdkficYfTH9xKWawr8Dj",
  "key11": "2KNvkrnWsDNtY6ruZyujDBgEBm5LEywWyZEU7Xu9mggCR7q8j6oK7ivWNLaT3Gdkrk3eaMQBfxwXGzGwpn3yH4xa",
  "key12": "cmqQ93u7MuUF6q4mgf8CsvM9WSHCpUTSZSTKQrWZDFwoq79SeTpK8rNKqXzaFJ1wQV4yJp82X5TZjqNvV5nH3Wa",
  "key13": "3KF3ZtSZVDSwMucgPUx8R428LbXEDuLFkrFeM5bntWPKUn9jZ7Af3eYPt68BM5CkhDDpHJzFkZXynYf73jvUTUvz",
  "key14": "bxpXkuQj7t39xtpTf8guonKeqfUvVJ4bGb5mtwPLq1tcW6JD1oP8a7k78cQNEouchk8vAEnQhVkarKWpwqVDDSo",
  "key15": "5dWtDq4CRa1Ua6J2tMLqFsjAmNjWmQP7fsAoes8Ky1Qbzb6A6cAYQoirgrFu8GcpL41M5YEu6H1YUxmAY4smnmKr",
  "key16": "2Lc3d7YgtQZmJapBKhVwaMd4aytJ4HTXfUf2u3CA6655EuTqXjkxccXTEf8Ax7iopYR2rMxueXLTs4yYSwNyArku",
  "key17": "5RLwqKjQTJ5uPtYN42zdn7gk6qS1MDPzm5fKXiaSxb4oDCFR32nL7Y3yzQ7b6N82x2uBcth5n39z2AWNyKqUsayC",
  "key18": "5duw77KFa8WsRgCUKAtwXmXV21k2UgCAg3iKjjctgcS7LBE7wsWS9JrzXG4jHPnsaFsNC5f6hyTXp6zM7cmituvZ",
  "key19": "mi2vZ2RP86U6TqnMm1QrZLdHWZBEMt7ELc1WBUgH9xQD56uFCgkjmSMssUuLzJ3u4n9heBWnMFL7qDecrq1GStv",
  "key20": "iWsJXNFBuYp7bvTE762QRjpxKMfaCkHw3ivfTFQS1q6mc9RMU5QSRaUBKJPUEXGTyEELgcijbqcNaiS1urjeCaR",
  "key21": "5uL1f7n5JuxMZ66x9kQ6R3PBZvq9rqw3geaam9U7vei4g8bR4N4oJsDQGc7XLsSEa9jqKuxsKKCbtcnRbf2GxXTV",
  "key22": "4GAwjY8yW2vVkERNM8rVDtKyaUx2j6exMNHaeoTC4aCJRmUMCCdok1AMU1aXw2GLom3zmznttSc51zNqnnzuKmNw",
  "key23": "5PX86gaTfoHdAXsVMdsHUzHW2ZbAP5XzRE9Sz7LvvVjJJ9vNhAAaZ7yfnHBoh4uo9zF9ieNe86KkY4UqbchDdgtB",
  "key24": "Ph9wifBVF9oUTZ1FNenSmPyPhZtFoDi6zMtYg3BUCiDH4FLSkMtmwKSDsHU9PQSpzzp9DhDafqVuyQtEU6XSaNS",
  "key25": "5Jp94iNiETsbt18H53KRV9pov1RjYSmQsceuSHLCcqRtBpNwYLeVDB5DMm6E4DV5stnQznmmLNBmjqwjqgqHszUz",
  "key26": "4aJcLq7zfQ8yz2eQF57PTMXQjDUtWuCxECE5FHWUpwADSdqi8iSYcyA6VJPvopZoxj8xaN41cEck3zkQj8VVGkq7",
  "key27": "2jA5D3hdUU69SnvRVqM1t82wRc6ggRzpX1vFCxwbqX95GwxueZ8P8qP5GLxbKKK6A9An4Y8usD43NkEXT7WzxWZA",
  "key28": "37QGdFhxQXsjL4sStxMiLxxj8xFkg3SeiDXX4WjLZJeDbDH2DCdDUbjtXshX4qHkqMFL42gSLhfwxQc8Ji7hsDC9",
  "key29": "52Jz1N6iJessmcnJstGQt23CQWXcjgeVyrZLgPFtwckSPcK5HdNzaNZBmxFDwJigUUE2bryeosAL8hbt1VsawEaN",
  "key30": "uhpkYtd2ic7wAivmy7T7A7MDH3FmhAv9YJDuhBD7TcztwT9kuiEqc8q7f8nWNvRqRQhFQMAW9bewdaNnmdXCGVG",
  "key31": "5QjY2q4MTYRefVSCBiP2VbW7LV7pXdktzFSa14MXa5NRAN7154rDNj4mu2iudJT25JvU1XxfnNEeEN5gvwe8RrfA",
  "key32": "39KXoQTUdM7nSJJRoWv4WfE4fDMh97ZAkZhEL4ojq617C4Nvv72L27NGVLPLyfYtykzVtr546U1N6mcaYkkXAAg7",
  "key33": "61xnCqWbyAeiFHJYcJaxHMiFAJ8QBS5BBh2QVweB9mqkQcZsrAPVshhUK9WCSVnEvKTn8shnbRTuAAcoNava9Myn",
  "key34": "538q1xw4YeUg8JWtcUyR4CdrEnVmpvrd8JhLnBFWtcbXSE3kWpH5FzacuisfND2XfjMpcPAJ6Gx1yZ8fPiMYu5QM",
  "key35": "5zUPf5WWtgKyJQp7JpxH1fz3gyhA5U24R5vVxgiB2R9ag2KA4Y5AiD6K167fhK8FDCRwU6m4SdssKXP25MFzrwJ2",
  "key36": "5faa872TyAm79JitG9piZxfjn8ERHo9V9KH1TQ4nfPHQXpsMtq8Y9HPy15pHY7ZQjxoZq1DfoMBjCBGFn4MMwiPf",
  "key37": "2e9PXnkgRkrQUGKHLXCBcVuUfd2Mgzai8S2SBNWbSCxoUx5r3iKztBa15wdb3DQxJB7RgKv6AzD4FLHMU3a7mSgY",
  "key38": "3HrZ9hA1VTu4poq4RHqGgpSTMAcGxbT9zeKtpCDV9j2aarE9AKcUbLE3ihLoogcBNAgYdiN5NTPGWJcoGSWjKdoP",
  "key39": "4T8dDn5duFeUxE2VZwpTJxXBgFdPbCkNiT37jv3q8UbzhhJG8onepK89FXQwAZvfhFqkiEwnetRatMp5WwtcApiA",
  "key40": "2J4Kp4J7kDacb8b8KopPFhZJSco6i5AmU9uKwxgMFgXL8GPE98TXJyNQTojPR45JYvVmbqq4bAbYJ3zkWTYtiVkA",
  "key41": "5noXuE69FenR1bxEHoHruHstqN5wR4B8XQWwkfpvDsWkxxfXAiedhsuXgZQHQETSzEQ3beWtrzcosSVF4E6Cdrk",
  "key42": "6kEkpb9RnFDc7SzAgBSmKZvqoBaMZEuRYTvDQ4nfRU4k9CVEgyaEZUb4neXYDGCAx3kBvYgtxgZDMdCnnDUA9R5",
  "key43": "5kgZtbxjHHxGzWEggYvNXjsAQv7FBrE4bnqkBVeygRswuN8LgAKR8QJaCDjXDZiK7m2bR5k69TobakWdPjvZmmux"
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
