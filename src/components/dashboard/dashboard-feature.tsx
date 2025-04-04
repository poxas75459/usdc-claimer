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
    "HHwF4fUWYRzGkoyV8DXUrVhmUpp1C13UAoDbKcPxds37FkmVDBjTDBnm8kneo65ajjZhrabVrP8Mse3v35SNYPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nCrrqxbaSSmZGWo7Zyk8tiRzuSPbQDq4GW3ZNGkkmE5dDcxVgeAYt4vn5YADbcScKHwWLBVBodPknMyukHv7Gmq",
  "key1": "d8DNintD6bWyH43AuEnZHXaJHna6n4Tj9zygsgRuJwtcKffjvxAXVcX8w9i54ZQNJXN2fe34p5mMpaa9CfUidHs",
  "key2": "52QXGzXAjqyWhzVcGKmtfo51Fcf6kDYktxStDyWWZmKz4dUzZuH1uppjBPEyixCkLeSyEXDrqk1wA5FyPvtcuz73",
  "key3": "x7iCG539J3XcFRLhjNcLRwKu7nr34A4M2vzv3ejzcpbEYshz4jm6UqSAqxLt2TRfc5mi66mQzSNvjgNVPfj49Pc",
  "key4": "3MY86ko3H77kGHrHnusAej4AVnZNAjARjLNezfEeDZUfuFh9XLdh4JMbvuTpeUcLkxRGkd6YzjnNyQyLTW7XbHZU",
  "key5": "45MYXmmYJpEDi9FqaVfKBztY4Z3hus6teqK5wvxt7PkihQBo44m5Ju3B7GGxMXVgffGwZQeu5C46S4tQ7HigC9JV",
  "key6": "65eu2KUAhhpXF2JHKCRabZib287J3A7M16YCwfAV8it9KgqeNXoatgkDgHLxWmb1DBMXjp8N1CbXiJTnzJt39ZiJ",
  "key7": "4zdZepaLc2LCiNxqate1u7wdw5QPeCDE3aXX6E6vPkUgDLU4x64WaDV7c1FRuGrWoUNtJFB8pMSZvNdjFpVs3yTM",
  "key8": "XPfG8DUXbFvkRJNKuB52hV2RWneu5K1c4TDDhuFixpwPWjbRxqGvCQ5XZiySXspaeabED34ZS8mLhie8Hbe3Qwa",
  "key9": "5pv2eSEvhcWXUnFfufdZ4yLutwurWdToG53nUHdAjHFSCfLdoqqAi4d6t8uxrVeQaGMqh1uzUStyA7pD3ErqWnua",
  "key10": "4RPFxR2zyy3C9hgV1QGCFnFBMX4SuiaQQSBWoGb4DLfJiFQPUe2EKs4bnasCadPuHUi3aiyT31zjQdtieSdediG9",
  "key11": "5W8hGVW8rLcF7aPRmViYxzmpaP4ghHMJ1fEGcBmmrBNUgMrJeUuN8MfYrcn2YRqkpmZeq2zYo159WXUuWG74vCZ4",
  "key12": "5kWPgvaA3yjQXG8QJoSZx5FhsBTbBE62P26YcmfgdNNp4nNr72R1PJZpuKzpxWZX2c9VzFYTSH6HqiAbD1X5AmE3",
  "key13": "mSLSfHA281zcrmv3NToAfrzPbz4Q2S2122PizsGPwSM3ayJiHk4ZN5Uf6rXH3s1bvLkLqjRhA4vgeHs4diqYWGT",
  "key14": "2nGkRniyN9DMEiXwCKJudBSanS1M2FxEnDZPhzoxHmUQ4fTvAh4JYEQ5swb62mYSLSWhDB6jogxtFkTjWxPohkEy",
  "key15": "5gGkW1vC7Rfvb8ktY8R9tXaxrH5xFUAXU7r8NLxjcUjPYxwaGknY237FGkM2CzydY5UpHSuyNGv948pnRKToBdgX",
  "key16": "4bFT1uBeVoMT14cdCCmNcZFUEzQKwskKfFjJC1AJWozW9Thi1W9nMyuheWxZfN2uWQyXJdVVPDKPbTDBHyeBCqpy",
  "key17": "35VFvMCbNa1iVj6T81PoXh5yQ9XShXaFNQeK6yqijVrHJYkQJ6JjEYwzEGmVEZ3yU5qQvFt94QVMfDogYLzTBtXJ",
  "key18": "5S6bbYDU1pwtccqtBsMLkkn37cMKvy7zEZkuQ89V4AtnA57HPwPv41Rj16dP8A4rkXHMLgFpgTdAweQKTSGxUdbc",
  "key19": "ShJEagWodbYmys9UBL4MAG127Yss2J3sncvFZLyvLVAPxnPh8frVnNAeCwrBu8LeNYWVEpZXas4mmXraBz2Dsj8",
  "key20": "3AMgAGuW8nbq4XSjAw6G3etgaVudeV9K411LMF1rmgajEHd8taRjK8xCKX3WgBrUZMPLqe6FCuny2XjnWhnpVs4T",
  "key21": "3hjTeHrHWoKA6Pb5QqRBjgXMQKsXUjLfFj6aDtVbckWLnzdQx6g3nuN2ETiwRncwcxF3bhCTHw9Huneqa4ohNbPB",
  "key22": "3eQFGFVYvvWrs2yAUCSvo9uMKXcxC6tp4N6Sx5xXqzLSyTviNR5h47Mpzt1UQcETq1mzuHEdVhfAnNjw5X2qsHCF",
  "key23": "M5kWZ2F7Gr6ji7MQyaq7Q9gb8XeY6wgfeTGiRvoHCpobyTeSDjdxpkWpTxAn5Dc8vxXuLxWwYkgk1nisKYVBDTP",
  "key24": "pStzW3Ls5WE1Ygy1H1oxx5tgVT93PU5bHsRsoVkZm9nadWebeuKqa4szrgVz21HWCcp7DZ8UTEqH78Z5JcjcgAG",
  "key25": "4Zmsx6cQ5s1bpyxuCqSf749vppFxC6t22Z5i15yF1ebGdeDM8ZqcznU4kURhgZFpNcj34Y8MmJ96dHcY5kiiDTZ",
  "key26": "5xzwBVyfH9XopoKpHNwaxakZaq31hVFc5WFsKD8CqWc95tHL6DsAXQEweS5Lu5T7Gne8FZ7kp4JAkZoEXex3wpPe",
  "key27": "5MhxBdVLossjo7iZdMzoSox5UtAGhmrRpsS8KAazeHnMzLXmMAgikqN3vXuXPdh4nGnKqEPJwr4t2EFGS2DpN45w",
  "key28": "3AHUvtSmMHBjAYTVqNX4qTXPZ5hdGmSkzrn3EJzYLQhhRbDWMEksMVUU8DGU4TzSQp1d8TmnzL4Ww9h9i81wepWZ",
  "key29": "4WU1JAyDDmpUnLMddjKXZPpePDhCv1fdTi1k74MjRntJJvzLaTzJfikkTwiuS4vNTs99AucsUCtxDiDGF1zPHKxR",
  "key30": "3JKy5x8wckWUTbU8paJAQDhUjypX6yXcUDuVJbHK7iMqusJm5LDvQb7eD8iwMQmYnAFQaAbytVpUDtqYNUh6xp9K",
  "key31": "3aa6q5YBj53JnaWtGbryeSgRXrDkRw7aLQisL3KeQAjfYJAUMRixRBe6QcqhdDcmrbc52fCNZk79eEho3s3KNzxE",
  "key32": "4QexdP4LJHUx7KKn5HacnzqDACjM1U8Vc1nj7v7EcC8Mwiig355v1u8zxtvFztGecNJyRThjA54NXr3HnfXmKgqD",
  "key33": "J4J4TJp21roXJm68Lqd6UCbt3waXwE1D9GcK7kxSHXceQ3hN3gtf3AR4oPYivgUmonLA3BT3aks3prTP8Xx8Gem",
  "key34": "37boLa1dYbBVjtthmgLTVaj9Xv5s71aTE1cFDjaTYScEduSubMqohf9peDm9FQ7MtG4KtVedbMf64z97zkfTXv2F",
  "key35": "2sn8DzZK2Nrg2Asqa733zCXwWjaNeUaHRdvhT9SLs7ppK1ZkLLfyud6hA7xLTZJVyiLAkBNygYmoTPstW7Uorh68",
  "key36": "5dzS9dWru39KXq4xZ9iqGXGw3fSsZyzwfAwQ6hoFePKRT8ZKJHU3ecHt8MMaPZo44ru63td98f54E23MZV1N4DzB",
  "key37": "39qkVXDUxzQrM3prY77hmLqkdrhDMfGKoqW216FiFdzWS87RD3J678bYHweVkCjpJ42PoeAofDfxxbdYufvBTaFN",
  "key38": "3Hgiuc2bU3UcRfEchgUvRtkgXKJcQBKd2figioNvG6s3aNJex6VS4ugbWHTCX3ySYgE865gyEBhC6kXX7wvuV1Af",
  "key39": "K2njTFpfZiMsFU7sPv2tfzLvwdPoQAXamT1kN2rX5QUTqnqcUGojYDtfr9otdxD1NGA5wnSCVwv1tJne4ZzokF7",
  "key40": "4Dwa1cfpabe6UUr3WaWKMKzPrygCsthEqxbTHsLwBAJyMikBMFckLbUJCdRaa82otUdYokKsech5aVkLQz4uiPQM",
  "key41": "4i75x3nFwRfc6Gx3BY6aQVXLhMgFnYvCGfPT6KX9PaQye1E6veNMZG8kwBGkLD3yhsUfFgAhobGmpQCn2aaNwYD9",
  "key42": "PvWHGEBadmXLVayP7QiwdvcAwFPoNs9F1Z919nAPjtEcvosNAhCxCU48UBPTqYpBoz2NrosqN5pmmdrz5bLjFUw",
  "key43": "5gBp1TuH4NosMrzQyWztCG3PbFqQXbxCRbapBPgiUve8S8DjfurngcDaECz5pLeBuBFQg7tLoHZQYMfDnG8NxZKL",
  "key44": "Bp57oUXYCVcmVoqq4aYGzaDL6PyHTVpJEKcKxZF6jnkNVDwJ2RzMe28qLz56wAvm7DcTvozVfJygnwH8iYgaQ5A",
  "key45": "ZA6JgFCeiTzvmj63tqSy6PBHiGJS8ZhxNeJuBzPXKX8DVQTxZZ6ZVRDsJZ94YMZpWsztpr6LX8DUWSefGnH6nSJ",
  "key46": "2hbCYUC6Gz1hA5bGQ7dsqFWwMyANcfCsprYykaYJwKPqGEmRnm633hbfqk4tGr1AUjmubTibRwDv1hpfFoxgQYBf",
  "key47": "5Ch56xYXSMZt1bsdSLh53i3FVTEX8TA7XVZQBttiZ9JA6Kuq9rNeewJMd1UNwkEikPCvrjKx3EDraDuWpboAvWqW",
  "key48": "63dS8MWFMJ8Gu8KvaAa2zrm8mTyuRH8fqKKWL4u19G7h3jrzQiJgER5kq1ye15SBkGA6TBcGtp5yKiaTXEyZzT52"
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
