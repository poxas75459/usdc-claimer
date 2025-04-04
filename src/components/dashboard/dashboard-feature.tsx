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
    "XgTXwgVThhfD2fHEuU9cwwkBHVuTz4ZLNuEFpMUA3jxK5ZdeWft1SfSdYe6HhinMdTRhxaoeNYAifmXJaK8AStV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JSmHSoXciM9k5XbZcHF7BDLbPas6womW6Hi6ChW3QvjpK7QRPLYVF3taW55J5ExD31JGRxzEZV63SwrzWDr6jJ",
  "key1": "1Qg3ajC5y7Vzup8jth3Y7ZU5cbZq9Qsm1MQSYef18jPdPxxTjNpLR9E1PujTbetnA4Vs7Dj1zwZ78DATEVuqViU",
  "key2": "HMryATfHFAPkqVf3p7E5Bh6BUyRAiWZbq6X3tBTbpqYiEk9FW3N5FNbVEYGcgLmSiJ5qfMktTc6bTdRwUE215tS",
  "key3": "oYtgZH7mnyETCTv5MXSKi7HWyrLxxqymVMjstQshzx5GgDTHSF7vPUXGcXbFAiJgesn3p8fK4iZknZNff5euUcv",
  "key4": "NzT6PhcFa2nkvRm1D6YAC3i92oiBX86ceQFmuwhyCrc13aRBEsPXWE3XgLyJjKTQiL58XENoedyZo19ASy3cLQr",
  "key5": "2dPrEcCG5nGhGZMGmTVavkiD1XgxxyBebcaMzKieLVyzBTKHniT6jMJhFxZy8vZE7vTuQtGqPbfGJVfujqPuFXdk",
  "key6": "5A85zVLX2wmMaz3pZj4M8Ke1NhojzZFfXpPy2SD916D7wJtpJWEixp7KM62CNhM3mMNDc9PdTsYcofNisrZeK1rW",
  "key7": "4SnAsmxiUJas5hK86eNsydLvikEP9JPaAsmSXKdLoQsFJcc8Wzj5qr2sYiem2J1WwE4iA1v4SzQ4HFeYjA9dcGRm",
  "key8": "5jp2vwTBYEf3R6nFNuRDkjsV3XJ8gkuEgxuMm2MC9SiUBJgk1hGbatY6zRxnqUguVqaiKE6HCG6c66xbbpSN5GmW",
  "key9": "5QDHrWppX4Z67brGEES83Sc2Bobpy2gxqsYhsirKxaxtCqWhkL6qRvwEjxAHCqW8HfyB55oeH7psPvNScqoNHdKk",
  "key10": "29BWVS3iLpDZrxpvVoZY35t2xcG4CoguG59AbocDqXv5F2QDBVNYSXLM6uYPK5E6bAHH4JzvDTrXAVLjtitxP7CZ",
  "key11": "5y4LhS384wxCPH8AxmX5H9hxftprvtaUvHyetV7UXWPcJRotRq1QMg1uwWvD7HEEcZcApUCWZvYCfCCXLuvxLUnb",
  "key12": "4Laq2K1TirRYyT5QbpY1jfpi6AEtjtkTbDhXVyJPHC1B4xY9NfGJ1Uyia8QN3WRf6dNGDQBdgXsJxZmVQ52wrJWc",
  "key13": "4bwskdtLW95DhuFwUabhQcH5LdNt2zg6oERcEDagvzgi5muUAZfdq9ocmA8z9vCoo6FuWFmTBFBfT153UGyJX4QC",
  "key14": "2xthb4nwEHSBibRrEk5yxCdTiy6SDqb3bkccB9nXzTAVuHmiRP9K3nEDmBzFsENAjhrrp5Qp96eE54AuQb9oZGvC",
  "key15": "3JF6ou3qXWksyLSy39aQZF3LdcmX6j8f4iXzhiSECDfd9uxtHUc9FziH5GcZYonvGNWE8WRDihfC8MXPdkfAf7VN",
  "key16": "2CpJsyoa7dzY9HW15kSgyuHo8KEqRs6qAspqhV8FxA1qJzx9ndjqTw9rNivHAkzky6LSp6KvuHJdfE5W7xfcwLz9",
  "key17": "3KWLxecTsBR3GacsBXPt9rnrao6MbjmebAkSwNqxEnsQUpRxB5pxsRHRrxvashuwL4ErbHUuuNAczSUcAY2LRfAV",
  "key18": "3GPpR63cXmziSAGCAmSwNHsWtnqLGw9fRUWGuxnEPb91DEca9BU4QZa3PAnbe9gcsw5MKcPnXjiGq2rybqC6KqUk",
  "key19": "5jwj3JKFbY2xdsCgMMwKCBCPMh2oF3S8H9xV26fgEu2MzoiaMnG5X7hbMQmHCEw4Zznahx7B4qKNthKQ2b3cwPfe",
  "key20": "5XVEmTnQ1hnbdhah1HRcbtK6cF7ZbCQPnwbDfsxp5EhXwdDgmBzBxvRhDDdSzEvxveWasYwNxakDF5XKZP8dqQ56",
  "key21": "M9FZiorXnjs3JBmST7pebRNQEkGbf3wzHMe1jbBGB82KZe1e6bpqjPpCmANM1LNvQVxVoLNgTGkLuYRfPqtLyih",
  "key22": "4YbAVcfmbco6pmD5NmjUDuhKvHK4YNcqjR9PAgHxRhCkj3NvX7tMEk46WQUBGxN4bf5doPPjcuDnKUZwF4oWCFpv",
  "key23": "XNTZoRWr8686fwDn6kLPdPzyA262kPgssqXmLnjAHXkSKsPmM85fhyJ3QQJbozf6Zh1xdikePuHYP4WepWCYEEg",
  "key24": "4AvHsxZUrDiRz6x291gTU4WempgrnTcTRiMPABDgbcWNtoqb1VMqHqUwuX5qv9uPkC7rKjt2vZe1gLFd8ccgVrtF",
  "key25": "4MSwJzqLSjDSpZTf4MLKAQ9xgKD82RTn4HcHaMKCwY3cn4zw9g5GdzCngEogJenvPPavUzCVSyE8JMwHwARRgRTu",
  "key26": "3EnJQzCsdAdzKVxk1mriJ4BPVDkHHasqvwuX9vsrUpV3gzVRAVA2Sf5E4gFEzMnTiVTHQwBQw2XsDd2w7TAAsaKv"
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
