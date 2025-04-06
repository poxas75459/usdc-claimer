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
    "XgMQjzr1itqkeY7WkYNJtuBseTCz2APXNnSZBArT2s7zQZtpJkXxMq5DKsceBKPVZhqvm4eMXDGckiSdarPFyvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ghHUpDG4u7P6Ea3aCtR8bnoW8asqQixd4hd3MfKeuNbCorx47QHFXjJDHBVSxZxCihmUm99VGCGWEB7a8ZuqFBm",
  "key1": "mpwYwf4NoHLRM64gi7tBKaR2QvPhM2CZRQqJwvj5GLNQku29sQUYJ9PgGkpTMqjgwuF9w5A5oqzsA8Tzz9x4gRM",
  "key2": "4tLbswVWT7WBJ4rKM6zkWUqkmCw2h91rEeTgQNWsJJsQXMSH7NmgX88RS4jp8hAP5FpZAcFRviDbXmDuZFffd2by",
  "key3": "TcydHyxgm8brjaJCQSg7yXTAi3se8DQvTn6AFCwCpjP5EfP6PyCKVVxMDCkhKchAu4DAmiTNFqjayPZWY4a6fzq",
  "key4": "4ArZjvZzzvqjbJ1inJiv5CvHs3tPFkCcqLVE13DESse2jC5Q22Bd7UhZWy6sXks41XMGx9tMikz5vgiFsoJtooZm",
  "key5": "65R9mzZXYrFzW7qyw21wcM3LvWcZcvN9sA2254fLixJm97HrPNuFRhgAbuE2DVpRBWddvjPjDjGMtP7Yh1yK4d9X",
  "key6": "3j1GWufqCKX6mBhwQwjghEoiFMTabNXHHp6o45NtYRXeD1RASBKv9RMZHdgpBbBH1zp55nNNcHbYthtK4ZbVURxH",
  "key7": "5zwbDB52b9JHKFantnyGjL6AcKrYPofV7pZaq3voj8hWAjmxvuLFuRTdRi8GevkfLaVqXYiRLo4HTXZo7NmyF1DQ",
  "key8": "hksgaUXevrb2KtzqT4hn4UVo7dr24d7J1oqJJHUruix2BakeR6cK5qZ4ebC5KYARZynzECgPQHbfe9LZ6fK3hxy",
  "key9": "2jomfBAGNbmR7Via554tcdXokdqU5t5spmttEfsVkcxULQpR9idEgTgvFAG2gi2TDHbDDMndEaaHFkHU3xtzVLGD",
  "key10": "51aWrCpwt8CJRJWgjURb4AjwTKQFfCdpKA5ZsS8dAxBYC6kGyTwAYWxKNxZa9oHVgnRAsRQtTbLocC9KAueRyEKJ",
  "key11": "2zdotGyzHoAm6mrNbMCNkg9J6jAiKfpUFUXynFmUL2HA6dc3AuEqB89qbyyjUehba4b5WCqxE6ACTYLU7NA1JUNJ",
  "key12": "4Dn7iwu5f7A5pHvSLNThj4ZmWSUQ8v1psCR348cTVvoPaX7TTFNyzVV3mdiQyYsQmzPr9Ad2AjGrcSC9yEC23Rf",
  "key13": "5EuUDdL1P3bRVTnJqUFPwTE4c8VG57nxnrySitDChrajVonDvVXeVa4WJJPjxrkB3xtsKKFvaJeR3PdKKVbav47",
  "key14": "4hZG5sViTQjepHiknjBBbTxpDu9vvU1vGDHYNYi9xQHLGKhBGkz7VeaUQPTBPJfHDbshjpzy1FUV5z1ySXVGp3qz",
  "key15": "4iTZPKhKsnxbdeUpHz6dr5qH2ijRP33Cn4qGnrySKt9QXg9Ma1FkjURXKz42jgC99czKaEZBEubqVDLfYcUXJ6Ek",
  "key16": "4JeomWRiBmGC3gY9CoJd5CqDbDq7xGRgZ1knnJudc7x6PpEX492NhYHLStAZY9LMAZCgTaRt1MkaP32t1pLyTk8U",
  "key17": "FyJdtKvsVQtLW9kW2MCzWm3rZKq9kRNEvy8GZX2ET9C3rmsFhcvgkwfSjwWog68hP1xKqpzBN4UyTBTTkMZ6pZV",
  "key18": "2w2zo3AQgsZExaHwfE59BaDV8Voi7FR4Gp6rsoA7XoapD6rhcTR1q7MBCmR7sGtmWqvCmhkn82x7ZTj9eQpF5KDz",
  "key19": "2xmdnHL557kht4ZWTf2VqHYKnY7aED3V6BsLNCcFe1eNs2HVMhJ8HhMG1PXr9kvvXzcUR9tYWbLWtvVzQbo8sCkA",
  "key20": "w24QJigACdfWYq31VcYJ1EUqoWtC15tNkHTHXSWy7LNLbPHg7YdbdMr4tBebymBwAQHvV47MSgng8D1WvZ7kmSc",
  "key21": "5FBm5PzzaqzBjCpVnyoXxqLYCTt5i25Y94Q2JetyCnEu9PkYeMHUGsrr44Y9qs2bbiqJaVUM2Gjd5zxazgKuEzd1",
  "key22": "3no2b7JpavpSou1mdC4EDf3i9ZhtiFDTYTwfXQqnP7Bt3LG43ed6z4yF5R8TEHn3h9JEAu2JRGof5GKbL3g8qcTw",
  "key23": "44tg27DCxtjjhRe16tzU56Xp5tiFWMeJqzquHDutKo1WhFSVDHZKYSKtavvDN6rPMyAvG2rH5Yk4XrWtK6W3wb6Q",
  "key24": "4DWjxHPraZ3tQ8Vqrgqs57bbYz1KwDcu6BBZ73ivqSQzdFXc8jrT2UMyRdSoPxxAqJakuT8wpYbj9omgUXkfmqfV",
  "key25": "3J5Y2Qigt2gabHdUwaFWNapP9KFcJH1mbJ7RLC2EK9H1bVrpGqk5zdqjJ3vEKwpE9rYzPuWwoHmvv71BV6LkdmFq",
  "key26": "4rDy6wn9996SnjfvJfmB5W1kbGURiQMJPcFjVJnqDMfD2czpwT5VKYe6bWwj7qmZ5Eg6nnt4yF8YGF184L1noWn9",
  "key27": "4hd2ZHScFYMiMJpTzWfYi5oDJq57qaH3GCAu6guX2rzSLMmShzQH4wTtE87B49G2CbwfZCaXanpffXYV3cyKAWiz",
  "key28": "5osV3pfLSv9J3sYDkUxSwqcDV2izp2yxQyQDjpGpJw9KNWsNWq4cMTjg3ZUKsiQjodUcSkYCy1Duvp5yxoH4As15",
  "key29": "4xY7BeRvJQ5eim1jUcdgKQFvnSs1KzswiYFtTyiBPpq2c44q1iv34HDRt2eFMXLq57XwF23xbXMiRuueZffkNFzm",
  "key30": "HtzyLcbyD9pv5Szy4muvZdQBWD9tjhtBX1fVJjMfeADom5BPh4hGtYdGGXUHrxuPBk55bvHi6CN6c6JRsnpJ6yu",
  "key31": "2aVeqo4ZsRZYMcUfJLMRy138ApbtDoNubhpAA6Lg4TF6rK4AmdG6ZwSZTuSXPMuQe6dKpLdKX2GgHywgVBVxB9kG",
  "key32": "4q7TXKvi1RSmLZW7xrrgipe2sARBvkxd9BFwBnPUtX2NfhBrJrrYvPFBRevU9jv3RYFeReCnrMi4pUDR7G17AaXK",
  "key33": "ret3jGsk2nWVrrNj6yyL4E7An8xiJ5yCWJ4udZN3L7aSs8cjJcPrUNKMKn7oJEZQsbVtoxSePx28Umyz7DoMmFZ"
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
