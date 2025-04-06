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
    "5hEh3zjEXFguJJhZ9uoLpJT5c3vx3wHyxBLKMd3SkzZ2sqmqoEAmmRsgU6S6rmHc5VopAroqNi2W3TQCNqVMm8cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zpA4Aa13d8fmJTH4jMGyEuuuu61y2jgd1U1n7PBmbycrDqRS4Ssv5UFvtnWKvmgakTEjYLD6MJDwbfNPv8ffD8z",
  "key1": "3bBQ5gywXFh96zqK4S6qNidxwasV3f7SK7sc1bF2nSNmfGH1bsnLqmBjWrpoBUbXMuTv71gRkCfYTPxBVY7vGUEy",
  "key2": "3TUa6WF9vBMKF659x65rVesorggooVfR8nV522PNnqTgSPot37PA6Zo85ARvor3MYtnoyTrnsixnPmU2YBGrdHP6",
  "key3": "4GKXhsLmCdoGBwZsq8fRRH72eCnbyfYWELJWTo4QTmjjPnMt37v7ehNwnYddJ8wiHstsQy7MgDDeYzU6hatBFS2a",
  "key4": "3vXQEvAbpgTwqwWcNtNeRCyt6XBenjVHjMY3DsNnQgTcpHN8GiyspQ7fQiEpKWGywhLvouRRFFpjmWiCgC7pfFQq",
  "key5": "4r4GjRB4m4TMuYht6C9G2axoNCZcfj7YCVx97BS8DQRza85v2YhvtQ9hHrHa15itwX3Y7G6LwPCUY9ZhGCPoEcVK",
  "key6": "DAxbf2TWTyD4n6JekfhvewMvYLSGLebMsEcHc4LKH2aCKZYYG6cfHVFuNE57vcRiJKQy63z4kznQ7rSk2deZxPH",
  "key7": "4KPn81evby9n1KDQ3bXLb2NUMAajqHUytiKYm6shcvzS5KNGwfFhQX8Go1ueJx1K4wN9Zh5o4W3KF6Q61x79vPoh",
  "key8": "2F8jw2dW3Mai7rZjkEq6LutAdDS19QF6E9b645zDinxR7m5sz8mXhgtVdexpWS4fcJA6aAPQPu5G3nQXAEEXW5ex",
  "key9": "51bV4pusJE9rqYBduo9Eo9ZWTyYJrnjnhJcUPiRDWsydBqPNjFMJgN443jmzjLNW8Zj91vZz9w2cLAmwF5zYCh6E",
  "key10": "3Cx8SBVebHkfUV1JAnRAiPTVEg4LWTREhgsLrrRsKCNkkPq2tDH3gRK4U5uUTG769T2HGYVN689nhQ9s9EMrustb",
  "key11": "VSrK1uuMshAgRPfytTc12KHsbtAb69aeaYsP9t4ZjofXVPFKGenAEeFXVMXem1PchjQFXMkidEgqCn6E4ar6hWr",
  "key12": "4Hfs2YFNofyU9PhyzKQ5GPR2pP254LvhPThowKitz3zKkfnMGwXbpQWMQn9epAGQ6KmhMcH5kHKctbizW24nMH6w",
  "key13": "4AcLr9EJSTQ2HGaKfMPvLrYuFTB25TGxMT7qtFnFXbfDjC3xHVFC4wv9eyiMwinBt6WC5Bo1nVPUPJNTVXRm1egs",
  "key14": "2k8iwceqY6vDNWqzyuLnSwnY3k6XVoXMZjH9MBk9PmZnVnvNHhQC6o6FcXe7ifpdbhkj7AQ1V2iTmebqQJoFXYpo",
  "key15": "4hgsbjTYQKakRsqmwenAQvfTMm8X2Pccj6FYz2Sd5EYo9XZv4PzkTKLhgBZVKouqmhhHVRUP3RvhERWYBGumNhZ4",
  "key16": "4jdohYifi32AS6yCELrPRPyJ46B2j6XxM1TryjPrZpgUSFVkyRyCiQFAyJ5JpgNRrj6sTVz3GZtuUGndyxMsPfTx",
  "key17": "Jut9sdpox8KD9wF1J4t8XPjQRnVfwmYWgTZpNDGtkz1vBxwDU2psVz213bBpybYiWGhHJ9MTf7je3FR1REEZ61R",
  "key18": "56uJJGnejx9sZXgKFEcpchKvjF4tUihrUwqqaBc4Wh9AtU9e6ZyxsusYy7YspruGi7zKpzSmFpDenYyfmxcY3kGf",
  "key19": "36wr4weFESdpqMmaJE4Ybefa7rV4feAh8VKXjbRYfEs8TKKTSeNQhqJUbMGbzNtjRFeQCto1n7hs8Xg9WCYdbRJ6",
  "key20": "45akHgu1LVNsURdkAtmGxZBkCBTAVUPTzA9Cs9UtXTw3ZMJPrTgN8p9BP4bJCSwzaQ7yYCB1B7JfJJjGgEVgwcdS",
  "key21": "3FaSkdntQNjjdfxRpSfxJ77GyyouWkPWEHWjNVWC1be29TGt8DPi25dtuWvnpRsXzUCv7djdPgSRyxDxSGgTNVBn",
  "key22": "tufjEtk3cL8bdxqmwV1syMejwKcbnpniXj9vCpwQeuYuGE9Z17HXHyQatn5KxmjaVWPZQ2rjb9Cu2LcgGmnmaw1",
  "key23": "65tm9kBMHCtKzufJ2PqiQGZTMKS7HuG3Ma9sLDETJieTDmyfq35E9K6cCmEwmYXvS6TuRYRZPjLPXt2DRv1J5G1M",
  "key24": "3oPordboyZsH2dmpTmGjPDMYtxB6zftWHEJmaCidGf33gBnbg8LdECjGjA5EFEPMsdzwkRKptpoGk9yp3Bi5yyUL",
  "key25": "2J9d961JipiAs1p7nnCSw3dpPGvmAPgCgS4qtiLGdWb1N6oxRkRt5aNFr5iMtTP4rWY6uDHnbC9vJvS8ek9VUm8d",
  "key26": "76CjgKh6xY8oUWxW82gb1f3JNNPMijU2vwsVCLBELYvPfzdZUg99ZMLPn7AsBL4739mC1byJE4zsmMMY2E1qXwD",
  "key27": "tkq5Dq1FayAQNJYF5kjN5m3fES6bGNBAzmpN3BPLutMNjLe4xkHGs7gs7cCzsXRyUJ75EXi3B1663qdpmJaZjZP",
  "key28": "5BZu6oTA7bG326F4TzSTiNRyj5gLj4WgEeLFGP1uvKmdkoRhkzZkeRB1Bv286kAuamNLeYCrVDup7ShJQKvwdHAA",
  "key29": "hyUk6R2xEk21coZCwYYofz7S6fYRvptLE4brTizUfmyho7DG4ERyWWUx5redywwoTew3n5evTVXApYtifBfNaFG",
  "key30": "2Q1wrU5rwJF1MWAejLRjidmGYAZssSiLyPpGDBqrLwFrmNM3hPNmQCD3K9EUD4DiwU1UKPhABwDaJyPCq6Tkx2U3",
  "key31": "3KfhsWehLdStR4ztR92QLHP5SuiQTNfrjwRzQSCB9f11HX5k7nqVeDDBhkEZyb1PCVf2A6EeZ5anLVwBuuwfHgJt",
  "key32": "4iFfK5ZXh4tBTSq2jDswQiLqLkyBo5FRbGJKdJoqbpgWNyHYckTMNnzmmaCUe1dzVWNBH2DzgA81sFUVzYvNmqxJ"
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
