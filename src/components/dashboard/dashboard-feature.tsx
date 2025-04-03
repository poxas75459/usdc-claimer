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
    "NPjrh1pb4ezJKSXy4VD5TXaKUKd9nbZzLbaMaeW1u1twaYTAwYfpxP93vC2UgJ9h3tMcfwGVxrzG8e3ZzALajGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2brongiraH8Rub4ziaDWB6L9VMuBUp3esuuPtQDto5oGu6e9By21k29soWi7jajytUXydmJRz3W4r9LGyYDebX1C",
  "key1": "rMUXLYonmWeC9bLrTpG6mkw2ajWcehrhkUu1DUpjJ37KW6oFyXER1RbYSX7EK7ta3PmAxojd2m1fMxu5jz6o8y9",
  "key2": "4Vyvd7sFRz6PkuAPQVvaYnpA3sEtzXvUtpLx4cPgEV8NaT4nrG1Y5azKr1AH5azRKF1XKnPTm1RoiC4C59PBseW6",
  "key3": "3VghWrxKVsLfJbyni21sbeVyhgKJ53EamG2rYoP15YumnVXPtHeUyAny79wCFCrEqwBxs7sA9PzLcYj3vduVeBwA",
  "key4": "1mPwvNh3iFi8Nm6sNMQmqMtghKs1FLYhGfoJ1UExFDhB3gGvn4QNeJ5vpkAXkzQc1Did7STvbXaNzNZqhpE5vYy",
  "key5": "ZsJPiSE5N7LvaTj7Kwkn7p8XSEVz5f4xnhfybYPAWsWsRqMqQz1yemHwe9J42LutunLcLyw9oB4u8LVbmhiyQHf",
  "key6": "C7bYSviZdrEgYAmRfmKhhYB9soydUYUziy4YNhQFMkLMnfhT6tKvXbXreVMgCXZ7CPL5Fhux5TkpAZCgnbSzJob",
  "key7": "Ps4HQRe1ywiWCNcbfVbTMEp1SjqmX8tbhWRnfRytxLM6kQMx1jc7HEBNFcMDzs71bPmRhcPHinpCEbszq9UMdBa",
  "key8": "5s8TKkCqRVz7JrxYbqJUu3jwvQfC9fibpbotMrPoxLaLTPXxYySL9pQpfwaqzmLLTDv9uJnY5PKcgvWMAKV4AJeS",
  "key9": "5VwgTqSMST3qFK7PifvDz1g9nXLqAQe3Waizh8kcAn77CTjYTbXRyWr1dVW5zsWXLzw6JVF6eSJEEEMEdcp3pGJ6",
  "key10": "27xQkEYVQGFgzsiccAGJHGxCvKxA8c72Q7cgCywVeAA9Atvz8jKmQATcvCU99DFtyT8iSs6tsYTM73u8FB1RCH3q",
  "key11": "3ypUDcB75Xx6z6Vxi7rjtJkiXiZK8ZiiUJXP4mUzdLSTzbH836frAnutteSmdbDR4VsxWrKHhbKdJfGzNkpXFARb",
  "key12": "4sdDwFrVU7mjd5Y6xB27YpwbUfRyLZPxoU3fcT3mSLsK845edEf6L6hLrQADUFCawdccJWHyAhVMdiQ8zFcQpXX",
  "key13": "3XwGvNZDquLFMoG4EUwTyqMd6zcu9sEGuJS8jPkqfJsk5Y6enmZhXkg8B8dCDVy763pvPRbHbxKx5PowFAfGZWUm",
  "key14": "5zQJaTuvctWWcA4sD73g1Tt7yZjnvC5gEi533oTcKiEysJh78i23LCUHUFyoc6jpnBGmXhdWKhDf4BL11AKMNEUG",
  "key15": "ryRm5GoAe1hrqHEHvYftBfQEHLsiWBkwqCLEGDdUQLKhGuKsfDuxoJ1fDQzq9ZjTSaWc8HqQ84d9XyAhmbp7Yyn",
  "key16": "4sE9uF8hFTACXg6wfj4R7LHjvaug9FtPjRmpjfoin464XkYAS3dcHmH7W3ELniPSZ17gsT6YaEZcug4PnWYKECod",
  "key17": "4VDWxGrojFe4Fb8y66SAEtPB9bwsuR5kfQkaSC36h1hfxDptD1aB2QGgsFZo5Ft2mad2wWuXiH73zCwZUH9sKw6t",
  "key18": "3Tt2R6yHUEjfmBr6VqGcDERCFriJBP8WqaSmTquncZEz2kHxkER689A8h9V9sKxtuEPj4DPFGT8r5458X4s2h9Vk",
  "key19": "42jHWYSMuzT4m1R87SrTyDfPneiN5e8BtG71aicrgVWogFGJUFvNXpAXyS8o6BuZj476kCvqMMKsdu5DnEb2mmy4",
  "key20": "5ZrsvHRR5bQcPy5qVgmWoPB3DY4rVWCwW3RATvZqGmWP2FRi4xqG41oQdKEiEg67dZUBhjCQEDRzpRTH87LpMVnf",
  "key21": "3T1BqHxZpJBzuRBuNbzL4357x2hbfHcmno5GrXNegbNaFjsDHiZP2KmVxrodiSYNmDY2YbM1d8Qyav8BtPonWHJZ",
  "key22": "4NpHGTiPmLTyDUfkxJ4U3YCDDvn2oVSXdiVfnYtnPx6Dok47RkBsQ3ttQmauvgrQZqWA6QubxKisDXh5TsZBdfTG",
  "key23": "5LpNBnExK4Lvm5rpua2qp5P1RmJn5gucHE35FsZZ3qtTDU7g8TMUnWPkPxiDKYCcjyUfHvvUF3iFpdF3sfyNpjKs",
  "key24": "2iWwtgW61uwJ6iBMTA3wxBX3TADRoLHNBe5qhwXeVjARTdW8U3RMWbE9FoCh3xc61o5scRgqKhqXL64UBf9AxZVc"
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
