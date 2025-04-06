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
    "5VLtyUH6VADPvv4wpMaPnda9y9trrTqiNcaRr7S97V8PaGgwyZHhEjdi3aB9izdx6LAgXvDw7MCVLt3otNCQm2Yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dSFQgvQNb2sEsTnCbtDb3GGNzdiddttbUXK4NzoQ3FjqT9xiFRLypXgc3yKLS1wu9hM3h1pegCHSSP78J6GjVAi",
  "key1": "5eKLY9yQ9juiKAkCQcCMreeNPraqYK1D4CQRoE5QFwUyP5qrvgcnV2wopAtM78adzjSEiieHbuqTDMCEHEwLfrEz",
  "key2": "fki2y444i8opv2HfLWCwTPLifTurgCNRK2JhjVMj2EC6LeG5HeJuvp5o7y6nwfQ7mpWckgQ144uxbhhsfhbpx8u",
  "key3": "5ovquDyJornFFcoKwwSBxmQyHF2YzV5LFeuwDU4LpH3KfTgJqedhsBYd1dU64JTpebdAVhy1EajYko1vmR7WBXwR",
  "key4": "4mj95ywEoRKtpe5XwHr4u5AeskqMpsFTMPz1K8MzLAFTjtDWbtv4XATNiAqmXSUqdDMPinyawSKBLDnDxhA9AJxF",
  "key5": "4Go1Z3MUpmoojND8p1s8PvQdrxKdmT1RZt3TkSSXjrXVhar1HXEbmWDNfTnspLU6Fin4E5wgXHCmsE4yTgHatLKF",
  "key6": "44KkKfRzJ2S8ZJwN2huZxKU2buv5rYaMqozyY42zaPuszfJwHpZ5CvDVhCwswQNdo7KYU7AnzJg3sW1VfbyQdWYg",
  "key7": "4poatNLEy3fMA4DRUFRCGvCYrBzuuEYCDSeKt13xhjCVvzPxkAoaXKZhi68dYgYTGt91kxdi9zjXAfmccKqd8w2F",
  "key8": "36CprvdwByyUzvX87xGfa7LxBnXi4x2mbTpbhSZohbxagp8TLCg1vdL36BTWXrn6xu5UTagNDiZa1HEbPgtVV2wr",
  "key9": "364Yg6zHPYCsM8aiv3MvMNHhKfQeZBuVqHzpnYRUWG1JmYpkRADDay5qaUXhr6M9K3k41oLkFS8yu96WGNPYsWbK",
  "key10": "5F6e5cEpRQvhTxXqLLxmcXuB6dGHFffFZzXtvdq5tf6MBp42uX3VfezoaqAgXvmKCBcxbA6Jgqv6CTRBuZbSr4gf",
  "key11": "weNRPEq4rCdbc8Swc1BFCqtXxAx7S9M3FSs7Q7S94Gpo2H5bS4GXNub8TcQHgiSRRCcy4T8mZwoYo1SRakTEf2c",
  "key12": "23DpiTG1HWnqkyqt85eBGjRGDMJ8xEp32C7w7FDYdyHnexBPHfhFhmctSLLAV4HoejL7EGZqc6xaFNBKW3mJCgid",
  "key13": "36n9Vhg9stQYdQxF82gRF8FY936ioZNH9jGp8TFeGjdQEXPbUCbeUwFDxCoTPrRL1WQCqek33cCZ5sFu6Ynnr2PQ",
  "key14": "32K9JmVzC3iL2XvoT3BvTsAFdrymHXpo4UV8fGMKEccsbZ6b27XaFzLJtCinMxzzu9k89dpJZqcaPC88EPTh5xB3",
  "key15": "4xGrGvtaoXzU4QHYd4Tisi1uFRzoSRhNN39EmZVcJ5KhTFR1y4qqQU92um6TQuzQChMpDZMM9UewtwLfV19zXb9J",
  "key16": "seZoCxSs1rT4oP6LAZcBGotynn9xfr3N1ibMTPJRTFWvse3MP3PZm3vaaVFwK7zLiyJMRSdJEvHidSSwTo34gdw",
  "key17": "44rJ3bj91obRXVGA8pDPrzKvsvXs6PbFucN5KpBrdVZ8axang1TM1fvQJCRwiLDuQ4MkKi4tYzGapoU6QpCnnxJh",
  "key18": "2AVm9qHhx78iCobefEZNm56BUxB9wGLmX2FimdCsyTzrEBXk1pf5PQi1uKh2MhQ4XUkJd8ZfUxA9dxFTDR8C6Rno",
  "key19": "DHWRB16pEhZuTCoEWuquriXW4w5v9nr9wRR12jVNibKsCjrPQVvFtZA5ZUqMeWKQkA6eSVP1TPFu9C9stRidTH3",
  "key20": "5keX2uTSTpgXy2NXQMgq5cydiYAnvqcE92BUABxcoywRghQYbPFBmebaZis2H93yi6hBRTAH6GqtSJDd4TNJQ6BF",
  "key21": "2ASD6xV6bewU2Dh7PpUWMHrXuMxifqHs9puyPjRhyMekeL3r8SMi6R8CrPHRqXiC1P3iYjoori1MPCch2d8icf3V",
  "key22": "2AGKrofmEzqdRuKurRSjrQ7howGEnNEX2FwumHXqxfj8JAwZXp8pBbgeUBDCVaxUFXVTDzMJ7ufLCv4yAAu75xKz",
  "key23": "vo1C5S38GkrBpE7m6qhWsnbDxmHwVgivv8Fro469GeW2Z3QPkGTWdhCzsT1pUQ6wAx1vX3qBCDbNw9Et7DA6MqG",
  "key24": "3C4AuRcUaRy2T9yQW4TfodnTRMrmywbdvWYbLcWmUbmrUJeWKfURrXXXmDeRXeVuXb347MMNmGFA15pKax8tEnUa",
  "key25": "4hEb1EPXZ7KbpeonPjw2RSHQ2RXerZbpJDdmN27uNhkB1LUzU1bC2KdSTc6JM42c66PtQcUi2h4gu7QSGQCX59LS",
  "key26": "52nFHWX75TLYNzuedJYqZjo7wM5gujUphPAYktEGUhD6txGvkv2mNEpkD6T1fLvL5um8gCWNAYNnexayPKu3BoEL",
  "key27": "4v2weY5K2SJF2VWVWRJxsCZQJMrLtpVxizfHWkVxHskYiReKYi7JJ5V5NpLjrQmUGRYR2xTSsyDfn1eyKJTxd1zT",
  "key28": "3Gp5BSRcZd5iEzKUD21pS25CbXVusfa7N7spEDYTGLGbFVBsqfw3PBSrgu2Rf5Cu7uvMoaupKKRnXXLww2BzBmAp",
  "key29": "2jMvsz8tUVVKiFNp4La9bqzckJkjLEYDx3cPmpGB7jb9KbXf2bXyXB1odr1yJTugBPukfxp8APFeXDqzX4eyS1ys",
  "key30": "Q3DsCtKiMLW4nWSNavoYm3RWxnR9AxrK9kjfW6a9KkjyvZhdsDy4chzYS6ypaajNFdr27CkbkRY5d7CEPspjMXr",
  "key31": "3DfHnoDLzwBWELKrgYd8NcFBwZPGLxX1fAifxHQ5i9dmVeRHKqib7Xx5uEs2nkovsA7JQRsQcCpGkCqicCSmByvz",
  "key32": "CDRdo55gTDZjvzRvQdHehS3wKzwybcHNC4U7YP13hHyvhFs48NYcCiocUWR5rwamjnrpEUZf1xJdqi86EHpxSC7",
  "key33": "ipn7PpxjcHmDdVwqrGdmPXJaNh4REuhUrHt6hieU22msa5w5LvkQg29UEWqA7gmSvUduE6KLE78YsFxaBuxYQET",
  "key34": "4F93aRdd1nwLAAx7L4vrBPutpWhcxyaN8N4oj3GJLBGEJqLyPo2qE7aKJEQFc5U71vhsEMZg8MD34PipML1QNFqc",
  "key35": "4PMKPWQZ9jhKYPvq6qn1Ux9vXF9seiR6h9NjAjt8xPLs9RYdpRgv1BYA6AJ9N5kzhqtmDSaYRTVhfaCDuxY8VA5z",
  "key36": "4WGxAH7FvbGy5F5soTzPTCVNctxxqfh5p4S5tCV1DN46aWzq3AgSkjSzT36PCh3n9rZoejHZdcPKLE8ie5GqEAJN",
  "key37": "5MbJ5rZgFGLpWAhg4H9SVnqj2Y1kiPNbrriDZapkyADdGvHP3yZZ7i66TViAJCsRRkD9gXYfSXS5n7Gzi2TTw2c5",
  "key38": "2HjjZiZEoi7g4sQjkaL8RYXeboEWJorDUh2YbpPPrsckHWdLrmLjxHdbFqJZJ5cPkZzJcvEzzkb8fBP2G4a7aRQM",
  "key39": "5U3NqXhFBLhSUGWxvnZAuFxR1LTm7MGkCL1KejmMbn7wdTx5Froq5LN9EQkfpKJ9dtrvBrohXk3rTA1dWQ7EUJnp",
  "key40": "3tmBDjXi5KJJExAWuMzKmUrfGJVVrnn2pHLJiDjG3PCVfwETqvLVEjYMyiaoudhhECKjKtWmvQVG1jRRz3vmvDB",
  "key41": "5H3rMWqRbBr48RxsvpUeUsLNifvr3zTVsFYV7XocoD6KQfwnRcEaBNbzSxidzNQ6e5sjxx1ot5pCWr1AjtMYyL9e",
  "key42": "QoUVAGHfjz7C4FFHZAqzc7P6h7k1cafTrBM9kmyQ2m4o919vS97RiS8qcs7wHx3xBKbpL3RZGHvcZo43n9MfMLq",
  "key43": "2FXzGCqDrhFPApbX52VjGVaJsLcFh4BXpwTAzL6kGyozJxFKVTpAB8yZ3bbJTnt4Ei75YnRv8HujZkmXTnpvGa5m",
  "key44": "53aHdDmoosgtuQLAXd975ExY326q2ZFx611YzUWhT48UeLtERmcno2b6Lr4g4d4QRo1XMuQbgpLLDW3Y6EvdKUcZ",
  "key45": "KMyKX37zEvqyjXd2CWx49kdKyqmqqEAEs6SFS6E6rSEmoAtFMLLak8tvMCJnt1Lv3ee9nb3zvpWjSdnFqoxsUbN",
  "key46": "Cnqn8nPVbTN6DqcGnWNaKAHQBg3d5WWCPFPKXgn2ayMwRdMWX4q8wKVxnu5qvVxK7eGbEDudL5k2cjERm6gMFr3",
  "key47": "41DbA4jtdYWJgNZ3Fyg1F3ypgFBjW2sYGGyjD3L8Gw8Fe1VdHvyYEVUy9SeapqTf8ny8DXKDjzDtFPhUPaFbi9Gu"
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
