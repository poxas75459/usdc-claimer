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
    "CyJEXru5fWPQnG3stHRhXFBUXfwQtd9jryDjQTviRK2s6wdAC3NQDnj3KDC7a1acnmuxKrNE2whGmFURxRdZEf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M8AGJjUXGjXEDvaGm3nwoq3xjYsHHJsYFPTYSZ2B7Bj9GysY9kHiiKCWtx8iDj5TQYk8BQHhXHyadczGYLR56Ms",
  "key1": "5bR6ikRAPGkg73QupqXvDNin1mAggrE3QCZzzNeR68HgTKQo7FwUVYSdb9rFYCcwEd7bosva4n46jWLLAQzLdNau",
  "key2": "bHzRVbsKC71QWHdgWHUBnBX57fsLnUVmUFnvayL36VLBwZr6VQR63KWpx7D58evY1JveyRHV7N8sA884n3sNFJR",
  "key3": "2JwussnVSCLaotbGskHXL9LkJE7NrZA1VSTw31MQxdDEsEqzRBKGG6aUS7fgBngxemBwr9BbtjE6bHNiWW2fW1zg",
  "key4": "3um5wNobhmU5m9BM3CW1AV2kH1tXLu1QECet1KYpYkUE5TDdZKy7stPQmenCdMjX186yqYFRDEF7zwPGc4Lqd15W",
  "key5": "5tokwSjdtG92r9nBnRXEhPAJmmCKEugvNG9Rs4XciTVzU3GbPhGB8fW7jVjBSq7mgNyEVTFV6Bui1PrHkk4AjM2o",
  "key6": "M2cs2spXy8ci9tTRpBEXbNa7g5KrK8vhd6hubZNyJqkQ3CmBgCFSYQXgT6zG3mCxaux6rQuRLukVUSUvNjFcokf",
  "key7": "ZVqMfE5cRPFCDt53EN5Z44Dxnq6vHZRJE45LVA4FzEZJkxQ3prpwhGzksgaXsHA2t338gMNoGh2eMM8kFw1MtCx",
  "key8": "5L8YHwr5a2rzCPkemJCFaYGVH7rJnQ8aJNY4SykQerRXtgHpmWwgpugwjNPMW8Zy31TjjVRXR1y7K77CRFVFG9kN",
  "key9": "56rVssiwuuKPXttMk332B2PJAEbFji7aPXbdkLKi5hgTwej19Qug8rH1U7kGw1SrR6juNfUa23ZEhJcR4KeYbfh",
  "key10": "21bzUbxGWguG1scHNMhNPpsuooc521wXaVcbQKVDZaSNaaiMWrxgzPttHJw8TQca1mifmNqMNcpksmjGfcCPdohn",
  "key11": "2FhxYbo4ZZv5ZUf1h2fQVUMT8YBWVFAftdySTfV651qWdAamXyMwaAkSkVrXcEUDPXkb2jDL46y3ykFrRMb1NcL3",
  "key12": "2Rxs3GdDAPZsvuwrVShB9NwbdKq6XJ17wBpT8BGMxkHVHhdCg6Ma43Ypx9vHjQSBX7k3V3SYdZLeWqk38WmjvWKp",
  "key13": "5YGaJGEvbxwJCWWwtxrh7ohngmJkcn3ZNyya5FyhqhhGv2oyKdiVb7wvk5bLViaJu3agxPRkxLnj6nKXARESwPwV",
  "key14": "5DAsniVBxQTN7XLhor63mmKMe7p2oggsdPb87PbFYZX2aS4joJKEavXBKSRP6kznvNfHoFzDuircbPwCobPC14Di",
  "key15": "4972XLw65UtBrQfuVPGEG1RLDfx3SeXzVRZ3Pk33qb28WdbqA3jhFHVPNqDvME5ZhxHJParHQMkQ1pnD52D7Hmws",
  "key16": "3wSHuyU5UJDzSVwrzhjr8FYPr9G9H5cvAteQUXpaESd9bq8qUnP4jgMbjjaCL8QJi9XZiN5Ja3AMVbo83xsHTQRy",
  "key17": "58wfgFdxEPCER9ottDQDDtDQAapnkFtRLLV5N8ULL8FxCwtd5QxVrS95jvWsqnoBY9srzFqm9Z9StuUcLJUphrRo",
  "key18": "5HZEYB88kYUspWAgErYPQ9cMev23X3iuqhBu7PTfw1NDcgfqWAFSBMQ27a8Mkrdo2kk1sq9fnBRWoQbPPQTzdt8U",
  "key19": "a6xBm6D9n3SBwcsWmCt1CrFhYGs4LBvxFj78TWM1SnUMFPHQK8DugM7Z5H29XRCkdVPr2sH1Ddk4yUfyezw37NN",
  "key20": "5WZwnxnTKLYwrJKj2q8ubBiwZqYPnZGGMXZQycWdTdYNgCiQPsCVrGKCXKhjQj2rsuiNfWEjrtAoWMMQoW58AV2r",
  "key21": "4HXBudhQc86ota7p3t1gEtRok3TVtqu86kZnF7TasWNTpbnCgsHDategD6uGVEgQR7ciUUwYCHCve8FpzhEm2GE",
  "key22": "4q75RwoDNNwVuRy3twPGx7YaWtyybMkWECbKwiPW1roYBFPQmTP2cg1xCwXcEuPZCkxzEr4BF25oF9GbGZEA3aoy",
  "key23": "tSbHp8j1XxuNFX2f1tjTRU8hvQTt4fvnXeLVLEinZoUmDwd6iSpeBfTkGc8TCfF5GKh1okhx4ZfguGvkexpTj4r",
  "key24": "5H83F1eVqz914fhvpG6KFxL872UTDLoNAjetcZkco3GkGG1PkagTDsNrpNVH6vSR1PNqNs4gsFVLTPwkZVvVf2xW",
  "key25": "Jxx1wXzNhsqwgXaNov6SSreQZsJUFdyoLk4APZjKkMP12nWr3xzxm1oor4Ef3rKyWrzoq2vYvaSNGhjpNbY4SGY",
  "key26": "4LERH2qMksZpduBcmpeK4ztvndhigHmRgvGH3uBNbsrD1VnC7JtPh3KFfoLW8PSnHsgJiX14Zw1WDtiVqcBfoxxV"
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
