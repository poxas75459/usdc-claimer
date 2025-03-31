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
    "5FDEUF3bn1ExzrhYLawaUpa1EnbSQfpCyVAQgkWFefznjKAqNgjswEThqhHVEs5PFQgv3aujdKv5Ae88wbPZNzz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sKaPn4AW98ZCui2SBFmFwiRe8PoDjDki4as3zpoM3kMaQvFDx3rhBrvaseECri5LLAsearokBddAxzTDbqfiNjf",
  "key1": "2BX2x6rEFgEWVvCkP7mNGhsLiRSYGzB3iRrxL5D6gbhJe4b5MYdSJ8AdQL1XTBfZPsgfr7PBs2UxvKDUo3K7WpKc",
  "key2": "35ypvEngDABz9LYhSp7GfAAFnZy2JtYivLZZtFc4HQcvz5FxjKsTaUKEtLwJDhMtztC6cwmjKLWMjWDoiGC2smRf",
  "key3": "3Zb51pyhU6U2SpEfJD8qrsxSFEqDgqMUxqfv2tYQoN1GfxphRfKdTZ3r2U6zQFSGAP9EiVNHzna3uB1aFkFR9gPh",
  "key4": "EJFTCJpUd8fH9W2oiCojaEGiPJtvei3wkgRtdaptXY4a6rv3g5C6ACthWiBASnggGtV4ZcC87kzHYbgHDCTXhkC",
  "key5": "4FpxeLp3HMd7SXnBu4ukzATpvfWr3A165PpfFM7fa3rpneCmJg1gLKP64xkzP5r1rdMf9QZAcuMCAt9GoshzmSqV",
  "key6": "4u28zNGcdDzPHuBJgKGR8pxzdT9piTuMnyiXgTzme1bNHkBHAgr4h6giGKYKfmLPFY7sP6tfszinymXHRY11VtCd",
  "key7": "3fm64judCL4S6RUB6s53q5jQtgbaXGAmG4ASv8kP6NzuYGLJjjtLUPihRUbmQ9euAzNrgq2TdF8G6q5ZiSHeKcsg",
  "key8": "5UXaoWoRAjMJyvf2gWwjCWVWtcAQqsqQxSuTpv931SGkZGFAuZBeg23E2WHd9u6WXuezu3wuK9gj5GtUC5ww3VPn",
  "key9": "671eXTLeetVt2hsKJmfbVDAPLm1csgVNVgCuwCqcvnpJxy7rxMFGu4bcc42es3DRPvCAEfZoetYisd6XEKb4wFXr",
  "key10": "2JZL891hJ55p8uSUYhZXxsbR4C41nM6C4Zg2bKhPQanJ6hE6PiJhRcfqBr58BmgQyC9kcoFh8pwTNwYqPqPSXNcJ",
  "key11": "5Mt1CDQWf5qqiDqFYeEQdVrdqvcW7JoHhTRej8iV6JtJKKz2AH246pEjUiVP6Jus2qykZ487E4kcBGMudA6Nkncr",
  "key12": "3zdZED52M83f2m7ZEpL1Ma3gM2RD4WitSMpqFdFBnPte75jnVpwznjr4EE9jKUhGa5VyhzoisSfvQ53tnLN9CvjG",
  "key13": "5x7NWTKVBEV7MyY3CFBBwHzeL9RoswnCeoHoTsVMrc8zrVecmWwh5EF4jeiLACKqYQzPyEzrYwj5vYc2S8Po8hkp",
  "key14": "3h9M1PukMrCQVcbaiL1e9CUxtNSvKEWKDKMbsgBynCgmWjMBu9QquPqpTXKyktXc5u1toBXAu7Gm9CfGF8c3zdy8",
  "key15": "4tawAzenzCHxZquigr8P8oQqg29n7yjERwEbcCTiDFMVgEjz8WGmp1sCkHCxYJM25aFnCwoPRRNG6WP9RwCuqPr5",
  "key16": "TsVtZGRvAScZSTyNkBqdUuEbZyZTbk6mm51WAyyQukSxKJpvYx3g8mFA7HXJPce9CoRuAYmYkCMfuTTaueH7cdm",
  "key17": "5r9hqudWjvmvMKbaS7jouM2wvrwYaYfdkjy7qwdwjAPjXrZPGRgpwQp5gi8z5a9yyz7oXDvnHVPduHae6uexGEBM",
  "key18": "3F162DzdjqKpvutsFsZbg5LcjTEHHobPpNjt23CEoTTM3yH2YVCQFy7v9LWeF1oHeMj5bHCHGseiaUVqeEeYAd7b",
  "key19": "5o2RYtZTHuQ5dztvdbzNvVgSCdAnBTNF6miyGrYpd7cxKuWDoP8MjfYQvMZjZWhBgnyxxYEkHrLgvEcnNuoj8Fyo",
  "key20": "2qZgbNYVuzNuWkc3QvPh1L9SKaVzLHmS8stvfAmYvbKCecVxRi6fhUMyx8kUe8guTb3PNkG9jKZvVbSfWF1Dcys2",
  "key21": "558jaKE3XJuKPXhATYmda1DAqDQv6Pr1nvbwRdRvC4wLpUv7H3K1bRcxDidqejP3gDCyNmrSRn9FoTUKGRLpiCnr",
  "key22": "4JUaKz58SD5DwP5ijNkAdGx4po8e7s8sQ7na8rC2dTcpcvpLfMYYQn2tqmgtdbzUZXhiUqkaWiJsi5eXnTv5RBqQ",
  "key23": "3VzqVd5qaZfisA9SYXDXCae2jrsaKqzvNE5vm9se9ALbuTvg6uCeE3D6B2AxUFJ6gSG9XFk9GhKSo9FPgUUSwfNX",
  "key24": "5hjBeFendApkH3bTKMvmBdKpHogNmn5j8ssjpfLVQBRzknnxjUSbUkEHR5ujswdjBVa6bXooroPRmCs7kfHuSgep",
  "key25": "36RHsK47exyocxYTXRGd7vzGur4gd44xoDGhwh7tDJCpidX9avxfxqHDLvmBacSD68Gf8MyKFhRQcduJ4NewRW6o",
  "key26": "2D2Shu8L45KqYfMNMxSa9SpA13z5tbPFA2cG24oKrLJUUtfXPP773EHbay3VwwnrpskaszqRR5b4WRwvhP8ZcmUo",
  "key27": "2xSpdKcAEpqQ1udD2aEk8Ub9R6gtgTJ7P6k8UUnakhzof16Eu6aXiFRSkze3MNQeA4XXxRehSdJeZaT2uxjYbJ2X",
  "key28": "3maN2WvrskqyS6pUu1LsRNunXiq8WAfyjXWmyqqctrXdN2YMZt4n6MXhxhsRTS2mHwdMCkswf495AoNbf24rudRq",
  "key29": "5A67wEVpaRqUoNwbDZxr9Z7YGJuuj9Ac6xvGJiEXqc67L2c7Mg62jhCUpAdzeJMtfKUwxbU2bGj82biAQQLPgB6U",
  "key30": "5D2XDxqinTF6RbTGkRxSdUqd5Cw6D9UqVCiEZkxbAWD4XSaVxSeHN5wCa8J7igbrCgxAxUHvwwG1yjEQhQNchUFW",
  "key31": "4hLwukNs4b3rDdwZT8ESc26DQBmif93ZipHs7imQ1pCW1sFA5ZUTpJQ7tQJ4DvEW6ASGgC3EK8zGDjL8YQx4tTKe",
  "key32": "2yEfSn73ZHRttMvdDMpU8hgHTeoNzJJnaMwUWYyV1hqHt1JhvfH4FAKKntJmjzmKFk2tZVY8kg6U7V4aSHUPbvbi",
  "key33": "3hLuaFuKhmQyRmsuRceeLG7ecKQhVXZU4rWmoEF3fxXyrvCcHjogAeZtJfLsFoFYBTkQHazR36ttWkZ62dTAGqUh"
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
