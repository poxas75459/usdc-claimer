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
    "2GBap6P7FgUoieUWtgcBiVFwA52Sg1YRgeUJHTUmXCJwCjfpWFUPk62r3NonQyR7yNgi6hHR5ykiwdc1fez89xTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ERbURbUpJfWtAzCdZfnfgkkR8rAQJEWyThL2HQ5sCPuFVdjYLyC1BDo69RZeZUGEvKaPuDKkpnEzhVaN5NgMsik",
  "key1": "3EKTzxi8Tw8irc13W4qxJkMiYetwZLG43KdXwv5VY9my5nj8m1xbK8MNKS6289yufhKJjYm81r4wY4BV67oJAVuR",
  "key2": "xuMMfqzjVvDMxGjKfS2mek8FhEKfsincm7RxsNVB1ox2GxN4mZXxvxmyynN1Cc9ppwgSopAowN6eW8KXA8QS8Kj",
  "key3": "3WdhhTRmU3ucaLA2r4YBdB7mCuSgfsU2DEU58XfakgJyGLboSgEWe3Q6TUWyw5KfigySxLzLEhoAJNkfyq6B3ffj",
  "key4": "2gF3sgnYnJavtMp6FS5ZjzEqvBSNWFHzQMunUAqk7oj7EvhNEpBeT6nbAYQ17jMNfb2gpLKSg2tTuMayQm9VysQh",
  "key5": "5BUAp2B9gcarQqpZ5x2XDYqbkj9314MPqWjQQoJFydFo96UjhPbM31YZ5asPJ8gmn6JmxVgmLgNkLKe3ecehon6c",
  "key6": "2sD4HtB8VwDcJSyjtzHbXZwJthq79yrmPwQ3ZXxFhTxFjFf8ppb3d1t3QpfRMZYbb8ekcNnFJM3WzmqhjGPmHsME",
  "key7": "49agchRVcbCPwiAyBmGq8cCbCc9xZQeRKuEwQsBkD1oHSCHCUKV1NQHP6TNrDbXBogZ3YnJLEdtNLSJirDhFk9TN",
  "key8": "2KGGfQr9i7Baajhw6C4WE52zkpVt9HFBwLVKrQyjL8wH249BLsjwB8bFdR8PQW5uxFg639aGXCJmHfWJSvAEQsq3",
  "key9": "3yxfpt73w973kK3x1WzWirwhcXSepRnGj449hH7zNaavubdpkq7eHdhRnHnvAkvyvoRBjpUvoSYbtbEv7y9tsD5n",
  "key10": "4uNRh55287HcEc8ev7xb7Fa3zoQ2yLVb13H4cpmkc7pKWVd49QMKASJZ7k3Kkkh1527pjvQiueELquk4pi1xsdVM",
  "key11": "X4uNMAM8w1wNNELGT7DpnffwJbJMqM36qRYfC5VrLkKDcut9EHA17o7QdULDSW8DP2EbnqHcwSF3AJ4jwuM5Jch",
  "key12": "3XWqMft9Xgrpowcbg43Ky4ZvPACva2fBci7wLJejKGknCqfSxbrViqotqPokgpw5ffPfN4QD8XeA6TXu1Mu3or3y",
  "key13": "3SmLFBx49Vcn5ZKoGhmHPtwWYXQX4zQnurpNbB6VHnPycrz3HG1QHWA1jJVDhXxpDXBJJ91Jr1VztzoLni5ygeKy",
  "key14": "2KUUkSPPvJwXHvHehjqhfJ8myJfL2bE4ab4paXfERpM9kjcE37MzzU9rrEs2R38qVL5qymVXaHrVj6Rq7m57JtjG",
  "key15": "2bjGtmXJRpxiDxbnCSDWwMfVdSsotG7Lca9VaFBJxyAB1haHFufReHKdCqxsNccji19v6YFG9qvHtgdBapXz4nnP",
  "key16": "2EK4KeHhEqMtgZZjybzwmBSQf57cZG9b39Hu8DzhRYy7Ch5RLDfWRpQZWhcaypjckkusufo2wMdGExAsFjyX6zW1",
  "key17": "GD9YuuaiH751LsWZNAuUD8xVYThRsUKEa9sMHjpqRh9rmyLa4HfkWEfhCU1rWqeybzpf4dFDDMT6gMSUUsFzMhG",
  "key18": "4NbHd6BUkjmCc3QMStAtn9NeAJzGf5h7tAxrLtyDxfPxTAyQop1aNKtHTm3k7NRnCaNVkWRrysLo5A3NzeQH27Nk",
  "key19": "5kK7L4PHMyV9asjZDne8ZCieoLvv1eYFztLcRE71Rbfq8e6JuY28RvT3vFVcqHy5mXN2jvieXabAAqd8CYUEPrds",
  "key20": "bUZvaXR4vYtxKvStA6i3rMoV5mFp451DRCbMBUDMsHS1LpqN9y3v1eUktrsTUamrwfzu7MEmRiF65n3WpefJBds",
  "key21": "5oG8RnFD2AyxcsSvLgQt5N4pmZBej5tbsAXeL8EcVKwiwzaHpvedYohjyMvuV4eDz34QubxkSACFvTQtf2AmVDMe",
  "key22": "ZBU7pFoSffvgC7HDDbgUdAqig4Pz3mgfrJSWgvLm8AyZv3S52bZiMMFK5dughkRcJv9GkiQDSxSWSustkKBNDJ8",
  "key23": "JYvCVGcAAmzMsGGB1etJzkKhvzKFNPa2X4iawkBWgtmuvbNJcbUHdgztCBbwYSTbXhhWH9N8jWnJFq3MZCAqHG6",
  "key24": "2yqqHV1xLzSRhZkeyUv1G6w5BkHXbPatpBWKAgRrkJhEjFfjYS8ktuubRj9ZqEyRjJp478SZd7Wx2gk7kz1BHygi",
  "key25": "24akYDkdfSWfSofkNxKe54PLxWNNRDDhtYZHeQHBFXKKmd5vXSkh5WRvJQvARudyj5X6o5h82w49NtvDiuoytkzS",
  "key26": "3vhxsmERwRa3UqaGxRYjYJ1EWaYuCWRYQYc54iEeMBYLWdubtF98wZzda2w2nXJRFLsf4cXJsm7665eVAFDM7pAw",
  "key27": "2Qqw5gGN1ZvekKwzcitbVbZ9D7Ey5hrAAadvjwwSryE5htQb3d7tdVExCTsHxTsQHnAE9ZJACFByjJ8q69Pogw2M",
  "key28": "Gy1MWT7mH5ZmYUDSdsWXVrpRbgxNPuM3HSCy6MqtzhVayhp6fRLgSfWyXhtRQAXnCHUrKZuzYL1poZGxnnbwThE",
  "key29": "3CAxRc4Q4rhvwvft9EABqcR3rbuUrBZf91Adt3n1i6xtZebcxVmQ21ieyVFjRgFjGTMVkjYYWEdtPa7DTqJuz2EQ",
  "key30": "52c6cXjpA36QNEAGNGYAnsg91n44ubFBEXBaHCnjXKqRjwz41iZ16xZ8ZshfurvBwgcgiuDbwwGgz2Z8ULUaf9Qo",
  "key31": "uqZYmjxdWR89vaMz26xspy3gPjqCC5WigVubhVACje3R7JNN7Kv9c3FBKvuo8H6KLY9SQWoBALHkyZjzszD3D4a",
  "key32": "5EdAD2Xn7T33tFr2dA68Jxi2DmabKm6Z8xV2shnYYpYYkgRFdLQ4Qdzod3T7cpptMvVJX8iy62Fs5sTKuufw9aqi",
  "key33": "4jprUdE9uam9m4o6ARfMR9dLPgmxi1xCo2oT19PErEvEUmPUjWCYB3wKpaJihxzK6xHbdn8nRYK9CzBQy8hXLjKR",
  "key34": "q96UQzqxavUdp5QjPmNtDQRiowT1xNmKd7qTwJVwH6TsXniqwJ6kcQk1VZkmwjY6fuKyDtVBHqoT3zCR47d5vsi",
  "key35": "2WEUFaNj8TQhVHBTRkS16ehxZU2SqiwYpVEtGPzBx9udLGMahXVwbZKQey64h1S7boAcvRtx1q9Qs8XsgZ14EboX",
  "key36": "2TCs7AiuuJSGNWbnubKcwHokSueyrHyhT68cKxRF6sgAEhEfV9sSQU5awCE16LjJ7JwPw1AL5PzzNoNYJWKfmEoD",
  "key37": "3DL5Eev5UQwSYeDtdfUCksXRPBV5p6KHxwFbQK5yBdA3whQ2dmJDpHvX2xQmLovfWdUifEJYXQvNhKCTKUK4c4CE",
  "key38": "25hVMGbnQfZgEs8BpDV64G7A8Ber4zZDzcTvTUCGP4eSTSkudVgcS4Z3TBf6C8dLaqHSxHJrKzXi4cMQ31Mag1ya",
  "key39": "4NvmJNjmFK4wT27Rn112qRy8Q5bmDgtf1CYpAc9sg6zNF67mRsoXRXfuCwyakW8H6uu9UHhwZffWQzXYrEFJFpMX",
  "key40": "fpPCcEg9foYRisbnxaeRs9EjpGSfNAXtZo3rrkx24ftczQrCYLCDMLrHQe16Rs66GgD899d2YQEjqPTTLPoXaF6",
  "key41": "4VQNw6Z9pkNK2zfywJdEx78D2RQPZUqZm1PNQzem8dHsQJv83W3yXEYzBkXgnaKc7fQYhQNzmGFWYNCA1Vdcbag9",
  "key42": "5zLrHAt7znrC5QWrJg55oiN3L4h5BdK5rssCZT5vNnxBQ7QtesPoqsUZe7jtzB4v8ggLwyTMQq1aDBgpHtHXqAz9",
  "key43": "3vPcGPhC6kfyKTAxSsjzKNJDsRdButSstfa32eFLKycEzRhL5QkLjJnkBTbmMNEkN1nKyvwrVV5XieweVrwXuR4K",
  "key44": "4Xj3QMzhXJGkPn4Hwc9xetdMaiSaiZS4fKXRfmxJSoucEBzrB8Swod8NmHqLGjs6sGTP1zzuW7hSX6CncRn9pasu",
  "key45": "5ACRWwS5MdGpAuuHYDSiMoehfEn1xgMJmKEYPJgn6bMqVLYbACD5kAvHw6gun7azEF3yZZ8VxWzukPpKajL5XP2h",
  "key46": "67Rf13vvf66nqBWnN6NxhDFT3rMNaApA1njVxezDMX6epDMaAX6oDGEjZam8YgcbwBE5ARZXPNooitcXbBPhPhKM",
  "key47": "4mPQZ54EqQ5WG5hfpQsqbiJTu48dxc439gcYdrMEs1iHu2bTVnicsZnZghux6Yy8TUhMXnHH3eU5qScqBUpvgN2N",
  "key48": "1BpqXmvf7LL9NZeYCaHxpjb2vskhYYhq82gDnfpfLEeetXxDCPCVfTy7Q8RgyXpyBVs5TX8h9xQEpoBoB6zYtuQ"
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
