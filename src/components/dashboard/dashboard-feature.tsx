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
    "2g2ogRCoFqw9Q2Tr4qCGTKSBMqwyAZcfYKHoZW5SAgBVDyZVnWXRujkTpixzzBm1HjcZh4KaNnvacBMUqaLWvg4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJvi8FdUJB2fVGS8xua19FpGAJCkL9XPTxp61RKKGEPTSg4wQJTmFPcftoyigZQoskdubqAULFZU8NNGAzWmtcC",
  "key1": "43h2FJKBxSVgtCXX6KqQxbPoxH8CP3myzjdMmqQf7W2CYtnx9sPuBYCvKeSGwVsDfDJd46FC7eqRdsmTPnja3ATH",
  "key2": "2qCFjqxmufXFGdvnAssmyNykTgMiE8DNqGnpJ4YkDRqLHcmGGAs6G84Xk5zW3RsJLwi3kk8UfJN4HZB8n471VzvV",
  "key3": "5GgECS3x4Dh6QgejKjqheTuF196kjGHXP9shZYo3ZKonSeiy53h9BUbh7D7SwTj6WsBXVJGM2f9HKc6dqms7NkrT",
  "key4": "2tLzd9zCxYrcZEghDPeSJ9XfrHeScqEW6uLMRkYrSUcdrPjF3HYSRTons7C6xMg5dmtKzP3NQnWhM21LM5NQWRop",
  "key5": "2g4i6SnnMC95d4qR8kiK3uHDa8ugeis4AHVfjQnm39TTHTdZTyjUC4rLnnBcpjCHL3JH1ANFtkM8srVXxGKBodYc",
  "key6": "3ySo1DzQfGgjnSui9p5zCqdaGZ4Z7q2UFp7Accccvv7rSR5DELbMfPP1gLJMEutWyUbExYQzpEHmk4tszSz9L6Kk",
  "key7": "2C5GnRGMYYzCcyJwm3gvAgo9hRaoXfFSCmP7kxajeFzo3sddr2PcPJb5ACUgPqDwTF7jbfXfyZWS5do5LHD68JcS",
  "key8": "cFjndwK1pWjJ7c3rpmeytfmAouQpkVADYG3JHkWD8PmKDtTnmnMhRkSB4U9fErsErDpk1xTbZQpWFGurNEyiL4c",
  "key9": "4tbHjVzUuUhHTwMaTKCYnuSUxqkcZSET2eHNFzJU3eUJS4aXjNigoD8ifA5y8NuVQMJRC8QivLGiw5teKCaSuyUM",
  "key10": "3BwXVL3cRFCSfhvvqAXzEG171yn4pch77w1P9M1kwyW61NU97hg24Tyx5kBAcFiok6oHrcSyRanPG8w4irjY2XCS",
  "key11": "4L8JKzxjS9bBykbphJrUr7wBvaWRfPYDxZCECqTCdWLcbBau5mtSj5m9zGNCu3imRaiuJyUfFDtrcWh4SE6Wpjvc",
  "key12": "khBPFRtTaTL84mJPgBG7T8rjRZwzkzG5JQFa5QBSpx99g7YdFK6ZFULDucoZZmUWGXT6iXRPao6VWP1q1T8s7Gi",
  "key13": "4tZGUcTnLZB2cGryfP2qFyeHcTQbf4oS6CxjytiFfToVrycMZckXKZb6g4geGXoU1WZNpWBckkc6mtxHxRvnZARn",
  "key14": "47Rf7ZqVtQtR78xqM6kqiZRqEHAGYu2aL6dy5x6uPQ6T9d2KuAeGgokAfiwxGusVaZsJe46p1U89BHJJNGuhBhNW",
  "key15": "4ag36cAbtwtiQqNX8yiDLuxYvy1dJPE3JDDJLhQr1MfsymBzVECyzbpjFeKknat5tdH7373M3gw5GQqJAGvdHUJB",
  "key16": "46fH7KYtDFXsYp3jGDB5qLu1gWrNiwaTYsKcGXMX2Uws62CRzZrAeYuUjaMaDcjktgVrzVPJMLe7ezAAvJsvMnN7",
  "key17": "3U2y26t3Y9kiWqM4QgpQN8id2o5v8ci9xA7NoA2vBQWfktjffso44PcW3oPJHrwXNEhwdmg8xZGEJ9xmmZni6AjT",
  "key18": "2CFm8kudf1rtFBPmpFfwfLQB1VomLdCmbq6JDokcsNUimHxBXTaDRyes6UhYx3VZVcxTgDXFB8GDvC4DEX6y3SSW",
  "key19": "2QeejGEHaSZJZuHkuV31bHetRQD1sES2sPiKmubqnsZHxNA2NtKeTVibFcM4WMhqdYU126CaUET47tqgs68c1mxi",
  "key20": "3nHbuaDyCKW7kFpdhoU5cs6Xyvzg6er6eijAAjQziKVueUA7GDPyRWhXJ9xLkrGAg9pfbXtj24aELY1v8y1pNmQT",
  "key21": "3nvKXGxjxiq8b2kVLWCSjtMgk4g2DYWycRGWxDKpPGy5Q3iWAV9XNRkxfpsA7LC1X9JHzAhroiUcVK8XHnGF6Rtr",
  "key22": "3SkFZD3ocVKeqwZhEhrzRH8GcadGcBw97Xdw8FaUB9FSuTDWJuhVuMTdM86iHDKicqABjgkdULRXvKVZHvjUioxL",
  "key23": "4Ra81u7gyBB2jiKLHnaGeV7aJ6W8QDirtDyYuLALzZrGSswUUrHLAGqztXrNBNSd3MVofMwNBEEfdj8EwAwEQyYL",
  "key24": "3g5Z5szj72YDFd8FhyHKzUnPgeSJVM67Gaq3paiP5DSm5ysDhWzqsnLdQu2R9bwm4AoWjz89L3ZaiPH1vaNwavWx",
  "key25": "5FEMgtD5FrTeRrSkDzrVDbZq3JLuAgpfFJPAAgJtVQzpSXbSH1cenL6fmkqE4ry3zJazHoDee9yTKVNBD74qQbbX",
  "key26": "5FURo3CNANhPePHrvQTXtCuauDZPvRwJQm1TGEHW5pmSZRbAPR6rjHM4oAtyY7Thfr4Nj1y8Ron1z6xkCjtPKiBy",
  "key27": "5EKZdDnMMbPKcMdbkq7WmpK96i2aWDDPPFKjDmr5kcg79HjgiubB9vJXi1W4CXEPkwHwJMgMWBZuMhQcxjbG6RhB",
  "key28": "3DZjVR5SwHnKeEEurtcUqYf3WtbMPunH5tiL1o74ZwbNjjit44X27eLenST8WZeYDQcqRxYhJU6Gvp4wpAbcEjUa"
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
