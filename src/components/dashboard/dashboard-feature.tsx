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
    "4goL3QKMLgAVRvVURjXRy4Er42vHa3NPbPmmjUYgusDTqDFCtG4PFMrJqmKnHd1nr7Aw5kxr5e8Yy2ZiAJXn8tt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31m25kGbjUUL3UWb697YYnZ2j4WV7LqnQYN82gaWazpFj2ZdAWSjD58wt2XPfTvQsArFihHZ351CctKnNZayghHB",
  "key1": "WY1vgj7HdmY5BdPszeBoFyth44F4PQ4WVkgVheBhTL9sagg1StAzKdBgQ8JZrsdZNpg5uTp3HV96mbDMrLPZp97",
  "key2": "23CXKvuFXXFAw22tyb2JuPGcZ97RAzzgvK4cF59nqNoovZx5TaXS9VGkZgkDseJrNuB5GDyQSDTea2Vmmf9heqKB",
  "key3": "4JKF66dAXnTYTocAPsF3o1jhyci1mPSKDjbFWEETWbXHFdAs4rWUA6vB483L7168Z6JLkVyzDcMSFUbaiWhLNqY4",
  "key4": "2ScMrQpiNVH5r2aSiUJf9PQgg3yQvDVNvJ7Tjak4sJTTTLQTY62SjdJpecfsNpXwXW8sdtgJBHL9GXtUCs9DfkWc",
  "key5": "2f1JTDRvdi1BPjjsvjvFWCQWLPmg3JEpGqJo4o8aHayWnNfRcjnVKAbiSSj32age6UaaFNPLn5Bz9iPvR8MoWXRz",
  "key6": "39igyMGL61nJBL87aRm1bogMfkdCeVsGDQ1eT5ZinS9fcRWsgCzwhnUw6DBG6LzFm43NLQB7RJJZWwSqZY2zKPr8",
  "key7": "4Gz4oXK4zDagjreri66fEE5G6mM8PmN8t8wSum7ejWvGrYzM3wxRdf9DJqKZP8qoWwCyzBrnU8XKd7f5pWBjgoAC",
  "key8": "3K37rC4yc1aWsDD1qDknNAGsqJWp9mzTrekETh7EiHMP22CsEferpVLzfx4ohAqV3eRUpRnj2jy8NKAB6X8TS4a8",
  "key9": "2JYTRKRHwGRR5dmcFT3mMDRQbCZXKn9Bh4qRwk5a5woAAaxQMqAn8bxbVVAbQamKiMYjgPm99jhH6sNDGWXH2XqY",
  "key10": "4spyQ7upDo2xGyZ7K8vc1TAMQY7oZ7tkPR1XY5k72JSe9GRcZfDFkz3X55yWAcGhXMbvYGnak8cLWjLEo9UEShBC",
  "key11": "3LJQK4yuPWMmhPAFUGrLXkEv3Dbo5Thw7UhsiaU5sWLFqZRBqSA6NUNhLA5KXUzWVAATw6T63KFS3cUmhgziH4z",
  "key12": "4e2sKfmkTmLpGjeSrHRimHKiDRXaZ6mVcteAoYNM5yZm2k5ezfUBPi6p1Xysnb33Tk6zF4i6QXKYUuPxbk1ZgXRz",
  "key13": "26P1xnVVo9iXvoLvDcbv98fVj8aUtG4Dnb58EgYdUrDwTovknKCV4mdDySTDXXjc8GZXmukMZRzieitpVbf4R1Ko",
  "key14": "61hSF5BQqUJxqVfAkjMx1D9dNbsGuoy13JSzCmotZJw1SVi6ffRyNqJmBB46j6sjx5AM5qukK8CUVasuiLWWD6fp",
  "key15": "2haiPzWXZ8x3Rx8U78scaecFVss5JkBLnP4SDRmFJu8ATE9Dzh6z7fyp5R3riYutes3QAnCRFFPNu9gnQQokmDNM",
  "key16": "4XhdMTEKRGAg3PzaJDiCwC1YcCWhud17mmh7ABRzE6b3MR5ZZ1BdN4GCX87G1SriMaLY5HQxVQ8jSa4iWQV2wFYh",
  "key17": "xczL7GH98xQ5ueBt47jRKPke6mc6UMxhe3s8GnbyUU8qkCzHp74uT5Cyo6P2hRNpBzpuhM9YdR9Raz3j71Zt3bQ",
  "key18": "55CivLA2eSMUUMcY1Lx2oaQz8BjqmFNLDLhHizbBrshqgpbczTJK4Bxwj3tSVzQTj6TgqSx2GhgKmymKGGtJXq8R",
  "key19": "c6AtSbUwz1yYo9M8GhSAA12KyuTefux4RRJE4EZz9xxayHZnmhpY3RY8owcwmwgZXiveUHbdg44MTJrzXzajKxw",
  "key20": "3Nws6W2v98PC4ZhLqkxfSVu7116mnHFnMxaVirwMJhM4Xno1xWgyWhKkwKqhovH6G1MZm1hJTL2Z3vGHhdMnbyD3",
  "key21": "28XXR7cZbW2H5tYF8JNz3No5yzDqARcWSBKJ29td9u6yTh7aeH6MqtokAyJBienUTBNCiFA9ApdT6QcWRQfFgMvS",
  "key22": "3kq5C3pfsDi2Qo4ZZL1mDGWMmw1jsXpDQ2o2n65LNiRcD2aqUJwtDH42Mn4XciYTVXapyqfLUZasSmStFpEU9Ggg",
  "key23": "4jMX6APtenFy7VXbFw8mxMDy9qBXTq6nr7ThwWTVGdFLZbUEHyQ3qFF2m7gc5NRZKrNmmwunQA8JSXQHiRLdrRS9",
  "key24": "2PP3xM9Rt7MK1gs1AbGKQkUkJiSUP1SnSjicahw5ZtZLGkdUzHDuwx2K35tVWjnFmMYnpm2bvsXw3mPcskqfn6mY",
  "key25": "5EXbPW9CMBsr9PdJGEGSrHKB27ZpBpG9YqAvirx5uzfA1jQQKFoie5ATEfuo2kyNtBTt6suvySnievuKHJTDEC4e",
  "key26": "dKXXkNamuPavkdif9N5GzK73McXPDxZZPJiCGNQukvAh4Q8ZrFVmdkEkmYstgGduKdNJVzBumDQEkPdWJYqyv9n",
  "key27": "2Tb2x8xYdFtybCQoxWRGggkt1TMqiscprRYwrghxZknbemJ5yBDRs6WTVQrsvT4BKRE9vCompP23kHUSJdDSBjeo",
  "key28": "3vnkeXsKXVERVEfm371pfre4BPRQ347PBf6QDkHLTFCM17QvYogveAhQ9vPpLStyeno4XLjiTHMwC26SuEH2da6j"
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
