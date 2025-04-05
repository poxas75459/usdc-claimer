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
    "5K5nyWkYRjAMqEdNEwwkQfS4BiqGPBRcX6sPh2ZBtJ4vDfv1ogZtwyJwBg269EtyaYAi5cbN2i6AJnMgxvqVfdiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M2xF2HoEWsLu5Q2hwWr3hykm3EQx4ZaZwNtctsf1oN698nT7PnowNmtwydcQeJ29MdFC8SXo6bFWyer4mdo9dno",
  "key1": "5LQMVfaAQbgQ7SeKFB3GRGRQ1Ln4Jhj1aMVmjVuyuNjJM31bpZqb9NpbYT234fBtgMqbSvS73ZfeAKrBxrq7JXQq",
  "key2": "2QiVtT2k73o6XLT9k5dsUqSKqNsy4XnybgEF8YV9ZLBdNhT4hArpyB5iBHugevWRG8U4KoSC9uoqobAsARk9Wbj",
  "key3": "58a3cEhpxdd1RnHLa23xvzAf9PLWauPSei7j1ynpdPouShS5xmjgCB8eE4XNB9Yhs9H8ND2n7JbFVDC8GX3yKx6A",
  "key4": "2pKaEBZnpZPTKYkh9R84QS5mtBHVf43XtoTHB6sY6fCSYwMmXLqJmnVcScnBPMLi2jXMKTLeQsWV5euJBjoXi9cK",
  "key5": "4jbpTWX7kyGHw7uGMBzsdFtUpVCRxYiaFUVFXsJWZ43YYz87GgYqmn5n97J33przHDZgMWnefeRzTz4Me8szb3Zp",
  "key6": "5XnKbXF3UAbbh4V7JNAAfqF8HwvwgchAm9cSjQT95GNPmAVphFiGxzDwVmRYcxEpF7Sk3jY18GXMomqEENqxq1uR",
  "key7": "5JSTDSwDPoLpLqUFdjWpDpojUiTTtewbNKTndTa7g27BNYxK5Xzjx2gcCwkvV4CKeeLhbV1cwG1UmsJGRBYiRDAv",
  "key8": "4ut7bCmPFb16RfmEuT29bmkAYuos1hQCaQ1bNyoenFmjq2ZAdiLsouenUw7hinbS1hszXPaHE55oc9xbR6cu33fX",
  "key9": "5VVZkjyKmuZkrcaf4XuZW4gUKBRaUUDM6wGjTgqQ4ZrhQMmZYei2HXa5uMX7kyA1oaL1oekBiEhLnrGAvk5mXn5e",
  "key10": "5RteWjbTwTbFSHx3FgztZdRLwpXK6pAueVZKu4kRatSuaji3VN8wBoygMc3WyPFbJtiUoV1g9vmUoucB6aLSz4kg",
  "key11": "3X82fp1JpdLLFRiLAEwnzC2p2BNUMxB1qYv1Ud9Lj8GFaDg6yhCTYi8iscG55z1aYAKu7MyMLM6HG3gWgWiiFR3a",
  "key12": "5HsPZTwzLA7GEmdeihVJym6utzjVp8KsygSadFh8pEKFtD6GaPxo5eLKkP5yEj9UJt2LSvN9g4QN1awhoCzY2mjp",
  "key13": "PFS6dAycJB2rLg6qhhVAjmnXKje7mh2c1YJzxLr6n9BSTBAJmMHhU1UiQ2UTbuox7wjPpW8zHKb9cqLcqaErHBH",
  "key14": "3p6B7NyrSZbFGb69S2kVVa2t4Rnu8eXhBD3xedmuSmJz2FH5p34ANPLqWEYtY1M8ML5YgvWv2HFQdXedysseUF7u",
  "key15": "AFdi32jYP4hhmMmjwB8kGTFdFyPho1tMiCBjyrgYimvjTYgfYeFV7S17k7b9ywSWRZympWwEkZK5tMxNY94PG74",
  "key16": "z1Xk4ZT2FZGf6HbktrM5aVjZnGYc9SscXdzPzvs2tZej42jhh4pxipsNPEjzzfyYf4g6phBqSTiP6WKNDEpU5mB",
  "key17": "1xgTskBeyM4XYChZTDf3yN1mE6cEaS6PLYCWNrWAbRAb94JPnxP8itNVnkAtFVQDjbwoKBR3HtudArZivTyZ3r8",
  "key18": "4Nh7NRS3zeU16Zx1sT7FXWtNBfCZKbHuCGedgvDogP1inYiBtjm8hRZfVqbxt1ZjQvsBCVZ8dG4yA8cjdsQysPAH",
  "key19": "Axp8go74WyrT2YdyE63aXr4nJtiPhnDXvbr8ctVqg5AMrcWenQBgyTfFknp6QkAmGVz1tLSdsknJw8H6LQiEZe3",
  "key20": "3Lf7QY6gDFufF9suAkaeQTNvvpjSgWZJUefTfK1aBzLM31CamJQPPPBkGxW32Ar7B5VZ6XChrXtw9XALQh2XDUVG",
  "key21": "55PD7DiD9Swg9puLwEUQ1HHCJK816xjqeFZLuvUzkhXov3Y22BXoCKg1CebgLQAEVYNKN2Wcwd4dMhFH2Y6min9W",
  "key22": "55TpN2JSzppv8nBVZ2qQcdLZ5bLdiUSxcLcQhmxZkUXq36aaY8ue3T6qoQrpAiHqjN4UPMWPRNLuUEz21UVsn1u2",
  "key23": "4vRk49saQYXBH82DrMWkueH5CpEwfsSU4KxVHi2qKsYTZv3d1p4dDQRvUoPxUMwxYQpzfVeT8veeNUus69ZHoRkK",
  "key24": "22TBdKTpvCjprNCzJ116uRPHifnpNdmbL7zbybaf1uNqfA3MmEkssMpKrc5VL2JZpR9xmoJc7RcxXyyMRKaxqaxv",
  "key25": "ChkycFhs4QSU7oGMjm1XCCwTdcBPQuH7Q375j3zfe8UhLFr29zxoG2Yf5Uc4F1aS9MCpHtFreSvuRBRzKngWDq4",
  "key26": "qHcdfNYwH88jtKZQoVNAXCLEgN5krs5feer2A4vn6Ct9f36nuhQqWBxGbWsXUu3K7zsQpNQrCJfKsR96RWSC5Az",
  "key27": "4ne7eSZqfefKGbbuyNJyMNNr4LSh24KDsAg1jfZWjBUNRMwEEWw5Mqzn54N2nffy27uRJ5KjLgSLsCPbccpABh1",
  "key28": "eNt2DPd9e4Bt4DSKwdQt48Y7Zv57FXHV2r6CQgVPcnqbHXRwcS25Z3mPQY2AECYd7Uts8K5x8hNbYGBsp3CwV7s",
  "key29": "jsVbR8wK29wpg7b592GBpufCQhT5NL4ap2iWNWXmY4NM1WahbWebL2w7HeQKKJAHRpqKVLHnTD7N21TBNqVkbgL"
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
