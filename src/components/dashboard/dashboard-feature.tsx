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
    "sfxfwaGmtV1BpGDTEFfouxJ3LpmmoEjxYFnCXQ6JfRVnaW2S19nSsBfTFtAtTPfNNv1rioMaWK23FAxZoBCSb9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66EWcpBHdMF6cp3r2muBDcYtgcxZpX9Fnpa9apwyG99osUAJXywyDqQn3gVT7fTJrtgiEAjuESoecWHGk7tKmEei",
  "key1": "2smYUrBGvg6S4nVRD2B1fr7RkQ9b6vp1Rrt67mjEAqmFFUZk1QsVTMzFJgdjhUSTxhEwWmmzGDcGLxzT2oniPhQ4",
  "key2": "3LF6iAMXpoYukC6XAcrHLY9bhEbdC1R3d2Y8oWcKAkr9EUmTwCpptT2ZyzdzbD37mdJCX1aEYj7R5n2L3HLwGofw",
  "key3": "5Q4woNs7bisTwdcXFH7QfAYixe44xXYzdXuPbcUZic1NUhzbLQ8ka9k55i39XL7LZBh5pghtgYMVD9tawNG53vPb",
  "key4": "33MTjwwNZGXkzWaatK4BwAhw2paBu5GttqvRvdQ7yFvKr9AUG5r3uRPagMgEjjgwnJVBDHYXXMGLwCTjroWa6WJA",
  "key5": "3jCFG8BsCpDL5VZvdThAfpQAzmheBYH6AssnKdvW4XREp4xHNJGarQ1RkdM3c2ZTHjcADy6CQGv1RuLDw3ScV95V",
  "key6": "5f3qJP1ZnGFqumwG5SUzr8w94hivxgpqSi351eusXVaLy7BK38B8uBLdPbNYZr8pomFxYhABzrNiQ9F3VqSRL4Ut",
  "key7": "5PPYB2d3Z3sCKLfTqRqpfFh8pnDvJ9EHoWHXT3ajYq5ecXX2FxLFPYWNvk1vZpfWmUoh4aU9ZKVHmNCmwn11B12x",
  "key8": "3zctwJF6Wtfn2j6h5MY7LVS2Rd5srt9vnPFbEKoAkUyj8DwWCryCHHvsrB5vmueCEwa4nhWM3sNhKHnY37AZeXU3",
  "key9": "pEF3uaxh5wyPkNEcHVaSbkWYxNS3JPCctu4y63cWAVXSjEEvS99DzgGGhddGQXV8m1tCAAKGjKRjbMoXk5ygPZS",
  "key10": "2W7JEY8XMZtbDKDrimZc17YktQdDACKZxZEtBGF5eA6DLB6cujr3UqAXndJU6AQB2EusppgUHHzLZo1hU1o2ZPQu",
  "key11": "25q6XyxNd8exM4u8KuesHuca4F79JxSuYCb2iZ8cotoVa8yz3p2XAVn59Vn1L2133CNYhY8KDNMZf3LzczpXkXg7",
  "key12": "3BxR8UKKffMkYdUtGYLhmWi9jTwoF2oWbTUM8RTkkCcK8XFp54vhjPDaAy4pb83a3KBJqG3uVHbo2rEMQvRpPScy",
  "key13": "25xdhRr5cEouT13N6HzMeDhfYPNSRZWsnQ7EH1tcSfYD41sbnXiEZxV9iEij2uXoUxi8CYWSirCW8mvTDpdtEGvG",
  "key14": "4ZmqEpwBdFDt758L4gLLhcN4C9yqhvar6GuwqeaEvwA3gXXDu2GtKAnJMaAbnHD33knG7zzeEY11wWAuQ5ySj8ec",
  "key15": "5RbGa5R67c3z4xcu4DLGFTA3Pr2hZPiDsApVnDZwScVqNTLDYEChduHcRzz8r6UxeKynSr4KzYTSghEnt1DPrj8V",
  "key16": "3uHjRwnReDBQtU7cbrg38hvZNLHhZ7LJ33KNM9qQx2tEMNNMbKZqPuz4TKAnwY5AcVWgMSBQjk3ERGSm5JRVpvah",
  "key17": "4ffGKKLRLpUvC4LXmN4rrYRZDidhCtq55gViQquSZeDvCxAba4VPZfAJ1VUoyU5QKhEPQoSPcdfJgiNJ1UnHkLxN",
  "key18": "2xaoi4D6LEKy9EjD2mNCWLFq5uohUs6aASXKnhKhAF6DC3UXvZxvhtrNAtUHSq4P73a8dqGDFvaiH2tozCgMGajh",
  "key19": "42Litn9T2oV3xtAFi5h5fEpAw4XhySESai2tTiDVRm5xWvhgikHezePBFjwzpvkovoVMYVub7zUHq8dnF9fy4a2G",
  "key20": "5XAMec5Ti3o4wxVpzprFHqsQ3Q3mgoMF7qcHBQ54Gw9BbCFW6UCtCBmB7azURASpoHATbdPJEdKjEkTfLB7iXjvD",
  "key21": "BJLjmJAVmq2T8tDjiqrpmRdXJeMxKQFA7CZXLacZnzoTb6T4XyAD4Kfn2qNMduohN42TzshWrKTKhxoktJRvjin",
  "key22": "2xBn75F4ABXQG6wbSSGnZrrp5CPFfWkuDpivdQvg73VgmnmMzfR21MmEpQBBWGYMXaepZiqXp1fDeVvUC5LK4ctT",
  "key23": "3D5kE5g4e3F2eR7ukSJqXMXWJTagYZm8nUzB8AMDVyenSkFjT9oyAo1KmUYUoZVDKdvFCx4kDfkK2GN1gL98y8Er",
  "key24": "2cMWvDn5frKb7wfmfrMbn8fvrUBCGtYYvANQBViyVVAGqDqocdCw8urhqsADR5v2hkXcTQUGRcdtt2nJ7PrMxTLV",
  "key25": "njq8zRV5T2NGpkTUn7dMtTqR1hKRKixFMFGH8BzVFXq1vCgaYbsC31eJ7FTFbSCLvQU8PcnjpxJjhoj6TvSAM4C",
  "key26": "c2ZCHJi6AbqC8GeN9AS5PsyAQ6osaS7XnKvvgxSwiFcDTubwbdJaP8UmtVkM9SgFcM7mAipdXmiryj6LQWgT39b",
  "key27": "48FPgkNYmDAU6ukx352W3ycYKuKmkBxhFJsAqrSEoCbFioFcEQPAcA6AHom53HweGX9N7FbBrKjAGPUTPgDTAS2m",
  "key28": "3KXwXjBXfVaQM6Hm8XK2RJVfHddw8mafNp6w2HjNBepqfXtjA6gAcKUZ6VTkDs22kxidF6t7zveFAUPaZmLJwFvR",
  "key29": "2NjwWiLSQrP9L7cXCpayWQSNvbwLkD2ino5bkAuKfVGievkn8at4St2Lq6fRHPbdD31YiLkuq9aBFq8B9PD6B3vs",
  "key30": "2fYGnLSCt9tQ4DKAFK8YzhCwMuNFCYgRvwaxWexK7jVgpwivC57VrB3sWpYg3HPytun1wcnuodatBo2nnrhH4YtJ",
  "key31": "4FhGFQcLvEA4ae7oPmnnvqLcLTnJxzjCnS8hZeTcG58whmm8KFVaSGodNJx6oSGj1F8LMcXtH1TyRCjSjhzTKsaw",
  "key32": "iD1jcKR61KYzr2P1kxoCEWavmWgWr9erfi3i1hHDbDNVa5sVkDZspoG12dak52vh1PHarkJ4deHs3L1hPXt66Db"
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
