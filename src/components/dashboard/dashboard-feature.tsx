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
    "bxZkzNKviG28DvNTR8jLVtfFZKPWHajgsZbbS6mXt8aoWUubj5gwzQvNrGsq6MefDvWhrZXGNdHbCiQZAWVCnkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zRQDHsXXbdnAiPJdmpiNEdZDTVZ5juzvaxGDWjHB2nRMQng6QLmZ9mmxiqZnHU3GDbLopcDJt2dYDAGmhwvcbLU",
  "key1": "3G3BA6kfN5BbthFoHkjkDakP6PQjQXdt7bd89V4sqwZwU9JKiu13Y1Mwzh2HwBg794z2q75djn8Bbp9zc5mkHSTA",
  "key2": "2dovmKsHHNwb4L83uNb392yRMEwvXjnW8QuFoCAv4hbFqeJ9keFpEgwiowaji7XnskBnA3j6tZiB7Z2om1QLaYrC",
  "key3": "3tXAeR5ndoUy5FBX4Vtm8cKqraUUkEBzxQf5Msz1ZF9ZYsknvHESFxof4uBKj8w5z5dLZQU9tjhdXp8hMgKNKfgM",
  "key4": "3Vnq3HwMfHSYfULWppQCMDhiKFDDUkNVGCAknuUVsmyy6yLV9hiLurrw5foxPkefLahGt34QT7gFYTMnUkSWZDQA",
  "key5": "4hjPqLMwueNpnntkPrHqSNsux1DfBsphHf4qodNM6i6QnLpGLEkE2JFsw18n3WWsrvHgao1M7Cvkbm85Rw3GSjn6",
  "key6": "539pu3ugoWpsju4GbQAjaZD2cXNzcj99gE4nSJqQB6uSVX3row9icxNPLqcesrx591Kn3w4c48rmP6ZCEpM1tmdC",
  "key7": "5QN9Df5uh646z3CTHGaYadjE3Qsj6XQTQJytCMv2Bf7rC5h4CvBN7Prqt4g9VZ8WMcs9EbjENeuBNLK8gARuNTWa",
  "key8": "4XRhP4bahdUzKqj1epsxg7Gkv6zHXSWyC4zH1RuiWLB5KcsSxv5WMRwwPgM5sg6kqd6ucis2GhgjSAZs5Rd8sboB",
  "key9": "2FRphzDxnTDBf2qmHRhtKSzRF3ABpN4ZcKEhwWzMvn919YSnKtdJkvXkSXc9ywje1z6iX2uZNCnohw6ZotBWpvuy",
  "key10": "5o8beHJoxvSUXNyrqe7zRNyKX1yXXQKAM86eAJ4YsBoU6YLFwhmhv8LaTAiNijpGGMZ442Hqd9NahLyrgDj3mLFb",
  "key11": "2yoBYpnQThtQazW5kxXBpUhdX4Hh41wAhMdJ6EtfWxMAHNR2pgFkVAzifZGgY2X4jUjgjt5PPgVC2wJ3T3R9HEsR",
  "key12": "3wMAz7a8NtHSwVwRfwQAWeFZzC7uhbxysFXUtwBMa3UcEWJNWXSUrmaYg53p2PWQ62zAppHy3ukrBX6vXenPy4nX",
  "key13": "5ZhwwKS3oRAKCihYwhsUmRU4tM4d6Tx8hYhyManEb7rETKYP1PTmtxR4MAyJa7XqGJXPvxCkGLan7A5Mv4GjeAxP",
  "key14": "5f9W7B1b317iN7vJZyFMFGfyya48edM4xtdaZq5oGhEWjAvKkE54gaqggB1mjCjDyVyp2DS2U4gxnnuMdmv3bAzU",
  "key15": "3mZMYGDukoS3eHNBmz9inoycPLqo8PUEHMpB7rXZetsGX1ssYFAHPwu2f18C5m9Uhcc9mzqcofxnNSuTZLWvUW8p",
  "key16": "3uyG2nLbmhgsFq3S9Km3QcWkM3cf1atj2f5g5rrmx32o9VZy1PNntaGHdGHWPqb1LQy2Eo6PvN5dBWX3EDqusW8f",
  "key17": "SoBab9mT6gJfzBbd21SNv3SieKKFj43sm6NsctKXxQsQEDrkbTFafvnB6rAhCp9GJT6mSGXSuCzMqD9HibCRXXg",
  "key18": "4ngB7d8SEeMXDTgAvx5imTXeCW7ufJERhQfmfbtzQjufKcCwCiJS5mF2TUn3fAmBEd7JY4ERJS1TJ2gik4DsxziE",
  "key19": "4L3s21w3kCbWxjmrCfzBNuYoqCUQWNUFNftmys71dNJtMpFmtRxUDT1BReDMH61sPCd9tdtVdLKY9iSufyGmtfe2",
  "key20": "2Tay6fWq1A37puNoEHBS4hv3VtQUcYPAD8z9DzSjq6T8yyep4UdiwRauCzr3nhwoXCRh5wUWeY13qcjEwEVPWfxs",
  "key21": "5CJtbr56BV75dn5U7BXWWVvUpy2hYjUFx6uyp2L9P4ExfN6HbVx5QYsnMtireTTuio9qukYB5t6qZYxGjotEB5xo",
  "key22": "2B8szV7ghVbu5u1drGR6oibihh8h9Z2b2kQwatHxvSD54zCisoq6MCwhwBXsh3WymQDPBGm6ebQxry6hgMuK1uiJ",
  "key23": "5AfvP3tzjtfaDggGP9GufXq4eo66MXv5dsnXg8HpogutGBd5xRKxyK6aAtG3aB6jqfzNK8QXoFdyxSAckywKWdTd",
  "key24": "28M3k41gn9Mt9zXe3EL9WcWZPWiJsPa5V1uiXfyEWos39V5gWxz6rMoNFdpHqxiRz2pxsPLC3ULZKFxzoZVWQTPb",
  "key25": "2F7LP5NuvDvNRFR9oMXv1fUMPj6NjiA3c7emE1t7FXWyxzLkgzT56xU5NqcWuSmpZNTZx546EqKb1WifagSPLQua",
  "key26": "2YXuPZTNhUfgHMEaDEk9XCjqLfz5LU96FFyvaJTqoc8BrRMijNh9PiMNZjKFnp4KtbRu4WTQ7HSUzE2ENbigy9fu"
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
