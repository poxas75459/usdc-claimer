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
    "23j6Comz9Jgciqg6jc1bo5QxvWcdonJbRomuynTFRifuu39Rm8F1tmAZ7Art34vtPZDP3ZGEQZrJdnJMfvF15vGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cedxuRhNGxdSKcyU2A9ide26oRWR1rupVcHpAySrqXLq7EK9FVDYvc7NUWVoWaa5ZH5w3GPmuyPC2mbtgqvGHR",
  "key1": "3gbM3HGHxmp6nzCtGfBgqTEYGVtzyXUrbEwuYKfKJKPRhbDuMnyaWdB49f3Kz11rPgqTcX7QRPm7k7ACb7S6HDDN",
  "key2": "3e61J9EE8AoyZ4a3zn1Y9Btj1vYUVumeta6vobGd6WEWT1LRT55hZYHHnkmsZTarQqWAEBq93xphdSGQuzYMpSXj",
  "key3": "5AFVvchrw11Hrscr7GeqhvBp6S3QU31gA3f9EsYVceAPUSuewt8DrsiTu3FGkdUwUqh3dFjkGjiBrTMw4KaoQA7t",
  "key4": "dpWdcHYV6E4LrDozfSEVNs4abWUpNNuqnmK4CpzWsQCuqzGUFyewXSEHbfqcRtkRHTQaf5GGWUeTDKJmNDEGCc3",
  "key5": "2RFbCwac6W9Hz4KkPV2QbWNauztx9VJzhe3FTdXTNror3uQb9gMYjTgauxQjEEBvhwh8Dx7SGwt5aRKnTiidbrLM",
  "key6": "Gtt6AeVWiGGdFoRiwzN8M2zcYnPixyUeoHinadhPFZbJBx4Z3mjCcaUUBqb7CXmR3sb1diFVVpK5ZiMqQ7odvzC",
  "key7": "643h2s5A5fRK8SUXcUBBEJZ5M3krq9NGVjwVFSbURsVVvQtDDDBFwuGtCspLEBKVpsrVyUt4F7cuuehrs1Q7H5fp",
  "key8": "BPhJGpgQSz3qzbt61ypU1ZJSiphCf5ndokJ37sgJGsnnBkTTPN52syCsGGHZKruEPt7rmZikkDWkCVTRseySZus",
  "key9": "4hnXk9uCbriD3AxckJZPYPgEzaunDvBmZtY5vJqD9RkdDQN8uw355tDEDYsdAVt1nigfzw2v9XzGbEbjebxjkBGL",
  "key10": "5FQU7AZ31JtAV75joa3xbnhJzzAGnYfqydcE1R546gukrcBXYsrBXbji9JND1Ma4X7uvoYodoWmskqu9JEsNETzf",
  "key11": "5B6VRYatqNQSdjSo4jJBSvY5U8XxiGxzG3kcSB1CEGG2WuMx8zmYDkr8s7h6hWpKzUcmUbNWGCMk6zgAxkZCtnQP",
  "key12": "wSFoJnvEyq4zRDFaSm7d3s1puEXyxSXzkwun5jBJSJ99ycHt39kJbxmyhFYEXtZP4dMaLyPVhTax73TA8gvxnhh",
  "key13": "2XZcYJR7ADqBS5AFo2Hn967mHP8N1cujVjzhF9Gs6vyfXScLgmV8eYSdPTns7NDvpt9zkK4X6NbJXE1qYKAGaNpF",
  "key14": "rzvG9JVc9SGhMDY4yzdc6KL4nPQGamxi4uvs1rUWG71PJarJu1jp7P6eiKSapUDiP9SU8xxhV5QLYNMgfTUWTMj",
  "key15": "2zxEoggwXgWLq3f23RzwnM3Dq92obXaZ2pLT8G4aQKpPDxRiHXyoGnH7grdML18U9zUB91vPzgfqdWNRy5tgtU6j",
  "key16": "3KgSVMB8RzDMDeC5otE1rvHZsoH8XDqGQRKjTtHKwhfcYpxxB1VuP29wyAu4QUgyX5zyE7HxiNW5QVb3CLzDRrcR",
  "key17": "jQ5jAY2VLNnSMnMWStrky5FGR4gQrGAB9HuqUhV3oTDxSbZBUSNhWqmhSgmdbbeMLpa6F57ffDpz7KFWWh79ZdK",
  "key18": "3cj3Vp4LEHdWftiShDfSnAhTcAJFevckW1aYEJKnm3YFpTqe2eRfnc1cXzwAGuyKa32DWGxm73tUCfM4hxRWm7Ho",
  "key19": "5zw6kUrhT2GtTZ4dYxD82qfje1X3nV9gAXB5X5YVsxhG7jobKkdQYx2jxHKfGbaKttWjcbMGzLMdX2cuHsFJGqeM",
  "key20": "2tQeC8eUgG1vJhVoHHYZdWJC9dYrJcSmcoK1xyZ6KSiigGR5bsE19nFsR4tRyVPeKj7CxRk5xD9r3gKXiMXDSAie",
  "key21": "5mjpF9yhrkHs4xrXWsExeeN4QSkXNB6AytQ91tsqhAicJe86yiZ4B9j5FwYq2JTm7AFP8ssxr674xpNtxQEM9E6w",
  "key22": "475eGNETf4hY8snT6d7Pa2HormazMd5csXWi2Wi53psy32SMverhAFgY1YXT1Xxy6nxB2neRm36nKzQu9xSMs6en",
  "key23": "38nN4kavghi7kAUD4dbEcyCeeXvCGGGBgMXV1DJfsVZJHjc1SoicricHGsVABgpee5zAkKgYzVnnj9SrCcybP4zB",
  "key24": "4fncg2Aqtr2nAj4XGEfF4zctnB8zYHCeUKYs5adh4GEpT7JAbqXXX1snzT3dKHQWmYZxLKvc88cXQNUjN3p5BQur",
  "key25": "455Eb7H7szT4ea8Mk1etsa2sYcSoLyzngq6DRMzdHK9f6bkyY21putJSVLcTBPAUpqyWQRUwek8UtzpcDmVTr6rF",
  "key26": "65MYzd1tYt8wgXbuSQs6q4NCPv7EntQe41DPLRfSKbvqkBF8U9pAAHtDcWHGv6qn2rVTR1gJWXo1HEGxD8izgbeE",
  "key27": "1248jpFAotKZL7X4NdKQGqX3SicPss746HVdRNny3JLHvrUW5BK1Ws6x3krs6KKu9A4KRiHzBXmymDE5cJQYhSqt",
  "key28": "3PRYFG86nupnXz7hoGYU2MvMSSrSEJjdVFG2kqZFLPBQeMhgDbpwizycDEPH44uMq7BZY6g94GFm9NXhTXeoPsQ8"
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
