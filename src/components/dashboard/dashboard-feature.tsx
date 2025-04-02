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
    "4UQWSehsBeVfyVTBZ92Ph5M3RUHn4uWaY6roK5PFWLWuZx6CysotwuvWJ3XriXfKDqvfKp3L9LnkzyuFkzE4PE8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApoXopwaC2Vi6XtXVSt88rJrCWJ8yn45AjrW3J6kEjabpkL8LFnMryWimSxLVCuG5qBSTYWuLd7My5s3pFUcGpF",
  "key1": "3Ksh5uvgrWuiGZNZfrgRf85dBQMJzA364hDMinxk77CSauFPv36xZisDtEumhmTbw8QFmKvoXdnqpT2ChS35XFyF",
  "key2": "3nz7W8CF4xviCepAaAKjFcoysQsY2ca3sixmSXMJy6mdRsbBcrBbvrzY8qZ5trVLrWDTaK8bfpgiSi756tNfnwah",
  "key3": "6CSEGSNtc6bfzDkPgTE18T2XfZRQgReBUraf6DBha8ELQsyghmrBMjmurrSTiHAA3zDSKj4pbVx8ninSGWHsf3P",
  "key4": "49Vsp9a3Rr6w72xDisHmASmDpAjfaeEzMWCeYCuverBtUA5DotEuhbrQW6SaZaWiBH4YbCJCSBJ1dsoojQpRCMXJ",
  "key5": "4gDLj1v5A8mCuPfvgJRAwmgmj6thn2bjrcEGF5NF8rLQiKcYvFXGJjomeyd1YKxhtSHWcGXSRzgPj3CBJ89R2qqr",
  "key6": "4tYpYjH68ckL7DQas8VnrnFwQt8zfHpHWnX1vdpyUffAZEFM3NfhmZLyXv2ZeSqcCBZ3SuSEerG1Ugcy7i8KHAh9",
  "key7": "3dqVgzyzu5ygeDi4s5UeuYX4D6nK5nUVE4iE66jXcuy18pyyYUge33HW2ha6wBf49JTqn745YH9B8six7UYqYcJR",
  "key8": "4QY7gn3g1xe7BkpoK29v43e4zwGQtaq2Dqebw2ZexGpqrFhUV8Fh37kKoyAThQMMQxQYSGVgt8ZcBPafT1jWq7G7",
  "key9": "2gi5EJxFgBnK7sxhiREgx6B9hKBrHjgG8tJ2fcCQU8qRVCvY8hGAS3oM7eLj77Kh6rN5WgrQhfXwFvRZaxkzcsKW",
  "key10": "5oRbyorS5otis8sYnHaMZuEjAeud5MiwZNdH78V9SN77QxMy5uq3EuB9sTbKAKBYTnLR2n2s8R32nZsmbyoKQyAd",
  "key11": "56AJmLfnGSg7QCM8KhjBQfg1t8C99aFQGJP5ZBVTUw5Pphru28XvZ8e8NVFBKQkpZDD58o5cGYpNtaDvd1oDu73j",
  "key12": "4HMdUnHBUPiJ2zD7TcMfrA713EDSYNFd6XWbCe1iNUiq6VLoyiK5GisYHrbbssPHmSN3ydF8zoK3x8uEJVxeXpTq",
  "key13": "3paBSSUgr2MTegaCJXArGpjh9o5q24KS4yVaGgciTk2UKJuMipBTdi5uyUoZSY9gpAtWN4MX8NBghPf3sMcPxnSm",
  "key14": "y82LGUqsrxRnt2cSceQVWhv9VHhd1F7p8athRzC2GJedMhS94rAN2YjH9p8wXRT9xTgMbDZbBVqfqyUaWXW7MxZ",
  "key15": "5H38uRtcSmKSj22fCQ1veQQqtq8HEJpQaUsN4tUZ1vTH3EwzusATpWQELNUuy35u5ufcWvogB7RwFNQwKeWfzeYG",
  "key16": "4VNrfrvuUZ4N6D5DHCP9xWYEM15wVGDBvYfzwxczEkE8uoKtWqxiTypP79jxkFQYyndpjzxYEqskaK6kH9rm6YL8",
  "key17": "3d7gjLJqT4ohShdfoLjJUQ1oMVmETxSL8WnPi3guXLdSKUTUysefZ4hsLnVzbGF6nmqNZTDo9oxJYMjDUEVqgLW4",
  "key18": "DfR1BFRuMJcWKtsr4UuJ8WkHRToiRzagfjitfLgcQt758E6aXPmdBEx1X61yMn4mYYNM66HbPq5VUHQh6B7ZX7a",
  "key19": "2L63KriScUmXEkhJSW3XnSZ5SmXHgmyhWTgpehrTGWYzTrNPAFkt38WWnHPqKSJRWEagr4XCny3ext9waTz8H1mk",
  "key20": "4VCcYB9vkyazhkmjcJ3JzYMbXLsGq4kuySrHDF2N6Q4mNAo6NQmjm6qEUskGoWXVUCrfzEUX8a2PeWevMPDbahvA",
  "key21": "29CHA4bk3TRFnEPk6VfNxvhGvKg63E8dknY6m6MLUfNP7HgAstvnAR1MzU7Ai4Et5GVmc3Ejs2L2FBf2aFqfP2Kk",
  "key22": "3C7gc5mCAPtXABm3gEeQg79TmGikpyu3QDRXh75D8kpYZnnnKamEsLUrtwBun2WWW6RzP37HZQGcfN1TbepCyAJF",
  "key23": "357BWjYY3qbV8jxsA6wzo4qAJZDQE2DqSUsYZeFsD7XioNgPiYCvHgh3fdXXy1rEt2uPSWGvL8pFPapXENcEqDSW",
  "key24": "5ndSjwbn7Mnnp8uZC2XUpjvGJxr3ux15h5BYwtzUrozZPLcL7E6fiEBuLVnXyQNPfXBEYxf2VrBRCWPSpu1BEdun",
  "key25": "neJ7pt5YFzTq4nqCEG9YKWr12bE3SVDc9X5T4yVPUQjFmHuu3dn1DTNUgndm7V5wZRKn5grDBtiH5ZbZeUJp65Z",
  "key26": "5hXEY1kW6dwWc6a6na1DPo8DMhKcGNSsxopcALjbHJqirtqjZcYU5vSiwnzfXiu7nBsQsfJ3CpR1D1KkcFrD1LUG",
  "key27": "49urGVzjx1b96aZWgfF4NnTpMgU76Ug8FgzBhwoRa8WZ5RSnMrXqGFsJPjm3nyJkiuNNWeCa6y3X8TRo5gzmM5dY",
  "key28": "P3uXT3zywGzpwcJ2oVkeh5moyPPjSDX6ZyZfKuCFXDh1VH4VWdSh9vTWaEKyWC3Q2NgG8J9ALEdG5tDQG6e7aPN",
  "key29": "4Jgc4S6ibUUE9y6RRo8Y9EZwGvk7urRNmoyypB6edCMDgw4eJrPPcTMD8MwBWhqv3uyCmduxDS1xnCjV9jM8XfJG",
  "key30": "5yUU1c5FZthG9NivY5H9mgoy17LxGdrmFXME93UPwqAx9ifxJseStYdKhLko1GLj3sDecgEaRTzMvpouuk5mZeUB",
  "key31": "2ax3HiE16U5dAbARuenRM1gDufGfBw8cQpycU4RP9keXiALn418GJWeYkfTgdVjAk4yEkUxEqHZxqxd9Ujq3JwWa"
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
