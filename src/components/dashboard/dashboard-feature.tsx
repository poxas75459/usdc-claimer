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
    "2acoMXcgtUmDrJVeL7bcfDcT3yQBYz4VtUVdjGv9VqRQtCivUHCZ1ju5zrLEtsfFkk1DavhmghMVVodupKPQb37F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtHfDKKZP8NcFX8rX9EEYojSkZEUKyqpoeje9CkfVztJtYnMXLwD7A9U2ND1g4VUctZKk7ciiKM5Fh6uGRybNA8",
  "key1": "3ZYsDWtLUn9bjiY6C46mvvWcrbqZuDqmhKasWVtUnShPvLEvpEGjgUTx3oCHwQtGhFh3ifZwmap9WWWrMBsVMWpi",
  "key2": "26r45pgfQafDLqThbWwY8n8hEwj2ZxRjJJfTVHDjbSWUpBvNw4FwaaPteXyFCUwBon1Ni7C5NLaLMsTFyTVthawj",
  "key3": "5685yzXvgoZ7rwjiQmfiXA8dJgTvSo5xyi2GW9annxtG3dzD2RyvYwdPw7xYeXQTdovm2aSLqAbBGbnBbsn9pkE6",
  "key4": "4SBR9EfUKwVgezJnYX25nVzcCeCPuQJzsMsGXJXCMFG4QtsnejLbyXeiTV75Vr2qKekDa8rFDVPiqK5rU5WWzq6o",
  "key5": "4TqjE3hNgxU6dYyTK6EZNLVLyNz1wgQ8xVksKrzNt1xBHkHk1GhUhXMKtbrPowht2uw1j6J9xwA3FtyHkg4eU8iG",
  "key6": "2m4gitpc55QRv672Ck5CLpMsBazHfSNUQynv6etm1PmzVbTMmdLGw23QGCaDusTwi754J2s8gjvmeEQP1AwZ35UZ",
  "key7": "33PV8oVjfaeEScargeBBpCxTwFNEZsjn9kWQ13TfcGonSMmKH5AcbNe1ozqnDudSr1aFxtjwy2vgXuamGYmRh8yn",
  "key8": "vd5zANMnJfHKJTb7TGSwmT2Pi4C8mG4kaLfYW3twb1JYjeVwKi4xfcqjYxz2FxVFpigqanhhJjyyCcTyS7Yot1B",
  "key9": "437ayN998Hw83Gm712vJFsnN7RZGCiGYucYyN7V3MDhotpnP7aL4ebRdLeAqFkxbT6CUK1XEKKYUetj3iFnFPwck",
  "key10": "4VbhXSRt141MEwLp26ephcQasdgys96tTS6SkzV3YJ1FEGkv1fZLiyjiHiouM5LcS4v1ERjmsw1UHBLhQtYGynLx",
  "key11": "57Ccix7KstF8eseNdLoKBtK2hevwZmi7kYpnvVJL8c12JpG3vHRa3sM3SrfhyXws6Bc1JCTRWZpNh3JhZKE95xGJ",
  "key12": "3B1XWkPhAdHgbkQcwV5nuBMsytAQhWNBjDvE7LCjiexzJdrMMKxnoAq3CqLG4ArnzeUjDFkSCruDLAMpsE3RyCpH",
  "key13": "AVuF7qBJ1yXs7oAu9Rw37wdxV54TfkwQuDePYUDEgdonxkgELFDRd6ZnZGrqm12m7dmv6QAGLbSshBY2QtBrJyk",
  "key14": "382UoVcp6LtA53oMMLGsa8KvEEb4HLaz9a8UdxkkLA8ivgm7YnUHhBw2ZsdTp2ajfsf3Vwp6dwonjGGQu8Wkwvrg",
  "key15": "4r6vi32r4M8TPvExQMkc898GN1jdH7UGLVSYg7T2VBxDtzSKwrvza2Qt1DgkfPUyvq6N14u7gy414XH6rkovgA4f",
  "key16": "4dzTtjeMBxG997XtgZ6wbJ6ocxGVpLTENobHoNrv3HcUeaePWuXYyRt73dr3dWAz3qW4TxsZi1AdyoZ9wGEiNAso",
  "key17": "FaCsPHkGHsUtxMzyvfrMGJbPrGCyeHaywcAC1zNGFUz1ozJcZCAZ6RonKmbsquKfY1aJZkXfBmkAQJ91yqowxu9",
  "key18": "4Nm9aRkDqw1ZqHtEXZwxQg59qTb5b8epSbg7mTdgr8mggdFmy4tyWtyVubRFewgLhzmGRx9rTXfib6AyjQ7TSY62",
  "key19": "5wBQe7B5qY87oTf8cJLyuPTccjfJBKgJgvLdTmUFMTopMEKADZFHbG5D5aRbmtnL2M8tRLnQs5FD6aM5fMGFaCva",
  "key20": "3rcwGMNt1gCzYFuYtmbU5wUQbEDwDitmDsDAHqhFZZbtUjXR6sUhN34MuJR52te9TvzEC8rmiy9gESCthbVKSM7v",
  "key21": "2BnzVJ1Zhc76RFpWS9HLpi6bR3pwJzybAFWSs1R7HBtAv7HNUm4mwx2jWxXjuBp9XNTe6xvmT6MrH9HoSMzh8HwK",
  "key22": "2a9XgbbqnznG1YLb9xfKH3UNqbMpogdmXUbEFH8EMNaX8T7xGzTb3mdmFamRLyPCemsgi15QfgcXRGNVf11uhPy5",
  "key23": "5pjWhCMUtiSt7yHwdhqZDG4S7NahRFW3NoYyKmdaAuU3rWZ994q9KFb1S2RcebwQ9iKR9beDkis5FMbKioDYg9Nz",
  "key24": "2dkNytpY4FpmL8kgdLR1vDE8KgqGrQiqbaxFfCLSZwUaHXjq3gCAknenMZ5wq9wGvdukd7AKaNntrZAjddFJsbc6",
  "key25": "4voGk3cr3vw8phWPnV9eSApenbmSgrqtV3jXR93hGPtpWkbUbqrCAGCDCHLEnLkiWZneDhBdtp853btuQLjBqYjk",
  "key26": "5aRhF3YUMJD4QhPYdRDpJd6XGNrSA3FZyqo3UHMtApEUxohEocDguqkCuUxqSwSLzu3UuGLRJvLWSe8w5gDEnqjX",
  "key27": "4PvKBdXX5fiABeXWzcccUPRzrY9rJ3XTzuYu8N2yCJFw9PobbbN4ruUx9pR333pFzs2SRx5sfJ3cpeNAtdoV9Nwa",
  "key28": "2HrUCfDKidQkNoJDBNToQPFz8TgAtZu9D4hr7fJEDXPe4ijcXhLufCKr2ZukbVVzcUZLncJQWEj8jhrTLtbJJpY6",
  "key29": "5bZVntePuFxjERVR2q3u64pZnKQKh6tcEZtqVHvTMFLtMhztFDhzYu8gKeGojVHRtcZHYpUV3Wg5ijzChfuhY2Ta",
  "key30": "3nxwMqH8fTuJsEV6mV1PpxwykhB47VF2eyKSpC39FvieuvysrYbRjYWDtaMJP1Zk6sBwQfmsWVzjYNwoMr1vFFMq",
  "key31": "4gZcietyXZYCwEDsmC6s3PJWSLHMe6XVzTtuF4fEHwyDMF4dRf2FakjGMZB5X39Ts327aDQh2Etpfm6ME1cYMzWJ",
  "key32": "5J1ntwagB3RVJB9MtW2D7WWRtFZ7pRpqoSwZhJ4JTfF8vh2F6dKrGUmsW4G2K3yofaEaWZUFGjiRjvftT1CZTU9W",
  "key33": "5xDkE7d5fdjEg4Z1QMP3AnycuEn8dQrJMyBcHMeQ4Yeaz1TBaT5NWjQN7J3SzhqzAbbEqqEDqtrtzENd7jQJpuZi",
  "key34": "3nwfKPTtqRQcLgMxC8zMW5pLMWkoseCQEKtxyUVbpZ27tU41AsM22H7hRVTHt2FNNGDC2787hPZMsKHfTuLbfVX",
  "key35": "4QfUmUYgv56FT3jW3uoEDrs5gugPYFB9aTDitH6cdi9LPSSTxDj3CpJEHWu39nSwzgCTT7ceSjuhxPbJA3EPonBT",
  "key36": "4NepxJ6se1rsj5E5xqczeKbZaAxDSJMuBVyJP1Dz6xqPsdrt9CuWpPCMAYdCvSATn6TCtMPCrqBuDvPWABaxSWY6",
  "key37": "2q7z9zNK39AGoerZJncMxRXuE72xD3Htj8cVEJvixqs6LxtXwbiHfwv83znjcYwjM3hD6tqbUK33RWR8XcPmSHVf",
  "key38": "DQq3FTfnk5YbbMbjNLsQtAYawbTmUZjnYVN4FgLYkjFPD5mcL3XPw8aAtSNGfb8NXymTfpg2SAePTccwTq9akjJ",
  "key39": "3XiH6siLoZ6qwwDYDr1XpwNJhiz7EPmzLuewjYXi5KrNd8qQBWADyPYyAmbpbgitrwgbRcTesX658LBtidsdPN9Z",
  "key40": "E8gfnhkP4GnBnb3TouxmvAeFwmeVKyD1VeNUxCzxVNwAuKjyBLdvj5no1EVYJQpMiX489Vkt3rcS2HwaDZQS9au",
  "key41": "4fx8yRBGSWNtLHQiKY15VwN1VAUdc1heLoccc6VtRkwfL9Kf9c5nGA89xrxYu1EUb8AA2WqjnpRyBddxbVBhhaBS",
  "key42": "dLMSbGA5DgUbtSZ9ciLSUcrfiRWSrhwaRzwfsuRXxEQwyTxukAQtmebzNYkrVDYVHz95d8JGugYi9B2awC9rbpb",
  "key43": "2kFrAWvmjkDB5PDj7j3YdVH6CQohtr4VNy6pgVqWVwMXbLwWu8TytEGbTyKQRm7ACCE4honyJevF2n3DynsiZ3Zi",
  "key44": "3fALHS1DSTDLYuyumcDoMposygPv4qr9Eg1ZqndA7bf2jXUPgiyb9KSbecye9mG6oDgiA4aSzQzx4rdASY7qWZNh",
  "key45": "S21YLX48PCN5tcwpFx2w4KnN9j35bH6EKqgVgHppcFYUDzU6HxKtsunwnU4HaYQedTwSje7w3CjTk8NDiwYJFHT"
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
