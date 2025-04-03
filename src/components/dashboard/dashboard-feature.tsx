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
    "5pJv4Gp7pGVRG7VEFCK86zb7HvJW1hpEqkRk1WK9owWcAnm5gHDxALnKmjWmShv9PkP6A2YANs5W2MuUwxshVuuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZbLA7NgPaFxqzJLr8PzDbcdcgtpKPVc56csZAZC9X776FiGyA1BeawmsdKHA998hTCAdkFR94ggH92kfNe2DmM",
  "key1": "4gi4MjtNTKuxsWPmTjP8ntqF2rYfLFAtAa6fuCfgktbButicNkgddDFqgE5cfZfF3Xntdx5vxjiDQ8Q37LWPNCr2",
  "key2": "3cx2Kxnd8koRB4fkCqLSs64RgWiTymNhwZQKoTemZmPsbRVmDQZ4L6M7i5CRi9tyaiAgnh7wM1RRWytVESWFmBVQ",
  "key3": "37CgzzCohdkJzeD2QBdQ5gkK3Dp9Euc7SKur6fGmPwjcuXBqujHyJmZsuk2iacGdFTTFsb5xb4ZGN6Vaxuuy1D8H",
  "key4": "moXLzFYUGEtp2TDMxWmL4ByXi6ciQ64MABoWRE8kRq4QtZkXc4LmTzaSdaG6XsU4YFtgBoEZEufyURPLrDppk81",
  "key5": "5FEHLrg7uHc8rnpBr2QAWsZk77Q7bQitQcs5DGEBdk6B1F1todCe19sMzHn9KXVDikUEG4gXdTZw4vmWSJxUkNBs",
  "key6": "4JRxjzC7Wfxuk9PMaFEbFLGTzLtu29WH1xALasY3o1ZMSQJgXjwPBpnFCxeqhbFjEztAk9z3CUXhiHHWcPdyJQ37",
  "key7": "5QqNttHJGhJLdBSEnWB59ZB2c8VwnyHpCMZoYu43iWws7JkHFtouteNP5TcMtRZA1dWvdm3RE3rxe4i12jnTn5UY",
  "key8": "nSKJmfBw57nHqU81TiWdt9WUSZVA4TU2dvuhMebSRjsnFSXYuCtpzcJr74eWJcce8GMdvbWepkjhKNpdZAakfjh",
  "key9": "4iNUTAKrCBpiFAA9Q8rHKiZs4Zg2zCsLCyLZVDSUPCjU5EWMK3HoW9jHTRJfPhQTwXremf1NqKL7PzAjm4zUhVw4",
  "key10": "5utAh1WVFtN4d86ACs7fV3MjnySQdKbxUte6VbQ8GZuHJdaVHCooZgjYZnSGJzZ9V2bATo9wZmxJcfNpCZ4Tb1xc",
  "key11": "5VRYoFcAh7zrBGxPwqEm8gWAE1k4oUTdrsiZaxicGoDGGMeka9DDgMEKQvtCAvWqrhYAracw1uipLsDiHh3ZLe9B",
  "key12": "49iQitBPKFoYTrkKb94BWy1UjTZgagnAhb45v1f6szg4ivVGLB9YDRS1WbqKZ7HcDLukQ8hHRMRqUT5N5v5YVakJ",
  "key13": "33UZ7shADigV8XQAmFVxQBtkr4nkcthjsE3rVYDHeRQtsnB2B7YCnEQLdN9FbYoceoJRfsAWgs6qcRKbj9cUdbHa",
  "key14": "221VXxqyPSLHR7uWvWjnwp2GsTof1j3UKwGZAA8T2L23pjisCjsiNiMvR3mqq8WqH6PE5Jg8o1K6fQhfDzrSSopj",
  "key15": "3A6M9LytLCUHzUerxyDhkqaHTYD9Vn8SP2SEmxi6fCrCQyW79A5rxRNcgjU93iGLTNR6JeHLp67Y9n933hPvkZ3H",
  "key16": "5kG9nn213RfU7GTfmiAxsDW1B5F6vvqcJy4Qs3d79L57K9ttrK3BArHECQUzz649cr2B2PEC4FxSBzhNuSh7r8wC",
  "key17": "39GdFWaUWt5GzuDeZZF2NtT6dhyVWyFa9RLikde84LWWuCFZ3tjGcprWKYAT8opii46JB47qtXgJ57KkmVYrSXrn",
  "key18": "3wNmRUJGnWk9UiCRXiUDGNMKHCduVzmryvcjV53c8JzJT15SP9e6pE1Xf2wVT1AYuWUdNUhwTqXULREdt8syYA4P",
  "key19": "QnTsxUGcDzEKnz2g2kSA4ZER2DWgQJmN9tytUiwiSBLh9tWdS1eCD4HuPoffRgmBkFHaH1oxPXjN5NpUGXfJQ2L",
  "key20": "32ZG3gdjrh9PUbpiqTKTjQTzh5n1Vev8arcMgAEte35LgEm3dP21xMGWYpfLzJp39Fdca8L15iSjfiUFX6mzMFyW",
  "key21": "425yw2xqQsxdXVVQ5rbqufep1oGgdcgX34maW5ZmToipXpaWqjKk4X5f1umBjhCWdVLWvvVe8DKk73ieonY1UZV1",
  "key22": "m1mqKimWRohMbqRCKszf4xoyBMyLz1g5cAmoKGhz8s6z9ZvjHnXRp9uZSS31pBSo2Z8wXKagC6h9YUJpnAfztF6",
  "key23": "58VET2JeVVjdXPBYG13HGU49qgNLP53ggkUPtQhQTt4QBRReHQvZct1cLkXMawPBDu33Vr2nLppt4cL3GNvk3Pan",
  "key24": "2ry1jBNMiJUdcbNo1fuvvYFhyaruTGDFuwAChQcRWYEunsDphuC8TN6uJdXyvidt1vistEfJEkSEPMFsna9uk5v5",
  "key25": "4xy3L8LLQnZDKNpx82nQr7uWgNtxJV7JK3j9NsQdapULkb3nD7jFS8H7ZaMxwiQtU8c8eKNEXeHBJCxgS7JoGbgT",
  "key26": "SMEXaWYX5dEH9fc5hEjyqkvRgvDgPZnrCS8TkCpVvm1EAryQMVG9fNAJbcXY2q3FmemAUXs1LA7A3u1YQrgKs2h"
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
