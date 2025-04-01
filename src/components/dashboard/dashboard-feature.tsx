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
    "4qZghFWEzi2JfcTAyphP8duReJSMe3PVRzqWBgEcmh69mhqP6bNxxMj23tjZLuCqv1kwuFET6XBD96EWuFv4Ea7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xhjd1heXWt1jMMmFGgqPjNXgrQYVSpVnZ7AshVxmRYQqQ2DoxQeTzeFi1hgKPVFemdQL5koE84Pgy6o98YsqPrs",
  "key1": "3aM6JZtt47itW7Mp8pS4yX5ywoEqnKr15YUNN6nwnyHgVtcFg32xFRUk5Nx5vtyBEQqibQChvY14BcWkifs8sfHP",
  "key2": "5eAXg4Pa5k2kaoHGDhJLeVdw46akLvETMrwwjz9wxq5VBMtpiDdsMs6XEekkhZqZ8hzgS5jarLLGehhe8d56nE2r",
  "key3": "3e6oZddx3iDE412QBD1aoSkQkjaCnHfY1KidSx5WXXY2FvmPHWbB7vnDu3jvEVRFAYHKWengdVUfwQearpEiMtyv",
  "key4": "4btTnmN1t6dL2Xmr788n8dXQukfoSwTNmVL9TcvYcmW9ZSZZyYte7CKeVDCMQnnJWzpvUaNDWoEnzpCNMzyXWxQ9",
  "key5": "2ujfeRJPukiYyu6eby8oqTqeKbYLSoxxKZBASrA3uR6T7eAefjQvqqz3LPjaUyKdcwdvHTx4ny7v64LYQx5qcSAi",
  "key6": "64LTLKky5MCiGfhW6H64QZcRhm77Uknh2gzVQGP8UtwgZ8gpEJNqYdcVGKouBksVr7p7gj3dnxwaXw2bQAqohzEB",
  "key7": "24psKu1qTo3nq4g3nY1GJGbynpHaA8fE12ZwtP1uSJaCvSPGEAw6RPeETdFZkW4cS9aeqUQcQiS7MYndkTenVUwJ",
  "key8": "55bwR9adioZyYeBLg6CorFMFR1hpdo3Lz3gLBd8pjcPP4aR4owcyFZmzLSgutPWvpygM8mEUAeUeVDzu6Uq44Svb",
  "key9": "3BkB5bLSw1RSNP7So3Yeb4meDntdZcZgdFv4gx4nE1EpjrCBNt27TcSFAKJjpdvXEAPJawARSym2sqjQZGwt3KR6",
  "key10": "5ZGqeERvd98H6WxesAJ7npnHRoRLafdAH69JbSXheBVMdTAgxRCZC59nr3hS1JPwLoDAbMoRG5PZ41An47vMrdMk",
  "key11": "3zSJStQEY5rgTfzys1reAVAVyJBCq9jndLrivRHTLBNnwtVNzjNVwgv4oTScwctCbL1mgwvsyd2CC7jZc4RQZXxL",
  "key12": "Bxg1WqiX3YtEciXKGgZ5NvF3prGJSfh5JpreYApUVGEEhLMvcnhDC1REj4AzEJhhG5yQ4aFcqhrLm4LWqRHCAWr",
  "key13": "3joQoQDSThFFaRxQrs7eB1Z2hj4g2CNPz3T5SGadnL8TyzwJrZ71AT2o4v48LWgVf5uyF3gJi6ibXy2GvjnpJ3Dk",
  "key14": "KSYuGFm6mQVBK8gMpyC7CUzuXuPoG7ip9Qme4oszPD5Xgxmd11E7ApAuBoRdottUcQaDNpCosJfa8qfJnDFxd9f",
  "key15": "3dqQzq3UGaTDvy1YENCboHroZw9jmXRjv18Ha3H4EVEVCMrF1NpTYDd1AQXSnQRXpyPbXJH18De4d5sBHpgieFqp",
  "key16": "1263E7TYt72fouvVspaT2QA8Kv92U4f4kxmDb1TfCnmah921gBnXtM9ZLwzPmSA9T8UmvztY6Eu6D1ztiMqDAaGb",
  "key17": "j3YmgTbsJmyrvogMF8jCTbVWgMNwqtfzJt7EoLY6RyiDrhVZhbfXC3v2CQnv1j5iF5jwRLrd1MHEVDaRavhCAjY",
  "key18": "32FJD8KUDLqwq4L78KU6W7PY8y7gx2xwp6NcuJ9pujh2phvftrUKnEKDUVRZZXsbysAJ4SWT3rPTbJk5TBX9ig82",
  "key19": "5GLcDVFQArvuH3Qi4qPH2snYUxAXmu7m3syqe1aj5bRj6J5TN6Bezq6aTS5958BMoRnJJaUcTddR2vUeF4FKgXhi",
  "key20": "44n7VHZyRjnRjGoWvKsEfz5yK8gw3horf1UXWhyqx6NBD8SAHKXWjyXQS6jiUxP6GHRsMRBcP6VBCnZjmt4ez5LT",
  "key21": "38nSbmAj2xyKcYLKofiJ3XWSFiKVrrRbjbXFZKbSuAYUUUNS9k7tXSiTWnix8eMHGyZQHqtpLi12ZGMFnFgKLqN6",
  "key22": "3ZsT4ngTfv7W8Sj2FudeUS1ZV948DDzmhEuxE8HHAkuEXUd5md3Gt39Ez2vq5iLWwtXtMYQbfBCZdAhDHiebC44P",
  "key23": "5sDaLhbhqG4PSwW2Sh1XVLah47iUBnSrxoJMUadxHeNtPLN7hb3WbbVDnZA4dtFggXaJfR7ay4A4PUm6cmCMzFMH",
  "key24": "4cCJyfzVu9mLsZ5Y7GGaySWBvsMnrB6sjjAaNTakZan6vjTqxabigSFKEKeA4NmsdvEs3AmS3bcrpbGtE7rpx3id",
  "key25": "5kqhvJi2YiLwqWnCZfhXsr6K9Yn4BBijWet6AEGZMEZH6nxqvnnQWHzxrw8bKMfbYgGA6ACm7edBeXHHrT8pX76g",
  "key26": "rFoytvqoYigdMPhZx68HbPY2iqquCmDN5s5K9qgJyAbyZiB6CpA6HJ63AuTaE2Mb6bAh5GktedPJrbbu2LsdyMN",
  "key27": "4HkuQYj65QsSY9TdBoNUyCapAmHKU4tafjs6tBe74XmzB9TPzeuhD3K8HG9fsyqEVq3swF3V1DPArMhZnJ89zr6s",
  "key28": "4cVcDwGiW6PDD6yUnC2D7mJezXycpncxyJx3YTu8c6shrNbUt4agfywQio7AraJu4URBMEyoS7TBauSeT8TWf4zb",
  "key29": "3FrvrsyeG2CdJUD4oBhvfvmwmVAtAFnCHQd1XXWKGvFyTSQcgAkMSkkbQAsdDqvQirYWCTuKPmpEE4KzSyfvgZdJ"
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
