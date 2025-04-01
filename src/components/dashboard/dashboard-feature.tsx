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
    "32ThiAzgFnpmnuJY9ch5yErVRAhc9VhQL2UaSuFH5PpgcqwaXeezTaYQj2VUigBt5QnsG39T15r8V4e9npjP1of6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWJywt91nHAyTf6vfw7ghHjDehRc3i7PZ2kH1VnRD7qMfust8pLcxnSq24oeAYV17HWPRKP739n6dza17HKBUKt",
  "key1": "36g7LHsQuZzBdNpFDJXx6NArfGNaveymJ9fFjn5cEE8aKfh339XMfisXvp8FxvoTW9CneBXpPD5qUmcAYc5WYDMd",
  "key2": "2h47q47xrboFZbCqATii64hY5B7FrB58K3ZTD8z66CbHx5iJdu7JdVM1ZhDccBra3JvxXaRQ2a5ZnB8x5dbg3y7Z",
  "key3": "3feXXb2aqgbMZaGN6tRNpzEgiogVRt2zh2P2iDM9Ky8ydfwaXqNmpXafHun4jAbHoYH9ECTGR9T5Kd1AZacw2aLV",
  "key4": "5Bx8N7K3KZXBKBhc6Aj9Nb9fzCR5yHcmUhrBhGKrU1GuKWvqcHFQkue6iNAGjGCZ5H28enHGTJCFqhsVdEAS851p",
  "key5": "2L6cfAuXhrYqweSkBG7eSc4rYLvDh9XUP7qg9PAdMKfopSezyFYoJMciuzWXSCdHa9wmFMe7P8b4tJW3m7BEVvxP",
  "key6": "M78QR9jf93dLpxcbPXmnMvryS99xyWrmkSxkTvXhJUXuJEN9R1YPoLiVbaBKYxUqTTPXB7XQBVmCcsVXix61iZD",
  "key7": "3sH1XpbAUuHpvDdtBAKfABe6YsaFRYC7UZj12qpWduJjpogsa4WGbvMdzwGQBpPNNfEkYumJhDk2F144NH8LFWzi",
  "key8": "3ZfYb7pkZMPkKmvNGDvT4KQbE37QMdJZvGvoSDv4qLMVXHoLmixcmgHY9FiAszWZb7DVEc68SncTgkvkBhyoMSQe",
  "key9": "SRXFBVZAhjDevHVWQRX3pJHnTSJ6cJNK82fM4yZE5R75vTsXZzckZY4jEhFBo5ggTs4Z9AQe6B9uvmAJncrTB7D",
  "key10": "57ZmR2gCJeGH8zFpsk6mZ2jfLuAFNtpfiSyKJ7vhiWzjtBEnJ5PSzJ85U94in225rcyFN1AZecD7RE2U2YALj6hn",
  "key11": "2gaWAz2XC9BQeAoHuxgQedmg9ZREpbmEKv41rCAN5hrd354vqYed8pMH1B1EwBJw17c2HqaCWaVeCJWWfk2LbUwv",
  "key12": "KJLo4BgRCKSgWpFiA72bWcJTFWj9fpPisfzAGT54bm9mqJaYPhLinaqvjM5MtJ5NgTZkHaUJnkWNu1XUtNeLg9z",
  "key13": "5xFKbVgR5xyrZAkHwfHrtewYW3MBWrmeXQGFJpURGk6kchhXCtS9fusCjhymifMjHb7HBZgiQC4Pi7CzvaQSKkrT",
  "key14": "2TmajBSrtbLL4vs2nUiPPKfQesViLqks1hCYLNGdGhnu1s1eUaycnq1bj5WVggcMaNFkEpDuaNg3xjoCzhonJANv",
  "key15": "3kBwzjHsgAtiwb2J8VbuA1ns2P8qH66MWCtYfqpFfLBLBLQKBSWLb9JF59iFdpWqR4fr7cw93khyRZt2juwdzxwF",
  "key16": "5tkfs85YKSGRsGFnP4YxYUS9VHGfHGwwfFd78p8JMcM52h3DdgKEgD22qPoaaTNpEfh2ruK7g83dRLb6rrZVYoKp",
  "key17": "3NUmPAs1PuxB6KDbkpHUX2AgtatczXCv6bkrrFZJaUZ5MfNc2dnXbEYPDECJGHGpQNyNgYhnNrbDoZmR5akTPzMQ",
  "key18": "41miVovh9ekYn4Wkkq86PmNn67RqcMuBi42wubawb8f1KAC7nLwZVTEogcV3uK6aG9HevA93xMfjWenQPfi9BRLz",
  "key19": "3noNog29cLaaMPs45igWm2bEiMwAaRGS79Y9zh5RkJeTAs9U6SQsxcB9YMuA2YNo7CNVioU2PMPs3PrTewnsVARH",
  "key20": "3zhZ3iQqi9K8P14gVByT9q2hvzECE6SU5HitL9kQwfAcrHQsRZDj7GDqvMkctqQcLhZuLUQETJNqZekxZfix2zMF",
  "key21": "bgxYEQZfdoHSp1GtKPx8ZTenk2QiJPgZtceo34ecxCto1oQZ7QDYVWReMX8ntLN1cvoyDVGnFUDGtUoQMV1u4RC",
  "key22": "1YG8tgFUQPVQbV9WKvxUVo6VryHPaCnWrd8MKUTjeKE93fDFsKPKe8XyTvdrVBopJ4nE5tRXnALVwApTPmmzhQW",
  "key23": "655DXiFqAhHSfNH9MjXZMHbvehL5oXAtAUAUT67U7PS2m3pkNu4YKz828BjkXDeF5NGHWGh8KWUwqFmWAkqKg1Ts",
  "key24": "5rVmraq8yDQ1dJTAZ6YJ2D7AuraCSAHZpywNUtSAUvwoRZujc9Ts7ZQs4m2v6kHW9Wp1L9ymkvLMsqh4Lz5xYw6U",
  "key25": "RZQMpwYon3sTTH2g6zMqN7Y1iD8UY9qGHos8q3Luq9YohspbdR8U5T9bGRnYePMfAtU4pmxV8bi59DxZ79rc8SS",
  "key26": "4niT4HvDQ33MxkSzS53vZxowJydzBZBZbujNoZpHgmNM6ScRwikmtjpwSoouycTfEMz7osQYrSHTLeLSvjMVdq17",
  "key27": "5GECZHzbb4BbqV4LRqQagsyx9qUWt6v4ZGBHdfr1VX1rbE9M72UD1e397UGhp8uyXLpMXMLEY2bF76d1sPRuBaDC",
  "key28": "vvNVPe8ToabJwUN8cZgNbBQX2ATkjKXisUXQttpx5M8amMhc59cNki9Q3WjzZFb77J2e2uzEBWPkqDVDSmfu3Qu",
  "key29": "2uPfcFcqUSvSe9CwkvhcgiEJ5cQnBAzA8tDSoLoLsH4aFf7MmxYFAKW3Z2KHkuGV4kXgPezdgCY9sZrT71mUeLJF",
  "key30": "516dt99J6krNRUN72QB2gorfW7dEZpcGd6uqEsmCygKwG8Lev1sd3qQvVUqP8cY2V8nQpFt6r9nkQYirqqrqJQZt",
  "key31": "NUrdYK4RvcDiafbVNtdK3ycP41j7VuMXbbvtN35nPsqSijWCNZXWjUx3jvqLxfcYZPKaMMfThzZbLDsjKfPaLqU",
  "key32": "2EUhwQDnMyFYzTCMSPWAQXXUtf3WXfZQTWL6CJNbddsqkD8hkwkxb5R6yNf7bztKMUxJUyLWtVzLUfDuP1vW3jYg",
  "key33": "216ei5d8iGExkiaDJqXYB7Z7jQs8rPud6PndFJbxSeNtMTNQSM6nHzgN2H4U4trG6xWCkATG686ttjU9sfP881GY",
  "key34": "5R3gL96se3KEDxxjWg32mYnXXR9mPUJEZHB8wTavqmFgLCgoGaEUQXGa3LicrEKPptLXiioqLjreGvFxX8wEBUXJ"
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
