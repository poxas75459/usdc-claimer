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
    "2Hz6Hp5KX8tMwZhHeoycoQC9F2uMa4dyTBbfJeWFJh6UzFpe2zs2xGpQMVGhJ36TS3fuuP8WPr8uKghaHoYx5Tyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zibV741ydry1xmdSfLYyPyz82CRoAREjLc6XK6ZJHtJWdE5BW6JLXsJL4xnML8uryp2r6BnL7hsJHuPjwamzRSR",
  "key1": "4Zvn85ifQmSe7H13Koz782W97qENCFChCiDbaKYWqvyo8JvyTsZHjVbBqKVuxhSGDxuSF4FRiveJZJB5s1Jb4qne",
  "key2": "3JZPmm2XHc9jcwChwqgDx4wgU5b8TLedz52E23P1YWKbdVEWS6cyJDTfDkAGdg4fodNkr2F4aRZ8FyMk7NEm2ao1",
  "key3": "3wvDc5SEC7Nb7whAWrfAydcqtFNNYwFUVTMC2d5CDFmNYNiZfFzpfuTny8rbViyvNyLvYPb1uGAgY8js12UUS91p",
  "key4": "4sfMTbGDHEgj7AE3R5aEGtBXwifRzcoSimVze8omtnib4vmHyU932pHgHXcLbXdgntSJQckMMeubqhoUuK7ygpxe",
  "key5": "5fFwiKyapRxdDqQeDppwCBM6gNceGe7uBmMK887XGM5a8zJHhuowdKXVEpLv1uoPoQQfN7JT5SEsY7MyYxEwPJJn",
  "key6": "3hK9Dxy8DCihaizF476j8tDJGFwRZeNDK4yaiD3kPnRnQLc3tXX1XLQnub26bcgxaeco1z8g1nLLt3Ziop3DN5bS",
  "key7": "3nBtbd1zQDrcLKpmk1xdUb2VWUu3G3PHg7FVQ84g6ss1PXcE6bcppxThc1RHetoVJmHJaJtmDMgGyn78AEm7b5bX",
  "key8": "48HdHSafFqyk95BFvNwnvp3BvLgpRPzd7UCEar3Yv5EpiUAXympQAxdFLPrYx78tM4bGVmd62XzVGizyKLBQQSuK",
  "key9": "5BoxvPyAiFBaEBTW9nzGL4rJ1jJ5eNd3Ld9kFgyAqzB1dzvdn15zjLKosZwJVueWsB7b3bSpAwBkwv4S3ikrp924",
  "key10": "2HDTRHPZ2RGogwTEDqGVrjTf8vqBmps5ZZ5qUhmz4Fx71NEdCJjFYjRkY133oqSw9QRgMv9bRJBvuPqDoSmdhHFC",
  "key11": "44eEhpLTmqmh4v7WQxigCQB4KnU8SR2YhH4bE5NE6Mye6y7f9UMYtnPCmcq1wkAyxGitc5JQ5Gb8w3N8b6sKekKy",
  "key12": "8Y4SEo83Tf9eKznQCggohzMTHx2PBHNtj7uVVJsUZUsxSpfmL1NuUJ8CiyL2rzTX7qQRXRPi5b57cT1Frxw1mER",
  "key13": "JNAtznNmGPm7UjKx1CqSbpoFEqBgefn9rtkC8oGbo1NfpYA1SXrXBNDsLsQEY41Sn13P4UKFS9yFxaGoNfdoexA",
  "key14": "m2pgyckUYcwQDn5kmQXgjofRY87e5BTjF7o9rHUciMHR6wurcdT49aLmvpf9S3FAUfwtNh2BB22a2U5awcMs4EB",
  "key15": "3hG4634FiQkkteGGXHMZWRf1CjtAFkrCb9u2T8sSdkq2H9jL7x1KXueJ7sTWkXbg3tkZv9EkXHYfxB2DL1w2UyNQ",
  "key16": "45gfmk9nBdZe8EGTXtNhBfzZaiomvYkiwhKpjdAjuBhCqt8QXJjCes9RoUspiMqvsvZ5Ep9zkvNKxff5RaDjX6MM",
  "key17": "2fqaY4op5itDpx6kEiC2BhpNroFD6VtsFF8PoduUVtJbQyJRr6BfwYh3zPEJow6Le8NMKw4XLP5yuCVEQzUrDjoe",
  "key18": "4VpLRA5qHVXuuzr7UsBHxfPfFRYNDJtYnce75AhaUfDTBGr8vb9DuMopHLJuYopnrw6SZvv3Sjjn3gCyjdhqpXPt",
  "key19": "2NW3k2ht2wLoEvmrqwHJ5RPuFt2izKT9Ervgxjr44WnqLq7BcsrzcZUeP4GF5E7uxxbfqwWtVSE1bD1m9zrLMEBo",
  "key20": "5D7B7JSE3vXFoU7HzD8Mh11GVHBY25RU5uXBDzVERbMAiqJaeewMxD7QUg6dj6QRUx1r1kM3qMmQVnCUtYG75AuH",
  "key21": "5V5DyNTosPBWt9fk7hX1hzEcZZfm7LBemj2eMBGzu3e8K4rSxZMUbuTwrvQaZn35YJAx7x1kzSBVjC2GNuNDtCLh",
  "key22": "3GJ9FdwD9BUS88szvb7r2DtYHWMMb9aHpWrgtoiNnxdjuNYN29EB4TWgWkH7MYiFq9EsR3DGwBFEqNx5eA3RLe8M",
  "key23": "4FT3bP6ia6HVCrC68Z9pyWdeCLx59TbCzRnquwQu8k7467RsMCLZzYe889jtmWBMWuuk1YZq8NYcmFE62bfhkyfg",
  "key24": "kAj4jT8wLdJeLkMu3e9QwKGJAkUPmJJqmmU1pja29k6j8948BjK4oN8JENHXHzMY6QGPjby7oKhu7zw6dnwNWC8",
  "key25": "3RRCqdp1tReAsY73H9BJXhisZFfmPoKXdLAYNNfLy6ucWoqHzPMDZ8faFXc93uaQqYSYLufd59pwCHue2fnC9X8D"
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
