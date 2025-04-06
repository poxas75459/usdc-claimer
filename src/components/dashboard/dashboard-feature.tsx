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
    "5SgxYnUvKJbpvzLJoRjZ4rWgyujYft8ZpAQwqSEFtNZgQPWoioTFq4H7pN2wTmJGTbSr8ynNYNjKJsyUR78NWP9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z6xx2472W2ZqfZmLfjLmjhhRvbJQ1aUVwkAQkd42oS2GeEZ697bQ7PH77HeaLJ89Rs3scMvr8kEQ8sZk9pfFWyL",
  "key1": "3sB3RX2fCQckPu1NPmB2RQFLSgsv7qyXVZz7H186revU5QxYB1MmKfCNbtZdX4L7Wz1RnJcqe5xwM4G76BJVYqoz",
  "key2": "57PVmKaRCSnopTUYZf6VgRpqx4sYnKexcFiyJ5dD8HV9oR5w77UaHj5vsPWeiZoi9YFaUHtRTFJb2JGzGYSMk1kW",
  "key3": "4HQrEPyEegBy5xcB9TyYQkd8UP7tRWLc65pP3WJJuCS3pt4ASnKpAT7pcPQ8onJ77AnCd335JneQLm2UFbEeirKR",
  "key4": "5UkYiJFMSiS691zUyDdMhctxyQ1XFHRYRRHNw8Jsgr4qU2zZTc3ZtMLnrX1YH8aHwNFZpwuSvF8YEvuvvPuT4keQ",
  "key5": "3ZwZY5edoMHUp7LvvyA1tLnysxpz2kfc5F6PbKWE3SJpcx5bwCruZsmsPM5qKFYEaApp1D9fBPw3PKyRbF6HDXZA",
  "key6": "2WKqs5PywWVYQAQdv3nP6XkrYcs4ivnSgM84jNMQa6641gXU2VmBaRcNEAKfAz8eDKyaykbw5WTbLsYxF29XLbsV",
  "key7": "3KSpPDMcxbuPo2AnksGxCp2vggWUbDxNs5sEVZqUjSYweB5dJyNyGcoqqjHY2KaTSfwEm81mzwx9j4pNJYjm9AEY",
  "key8": "43o2mjfAqLWPMcgS4bB4LxmuJbZfRYe9pn7T8o9djiwDzzQPhtUBLjTqyi7917pi3eF18yw2NDpZ9j7pxHcV4K2U",
  "key9": "4SPYnRkVeunxLxbMEvALayUyrHQuxeppcHJhhEAHAreb5eYFFfJ53G6yeDuvD2oDK2Fijzb9n3Vz2YsDHzJJri1f",
  "key10": "2e53nnzrHXwpPQV86qzqEMUpsCgL3xwYpT5LF9MbNdf5RmZp3peY3reftbwtbGfSQrY52euigMLs2Qxp3TRjSQaL",
  "key11": "5KMXNw3tFPwxpywCHbZBr8eRDheNcXfXrjuZ2Nrn6pwqwWjW2nRTbg18xnJpepjqeedzykxYqqcW4GG33JaMEWTV",
  "key12": "4GGigwD2wVnZxSSN34mReJX4mMKyphkzsPZTYoqCbDCt26kMjdQvAyMd1wNaYnpbRp5dmKeqxnqVTkhqWZthRiSh",
  "key13": "4mHCLoNaKtqmsxRdnJmzS74wyqsoXXbcM35L1QyFPYUHiao5utcDxDHyh42qCdZtgMhF7RtfUUmHjmwph3F8jkY6",
  "key14": "4MqHkvuJEUkgVRXFTwJtVJXaNrwaipT15zqQct1eP9Dzqk6tZnub6KZYAUB2VQCPGHJeNuyui8AQGFNxoiqKfnyx",
  "key15": "5sZzX1ysRrpFGe3UiZXn1zALyQAaHZk4eFWAGotamAcm3dVcqpUf9Pmv7RMu5ceeSFMdBtCWSefbNmZMJRD3Tf7a",
  "key16": "26e1JZjEGdii9bMeS2uFfcFwKgogQzq7BsEtE2mUNLbrxsh6Ek1mDbpvr4WcU5Bm8SGGS9UYZapvCdMkwbA9tJnb",
  "key17": "5bAgFHfUbFGeRKNss4m76mLn5sV1R7j96XyHhHdUu1ZxWLgnoVgjC25Lfyp7e68hiQrk4HiB9yE5QBGMxtuwK5kY",
  "key18": "5d1HKeCNtCAQnE2ajtPvJceEDUXJvfcXNCA1d7EuoJDeFRZ6r2pfYSk3AumLvaUnbMrq9BHo9fjspSRwKxoczH6c",
  "key19": "24degoFwNCJKQfAJJpwsPLwhftJLKm4kz6ENLe3VrHtqxpwKFVgnUxSHUVt6zG8yAUTXVzsdYxPwRKDo1xd5Xo86",
  "key20": "2N7jCMta3eTCSJPSF5edENVmjm5KqpniWAeRudJgy5FFXFuDLTu5a7T5pevu1EZ1ND3z1SFE5ibG55GDo588iokW",
  "key21": "2GYKHR9xBTfvqvKKyCEBAEhRymvxZ5GW4ELg6mZkX5s2Fu8Vxe1CkeL8kk4tLoAdyQSd22zajZR8jnw8txw9e9pk",
  "key22": "2uWv8JnaSb5NMpjuhCPeEek13hjRBNNqzbnFUnHseWtHGsYq5XLkVnGT5Shx7LY4u9h3rkRqUdJKnawdCHM9QPNE",
  "key23": "3hPuwnCsQrpvxRKPMqHfYuM9mfsuNVo8txmxnAGJ3SDt6bLQLczgAe3hgBcthWHMSetcWCaLzHHydQvu6viCFT7S",
  "key24": "esnKdxqqzJcKSjwxTVRStWhNFDgwqqj62jPtL59zkcNEssGnzo7mXAgQ8KusyHJfFhBy3t7GYTCpxUvqrLrmRh8",
  "key25": "3LuoTnmFEkzyLna14RdVgqwFGwMPB4nEJsPekSvvZK9zFvXZh1xBCtZ3H2cN5TcKA146M2dmyPHewLT3jnSHPSjW",
  "key26": "2qDGyhDPrwKAZK35ccKtr5udF8CWDZNLDQRs7eCpPKMiqCcVf27NWbNQzFEkPDSodW9Te1h1zLyzPcNiXdiBukT2",
  "key27": "2qsH8vV9aDJFQujXDzSkfLu2tenvHkEbFCMje4nN5FcXfMeTdgz5pasE2fa7kRnCVoxA5vnhk5cYj8vS2Cn1Qt2T",
  "key28": "5xDhYeQ8At5PUtfGWQ7pgfoLLMvX3Koc3MutXS4uWjhbp7t9e5jVzsFnQhAVKrMwomUaqSiorP7RfbECyuMkpkzv"
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
