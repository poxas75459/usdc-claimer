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
    "341pQ7x7tYvKiKpaGatL1b8QCUsnCprwoLh3shmtDPzqta6rjeyvGWeMPTjPYrWdz9RX28xDWbNheo2Uhy2uiN6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49B7WZA2hexwxjbNmuHn2rQqhLxLc3TrsQZBLY9J8VFZahLzf9H1rqAsymacNs2afEtfSEb19Ve6hWGYvjLbx7mw",
  "key1": "5ExhDb9c3KLw3CZdbkRtGTnsyaruPHHEJuaVHF79qHud8mbFE5oKFccfkdhjxHoYqNwMW6cAsDKtdGZrMdGYFL6y",
  "key2": "3fLjMs39B6vfc9KqeNdJnaLwcebmsnJacyrYkdB21GfT9rLyviZdEg5tPt7y1nyNgtvKoBrMcrHVbadjop47Hmt3",
  "key3": "2rbXnX8znSEL6KrTwDU4CTYKtHp7sRSponZFQNzXbf1g6ZVyH8KFr7yQXum3zjxsa8k1PFBuL3VZrAAy2iF973HM",
  "key4": "3CGokBkiCyBtFPFKgTEwrRKyi8sM4N2bVv5fexTVPJ4jDEx9g793EbJovarX9G9FPY2nvL3YMZZTuAAoueEVBQBK",
  "key5": "JWwj9tkTAoDbmXjS7C3qkY9Q4wGPuqbnG55MWiqkkPzBy7Hi7dNMXeReEtsG8ghQbXsqyi9TbMNmZpJxfxmMq9X",
  "key6": "2rTuyuFZuFmgBdmYNVgq9fYFaTBgCoi8c6GemN4xEXPNiDb5AXj54efBvXujEF7aZdYKNiZ4LKoLNc3Hen7MVM83",
  "key7": "12regNbXBLMHHk1BiLyHm4L7nPSYXHXTesLAhBeSaAXxEm9zgnsNzAX7Weqw5onHWGZpNeJRZojtKGinFLwibBE",
  "key8": "2Ti9yXdTgfGkS5AL6snYCosS5xzG5QmzTYPTdebF1DHbM7hRF3mUJ62JNheKG9gtpBGawFrSeXV2JdsPGzzk3RMH",
  "key9": "3EiyYCE7jJ9a7Ez1hjsTftPZLhff5x92vSqWrBrX98FUNqxVqsFbiwYTQBnqCqaBVTJv3GDApJsQjsotTS5cnGN3",
  "key10": "2xzfuXArK8NsSb9EgkVsWmPkjvfHFivaZGXDJgaEryLasPqVhPZ3WTmP8ZRUppFQF1EysekmeU19vk6fcHASsruw",
  "key11": "3xQHjo46syz4waWdj3Rny5urxkMChKpNZSEPi2tuBfLL5T46QZ7SToxUqo6EeqK91K9iTu2owJUCnX748Kgqi2Vy",
  "key12": "3NFk4dwjJwMR616YJmN2VRnogckrregCq5wPZbrURJpCiCKMspW3XBJQHQS15La1jsMdJbvxTamWvFBAAHwEBimN",
  "key13": "2Dd1SbwFq5d4zxh9JKCrSxjMpcCX4j21AgdZAFzVYXGYZ6C485JedHbJ8a1nkAAU5zjLgvSb1qPLuc5hfcB89jrs",
  "key14": "5E2UVqAiV1VSWBbqWKFuLwEMgUn5D6cAZQyduVkHDU7g9tSJBdj2JWfMgUaXFDYH3yV5a6KB4cBp8d8V1FcEWYah",
  "key15": "3dyavz67YUMB5epKTDwthr6hJpUEj8UCvdJmsiUx5FQdPDpkxMRXtNHdvKxAFvm1di14tW5BESoVNi6gJHMhAPV",
  "key16": "Q38WckdWCTGwNzsjCdj5MLd6Y3QSxyGz7FSZzHxjvknKdkaMrCUgNh4Daz4A5wRa9U9q3E2HwgxnGYKgGsxZarV",
  "key17": "5NMn1u62Ms2q5rMrWpEC88i9B3QYKYgBCku2u9Rp2S93wp4Y6BhC3snbxwKPvvUWJvwEPjujoF6RT2dHLpeVvXUT",
  "key18": "2LmneKavk1HcwFfxNah4kvnHKgSpo1WBscrpebo2GYnZyYkEGbs8GJBkNrrfSDpsf6fiTTsK8FeZhVi7taMpxa7r",
  "key19": "4FSU8ZcuE57SHP4qCmJhoySS2XWQrePcNXx96bv9LUdREaCcUCpD55x4VpX9zvGNmaQAPkmqn8VFRjf6NLjMMB7X",
  "key20": "5NwXiFc8KukrLuWgpJwT6sd1LQjBtD8EdNqU8rvY9yH3uFti4gwZZpQqu8JMtsD1fFHnBjZ5TkKR5XTHz9ES3V7L",
  "key21": "3LWUoVmqdh8JEqeTo33o7PwLm1xtMFhTmgVfR6tAk76QCYGt7mGHSjM8X3DfSaq37uCWsFLEUBxTyypgyTnGdQSS",
  "key22": "4z1QRo1SnKAnZpQb73CuKMH6uxzEYxGZZ3Kz4AryhXhPPJ3L3RghY9d29DGxaMKmo8wwXt14ygobBD8uNm3EzZnT",
  "key23": "51cPPneda5N6Xk28wFSQ3c8FM4pM6Kw59FXaxFpAP2bpnNcW2fDT16SVHB92Mkq8LcP6RwPESjHXC7q1HFtURdT7",
  "key24": "2bvd4MgUobs2itraVxHwJ75ZKh94zZyoNMZXwQVAEaUh3kkna1zhkwpk4LSRAfkZufp2fSx1kUVzt6ekzEvCuiJ",
  "key25": "3B2QwnqBw1u3APA4BPWB9jYN2sinrYaVqZAeabwijoa95oyjDT4qL3kd3TZycPiWCXZBFQiQGmRik834iG74eqAf",
  "key26": "7RUN3HdxEEtiPLEVDVp7R5mnwe7gTBf7r6RhPeV1fHNvXaJAxvcBBEBnTyLCx92HBqds3AGWZQ2ZXdnWsGCPJZM",
  "key27": "4nCc66BeCGdPx8uxbRGgWrreywNFTH7UcqV7QbfXavwaZoks1c2MhP8q5tfybSqP6FpZEU9nEBEToNC7Z84uaudn",
  "key28": "437Nkf46icdn2PsCAVRs1DGMKrxcHNn1C2f28jiTnv4n1j8FG3c8JTLPLZZ4B3DbDRk1yzfzk9TWsymDmsUAvywr",
  "key29": "4qAUp64Z7u6rond9Zo7tdhzQafqNVw6ctPVgsV8zedkdc1gGjZDKVka4T7a9NGhwF9Km7dDmL9Pk9Hrcgh9RY6xW",
  "key30": "4zfjdF8g9FA6MP4DbQLpcUysLmnsQ2z5ATNu3LW2dbDy3MkNT2Hec4d5XuW5qDi7PH3BwPnbUr4An1QFb5QrS4mz",
  "key31": "5VhqnTu6dnSWnN94nHBMapP9vXzoCtWF82QeCqCBohWkEt8ag7uPo1rirGuQQcH8yyD3L8iUStxkpco2A7hQ26tr",
  "key32": "3pBmGdRwbtZrUAHVS798Wzf9SJYhPHEro5tJBNbtE26h2dUMdZrMTDU4kdnpJ4bh65GtqXds11DxqFDcvVNq5A8q",
  "key33": "3vphoddpdqBnWFgkqjXCp8SEheEfSBNdze2Dk3zf7KcvDQbKyrza69eRvQkcPBQrY1u5JEZSbhTZQFsZVe7dDQC4",
  "key34": "3qV2mjo18Y2FiwqDcSnz6z7ra54bH6bxfjZwjbBX2mGJUUs9WFXS8t12XC1uFAvoT1pE1Kg868eUsqBC7FQdKYEk",
  "key35": "5rdShZws1S8SjLJuEJzAwfLD6V7wMjYWZ6uCsKMfNBUvpuxXgQAg12wbMTDA4UMVvW9iG91AC4rWXZ66aKmb9Zvp",
  "key36": "4kDGeK25JU8y969Gf5omj9PEwjsCwEwjbUBT7HKo6Vzy3rHo6TygWJqVn7ZH8g3VqZwmehxH8sz24qv1JpFnzPYe",
  "key37": "4FgD4L6K8tbFh4WyjsDTeupaPqGA4YfyBqJ8S2fWsZAz24LG1Ux9ujkWZhF9yZZ5oic2JkJVQFeuJZx29oDj3CDt",
  "key38": "4bHXjK6WHJRc2soP4EG5Z75rnPDDKDvLBoqUqAH1acJrot99TBGCrn6K6tYHrLWMpvZ6z8pF3YTYzo1yqR9hEfUE",
  "key39": "3JzhQjpKsxZKghk9ZAethbNxeYT74WqjjxSoptdLUbU5tB2zPLrQTtz9MVm7SVdHnPeJt28XiKgkJEJUE9cWMDQJ",
  "key40": "2N5v5JCpyNYi2erBA8meFqeGUQvAtdWWWXT1NuVgi9o9oTwYhyAXjSLAD7GbaHrLKPTpSbMe7nEDzHXi7GabTUm4",
  "key41": "fexnuYDst4mKDxqn9d7RFw8nmef3A3Vtyd5qkYCGzsqZGNvfPu11fiveEvw8Aqd2zW3BQF98iy5v8EZML4Z4tAq",
  "key42": "3imjNBJJdR7KnrtLxvHDH5nkVEkLNuAtNRJLqwrDU4CWoteZDc9rzvqJm6fnZ4diB4HRqWvbXnQFsA76fUgeh3a",
  "key43": "5dReHpsyiXHWrKwdqkYqXWohFjXp8xeXMBFuQNiKK17M9cktEHUgktVFXguynjiZ324dP4WLC72DnLi3neWH1MZL",
  "key44": "5KJd2fLiSgrCJZQJTvX3HqARitpjTZwNT9jzkbkNW8LWrgQjDvFRgUQ1N7QWdZaunKu3mEvQNZQgWxmJ7j7oHiWL",
  "key45": "4u6S95Pe7r1jXF1kkYfGEACY4RxqhfUSTsuovvbVobLUAP1GeQd3z1RpE9eY8LEjdJQDvzAbQdm9gGDnrBg24H3X",
  "key46": "52FJvvDh967M7hwHzVtJiYsa4tGRrJ3WCHmwB1TUanQDQHpK8Xoumk8i9sj7t9guBV4qLh1UZ7Cyn3pYvwXu73kK",
  "key47": "3DfcR7jgqtdMXcFVWNZUqAjq6W2Up5oiE6PhKKdoCf59YKFgEvFYtuePctuc8ZPw2bE9g79zPbcLMjepWPRfeApq"
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
