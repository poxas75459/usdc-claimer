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
    "3in4mspntjJPcvHGrrrDP362HebT6ee9NtgQWqpAZTMcV2AyqgYiQHDdZEc357Yw12HnwmEtcSUFStFn6bojAGHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjjtassbb4iHrk8hMAzxHu1ibEzVaLpyBDSG4VDh5vmrnMZcLMrSdY99rdmCHe7V2zX5cGASmWZGiYcMHDWuzC",
  "key1": "3WLgP3ZdNZJNxL3CzAKywrVfirWuE8Kd2jcPEC1Dhy3NxJjoqRaHpwBrkVFEMyFTPn9JsTLtJdn7LuazKaMnMcYf",
  "key2": "4acRMHC9Jz7nT2wE9SNp7wCrSDkgPM2w7EetXxHyqX9Z8vcNnWGbv4g53Lg59chm6xz1pZcfvF8ng16ULNRRYnXC",
  "key3": "2Ra4GcYWozjZ3rkaZsY958TzRqzeoxpbfHFuxBTiXQFygJyKxLfhU8wEjHM3KU3XzX7CB4wRC6G5TQ4sYMK19a9T",
  "key4": "otK5YYkLBDvnaB9pbFnEHN9FMrWDsHU1jmTscvKUww3ytV6nruq7XycVF9qs4kyLeDW4WDFu2rg7hUYMVQyigtj",
  "key5": "2wk5bURRx2HjXGjHA5VY9Dtr9gKpk328e3Kju1i7i4SR61v3qwaVPHT3Uu92AjZbHdQc1MDnrB9Jp6ibSC6Xvwp8",
  "key6": "y3S5zYgSLAYZhLfWrvaDWhwDDaSE8PS2nbQeuFcS3bt2Xnw7WFVjMUbNsDXUhcEs1y6rimEa35zmY8HrpgwSEBL",
  "key7": "3aD1QzVzAMgjn17XDELeTFQUgzpARMSWGxN93Gz49Dbxf8s4nCQApBLjSn7yFzmVqDKBE4V3bAwcjR9Sz1jc8P9W",
  "key8": "dXXD7m7ggeBZqrbUiUeYF8WtCjHrJR4sPmEvJs3Ms7YfUcpTaEmqat3exqcwFQU4XXajPgZoyBdEke8dqcEu7dg",
  "key9": "5e18KiwN2FQ5M8gVZktcK4E6ajy6BbMz9rfxxgZST7nXHHVNsFdCngDUywq8fG1DvHSY9kVUiRkEcvNt2YkcyLhT",
  "key10": "4tVg56UsGBQERXcez1JLvjniEq6SbYHP5cdqNDZRNR27wNp6Ep9o12R1kXH67tJQKZt1RBta3wnGa5Tf6xghiMWE",
  "key11": "5oNfkinbH8KBWBhbw9An2qvzjeeBDLJHm2roeiT6duZdrRsGyL6bGB2ikbHN1f5EXtm8hA5JGzSqTNNbgoGhBfu7",
  "key12": "3nthY6VvegowTD8MyhWm52e6197dqd31Vvb8HRdLsFLEw4j8YVyypvzECUcdqsD8Pr2E4Bv2QLuGhTPKAKwrnTjB",
  "key13": "66owD6SkvmYeqHgquEbqbAjZqMhZXm7ufxKrxjjiKezwEFotu7xpCCLe3CnHvrD9hBjiCef6BB9r2pAJ3jBkWSrQ",
  "key14": "5DFaBc86JaXQkAfwCT9wcAruneFkk29owagNWmU8K9kp3rJP3qPjbEFh9KiGSshESHG8NY7kP5oTwyseXhCf5EjD",
  "key15": "5D7mVyqa6kKYuAVdkpKVvH55Conp5CzubVmMHxCgv2MT9CbXbNx2ZjbcHdA22fEt9CurBnwtaQfZcrKVucet3MKB",
  "key16": "5rNKU9A8ZPc9MMVSBzH1EJoQi4KaMJfHaSVxJtZtUYhXyPWe6SYK2KfsQWYhvn8GV2G76HKaSrPJEQjiVwZUioKm",
  "key17": "41cFyjvjZFLZ35NemYUN8VUqTMrofdKU2sJTr31MG3G2qCe4AsHmxiLtYNfEDWzynSz7pDoqHEFZ4yYbags13j8V",
  "key18": "5siUDxaZV3xzPTHsPWgfiBNqcWRSWDBpxCccxVJFyQcnQK4wYXsXcPQDRZk9AkK8t3XW4H3wzsPU5V4BPqerHKst",
  "key19": "2XyXNGZt1xaPKfL4f39y95aRQEYQHYc4rN3mmQSMxgkyb1NsmoDChUBMRfpm7Ri7nwtQPu8CLF6aDnTigX2NhQ71",
  "key20": "52acMa5ScgvoPP887cnve5DEjmWYWEwXrMLS1pBey1BVrjTnGcqjJ6VUh6aBizP1yoXRv1qZ6JfozPLCNKC9AY16",
  "key21": "4Te8UgqSatKoJ7Go8YCkHNgk9ubeKsZFGAzDXYu7qj6wxmUY2L2H1TkMvn7hhGuZBKiDdTRJ5jM4BBjzVF9N1kFz",
  "key22": "5swWguYNuP95NxWtTmegpRroT5aRULw5HiRix8L1Lyq1R8FT16xpedHqxo7SBXrsXTKkF1m4TWLTTJ6nHBqEkPzn",
  "key23": "26ga6zmxZf3EkGfK45cTbUSKqSHiqcJyhXPigEoyLHfHydCGVxZgGBawHa6eA3ugDQkvm7S3ygK1wpQ76rZ3rAKG",
  "key24": "hhFyGAV8TwBtqVLDatnQtb8FonH1MWjmasoTuuQF3WWDbhnBoR8bhBVNLSvaxH1PWmtbkqUmfbsXsnyN22VAZn8",
  "key25": "4FxD4jmbxHodF23KQywNDxSuMfFZioHqWAsNS19Wx7QkYPujuY4TYfK3d4iMZeH5RvGq3z9tRqZ1kN553AdTeCcL",
  "key26": "5ZJ5YfN9vKscYtwesyDu1C9MwDwDpXeAfKnJrw9KagGKotdhU964w5t3e5cpxto8sRvASKwy6cdAML1iKehzUztV",
  "key27": "26kSFfjjtUVgnLagntFUdCh9FVw7VB6tzVh31Dr8cHaf361zfYeYgm96zcQ5LavMi1vGn9Jx5F3Kii7PSxFHqq6G"
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
