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
    "NXjgc1UTMVxnxzuJazvug949b1Vjr6ihQCxqhRh2TanMXryiA1fkkJegc7MXGZsuGVoiDishsYAraKcsSr3815c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJvNmVFP7c21qQLAdunsw3SSMeDR9mYEEBpWETauhK4H5MzuMH94L3cn1KcMm2k2ET6PtQYLwwtpCeEhfhtFBGX",
  "key1": "3V1VeS2vsZxFbBT4iXs2d72RJj82rSbYsmZvuHvcbTqnij97tkubKL8ZgP6Deh1pw2jxTYuCFkfJLgaNFcXqqLKC",
  "key2": "5e5hCzMFAYFf9iUYmusTUHuPpfa58gYEjo8JFkaLkdt5b7jfMkEK41ssvjx8BoUNNuKbRMeQizzQmNHzNMtmQdsv",
  "key3": "5qW1g3PcUEnAHVKYKQ2pKiphEiePkwnfS2hTLD2g3aLm6gghTP8Qigs2TAVGZ9QXxMZS4R7Kd4WeN1gZwJifjUto",
  "key4": "cuNfco2oeJXMBXbWDezNiMoBqRmgqaJhFx9RyLkgNknbULwob99h9REfRFk6xdX3wP3CJHsWzTytbxw69FK9LPE",
  "key5": "638gV8s4WAx5v88AQekULryRKd7GMSoLCwgL8XeNWxveos3p9YqfHGRsjJWHhHAxaqcx6tn7NKhURiHmpjnAQiwF",
  "key6": "3aVdNVMKdzc5mjd33VQFKnFVRP7yUifKoiUNum7PCm9NPBpMcDGKA5D4qzpTwAsoQoCYpq7jniuincjGXK8DcYYC",
  "key7": "4sSDSYpebeJrP49KnEHxJjMd7NAX5ezoEFiCynGXXPq6VUr98s5bMHkmHTj7YF6Majhd7jivaBqU4BDBhC6b991V",
  "key8": "5D5jjHXkG5SQkzWbEuRZUqHJYm4jezYYYgs7nGVHmNHzYgjXFVsTbda1YZVpCwvgC9385HW9hFxf1UdjhaeE3JiZ",
  "key9": "2dg5tgqnanK1tkuq8876KBcJGnbbxedHq7qt6wsgsHDjEUUwexGY4sz6A29dFYHbgezqyozmiKiFfxVDxLBLhPUZ",
  "key10": "27TmwcsstmuNijQnwjg6t2Zq6T7N57TLWofVonPedeYbegNPcAcM4efoQoSxEHTitTx2CM5eX4p5dDr8HBknULJP",
  "key11": "5bo5XAcC9pkNxcY4jShJPAxhXEjbuS9Tk2MkJpevk6zTPbzLhX4o8NHoAPMkdMardx1jYYTy2N68AU6nqeS4wJeJ",
  "key12": "34JkWT7sHr5PUht8DuC324tpRheYJNcYhPK89KnKAFkk7XuZqDGtAMKi286NGE7mH8zpDCaX9EbAebe6Ze4Nn53S",
  "key13": "3j6dLMGtxBDKbzyhwYq8kHertdpeSSycHB82XPcTQ7fMx2N6m6uaw8v55HuneGLjP8hiHD6WY6FnifUiWaWHbJ6X",
  "key14": "V1TsSg18gDkSjU3aYMpPGrrWgj2LCjwMQd26ydHqJMxWkqUptEmQDo1Cb9qoyhfEw8trLpZyhHZW6zNbzDD6A91",
  "key15": "2oYDTWCRcppPNL61dE87tGE9AUmjYbA2Ad3Xpq4yRtvJSkPTfkn6dpk2pbxjXwfe7QPp5nT8BCshiyCt8AtkkLBo",
  "key16": "9GeQNp9KDQsgKvcexVjLgu43EwMai3auBe2zNfJFAgZa3Ss4AjfqK6zpTEox7PBzMjczSXgfZD13JJPZba4j5EP",
  "key17": "QmtTxWwLzZbFmBg1UMFc2hgmWVs3AUMNmxvk6YFdHL2BVFYbPgavMNmstgnufUtBQDnu7yENVEXHbmQ6remhLuT",
  "key18": "4bGkQFjPbyQJ9MbLjvB9zPpNkqDp1hjwXBDUdwciovxCftWkhfRnhRVzxtqberiX6myGcfnXRgJQ37MpAbE6LjDK",
  "key19": "3Y8S8P7ue66z3wzcAowMMGpkwNU9WceYRLRHespLLodzND4Tihpcd4gygtg9koAYRas6XAYZEcjC3qmrRLa69od3",
  "key20": "2VVxmHjoZHQuhQci69yU49NpekoLThirjx2Ksfnnn2ZteDsa4MntXoJUUgrzmYF3ZfLDSsXXN8z2GQe4birQwYcx",
  "key21": "1BGLTYXXUJeAhTrRCwg6aVFBaeFbR51dwRFrknDKVWUBKkHyQoYso3uY6We1DfjnJsoiNyKescsQtDUG4HttQeC",
  "key22": "3zDver7XKanLKc6mfXQroC1ocomPbdM3qcvNFzPgNVb5AWkEpw177YpSVsV9bH3G6zxNsMV5PxpJLfaGTrbpDLk9",
  "key23": "5fYKuoEhH1HT7wMkmd3kQe98LBe1h49FY7wpnbZwSZqFZwmUX19ZmdqD2V3Z32BGCd8ifSTjVgA2Cu5UGA3ZomZx",
  "key24": "Ytou98583Sw9yLLGzgk22FotgALaytAsbof9bhYVyRvbC6JVjYRZA3CUSV2UEJYPQeFL2i1fBgv9Fi5gywvsd9d",
  "key25": "2yNQTFEjeFKp9GWhiHTnrqig8cS2aidC74ePfhYsWBkjMp2ZXrbt4A8qKdMJiWCuzA7o2TxgCgJ5HV9tNLgdf5Za",
  "key26": "43n6fkdFPzCXRukueMtSqcAHHr4E5EqHeTSbWo23N7j9SRarWNessApXFnoyKH8uchm7iVPLpcUqGAAZCaiRiMi4",
  "key27": "4exCt6SnfQnNYbjLNof1pnF2umJEXnKJhCA5Yh5DscLbEYXd1825AXxwPs1pFvUppMUE9rBh51gMwS3prA3PQDgp",
  "key28": "44CY2pwYbzugnxyncJM4MfsjHZ2prnHKVHbKdjdXG4dg2EiWgpYoHMNLaiXGhu7QJatUrdHxjYmZUYJbHjtfw2v3",
  "key29": "3ySa3fZEgsi4nmcogCHCBkiajviHxruAsmZ1ejEQkBLbmZHBgnBqFMWUnt4uLof7jKqhUQyqwVwrT6dZYmc5ctxz",
  "key30": "3PFWbQNvpAA75qKdRV7Hw19uRSLyrfcqiD2xBcGyWdoVkNKLGjhtgNVPYSxiRH5Q4CPfoHvAwd2JUQKJ5UM9exKi",
  "key31": "4ZNWbL3fTVjiuLHdH6tpUJfCBKHAys15iimENaZAeY3CxqNwM2NWoPuqtQ3zULiwBAwSdDaLWPAJ5vy3NcqKCqeA",
  "key32": "DQpYzrCEbdHrGwVB3SouJxqz99Wv42MVAALrSPjfgw5M7DjYh9ivhBaKQbeXAXUjs9Aa4BBaBEEdz2xFiSNk9fD",
  "key33": "5zD4qdk3SwhtbPxUNNtu6goH6nHNktJyGSHKJXq7zhg8K2b8rueGxsSAm5A8EzNLPEGAYeDAByigLWrrQomkMVPt",
  "key34": "4kmzFrdWRxEUBihRu7R7xx8yQuxbA94us8GQMSjMfVS5P2qfoGkVitZuYEEe2VEkWRRQ6JhKSqgNzx4kEKcAjsoa",
  "key35": "4jByySQb3mmQJg2541Yqw87nHWtLGTkNpSbw7RPA9Qxi7LiCfgMYqyMPCqHuidegXhTJodoNK3PzyqoAgutX62UV",
  "key36": "4uRYLPYTaAPGaojKWh6NmYXGq2vQJ6ytKuANczHb8FAkDaQGQb1ngP7Gu7gF2xSWnv1Hc6DozB4EoZtE3Ga3V5r8",
  "key37": "3Sn7CfUGsi5Hw6mGqk5FpCmLMFo77UR9dStsXjbFBD5M9dwPb7BjeiTM5u9wVjAEafcEG7byuySeEau2QnPHykgF"
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
