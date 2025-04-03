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
    "3nFsFJ4CEv3d5V57EjsirR6tbHUpuEaya8ozjQkHTAcJTEawXkwL3F3fsbjYFnUFUEhoS7eXazwhYqRpiqezch4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F4TX4Wto966YsnqdcVytk9PMy4m9WGS9nbQ7vrnrrcuEmjXko28Fuu5zTUvvm7aZFadoSpmayz5xVd7EZ7CNpYY",
  "key1": "3pH4EyqgZzZ6dQa9nBbME4fTv2KWFrK5V8wN4mihThqoWMuepvbU7HgnT4c5YkL55g99N9XB1f9BNVss6nERxPfX",
  "key2": "3CQVMNkm9Y63brgpZ2V8bCFxSAaWJYFsj5pdtzMUtyjNX7mwdk6uXaGrDYWdz6HVWb8AJ9zDfp5AQPf6qC9vWh6s",
  "key3": "38mBypeQi18QUgXPnpV7s5itiw81CjqTAceLcSWzYQntib1ypyRbvEcM44SUxVxS1h9ihhZbBa9yLSeNuJS9YrJQ",
  "key4": "3HbcqQhrVBT6WRymqfewvQHo2zTf6g7CD2nptfjmE7vY398cJyfVsH8zYQJVXAbVTZHL35LtxAU2RXqZTbPREPwk",
  "key5": "5hmrgjNsNEW7ytKcPLjfMdFvMam7wJZ2Vd1Qvzc55k6tGBkidFNcSLEfyyq1Jt4yTfhVzNnrbK3JSMwRmrhr5rVw",
  "key6": "5EnNeFmLuHpV6Y4v4UePkMhng1ieybGZXF7MzNjscF1wz8FVHDieZ1FUcXDV3NHbKgYRPvvAyNxKFRngHuD9QVGZ",
  "key7": "2muzVijhi2QNZWvF6GdNQTXPQ86MVRVST1A9eUuKikgt2TZXnJng9TAdfmtKhm6FouVNdtSocNHg9kq2FeJvwdjp",
  "key8": "5NSXUP1cgcKgW5UJaVk9YNa66FWjyDjz6g5UkV8zmVbCaBKgVdW2jTa7b9Gik184oyBurjfHBmz75Z25krDWTBk1",
  "key9": "fB6ojYpgfckgecyw5mFpZvqHeGHjnT1HVvSiTwvtkbY4eYpaf8Xmx568VULRMN1Nbu7js6FheTiZ25FRevedD9H",
  "key10": "5amkNFpF2xa1dfFL2zhmj3XGfNqQ8EDqwboeeDcT5dQseuJQYr2Bo3T7f26ict4gCqURz3GkubCXQ4Vg5BqC6qf7",
  "key11": "5gN3oXeMYcPJKPwkWaN6oJeADj2Zf9zU3qk5e9dPqVrB32iyjxUAPWLFLvz8pCCzEripfeiSFz8dohxnssESRU47",
  "key12": "66v3gTeprwfCJbd6eKeYmeFMVBvmZtLApD6xyncUQTrm1N3dAadrQrsgFHPHznxFxpxWrLafhZZFmVVhJ87hgz9t",
  "key13": "5jFzD2xUPb9EEcfnyStq6rinSETKA9joq9q7WzZMG4dX4uiMFfCZqasPw6NteQeGCqkrK8wDzWKARg2zyxyqGoWr",
  "key14": "YXRUXtpeXTZTgcSFp5c9udiNZg52gzNanmeBhxs5bLzNtKrghLRTRz9fXp311Au6NkA6vDMSLE4RpRob8WJLuka",
  "key15": "3geTmkK5Ei4raPNS2QCjrnFivZLaZotUJf1iijm641jhM4S33xC3MJDsRraJxTzjNX35fcA9oP71j4rZGbSerwgW",
  "key16": "4Ri983jxC9x72iF4picvS4Wdg8op7w43FosptDFHR1q2Tr89Jnh5hTegounxzwWQghL95rH4pT3ZBkYCPfW7heHD",
  "key17": "4nKjYifEMykkgUv7Fc2pwx4cHYfcp4fLv6HEsJi7qHxdVzuth5d2whtY6GZGRjACgGwqMkPvGRuwZyF4Z3cDqWSa",
  "key18": "5jEBdSESyA6QxPkUyfNFvpUADyuEiW8itQsQ9sV5P8bbRwzmst6ZE57imLNCS81UvpqpcuuYsPwKbkYctf9Htgg2",
  "key19": "4RQcEVx1pjjnnhG3iG4REiUPXTwdfGTtTHYzyeWpmNsZs7AiXXYsbzB2nApKnahNMtgp8Qw5fZrcT4HsXLpUjVBW",
  "key20": "5DomdrPe1H57UGDk2RjbhExSHjy59iU7DGmtrT9aqqNo5ztw9AmHnrb6aG9FUNoRZgTNH8hrzSjJURQH6stVEqr",
  "key21": "31eq4PHMohpyQ9Te4EbTwBotvKfEGwJKs5Tr9DAaVePeAemnJcM3VTV6y7TLJq3uwEStdSTMFQEHY9ECAp25thPr",
  "key22": "86LCSzQez5FiGyunW6RavNzQVVHMM7vMnY6TbXLeFK7YFYFHai5x8qWZXex9HMvpJuGrQmcKPa4bguWTyGiLwx4",
  "key23": "4fKnDFEv717PJWHRciXE7vih4VRdYcwiazLmGUHU1Gw9keAA4QdUpagW2Uqjim9r4uLynX4zFpkGRQn5hNV2EKDX",
  "key24": "5PS6YeCkfHTqz3UHg3uqwqQDxsdouPLenp5vvKQCTrnXesWubJ6tyeocmvLZtKdTkWmV9ZeyFsqEYGLMpjgayzkA",
  "key25": "4DqwxfEkK5839PwjTjTBWRAfzLyLVBgRyWke1URYL6SxaYBAseVE8hQAn7BgrM5FgVrA8qYqtaJ2pwTLradktdRS"
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
