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
    "5sBaTaxL8RiA3SASB5KPLHrFCJdXgYhAMf493qT7c8uFJFB2RZHWWxjvXcyz7s4wKLz7CuqB8jy94Yx8Jj8qMMZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdyK6Ddhn4JdrmbJr8CZFtZJuR8wkrV3pxkcz8ACcW2Y1nGiKXu2Fkq3zto7dLUeStAQ8a7ExstZwi9u5zqWjuF",
  "key1": "28yNfokyxsYUX4M5TrQcz7FAFDBxXtM5rsHeaTKCRKphUgixaju1bZdUBaxzoc6gcwTK9f5U6X7smGgEdABcQMmq",
  "key2": "4wmG1KoUq5Mh5Y4crZwdFLB9DTaf2usEtLaS94d8nhGMZFbv57DQd4DiVNrndUfSKpHNAFEST7xiPWwYmYjvstNm",
  "key3": "5kCsmuPLTb19uWVcVTKHdbHQTTbUPyc1iq4KARmCH639t64VGaGqpz4XkpjavpXKAYNRXEUz4PWvMEgiAF4MQt97",
  "key4": "54iWgS24UHtatnPBhSvm9UUtrnUBuXmjWGkVtCmMToojfAKiVYnBNC32QdcjUBeQpRZFZ4CGF6Un6C5pRXdGXR4t",
  "key5": "5mmJibhbENASbdZHdSo64ZNwFYqWHQVTvVJkprNBY2QFiThcAc5jeXhfy7mVd89VDm4iDHswXTw4nbW95VosPYsN",
  "key6": "52FnY7jYgQAfZf61b75ZtMk63RDfvEJFGz8vgYZSmyqGQESXF7gbHr9sjSXpyX71s4BnyjVRJAHcPdYAcsjAJNj8",
  "key7": "2JxBvu42PeFdZriLTKWcdaNxtH6qGfxQLjTVBNByk1XVTQZqenY57AKHgnnUWc4jSDoG73oEza1Dk36eGv2McdzG",
  "key8": "Q25mHX2rVJ5pCv4So6Fj9SxKMToLzdwqHvzrhZjzH4xdFeZnmV9ZxdPpVKFsCdBZrgsFJ2izjGg2dENmecZvjM6",
  "key9": "5mEPAJd4pj3JWMGWyxjTjuZNVsTp5GHDMER1KDfYgPtgCkbLaRVBQctZrmA1GkeJ9T5qXuWgQ3cGKwPSkvKMKXVZ",
  "key10": "5MU29a3PLQ8QMPXfLuv2jkSoautZBAgasowf1JEZ6AwCnWgCJQ45BFAb4cRS8WEPcjPGDHDrRbsTUT48o433hGhN",
  "key11": "58Bf5hDTzMTx4EdEKmHBMWkcCEdYuB9Aozsyr4uK2ReHUrBaJSajFqvnjCx7GcEzRZ6Yqb1nrTz8nmKvLB9ib952",
  "key12": "4SL2GMSCdg5uypoXVrH6jZW91iy29xaV5UyKqcEE3Hkr8Trj9jRVAvJttrSN7Jfjom1FmVB4B4SJQijQM8uFcg7G",
  "key13": "58pqBkoeKoXM8vEDoMsujfkG7q7rGns7MULSmCqPd8SMWcPnCbxhxZT7SNMU8KDxgfnSg7ZLSSUYGZNPhzbHQFWm",
  "key14": "Y98oPe5PotUiQUEQk1vT7oUJPPCSvDbsTgaMHDTJkgfuvjzGAKb2gTx8FdXQcV5RYMX6kfWU9noqEgY3yMoCNB6",
  "key15": "5yKkxeeForoo1C73LjFSpKvS34ZdNKNbhGJ6d2ZBBwEF3veJ4rRFwG16Wtbf2YagFErntYEnATRCiAd4ujE9BLdU",
  "key16": "5zMScopFkShZvMavPwY1FP2hvzQBACHXepv62PZhnvrXWH8TL4KtBUR41kA1BgEDVJmRRxbPeXTXo98mG9XM1jSw",
  "key17": "fzSm78JG1Ad8zgDNH9WRqb4aoAyFNen5HgmpR99ssN63ygomnG7adFi5RRhvgqrKsbyTbVYZzcokADCVkmEn4fF",
  "key18": "4yA2wFDbcRzaKscD9uMhq6njjo3kLHmv2m9wjZM5txQUdV7JsUmnewPxQq7ooEzV1mmxpKY1SEuA1t1u73ZBB26e",
  "key19": "dHFTDuwwEx6Qu6pdfU3crY6oiTZiibQ9pZW4ZP4f79ayJqvsrRdog4HbyjZ6i7poSE3Z5J48pQhWazQLdi5PveP",
  "key20": "2pTFrMxiYeRxrdVoz152GkcCM9NACmXq8cG9JPhmzMPgNtqS94D4qqqk44AvArxXDHUe9tiQAKG7CdpPSDWL6LTT",
  "key21": "3icCYzdvH2WMZxzPq5Haw2QFtpkw3AZHezf9MCLapNvzUbFMHBy49VjDSaVRXkyZNQb92NoEghpm66Cq9ZyJdHEe",
  "key22": "3aX4Yy4jdg9cpbxzYKWwmD5r3c9az1M8WNP9GYNB2VJMUcHF1JmtUeSts7rzyQ9oEjoe2TLmkzfPb8xgVLmbAkZ",
  "key23": "42SNqwbKrd3SzuHF11FiHWefw5krGWXPf9qU4CWMTLyY4ctJqHS2NYqJ5aNaGj4ApFvnn5xin3WARFs6ZbXnGtnv",
  "key24": "EHDnMhuaYTdoJaHrtGXEmER7F5jmsFoYMYaT9FU4aHMyq33qCGQpaTV1S6DnPgkdyqmzVXGkVJ1zwEoPrCSK5GV",
  "key25": "4Bu3YQSp6QWPDKZwcaNv2MLnnU75evPwMDNoLSbpYQ9f7XbqxGfyXFFyMdk11GUtCHzF3gUqDJ4aX7ed5LEjeCT7",
  "key26": "3TMQbnwqYePXYBifvX5xXzNq1qZyxbQ8jydfcpSuRuyB8qU17LtNjTpHMQxxfT9KVzrbkfVaeQexwu8JV5iZuLaZ",
  "key27": "22VysNwpgQvLHz3ASeosXaiiZQZDjLL413iA8EfSah3F438Ana2NQ7DTPcpRHAicPXfkdgfLXvz31BaGDjSQA5FZ",
  "key28": "4poCYw7yUudfDFYo5xn5X5HMPBpAqUc1GncGifoVLtSwuKFVmnYehvMabEQV6yiBLg4oRDee84juj6KCHCtwv462",
  "key29": "X4NSiZAunsr5TbhYrcZiuMDNxGZURBbNMjs2L7zFC3cEQMh2mmqBuzwGo4ziv49zErVKiMY3HJP4KjNgCpkuMty",
  "key30": "BPcjrXGQQCBLkvB7WKqfPs5wHKRxZRVUNCy1aNTpK8Cq2uusBQE3poFbhXHmPiAnv7Bi95BFqDZsBa3XxgvnkN5",
  "key31": "5ywU8g8Ua1GDpGFEMtDGqkorSCuWyNozykydM5qKz6vF55cH5Bj6MY5JeDDaQfVbeiyRvUsH3wHRi6zqqM3LcqX1",
  "key32": "66YAoPf2sqFL973mHktC7ddyYHHqjtKnPcmYV4xbextE8F8wb36GW9XBAEDKqqBoTPuAMfkFGjfQeXXHm12RFgSF",
  "key33": "2wMBGUxuTiiCbpxL2QvLRNVQmvu4NDfMZBiu5Lq47AR6z89tHtK6EnWPHkQtVb3U7LXp6tX4Lu81LBQ2z834QTUX",
  "key34": "2hrHGbHtT3SEXDpNnGXBTNQWwFxfWUjK6gh8xbdj3Fb4pqqnWBA69ZuT7ap9hXd1mnWPtadHydTaSgsUqF3MNCuv",
  "key35": "5x69ptwdFbDQ6rMdAncGKWpCWaR1bLriaYvwpYGjXYhTkhw6Xjg6QpSJkqauwEbFBqgNDMSrnNUsbh8yMkHgdZMS",
  "key36": "124Sp8yosAcgZrQHYqtGE6XuzARGAaL8yQdX3v1GMNwx4ysqg57pLg1Pfu7J45ymwQnYmhMRAAwcTYp1nzoJJUTo",
  "key37": "2KK1XJFxmJWvHcJte6P4aE4xyTUXKzgGuynJkqerdtxAXAd5fkg97K5Xn8rcfdmQtwVnhggNguthBZ2VHRUSiLge",
  "key38": "4CdaCRWCLDAfxzC4og2Mk5paZ1wQFFUWBsK8NsnZts2gToQwFmpGoxYsfP39LEDs3A2UvDobGtoDBfATHxaJUwMc"
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
