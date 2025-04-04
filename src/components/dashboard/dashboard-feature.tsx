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
    "BfWycKhdfjHYMnCPJi4EmrxVPhRc4xUsJTpLoFeD2HDtCjWxCSd5ScTP5xo32uB2QrxnS11RkmrqPCiZcrmbm5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rd2eJQ61gV25akW8w48rhxu8MifHEwTDLwjWgWpPWUL7nx4k7xHJ6oeE6A7MhQYx9XMueusKAep5QJPm6WqHiJc",
  "key1": "2arYnDQWYEL3pTbuYZVRx8pmXUQAqtb5VKE5Wi2c42ANdGx9BT8mSKetswe8fHVq4jZRXYxuM1BLS6zxTG5Ty4LX",
  "key2": "3wwX73CrhUw9LzPkkK3BzZ9TKPh1ZYmHzToH2ZoQdzH2gbircMgaKGYCPsPoxSpDSAEv9NvkwGuL5TXYtD9a7pAv",
  "key3": "5MnpbhvD3iAQyn49iWJ95BfYm2gnFsqFYXN1kzp6E6LA1m1kiFiGqC9eUrAxaub1cg7joX965hF5StE4tzyjCmf8",
  "key4": "5aHJg6ev1mNk7pD6VM5CQmsrAXdA88ZNC5Cq4Ei6eGZj2fihje2uG72A9v7bjwjDXL8RS671AKnVJDiKwSgPnHnk",
  "key5": "5K9wXcjj8LmNTx7fQTuDT9ABLABKKNkFzY6RUDgEu2djCudAqGxRhqcPvoaKckv4azkooAdjJmL7FSMTx1kxwesH",
  "key6": "56GYEXMSbKmywYQrkHALWDesVuvfosjkzJwr5dkf6iUY4sLCjS5QWs9JFTC8x74TCVwd7LKpw4HBrXLXXMmxxYKD",
  "key7": "4mJho41wNfVfFv8LXdRs24aBJLUFsQke1hfpfCALwJhntwVG6ijaY9LYRph9Yo7Ab2dAUt4C2dKiaLrWDGAyzyrM",
  "key8": "j4oSbEDWfMkTSSwhk3kDiyzTna1tXR4Tvm2LdEyxPTdyk9xsQkM9tygu6J6Kq9PJxwK84sXA6zC4B39xNBEehzV",
  "key9": "3vQXKqkG7soXgQ6UEMrrt2CoUyuFGQG3yEXLhy1ZMZNzyP8cGZCch3GGGjVPJGYxFjA6scNMaEsyLWQReWp9GCTL",
  "key10": "SMVAM5fj7nhdCKCpFNNttiT7dsUTcfLkUPrhdqbV8xT5e1a5VBnyKm7761eEjwDtJRyP7ZDRk5kcsGZoZt9r3bS",
  "key11": "2k9o8yQW7wjECZ8bLZAfWYzoHre4883JSGmUXSbxnhtfYfkdJtdifNJs1NKDxB4t29e79eSkC1XTud5HzBh7oHyt",
  "key12": "5w4D7BRD8rPXGwuboNVFeA4S2ZEaCrjwo6BL7nqVrUokHvGNkRGVqWGWpLtDpSazrDv19qSjz3JpLJc6ypLtvSqT",
  "key13": "4krUVhtfAuuYqmUv6sM8EHebUKHwxtRiDXnNcHM2rrQwqvbpiGXY5pmNg9pbxqUtxmXfYvR4vsWTgnpVSjc6Hicj",
  "key14": "3gVrk45nK795wffekegQsHK95nLMziZ27coLPVrSBnxmaNThd3aUmbf5ex6FycmpTzSa1QM1kYKU32Ko695jY1BJ",
  "key15": "4FE2kAGpU2g9EtKkBJMjKojdfcjbQ6uo5W6vqCKfoGiLmNBxzzpcaE6ZbWEdiJzAGQrTX8wLpeH7dKYFM6SQtRdk",
  "key16": "2QAKSXF7yqHfN3DRqtBtkcWnbSCBMWpXXQkmo3j2zoYbpkUCXtMnyJ3er991bKoVPD2bC2n29jRuvs5QcaCjKMTs",
  "key17": "3qHJKLtHcqeFmG9MB7uHCS2BYd8bYG6WPTNh4gtRZfze5rd6p3j1sD6T6QioLKejbZRk1Uy8PnZmmzDgnEXWxBDq",
  "key18": "34MNFvr1oAeUFRiS34zTXKwbShNhJN68VXeiXzfiMKCBkoeKvLiJ953tg31cp95nczoxjQfqbhUn8WduXdP1hWXe",
  "key19": "3t56YzhLWBKifgbexGe44tGTVrUPjm9UJWBs2RMp5YYTDQK9Mk8fswXV3QpqBxJQCh4jGdjwYqehJ8VtmPHmR9G2",
  "key20": "2c5J2xY9GQgVJykcTF2g3hnRHwBaVEYvKbsXuz5jHzYdRDVAQGUP8wNebX3nL6K2HeM8g752pLKBd694niYrM3qM",
  "key21": "4PwSgqKnTGiuLBd89fCQS5aV8BbJz4UespqhaKLLoJwpRd9rEuEVuQ97zmrb8suXSDX1rVgZgzENK5nFVcwqoUR6",
  "key22": "29WkgzHB6mbDwyBwmGfMdRpJ21hxcjR5vpnS7NxxogN2QNbtPfzLf29YajPjWS8CdocJjjEQdijzUofchZkaprKL",
  "key23": "49FGeEj8BCJvCoENLKs4otUgbKG1yPniAGKuBES37zQzzW4m2awfjTBA814SvZ3Adcjr5k5K282Du2P3AE5Q9G9X",
  "key24": "vcd6G1iZpSTE5hXZZU5EMk4Jw7JDdCDejJj9CAGYLgR86NNW6FZfrBTPHYkpe86gKbpTBA2vUGdbTbXZEebks22",
  "key25": "4xw1vGzhR7XeFdzHFG1MvDQVZbLQXnB4Bvfc4KcYWTnjDARwHW2uiRgtXmiXBQ7n4KkMPkYELWUP8HrMpuupNrXT",
  "key26": "2m83gxFnUVkSrEHSWgfCTMwFxkBTkSh9CBJVBo9RbrM2UrvtUhhKZJGSLwnDAbyaqwWfMEHhFZfx1atuXosLVQGd",
  "key27": "27oDGKdZFGy3UGKmmHUCohDtU9Esf2KHzBpEGrBfJBysQRVDqjbSw2p333QamevPGBCTg6eK84EsGCiWjygGQxRS",
  "key28": "5mFovJTxgEZ7ggAsqPR8U2PU7nTjeytxaAYsHGQVLfP8cipWPNfJjNBVv4kQGcEK4JM6HCcsBgYneWTVUu2PZQkh",
  "key29": "VTgnpPCWaahWizyqF5U5bqfXQ7ntcn9xRn94RpiNASA7pVoizRJEQv6iRwHWGirv3fvDy4EaGN43j1RgWaGaFgY",
  "key30": "4VecK71vLRMf1SWovfAjfQKhEtnVhSriyDsLw4kSeFdcrdAz94ELxHJFPJQUtrCN9HaKKwRcHJfRiofQNphmBZWA",
  "key31": "5UQXSHck7TE6CuNtT5eNPkaVGMa2r4w1hosWAU5QBXX9Wa7kxeCByjJjB464q3nc3kBvL9hZrj5uAwtp3kafnmAa",
  "key32": "3it1avkwi9EDbeKQ5oGYnZyVbrS5itXh8y5Tzmoq3P4fbbnLg75wBwHfcRLUyWRZZkpTkExUYGZKhNhwgFAAXZT2",
  "key33": "39N5Tiu9XzBhggARRWQ8wwu5hht1wmju7Q2SPXemafNrAMcBiAWSWqv6TZkpv9kKBzj2zf9XgFbbuN8SMiAskzfm"
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
