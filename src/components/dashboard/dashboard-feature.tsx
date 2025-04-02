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
    "NJj31wvznbuTnQHhnU5nb2FcDLhNVgS8mt9EcNsdE6aLZFhDbuzE8FiU6Bs5CiFPaSouqTestKTsJnkCcSZXDSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQgN8EpnTUkpBdgDMNrGG6dXVnqEaHGHasmjhZDgGrcQ6MHYGrMRS5owGrRptQ9ySh5Pk1EyUMV8whvGetFYfb7",
  "key1": "RJtqV5HmwuXehvaKYwLDLPUZLmadY8ZwPYpuctPaYSkv4iL1b6JBLthXGuBpdkWjwt7FdxVSGgzNAPM43weDRyb",
  "key2": "5UXqaYfV3gw8ZT4pEP557EKpJMG7VP5wmJQ9wze68NCkYN4a1kEzcFPrcAH5cnee6xEHsXiemf1TKiq3EnUQNPXU",
  "key3": "uzu2Rf7HdpnTWyeej46XwvgQzCWMNHsXCnyuAoUnBwC8hB7iK775J1ScLWxLzxmnkKTFpjZi68BrXNyXWHKhHRx",
  "key4": "2mMXYhYWCEgWnerXKpA6fMgJ1PThtAPK4JBTLasy9qjWUEXLtanSMHH17XbhNkZeNyQ2TrEdmarJzMtD683gjVfB",
  "key5": "61dQedK9PDM7XZDPrettLY1HnXNrRUo4gkBxFwND2c5ngeLEkVYNjvKJESxMxT6XdYYNNFQDCUMhdwkv2Zckf1WF",
  "key6": "3XxPoo2jCHcbDZ5Y1XrtDXcRhccHDhxpneebrJ1h9TUmxHCJRT4XsUJrWW17Rb2AtSExcBwJcDmQWzvkYeb5JFtW",
  "key7": "4HTnELPJb9Mxu8sYeAKCu2tRXVq7ojdguKszznYaoMqancYf4NKdtsoc2XHsjqcWqNtfwzk2GkjcD7KKjRcwMnKz",
  "key8": "3vvayZe7xFoKTJqZoyh2JgacecLspoZzMkj2GF7Pzt9oM74wSQyxjwmfQjqz3aay7TGQMdn22xyYtWu7UXeBSUpM",
  "key9": "4tPajjqR7Vq4pcbAr5M6wAggSgJEVD4aXPN57scMsnbGHEApQAQJ6S3s15NSkhHEJ6GcirqiZU8EHvN9DiRcRds1",
  "key10": "5LQD4E72deWHB8U8yZvZSLVjeoNuDNPQ4a1ycNxNfhxVyppNd3myECZzzeDos9ZpK1xCGDgXjjHrJ5HpMLCD3sgD",
  "key11": "4iWxSRkw2JoazSNErws4dnbw5CEAfzWyok9WNXYgC6asEiaF52DC1HPAYr5Tz7ZR16qHh2sFr4t9zgGX5MNq1oLW",
  "key12": "2UThNkb7wn4Y86d8g9mPk8t7fxQo3skfLPhzPjYJL4xTDLvHzzAkBwGUGeLNWSzqsGb9Aj6r28MJB8jPsi4d95wc",
  "key13": "5ovDkznmQy8VJS24ry9xWPU1YodqRMLie1wRPcJ5gjBenUAa43mGS8AMpviKLHqMu7K96Tb8Zc4herUXDHJoqCRJ",
  "key14": "2VYKJUHXhDmcFePiF1Kaa7Qv83VewZVaFRDpM2MfCdp9NoHuFKjtw8knY5mZdSFe2qmgkbhJpS7UkmkTfTj1sGvv",
  "key15": "NE1yx3JYnzyTaEjQJBwQm3yDgYuzyzqkGk22E18TAas54RQcPcaJzmdHYhc5u7zgQWRWsVjEwg1g1buzfMv1Zyh",
  "key16": "67JhA9B3eETQqfaUZFg3UGDVQYYT8ALFUFTMLttGzM4Vos1HKpZqWr9otmmeEN8WMCfBFXhMir5ieMbHuzgB6o3U",
  "key17": "5ZhoZgjFtQqxFuuKX6e1kXRUFG99VDYVzG4zKfq4abN7hZJ26PNZRpB2yY8GXQg59S2h27U4jaZTufRziKRW9EAV",
  "key18": "4SEgZW2yxgKeVnE4ZGhA4zy7PspYHRwz3P9mtsEQTAhBz7hW1YgvxvdMciq8Y1j7aoLkJiVUTMzqTbgB73xxgKsc",
  "key19": "38ugmrDNVRpRFCTAoPYManhqTNYcuKCXKRrbQSwUbU4QUkW19AS5smSUUQcXMs5P2f2T1Yqc1E9QoVniKtw3LgtY",
  "key20": "xp2tx2JqaBUuTujvE1i2nT1kgMYxhUMMHxj4SPFVRuPhMSDqXvNZBdedPHSnAp3tmvaKeXAHj1XfCFyeCPgBfPZ",
  "key21": "4nAa6a56CgurZKWRvKkwpb6joKURVSdmuCTVZssBrujHzHRY91JrhcHrAMnuLuoJiBBz6TZ9fzUVMg466YQZp2tc",
  "key22": "3iexb7N4zuLGKTEEUGWFRY6AYcfakwBc2ypXM6Scktoqrea9bgBwAetPG4Wd6tVbvxSVsjzaDM5R1mXZ65D7pYHW",
  "key23": "3x2kLNj79H3Fdfv5CHFVk5gmwrbza7BJTwSmtxxp84NEhsifVm6s9T72oWWHSpuZLd5jQCz1ZkXkXunheMAfU8pr",
  "key24": "HC87VFfTxvj4dkEVNajbq2s9faUEXwVPQLq2J5gZWNs8YVJAqsXyfCupXD1PMU7syn9EmXko8aQ7nyDTLNa5hjH",
  "key25": "VWrpsn8mPJNQsaUnb3LxtvWnAy4qP5Y4LSrJjPArAk5LAp5ZwB2QSHXyQPLBow4KQ2gvEQVCHZiPgAbx6ST9Ppg",
  "key26": "3MmgCb8UqhnxWyhMXrxcXRtbvUemwXtQzAGnHvwaYzbeysBYxy6senUa9uNxBCNoDyjhwDpuHqosqCtvLnLqnuA",
  "key27": "eGDN7ZW1U6XSMwjNUA9pJpQTckAkpj3JgzpRYyHoUCYh9ZeS6hK64dRtbY5SzEnPC65Dr9Z2myG2D8JL8jFrjUt",
  "key28": "2R4H6cvFjraKg4Av44zgH68AxHvFhoAYBid5Q1EW19ccyAtVQkLXuEyz1XBJUeh42EQDKxMKYkBRTFCUwqQtZU7V",
  "key29": "q8EMcjGChD5R1hmhpiW83cqx5qbu977gu2HEof4axjPJiJZqPvEdqDQtVSthoysU1Jv76fB4pK81h8dXYduakfN",
  "key30": "4PowiBfrr7sudhHooZET6KXhHnEdztc2rZ8EuAuP37jRE9KkmPJzi7oRimeYqEfMMZETHE7Ge355C3UmjBSPW1VH",
  "key31": "4SiurmwK6fzD5CU2Lkn9YHVeMYq1ehWqC3kjV7UmiJTKTXVB9iZoeA5xLPFn4AWrW61TWTQUi3SCHARmgJ1QSE2S",
  "key32": "392xTV2hoTCGPyWNbecUzGrZa9J8h9LY4G6cYVavC3H7X6bfKAMDPMdaA1sathqfRke14TTM4zd3BDUQL195yd13",
  "key33": "221CE7yBmHxqa5WgtPP5ACK33QJRpK2SgcykQUphfnZCbEyiDFav2rtVXvMhGYjHotUTNygSzr12tYPtiwsuUdoB",
  "key34": "3HzSRujDCsTS6fEuZTHnq8B95QKay9TNRGnECxtEzV2y4BR2EJyALY1aYZ3CZq1ctkURgh2X5RJAY7ndYvrAQwYV",
  "key35": "39hYrNMuna3qQwkpHuAQrCpuQNBDvL75iLnC2NRwoxFFDoz7Fs9Yqipp5H1iS4QCG2YGZ68mJ6uiQ8sSrosAEc3Z",
  "key36": "2WmWUXuqy81nffH89pyZWBQynZx6A8ne6wA7aMrwPR1DpC1APd3UcpiQiQPL421CqdWuCxgLDEKkDMXx6KGAn4cm",
  "key37": "5LCZXAkpiWcYpVpYXqT8Xh7YarE7HQc2oDZid7v4yNNjUEkNZQJekQeMaxFhA3pM9pX7povPPPwAaRgyiedttM1v",
  "key38": "563WqRutrRMf7RhHtzhnEUTJL1JZkw8RQ56zmLpJWJ7qGxne9w9joDkDRx77Wu3FBcr6gkjsWEGK9V6tUuAH3ZZ9",
  "key39": "3nvdSFyxicvRQ8HvkTZ6nyLPd5iCC1rFpFuHHES7p3xtFhiPiubegae19k6eUguCWgDDzvThtAzTmJKBe456MThD",
  "key40": "3HeMPjD2zqKVSe8xwMDqTaZbDRx6vLjB1zESymyUBce9wq7jDZzWquASsYPGvdZX6by56SqMmBDr7uYUx97xqWTK"
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
