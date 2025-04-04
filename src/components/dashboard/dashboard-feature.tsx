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
    "3cft9cDSZbBJoj1uVhAkUFbTHLJ7njD7NHpp2RsxjpAuimYEd7rh9XTq3V4MwbxsRS4TFAxTVZYCh8AyVQUzma3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gWKToj3nrXBPyesUwQjCpKsyZNZfbr1kQ8ydrcAQQJmPtZEdxLyh4fW91GnmJB1SQhdxK9gmaow84MMjJ53NXho",
  "key1": "4xfCZo8gGH8NqShmkyeLuQgVQ32DrQAXcL5TB2C7Z6BXfUiETqxopsTVMsouTghYHJPQCDnk94XhzSiE8RLnFyEw",
  "key2": "4tssD1TRu9SZSGN4wQHE1nmfGYhNrCpuKZiLjGQ8NrQncptcc39Zyno1enF4vM3tLBDXrnY8Xz3zhwxbJHx9Fosi",
  "key3": "4FGG1q5FQ9pSB7VTUFLX1z2kQbXd7obwSWoQcR8ARhub6YYH8A2FeRuaF3jMPWLnoD2hBi9f5uPyasY6pDuQaoyJ",
  "key4": "3mNnifX4XB43gVmABJFN2nEUBwQxz7q9BwNkjiEdVmJ5LG7BcX4kEzhzLmJ3TvVDnHTYdBWPQQjZ512x8mfG9y1p",
  "key5": "4m1erxU7CbUkPyws9JctmejytfgHcruzoFL2YFWDnn9joFkTtSs8VbHFNnMwqtuJ42SEtVTLKTG2G5daU7doAcUo",
  "key6": "62NPGY7SfUJjew4rzdF9ATi2w757jk9CbG4TGpaxkusumJzrxZW23Z7kdzTLigStQWRZy2qKu8PAPM9Ew9ESv1Mr",
  "key7": "494R1Fzhx7oSwEQFRdZxQjMkwVnsTzCiws7wvnEntxbKKcVLnQYmEqRqPBFABMRDZrR9xm5WsMAAPCyf9PKVLctD",
  "key8": "5zYEiNT9gA2yv6Vw2T8QSRJDwRbfMeGa1ntHfwm8ktSBkzgaupbVQWa5DNEg76ctmPFiyv7W6p5wher6K9CSF4dN",
  "key9": "2zRnwBmP5ouucxGjhfNxd4i6nS39XLy75UYrNNZVhkbNoB3Ei1dR6AC6PkdW2UXmCgyHdVdwyiuPuqPgcqssBHK3",
  "key10": "4z7SZXqg1SMk6UdgfxicrjC13Z1WKatDAfvjjhAdRuDwnT2SPMhiMntNuQx16HFGZUUEkjmCnjGF4KeCqnSAynBE",
  "key11": "4nB86tfFbHyAZbSLzmK6YNP4SHWFJa7QmT9P1PwteiEdkZ4UgbA8Joc7PVACpr3zszQqXVj7XCZkmTs7MemgRenj",
  "key12": "4PTHh11nzxEqs9MLwfyU8osTHo77VWXbaTACPFqs2ssxhJ52d4tg734nQmPYE3aKoegGETgaCqrrBrowJANmb42z",
  "key13": "3FBVfagakEVjsaKE6AnXTCmoHTn2XYLhWpi1MF3q1mzTRvZ9yHhJ3Cw8DssjE6CwbR92W75psBLaWpwKcm2n9SBa",
  "key14": "2QW5iALhrxUM7eVEkmbfnxpD2uKVw9defsZEho5mG584bJD9hBq3hXPuuuf5NGU2yrrkBWdm2QZQxSBhGfs9KwQD",
  "key15": "4L5EheCGuyaYCWfPqm6e3SGTB8Go9ouop1FrdgTe4pEVB8pusbbRgtZ2rwPJKD3HFoQXr6EyykXZaGkswxADWYny",
  "key16": "4f1swveWB4UbZqeoj45GLmJ8cxkCUzQQCj1CcfBHoEAjaUe75aMvpNhCfGBw12pBryUkqLqLNj3SRRLZX75Zz1HH",
  "key17": "5kJ4RcYoDmTHUzjBC6ChG87QvNzFB6S812gK5N3f7HnVuYFJAovvhmaQGCN8oMHUE4uATe4BtZo4SyRGzeJMEVWz",
  "key18": "29S4odVM3Uo1NXnP3U2QngdSEuV2bXuMTYawYBaetSfjDfndqPPksw6nhgVRYFJWF8pSkSnnBWe2SuB5DoDHcPgK",
  "key19": "3E7RZodHqWLd3avnyUiKWpwiHDMN2Qro6zBebNjDHsxSb3t4izQ8k2LWd2BYRNYSfQEzAX2V5ikpAXEznUdRLWU9",
  "key20": "Q1Wk5wCzCjbW2wLfypGWA5NHsaofwo6PQ8PFtukWetXX4JXBfgjxsiDvMRL1VpmhJGJgDJnJyZTe68DRRP62Abm",
  "key21": "5MqksaDYfQbVHFEx4ghuCmUNcNnGxYc9kPR2Y1rvwnSMUwxUjaBAQYH78cp7jTnTNxaskZx1Jsca6MEUs91yYzFT",
  "key22": "4a9ps13Y4DbWZaLPLEk9Cp376aoTWjghyMMZyUc3SH9jWwLeSgZ9DPxPqVoYqLohU29rcyY6hog4hhBx7qNN9nQG",
  "key23": "55puS69zhSjqJ7Pa6NacGUCo13sNCPT2W96hrbvpai2mJK5tsTfKnGu8dLWoGFBVqyfCB7nqaVeZqmhEdNsd46iD",
  "key24": "21g25gaPwVdpjEDw836ioUpef1biZHFVwE7pFJwhDTQyWmSMgrRiDag6cnuvf3YA9cut6m4egQsu5RkrW9h9pekH",
  "key25": "2NcMUdW7fEgBVEi1Y1pJ8fKyXY2oFefizWp9mY5ARrFg3t2QokoSTWgDURKVn768MEkYmG43gVifsaPK7Y7C1JQ3",
  "key26": "3CWJsd2dpdxwAYstRN3s46EeeNRTdJuqfNMYtGcYvek2ZM9TSsQMndTRcUtkgTqqfWmNRsJMTYaunseTQcid5wM",
  "key27": "4UmbDyw2qeugHcwLhY7ErMiriti3AH7Joz3fmRjeZjHF7fY6AdxaSCB7bGdqNDdDXZr9wuaJ6uEzCS8omPNPfYRa",
  "key28": "2LVbvJVCXyRSjWfw9Stmio9WhPNdc4NqjYEYQVugrZJEyUavbw4MXzZKdcHBLiDjULfg9Hsct1LnkfoBd6yvEoCW",
  "key29": "55hAvv6VNKtLestAzpWnhpZYDcsr3AD13HpCiP9tk5w7PuH4N79wz4Gme74Zbxj2yQwLenxrHTUV8UDfVjxHNPzN"
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
