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
    "4HbVNoVjMihdd82yDc4sGxmDVjyybReETNVSpsCBddYPP8dP3TUEDZDq6A5scBuE7qjwzTFg8LSMumHZpQo5cbSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kwnHQ9v2uj2A3DHeY3jbWabKNRzr8UQ4eihGyY4JCFmVtP9Wmt68Z5KEqaYVDFn7CB34oMTvwbHxg9RV39sG1Sd",
  "key1": "4uxmQqixYbdgR6Z1a4CuvrNxyPnGMqVfgManfhh8pmiryGXpFkW99mCa9Xoy9xWkZvz8w1ySNXMQjZ8YsJps3KBy",
  "key2": "6EhHKBVpdgL8GAv9ymWsRw1FwK1sJAJUtbx58ieCt22YqaKtVQmHBYkhkjjH6gPEqYcxGHiBUHhQQqRfoifY7mt",
  "key3": "3bbEX5WbA5kEpQR4wQ9prxTJjdNzvYpuM2A6EbBkgLYrYDzko5rg9mTbu8icyqqLpEBNNsHXoaKv5qA6dUy9X7E3",
  "key4": "4A9W1bJfE31ehbXzudBq7phfM4w2SQ9WMpdgtk6KyKsVa72KNKe5dh95FBYdRRjv8MrA91rSbCvKQD3mbfbhv7A1",
  "key5": "5k7QPajgSU5nD9LxkiUQ9vLfoXEf3M5wwraRP54ABEeuARJD1kQa3BQ8x7Vf6k4CityfKnwCGRsgKWBiiPQWarZd",
  "key6": "MMiLLUTL5eyZ5spHVxAbiFJKqqWA1coiN1zNBMk2BzbGeERY4ePK5MjuBZRcswsxT2oochbF5e8QnJBAQas1hX2",
  "key7": "3hyFqeAqp3fn751uAC9bCRwYjVhtDaMXasAXNPc9o8qhsrTb7yK1GTr3QDCYSY9zbuPLYx4Y6suTZzQncokUxoaE",
  "key8": "4TJmbXut5k6gTgoyPhMyva2vzZyAEefGrFCjwuABn4Hcyqbt9miNFd17mVWm61AL83QmQ2CuKcFSDiFYDRjcEAUX",
  "key9": "4ahrRpdsQJj3g85ir6HpYsUde8xtQpVg4VTeDYvZfLJ3v2aVBhoQodm6GsdNixHUjQLS1BYbTLiG2DRbMLhzUTxX",
  "key10": "7CPhTQkbwmbng6JDY95KMCtwnyw4U3T1ynPtjTzjAJrbCkBLHsRWJnUjM8vUsAXpKYyXttsTWBsALhkcNZjdDnH",
  "key11": "4WZg4X8YLmWntaEnSVp6nueFjGEKZkFx3SnQtB4BZVFM4iWjPCFHQEvp8GdcpY43bW1BPV2tN2MKEYydC1eYG2zv",
  "key12": "5HDGXhtqer1EQxzL12Vex6P2rrJVj9ZTNVJUGi7uoBwAitTzweduriER3j32zq4tQ7kropyJNjxaHYAgHFMPTq8q",
  "key13": "HNPwQ2oCDgKWmybWYdfPyjqS6SNdhGyQ743PvU8Si1eNCGtDyp3bKJkJFJyDZyGkRZp7XFE8BwGzGb1U2BrRbrp",
  "key14": "5tKmKrXCFjdRiABahHsZXi58eAZyFZpbgd41qRc1Qy7nGzxhoznmGjKF3NayZ3aQvyaHDAcseHbQ13RMZbRpYys5",
  "key15": "3Gs8x87JZ1maD1UKMMoDguDSLKsfizgRx5dKGhXexPK6c7r9T75ktEk29hDfhGyVd3xKq8J3emH7sTnJN1TT2Xaz",
  "key16": "58W6APF61a5TmVuX8sfmFwY5oQT8Tga93qRXQxw5cTeQdb7qyW5UGkxaDLE3uaogQLnJJFwZdYwqvgaVa6bz52nG",
  "key17": "58LNHW1PWNUMJ3wE48pSJG8ZCP1TLSVxXviSTTJZURXQ2pQnaHBzFTk51HTC1ifx83PQKnAkeVA2Ajd1yZSQZzud",
  "key18": "2Vi9HGTBkTvDVf8DK1BTdWGQjgdabAGHtktrCxGnU3Yyo7yTVdTBme7k7eKygo6qVUDdWNG8pDFoRBmRuXkDGcbQ",
  "key19": "2v66LHuddijWr17p3am3p7sT2evpxWvMuXg28DKBuSNosA5cjcSfQN2P4suacCHABqQUsawAGk4v99k9m9b8pBqd",
  "key20": "3cVsdhSKjc3yszjPvue8UG25Df91RGAnsfSwmka2a3VeSDqYS1c3axPYFTQvbSAasWPpAfEHUqG3Nw9HeGRx2ZMg",
  "key21": "5g4CWmFbHnShTuts6k2tpFPnz4tL2k1os8aeT4Dc12TfWRub49tWAEcUUFb5Jca3VaCjz3CcBtLAWUsvCMgbdsoc",
  "key22": "4P7urZZioAe12YtXu33RiMKsFgmwa97GMhgRm4zHbSKgaR7cMk4FihQsPWY3mSS6YK5Yps66SP2K8rGxBEhKJjRH",
  "key23": "4S1Rfqoa8em96U7ToEHFTSeoPXjnz5QernsryRig1h13H3Y2Tph8izfjhrLJfDUnkMHDmny9a8RMWcobVnw4v3n7",
  "key24": "3GVeh9G2bPU5TwUBWPy7K8g4AsFA2uWFTQ7vMH9hzQGuCZpqvH2macaZTJL2f3CLxk46diWgcnh7ppFmCZTdvBsN",
  "key25": "4EbLEkHg7AMef84CfTnBsT8MVuspHF7U6CF6P9bWLu3cqUuBQF53CXfKuBRaHWLouUfoadjbSR9tu95MTKDCTmMp"
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
