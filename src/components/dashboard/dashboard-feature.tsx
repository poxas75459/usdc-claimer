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
    "2Fc53RAT3axgCa9H52fTS8y9SryoowDA3YhYc1PRRBkAzgJg61bYtdPXzbgVFUYTJD7PK6kQfuQ5UaakewuQaLg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NM71b6yE7pasaUiQBeUEFuFdrzgp62HVUXMkBAKfVcihHM6bbVEuBXZ62CGNwv1PCPdU3nPJXYYANBH7pgcsoJ9",
  "key1": "2MiiZzaR2Nop77DMzUy6muqMDu6AzrnXr1cHZin7KznumaogayE5gBi9v5C4hzLgrSsHiDxheiUmbcQ5wy3TNyGV",
  "key2": "cwp4zoRGABCM97im89F9fqhW28NcFfwgdeoWgVQVsArRdEP7SStS2uB3Z2nT4i4Wt61LibCzF9UsW7h52y9XG4p",
  "key3": "3kFRobb92r38wp8xstR6mdVtRRjg9Hc2ntJN6C6wdgnG3ajBFFYZCzsvBUNLn6hdMuFDosViYNLcdbTF4ApRwd6m",
  "key4": "2DyySUiXgGZdr3K9bfqEtEgzcihwrMcmzRCSyRVcjLjdnJwkYwR6fCHfDfq4uNMWE9JenegHLzpQaCRYD9PZdU9r",
  "key5": "4dgJJ2RvNboQ2u2ZqkMGf6BSa3GjxGXTu83CJJm5v5zc9vcbnMcjFrxVpRZQ6mLFFzavKVCnDuGJP3DxkmDewAeo",
  "key6": "3ofAzHFz5iDMECZ76cupcwbaF8DkRio1Jiy1j77R6PZfh1kj4BaoUWs4qeHzG4hsaLDoJKE1bSZQKFcJie4HYEPk",
  "key7": "27LYxqMUtZtQn4hMog8hzcKBAUy262TeKtbb2wjdBLffjuf8Yc9T1M9KtzVr7KQ8dAuL1M9wSmvb2vkJf6FwUuTo",
  "key8": "5KPvKCQt5yABqk4r81xNoxPC3jkNUXhgPUhrwV4uUw17Qe9oqZTLmiQqr2j4abHx5eQ1Bq61aQy7SaQGAxya385J",
  "key9": "315M6Wg5GznstdK5emEMrGkSe2rDQxvk25QJCB8iXVMhaJa6uWZhkUKQWXxce7erf2Syt2ykH9jaRd33QXsoVjVx",
  "key10": "32UPADto4xrmpQhCpzzCD6ndUjUQEU8B9E8JjYwUM4JHoSpdJoAfjqfW6TCpudG8kg9xp16Aztn1ASqGaJYnH8sg",
  "key11": "3axnbvsmzPKitBwL3hnGqNjCECkacTTR9MczhG3KqBjixupx8CqVQUtj5nXQsq2rMxzokj8JTTLu9irf7Qr4u8hT",
  "key12": "WpGFo27kJDxxdhFYbjRUAkNVVRDrMiWb1wRoKxRTihiUWaYUWyapugp8qCvT2fXwBoiZ15RGB4D8HtwVL8KQNQq",
  "key13": "2xc7dYVBamz25Xrr4Jmgjj3yU6J8TJMdWgM79D4Z4rDr8mcxSijUbPUBMCuxDYk532YX2efo6RzLiH1vDJwsRtYq",
  "key14": "PrFYmpWHpnweDoeCWjUtNedxYzkMQFGZLJu2jHLcqQWPcwjTWM4m6hjBUtRxw3Majse2LWSiMxB1MiZiX1HgdDe",
  "key15": "47RCMwyL7vdgLRwHKVvRr7DYRbxx9P1zRMBLySBGSfKW5jw6iWuYP5kVaU2oFmNWW5aUnB7QPb9pxM7236AvzXeR",
  "key16": "4Podf3gKy5eTjd6eSCBwKZFVUy9mDgGQfkSyg3i3kPKGbzDXqcxxcKSrt84PoDA54Xbf7exnEkSkrFPFCrJFUY7X",
  "key17": "2iPQw1TGMaRdQ2cjY5yuPn7H4dfh7HXg2nthjFN9JPC2pYQyP76bbbEJDSn6ABgVK8h6MSE7TDUtJwDqghZLBc5z",
  "key18": "B5jyPZzj7KqPRJhQ8w2hTkdJpXa3wHwsZbBsSPN8WWhU1eYUN3LaEwk8JKz8dsN7AmogLykUFSCHcgPH9mCXqED",
  "key19": "oGpmouUMVLUm5mGztjDVCtbU5ADeGjZxDfNcvoesqLAqtB6Bj2HhHWS5xsZxCPJoPFCU7HuMd9VcRZg2T3ijZcD",
  "key20": "4tzwHbmC3C89Up8vP1JNuCzKuMCTy1RS5dqW3LF9Q4Bv9kL2fb3hqet5RWH6DN63UPBoceDpAkdfqQeH8tMfWQ3z",
  "key21": "5CjvcbWKxSXGTxPkMhWZTyynrJYxZkVnZqJAwztTR1Qojbqi5zNB7gesTUq8KjN894fwuFVdfBGEnX9DxFtpKv9s",
  "key22": "2APvtfHKPRMA9n6d1MVKZaofwbmSmz14XBkKthrioiF1Esn8VJWVa9ap5yDs5cuk2mjBTc8XoBRPLcjhDtRf8Hsx",
  "key23": "4avqtNGnSmxK15rAeGyvMcumSHnyrh8LwBvEHtNKmUH1R8o5rC2fnsGAY9esdLw6KREWv3vNn7bEeumqq4w3hLFj",
  "key24": "wP1np5L8nMknkJfDLnfzQjmwPBVWoZ4FVEWngPHrWwcUQMchTpGVwUQ4Tx5gLNGmb3Lv7r9cv2tRbJPn6aFMzW3",
  "key25": "4MXMYukwuNxZNKEe4vFMmQio11UZY8JBzQkEGq1V3ZyPdz7bqMxQDVY3R9E7WsKwBLQi8qi17CiaN7ErSFXcSPNh",
  "key26": "5ahQeUBSTMYCpmYHx14igvdhGycumKWvAaiZ7H7YqNw9UsmQEiW6fhpjvHwN3DkUKCE3FeVa24NMN43WD7sGEMYP",
  "key27": "2bZJ3ppHDt5vVXsGytJPLaV5TAULHXfHiK8nSZtLHznHjJoc8oYyLfrRyYgM5Ye6tnRM9d9R8UwYu9chGwjsbJtv",
  "key28": "3GYpLRc1FXkDkPGwdgwk3XWp3zydYyoNxddB8GqtNQcSkLZwxXjkJ3662CPLvLYkQaP4MCLGAFUALrRu3gZPbx1m",
  "key29": "5TQshUrDJKZJ4rUB6VTQEYNxALnpp1sQjn9ERE9DxANAkKEhPp9n74gQLPx2KCeME1PvNLZKnSnBjP7moox7Fzpa",
  "key30": "2ykZMeYeZv46g8PbDEvVB6QxtYq5cLCjymrHSsVLaBTehdaan3HtzF2jtEtkvqXdcQFvASyK6LzewKLDDGDSzFqh",
  "key31": "3EVDKfkRWqo7GXrcPCBXuGjE5B4e6grB9Mtqikd4a2DZcY6Xkuu6Lx6Cq4Mhu7aPbFd7SGAmQqrxUnpma72RqwZq",
  "key32": "3t9TA7qU1vvQieVtc1uJExfQYJyWiMQ7F6Jy3KXbhcNj4oshzvUxsqPvwGCPgsZ1TrvLS3RRJ572RZPRpVKdWnGu",
  "key33": "3oyc2mSMRhj9arGjcSDd9pWtfoMnBRW2nDUqDSWW9m7jPZS8bQLnttbMeQbpYoVZ2CVAEywoMAywgk7t41ueer98",
  "key34": "63piHKbU221XQd5pceFrnDauMN9qinT9WC8aRDrvouXPQJt6oEW6quGnezbD68VRSaFor1Rt7JXiwNw5cpHez7LZ",
  "key35": "2zahWwPZyz4uVnjqHNi8KuCj5hQTFtYkRkV44mk7XCZRvMsikNScU6sX6hnd1sfYpA6RZ36fyBaiiLdRoXdqFGhz",
  "key36": "3xCGVDKDoY8spm9Tp6rHq8BMFMqjEPbCk4q7N6zbKQgPzxtXZzv6SGCwfhCS3nnNABNxxNoZap4kDnHzG45oJfY7",
  "key37": "3ZvCppMDxy4sZ8Lrx7JD6rhnWVkTEJT3BSgLPa7Wme3Zh6skFgoaGssUWjuiMJf8Ynmkhwia3x7h3NfTXeuS7v58",
  "key38": "TVYo9aZnwukyFgdZK6W4MErp68fKqHWgAnwjkUaxE5hBdeiSDpc5Sch5fYQvtXEHojk6pJ4Lv2tHkeQFMur8rdn",
  "key39": "82ebgAMFXddtfH16Us3xVPS38bpjZJ2VfJ975KsyZipMYdLADxgSkpAJMD4knaWqxgDaGZSPyPhFAeVYQkc9GBU",
  "key40": "4ptUaX26uoDFzK2DHSaoQz79bLHeWTe9k4HtLsDNmPeAxwJXpSDiKjUcY2B4knzVi8mEaAHFSkWYGicG98zWEe3H",
  "key41": "34fgi9aAR83dJiynTgkcvkNWxbTVPXcFKL8sJUFjoXaRmQ3qR9MSkV2PEhzmbCA4Hg3UWqkVPd5bb6obsxWRXZRR",
  "key42": "2wdHw8Dzk2tKTQ8AtbD35V7fJpvjAwdJuikrRQF8vxLhsTotJeVxFtpAW9vLqNFz9zHHMRF1PFTvmzUpksQPJs1d",
  "key43": "4NzXDfZuGpuMzEdbswJMUnHeJSxHyEzYVBfZWp9s7mdUQwNaCSZBhGARSiDvb6CPMV3MfXos1DY7sQG1ioZxHRfE",
  "key44": "3zbu1x2tUnwTJHZk6bGDk4i8my334GnEwvQK9MrhwqFgexqntBwFiRuGn9hncAx626r26AWEvmvzntNuJFdvV2sX",
  "key45": "hqGfvvuZmj2SSaWXz7nitPGqErhgRxaEm6byXFwQW3PiLyfH3cnyJBRSUcGsiawTCh2WKK6nWp3psKzSy5ygRL4",
  "key46": "2g1pfmZZ1V9rkp2UoCCWxPnUhTLkPCcaPCYeBPjYJkqBV1eZM8xktxD6jbsKAnGFbpnns9GQ7TTeVB4ihwWVf4RG",
  "key47": "5fasu9kAEBSwmffcsmSZRsc5auLWBXqZWMfNcwRZqvk73GTB6irpBRcLDuWyNSTcMZZnhCqSyrR4izrnrjG641jb",
  "key48": "4XtNCqHPrkoYVQTgMLmrwZUG7kxyaAJweNX6xkbumXDuN8NARiirypcRYzs7qDreBYg2DGZDjyW9rdSCZHpSZwNt",
  "key49": "5M4GetzbXXR2f19TYfSfnDmvVySsM8kSZy5pmzGXQv6VnT9QjFN7W6mm5viDBAjvvtfB7J1W4RyTmMrdfGdFr24W"
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
