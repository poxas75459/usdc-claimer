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
    "3noD4HNNPWcCWzjrBYMhTtctRS7eyZsjdhAv2WUwrHKzVsP71Kc4372H5ViE9ywmir3ydr4vmawwVzJD69GnD1nN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dRGmWe43DoLB8PPXFnDY9AtyCu5wss1AnqtbCjDyFrpVPh27qnVTKhqgcfUdS2KhBFP31iyfT86bT2YFXTkpKVa",
  "key1": "4g3hjxbzY75jhYevoHYiyEozjUp5xwNvWdDnBa3RGPBbhPiDoyA6zEpnWJ47WR6GK7KTZcHgzfanifz4FAqEGHRU",
  "key2": "2yxS6mfkudVvk5tis9nwxKfFdgExNhQysZaLUWGFSsW5hXfjm9GXWcchHMhda8NtyCM8PGrPUoZJ9xwhGQ135ETF",
  "key3": "nXzMh7Voeo7poq3sHyx5vtBX7deK4VweBrKX9YwrgD6JVf62KtYMERpUUzHXESivy3FEGcKoPvC5iij7cTAhPmn",
  "key4": "5CrBkFYY7vPgeo4piAw6DKo5B9beo4ZAy9uhLe35t5GhXCHK39NE1pkdPz84KaocyfoP87jzaVwHcaSuf1GDn11b",
  "key5": "2HZUc87oSoSFm8HME32N9K3SSQ4z1FAorCkpPasaks2uRvVoKNKmKbTxaudtgfuHmZhEqisxL8fcxGPLQyvZ4MgX",
  "key6": "jH6eKkVSea9NWGLHN81KmDThcG1EPB9cWu2PuRjD9ij8f5vGDwEBeTesPiiYTQKivaQ9J1KGQxa2qgJBcnNQWsQ",
  "key7": "hf7uUVde1wHCK5UNzK5vbG8bsZSxStm7nT7xfp7N1zRKFSQroSmWccgxP1GcAkr4MU2QpdFfRutcc4yX5iDsuCv",
  "key8": "3g6q7PxWzyLwC6J3pziJngW4tB8PHnV7HzE2ZLJX5svMcemA12G7vjuHwSusBCGqstZ5F3qjPiE2z8BiA84UhMmx",
  "key9": "3y1aNRLvvnyXhNFMzEGYfiV2zHSFyo6urLAjSfjTW4GWxx3VBS6enT1FNCP68ZntKMszvHX9vNdfaAmRzu89hHqQ",
  "key10": "4PQgMaoVxt7RB3h2u2TSru8G2UsGvb6WFQmCB8aiNmbDgSpNtjnhCmXoZVptSQNX5CP5r6RExdRXSEqTSTgWFeSe",
  "key11": "56Y5Jp9RZeENVqxn7s9u6FwjF3osismN1Fp8JgNSdw8jyAgoXmP3K2oz1axYawC2dTHkWt6MDyHMio4vyNoVnuxC",
  "key12": "214PwLGERGTzWqJvu5pzQNCt18NtybkEpoiTkUT51XgGbTEpQxVEixY1JBxTjGQVNCQjPW91pyjEVwcFf9V7KGC4",
  "key13": "SdUctiGnHNgNQshJNkCrG87nSq2N79jmVFSSWoSUsaT3bQ9CPfTpMvR3NLPJgnEDt867QUSGa3SWxwKL8HUF549",
  "key14": "5WpdwqqqWT1TAJuNNPWCB2QvFUtYh3UCbthNPZKCRpnNxEhb4eQe53V9rNqK6Wibo8B2khhRou3vmHciXHvWYWYf",
  "key15": "288YFLCPGbGYd4yG7KdZmee3HNkhCreWi4uKekFKYfnrZwuf7vBEEcP48fEWGovboG1gya1jJBD6kLedTU3AXdg3",
  "key16": "2soBWM7918dGVHP78kEhSZaFLbijgWonV1KDH5njQ7tg4wAhMkhfMQVMDbbbz7P3ChbYrQ4DpE1JT2L1ERnRyuj3",
  "key17": "5kFFybM8oLaptYTLTR2fg9zuJLCjMtxFPhaMxvYAdHL35akjzvDHCAnkHHt9zLgRLeEC1TpbPGdD1kLzTU2xH87n",
  "key18": "3AwuYBbjCNnqtjof6wm77qFfqD76WaySHiTkVrE3P2t3bNuygPsVjLu7YmenUQ2zBMxUXFdHiyheuT2fBvUxVznq",
  "key19": "2vcC3EYH6yKUSXTar7yrqNGQPciQxmmju8LB27gLA6PYT8SZPY2JC9TZRXL5Gw6XyXWRVuZLmy69sboMtS7WsNo7",
  "key20": "Fga4sxVcN3XkvYZshZcaFpPFfrQciuF87TiNt5mWq5gbz7ERcsqBnzsowoPgN7GN4cjRbxy6Y1z82hZYF5otDKb",
  "key21": "p56kYY6m68F2p17bTU4zb3cHVTHD5P16SQVsoNFD8CLrXvhg6qaxdrT74vffE5kAn8njsdbGXo9vP1j7kDy7MP4",
  "key22": "SKUupqgp4wW76Y696qmTCwep58siVpy4t7ApZg8hnNFWckJTSkTpphwm51LzWfEcYrqjWRfixyJ646jYb8FN28t",
  "key23": "bwktdWpoaoPuUjFacyDWxjuHE9SfgwYbasdwMQN7hLCLivFfBETMFGb75mJogyKaZaLmURrQKL9pDj5RD1Kwijj",
  "key24": "2WPpcBaEYG3DzEuF4hdBfJUtY5M3qMsZwzempqpXcfcSBHLcfg7G9awtRyvRniHiKRkckDah3fCPnFgh1NvUXrp1",
  "key25": "4ogHoZzeiSPAXRzH3UydSrTpAXEmWemHtUAymzg9CW8S1wxauNPWXsg1kPDHCU4pd7zDv2NtqWcPPESvKVYzUtch",
  "key26": "kRKg9UmMetiMmywBvCZwUEEhGk1Afvd5wub5B2h88QNoaLhQN4S1SftLN3DQR8qgRJiYC15zyPv9s5PRQmMGhyD",
  "key27": "3NCx16kHqPu4krVYGSspvSm56tazVUkuZkL5Rxntt7tEB1RTRwzKAf7gBSeqnNdZmfrQQSEZgJd5a2x9eEHjUioz",
  "key28": "3Sqe9S1T1QUwSmTvrHUWoLkAucVHdCaqaKJEFz4jEogGWbhk9r5TDAw8HmmbrQCExChxJvinVQdk4u5YTz3iaLg6",
  "key29": "2THf7yabK9Cq49WP66USSsyvN1gfybxqqQRajFqUUjEfPXu24xDuB358U9YDw8npTbBM5VDaKUwWyzg64BofFwcc"
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
