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
    "4c56ZW3UpZxEFJvGTzxDK85YUQBAVuNSuk3vPu9fLF5h9pqU41SHmeVAS4KTJf4fGmJZvk9puSjq3fuDDAkBMV7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fsz15Du7zVwuwCR7gyoLRAC3c6Jk9A5xiQRPymj6hHD7T4qBgvCod2HTHETjGdEZKLVsBojk1LWM8btpqgAtc1V",
  "key1": "2BRWdUBJAe5dLCwNDTnUKU39a7QdJyN3tJWyMMceghWCjoWFeWakVPZiD5jy18kC1C1faZfiesrXzcmp8tQL4WUr",
  "key2": "5x4WLBdVnt33Mm7tveCoNvbsqgudq3wbkH2kayak9FNJBdgfqwFU7xbutfDafKpS6iz28c3zejYnZMFehw924NeB",
  "key3": "4kJEME64wYRucwnqXspUDCbf7FfMS9SzPD7TXtRhGJKhp7sV3kWG5AapNWj69mYoCuNzZh3huEa2jLjV7QsQXHpp",
  "key4": "3QdgTjhFk5QpCnPTVHQ7uzWkivLQF3q7nW2uWoysQh5J8Ncw6jYDUeUYeY1yznf5GbnAAaPWyxfobaEo1m4WVNEV",
  "key5": "3cGqQuCzBTkezr65f4bL9zTqSMsjfNTL9puNe9FMNxjnPLUbtq1y2qLA5zeUDHrThFAWKoHSxAeQa6FJQKtEmmRU",
  "key6": "423qKihbRoFLmcU64PU9Riigyp2wVKZUbWrkuYFD26HE6NxoHHQ2KZ2zvpga72XpfdoTxnA2njXYWaTFtkoFNtms",
  "key7": "2uapziT6ADjKdjRSYbTwM7uFrtkqZnHpmRf6VAXBLrfmFw1QExmnRfSjg43qiGxkGuqVAfbThBZSUzaQGoPtnQoY",
  "key8": "4veb37DrU4RhFtJKfjETb9wTXqbqdzhRCPuATFLNqpMiQpqf5DmEreWfD9qpZ3vtP4BvV92zMP3mXWvpHaJMw5CW",
  "key9": "3aDwi8aQgAx83xDxyNffz3DrNESG7FV94KUXwvUyCKwEUnhsocEutspYaf8mE1Pq98WpoXtE9c1dKDyfigiZqH39",
  "key10": "5QY4aCUfYo6AFLyWL3WffSrH25mY2AhdmdWXtZLd4kkvpyf8dFeeNrhj21WUqQ4EQJFk3EwH4E7jRraVnvoNq84y",
  "key11": "5n7JMPBSbeYkmSoXxd6eoFtjGkKs9EJLQimDuabR3AadNJBFLgScCgk2oWeZXcoFke3899aUowKjG7JZEaiKXhGJ",
  "key12": "fW9qunQGwcCzx9ZjkEapSX9n96hxoH8NbhDUWAaJMFoDewhojX18GxNAWYd8kLt9b3tbHRsGbEtycztH5mYaLCL",
  "key13": "2XqhKXpXoTTidHAw6yr4kSzFki6LhuUPeztsxZ1f7baVrfijnTTXvt5XH93Cethr6WNcBfnXh73AvRv7fVnBYtAH",
  "key14": "5fkziEcwmQFMZWTen6Vx3CHMPuuS1ggU5RhLspM86VVXSGxZ9ybudhW7jpegZUyQS9Qj14PmFYS1HYVPiT1KNRuA",
  "key15": "4EAcWKLp6tV6j7vXUuXnezMdsK7syq6er5t9espvgZP2fwmjwSaSr8So99SMpDcycp9f1WK8tbg2JBRqihLnYEg4",
  "key16": "2kSefwrjgV1DN36kdSzTDcxUaJVBbhJB5pR7K8iAsnJJcsvE1K4ZnZGqzZfEnHWsBcRKtWZjSySJKwMH5NtnKNqz",
  "key17": "4SR8VHnSC3hnV58TMaBGUk2HqATtvzXUUhSvjXPtxZPiy3sM9VGTMTqLgiuGJcrkxnpZZWhqEBwYxPatcEzqq2eQ",
  "key18": "2oEJZ38BggGZmD5Lu58KEkEv7ujyyuVhetT6KtLcmqcNZB7yBzoEFwMX6KuCkrV2pQgqoGkVsZk6dC5HQBaxuyMR",
  "key19": "3HGZ8pWUWcubBjhXAPb4LSKVWKArCnc5r4i61STGb2RTeAfWyWWM8PERteAW7hcannfMonbh8ktvLsBPctGq2YMD",
  "key20": "2VyaYPf46qUjDNP6Hxxkpz6ywSZ5QAgY47SELBewCe35ZBoEKDspTm3ffYsgf5AY2iyHgEijoRfTtDsHtmANcgst",
  "key21": "5xmHGp3jSmCHSsebmiZzvLrQk3mfjNWzkphaVWxdPSJv8HsfNu4cYMdDJgkuChnmqZ2VK5Vt8PGyp32QcFz9HEVj",
  "key22": "X8xPt4mc9EqiDQnQMHzcUjW9YstBdUUVUwzwHwJBY2hZWNf5CAYMZkdHUku6G7siQupco8epjtjKhh1PCgsSdSf",
  "key23": "hoYQhzbqsgd4hpYnj2m1AkSkRbhojKfN6iBRyWBi1jTTnMT7yVoo1oidy2r4B9DGu7hFXUFgUY81YYtYF6JuCne",
  "key24": "5JaLWszj9yNo7QDWvLP16gb2UmAhQwDngKUCavfH3V9uQxyXPxFbyCkrpAgH2TrNYY9D1WBdBpgFXUkkiTFoQjzC",
  "key25": "5ktjDuPfWPLjXtL7nvjG6P4TnGzsUw2scUfxzBqsD5CYjNXeXbkG2HLKRcgwHhkzkdqCwpR74ik7QsuaDggMGAUu",
  "key26": "KS1fiKzgGxuoXd9wxLvRfijiJQTMbfskWEMZZADbH7umXLsyPy1T9fnnPSsmB1moe4NzTp8rUnbVyRfNfRJEQn5",
  "key27": "5wY9AkvHoECnX7gVNbkc3tdi5BAtzHoUVppAb5pqooFtg3qtEAvomAzAWT5JEAtPsy6123mxtsYxbSRUhR3FSDmk",
  "key28": "5W2sHa7ha3hy3m1SvSVxV25SFkkV13SqjuU8Nspw545yQUJL2vHK9J2SNABKqopFZsbxRtRMu6mSdmpQYSRnym1c",
  "key29": "4fa7fHQzPjRYoSdQnFajKD5M4CRGY6iqPBJbzwuzWQQzfqkukG413Z6WUnA4hdEFHU858kKgH67rfkLqaaMvNgcW",
  "key30": "pWgyVed1nnPALxP4YnZ9jdcXhEnqxTiZhn36CzcNM8JMXu2Vmk6gdoDaKJwBfQswaZqPHdVXKofrQvbbiqrziQg",
  "key31": "5184Er8DVmC7ziVGTeSNopE23mBDzbzgM6vyhGiV1i9MREn5dwPVdcd9S1amTfMTYJWfG4yQ8UDJKvhgGKez9p98",
  "key32": "6298GWduQBjBJgGBaNYH8ykh5D7ZkvbV5vRBJi4Dm9XmJ84bYsygKkjTZkLVQ6hCu5ZYpc52xKFeNGgwMWDvFCtD",
  "key33": "2gc9nQYNwGs6TdzqmdgUFBhoWiCJQ7mmrC9NYdExRapmi3pABwmjTgmwxSuKdF7rHwyZHvzADCJoKiBRJF5B5so9",
  "key34": "2VsJRzUHs9j8WmzQvL5zo37Mb32EbVAcYaPcaC4GgMQ1KfG1GJVicM17DnTmozuhWfBDh7BG4HGgUwG1nYajCPeW",
  "key35": "3v8X55od7kiWKUVvuRJMeSVjVAZrQiJnhzVBK4bJeFMAC5ATY8J4Vmi9B8oVxmhKD438AszEnVK6zVnepgyXBmeT",
  "key36": "3sXnrGPWr5R1WQ1DtXq5kdpcpApSx4AkCpyXcKM2M3Ewv5EmRV5VfJJVVYtW1bBZQNtQxwrGxVNTXiu5sYyrcUYw",
  "key37": "rRCLKhHtVvRr4XnSxF9GG2T2wvREWnzhCskkc8SodBZDBKdjbxVDLPAFCokf1r7ALAko3f9UiPDzf7svxa3xDgd",
  "key38": "2Ea6T89ZqnmQwgyoAQLrMk6cKYsMcdEJzFeThesGHebyTgPvU1HaY1fm3ss4ENovCNCfQkLnQUU1HQ81879pTnet"
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
